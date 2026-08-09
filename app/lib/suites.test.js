/**
 * Tests des suites arithmétiques et géométriques.
 * Lancer :  cd app && node --test lib/
 *
 * Ces cas ont été vérifiés par un portage Perl indépendant avant livraison,
 * et recoupent les réponses des QCM du chapitre `suites-numeriques`.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  suiteArithmetique,
  suiteGeometrique,
  reconnaitreNature,
  raisonDepuisTaux,
  sommeEntiers,
} from './suites.js';

// ───────────────────────────── validations ──────────────────────────────────

test('rang inférieur à l’indice de départ : refusé en expliquant', () => {
  const r = suiteArithmetique(5, 3, 2, 10);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /n’existe pas/);
});

test('raison géométrique nulle refusée', () => {
  const r = suiteGeometrique(5, 0, 3);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /non nulle/);
});

test('rang non entier refusé', () => {
  assert.equal(suiteArithmetique(5, 3, 2.5).valide, false);
});

// ───────────────────────── suites arithmétiques ─────────────────────────────

test('terme d’une suite arithmétique — départ à u₀', () => {
  const r = suiteArithmetique(5, 3, 20);
  assert.equal(r.terme.valeur, 65);
  assert.equal(r.variation, 'croissante');
});

test('indice de départ à u₁ — le décalage est bien pris en compte', () => {
  const r = suiteArithmetique(10, 4, 7, 1);
  assert.equal(r.terme.valeur, 34, 'u₇ = u₁ + 6r, pas u₁ + 7r');
  assert.equal(r.nombreDeTermes, 7);
});

test('raison négative — suite décroissante', () => {
  const r = suiteArithmetique(100, -5, 10);
  assert.equal(r.terme.valeur, 50);
  assert.equal(r.variation, 'decroissante');
});

test('raison nulle — suite constante', () => {
  assert.equal(suiteArithmetique(7, 0, 99).variation, 'constante');
});

test('somme des termes d’une suite arithmétique', () => {
  const r = suiteArithmetique(1, 1, 100, 1); // 1 + 2 + … + 100
  assert.equal(r.nombreDeTermes, 100);
  assert.equal(r.somme.valeur, 5050);
});

// ────────────────────────── suites géométriques ─────────────────────────────

test('terme d’une suite géométrique', () => {
  const r = suiteGeometrique(3, 2, 5);
  assert.equal(r.terme.valeur, 96);
  assert.equal(r.variation, 'croissante');
});

test('somme géométrique — l’exposant est le NOMBRE de termes', () => {
  const r = suiteGeometrique(1, 2, 10); // 1 + 2 + 4 + … + 2¹⁰
  assert.equal(r.nombreDeTermes, 11);
  assert.equal(r.somme.valeur, 2047, 'et non 1023, qui s’arrêterait à 2⁹');
});

test('raison entre 0 et 1 avec premier terme positif — décroissante vers 0', () => {
  const r = suiteGeometrique(100, 0.5, 3);
  assert.equal(r.terme.valeur, 12.5);
  assert.equal(r.variation, 'decroissante');
  assert.match(r.limite, /se rapprochent de 0/);
});

test('raison négative — suite alternée, ni croissante ni décroissante', () => {
  const r = suiteGeometrique(100, -2, 3);
  assert.equal(r.variation, 'alternee');
  assert.equal(r.terme.valeur, -800);
});

test('capital placé à 3 % pendant 10 ans', () => {
  const r = suiteGeometrique(2000, 1.03, 10);
  assert.ok(Math.abs(r.terme.valeur - 2687.83) < 0.01);
});

test('raison égale à 1 — suite constante, somme simple', () => {
  const r = suiteGeometrique(7, 1, 4);
  assert.equal(r.variation, 'constante');
  assert.equal(r.somme.valeur, 35, '5 termes égaux à 7');
});

// ─────────────────────────── reconnaître la nature ──────────────────────────

test('reconnaît une suite arithmétique', () => {
  const r = reconnaitreNature([7, 11, 15, 19]);
  assert.equal(r.nature, 'arithmetique');
  assert.equal(r.raison.valeur, 4);
});

test('reconnaît une suite géométrique', () => {
  const r = reconnaitreNature([2, 6, 18, 54]);
  assert.equal(r.nature, 'geometrique');
  assert.equal(r.raison.valeur, 3);
});

test('reconnaît une suite qui n’est ni l’une ni l’autre', () => {
  assert.equal(reconnaitreNature([1, 4, 9, 16]).nature, 'ni-l-un-ni-l-autre');
});

test('moins de trois termes : on ne peut pas conclure', () => {
  const r = reconnaitreNature([2, 4]);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /trois termes/);
});

test('un terme nul n’empêche pas de conclure à l’arithmétique', () => {
  const r = reconnaitreNature([-4, 0, 4, 8]);
  assert.equal(r.nature, 'arithmetique');
  assert.equal(r.raison.valeur, 4);
});

// ──────────────────────── taux d’évolution → raison ─────────────────────────

test('une baisse de 20 % donne q = 0,8 — et non −0,2', () => {
  const r = raisonDepuisTaux(-20);
  assert.equal(r.raison.valeur, 0.8);
  assert.match(r.etapes.at(-1).detail, /POSITIVE/);
});

test('une hausse de 3 % donne q = 1,03', () => {
  assert.equal(raisonDepuisTaux(3).raison.valeur, 1.03);
});

test('une baisse de 100 % ou plus est refusée', () => {
  assert.equal(raisonDepuisTaux(-100).valide, false);
  assert.equal(raisonDepuisTaux(-150).valide, false);
});

// ───────────────────────── somme des n premiers entiers ─────────────────────

test('somme des n premiers entiers', () => {
  assert.equal(sommeEntiers(100).somme.valeur, 5050);
  assert.equal(sommeEntiers(50).somme.valeur, 1275);
  assert.equal(sommeEntiers(1).somme.valeur, 1);
});

test('n doit être un entier positif', () => {
  assert.equal(sommeEntiers(0).valide, false);
  assert.equal(sommeEntiers(-3).valide, false);
  assert.equal(sommeEntiers(2.5).valide, false);
});

// ────────────────────────────── étapes fournies ─────────────────────────────

test('chaque résultat valide expose des étapes de raisonnement', () => {
  for (const r of [
    suiteArithmetique(5, 3, 20),
    suiteGeometrique(3, 2, 5),
    reconnaitreNature([2, 6, 18, 54]),
    raisonDepuisTaux(-20),
    sommeEntiers(10),
  ]) {
    assert.ok(Array.isArray(r.etapes) && r.etapes.length > 0);
  }
});
