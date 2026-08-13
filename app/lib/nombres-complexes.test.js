/**
 * Tests du module nombres complexes.
 * Lancer :  cd app && node --test lib/nombres-complexes.test.js
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  texteComplexe, additionner, multiplier, conjugue, diviser,
  moduleArgument, secondDegreComplexe,
} from './nombres-complexes.js';

// ── écriture ──
test('écriture a + bi : signes, i seul, réel pur, imaginaire pur', () => {
  assert.equal(texteComplexe({ re: 3, im: 2 }), '3 + 2i');
  assert.equal(texteComplexe({ re: 3, im: -1 }), '3 − i');
  assert.equal(texteComplexe({ re: 0, im: -2 }), '−2i');
  assert.equal(texteComplexe({ re: 5, im: 0 }), '5');
});

// ── opérations ──
test('(3+2i) + (1−4i) = 4 − 2i', () => {
  const r = additionner({ re: 3, im: 2 }, { re: 1, im: -4 });
  assert.deepEqual(r.resultat, { re: 4, im: -2 });
});

test('(2+3i)(1−2i) = 8 − i  (i² = −1)', () => {
  const r = multiplier({ re: 2, im: 3 }, { re: 1, im: -2 });
  assert.deepEqual(r.resultat, { re: 8, im: -1 });
});

test('i² = −1', () => {
  const r = multiplier({ re: 0, im: 1 }, { re: 0, im: 1 });
  assert.deepEqual(r.resultat, { re: -1, im: 0 });
});

test('conjugué de 3 − 5i : 3 + 5i', () => {
  assert.deepEqual(conjugue({ re: 3, im: -5 }).resultat, { re: 3, im: 5 });
});

test('(4+2i)/(1−i) = 1 + 3i', () => {
  const r = diviser({ re: 4, im: 2 }, { re: 1, im: -1 });
  assert.deepEqual(r.resultat, { re: 1, im: 3 });
});

test('division par zéro refusée', () => {
  assert.equal(diviser({ re: 1, im: 1 }, { re: 0, im: 0 }).valide, false);
});

test('entrée invalide refusée en enseignant', () => {
  assert.equal(additionner({ re: 1 }, { re: 1, im: 2 }).valide, false);
});

// ── module / argument ──
test('|3+4i| = 5 exact', () => {
  const r = moduleArgument({ re: 3, im: 4 });
  assert.equal(r.module.texte, '5');
  assert.equal(r.module.exact, true);
});

test('|1+i| = √2, argument π/4', () => {
  const r = moduleArgument({ re: 1, im: 1 });
  assert.equal(r.module.texte, '√2');
  assert.equal(r.argument.texte, 'π/4');
  assert.equal(r.argument.exact, true);
});

test('|2+2i| = 2√2 (simplification k√m)', () => {
  assert.equal(moduleArgument({ re: 2, im: 2 }).module.texte, '2√2');
});

test('argument de −1 : π ; de −i : −π/2 ; de 1 : 0', () => {
  assert.equal(moduleArgument({ re: -1, im: 0 }).argument.texte, 'π');
  assert.equal(moduleArgument({ re: 0, im: -1 }).argument.texte, '−π/2');
  assert.equal(moduleArgument({ re: 1, im: 0 }).argument.texte, '0');
});

test('argument de 1 + i√3 : π/3', () => {
  const r = moduleArgument({ re: 1, im: Math.sqrt(3) });
  assert.equal(r.argument.texte, 'π/3');
});

test('z = 0 : module 0, argument non défini (null) avec explication', () => {
  const r = moduleArgument({ re: 0, im: 0 });
  assert.equal(r.module.texte, '0');
  assert.equal(r.argument, null);
  assert.match(r.etapes.at(-1).detail, /pas d’argument/i);
});

// ── second degré dans ℂ ──
test('z² + z + 1 = 0 : Δ = −3, racines conjuguées −1/2 ± i√3/2', () => {
  const r = secondDegreComplexe(1, 1, 1);
  assert.equal(r.delta, -3);
  assert.equal(r.reelles, false);
  const [z1, z2] = r.racines;
  assert.ok(Math.abs(z1.re - -0.5) < 1e-12);
  assert.ok(Math.abs(z1.im + Math.sqrt(3) / 2) < 1e-12);
  assert.ok(Math.abs(z2.im - Math.sqrt(3) / 2) < 1e-12);
  // conjuguées
  assert.equal(z1.re, z2.re);
  assert.equal(z1.im, -z2.im);
});

test('z² + 4 = 0 : racines ±2i', () => {
  const r = secondDegreComplexe(1, 0, 4);
  const ims = r.racines.map((z) => z.im).sort((a, b) => a - b);
  assert.deepEqual(ims, [-2, 2]);
  assert.equal(r.racines[0].re, 0);
});

test('Δ > 0 : renvoie les racines réelles (z² − 3z + 2)', () => {
  const r = secondDegreComplexe(1, -3, 2);
  assert.equal(r.reelles, true);
  assert.deepEqual(r.racines.map((z) => z.re).sort((a, b) => a - b), [1, 2]);
});

test('Δ = 0 : racine double', () => {
  const r = secondDegreComplexe(1, -2, 1);
  assert.equal(r.racines.length, 1);
  assert.equal(r.racines[0].re, 1);
});

test('a = 0 refusé en enseignant (premier degré)', () => {
  const r = secondDegreComplexe(0, 2, 1);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /PREMIER degré/);
});
