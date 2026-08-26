/**
 * Progression de l'élève — logique pure (points, niveaux, rangs).
 *
 * Aucune dépendance à React ni au stockage : ce module ne fait que du calcul,
 * ce qui le rend testable comme les autres modules de lib/. Le branchement à
 * l'appareil (AsyncStorage) et à l'interface vit dans src/progression/.
 *
 * Principe demandé : « plus l'élève a de bonnes réponses, plus son score et son
 * niveau s'améliorent. » Les points viennent donc des bonnes réponses, pondérés
 * par la difficulté, avec un bonus quand la session est réussie.
 */

/** Points de base d'une bonne réponse, selon la difficulté de la question. */
export const POINTS_PAR_DIFFICULTE = {
  facile: 8,
  application: 10,
  intermediaire: 12,
  approfondissement: 14,
  bac: 18,
  brevet: 18,
};

const POINTS_DEFAUT = 10;

/** Points rapportés par UNE bonne réponse à une question de difficulté donnée. */
export function pointsQuestion(difficulte) {
  return POINTS_PAR_DIFFICULTE[difficulte] ?? POINTS_DEFAUT;
}

/**
 * Points d'une session de QCM terminée.
 *
 * @param {Array<{difficulte?: string}>} questions  les questions posées
 * @param {Array<{juste?: boolean}>} reponses        réponses de l'élève (même ordre)
 * @returns {{points, justes, total, taux, sansFaute}}
 *
 * Les points de base sont la somme des questions réussies (pondérée difficulté).
 * Un bonus multiplie ensuite le total : +50 % pour un sans-faute, +20 % dès 80 %
 * de réussite. Un QCM raté rapporte peu, mais jamais rien de négatif.
 */
export function pointsSession(questions, reponses) {
  const total = questions.length;
  let base = 0;
  let justes = 0;

  for (let i = 0; i < total; i++) {
    if (reponses[i]?.juste) {
      justes += 1;
      base += pointsQuestion(questions[i]?.difficulte);
    }
  }

  const taux = total > 0 ? justes / total : 0;
  const sansFaute = total > 0 && justes === total;

  let facteur = 1;
  if (sansFaute) facteur = 1.5;
  else if (taux >= 0.8) facteur = 1.2;

  return {
    points: Math.round(base * facteur),
    justes,
    total,
    taux,
    sansFaute,
  };
}

/**
 * Plus longue série de bonnes réponses consécutives dans une session.
 * @param {Array<{juste?: boolean}>} reponses
 */
export function meilleureSerie(reponses) {
  let max = 0;
  let courant = 0;
  for (const r of reponses) {
    if (r?.juste) {
      courant += 1;
      if (courant > max) max = courant;
    } else {
      courant = 0;
    }
  }
  return max;
}

// ── Niveaux ──────────────────────────────────────────────────────────────────
//
// Passer du niveau n au niveau n+1 coûte 100 + (n-1)·50 XP : les premiers
// niveaux tombent vite (pour accrocher), puis l'écart grandit régulièrement.
//   niveau 1 → 0 XP · niveau 2 → 100 · niveau 3 → 250 · niveau 4 → 450 …

/** Coût pour passer du niveau `n` au niveau `n+1`. */
export function coutNiveau(n) {
  return 100 + (n - 1) * 50;
}

/** XP cumulés nécessaires pour ATTEINDRE un niveau donné (niveau 1 = 0 XP). */
export function xpPourNiveau(niveau) {
  const n = Math.max(1, Math.floor(niveau));
  // Somme des coûts des niveaux 1..n-1.
  let total = 0;
  for (let k = 1; k < n; k++) total += coutNiveau(k);
  return total;
}

/**
 * À partir d'un total d'XP, décrit le niveau atteint et la marche en cours.
 * @returns {{niveau, titre, xpDebutNiveau, xpProchainNiveau, xpDansNiveau,
 *            xpRestant, largeurNiveau, progression}}
 */
export function niveauPourXp(xp) {
  const total = Math.max(0, Math.floor(xp || 0));
  let niveau = 1;
  while (xpPourNiveau(niveau + 1) <= total) niveau += 1;

  const xpDebutNiveau = xpPourNiveau(niveau);
  const xpProchainNiveau = xpPourNiveau(niveau + 1);
  const largeurNiveau = xpProchainNiveau - xpDebutNiveau;
  const xpDansNiveau = total - xpDebutNiveau;

  return {
    niveau,
    titre: rang(niveau),
    xpDebutNiveau,
    xpProchainNiveau,
    xpDansNiveau,
    xpRestant: xpProchainNiveau - total,
    largeurNiveau,
    progression: largeurNiveau > 0 ? xpDansNiveau / largeurNiveau : 0,
  };
}

// ── Rangs ────────────────────────────────────────────────────────────────────
// Un titre encourageant attaché à des paliers de niveau.

export const RANGS = [
  { min: 1, titre: 'Débutant' },
  { min: 3, titre: 'Apprenti' },
  { min: 6, titre: 'Confirmé' },
  { min: 10, titre: 'Chevronné' },
  { min: 15, titre: 'Expert' },
  { min: 21, titre: 'Maître' },
  { min: 28, titre: 'Génie' },
];

/** Titre de rang correspondant à un niveau. */
export function rang(niveau) {
  let titre = RANGS[0].titre;
  for (const r of RANGS) {
    if (niveau >= r.min) titre = r.titre;
  }
  return titre;
}
