/**
 * Série de jours et objectif quotidien — logique pure (aucune dépendance).
 *
 * Idée « à la Duolingo » : l'élève se fixe un objectif d'XP par jour. Chaque
 * jour où il l'atteint prolonge sa SÉRIE (jours consécutifs). Rater un jour
 * casse la série. Tout est calculé à partir de dates au format 'AAAA-MM-JJ'
 * (locales), injectées par l'appelant — donc testable sans horloge réelle.
 */

const pad2 = (n) => String(n).padStart(2, '0');

/** Date locale d'un objet Date au format 'AAAA-MM-JJ'. */
export function dateLocale(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** Jour précédent (en 'AAAA-MM-JJ'), calculé en UTC pour éviter les décalages. */
export function veille(jour) {
  const [a, m, j] = jour.split('-').map(Number);
  const d = new Date(Date.UTC(a, m - 1, j));
  d.setUTCDate(d.getUTCDate() - 1);
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

/** `jour` suit-il immédiatement `precedent` ? */
export function estConsecutif(precedent, jour) {
  return !!precedent && veille(jour) === precedent;
}

/**
 * Série à AFFICHER : la série stockée n'est « vivante » que si le dernier jour
 * validé est aujourd'hui ou hier ; sinon elle est cassée et vaut 0.
 */
export function serieAffichee(dernierJourValide, serieJours, jour) {
  if (!dernierJourValide) return 0;
  if (dernierJourValide === jour || dernierJourValide === veille(jour)) return serieJours;
  return 0;
}

/**
 * Applique un gain d'XP à l'état quotidien.
 * @param {{objectifQuotidien, jourCourant, xpDuJour, serieJours, dernierJourValide, meilleureSerieJours}} etat
 * @param {number} points  XP gagnés maintenant
 * @param {string} jour    date du jour 'AAAA-MM-JJ'
 * @returns le nouvel état, plus `objectifAtteintMaintenant` (bool).
 */
export function appliquerXpJour(etat, points, jour) {
  let {
    objectifQuotidien, jourCourant, xpDuJour, serieJours, dernierJourValide, meilleureSerieJours,
  } = etat;
  meilleureSerieJours = meilleureSerieJours || 0;

  // Changement de jour : on remet le compteur du jour à zéro (la série, elle,
  // est jugée « vivante » à l'affichage via serieAffichee).
  if (jourCourant !== jour) {
    jourCourant = jour;
    xpDuJour = 0;
  }

  const avant = xpDuJour;
  xpDuJour += points;

  let objectifAtteintMaintenant = false;
  if (avant < objectifQuotidien && xpDuJour >= objectifQuotidien && dernierJourValide !== jour) {
    // Objectif franchi pour la première fois aujourd'hui.
    serieJours = estConsecutif(dernierJourValide, jour) ? serieJours + 1 : 1;
    dernierJourValide = jour;
    meilleureSerieJours = Math.max(meilleureSerieJours, serieJours);
    objectifAtteintMaintenant = true;
  }

  return {
    objectifQuotidien,
    jourCourant,
    xpDuJour,
    serieJours,
    dernierJourValide,
    meilleureSerieJours,
    objectifAtteintMaintenant,
  };
}
