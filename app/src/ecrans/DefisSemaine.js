/**
 * Défis de la semaine — 3 défis tirés chaque lundi (les mêmes pour tous les
 * élèves), avec leur avancement et le bonus d'XP. Logique : lib/defisSemaine.
 */

import { useTheme } from '../useTheme';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProgression } from '../progression/Contexte';
import { dateLocale } from '../../lib/serie';
import { defisDeLaSemaine, nombreReussis, joursRestants } from '../../lib/defisSemaine';

const NBSP = ' ';

// Où aller pour avancer sur chaque défi.
const AIDE = {
  exos: { texte: 'Ouvre un chapitre, puis « Exercices » : chaque exercice réussi pour la première fois compte.' },
  qcm: { texte: 'Fais le QCM d’un chapitre, ou une révision express.', ecran: 'Express', bouton: 'Révision express' },
  qcm80: { texte: 'QCM d’au moins 5 questions : vise 80 % de bonnes réponses.', ecran: 'Express', bouton: 'Révision express' },
  sansFaute: { texte: 'QCM d’au moins 5 questions, sans aucune erreur.', ecran: 'Express', bouton: 'Révision express' },
  dictees: { texte: 'Chaque dictée corrigée compte, même une dictée déjà faite.', ecran: 'Dictees', bouton: 'Dictées' },
  cartes: { texte: 'Chaque carte révisée compte (cartes d’un chapitre ou révision intelligente).', ecran: 'RevisionSRS', bouton: 'Révision intelligente' },
  carnet: { texte: 'Une erreur est maîtrisée après 3 réussites espacées dans ton carnet.', ecran: 'ModeErreurs', bouton: 'Mon carnet d’erreurs' },
  jours: { texte: 'Un jour compte dès que tu fais un QCM, un exercice, une dictée, des cartes ou une énigme.' },
  xp: { texte: 'Tous les XP gagnés cette semaine comptent, sauf les bonus des défis.' },
  enigmes: { texte: 'Seules les énigmes résolues comptent.', ecran: 'Enigmes', bouton: 'Énigmes' },
};

export default function DefisSemaine({ navigation }) {
  const t = useTheme();
  const C = t.couleur;
  const { profil } = useProgression();
  const jour = dateLocale(new Date());
  const defis = defisDeLaSemaine(profil, jour);
  const reussis = nombreReussis(defis);
  const reste = joursRestants(jour);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: C.texte, fontSize: t.police.grande, fontWeight: '800' }}>
          {reussis}/{defis.length} défi{reussis > 1 ? 's' : ''} réussi{reussis > 1 ? 's' : ''}
        </Text>
        <Text style={{ color: C.attenue, fontSize: t.police.petite, lineHeight: 19, marginTop: 4 }}>
          {reste === 1 ? 'Dernier jour : de nouveaux défis arrivent demain, lundi.' : `Encore ${reste}${NBSP}jours : de nouveaux défis arrivent lundi.`}
          {' '}Les mêmes défis pour tous les élèves cette semaine ; chacun rapporte un bonus d’XP une seule fois.
        </Text>

        {defis.map((d) => {
          const aide = AIDE[d.id] ?? {};
          return (
            <View
              key={d.id}
              style={{
                marginTop: t.espace.m, padding: t.espace.m, borderRadius: t.rayon.m,
                backgroundColor: d.fait ? C.succesFond : C.surface, borderWidth: 1, borderColor: d.fait ? C.succes : C.trait,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: t.espace.m }}>
                <Text style={{ fontSize: 28 }}>{d.icone}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: C.texte, fontSize: t.police.moyenne, fontWeight: '700' }}>{d.texte}</Text>
                  <Text style={{ color: d.fait ? C.succes : C.attenue, fontSize: t.police.petite, fontWeight: d.fait ? '700' : '400', marginTop: 2 }}>
                    {d.fait ? `Réussi ✓ · +${d.bonus}${NBSP}XP` : `${d.valeur}/${d.cible} · bonus${NBSP}: +${d.bonus}${NBSP}XP`}
                  </Text>
                </View>
              </View>
              <View style={{ height: 8, borderRadius: 4, backgroundColor: C.trait, overflow: 'hidden', marginTop: t.espace.s }}>
                <View style={{ width: `${Math.round(d.progres * 100)}%`, height: '100%', backgroundColor: d.fait ? C.succes : C.accent }} />
              </View>
              {!d.fait && aide.texte && (
                <Text style={{ color: C.attenue, fontSize: t.police.minuscule, lineHeight: 17, marginTop: t.espace.s }}>{aide.texte}</Text>
              )}
              {!d.fait && aide.ecran && (
                <Pressable
                  onPress={() => navigation.navigate(aide.ecran)}
                  accessibilityRole="button"
                  style={({ pressed }) => ({ alignSelf: 'flex-start', marginTop: t.espace.s, borderWidth: 1, borderColor: C.accent, borderRadius: t.rayon.s, paddingHorizontal: 12, paddingVertical: 6, opacity: pressed ? 0.6 : 1 })}
                >
                  <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>{aide.bouton} ›</Text>
                </Pressable>
              )}
            </View>
          );
        })}

        <Pressable
          onPress={() => navigation.navigate('Badges')}
          accessibilityRole="button"
          style={({ pressed }) => ({ alignSelf: 'center', marginTop: t.espace.xl, opacity: pressed ? 0.6 : 1 })}
        >
          <Text style={{ color: C.accent, fontWeight: '700', fontSize: t.police.petite }}>🏅 Voir tous mes badges</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
