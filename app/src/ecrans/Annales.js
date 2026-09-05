/**
 * Annales — liens vers les sujets officiels et gratuits.
 *
 * L'appli ne peut pas héberger les vrais sujets du bac (protégés par le droit
 * d'auteur) : on renvoie donc vers les sources officielles et gratuites, que
 * l'élève télécharge lui-même. Ouvrir un lien demande une connexion Internet.
 */

import { useTheme } from '../useTheme';
import { useColorScheme } from 'react-native';
import { useSombre } from '../useSombre';
import { View, Text, ScrollView, Pressable, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Bandeau } from '../composants/communs';

const SOURCES = [
  {
    groupe: 'Officiel — toutes matières',
    liens: [
      { nom: 'éduscol', url: 'https://eduscol.education.fr', desc: 'Le portail pédagogique du ministère : sujets et ressources par matière.' },
      { nom: 'Sujets zéro & spécimens (éduscol)', url: 'https://eduscol.education.fr', desc: 'Exemples officiels de chaque spécialité — cherche ta matière.' },
      { nom: 'Ministère de l’Éducation nationale', url: 'https://www.education.gouv.fr', desc: 'Textes des épreuves et calendrier officiel.' },
      { nom: 'Site de ton académie', url: 'https://www.education.gouv.fr', desc: 'Chaque académie publie ses banques de sujets (cherche « annales »).' },
    ],
  },
  {
    groupe: 'Portails d’annales gratuits',
    liens: [
      { nom: 'sujetdebac.fr', url: 'https://www.sujetdebac.fr', desc: 'Sujets et corrigés gratuits, toutes matières, par année.' },
      { nom: 'freemaths.fr', url: 'https://www.freemaths.fr', desc: 'Annales corrigées gratuites (maths, physique, SVT, NSI…).' },
    ],
  },
  {
    groupe: 'Mathématiques',
    liens: [
      { nom: 'APMEP — Annales', url: 'https://www.apmep.fr', desc: 'Association des professeurs de maths : annales du bac et du brevet, corrigées.' },
      { nom: 'freemaths.fr — Maths', url: 'https://www.freemaths.fr', desc: 'Sujets spé maths (Première & Terminale) corrigés.' },
    ],
  },
  {
    groupe: 'Physique-chimie',
    liens: [
      { nom: 'Labolycee', url: 'https://labolycee.org', desc: 'La référence : annales corrigées de physique-chimie, gratuites.' },
      { nom: 'éduscol Physique-chimie', url: 'https://eduscol.education.fr', desc: 'Programmes et sujets officiels.' },
    ],
  },
  {
    groupe: 'SVT',
    liens: [
      { nom: 'Planet-Vie (ENS)', url: 'https://planet-vie.ens.fr', desc: 'Ressources scientifiques de référence en SVT.' },
      { nom: 'éduscol SVT', url: 'https://eduscol.education.fr', desc: 'Sujets et exemples officiels de SVT.' },
    ],
  },
  {
    groupe: 'NSI (numérique et sciences informatiques)',
    liens: [
      { nom: 'éduscol NSI', url: 'https://eduscol.education.fr', desc: 'Sujets zéro et ressources officielles de NSI.' },
      { nom: 'Pixees (Inria)', url: 'https://pixees.fr', desc: 'Ressources et exercices d’informatique (SNT & NSI).' },
    ],
  },
  {
    groupe: 'Sciences de l’ingénieur',
    liens: [
      { nom: 'éduscol Sciences de l’ingénieur', url: 'https://eduscol.education.fr', desc: 'Sujets et ressources officiels de la spécialité SI.' },
    ],
  },
  {
    groupe: 'Enseignement scientifique',
    liens: [
      { nom: 'éduscol — Enseignement scientifique', url: 'https://eduscol.education.fr', desc: 'Exemples et attendus officiels du tronc commun.' },
    ],
  },
  {
    groupe: 'SNT (Seconde)',
    liens: [
      { nom: 'éduscol SNT', url: 'https://eduscol.education.fr', desc: 'Ressources officielles de SNT.' },
    ],
  },
];

export default function Annales() {
  const t = useTheme();
  const ouvrir = (url) => Linking.openURL(url).catch(() => {});

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Bandeau
          t={t}
          texte={
            '📎 Les vrais sujets du bac sont protégés : l’appli ne les recopie pas, elle renvoie vers '
            + 'les sources officielles et gratuites. Ouvrir un lien demande une connexion Internet.'
          }
        />

        {SOURCES.map((s) => (
          <View key={s.groupe} style={{ marginTop: t.espace.m }}>
            <Text style={[st.groupe, { color: t.couleur.attenue }]}>{s.groupe.toUpperCase()}</Text>
            {s.liens.map((l) => (
              <Pressable
                key={l.nom + l.url}
                onPress={() => ouvrir(l.url)}
                accessibilityRole="link"
                accessibilityLabel={`${l.nom}, ${l.url}`}
                style={({ pressed }) => [
                  st.carte,
                  {
                    backgroundColor: t.couleur.surface,
                    borderColor: t.couleur.trait,
                    borderRadius: t.rayon.m,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '650' }}>{l.nom}</Text>
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 3, lineHeight: 18 }}>{l.desc}</Text>
                  <Text style={{ color: t.couleur.accent, fontSize: t.police.minuscule, marginTop: 5 }}>{l.url}</Text>
                </View>
                <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>↗</Text>
              </Pressable>
            ))}
          </View>
        ))}

        <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: t.espace.l, lineHeight: 18 }}>
          Astuce : sur la page d'une matière, cherche « annales », « sujets » ou « sujets zéro ». Les corrigés
          sont souvent proposés à côté du sujet.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  groupe: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginBottom: 8, marginTop: 6 },
  carte: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 14, marginBottom: 10 },
});
