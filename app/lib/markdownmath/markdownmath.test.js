import { test } from 'node:test';
import assert from 'node:assert/strict';
import { protegerFormules, rendreAvecFormules, espacesInsecables } from './index.js';

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

test('espaces insécables avant « : ; ? ! » (pas dans le code)', () => {
  const html = rendreAvecFormules(md, 'Pour la seconde : $1$ ; « oui » ?');
  assert.ok(html.includes('seconde\u00a0:'));
  assert.ok(html.includes('$1$\u00a0;'));
  assert.ok(html.includes('«\u00a0oui\u00a0»\u00a0?'));
  assert.equal(espacesInsecables('<pre><code>if x :</code></pre><code>a ;</code> b :'), '<pre><code>if x :</code></pre><code>a ;</code> b\u00a0:');
});

// ─── Tests complémentaires ───────────────────────────────────────────────────
import { restaurerFormules } from './index.js';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

test('$$…$$ sur plusieurs lignes, avec \\\\ et \\, : protégé d\'un bloc, rendu à l\'identique', () => {
  const src = 'Avant\n\n$$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}\n= 12\\,500$$\n\nAprès';
  const { texte, formules } = protegerFormules(src);
  assert.deepEqual(formules, ['$$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}\n= 12\\,500$$']);
  assert.equal(texte, 'Avant\n\nKCMATH0KCMATH\n\nAprès');
  assert.ok(rendreAvecFormules(md, src).includes('$$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}\n= 12\\,500$$'));
});

// Bug corrigé : une formule en ligne coupée par un retour à la ligne n'était pas protégée ;
// le « $ » de fin s'appariait avec la formule suivante (« $, et $ » pris pour une formule).
test('formule en ligne sur deux lignes : protégée ; pas d\'appariement avec la formule suivante', () => {
  const src = 'On a $a = 20\\ \\text{mV}\n= 2$, et $U_0 = 0{,}50$.';
  const { texte, formules } = protegerFormules(src);
  assert.deepEqual(formules, ['$a = 20\\ \\text{mV}\n= 2$', '$U_0 = 0{,}50$']);
  assert.equal(texte, 'On a KCMATH0KCMATH, et KCMATH1KCMATH.');
});

test('formule sur deux lignes dans une citation : les « > » de la 2e ligne sont retirés de la formule', () => {
  const src = '> **Exemple.** $P = \\dfrac{1}{6} \\times \\dfrac{1}{6}\n> = \\dfrac{1}{36}$.';
  const { formules } = protegerFormules(src);
  assert.deepEqual(formules, ['$P = \\dfrac{1}{6} \\times \\dfrac{1}{6}\n= \\dfrac{1}{36}$']);
  // Hors citation, un « > » en début de ligne dans la formule est un vrai signe « supérieur ».
  assert.deepEqual(protegerFormules('$x\n> 0$').formules, ['$x\n> 0$']);
});

test('une ligne vide arrête une formule en ligne (pas d\'appariement à travers les paragraphes)', () => {
  const { formules } = protegerFormules('Prix : 5 $\n\nAutre paragraphe $x$');
  assert.deepEqual(formules, ['$x$']);
});

test('dollar échappé, formules collées, code en ligne et blocs de code', () => {
  assert.deepEqual(protegerFormules('Coût : 3 \\$ puis $a$').formules, ['$a$']);
  assert.deepEqual(protegerFormules('$a\\$b$').formules, ['$a\\$b$']);
  assert.deepEqual(protegerFormules('$$x$$ et $y$').formules, ['$$x$$', '$y$']);
  const { texte, formules } = protegerFormules('```\n$x$\n```\n`$y$` et $z$');
  assert.deepEqual(formules, ['$z$']);
  assert.ok(texte.startsWith('```\n$x$\n```\n`$y$`'));
  assert.deepEqual(protegerFormules('').formules, []);
  assert.deepEqual(protegerFormules(null), { texte: '', formules: [] });
});

test('restaurerFormules : jeton inconnu laissé tel quel, & < > échappés, aller-retour exact', () => {
  assert.equal(restaurerFormules('<p>KCMATH5KCMATH</p>', ['$a$']), '<p>KCMATH5KCMATH</p>');
  assert.equal(restaurerFormules('KCMATH0KCMATH', ['$a & b < c > d$']), '$a &amp; b &lt; c &gt; d$');
  const ident = { render: (s) => s };
  const src = 'Texte $a_1 \\, b$ et $$\\frac{1}{2}$$ fin';
  assert.equal(rendreAvecFormules(ident, src), src);
});

test('espacesInsecables : idempotent, balises intactes', () => {
  const h = '<p class="a : b">Oui : « non » ?</p>';
  const une = espacesInsecables(h);
  assert.equal(une, '<p class="a : b">Oui\u00a0: «\u00a0non\u00a0»\u00a0?</p>');
  assert.equal(espacesInsecables(une), une);
});

test('les 959 fiches : aucune formule laissée sans protection, aller-retour exact', () => {
  const racine = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'contenu');
  const fiches = [];
  (function parcourir(d) {
    for (const f of readdirSync(d)) {
      const p = join(d, f);
      if (statSync(p).isDirectory()) parcourir(p);
      else if (f === 'fiche.md') fiches.push(p);
    }
  }(racine));
  assert.ok(fiches.length >= 950);
  let n = 0;
  for (const f of fiches) {
    const src = readFileSync(f, 'utf8');
    const { texte, formules } = protegerFormules(src);
    n += formules.length;
    // Plus aucun « $ » non échappé hors du code et des commentaires.
    const reste = texte.replace(/```[\s\S]*?```|`[^`\n]*`|<!--[\s\S]*?-->/g, '');
    assert.ok(!/(?<!\\)\$/.test(reste), `${f} : « $ » isolé`);
    for (const fo of formules) assert.ok(/^\$[\s\S]*\$$/.test(fo), f);
    // Aller-retour avec un rendu neutre (sans citation, le texte est inchangé).
    if (!/^\s*>.*\$[^$]*$/m.test(src)) assert.equal(restaurerFormules(texte, formules.map((x) => x)).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'), src, f);
  }
  assert.ok(n > 25000);
});
