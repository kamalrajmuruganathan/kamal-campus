import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  rngGraine, encoderDefi, decoderDefi, encoderResultat, decoderResultat, verdict,
} from './index.js';

test('rngGraine est déterministe et dépend de la graine', () => {
  const a = rngGraine(42); const b = rngGraine(42); const c = rngGraine(43);
  const sa = [a(), a(), a()]; const sb = [b(), b(), b()]; const sc = [c(), c(), c()];
  assert.deepEqual(sa, sb);
  assert.notDeepEqual(sa, sc);
  assert.ok(sa.every((x) => x >= 0 && x < 1));
});

test('encoder/décoder un défi (aller-retour)', () => {
  const d = { chapId: '4e-math-triangles', graine: 123456, n: 10 };
  const code = encoderDefi(d);
  assert.equal(decoderDefi(code).chapId, d.chapId);
  assert.equal(decoderDefi(code).graine, d.graine);
  assert.equal(decoderDefi(code).n, d.n);
});

test('decoderDefi rejette un code invalide', () => {
  assert.equal(decoderDefi('nawak'), null);
  assert.equal(decoderDefi('X9~abc~10~x'), null);
  assert.equal(decoderDefi(''), null);
});

test('encoder/décoder un résultat', () => {
  const code = encoderResultat({ graine: 999, score: 8, n: 10 });
  assert.deepEqual(decoderResultat(code), { graine: 999, score: 8, n: 10 });
  assert.equal(decoderResultat('bad'), null);
});

test('verdict compare les scores', () => {
  assert.equal(verdict(8, 5), 'gagne');
  assert.equal(verdict(3, 7), 'perd');
  assert.equal(verdict(6, 6), 'egalite');
});
