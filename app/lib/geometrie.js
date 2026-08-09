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

const arrondi = (x, d = 6) => (Number.isInteger(x) ? x : Number(x.toFixed(d)));
const estNombre = (v) => typeof v === 'number' && Number.isFinite(v);
const estPoint = (p) => p && estNombre(p.x) && estNombre(p.y);

/** Racine exacte si carré parfait, approchée sinon. */
function racine(n) {
  const r = Math.sqrt(n);
  return Number.isInteger(r) ? { valeur: r, exact: true, texte: String(r) }
    : { valeur: arrondi(r), exact: false, texte: `√${arrondi(n)} ≈ ${arrondi(r)}` };
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
      { titre: 'Calcul', detail: `(${B.x} − ${A.x} ; ${B.y} − ${A.y}) = (${v.x} ; ${v.y})` },
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
      { titre: 'Calcul', detail: `√(${u.x}² + ${u.y}²) = √${arrondi(carre)} = ${r.texte}` },
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
      { titre: 'Calcul', detail: `I(${I.x} ; ${I.y})` },
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
      { titre: 'Vecteur AB', detail: `(${v.vecteur.x} ; ${v.vecteur.y})` },
      { titre: 'Distance', detail: `AB = √(${v.vecteur.x}² + ${v.vecteur.y}²) = ${n.texte}` },
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
      { titre: 'Calcul', detail: `${u.x} × ${v.y} − ${u.y} × ${v.x} = ${arrondi(det)}` },
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
      { titre: 'Déterminant', detail: String(col.determinant) },
      { titre: 'Conclusion', detail: col.colineaires ? 'Les points sont ALIGNÉS.' : 'Les points ne sont PAS alignés.' },
    ],
  };
}

// ───────────────────────────── produit scalaire ─────────────────────────────

/** Produit scalaire en coordonnées (repère orthonormé). */
export function produitScalaire(u, v) {
  if (!estPoint(u) || !estPoint(v)) return { valide: false, erreur: 'Les vecteurs doivent être de la forme {x, y}.' };
  const ps = u.x * v.x + u.y * v.y;
  const nu = norme(u).norme;
  const nv = norme(v).norme;

  let angle = null, cos = null;
  if (nu > 0 && nv > 0) {
    cos = Math.max(-1, Math.min(1, ps / (nu * nv)));
    angle = arrondi((Math.acos(cos) * 180) / Math.PI, 2);
  }

  const orthogonaux = Math.abs(ps) < 1e-12;
  return {
    valide: true,
    produitScalaire: arrondi(ps),
    orthogonaux,
    cosAngle: cos === null ? null : arrondi(cos),
    angleDegres: angle,
    nature: ps > 0 ? 'aigu' : ps < 0 ? 'obtus' : 'droit',
    etapes: [
      { titre: 'Formule', detail: 'u · v = xx′ + yy′ — valable en repère ORTHONORMÉ' },
      { titre: 'Calcul', detail: `${u.x} × ${v.x} + ${u.y} × ${v.y} = ${arrondi(ps)}` },
      {
        titre: 'Signe',
        detail: ps > 0 ? 'Produit scalaire positif : angle AIGU.'
          : ps < 0 ? 'Produit scalaire négatif : angle OBTUS.'
            : 'Produit scalaire nul : les vecteurs sont ORTHOGONAUX.',
      },
      ...(angle !== null ? [{ titre: 'Angle', detail: `cos θ = ${arrondi(cos)} → θ ≈ ${angle}°` }] : []),
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
      { titre: 'Calcul', detail: `${b}² + ${c}² − 2 × ${b} × ${c} × cos(${angleADegres}°) = ${arrondi(a2)}` },
      { titre: 'Longueur', detail: `a = √${arrondi(a2)} = ${arrondi(a)}` },
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

/** Équation de droite passant par deux points. */
export function droiteParDeuxPoints(A, B) {
  if (!estPoint(A) || !estPoint(B)) return { valide: false, erreur: 'A et B doivent être des points {x, y}.' };
  if (A.x === B.x && A.y === B.y) return { valide: false, erreur: 'A et B sont confondus : une infinité de droites passent par ce point.' };

  if (A.x === B.x) {
    return {
      valide: true,
      verticale: true,
      equation: `x = ${arrondi(A.x)}`,
      cartesienne: `x − ${arrondi(A.x)} = 0`,
      vecteurDirecteur: { x: 0, y: 1 },
      etapes: [
        { titre: 'Cas particulier', detail: 'Les abscisses sont égales : la droite est VERTICALE.' },
        { titre: 'Équation', detail: `x = ${arrondi(A.x)}` },
        { titre: '⚠️ Important', detail: 'Une droite verticale n’a PAS d’équation réduite y = mx + p.' },
      ],
    };
  }

  const m = (B.y - A.y) / (B.x - A.x);
  const p = A.y - m * A.x;
  return {
    valide: true,
    verticale: false,
    coefficientDirecteur: arrondi(m),
    ordonneeOrigine: arrondi(p),
    equation: `y = ${arrondi(m)}x ${p >= 0 ? '+' : '−'} ${arrondi(Math.abs(p))}`,
    cartesienne: `${arrondi(m)}x − y ${p >= 0 ? '+' : '−'} ${arrondi(Math.abs(p))} = 0`,
    vecteurDirecteur: { x: 1, y: arrondi(m) },
    etapes: [
      { titre: 'Coefficient directeur', detail: `m = (y_B − y_A)/(x_B − x_A) = (${B.y} − ${A.y})/(${B.x} − ${A.x}) = ${arrondi(m)}` },
      { titre: 'Ordonnée à l’origine', detail: `p = y_A − m·x_A = ${A.y} − ${arrondi(m)} × ${A.x} = ${arrondi(p)}` },
      { titre: 'Équation réduite', detail: `y = ${arrondi(m)}x ${p >= 0 ? '+' : '−'} ${arrondi(Math.abs(p))}` },
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
    equation: `${a}x + ${b}y + ${c} = 0`,
    vecteurNormal: { x: a, y: b },
    vecteurDirecteur: { x: -b, y: a },
    verticale: b === 0,
    horizontale: a === 0,
    etapes: [
      { titre: 'Vecteur normal', detail: `n(${a} ; ${b}) — ce sont les COEFFICIENTS de l’équation` },
      { titre: 'Vecteur directeur', detail: `u(${-b} ; ${a}) — on échange et on change un signe` },
      { titre: 'Vérification', detail: `n · u = ${a} × ${-b} + ${b} × ${a} = 0 ✓ (ils sont bien orthogonaux)` },
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
        { titre: 'Calcul', detail: `${a} × ${b2} − ${a2} × ${b} = 0` },
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
      { titre: 'Critère', detail: `ab′ − a′b = ${arrondi(det)} ≠ 0 : les droites sont SÉCANTES.` },
      { titre: 'Point d’intersection', detail: `(${arrondi(x)} ; ${arrondi(y)})` },
      { titre: 'Vérification', detail: `${a}×${arrondi(x)} + ${b}×${arrondi(y)} + ${c} = ${arrondi(a * x + b * y + c)} ✓` },
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
      { titre: 'Normaux', detail: `n₁(${a} ; ${b}) et n₂(${a2} ; ${b2})` },
      { titre: 'Produit scalaire', detail: `${a} × ${a2} + ${b} × ${b2} = ${arrondi(ps)}` },
      { titre: 'Conclusion', detail: ok ? 'Les droites sont PERPENDICULAIRES.' : 'Les droites ne sont PAS perpendiculaires.' },
    ],
  };
}

// ───────────────────────────────── cercles ──────────────────────────────────

/** Équation du cercle de centre Ω et de rayon R. */
export function cercle(centre, rayon) {
  if (!estPoint(centre)) return { valide: false, erreur: 'Le centre doit être un point {x, y}.' };
  if (!estNombre(rayon) || rayon <= 0) return { valide: false, erreur: 'Le rayon doit être strictement positif.' };
  const sx = centre.x >= 0 ? '−' : '+';
  const sy = centre.y >= 0 ? '−' : '+';
  return {
    valide: true,
    equation: `(x ${sx} ${Math.abs(centre.x)})² + (y ${sy} ${Math.abs(centre.y)})² = ${arrondi(rayon * rayon)}`,
    centre,
    rayon: arrondi(rayon),
    rayonCarre: arrondi(rayon * rayon),
    etapes: [
      { titre: 'Formule', detail: '(x − x₀)² + (y − y₀)² = R²' },
      { titre: 'Équation', detail: `(x ${sx} ${Math.abs(centre.x)})² + (y ${sy} ${Math.abs(centre.y)})² = ${arrondi(rayon * rayon)}` },
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

  const etapes = [
    { titre: 'Regroupement', detail: `x² + ${alpha}x = (x − ${arrondi(x0)})² − ${arrondi(x0 * x0)}` },
    { titre: 'Regroupement', detail: `y² + ${beta}y = (y − ${arrondi(y0)})² − ${arrondi(y0 * y0)}` },
    { titre: 'Forme obtenue', detail: `(x − ${arrondi(x0)})² + (y − ${arrondi(y0)})² = ${arrondi(k)}` },
  ];

  if (k > 1e-12) {
    const R = Math.sqrt(k);
    etapes.push({ titre: 'Conclusion', detail: `Second membre positif : CERCLE de centre (${arrondi(x0)} ; ${arrondi(y0)}) et de rayon ${arrondi(R)}.` });
    return { valide: true, nature: 'cercle', centre: { x: arrondi(x0), y: arrondi(y0) }, rayon: arrondi(R), etapes };
  }
  if (Math.abs(k) < 1e-12) {
    etapes.push({ titre: 'Conclusion', detail: `Second membre nul : l’ensemble se réduit au SEUL POINT (${arrondi(x0)} ; ${arrondi(y0)}).` });
    return { valide: true, nature: 'point', centre: { x: arrondi(x0), y: arrondi(y0) }, rayon: 0, etapes };
  }
  etapes.push({
    titre: 'Conclusion',
    detail: `Second membre négatif (${arrondi(k)}) : une somme de deux carrés ne peut pas être négative. L’ensemble est VIDE.`,
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
      { titre: 'Rayon', detail: `AB / 2 = ${d.texte} / 2 = ${arrondi(R)}`, remarque: '⚠️ Le rayon est la MOITIÉ du diamètre.' },
      { titre: 'Propriété', detail: 'C’est l’ensemble des points M tels que MA · MB = 0 : le triangle AMB est rectangle en M.' },
    ],
  };
}
