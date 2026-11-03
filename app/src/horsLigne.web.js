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
 * Garde aussi l'appli elle-même (page d'accueil, code, styles). Sans cela, à la
 * toute première visite, la page et son code ont été chargés AVANT que le service
 * worker soit installé : ils ne sont pas en cache, et l'appli ouverte sans internet
 * n'affichait que « Hors connexion », même avec des chapitres téléchargés.
 * Les fichiers du code (nom avec empreinte) ne sont téléchargés qu'une fois ;
 * la page d'accueil est toujours rafraîchie.
 */
async function garderAppli() {
  if (!horsLigneDisponible() || typeof document === 'undefined') return;
  try {
    const c = await caches.open(CACHE);
    const portee = (await navigator.serviceWorker.getRegistration())?.scope ?? new URL('./', window.location.href).href;
    const balises = [...document.querySelectorAll('script[src], link[rel="stylesheet"][href], link[rel="manifest"][href], link[rel~="icon"][href]')]
      .map((el) => new URL(el.getAttribute('src') ?? el.getAttribute('href'), window.location.href).href);
    // Morceaux de code et images déjà chargés (écrans ouverts à la demande, icônes…).
    const charges = (performance.getEntriesByType?.('resource') ?? [])
      .map((e) => e.name.split('#')[0])
      .filter((u) => /\/(_expo\/static|assets)\//.test(u));
    const fichiers = [...new Set([...balises, ...charges])].filter((u) => u.startsWith(portee));
    await c.add(portee).catch(() => {});
    for (const u of fichiers) {
      if (!(await c.match(u))) await c.add(u).catch(() => {});
    }
  } catch {
    // Pas de cache disponible : les chapitres restent téléchargés, l'appli sera gardée à la prochaine visite.
  }
}

/**
 * Télécharge la fiche, les exercices, le QCM et les cartes de chaque chapitre
 * (le service worker en garde une copie). onProgression(fait, total) est appelé après chaque chapitre.
 * Renvoie le nombre de chapitres téléchargés sans erreur.
 */
export async function telechargerHorsLigne(ids, onProgression = () => {}) {
  await garderAppli();
  let ok = 0;
  for (let i = 0; i < ids.length; i += 1) {
    const [fiche] = await Promise.all([chargerFiche(ids[i]), chargerExercices(ids[i]), chargerQcm(ids[i]), chargerCartes(ids[i])]);
    if (fiche) ok += 1;
    onProgression(i + 1, ids.length);
  }
  return ok;
}
