/**
 * Partage d'une vue sous forme d'image — version WEB.
 *
 * expo-sharing ne sait pas partager un fichier sur la plupart des navigateurs
 * d'ordinateur : l'appli affichait alors « Partage indisponible ». Ici, on
 * capture la carte en PNG, puis :
 *  - si le navigateur sait partager un fichier (téléphone), on ouvre sa feuille de partage ;
 *  - sinon, on télécharge l'image (« mon-score-kamal-campus.png »).
 * Renvoie false seulement si la capture elle-même échoue.
 */

const NOM = 'mon-score-kamal-campus.png';

export async function partagerVue(ref) {
  try {
    if (!ref || !ref.current || typeof document === 'undefined') return false;
    // Chargé seulement au moment de partager (embarque html2canvas, ≈ 200 Ko).
    const { captureRef } = await import('react-native-view-shot');
    const dataUrl = await captureRef(ref, { format: 'png', quality: 0.95, result: 'data-uri' });
    if (typeof navigator !== 'undefined' && navigator.canShare && typeof File !== 'undefined') {
      const blob = await (await fetch(dataUrl)).blob();
      const fichier = new File([blob], NOM, { type: 'image/png' });
      if (navigator.canShare({ files: [fichier] })) {
        try {
          await navigator.share({ files: [fichier], title: 'Mon score Kamal Campus' });
          return true;
        } catch (e) {
          if (e && e.name === 'AbortError') return true; // l'élève a fermé la feuille de partage
          // autre refus : on retombe sur le téléchargement
        }
      }
    }
    const lien = document.createElement('a');
    lien.href = dataUrl;
    lien.download = NOM;
    document.body.appendChild(lien);
    lien.click();
    lien.remove();
    return true;
  } catch {
    return false;
  }
}
