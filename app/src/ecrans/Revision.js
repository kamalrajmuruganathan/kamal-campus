/**
 * À réviser — parcours de révision personnalisé. On met en avant les chapitres
 * déjà travaillés mais pas encore maîtrisés (meilleur score < 80 %), du plus
 * fragile au moins fragile : de quoi cibler ses révisions comme sur Kartable.
 */

import { useColorScheme } from 'react-native';
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { chapitreParId, LIBELLES_NIVEAU } from '../contenu-index';

export default function Revision({ navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const { profil } = useProgression();

  const faibles = Object.entries(profil.chapitres || {})
    .filter(([, v]) => v.meilleurScore < 0.8)
    .sort((a, b) => a[1].meilleurScore - b[1].meilleurScore)
    .map(([id, v]) => ({ id, ...v, chap: chapitreParId(id) }))
    .filter((x) => x.chap);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, lineHeight: 19, marginBottom: t.espace.m }}>
          Les chapitres où tu peux encore progresser (meilleur score au QCM sous 80 %), du plus fragile au moins fragile.
        </Text>

        {faibles.length === 0 ? (
          <View style={{ padding: t.espace.l, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Rien à revoir en priorité pour l'instant 👏
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Passe des QCM de chapitre : dès qu'un score reste sous 80 %, le chapitre apparaîtra ici pour que tu le retravailles.
            </Text>
          </View>
        ) : (
          faibles.map((x) => (
            <Carte
              key={x.id}
              t={t}
              titre={x.chap.titre}
              sousTitre={`${LIBELLES_NIVEAU[x.chap.niveau] ?? x.chap.niveau} · meilleur score ${Math.round(x.meilleurScore * 100)} %`}
              detail={`${x.tentatives} tentative${x.tentatives > 1 ? 's' : ''}`}
              couleur={couleurMatiere(t, x.chap.matiere)}
              onPress={() => navigation.navigate('Chapitre', { id: x.id, titre: x.chap.titre })}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
