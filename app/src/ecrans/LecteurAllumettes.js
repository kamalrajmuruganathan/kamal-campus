/**
 * Lecteur d'énigmes d'allumettes — « déplace 1 allumette pour corriger ».
 *
 * L'égalité fausse est affichée en allumettes ; l'élève choisit, parmi
 * plusieurs égalités, celle obtenue en déplaçant une seule allumette. Chaque
 * bonne réponse rapporte de l'XP (et nourrit la série).
 */

import { useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { useProgression } from '../progression/Contexte';
import { melanger } from '../../lib/quizmix';
import { ALLUMETTES } from '../enigmes/allumettes';
import EquationAllumettes from '../composants/EquationAllumettes';

const LETTRES = ['A', 'B', 'C', 'D'];

export default function LecteurAllumettes() {
  const t = theme(useColorScheme() === 'dark');
  const { enregistrerEnigme } = useProgression();

  const [tirage, setTirage] = useState(0);
  const banque = useMemo(() => melanger(ALLUMETTES), [tirage]);
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [bilan, setBilan] = useState(null);
  const [stats, setStats] = useState({ resolues: 0, tentees: 0 });

  const e = banque[index % banque.length];
  const corrige = choisi !== null;

  const repondre = (i) => {
    if (corrige) return;
    const ok = i === e.reponse;
    const r = enregistrerEnigme({ difficulte: e.difficulte, reussi: ok, titre: 'Énigme — Allumettes' });
    setChoisi(i);
    setBilan(r);
    setStats((s) => ({ resolues: s.resolues + (ok ? 1 : 0), tentees: s.tentees + 1 }));
  };

  const suivante = () => {
    const prochain = index + 1;
    if (prochain % banque.length === 0) setTirage((n) => n + 1); // remélange
    setIndex(prochain);
    setChoisi(null);
    setBilan(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l }}>
        <View style={st.entete}>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>Allumettes · {e.difficulte}</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>✅ {stats.resolues}/{stats.tentees}</Text>
        </View>

        <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '650', textAlign: 'center', marginTop: t.espace.s }}>
          Déplace 1 allumette pour rendre l'égalité vraie.
        </Text>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, textAlign: 'center', marginTop: 4 }}>
          Quelle égalité obtient-on ?
        </Text>

        <View style={{ marginVertical: t.espace.l }}>
          <EquationAllumettes texte={e.enonceEquation} t={t} />
        </View>

        {e.choix.map((c, i) => {
          const estBon = i === e.reponse;
          const estChoisi = i === choisi;
          let fond = t.couleur.surface;
          let bord = t.couleur.trait;
          if (corrige && estBon) { fond = t.couleur.succesFond; bord = t.couleur.succes; }
          else if (corrige && estChoisi) { fond = t.couleur.erreurFond; bord = t.couleur.erreur; }
          return (
            <Pressable
              key={i}
              onPress={() => repondre(i)}
              disabled={corrige}
              style={({ pressed }) => [
                st.choix,
                { backgroundColor: fond, borderColor: bord, borderRadius: t.rayon.m, opacity: pressed && !corrige ? 0.7 : 1 },
              ]}
            >
              <Text style={{ color: t.couleur.attenue, fontWeight: '700', width: 22 }}>{LETTRES[i]}</Text>
              <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, letterSpacing: 1 }}>{c}</Text>
              {corrige && estBon && <Text style={{ color: t.couleur.succes, marginLeft: 'auto', fontSize: 18 }}>✓</Text>}
              {corrige && estChoisi && !estBon && <Text style={{ color: t.couleur.erreur, marginLeft: 'auto', fontSize: 18 }}>✕</Text>}
            </Pressable>
          );
        })}

        {corrige && (
          <View
            style={{
              marginTop: t.espace.m,
              padding: t.espace.m,
              backgroundColor: t.couleur.surface,
              borderRadius: t.rayon.m,
              borderLeftWidth: 3,
              borderLeftColor: choisi === e.reponse ? t.couleur.succes : t.couleur.erreur,
            }}
          >
            <Text style={{ color: choisi === e.reponse ? t.couleur.succes : t.couleur.erreur, fontWeight: '700', marginBottom: 6 }}>
              {choisi === e.reponse ? `Bravo ! +${bilan.points} XP` : 'Pas tout à fait.'}
            </Text>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, lineHeight: 19 }}>{e.explication}</Text>
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
            <Pressable
              onPress={suivante}
              style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.accent, marginTop: t.espace.m, opacity: pressed ? 0.85 : 1 }]}
            >
              <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>Énigme suivante</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  entete: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  choix: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, paddingHorizontal: 14, paddingVertical: 14, marginBottom: 10 },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12 },
});
