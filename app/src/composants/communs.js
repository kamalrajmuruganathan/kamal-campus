/**
 * Petits composants partagés : carte cliquable, étiquette, bandeau, annonce
 * pour les lecteurs d'écran.
 */

import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { sansEmoji } from '../../lib/accessibilite/index.js';

export function Carte({ titre, sousTitre, detail, couleur, onPress, t, droite }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      // Les emojis du titre sont décoratifs : le lecteur d'écran lit seulement le texte.
      accessibilityLabel={[titre, sousTitre].map(sansEmoji).filter(Boolean).join(', ')}
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
        <Text aria-hidden style={{ color: t.couleur.attenue, fontSize: t.police.grande, marginLeft: t.espace.s }}>›</Text>
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

/**
 * Annonce lue par les lecteurs d'écran (« Bonne réponse ! »…) sans être affichée.
 * La zone « aria-live » existe toujours : seul son texte change, ce qui la fait lire.
 */
export function Annonce({ texte, urgent = false }) {
  return (
    <View
      accessibilityLiveRegion={urgent ? 'assertive' : 'polite'}
      aria-live={urgent ? 'assertive' : 'polite'}
      aria-atomic
      style={st.masque}
    >
      <Text>{texte || ''}</Text>
    </View>
  );
}

const st = StyleSheet.create({
  // Visuellement masqué, mais lu par les lecteurs d'écran (technique « sr-only »).
  masque: Platform.OS === 'web'
    ? { position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }
    : { position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0 },
  carte: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, overflow: 'hidden' },
  liseré: { width: 4, alignSelf: 'stretch', borderRadius: 2, marginRight: 12 },
  corps: { flex: 1 },
  etiquette: { paddingHorizontal: 8, paddingVertical: 3, alignSelf: 'flex-start' },
  bandeau: { borderLeftWidth: 3 },
});
