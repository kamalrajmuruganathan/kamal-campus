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

import { noterMaitriseesDuJour, fusionnerJournauxMaitrisees } from './index.js';

test('journal des erreurs maîtrisées : ajout, oubli des vieux jours, fusion', () => {
  let j = noterMaitriseesDuJour(undefined, '2026-10-18', 0);
  assert.deepEqual(j, {});
  j = noterMaitriseesDuJour(j, '2026-10-18', 2);
  j = noterMaitriseesDuJour(j, '2026-10-18', 1);
  assert.deepEqual(j, { '2026-10-18': 3 });
  j = noterMaitriseesDuJour({ '2026-07-01': 4, '2026-10-01': 1 }, '2026-10-18', 1);
  assert.deepEqual(j, { '2026-10-01': 1, '2026-10-18': 1 });
  assert.deepEqual(
    fusionnerJournauxMaitrisees({ '2026-10-17': 2, '2026-10-18': 1 }, { '2026-10-18': 3 }),
    { '2026-10-17': 2, '2026-10-18': 3 },
  );
  assert.deepEqual(fusionnerJournauxMaitrisees(null, []), {});
});

import { marquerOrigine } from './index.js';

test('marquerOrigine : le carnet range la question dans son chapitre', () => {
  const qs = marquerOrigine([{ enonce: 'Q1' }, { enonce: 'Q2', _chap: 'autre' }], { chapitreId: 'c1', titre: 'Chap 1', matiere: 'maths' });
  assert.equal(qs[0]._chap, 'c1');
  assert.equal(qs[1]._chap, 'autre');
  const r = resultatsQcm(qs, [{ juste: false }, { juste: false }], { titre: 'QCM bilan' });
  assert.equal(r[0].infos.chapitreId, 'c1');
  assert.equal(r[0].infos.titre, 'Chap 1');
  assert.equal(r[0].infos.question._chap, undefined);
  assert.deepEqual(marquerOrigine(null), []);
});
