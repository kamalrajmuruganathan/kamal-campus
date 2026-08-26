/**
 * Écran d'accueil — choix du niveau puis du parcours.
 *
 * ⚠️ Point de conception important : on ne demande PAS « ta filière ».
 * Les filières S/ES/L n'existent plus. En Première générale, deux programmes
 * de maths coexistent (spécialité, ou maths intégrées à l'enseignement
 * scientifique) : l'élève choisit son PARCOURS, pas une filière.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { niveaux, parcoursDe, LIBELLES_NIVEAU, LIBELLES_PARCOURS, CHAPITRES } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { niveauPourXp } from '../../lib/progression';

export default function Accueil({ navigation }) {
  const t = theme(useColorScheme() === 'dark');
  const [niveau, setNiveau] = useState(null);
  const { profil } = useProgression();
  const prog = niveauPourXp(profil.xp);

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

        {/* Ma progression — niveau et XP, accès direct au profil */}
        <Pressable
          onPress={() => navigation.navigate('Profil')}
          accessibilityRole="button"
          accessibilityLabel={`Ma progression, niveau ${prog.niveau}, ${prog.titre}`}
          style={({ pressed }) => [
            st.progression,
            {
              backgroundColor: t.couleur.surface,
              borderColor: t.couleur.trait,
              borderRadius: t.rayon.m,
              marginTop: t.espace.l,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: t.couleur.accent,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: t.espace.m,
            }}
          >
            <Text style={{ color: t.couleur.accentTexte, fontSize: 18, fontWeight: '800' }}>
              {prog.niveau}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Ma progression · {prog.titre}
            </Text>
            <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: 6 }]}>
              <View
                style={{
                  width: `${Math.round(prog.progression * 100)}%`,
                  height: '100%',
                  backgroundColor: t.couleur.accent,
                  borderRadius: 3,
                }}
              />
            </View>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>
              {profil.xp} XP · encore {prog.xpRestant} pour le niveau {prog.niveau + 1}
            </Text>
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>›</Text>
        </Pressable>

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
            titre="Formulaires"
            sousTitre="L'essentiel à savoir par cœur, par niveau"
            detail="Aide-mémoire de révision"
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('Formulaires')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="Bac blanc / brevet blanc"
            sousTitre="QCM de révision, plusieurs chapitres"
            detail="Teste où tu en es"
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('BacBlanc')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="Sujets type bac / brevet"
            sousTitre="Des épreuves entières, corrigées"
            detail="S'entraîner en conditions"
            couleur={t.couleur.physique}
            onPress={() => navigation.navigate('Sujets')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="Outils de calcul"
            sousTitre="Second degré, dérivée, statistiques, chimie…"
            detail="Calcul exact, avec le détail des étapes"
            couleur={t.couleur.succes}
            onPress={() => navigation.navigate('Outils')}
          />
        </View>

        <Text
          onPress={() => navigation.navigate('APropos')}
          accessibilityRole="button"
          style={{
            color: t.couleur.attenue,
            fontSize: t.police.petite,
            textAlign: 'center',
            marginTop: t.espace.xl,
            textDecorationLine: 'underline',
          }}
        >
          À propos de Kamal Campus
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginBottom: 10 },
  enTete: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progression: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 14 },
  piste: { height: 6, borderRadius: 3, overflow: 'hidden' },
});
