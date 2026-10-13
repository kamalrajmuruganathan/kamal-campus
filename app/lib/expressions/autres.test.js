import { test } from 'node:test';
import assert from 'node:assert/strict';
import { analyserAutre, comparerAutre } from './autres.js';

const ok = (a, s) => comparerAutre(s, a);

test('intervalles et réunions, ou inéquation équivalente', () => {
  const a = analyserAutre({ enonce: "Résoudre l'inéquation $2x - 3 < 7$.", reponse: '$S = ]-\\infty\\,;5[$' });
  assert.equal(a.kind, 'intervalle');
  for (const s of [']-∞;5[', '] -inf ; 5 [', 'S = ]-∞ ; 5[', 'x < 5']) assert.equal(ok(a, s), true, s);
  for (const s of [']-∞;5]', 'x ≤ 5', ']5;+∞[', '[-∞;5[']) assert.equal(ok(a, s), false, s);
  const u = analyserAutre({ enonce: "Résoudre l'inéquation $x(x - 4) > 0$.", reponse: '$S = ]-\\infty\\,;0[ \\cup ]4\\,;+\\infty[$' });
  assert.equal(ok(u, ']4;+∞[ ∪ ]-∞;0['), true);
  assert.equal(ok(u, ']-∞;0[ U ]4;+∞['), true);
  assert.equal(ok(u, ']-∞;0['), false);
  const l = analyserAutre({ enonce: 'Résoudre $e^{3x} \\geqslant 2$.', reponse: '$S = \\left[\\dfrac{\\ln 2}{3}\\,;+\\infty\\right[$.' });
  assert.equal(ok(l, '[ln(2)/3 ; +∞['), true);
  assert.equal(ok(l, '[0,231 ; +∞['), false); // valeur exacte demandée
});

test('coordonnées d’un point', () => {
  const a = analyserAutre({ enonce: "Donne les coordonnées de l'image de $M(-4\\,;1)$ par le demi-tour de centre $O$.", reponse: "$M'(4\\,;-1)$" });
  for (const s of ["M'(4 ; -1)", '(4;-1)', '4 ; -1']) assert.equal(ok(a, s), true, s);
  for (const s of ['(-1;4)', '(4;1)', '(4,-1)']) assert.equal(ok(a, s), false, s);
  const g = analyserAutre({ enonce: 'Calcule le point moyen G.', reponse: '$\\mathrm{G}(80\\,;5{,}6)$' });
  assert.equal(ok(g, 'G(80 ; 5,6)'), true);
  assert.equal(analyserAutre({ enonce: 'Donner un vecteur directeur de la droite.', reponse: '$(1\\,;3)$' }), null);
});

test('équations de réaction ajustées', () => {
  const enonce = "Ajuste l'équation : $\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow \\mathrm{H_2O}$";
  const a = analyserAutre({ enonce, reponse: '$2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}$' });
  for (const s of ['2H2 + O2 -> 2H2O', 'O2 + 2 H2 → 2 H2O', '2H2+O2=2H2O', '2 H₂ + O₂ → 2 H₂O']) assert.equal(ok(a, s), true, s);
  for (const s of ['H2 + O2 -> H2O', '4H2 + 2O2 -> 4H2O', '2H2O -> 2H2 + O2']) assert.equal(ok(a, s), false, s);
  const r = analyserAutre({ enonce: 'Écrire l’équation.', reponse: '$\\mathrm{MnO_4^-} + 8\\,\\mathrm{H^+} + 5\\,\\mathrm{Fe^{2+}} \\longrightarrow \\mathrm{Mn^{2+}} + 4\\,\\mathrm{H_2O} + 5\\,\\mathrm{Fe^{3+}}$.' });
  assert.equal(ok(r, 'MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+'), true);
  assert.equal(ok(r, 'MnO₄⁻ + 8 H⁺ + 5 Fe²⁺ → Mn²⁺ + 4 H₂O + 5 Fe³⁺'), true);
  assert.equal(ok(r, 'MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe2+'), false);
  // Équation déjà ajustée dans l'énoncé : on ne la fait pas recopier.
  assert.equal(analyserAutre({ enonce: 'On considère $2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}$. Que vaut… ?', reponse: '$2\\,\\mathrm{H_2} + \\mathrm{O_2} \\longrightarrow 2\\,\\mathrm{H_2O}$' }), null);
});
