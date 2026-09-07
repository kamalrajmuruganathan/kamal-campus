import { test } from 'node:test';
import assert from 'node:assert/strict';
import { majErreurs, questionsAReviser, compteErreurs, cleErreur, MAX_ERREURS } from './index.js';

const q = (enonce) => ({ enonce, choix: ['a', 'b', 'c', 'd'], reponse: 0 });

test('une question ratée entre dans la réserve, une réussie n’y entre pas', () => {
  const store = majErreurs([], [q('2+2 ?'), q('3+3 ?')], [{ juste: false }, { juste: true }], 'maths');
  assert.equal(compteErreurs(store), 1);
  assert.equal(store[0].question.enonce, '2+2 ?');
  assert.equal(store[0].matiere, 'maths');
});

test('rejouer et réussir une erreur la retire — même sans matière (clé = énoncé)', () => {
  let store = majErreurs([], [q('2+2 ?')], [{ juste: false }], 'maths');
  assert.equal(compteErreurs(store), 1);
  // session de révision des erreurs : matiere = null, mais l'énoncé correspond
  store = majErreurs(store, [q('2+2 ?')], [{ juste: true }], null);
  assert.equal(compteErreurs(store), 0);
});

test('une question sans réponse ne change rien', () => {
  const base = majErreurs([], [q('x ?')], [{ juste: false }], null);
  const apres = majErreurs(base, [q('x ?')], [null], null);
  assert.equal(compteErreurs(apres), 1);
});

test('pas de doublon : rater deux fois la même question ne l’ajoute qu’une fois', () => {
  let store = majErreurs([], [q('même ?')], [{ juste: false }], null);
  store = majErreurs(store, [q('même ?')], [{ juste: false }], null);
  assert.equal(compteErreurs(store), 1);
});

test('la réserve est plafonnée aux plus récentes', () => {
  let store = [];
  for (let i = 0; i < MAX_ERREURS + 10; i += 1) {
    store = majErreurs(store, [q('question ' + i)], [{ juste: false }], null);
  }
  assert.equal(compteErreurs(store), MAX_ERREURS);
  // la toute dernière ajoutée doit être présente, la toute première évincée
  const cles = store.map((e) => e.cle);
  assert.ok(cles.includes(cleErreur('question ' + (MAX_ERREURS + 9))));
  assert.ok(!cles.includes(cleErreur('question 0')));
});

test('questionsAReviser renvoie les objets question', () => {
  const store = majErreurs([], [q('a ?'), q('b ?')], [{ juste: false }, { juste: false }], null);
  const qs = questionsAReviser(store);
  assert.equal(qs.length, 2);
  assert.ok(qs[0].choix && typeof qs[0].reponse === 'number');
});
