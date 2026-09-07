/**
 * Révision des erreurs — moteur (logique pure, testable, sans dépendance).
 *
 * L'application retient les questions ratées pour que l'élève puisse les
 * refaire plus tard. Règle simple et robuste : après n'importe quelle session,
 * une question ratée entre dans la réserve d'erreurs ; la même question réussie
 * (n'importe où) en sort. Les questions laissées sans réponse ne changent rien.
 *
 * La CLÉ d'une erreur est son énoncé seul (pas la matière) : ainsi, rejouer ses
 * erreurs — une session sans matière définie — retire bien celles réussies.
 */

/** Nombre maximum d'erreurs conservées (les plus récentes priment). */
export const MAX_ERREURS = 60;

/** Clé stable d'une question, à partir de son énoncé. */
export function cleErreur(enonce) {
  return String(enonce || '').trim().slice(0, 160);
}

/**
 * Met à jour la réserve d'erreurs après une session.
 * @param {Array<{cle:string, matiere:?string, question:object}>} store  réserve actuelle
 * @param {Array<{enonce:string}>} questions  questions de la session
 * @param {Array<{juste?:boolean}|null|undefined>} reponses  réponses (index aligné)
 * @param {?string} matiere  matière de la session (pour l'affichage seulement)
 * @param {number} [max]
 * @returns {Array} la nouvelle réserve (récents en fin de liste)
 */
export function majErreurs(store, questions, reponses = [], matiere = null, max = MAX_ERREURS) {
  const parCle = new Map((Array.isArray(store) ? store : []).map((e) => [e.cle, e]));
  (Array.isArray(questions) ? questions : []).forEach((q, i) => {
    const rep = reponses[i];
    if (!q || !rep) return; // sans réponse (ou question absente) → inchangé
    const cle = cleErreur(q.enonce);
    if (!cle) return;
    if (rep.juste === true) {
      parCle.delete(cle); // réussie → sort de la réserve
    } else if (rep.juste === false) {
      parCle.delete(cle); // ratée → (ré)insérée en fin pour marquer la récence
      parCle.set(cle, { cle, matiere: matiere || null, question: q });
    }
  });
  let arr = Array.from(parCle.values());
  if (arr.length > max) arr = arr.slice(arr.length - max); // garder les plus récents
  return arr;
}

/** Les questions à refaire, dans l'ordre de la réserve. */
export function questionsAReviser(store) {
  return (Array.isArray(store) ? store : []).map((e) => e.question).filter(Boolean);
}

/** Compte d'erreurs en réserve. */
export function compteErreurs(store) {
  return Array.isArray(store) ? store.length : 0;
}
