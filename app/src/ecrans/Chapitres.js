/**
 * Liste des chapitres d'un parcours.
 */

import { useTheme } from '../useTheme';
import { View, Text, ScrollView, Pressable, useColorScheme, useWindowDimensions } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte, Bandeau } from '../composants/communs';
import { chapitresDe } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { composerQcm, poolQuestions } from '../../lib/quizmix';
import HorsLigneParcours from '../composants/HorsLigneParcours';

const TAILLE_QCM_PARCOURS = 15;

export default function Chapitres({ route, navigation }) {
  const t = useTheme();
  const { niveau, parcours, titre } = route.params;
  const liste = chapitresDe(niveau, parcours);
  const { width } = useWindowDimensions();
  const { profil } = useProgression();

  // Statut de chaque chapitre pour la « carte de quête » (non bloquant).
  const etat = (id) => {
    const c = (profil.chapitres || {})[id];
    if (!c) return 'afaire';
    if ((c.meilleurScore || 0) >= 0.8) return 'maitrise';
    if ((c.tentatives || 0) > 0) return 'encours';
    return 'afaire';
  };
  const maitrises = liste.filter((c) => etat(c.id) === 'maitrise').length;
  const idxProchain = liste.findIndex((c) => etat(c.id) !== 'maitrise'); // prochaine étape suggérée

  const nonRelus = liste.filter((c) => !c.reluPar).length;
  const totalQuestions = poolQuestions(liste).length;
  const accentParcours = couleurMatiere(t, liste[0]?.matiere);

  const lancerQcmParcours = () => {
    const questions = composerQcm(liste, TAILLE_QCM_PARCOURS);
    navigation.navigate('Qcm', {
      questions,
      titre: `QCM — ${titre ?? 'parcours'}`,
      matiere: liste[0]?.matiere ?? null,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {nonRelus > 0 && (
          <Bandeau
            t={t}
            texte={
              `⚠️ ${nonRelus} fiche${nonRelus > 1 ? 's' : ''} de ce parcours ${nonRelus > 1 ? 'n’ont' : 'n’a'} pas encore ` +
              'été relue par un professeur. Le contenu est rédigé à partir des programmes officiels, ' +
              'mais vérifie avec ton cours avant un contrôle.'
            }
          />
        )}

        {liste.length >= 2 && totalQuestions >= 5 && (
          <Carte
            t={t}
            titre="QCM du parcours"
            sousTitre={`${Math.min(TAILLE_QCM_PARCOURS, totalQuestions)} questions mélangées de tout le parcours`}
            detail="Teste-toi sur l'ensemble des chapitres à la fois"
            couleur={accentParcours}
            onPress={lancerQcmParcours}
          />
        )}

        {/* Progression du parcours */}
        {liste.length > 0 && (
          <View style={{ marginTop: t.espace.m, marginBottom: t.espace.s }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>Ta progression</Text>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>{maitrises} / {liste.length} maîtrisés</Text>
            </View>
            <View style={{ height: 8, borderRadius: 4, backgroundColor: t.couleur.trait, overflow: 'hidden', marginTop: 6 }}>
              <View style={{ width: `${liste.length ? Math.round((maitrises / liste.length) * 100) : 0}%`, height: '100%', backgroundColor: accentParcours, borderRadius: 4 }} />
            </View>
          </View>
        )}

        <HorsLigneParcours t={t} ids={liste.map((c) => c.id)} accent={accentParcours} />

        {/* Carte de quête : chemin de chapitres */}
        {liste.map((c, i) => {
          const s = etat(c.id);
          const accent = couleurMatiere(t, c.matiere);
          const prochain = i === idxProchain;
          const fondPastille = s === 'maitrise' ? accent : (prochain ? accent : t.couleur.surface);
          const texteP = s === 'maitrise' ? '✓' : (s === 'encours' ? '◐' : String(i + 1));
          const couleurTexteP = (s === 'maitrise' || prochain) ? t.couleur.accentTexte : t.couleur.attenue;
          return (
            <View key={c.id} style={{ flexDirection: 'row', alignItems: 'stretch' }}>
              {/* rail : connecteur + pastille */}
              <View style={{ width: 34, alignItems: 'center' }}>
                {i > 0 && <View style={{ width: 2, height: 12, backgroundColor: t.couleur.trait }} />}
                <View style={{
                  width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center',
                  backgroundColor: fondPastille, borderWidth: s === 'afaire' && !prochain ? 1.5 : 0, borderColor: t.couleur.trait,
                }}>
                  <Text style={{ color: couleurTexteP, fontWeight: '800', fontSize: 13 }}>{texteP}</Text>
                </View>
                {i < liste.length - 1 && <View style={{ width: 2, flex: 1, backgroundColor: t.couleur.trait }} />}
              </View>
              {/* carte chapitre */}
              <Pressable
                onPress={() => navigation.navigate('Chapitre', { id: c.id, titre: c.titre })}
                accessibilityRole="button"
                style={({ pressed }) => [{
                  flex: 1, marginLeft: t.espace.s, marginVertical: 4, padding: t.espace.m,
                  backgroundColor: t.couleur.surface, borderRadius: t.rayon.m,
                  borderWidth: prochain ? 1.5 : 1, borderColor: prochain ? accent : t.couleur.trait,
                  opacity: pressed ? 0.7 : 1,
                }]}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={{ flex: 1, color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>{c.titre}</Text>
                  {prochain && <Text style={{ color: accent, fontSize: t.police.minuscule, fontWeight: '800' }}>▶ à faire</Text>}
                  {s === 'maitrise' && <Text style={{ color: t.couleur.succes, fontSize: t.police.minuscule, fontWeight: '700' }}>maîtrisé</Text>}
                </View>
                <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
                  {c.duree} min · {c.nbQuestions} questions
                </Text>
              </Pressable>
            </View>
          );
        })}

        {liste.length === 0 && (
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.normale }}>
            Aucun chapitre disponible pour ce parcours.
          </Text>
        )}

        {width > 0 && (
          <Text
            style={{
              color: t.couleur.attenue,
              fontSize: t.police.minuscule,
              marginTop: t.espace.l,
              lineHeight: 17,
            }}
          >
            {liste[0]?.programme ? `Programme de référence : ${liste[0].programme}` : ''}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
