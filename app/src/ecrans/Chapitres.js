/**
 * Liste des chapitres d'un parcours.
 */

import { View, Text, ScrollView, useColorScheme, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte, Bandeau } from '../composants/communs';
import { chapitresDe } from '../contenu-index';

export default function Chapitres({ route, navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const { niveau, parcours } = route.params;
  const liste = chapitresDe(niveau, parcours);
  const { width } = useWindowDimensions();

  const nonRelus = liste.filter((c) => !c.reluPar).length;

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
