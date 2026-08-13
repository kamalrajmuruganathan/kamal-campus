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

const estNombre = (x) => typeof x === 'number' && Number.isFinite(x);
const estEntier = (x) => Number.isInteger(x);

function refuserNonComplexe(...zs) {
  for (const z of zs) {
    if (!z || !estNombre(z.re) || !estNombre(z.im)) {
      return { valide: false, erreur: 'Un nombre complexe se donne sous la forme { re, im } avec deux nombres réels.' };
    }
  }
  return null;
}

const pgcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) [x, y] = [y, x % y];
  return x || 1;
};

/** Écriture lisible a + bi (gère les signes, 0, ±1). */
export function texteComplexe(z) {
  const { re, im } = z;
  const fmt = (v) => (Number.isInteger(v) ? String(v) : String(Number(v.toFixed(6))).replace('.', ','));
  if (im === 0) return fmt(re);
  const partIm = Math.abs(im) === 1 ? 'i' : `${fmt(Math.abs(im))}i`;
  if (re === 0) return im > 0 ? partIm : `−${partIm}`;
  return `${fmt(re)} ${im > 0 ? '+' : '−'} ${partIm}`;
}

// ─────────────────────────────── opérations ────────────────────────────────

export function additionner(z1, z2) {
  const refus = refuserNonComplexe(z1, z2);
  if (refus) return refus;
  const s = { re: z1.re + z2.re, im: z1.im + z2.im };
  return {
    valide: true,
    resultat: s,
    texte: texteComplexe(s),
    etapes: [
      { titre: 'Parties réelles', detail: `${z1.re} + ${z2.re} = ${s.re}` },
      { titre: 'Parties imaginaires', detail: `${z1.im} + ${z2.im} = ${s.im}` },
      { titre: 'Somme', detail: `(${texteComplexe(z1)}) + (${texteComplexe(z2)}) = ${texteComplexe(s)}` },
    ],
  };
}

export function multiplier(z1, z2) {
  const refus = refuserNonComplexe(z1, z2);
  if (refus) return refus;
  const re = z1.re * z2.re - z1.im * z2.im;
  const im = z1.re * z2.im + z1.im * z2.re;
  const p = { re, im };
  return {
    valide: true,
    resultat: p,
    texte: texteComplexe(p),
    etapes: [
      { titre: 'Développement', detail: `(${texteComplexe(z1)})(${texteComplexe(z2)}) = ${z1.re}×${z2.re} + ${z1.re}×${z2.im}i + ${z1.im}i×${z2.re} + ${z1.im}i×${z2.im}i` },
      { titre: 'i² = −1', detail: `Partie réelle : ${z1.re}×${z2.re} − ${z1.im}×${z2.im} = ${re} ; partie imaginaire : ${z1.re}×${z2.im} + ${z1.im}×${z2.re} = ${im}` },
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
  const d = z2.re * z2.re + z2.im * z2.im;
  const re = (z1.re * z2.re + z1.im * z2.im) / d;
  const im = (z1.im * z2.re - z1.re * z2.im) / d;
  const q = { re, im };
  return {
    valide: true,
    resultat: q,
    texte: texteComplexe(q),
    etapes: [
      { titre: 'Méthode', detail: `On multiplie numérateur et dénominateur par le conjugué du dénominateur, ${texteComplexe({ re: z2.re, im: -z2.im })}.` },
      { titre: 'Dénominateur réel', detail: `(${texteComplexe(z2)})(${texteComplexe({ re: z2.re, im: -z2.im })}) = ${z2.re}² + ${z2.im}² = ${d}` },
      { titre: 'Quotient', detail: texteComplexe(q) },
    ],
  };
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
    { titre: 'Module', detail: `|z| = √(${z.re}² + ${z.im}²) = √${estEntier(carre) ? carre : carre.toFixed(4)} = ${mod.texte}` },
  ];
  if (z.re === 0 && z.im === 0) {
    etapes.push({ titre: 'Argument', detail: 'z = 0 n’a PAS d’argument : l’angle n’est pas défini pour le vecteur nul.' });
    return { valide: true, module: mod, argument: null, etapes };
  }
  const arg = argumentTexte(z.re, z.im);
  etapes.push({ titre: 'Argument', detail: `arg(z) = ${arg.texte}  (cos = ${z.re}/${mod.texte}, sin = ${z.im}/${mod.texte})` });
  etapes.push({ titre: 'Forme trigonométrique', detail: `z = ${mod.texte} (cos(${arg.texte}) + i sin(${arg.texte}))` });
  etapes.push({ titre: 'Forme exponentielle', detail: `z = ${mod.texte} e^{i(${arg.texte})}` });
  return {
    valide: true,
    module: mod,
    argument: arg,
    formeTrigonometrique: `${mod.texte} (cos(${arg.texte}) + i sin(${arg.texte}))`,
    formeExponentielle: `${mod.texte} e^(i·${arg.texte})`,
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
  const delta = b * b - 4 * a * c;
  const etapes = [{ titre: 'Discriminant', detail: `Δ = b² − 4ac = ${b}² − 4×${a}×${c} = ${delta}` }];
  if (delta >= 0) {
    const r1 = (-b - Math.sqrt(delta)) / (2 * a);
    const r2 = (-b + Math.sqrt(delta)) / (2 * a);
    etapes.push({
      titre: 'Δ ≥ 0 — racines réelles',
      detail: delta === 0 ? `Racine double réelle : z = ${r1}` : `Deux racines réelles : ${Number(r1.toFixed(6))} et ${Number(r2.toFixed(6))}. Dans ℂ comme dans ℝ, ce sont les mêmes.`,
    });
    const racines = delta === 0 ? [{ re: r1, im: 0 }] : [{ re: r1, im: 0 }, { re: r2, im: 0 }];
    return { valide: true, delta, reelles: true, racines, etapes };
  }
  const rac = racineTexte(-delta);
  // −b avec b = 0 donnerait −0, qui s'affiche « -0 » et fait échouer les
  // comparaisons strictes — même famille de bug que le « zeros: [-0] »
  // historique du solveur réel. On normalise.
  const reNum = b === 0 ? 0 : -b;
  const den = 2 * a;
  const g1 = pgcd(reNum, den);
  const reTexte = reNum === 0 ? '0' : `${reNum / g1}/${den / g1}`.replace(/\/1$/, '');
  etapes.push({ titre: 'Δ < 0 — racines complexes conjuguées', detail: `√(−Δ) = √${-delta} = ${rac.texte}` });
  const z1 = { re: reNum / den, im: -Math.sqrt(-delta) / den };
  const z2 = { re: reNum / den, im: Math.sqrt(-delta) / den };
  const imTexte = `${rac.texte}/${Math.abs(den)}`.replace(/^1\//, '1/');
  etapes.push({
    titre: 'Racines',
    detail: `z₁ = ${reTexte} − i·${imTexte}   et   z₂ = ${reTexte} + i·${imTexte} — deux racines complexes CONJUGUÉES.`,
  });
  return { valide: true, delta, reelles: false, racines: [z1, z2], etapes };
}
