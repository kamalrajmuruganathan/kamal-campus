// Tests complémentaires des énigmes : chaque énigme a une solution juste ET unique
// (aucune autre règle simple ne donne une autre réponse), sur des milliers de tirages reproductibles.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as G from './generateurs.js';
import { genererEnigmes, FAMILLES } from './index.js';
import { ETAPES, mascotteNiveau, progressionEtape } from '../mascotte/index.js';

function rng(graine) {
  let a = graine >>> 0;
  return () => { a = (Math.imul(a, 1664525) + 1013904223) >>> 0; return a / 2 ** 32; };
}
const termes = (e) => e.enonce.replace('?', '').split(',').map((x) => x.trim()).filter(Boolean).map(Number);

/** Toutes les prédictions des règles simples qui expliquent les 5 termes. */
function predictions(t) {
  const p = new Set();
  const d = t.slice(1).map((x, i) => x - t[i]);
  if (d.every((x) => x === d[0])) p.add(t[4] + d[0]); // + constant
  if (t.every((x) => x !== 0)) {
    const r = t[1] / t[0];
    if (t.slice(1).every((x, i) => Math.abs(x - t[i] * r) < 1e-9)) p.add(t[4] * r); // × constant
  }
  const d2 = d.slice(1).map((x, i) => x - d[i]);
  if (d2.every((x) => x === d2[0])) p.add(t[4] + d[3] + d2[0]); // écarts qui augmentent régulièrement
  if (t.slice(2).every((x, i) => x === t[i] + t[i + 1])) p.add(t[3] + t[4]); // somme des deux précédents
  if (t[1] !== t[0]) { // u(n+1) = p·u(n) + q
    const pp = (t[2] - t[1]) / (t[1] - t[0]);
    const q = t[1] - pp * t[0];
    if (t.slice(1).every((x, i) => Math.abs(x - (pp * t[i] + q)) < 1e-9)) p.add(pp * t[4] + q);
  }
  if (t.slice(2).every((x, i) => x === t[i] * t[i + 1])) p.add(t[3] * t[4]); // produit des deux précédents
  return p;
}

test('suites : la réponse est la seule que donnent les règles simples (5 générateurs × 2 000 tirages)', () => {
  const rand = rng(77);
  for (const gen of [G.suiteArithmetique, G.suiteGeometrique, G.suiteDifferences, G.suiteFibonacci, G.suiteAffine]) {
    for (let i = 0; i < 2000; i++) {
      const e = gen(rand);
      const t = termes(e);
      assert.equal(t.length, 5, e.enonce);
      assert.ok(t.every(Number.isInteger));
      const p = predictions(t);
      assert.ok(p.has(e.reponse), `${gen.name} : ${e.enonce} → ${e.reponse} non expliquée`);
      assert.deepEqual([...p], [e.reponse], `${gen.name} : ${e.enonce} admet ${[...p].join(' ou ')}`);
      // L'explication cite la bonne réponse et le dernier terme.
      assert.ok(e.explication.endsWith(`= ${e.reponse}.`), e.explication);
      assert.ok(e.explication.includes(String(t[4])), e.explication);
    }
  }
});

test('analogie : une seule règle « × k » ou « + d » ou affine, réponse = c × k', () => {
  const rand = rng(5);
  for (let i = 0; i < 3000; i++) {
    const e = G.analogie(rand);
    const m = /^(\d+) → (\d+)\s+(\d+) → (\d+)\s+(\d+) → \?$/.exec(e.enonce);
    assert.ok(m, e.enonce);
    const [a, A, b, B, c] = m.slice(1).map(Number);
    assert.notEqual(a, b);
    // Deux exemples déterminent une seule règle affine x → p·x + q.
    const p = (B - A) / (b - a);
    const q = A - p * a;
    assert.equal(q, 0, e.enonce);
    assert.equal(p * c + q, e.reponse);
    assert.equal(e.reponse, c * (A / a));
  }
});

test('intrus : exactement un nombre ne suit pas la règle, et aucune autre règle « multiples de j » ne désigne un autre intrus', () => {
  const rand = rng(11);
  for (let i = 0; i < 3000; i++) {
    const e = G.intrus(rand);
    const l = e.enonce.split('\n').pop().split(',').map((x) => Number(x.trim()));
    assert.equal(l.length, 5);
    assert.ok(l.includes(e.reponse));
    for (let j = 2; j <= Math.max(...l); j++) {
      const non = l.filter((x) => x % j !== 0);
      if (non.length === 1) assert.equal(non[0], e.reponse, `${e.enonce} : « multiples de ${j} » désigne ${non[0]}`);
    }
    // Les autres forment une suite régulière (+ k) à un trou près : on retrouve 1k … 5k.
    const k = Number(/multiples de (\d+)/.exec(e.explication)[1]);
    assert.deepEqual(l.filter((x) => x !== e.reponse).every((x) => x % k === 0), true);
    assert.notEqual(e.reponse % k, 0);
  }
});

// Bug corrigé : l'écran n'affiche pas l'en-tête de la grille ; avec deux lignes « 2, 2, 4 »,
// + et × convenaient tous les deux et deux réponses étaient justes.
test('grille : les lignes d\'exemple suffisent à trouver l\'opération (sans l\'en-tête)', () => {
  const rand = rng(13);
  for (let i = 0; i < 5000; i++) {
    const e = G.grilleArithmetique(rand);
    const exemples = e.grille.lignes.slice(0, 2);
    const plus = exemples.every(([a, b, c]) => a + b === c);
    const fois = exemples.every(([a, b, c]) => a * b === c);
    assert.ok(plus !== fois, JSON.stringify(e.grille));
    const [a, b, x] = e.grille.lignes[2];
    assert.equal(x, '?');
    assert.equal(e.reponse, plus ? a + b : a * b);
    assert.ok(e.explication.endsWith(`= ${e.reponse}.`));
  }
});

test('calcul mental : réponse = calcul avec les priorités (évaluation indépendante), entre 0 et 200', () => {
  const rand = rng(21);
  for (let i = 0; i < 5000; i++) {
    const e = G.calculMental(rand);
    const expr = e.enonce.replace(/×/g, '*');
    assert.match(expr, /^\d+ [*+-] \d+ [*+-] \d+$/);
    const v = Function(`return (${expr});`)();
    assert.equal(e.reponse, v, e.enonce);
    assert.ok(v >= 0 && v <= 200);
    assert.equal(e.explication, `En respectant les priorités : ${e.enonce} = ${v}.`);
  }
  // Tirage qui donne toujours un résultat négatif : le filet change aussi l'énoncé affiché.
  let k = 0;
  const pire = () => { const seq = [0.99, 0, 0.99, 0]; return seq[k++ % 4]; }; // combos[3] (- +), a = 3, b = 9, c = 2
  const e = G.calculMental(pire);
  assert.equal(Function(`return (${e.enonce.replace(/×/g, '*')});`)(), e.reponse);
  assert.ok(e.reponse >= 0);
});

test('genererEnigmes : pas de doublon d\'énoncé quand c\'est possible, familles alternées, ids 1..n', () => {
  for (const type of Object.keys(FAMILLES)) {
    const l = genererEnigmes(type, 30, rng(3));
    assert.equal(l.length, 30);
    // Bug corrigé : les grilles (même énoncé, grilles différentes) étaient toutes prises pour des doublons.
    assert.equal(new Set(l.map((x) => x.enonce + JSON.stringify(x.grille || ''))).size, 30, type);
    assert.deepEqual(l.map((x) => x.id), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.ok(l.every((x) => x.type === type));
  }
  assert.deepEqual(genererEnigmes('suite', 0, rng(1)), []);
  // Reproductible : même graine, mêmes énigmes.
  assert.deepEqual(genererEnigmes('calcul', 5, rng(8)), genererEnigmes('calcul', 5, rng(8)));
});

test('énigmes : textes en bon français (pas d\'espace avant la virgule, indices terminés par un signe)', () => {
  const rand = rng(4);
  for (const gen of Object.values(G).filter((v) => typeof v === 'function')) {
    for (let i = 0; i < 50; i++) {
      const e = gen(rand);
      assert.ok(/[.?!]$/.test(e.indice), e.indice);
      assert.ok(!/ ,/.test(e.explication) && !/\s{2}/.test(e.explication), e.explication);
      assert.ok(/[.]$/.test(e.explication));
    }
  }
});

// ─── Mascotte ───────────────────────────────────────────────────────────────

test('mascotte : étape selon le niveau, bornes exactes, valeurs absurdes', () => {
  assert.equal(mascotteNiveau(1).nom, 'Pousse');
  assert.equal(mascotteNiveau(2).nom, 'Pousse');
  assert.equal(mascotteNiveau(3).nom, 'Jeune plant');
  assert.equal(mascotteNiveau(7).nom, 'Plante');
  assert.equal(mascotteNiveau(8).nom, 'Arbre');
  assert.equal(mascotteNiveau(12).emoji, '🌸');
  assert.equal(mascotteNiveau(16).nom, 'Légende');
  assert.equal(mascotteNiveau(999).nom, 'Légende');
  for (const v of [0, -3, null, undefined, NaN, 'abc', {}]) assert.equal(mascotteNiveau(v).nom, 'Pousse', String(v));
  assert.equal(mascotteNiveau('5').nom, 'Plante');
  // Étapes croissantes, noms distincts.
  assert.ok(ETAPES.every((e, i) => i === 0 || e.min > ETAPES[i - 1].min));
  assert.equal(new Set(ETAPES.map((e) => e.nom)).size, ETAPES.length);
});

test('mascotte : progression vers l\'étape suivante entre 0 et 1, croissante, 1 à la dernière', () => {
  assert.equal(progressionEtape(1), 0);
  assert.equal(progressionEtape(2), 0.5);
  assert.equal(progressionEtape(3), 0);
  assert.equal(progressionEtape(4), 0.5);
  assert.equal(progressionEtape(10), 0.5);
  assert.equal(progressionEtape(16), 1);
  assert.equal(progressionEtape(40), 1);
  assert.equal(progressionEtape(-5), 0);
  assert.equal(progressionEtape(undefined), 0);
  for (let n = 1; n < 16; n++) {
    const p = progressionEtape(n);
    assert.ok(p >= 0 && p < 1);
    if (mascotteNiveau(n) === mascotteNiveau(n + 1)) assert.ok(progressionEtape(n + 1) > p);
  }
});
