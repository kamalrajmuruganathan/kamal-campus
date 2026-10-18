/**
 * Version NAVIGATEUR de ZoomSchema : affiche un schéma de fiche en plein écran
 * (page de pageZoomSchema.js dans une <iframe> posée au-dessus de toute l'appli).
 *
 * Fermeture : bouton « ✕ Fermer », touche Échap, ou bouton « retour » du
 * navigateur / du téléphone (on ajoute une entrée d'historique à l'ouverture,
 * retirée à la fermeture).
 *
 * Props : `schema` = { src, legende } ou null ; `onFermer()`.
 */

import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { pageZoomSchema } from './pageZoomSchema';
import { useSombre } from '../useSombre';

export default function ZoomSchema({ schema, onFermer }) {
  const sombre = useSombre();
  const iframeRef = useRef(null);
  const fermerRef = useRef(onFermer);
  fermerRef.current = onFermer;

  const html = useMemo(
    () => (schema ? pageZoomSchema({ src: schema.src, legende: schema.legende, sombre }) : ''),
    [schema, sombre],
  );

  const ouvert = !!schema;
  useEffect(() => {
    if (!ouvert || typeof window === 'undefined') return undefined;
    const avant = document.activeElement;
    let parRetour = false;
    try { window.history.pushState({ kcZoomSchema: true }, ''); } catch (e) { /* rien */ }
    const surRetour = () => { parRetour = true; fermerRef.current && fermerRef.current(); };
    const surMessage = (e) => {
      const f = iframeRef.current;
      if (!f || e.source !== f.contentWindow) return;
      if (e.data && e.data.type === 'kc-zoom-fermer') fermerRef.current && fermerRef.current();
    };
    const surTouche = (e) => { if (e.key === 'Escape' || e.key === 'Esc') fermerRef.current && fermerRef.current(); };
    window.addEventListener('popstate', surRetour);
    window.addEventListener('message', surMessage);
    window.addEventListener('keydown', surTouche);
    const ancienDebord = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('popstate', surRetour);
      window.removeEventListener('message', surMessage);
      window.removeEventListener('keydown', surTouche);
      document.body.style.overflow = ancienDebord;
      // Fermé par le bouton ou Échap : on retire l'entrée d'historique ajoutée.
      if (!parRetour) {
        try { if (window.history.state && window.history.state.kcZoomSchema) window.history.back(); } catch (e) { /* rien */ }
      }
      try { if (avant && avant.focus) avant.focus({ preventScroll: true }); } catch (e) { /* rien */ }
    };
  }, [ouvert]);

  const surChargement = () => {
    try { iframeRef.current && iframeRef.current.contentWindow.focus(); } catch (e) { /* rien */ }
  };

  if (!schema || typeof document === 'undefined') return null;
  return createPortal(
    <iframe
      ref={iframeRef}
      srcDoc={html}
      onLoad={surChargement}
      title="Schéma agrandi"
      data-testid="zoom-schema"
      style={{
        position: 'fixed', left: 0, top: 0, width: '100vw', height: '100dvh',
        border: 'none', zIndex: 2147483000, display: 'block',
        background: sombre ? '#0b1015' : '#eef2f6',
      }}
    />,
    document.body,
  );
}
