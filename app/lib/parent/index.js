/**
 * Espace parent — résumé lisible de la progression d'un enfant.
 *
 * Entrée : le profil synchronisé dans Supabase (colonne `data` de `profils`,
 * ou le sous-ensemble renvoyé par la fonction `suivi_enfant`). Sortie : des
 * indicateurs prêts à afficher (XP, niveau, série, taux de réussite, matières,
 * activité des 7 derniers jours…). Module pur et testable : aucune dépendance
 * à React ni au réseau ; la date du jour est injectée.
 *
 * Limite connue : l'historique ne garde que les 30 dernières sessions et ne
 * mesure pas leur durée. L'activité de la semaine est donc comptée en sessions
 * et en XP (pas en minutes), et marquée « partielle » si l'historique est plein.
 */

import { niveauPourXp } from '../progression.js';
import { serieAffichee } from '../serie.js';
import { titreControle } from '../controle/index.js';

const TAILLE_HISTORIQUE = 30; // MAX_HISTORIQUE de src/progression/Contexte.js
const SEUIL_MAITRISE = 0.8;
const SEUIL_A_REVOIR = 0.5;
const pad2 = (n) => String(n).padStart(2, '0');

/** Nombre fini ≥ 0, sinon 0. */
function entier(x) {
  const n = Number(x);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

/** Recule de n jours une date « AAAA-MM-JJ » (calcul en UTC, sans décalage). */
export function reculerJour(jour, n) {
  const [a, m, j] = String(jour).split('-').map(Number);
  const d = new Date(Date.UTC(a, (m || 1) - 1, j || 1));
  d.setUTCDate(d.getUTCDate() - n);
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

/** Jour local « AAAA-MM-JJ » d'une date ISO (null si illisible). */
export function jourLocal(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/**
 * Activité des `nbJours` derniers jours (aujourd'hui inclus), du plus ancien au plus récent.
 * @returns {{jours: {date, sessions, xp}[], sessions, xp, joursActifs, partielle}}
 */
export function activiteRecente(historique, aujourdhui, nbJours = 7, jourDe = jourLocal) {
  const liste = Array.isArray(historique) ? historique : [];
  const parJour = {};
  for (const h of liste) {
    const d = jourDe(h && h.date);
    if (!d) continue;
    const e = (parJour[d] = parJour[d] || { sessions: 0, xp: 0 });
    e.sessions += 1;
    e.xp += entier(h.points);
  }
  const jours = [];
  for (let i = nbJours - 1; i >= 0; i -= 1) {
    const date = reculerJour(aujourdhui, i);
    jours.push({ date, sessions: parJour[date]?.sessions || 0, xp: parJour[date]?.xp || 0 });
  }
  const debut = jours[0].date;
  // Historique plein et dont la plus ancienne session est encore dans la période :
  // des sessions plus anciennes de la semaine ont pu être effacées.
  const plusAncien = liste.length ? jourDe(liste[liste.length - 1]?.date) : null;
  const partielle = liste.length >= TAILLE_HISTORIQUE && !!plusAncien && plusAncien >= debut;
  return {
    jours,
    sessions: jours.reduce((s, j) => s + j.sessions, 0),
    xp: jours.reduce((s, j) => s + j.xp, 0),
    joursActifs: jours.filter((j) => j.sessions > 0).length,
    partielle,
  };
}

/**
 * Matières les plus travaillées, d'après les XP par matière, les sessions de
 * l'historique et les chapitres travaillés (si `matiereDeChapitre` est fourni).
 * @returns {{matiere, libelle, xp, sessions, chapitres}[]} trié du plus au moins travaillé
 */
export function matieresTravaillees(data, { matiereDeChapitre = null, libelleMatiere = (m) => m } = {}) {
  const parMat = {};
  const prendre = (m) => (parMat[m] = parMat[m] || { matiere: m, xp: 0, sessions: 0, chapitres: 0 });

  for (const [m, xp] of Object.entries(data?.xpParMatiere || {})) {
    if (m && entier(xp) > 0) prendre(m).xp += entier(xp);
  }
  for (const h of Array.isArray(data?.historique) ? data.historique : []) {
    if (h && h.matiere) prendre(h.matiere).sessions += 1;
  }
  if (typeof matiereDeChapitre === 'function') {
    for (const id of Object.keys(data?.chapitres || {})) {
      const m = matiereDeChapitre(id);
      if (m) prendre(m).chapitres += 1;
    }
  }
  return Object.values(parMat)
    .map((e) => ({ ...e, libelle: libelleMatiere(e.matiere) || e.matiere }))
    .sort((a, b) => b.xp - a.xp || b.chapitres - a.chapitres || b.sessions - a.sessions
      || a.libelle.localeCompare(b.libelle, 'fr'));
}

/**
 * Résumé complet pour la fiche de suivi du parent.
 * @param {object|null} data  profil de l'enfant
 * @param {{aujourdhui: string, matiereDeChapitre?, libelleMatiere?, jourDe?, nbRecents?}} options
 */
export function resumeEnfant(data, options = {}) {
  const {
    aujourdhui,
    matiereDeChapitre = null,
    libelleMatiere = (m) => m,
    jourDe = jourLocal,
    nbRecents = 5,
  } = options;
  const p = data && typeof data === 'object' ? data : {};
  const historique = Array.isArray(p.historique) ? p.historique.filter((h) => h && typeof h === 'object') : [];

  const xp = entier(p.xp);
  const niv = niveauPourXp(xp);

  const reponsesTotal = entier(p.reponsesTotal);
  const reponsesJustes = Math.min(entier(p.reponsesJustes), reponsesTotal);

  const chapitres = Object.entries(p.chapitres || {})
    .filter(([, c]) => c && typeof c === 'object')
    .map(([id, c]) => ({
      id,
      titre: c.titre || id,
      score: Math.max(0, Math.min(1, Number(c.meilleurScore) || 0)),
      tentatives: entier(c.tentatives),
    }));

  const recents = historique.slice(0, nbRecents).map((h) => ({
    date: h.date || null,
    jour: jourDe(h.date),
    titre: h.titre || 'Session',
    justes: entier(h.justes),
    total: entier(h.total),
    points: entier(h.points),
    matiere: h.matiere || null,
    libelleMatiere: h.matiere ? (libelleMatiere(h.matiere) || h.matiere) : null,
  }));

  const derniereDate = historique.length ? historique[0].date || null : null;
  const dernierJour = jourDe(derniereDate);
  let joursDepuis = null;
  if (dernierJour && aujourdhui) {
    joursDepuis = Math.round((Date.parse(`${aujourdhui}T00:00:00Z`) - Date.parse(`${dernierJour}T00:00:00Z`)) / 86400000);
    if (joursDepuis < 0) joursDepuis = 0;
  }

  const objectif = entier(p.objectifQuotidien) || 50;
  const xpAujourdhui = p.jourCourant && p.jourCourant === aujourdhui ? entier(p.xpDuJour) : 0;

  return {
    prenom: typeof p.prenom === 'string' && p.prenom.trim() ? p.prenom.trim() : null,
    vide: xp === 0 && historique.length === 0 && chapitres.length === 0,
    xp,
    niveau: niv.niveau,
    rang: niv.titre,
    progressionNiveau: niv.progression,
    xpRestant: niv.xpRestant,
    serieJours: aujourdhui ? serieAffichee(p.dernierJourValide || null, entier(p.serieJours), aujourdhui) : entier(p.serieJours),
    meilleureSerieJours: entier(p.meilleureSerieJours),
    objectifQuotidien: objectif,
    xpAujourdhui,
    objectifAtteint: xpAujourdhui >= objectif,
    qcmTermines: entier(p.qcmTermines),
    sansFautes: entier(p.sansFautes),
    reponsesJustes,
    reponsesTotal,
    tauxReussite: reponsesTotal > 0 ? reponsesJustes / reponsesTotal : null,
    flashcardsRevues: entier(p.flashcardsRevues),
    enigmesResolues: entier(p.enigmesResolues),
    exercicesReussis: Object.values(p.exosReussis && typeof p.exosReussis === 'object' ? p.exosReussis : {})
      .reduce((n, liste) => n + (Array.isArray(liste) ? liste.length : 0), 0),
    chapitresTravailles: chapitres.length,
    chapitresMaitrises: chapitres.filter((c) => c.score >= SEUIL_MAITRISE).length,
    aRevoir: chapitres
      .filter((c) => c.score < SEUIL_A_REVOIR)
      .sort((a, b) => a.score - b.score)
      .slice(0, 5),
    matieres: matieresTravaillees(p, { matiereDeChapitre, libelleMatiere }).slice(0, 5),
    recents,
    derniereActivite: derniereDate,
    joursDepuisDerniereActivite: joursDepuis,
    semaine: aujourdhui ? activiteRecente(historique, aujourdhui, 7, jourDe) : null,
  };
}

/** Pourcentage arrondi (« 83 % »), ou « — » si pas de donnée. */
export function pourcentage(x) {
  if (x == null || !Number.isFinite(x)) return '—';
  return `${Math.round(x * 100)}\u00a0%`;
}

/** Texte de la dernière activité : « aujourd’hui », « hier », « il y a 3 jours »… */
export function texteDerniereActivite(joursDepuis) {
  if (joursDepuis == null) return 'aucune activité enregistrée';
  if (joursDepuis === 0) return 'aujourd’hui';
  if (joursDepuis === 1) return 'hier';
  return `il y a ${joursDepuis} jours`;
}

// ═══════════════════════════════════════════════════════════════════════════
// Bilan de la semaine (lisible en 30 secondes)
// ═══════════════════════════════════════════════════════════════════════════
//
// « Cette semaine » = les 7 derniers jours, aujourd'hui inclus ; « la semaine
// précédente » = les 7 jours d'avant. Les rubriques carnet / examens / contrôles
// ne sont remplies que si la fonction SQL les renvoie (espace_parent_v2.sql) :
// sinon elles valent null et l'écran les masque.

const MOIS_COURTS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août',
  'septembre', 'octobre', 'novembre', 'décembre'];
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const estJour = (x) => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x);
const ecart = (a, b) => Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86400000);

/** « 18 oct. » */
export function jourCourt(jour) {
  if (!estJour(jour)) return '';
  const [, m, j] = jour.split('-').map(Number);
  return `${j === 1 ? '1er' : j} ${MOIS_COURTS[m - 1]}`;
}
/** « jeudi 22 octobre » */
export function jourLong(jour) {
  if (!estJour(jour)) return '';
  const [a, m, j] = jour.split('-').map(Number);
  const js = new Date(Date.UTC(a, m - 1, j)).getUTCDay();
  return `${JOURS[js]} ${j === 1 ? '1er' : j} ${MOIS[m - 1]}`;
}
/** « du 12 au 18 octobre », « du 28 septembre au 4 octobre » */
export function periodeEnLettres(debut, fin) {
  if (!estJour(debut) || !estJour(fin)) return '';
  const [, m1, j1] = debut.split('-').map(Number);
  const [, m2, j2] = fin.split('-').map(Number);
  const p = (j) => (j === 1 ? '1er' : j);
  return m1 === m2 ? `du ${p(j1)} au ${p(j2)} ${MOIS[m2 - 1]}` : `du ${p(j1)} ${MOIS[m1 - 1]} au ${p(j2)} ${MOIS[m2 - 1]}`;
}
/** Note sur 20 : « 12,5 » (arrondi au demi-point). */
export function noteEnTexte(x) {
  const n = Math.round((Number(x) || 0) * 2) / 2;
  return Number.isInteger(n) ? String(n) : String(n).replace('.', ',');
}
/** Délai jusqu'à une date : « aujourd’hui », « demain », « dans 3 jours ». */
function delai(aujourdhui, jour) {
  const n = ecart(aujourdhui, jour);
  if (n === 0) return 'aujourd’hui';
  if (n === 1) return 'demain';
  return `dans ${n} jours`;
}
const plur = (n, mot, motPluriel = `${mot}s`) => `${n} ${n > 1 ? motPluriel : mot}`;

/** Titre « de chapitre » d'une session de l'historique (« Cartes — X » → « X »). */
function titreSession(titre) {
  return String(titre || '').replace(/^Cartes\s+—\s+/, '').trim();
}

/**
 * Chapitres travaillés dans une période, d'après l'historique : identifiant du
 * chapitre s'il est noté, sinon son titre (anciennes sessions). Les examens,
 * énigmes et révisions mélangées ne comptent pas comme un chapitre.
 * @returns {{cle, titre, matiere}[]}
 */
export function chapitresDeLaPeriode(historique, debut, fin, { jourDe = jourLocal, titreChapitre = null, estTitreDeChapitre = null } = {}) {
  const vus = new Map();
  for (const h of Array.isArray(historique) ? historique : []) {
    if (!h || typeof h !== 'object') continue;
    const j = jourDe(h.date);
    if (!j || j < debut || j > fin) continue;
    const titre = titreSession(h.titre);
    let cle = null;
    if (h.chapitreId) cle = `id:${h.chapitreId}`;
    else if (titre && (typeof estTitreDeChapitre === 'function'
      ? estTitreDeChapitre(titre)
      : h.matiere && !/^(Examen|Révision|Énigme|Cartes de révision$)/.test(titre))) cle = `t:${titre}`;
    if (!cle || vus.has(cle)) continue;
    const t = (h.chapitreId && typeof titreChapitre === 'function' && titreChapitre(h.chapitreId)) || titre || h.chapitreId;
    // Même chapitre noté une fois avec son identifiant, une fois par son seul titre : compté une fois.
    if ([...vus.values()].some((c) => c.titre === t)) continue;
    vus.set(cle, { cle, titre: t, matiere: h.matiere || null });
  }
  return [...vus.values()];
}

/** Avancement d'un plan de contrôle ; `faites` peut être un objet ou une liste. */
function avancementPlan(plan) {
  const ids = (Array.isArray(plan?.jours) ? plan.jours : [])
    .flatMap((j) => (Array.isArray(j?.taches) ? j.taches : []).map((t) => t && t.id))
    .filter((id) => id != null);
  const f = plan?.faites;
  const fait = (id) => (Array.isArray(f) ? f.includes(id) : !!(f && typeof f === 'object' && f[id]));
  const faites = ids.filter(fait).length;
  return { faites, total: ids.length, ratio: ids.length ? faites / ids.length : null };
}

/**
 * Bilan de la semaine pour le parent.
 * @param {object|null} data  ce que renvoie suivi_enfant (v1 ou v2)
 * @param {{aujourdhui: string, jourDe?, titreChapitre?, libelleMatiere?, estTitreDeChapitre?, prenom?}} options
 */
export function bilanSemaine(data, options = {}) {
  const {
    aujourdhui,
    jourDe = jourLocal,
    titreChapitre = null,
    libelleMatiere = (m) => m,
    estTitreDeChapitre = null,
  } = options;
  const p = data && typeof data === 'object' ? data : {};
  const historique = Array.isArray(p.historique) ? p.historique.filter((h) => h && typeof h === 'object') : [];
  const fin = aujourdhui;
  const debut = reculerJour(fin, 6);
  const finPrec = reculerJour(fin, 7);
  const debutPrec = reculerJour(fin, 13);
  const nomChap = (id, secours) => (typeof titreChapitre === 'function' && titreChapitre(id)) || secours || id;
  const nomMat = (m) => (m ? (libelleMatiere(m) || m) : null);

  // Activité : cette semaine et la précédente.
  const a14 = activiteRecente(historique, fin, 14, jourDe);
  const somme = (jours) => ({
    sessions: jours.reduce((s, j) => s + j.sessions, 0),
    xp: jours.reduce((s, j) => s + j.xp, 0),
    joursActifs: jours.filter((j) => j.sessions > 0).length,
  });
  const cette = somme(a14.jours.slice(7));
  const prec = somme(a14.jours.slice(0, 7));
  // L'historique ne garde que 30 sessions : la semaine précédente peut être incomplète.
  const plusAncien = historique.length ? jourDe(historique[historique.length - 1]?.date) : null;
  const plein = historique.length >= TAILLE_HISTORIQUE;
  const activite = {
    cetteSemaine: cette,
    semainePrecedente: prec,
    partielle: plein && !!plusAncien && plusAncien >= debut,
    precedentePartielle: plein && !!plusAncien && plusAncien >= debutPrec,
  };

  const optsChap = { jourDe, titreChapitre, estTitreDeChapitre };
  const chapitres = {
    cetteSemaine: chapitresDeLaPeriode(historique, debut, fin, optsChap),
    semainePrecedente: chapitresDeLaPeriode(historique, debutPrec, finPrec, optsChap).length,
  };

  // Carnet d'erreurs (v2).
  let carnet = null;
  if (Array.isArray(p.carnet)) {
    const tout = p.carnet.filter((e) => e && typeof e === 'object');
    const dus = tout.filter((e) => estJour(e.prochaine) && e.prochaine <= fin);
    const journal = p.carnetMaitriseesJours && typeof p.carnetMaitriseesJours === 'object' && !Array.isArray(p.carnetMaitriseesJours)
      ? p.carnetMaitriseesJours : null;
    const parChap = new Map();
    for (const e of dus) {
      const k = e.chapitreId || e.titre || '—';
      const x = parChap.get(k) || { cle: k, titre: e.chapitreId ? nomChap(e.chapitreId, e.titre) : (e.titre || 'Autres questions'), nombre: 0 };
      x.nombre += 1;
      parChap.set(k, x);
    }
    carnet = {
      total: tout.length,
      aRevoirAujourdhui: dus.length,
      plusTard: tout.length - dus.length,
      ajoutesCetteSemaine: tout.filter((e) => estJour(e.ajoute) && e.ajoute >= debut && e.ajoute <= fin).length,
      // null si l'appli de l'enfant ne tient pas encore le journal daté.
      maitriseesCetteSemaine: journal
        ? Object.entries(journal).filter(([j]) => j >= debut && j <= fin).reduce((s, [, v]) => s + entier(v), 0)
        : null,
      maitriseesTotal: entier(p.carnetMaitrisees),
      chapitresARevoir: [...parChap.values()].sort((x, y) => y.nombre - x.nombre || String(x.titre).localeCompare(String(y.titre), 'fr')).slice(0, 3),
    };
  }

  // Examens sur mesure (v2) : les 3 plus récents.
  let examens = null;
  if (Array.isArray(p.examens)) {
    examens = p.examens
      .filter((x) => x && typeof x === 'object' && estJour(x.date) && Number.isFinite(Number(x.note20)))
      .sort((x, y) => y.date.localeCompare(x.date))
      .slice(0, 3)
      .map((x) => ({
        id: x.id || x.date,
        date: x.date,
        cetteSemaine: x.date >= debut && x.date <= fin,
        matiere: x.matiere || null,
        libelleMatiere: nomMat(x.matiere),
        note20: Math.max(0, Math.min(20, Number(x.note20))),
        note: noteEnTexte(Math.max(0, Math.min(20, Number(x.note20)))),
        nbChapitres: Array.isArray(x.chapitres) ? x.chapitres.length : 0,
        // Ancien enregistrement sans « aRevoir » → null (inconnu), sinon la liste.
        aRevoir: Array.isArray(x.aRevoir) ? x.aRevoir.map((id) => ({ id, titre: nomChap(id) })) : null,
      }));
  }

  // Contrôles à venir (v2).
  let controles = null;
  if (Array.isArray(p.controles)) {
    controles = p.controles
      .filter((c) => c && typeof c === 'object' && estJour(c.dateControle) && c.dateControle >= fin)
      .sort((x, y) => x.dateControle.localeCompare(y.dateControle))
      .map((c) => {
        const av = avancementPlan(c);
        const ids = Array.isArray(c.chapitres) ? c.chapitres : [];
        return {
          id: c.id || c.dateControle,
          titre: titreControle(c),
          dateControle: c.dateControle,
          joursRestants: ecart(fin, c.dateControle),
          quand: delai(fin, c.dateControle),
          matiere: c.matiere || null,
          libelleMatiere: nomMat(c.matiere) || c.matiereNom || null,
          chapitres: ids.map((id) => nomChap(id, c.titres && c.titres[id])),
          ...av,
        };
      });
  }

  const resume = resumeEnfant(p, { aujourdhui, jourDe, libelleMatiere });
  const bilan = {
    version: entier(p.version) || 1,
    periode: { debut, fin, debutPrecedente: debutPrec, finPrecedente: finPrec, texte: periodeEnLettres(debut, fin) },
    prenom: resume.prenom,
    vide: resume.vide,
    joursDepuisDerniereActivite: resume.joursDepuisDerniereActivite,
    serieJours: resume.serieJours,
    activite,
    chapitres,
    carnet,
    examens,
    controles,
  };
  bilan.conseils = conseilsSemaine(bilan);
  return bilan;
}

/**
 * 2 ou 3 conseils simples et bienveillants, choisis par des règles.
 * Toujours formulés comme une proposition, jamais comme un reproche ; un
 * encouragement est gardé s'il y a de quoi féliciter.
 * @returns {{icone, ton: 'idee'|'bravo', texte}[]}
 */
export function conseilsSemaine(bilan, { max = 3 } = {}) {
  const idees = [];
  const bravos = [];
  const b = bilan || {};
  const a = b.activite?.cetteSemaine || { sessions: 0, joursActifs: 0, xp: 0 };
  const ap = b.activite?.semainePrecedente || { sessions: 0 };

  // Contrôle proche.
  for (const c of b.controles || []) {
    if (c.joursRestants > 7 || c.total === 0) continue;
    const titre = `${c.titre} ${c.quand}`;
    const pct = Math.round((c.ratio || 0) * 100);
    if (c.joursRestants <= 3 && (c.ratio || 0) < 0.5) {
      idees.push({ icone: '📅', ton: 'idee', poids: 10, texte: `${titre} : le plan de révision est fait à ${pct} %. Une courte séance de 15 minutes ce soir, en suivant la tâche du jour, l’aidera beaucoup.` });
    } else if ((c.ratio || 0) >= 0.5) {
      bravos.push({ icone: '📅', ton: 'bravo', poids: 6, texte: `${titre} : le plan de révision avance bien (${pct} % fait).` });
    }
    break; // seulement le plus proche
  }

  // Pause dans les révisions.
  if (b.vide) {
    idees.push({ icone: '🌱', ton: 'idee', poids: 9, texte: 'Pour bien démarrer, proposez 10 minutes par jour : lire une fiche, puis faire son QCM.' });
  } else if (b.joursDepuisDerniereActivite != null && b.joursDepuisDerniereActivite >= 3) {
    idees.push({ icone: '🃏', ton: 'idee', poids: 9, texte: `Pas de révision depuis ${b.joursDepuisDerniereActivite} jours : proposez 10 minutes de cartes de révision, c’est une façon douce de reprendre.` });
  }

  // Carnet d'erreurs.
  const dus = b.carnet?.aRevoirAujourdhui || 0;
  if (dus > 0) {
    idees.push({ icone: '📒', ton: 'idee', poids: 8, texte: `${dus > 1 ? `${dus} erreurs sont à revoir` : '1 erreur est à revoir'} aujourd’hui dans « Mon carnet d’erreurs » : 5 minutes suffisent pour ${dus > 1 ? 'les' : 'la'} reprendre.` });
  }

  // Dernier examen sur mesure (s'il date de moins de 15 jours).
  const ex = (b.examens || [])[0];
  if (ex && b.periode && ecart(ex.date, b.periode.fin) <= 14) {
    if (ex.note20 < 10 && ex.aRevoir && ex.aRevoir.length) {
      const noms = ex.aRevoir.slice(0, 2).map((c) => `« ${c.titre} »`).join(' et ');
      idees.push({ icone: '🎓', ton: 'idee', poids: 7, texte: `Au dernier examen sur mesure (${ex.note}/20), ${noms} ${ex.aRevoir.length > 1 ? 'sont à revoir' : 'est à revoir'} : relire la fiche ensemble, puis refaire le QCM, peut aider.` });
    } else if (ex.note20 >= 14) {
      bravos.push({ icone: '🎓', ton: 'bravo', poids: 7, texte: `Très beau résultat au dernier examen sur mesure : ${ex.note}/20. Dites-lui bravo !` });
    }
  }

  // Encouragements.
  const maitrisees = b.carnet?.maitriseesCetteSemaine || 0;
  if (maitrisees >= 3) {
    bravos.push({ icone: '💪', ton: 'bravo', poids: 8, texte: `${maitrisees} erreurs maîtrisées cette semaine : les efforts paient !` });
  }
  if (a.joursActifs >= 4) {
    bravos.push({ icone: '⭐', ton: 'bravo', poids: 9, texte: `Belle régularité : ${a.joursActifs} jours de travail sur les 7 derniers. N’hésitez pas à lui dire bravo !` });
  } else if (a.sessions > ap.sessions && ap.sessions > 0 && !b.activite?.precedentePartielle) {
    bravos.push({ icone: '📈', ton: 'bravo', poids: 5, texte: `Plus de travail que la semaine précédente (${plur(a.sessions, 'session')} contre ${ap.sessions}) : bel effort !` });
  } else if (a.joursActifs >= 1 && a.joursActifs <= 2 && !(b.joursDepuisDerniereActivite >= 3)) {
    idees.push({ icone: '⏱️', ton: 'idee', poids: 4, texte: 'Un petit moment chaque jour vaut mieux qu’une longue séance : 10 minutes après le goûter, par exemple.' });
  }

  idees.sort((x, y) => y.poids - x.poids);
  bravos.sort((x, y) => y.poids - x.poids);
  // Au plus max − 1 idées s'il y a un encouragement à donner, puis on complète.
  const choix = idees.slice(0, bravos.length ? max - 1 : max);
  for (const x of bravos) if (choix.length < max) choix.push(x);
  for (const x of idees.slice(choix.filter((c) => c.ton === 'idee').length)) if (choix.length < max) choix.push(x);
  if (!choix.length && !b.vide) {
    choix.push({ icone: '👍', ton: 'bravo', texte: 'Tout va bien : un petit moment de révision chaque jour suffit pour garder le rythme.' });
  }
  return choix.map(({ icone, ton, texte }) => ({ icone, ton, texte }));
}

/** Texte simple du bilan, à copier ou à partager (SMS, courriel…). */
export function texteBilan(bilan, nom = 'votre enfant') {
  const b = bilan;
  const L = [];
  L.push(`Bilan de la semaine de ${nom} (${b.periode.texte})`);
  L.push('');
  const a = b.activite.cetteSemaine;
  const ap = b.activite.semainePrecedente;
  L.push(`• Activité : ${plur(a.sessions, 'session')}, ${plur(a.joursActifs, 'jour actif', 'jours actifs')} sur 7, ${a.xp} XP (semaine précédente : ${plur(ap.sessions, 'session')}).`);
  const ch = b.chapitres.cetteSemaine;
  L.push(`• Chapitres travaillés : ${ch.length} (semaine précédente : ${b.chapitres.semainePrecedente})${ch.length ? ` — ${ch.slice(0, 5).map((c) => c.titre).join(', ')}${ch.length > 5 ? '…' : ''}` : ''}.`);
  if (b.carnet) {
    const morceaux = [`${b.carnet.aRevoirAujourdhui} à revoir aujourd’hui`];
    if (b.carnet.maitriseesCetteSemaine != null) morceaux.push(`${b.carnet.maitriseesCetteSemaine} ${b.carnet.maitriseesCetteSemaine > 1 ? 'maîtrisées' : 'maîtrisée'} cette semaine`);
    else morceaux.push(`${b.carnet.maitriseesTotal} ${b.carnet.maitriseesTotal > 1 ? 'maîtrisées' : 'maîtrisée'} au total`);
    L.push(`• Carnet d’erreurs : ${morceaux.join(', ')}.`);
  }
  for (const ex of (b.examens || []).filter((x) => x.cetteSemaine)) {
    const rev = ex.aRevoir && ex.aRevoir.length ? ` (à revoir : ${ex.aRevoir.map((c) => c.titre).join(', ')})` : '';
    L.push(`• Examen sur mesure${ex.libelleMatiere ? ` (${ex.libelleMatiere})` : ''} le ${jourCourt(ex.date)} : ${ex.note}/20${rev}.`);
  }
  for (const c of b.controles || []) {
    L.push(`• ${c.titre} ${jourLong(c.dateControle)} : plan de révision fait à ${Math.round((c.ratio || 0) * 100)} %.`);
  }
  if (b.conseils.length) {
    L.push('');
    L.push('Conseils :');
    for (const c of b.conseils) L.push(`– ${c.texte}`);
  }
  L.push('');
  L.push('Envoyé depuis Kamal Campus');
  return L.join('\n');
}
