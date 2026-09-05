import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  dureeConseillee,
  formaterChrono,
  tempsRestant,
  phaseChrono,
  appreciation,
  noter,
  SECONDES_PAR_QUESTION,
} from './index.js';

test('dureeConseillee : proportionnelle, arrondie à la minute, bornée', () => {
  assert.equal(dureeConseillee(20), 20 * SECONDES_PAR_QUESTION); // 1200 s = 20 min
  assert.equal(dureeConseillee(1), 5 * 60); // plancher 5 min
  assert.equal(dureeConseillee(0), 5 * 60); // aucun question → plancher
  assert.equal(dureeConseillee(1000), 60 * 60); // plafond 60 min
  assert.equal(dureeConseillee(10) % 60, 0); // toujours un multiple de 60
});

test('formaterChrono : m:ss, remplissage des secondes, négatif → 0:00', () => {
  assert.equal(formaterChrono(0), '0:00');
  assert.equal(formaterChrono(5), '0:05');
  assert.equal(formaterChrono(65), '1:05');
  assert.equal(formaterChrono(600), '10:00');
  assert.equal(formaterChrono(-3), '0:00');
});

test('tempsRestant : borné dans [0, duree]', () => {
  assert.equal(tempsRestant(120, 0), 120);
  assert.equal(tempsRestant(120, 30), 90);
  assert.equal(tempsRestant(120, 200), 0); // ne descend jamais sous 0
  assert.equal(tempsRestant(120, -5), 120);
});

test('phaseChrono : normal → attention → critique', () => {
  assert.equal(phaseChrono(1200, 1200), 'normal');
  assert.equal(phaseChrono(200, 1200), 'attention'); // ≤ 20 %
  assert.equal(phaseChrono(45, 1200), 'critique'); // dernière minute
  assert.equal(phaseChrono(60, 1200), 'critique'); // limite basse incluse
});

test('appreciation : paliers et bornage', () => {
  assert.equal(appreciation(95), 'Excellent');
  assert.equal(appreciation(80), 'Très bien');
  assert.equal(appreciation(65), 'Bien');
  assert.equal(appreciation(50), 'À consolider');
  assert.equal(appreciation(10), 'À retravailler');
  assert.equal(appreciation(150), 'Excellent'); // borné à 100
});

test('noter : recalcule la justesse et compte les sans-réponse comme fausses', () => {
  const questions = [{ reponse: 0 }, { reponse: 2 }, { reponse: 1 }, { reponse: 3 }];
  const reponses = [
    { choisi: 0 }, // juste
    { choisi: 1 }, // faux
    null, // sans réponse → faux
    { choisi: 3 }, // juste
  ];
  const r = noter(questions, reponses);
  assert.equal(r.total, 4);
  assert.equal(r.justes, 2);
  assert.equal(r.sansReponse, 1);
  assert.equal(r.pourcent, 50);
  assert.equal(r.appreciation, 'À consolider');
  assert.deepEqual(r.rates, [1, 2]);
});

test('noter : ne fait pas confiance à un drapeau juste fourni par l’appelant', () => {
  const questions = [{ reponse: 0 }];
  // l'appelant prétend « juste: true » mais a choisi la mauvaise case
  const r = noter(questions, [{ choisi: 1, juste: true }]);
  assert.equal(r.justes, 0);
  assert.equal(r.details[0].juste, false);
});

test('noter : examen vide → 0 %, aucun crash', () => {
  const r = noter([], []);
  assert.equal(r.total, 0);
  assert.equal(r.pourcent, 0);
  assert.deepEqual(r.rates, []);
});
