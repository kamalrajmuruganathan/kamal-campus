// Couche sociale : profils publics, amis, demandes. S'appuie sur Supabase + RLS.
import { supabase } from './supabase';
import { etatSemaine, doitPublier, trierClassement } from '../../lib/classement';
import { niveauPourXp } from '../../lib/progression';
import { dateLocale } from '../../lib/serie';
import { debutSemaine } from '../../lib/ligue';

async function moiId() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.id ?? null;
}
async function moiEmail() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.email ?? '';
}
function pseudoDepuisEmail(email) {
  const base = (email.split('@')[0] || 'eleve').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 16);
  return base || 'eleve';
}

export async function monProfilPublic() {
  const id = await moiId();
  if (!id) return null;
  const { data, error } = await supabase.from('profils_publics').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data;
}

export async function assurerProfilPublic() {
  const existant = await monProfilPublic();
  if (existant) return existant;
  const id = await moiId();
  const base = pseudoDepuisEmail(await moiEmail());
  for (let essai = 0; essai < 6; essai++) {
    const pseudo = essai === 0 ? base : `${base}${Math.floor(1000 + Math.random() * 9000)}`;
    const { data, error } = await supabase.from('profils_publics').insert({ id, pseudo }).select().maybeSingle();
    if (!error) return data;
    if (error.code !== '23505') throw error; // 23505 = pseudo deja pris -> on reessaie
  }
  throw new Error('Impossible de créer un pseudo unique, réessaie.');
}

export async function definirPseudo(pseudo) {
  const id = await moiId();
  const propre = pseudo.trim();
  if (propre.length < 3) throw new Error('Le pseudo doit faire au moins 3 caractères.');
  const { data, error } = await supabase.from('profils_publics').update({ pseudo: propre }).eq('id', id).select().maybeSingle();
  if (error) {
    if (error.code === '23505') throw new Error('Ce pseudo est déjà pris.');
    throw error;
  }
  return data;
}

export async function chercherParPseudo(q) {
  const id = await moiId();
  const terme = q.trim();
  if (terme.length < 2) return [];
  const { data, error } = await supabase
    .from('profils_publics').select('id, pseudo, avatar, niveau, xp')
    .ilike('pseudo', `%${terme}%`).neq('id', id).limit(20);
  if (error) throw error;
  return data ?? [];
}

export async function envoyerDemande(destinataireId) {
  const id = await moiId();
  const inserer = () => supabase.from('amities').insert({ demandeur: id, destinataire: destinataireId, statut: 'en_attente' });
  const { error } = await inserer();
  if (!error) return;
  if (error.code !== '23505') throw error;
  // Un lien existe déjà entre nous deux (dans un sens ou dans l'autre) : on explique lequel.
  const { data: liens, error: e2 } = await supabase.from('amities')
    .select('id, demandeur, statut')
    .or(`and(demandeur.eq.${id},destinataire.eq.${destinataireId}),and(demandeur.eq.${destinataireId},destinataire.eq.${id})`);
  if (e2) throw e2;
  const lien = (liens ?? [])[0];
  if (!lien) throw new Error('Demande déjà envoyée.');
  if (lien.statut === 'acceptee') throw new Error('Vous êtes déjà amis.');
  if (lien.statut === 'en_attente') {
    throw new Error(lien.demandeur === id
      ? 'Demande déjà envoyée.'
      : 'Cette personne t’a déjà envoyé une demande : accepte-la dans « Demandes reçues ».');
  }
  // Ancienne demande refusée : on l'efface, puis on la renvoie.
  const { error: e3 } = await supabase.from('amities').delete().eq('id', lien.id);
  if (e3) throw e3;
  const { error: e4 } = await inserer();
  if (e4) {
    // Si l'ancienne demande n'a pas pu être effacée (droits Supabase), l'insertion bute encore dessus.
    if (e4.code === '23505') throw new Error('Ta demande précédente a été refusée : impossible d’en renvoyer une pour le moment.');
    throw e4;
  }
}

export async function repondreDemande(amitieId, accepter) {
  const { error } = await supabase.from('amities')
    .update({ statut: accepter ? 'acceptee' : 'refusee', maj_le: new Date().toISOString() }).eq('id', amitieId);
  if (error) throw error;
}

export async function supprimerAmi(amitieId) {
  const { error } = await supabase.from('amities').delete().eq('id', amitieId);
  if (error) throw error;
}

export async function listerAmis() {
  const id = await moiId();
  const { data, error } = await supabase.from('amities')
    .select('id, demandeur, destinataire, statut').eq('statut', 'acceptee')
    .or(`demandeur.eq.${id},destinataire.eq.${id}`);
  if (error) throw error;
  const lignes = data ?? [];
  const autres = lignes.map((a) => (a.demandeur === id ? a.destinataire : a.demandeur));
  if (autres.length === 0) return [];
  const { data: profils, error: e2 } = await supabase.from('profils_publics').select('id, pseudo, avatar, niveau, xp').in('id', autres);
  if (e2) throw e2;
  const parId = Object.fromEntries((profils ?? []).map((p) => [p.id, p]));
  return lignes.map((a) => {
    const autreId = a.demandeur === id ? a.destinataire : a.demandeur;
    return { amitieId: a.id, ami: parId[autreId] ?? { id: autreId, pseudo: '(inconnu)' } };
  });
}

export async function listerDemandesRecues() {
  const id = await moiId();
  const { data, error } = await supabase.from('amities').select('id, demandeur').eq('statut', 'en_attente').eq('destinataire', id);
  if (error) throw error;
  const lignes = data ?? [];
  const ids = lignes.map((a) => a.demandeur);
  if (ids.length === 0) return [];
  const { data: profils, error: e2 } = await supabase.from('profils_publics').select('id, pseudo, avatar, niveau, xp').in('id', ids);
  if (e2) throw e2;
  const parId = Object.fromEntries((profils ?? []).map((p) => [p.id, p]));
  return lignes.map((a) => ({ amitieId: a.id, de: parId[a.demandeur] ?? { id: a.demandeur, pseudo: '(inconnu)' } }));
}

// Temps réel : prévient quand une amitié me concernant change (demande reçue, acceptée, retirée).
// Nécessite que la table soit publiée (outils/sql/realtime_amities.sql) ; sinon rien n'arrive
// et les écrans se contentent de leur rechargement périodique.
export function ecouterAmities(onChange) {
  let canal = null;
  let fini = false;
  moiId().then((moi) => {
    if (!moi || fini) return;
    canal = supabase
      .channel(`amities-${moi}-${Date.now()}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'amities' }, (payload) => {
        const a = payload.new && Object.keys(payload.new).length ? payload.new : (payload.old || {});
        // Une suppression ne transmet souvent que l'id : on recharge par prudence.
        if (!a.demandeur || a.demandeur === moi || a.destinataire === moi) onChange(payload);
      })
      .subscribe();
  }).catch(() => {});
  return () => { fini = true; if (canal) supabase.removeChannel(canal); };
}

// ─── Classement de la semaine entre amis ─────────────────────────────────────
// Les colonnes « xp_semaine » et « semaine » sont créées par outils/sql/classement_amis.sql.
// Tant que ce SQL n'a pas été exécuté, on publie et on classe sur les XP totaux, sans planter.

/** L'erreur Supabase vient-elle d'une colonne inconnue (SQL pas encore exécuté) ou d'un type refusé ? */
function erreurDeColonne(error) {
  if (!error) return false;
  if (['PGRST204', '42703', '22P02'].includes(error.code)) return true;
  return /column|colonne|schema cache/i.test(error.message || '');
}

/**
 * Publie mes XP dans ma ligne « profils_publics » : xp, niveau, xp_semaine, semaine.
 * Si les colonnes de la semaine n'existent pas encore, refait la mise à jour avec xp/niveau
 * (puis xp seul) au lieu d'échouer.
 * @returns {Promise<{ ok: boolean, avecSemaine: boolean }>}
 */
export async function publierScore(profil) {
  const id = await moiId();
  if (!id) return { ok: false, avecSemaine: false };
  await assurerProfilPublic(); // la ligne doit exister pour être mise à jour
  const xp = Math.max(0, Math.floor(Number(profil?.xp) || 0));
  const e = etatSemaine(profil, dateLocale(new Date()));
  const essais = [
    { xp, niveau: niveauPourXp(xp).niveau, xp_semaine: e.xpSemaine, semaine: e.semaineXp },
    { xp, niveau: niveauPourXp(xp).niveau },
    { xp },
  ];
  for (let i = 0; i < essais.length; i++) {
    const { error } = await supabase.from('profils_publics').update(essais[i]).eq('id', id);
    if (!error) return { ok: true, avecSemaine: i === 0 };
    if (!erreurDeColonne(error)) throw error;
  }
  return { ok: false, avecSemaine: false };
}

let dernierePublication = 0;
/** Comme publierScore, mais au plus une fois toutes les 5 minutes (sauf si `forcer`). Ne lève jamais d'erreur. */
export async function publierScoreSiBesoin(profil, { forcer = false } = {}) {
  const maintenant = Date.now();
  if (!forcer && !doitPublier(dernierePublication, maintenant)) return null;
  dernierePublication = maintenant;
  try { return await publierScore(profil); }
  catch { dernierePublication = 0; return null; } // on réessaiera à la prochaine occasion
}

/**
 * Classement de la semaine : moi + mes amis acceptés.
 * @returns {Promise<{ lignes: object[], avecSemaine: boolean, semaine: string, nbAmis: number }>}
 *   `lignes` triées (voir trierClassement) ; `avecSemaine` = false si le SQL n'est pas encore activé
 *   (le classement porte alors sur les XP totaux).
 * @param profilLocal  si fourni, ma ligne utilise mes XP locaux (plus frais que ceux publiés,
 *   la publication n'ayant lieu qu'au plus toutes les 5 minutes).
 */
export async function classementAmis(profilLocal = null) {
  const id = await moiId();
  const semaine = debutSemaine(dateLocale(new Date()));
  if (!id) return { lignes: [], avecSemaine: false, semaine, nbAmis: 0 };
  const { data, error } = await supabase.from('amities')
    .select('demandeur, destinataire').eq('statut', 'acceptee')
    .or(`demandeur.eq.${id},destinataire.eq.${id}`);
  if (error) throw error;
  const amis = [...new Set((data ?? []).map((a) => (a.demandeur === id ? a.destinataire : a.demandeur)))];
  const ids = [id, ...amis];

  let avecSemaine = true;
  let res = await supabase.from('profils_publics')
    .select('id, pseudo, avatar, niveau, xp, xp_semaine, semaine').in('id', ids);
  if (res.error && erreurDeColonne(res.error)) {
    avecSemaine = false;
    res = await supabase.from('profils_publics').select('id, pseudo, avatar, niveau, xp').in('id', ids);
  }
  if (res.error) throw res.error;
  let brut = res.data ?? [];
  if (profilLocal) {
    const e = etatSemaine(profilLocal, dateLocale(new Date()));
    const xp = Math.max(0, Math.floor(Number(profilLocal.xp) || 0));
    const local = { xp, xp_semaine: e.xpSemaine, semaine: e.semaineXp };
    brut = brut.some((l) => l.id === id)
      ? brut.map((l) => (l.id === id ? { ...l, ...local } : l))
      : [...brut, { id, pseudo: 'Moi', avatar: null, ...local }];
  }
  const lignes = trierClassement(brut, { moiId: id, semaine, avecSemaine });
  return { lignes, avecSemaine, semaine, nbAmis: amis.length };
}
