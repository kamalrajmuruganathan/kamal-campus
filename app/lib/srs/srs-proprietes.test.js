import { test } from 'node:test';
import assert from 'node:assert/strict';
import { planifier, etatInitial, estDue, clesDues, ajouterJours, comparerDates } from './index.js';

test('SRS : suite exacte des intervalles en réussissant toujours (1, 3, 8, 22, 62 jours)', () => {
  // facilité 2,5 → 2,6 → 2,7 → 2,8 (plafond) ; 3 × 2,7 = 8,1 → 8 ; 8 × 2,8 = 22,4 → 22 ; 22 × 2,8 = 61,6 → 62.
  let e = etatInitial('2026-10-01');
  const jours = [];
  let j = '2026-10-01';
  for (let i = 0; i < 5; i += 1) {
    e = planifier(e, true, j);
    jours.push(e.interval);
    j = e.due;
  }
  assert.deepEqual(jours, [1, 3, 8, 22, 62]);
  assert.equal(e.ease, 2.8);
  assert.equal(e.rep, 5);
});

test('SRS : échec → lendemain, rep à 0, facilité −0,2 (jamais sous 1,3)', () => {
  let e = { rep: 4, interval: 22, ease: 2.8, due: '2026-10-01' };
  e = planifier(e, false, '2026-10-01');
  assert.deepEqual(e, { rep: 0, interval: 1, ease: 2.6, due: '2026-10-02' });
  for (let i = 0; i < 20; i += 1) e = planifier(e, false, '2026-10-01');
  assert.equal(e.ease, 1.3);
  // Après un échec, la réussite suivante repart à J+1 puis J+3.
  e = planifier(e, true, '2026-10-02');
  assert.equal(e.interval, 1);
  e = planifier(e, true, '2026-10-03');
  assert.equal(e.interval, 3);
});

test('SRS : intervalle plafonné à 10 ans, état abîmé accepté', () => {
  const e = planifier({ rep: 50, interval: 3000, ease: 2.8, due: '2026-01-01' }, true, '2026-01-01');
  assert.equal(e.interval, 3650);
  const x = planifier({ rep: 'x', interval: null, ease: 'abc' }, true, '2026-01-01');
  assert.deepEqual(x, { rep: 1, interval: 1, ease: 2.6, due: '2026-01-02' });
  assert.deepEqual(planifier(null, false, '2026-02-28'), { rep: 0, interval: 1, ease: 2.3, due: '2026-03-01' });
});

test('SRS : 5 000 jugements au hasard → invariants (facilité bornée, échéance future, intervalle ≥ 1)', () => {
  let graine = 99;
  const r = () => ((graine = (graine * 48271) % 2147483647) / 2147483647);
  let e;
  let j = '2026-01-01';
  for (let i = 0; i < 5000; i += 1) {
    const su = r() < 0.75;
    const avant = e;
    e = planifier(e, su, j);
    assert.ok(e.ease >= 1.3 && e.ease <= 2.8);
    assert.ok(e.interval >= 1 && e.interval <= 3650 && Number.isInteger(e.interval));
    assert.ok(comparerDates(e.due, j) > 0);
    assert.equal(e.due, ajouterJours(j, e.interval));
    if (su && avant && avant.rep >= 2) assert.ok(e.interval >= avant.interval, 'une réussite n’avance jamais l’échéance');
    if (!su) assert.equal(e.rep, 0);
    if (r() < 0.5) j = ajouterJours(j, 1);
  }
});

test('estDue et clesDues : retard d’abord, jamais vues en dernier, dates futures exclues', () => {
  const etats = { a: { due: '2026-10-05' }, b: { due: '2026-10-01' }, c: { due: '2026-10-09' } };
  assert.equal(estDue(undefined, '2026-10-05'), true);
  assert.equal(estDue(etats.a, '2026-10-05'), true);
  assert.equal(estDue(etats.c, '2026-10-05'), false);
  assert.deepEqual(clesDues(etats, ['nouvelle', 'a', 'c', 'b'], '2026-10-05'), ['b', 'a', 'nouvelle']);
  assert.deepEqual(clesDues(null, [], '2026-10-05'), []);
});
