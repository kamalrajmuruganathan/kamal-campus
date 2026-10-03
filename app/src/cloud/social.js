// Couche sociale : profils publics, amis, demandes. S'appuie sur Supabase + RLS.
import { supabase } from './supabase';

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
