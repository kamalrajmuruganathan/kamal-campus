/**
 * Badges — objectifs à décrocher. Chaque badge se déduit de la progression :
 * les badges obtenus sont mis en avant, les autres montrent leur avancement.
 */

import { useTheme } from '../useTheme';
import { useColorScheme } from 'react-native';
import { useSombre } from '../useSombre';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { useProgression } from '../progression/Contexte';
import { evaluerBadges } from '../../lib/badges';

export default function Badges() {
  const t = useTheme();
  const { profil } = useProgression();
  const badges = evaluerBadges(profil);
  const obtenus = badges.filter((b) => b.obtenu).length;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '700' }}>
          {obtenus} / {badges.length} badges
        </Text>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 4, marginBottom: t.espace.l }}>
          Décroche des objectifs en réussissant des QCM et en révisant tes cartes.
        </Text>

        {badges.map((b) => (
          <View
            key={b.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: t.couleur.surface,
              borderRadius: t.rayon.m,
              padding: t.espace.m,
              marginBottom: t.espace.s,
              opacity: b.obtenu ? 1 : 0.75,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: b.obtenu ? t.couleur.succesFond : t.couleur.surfaceHaute,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: t.espace.m,
              }}
            >
              <Text style={{ fontSize: 22, opacity: b.obtenu ? 1 : 0.5 }}>{b.icone}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <View style={st.ligne}>
                <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
                  {b.titre}
                </Text>
                {b.obtenu ? (
                  <Text style={{ color: t.couleur.succes, fontSize: t.police.petite, fontWeight: '700' }}>Obtenu ✓</Text>
                ) : (
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>
                    {b.valeur} / {b.cible}
                  </Text>
                )}
              </View>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
                {b.desc}
              </Text>
              {!b.obtenu && (
                <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: 8 }]}>
                  <View
                    style={{
                      width: `${b.cible > 0 ? Math.round((b.valeur / b.cible) * 100) : 0}%`,
                      height: '100%',
                      backgroundColor: t.couleur.accent,
                      borderRadius: 3,
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  ligne: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  piste: { height: 5, borderRadius: 3, overflow: 'hidden' },
});
