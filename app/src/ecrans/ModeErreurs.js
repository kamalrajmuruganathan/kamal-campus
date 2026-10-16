/**
 * Carnet d'erreurs — les questions de QCM et les exercices ratés reviennent
 * à intervalles croissants (demain, puis dans 3 jours, puis dans 7 jours),
 * jusqu'à être maîtrisés (voir lib/carnet).
 *
 * L'écran montre ce qui est à revoir aujourd'hui, ce qui reviendra plus tard,
 * et le nombre d'erreurs déjà maîtrisées. Les QCM sont relancés dans le lecteur
 * de QCM habituel ; les exercices dans l'écran CarnetExercices.
 */

import { useTheme } from '../useTheme';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Carte } from '../composants/communs';
import { useProgression } from '../progression/Contexte';
import { aRevoir, resume, parChapitre, libelleJour, depuisAnciennesErreurs } from '../../lib/carnet';
import { dateLocale } from '../../lib/serie';

function Case({ t, valeur, libelle, couleur }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: t.couleur.surface,
        borderRadius: t.rayon.m,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: t.couleur.trait,
        padding: t.espace.m,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: couleur, fontSize: 26, fontWeight: '800' }}>{valeur}</Text>
      <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, textAlign: 'center' }}>{libelle}</Text>
    </View>
  );
}

export default function ModeErreurs({ navigation }) {
  const t = useTheme();
  const { profil } = useProgression();
  const jour = dateLocale(new Date());
  const carnet = Array.isArray(profil?.carnet) ? profil.carnet : depuisAnciennesErreurs(profil?.erreurs, jour);
  const r = resume(carnet, jour);
  const dus = aRevoir(carnet, jour);
  const qcmDus = dus.filter((e) => e.type === 'qcm' && e.question);
  const exosDus = dus.filter((e) => e.type === 'exo');
  const chapitres = parChapitre(carnet, jour);
  const maitrisees = profil?.carnetMaitrisees || 0;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }} edges={['bottom']}>
      <ScrollView contentContainerStyle={{ padding: t.espace.l, paddingBottom: t.espace.xxl }}>
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginBottom: t.espace.m, lineHeight: 19 }}>
          Chaque question ou exercice raté revient ici : demain, puis dans 3 jours, puis dans 7 jours.
          Réussi 3 fois, il est maîtrisé ✅. Raté de nouveau, il recommence au début.
        </Text>

        <View style={{ flexDirection: 'row', gap: t.espace.s, marginBottom: t.espace.l }}>
          <Case t={t} valeur={r.aujourdhui} libelle="à revoir aujourd'hui" couleur={t.couleur.erreur} />
          <Case t={t} valeur={r.plusTard} libelle="plus tard" couleur={t.couleur.accent} />
          <Case t={t} valeur={maitrisees} libelle="maîtrisées" couleur={t.couleur.succes} />
        </View>

        {r.total === 0 ? (
          <View
            style={{
              backgroundColor: t.couleur.surface,
              borderRadius: t.rayon.m,
              borderWidth: 1,
              borderColor: t.couleur.trait,
              padding: t.espace.l,
            }}
          >
            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '700', marginBottom: 6 }}>
              Ton carnet est vide 🎉
            </Text>
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, lineHeight: 19 }}>
              Fais des QCM et des exercices : ce que tu rates arrivera ici, pour que tu le retravailles au bon moment.
            </Text>
          </View>
        ) : (
          <>
            {qcmDus.length > 0 && (
              <Carte
                t={t}
                titre={`📝 Revoir mes questions de QCM (${qcmDus.length})`}
                sousTitre="Correction immédiate · une réussite fait avancer la question"
                couleur={t.couleur.erreur}
                onPress={() =>
                  navigation.navigate('Qcm', {
                    questions: qcmDus.map((e) => ({ ...e.question, _chap: e.chapitreId, _titre: e.titre, _mat: e.matiere })),
                    titre: "Carnet d'erreurs",
                    matiere: null,
                  })
                }
              />
            )}
            {qcmDus.length > 0 && exosDus.length > 0 && <View style={{ height: t.espace.m }} />}
            {exosDus.length > 0 && (
              <Carte
                t={t}
                titre={`✏️ Refaire mes exercices (${exosDus.length})`}
                sousTitre="Les exercices ratés, avec leur corrigé"
                couleur={t.couleur.erreur}
                onPress={() => navigation.navigate('CarnetExercices')}
              />
            )}
            {r.aujourdhui === 0 && (
              <View
                style={{
                  backgroundColor: t.couleur.succesFond,
                  borderRadius: t.rayon.m,
                  padding: t.espace.l,
                }}
              >
                <Text style={{ color: t.couleur.succes, fontSize: t.police.normale, fontWeight: '700' }}>
                  Rien à revoir aujourd'hui 👍
                </Text>
                <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, marginTop: 4 }}>
                  Prochaine révision {libelleJour(r.prochaineDate, jour)}.
                </Text>
              </View>
            )}

            <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '700', marginTop: t.espace.xl, marginBottom: t.espace.s }}>
              Par chapitre
            </Text>
            {chapitres.map((c) => (
              <View
                key={c.chapitreId || c.titre}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: t.espace.s,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: t.couleur.trait,
                }}
              >
                <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, flex: 1, paddingRight: t.espace.s }}>{c.titre}</Text>
                <Text style={{ color: c.dus ? t.couleur.erreur : t.couleur.attenue, fontSize: t.police.petite }}>
                  {c.total} erreur{c.total > 1 ? 's' : ''}{c.dus ? ` · ${c.dus} aujourd'hui` : ''}
                </Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
