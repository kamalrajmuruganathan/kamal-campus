// Messagerie entre amis (temps reel via Supabase Realtime).
import { supabase } from './supabase';

export async function monId() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.id ?? null;
}

export async function listerMessages(autreId) {
  const moi = await monId();
  const { data, error } = await supabase
    .from('messages')
    .select('id, expediteur, destinataire, contenu, cree_le')
    .or(`and(expediteur.eq.${moi},destinataire.eq.${autreId}),and(expediteur.eq.${autreId},destinataire.eq.${moi})`)
    .order('cree_le', { ascending: true })
    .limit(300);
  if (error) throw error;
  return data ?? [];
}

export async function envoyerMessage(destinataireId, contenu) {
  const moi = await monId();
  const texte = (contenu ?? '').trim();
  if (!texte) return null;
  const { data, error } = await supabase
    .from('messages')
    .insert({ expediteur: moi, destinataire: destinataireId, contenu: texte })
    .select().maybeSingle();
  if (error) throw error;
  return data;
}

export async function marquerLus(autreId) {
  const moi = await monId();
  await supabase.from('messages').update({ lu: true })
    .eq('destinataire', moi).eq('expediteur', autreId).eq('lu', false);
}

export function abonnerConversation(moi, autreId, onMessage) {
  const canal = supabase
    .channel(`conv-${autreId}-${Date.now()}`)
    .on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'messages', filter: `destinataire=eq.${moi}` },
      (payload) => { if (payload.new && payload.new.expediteur === autreId) onMessage(payload.new); })
    .subscribe();
  return () => supabase.removeChannel(canal);
}

