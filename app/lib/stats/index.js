/**
 * Statistiques — agrégations pures pour l'écran de stats (heatmap d'activité,
 * maîtrise moyenne…). Aucune dépendance ; dates au format « AAAA-MM-JJ ».
 */

/** Recule (ou avance si n<0) de n jours une date « AAAA-MM-JJ » (UTC). */
export function reculer(dateStr, n) {
  const [a, m, j] = String(dateStr).split('-').map(Number);
  const d = new Date(Date.UTC(a, (m || 1) - 1, j || 1));
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

/**
 * Activité par jour sur les `nbJours` derniers jours (fin incluse).
 * @param {Array} historique  [{ date: ISO, ... }]
 * @param {string} finJour    « AAAA-MM-JJ » (aujourd'hui)
 * @returns {{date, count}[]}  du plus ancien au plus récent
 */
export function activiteParJour(historique, finJour, nbJours) {
  const compte = {};
  for (const h of historique || []) {
    const d = String(h && h.date ? h.date : '').slice(0, 10);
    if (d) compte[d] = (compte[d] || 0) + 1;
  }
  const jours = [];
  for (let i = nbJours - 1; i >= 0; i -= 1) {
    const d = reculer(finJour, i);
    jours.push({ date: d, count: compte[d] || 0 });
  }
  return jours;
}

/** Intensité 0..4 d'une case de heatmap selon le nombre de sessions. */
export function intensite(count) {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 2) return 2;
  if (count <= 4) return 3;
  return 4;
}

/** Nombre de jours actifs (au moins une session) sur la période. */
export function joursActifs(jours) {
  return jours.filter((j) => j.count > 0).length;
}

/** Moyenne d'une liste de nombres (0 si vide). */
export function moyenne(nombres) {
  return nombres.length ? nombres.reduce((a, b) => a + b, 0) / nombres.length : 0;
}

/**
 * Maîtrise moyenne par matière à partir des chapitres travaillés.
 * @param {{matiere, score}[]} entrees  score dans [0,1]
 * @returns {{matiere, moyenne, nombre}[]}  trié par maîtrise décroissante
 */
export function maitriseParMatiere(entrees) {
  const parMat = {};
  for (const e of entrees || []) {
    if (!e || !e.matiere) continue;
    (parMat[e.matiere] = parMat[e.matiere] || []).push(Number(e.score) || 0);
  }
  return Object.entries(parMat)
    .map(([matiere, scores]) => ({ matiere, moyenne: moyenne(scores), nombre: scores.length }))
    .sort((a, b) => b.moyenne - a.moyenne);
}
