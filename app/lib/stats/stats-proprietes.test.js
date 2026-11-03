import { test } from 'node:test';
import assert from 'node:assert/strict';
import { activiteParJour, jourDeSession, sessionsDuJour, intensite, joursActifs, moyenne, maitriseParMatiere, reculer } from './index.js';

function avecFuseau(tz, f) {
  const avant = process.env.TZ;
  process.env.TZ = tz;
  try { f(); } finally { if (avant === undefined) delete process.env.TZ; else process.env.TZ = avant; }
}

test('jour d’une session = jour LOCAL (Paris 0 h 30, Antilles 21 h), date seule gardée', () => {
  avecFuseau('Europe/Paris', () => {
    assert.equal(jourDeSession('2026-11-02T23:30:00.000Z'), '2026-11-03');
    assert.equal(jourDeSession('2026-10-13'), '2026-10-13');
  });
  avecFuseau('America/Martinique', () => {
    assert.equal(jourDeSession('2026-11-04T01:00:00.000Z'), '2026-11-03');
    assert.equal(jourDeSession('2026-10-13'), '2026-10-13'); // pas décalée à la veille
  });
  assert.equal(jourDeSession(null), null);
  assert.equal(jourDeSession('n’importe quoi'), null);
});

test('heatmap : une session faite à 0 h 30 (Paris) compte pour le bon jour', () => {
  avecFuseau('Europe/Paris', () => {
    const h = [{ date: '2026-11-02T23:30:00.000Z' }, { date: '2026-11-03T10:00:00.000Z' }, { date: '2026-11-01T22:59:00.000Z' }];
    assert.deepEqual(activiteParJour(h, '2026-11-03', 3), [
      { date: '2026-11-01', count: 1 }, // 23 h 59 à Paris le 1er
      { date: '2026-11-02', count: 0 },
      { date: '2026-11-03', count: 2 },
    ]);
    assert.equal(sessionsDuJour(h, '2026-11-03'), 2);
  });
  avecFuseau('America/Martinique', () => {
    // 21 h le 3 novembre aux Antilles = 1 h UTC le 4 : compté le 3.
    assert.equal(sessionsDuJour([{ date: '2026-11-04T01:00:00.000Z' }], '2026-11-03'), 1);
  });
});

test('activiteParJour : entrées abîmées ignorées, nbJours respecté, ordre chronologique', () => {
  const j = activiteParJour([null, {}, { date: 'x' }, { date: '2026-03-01' }], '2026-03-01', 3);
  assert.deepEqual(j.map((x) => x.date), ['2026-02-27', '2026-02-28', '2026-03-01']);
  assert.deepEqual(j.map((x) => x.count), [0, 0, 1]);
  assert.deepEqual(activiteParJour(null, '2026-03-01', 0), []);
  assert.equal(reculer('2028-03-01', 1), '2028-02-29');
  assert.equal(reculer('2026-12-31', -1), '2027-01-01');
});

test('intensité : 0 → 0, 1 → 1, 2 → 2, 3-4 → 3, 5 et plus → 4', () => {
  assert.deepEqual([-1, 0, 1, 2, 3, 4, 5, 50].map(intensite), [0, 0, 1, 2, 3, 3, 4, 4]);
});

test('moyenne, jours actifs, maîtrise par matière', () => {
  assert.equal(moyenne([]), 0);
  assert.equal(moyenne([0.5, 1, 0]), 0.5);
  assert.equal(joursActifs([{ count: 0 }, { count: 2 }, { count: 1 }]), 2);
  const m = maitriseParMatiere([
    { matiere: 'maths', score: 1 }, { matiere: 'maths', score: 0.5 }, { matiere: 'svt', score: '0.9' },
    { matiere: null, score: 1 }, null, { matiere: 'svt', score: 'abc' },
  ]);
  assert.deepEqual(m, [{ matiere: 'maths', moyenne: 0.75, nombre: 2 }, { matiere: 'svt', moyenne: 0.45, nombre: 2 }]);
});
