/**
 * Réglages d'accessibilité appliqués à toute l'appli web (react-native-web) :
 * focus visible au clavier, police adaptée à la dyslexie (chargée seulement si le
 * réglage est actif), interligne plus grand, animations réduites.
 * Une seule feuille de style <style id="kc-accessibilite">, mise à jour quand un
 * réglage change. Les fiches (iframes) reçoivent la même feuille : voir
 * VisionneuseFiche.web.js et cssFiche ci-dessous.
 */

import { useEffect } from 'react';
import { cssAccessibilite, cssPolice, reglagesAffichage } from '../lib/accessibilite/index.js';

let derniere = null;

/** Adresse absolue du dossier des polices (public/polices, servi à côté de l'appli). */
export function basePolices() {
  try { return new URL('polices/', window.location.href).href; } catch (e) { return 'polices/'; }
}

function feuille(r, accent) {
  return [
    r.policeAdaptee ? cssPolice(basePolices()) : '',
    // Les textes de react-native-web sont des <div dir="auto"> ; les champs, des <input>/<textarea>.
    cssAccessibilite(r, { racine: '#root', texte: '*', lignes: '[dir="auto"]', accent }),
  ].join('\n');
}

export function appliquerAccessibiliteWeb(profil, accent) {
  if (typeof document === 'undefined') return;
  const css = feuille(reglagesAffichage(profil), accent);
  if (css === derniere) return;
  derniere = css;
  let el = document.getElementById('kc-accessibilite');
  if (!el) {
    el = document.createElement('style');
    el.id = 'kc-accessibilite';
    document.head.appendChild(el);
  }
  el.textContent = css;
}

/** Feuille à poser dans une fiche (iframe) : mêmes réglages, taille du texte comprise. */
export function cssFiche(profil, accent) {
  const r = reglagesAffichage(profil);
  return (r.policeAdaptee ? cssPolice(basePolices()) : '') + '\n' + cssAccessibilite(r, { accent, fiche: true });
}

/** Hook appelé par useTheme : la feuille suit le profil. */
export function useAccessibiliteWeb(profil, accent) {
  const cle = JSON.stringify(reglagesAffichage(profil)) + accent;
  useEffect(() => { appliquerAccessibiliteWeb(profil, accent); }, [cle]); // eslint-disable-line react-hooks/exhaustive-deps
}

// Dès le chargement (écran de connexion compris) : focus visible.
appliquerAccessibiliteWeb({}, '#1d67db');
