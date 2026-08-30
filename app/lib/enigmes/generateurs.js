/**
 * Générateurs d'énigmes numériques — logique pure (réponse calculée).
 *
 * Trois familles : suites logiques, grilles/analogies/intrus, calcul mental.
 * Chaque générateur `(rand) => enigme` renvoie un objet :
 *   { type, difficulte, enonce, reponse (nombre), indice, explication, [grille] }
 * La réponse étant CALCULÉE, une énigme générée ne peut pas être fausse.
 */

import { entier, choisir } from '../generateurs/noyau.js';

const DIFF = new Set(['facile', 'moyen', 'difficile']);

function suite(difficulte, termes, reponse, indice, explication) {
  return {
    type: 'suite',
    difficulte,
    enonce: `${termes.join(',   ')},   ?`,
    reponse,
    indice,
    explication,
  };
}

// ── Suites logiques ──────────────────────────────────────────────────────────

export function suiteArithmetique(rand) {
  const s = entier(rand, 1, 12);
  const r = entier(rand, 2, 9);
  const t = [0, 1, 2, 3, 4].map((i) => s + i * r);
  return suite('facile', t, s + 5 * r,
    'Regarde ce qu’on ajoute pour passer d’un nombre au suivant.',
    `On ajoute ${r} à chaque fois : ${t[4]} + ${r} = ${s + 5 * r}.`);
}

export function suiteGeometrique(rand) {
  const s = entier(rand, 1, 6);
  const q = choisir(rand, [2, 3]);
  const t = [0, 1, 2, 3, 4].map((i) => s * q ** i);
  return suite('moyen', t, s * q ** 5,
    'Par combien multiplie-t-on à chaque étape ?',
    `On multiplie par ${q} : ${t[4]} × ${q} = ${s * q ** 5}.`);
}

export function suiteDifferences(rand) {
  const s = entier(rand, 1, 9);
  const t = [s];
  let v = s;
  for (let k = 1; k <= 4; k++) { v += k; t.push(v); }
  const rep = v + 5;
  return suite('moyen', t, rep,
    'L’écart entre deux nombres augmente régulièrement.',
    `Les écarts sont +1, +2, +3, +4, puis +5 : ${t[4]} + 5 = ${rep}.`);
}

export function suiteFibonacci(rand) {
  const a = entier(rand, 1, 5);
  const b = entier(rand, a + 1, a + 6);
  const t = [a, b];
  for (let i = 2; i < 5; i++) t.push(t[i - 1] + t[i - 2]);
  const rep = t[4] + t[3];
  return suite('difficile', t, rep,
    'Chaque nombre se déduit des deux qui le précèdent.',
    `Chaque terme est la somme des deux précédents : ${t[3]} + ${t[4]} = ${rep}.`);
}

export function suiteAffine(rand) {
  const a = choisir(rand, [2, 3]);
  const b = entier(rand, 1, 5);
  const t = [entier(rand, 1, 4)];
  for (let i = 1; i < 5; i++) t.push(a * t[i - 1] + b);
  const rep = a * t[4] + b;
  return suite('difficile', t, rep,
    'On combine une multiplication ET une addition à chaque étape.',
    `On fait ×${a} puis +${b} : ${t[4]} × ${a} + ${b} = ${rep}.`);
}

// ── Grilles & logique numérique ──────────────────────────────────────────────

export function analogie(rand) {
  const k = entier(rand, 2, 9);
  const a = entier(rand, 2, 6);
  const b = entier(rand, 7, 9);
  const c = entier(rand, 3, 8);
  return {
    type: 'grille',
    difficulte: 'facile',
    enonce: `${a} → ${a * k}     ${b} → ${b * k}     ${c} → ?`,
    reponse: c * k,
    indice: 'Quelle opération transforme le nombre de gauche en celui de droite ?',
    explication: `On multiplie par ${k} : ${c} → ${c * k}.`,
  };
}

export function intrus(rand) {
  const k = entier(rand, 2, 6);
  const base = [1, 2, 3, 4, 5].map((i) => i * k);
  const idx = entier(rand, 1, 3);
  const faux = base[idx] + 1; // k ≥ 2 ⇒ +1 n’est jamais multiple de k
  const affiche = base.slice();
  affiche[idx] = faux;
  return {
    type: 'grille',
    difficulte: 'moyen',
    enonce: `Quel est l’intrus ?\n\n${affiche.join(',    ')}`,
    reponse: faux,
    indice: 'Tous suivent une même règle, sauf un.',
    explication: `Ce sont les multiples de ${k} (${base.join(', ')}). L’intrus est ${faux}.`,
  };
}

export function grilleArithmetique(rand) {
  const op = choisir(rand, ['+', '×']);
  const f = op === '+' ? (a, b) => a + b : (a, b) => a * b;
  const lignes = [];
  for (let i = 0; i < 3; i++) {
    const a = entier(rand, 1, 9);
    const b = entier(rand, 1, 9);
    lignes.push([a, b, f(a, b)]);
  }
  const rep = lignes[2][2];
  const grille = {
    entete: ['a', 'b', op === '+' ? 'a + b' : 'a × b'],
    lignes: lignes.map((l, i) => (i === 2 ? [l[0], l[1], '?'] : l)),
  };
  return {
    type: 'grille',
    difficulte: 'moyen',
    enonce: 'Trouve le nombre manquant dans la grille.',
    reponse: rep,
    indice: 'La 3ᵉ colonne s’obtient à partir des deux premières.',
    explication: `Chaque ligne : 3ᵉ colonne = 1ʳᵉ ${op} 2ᵉ. Donc ${lignes[2][0]} ${op} ${lignes[2][1]} = ${rep}.`,
    grille,
  };
}

// ── Calcul mental ────────────────────────────────────────────────────────────

function evalDeux(a, o1, b, o2, c) {
  const nums = [a, b, c];
  const ops = [o1, o2];
  for (let i = 0; i < ops.length;) {
    if (ops[i] === '×') { nums.splice(i, 2, nums[i] * nums[i + 1]); ops.splice(i, 1); }
    else i += 1;
  }
  let r = nums[0];
  for (let i = 0; i < ops.length; i++) r = ops[i] === '+' ? r + nums[i + 1] : r - nums[i + 1];
  return r;
}

export function calculMental(rand) {
  const combos = [['×', '+'], ['+', '×'], ['×', '-'], ['-', '+']];
  let a; let b; let c; let o1; let o2; let val;
  let essais = 0;
  do {
    [o1, o2] = choisir(rand, combos);
    a = entier(rand, 3, 9);
    b = entier(rand, 2, 9);
    c = entier(rand, 2, 12);
    val = evalDeux(a, o1, b, o2, c);
    essais += 1;
  } while ((val < 0 || val > 200) && essais < 40);
  if (val < 0) val = evalDeux(a, '×', b, '+', c); // filet de sécurité
  return {
    type: 'calcul',
    difficulte: 'moyen',
    enonce: `${a} ${o1} ${b} ${o2} ${c}`,
    reponse: val,
    indice: 'Priorité à la multiplication, puis additions et soustractions de gauche à droite.',
    explication: `En respectant les priorités : ${a} ${o1} ${b} ${o2} ${c} = ${val}.`,
  };
}

export { DIFF };
