/**
 * Synthèse vocale (lecture à voix haute) — hors ligne, via la voix intégrée du
 * téléphone (expo-speech). Sert surtout aux langues vivantes : entendre un mot
 * ou une phrase dans la bonne langue.
 *
 * Tout est défensif : si la brique est indisponible (aperçu web, voix absente),
 * les fonctions ne lèvent pas — elles ne font simplement rien.
 */

import * as Speech from 'expo-speech';
import { LANGUES_PARLEES, latexEnMots } from '../lib/lecture';

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
    case 'italien': return 'it-IT';
    default: return 'fr-FR';
  }
}

/** Cette matière profite-t-elle de la lecture à voix haute ? (langues vivantes) */
export function matiereParlante(matiere) {
  return LANGUES_PARLEES.includes(matiere);
}

/**
 * Lit `texte` à voix haute dans la langue de `matiere`.
 * Options : `vitesse` ('lent' | 'normal' | 'rapide') pour cette lecture seulement
 * (sinon la préférence du profil), `onFin` appelé quand la lecture se termine.
 */
export function parler(texte, matiere, { vitesse = null, onFin = null } = {}) {
  try {
    if (!texte) return;
    lectureCourante++;
    Speech.stop();
    const locale = localeMatiere(matiere);
    const rate = vitesse ? (VITESSES[vitesse] ?? vitesseCourante) : vitesseCourante;
    const opts = { language: locale, rate, pitch: 1.0 };
    if (onFin) { opts.onDone = onFin; opts.onStopped = onFin; opts.onError = onFin; }
    if (voixChoisies[locale]) opts.voice = voixChoisies[locale];
    Speech.speak(String(texte), opts);
  } catch {
    // brique indisponible : on ignore silencieusement
    if (onFin) onFin();
  }
}

/** Coupe la lecture en cours. */
export function arreterParole() {
  lectureCourante++;
  try { Speech.stop(); } catch { /* ignore */ }
}

/**
 * Lit une SÉQUENCE de segments l'un après l'autre (mode podcast). Enchaîne au
 * segment suivant quand le précédent est terminé.
 * @param {string[]} segments textes à lire dans l'ordre
 * @param {string} matiere    pour la langue de la voix
 * @param {{onIndex?:(i:number)=>void, onFin?:()=>void}} cbs
 */
// Numéro de la lecture en cours : une nouvelle lecture (ou un arrêt) rend caduques
// les rappels de la précédente, qui ne doit pas enchaîner sur sa phrase suivante.
let lectureCourante = 0;

export function parlerSequence(segments, matiere, cbs = {}) {
  const { onIndex, onFin } = cbs;
  const moi = ++lectureCourante;
  try {
    Speech.stop();
    // Un segment peut porter sa propre langue : { texte, langue } (voir lib/lecture).
    const liste = (segments || [])
      .map((s) => (s && typeof s === 'object' ? s : { texte: s, langue: matiere }))
      .filter((s) => s.texte && String(s.texte).trim());
    let k = 0;
    const dire = () => {
      if (moi !== lectureCourante) { if (onFin) onFin(); return; }
      if (k >= liste.length) { if (onFin) onFin(); return; }
      if (onIndex) onIndex(k);
      const locale = localeMatiere(liste[k].langue);
      const opts = {
        language: locale,
        rate: vitesseCourante,
        pitch: 1.0,
        onDone: () => { k += 1; dire(); },
        onError: () => { k += 1; dire(); },
      };
      if (voixChoisies[locale]) opts.voice = voixChoisies[locale];
      Speech.speak(String(liste[k].texte), opts);
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
  s = s.replace(/\$([^$]*)\$/g, (_, f) => ` ${latexEnMots(f)} `); // formules lues en mots
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');          // images
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');        // liens → texte
  s = s.replace(/^\s*\|.*$/gm, ' ');                    // lignes de tableau
  s = s.replace(/[#>*_`~]/g, ' ');                       // symboles Markdown
  s = s.replace(/\r?\n{2,}/g, '. ').replace(/\r?\n/g, ' '); // sauts de ligne
  s = s.replace(/\s{2,}/g, ' ').trim();
  return s;
}
