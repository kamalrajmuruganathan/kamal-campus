// app/src/cloud/defis.js
// Defis a distance — duel 1v1 asynchrone sur le QCM d'un chapitre.
// S'appuie sur la base "defis_supabase.sql" (table public.defis + fonctions RPC).
//
// Principe d'equite : les questions JOUEES par le createur sont figees et
// stockees telles quelles dans le defi (colonne "questions"). L'adversaire
// rejoue EXACTEMENT les memes (indispensable pour les chapitres a generateur,
// dont les questions sont fabriquees au hasard a chaque appel).
import { supabase } from './supabase';

// Id de l'utilisateur connecte (meme approche que chat.js / social.js).
export async function monId() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.id ?? null;
}

// Createur : cree le defi APRES avoir joue. "questions" = tableau des questions
// jouees (chaque objet : { enonce, choix:[...], reponse, explication, ... }).
export async function creerDefi({ chapitre, adversaireId, questions, score, total, tempsSec }) {
  const { data, error } = await supabase.rpc('creer_defi_ami', {
    p_chapitre: chapitre,
    p_adversaire: adversaireId,
    p_questions: questions,
    p_score: score,
    p_total: total,
    p_temps: tempsSec,
  });
  if (error) throw error;
  return data; // id du defi
}

// Adversaire : repond au defi. Renvoie la ligne mise a jour (avec "gagnant").
export async function repondreDefi({ defiId, score, total, tempsSec }) {
  const { data, error } = await supabase.rpc('repondre_defi_ami', {
    p_defi: defiId, p_score: score, p_total: total, p_temps: tempsSec,
  });
  if (error) throw error;
  return data;
}

// Adversaire : refuse un defi non encore joue.
export async function refuserDefi(defiId) {
  const { error } = await supabase.rpc('refuser_defi_ami', { p_defi: defiId });
  if (error) throw error;
}

// Tous mes defis (RLS ne renvoie que ceux ou je participe).
export async function listerMesDefis() {
  const { data, error } = await supabase
    .from('defis_amis')
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

// Range mes defis en 3 groupes pour l'UI.
export function classerDefis(defis, moi) {
  const aJouer = [], envoyes = [], termines = [];
  for (const d of defis) {
    if (d.statut === 'en_attente' && d.adversaire === moi) aJouer.push(d);
    else if (d.statut === 'en_attente' && d.createur === moi) envoyes.push(d);
    else termines.push(d);
  }
  return { aJouer, envoyes, termines };
}

// Issue d'un defi termine, vue de "moi" : 'gagne' | 'perdu' | 'egalite'.
export function issueDefi(d, moi) {
  if (d.statut !== 'termine') return null;
  if (d.gagnant == null) return 'egalite';
  return d.gagnant === moi ? 'gagne' : 'perdu';
}

// Temps reel : notifie quand un de mes defis change (ex: l'adversaire a fini).
export function ecouterDefis(moi, onChange) {
  const canal = supabase
    .channel('defis-amis-' + moi)
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'defis_amis' },
      (payload) => {
        const d = payload.new || payload.old || {};
        if (d.createur === moi || d.adversaire === moi) onChange(payload);
      })
    .subscribe();
  return () => supabase.removeChannel(canal);
}
