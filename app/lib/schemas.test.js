import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SCHEMAS, svgVersDataUri } from '../../outils/schemas/schemas.mjs';

test('chaque schéma produit un SVG bien formé', () => {
  for (const [id, fn] of Object.entries(SCHEMAS)) {
    const svg = fn();
    assert.ok(svg.startsWith('<svg'), `${id} doit commencer par <svg`);
    assert.ok(svg.trimEnd().endsWith('</svg>'), `${id} doit finir par </svg>`);
    assert.ok(svg.includes('viewBox='), `${id} doit avoir un viewBox`);
    // autant de balises ouvrantes que fermantes pour <text>
    const ouv = (svg.match(/<text/g) || []).length;
    const fer = (svg.match(/<\/text>/g) || []).length;
    assert.equal(ouv, fer, `${id} : balises <text> déséquilibrées`);
    // fond « papier » explicite (lisible en clair comme en sombre)
    assert.ok(svg.includes('fill="#ffffff"'), `${id} doit avoir un fond papier`);
  }
});

test('svgVersDataUri produit un data-URI SVG décodable', () => {
  const svg = SCHEMAS['triangle-rectangle']();
  const uri = svgVersDataUri(svg);
  // Le préfixe est exactement celui que la visionneuse autorise (validateLink).
  assert.ok(uri.startsWith('data:image/svg+xml;base64,'), 'préfixe data-URI SVG attendu');
  const b64 = uri.slice('data:image/svg+xml;base64,'.length);
  const decode = Buffer.from(b64, 'base64').toString('utf8');
  assert.equal(decode, svg, 'le décodage doit redonner le SVG d’origine');
});

test('cercle trigonométrique : cos et sin distingués', () => {
  const svg = SCHEMAS['cercle-trigo']();
  assert.ok(svg.includes('cos'), 'doit annoter cos');
  assert.ok(svg.includes('sin'), 'doit annoter sin');
});

test('parabole : la courbe est un tracé non vide', () => {
  const svg = SCHEMAS.parabole();
  const m = svg.match(/<path d="([^"]+)"/);
  assert.ok(m, 'doit contenir un <path>');
  assert.ok(m[1].length > 20, 'le tracé de la parabole ne doit pas être vide');
});

test('triangle rectangle : marque d’angle droit présente', () => {
  const svg = SCHEMAS['triangle-rectangle']();
  // la marque d'angle droit est un petit chemin en L (path fill=none)
  assert.ok(svg.includes('<path'), 'doit contenir la marque d’angle droit');
});
