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

import { useMemo, useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { chapitreParId } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { melanger } from '../../lib/quizmix';

const LETTRES = ['A', 'B', 'C', 'D', 'E', 'F'];
// Nombre de questions tirées au hasard dans la banque d'un chapitre.
const TAILLE_QCM_CHAPITRE = 15;

export default function Qcm({ route, navigation }) {
  const t = theme(useColorScheme() === 'dark');
  // Deux usages : QCM d'un chapitre (route.params.id) OU QCM de révision / bac
  // blanc dont les questions sont fournies directement (route.params.questions).
  const chapitre = route.params?.questions ? null : chapitreParId(route.params?.id);

  // `tirage` s'incrémente à chaque « Recommencer » pour re-piocher au hasard.
  const [tirage, setTirage] = useState(0);
  const questions = useMemo(() => {
    // QCM de révision / bac blanc / parcours : questions déjà fournies.
    if (route.params?.questions) return route.params.questions;
    // QCM de chapitre : on pioche TAILLE_QCM_CHAPITRE questions au hasard dans
    // la banque du chapitre (toute la banque si elle est plus petite).
    const banque = chapitre?.qcm?.questions ?? [];
    return melanger(banque).slice(0, TAILLE_QCM_CHAPITRE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapitre, route.params, tirage]);
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [reponses, setReponses] = useState([]);

  // Progression : on enregistre le résultat UNE fois, quand le QCM se termine.
  const { enregistrerResultat } = useProgression();
  const [bilan, setBilan] = useState(null);
  const dejaEnregistre = useRef(false);
  const estTermine = questions.length > 0 && index >= questions.length;

  useEffect(() => {
    if (estTermine && !dejaEnregistre.current) {
      dejaEnregistre.current = true;
      setBilan(
        enregistrerResultat({
          questions,
          reponses,
          chapitreId: chapitre?.id ?? null,
          titre: route.params?.titre ?? chapitre?.titre ?? 'QCM',
          matiere: route.params?.matiere ?? chapitre?.matiere ?? null,
        }),
      );
    }
  }, [estTermine]); // eslint-disable-line react-hooks/exhaustive-deps

  if (questions.length === 0) {
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

          {bilan && (
            <View
              style={{
                marginTop: t.espace.l,
                padding: t.espace.m,
                backgroundColor: bilan.monteeDeNiveau ? t.couleur.succesFond : t.couleur.surface,
                borderRadius: t.rayon.m,
                borderLeftWidth: 3,
                borderLeftColor: bilan.monteeDeNiveau ? t.couleur.succes : t.couleur.accent,
              }}
            >
              <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '700' }}>
                +{bilan.points} points
              </Text>
              {bilan.monteeDeNiveau ? (
                <Text style={{ color: t.couleur.succes, fontSize: t.police.normale, fontWeight: '650', marginTop: 4 }}>
                  🎉 Niveau supérieur ! Tu passes niveau {bilan.niveauApres}.
                </Text>
              ) : (
                <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 4 }}>
                  Niveau {bilan.niveauApres}
                  {bilan.sansFaute ? ' · sans-faute, bonus appliqué !' : ''}
                </Text>
              )}
              {bilan.badgesGagnes?.length > 0 && (
                <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: 8 }}>
                  Nouveau badge : {bilan.badgesGagnes.map((b) => `${b.icone} ${b.titre}`).join(' · ')}
                </Text>
              )}
            </View>
          )}

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
            onPress={() => {
              dejaEnregistre.current = false;
              setBilan(null);
              setTirage((n) => n + 1); // re-pioche de nouvelles questions
              setIndex(0); setChoisi(null); setReponses([]);
            }}
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
            onPress={() => navigation.navigate('Profil')}
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
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>Voir ma progression</Text>
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
