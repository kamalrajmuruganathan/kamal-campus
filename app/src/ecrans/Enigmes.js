/**
 * Rubrique Énigmes — accessible à tous les niveaux (indépendante des classes).
 * Quatre familles : suites logiques, grilles & logique, calcul mental, allumettes.
 * Chaque énigme résolue rapporte de l'XP et nourrit la série.
 */

import { useColorScheme } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Carte } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { FAMILLES } from '../../lib/enigmes';

export default function Enigmes({ navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const { profil } = useProgression();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, lineHeight: 19, marginBottom: t.espace.m }}>
          Des défis de logique pour tous les niveaux. Chaque énigme résolue rapporte de l'XP.
          {profil.enigmesResolues ? `  Déjà ${profil.enigmesResolues} résolue${profil.enigmesResolues > 1 ? 's' : ''}.` : ''}
        </Text>

        {Object.entries(FAMILLES).map(([type, f]) => (
          <Carte
            key={type}
            t={t}
            titre={`${f.icone}  ${f.titre}`}
            sousTitre={f.description}
            detail="Questions générées à l'infini"
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('LecteurEnigme', { type, titre: f.titre })}
          />
        ))}

        <Carte
          t={t}
          titre="🔥  Allumettes"
          sousTitre="Déplace 1 allumette pour corriger l'égalité."
          detail="Énigmes classiques"
          couleur={t.couleur.physique}
          onPress={() => navigation.navigate('LecteurAllumettes')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
