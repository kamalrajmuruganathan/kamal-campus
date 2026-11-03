/**
 * Arithmétique : invariants vérifiés sur des milliers de tirages, cas limites
 * (négatifs, zéro, très grands nombres) et texte des étapes.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  divisionEuclidienne, divise, pgcdEuclide, ppcm, bezout, reduireModulo,
  inverseModulaire, resoudreCongruence, estPremier, decompositionFacteurs, diviseurs,
} from './arithmetique.js';
import { graine, texteAffiche, verifierTexte, champ } from './aide-tests-calcul.js';

const pgcdRef = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const mod = (a, n) => ((a % n) + n) % n;

test('division euclidienne : diviseur négatif écrit entre parenthèses, reste ≥ 0', () => {
  const r = divisionEuclidienne(-7, -2);
  assert.equal(r.quotient, 4);
  assert.equal(r.reste, 1);
  assert.match(texteAffiche(r), /-7 = \(-2\) × 4 \+ 1/);
  const z = divisionEuclidienne(0, -5);
  assert.ok(Object.is(z.quotient, 0), 'pas de quotient « -0 »');
  verifierTexte(texteAffiche(z));
});

test('« b divise a » : reste affiché positif, comme dans le cours (et non « + -1 »)', () => {
  const r = divise(2, -7);
  assert.equal(r.divise, false);
  assert.match(texteAffiche(r), /-7 = 2 × \(-4\) \+ 1/);
  verifierTexte(texteAffiche(divise(-3, 7)));
  assert.match(texteAffiche(divise(-3, 12)), /12 = \(-3\) × \(-4\)/);
});

test('PPCM de grands nombres : pas de produit faux au-delà de 2^53', () => {
  // 2^45 et 2^45 − 1 sont premiers entre eux : PPCM = produit ≈ 1,2·10²⁷ → refusé
  assert.equal(ppcm(2 ** 45, 2 ** 45 - 1).valide, false);
  // 6·10¹³ et 4·10¹³ : PPCM = 1,2·10¹⁴ (exact), le produit 2,4·10²⁷ ne l'est pas en flottant
  const r = ppcm(6e13, 4e13);
  assert.equal(r.ppcm, 1.2e14);
  assert.match(texteAffiche(r), /2400000000000000000000000000 \/ 20000000000000 = 120000000000000/);
});

test('congruence avec PGCD(a, n) très grand : pas de boucle géante, solutions décrites', () => {
  const debut = Date.now();
  const r = resoudreCongruence(1e6, 0, 1e12);
  assert.ok(Date.now() - debut < 500);
  assert.equal(r.nombreSolutions, 1e6);
  assert.ok(r.solutions.length <= 20);
  assert.match(texteAffiche(r), /x ≡ 0 \[1000000\] \(1000000 solutions modulo 1000000000000\)/);
});

test('congruence avec b très grand : solution exacte (u × b dépassait 2^53)', () => {
  const n = 10000000000007; // premier
  const r = resoudreCongruence(3, 7e13, n);
  assert.equal(r.solutions.length, 1);
  const x = BigInt(r.solutions[0]);
  assert.equal((3n * x - 70000000000000n) % BigInt(n), 0n);
});

test('congruence : « x » et non « 1x » après simplification', () => {
  const t = texteAffiche(resoudreCongruence(4, 6, 10));
  assert.match(t, /On divise tout par 2 : 2x ≡ 3 \[5\]/);
  assert.doesNotMatch(texteAffiche(resoudreCongruence(2, 4, 6)), /1x/);
});

test('champs de l’écran : vide, décimal ou texte → refus clair', () => {
  assert.equal(pgcdEuclide(champ('12,5'), 5).valide, false);
  assert.equal(resoudreCongruence(champ(''), 3, 7).valide, false);
  assert.equal(decompositionFacteurs(champ('abc')).valide, false);
  assert.equal(decompositionFacteurs(1).valide, false);
  assert.equal(pgcdEuclide(0, 0).valide, false);
});

test('décomposition : cas connus', () => {
  assert.equal(decompositionFacteurs(360).texte, '2^3 × 3^2 × 5');
  assert.equal(decompositionFacteurs(97).texte, '97');
  assert.equal(decompositionFacteurs(1024).texte, '2^10');
  assert.equal(decompositionFacteurs(999999999989).texte, '999999999989'); // premier
  assert.equal(decompositionFacteurs(600851475143).texte, '71 × 839 × 1471 × 6857');
});

test('3 000 tirages : PGCD, Bézout, PPCM, division, inverse, congruence', () => {
  const alea = graine(360);
  for (let i = 0; i < 3000; i++) {
    const a = alea.entier(-5000, 5000);
    const b = alea.entier(-5000, 5000) || 7;
    const n = alea.entier(2, 300);
    const ctx = `a = ${a}, b = ${b}, n = ${n}`;

    const g = pgcdEuclide(a, b);
    assert.equal(g.pgcd, pgcdRef(a, b), ctx);
    verifierTexte(texteAffiche(g), ctx);

    const bz = bezout(a, b);
    assert.equal(a * bz.u + b * bz.v, g.pgcd, ctx);

    if (a !== 0) {
      const m = ppcm(a, b);
      assert.equal(m.ppcm * g.pgcd, Math.abs(a * b), ctx);
      assert.equal(m.ppcm % a, 0, ctx);
      assert.equal(m.ppcm % b, 0, ctx);
    }

    const d = divisionEuclidienne(a, b);
    assert.equal(b * d.quotient + d.reste, a, ctx);
    assert.ok(d.reste >= 0 && d.reste < Math.abs(b), ctx);
    verifierTexte(texteAffiche(d), ctx);

    assert.equal(reduireModulo(a, n).reste, mod(a, n), ctx);

    const inv = inverseModulaire(a, n);
    if (pgcdRef(a, n) === 1) assert.equal(mod(a * inv.inverse, n), 1 % n, ctx);
    else assert.equal(inv.valide, false, ctx);

    const c = alea.entier(-500, 500);
    const r = resoudreCongruence(a, c, n);
    // force brute : toutes les solutions dans [0 ; n[
    const attendues = [];
    for (let x = 0; x < n; x++) if (mod(a * x - c, n) === 0) attendues.push(x);
    assert.deepEqual(r.solutions, attendues.slice(0, 20), ctx);
    if (attendues.length) assert.equal(r.nombreSolutions, attendues.length, ctx);
    verifierTexte(texteAffiche(r), ctx);
  }
});

test('décomposition et primalité : 2 000 entiers, produit des facteurs = n', () => {
  const alea = graine(97);
  for (let i = 0; i < 2000; i++) {
    const n = alea.entier(2, 5_000_000);
    const r = decompositionFacteurs(n);
    const produit = r.facteurs.reduce((p, f) => p * f.premier ** f.exposant, 1);
    assert.equal(produit, n);
    for (const f of r.facteurs) assert.equal(estPremier(f.premier).premier, true, `${f.premier} (de ${n})`);
    assert.equal(estPremier(n).premier, r.facteurs.length === 1 && r.facteurs[0].exposant === 1);
  }
});

test('diviseurs : 36 et 1', () => {
  assert.deepEqual(diviseurs(36).diviseurs, [1, 2, 3, 4, 6, 9, 12, 18, 36]);
  assert.deepEqual(diviseurs(-1).diviseurs, [1]);
});
