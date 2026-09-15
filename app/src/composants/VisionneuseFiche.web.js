/**
 * Version NAVIGATEUR de VisionneuseFiche (chargée automatiquement par React
 * Native Web à la place de VisionneuseFiche.js, qui utilise react-native-webview
 * — indisponible sur le web).
 *
 * Fidélité maximale : on réutilise EXACTEMENT le même pipeline que la version
 * native — nettoyerFiche -> markdown-it -> GABARIT_HTML — puis on rend le document
 * autonome (KaTeX embarqué) dans une <iframe>, l'équivalent web d'une WebView.
 */

import { useMemo, useRef, useState, useCallback } from 'react';
import { View } from 'react-native';
import MarkdownIt from 'markdown-it';
import { GABARIT_HTML } from '../visionneuse';

const md = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: true,
  breaks: false,
});

const validerLienDefaut = md.validateLink.bind(md);
md.validateLink = (url) => {
  const s = String(url).trim().toLowerCase();
  if (s.indexOf('data:image/svg+xml') === 0) return true;
  return validerLienDefaut(url);
};

export function nettoyerFiche(markdown) {
  return String(markdown ?? '')
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
}

export default function VisionneuseFiche({ markdown, style }) {
  const [hauteur, setHauteur] = useState(64);
  const iframeRef = useRef(null);

  const html = useMemo(() => {
    const corps = md.render(nettoyerFiche(markdown));
    return GABARIT_HTML.replace('__HTML__', JSON.stringify(corps));
  }, [markdown]);

  const mesurer = useCallback(() => {
    const f = iframeRef.current;
    if (!f) return;
    try {
      const win = f.contentWindow;
      const doc = f.contentDocument || (win && win.document);
      if (!doc) return;
      const c = doc.getElementById('contenu');
      const s = win.getComputedStyle(doc.body);
      const marges = (parseFloat(s.paddingTop) || 0) + (parseFloat(s.paddingBottom) || 0);
      const h = c ? c.getBoundingClientRect().height : doc.body.scrollHeight;
      const v = Math.ceil(h + marges);
      if (v > 0) setHauteur(v + 6);
    } catch (e) {
      /* srcDoc same-origin : ne devrait pas throw, mais on protege */
    }
  }, []);

  const onLoad = useCallback(() => {
    mesurer();
    setTimeout(mesurer, 150);
    setTimeout(mesurer, 550);
  }, [mesurer]);

  return (
    <View style={[{ position: 'relative' }, style]}>
      <iframe
        ref={iframeRef}
        srcDoc={html}
        onLoad={onLoad}
        title="Fiche de revision"
        scrolling="no"
        style={{
          width: '100%',
          height: hauteur + 'px',
          border: 'none',
          background: 'transparent',
          display: 'block',
        }}
      />
    </View>
  );
}
