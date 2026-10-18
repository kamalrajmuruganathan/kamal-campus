// app/src/cloud/signalements.js
// Signaler une erreur (fiche, question de QCM, exercice) au professeur relecteur.
// S'appuie sur outils/sql/signalements.sql (table public.signalements).
// L'élève peut seulement ÉCRIRE : personne ne peut relire les signalements depuis
// l'appli (lecture réservée à Supabase : Table editor → signalements).
// Tant que le SQL n'a pas été exécuté, l'envoi échoue proprement : jamais de plantage.
import { supabase } from './supabase';
import { preparerSignalement, estTableAbsente, MESSAGE_ENVOYE, MESSAGE_ECHEC } from '../../lib/signalement';

// Id de l'utilisateur connecté, lu dans la session locale (pas d'appel réseau).
async function monIdLocal() {
  try {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user?.id ?? null;
  } catch {
    return null;
  }
}

/**
 * Envoie un signalement. Ne lève jamais d'erreur : renvoie
 * { ok: true, message } ou { ok: false, message, raison: 'invalide' | 'non_active' | 'echec' }.
 * Entrée : { chapitreId, niveau, type, cible, message, extrait }
 */
export async function envoyerSignalement(donnees) {
  const userId = await monIdLocal();
  const { ligne, erreur } = preparerSignalement({ ...donnees, userId });
  if (erreur) return { ok: false, raison: 'invalide', message: erreur };
  try {
    // Insertion sans lecture en retour : la table n'autorise aucune lecture publique.
    const { error } = await supabase.from('signalements').insert(ligne);
    if (error) {
      return { ok: false, raison: estTableAbsente(error) ? 'non_active' : 'echec', message: MESSAGE_ECHEC };
    }
    return { ok: true, message: MESSAGE_ENVOYE };
  } catch {
    return { ok: false, raison: 'echec', message: MESSAGE_ECHEC };
  }
}
