/**
 * Mot de passe oublié : règles et messages (sans réseau, testés à part).
 *
 * Déroulé : l'élève donne son e-mail → Supabase envoie un CODE provisoire (6 à 10 chiffres selon le
 * réglage « Email OTP length », valable « Email OTP expiration » = 600 s) → l'élève tape le code et
 * choisit un nouveau mot de passe.
 */

export const MDP_MIN = 6;
export const VALIDITE_MINUTES = 10;
/** Délai imposé par Supabase entre deux envois de code à la même adresse. */
export const DELAI_RENVOI_S = 60;

/** Garde seulement les chiffres (le code peut être collé avec des espaces). */
export function nettoyerCode(texte) {
  return String(texte || '').replace(/\D/g, '').slice(0, 10);
}

export function codeValide(code) {
  return /^\d{6,10}$/.test(String(code || ''));
}

export function emailPlausible(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

/** Message d'erreur pour le nouveau mot de passe, ou '' s'il convient. */
export function verifierNouveauMotDePasse(mdp, confirmation) {
  if (!mdp) return 'Choisis un nouveau mot de passe.';
  if (mdp.length < MDP_MIN) return `Le mot de passe doit faire au moins ${MDP_MIN} caractères.`;
  if (mdp !== confirmation) return 'Les deux mots de passe ne sont pas identiques.';
  return '';
}

/** Traduit les erreurs (en anglais) de Supabase pour le mot de passe oublié. Renvoie '' si inconnue. */
export function traduireErreurRecuperation(message) {
  const m = String(message || '').toLowerCase();
  if (!m) return '';
  if (m.includes('expired') || (m.includes('token') && m.includes('invalid')) || m.includes('otp')) {
    return 'Code incorrect ou expiré. Vérifie les chiffres, ou demande un nouveau code.';
  }
  if (m.includes('should be different') || m.includes('same password')) {
    return 'Choisis un mot de passe différent de l’ancien.';
  }
  const secondes = m.match(/after (\d+) seconds?/);
  if (secondes) return `Pour ta sécurité, attends ${secondes[1]} secondes avant de demander un nouveau code.`;
  if (m.includes('rate limit') || m.includes('too many')) {
    return 'Trop de demandes : attends quelques minutes, puis réessaie.';
  }
  if (m.includes('weak') || (m.includes('password') && m.includes('characters'))) {
    return `Mot de passe trop faible (${MDP_MIN} caractères minimum).`;
  }
  if (m.includes('network') || m.includes('fetch')) return 'Problème de réseau. Vérifie ta connexion et réessaie.';
  if (m.includes('email') && m.includes('invalid')) return 'Adresse e-mail invalide. Vérifie-la.';
  return '';
}
