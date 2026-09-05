/**
 * Résolveur pas-à-pas — on saisit un calcul, une expression ou une équation,
 * l'appli affiche le résultat ET les étapes (hors ligne, réponses exactes).
 *
 * Pas de photo : c'est le « cerveau » d'un Photomath, la reconnaissance d'image
 * en moins (elle exigerait un service en ligne payant).
 */

import { useTheme } from '../useTheme';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { resoudre } from '../../lib/solveur';

const SYMBOLES = ['x', '(', ')', '^', '×', '÷', '+', '−', '='];
const EXEMPLES = ['2x + 5 = 13', 'x^2 - 5x + 6 = 0', '3/4 + 5/6', '2×(3+4)^2'];

export default function Resolveur() {
  const t = useTheme();
  const [entree, setEntree] = useState('');
  const [res, setRes] = useState(null);

  const inserer = (s) => setEntree((e) => e + s);
  const lancer = () => setRes(resoudre(entree));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }} keyboardShouldPersistTaps="handled">
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, lineHeight: 19 }}>
          Écris un calcul, une expression ou une équation. L'appli montre le résultat et les étapes.
        </Text>

        <TextInput
          value={entree}
          onChangeText={setEntree}
          placeholder="ex. 2x + 5 = 13"
          placeholderTextColor={t.couleur.attenue}
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            marginTop: t.espace.m,
            borderWidth: 1.5,
            borderColor: t.couleur.accent,
            borderRadius: t.rayon.m,
            padding: t.espace.m,
            color: t.couleur.texte,
            fontSize: t.police.grande,
          }}
        />

        {/* Barre de symboles */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.s }}>
          {SYMBOLES.map((s) => (
            <Pressable
              key={s}
              onPress={() => inserer(s)}
              style={({ pressed }) => [st.sym, { backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, opacity: pressed ? 0.6 : 1 }]}
            >
              <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>{s}</Text>
            </Pressable>
          ))}
          <Pressable
            onPress={() => { setEntree(''); setRes(null); }}
            style={({ pressed }) => [st.sym, { backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, opacity: pressed ? 0.6 : 1 }]}
          >
            <Text style={{ color: t.couleur.erreur, fontSize: t.police.moyenne }}>C</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={lancer}
          disabled={entree.trim() === ''}
          style={({ pressed }) => [
            st.bouton,
            { backgroundColor: entree.trim() === '' ? t.couleur.trait : t.couleur.accent, marginTop: t.espace.m, opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>Résoudre</Text>
        </Pressable>

        {/* Exemples */}
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: t.espace.l, marginBottom: t.espace.s }}>
          Exemples à essayer :
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s }}>
          {EXEMPLES.map((ex) => (
            <Pressable
              key={ex}
              onPress={() => { setEntree(ex); setRes(resoudre(ex)); }}
              style={({ pressed }) => [st.exemple, { backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, opacity: pressed ? 0.6 : 1 }]}
            >
              <Text style={{ color: t.couleur.texte, fontSize: t.police.petite }}>{ex}</Text>
            </Pressable>
          ))}
        </View>

        {/* Résultat */}
        {res && !res.ok && (
          <View style={{ marginTop: t.espace.l, padding: t.espace.m, backgroundColor: t.couleur.erreurFond, borderRadius: t.rayon.m }}>
            <Text style={{ color: t.couleur.erreur, fontSize: t.police.petite }}>{res.erreur}</Text>
          </View>
        )}

        {res && res.ok && (
          <View style={{ marginTop: t.espace.l }}>
            <View style={{ padding: t.espace.m, backgroundColor: t.couleur.succesFond, borderRadius: t.rayon.m, borderLeftWidth: 3, borderLeftColor: t.couleur.succes }}>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>Résultat</Text>
              <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: 2 }}>
                {res.resultat}
              </Text>
            </View>

            <Text style={[st.section, { color: t.couleur.attenue }]}>ÉTAPES</Text>
            {res.etapes.map((e, i) => (
              <View key={i} style={{ flexDirection: 'row', marginBottom: t.espace.s }}>
                <Text style={{ color: t.couleur.accent, fontWeight: '700', width: 26 }}>{i + 1}.</Text>
                <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, flex: 1, lineHeight: 22 }}>{e}</Text>
              </View>
            ))}

            {res.posee && res.posee.length > 0 && (
              <>
                <Text style={[st.section, { color: t.couleur.attenue }]}>OPÉRATION POSÉE (retenues)</Text>
                {res.posee.map((e, i) => (
                  <View key={i} style={{ flexDirection: 'row', marginBottom: t.espace.s }}>
                    <Text style={{ color: t.couleur.succes, fontWeight: '700', width: 26 }}>•</Text>
                    <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, flex: 1, lineHeight: 22 }}>{e}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  sym: { minWidth: 42, paddingVertical: 10, paddingHorizontal: 12, borderWidth: 1, borderRadius: 8, alignItems: 'center' },
  exemple: { paddingVertical: 8, paddingHorizontal: 12, borderWidth: 1, borderRadius: 999 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 14 },
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginTop: 24, marginBottom: 10 },
});
