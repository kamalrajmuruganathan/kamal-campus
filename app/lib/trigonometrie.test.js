/**
 * Tests de trigonométrie.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant ; recoupent le QCM `trigonometrie`.
 * Tout est en RADIANS.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  degresVersRadians, radiansVersDegres, cosSin,
  relationFondamentale, angleAssocie, resoudre,
} from './trigonometrie.js';

const PI = Math.PI;

// ──────────────────────────── conversions ───────────────────────────────────

test('90° = π/2 radians', () => {
  const r = degresVersRadians(90);
  assert.ok(Math.abs(r.radians - PI / 2) < 1e-6);
  assert.equal(r.exact, 'π/2');
});

test('180° = π', () => {
  assert.equal(degresVersRadians(180).exact, 'π');
});

test('30° = π/6, 45° = π/4, 60° = π/3', () => {
  assert.equal(degresVersRadians(30).exact, 'π/6');
  assert.equal(degresVersRadians(45).exact, 'π/4');
  assert.equal(degresVersRadians(60).exact, 'π/3');
});

test('conversion inverse', () => {
  assert.ok(Math.abs(radiansVersDegres(PI).degres - 180) < 1e-6);
});

// ──────────────────────── valeurs remarquables ──────────────────────────────

test('cos et sin de π/3 — valeurs EXACTES', () => {
  const r = cosSin(PI / 3);
  assert.equal(r.remarquable, true);
  assert.equal(r.cosExact, '1/2');
  assert.equal(r.sinExact, '√3/2');
});

test('π/6 : le complémentaire de π/3, valeurs échangées', () => {
  const r = cosSin(PI / 6);
  assert.equal(r.cosExact, '√3/2');
  assert.equal(r.sinExact, '1/2');
});

test('π/4 : cosinus et sinus égaux', () => {
  const r = cosSin(PI / 4);
  assert.equal(r.cosExact, '√2/2');
  assert.equal(r.sinExact, '√2/2');
});

test('3π/4 : deuxième quadrant, cosinus négatif', () => {
  const r = cosSin((3 * PI) / 4);
  assert.equal(r.cosExact, '−√2/2');
  assert.equal(r.sinExact, '√2/2');
  assert.match(r.quadrant, /2e quadrant/);
});

test('2π/3 : cos = −1/2', () => {
  assert.equal(cosSin((2 * PI) / 3).cosExact, '−1/2');
});

test('valeurs aux axes', () => {
  assert.equal(cosSin(0).cosExact, '1');
  assert.equal(cosSin(0).sinExact, '0');
  assert.equal(cosSin(PI / 2).cosExact, '0');
  assert.equal(cosSin(PI).cosExact, '−1');
});

test('périodicité : x + 2π donne les mêmes valeurs', () => {
  const a = cosSin(PI / 3);
  const b = cosSin(PI / 3 + 2 * PI);
  assert.equal(a.cosExact, b.cosExact);
  assert.equal(a.sinExact, b.sinExact);
});

test('x + 4π aussi — deux tours complets', () => {
  assert.equal(cosSin(PI / 6 + 4 * PI).cosExact, '√3/2');
});

test('angle non remarquable : valeurs approchées, signalées', () => {
  const r = cosSin(1);
  assert.equal(r.remarquable, false);
  assert.equal(r.cosExact, null);
  assert.ok(Math.abs(r.cos - Math.cos(1)) < 1e-6);
});

test('la relation fondamentale est vérifiée dans les étapes', () => {
  const r = cosSin(1.234);
  assert.ok(r.etapes.some((e) => /cos² \+ sin²/.test(e.detail)));
});

// ──────────────────────── relation fondamentale ─────────────────────────────

test('cos = 3/5 et sin > 0 donne sin = 4/5', () => {
  const r = relationFondamentale(0.6, 'cos', 'positif');
  assert.ok(Math.abs(r.sin - 0.8) < 1e-9);
});

test('le signe demandé est respecté', () => {
  assert.ok(relationFondamentale(0.6, 'cos', 'negatif').sin < 0);
});

test('valeur hors [−1 ; 1] refusée avec explication', () => {
  const r = relationFondamentale(1.5, 'cos', 'positif');
  assert.equal(r.valide, false);
  assert.match(r.erreur, /cercle de rayon 1/);
});

// ───────────────────────────── angles associés ──────────────────────────────

test('angle opposé : cos paire, sin impaire', () => {
  const r = angleAssocie('oppose');
  assert.equal(r.cos, 'cos x');
  assert.equal(r.sin, '−sin x');
  assert.match(r.consequence, /PAIRE/);
});

test('supplémentaire : symétrie par rapport à l’axe des ordonnées', () => {
  const r = angleAssocie('supplementaire');
  assert.equal(r.cos, '−cos x');
  assert.equal(r.sin, 'sin x');
});

test('complémentaire : cosinus et sinus s’échangent', () => {
  const r = angleAssocie('complementaire');
  assert.equal(r.cos, 'sin x');
  assert.equal(r.sin, 'cos x');
});

test('l’outil conseille de lire sur le cercle plutôt que d’apprendre par cœur', () => {
  assert.match(angleAssocie('oppose').conseil, /cercle/);
});

test('type inconnu refusé', () => {
  assert.equal(angleAssocie('inexistant').valide, false);
});

// ─────────────────────── équations trigonométriques ─────────────────────────

test('cos x = 1/2 sur [0 ; 2π[', () => {
  const r = resoudre('cos', 0.5);
  assert.equal(r.solutions.length, 2);
  assert.ok(Math.abs(r.solutions[0] - PI / 3) < 1e-6);
  assert.ok(Math.abs(r.solutions[1] - (5 * PI) / 3) < 1e-6);
});

test('cos x = 1 : une seule solution', () => {
  assert.equal(resoudre('cos', 1).solutions.length, 1);
});

test('cos x = 1,5 : AUCUNE solution, et l’outil dit pourquoi', () => {
  const r = resoudre('cos', 1.5);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /entre −1 et 1/);
});

test('sin x = 1/2 sur [0 ; 2π[', () => {
  const r = resoudre('sin', 0.5);
  assert.equal(r.solutions.length, 2);
  assert.ok(Math.abs(r.solutions[0] - PI / 6) < 1e-6);
  assert.ok(Math.abs(r.solutions[1] - (5 * PI) / 6) < 1e-6);
});

test('l’outil rappelle le « + 2kπ »', () => {
  const r = resoudre('cos', 0.5);
  assert.ok(r.etapes.some((e) => /2kπ/.test(e.detail)));
});
