import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  etatInitial, ajouterJours, planifier, estDue, clesDues,
} from './index.js';

test('ajouterJours gère les mois et années', () => {
  assert.equal(ajouterJours('2026-01-30', 3), '2026-02-02');
  assert.equal(ajouterJours('2026-12-31', 1), '2027-01-01');
  assert.equal(ajouterJours('2026-03-01', -1), '2026-02-28');
});

test('une réussite programme J+1 puis J+3 puis intervalle croissant', () => {
  let e = etatInitial('2026-01-01');
  e = planifier(e, true, '2026-01-01');
  assert.equal(e.interval, 1);
  assert.equal(e.due, '2026-01-02');
  e = planifier(e, true, '2026-01-02');
  assert.equal(e.interval, 3);
  assert.equal(e.due, '2026-01-05');
  e = planifier(e, true, '2026-01-05');
  assert.ok(e.interval >= 7, `intervalle attendu ≥ 7, obtenu ${e.interval}`);
});

test('un échec ramène au lendemain et baisse la facilité', () => {
  let e = etatInitial('2026-01-01');
  e = planifier(e, true, '2026-01-01');
  e = planifier(e, true, '2026-01-02');
  const easeAvant = e.ease;
  e = planifier(e, false, '2026-01-05');
  assert.equal(e.rep, 0);
  assert.equal(e.interval, 1);
  assert.ok(e.ease < easeAvant);
  assert.ok(e.ease >= 1.3);
});

test('la facilité reste bornée', () => {
  let e = etatInitial('2026-01-01');
  for (let i = 0; i < 30; i++) e = planifier(e, true, e.due);
  assert.ok(e.ease <= 2.8);
  let f = etatInitial('2026-01-01');
  for (let i = 0; i < 30; i++) f = planifier(f, false, f.due);
  assert.ok(f.ease >= 1.3);
});

test('estDue : jamais vue = due, sinon selon la date', () => {
  assert.equal(estDue(undefined, '2026-01-01'), true);
  assert.equal(estDue({ due: '2026-01-01' }, '2026-01-05'), true);
  assert.equal(estDue({ due: '2026-01-10' }, '2026-01-05'), false);
});

test('clesDues renvoie les cartes à revoir, plus anciennes d’abord', () => {
  const carte = {
    a: { due: '2026-01-03' },
    b: { due: '2026-01-01' },
    c: { due: '2026-02-01' }, // pas encore due
  };
  const dues = clesDues(carte, ['a', 'b', 'c', 'd'], '2026-01-05');
  assert.deepEqual(dues, ['b', 'a', 'd']); // d jamais vue → due, en fin de tri
});
