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
  throw new Error('Impossible de creer un pseudo unique, reessaie.');
}

export async function definirPseudo(pseudo) {
  const id = await moiId();
  const propre = pseudo.trim();
  if (propre.length < 3) throw new Error('Le pseudo doit faire au moins 3 caracteres.');
  const { data, error } = await supabase.from('profils_publics').update({ pseudo: propre }).eq('id', id).select().maybeSingle();
  if (error) {
    if (error.code === '23505') throw new Error('Ce pseudo est deja pris.');
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
  const { error } = await supabase.from('amities').insert({ demandeur: id, destinataire: destinataireId, statut: 'en_attente' });
  if (error) {
    if (error.code === '23505') throw new Error('Demande deja envoyee.');
    throw error;
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
