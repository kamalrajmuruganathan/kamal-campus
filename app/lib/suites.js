/**
 * Kamal Campus — Suites arithmétiques et géométriques
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Deux conventions reprises de `second-degre.js` :
 *   - résultats exacts en fractions réduites quand c'est possible ;
 *   - chaque fonction renvoie un tableau `etapes` : l'outil montre le
 *     raisonnement, sinon ce n'est qu'une calculatrice.
 *
 * ⚠️ L'indice du premier terme est un paramètre explicite (`p`, par défaut 0).
 * C'est la source d'erreur numéro un du chapitre : une suite qui commence à u₁
 * n'a pas la même formule qu'une suite qui commence à u₀.
 */

import { nombre, par } from './format-calcul.js';

// ─────────────────────────────── rationnels ─────────────────────────────────

const pgcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) [x, y] = [y, x % y];
  return x || 1;
};

const estEntier = (x) => Number.isInteger(x);

/** Fraction réduite, signe porté par le numérateur. */
function fraction(num, den = 1) {
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

function approche(x, decimales = 6) {
  // 6 décimales pour les valeurs courantes, 6 chiffres significatifs pour les
  // très petites (sinon 3 × 0,5^30 deviendrait 0).
  const v = Math.abs(x) >= 1e-3 || x === 0 ? Number(x.toFixed(decimales)) : Number(x.toPrecision(6));
  return {
    num: null,
    den: null,
    exact: false,
    valeur: v,
    texte: `≈ ${nombre(v).replace('.', ',')}`,
    latex: `\\approx ${v}`,
  };
}

/** Emballe un nombre : exact si entier, approché sinon. */
const nb = (x) => (estEntier(x) ? fraction(x) : approche(x));

// ──────────────────────────── reconnaître la nature ─────────────────────────

/**
 * Détermine si une liste de termes suit une suite arithmétique ou géométrique.
 * @param {number[]} termes au moins 3 termes consécutifs
 */
export function reconnaitreNature(termes) {
  if (!Array.isArray(termes) || termes.length < 3) {
    return { valide: false, erreur: 'Il faut au moins trois termes consécutifs pour conclure.' };
  }
  if (termes.some((t) => typeof t !== 'number' || !Number.isFinite(t))) {
    return { valide: false, erreur: 'Tous les termes doivent être des nombres.' };
  }

  const diffs = termes.slice(1).map((t, i) => t - termes[i]);
  // tolérance relative : 0,1 ; 0,2 ; 0,3 a des différences 0,1 et 0,09999999999999998
  const echelle = Math.max(1, ...termes.map((t) => Math.abs(t)));
  const memeDiff = diffs.every((d) => Math.abs(d - diffs[0]) < 1e-9 * echelle);

  const etapes = [
    { titre: 'Différences successives', detail: diffs.map((d) => nombre(propre(d))).join(' · ') },
  ];

  if (memeDiff) {
    etapes.push({ titre: 'Conclusion', detail: `Différence constante : suite arithmétique de raison ${nombre(propre(diffs[0]))}.` });
    return { valide: true, nature: 'arithmetique', raison: nb(propre(diffs[0])), etapes };
  }

  // quotients — seulement si aucun terme nul
  if (termes.some((t) => t === 0)) {
    etapes.push({ titre: 'Quotients', detail: 'Impossible : un terme est nul, on ne peut pas diviser.' });
    etapes.push({ titre: 'Conclusion', detail: "La suite n'est ni arithmétique ni géométrique." });
    return { valide: true, nature: 'ni-l-un-ni-l-autre', raison: null, etapes };
  }

  const quots = termes.slice(1).map((t, i) => t / termes[i]);
  const memeQuot = quots.every((q) => Math.abs(q - quots[0]) < 1e-9);
  etapes.push({ titre: 'Quotients successifs', detail: quots.map((q) => nombre(propre(q))).join(' · ') });

  if (memeQuot) {
    etapes.push({ titre: 'Conclusion', detail: `Quotient constant : suite géométrique de raison ${nombre(propre(quots[0]))}.` });
    return { valide: true, nature: 'geometrique', raison: nb(propre(quots[0])), etapes };
  }

  etapes.push({ titre: 'Conclusion', detail: "Ni différence ni quotient constant : la suite n'est ni arithmétique ni géométrique." });
  return { valide: true, nature: 'ni-l-un-ni-l-autre', raison: null, etapes };
}

// ─────────────────────────────── suite arithmétique ─────────────────────────

/** Efface le bruit des flottants (0.7000000000000001 → 0.7) ; −0 → 0. */
function propre(x) {
  if (x === 0) return 0;
  return Number.isInteger(x) ? x : Number(x.toPrecision(12));
}

/**
 * Analyse complète d'une suite arithmétique.
 * @param {number} up  premier terme
 * @param {number} r   raison
 * @param {number} n   rang du terme à calculer
 * @param {number} p   indice du premier terme (0 par défaut)
 */
export function suiteArithmetique(up, r, n, p = 0) {
  const err = valider(up, r, n, p);
  if (err) return err;

  const un = propre(up + (n - p) * r);
  const etapes = [
    { titre: 'Nature', detail: `Suite arithmétique de raison r = ${nombre(r)}, premier terme u${sub(p)} = ${nombre(up)}.` },
    {
      titre: 'Terme général',
      detail: `u${sub('n')} = u${sub(p)} + (n − ${par(p)}) × r`,
      latex: `u_n = ${up} + (n - ${p}) \\times ${r}`,
    },
    {
      titre: `Calcul de u${sub(n)}`,
      detail: `u${sub(n)} = ${nombre(up)} + (${n} − ${par(p)}) × ${par(r)} = ${nombre(un)}`,
    },
  ];

  // somme des termes de rang p à n
  const nbTermes = n - p + 1;
  const somme = propre((nbTermes * (up + un)) / 2);
  etapes.push({
    titre: 'Somme des termes',
    detail: `S = u${sub(p)} + … + u${sub(n)} = nombre de termes × (premier + dernier) / 2 = ${nbTermes} × (${nombre(up)} + ${par(un)}) / 2 = ${nombre(somme)}`,
    remarque: `Il y a ${nbTermes} terme${nbTermes > 1 ? 's' : ''} de u${sub(p)} à u${sub(n)} : n − ${par(p)} + 1.`,
  });

  const variationTexte = r > 0 ? `r = ${nombre(r)} > 0 : la suite est croissante.`
    : r < 0 ? `r = ${nombre(r)} < 0 : la suite est décroissante.`
      : 'r = 0 : la suite est constante.';
  etapes.push({ titre: 'Sens de variation', detail: variationTexte });

  return {
    valide: true,
    nature: 'arithmetique',
    premierTerme: nb(up),
    indiceDepart: p,
    raison: nb(r),
    terme: nb(un),
    rang: n,
    nombreDeTermes: nbTermes,
    somme: nb(somme),
    variation: r > 0 ? 'croissante' : r < 0 ? 'decroissante' : 'constante',
    variationTexte,
    etapes,
  };
}

// ─────────────────────────────── suite géométrique ──────────────────────────

/** Entier exact (BigInt) → texte ; au-delà de 21 chiffres, écriture scientifique. */
function texteGrandEntier(big) {
  const neg = big < 0n;
  const s = (neg ? -big : big).toString();
  if (s.length <= 21) return { texte: (neg ? '-' : '') + s, exact: true };
  const mantisse = Number(`${s[0]}.${s.slice(1, 17)}`);
  return { texte: `${neg ? '-' : ''}${nombre(mantisse)} × 10${exposantTexte(s.length - 1)}`, exact: false };
}
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const exposantTexte = (e) => String(e).split('').map((c) => SUP[c]).join('');

/** « = 96 » si exact, « ≈ 1.216 × 10¹⁹ » sinon. */
const egalTexte = (t) => (t.exact ? `= ${t.texte}` : `≈ ${t.texte}`);

/**
 * Analyse complète d'une suite géométrique.
 * @param {number} up  premier terme
 * @param {number} q   raison (non nulle)
 * @param {number} n   rang du terme à calculer
 * @param {number} p   indice du premier terme (0 par défaut)
 */
export function suiteGeometrique(up, q, n, p = 0) {
  const err = valider(up, q, n, p);
  if (err) return err;
  if (q === 0) {
    return { valide: false, erreur: 'La raison d’une suite géométrique doit être non nulle.' };
  }

  const exposant = n - p;
  const nbTermes = n - p + 1;
  // calcul exact en entiers longs, tant que le résultat reste raisonnable (≤ 5 000 chiffres)
  const entiers = Number.isInteger(up) && Number.isInteger(q)
    && Number.isSafeInteger(up) && Number.isSafeInteger(q)
    && nbTermes * Math.log10(Math.abs(q) + 1) <= 5000;

  let un, somme, unTexte, sommeTexte;
  if (entiers) {
    // calcul EXACT en entiers longs : 3^40 n'est pas représentable en flottant
    const U = BigInt(up) * BigInt(q) ** BigInt(exposant);
    const S = q === 1 ? BigInt(up) * BigInt(nbTermes)
      : (BigInt(up) * (BigInt(q) ** BigInt(nbTermes) - 1n)) / BigInt(q - 1);
    un = Number(U);
    somme = Number(S);
    unTexte = texteGrandEntier(U);
    sommeTexte = texteGrandEntier(S);
  } else {
    un = propre(up * Math.pow(q, exposant));
    somme = q === 1 ? propre(up * nbTermes) : propre(up * ((1 - Math.pow(q, nbTermes)) / (1 - q)));
    if (!Number.isFinite(un) || !Number.isFinite(somme)) {
      return { valide: false, erreur: 'Les termes deviennent trop grands pour être calculés : choisis un rang n plus petit.' };
    }
    const t = (x) => ({ texte: nombre(x), exact: nombre(x) === String(x) });
    unTexte = t(un);
    sommeTexte = t(somme);
  }

  const etapes = [
    { titre: 'Nature', detail: `Suite géométrique de raison q = ${nombre(q)}, premier terme u${sub(p)} = ${nombre(up)}.` },
    {
      titre: 'Terme général',
      detail: `u${sub('n')} = u${sub(p)} × q^(n − ${par(p)})`,
      latex: `u_n = ${up} \\times ${q}^{\\,n-${p}}`,
    },
    {
      titre: `Calcul de u${sub(n)}`,
      detail: `u${sub(n)} = ${nombre(up)} × ${par(q)}^${exposant} ${egalTexte(unTexte)}`,
    },
  ];

  if (q === 1) {
    etapes.push({ titre: 'Somme des termes', detail: `q = 1 : tous les termes sont égaux, la somme vaut ${nbTermes} × ${par(up)} ${egalTexte(sommeTexte)}.` });
  } else {
    etapes.push({
      titre: 'Somme des termes',
      detail: `u${sub(p)} × (1 − q^${nbTermes}) / (1 − q) = ${nombre(up)} × (1 − ${par(q)}^${nbTermes}) / (1 − ${par(q)}) ${egalTexte(sommeTexte)}`,
      remarque: `⚠️ L'exposant est le NOMBRE DE TERMES (${nbTermes}), pas le rang final.`,
    });
  }

  let variation, variationTexte;
  if (up === 0) {
    variation = 'constante';
    variationTexte = 'Le premier terme est nul : la suite est constante et nulle.';
  } else if (q < 0) {
    variation = 'alternee';
    variationTexte = `q = ${nombre(q)} < 0 : les termes alternent de signe, la suite n'est ni croissante ni décroissante.`;
  } else {
    const sensPositif = up > 0;
    if (q > 1) {
      variation = sensPositif ? 'croissante' : 'decroissante';
      variationTexte = `q = ${nombre(q)} > 1 et u${sub(p)} ${sensPositif ? '> 0' : '< 0'} : la suite est ${sensPositif ? 'croissante' : 'décroissante'}.`;
    } else if (q === 1) {
      variation = 'constante';
      variationTexte = 'q = 1 : la suite est constante.';
    } else {
      variation = sensPositif ? 'decroissante' : 'croissante';
      variationTexte = `0 < q = ${nombre(q)} < 1 et u${sub(p)} ${sensPositif ? '> 0' : '< 0'} : la suite est ${sensPositif ? 'décroissante' : 'croissante'}.`;
    }
  }
  const limite = limiteGeometrique(q, up);
  etapes.push(
    { titre: 'Sens de variation', detail: variationTexte },
    { titre: 'Quand n devient grand', detail: limite },
  );

  return {
    valide: true,
    nature: 'geometrique',
    premierTerme: nb(up),
    indiceDepart: p,
    raison: nb(q),
    terme: nb(un),
    rang: n,
    nombreDeTermes: nbTermes,
    somme: nb(somme),
    variation,
    variationTexte,
    limite,
    etapes,
  };
}

/** Comportement intuitif quand n devient grand (approche de première). */
function limiteGeometrique(q, up) {
  if (up === 0) return 'La suite est nulle.';
  const a = Math.abs(q);
  if (a > 1) return "Les termes s'éloignent indéfiniment de 0 (limite infinie en valeur absolue).";
  if (a === 1) return q === 1 ? 'La suite est constante.' : 'Les termes alternent entre deux valeurs opposées.';
  return 'Les termes se rapprochent de 0.';
}

// ───────────────────────── taux d'évolution ↔ raison ────────────────────────

/**
 * Convertit un taux d'évolution en pourcentage en raison géométrique.
 * Une baisse de 20 % donne 0,8 — et non −0,2.
 * @param {number} tauxPourcent  ex. 3 pour +3 %, -20 pour −20 %
 */
export function raisonDepuisTaux(tauxPourcent) {
  if (typeof tauxPourcent !== 'number' || !Number.isFinite(tauxPourcent)) {
    return { valide: false, erreur: 'Le taux doit être un nombre.' };
  }
  if (tauxPourcent <= -100) {
    return { valide: false, erreur: 'Une baisse de 100 % ou plus annulerait la grandeur : la raison ne serait plus définie.' };
  }
  const q = 1 + tauxPourcent / 100;
  return {
    valide: true,
    taux: tauxPourcent,
    raison: nb(Number(q.toFixed(10))),
    etapes: [
      { titre: 'Formule', detail: 'q = 1 + t/100' },
      { titre: 'Calcul', detail: `q = 1 + ${par(tauxPourcent)}/100 = ${Number(q.toFixed(10))}` },
      {
        titre: 'Vérification de bon sens',
        detail: tauxPourcent < 0
          ? `Une baisse de ${-tauxPourcent} % donne une raison POSITIVE inférieure à 1 (${Number(q.toFixed(10))}), pas une raison négative.`
          : `Une hausse de ${tauxPourcent} % donne une raison supérieure à 1.`,
      },
    ],
  };
}

// ─────────────────────────── somme des n premiers entiers ───────────────────

/** 1 + 2 + … + n = n(n+1)/2 */
export function sommeEntiers(n) {
  if (!estEntier(n) || n < 1) {
    return { valide: false, erreur: 'n doit être un entier supérieur ou égal à 1.' };
  }
  const s = (n * (n + 1)) / 2;
  return {
    valide: true,
    n,
    somme: fraction(s),
    etapes: [
      { titre: 'Formule', detail: 'n(n+1)/2', latex: '\\dfrac{n(n+1)}{2}' },
      { titre: 'Calcul', detail: `${n} × ${n + 1} / 2 = ${s}` },
    ],
  };
}

// ──────────────────────────────── utilitaires ───────────────────────────────

function valider(up, r, n, p) {
  for (const [nom, v] of [['le premier terme', up], ['la raison', r], ['le rang n', n], ["l'indice de départ", p]]) {
    if (typeof v !== 'number' || !Number.isFinite(v)) {
      return { valide: false, erreur: `Valeur invalide pour ${nom}.` };
    }
  }
  if (!estEntier(n) || !estEntier(p)) {
    return { valide: false, erreur: 'Le rang n et l’indice de départ doivent être des entiers.' };
  }
  if (n < p) {
    return {
      valide: false,
      erreur: `Le rang demandé (${n}) est inférieur à l’indice du premier terme (${p}) : ce terme n’existe pas.`,
    };
  }
  return null;
}

const IND = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉', n: 'ₙ', '-': '₋' };
/** Indice : u₁₂, uₙ (et non « un », qui se lit comme le mot), u₋₁. */
function sub(x) {
  return String(x).split('').map((c) => IND[c] ?? c).join('');
}

