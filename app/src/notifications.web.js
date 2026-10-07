/**
 * Notifications — version WEB (navigateur, GitHub Pages).
 *
 * expo-notifications ne sait pas programmer de rappels dans un navigateur. Ici on
 * utilise l'API Notification du navigateur + un petit service worker (public/sw.js) :
 *  - le rappel quotidien et les créneaux du planning sont programmés avec des
 *    minuteries tant que l'appli est ouverte (même dans un onglet en arrière-plan) ;
 *  - le message est personnalisé (cartes à réviser, série de jours) ;
 *  - un même rappel n'est jamais montré deux fois le même jour.
 * Limite honnête : si le navigateur est complètement fermé, rien ne s'affiche
 * (il faudrait un serveur de « push » pour cela).
 *
 * Mêmes fonctions exportées que src/notifications.js (version téléphone).
 */

import { compterCartesDues } from './coach';
import { dateLocale, serieAffichee } from '../lib/serie';

const MESSAGES = [
  'Quelques minutes de révision aujourd’hui ? Ta série t’attend. 🔥',
  'Un petit QCM pour valider ton objectif du jour ? 💪',
  'C’est l’heure de réviser ! 📚',
];

let minuteries = [];
let profilCourant = null;
let swPret = null;

const disponible = () => typeof window !== 'undefined' && 'Notification' in window;

/** Enregistre le service worker et le manifeste (appli installable sur l'écran d'accueil). */
function preparerPwa() {
  if (swPret || typeof document === 'undefined') return swPret;
  try {
    if (!document.querySelector('link[rel="manifest"]')) {
      const lien = document.createElement('link');
      lien.rel = 'manifest';
      lien.href = 'manifest.json';
      document.head.appendChild(lien);
    }
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const ico = document.createElement('link');
      ico.rel = 'apple-touch-icon';
      ico.href = 'icone-192.png';
      document.head.appendChild(ico);
    }
  } catch {
    // sans importance
  }
  swPret = ('serviceWorker' in navigator)
    ? navigator.serviceWorker.register('sw.js', { scope: './' }).catch(() => null)
    : Promise.resolve(null);
  return swPret;
}
preparerPwa();

/** Texte du rappel, personnalisé selon la progression. */
export function messageRappel(profil, jour = dateLocale(new Date())) {
  const p = profil || {};
  let dues = 0;
  try { dues = compterCartesDues(p.srs, jour); } catch { dues = 0; }
  const serie = serieAffichee(p.dernierJourValide, p.serieJours, jour);
  const dejaFait = p.dernierJourValide === jour;
  if (dues > 0) {
    return `Tu as ${dues.toLocaleString('fr-FR')} carte${dues > 1 ? 's' : ''} à réviser aujourd’hui. 🧠`;
  }
  if (serie > 1 && !dejaFait) return `Ta série de ${serie} jours t’attend : une révision rapide pour la garder ? 🔥`;
  return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
}

function dejaMontre(cle, jour) {
  try { return localStorage.getItem(`kc-rappel-${cle}`) === jour; } catch { return false; }
}
function noterMontre(cle, jour) {
  try { localStorage.setItem(`kc-rappel-${cle}`, jour); } catch { /* stockage indisponible */ }
}

async function afficher(titre, corps) {
  try {
    const reg = await preparerPwa();
    if (reg && reg.showNotification) {
      await reg.showNotification(titre, { body: corps, icon: 'icone-192.png', tag: 'kamal-campus' });
      return;
    }
  } catch {
    // on tente la notification simple
  }
  try {
    const n = new Notification(titre, { body: corps, icon: 'icone-192.png' });
    n.onclick = () => { window.focus(); n.close(); };
  } catch {
    // rien de plus à faire
  }
}

/** Millisecondes jusqu'à la prochaine occurrence de hh:mm (jourSemaine 1 = lundi … 7 = dimanche, ou tous les jours). */
export function delaiAvant(heure, jourSemaine, maintenant = new Date()) {
  const [h, m] = String(heure || '18:00').split(':').map(Number);
  const cible = new Date(maintenant);
  cible.setHours(h || 0, m || 0, 0, 0);
  if (jourSemaine) {
    const jourActuel = ((maintenant.getDay() + 6) % 7) + 1; // 1 = lundi
    let ecart = (jourSemaine - jourActuel + 7) % 7;
    if (ecart === 0 && cible <= maintenant) ecart = 7;
    cible.setDate(cible.getDate() + ecart);
  } else if (cible <= maintenant) {
    cible.setDate(cible.getDate() + 1);
  }
  return cible.getTime() - maintenant.getTime();
}

function programmer(cle, heure, jourSemaine, titre, corpsFn) {
  const armer = () => {
    const t = setTimeout(async () => {
      const jour = dateLocale(new Date());
      if (!dejaMontre(cle, jour)) {
        noterMontre(cle, jour);
        await afficher(titre, corpsFn());
      }
      armer(); // prochaine occurrence
    }, Math.max(1000, delaiAvant(heure, jourSemaine)));
    minuteries.push(t);
  };
  armer();
}

function toutAnnuler() {
  minuteries.forEach(clearTimeout);
  minuteries = [];
}

/** Demande la permission (si pas déjà accordée). @returns {Promise<boolean>} */
export async function demanderPermissionNotifs() {
  if (!disponible()) return false;
  try {
    if (Notification.permission === 'granted') return true;
    if (Notification.permission === 'denied') return false;
    return (await Notification.requestPermission()) === 'granted';
  } catch {
    return false;
  }
}

/** (Re)programme le rappel quotidien et les créneaux du planning. */
export async function appliquerNotifications(profil) {
  profilCourant = profil;
  toutAnnuler();
  const permis = await demanderPermissionNotifs();
  if (!permis) return false;
  if (profil.rappelActif) {
    programmer('quotidien', profil.rappelHeure || '18:00', null, 'Kamal Campus', () => messageRappel(profilCourant));
  }
  (profil.planning || []).forEach((s, i) => {
    const matiere = s.matiere || 'Révision';
    programmer(`planning-${i}`, s.heure || '17:00', s.jour || 1, `📚 ${matiere}`,
      () => `C’est l’heure de ${s.matiere || 'réviser'} ! Au travail 💪`);
  });
  return true;
}

/** Au lancement : reprogramme sans rien demander si la permission est déjà accordée. */
export async function resynchroniserSiPermis(profil) {
  profilCourant = profil;
  const aQuoi = profil.rappelActif || (profil.planning && profil.planning.length > 0);
  if (!aQuoi || !disponible() || Notification.permission !== 'granted') return false;
  return appliquerNotifications(profil);
}

/** Annule tous les rappels programmés. */
export async function desactiverRappels() {
  toutAnnuler();
  return true;
}
