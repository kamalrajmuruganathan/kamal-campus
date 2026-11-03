/**
 * Règles des statistiques d'usage anonymes (mêmes contrôles que la fonction SQL compter_usage).
 */
export const EVENEMENTS = ['visite', 'ecran', 'chapitre', 'qcm', 'exercice', 'dictee', 'epreuve'];

export function evenementValide(e) {
  return EVENEMENTS.includes(e);
}

export function detailValide(d) {
  return typeof d === 'string' && /^[A-Za-z0-9_-]{0,80}$/.test(d);
}

/**
 * Ce qu'on compte quand l'élève change d'écran : le nom de l'écran, et pour un chapitre son identifiant.
 * @param {{name: string, params?: object}} route
 * @returns {{evenement: string, detail: string}[]}
 */
export function evenementsPourRoute(route) {
  if (!route || !detailValide(route.name || '') || !route.name) return [];
  const sortie = [{ evenement: 'ecran', detail: route.name }];
  const id = route.params && (route.params.chapitreId || route.params.id);
  if (route.name === 'Chapitre' && typeof id === 'string' && detailValide(id)) {
    sortie.push({ evenement: 'chapitre', detail: id });
  }
  return sortie;
}
