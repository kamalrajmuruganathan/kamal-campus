/**
 * Kamal Campus — Nombres complexes
 *
 * Opérations, conjugué, module et argument, formes trigonométrique et
 * exponentielle, équation du second degré à coefficients réels dans ℂ.
 *
 * Calcul DÉTERMINISTE, sans IA, sans dépendance externe. Résultats EXACTS
 * quand c'est possible : module en √n si n n'est pas un carré parfait,
 * argument en fraction de π pour les angles remarquables. Sinon valeur
 * approchée explicitement marquée. Chaque fonction renvoie des `etapes`.
 *
 * Public : Terminale maths expertes, Première/Terminale STI2D-STL.
 * Un complexe est un objet { re, im }.
 */

import { nombre, par } from './format-calcul.js';

const estNombre = (x) => typeof x === 'number' && Number.isFinite(x);
/** Efface le bruit flottant (0.30000000000000004 → 0.3) et −0. */
const propre = (x) => (x === 0 ? 0 : Number.isInteger(x) ? x : Number(x.toPrecision(12)));
const estEntier = (x) => Number.isInteger(x);

function refuserNonComplexe(...zs) {
  for (const z of zs) {
    if (!z || !estNombre(z.re) || !estNombre(z.im)) {
      return { valide: false, erreur: 'Un nombre complexe se donne sous la forme { re, im } avec deux nombres réels.' };
    }
  }
  return null;
}

import { resoudreSecondDegre } from './second-degre.js';

const pgcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) [x, y] = [y, x % y];
  return x || 1;
};

/** Écriture lisible a + bi (gère les signes, 0, ±1). */
export function texteComplexe(z) {
  if (!z || !estNombre(z.re) || !estNombre(z.im)) return '?';
  const re = propre(z.re);
  const im = propre(z.im);
  const fmt = (v) => nombre(v).replace('.', ',');
  if (im === 0) return fmt(re);
  const partIm = Math.abs(im) === 1 ? 'i' : `${fmt(Math.abs(im))}i`;
  if (re === 0) return im > 0 ? partIm : `−${partIm}`;
  return `${fmt(re)} ${im > 0 ? '+' : '−'} ${partIm}`;
}

// ─────────────────────────────── opérations ────────────────────────────────

export function additionner(z1, z2) {
  const refus = refuserNonComplexe(z1, z2);
  if (refus) return refus;
  const s = { re: propre(z1.re + z2.re), im: propre(z1.im + z2.im) };
  return {
    valide: true,
    resultat: s,
    texte: texteComplexe(s),
    etapes: [
      { titre: 'Parties réelles', detail: `${nombre(z1.re)} + ${par(z2.re)} = ${nombre(s.re)}` },
      { titre: 'Parties imaginaires', detail: `${nombre(z1.im)} + ${par(z2.im)} = ${nombre(s.im)}` },
      { titre: 'Somme', detail: `(${texteComplexe(z1)}) + (${texteComplexe(z2)}) = ${texteComplexe(s)}` },
    ],
  };
}

export function multiplier(z1, z2) {
  const refus = refuserNonComplexe(z1, z2);
  if (refus) return refus;
  const re = propre(z1.re * z2.re - z1.im * z2.im);
  const im = propre(z1.re * z2.im + z1.im * z2.re);
  const p = { re, im };
  const [a, b, c, d] = [z1.re, z1.im, z2.re, z2.im].map((x) => par(x));
  return {
    valide: true,
    resultat: p,
    texte: texteComplexe(p),
    etapes: [
      { titre: 'Développement', detail: `(${texteComplexe(z1)})(${texteComplexe(z2)}) = ${a} × ${c} + ${a} × ${d}i + ${b}i × ${c} + ${b}i × ${d}i` },
      { titre: 'i² = −1', detail: `Partie réelle : ${a} × ${c} − ${b} × ${d} = ${nombre(re)} ; partie imaginaire : ${a} × ${d} + ${b} × ${c} = ${nombre(im)}` },
      { titre: 'Produit', detail: texteComplexe(p) },
    ],
  };
}

export function conjugue(z) {
  const refus = refuserNonComplexe(z);
  if (refus) return refus;
  const c = { re: z.re, im: -z.im };
  return {
    valide: true,
    resultat: c,
    texte: texteComplexe(c),
    etapes: [{ titre: 'Conjugué', detail: `On change le signe de la partie imaginaire : le conjugué de ${texteComplexe(z)} est ${texteComplexe(c)}.` }],
  };
}

/** Quotient z1/z2, par multiplication par le conjugué du dénominateur. */
export function diviser(z1, z2) {
  const refus = refuserNonComplexe(z1, z2);
  if (refus) return refus;
  if (z2.re === 0 && z2.im === 0) {
    return { valide: false, erreur: 'On ne divise pas par zéro — y compris dans ℂ.' };
  }
  const d = propre(z2.re * z2.re + z2.im * z2.im);
  const numRe = propre(z1.re * z2.re + z1.im * z2.im);
  const numIm = propre(z1.im * z2.re - z1.re * z2.im);
  const re = propre(numRe / d);
  const im = propre(numIm / d);
  const q = { re, im };
  const entiers = [numRe, numIm, d].every(Number.isSafeInteger);
  // entrées entières : quotient EXACT en fractions (1/3 et non 0,333333)
  const texte = entiers ? texteFractions(numRe, numIm, d) : texteComplexe(q);
  const conj = texteComplexe({ re: z2.re, im: -z2.im });
  return {
    valide: true,
    resultat: q,
    texte,
    etapes: [
      { titre: 'Méthode', detail: `On multiplie numérateur et dénominateur par le conjugué du dénominateur, ${conj}.` },
      { titre: 'Numérateur', detail: `(${texteComplexe(z1)})(${conj}) = ${texteComplexe({ re: numRe, im: numIm })}` },
      { titre: 'Dénominateur réel', detail: `(${texteComplexe(z2)})(${conj}) = ${par(z2.re)}² + ${par(z2.im)}² = ${nombre(d)}` },
      { titre: 'Quotient', detail: `(${texteComplexe({ re: numRe, im: numIm })}) / ${nombre(d)} = ${texte}` },
    ],
  };
}

/** Fraction réduite n/d (entiers, d > 0) → « -4/5 », « 2 ». */
function fractionTexte(n, d) {
  if (d < 0) { n = -n; d = -d; }
  const g = pgcd(n, d);
  n /= g; d /= g;
  return d === 1 ? String(n) : `${n}/${d}`;
}

/** (numRe + numIm·i) / d écrit exactement : « -4/5 + (7/5)i », « 1/3 », « −i/2 ». */
function texteFractions(numRe, numIm, d) {
  const reT = fractionTexte(numRe, d);
  const imT = fractionTexte(Math.abs(numIm), d);
  const partIm = imT === '1' ? 'i' : imT.includes('/') ? `(${imT})i` : `${imT}i`;
  if (numIm === 0) return reT;
  if (numRe === 0) return numIm > 0 ? partIm : `−${partIm}`;
  return `${reT} ${numIm > 0 ? '+' : '−'} ${partIm}`;
}

// ────────────────────────── module et argument ─────────────────────────────

/** √n exact si carré parfait, forme k√m simplifiée si n entier, sinon approché. */
function racineTexte(n) {
  if (estEntier(n) && n >= 0) {
    const r = Math.round(Math.sqrt(n));
    if (r * r === n) return { exact: true, valeur: r, texte: String(r), latex: String(r) };
    // simplification k²·m → k√m
    let k = 1;
    let m = n;
    for (let d = 2; d * d <= m; d++) {
      while (m % (d * d) === 0) {
        m /= d * d;
        k *= d;
      }
    }
    const texte = k === 1 ? `√${m}` : `${k}√${m}`;
    const latex = k === 1 ? `\\sqrt{${m}}` : `${k}\\sqrt{${m}}`;
    return { exact: true, valeur: Math.sqrt(n), texte, latex };
  }
  const v = Number(Math.sqrt(n).toFixed(4));
  return { exact: false, valeur: v, texte: `≈ ${String(v).replace('.', ',')}`, latex: `\\approx ${v}` };
}

/** Argument exact en fraction de π pour les angles remarquables, sinon approché. */
function argumentTexte(re, im) {
  const rad = Math.atan2(im, re);
  // recherche d'une fraction p/q de π avec q ∈ {1,2,3,4,6} (angles du cours)
  for (const q of [1, 2, 3, 4, 6]) {
    for (let p = -q * 2 + 1; p <= q * 2; p++) {
      if (Math.abs(rad - (p * Math.PI) / q) < 1e-10) {
        const g = pgcd(p, q);
        const pn = p / g;
        const qn = q / g;
        if (pn === 0) return { exact: true, valeur: 0, texte: '0', latex: '0' };
        const num = pn === 1 ? 'π' : pn === -1 ? '−π' : `${pn}π`;
        const numL = pn === 1 ? '\\pi' : pn === -1 ? '-\\pi' : `${pn}\\pi`;
        if (qn === 1) return { exact: true, valeur: rad, texte: num, latex: numL };
        return { exact: true, valeur: rad, texte: `${num}/${qn}`, latex: `\\dfrac{${numL}}{${qn}}` };
      }
    }
  }
  const v = Number(rad.toFixed(4));
  return { exact: false, valeur: v, texte: `≈ ${String(v).replace('.', ',')} rad`, latex: `\\approx ${v}` };
}

/**
 * Module, argument (si z ≠ 0), formes trigonométrique et exponentielle.
 */
export function moduleArgument(z) {
  const refus = refuserNonComplexe(z);
  if (refus) return refus;
  const carre = z.re * z.re + z.im * z.im;
  const mod = racineTexte(carre);
  const etapes = [
    {
      titre: 'Module',
      detail: `|z| = √(${par(z.re)}² + ${par(z.im)}²) = √${nombre(propre(carre))}`
        + (mod.texte === `√${nombre(propre(carre))}` ? '' : ` ${mod.exact ? '= ' : ''}${mod.texte}`),
    },
  ];
  if (z.re === 0 && z.im === 0) {
    etapes.push({ titre: 'Argument', detail: 'z = 0 n’a PAS d’argument : l’angle n’est pas défini pour le vecteur nul.' });
    return { valide: true, module: mod, argument: null, etapes };
  }
  const arg = argumentTexte(z.re, z.im);
  // module approché : on écrit « ≈ 2,2361 » une seule fois, puis on le nomme r
  const r = mod.exact ? mod.texte : 'r';
  const t = arg.exact ? arg.texte : 'θ';
  const precision = [
    ...(mod.exact ? [] : [`r = |z| ${mod.texte}`]),
    ...(arg.exact ? [] : [`θ ${arg.texte}`]),
  ];
  const avec = precision.length ? `, avec ${precision.join(' et ')}` : '';
  etapes.push({ titre: 'Argument', detail: `arg(z) ${arg.exact ? '= ' : ''}${arg.texte}  (cos θ = ${nombre(z.re)}/${r} et sin θ = ${nombre(z.im)}/${r})` });
  etapes.push({ titre: 'Forme trigonométrique', detail: `z = ${r} (cos(${t}) + i sin(${t}))${avec}` });
  etapes.push({ titre: 'Forme exponentielle', detail: `z = ${r} e^(i${arg.exact && t.includes('/') ? `(${t})` : t})${avec}` });
  return {
    valide: true,
    module: mod,
    argument: arg,
    formeTrigonometrique: `${r} (cos(${t}) + i sin(${t}))${avec}`,
    formeExponentielle: `${r} e^(i·${t})${avec}`,
    etapes,
  };
}

// ─────────────── second degré à coefficients réels dans ℂ ──────────────────

/**
 * Résolution de az² + bz + c = 0 (a, b, c réels) dans ℂ.
 * Si Δ ≥ 0 on renvoie vers les racines réelles ; si Δ < 0, racines conjuguées.
 */
export function secondDegreComplexe(a, b, c) {
  if (![a, b, c].every(estNombre)) {
    return { valide: false, erreur: 'Les trois coefficients doivent être des nombres réels.' };
  }
  if (a === 0) {
    return { valide: false, erreur: 'Si a = 0, l’équation est du PREMIER degré : z = −c/b (pour b ≠ 0). Le trinôme exige a ≠ 0.' };
  }
  if (b === 0) b = 0; // pas de −0
  const delta = propre(b * b - 4 * a * c);
  const etapes = [{ titre: 'Discriminant', detail: `Δ = b² − 4ac = ${par(b)}² − 4 × ${par(a)} × ${par(c)} = ${nombre(delta)}` }];
  if (delta >= 0) {
    const r1 = propre((-b - Math.sqrt(delta)) / (2 * a));
    const r2 = propre((-b + Math.sqrt(delta)) / (2 * a));
    const [p, q] = r1 <= r2 ? [r1, r2] : [r2, r1];
    // mêmes écritures exactes que l'outil « Second degré » (fractions, √)
    const reel = resoudreSecondDegre(a, b, c);
    const textes = reel.valide ? reel.racines.map((x) => (x.radical ? `${x.texte} ${x.approche}` : x.texte)) : [nombre(p), nombre(q)];
    etapes.push({
      titre: 'Δ ≥ 0 — racines réelles',
      detail: delta === 0
        ? `Racine double réelle : z = ${textes[0]}`
        : `Deux racines réelles : ${textes[0]} et ${textes[1]}. Dans ℂ comme dans ℝ, ce sont les mêmes.`,
    });
    const racines = delta === 0 ? [{ re: p, im: 0 }] : [{ re: p, im: 0 }, { re: q, im: 0 }];
    return { valide: true, delta, reelles: true, racines, etapes };
  }
  const reVal = propre(-b / (2 * a));
  const imVal = propre(Math.sqrt(-delta) / Math.abs(2 * a));
  const z1 = { re: reVal, im: -imVal };
  const z2 = { re: reVal, im: imVal };
  let reTexte, imTexte;
  if ([a, b, c].every(estEntier) && -delta <= 1e12) {
    // z = −b/(2a) ± i·√(−Δ)/(2|a|), avec √(−Δ) = s√m simplifié
    reTexte = fractionTexte(-b, 2 * a);
    let s2 = 1;
    let m = -delta;
    for (let d = 2; d * d <= m; d++) while (m % (d * d) === 0) { m /= d * d; s2 *= d; }
    const den = Math.abs(2 * a);
    const g = pgcd(s2, den);
    const coef = s2 / g;
    const dd = den / g;
    const radical = m === 1 ? '' : `√${m}`;
    // « 2i », « i/2 », « 3i/2 », « i√3/2 », « 2i√2 »
    imTexte = `${coef === 1 ? '' : coef}i${radical}${dd === 1 ? '' : `/${dd}`}`;
    etapes.push({ titre: 'Δ < 0 — racines complexes conjuguées', detail: `√(−Δ) = √${-delta}${s2 > 1 || m === 1 ? ` = ${s2 === 1 ? '' : s2}${radical}` : ''}` });
  } else {
    reTexte = nombre(reVal);
    imTexte = `${nombre(imVal)}i`;
    etapes.push({ titre: 'Δ < 0 — racines complexes conjuguées', detail: `√(−Δ) ≈ ${nombre(Math.sqrt(-delta))}` });
  }
  const ecrire = (signe) => (reTexte === '0'
    ? `${signe === '−' ? '−' : ''}${imTexte}`
    : `${reTexte} ${signe} ${imTexte}`);
  etapes.push({
    titre: 'Racines',
    detail: `z = (−b ± i√(−Δ)) / 2a : z₁ = ${ecrire('−')}   et   z₂ = ${ecrire('+')} — deux racines complexes CONJUGUÉES.`,
  });
  return { valide: true, delta, reelles: false, racines: [z1, z2], etapes };
}
