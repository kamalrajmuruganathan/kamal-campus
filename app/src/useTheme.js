/**
 * Thème effectif de l'appli, réglages d'accessibilité compris.
 *
 * Combine la préférence d'apparence (clair / sombre / système) et les réglages
 * d'accessibilité stockés dans le profil : taille du texte, contraste renforcé,
 * et (web) police adaptée, interligne et animations réduites.
 * Tous les écrans utilisent ce hook, de sorte qu'un seul réglage se répercute
 * partout, hors ligne, sans redémarrage.
 */
import { theme } from './theme';
import { useSombre } from './useSombre';
import { useProgression } from './progression/Contexte';
import { useAccessibiliteWeb } from './accessibiliteWeb';

export function useTheme() {
  const sombre = useSombre();
  const profil = useProgression().profil || {};
  const t = theme(sombre, {
    taille: profil.tailleTexte || 'normale',
    contraste: !!profil.contrasteFort,
  });
  // Web : focus visible, police adaptée, interligne, animations réduites (feuille globale).
  useAccessibiliteWeb(profil, t.couleur.accent);
  return t;
}
