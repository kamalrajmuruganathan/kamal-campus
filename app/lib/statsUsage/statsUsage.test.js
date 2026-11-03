import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evenementValide, detailValide, evenementsPourRoute } from './index.js';

test('événements autorisés seulement', () => {
  assert.ok(evenementValide('visite'));
  assert.ok(evenementValide('ecran'));
  assert.ok(!evenementValide('email'));
  assert.ok(!evenementValide(''));
});

test('détail : lettres, chiffres, tirets, 80 caractères au plus', () => {
  assert.ok(detailValide(''));
  assert.ok(detailValide('quatrieme-maths-racine-carree'));
  assert.ok(!detailValide('a b'));
  assert.ok(!detailValide("x'; drop table"));
  assert.ok(!detailValide('é'));
  assert.ok(!detailValide('a'.repeat(81)));
  assert.ok(!detailValide(null));
});

test('écran simple : seulement son nom', () => {
  assert.deepEqual(evenementsPourRoute({ name: 'Qcm', params: { questions: [] } }), [{ evenement: 'ecran', detail: 'Qcm' }]);
});

test('chapitre : nom de l’écran et identifiant du chapitre', () => {
  assert.deepEqual(evenementsPourRoute({ name: 'Chapitre', params: { chapitreId: 'quatrieme-maths-racine-carree' } }), [
    { evenement: 'ecran', detail: 'Chapitre' },
    { evenement: 'chapitre', detail: 'quatrieme-maths-racine-carree' },
  ]);
});

test('jamais de donnée suspecte ni de plantage', () => {
  assert.deepEqual(evenementsPourRoute(null), []);
  assert.deepEqual(evenementsPourRoute({}), []);
  assert.deepEqual(evenementsPourRoute({ name: 'Chapitre', params: { chapitreId: 'a b' } }), [{ evenement: 'ecran', detail: 'Chapitre' }]);
});
