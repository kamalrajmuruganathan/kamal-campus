/**
 * Bac blanc / brevet blanc — des QCM de révision qui mélangent plusieurs
 * chapitres d'un niveau. On choisit un quiz, on le passe dans le lecteur de
 * QCM habituel (correction immédiate, score, notions à revoir).
 */

import { useColorScheme } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { QUIZ, LIBELLES_NIVEAU } from '../contenu-index';

export default function BacBlanc({ navigation }) {
  const t = theme(useColorScheme() === 'dark');

  if (!QUIZ || QUIZ.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Aucun QCM de révision pour l'instant.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
          Des QCM de révision qui mélangent les chapitres d'un niveau — pour tester où tu en es.
        </Text>
        {QUIZ.map((q) => (
          <Carte
            key={q.id}
            t={t}
            titre={q.titre}
            sousTitre={`${q.examen || (LIBELLES_NIVEAU[q.niveau] ?? q.niveau)} · ${q.nbQuestions} questions`}
            couleur={couleurMatiere(t, q.matiere)}
            onPress={() => navigation.navigate('Qcm', { questions: q.questions, titre: q.titre })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
