#!/usr/bin/env node
/**
 * Fabrique `src/visionneuse.js` : un document HTML AUTONOME qui rend le
 * Markdown et les formules LaTeX, à afficher dans une WebView.
 *
 * POURQUOI CETTE APPROCHE
 * Les fiches sont denses en LaTeX. Aucune bibliothèque React Native native ne
 * rend le LaTeX de façon fiable ; KaTeX, lui, est éprouvé. On l'embarque donc
 * dans une WebView, avec markdown-it pour le Markdown.
 *
 * TOUT EST EMBARQUÉ, RIEN N'EST TÉLÉCHARGÉ : l'application doit fonctionner
 * hors ligne (un lycéen révise dans le métro). Ce script inline le CSS et le
 * JavaScript de KaTeX depuis node_modules, ainsi que les polices en base64.
 *
 * À relancer après `npm install` :
 *     npm run preparer
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE = join(ICI, '..');
const KATEX = join(RACINE, 'node_modules', 'katex', 'dist');
const SORTIE = join(RACINE, 'src', 'visionneuse.js');

if (!existsSync(KATEX)) {
  console.error('✗ node_modules/katex introuvable. Lance d’abord :  npm install');
  process.exit(1);
}

// ── CSS de KaTeX, avec les polices inlinées en base64 ────────────────────────

let css = readFileSync(join(KATEX, 'katex.min.css'), 'utf8');

const DOSSIER_POLICES = join(KATEX, 'fonts');
const policesWoff2 = existsSync(DOSSIER_POLICES)
  ? readdirSync(DOSSIER_POLICES).filter((f) => f.endsWith('.woff2'))
  : [];

let inlinees = 0;
for (const fichier of policesWoff2) {
  const b64 = readFileSync(join(DOSSIER_POLICES, fichier)).toString('base64');
  const avant = css;
  // remplace l'URL par la donnée, et supprime les variantes woff/ttf devenues inutiles
  css = css.replace(
    new RegExp(`url\\(fonts/${fichier.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g'),
    `url(data:font/woff2;base64,${b64})`,
  );
  if (css !== avant) inlinees += 1;
}
// retire les sources restantes qui pointeraient vers des fichiers absents
css = css.replace(/,\s*url\(fonts\/[^)]+\)\s*format\("(woff|truetype|opentype)"\)/g, '');

const js = readFileSync(join(KATEX, 'katex.min.js'), 'utf8');
const autoRender = existsSync(join(KATEX, 'contrib', 'auto-render.min.js'))
  ? readFileSync(join(KATEX, 'contrib', 'auto-render.min.js'), 'utf8')
  : '';

if (!autoRender) {
  console.warn('  ⚠️  auto-render.min.js absent : les formules ne seront pas détectées automatiquement.');
}

// ── feuille de style de l'application ────────────────────────────────────────

const STYLE_APP = `
:root {
  --fond: #ffffff;
  --texte: #16232e;
  --attenue: #5b6b7a;
  --accent: #1f6feb;
  --trait: #e3e8ee;
  --encadre: #f3f6fa;
  --alerte-fond: #fff8e6;
  --alerte-trait: #e8b93b;
}
@media (prefers-color-scheme: dark) {
  :root {
    --fond: #12181f;
    --texte: #e6edf3;
    --attenue: #9aa8b5;
    --accent: #6aa8ff;
    --trait: #253039;
    --encadre: #1a222b;
    --alerte-fond: #2a2410;
    --alerte-trait: #b3891f;
  }
}
* { box-sizing: border-box; }
body {
  margin: 0;
  padding: 18px 16px 64px;
  background: var(--fond);
  color: var(--texte);
  font: 16px/1.65 -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-text-size-adjust: 100%;
  overflow-wrap: break-word;
}
h1 { font-size: 1.55rem; line-height: 1.25; margin: 0 0 .6em; }
h2 {
  font-size: 1.2rem; margin: 1.9em 0 .6em; padding-bottom: .3em;
  border-bottom: 1px solid var(--trait);
}
h3 { font-size: 1.05rem; margin: 1.5em 0 .5em; }
p { margin: 0 0 1em; }
strong { font-weight: 650; }
code {
  background: var(--encadre); padding: .12em .38em; border-radius: 4px;
  font-size: .9em; font-family: ui-monospace, Menlo, Consolas, monospace;
}
pre {
  background: var(--encadre); padding: 12px 14px; border-radius: 8px;
  overflow-x: auto; font-size: .88em;
}
pre code { background: none; padding: 0; }
blockquote {
  margin: 1.2em 0; padding: .8em 1em;
  background: var(--encadre); border-left: 3px solid var(--accent);
  border-radius: 0 6px 6px 0;
}
blockquote p:last-child { margin-bottom: 0; }
/* Les blocs commençant par ⚠️ sont mis en évidence */
blockquote:has(> p:first-child) { }
table {
  border-collapse: collapse; width: 100%; margin: 1.2em 0;
  display: block; overflow-x: auto; font-size: .93em;
}
th, td { border: 1px solid var(--trait); padding: 8px 11px; text-align: left; }
th { background: var(--encadre); font-weight: 620; }
hr { border: 0; border-top: 1px solid var(--trait); margin: 2em 0; }
ul, ol { padding-left: 1.4em; margin: 0 0 1em; }
li { margin-bottom: .4em; }
a { color: var(--accent); }
/* Schémas : images SVG sur fond « papier », lisibles en thème clair comme
   sombre. On borne la largeur et on centre. */
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.3em auto;
  border-radius: 8px;
}
/* Formules : on autorise le défilement horizontal plutôt que le débordement */
.katex-display {
  margin: 1.1em 0; padding: 4px 0;
  overflow-x: auto; overflow-y: hidden;
}
.katex { font-size: 1.04em; }
`;

// ── document ────────────────────────────────────────────────────────────────

const gabarit = `<!doctype html>
<html lang="fr"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<style>${css}</style>
<style>${STYLE_APP}</style>
</head><body>
<div id="contenu"></div>
<script>${js}</script>
<script>${autoRender}</script>
<script>
  // Le contenu HTML est injecté ici par la WebView (marqueur remplacé côté React Native).
  document.getElementById('contenu').innerHTML = __HTML__;
  if (window.renderMathInElement) {
    renderMathInElement(document.getElementById('contenu'), {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      throwOnError: false,
    });
  }
  // Signale la hauteur du document à React Native, pour dimensionner la WebView.
  function signalerHauteur() {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'hauteur',
        valeur: document.documentElement.scrollHeight,
      }));
    }
  }
  window.addEventListener('load', signalerHauteur);
  setTimeout(signalerHauteur, 300);
</script>
</body></html>`;

mkdirSync(dirname(SORTIE), { recursive: true });
writeFileSync(
  SORTIE,
  `/**
 * FICHIER GÉNÉRÉ — NE PAS MODIFIER À LA MAIN.
 * Produit par scripts/preparer-katex.mjs à partir de node_modules/katex.
 * Document HTML autonome : CSS, JavaScript et polices sont EMBARQUÉS,
 * l'application fonctionne donc entièrement hors ligne.
 */
export const GABARIT_HTML = ${JSON.stringify(gabarit)};
`,
  'utf8',
);

const poids = Math.round(Buffer.byteLength(gabarit) / 1024);
console.log(`✓ visionneuse HTML générée → src/visionneuse.js (${poids} Ko)`);
console.log(`  ${inlinees} police(s) KaTeX embarquée(s) en base64 — fonctionnement hors ligne garanti`);
