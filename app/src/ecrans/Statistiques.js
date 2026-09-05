/**
 * Statistiques — vue d'ensemble simple : heatmap d'activité (12 semaines),
 * maîtrise moyenne par matière, et chapitres à revoir. Tout vient de la
 * progression déjà stockée sur l'appareil.
 */

import { useTheme } from '../useTheme';
import { useMemo } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { useProgression } from '../progression/Contexte';
import { chapitreParId, LIBELLES_MATIERE } from '../contenu-index';
import { dateLocale } from '../../lib/serie';
import { activiteParJour, intensite, joursActifs, maitriseParMatiere } from '../../lib/stats';

const NB_JOURS = 84; // 12 semaines

function Kpi({ t, valeur, libelle }) {
  return (
    <View style={{ flexGrow: 1, flexBasis: '22%', backgroundColor: t.couleur.surface, borderRadius: t.rayon.m, padding: t.espace.m }}>
      <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800' }}>{valeur}</Text>
      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>{libelle}</Text>
    </View>
  );
}

export default function Statistiques({ navigation }) {
  const t = useTheme();
  const { profil } = useProgression();
  const jour = dateLocale(new Date());

  const jours = useMemo(() => activiteParJour(profil.historique, jour, NB_JOURS), [profil.historique, jour]);
  const actifs = joursActifs(jours);

  // Maîtrise par matière à partir des chapitres travaillés.
  const chapitres = Object.entries(profil.chapitres || {});
  const entrees = chapitres.map(([id, c]) => ({ matiere: chapitreParId(id)?.matiere, score: c.meilleurScore || 0 }));
  const maitrise = maitriseParMatiere(entrees);

  // Chapitres à revoir : score le plus bas (< 80 %).
  const aRevoir = chapitres
    .map(([id, c]) => ({ id, titre: c.titre, score: c.meilleurScore || 0, ch: chapitreParId(id) }))
    .filter((x) => x.ch && x.score < 0.8)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5);

  const tauxGlobal = profil.reponsesTotal > 0 ? Math.round((profil.reponsesJustes / profil.reponsesTotal) * 100) : 0;

  // Palette d'intensité (theme-aware) : vide → succès plein.
  const couleurs = [t.couleur.trait, t.couleur.succes + '55', t.couleur.succes + '99', t.couleur.succes + 'cc', t.couleur.succes];
  const semaines = [];
  for (let i = 0; i < jours.length; i += 7) semaines.push(jours.slice(i, i + 7));

  const vide = profil.qcmTermines === 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {vide ? (
          <View style={{ padding: t.espace.l, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
            <Text style={{ color: t.couleur.texte, fontWeight: '650', fontSize: t.police.normale }}>Pas encore de statistiques.</Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Fais quelques QCM : ton activité et ta maîtrise s'afficheront ici.
            </Text>
          </View>
        ) : (
          <>
            {/* KPIs */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s }}>
              <Kpi t={t} valeur={profil.qcmTermines} libelle="QCM terminés" />
              <Kpi t={t} valeur={`${tauxGlobal}%`} libelle="bonnes réponses" />
              <Kpi t={t} valeur={actifs} libelle="jours actifs (12 sem.)" />
              <Kpi t={t} valeur={profil.meilleureSerieJours || 0} libelle="meilleure série" />
            </View>

            {/* Heatmap d'activité */}
            <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.l }]}>ACTIVITÉ (12 DERNIÈRES SEMAINES)</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: t.espace.s }}>
              <View style={{ flexDirection: 'row', gap: 4 }}>
                {semaines.map((sem, si) => (
                  <View key={si} style={{ gap: 4 }}>
                    {sem.map((d) => (
                      <View key={d.date} style={{ width: 13, height: 13, borderRadius: 3, backgroundColor: couleurs[intensite(d.count)] }} />
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: t.espace.s }}>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>moins</Text>
              {couleurs.map((c, i) => <View key={i} style={{ width: 11, height: 11, borderRadius: 2, backgroundColor: c }} />)}
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>plus</Text>
            </View>

            {/* Maîtrise par matière */}
            {maitrise.length > 0 && (
              <>
                <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.l }]}>MAÎTRISE PAR MATIÈRE</Text>
                {maitrise.map((m) => {
                  const c = couleurMatiere(t, m.matiere);
                  const pct = Math.round(m.moyenne * 100);
                  return (
                    <View key={m.matiere} style={{ marginTop: t.espace.s }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                          {LIBELLES_MATIERE[m.matiere] ?? m.matiere}
                        </Text>
                        <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>{pct}% · {m.nombre} chap.</Text>
                      </View>
                      <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: 4 }]}>
                        <View style={{ width: `${pct}%`, height: '100%', backgroundColor: c, borderRadius: 3 }} />
                      </View>
                    </View>
                  );
                })}
              </>
            )}

            {/* À revoir */}
            {aRevoir.length > 0 && (
              <>
                <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.l }]}>À REVOIR EN PRIORITÉ</Text>
                {aRevoir.map((x) => (
                  <Pressable
                    key={x.id}
                    onPress={() => navigation.navigate('Chapitre', { id: x.id, titre: x.titre })}
                    style={({ pressed }) => [st.ligne, { backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, borderRadius: t.rayon.m, opacity: pressed ? 0.7 : 1 }]}
                  >
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }} numberOfLines={1}>{x.titre}</Text>
                      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 1 }}>meilleur score : {Math.round(x.score * 100)}%</Text>
                    </View>
                    <Text style={{ color: t.couleur.accent, fontSize: t.police.grande }}>›</Text>
                  </Pressable>
                ))}
              </>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8 },
  piste: { height: 7, borderRadius: 3, overflow: 'hidden' },
  ligne: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 12, marginTop: 8 },
});
