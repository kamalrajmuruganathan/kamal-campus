import { test } from 'node:test';
import assert from 'node:assert/strict';
import { quetesDuJour, quetesFaites } from './index.js';

test('quêtes : progrès borné [0,1] et fait quand atteint', () => {
  const q = quetesDuJour({ objectif: 50, xpJour: 25, activitesJour: 1 });
  assert.equal(q.length, 3);
  const obj = q.find((x) => x.id === 'objectif');
  assert.equal(obj.progres, 0.5);
  assert.equal(obj.fait, false);
});

test('quêtes toutes accomplies', () => {
  const q = quetesDuJour({ objectif: 50, xpJour: 80, activitesJour: 3 });
  assert.equal(quetesFaites(q), 3);
  assert.ok(q.every((x) => x.fait));
});

test('journée vide = aucune quête faite', () => {
  const q = quetesDuJour({ objectif: 50, xpJour: 0, activitesJour: 0 });
  assert.equal(quetesFaites(q), 0);
  assert.ok(q.every((x) => x.progres === 0));
});

test('valeurs par défaut robustes', () => {
  const q = quetesDuJour();
  assert.equal(q.length, 3);
  assert.equal(quetesFaites(q), 0);
});
