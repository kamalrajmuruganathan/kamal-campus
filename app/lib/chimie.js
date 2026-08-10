/**
 * Kamal Campus — Quantité de matière, concentrations, dilutions
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Ce module traque une erreur précise, qui coûte plus de points que toutes les
 * autres en chimie de lycée : LES UNITÉS. Les volumes sont saisis avec leur
 * unité explicite et convertis en litres en interne ; chaque résultat porte
 * son unité ; les étapes montrent la conversion.
 */

const arrondi = (x, d = 6) => (Number.isInteger(x) ? x : Number(x.toFixed(d)));

/** Constante d'Avogadro, en mol⁻¹. */
export const N_A = 6.02e23;

// ───────────────────── masses molaires atomiques (g·mol⁻¹) ──────────────────
// Éléments couramment rencontrés au lycée. Valeurs arrondies comme dans les
// tableaux périodiques scolaires.
export const MASSES_MOLAIRES = {
  H: 1.0, He: 4.0, Li: 6.9, Be: 9.0, B: 10.8, C: 12.0, N: 14.0, O: 16.0,
  F: 19.0, Ne: 20.2, Na: 23.0, Mg: 24.3, Al: 27.0, Si: 28.1, P: 31.0,
  S: 32.1, Cl: 35.5, Ar: 39.9, K: 39.1, Ca: 40.1, Ti: 47.9, Cr: 52.0,
  Mn: 54.9, Fe: 55.8, Co: 58.9, Ni: 58.7, Cu: 63.5, Zn: 65.4, Br: 79.9,
  Ag: 107.9, I: 126.9, Ba: 137.3, Pt: 195.1, Au: 197.0, Hg: 200.6, Pb: 207.2,
};

// ──────────────────────────── conversions de volume ─────────────────────────

const FACTEURS_VOLUME = { L: 1, dL: 1e-1, cL: 1e-2, mL: 1e-3, 'µL': 1e-6, uL: 1e-6, 'm3': 1000, 'cm3': 1e-3 };

/** Convertit un volume en litres. */
export function versLitres(valeur, unite = 'L') {
  const f = FACTEURS_VOLUME[unite];
  if (f === undefined) {
    return { valide: false, erreur: `Unité de volume inconnue : « ${unite} ». Utilise L, dL, cL, mL, µL, m3 ou cm3.` };
  }
  if (typeof valeur !== 'number' || !Number.isFinite(valeur) || valeur < 0) {
    return { valide: false, erreur: 'Le volume doit être un nombre positif.' };
  }
  return { valide: true, litres: arrondi(valeur * f, 12), origine: `${valeur} ${unite}` };
}

// ──────────────────────────── masse molaire ─────────────────────────────────

/**
 * Masse molaire d'une espèce à partir de sa formule brute.
 * Gère les parenthèses : Ca(OH)2, Al2(SO4)3, Cu(NO3)2…
 * @param {string} formule ex. "H2SO4"
 */
export function masseMolaire(formule) {
  if (typeof formule !== 'string' || !formule.trim()) {
    return { valide: false, erreur: 'Formule vide.' };
  }
  const f = formule.replace(/\s+/g, '');

  let i = 0;
  const inconnus = [];

  function bloc() {
    let total = 0;
    const detail = [];
    while (i < f.length && f[i] !== ')') {
      if (f[i] === '(') {
        i++; // saute '('
        const inner = bloc();
        if (f[i] !== ')') throw new Error('parenthèse fermante manquante');
        i++; // saute ')'
        const n = lireNombre();
        total += inner.total * n;
        detail.push(...inner.detail.map((d) => ({ ...d, nombre: d.nombre * n })));
      } else {
        const m = /^([A-Z][a-z]?)/.exec(f.slice(i));
        if (!m) throw new Error(`caractère inattendu « ${f[i]} » en position ${i + 1}`);
        const sym = m[1];
        i += sym.length;
        const n = lireNombre();
        const M = MASSES_MOLAIRES[sym];
        if (M === undefined) {
          inconnus.push(sym);
        } else {
          total += M * n;
        }
        detail.push({ element: sym, nombre: n, masse: M });
      }
    }
    return { total, detail };
  }

  function lireNombre() {
    const m = /^(\d+)/.exec(f.slice(i));
    if (!m) return 1;
    i += m[1].length;
    return Number(m[1]);
  }

  let res;
  try {
    res = bloc();
    if (i !== f.length) throw new Error('parenthèse fermante en trop');
  } catch (e) {
    return { valide: false, erreur: `Formule invalide : ${e.message}.` };
  }

  if (inconnus.length) {
    return {
      valide: false,
      erreur: `Élément(s) inconnu(s) : ${[...new Set(inconnus)].join(', ')}. `
        + 'Ce module ne contient que les éléments courants du lycée.',
    };
  }

  // regroupe les occurrences d'un même élément
  const parElement = {};
  res.detail.forEach((d) => {
    parElement[d.element] = (parElement[d.element] ?? 0) + d.nombre;
  });

  const etapes = [
    { titre: 'Formule', detail: formule },
    {
      titre: 'Décomposition',
      detail: Object.entries(parElement)
        .map(([el, n]) => `${n} × ${el} (${MASSES_MOLAIRES[el]})`)
        .join('  +  '),
    },
    {
      titre: 'Calcul',
      detail: Object.entries(parElement)
        .map(([el, n]) => `${n} × ${MASSES_MOLAIRES[el]}`)
        .join(' + ') + ` = ${arrondi(res.total, 3)} g·mol⁻¹`,
    },
  ];

  return {
    valide: true,
    formule,
    composition: parElement,
    masseMolaire: arrondi(res.total, 3),
    unite: 'g·mol⁻¹',
    etapes,
  };
}

// ──────────────────────── quantité de matière ───────────────────────────────

/** n = m / M */
export function quantiteDepuisMasse(masse_g, M_gmol) {
  if (![masse_g, M_gmol].every((v) => typeof v === 'number' && Number.isFinite(v))) {
    return { valide: false, erreur: 'La masse et la masse molaire doivent être des nombres.' };
  }
  if (M_gmol <= 0) return { valide: false, erreur: 'La masse molaire doit être strictement positive.' };
  if (masse_g < 0) return { valide: false, erreur: 'La masse ne peut pas être négative.' };

  const n = masse_g / M_gmol;
  return {
    valide: true,
    quantite: arrondi(n),
    unite: 'mol',
    etapes: [
      { titre: 'Formule', detail: 'n = m / M', latex: 'n = \\dfrac{m}{M}' },
      { titre: 'Calcul', detail: `n = ${masse_g} / ${M_gmol} = ${arrondi(n)} mol` },
      {
        titre: 'Contrôle de bon sens',
        detail: masse_g > M_gmol
          ? 'La masse dépasse la masse molaire : on doit trouver PLUS d’une mole ✓'
          : 'La masse est inférieure à la masse molaire : on doit trouver MOINS d’une mole ✓',
      },
    ],
  };
}

/** n = N / N_A */
export function quantiteDepuisEntites(nombreEntites) {
  if (typeof nombreEntites !== 'number' || !Number.isFinite(nombreEntites) || nombreEntites < 0) {
    return { valide: false, erreur: 'Le nombre d’entités doit être un nombre positif.' };
  }
  const n = nombreEntites / N_A;
  return {
    valide: true,
    quantite: Number(n.toPrecision(6)),
    unite: 'mol',
    etapes: [
      { titre: 'Formule', detail: 'n = N / N_A' },
      { titre: 'Calcul', detail: `n = ${nombreEntites.toExponential(2)} / ${N_A.toExponential(2)} = ${Number(n.toPrecision(4))} mol` },
    ],
  };
}

/** N = n × N_A */
export function entitesDepuisQuantite(n_mol) {
  if (typeof n_mol !== 'number' || !Number.isFinite(n_mol) || n_mol < 0) {
    return { valide: false, erreur: 'La quantité de matière doit être un nombre positif.' };
  }
  const N = n_mol * N_A;
  return {
    valide: true,
    entites: Number(N.toPrecision(6)),
    texte: N.toExponential(2),
    etapes: [
      { titre: 'Formule', detail: 'N = n × N_A' },
      { titre: 'Calcul', detail: `N = ${n_mol} × ${N_A.toExponential(2)} = ${N.toExponential(2)} entités` },
    ],
  };
}

// ──────────────────────────── concentrations ────────────────────────────────

/**
 * Concentration en quantité de matière : c = n / V.
 * @param {number} n_mol
 * @param {number} volume
 * @param {string} unite  L, mL, cL…
 */
export function concentrationMolaire(n_mol, volume, unite = 'L') {
  const v = versLitres(volume, unite);
  if (!v.valide) return v;
  if (v.litres === 0) return { valide: false, erreur: 'Le volume ne peut pas être nul.' };
  if (typeof n_mol !== 'number' || !Number.isFinite(n_mol) || n_mol < 0) {
    return { valide: false, erreur: 'La quantité de matière doit être un nombre positif.' };
  }

  const c = n_mol / v.litres;
  return {
    valide: true,
    concentration: arrondi(c),
    unite: 'mol·L⁻¹',
    volumeLitres: v.litres,
    etapes: [
      { titre: 'Conversion', detail: `${v.origine} = ${v.litres} L`, remarque: '⚠️ Les concentrations s’expriment PAR LITRE : la conversion est obligatoire.' },
      { titre: 'Formule', detail: 'c = n / V', latex: 'c = \\dfrac{n}{V}' },
      { titre: 'Calcul', detail: `c = ${n_mol} / ${v.litres} = ${arrondi(c)} mol·L⁻¹` },
      { titre: 'Rappel', detail: 'V est le volume de la SOLUTION, pas celui du solvant ajouté.' },
    ],
  };
}

/** Concentration en masse : cm = m / V. */
export function concentrationMassique(masse_g, volume, unite = 'L') {
  const v = versLitres(volume, unite);
  if (!v.valide) return v;
  if (v.litres === 0) return { valide: false, erreur: 'Le volume ne peut pas être nul.' };
  if (typeof masse_g !== 'number' || !Number.isFinite(masse_g) || masse_g < 0) {
    return { valide: false, erreur: 'La masse doit être un nombre positif.' };
  }

  const cm = masse_g / v.litres;
  return {
    valide: true,
    concentration: arrondi(cm),
    unite: 'g·L⁻¹',
    volumeLitres: v.litres,
    etapes: [
      { titre: 'Conversion', detail: `${v.origine} = ${v.litres} L`, remarque: '⚠️ Les concentrations s’expriment PAR LITRE : la conversion est obligatoire.' },
      { titre: 'Formule', detail: 'cₘ = m / V' },
      { titre: 'Calcul', detail: `cₘ = ${masse_g} / ${v.litres} = ${arrondi(cm)} g·L⁻¹` },
    ],
  };
}

/** Passage cm ↔ c : cm = c × M. */
export function convertirConcentrations({ c = null, cm = null, M }) {
  if (typeof M !== 'number' || !Number.isFinite(M) || M <= 0) {
    return { valide: false, erreur: 'La masse molaire M doit être strictement positive.' };
  }
  if (c !== null && cm !== null) {
    return { valide: false, erreur: 'Fournis soit c, soit cₘ — pas les deux.' };
  }
  if (c !== null) {
    const r = c * M;
    return {
      valide: true, sens: 'molaire → massique', concentration: arrondi(r), unite: 'g·L⁻¹',
      etapes: [
        { titre: 'Formule', detail: 'cₘ = c × M' },
        { titre: 'Calcul', detail: `cₘ = ${c} × ${M} = ${arrondi(r)} g·L⁻¹` },
        { titre: 'Contrôle par les unités', detail: 'mol·L⁻¹ × g·mol⁻¹ = g·L⁻¹ ✓ (les moles se simplifient)' },
      ],
    };
  }
  if (cm !== null) {
    const r = cm / M;
    return {
      valide: true, sens: 'massique → molaire', concentration: arrondi(r), unite: 'mol·L⁻¹',
      etapes: [
        { titre: 'Formule', detail: 'c = cₘ / M' },
        { titre: 'Calcul', detail: `c = ${cm} / ${M} = ${arrondi(r)} mol·L⁻¹` },
      ],
    };
  }
  return { valide: false, erreur: 'Fournis c ou cₘ.' };
}

// ────────────────────────────── dilution ───────────────────────────────────

/**
 * Résout c₁V₁ = c₂V₂ : on fournit trois grandeurs, l'outil calcule la quatrième.
 * Les volumes sont donnés avec leur unité.
 */
export function dilution({ c1 = null, v1 = null, c2 = null, v2 = null, unite = 'mL' }) {
  const fournis = [c1, v1, c2, v2].filter((x) => x !== null && x !== undefined).length;
  if (fournis !== 3) {
    return { valide: false, erreur: `Il faut fournir exactement trois des quatre grandeurs (c₁, V₁, c₂, V₂). Reçu : ${fournis}.` };
  }
  for (const [nom, val] of [['c₁', c1], ['V₁', v1], ['c₂', c2], ['V₂', v2]]) {
    if (val !== null && val !== undefined && (typeof val !== 'number' || !Number.isFinite(val) || val <= 0)) {
      return { valide: false, erreur: `${nom} doit être un nombre strictement positif.` };
    }
  }

  let manquant, valeur;
  if (c1 === null) { manquant = 'c₁'; valeur = (c2 * v2) / v1; }
  else if (v1 === null) { manquant = 'V₁'; valeur = (c2 * v2) / c1; }
  else if (c2 === null) { manquant = 'c₂'; valeur = (c1 * v1) / v2; }
  else { manquant = 'V₂'; valeur = (c1 * v1) / c2; }

  valeur = arrondi(valeur);

  const C1 = c1 ?? valeur, V1 = v1 ?? valeur, C2 = c2 ?? valeur, V2 = v2 ?? valeur;
  const facteur = arrondi(C1 / C2);

  const etapes = [
    { titre: 'Principe', detail: 'Lors d’une dilution, la QUANTITÉ DE SOLUTÉ ne change pas : n₁ = n₂, donc c₁V₁ = c₂V₂.' },
    { titre: 'Grandeur cherchée', detail: manquant },
    { titre: 'Calcul', detail: `${manquant} = ${arrondi(valeur)}${manquant.startsWith('V') ? ' ' + unite : ' mol·L⁻¹'}` },
    { titre: 'Facteur de dilution', detail: `F = c₁/c₂ = V₂/V₁ = ${facteur}` },
  ];

  if (C2 > C1) {
    etapes.push({
      titre: '⚠️ Vérification',
      detail: 'La solution fille est PLUS concentrée que la solution mère : ce n’est pas une dilution. Vérifie l’énoncé.',
    });
  }

  return {
    valide: true,
    manquant,
    valeur,
    unite: manquant.startsWith('V') ? unite : 'mol·L⁻¹',
    facteurDilution: facteur,
    coherent: C2 <= C1,
    protocole: manquant === 'V₁' || v1 !== null
      ? [
        `Prélever ${arrondi(V1)} ${unite} de solution mère à la PIPETTE JAUGÉE`,
        `Verser dans une FIOLE JAUGÉE de ${arrondi(V2)} ${unite}`,
        'Compléter avec le solvant jusqu’au trait de jauge',
        'Homogénéiser en retournant la fiole',
      ]
      : null,
    etapes,
  };
}
