/**
 * Exercices d'un chapitre : énoncés, et corrigé révélable pas à pas.
 *
 * Comme la fiche, chaque énoncé et chaque corrigé est rendu en Markdown + LaTeX
 * dans une WebView (composant VisionneuseFiche), pour que les formules
 * s'affichent correctement et hors ligne. Le corrigé reste caché tant que
 * l'élève ne l'a pas demandé : chercher d'abord, vérifier ensuite.
 */

import { useTheme } from '../useTheme';
import { useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Bandeau, Etiquette } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import BoutonEcouter from '../composants/BoutonEcouter';
import { matiereParlante } from '../parole';
import { chapitreParId } from '../contenu-index';

const LIBELLE_DIFFICULTE = {
  decouverte: 'Découverte',
  application: 'Application',
  intermediaire: 'Intermédiaire',
  approfondissement: 'Approfondissement',
  probleme: 'Problème',
  // tolérance aux valeurs du QCM si un chapitre les réutilise
  facile: 'Application',
  moyen: 'Intermédiaire',
  difficile: 'Approfondissement',
};

/** Assemble le corrigé (étapes + réponse) en un seul Markdown. */
function corrigeMarkdown(ex) {
  const etapes = Array.isArray(ex.corrige) ? ex.corrige : [ex.corrige].filter(Boolean);
  let md = '**Corrigé**\n\n';
  md += etapes.map((e, i) => `${i + 1}. ${e}`).join('\n\n');
  if (ex.reponse) md += `\n\n**Réponse.** ${ex.reponse}`;
  return md;
}

function CarteExercice({ ex, index, t, accent, matiere }) {
  const [ouvert, setOuvert] = useState(false);
  const enonce = `**Exercice ${index + 1}.** ${ex.enonce}`;

  return (
    <View
      style={{
        marginHorizontal: t.espace.l,
        marginTop: t.espace.l,
        borderRadius: t.rayon.m,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: t.couleur.trait,
        backgroundColor: t.couleur.surface,
        overflow: 'hidden',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: t.espace.m, paddingBottom: 0 }}>
        <Etiquette
          texte={LIBELLE_DIFFICULTE[ex.difficulte] ?? 'Exercice'}
          couleurFond={accent + '22'}
          couleurTexte={accent}
          t={t}
        />
      </View>

      <VisionneuseFiche markdown={enonce} />

      {matiereParlante(matiere) && (
        <View style={{ paddingHorizontal: t.espace.m, paddingBottom: t.espace.s }}>
          <BoutonEcouter t={t} matiere={matiere} texte={ex.enonce} libelle="Écouter l'énoncé" />
        </View>
      )}

      <Pressable
        onPress={() => setOuvert((v) => !v)}
        accessibilityRole="button"
        style={({ pressed }) => [
          {
            marginHorizontal: t.espace.m,
            marginBottom: t.espace.m,
            paddingVertical: t.espace.s,
            borderRadius: t.rayon.s,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: accent,
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        <Text style={{ color: accent, textAlign: 'center', fontWeight: '650', fontSize: t.police.petite }}>
          {ouvert ? 'Masquer le corrigé' : 'Afficher le corrigé'}
        </Text>
      </Pressable>

      {ouvert && <VisionneuseFiche markdown={corrigeMarkdown(ex)} />}
    </View>
  );
}

export default function Exercices({ route }) {
  const t = useTheme();
  const chapitre = chapitreParId(route.params.id);

  if (!chapitre || !chapitre.exercice || !chapitre.exercice.exercices?.length) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>
          Pas encore d’exercices pour ce chapitre.
        </Text>
      </SafeAreaView>
    );
  }

  const accent = couleurMatiere(t, chapitre.matiere);
  const exos = chapitre.exercice.exercices;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
        {!chapitre.reluPar && (
          <View style={{ padding: t.espace.l, paddingBottom: 0 }}>
            <Bandeau
              t={t}
              texte={
                '⚠️ Exercices non relus par un professeur. Ils sont rédigés à partir du ' +
                'programme officiel ; vérifie la méthode avec ton cours.'
              }
            />
          </View>
        )}

        <Text
          style={{
            color: t.couleur.attenue,
            fontSize: t.police.petite,
            paddingHorizontal: t.espace.l,
            paddingTop: t.espace.l,
          }}
        >
          {exos.length} exercices · cherche d’abord, le corrigé se déplie ensuite.
        </Text>

        {exos.map((ex, i) => (
          <CarteExercice key={ex.id ?? i} ex={ex} index={i} t={t} accent={accent} matiere={chapitre.matiere} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
