/**
 * Répétition espacée (SRS) — algorithme de mémorisation type SM-2, simplifié.
 *
 * Chaque carte a un état : nombre de réussites d'affilée (rep), intervalle en
 * jours, facilité (ease), et date d'échéance (due, « AAAA-MM-JJ »). Quand l'élève
 * juge une carte (« je savais » / « à revoir »), on recalcule l'intervalle : plus
 * il réussit, plus la carte revient tard (J+1, J+3, J+7, J+16…). Un échec la
 * ramène au lendemain. Pur et testable : aucune dépendance.
 */

const EASE_INIT = 2.5;
const EASE_MIN = 1.3;
const EASE_MAX = 2.8;

/** État de départ d'une carte jamais vue (due aujourd'hui par convention). */
export function etatInitial(aujourdhui = '1970-01-01') {
  return { rep: 0, interval: 0, ease: EASE_INIT, due: aujourdhui };
}

/** Ajoute `n` jours à une date « AAAA-MM-JJ » (calcul en UTC, sans fuseau). */
export function ajouterJours(dateStr, n) {
  const [a, m, j] = String(dateStr).split('-').map(Number);
  const d = new Date(Date.UTC(a, (m || 1) - 1, j || 1));
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** Compare deux dates « AAAA-MM-JJ » : <0 si a<b, 0 si égales, >0 si a>b. */
export function comparerDates(a, b) {
  return String(a).localeCompare(String(b));
}

/**
 * Recalcule l'état d'une carte après un jugement.
 * @param {object} etat état courant (ou etatInitial)
 * @param {boolean} su  l'élève a-t-il su la carte ?
 * @param {string} aujourdhui date du jour « AAAA-MM-JJ »
 * @returns {object} nouvel état
 */
export function planifier(etat, su, aujourdhui) {
  const base = etat && typeof etat === 'object' ? etat : etatInitial(aujourdhui);
  let { rep, interval, ease } = base;
  rep = Number(rep) || 0;
  interval = Number(interval) || 0;
  ease = Number(ease) || EASE_INIT;

  if (!su) {
    rep = 0;
    interval = 1;
    ease = Math.max(EASE_MIN, Math.round((ease - 0.2) * 100) / 100);
  } else {
    rep += 1;
    if (rep === 1) interval = 1;
    else if (rep === 2) interval = 3;
    else interval = Math.round(interval * ease);
    if (interval < 1) interval = 1;
    if (interval > 3650) interval = 3650; // plafond : 10 ans
    ease = Math.min(EASE_MAX, Math.round((ease + 0.1) * 100) / 100);
  }
  return { rep, interval, ease, due: ajouterJours(aujourdhui, interval) };
}

/** La carte est-elle à revoir aujourd'hui (ou en retard) ? */
export function estDue(etat, aujourdhui) {
  if (!etat) return true; // jamais vue → à voir
  return comparerDates(etat.due, aujourdhui) <= 0;
}

/**
 * Parmi une liste de clés de cartes, renvoie celles qui sont dues aujourd'hui,
 * triées par échéance la plus ancienne d'abord.
 * @param {object} carte  { [cle]: etat }
 * @param {string[]} cles clés candidates
 * @param {string} aujourdhui
 */
export function clesDues(carte, cles, aujourdhui) {
  const etats = carte || {};
  // Les cartes déjà vues et en retard passent avant les cartes jamais vues
  // (échéance manquante → repoussée en fin de tri).
  const echeance = (c) => (etats[c] && etats[c].due) || '9999-12-31';
  return cles
    .filter((c) => estDue(etats[c], aujourdhui))
    .sort((a, b) => comparerDates(echeance(a), echeance(b)));
}
