import { test } from 'node:test';
import assert from 'node:assert/strict';
import { analyserCalcul, comparerCalcul, lire, latexVersSimple } from './index.js';

const verdict = (c, s) => {
  const r = comparerCalcul(s, c);
  return r.juste ? 'juste' : r.raison || 'faux';
};

test('lecture du LaTeX des corrigés', () => {
  assert.equal(latexVersSimple('$\\dfrac{3}{(x + 2)^2}$'), '((3)/((x + 2)^2))');
  assert.equal(latexVersSimple('$10\\cos(2\\,000\\pi\\,t)$').replace(/\s+/g, ''), '10cos(2000pit)');
  assert.equal(latexVersSimple('$I = 3{,}0\\ \\mathrm{A}$'), null); // unité : pas une expression
  assert.equal(lire('2x + 5y + 4 = 0').kind, 'eq');
  assert.equal(lire("f'(x) = 3x² - 2").kind, 'expr');
});

test('développer : toute forme développée et réduite, pas la forme de départ', () => {
  const c = analyserCalcul({ enonce: 'Développe $ 8(x - 5) $.', reponse: '$ 8x - 40 $' });
  assert.equal(c.regle, 'developpe');
  assert.equal(verdict(c, '8x-40'), 'juste');
  assert.equal(verdict(c, '-40 + 8x'), 'juste');
  assert.equal(verdict(c, '8x − 40'), 'juste');
  assert.equal(verdict(c, '8(x-5)'), 'forme');
  assert.equal(verdict(c, '8x - 4'), 'faux');
  const r = analyserCalcul({ enonce: "Réduis l'expression $ 4x + 3 + 2x + 5 $.", reponse: '$ 6x + 8 $' });
  assert.equal(verdict(r, '4x + 3 + 2x + 5'), 'forme'); // recopier l'énoncé ne suffit pas
  assert.equal(verdict(r, '8 + 6x'), 'juste');
});

test('factoriser : un produit, des facteurs réduits, le bon facteur commun', () => {
  const c = analyserCalcul({ enonce: 'Factorise $ 10x + 15 $ en mettant en évidence le plus grand facteur commun.', reponse: '$ 5(2x + 3) $' });
  assert.equal(verdict(c, '5(2x+3)'), 'juste');
  assert.equal(verdict(c, '(2x+3)×5'), 'juste');
  assert.equal(verdict(c, '10x+15'), 'forme');
  assert.equal(verdict(c, '2,5(4x+6)'), 'forme');
  const d = analyserCalcul({ enonce: 'Factorise $C = (x - 2)^2 + (x - 2)(3x + 1)$.', reponse: '$C = (x - 2)(4x - 1)$' });
  assert.equal(verdict(d, '(x-2)(4x-1)'), 'juste');
  assert.equal(verdict(d, '(x-2)(3x+1+x-2)'), 'forme');
  assert.equal(verdict(d, '(x-2)(4x+1)'), 'faux');
});

test('dérivées, tangentes, suites : toute écriture égale', () => {
  const c = analyserCalcul({ enonce: 'Dériver $f(x) = \\mathrm{e}^{-2x + 1}$ sur $\\mathbb{R}$.', reponse: "$f'(x) = -2\\,\\mathrm{e}^{-2x + 1}$." });
  assert.equal(verdict(c, "f'(x) = -2e^(-2x+1)"), 'juste');
  assert.equal(verdict(c, '-2exp(1-2x)'), 'juste');
  assert.equal(verdict(c, 'e^(-2x+1)'), 'faux');
  const s = analyserCalcul({ enonce: 'Dériver $f(x)=\\sin^2(x)$.', reponse: "$f'(x)=2\\sin(x)\\cos(x)$" });
  assert.equal(verdict(s, 'sin(2x)'), 'juste');
  assert.equal(verdict(s, '2sin x cos x'), 'juste');
  const u = analyserCalcul({ enonce: 'Pour la suite arithmétique de premier terme $u_1 = 10$ et de raison $2$, un élève écrit « $u_n = 2n + 10$ ». Corriger.', reponse: '$u_n = 2n + 8$.' });
  assert.equal(verdict(u, '10 + 2(n-1)'), 'juste');
  assert.equal(verdict(u, '2n+10'), 'faux');
  const w = analyserCalcul({ enonce: 'Écrire $u(t)$…', reponse: '$u(t) = 10\\cos(2\\,000\\pi\\,t)$.' });
  assert.equal(verdict(w, '10cos(2000πt)'), 'juste');
  assert.equal(verdict(w, '10cos(200πt)'), 'faux');
});

test('équations de droites et de cercles : à un facteur près, sauf « réduite »', () => {
  const c = analyserCalcul({ enonce: 'Déterminer une équation de la droite $d$ passant par…', reponse: '$2x + 5y + 4 = 0$.' });
  assert.equal(verdict(c, '-4x - 10y - 8 = 0'), 'juste');
  assert.equal(verdict(c, 'y = -0,4x - 0,8'), 'juste');
  assert.equal(verdict(c, '2x + 5y = 0'), 'faux');
  assert.equal(verdict(c, '1 = 1'), 'faux');
  const r = analyserCalcul({ enonce: "Déterminer l'équation réduite de la droite passant par $\\mathrm{A}(-4\\,;0)$…", reponse: '$y = 0{,}5x + 2$' });
  assert.equal(verdict(r, 'y = x/2 + 2'), 'juste');
  assert.equal(verdict(r, '2y = x + 4'), 'faux');
});

test('nombres complexes : forme algébrique, i² = -1', () => {
  const c = analyserCalcul({ enonce: 'Écrire sous forme algébrique $3i(2-5i)$.', reponse: '$15+6i$' });
  assert.equal(c.complexe, true);
  assert.equal(verdict(c, '6i + 15'), 'juste');
  assert.equal(verdict(c, '3i(2-5i)'), 'forme');
  assert.equal(verdict(c, '15 - 6i'), 'faux');
  const e = analyserCalcul({ enonce: 'Écrire $z = 3\\,\\mathrm{e}^{\\mathrm{i}\\pi/6}$ sous forme algébrique.', reponse: '$z = \\dfrac{3\\sqrt{3}}{2} + \\dfrac{3}{2}\\mathrm{i}$.' });
  assert.equal(verdict(e, '3e^(iπ/6)'), 'forme');
  assert.equal(verdict(e, '3√3/2 + 1,5i'), 'juste');
});

test('primitives : à une constante près, sauf condition imposée', () => {
  const p = analyserCalcul({ enonce: 'Déterminer une primitive de $f(x) = x\\,e^{-x^2}$.', reponse: '$F(x) = -\\dfrac{1}{2}e^{-x^2}$.' });
  assert.equal(p.regle, 'primitive');
  assert.equal(verdict(p, '-e^(-x²)/2 + 3'), 'juste');
  assert.equal(verdict(p, 'e^(-x²)/2'), 'faux');
  const q = analyserCalcul({ enonce: 'Déterminer la primitive $F$ de $f(x) = 6x + 1$ sur $\\mathbb{R}$ telle que $F(0) = 2$.', reponse: '$F(x) = 3x^2 + x + 2$.' });
  assert.equal(verdict(q, '3x² + x + 2'), 'juste');
  assert.equal(verdict(q, '3x² + x'), 'faux');
});

test('exercices laissés à rédiger : recopie possible, démonstration, unités', () => {
  assert.equal(analyserCalcul({ enonce: 'Écris plus simplement $ 5 \\times (x + 2) $.', reponse: '$ 5(x + 2) $' }), null);
  assert.equal(analyserCalcul({ enonce: 'Un entier $n$ est impair. Démontrer que $n^2 - 1$ est un multiple de $4$.', reponse: '$n^2 - 1 = 4(k^2 + k)$' }), null);
  assert.equal(analyserCalcul({ enonce: 'Quelle relation lie $i$ et $u_C$ ?', reponse: '$ i = C\\dfrac{du_C}{dt} $' }), null);
  assert.equal(analyserCalcul({ enonce: 'Calcule.', reponse: '$I_{cc} = 3{,}0\\ \\mathrm{A}$' }), null);
});
