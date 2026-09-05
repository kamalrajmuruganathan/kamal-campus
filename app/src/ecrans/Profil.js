/**
 * Ma progression — niveau, XP, rang et statistiques de l'élève.
 *
 * Tout vient du contexte de progression (données stockées sur l'appareil).
 * Les points s'obtiennent en réussissant des QCM et des bacs blancs.
 */

import { useTheme } from '../useTheme';
import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useSombre } from '../useSombre';
import { View, Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { useProgression } from '../progression/Contexte';
import { niveauPourXp } from '../../lib/progression';
import { evaluerBadges } from '../../lib/badges';
import { serieAffichee, dateLocale } from '../../lib/serie';
import { appliquerNotifications } from '../notifications';
import { listerVoix } from '../parole';
import { LANGUES, useLangue } from '../i18n';

const LANGUES_ORALES = [
  { code: 'en-US', prefixe: 'en', nom: 'Anglais' },
  { code: 'es-ES', prefixe: 'es', nom: 'Espagnol' },
  { code: 'de-DE', prefixe: 'de', nom: 'Allemand' },
];

const OBJECTIFS = [30, 60, 120, 200];
const HEURES = ['17:00', '18:00', '19:00', '20:00'];
const THEMES = [
  { v: 'systeme', l: 'Système' },
  { v: 'clair', l: '☀️ Clair' },
  { v: 'sombre', l: '🌙 Sombre' },
];
const TAILLES_TEXTE = [
  { v: 'normale', l: 'Normal' },
  { v: 'grande', l: 'Grand' },
  { v: 'tres-grande', l: 'Très grand' },
];
const CONTRASTES = [
  { v: false, l: 'Standard' },
  { v: true, l: '◑ Renforcé' },
];
const VITESSES_LECTURE = [
  { v: 'lent', l: '🐢 Lent' },
  { v: 'normal', l: 'Normal' },
  { v: 'rapide', l: '🐇 Rapide' },
];

const LIBELLE_MATIERE = {
  mathematiques: 'Mathématiques',
  'physique-chimie': 'Physique-chimie',
};

/** "2026-08-26T…" → "26/08/2026" (sans dépendre d'Intl, variable sous Hermes). */
function dateFr(iso) {
  if (typeof iso !== 'string' || iso.length < 10) return '';
  return iso.slice(0, 10).split('-').reverse().join('/');
}

function Case({ t, valeur, libelle }) {
  return (
    <View
      style={{
        flexGrow: 1,
        flexBasis: '30%',
        backgroundColor: t.couleur.surface,
        borderRadius: t.rayon.m,
        padding: t.espace.m,
      }}
    >
      <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '700' }}>
        {valeur}
      </Text>
      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
        {libelle}
      </Text>
    </View>
  );
}

export default function Profil({ navigation }) {
  const t = useTheme();
  const { profil, reinitialiser, definirReglages } = useProgression();
  const { L } = useLangue();

  const jour = dateLocale(new Date());
  const serie = serieAffichee(profil.dernierJourValide, profil.serieJours, jour);
  const objectif = profil.objectifQuotidien || 50;
  const xpJour = profil.jourCourant === jour ? profil.xpDuJour : 0;
  const progJour = objectif > 0 ? Math.min(1, xpJour / objectif) : 0;
  const [heureChoisie, setHeureChoisie] = useState(profil.rappelHeure || '18:00');
  const [voixDispo, setVoixDispo] = useState([]);
  useEffect(() => {
    let vivant = true;
    listerVoix().then((v) => { if (vivant) setVoixDispo(v); });
    return () => { vivant = false; };
  }, []);

  const activerRappel = async (heure) => {
    // On reprogramme tout (rappel + planning) pour ne pas effacer les créneaux.
    const ok = await appliquerNotifications({ ...profil, rappelActif: true, rappelHeure: heure });
    if (ok) {
      definirReglages({ rappelActif: true, rappelHeure: heure });
    } else {
      Alert.alert(
        'Rappel non activé',
        "Les notifications ne sont pas autorisées. Active-les dans les réglages de ton téléphone, ou réessaie depuis une vraie installation de l'app.",
      );
    }
  };
  const couperRappel = async () => {
    definirReglages({ rappelActif: false });
    // Reprogramme sans le rappel quotidien, mais garde les créneaux du planning.
    await appliquerNotifications({ ...profil, rappelActif: false });
  };

  const n = niveauPourXp(profil.xp);
  const tauxGlobal =
    profil.reponsesTotal > 0
      ? Math.round((profil.reponsesJustes / profil.reponsesTotal) * 100)
      : 0;
  const chapitres = Object.values(profil.chapitres || {});
  const maitrises = chapitres.filter((c) => c.meilleurScore >= 0.8).length;
  const badges = evaluerBadges(profil);
  const badgesObtenus = badges.filter((b) => b.obtenu).length;

  const matieres = Object.entries(profil.xpParMatiere || {})
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);
  const maxMatiere = matieres.reduce((m, [, v]) => Math.max(m, v), 0);

  const vierge = profil.qcmTermines === 0;

  const demanderReset = () => {
    Alert.alert(
      'Réinitialiser ma progression ?',
      'Ton niveau, tes points et tes statistiques seront effacés. Cette action est définitive.',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Effacer', style: 'destructive', onPress: reinitialiser },
      ],
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        {/* Bloc niveau */}
        <View
          style={{
            backgroundColor: t.couleur.surface,
            borderRadius: t.rayon.l,
            padding: t.espace.l,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: t.couleur.accent,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: t.espace.m,
              }}
            >
              <Text style={{ color: t.couleur.accentTexte, fontSize: 24, fontWeight: '800' }}>
                {n.niveau}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '700' }}>
                {n.titre}
              </Text>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 2 }}>
                Niveau {n.niveau} · {profil.xp} XP au total
              </Text>
            </View>
          </View>

          {/* barre vers le niveau suivant */}
          <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: t.espace.m }]}>
            <View
              style={{
                width: `${Math.round(n.progression * 100)}%`,
                height: '100%',
                backgroundColor: t.couleur.accent,
                borderRadius: 3,
              }}
            />
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 6 }}>
            {n.xpDansNiveau} / {n.largeurNiveau} XP — encore {n.xpRestant} pour le niveau {n.niveau + 1}
          </Text>
        </View>

        {/* Série + objectif du jour */}
        <View style={{ flexDirection: 'row', gap: t.espace.m, marginTop: t.espace.m }}>
          <View style={[st.carteJour, { backgroundColor: t.couleur.surface, alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={{ fontSize: 26 }}>🔥</Text>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.grande, fontWeight: '800', marginTop: 2 }}>
              {serie}
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule }}>
              jour{serie > 1 ? 's' : ''} de série
            </Text>
          </View>
          <View style={[st.carteJour, { backgroundColor: t.couleur.surface, flex: 1 }]}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
              Objectif du jour
            </Text>
            <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: t.espace.m }]}>
              <View style={{ width: `${Math.round(progJour * 100)}%`, height: '100%', backgroundColor: t.couleur.succes, borderRadius: 3 }} />
            </View>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 6 }}>
              {xpJour} / {objectif} XP {progJour >= 1 ? '· atteint ✓' : ''}
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
              Meilleure série : {profil.meilleureSerieJours || 0} j
            </Text>
          </View>
        </View>

        {/* Choix de l'objectif quotidien */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
          {OBJECTIFS.map((o) => {
            const actif = objectif === o;
            return (
              <Pressable
                key={o}
                onPress={() => definirReglages({ objectifQuotidien: o })}
                style={({ pressed }) => [
                  st.pilule,
                  {
                    backgroundColor: actif ? t.couleur.accent : t.couleur.surface,
                    borderColor: actif ? t.couleur.accent : t.couleur.trait,
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                  {o} XP/j
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Accès aux badges */}
        <Pressable
          onPress={() => navigation.navigate('Badges')}
          accessibilityRole="button"
          style={({ pressed }) => [
            st.badges,
            {
              backgroundColor: t.couleur.surface,
              borderColor: t.couleur.trait,
              borderRadius: t.rayon.m,
              marginTop: t.espace.m,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <Text style={{ fontSize: 20, marginRight: t.espace.m }}>🏅</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Badges
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
              {badgesObtenus} / {badges.length} décrochés
            </Text>
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande }}>›</Text>
        </Pressable>

        {/* Accès aux statistiques */}
        <Pressable
          onPress={() => navigation.navigate('Statistiques')}
          accessibilityRole="button"
          style={({ pressed }) => [
            st.badges,
            { backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, borderRadius: t.rayon.m, marginTop: t.espace.m, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={{ fontSize: 20, marginRight: t.espace.m }}>📊</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>Statistiques</Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
              Activité, maîtrise par matière, chapitres à revoir
            </Text>
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande }}>›</Text>
        </Pressable>

        {/* Bilan de la semaine */}
        <Pressable
          onPress={() => navigation.navigate('RecapHebdo')}
          accessibilityRole="button"
          style={({ pressed }) => [
            st.badges,
            { backgroundColor: t.couleur.surface, borderColor: t.couleur.trait, borderRadius: t.rayon.m, marginTop: t.espace.m, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={{ fontSize: 20, marginRight: t.espace.m }}>📅</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>Bilan de la semaine</Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>XP, jours actifs, palier de ligue</Text>
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande }}>›</Text>
        </Pressable>

        {/* Apparence — thème clair / sombre / système */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
            Apparence
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            « Système » suit le réglage de ton téléphone.
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
            {THEMES.map((th) => {
              const actif = (profil.themePref || 'systeme') === th.v;
              return (
                <Pressable
                  key={th.v}
                  onPress={() => definirReglages({ themePref: th.v })}
                  accessibilityRole="button"
                  accessibilityState={{ selected: actif }}
                  style={({ pressed }) => [
                    st.pilule,
                    { backgroundColor: actif ? t.couleur.accent : t.couleur.fond, borderColor: actif ? t.couleur.accent : t.couleur.trait, opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                    {th.l}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Accessibilité — taille du texte et contraste renforcé */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
            Accessibilité
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            Confort de lecture — s'applique à toute l'application.
          </Text>

          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, fontWeight: '650', marginTop: t.espace.m }}>
            TAILLE DU TEXTE
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.s }}>
            {TAILLES_TEXTE.map((o) => {
              const actif = (profil.tailleTexte || 'normale') === o.v;
              return (
                <Pressable
                  key={o.v}
                  onPress={() => definirReglages({ tailleTexte: o.v })}
                  accessibilityRole="button"
                  accessibilityState={{ selected: actif }}
                  style={({ pressed }) => [
                    st.pilule,
                    { backgroundColor: actif ? t.couleur.accent : t.couleur.fond, borderColor: actif ? t.couleur.accent : t.couleur.trait, opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                    {o.l}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, fontWeight: '650', marginTop: t.espace.m }}>
            CONTRASTE
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.s }}>
            {CONTRASTES.map((o) => {
              const actif = !!profil.contrasteFort === o.v;
              return (
                <Pressable
                  key={String(o.v)}
                  onPress={() => definirReglages({ contrasteFort: o.v })}
                  accessibilityRole="button"
                  accessibilityState={{ selected: actif }}
                  style={({ pressed }) => [
                    st.pilule,
                    { backgroundColor: actif ? t.couleur.accent : t.couleur.fond, borderColor: actif ? t.couleur.accent : t.couleur.trait, opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                    {o.l}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Vitesse de lecture à voix haute (synthèse vocale des langues) */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
            Vitesse de lecture 🔊
          </Text>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
            Pour le bouton « Écouter » des langues (cartes, QCM, fiches).
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
            {VITESSES_LECTURE.map((vi) => {
              const actif = (profil.vitesseParole || 'normal') === vi.v;
              return (
                <Pressable
                  key={vi.v}
                  onPress={() => definirReglages({ vitesseParole: vi.v })}
                  accessibilityRole="button"
                  accessibilityState={{ selected: actif }}
                  style={({ pressed }) => [
                    st.pilule,
                    { backgroundColor: actif ? t.couleur.accent : t.couleur.fond, borderColor: actif ? t.couleur.accent : t.couleur.trait, opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                    {vi.l}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Oral : lecture automatique + choix de voix */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
            Oral : voix &amp; lecture auto 🔊
          </Text>

          {/* Lecture automatique des cartes */}
          <Pressable
            onPress={() => definirReglages({ lectureAutoCartes: !profil.lectureAutoCartes })}
            accessibilityRole="switch"
            accessibilityState={{ checked: !!profil.lectureAutoCartes }}
            style={({ pressed }) => [
              st.pilule,
              {
                alignSelf: 'flex-start',
                marginTop: t.espace.m,
                backgroundColor: profil.lectureAutoCartes ? t.couleur.accent : t.couleur.fond,
                borderColor: profil.lectureAutoCartes ? t.couleur.accent : t.couleur.trait,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Text style={{ color: profil.lectureAutoCartes ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
              {profil.lectureAutoCartes ? '✓ ' : ''}Lire les cartes automatiquement
            </Text>
          </Pressable>

          {/* Choix de la voix, par langue */}
          {voixDispo.length === 0 ? (
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: t.espace.m, lineHeight: 18 }}>
              Les voix dépendent de ton téléphone. Ajoute des voix dans les réglages de l'appareil
              (Accessibilité → Synthèse vocale) pour pouvoir en choisir ici.
            </Text>
          ) : (
            LANGUES_ORALES.map((lg) => {
              const voix = voixDispo.filter((v) => String(v.language || '').toLowerCase().startsWith(lg.prefixe)).slice(0, 4);
              if (voix.length === 0) return null;
              const choisie = (profil.voix || {})[lg.code] || null;
              const poser = (id) => {
                const nv = { ...(profil.voix || {}) };
                if (id) nv[lg.code] = id; else delete nv[lg.code];
                definirReglages({ voix: nv });
              };
              return (
                <View key={lg.code} style={{ marginTop: t.espace.m }}>
                  <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.6 }}>
                    {lg.nom}
                  </Text>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: 6 }}>
                    {[{ id: null, nom: 'Auto' }, ...voix.map((v) => ({ id: v.identifier, nom: v.name || v.identifier }))].map((opt) => {
                      const actif = choisie === opt.id;
                      return (
                        <Pressable
                          key={opt.id ?? 'auto'}
                          onPress={() => poser(opt.id)}
                          style={({ pressed }) => [
                            st.pilule,
                            { backgroundColor: actif ? t.couleur.accent : t.couleur.fond, borderColor: actif ? t.couleur.accent : t.couleur.trait, opacity: pressed ? 0.7 : 1 },
                          ]}
                        >
                          <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.minuscule, fontWeight: '650' }} numberOfLines={1}>
                            {opt.nom}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              );
            })
          )}
        </View>

        {/* Langue de l'application */}
        <View style={{ marginTop: t.espace.m, padding: t.espace.m, backgroundColor: t.couleur.surface, borderRadius: t.rayon.m }}>
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
            {L('profil.langue')}
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
            {LANGUES.map((lg) => {
              const actif = (profil.langue || 'fr') === lg.code;
              return (
                <Pressable
                  key={lg.code}
                  onPress={() => definirReglages({ langue: lg.code })}
                  style={({ pressed }) => [
                    st.pilule,
                    { backgroundColor: actif ? t.couleur.accent : t.couleur.fond, borderColor: actif ? t.couleur.accent : t.couleur.trait, opacity: pressed ? 0.7 : 1 },
                  ]}
                >
                  <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                    {lg.drapeau} {lg.nom}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Rappel quotidien */}
        <View
          style={{
            marginTop: t.espace.m,
            padding: t.espace.m,
            backgroundColor: t.couleur.surface,
            borderRadius: t.rayon.m,
          }}
        >
          <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
            Rappel quotidien
          </Text>
          {profil.rappelActif ? (
            <>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 4 }}>
                Activé chaque jour à {profil.rappelHeure}. On te rappelle de garder ta série. 🔥
              </Text>
              <Pressable onPress={couperRappel} style={{ marginTop: t.espace.m }}>
                <Text style={{ color: t.couleur.erreur, fontSize: t.police.petite, textDecorationLine: 'underline' }}>
                  Désactiver le rappel
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 4, lineHeight: 18 }}>
                Reçois une notification pour penser à réviser. À quelle heure ?
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s, marginTop: t.espace.m }}>
                {HEURES.map((h) => {
                  const actif = heureChoisie === h;
                  return (
                    <Pressable
                      key={h}
                      onPress={() => setHeureChoisie(h)}
                      style={({ pressed }) => [
                        st.pilule,
                        {
                          backgroundColor: actif ? t.couleur.accent : t.couleur.fond,
                          borderColor: actif ? t.couleur.accent : t.couleur.trait,
                          opacity: pressed ? 0.7 : 1,
                        },
                      ]}
                    >
                      <Text style={{ color: actif ? t.couleur.accentTexte : t.couleur.texte, fontSize: t.police.petite, fontWeight: '650' }}>
                        {h}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              <Pressable
                onPress={() => activerRappel(heureChoisie)}
                style={({ pressed }) => [st.bouton, { backgroundColor: t.couleur.accent, borderRadius: t.rayon.m, marginTop: t.espace.m, opacity: pressed ? 0.85 : 1 }]}
              >
                <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.normale, fontWeight: '650' }}>
                  Activer le rappel
                </Text>
              </Pressable>
            </>
          )}
        </View>

        {/* Planning d'étude */}
        <Pressable
          onPress={() => navigation.navigate('Planning')}
          accessibilityRole="button"
          style={({ pressed }) => [
            st.badges,
            {
              backgroundColor: t.couleur.surface,
              borderColor: t.couleur.trait,
              borderRadius: t.rayon.m,
              marginTop: t.espace.m,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <Text style={{ fontSize: 20, marginRight: t.espace.m }}>🗓️</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Planning d'étude
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
              {(profil.planning || []).length > 0
                ? `${profil.planning.length} créneau${profil.planning.length > 1 ? 'x' : ''} · rappels programmés`
                : 'Programme tes créneaux et reçois un rappel à l’heure'}
            </Text>
          </View>
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande }}>›</Text>
        </Pressable>

        {vierge ? (
          <View
            style={{
              marginTop: t.espace.l,
              padding: t.espace.l,
              backgroundColor: t.couleur.surface,
              borderRadius: t.rayon.m,
            }}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, fontWeight: '650' }}>
              Ta progression démarre ici.
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 6, lineHeight: 19 }}>
              Passe ton premier QCM pour gagner des points : chaque bonne réponse fait grimper ton
              niveau. Plus la question est difficile, plus elle rapporte — et un sans-faute donne un
              gros bonus.
            </Text>
            <Pressable
              onPress={() => navigation.navigate('BacBlanc')}
              style={({ pressed }) => [
                st.bouton,
                { backgroundColor: t.couleur.accent, borderRadius: t.rayon.m, marginTop: t.espace.m, opacity: pressed ? 0.8 : 1 },
              ]}
            >
              <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '650' }}>
                Commencer un bac blanc
              </Text>
            </Pressable>
          </View>
        ) : (
          <>
            {/* Statistiques */}
            <Text style={[st.section, { color: t.couleur.attenue }]}>MES STATISTIQUES</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: t.espace.s }}>
              <Case t={t} valeur={profil.qcmTermines} libelle="QCM terminés" />
              <Case t={t} valeur={`${tauxGlobal} %`} libelle="de réussite" />
              <Case t={t} valeur={profil.meilleureSerie} libelle="meilleure série" />
              <Case t={t} valeur={maitrises} libelle="chapitres maîtrisés" />
              <Case t={t} valeur={profil.sansFautes} libelle="sans-fautes" />
              <Case t={t} valeur={profil.reponsesJustes} libelle="bonnes réponses" />
            </View>

            {/* XP par matière */}
            {matieres.length > 0 && (
              <>
                <Text style={[st.section, { color: t.couleur.attenue }]}>XP PAR MATIÈRE</Text>
                {matieres.map(([cle, val]) => (
                  <View key={cle} style={{ marginBottom: t.espace.m }}>
                    <View style={st.ligneMatiere}>
                      <Text style={{ color: t.couleur.texte, fontSize: t.police.petite }}>
                        {LIBELLE_MATIERE[cle] ?? cle}
                      </Text>
                      <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite }}>
                        {val} XP
                      </Text>
                    </View>
                    <View style={[st.piste, { backgroundColor: t.couleur.trait, marginTop: 5 }]}>
                      <View
                        style={{
                          width: `${maxMatiere > 0 ? Math.round((val / maxMatiere) * 100) : 0}%`,
                          height: '100%',
                          backgroundColor: couleurMatiere(t, cle),
                          borderRadius: 3,
                        }}
                      />
                    </View>
                  </View>
                ))}
              </>
            )}

            {/* Historique */}
            {profil.historique.length > 0 && (
              <>
                <Text style={[st.section, { color: t.couleur.attenue }]}>DERNIÈRES SESSIONS</Text>
                {profil.historique.slice(0, 8).map((h, i) => (
                  <View key={i} style={[st.ligneHisto, { borderBottomColor: t.couleur.trait }]}>
                    <View style={{ flex: 1 }}>
                      <Text numberOfLines={1} style={{ color: t.couleur.texte, fontSize: t.police.petite }}>
                        {h.titre}
                      </Text>
                      <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 2 }}>
                        {h.justes}/{h.total} · {dateFr(h.date)}
                      </Text>
                    </View>
                    <Text style={{ color: t.couleur.succes, fontSize: t.police.petite, fontWeight: '700' }}>
                      +{h.points}
                    </Text>
                  </View>
                ))}
              </>
            )}

            <Pressable onPress={demanderReset} style={{ marginTop: t.espace.xl }}>
              <Text
                style={{
                  color: t.couleur.erreur,
                  fontSize: t.police.petite,
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                }}
              >
                Réinitialiser ma progression
              </Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  section: { fontSize: 12, fontWeight: '700', letterSpacing: 0.8, marginTop: 28, marginBottom: 10 },
  badges: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 14 },
  carteJour: { borderRadius: 12, padding: 14 },
  pilule: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, borderWidth: 1 },
  piste: { height: 6, borderRadius: 3, overflow: 'hidden' },
  ligneMatiere: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  ligneHisto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  bouton: { alignItems: 'center', justifyContent: 'center', paddingVertical: 14 },
});
