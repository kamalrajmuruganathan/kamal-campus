import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  noter, resultatsQcm, aRevoir, resume, parChapitre, ajouterJours, cleExo,
  depuisAnciennesErreurs, fusionnerCarnets, libelleJour,
} from './index.js';

const J = '2026-10-13';

test('ajouterJours : passage de mois et d’année', () => {
  assert.equal(ajouterJours('2026-10-31', 1), '2026-11-01');
  assert.equal(ajouterJours('2026-12-30', 3), '2027-01-02');
});

test('une erreur revient demain, puis dans 3 jours, puis dans 7 jours, puis est maîtrisée', () => {
  const cle = cleExo('4e-math', 25);
  let { carnet } = noter([], [{ cle, juste: false, infos: { type: 'exo', exoId: 25, chapitreId: '4e-math' } }], J);
  assert.equal(carnet[0].prochaine, '2026-10-14');
  assert.equal(aRevoir(carnet, J).length, 0); // pas aujourd'hui
  // Réussie avant la date : ne compte pas.
  ({ carnet } = noter(carnet, [{ cle, juste: true }], J));
  assert.equal(carnet[0].etape, 0);
  // Le lendemain : réussie → dans 3 jours.
  ({ carnet } = noter(carnet, [{ cle, juste: true }], '2026-10-14'));
  assert.equal(carnet[0].etape, 1);
  assert.equal(carnet[0].prochaine, '2026-10-17');
  ({ carnet } = noter(carnet, [{ cle, juste: true }], '2026-10-17'));
  assert.equal(carnet[0].prochaine, '2026-10-24');
  const r = noter(carnet, [{ cle, juste: true }], '2026-10-25');
  assert.equal(r.carnet.length, 0);
  assert.equal(r.maitrisees, 1);
});

test('un nouvel échec remet au début', () => {
  const cle = cleExo('c', 1);
  let { carnet } = noter([], [{ cle, juste: false }], J);
  ({ carnet } = noter(carnet, [{ cle, juste: true }], '2026-10-14'));
  ({ carnet } = noter(carnet, [{ cle, juste: false }], '2026-10-15'));
  assert.equal(carnet[0].etape, 0);
  assert.equal(carnet[0].prochaine, '2026-10-16');
  assert.equal(carnet[0].echecs, 2);
  assert.equal(carnet[0].ajoute, J);
});

test('QCM : questions ratées, chapitre d’origine, questions sans réponse ignorées', () => {
  const qs = [{ enonce: 'A ?', choix: ['1', '2'], reponse: 0 }, { enonce: 'B ?', _chap: 'x', _titre: 'X', _mat: 'svt' }, { enonce: 'C ?' }];
  const lignes = resultatsQcm(qs, [{ juste: false }, { juste: false }, null], { chapitreId: 'c1', titre: 'Chap 1', matiere: 'maths' });
  assert.equal(lignes.length, 2);
  assert.equal(lignes[0].infos.chapitreId, 'c1');
  assert.equal(lignes[1].infos.chapitreId, 'x');
  assert.equal(lignes[1].infos.matiere, 'svt');
  assert.equal('_chap' in lignes[1].infos.question, false);
  const { carnet } = noter([], lignes, J);
  const res = resume(carnet, '2026-10-14');
  assert.deepEqual([res.total, res.aujourdhui, res.qcm, res.exos], [2, 2, 2, 0]);
  assert.equal(resume(carnet, J).prochaineDate, '2026-10-14');
  assert.equal(parChapitre(carnet, '2026-10-14').length, 2);
});

test('reprise de l’ancienne réserve et fusion entre appareils', () => {
  const anc = depuisAnciennesErreurs([{ cle: 'A ?', matiere: 'maths', question: { enonce: 'A ?' } }], J);
  assert.equal(aRevoir(anc, J).length, 1);
  const a = [{ cle: 'k', etape: 0, maj: '2026-10-13T08:00:00Z' }];
  const b = [{ cle: 'k', etape: 1, maj: '2026-10-14T08:00:00Z' }, { cle: 'z', maj: '2026-10-01T00:00:00Z' }];
  const f = fusionnerCarnets(a, b);
  assert.equal(f.length, 2);
  assert.equal(f.find((e) => e.cle === 'k').etape, 1);
  assert.equal(libelleJour('2026-10-14', J), 'demain');
  assert.equal(libelleJour('2026-10-20', J), 'le 20/10');
});
