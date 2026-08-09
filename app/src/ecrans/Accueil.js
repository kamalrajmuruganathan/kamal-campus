/**
 * Écran d'accueil — choix du niveau puis du parcours.
 *
 * ⚠️ Point de conception important : on ne demande PAS « ta filière ».
 * Les filières S/ES/L n'existent plus. En Première générale, deux programmes
 * de maths coexistent (spécialité, ou maths intégrées à l'enseignement
 * scientifique) : l'élève choisit son PARCOURS, pas une filière.
 */

import { useState } from 'react';
import { View, Text, ScrollView, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { niveaux, parcoursDe, LIBELLES_NIVEAU, LIBELLES_PARCOURS, CHAPITRES } from '../contenu-index';

export default function Accueil({ navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const [niveau, setNiveau] = useState(null);

  const listeNiveaux = niveaux();
  const totalQuestions = CHAPITRES.reduce((s, c) => s + c.nbQuestions, 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['top']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '700' }}>
          Kamal Campus
        </Text>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.normale, marginTop: 4 }}>
          Maths & Physique-Chimie — {CHAPITRES.length} chapitres, {totalQuestions} questions
        </Text>

        {!niveau ? (
          <>
            <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.xl }]}>
              CHOISIS TON NIVEAU
            </Text>
            {listeNiveaux.map((n) => {
              const nb = CHAPITRES.filter((c) => c.niveau === n).length;
              return (
                <Carte
                  key={n}
                  t={t}
                  titre={LIBELLES_NIVEAU[n] ?? n}
                  sousTitre={`${nb} chapitre${nb > 1 ? 's' : ''}`}
                  couleur={t.couleur.accent}
                  onPress={() => setNiveau(n)}
                />
              );
            })}
          </>
        ) : (
          <>
            <View style={[st.enTete, { marginTop: t.espace.xl }]}>
              <Text style={[st.section, { color: t.couleur.attenue }]}>
                {(LIBELLES_NIVEAU[niveau] ?? niveau).toUpperCase()} — CHOISIS TA MATIÈRE
              </Text>
              <Text
                onPress={() => setNiveau(null)}
                accessibilityRole="button"
                style={{ color: t.couleur.accent, fontSize: t.police.petite }}
              >
                Changer
              </Text>
            </View>

            {parcoursDe(niveau).map((p) => (
              <Carte
                key={p.parcours}
                t={t}
                titre={LIBELLES_PARCOURS[p.parcours] ?? p.parcours}
                sousTitre={`${p.nombre} chapitre${p.nombre > 1 ? 's' : ''}`}
                couleur={couleurMatiere(t, p.matiere)}
                onPress={() =>
                  navigation.navigate('Chapitres', {
                    niveau,
                    parcours: p.parcours,
                    titre: LIBELLES_PARCOURS[p.parcours] ?? p.parcours,
                  })
                }
              />
            ))}

            {niveau === 'premiere' && (
              <Text
                style={{
                  color: t.couleur.attenue,
                  fontSize: t.police.minuscule,
                  marginTop: t.espace.s,
                  lineHeight: 18,
                }}
              >
                En Première générale, deux programmes de mathématiques coexistent selon que tu suis
                la spécialité maths ou les maths intégrées à l’enseignement scientifique. Choisis
                celui qui correspond à ton emploi du temps.
              </Text>
            )}
          </>
        )}

        <View style={{ marginTop: t.espace.xl }}>
          <Carte
            t={t}
            titre="Outils de calcul"
            sousTitre="Second degré, dérivée, statistiques, chimie…"
            detail="Calcul exact, avec le détail des étapes"
            couleur={t.couleur.succes}
            onPress={() => navigation.navigate('Outils')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginBottom: 10 },
  enTete: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});
