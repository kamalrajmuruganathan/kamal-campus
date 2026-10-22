/**
 * Partage d'une vue sous forme d'image (carte de résultats).
 * Capture la vue référencée en PNG puis ouvre la feuille de partage du système.
 * Défensif : renvoie false sans casser si une brique manque (aperçu web, etc.).
 */

import * as Sharing from 'expo-sharing';

export async function partagerVue(ref) {
  try {
    if (!ref || !ref.current) return false;
    // Chargé seulement au moment de partager (sur le web, il embarque html2canvas, ≈ 200 Ko).
    const { captureRef } = await import('react-native-view-shot');
    const uri = await captureRef(ref, { format: 'png', quality: 0.95, result: 'tmpfile' });
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri, { mimeType: 'image/png', dialogTitle: 'Mon score Kamal Campus' });
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
