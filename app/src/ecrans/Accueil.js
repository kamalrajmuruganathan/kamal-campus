/**
 * Écran d'accueil — choix du niveau puis du parcours.
 *
 * ⚠️ Point de conception important : on ne demande PAS « ta filière ».
 * Les filières S/ES/L n'existent plus. En Première générale, deux programmes
 * de maths coexistent (spécialité, ou maths intégrées à l'enseignement
 * scientifique) : l'élève choisit son PARCOURS, pas une filière.
 */

import { useTheme } from '../useTheme';
import { useState, useMemo, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { listerDemandesRecues, ecouterAmities } from '../cloud/social';
import { View, Text, ScrollView, Pressable, useColorScheme, StyleSheet } from 'react-native';
import { useSombre } from '../useSombre';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { Carte } from '../composants/communs';
import { niveaux, parcoursDe, LIBELLES_NIVEAU, LIBELLES_PARCOURS, CHAPITRES } from '../contenu-index';
import { useProgression } from '../progression/Contexte';
import { niveauPourXp } from '../../lib/progression';
import { mascotteNiveau } from '../../lib/mascotte';
import { serieAffichee, dateLocale } from '../../lib/serie';
import { quetesDuJour, quetesFaites } from '../../lib/quetes';
import { prochaineAction } from '../coach';
import { useLangue } from '../i18n';

export default function Accueil({ navigation }) {
  const t = useTheme();
  const { profil } = useProgression();
  const { L } = useLangue();
  const [niveau, setNiveau] = useState(profil.niveauParDefaut ?? null);
  const prog = niveauPourXp(profil.xp);
  const masc = mascotteNiveau(prog.niveau);
  const jourA = dateLocale(new Date());
  const action = useMemo(() => prochaineAction(profil, jourA), [profil, jourA]);
  const xpJour = profil.jourCourant === jourA ? profil.xpDuJour : 0;
  const activitesJour = (profil.historique || []).filter((h) => String(h.date || '').slice(0, 10) === jourA).length;
  const quetes = quetesDuJour({ objectif: profil.objectifQuotidien || 50, xpJour, activitesJour });
  const dimanche = new Date().getDay() === 0; // bilan de la semaine mis en avant le dimanche
  const serie = serieAffichee(profil.dernierJourValide, profil.serieJours, dateLocale(new Date()));

  // Demandes d'ami en attente : rechargées à chaque retour sur l'accueil (pastille sur « Amis »).
  const [nbDemandes, setNbDemandes] = useState(0);
  // Mise à jour en direct (temps réel) + filet de sécurité toutes les 60 s tant que l'accueil est affiché.
  useFocusEffect(useCallback(() => {
    let actif = true;
    const charger = () => listerDemandesRecues().then((d) => { if (actif) setNbDemandes(d.length); }).catch(() => {});
    charger();
    const arreter = ecouterAmities(charger);
    const minuterie = setInterval(charger, 60000);
    return () => { actif = false; arreter(); clearInterval(minuterie); };
  }, []));

  const listeNiveaux = niveaux();
  const totalQuestions = CHAPITRES.reduce((s, c) => s + c.nbQuestions, 0);
  const nbMatieres = new Set(CHAPITRES.map((c) => c.matiere)).size;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['top']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: t.espace.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.titre, fontWeight: '700', flexShrink: 1 }}>
            {profil.prenom ? L('home.salut', { prenom: profil.prenom }) : 'Kamal Campus'}
          </Text>
          {/* Amis : toujours visible en haut de l'accueil, avec le nombre de demandes reçues */}
          <Pressable
            onPress={() => navigation.navigate('Amis')}
            accessibilityRole="button"
            accessibilityLabel={nbDemandes > 0 ? `Amis, ${nbDemandes} demande${nbDemandes > 1 ? 's' : ''} en attente` : 'Amis'}
            style={({ pressed }) => ({
              flexDirection: 'row', alignItems: 'center', gap: 6,
              backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, borderWidth: 1,
              borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, opacity: pressed ? 0.7 : 1,
            })}
          >
            <Text style={{ fontSize: 16 }}>👥</Text>
            <Text style={{ color: t.couleur.texte, fontWeight: '700', fontSize: t.police.petite }}>Amis</Text>
            {nbDemandes > 0 && (
              <View style={{ backgroundColor: t.couleur.erreur, borderRadius: 999, minWidth: 20, height: 20, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 11, fontWeight: '800' }}>{nbDemandes}</Text>
              </View>
            )}
          </Pressable>
        </View>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.normale, marginTop: 4 }}>
          {L('app.sousTitre', { m: nbMatieres, n: CHAPITRES.length.toLocaleString('fr-FR'), q: totalQuestions.toLocaleString('fr-FR') })}
        </Text>

        {/* Ta prochaine action — une seule action prioritaire, pour réduire les clics */}
        {action && (
          <Pressable
            onPress={() => (action.params ? navigation.navigate(action.ecran, action.params) : navigation.navigate(action.ecran))}
            accessibilityRole="button"
            accessibilityLabel={`Ta prochaine action : ${action.titre}`}
            style={({ pressed }) => [{
              marginTop: t.espace.l, borderRadius: t.rayon.l, padding: t.espace.l,
              backgroundColor: t.couleur.accent, opacity: pressed ? 0.9 : 1,
              flexDirection: 'row', alignItems: 'center', gap: t.espace.m,
            }]}
          >
            <Text style={{ fontSize: 30 }}>{action.icone}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.minuscule, fontWeight: '800', letterSpacing: 0.5, textTransform: 'uppercase', opacity: 0.85 }}>Ta prochaine action</Text>
              <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '800', marginTop: 2 }}>{action.titre}</Text>
              <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.minuscule, opacity: 0.9, marginTop: 1 }}>{action.sousTitre}</Text>
            </View>
            <Text style={{ color: t.couleur.accentTexte, fontSize: 22 }}>›</Text>
          </Pressable>
        )}

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
            <Text style={{ fontSize: 22 }}>{masc.emoji}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Niveau {prog.niveau} · {masc.nom}
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
              {L('home.xp', { xp: profil.xp, r: prog.xpRestant, niv: prog.niveau + 1 })}
            </Text>
          </View>
          {serie > 0 && (
            <View style={{ alignItems: 'center', marginLeft: t.espace.s }}>
              <Text style={{ fontSize: 18 }}>🔥</Text>
              <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, fontWeight: '800' }}>{serie}</Text>
            </View>
          )}
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>›</Text>
        </Pressable>

        {/* Quêtes du jour — objectifs légers, se réinitialisent chaque jour */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: t.couleur.texte, fontWeight: '650', fontSize: t.police.petite }}>Quêtes du jour</Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>{quetesFaites(quetes)} / 3</Text>
          </View>
          {quetes.map((q) => (
            <View key={q.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <Text style={{ fontSize: 15 }}>{q.fait ? '✅' : '⬜'}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ color: q.fait ? t.couleur.attenue : t.couleur.texte, fontSize: t.police.minuscule, textDecorationLine: q.fait ? 'line-through' : 'none' }}>{q.texte}</Text>
                <View style={{ height: 5, borderRadius: 3, backgroundColor: t.couleur.trait, overflow: 'hidden', marginTop: 3 }}>
                  <View style={{ width: `${Math.round(q.progres * 100)}%`, height: '100%', backgroundColor: t.couleur.succes }} />
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Bilan de la semaine — mis en avant le dimanche */}
        {dimanche && profil.qcmTermines > 0 && (
          <Pressable
            onPress={() => navigation.navigate('RecapHebdo')}
            accessibilityRole="button"
            style={({ pressed }) => [{
              marginTop: t.espace.m, padding: t.espace.m, borderRadius: t.rayon.m,
              backgroundColor: t.couleur.surface, borderWidth: 1, borderColor: t.couleur.accent,
              flexDirection: 'row', alignItems: 'center', opacity: pressed ? 0.7 : 1,
            }]}
          >
            <Text style={{ fontSize: 22, marginRight: t.espace.m }}>📅</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ color: t.couleur.texte, fontWeight: '650', fontSize: t.police.normale }}>Ton bilan de la semaine</Text>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>XP, jours actifs, progression — c'est dimanche !</Text>
            </View>
            <Text style={{ color: t.couleur.accent, fontSize: t.police.grande }}>›</Text>
          </Pressable>
        )}

        {!niveau ? (
          <>
            <Text style={[st.section, { color: t.couleur.attenue, marginTop: t.espace.xl }]}>
              {L('home.choisisNiveau')}
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
            titre={L('card.recherche.t')}
            sousTitre={L('card.recherche.s')}
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('Recherche')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.reviser.t')}
            sousTitre={L('card.reviser.s')}
            couleur={t.couleur.alerte}
            onPress={() => navigation.navigate('Revision')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="⏱️ Révision express (2 min)"
            sousTitre="Un max de questions en 2 minutes chrono — l'XP compte pour ta série"
            couleur={t.couleur.succes}
            onPress={() => navigation.navigate('Express')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="🎯 Réviser mes erreurs"
            sousTitre={
              (profil.erreurs || []).length > 0
                ? `${profil.erreurs.length} question${profil.erreurs.length > 1 ? 's' : ''} ratée${profil.erreurs.length > 1 ? 's' : ''} à retravailler`
                : 'Les questions que tu rates reviennent ici pour les refaire'
            }
            couleur={t.couleur.erreur}
            onPress={() => navigation.navigate('ModeErreurs')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="🗓️ Planning d'étude"
            sousTitre={
              (profil.planning || []).length > 0
                ? `${profil.planning.length} créneau${profil.planning.length > 1 ? 'x' : ''} · rappels programmés`
                : 'Programme tes créneaux et reçois un rappel à l’heure'
            }
            couleur={t.couleur.physique}
            onPress={() => navigation.navigate('Planning')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="🧠 Révision intelligente"
            sousTitre="Répétition espacée : les cartes reviennent au bon moment"
            couleur={t.couleur.succes}
            onPress={() => navigation.navigate('RevisionSRS')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="⚔️ Duel à deux"
            sousTitre="Défi sur un même téléphone : qui aura le meilleur score ?"
            couleur={t.couleur.alerte}
            onPress={() => navigation.navigate('Duel')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="🏆 Ligue hebdo"
            sousTitre="Grimpe du Bronze au Diamant en gagnant des XP chaque semaine"
            couleur={t.couleur.alerte}
            onPress={() => navigation.navigate('Ligue')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="👥 Amis et défis"
            sousTitre="Ajoute tes amis, défie-les sur un chapitre et compare vos scores"
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('Defis')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="📲 Défi à distance"
            sousTitre="Envoie un QR/code à un ami : mêmes questions, comparez vos scores"
            couleur={t.couleur.physique}
            onPress={() => navigation.navigate('Defi')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.favoris.t')}
            sousTitre={L('card.favoris.s')}
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('Favoris')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.resolveur.t')}
            sousTitre={L('card.resolveur.s')}
            couleur={t.couleur.succes}
            onPress={() => navigation.navigate('Resolveur')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.enigmes.t')}
            sousTitre={L('card.enigmes.s')}
            couleur={t.couleur.physique}
            onPress={() => navigation.navigate('Enigmes')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.formulaires.t')}
            sousTitre={L('card.formulaires.s')}
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('Formulaires')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.bacblanc.t')}
            sousTitre={L('card.bacblanc.s')}
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('BacBlanc')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="📝 Mode examen"
            sousTitre="Passe un bac blanc en conditions réelles : chrono, sans correction, note à la fin"
            couleur={t.couleur.erreur}
            onPress={() => navigation.navigate('ModeExamen')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.sujets.t')}
            sousTitre={L('card.sujets.s')}
            couleur={t.couleur.physique}
            onPress={() => navigation.navigate('Sujets')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre="📎 Annales officielles"
            sousTitre="Liens vers les vrais sujets (éduscol, APMEP…)"
            detail="Sources gratuites, à télécharger"
            couleur={t.couleur.accent}
            onPress={() => navigation.navigate('Annales')}
          />
          <View style={{ height: t.espace.m }} />
          <Carte
            t={t}
            titre={L('card.outils.t')}
            sousTitre={L('card.outils.s')}
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
          {L('home.apropos')}
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
