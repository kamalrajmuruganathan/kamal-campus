import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as M from './modeles.js';
import { aGenerateur, genererQuestions, REGISTRE } from './index.js';

// RNG déterministe (mulberry32) pour des tests reproductibles.
function rng(graine) {
  let a = graine >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GENERATEURS = Object.values(M).filter((v) => typeof v === 'function');
const DIFFICULTES = new Set(['facile', 'moyen', 'difficile']);

test('chaque générateur respecte les invariants sur de nombreux tirages', () => {
  const rand = rng(12345);
  for (const gen of GENERATEURS) {
    for (let i = 0; i < 400; i++) {
      const q = gen(rand); // ne doit jamais lever (assez de distracteurs distincts)
      assert.equal(q.choix.length, 4, `${gen.name} : 4 choix attendus`);
      assert.equal(new Set(q.choix).size, 4, `${gen.name} : 4 choix DISTINCTS attendus`);
      assert.ok(q.reponse >= 0 && q.reponse < 4, `${gen.name} : index de réponse valide`);
      assert.ok(DIFFICULTES.has(q.difficulte), `${gen.name} : difficulté connue (${q.difficulte})`);
      assert.ok(q.enonce && q.enonce.length > 0, `${gen.name} : énoncé non vide`);
      assert.ok(q.explication && q.explication.length > 0, `${gen.name} : explication non vide`);
      assert.ok(typeof q.notion === 'string' && q.notion.length > 0, `${gen.name} : notion présente`);
    }
  }
});

test('eqLineaire : la réponse marquée résout réellement l’équation', () => {
  const rand = rng(999);
  for (let i = 0; i < 500; i++) {
    const q = M.eqLineaire(rand);
    // Énoncé de la forme "$Ax + B = C$" ou "$Ax - B = C$"
    const m = /\$(-?\d+)x ([+-]) (\d+) = (-?\d+)\$/.exec(q.enonce);
    assert.ok(m, `énoncé inattendu : ${q.enonce}`);
    const a = Number(m[1]);
    const b = (m[2] === '-' ? -1 : 1) * Number(m[3]);
    const c = Number(m[4]);
    const sol = /\$x = (-?\d+)\$/.exec(q.choix[q.reponse]);
    assert.ok(sol, `réponse inattendue : ${q.choix[q.reponse]}`);
    const x = Number(sol[1]);
    assert.equal(a * x + b, c, `la solution marquée ne vérifie pas l'équation`);
  }
});

test('racineCarreParfait : la réponse marquée est bien la racine', () => {
  const rand = rng(7);
  for (let i = 0; i < 200; i++) {
    const q = M.racineCarreParfait(rand);
    const n = Number(/\\sqrt\{(\d+)\}/.exec(q.enonce)[1]);
    const r = Number(/\$(\d+)\$/.exec(q.choix[q.reponse])[1]);
    assert.equal(r * r, n, `√${n} ≠ ${r}`);
  }
});

test('genererQuestions fabrique n questions bien formées, ids 1..n', () => {
  const rand = rng(2024);
  const qs = genererQuestions('1spe-math-second-degre', 20, rand);
  assert.equal(qs.length, 20);
  assert.deepEqual(qs.map((q) => q.id), Array.from({ length: 20 }, (_, i) => i + 1));
  for (const q of qs) {
    assert.equal(q.choix.length, 4);
    assert.equal(new Set(q.choix).size, 4);
    assert.ok(q.reponse >= 0 && q.reponse < 4);
  }
});

test('genererQuestions renvoie [] pour un chapitre sans générateur', () => {
  assert.deepEqual(genererQuestions('chapitre-inexistant', 20, rng(1)), []);
  assert.equal(aGenerateur('chapitre-inexistant'), false);
});

test('aGenerateur reconnaît les chapitres équipés', () => {
  assert.equal(aGenerateur('5e-math-fractions'), true);
  assert.equal(aGenerateur('1spe-math-second-degre'), true);
});

test('tous les générateurs du registre sont des fonctions', () => {
  for (const [id, gens] of Object.entries(REGISTRE)) {
    assert.ok(Array.isArray(gens) && gens.length > 0, `${id} : liste non vide`);
    for (const g of gens) assert.equal(typeof g, 'function', `${id} : générateur invalide`);
  }
});
