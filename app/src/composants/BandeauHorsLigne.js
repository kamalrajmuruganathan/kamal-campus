/** Petit bandeau affiché en haut de l'appli quand il n'y a plus de connexion (web). */
import { View, Text } from 'react-native';
import { useEnLigne } from '../horsLigne';

export default function BandeauHorsLigne() {
  const enLigne = useEnLigne();
  if (enLigne) return null;
  return (
    <View accessibilityRole="alert" style={{ backgroundColor: '#5b4b00', paddingVertical: 6, paddingHorizontal: 12 }}>
      <Text style={{ color: '#fff7d1', fontSize: 13, textAlign: 'center' }}>
        Hors connexion : les chapitres déjà ouverts ou téléchargés restent disponibles.
      </Text>
    </View>
  );
}
