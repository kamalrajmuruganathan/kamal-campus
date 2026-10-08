// app/src/cloud/parents.js
// Espace parent : un parent (avec son propre compte) suit la progression de son enfant.
// S'appuie sur outils/sql/espace_parent.sql (tables codes_parents, liens_parents
// + fonctions RPC). Tant que ce SQL n'a pas été exécuté dans Supabase, chaque
// fonction lève une erreur au message clair : « Espace parent pas encore activé ».
import { supabase } from './supabase';

export const MESSAGE_NON_ACTIVE = 'Espace parent pas encore activé : le script outils/sql/espace_parent.sql doit d’abord être exécuté dans Supabase.';

/** Vrai si l'erreur Supabase signale une fonction ou une table absente. */
export function estNonActive(error) {
  if (!error) return false;
  const code = String(error.code || '');
  if (['PGRST202', 'PGRST205', '42883', '42P01'].includes(code)) return true;
  const txt = String(error.message || '').toLowerCase();
  return /could not find the function|function .* does not exist|schema cache|relation .* does not exist/.test(txt);
}

/** Transforme une erreur Supabase en Error au message lisible. */
function erreurLisible(error) {
  if (estNonActive(error)) {
    const e = new Error(MESSAGE_NON_ACTIVE);
    e.nonActive = true;
    return e;
  }
  const txt = String(error?.message || '');
  if (/fetch|network/i.test(txt)) return new Error('Pas de connexion Internet pour le moment.');
  return new Error(txt || 'Erreur inattendue.');
}

async function rpc(nom, args) {
  const { data, error } = await supabase.rpc(nom, args);
  if (error) throw erreurLisible(error);
  return data;
}

// ── Côté élève ──────────────────────────────────────────────────────────────

/** Crée un nouveau code (6 caractères, valable 24 h) ; l'ancien est remplacé. */
export async function creerCodeParent() {
  const data = await rpc('creer_code_parent');
  const ligne = Array.isArray(data) ? data[0] : data;
  if (!ligne?.code) throw new Error('Impossible de créer un code, réessaie.');
  return { code: ligne.code, expireLe: ligne.expire_le };
}

/** Code encore valable de l'élève connecté, ou null. */
export async function monCodeParent() {
  const { data, error } = await supabase
    .from('codes_parents')
    .select('code, expire_le')
    .gt('expire_le', new Date().toISOString())
    .order('expire_le', { ascending: false })
    .limit(1);
  if (error) throw erreurLisible(error);
  const ligne = (data || [])[0];
  return ligne ? { code: ligne.code, expireLe: ligne.expire_le } : null;
}

/** Parents qui me suivent : [{ id, pseudo, creeLe }]. */
export async function listerMesParents() {
  const data = await rpc('mes_parents');
  return (data || []).map((p) => ({ id: p.id, pseudo: p.pseudo || 'Parent', creeLe: p.cree_le }));
}

/** L'élève retire un parent qui le suit. */
export async function retirerParent(parentId) {
  await rpc('retirer_parent', { p_parent: parentId });
}

// ── Côté parent ─────────────────────────────────────────────────────────────

/** Le parent saisit le code de son enfant. Renvoie l'id de l'enfant. */
export async function lierEnfant(code) {
  const propre = String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (propre.length !== 6) throw new Error('Le code doit comporter 6 caractères.');
  const id = await rpc('lier_enfant', { p_code: propre });
  if (!id) throw new Error('Code inconnu. Vérifiez les 6 caractères.');
  return id;
}

/** Enfants suivis : [{ id, nom, creeLe }] (nom = prénom, sinon pseudo). */
export async function listerMesEnfants() {
  const data = await rpc('mes_enfants');
  return (data || []).map((e) => ({
    id: e.id,
    pseudo: e.pseudo || null,
    prenom: e.prenom || null,
    nom: e.prenom || e.pseudo || 'Élève',
    creeLe: e.cree_le,
  }));
}

/** Résumé brut de la progression d'un enfant suivi (ou null s'il n'a rien synchronisé). */
export async function lireSuiviEnfant(enfantId) {
  const data = await rpc('suivi_enfant', { p_enfant: enfantId });
  return data && typeof data === 'object' ? data : null;
}

/** Le parent arrête de suivre un enfant. */
export async function delierEnfant(enfantId) {
  await rpc('delier_enfant', { p_enfant: enfantId });
}
