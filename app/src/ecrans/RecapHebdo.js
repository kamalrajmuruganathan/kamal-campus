/**
 * Bilan de la semaine — petit récap motivant : XP, jours actifs, sessions,
 * palier de ligue, et l'activité jour par jour. Tout vient des données déjà
 * stockées ; rien de nouveau à saisir.
 */

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { useProgression } from '../progression/Contexte';
import { dateLocale } from '../../lib/serie';
import { activiteParJour } from '../../lib/stats';
import { LIGUES, etatInitial, appliquerRollover, debutSemaine, cohorte } from '../../lib/ligue';

const JOURS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function Kpi({ t, valeur, libelle, couleur }) {
  return (
    <View style={{ flexGrow: 1, flexBasis: '30%', backgroundColor: t.couleur.surface, borderRadius: t.rayon.m, padding: t.espace.m, borderLeftWidth: 3, borderLeftColor: couleur || t.couleur.accent }}>
      <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800' }}>{valeur}</Text>
      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>{libelle}</Text>
    </View>
  );
}

export default function RecapHebdo() {
  const t = theme(useSombre());
  const { profil } = useProgression();
  const jour = dateLocale(new Date());
  const semaine = debutSemaine(jour);

  const ligue = appliquerRollover(profil.ligue && profil.ligue.semaine ? profil.ligue : etatInitial(jour), jour);

  const hist = profil.historique || [];
  const histSem = hist.filter((h) => String(h.date || '').slice(0, 10) >= semaine);
  const sessions = histSem.length;
  const pts = histSem.reduce((s, h) => s + (h.points || 0), 0);
  const joursActifs = new Set(histSem.map((h) => String(h.date || '').slice(0, 10))).size;

  const jours7 = activiteParJour(hist, jour, 7);
  const maxJ = Math.max(1, ...jours7.map((j) => j.count));
  const rang = ligue.xpSemaine > 0 ? cohorte(ligue.semaine, ligue.palier, ligue.xpSemaine).findIndex((m) => m.moi) + 1 : null;

  const message = joursActifs >= 5 ? 'Semaine en or — quelle régularité ! 🔥'
    : joursActifs >= 3 ? 'Belle semaine, continue comme ça 💪'
      : joursActifs >= 1 ? 'Bon début — vise 3 jours la semaine prochaine.'
        : 'Nouvelle semaine, nouveau départ : lance-toi ! 🚀';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '800' }}>Ta semaine</Text>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>Depuis lundi</Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.l }}>
          <Kpi t={t} valeur={`${ligue.xpSemaine} XP`} libelle="cette semaine" couleur={t.couleur.accent} />
          <Kpi t={t} valeur={joursActifs} libelle="jours actifs" couleur={t.couleur.succes} />
          <Kpi t={t} valeur={sessions} libelle="sessions" couleur={t.couleur.physique} />
        </View>

        {/* Activité jour par jour (7 derniers jours) */}
        <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.l }]}>7 DERNIERS JOURS</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, marginTop: t.espace.s, height: 90 }}>
          {jours7.map((j, i) => (
            <View key={j.date} style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ width: '70%', height: `${Math.round((j.count / maxJ) * 100)}%`, minHeight: 3, backgroundColor: j.count > 0 ? t.couleur.accent : t.couleur.trait, borderRadius: 4 }} />
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 4 }}>{JOURS[i]}</Text>
            </View>
          ))}
        </View>

        {/* Ligue */}
        <View style={{ marginTop: t.espace.l, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 26, marginRight: t.espace.m }}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontWeight: '650' }}>Ligue {LIGUES[ligue.palier]}</Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
              {rang ? `${rang}ᵉ de ta cohorte cette semaine` : 'Gagne des XP pour entrer au classement'}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: t.espace.l, padding: t.espace.m, backgroundColor: t.couleur.succesFond, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650', textAlign: 'center' }}>{message}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({ section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8 } });
