/**
 * Onboarding — au tout premier lancement. En trois étapes : prénom (optionnel),
 * classe, objectif quotidien. On mémorise le tout, puis l'appli s'ouvre sur
 * l'accueil (et pré-sélectionne le niveau choisi).
 */

import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Carte } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { niveaux, LIBELLES_NIVEAU } from '../contenu-index';

const OBJECTIFS = [
  { xp: 30, titre: 'Tranquille', detail: '≈ 1 ou 2 QCM par jour' },
  { xp: 60, titre: 'Régulier', detail: '≈ 3 QCM par jour' },
  { xp: 120, titre: 'Sérieux', detail: 'Pour progresser vite' },
  { xp: 200, titre: 'Intense', detail: 'Objectif ambitieux' },
];

export default function Onboarding({ navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const { terminerOnboarding } = useProgression();

  const [etape, setEtape] = useState(0);
  const [prenom, setPrenom] = useState('');
  const [niveau, setNiveau] = useState(null);
  const [objectif, setObjectif] = useState(60);

  const listeNiveaux = niveaux();

  const terminer = () => {
    terminerOnboarding({ prenom, niveau, objectif });
    navigation.replace('Accueil');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, fontWeight: '700', letterSpacing: 1 }}>
          KAMAL CAMPUS · ÉTAPE {etape + 1} / 3
        </Text>

        {etape === 0 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>Bienvenue !</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>
              Comment veux-tu qu'on t'appelle ? (facultatif)
            </Text>
            <TextInput
              value={prenom}
              onChangeText={setPrenom}
              placeholder="Ton prénom"
              placeholderTextColor={t.couleur.attenue}
              style={{
                marginTop: t.espace.l,
                borderWidth: 1.5,
                borderColor: t.couleur.accent,
                borderRadius: t.rayon.m,
                padding: t.espace.m,
                color: t.couleur.texte,
                fontSize: t.police.moyenne,
              }}
              returnKeyType="done"
            />
          </>
        )}

        {etape === 1 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>Quelle est ta classe ?</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>
              L'appli s'ouvrira directement sur ton programme.
            </Text>
            <View style={{ marginTop: t.espace.l }}>
              {listeNiveaux.map((n) => (
                <Pressable
                  key={n}
                  onPress={() => setNiveau(n)}
                  style={({ pressed }) => [
                    st.option,
                    {
                      backgroundColor: t.couleur.surface,
                      borderColor: niveau === n ? t.couleur.accent : t.couleur.trait,
                      borderWidth: niveau === n ? 2 : 1,
                      borderRadius: t.rayon.m,
                      opacity: pressed ? 0.7 : 1,
                    },
                  ]}
                >
                  <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '600' }}>
                    {LIBELLES_NIVEAU[n] ?? n}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}

        {etape === 2 && (
          <>
            <Text style={[st.titre, { color: t.couleur.texte }]}>Ton objectif quotidien</Text>
            <Text style={[st.sous, { color: t.couleur.attenue }]}>
              Combien d'XP veux-tu viser chaque jour ? (modifiable plus tard)
            </Text>
            <View style={{ marginTop: t.espace.l }}>
              {OBJECTIFS.map((o) => (
                <Pressable
                  key={o.xp}
                  onPress={() => setObjectif(o.xp)}
                  style={({ pressed }) => [
                    st.option,
                    {
                      backgroundColor: t.couleur.surface,
                      borderColor: objectif === o.xp ? t.couleur.accent : t.couleur.trait,
                      borderWidth: objectif === o.xp ? 2 : 1,
                      borderRadius: t.rayon.m,
                      opacity: pressed ? 0.7 : 1,
                    },
                  ]}
                >
                  <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '600' }}>
                    {o.titre} — {o.xp} XP/jour
                  </Text>
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>
                    {o.detail}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
      </ScrollView>

      <View style={{ padding: t.espace.l, flexDirection: 'row', gap: t.espace.m }}>
        {etape > 0 && (
          <Pressable
            onPress={() => setEtape((e) => e - 1)}
            style={({ pressed }) => [st.bouton, { flex: 0.5, backgroundColor: t.couleur.surface, opacity: pressed ? 0.8 : 1 }]}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>Retour</Text>
          </Pressable>
        )}
        <Pressable
          onPress={() => {
            if (etape < 2) setEtape((e) => e + 1);
            else terminer();
          }}
          disabled={etape === 1 && !niveau}
          style={({ pressed }) => [
            st.bouton,
            {
              flex: 1,
              backgroundColor: etape === 1 && !niveau ? t.couleur.trait : t.couleur.accent,
              opacity: pressed ? 0.85 : 1,
            },
          ]}
        >
          <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>
            {etape < 2 ? 'Continuer' : 'C’est parti !'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  titre: { fontSize: 27, fontWeight: '700', marginTop: 14 },
  sous: { fontSize: 15, marginTop: 6, lineHeight: 21 },
  option: { padding: 16, marginBottom: 10 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 14 },
});
