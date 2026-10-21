// Réponses en plusieurs morceaux (attendus.json) et familles ajoutées en octobre 2026 :
// suites ordonnées de nombres avec unités, conversions d'unités, ± incertitude, formules brutes,
// ions, configurations électroniques, coordonnées, limites, mots de la réponse après un nombre.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeExercice, comparerExercice, consigneExercice, lireFormule, lireConfig } from './index.js';

const verifier = (ex, justes, faux, matiere = 'physique-chimie') => {
  assert.equal(typeExercice(ex, matiere), 'auto', JSON.stringify(ex.attendu || ex.reponse));
  for (const j of justes) assert.equal(comparerExercice(j, ex, matiere), true, `devrait accepter « ${j} »`);
  for (const f of faux) assert.equal(comparerExercice(f, ex, matiere), false, `devrait refuser « ${f} »`);
};

test('suite ordonnée de nombres avec unités (« 35 mA ; 1,2 MW ; 5 ms »)', () => {
  const ex = { enonce: 'Convertir : a) 0,035 A en mA ; b) 1,2 × 10^6 W en MW ; c) 5 × 10^-3 s en ms.', reponse: 'R', attendu: { accepte: ['35 mA ; 1,2 MW ; 5 ms'] } };
  verifier(ex, ['35 mA ; 1,2 MW ; 5 ms', '35 ; 1,2 ; 5', 'a) 35 mA, b) 1,2 MW, c) 5 ms', '35mA;1.2MW;5ms'],
    ['35 mA ; 1,2 mW ; 5 ms', '1,2 MW ; 35 mA ; 5 ms', '35 mA ; 1,2 MW', '0,035 A ; 1,2 MW ; 5 ms', '35 ; 12 ; 5']);
  assert.match(consigneExercice(ex, 'physique-chimie'), /3 réponses dans l'ordre/);
});

test('suite avec un mot (« 500 K ; 5,8 × 10^-6 m ; infrarouge ») et conversion d’unité permise', () => {
  const ex = { enonce: 'Calculer la température absolue, la longueur d’onde du maximum et le domaine.', reponse: 'R', attendu: { accepte: ['500 K ; 5,8 × 10^-6 m ; infrarouge'] } };
  verifier(ex, ['500 K ; 5,8e-6 m ; infrarouge', 'T = 500 K, λ = 5,8 µm, l’infrarouge', '500 ; 5800 nm ; Infrarouge'],
    ['500 K ; 5,8 mm ; infrarouge', '500 K ; 5,8e-6 m ; ultraviolet', '500 ; 5,8e-6', '773 K ; 5,8e-6 m ; infrarouge']);
});

test('conversion refusée quand l’énoncé demande l’unité (recopier suffirait)', () => {
  const ex = { enonce: 'Exprimer 1 500 Wh en kWh.', reponse: '$1{,}5$ kWh' };
  verifier(ex, ['1,5 kWh', '1,5'], ['1500 Wh', '1,5 Wh']);
  const ex2 = { enonce: 'Calculer l’énergie consommée.', reponse: '$1{,}5$ kWh' };
  verifier(ex2, ['1500 Wh', '1,5 kWh', '5,4 MJ'.replace('5,4 MJ', '1,5 kWh')], ['1,5 MWh', '1500 W', '3 ms']);
});

test('valeur ± incertitude : arrondi exigé, unité commune', () => {
  const ex = { enonce: 'Écris correctement le résultat de la mesure.', reponse: 'R', attendu: { accepte: ['24,8 g ; 0,3 g'] } };
  verifier(ex, ['m = 24,8 ± 0,3 g', '24,8 +/- 0,3', '(24,8 ± 0,3) g'.replace(/[()]/g, ''), '24,8 g ; 0,3 g'],
    ['24,84 ± 0,3 g', '24,8 ± 0,35 g', '24,8 g', '0,3 ± 24,8 g', '24,8 ± 0,3 kg']);
  const ms = { enonce: 'Écrire correctement : T = 0,0234567 s avec u(T) = 0,00042 s.', reponse: 'R', attendu: { accepte: ['0,0235 s ; 0,0004 s'] } };
  verifier(ms, ['23,5 ± 0,4 ms', '0,0235 ± 0,0004 s'], ['23,5 ± 0,4 s', '0,02346 ± 0,0004 s']);
});

test('formules brutes et ions', () => {
  assert.equal(lireFormule('C₆H₁₂O₆'), lireFormule('C6H12O6'));
  assert.equal(lireFormule('Mg²⁺'), lireFormule('Mg2+'));
  assert.equal(lireFormule('Mg++'), lireFormule('Mg2+'));
  assert.notEqual(lireFormule('Mg+'), lireFormule('Mg2+'));
  assert.notEqual(lireFormule('CO2'), lireFormule('Co2'));
  assert.equal(lireFormule('Fe'), null); // élément seul, sans charge : simple mot
  verifier({ enonce: 'Écrire la formule brute de l’acide propanoïque $\\mathrm{CH_3-CH_2-COOH}$.', reponse: '$\\mathrm{C_3H_6O_2}$' },
    ['C3H6O2', 'C₃H₆O₂', 'H6C3O2'], ['C3H8O2', 'c3h6o2', 'C3H6O']);
  verifier({ enonce: 'Prévoir l’ion formé par l’atome de magnésium ($Z = 12$).', reponse: '$\\mathrm{Mg}^{2+}$' },
    ['Mg2+', 'Mg²⁺', 'Mg 2+', 'Mg++'], ['Mg+', 'Mg', 'mg2+', 'Mg2-']);
  // Formule recopiée de l'énoncé : pas de vérification automatique.
  assert.equal(typeExercice({ enonce: 'Donner la formule brute de $\\mathrm{C_3H_6O_2}$.', reponse: '$\\mathrm{C_3H_6O_2}$' }, 'physique-chimie'), 'ouverte');
  verifier({ enonce: 'x', reponse: 'R', attendu: { accepte: ['5 ; 12 ; C5H12 ; pentane'] } },
    ['5, 12, C₅H₁₂, le pentane'], ['5 ; 12 ; c5h12 ; pentane', '5 ; 12 ; C5H10 ; pentane']);
});

test('configurations électroniques', () => {
  assert.equal(lireConfig('1s² 2s² 2p⁶ 3s¹'), lireConfig('1s2 2s2 2p6 3s1'));
  assert.equal(lireConfig('1s2 2s2 2q2'), null);
  verifier({ enonce: 'Écrire la configuration électronique du sodium et donner son nombre d’électrons de valence.', reponse: 'R', attendu: { accepte: ['1s2 2s2 2p6 3s1 ; 1'] } },
    ['1s² 2s² 2p⁶ 3s¹ ; 1', '1s2 2s2 2p6 3s1 ; 1 électron'], ['1s2 2s2 2p7 ; 1', '1s2 2s2 2p6 3s1 ; 2', '1s2 2s2 2p6 3s1 ; 1 mètre']);
});

test('coordonnées dans une suite, avec unité et arrondi', () => {
  const ex = { enonce: 'Déterminer les vecteurs vitesse et accélération à t = 1 s, puis la valeur de la vitesse.', reponse: 'R', attendu: { accepte: ['(3 ; 3) ; 4,24 m/s ; (0 ; -2)'] } };
  verifier(ex, ['(3;3) ; 4,24 ; (0;-2)', 'v = (3 ; 3) ; v = 4,24 m/s ; a = (0 ; -2)', '(3, 3), 4,243, (0, -2)', 'v(1) = (3 ; 3) ; 4,24 m.s-1 ; (0 ; -2)'],
    ['(3 ; -3) ; 4,24 ; (0 ; -2)', '(3 ; 3) ; 4,24 ; (0 ; 2)', '(3 ; 3) ; 4,24 km/h ; (0 ; -2)', '4,24 ; (3 ; 3) ; (0 ; -2)']);
});

test('limites infinies et valeurs exactes dans une suite', () => {
  verifier({ enonce: 'Donner les limites.', reponse: 'R', attendu: { accepte: ['-∞ ; +∞ ; 3'] } },
    ['-∞ ; +∞ ; 3', '-inf, +inf, 3', 'moins l\'infini ; plus l\'infini ; 3'], ['+∞ ; +∞ ; 3', '-∞ ; ∞ ; 3', '-∞ ; +∞']);
  verifier({ enonce: 'Convertir 135° en radians, puis 5π/6 rad en degrés.', reponse: 'R', attendu: { accepte: ['3π/4 ; 150°'] } },
    ['3π/4 ; 150°', '3pi/4 ; 150', '3π/4 rad ; 150°'], ['π/4 ; 150°', '3π/4 ; 150 rad', '150° ; 3π/4']);
});

test('ensemble de solutions : π/6, décimales, « ou »', () => {
  verifier({ enonce: 'Résoudre sin x = 1/2 sur [0 ; 2π[.', reponse: 'R', attendu: { ensemble: ['π/6', '5π/6'] } },
    ['π/6 ; 5π/6', '5pi/6, pi/6', 'x = π/6 ou x = 5π/6'], ['π/6 ; 7π/6', 'π/6', 'π/6 ou π/6'], 'maths');
  verifier({ enonce: 'Résoudre.', reponse: 'R', attendu: { ensemble: ['0.5', '1.5'] } },
    ['0,5 ; 1,5', '1.5, 0.5', '0,5, 1,5'], ['0,5 ; 2,5', '5 ; 15'], 'maths');
});

test('nombres complexes dans une suite', () => {
  const ex = { enonce: 'Donner la partie réelle, la partie imaginaire et le conjugué de z = -4 + 7i.', reponse: 'R', attendu: { accepte: ['-4 ; 7 ; -4 - 7i'] } };
  verifier(ex, ['-4 ; 7 ; -4-7i', '-4;7;-7i-4', 'Re = -4 ; Im = 7 ; -4 - 7i'], ['-4 ; 7 ; -4 + 7i', '-4 ; 7i ; -4 - 7i'.replace('7i ;', '-7 ;')], 'maths');
  assert.match(consigneExercice(ex, 'maths'), /a \+ bi/);
});

test('« Nm » = newton-mètre ; jours et années comme unités', () => {
  verifier({ enonce: 'Calculer le moment.', reponse: '$34\\ \\mathrm{N\\cdot m}$' }, ['34 N.m', '34 Nm', '34'], ['34 nm', '34 N']);
  verifier({ enonce: 'Au bout de combien de jours ?', reponse: 'R', attendu: { accepte: ['80 jours ; 10'] } }, ['80 jours ; 10', '80 ; 10', '80 jour ; 10'], ['80 ans ; 10', '80 h ; 10']);
});

test('une grille d’idées l’emporte sur la réponse courte', () => {
  const ex = { enonce: 'Calculer et expliquer.', reponse: '$3{,}0$ A', criteres: [{ idee: 'a', mots: ['court'] }, { idee: 'b', mots: ['chaleur'] }] };
  assert.equal(typeExercice(ex, 'physique-chimie'), 'ouverte');
});

test('unité seule (« J·kg⁻¹·K⁻¹ ») : plusieurs écritures, pas vérifiée', () => {
  assert.equal(typeExercice({ enonce: 'Quelle est l’unité de c ?', reponse: '$ \\mathrm{J\\cdot kg^{-1}\\cdot K^{-1}} $' }, 'physique-chimie'), 'ouverte');
  verifier({ enonce: 'Calculer l’intensité acoustique.', reponse: '$I = 0{,}04\\ \\mathrm{W\\cdot m^{-2}}$.' }, ['0,04 W/m²', '0,04 W.m-2', '0,04'], ['0,04 W', '0,4 W/m²']);
});

test('point présenté dans l’énoncé (« Un point M est situé… ») : coordonnées vérifiées', () => {
  verifier({ enonce: 'Un point $M$ est situé $2$ graduations à gauche de l\'origine et $1$ graduation au-dessus. Quelles sont ses coordonnées ?', reponse: '$M(-2\\,;1)$' },
    ['(-2 ; 1)', 'M(-2;1)'], ['(2 ; 1)', '(1 ; -2)'], 'maths');
  assert.equal(typeExercice({ enonce: 'Donne un point de la droite.', reponse: '$(1\\,;2)$' }, 'maths'), 'ouverte');
});
