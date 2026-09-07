/**
 * Révision des erreurs — refaire les questions déjà ratées.
 *
 * L'application garde en réserve les questions ratées (voir lib/erreurs). Cet
 * écran les affiche et les relance dans le lecteur de QCM habituel (correction
 * immédiate). Comme réussir une question la retire automatiquement de la
 * réserve, la liste se vide au fur et à mesure des révisions.
 */

import { useTheme } from '../useTheme';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Carte } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { questionsAReviser, compteErreurs } from '../../lib/erreurs';

export default function ModeErreurs({ navigation }) {
  const t = useTheme();
  const { profil } = useProgression();
  const reserve = profil?.erreurs || [];
  const n = compteErreurs(reserve);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
          Ici reviennent les questions que tu as ratées, toutes matières confondues. Refais-les :
          celles que tu réussis sortent de la liste.
        </Text>

        {n === 0 ? (
          <View
            style={{
              backgroundColor: t.couleur.surface,
              borderRadius: t.rayon.m,
              borderWidth: 1,
              borderColor: t.couleur.trait,
              padding: t.espace.l,
            }}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '700', marginBottom: 6 }}>
              Aucune erreur en réserve 🎉
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, lineHeight: 19 }}>
              Fais des QCM : les questions que tu rates apparaîtront ici pour que tu puisses les retravailler.
            </Text>
          </View>
        ) : (
          <Carte
            t={t}
            titre={`Réviser mes erreurs (${n})`}
            sousTitre={`${n} question${n > 1 ? 's' : ''} à retravailler · correction immédiate`}
            couleur={t.couleur.erreur}
            onPress={() =>
              navigation.navigate('Qcm', {
                questions: questionsAReviser(reserve),
                titre: 'Révision des erreurs',
                matiere: null,
              })
            }
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
