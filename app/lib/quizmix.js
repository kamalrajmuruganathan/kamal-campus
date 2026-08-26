/**
 * Composition d'un QCM « par parcours » — logique pure.
 *
 * Un QCM de parcours mélange les questions de tous les chapitres d'un même
 * niveau + parcours, puis en garde un échantillon. Aucune dépendance à React :
 * le hasard est injecté (`rand`) pour rester testable de façon déterministe.
 */

/** Mélange (Fisher-Yates) une copie de la liste. `rand` doit renvoyer [0, 1[. */
export function melanger(liste, rand = Math.random) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

/** Toutes les questions de QCM d'une liste de chapitres, à plat. */
export function poolQuestions(chapitres) {
  const pool = [];
  for (const c of chapitres || []) {
    const qs = c?.qcm?.questions ?? [];
    for (const q of qs) pool.push(q);
  }
  return pool;
}

/**
 * Compose un QCM de parcours : mélange le pool et en garde au plus `n`.
 * @param {Array} chapitres  chapitres du niveau+parcours
 * @param {number} n         nombre de questions visé (défaut 15)
 * @param {() => number} rand
 */
export function composerQcm(chapitres, n = 15, rand = Math.random) {
  return melanger(poolQuestions(chapitres), rand).slice(0, Math.max(0, n));
}
