/**
 * Tests des outils de chimie.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant. Les valeurs recoupent les réponses
 * des QCM `description-matiere` (Seconde) et `transformations-matiere`
 * (Première).
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  masseMolaire,
  quantiteDepuisMasse,
  quantiteDepuisEntites,
  entitesDepuisQuantite,
  concentrationMolaire,
  concentrationMassique,
  convertirConcentrations,
  dilution,
  versLitres,
  N_A,
} from './chimie.js';

// ──────────────────────────── masse molaire ─────────────────────────────────

test('masse molaire de l’eau', () => {
  const r = masseMolaire('H2O');
  assert.equal(r.masseMolaire, 18);
  assert.deepEqual(r.composition, { H: 2, O: 1 });
});

test('masse molaire de l’acide sulfurique', () => {
  assert.equal(masseMolaire('H2SO4').masseMolaire, 98.1);
});

test('formule avec parenthèses', () => {
  const r = masseMolaire('Ca(OH)2');
  assert.equal(r.masseMolaire, 74.1);
  assert.deepEqual(r.composition, { Ca: 1, O: 2, H: 2 });
});

test('parenthèses imbriquées dans un sulfate', () => {
  // Al2(SO4)3 = 2×27 + 3×(32,1 + 4×16) = 54 + 3×96,1 = 342,3
  assert.equal(masseMolaire('Al2(SO4)3').masseMolaire, 342.3);
});

test('symbole à deux lettres correctement lu', () => {
  assert.equal(masseMolaire('NaCl').masseMolaire, 58.5);
  assert.deepEqual(masseMolaire('NaCl').composition, { Na: 1, Cl: 1 });
});

test('élément inconnu signalé plutôt qu’ignoré', () => {
  const r = masseMolaire('XyZ2');
  assert.equal(r.valide, false);
  assert.match(r.erreur, /inconnu/);
});

test('formule mal parenthésée refusée', () => {
  assert.equal(masseMolaire('Ca(OH2').valide, false);
  assert.equal(masseMolaire('CaOH)2').valide, false);
});

test('formule vide refusée', () => {
  assert.equal(masseMolaire('').valide, false);
});

// ──────────────────────── quantité de matière ───────────────────────────────

test('n = m / M', () => {
  const r = quantiteDepuisMasse(36, 18);
  assert.equal(r.quantite, 2);
  assert.ok(r.etapes.some((e) => /PLUS d’une mole/.test(e.detail)));
});

test('masse molaire nulle ou négative refusée', () => {
  assert.equal(quantiteDepuisMasse(10, 0).valide, false);
  assert.equal(quantiteDepuisMasse(10, -5).valide, false);
});

test('conversions quantité ↔ nombre d’entités', () => {
  const r = entitesDepuisQuantite(0.5);
  assert.ok(Math.abs(r.entites - 3.01e23) / 3.01e23 < 1e-6);
  const inv = quantiteDepuisEntites(N_A);
  assert.ok(Math.abs(inv.quantite - 1) < 1e-9);
});

// ──────────────────────────── conversions de volume ─────────────────────────

test('conversion des volumes en litres', () => {
  assert.equal(versLitres(250, 'mL').litres, 0.25);
  assert.equal(versLitres(1, 'L').litres, 1);
  assert.equal(versLitres(50, 'cL').litres, 0.5);
});

test('unité de volume inconnue : message explicite', () => {
  const r = versLitres(10, 'litres');
  assert.equal(r.valide, false);
  assert.match(r.erreur, /Unité de volume inconnue/);
});

// ──────────────────────────── concentrations ────────────────────────────────

test('concentration massique — la conversion en litres est faite', () => {
  const r = concentrationMassique(5, 250, 'mL');
  assert.equal(r.concentration, 20, '5 g dans 250 mL → 20 g·L⁻¹');
  assert.equal(r.volumeLitres, 0.25);
  assert.ok(r.etapes.some((e) => /PAR LITRE/.test(e.remarque ?? '')));
});

test('concentration molaire', () => {
  const r = concentrationMolaire(0.05, 500, 'mL');
  assert.equal(r.concentration, 0.1);
});

test('volume nul refusé', () => {
  assert.equal(concentrationMolaire(1, 0, 'L').valide, false);
});

test('l’outil rappelle que V est le volume de la SOLUTION', () => {
  const r = concentrationMolaire(1, 1, 'L');
  assert.ok(r.etapes.some((e) => /volume de la SOLUTION/.test(e.detail)));
});

test('cₘ = c × M', () => {
  const r = convertirConcentrations({ c: 0.2, M: 40 });
  assert.equal(r.concentration, 8);
  assert.ok(r.etapes.some((e) => /moles se simplifient/.test(e.detail)));
});

test('c = cₘ / M', () => {
  assert.equal(convertirConcentrations({ cm: 8, M: 40 }).concentration, 0.2);
});

test('fournir c ET cₘ est refusé', () => {
  assert.equal(convertirConcentrations({ c: 1, cm: 1, M: 10 }).valide, false);
});

// ────────────────────────────── dilution ───────────────────────────────────

test('dilution — volume de solution mère à prélever', () => {
  const r = dilution({ c1: 0.5, c2: 0.1, v2: 200, unite: 'mL' });
  assert.equal(r.manquant, 'V₁');
  assert.equal(r.valeur, 40);
  assert.equal(r.facteurDilution, 5);
});

test('dilution — concentration fille', () => {
  const r = dilution({ c1: 0.5, v1: 40, v2: 200, unite: 'mL' });
  assert.equal(r.manquant, 'c₂');
  assert.equal(r.valeur, 0.1);
});

test('dilution — protocole avec la bonne verrerie', () => {
  const r = dilution({ c1: 0.5, v1: 40, v2: 200, unite: 'mL' });
  assert.ok(r.protocole.some((s) => /PIPETTE JAUGÉE/.test(s)));
  assert.ok(r.protocole.some((s) => /FIOLE JAUGÉE/.test(s)));
});

test('il faut exactement trois grandeurs sur quatre', () => {
  assert.equal(dilution({ c1: 1, c2: 0.5 }).valide, false);
  assert.equal(dilution({ c1: 1, c2: 0.5, v1: 10, v2: 20 }).valide, false);
});

test('une « dilution » qui concentre est signalée', () => {
  const r = dilution({ c1: 0.1, c2: 0.5, v2: 100, unite: 'mL' });
  assert.equal(r.coherent, false);
  assert.ok(r.etapes.some((e) => /n’est pas une dilution/.test(e.detail)));
});

test('valeurs négatives ou nulles refusées', () => {
  assert.equal(dilution({ c1: -1, c2: 0.5, v2: 100 }).valide, false);
  assert.equal(dilution({ c1: 1, c2: 0, v2: 100 }).valide, false);
});
