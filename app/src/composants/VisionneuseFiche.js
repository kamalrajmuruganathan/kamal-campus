/**
 * Affiche une fiche Markdown avec ses formules LaTeX, dans une WebView.
 *
 * Le rendu Markdown est fait CÔTÉ REACT NATIVE (markdown-it), le rendu des
 * formules CÔTÉ WEBVIEW (KaTeX). Tout est embarqué : aucune requête réseau,
 * l'application fonctionne hors ligne.
 *
 * Deux traitements sont appliqués au Markdown avant rendu :
 *   1. l'en-tête YAML est retiré (il ne concerne que l'outillage) ;
 *   2. les commentaires HTML sont retirés — c'est là que vivent les NOTES DE
 *      PRODUCTION, qui ne doivent jamais être vues par un élève.
 */

import { useMemo, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import MarkdownIt from 'markdown-it';
import { GABARIT_HTML } from '../visionneuse';

const md = new MarkdownIt({
  html: false,      // aucun HTML brut : c'est ce qui neutralise les notes de production
  linkify: false,
  typographer: true,
  breaks: false,
});

/** Retire l'en-tête YAML et les commentaires HTML. */
export function nettoyerFiche(markdown) {
  return String(markdown ?? '')
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
}

export default function VisionneuseFiche({ markdown, style }) {
  const [hauteur, setHauteur] = useState(600);
  const [pret, setPret] = useState(false);

  const html = useMemo(() => {
    const corps = md.render(nettoyerFiche(markdown));
    return GABARIT_HTML.replace('__HTML__', JSON.stringify(corps));
  }, [markdown]);

  return (
    <View style={[styles.conteneur, style]}>
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        style={[styles.web, { height: hauteur }]}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        // Aucune navigation ne doit quitter la fiche.
        onShouldStartLoadWithRequest={(r) => r.url === 'about:blank' || r.url.startsWith('data:')}
        onMessage={(e) => {
          try {
            const msg = JSON.parse(e.nativeEvent.data);
            if (msg.type === 'hauteur' && msg.valeur > 0) {
              setHauteur(msg.valeur + 24);
              setPret(true);
            }
          } catch {
            /* message ignoré */
          }
        }}
      />
      {!pret && (
        <View style={styles.chargement} pointerEvents="none">
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { position: 'relative' },
  web: { backgroundColor: 'transparent' },
  chargement: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center', justifyContent: 'center',
  },
});
