/**
 * Modèles de questions générées (réponses calculées par l'appli).
 *
 * Chaque fonction est un générateur `(rand) => question`. Les valeurs sont
 * tirées au hasard, la bonne réponse est CALCULÉE, et les distracteurs
 * correspondent à des erreurs d'élève typiques. Voir noyau.js.
 */

import {
  entier, entierNonNul, choisir, avecSigne, fracLatex, construireQuestion,
} from './noyau.js';

// ── Collège / calcul ─────────────────────────────────────────────────────────

/** Équation du premier degré : ax + b = c. */
export function eqLineaire(rand) {
  const a = entier(rand, 2, 9);
  const x = entierNonNul(rand, -8, 8);
  const b = entier(rand, -9, 9);
  const c = a * x + b;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'equation',
    enonce: `Résoudre l'équation $${a}x ${avecSigne(b)} = ${c}$.`,
    bonne: `$x = ${x}$`,
    distracteurs: [`$x = ${x + 1}$`, `$x = ${x - 1}$`, `$x = ${-x}$`, `$x = ${x + 2}$`],
    explication: `On isole : $${a}x = ${c} ${avecSigne(-b)} = ${c - b}$, puis $x = \\dfrac{${c - b}}{${a}} = ${x}$. Le piège : la constante change de signe en changeant de côté.`,
  }, rand);
}

/** Somme de deux fractions : a/b + c/d. */
export function fractionSomme(rand) {
  const b = entier(rand, 2, 9);
  const d = entier(rand, 2, 9);
  const a = entierNonNul(rand, -8, 8);
  const c = entierNonNul(rand, -8, 8);
  const num = a * d + c * b;
  const den = b * d;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'fractions',
    enonce: `Calculer $\\dfrac{${a}}{${b}} + \\dfrac{${c}}{${d}}$.`,
    bonne: `$${fracLatex(num, den)}$`,
    distracteurs: [
      `$${fracLatex(a + c, b + d)}$`,
      `$${fracLatex(a * c, b * d)}$`,
      `$${fracLatex(a * d - c * b, den)}$`,
      `$${fracLatex(num + d, den)}$`,
      `$${fracLatex(num + den, den)}$`,
      `$${fracLatex(num - den, den)}$`,
      `$${fracLatex(num + 2 * den, den)}$`,
    ],
    explication: `On réduit au même dénominateur $${den}$ : $\\dfrac{${a * d}}{${den}} + \\dfrac{${c * b}}{${den}} = \\dfrac{${num}}{${den}} = ${fracLatex(num, den)}$. On n'additionne jamais les dénominateurs entre eux.`,
  }, rand);
}

/** Produit de puissances de même base : a^m × a^n. */
export function puissancesProduit(rand) {
  const a = entier(rand, 2, 5);
  const m = entier(rand, 2, 6);
  const n = entier(rand, 2, 6);
  return construireQuestion({
    difficulte: 'facile',
    notion: 'puissances',
    enonce: `Écrire sous la forme d'une seule puissance : $${a}^{${m}} \\times ${a}^{${n}}$.`,
    bonne: `$${a}^{${m + n}}$`,
    distracteurs: [
      `$${a}^{${m * n}}$`,
      `$${a * a}^{${m + n}}$`,
      `$${a}^{${m + n + 1}}$`,
      `$${a}^{${Math.abs(m - n) + 1}}$`,
      `$${a}^{${m + n + 2}}$`,
      `$${a}^{${m + n + 3}}$`,
    ],
    explication: `Pour un produit de puissances de même base, on ADDITIONNE les exposants : $${a}^{${m}} \\times ${a}^{${n}} = ${a}^{${m}+${n}} = ${a}^{${m + n}}$. La base ne change pas.`,
  }, rand);
}

/** Quatrième proportionnelle (prix unitaire constant). */
export function proportionnalite(rand) {
  const u = entier(rand, 2, 12);
  const q1 = entier(rand, 2, 8);
  const q2 = entier(rand, 9, 20);
  const p1 = u * q1;
  const p2 = u * q2;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'proportionnalite',
    enonce: `${q1} articles identiques coûtent ${p1} €. Combien coûtent ${q2} articles au même prix ?`,
    bonne: `$${p2}$ €`,
    distracteurs: [
      `$${p2 + u}$ €`,
      `$${p2 - u}$ €`,
      `$${p1 + (q2 - q1)}$ €`,
      `$${u * (q2 + 1)}$ €`,
      `$${p2 + 2}$ €`,
      `$${p2 - 3}$ €`,
      `$${p2 + 5}$ €`,
    ],
    explication: `Prix unitaire : $${p1} \\div ${q1} = ${u}$ €. Pour ${q2} articles : $${u} \\times ${q2} = ${p2}$ €. On ne se contente pas d'ajouter la différence du nombre d'articles.`,
  }, rand);
}

/** Pourcentage d'une quantité. */
export function pourcentage(rand) {
  const p = choisir(rand, [5, 10, 15, 20, 25, 40, 50, 75]);
  const N = entier(rand, 2, 20) * 20; // multiple de 20
  const val = (p * N) / 100;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'pourcentage',
    enonce: `Combien font $${p}\\,\\%$ de $${N}$ ?`,
    bonne: `$${val}$`,
    distracteurs: [
      `$${N - val}$`,
      `$${val * 2}$`,
      `$${p}$`,
      `$${val + 10}$`,
      `$${val + 1}$`,
      `$${val - 2}$`,
      `$${val + 3}$`,
    ],
    explication: `$${p}\\,\\%$ de $${N}$ vaut $\\dfrac{${p}}{100} \\times ${N} = ${val}$.`,
  }, rand);
}

/** Somme de deux nombres relatifs. */
export function relatifsSomme(rand) {
  const a = entierNonNul(rand, -20, 20);
  const b = entierNonNul(rand, -20, 20);
  const s = a + b;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'nombres-relatifs',
    enonce: `Calculer $(${a}) + (${b})$.`,
    bonne: `$${s}$`,
    distracteurs: [`$${a - b}$`, `$${-s}$`, `$${s + 1}$`, `$${b - a}$`, `$${a * b}$`, `$${s + 2}$`, `$${s - 3}$`, `$${s + 5}$`],
    explication: `$(${a}) + (${b}) = ${s}$. On additionne bien les deux nombres avec leur signe.`,
  }, rand);
}

/** Produit de deux nombres relatifs. */
export function relatifsProduit(rand) {
  const a = entierNonNul(rand, -12, 12);
  const b = entierNonNul(rand, -12, 12);
  const p = a * b;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'nombres-relatifs',
    enonce: `Calculer $(${a}) \\times (${b})$.`,
    bonne: `$${p}$`,
    distracteurs: [`$${-p}$`, `$${a + b}$`, `$${p + a}$`, `$${p - b}$`, `$${p + 3}$`, `$${p - 5}$`, `$${p + 7}$`],
    explication: `$(${a}) \\times (${b}) = ${p}$. Règle des signes : deux facteurs de même signe donnent un produit positif, de signes contraires un produit négatif.`,
  }, rand);
}

/** Moyenne d'une petite série (à moyenne entière). */
export function moyenne(rand) {
  const k = choisir(rand, [4, 5]);
  const m = entier(rand, 5, 15);
  const valeurs = [];
  let somme = 0;
  for (let i = 0; i < k - 1; i++) {
    const v = entier(rand, Math.max(1, m - 5), m + 5);
    valeurs.push(v);
    somme += v;
  }
  const dernier = k * m - somme; // garantit une moyenne entière = m
  valeurs.push(dernier);
  const total = somme + dernier;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'moyenne',
    enonce: `Quelle est la moyenne de la série : $${valeurs.join(' \\, ; \\, ')}$ ?`,
    bonne: `$${m}$`,
    distracteurs: [`$${m + 1}$`, `$${m - 1}$`, `$${total}$`, `$${Math.round(total / (k + 1))}$`, `$${m + 2}$`, `$${m - 2}$`, `$${m + 3}$`],
    explication: `Moyenne $= \\dfrac{${valeurs.join(' + ')}}{${k}} = \\dfrac{${total}}{${k}} = ${m}$. On divise la somme par le NOMBRE de valeurs (${k}).`,
  }, rand);
}

// ── Lycée ────────────────────────────────────────────────────────────────────

/** Discriminant d'un trinôme ax² + bx + c. */
export function discriminant(rand) {
  const a = choisir(rand, [1, 2, 3]);
  const b = entierNonNul(rand, -6, 6);
  const c = entierNonNul(rand, -6, 6);
  const delta = b * b - 4 * a * c;
  const tete = a === 1 ? 'x^2' : `${a}x^2`;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'discriminant',
    enonce: `Quel est le discriminant de $${tete} ${avecSigne(b)}x ${avecSigne(c)}$ ?`,
    bonne: `$${delta}$`,
    distracteurs: [
      `$${b * b + 4 * a * c}$`,
      `$${b * b - 4 * c}$`,
      `$${b * b}$`,
      `$${4 * a * c - b * b}$`,
      `$${delta + 2}$`,
      `$${delta - 5}$`,
      `$${delta + 9}$`,
    ],
    explication: `$\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times ${a} \\times (${c}) = ${b * b} ${avecSigne(-4 * a * c)} = ${delta}$. Attention au double signe de $-4ac$.`,
  }, rand);
}

/** Équation du second degré à racines entières. */
export function secondDegreRacines(rand) {
  let r1 = entierNonNul(rand, -6, 6);
  let r2 = entierNonNul(rand, -6, 6);
  while (r1 + r2 === 0) { r2 = entierNonNul(rand, -6, 6); }
  const s = r1 + r2; // coeff de x = -s
  const p = r1 * r2;
  const petit = Math.min(r1, r2);
  const grand = Math.max(r1, r2);
  return construireQuestion({
    difficulte: 'difficile',
    notion: 'racines',
    enonce: `Résoudre $x^2 ${avecSigne(-s)}x ${avecSigne(p)} = 0$.`,
    bonne: `$x = ${petit}$ ou $x = ${grand}$`,
    distracteurs: [
      `$x = ${-petit}$ ou $x = ${-grand}$`,
      `$x = ${petit}$ ou $x = ${-grand}$`,
      `$x = ${s}$ ou $x = ${p}$`,
      `$x = ${petit - 1}$ ou $x = ${grand + 1}$`,
      `$x = ${petit + 1}$ ou $x = ${grand + 2}$`,
      `$x = ${petit - 2}$ ou $x = ${grand + 3}$`,
    ],
    explication: `On cherche deux nombres de somme $${s}$ et de produit $${p}$ : ce sont $${r1}$ et $${r2}$. Donc $x = ${petit}$ ou $x = ${grand}$. Le coefficient de $x$ est l'OPPOSÉ de la somme des racines.`,
  }, rand);
}

/** Nombre dérivé d'un trinôme en un point. */
export function nombreDerive(rand) {
  const a = entierNonNul(rand, 1, 5);
  const b = entierNonNul(rand, -6, 6);
  const c = entier(rand, -6, 6);
  const x0 = entierNonNul(rand, -4, 4);
  const fp = 2 * a * x0 + b;
  const tete = a === 1 ? 'x^2' : `${a}x^2`;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'derivation',
    enonce: `Soit $f(x) = ${tete} ${avecSigne(b)}x ${avecSigne(c)}$. Que vaut $f'(${x0})$ ?`,
    bonne: `$${fp}$`,
    distracteurs: [
      `$${2 * a * x0}$`,
      `$${a * x0 * x0 + b * x0 + c}$`,
      `$${a * x0 + b}$`,
      `$${fp + 1}$`,
      `$${fp + 2}$`,
      `$${fp - 3}$`,
      `$${fp + 5}$`,
    ],
    explication: `$f'(x) = ${2 * a}x ${avecSigne(b)}$, donc $f'(${x0}) = ${2 * a} \\times (${x0}) ${avecSigne(b)} = ${fp}$. On n'oublie pas le terme constant $b$ de la dérivée.`,
  }, rand);
}

/** Terme d'une suite arithmétique. */
export function suiteArithmetique(rand) {
  const u0 = entier(rand, -5, 10);
  const r = entierNonNul(rand, -5, 6);
  const n = entier(rand, 4, 12);
  const un = u0 + n * r;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'suites',
    enonce: `Suite arithmétique de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Que vaut $u_{${n}}$ ?`,
    bonne: `$${un}$`,
    distracteurs: [
      `$${u0 + (n - 1) * r}$`,
      `$${u0 + n + r}$`,
      `$${u0 * r + n}$`,
      `$${un + r}$`,
      `$${un + 2}$`,
      `$${un - 3}$`,
      `$${un + 5}$`,
    ],
    explication: `$u_n = u_0 + n \\times r = ${u0} + ${n} \\times (${r}) = ${un}$. Comme on part de $u_0$, on ajoute $n$ fois la raison (et non $n-1$).`,
  }, rand);
}

/** Terme d'une suite géométrique (petits exposants). */
export function suiteGeometrique(rand) {
  const u0 = entier(rand, 1, 6);
  const q = choisir(rand, [2, 3]);
  const n = entier(rand, 2, 5);
  const un = u0 * q ** n;
  return construireQuestion({
    difficulte: 'difficile',
    notion: 'suites',
    enonce: `Suite géométrique de premier terme $u_0 = ${u0}$ et de raison $q = ${q}$. Que vaut $u_{${n}}$ ?`,
    bonne: `$${un}$`,
    distracteurs: [
      `$${u0 * q * n}$`,
      `$${u0 * q ** (n - 1)}$`,
      `$${u0 * n ** q}$`,
      `$${un + q}$`,
      `$${un + 3}$`,
      `$${un - 5}$`,
      `$${un + 7}$`,
    ],
    explication: `$u_n = u_0 \\times q^{n} = ${u0} \\times ${q}^{${n}} = ${u0} \\times ${q ** n} = ${un}$. On ÉLÈVE la raison à la puissance $n$ (on ne multiplie pas par $n$).`,
  }, rand);
}

/** Produit scalaire à partir des coordonnées. */
export function produitScalaire(rand) {
  const x1 = entierNonNul(rand, -5, 5);
  const y1 = entierNonNul(rand, -5, 5);
  const x2 = entierNonNul(rand, -5, 5);
  const y2 = entierNonNul(rand, -5, 5);
  const ps = x1 * x2 + y1 * y2;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'produit-scalaire',
    enonce: `Soit $\\vec{u}(${x1}\\,;${y1})$ et $\\vec{v}(${x2}\\,;${y2})$. Que vaut $\\vec{u} \\cdot \\vec{v}$ ?`,
    bonne: `$${ps}$`,
    distracteurs: [
      `$${x1 * x2 - y1 * y2}$`,
      `$${x1 * y2 + x2 * y1}$`,
      `$${x1 + x2 + y1 + y2}$`,
      `$${ps + 1}$`,
      `$${ps + 2}$`,
      `$${ps - 3}$`,
      `$${ps + 5}$`,
    ],
    explication: `$\\vec{u}\\cdot\\vec{v} = x_1 x_2 + y_1 y_2 = (${x1})(${x2}) + (${y1})(${y2}) = ${x1 * x2} ${avecSigne(y1 * y2)} = ${ps}$.`,
  }, rand);
}

// ── Primaire (nombres positifs, adaptés aux petits) ──────────────────────────

/** Addition simple (CP → CE2). */
export function additionSimple(rand) {
  const a = entier(rand, 2, 12);
  const b = entier(rand, 2, 12);
  const s = a + b;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'addition',
    enonce: `Combien font ${a} + ${b} ?`,
    bonne: `${s}`,
    distracteurs: [`${s - 1}`, `${s + 1}`, `${s + 10}`, `${Math.abs(a - b)}`, `${s + 2}`, `${s - 2}`],
    explication: `${a} + ${b} = ${s}. On ajoute les deux nombres.`,
  }, rand);
}

/** Soustraction simple à résultat positif. */
export function soustractionSimple(rand) {
  const a = entier(rand, 6, 18);
  const b = entier(rand, 1, a - 1);
  const d = a - b;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'soustraction',
    enonce: `Combien font ${a} − ${b} ?`,
    bonne: `${d}`,
    distracteurs: [`${d + 1}`, `${d - 1}`, `${a + b}`, `${d + 2}`, `${d + 10}`, `${d - 2}`],
    explication: `${a} − ${b} = ${d}. On enlève ${b} à ${a}.`,
  }, rand);
}

/** Multiplication (tables). */
export function multiplicationSimple(rand) {
  const a = entier(rand, 2, 10);
  const b = entier(rand, 2, 10);
  const p = a * b;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'multiplication',
    enonce: `Combien font ${a} × ${b} ?`,
    bonne: `${p}`,
    distracteurs: [`${p + a}`, `${p - a}`, `${a + b}`, `${p + b}`, `${p + 2}`, `${p - 2}`, `${p + 10}`],
    explication: `${a} × ${b} = ${p}. C'est ${a} additionné ${b} fois.`,
  }, rand);
}

/** Complément à 10. */
export function complementDix(rand) {
  const a = entier(rand, 1, 9);
  const r = 10 - a;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'complement',
    enonce: `${a} + ? = 10. Que vaut le nombre manquant ?`,
    bonne: `${r}`,
    distracteurs: [`${r + 1}`, `${r - 1}`, `${a}`, `${10 + a}`, `${r + 2}`, `${r + 10}`],
    explication: `Pour aller de ${a} à 10, il faut ${r} (car ${a} + ${r} = 10).`,
  }, rand);
}

/** Le double d'un nombre. */
export function leDouble(rand) {
  const a = entier(rand, 2, 20);
  const d = 2 * a;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'double',
    enonce: `Quel est le double de ${a} ?`,
    bonne: `${d}`,
    distracteurs: [`${a + 2}`, `${a}`, `${d + 1}`, `${d - 2}`, `${d + 2}`, `${d + 10}`],
    explication: `Le double de ${a}, c'est ${a} + ${a} = ${d}.`,
  }, rand);
}

/** Racine carrée d'un carré parfait. */
export function racineCarreParfait(rand) {
  const k = entier(rand, 4, 20);
  const N = k * k;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'racine-carree',
    enonce: `Que vaut $\\sqrt{${N}}$ ?`,
    bonne: `$${k}$`,
    distracteurs: [`$${k + 1}$`, `$${k - 1}$`, `$${N / 2}$`, `$${k + 2}$`],
    explication: `$\\sqrt{${N}} = ${k}$ car $${k}^2 = ${N}$. La racine carrée n'est pas la moitié du nombre.`,
  }, rand);
}
