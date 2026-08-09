/**
 * Kamal Campus — Trigonométrie
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Particularité : les valeurs remarquables sont renvoyées sous leur forme
 * EXACTE (√3/2, √2/2, 1/2…), pas en décimal. C'est ce qu'un élève doit écrire
 * sur sa copie ; 0,866 ne vaudrait aucun point.
 *
 * ⚠️ Toutes les fonctions travaillent en RADIANS. La conversion depuis les
 * degrés est explicite, parce que le mode de la calculatrice est la première
 * cause d'erreur du chapitre.
 */

const arrondi = (x, d = 6) => (Number.isInteger(x) ? x : Number(x.toFixed(d)));
const estNombre = (v) => typeof v === 'number' && Number.isFinite(v);
const PI = Math.PI;

// ──────────────────────────── conversions ───────────────────────────────────

export function degresVersRadians(deg) {
  if (!estNombre(deg)) return { valide: false, erreur: 'L’angle doit être un nombre.' };
  const rad = (deg * PI) / 180;
  return {
    valide: true,
    radians: arrondi(rad),
    exact: exprimerEnPi(rad),
    etapes: [
      { titre: 'Formule', detail: 'radians = degrés × π/180' },
      { titre: 'Calcul', detail: `${deg} × π/180 = ${exprimerEnPi(rad)} ≈ ${arrondi(rad)}` },
    ],
  };
}

export function radiansVersDegres(rad) {
  if (!estNombre(rad)) return { valide: false, erreur: 'L’angle doit être un nombre.' };
  const deg = (rad * 180) / PI;
  return {
    valide: true,
    degres: arrondi(deg),
    etapes: [
      { titre: 'Formule', detail: 'degrés = radians × 180/π' },
      { titre: 'Calcul', detail: `${arrondi(rad)} × 180/π = ${arrondi(deg)}°` },
    ],
  };
}

/** Écrit un angle sous la forme kπ/n quand c'est propre. */
function exprimerEnPi(rad) {
  if (Math.abs(rad) < 1e-12) return '0';
  const ratio = rad / PI;
  for (let d = 1; d <= 24; d++) {
    const num = ratio * d;
    if (Math.abs(num - Math.round(num)) < 1e-9) {
      const n = Math.round(num);
      const g = pgcd(Math.abs(n), d);
      const nn = n / g, dd = d / g;
      if (dd === 1) return nn === 1 ? 'π' : nn === -1 ? '−π' : `${nn}π`;
      return nn === 1 ? `π/${dd}` : nn === -1 ? `−π/${dd}` : `${nn}π/${dd}`;
    }
  }
  return `${arrondi(ratio)}π`;
}

const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };

// ────────────────────────── valeurs remarquables ────────────────────────────

/**
 * Table des valeurs exactes. Les clés sont les angles en douzièmes de π,
 * ce qui permet de couvrir 0, π/6, π/4, π/3, π/2 et leurs symétriques.
 */
const EXACTES = {
  0: { cos: '1', sin: '0' },
  2: { cos: '√3/2', sin: '1/2' },        // π/6
  3: { cos: '√2/2', sin: '√2/2' },       // π/4
  4: { cos: '1/2', sin: '√3/2' },        // π/3
  6: { cos: '0', sin: '1' },             // π/2
  8: { cos: '−1/2', sin: '√3/2' },       // 2π/3
  9: { cos: '−√2/2', sin: '√2/2' },      // 3π/4
  10: { cos: '−√3/2', sin: '1/2' },      // 5π/6
  12: { cos: '−1', sin: '0' },           // π
  14: { cos: '−√3/2', sin: '−1/2' },     // 7π/6
  15: { cos: '−√2/2', sin: '−√2/2' },    // 5π/4
  16: { cos: '−1/2', sin: '−√3/2' },     // 4π/3
  18: { cos: '0', sin: '−1' },           // 3π/2
  20: { cos: '1/2', sin: '−√3/2' },      // 5π/3
  21: { cos: '√2/2', sin: '−√2/2' },     // 7π/4
  22: { cos: '√3/2', sin: '−1/2' },      // 11π/6
};

/**
 * Cosinus et sinus d'un angle en radians.
 * Renvoie les valeurs EXACTES si l'angle est remarquable.
 */
export function cosSin(rad) {
  if (!estNombre(rad)) return { valide: false, erreur: 'L’angle doit être un nombre (en radians).' };

  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  // ramène dans [0 ; 2π[ puis cherche un multiple de π/12
  let r = rad % (2 * PI);
  if (r < 0) r += 2 * PI;
  const douziemes = (r * 12) / PI;
  const k = Math.round(douziemes);
  const remarquable = Math.abs(douziemes - k) < 1e-9 && EXACTES[k % 24] !== undefined;

  const exact = remarquable ? EXACTES[k % 24] : null;

  return {
    valide: true,
    cos: arrondi(cos),
    sin: arrondi(sin),
    cosExact: exact ? exact.cos : null,
    sinExact: exact ? exact.sin : null,
    remarquable,
    quadrant: quadrant(cos, sin),
    etapes: [
      { titre: 'Angle', detail: `${exprimerEnPi(r)} (soit ${arrondi((r * 180) / PI)}°)` },
      ...(remarquable
        ? [{ titre: 'Valeurs exactes', detail: `cos = ${exact.cos}, sin = ${exact.sin}`, remarque: '⚠️ C’est la forme EXACTE qu’il faut écrire sur une copie, pas la valeur décimale.' }]
        : [{ titre: 'Valeurs approchées', detail: `cos ≈ ${arrondi(cos)}, sin ≈ ${arrondi(sin)}` }]),
      { titre: 'Position', detail: `Le point est dans le ${quadrant(cos, sin)}.` },
      { titre: 'Relation fondamentale', detail: `cos² + sin² = ${arrondi(cos * cos + sin * sin)} = 1 ✓` },
    ],
  };
}

function quadrant(c, s) {
  const eps = 1e-12;
  if (Math.abs(s) < eps) return c > 0 ? 'sur l’axe des abscisses, à droite' : 'sur l’axe des abscisses, à gauche';
  if (Math.abs(c) < eps) return s > 0 ? 'sur l’axe des ordonnées, en haut' : 'sur l’axe des ordonnées, en bas';
  if (c > 0 && s > 0) return '1er quadrant (cos > 0, sin > 0)';
  if (c < 0 && s > 0) return '2e quadrant (cos < 0, sin > 0)';
  if (c < 0 && s < 0) return '3e quadrant (cos < 0, sin < 0)';
  return '4e quadrant (cos > 0, sin < 0)';
}

// ──────────────────────── relation fondamentale ─────────────────────────────

/**
 * Retrouve sin à partir de cos (ou l'inverse) via cos² + sin² = 1.
 * @param {number} valeur   la valeur connue
 * @param {'cos'|'sin'} type
 * @param {'positif'|'negatif'} signeAutre  signe de la grandeur cherchée
 */
export function relationFondamentale(valeur, type, signeAutre) {
  if (!estNombre(valeur)) return { valide: false, erreur: 'La valeur doit être un nombre.' };
  if (valeur < -1 || valeur > 1) {
    return {
      valide: false,
      erreur: `${type} = ${valeur} est impossible : le point est sur le cercle de rayon 1, donc cos et sin restent entre −1 et 1.`,
    };
  }
  if (!['cos', 'sin'].includes(type)) return { valide: false, erreur: 'Le type doit être "cos" ou "sin".' };
  if (!['positif', 'negatif'].includes(signeAutre)) {
    return { valide: false, erreur: 'Précise le signe de la grandeur cherchée : "positif" ou "negatif".' };
  }

  const carre = 1 - valeur * valeur;
  const val = Math.sqrt(carre) * (signeAutre === 'positif' ? 1 : -1);
  const cherche = type === 'cos' ? 'sin' : 'cos';

  return {
    valide: true,
    [type]: arrondi(valeur),
    [cherche]: arrondi(val),
    etapes: [
      { titre: 'Relation', detail: 'cos²x + sin²x = 1' },
      { titre: 'Isolation', detail: `${cherche}²x = 1 − ${type}²x = 1 − ${arrondi(valeur * valeur)} = ${arrondi(carre)}` },
      { titre: 'Racine', detail: `${cherche}x = ±${arrondi(Math.sqrt(carre))}` },
      { titre: 'Choix du signe', detail: `L’énoncé indique ${cherche}x ${signeAutre === 'positif' ? '> 0' : '< 0'}, donc ${cherche}x = ${arrondi(val)}.`, remarque: '⚠️ Sans indication de signe, les DEUX valeurs conviennent.' },
    ],
  };
}

// ───────────────────────────── angles associés ──────────────────────────────

/**
 * Relations d'angles associés, lues sur le cercle par symétrie.
 * @param {'oppose'|'supplementaire'|'antisupplementaire'|'complementaire'} type
 */
export function angleAssocie(type) {
  const TABLE = {
    oppose: {
      angle: '−x',
      cos: 'cos x', sin: '−sin x',
      symetrie: 'axe des abscisses',
      consequence: 'cos est PAIRE, sin est IMPAIRE.',
    },
    supplementaire: {
      angle: 'π − x',
      cos: '−cos x', sin: 'sin x',
      symetrie: 'axe des ordonnées',
      consequence: 'Deux angles supplémentaires ont le même sinus.',
    },
    antisupplementaire: {
      angle: 'π + x',
      cos: '−cos x', sin: '−sin x',
      symetrie: 'centre O',
      consequence: 'Les deux valeurs changent de signe.',
    },
    complementaire: {
      angle: 'π/2 − x',
      cos: 'sin x', sin: 'cos x',
      symetrie: 'première bissectrice',
      consequence: 'Cosinus et sinus s’ÉCHANGENT.',
    },
  };
  const r = TABLE[type];
  if (!r) return { valide: false, erreur: `Type inconnu. Disponibles : ${Object.keys(TABLE).join(', ')}.` };
  return {
    valide: true,
    type,
    ...r,
    conseil: 'N’apprends pas ces relations par cœur : place le point sur un cercle dessiné à main levée, et lis.',
  };
}

// ───────────────────── équations trigonométriques simples ───────────────────

/**
 * Solutions de cos x = a ou sin x = a sur [0 ; 2π[.
 * Signale l'infinité de solutions sur ℝ (+ 2kπ).
 */
export function resoudre(type, a) {
  if (!['cos', 'sin'].includes(type)) return { valide: false, erreur: 'Le type doit être "cos" ou "sin".' };
  if (!estNombre(a)) return { valide: false, erreur: 'La valeur doit être un nombre.' };
  if (a < -1 || a > 1) {
    return {
      valide: false,
      erreur: `${type} x = ${a} n’a AUCUNE solution : ${type} reste toujours compris entre −1 et 1.`,
      solutions: [],
    };
  }

  let sols;
  if (type === 'cos') {
    const x0 = Math.acos(a);
    sols = Math.abs(x0) < 1e-12 || Math.abs(x0 - PI) < 1e-12 ? [x0] : [x0, 2 * PI - x0];
  } else {
    const x0 = Math.asin(a);
    const s1 = x0 < 0 ? x0 + 2 * PI : x0;
    const s2 = PI - x0 < 0 ? PI - x0 + 2 * PI : PI - x0;
    sols = Math.abs(s1 - s2) < 1e-12 ? [s1] : [s1, s2].sort((p, q) => p - q);
  }

  return {
    valide: true,
    solutions: sols.map((s) => arrondi(s)),
    solutionsExactes: sols.map((s) => exprimerEnPi(s)),
    solutionsDegres: sols.map((s) => arrondi((s * 180) / PI, 2)),
    etapes: [
      { titre: 'Équation', detail: `${type} x = ${a}` },
      { titre: 'Solutions sur [0 ; 2π[', detail: sols.map((s) => exprimerEnPi(s)).join(' et ') },
      {
        titre: '⚠️ Sur ℝ',
        detail: 'Il y a une INFINITÉ de solutions : chaque solution donne toute la famille x + 2kπ, k entier. Ne pas oublier le « + 2kπ ».',
      },
    ],
  };
}
