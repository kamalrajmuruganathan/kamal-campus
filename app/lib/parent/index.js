/**
 * Espace parent — résumé lisible de la progression d'un enfant.
 *
 * Entrée : le profil synchronisé dans Supabase (colonne `data` de `profils`,
 * ou le sous-ensemble renvoyé par la fonction `suivi_enfant`). Sortie : des
 * indicateurs prêts à afficher (XP, niveau, série, taux de réussite, matières,
 * activité des 7 derniers jours…). Module pur et testable : aucune dépendance
 * à React ni au réseau ; la date du jour est injectée.
 *
 * Limite connue : l'historique ne garde que les 30 dernières sessions et ne
 * mesure pas leur durée. L'activité de la semaine est donc comptée en sessions
 * et en XP (pas en minutes), et marquée « partielle » si l'historique est plein.
 */

import { niveauPourXp } from '../progression.js';
import { serieAffichee } from '../serie.js';

const TAILLE_HISTORIQUE = 30; // MAX_HISTORIQUE de src/progression/Contexte.js
const SEUIL_MAITRISE = 0.8;
const SEUIL_A_REVOIR = 0.5;
const pad2 = (n) => String(n).padStart(2, '0');

/** Nombre fini ≥ 0, sinon 0. */
function entier(x) {
  const n = Number(x);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

/** Recule de n jours une date « AAAA-MM-JJ » (calcul en UTC, sans décalage). */
export function reculerJour(jour, n) {
  const [a, m, j] = String(jour).split('-').map(Number);
  const d = new Date(Date.UTC(a, (m || 1) - 1, j || 1));
  d.setUTCDate(d.getUTCDate() - n);
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

/** Jour local « AAAA-MM-JJ » d'une date ISO (null si illisible). */
export function jourLocal(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/**
 * Activité des `nbJours` derniers jours (aujourd'hui inclus), du plus ancien au plus récent.
 * @returns {{jours: {date, sessions, xp}[], sessions, xp, joursActifs, partielle}}
 */
export function activiteRecente(historique, aujourdhui, nbJours = 7, jourDe = jourLocal) {
  const liste = Array.isArray(historique) ? historique : [];
  const parJour = {};
  for (const h of liste) {
    const d = jourDe(h && h.date);
    if (!d) continue;
    const e = (parJour[d] = parJour[d] || { sessions: 0, xp: 0 });
    e.sessions += 1;
    e.xp += entier(h.points);
  }
  const jours = [];
  for (let i = nbJours - 1; i >= 0; i -= 1) {
    const date = reculerJour(aujourdhui, i);
    jours.push({ date, sessions: parJour[date]?.sessions || 0, xp: parJour[date]?.xp || 0 });
  }
  const debut = jours[0].date;
  // Historique plein et dont la plus ancienne session est encore dans la période :
  // des sessions plus anciennes de la semaine ont pu être effacées.
  const plusAncien = liste.length ? jourDe(liste[liste.length - 1]?.date) : null;
  const partielle = liste.length >= TAILLE_HISTORIQUE && !!plusAncien && plusAncien >= debut;
  return {
    jours,
    sessions: jours.reduce((s, j) => s + j.sessions, 0),
    xp: jours.reduce((s, j) => s + j.xp, 0),
    joursActifs: jours.filter((j) => j.sessions > 0).length,
    partielle,
  };
}

/**
 * Matières les plus travaillées, d'après les XP par matière, les sessions de
 * l'historique et les chapitres travaillés (si `matiereDeChapitre` est fourni).
 * @returns {{matiere, libelle, xp, sessions, chapitres}[]} trié du plus au moins travaillé
 */
export function matieresTravaillees(data, { matiereDeChapitre = null, libelleMatiere = (m) => m } = {}) {
  const parMat = {};
  const prendre = (m) => (parMat[m] = parMat[m] || { matiere: m, xp: 0, sessions: 0, chapitres: 0 });

  for (const [m, xp] of Object.entries(data?.xpParMatiere || {})) {
    if (m && entier(xp) > 0) prendre(m).xp += entier(xp);
  }
  for (const h of Array.isArray(data?.historique) ? data.historique : []) {
    if (h && h.matiere) prendre(h.matiere).sessions += 1;
  }
  if (typeof matiereDeChapitre === 'function') {
    for (const id of Object.keys(data?.chapitres || {})) {
      const m = matiereDeChapitre(id);
      if (m) prendre(m).chapitres += 1;
    }
  }
  return Object.values(parMat)
    .map((e) => ({ ...e, libelle: libelleMatiere(e.matiere) || e.matiere }))
    .sort((a, b) => b.xp - a.xp || b.chapitres - a.chapitres || b.sessions - a.sessions
      || a.libelle.localeCompare(b.libelle, 'fr'));
}

/**
 * Résumé complet pour la fiche de suivi du parent.
 * @param {object|null} data  profil de l'enfant
 * @param {{aujourdhui: string, matiereDeChapitre?, libelleMatiere?, jourDe?, nbRecents?}} options
 */
export function resumeEnfant(data, options = {}) {
  const {
    aujourdhui,
    matiereDeChapitre = null,
    libelleMatiere = (m) => m,
    jourDe = jourLocal,
    nbRecents = 5,
  } = options;
  const p = data && typeof data === 'object' ? data : {};
  const historique = Array.isArray(p.historique) ? p.historique : [];

  const xp = entier(p.xp);
  const niv = niveauPourXp(xp);

  const reponsesTotal = entier(p.reponsesTotal);
  const reponsesJustes = Math.min(entier(p.reponsesJustes), reponsesTotal);

  const chapitres = Object.entries(p.chapitres || {})
    .filter(([, c]) => c && typeof c === 'object')
    .map(([id, c]) => ({
      id,
      titre: c.titre || id,
      score: Math.max(0, Math.min(1, Number(c.meilleurScore) || 0)),
      tentatives: entier(c.tentatives),
    }));

  const recents = historique.slice(0, nbRecents).map((h) => ({
    date: h.date || null,
    jour: jourDe(h.date),
    titre: h.titre || 'Session',
    justes: entier(h.justes),
    total: entier(h.total),
    points: entier(h.points),
    matiere: h.matiere || null,
    libelleMatiere: h.matiere ? (libelleMatiere(h.matiere) || h.matiere) : null,
  }));

  const derniereDate = historique.length ? historique[0].date || null : null;
  const dernierJour = jourDe(derniereDate);
  let joursDepuis = null;
  if (dernierJour && aujourdhui) {
    joursDepuis = Math.round((Date.parse(`${aujourdhui}T00:00:00Z`) - Date.parse(`${dernierJour}T00:00:00Z`)) / 86400000);
    if (joursDepuis < 0) joursDepuis = 0;
  }

  const objectif = entier(p.objectifQuotidien) || 50;
  const xpAujourdhui = p.jourCourant && p.jourCourant === aujourdhui ? entier(p.xpDuJour) : 0;

  return {
    prenom: typeof p.prenom === 'string' && p.prenom.trim() ? p.prenom.trim() : null,
    vide: xp === 0 && historique.length === 0 && chapitres.length === 0,
    xp,
    niveau: niv.niveau,
    rang: niv.titre,
    progressionNiveau: niv.progression,
    xpRestant: niv.xpRestant,
    serieJours: aujourdhui ? serieAffichee(p.dernierJourValide || null, entier(p.serieJours), aujourdhui) : entier(p.serieJours),
    meilleureSerieJours: entier(p.meilleureSerieJours),
    objectifQuotidien: objectif,
    xpAujourdhui,
    objectifAtteint: xpAujourdhui >= objectif,
    qcmTermines: entier(p.qcmTermines),
    sansFautes: entier(p.sansFautes),
    reponsesJustes,
    reponsesTotal,
    tauxReussite: reponsesTotal > 0 ? reponsesJustes / reponsesTotal : null,
    flashcardsRevues: entier(p.flashcardsRevues),
    enigmesResolues: entier(p.enigmesResolues),
    exercicesReussis: Object.values(p.exosReussis && typeof p.exosReussis === 'object' ? p.exosReussis : {})
      .reduce((n, liste) => n + (Array.isArray(liste) ? liste.length : 0), 0),
    chapitresTravailles: chapitres.length,
    chapitresMaitrises: chapitres.filter((c) => c.score >= SEUIL_MAITRISE).length,
    aRevoir: chapitres
      .filter((c) => c.score < SEUIL_A_REVOIR)
      .sort((a, b) => a.score - b.score)
      .slice(0, 5),
    matieres: matieresTravaillees(p, { matiereDeChapitre, libelleMatiere }).slice(0, 5),
    recents,
    derniereActivite: derniereDate,
    joursDepuisDerniereActivite: joursDepuis,
    semaine: aujourdhui ? activiteRecente(historique, aujourdhui, 7, jourDe) : null,
  };
}

/** Pourcentage arrondi (« 83 % »), ou « — » si pas de donnée. */
export function pourcentage(x) {
  if (x == null || !Number.isFinite(x)) return '—';
  return `${Math.round(x * 100)}\u00a0%`;
}

/** Texte de la dernière activité : « aujourd’hui », « hier », « il y a 3 jours »… */
export function texteDerniereActivite(joursDepuis) {
  if (joursDepuis == null) return 'aucune activité enregistrée';
  if (joursDepuis === 0) return 'aujourd’hui';
  if (joursDepuis === 1) return 'hier';
  return `il y a ${joursDepuis} jours`;
}
