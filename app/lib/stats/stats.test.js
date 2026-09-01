import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  reculer, activiteParJour, intensite, joursActifs, moyenne, maitriseParMatiere,
} from './index.js';
import { mascotteNiveau, progressionEtape } from '../mascotte/index.js';

test('reculer soustrait des jours (avec passage de mois)', () => {
  assert.equal(reculer('2026-03-02', 3), '2026-02-27');
  assert.equal(reculer('2026-01-01', 1), '2025-12-31');
});

test('activiteParJour couvre nbJours et compte les sessions', () => {
  const h = [
    { date: '2026-02-10T09:00:00Z' }, { date: '2026-02-10T18:00:00Z' },
    { date: '2026-02-08T10:00:00Z' },
  ];
  const j = activiteParJour(h, '2026-02-10', 7);
  assert.equal(j.length, 7);
  assert.equal(j[j.length - 1].date, '2026-02-10');
  assert.equal(j[j.length - 1].count, 2);
  assert.equal(j.find((x) => x.date === '2026-02-08').count, 1);
  assert.equal(j.find((x) => x.date === '2026-02-09').count, 0);
});

test('intensite : buckets 0..4', () => {
  assert.deepEqual([0, 1, 2, 3, 5].map(intensite), [0, 1, 2, 3, 4]);
});

test('joursActifs et moyenne', () => {
  assert.equal(joursActifs([{ count: 0 }, { count: 2 }, { count: 1 }]), 2);
  assert.equal(moyenne([0.5, 1, 0]), 0.5);
  assert.equal(moyenne([]), 0);
});

test('maitriseParMatiere regroupe et trie', () => {
  const r = maitriseParMatiere([
    { matiere: 'maths', score: 1 }, { matiere: 'maths', score: 0.5 },
    { matiere: 'svt', score: 0.2 },
  ]);
  assert.equal(r[0].matiere, 'maths');
  assert.equal(r[0].moyenne, 0.75);
  assert.equal(r[0].nombre, 2);
  assert.equal(r[1].matiere, 'svt');
});

test('mascotte évolue avec le niveau', () => {
  assert.equal(mascotteNiveau(1).nom, 'Pousse');
  assert.equal(mascotteNiveau(4).nom, 'Jeune plant');
  assert.equal(mascotteNiveau(20).nom, 'Légende');
  assert.ok(progressionEtape(1) >= 0 && progressionEtape(1) <= 1);
  assert.equal(progressionEtape(99), 1);
});
