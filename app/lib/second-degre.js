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
  num /= g;
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
  const v = Number(x.toFixed(decimales));
  return {
    num: null,
    den: null,
    exact: false,
    valeur: v,
    texte: `≈ ${String(v).replace('.', ',')}`,
    latex: `\\approx ${v}`,
  };
}

// ────────────────────────────── cœur du solveur ─────────────────────────────

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

  const delta = b * b - 4 * a * c;
  const exact = estEntier(a) && estEntier(b) && estEntier(c);
  const rd = exact ? racineParfaite(delta) : null;

  const etapes = [
    { titre: 'Coefficients', detail: `a = ${a}, b = ${b}, c = ${c}` },
    {
      titre: 'Discriminant',
      detail: `Δ = b² − 4ac = (${b})² − 4 × ${a} × ${c} = ${delta}`,
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
    const x0 = exact ? fraction(-b, 2 * a) : approche(-b / (2 * a));
    res.nature = 'racine-double';
    res.racines = [x0];
    res.natureTexte = `Δ = 0 : une racine double x₀ = ${x0.texte}.`;
    res.formeFactorisee = `${coefTexte(a)}(x ${signeTexte(-x0.valeur)})²`;
    res.formeFactoriseeLatex = `${coefLatex(a)}\\left(x ${signeLatex(x0)}\\right)^2`;
    etapes.push(
      { titre: 'Racine double', detail: `x₀ = −b / 2a = ${x0.texte}` },
      { titre: 'Forme factorisée', detail: res.formeFactorisee },
    );
  }

  // ── Δ > 0 : deux racines distinctes
  else {
    let x1, x2;
    if (rd !== null) {
      x1 = fraction(-b - rd, 2 * a);
      x2 = fraction(-b + rd, 2 * a);
    } else {
      const s = Math.sqrt(delta);
      x1 = approche((-b - s) / (2 * a));
      x2 = approche((-b + s) / (2 * a));
    }
    if (x1.valeur > x2.valeur) [x1, x2] = [x2, x1]; // toujours croissant
    res.nature = 'deux-racines';
    res.racines = [x1, x2];
    res.natureTexte = `Δ > 0 : deux racines distinctes ${x1.texte} et ${x2.texte}.`;
    res.formeFactorisee =
      `${coefTexte(a)}(x ${signeTexte(-x1.valeur)})(x ${signeTexte(-x2.valeur)})`;
    res.formeFactoriseeLatex =
      `${coefLatex(a)}\\left(x ${signeLatex(x1)}\\right)\\left(x ${signeLatex(x2)}\\right)`;
    etapes.push(
      {
        titre: 'Racines',
        detail: `x = (−b ± √Δ) / 2a  →  x₁ = ${x1.texte}, x₂ = ${x2.texte}`,
      },
      { titre: 'Forme factorisée', detail: res.formeFactorisee },
    );
  }

  // ── Somme et produit (toujours définis, indépendants de Δ)
  res.somme = exact ? fraction(-b, a) : approche(-b / a);
  res.produit = exact ? fraction(c, a) : approche(c / a);

  // ── Forme canonique et sommet
  const alpha = exact ? fraction(-b, 2 * a) : approche(-b / (2 * a));
  const beta = exact ? fraction(-delta, 4 * a) : approche(-delta / (4 * a));
  res.formeCanonique = { alpha, beta };
  res.sommet = { x: alpha, y: beta };
  res.sens = a > 0 ? 'minimum' : 'maximum';
  res.sensTexte =
    a > 0
      ? `a > 0 : parabole tournée vers le haut, minimum ${beta.texte} atteint en ${alpha.texte}.`
      : `a < 0 : parabole tournée vers le bas, maximum ${beta.texte} atteint en ${alpha.texte}.`;

  // ── Tableau de signes
  res.signe = tableauSigne(res);

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

const coefTexte = (a) => (a === 1 ? '' : a === -1 ? '-' : String(a));
const coefLatex = (a) => (a === 1 ? '' : a === -1 ? '-' : String(a));

/** " - 3" ou " + 1/2" — le signe affiché dans (x − x₁). */
function signeTexte(v) {
  const s = v < 0 ? '-' : '+';
  return `${s} ${formateAbs(v)}`;
}
function signeLatex(f) {
  const s = f.valeur > 0 ? '-' : '+';
  const abs = f.exact
    ? f.den === 1
      ? String(Math.abs(f.num))
      : `\\dfrac{${Math.abs(f.num)}}{${f.den}}`
    : String(Math.abs(f.valeur));
  return `${s} ${abs}`;
}
function formateAbs(v) {
  const x = Math.abs(v);
  if (Number.isInteger(x)) return String(x);
  // reconstitution d'une fraction lisible pour les cas courants
  for (let d = 2; d <= 12; d++) {
    if (Number.isInteger(x * d)) return `${x * d}/${d}`;
  }
  return String(Number(x.toFixed(4)));
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
