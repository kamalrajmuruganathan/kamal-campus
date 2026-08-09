/**
 * Tests de physique.
 * Lancer :  cd app && node --test lib/
 *
 * Vérifiés par portage Perl indépendant ; les valeurs recoupent les QCM
 * `mouvement-interactions`, `ondes-signaux` (Seconde et Première),
 * `energie-phenomenes-electriques` et `energie-phenomenes-mecaniques`.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  kmhVersMs, msVersKmh, poids, gravitation, vitesseMoyenne,
  energieCinetique, energiePotentielle, energieMecanique, chuteLibre, travail,
  loiOhm, puissanceElectrique, energieElectrique, effetJoule, generateurReel, rendement,
  onde, retard, lunette, vergence, CONSTANTES,
} from './physique.js';

// ──────────────────────────── conversions ───────────────────────────────────

test('90 km·h⁻¹ = 25 m·s⁻¹ (on DIVISE par 3,6)', () => {
  const r = kmhVersMs(90);
  assert.equal(r.valeur, 25);
  assert.ok(r.etapes.some((e) => /DIVISE/.test(e.detail)));
});

test('conversion inverse', () => {
  assert.equal(msVersKmh(25).valeur, 90);
});

// ─────────────────────────────── mécanique ──────────────────────────────────

test('poids d’un objet de 5 kg sur Terre', () => {
  const r = poids(5);
  assert.equal(r.poids, 49);
  assert.equal(r.unite, 'N');
});

test('l’outil rappelle que la masse ne change pas sur la Lune', () => {
  const r = poids(70);
  assert.ok(r.etapes.some((e) => /Lune/.test(e.detail)));
});

test('gravitation — dépendance en d², signalée', () => {
  const r = gravitation(5.97e24, 70, 6.37e6);
  assert.ok(r.force > 600 && r.force < 800, 'poids d’un humain à la surface terrestre');
  assert.ok(r.etapes.some((e) => /divise la force par 4/.test(e.detail)));
});

test('distance nulle refusée', () => {
  assert.equal(gravitation(1, 1, 0).valide, false);
});

test('vitesse moyenne', () => {
  const r = vitesseMoyenne(150, 30);
  assert.equal(r.vitesse, 5);
  assert.equal(r.vitesseKmh, 18);
});

test('durée nulle refusée', () => {
  assert.equal(vitesseMoyenne(100, 0).valide, false);
});

// ──────────────────────────────── énergies ──────────────────────────────────

test('énergie cinétique d’une voiture', () => {
  assert.equal(energieCinetique(1000, 20).energie, 200000);
});

test('doubler la vitesse quadruple Ec — et l’outil le dit', () => {
  const r = energieCinetique(1000, 20);
  assert.equal(energieCinetique(1000, 40).energie, 4 * r.energie);
  assert.ok(r.etapes.some((e) => /QUADRUPLE/.test(e.detail)));
});

test('énergie potentielle de pesanteur', () => {
  assert.equal(energiePotentielle(2, 5).energie, 98);
});

test('énergie mécanique = Ec + Epp', () => {
  const r = energieMecanique(2, 10, 5);
  assert.equal(r.energieCinetique, 100);
  assert.equal(r.energiePotentielle, 98);
  assert.equal(r.energieMecanique, 198);
});

test('chute libre — la masse se simplifie', () => {
  const r = chuteLibre(5);
  assert.ok(Math.abs(r.vitesse - 9.899) < 0.01);
  assert.ok(r.etapes.some((e) => /MASSE SE SIMPLIFIE/.test(e.detail)));
});

test('travail moteur, résistant et nul', () => {
  assert.equal(travail(10, 5, 0).nature, 'moteur');
  assert.equal(travail(10, 5, 180).nature, 'résistant');
  assert.equal(travail(10, 5, 90).nature, 'nul', 'force perpendiculaire au déplacement');
});

test('le travail à 90° est bien annoncé nul malgré l’arrondi flottant', () => {
  const r = travail(10, 5, 90);
  assert.equal(r.travail, 0);
  assert.ok(r.etapes.some((e) => /ne travaille pas/.test(e.detail)));
});

// ─────────────────────────────── électricité ────────────────────────────────

test('loi d’Ohm dans les trois sens', () => {
  assert.equal(loiOhm({ R: 50, I: 0.2 }).valeur, 10);
  assert.equal(loiOhm({ U: 10, I: 0.2 }).valeur, 50);
  assert.equal(loiOhm({ U: 10, R: 50 }).valeur, 0.2);
});

test('il faut exactement deux grandeurs sur trois', () => {
  assert.equal(loiOhm({ U: 10 }).valide, false);
  assert.equal(loiOhm({ U: 10, R: 5, I: 2 }).valide, false);
});

test('division par zéro évitée', () => {
  assert.equal(loiOhm({ U: 10, R: 0 }).valide, false);
  assert.equal(loiOhm({ U: 10, I: 0 }).valide, false);
});

test('puissance électrique', () => {
  const r = puissanceElectrique(230, 2);
  assert.equal(r.puissance, 460);
  assert.ok(r.etapes.some((e) => /PUISSANCE/.test(e.detail)));
});

test('énergie électrique — la durée est convertie en secondes', () => {
  const r = energieElectrique(100, 2, 'h');
  assert.equal(r.dureeSecondes, 7200);
  assert.equal(r.energie, 720000);
  assert.ok(r.etapes.some((e) => /SECONDES/.test(e.remarque ?? '')));
});

test('conversion en kWh', () => {
  const r = energieElectrique(1000, 1, 'h');
  assert.ok(Math.abs(r.energieKWh - 1) < 1e-6);
});

test('unité de durée inconnue refusée', () => {
  assert.equal(energieElectrique(100, 2, 'jours').valide, false);
});

test('effet Joule — dépendance en I²', () => {
  const r = effetJoule(10, 2);
  assert.equal(r.puissance, 40);
  assert.equal(effetJoule(10, 4).puissance, 160, 'doubler I quadruple les pertes');
  assert.ok(r.etapes.some((e) => /QUADRUPLE/.test(e.detail)));
});

test('générateur réel : la tension chute quand il débite', () => {
  const r = generateurReel(12, 0.5, 2);
  assert.equal(r.tension, 11);
  assert.equal(r.chute, 1);
});

test('rendement normal', () => {
  const r = rendement(600, 800);
  assert.equal(r.rendement, 0.75);
  assert.equal(r.pourcentage, 75);
  assert.equal(r.energieDissipee, 200);
});

test('rendement > 1 REFUSÉ : violation de la conservation', () => {
  const r = rendement(1200, 1000);
  assert.equal(r.valide, false);
  assert.match(r.erreur, /IMPOSSIBLE/);
  assert.equal(r.rendementCalcule, 1.2);
});

test('énergie fournie nulle refusée', () => {
  assert.equal(rendement(100, 0).valide, false);
});

// ──────────────────────────────── ondes ─────────────────────────────────────

test('λ = v / f', () => {
  const r = onde({ v: 340, f: 170 });
  assert.equal(r.manquant, 'λ');
  assert.equal(r.valeur, 2);
});

test('la période peut remplacer la fréquence', () => {
  const r = onde({ v: 340, T: 1 / 170 });
  assert.ok(Math.abs(r.lambda - 2) < 1e-6);
});

test('calcul de la fréquence', () => {
  assert.equal(onde({ v: 340, lambda: 2 }).valeur, 170);
});

test('il faut exactement deux grandeurs', () => {
  assert.equal(onde({ v: 340 }).valide, false);
});

test('l’outil rappelle que la fréquence ne change pas de milieu', () => {
  const r = onde({ v: 340, f: 170 });
  assert.ok(r.etapes.some((e) => /NE CHANGE PAS/.test(e.detail)));
});

test('retard de propagation', () => {
  assert.equal(retard(680, CONSTANTES.v_son).retard, 2);
});

// ──────────────────────────────── optique ───────────────────────────────────

test('grossissement d’une lunette', () => {
  const r = lunette(1.0, 0.020);
  assert.equal(r.grossissement, 50);
  assert.equal(r.distanceEntreLentilles, 1.02);
});

test('focales nulles ou négatives refusées', () => {
  assert.equal(lunette(1.0, 0).valide, false);
  assert.equal(lunette(-1, 0.02).valide, false);
});

test('vergence — la focale doit être en mètres', () => {
  const r = vergence(0.2);
  assert.equal(r.vergence, 5);
  assert.ok(r.etapes.some((e) => /MÈTRES/.test(e.detail)));
});

test('focale nulle refusée', () => {
  assert.equal(vergence(0).valide, false);
});
