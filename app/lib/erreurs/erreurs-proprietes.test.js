import { test } from 'node:test';
import assert from 'node:assert/strict';
import { majErreurs, cleErreur, questionsAReviser, compteErreurs, MAX_ERREURS } from './index.js';

test('réserve d’erreurs : modèle indépendant sur 2 000 sessions tirées au hasard', () => {
  let graine = 11;
  const r = () => ((graine = (graine * 16807) % 2147483647) / 2147483647);
  let store = [];
  let modele = []; // clés, de la plus ancienne à la plus récente
  for (let i = 0; i < 2000; i += 1) {
    const qs = Array.from({ length: 1 + Math.floor(r() * 5) }, () => ({ enonce: `  Q${Math.floor(r() * 90)} ` }));
    const reps = qs.map(() => (r() < 0.15 ? undefined : { juste: r() < 0.6 }));
    store = majErreurs(store, qs, reps, 'maths');
    qs.forEach((q, k) => {
      const c = q.enonce.trim();
      if (!reps[k]) return;
      modele = modele.filter((x) => x !== c);
      if (reps[k].juste === false) modele.push(c);
    });
    modele = modele.slice(-MAX_ERREURS);
    assert.deepEqual(store.map((e) => e.cle), modele);
  }
});

test('clé = énoncé nettoyé ; énoncé vide ignoré ; entrées invalides sans erreur', () => {
  assert.equal(cleErreur('  A  '), 'A');
  assert.equal(cleErreur(undefined), '');
  assert.deepEqual(majErreurs(null, [{ enonce: '   ' }], [{ juste: false }]), []);
  assert.deepEqual(majErreurs(undefined, null, null), []);
  assert.deepEqual(questionsAReviser([{ question: null }, { question: { enonce: 'B' } }]), [{ enonce: 'B' }]);
  assert.equal(compteErreurs('x'), 0);
});
