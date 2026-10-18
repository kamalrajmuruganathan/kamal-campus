/**
 * Page HTML autonome qui affiche UN schéma de fiche en plein écran, avec :
 *   - zoom par pincement (2 doigts), double-tap, molette, boutons + / − ;
 *   - déplacement au doigt (ou à la souris) quand le schéma est agrandi ;
 *   - bouton « ✕ Fermer » et touche Échap ;
 *   - la légende du schéma sous l'image.
 *
 * La même page sert sur le web (dans une <iframe> plein écran, voir
 * ZoomSchema.web.js) et sur téléphone (dans une WebView, voir ZoomSchema.js) :
 * un seul code de gestes, testé dans Chromium.
 *
 * La fermeture est signalée à l'appli par un message { type: 'fermer' }
 * (ReactNativeWebView.postMessage en natif, parent.postMessage sur le web).
 *
 * Le schéma est redessiné à chaque zoom (on change sa largeur, pas une
 * transformation CSS) : le SVG reste net quel que soit l'agrandissement.
 */

const COULEURS = {
  clair: {
    fond: '#eef2f6', texte: '#16232e', attenue: '#4d5c6a', barre: '#ffffff',
    trait: '#d5dde6', bouton: '#ffffff', boutonTexte: '#16232e', accent: '#1f6feb', accentTexte: '#ffffff',
  },
  sombre: {
    fond: '#0b1015', texte: '#e6edf3', attenue: '#a9b6c2', barre: '#151d25',
    trait: '#2b3743', bouton: '#1f2a35', boutonTexte: '#e6edf3', accent: '#6aa8ff', accentTexte: '#0b1015',
  },
};

/** JSON sûr à poser dans un <script> (pas de « </script> » possible). */
function jsonSur(v) {
  return JSON.stringify(v)
    .replace(/</g, '\\u003c')
    .split(String.fromCharCode(0x2028)).join('\\u2028')
    .split(String.fromCharCode(0x2029)).join('\\u2029');
}

export function pageZoomSchema({ src, legende, sombre }) {
  const c = sombre ? COULEURS.sombre : COULEURS.clair;
  return `<!doctype html>
<html lang="fr"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<style>
* { box-sizing: border-box; }
html, body {
  margin: 0; height: 100%; overflow: hidden;
  background: ${c.fond}; color: ${c.texte};
  font: 16px/1.45 -apple-system, "Segoe UI", Roboto, sans-serif;
  color-scheme: ${sombre ? 'dark' : 'light'};
  -webkit-tap-highlight-color: transparent;
}
#cadre { display: flex; flex-direction: column; height: 100%; }
#barre {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 12px; padding-top: max(10px, env(safe-area-inset-top));
  background: ${c.barre}; border-bottom: 1px solid ${c.trait};
}
#barre .espace { flex: 1; }
button {
  font: inherit; font-weight: 650; cursor: pointer;
  min-height: 44px; min-width: 44px; padding: 0 14px;
  border-radius: 10px; border: 1px solid ${c.trait};
  background: ${c.bouton}; color: ${c.boutonTexte};
}
button:focus-visible { outline: 3px solid ${c.accent}; outline-offset: 2px; }
#fermer { background: ${c.accent}; color: ${c.accentTexte}; border-color: ${c.accent}; font-size: 17px; }
#niveau { min-width: 52px; text-align: center; color: ${c.attenue}; font-size: 14px; font-variant-numeric: tabular-nums; }
#scene {
  position: relative; flex: 1; overflow: hidden;
  touch-action: none; user-select: none; -webkit-user-select: none; cursor: grab;
}
#scene.glisse { cursor: grabbing; }
#scene img {
  position: absolute; left: 0; top: 0; max-width: none;
  background: #fffdf8; border-radius: 6px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, ${sombre ? '.5' : '.12'});
  -webkit-user-drag: none; pointer-events: none;
}
#legende {
  margin: 0; padding: 10px 16px; padding-bottom: max(12px, env(safe-area-inset-bottom));
  background: ${c.barre}; border-top: 1px solid ${c.trait};
  font-size: 15px; max-height: 32vh; overflow-y: auto;
}
#aide { display: block; margin-top: 4px; font-size: 13px; color: ${c.attenue}; }
</style>
</head><body>
<div id="cadre" role="dialog" aria-modal="true" aria-label="Schéma agrandi">
  <div id="barre">
    <button id="fermer" type="button" aria-label="Fermer le schéma agrandi">✕ Fermer</button>
    <span class="espace"></span>
    <button id="moins" type="button" aria-label="Dézoomer">−</button>
    <span id="niveau" aria-live="polite">100 %</span>
    <button id="plus" type="button" aria-label="Zoomer">+</button>
  </div>
  <div id="scene"><img id="image" alt=""></div>
  <p id="legende"><span id="texteLegende"></span><span id="aide">Pince ou touche deux fois pour zoomer, glisse pour te déplacer.</span></p>
</div>
<script>
(function () {
  var SRC = ${jsonSur(String(src || ''))};
  var LEGENDE = ${jsonSur(String(legende || ''))};
  var MIN = 1, MAX = 8;

  var scene = document.getElementById('scene');
  var img = document.getElementById('image');
  var niveau = document.getElementById('niveau');
  document.getElementById('texteLegende').textContent = LEGENDE;
  if (!LEGENDE) document.getElementById('texteLegende').style.display = 'none';
  img.alt = LEGENDE || 'Schéma';

  function fermer() {
    var msg = JSON.stringify({ type: 'fermer' });
    if (window.ReactNativeWebView) window.ReactNativeWebView.postMessage(msg);
    else if (window.parent && window.parent !== window) window.parent.postMessage({ type: 'kc-zoom-fermer' }, '*');
  }

  // Proportions du schéma : lues dans le viewBox du SVG (les schémas n'ont
  // souvent pas de width/height), sinon taille naturelle de l'image.
  var ratio = 0;
  try {
    var m = /^data:image\\/svg\\+xml;base64,(.*)$/.exec(SRC);
    var svg = m ? atob(m[1]) : '';
    var vb = /viewBox\\s*=\\s*["']\\s*[-\\d.]+[\\s,]+[-\\d.]+[\\s,]+([\\d.]+)[\\s,]+([\\d.]+)/.exec(svg);
    if (vb && +vb[1] > 0 && +vb[2] > 0) ratio = +vb[1] / +vb[2];
  } catch (e) { /* proportions lues plus tard */ }

  var base = { l: 0, h: 0 };   // taille « ajustée à l'écran » (zoom 1)
  var s = 1, x = 0, y = 0;     // zoom et position du coin haut-gauche

  function mesurerBase() {
    var W = scene.clientWidth, H = scene.clientHeight;
    var r = ratio || (img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 4 / 3);
    var marge = 12;
    var l = Math.max(10, W - 2 * marge), h = l / r;
    if (h > H - 2 * marge) { h = Math.max(10, H - 2 * marge); l = h * r; }
    base.l = l; base.h = h;
  }

  function borner() {
    var W = scene.clientWidth, H = scene.clientHeight;
    var l = base.l * s, h = base.h * s;
    x = l <= W ? (W - l) / 2 : Math.min(0, Math.max(W - l, x));
    y = h <= H ? (H - h) / 2 : Math.min(0, Math.max(H - h, y));
  }

  function dessiner() {
    borner();
    img.style.width = (base.l * s) + 'px';
    img.style.height = (base.h * s) + 'px';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    niveau.textContent = Math.round(s * 100) + ' %';
    document.getElementById('moins').disabled = s <= MIN + 1e-6;
    document.getElementById('plus').disabled = s >= MAX - 1e-6;
  }

  /** Zoome vers « nouveau » en gardant fixe le point (px, py) de la scène. */
  function zoomer(nouveau, px, py) {
    nouveau = Math.min(MAX, Math.max(MIN, nouveau));
    var k = nouveau / s;
    x = px - (px - x) * k;
    y = py - (py - y) * k;
    s = nouveau;
    dessiner();
  }
  function centre() { return [scene.clientWidth / 2, scene.clientHeight / 2]; }

  function initialiser() { mesurerBase(); s = 1; dessiner(); }
  img.onload = initialiser;
  img.src = SRC;
  window.addEventListener('resize', function () {
    var avant = base.l || 1; mesurerBase();
    var k = base.l / avant; x *= k; y *= k; dessiner();
  });

  document.getElementById('fermer').onclick = fermer;
  document.getElementById('plus').onclick = function () { var c = centre(); zoomer(s * 1.5, c[0], c[1]); };
  document.getElementById('moins').onclick = function () { var c = centre(); zoomer(s / 1.5, c[0], c[1]); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); fermer(); }
    else if (e.key === '+' || e.key === '=') { var c = centre(); zoomer(s * 1.5, c[0], c[1]); }
    else if (e.key === '-') { var c2 = centre(); zoomer(s / 1.5, c2[0], c2[1]); }
  });

  // ── gestes : pointeurs (doigts, souris, stylet) ─────────────────────────
  var pointeurs = {};
  var pincement = null;            // { d, s, cx, cy }
  var dernierTap = { t: 0, x: 0, y: 0 };
  var depart = null;               // pour distinguer tap et glissé

  function pos(e) { var r = scene.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  function liste() { return Object.keys(pointeurs).map(function (k) { return pointeurs[k]; }); }

  scene.addEventListener('pointerdown', function (e) {
    try { scene.setPointerCapture(e.pointerId); } catch (er) { /* rien */ }
    var p = pos(e);
    pointeurs[e.pointerId] = p;
    var l = liste();
    if (l.length === 1) { depart = { x: p[0], y: p[1], t: Date.now(), bouge: false }; scene.classList.add('glisse'); }
    if (l.length === 2) {
      depart = null;
      pincement = { d: Math.hypot(l[0][0] - l[1][0], l[0][1] - l[1][1]) || 1, s: s,
        cx: (l[0][0] + l[1][0]) / 2, cy: (l[0][1] + l[1][1]) / 2 };
    }
  });

  scene.addEventListener('pointermove', function (e) {
    if (!pointeurs[e.pointerId]) return;
    var avant = pointeurs[e.pointerId];
    var p = pos(e);
    pointeurs[e.pointerId] = p;
    var l = liste();
    if (l.length >= 2 && pincement) {
      var d = Math.hypot(l[0][0] - l[1][0], l[0][1] - l[1][1]) || 1;
      var cx = (l[0][0] + l[1][0]) / 2, cy = (l[0][1] + l[1][1]) / 2;
      // déplacement du milieu des deux doigts, puis zoom autour de ce milieu
      x += cx - pincement.cx; y += cy - pincement.cy;
      pincement.cx = cx; pincement.cy = cy;
      zoomer(pincement.s * d / pincement.d, cx, cy);
    } else if (l.length === 1) {
      if (depart && Math.hypot(p[0] - depart.x, p[1] - depart.y) > 8) depart.bouge = true;
      x += p[0] - avant[0]; y += p[1] - avant[1];
      dessiner();
    }
  });

  function relacher(e) {
    if (!pointeurs[e.pointerId]) return;
    var p = pointeurs[e.pointerId];
    delete pointeurs[e.pointerId];
    var l = liste();
    if (l.length < 2) pincement = null;
    if (l.length === 0) scene.classList.remove('glisse');
    if (e.type !== 'pointerup' || l.length !== 0 || !depart) { depart = null; return; }
    var estTap = !depart.bouge && Date.now() - depart.t < 350;
    depart = null;
    if (!estTap) return;
    var maintenant = Date.now();
    if (maintenant - dernierTap.t < 320 && Math.hypot(p[0] - dernierTap.x, p[1] - dernierTap.y) < 40) {
      // double-tap : on agrandit (×2,5) autour du point touché, ou on revient à 100 %
      if (s > 1.05) zoomer(1, p[0], p[1]); else zoomer(2.5, p[0], p[1]);
      dernierTap.t = 0;
    } else {
      dernierTap = { t: maintenant, x: p[0], y: p[1] };
    }
  }
  scene.addEventListener('pointerup', relacher);
  scene.addEventListener('pointercancel', relacher);

  scene.addEventListener('wheel', function (e) {
    e.preventDefault();
    var p = pos(e);
    zoomer(s * Math.exp(-e.deltaY * 0.0025), p[0], p[1]);
  }, { passive: false });

  // Safari (iOS) : empêche le zoom de la page entière par pincement.
  document.addEventListener('gesturestart', function (e) { e.preventDefault(); });

  setTimeout(function () { try { document.getElementById('fermer').focus({ preventScroll: true }); } catch (e) { /* rien */ } }, 30);
  if (img.complete && img.naturalWidth) initialiser();
})();
</script>
</body></html>`;
}
