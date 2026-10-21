/**
 * Version NAVIGATEUR de VisionneuseFiche (chargée automatiquement par React
 * Native Web à la place de VisionneuseFiche.js, qui utilise react-native-webview
 * — indisponible sur le web).
 *
 * Fidélité maximale : on réutilise EXACTEMENT le même pipeline que la version
 * native — nettoyerFiche -> markdown-it -> GABARIT_HTML — puis on rend le document
 * autonome (KaTeX embarqué) dans une <iframe>, l'équivalent web d'une WebView.
 */

import { useMemo, useRef, useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import MarkdownIt from 'markdown-it';
import { rendreAvecFormules } from '../../lib/markdownmath';
import { useSombre } from '../useSombre';
import ZoomSchema from './ZoomSchema';

// Gabarit HTML avec KaTeX et ses polices (≈ 650 Ko) : morceau à part, téléchargé dès le
// démarrage mais sans retarder l'affichage de l'accueil (qui n'en a pas besoin).
let GABARIT_HTML = null;
const promesseGabarit = import('../visionneuse')
  .then((m) => { GABARIT_HTML = m.GABARIT_HTML; return GABARIT_HTML; })
  .catch(() => null);

function useGabarit() {
  const [gabarit, setGabarit] = useState(GABARIT_HTML);
  const [essai, setEssai] = useState(0);
  useEffect(() => {
    if (gabarit) return undefined;
    let vivant = true;
    const p = essai === 0 ? promesseGabarit : import('../visionneuse').then((m) => { GABARIT_HTML = m.GABARIT_HTML; return GABARIT_HTML; });
    p.then((g) => {
      if (!vivant) return;
      if (g) setGabarit(g);
      else setTimeout(() => { if (vivant) setEssai((n) => n + 1); }, 3000); // réseau coupé : on réessaie
    }).catch(() => { if (vivant) setTimeout(() => setEssai((n) => n + 1), 3000); });
    return () => { vivant = false; };
  }, [gabarit, essai]);
  return gabarit;
}

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
function adapterGabarit(gabarit, sombre, inerte) {
  // Visionneuse inerte (dans un choix de QCM…) : le schéma ne s'agrandit pas,
  // on n'affiche donc pas l'indice « 🔍 Agrandir ».
  const enPlus = inerte ? ' .schema-zoom .indice { display: none; } .schema-zoom { cursor: inherit; }' : '';
  return gabarit
    .replace('@media (prefers-color-scheme: dark)', sombre ? '@media all' : '@media not all')
    .replace('</head>', () => `<style>html, body { background: transparent !important; }${enPlus}</style></head>`);
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
  const gabarit = useGabarit();

  const html = useMemo(() => {
    if (!gabarit) return null;
    const corps = rendreAvecFormules(md, nettoyerFiche(markdown));
    return adapterGabarit(gabarit, sombre, inerte).replace('__HTML__', () => JSON.stringify(corps));
  }, [markdown, sombre, inerte, gabarit]);

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

  // Schéma touché dans la fiche → plein écran (message envoyé par le gabarit).
  const [schema, setSchema] = useState(null);
  useEffect(() => {
    if (inerte || typeof window === 'undefined') return undefined;
    const surMessage = (e) => {
      const f = iframeRef.current;
      if (!f || e.source !== f.contentWindow || !e.data || e.data.type !== 'kc-schema') return;
      const src = String(e.data.src || '');
      if (src.indexOf('data:image/svg+xml') !== 0) return;
      setSchema({ src, legende: String(e.data.legende || '') });
    };
    window.addEventListener('message', surMessage);
    return () => window.removeEventListener('message', surMessage);
  }, [inerte]);
  const fermerSchema = useCallback(() => setSchema(null), []);

  const onLoad = useCallback(() => {
    mesurer();
    setTimeout(mesurer, 150);
    setTimeout(mesurer, 550);
  }, [mesurer]);

  return (
    <View style={[{ position: 'relative' }, style]}>
      {html === null ? <View style={{ height: hauteur }} /> : (
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
      )}
      <ZoomSchema schema={schema} onFermer={fermerSchema} />
    </View>
  );
}
