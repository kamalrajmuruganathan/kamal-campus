import { test } from 'node:test';
import assert from 'node:assert/strict';
import { comparerExercice, typeExercice, consigneExercice } from '../autocorrection/index.js';

const juste = (ex, s) => comparerExercice(s, ex, 'maths');
const verifier = (ex, oui, non) => {
  assert.equal(typeExercice(ex, 'maths'), 'auto', ex.reponse);
  for (const s of oui) assert.equal(juste(ex, s), true, `« ${s} » devrait être accepté`);
  for (const s of non) assert.equal(juste(ex, s), false, `« ${s} » devrait être refusé`);
};

test('tous les signes × écrits : mêmes facteurs, chacun séparé par ×', () => {
  verifier({ enonce: 'Réécris $ 4xy $ en faisant apparaître tous les signes $\\times$.', reponse: '$ 4 \\times x \\times y $' },
    ['4 × x × y', '4*x*y', 'y × 4 × x', '4 · x · y'],
    ['4xy', '4 × xy', '4x × y', '2 × 2 × x × y', '4 × x', '4 × x × y × 1', '4 x x x y', '4 × y × y']);
});

test('fraction décimale : une fraction de dénominateur 10, 100, 1 000… et de même valeur', () => {
  const ex = { enonce: 'Écris $4{,}107$ sous forme d\'une fraction décimale.', reponse: '$\\dfrac{4\\,107}{1\\,000}$' };
  verifier(ex, ['4107/1000', '4 107/1000', '4 107 / 1 000', '41070/10000'],
    ['4,107', '4107/100', '4 + 107/1000', '4 107', '4 6/10', '8214/2000']);
  assert.match(consigneExercice(ex, 'maths'), /fraction décimale/);
  // Déjà vérifiable avant (« 46/10 » lu comme le nombre 4,6) : recopier « 4,6 » ne suffit plus.
  verifier({ enonce: 'Écris $4{,}6$ sous la forme d\'une fraction décimale.', reponse: '$\\dfrac{46}{10}$' },
    ['46/10', '460/100'], ['4,6', '23/5', '4 + 6/10', '47/10']);
});

test('nombre mixte : la partie entière, puis une fraction inférieure à 1 de même valeur', () => {
  verifier({ enonce: 'Écris $\\dfrac{3\\,045}{100}$ sous forme d\'un nombre mixte (un entier + une fraction inférieure à 1).', reponse: '$30 + \\dfrac{45}{100}$' },
    ['30 + 45/100', '45/100 + 30', '30+45/100', '30 + 9/20'],
    ['3045/100', '30,45', '30 + 145/100', '31 + 45/100', '29 + 145/100', '30 + 4/10', '30']);
});

test('équation puis solution (attendus.json) : même équation, mêmes nombres, pas déjà résolue', () => {
  verifier({ enonce: 'Sami a une somme x. Sa grand-mère lui donne 15 € ; il a alors 42 €. Écris une équation, puis résous-la.', reponse: 'R', attendu: { accepte: ['x + 15 = 42 ; x = 27 €'] } },
    ['x + 15 = 42 ; x = 27', 'x+15=42 ; 27', '15 + x = 42 et x = 27 €', '42 = x + 15 ; 27 euros'],
    ['x = 27 ; 27', '27 = x ; 27', 'x - 27 = 0 ; 27', 'x + 42 = 15 ; 27', 'x + 15 = 42 ; 57', 'x + 15 = 42', '27',
      'x + 15 = 42 ; 27 cm', 'x + 15 = 42 ; 42 - 15', '2x + 30 = 84 ; 27', '27 ; x + 15 = 42']);
  const p = { enonce: 'Un pack de 6 bouteilles coûte 9 €. Écris une équation, puis trouve le prix d\'une bouteille.', reponse: 'R', attendu: { accepte: ['6x = 9 ; x = 1,5 €'] } };
  verifier(p, ['6x = 9 ; 1,5', '6 × x = 9 ; 1,50 €', '9 = 6x ; x = 1,5'], ['6x = 9 ; 9/6', '6x = 9 ; 3/2', '6x = 9 ; 1,6', 'x = 9/6 ; 1,5', '6 + x = 9 ; 1,5']);
  assert.match(consigneExercice(p, 'maths'), /2 réponses dans l'ordre.*équation puis la solution/);
});

test('expression réduite puis sa valeur (attendus.json)', () => {
  const ex = { enonce: 'Un rectangle a pour longueur x + 3 et pour largeur x. Écris son périmètre sous forme réduite, puis calcule-le pour x = 5.', reponse: 'R', attendu: { accepte: ['4x + 6 ; 26 cm'] } };
  verifier(ex, ['4x + 6 ; 26', '6 + 4x ; 26 cm', 'P = 4x + 6 ; P = 26 cm', '4×x+6 ; 26cm'],
    ['2(x + 3) + 2x ; 26', '2x + 2x + 6 ; 26', '4x + 6 ; 25', '26 ; 4x + 6', '4x + 6', '4x + 6 ; 26 m', '10x ; 26']);
  assert.match(consigneExercice(ex, 'maths'), /expression puis sa valeur/);
  verifier({ enonce: 'Écris le prix payé pour n places, puis calcule-le pour n = 4.', reponse: 'R', attendu: { accepte: ['7n + 5 ; 33 €'] } },
    ['7n + 5 ; 33', '7 × n + 5 ; 33 €', '5 + 7n ; 33 euros'], ['7n + 5 ; 34', '12n ; 33', '7 × 4 + 5 ; 33', '7x + 5 ; 33']);
});

test('vecteur puis vecteur nul (attendus.json)', () => {
  verifier({ enonce: 'Quel vecteur décrit le retour ? Que vaut le déplacement total ?', reponse: 'R', attendu: { accepte: ['(-4 ; -1) ; vecteur nul'] } },
    ['(-4 ; -1) ; vecteur nul', 'BA(-4;-1) ; 0', '(-4 ; -1) et 0⃗', '(-4;-1) ; (0 ; 0)', '(−4 ; −1) ; le vecteur nul'],
    ['(4 ; 1) ; vecteur nul', '(-4 ; -1) ; 5', '(-4 ; -1)', '(-1 ; -4) ; 0', 'vecteur nul ; (-4 ; -1)', '(-4 ; -1) ; 0 cm']);
});

test('valeur exacte puis arrondi, avec unité facultative (attendus.json)', () => {
  verifier({ enonce: 'Calculer le volume d\'une boule de rayon 2 cm (en fonction de π, puis arrondi au dixième).', reponse: 'R', attendu: { accepte: ['32π/3 cm³ ≈ 33,5 cm³'] } },
    ['32π/3 cm³ ≈ 33,5 cm³', '32π/3 ; 33,5', '(32/3)π ; 33,5 cm³', '32/3 pi ≈ 33,5', '32pi/3 cm3 ; 33,5 cm3'],
    ['33,5', '32π/3', '32π/3 ; 33,51', '33,5 ; 32π/3', '32π/3 ; 33,5 m³', '10,7π ; 33,5', '32π ; 33,5']);
});

test('comparaisons, encadrements, rangements', () => {
  verifier({ enonce: 'Encadre $\\sqrt{20}$ par deux nombres entiers consécutifs.', reponse: '$4 < \\sqrt{20} < 5$' },
    ['4 < √20 < 5', '5 > √20 > 4', '4<racine(20)<5', '4 < sqrt(20) < 5'],
    ['4 < 4,47 < 5', '4 <= √20 <= 5', '3 < √20 < 5', '4 ; 5', '4 < √20', '5 < √20 < 4', '4 < √21 < 5']);
  verifier({ enonce: 'Range dans l\'ordre croissant : $3$ ; $-5$ ; $0$ ; $-1$ ; $2$.', reponse: '$-5 < -1 < 0 < 2 < 3$' },
    ['-5 < -1 < 0 < 2 < 3', '-5 ; -1 ; 0 ; 2 ; 3', '−5, −1, 0, 2, 3', '3 > 2 > 0 > -1 > -5'],
    ['-5 ; -1 ; 2 ; 0 ; 3', '-5 < -1 < 0 < 2', '3 ; 2 ; 0 ; -1 ; -5', '-5 < -1 < 0 < 3 < 2']);
  verifier({ enonce: 'Compare $45\\,090$ et $45\\,900$ : écris $<$ ou $>$.', reponse: '$45\\,090 < 45\\,900$' },
    ['45 090 < 45 900', '45090 < 45900', '45 900 > 45 090'], ['<', '45 090 > 45 900', '45 090 ; 45 900']);
  verifier({ enonce: 'Comparer $\\dfrac{1}{-0{,}5}$ et $\\dfrac{1}{-0{,}25}$ sans calculatrice.', reponse: '$\\dfrac{1}{-0{,}5} > \\dfrac{1}{-0{,}25}$' },
    ['1/(-0,5) > 1/(-0,25)', '1/(-0,25) < 1/(-0,5)'], ['-2 > -4', '1/(-0,5) < 1/(-0,25)']);
  // Une chaîne fausse dans la réponse, ou recopiée de l'énoncé : pas d'autocorrection.
  assert.equal(typeExercice({ enonce: 'Compare $3$ et $4$.', reponse: '$4 < 3$' }, 'maths'), 'ouverte');
  assert.equal(typeExercice({ enonce: 'Vrai ou faux : $2 < 3$ ?', reponse: '$2 < 3$' }, 'maths'), 'ouverte');
});

test('un seul signe à écrire : « < » (ou la comparaison complète)', () => {
  verifier({ enonce: 'Compare 124 et 130 : écris $<$ ou $>$.', reponse: '$<$' }, ['<', '124 < 130', '130 > 124'], ['>', '=', '124 > 130', 'inférieur']);
  verifier({ enonce: 'Compare 4 512 et 4 215 : écris $<$ ou $>$.', reponse: '$>$' }, ['>', '4 512 > 4 215', '4215 < 4512'], ['<', '4 512 < 4 215']);
});

test('limite infinie : le signe est exigé', () => {
  verifier({ enonce: 'Déterminer $\\displaystyle\\lim_{x\\to+\\infty}(x-\\ln x)$.', reponse: '$+\\infty$.' },
    ['+∞', '+inf', "plus l'infini", 'lim = +∞', '+ ∞', '+infini'], ['∞', '-∞', 'infini', '0', '+1']);
  verifier({ enonce: 'Déterminer la limite.', reponse: '$-\\infty$' }, ['-∞', '−∞', "moins l'infini", '-inf'], ['+∞', '∞']);
});

test('égalité de calcul : « 3 × 5 = 15 » (ordre libre pour + et ×)', () => {
  verifier({ enonce: 'Écris $5 + 5 + 5$ avec le signe $\\times$, puis calcule.', reponse: '$3 \\times 5 = 15$' },
    ['3 × 5 = 15', '5 x 3 = 15', '15 = 3 × 5', '3*5=15'], ['15', '3 × 5', '5 + 5 + 5 = 15', '3 × 5 = 16', '3 + 5 = 15', '3 × 5 = 15 = 5 × 3']);
  verifier({ enonce: 'On sait que $10 - 4 = 6$. Quelle addition permet de le vérifier ?', reponse: '$6 + 4 = 10$' },
    ['6 + 4 = 10', '4 + 6 = 10', '10 = 6 + 4'], ['10 - 4 = 6', '10', '6 + 4 = 11', '6 × 4 = 10']);
  // L'égalité de la réponse déjà dans l'énoncé, ou fausse : pas d'autocorrection.
  assert.equal(typeExercice({ enonce: 'Recopie $3 \\times 5 = 15$.', reponse: '$3 \\times 5 = 15$' }, 'maths'), 'ouverte');
  assert.equal(typeExercice({ enonce: 'Calcule avec le signe ×.', reponse: '$3 \\times 5 = 16$' }, 'maths'), 'ouverte');
});
