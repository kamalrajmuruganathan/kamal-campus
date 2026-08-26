import { test } from 'node:test';
import assert from 'node:assert/strict';
import { melanger, poolQuestions, composerQcm } from './quizmix.js';

// Générateur pseudo-aléatoire déterministe (mulberry32) pour des tests stables.
function rng(graine) {
  let a = graine >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const chapitres = [
  { qcm: { questions: [{ id: 'a1' }, { id: 'a2' }] } },
  { qcm: { questions: [{ id: 'b1' }, { id: 'b2' }, { id: 'b3' }] } },
  { qcm: null },
  {},
];

test('poolQuestions aplatit toutes les questions et ignore les chapitres sans QCM', () => {
  const pool = poolQuestions(chapitres);
  assert.equal(pool.length, 5);
  assert.deepEqual(pool.map((q) => q.id), ['a1', 'a2', 'b1', 'b2', 'b3']);
});

test('poolQuestions gère une entrée vide/absente', () => {
  assert.deepEqual(poolQuestions([]), []);
  assert.deepEqual(poolQuestions(undefined), []);
});

test('melanger conserve exactement les mêmes éléments (permutation)', () => {
  const source = [1, 2, 3, 4, 5, 6];
  const m = melanger(source, rng(42));
  assert.equal(m.length, source.length);
  assert.deepEqual([...m].sort((a, b) => a - b), source);
  // ne mute pas la source
  assert.deepEqual(source, [1, 2, 3, 4, 5, 6]);
});

test('melanger est déterministe à graine fixée', () => {
  const a = melanger([1, 2, 3, 4, 5], rng(7));
  const b = melanger([1, 2, 3, 4, 5], rng(7));
  assert.deepEqual(a, b);
});

test('composerQcm garde au plus n questions, toutes issues du pool', () => {
  const q = composerQcm(chapitres, 3, rng(1));
  assert.equal(q.length, 3);
  const ids = new Set(poolQuestions(chapitres).map((x) => x.id));
  for (const x of q) assert.ok(ids.has(x.id));
});

test('composerQcm ne dépasse pas la taille du pool', () => {
  const q = composerQcm(chapitres, 100, rng(1));
  assert.equal(q.length, 5);
});
