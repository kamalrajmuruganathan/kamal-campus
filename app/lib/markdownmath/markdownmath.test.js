import { test } from 'node:test';
import assert from 'node:assert/strict';
import MarkdownIt from 'markdown-it';
import { protegerFormules, rendreAvecFormules } from './index.js';

const md = new MarkdownIt({ html: false, typographer: true });

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
