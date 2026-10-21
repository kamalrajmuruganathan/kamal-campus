/**
 * Écran d'attente pendant le chargement d'un contenu à la demande (QCM, cartes,
 * sujet…), ou message d'erreur avec « Réessayer » s'il n'a pas pu être chargé.
 * Props : t (thème), etat ('chargement' | 'erreur'), quoi (« le QCM »…), recharger.
 */
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EtatChargement({ t, etat, quoi = 'le contenu', recharger, couleur }) {
  const accent = couleur ?? t.couleur.accent;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.couleur.fond }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: t.espace.xl }}>
        {etat === 'erreur' ? (
          <>
            <Text style={{ color: t.couleur.texte, fontSize: t.police.normale, textAlign: 'center', lineHeight: 22 }}>
              {`Impossible de charger ${quoi}. Vérifie ta connexion à Internet.`}
            </Text>
            {recharger && (
              <Pressable onPress={recharger} accessibilityRole="button" style={{ marginTop: t.espace.m, padding: t.espace.m }}>
                <Text style={{ color: accent, fontWeight: '700' }}>Réessayer</Text>
              </Pressable>
            )}
          </>
        ) : (
          <>
            <ActivityIndicator size="large" color={accent} />
            <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: t.espace.m }}>Chargement…</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
