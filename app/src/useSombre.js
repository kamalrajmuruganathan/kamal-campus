/**
 * Thème effectif de l'appli : suit la préférence de l'utilisateur
 * (clair / sombre / système), stockée dans le profil. Repli sur le thème
 * du système si aucune préférence explicite.
 */

import { useColorScheme } from 'react-native';
import { useProgression } from './progression/Contexte';

export function useSombre() {
  const systeme = useColorScheme() === 'dark';
  const pref = useProgression().profil?.themePref || 'systeme';
  if (pref === 'clair') return false;
  if (pref === 'sombre') return true;
  return systeme;
}
