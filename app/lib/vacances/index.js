/**
 * Révisions de vacances — programme jour par jour pour revoir l'année passée
 * (logique pure, sans dépendance).
 *
 * L'élève choisit la classe à revoir, la durée (2, 4 ou 6 semaines) et le nombre
 * de jours de travail par semaine (3, 5 ou 7). Chaque séance dure environ
 * 20 minutes :
 *  - un chapitre par jour, dans l'ordre de l'année, en donnant plus de place aux
 *    matières principales (maths et français, puis langue vivante, histoire-géo,
 *    sciences) ; activité : fiche + QCM, ou fiche + 3 exercices (maths, PC) ;
 *  - des séances de « bilan » régulières : un QCM qui mélange les chapitres revus
 *    depuis le bilan précédent ; la dernière séance est un grand bilan.
 *
 * Une séance se coche toute seule quand l'élève fait le QCM du chapitre (ou du
 * bilan), ou réussit 3 exercices du chapitre les jours « exercices » ; elle peut
 * aussi être cochée à la main. Le plan est rangé dans `profil.vacances`.
 *
 * Dates « AAAA-MM-JJ » (calculs en UTC), injectées par l'appelant.
 */

export const DUREES = [2, 4, 6]; // semaines
export const RYTHMES = [3, 5, 7]; // jours de travail par semaine
export const EXOS_PAR_SEANCE = 3;
export const MINUTES = { qcm: 20, exercices: 20, fiche: 15, bilan: 20 };

const NBSP = ' ';
const guillemets = (s) => `«${NBSP}${s}${NBSP}»`;

// Jours de la semaine travaillés (0 = dimanche … 6 = samedi) : lundi-mercredi-vendredi,
// du lundi au vendredi, ou tous les jours.
const JOURS_TRAVAILLES = { 3: [1, 3, 5], 5: [1, 2, 3, 4, 5], 7: [0, 1, 2, 3, 4, 5, 6] };

// Place donnée à chaque matière (plus le poids est grand, plus elle a de séances).
const POIDS = {
  mathematiques: 3,
  francais: 3,
  anglais: 2,
  'hist-geo': 2,
  sciences: 2,
  svt: 2,
  'physique-chimie': 2,
};
export const poidsMatiere = (matiere) => POIDS[matiere] ?? 1;

/** Matières principales, sélectionnées par défaut. */
export const MATIERES_PRINCIPALES = Object.keys(POIDS);

// ── Niveaux ─────────────────────────────────────────────────────────────────

const PRECEDENT = {
  ce1: 'cp',
  ce2: 'ce1',
  cm1: 'ce2',
  cm2: 'cm1',
  sixieme: 'cm2',
  cinquieme: 'sixieme',
  quatrieme: 'cinquieme',
  troisieme: 'quatrieme',
  seconde: 'troisieme',
  premiere: 'seconde',
  'premiere-techno': 'seconde',
  terminale: 'premiere',
  'terminale-techno': 'premiere-techno',
};

/** Classe d'avant (« Je passe en 4e » → la 5e). null pour le CP ou un niveau inconnu. */
export function niveauPrecedent(niveau) {
  return PRECEDENT[niveau] ?? null;
}

// ── Dates ───────────────────────────────────────────────────────────────────

const pad2 = (x) => String(x).padStart(2, '0');
function ajouterJours(date, nb) {
  const [a, m, j] = String(date).split('-').map(Number);
  const d = new Date(Date.UTC(a, (m || 1) - 1, j || 1));
  d.setUTCDate(d.getUTCDate() + nb);
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

/**
 * Dates des séances : [{ date, semaine (1…), rang (0…) }]. On part de `debut` et on
 * prend les jours travaillés du rythme choisi ; une « semaine » du programme
 * regroupe `parSemaine` séances.
 */
export function datesSeances(debut, semaines, parSemaine) {
  const jours = JOURS_TRAVAILLES[parSemaine];
  if (!jours) throw new Error('Rythme impossible : 3, 5 ou 7 jours par semaine.');
  const res = [];
  const nb = semaines * parSemaine;
  for (let k = 0; res.length < nb && k < nb * 3; k += 1) {
    const date = ajouterJours(debut, k);
    const [a, m, j] = date.split('-').map(Number);
    if (!jours.includes(new Date(Date.UTC(a, m - 1, j)).getUTCDay())) continue;
    const i = res.length;
    res.push({ date, semaine: Math.floor(i / parSemaine) + 1, rang: i % parSemaine });
  }
  return res;
}

/** Séance de bilan : la dernière de la semaine (une semaine sur deux à 3 jours/semaine), et la toute dernière. */
export function estSeanceBilan({ semaine, rang }, semaines, parSemaine) {
  if (rang !== parSemaine - 1) return false;
  if (semaine === semaines) return true;
  return parSemaine >= 5 || semaine % 2 === 0;
}

// ── Choix des chapitres ─────────────────────────────────────────────────────

/**
 * Répartit `nb` séances entre des groupes { cle, poids, max } au prorata des poids,
 * sans dépasser `max` (méthode des plus forts restes). → { cle: nombre }
 */
export function repartir(nb, groupes) {
  const res = Object.fromEntries(groupes.map((g) => [g.cle, 0]));
  let restant = Math.min(nb, groupes.reduce((s, g) => s + g.max, 0));
  let actifs = groupes.filter((g) => g.max > 0);
  while (restant > 0 && actifs.length) {
    const somme = actifs.reduce((s, g) => s + g.poids, 0);
    const parts = actifs.map((g) => {
      const ideal = (restant * g.poids) / somme;
      const ent = Math.min(Math.floor(ideal), g.max - res[g.cle]);
      return { g, ent, reste: ideal - ent };
    });
    let donne = 0;
    for (const p of parts) { res[p.g.cle] += p.ent; donne += p.ent; }
    restant -= donne;
    // Plus rien d'entier à donner : une séance de plus aux plus forts restes
    // (à égalité : le plus grand poids, puis l'ordre d'entrée).
    if (donne === 0) {
      const tri = parts
        .filter((p) => res[p.g.cle] < p.g.max)
        .sort((x, y) => y.reste - x.reste || y.g.poids - x.g.poids);
      for (let i = 0; i < Math.min(restant, tri.length); i += 1) res[tri[i].g.cle] += 1;
      restant -= Math.min(restant, tri.length);
    }
    actifs = actifs.filter((g) => res[g.cle] < g.max);
  }
  return res;
}

/** `k` éléments répartis régulièrement dans une liste ordonnée (début, milieu, fin d'année). */
export function echantillonner(liste, k) {
  const n = liste.length;
  if (k >= n) return [...liste];
  if (k <= 0) return [];
  const res = [];
  for (let i = 0; i < k; i += 1) res.push(liste[Math.min(n - 1, Math.floor(((i + 0.5) * n) / k))]);
  return res;
}

/**
 * Ordre des séances : tourniquet pondéré lissé (les matières s'alternent et
 * chacune avance dans l'ordre de l'année). `comptes` : { cle: nombre }.
 */
function entrelacer(comptes) {
  const cles = Object.keys(comptes).filter((c) => comptes[c] > 0);
  const total = cles.reduce((s, c) => s + comptes[c], 0);
  const courant = Object.fromEntries(cles.map((c) => [c, 0]));
  const reste = { ...comptes };
  const ordre = [];
  for (let i = 0; i < total; i += 1) {
    let meilleur = null;
    for (const c of cles) {
      if (reste[c] <= 0) continue;
      courant[c] += comptes[c];
      if (meilleur === null || courant[c] > courant[meilleur]) meilleur = c;
    }
    courant[meilleur] -= total;
    reste[meilleur] -= 1;
    ordre.push(meilleur);
  }
  return ordre;
}

/** Activité d'un chapitre : 'qcm' (fiche + QCM), 'exercices' (fiche + 3 exercices) ou 'fiche'. */
function activiteDe(chap, occurrence) {
  const calcul = chap.matiere === 'mathematiques' || chap.matiere === 'physique-chimie';
  if (chap.exercices && (!chap.qcm || (calcul && occurrence % 2 === 1))) return 'exercices';
  if (chap.qcm) return 'qcm';
  return 'fiche';
}

/**
 * Choisit et ordonne les chapitres de `nb` séances.
 * @param {Array<{id, titre, parcours, matiere, qcm?, exercices?}>} chapitres dans l'ordre de l'année
 * @returns {Array<{chapitre, activite, revision}>}
 */
export function choisirChapitres(chapitres, nb) {
  const parParcours = new Map();
  for (const c of chapitres || []) {
    if (!c || !c.id) continue;
    const cle = c.parcours || c.matiere || '?';
    if (!parParcours.has(cle)) parParcours.set(cle, []);
    parParcours.get(cle).push({ qcm: true, exercices: true, ...c });
  }
  const groupes = [...parParcours.entries()].map(([cle, liste]) => ({ cle, poids: poidsMatiere(liste[0].matiere), max: liste.length }));
  if (!groupes.length || nb <= 0) return [];
  const comptes = repartir(nb, groupes);
  const choisis = Object.fromEntries(groupes.map((g) => [g.cle, echantillonner(parParcours.get(g.cle), comptes[g.cle])]));
  const vus = Object.fromEntries(groupes.map((g) => [g.cle, 0]));
  const seances = entrelacer(comptes).map((cle) => {
    const chap = choisis[cle][vus[cle]];
    const occ = vus[cle];
    vus[cle] += 1;
    return { chapitre: chap, activite: activiteDe(chap, occ), revision: false };
  });
  // Pas assez de chapitres : on revient sur les premiers (révision, autre activité si possible).
  const base = [...seances];
  for (let i = 0; seances.length < nb && base.length; i += 1) {
    const s = base[i % base.length];
    const c = s.chapitre;
    const autre = s.activite === 'qcm' && c.exercices ? 'exercices' : (s.activite === 'exercices' && c.qcm ? 'qcm' : s.activite);
    seances.push({ chapitre: c, activite: autre, revision: true });
  }
  return seances;
}

// ── Plan ────────────────────────────────────────────────────────────────────

/**
 * Crée le plan à ranger dans `profil.vacances`.
 * @param {object} o { niveau, semaines, joursParSemaine, chapitres (cf. choisirChapitres), debut, id? }
 */
export function creerPlanVacances({ niveau, semaines, joursParSemaine, chapitres, debut, id }) {
  if (!DUREES.includes(semaines)) throw new Error('Durée impossible : 2, 4 ou 6 semaines.');
  if (!RYTHMES.includes(joursParSemaine)) throw new Error('Rythme impossible : 3, 5 ou 7 jours par semaine.');
  const dates = datesSeances(debut, semaines, joursParSemaine);
  const bilans = dates.map((d) => estSeanceBilan(d, semaines, joursParSemaine));
  const nbChap = bilans.filter((b) => !b).length;
  const choix = choisirChapitres(chapitres, nbChap);
  if (!choix.length) throw new Error('Choisis au moins une matière.');

  const seances = [];
  let k = 0;
  let depuisBilan = [];
  let numBilan = 0;
  const tous = [];
  dates.forEach((d, i) => {
    const sid = `s${i + 1}`;
    if (bilans[i]) {
      const final = i === dates.length - 1;
      numBilan += 1;
      const ids = [...new Set(final ? tous : depuisBilan)];
      seances.push({
        id: sid,
        date: d.date,
        semaine: d.semaine,
        type: 'bilan',
        final,
        chapitres: ids,
        titreBilan: final ? 'Grand bilan de vacances' : `Bilan de vacances n°${NBSP}${numBilan}`,
        minutes: MINUTES.bilan,
      });
      depuisBilan = [];
      return;
    }
    const s = choix[k % choix.length];
    k += 1;
    const c = s.chapitre;
    depuisBilan.push(c.id);
    tous.push(c.id);
    seances.push({
      id: sid,
      date: d.date,
      semaine: d.semaine,
      type: 'chapitre',
      chapitreId: c.id,
      titre: c.titre ?? c.id,
      matiere: c.matiere ?? null,
      parcours: c.parcours ?? null,
      activite: s.activite,
      ...(s.revision ? { revision: true } : {}),
      minutes: MINUTES[s.activite],
    });
  });

  return {
    id: id ?? `vac-${Date.now().toString(36)}`,
    niveau: niveau ?? null,
    semaines,
    joursParSemaine,
    debut,
    creeLe: debut,
    seances,
    faites: {},
    progres: {},
  };
}

/** Un plan utilisable (ni absent, ni abandonné). */
export function planActif(vacances) {
  return vacances && !vacances.abandonne && Array.isArray(vacances.seances) ? vacances : null;
}

/** Marque le plan comme abandonné (gardé pour que la suppression se propage entre appareils). */
export function abandonner(plan) {
  return plan ? { id: plan.id, creeLe: plan.creeLe, abandonne: true } : plan;
}

/** Coche / décoche une séance. */
export function basculerSeance(plan, seanceId) {
  const faites = { ...(plan.faites || {}) };
  if (faites[seanceId]) delete faites[seanceId]; else faites[seanceId] = true;
  return { ...plan, faites };
}

/**
 * Coche automatiquement d'après une activité de l'élève.
 * @param {object} plan
 * @param {{type: 'qcm'|'exo', chapitreId?, titre?}} activite
 * @param {string} aujourdHui
 * @returns {object} le plan modifié, ou le MÊME objet si rien ne change
 */
export function noterActiviteVacances(plan, activite, aujourdHui) {
  if (!planActif(plan) || !activite) return plan;
  const faites = plan.faites || {};
  const libres = plan.seances.filter((s) => !faites[s.id]);
  const choisir = (liste) => liste.find((s) => s.date <= aujourdHui) ?? liste[0] ?? null;

  if (activite.type === 'qcm') {
    let s = null;
    if (activite.chapitreId) s = choisir(libres.filter((x) => x.type === 'chapitre' && x.chapitreId === activite.chapitreId));
    else if (activite.titre) s = libres.find((x) => x.type === 'bilan' && x.titreBilan === activite.titre) ?? null;
    if (!s) return plan;
    return { ...plan, faites: { ...faites, [s.id]: true } };
  }
  if (activite.type === 'exo' && activite.chapitreId) {
    const s = choisir(libres.filter((x) => x.type === 'chapitre' && x.activite === 'exercices' && x.chapitreId === activite.chapitreId));
    if (!s) return plan;
    const n = ((plan.progres || {})[s.id] || 0) + 1;
    const suivant = { ...plan, progres: { ...(plan.progres || {}), [s.id]: n } };
    if (n >= EXOS_PAR_SEANCE) suivant.faites = { ...faites, [s.id]: true };
    return suivant;
  }
  return plan;
}

/** Avancement : { faites, total }. */
export function avancement(plan) {
  const seances = planActif(plan)?.seances ?? [];
  return { faites: seances.filter((s) => plan.faites?.[s.id]).length, total: seances.length };
}

/**
 * Où en est l'élève : séance à faire (la plus ancienne non faite jusqu'à aujourd'hui),
 * séance du jour, retard, prochaine séance future, plan terminé ?
 */
export function etatDuJour(plan, aujourdHui) {
  const p = planActif(plan);
  if (!p) return null;
  const faites = p.faites || {};
  const passees = p.seances.filter((s) => s.date <= aujourdHui);
  const nonFaites = passees.filter((s) => !faites[s.id]);
  const duJour = p.seances.find((s) => s.date === aujourdHui) ?? null;
  const a = avancement(p);
  const fin = p.seances[p.seances.length - 1]?.date;
  return {
    aFaire: nonFaites.find((s) => s.date === aujourdHui) ?? nonFaites[0] ?? null,
    duJour,
    duJourFaite: duJour ? !!faites[duJour.id] : false,
    retard: nonFaites.filter((s) => s.date < aujourdHui).length,
    prochaine: p.seances.find((s) => s.date > aujourdHui && !faites[s.id]) ?? null,
    pasCommence: p.seances[0] && p.seances[0].date > aujourdHui,
    termine: a.faites === a.total || (fin != null && fin < aujourdHui && nonFaites.length === 0),
    fini: fin != null && fin < aujourdHui,
    ...a,
  };
}

// ── Libellés ────────────────────────────────────────────────────────────────

/** Libellé d'une séance, à l'impératif. */
export function libelleSeance(s) {
  if (!s) return '';
  if (s.type === 'bilan') {
    return s.final ? `Grand bilan${NBSP}: un QCM qui mélange toute ta révision` : `QCM bilan${NBSP}: les derniers chapitres mélangés`;
  }
  const t = guillemets(s.titre);
  if (s.activite === 'exercices') {
    return s.revision ? `Refais ${EXOS_PAR_SEANCE}${NBSP}exercices de ${t}` : `Relis la fiche ${t}, puis fais ${EXOS_PAR_SEANCE}${NBSP}exercices`;
  }
  if (s.activite === 'qcm') return s.revision ? `Refais le QCM de ${t}` : `Lis la fiche ${t}, puis fais son QCM`;
  return `Lis la fiche ${t}, puis révise ses cartes`;
}

/** Emoji d'une séance. */
export function iconeSeance(s) {
  if (!s) return '•';
  if (s.type === 'bilan') return s.final ? '🏆' : '🏁';
  return { qcm: '📖', exercices: '✏️', fiche: '🃏' }[s.activite] ?? '•';
}

// ── Fusion entre appareils ──────────────────────────────────────────────────

/** Même plan → séances cochées réunies, progrès max, abandon propagé ; sinon le plus récent. */
export function fusionnerVacances(a, b) {
  if (!a || typeof a !== 'object') return b ?? a;
  if (!b || typeof b !== 'object') return a;
  if (a.id !== b.id) {
    const ka = `${a.creeLe || ''}|${a.id || ''}`;
    const kb = `${b.creeLe || ''}|${b.id || ''}`;
    return ka >= kb ? a : b;
  }
  if (a.abandonne || b.abandonne) return a.abandonne ? a : b;
  const progres = { ...(a.progres || {}) };
  for (const [k, v] of Object.entries(b.progres || {})) progres[k] = Math.max(progres[k] || 0, Number(v) || 0);
  return { ...a, ...b, faites: { ...(a.faites || {}), ...(b.faites || {}) }, progres };
}
