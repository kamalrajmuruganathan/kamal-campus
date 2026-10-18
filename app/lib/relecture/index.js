/**
 * Statut de relecture d'un chapitre (ou d'un formulaire, d'un sujet) — logique pure.
 *
 * Seul un professeur peut lever le statut « brouillon ». Dans l'en-tête YAML
 * de la fiche, il écrit :
 *   statut: relu
 *   relu_par: "Prénom Nom, professeur de mathématiques"
 *   relu_le: 2026-11-02
 * (voir docs/guide-relecture-professeur.md). generer-index.mjs recopie ces champs
 * dans l'index (statut, reluPar, reluLe).
 *
 * Un contenu n'est considéré comme relu que si le statut est « relu » (ou
 * l'ancien « publie ») ET si le nom du relecteur est renseigné : un statut seul,
 * sans nom, ne suffit pas à retirer l'avertissement.
 */

const STATUTS_RELUS = new Set(['relu', 'publie']);

const vide = (v) => v == null || ['', 'null', '~'].includes(String(v).trim());

/** Vrai si le contenu a été relu par un professeur identifié. */
export function estRelu(c) {
  if (!c) return false;
  return STATUTS_RELUS.has(String(c.statut ?? '').trim()) && !vide(c.reluPar);
}

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

/** « 2026-11-02 » → « 2 novembre 2026 » (date mal écrite → null). */
export function dateEnLettres(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso ?? '').trim());
  if (!m) return null;
  const [, a, mo, j] = m.map(Number);
  if (mo < 1 || mo > 12 || j < 1 || j > 31) return null;
  return `${j === 1 ? '1er' : j} ${MOIS[mo - 1]} ${a}`;
}

/**
 * Phrase affichée à la place de l'avertissement quand le contenu est relu :
 * « ✅ Relu par Mme Martin, professeure de mathématiques, le 2 novembre 2026. »
 * Renvoie null si le contenu n'est pas relu.
 */
export function mentionRelecture(c) {
  if (!estRelu(c)) return null;
  const date = vide(c.reluLe) ? null : dateEnLettres(c.reluLe);
  const nom = String(c.reluPar).trim().replace(/[.\s]+$/, '');
  return `✅ Relu par ${nom}${date ? `, le ${date}` : ''}.`;
}
