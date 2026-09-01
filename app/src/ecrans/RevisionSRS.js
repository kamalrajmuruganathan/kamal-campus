/**
 * Révision intelligente (répétition espacée) — « À revoir aujourd'hui ».
 *
 * Rassemble toutes les cartes de révision de l'appli, ne garde que celles qui
 * sont dues aujourd'hui (moteur lib/srs), et les présente une par une. Le
 * jugement « je savais / à revoir » reprogramme la carte (J+1, J+3, J+7…).
 */

import { useState, useMemo } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import BoutonEcouter from '../composants/BoutonEcouter';
import { matiereParlante } from '../parole';
import { CHAPITRES } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { clesDues } from '../../lib/srs';
import { dateLocale } from '../../lib/serie';

const MAX_SESSION = 30; // on plafonne une session pour rester digeste

// Index de toutes les cartes de l'appli : cle « idChapitre#index » → contenu.
function construireIndex() {
  const idx = {};
  for (const c of CHAPITRES) {
    const cartes = c.flashcards?.cartes ?? [];
    cartes.forEach((carte, i) => {
      idx[`${c.id}#${i}`] = { recto: carte.recto, verso: carte.verso, matiere: c.matiere, titre: c.titre };
    });
  }
  return idx;
}

export default function RevisionSRS({ navigation }) {
  const t = useSombre() ? theme(true) : theme(false);
  const { profil, noterCarteSrs } = useProgression();

  const index = useMemo(construireIndex, []);
  const jour = dateLocale(new Date());
  // File figée à l'ouverture (ne rétrécit pas sous nos pieds quand on note).
  const [file] = useState(() => clesDues(profil.srs, Object.keys(index), jour).slice(0, MAX_SESSION));

  const [i, setI] = useState(0);
  const [face, setFace] = useState('recto');
  const [faits, setFaits] = useState(0);

  const totalDue = file.length;

  if (totalDue === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: t.espace.xl }}>
          <Text style={{ fontSize: 44 }}>🎉</Text>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: t.espace.m, textAlign: 'center' }}>
            Rien à revoir aujourd'hui !
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: t.espace.s, textAlign: 'center', lineHeight: 20 }}>
            Fais des cartes de révision dans les chapitres : elles reviendront ici au bon moment
            (demain, dans 3 jours, une semaine…) pour ancrer ta mémoire.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (i >= totalDue) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: t.espace.xl }}>
          <Text style={{ fontSize: 40 }}>✅</Text>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: t.espace.m }}>
            {faits} carte{faits > 1 ? 's' : ''} revue{faits > 1 ? 's' : ''}
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: t.espace.s, textAlign: 'center' }}>
            Reviens demain : les cartes réapparaîtront selon ta mémorisation.
          </Text>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.accent, marginTop: t.espace.l, opacity: pressed ? 0.85 : 1 }]}
          >
            <Text style={{ color: t.couleur.accentTexte, fontWeight: '700' }}>Terminer</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const cle = file[i];
  const carte = index[cle];
  const accent = couleurMatiere(t, carte.matiere);

  const juger = (su) => {
    noterCarteSrs(cle, su);
    setFaits((n) => n + 1);
    setI(i + 1);
    setFace('recto');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <View style={{ flex: 1, padding: t.espace.l }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, textAlign: 'center', marginBottom: t.espace.s }}>
          À revoir · {i + 1} / {totalDue} · {carte.titre}
        </Text>

        <Pressable onPress={() => setFace((f) => (f === 'recto' ? 'verso' : 'recto'))} style={{ flex: 1 }}>
          <ScrollView
            style={{
              flex: 1,
              borderRadius: t.rayon.l,
              borderWidth: 1.5,
              borderColor: face === 'recto' ? t.couleur.trait : accent,
              backgroundColor: face === 'recto' ? t.couleur.surface : t.couleur.fond,
            }}
            contentContainerStyle={{ padding: t.espace.s }}
          >
            <Text style={{ color: face === 'recto' ? t.couleur.attenue : accent, fontSize: t.police.minuscule, letterSpacing: 1, textTransform: 'uppercase', paddingHorizontal: t.espace.s }}>
              {face === 'recto' ? 'Question' : 'Réponse'}
            </Text>
            {matiereParlante(carte.matiere) && (
              <View style={{ paddingHorizontal: t.espace.s, marginTop: 6 }}>
                <BoutonEcouter t={t} matiere={carte.matiere} texte={face === 'recto' ? carte.recto : carte.verso} />
              </View>
            )}
            <VisionneuseFiche markdown={face === 'recto' ? carte.recto : carte.verso} />
          </ScrollView>
        </Pressable>

        {face === 'recto' ? (
          <Pressable
            onPress={() => setFace('verso')}
            style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.surface, marginTop: t.espace.l, opacity: pressed ? 0.7 : 1 }]}
          >
            <Text style={{ color: t.couleur.texte, fontWeight: '650' }}>Voir la réponse</Text>
          </Pressable>
        ) : (
          <View style={{ flexDirection: 'row', gap: t.espace.m, marginTop: t.espace.l }}>
            <Pressable onPress={() => juger(false)} style={({ pressed }) => [st.juge, { borderColor: t.couleur.erreur, opacity: pressed ? 0.6 : 1 }]}>
              <Text style={{ color: t.couleur.erreur, fontWeight: '700' }}>À revoir</Text>
            </Pressable>
            <Pressable onPress={() => juger(true)} style={({ pressed }) => [st.juge, { backgroundColor: t.couleur.succes, borderColor: t.couleur.succes, opacity: pressed ? 0.8 : 1 }]}>
              <Text style={{ color: t.couleur.accentTexte, fontWeight: '700' }}>Je savais ✓</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14, borderRadius: 12, paddingHorizontal: 20 },
  juge: { flex: 1, paddingVertical: 14, borderRadius: 12, borderWidth: 1.5, alignItems: 'center' },
});
