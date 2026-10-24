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

import { melangerChoix, sansDoublons, completerQuestions, preferNiveau } from './quizmix.js';

test('melangerChoix garde la bonne réponse et ne modifie pas l’original', () => {
  const q = { enonce: 'x', choix: ['bon', 'b', 'c', 'd'], reponse: 0 };
  const positions = new Set();
  const r = rng(7);
  for (let k = 0; k < 40; k++) {
    const m = melangerChoix(q, r);
    assert.equal(m.choix[m.reponse], 'bon');
    assert.deepEqual([...m.choix].sort(), ['b', 'bon', 'c', 'd']);
    positions.add(m.reponse);
  }
  assert.ok(positions.size >= 3, 'la bonne réponse change de place');
  assert.deepEqual(q.choix, ['bon', 'b', 'c', 'd']);
  assert.equal(q.reponse, 0);
});

test('melangerChoix rend telle quelle une question mal formée', () => {
  const q = { enonce: 'x', choix: ['a', 'b'], reponse: 5 };
  assert.equal(melangerChoix(q), q);
  assert.equal(melangerChoix(null), null);
});

test('sansDoublons retire les énoncés répétés', () => {
  const qs = [{ enonce: 'a', id: 1 }, { enonce: 'b', id: 2 }, { enonce: 'a ', id: 3 }];
  assert.deepEqual(sansDoublons(qs).map((q) => q.id), [1, 2]);
});

test('completerQuestions complète sans doublon jusqu’à n', () => {
  const gen = [{ enonce: 'g1' }, { enonce: 'g1' }, { enonce: 'g2' }];
  const banque = [{ enonce: 'g2' }, { enonce: 'b1' }, { enonce: 'b2' }, { enonce: 'b3' }];
  const res = completerQuestions(gen, banque, 4, rng(3));
  assert.equal(res.length, 4);
  assert.equal(new Set(res.map((q) => q.enonce)).size, 4);
  assert.ok(res.some((q) => q.enonce === 'g1') && res.some((q) => q.enonce === 'g2'));
  // Réserve trop petite : on rend ce qu'on a, sans inventer.
  assert.equal(completerQuestions(gen, [], 10).length, 2);
  // Assez de questions générées : la réserve n'est pas utilisée.
  assert.deepEqual(completerQuestions([{ enonce: 'a' }, { enonce: 'b' }], banque, 2).map((q) => q.enonce), ['a', 'b']);
});

test('preferNiveau garde le niveau de l’élève quand il y a assez de chapitres', () => {
  const ch = [{ id: 1, niveau: 'cp' }, { id: 2, niveau: 'quatrieme' }, { id: 3, niveau: 'quatrieme' }, { id: 4, niveau: 'terminale' }];
  assert.deepEqual(preferNiveau(ch, 'quatrieme').map((c) => c.id), [2, 3]);
  assert.equal(preferNiveau(ch, 'terminale').length, 4); // un seul chapitre : toute la liste
  assert.equal(preferNiveau(ch, null).length, 4);
});

test('melangerChoix ne mélange pas quand l’explication cite une lettre', () => {
  const q = { enonce: 'x', choix: ['a', 'b', 'c', 'd'], reponse: 1, explication: 'Le piège du choix A est de confondre…' };
  assert.equal(melangerChoix(q, rng(1)), q);
  const q2 = { ...q, explication: 'Les choix B et C inversent image et antécédent.' };
  assert.equal(melangerChoix(q2, rng(1)), q2);
  const q3 = { ...q, explication: 'Réponse juste : le point A est sur la droite.' };
  assert.notEqual(melangerChoix(q3, rng(1)), q3);
});
