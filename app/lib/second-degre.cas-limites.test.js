/**
 * Second degré : cas limites, coefficients décimaux et tirages au hasard.
 * Les racines exactes sont vérifiées en les RÉINJECTANT (calcul entier) :
 * a·n² + b·n·d + c·d² = 0 pour x = n/d.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { resoudreSecondDegre } from './second-degre.js';
import { graine, texteAffiche, verifierTexte } from './aide-tests-calcul.js';

const f = (a, b, c, x) => a * x * x + b * x + c;

test('coefficients décimaux : Δ exact, sans bruit flottant (Δ = 0 détecté)', () => {
  // 0,2² − 4 × 1 × 0,01 vaut 6,9e-18 en flottant : c'est bien une racine double
  const r = resoudreSecondDegre(1, 0.2, 0.01);
  assert.equal(r.delta, 0);
  assert.equal(r.nature, 'racine-double');
  assert.equal(r.racines[0].texte, '-1/10');
  const r2 = resoudreSecondDegre(0.1, 0.2, 0.1);
  assert.equal(r2.delta, 0);
  assert.equal(r2.racines[0].texte, '-1');
});

test('coefficients décimaux : racines exactes en fractions (0,5x² − 1,5x + 1)', () => {
  const r = resoudreSecondDegre(0.5, -1.5, 1);
  assert.equal(r.delta, 0.25);
  assert.deepEqual(r.racines.map((x) => x.texte), ['1', '2']);
  assert.equal(r.sommet.x.texte, '3/2');
  assert.equal(r.sommet.y.texte, '-1/8'); // f(3/2) = 1,125 − 2,25 + 1
});

test('racine 1/13 : forme factorisée exacte (avant : « x - 0.0769 »)', () => {
  const r = resoudreSecondDegre(13, -14, 1);
  assert.deepEqual(r.racines.map((x) => x.texte), ['1/13', '1']);
  assert.equal(r.formeFactorisee, '13(x - 1/13)(x - 1)');
});

test('racine nulle : « x(x - 2) » et non « (x + 0)(x - 2) »', () => {
  assert.equal(resoudreSecondDegre(1, -2, 0).formeFactorisee, 'x(x - 2)');
  assert.equal(resoudreSecondDegre(1, 2, 0).formeFactorisee, 'x(x + 2)');
  assert.equal(resoudreSecondDegre(3, 0, 0).formeFactorisee, '3x²');
});

test('Δ non carré parfait : racines exactes avec √, simplifiées', () => {
  const r = resoudreSecondDegre(1, -4, 1);
  assert.deepEqual(r.racines.map((x) => x.texte), ['2 − √3', '2 + √3']);
  assert.equal(r.formeFactorisee, '(x - (2 − √3))(x - (2 + √3))');
  assert.deepEqual(resoudreSecondDegre(2, 0, -6).racines.map((x) => x.texte), ['−√3', '√3']);
  assert.equal(resoudreSecondDegre(2, 0, -6).formeFactorisee, '2(x + √3)(x - √3)');
  assert.deepEqual(resoudreSecondDegre(3, 1, -1).racines.map((x) => x.texte), ['(−1 − √13)/6', '(−1 + √13)/6']);
  // √8 = 2√2 : (2 ± 2√2)/2 = 1 ± √2
  assert.deepEqual(resoudreSecondDegre(-1, 2, 1).racines.map((x) => x.texte), ['1 − √2', '1 + √2']);
});

test('les étapes montrent le sommet, les variations et le signe (annoncés par l’outil)', () => {
  const t = texteAffiche(resoudreSecondDegre(1, -4, 1));
  assert.match(t, /Sommet S\(2 ; -3\)/);
  assert.match(t, /f\(x\) = \(x - 2\)² - 3/);
  assert.match(t, /minimum -3 atteint en 2/);
  assert.match(t, /négatif entre 2 − √3 et 2 \+ √3/);
});

test('forme canonique : a ≠ 1 et β nul', () => {
  assert.equal(resoudreSecondDegre(2, -4, 2).formeCanoniqueTexte, '2(x - 1)²');
  assert.equal(resoudreSecondDegre(-1, 0, 4).formeCanoniqueTexte, '-x² + 4');
});

test('affichage du discriminant : négatifs entre parenthèses', () => {
  const t = texteAffiche(resoudreSecondDegre(2, -3, -2));
  assert.match(t, /\(-3\)² − 4 × 2 × \(-2\) = 25/);
  verifierTexte(t);
});

test('entrées de l’écran : champ vide (null) ou illisible (NaN) refusés', () => {
  assert.equal(resoudreSecondDegre(null, 1, 1).valide, false);
  assert.equal(resoudreSecondDegre(1, NaN, 1).valide, false);
  assert.equal(resoudreSecondDegre(1, 2, Infinity).valide, false);
  assert.equal(resoudreSecondDegre(-0, 2, 1).valide, false);
});

test('b = −0 ou c = −0 : pas de « -0 » affiché', () => {
  const r = resoudreSecondDegre(1, -0, -0);
  assert.equal(r.racines[0].texte, '0');
  verifierTexte(texteAffiche(r));
});

test('très petits et très grands coefficients : pas de « 1e-9 » à l’écran', () => {
  verifierTexte(texteAffiche(resoudreSecondDegre(1e-9, 1, 1)));
  verifierTexte(texteAffiche(resoudreSecondDegre(1e12, 3e12, 1)));
});

test('3 000 trinômes entiers au hasard : racines réinjectées, sommet, signe', () => {
  const alea = graine(20261103);
  for (let i = 0; i < 3000; i++) {
    const a = alea.entier(-12, 12) || 1;
    const b = alea.entier(-40, 40);
    const c = alea.entier(-40, 40);
    const r = resoudreSecondDegre(a, b, c);
    const ctx = `${a}x² + ${b}x + ${c}`;
    assert.equal(r.delta, b * b - 4 * a * c, ctx);
    if (r.delta < 0) assert.equal(r.racines.length, 0, ctx);
    if (r.delta === 0) assert.equal(r.racines.length, 1, ctx);
    if (r.delta > 0) {
      assert.equal(r.racines.length, 2, ctx);
      assert.ok(r.racines[0].valeur < r.racines[1].valeur, ctx);
    }
    for (const x of r.racines) {
      if (x.exact) {
        // réinjection exacte en entiers
        assert.equal(a * x.num * x.num + b * x.num * x.den + c * x.den * x.den, 0, ctx);
      } else {
        assert.ok(x.radical, ctx);
        assert.ok(Math.abs(f(a, b, c, x.valeur)) < 1e-9 * (1 + Math.abs(b) + Math.abs(c)), ctx);
        // le texte exact redonne la valeur : (P ± S√m)/D
        const m = /^(?:\((−?\d+) ([−+]) (\d*)√(\d+)\)\/(\d+)|(−?\d+) ([−+]) (\d*)√(\d+)|(−?)(\d*)√(\d+)(?:\/(\d+))?)$/.exec(x.texte);
        assert.ok(m, `${ctx} : ${x.texte}`);
      }
    }
    // somme et produit des racines
    assert.ok(Math.abs(r.somme.valeur + b / a) < 1e-12, ctx);
    assert.ok(Math.abs(r.produit.valeur - c / a) < 1e-12, ctx);
    // sommet : β = f(α), en fractions exactes : a·n² + b·n·d + c·d² = β·d²
    const { alpha, beta } = r.formeCanonique;
    assert.equal(
      (a * alpha.num * alpha.num + b * alpha.num * alpha.den + c * alpha.den * alpha.den) * beta.den,
      beta.num * alpha.den * alpha.den,
      ctx,
    );
    // signe : celui de a hors des racines
    const s = r.signe.intervalles.map((iv) => iv.signe);
    assert.equal(s[0], a > 0 ? '+' : '-', ctx);
    verifierTexte(texteAffiche(r), ctx);
  }
});

test('500 trinômes à coefficients décimaux (au dixième) : même analyse qu’en entiers ×10', () => {
  const alea = graine(42);
  for (let i = 0; i < 500; i++) {
    const A = alea.entier(-30, 30) || 3;
    const B = alea.entier(-60, 60);
    const C = alea.entier(-60, 60);
    const r = resoudreSecondDegre(A / 10, B / 10, C / 10);
    const e = resoudreSecondDegre(A, B, C);
    const ctx = `${A / 10}, ${B / 10}, ${C / 10}`;
    assert.deepEqual(r.racines.map((x) => x.texte), e.racines.map((x) => x.texte), ctx);
    assert.ok(Math.abs(r.delta - (B * B - 4 * A * C) / 100) < 1e-12, ctx);
    assert.equal(r.sommet.x.texte, e.sommet.x.texte, ctx);
    // β est divisé par 10 quand on divise tous les coefficients par 10
    assert.ok(Math.abs(r.sommet.y.valeur - e.sommet.y.valeur / 10) < 1e-12, ctx);
    verifierTexte(texteAffiche(r), ctx);
  }
});
