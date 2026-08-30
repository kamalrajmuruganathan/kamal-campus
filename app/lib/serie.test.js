import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  dateLocale, veille, estConsecutif, serieAffichee, appliquerXpJour,
} from './serie.js';

test('dateLocale formate en AAAA-MM-JJ (local)', () => {
  // mois 0-indexé : 2 = mars
  assert.equal(dateLocale(new Date(2026, 2, 5)), '2026-03-05');
  assert.equal(dateLocale(new Date(2026, 11, 31)), '2026-12-31');
});

test('veille recule d’un jour, y compris aux changements de mois/an', () => {
  assert.equal(veille('2026-03-05'), '2026-03-04');
  assert.equal(veille('2026-03-01'), '2026-02-28');
  assert.equal(veille('2026-01-01'), '2025-12-31');
});

test('estConsecutif détecte deux jours qui se suivent', () => {
  assert.equal(estConsecutif('2026-03-04', '2026-03-05'), true);
  assert.equal(estConsecutif('2026-03-03', '2026-03-05'), false);
  assert.equal(estConsecutif(null, '2026-03-05'), false);
});

test('serieAffichee : vivante aujourd’hui ou hier, cassée au-delà', () => {
  assert.equal(serieAffichee('2026-03-05', 4, '2026-03-05'), 4); // aujourd'hui
  assert.equal(serieAffichee('2026-03-04', 4, '2026-03-05'), 4); // hier → encore vivante
  assert.equal(serieAffichee('2026-03-03', 4, '2026-03-05'), 0); // trou → cassée
  assert.equal(serieAffichee(null, 0, '2026-03-05'), 0);
});

const base = {
  objectifQuotidien: 50,
  jourCourant: '2026-03-05',
  xpDuJour: 0,
  serieJours: 0,
  dernierJourValide: null,
  meilleureSerieJours: 0,
};

test('atteindre l’objectif démarre la série à 1', () => {
  const r = appliquerXpJour(base, 60, '2026-03-05');
  assert.equal(r.objectifAtteintMaintenant, true);
  assert.equal(r.serieJours, 1);
  assert.equal(r.dernierJourValide, '2026-03-05');
  assert.equal(r.meilleureSerieJours, 1);
});

test('gagner de l’XP sous l’objectif ne valide pas le jour', () => {
  const r = appliquerXpJour(base, 30, '2026-03-05');
  assert.equal(r.objectifAtteintMaintenant, false);
  assert.equal(r.serieJours, 0);
  assert.equal(r.xpDuJour, 30);
  assert.equal(r.dernierJourValide, null);
});

test('le second gain du même jour ne recompte pas la série', () => {
  const j1 = appliquerXpJour(base, 60, '2026-03-05');
  const j1b = appliquerXpJour(j1, 40, '2026-03-05');
  assert.equal(j1b.objectifAtteintMaintenant, false);
  assert.equal(j1b.serieJours, 1);
  assert.equal(j1b.xpDuJour, 100);
});

test('un jour consécutif prolonge la série', () => {
  const j1 = appliquerXpJour(base, 60, '2026-03-05');
  const j2 = appliquerXpJour(j1, 55, '2026-03-06');
  assert.equal(j2.serieJours, 2);
  assert.equal(j2.xpDuJour, 55); // compteur du jour remis à zéro puis +55
  assert.equal(j2.meilleureSerieJours, 2);
});

test('un jour manqué casse la série (repart à 1)', () => {
  const j1 = appliquerXpJour(base, 60, '2026-03-05');
  // on saute le 6, on revient le 7
  const j3 = appliquerXpJour(j1, 60, '2026-03-07');
  assert.equal(j3.serieJours, 1);
  assert.equal(j3.meilleureSerieJours, 1); // le meilleur reste au moins 1
});

test('la meilleure série est conservée même quand la courante retombe', () => {
  let e = base;
  e = appliquerXpJour(e, 60, '2026-03-05'); // 1
  e = appliquerXpJour(e, 60, '2026-03-06'); // 2
  e = appliquerXpJour(e, 60, '2026-03-07'); // 3
  e = appliquerXpJour(e, 60, '2026-03-10'); // trou → 1
  assert.equal(e.serieJours, 1);
  assert.equal(e.meilleureSerieJours, 3);
});
