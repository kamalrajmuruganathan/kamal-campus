import { test } from 'node:test';
import assert from 'node:assert/strict';
import { latexEnMots, segmentsFiche, segmentsTexte, estEtranger, lectureActive } from './index.js';

test('formules lues en mots', () => {
  assert.equal(latexEnMots('3 + 4 = 7'), '3 plus 4 égale 7');
  assert.equal(latexEnMots('12 \\times 3 = 36'), '12 fois 3 égale 36');
  assert.equal(latexEnMots('\\dfrac{1}{2}'), '1 sur 2');
  assert.equal(latexEnMots('x^2'), 'x au carré');
  assert.equal(latexEnMots('1\\,250'), '1250');
  assert.equal(latexEnMots('9 - 4 = 5'), '9 moins 4 égale 5');
});

test('où proposer le bouton Écouter', () => {
  assert.equal(lectureActive('italien'), true);
  assert.equal(lectureActive('maths', 'cp'), true);
  assert.equal(lectureActive('maths', 'cm2'), false);
  assert.equal(lectureActive('maths', 'cm2', { lecturePartout: true }), true);
});

test('langue de chaque morceau', () => {
  assert.equal(estEtranger('Good morning!', 'anglais'), true);
  assert.equal(estEtranger('le mot hello', 'anglais'), false);
  assert.equal(estEtranger('Bonjour', 'francais'), false);
  const s = segmentsTexte('Traduis : « I am happy ».', 'anglais');
  assert.deepEqual(s.map((x) => x.langue), ['francais', 'anglais']);
  assert.equal(s[1].texte, 'I am happy');
});

test('fiche : vocabulaire lu dans les deux langues, formules lues en CP', () => {
  const md = '---\nid: x\n---\n# Les animaux\n\n| Anglais | Français |\n|---|---|\n| a dog | un chien |\n| a cat | un chat |\n';
  const s = segmentsFiche(md, 'anglais');
  assert.deepEqual(s.map((x) => [x.langue, x.texte]), [
    ['francais', 'Les animaux. Anglais. Français.'], ['anglais', 'a dog.'], ['francais', 'un chien.'], ['anglais', 'a cat.'], ['francais', 'un chat.'],
  ]);
  const t = segmentsFiche('| Mot | Sens |\n|---|---|\n| dog | chien |\n| cat | chat |', 'anglais');
  assert.deepEqual(t.map((x) => x.langue), ['francais', 'anglais', 'francais', 'anglais', 'francais']);
  const cp = segmentsFiche('# Additionner\n\nOn calcule $3 + 4 = 7$.\n\n![schéma](data:image/svg+xml;base64,AAA)', 'maths');
  assert.match(cp.map((x) => x.texte).join(' '), /3 plus 4 égale 7/);
  assert.doesNotMatch(cp.map((x) => x.texte).join(' '), /schéma|base64/);
  const long = segmentsFiche('Une phrase assez longue pour remplir. '.repeat(30), 'maths');
  assert.ok(long.length > 3 && long.every((x) => x.texte.length <= 260));
});

test('un passage en gras dans la même langue reste dans la même phrase', () => {
  const s = segmentsTexte('On part du **même radical que le futur**, auquel on ajoute **-ei, -esti**.', 'italien');
  assert.equal(s[0].langue, 'francais');
  assert.equal(s[0].texte, 'On part du même radical que le futur , auquel on ajoute');
  assert.equal(s[1].langue, 'italien');
});
