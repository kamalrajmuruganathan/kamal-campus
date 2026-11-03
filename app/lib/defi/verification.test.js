/**
 * Défi à distance : codes robustes (aller-retour, codes tapés de travers) et
 * promesse centrale — même graine ⇒ exactement les mêmes questions pour les deux joueurs.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  rngGraine, graineAleatoire, encoderDefi, decoderDefi, encoderResultat, decoderResultat, verdict, N_MAX_DEFI,
} from './index.js';
import { REGISTRE, genererQuestions } from '../generateurs/index.js';

test('aller-retour d’un défi pour des graines et chapitres variés', () => {
  const rand = rngGraine(2026);
  const ids = Object.keys(REGISTRE);
  for (let i = 0; i < 2000; i++) {
    const d = { chapId: ids[i % ids.length], graine: Math.floor(rand() * 1e9) + 1, n: 1 + (i % N_MAX_DEFI) };
    assert.deepEqual(decoderDefi(encoderDefi(d)), d);
    assert.deepEqual(decoderDefi(`  ${encoderDefi(d)}\n`), d, 'espaces autour du code collé');
  }
});

test('graineAleatoire : entier entre 1 et 10⁹', () => {
  for (let i = 0; i < 1000; i++) {
    const g = graineAleatoire();
    assert.ok(Number.isInteger(g) && g >= 1 && g <= 1e9);
  }
});

test('decoderDefi : refuse les codes impossibles (n = 0, négatif, énorme, illisible)', () => {
  for (const code of [
    'D1~abc~0~4e-math-triangles', // aucune question
    'D1~abc~-5~4e-math-triangles',
    'D1~abc~99999~4e-math-triangles', // bloquerait l'appli
    `D1~abc~${N_MAX_DEFI + 1}~4e-math-triangles`,
    'D1~abc~10abc~4e-math-triangles',
    'D1~ab$c~10~4e-math-triangles',
    'D1~~10~4e-math-triangles',
    'D1~abc~10~',
    'D1~abc~10',
    'S1~abc~10~4',
    null, 42, {},
  ]) assert.equal(decoderDefi(code), null, String(code));
  assert.deepEqual(decoderDefi('D1~a~10~x~y'), { chapId: 'x~y', graine: 10, n: 10 });
});

test('decoderResultat : aller-retour et refus des scores impossibles', () => {
  for (let s = 0; s <= 10; s++) assert.deepEqual(decoderResultat(encoderResultat({ graine: 123456, score: s, n: 10 })), { graine: 123456, score: s, n: 10 });
  for (const code of ['S1~abc~11~10', 'S1~abc~-1~10', 'S1~abc~5~0', 'S1~abc~5~10~x', 'S1~abc~5x~10', 'D1~abc~5~10', '', undefined]) {
    assert.equal(decoderResultat(code), null, String(code));
  }
});

test('verdict : symétrique', () => {
  for (let a = 0; a <= 10; a++) {
    for (let b = 0; b <= 10; b++) {
      const v = verdict(a, b); const w = verdict(b, a);
      assert.equal(v === 'egalite', w === 'egalite');
      if (v === 'gagne') assert.equal(w, 'perd');
    }
  }
});

test('même graine ⇒ mêmes questions pour les deux joueurs, sur chaque chapitre à générateur', () => {
  for (const id of Object.keys(REGISTRE)) {
    for (const graine of [1, 42, 999999937]) {
      const code = encoderDefi({ chapId: id, graine, n: 10 });
      const d = decoderDefi(code);
      const moi = genererQuestions(id, 10, rngGraine(graine));
      const ami = genererQuestions(d.chapId, d.n, rngGraine(d.graine));
      assert.deepEqual(ami, moi, `${id} / graine ${graine}`);
      assert.equal(moi.length, 10);
    }
  }
});

test('rngGraine : graines différentes ⇒ suites différentes, valeurs dans [0, 1[', () => {
  const premiers = new Set();
  for (let g = 1; g <= 500; g++) {
    const r = rngGraine(g);
    const x = r();
    assert.ok(x >= 0 && x < 1);
    premiers.add(x);
  }
  assert.equal(premiers.size, 500);
  assert.equal(rngGraine('12')(), rngGraine(12)());
});
