/**
 * Un chapitre : la fiche de cours, puis l'accès au QCM.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { chapitreParId } from '../contenu-index';

export default function Chapitre({ route, navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const chapitre = chapitreParId(route.params.id);
  const [onglet, setOnglet] = useState('fiche');

  if (!chapitre) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>
          Chapitre introuvable. Relance `npm run preparer` pour régénérer l’index.
        </Text>
      </SafeAreaView>
    );
  }

  const accent = couleurMatiere(t, chapitre.matiere);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
        {!chapitre.reluPar && (
          <View style={{ padding: t.espace.l, paddingBottom: 0 }}>
            <Bandeau
              t={t}
              texte={
                '⚠️ Fiche non relue par un professeur. Elle est rédigée à partir du programme officiel, ' +
                'mais compare avec ton cours avant un contrôle.'
              }
            />
          </View>
        )}

        <VisionneuseFiche markdown={chapitre.fiche} />

        <View style={{ paddingHorizontal: t.espace.l }}>
          <Pressable
            onPress={() => navigation.navigate('Qcm', { id: chapitre.id, titre: chapitre.titre })}
            accessibilityRole="button"
            style={({ pressed }) => [
              st.bouton,
              {
                backgroundColor: accent,
                borderRadius: t.rayon.m,
                paddingVertical: t.espace.m,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>
              Passer au QCM · {chapitre.nbQuestions} questions
            </Text>
          </Pressable>

          <Text
            style={{
              color: t.couleur.attenue,
              fontSize: t.police.minuscule,
              marginTop: t.espace.m,
              textAlign: 'center',
            }}
          >
            {chapitre.programme}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  bouton: { alignItems: 'center', justifyContent: 'center' },
});
