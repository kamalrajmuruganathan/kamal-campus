/**
 * Tests des probabilités.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant ; les valeurs recoupent les QCM
 * `probabilites` (Seconde), `probabilites-conditionnelles` et
 * `variables-aleatoires` (Première).
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  probabiliteEquiprobable, contraire, union, independants,
  conditionnelle, arbrePondere, bernoulli, verifierLoi,
  variableAleatoire, transformationAffineVA,
} from './probabilites.js';

// ───────────────────────────── équiprobabilité ──────────────────────────────

test('probabilité en situation d’équiprobabilité', () => {
  const r = probabiliteEquiprobable(3, 6);
  assert.equal(r.probabilite, 0.5);
  assert.equal(r.fraction, '1/2');
});

test('sans équiprobabilité, l’outil REFUSE de calculer', () => {
  const r = probabiliteEquiprobable(3, 5, false);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /FAUSSE/);
});

test('favorables hors bornes refusés', () => {
  assert.equal(probabiliteEquiprobable(7, 6).valide, false);
  assert.equal(probabiliteEquiprobable(-1, 6).valide, false);
  assert.equal(probabiliteEquiprobable(1, 0).valide, false);
});

// ──────────────────────── opérations sur événements ─────────────────────────

test('événement contraire', () => {
  assert.equal(contraire(0.3).probabilite, 0.7);
});

test('probabilité hors [0 ; 1] refusée', () => {
  assert.equal(contraire(1.2).valide, false);
  assert.equal(contraire(-0.1).valide, false);
});

test('union avec intersection', () => {
  assert.equal(union(0.5, 0.4, 0.2).probabilite, 0.7);
});

test('union sans intersection : événements supposés incompatibles, et c’est signalé', () => {
  const r = union(0.3, 0.4);
  assert.equal(r.probabilite, 0.7);
  assert.ok(r.etapes.some((e) => /INCOMPATIBLES/.test(e.detail)));
});

test('données incohérentes détectées', () => {
  assert.equal(union(0.8, 0.9, 0).valide, false, 'somme > 1');
  assert.equal(union(0.3, 0.4, 0.5).valide, false, 'intersection > min');
});

test('test d’indépendance', () => {
  assert.equal(independants(0.5, 0.3, 0.15).independants, true);
  assert.equal(independants(0.5, 0.3, 0.2).independants, false);
});

test('incompatibles ⟹ dépendants, et l’outil l’explique', () => {
  const r = independants(0.5, 0.3, 0);
  assert.equal(r.independants, false);
  assert.ok(r.etapes.some((e) => /presque des contraires/.test(e.detail)));
});

// ──────────────────────── probabilités conditionnelles ──────────────────────

test('probabilité conditionnelle', () => {
  assert.equal(conditionnelle(0.1, 0.4).probabilite, 0.25);
});

test('P(A) = 0 : conditionnelle non définie', () => {
  assert.equal(conditionnelle(0, 0).valide, false);
});

test('intersection supérieure à P(A) refusée', () => {
  assert.equal(conditionnelle(0.5, 0.3).valide, false);
});

test('l’outil met en garde contre l’inversion du conditionnement', () => {
  const r = conditionnelle(0.1, 0.4);
  assert.ok(r.etapes.some((e) => /P_B\(A\)/.test(e.detail)));
});

// ─────────────────────────── arbre pondéré ──────────────────────────────────

test('formule des probabilités totales', () => {
  const r = arbrePondere(0.6, 0.2, 0.5);
  assert.equal(r.pB, 0.32);
});

test('exemple de l’usine — recoupe le QCM', () => {
  const r = arbrePondere(0.7, 0.03, 0.08);
  assert.equal(r.pB, 0.045);
});

test('l’arbre fournit aussi le conditionnement inverse', () => {
  const r = arbrePondere(0.7, 0.03, 0.08);
  // arrondi() arrondit à 6 décimales dans tout le module : la tolérance suit
  assert.ok(Math.abs(r.pA_sachantB - 0.021 / 0.045) < 1e-6);
  assert.ok(r.etapes.some((e) => /ne pas confondre/i.test(e.remarque ?? '')));
});

// ──────────────────────────── Bernoulli ─────────────────────────────────────

test('exactement 2 succès sur 3, p = 0,5', () => {
  const r = bernoulli(3, 0.5, 2);
  assert.equal(r.nombreChemins, 3);
  assert.equal(r.probabilite, 0.375);
});

test('exactement 1 succès sur 3, p = 0,2', () => {
  const r = bernoulli(3, 0.2, 1);
  assert.equal(r.nombreChemins, 3);
  assert.ok(Math.abs(r.probabilite - 0.384) < 1e-9);
});

test('les chemins sont énumérés, pas seulement comptés', () => {
  const r = bernoulli(3, 0.5, 2);
  assert.equal(r.chemins.length, 3);
  r.chemins.forEach((c) => assert.equal([...c].filter((x) => x === 'S').length, 2));
});

test('n > 4 refusé : hors du programme de première', () => {
  const r = bernoulli(5, 0.5, 2);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /terminale/);
});

test('k hors bornes refusé', () => {
  assert.equal(bernoulli(3, 0.5, 4).valide, false);
  assert.equal(bernoulli(3, 0.5, -1).valide, false);
});

// ──────────────────────── loi de probabilité ────────────────────────────────

test('contrôle Σpᵢ = 1', () => {
  assert.equal(verifierLoi([0.5, 0.3, 0.2]).coherente, true);
  assert.equal(verifierLoi([0.5, 0.3]).coherente, false);
});

// ──────────────────────── variable aléatoire ────────────────────────────────

test('espérance et variance par König-Huygens', () => {
  const r = variableAleatoire([0, 1, 2], [0.5, 0.3, 0.2]);
  assert.equal(r.esperance, 0.7);
  assert.equal(r.esperanceCarres, 1.1);
  assert.ok(Math.abs(r.variance - 0.61) < 1e-9);
});

test('gain algébrique — la mise est bien retranchée', () => {
  const r = variableAleatoire([17, -3], [0.1, 0.9]);
  assert.equal(r.esperance, -1);
  assert.ok(r.etapes.some((e) => /perd/.test(e.detail)));
});

test('jeu équitable détecté', () => {
  const r = variableAleatoire([1, -1], [0.5, 0.5]);
  assert.equal(r.equitable, true);
  assert.ok(r.etapes.some((e) => /ÉQUITABLE/.test(e.detail)));
});

test('loi incohérente refusée avant tout calcul', () => {
  assert.equal(variableAleatoire([1, 2], [0.5, 0.2]).valide, false);
});

test('la variance n’est jamais négative', () => {
  const r = variableAleatoire([5, 5, 5], [0.2, 0.3, 0.5]);
  assert.equal(r.variance, 0, 'variable constante : dispersion nulle');
});

// ──────────────────── transformation affine d’une VA ────────────────────────

test('V(3X + 7) = 9·V(X) — le b n’intervient pas', () => {
  const r = transformationAffineVA(10, 5, 3, 7);
  assert.equal(r.esperance, 37);
  assert.equal(r.variance, 45);
  assert.ok(r.etapes.some((e) => /b n’intervient PAS/.test(e.remarque ?? '')));
});

test('coefficient négatif : écart-type positif via |a|', () => {
  const r = transformationAffineVA(10, 4, -3, 0);
  assert.equal(r.variance, 36);
  assert.equal(r.ecartType, 6);
});
