// VisionneuseFiche.web.js
// -----------------------------------------------------------------------------
// Version NAVIGATEUR de VisionneuseFiche, à placer JUSTE À CÔTÉ de ton
// VisionneuseFiche.js (même dossier). React Native Web charge automatiquement
// le fichier ".web.js" sur le web et garde ".js" (la WebView) sur mobile.
// Tu n'as RIEN d'autre à changer dans le reste du code.
//
// Pourquoi : react-native-webview n'existe pas sur le web. Ici on rend la fiche
// dans une <iframe srcDoc>, qui isole les styles exactement comme le faisait la
// WebView, et qui s'auto-dimensionne à la hauteur du contenu.
// -----------------------------------------------------------------------------
import React, { useRef, useCallback, useState } from 'react';
import { View } from 'react-native';

export default function VisionneuseFiche(props) {
  // On accepte les deux conventions de prop, pour coller à ton composant natif :
  //   <VisionneuseFiche html={...} />            (prop "html")
  //   <VisionneuseFiche source={{ html: ... }} /> (API façon WebView)
  const html = props.html ?? (props.source && props.source.html) ?? '';
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(400);

  const resize = useCallback(() => {
    const f = iframeRef.current;
    if (!f) return;
    try {
      const doc = f.contentDocument || (f.contentWindow && f.contentWindow.document);
      if (!doc) return;
      const h = Math.max(
        doc.body ? doc.body.scrollHeight : 0,
        doc.documentElement ? doc.documentElement.scrollHeight : 0
      );
      if (h > 0) setHeight(h);
    } catch (e) {
      /* srcDoc est same-origin : ne devrait pas throw, mais on protège */
    }
  }, []);

  return (
    <View style={[{ width: '100%' }, props.style]}>
      <iframe
        ref={iframeRef}
        srcDoc={html}
        onLoad={resize}
        title="Fiche de révision"
        scrolling="no"
        style={{
          width: '100%',
          height: height + 'px',
          border: 'none',
          display: 'block',
          background: 'transparent',
        }}
      />
    </View>
  );
}
