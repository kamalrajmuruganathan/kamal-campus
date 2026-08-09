/**
 * Kamal Campus — Probabilités
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Couvre la Seconde (équiprobabilité, événements, union/contraire) et la
 * Première (conditionnelles, arbres pondérés, probabilités totales, Bernoulli).
 *
 * ⚠️ La répétition d'épreuves de Bernoulli est bornée à n ≤ 4, conformément au
 * programme de première : les chemins se comptent sur un arbre, sans recourir
 * aux coefficients binomiaux (qui relèvent de la terminale).
 */

const arrondi = (x, d = 6) => (Number.isInteger(x) ? x : Number(x.toFixed(d)));
const estProba = (p) => typeof p === 'number' && Number.isFinite(p) && p >= 0 && p <= 1;

// ─────────────────────────── fractions lisibles ─────────────────────────────

const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };

/** Rend une probabilité sous forme de fraction réduite quand c'est propre. */
function enFraction(p, denominateurIndicatif = null) {
  if (denominateurIndicatif) {
    const num = Math.round(p * denominateurIndicatif);
    if (Math.abs(num / denominateurIndicatif - p) < 1e-12) {
      const g = pgcd(num, denominateurIndicatif);
      const n = num / g, d = denominateurIndicatif / g;
      return d === 1 ? String(n) : `${n}/${d}`;
    }
  }
  for (let d = 2; d <= 1000; d++) {
    const num = p * d;
    if (Math.abs(num - Math.round(num)) < 1e-12) {
      const g = pgcd(Math.round(num), d);
      const n = Math.round(num) / g, dd = d / g;
      return dd === 1 ? String(n) : `${n}/${dd}`;
    }
  }
  return String(arrondi(p));
}

// ─────────────────────────── équiprobabilité ────────────────────────────────

/**
 * P(A) = favorables / possibles — VALABLE UNIQUEMENT en équiprobabilité.
 * @param {number} favorables
 * @param {number} possibles
 * @param {boolean} equiprobable  l'énoncé garantit-il l'équiprobabilité ?
 */
export function probabiliteEquiprobable(favorables, possibles, equiprobable = true) {
  if (!Number.isInteger(favorables) || !Number.isInteger(possibles)) {
    return { valide: false, erreur: 'Les nombres d’issues doivent être des entiers.' };
  }
  if (possibles <= 0) return { valide: false, erreur: 'Le nombre d’issues possibles doit être strictement positif.' };
  if (favorables < 0 || favorables > possibles) {
    return { valide: false, erreur: `Le nombre d’issues favorables (${favorables}) doit être compris entre 0 et ${possibles}.` };
  }
  if (!equiprobable) {
    return {
      valide: false,
      erreur: 'Sans équiprobabilité, la formule favorables/possibles est FAUSSE. '
        + 'Il faut connaître la probabilité de chaque issue (dé pipé, boules de tailles différentes…).',
    };
  }

  const p = favorables / possibles;
  return {
    valide: true,
    probabilite: arrondi(p),
    fraction: enFraction(p, possibles),
    etapes: [
      { titre: 'Hypothèse', detail: 'Les issues sont équiprobables (énoncé : « équilibré », « au hasard », « bien mélangé »).' },
      { titre: 'Formule', detail: 'P(A) = nombre d’issues favorables / nombre d’issues possibles' },
      { titre: 'Calcul', detail: `P(A) = ${favorables} / ${possibles} = ${enFraction(p, possibles)}` },
    ],
  };
}

// ──────────────────────── opérations sur événements ─────────────────────────

/** P(Ā) = 1 − P(A) */
export function contraire(pA) {
  if (!estProba(pA)) return { valide: false, erreur: 'P(A) doit être compris entre 0 et 1.' };
  const p = 1 - pA;
  return {
    valide: true,
    probabilite: arrondi(p),
    etapes: [
      { titre: 'Formule', detail: 'P(Ā) = 1 − P(A)' },
      { titre: 'Calcul', detail: `P(Ā) = 1 − ${pA} = ${arrondi(p)}` },
      { titre: 'Astuce', detail: 'Quand l’énoncé dit « au moins un… », passer par le contraire « aucun » est presque toujours plus rapide.' },
    ],
  };
}

/** P(A ∪ B) = P(A) + P(B) − P(A ∩ B) */
export function union(pA, pB, pInter = null) {
  if (!estProba(pA) || !estProba(pB)) {
    return { valide: false, erreur: 'Les probabilités doivent être comprises entre 0 et 1.' };
  }
  const inter = pInter ?? 0;
  if (pInter !== null && !estProba(pInter)) {
    return { valide: false, erreur: 'P(A ∩ B) doit être compris entre 0 et 1.' };
  }
  if (inter > Math.min(pA, pB) + 1e-12) {
    return { valide: false, erreur: `P(A ∩ B) = ${inter} ne peut pas dépasser le plus petit de P(A) et P(B).` };
  }

  const p = pA + pB - inter;
  if (p > 1 + 1e-12) {
    return { valide: false, erreur: `Le résultat vaut ${arrondi(p)} > 1 : les données sont incohérentes.` };
  }

  const etapes = [
    { titre: 'Formule', detail: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)' },
    { titre: 'Pourquoi soustraire', detail: 'L’intersection est comptée DEUX FOIS dans la somme : on la retranche une fois.' },
    { titre: 'Calcul', detail: `P(A ∪ B) = ${pA} + ${pB} − ${inter} = ${arrondi(p)}` },
  ];
  if (pInter === null) {
    etapes.push({ titre: 'Hypothèse', detail: 'Aucune intersection fournie : les événements sont supposés INCOMPATIBLES. Vérifie-le.' });
  }

  return { valide: true, probabilite: arrondi(p), incompatibles: inter === 0, etapes };
}

/** Test d'indépendance : P(A ∩ B) = P(A) × P(B) ? */
export function independants(pA, pB, pInter) {
  if (![pA, pB, pInter].every(estProba)) {
    return { valide: false, erreur: 'Les trois probabilités doivent être comprises entre 0 et 1.' };
  }
  const produit = pA * pB;
  const ok = Math.abs(pInter - produit) < 1e-9;
  const etapes = [
    { titre: 'Critère', detail: 'A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B).' },
    { titre: 'Calcul', detail: `P(A) × P(B) = ${pA} × ${pB} = ${arrondi(produit)}` },
    { titre: 'Comparaison', detail: `P(A ∩ B) = ${pInter} ${ok ? '=' : '≠'} ${arrondi(produit)}` },
    { titre: 'Conclusion', detail: ok ? 'Les événements sont INDÉPENDANTS.' : 'Les événements sont DÉPENDANTS.' },
  ];
  if (pInter === 0 && pA > 0 && pB > 0) {
    etapes.push({
      titre: 'Remarque',
      detail: 'Intersection nulle avec deux probabilités non nulles : les événements sont INCOMPATIBLES, '
        + 'et donc nécessairement DÉPENDANTS. Incompatibles et indépendants sont presque des contraires.',
    });
  }
  return { valide: true, independants: ok, produit: arrondi(produit), etapes };
}

// ──────────────────────── probabilités conditionnelles ──────────────────────

/** P_A(B) = P(A ∩ B) / P(A) */
export function conditionnelle(pInter, pA) {
  if (!estProba(pInter) || !estProba(pA)) {
    return { valide: false, erreur: 'Les probabilités doivent être comprises entre 0 et 1.' };
  }
  if (pA === 0) return { valide: false, erreur: 'P(A) = 0 : la probabilité conditionnelle P_A(B) n’est pas définie.' };
  if (pInter > pA + 1e-12) {
    return { valide: false, erreur: `P(A ∩ B) = ${pInter} ne peut pas dépasser P(A) = ${pA}.` };
  }

  const p = pInter / pA;
  return {
    valide: true,
    probabilite: arrondi(p),
    etapes: [
      { titre: 'Formule', detail: 'P_A(B) = P(A ∩ B) / P(A)' },
      { titre: 'Calcul', detail: `P_A(B) = ${pInter} / ${pA} = ${arrondi(p)}` },
      {
        titre: '⚠️ Attention',
        detail: 'P_A(B) et P_B(A) sont DIFFÉRENTES. « Probabilité d’être malade sachant qu’on est positif » '
          + 'n’est pas « probabilité d’être positif sachant qu’on est malade ».',
      },
    ],
  };
}

/**
 * Arbre pondéré à deux niveaux : formule des probabilités totales.
 * @param {number} pA        P(A)
 * @param {number} pB_sachantA   P_A(B)
 * @param {number} pB_sachantNonA P_Ā(B)
 */
export function arbrePondere(pA, pB_sachantA, pB_sachantNonA) {
  if (![pA, pB_sachantA, pB_sachantNonA].every(estProba)) {
    return { valide: false, erreur: 'Toutes les probabilités doivent être comprises entre 0 et 1.' };
  }

  const pNonA = 1 - pA;
  const chemin1 = pA * pB_sachantA;              // A puis B
  const chemin2 = pNonA * pB_sachantNonA;        // Ā puis B
  const pB = chemin1 + chemin2;

  // théorème de Bayes, utile pour « inverser » le conditionnement
  const pA_sachantB = pB > 0 ? chemin1 / pB : null;

  return {
    valide: true,
    pA: arrondi(pA),
    pNonA: arrondi(pNonA),
    cheminAB: arrondi(chemin1),
    cheminNonAB: arrondi(chemin2),
    pB: arrondi(pB),
    pA_sachantB: pA_sachantB === null ? null : arrondi(pA_sachantB),
    etapes: [
      { titre: 'Somme des branches', detail: `P(A) + P(Ā) = ${pA} + ${arrondi(pNonA)} = 1 ✓` },
      { titre: 'Chemin A puis B', detail: `${pA} × ${pB_sachantA} = ${arrondi(chemin1)}`, remarque: 'On MULTIPLIE le long d’un chemin.' },
      { titre: 'Chemin Ā puis B', detail: `${arrondi(pNonA)} × ${pB_sachantNonA} = ${arrondi(chemin2)}` },
      {
        titre: 'Probabilités totales',
        detail: `P(B) = ${arrondi(chemin1)} + ${arrondi(chemin2)} = ${arrondi(pB)}`,
        remarque: 'On ADDITIONNE les chemins qui mènent à B.',
      },
      ...(pA_sachantB !== null
        ? [{
          titre: 'Conditionnement inverse',
          detail: `P_B(A) = ${arrondi(chemin1)} / ${arrondi(pB)} = ${arrondi(pA_sachantB)}`,
          remarque: '⚠️ À ne pas confondre avec P_A(B), qui vaut ' + pB_sachantA + '.',
        }]
        : []),
    ],
  };
}

// ──────────────────── répétition d'épreuves de Bernoulli ────────────────────

/**
 * Répétition de n épreuves de Bernoulli identiques et indépendantes.
 * Les chemins sont ÉNUMÉRÉS sur l'arbre, pas comptés par coefficient binomial.
 * @param {number} n nombre de répétitions (≤ 4, limite du programme)
 * @param {number} p probabilité de succès
 * @param {number} k nombre de succès voulu
 */
export function bernoulli(n, p, k) {
  if (!Number.isInteger(n) || n < 1) return { valide: false, erreur: 'n doit être un entier supérieur ou égal à 1.' };
  if (n > 4) {
    return {
      valide: false,
      erreur: `n = ${n} dépasse la limite du programme de première (n ≤ 4). `
        + 'Au-delà, on utilise la loi binomiale, vue en terminale.',
    };
  }
  if (!estProba(p)) return { valide: false, erreur: 'p doit être compris entre 0 et 1.' };
  if (!Number.isInteger(k) || k < 0 || k > n) {
    return { valide: false, erreur: `k doit être un entier compris entre 0 et ${n}.` };
  }

  // énumération explicite des 2ⁿ chemins
  const chemins = [];
  for (let masque = 0; masque < 2 ** n; masque++) {
    const suite = [];
    let succes = 0;
    for (let i = 0; i < n; i++) {
      const s = (masque >> i) & 1;
      suite.push(s ? 'S' : 'É');
      succes += s;
    }
    if (succes === k) chemins.push(suite.join(''));
  }

  const pChemin = Math.pow(p, k) * Math.pow(1 - p, n - k);
  const total = chemins.length * pChemin;

  return {
    valide: true,
    n, p, k,
    nombreChemins: chemins.length,
    chemins,
    probaParChemin: arrondi(pChemin),
    probabilite: arrondi(total),
    etapes: [
      { titre: 'Épreuve', detail: `${n} répétitions indépendantes, succès de probabilité ${p}.` },
      {
        titre: 'Chemins réalisant exactement ' + k + ' succès',
        detail: chemins.length ? chemins.join(' · ') : 'aucun',
      },
      { titre: 'Probabilité d’un chemin', detail: `${p}^${k} × ${arrondi(1 - p)}^${n - k} = ${arrondi(pChemin)}` },
      {
        titre: 'Total',
        detail: `${chemins.length} chemin(s) × ${arrondi(pChemin)} = ${arrondi(total)}`,
        remarque: '⚠️ Le facteur vient du NOMBRE DE CHEMINS. L’oublier est l’erreur type de ce chapitre.',
      },
    ],
  };
}

// ─────────────────────── contrôle d'une loi de probabilité ──────────────────

/** Vérifie que la somme des probabilités vaut 1. */
export function verifierLoi(probabilites) {
  if (!Array.isArray(probabilites) || probabilites.length === 0) {
    return { valide: false, erreur: 'Liste de probabilités vide.' };
  }
  const hors = probabilites.filter((p) => !estProba(p));
  if (hors.length) {
    return { valide: false, erreur: `Valeur(s) hors de [0 ; 1] : ${hors.join(', ')}.` };
  }
  const somme = probabilites.reduce((a, b) => a + b, 0);
  const ok = Math.abs(somme - 1) < 1e-9;
  return {
    valide: true,
    somme: arrondi(somme),
    coherente: ok,
    etapes: [
      { titre: 'Somme', detail: `Σpᵢ = ${arrondi(somme)}` },
      {
        titre: 'Conclusion',
        detail: ok
          ? 'La somme vaut 1 : la loi de probabilité est cohérente ✓'
          : `La somme vaut ${arrondi(somme)} au lieu de 1 : il y a une erreur, inutile de poursuivre les calculs.`,
      },
    ],
  };
}

// ────────────────────────── variable aléatoire ──────────────────────────────

/**
 * Espérance, variance et écart-type d'une variable aléatoire discrète.
 * La variance est calculée par König-Huygens : V(X) = E(X²) − (E(X))².
 */
export function variableAleatoire(valeurs, probabilites) {
  if (!Array.isArray(valeurs) || !Array.isArray(probabilites) || valeurs.length !== probabilites.length) {
    return { valide: false, erreur: 'Il faut autant de probabilités que de valeurs.' };
  }
  if (valeurs.some((v) => typeof v !== 'number' || !Number.isFinite(v))) {
    return { valide: false, erreur: 'Les valeurs doivent être des nombres.' };
  }
  const loi = verifierLoi(probabilites);
  if (!loi.valide) return loi;
  if (!loi.coherente) {
    return { valide: false, erreur: `La somme des probabilités vaut ${loi.somme} au lieu de 1.` };
  }

  const E = valeurs.reduce((s, v, i) => s + v * probabilites[i], 0);
  const E2 = valeurs.reduce((s, v, i) => s + v * v * probabilites[i], 0);
  const V = E2 - E * E;
  const sigma = Math.sqrt(Math.max(V, 0));

  return {
    valide: true,
    esperance: arrondi(E),
    esperanceCarres: arrondi(E2),
    variance: arrondi(V),
    ecartType: arrondi(sigma),
    equitable: Math.abs(E) < 1e-12,
    etapes: [
      { titre: 'Contrôle', detail: `Σpᵢ = 1 ✓` },
      { titre: 'Espérance', detail: `E(X) = Σxᵢpᵢ = ${arrondi(E)}` },
      { titre: 'Moyenne des carrés', detail: `E(X²) = Σxᵢ²pᵢ = ${arrondi(E2)}` },
      {
        titre: 'Variance (König-Huygens)',
        detail: `V(X) = E(X²) − (E(X))² = ${arrondi(E2)} − ${arrondi(E * E)} = ${arrondi(V)}`,
        remarque: '« Moyenne des carrés moins carré de la moyenne » — l’ordre compte : l’inverser donnerait une variance négative.',
      },
      { titre: 'Écart-type', detail: `σ(X) = √${arrondi(V)} = ${arrondi(sigma)}` },
      ...(Math.abs(E) < 1e-12
        ? [{ titre: 'Interprétation', detail: 'E(X) = 0 : le jeu est ÉQUITABLE.' }]
        : [{ titre: 'Interprétation', detail: `En moyenne, on ${E > 0 ? 'gagne' : 'perd'} ${arrondi(Math.abs(E))} par partie.` }]),
    ],
  };
}

/** Effet d'une transformation affine : E(aX+b) = aE(X)+b, V(aX+b) = a²V(X). */
export function transformationAffineVA(esperance, variance, a, b) {
  if (![esperance, variance, a, b].every((v) => typeof v === 'number' && Number.isFinite(v))) {
    return { valide: false, erreur: 'Toutes les valeurs doivent être des nombres.' };
  }
  if (variance < 0) return { valide: false, erreur: 'Une variance ne peut pas être négative.' };
  return {
    valide: true,
    esperance: arrondi(a * esperance + b),
    variance: arrondi(a * a * variance),
    ecartType: arrondi(Math.abs(a) * Math.sqrt(variance)),
    etapes: [
      { titre: 'Espérance', detail: `E(aX+b) = aE(X)+b = ${a} × ${esperance} + ${b} = ${arrondi(a * esperance + b)}` },
      {
        titre: 'Variance',
        detail: `V(aX+b) = a²V(X) = ${a}² × ${variance} = ${arrondi(a * a * variance)}`,
        remarque: '⚠️ C’est a², pas a. Et b n’intervient PAS : un décalage ne change pas la dispersion.',
      },
      { titre: 'Écart-type', detail: `σ(aX+b) = |a|σ(X) = ${arrondi(Math.abs(a) * Math.sqrt(variance))}` },
    ],
  };
}
