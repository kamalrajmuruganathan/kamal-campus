/**
 * Mode examen — moteur (logique pure, testable, sans dépendance).
 *
 * Contrairement au QCM d'apprentissage (correction immédiate), le mode examen
 * enchaîne les questions SANS montrer la correction, sous un compte à rebours,
 * puis affiche le score et le corrigé à la fin. Ce module ne contient que la
 * logique : durée conseillée, formatage du chrono, temps restant, phases
 * d'alerte et notation. L'écran (React Native) n'a plus qu'à appeler ces
 * fonctions, ce qui garde le décompte et le calcul du score vérifiables.
 */

/** Nombre de secondes accordées par question, par défaut, en mode examen. */
export const SECONDES_PAR_QUESTION = 60;

/** Bornes de durée d'un examen (en secondes) : ni ridicule, ni interminable. */
const DUREE_MIN = 5 * 60;
const DUREE_MAX = 60 * 60;

/**
 * Durée conseillée pour un examen, en secondes.
 * Proportionnelle au nombre de questions, arrondie à la minute, bornée.
 * @param {number} nbQuestions
 * @param {number} [secondesParQuestion]
 * @returns {number} durée en secondes (multiple de 60)
 */
export function dureeConseillee(nbQuestions, secondesParQuestion = SECONDES_PAR_QUESTION) {
  const n = Math.max(0, Math.floor(nbQuestions || 0));
  const brut = n * secondesParQuestion;
  const borne = Math.min(DUREE_MAX, Math.max(DUREE_MIN, brut));
  return Math.round(borne / 60) * 60;
}

/**
 * Formate une durée en « m:ss » (ou « mm:ss »).
 * Les valeurs négatives sont traitées comme 0 (le chrono ne descend pas sous 0).
 * @param {number} secondes
 * @returns {string}
 */
export function formaterChrono(secondes) {
  const s = Math.max(0, Math.floor(secondes || 0));
  const m = Math.floor(s / 60);
  const reste = s % 60;
  return `${m}:${String(reste).padStart(2, '0')}`;
}

/**
 * Temps restant, borné dans [0, duree].
 * @param {number} dureeSecondes
 * @param {number} ecouleSecondes
 * @returns {number}
 */
export function tempsRestant(dureeSecondes, ecouleSecondes) {
  const duree = Math.max(0, Math.floor(dureeSecondes || 0));
  const ecoule = Math.max(0, Math.floor(ecouleSecondes || 0));
  return Math.max(0, duree - ecoule);
}

/**
 * Phase du chronomètre, pour colorer l'affichage sans logique dans l'écran.
 * - « critique » : dernière minute (≤ 60 s) ;
 * - « attention » : dernier cinquième du temps ;
 * - « normal » : sinon.
 * @param {number} restant  secondes restantes
 * @param {number} duree    durée totale
 * @returns {'normal'|'attention'|'critique'}
 */
export function phaseChrono(restant, duree) {
  const r = Math.max(0, Math.floor(restant || 0));
  const d = Math.max(0, Math.floor(duree || 0));
  if (r <= 60) return 'critique';
  if (d > 0 && r <= d * 0.2) return 'attention';
  return 'normal';
}

/**
 * Appréciation à partir d'un pourcentage de réussite (repère d'entraînement,
 * volontairement bienveillant — ce n'est pas une note officielle).
 * @param {number} pourcent  0 à 100
 * @returns {string}
 */
export function appreciation(pourcent) {
  const p = Math.max(0, Math.min(100, Math.round(pourcent || 0)));
  if (p >= 90) return 'Excellent';
  if (p >= 75) return 'Très bien';
  if (p >= 60) return 'Bien';
  if (p >= 50) return 'À consolider';
  return 'À retravailler';
}

/**
 * Note un examen. Une réponse est un objet `{ choisi }` (l'indice choisi) ou
 * `null`/absent si la question a été laissée sans réponse — auquel cas elle
 * compte comme fausse. La justesse est RECALCULÉE ici depuis `question.reponse`
 * (on ne fait pas confiance à un éventuel drapeau fourni par l'appelant).
 * @param {Array<{reponse:number}>} questions
 * @param {Array<{choisi:number}|null|undefined>} reponses
 * @returns {{total:number, justes:number, sansReponse:number, pourcent:number,
 *   appreciation:string, rates:number[], details:Array<{index:number, choisi:number|null, bonne:number, juste:boolean}>}}
 */
export function noter(questions, reponses = []) {
  const qs = Array.isArray(questions) ? questions : [];
  const total = qs.length;
  const details = qs.map((q, i) => {
    const rep = reponses[i];
    const choisi = rep && Number.isInteger(rep.choisi) ? rep.choisi : null;
    const bonne = q ? q.reponse : -1;
    return { index: i, choisi, bonne, juste: choisi !== null && choisi === bonne };
  });
  const justes = details.filter((d) => d.juste).length;
  const sansReponse = details.filter((d) => d.choisi === null).length;
  const pourcent = total ? Math.round((justes / total) * 100) : 0;
  const rates = details.filter((d) => !d.juste).map((d) => d.index);
  return { total, justes, sansReponse, pourcent, appreciation: appreciation(pourcent), rates, details };
}
