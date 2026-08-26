/**
 * Cartes de révision (flashcards) d'un chapitre.
 *
 * Une carte a un RECTO (une question, une notion à retrouver) et un VERSO
 * (la réponse courte). L'élève lit le recto, cherche de tête, puis tape la
 * carte pour la retourner. Mémorisation active : on se teste, on ne relit pas.
 *
 * Le recto et le verso sont rendus en Markdown + LaTeX (VisionneuseFiche),
 * pour que les formules s'affichent.
 */

import { useState } from 'react';
import { View, Text, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { chapitreParId } from '../contenu-index';

export default function Flashcards({ route }) {
  const t = theme(useColorScheme() === 'dark');
  const chapitre = chapitreParId(route.params.id);
  const [i, setI] = useState(0);
  const [face, setFace] = useState('recto');

  const cartes = chapitre?.flashcards?.cartes ?? [];

  if (!chapitre || cartes.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>
          Pas encore de cartes de révision pour ce chapitre.
        </Text>
      </SafeAreaView>
    );
  }

  const accent = couleurMatiere(t, chapitre.matiere);
  const carte = cartes[i];
  const aller = (d) => { setFace('recto'); setI((n) => (n + d + cartes.length) % cartes.length); };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <View style={{ flex: 1, padding: t.espace.l }}>
        {!chapitre.reluPar && (
          <Bandeau t={t} texte={'⚠️ Cartes non relues par un professeur. Vérifie avec ton cours.'} />
        )}

        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, textAlign: 'center', marginBottom: t.espace.s }}>
          Carte {i + 1} / {cartes.length} · touche la carte pour la retourner
        </Text>

        <Pressable
          onPress={() => setFace((f) => (f === 'recto' ? 'verso' : 'recto'))}
          accessibilityRole="button"
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              borderRadius: t.rayon.l,
              borderWidth: 1.5,
              borderColor: face === 'recto' ? t.couleur.trait : accent,
              backgroundColor: face === 'recto' ? t.couleur.surface : t.couleur.fond,
              overflow: 'hidden',
            }}
          >
            <Text
              style={{
                color: face === 'recto' ? t.couleur.attenue : accent,
                fontSize: t.police.minuscule,
                letterSpacing: 1,
                textTransform: 'uppercase',
                padding: t.espace.m,
                paddingBottom: 0,
              }}
            >
              {face === 'recto' ? 'Question' : 'Réponse'}
            </Text>
            <VisionneuseFiche markdown={face === 'recto' ? carte.recto : carte.verso} />
          </View>
        </Pressable>

        <View style={{ flexDirection: 'row', gap: t.espace.m, marginTop: t.espace.l }}>
          <Pressable onPress={() => aller(-1)} style={({ pressed }) => [st.nav, { borderColor: t.couleur.trait, opacity: pressed ? 0.6 : 1 }]}>
            <Text style={{ color: t.couleur.texte, fontWeight: '650' }}>‹ Précédente</Text>
          </Pressable>
          <Pressable onPress={() => aller(1)} style={({ pressed }) => [st.nav, { backgroundColor: accent, borderColor: accent, opacity: pressed ? 0.8 : 1 }]}>
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '650' }}>Suivante ›</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  nav: { flex: 1, paddingVertical: 12, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
});
