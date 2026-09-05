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
    flashcardsRevues: 0, // nombre de cartes vues (toutes sessions)
    flashcardsConnues: 0, // nombre de cartes marquées « je savais »
    enigmesResolues: 0, // énigmes réussies (toutes familles)
    favoris: [], // ids de chapitres mis en favori
    chapitres: {}, // { [idChapitre]: { titre, meilleurScore, tentatives } }
    historique: [], // [{ date, titre, justes, total, points, matiere }] — récents d'abord

    // Série de jours & objectif quotidien
    objectifQuotidien: 50, // XP à atteindre chaque jour
    jourCourant: null, // 'AAAA-MM-JJ' du jour suivi
    xpDuJour: 0, // XP gagnés aujourd'hui
    serieJours: 0, // jours consécutifs où l'objectif a été atteint
    meilleureSerieJours: 0,
    dernierJourValide: null, // dernier jour où l'objectif a été atteint

    // Onboarding & préférences
    onboardingFait: false,
    prenom: '',
    langue: 'fr', // langue de l'interface (fr/en/es/ar)
    themePref: 'systeme', // apparence : 'systeme' | 'clair' | 'sombre'
    tailleTexte: 'normale', // accessibilité : 'normale' | 'grande' | 'tres-grande'
    contrasteFort: false, // accessibilité : contraste renforcé (basse vision)
    vitesseParole: 'normal', // lecture à voix haute : 'lent' | 'normal' | 'rapide'
    voix: {}, // voix préférée par langue : { 'en-US': id, 'es-ES': id, 'de-DE': id }
    lectureAutoCartes: false, // lire automatiquement la carte quand on la retourne
    niveauParDefaut: null, // niveau choisi à l'onboarding (préselection accueil)
    dernierChapitre: null, // { id, titre } — pour « reprendre » sur l'accueil
    rappelActif: false,
    rappelHeure: '18:00', // 'HH:MM'
    // Emploi du temps de révision : créneaux hebdomadaires qui déclenchent une
    // notification. { id, jour:1..7 (lun..dim), heure:'HH:MM', matiere }
    planning: [],
    // Répétition espacée : état par carte. { [cle]: { rep, interval, ease, due } }
    srs: {},
    // Ligue hebdomadaire : { semaine, xpSemaine, palier, dernier }
    ligue: {},
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
    favoris: Array.isArray(brut.favoris) ? brut.favoris : [],
    historique: Array.isArray(brut.historique) ? brut.historique : [],
    planning: Array.isArray(brut.planning) ? brut.planning : [],
    voix: (brut.voix && typeof brut.voix === 'object') ? brut.voix : {},
    srs: (brut.srs && typeof brut.srs === 'object') ? brut.srs : {},
    ligue: (brut.ligue && typeof brut.ligue === 'object') ? brut.ligue : {},
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
