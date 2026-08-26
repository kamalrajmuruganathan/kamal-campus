/**
 * Formulaires — les aide-mémoire « à savoir par cœur », par niveau et matière.
 *
 * Liste de tous les formulaires ; en tapant l'un d'eux, on lit son contenu
 * (Markdown + LaTeX) rendu comme une fiche.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte, Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { FORMULAIRES, LIBELLES_NIVEAU } from '../contenu-index';

export default function Formulaires() {
  const t = theme(useColorScheme() === 'dark');
  const [actif, setActif] = useState(null);

  if (actif) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
          <View style={{ paddingHorizontal: t.espace.l, paddingTop: t.espace.m }}>
            <Pressable onPress={() => setActif(null)} accessibilityRole="button">
              <Text style={{ color: t.couleur.accent, fontSize: t.police.petite }}>‹ Tous les formulaires</Text>
            </Pressable>
          </View>
          {!actif.reluPar && (
            <View style={{ padding: t.espace.l, paddingBottom: 0 }}>
              <Bandeau t={t} texte={'⚠️ Formulaire non relu par un professeur. Vérifie avec ton cours.'} />
            </View>
          )}
          <VisionneuseFiche markdown={actif.contenu} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (!FORMULAIRES || FORMULAIRES.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Aucun formulaire pour l'instant.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
          L'essentiel à savoir par cœur, par niveau et matière. Parfait pour réviser avant un contrôle.
        </Text>
        {FORMULAIRES.map((f) => (
          <Carte
            key={f.id}
            t={t}
            titre={f.titre}
            sousTitre={`${LIBELLES_NIVEAU[f.niveau] ?? f.niveau} · ${f.matiere === 'physique-chimie' ? 'Physique-chimie' : 'Mathématiques'}`}
            couleur={couleurMatiere(t, f.matiere)}
            onPress={() => setActif(f)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
