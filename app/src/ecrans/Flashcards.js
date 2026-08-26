/**
 * Cartes de révision (flashcards) d'un chapitre, avec auto-évaluation.
 *
 * Pour chaque carte : l'élève lit le RECTO (une question), cherche de tête,
 * touche la carte pour voir le VERSO (la réponse), puis se juge honnêtement —
 * « Je savais » ou « À revoir ». Chaque « je savais » rapporte des points.
 * On avance ainsi carte après carte ; à la fin, un bilan enregistre la session.
 *
 * Le recto et le verso sont rendus en Markdown + LaTeX (VisionneuseFiche).
 */

import { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Bandeau } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { chapitreParId } from '../contenu-index';
import { useProgression } from '../progression/Contexte';

export default function Flashcards({ route, navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const chapitre = chapitreParId(route.params.id);
  const cartes = chapitre?.flashcards?.cartes ?? [];

  const [i, setI] = useState(0);
  const [face, setFace] = useState('recto');
  const [connues, setConnues] = useState([]); // booléens, une case par carte jugée
  const [fini, setFini] = useState(false);

  const { enregistrerFlashcards } = useProgression();
  const [bilan, setBilan] = useState(null);
  const dejaEnregistre = useRef(false);

  const nbConnues = connues.filter(Boolean).length;

  useEffect(() => {
    if (fini && !dejaEnregistre.current) {
      dejaEnregistre.current = true;
      setBilan(
        enregistrerFlashcards({
          connues: nbConnues,
          total: cartes.length,
          titre: chapitre?.titre ?? 'Cartes',
          matiere: chapitre?.matiere ?? null,
        }),
      );
    }
  }, [fini]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // ── écran de bilan ─────────────────────────────────────────────────────────
  if (fini) {
    const recommencer = () => {
      dejaEnregistre.current = false;
      setBilan(null);
      setConnues([]);
      setI(0);
      setFace('recto');
      setFini(false);
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '700' }}>
            {nbConnues} / {cartes.length}
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.normale, marginTop: 4 }}>
            cartes sues du premier coup
          </Text>

          {bilan && (
            <View
              style={{
                marginTop: t.espace.l,
                padding: t.espace.m,
                backgroundColor: bilan.monteeDeNiveau ? t.couleur.succesFond : t.couleur.surface,
                borderRadius: t.rayon.m,
                borderLeftWidth: 3,
                borderLeftColor: bilan.monteeDeNiveau ? t.couleur.succes : accent,
              }}
            >
              <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '700' }}>
                +{bilan.points} points
              </Text>
              {bilan.monteeDeNiveau && (
                <Text style={{ color: t.couleur.succes, fontSize: t.police.normale, fontWeight: '650', marginTop: 4 }}>
                  🎉 Niveau supérieur ! Tu passes niveau {bilan.niveauApres}.
                </Text>
              )}
              {bilan.badgesGagnes?.length > 0 && (
                <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: 8 }}>
                  Nouveau badge : {bilan.badgesGagnes.map((b) => `${b.icone} ${b.titre}`).join(' · ')}
                </Text>
              )}
            </View>
          )}

          <Pressable
            onPress={recommencer}
            style={({ pressed }) => [st.bouton, { backgroundColor: accent, marginTop: t.espace.l, opacity: pressed ? 0.8 : 1 }]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>Refaire les cartes</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Profil')}
            style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.surface, marginTop: t.espace.s, opacity: pressed ? 0.8 : 1 }]}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>Voir ma progression</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── carte courante ─────────────────────────────────────────────────────────
  const carte = cartes[i];

  const juger = (connue) => {
    const suite = [...connues];
    suite[i] = connue;
    setConnues(suite);
    if (i + 1 >= cartes.length) {
      setFini(true);
    } else {
      setI(i + 1);
      setFace('recto');
    }
  };

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
          <ScrollView
            style={{
              flex: 1,
              borderRadius: t.rayon.l,
              borderWidth: 1.5,
              borderColor: face === 'recto' ? t.couleur.trait : accent,
              backgroundColor: face === 'recto' ? t.couleur.surface : t.couleur.fond,
            }}
            contentContainerStyle={{ padding: t.espace.s }}
          >
            <Text
              style={{
                color: face === 'recto' ? t.couleur.attenue : accent,
                fontSize: t.police.minuscule,
                letterSpacing: 1,
                textTransform: 'uppercase',
                paddingHorizontal: t.espace.s,
              }}
            >
              {face === 'recto' ? 'Question' : 'Réponse'}
            </Text>
            <VisionneuseFiche markdown={face === 'recto' ? carte.recto : carte.verso} />
          </ScrollView>
        </Pressable>

        {face === 'recto' ? (
          <Pressable
            onPress={() => setFace('verso')}
            style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.surface, marginTop: t.espace.l, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={{ color: t.couleur.texte, fontWeight: '650' }}>Voir la réponse</Text>
          </Pressable>
        ) : (
          <View style={{ flexDirection: 'row', gap: t.espace.m, marginTop: t.espace.l }}>
            <Pressable
              onPress={() => juger(false)}
              style={({ pressed }) => [st.juge, { borderColor: t.couleur.erreur, opacity: pressed ? 0.6 : 1 }]}
            >
              <Text style={{ color: t.couleur.erreur, fontWeight: '700' }}>À revoir</Text>
            </Pressable>
            <Pressable
              onPress={() => juger(true)}
              style={({ pressed }) => [st.juge, { backgroundColor: t.couleur.succes, borderColor: t.couleur.succes, opacity: pressed ? 0.8 : 1 }]}
            >
              <Text style={{ color: t.couleur.accentTexte, fontWeight: '700' }}>Je savais ✓</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12 },
  juge: { flex: 1, paddingVertical: 14, borderRadius: 12, borderWidth: 1.5, alignItems: 'center' },
});
