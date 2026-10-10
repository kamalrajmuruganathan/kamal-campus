/**
 * Hors connexion (téléphone, Expo natif) : le contenu est déjà dans l'appli,
 * tout est toujours disponible. Mêmes fonctions que horsLigne.web.js.
 */
export function horsLigneDisponible() { return false; }
export function useEnLigne() { return true; }
export async function compterDisponibles(ids) { return ids.length; }
export async function telechargerHorsLigne(ids, onProgression = () => {}) {
  onProgression(ids.length, ids.length);
  return ids.length;
}
