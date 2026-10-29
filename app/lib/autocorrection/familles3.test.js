// Familles ajoutées le 24/10/2026 (chantier « autocorrection, suite » 70,0 % → 70,8 %) :
// « Remets dans l'ordre » (ordre), « Classe / Associe » (groupes), phrases à recopier exactement
// (exacte), équations différentielles (famille de solutions), mots dans une suite de réponses,
// signe « = » d'une comparaison, sens d'une évolution (« -25 % » pour une baisse).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeExercice, comparerExercice, consigneExercice, fusionnerAttendus } from './index.js';

const verifier = (ex, justes, faux, matiere = 'maths') => {
  assert.equal(typeExercice(ex, matiere), 'auto', JSON.stringify(ex.attendu || ex.reponse));
  for (const j of justes) assert.equal(comparerExercice(j, ex, matiere), true, `devrait accepter « ${j} »`);
  for (const f of faux) assert.equal(comparerExercice(f, ex, matiere), false, `devrait refuser « ${f} »`);
};

// ─── Remets dans l'ordre ────────────────────────────────────────────────────

test('ordre : éléments de l\'énoncé dans le bon ordre, abréviations sans ambiguïté', () => {
  const ex = {
    enonce: 'Remets dans l\'ordre : le bac est plein de glaçons ; on remplit un bac d\'eau ; on met le bac au congélateur ; on attend quelques heures.',
    reponse: 'On remplit le bac → on le met au congélateur → on attend → le bac est plein de glaçons.',
    attendu: { ordre: ['on remplit un bac d\'eau', 'on met le bac au congélateur', 'on attend quelques heures', 'le bac est plein de glaçons'] },
  };
  verifier(ex, [
    'On remplit le bac → on le met au congélateur → on attend → le bac est plein de glaçons.',
    'on remplit un bac d\'eau, on met le bac au congélateur, on attend quelques heures, le bac est plein de glaçons',
    '1) on remplit un bac d\'eau\n2) on met le bac au congélateur\n3) on attend quelques heures\n4) le bac est plein de glaçons',
  ], [
    'on met le bac au congélateur, on remplit un bac d\'eau, on attend, le bac est plein de glaçons',
    'on remplit, on met, on attend, le bac', // « le bac » : plusieurs éléments possibles
    'on remplit un bac d\'eau, on met le bac au congélateur, le bac est plein de glaçons', // un élément manque
  ], 'sciences');
  assert.match(consigneExercice(ex, 'sciences'), /4 éléments dans l'ordre/);
});

test('ordre : lettres des étapes, phrases avec virgules, pluriels', () => {
  const lettres = { enonce: 'Classe dans l\'ordre : (a) chercher des exemples ; (b) définir les mots-clés ; (c) choisir le plan.', reponse: '(b) → (c) → (a)', attendu: { ordre: ['(b)¦définir les mots-clés', '(c)¦choisir le plan', '(a)¦chercher des exemples'] } };
  verifier(lettres, ['b, c, a', '(b) définir les mots-clés → (c) choisir le plan → (a) chercher des exemples'], ['a, b, c', 'b, a, c'], 'francais');
  const phrases = { enonce: 'Range ces phrases : « Demain, je lirai. » « Hier, je lisais. » « Aujourd\'hui, je lis. »', reponse: 'x', attendu: { ordre: ['Hier, je lisais.', 'Aujourd\'hui, je lis.', 'Demain, je lirai.'] } };
  verifier(phrases, ['Hier, je lisais. Aujourd\'hui, je lis. Demain, je lirai.', 'Hier, je lisais → Aujourd\'hui, je lis → Demain, je lirai'],
    ['Demain, je lirai. Aujourd\'hui, je lis. Hier, je lisais.'], 'francais');
  const chaine = { enonce: 'Le lézard attrape le criquet. Le criquet grignote les herbes. La couleuvre avale le lézard.', reponse: 'herbe → criquet → lézard → couleuvre', attendu: { ordre: ['herbes', 'criquet', 'lézard', 'couleuvre'] } };
  verifier(chaine, ['herbe → criquet → lézard → couleuvre', 'les herbes, le criquet, le lézard, la couleuvre'], ['criquet → herbe → lézard → couleuvre'], 'sciences');
  // Sigles : « HTTPS » n'est pas le pluriel de « HTTP ».
  const sigles = { enonce: 'HTTP, HTTPS', reponse: 'x', attendu: { ordre: ['HTTP', 'HTTPS'] } };
  verifier(sigles, ['HTTP, HTTPS'], ['HTTPS, HTTP', 'HTTP, HTTP'], 'snt');
});

// ─── Classe, associe : groupes ──────────────────────────────────────────────

test('groupes : groupes et éléments dans n\'importe quel ordre, étiquette à compléter', () => {
  const ex = {
    enonce: 'Classe ces monuments selon leur style : abbatiale de Conques, cathédrale de Chartres, Sainte-Chapelle, abbatiale de Cluny.',
    reponse: 'Roman : Conques, Cluny. Gothique : Chartres, Sainte-Chapelle.',
    attendu: { groupes: { roman: ['abbatiale de Conques', 'abbatiale de Cluny'], gothique: ['cathédrale de Chartres', 'Sainte-Chapelle'] } },
  };
  verifier(ex, [
    'Roman : Conques, Cluny. Gothique : Chartres, Sainte-Chapelle.',
    'gothique : Chartres et Sainte-Chapelle ; roman : Conques et Cluny',
    'style roman : abbatiale de Conques, abbatiale de Cluny ; style gothique : cathédrale de Chartres, Sainte-Chapelle',
  ], [
    'Roman : Conques, Chartres ; Gothique : Cluny, Sainte-Chapelle',
    'Roman : abbatiale ; Gothique : Chartres, Sainte-Chapelle', // « abbatiale » : deux éléments possibles
    'Roman : Conques, Cluny',
  ], 'arts');
  // La consigne ne donne pas les étiquettes (elles font partie de la réponse).
  assert.doesNotMatch(consigneExercice(ex, 'arts'), /roman|gothique/i);
});

test('groupes : associations dans les deux sens, lettres, parenthèses, virgule décimale', () => {
  const assoc = { enonce: 'Associe chaque action à une fonction : mesurer l\'humidité, décider, ouvrir la vanne.', reponse: 'x',
    attendu: { groupes: { 'mesurer l\'humidité¦mesurer': ['acquérir'], décider: ['traiter'], 'ouvrir la vanne': ['agir'] } } };
  verifier(assoc, ['Mesurer → acquérir ; décider → traiter ; ouvrir la vanne → agir', 'acquérir : mesurer ; traiter : décider ; agir : ouvrir la vanne'],
    ['Mesurer → traiter ; décider → acquérir ; ouvrir la vanne → agir'], 'techno');
  const lettres = { enonce: 'Indique : a) Sophie devient cadre ; b) la fille d\'un agriculteur devient professeure ; c) Karim est ouvrier comme son père.', reponse: 'x',
    attendu: { groupes: { intragénérationnelle: ['a'], intergénérationnelle: ['b', 'c'] } } };
  verifier(lettres, ['a) Intragénérationnelle ; b) et c) intergénérationnelle', 'intragénérationnelle : a ; intergénérationnelle : b, c'],
    ['a) intergénérationnelle ; b) et c) intragénérationnelle'], 'ses');
  const paren = { enonce: 'Relève les verbes au prétérit et leur base : Emma went to the market, bought apples and walked home.', reponse: 'went (go), bought (buy), walked (walk)',
    attendu: { groupes: { go: ['went'], buy: ['bought'], walk: ['walked'] } } };
  verifier(paren, ['went (go), bought (buy), walked (walk)', 'went : go ; bought : buy ; walked : walk'], ['went (buy), bought (go), walked (walk)'], 'anglais');
  const decimales = { enonce: 'Classe en acide, neutre ou basique les pH : 2,0 ; 7,0 ; 12 ; 5,5.', reponse: 'x',
    attendu: { groupes: { 'acides¦acide': ['2,0', '5,5'], neutre: ['7,0'], basique: ['12'] } } };
  verifier(decimales, ['acides : 2,0 et 5,5 ; neutre : 7,0 ; basique : 12', 'acides : 2,0, 5,5 ; neutre : 7,0 ; basique : 12'],
    ['acides : 2,0 et 7,0 ; neutre : 5,5 ; basique : 12'], 'physique-chimie');
});

// ─── Phrases à recopier exactement ─────────────────────────────────────────

test('exacte : casse, accents et ponctuation comptent ; conjugaisons « il/elle/on »', () => {
  const maj = { enonce: 'Récris ce texte avec les bonnes majuscules : « mardi, inès va à lille. elle voit sa Tante. »', reponse: 'Mardi, Inès va à Lille. Elle voit sa tante.', attendu: { exacte: ['Mardi, Inès va à Lille. Elle voit sa tante.'] } };
  verifier(maj, ['Mardi, Inès va à Lille. Elle voit sa tante', '« Mardi, Inès va à Lille. Elle voit sa tante. »'],
    ['mardi, inès va à lille. elle voit sa Tante.', 'Mardi, Ines va à Lille. Elle voit sa tante.', 'Mardi, Inès va à Lille. Elle voit sa Tante.'], 'francais');
  const conj = { enonce: 'Conjugue « jouer » au futur simple à toutes les personnes.', reponse: 'x', attendu: { exacte: ['je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils joueront'] } };
  verifier(conj, ['je jouerai, tu joueras, il/elle/on jouera, nous jouerons, vous jouerez, ils/elles joueront', 'Je jouerai, tu joueras, il (elle) jouera, nous jouerons, vous jouerez, ils (elles) joueront'],
    ['je jouerai, tu joueras, il jouera, nous jouerons, vous jouerez, ils jouerons', 'JE JOUERAI, TU JOUERAS, IL JOUERA, NOUS JOUERONS, VOUS JOUEREZ, ILS JOUERONT'], 'francais');
  const allemand = { enonce: 'Conjugue « spielen » au présent.', reponse: 'x', attendu: { exacte: ['ich spiele, du spielst, er spielt, wir spielen, ihr spielt, sie spielen'] } };
  verifier(allemand, ['ich spiele, du spielst, er/sie/es spielt, wir spielen, ihr spielt, sie/Sie spielen'], ['ich spiele, du spielt, er spielt, wir spielen, ihr spielt, sie spielen'], 'allemand');
  const dialogue = { enonce: 'Ponctue ce petit dialogue : Hola Qué tal — Muy bien Y tú', reponse: 'x', attendu: { exacte: ['¡Hola! ¿Qué tal? — Muy bien, ¿y tú?'] } };
  verifier(dialogue, ['¡Hola! ¿Qué tal? - Muy bien, ¿y tú?'], ['Hola ¿Qué tal? — Muy bien, ¿y tú?', '¡Hola! ¿Qué tal? — Muy bien ¿y tú?'], 'espagnol');
  assert.match(consigneExercice(maj, 'francais'), /majuscules, accents et ponctuation/);
  // Fusion depuis attendus.json.
  const fusion = fusionnerAttendus({ exercices: [{ id: 1, enonce: 'e', reponse: 'r' }] }, { 1: { reponse: 'r', exacte: ['Oui.'] } }).exercice.exercices[0];
  assert.deepEqual(fusion.attendu, { exacte: ['Oui.'] });
});

// ─── Équations différentielles ─────────────────────────────────────────────

test('équation différentielle : la famille de solutions, quel que soit le nom de la constante', () => {
  const ex = { enonce: 'Résoudre sur $\\mathbb{R}$ l\'équation différentielle $y\' = 5y$.', reponse: '$y(x) = Ce^{5x}$, $\\;C\\in\\mathbb{R}$.' };
  verifier(ex, ['y = Ce^(5x)', 'y(x) = k e^(5x), k ∈ R', 'y = Ae^{5x} avec A réel', 'y = λe^(5x), λ ∈ R'],
    ['y = 5e^(5x)', 'y = Ce^(-5x)', 'y = Ce^(5x) + 1', 'y = e^(5x)', 'y = Ce^(5x), K ∈ R', 'y = Ce^(5x) + K']);
  const affine = { enonce: 'Résoudre l\'équation différentielle $y\'=3x^{2}-4$.', reponse: '$y(x)=x^{3}-4x+C$, $C\\in\\mathbb{R}$' };
  verifier(affine, ['y = x^3 - 4x + C', 'x³-4x+k, k∈ℝ'], ['x^3 - 4x', '3x^2', 'x^3 + 4x + C']);
  assert.match(consigneExercice(ex), /constante/);
  // Une condition initiale (une seule solution) n'est pas de cette famille.
  assert.equal(typeExercice({ enonce: 'Résoudre $y\' = 2y$ avec $y(0) = 3$.', reponse: '$y(x) = Ce^{2x}$, $C\\in\\mathbb{R}$' }), 'ouverte');
});

// ─── Mots dans une suite de réponses ───────────────────────────────────────

test('suite : expression puis mot (« -5/(x-1)^2 ; négatif »), synonymes simples', () => {
  const ex = { enonce: 'Dériver $f(x) = \\dfrac{2x + 3}{x - 1}$ sur $]1\\,;+\\infty[$, puis donner le signe de $f\'(x)$.', reponse: 'x', attendu: { accepte: ['-5/(x - 1)^2 ; négatif'] } };
  verifier(ex, ['-5/(x-1)^2 ; négatif', '-5/(x-1)² ; strictement négatif', 'f\'(x) = -5/(x-1)^2 ; négative'], ['-5/(x-1)^2 ; positif', '5/(x-1)^2 ; négatif', '-5/(x-1)^2']);
  assert.match(consigneExercice(ex), /expression puis mot/);
  const trig = { enonce: 'Résoudre sur $[0\\,;2\\pi[$ : a) $\\cos x = 2$ ; b) $\\cos x = -1$.', reponse: 'x', attendu: { accepte: ['aucune solution ; π'] } };
  verifier(trig, ['aucune solution ; π', 'pas de solution ; x = pi'], ['aucune solution ; 2π', 'π ; aucune solution']);
  const cx = { enonce: 'Calculer $Z$ puis son module. Est-il égal à la somme des modules ?', reponse: 'x', attendu: { accepte: ['40 - 30i ; 50 Ω ; non'] } };
  verifier(cx, ['40 - 30i ; 50 ; non', 'Z = 40-30i ; |Z| = 50 Ω ; non'], ['40 - 30i ; 50 ; oui']);
});

// ─── Comparer : « = » ──────────────────────────────────────────────────────

test('comparaison : « = » seul, ou la comparaison écrite en entier', () => {
  const ex = { enonce: 'Compare $\\dfrac{6}{6}$ et $1$ : écris $<$, $>$ ou $=$.', reponse: '$\\dfrac{6}{6} = 1$', attendu: { accepte: ['='] } };
  verifier(ex, ['=', '6/6 = 1', '1 = 6/6', '6/6=1'], ['<', '>', '6/6 < 1', '5/6 = 1']);
  const inf = { enonce: 'Compare $3$ et $4$.', reponse: 'x', attendu: { accepte: ['<'] } };
  verifier(inf, ['<', '3 < 4', '4 > 3'], ['>', '4 < 3', '3 > 4']);
});

// ─── Sens d'une évolution ──────────────────────────────────────────────────

test('évolution : « une baisse de 25 % » accepte « -25 % », refuse « +25 % » et « 25 % »', () => {
  const ex = { enonce: 'Un prix passe de 80 € à 60 €. Quelle est son évolution en pourcentage ?', reponse: 'Une baisse de 25 %' };
  verifier(ex, ['-25 %', '−25 %', 'baisse de 25 %', 'une diminution de 25 %'], ['+25 %', '25 %', 'une hausse de 25 %', '-20 %']);
});

test('consigne : forme écrite à la main en plusieurs morceaux', () => {
  const ex = { enonce: 'Donne les états successifs de [4, 1, 3, 2] pendant le tri par insertion.', reponse: 'x', attendu: { accepte: ['[1, 4, 3, 2] ; [1, 3, 4, 2] ; [1, 2, 3, 4]'] } };
  verifier(ex, ['[1, 4, 3, 2] ; [1, 3, 4, 2] ; [1, 2, 3, 4]', '[1,4,3,2], [1,3,4,2], [1,2,3,4]'], ['[1, 4, 3, 2] ; [1, 3, 2, 4] ; [1, 2, 3, 4]'], 'nsi');
  assert.match(consigneExercice(ex, 'nsi'), /3 réponses dans l'ordre/);
});
