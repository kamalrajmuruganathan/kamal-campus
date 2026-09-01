/**
 * Synthèse vocale (lecture à voix haute) — hors ligne, via la voix intégrée du
 * téléphone (expo-speech). Sert surtout aux langues vivantes : entendre un mot
 * ou une phrase dans la bonne langue.
 *
 * Tout est défensif : si la brique est indisponible (aperçu web, voix absente),
 * les fonctions ne lèvent pas — elles ne font simplement rien.
 */

import * as Speech from 'expo-speech';

// Vitesse de lecture courante (pilotée par la préférence du profil).
const VITESSES = { lent: 0.7, normal: 0.92, rapide: 1.15 };
let vitesseCourante = VITESSES.normal;

/** Règle la vitesse de lecture ('lent' | 'normal' | 'rapide'). */
export function definirVitesseParole(pref) {
  vitesseCourante = VITESSES[pref] ?? VITESSES.normal;
}

// Voix choisies par langue : { 'en-US': identifiant, 'es-ES': …, 'de-DE': … }.
let voixChoisies = {};

/** Règle les voix préférées par langue (mapping locale → identifiant). */
export function definirVoix(mapping) {
  voixChoisies = mapping && typeof mapping === 'object' ? mapping : {};
}

/** Liste les voix installées sur l'appareil (asynchrone, défensif). */
export async function listerVoix() {
  try {
    const v = await Speech.getAvailableVoicesAsync();
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

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
    const locale = localeMatiere(matiere);
    const opts = { language: locale, rate: vitesseCourante, pitch: 1.0 };
    if (voixChoisies[locale]) opts.voice = voixChoisies[locale];
    Speech.speak(String(texte), opts);
  } catch {
    // brique indisponible : on ignore silencieusement
  }
}

/** Coupe la lecture en cours. */
export function arreterParole() {
  try { Speech.stop(); } catch { /* ignore */ }
}

/**
 * Lit une SÉQUENCE de segments l'un après l'autre (mode podcast). Enchaîne au
 * segment suivant quand le précédent est terminé.
 * @param {string[]} segments textes à lire dans l'ordre
 * @param {string} matiere    pour la langue de la voix
 * @param {{onIndex?:(i:number)=>void, onFin?:()=>void}} cbs
 */
export function parlerSequence(segments, matiere, cbs = {}) {
  const { onIndex, onFin } = cbs;
  try {
    Speech.stop();
    const locale = localeMatiere(matiere);
    const liste = (segments || []).filter((s) => s && String(s).trim());
    let k = 0;
    const dire = () => {
      if (k >= liste.length) { if (onFin) onFin(); return; }
      if (onIndex) onIndex(k);
      const opts = {
        language: locale,
        rate: vitesseCourante,
        pitch: 1.0,
        onDone: () => { k += 1; dire(); },
        onError: () => { k += 1; dire(); },
      };
      if (voixChoisies[locale]) opts.voice = voixChoisies[locale];
      Speech.speak(String(liste[k]), opts);
    };
    if (liste.length === 0) { if (onFin) onFin(); return; }
    dire();
  } catch {
    if (onFin) onFin();
  }
}

/**
 * Convertit un Markdown de fiche en texte lisible à voix haute :
 * retire l'en-tête YAML, les balises Markdown, les tableaux et le LaTeX.
 */
export function texteBrut(markdown) {
  if (!markdown) return '';
  let s = String(markdown);
  s = s.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, ''); // en-tête YAML
  s = s.replace(/```[\s\S]*?```/g, ' ');               // blocs de code
  s = s.replace(/\$[^$]*\$/g, ' ');                    // LaTeX inline
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');          // images
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');        // liens → texte
  s = s.replace(/^\s*\|.*$/gm, ' ');                    // lignes de tableau
  s = s.replace(/[#>*_`~]/g, ' ');                       // symboles Markdown
  s = s.replace(/\r?\n{2,}/g, '. ').replace(/\r?\n/g, ' '); // sauts de ligne
  s = s.replace(/\s{2,}/g, ' ').trim();
  return s;
}
