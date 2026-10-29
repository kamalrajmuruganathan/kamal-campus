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
import { CHAPITRES, FORMULAIRES, SUJETS, QUIZ } from '../contenu-index';

// Les chiffres de « En chiffres » sont calculés à partir de l'index du contenu
// (ils se mettaient à dater à chaque ajout de chapitres).
const nombre = (n) => n.toLocaleString('fr-FR').replace(/\s/g, '\u00a0');
const somme = (champ) => CHAPITRES.reduce((s, c) => s + (Number(c[champ]) || 0), 0);
const CHIFFRES = {
  chapitres: CHAPITRES.length,
  matieres: new Set(CHAPITRES.map((c) => c.matiere)).size,
  questions: somme('nbQuestions'),
  exercices: somme('nbExercices'),
  cartes: somme('nbFlashcards'),
  outils: CHAPITRES.filter((c) => Array.isArray(c.outils) && c.outils.length > 0).length,
  formulaires: FORMULAIRES.length,
  sujets: SUJETS.length,
  quiz: QUIZ.length,
};
const texte = apropos.replace(/\{\{(\w+)\}\}/g, (m, cle) => (cle in CHIFFRES ? nombre(CHIFFRES[cle]) : m));

export default function APropos() {
  const t = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
        <VisionneuseFiche markdown={texte} />
      </ScrollView>
    </SafeAreaView>
  );
}
