/**
 * Mode duel — deux joueurs sur un même téléphone (pass-and-play).
 *
 * 10 questions en alternance (Joueur 1 sur les impaires, Joueur 2 sur les
 * paires). +1 point par bonne réponse. À la fin, le plus haut score gagne.
 * Les questions viennent du générateur du chapitre (réponses toujours justes)
 * ou, à défaut, de sa banque de QCM.
 */

import { useTheme } from '../useTheme';
import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { CHAPITRES, chapitreParId } from '../contenu-index';
import { aGenerateur, genererQuestions } from '../../lib/generateurs';
import { melanger } from '../../lib/quizmix';

const N = 10;
const LETTRES = ['A', 'B', 'C', 'D'];

export default function Duel({ route, navigation }) {
  const t = useTheme();

  // Chapitre fourni, sinon on en tire un au hasard parmi ceux à générateur.
  const chapitre = useMemo(() => {
    if (route.params?.id) return chapitreParId(route.params.id);
    const avecGen = CHAPITRES.filter((c) => aGenerateur(c.id));
    return avecGen.length ? avecGen[Math.floor(Math.random() * avecGen.length)] : CHAPITRES[0];
  }, [route.params]);

  const questions = useMemo(() => {
    if (!chapitre) return [];
    if (aGenerateur(chapitre.id)) return genererQuestions(chapitre.id, N);
    return melanger(chapitre.qcm?.questions ?? []).slice(0, N);
  }, [chapitre]);

  const accent = chapitre ? couleurMatiere(t, chapitre.matiere) : t.couleur.accent;

  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [scores, setScores] = useState([0, 0]);

  if (!chapitre || questions.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Duel indisponible pour ce chapitre.</Text>
      </SafeAreaView>
    );
  }

  // ── fin de partie ───────────────────────────────────────────────────────────
  if (index >= questions.length) {
    const [s1, s2] = scores;
    const gagnant = s1 === s2 ? 0 : (s1 > s2 ? 1 : 2);
    const rejouer = () => { setIndex(0); setChoisi(null); setScores([0, 0]); };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: t.espace.xl }}>
          <Text style={{ fontSize: 44 }}>{gagnant === 0 ? '🤝' : '🏆'}</Text>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '800', marginTop: t.espace.m, textAlign: 'center' }}>
            {gagnant === 0 ? 'Égalité !' : `Joueur ${gagnant} gagne !`}
          </Text>
          <View style={{ flexDirection: 'row', gap: t.espace.xl, marginTop: t.espace.l }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>Joueur 1</Text>
              <Text style={{ color: t.couleur.texte, fontSize: 34, fontWeight: '800' }}>{s1}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>Joueur 2</Text>
              <Text style={{ color: t.couleur.texte, fontSize: 34, fontWeight: '800' }}>{s2}</Text>
            </View>
          </View>
          <Pressable onPress={rejouer} style={({ pressed }) => [st.bouton, { backgroundColor: accent, marginTop: t.espace.xl, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '700' }}>Rejouer</Text>
          </Pressable>
          <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.surface, marginTop: t.espace.s, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.texte }}>Quitter</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const q = questions[index];
  const joueur = (index % 2) + 1; // 1 sur les impaires (index pair), 2 ensuite
  const repondu = choisi !== null;

  const valider = (i) => {
    if (repondu) return;
    setChoisi(i);
    if (i === q.reponse) {
      setScores((s) => { const n = [...s]; n[joueur - 1] += 1; return n; });
    }
  };
  const suivant = () => { setIndex(index + 1); setChoisi(null); };

  const couleurJoueur = joueur === 1 ? t.couleur.accent : accent;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>Question {index + 1} / {questions.length}</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>J1 {scores[0]} · {scores[1]} J2</Text>
        </View>

        <View style={{ marginTop: t.espace.m, padding: t.espace.m, borderRadius: t.rayon.m, backgroundColor: couleurJoueur, alignItems: 'center' }}>
          <Text style={{ color: t.couleur.accentTexte, fontWeight: '800', fontSize: t.police.moyenne }}>
            🎮 Au tour du Joueur {joueur}
          </Text>
        </View>

        <VisionneuseFiche markdown={q.enonce} style={{ marginTop: t.espace.m }} />

        {q.choix.map((choix, i) => {
          const estBon = i === q.reponse;
          const estChoisi = i === choisi;
          let fond = t.couleur.surface; let bord = t.couleur.trait;
          if (repondu && estBon) { fond = t.couleur.succesFond; bord = t.couleur.succes; }
          else if (repondu && estChoisi) { fond = t.couleur.erreurFond; bord = t.couleur.erreur; }
          return (
            <Pressable
              key={i}
              onPress={() => valider(i)}
              disabled={repondu}
              style={({ pressed }) => [st.choix, { backgroundColor: fond, borderColor: bord, borderRadius: t.rayon.m, marginTop: t.espace.s, opacity: pressed && !repondu ? 0.7 : 1 }]}
            >
              <Text style={{ color: t.couleur.attenue, fontWeight: '700', width: 24 }}>{LETTRES[i]}</Text>
              <View style={{ flex: 1 }}><VisionneuseFiche markdown={choix} /></View>
              {repondu && estBon && <Text style={{ color: t.couleur.succes, fontSize: 18 }}>✓</Text>}
              {repondu && estChoisi && !estBon && <Text style={{ color: t.couleur.erreur, fontSize: 18 }}>✕</Text>}
            </Pressable>
          );
        })}

        {repondu && (
          <Pressable onPress={suivant} style={({ pressed }) => [st.bouton, { backgroundColor: accent, marginTop: t.espace.l, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '700' }}>
              {index + 1 >= questions.length ? 'Voir le résultat' : 'Passer le téléphone → Joueur suivant'}
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  choix: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, padding: 14 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, paddingHorizontal: 20 },
});
