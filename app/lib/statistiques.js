/**
 * Kamal Campus — Indicateurs statistiques
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * ⚠️ CONVENTION DES QUARTILES
 * La convention retenue est celle en usage au lycée français :
 *   - on calcule N/4 (respectivement 3N/4) ;
 *   - si le résultat est ENTIER, on prend la valeur de ce rang ;
 *   - sinon, on ARRONDIT AU RANG SUPÉRIEUR.
 * D'autres conventions existent (interpolation linéaire des tableurs), et elles
 * donnent des résultats différents. Celle-ci doit être confirmée par un
 * professeur avant publication — voir la note de la fiche `statistiques`.
 *
 * La médiane suit la convention classique : valeur centrale si N est impair,
 * moyenne des deux valeurs centrales si N est pair.
 */

const estEntier = (x) => Number.isInteger(x);
const arrondi = (x, d = 6) => (estEntier(x) ? x : Number(x.toFixed(d)));

/**
 * Analyse complète d'une série statistique.
 *
 * @param {number[]} valeurs    les valeurs du caractère
 * @param {number[]} [effectifs] effectifs associés (1 partout par défaut)
 * @returns {object} indicateurs de position et de dispersion, avec étapes
 */
export function analyserSerie(valeurs, effectifs = null) {
  // ── validations
  if (!Array.isArray(valeurs) || valeurs.length === 0) {
    return { valide: false, erreur: 'La série est vide : aucun indicateur ne peut être calculé.' };
  }
  if (valeurs.some((v) => typeof v !== 'number' || !Number.isFinite(v))) {
    return { valide: false, erreur: 'Toutes les valeurs doivent être des nombres.' };
  }
  if (effectifs !== null) {
    if (!Array.isArray(effectifs) || effectifs.length !== valeurs.length) {
      return { valide: false, erreur: 'Il faut autant d’effectifs que de valeurs.' };
    }
    if (effectifs.some((n) => !estEntier(n) || n < 0)) {
      return { valide: false, erreur: 'Les effectifs doivent être des entiers positifs ou nuls.' };
    }
    if (effectifs.reduce((a, b) => a + b, 0) === 0) {
      return { valide: false, erreur: 'L’effectif total est nul.' };
    }
  }

  const eff = effectifs ?? valeurs.map(() => 1);

  // ── série développée et TRIÉE (étape indispensable)
  const developpee = [];
  valeurs.forEach((v, i) => {
    for (let k = 0; k < eff[i]; k++) developpee.push(v);
  });
  developpee.sort((a, b) => a - b);

  const N = developpee.length;
  const etapes = [
    { titre: 'Effectif total', detail: `N = ${N}` },
    {
      titre: 'Série ordonnée',
      detail: N <= 30 ? developpee.join(' · ') : `${developpee.slice(0, 12).join(' · ')} … (${N} valeurs)`,
      remarque: '⚠️ Ordonner la série est indispensable avant tout calcul de médiane ou de quartile.',
    },
  ];

  // ── moyenne (pondérée)
  const sommePonderee = valeurs.reduce((s, v, i) => s + v * eff[i], 0);
  const moyenne = sommePonderee / N;
  etapes.push({
    titre: 'Moyenne',
    detail: `Σ(nᵢ × xᵢ) / N = ${arrondi(sommePonderee)} / ${N} = ${arrondi(moyenne)}`,
    latex: `\\bar{x} = \\dfrac{${arrondi(sommePonderee)}}{${N}}`,
  });

  // ── médiane
  const med = mediane(developpee);
  etapes.push({
    titre: 'Médiane',
    detail: N % 2 === 1
      ? `N est impair : valeur de rang (N+1)/2 = ${(N + 1) / 2}, soit ${arrondi(med)}`
      : `N est pair : moyenne des valeurs de rangs ${N / 2} et ${N / 2 + 1}, soit ${arrondi(med)}`,
  });

  // ── quartiles
  const q1 = quartile(developpee, 1);
  const q3 = quartile(developpee, 3);
  etapes.push(
    { titre: 'Premier quartile', detail: `N/4 = ${arrondi(N / 4)} → rang ${rangQuartile(N, 1)} → Q₁ = ${arrondi(q1)}` },
    { titre: 'Troisième quartile', detail: `3N/4 = ${arrondi((3 * N) / 4)} → rang ${rangQuartile(N, 3)} → Q₃ = ${arrondi(q3)}` },
  );

  const min = developpee[0];
  const max = developpee[N - 1];
  const etendue = max - min;
  const interquartile = q3 - q1;

  etapes.push(
    { titre: 'Étendue', detail: `max − min = ${arrondi(max)} − ${arrondi(min)} = ${arrondi(etendue)}` },
    { titre: 'Écart interquartile', detail: `Q₃ − Q₁ = ${arrondi(q3)} − ${arrondi(q1)} = ${arrondi(interquartile)}` },
  );

  // ── mode(s)
  const modes = calculerModes(valeurs, eff);

  // ── lecture d'aide : moyenne ou médiane ?
  const ecart = Math.abs(moyenne - med);
  const echelle = etendue || 1;
  const conseil = ecart / echelle > 0.1
    ? 'La moyenne et la médiane s’écartent nettement : la série est asymétrique, sans doute à cause de valeurs extrêmes. La MÉDIANE est ici plus représentative.'
    : 'La moyenne et la médiane sont proches : la série est assez symétrique, les deux indicateurs se valent.';
  etapes.push({ titre: 'Quel indicateur choisir ?', detail: conseil });

  return {
    valide: true,
    effectifTotal: N,
    serieOrdonnee: developpee,
    moyenne: arrondi(moyenne),
    mediane: arrondi(med),
    q1: arrondi(q1),
    q3: arrondi(q3),
    min: arrondi(min),
    max: arrondi(max),
    etendue: arrondi(etendue),
    interquartile: arrondi(interquartile),
    modes,
    conseil,
    etapes,
  };
}

// ─────────────────────────────── indicateurs ────────────────────────────────

/** Médiane d'une série DÉJÀ TRIÉE. */
export function mediane(triee) {
  const N = triee.length;
  if (N === 0) return NaN;
  if (N % 2 === 1) return triee[(N + 1) / 2 - 1];
  return (triee[N / 2 - 1] + triee[N / 2]) / 2;
}

/** Rang du quartile selon la convention du lycée français. */
function rangQuartile(N, k) {
  const brut = (k * N) / 4;
  return estEntier(brut) ? brut : Math.ceil(brut);
}

/** Quartile Q1 (k=1) ou Q3 (k=3) d'une série DÉJÀ TRIÉE. */
export function quartile(triee, k) {
  const N = triee.length;
  if (N === 0) return NaN;
  const rang = Math.min(Math.max(rangQuartile(N, k), 1), N);
  return triee[rang - 1];
}

function calculerModes(valeurs, eff) {
  const max = Math.max(...eff);
  return valeurs.filter((_, i) => eff[i] === max);
}

// ────────────────────── linéarité de la moyenne ────────────────────────────

/**
 * Effet d'une transformation affine yᵢ = a·xᵢ + b sur les indicateurs.
 * La moyenne se transforme de la même façon ; la DISPERSION n'est pas
 * affectée par b, et est multipliée par |a|.
 */
export function transformationAffine(stats, a, b) {
  if (!stats || !stats.valide) {
    return { valide: false, erreur: 'Analyse de série invalide en entrée.' };
  }
  if ([a, b].some((v) => typeof v !== 'number' || !Number.isFinite(v))) {
    return { valide: false, erreur: 'Les coefficients a et b doivent être des nombres.' };
  }
  return {
    valide: true,
    moyenne: arrondi(a * stats.moyenne + b),
    mediane: arrondi(a * stats.mediane + b),
    etendue: arrondi(Math.abs(a) * stats.etendue),
    interquartile: arrondi(Math.abs(a) * stats.interquartile),
    etapes: [
      { titre: 'Moyenne', detail: `ȳ = a×x̄ + b = ${a} × ${stats.moyenne} + ${b} = ${arrondi(a * stats.moyenne + b)}` },
      {
        titre: 'Dispersion',
        detail: `L'étendue et l'écart interquartile sont multipliés par |a| = ${Math.abs(a)}. `
          + `Le décalage b = ${b} ne les modifie PAS : translater toutes les valeurs ne change pas leur dispersion.`,
      },
    ],
  };
}

// ─────────────────────────── fréquences ─────────────────────────────────────

/** Fréquences associées à des effectifs, avec contrôle Σfᵢ = 1. */
export function frequences(effectifs) {
  if (!Array.isArray(effectifs) || effectifs.length === 0) {
    return { valide: false, erreur: 'Liste d’effectifs vide.' };
  }
  if (effectifs.some((n) => typeof n !== 'number' || n < 0)) {
    return { valide: false, erreur: 'Les effectifs doivent être positifs ou nuls.' };
  }
  const N = effectifs.reduce((a, b) => a + b, 0);
  if (N === 0) return { valide: false, erreur: 'L’effectif total est nul.' };

  const f = effectifs.map((n) => n / N);
  const somme = f.reduce((a, b) => a + b, 0);
  return {
    valide: true,
    effectifTotal: N,
    frequences: f.map((x) => arrondi(x)),
    pourcentages: f.map((x) => arrondi(x * 100, 2)),
    controle: Math.abs(somme - 1) < 1e-9,
    etapes: [
      { titre: 'Effectif total', detail: `N = ${N}` },
      { titre: 'Formule', detail: 'fᵢ = nᵢ / N' },
      { titre: 'Contrôle', detail: `Σfᵢ = ${arrondi(somme)} — doit valoir exactement 1.` },
    ],
  };
}
