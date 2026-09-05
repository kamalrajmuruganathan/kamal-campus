/**
 * À propos — présente l'application : ce qu'elle est, ce qu'elle contient,
 * ses sources, et l'avertissement sur la relecture. Le texte vit dans
 * src/apropos.md et est rendu comme une fiche (Markdown).
 */

import { useTheme } from '../useTheme';
import { useColorScheme } from 'react-native';
import { useSombre } from '../useSombre';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import apropos from '../apropos.md';

export default function APropos() {
  const t = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
        <VisionneuseFiche markdown={apropos} />
      </ScrollView>
    </SafeAreaView>
  );
}
