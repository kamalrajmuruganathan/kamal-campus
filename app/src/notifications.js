/**
 * Rappels quotidiens — notifications locales (hors ligne, sans serveur).
 *
 * On programme UNE notification répétée chaque jour à l'heure choisie. Tout est
 * défensif : si la permission est refusée ou la brique indisponible (aperçu
 * Expo Go, etc.), les fonctions renvoient simplement false sans casser l'appli.
 */

import * as Notifications from 'expo-notifications';

// Affiche la notification même quand l'appli est au premier plan.
try {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
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

/**
 * Active (ou reprogramme) le rappel quotidien à l'heure 'HH:MM'.
 * @returns {Promise<boolean>} true si programmé, false sinon (permission, erreur).
 */
export async function activerRappelQuotidien(heure) {
  try {
    const perm = await Notifications.getPermissionsAsync();
    let statut = perm.status;
    if (statut !== 'granted') {
      const demande = await Notifications.requestPermissionsAsync();
      statut = demande.status;
    }
    if (statut !== 'granted') return false;

    const [h, m] = String(heure).split(':').map(Number);
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Kamal Campus',
        body: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
      },
      trigger: { hour: h || 18, minute: m || 0, repeats: true },
    });
    return true;
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
