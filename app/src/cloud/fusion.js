/**
 * Fusion de deux profils de progression (device local + cloud).
 * Principe : AUCUNE perte de progression.
 *  - compteurs cumulés  -> max (évite le double-comptage à la re-synchro)
 *  - collections        -> union (favoris, chapitres, historique, srs, erreurs…)
 *  - réglages/préférences -> ceux du device le PLUS récemment actif
 */

const max = (x, y) => Math.max(x || 0, y || 0);
const rangDate = (p) => (p && (p.dernierJourValide || p.jourCourant)) || '';

export function fusionnerProfils(a, b) {
  if (!a) return b;
  if (!b) return a;

  // Le device « récent » = activité la plus récente (sinon le plus d'XP).
  const aRecent =
    rangDate(a) > rangDate(b) ||
    (rangDate(a) === rangDate(b) && (a.xp || 0) >= (b.xp || 0));
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

  // XP par matière : max par matière.
  f.xpParMatiere = { ...(a.xpParMatiere || {}) };
  for (const k in (b.xpParMatiere || {})) f.xpParMatiere[k] = max(f.xpParMatiere[k], b.xpParMatiere[k]);

  // Favoris : union.
  f.favoris = [...new Set([...(a.favoris || []), ...(b.favoris || [])])];

  // Chapitres : meilleur score + nb de tentatives (max), titre conservé.
  f.chapitres = {};
  const ids = new Set([...Object.keys(a.chapitres || {}), ...Object.keys(b.chapitres || {})]);
  for (const id of ids) {
    const ca = (a.chapitres || {})[id];
    const cb = (b.chapitres || {})[id];
    if (ca && cb) {
      f.chapitres[id] = {
        titre: ca.titre || cb.titre,
        meilleurScore: max(ca.meilleurScore, cb.meilleurScore),
        tentatives: max(ca.tentatives, cb.tentatives),
      };
    } else {
      f.chapitres[id] = ca || cb;
    }
  }

  // Historique : union dédupliquée, du plus récent au plus ancien, plafonné à 30.
  const vus = new Set();
  const hist = [];
  for (const h of [...(a.historique || []), ...(b.historique || [])]) {
    const k = (h.date || '') + '|' + (h.titre || '') + '|' + (h.points || 0);
    if (vus.has(k)) continue;
    vus.add(k);
    hist.push(h);
  }
  hist.sort((x, y) => String(y.date).localeCompare(String(x.date)));
  f.historique = hist.slice(0, 30);

  // SRS : par carte, on garde l'état le plus avancé (rep le plus élevé).
  f.srs = { ...(a.srs || {}) };
  for (const k in (b.srs || {})) {
    const sa = f.srs[k];
    const sb = b.srs[k];
    f.srs[k] = !sa ? sb : ((sb.rep || 0) > (sa.rep || 0) ? sb : sa);
  }

  // Planning : union par id.
  const plan = {};
  for (const p of [...(a.planning || []), ...(b.planning || [])]) if (p && p.id != null) plan[p.id] = p;
  f.planning = Object.values(plan);

  // Erreurs à revoir : union par clé (200 max, plus récentes en fin).
  const err = {};
  for (const e of [...(a.erreurs || []), ...(b.erreurs || [])]) if (e && e.cle != null) err[e.cle] = e;
  f.erreurs = Object.values(err).slice(-200);

  // Exercices réussis : union par chapitre.
  f.exosReussis = {};
  for (const src of [a.exosReussis || {}, b.exosReussis || {}]) {
    for (const id in src) {
      if (!Array.isArray(src[id])) continue;
      f.exosReussis[id] = [...new Set([...(f.exosReussis[id] || []), ...src[id]])];
    }
  }

  // Ligue : semaine la plus récente ; à semaine égale, max d'XP.
  const la = a.ligue || {};
  const lb = b.ligue || {};
  if (String(la.semaine || '') === String(lb.semaine || '')) {
    f.ligue = { ...la, ...lb, xpSemaine: max(la.xpSemaine, lb.xpSemaine) };
  } else {
    f.ligue = String(lb.semaine || '') > String(la.semaine || '') ? lb : la;
  }

  // Onboarding : fait si l'un des deux l'a fait ; prénom non vide conservé.
  f.onboardingFait = !!(a.onboardingFait || b.onboardingFait);
  f.prenom = recent.prenom || autre.prenom || '';

  // Plans « Je révise mon contrôle » : union par id, cases cochées réunies.
  const plans = new Map();
  for (const src of [autre.controles || [], recent.controles || []]) {
    for (const pl of src) {
      if (!pl || !pl.id) continue;
      const deja = plans.get(pl.id);
      if (!deja) { plans.set(pl.id, pl); continue; }
      const faites = Array.isArray(pl.faites) || Array.isArray(deja.faites)
        ? [...new Set([...(deja.faites || []), ...(pl.faites || [])])]
        : { ...(deja.faites || {}), ...(pl.faites || {}) };
      plans.set(pl.id, { ...deja, ...pl, faites });
    }
  }
  if (plans.size) f.controles = [...plans.values()];

  return f;
}
