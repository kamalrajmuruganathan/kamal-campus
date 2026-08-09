/**
 * Kamal Campus — Suites arithmétiques et géométriques
 *
 * Calcul DÉTERMINISTE, sans IA. Aucune dépendance externe.
 *
 * Deux conventions reprises de `second-degre.js` :
 *   - résultats exacts en fractions réduites quand c'est possible ;
 *   - chaque fonction renvoie un tableau `etapes` : l'outil montre le
 *     raisonnement, sinon ce n'est qu'une calculatrice.
 *
 * ⚠️ L'indice du premier terme est un paramètre explicite (`p`, par défaut 0).
 * C'est la source d'erreur numéro un du chapitre : une suite qui commence à u₁
 * n'a pas la même formule qu'une suite qui commence à u₀.
 */

// ─────────────────────────────── rationnels ─────────────────────────────────

const pgcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) [x, y] = [y, x % y];
  return x || 1;
};

const estEntier = (x) => Number.isInteger(x);

/** Fraction réduite, signe porté par le numérateur. */
function fraction(num, den = 1) {
  if (den === 0) throw new Error('dénominateur nul');
  if (den < 0) {
    num = -num;
    den = -den;
  }
  const g = pgcd(num, den);
  num /= g;
  den /= g;
  return {
    num,
    den,
    exact: true,
    valeur: num / den,
    texte: den === 1 ? String(num) : `${num}/${den}`,
    latex: den === 1 ? String(num) : `\\dfrac{${num}}{${den}}`,
  };
}

function approche(x, decimales = 6) {
  const v = Number(x.toFixed(decimales));
  return {
    num: null,
    den: null,
    exact: false,
    valeur: v,
    texte: `≈ ${String(v).replace('.', ',')}`,
    latex: `\\approx ${v}`,
  };
}

/** Emballe un nombre : exact si entier, approché sinon. */
const nb = (x) => (estEntier(x) ? fraction(x) : approche(x));

// ──────────────────────────── reconnaître la nature ─────────────────────────

/**
 * Détermine si une liste de termes suit une suite arithmétique ou géométrique.
 * @param {number[]} termes au moins 3 termes consécutifs
 */
export function reconnaitreNature(termes) {
  if (!Array.isArray(termes) || termes.length < 3) {
    return { valide: false, erreur: 'Il faut au moins trois termes consécutifs pour conclure.' };
  }
  if (termes.some((t) => typeof t !== 'number' || !Number.isFinite(t))) {
    return { valide: false, erreur: 'Tous les termes doivent être des nombres.' };
  }

  const diffs = termes.slice(1).map((t, i) => t - termes[i]);
  const memeDiff = diffs.every((d) => Math.abs(d - diffs[0]) < 1e-9);

  const etapes = [
    { titre: 'Différences successives', detail: diffs.map((d) => d.toString()).join(' · ') },
  ];

  if (memeDiff) {
    etapes.push({ titre: 'Conclusion', detail: `Différence constante : suite arithmétique de raison ${diffs[0]}.` });
    return { valide: true, nature: 'arithmetique', raison: nb(diffs[0]), etapes };
  }

  // quotients — seulement si aucun terme nul
  if (termes.some((t) => t === 0)) {
    etapes.push({ titre: 'Quotients', detail: 'Impossible : un terme est nul, on ne peut pas diviser.' });
    etapes.push({ titre: 'Conclusion', detail: "La suite n'est ni arithmétique ni géométrique." });
    return { valide: true, nature: 'ni-l-un-ni-l-autre', raison: null, etapes };
  }

  const quots = termes.slice(1).map((t, i) => t / termes[i]);
  const memeQuot = quots.every((q) => Math.abs(q - quots[0]) < 1e-9);
  etapes.push({ titre: 'Quotients successifs', detail: quots.map((q) => Number(q.toFixed(6))).join(' · ') });

  if (memeQuot) {
    etapes.push({ titre: 'Conclusion', detail: `Quotient constant : suite géométrique de raison ${Number(quots[0].toFixed(6))}.` });
    return { valide: true, nature: 'geometrique', raison: nb(quots[0]), etapes };
  }

  etapes.push({ titre: 'Conclusion', detail: "Ni différence ni quotient constant : la suite n'est ni arithmétique ni géométrique." });
  return { valide: true, nature: 'ni-l-un-ni-l-autre', raison: null, etapes };
}

// ─────────────────────────────── suite arithmétique ─────────────────────────

/**
 * Analyse complète d'une suite arithmétique.
 * @param {number} up  premier terme
 * @param {number} r   raison
 * @param {number} n   rang du terme à calculer
 * @param {number} p   indice du premier terme (0 par défaut)
 */
export function suiteArithmetique(up, r, n, p = 0) {
  const err = valider(up, r, n, p);
  if (err) return err;

  const un = up + (n - p) * r;
  const etapes = [
    { titre: 'Nature', detail: `Suite arithmétique de raison r = ${r}, premier terme u${sub(p)} = ${up}.` },
    {
      titre: 'Terme général',
      detail: `u${sub('n')} = u${sub(p)} + (n − ${p}) × r`,
      latex: `u_n = ${up} + (n - ${p}) \\times ${r}`,
    },
    {
      titre: `Calcul de u${sub(n)}`,
      detail: `u${sub(n)} = ${up} + (${n} − ${p}) × ${r} = ${un}`,
    },
  ];

  // somme des termes de rang p à n
  const nbTermes = n - p + 1;
  const somme = (nbTermes * (up + un)) / 2;
  etapes.push({
    titre: 'Somme des termes',
    detail: `nombre de termes × (premier + dernier) / 2 = ${nbTermes} × (${up} + ${un}) / 2 = ${somme}`,
  });

  return {
    valide: true,
    nature: 'arithmetique',
    premierTerme: nb(up),
    indiceDepart: p,
    raison: nb(r),
    terme: nb(un),
    rang: n,
    nombreDeTermes: nbTermes,
    somme: nb(somme),
    variation: r > 0 ? 'croissante' : r < 0 ? 'décroissante' : 'constante',
    variationTexte:
      r > 0 ? `r = ${r} > 0 : la suite est croissante.`
        : r < 0 ? `r = ${r} < 0 : la suite est décroissante.`
          : 'r = 0 : la suite est constante.',
    etapes,
  };
}

// ─────────────────────────────── suite géométrique ──────────────────────────

/**
 * Analyse complète d'une suite géométrique.
 * @param {number} up  premier terme
 * @param {number} q   raison (non nulle)
 * @param {number} n   rang du terme à calculer
 * @param {number} p   indice du premier terme (0 par défaut)
 */
export function suiteGeometrique(up, q, n, p = 0) {
  const err = valider(up, q, n, p);
  if (err) return err;
  if (q === 0) {
    return { valide: false, erreur: 'La raison d’une suite géométrique doit être non nulle.' };
  }

  const exposant = n - p;
  const un = up * Math.pow(q, exposant);
  const etapes = [
    { titre: 'Nature', detail: `Suite géométrique de raison q = ${q}, premier terme u${sub(p)} = ${up}.` },
    {
      titre: 'Terme général',
      detail: `u${sub('n')} = u${sub(p)} × q^(n − ${p})`,
      latex: `u_n = ${up} \\times ${q}^{\\,n-${p}}`,
    },
    {
      titre: `Calcul de u${sub(n)}`,
      detail: `u${sub(n)} = ${up} × ${q}^${exposant} = ${arrondi(un)}`,
    },
  ];

  const nbTermes = n - p + 1;
  let somme;
  if (q === 1) {
    somme = up * nbTermes;
    etapes.push({ titre: 'Somme des termes', detail: `q = 1 : tous les termes sont égaux, la somme vaut ${nbTermes} × ${up} = ${somme}.` });
  } else {
    somme = up * ((1 - Math.pow(q, nbTermes)) / (1 - q));
    etapes.push({
      titre: 'Somme des termes',
      detail: `u${sub(p)} × (1 − q^${nbTermes}) / (1 − q) = ${up} × (1 − ${q}^${nbTermes}) / (1 − ${q}) = ${arrondi(somme)}`,
      remarque: `⚠️ L'exposant est le NOMBRE DE TERMES (${nbTermes}), pas le rang final.`,
    });
  }

  let variation, variationTexte;
  if (q < 0) {
    variation = 'alternee';
    variationTexte = `q = ${q} < 0 : les termes alternent de signe, la suite n'est ni croissante ni décroissante.`;
  } else if (up === 0) {
    variation = 'constante';
    variationTexte = 'Le premier terme est nul : la suite est constante et nulle.';
  } else {
    const sensPositif = up > 0;
    if (q > 1) {
      variation = sensPositif ? 'croissante' : 'decroissante';
      variationTexte = `q = ${q} > 1 et u${sub(p)} ${sensPositif ? '> 0' : '< 0'} : la suite est ${variation}.`;
    } else if (q === 1) {
      variation = 'constante';
      variationTexte = 'q = 1 : la suite est constante.';
    } else {
      variation = sensPositif ? 'decroissante' : 'croissante';
      variationTexte = `0 < q = ${q} < 1 et u${sub(p)} ${sensPositif ? '> 0' : '< 0'} : la suite est ${variation}.`;
    }
  }

  return {
    valide: true,
    nature: 'geometrique',
    premierTerme: nb(up),
    indiceDepart: p,
    raison: nb(q),
    terme: nb(un),
    rang: n,
    nombreDeTermes: nbTermes,
    somme: nb(somme),
    variation,
    variationTexte,
    limite: limiteGeometrique(q, up),
    etapes,
  };
}

/** Comportement intuitif quand n devient grand (approche de première). */
function limiteGeometrique(q, up) {
  if (up === 0) return 'La suite est nulle.';
  const a = Math.abs(q);
  if (a > 1) return "Les termes s'éloignent indéfiniment de 0 (limite infinie en valeur absolue).";
  if (a === 1) return q === 1 ? 'La suite est constante.' : 'Les termes alternent entre deux valeurs opposées.';
  return 'Les termes se rapprochent de 0.';
}

// ───────────────────────── taux d'évolution ↔ raison ────────────────────────

/**
 * Convertit un taux d'évolution en pourcentage en raison géométrique.
 * Une baisse de 20 % donne 0,8 — et non −0,2.
 * @param {number} tauxPourcent  ex. 3 pour +3 %, -20 pour −20 %
 */
export function raisonDepuisTaux(tauxPourcent) {
  if (typeof tauxPourcent !== 'number' || !Number.isFinite(tauxPourcent)) {
    return { valide: false, erreur: 'Le taux doit être un nombre.' };
  }
  if (tauxPourcent <= -100) {
    return { valide: false, erreur: 'Une baisse de 100 % ou plus annulerait la grandeur : la raison ne serait plus définie.' };
  }
  const q = 1 + tauxPourcent / 100;
  return {
    valide: true,
    taux: tauxPourcent,
    raison: nb(Number(q.toFixed(10))),
    etapes: [
      { titre: 'Formule', detail: 'q = 1 + t/100' },
      { titre: 'Calcul', detail: `q = 1 + ${tauxPourcent}/100 = ${Number(q.toFixed(10))}` },
      {
        titre: 'Vérification de bon sens',
        detail: tauxPourcent < 0
          ? `Une baisse de ${-tauxPourcent} % donne une raison POSITIVE inférieure à 1 (${Number(q.toFixed(10))}), pas une raison négative.`
          : `Une hausse de ${tauxPourcent} % donne une raison supérieure à 1.`,
      },
    ],
  };
}

// ─────────────────────────── somme des n premiers entiers ───────────────────

/** 1 + 2 + … + n = n(n+1)/2 */
export function sommeEntiers(n) {
  if (!estEntier(n) || n < 1) {
    return { valide: false, erreur: 'n doit être un entier supérieur ou égal à 1.' };
  }
  const s = (n * (n + 1)) / 2;
  return {
    valide: true,
    n,
    somme: fraction(s),
    etapes: [
      { titre: 'Formule', detail: 'n(n+1)/2', latex: '\\dfrac{n(n+1)}{2}' },
      { titre: 'Calcul', detail: `${n} × ${n + 1} / 2 = ${s}` },
    ],
  };
}

// ──────────────────────────────── utilitaires ───────────────────────────────

function valider(up, r, n, p) {
  for (const [nom, v] of [['le premier terme', up], ['la raison', r], ['le rang n', n], ["l'indice de départ", p]]) {
    if (typeof v !== 'number' || !Number.isFinite(v)) {
      return { valide: false, erreur: `Valeur invalide pour ${nom}.` };
    }
  }
  if (!estEntier(n) || !estEntier(p)) {
    return { valide: false, erreur: 'Le rang n et l’indice de départ doivent être des entiers.' };
  }
  if (n < p) {
    return {
      valide: false,
      erreur: `Le rang demandé (${n}) est inférieur à l’indice du premier terme (${p}) : ce terme n’existe pas.`,
    };
  }
  return null;
}

const IND = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
function sub(x) {
  if (typeof x !== 'number') return x;
  return String(x).split('').map((c) => (IND[Number(c)] ?? c)).join('');
}

const arrondi = (x) => (estEntier(x) ? x : Number(x.toFixed(6)));
