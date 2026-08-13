/**
 * Tests du module d'arithmétique.
 * Lancer :  cd app && node --test lib/arithmetique.test.js
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  divisionEuclidienne, divise, diviseurs, pgcdEuclide, ppcm,
  bezout, reduireModulo, inverseModulaire, resoudreCongruence,
  estPremier, decompositionFacteurs,
} from './arithmetique.js';

// ── division euclidienne ──
test('division euclidienne simple : 17 = 5×3 + 2', () => {
  const r = divisionEuclidienne(17, 5);
  assert.equal(r.valide, true);
  assert.equal(r.quotient, 3);
  assert.equal(r.reste, 2);
});

test('dividende négatif : reste toujours positif (−17 = 5×(−4) + 3)', () => {
  const r = divisionEuclidienne(-17, 5);
  assert.equal(r.quotient, -4);
  assert.equal(r.reste, 3);
  assert.ok(r.reste >= 0 && r.reste < 5);
});

test('division par zéro refusée en enseignant', () => {
  const r = divisionEuclidienne(10, 0);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /zéro/);
});

test('non-entiers refusés', () => {
  assert.equal(divisionEuclidienne(3.5, 2).valide, false);
  assert.equal(divisionEuclidienne('12', 5).valide, false);
});

// ── divisibilité ──
test('3 divise 51, 7 ne divise pas 51', () => {
  assert.equal(divise(3, 51).divise, true);
  assert.equal(divise(7, 51).divise, false);
});

test('diviseurs de 36 — liste complète ordonnée', () => {
  const r = diviseurs(36);
  assert.deepEqual(r.diviseurs, [1, 2, 3, 4, 6, 9, 12, 18, 36]);
  assert.equal(r.nombre, 9);
});

test('diviseurs de 0 refusés (liste infinie)', () => {
  assert.equal(diviseurs(0).valide, false);
});

// ── PGCD ──
test('PGCD(252, 105) = 21 par Euclide, étapes tracées', () => {
  const r = pgcdEuclide(252, 105);
  assert.equal(r.pgcd, 21);
  assert.equal(r.premiersEntreEux, false);
  assert.ok(r.etapes.length >= 3);
  assert.match(r.etapes[0].detail, /252 = 105 × 2 \+ 42/);
});

test('PGCD(35, 12) = 1 : premiers entre eux signalé', () => {
  const r = pgcdEuclide(35, 12);
  assert.equal(r.pgcd, 1);
  assert.equal(r.premiersEntreEux, true);
});

test('PGCD avec négatifs et zéro', () => {
  assert.equal(pgcdEuclide(-12, 18).pgcd, 6);
  assert.equal(pgcdEuclide(0, 7).pgcd, 7);
  assert.equal(pgcdEuclide(0, 0).valide, false);
});

test('PPCM(12, 18) = 36', () => {
  assert.equal(ppcm(12, 18).ppcm, 36);
});

// ── Bézout ──
test('Bézout : 252u + 105v = 21 vérifié', () => {
  const r = bezout(252, 105);
  assert.equal(r.pgcd, 21);
  assert.equal(252 * r.u + 105 * r.v, 21);
});

test('Bézout avec a négatif : identité toujours vraie', () => {
  const r = bezout(-252, 105);
  assert.equal(-252 * r.u + 105 * r.v, r.pgcd);
});

// ── congruences ──
test('réduction : −7 ≡ 5 [12]', () => {
  assert.equal(reduireModulo(-7, 12).reste, 5);
});

test('inverse de 7 modulo 26 : 15 (7×15 = 105 ≡ 1)', () => {
  const r = inverseModulaire(7, 26);
  assert.equal(r.valide, true);
  assert.equal(r.inverse, 15);
  assert.equal((7 * r.inverse) % 26, 1);
});

test('inverse inexistant : 6 modulo 9 (PGCD 3), refus qui cite Bézout', () => {
  const r = inverseModulaire(6, 9);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /Bézout/);
});

test('congruence 5x ≡ 3 [7] : solution unique x ≡ 2', () => {
  const r = resoudreCongruence(5, 3, 7);
  assert.deepEqual(r.solutions, [2]);
  assert.equal((5 * 2 - 3) % 7, 0);
});

test('congruence 6x ≡ 4 [8] : PGCD 2 divise 4, deux solutions', () => {
  const r = resoudreCongruence(6, 4, 8);
  assert.deepEqual(r.solutions, [2, 6]);
  for (const x of r.solutions) assert.equal(((6 * x - 4) % 8 + 8) % 8, 0);
});

test('congruence 6x ≡ 5 [8] : PGCD 2 ne divise pas 5, aucune solution', () => {
  const r = resoudreCongruence(6, 5, 8);
  assert.deepEqual(r.solutions, []);
});

// ── premiers ──
test('97 premier, 91 = 7×13 non premier, 1 et 0 non premiers', () => {
  assert.equal(estPremier(97).premier, true);
  assert.equal(estPremier(91).premier, false);
  assert.equal(estPremier(1).premier, false);
  assert.equal(estPremier(0).premier, false);
});

test('décomposition 360 = 2^3 × 3^2 × 5', () => {
  const r = decompositionFacteurs(360);
  assert.equal(r.texte, '2^3 × 3^2 × 5');
  assert.deepEqual(r.facteurs, [
    { premier: 2, exposant: 3 },
    { premier: 3, exposant: 2 },
    { premier: 5, exposant: 1 },
  ]);
});

test('décomposition d’un premier : lui-même', () => {
  assert.equal(decompositionFacteurs(97).texte, '97');
});

test('décomposition de 1 refusée', () => {
  assert.equal(decompositionFacteurs(1).valide, false);
});
