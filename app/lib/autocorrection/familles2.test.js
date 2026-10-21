// Familles ajoutées le 21/10/2026 (chantier « autocorrection » 66,8 % → 70 %) :
// phrases à corriger, décompositions, classements, variations, noyaux, demi-équations,
// arguments modulo 2π, valeurs exactes et approchées dans une suite, petites règles de lecture.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeExercice, comparerExercice, consigneExercice } from './index.js';
import { lire, egales } from '../expressions/index.js';

const arbre = (t) => lire(t).a;

const verifier = (ex, justes, faux, matiere = 'maths') => {
  assert.equal(typeExercice(ex, matiere), 'auto', JSON.stringify(ex.attendu || ex.reponse));
  for (const j of justes) assert.equal(comparerExercice(j, ex, matiere), true, `devrait accepter « ${j} »`);
  for (const f of faux) assert.equal(comparerExercice(f, ex, matiere), false, `devrait refuser « ${f} »`);
};

// ─── Phrases à corriger ─────────────────────────────────────────────────────

test('correction (français) : la phrase corrigée en entier, majuscules comprises', () => {
  const ex = { enonce: 'Corrige les erreurs : « Le Lapin de julie mange une Carotte. »', reponse: 'Le lapin de Julie mange une carotte.' };
  verifier(ex, ['Le lapin de Julie mange une carotte.', 'Le lapin de Julie mange une carotte', '« Le lapin de Julie mange une carotte. »'],
    ['Le Lapin de julie mange une Carotte.', 'Le lapin de julie mange une carotte.', 'Le lapin de Julie mange une carote.', 'Julie'], 'francais');
  assert.match(consigneExercice(ex, 'francais'), /phrase corrigée/);
});

test('correction : accord demandé (« Le chat » → « Les chats »)', () => {
  const ex = { enonce: 'Récris en remplaçant « Le chat » par « Les chats » : « Le chat grimpe à l\'arbre et il regarde les oiseaux. »', reponse: 'Les chats grimpent à l\'arbre et ils regardent les oiseaux.' };
  verifier(ex, ['Les chats grimpent à l’arbre et ils regardent les oiseaux.'],
    ['Les chats grimpe à l\'arbre et il regarde les oiseaux.', 'Les chats grimpent à l\'arbre et il regardent les oiseaux.'], 'francais');
});

test('correction (espagnol) : « ¿ » et accents exigés', () => {
  const ex = { enonce: 'Ajoute la ponctuation qui manque : Cuántos años tienes', reponse: '¿Cuántos años tienes?' };
  verifier(ex, ['¿Cuántos años tienes?', '¿ Cuántos años tienes ?'], ['Cuántos años tienes?', '¿Cuantos años tienes?', '¿Cuántos anos tienes?'], 'espagnol');
});

test('correction (allemand) : majuscules des noms', () => {
  const ex = { enonce: 'Corrige les majuscules : Ich esse gern käse und wurst.', reponse: 'Ich esse gern Käse und Wurst.' };
  verifier(ex, ['Ich esse gern Käse und Wurst.', 'Ich esse gern Käse und Wurst'], ['Ich esse gern käse und wurst.', 'Ich esse gern Kase und Wurst.'], 'allemand');
});

test('correction (anglais) : superlatif, formes contractées équivalentes', () => {
  const ex = { enonce: 'Mets au superlatif : The Nile is one of (long) rivers in the world.', reponse: 'The Nile is one of the longest rivers in the world.' };
  verifier(ex, ['The Nile is one of the longest rivers in the world.'], ['The Nile is one of the longer rivers in the world.', 'The Nile is one of longest rivers in the world.'], 'anglais');
  const neg = { enonce: 'Mets à la forme négative : She is happy.', reponse: 'She isn\'t happy.' };
  verifier(neg, ['She isn\'t happy.', 'She is not happy.'], ['She is happy.', 'She aren\'t happy.'], 'anglais');
});

test('pas de correction automatique pour « explique » ou une réponse au choix', () => {
  const ex = { enonce: 'Corrige la phrase et explique ton choix : « Il mangent. »', reponse: 'Il mange.' };
  assert.notEqual(comparerExercice('Il mangent.', ex, 'francais'), true);
});

// ─── Décompositions ─────────────────────────────────────────────────────────

test('décomposition selon les rangs : termes dans n’importe quel ordre', () => {
  const ex = { enonce: 'Décompose 3 896 selon ses rangs (milliers, centaines, dizaines, unités).', reponse: '$3\\,896 = 3\\,000 + 800 + 90 + 6$' };
  verifier(ex, ['3000 + 800 + 90 + 6', '3 000 + 800 + 90 + 6', '6 + 90 + 800 + 3000', '3896 = 3000 + 800 + 90 + 6'],
    ['3896', '3000 + 896', '3000 + 800 + 96', '3000 + 800 + 90 + 5', '3 × 1000 + 896']);
});

test('décomposition en facteurs premiers : puissances ou facteurs répétés', () => {
  const ex = { enonce: 'Décomposer 360 en produit de facteurs premiers.', reponse: '$360 = 2^3 \\times 3^2 \\times 5$' };
  verifier(ex, ['2^3 × 3^2 × 5', '2³ × 3² × 5', '2 × 2 × 2 × 3 × 3 × 5', '5 × 3^2 × 2^3'],
    ['8 × 9 × 5', '2^3 × 45', '2^3 × 3 × 5', '360', '2 × 180']);
});

// ─── Classements et associations ────────────────────────────────────────────

test('classement en groupes : étiquettes et éléments, ordre libre', () => {
  const ex = { enonce: 'Classe ces mots en deux groupes, « je mange » et « je bois » : juice, bread, water, egg.', reponse: 'je mange : bread, egg ; je bois : juice, water' };
  verifier(ex, ['je mange : bread, egg ; je bois : juice, water', 'je bois : water, juice ; je mange : egg, bread', 'Je mange : bread, egg\nJe bois : juice, water'],
    ['je mange : bread, juice ; je bois : egg, water', 'je mange : bread ; je bois : juice, water', 'bread, egg, juice, water'], 'anglais');
  assert.match(consigneExercice(ex, 'anglais'), /2 groupes/);
  const arts = { enonce: 'Classe ces couleurs en couleurs chaudes et froides : rouge, bleu, orange, vert.', reponse: 'Chaudes : rouge, orange. Froides : bleu, vert.' };
  verifier(arts, ['Chaudes : rouge, orange. Froides : bleu, vert.', 'chaudes : orange, rouge ; froides : vert, bleu', 'Chaudes : rouge, orange, Froides : bleu, vert'],
    ['Chaudes : rouge, bleu. Froides : orange, vert.', 'Chaudes : rouge. Froides : bleu, vert, orange.'], 'arts');
});

// ─── Variations ─────────────────────────────────────────────────────────────

test('variations : sens puis extremum (valeur et position)', () => {
  const ex = { enonce: 'Étudier les variations de $f(x) = x^2 - 6x + 5$ sur $\\mathbb{R}$ et préciser son extremum.', reponse: 'Décroissante puis croissante ; minimum $f(3) = -4$' };
  verifier(ex, ['décroissante puis croissante ; minimum f(3) = -4', 'décroissante sur ]-∞ ; 3], croissante sur [3 ; +∞[ ; minimum -4 en 3'],
    ['croissante puis décroissante ; minimum f(3) = -4', 'décroissante puis croissante ; maximum f(3) = -4', 'décroissante puis croissante ; minimum f(3) = 4', 'décroissante puis croissante ; minimum f(2) = -4', 'décroissante puis croissante']);
});

// ─── Noyaux et désintégrations ──────────────────────────────────────────────

test('noyau ^A_Z X : écritures acceptées, symbole exact', () => {
  const ex = { enonce: 'Le noyau d\'un atome d\'azote ($\\mathrm{N}$) contient 7 protons et 7 neutrons. Écrire son symbole $^{A}_{Z}\\mathrm{X}$.', reponse: '${}^{14}_{7}\\mathrm{N}$' };
  verifier(ex, ['14 7 N', '^14_7 N', '^{14}_{7}N', '¹⁴₇N', '7 14 N', 'N 14 7'], ['14 7 n', '21 7 N', '14 N', '7 7 N', '14 6 C'], 'physique-chimie');
  assert.match(consigneExercice(ex, 'physique-chimie'), /A Z X/);
});

test('désintégration α et β : conservation de A, Z et symboles', () => {
  const a = { enonce: 'Le noyau ${}^{238}_{92}\\mathrm{U}$ est radioactif α. Écrire l\'équation de sa désintégration et identifier le noyau fils (Z = 90 : Th).', reponse: '${}^{238}_{92}\\mathrm{U} \\longrightarrow {}^{234}_{90}\\mathrm{Th} + {}^{4}_{2}\\mathrm{He}$' };
  verifier(a, ['238 92 U -> 234 90 Th + 4 2 He', '²³⁸₉₂U → ⁴₂He + ²³⁴₉₀Th', '238/92 U -> 234/90 Th + α', '238 92 U->234 90 Th+4 2 He'],
    ['238 92 U -> 234 91 Pa + 4 2 He', '238 92 U -> 234 90 TH + 4 2 He', '234 90 Th + 4 2 He -> 238 92 U', '238 92 U -> 234 90 Th', '238 92 U -> 234 90 Th + 4 2 He + 0 -1 e'], 'physique-chimie');
  const bm = { enonce: 'Le noyau ${}^{14}_{6}\\mathrm{C}$ est radioactif β⁻. Écrire l\'équation de sa désintégration.', reponse: '${}^{14}_{6}\\mathrm{C} \\longrightarrow {}^{14}_{7}\\mathrm{N} + {}^{0}_{-1}\\mathrm{e}$' };
  verifier(bm, ['14 6 C -> 14 7 N + 0 -1 e', '14 6 C → 14 7 N + e-', '14 6 C -> 14 7 N + β-'], ['14 6 C -> 14 7 N + e+', '14 6 C -> 14 7 N + 0 1 e', '14 6 C -> 14 5 B + 0 1 e'], 'physique-chimie');
  const bp = { enonce: 'Le noyau ${}^{18}_{9}\\mathrm{F}$ est radioactif β⁺. Écrire l\'équation de sa désintégration.', reponse: '${}^{18}_{9}\\mathrm{F} \\longrightarrow {}^{18}_{8}\\mathrm{O} + {}^{0}_{+1}\\mathrm{e}$' };
  verifier(bp, ['18 9 F -> 18 8 O + 0 +1 e', '18 9 F -> 18 8 O + 0 1 e', '18 9 F -> 18 8 O + e+', '18 9 F -> 18 8 O+e+'], ['18 9 F -> 18 8 O + e-', '18 9 F -> 18 10 Ne + e-'], 'physique-chimie');
});

// ─── Demi-équations ─────────────────────────────────────────────────────────

test('demi-équation électronique : sens libre, électrons et charges exigés', () => {
  const ex = { enonce: 'Écrire la demi-équation électronique du couple $\\mathrm{I_2/I^-}$.', reponse: '$\\mathrm{I_2} + 2\\,e^- = 2\\,\\mathrm{I^-}$' };
  verifier(ex, ['I2 + 2e- = 2I-', 'I2 + 2 e- = 2 I-', '2 I- = I2 + 2 e-'], ['I2 + e- = 2I-', 'I2 + 2e- = I-', 'I2 = 2I- + 2e-', 'I2 + 2e- = 2I'], 'physique-chimie');
  const cr = { enonce: 'Ajuster en milieu acide la demi-équation électronique du couple $\\mathrm{Cr_2O_7^{2-}/Cr^{3+}}$.', reponse: '$\\mathrm{Cr_2O_7^{2-}} + 14\\,\\mathrm{H^+} + 6\\,e^- = 2\\,\\mathrm{Cr^{3+}} + 7\\,\\mathrm{H_2O}$' };
  verifier(cr, ['Cr2O7 2- + 14 H+ + 6 e- = 2 Cr3+ + 7 H2O', 'Cr2O7^2- + 14H+ + 6e- = 2Cr^3+ + 7H2O'], ['Cr2O7 2- + 14 H+ + 6 e- = 2 Cr3+ + 6 H2O', 'Cr2O7 2- + 14 H+ + 3 e- = 2 Cr3+ + 7 H2O'], 'physique-chimie');
});

// ─── Arguments modulo 2π ────────────────────────────────────────────────────

test('argument d’un complexe : toute mesure égale à 2π près, écriture exacte', () => {
  const ex = { enonce: 'Déterminer un argument de $z=-1+i$.', reponse: 'R', attendu: { accepte: ['3π/4'] } };
  verifier(ex, ['3π/4', '-5π/4', '11π/4', '3pi/4'], ['π/4', '-3π/4', '2,356', '3π/2'], 'maths-expertes');
  const plusieurs = { enonce: 'Donner un argument de chacun des complexes $5$, $-2$, $3i$ et $-4i$.', reponse: 'R', attendu: { accepte: ['0 ; π ; π/2 ; -π/2'] } };
  verifier(plusieurs, ['0 ; π ; π/2 ; -π/2', '2π ; -π ; π/2 ; 3π/2'], ['0 ; π ; -π/2 ; π/2', '2 ; π ; π/2 ; -π/2'], 'maths-expertes');
  // Mesure principale : unique, pas de « modulo ».
  const principale = { enonce: 'Donner la mesure principale de l\'angle $\\dfrac{11\\pi}{4}$.', reponse: 'R', attendu: { accepte: ['3π/4'] } };
  assert.equal(comparerExercice('11π/4', principale, 'maths'), false);
  assert.equal(egales(arbre('3*pi/4'), arbre('-5*pi/4'), { mode: 'modulo2pi' }), true);
  assert.equal(egales(arbre('3*pi/4'), arbre('pi/4'), { mode: 'modulo2pi' }), false);
});

// ─── Suites de nombres : valeur exacte ≈ valeur approchée ───────────────────

test('suite : « 36/91 ≈ 0,40 » (exacte puis approchée) seulement si l’arrondi est juste', () => {
  const ex = { enonce: 'Calculer les probabilités (fraction, puis valeur arrondie au centième).', reponse: 'R', attendu: { accepte: ['1365 ; 126 ; 540 ; 36/91 ; 90/91'] } };
  verifier(ex, ['1365 ; 126 ; 540 ; 36/91 ; 90/91', '1365 ; 126 ; 540 ; 36/91 ≈ 0,40 ; 90/91 ≈ 0,99'],
    ['1365 ; 126 ; 540 ; 36/91 ≈ 0,50 ; 90/91', '1365 ; 126 ; 540 ; 36/91 ≈ 0,40 ; 1/91 ≈ 0,99', '1365 ; 126 ; 540 ; 0,40 ; 0,99']);
  const s = { enonce: 'Calculer $S_{10}$, valeur exacte puis approchée.', reponse: 'R', attendu: { accepte: ['1023/512 ; 1,998'] } };
  verifier(s, ['1023/512 ≈ 1,998', '1023/512 ; 1,998'], ['1023/512 ≈ 1,9', '1023/512 ≈ 2,998']);
});

test('suite : « hausse de 25 % » = « +25 % », séparateur « soit », « 7/20 = 0,35 »', () => {
  const ex = { enonce: 'Calculer le taux d\'évolution puis le coefficient multiplicateur.', reponse: 'R', attendu: { accepte: ['+25 % ; 1,25'] } };
  verifier(ex, ['+25 % ; 1,25', 'hausse de 25 % ; ×1,25', 'augmentation de 25 %, soit 1,25'], ['baisse de 25 % ; 1,25', '-25 % ; 1,25', '25 % ; 0,75']);
  const f = { enonce: 'Écrire la fraction, puis le nombre décimal.', reponse: 'R', attendu: { accepte: ['7/20 ; 0,35'] } };
  verifier(f, ['7/20 = 0,35', '7/20 ; 0,35'], ['7/20 = 0,7', '7/10 ; 0,35']);
});

test('suite : nom de droite « D1 » comme réponse courte', () => {
  const ex = { enonce: 'Pour chaque droite, calculer la somme des carrés des écarts. Laquelle est la meilleure ?', reponse: 'R', attendu: { accepte: ['0,2 ; 2 ; D1'] } };
  verifier(ex, ['0,2 ; 2 ; D1', 'S1 = 0,2 ; S2 = 2 ; D1', '0,2 ; 2 ; D_1'], ['0,2 ; 2 ; D2', '0,2 ; 2 ; 2', '2 ; 0,2 ; D1']);
});

test('ensemble : unité écrite par l’élève permise (« 5 cm et 5√3 cm »)', () => {
  const ex = { enonce: 'Calculer les deux côtés.', reponse: 'R', attendu: { ensemble: ['5', '5√3'] } };
  verifier(ex, ['5 cm et 5√3 cm', '5√3 ; 5', '5, 5√3'], ['5 cm et 5√2 cm', '5', '5√3 cm']);
});

// ─── Expressions ────────────────────────────────────────────────────────────

test('expressions : sin(x)^3, √3i, exposants ⁿ, log décimal', () => {
  assert.equal(egales(arbre('sin(x)^3'), arbre('(sin(x))^3')), true);
  assert.equal(egales(arbre('sin(x)^3'), arbre('sin(x^3)')), false);
  assert.equal(egales(arbre('√3i'), arbre('sqrt(3)*i'), { complexe: true }), true);
  assert.equal(egales(arbre('2ⁿ'), arbre('2^n')), true);
  assert.equal(egales(arbre('log(1000)'), arbre('3')), true);
  assert.equal(egales(arbre('log(100)'), arbre('ln(100)')), false);
});
