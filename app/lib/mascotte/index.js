/**
 * Mascotte évolutive — une petite plante qui grandit avec le niveau de l'élève.
 * Métaphore simple et positive (« campus » qui pousse). Pur et testable.
 */

export const ETAPES = [
  { min: 1, emoji: '🌱', nom: 'Pousse' },
  { min: 3, emoji: '🪴', nom: 'Jeune plant' },
  { min: 5, emoji: '🌿', nom: 'Plante' },
  { min: 8, emoji: '🌳', nom: 'Arbre' },
  { min: 12, emoji: '🌸', nom: 'Arbre en fleurs' },
  { min: 16, emoji: '🌟', nom: 'Légende' },
];

/** Renvoie l'étape de mascotte correspondant à un niveau (1+). */
export function mascotteNiveau(niveau) {
  const n = Number(niveau) || 1;
  let etape = ETAPES[0];
  for (const e of ETAPES) if (n >= e.min) etape = e;
  return etape;
}

/** Progression (0..1) vers l'étape suivante, pour une petite barre. */
export function progressionEtape(niveau) {
  const n = Number(niveau) || 1;
  const i = ETAPES.reduce((acc, e, k) => (n >= e.min ? k : acc), 0);
  if (i >= ETAPES.length - 1) return 1;
  const debut = ETAPES[i].min;
  const fin = ETAPES[i + 1].min;
  return Math.max(0, Math.min(1, (n - debut) / (fin - debut)));
}
