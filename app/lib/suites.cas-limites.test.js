/**
 * Suites : cas limites, affichage des étapes, grands entiers, tirages au hasard
 * comparés à un calcul indépendant en entiers longs (BigInt).
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { suiteArithmetique, suiteGeometrique, reconnaitreNature, raisonDepuisTaux } from './suites.js';
import { graine, texteAffiche, verifierTexte } from './aide-tests-calcul.js';

test('indice « n » écrit uₙ (et non « un », qui se lit comme le mot)', () => {
  const t = texteAffiche(suiteArithmetique(5, 3, 20, 0));
  assert.match(t, /uₙ = u₀ \+ \(n − 0\) × r/);
  assert.doesNotMatch(t, /\bun =/);
  assert.match(texteAffiche(suiteGeometrique(2, 3, 4, -1)), /u₋₁/);
});

test('arithmétique à pas décimal : pas de 0.7000000000000001', () => {
  const r = suiteArithmetique(0.1, 0.2, 3, 0);
  assert.equal(r.terme.valeur, 0.7);
  assert.equal(r.somme.valeur, 1.6); // 0,1 + 0,3 + 0,5 + 0,7
  const t = texteAffiche(r);
  assert.match(t, /= 0,7\b/);
  verifierTexte(t);
});

test('arithmétique : raison et indice négatifs entre parenthèses', () => {
  const t = texteAffiche(suiteArithmetique(10, -3, 4, -2));
  assert.match(t, /u₄ = 10 \+ \(4 − \(-2\)\) × \(-3\) = -8/);
  assert.match(t, /décroissante/);
  verifierTexte(t);
});

test('le sens de variation (annoncé par l’outil) est dans les étapes, accentué', () => {
  assert.match(texteAffiche(suiteArithmetique(1, -2, 5)), /la suite est décroissante/);
  assert.match(texteAffiche(suiteGeometrique(5, 0.5, 5)), /la suite est décroissante/);
  assert.match(texteAffiche(suiteGeometrique(-5, 2, 5)), /la suite est décroissante/);
  assert.match(texteAffiche(suiteGeometrique(3, 2, 5)), /se rapprochent|s'éloignent/);
});

test('géométrique, raison négative : « (-2)^4 » et non « -2^4 »', () => {
  const r = suiteGeometrique(3, -2, 5, 1);
  assert.equal(r.terme.valeur, 48);
  assert.equal(r.somme.valeur, 33); // 3 − 6 + 12 − 24 + 48
  assert.match(texteAffiche(r), /3 × \(-2\)\^4 = 48/);
});

test('géométrique : premier terme nul et raison négative → suite nulle, pas « alternée »', () => {
  const r = suiteGeometrique(0, -2, 4);
  assert.equal(r.variation, 'constante');
});

test('géométrique : terme minuscule (3 × 0,5³⁰) non arrondi à 0', () => {
  const r = suiteGeometrique(3, 0.5, 30);
  assert.ok(r.terme.valeur > 0);
  assert.ok(Math.abs(r.terme.valeur - 3 * 0.5 ** 30) / (3 * 0.5 ** 30) < 1e-5);
  const t = texteAffiche(r);
  assert.match(t, /≈ 2,794 × 10⁻⁹/);
  verifierTexte(t);
});

test('géométrique : 3 × 3⁴⁰ exact (au-delà de 2^53, sans chiffres faux)', () => {
  const r = suiteGeometrique(3, 3, 40);
  const t = texteAffiche(r);
  assert.match(t, /= 36472996377170786403\b/);
  assert.match(t, /= 54709494565756179603\b/); // 3(3⁴¹ − 1)/2
});

test('géométrique : résultat gigantesque en notation scientifique, jamais « Infinity »', () => {
  const t = texteAffiche(suiteGeometrique(1, 10, 400));
  assert.match(t, /≈ 1 × 10⁴⁰⁰/);
  verifierTexte(t);
  const trop = suiteGeometrique(2, 1.05, 100000);
  assert.equal(trop.valide, false);
  verifierTexte(trop.erreur);
});

test('rang inférieur à l’indice de départ, champ vide ou illisible : refusés', () => {
  assert.equal(suiteArithmetique(1, 2, 3, 5).valide, false);
  assert.equal(suiteArithmetique(null, 2, 3).valide, false);
  assert.equal(suiteGeometrique(1, NaN, 3).valide, false);
  assert.equal(suiteGeometrique(1, 2, 2.5).valide, false);
});

test('rang n = indice de départ : un seul terme', () => {
  const r = suiteGeometrique(7, 3, 2, 2);
  assert.equal(r.terme.valeur, 7);
  assert.equal(r.somme.valeur, 7);
  assert.equal(r.nombreDeTermes, 1);
});

test('reconnaître la nature : 0,1 ; 0,2 ; 0,3 est arithmétique (raison 0,1)', () => {
  const r = reconnaitreNature([0.1, 0.2, 0.3, 0.4]);
  assert.equal(r.nature, 'arithmetique');
  assert.equal(r.raison.valeur, 0.1);
  verifierTexte(texteAffiche(r));
  assert.equal(reconnaitreNature([1e9, 1e9 + 1, 1e9 + 2]).nature, 'arithmetique');
});

test('taux négatif : « 1 + (-20)/100 »', () => {
  assert.match(texteAffiche(raisonDepuisTaux(-20)), /1 \+ \(-20\)\/100 = 0\.8|1 \+ \(-20\)\/100 = 0,8/);
});

test('2 000 suites entières au hasard : terme et somme comparés à un calcul BigInt', () => {
  const alea = graine(7);
  for (let i = 0; i < 2000; i++) {
    const u = alea.entier(-50, 50);
    const q = alea.entier(-6, 6) || 2;
    const p = alea.entier(-3, 3);
    const n = p + alea.entier(0, 45);
    const ctx = `u${p} = ${u}, q = ${q}, n = ${n}`;
    const r = suiteGeometrique(u, q, n, p);
    let terme = BigInt(u);
    let somme = 0n;
    for (let k = p; k <= n; k++) {
      if (k > p) terme *= BigInt(q);
      somme += terme;
    }
    const t = texteAffiche(r);
    const ecrit = (big) => {
      const s = big.toString();
      return s.length <= 21 ? s : null;
    };
    if (ecrit(terme)) assert.ok(t.includes(`= ${ecrit(terme)}`), `${ctx} : terme ${terme}\n${t}`);
    if (ecrit(somme)) assert.ok(t.includes(`= ${ecrit(somme)}`), `${ctx} : somme ${somme}\n${t}`);
    verifierTexte(t, ctx);

    const ra = alea.entier(-20, 20);
    const a = suiteArithmetique(u, ra, n, p);
    let s = 0;
    for (let k = p; k <= n; k++) s += u + (k - p) * ra;
    assert.equal(a.terme.valeur, u + (n - p) * ra, ctx);
    assert.equal(a.somme.valeur, s, ctx);
    verifierTexte(texteAffiche(a), ctx);
  }
});
