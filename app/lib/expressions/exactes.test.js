import { test } from 'node:test';
import assert from 'node:assert/strict';
import { comparerExercice, typeExercice, consigneExercice } from '../autocorrection/index.js';

const juste = (ex, s) => comparerExercice(s, ex, 'maths');

test('puissances : « 2^8 » = « 2⁸ » = « 2^{8} », mais pas « 256 » ni l’énoncé recopié', () => {
  const ex = { enonce: "Écrire $2^{3} \\times 2^{5}$ sous la forme d'une seule puissance de $2$.", reponse: '$2^{8}$' };
  assert.equal(typeExercice(ex, 'maths'), 'auto');
  for (const s of ['2^8', '2⁸', '2^(8)', '2 ^ 8']) assert.equal(juste(ex, s), true, s);
  for (const s of ['256', '2^3 × 2^5', '2^7', '8^2', '2^15', '2']) assert.equal(juste(ex, s), false, s);
  // Exposants à plusieurs chiffres et négatifs, tapés en exposant.
  const n = { enonce: 'Écris sous la forme d’une seule puissance : $3^{4} \\times 3^{-6}$.', reponse: '$3^{-2}$' };
  for (const s of ['3^-2', '3⁻²', '3^(-2)']) assert.equal(juste(n, s), true, s);
  for (const s of ['1/9', '3^2', '-3^2']) assert.equal(juste(n, s), false, s);
  const g = { enonce: 'Écris $2^{10}$ sous la forme d’une puissance de 2.', reponse: '$2^{10}$', attendu: { accepte: ['2¹⁰'] } };
  assert.equal(juste(g, '2^10'), true);
  const m = { enonce: 'Écris sous la forme d’une seule puissance : $(-3)^{2} \\times (-3)^{5}$.', reponse: '$(-3)^{7}$' };
  for (const s of ['(-3)^7', '(−3)⁷']) assert.equal(juste(m, s), true, s);
  for (const s of ['-3^7', '3^7', '-2187', '(-3)^2 × (-3)^5']) assert.equal(juste(m, s), false, s);
  // Sans consigne de forme, une puissance seule n'est pas imposée (256 serait juste aussi) : pas d'autocorrection ici.
  assert.equal(typeExercice({ enonce: 'Calcule $2^3 \\times 2^5$.', reponse: '$2^{8}$' }, 'maths'), 'ouverte');
});

test('racines : « 6√2 », « 6 sqrt(2) », « 6racine(2) » ; pas « √72 » ni une valeur approchée', () => {
  const ex = { enonce: 'Écrire $\\sqrt{72}$ sous la forme $a\\sqrt{b}$, avec $a$ et $b$ entiers et $b$ le plus petit possible.', reponse: '$6\\sqrt{2}$' };
  assert.equal(typeExercice(ex, 'maths'), 'auto');
  for (const s of ['6√2', '6 sqrt(2)', '6racine(2)', '6 × √2', '√2 × 6', '6*sqrt2', '6 racine de 2']) assert.equal(juste(ex, s), true, s);
  for (const s of ['√72', '3√8', '8,49', '6√3', '-6√2', '2√6', '6']) assert.equal(juste(ex, s), false, s);
  assert.match(consigneExercice(ex, 'maths'), /valeur exacte/);
});

test('écriture simplifiée avec une lettre : « x² » pour « x × x », pas « x × x »', () => {
  const ex = { enonce: 'Écris plus simplement $ x \\times x $.', reponse: '$ x^2 $' };
  assert.equal(typeExercice(ex, 'maths'), 'auto');
  for (const s of ['x²', 'x^2']) assert.equal(juste(ex, s), true, s);
  for (const s of ['x × x', 'x*x', '2x', 'x^3']) assert.equal(juste(ex, s), false, s);
  const f = { enonce: 'Écris plus simplement $ 5 \\times (x + 2) $.', reponse: '$ 5(x + 2) $' };
  for (const s of ['5(x + 2)', '5(2 + x)']) assert.equal(juste(f, s), true, s);
  for (const s of ['5 × (x + 2)', '5*(x+2)', '5x + 10', '(x + 2)5']) assert.equal(juste(f, s), false, s);
  const a7 = { enonce: 'Écris plus simplement $ a \\times 7 $.', reponse: '$ 7a $' };
  assert.equal(juste(a7, '7a'), true);
  for (const s of ['a × 7', 'a7', '7 × a', '7']) assert.equal(juste(a7, s), false, s);
  const d = { enonce: 'Dériver $f(x) = x\\sqrt{x}$ sur $]0\\,;+\\infty[$ et simplifier le résultat.', reponse: "$f'(x) = \\dfrac{3}{2}\\sqrt{x}$." };
  for (const s of ["f'(x) = 3/2 √x", '1,5√x', '3√x/2']) assert.equal(juste(d, s), true, s);
  for (const s of ['√x + x/(2√x)', '2/3 √x']) assert.equal(juste(d, s), false, s);
});

test('vecteurs : « -2i + 7j », « −2i⃗ + 7j⃗ », « u = 7j − 2i »', () => {
  const ex = { enonce: '$(\\vec{\\imath}, \\vec{\\jmath})$ est une base orthonormée et $\\vec{u}\\begin{pmatrix} -2 \\\\ 7 \\end{pmatrix}$. Écrire $\\vec{u}$ en fonction de $\\vec{\\imath}$ et $\\vec{\\jmath}$.', reponse: '$\\vec{u} = -2\\,\\vec{\\imath} + 7\\,\\vec{\\jmath}$' };
  assert.equal(typeExercice(ex, 'maths'), 'auto');
  for (const s of ['-2i + 7j', '−2i⃗ + 7j⃗', 'u = 7j − 2i', 'u⃗ = -2i⃗+7j⃗']) assert.equal(juste(ex, s), true, s);
  for (const s of ['2i + 7j', '-2i - 7j', '7i - 2j', '(-2 ; 7)', '-2 + 7', '-2i']) assert.equal(juste(ex, s), false, s);
});

test('angles en π : « 2π/3 », « -2pi/3 », « −2π/3 rad »', () => {
  const ex = { enonce: "Déterminer la mesure principale de l'angle orienté de mesure $\\dfrac{4\\pi}{3}$.", reponse: '$-\\dfrac{2\\pi}{3}$' };
  for (const s of ['-2π/3', '-2pi/3', '−2π/3 rad', '-(2/3)π']) assert.equal(juste(ex, s), true, s);
  for (const s of ['2π/3', '4π/3', '-2,09', '-2π/3 cm']) assert.equal(juste(ex, s), false, s);
});

test('réponses en plusieurs morceaux (attendus.json) : angles, point et longueur', () => {
  const t = { enonce: 'Déterminer la mesure principale de $\\dfrac{9\\pi}{4}$, puis de $-\\dfrac{7\\pi}{6}$.', reponse: '$\\dfrac{\\pi}{4}$ et $\\dfrac{5\\pi}{6}$.', attendu: { accepte: ['π/4 ; 5π/6'] } };
  assert.equal(typeExercice(t, 'maths'), 'auto');
  for (const s of ['π/4 ; 5π/6', 'pi/4 et 5pi/6', 'π/4 rad ; 5π/6 rad', 'π/4, 5π/6']) assert.equal(juste(t, s), true, s);
  for (const s of ['5π/6 ; π/4', 'π/4', '9π/4 ; -7π/6', 'π/4 ; -5π/6', '0,785 ; 2,618']) assert.equal(juste(t, s), false, s);
  const h = { enonce: 'Projeté H de A sur d, puis la distance AH.', reponse: '$\\mathrm{H}(2\\,;1)$ ; distance $\\mathrm{AH} = 2\\sqrt{5}$.', attendu: { accepte: ['H(2 ; 1) ; AH = 2√5'] } };
  assert.equal(typeExercice(h, 'maths'), 'auto');
  for (const s of ['H(2 ; 1) ; AH = 2√5', '(2;1) et 2√5', 'H(2 ; 1) et AH = 2 sqrt(5)']) assert.equal(juste(h, s), true, s);
  for (const s of ['H(1 ; 2) ; 2√5', 'H(2 ; 1) ; √20', 'H(2 ; 1) ; 4,47', 'H(2 ; 1)', '2√5 ; H(2 ; 1)', 'H(2 ; 1) ; 2√3']) assert.equal(juste(h, s), false, s);
  assert.match(consigneExercice(h, 'maths'), /2 réponses dans l'ordre/);
});

test('point suivi d’une longueur entière : séparateurs libres, ordre exigé', () => {
  const ex = { enonce: 'Où arrive le robot ? À quelle distance est-il de O ?', reponse: 'Point $(3\\,;4)$ ; distance $5$ unités, soit 5 m', attendu: { accepte: ['(3 ; 4) ; 5'] } };
  for (const s of ['(3;4) ; 5', '(3 ; 4) et 5', 'M(3 ; 4) ; 5']) assert.equal(juste(ex, s), true, s);
  for (const s of ['(4;3) ; 5', '(3;4)', '(3;4) ; 25', '3 ; 4 ; 5', '5 ; (3 ; 4)']) assert.equal(juste(ex, s), false, s);
});
