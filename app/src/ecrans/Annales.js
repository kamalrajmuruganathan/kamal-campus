/**
 * Annales — liens vers les sujets officiels et gratuits.
 *
 * L'appli ne peut pas héberger les vrais sujets du bac (protégés par le droit
 * d'auteur) : on renvoie donc vers les sources officielles et gratuites, que
 * l'élève télécharge lui-même. Ouvrir un lien demande une connexion Internet.
 */

import { useColorScheme } from 'react-native';
import { View, Text, ScrollView, Pressable, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { Bandeau } from '../composants/communs';

const SOURCES = [
  {
    groupe: 'Toutes matières',
    liens: [
      { nom: 'éduscol', url: 'https://eduscol.education.fr', desc: 'Sujets zéro et exemples officiels, par matière.' },
      { nom: 'Ministère de l’Éducation nationale', url: 'https://www.education.gouv.fr', desc: 'Textes des épreuves et informations officielles.' },
      { nom: 'Site de ton académie', url: 'https://www.education.gouv.fr', desc: 'Chaque académie publie des banques de sujets (cherche « annales »).' },
    ],
  },
  {
    groupe: 'Mathématiques',
    liens: [
      { nom: 'APMEP — Annales', url: 'https://www.apmep.fr', desc: 'Association des professeurs de maths : annales du bac et du brevet, corrigées.' },
    ],
  },
  {
    groupe: 'Physique-chimie',
    liens: [
      { nom: 'Labolycee', url: 'https://labolycee.org', desc: 'Annales corrigées de physique-chimie, gratuites.' },
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
    groupe: 'NSI · SNT · Sciences de l’ingénieur',
    liens: [
      { nom: 'éduscol NSI / SNT / SI', url: 'https://eduscol.education.fr', desc: 'Sujets zéro et ressources officielles pour le numérique et la techno.' },
    ],
  },
  {
    groupe: 'Enseignement scientifique',
    liens: [
      { nom: 'éduscol — Enseignement scientifique', url: 'https://eduscol.education.fr', desc: 'Exemples et attendus officiels du tronc commun.' },
    ],
  },
];

export default function Annales() {
  const t = theme(useColorScheme() === 'dark');
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
