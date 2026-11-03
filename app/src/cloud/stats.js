/**
 * Statistiques d'usage ANONYMES (voir outils/sql/statistiques_usage.sql).
 *
 * On envoie seulement « +1 » à un compteur du jour : « visite », « ecran » (nom de l'écran),
 * « chapitre » (identifiant du chapitre ouvert). Aucun identifiant d'élève ni d'appareil, aucun cookie.
 * Une visite est comptée au plus une fois par jour et par appareil (date gardée sur l'appareil).
 * Tout échec est ignoré : les statistiques ne doivent jamais gêner l'élève.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './supabase';
import { detailValide, evenementValide } from '../../lib/statsUsage';

const CLE_DERNIERE_VISITE = 'kamal-campus/stats/derniere-visite';

function jourLocal(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export function compterUsage(evenement, detail = '') {
  if (!evenementValide(evenement) || !detailValide(detail)) return;
  try {
    supabase.rpc('compter_usage', { p_evenement: evenement, p_detail: detail }).then(() => {}, () => {});
  } catch {
    // ignoré
  }
}

/** Compte une visite, au plus une fois par jour sur cet appareil. */
export async function compterVisite() {
  try {
    const aujourdhui = jourLocal();
    const derniere = await AsyncStorage.getItem(CLE_DERNIERE_VISITE);
    if (derniere === aujourdhui) return;
    await AsyncStorage.setItem(CLE_DERNIERE_VISITE, aujourdhui);
    compterUsage('visite', '');
  } catch {
    // ignoré
  }
}
