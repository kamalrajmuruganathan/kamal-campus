/**
 * Kamal Campus — Résolution du second degré
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Règle de conception : quand les coefficients sont entiers et que le discriminant
 * est un carré parfait, on renvoie des racines EXACTES sous forme de fractions
 * réduites (−1/2 et non −0.5). Un élève écrit des fractions, pas des décimaux.
 * Sinon on renvoie une valeur approchée, explicitement marquée comme telle.
 */

// ─────────────────────────────── utilitaires ───────────────────────────────

import { nombre } from './format-calcul.js';

const pgcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) [x, y] = [y, x % y];
  return x || 1;
};

const estEntier = (x) => Number.isInteger(x);

/** Racine carrée entière si n est un carré parfait, sinon null. */
const racineParfaite = (n) => {
  if (n < 0 || !estEntier(n)) return null;
  const r = Math.round(Math.sqrt(n));
  return r * r === n ? r : null;
};

/** Fraction réduite num/den, signe porté par le numérateur. */
function fraction(num, den) {
  if (den === 0) throw new Error('dénominateur nul');
  if (den < 0) {
    num = -num;
    den = -den;
  }
  const g = pgcd(num, den);
  num = num / g || 0; // jamais −0
  den /= g;
  return {
    num,
    den,
    exact: true,
    valeur: num / den,
    texte: den === 1 ? String(num) : `${num}/${den}`,
    latex: den === 1 ? String(num) : `\\dfrac{${num}}{${den}}`,
  };
}

/** Valeur approchée, marquée non exacte. */
function approche(x, decimales = 4) {
  // 4 décimales en général, 4 chiffres significatifs pour les très petites valeurs
  const v = Math.abs(x) >= 1e-3 || x === 0 ? Number(x.toFixed(decimales)) : Number(x.toPrecision(4));
  return {
    num: null,
    den: null,
    exact: false,
    valeur: v,
    texte: `≈ ${nombre(v).replace('.', ',')}`,
    latex: `\\approx ${v}`,
  };
}

// ────────────────────────────── cœur du solveur ─────────────────────────────

/**
 * Coefficients décimaux « simples » (au plus 6 décimales) → entiers A, B, C et
 * facteur k tels que A = k·a, B = k·b, C = k·c. Les racines ne changent pas ;
 * on calcule alors EXACTEMENT (plus de « Δ = 0.010000000000000002 »).
 * Renvoie null si ce n'est pas possible sans perte.
 */
function versEntiers(a, b, c) {
  const decimales = (x) => {
    const s = String(x);
    if (/e/i.test(s)) return Infinity;
    const i = s.indexOf('.');
    return i < 0 ? 0 : s.length - i - 1;
  };
  const d = Math.max(decimales(a), decimales(b), decimales(c));
  if (d > 6) return null;
  const k = 10 ** d;
  const A = Math.round(a * k);
  const B = Math.round(b * k);
  const C = Math.round(c * k);
  const sur = (x) => Number.isSafeInteger(x);
  if (![A, B, C].every(sur)) return null;
  if (!sur(B * B) || !sur(4 * A * C) || !sur(B * B - 4 * A * C) || !sur(4 * A * k)) return null;
  return { A, B, C, k };
}

/** Racine (P + S√m)/D écrite exactement, réduite, dénominateur positif. */
function racineRadicale(P, S, m, D) {
  if (D < 0) { P = -P; S = -S; D = -D; }
  const g = pgcd(pgcd(P, S), D);
  P /= g; S /= g; D /= g;
  const absS = Math.abs(S);
  const partS = `${absS === 1 ? '' : absS}√${m}`;
  const partP = P < 0 ? `−${-P}` : String(P);
  let texte;
  if (P === 0) texte = `${S < 0 ? '−' : ''}${partS}${D === 1 ? '' : `/${D}`}`;
  else {
    const num = `${partP} ${S < 0 ? '−' : '+'} ${partS}`;
    texte = D === 1 ? num : `(${num})/${D}`;
  }
  const valeur = (P + S * Math.sqrt(m)) / D;
  const v = Number(valeur.toFixed(4));
  return {
    num: null,
    den: null,
    exact: false, // irrationnelle : pas une fraction
    radical: true,
    // P = 0 : racine « ±k√m/d », écrite sans parenthèses dans les facteurs
    opposeTexte: P === 0 ? texte.replace(/^−/, '') : null,
    signePositif: P === 0 ? S > 0 : null,
    valeur,
    texte,
    approche: `≈ ${String(v).replace('.', ',')}`,
    latex: texte.replace(/√(\d+)/g, '\\sqrt{$1}').replace(/−/g, '-'),
  };
}

/** Décompose n = s²·m avec m sans facteur carré. */
function extraireCarre(n) {
  let s = 1;
  let m = n;
  for (let d = 2; d * d <= m; d++) {
    while (m % (d * d) === 0) { m /= d * d; s *= d; }
  }
  return { s, m };
}

/** Nombre « propre » pour les étapes (pas de bruit flottant, -0 → 0). */
function propre(x) {
  if (x === 0) return 0;
  return Number.isInteger(x) ? x : Number(x.toPrecision(12));
}
const parenthese = (x) => (x < 0 ? `(${nombre(x)})` : nombre(x));
/** « = 1/2 » pour une valeur exacte, « ≈ 0,2679 » pour une valeur approchée. */
const egal = (x) => (x.exact || x.radical ? `= ${x.texte}` : x.texte);

/**
 * Résout et analyse ax² + bx + c.
 * @param {number} a coefficient de x² (doit être non nul)
 * @param {number} b coefficient de x
 * @param {number} c terme constant
 * @returns {object} analyse complète, avec étapes pédagogiques
 */
export function resoudreSecondDegre(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'
      || !Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    return { valide: false, erreur: 'Les trois coefficients doivent être des nombres.' };
  }
  if (a === 0) {
    return {
      valide: false,
      erreur: "a doit être non nul : si a = 0, la fonction est affine, pas du second degré.",
    };
  }
  // −0 s'afficherait « 0 » mais fausserait des tests de signe : on normalise.
  if (b === 0) b = 0;
  if (c === 0) c = 0;

  const E = versEntiers(a, b, c);
  const exact = E !== null;
  const deltaEntier = exact ? E.B * E.B - 4 * E.A * E.C : null;
  const delta = exact ? propre(deltaEntier / (E.k * E.k)) : propre(b * b - 4 * a * c);
  const rd = exact ? racineParfaite(deltaEntier) : null;

  const etapes = [
    { titre: 'Coefficients', detail: `a = ${nombre(a)}, b = ${nombre(b)}, c = ${nombre(c)}` },
    {
      titre: 'Discriminant',
      detail: `Δ = b² − 4ac = (${nombre(b)})² − 4 × ${parenthese(a)} × ${parenthese(c)} = ${/e/.test(String(delta)) ? nombre(delta) : delta}`,
      latex: `\\Delta = b^2 - 4ac = ${delta}`,
    },
  ];

  const res = {
    valide: true,
    a, b, c, delta,
    exact: exact && (delta < 0 || rd !== null),
    etapes,
  };

  // ── Δ < 0 : aucune racine réelle
  if (delta < 0) {
    res.nature = 'aucune-racine';
    res.racines = [];
    res.formeFactorisee = null;
    res.natureTexte = 'Δ < 0 : aucune racine réelle, pas de factorisation dans ℝ.';
    etapes.push({ titre: 'Conclusion', detail: res.natureTexte });
  }

  // ── Δ = 0 : racine double
  else if (delta === 0) {
    const x0 = exact ? fraction(-E.B, 2 * E.A) : approche(-b / (2 * a));
    res.nature = 'racine-double';
    res.racines = [x0];
    res.natureTexte = `Δ = 0 : une racine double x₀ ${egal(x0)}.`;
    res.formeFactorisee = `${coefTexte(a)}${facteur(x0)}²`;
    res.formeFactoriseeLatex = `${coefLatex(a)}\\left(x ${signeLatex(x0)}\\right)^2`;
    etapes.push(
      { titre: 'Racine double', detail: `x₀ = −b / 2a ${egal(x0)}` },
      { titre: 'Forme factorisée', detail: `f(x) = ${res.formeFactorisee}` },
    );
  }

  // ── Δ > 0 : deux racines distinctes
  else {
    let x1, x2;
    if (rd !== null) {
      x1 = fraction(-E.B - rd, 2 * E.A);
      x2 = fraction(-E.B + rd, 2 * E.A);
    } else if (exact) {
      const { s, m } = extraireCarre(deltaEntier);
      x1 = racineRadicale(-E.B, -s, m, 2 * E.A);
      x2 = racineRadicale(-E.B, s, m, 2 * E.A);
    } else {
      const s = Math.sqrt(delta);
      x1 = approche((-b - s) / (2 * a));
      x2 = approche((-b + s) / (2 * a));
    }
    if (x1.valeur > x2.valeur) [x1, x2] = [x2, x1]; // toujours croissant
    const avecApprox = (x) => (x.radical ? `${x.texte} ${x.approche}` : x.texte);
    const avecEgal = (x) => (x.radical ? `= ${x.texte} ${x.approche}` : egal(x));
    res.nature = 'deux-racines';
    res.racines = [x1, x2];
    res.natureTexte = `Δ > 0 : deux racines distinctes ${avecApprox(x1)} et ${avecApprox(x2)}.`;
    res.formeFactorisee = `${coefTexte(a)}${facteurProduit(x1, x2)}`;
    res.formeFactoriseeLatex =
      `${coefLatex(a)}\\left(x ${signeLatex(x1)}\\right)\\left(x ${signeLatex(x2)}\\right)`;
    etapes.push(
      {
        titre: 'Racines',
        detail: `x = (−b ± √Δ) / 2a  →  x₁ ${avecEgal(x1)}, x₂ ${avecEgal(x2)}`,
      },
      {
        titre: 'Forme factorisée',
        detail: `f(x) = ${res.formeFactorisee}`,
        ...(x1.exact || x1.radical ? {} : { remarque: 'Racines approchées : cette factorisation est elle aussi approchée.' }),
      },
    );
  }

  // ── Somme et produit (toujours définis, indépendants de Δ)
  res.somme = exact ? fraction(-E.B, E.A) : approche(-b / a);
  res.produit = exact ? fraction(E.C, E.A) : approche(c / a);

  // ── Forme canonique et sommet : β = −Δ/(4a) = −(B² − 4AC)/(4Ak)
  const alpha = exact ? fraction(-E.B, 2 * E.A) : approche(-b / (2 * a));
  const beta = exact ? fraction(-deltaEntier, 4 * E.A * E.k) : approche(-delta / (4 * a));
  res.formeCanonique = { alpha, beta };
  res.sommet = { x: alpha, y: beta };
  res.sens = a > 0 ? 'minimum' : 'maximum';
  res.sensTexte =
    a > 0
      ? `a > 0 : parabole tournée vers le haut, minimum ${beta.texte} atteint en ${alpha.texte}.`
      : `a < 0 : parabole tournée vers le bas, maximum ${beta.texte} atteint en ${alpha.texte}.`;

  // ── Tableau de signes
  res.signe = tableauSigne(res);

  const canon = `${coefTexte(a)}${facteur(alpha)}²${beta.valeur === 0 ? '' : ` ${beta.valeur < 0 ? '-' : '+'} ${absTexte(beta)}`}`;
  res.formeCanoniqueTexte = canon;
  etapes.push(
    {
      titre: 'Forme canonique et sommet',
      detail: `α = −b / 2a ${egal(alpha)} et β = f(α) ${egal(beta)}, donc f(x) ${exact ? '=' : '≈'} ${canon}. `
        + `Sommet S(${alpha.texte} ; ${beta.texte}).`,
    },
    { titre: 'Variations', detail: res.sensTexte },
    { titre: 'Signe de f(x)', detail: res.signe.resume },
  );

  return res;
}

// ────────────────────────────── signe du trinôme ────────────────────────────

function tableauSigne(res) {
  const signeA = res.a > 0 ? 'positif' : 'négatif';
  const signeOppose = res.a > 0 ? 'négatif' : 'positif';

  if (res.nature === 'aucune-racine') {
    return {
      resume: `f(x) est ${signeA} sur ℝ tout entier, sans jamais s'annuler.`,
      intervalles: [{ de: '-∞', a: '+∞', signe: res.a > 0 ? '+' : '-' }],
    };
  }
  if (res.nature === 'racine-double') {
    const x0 = res.racines[0].texte;
    return {
      resume: `f(x) est ${signeA} sur ℝ, et s'annule uniquement en ${x0}.`,
      intervalles: [
        { de: '-∞', a: x0, signe: res.a > 0 ? '+' : '-' },
        { de: x0, a: '+∞', signe: res.a > 0 ? '+' : '-' },
      ],
    };
  }
  const [x1, x2] = res.racines;
  return {
    resume:
      `f(x) est ${signeA} à l'extérieur des racines (avant ${x1.texte} et après ${x2.texte}), ` +
      `et ${signeOppose} entre ${x1.texte} et ${x2.texte}.`,
    intervalles: [
      { de: '-∞', a: x1.texte, signe: res.a > 0 ? '+' : '-' },
      { de: x1.texte, a: x2.texte, signe: res.a > 0 ? '-' : '+' },
      { de: x2.texte, a: '+∞', signe: res.a > 0 ? '+' : '-' },
    ],
  };
}

// ──────────────────────────────── formatage ─────────────────────────────────

const coefTexte = (a) => (a === 1 ? '' : a === -1 ? '-' : nombre(a));
const coefLatex = (a) => (a === 1 ? '' : a === -1 ? '-' : String(a));

/** Valeur absolue d'une racine, écrite telle quelle (fraction ou décimal). */
function absTexte(x) {
  if (x.exact) return x.den === 1 ? String(Math.abs(x.num)) : `${Math.abs(x.num)}/${x.den}`;
  return nombre(Number(Math.abs(x.valeur).toPrecision(10)));
}

/** Facteur (x − x₀) : « x » si x₀ = 0, « (x - 2) », « (x + 1/2) », « (x - (2 − √3)) ». */
function facteur(x0) {
  if (x0.radical) {
    if (x0.opposeTexte !== null) return `(x ${x0.signePositif ? '-' : '+'} ${x0.opposeTexte})`;
    return `(x - (${x0.texte}))`;
  }
  if (x0.valeur === 0) return 'x';
  return `(x ${x0.valeur > 0 ? '-' : '+'} ${absTexte(x0)})`;
}

/** Produit des deux facteurs ; « x(x - 2) » plutôt que « (x + 0)(x - 2) ». */
function facteurProduit(x1, x2) {
  if (x2.valeur === 0 && x1.valeur !== 0) return `${facteur(x2)}${facteur(x1)}`;
  return `${facteur(x1)}${facteur(x2)}`;
}

function signeLatex(f) {
  if (f.radical) return `- \\left(${f.latex}\\right)`;
  const s = f.valeur > 0 ? '-' : '+';
  const abs = f.exact
    ? f.den === 1
      ? String(Math.abs(f.num))
      : `\\dfrac{${Math.abs(f.num)}}{${f.den}}`
    : String(Math.abs(f.valeur));
  return `${s} ${abs}`;
}

/**
 * Recherche d'une racine évidente parmi les valeurs simples.
 * Sert la « stratégie 1 » du programme : on la propose AVANT le discriminant.
 */
export function racineEvidente(a, b, c) {
  for (const x of [0, 1, -1, 2, -2, 3, -3]) {
    if (a * x * x + b * x + c === 0) return x;
  }
  return null;
}

/**
 * Deux réels de somme s et de produit p sont racines de x² − sx + p.
 * Renvoie null s'ils n'existent pas dans ℝ.
 */
export function deTelsNombres(s, p) {
  const d = s * s - 4 * p;
  if (d < 0) return null;
  const r = resoudreSecondDegre(1, -s, p);
  return r.racines;
}
