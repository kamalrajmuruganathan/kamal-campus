/**
 * Examen sur mesure — composition et notation (logique pure, testable).
 *
 * L'élève choisit une classe, une matière, des chapitres et un format ; on
 * fabrique un sujet qui mélange des questions de QCM (1 point) et des
 * exercices auto-corrigeables (2 points), réparti équitablement entre les
 * chapitres, SANS doublon, et reproductible : la même graine donne le même
 * sujet (générateur pseudo-aléatoire maison, pas de Math.random ici).
 *
 * La note est ramenée sur 20 (au demi-point), avec le détail par chapitre et
 * la liste des chapitres à revoir (moins de 60 % des points).
 */

import { appreciation } from './index.js';
import { comparerExercice } from '../autocorrection/index.js';

/** Barème. */
export const POINTS_QCM = 1;
export const POINTS_EXO = 2;

/** Seuil (taux de réussite) en dessous duquel un chapitre est « à revoir ». */
export const SEUIL_A_REVOIR = 0.6;

/** Nombre maximal d'examens gardés dans l'historique du profil. */
export const MAX_HISTORIQUE_EXAMENS = 30;

/** Formats proposés. */
export const FORMATS = [
  { id: 'express', nom: 'Express', minutes: 10, nbQcm: 8, nbExos: 2 },
  { id: 'standard', nom: 'Standard', minutes: 20, nbQcm: 12, nbExos: 4 },
  { id: 'long', nom: 'Long', minutes: 40, nbQcm: 20, nbExos: 8 },
];

/** Format par identifiant (Standard si inconnu). */
export function formatParId(id) {
  return FORMATS.find((f) => f.id === id) ?? FORMATS[1];
}

/** « 8 QCM + 2 exercices · 10 min » */
export function descriptionFormat(f) {
  const exos = `${f.nbExos} exercice${f.nbExos > 1 ? 's' : ''}`;
  return `${f.nbQcm} QCM + ${exos} · ${f.minutes} min`;
}

// ── Hasard reproductible ──────────────────────────────────────────────────────

/** Transforme une graine (nombre ou texte) en entier 32 bits. */
function versEntier(graine) {
  if (typeof graine === 'number' && Number.isFinite(graine)) return Math.floor(graine) >>> 0;
  const s = String(graine ?? '');
  let h = 2166136261; // FNV-1a
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Générateur pseudo-aléatoire (mulberry32) : renvoie une fonction qui donne
 * des nombres dans [0, 1[, toujours la même suite pour une même graine.
 */
export function creerAlea(graine) {
  let a = versEntier(graine);
  return function alea() {
    a = (a + 0x6d2b79f5) >>> 0;
    let x = a;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

/** Mélange (Fisher-Yates) une copie. */
function melanger(liste, rand) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Clé de doublon : l'énoncé, sans casse ni espaces superflus. */
function cle(enonce) {
  return String(enonce ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
}

/** Une question de QCM est-elle jouable ? */
function qcmValide(q) {
  return !!q && typeof q.enonce === 'string' && q.enonce.trim() !== ''
    && Array.isArray(q.choix) && q.choix.length >= 2
    && Number.isInteger(q.reponse) && q.reponse >= 0 && q.reponse < q.choix.length;
}

/**
 * Mélange les choix d'une question de QCM et recalcule l'indice de la bonne
 * réponse. Renvoie une copie (la question d'origine n'est pas modifiée).
 */
export function melangerChoix(q, rand) {
  const ordre = melanger(q.choix.map((_, i) => i), rand);
  return { ...q, choix: ordre.map((i) => q.choix[i]), reponse: ordre.indexOf(q.reponse) };
}

/**
 * Tire jusqu'à `n` éléments dans plusieurs réserves, chapitre par chapitre à
 * tour de rôle (écart d'au plus 1 entre chapitres tant que les réserves le
 * permettent), en sautant les doublons (`vus`, partagé).
 * @returns {Array<{chapitreId, element}>}
 */
function tirerEquilibre(reserves, n, vus) {
  const pris = [];
  const curseurs = reserves.map(() => 0);
  let progres = true;
  while (pris.length < n && progres) {
    progres = false;
    for (let r = 0; r < reserves.length && pris.length < n; r++) {
      const { chapitreId, elements } = reserves[r];
      while (curseurs[r] < elements.length) {
        const el = elements[curseurs[r]++];
        const k = cle(el.enonce);
        if (!k || vus.has(k)) continue;
        vus.add(k);
        pris.push({ chapitreId, element: el });
        progres = true;
        break;
      }
    }
  }
  return pris;
}

/**
 * Compose un examen.
 * @param {{
 *   chapitres: Array<{id:string, matiere?:string, questionsQcm?:Array, exercicesAuto?:Array}>,
 *   nbQcm:number, nbExos:number, graine:number|string
 * }} arg
 *   `exercicesAuto` ne doit contenir QUE des exercices vérifiables par la machine.
 * @returns {Array<{type:'qcm', chapitreId, matiere, points, question}
 *               |{type:'exo', chapitreId, matiere, points, exercice, exoId}>}
 *   Les QCM d'abord (mélangés), puis les exercices. S'il manque des exercices,
 *   on complète avec des QCM.
 */
export function composerExamen({ chapitres = [], nbQcm = 0, nbExos = 0, graine = 0 } = {}) {
  const rand = creerAlea(graine);
  const chaps = (Array.isArray(chapitres) ? chapitres : []).filter((c) => c && c.id);
  // Ordre de passage tiré au sort : les « restes » ne tombent pas toujours sur le premier chapitre.
  const ordre = melanger(chaps, rand);
  const vus = new Set();

  const reservesExos = ordre.map((c) => ({
    chapitreId: c.id,
    matiere: c.matiere ?? null,
    elements: melanger((c.exercicesAuto || []).filter((e) => e && cle(e.enonce)), rand),
  })).filter((r) => r.elements.length > 0);
  const exos = tirerEquilibre(reservesExos, Math.max(0, Math.floor(nbExos)), vus);

  const manque = Math.max(0, Math.floor(nbExos)) - exos.length;
  const reservesQcm = ordre.map((c) => ({
    chapitreId: c.id,
    matiere: c.matiere ?? null,
    elements: melanger((c.questionsQcm || []).filter(qcmValide), rand),
  })).filter((r) => r.elements.length > 0);
  const qcm = tirerEquilibre(reservesQcm, Math.max(0, Math.floor(nbQcm)) + manque, vus);

  const matiereDe = new Map(chaps.map((c) => [c.id, c.matiere ?? null]));
  const itemsQcm = melanger(qcm, rand).map(({ chapitreId, element }) => ({
    type: 'qcm',
    chapitreId,
    matiere: matiereDe.get(chapitreId),
    points: POINTS_QCM,
    question: melangerChoix(element, rand),
  }));
  const itemsExos = exos.map(({ chapitreId, element }) => ({
    type: 'exo',
    chapitreId,
    matiere: matiereDe.get(chapitreId),
    points: POINTS_EXO,
    exercice: element,
    exoId: element.exoId ?? (element.id != null ? String(element.id) : null),
  }));
  return [...itemsQcm, ...itemsExos];
}

// ── Notation ──────────────────────────────────────────────────────────────────

/** Arrondi au demi-point. */
export function arrondiDemi(x) {
  return Math.round((Number(x) || 0) * 2) / 2;
}

/** « 12,5 » (virgule décimale, pas de « ,0 »). */
export function formaterNote(x) {
  const n = arrondiDemi(x);
  return Number.isInteger(n) ? String(n) : String(n).replace('.', ',');
}

/** La réponse à un item est-elle juste ? (recalculé, jamais lu dans la réponse) */
export function itemJuste(item, rep) {
  if (!item || !rep) return false;
  if (item.type === 'qcm') return Number.isInteger(rep.choisi) && rep.choisi === item.question.reponse;
  if (item.type === 'exo') {
    const s = typeof rep.saisie === 'string' ? rep.saisie.trim() : '';
    return s !== '' && comparerExercice(s, item.exercice, item.matiere ?? null);
  }
  return false;
}

/** Une réponse a-t-elle été donnée ? */
export function estRepondu(item, rep) {
  if (!item || !rep) return false;
  if (item.type === 'qcm') return Number.isInteger(rep.choisi);
  return typeof rep.saisie === 'string' && rep.saisie.trim() !== '';
}

/**
 * Note un examen.
 * @param {Array} items  sortie de composerExamen
 * @param {Array<{choisi?:number, saisie?:string}|null>} reponses  même ordre
 * @returns {{note20:number, points:number, total:number, pourcent:number, appreciation:string,
 *   sansReponse:number, parChapitre:Object<string,{juste:number,total:number}>,
 *   aRevoir:string[], details:Array<{index:number, juste:boolean, repondu:boolean}>}}
 *   `parChapitre` compte des POINTS (barème) ; `aRevoir` : taux < 60 %, du plus faible au moins faible.
 */
export function noterExamen(items, reponses = []) {
  const liste = Array.isArray(items) ? items : [];
  const reps = Array.isArray(reponses) ? reponses : [];
  let points = 0;
  let total = 0;
  const parChapitre = {};
  const ordreChapitres = [];
  const details = liste.map((item, index) => {
    const rep = reps[index];
    const juste = itemJuste(item, rep);
    const repondu = estRepondu(item, rep);
    const p = Number(item?.points) || 0;
    total += p;
    if (juste) points += p;
    const id = item?.chapitreId;
    if (id != null) {
      if (!parChapitre[id]) { parChapitre[id] = { juste: 0, total: 0 }; ordreChapitres.push(id); }
      parChapitre[id].total += p;
      if (juste) parChapitre[id].juste += p;
    }
    return { index, juste, repondu };
  });
  const note20 = total > 0 ? arrondiDemi((points / total) * 20) : 0;
  const pourcent = total > 0 ? Math.round((points / total) * 100) : 0;
  const taux = (id) => (parChapitre[id].total ? parChapitre[id].juste / parChapitre[id].total : 0);
  const aRevoir = ordreChapitres
    .filter((id) => parChapitre[id].total > 0 && taux(id) < SEUIL_A_REVOIR)
    .map((id, rang) => ({ id, rang, taux: taux(id) }))
    .sort((a, b) => a.taux - b.taux || a.rang - b.rang)
    .map((x) => x.id);
  return {
    note20,
    points,
    total,
    pourcent,
    appreciation: appreciation(pourcent),
    sansReponse: details.filter((d) => !d.repondu).length,
    parChapitre,
    aRevoir,
    details,
  };
}

// ── Historique (profil.examens) ───────────────────────────────────────────────

/**
 * Ajoute un examen en tête de l'historique et garde les `max` plus récents.
 * Une entrée de même `id` est remplacée (pas de doublon si on enregistre deux fois).
 */
export function ajouterHistorique(liste, entree, max = MAX_HISTORIQUE_EXAMENS) {
  const base = (Array.isArray(liste) ? liste : []).filter((e) => e && e.id !== entree.id);
  return [entree, ...base].slice(0, Math.max(0, max));
}
