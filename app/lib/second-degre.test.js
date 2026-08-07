/**
 * Tests du solveur de second degré.
 *
 * Lancer :  cd app && node --test lib/
 * (nécessite Node.js 18+, non installé sur la machine au 2026-08-07)
 *
 * Ces cas ont été vérifiés à la main et par un portage Perl indépendant
 * avant livraison. Ils couvrent les trois natures de Δ, les fractions,
 * les coefficients négatifs et le cas invalide a = 0.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { resoudreSecondDegre, racineEvidente, deTelsNombres } from './second-degre.js';

const racines = (a, b, c) => resoudreSecondDegre(a, b, c).racines.map((r) => r.texte);

test('a = 0 est refusé — la fonction est affine, pas du second degré', () => {
  const r = resoudreSecondDegre(0, 3, 1);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /affine/);
});

test('coefficients non numériques refusés', () => {
  assert.equal(resoudreSecondDegre('1', 2, 3).valide, false);
  assert.equal(resoudreSecondDegre(NaN, 2, 3).valide, false);
});

test('Δ > 0 carré parfait — racines entières exactes', () => {
  assert.deepEqual(racines(1, -5, 4), ['1', '4']);
  assert.deepEqual(racines(1, 1, -6), ['-3', '2']);
  assert.deepEqual(racines(1, 0, -9), ['-3', '3']);
});

test('Δ > 0 — racines fractionnaires réduites, pas décimales', () => {
  assert.deepEqual(racines(2, -3, -2), ['-1/2', '2']);
  assert.deepEqual(racines(3, -2, -1), ['-1/3', '1']);
});

test('a < 0 — les racines restent triées par ordre croissant', () => {
  assert.deepEqual(racines(-2, 4, 6), ['-1', '3']);
});

test('Δ = 0 — racine double', () => {
  const r = resoudreSecondDegre(1, 6, 9);
  assert.equal(r.delta, 0);
  assert.equal(r.nature, 'racine-double');
  assert.deepEqual(r.racines.map((x) => x.texte), ['-3']);
});

test('Δ < 0 — aucune racine réelle, pas de forme factorisée', () => {
  const r = resoudreSecondDegre(1, 0, 1);
  assert.equal(r.delta, -4);
  assert.equal(r.nature, 'aucune-racine');
  assert.deepEqual(r.racines, []);
  assert.equal(r.formeFactorisee, null);
});

test('Δ non carré parfait — valeurs approchées, marquées non exactes', () => {
  const r = resoudreSecondDegre(1, -4, 1);
  assert.equal(r.delta, 12);
  assert.equal(r.racines[0].exact, false);
  assert.ok(r.racines[0].valeur < r.racines[1].valeur, 'racines triées');
  assert.ok(Math.abs(r.racines[0].valeur - 0.2679) < 1e-3);
  assert.ok(Math.abs(r.racines[1].valeur - 3.7321) < 1e-3);
});

test('somme et produit des racines restent exacts même si Δ ne l’est pas', () => {
  const r = resoudreSecondDegre(1, -4, 1);
  assert.equal(r.somme.texte, '4');
  assert.equal(r.produit.texte, '1');
  assert.equal(r.somme.exact, true);
});

test('somme = -b/a et produit = c/a', () => {
  const r = resoudreSecondDegre(2, -10, 8);
  assert.equal(r.somme.texte, '5');
  assert.equal(r.produit.texte, '4');
});

test('sommet de la parabole — cohérent avec la question 9 du QCM', () => {
  const r = resoudreSecondDegre(1, -4, 1);
  assert.equal(r.sommet.x.texte, '2');
  assert.equal(r.sommet.y.texte, '-3');
  assert.equal(r.sens, 'minimum');
});

test('a < 0 donne un maximum', () => {
  assert.equal(resoudreSecondDegre(-2, 4, 6).sens, 'maximum');
});

test('forme factorisée — le coefficient a n’est jamais oublié', () => {
  assert.equal(resoudreSecondDegre(2, -3, -2).formeFactorisee, '2(x + 1/2)(x - 2)');
  assert.equal(resoudreSecondDegre(-2, 4, 6).formeFactorisee, '-2(x + 1)(x - 3)');
  assert.equal(resoudreSecondDegre(1, -5, 4).formeFactorisee, '(x - 1)(x - 4)');
});

test('signe — du signe de a à l’extérieur des racines', () => {
  const p = resoudreSecondDegre(1, -5, 4).signe.intervalles.map((i) => i.signe);
  assert.deepEqual(p, ['+', '-', '+']);
  const n = resoudreSecondDegre(-2, 4, 6).signe.intervalles.map((i) => i.signe);
  assert.deepEqual(n, ['-', '+', '-']);
});

test('signe — Δ < 0 : signe constant sur ℝ', () => {
  assert.deepEqual(resoudreSecondDegre(1, 0, 1).signe.intervalles.map((i) => i.signe), ['+']);
});

test('racine évidente — stratégie 1 du programme', () => {
  assert.equal(racineEvidente(1, -5, 4), 1);
  assert.equal(racineEvidente(1, 1, -6), 2);
  assert.equal(racineEvidente(1, -4, 1), null, 'aucune racine simple ici');
});

test('deux nombres de somme s et produit p', () => {
  assert.deepEqual(deTelsNombres(9, 20).map((r) => r.texte), ['4', '5']);
  assert.deepEqual(deTelsNombres(7, 12).map((r) => r.texte), ['3', '4']);
  assert.equal(deTelsNombres(1, 10), null, 's² - 4p < 0 : ils n’existent pas');
});
