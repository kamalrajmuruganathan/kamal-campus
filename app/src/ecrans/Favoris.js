/**
 * Favoris — les chapitres marqués d'une étoile, pour les retrouver vite.
 */

import { useColorScheme } from 'react-native';
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { chapitreParId, LIBELLES_NIVEAU, LIBELLES_PARCOURS } from '../contenu-index';

export default function Favoris({ navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const { profil } = useProgression();

  const chapitres = (profil.favoris || []).map(chapitreParId).filter(Boolean);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {chapitres.length === 0 ? (
          <View style={{ padding: t.espace.l, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Aucun favori pour l'instant.
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Ouvre un chapitre et touche l'étoile ⭐ en haut pour l'ajouter ici et le retrouver d'un coup.
            </Text>
          </View>
        ) : (
          chapitres.map((c) => (
            <Carte
              key={c.id}
              t={t}
              titre={c.titre}
              sousTitre={`${LIBELLES_NIVEAU[c.niveau] ?? c.niveau} · ${LIBELLES_PARCOURS[c.parcours] ?? c.parcours}`}
              couleur={couleurMatiere(t, c.matiere)}
              onPress={() => navigation.navigate('Chapitre', { id: c.id, titre: c.titre })}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
