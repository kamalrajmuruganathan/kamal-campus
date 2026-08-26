/**
 * Persistance de la progression sur l'appareil (hors ligne, sans compte).
 *
 * On stocke un seul objet JSON dans AsyncStorage. Toute la lecture/écriture
 * passe par ici : les écrans ne touchent jamais au stockage directement.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const CLE = 'kamal-campus/progression/v1';

/** Profil vierge — la forme de référence de toutes les données de progression. */
export function profilVide() {
  return {
    version: 1,
    xp: 0,
    xpParMatiere: {}, // { mathematiques: n, 'physique-chimie': n }
    qcmTermines: 0,
    reponsesJustes: 0,
    reponsesTotal: 0,
    sansFautes: 0,
    meilleureSerie: 0,
    chapitres: {}, // { [idChapitre]: { titre, meilleurScore, tentatives } }
    historique: [], // [{ date, titre, justes, total, points, matiere }] — récents d'abord
  };
}

/** Fusionne un profil chargé (potentiellement partiel/ancien) avec la forme vierge. */
function normaliser(brut) {
  const base = profilVide();
  if (!brut || typeof brut !== 'object') return base;
  return {
    ...base,
    ...brut,
    xpParMatiere: { ...base.xpParMatiere, ...(brut.xpParMatiere || {}) },
    chapitres: { ...base.chapitres, ...(brut.chapitres || {}) },
    historique: Array.isArray(brut.historique) ? brut.historique : [],
  };
}

/** Charge le profil ; renvoie un profil vierge si rien n'est stocké ou en cas d'erreur. */
export async function chargerProfil() {
  try {
    const texte = await AsyncStorage.getItem(CLE);
    if (!texte) return profilVide();
    return normaliser(JSON.parse(texte));
  } catch {
    return profilVide();
  }
}

/** Enregistre le profil. Les erreurs d'écriture sont avalées (mode hors ligne, best-effort). */
export async function sauverProfil(profil) {
  try {
    await AsyncStorage.setItem(CLE, JSON.stringify(profil));
  } catch {
    // Pas d'espace / stockage indisponible : on ne casse pas l'appli pour ça.
  }
}

/** Efface toute la progression (bouton « réinitialiser »). */
export async function effacerProfil() {
  try {
    await AsyncStorage.removeItem(CLE);
  } catch {
    // idem
  }
}
