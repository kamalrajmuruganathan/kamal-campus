/**
 * Kamal Campus — Arithmétique
 *
 * Division euclidienne, PGCD par l'algorithme d'Euclide, identité de Bézout,
 * congruences et inverse modulaire, décomposition en facteurs premiers.
 *
 * Calcul DÉTERMINISTE, sans IA, sans dépendance externe. Chaque fonction
 * renvoie un tableau `etapes` : l'outil montre le raisonnement, sinon ce n'est
 * qu'une calculatrice. Les cas invalides sont refusés avec un message qui
 * enseigne. Public visé : de la 3e (multiples et diviseurs) à la Terminale
 * option maths expertes (Bézout, congruences, Fermat).
 */

const estEntier = (x) => Number.isInteger(x);
/** Nombre négatif entre parenthèses dans un produit : « 7 = (-2) × (-3) + 1 ». */
/** « 3x », « x », « -x » (pas « 1x »). */
const coefX = (k) => (k === 1 ? 'x' : k === -1 ? '-x' : `${k}x`);
const par = (x) => (x < 0 ? `(${x})` : String(x === 0 ? 0 : x));

/** Borne de sécurité : au-delà, les Number perdent l'exactitude entière. */
const TROP_GRAND = 2 ** 46;

function refuserNonEntier(...xs) {
  for (const x of xs) {
    if (typeof x !== 'number' || !estEntier(x)) {
      return { valide: false, erreur: 'Tous les paramètres doivent être des nombres ENTIERS : l’arithmétique travaille dans ℤ.' };
    }
    if (Math.abs(x) > TROP_GRAND) {
      return { valide: false, erreur: 'Nombre trop grand pour garantir un calcul exact — reste en dessous de 7·10¹³.' };
    }
  }
  return null;
}

// ────────────────────────── division euclidienne ──────────────────────────

/**
 * Division euclidienne de a par b (b ≠ 0) : a = b·q + r avec 0 ≤ r < |b|.
 * Convention du cours : le reste est TOUJOURS positif ou nul, même si a < 0.
 */
export function divisionEuclidienne(a, b) {
  const refus = refuserNonEntier(a, b);
  if (refus) return refus;
  if (b === 0) {
    return { valide: false, erreur: 'On ne divise pas par zéro : la division euclidienne exige un diviseur non nul.' };
  }
  let q = Math.floor(a / Math.abs(b));
  const r = a - Math.abs(b) * q;
  if (b < 0) q = -q;
  if (q === 0) q = 0; // pas de « -0 »
  return {
    valide: true,
    quotient: q,
    reste: r,
    etapes: [
      { titre: 'Division euclidienne', detail: `${a} = ${par(b)} × ${par(q)} + ${r}` },
      { titre: 'Contrôle du reste', detail: `0 ≤ ${r} < ${Math.abs(b)} : le reste est bien positif ou nul, et strictement inférieur à |b|.` },
    ],
  };
}

// ─────────────────────────────── divisibilité ──────────────────────────────

/** b divise-t-il a ? */
export function divise(b, a) {
  const refus = refuserNonEntier(a, b);
  if (refus) return refus;
  if (b === 0) return { valide: false, erreur: '0 ne divise que 0 — et diviser PAR zéro n’a pas de sens.' };
  const ok = a % b === 0;
  // reste euclidien (toujours ≥ 0), comme dans divisionEuclidienne
  const q = Math.floor(a / Math.abs(b)) * Math.sign(b) || 0;
  const r = a - b * q;
  return {
    valide: true,
    divise: ok,
    etapes: [{
      titre: ok ? `${b} divise ${a}` : `${b} ne divise pas ${a}`,
      detail: ok ? `${a} = ${par(b)} × ${par(a / b || 0)}` : `${a} = ${par(b)} × ${par(q)} + ${r} : le reste n’est pas nul.`,
    }],
  };
}

/** Liste des diviseurs positifs de n (n ≠ 0). */
export function diviseurs(n) {
  const refus = refuserNonEntier(n);
  if (refus) return refus;
  n = Math.abs(n);
  if (n === 0) return { valide: false, erreur: 'Tout entier non nul divise 0 : la liste serait infinie.' };
  if (n > 10 ** 12) return { valide: false, erreur: 'Nombre trop grand pour énumérer les diviseurs.' };
  const petits = [];
  const grands = [];
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      petits.push(d);
      if (d !== n / d) grands.push(n / d);
    }
  }
  const liste = [...petits, ...grands.reverse()];
  return {
    valide: true,
    diviseurs: liste,
    nombre: liste.length,
    etapes: [
      { titre: `Diviseurs de ${n}`, detail: liste.join(', ') },
      { titre: 'Méthode', detail: `On teste chaque entier d jusqu’à √${n} ; chaque diviseur d trouvé en apporte un second, ${n}/d.` },
    ],
  };
}

// ──────────────────────────── PGCD par Euclide ─────────────────────────────

/**
 * PGCD de a et b par l'algorithme d'Euclide, avec le détail de chaque division.
 * Renvoie aussi si a et b sont premiers entre eux.
 */
export function pgcdEuclide(a, b) {
  const refus = refuserNonEntier(a, b);
  if (refus) return refus;
  if (a === 0 && b === 0) {
    return { valide: false, erreur: 'PGCD(0, 0) n’est pas défini : tout entier divise 0.' };
  }
  let x = Math.abs(a);
  let y = Math.abs(b);
  const etapes = [];
  if (x < y) [x, y] = [y, x];
  while (y !== 0) {
    const q = Math.floor(x / y);
    const r = x - q * y;
    etapes.push({ titre: 'Division', detail: `${x} = ${y} × ${q} + ${r}` });
    [x, y] = [y, r];
  }
  etapes.push({ titre: 'Conclusion', detail: `Le dernier reste NON NUL est ${x} : PGCD(${Math.abs(a)}, ${Math.abs(b)}) = ${x}.` });
  const premiers = x === 1;
  if (premiers) {
    etapes.push({ titre: 'Premiers entre eux', detail: 'Le PGCD vaut 1 : les deux nombres sont premiers entre eux.' });
  }
  return { valide: true, pgcd: x, premiersEntreEux: premiers, etapes };
}

/** PPCM via la relation PGCD(a,b) × PPCM(a,b) = |a×b|. */
export function ppcm(a, b) {
  const refus = refuserNonEntier(a, b);
  if (refus) return refus;
  if (a === 0 || b === 0) return { valide: false, erreur: 'Le PPCM avec 0 n’a pas d’intérêt : tout multiple de 0 vaut 0.' };
  const g = pgcdEuclide(a, b);
  if (!g.valide) return g;
  // |a × b| peut dépasser 2^53 : on divise d'abord (|a| / PGCD est entier)
  const m = (Math.abs(a) / g.pgcd) * Math.abs(b);
  if (!Number.isSafeInteger(m)) {
    return { valide: false, erreur: 'Le PPCM est trop grand pour garantir un calcul exact.' };
  }
  const produit = BigInt(Math.abs(a)) * BigInt(Math.abs(b));
  return {
    valide: true,
    ppcm: m,
    etapes: [
      { titre: 'PGCD', detail: `PGCD(${Math.abs(a)}, ${Math.abs(b)}) = ${g.pgcd}` },
      { titre: 'Relation', detail: `PPCM = |a × b| / PGCD = ${produit} / ${g.pgcd} = ${m}` },
    ],
  };
}

// ──────────────────────────── identité de Bézout ───────────────────────────

/**
 * Coefficients de Bézout : u et v tels que a·u + b·v = PGCD(a, b),
 * par l'algorithme d'Euclide étendu (remontée tracée).
 */
export function bezout(a, b) {
  const refus = refuserNonEntier(a, b);
  if (refus) return refus;
  if (a === 0 && b === 0) return { valide: false, erreur: 'PGCD(0, 0) n’est pas défini.' };
  let [r0, r1] = [Math.abs(a), Math.abs(b)];
  let [u0, u1] = [1, 0];
  let [v0, v1] = [0, 1];
  const etapes = [];
  while (r1 !== 0) {
    const q = Math.floor(r0 / r1);
    etapes.push({ titre: 'Division', detail: `${r0} = ${r1} × ${q} + ${r0 - q * r1}` });
    [r0, r1] = [r1, r0 - q * r1];
    [u0, u1] = [u1, u0 - q * u1];
    [v0, v1] = [v1, v0 - q * v1];
  }
  let u = u0;
  let v = v0;
  if (a < 0) u = -u;
  if (b < 0) v = -v;
  etapes.push({
    titre: 'Identité de Bézout',
    detail: `${par(a)} × ${par(u)} + ${par(b)} × ${par(v)} = ${r0}`,
  });
  return { valide: true, pgcd: r0, u, v, etapes };
}

// ─────────────────────────────── congruences ───────────────────────────────

/** Reste de a modulo n, dans {0, …, n−1}. */
export function reduireModulo(a, n) {
  const refus = refuserNonEntier(a, n);
  if (refus) return refus;
  if (n <= 0) return { valide: false, erreur: 'Le module n doit être un entier strictement positif.' };
  const r = ((a % n) + n) % n;
  return {
    valide: true,
    reste: r,
    etapes: [{ titre: 'Réduction', detail: `${a} ≡ ${r} [${n}]  (car ${a} = ${n} × ${par(Math.floor(a / n))} + ${r})` }],
  };
}

/**
 * Inverse de a modulo n : entier u tel que a·u ≡ 1 [n].
 * Existe si et seulement si PGCD(a, n) = 1 — sinon la fonction l'explique.
 */
export function inverseModulaire(a, n) {
  const refus = refuserNonEntier(a, n);
  if (refus) return refus;
  if (n <= 1) return { valide: false, erreur: 'Le module n doit être un entier ≥ 2.' };
  const bz = bezout(a, n);
  if (!bz.valide) return bz;
  if (bz.pgcd !== 1) {
    return {
      valide: false,
      erreur: `${a} n’a pas d’inverse modulo ${n} : PGCD(${a}, ${n}) = ${bz.pgcd} ≠ 1. Un inverse existe si et seulement si a et n sont premiers entre eux (théorème de Bézout).`,
    };
  }
  const u = ((bz.u % n) + n) % n;
  return {
    valide: true,
    inverse: u,
    etapes: [
      ...bz.etapes,
      { titre: 'Lecture modulo n', detail: `${par(a)} × ${par(bz.u)} ≡ 1 [${n}], donc l’inverse de ${a} modulo ${n} est ${u}.` },
    ],
  };
}

/**
 * Résolution de a·x ≡ b [n] : décrit l'ensemble des solutions modulo n.
 * Cas d = PGCD(a, n) : solutions si et seulement si d divise b.
 */
export function resoudreCongruence(a, b, n) {
  const refus = refuserNonEntier(a, b, n);
  if (refus) return refus;
  if (n <= 1) return { valide: false, erreur: 'Le module n doit être un entier ≥ 2.' };
  const bz = bezout(a, n);
  if (!bz.valide) return bz;
  const d = bz.pgcd;
  if (b % d !== 0) {
    return {
      valide: true,
      solutions: [],
      etapes: [
        { titre: 'PGCD', detail: `PGCD(${a}, ${n}) = ${d}` },
        { titre: 'Aucune solution', detail: `${d} ne divise pas ${b} : la congruence ${a}x ≡ ${b} [${n}] n’a AUCUNE solution.` },
      ],
    };
  }
  const n2 = n / d;
  // b est d'abord réduit modulo n : u × b pourrait sinon dépasser 2^53
  const bRed = ((b % n) + n) % n;
  const uRed = ((bz.u % n2) + n2) % n2;
  const x0 = Number((BigInt(uRed) * BigInt(bRed / d)) % BigInt(n2));
  const LISTE_MAX = 20;
  const solutions = [];
  for (let k = 0; k < Math.min(d, LISTE_MAX); k++) solutions.push(x0 + k * n2);
  const ensemble = d === 1
    ? `x ≡ ${x0} [${n}]`
    : d <= LISTE_MAX
      ? `x ≡ ${x0} [${n2}], c’est-à-dire x ≡ ${solutions.join(' ou ')} [${n}] (${d} solutions modulo ${n})`
      : `x ≡ ${x0} [${n2}] (${d} solutions modulo ${n})`;
  return {
    valide: true,
    solutions,
    nombreSolutions: d,
    moduleReduit: n2,
    etapes: [
      { titre: 'PGCD', detail: `PGCD(${a}, ${n}) = ${d}${d === 1 ? ' : solution unique modulo ' + n : ` : ${d} divise ${b}, il y a des solutions`}` },
      ...(d > 1 ? [{ titre: 'Simplification', detail: `On divise tout par ${d} : ${coefX(a / d)} ≡ ${b / d} [${n2}]` }] : []),
      { titre: 'Solution particulière', detail: `x₀ = ${x0}  (obtenue via les coefficients de Bézout : ${par(a)} × ${par(bz.u)} + ${par(n)} × ${par(bz.v)} = ${d})` },
      { titre: 'Vérification', detail: `${par(a)} × ${x0} = ${BigInt(a) * BigInt(x0)} ≡ ${bRed} [${n}] ✓` },
      { titre: 'Ensemble des solutions', detail: ensemble },
    ],
  };
}

// ─────────────────── nombres premiers et décomposition ─────────────────────

/** n est-il premier ? (test par divisions jusqu'à √n) */
export function estPremier(n) {
  const refus = refuserNonEntier(n);
  if (refus) return refus;
  if (n > 10 ** 12) return { valide: false, erreur: 'Nombre trop grand pour un test exact ici.' };
  if (n < 2) {
    return {
      valide: true,
      premier: false,
      etapes: [{ titre: `${n} n’est pas premier`, detail: 'Un nombre premier a EXACTEMENT deux diviseurs positifs : 1 et lui-même. 0 et 1 sont exclus par définition.' }],
    };
  }
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      return {
        valide: true,
        premier: false,
        etapes: [{ titre: `${n} n’est pas premier`, detail: `${n} = ${d} × ${n / d}` }],
      };
    }
  }
  return {
    valide: true,
    premier: true,
    etapes: [{ titre: `${n} est premier`, detail: `Aucun diviseur entre 2 et √${n} : ses seuls diviseurs sont 1 et ${n}.` }],
  };
}

/** Décomposition en produit de facteurs premiers, étapes de divisions successives. */
export function decompositionFacteurs(n) {
  const refus = refuserNonEntier(n);
  if (refus) return refus;
  if (n < 2) return { valide: false, erreur: 'La décomposition en facteurs premiers concerne les entiers ≥ 2.' };
  if (n > 10 ** 12) return { valide: false, erreur: 'Nombre trop grand pour une décomposition exacte ici.' };
  const etapes = [];
  const facteurs = new Map();
  let m = n;
  let d = 2;
  while (d * d <= m) {
    while (m % d === 0) {
      etapes.push({ titre: `Division par ${d}`, detail: `${m} = ${d} × ${m / d}` });
      facteurs.set(d, (facteurs.get(d) ?? 0) + 1);
      m /= d;
    }
    d += d === 2 ? 1 : 2;
  }
  if (m > 1) {
    facteurs.set(m, (facteurs.get(m) ?? 0) + 1);
    etapes.push({ titre: `${m} est premier`, detail: 'On s’arrête : le quotient restant est premier.' });
  }
  const texte = [...facteurs.entries()].map(([p, e]) => (e === 1 ? String(p) : `${p}^${e}`)).join(' × ');
  const latex = [...facteurs.entries()].map(([p, e]) => (e === 1 ? String(p) : `${p}^{${e}}`)).join(' \\times ');
  etapes.push({ titre: 'Décomposition', detail: `${n} = ${texte}` });
  return {
    valide: true,
    facteurs: [...facteurs.entries()].map(([premier, exposant]) => ({ premier, exposant })),
    texte,
    latex,
    etapes,
  };
}
