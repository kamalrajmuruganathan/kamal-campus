/**
 * Lecteur d'expressions (lib/expressions) : priorités, puissances, racines, fonctions,
 * multiplication implicite, parenthèses manquantes, saisies qui ne doivent pas planter.
 * Les valeurs attendues sont calculées à la main.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lire, egales, latexVersSimple, saisieVersSimple, comparerCalcul, analyserCalcul } from './index.js';

/** Valeur numérique d'une saisie sans variable (via egales contre une constante). */
function vaut(saisie, valeur) {
  const lu = lire(saisie);
  assert.ok(lu, `« ${saisie} » devrait être lisible`);
  // egales a besoin de points : on ajoute 0·x pour avoir une variable.
  const a = { t: 'add', termes: [lu.a, { t: 'mul', f: [{ t: 'num', v: 0 }, { t: 'var', v: 'x' }], inv: [false, false] }], signes: [1, 1] };
  const b = lire(String(valeur));
  return egales(a, b.a);
}
const memes = (s1, s2) => egales(lire(s1).a, lire(s2).a);

test('priorités : × avant +, puissance avant ×, moins unaire après la puissance', () => {
  assert.equal(vaut('2+3*4', 14), true);
  assert.equal(vaut('(2+3)*4', 20), true);
  assert.equal(vaut('2*3^2', 18), true);
  assert.equal(vaut('-2^2', -4), true); // −(2²), pas (−2)²
  assert.equal(vaut('(-2)^2', 4), true);
  assert.equal(vaut('2^3^2', 512), true); // 2^(3^2), associativité à droite
  assert.equal(vaut('2^-1', 0.5), true);
  assert.equal(vaut('10-4-3', 3), true); // (10 − 4) − 3
  assert.equal(vaut('24/4/2', 3), true); // (24 / 4) / 2
  assert.equal(vaut('1/2*4', 2), true);
  assert.equal(memes('-x^2', '-(x^2)'), true);
  assert.equal(memes('-x^2', '(-x)^2'), false);
});

test('multiplication implicite : « 2x », « 2(x+1) », « (x+1)(x-1) », « 3x² », « 2e^x »', () => {
  assert.equal(memes('2x', '2*x'), true);
  assert.equal(memes('2(x+1)', '2x+2'), true);
  assert.equal(memes('(x+1)(x-1)', 'x^2-1'), true);
  assert.equal(memes('3x²', '3x^2'), true);
  assert.equal(memes('x²y', 'x^2*y'), true);
  assert.equal(memes('2e^x', '2*exp(x)'), true);
  assert.equal(memes('3,5x', '7x/2'), true); // virgule décimale
  assert.equal(memes('1/2x', 'x/2'), true); // lu de gauche à droite : (1/2)·x
  assert.equal(memes('2x', 'x^2'), false);
});

test('deux nombres côte à côte ne se multiplient pas ; espace des milliers lu comme un seul nombre', () => {
  assert.equal(lire('2 3'), null);
  assert.equal(vaut('1 000', 1000), true);
  assert.equal(vaut('1 000 + 1', 1001), true);
  assert.equal(memes('1 000e^(-x)', '1000*exp(-x)'), true);
  assert.equal(memes('2 000x', '2000x'), true);
  assert.equal(saisieVersSimple('1 000e^x'), '1000e^x');
});

test('racines, puissances en exposant, fonctions', () => {
  assert.equal(vaut('√9', 3), true);
  assert.equal(vaut('racine carrée de 16', 4), true);
  assert.equal(vaut('sqrt(2)^2', 2), true);
  assert.equal(memes('√x+1', 'sqrt(x)+1'), true);
  assert.equal(memes('√(x+1)', 'sqrt(x+1)'), true);
  assert.equal(memes('√(x+1)', 'sqrt(x)+1'), false);
  assert.equal(vaut('2⁸', 256), true);
  assert.equal(vaut('10⁻²', 0.01), true);
  assert.equal(vaut('ln(e^2)', 2), true);
  assert.equal(memes('lnx', 'ln(x)'), true);
  assert.equal(memes('exp(x)', 'e^x'), true);
  assert.equal(memes('e^-x', '1/e^x'), true);
  assert.equal(memes('sin^2(x)+cos^2(x)', '1'), true);
  assert.equal(vaut('cos(0)', 1), true);
  assert.equal(vaut('log(1000)', 3), true); // logarithme décimal
  assert.equal(vaut('2π', 2 * Math.PI), true);
  assert.equal(vaut('3 × 4', 12), true);
  assert.equal(vaut('3 · 4', 12), true);
  assert.equal(vaut('12 ÷ 4', 3), true);
  assert.equal(vaut('5 − 7', -2), true); // vrai signe moins
});

test('LaTeX des corrigés', () => {
  assert.equal(memes(latexVersSimple('$\\dfrac{1}{2\\sqrt{x}}$'), '1/(2sqrt(x))'), true);
  assert.equal(memes(latexVersSimple('$3x^{2} - 4x$'), '3x^2-4x'), true);
  assert.equal(latexVersSimple('$1\\,000\\,e^{-0{,}1t}$').replace(/\s/g, ''), '1000e^(-0.1t)');
  assert.equal(latexVersSimple('$\\vec{u}$'), null);
  assert.equal(latexVersSimple('$\\sqrt[3]{x}$'), null); // racine cubique : non gérée → null (pas une erreur)
});

test('parenthèses manquantes ou en trop, opérateurs isolés : illisible (null), jamais d\'exception', () => {
  for (const s of ['(x+1', 'x+1)', '((x)', 'sqrt(', '2*', '*2', '^2', '2^', '=', 'x==2', '()', '2++', '3 / ', '√', 'ln']) {
    assert.equal(lire(s), null, `« ${s} » devrait être illisible`);
  }
});

test('saisies bizarres : vide, null, emoji, caractères de contrôle, très longues, imbrications profondes', () => {
  const t0 = Date.now();
  for (const s of ['', '   ', null, undefined, '💥', '\u0000', '#', '%%', '1e999', '9'.repeat(400), '1+'.repeat(3000) + '1',
    '('.repeat(10000) + 'x' + ')'.repeat(10000), '-'.repeat(20000) + 'x', 'x^'.repeat(20000) + 'x', 'a'.repeat(5000)]) {
    assert.doesNotThrow(() => lire(s), `lire(${JSON.stringify(String(s).slice(0, 20))}) ne doit pas planter`);
  }
  assert.equal(lire(''), null);
  assert.equal(lire('   '), null);
  assert.equal(lire('('.repeat(10000) + 'x' + ')'.repeat(10000)), null); // trop long : refusé sans déborder la pile
  assert.ok(Date.now() - t0 < 2000, `trop lent : ${Date.now() - t0} ms`);
});

test('comparaison par évaluation : division par zéro et domaine (ln, √) sans plantage', () => {
  const c = analyserCalcul({ enonce: 'Calculer la dérivée de $f(x) = \\ln(x)$.', reponse: "$f'(x) = \\dfrac{1}{x}$" });
  assert.ok(c);
  assert.equal(comparerCalcul('1/x', c).juste, true);
  assert.equal(comparerCalcul('x^(-1)', c).juste, true);
  assert.equal(comparerCalcul('1/(x-x)', c).juste, false);
  assert.equal(comparerCalcul('ln(-x)', c).juste, false);
  assert.equal(comparerCalcul('', c).juste, false);
  assert.equal(comparerCalcul('1/x + 0,0001', c).juste, false);
});
