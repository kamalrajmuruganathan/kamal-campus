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

import { resoudreSecondDegre } from './second-degre.js';
import { nombre } from './format-calcul.js';

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
    if (k === 0) corps = nombre(abs);
    else if (k === 1) corps = abs === 1 ? 'x' : `${nombre(abs)}x`;
    else corps = abs === 1 ? `x^${k}` : `${nombre(abs)}x^${k}`;
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
  // monôme a·x^k écrit comme un élève l'écrit : « x² » et non « 1x^2 », « 6x » et non « 6x^1 »
  const monome = (a, k) => {
    const t = new Array(k + 1).fill(0);
    t[k] = a;
    return ecrire(t);
  };
  for (let k = coef.length - 1; k >= 1; k--) {
    if (coef[k] === 0) continue;
    etapes.push({
      titre: `Terme de degré ${k}`,
      detail: `(${monome(coef[k], k)})′ = ${k} × ${monome(coef[k], k - 1).replace(/^−/, '(−') + (coef[k] < 0 && k - 1 >= 0 ? ')' : '')} = ${monome(k * coef[k], k - 1)}`,
    });
  }
  if (coef[0] !== 0) {
    etapes.push({ titre: 'Terme constant', detail: `(${nombre(coef[0])})′ = 0` });
  }
  etapes.push({ titre: 'Résultat', detail: `f′(x) = ${ecrire(d)}` });

  return { valide: true, coef, derivee: d, texte: ecrire(d), etapes };
}

// ──────────────────────────────── tangente ──────────────────────────────────

/** « y = 3(x + 2) − 5 » : signes simplifiés (jamais « x − -2 » ni « + -5 »). */
function equationPointPente(m, a, fa) {
  const A = arrondi(a);
  const F = arrondi(fa);
  const M = arrondi(m);
  const facteurX = A === 0 ? 'x' : `(x ${A > 0 ? '−' : '+'} ${nombre(Math.abs(A))})`;
  const pente = M === 1 ? '' : M === -1 ? '−' : nombre(M).replace('-', '−');
  const debut = M === 0 ? '' : `${pente}${facteurX}`;
  if (!debut) return `y = ${nombre(F).replace('-', '−')}`;
  return `y = ${debut}${F === 0 ? '' : ` ${F > 0 ? '+' : '−'} ${nombre(Math.abs(F))}`}`;
}

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
    equation: equationPointPente(fpa, a, fa),
    equationReduite: `y = ${reduite}`,
    horizontale: fpa === 0,
    etapes: [
      { titre: 'Formule', detail: 'y = f′(a)(x − a) + f(a)', latex: "y = f'(a)(x-a) + f(a)" },
      { titre: `Image f(${nombre(a)})`, detail: `f(${nombre(a)}) = ${nombre(fa)}` },
      { titre: `Nombre dérivé f′(${nombre(a)})`, detail: `f′(x) = ${ecrire(d)}, donc f′(${nombre(a)}) = ${nombre(fpa)}` },
      { titre: 'Équation', detail: equationPointPente(fpa, a, fa) },
      { titre: 'Forme réduite', detail: `y = ${reduite}` },
      ...(fpa === 0
        ? [{ titre: 'Remarque', detail: 'f′(a) = 0 : la tangente est HORIZONTALE. Attention, cela ne suffit pas à conclure à un extrémum — il faut que f′ change de signe.' }]
        : []),
    ],
  };
}

// ──────────────────────────── racines de la dérivée ─────────────────────────

const pgcdBig = (x, y) => {
  x = x < 0n ? -x : x;
  y = y < 0n ? -y : y;
  while (y) [x, y] = [y, x % y];
  return x || 1n;
};

/** Décimal « simple » → fraction exacte {n, d} (BigInt), ou null. */
function enFraction(x) {
  const t = String(x);
  if (/e/i.test(t)) return null;
  const i = t.indexOf('.');
  const dec = i < 0 ? 0 : t.length - i - 1;
  if (dec > 9) return null;
  return { n: BigInt(t.replace('.', '')), d: 10n ** BigInt(dec) };
}

/** Fraction BigInt réduite → texte « -7/2 ». */
function texteFraction(n, d) {
  if (d < 0n) { n = -n; d = -d; }
  const g = pgcdBig(n, d);
  n /= g; d /= g;
  return d === 1n ? String(n) : `${n}/${d}`;
}

/** Valeur EXACTE de f(p/q) quand coefficients et abscisse sont des décimaux simples. */
function imageExacte(coef, z) {
  if (!z.exact || !z.fraction) return null;
  const fr = coef.map(enFraction);
  if (fr.some((f) => f === null)) return null;
  const { n: p, d: q } = z.fraction;
  // Σ c_k p^k / q^k, avec c_k = n_k / d_k
  let N = 0n;
  let D = 1n;
  fr.forEach((c, k) => {
    const n = c.n * p ** BigInt(k);
    const d = c.d * q ** BigInt(k);
    N = N * d + n * D;
    D *= d;
    const g = pgcdBig(N, D);
    N /= g; D /= g;
  });
  return texteFraction(N, D);
}

/**
 * Racines d'un polynôme de degré 1 ou 2, chacune avec son écriture EXACTE
 * (fraction, ou radical « 1 − √3/3 ») ou marquée approchée.
 * Au-delà du degré 2, on renvoie { ok: false } : mieux vaut ne rien affirmer.
 */
function racines(coef) {
  const n = degre(coef);
  if (n === 1) {
    const a = enFraction(coef[1]);
    const b = enFraction(coef[0]);
    const v = -coef[0] / coef[1];
    if (a && b) {
      // −(b.n/b.d) / (a.n/a.d) = −b.n·a.d / (b.d·a.n)
      let num = -b.n * a.d;
      let den = b.d * a.n;
      if (den < 0n) { num = -num; den = -den; }
      const g = pgcdBig(num, den);
      num /= g; den /= g;
      return { ok: true, racines: [{ valeur: Number(num) / Number(den) || 0, texte: texteFraction(num, den), exact: true, fraction: { n: num, d: den } }] };
    }
    return { ok: true, racines: [{ valeur: v, texte: `≈ ${nombre(v)}`, exact: false }] };
  }
  if (n === 2) {
    const r = resoudreSecondDegre(coef[2], coef[1], coef[0]);
    const liste = r.racines.map((x) => {
      if (x.exact) {
        const fraction = { n: BigInt(x.num), d: BigInt(x.den) };
        return { valeur: x.valeur || 0, texte: x.texte, exact: true, fraction };
      }
      if (x.radical) return { valeur: x.valeur, texte: x.texte, approche: x.approche, exact: false, radical: true };
      return { valeur: x.valeur, texte: `≈ ${nombre(x.valeur)}`, exact: false };
    });
    return { ok: true, racines: liste, delta: r.delta };
  }
  if (n === 0 || n === -Infinity) return { ok: true, racines: [] };
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

  const etapes = [
    { titre: 'Dérivée', detail: `f′(x) = ${ecrire(d)}` },
  ];

  if (rac.racines.length === 0) {
    if (degre(d) === -Infinity) {
      // f′ = 0 : f est constante (et non « de signe négatif »)
      etapes.push({ titre: 'Signe de f′', detail: 'f′(x) = 0 pour tout x.' });
      etapes.push({ titre: 'Conclusion', detail: 'f est constante sur ℝ.' });
      return { valide: true, derivee: ecrire(d), zeros: [], extremums: [], intervalles: [{ de: '−∞', a: '+∞', sens: 'constante' }], etapes };
    }
    // signe constant : celui du coefficient dominant de f′
    const signe = d[degre(d)];
    const sens = signe > 0 ? 'croissante' : 'décroissante';
    const signeTexte = signe > 0 ? 'positif' : 'négatif';
    etapes.push({
      titre: 'Signe de f′',
      detail: rac.delta !== undefined && rac.delta < 0
        ? `Δ = ${nombre(rac.delta)} < 0 : f′ ne s’annule jamais et garde un signe constant (${signeTexte}, celui de ${nombre(signe)}).`
        : `f′ garde un signe constant (${signeTexte}).`,
    });
    etapes.push({ titre: 'Conclusion', detail: `f est ${sens} sur ℝ.` });
    return { valide: true, derivee: ecrire(d), zeros: [], extremums: [], intervalles: [{ de: '−∞', a: '+∞', sens }], etapes };
  }

  // −0 est mathématiquement 0, mais s'afficherait « -0 » dans les bornes du tableau
  const zerosR = rac.racines.map((z) => ({ ...z, valeur: z.valeur === 0 ? 0 : z.valeur }));
  const zeros = zerosR.map((z) => (z.exact ? z.valeur : arrondi(z.valeur)));
  const nomZero = (z) => (z.exact ? z.texte : z.radical ? `${z.texte} ${z.approche}` : z.texte);

  // signe de f′ sur chaque intervalle, testé en un point intérieur
  const bornes = ['−∞', ...zerosR.map((z) => z.texte), '+∞'];
  const valeurs = zerosR.map((z) => z.valeur);
  const testPoints = [];
  testPoints.push(valeurs[0] - 1);
  for (let i = 0; i < valeurs.length - 1; i++) testPoints.push((valeurs[i] + valeurs[i + 1]) / 2);
  testPoints.push(valeurs[valeurs.length - 1] + 1);

  const intervalles = testPoints.map((t, i) => {
    const sv = evaluer(d, t);
    return {
      de: bornes[i],
      a: bornes[i + 1],
      signe: sv > 0 ? '+' : sv < 0 ? '−' : '0',
      sens: sv > 0 ? 'croissante' : sv < 0 ? 'décroissante' : 'constante',
    };
  });

  // extrémums : là où le signe de f′ CHANGE
  const extremums = [];
  for (let i = 0; i < zerosR.length; i++) {
    const avant = intervalles[i].signe;
    const apres = intervalles[i + 1].signe;
    const type = avant === '+' && apres === '−' ? 'maximum' : avant === '−' && apres === '+' ? 'minimum' : 'aucun';
    const exacte = imageExacte(coef, zerosR[i]);
    const y = evaluer(coef, zerosR[i].valeur);
    extremums.push({ x: zeros[i], y: y === 0 ? 0 : y, yTexte: exacte ?? `≈ ${nombre(y)}`, type });
  }

  etapes.push({ titre: 'Racines de f′', detail: zerosR.map(nomZero).join(' · ') });
  intervalles.forEach((iv) => {
    etapes.push({ titre: `Sur ]${iv.de} ; ${iv.a}[`, detail: `f′ est ${iv.signe === '+' ? 'positive' : iv.signe === '−' ? 'négative' : 'nulle'} → f est ${iv.sens}` });
  });
  extremums.forEach((e, i) => {
    const egal = e.yTexte.startsWith('≈') ? e.yTexte : `égal à ${e.yTexte}`;
    etapes.push({
      titre: `En x = ${zerosR[i].texte}`,
      detail: e.type === 'aucun'
        ? `f′ s’annule mais NE CHANGE PAS de signe : il n’y a PAS d’extrémum (comme x³ en 0).`
        : `f′ change de signe : ${e.type} ${egal}.`,
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
    return { valide: false, erreur: 'Donne au moins un coefficient (du degré 0 au degré le plus haut).' };
  }
  if (coef.some((c) => typeof c !== 'number' || !Number.isFinite(c))) {
    return { valide: false, erreur: 'Tous les coefficients doivent être des nombres.' };
  }
  return null;
}
