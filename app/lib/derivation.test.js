/**
 * Tests de la dérivation polynomiale.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant, et recoupés avec les fiches
 * `derivation` et `variations-courbes`.
 *
 * Rappel de convention : coefficients par degré CROISSANT.
 *   [1, -4, 1] ↔ 1 − 4x + x²
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { deriver, tangente, variations, evaluer, degre, ecrire, regle } from './derivation.js';

// ───────────────────────────── validations ──────────────────────────────────

test('tableau vide ou non numérique refusé', () => {
  assert.equal(deriver([]).valide, false);
  assert.equal(deriver([1, 'x']).valide, false);
  assert.equal(tangente([1, 2], 'a').valide, false);
});

// ───────────────────────────────── dérivée ──────────────────────────────────

test('dérivée d’un polynôme du second degré', () => {
  // f(x) = 1 − 4x + x²  →  f′(x) = −4 + 2x
  assert.deepEqual(deriver([1, -4, 1]).derivee, [-4, 2]);
});

test('dérivée d’une constante : nulle', () => {
  assert.deepEqual(deriver([7]).derivee, [0]);
});

test('dérivée d’une fonction affine : le coefficient directeur', () => {
  assert.deepEqual(deriver([3, 5]).derivee, [5]);
});

test('dérivée d’un polynôme de degré 3', () => {
  // f(x) = x³ − 3x  →  f′(x) = 3x² − 3
  assert.deepEqual(deriver([0, -3, 0, 1]).derivee, [-3, 0, 3]);
});

test('les étapes détaillent chaque terme dérivé', () => {
  const r = deriver([1, -4, 1]);
  assert.ok(r.etapes.some((e) => /Terme de degré 2/.test(e.titre)));
  assert.ok(r.etapes.some((e) => /f′\(x\)/.test(e.detail)));
});

// ──────────────────────────────── évaluation ────────────────────────────────

test('évaluation et degré', () => {
  assert.equal(evaluer([1, -4, 1], 2), -3, 'f(2) = 1 − 8 + 4 = −3');
  assert.equal(evaluer([0, -3, 0, 1], -1), 2, 'f(−1) = −1 + 3 = 2');
  assert.equal(degre([1, -4, 1]), 2);
  assert.equal(degre([5, 0, 0]), 0, 'les zéros de tête ne comptent pas');
});

test('écriture lisible', () => {
  assert.equal(ecrire([1, -4, 1]), 'x^2 − 4x + 1');
  assert.equal(ecrire([0]), '0');
  assert.equal(ecrire([-3, 0, 3]), '3x^2 − 3');
});

// ──────────────────────────────── tangente ──────────────────────────────────

test('tangente — cohérente avec le sommet de la parabole', () => {
  // y = x² − 4x + 1 a son sommet en (2 ; −3), tangente horizontale
  const r = tangente([1, -4, 1], 2);
  assert.equal(r.fa, -3);
  assert.equal(r.fpa, 0);
  assert.equal(r.horizontale, true);
});

test('tangente à la parabole y = x² au point d’abscisse 3', () => {
  const r = tangente([0, 0, 1], 3);
  assert.equal(r.fa, 9);
  assert.equal(r.fpa, 6, 'f′(3) = 2 × 3');
  assert.match(r.equationReduite, /6x − 9/);
});

test('tangente horizontale : l’outil met en garde contre la conclusion hâtive', () => {
  const r = tangente([0, 0, 0, 1], 0); // x³ en 0
  assert.equal(r.horizontale, true);
  assert.ok(r.etapes.some((e) => /ne suffit pas à conclure à un extrémum/.test(e.detail)));
});

// ─────────────────────────────── variations ─────────────────────────────────

test('variations de x³ − 3x : un maximum et un minimum', () => {
  const r = variations([0, -3, 0, 1]);
  assert.deepEqual(r.zeros, [-1, 1]);
  const types = r.extremums.map((e) => e.type);
  assert.deepEqual(types, ['maximum', 'minimum']);
  assert.equal(r.extremums[0].y, 2, 'f(−1) = 2');
  assert.equal(r.extremums[1].y, -2, 'f(1) = −2');
});

test('x³ : f′ s’annule en 0 SANS changer de signe → pas d’extrémum', () => {
  const r = variations([0, 0, 0, 1]);
  assert.deepEqual(r.zeros, [0]);
  assert.equal(r.extremums[0].type, 'aucun');
  assert.ok(r.etapes.some((e) => /PAS d’extrémum/.test(e.detail)));
});

test('parabole tournée vers le haut : décroissante puis croissante', () => {
  const r = variations([1, -4, 1]); // x² − 4x + 1
  assert.deepEqual(r.zeros, [2]);
  assert.equal(r.extremums[0].type, 'minimum');
  assert.equal(r.intervalles[0].sens, 'décroissante');
  assert.equal(r.intervalles[1].sens, 'croissante');
});

test('parabole tournée vers le bas : maximum', () => {
  const r = variations([-3, 8, -2]); // −2x² + 8x − 3
  assert.equal(r.zeros[0], 2);
  assert.equal(r.extremums[0].type, 'maximum');
});

test('dérivée de signe constant : fonction monotone sur ℝ', () => {
  const r = variations([0, 3]); // f(x) = 3x, f′ = 3
  assert.deepEqual(r.zeros, []);
  assert.equal(r.intervalles[0].sens, 'croissante');
});

test('dérivée de degré 3 : l’outil refuse plutôt que d’inventer', () => {
  const r = variations([0, 0, 0, 0, 1]); // x⁴, f′ = 4x³
  assert.equal(r.valide, false);
  assert.match(r.erreur, /ne sait pas/);
});

// ──────────────────────────── règles non polynomiales ───────────────────────

test('les règles rappellent la formule et le piège', () => {
  assert.match(regle('produit').formule, /u′v \+ uv′/);
  assert.match(regle('produit').piege, /PAS u′v′/);
  assert.match(regle('quotient').piege, /ordre du numérateur/i);
  assert.match(regle('affineComposee').piege, /facteur a/);
});

test('type de règle inconnu : message utile', () => {
  const r = regle('inexistant');
  assert.equal(r.valide, false);
  assert.match(r.erreur, /Types disponibles/);
});
