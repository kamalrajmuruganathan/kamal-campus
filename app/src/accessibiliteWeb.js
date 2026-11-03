/**
 * Version native (iOS, Android) : rien à injecter. Les réglages de taille et de
 * contraste passent par le thème ; la police adaptée et l'interligne ne
 * s'appliquent pour l'instant que sur le web (voir accessibiliteWeb.web.js).
 */
import { reglagesAffichage } from '../lib/accessibilite/index.js';

export function appliquerAccessibiliteWeb() {}
export function basePolices() { return ''; }
export function cssFiche(profil) {
  const r = reglagesAffichage(profil);
  const css = [];
  if (r.interligne) css.push('body *:not(.katex *){line-height:1.6 !important;word-spacing:.12em !important;}');
  if (r.animationsReduites) css.push('*{animation:none !important;transition:none !important;}');
  const f = { grande: 1.18, 'tres-grande': 1.36 }[r.taille];
  if (f) css.push(`body{font-size:${Math.round(16 * f)}px !important;}`);
  return css.join('\n');
}
export function useAccessibiliteWeb() {}
