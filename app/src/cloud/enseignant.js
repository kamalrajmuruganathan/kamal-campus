// app/src/cloud/enseignant.js
// Espace enseignant : un professeur crée une classe, ses élèves la rejoignent avec un
// code, il donne des devoirs et voit les résultats. S'appuie sur
// outils/sql/espace_enseignant.sql (tables + fonctions RPC). Tant que ce SQL n'a pas
// été exécuté dans Supabase, chaque fonction lève une erreur au message clair
// (« Espace enseignant pas encore activé »), marquée `nonActive`.
//
// Envoi des résultats : à la fin d'un QCM ou d'un exercice (progression/Contexte.js),
// noterQcmPourDevoirs / noterExercicePourDevoirs envoient le résultat SEULEMENT si le
// chapitre a un devoir (petit cache gardé sur l'appareil, rafraîchi toutes les 6 h).
// Ces deux fonctions ne lèvent jamais d'erreur et ne bloquent rien.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './supabase';
import { estNonActive } from './parents';
import {
  normaliserCode, erreurCode, erreurPseudo, cacheDevoirs, chapitreConcerne, cachePerime, marquerFaitsQcm,
} from '../../lib/enseignant';

export const MESSAGE_NON_ACTIVE = 'Espace enseignant pas encore activé : le script outils/sql/espace_enseignant.sql doit d’abord être exécuté dans Supabase.';

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

// ── Côté enseignant ─────────────────────────────────────────────────────────

/** Crée une classe. Renvoie { id, code }. */
export async function creerClasse({ nom, niveau, enseignantNom }) {
  const data = await rpc('creer_classe', { p_nom: nom, p_niveau: niveau || null, p_enseignant_nom: enseignantNom || '' });
  if (!data?.id) throw new Error('Impossible de créer la classe, réessayez.');
  return data;
}

/** Classes créées par l'enseignant connecté. */
export async function listerMesClassesEnseignant() {
  const data = await rpc('mes_classes_enseignant');
  return (data || []).map((c) => ({
    id: c.id, nom: c.nom, niveau: c.niveau, enseignantNom: c.enseignant_nom || '', code: c.code,
    archivee: !!c.archivee, creeLe: c.cree_le, nbEleves: c.nb_eleves || 0, nbDevoirs: c.nb_devoirs || 0,
  }));
}

/** Renomme, change le nom affiché, archive ou rouvre une classe. */
export async function modifierClasse(id, { nom, enseignantNom, archivee }) {
  await rpc('modifier_classe', { p_classe: id, p_nom: nom, p_enseignant_nom: enseignantNom || '', p_archivee: !!archivee });
}

/** Nouveau code (l'ancien ne marche plus). */
export async function nouveauCodeClasse(id) {
  return rpc('nouveau_code_classe', { p_classe: id });
}

export async function supprimerClasse(id) {
  await rpc('supprimer_classe', { p_classe: id });
}

/** Données du tableau de bord : { classe, eleves, devoirs, resultats } (null si la classe n'est pas à moi). */
export async function lireTableauClasse(id) {
  const data = await rpc('tableau_classe', { p_classe: id });
  return data && typeof data === 'object' ? data : null;
}

/** L'enseignant retire un élève (identifiant de membre, pas de compte). */
export async function retirerEleve(membreId) {
  await rpc('retirer_eleve', { p_membre: membreId });
}

/** Donne un devoir. Renvoie l'identifiant du devoir. */
export async function creerDevoir({ classeId, chapitreId, type, nbExercices = 5, pourLe, consigne = '' }) {
  return rpc('creer_devoir', {
    p_classe: classeId, p_chapitre: chapitreId, p_type: type, p_nb_exercices: nbExercices, p_pour_le: pourLe, p_consigne: consigne,
  });
}

export async function supprimerDevoir(id) {
  await rpc('supprimer_devoir', { p_devoir: id });
}

// ── Côté élève ──────────────────────────────────────────────────────────────

/** Rejoint une classe avec son code. Renvoie { id, nom, deja }. */
export async function rejoindreClasse(code, pseudo) {
  const err = erreurCode(code) || erreurPseudo(pseudo);
  if (err) throw new Error(err);
  const data = await rpc('rejoindre_classe', { p_code: normaliserCode(code), p_pseudo: pseudo });
  if (!data?.id) throw new Error('Code inconnu. Vérifie les 6 caractères avec ton professeur.');
  rafraichirCacheDevoirs().catch(() => {});
  return data;
}

export async function quitterClasse(classeId) {
  await rpc('quitter_classe', { p_classe: classeId });
  rafraichirCacheDevoirs().catch(() => {});
}

export async function changerPseudoClasse(classeId, pseudo) {
  const err = erreurPseudo(pseudo);
  if (err) throw new Error(err);
  await rpc('changer_pseudo_classe', { p_classe: classeId, p_pseudo: pseudo });
}

/** Mes classes et mes devoirs : { classes, devoirs } (et met le cache à jour). */
export async function lireMesClasses() {
  const data = await rpc('mes_classes_eleve');
  const propre = { classes: data?.classes || [], devoirs: data?.devoirs || [] };
  await ecrireCache(propre);
  return propre;
}

// ── Cache des devoirs (sur l'appareil) et envoi des résultats ───────────────

const CLE_CACHE = 'kamal-campus/devoirs/v1/';
let memo = { userId: null, cache: null };
let desactive = false; // SQL pas encore exécuté : on n'insiste pas pendant cette session.
const abonnes = new Set();

async function monIdLocal() {
  try {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user?.id ?? null;
  } catch {
    return null;
  }
}

async function lireCache(userId) {
  if (memo.userId === userId && memo.cache) return memo.cache;
  try {
    const brut = await AsyncStorage.getItem(CLE_CACHE + userId);
    const cache = brut ? JSON.parse(brut) : null;
    memo = { userId, cache };
    return cache;
  } catch {
    return null;
  }
}

async function enregistrerCache(userId, cache) {
  memo = { userId, cache };
  for (const f of abonnes) { try { f(cache); } catch { /* rien */ } }
  try { await AsyncStorage.setItem(CLE_CACHE + userId, JSON.stringify(cache)); } catch { /* stockage indisponible */ }
}

async function ecrireCache(donnees) {
  const userId = await monIdLocal();
  if (!userId) return;
  await enregistrerCache(userId, cacheDevoirs(donnees, new Date().toISOString()));
}

/** Relit les devoirs depuis Supabase et met le cache à jour (renvoie le cache, ou null). */
export async function rafraichirCacheDevoirs() {
  if (desactive) return null;
  const userId = await monIdLocal();
  if (!userId) return null;
  try {
    await lireMesClasses();
    return memo.cache;
  } catch (e) {
    if (e?.nonActive) desactive = true;
    return null;
  }
}

/** Cache des devoirs de l'élève connecté (lecture locale, sans réseau). */
export async function cacheDevoirsLocal() {
  const userId = await monIdLocal();
  return userId ? lireCache(userId) : null;
}

/** Prévient `f(cache)` à chaque mise à jour du cache. Renvoie la fonction de désabonnement. */
export function ecouterCacheDevoirs(f) {
  abonnes.add(f);
  return () => abonnes.delete(f);
}

async function cachePourEnvoi() {
  if (desactive) return null;
  const userId = await monIdLocal();
  if (!userId) return null;
  let cache = await lireCache(userId);
  if (cachePerime(cache, new Date())) cache = (await rafraichirCacheDevoirs()) || cache;
  return cache ? { userId, cache } : null;
}

/** Fin d'un QCM de chapitre : envoie le résultat s'il y a un devoir. Ne lève jamais d'erreur. */
export async function noterQcmPourDevoirs(chapitreId, justes, total) {
  try {
    const n = Math.round(Number(total));
    const s = Math.round(Number(justes));
    if (!chapitreId || !(n >= 1 && n <= 40) || !(s >= 0 && s <= n)) return 0;
    const x = await cachePourEnvoi();
    if (!x || !chapitreConcerne(x.cache, chapitreId, 'qcm')) return 0;
    const touches = await rpc('rendre_devoir_qcm', { p_chapitre: chapitreId, p_score: s, p_total: n });
    if (touches > 0) await enregistrerCache(x.userId, marquerFaitsQcm(x.cache, chapitreId));
    return touches || 0;
  } catch (e) {
    if (e?.nonActive) desactive = true;
    return 0;
  }
}

/** Exercice vérifié (réussi ou raté) : envoie le résultat s'il y a un devoir. Ne lève jamais d'erreur. */
export async function noterExercicePourDevoirs(chapitreId, exoId, juste) {
  try {
    const id = String(exoId ?? '');
    if (!chapitreId || !/^[A-Za-z0-9_.-]{1,40}$/.test(id) || typeof juste !== 'boolean') return 0;
    const x = await cachePourEnvoi();
    if (!x || !chapitreConcerne(x.cache, chapitreId, 'exercice')) return 0;
    const touches = await rpc('rendre_devoir_exercice', { p_chapitre: chapitreId, p_exo: id, p_juste: juste });
    // Le devoir est peut-être terminé : on relit la liste (statut « fait » sur l'accueil).
    if (touches > 0) rafraichirCacheDevoirs().catch(() => {});
    return touches || 0;
  } catch (e) {
    if (e?.nonActive) desactive = true;
    return 0;
  }
}
