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
import { rendreAvecFormules } from '../../lib/markdownmath';
import { GABARIT_HTML } from '../visionneuse';
import { useSombre } from '../useSombre';

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

/**
 * Adapte le gabarit à l'appli : fond transparent (le texte se pose sur la carte
 * ou le bouton qui l'entoure, sans rectangle blanc) et thème clair/sombre choisi
 * dans l'appli (réglage du profil) plutôt que celui du système.
 */
function adapterGabarit(gabarit, sombre) {
  return gabarit
    .replace('@media (prefers-color-scheme: dark)', sombre ? '@media all' : '@media not all')
    .replace('</head>', () => '<style>html, body { background: transparent !important; }</style></head>');
}

/**
 * `inerte` : à mettre quand la visionneuse est DANS une zone à toucher (choix de
 * QCM, carte à retourner). Sinon l'iframe garde le clic pour elle et toucher le
 * texte de la réponse ne fait rien.
 */
export default function VisionneuseFiche({ markdown, style, inerte = false }) {
  const [hauteur, setHauteur] = useState(64);
  const iframeRef = useRef(null);
  const sombre = useSombre();

  const html = useMemo(() => {
    const corps = rendreAvecFormules(md, nettoyerFiche(markdown));
    return adapterGabarit(GABARIT_HTML, sombre).replace('__HTML__', () => JSON.stringify(corps));
  }, [markdown, sombre]);

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
          colorScheme: 'normal',
          display: 'block',
          pointerEvents: inerte ? 'none' : 'auto',
        }}
      />
    </View>
  );
}
