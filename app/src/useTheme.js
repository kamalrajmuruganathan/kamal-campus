/**
 * Thème effectif de l'appli, réglages d'accessibilité compris.
 *
 * Combine la préférence d'apparence (clair / sombre / système) et les réglages
 * d'accessibilité stockés dans le profil : taille du texte et contraste renforcé.
 * Tous les écrans utilisent ce hook, de sorte qu'un seul réglage se répercute
 * partout, hors ligne, sans redémarrage.
 */
import { theme } from './theme';
import { useSombre } from './useSombre';
import { useProgression } from './progression/Contexte';

export function useTheme() {
  const sombre = useSombre();
  const profil = useProgression().profil || {};
  return theme(sombre, {
    taille: profil.tailleTexte || 'normale',
    contraste: !!profil.contrasteFort,
  });
}
