/**
 * Mode examen — conditions d'épreuve.
 *
 * On reprend les QCM de bac blanc (mêmes questions), mais dans un cadre
 * d'examen : compte à rebours global, AUCUNE correction pendant l'épreuve, et
 * à la fin seulement le score, l'appréciation et le corrigé des questions
 * ratées. La logique (durée, chrono, notation) vient de lib/examen, qui est
 * testée à part — l'écran ne fait qu'afficher.
 */

import { useTheme } from '../useTheme';
import { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { QUIZ, LIBELLES_NIVEAU } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import {
  dureeConseillee,
  formaterChrono,
  tempsRestant,
  phaseChrono,
  noter,
} from '../../lib/examen';

const LETTRES = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function ModeExamen({ navigation }) {
  const t = useTheme();
  const { enregistrerResultat } = useProgression();

  const [epreuve, setEpreuve] = useState(null); // { questions, titre, matiere, duree }
  const [phase, setPhase] = useState('menu'); // menu | jeu | fin
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState([]); // reponses[i] = { choisi } | null
  const [ecoule, setEcoule] = useState(0); // secondes écoulées
  const [bilan, setBilan] = useState(null);
  const finRef = useRef(false);

  const duree = epreuve ? epreuve.duree : 0;
  const restant = tempsRestant(duree, ecoule);

  const lancer = (quiz) => {
    const questions = quiz.questions || [];
    if (!questions.length) return;
    setEpreuve({
      questions,
      titre: quiz.titre,
      matiere: quiz.matiere,
      duree: dureeConseillee(questions.length),
    });
    setReponses(new Array(questions.length).fill(null));
    setIndex(0);
    setEcoule(0);
    setBilan(null);
    finRef.current = false;
    setPhase('jeu');
  };

  const terminer = () => {
    if (finRef.current) return;
    finRef.current = true;
    const questions = epreuve ? epreuve.questions : [];
    const note = noter(questions, reponses);
    // Créditer l'XP par le circuit habituel (série, ligue, quêtes, stats).
    // Les questions sans réponse comptent comme fausses.
    if (questions.length) {
      const repPourXp = note.details.map((d) =>
        d.choisi === null ? null : { choisi: d.choisi, juste: d.juste },
      );
      enregistrerResultat({
        questions,
        reponses: repPourXp,
        titre: `Examen — ${epreuve.titre}`,
        matiere: epreuve.matiere,
      });
    }
    setBilan(note);
    setPhase('fin');
  };

  // Chronomètre : une seconde à la fois, s'arrête hors de la phase « jeu ».
  useEffect(() => {
    if (phase !== 'jeu') return undefined;
    if (restant <= 0) {
      terminer();
      return undefined;
    }
    const id = setTimeout(() => setEcoule((s) => s + 1), 1000);
    return () => clearTimeout(id);
  }, [phase, ecoule]); // eslint-disable-line react-hooks/exhaustive-deps

  const choisir = (i) => {
    const suite = reponses.slice();
    suite[index] = { choisi: i };
    setReponses(suite);
  };

  const confirmerFin = () => {
    const repondu = reponses.filter(Boolean).length;
    const reste = (epreuve ? epreuve.questions.length : 0) - repondu;
    if (reste > 0) {
      Alert.alert(
        'Terminer l’examen ?',
        `${reste} question${reste > 1 ? 's' : ''} sans réponse compter${reste > 1 ? 'ont' : 'a'} comme fausse${reste > 1 ? 's' : ''}.`,
        [
          { text: 'Continuer', style: 'cancel' },
          { text: 'Terminer', style: 'destructive', onPress: terminer },
        ],
      );
    } else {
      terminer();
    }
  };

  // ── Menu : choix de l'épreuve ───────────────────────────────────────────────
  if (phase === 'menu') {
    if (!QUIZ || QUIZ.length === 0) {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
          <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>
            Aucune épreuve disponible pour l’instant.
          </Text>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
            Conditions d’examen : compte à rebours, pas de correction pendant l’épreuve — le
            score et le corrigé s’affichent seulement à la fin. L’XP compte normalement.
          </Text>
          {QUIZ.map((q) => {
            const n = (q.questions || []).length;
            return (
              <Carte
                key={q.id}
                t={t}
                titre={q.titre}
                sousTitre={`${q.examen || (LIBELLES_NIVEAU[q.niveau] ?? q.niveau)} · ${n} questions · ${formaterChrono(dureeConseillee(n))}`}
                couleur={couleurMatiere(t, q.matiere)}
                onPress={() => lancer(q)}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Fin : score + corrigé ───────────────────────────────────────────────────
  if (phase === 'fin' && bilan) {
    const questions = epreuve.questions;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '800' }}>
            {bilan.justes} / {bilan.total}
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.moyenne, marginTop: 2 }}>
            {bilan.pourcent}% · {bilan.appreciation}
            {bilan.sansReponse > 0 ? ` · ${bilan.sansReponse} sans réponse` : ''}
          </Text>

          {bilan.rates.length > 0 && (
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: t.espace.l, marginBottom: t.espace.s }}>
              À revoir
            </Text>
          )}
          {bilan.rates.map((i) => {
            const q = questions[i];
            const d = bilan.details[i];
            return (
              <View
                key={i}
                style={{
                  backgroundColor: t.couleur.surface,
                  borderRadius: t.rayon.m,
                  borderLeftWidth: 3,
                  borderLeftColor: t.couleur.erreur,
                  padding: t.espace.m,
                  marginBottom: t.espace.s,
                }}
              >
                <VisionneuseFiche markdown={q.enonce} />
                <Text style={{ color: t.couleur.succes, fontSize: t.police.petite, fontWeight: '700', marginTop: t.espace.s }}>
                  Bonne réponse : {LETTRES[q.reponse]}. {q.choix[q.reponse]}
                </Text>
                {d.choisi !== null && (
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>
                    Ta réponse : {LETTRES[d.choisi]}. {q.choix[d.choisi]}
                  </Text>
                )}
                {q.explication ? (
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 18 }}>
                    {q.explication}
                  </Text>
                ) : null}
              </View>
            );
          })}

          <Pressable
            onPress={() => { setPhase('menu'); setEpreuve(null); }}
            accessibilityRole="button"
            style={({ pressed }) => ({
              backgroundColor: t.couleur.accent,
              borderRadius: t.rayon.m,
              padding: t.espace.m,
              alignItems: 'center',
              marginTop: t.espace.l,
              opacity: pressed ? 0.85 : 1,
            })}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>
              Autre épreuve
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── Épreuve en cours ────────────────────────────────────────────────────────
  const questions = epreuve.questions;
  const q = questions[index];
  const choisi = reponses[index] ? reponses[index].choisi : null;
  const ph = phaseChrono(restant, duree);
  const couleurChrono =
    ph === 'critique' ? t.couleur.erreur : ph === 'attention' ? t.couleur.alerte : t.couleur.texte;
  const dernier = index + 1 >= questions.length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>
            Question {index + 1} / {questions.length}
          </Text>
          <Text style={{ color: couleurChrono, fontSize: t.police.grande, fontWeight: '800', fontVariant: ['tabular-nums'] }}>
            {formaterChrono(restant)}
          </Text>
        </View>

        <View style={{ height: 6, borderRadius: 3, backgroundColor: t.couleur.trait, overflow: 'hidden', marginTop: 6 }}>
          <View style={{ width: `${duree > 0 ? (restant / duree) * 100 : 0}%`, height: '100%', backgroundColor: couleurChrono }} />
        </View>

        <VisionneuseFiche markdown={q.enonce} style={{ marginTop: t.espace.m }} />

        {q.choix.map((choix, i) => {
          const estChoisi = i === choisi;
          return (
            <Pressable
              key={i}
              onPress={() => choisir(i)}
              accessibilityRole="button"
              style={({ pressed }) => ({
                flexDirection: 'row',
                alignItems: 'flex-start',
                backgroundColor: estChoisi ? t.couleur.surfaceHaute : t.couleur.surface,
                borderColor: estChoisi ? t.couleur.accent : t.couleur.trait,
                borderWidth: estChoisi ? 2 : 1,
                borderRadius: t.rayon.m,
                padding: t.espace.m,
                marginTop: t.espace.s,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <Text style={{ color: estChoisi ? t.couleur.accent : t.couleur.attenue, fontWeight: '800', fontSize: t.police.moyenne, marginRight: t.espace.s }}>
                {LETTRES[i]}
              </Text>
              <View style={{ flex: 1 }}>
                <VisionneuseFiche markdown={choix} />
              </View>
            </Pressable>
          );
        })}

        <View style={{ flexDirection: 'row', marginTop: t.espace.l }}>
          {index > 0 && (
            <Pressable
              onPress={() => setIndex(index - 1)}
              accessibilityRole="button"
              style={({ pressed }) => ({
                backgroundColor: t.couleur.surface,
                borderRadius: t.rayon.m,
                paddingVertical: t.espace.m,
                paddingHorizontal: t.espace.l,
                marginRight: t.espace.s,
                opacity: pressed ? 0.8 : 1,
              })}
            >
              <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne }}>Précédent</Text>
            </Pressable>
          )}
          <Pressable
            onPress={() => (dernier ? confirmerFin() : setIndex(index + 1))}
            accessibilityRole="button"
            style={({ pressed }) => ({
              flex: 1,
              backgroundColor: dernier ? t.couleur.succes : t.couleur.accent,
              borderRadius: t.rayon.m,
              paddingVertical: t.espace.m,
              alignItems: 'center',
              opacity: pressed ? 0.85 : 1,
            })}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>
              {dernier ? 'Terminer' : 'Suivant'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
