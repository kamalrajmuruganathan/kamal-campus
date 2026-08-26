/**
 * Ma progression — niveau, XP, rang et statistiques de l'élève.
 *
 * Tout vient du contexte de progression (données stockées sur l'appareil).
 * Les points s'obtiennent en réussissant des QCM et des bacs blancs.
 */

import { useColorScheme } from 'react-native';
import { View, Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme, couleurMatiere } from '../theme';
import { useProgression } from '../progression/Contexte';
import { niveauPourXp } from '../../lib/progression';
import { evaluerBadges } from '../../lib/badges';

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
  const t = theme(useColorScheme() === 'dark');
  const { profil, reinitialiser } = useProgression();

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
