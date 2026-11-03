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

const pad2 = (n) => String(n).padStart(2, '0');

/**
 * Jour LOCAL « AAAA-MM-JJ » d'une date de session. L'historique enregistre
 * `new Date().toISOString()` (heure UTC) : couper la chaîne à 10 caractères
 * donnerait le jour UTC — une session faite à 0 h 30 à Paris, ou à 21 h aux
 * Antilles, tomberait sur le mauvais jour. Une date seule (« AAAA-MM-JJ ») est
 * gardée telle quelle. null si illisible.
 */
export function jourDeSession(date) {
  const s = String(date || '');
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const d = new Date(s);
  if (!s || Number.isNaN(d.getTime())) return null;
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** Nombre de sessions de l'historique faites le jour (local) donné. */
export function sessionsDuJour(historique, jour, jourDe = jourDeSession) {
  return (Array.isArray(historique) ? historique : []).filter((h) => h && jourDe(h.date) === jour).length;
}

/**
 * Activité par jour sur les `nbJours` derniers jours (fin incluse), en jours locaux.
 * @param {Array} historique  [{ date: ISO, ... }]
 * @param {string} finJour    « AAAA-MM-JJ » (aujourd'hui)
 * @returns {{date, count}[]}  du plus ancien au plus récent
 */
export function activiteParJour(historique, finJour, nbJours, jourDe = jourDeSession) {
  const compte = {};
  for (const h of Array.isArray(historique) ? historique : []) {
    const d = h ? jourDe(h.date) : null;
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
