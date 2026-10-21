/**
 * Hors connexion (web) : le service worker (public/sw.js) garde une copie de
 * l'appli et de chaque fiche / liste d'exercices téléchargée. Ce module permet de
 * télécharger d'avance tous les chapitres d'une liste, de savoir combien sont
 * déjà disponibles, et de suivre l'état du réseau.
 */
import { useEffect, useState } from 'react';
import { chargerFiche, chargerExercices, chargerQcm, chargerCartes, cheminDonnees } from './contenu-lourd';
import { chapitreParId } from './contenu-index';

const CACHE = 'kamal-campus-v1';

/** L'appareil peut-il garder des chapitres pour plus tard ? */
export function horsLigneDisponible() {
  return typeof navigator !== 'undefined' && 'serviceWorker' in navigator && typeof caches !== 'undefined';
}

/** true quand le navigateur est en ligne ; se met à jour tout seul. */
export function useEnLigne() {
  const [enLigne, setEnLigne] = useState(typeof navigator === 'undefined' ? true : navigator.onLine !== false);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const maj = () => setEnLigne(navigator.onLine !== false);
    window.addEventListener('online', maj);
    window.addEventListener('offline', maj);
    return () => {
      window.removeEventListener('online', maj);
      window.removeEventListener('offline', maj);
    };
  }, []);
  return enLigne;
}

/**
 * Nombre de chapitres de la liste déjà gardés sur l'appareil : la fiche ET le QCM
 * (un chapitre téléchargé avant que les QCM soient chargés à la demande n'a que
 * sa fiche : il est compté comme à télécharger de nouveau).
 */
export async function compterDisponibles(ids) {
  if (!horsLigneDisponible()) return 0;
  try {
    const c = await caches.open(CACHE);
    const cles = await c.keys();
    const urls = new Set(cles.map((r) => r.url));
    let n = 0;
    const liste = [...urls];
    for (const id of ids) {
      const chemin = cheminDonnees(id);
      const a = (f) => liste.some((u) => u.endsWith(`/donnees/${chemin}/${f}`));
      const avecQcm = (chapitreParId(id)?.nbQuestions ?? 0) > 0;
      if (chemin && a('fiche.md') && (!avecQcm || a('qcm.json'))) n += 1;
    }
    return n;
  } catch {
    return 0;
  }
}

/**
 * Télécharge la fiche, les exercices, le QCM et les cartes de chaque chapitre
 * (le service worker en garde une copie). onProgression(fait, total) est appelé après chaque chapitre.
 * Renvoie le nombre de chapitres téléchargés sans erreur.
 */
export async function telechargerHorsLigne(ids, onProgression = () => {}) {
  let ok = 0;
  for (let i = 0; i < ids.length; i += 1) {
    const [fiche] = await Promise.all([chargerFiche(ids[i]), chargerExercices(ids[i]), chargerQcm(ids[i]), chargerCartes(ids[i])]);
    if (fiche) ok += 1;
    onProgression(i + 1, ids.length);
  }
  return ok;
}
