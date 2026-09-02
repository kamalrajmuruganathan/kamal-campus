/**
 * Révision express — mini-session chronométrée (2 min). Enchaîne des questions
 * générées ; à la fin, l'XP gagnée est créditée normalement (série, ligue,
 * quêtes, stats en profitent). Rapide à lancer depuis l'accueil.
 */

import { useMemo, useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import { CHAPITRES } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { aGenerateur, genererQuestions } from '../../lib/generateurs';

const DUREE = 120; // secondes
const LETTRES = ['A', 'B', 'C', 'D'];

function construirePool() {
  const gens = CHAPITRES.filter((c) => aGenerateur(c.id));
  const copie = gens.slice();
  const picks = [];
  for (let i = 0; i < 6 && copie.length; i += 1) picks.push(copie.splice(Math.floor(Math.random() * copie.length), 1)[0]);
  let qs = [];
  for (const c of picks) qs = qs.concat(genererQuestions(c.id, 8));
  for (let i = qs.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [qs[i], qs[j]] = [qs[j], qs[i]]; }
  return qs;
}

export default function Express({ navigation }) {
  const t = theme(useSombre());
  const { enregistrerResultat } = useProgression();

  const [phase, setPhase] = useState('menu'); // menu | jeu | fin
  const [temps, setTemps] = useState(DUREE);
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [reponses, setReponses] = useState([]);
  const [bilan, setBilan] = useState(null);
  const finRef = useRef(false);

  const pool = useMemo(construirePool, []);

  const terminer = () => {
    if (finRef.current) return;
    finRef.current = true;
    const rep = reponses.filter(Boolean);
    const qs = pool.slice(0, rep.length);
    const b = qs.length ? enregistrerResultat({ questions: qs, reponses: rep, titre: 'Révision express', matiere: null }) : { points: 0, justes: 0, total: 0 };
    setBilan({ ...b, repondu: rep.length });
    setPhase('fin');
  };

  // Chronomètre
  useEffect(() => {
    if (phase !== 'jeu') return undefined;
    if (temps <= 0) { terminer(); return undefined; }
    const id = setTimeout(() => setTemps((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, temps]); // eslint-disable-line react-hooks/exhaustive-deps

  const demarrer = () => { finRef.current = false; setReponses([]); setIndex(0); setChoisi(null); setTemps(DUREE); setBilan(null); setPhase('jeu'); };

  if (phase === 'menu') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, alignItems: 'center' }}>
          <Text style={{ fontSize: 44, marginTop: t.espace.l }}>⏱️</Text>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '800', marginTop: t.espace.s }}>Révision express</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, textAlign: 'center', marginTop: 6, lineHeight: 19 }}>
            2 minutes chrono, un maximum de questions. L'XP gagnée compte pour ta série, ta ligue et tes quêtes.
          </Text>
          <Pressable onPress={demarrer} style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.accent, marginTop: t.espace.xl, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '800', fontSize: t.police.moyenne }}>Démarrer</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (phase === 'fin') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <ScrollView contentContainerStyle={{ padding: t.espace.l, alignItems: 'center' }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '800', marginTop: t.espace.l }}>{bilan.justes} / {bilan.repondu}</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>bonnes réponses en 2 minutes</Text>
          <View style={{ marginTop: t.espace.l, padding: t.espace.m, backgroundColor: t.couleur.succesFond, borderRadius: t.rayon.m }}>
            <Text style={{ color: t.couleur.succes, fontWeight: '800', fontSize: t.police.grande, textAlign: 'center' }}>+{bilan.points} XP</Text>
            {bilan.monteeDeNiveau && <Text style={{ color: t.couleur.succes, textAlign: 'center', marginTop: 4 }}>🎉 Niveau supérieur !</Text>}
          </View>
          <Pressable onPress={demarrer} style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.accent, marginTop: t.espace.l, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '800' }}>Rejouer</Text>
          </Pressable>
          <Pressable onPress={() => navigation.goBack()} style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.surface, marginTop: t.espace.s, opacity: pressed ? 0.85 : 1 }]}>
            <Text style={{ color: t.couleur.texte }}>Retour</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // phase jeu
  const q = pool[index];
  if (!q) { terminer(); return <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} />; }
  const repondu = choisi !== null;
  const mm = Math.floor(temps / 60); const ss = String(temps % 60).padStart(2, '0');
  const presque = temps <= 15;

  const valider = (i) => {
    if (repondu) return;
    setChoisi(i);
    const suite = [...reponses]; suite[index] = { choisi: i, juste: i === q.reponse }; setReponses(suite);
    setTimeout(() => {
      if (index + 1 >= pool.length) terminer();
      else { setIndex(index + 1); setChoisi(null); }
    }, 550);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>Q{index + 1}</Text>
          <Text style={{ color: presque ? t.couleur.erreur : t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', fontVariant: ['tabular-nums'] }}>{mm}:{ss}</Text>
        </View>
        <View style={{ height: 6, borderRadius: 3, backgroundColor: t.couleur.trait, overflow: 'hidden', marginTop: 6 }}>
          <View style={{ width: `${(temps / DUREE) * 100}%`, height: '100%', backgroundColor: presque ? t.couleur.erreur : t.couleur.accent }} />
        </View>

        <VisionneuseFiche markdown={q.enonce} style={{ marginTop: t.espace.m }} />
        {q.choix.map((choix, i) => {
          const estBon = i === q.reponse; const estChoisi = i === choisi;
          let fond = t.couleur.surface; let bord = t.couleur.trait;
          if (repondu && estBon) { fond = t.couleur.succesFond; bord = t.couleur.succes; }
          else if (repondu && estChoisi) { fond = t.couleur.erreurFond; bord = t.couleur.erreur; }
          return (
            <Pressable key={i} onPress={() => valider(i)} disabled={repondu} style={({ pressed }) => [st.choix, { backgroundColor: fond, borderColor: bord, borderRadius: t.rayon.m, marginTop: t.espace.s, opacity: pressed && !repondu ? 0.7 : 1 }]}>
              <Text style={{ width: 24, color: t.couleur.attenue, fontWeight: '700' }}>{LETTRES[i]}</Text>
              <View style={{ flex: 1 }}><VisionneuseFiche markdown={choix} /></View>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, width: '100%' },
  choix: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, padding: 14 },
});
