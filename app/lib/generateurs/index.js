/**
 * Registre des générateurs — quel(s) modèle(s) alimente(nt) chaque chapitre,
 * et fabrication d'un lot de questions générées.
 *
 * Un même modèle sert plusieurs chapitres (les fractions existent de la 6ᵉ à la
 * 4ᵉ, les puissances de la 5ᵉ à la 3ᵉ…). Ajouter un chapitre = une ligne ici.
 */

import {
  eqLineaire, fractionSomme, puissancesProduit, proportionnalite, pourcentage,
  relatifsSomme, relatifsProduit, moyenne, discriminant, secondDegreRacines,
  nombreDerive, suiteArithmetique, suiteGeometrique, produitScalaire,
  racineCarreParfait,
  additionSimple, soustractionSimple, multiplicationSimple, complementDix, leDouble,
  masseVolumique, vitesse, loiOhm,
  puissanceUI, moment, contrainte, rendement,
  divisionEuclidienne, perimetreRectangle, aireRectangle, aireTriangle,
  fonctionAffine, pythagore, poids, energiePuissanceTemps,
  trigRatio, distanceParcourue, dureeParcours, conversionLongueur, conversionDuree,
} from './modeles.js';

/** id de chapitre → liste de générateurs qui l'alimentent. */
export const REGISTRE = {
  // Équations / calcul littéral
  '5e-math-calcul-litteral': [eqLineaire],
  '4e-math-calcul-litteral': [eqLineaire],
  '3e-math-calcul-litteral': [eqLineaire],
  '6e-math-initiation-algebre': [eqLineaire],
  '2nde-math-equations-inequations': [eqLineaire],
  '2nde-math-calcul-numerique-algebrique': [eqLineaire, fractionSomme, puissancesProduit],

  // Fractions / rationnels
  '6e-math-fractions': [fractionSomme],
  '5e-math-fractions': [fractionSomme],
  '4e-math-nombres-rationnels': [fractionSomme, relatifsSomme],
  '3e-math-nombres-rationnels': [fractionSomme],

  // Puissances
  '5e-math-puissances': [puissancesProduit],
  '4e-math-puissances': [puissancesProduit],
  '3e-math-puissances': [puissancesProduit],

  // Proportionnalité / pourcentages
  '6e-math-proportionnalite': [proportionnalite],
  '5e-math-proportionnalite': [proportionnalite, pourcentage],
  '4e-math-proportionnalite': [proportionnalite, pourcentage],
  '3e-math-proportionnalite': [proportionnalite, pourcentage],
  '1es-math-information-chiffree': [pourcentage],

  // Nombres relatifs
  '5e-math-nombres-relatifs': [relatifsSomme],
  '4e-math-operations-nombres-relatifs': [relatifsSomme, relatifsProduit],

  // Statistiques (moyenne)
  '5e-math-statistiques': [moyenne],
  '4e-math-statistiques': [moyenne],
  '3e-math-statistiques': [moyenne],
  '2nde-math-statistiques': [moyenne],

  // Racine carrée
  '4e-math-racine-carree': [racineCarreParfait],
  '3e-math-racine-carree': [racineCarreParfait],

  // Second degré
  '1spe-math-second-degre': [discriminant, secondDegreRacines],

  // Dérivation
  '1spe-math-derivation': [nombreDerive],
  '1techno-math-derivation': [nombreDerive],
  'tale-spe-math-derivation-convexite': [nombreDerive],
  'tale-compl-math-derivation-convexite': [nombreDerive],

  // Suites
  '1spe-math-suites-numeriques': [suiteArithmetique, suiteGeometrique],
  '1techno-math-suites-numeriques': [suiteArithmetique, suiteGeometrique],
  'tale-spe-math-suites': [suiteArithmetique, suiteGeometrique],
  'tale-compl-math-suites-evolution': [suiteArithmetique, suiteGeometrique],

  // Produit scalaire
  '1spe-math-produit-scalaire': [produitScalaire],
  '1sti2d-produit-scalaire': [produitScalaire],

  // ── Primaire : calcul à volonté (nombres positifs) ──
  'cp-math-addition': [additionSimple],
  'cp-math-soustraction': [soustractionSimple],
  'cp-math-calcul-mental': [additionSimple, soustractionSimple, complementDix, leDouble],
  'ce1-math-addition-posee': [additionSimple],
  'ce1-math-soustraction-posee': [soustractionSimple],
  'ce1-math-tables-de-multiplication': [multiplicationSimple],
  'ce1-math-calcul-mental': [additionSimple, soustractionSimple, multiplicationSimple, complementDix, leDouble],
  'ce2-math-multiplication-posee': [multiplicationSimple],
  'ce2-math-calcul-mental': [additionSimple, soustractionSimple, multiplicationSimple, leDouble],
  'cm1-math-multiplication-posee': [multiplicationSimple],
  'cm2-math-calcul-mental': [additionSimple, soustractionSimple, multiplicationSimple, leDouble],

  // ── Physique-chimie : grandeurs à volonté ──
  // Mouvement : la relation v ↔ d ↔ t dans les deux sens.
  '5e-pc-mouvement-vitesse': [vitesse, distanceParcourue, dureeParcours],
  '4e-pc-mouvement-vitesse': [vitesse, distanceParcourue, dureeParcours],
  '2nde-pc-mouvement-interactions': [vitesse, distanceParcourue, dureeParcours],
  '1spe-pc-mouvement-interactions': [vitesse, distanceParcourue, dureeParcours],
  'tale-spe-pc-decrire-mouvement': [vitesse, distanceParcourue, dureeParcours],
  '3e-pc-masse-volumique': [masseVolumique],
  '2nde-pc-description-matiere': [masseVolumique],
  '1spe-pc-energie-electrique': [loiOhm, puissanceUI],

  // ── Sciences de l'ingénieur : grandeurs à volonté ──
  '1si-chaine-denergie': [puissanceUI, rendement],
  '1si-mecanique-des-solides': [moment],
  '1si-comportement-des-materiaux': [contrainte],
  'tale-si-energie-dans-les-systemes': [puissanceUI, rendement],
  'tale-si-resistance-des-structures': [contrainte],

  // ── Primaire : division & géométrie de mesure ──
  'ce2-math-sens-de-la-division': [divisionEuclidienne],
  'cm1-math-division-euclidienne': [divisionEuclidienne],
  'cm2-math-division-posee': [divisionEuclidienne],
  'ce2-math-perimetre-et-mesures': [perimetreRectangle, aireRectangle],
  'cm1-math-cercle-triangles-perimetre-aire': [perimetreRectangle, aireRectangle, aireTriangle],
  'cm2-math-aires-perimetres-volumes': [aireRectangle, perimetreRectangle],
  'cm1-math-proportionnalite': [proportionnalite],
  'cm2-math-proportionnalite-et-pourcentages': [proportionnalite, pourcentage],

  // ── Collège : géométrie de mesure, fonctions, Pythagore, trigonométrie ──
  '6e-math-longueurs-aires-volumes': [perimetreRectangle, aireRectangle, conversionLongueur],
  '4e-math-fonctions': [fonctionAffine],
  '3e-math-fonctions': [fonctionAffine],
  '4e-math-triangles': [pythagore],
  '3e-math-triangles': [pythagore, trigRatio],

  // ── Conversions d'unités (durées) ──
  '6e-math-durees': [conversionDuree],
  'cm1-math-durees': [conversionDuree],

  // ── Physique-chimie : poids & énergie ──
  '4e-pc-interactions-forces': [poids],
  '3e-pc-poids-gravitation-forces': [poids],
  '5e-pc-energie-electricite': [energiePuissanceTemps],
  '4e-pc-puissance-energie': [energiePuissanceTemps],
  '3e-pc-conversions-energie-signaux': [energiePuissanceTemps],
  '1sti2d-energie': [puissanceUI, rendement],
  'tale-sti2d-pc-energie-electrique-thermique': [puissanceUI, rendement],
  'tale-esc-production-conversion-energie-electrique': [puissanceUI, rendement],
};

/** Le chapitre a-t-il au moins un générateur ? */
export function aGenerateur(id) {
  const g = REGISTRE[id];
  return Array.isArray(g) && g.length > 0;
}

/**
 * Fabrique `n` questions générées pour un chapitre.
 * @param {string} id     identifiant du chapitre
 * @param {number} n      nombre de questions voulu
 * @param {() => number} rand
 * @returns {Array} questions (avec id 1..n) ; [] si le chapitre n'a pas de générateur.
 *
 * On alterne les modèles disponibles et on évite les énoncés en double dans le
 * même lot (quelques essais avant d'accepter, pour rester rapide).
 */
export function genererQuestions(id, n, rand = Math.random) {
  const gens = REGISTRE[id];
  if (!Array.isArray(gens) || gens.length === 0) return [];

  const questions = [];
  const vus = new Set();
  let essais = 0;
  const maxEssais = n * 12;

  while (questions.length < n && essais < maxEssais) {
    essais += 1;
    const gen = gens[questions.length % gens.length];
    const q = gen(rand);
    if (vus.has(q.enonce)) continue; // évite un doublon dans ce lot
    vus.add(q.enonce);
    questions.push({ ...q, id: questions.length + 1 });
  }

  // Si on n'a pas atteint n (petit espace de tirage), on complète sans le filtre.
  while (questions.length < n) {
    const gen = gens[questions.length % gens.length];
    const q = gen(rand);
    questions.push({ ...q, id: questions.length + 1 });
  }

  return questions;
}
