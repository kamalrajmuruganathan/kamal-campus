/**
 * Synthèse vocale (lecture à voix haute) — hors ligne, via la voix intégrée du
 * téléphone (expo-speech). Sert surtout aux langues vivantes : entendre un mot
 * ou une phrase dans la bonne langue.
 *
 * Tout est défensif : si la brique est indisponible (aperçu web, voix absente),
 * les fonctions ne lèvent pas — elles ne font simplement rien.
 */

import * as Speech from 'expo-speech';

/** Matière → code de langue BCP-47 pour choisir la bonne voix. */
export function localeMatiere(matiere) {
  switch (matiere) {
    case 'anglais': return 'en-US';
    case 'espagnol': return 'es-ES';
    case 'allemand': return 'de-DE';
    default: return 'fr-FR';
  }
}

/** Cette matière profite-t-elle de la lecture à voix haute ? (langues vivantes) */
export function matiereParlante(matiere) {
  return matiere === 'anglais' || matiere === 'espagnol' || matiere === 'allemand';
}

/** Lit `texte` à voix haute dans la langue de `matiere`. */
export function parler(texte, matiere) {
  try {
    if (!texte) return;
    Speech.stop();
    Speech.speak(String(texte), { language: localeMatiere(matiere), rate: 0.92, pitch: 1.0 });
  } catch {
    // brique indisponible : on ignore silencieusement
  }
}

/** Coupe la lecture en cours. */
export function arreterParole() {
  try { Speech.stop(); } catch { /* ignore */ }
}
