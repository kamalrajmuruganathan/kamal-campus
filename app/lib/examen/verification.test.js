/**
 * Examen sur mesure : composition (nombres, doublons, petits chapitres) et notation
 * (barème, note /20 au demi-point vérifiée à la main, chapitres à revoir).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  composerExamen, noterExamen, arrondiDemi, formaterNote, melangerChoix, creerAlea, descriptionFormat, FORMATS,
  POINTS_QCM, POINTS_EXO,
} from './composer.js';
import { noter, appreciation } from './index.js';

const qcm = (id, i, extra = {}) => ({ enonce: `${id} question ${i}`, choix: ['a', 'b', 'c', 'd'], reponse: i % 4, explication: 'Car.', ...extra });
const exo = (id, i) => ({ id: i + 1, enonce: `${id} exercice ${i}`, reponse: String(10 + i), corrige: ['calcul'] });
const chap = (id, n, m = 0) => ({
  id, matiere: 'maths',
  questionsQcm: Array.from({ length: n }, (_, i) => qcm(id, i)),
  exercicesAuto: Array.from({ length: m }, (_, i) => exo(id, i)),
});

/** Copie « parfaite » : bonne réponse partout. */
const parfaite = (items) => items.map((it) => (it.type === 'qcm' ? { choisi: it.question.reponse } : { saisie: it.exercice.reponse }));

test('notes au demi-point, vérifiées à la main (8 QCM + 2 exercices = 12 points)', () => {
  const items = composerExamen({ chapitres: [chap('A', 20, 5)], nbQcm: 8, nbExos: 2, graine: 1 });
  assert.equal(items.reduce((s, it) => s + it.points, 0), 12);
  const cas = [
    // [QCM justes, exercices justes, note attendue]
    [0, 0, 0], [8, 2, 20], [7, 0, 11.5], // 7/12 × 20 = 11,67 → 11,5
    [5, 0, 8.5], // 5/12 × 20 = 8,33 → 8,5
    [4, 1, 10], // 6/12 × 20 = 10
    [1, 0, 1.5], // 1/12 × 20 = 1,67 → 1,5
    [8, 1, 16.5], // 10/12 × 20 = 16,67 → 16,5
    [3, 0, 5], // 3/12 × 20 = 5
  ];
  for (const [nq, ne, attendu] of cas) {
    let q = 0; let e = 0;
    const reps = items.map((it) => {
      if (it.type === 'qcm') { q += 1; return { choisi: q <= nq ? it.question.reponse : (it.question.reponse + 1) % 4 }; }
      e += 1; return { saisie: e <= ne ? it.exercice.reponse : '999' };
    });
    const r = noterExamen(items, reps);
    assert.equal(r.note20, attendu, `${nq} QCM + ${ne} exos`);
    assert.equal(r.points, nq + 2 * ne);
    assert.equal(r.total, 12);
  }
});

test('arrondiDemi : au demi-point le plus proche, milieu vers le haut', () => {
  assert.equal(arrondiDemi(12.24), 12);
  assert.equal(arrondiDemi(12.25), 12.5);
  assert.equal(arrondiDemi(12.74), 12.5);
  assert.equal(arrondiDemi(12.75), 13);
  assert.equal(arrondiDemi(16.666666), 16.5);
  assert.equal(arrondiDemi('abc'), 0);
  assert.equal(arrondiDemi(undefined), 0);
  assert.equal(formaterNote(13.333), '13,5');
  assert.equal(formaterNote(20), '20');
  assert.equal(formaterNote(0.2), '0');
  assert.ok(!formaterNote(7.5).includes('.'));
});

test('noterExamen : pourcentage, appréciation, sans réponse comptées', () => {
  const items = composerExamen({ chapitres: [chap('A', 20, 0)], nbQcm: 10, nbExos: 0, graine: 3 });
  const reps = items.map((it, i) => (i < 6 ? { choisi: it.question.reponse } : i < 8 ? { choisi: (it.question.reponse + 1) % 4 } : null));
  const r = noterExamen(items, reps);
  assert.equal(r.note20, 12);
  assert.equal(r.pourcent, 60);
  assert.equal(r.appreciation, 'Bien');
  assert.equal(r.sansReponse, 2);
  assert.equal(r.details.filter((d) => d.juste).length, 6);
});

test('noterExamen : chapitres à revoir (seuil 60 %, exactement 60 % n’est pas à revoir)', () => {
  const items = [
    ...Array.from({ length: 5 }, (_, i) => ({ type: 'qcm', chapitreId: 'A', points: 1, question: qcm('A', i) })),
    ...Array.from({ length: 5 }, (_, i) => ({ type: 'qcm', chapitreId: 'B', points: 1, question: qcm('B', i) })),
    ...Array.from({ length: 5 }, (_, i) => ({ type: 'qcm', chapitreId: 'C', points: 1, question: qcm('C', i) })),
  ];
  // A : 3/5 = 60 % ; B : 1/5 = 20 % ; C : 2/5 = 40 %.
  const justes = { A: 3, B: 1, C: 2 };
  const vu = { A: 0, B: 0, C: 0 };
  const reps = items.map((it) => {
    vu[it.chapitreId] += 1;
    return { choisi: vu[it.chapitreId] <= justes[it.chapitreId] ? it.question.reponse : (it.question.reponse + 1) % 4 };
  });
  const r = noterExamen(items, reps);
  assert.deepEqual(r.aRevoir, ['B', 'C']);
  assert.deepEqual(r.parChapitre.A, { juste: 3, total: 5 });
  assert.equal(r.note20, 8); // 6/15 × 20 = 8
});

test('noterExamen : entrées vides ou abîmées sans exception', () => {
  assert.equal(noterExamen([], []).note20, 0);
  assert.equal(noterExamen(null, null).total, 0);
  const items = composerExamen({ chapitres: [chap('A', 4, 0)], nbQcm: 4, nbExos: 0, graine: 1 });
  const r = noterExamen(items, [{ choisi: 'a' }, { choisi: 1.5 }, {}, undefined]);
  assert.equal(r.points, 0);
  assert.equal(r.sansReponse, 4);
});

test('composerExamen : chapitre avec peu de questions → on prend tout et on complète ailleurs', () => {
  for (let g = 0; g < 30; g++) {
    const items = composerExamen({ chapitres: [chap('A', 2, 0), chap('B', 30, 0)], nbQcm: 12, nbExos: 0, graine: g });
    assert.equal(items.length, 12);
    assert.equal(items.filter((i) => i.chapitreId === 'A').length, 2);
    assert.equal(items.filter((i) => i.chapitreId === 'B').length, 10);
  }
});

test('composerExamen : pas assez de questions en tout → toutes, sans doublon', () => {
  const items = composerExamen({ chapitres: [chap('A', 3, 1), chap('B', 2, 0)], nbQcm: 20, nbExos: 8, graine: 4 });
  assert.equal(items.length, 6);
  assert.equal(items.filter((i) => i.type === 'exo').length, 1);
});

test('composerExamen : nombres non entiers ou négatifs', () => {
  const ch = [chap('A', 30, 10)];
  assert.equal(composerExamen({ chapitres: ch, nbQcm: 8.9, nbExos: 2.2, graine: 1 }).length, 10);
  assert.equal(composerExamen({ chapitres: ch, nbQcm: -3, nbExos: -1, graine: 1 }).length, 0);
});

test('composerExamen : graines texte reproductibles, toutes les questions jouables', () => {
  const ch = [chap('A', 25, 6), chap('B', 25, 6), chap('C', 25, 6)];
  assert.deepEqual(composerExamen({ chapitres: ch, nbQcm: 12, nbExos: 4, graine: 'abc' }),
    composerExamen({ chapitres: ch, nbQcm: 12, nbExos: 4, graine: 'abc' }));
  for (let g = 0; g < 200; g++) {
    const items = composerExamen({ chapitres: ch, nbQcm: 20, nbExos: 8, graine: g });
    assert.equal(items.length, 28);
    for (const it of items) {
      if (it.type !== 'qcm') continue;
      const q = it.question;
      assert.ok(q.reponse >= 0 && q.reponse < q.choix.length);
      // La bonne réponse est restée la même (le texte, pas la lettre).
      const i = Number(q.enonce.split(' ').pop());
      assert.equal(q.choix[q.reponse], ['a', 'b', 'c', 'd'][i % 4]);
    }
    const cles = items.map((it) => (it.type === 'qcm' ? it.question.enonce : it.exercice.enonce));
    assert.equal(new Set(cles).size, cles.length);
  }
});

test('composerExamen : deux « Quelle phrase est correcte ? » différentes sont deux questions', () => {
  const a = { id: 'A', questionsQcm: [
    { enonce: 'Quelle phrase est correcte ?', choix: ['I am', 'I is', 'I be', 'I are'], reponse: 0 },
    { enonce: 'Quelle phrase est correcte ?', choix: ['He goes', 'He go', 'He going', 'He gone'], reponse: 0 },
    { enonce: 'Quelle phrase est correcte ?', choix: ['I is', 'I am', 'I be', 'I are'], reponse: 1 }, // vrai doublon
  ] };
  const items = composerExamen({ chapitres: [a], nbQcm: 10, nbExos: 0, graine: 2 });
  assert.equal(items.length, 2);
});

test('composerExamen : un QCM qui reprend l’énoncé d’un exercice déjà pris est écarté', () => {
  const a = chap('A', 0, 1);
  a.questionsQcm = [{ enonce: 'A exercice 0', choix: ['1', '2'], reponse: 0 }, qcm('A', 1)];
  const items = composerExamen({ chapitres: [a], nbQcm: 5, nbExos: 1, graine: 1 });
  assert.equal(items.length, 2);
  assert.equal(items.filter((i) => i.type === 'qcm').length, 1);
});

test('composerExamen : position de la bonne réponse ≈ uniforme', () => {
  const pos = [0, 0, 0, 0];
  const ch = [{ id: 'A', questionsQcm: Array.from({ length: 40 }, (_, i) => ({ ...qcm('A', i), reponse: 0 })) }];
  for (let g = 0; g < 200; g++) {
    for (const it of composerExamen({ chapitres: ch, nbQcm: 20, nbExos: 0, graine: g })) pos[it.question.reponse] += 1;
  }
  for (const p of pos) assert.ok(p > 800 && p < 1200, `positions ${pos}`);
});

test('melangerChoix (examen) : pas de faux positif « la réponse a été »', () => {
  const q = { ...qcm('A', 0), explication: 'La réponse a été donnée par Euclide.' };
  const vus = new Set();
  const rand = creerAlea(1);
  for (let i = 0; i < 40; i++) vus.add(melangerChoix(q, rand).reponse);
  assert.ok(vus.size > 1);
  const fige = { ...qcm('A', 2), explication: 'Le choix A confond aire et périmètre.' };
  assert.deepEqual(melangerChoix(fige, rand).choix, fige.choix);
});

test('barème et formats affichés', () => {
  assert.equal(POINTS_QCM, 1);
  assert.equal(POINTS_EXO, 2);
  assert.deepEqual(FORMATS.map(descriptionFormat), [
    '8\u00a0QCM + 2 exercices · 10\u00a0min', '12\u00a0QCM + 4 exercices · 20\u00a0min', '20\u00a0QCM + 8 exercices · 40\u00a0min',
  ]);
  assert.equal(descriptionFormat({ nbQcm: 5, nbExos: 1, minutes: 5 }), '5\u00a0QCM + 1 exercice · 5\u00a0min');
});

test('mode examen : noter avec réponses manquantes et questions nulles', () => {
  const r = noter([{ reponse: 1 }, null, { reponse: 0 }], [{ choisi: 1 }, { choisi: 0 }]);
  assert.equal(r.total, 3);
  assert.equal(r.justes, 1);
  assert.equal(r.sansReponse, 1);
  assert.equal(r.pourcent, 33);
  assert.deepEqual(r.rates, [1, 2]);
  assert.equal(appreciation(89.6), 'Excellent');
  assert.equal(appreciation(74.4), 'Bien');
  assert.equal(appreciation(NaN), 'À retravailler');
  assert.equal(noter(undefined).total, 0);
  // Parfait
  const items = composerExamen({ chapitres: [chap('A', 10, 2)], nbQcm: 8, nbExos: 2, graine: 6 });
  assert.equal(noterExamen(items, parfaite(items)).note20, 20);
});
