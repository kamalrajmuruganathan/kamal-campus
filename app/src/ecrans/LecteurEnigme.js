/**
 * Lecteur d'énigmes numériques (suites, grilles, calcul mental).
 *
 * On enchaîne des énigmes générées à la volée : l'élève saisit sa réponse au
 * clavier, peut demander un indice, valide, voit la correction, puis passe à la
 * suivante. Chaque réussite rapporte de l'XP (et nourrit la série).
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { useProgression } from '../progression/Contexte';
import { genererEnigmes } from '../../lib/enigmes';
import ClavierNumerique from '../composants/ClavierNumerique';

function Grille({ t, grille }) {
  return (
    <View style={{ alignSelf: 'center', marginVertical: t.espace.l }}>
      {grille.lignes.map((ligne, i) => (
        <View key={i} style={{ flexDirection: 'row' }}>
          {ligne.map((cell, j) => {
            const estPoint = cell === '?';
            return (
              <View
                key={j}
                style={{
                  width: 66,
                  height: 56,
                  borderWidth: 1,
                  borderColor: t.couleur.trait,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: estPoint ? t.couleur.surfaceHaute : 'transparent',
                }}
              >
                <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: estPoint ? '800' : '600' }}>
                  {cell}
                </Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

export default function LecteurEnigme({ route, navigation }) {
  const t = theme(useSombre());
  const { enregistrerEnigme } = useProgression();
  const type = route.params?.type ?? 'suite';
  const titreFamille = route.params?.titre ?? 'Énigmes';

  const [enigme, setEnigme] = useState(() => genererEnigmes(type, 1)[0]);
  const [saisie, setSaisie] = useState('');
  const [corrige, setCorrige] = useState(false);
  const [reussi, setReussi] = useState(false);
  const [indiceVisible, setIndiceVisible] = useState(false);
  const [bilan, setBilan] = useState(null);
  const [stats, setStats] = useState({ resolues: 0, tentees: 0 });

  if (!enigme) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Énigmes indisponibles.</Text>
      </SafeAreaView>
    );
  }

  const valider = () => {
    if (corrige || saisie === '') return;
    const ok = Number(saisie) === enigme.reponse;
    const r = enregistrerEnigme({ difficulte: enigme.difficulte, reussi: ok, titre: `Énigme — ${titreFamille}` });
    setReussi(ok);
    setBilan(r);
    setCorrige(true);
    setStats((s) => ({ resolues: s.resolues + (ok ? 1 : 0), tentees: s.tentees + 1 }));
  };

  const suivante = () => {
    setEnigme(genererEnigmes(type, 1)[0]);
    setSaisie('');
    setCorrige(false);
    setReussi(false);
    setIndiceVisible(false);
    setBilan(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l }}>
        <View style={st.entete}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>
            {titreFamille} · {enigme.difficulte}
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>
            ✅ {stats.resolues}/{stats.tentees}
          </Text>
        </View>

        {/* Énoncé */}
        {enigme.grille ? (
          <>
            <Text style={[st.consigne, { color: t.couleur.texte }]}>{enigme.enonce}</Text>
            <Grille t={t} grille={enigme.grille} />
          </>
        ) : (
          <Text style={[st.enonce, { color: t.couleur.texte }]}>{enigme.enonce}</Text>
        )}

        {/* Zone de saisie */}
        <View
          style={{
            marginTop: t.espace.l,
            borderWidth: 1.5,
            borderColor: corrige ? (reussi ? t.couleur.succes : t.couleur.erreur) : t.couleur.accent,
            borderRadius: t.rayon.m,
            padding: t.espace.m,
            minHeight: 56,
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: saisie ? t.couleur.texte : t.couleur.attenue, fontSize: t.police.grande, textAlign: 'center' }}>
            {saisie || 'Ta réponse'}
          </Text>
        </View>

        {/* Indice */}
        {indiceVisible && !corrige && (
          <Text style={{ color: t.couleur.alerte, fontSize: t.police.petite, marginTop: t.espace.m, lineHeight: 19 }}>
            💡 {enigme.indice}
          </Text>
        )}

        {/* Correction */}
        {corrige && (
          <View
            style={{
              marginTop: t.espace.m,
              padding: t.espace.m,
              backgroundColor: reussi ? t.couleur.succesFond : t.couleur.erreurFond,
              borderRadius: t.rayon.m,
              borderLeftWidth: 3,
              borderLeftColor: reussi ? t.couleur.succes : t.couleur.erreur,
            }}
          >
            <Text style={{ color: reussi ? t.couleur.succes : t.couleur.erreur, fontWeight: '700', marginBottom: 6 }}>
              {reussi ? `Bravo ! +${bilan.points} XP` : `Raté — la réponse était ${enigme.reponse}`}
            </Text>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, lineHeight: 19 }}>
              {enigme.explication}
            </Text>
            {bilan?.badgesGagnes?.length > 0 && (
              <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: 8 }}>
                Nouveau badge : {bilan.badgesGagnes.map((b) => `${b.icone} ${b.titre}`).join(' · ')}
              </Text>
            )}
            {bilan?.serieJour?.atteint && (
              <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: 8, fontWeight: '650' }}>
                🔥 Objectif du jour atteint ! Série : {bilan.serieJour.serie} jour{bilan.serieJour.serie > 1 ? 's' : ''}.
              </Text>
            )}
          </View>
        )}

        {/* Actions */}
        {!corrige ? (
          <View style={{ marginTop: t.espace.l }}>
            <ClavierNumerique
              t={t}
              onChiffre={(d) => setSaisie((s) => (s.length < 6 ? s + d : s))}
              onEffacer={() => setSaisie((s) => s.slice(0, -1))}
              onValider={valider}
              peutValider={saisie !== ''}
            />
            <Pressable onPress={() => setIndiceVisible(true)} style={{ marginTop: t.espace.m, alignSelf: 'center' }}>
              <Text style={{ color: t.couleur.accent, fontSize: t.police.petite, textDecorationLine: 'underline' }}>
                Voir un indice
              </Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            onPress={suivante}
            style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.accent, marginTop: t.espace.l, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>
              Énigme suivante
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  entete: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  enonce: { fontSize: 30, fontWeight: '700', textAlign: 'center', marginTop: 40, letterSpacing: 1 },
  consigne: { fontSize: 16, textAlign: 'center', marginTop: 12, lineHeight: 22 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, borderRadius: 14 },
});
