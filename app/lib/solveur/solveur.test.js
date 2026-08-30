import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Rationnel } from './rationnel.js';
import { resoudre } from './index.js';

test('Rationnel : opérations et réduction', () => {
  const a = new Rationnel(3, 4);
  const b = new Rationnel(5, 6);
  assert.equal(a.plus(b).texte(), '19/12');
  assert.equal(new Rationnel(2, 4).texte(), '1/2');
  assert.equal(new Rationnel(-2, -4).texte(), '1/2');
  assert.equal(new Rationnel(6, 3).texte(), '2');
});

test('calcul : priorité des opérations avec étapes', () => {
  const r = resoudre('3+4*2');
  assert.equal(r.ok, true);
  assert.equal(r.type, 'calcul');
  assert.equal(r.resultat, '11');
  assert.ok(r.etapes.includes('3 + 8'), `étapes: ${r.etapes.join(' | ')}`);
});

test('calcul : parenthèses', () => {
  assert.equal(resoudre('2*(3+4)').resultat, '14');
  assert.equal(resoudre('(8-2)/3').resultat, '2');
});

test('calcul : somme de fractions exacte', () => {
  assert.equal(resoudre('3/4 + 5/6').resultat, '19/12');
});

test('calcul : puissances', () => {
  assert.equal(resoudre('2^3 + 1').resultat, '9');
});

test('équation du premier degré', () => {
  assert.equal(resoudre('2x+5=13').resultat, 'x = 4');
  assert.equal(resoudre('3x-1=x+7').resultat, 'x = 4');
});

test('équation : coefficient fractionnaire', () => {
  assert.equal(resoudre('2x+1=0').resultat, 'x = -1/2');
});

test('équation du second degré à racines entières', () => {
  const r = resoudre('x^2-5x+6=0');
  assert.equal(r.type, 'equation');
  assert.ok(r.resultat.includes('x = 2') && r.resultat.includes('x = 3'), r.resultat);
});

test('équation du second degré : racine double', () => {
  assert.equal(resoudre('x^2-4x+4=0').resultat, 'x = 2');
});

test('équation du second degré : pas de solution réelle', () => {
  assert.equal(resoudre('x^2+1=0').resultat, 'Aucune solution réelle.');
});

test('équation : identité et impossibilité', () => {
  assert.ok(resoudre('5=5').resultat.startsWith('Toujours vrai'));
  assert.equal(resoudre('2x=2x+1').resultat, 'Aucune solution.');
});

test('expression avec x : forme réduite', () => {
  assert.equal(resoudre('(x+1)(x-1)').resultat, 'x^2 − 1');
  assert.equal(resoudre('2(x+3)').resultat, '2x + 6');
});

test('erreurs de saisie gérées proprement', () => {
  assert.equal(resoudre('').ok, false);
  assert.equal(resoudre('2++').ok, false);
  assert.equal(resoudre('1=2=3').ok, false);
  assert.equal(resoudre('1/0').ok, false);
});
