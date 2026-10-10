import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  FORMATS, formatParId, descriptionFormat, creerAlea, melangerChoix, composerExamen,
  noterExamen, arrondiDemi, formaterNote, ajouterHistorique, itemJuste, estRepondu,
  POINTS_QCM, POINTS_EXO, MAX_HISTORIQUE_EXAMENS,
} from './composer.js';

/** Chapitre factice : n questions de QCM et m exercices numériques. */
function chap(id, n, m = 0) {
  return {
    id,
    matiere: 'maths',
    questionsQcm: Array.from({ length: n }, (_, i) => ({
      enonce: `${id} question ${i}`,
      choix: ['a', 'b', 'c', 'd'],
      reponse: i % 4,
      explication: 'parce que',
    })),
    exercicesAuto: Array.from({ length: m }, (_, i) => ({
      id: i + 1,
      enonce: `${id} exercice ${i}`,
      reponse: String(10 + i),
      corrige: ['calcul'],
    })),
  };
}

const compter = (items, type) => {
  const c = {};
  for (const it of items) if (it.type === type) c[it.chapitreId] = (c[it.chapitreId] || 0) + 1;
  return c;
};

test('formats : Express, Standard, Long', () => {
  assert.deepEqual(FORMATS.map((f) => [f.id, f.minutes, f.nbQcm, f.nbExos]), [
    ['express', 10, 8, 2], ['standard', 20, 12, 4], ['long', 40, 20, 8],
  ]);
  assert.equal(formatParId('long').nom, 'Long');
  assert.equal(formatParId('inconnu').id, 'standard');
  assert.equal(descriptionFormat(FORMATS[0]), '8 QCM + 2 exercices · 10 min');
});

test('creerAlea : reproductible, dans [0, 1[, graine texte acceptée', () => {
  const a = creerAlea(42); const b = creerAlea(42); const c = creerAlea(43);
  const sa = Array.from({ length: 20 }, a);
  assert.deepEqual(sa, Array.from({ length: 20 }, b));
  assert.notDeepEqual(sa, Array.from({ length: 20 }, c));
  assert.ok(sa.every((x) => x >= 0 && x < 1));
  assert.equal(creerAlea('abc')(), creerAlea('abc')());
});

test('melangerChoix : la bonne réponse suit son texte', () => {
  const rand = creerAlea(7);
  for (let k = 0; k < 50; k++) {
    const q = { enonce: 'Q', choix: ['un', 'deux', 'trois', 'quatre'], reponse: k % 4 };
    const m = melangerChoix(q, rand);
    assert.equal(m.choix[m.reponse], q.choix[q.reponse]);
    assert.deepEqual([...m.choix].sort(), [...q.choix].sort());
    assert.deepEqual(q.choix, ['un', 'deux', 'trois', 'quatre']); // original intact
  }
});

test('composerExamen : déterministe pour une graine, différent pour une autre', () => {
  const chapitres = [chap('A', 20, 10), chap('B', 20, 10), chap('C', 20, 10)];
  const e1 = composerExamen({ chapitres, nbQcm: 12, nbExos: 4, graine: 123 });
  const e2 = composerExamen({ chapitres, nbQcm: 12, nbExos: 4, graine: 123 });
  const e3 = composerExamen({ chapitres, nbQcm: 12, nbExos: 4, graine: 124 });
  assert.deepEqual(e1, e2);
  assert.notDeepEqual(e1, e3);
});

test('composerExamen : nombres demandés, QCM puis exercices, barème', () => {
  const items = composerExamen({ chapitres: [chap('A', 20, 10), chap('B', 20, 10)], nbQcm: 8, nbExos: 2, graine: 1 });
  assert.equal(items.length, 10);
  assert.deepEqual(items.map((i) => i.type), [...Array(8).fill('qcm'), 'exo', 'exo']);
  assert.ok(items.filter((i) => i.type === 'qcm').every((i) => i.points === POINTS_QCM));
  assert.ok(items.filter((i) => i.type === 'exo').every((i) => i.points === POINTS_EXO && i.exoId));
});

test('composerExamen : équilibré entre les chapitres (écart ≤ 1)', () => {
  const chapitres = [chap('A', 30, 10), chap('B', 30, 10), chap('C', 30, 10)];
  for (let g = 0; g < 20; g++) {
    const items = composerExamen({ chapitres, nbQcm: 20, nbExos: 8, graine: g });
    for (const type of ['qcm', 'exo']) {
      const v = Object.values(compter(items, type));
      assert.equal(v.length, 3);
      assert.ok(Math.max(...v) - Math.min(...v) <= 1, `${type} : ${v}`);
    }
  }
});

test('composerExamen : aucun doublon, même si la banque en contient', () => {
  const a = chap('A', 5, 0);
  a.questionsQcm.push({ ...a.questionsQcm[0] }, { ...a.questionsQcm[1], enonce: '  A QUESTION 1 ' });
  const b = { ...chap('B', 0, 0), questionsQcm: [{ ...a.questionsQcm[2] }] }; // même énoncé dans un autre chapitre
  const items = composerExamen({ chapitres: [a, b], nbQcm: 20, nbExos: 0, graine: 5 });
  const enonces = items.map((i) => i.question.enonce.toLowerCase().trim());
  assert.equal(new Set(enonces).size, enonces.length);
  assert.equal(items.length, 5); // 5 énoncés distincts en tout
});

test('composerExamen : chapitre sans exercice auto → complété par des QCM', () => {
  const chapitres = [chap('A', 30, 0), chap('B', 30, 1)];
  const items = composerExamen({ chapitres, nbQcm: 8, nbExos: 2, graine: 9 });
  assert.equal(items.filter((i) => i.type === 'exo').length, 1);
  assert.equal(items.filter((i) => i.type === 'qcm').length, 9);
  assert.equal(items.length, 10);
  const aucunExo = composerExamen({ chapitres: [chap('A', 30, 0)], nbQcm: 8, nbExos: 2, graine: 9 });
  assert.equal(aucunExo.length, 10);
  assert.ok(aucunExo.every((i) => i.type === 'qcm'));
});

test('composerExamen : ignore les questions invalides, entrée vide', () => {
  const a = chap('A', 2, 0);
  a.questionsQcm.push({ enonce: 'sans choix' }, { enonce: 'mauvais indice', choix: ['x', 'y'], reponse: 5 });
  const items = composerExamen({ chapitres: [a], nbQcm: 10, nbExos: 0, graine: 1 });
  assert.equal(items.length, 2);
  assert.deepEqual(composerExamen({ chapitres: [], nbQcm: 8, nbExos: 2, graine: 1 }), []);
  assert.deepEqual(composerExamen(), []);
});

test('arrondiDemi / formaterNote', () => {
  assert.equal(arrondiDemi(12.24), 12);
  assert.equal(arrondiDemi(12.26), 12.5);
  assert.equal(arrondiDemi(12.76), 13);
  assert.equal(formaterNote(12.5), '12,5');
  assert.equal(formaterNote(14), '14');
});

test('noterExamen : barème, note sur 20 au demi-point, sans réponse', () => {
  const items = composerExamen({ chapitres: [chap('A', 20, 10)], nbQcm: 8, nbExos: 2, graine: 3 });
  // total = 8 × 1 + 2 × 2 = 12 points
  const reponses = items.map((it, i) => {
    if (it.type === 'qcm') return i < 5 ? { choisi: it.question.reponse } : { choisi: (it.question.reponse + 1) % 4 };
    return it === items[8] ? { saisie: ` ${it.exercice.reponse} ` } : null;
  });
  const b = noterExamen(items, reponses);
  assert.equal(b.total, 12);
  assert.equal(b.points, 7); // 5 QCM + 1 exercice
  assert.equal(b.note20, 11.5); // 7/12 × 20 = 11,67 → 11,5
  assert.equal(b.sansReponse, 1);
  assert.deepEqual(b.parChapitre, { A: { juste: 7, total: 12 } });
  assert.equal(b.pourcent, 58);
  assert.equal(b.appreciation, 'À consolider');
  assert.deepEqual(b.aRevoir, ['A']);
  assert.equal(b.details.length, 10);
});

test('noterExamen : copie vide = 0, parfaite = 20', () => {
  const items = composerExamen({ chapitres: [chap('A', 20, 10)], nbQcm: 4, nbExos: 1, graine: 2 });
  assert.equal(noterExamen(items, []).note20, 0);
  const parfait = items.map((it) => (it.type === 'qcm' ? { choisi: it.question.reponse } : { saisie: it.exercice.reponse }));
  const b = noterExamen(items, parfait);
  assert.equal(b.note20, 20);
  assert.deepEqual(b.aRevoir, []);
  assert.deepEqual(noterExamen([], []), { ...noterExamen([], []), note20: 0, total: 0, aRevoir: [] });
});

test('noterExamen : chapitres à revoir (< 60 %), du plus faible au moins faible', () => {
  const q = (id, n) => ({ type: 'qcm', chapitreId: id, points: 1, question: { enonce: `${id}${n}`, choix: ['a', 'b'], reponse: 0 } });
  const items = [q('A', 1), q('A', 2), q('B', 1), q('B', 2), q('C', 1), q('C', 2), q('D', 1), q('D', 2), q('D', 3)];
  const ok = { choisi: 0 }; const ko = { choisi: 1 };
  // A : 1/2 (50 %), B : 0/2, C : 2/2, D : 2/3 (67 %)
  const b = noterExamen(items, [ok, ko, ko, null, ok, ok, ok, ok, ko]);
  assert.deepEqual(b.aRevoir, ['B', 'A']);
  assert.deepEqual(b.parChapitre.D, { juste: 2, total: 3 });
});

test('itemJuste / estRepondu : la justesse est recalculée', () => {
  const it = { type: 'qcm', question: { choix: ['a', 'b'], reponse: 1 } };
  assert.equal(itemJuste(it, { choisi: 1, juste: false }), true);
  assert.equal(itemJuste(it, { choisi: 0, juste: true }), false);
  assert.equal(estRepondu(it, { choisi: 0 }), true);
  const exo = { type: 'exo', matiere: 'maths', exercice: { enonce: 'Calcule 6 × 7.', reponse: '42' } };
  assert.equal(itemJuste(exo, { saisie: '42' }), true);
  assert.equal(itemJuste(exo, { saisie: '41' }), false);
  assert.equal(estRepondu(exo, { saisie: '   ' }), false);
});

test('ajouterHistorique : en tête, 30 au plus, pas de doublon d’id', () => {
  let h = [];
  for (let i = 0; i < 35; i++) h = ajouterHistorique(h, { id: `e${i}`, note20: i % 20 });
  assert.equal(h.length, MAX_HISTORIQUE_EXAMENS);
  assert.equal(h[0].id, 'e34');
  h = ajouterHistorique(h, { id: 'e34', note20: 18 });
  assert.equal(h.length, MAX_HISTORIQUE_EXAMENS);
  assert.equal(h.filter((e) => e.id === 'e34').length, 1);
  assert.deepEqual(ajouterHistorique(undefined, { id: 'x' }), [{ id: 'x' }]);
});
