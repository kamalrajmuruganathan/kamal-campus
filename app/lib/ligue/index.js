/**
 * Ligues hebdomadaires (façon Duolingo) — 100 % hors ligne.
 *
 * L'élève accumule des XP pendant la semaine. En fin de semaine, il est classé
 * dans une « cohorte » (lui + des adversaires SIMULÉS, générés de façon
 * déterministe : ce ne sont pas de vrais joueurs). Selon son rang, il monte,
 * se maintient ou descend d'un palier. Cinq paliers, du Bronze au Diamant.
 *
 * Module pur et testable : aucune dépendance, dates au format « AAAA-MM-JJ ».
 */

export const LIGUES = ['Bronze', 'Argent', 'Or', 'Platine', 'Diamant'];
const TAILLE_COHORTE = 10; // l'élève + 9 adversaires simulés
const PROMUS = 3; // les 3 premiers montent
const RELEGUES = 3; // les 3 derniers descendent

/** Lundi (début de semaine) de la date donnée, en « AAAA-MM-JJ » (UTC). */
export function debutSemaine(dateStr) {
  const [a, m, j] = String(dateStr).split('-').map(Number);
  const d = new Date(Date.UTC(a, (m || 1) - 1, j || 1));
  const jour = d.getUTCDay(); // 0=dim … 6=sam
  const recul = (jour + 6) % 7; // vers lundi
  d.setUTCDate(d.getUTCDate() - recul);
  return d.toISOString().slice(0, 10);
}

/** État de départ (Bronze, semaine en cours, 0 XP). */
export function etatInitial(jour = '1970-01-05') {
  return { semaine: debutSemaine(jour), xpSemaine: 0, palier: 0, dernier: null };
}

// RNG déterministe à partir d'une chaîne (hash → mulberry32).
function rngDepuis(chaine) {
  let h = 1779033703 ^ chaine.length;
  for (let i = 0; i < chaine.length; i += 1) {
    h = Math.imul(h ^ chaine.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NOMS = ['Léa', 'Hugo', 'Emma', 'Noah', 'Jade', 'Liam', 'Chloé', 'Adam', 'Manon', 'Sacha', 'Inès', 'Théo'];

/**
 * Cohorte de la semaine : adversaires simulés + l'élève, triés par XP décroissant.
 * Déterministe pour un couple (semaine, palier) donné.
 * @returns {{nom, xp, moi}[]}
 */
export function cohorte(semaine, palier, xpEleve) {
  const rand = rngDepuis(`${semaine}#${palier}`);
  const base = 60 + palier * 90; // plus le palier est haut, plus ça grimpe
  const membres = [];
  const noms = NOMS.slice();
  for (let i = 0; i < TAILLE_COHORTE - 1; i += 1) {
    const idx = Math.floor(rand() * noms.length);
    const nom = noms.splice(idx, 1)[0] || `Élève ${i + 1}`;
    const xp = Math.round(base + rand() * base * 3);
    membres.push({ nom, xp, moi: false });
  }
  membres.push({ nom: 'Toi', xp: Math.max(0, Math.round(xpEleve)), moi: true });
  membres.sort((x, y) => y.xp - x.xp || (x.moi ? 1 : -1));
  return membres;
}

/** Rang (1 = premier) de l'élève dans la cohorte. */
export function rangEleve(semaine, palier, xpEleve) {
  return cohorte(semaine, palier, xpEleve).findIndex((m) => m.moi) + 1;
}

/** Nouveau palier après un classement : promotion / maintien / relégation. */
export function nouveauPalier(palier, rang) {
  if (rang <= PROMUS) return Math.min(LIGUES.length - 1, palier + 1);
  if (rang > TAILLE_COHORTE - RELEGUES) return Math.max(0, palier - 1);
  return palier;
}

/**
 * Applique le passage de semaine si nécessaire (résout le classement de la
 * semaine écoulée, ajuste le palier, remet les XP à zéro).
 */
export function appliquerRollover(etat, jour) {
  const semaineActuelle = debutSemaine(jour);
  if (etat.semaine === semaineActuelle) return etat;
  const rang = rangEleve(etat.semaine, etat.palier, etat.xpSemaine);
  const palier = nouveauPalier(etat.palier, rang);
  const sens = palier > etat.palier ? 'promotion' : (palier < etat.palier ? 'relegation' : 'maintien');
  return {
    semaine: semaineActuelle,
    xpSemaine: 0,
    palier,
    dernier: { semaine: etat.semaine, rang, palierAvant: etat.palier, palierApres: palier, sens },
  };
}

/** Ajoute des XP à la semaine (après avoir géré un éventuel changement de semaine). */
export function ajouterXp(etat, xp, jour) {
  const base = appliquerRollover(etat && etat.semaine ? etat : etatInitial(jour), jour);
  return { ...base, xpSemaine: base.xpSemaine + Math.max(0, xp || 0) };
}
