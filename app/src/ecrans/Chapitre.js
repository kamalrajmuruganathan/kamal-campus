/**
 * Un chapitre : la fiche de cours, puis l'accès aux trois autres briques —
 * Exercices, QCM et Outils de calcul. La fiche EST le cours ; les trois boutons
 * mènent aux autres modes. Le bouton Outils n'apparaît que si le chapitre
 * déclare un outil (outil.json), et il ouvre l'écran Outils sur ce ou ces outils.
 */

import { useTheme } from '../useTheme';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import BoutonEcouter from '../composants/BoutonEcouter';
import { matiereParlante, texteBrut } from '../parole';
import { chapitreParId } from '../contenu-index';
import { useProgression } from '../progression/Contexte';

export default function Chapitre({ route, navigation }) {
  const t = useTheme();
  const { profil, basculerFavori } = useProgression();
  const chapitre = chapitreParId(route.params.id);

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
  const estFavori = (profil.favoris || []).includes(chapitre.id);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
        <Pressable
          onPress={() => basculerFavori(chapitre.id)}
          accessibilityRole="button"
          accessibilityLabel={estFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          style={{ alignSelf: 'flex-end', paddingHorizontal: t.espace.l, paddingTop: t.espace.m }}
        >
          <Text style={{ fontSize: 24 }}>{estFavori ? '⭐' : '☆'}</Text>
        </Pressable>

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

        {matiereParlante(chapitre.matiere) && (
          <View style={{ paddingHorizontal: t.espace.l, paddingTop: t.espace.m }}>
            <BoutonEcouter t={t} matiere={chapitre.matiere} texte={texteBrut(chapitre.fiche)} libelle="Écouter la fiche" />
          </View>
        )}

        <VisionneuseFiche markdown={chapitre.fiche} />

        <View style={{ paddingHorizontal: t.espace.l }}>
          <Pressable
            onPress={() => navigation.navigate('Podcast', { id: chapitre.id, titre: chapitre.titre })}
            accessibilityRole="button"
            style={({ pressed }) => [
              st.bouton,
              {
                backgroundColor: t.couleur.surface,
                borderWidth: 1,
                borderColor: accent,
                borderRadius: t.rayon.m,
                paddingVertical: t.espace.m,
                marginBottom: t.espace.m,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text style={{ color: accent, fontSize: t.police.moyenne, fontWeight: '650' }}>
              🎧 Écouter en podcast
            </Text>
          </Pressable>
          {chapitre.nbExercices > 0 && (
            <Pressable
              onPress={() => navigation.navigate('Exercices', { id: chapitre.id, titre: chapitre.titre })}
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
                Exercices · {chapitre.nbExercices}
              </Text>
            </Pressable>
          )}

          {chapitre.nbFlashcards > 0 && (
            <Pressable
              onPress={() => navigation.navigate('Flashcards', { id: chapitre.id, titre: chapitre.titre })}
              accessibilityRole="button"
              style={({ pressed }) => [
                st.bouton,
                {
                  backgroundColor: 'transparent',
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: accent,
                  borderRadius: t.rayon.m,
                  paddingVertical: t.espace.m,
                  marginTop: t.espace.m,
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text style={{ color: accent, fontSize: t.police.moyenne, fontWeight: '650' }}>
                Cartes de révision · {chapitre.nbFlashcards}
              </Text>
            </Pressable>
          )}

          <Pressable
            onPress={() => navigation.navigate('Qcm', { id: chapitre.id, titre: chapitre.titre })}
            accessibilityRole="button"
            style={({ pressed }) => [
              st.bouton,
              {
                backgroundColor: accent,
                borderRadius: t.rayon.m,
                paddingVertical: t.espace.m,
                marginTop: t.espace.m,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>
              QCM · {chapitre.nbQuestions} questions
            </Text>
          </Pressable>

          {chapitre.outils?.length > 0 && (
            <Pressable
              onPress={() => navigation.navigate('Outils', { outils: chapitre.outils, titre: chapitre.titre })}
              accessibilityRole="button"
              style={({ pressed }) => [
                st.bouton,
                {
                  backgroundColor: 'transparent',
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: accent,
                  borderRadius: t.rayon.m,
                  paddingVertical: t.espace.m,
                  marginTop: t.espace.m,
                  opacity: pressed ? 0.7 : 1,
                },
              ]}
            >
              <Text style={{ color: accent, fontSize: t.police.moyenne, fontWeight: '650' }}>
                Outils de calcul
              </Text>
            </Pressable>
          )}

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
