/**
 * Petits composants partagés : carte cliquable, étiquette, bandeau.
 */

import { View, Text, Pressable, StyleSheet } from 'react-native';

export function Carte({ titre, sousTitre, detail, couleur, onPress, t, droite }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${titre}${sousTitre ? `, ${sousTitre}` : ''}`}
      style={({ pressed }) => [
        st.carte,
        {
          backgroundColor: t.couleur.surface,
          borderColor: t.couleur.trait,
          borderRadius: t.rayon.m,
          padding: t.espace.m,
          marginBottom: t.espace.s,
          opacity: pressed ? 0.65 : 1,
        },
      ]}
    >
      {couleur ? <View style={[st.liseré, { backgroundColor: couleur }]} /> : null}
      <View style={st.corps}>
        <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '600' }}>
          {titre}
        </Text>
        {sousTitre ? (
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.petite, marginTop: 3 }}>
            {sousTitre}
          </Text>
        ) : null}
        {detail ? (
          <Text style={{ color: t.couleur.attenue, fontSize: t.police.minuscule, marginTop: 6 }}>
            {detail}
          </Text>
        ) : null}
      </View>
      {droite ?? (
        <Text style={{ color: t.couleur.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>›</Text>
      )}
    </Pressable>
  );
}

export function Etiquette({ texte, couleurFond, couleurTexte, t }) {
  return (
    <View style={[st.etiquette, { backgroundColor: couleurFond, borderRadius: t.rayon.s }]}>
      <Text style={{ color: couleurTexte, fontSize: t.police.minuscule, fontWeight: '600' }}>
        {texte}
      </Text>
    </View>
  );
}

/** Bandeau d'avertissement — sert notamment à signaler une fiche non relue. */
export function Bandeau({ texte, t }) {
  return (
    <View
      style={[
        st.bandeau,
        {
          backgroundColor: t.couleur.alerteFond,
          borderLeftColor: t.couleur.alerte,
          borderRadius: t.rayon.s,
          padding: t.espace.m,
          marginBottom: t.espace.m,
        },
      ]}
    >
      <Text style={{ color: t.couleur.texte, fontSize: t.police.petite, lineHeight: 19 }}>{texte}</Text>
    </View>
  );
}

const st = StyleSheet.create({
  carte: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, overflow: 'hidden' },
  liseré: { width: 4, alignSelf: 'stretch', borderRadius: 2, marginRight: 12 },
  corps: { flex: 1 },
  etiquette: { paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start' },
  bandeau: { borderLeftWidth: 3 },
});
