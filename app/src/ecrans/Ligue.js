/**
 * Ligue hebdomadaire — classement, palier, objectif de la semaine.
 *
 * L'élève voit son palier (Bronze → Diamant), sa place dans une cohorte
 * d'adversaires SIMULÉS (générés localement, ce ne sont pas de vrais joueurs),
 * et sa progression vers l'objectif d'XP de la semaine. Le passage d'une semaine
 * à l'autre (promotion / relégation) est résolu automatiquement.
 */

import { useEffect, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import { useProgression } from '../progression/Contexte';
import { dateLocale } from '../../lib/serie';
import { LIGUES, etatInitial, appliquerRollover, cohorte } from '../../lib/ligue';

const OBJECTIF_HEBDO = 250; // XP visés dans la semaine
const COULEURS = ['#a97142', '#9aa7b4', '#e0a72e', '#37c2b6', '#6aa8ff']; // bronze→diamant
const EMOJIS = ['🥉', '🥈', '🥇', '💠', '💎'];

export default function Ligue() {
  const t = theme(useSombre());
  const { profil, definirReglages } = useProgression();
  const jour = dateLocale(new Date());

  // Résout un éventuel changement de semaine pour l'affichage.
  const etat = useMemo(() => {
    const base = profil.ligue && profil.ligue.semaine ? profil.ligue : etatInitial(jour);
    return appliquerRollover(base, jour);
  }, [profil.ligue, jour]);

  // Persiste si le rollover a modifié l'état (nouvelle semaine pendant l'absence).
  useEffect(() => {
    if (JSON.stringify(etat) !== JSON.stringify(profil.ligue)) definirReglages({ ligue: etat });
  }, [etat]); // eslint-disable-line react-hooks/exhaustive-deps

  const classement = cohorte(etat.semaine, etat.palier, etat.xpSemaine);
  const rang = classement.findIndex((m) => m.moi) + 1;
  const couleur = COULEURS[etat.palier];
  const progres = Math.min(1, etat.xpSemaine / OBJECTIF_HEBDO);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {/* Bandeau palier */}
        <View style={{ alignItems: 'center', padding: t.espace.l, borderRadius: t.rayon.l, backgroundColor: t.couleur.surface, borderWidth: 2, borderColor: couleur }}>
          <Text style={{ fontSize: 44 }}>{EMOJIS[etat.palier]}</Text>
          <Text style={{ color: couleur, fontSize: t.police.titre, fontWeight: '800', marginTop: 4 }}>Ligue {LIGUES[etat.palier]}</Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>
            {rang}ᵉ cette semaine · {etat.xpSemaine} XP
          </Text>
          {etat.dernier && (
            <Text style={{ color: etat.dernier.sens === 'promotion' ? t.couleur.succes : (etat.dernier.sens === 'relegation' ? t.couleur.erreur : t.couleur.attenue), fontSize: t.police.minuscule, marginTop: 8, fontWeight: '700' }}>
              {etat.dernier.sens === 'promotion' ? `⬆️ Promu ! (${etat.dernier.rang}ᵉ la semaine passée)`
                : etat.dernier.sens === 'relegation' ? `⬇️ Relégué (${etat.dernier.rang}ᵉ la semaine passée)`
                  : `Maintenu (${etat.dernier.rang}ᵉ la semaine passée)`}
            </Text>
          )}
        </View>

        {/* Objectif hebdo */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>Objectif de la semaine</Text>
          <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: t.espace.m }]}>
            <View style={{ width: `${Math.round(progres * 100)}%`, height: '100%', backgroundColor: couleur, borderRadius: 4 }} />
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 6 }}>
            {etat.xpSemaine} / {OBJECTIF_HEBDO} XP {progres >= 1 ? '· objectif atteint ✓' : ''}
          </Text>
        </View>

        {/* Classement */}
        <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.l }]}>CLASSEMENT DE LA SEMAINE</Text>
        {classement.map((m, i) => {
          const promu = i < 3; const relegue = i >= classement.length - 3;
          return (
            <View
              key={m.nom + i}
              style={{
                flexDirection: 'row', alignItems: 'center', padding: t.espace.m, marginTop: t.espace.s,
                borderRadius: t.rayon.m,
                backgroundColor: m.moi ? couleur + '22' : t.couleur.surface,
                borderWidth: m.moi ? 1.5 : 1, borderColor: m.moi ? couleur : t.couleur.trait,
              }}
            >
              <Text style={{ width: 28, color: t.couleur.attenue, fontWeight: '800' }}>{i + 1}</Text>
              <Text style={{ flex: 1, color: t.couleur.texte, fontWeight: m.moi ? '800' : '600' }}>
                {m.nom} {promu ? '⬆️' : relegue ? '⬇️' : ''}
              </Text>
              <Text style={{ color: t.couleur.texte, fontWeight: '700', fontVariant: ['tabular-nums'] }}>{m.xp} XP</Text>
            </View>
          );
        })}

        <Text style={{ color: t.couleur.faint ?? t.couleur.attenue, fontSize: t.police.minuscule, marginTop: t.espace.m, lineHeight: 17 }}>
          Les 3 premiers montent d'une ligue, les 3 derniers descendent, chaque lundi. Les adversaires
          sont simulés (hors ligne) : gagne des XP en révisant pour grimper !
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  piste: { height: 8, borderRadius: 4, overflow: 'hidden' },
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8 },
});
