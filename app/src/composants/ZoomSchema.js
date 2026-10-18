/**
 * Affiche un schéma de fiche en plein écran (téléphone) : fenêtre Modal avec
 * une WebView qui contient la page de pageZoomSchema.js (zoom par pincement,
 * double-tap, boutons + / −, déplacement, légende, bouton « ✕ Fermer »).
 * Le bouton « retour » d'Android ferme la fenêtre (onRequestClose).
 *
 * Props : `schema` = { src, legende } ou null ; `onFermer()`.
 */

import { useMemo } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { pageZoomSchema } from './pageZoomSchema';
import { useSombre } from '../useSombre';

export default function ZoomSchema({ schema, onFermer }) {
  const sombre = useSombre();
  const html = useMemo(
    () => (schema ? pageZoomSchema({ src: schema.src, legende: schema.legende, sombre }) : ''),
    [schema, sombre],
  );
  return (
    <Modal
      visible={!!schema}
      animationType="fade"
      onRequestClose={onFermer}
      statusBarTranslucent
      supportedOrientations={['portrait', 'landscape']}
    >
      <View style={[styles.fond, { backgroundColor: sombre ? '#0b1015' : '#eef2f6' }]}>
        {schema ? (
          <WebView
            originWhitelist={['*']}
            source={{ html }}
            style={styles.fond}
            scrollEnabled={false}
            bounces={false}
            setBuiltInZoomControls={false}
            onShouldStartLoadWithRequest={(r) => r.url === 'about:blank' || r.url.startsWith('data:')}
            onMessage={(e) => {
              try {
                if (JSON.parse(e.nativeEvent.data).type === 'fermer') onFermer && onFermer();
              } catch {
                /* message ignoré */
              }
            }}
          />
        ) : null}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fond: { flex: 1, backgroundColor: 'transparent' },
});
