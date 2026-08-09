/**
 * Kamal Campus — Dérivation des fonctions polynômes
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Périmètre volontairement limité aux POLYNÔMES. C'est ce qui couvre
 * l'essentiel des exercices de première, et c'est le seul domaine où une
 * dérivation exacte peut être garantie sans moteur de calcul symbolique
 * complet. Pour les quotients, produits et composées quelconques, l'outil
 * renvoie la règle applicable plutôt qu'un résultat — mieux vaut enseigner
 * la méthode que produire une réponse fausse.
 *
 * Représentation d'un polynôme : tableau de coefficients par degré CROISSANT.
 *   [1, -4, 1]  ↔  1 - 4x + x²
 * Ce choix évite les inversions d'indice : coef[k] est le coefficient de x^k.
 */

const estEntier = (x) => Number.isInteger(x);
const arrondi = (x, d = 6) => (estEntier(x) ? x : Number(x.toFixed(d)));

// ──────────────────────────── écriture lisible ──────────────────────────────

/** Écrit un polynôme sous forme lisible, du degré le plus haut au plus bas. */
export function ecrire(coef) {
  const termes = [];
  for (let k = coef.length - 1; k >= 0; k--) {
    const a = coef[k];
    if (a === 0) continue;
    const signe = a < 0 ? '−' : termes.length ? '+' : '';
    const abs = Math.abs(a);
    let corps;
    if (k === 0) corps = String(arrondi(abs));
    else if (k === 1) corps = abs === 1 ? 'x' : `${arrondi(abs)}x`;
    else corps = abs === 1 ? `x^${k}` : `${arrondi(abs)}x^${k}`;
    termes.push(termes.length ? `${signe} ${corps}` : `${signe}${corps}`);
  }
  return termes.length ? termes.join(' ') : '0';
}

/** Degré effectif (en ignorant les coefficients de tête nuls). */
export function degre(coef) {
  for (let k = coef.length - 1; k >= 0; k--) if (coef[k] !== 0) return k;
  return -Infinity; // polynôme nul
}

/** Évalue le polynôme en x (schéma de Horner). */
export function evaluer(coef, x) {
  let r = 0;
  for (let k = coef.length - 1; k >= 0; k--) r = r * x + coef[k];
  return arrondi(r);
}

// ───────────────────────────────── dérivée ──────────────────────────────────

/**
 * Dérivée d'une fonction polynôme.
 * @param {number[]} coef coefficients par degré croissant
 */
export function deriver(coef) {
  const err = validerCoef(coef);
  if (err) return err;

  const d = [];
  for (let k = 1; k < coef.length; k++) d.push(k * coef[k]);
  if (d.length === 0) d.push(0);

  const etapes = [
    { titre: 'Fonction', detail: `f(x) = ${ecrire(coef)}` },
    { titre: 'Règle', detail: 'On dérive terme à terme : (xⁿ)′ = n·xⁿ⁻¹, et la dérivée d’une constante est nulle.' },
  ];
  for (let k = coef.length - 1; k >= 1; k--) {
    if (coef[k] === 0) continue;
    etapes.push({
      titre: `Terme de degré ${k}`,
      detail: k === 1
        ? `(${arrondi(coef[k])}x)′ = ${arrondi(coef[k])}`
        : `(${arrondi(coef[k])}x^${k})′ = ${arrondi(k * coef[k])}x^${k - 1}`,
    });
  }
  if (coef[0] !== 0) {
    etapes.push({ titre: 'Terme constant', detail: `(${arrondi(coef[0])})′ = 0` });
  }
  etapes.push({ titre: 'Résultat', detail: `f′(x) = ${ecrire(d)}` });

  return { valide: true, coef, derivee: d, texte: ecrire(d), etapes };
}

// ──────────────────────────────── tangente ──────────────────────────────────

/**
 * Équation de la tangente à la courbe au point d'abscisse a.
 * y = f′(a)(x − a) + f(a)
 */
export function tangente(coef, a) {
  const err = validerCoef(coef);
  if (err) return err;
  if (typeof a !== 'number' || !Number.isFinite(a)) {
    return { valide: false, erreur: 'L’abscisse a doit être un nombre.' };
  }

  const d = deriver(coef).derivee;
  const fa = evaluer(coef, a);
  const fpa = evaluer(d, a);

  // y = fpa·x + (fa − fpa·a)
  const ordonnee = arrondi(fa - fpa * a);
  const reduite = ecrire([ordonnee, fpa]);

  return {
    valide: true,
    a,
    fa,
    fpa,
    pente: fpa,
    equation: `y = ${arrondi(fpa)}(x − ${arrondi(a)}) + ${arrondi(fa)}`,
    equationReduite: `y = ${reduite}`,
    horizontale: fpa === 0,
    etapes: [
      { titre: 'Formule', detail: 'y = f′(a)(x − a) + f(a)', latex: "y = f'(a)(x-a) + f(a)" },
      { titre: `Image f(${arrondi(a)})`, detail: `f(${arrondi(a)}) = ${fa}` },
      { titre: `Nombre dérivé f′(${arrondi(a)})`, detail: `f′(x) = ${ecrire(d)}, donc f′(${arrondi(a)}) = ${fpa}` },
      { titre: 'Équation', detail: `y = ${arrondi(fpa)}(x − ${arrondi(a)}) + ${arrondi(fa)}` },
      { titre: 'Forme réduite', detail: `y = ${reduite}` },
      ...(fpa === 0
        ? [{ titre: 'Remarque', detail: 'f′(a) = 0 : la tangente est HORIZONTALE. Attention, cela ne suffit pas à conclure à un extrémum — il faut que f′ change de signe.' }]
        : []),
    ],
  };
}

// ──────────────────────────── racines de la dérivée ─────────────────────────

/**
 * Racines exactes d'un polynôme de degré 1 ou 2.
 * Au-delà, on renvoie null : mieux vaut ne rien affirmer.
 */
function racines(coef) {
  const n = degre(coef);
  if (n === 1) return { ok: true, valeurs: [arrondi(-coef[0] / coef[1])] };
  if (n === 2) {
    const [c, b, a] = [coef[0], coef[1], coef[2]];
    const delta = b * b - 4 * a * c;
    if (delta < 0) return { ok: true, valeurs: [], delta };
    if (delta === 0) return { ok: true, valeurs: [arrondi(-b / (2 * a))], delta };
    const r = Math.sqrt(delta);
    return { ok: true, valeurs: [arrondi((-b - r) / (2 * a)), arrondi((-b + r) / (2 * a))].sort((x, y) => x - y), delta };
  }
  if (n === 0 || n === -Infinity) return { ok: true, valeurs: [] };
  return { ok: false };
}

/**
 * Tableau de variations d'une fonction polynôme.
 * Fonctionne quand la dérivée est de degré ≤ 2, ce qui couvre les polynômes
 * de degré ≤ 3 — l'essentiel du programme de première.
 */
export function variations(coef) {
  const err = validerCoef(coef);
  if (err) return err;

  const d = deriver(coef).derivee;
  const rac = racines(d);

  if (!rac.ok) {
    return {
      valide: false,
      erreur: `La dérivée est de degré ${degre(d)} : cet outil ne sait pas en déterminer les racines exactement. `
        + 'Étudie le signe de f′ à la main.',
      derivee: ecrire(d),
    };
  }

  const zeros = rac.valeurs;
  const etapes = [
    { titre: 'Dérivée', detail: `f′(x) = ${ecrire(d)}` },
  ];

  if (zeros.length === 0) {
    // signe constant : on teste en un point quelconque
    const signe = evaluer(d, 0) || evaluer(d, 1);
    const sens = signe > 0 ? 'croissante' : signe < 0 ? 'décroissante' : 'constante';
    etapes.push({
      titre: 'Signe de f′',
      detail: rac.delta !== undefined && rac.delta < 0
        ? `Δ = ${rac.delta} < 0 : f′ ne s’annule jamais et garde un signe constant (${signe > 0 ? 'positif' : 'négatif'}).`
        : `f′ garde un signe constant (${signe > 0 ? 'positif' : 'négatif'}).`,
    });
    etapes.push({ titre: 'Conclusion', detail: `f est ${sens} sur ℝ.` });
    return { valide: true, derivee: ecrire(d), zeros: [], extremums: [], intervalles: [{ de: '−∞', a: '+∞', sens }], etapes };
  }

  // signe de f′ sur chaque intervalle, testé en un point intérieur
  const bornes = ['−∞', ...zeros.map((z) => String(z)), '+∞'];
  const testPoints = [];
  testPoints.push(zeros[0] - 1);
  for (let i = 0; i < zeros.length - 1; i++) testPoints.push((zeros[i] + zeros[i + 1]) / 2);
  testPoints.push(zeros[zeros.length - 1] + 1);

  const intervalles = testPoints.map((t, i) => {
    const s = evaluer(d, t);
    return {
      de: bornes[i],
      a: bornes[i + 1],
      signe: s > 0 ? '+' : s < 0 ? '−' : '0',
      sens: s > 0 ? 'croissante' : s < 0 ? 'décroissante' : 'constante',
    };
  });

  // extrémums : là où le signe de f′ CHANGE
  const extremums = [];
  for (let i = 0; i < zeros.length; i++) {
    const avant = intervalles[i].signe;
    const apres = intervalles[i + 1].signe;
    if (avant === '+' && apres === '−') {
      extremums.push({ x: zeros[i], y: evaluer(coef, zeros[i]), type: 'maximum' });
    } else if (avant === '−' && apres === '+') {
      extremums.push({ x: zeros[i], y: evaluer(coef, zeros[i]), type: 'minimum' });
    } else {
      extremums.push({ x: zeros[i], y: evaluer(coef, zeros[i]), type: 'aucun' });
    }
  }

  etapes.push({ titre: 'Racines de f′', detail: zeros.join(' · ') });
  intervalles.forEach((iv) => {
    etapes.push({ titre: `Sur ]${iv.de} ; ${iv.a}[`, detail: `f′ est ${iv.signe === '+' ? 'positive' : iv.signe === '−' ? 'négative' : 'nulle'} → f est ${iv.sens}` });
  });
  extremums.forEach((e) => {
    etapes.push({
      titre: `En x = ${e.x}`,
      detail: e.type === 'aucun'
        ? `f′ s’annule mais NE CHANGE PAS de signe : il n’y a PAS d’extrémum (comme x³ en 0).`
        : `f′ change de signe : ${e.type} égal à ${e.y}.`,
    });
  });

  return { valide: true, derivee: ecrire(d), zeros, intervalles, extremums, etapes };
}

// ───────────────────── règles pour les cas non polynomiaux ──────────────────

/**
 * Rappelle la règle de dérivation applicable, sans calculer.
 * Volontaire : produire un résultat faux serait pire que ne rien produire.
 */
export function regle(type) {
  const REGLES = {
    somme: { formule: '(u + v)′ = u′ + v′', piege: null },
    produit: { formule: '(u × v)′ = u′v + uv′', piege: '⚠️ Ce n’est PAS u′v′.' },
    quotient: { formule: '(u / v)′ = (u′v − uv′) / v²', piege: '⚠️ L’ordre du numérateur compte : inverser change le signe.' },
    inverse: { formule: '(1 / v)′ = −v′ / v²', piege: null },
    puissance: { formule: '(uⁿ)′ = n·u′·uⁿ⁻¹', piege: '⚠️ Ne pas oublier le facteur u′.' },
    affineComposee: { formule: '(f(ax + b))′ = a·f′(ax + b)', piege: '⚠️ Ne pas oublier le facteur a.' },
    racine: { formule: '(√x)′ = 1 / (2√x)', piege: '⚠️ Non dérivable en 0, bien que définie.' },
    exponentielle: { formule: '(e^u)′ = u′·e^u', piege: '⚠️ Ne pas oublier le facteur u′.' },
  };
  const r = REGLES[type];
  if (!r) {
    return { valide: false, erreur: `Type inconnu. Types disponibles : ${Object.keys(REGLES).join(', ')}.` };
  }
  return { valide: true, type, ...r };
}

// ──────────────────────────────── utilitaires ───────────────────────────────

function validerCoef(coef) {
  if (!Array.isArray(coef) || coef.length === 0) {
    return { valide: false, erreur: 'Le polynôme doit être un tableau de coefficients non vide.' };
  }
  if (coef.some((c) => typeof c !== 'number' || !Number.isFinite(c))) {
    return { valide: false, erreur: 'Tous les coefficients doivent être des nombres.' };
  }
  return null;
}
