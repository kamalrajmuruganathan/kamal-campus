/**
 * Moteur de génération de questions — briques communes, pures et testables.
 *
 * Un « générateur » est une fonction `(rand) => question`. Il choisit des
 * nombres au hasard, CALCULE lui-même la bonne réponse et des distracteurs
 * plausibles, puis délègue l'assemblage à `construireQuestion`. Comme c'est
 * l'appli qui calcule la réponse, une question générée ne peut pas être fausse.
 *
 * `rand` renvoie un flottant dans [0, 1[ (Math.random en production, un
 * générateur à graine fixe dans les tests).
 */

/** Entier aléatoire dans [min, max] inclus. */
export function entier(rand, min, max) {
  return min + Math.floor(rand() * (max - min + 1));
}

/** Entier aléatoire dans [min, max] en excluant 0. */
export function entierNonNul(rand, min, max) {
  let n = 0;
  do { n = entier(rand, min, max); } while (n === 0);
  return n;
}

/** Élément aléatoire d'une liste. */
export function choisir(rand, liste) {
  return liste[Math.floor(rand() * liste.length)];
}

/** Mélange (Fisher-Yates) une copie de la liste. */
export function melangerAvec(liste, rand) {
  const a = liste.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// ── formatage ───────────────────────────────────────────────────────────────

/** « + 3 » ou « - 3 » : un terme constant précédé de son signe (pour un énoncé). */
export function avecSigne(n) {
  return n >= 0 ? `+ ${n}` : `- ${-n}`;
}

/** PGCD (valeurs absolues). */
export function pgcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}

/** Fraction en LaTeX, réduite, signe porté au numérateur ; entier si dénominateur 1. */
export function fracLatex(num, den) {
  if (den < 0) { num = -num; den = -den; }
  const g = pgcd(num, den);
  const n = num / g;
  const d = den / g;
  if (d === 1) return `${n}`;
  if (n < 0) return `-\\dfrac{${-n}}{${d}}`;
  return `\\dfrac{${n}}{${d}}`;
}

/**
 * Assemble une question à partir d'un modèle calculé.
 * @param {{enonce, bonne, distracteurs:string[], explication, difficulte, notion}} m
 *   `bonne` et `distracteurs` sont des chaînes d'affichage (LaTeX possible).
 * @param {() => number} rand
 * @returns {{difficulte, notion, enonce, choix, reponse, explication}}
 *
 * Garde 3 distracteurs DISTINCTS et différents de la bonne réponse, mélange les
 * 4 choix, et fixe `reponse` sur l'index réel de la bonne réponse.
 */
export function construireQuestion(m, rand) {
  const vus = new Set([m.bonne]);
  const distincts = [];
  for (const d of m.distracteurs) {
    if (!vus.has(d)) { vus.add(d); distincts.push(d); }
    if (distincts.length === 3) break;
  }
  if (distincts.length < 3) {
    throw new Error(`générateur : distracteurs insuffisants pour « ${m.enonce} »`);
  }
  const choix = melangerAvec([m.bonne, ...distincts], rand);
  return {
    difficulte: m.difficulte,
    notion: m.notion,
    enonce: m.enonce,
    choix,
    reponse: choix.indexOf(m.bonne),
    explication: m.explication,
  };
}
