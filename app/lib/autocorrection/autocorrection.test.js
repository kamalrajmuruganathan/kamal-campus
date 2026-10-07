import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeReponse, comparer, uniteAttendue } from './index.js';

test('typeReponse : nombres, unités et mots courts → auto', () => {
  for (const r of ['$43$', '$1\\,250$ N', '$4$ km/h', '$ Q = 180\\,000 $ J', '$32°$', '$90^\\circ$',
    '$ \\dfrac{1}{2} $', '9 h 25', 'un corps pur', 'Le judaïsme.', 'Vrai', '$12{,}5$ cm²',
    '$1{,}98 \\times 10^{20}$ N', '$ R = 4{,}7\\ \\mathrm{k\\Omega} $', 'grandfather ou grandpa']) {
    assert.equal(typeReponse(r), 'auto', r);
  }
});

test('typeReponse : réponses longues, exemples, LaTeX complexe → ouverte', () => {
  for (const r of [
    'Exemple de réponse : phénylcétonurie contrôlée par le régime.',
    'Exemple : Vous visitez le musée.',
    "Non : beaucoup d'espèces sont parties en migration.",
    '$u_n \\to \\dfrac{3}{2}$.',
    '$+\\infty$ et $+\\infty$.',
    '$2^{2}$',
    '$ 6x + 8 $',
    '$f(x) = -4x$',
    '$x = 2$ ou $x = 3$',
    'a shirt, a skirt',
    'his dog / her cat',
    'génitif singulier ou nominatif pluriel',
    'Colomb → Amérique ; Vasco de Gama → Inde',
    '(a) complétive ; (b) relative',
    'Répéter 5 fois [saute].',
    '',
  ]) {
    assert.equal(typeReponse(r), 'ouverte', r);
  }
});

test('typeReponse : en langue étrangère, une phrase est ouverte', () => {
  assert.equal(typeReponse('Ich habe Angst.', 'allemand'), 'ouverte');
  assert.equal(typeReponse('Son las ocho.', 'espagnol'), 'ouverte');
  assert.equal(typeReponse('der Bundesstaat', 'allemand'), 'auto');
  assert.equal(typeReponse('Le judaïsme.', 'hist-geo'), 'auto');
});

test('comparer : nombres (virgule, point, milliers, unité facultative)', () => {
  assert.ok(comparer('12,5', '$12{,}5$'));
  assert.ok(comparer('12.5', '$12{,}5$'));
  assert.ok(comparer('1250', '$1\\,250$ N'));
  assert.ok(comparer('1 250 N', '$1\\,250$ N'));
  assert.ok(comparer('1250N', '$1\\,250$ N'));
  assert.ok(comparer('Q = 180000 J', '$ Q = 180\\,000 $ J'));
  assert.ok(comparer('180 000', '$ Q = 180\\,000 $ J'));
  assert.ok(comparer('0,5', '$ \\dfrac{1}{2} $'));
  assert.ok(comparer('1/2', '$ \\dfrac{1}{2} $'));
  assert.ok(comparer('32', '$32°$'));
  assert.ok(comparer('90°', '$90^\\circ$'));
  assert.ok(comparer('1,98e20', '$1{,}98 \\times 10^{20}$ N'));
  assert.ok(comparer('1,98 x 10^20 N', '$1{,}98 \\times 10^{20}$ N'));
  assert.ok(comparer('4,7 kΩ', '$ R = 4{,}7\\ \\mathrm{k\\Omega} $'));
  assert.ok(comparer('17,50 euros', '$17{,}50$ €'));
  assert.ok(comparer('16 cm2', '$16$ cm²'));
  assert.ok(comparer('−9', '$A = -9$'));
  assert.ok(comparer('1200', 'environ $1\\,200$'));
  assert.ok(comparer('3,1416', '$3{,}14$'));
});

test('comparer : nombres faux ou mauvaise unité → false', () => {
  assert.equal(comparer('12', '$12{,}5$'), false);
  assert.equal(comparer('4,4', '$4$'), false);
  assert.equal(comparer('4 m/s', '$4$ km/h'), false);
  assert.equal(comparer('125', '$1\\,250$ N'), false);
  assert.equal(comparer('9', '$A = -9$'), false);
  assert.equal(comparer('', '$43$'), false);
});

test('comparer : texte (casse, accents, articles, ponctuation)', () => {
  assert.ok(comparer('judaisme', 'Le judaïsme.'));
  assert.ok(comparer('LE JUDAÏSME !', 'Le judaïsme.'));
  assert.ok(comparer("l'ocean atlantique", "l'océan Atlantique"));
  assert.ok(comparer('corps pur', 'un corps pur'));
  assert.ok(comparer('etre', 'être'));
  assert.ok(comparer('9h25', '9 h 25'));
  assert.ok(comparer('grandpa', 'grandfather ou grandpa'));
  assert.ok(comparer('Grandfather', 'grandfather ou grandpa'));
  assert.ok(comparer('Edinburgh', 'Edinburgh (Édimbourg)'));
  assert.ok(comparer('aufs Regal', 'auf das Regal (ou aufs Regal)'));
  assert.equal(comparer('corps impur', 'un corps pur'), false);
});

test('comparer : les accents comptent sur les mots très courts (a/à, ou/où)', () => {
  assert.equal(comparer('a', 'à'), false);
  assert.ok(comparer('à', 'à'));
  assert.equal(comparer('ou', 'où'), false);
});

test('comparer : phrase à un seul nombre → le nombre seul suffit', () => {
  assert.ok(comparer('41', 'Nina a 41 billes.'));
  assert.ok(comparer('41 billes', 'Nina a 41 billes.'));
  assert.ok(comparer('1792', 'En 1792.'));
  assert.equal(comparer('40', 'Nina a 41 billes.'), false);
  assert.equal(comparer('6', '6 pommes et demie'), false);
});

test('comparer : réponse ouverte → toujours false', () => {
  assert.equal(comparer('quelque chose', 'Exemple de réponse : bla bla.'), false);
});

test('uniteAttendue', () => {
  assert.equal(uniteAttendue('$4$ km/h'), 'km/h');
  assert.equal(uniteAttendue('$43$'), '');
  assert.equal(uniteAttendue('Le judaïsme.'), '');
});
