import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as G from './generateurs.js';
import { genererEnigmes, aFamille, FAMILLES } from './index.js';

function rng(graine) {
  let a = graine >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GENS = Object.values(G).filter((v) => typeof v === 'function');
const DIFF = new Set(['facile', 'moyen', 'difficile']);

test('chaque générateur d’énigme respecte les invariants (nombreux tirages)', () => {
  const rand = rng(555);
  for (const gen of GENS) {
    for (let i = 0; i < 300; i++) {
      const e = gen(rand);
      assert.ok(Number.isFinite(e.reponse), `${gen.name} : réponse numérique finie`);
      assert.ok(Number.isInteger(e.reponse), `${gen.name} : réponse entière`);
      assert.ok(e.reponse >= 0, `${gen.name} : réponse ≥ 0 (clavier sans signe)`);
      assert.ok(DIFF.has(e.difficulte), `${gen.name} : difficulté connue`);
      assert.ok(e.enonce && e.enonce.length > 0, `${gen.name} : énoncé non vide`);
      assert.ok(e.explication && e.explication.length > 0, `${gen.name} : explication`);
      assert.ok(['suite', 'grille', 'calcul'].includes(e.type), `${gen.name} : type connu`);
    }
  }
});

test('suiteArithmetique : la réponse prolonge bien la suite', () => {
  const rand = rng(1);
  for (let i = 0; i < 300; i++) {
    const e = G.suiteArithmetique(rand);
    const nums = e.enonce.replace('?', '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);
    const r = nums[1] - nums[0];
    assert.equal(e.reponse, nums[nums.length - 1] + r);
  }
});

test('suiteGeometrique : la réponse prolonge bien la suite', () => {
  const rand = rng(2);
  for (let i = 0; i < 300; i++) {
    const e = G.suiteGeometrique(rand);
    const nums = e.enonce.replace('?', '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);
    const q = nums[1] / nums[0];
    assert.equal(e.reponse, nums[nums.length - 1] * q);
  }
});

test('grilleArithmetique fournit une grille cohérente avec la réponse', () => {
  const rand = rng(3);
  for (let i = 0; i < 200; i++) {
    const e = G.grilleArithmetique(rand);
    assert.ok(e.grille && Array.isArray(e.grille.lignes));
    const [a, b] = e.grille.lignes[2];
    const attendu = e.explication.includes('×') ? a * b : a + b;
    assert.equal(e.reponse, attendu);
  }
});

test('genererEnigmes renvoie n énigmes avec id 1..n', () => {
  const qs = genererEnigmes('suite', 10, rng(9));
  assert.equal(qs.length, 10);
  assert.deepEqual(qs.map((q) => q.id), Array.from({ length: 10 }, (_, i) => i + 1));
});

test('genererEnigmes renvoie [] pour une famille inconnue', () => {
  assert.deepEqual(genererEnigmes('xxx', 5, rng(1)), []);
  assert.equal(aFamille('xxx'), false);
  assert.equal(aFamille('suite'), true);
});

test('toutes les familles ont des générateurs', () => {
  for (const [k, f] of Object.entries(FAMILLES)) {
    assert.ok(Array.isArray(f.gens) && f.gens.length > 0, `${k} : générateurs présents`);
  }
});
