/**
 * Fusion de deux profils de progression (device local + cloud).
 * Principe : AUCUNE perte de progression.
 *  - compteurs cumulés  -> max (évite le double-comptage à la re-synchro)
 *  - collections        -> union (favoris, chapitres, historique, srs, erreurs…)
 *  - réglages/préférences -> ceux du device le PLUS récemment actif
 *
 * La fusion ne dépend pas de l'ordre des appareils (fusion(a, b) ≡ fusion(b, a)),
 * est idempotente (fusion(a, a) = a) et associative (trois appareils) : en cas
 * d'égalité, le choix se fait sur des règles fixes, jamais sur la position.
 * Les tests sont dans lib/fusion/fusion.test.js.
 */

import { fusionnerCarnets, fusionnerJournauxMaitrisees, depuisAnciennesErreurs } from '../../lib/carnet/index.js';
import { fusionnerDictees } from '../../lib/dictee/index.js';
import { fusionnerSemaines } from '../../lib/defisSemaine/index.js';
import { fusionnerVacances } from '../../lib/vacances/index.js';
import { fusionnerEpreuves } from '../../lib/epreuve/index.js';
import { etatSemaine } from '../../lib/classement/index.js';

const max = (x, y) => Math.max(Number(x) || 0, Number(y) || 0);
const liste = (x) => (Array.isArray(x) ? x : []);
const objet = (x) => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
const texte = (x) => (x == null ? '' : String(x));

/** JSON à clés triées : sert à départager deux valeurs de façon fixe. */
function stable(x) {
  if (Array.isArray(x)) return `[${x.map(stable).join(',')}]`;
  if (x && typeof x === 'object') {
    return `{${Object.keys(x).sort().filter((k) => x[k] !== undefined).map((k) => `${JSON.stringify(k)}:${stable(x[k])}`).join(',')}}`;
  }
  return JSON.stringify(x) ?? 'null';
}
/** Des deux valeurs, celle qui l'emporte à égalité (choix fixe, indépendant de l'ordre). */
const departage = (x, y) => (stable(x) >= stable(y) ? x : y);

/** Dernier jour d'activité connu (« AAAA-MM-JJ »). */
const jourActivite = (p) => [texte(p.dernierJourValide), texte(p.jourCourant)].sort().pop();

// Champs fusionnés un par un ci-dessous ; tous les autres (réglages) viennent de l'appareil récent.
const FUSIONNES = new Set(['xp', 'qcmTermines', 'reponsesJustes', 'reponsesTotal', 'sansFautes', 'meilleureSerie',
  'flashcardsRevues', 'flashcardsConnues', 'enigmesResolues', 'meilleureSerieJours', 'xpParMatiere', 'favoris',
  'chapitres', 'historique', 'srs', 'planning', 'erreurs', 'carnet', 'carnetMaitrisees', 'carnetMaitriseesJours',
  'exosReussis', 'dictees', 'ligue', 'onboardingFait', 'prenom', 'controles', 'examens', 'semaine',
  'defisSemaineReussis', 'vacances', 'epreuves', 'jourCourant', 'xpDuJour', 'serieJours', 'dernierJourValide',
  'semaineXp', 'xpDebutSemaine']);

/** Clé de recency : jour d'activité, puis (à égalité) les réglages eux-mêmes, pour un choix fixe. */
function cleRecence(p) {
  const reglages = {};
  for (const k of Object.keys(p)) if (!FUSIONNES.has(k)) reglages[k] = p[k];
  return [jourActivite(p), String(Object.keys(reglages).length).padStart(4, '0'), stable(reglages)];
}

export function fusionnerProfils(a, b) {
  if (!a || typeof a !== 'object') return b;
  if (!b || typeof b !== 'object') return a;

  // Le device « récent » = activité la plus récente
  // (à égalité de jour : celui qui a le plus de réglages renseignés, puis un choix fixe).
  const ka = cleRecence(a);
  const kb = cleRecence(b);
  const aRecent = ka[0] !== kb[0] ? ka[0] > kb[0] : ka[1] !== kb[1] ? ka[1] > kb[1] : ka[2] >= kb[2];
  const recent = aRecent ? a : b;
  const autre = aRecent ? b : a;

  // On part des réglages/préférences du device le plus récent.
  const f = { ...recent };

  // Compteurs cumulés : max.
  f.xp = max(a.xp, b.xp);
  f.qcmTermines = max(a.qcmTermines, b.qcmTermines);
  f.reponsesJustes = max(a.reponsesJustes, b.reponsesJustes);
  f.reponsesTotal = max(a.reponsesTotal, b.reponsesTotal);
  f.sansFautes = max(a.sansFautes, b.sansFautes);
  f.meilleureSerie = max(a.meilleureSerie, b.meilleureSerie);
  f.flashcardsRevues = max(a.flashcardsRevues, b.flashcardsRevues);
  f.flashcardsConnues = max(a.flashcardsConnues, b.flashcardsConnues);
  f.enigmesResolues = max(a.enigmesResolues, b.enigmesResolues);
  f.meilleureSerieJours = max(a.meilleureSerieJours, b.meilleureSerieJours);

  // Jour suivi et série : chaque date vient de l'appareil qui l'a vue en dernier
  // (l'XP du jour d'un téléphone n'est pas effacé par la série validée hier sur l'ordinateur).
  const dj = [a.dernierJourValide, b.dernierJourValide].filter(Boolean).map(String).sort().pop();
  if (dj) {
    f.dernierJourValide = dj;
    f.serieJours = Math.max(...[a, b].filter((p) => String(p.dernierJourValide) === dj).map((p) => Number(p.serieJours) || 0));
  } else if (a.serieJours != null || b.serieJours != null) {
    f.serieJours = max(a.serieJours, b.serieJours);
  }
  const jc = [a.jourCourant, b.jourCourant].filter(Boolean).map(String).sort().pop();
  if (jc) {
    f.jourCourant = jc;
    f.xpDuJour = Math.max(...[a, b].filter((p) => String(p.jourCourant) === jc).map((p) => Number(p.xpDuJour) || 0));
  }

  // XP par matière : max par matière.
  f.xpParMatiere = { ...objet(a.xpParMatiere) };
  for (const k in objet(b.xpParMatiere)) f.xpParMatiere[k] = max(f.xpParMatiere[k], b.xpParMatiere[k]);

  // Favoris : union.
  f.favoris = [...new Set([...liste(a.favoris), ...liste(b.favoris)])];

  // Chapitres : meilleur score + nb de tentatives (max), titre conservé.
  f.chapitres = {};
  const ca0 = objet(recent.chapitres);
  const cb0 = objet(autre.chapitres);
  for (const id of new Set([...Object.keys(ca0), ...Object.keys(cb0)])) {
    const ca = objet(ca0[id]);
    const cb = objet(cb0[id]);
    const okA = ca0[id] && typeof ca0[id] === 'object';
    const okB = cb0[id] && typeof cb0[id] === 'object';
    if (okA && okB) {
      f.chapitres[id] = {
        ...cb,
        ...ca,
        titre: ca.titre || cb.titre,
        meilleurScore: max(ca.meilleurScore, cb.meilleurScore),
        tentatives: max(ca.tentatives, cb.tentatives),
      };
    } else if (okA || okB) {
      f.chapitres[id] = okA ? ca0[id] : cb0[id];
    }
  }

  // Historique : union dédupliquée, du plus récent au plus ancien, plafonné à 30.
  const cleHist = (h) => `${texte(h.date)}|${texte(h.titre)}|${Number(h.points) || 0}`;
  const parCle = new Map();
  for (const h of [...liste(a.historique), ...liste(b.historique)]) {
    if (!h || typeof h !== 'object') continue;
    const k = cleHist(h);
    parCle.set(k, parCle.has(k) ? departage(parCle.get(k), h) : h);
  }
  f.historique = [...parCle.entries()]
    .sort(([kx, x], [ky, y]) => texte(y.date).localeCompare(texte(x.date)) || (kx < ky ? 1 : kx > ky ? -1 : 0))
    .map(([, h]) => h)
    .slice(0, 30);

  // SRS : par carte, l'état le plus avancé (rep le plus élevé, puis échéance la plus lointaine).
  f.srs = { ...objet(a.srs) };
  for (const k in objet(b.srs)) {
    const sa = f.srs[k];
    const sb = b.srs[k];
    if (!sa || typeof sa !== 'object') { f.srs[k] = sb; continue; }
    if (!sb || typeof sb !== 'object') continue;
    const d = (Number(sb.rep) || 0) - (Number(sa.rep) || 0) || texte(sb.due).localeCompare(texte(sa.due));
    f.srs[k] = d > 0 ? sb : d < 0 ? sa : departage(sa, sb);
  }

  // Planning : union par id (l'appareil récent l'emporte pour un même créneau).
  const plan = {};
  for (const p of [...liste(autre.planning), ...liste(recent.planning)]) if (p && p.id != null) plan[p.id] = p;
  f.planning = Object.values(plan);

  // Erreurs à revoir : union par clé (200 max, plus récentes en fin).
  const err = {};
  for (const e of [...liste(autre.erreurs), ...liste(recent.erreurs)]) if (e && e.cle != null) err[e.cle] = e;
  f.erreurs = Object.values(err).slice(-200);

  // Carnet d'erreurs : par clé, la version la plus récente gagne. Un appareil resté à
  // l'ancien format (réserve « erreurs » sans carnet) apporte ses erreurs, à revoir tout de suite.
  if (Array.isArray(a.carnet) || Array.isArray(b.carnet)) {
    const ancien = (p) => (Array.isArray(p.carnet) ? [] : depuisAnciennesErreurs(p.erreurs, '1970-01-01'));
    f.carnet = fusionnerCarnets([...liste(a.carnet), ...ancien(a)], [...liste(b.carnet), ...ancien(b)]);
  }
  f.carnetMaitrisees = max(a.carnetMaitrisees, b.carnetMaitrisees);
  if (a.carnetMaitriseesJours || b.carnetMaitriseesJours) {
    f.carnetMaitriseesJours = fusionnerJournauxMaitrisees(a.carnetMaitriseesJours, b.carnetMaitriseesJours);
  }

  // Exercices réussis : union par chapitre.
  f.exosReussis = {};
  for (const src of [objet(a.exosReussis), objet(b.exosReussis)]) {
    for (const id in src) {
      if (!Array.isArray(src[id])) continue;
      f.exosReussis[id] = [...new Set([...(f.exosReussis[id] || []), ...src[id]])];
    }
  }

  // Dictées : meilleure note et nombre d'essais maximaux, dernière note la plus récente
  // (même jour sur les deux appareils : la meilleure des deux dernières notes, choix fixe).
  if (a.dictees || b.dictees) {
    const da = objet(a.dictees);
    const db = objet(b.dictees);
    f.dictees = fusionnerDictees(da, db);
    for (const id in f.dictees) {
      const x = da[id];
      const y = db[id];
      if (x && y && typeof x === 'object' && typeof y === 'object' && texte(x.date) === texte(y.date)) {
        f.dictees[id] = { ...f.dictees[id], derniere: Math.max(Number(x.derniere) || 0, Number(y.derniere) || 0) };
      }
    }
  }

  // Ligue : semaine la plus récente ; à semaine égale, max d'XP et le palier le plus haut
  // (choix sur le contenu, pas sur l'appareil : la fusion reste associative).
  const la = objet(a.ligue);
  const lb = objet(b.ligue);
  if (texte(la.semaine) === texte(lb.semaine)) {
    const sansXp = (l) => stable({ ...l, xpSemaine: 0 });
    const d = (Number(la.palier) || 0) - (Number(lb.palier) || 0);
    const base = d > 0 ? la : d < 0 ? lb : (sansXp(la) >= sansXp(lb) ? la : lb);
    f.ligue = { ...base, xpSemaine: max(la.xpSemaine, lb.xpSemaine) };
  } else {
    f.ligue = texte(lb.semaine) > texte(la.semaine) ? lb : la;
  }

  // Classement entre amis : XP de la semaine = max des deux appareils (jamais l'ancien XP
  // de l'autre appareil compté comme gagné cette semaine).
  const sx = [a.semaineXp, b.semaineXp].filter(Boolean).map(String).sort().pop();
  if (sx) {
    const xpSemaine = Math.max(...[a, b].map((p) => etatSemaine(p, sx).xpSemaine));
    f.semaineXp = sx;
    f.xpDebutSemaine = f.xp - Math.min(xpSemaine, f.xp);
  }

  // Onboarding : fait si l'un des deux l'a fait ; prénom non vide conservé.
  f.onboardingFait = !!(a.onboardingFait || b.onboardingFait);
  f.prenom = recent.prenom || autre.prenom || '';

  // Plans « Je révise mon contrôle » : union par id, cases cochées réunies.
  const commeObjet = (x) => (Array.isArray(x) ? Object.fromEntries(x.map((id) => [id, true])) : objet(x));
  const plans = new Map();
  for (const pl of [...liste(autre.controles), ...liste(recent.controles)]) {
    if (!pl || !pl.id) continue;
    const deja = plans.get(pl.id);
    if (!deja) { plans.set(pl.id, pl); continue; }
    const faites = Array.isArray(pl.faites) && Array.isArray(deja.faites)
      ? [...new Set([...deja.faites, ...pl.faites])]
      : { ...commeObjet(deja.faites), ...commeObjet(pl.faites) };
    plans.set(pl.id, { ...deja, ...pl, faites });
  }
  if (plans.size) f.controles = [...plans.values()];

  // Historique « Examen sur mesure » : union par id, plus récent d'abord, 30 au plus.
  const examens = new Map();
  for (const ex of [...liste(autre.examens), ...liste(recent.examens)]) if (ex && ex.id) examens.set(ex.id, ex);
  if (examens.size) {
    f.examens = [...examens.values()]
      .sort((x, y) => texte(y.date).localeCompare(texte(x.date)) || texte(y.id).localeCompare(texte(x.id)))
      .slice(0, 30);
  }

  // Défis de la semaine : compteurs de la semaine (max), récompenses réunies ; total cumulé : max.
  if (a.semaine || b.semaine) f.semaine = fusionnerSemaines(a.semaine, b.semaine);
  f.defisSemaineReussis = max(a.defisSemaineReussis, b.defisSemaineReussis);

  // Révisions de vacances : même plan → séances cochées réunies ; sinon le plan le plus récent.
  if (a.vacances || b.vacances) f.vacances = fusionnerVacances(autre.vacances, recent.vacances);

  // Épreuves en conditions réelles : union par id, plus récentes d'abord, 30 au plus.
  if (Array.isArray(a.epreuves) || Array.isArray(b.epreuves)) f.epreuves = fusionnerEpreuves(autre.epreuves, recent.epreuves);

  return f;
}
