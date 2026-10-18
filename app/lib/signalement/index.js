/**
 * Signalements d'erreurs — logique pure, testable, sans dépendance.
 *
 * Un élève (connecté ou non) peut signaler une erreur dans une fiche, une
 * question de QCM ou un exercice. Le signalement part dans la table Supabase
 * `signalements` (outils/sql/signalements.sql), que seul Kamal / le professeur
 * relecteur peut lire (Table editor de Supabase).
 *
 * Ce module prépare et vérifie la ligne envoyée, et traduit les erreurs en
 * messages simples. L'envoi lui-même est dans src/cloud/signalements.js.
 */

/** Longueur maximale du message (la même limite est imposée par le SQL). */
export const LONGUEUR_MAX = 500;
/** Longueur maximale de l'extrait (énoncé de la question / de l'exercice). */
export const LONGUEUR_EXTRAIT = 300;

/** Types proposés à l'élève (valeur stockée → libellé affiché). */
export const TYPES = [
  { id: 'contenu', libelle: 'Erreur de contenu' },
  { id: 'francais', libelle: 'Faute de français' },
  { id: 'autre', libelle: 'Autre' },
];
const IDS_TYPES = new Set(TYPES.map((x) => x.id));

/** Message affiché quand l'envoi a réussi. */
export const MESSAGE_ENVOYE = 'Merci ! Ton signalement a été envoyé. Un professeur le lira.';
/** Message affiché quand l'envoi a échoué (table absente, réseau…) : jamais de plantage. */
export const MESSAGE_ECHEC = 'Merci ! Le signalement n’a pas pu être envoyé : réessaie plus tard.';

/** Cible « fiche ». */
export const CIBLE_FICHE = 'fiche';

/** Nettoie un identifiant (question, exercice) : lettres, chiffres, - et _ seulement. */
function idPropre(id) {
  return String(id ?? '').trim().replace(/[^A-Za-z0-9_-]/g, '').slice(0, 60);
}

/**
 * Cible d'une question de QCM. Pour un QCM fabriqué par un générateur, le
 * numéro change à chaque tirage : on le marque « gen- » (l'extrait de
 * l'énoncé, envoyé à côté, permet alors de retrouver la question).
 */
export function cibleQcm(question, { genere = false } = {}) {
  const id = idPropre(question?.id);
  if (!id) return 'qcm:inconnu';
  return `qcm:${genere ? 'gen-' : ''}${id}`;
}

/** Cible d'un exercice (identifiant de l'exercice dans exercice.json). */
export function cibleExo(idExercice) {
  const id = idPropre(idExercice);
  return id ? `exo:${id}` : 'exo:inconnu';
}

/** Vrai si la cible a une forme acceptée (même règle que le SQL). */
export function cibleValide(cible) {
  return /^(fiche|qcm:[A-Za-z0-9_-]{1,64}|exo:[A-Za-z0-9_-]{1,64})$/.test(String(cible ?? ''));
}

/** Coupe un texte trop long (sans couper au milieu d'un caractère composé). */
function couper(texte, max) {
  const car = Array.from(String(texte ?? ''));
  return car.length > max ? car.slice(0, max).join('') : car.join('');
}

/** Nombre de caractères (tels que l'élève les voit) d'un message. */
export function longueur(message) {
  return Array.from(String(message ?? '')).length;
}

/** Caractères restants (peut être négatif si le texte collé est trop long). */
export function restants(message) {
  return LONGUEUR_MAX - longueur(message);
}

/**
 * Prépare la ligne à insérer. Renvoie { ligne } ou { erreur } (message pour l'élève).
 * Entrée : { chapitreId, niveau, type, cible, message, extrait, userId }
 */
export function preparerSignalement({ chapitreId, niveau, type, cible, message, extrait, userId } = {}) {
  const texte = String(message ?? '').trim();
  if (!texte) return { erreur: 'Explique en quelques mots ce qui ne va pas.' };
  if (longueur(texte) > LONGUEUR_MAX) return { erreur: `Ton message est trop long (${LONGUEUR_MAX} caractères au maximum).` };
  if (!IDS_TYPES.has(type)) return { erreur: 'Choisis le type d’erreur.' };
  const chap = String(chapitreId ?? '').trim();
  if (!chap || chap.length > 200) return { erreur: 'Chapitre inconnu.' };
  if (!cibleValide(cible)) return { erreur: 'Cible inconnue.' };
  const ext = String(extrait ?? '').replace(/\s+/g, ' ').trim();
  return {
    ligne: {
      chapitre_id: chap,
      niveau: niveau ? couper(String(niveau), 40) : null,
      type,
      cible,
      message: texte,
      extrait: ext ? couper(ext, LONGUEUR_EXTRAIT) : null,
      user_id: userId || null,
    },
  };
}

/** Vrai si l'erreur Supabase signale une table absente (SQL pas encore exécuté). */
export function estTableAbsente(error) {
  if (!error) return false;
  const code = String(error.code || '');
  if (['PGRST205', '42P01'].includes(code)) return true;
  const txt = String(error.message || '').toLowerCase();
  return /could not find the table|schema cache|relation .* does not exist/.test(txt);
}
