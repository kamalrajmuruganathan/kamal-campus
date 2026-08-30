/**
 * Registre des énigmes numériques et fabrication de lots.
 *
 * Trois familles générées (réponse calculée). Les énigmes d'allumettes, elles,
 * sont une banque écrite à la main (src/enigmes/allumettes.js), branchée à part.
 */

import {
  suiteArithmetique, suiteGeometrique, suiteDifferences, suiteFibonacci, suiteAffine,
  analogie, intrus, grilleArithmetique, calculMental,
} from './generateurs.js';

/** Familles d'énigmes générées : titre, icône, générateurs. */
export const FAMILLES = {
  suite: {
    titre: 'Suites logiques',
    icone: '🔢',
    description: 'Trouve le nombre qui continue la suite.',
    gens: [suiteArithmetique, suiteGeometrique, suiteDifferences, suiteFibonacci, suiteAffine],
  },
  grille: {
    titre: 'Grilles & logique',
    icone: '🧮',
    description: 'Analogies, intrus et grilles à compléter.',
    gens: [analogie, intrus, grilleArithmetique],
  },
  calcul: {
    titre: 'Calcul mental',
    icone: '⚡',
    description: 'Enchaîne les calculs de tête.',
    gens: [calculMental],
  },
};

/** Y a-t-il des générateurs pour cette famille ? */
export function aFamille(type) {
  return !!FAMILLES[type];
}

/**
 * Fabrique `n` énigmes d'une famille.
 * @returns {Array} énigmes avec id 1..n ; [] si la famille est inconnue.
 */
export function genererEnigmes(type, n, rand = Math.random) {
  const fam = FAMILLES[type];
  if (!fam) return [];
  const gens = fam.gens;
  const out = [];
  const vus = new Set();
  let essais = 0;
  const max = n * 15;
  while (out.length < n && essais < max) {
    essais += 1;
    const e = gens[out.length % gens.length](rand);
    if (vus.has(e.enonce)) continue;
    vus.add(e.enonce);
    out.push({ ...e, id: out.length + 1 });
  }
  while (out.length < n) {
    const e = gens[out.length % gens.length](rand);
    out.push({ ...e, id: out.length + 1 });
  }
  return out;
}
