/**
 * Clavier numérique — pour saisir la réponse d'une énigme (comme dans les
 * apps de test de logique). Chiffres 0-9, effacer, et bouton Valider.
 */

import { View, Text, Pressable, StyleSheet } from 'react-native';

function Touche({ t, libelle, onPress, sombreFond, large }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        st.touche,
        {
          backgroundColor: sombreFond || t.couleur.surface,
          borderColor: t.couleur.trait,
          borderRadius: t.rayon.m,
          flex: large ? 2 : 1,
          opacity: pressed ? 0.6 : 1,
        },
      ]}
    >
      <Text style={{ color: t.couleur.texte, fontSize: t.police.moyenne, fontWeight: '650' }}>
        {libelle}
      </Text>
    </Pressable>
  );
}

export default function ClavierNumerique({ t, onChiffre, onEffacer, onValider, peutValider = true }) {
  const rangees = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
  return (
    <View style={{ gap: t.espace.s }}>
      {rangees.map((r) => (
        <View key={r.join('')} style={{ flexDirection: 'row', gap: t.espace.s }}>
          {r.map((d) => (
            <Touche key={d} t={t} libelle={d} onPress={() => onChiffre(d)} />
          ))}
        </View>
      ))}
      <View style={{ flexDirection: 'row', gap: t.espace.s }}>
        <Touche t={t} libelle="⌫" onPress={onEffacer} />
        <Touche t={t} libelle="0" onPress={() => onChiffre('0')} />
        <Pressable
          onPress={peutValider ? onValider : undefined}
          disabled={!peutValider}
          style={({ pressed }) => [
            st.touche,
            {
              flex: 1,
              backgroundColor: peutValider ? t.couleur.accent : t.couleur.trait,
              borderColor: peutValider ? t.couleur.accent : t.couleur.trait,
              borderRadius: t.rayon.m,
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <Text style={{ color: t.couleur.accentTexte, fontSize: t.police.moyenne, fontWeight: '700' }}>OK</Text>
        </Pressable>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  touche: {
    flex: 1,
    borderWidth: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
