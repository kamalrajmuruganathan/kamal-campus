/**
 * Propriétés de quizmix : mélange uniforme, bonne réponse qui suit son texte,
 * aucune question perdue ni dupliquée, explications qui citent une lettre.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  melanger, melangerChoix, composerQcm, poolQuestions, sansDoublons, completerQuestions,
  preferNiveau, citeUneLettre, cleQuestion,
} from './quizmix.js';

function rng(graine) {
  let a = graine >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const q4 = (enonce, reponse = 0, explication = 'Parce que.') => ({
  enonce, choix: ['un', 'deux', 'trois', 'quatre'], reponse, explication,
});

test('melanger : liste vide, un élément, ne modifie pas la source', () => {
  assert.deepEqual(melanger([], rng(1)), []);
  assert.deepEqual(melanger([7], rng(1)), [7]);
  const src = [1, 2, 3];
  melanger(src, rng(2));
  assert.deepEqual(src, [1, 2, 3]);
});

test('melanger : les 24 ordres de 4 éléments sont équiprobables', () => {
  const rand = rng(3);
  const compte = new Map();
  const N = 24000;
  for (let i = 0; i < N; i++) {
    const k = melanger([0, 1, 2, 3], rand).join('');
    compte.set(k, (compte.get(k) || 0) + 1);
  }
  assert.equal(compte.size, 24);
  for (const [k, c] of compte) assert.ok(c > 800 && c < 1200, `ordre ${k} : ${c} fois sur ${N}`);
});

test('melangerChoix : la bonne réponse suit son texte, sur 10 000 questions variées', () => {
  const rand = rng(4);
  for (let i = 0; i < 10000; i++) {
    const n = 2 + (i % 5); // 2 à 6 choix
    const choix = Array.from({ length: n }, (_, k) => `choix-${i}-${k}`);
    const reponse = i % n;
    const q = { enonce: `Q${i}`, choix, reponse, explication: 'Car.' };
    const m = melangerChoix(q, rand);
    assert.equal(m.choix[m.reponse], choix[reponse]);
    assert.deepEqual([...m.choix].sort(), [...choix].sort());
    assert.equal(m.enonce, q.enonce);
    assert.equal(m.explication, q.explication);
  }
});

test('melangerChoix : position de la bonne réponse ≈ uniforme, même si la banque la met toujours en A', () => {
  const rand = rng(5);
  const pos = [0, 0, 0, 0];
  const N = 8000;
  for (let i = 0; i < N; i++) pos[melangerChoix(q4(`Q${i}`, 0), rand).reponse] += 1;
  for (const p of pos) assert.ok(p > N * 0.22 && p < N * 0.28, `positions ${pos}`);
});

test('melangerChoix : questions mal formées rendues telles quelles', () => {
  for (const q of [
    { enonce: 'a', choix: ['x'], reponse: 0 },
    { enonce: 'a', choix: ['x', 'y'], reponse: -1 },
    { enonce: 'a', choix: ['x', 'y'], reponse: 2 },
    { enonce: 'a', choix: ['x', 'y'], reponse: 1.5 },
    { enonce: 'a', choix: ['x', 'y'], reponse: '1' },
    { enonce: 'a', choix: 'xy', reponse: 0 },
    { enonce: 'a' },
  ]) assert.equal(melangerChoix(q, rng(1)), q);
  assert.equal(melangerChoix(undefined), undefined);
});

test('citeUneLettre : vraies citations de lettre', () => {
  for (const e of [
    'Le piège du choix A est de confondre.',
    'Les choix B et C inversent image et antécédent.',
    'La réponse C oublie le signe.',
    'Réponse D : unité fausse.',
    'Les propositions B et D sont fausses.',
    'L’option (B) est un piège.',
  ]) assert.equal(citeUneLettre(e), true, e);
});

test('citeUneLettre : pas de faux positif sur des phrases ordinaires (le mélange reste actif)', () => {
  for (const e of [
    "L'introduction annonce le plan, sans livrer la réponse d'avance.",
    "Des choix d'orientation inégaux peuvent renforcer les inégalités.",
    'Le dernier choix a la bonne valeur mais la mauvaise unité.',
    'La réponse a été trouvée par Pythagore.',
    'Réponse juste : le point A est sur la droite.',
    'Les options de calcul sont nombreuses.',
    '',
  ]) assert.equal(citeUneLettre(e), false, e);
  assert.equal(citeUneLettre(undefined), false);
  assert.equal(citeUneLettre(null), false);
  const q = q4('x', 1, 'Le dernier choix a la bonne valeur mais la mauvaise unité.');
  const vus = new Set();
  const rand = rng(6);
  for (let i = 0; i < 50; i++) vus.add(melangerChoix(q, rand).reponse);
  assert.ok(vus.size > 1, 'la question doit être mélangée');
});

test('melangerChoix : ordre gardé (et même objet) quand l’explication cite une lettre', () => {
  const q = q4('x', 2, 'Le choix B oublie de diviser par 2.');
  for (let s = 0; s < 20; s++) assert.equal(melangerChoix(q, rng(s)), q);
});

test('cleQuestion : énoncé et choix, ordre des choix et espaces indifférents', () => {
  assert.equal(cleQuestion({ enonce: ' Q  ', choix: ['b', 'a'] }), cleQuestion({ enonce: 'Q', choix: ['a', 'b '] }));
  assert.notEqual(cleQuestion({ enonce: 'Q', choix: ['a', 'b'] }), cleQuestion({ enonce: 'Q', choix: ['a', 'c'] }));
  assert.notEqual(cleQuestion({ enonce: 'Q', choix: ['Cu', 'CU'] }), cleQuestion({ enonce: 'Q', choix: ['cu', 'CU'] }));
  assert.equal(typeof cleQuestion(null), 'string');
});

test('sansDoublons : même énoncé mais choix différents → les deux questions sont gardées', () => {
  const a = { enonce: 'Quelle phrase est correcte ?', choix: ['I am', 'I is', 'I are', 'I be'], reponse: 0 };
  const b = { enonce: 'Quelle phrase est correcte ?', choix: ['He goes', 'He go', 'He going', 'He gone'], reponse: 0 };
  const a2 = { ...a, choix: [...a.choix].reverse(), reponse: 3 }; // même question, choix dans un autre ordre
  assert.deepEqual(sansDoublons([a, b, a2, null, undefined]), [a, b]);
  assert.deepEqual(sansDoublons(null), []);
  assert.deepEqual(sansDoublons('pas une liste'), []);
});

test('sansDoublons : idempotent, garde la première occurrence et l’ordre', () => {
  const rand = rng(7);
  const base = Array.from({ length: 200 }, (_, i) => q4(`E${Math.floor(rand() * 60)}`, i % 4));
  const une = sansDoublons(base);
  assert.deepEqual(sansDoublons(une), une);
  const premiers = [];
  const vus = new Set();
  for (const q of base) if (!vus.has(q.enonce)) { vus.add(q.enonce); premiers.push(q); }
  assert.deepEqual(une, premiers);
});

test('completerQuestions : aucune perte, aucun doublon, rien d’inventé (5 000 tirages)', () => {
  const rand = rng(8);
  for (let t = 0; t < 5000; t++) {
    const nBase = Math.floor(rand() * 8);
    const nRes = Math.floor(rand() * 15);
    const n = Math.floor(rand() * 12);
    const base = Array.from({ length: nBase }, () => q4(`G${Math.floor(rand() * 6)}`));
    const reserve = Array.from({ length: nRes }, () => q4(`B${Math.floor(rand() * 10)}`));
    if (rand() < 0.2 && base.length) reserve.push({ ...base[0] }); // même question des deux côtés
    const res = completerQuestions(base, reserve, n, rand);
    const distinctsBase = sansDoublons(base);
    const distinctsTout = sansDoublons([...base, ...reserve]);
    assert.equal(res.length, Math.min(n, distinctsTout.length), `n=${n}`);
    assert.equal(new Set(res.map(cleQuestion)).size, res.length, 'doublon');
    for (const q of res) assert.ok(base.includes(q) || reserve.includes(q), 'question inventée');
    // Les questions générées passent en priorité.
    const gardees = distinctsBase.slice(0, n);
    for (const q of gardees) assert.ok(res.includes(q), 'question générée perdue');
  }
});

test('completerQuestions : n nul ou négatif → [], réserve absente acceptée', () => {
  assert.deepEqual(completerQuestions([q4('a')], [q4('b')], 0), []);
  assert.deepEqual(completerQuestions([q4('a')], [q4('b')], -3), []);
  assert.equal(completerQuestions([q4('a')], null, 5).length, 1);
  assert.equal(completerQuestions(null, [q4('b'), q4('c')], 5, rng(1)).length, 2);
});

test('completerQuestions : même graine → même résultat', () => {
  const base = [q4('a')];
  const reserve = Array.from({ length: 30 }, (_, i) => q4(`r${i}`));
  assert.deepEqual(completerQuestions(base, reserve, 10, rng(9)), completerQuestions(base, reserve, 10, rng(9)));
});

test('composerQcm : n négatif → [], aucune question dupliquée', () => {
  const chapitres = [{ qcm: { questions: Array.from({ length: 30 }, (_, i) => q4(`c${i}`)) } }];
  assert.deepEqual(composerQcm(chapitres, -1, rng(1)), []);
  const r = composerQcm(chapitres, 15, rng(2));
  assert.equal(r.length, 15);
  assert.equal(new Set(r).size, 15);
  assert.equal(poolQuestions([{ qcm: { questions: null } }]).length, 0);
});

test('preferNiveau : seuil min paramétrable, entrées vides', () => {
  const ch = [{ niveau: 'cp' }, { niveau: 'cm1' }, { niveau: 'cm1' }, { niveau: 'cm1' }];
  assert.equal(preferNiveau(ch, 'cm1', 3).length, 3);
  assert.equal(preferNiveau(ch, 'cm1', 4).length, 4);
  assert.deepEqual(preferNiveau(null, 'cm1'), []);
  assert.equal(preferNiveau([null, ...ch], 'cp', 1).length, 1);
});
