/**
 * Lecteur de QCM.
 *
 * Choix pédagogique : la correction s'affiche IMMÉDIATEMENT après chaque
 * réponse, et il faut la lire avant de passer à la suite. Un QCM dont on
 * découvre le score à la fin n'apprend rien — c'est l'explication du piège
 * qui fait progresser.
 *
 * Les énoncés contiennent du LaTeX : ils sont rendus par la même visionneuse
 * que les fiches.
 */

import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { chapitreParId } from '../contenu-index';

const LETTRES = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function Qcm({ route, navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const chapitre = chapitreParId(route.params.id);

  const questions = useMemo(() => chapitre?.qcm?.questions ?? [], [chapitre]);
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [reponses, setReponses] = useState([]);

  if (!chapitre || questions.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>QCM indisponible.</Text>
      </SafeAreaView>
    );
  }

  const termine = index >= questions.length;

  // ── écran de fin ──────────────────────────────────────────────────────────
  if (termine) {
    const justes = reponses.filter((r) => r.juste).length;
    const rates = questions.filter((_, i) => !reponses[i]?.juste);
    const notionsARevoir = [...new Set(rates.map((q) => q.notion).filter(Boolean))];
    const pourcent = Math.round((justes / questions.length) * 100);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '700' }}>
            {justes} / {questions.length}
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.normale, marginTop: 4 }}>
            {pourcent} % de bonnes réponses
          </Text>

          {notionsARevoir.length > 0 && (
            <View
              style={{
                marginTop: t.espace.l,
                padding: t.espace.m,
                backgroundColor: t.couleur.surface,
                borderRadius: t.rayon.m,
              }}
            >
              <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
                Notions à revoir
              </Text>
              {notionsARevoir.map((n) => (
                <Text
                  key={n}
                  style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6 }}
                >
                  • {n.replace(/-/g, ' ')}
                </Text>
              ))}
              <Text
                style={{
                  color: t.couleur.attenue,
                  fontSize: t.police.minuscule,
                  marginTop: t.espace.m,
                  lineHeight: 17,
                }}
              >
                Ces intitulés correspondent aux sections de la fiche : relis-les en priorité.
              </Text>
            </View>
          )}

          <Pressable
            onPress={() => { setIndex(0); setChoisi(null); setReponses([]); }}
            style={({ pressed }) => [
              st.bouton,
              { backgroundColor: t.couleur.accent, borderRadius: t.rayon.m, marginTop: t.espace.l, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>
              Recommencer
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              st.bouton,
              {
                backgroundColor: t.couleur.surface,
                borderRadius: t.rayon.m,
                marginTop: t.espace.s,
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>Revenir à la fiche</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── question courante ─────────────────────────────────────────────────────
  const q = questions[index];
  const repondu = choisi !== null;
  const juste = repondu && choisi === q.reponse;

  const valider = (i) => {
    if (repondu) return;
    setChoisi(i);
    const suite = [...reponses];
    suite[index] = { choisi: i, juste: i === q.reponse };
    setReponses(suite);
  };

  const suivant = () => { setIndex(index + 1); setChoisi(null); };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <View style={st.entete}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>
            Question {index + 1} / {questions.length}
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>
            {q.difficulte}
          </Text>
        </View>

        {/* barre de progression */}
        <View style={[st.piste, { backgroundColor: t.couleur.trait }]}>
          <View
            style={{
              width: `${(index / questions.length) * 100}%`,
              height: '100%',
              backgroundColor: t.couleur.accent,
              borderRadius: 2,
            }}
          />
        </View>

        <VisionneuseFiche markdown={q.enonce} style={{ marginTop: t.espace.s }} />

        {q.choix.map((choix, i) => {
          const estBon = i === q.reponse;
          const estChoisi = i === choisi;
          let fond = t.couleur.surface;
          let bord = t.couleur.trait;
          if (repondu && estBon) { fond = t.couleur.succesFond; bord = t.couleur.succes; }
          else if (repondu && estChoisi) { fond = t.couleur.erreurFond; bord = t.couleur.erreur; }

          return (
            <Pressable
              key={i}
              onPress={() => valider(i)}
              disabled={repondu}
              accessibilityRole="button"
              style={({ pressed }) => [
                st.choix,
                {
                  backgroundColor: fond,
                  borderColor: bord,
                  borderRadius: t.rayon.m,
                  marginBottom: t.espace.s,
                  opacity: pressed && !repondu ? 0.7 : 1,
                },
              ]}
            >
              <Text
                style={{
                  color: repondu && estBon ? t.couleur.succes
                    : repondu && estChoisi ? t.couleur.erreur
                      : t.couleur.attenue,
                  fontSize: t.police.normale,
                  fontWeight: '700',
                  width: 24,
                }}
              >
                {LETTRES[i]}
              </Text>
              <View style={{ flex: 1 }}>
                <VisionneuseFiche markdown={choix} />
              </View>
              {repondu && estBon && <Text style={{ color: t.couleur.succes, fontSize: 18 }}>✓</Text>}
              {repondu && estChoisi && !estBon && <Text style={{ color: t.couleur.erreur, fontSize: 18 }}>✕</Text>}
            </Pressable>
          );
        })}

        {repondu && (
          <View
            style={{
              marginTop: t.espace.m,
              padding: t.espace.m,
              backgroundColor: juste ? t.couleur.succesFond : t.couleur.erreurFond,
              borderRadius: t.rayon.m,
              borderLeftWidth: 3,
              borderLeftColor: juste ? t.couleur.succes : t.couleur.erreur,
            }}
          >
            <Text
              style={{
                color: juste ? t.couleur.succes : t.couleur.erreur,
                fontSize: t.police.petite,
                fontWeight: '700',
                marginBottom: 6,
              }}
            >
              {juste ? 'Correct' : `Réponse : ${LETTRES[q.reponse]}`}
            </Text>
            <VisionneuseFiche markdown={q.explication} />
          </View>
        )}

        {repondu && (
          <Pressable
            onPress={suivant}
            style={({ pressed }) => [
              st.bouton,
              { backgroundColor: t.couleur.accent, borderRadius: t.rayon.m, marginTop: t.espace.m, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>
              {index + 1 < questions.length ? 'Question suivante' : 'Voir mon résultat'}
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  entete: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  piste: { height: 4, borderRadius: 2, overflow: 'hidden' },
  choix: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, paddingHorizontal: 12, paddingVertical: 4 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14 },
});
