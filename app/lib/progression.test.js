/**
 * Tests de la logique de progression (points, niveaux, rangs).
 * Lancés par `npm test` (node --test lib/*.test.js).
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  pointsQuestion,
  pointsSession,
  meilleureSerie,
  coutNiveau,
  xpPourNiveau,
  niveauPourXp,
  rang,
  POINTS_PAR_DIFFICULTE,
} from './progression.js';

test('pointsQuestion suit la table de difficulté', () => {
  assert.equal(pointsQuestion('facile'), 8);
  assert.equal(pointsQuestion('moyen'), 11);
  assert.equal(pointsQuestion('difficile'), 14);
  assert.equal(pointsQuestion('application'), 10);
  assert.equal(pointsQuestion('intermediaire'), 12);
  assert.equal(pointsQuestion('approfondissement'), 14);
  assert.equal(pointsQuestion('bac'), 18);
  assert.equal(pointsQuestion('brevet'), 18);
});

test('les étiquettes de QCM (facile/moyen/difficile) sont ordonnées', () => {
  assert.ok(pointsQuestion('facile') < pointsQuestion('moyen'));
  assert.ok(pointsQuestion('moyen') < pointsQuestion('difficile'));
});

test('pointsQuestion tombe sur la valeur par défaut si difficulté inconnue ou absente', () => {
  assert.equal(pointsQuestion('inexistant'), 10);
  assert.equal(pointsQuestion(undefined), 10);
});

test('pointsSession : session parfaite applique le bonus sans-faute (×1,5)', () => {
  const questions = [{ difficulte: 'application' }, { difficulte: 'application' }];
  const reponses = [{ juste: true }, { juste: true }];
  const r = pointsSession(questions, reponses);
  // base = 10 + 10 = 20 ; sans-faute → ×1,5 = 30
  assert.equal(r.points, 30);
  assert.equal(r.justes, 2);
  assert.equal(r.total, 2);
  assert.equal(r.sansFaute, true);
  assert.equal(r.taux, 1);
});

test('pointsSession : ≥ 80 % applique le bonus (×1,2) sans être un sans-faute', () => {
  // 4 bonnes sur 5 = 80 %
  const questions = Array.from({ length: 5 }, () => ({ difficulte: 'application' }));
  const reponses = [
    { juste: true }, { juste: true }, { juste: true }, { juste: true }, { juste: false },
  ];
  const r = pointsSession(questions, reponses);
  // base = 4 × 10 = 40 ; ×1,2 = 48
  assert.equal(r.points, 48);
  assert.equal(r.sansFaute, false);
});

test('pointsSession : sous 80 %, pas de bonus, et jamais négatif', () => {
  const questions = Array.from({ length: 5 }, () => ({ difficulte: 'application' }));
  const reponses = [
    { juste: true }, { juste: false }, { juste: false }, { juste: false }, { juste: false },
  ];
  const r = pointsSession(questions, reponses);
  assert.equal(r.points, 10); // 1 bonne, pas de bonus
});

test('pointsSession : zéro bonne réponse rapporte zéro (pas de points négatifs)', () => {
  const questions = [{ difficulte: 'bac' }, { difficulte: 'facile' }];
  const reponses = [{ juste: false }, { juste: false }];
  const r = pointsSession(questions, reponses);
  assert.equal(r.points, 0);
  assert.equal(r.justes, 0);
});

test('pointsSession : difficulté plus élevée rapporte davantage', () => {
  const facile = pointsSession([{ difficulte: 'facile' }], [{ juste: true }]);
  const dur = pointsSession([{ difficulte: 'bac' }], [{ juste: true }]);
  assert.ok(dur.points > facile.points);
});

test('meilleureSerie compte la plus longue suite de bonnes réponses', () => {
  const reponses = [
    { juste: true }, { juste: true }, { juste: false },
    { juste: true }, { juste: true }, { juste: true }, { juste: false },
  ];
  assert.equal(meilleureSerie(reponses), 3);
  assert.equal(meilleureSerie([]), 0);
  assert.equal(meilleureSerie([{ juste: false }]), 0);
});

test('coutNiveau croît de 50 XP par niveau', () => {
  assert.equal(coutNiveau(1), 100);
  assert.equal(coutNiveau(2), 150);
  assert.equal(coutNiveau(3), 200);
});

test('xpPourNiveau cumule les coûts', () => {
  assert.equal(xpPourNiveau(1), 0);
  assert.equal(xpPourNiveau(2), 100);
  assert.equal(xpPourNiveau(3), 250);
  assert.equal(xpPourNiveau(4), 450);
  assert.equal(xpPourNiveau(5), 700);
});

test('niveauPourXp place correctement le curseur dans la marche', () => {
  const a = niveauPourXp(0);
  assert.equal(a.niveau, 1);
  assert.equal(a.xpDansNiveau, 0);
  assert.equal(a.xpProchainNiveau, 100);
  assert.equal(a.progression, 0);

  const b = niveauPourXp(50);
  assert.equal(b.niveau, 1);
  assert.equal(b.xpDansNiveau, 50);
  assert.equal(b.progression, 0.5);

  const c = niveauPourXp(100);
  assert.equal(c.niveau, 2);
  assert.equal(c.xpDansNiveau, 0);

  const d = niveauPourXp(250);
  assert.equal(d.niveau, 3);
});

test('niveauPourXp est robuste aux entrées invalides', () => {
  assert.equal(niveauPourXp(undefined).niveau, 1);
  assert.equal(niveauPourXp(-40).niveau, 1);
  assert.equal(niveauPourXp(NaN).niveau, 1);
});

test('rang renvoie un titre encourageant par palier', () => {
  assert.equal(rang(1), 'Débutant');
  assert.equal(rang(2), 'Débutant');
  assert.equal(rang(3), 'Apprenti');
  assert.equal(rang(6), 'Confirmé');
  assert.equal(rang(10), 'Chevronné');
  assert.equal(rang(15), 'Expert');
  assert.equal(rang(21), 'Maître');
  assert.equal(rang(28), 'Génie');
  assert.equal(rang(100), 'Génie');
});

test('la table de difficulté reste cohérente (ordre croissant attendu)', () => {
  assert.ok(POINTS_PAR_DIFFICULTE.facile < POINTS_PAR_DIFFICULTE.application);
  assert.ok(POINTS_PAR_DIFFICULTE.application < POINTS_PAR_DIFFICULTE.intermediaire);
  assert.ok(POINTS_PAR_DIFFICULTE.intermediaire < POINTS_PAR_DIFFICULTE.approfondissement);
  assert.ok(POINTS_PAR_DIFFICULTE.approfondissement < POINTS_PAR_DIFFICULTE.bac);
});
