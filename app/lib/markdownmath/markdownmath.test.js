import { test } from 'node:test';
import assert from 'node:assert/strict';
import { protegerFormules, rendreAvecFormules } from './index.js';

// Mini « Markdown » qui fait comme markdown-it : il mange les échappements « \x »,
// échappe le HTML et rend le **gras** (le CI des tests n'installe pas les dépendances).
const md = {
  render: (src) => '<p>' + src
    .replace(/\\([\\`*_{}\[\]()#+\-.!,;])/g, '$1')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') + '</p>\n',
};

test('le faux Markdown mange bien les antislashs (sinon le test ne prouve rien)', () => {
  assert.equal(md.render('12\\,500 et a \\\\ b'), '<p>12,500 et a \\ b</p>\n');
});

test('les antislashs des formules survivent au Markdown', () => {
  const html = rendreAvecFormules(md, 'Si $A(x_A\\,;y_A)$ alors $$\\begin{pmatrix} a \\\\ b \\end{pmatrix}$$');
  assert.ok(html.includes('$A(x_A\\,;y_A)$'));
  assert.ok(html.includes('\\\\ b'));
});

test('le code n’est pas touché', () => {
  const { texte, formules } = protegerFormules('Prix : `echo $HOME` et $x$');
  assert.equal(formules.length, 1);
  assert.ok(texte.includes('`echo $HOME`'));
});

test('les chevrons sont échappés pour le HTML', () => {
  const html = rendreAvecFormules(md, '$a < b$');
  assert.ok(html.includes('$a &lt; b$'));
});

test('le Markdown autour reste rendu', () => {
  const html = rendreAvecFormules(md, '**Gras** et $x^2$');
  assert.ok(html.includes('<strong>Gras</strong>'));
  assert.ok(html.includes('$x^2$'));
});
