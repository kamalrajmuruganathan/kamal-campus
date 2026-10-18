import { test } from 'node:test';
import assert from 'node:assert/strict';
import { latexEnMots, segmentsFiche, segmentsTexte, estEtranger, lectureActive } from './index.js';

test('formules lues en mots', () => {
  assert.equal(latexEnMots('3 + 4 = 7'), '3 plus 4 égale 7');
  assert.equal(latexEnMots('12 \\times 3 = 36'), '12 fois 3 égale 36');
  assert.equal(latexEnMots('\\dfrac{1}{2}'), '1 sur 2');
  assert.equal(latexEnMots('x^2'), 'x au carré');
  assert.equal(latexEnMots('1\\,250'), '1250');
  assert.equal(latexEnMots('9 - 4 = 5'), '9 moins 4 égale 5');
});

test('où proposer le bouton Écouter', () => {
  assert.equal(lectureActive('italien'), true);
  assert.equal(lectureActive('maths', 'cp'), true);
  assert.equal(lectureActive('maths', 'cm2'), false);
  assert.equal(lectureActive('maths', 'cm2', { lecturePartout: true }), true);
});

test('langue de chaque morceau', () => {
  assert.equal(estEtranger('Good morning!', 'anglais'), true);
  assert.equal(estEtranger('le mot hello', 'anglais'), false);
  assert.equal(estEtranger('Bonjour', 'francais'), false);
  const s = segmentsTexte('Traduis : « I am happy ».', 'anglais');
  assert.deepEqual(s.map((x) => x.langue), ['francais', 'anglais']);
  assert.equal(s[1].texte, 'I am happy');
});

test('fiche : vocabulaire lu dans les deux langues, formules lues en CP', () => {
  const md = '---\nid: x\n---\n# Les animaux\n\n| Anglais | Français |\n|---|---|\n| a dog | un chien |\n| a cat | un chat |\n';
  const s = segmentsFiche(md, 'anglais');
  assert.deepEqual(s.map((x) => [x.langue, x.texte]), [
    ['francais', 'Les animaux. Anglais. Français.'], ['anglais', 'a dog.'], ['francais', 'un chien.'], ['anglais', 'a cat.'], ['francais', 'un chat.'],
  ]);
  const t = segmentsFiche('| Mot | Sens |\n|---|---|\n| dog | chien |\n| cat | chat |', 'anglais');
  assert.deepEqual(t.map((x) => x.langue), ['francais', 'anglais', 'francais', 'anglais', 'francais']);
  const cp = segmentsFiche('# Additionner\n\nOn calcule $3 + 4 = 7$.\n\n![schéma](data:image/svg+xml;base64,AAA)', 'maths');
  assert.match(cp.map((x) => x.texte).join(' '), /3 plus 4 égale 7/);
  assert.doesNotMatch(cp.map((x) => x.texte).join(' '), /schéma|base64/);
  const long = segmentsFiche('Une phrase assez longue pour remplir. '.repeat(30), 'maths');
  assert.ok(long.length > 3 && long.every((x) => x.texte.length <= 260));
});

test('un passage en gras dans la même langue reste dans la même phrase', () => {
  const s = segmentsTexte('On part du **même radical que le futur**, auquel on ajoute **-ei, -esti**.', 'italien');
  assert.equal(s[0].langue, 'francais');
  assert.equal(s[0].texte, 'On part du même radical que le futur , auquel on ajoute');
  assert.equal(s[1].langue, 'italien');
});

test('titres et petites phrases françaises lus en français (italien, espagnol…)', () => {
  // Titres de fiche en français : « le » / « la » existent aussi en italien et en espagnol.
  for (const [t, mat] of [
    ['Le conditionnel', 'italien'], ['Le discours indirect', 'italien'], ['La voix passive', 'italien'],
    ["c'est...", 'italien'], ["j'ai...", 'italien'], ['père', 'italien'], ['passé', 'italien'], ['la chose aimée', 'italien'],
    ['quelque chose me plaît', 'italien'], ['futur', 'italien'], ['Habitude', 'italien'], ['tout droit', 'italien'],
    ['Le subjonctif', 'espagnol'], ['toujours', 'espagnol'], ['états passagers', 'espagnol'], ['change le sens', 'espagnol'],
    ['Confondre avec le pretérito perfecto', 'espagnol'], ['définit', 'espagnol'], ['Les emplois de SER', 'espagnol'],
    ['son numéro', 'espagnol'],
    ['Le présent simple', 'anglais'], ['le mot hello', 'anglais'],
    ['Les questions', 'allemand'], ['Le datif', 'allemand'], ['même sujet', 'allemand'],
  ]) assert.equal(estEtranger(t, mat), false, `${t} (${mat}) devrait être lu en français`);
});

test('mots et phrases de la langue étudiée toujours lus avec sa voix', () => {
  for (const [t, mat] of [
    ['Il verbo piacere', 'italien'], ['La famiglia', 'italien'], ["Dov'è la stazione?", 'italien'], ["L'imperfetto", 'italien'],
    ['Questo è mio padre.', 'italien'], ['caffè', 'italien'], ['perché', 'italien'], ['la città', 'italien'], ['il fratello', 'italien'],
    ['Le indicazioni', 'italien'], ['lo sport', 'italien'],
    ['El subjuntivo : los usos', 'espagnol'], ['Los números y la edad', 'espagnol'], ['¿Cuántos años tienes?', 'espagnol'],
    ['hablé', 'espagnol'], ['sois', 'espagnol'], ['Estoy bien.', 'espagnol'], ['la mañana', 'espagnol'],
    ['The present perfect', 'anglais'], ['Good morning!', 'anglais'], ["I don't like it.", 'anglais'],
    ['Die Familie', 'allemand'], ['Wie heißt du?', 'allemand'], ['Du hast einen Hund.', 'allemand'],
  ]) assert.equal(estEtranger(t, mat), true, `${t} (${mat}) devrait être lu dans la langue`);
});

test('texte non marqué : propositions, parenthèses, prénoms', () => {
  const langues = (t, mat) => segmentsTexte(t, mat).map((x) => x.langue);
  assert.deepEqual(langues("Dov'è la stazione? → Où est la gare ?", 'italien'), ['italien', 'francais']);
  assert.deepEqual(langues('**il nonno** (le grand-père)', 'italien'), ['italien', 'francais']);
  assert.deepEqual(langues('Ho un fratello e una sorella. = J\'ai un frère et une sœur.', 'italien'), ['italien', 'francais']);
  assert.deepEqual(langues('Marco aime le foot.', 'italien'), ['francais']); // un prénom en -o ne suffit pas
  assert.deepEqual(langues('Complète : Lui ___ (credere) alle favole.', 'italien'), ['francais', 'italien']);
  assert.deepEqual(langues('Complète : Noi ___ (dormire) fino a tardi.', 'italien'), ['francais', 'italien']);
  assert.deepEqual(langues('On dit **il** ou **lo** devant un mot masculin.', 'italien'),
    ['francais', 'italien', 'francais', 'italien', 'francais']);
  assert.deepEqual(langues('Pour dire son âge, on utilise le verbe **tener** (avoir).', 'espagnol'), ['francais', 'espagnol', 'francais']);
  assert.deepEqual(langues('Le pretérito raconte des actions terminées (hier, il y a deux jours).', 'espagnol'), ['francais']);
  // Hors langues vivantes : tout en français.
  assert.deepEqual(langues('La pizza mi piace.', 'maths'), ['francais']);
});

test('fiche : titre français, tableau de conjugaison, cellule avec traduction', () => {
  const md = '# Le conditionnel\n\nOn forme le **condizionale** sur le radical du futur.\n\n' +
    '| Personne | -are (parlare) | -ere (credere) |\n|---|---|---|\n| io | parl**erei** | cred**erei** |\n| noi | parl**eremmo** | cred**eremmo** |\n\n' +
    '| Masculin | Féminin |\n|---|---|\n| il nonn**o** (le grand-père) | la nonn**a** (la grand-mère) |\n| il figli**o** (le fils) | la figli**a** (la fille) |\n';
  const s = segmentsFiche(md, 'italien');
  assert.deepEqual(s[0], { texte: 'Le conditionnel. On forme le', langue: 'francais' });
  assert.equal(s[1].langue, 'italien');
  const lus = s.map((x) => `${x.langue === 'italien' ? 'IT' : 'FR'}:${x.texte}`);
  assert.match(lus.join(' | '), /IT:[^|]*io\. parlerei\. crederei\. noi\. parleremmo\. crederemmo\. \| FR:Masculin/);
  assert.ok(lus.includes('IT:il nonno') && lus.includes('FR:le grand-père.') && lus.includes('IT:la nonna'), lus.join(' | '));
  assert.ok(lus.includes('FR:la grand-mère.'), lus.join(' | '));
});
