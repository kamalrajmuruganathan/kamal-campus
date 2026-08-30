import { test } from 'node:test';
import assert from 'node:assert/strict';
import { poserAddition, poserSoustraction, poserMultiplication, poserDepuisTexte } from './poser.js';

test('poserAddition : résultat correct et retenue expliquée', () => {
  const r = poserAddition(47, 85);
  assert.equal(r.resultat, 132);
  assert.ok(r.etapes.some((e) => e.includes('retiens')), 'une retenue doit apparaître');
  assert.equal(r.etapes[r.etapes.length - 1], 'Résultat : 47 + 85 = 132.');
});

test('poserAddition : sans retenue', () => {
  const r = poserAddition(21, 34);
  assert.equal(r.resultat, 55);
});

test('poserSoustraction : emprunt expliqué', () => {
  const r = poserSoustraction(52, 27);
  assert.equal(r.resultat, 25);
  assert.ok(r.etapes.some((e) => e.includes('emprunte')), 'un emprunt doit apparaître');
});

test('poserSoustraction : sans emprunt', () => {
  assert.equal(poserSoustraction(78, 25).resultat, 53);
});

test('poserMultiplication : produits partiels et somme', () => {
  const r = poserMultiplication(24, 13);
  assert.equal(r.resultat, 312);
  assert.ok(r.etapes.some((e) => e.includes('produits partiels')), 'la somme des partiels doit apparaître');
});

test('poserMultiplication : par un chiffre', () => {
  assert.equal(poserMultiplication(123, 4).resultat, 492);
});

test('poserDepuisTexte reconnaît + − × entre entiers', () => {
  assert.ok(poserDepuisTexte('47+85'));
  assert.ok(poserDepuisTexte('52-27'));
  assert.ok(poserDepuisTexte('24*13'));
  assert.equal(poserDepuisTexte('3-9'), null); // soustraction négative : non posée
  assert.equal(poserDepuisTexte('2x+1'), null);
  assert.equal(poserDepuisTexte('10/2'), null);
});
