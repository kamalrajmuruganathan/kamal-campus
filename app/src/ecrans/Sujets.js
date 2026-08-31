/**
 * Sujets — annales et sujets type bac/brevet complets, avec corrigé.
 *
 * Liste des sujets ; en tapant l'un d'eux, on lit l'énoncé complet puis son
 * corrigé (Markdown + LaTeX). L'idée : s'entraîner sur une épreuve entière,
 * pas seulement un exercice.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte, Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { SUJETS, LIBELLES_NIVEAU } from '../contenu-index';

export default function Sujets() {
  const t = theme(useSombre());
  const [actif, setActif] = useState(null);

  if (actif) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ paddingBottom: t.espace.xxl }}>
          <View style={{ paddingHorizontal: t.espace.l, paddingTop: t.espace.m }}>
            <Pressable onPress={() => setActif(null)} accessibilityRole="button">
              <Text style={{ color: t.couleur.accent, fontSize: t.police.petite }}>‹ Tous les sujets</Text>
            </Pressable>
          </View>
          {!actif.reluPar && (
            <View style={{ padding: t.espace.l, paddingBottom: 0 }}>
              <Bandeau t={t} texte={'⚠️ Sujet et corrigé non relus par un professeur. À vérifier avant de t\'y fier.'} />
            </View>
          )}
          <VisionneuseFiche markdown={actif.contenu} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (!SUJETS || SUJETS.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Aucun sujet pour l'instant.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
          Des épreuves entières type bac ou brevet, avec le corrigé détaillé. Entraîne-toi en conditions.
        </Text>
        {SUJETS.map((s) => (
          <Carte
            key={s.id}
            t={t}
            titre={s.titre}
            sousTitre={`${s.examen || (LIBELLES_NIVEAU[s.niveau] ?? s.niveau)} · ${s.matiere === 'physique-chimie' ? 'Physique-chimie' : 'Mathématiques'}`}
            couleur={couleurMatiere(t, s.matiere)}
            onPress={() => setActif(s)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
