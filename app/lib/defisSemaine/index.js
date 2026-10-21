/**
 * Défis de la semaine — logique pure.
 *
 * Chaque lundi, 3 défis sont tirés de façon DÉTERMINISTE à partir de la date du
 * lundi : tous les élèves ont les mêmes défis la même semaine (seule la cible
 * change entre l'école primaire et le collège/lycée).
 *
 * L'avancement vient :
 *  - d'un petit compteur hebdomadaire `profil.semaine = { debut, compteurs, jours,
 *    recompenses }`, remis à zéro dès que la semaine change (lundi) ;
 *  - de données déjà datées du profil : XP de la semaine (`profil.ligue`), erreurs
 *    du carnet maîtrisées (`profil.carnetMaitriseesJours`).
 *
 * Un défi réussi rapporte un bonus d'XP UNE seule fois : son id est noté dans
 * `semaine.recompenses`. Dates « AAAA-MM-JJ », injectées par l'appelant.
 */

import { debutSemaine } from '../ligue/index.js';

export const NB_DEFIS = 3;
const NBSP = ' ';
const NIVEAUX_PRIMAIRE = new Set(['cp', 'ce1', 'ce2', 'cm1', 'cm2']);

/** 'primaire' (CP → CM2) ou 'secondaire' (6e → terminale, ou niveau inconnu). */
export function groupeNiveau(niveau) {
  return NIVEAUX_PRIMAIRE.has(niveau) ? 'primaire' : 'secondaire';
}

const n = (x) => `${x}${NBSP}`;

/**
 * Catalogue. `famille` : deux défis de la même famille ne sont jamais tirés la
 * même semaine. `cible` : { primaire, secondaire }. `bonus` : XP gagnés.
 */
export const CATALOGUE = [
  { id: 'exos', famille: 'exos', icone: '✏️', cible: { primaire: 8, secondaire: 15 }, bonus: 40,
    texte: (c) => `Réussis ${n(c)}exercices` },
  { id: 'qcm', famille: 'qcm', icone: '📚', cible: { primaire: 5, secondaire: 8 }, bonus: 30,
    texte: (c) => `Termine ${n(c)}QCM` },
  { id: 'qcm80', famille: 'qcm', icone: '🎯', cible: { primaire: 3, secondaire: 5 }, bonus: 40,
    texte: (c) => `Termine ${n(c)}QCM avec au moins 80${NBSP}%` },
  { id: 'sansFaute', famille: 'qcm', icone: '✨', cible: { primaire: 1, secondaire: 2 }, bonus: 40,
    texte: (c) => (c === 1 ? 'Réussis un QCM sans aucune erreur' : `Réussis ${n(c)}QCM sans aucune erreur`) },
  { id: 'dictees', famille: 'dictees', icone: '✍️', cible: { primaire: 2, secondaire: 2 }, bonus: 30,
    texte: (c) => (c === 1 ? 'Fais une dictée' : `Fais ${n(c)}dictées`) },
  { id: 'cartes', famille: 'cartes', icone: '🃏', cible: { primaire: 20, secondaire: 30 }, bonus: 30,
    texte: (c) => `Révise ${n(c)}cartes` },
  { id: 'carnet', famille: 'carnet', icone: '📒', cible: { primaire: 2, secondaire: 3 }, bonus: 40,
    texte: (c) => (c === 1 ? 'Maîtrise une erreur de ton carnet' : `Maîtrise ${n(c)}erreurs de ton carnet`) },
  { id: 'jours', famille: 'jours', icone: '🔥', cible: { primaire: 3, secondaire: 4 }, bonus: 40,
    texte: (c) => `Travaille ${n(c)}jours différents` },
  { id: 'xp', famille: 'xp', icone: '⚡', cible: { primaire: 200, secondaire: 300 }, bonus: 30,
    texte: (c) => `Gagne ${n(c)}XP` },
  { id: 'enigmes', famille: 'enigmes', icone: '🧩', cible: { primaire: 2, secondaire: 3 }, bonus: 30,
    texte: (c) => `Résous ${n(c)}énigmes` },
];

const PAR_ID = new Map(CATALOGUE.map((d) => [d.id, d]));

// Générateur pseudo-aléatoire déterministe (hash de chaîne → mulberry32).
function rngDepuis(chaine) {
  let h = 2166136261;
  for (let i = 0; i < chaine.length; i += 1) h = Math.imul(h ^ chaine.charCodeAt(i), 16777619);
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Les 3 défis (ids) de la semaine qui contient `jour` : mêmes défis pour tous,
 * familles toutes différentes.
 */
export function idsDefisDeLaSemaine(jour) {
  const lundi = debutSemaine(jour);
  const rand = rngDepuis(`defis#${lundi}`);
  const pool = [...CATALOGUE];
  const choisis = [];
  while (choisis.length < NB_DEFIS && pool.length) {
    const i = Math.floor(rand() * pool.length);
    const d = pool[i];
    choisis.push(d.id);
    for (let k = pool.length - 1; k >= 0; k -= 1) if (pool[k].famille === d.famille) pool.splice(k, 1);
  }
  return choisis;
}

// ── Compteur hebdomadaire ───────────────────────────────────────────────────

/** État vierge pour la semaine de `jour`. */
export function semaineVide(jour) {
  return { debut: debutSemaine(jour), compteurs: {}, jours: [], recompenses: [] };
}

/** Le suivi de la semaine en cours (remis à zéro si `semaine` date d'une semaine passée). */
export function semaineCourante(semaine, jour) {
  const lundi = debutSemaine(jour);
  if (!semaine || typeof semaine !== 'object' || semaine.debut !== lundi) return semaineVide(jour);
  return {
    debut: lundi,
    compteurs: { ...(semaine.compteurs || {}) },
    jours: Array.isArray(semaine.jours) ? [...semaine.jours] : [],
    recompenses: Array.isArray(semaine.recompenses) ? [...semaine.recompenses] : [],
  };
}

/**
 * Ajoute une activité : `increments` = { exos: 1, qcm: 1, … } (valeurs > 0 seulement).
 * Le jour est noté comme « jour actif » dès qu'un compteur augmente.
 */
export function compterSemaine(semaine, jour, increments = {}) {
  const s = semaineCourante(semaine, jour);
  let actif = false;
  for (const [cle, v] of Object.entries(increments || {})) {
    const x = Number(v);
    if (!(x > 0)) continue;
    s.compteurs[cle] = (s.compteurs[cle] || 0) + x;
    actif = true;
  }
  if (actif && !s.jours.includes(jour)) s.jours.push(jour);
  return s;
}

/** Fusion de deux appareils : même semaine → max par compteur, unions ; sinon la plus récente. */
export function fusionnerSemaines(a, b) {
  const okA = a && typeof a === 'object' && a.debut;
  const okB = b && typeof b === 'object' && b.debut;
  if (!okA) return okB ? b : a ?? b;
  if (!okB) return a;
  if (a.debut !== b.debut) return String(a.debut) > String(b.debut) ? a : b;
  const compteurs = { ...(a.compteurs || {}) };
  for (const [k, v] of Object.entries(b.compteurs || {})) compteurs[k] = Math.max(compteurs[k] || 0, Number(v) || 0);
  return {
    debut: a.debut,
    compteurs,
    jours: [...new Set([...(a.jours || []), ...(b.jours || [])])].sort(),
    recompenses: [...new Set([...(a.recompenses || []), ...(b.recompenses || [])])],
  };
}

// ── Avancement ──────────────────────────────────────────────────────────────

/** Valeur actuelle d'un défi pour la semaine de `jour`. */
function valeurDefi(id, profil, s, jour) {
  const c = s.compteurs;
  switch (id) {
    case 'jours': return s.jours.length;
    case 'xp': {
      const l = profil?.ligue;
      return l && l.semaine === s.debut ? Number(l.xpSemaine) || 0 : 0;
    }
    case 'carnet': {
      let total = 0;
      for (const [j, v] of Object.entries(profil?.carnetMaitriseesJours || {})) {
        if (j >= s.debut && j <= jour) total += Number(v) || 0;
      }
      return total;
    }
    default: return Number(c[id]) || 0;
  }
}

/**
 * Les 3 défis de la semaine avec leur avancement.
 * → [{ id, icone, texte, cible, valeur, progres (0..1), fait, recompense (bonus déjà versé), bonus }]
 */
export function defisDeLaSemaine(profil, jour) {
  const s = semaineCourante(profil?.semaine, jour);
  const groupe = groupeNiveau(profil?.niveauParDefaut);
  return idsDefisDeLaSemaine(jour).map((id) => {
    const d = PAR_ID.get(id);
    const cible = d.cible[groupe];
    const brut = valeurDefi(id, profil, s, jour);
    return {
      id,
      icone: d.icone,
      texte: d.texte(cible),
      cible,
      valeur: Math.min(brut, cible),
      progres: Math.max(0, Math.min(1, brut / cible)),
      fait: brut >= cible,
      recompense: s.recompenses.includes(id),
      bonus: d.bonus,
    };
  });
}

/** « 2/3 » : nombre de défis réussis cette semaine. */
export function nombreReussis(defis) {
  return defis.filter((d) => d.fait).length;
}

/**
 * Bonus à verser maintenant : défis réussis dont le bonus n'a pas encore été versé.
 * → null, ou { points, defis: [{id, icone, texte, bonus}], semaine (avec les récompenses notées) }.
 */
export function bonusAVerser(profil, jour) {
  const defis = defisDeLaSemaine(profil, jour).filter((d) => d.fait && !d.recompense);
  if (!defis.length) return null;
  const s = semaineCourante(profil?.semaine, jour);
  s.recompenses = [...s.recompenses, ...defis.map((d) => d.id)];
  return {
    points: defis.reduce((t, d) => t + d.bonus, 0),
    defis: defis.map(({ id, icone, texte, bonus }) => ({ id, icone, texte, bonus })),
    semaine: s,
  };
}

/**
 * Applique le bonus à un profil (XP + récompenses notées + total des défis réussis).
 * Renvoie le même objet si rien n'est à verser (idempotent).
 */
export function appliquerBonusSemaine(profil, jour) {
  const b = bonusAVerser(profil, jour);
  if (!b) return profil;
  return {
    ...profil,
    xp: (profil.xp || 0) + b.points,
    semaine: b.semaine,
    defisSemaineReussis: (profil.defisSemaineReussis || 0) + b.defis.length,
  };
}

/** Jours restants avant lundi prochain (1 le dimanche). */
export function joursRestants(jour) {
  const lundi = debutSemaine(jour);
  const [a, m, j] = lundi.split('-').map(Number);
  const [a2, m2, j2] = String(jour).split('-').map(Number);
  const ecart = Math.round((Date.UTC(a2, m2 - 1, j2) - Date.UTC(a, m - 1, j)) / 86400000);
  return 7 - ecart;
}
