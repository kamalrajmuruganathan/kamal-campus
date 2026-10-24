/**
 * Révision intelligente (répétition espacée) — « À revoir aujourd'hui ».
 *
 * Rassemble toutes les cartes de révision de l'appli, ne garde que celles qui
 * sont dues aujourd'hui (moteur lib/srs), et les présente une par une. Le
 * jugement « je savais / à revoir » reprogramme la carte (J+1, J+3, J+7…).
 */

import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import VisionneuseFiche from '../composants/VisionneuseFiche';
import BoutonEcouter from '../composants/BoutonEcouter';
import { lectureActive } from '../../lib/lecture';
import { CHAPITRES } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { clesDues } from '../../lib/srs';
import { dateLocale } from '../../lib/serie';
import { chargerCartes } from '../useContenu';
import EtatChargement from '../composants/EtatChargement';

const MAX_SESSION = 30; // on plafonne une session pour rester digeste

// Clés des cartes DÉJÀ ÉTUDIÉES (« idChapitre#index ») qui existent encore dans l'index.
// Les cartes jamais vues n'entrent pas ici : sinon une révision « à revoir » proposait
// des cartes de CP d'allemand à un élève de 4e qui n'en avait jamais ouvert.
// (Même règle que le compteur de l'accueil, src/coach.js.)
function clesEtudiees(srs) {
  const nb = new Map(CHAPITRES.map((c) => [c.id, c.nbFlashcards || 0]));
  return Object.keys(srs || {}).filter((k) => {
    const i = k.lastIndexOf('#');
    const n = Number(k.slice(i + 1));
    return i > 0 && Number.isInteger(n) && n >= 0 && n < (nb.get(k.slice(0, i)) ?? 0);
  });
}

// Contenu des cartes de la session : cle → { recto, verso, matiere, titre }. Les cartes sont
// chargées à la demande, seulement pour les chapitres de la session. null si un chargement échoue.
async function chargerIndex(cles) {
  const ids = [...new Set(cles.map((k) => k.slice(0, k.lastIndexOf('#'))))];
  const paquets = await Promise.all(ids.map((id) => chargerCartes(id)));
  if (paquets.some((p) => !p)) return null;
  const idx = {};
  ids.forEach((id, n) => {
    const c = CHAPITRES.find((x) => x.id === id);
    (paquets[n].cartes ?? []).forEach((carte, i) => {
      idx[`${id}#${i}`] = { recto: carte.recto, verso: carte.verso, matiere: c?.matiere, titre: c?.titre };
    });
  });
  return idx;
}

export default function RevisionSRS({ navigation }) {
  const t = useTheme(); // suit aussi la taille du texte et le contraste choisis
  const { profil, noterCarteSrs } = useProgression();

  const jour = dateLocale(new Date());
  // File figée à l'ouverture (ne rétrécit pas sous nos pieds quand on note).
  const [file] = useState(() => clesDues(profil.srs, clesEtudiees(profil.srs), jour).slice(0, MAX_SESSION));
  const [index, setIndex] = useState(undefined); // undefined = chargement, null = échec
  const [essai, setEssai] = useState(0);
  useEffect(() => {
    let vivant = true;
    setIndex(undefined);
    chargerIndex(file).then((x) => { if (vivant) setIndex(x); });
    return () => { vivant = false; };
  }, [file, essai]);

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

  if (!index || file.some((k) => !index[k])) {
    return <EtatChargement t={t} etat={index === undefined ? 'chargement' : 'erreur'} quoi="les cartes" recharger={() => setEssai((n) => n + 1)} />;
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
            {lectureActive(carte.matiere, carte.niveau, profil) && (
              <View style={{ paddingHorizontal: t.espace.s, marginTop: 6 }}>
                <BoutonEcouter t={t} matiere={carte.matiere} texte={face === 'recto' ? carte.recto : carte.verso} />
              </View>
            )}
            <VisionneuseFiche markdown={face === 'recto' ? carte.recto : carte.verso} inerte />
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
