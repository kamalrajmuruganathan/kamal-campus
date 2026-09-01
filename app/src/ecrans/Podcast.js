/**
 * Podcast de révision — écoute mains-libres d'un chapitre.
 *
 * Enchaîne à voix haute : la fiche de cours, puis chaque carte de révision
 * (question puis réponse). Lecture / pause, segment en cours mis en évidence.
 * Utilise la synthèse vocale hors ligne (parole.js) : vitesse et voix suivent
 * les réglages du profil.
 */

import { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { chapitreParId } from '../contenu-index';
import { parlerSequence, arreterParole, texteBrut } from '../parole';

export default function Podcast({ route }) {
  const t = theme(useSombre());
  const chapitre = chapitreParId(route.params.id);

  // Construit la playlist : cours + cartes (recto/verso).
  const segments = useMemo(() => {
    if (!chapitre) return [];
    const segs = [{ titre: 'Cours', texte: texteBrut(chapitre.fiche) }];
    const cartes = chapitre.flashcards?.cartes ?? [];
    cartes.forEach((c, i) => {
      segs.push({ titre: `Carte ${i + 1} — question`, texte: c.recto });
      segs.push({ titre: `Carte ${i + 1} — réponse`, texte: c.verso });
    });
    return segs;
  }, [chapitre]);

  const [enLecture, setEnLecture] = useState(false);
  const [courant, setCourant] = useState(-1);

  // Coupe la voix si on quitte l'écran.
  useEffect(() => () => arreterParole(), []);

  if (!chapitre) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
        <Text style={{ color: t.couleur.texte, padding: t.espace.l }}>Chapitre introuvable.</Text>
      </SafeAreaView>
    );
  }

  const accent = couleurMatiere(t, chapitre.matiere);

  const lire = (depart = 0) => {
    setEnLecture(true);
    parlerSequence(
      segments.slice(depart).map((s) => s.texte),
      chapitre.matiere,
      {
        onIndex: (i) => setCourant(depart + i),
        onFin: () => { setEnLecture(false); setCourant(-1); },
      },
    );
  };
  const pause = () => { arreterParole(); setEnLecture(false); };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <View style={{ padding: t.espace.l, paddingBottom: t.espace.s }}>
        <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800' }}>🎧 {chapitre.titre}</Text>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>
          {segments.length} segments · cours + {(chapitre.flashcards?.cartes?.length ?? 0)} cartes
        </Text>
        <Pressable
          onPress={() => (enLecture ? pause() : lire(courant < 0 ? 0 : courant))}
          style={({ pressed }) => [st.play, { backgroundColor: accent, marginTop: t.espace.m, opacity: pressed ? 0.85 : 1 }]}
        >
          <Text style={{ color: t.couleur.accentTexte, fontWeight: '800', fontSize: t.police.moyenne }}>
            {enLecture ? '⏸  Pause' : (courant < 0 ? '▶  Lire le chapitre' : '▶  Reprendre')}
          </Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingTop: 0, paddingBottom: t.espace.xxl }}>
        {segments.map((s, i) => {
          const actif = i === courant;
          return (
            <Pressable
              key={i}
              onPress={() => lire(i)}
              style={[st.seg, { borderColor: actif ? accent : t.couleur.trait, backgroundColor: actif ? t.couleur.surfaceHaute ?? t.couleur.surface : t.couleur.surface, borderRadius: t.rayon.m }]}
            >
              <Text style={{ fontSize: 15, marginRight: t.espace.s }}>{actif && enLecture ? '🔊' : '•'}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: actif ? accent : t.couleur.attenue, fontSize: t.police.minuscule, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.titre}</Text>
                <Text numberOfLines={2} style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: 2 }}>{s.texte}</Text>
              </View>
            </Pressable>
          );
        })}
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: t.espace.m, lineHeight: 18 }}>
          Astuce : touche un segment pour démarrer la lecture à partir de là. La vitesse et la voix se règlent dans Progression.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  play: { alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 14 },
  seg: { flexDirection: 'row', alignItems: 'flex-start', borderWidth: 1, padding: 12, marginTop: 8 },
});
