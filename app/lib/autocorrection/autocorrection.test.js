import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeReponse, comparer, uniteAttendue } from './index.js';

test('typeReponse : nombres, unités et mots courts → auto', () => {
  for (const r of ['$43$', '$1\\,250$ N', '$4$ km/h', '$ Q = 180\\,000 $ J', '$32°$', '$90^\\circ$',
    '$ \\dfrac{1}{2} $', '9 h 25', 'un corps pur', 'Le judaïsme.', 'Vrai', '$12{,}5$ cm²',
    '$1{,}98 \\times 10^{20}$ N', '$ R = 4{,}7\\ \\mathrm{k\\Omega} $', 'grandfather ou grandpa']) {
    assert.equal(typeReponse(r), 'auto', r);
  }
});

test('typeReponse : réponses longues, exemples, LaTeX complexe → ouverte', () => {
  for (const r of [
    'Exemple de réponse : phénylcétonurie contrôlée par le régime.',
    'Exemple : Vous visitez le musée.',
    "Non : beaucoup d'espèces sont parties en migration.",
    '$u_n \\to \\dfrac{3}{2}$.',
    '$+\\infty$ et $+\\infty$.',
    '$2^{2}$',
    '$ 6x + 8 $',
    '$f(x) = -4x$',
    '$x = 2$ ou $x = 3$',
    'a shirt, a skirt',
    'his dog / her cat',
    'génitif singulier ou nominatif pluriel',
    'Colomb → Amérique ; Vasco de Gama → Inde',
    '(a) complétive ; (b) relative',
    'Répéter 5 fois [saute].',
    '',
  ]) {
    assert.equal(typeReponse(r), 'ouverte', r);
  }
});

test('typeReponse : en langue étrangère, une phrase est ouverte', () => {
  assert.equal(typeReponse('Ich habe Angst.', 'allemand'), 'ouverte');
  assert.equal(typeReponse('Son las ocho.', 'espagnol'), 'ouverte');
  assert.equal(typeReponse('der Bundesstaat', 'allemand'), 'auto');
  assert.equal(typeReponse('Le judaïsme.', 'hist-geo'), 'auto');
});

test('comparer : nombres (virgule, point, milliers, unité facultative)', () => {
  assert.ok(comparer('12,5', '$12{,}5$'));
  assert.ok(comparer('12.5', '$12{,}5$'));
  assert.ok(comparer('1250', '$1\\,250$ N'));
  assert.ok(comparer('1 250 N', '$1\\,250$ N'));
  assert.ok(comparer('1250N', '$1\\,250$ N'));
  assert.ok(comparer('Q = 180000 J', '$ Q = 180\\,000 $ J'));
  assert.ok(comparer('180 000', '$ Q = 180\\,000 $ J'));
  assert.ok(comparer('0,5', '$ \\dfrac{1}{2} $'));
  assert.ok(comparer('1/2', '$ \\dfrac{1}{2} $'));
  assert.ok(comparer('32', '$32°$'));
  assert.ok(comparer('90°', '$90^\\circ$'));
  assert.ok(comparer('1,98e20', '$1{,}98 \\times 10^{20}$ N'));
  assert.ok(comparer('1,98 x 10^20 N', '$1{,}98 \\times 10^{20}$ N'));
  assert.ok(comparer('4,7 kΩ', '$ R = 4{,}7\\ \\mathrm{k\\Omega} $'));
  assert.ok(comparer('17,50 euros', '$17{,}50$ €'));
  assert.ok(comparer('16 cm2', '$16$ cm²'));
  assert.ok(comparer('−9', '$A = -9$'));
  assert.ok(comparer('1200', 'environ $1\\,200$'));
  assert.ok(comparer('3,1416', '$3{,}14$'));
});

test('comparer : nombres faux ou mauvaise unité → false', () => {
  assert.equal(comparer('12', '$12{,}5$'), false);
  assert.equal(comparer('4,4', '$4$'), false);
  assert.equal(comparer('4 m/s', '$4$ km/h'), false);
  assert.equal(comparer('125', '$1\\,250$ N'), false);
  assert.equal(comparer('9', '$A = -9$'), false);
  assert.equal(comparer('', '$43$'), false);
});

test('comparer : texte (casse, accents, articles, ponctuation)', () => {
  assert.ok(comparer('judaisme', 'Le judaïsme.'));
  assert.ok(comparer('LE JUDAÏSME !', 'Le judaïsme.'));
  assert.ok(comparer("l'ocean atlantique", "l'océan Atlantique"));
  assert.ok(comparer('corps pur', 'un corps pur'));
  assert.ok(comparer('etre', 'être'));
  assert.ok(comparer('9h25', '9 h 25'));
  assert.ok(comparer('grandpa', 'grandfather ou grandpa'));
  assert.ok(comparer('Grandfather', 'grandfather ou grandpa'));
  assert.ok(comparer('Edinburgh', 'Edinburgh (Édimbourg)'));
  assert.ok(comparer('aufs Regal', 'auf das Regal (ou aufs Regal)'));
  assert.equal(comparer('corps impur', 'un corps pur'), false);
});

test('comparer : les accents comptent sur les mots très courts (a/à, ou/où)', () => {
  assert.equal(comparer('a', 'à'), false);
  assert.ok(comparer('à', 'à'));
  assert.equal(comparer('ou', 'où'), false);
});

test('comparer : phrase à un seul nombre → le nombre seul suffit', () => {
  assert.ok(comparer('41', 'Nina a 41 billes.'));
  assert.ok(comparer('41 billes', 'Nina a 41 billes.'));
  assert.ok(comparer('1792', 'En 1792.'));
  assert.equal(comparer('40', 'Nina a 41 billes.'), false);
  assert.equal(comparer('6', '6 pommes et demie'), false);
});

test('comparer : réponse ouverte → toujours false', () => {
  assert.equal(comparer('quelque chose', 'Exemple de réponse : bla bla.'), false);
});

test('uniteAttendue', () => {
  assert.equal(uniteAttendue('$4$ km/h'), 'km/h');
  assert.equal(uniteAttendue('$43$'), '');
  assert.equal(uniteAttendue('Le judaïsme.'), '');
});

// ─── Réponses acceptées écrites à la main (attendus.json) ───
import { typeExercice, comparerExercice, uniteExercice, consigneExercice, fusionnerAttendus } from './index.js';

test('attendu : une phrase devient vérifiable grâce à sa forme courte', () => {
  const ex = { reponse: 'Il y a 30 timbres en tout.', attendu: { accepte: ['30 timbres'] } };
  assert.equal(typeExercice(ex), 'auto');
  assert.equal(comparerExercice('30', ex), true);
  assert.equal(comparerExercice('30 timbres', ex), true);
  assert.equal(comparerExercice('31', ex), false);
  assert.equal(uniteExercice(ex), 'timbres');
});

test('attendu : sans fichier, on garde le comportement de la réponse seule', () => {
  assert.equal(typeExercice({ reponse: 'Il y a 30 timbres en tout, puis on en donne 4.' }), 'ouverte');
  assert.equal(typeExercice({ reponse: '42' }), 'auto');
});

test('attendu : une phrase courte en langue étrangère, ponctuation et casse ignorées', () => {
  const ex = { reponse: 'Ich trinke gern Milch.', attendu: { accepte: ['Ich trinke gern Milch', 'Ich trinke gerne Milch'] } };
  assert.equal(comparerExercice('ich trinke gerne milch !', ex, 'allemand'), true);
  assert.equal(comparerExercice('Ich trinke Milch', ex, 'allemand'), false);
});

test('attendu : ensemble → tous les éléments, dans n’importe quel ordre', () => {
  const ex = { reponse: 'le lait, la pomme', attendu: { ensemble: ['le lait', 'la pomme'] } };
  assert.equal(comparerExercice('pomme et lait', ex), true);
  assert.equal(comparerExercice('la pomme, le lait', ex), true);
  assert.equal(comparerExercice('la pomme', ex), false);
  assert.equal(comparerExercice('la pomme, le lait, le pain', ex), false);
  assert.match(consigneExercice(ex), /2 éléments/);
});

test('attendu : une forme non vérifiable (formule) laisse l’exercice ouvert', () => {
  const ex = { reponse: 'On trouve f(x) = x² + 1 après calcul.', attendu: { accepte: ['$x^2 + 1$'] } };
  assert.equal(typeExercice(ex), 'ouverte');
});

test('fusionnerAttendus ignore les lignes dont la réponse a changé', () => {
  const exo = { exercices: [{ id: 1, reponse: 'A' }, { id: 2, reponse: 'B' }] };
  const { exercice, ecarts } = fusionnerAttendus(exo, { 1: { reponse: 'A', accepte: ['a'] }, 2: { reponse: 'ancien', accepte: ['b'] } });
  assert.deepEqual(exercice.exercices[0].attendu, { accepte: ['a'] });
  assert.equal(exercice.exercices[1].attendu, undefined);
  assert.deepEqual(ecarts, [2]);
});

test('articles : « lait » et « le lait » se valent (le « la » de « lait » n’est pas un article)', () => {
  assert.equal(comparer('lait', 'le lait'), true);
  assert.equal(comparer('laine', 'la laine'), true);
});

test('français : les accents comptent ; ailleurs ils sont tolérés', () => {
  const ex = { reponse: 'Ma sœur et ma cousine semblent fatiguées.', attendu: { accepte: ['fatiguées'] } };
  assert.equal(comparerExercice('fatiguées', ex, 'francais'), true);
  assert.equal(comparerExercice('fatiguees', ex, 'francais'), false);
  assert.equal(comparerExercice('fatiguees', ex, 'hist-geo'), true);
  assert.equal(comparer('fatigues', 'fatigués', 'francais'), false);
});

test('ensemble : un mot finissant par « ée » n’est pas coupé (« e » italien seulement en mot isolé)', () => {
  const ex = { reponse: 'grelottait, givre, glacée', attendu: { ensemble: ['grelottait', 'givre', 'glacée'] } };
  assert.equal(comparerExercice('grelottait, givre et glacée', ex, 'francais'), true);
});

test('forme écrite à la main : exigée en entier (« 90 » ne suffit pas pour « 90° angle droit »)', () => {
  const ex = { reponse: '$90^\\circ$, angle droit', attendu: { accepte: ['90° angle droit', '90° droit'] } };
  assert.equal(comparerExercice('90°, angle droit', ex), true);
  assert.equal(comparerExercice('90° droit', ex), true);
  assert.equal(comparerExercice('90', ex), false);
  assert.equal(comparer('20 °C', '$20$ °C'), true);
});

test('nombres dans une forme texte : signe, virgule et séparation conservés', () => {
  const ex = { reponse: 'S(3 ; −3,5)', attendu: { accepte: ['S(3 ; -3,5)'] } };
  assert.equal(comparerExercice('S(3 ; -3,5)', ex), true);
  assert.equal(comparerExercice('S(3;−3,5)', ex), true);
  assert.equal(comparerExercice('S(3 ; 3,5)', ex), false);
  assert.equal(comparerExercice('S(3 ; -35)', ex), false);
  const ex2 = { reponse: '1,4 s et 10,8 m', attendu: { accepte: ['1,4 s et 10,8 m'] } };
  assert.equal(comparerExercice('14 s et 108 m', ex2), false);
  const ex3 = { reponse: '(2 ; 3)', attendu: { accepte: ['(2 ; 3)'] } };
  assert.equal(comparerExercice('23', ex3), false);
  assert.equal(comparerExercice('(2;3)', ex3), true);
});

test('unités : MW et mW ne se confondent pas ; « ¿ » au milieu est ignoré', () => {
  assert.equal(comparer('10 mW', '10 MW'), false);
  assert.equal(comparer('10 MW', '10 MW'), true);
  assert.equal(comparer('5 min', '5 MIN'), true);
  const ex = { reponse: 'Hola, ¿qué tal?', attendu: { accepte: ['Hola ¿qué tal?'] } };
  assert.equal(comparerExercice('hola, que tal', ex, 'espagnol'), false); // accents exigés en langue
  assert.equal(comparerExercice('hola, qué tal', ex, 'espagnol'), true);
});

test('langues : l’article compte (« mia casa » ≠ « la mia casa »)', () => {
  const ex = { reponse: 'la mia casa', attendu: { accepte: ['la mia casa'] } };
  assert.equal(comparerExercice('mia casa', ex, 'italien'), false);
  assert.equal(comparerExercice('La mia casa.', ex, 'italien'), true);
});

test('formes avec flèches ou « < » : rangements et chaînes', () => {
  const ex = { reponse: 'herbe → lapin → renard', attendu: { accepte: ['herbe → lapin → renard'] } };
  assert.equal(comparerExercice('herbe -> lapin -> renard', ex), true);
  assert.equal(comparerExercice('lapin -> herbe -> renard', ex), false);
  const ex2 = { reponse: '$7 < 7{,}4 < 8$', attendu: { accepte: ['7 < 7,4 < 8'] } };
  assert.equal(comparerExercice('7<7,4<8', ex2), true);
  assert.equal(comparerExercice('7 < 74 < 8', ex2), false);
});
