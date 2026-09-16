/**
 * Persistance de la progression : locale (hors ligne) + synchro cloud (Supabase).
 *
 * Modèle « offline-first » :
 *  - toute écriture va d'abord en local (source de vérité de la session) ;
 *  - puis, si un utilisateur est connecté, elle est poussée vers le cloud
 *    (avec un léger délai anti-spam) ;
 *  - à la connexion, `synchroniser()` tire le cloud et le FUSIONNE avec le local
 *    (aucune perte), puis renvoie le profil fusionné.
 *
 * La clé locale est propre à chaque compte : `.../v1/<userId>`.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../cloud/supabase';
import { fusionnerProfils } from '../cloud/fusion';

const PREFIXE = 'kamal-campus/progression/v1';

let utilisateurCourant = null; // userId de Supabase, ou null (invité)
let minuteurPush = null;

/** Définit l'utilisateur actif (appelé au démarrage du provider). */
export function definirUtilisateur(userId) {
  utilisateurCourant = userId || null;
}

function cle() {
  return utilisateurCourant ? `${PREFIXE}/${utilisateurCourant}` : PREFIXE;
}

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
    planning: [],
    srs: {},
    ligue: {},
    erreurs: [],
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

/** Charge le profil LOCAL ; renvoie un profil vierge si rien ou erreur. */
export async function chargerProfil() {
  try {
    const texte = await AsyncStorage.getItem(cle());
    if (!texte) return profilVide();
    return normaliser(JSON.parse(texte));
  } catch {
    return profilVide();
  }
}

async function sauverLocal(profil) {
  try {
    await AsyncStorage.setItem(cle(), JSON.stringify(profil));
  } catch {
    // Pas d'espace / stockage indisponible : on ne casse pas l'appli pour ça.
  }
}

/** Pousse le profil vers le cloud (silencieux si hors ligne ou non connecté). */
async function pousserCloud(profil) {
  if (!utilisateurCourant) return;
  try {
    await supabase.from('profils').upsert({ user_id: utilisateurCourant, data: profil });
  } catch {
    // Hors ligne : le prochain enregistrement réessaiera. Le local reste la référence.
  }
}

/** Programme un envoi cloud différé (anti-spam : ~1,5 s après la dernière écriture). */
function planifierPushCloud(profil) {
  if (!utilisateurCourant) return;
  if (minuteurPush) clearTimeout(minuteurPush);
  minuteurPush = setTimeout(() => {
    minuteurPush = null;
    pousserCloud(profil);
  }, 1500);
}

/** Enregistre le profil : local immédiat + push cloud différé. */
export async function sauverProfil(profil) {
  await sauverLocal(profil);
  planifierPushCloud(profil);
}

/** Lit le profil stocké dans le cloud pour l'utilisateur courant (ou null). */
async function tirerCloud() {
  if (!utilisateurCourant) return null;
  try {
    const { data, error } = await supabase
      .from('profils')
      .select('data')
      .eq('user_id', utilisateurCourant)
      .maybeSingle();
    if (error || !data) return null;
    return normaliser(data.data);
  } catch {
    return null;
  }
}

/**
 * Synchronise à la connexion : fusionne local + cloud (aucune perte),
 * sauvegarde le résultat en local et le repousse au cloud. Renvoie le profil final.
 */
export async function synchroniser() {
  const local = await chargerProfil();
  const cloud = await tirerCloud();
  if (!cloud) {
    pousserCloud(local);
    return local;
  }
  const fusionne = fusionnerProfils(local, cloud);
  await sauverLocal(fusionne);
  pousserCloud(fusionne);
  return fusionne;
}

/** Efface toute la progression (bouton « réinitialiser ») — local + cloud. */
export async function effacerProfil() {
  try {
    await AsyncStorage.removeItem(cle());
  } catch {
    // idem
  }
  pousserCloud(profilVide());
}
