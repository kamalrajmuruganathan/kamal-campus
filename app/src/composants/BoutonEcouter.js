/**
 * Petit bouton « Écouter 🔊 » : lit un texte à voix haute dans la langue de la
 * matière (synthèse vocale hors ligne). N'apparaît que pour les matières où
 * l'oral a du sens (langues vivantes) — l'écran décide de l'afficher ou non.
 */

import { Pressable, Text } from 'react-native';
import { parler } from '../parole';

export default function BoutonEcouter({ t, texte, matiere, libelle = 'Écouter' }) {
  return (
    <Pressable
      onPress={() => parler(texte, matiere)}
      accessibilityRole="button"
      accessibilityLabel={`${libelle} en ${matiere}`}
      hitSlop={8}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: t.couleur.trait,
        backgroundColor: pressed ? t.couleur.surfaceHaute ?? t.couleur.surface : t.couleur.surface,
      })}
    >
      <Text style={{ fontSize: 15 }}>🔊</Text>
      <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, fontWeight: '700' }}>{libelle}</Text>
    </Pressable>
  );
}
