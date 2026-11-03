/**
 * Kamal Campus — Vecteurs, produit scalaire, droites et cercles
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * ⚠️ Toutes les formules de ce module (norme, produit scalaire en coordonnées,
 * distance) supposent un REPÈRE ORTHONORMÉ. C'est une condition du programme,
 * pas un détail : hors de ce cadre, elles sont fausses.
 *
 * Convention : un vecteur est {x, y}, un point est {x, y}.
 */

import { nombre, par } from './format-calcul.js';

const arrondi = (x, d = 6) => (Number.isInteger(x) ? x : Number(x.toFixed(d)));
/** Somme de deux carrés écrite proprement : « (-3)² + 4² ». */
const carres = (x, y) => `${par(x)}² + ${par(y)}²`;
const estNombre = (v) => typeof v === 'number' && Number.isFinite(v);
const estPoint = (p) => p && estNombre(p.x) && estNombre(p.y);

/**
 * Racine exacte si carré parfait (y compris décimal : √0,25 = 0,5), forme
 * simplifiée k√m pour un entier (√8 = 2√2), approchée sinon.
 */
function racine(n) {
  n = arrondi(n);
  const r = Math.sqrt(n);
  const ra = arrondi(r);
  if (Number.isInteger(r) || (String(ra).length < 10 && arrondi(ra * ra) === n)) {
    return { valeur: ra, exact: true, texte: nombre(ra) };
  }
  if (Number.isInteger(n) && n <= 1e12) {
    let k = 1;
    let m = n;
    for (let d = 2; d * d <= m; d++) while (m % (d * d) === 0) { m /= d * d; k *= d; }
    const simplifie = k > 1 ? ` = ${k}√${m}` : '';
    return { valeur: ra, exact: false, texte: `√${n}${simplifie} ≈ ${nombre(ra)}` };
  }
  return { valeur: ra, exact: false, texte: `√${nombre(n)} ≈ ${nombre(ra)}` };
}

// ────────────────────────────── vecteurs ────────────────────────────────────

/** Vecteur AB = arrivée − départ. */
export function vecteur(A, B) {
  if (!estPoint(A) || !estPoint(B)) return { valide: false, erreur: 'A et B doivent être des points {x, y}.' };
  const v = { x: arrondi(B.x - A.x), y: arrondi(B.y - A.y) };
  return {
    valide: true,
    vecteur: v,
    etapes: [
      { titre: 'Formule', detail: 'AB = (x_B − x_A ; y_B − y_A) — ARRIVÉE MOINS DÉPART' },
      { titre: 'Calcul', detail: `(${nombre(B.x)} − ${par(A.x)} ; ${nombre(B.y)} − ${par(A.y)}) = (${nombre(v.x)} ; ${nombre(v.y)})` },
      { titre: '⚠️ Piège', detail: 'Inverser l’ordre donnerait le vecteur BA, qui est l’opposé.' },
    ],
  };
}

/** Norme d'un vecteur (repère orthonormé). */
export function norme(u) {
  if (!estPoint(u)) return { valide: false, erreur: 'Le vecteur doit être de la forme {x, y}.' };
  const carre = u.x * u.x + u.y * u.y;
  const r = racine(carre);
  return {
    valide: true,
    normeCarree: arrondi(carre),
    norme: r.valeur,
    exact: r.exact,
    texte: r.texte,
    etapes: [
      { titre: 'Formule', detail: '‖u‖ = √(x² + y²) — valable en repère ORTHONORMÉ' },
      { titre: 'Calcul', detail: `√(${carres(u.x, u.y)}) = √${nombre(arrondi(carre))}${r.exact ? ` = ${r.texte}` : r.texte.replace(/^√[^ ]+/, '')}` },
    ],
  };
}

/** Milieu d'un segment. */
export function milieu(A, B) {
  if (!estPoint(A) || !estPoint(B)) return { valide: false, erreur: 'A et B doivent être des points {x, y}.' };
  const I = { x: arrondi((A.x + B.x) / 2), y: arrondi((A.y + B.y) / 2) };
  return {
    valide: true,
    milieu: I,
    etapes: [
      { titre: 'Formule', detail: 'I = ((x_A + x_B)/2 ; (y_A + y_B)/2) — on fait la MOYENNE' },
      { titre: 'Calcul', detail: `I((${nombre(A.x)} + ${par(B.x)})/2 ; (${nombre(A.y)} + ${par(B.y)})/2) = I(${nombre(I.x)} ; ${nombre(I.y)})` },
    ],
  };
}

/** Distance AB (repère orthonormé). */
export function distance(A, B) {
  const v = vecteur(A, B);
  if (!v.valide) return v;
  const n = norme(v.vecteur);
  return {
    valide: true,
    distance: n.norme,
    exact: n.exact,
    texte: n.texte,
    etapes: [
      { titre: 'Vecteur AB', detail: `(${nombre(B.x)} − ${par(A.x)} ; ${nombre(B.y)} − ${par(A.y)}) = (${nombre(v.vecteur.x)} ; ${nombre(v.vecteur.y)})` },
      { titre: 'Distance', detail: `AB = √(${carres(v.vecteur.x, v.vecteur.y)}) = √${nombre(n.normeCarree)}${n.exact ? ` = ${n.texte}` : n.texte.replace(/^√[^ ]+/, '')}` },
    ],
  };
}

/** Colinéarité par le déterminant xy′ − yx′. */
export function colineaires(u, v) {
  if (!estPoint(u) || !estPoint(v)) return { valide: false, erreur: 'Les vecteurs doivent être de la forme {x, y}.' };
  const det = u.x * v.y - u.y * v.x;
  const ok = Math.abs(det) < 1e-12;
  return {
    valide: true,
    determinant: arrondi(det),
    colineaires: ok,
    etapes: [
      { titre: 'Critère', detail: 'u et v sont colinéaires ⟺ xy′ − yx′ = 0 (produit « en croix »)' },
      { titre: 'Calcul', detail: `${par(u.x)} × ${par(v.y)} − ${par(u.y)} × ${par(v.x)} = ${nombre(ok ? 0 : arrondi(det))}` },
      { titre: 'Conclusion', detail: ok ? 'Les vecteurs sont COLINÉAIRES.' : 'Les vecteurs ne sont PAS colinéaires.' },
      { titre: '⚠️ Ordre', detail: 'C’est xy′ − yx′, dans cet ordre. L’inverser change le signe.' },
    ],
  };
}

/** A, B, C sont-ils alignés ? (vecteurs issus du MÊME point) */
export function alignes(A, B, C) {
  const AB = vecteur(A, B);
  const AC = vecteur(A, C);
  if (!AB.valide) return AB;
  if (!AC.valide) return AC;
  const col = colineaires(AB.vecteur, AC.vecteur);
  return {
    valide: true,
    alignes: col.colineaires,
    determinant: col.determinant,
    etapes: [
      { titre: 'Méthode', detail: 'A, B, C alignés ⟺ AB et AC colinéaires — les deux vecteurs partent du MÊME point A.' },
      { titre: 'AB', detail: `(${AB.vecteur.x} ; ${AB.vecteur.y})` },
      { titre: 'AC', detail: `(${AC.vecteur.x} ; ${AC.vecteur.y})` },
      { titre: 'Déterminant', detail: nombre(col.colineaires ? 0 : col.determinant) },
      { titre: 'Conclusion', detail: col.colineaires ? 'Les points sont ALIGNÉS.' : 'Les points ne sont PAS alignés.' },
    ],
  };
}

// ───────────────────────────── produit scalaire ─────────────────────────────

/** Produit scalaire en coordonnées (repère orthonormé). */
export function produitScalaire(u, v) {
  if (!estPoint(u) || !estPoint(v)) return { valide: false, erreur: 'Les vecteurs doivent être de la forme {x, y}.' };
  const ps = u.x * v.x + u.y * v.y;
  // normes NON arrondies (sinon cos(45°) devient 0,7071065 et l'angle 45,00001°)
  const nu = Math.hypot(u.x, u.y);
  const nv = Math.hypot(v.x, v.y);

  let angle = null, cos = null, angleRond = false;
  if (nu > 0 && nv > 0) {
    cos = Math.max(-1, Math.min(1, ps / (nu * nv)));
    const brut = (Math.acos(cos) * 180) / Math.PI;
    angle = arrondi(brut, 2);
    angleRond = Math.abs(brut - Math.round(brut)) < 1e-7;
    if (angleRond) angle = Math.round(brut);
  }

  // 0,1 × 0,2 + 0,2 × (−0,1) vaut 3e-18 en flottant : on le lit comme 0
  const orthogonaux = Math.abs(ps) < 1e-12;
  const psp = orthogonaux ? 0 : ps;
  if (orthogonaux && angle !== null) { angle = 90; cos = 0; angleRond = true; }
  return {
    valide: true,
    produitScalaire: arrondi(psp),
    orthogonaux,
    cosAngle: cos === null ? null : arrondi(cos),
    angleDegres: angle,
    nature: psp > 0 ? 'aigu' : psp < 0 ? 'obtus' : 'droit',
    etapes: [
      { titre: 'Formule', detail: 'u · v = xx′ + yy′ — valable en repère ORTHONORMÉ' },
      { titre: 'Calcul', detail: `${par(u.x)} × ${par(v.x)} + ${par(u.y)} × ${par(v.y)} = ${nombre(arrondi(psp))}` },
      {
        titre: 'Signe',
        detail: nu === 0 || nv === 0
          ? 'L’un des vecteurs est nul : le produit scalaire est nul (le vecteur nul est orthogonal à tout vecteur).'
          : psp > 0 ? 'Produit scalaire positif : angle AIGU.'
            : psp < 0 ? 'Produit scalaire négatif : angle OBTUS.'
              : 'Produit scalaire nul : les vecteurs sont ORTHOGONAUX.',
      },
      ...(angle !== null ? [{ titre: 'Angle', detail: `cos θ = u · v / (‖u‖ × ‖v‖) = ${nombre(arrondi(cos))} → θ ${angleRond ? '=' : '≈'} ${nombre(angle)}°` }] : []),
      { titre: '⚠️ Rappel', detail: 'Le produit scalaire est un NOMBRE, pas un vecteur. Et deux vecteurs non nuls peuvent avoir un produit scalaire nul.' },
    ],
  };
}

/** Théorème d'Al-Kashi : a² = b² + c² − 2bc·cos(Â). */
export function alKashi(b, c, angleADegres) {
  if (![b, c, angleADegres].every(estNombre)) {
    return { valide: false, erreur: 'Les longueurs et l’angle doivent être des nombres.' };
  }
  if (b <= 0 || c <= 0) return { valide: false, erreur: 'Les longueurs doivent être strictement positives.' };
  if (angleADegres <= 0 || angleADegres >= 180) {
    return { valide: false, erreur: 'L’angle d’un triangle doit être strictement compris entre 0° et 180°.' };
  }

  const rad = (angleADegres * Math.PI) / 180;
  const cos = Math.cos(rad);
  const a2 = b * b + c * c - 2 * b * c * cos;
  const a = Math.sqrt(a2);

  return {
    valide: true,
    aCarre: arrondi(a2),
    a: arrondi(a),
    etapes: [
      { titre: 'Formule', detail: 'a² = b² + c² − 2bc·cos(Â)', latex: 'a^2 = b^2 + c^2 - 2bc\\cos\\hat{A}' },
      { titre: 'Calcul', detail: `${nombre(b)}² + ${nombre(c)}² − 2 × ${nombre(b)} × ${nombre(c)} × cos(${nombre(angleADegres)}°) = ${nombre(a2)}` },
      { titre: 'Longueur', detail: `a = √${nombre(a2)} = ${nombre(a)}` },
      {
        titre: 'Contrôle',
        detail: angleADegres === 90
          ? 'Â = 90° : cos = 0, on retrouve le théorème de Pythagore ✓'
          : 'L’angle utilisé doit être celui OPPOSÉ au côté a que l’on calcule.',
      },
      { titre: '⚠️ Signe', detail: 'C’est un MOINS devant 2bc·cos(Â).' },
    ],
  };
}

// ──────────────────────────────── droites ───────────────────────────────────

/** Combinaison « 2x − 3y + 1 » sans « + -3y », « 1x » ni « + 0 ». */
function combinaison(termes) {
  let out = '';
  for (const [c, v] of termes) {
    if (c === 0) continue;
    const abs = Math.abs(c);
    const corps = v && abs === 1 ? v : `${nombre(abs)}${v}`;
    if (!out) out = `${c < 0 ? '−' : ''}${corps}`;
    else out += ` ${c < 0 ? '−' : '+'} ${corps}`;
  }
  return out || '0';
}
/** « (x − 2)² », « (x + 3)² », « x² » */
const carreDecale = (v, c) => (c === 0 ? `${v}²` : `(${v} ${c > 0 ? '−' : '+'} ${nombre(Math.abs(c))})²`);

/** Fraction réduite a/b (entiers) → texte « -3/2 », ou null si non entiers. */
function fractionTexte(a, b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || b === 0) return null;
  if (b < 0) { a = -a; b = -b; }
  let x = Math.abs(a), y = b;
  while (y) [x, y] = [y, x % y];
  const g = x || 1;
  return b / g === 1 ? String(a / g) : `${a / g}/${b / g}`;
}

/** Terme en x d'une équation réduite : « 2x », « x », « −x », « (1/3)x ». */
function termeX(m, mTexte) {
  if (m === 1) return 'x';
  if (m === -1) return '−x';
  const t = mTexte.replace(/^-/, '−');
  return t.includes('/') ? `${t.startsWith('−') ? '−' : ''}(${t.replace(/^−/, '')})x` : `${t}x`;
}

/** « y = 2x + 3 », « y = −x », « y = 5 » : jamais « 0x », « 1x » ni « + 0 ». */
function equationReduite(m, mTexte, p, pTexte) {
  const pAbs = pTexte.replace(/^-/, '');
  if (m === 0) return `y = ${pTexte.replace(/^-/, '−')}`;
  const tx = termeX(m, mTexte);
  if (p === 0) return `y = ${tx}`;
  return `y = ${tx} ${p > 0 ? '+' : '−'} ${pAbs}`;
}

/** Équation de droite passant par deux points. */
export function droiteParDeuxPoints(A, B) {
  if (!estPoint(A) || !estPoint(B)) return { valide: false, erreur: 'A et B doivent être des points {x, y}.' };
  if (A.x === B.x && A.y === B.y) return { valide: false, erreur: 'A et B sont confondus : une infinité de droites passent par ce point.' };

  if (A.x === B.x) {
    return {
      valide: true,
      verticale: true,
      equation: `x = ${nombre(arrondi(A.x))}`,
      cartesienne: A.x === 0 ? 'x = 0' : `x ${A.x > 0 ? '−' : '+'} ${nombre(Math.abs(arrondi(A.x)))} = 0`,
      vecteurDirecteur: { x: 0, y: 1 },
      etapes: [
        { titre: 'Cas particulier', detail: 'Les abscisses sont égales : la droite est VERTICALE.' },
        { titre: 'Équation', detail: `x = ${nombre(arrondi(A.x))}` },
        { titre: '⚠️ Important', detail: 'Une droite verticale n’a PAS d’équation réduite y = mx + p.' },
      ],
    };
  }

  const dy = B.y - A.y;
  const dx = B.x - A.x;
  const m = dy / dx;
  const p = A.y - m * A.x;
  // coordonnées entières : m et p sont des fractions EXACTES (1/3 et non 0.333333)
  const mFrac = fractionTexte(dy, dx);
  const pFrac = mFrac === null ? null : fractionTexte(A.y * dx - dy * A.x, dx);
  const mTexte = mFrac ?? nombre(arrondi(m));
  const pVal = Math.abs(p) < 1e-12 ? 0 : p;
  const pTexte = pFrac ?? nombre(arrondi(pVal));
  const exact = pFrac !== null;
  const equation = equationReduite(m, mTexte, pVal, pTexte);
  return {
    valide: true,
    verticale: false,
    coefficientDirecteur: arrondi(m),
    ordonneeOrigine: arrondi(pVal),
    coefficientDirecteurTexte: mTexte,
    ordonneeOrigineTexte: pTexte,
    equation,
    cartesienne: `${nombre(arrondi(m))}x − y ${pVal >= 0 ? '+' : '−'} ${nombre(arrondi(Math.abs(pVal)))} = 0`,
    vecteurDirecteur: { x: 1, y: arrondi(m) },
    etapes: [
      { titre: 'Coefficient directeur', detail: `m = (y_B − y_A)/(x_B − x_A) = (${nombre(B.y)} − ${par(A.y)})/(${nombre(B.x)} − ${par(A.x)}) = ${nombre(dy)}/${par(dx)}${mTexte === `${nombre(dy)}/${nombre(dx)}` ? '' : ` = ${mTexte}`}` },
      { titre: 'Ordonnée à l’origine', detail: `p = y_A − m·x_A = ${nombre(A.y)} − ${mTexte.includes('/') ? `(${mTexte})` : par(arrondi(m))} × ${par(A.x)} ${exact || Math.abs(arrondi(pVal) - pVal) < 1e-12 ? '=' : '≈'} ${pTexte}` },
      { titre: 'Équation réduite', detail: equation },
      { titre: '⚠️ Piège', detail: 'p n’est PAS l’ordonnée de A : c’est l’ordonnée du point d’abscisse 0.' },
    ],
  };
}

/** Vecteurs directeur et normal d'une droite ax + by + c = 0. */
export function analyserDroite(a, b, c) {
  if (![a, b, c].every(estNombre)) return { valide: false, erreur: 'a, b et c doivent être des nombres.' };
  if (a === 0 && b === 0) return { valide: false, erreur: 'a et b ne peuvent pas être nuls simultanément : ce n’est pas une droite.' };

  return {
    valide: true,
    equation: `${combinaison([[a, 'x'], [b, 'y'], [c, '']])} = 0`,
    vecteurNormal: { x: a, y: b },
    vecteurDirecteur: { x: -b || 0, y: a },
    verticale: b === 0,
    horizontale: a === 0,
    etapes: [
      { titre: 'Vecteur normal', detail: `n(${nombre(a)} ; ${nombre(b)}) — ce sont les COEFFICIENTS de l’équation` },
      { titre: 'Vecteur directeur', detail: `u(${nombre(-b)} ; ${nombre(a)}) — on échange et on change un signe` },
      { titre: 'Vérification', detail: `n · u = ${par(a)} × ${par(-b)} + ${par(b)} × ${par(a)} = 0 ✓ (ils sont bien orthogonaux)` },
      { titre: '⚠️ Confusion fréquente', detail: 'Normal = (a ; b), directeur = (−b ; a). Ne pas les intervertir.' },
    ],
  };
}

/** Position relative de deux droites ax+by+c=0 et a′x+b′y+c′=0. */
export function positionRelative(d1, d2) {
  const [a, b, c] = d1;
  const [a2, b2, c2] = d2;
  if (![a, b, c, a2, b2, c2].every(estNombre)) return { valide: false, erreur: 'Tous les coefficients doivent être des nombres.' };

  const det = a * b2 - a2 * b;
  const paralleles = Math.abs(det) < 1e-12;

  if (paralleles) {
    // confondues si les équations sont proportionnelles
    const k = a !== 0 ? a2 / a : b2 / b;
    const confondues = Math.abs(c2 - k * c) < 1e-9;
    return {
      valide: true,
      position: confondues ? 'confondues' : 'strictement paralleles',
      determinant: 0,
      intersection: null,
      etapes: [
        { titre: 'Critère', detail: 'Parallèles ⟺ ab′ − a′b = 0' },
        { titre: 'Calcul', detail: `${par(a)} × ${par(b2)} − ${par(a2)} × ${par(b)} = 0` },
        { titre: 'Conclusion', detail: confondues ? 'Les droites sont CONFONDUES (une infinité de points communs).' : 'Les droites sont STRICTEMENT PARALLÈLES (aucun point commun).' },
      ],
    };
  }

  // résolution du système par Cramer
  const x = (b * c2 - b2 * c) / det;
  const y = (a2 * c - a * c2) / det;
  return {
    valide: true,
    position: 'secantes',
    determinant: arrondi(det),
    intersection: { x: arrondi(x), y: arrondi(y) },
    etapes: [
      { titre: 'Critère', detail: `ab′ − a′b = ${nombre(det)} ≠ 0 : les droites sont SÉCANTES.` },
      { titre: 'Point d’intersection', detail: `(${nombre(x)} ; ${nombre(y)})` },
      { titre: 'Vérification', detail: `${par(a)} × ${par(arrondi(x))} + ${par(b)} × ${par(arrondi(y))} + ${par(c)} ≈ 0 ✓` },
    ],
  };
}

/** Perpendicularité de deux droites via leurs vecteurs normaux. */
export function perpendiculaires(d1, d2) {
  const [a, b] = d1;
  const [a2, b2] = d2;
  if (![a, b, a2, b2].every(estNombre)) return { valide: false, erreur: 'Coefficients invalides.' };
  const ps = a * a2 + b * b2;
  const ok = Math.abs(ps) < 1e-12;
  return {
    valide: true,
    produitScalaireNormaux: arrondi(ps),
    perpendiculaires: ok,
    etapes: [
      { titre: 'Méthode', detail: 'Deux droites sont perpendiculaires ⟺ leurs vecteurs normaux sont orthogonaux.' },
      { titre: 'Normaux', detail: `n₁(${nombre(a)} ; ${nombre(b)}) et n₂(${nombre(a2)} ; ${nombre(b2)})` },
      { titre: 'Produit scalaire', detail: `${par(a)} × ${par(a2)} + ${par(b)} × ${par(b2)} = ${nombre(ok ? 0 : ps)}` },
      { titre: 'Conclusion', detail: ok ? 'Les droites sont PERPENDICULAIRES.' : 'Les droites ne sont PAS perpendiculaires.' },
    ],
  };
}

// ───────────────────────────────── cercles ──────────────────────────────────

/** Équation du cercle de centre Ω et de rayon R. */
export function cercle(centre, rayon) {
  if (!estPoint(centre)) return { valide: false, erreur: 'Le centre doit être un point {x, y}.' };
  if (!estNombre(rayon) || rayon <= 0) return { valide: false, erreur: 'Le rayon doit être strictement positif.' };
  const eq = `${carreDecale('x', centre.x)} + ${carreDecale('y', centre.y)} = ${nombre(arrondi(rayon * rayon))}`;
  return {
    valide: true,
    equation: eq,
    centre,
    rayon: arrondi(rayon),
    rayonCarre: arrondi(rayon * rayon),
    etapes: [
      { titre: 'Formule', detail: '(x − x₀)² + (y − y₀)² = R²' },
      { titre: 'Équation', detail: eq },
      { titre: '⚠️ Deux pièges', detail: 'On SOUSTRAIT les coordonnées du centre, et le second membre est R² (pas R).' },
    ],
  };
}

/**
 * Reconnaît un cercle à partir de x² + y² + αx + βy + γ = 0.
 * Renvoie aussi les cas dégénérés : point unique, ou ensemble vide.
 */
export function reconnaitreCercle(alpha, beta, gamma) {
  if (![alpha, beta, gamma].every(estNombre)) return { valide: false, erreur: 'Les coefficients doivent être des nombres.' };

  const x0 = -alpha / 2;
  const y0 = -beta / 2;
  const k = x0 * x0 + y0 * y0 - gamma;

  const regroupe = (v, coef, c0) => (coef === 0
    ? `${v}² reste ${v}²`
    : `${combinaison([[1, `${v}²`], [coef, v]])} = ${carreDecale(v, c0)} − ${nombre(arrondi(c0 * c0))}`);
  const etapes = [
    { titre: 'Regroupement', detail: regroupe('x', alpha, x0) },
    { titre: 'Regroupement', detail: regroupe('y', beta, y0) },
    { titre: 'Forme obtenue', detail: `${carreDecale('x', x0)} + ${carreDecale('y', y0)} = ${nombre(arrondi(k))}` },
  ];

  if (k > 1e-12) {
    const R = Math.sqrt(k);
    etapes.push({ titre: 'Conclusion', detail: `Second membre positif : CERCLE de centre (${nombre(x0)} ; ${nombre(y0)}) et de rayon ${nombre(R)}.` });
    return { valide: true, nature: 'cercle', centre: { x: arrondi(x0), y: arrondi(y0) }, rayon: arrondi(R), etapes };
  }
  if (Math.abs(k) < 1e-12) {
    etapes.push({ titre: 'Conclusion', detail: `Second membre nul : l’ensemble se réduit au SEUL POINT (${nombre(x0)} ; ${nombre(y0)}).` });
    return { valide: true, nature: 'point', centre: { x: arrondi(x0), y: arrondi(y0) }, rayon: 0, etapes };
  }
  etapes.push({
    titre: 'Conclusion',
    detail: `Second membre négatif (${nombre(k)}) : une somme de deux carrés ne peut pas être négative. L’ensemble est VIDE.`,
  });
  return { valide: true, nature: 'vide', centre: null, rayon: null, etapes };
}

/** Cercle de diamètre [AB]. */
export function cercleDiametre(A, B) {
  const I = milieu(A, B);
  if (!I.valide) return I;
  const d = distance(A, B);
  const R = d.distance / 2;
  return {
    valide: true,
    centre: I.milieu,
    rayon: arrondi(R),
    equation: cercle(I.milieu, R).equation,
    etapes: [
      { titre: 'Centre', detail: `milieu de [AB] = (${I.milieu.x} ; ${I.milieu.y})` },
      { titre: 'Rayon', detail: `AB / 2 = ${d.texte} / 2 = ${nombre(R)}`, remarque: '⚠️ Le rayon est la MOITIÉ du diamètre.' },
      { titre: 'Propriété', detail: 'C’est l’ensemble des points M tels que MA · MB = 0 : le triangle AMB est rectangle en M.' },
    ],
  };
}
