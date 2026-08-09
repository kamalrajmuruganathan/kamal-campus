/**
 * Tests des indicateurs statistiques.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant, et recoupés avec les QCM du
 * chapitre `statistiques`.
 *
 * ⚠️ Les quartiles suivent la convention du lycée français (arrondi au rang
 * supérieur). Une autre convention donnerait d'autres valeurs — voir l'en-tête
 * de statistiques.js.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  analyserSerie,
  mediane,
  quartile,
  transformationAffine,
  frequences,
} from './statistiques.js';

// ───────────────────────────── validations ──────────────────────────────────

test('série vide refusée', () => {
  const r = analyserSerie([]);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /vide/);
});

test('valeurs non numériques refusées', () => {
  assert.equal(analyserSerie([1, 'deux', 3]).valide, false);
});

test('effectifs de longueur incohérente refusés', () => {
  const r = analyserSerie([1, 2, 3], [1, 2]);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /autant d’effectifs/);
});

test('effectifs négatifs ou non entiers refusés', () => {
  assert.equal(analyserSerie([1, 2], [1, -1]).valide, false);
  assert.equal(analyserSerie([1, 2], [1, 1.5]).valide, false);
});

// ─────────────────────────────── moyenne ────────────────────────────────────

test('moyenne simple', () => {
  assert.equal(analyserSerie([4, 7, 10, 11]).moyenne, 8);
});

test('moyenne pondérée — les effectifs sont bien pris en compte', () => {
  const r = analyserSerie([12, 15], [10, 20]);
  assert.equal(r.effectifTotal, 30);
  assert.equal(r.moyenne, 14, 'et non 13,5 qui ignorerait les effectifs');
});

// ─────────────────────────────── médiane ────────────────────────────────────

test('médiane, effectif impair — la série est triée automatiquement', () => {
  const r = analyserSerie([12, 3, 8, 15, 6]);
  assert.deepEqual(r.serieOrdonnee, [3, 6, 8, 12, 15]);
  assert.equal(r.mediane, 8);
});

test('médiane, effectif pair — moyenne des deux valeurs centrales', () => {
  assert.equal(analyserSerie([2, 5, 9, 13]).mediane, 7);
});

test('médiane sur une série non triée en entrée', () => {
  assert.equal(mediane([1, 2, 3, 4, 5]), 3);
  assert.equal(mediane([1, 2, 3, 4]), 2.5);
});

// ─────────────────────────────── dispersion ─────────────────────────────────

test('étendue', () => {
  assert.equal(analyserSerie([4, 18, 7, 25, 11]).etendue, 21);
});

test('quartiles et écart interquartile', () => {
  const r = analyserSerie([3, 6, 8, 12, 15]);
  assert.equal(r.q1, 6);
  assert.equal(r.q3, 12);
  assert.equal(r.interquartile, 6);
});

test('quartiles quand N est divisible par 4', () => {
  const s = [1, 2, 3, 4, 5, 6, 7, 8];
  assert.equal(quartile(s, 1), 2, 'N/4 = 2 entier → rang 2');
  assert.equal(quartile(s, 3), 6, '3N/4 = 6 entier → rang 6');
});

// ──────────────────────── robustesse aux valeurs extrêmes ───────────────────

test('une valeur extrême décale la moyenne mais pas la médiane', () => {
  const sans = analyserSerie([3, 5, 8, 9, 10]);
  const avec = analyserSerie([3, 5, 8, 9, 40]);
  assert.equal(sans.mediane, avec.mediane, 'la médiane est robuste');
  assert.ok(avec.moyenne > sans.moyenne, 'la moyenne est tirée vers le haut');
});

test('série asymétrique — l’outil recommande la médiane', () => {
  const r = analyserSerie([3, 5, 8, 9, 40]);
  assert.match(r.conseil, /MÉDIANE/);
});

test('série symétrique — les deux indicateurs se valent', () => {
  const r = analyserSerie([10, 11, 12, 13, 14]);
  assert.match(r.conseil, /se valent/);
});

// ─────────────────────────────── modes ──────────────────────────────────────

test('mode unique et modes multiples', () => {
  assert.deepEqual(analyserSerie([1, 2, 3], [2, 5, 1]).modes, [2]);
  assert.deepEqual(analyserSerie([1, 2, 3], [4, 4, 1]).modes, [1, 2]);
});

// ────────────────────────── transformation affine ───────────────────────────

test('ajouter b décale la moyenne sans toucher la dispersion', () => {
  const s = analyserSerie([10, 12, 14]);
  const t = transformationAffine(s, 1, 3);
  assert.equal(t.moyenne, s.moyenne + 3);
  assert.equal(t.etendue, s.etendue, 'une translation ne change pas la dispersion');
});

test('multiplier par a multiplie la dispersion par |a|', () => {
  const s = analyserSerie([10, 12, 14]);
  const t = transformationAffine(s, 2, 0);
  assert.equal(t.moyenne, 2 * s.moyenne);
  assert.equal(t.etendue, 2 * s.etendue);
});

test('un coefficient négatif ne rend pas la dispersion négative', () => {
  const s = analyserSerie([10, 12, 14]);
  const t = transformationAffine(s, -2, 5);
  assert.ok(t.etendue > 0, 'la dispersion utilise |a|');
});

// ─────────────────────────────── fréquences ─────────────────────────────────

test('fréquences et contrôle Σfᵢ = 1', () => {
  const r = frequences([10, 20, 20]);
  assert.equal(r.effectifTotal, 50);
  assert.deepEqual(r.pourcentages, [20, 40, 40]);
  assert.equal(r.controle, true);
});

test('effectif total nul refusé', () => {
  assert.equal(frequences([0, 0]).valide, false);
});

// ────────────────────────────── étapes fournies ─────────────────────────────

test('l’analyse expose des étapes, dont le rappel d’ordonner la série', () => {
  const r = analyserSerie([12, 3, 8]);
  assert.ok(r.etapes.length > 0);
  assert.ok(r.etapes.some((e) => /Ordonner la série/.test(e.remarque ?? '')));
});
