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

// ── Physique-chimie (grandeurs et formules) ──────────────────────────────────

/** Masse volumique ρ = m / V. */
export function masseVolumique(rand) {
  const rho = entier(rand, 1, 10);
  const V = entier(rand, 2, 12);
  const m = rho * V;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'masse-volumique',
    enonce: `Un objet a une masse de ${m} g et un volume de ${V} cm³. Quelle est sa masse volumique ?`,
    bonne: `${rho} g/cm³`,
    distracteurs: [`${m} g/cm³`, `${V} g/cm³`, `${rho + 1} g/cm³`, `${rho + 2} g/cm³`, `${m + V} g/cm³`, `${rho + 3} g/cm³`],
    explication: `ρ = m ÷ V = ${m} ÷ ${V} = ${rho} g/cm³.`,
  }, rand);
}

/** Vitesse moyenne v = d / t. */
export function vitesse(rand) {
  const v = entier(rand, 2, 20);
  const t = entier(rand, 2, 10);
  const d = v * t;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'vitesse',
    enonce: `Un mobile parcourt ${d} m en ${t} s. Quelle est sa vitesse moyenne ?`,
    bonne: `${v} m/s`,
    distracteurs: [`${d} m/s`, `${t} m/s`, `${v + 1} m/s`, `${v + 2} m/s`, `${d + t} m/s`, `${v + 3} m/s`],
    explication: `v = d ÷ t = ${d} ÷ ${t} = ${v} m/s.`,
  }, rand);
}

/** Loi d'Ohm U = R × I. */
export function loiOhm(rand) {
  const R = entier(rand, 2, 20);
  const I = entier(rand, 1, 9);
  const U = R * I;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'loi-ohm',
    enonce: `Une résistance de ${R} Ω est traversée par un courant de ${I} A. Quelle est la tension à ses bornes ?`,
    bonne: `${U} V`,
    distracteurs: [`${R + I} V`, `${R} V`, `${I} V`, `${U + 1} V`, `${U + 2} V`, `${U + R} V`],
    explication: `Loi d'Ohm : U = R × I = ${R} × ${I} = ${U} V.`,
  }, rand);
}

/** Puissance électrique P = U × I. */
export function puissanceUI(rand) {
  const U = entier(rand, 2, 24);
  const I = entier(rand, 1, 9);
  const P = U * I;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'puissance',
    enonce: `Un appareil sous ${U} V est parcouru par un courant de ${I} A. Quelle est sa puissance ?`,
    bonne: `${P} W`,
    distracteurs: [`${U + I} W`, `${U} W`, `${I} W`, `${P + 1} W`, `${P + 2} W`, `${P + U} W`],
    explication: `P = U × I = ${U} × ${I} = ${P} W.`,
  }, rand);
}

/** Moment d'une force M = F × d. */
export function moment(rand) {
  const F = entier(rand, 2, 40);
  const d = entier(rand, 2, 10);
  const M = F * d;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'moment',
    enonce: `Une force de ${F} N s'applique à ${d} m de l'axe de rotation. Quel est le moment de cette force ?`,
    bonne: `${M} N·m`,
    distracteurs: [`${F + d} N·m`, `${F} N·m`, `${d} N·m`, `${M + 1} N·m`, `${M + 2} N·m`, `${M + F} N·m`],
    explication: `M = F × d = ${F} × ${d} = ${M} N·m.`,
  }, rand);
}

/** Contrainte σ = F / S (traction). */
export function contrainte(rand) {
  const sigma = entier(rand, 5, 60);
  const S = entier(rand, 2, 20);
  const F = sigma * S;
  return construireQuestion({
    difficulte: 'difficile',
    notion: 'contrainte',
    enonce: `Une pièce de section ${S} mm² subit une force de traction de ${F} N. Quelle est la contrainte ?`,
    bonne: `${sigma} N/mm²`,
    distracteurs: [`${F} N/mm²`, `${S} N/mm²`, `${sigma + 1} N/mm²`, `${sigma + 2} N/mm²`, `${sigma + 5} N/mm²`, `${F + S} N/mm²`],
    explication: `σ = F ÷ S = ${F} ÷ ${S} = ${sigma} N/mm² (soit ${sigma} MPa).`,
  }, rand);
}

/** Rendement η = Pu / Pa × 100. */
export function rendement(rand) {
  const eta = choisir(rand, [40, 50, 60, 70, 75, 80, 90]);
  const Pa = choisir(rand, [100, 200, 300, 400, 500]);
  const Pu = (eta * Pa) / 100;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'rendement',
    enonce: `Un système reçoit une puissance de ${Pa} W et en fournit ${Pu} W d'utile. Quel est son rendement ?`,
    bonne: `${eta} %`,
    distracteurs: [`${100 - eta} %`, `${Pu} %`, `${eta + 5} %`, `${eta - 5} %`, `${eta + 10} %`, `${Math.round(Pa / Pu * 100)} %`],
    explication: `η = Pu ÷ Pa × 100 = ${Pu} ÷ ${Pa} × 100 = ${eta} %.`,
  }, rand);
}

// ── Primaire / collège : nombres & géométrie ─────────────────────────────────

/** Division euclidienne : a = b·q + r, avec 0 ≤ r < b. */
export function divisionEuclidienne(rand) {
  const b = entier(rand, 2, 9);
  const q = entier(rand, 2, 12);
  const r = entier(rand, 0, b - 1);
  const a = b * q + r;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'division',
    enonce: `Division euclidienne de $${a}$ par $${b}$ : quel est le quotient et le reste ?`,
    bonne: `quotient ${q}, reste ${r}`,
    distracteurs: [
      `quotient ${q + 1}, reste ${r}`,
      `quotient ${q}, reste ${(r + 1) % b}`,
      `quotient ${q - 1}, reste ${r}`,
      `quotient ${q + 1}, reste ${(r + 1) % b}`,
      `quotient ${q + 2}, reste ${r}`,
    ],
    explication: `On cherche le plus grand multiple de $${b}$ inférieur ou égal à $${a}$ : $${b} \\times ${q} = ${b * q}$, il reste $${a} - ${b * q} = ${r}$. Le reste ($${r}$) doit être plus petit que le diviseur ($${b}$).`,
  }, rand);
}

/** Périmètre d'un rectangle : P = 2·(L + l). */
export function perimetreRectangle(rand) {
  const L = entier(rand, 4, 20);
  const l = entier(rand, 2, L);
  const p = 2 * (L + l);
  return construireQuestion({
    difficulte: 'facile',
    notion: 'perimetre',
    enonce: `Un rectangle mesure $${L}$ cm de long et $${l}$ cm de large. Quel est son périmètre ?`,
    bonne: `$${p}$ cm`,
    distracteurs: [
      `$${L + l}$ cm`,
      `$${p + 2}$ cm`,
      `$${p - 2}$ cm`,
      `$${L * l}$ cm`,
      `$${2 * L + l}$ cm`,
    ],
    explication: `Périmètre $= 2 \\times (\\text{longueur} + \\text{largeur}) = 2 \\times (${L} + ${l}) = ${p}$ cm. On fait tout le tour : deux longueurs et deux largeurs.`,
  }, rand);
}

/** Aire d'un rectangle : A = L·l. */
export function aireRectangle(rand) {
  const L = entier(rand, 4, 20);
  const l = entier(rand, 2, L);
  const A = L * l;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'aire',
    enonce: `Un rectangle mesure $${L}$ cm de long et $${l}$ cm de large. Quelle est son aire ?`,
    bonne: `$${A}$ cm²`,
    distracteurs: [
      `$${2 * (L + l)}$ cm²`,
      `$${A + L}$ cm²`,
      `$${A - l}$ cm²`,
      `$${L + l}$ cm²`,
      `$${A + 1}$ cm²`,
      `$${A + 2}$ cm²`,
    ],
    explication: `Aire $= \\text{longueur} \\times \\text{largeur} = ${L} \\times ${l} = ${A}$ cm². (Le périmètre $2\\times(${L}+${l})$ mesure le tour, pas la surface.)`,
  }, rand);
}

/** Aire d'un triangle : A = (b·h) / 2, hauteur paire pour un résultat entier. */
export function aireTriangle(rand) {
  const b = entier(rand, 3, 20);
  const h = 2 * entier(rand, 2, 10); // hauteur paire → aire entière
  const A = (b * h) / 2;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'aire',
    enonce: `Un triangle a une base de $${b}$ cm et une hauteur de $${h}$ cm. Quelle est son aire ?`,
    bonne: `$${A}$ cm²`,
    distracteurs: [
      `$${b * h}$ cm²`,
      `$${A + b}$ cm²`,
      `$${b + h}$ cm²`,
      `$${A + 1}$ cm²`,
      `$${A + 2}$ cm²`,
    ],
    explication: `Aire $= \\dfrac{\\text{base} \\times \\text{hauteur}}{2} = \\dfrac{${b} \\times ${h}}{2} = ${A}$ cm². On n'oublie pas de diviser par 2.`,
  }, rand);
}

/** Image par une fonction affine : f(x) = ax + b, calcul de f(x₀). */
export function fonctionAffine(rand) {
  const a = choisir(rand, [-5, -4, -3, -2, 2, 3, 4, 5]);
  const b = entierNonNul(rand, -9, 9);
  const x0 = entierNonNul(rand, -6, 6);
  const y = a * x0 + b;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'fonctions',
    enonce: `Soit $f(x) = ${a}x ${avecSigne(b)}$. Combien vaut $f(${x0})$ ?`,
    bonne: `$${y}$`,
    distracteurs: [
      `$${a * x0}$`,
      `$${a + b}$`,
      `$${a * x0 - b}$`,
      `$${y + 1}$`,
      `$${y - 1}$`,
      `$${y + 2}$`,
    ],
    explication: `On remplace $x$ par $${x0}$ : $f(${x0}) = ${a} \\times ${x0} ${avecSigne(b)} = ${a * x0} ${avecSigne(b)} = ${y}$.`,
  }, rand);
}

/** Hypoténuse d'un triangle rectangle (triplets pythagoriciens entiers). */
export function pythagore(rand) {
  const triplets = [
    [3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17],
    [9, 12, 15], [7, 24, 25], [20, 21, 29], [9, 40, 41], [12, 16, 20],
  ];
  const [a, b, c] = choisir(rand, triplets);
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'pythagore',
    enonce: `Dans un triangle rectangle, les deux côtés de l'angle droit mesurent $${a}$ et $${b}$. Quelle est la longueur de l'hypoténuse ?`,
    bonne: `$${c}$`,
    distracteurs: [
      `$${a + b}$`,
      `$${c + 1}$`,
      `$${c - 1}$`,
      `$${c + 2}$`,
      `$${b - a}$`,
    ],
    explication: `Théorème de Pythagore : $h^2 = ${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${a * a + b * b}$, donc $h = \\sqrt{${a * a + b * b}} = ${c}$. (Attention : l'hypoténuse n'est pas $${a}+${b}$.)`,
  }, rand);
}

// ── Physique-chimie : grandeurs supplémentaires ──────────────────────────────

/** Poids : P = m·g, avec g = 10 N/kg (valeur donnée dans l'énoncé). */
export function poids(rand) {
  const m = entier(rand, 1, 50);
  const P = m * 10;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'poids',
    enonce: `Sur Terre, l'intensité de pesanteur vaut $g = 10$ N/kg. Quel est le poids d'un objet de masse $${m}$ kg ?`,
    bonne: `${P} N`,
    distracteurs: [
      `${m} N`,
      `${P + 10} N`,
      `${P - 10} N`,
      `${m + 10} N`,
      `${P + 1} N`,
    ],
    explication: `P = m × g = ${m} × 10 = ${P} N. Le poids (en newtons) n'est pas la masse (en kilogrammes).`,
  }, rand);
}

/** Énergie : E = P·t (puissance en W, durée en h → énergie en Wh). */
export function energiePuissanceTemps(rand) {
  const P = 5 * entier(rand, 2, 20); // 10..100 W
  const t = entier(rand, 2, 8); // heures
  const E = P * t;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'energie',
    enonce: `Un appareil de puissance $${P}$ W fonctionne pendant $${t}$ h. Quelle énergie consomme-t-il ?`,
    bonne: `${E} Wh`,
    distracteurs: [
      `${P + t} Wh`,
      `${P} Wh`,
      `${E + P} Wh`,
      `${E - P} Wh`,
      `${E + 1} Wh`,
    ],
    explication: `E = P × t = ${P} × ${t} = ${E} Wh. L'énergie est le produit de la puissance par la durée.`,
  }, rand);
}

// ── Trigonométrie dans le triangle rectangle (rapports exacts) ────────────────

/**
 * Rapport trigonométrique (cos, sin ou tan) d'un angle aigu d'un triangle
 * rectangle. On part d'un triplet pythagoricien entier → tous les rapports sont
 * des fractions exactes (réduites par fracLatex).
 */
export function trigRatio(rand) {
  const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]];
  const [p, q, h] = choisir(rand, triplets);
  // On place l'angle aigu Â : côté adjacent `adj`, côté opposé `opp`.
  const adjEstP = rand() < 0.5;
  const adj = adjEstP ? p : q;
  const opp = adjEstP ? q : p;
  const type = choisir(rand, ['cos', 'sin', 'tan']);
  let bonne;
  let formule;
  let calc;
  if (type === 'cos') { bonne = fracLatex(adj, h); formule = '\\cos'; calc = `\\dfrac{\\text{adjacent}}{\\text{hypoténuse}} = \\dfrac{${adj}}{${h}}`; }
  else if (type === 'sin') { bonne = fracLatex(opp, h); formule = '\\sin'; calc = `\\dfrac{\\text{opposé}}{\\text{hypoténuse}} = \\dfrac{${opp}}{${h}}`; }
  else { bonne = fracLatex(opp, adj); formule = '\\tan'; calc = `\\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{${opp}}{${adj}}`; }
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'trigonometrie',
    enonce: `Triangle rectangle : hypoténuse $${h}$, côté adjacent à l'angle $\\widehat{A}$ mesurant $${adj}$, côté opposé mesurant $${opp}$. Que vaut $${formule}\\,\\widehat{A}$ ?`,
    bonne: `$${bonne}$`,
    distracteurs: [
      `$${fracLatex(opp, h)}$`,
      `$${fracLatex(adj, h)}$`,
      `$${fracLatex(opp, adj)}$`,
      `$${fracLatex(adj, opp)}$`,
      `$${fracLatex(h, adj)}$`,
      `$${fracLatex(h, opp)}$`,
    ],
    explication: `$${formule}\\,\\widehat{A} = ${calc} = ${bonne}$. Rappel : cos = adjacent/hypoténuse, sin = opposé/hypoténuse, tan = opposé/adjacent.`,
  }, rand);
}

// ── Vitesse ↔ distance ↔ temps ───────────────────────────────────────────────

/** Distance parcourue : d = v·t. */
export function distanceParcourue(rand) {
  const v = entier(rand, 2, 20);
  const t = entier(rand, 2, 12);
  const d = v * t;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'vitesse',
    enonce: `Un mobile se déplace à ${v} m/s pendant ${t} s. Quelle distance parcourt-il ?`,
    bonne: `${d} m`,
    distracteurs: [
      `${v + t} m`,
      `${v} m`,
      `${t} m`,
      `${d + v} m`,
      `${d - v} m`,
      `${d + 1} m`,
      `${d - 1} m`,
    ],
    explication: `d = v × t = ${v} × ${t} = ${d} m.`,
  }, rand);
}

/** Durée du parcours : t = d / v. */
export function dureeParcours(rand) {
  const v = entier(rand, 2, 20);
  const t = entier(rand, 2, 12);
  const d = v * t;
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'vitesse',
    enonce: `Un mobile se déplace à ${v} m/s et parcourt ${d} m. Combien de temps met-il ?`,
    bonne: `${t} s`,
    distracteurs: [
      `${d} s`,
      `${v} s`,
      `${t + 1} s`,
      `${t - 1} s`,
      `${d - v} s`,
      `${t + 2} s`,
    ],
    explication: `t = d ÷ v = ${d} ÷ ${v} = ${t} s.`,
  }, rand);
}

// ── Conversions d'unités (résultats entiers) ─────────────────────────────────

/** Conversion de longueur d'une unité vers une plus petite (× puissance de 10). */
export function conversionLongueur(rand) {
  const paires = [['km', 'm', 1000], ['m', 'cm', 100], ['cm', 'mm', 10], ['m', 'mm', 1000]];
  const [de, vers, f] = choisir(rand, paires);
  const val = entier(rand, 2, 9);
  const r = val * f;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'conversion',
    enonce: `Combien de ${vers} y a-t-il dans $${val}$ ${de} ?`,
    bonne: `${r} ${vers}`,
    distracteurs: [
      `${val} ${vers}`,
      `${val + f} ${vers}`,
      `${r + val} ${vers}`,
      `${r - val} ${vers}`,
      `${val * (f + 1)} ${vers}`,
    ],
    explication: `1 ${de} = ${f} ${vers}, donc ${val} ${de} = ${val} × ${f} = ${r} ${vers}.`,
  }, rand);
}

/** Conversion de durée (heures, minutes, secondes, jours). */
export function conversionDuree(rand) {
  const paires = [['h', 'min', 60], ['min', 's', 60], ['j', 'h', 24]];
  const [de, vers, f] = choisir(rand, paires);
  const val = entier(rand, 2, 9);
  const r = val * f;
  return construireQuestion({
    difficulte: 'facile',
    notion: 'conversion',
    enonce: `Combien de ${vers} y a-t-il dans $${val}$ ${de} ?`,
    bonne: `${r} ${vers}`,
    distracteurs: [
      `${val} ${vers}`,
      `${val + f} ${vers}`,
      `${r + val} ${vers}`,
      `${r - val} ${vers}`,
      `${val * (f + 1)} ${vers}`,
    ],
    explication: `1 ${de} = ${f} ${vers}, donc ${val} ${de} = ${val} × ${f} = ${r} ${vers}.`,
  }, rand);
}

// ── Anglais : drills générés (verbes, pluriels, passif) ──────────────────────

/** Verbes irréguliers : [base, prétérit, participe passé]. */
const VERBES_IRR = [
  ['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['take', 'took', 'taken'],
  ['give', 'gave', 'given'], ['come', 'came', 'come'], ['know', 'knew', 'known'],
  ['get', 'got', 'got'], ['make', 'made', 'made'], ['find', 'found', 'found'],
  ['think', 'thought', 'thought'], ['buy', 'bought', 'bought'], ['bring', 'brought', 'brought'],
  ['teach', 'taught', 'taught'], ['catch', 'caught', 'caught'], ['eat', 'ate', 'eaten'],
  ['drink', 'drank', 'drunk'], ['drive', 'drove', 'driven'], ['write', 'wrote', 'written'],
  ['speak', 'spoke', 'spoken'], ['break', 'broke', 'broken'], ['choose', 'chose', 'chosen'],
  ['begin', 'began', 'begun'], ['sing', 'sang', 'sung'], ['swim', 'swam', 'swum'],
  ['ride', 'rode', 'ridden'], ['fall', 'fell', 'fallen'], ['fly', 'flew', 'flown'],
  ['grow', 'grew', 'grown'], ['throw', 'threw', 'thrown'], ['wear', 'wore', 'worn'],
  ['sell', 'sold', 'sold'], ['tell', 'told', 'told'], ['feel', 'felt', 'felt'],
  ['keep', 'kept', 'kept'], ['leave', 'left', 'left'], ['lose', 'lost', 'lost'],
  ['meet', 'met', 'met'], ['pay', 'paid', 'paid'], ['send', 'sent', 'sent'],
  ['sleep', 'slept', 'slept'], ['spend', 'spent', 'spent'], ['win', 'won', 'won'],
  ['build', 'built', 'built'], ['hear', 'heard', 'heard'], ['hold', 'held', 'held'],
  ['stand', 'stood', 'stood'], ['understand', 'understood', 'understood'], ['run', 'ran', 'run'],
];

/** Prétérit d'un verbe irrégulier. */
export function verbeIrregulierPreterit(rand) {
  const [base, pret, pp] = choisir(rand, VERBES_IRR);
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'verbes-irreguliers',
    enonce: `Quel est le prétérit du verbe « ${base} » ?`,
    bonne: pret,
    distracteurs: [`${base}ed`, base, pp, `${base}t`, `have ${base}`, `${base}s`],
    explication: `${base} → prétérit « ${pret} » → participe passé « ${pp} ». Un verbe irrégulier ne prend pas -ed au prétérit.`,
  }, rand);
}

/** Participe passé d'un verbe irrégulier. */
export function verbeIrregulierParticipe(rand) {
  const [base, pret, pp] = choisir(rand, VERBES_IRR);
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'verbes-irreguliers',
    enonce: `Quel est le participe passé de « ${base} » ? (have + …)`,
    bonne: pp,
    distracteurs: [`${base}ed`, base, pret, `${base}en`, `have ${base}`, `${base}s`],
    explication: `${base} → participe passé « ${pp} » (have ${pp}). Au present perfect et au passif, on emploie le participe passé, pas le prétérit « ${pret} ».`,
  }, rand);
}

/** Pluriels irréguliers : [singulier, pluriel, [3 intrus]]. */
const PLURIELS = [
  ['man', 'men', ['mans', 'mens', 'man']],
  ['woman', 'women', ['womans', 'womens', 'woman']],
  ['child', 'children', ['childs', 'childrens', 'childes']],
  ['foot', 'feet', ['foots', 'feets', 'footes']],
  ['tooth', 'teeth', ['tooths', 'teeths', 'toothes']],
  ['mouse', 'mice', ['mouses', 'mouse', 'mices']],
  ['person', 'people', ['persons', 'peoples', 'personnes']],
  ['leaf', 'leaves', ['leafs', 'leafes', 'leave']],
  ['knife', 'knives', ['knifes', 'knifs', 'knive']],
  ['wife', 'wives', ['wifes', 'wifs', 'wive']],
  ['life', 'lives', ['lifes', 'lifs', 'live']],
  ['city', 'cities', ['citys', 'cityes', 'citie']],
  ['baby', 'babies', ['babys', 'babyes', 'babie']],
  ['country', 'countries', ['countrys', 'countryes', 'countrie']],
  ['box', 'boxes', ['boxs', 'boxies', 'box']],
  ['watch', 'watches', ['watchs', 'watchies', 'watch']],
  ['bus', 'buses', ['buss', 'busses', 'busies']],
  ['tomato', 'tomatoes', ['tomatos', 'tomatoies', 'tomato']],
  ['sheep', 'sheep', ['sheeps', 'sheepes', 'shept']],
  ['fish', 'fish', ['fishs', 'fishes', 'fisches']],
];

/** Pluriel irrégulier d'un nom. */
export function plurielIrregulier(rand) {
  const [s, p, w] = choisir(rand, PLURIELS);
  return construireQuestion({
    difficulte: 'facile',
    notion: 'pluriels',
    enonce: `Quel est le pluriel de « ${s} » ?`,
    bonne: p,
    distracteurs: [...w, `${s}s`, `${s}es`, s],
    explication: p === s
      ? `« ${s} » est invariable : le pluriel est identique au singulier.`
      : `« ${s} » a un pluriel irrégulier : « ${p} » (et non « ${s}s »).`,
  }, rand);
}

/** Prétérit régulier (règles d'orthographe) : [base, correct, [3 intrus]]. */
const REGULIERS = [
  ['play', 'played', ['plaid', 'playd', 'plaied']],
  ['watch', 'watched', ['watchd', 'wached', 'watchted']],
  ['want', 'wanted', ['wantd', 'wantt', 'wanded']],
  ['live', 'lived', ['liveed', 'livd', 'lifed']],
  ['stop', 'stopped', ['stoped', 'stopd', 'stopt']],
  ['study', 'studied', ['studyed', 'studed', 'studdied']],
  ['travel', 'travelled', ['traveled', 'traveld', 'travled']],
  ['cook', 'cooked', ['cookd', 'cookt', 'coocked']],
  ['help', 'helped', ['helpd', 'helpt', 'holped']],
  ['carry', 'carried', ['carryed', 'carred', 'carrid']],
  ['try', 'tried', ['tryed', 'tride', 'tryd']],
  ['arrive', 'arrived', ['arriveed', 'arrivd', 'arrifed']],
  ['decide', 'decided', ['decideed', 'decidd', 'decded']],
  ['enjoy', 'enjoyed', ['enjoid', 'enjoyd', 'enjoied']],
  ['plan', 'planned', ['planed', 'pland', 'plant']],
  ['clean', 'cleaned', ['cleand', 'cleant', 'clened']],
  ['open', 'opened', ['opend', 'openned', 'opent']],
  ['close', 'closed', ['closeed', 'closd', 'clost']],
  ['start', 'started', ['startd', 'startt', 'sterted']],
  ['use', 'used', ['useed', 'usd', 'uset']],
];

/** Prétérit d'un verbe régulier (piège orthographique). */
export function preteritRegulier(rand) {
  const [base, correct, w] = choisir(rand, REGULIERS);
  return construireQuestion({
    difficulte: 'facile',
    notion: 'preterit-regulier',
    enonce: `Quel est le prétérit du verbe régulier « ${base} » ?`,
    bonne: correct,
    distracteurs: [...w, `${base}ed`, base, `${base}d`],
    explication: `« ${base} » → « ${correct} ». On ajoute -ed, en adaptant l'orthographe (doubler la consonne, y → ied, e muet…).`,
  }, rand);
}

/** Phrases pour la voix passive au présent : sujet / verbe / participe / complément. */
const PASSIF = [
  ['The chef', 'cooks', 'cooked', 'the meal', 'is'],
  ['The teacher', 'explains', 'explained', 'the lesson', 'is'],
  ['Workers', 'build', 'built', 'the houses', 'are'],
  ['The company', 'sells', 'sold', 'the tickets', 'are', 'the tickets'],
  ['A famous artist', 'paints', 'painted', 'the picture', 'is'],
  ['The students', 'clean', 'cleaned', 'the classroom', 'is'],
  ['The postman', 'delivers', 'delivered', 'the letters', 'are'],
  ['Millions of people', 'speak', 'spoken', 'English', 'is'],
];

/** Transformation actif → passif (présent simple). */
export function actifPassif(rand) {
  const item = choisir(rand, PASSIF);
  const [subj, verbS, pp, obj, aux] = item;
  const objCap = obj.charAt(0).toUpperCase() + obj.slice(1);
  const subjL = subj.charAt(0).toLowerCase() + subj.slice(1);
  const bonne = `${objCap} ${aux} ${pp} by ${subjL}.`;
  return construireQuestion({
    difficulte: 'difficile',
    notion: 'voix-passive',
    enonce: `Mets à la voix passive : « ${subj} ${verbS} ${obj}. »`,
    bonne,
    distracteurs: [
      `${objCap} ${aux} ${verbS} by ${subjL}.`,
      `${objCap} was ${pp} by ${subjL}.`,
      `${objCap} ${pp} by ${subjL}.`,
      `${objCap} ${aux} being ${pp} by ${subjL}.`,
      `${objCap} ${aux} ${pp.replace(/e?d$/, '')} by ${subjL}.`,
    ],
    explication: `Passif = be + participe passé : « ${bonne} » On garde le présent (${aux}) et on emploie le participe passé « ${pp} ».`,
  }, rand);
}

// ── Espagnol : drills de conjugaison ─────────────────────────────────────────

const PRONOMS_ES = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos/ellas'];
const TERM_PRESENT_ES = {
  ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
  er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
  ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
};
const TERM_INDEF_ES = {
  ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
  erir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
};
const VERBES_REG_ES = [
  ['hablar', 'habl', 'ar'], ['cantar', 'cant', 'ar'], ['trabajar', 'trabaj', 'ar'],
  ['estudiar', 'estudi', 'ar'], ['comprar', 'compr', 'ar'], ['comer', 'com', 'er'],
  ['beber', 'beb', 'er'], ['aprender', 'aprend', 'er'], ['vivir', 'viv', 'ir'],
  ['escribir', 'escrib', 'ir'], ['abrir', 'abr', 'ir'], ['subir', 'sub', 'ir'],
];

/** Présent régulier espagnol : conjuguer un verbe à une personne. */
export function presenteRegularES(rand) {
  const [inf, stem, grp] = choisir(rand, VERBES_REG_ES);
  const i = entier(rand, 0, 5);
  const term = TERM_PRESENT_ES[grp];
  const bonne = stem + term[i];
  return construireQuestion({
    difficulte: 'facile',
    notion: 'presente-regular',
    enonce: `Conjugue « ${inf} » au présent avec « ${PRONOMS_ES[i]} ».`,
    bonne,
    distracteurs: term.filter((_, j) => j !== i).map((t) => stem + t),
    explication: `${inf} (${grp === 'ar' ? '1er' : grp === 'er' ? '2e' : '3e'} groupe) → ${PRONOMS_ES[i]} ${bonne}. Terminaisons : ${term.join(', ')}.`,
  }, rand);
}

const VERBES_IRR_PRES_ES = {
  ser: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
  estar: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
  tener: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
  ir: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
  hacer: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
  poder: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
};

/** Présent irrégulier espagnol (ser, estar, tener, ir, hacer, poder). */
export function verboIrregularPresenteES(rand) {
  const inf = choisir(rand, Object.keys(VERBES_IRR_PRES_ES));
  const formes = VERBES_IRR_PRES_ES[inf];
  const i = entier(rand, 0, 5);
  const bonne = formes[i];
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'presente-irregular',
    enonce: `Conjugue « ${inf} » au présent avec « ${PRONOMS_ES[i]} ».`,
    bonne,
    distracteurs: formes.filter((_, j) => j !== i).concat([`${inf.slice(0, -2)}o`, `${inf.slice(0, -2)}e`]),
    explication: `${inf} est irrégulier : ${PRONOMS_ES.map((p, k) => `${p} ${formes[k]}`).join(', ')}.`,
  }, rand);
}

/** Pretérito indefinido régulier espagnol. */
export function preteritoRegularES(rand) {
  const [inf, stem, grp] = choisir(rand, VERBES_REG_ES);
  const term = grp === 'ar' ? TERM_INDEF_ES.ar : TERM_INDEF_ES.erir;
  const i = entier(rand, 0, 5);
  const bonne = stem + term[i];
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'preterito-indefinido',
    enonce: `Conjugue « ${inf} » au pretérito indefinido avec « ${PRONOMS_ES[i]} ».`,
    bonne,
    distracteurs: term.filter((_, j) => j !== i).map((t) => stem + t).concat([stem + (grp === 'ar' ? 'ó' : 'ió')]),
    explication: `${inf} → ${PRONOMS_ES[i]} ${bonne}. Terminaisons de l'indéfini (${grp === 'ar' ? '-ar' : '-er/-ir'}) : ${term.join(', ')}.`,
  }, rand);
}

// ── Allemand : drills de conjugaison et de genre ─────────────────────────────

const PRONOMS_DE = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const TERM_PRESENT_DE = ['e', 'st', 't', 'en', 't', 'en'];
const VERBES_REG_DE = [
  ['machen', 'mach'], ['spielen', 'spiel'], ['lernen', 'lern'], ['wohnen', 'wohn'],
  ['kaufen', 'kauf'], ['fragen', 'frag'], ['sagen', 'sag'], ['hören', 'hör'],
  ['brauchen', 'brauch'], ['suchen', 'such'],
];

/** Présent allemand régulier. */
export function praesensRegularDE(rand) {
  const [inf, stem] = choisir(rand, VERBES_REG_DE);
  const i = entier(rand, 0, 5);
  const bonne = stem + TERM_PRESENT_DE[i];
  return construireQuestion({
    difficulte: 'facile',
    notion: 'praesens',
    enonce: `Conjugue « ${inf} » au présent avec « ${PRONOMS_DE[i]} ».`,
    bonne,
    distracteurs: [stem + 'e', stem + 'st', stem + 't', stem + 'en', stem + 'et', inf],
    explication: `${inf} → ${PRONOMS_DE[i]} ${bonne}. Terminaisons : ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.`,
  }, rand);
}

const VERBES_IRR_DE = {
  sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
  haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'],
  werden: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'],
  können: ['kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
  müssen: ['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
};

/** Présent des auxiliaires et modaux allemands. */
export function seinHabenModalDE(rand) {
  const inf = choisir(rand, Object.keys(VERBES_IRR_DE));
  const formes = VERBES_IRR_DE[inf];
  const i = entier(rand, 0, 5);
  const bonne = formes[i];
  const uniques = [...new Set(formes)].filter((f) => f !== bonne);
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'verbes-irreguliers',
    enonce: `Conjugue « ${inf} » au présent avec « ${PRONOMS_DE[i]} ».`,
    bonne,
    distracteurs: uniques.concat([inf, formes[0], `${bonne}t`, `${bonne}st`]),
    explication: `${inf} : ${PRONOMS_DE.map((p, k) => `${p} ${formes[k]}`).join(', ')}.`,
  }, rand);
}

const NOMS_GENRE_DE = [
  ['Mann', 'der'], ['Frau', 'die'], ['Kind', 'das'], ['Tisch', 'der'], ['Tür', 'die'],
  ['Buch', 'das'], ['Hund', 'der'], ['Katze', 'die'], ['Haus', 'das'], ['Apfel', 'der'],
  ['Schule', 'die'], ['Auto', 'das'], ['Baum', 'der'], ['Blume', 'die'], ['Wasser', 'das'],
  ['Tag', 'der'], ['Nacht', 'die'], ['Jahr', 'das'], ['Freund', 'der'], ['Familie', 'die'],
];

/** Genre : l'article défini (nominatif) d'un nom allemand. */
export function artikelGenusDE(rand) {
  const [nom, art] = choisir(rand, NOMS_GENRE_DE);
  const autres = ['der', 'die', 'das'].filter((a) => a !== art);
  return construireQuestion({
    difficulte: 'facile',
    notion: 'artikel-genus',
    enonce: `Quel est l'article défini (nominatif) de « ${nom} » ?`,
    bonne: art,
    distracteurs: [...autres, 'dem'],
    explication: `On dit « ${art} ${nom} ». En allemand, le genre s'apprend avec le nom. (« dem » est le datif, pas le nominatif.)`,
  }, rand);
}

// ── Italien : drills de conjugaison ──────────────────────────────────────────

const PRONOMS_IT = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
const TERM_PRESENT_IT = {
  are: ['o', 'i', 'a', 'iamo', 'ate', 'ano'],
  ere: ['o', 'i', 'e', 'iamo', 'ete', 'ono'],
  ire: ['o', 'i', 'e', 'iamo', 'ite', 'ono'],
};
const VERBES_REG_IT = [
  ['parlare', 'parl', 'are'], ['cantare', 'cant', 'are'], ['guardare', 'guard', 'are'],
  ['lavorare', 'lavor', 'are'], ['comprare', 'compr', 'are'],
  ['credere', 'cred', 'ere'], ['ricevere', 'ricev', 'ere'], ['vendere', 'vend', 'ere'], ['temere', 'tem', 'ere'],
  ['dormire', 'dorm', 'ire'], ['partire', 'part', 'ire'], ['aprire', 'apr', 'ire'], ['sentire', 'sent', 'ire'],
];

/** Présent régulier italien. */
export function presenteRegularIT(rand) {
  const [inf, stem, grp] = choisir(rand, VERBES_REG_IT);
  const term = TERM_PRESENT_IT[grp];
  const i = entier(rand, 0, 5);
  const bonne = stem + term[i];
  return construireQuestion({
    difficulte: 'facile',
    notion: 'presente-regolare',
    enonce: `Conjugue « ${inf} » au présent avec « ${PRONOMS_IT[i]} ».`,
    bonne,
    distracteurs: term.filter((_, j) => j !== i).map((tt) => stem + tt),
    explication: `${inf} (${grp}) → ${PRONOMS_IT[i]} ${bonne}. Terminaisons -${grp} : ${term.join(', ')}.`,
  }, rand);
}

const VERBES_IRR_PRES_IT = {
  essere: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
  avere: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
  andare: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
  fare: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
  stare: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'],
  potere: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'],
};

/** Présent irrégulier italien (essere, avere, andare, fare, stare, potere). */
export function verbiIrregolariPresenteIT(rand) {
  const inf = choisir(rand, Object.keys(VERBES_IRR_PRES_IT));
  const formes = VERBES_IRR_PRES_IT[inf];
  const i = entier(rand, 0, 5);
  const bonne = formes[i];
  const uniques = [...new Set(formes)].filter((f) => f !== bonne);
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'presente-irregolare',
    enonce: `Conjugue « ${inf} » au présent avec « ${PRONOMS_IT[i]} ».`,
    bonne,
    distracteurs: uniques.concat([inf, `${inf.slice(0, -1)}o`, `${inf.slice(0, -3)}o`]),
    explication: `${inf} est irrégulier : ${PRONOMS_IT.map((p, k) => `${p} ${formes[k]}`).join(', ')}.`,
  }, rand);
}

/** Participe passé (régulier) italien : -are→-ato, -ere→-uto, -ire→-ito. */
export function participioPassatoIT(rand) {
  const [inf, stem, grp] = choisir(rand, VERBES_REG_IT);
  const bon = grp === 'are' ? `${stem}ato` : (grp === 'ere' ? `${stem}uto` : `${stem}ito`);
  return construireQuestion({
    difficulte: 'moyen',
    notion: 'participio-passato',
    enonce: `Quel est le participe passé de « ${inf} » ?`,
    bonne: bon,
    distracteurs: [`${stem}ato`, `${stem}uto`, `${stem}ito`, `${stem}ando`, `${stem}endo`].filter((x) => x !== bon),
    explication: `${inf} (${grp}) → participe passé « ${bon} ». -are → -ato, -ere → -uto, -ire → -ito.`,
  }, rand);
}
