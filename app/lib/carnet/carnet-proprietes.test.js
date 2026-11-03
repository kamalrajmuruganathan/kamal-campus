import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  noter, ajouterJours, cleQcm, cleExo, aRevoir, resume, fusionnerCarnets, libelleJour, INTERVALLES, MAX_CARNET,
  noterMaitriseesDuJour, fusionnerJournauxMaitrisees, resultatsQcm, depuisAnciennesErreurs, parChapitre,
} from './index.js';

const echec = (cle) => ({ cle, juste: false, infos: { type: 'qcm' } });
const reussite = (cle) => ({ cle, juste: true });

test('carnet : intervalles 1 → 3 → 7 jours, maîtrisé à la 3e réussite due', () => {
  assert.deepEqual(INTERVALLES, [1, 3, 7]);
  let r = noter([], [echec('q:a')], '2026-12-30', 'T0');
  assert.equal(r.carnet[0].prochaine, '2026-12-31');
  r = noter(r.carnet, [reussite('q:a')], '2026-12-31', 'T1');
  assert.deepEqual([r.carnet[0].etape, r.carnet[0].prochaine, r.maitrisees], [1, '2027-01-03', 0]);
  r = noter(r.carnet, [reussite('q:a')], '2027-01-03', 'T2');
  assert.deepEqual([r.carnet[0].etape, r.carnet[0].prochaine], [2, '2027-01-10']);
  r = noter(r.carnet, [reussite('q:a')], '2027-01-10', 'T3');
  assert.deepEqual([r.carnet.length, r.maitrisees], [0, 1]);
});

test('carnet : une réussite en retard compte, et le délai suivant part du jour de la révision', () => {
  let r = noter([], [echec('q:a')], '2026-10-01');
  r = noter(r.carnet, [reussite('q:a')], '2026-10-20'); // 19 jours plus tard
  assert.equal(r.carnet[0].prochaine, '2026-10-23');
});

test('carnet : échec à n’importe quelle étape = retour au début (demain), échecs comptés', () => {
  for (let etape = 0; etape < 3; etape += 1) {
    const e = { cle: 'q:a', etape, prochaine: '2026-10-01', echecs: 2, ajoute: '2026-09-01', titre: 'Vieux titre' };
    const r = noter([e], [{ cle: 'q:a', juste: false, infos: { titre: 'Nouveau' } }], '2026-10-05');
    assert.deepEqual([r.carnet[0].etape, r.carnet[0].prochaine, r.carnet[0].echecs, r.carnet[0].ajoute, r.carnet[0].titre],
      [0, '2026-10-06', 3, '2026-09-01', 'Nouveau']);
    assert.equal(r.maitrisees, 0);
  }
});

test('carnet : réussite d’une question absente ou pas encore due → rien ne change', () => {
  const r = noter([], [reussite('q:b')], '2026-10-01');
  assert.deepEqual(r, { carnet: [], maitrisees: 0 });
  const e = { cle: 'q:a', etape: 1, prochaine: '2026-10-04' };
  assert.deepEqual(noter([e], [reussite('q:a')], '2026-10-03').carnet, [e]);
});

test('carnet : même question ratée puis réussie dans la même session → reste au début', () => {
  const r = noter([], [echec('q:a'), reussite('q:a')], '2026-10-01');
  assert.equal(r.carnet.length, 1);
  assert.equal(r.carnet[0].etape, 0);
});

test('carnet : entrées invalides ignorées, jamais d’exception', () => {
  assert.deepEqual(noter(null, null, '2026-10-01'), { carnet: [], maitrisees: 0 });
  const r = noter(undefined, [null, {}, { cle: '' , juste: false }, { cle: 'q:a', juste: 'oui' }, echec('q:b')], '2026-10-01');
  assert.deepEqual(r.carnet.map((e) => e.cle), ['q:b']);
});

test('carnet : plafonné à 300 entrées, les plus anciennes partent', () => {
  const res = Array.from({ length: 320 }, (_, i) => echec(`q:${i}`));
  const r = noter([], res, '2026-10-01');
  assert.equal(r.carnet.length, MAX_CARNET);
  assert.equal(r.carnet[0].cle, 'q:20');
  assert.equal(r.carnet.at(-1).cle, 'q:319');
});

test('carnet : simulation de 3 000 révisions → maîtrise exactement après 3 réussites dues consécutives', () => {
  let graine = 7;
  const r = () => ((graine = (graine * 16807) % 2147483647) / 2147483647);
  let carnet = [];
  let jour = '2026-01-01';
  let maitrisees = 0;
  const etat = new Map(); // modèle indépendant : cle → { reussites, prochaine }
  for (let i = 0; i < 3000; i += 1) {
    const cle = `q:${Math.floor(r() * 15)}`;
    const juste = r() < 0.7;
    const m = etat.get(cle);
    const res = noter(carnet, [{ cle, juste, infos: {} }], jour);
    carnet = res.carnet;
    maitrisees += res.maitrisees;
    if (!juste) etat.set(cle, { reussites: 0, prochaine: ajouterJours(jour, 1) });
    else if (m && m.prochaine <= jour) {
      if (m.reussites + 1 >= 3) { etat.delete(cle); assert.equal(res.maitrisees, 1); } else {
        etat.set(cle, { reussites: m.reussites + 1, prochaine: ajouterJours(jour, [1, 3, 7][m.reussites + 1]) });
      }
    }
    assert.deepEqual(new Set(carnet.map((e) => e.cle)), new Set(etat.keys()));
    for (const e of carnet) assert.equal(e.prochaine, etat.get(e.cle).prochaine);
    if (r() < 0.4) jour = ajouterJours(jour, 1 + Math.floor(r() * 4));
  }
  assert.ok(maitrisees > 50, `trop peu de maîtrises simulées (${maitrisees})`);
});

test('ajouterJours : bissextile, fin d’année, valeurs négatives', () => {
  assert.equal(ajouterJours('2028-02-28', 1), '2028-02-29');
  assert.equal(ajouterJours('2027-02-28', 1), '2027-03-01');
  assert.equal(ajouterJours('2027-01-01', -1), '2026-12-31');
  assert.equal(ajouterJours('2026-03-28', 2), '2026-03-30'); // heure d'été : sans effet (UTC)
});

test('clés : énoncé coupé à 160 caractères et nettoyé ; exercice = chapitre + id', () => {
  assert.equal(cleQcm('  Combien ?  '), 'q:Combien ?');
  assert.equal(cleQcm('x'.repeat(200)).length, 162);
  assert.equal(cleQcm(null), 'q:');
  assert.equal(cleExo('4e-maths', 0), 'e:4e-maths#0');
});

test('resultatsQcm : chapitre d’origine prioritaire, champs internes retirés de la question', () => {
  const qs = [{ enonce: 'A', _chap: 'c1', _titre: 'T1', _mat: 'maths' }, { enonce: 'B' }, { enonce: '' }];
  const r = resultatsQcm(qs, [{ juste: false }, { juste: true }, { juste: false }], { chapitreId: 'mix', titre: 'Bilan' });
  assert.equal(r.length, 2);
  assert.deepEqual(r[0].infos, { type: 'qcm', question: { enonce: 'A' }, chapitreId: 'c1', titre: 'T1', matiere: 'maths' });
  assert.equal(r[1].infos.chapitreId, 'mix');
});

test('aRevoir / resume / parChapitre / libelleJour', () => {
  const c = [
    { cle: 'q:1', type: 'qcm', prochaine: '2026-10-03', chapitreId: 'a', titre: 'A' },
    { cle: 'e:a#1', type: 'exo', prochaine: '2026-10-01', chapitreId: 'a', titre: 'A' },
    { cle: 'q:2', type: 'qcm', prochaine: '2026-10-09', chapitreId: 'b', titre: 'B' },
    null,
  ];
  assert.deepEqual(aRevoir(c, '2026-10-03').map((e) => e.cle), ['e:a#1', 'q:1']);
  assert.deepEqual(resume(c, '2026-10-03'), { total: 3, aujourdhui: 2, qcm: 1, exos: 1, plusTard: 1, prochaineDate: '2026-10-09' });
  assert.deepEqual(parChapitre(c, '2026-10-03').map((g) => [g.chapitreId, g.total, g.dus]), [['a', 2, 2], ['b', 1, 0]]);
  assert.equal(libelleJour('2026-10-03', '2026-10-03'), "aujourd'hui");
  assert.equal(libelleJour('2026-09-30', '2026-10-03'), "aujourd'hui"); // en retard
  assert.equal(libelleJour('2026-11-01', '2026-10-31'), 'demain');
  assert.equal(libelleJour('2027-01-05', '2026-12-31'), 'le 05/01');
  assert.equal(libelleJour(null, '2026-10-03'), '');
});

test('fusionnerCarnets : commutative, idempotente, la mise à jour la plus récente gagne', () => {
  const a = [{ cle: 'q:1', etape: 2, maj: '2026-10-05T10:00:00Z' }, { cle: 'q:2', etape: 0, maj: '2026-10-01T10:00:00Z' }];
  const b = [{ cle: 'q:1', etape: 0, maj: '2026-10-06T10:00:00Z' }, { cle: 'q:3', etape: 1, maj: '2026-10-02T10:00:00Z' }];
  const f = fusionnerCarnets(a, b);
  assert.deepEqual(f, fusionnerCarnets(b, a));
  assert.deepEqual(fusionnerCarnets(f, f), f);
  assert.deepEqual(f.map((e) => [e.cle, e.etape]), [['q:2', 0], ['q:3', 1], ['q:1', 0]]); // du plus ancien au plus récent
  // Même date de mise à jour, contenus différents : choix fixe quel que soit l'ordre.
  const x = [{ cle: 'q:9', etape: 1, maj: 'T' }];
  const y = [{ cle: 'q:9', etape: 2, maj: 'T' }];
  assert.deepEqual(fusionnerCarnets(x, y), fusionnerCarnets(y, x));
  assert.deepEqual(fusionnerCarnets(null, undefined), []);
  assert.deepEqual(fusionnerCarnets([null, { etape: 1 }], 'abc'), []);
});

test('reprise de l’ancienne réserve : questions sans énoncé ignorées', () => {
  const r = depuisAnciennesErreurs([{ question: { enonce: 'Q' }, matiere: 'maths' }, { question: {} }, null], '2026-10-01');
  assert.equal(r.length, 1);
  assert.deepEqual([r[0].cle, r[0].prochaine, r[0].etape, r[0].matiere], ['q:Q', '2026-10-01', 0, 'maths']);
});

test('journal des maîtrisées : 60 jours gardés, n ≤ 0 ignoré, fusion = max par jour', () => {
  let j = noterMaitriseesDuJour(null, '2026-10-01', 2);
  j = noterMaitriseesDuJour(j, '2026-10-01', 1);
  assert.deepEqual(j, { '2026-10-01': 3 });
  assert.equal(noterMaitriseesDuJour(j, '2026-10-02', 0), j);
  const loin = noterMaitriseesDuJour(j, '2026-11-30', 1); // 60 jours après : le 1er octobre est oublié
  assert.deepEqual(loin, { '2026-11-30': 1 });
  const proche = noterMaitriseesDuJour(j, '2026-11-29', 1);
  assert.deepEqual(proche, { '2026-10-01': 3, '2026-11-29': 1 });
  assert.deepEqual(fusionnerJournauxMaitrisees({ a: 2, b: 1 }, { b: 3, c: '2', d: -1 }), { a: 2, b: 3, c: 2 });
  assert.deepEqual(fusionnerJournauxMaitrisees([1], null), {});
});
