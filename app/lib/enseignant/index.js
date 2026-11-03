/**
 * Espace enseignant — logique pure (aucune dépendance à React ni au réseau).
 *
 * Un professeur crée une classe, les élèves la rejoignent avec un code, le
 * professeur donne des devoirs (un chapitre, un type, une date limite) et voit
 * les résultats. Données : outils/sql/espace_enseignant.sql.
 *
 * Ce module fournit :
 *  - la validation des saisies (code, nom de classe, pseudo, consigne) ;
 *  - les libellés des devoirs et des échéances (« pour demain », « en retard
 *    de 2 jours ») ;
 *  - le tableau de bord de l'enseignant (taux de devoirs faits, moyenne par
 *    devoir, élèves en retard, chapitres difficiles) ;
 *  - la liste des devoirs de l'élève, et le petit cache qui permet à l'appli de
 *    n'envoyer un résultat que pour les chapitres qui ont un devoir.
 *
 * Les dates sont des chaînes « AAAA-MM-JJ » (jour local) ; le jour du jour est
 * toujours injecté (`aujourdhui`), ainsi que la fonction qui donne le jour
 * local d'un horodatage (`jourDe`, remplaçable dans les tests).
 */

import { ecartJours, dateEnLettres } from '../controle/index.js';

const NBSP = ' ';
const pad2 = (n) => String(n).padStart(2, '0');

// ── Saisies ─────────────────────────────────────────────────────────────────

/** Lettres et chiffres du code (sans 0/O ni 1/I/L, pour éviter les confusions). */
export const ALPHABET_CODE = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
export const LIMITES = {
  nomClasse: 60, nomEnseignant: 40, pseudoMin: 2, pseudoMax: 24, consigne: 300,
  exercicesMin: 1, exercicesMax: 20, classesActives: 20, elevesParClasse: 60, classesParEleve: 10,
};

/** Espaces de début et de fin retirés, espaces multiples réduits, caractères de contrôle retirés. */
export function nettoyerTexte(s) {
  return String(s ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** « h8w-uv2 » → « H8WUV2 » (lettres et chiffres seulement, en majuscules). */
export function normaliserCode(code) {
  return String(code ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

/** Vrai si le code a 6 caractères de l'alphabet sans ambiguïté. */
export function codeValide(code) {
  const c = normaliserCode(code);
  return c.length === 6 && [...c].every((x) => ALPHABET_CODE.includes(x));
}

/** Message d'erreur pour un code saisi, ou null s'il est valable. */
export function erreurCode(code) {
  const c = normaliserCode(code);
  if (c.length !== 6) return 'Le code doit comporter 6 caractères.';
  if (!codeValide(c)) return 'Ce code contient un caractère impossible : vérifie (pas de 0, O, 1, I ni L).';
  return null;
}

/** Message d'erreur pour un nom de classe, ou null. */
export function erreurNomClasse(nom) {
  const n = nettoyerTexte(nom);
  if (!n) return 'Donnez un nom à la classe (par exemple « 4e B – maths »).';
  if (n.length > LIMITES.nomClasse) return `Le nom de la classe doit faire ${LIMITES.nomClasse}${NBSP}caractères au plus.`;
  return null;
}

/** Message d'erreur pour le nom affiché aux élèves (facultatif), ou null. */
export function erreurNomEnseignant(nom) {
  const n = nettoyerTexte(nom);
  if (n.length > LIMITES.nomEnseignant) return `Le nom affiché doit faire ${LIMITES.nomEnseignant}${NBSP}caractères au plus.`;
  return null;
}

const PSEUDO_RE = /^[A-Za-z0-9À-ÖØ-öø-ÿŒœ ._'’-]+$/;

/** Message d'erreur pour un pseudo d'élève, ou null (mêmes règles que le SQL). */
export function erreurPseudo(pseudo) {
  const p = nettoyerTexte(pseudo);
  if (p.length < LIMITES.pseudoMin || p.length > LIMITES.pseudoMax || !PSEUDO_RE.test(p)) {
    return `Choisis un pseudo de ${LIMITES.pseudoMin} à ${LIMITES.pseudoMax}${NBSP}caractères (lettres, chiffres, espace, point ou tiret).`;
  }
  return null;
}

/** Message d'erreur pour une consigne, ou null. */
export function erreurConsigne(consigne) {
  const c = String(consigne ?? '').trim();
  if (c.length > LIMITES.consigne) return `La consigne doit faire ${LIMITES.consigne}${NBSP}caractères au plus.`;
  return null;
}

/** Message d'erreur pour une date limite (entre aujourd'hui et dans un an), ou null. */
export function erreurDateLimite(pourLe, aujourdhui) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(pourLe || ''))) return 'Choisissez une date limite.';
  const n = ecartJours(aujourdhui, pourLe);
  if (n < 0 || n > 365) return 'La date limite doit être comprise entre aujourd’hui et dans un an.';
  return null;
}

// ── Devoirs : libellés et dates ─────────────────────────────────────────────

export const TYPES_DEVOIR = {
  fiche: { icone: '📖', court: 'Fiche + QCM', libelle: 'Lire la fiche puis faire le QCM' },
  qcm: { icone: '📝', court: 'QCM', libelle: 'Faire le QCM' },
  exercices: { icone: '✏️', court: 'Exercices', libelle: 'Faire des exercices' },
};

/** Nombre d'exercices demandé (1 à 20, 5 par défaut). */
export function nbExercices(devoir) {
  const n = Math.round(Number(devoir?.nb_exercices));
  return Number.isFinite(n) && n >= LIMITES.exercicesMin ? Math.min(n, LIMITES.exercicesMax) : 5;
}

/** « Faire 5 exercices », « Faire le QCM », « Lire la fiche puis faire le QCM ». */
export function libelleDevoir(devoir) {
  if (devoir?.type === 'exercices') {
    const n = nbExercices(devoir);
    return n === 1 ? 'Faire 1 exercice' : `Faire ${n}${NBSP}exercices`;
  }
  return (TYPES_DEVOIR[devoir?.type] || TYPES_DEVOIR.qcm).libelle;
}

/** Jour local « AAAA-MM-JJ » d'un horodatage ISO (null si illisible). */
export function jourLocal(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** « vendredi 7 novembre » */
export function dateDevoir(pourLe) {
  return dateEnLettres(pourLe);
}

/**
 * Échéance en mots, vue du jour `aujourdhui` :
 * « pour aujourd’hui », « pour demain », « pour vendredi 7 novembre »,
 * « en retard d’un jour », « en retard de 3 jours ».
 */
export function echeanceEnLettres(pourLe, aujourdhui) {
  const n = ecartJours(aujourdhui, pourLe);
  if (n === 0) return 'pour aujourd’hui';
  if (n === 1) return 'pour demain';
  if (n > 1) return `pour ${dateEnLettres(pourLe)}`;
  if (n === -1) return 'en retard d’un jour';
  return `en retard de ${-n}${NBSP}jours`;
}

/** Taux de réussite d'un résultat (0 à 1), ou null s'il n'y a rien de mesurable. */
export function taux(resultat) {
  const total = Number(resultat?.total);
  const score = Number(resultat?.score);
  if (!Number.isFinite(total) || total <= 0 || !Number.isFinite(score)) return null;
  return Math.max(0, Math.min(1, score / total));
}

/** 0,734 → « 73 % » (null → « — »). */
export function pourcent(x) {
  if (x == null || !Number.isFinite(x)) return '—';
  return `${Math.round(x * 100)}${NBSP}%`;
}

/** « 9/10 » ou, pour des exercices, « 4 réussis sur 5 ». */
export function texteScore(devoir, resultat) {
  if (!resultat || !(Number(resultat.total) > 0)) return '';
  const s = Number(resultat.score);
  const t = Number(resultat.total);
  if (devoir?.type === 'exercices') return `${s} réussi${s > 1 ? 's' : ''} sur ${t}`;
  return `${s}/${t}`;
}

/**
 * Statut d'un devoir pour un élève :
 *  - 'fait'          : fait au plus tard le jour demandé ;
 *  - 'fait_retard'   : fait après la date ;
 *  - 'commence'      : exercices commencés mais pas assez nombreux (date non passée) ;
 *  - 'a_faire'       : rien encore, la date n'est pas passée ;
 *  - 'en_retard'     : pas fait et la date est passée.
 */
export function statutDevoir(devoir, resultat, aujourdhui, jourDe = jourLocal) {
  const fait = resultat && resultat.fait_le ? jourDe(resultat.fait_le) : null;
  if (fait) return fait > devoir.pour_le ? 'fait_retard' : 'fait';
  if (aujourdhui > devoir.pour_le) return 'en_retard';
  if (resultat && Number(resultat.total) > 0) return 'commence';
  return 'a_faire';
}

export const LIBELLES_STATUT = {
  fait: 'Fait',
  fait_retard: 'Fait en retard',
  commence: 'Commencé',
  a_faire: 'À faire',
  en_retard: 'En retard',
};

const estFait = (statut) => statut === 'fait' || statut === 'fait_retard';

// ── Tableau de bord de l'enseignant ─────────────────────────────────────────

const moyenne = (liste) => (liste.length ? liste.reduce((s, x) => s + x, 0) / liste.length : null);

/**
 * Tableau de bord d'une classe.
 * @param {{eleves: {id, pseudo, rejoint_le}[], devoirs: object[], resultats: object[]}} donnees
 *        (ce que renvoie la fonction SQL tableau_classe)
 * @param {string} aujourdhui « AAAA-MM-JJ »
 * @returns {{
 *   nbEleves, nbDevoirs, attendus, faits, tauxFaits,
 *   devoirs: {devoir, concernes, faits, enRetard, commences, moyenne, cellules}[],
 *   eleves: {eleve, concernes, faits, enRetard, moyenne}[],
 *   elevesEnRetard: {eleve, enRetard, devoirs}[],
 *   chapitresDifficiles: {chapitreId, moyenne, nbResultats}[],
 * }}
 * Un élève arrivé après la date d'un devoir n'est pas concerné par ce devoir.
 * Les devoirs sont rangés du plus récent (date limite) au plus ancien.
 */
export function tableauDeBord(donnees, aujourdhui, { jourDe = jourLocal, seuilDifficile = 0.6 } = {}) {
  const eleves = Array.isArray(donnees?.eleves) ? donnees.eleves : [];
  const devoirs = (Array.isArray(donnees?.devoirs) ? donnees.devoirs : [])
    .slice()
    .sort((a, b) => (b.pour_le || '').localeCompare(a.pour_le || '') || (b.cree_le || '').localeCompare(a.cree_le || ''));
  const resultats = new Map();
  for (const r of Array.isArray(donnees?.resultats) ? donnees.resultats : []) {
    if (r && r.devoir && r.membre) resultats.set(`${r.devoir}|${r.membre}`, r);
  }

  const parEleve = new Map(eleves.map((e) => [e.id, { eleve: e, concernes: 0, faits: 0, enRetard: 0, taux: [], retards: [] }]));
  const parChapitre = new Map();
  let attendus = 0;
  let faits = 0;

  const lignesDevoirs = devoirs.map((d) => {
    const cellules = {};
    let concernes = 0;
    let nFaits = 0;
    let enRetard = 0;
    let commences = 0;
    const lesTaux = [];
    for (const e of eleves) {
      const arrivee = jourDe(e.rejoint_le);
      const r = resultats.get(`${d.id}|${e.id}`) || null;
      // Arrivé après la date limite, sans résultat : pas concerné.
      if (arrivee && arrivee > d.pour_le && !r) { cellules[e.id] = { statut: 'non_concerne' }; continue; }
      const statut = statutDevoir(d, r, aujourdhui, jourDe);
      const tx = taux(r);
      cellules[e.id] = { statut, score: r ? r.score : null, total: r ? r.total : null, taux: tx, texte: texteScore(d, r) };
      concernes += 1;
      const pe = parEleve.get(e.id);
      pe.concernes += 1;
      if (estFait(statut)) {
        nFaits += 1;
        pe.faits += 1;
        if (tx != null) { lesTaux.push(tx); pe.taux.push(tx); }
      } else if (statut === 'commence') {
        commences += 1;
      } else if (statut === 'en_retard') {
        enRetard += 1;
        pe.enRetard += 1;
        pe.retards.push(d);
      }
    }
    attendus += concernes;
    faits += nFaits;
    if (lesTaux.length) {
      const c = parChapitre.get(d.chapitre_id) || [];
      c.push(...lesTaux);
      parChapitre.set(d.chapitre_id, c);
    }
    return { devoir: d, concernes, faits: nFaits, enRetard, commences, moyenne: moyenne(lesTaux), cellules };
  });

  const lignesEleves = [...parEleve.values()].map((x) => ({
    eleve: x.eleve, concernes: x.concernes, faits: x.faits, enRetard: x.enRetard, moyenne: moyenne(x.taux), retards: x.retards,
  }));

  const elevesEnRetard = lignesEleves
    .filter((x) => x.enRetard > 0)
    .sort((a, b) => b.enRetard - a.enRetard || String(a.eleve.pseudo).localeCompare(String(b.eleve.pseudo), 'fr'))
    .map((x) => ({ eleve: x.eleve, enRetard: x.enRetard, devoirs: x.retards }));

  // Chapitres difficiles : moyenne sous le seuil, avec au moins 2 résultats.
  const chapitresDifficiles = [...parChapitre.entries()]
    .map(([chapitreId, liste]) => ({ chapitreId, moyenne: moyenne(liste), nbResultats: liste.length }))
    .filter((c) => c.nbResultats >= 2 && c.moyenne < seuilDifficile)
    .sort((a, b) => a.moyenne - b.moyenne);

  return {
    nbEleves: eleves.length,
    nbDevoirs: devoirs.length,
    attendus,
    faits,
    tauxFaits: attendus ? faits / attendus : null,
    devoirs: lignesDevoirs,
    eleves: lignesEleves.map(({ retards, ...reste }) => reste),
    elevesEnRetard,
    chapitresDifficiles,
  };
}

/**
 * Résultats de la classe au format CSV (séparateur « ; », lisible par un tableur
 * français). Une ligne par élève, une colonne par devoir.
 * @param {ReturnType<typeof tableauDeBord>} tableau
 * @param {(chapitreId: string) => string} titreDe titre lisible d'un chapitre
 */
export function exporterCsv(tableau, titreDe = (id) => id) {
  const champ = (s) => {
    const x = String(s ?? '');
    return /[;"\n]/.test(x) ? `"${x.replace(/"/g, '""')}"` : x;
  };
  const tete = ['Élève', ...tableau.devoirs.map((l) => `${titreDe(l.devoir.chapitre_id)} (${l.devoir.pour_le})`), 'Devoirs faits', 'Moyenne'];
  const lignes = tableau.eleves.map((e) => [
    e.eleve.pseudo,
    ...tableau.devoirs.map((l) => {
      const c = l.cellules[e.eleve.id];
      if (!c || c.statut === 'non_concerne') return '';
      if (c.texte) return `${c.texte}${c.statut === 'fait_retard' ? ' (en retard)' : ''}`;
      return LIBELLES_STATUT[c.statut] || '';
    }),
    `${e.faits}/${e.concernes}`,
    e.moyenne == null ? '' : `${Math.round(e.moyenne * 100)} %`,
  ]);
  return [tete, ...lignes].map((l) => l.map(champ).join(';')).join('\n');
}

// ── Côté élève ──────────────────────────────────────────────────────────────

/**
 * Devoirs de l'élève, prêts à afficher.
 * @param {{classes: object[], devoirs: object[]}} donnees (fonction SQL mes_classes_eleve)
 * @returns {{aFaire: object[], faits: object[]}} chaque devoir avec { statut, echeance, classeNom }.
 *   À faire : du plus urgent au moins urgent (retards d'abord). Faits : du plus récent au plus ancien.
 */
export function devoirsEleve(donnees, aujourdhui, { jourDe = jourLocal } = {}) {
  const classes = new Map((donnees?.classes || []).map((c) => [c.id, c]));
  const aFaire = [];
  const faits = [];
  for (const d of donnees?.devoirs || []) {
    const classe = classes.get(d.classe);
    if (!classe || classe.archivee) continue;
    const statut = statutDevoir(d, d, aujourdhui, jourDe);
    const item = {
      ...d,
      statut,
      classeNom: classe.nom,
      enseignantNom: classe.enseignant_nom || '',
      echeance: echeanceEnLettres(d.pour_le, aujourdhui),
      libelle: libelleDevoir(d),
      score: texteScore(d, d),
    };
    (estFait(statut) ? faits : aFaire).push(item);
  }
  aFaire.sort((a, b) => a.pour_le.localeCompare(b.pour_le) || String(a.cree_le).localeCompare(String(b.cree_le)));
  faits.sort((a, b) => b.pour_le.localeCompare(a.pour_le));
  return { aFaire, faits };
}

/**
 * Ce que l'appli garde en mémoire (sur l'appareil) pour savoir, à la fin d'un QCM
 * ou d'un exercice, s'il faut envoyer le résultat : les chapitres qui ont un
 * devoir en cours, et un résumé pour l'accueil.
 */
export function cacheDevoirs(donnees, maintenantIso) {
  const qcm = new Set();
  const exercices = new Set();
  const devoirs = [];
  const archivees = new Set((donnees?.classes || []).filter((c) => c.archivee).map((c) => c.id));
  for (const d of donnees?.devoirs || []) {
    if (archivees.has(d.classe)) continue;
    if (d.type === 'exercices') exercices.add(d.chapitre_id); else qcm.add(d.chapitre_id);
    devoirs.push({ id: d.id, chapitre_id: d.chapitre_id, type: d.type, pour_le: d.pour_le, fait: !!d.fait_le });
  }
  return {
    maj: maintenantIso,
    nbClasses: (donnees?.classes || []).length,
    qcm: [...qcm],
    exercices: [...exercices],
    devoirs,
  };
}

/** Vrai s'il faut envoyer ce résultat (le chapitre a un devoir de ce genre). */
export function chapitreConcerne(cache, chapitreId, genre) {
  if (!cache || !chapitreId) return false;
  const liste = genre === 'exercice' ? cache.exercices : cache.qcm;
  return Array.isArray(liste) && liste.includes(chapitreId);
}

/** Vrai si le cache est absent ou plus vieux que `heures`. */
export function cachePerime(cache, maintenant, heures = 6) {
  if (!cache || !cache.maj) return true;
  const t = new Date(cache.maj).getTime();
  if (Number.isNaN(t)) return true;
  return maintenant.getTime() - t > heures * 3600 * 1000;
}

/** Marque comme faits, dans le cache, les devoirs QCM/fiche d'un chapitre (après un envoi réussi). */
export function marquerFaitsQcm(cache, chapitreId) {
  if (!cache) return cache;
  return {
    ...cache,
    devoirs: (cache.devoirs || []).map((d) => (d.chapitre_id === chapitreId && d.type !== 'exercices' ? { ...d, fait: true } : d)),
  };
}

/**
 * Sous-titre de la carte de l'accueil, d'après le cache :
 * « 2 devoirs à faire, dont 1 pour demain », « 1 devoir en retard », ou un texte d'invitation.
 */
export function resumeAccueil(cache, aujourdhui) {
  const defaut = 'Rejoins la classe de ton professeur avec un code, ou crée ta classe si tu enseignes';
  if (!cache || !Array.isArray(cache.devoirs)) return defaut;
  const restants = cache.devoirs.filter((d) => !d.fait);
  if (!restants.length) return cache.nbClasses > 0 ? 'Aucun devoir à faire pour le moment 👍' : defaut;
  const retard = restants.filter((d) => d.pour_le < aujourdhui).length;
  const auj = restants.filter((d) => d.pour_le === aujourdhui).length;
  const demain = restants.filter((d) => ecartJours(aujourdhui, d.pour_le) === 1).length;
  const n = restants.length;
  const nb = `${n}${NBSP}devoir${n > 1 ? 's' : ''}`;
  if (retard === n) return `${nb} en retard`;
  if (auj === n) return `${nb} pour aujourd’hui`;
  if (demain === n) return `${nb} pour demain`;
  let texte = `${nb} à faire`;
  if (retard) texte += `, dont ${retard} en retard`;
  else if (auj) texte += `, dont ${auj} pour aujourd’hui`;
  else if (demain) texte += `, dont ${demain} pour demain`;
  return texte;
}
