import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estRelu, mentionRelecture, dateEnLettres } from './index.js';

test('brouillon (état actuel des fiches) : pas relu', () => {
  assert.equal(estRelu({ statut: 'brouillon', reluPar: null }), false);
  assert.equal(mentionRelecture({ statut: 'brouillon', reluPar: null }), null);
  assert.equal(estRelu(null), false);
});

test('statut relu sans nom : pas relu (le nom est obligatoire)', () => {
  assert.equal(estRelu({ statut: 'relu', reluPar: null }), false);
  assert.equal(estRelu({ statut: 'relu', reluPar: 'null' }), false);
  assert.equal(estRelu({ statut: 'relu', reluPar: '  ' }), false);
});

test('nom sans statut relu : pas relu', () => {
  assert.equal(estRelu({ statut: 'brouillon', reluPar: 'Mme Martin' }), false);
});

test('relu par un professeur', () => {
  const c = { statut: 'relu', reluPar: 'Mme Martin, professeure de mathématiques', reluLe: '2026-11-02' };
  assert.equal(estRelu(c), true);
  assert.equal(mentionRelecture(c), '✅ Relu par Mme Martin, professeure de mathématiques, le 2 novembre 2026.');
  assert.equal(mentionRelecture({ ...c, reluLe: '2026-12-01' }), '✅ Relu par Mme Martin, professeure de mathématiques, le 1er décembre 2026.');
  assert.equal(mentionRelecture({ ...c, reluLe: null }), '✅ Relu par Mme Martin, professeure de mathématiques.');
  assert.equal(mentionRelecture({ ...c, reluPar: 'M. Durand.' , reluLe: 'bientôt' }), '✅ Relu par M. Durand.');
  assert.equal(estRelu({ statut: 'publie', reluPar: 'M. Durand' }), true);
});

test('dateEnLettres', () => {
  assert.equal(dateEnLettres('2027-08-15'), '15 août 2027');
  assert.equal(dateEnLettres('2027-13-01'), null);
  assert.equal(dateEnLettres('15/08/2027'), null);
});
