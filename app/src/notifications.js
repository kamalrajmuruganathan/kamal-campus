/**
 * Notifications locales (hors ligne, sans serveur) : rappel quotidien + planning
 * de révision hebdomadaire.
 *
 * On gère TOUTES les notifications d'un seul endroit : `appliquerNotifications`
 * annule tout puis reprogramme (a) le rappel quotidien si actif, (b) un créneau
 * répété chaque semaine pour chaque entrée du planning. Tout est défensif : si la
 * permission est refusée ou la brique indisponible (aperçu Expo Go), on renvoie
 * simplement false sans casser l'appli.
 */

import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

// Depuis le SDK 52, chaque déclencheur doit préciser son type (sinon TypeError).
const TYPES = Notifications.SchedulableTriggerInputTypes ?? { DAILY: 'daily', WEEKLY: 'weekly' };
const CANAL = 'rappels';

/** « 18:30 » → { hour: 18, minute: 30 } (valeurs par défaut si l'heure est illisible). */
function heureMinute(texte, defaut) {
  const [h, m] = String(texte || defaut).split(':').map(Number);
  return {
    hour: Number.isInteger(h) && h >= 0 && h <= 23 ? h : Number(defaut.split(':')[0]),
    minute: Number.isInteger(m) && m >= 0 && m <= 59 ? m : 0,
  };
}

/** Android 8+ : une notification doit appartenir à un canal (créé avant la demande de permission). */
async function preparerCanal() {
  if (Platform.OS !== 'android') return;
  try {
    await Notifications.setNotificationChannelAsync(CANAL, {
      name: 'Rappels de révision',
      importance: Notifications.AndroidImportance?.DEFAULT ?? 3,
    });
  } catch {
    // brique indisponible : on ignore
  }
}

// Affiche la notification même quand l'appli est au premier plan.
try {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
} catch {
  // brique indisponible : on ignore
}

const MESSAGES = [
  "C'est l'heure de tes maths ! 🔥 Garde ta série.",
  'Quelques minutes de révision aujourd’hui ? Ta série t’attend. 🔥',
  'Un petit QCM pour valider ton objectif du jour ? 💪',
];

/** Notre jour (1 = lundi … 7 = dimanche) → weekday Expo (1 = dimanche … 7 = samedi). */
function jourVersExpo(jour) {
  return jour === 7 ? 1 : jour + 1;
}

/** Demande la permission (si pas déjà accordée). @returns {Promise<boolean>} */
export async function demanderPermissionNotifs() {
  try {
    await preparerCanal();
    const perm = await Notifications.getPermissionsAsync();
    if (perm.status === 'granted') return true;
    const demande = await Notifications.requestPermissionsAsync();
    return demande.status === 'granted';
  } catch {
    return false;
  }
}

/**
 * (Re)programme toutes les notifications à partir du profil : rappel quotidien
 * + créneaux du planning. Annule d'abord tout l'existant.
 * @returns {Promise<boolean>} true si la permission est accordée, false sinon.
 */
export async function appliquerNotifications(profil) {
  try {
    const permis = await demanderPermissionNotifs();
    await Notifications.cancelAllScheduledNotificationsAsync();
    if (!permis) return false;

    // Rappel quotidien
    if (profil.rappelActif) {
      const { hour, minute } = heureMinute(profil.rappelHeure, '18:00');
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Kamal Campus',
          body: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
        },
        trigger: { type: TYPES.DAILY, hour, minute, channelId: CANAL },
      });
    }

    // Planning de révision — un créneau répété chaque semaine
    for (const s of profil.planning || []) {
      const { hour, minute } = heureMinute(s.heure, '17:00');
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `📚 ${s.matiere || 'Révision'}`,
          body: `C'est l'heure de ${s.matiere || 'réviser'} ! Au travail 💪`,
        },
        trigger: {
          type: TYPES.WEEKLY,
          weekday: jourVersExpo(s.jour || 1),
          hour,
          minute,
          channelId: CANAL,
        },
      });
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Resynchronise les notifications au lancement SANS demander la permission :
 * ne fait rien si la permission n'est pas déjà accordée (évite un pop-up au
 * démarrage). Utile pour restaurer le planning après un redémarrage de l'OS.
 */
export async function resynchroniserSiPermis(profil) {
  try {
    const aQuoi = profil.rappelActif || (profil.planning && profil.planning.length > 0);
    if (!aQuoi) return false;
    const perm = await Notifications.getPermissionsAsync();
    if (perm.status !== 'granted') return false;
    return appliquerNotifications(profil);
  } catch {
    return false;
  }
}

/** Annule tous les rappels programmés. */
export async function desactiverRappels() {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    return true;
  } catch {
    return false;
  }
}
