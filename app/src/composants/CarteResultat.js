/**
 * Carte de résultats partageable — un visuel autonome (couleurs fixes pour un
 * rendu identique en image, quel que soit le thème) : score, pourcentage, série
 * et badge éventuel, aux couleurs de la matière. Capturé puis partagé (voir
 * src/partage.js). On lui passe une `ref` pour la capture.
 */

import { forwardRef } from 'react';
import { View, Text } from 'react-native';

const CarteResultat = forwardRef(function CarteResultat(
  { couleur = '#2f6fed', titre = '', justes = 0, total = 0, pourcent = 0, serie = 0, badge = null },
  ref,
) {
  return (
    <View
      ref={ref}
      collapsable={false}
      style={{
        width: 320,
        borderRadius: 22,
        backgroundColor: '#12181f',
        padding: 22,
        overflow: 'hidden',
      }}
    >
      {/* bandeau haut coloré */}
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, backgroundColor: couleur }} />

      <Text style={{ color: couleur, fontWeight: '800', letterSpacing: 1.5, fontSize: 12, textTransform: 'uppercase' }}>
        Kamal Campus
      </Text>
      <Text numberOfLines={2} style={{ color: '#e6edf3', fontSize: 17, fontWeight: '700', marginTop: 6, lineHeight: 22 }}>
        {titre || 'Quiz terminé'}
      </Text>

      {/* score */}
      <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 8 }}>
        <Text style={{ color: '#ffffff', fontSize: 60, fontWeight: '800', lineHeight: 62 }}>
          {justes}<Text style={{ color: '#9aa8b5', fontSize: 30 }}>/{total}</Text>
        </Text>
        <View style={{ marginTop: 10, backgroundColor: couleur, borderRadius: 999, paddingVertical: 6, paddingHorizontal: 16 }}>
          <Text style={{ color: '#ffffff', fontWeight: '800', fontSize: 15 }}>{pourcent} % de réussite</Text>
        </View>
      </View>

      {/* pied : série + badge */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
        <Text style={{ color: '#e6edf3', fontSize: 14, fontWeight: '700' }}>
          🔥 {serie} jour{serie > 1 ? 's' : ''}
        </Text>
        <Text numberOfLines={1} style={{ color: '#9aa8b5', fontSize: 12, maxWidth: 180, textAlign: 'right' }}>
          {badge ? `🏅 ${badge}` : 'révise, progresse, recommence'}
        </Text>
      </View>
    </View>
  );
});

export default CarteResultat;
