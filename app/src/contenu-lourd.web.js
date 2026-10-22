/**
 * FICHIER GÉNÉRÉ par scripts/generer-index.mjs — NE PAS MODIFIER À LA MAIN.
 * Contenu lourd, chargé à la demande (rien de tout cela n'est dans l'index) :
 *   chargerFiche(id)      → texte Markdown de la fiche
 *   chargerExercices(id)  → objet exercice.json (fusionné avec attendus.json)
 *   chargerQcm(id)        → objet qcm.json ({ questions }) ; { questions: [] } si le chapitre n'en a pas
 *   chargerCartes(id)     → objet flashcards.json ({ cartes }) ; { cartes: [] } si le chapitre n'en a pas
 *   chargerSujet(id)      → texte Markdown d'un sujet (SUJETS)
 *   chargerQuiz(id)       → objet quiz/<fichier>.json ({ questions… }) d'un QUIZ
 * Chaque fonction renvoie une promesse ; null = introuvable ou réseau indisponible.
 */

import { chapitreParId, SUJETS, QUIZ } from './contenu-index';

// Chapitres SANS exercices / QCM / cartes (listes courtes).
const SANS_EXERCICES = new Set([]);
const SANS_QCM = new Set([]);
const SANS_CARTES = new Set([]);
// Fichier de chaque sujet / quiz quand il diffère de son identifiant.
const FICHIER_SUJET = {};
const FICHIER_QUIZ = {};
const cache = new Map();

function dossierDe(id) {
  const c = chapitreParId(id);
  return c ? `${c.niveau}/${c.parcours}/${c.dossier}` : null;
}

// Dossier de l'appli (ex. /kamal-campus/app/) : on prend celui de la page, sans le nom d'écran éventuel.
function base() {
  try {
    const url = new URL(document.baseURI);
    const i = url.pathname.indexOf('/app/');
    const dossier = i >= 0 ? url.pathname.slice(0, i + 5) : url.pathname.replace(/[^/]*$/, '');
    return url.origin + dossier;
  } catch {
    return './';
  }
}

async function telecharger(chemin, enJson) {
  if (cache.has(chemin)) return cache.get(chemin);
  const promesse = fetch(base() + 'donnees/' + chemin)
    .then((r) => { if (!r.ok) throw new Error(String(r.status)); return enJson ? r.json() : r.text(); })
    .catch(() => { cache.delete(chemin); return null; });
  cache.set(chemin, promesse);
  return promesse;
}

export function chargerFiche(id) {
  const c = dossierDe(id);
  return c ? telecharger(c + '/fiche.md', false) : Promise.resolve(null);
}
/** Dossier d'un chapitre dans public/donnees (« niveau/parcours/dossier »), ou null. */
export function cheminDonnees(id) { return dossierDe(id); }
export function chargerExercices(id) {
  const c = dossierDe(id);
  return c && !SANS_EXERCICES.has(id) ? telecharger(c + '/exercice.json', true) : Promise.resolve(null);
}
export function chargerQcm(id) {
  const c = dossierDe(id);
  if (!c) return Promise.resolve(null);
  return SANS_QCM.has(id) ? Promise.resolve({ questions: [] }) : telecharger(c + '/qcm.json', true);
}
export function chargerCartes(id) {
  const c = dossierDe(id);
  if (!c) return Promise.resolve(null);
  return SANS_CARTES.has(id) ? Promise.resolve({ cartes: [] }) : telecharger(c + '/flashcards.json', true);
}
export function chargerSujet(id) {
  if (!SUJETS.some((s) => s.id === id)) return Promise.resolve(null);
  return telecharger('sujets/' + (FICHIER_SUJET[id] ?? id) + '.md', false);
}
export function chargerQuiz(id) {
  if (!QUIZ.some((q) => q.id === id)) return Promise.resolve(null);
  return telecharger('quiz/' + (FICHIER_QUIZ[id] ?? id) + '.json', true);
}
