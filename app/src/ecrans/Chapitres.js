/**
 * Liste des chapitres d'un parcours.
 */

import { View, Text, ScrollView, useColorScheme, useWindowDimensions } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte, Bandeau } from '../composants/communs';
import { chapitresDe } from '../contenu-index';
import { composerQcm, poolQuestions } from '../../lib/quizmix';

const TAILLE_QCM_PARCOURS = 15;

export default function Chapitres({ route, navigation }) {
  const t = theme(useSombre());
  const { niveau, parcours, titre } = route.params;
  const liste = chapitresDe(niveau, parcours);
  const { width } = useWindowDimensions();

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

        {liste.map((c) => (
          <Carte
            key={c.id}
            t={t}
            titre={c.titre}
            sousTitre={`${c.duree} min de lecture · ${c.nbQuestions} questions`}
            detail={c.prerequis?.length ? `Prérequis : ${c.prerequis.join(' · ')}` : null}
            couleur={couleurMatiere(t, c.matiere)}
            onPress={() => navigation.navigate('Chapitre', { id: c.id, titre: c.titre })}
          />
        ))}

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
