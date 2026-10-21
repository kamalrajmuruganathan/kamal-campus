import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as M from './modeles.js';
import { aGenerateur, genererQuestions, REGISTRE } from './index.js';
import { nombreLatex } from './noyau.js';

// RNG déterministe (mulberry32) pour des tests reproductibles.
function rng(graine) {
  let a = graine >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GENERATEURS = Object.values(M).filter((v) => typeof v === 'function');
const DIFFICULTES = new Set(['facile', 'moyen', 'difficile']);

test('chaque générateur respecte les invariants sur de nombreux tirages', () => {
  const rand = rng(12345);
  for (const gen of GENERATEURS) {
    for (let i = 0; i < 400; i++) {
      const q = gen(rand); // ne doit jamais lever (assez de distracteurs distincts)
      assert.equal(q.choix.length, 4, `${gen.name} : 4 choix attendus`);
      assert.equal(new Set(q.choix).size, 4, `${gen.name} : 4 choix DISTINCTS attendus`);
      assert.ok(q.reponse >= 0 && q.reponse < 4, `${gen.name} : index de réponse valide`);
      assert.ok(DIFFICULTES.has(q.difficulte), `${gen.name} : difficulté connue (${q.difficulte})`);
      assert.ok(q.enonce && q.enonce.length > 0, `${gen.name} : énoncé non vide`);
      assert.ok(q.explication && q.explication.length > 0, `${gen.name} : explication non vide`);
      assert.ok(typeof q.notion === 'string' && q.notion.length > 0, `${gen.name} : notion présente`);
    }
  }
});

test('eqLineaire : la réponse marquée résout réellement l’équation', () => {
  const rand = rng(999);
  for (let i = 0; i < 500; i++) {
    const q = M.eqLineaire(rand);
    // Énoncé de la forme "$Ax + B = C$" ou "$Ax - B = C$"
    const m = /\$(-?\d+)x ([+-]) (\d+) = (-?\d+)\$/.exec(q.enonce);
    assert.ok(m, `énoncé inattendu : ${q.enonce}`);
    const a = Number(m[1]);
    const b = (m[2] === '-' ? -1 : 1) * Number(m[3]);
    const c = Number(m[4]);
    const sol = /\$x = (-?\d+)\$/.exec(q.choix[q.reponse]);
    assert.ok(sol, `réponse inattendue : ${q.choix[q.reponse]}`);
    const x = Number(sol[1]);
    assert.equal(a * x + b, c, `la solution marquée ne vérifie pas l'équation`);
  }
});

test('eqSimple5e : seulement x + b = c ou ax = c, solution entière positive juste', () => {
  const rand = rng(2026);
  for (let i = 0; i < 500; i++) {
    const q = M.eqSimple5e(rand);
    const sol = /\$x = (\d+)\$/.exec(q.choix[q.reponse]);
    assert.ok(sol, `réponse inattendue : ${q.choix[q.reponse]}`);
    const x = Number(sol[1]);
    let m = /\$x \+ (\d+) = (\d+)\$/.exec(q.enonce);
    if (m) { assert.equal(x + Number(m[1]), Number(m[2])); continue; }
    m = /\$(\d+)x = (\d+)\$/.exec(q.enonce);
    assert.ok(m, `énoncé hors programme de 5e : ${q.enonce}`);
    assert.equal(Number(m[1]) * x, Number(m[2]));
  }
});

test('conversionDureeCM1 : jamais de secondes, conversion juste', () => {
  const rand = rng(41);
  for (let i = 0; i < 300; i++) {
    const q = M.conversionDureeCM1(rand);
    assert.ok(!/seconde|\bs\b/.test(q.enonce + q.choix.join(' ')), q.enonce);
    const m = /Combien (?:de |d')(\w+) y a-t-il dans (\d+) (\w+) \?/.exec(q.enonce);
    const f = { minutes: 60, heures: 24, jours: 7 }[m[1]];
    assert.equal(parseInt(q.choix[q.reponse], 10), Number(m[2]) * f);
  }
});

test('fractionSomme6e : résultat juste et positif, dénominateurs égaux ou multiples', () => {
  const rand = rng(66);
  for (let i = 0; i < 500; i++) {
    const q = M.fractionSomme6e(rand);
    const m = /\\dfrac\{(\d+)\}\{(\d+)\} ([+-]) \\dfrac\{(\d+)\}\{(\d+)\}/.exec(q.enonce);
    assert.ok(m, q.enonce);
    const [a, b, op, c, d] = [Number(m[1]), Number(m[2]), m[3], Number(m[4]), Number(m[5])];
    assert.equal(d % b, 0, `dénominateurs : ${q.enonce}`);
    const num = op === '+' ? a * d + c * b : a * d - c * b;
    assert.ok(num >= 0, `résultat négatif : ${q.enonce}`);
    const bonne = q.choix[q.reponse];
    const f = /\\dfrac\{(\d+)\}\{(\d+)\}/.exec(bonne);
    const val = f ? Number(f[1]) / Number(f[2]) : Number(/\$(\d+)\$/.exec(bonne)[1]);
    assert.ok(Math.abs(val - num / (b * d)) < 1e-9, `${q.enonce} → ${bonne}`);
  }
});

test('6e initiation à l’algèbre : réponses justes, sans lettre ni nombre négatif', () => {
  const rand = rng(6);
  for (let i = 0; i < 300; i++) {
    let q = M.penseUnNombre6e(rand);
    let m = /multiplie par (\d+), puis j'ajoute (\d+) : j'obtiens (\d+)/.exec(q.enonce);
    assert.equal(Number(q.choix[q.reponse]) * Number(m[1]) + Number(m[2]), Number(m[3]));
    q = M.schemaBarres6e(rand);
    m = /a (\d+) fois plus .* en ont (\d+)\./.exec(q.enonce);
    assert.equal(Number(q.choix[q.reponse]) * (Number(m[1]) + 1), Number(m[2]));
    q = M.motifEvolutif6e(rand);
    m = /formé de (\d+) allumettes à l'étape 1, (\d+) à l'étape 2.*l'étape (\d+) \?/.exec(q.enonce);
    const [u1, u2, n] = [Number(m[1]), Number(m[2]), Number(m[3])];
    assert.equal(Number(q.choix[q.reponse]), u1 + (n - 1) * (u2 - u1));
    for (const g of [M.penseUnNombre6e, M.motifEvolutif6e, M.schemaBarres6e]) {
      const t = g(rand);
      assert.ok(!/-\d|\bx\b/.test(t.enonce + t.choix.join(' ')), t.enonce);
    }
  }
});

test('fractionSomme5e : fractions positives, résultat juste et positif', () => {
  const rand = rng(55);
  for (let i = 0; i < 500; i++) {
    const q = M.fractionSomme5e(rand);
    assert.ok(!q.choix.join(' ').includes('-'), q.choix.join(' '));
    const m = /\\dfrac\{(\d+)\}\{(\d+)\} ([+-]) \\dfrac\{(\d+)\}\{(\d+)\}/.exec(q.enonce);
    assert.ok(m, q.enonce);
    const [a, b, op, c, d] = [Number(m[1]), Number(m[2]), m[3], Number(m[4]), Number(m[5])];
    const num = op === '+' ? a * d + c * b : a * d - c * b;
    assert.ok(num > 0, q.enonce);
    const bonne = q.choix[q.reponse];
    const f = /\\dfrac\{(\d+)\}\{(\d+)\}/.exec(bonne);
    const val = f ? Number(f[1]) / Number(f[2]) : Number(/\$(\d+)\$/.exec(bonne)[1]);
    assert.ok(Math.abs(val - num / (b * d)) < 1e-9, `${q.enonce} → ${bonne}`);
  }
});

test('racineCarreParfait : la réponse marquée est bien la racine', () => {
  const rand = rng(7);
  for (let i = 0; i < 200; i++) {
    const q = M.racineCarreParfait(rand);
    const n = Number(/\\sqrt\{(\d+)\}/.exec(q.enonce)[1]);
    const r = Number(/\$(\d+)\$/.exec(q.choix[q.reponse])[1]);
    assert.equal(r * r, n, `√${n} ≠ ${r}`);
  }
});

test('genererQuestions fabrique n questions bien formées, ids 1..n', () => {
  const rand = rng(2024);
  const qs = genererQuestions('1spe-math-second-degre', 20, rand);
  assert.equal(qs.length, 20);
  assert.deepEqual(qs.map((q) => q.id), Array.from({ length: 20 }, (_, i) => i + 1));
  for (const q of qs) {
    assert.equal(q.choix.length, 4);
    assert.equal(new Set(q.choix).size, 4);
    assert.ok(q.reponse >= 0 && q.reponse < 4);
  }
});

test('genererQuestions renvoie [] pour un chapitre sans générateur', () => {
  assert.deepEqual(genererQuestions('chapitre-inexistant', 20, rng(1)), []);
  assert.equal(aGenerateur('chapitre-inexistant'), false);
});

test('aGenerateur reconnaît les chapitres équipés', () => {
  assert.equal(aGenerateur('5e-math-fractions'), true);
  assert.equal(aGenerateur('1spe-math-second-degre'), true);
});

test('tous les générateurs du registre sont des fonctions', () => {
  for (const [id, gens] of Object.entries(REGISTRE)) {
    assert.ok(Array.isArray(gens) && gens.length > 0, `${id} : liste non vide`);
    for (const g of gens) assert.equal(typeof g, 'function', `${id} : générateur invalide`);
  }
});

test('français : présent/imparfait/futur — la forme marquée est correcte', () => {
  const rand = rng(4242);
  const PRES = { 'je': 'e', 'tu': 'es', 'il/elle': 'e', 'nous': 'ons', 'vous': 'ez', 'ils/elles': 'ent' };
  const IMP = { 'je': 'ais', 'tu': 'ais', 'il/elle': 'ait', 'nous': 'ions', 'vous': 'iez', 'ils/elles': 'aient' };
  const FUT = { 'je': 'ai', 'tu': 'as', 'il/elle': 'a', 'nous': 'ons', 'vous': 'ez', 'ils/elles': 'ont' };
  const lire = (e) => { const m = /« ([a-zéèà]+) ».*« ([^»]+) »/.exec(e); return { inf: m[1], pron: m[2] }; };
  for (let i = 0; i < 600; i++) {
    let q = M.presentERegulierFR(rand); let { inf, pron } = lire(q.enonce);
    assert.equal(q.choix[q.reponse], inf.slice(0, -2) + PRES[pron], `présent ${inf}/${pron}`);

    q = M.imparfaitERegulierFR(rand); ({ inf, pron } = lire(q.enonce));
    assert.equal(q.choix[q.reponse], inf.slice(0, -2) + IMP[pron], `imparfait ${inf}/${pron}`);

    q = M.futurERegulierFR(rand); ({ inf, pron } = lire(q.enonce));
    assert.equal(q.choix[q.reponse], inf + FUT[pron], `futur ${inf}/${pron}`);
  }
});

test('français : chapitres de conjugaison branchés produisent 20 questions', () => {
  for (const id of ['ce2-francais-present-premier-groupe', '6e-francais-present-indicatif',
    'cm1-francais-imparfait', 'cm1-francais-futur-simple']) {
    assert.equal(aGenerateur(id), true, `${id} doit avoir un générateur`);
    const qs = genererQuestions(id, 20, rng(11));
    assert.equal(qs.length, 20, `${id} : 20 questions`);
    for (const q of qs) { assert.equal(new Set(q.choix).size, 4); assert.ok(q.reponse >= 0 && q.reponse < 4); }
  }
});

// Virgule française : un nombre décimal calculé en JavaScript ne doit jamais
// s'afficher « 84.5 » (point décimal) dans un énoncé, un choix ou une explication.
const POINT_DECIMAL = /\d\.\d/;

test('nombreLatex : virgule décimale {,}, milliers et arrondi', () => {
  assert.equal(nombreLatex(84.5), '84{,}5');
  assert.equal(nombreLatex(0.1 + 0.2), '0{,}3');
  assert.equal(nombreLatex(-2.5), '-2{,}5');
  assert.equal(nombreLatex(100), '100');
  assert.equal(nombreLatex(1000), '1000');
  assert.equal(nombreLatex(12500), '12\\,500');
  assert.equal(nombreLatex(1250.5, 0), '1251');
  assert.equal(nombreLatex(-0.0000001), '0');
});

test('aucun générateur n’affiche un nombre avec un point décimal', () => {
  const rand = rng(2026);
  for (const gen of GENERATEURS) {
    for (let i = 0; i < 2000; i++) {
      const q = gen(rand);
      for (const texte of [q.enonce, q.explication, ...q.choix]) {
        assert.ok(!POINT_DECIMAL.test(texte), `${gen.name} : point décimal dans « ${texte} »`);
      }
    }
  }
});

test('racineCarreParfait : le distracteur « moitié » s’écrit avec une virgule', () => {
  const rand = rng(7);
  let vuDecimal = false;
  for (let i = 0; i < 500; i++) {
    const q = M.racineCarreParfait(rand);
    for (const c of q.choix) if (c.includes('{,}')) vuDecimal = true;
  }
  assert.ok(vuDecimal, 'un carré impair doit donner une moitié décimale écrite « …{,}5 »');
});

test('chapitres équipés : 200 questions par chapitre, aucun point décimal', () => {
  const rand = rng(31);
  for (const id of Object.keys(REGISTRE)) {
    for (const q of genererQuestions(id, 200, rand)) {
      for (const texte of [q.enonce, q.explication, ...q.choix]) {
        assert.ok(!POINT_DECIMAL.test(texte), `${id} : point décimal dans « ${texte} »`);
      }
    }
  }
});
