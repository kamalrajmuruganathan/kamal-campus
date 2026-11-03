/**
 * Accessibilité — logique pure (testée dans accessibilite.test.js).
 *
 *  - sansEmoji : « 📒 Mon carnet d’erreurs » → « Mon carnet d’erreurs » (nom lu par le
 *    lecteur d'écran sans « emoji livre ouvert ») ;
 *  - texteLisible : énoncé Markdown + LaTeX → texte simple (« $x^2$ » → « x au carré »),
 *    pour l'étiquette d'un bouton dont le contenu est une formule ;
 *  - reglagesAffichage : réglages d'affichage du profil, normalisés (police adaptée,
 *    interligne, animations réduites, taille, contraste) ;
 *  - cssAccessibilite : feuille de style web correspondante (focus visible, police,
 *    interligne, animations), appliquée à l'appli et aux fiches.
 */

import { formulesEnMots } from '../lecture/index.js';

// Pictogrammes, sélecteurs de variante, liants (ZWJ), drapeaux, touches « 1️⃣ ».
const EMOJI = /(?:\p{Extended_Pictographic}|[\u2713\u2715\u2717]|\p{Regional_Indicator}|[\u{1F3FB}-\u{1F3FF}]|\u20E3|\uFE0F|\uFE0E|\u200D)/gu;

/** Retire les emojis (décoratifs) d'un libellé et nettoie les espaces. */
export function sansEmoji(texte) {
  return String(texte ?? '')
    .replace(EMOJI, '')
    .replace(/\s+/g, ' ')
    .replace(/^[\s·:–—-]+|[\s·:–—-]+$/g, '')
    .trim();
}

/** Texte simple, lisible par un lecteur d'écran, d'un petit texte Markdown + LaTeX. */
export function texteLisible(markdown) {
  return sansEmoji(
    formulesEnMots(String(markdown ?? ''))
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/<\/?[a-zA-Z][^<>]*>/g, ' ')
      .replace(/(\*\*|__|`)/g, '')
      .replace(/(^|[\s(])[*_]([^*_\n]+)[*_](?=[\s).,;:!?]|$)/g, '$1$2')
      .replace(/^\s*(?:[-*+]|#{1,6})\s+/gm, '')
      .replace(/\s*\n+\s*/g, ' '),
  );
}

export const POLICE_ADAPTEE = 'Atkinson Hyperlegible';

/** Réglages d'affichage normalisés (valeurs absentes = réglage par défaut). */
export function reglagesAffichage(profil) {
  const p = profil && typeof profil === 'object' ? profil : {};
  return {
    taille: ['grande', 'tres-grande'].includes(p.tailleTexte) ? p.tailleTexte : 'normale',
    contraste: !!p.contrasteFort,
    policeAdaptee: !!p.policeDyslexie,
    interligne: !!p.interligneLarge,
    animationsReduites: !!p.animationsReduites,
  };
}

/** Facteur d'agrandissement du texte (même échelle que src/theme.js). */
export const FACTEUR_TAILLE = { normale: 1, grande: 1.18, 'tres-grande': 1.36 };

/**
 * Règles @font-face de la police adaptée (fichiers servis dans `base`, ex. « …/polices/ »).
 * Sous-ensembles latin et latin étendu : tous les caractères du français (é, œ, ç…).
 */
export function cssPolice(base) {
  const b = String(base || '');
  const LATIN = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
  const EXT = 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF';
  const face = (sous, graisse, plage) => `@font-face{font-family:"${POLICE_ADAPTEE}";font-style:normal;font-display:swap;`
    + `font-weight:${graisse};src:url("${b}atkinson-hyperlegible-${sous}-${graisse}-normal.woff2") format("woff2");unicode-range:${plage};}`;
  return [face('latin', 400, LATIN), face('latin', 700, LATIN), face('latin-ext', 400, EXT), face('latin-ext', 700, EXT)].join('\n');
}

/**
 * Feuille de style des réglages, pour un document web.
 * @param {object} r        réglages (reglagesAffichage)
 * @param {object} options  { racine : conteneur ; texte : éléments qui prennent la police ;
 *                            lignes : éléments qui prennent l'interligne ; accent : couleur du focus ;
 *                            fiche : vrai dans une fiche (taille du texte appliquée au corps) }
 */
export function cssAccessibilite(r, { racine = 'body', texte = '*', lignes = '*', accent = '#1d67db', fiche = false } = {}) {
  const css = [
    // Focus toujours visible au clavier (jamais à la souris ou au doigt).
    `:focus-visible{outline:3px solid ${accent} !important;outline-offset:2px !important;}`,
    // Animations : réduites si le système le demande, ou si l'élève l'a choisi.
    '@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important;}}',
  ];
  if (r.animationsReduites) {
    css.push('*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important;}');
  }
  if (r.policeAdaptee) {
    css.push(`${racine} ${texte}:not(.katex):not(.katex *):not(code):not(pre){font-family:"${POLICE_ADAPTEE}",Verdana,system-ui,sans-serif !important;}`);
  }
  if (r.interligne) {
    // Proche du critère WCAG 1.4.12 (espacement du texte) : interligne 1,6, espaces entre mots.
    css.push(`${racine} ${lignes}:not(.katex *){line-height:1.6 !important;word-spacing:.12em !important;letter-spacing:.02em !important;}`);
    if (fiche) css.push('p,li{margin-bottom:1.1em !important;}');
  }
  if (fiche) {
    const f = FACTEUR_TAILLE[r.taille] || 1;
    if (f !== 1) css.push(`body{font-size:${Math.round(16 * f)}px !important;}`);
  }
  return css.join('\n');
}
