/**
 * « Je révise mon contrôle » — plan de révision jour par jour (logique pure).
 *
 * L'élève choisit 1 à 4 chapitres et la date de son contrôle. On fabrique un
 * plan : chaque jour reçoit 1 à 3 tâches courtes (≈ 30 min au plus), selon une
 * progression logique :
 *   1. lire les fiches ;
 *   2. apprendre les cartes et faire le QCM du chapitre ;
 *   3. faire des exercices (au plus tôt le lendemain de la lecture de la fiche) ;
 *   4. les jours restants : révisions espacées des chapitres déjà vus ;
 *   - la veille : un QCM bilan mélangeant tous les chapitres, sans nouvelle notion ;
 *   - le jour J : seulement « relis tes cartes 10 minutes ».
 *
 * Dates au format « AAAA-MM-JJ » (calculs en UTC, sans fuseau), injectées par
 * l'appelant : tout est testable sans horloge réelle. Aucune dépendance.
 */

export const TYPES = ['fiche', 'flashcards', 'qcm', 'exercices', 'bilan'];
export const MAX_CHAPITRES = 4;
export const MAX_TACHES_PAR_JOUR = 3;
export const BUDGET_MINUTES = 30;

// Durées estimées (minutes) d'une tâche portant sur UN chapitre.
const MINUTES = { fiche: 10, flashcards: 8, qcm: 10, exercices: 15, bilan: 15 };
// Version « express » quand le temps manque (tâches groupées sur plusieurs chapitres).
const MINUTES_EXPRESS = { fiche: 7, flashcards: 5, qcm: 7, exercices: 8 };

const NBSP = ' ';
const pad2 = (n) => String(n).padStart(2, '0');

// ── Dates ───────────────────────────────────────────────────────────────────

function versDate(s) {
  const [a, m, j] = String(s).split('-').map(Number);
  return new Date(Date.UTC(a, (m || 1) - 1, j || 1));
}
function versTexte(d) {
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

/** Ajoute `n` jours à une date « AAAA-MM-JJ ». */
export function ajouterJours(date, n) {
  const d = versDate(date);
  d.setUTCDate(d.getUTCDate() + n);
  return versTexte(d);
}

/** Nombre de jours de `a` à `b` (positif si b est après a). */
export function ecartJours(a, b) {
  return Math.round((versDate(b) - versDate(a)) / 86400000);
}

const JOURS_SEMAINE = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août',
  'septembre', 'octobre', 'novembre', 'décembre'];

/** « mardi 13 octobre » (« 1er » pour le premier du mois). */
export function dateEnLettres(date) {
  const d = versDate(date);
  const j = d.getUTCDate();
  return `${JOURS_SEMAINE[d.getUTCDay()]} ${j === 1 ? '1er' : j} ${MOIS[d.getUTCMonth()]}`;
}

/** « aujourd'hui », « demain », « dans 3 jours » (ou « il y a 2 jours »). */
export function delaiEnLettres(aujourdHui, date) {
  const n = ecartJours(aujourdHui, date);
  if (n === 0) return 'aujourd’hui';
  if (n === 1) return 'demain';
  if (n === -1) return 'hier';
  if (n < 0) return `il y a ${-n}${NBSP}jours`;
  return `dans ${n}${NBSP}jours`;
}

/**
 * Dates proposées pour le contrôle : de demain à dans 14 jours.
 * → [{ date, jours, libelle, detail }] ; libellé du type « Demain », « Vendredi 9 »,
 * puis « Dans 8 jours » ; le détail donne l'autre information.
 */
export function optionsDates(aujourdHui, max = 14) {
  const options = [];
  for (let n = 1; n <= max; n += 1) {
    const date = ajouterJours(aujourdHui, n);
    const d = versDate(date);
    const jourMois = `${JOURS_SEMAINE[d.getUTCDay()]} ${d.getUTCDate() === 1 ? '1er' : d.getUTCDate()}`;
    const majuscule = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    let libelle;
    let detail;
    if (n === 1) { libelle = 'Demain'; detail = jourMois; } else if (n <= 6) {
      libelle = majuscule(jourMois); detail = `dans ${n}${NBSP}jours`;
    } else { libelle = `Dans ${n}${NBSP}jours`; detail = jourMois; }
    options.push({ date, jours: n, libelle, detail });
  }
  return options;
}

// ── Chapitres ───────────────────────────────────────────────────────────────

/**
 * Normalise un chapitre d'entrée : un identifiant (chaîne) ou un objet
 * { id, fiche?, flashcards?, qcm?, exercices? } (booléens : contenu disponible ;
 * vrai par défaut).
 */
function normaliserChapitre(c) {
  if (typeof c === 'string') return { id: c, fiche: true, flashcards: true, qcm: true, exercices: true };
  return {
    id: c.id,
    fiche: c.fiche !== false,
    flashcards: c.flashcards !== false,
    qcm: c.qcm !== false,
    exercices: c.exercices !== false,
  };
}

// ── Ordonnancement ──────────────────────────────────────────────────────────

/**
 * Place les tâches d'apprentissage sur `W` jours (avant la veille), au plus
 * `budget` minutes et 3 tâches par jour. Renvoie null si tout ne tient pas.
 */
function ordonnancer(chaps, W, budget, avecCartes, exMemeJour = false) {
  const phases = ['fiche', ...(avecCartes ? ['flashcards'] : []), 'qcm', 'exercices'];
  let enAttente = [];
  for (const type of phases) {
    for (const c of chaps) if (c[type]) enAttente.push({ type, chap: c, minutes: MINUTES[type] });
  }
  const jourDe = {}; // `${type}:${id}` → indice du jour
  const jours = Array.from({ length: W }, () => ({ taches: [], minutes: 0 }));

  const pret = (t, d) => {
    const fiche = jourDe[`fiche:${t.chap.id}`];
    if (t.type === 'fiche') return true;
    if (t.chap.fiche && fiche === undefined) return false;
    if (t.type === 'flashcards' || t.type === 'qcm') return !t.chap.fiche || fiche <= d;
    // Exercices : au plus tôt le lendemain de la fiche (sauf si le temps manque), et après le QCM.
    if (t.chap.fiche && (exMemeJour ? fiche > d : fiche >= d)) return false;
    const qcm = jourDe[`qcm:${t.chap.id}`];
    if (t.chap.qcm && (qcm === undefined || qcm > d)) return false;
    return true;
  };

  for (let d = 0; d < W; d += 1) {
    const jour = jours[d];
    for (const t of [...enAttente]) {
      if (jour.taches.length >= MAX_TACHES_PAR_JOUR) break;
      if (jour.taches.length > 0 && jour.minutes + t.minutes > budget) continue;
      if (!pret(t, d)) continue;
      jour.taches.push({ type: t.type, chapitres: [t.chap.id], minutes: t.minutes });
      jour.minutes += t.minutes;
      jourDe[`${t.type}:${t.chap.id}`] = d;
      enAttente = enAttente.filter((x) => x !== t);
    }
  }
  return enAttente.length === 0 ? jours : null;
}

/** Ajoute les révisions espacées dans les jours libres ou peu chargés. */
function ajouterRevisions(jours, chaps) {
  const fin = {}; // dernier jour d'apprentissage de chaque chapitre
  const vu = {}; // dernier jour où le chapitre a été travaillé
  jours.forEach((j, d) => j.taches.forEach((t) => t.chapitres.forEach((id) => { fin[id] = d; vu[id] = d; })));
  const nbRev = {};
  const cycleDe = (c) => ['flashcards', 'qcm', 'exercices'].filter((ty) => c[ty]);

  jours.forEach((jour, d) => {
    const vide = jour.taches.length === 0;
    // Jour vide : jusqu'à 2 chapitres révisés ; sinon 1 seul, s'il reste de la place.
    const maxAjouts = vide ? Math.min(2, chaps.length) : 1;
    let ajouts = 0;
    const candidats = chaps
      .filter((c) => fin[c.id] !== undefined && fin[c.id] < d && cycleDe(c).length > 0)
      .filter((c) => vide || d - vu[c.id] >= 2) // jour chargé : seulement si pas vu depuis 2 jours
      .sort((a, b) => vu[a.id] - vu[b.id]);
    for (const c of candidats) {
      if (ajouts >= maxAjouts || jour.taches.length >= MAX_TACHES_PAR_JOUR) break;
      const cycle = cycleDe(c);
      const type = cycle[(nbRev[c.id] || 0) % cycle.length];
      const minutes = MINUTES[type];
      if (jour.taches.length > 0 && jour.minutes + minutes > BUDGET_MINUTES) continue;
      jour.taches.push({ type, chapitres: [c.id], minutes, revision: true });
      jour.minutes += minutes;
      nbRev[c.id] = (nbRev[c.id] || 0) + 1;
      vu[c.id] = d;
      ajouts += 1;
    }
  });
}

/** Plan « express » quand le temps manque : tâches groupées sur tous les chapitres. */
function planExpress(chaps, W) {
  const groupe = (type) => {
    const ids = chaps.filter((c) => c[type]).map((c) => c.id);
    return ids.length ? { type, chapitres: ids, minutes: MINUTES_EXPRESS[type] * ids.length, express: true } : null;
  };
  const [fi, fl, q, ex] = ['fiche', 'flashcards', 'qcm', 'exercices'].map(groupe);
  let repartition;
  // Un seul jour avant la veille : avec 3 ou 4 chapitres, on garde fiches, cartes et QCM.
  if (W === 1) repartition = [chaps.length <= 2 ? [fi, q, ex] : [fi, fl, q]];
  else if (W === 2) repartition = [[fi, fl], [q, ex]];
  else repartition = [[fi], [fl, q], [ex], ...Array.from({ length: W - 3 }, () => [])];
  return repartition.map((ts) => {
    const taches = ts.filter(Boolean);
    return { taches, minutes: taches.reduce((s, t) => s + t.minutes, 0) };
  });
}

/**
 * Fabrique le plan de révision.
 * @param {object} o
 * @param {Array<string|object>} o.chapitres 1 à 4 chapitres (identifiants ou objets, cf. normaliserChapitre)
 * @param {string} o.aujourdHui « AAAA-MM-JJ »
 * @param {string} o.dateControle « AAAA-MM-JJ »
 * @returns {Array<{date, role, minutes, taches}>} role : 'travail' | 'veille' | 'jourJ' ;
 *   tâche : { id, type, chapitres: [ids], minutes, revision?, express?, jourJ? }.
 *   Contrôle déjà passé → [].
 */
export function planifier({ chapitres, aujourdHui, dateControle }) {
  const chaps = (chapitres || []).map(normaliserChapitre).filter((c) => c.id);
  if (chaps.length < 1 || chaps.length > MAX_CHAPITRES) {
    throw new Error(`Il faut choisir entre 1 et ${MAX_CHAPITRES} chapitres.`);
  }
  const N = ecartJours(aujourdHui, dateControle);
  if (!Number.isFinite(N) || N < 0) return [];

  const tous = (type) => chaps.filter((c) => c[type]).map((c) => c.id);
  let jours = [];

  if (N >= 2) {
    const W = N - 1; // jours de travail avant la veille
    // Du plus confortable au plus serré : 30 min/jour, puis 45 min, puis sans
    // séance de cartes à part, puis exercices le jour même de la fiche.
    const essais = [[BUDGET_MINUTES, true, false], [45, true, false], [45, false, false], [45, false, true]];
    let plan = null;
    for (const [budget, cartes, memeJour] of essais) {
      plan = ordonnancer(chaps, W, budget, cartes, memeJour);
      if (plan) break;
    }
    if (plan) ajouterRevisions(plan, chaps);
    else plan = planExpress(chaps, W);
    jours = plan.map((j, d) => ({ date: ajouterJours(aujourdHui, d), role: 'travail', taches: j.taches }));
  }

  if (N >= 1) {
    // La veille : QCM bilan mélangé + relecture des cartes, aucune nouvelle notion.
    const taches = [];
    if (N === 1) {
      // Un seul jour : on va à l'essentiel (la veille sert aussi à découvrir).
      if (tous('fiche').length) taches.push({ type: 'fiche', chapitres: tous('fiche'), minutes: MINUTES_EXPRESS.fiche * tous('fiche').length, express: true });
      if (tous('flashcards').length) taches.push({ type: 'flashcards', chapitres: tous('flashcards'), minutes: MINUTES_EXPRESS.flashcards * tous('flashcards').length, express: true });
    }
    taches.push({ type: 'bilan', chapitres: chaps.map((c) => c.id), minutes: MINUTES.bilan });
    if (N >= 2 && tous('flashcards').length) {
      taches.push({ type: 'flashcards', chapitres: tous('flashcards'), minutes: 10, revision: true });
    }
    jours.push({ date: ajouterJours(aujourdHui, N - 1), role: 'veille', taches });
  }

  // Le jour J : seulement relire ses cartes 10 minutes (s'il y en a).
  const cartes = tous('flashcards');
  jours.push({
    date: dateControle,
    role: 'jourJ',
    taches: cartes.length ? [{ type: 'flashcards', chapitres: cartes, minutes: 10, jourJ: true }] : [],
  });

  return jours.map((j) => ({
    ...j,
    minutes: j.taches.reduce((s, t) => s + t.minutes, 0),
    taches: j.taches.map((t, i) => ({ id: `${j.date}#${i}`, ...t })),
  }));
}

// ── Libellés ────────────────────────────────────────────────────────────────

const guillemets = (s) => `«${NBSP}${s}${NBSP}»`;

/** « de maths », « d’anglais », « d’histoire-géo », « de SVT ». */
export function deMatiere(nom) {
  const n = String(nom || '').trim();
  if (!n) return '';
  return /^[aeiouyàâéèêëîïôûüœh]/.test(n) ? `d’${n}` : `de ${n}`;
}

/** Nom court d'une matière pour « Contrôle de … » (minuscules, sauf sigles). */
const NOMS_COURTS = {
  mathematiques: 'maths',
  'physique-chimie': 'physique-chimie',
  'enseignement-scientifique': 'enseignement scientifique',
  si: 'sciences de l’ingénieur',
  sciences: 'sciences',
  svt: 'SVT',
  techno: 'technologie',
  snt: 'SNT',
  nsi: 'NSI',
  anglais: 'anglais',
  espagnol: 'espagnol',
  allemand: 'allemand',
  italien: 'italien',
  francais: 'français',
  'hist-geo': 'histoire-géo',
  philosophie: 'philosophie',
  ses: 'SES',
  hggsp: 'HGGSP',
  arts: 'arts',
  'langues-anciennes': 'langues anciennes',
  'grand-oral': 'grand oral',
};
export function nomCourtMatiere(matiere) {
  return NOMS_COURTS[matiere] ?? String(matiere || '');
}

/**
 * Libellé d'une tâche, à l'impératif. `titres` : { idChapitre: titre }.
 * Ex. « Lis la fiche « Les fractions » », « Fais le QCM de « Les fractions » ».
 */
export function libelleTache(tache, titres = {}) {
  const ids = tache.chapitres || [];
  const un = ids.length === 1;
  const titre = un ? guillemets(titres[ids[0]] ?? ids[0]) : '';
  const n = ids.length;
  switch (tache.type) {
    case 'fiche':
      if (!un) return `Lis les fiches de tes ${n}${NBSP}chapitres (l’essentiel)`;
      return tache.express ? `Lis l’essentiel de la fiche ${titre}` : `Lis la fiche ${titre}`;
    case 'flashcards':
      if (tache.jourJ) return 'Relis tes cartes 10 minutes, pas plus';
      if (!un) return tache.revision ? 'Relis les cartes de tous tes chapitres' : `Apprends les cartes de tes ${n}${NBSP}chapitres`;
      return tache.revision ? `Révise les cartes de ${titre}` : `Apprends les cartes de ${titre}`;
    case 'qcm':
      if (!un) return `Fais le QCM de chacun de tes ${n}${NBSP}chapitres`;
      return tache.revision ? `Refais le QCM de ${titre}` : `Fais le QCM de ${titre}`;
    case 'exercices':
      if (!un) return `Fais 2 exercices de chacun de tes ${n}${NBSP}chapitres`;
      return tache.revision ? `Fais 2 nouveaux exercices de ${titre}` : `Fais 3 exercices de ${titre}`;
    case 'bilan':
      return un ? `Fais le QCM bilan de ${titre}` : `Fais le QCM bilan${NBSP}: tous tes chapitres mélangés`;
    default:
      return 'Tâche de révision';
  }
}

/** Emoji associé à un type de tâche. */
export function iconeTache(type) {
  return { fiche: '📖', flashcards: '🃏', qcm: '✅', exercices: '✏️', bilan: '🏁' }[type] ?? '•';
}

/** « Contrôle de maths », « Contrôle d’anglais ». */
export function titreControle(plan) {
  return `Contrôle ${deMatiere(plan?.matiereNom || nomCourtMatiere(plan?.matiere))}`.trim();
}

// ── Plans enregistrés dans le profil ───────────────────────────────────────

/**
 * Crée un plan à enregistrer dans `profil.controles`.
 * @param {object} o { niveau, matiere, chapitres: [{ id, titre, fiche?, flashcards?, qcm?, exercices? }],
 *   aujourdHui, dateControle, id? }
 */
export function creerPlan({ niveau, matiere, chapitres, aujourdHui, dateControle, id }) {
  const jours = planifier({ chapitres, aujourdHui, dateControle });
  const titres = {};
  for (const c of chapitres) if (c && typeof c === 'object') titres[c.id] = c.titre ?? c.id;
  return {
    id: id ?? `ctrl-${aujourdHui}-${Math.random().toString(36).slice(2, 8)}`,
    niveau: niveau ?? null,
    matiere: matiere ?? null,
    matiereNom: nomCourtMatiere(matiere),
    chapitres: chapitres.map((c) => (typeof c === 'string' ? c : c.id)),
    titres,
    dateControle,
    creeLe: aujourdHui,
    jours,
    faites: {},
  };
}

/** Coche / décoche une tâche (renvoie un nouveau plan). */
export function basculerFait(plan, tacheId) {
  const faites = { ...(plan.faites || {}) };
  if (faites[tacheId]) delete faites[tacheId]; else faites[tacheId] = true;
  return { ...plan, faites };
}

/** Avancement d'un plan : { faites, total }. */
export function avancement(plan) {
  const ids = (plan?.jours || []).flatMap((j) => j.taches.map((t) => t.id));
  return { faites: ids.filter((id) => plan.faites?.[id]).length, total: ids.length };
}

/**
 * Écran et paramètres à ouvrir pour une tâche portant sur UN chapitre.
 * Pour le QCM bilan et les tâches groupées, renvoie l'écran du plan
 * (`Controle`, avec `planId`) : c'est lui qui propose les bons boutons.
 */
export function cibleTache(tache, plan, chapitreId) {
  const id = chapitreId ?? (tache.chapitres?.length === 1 ? tache.chapitres[0] : null);
  const titre = id ? (plan?.titres?.[id] ?? id) : null;
  if (!id || tache.type === 'bilan') return { ecran: 'Controle', params: { planId: plan?.id } };
  const ecran = { fiche: 'Chapitre', flashcards: 'Flashcards', qcm: 'Qcm', exercices: 'Exercices' }[tache.type];
  return { ecran, params: { id, titre } };
}

/**
 * Pour l'accueil : la prochaine tâche NON faite du jour, tous plans confondus
 * (le contrôle le plus proche d'abord), ou null.
 * → { plan, tache, jour, joursRestants, titre, libelle, texte, cible }
 *   ex. texte : « Contrôle de maths dans 3 jours : fais le QCM de « Les fractions ». »
 */
export function tacheDuJour(profil, aujourdHui) {
  const plans = (Array.isArray(profil?.controles) ? profil.controles : [])
    .filter((p) => p && p.dateControle >= aujourdHui && Array.isArray(p.jours))
    .sort((a, b) => String(a.dateControle).localeCompare(String(b.dateControle)));
  for (const plan of plans) {
    const jour = plan.jours.find((j) => j.date === aujourdHui);
    const tache = jour?.taches.find((t) => !plan.faites?.[t.id]);
    if (!tache) continue;
    const titre = `${titreControle(plan)} ${delaiEnLettres(aujourdHui, plan.dateControle)}`;
    const libelle = libelleTache(tache, plan.titres);
    // « Fais … » → « fais … » (on ne touche pas à un sigle comme « QCM »).
    const minuscule = /^[A-ZÀ-Ý][a-zà-ÿ]/.test(libelle) ? libelle.charAt(0).toLowerCase() + libelle.slice(1) : libelle;
    return {
      plan,
      tache,
      jour,
      joursRestants: ecartJours(aujourdHui, plan.dateControle),
      titre,
      libelle,
      texte: `${titre}${NBSP}: ${minuscule}.`,
      cible: cibleTache(tache, plan),
    };
  }
  return null;
}
