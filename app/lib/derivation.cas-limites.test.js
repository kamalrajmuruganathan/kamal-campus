/**
 * Dérivation : écriture des étapes, cas limites (fonction constante, racines
 * irrationnelles) et 1 500 polynômes de degré 3 tirés au hasard dont les
 * extremums sont vérifiés par un calcul indépendant en fractions exactes.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { deriver, variations, tangente } from './derivation.js';
import { lireListeNombres } from './statistiques.js';
import { graine, texteAffiche, verifierTexte } from './aide-tests-calcul.js';

/** Ce que fait l'outil « Dérivée et variations » de l'écran Outils. */
function outil(saisie) {
  const c = lireListeNombres(saisie);
  const d = deriver(c);
  if (!d.valide) return d;
  const va = variations(c);
  return { valide: true, etapes: [...d.etapes, ...(va.valide ? va.etapes : [{ titre: 'Variations', detail: va.erreur }])] };
}

test('étapes de dérivation : « (x^2)′ = 2x », jamais « x^1 » ni « 1x »', () => {
  const t = texteAffiche(deriver([0, 0, 1]));
  assert.match(t, /\(x\^2\)′ = 2 × x = 2x/);
  assert.doesNotMatch(t, /x\^1|\b1x/);
  const t3 = texteAffiche(deriver([0, -3, 0, 1]));
  assert.match(t3, /\(x\^3\)′ = 3 × x\^2 = 3x\^2/);
  assert.match(t3, /\(−3x\)′ = 1 × \(−3\) = −3/);
});

test('fonction constante : f′ = 0, f constante (et non « signe négatif »)', () => {
  const r = variations([5]);
  assert.equal(r.intervalles[0].sens, 'constante');
  const t = texteAffiche(r);
  assert.match(t, /f est constante sur ℝ/);
  assert.doesNotMatch(t, /négatif/);
});

test('fonction affine décroissante : signe constant négatif', () => {
  const r = variations([4, -2]);
  assert.equal(r.intervalles[0].sens, 'décroissante');
});

test('racines rationnelles de f′ écrites en fractions, extremum exact', () => {
  // f(x) = 3x³ − x² : f′(x) = 9x² − 2x, racines 0 et 2/9 ; f(2/9) = −4/243
  const r = variations([0, 0, -1, 3]);
  const t = texteAffiche(r);
  assert.match(t, /Racines de f′ — 0 · 2\/9/);
  assert.match(t, /minimum égal à -4\/243/);
  assert.equal(r.extremums[1].yTexte, '-4/243');
});

test('racines irrationnelles de f′ : écriture avec √ et extremum marqué « ≈ »', () => {
  // f(x) = x³ − 2x : f′ = 3x² − 2, racines ±√6/3, f(√6/3) = −4√6/9 ≈ −1,0887
  const r = variations([0, -2, 0, 1]);
  const t = texteAffiche(r);
  assert.match(t, /−√6\/3 ≈ -0,8165 · √6\/3 ≈ 0,8165/);
  assert.match(t, /minimum ≈ -1,088662/);
  assert.ok(Math.abs(r.extremums[1].y + (4 * Math.sqrt(6)) / 9) < 1e-6);
});

test('écran Outils : saisie vide → message compréhensible', () => {
  const r = outil('');
  assert.equal(r.valide, false);
  assert.doesNotMatch(r.erreur, /tableau/);
  assert.equal(outil('1 a 3').valide, false);
});

test('écran Outils : coefficients décimaux avec virgule', () => {
  const t = texteAffiche(outil('0 0,5 -1,5 1'));
  assert.match(t, /f′\(x\) = 3x\^2 − 3x \+ 0,5/);
  verifierTexte(t);
});

test('tangente : jamais « x − -2 » ni « + -3 »', () => {
  const r = tangente([0, 0, 1], -2); // y = −4(x + 2) + 4
  assert.equal(r.equation, 'y = −4(x + 2) + 4');
  assert.equal(r.equationReduite, 'y = −4x − 4');
  assert.equal(tangente([1, 0, 1], 0).equation, 'y = 1'); // tangente horizontale en 0
  assert.equal(tangente([0, 0, 1], 1).equation, 'y = 2(x − 1) + 1');
  verifierTexte(texteAffiche(r));
});

/** Rationnel exact BigInt pour le contrôle indépendant. */
const pg = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a || 1n; };
function frac(n, d) {
  if (d < 0n) { n = -n; d = -d; }
  const g = pg(n, d);
  return [n / g, d / g];
}

test('1 500 polynômes de degré 3 : extremums vérifiés (f′ = 0, valeur exacte de f)', () => {
  const alea = graine(3);
  for (let i = 0; i < 1500; i++) {
    const c = [alea.entier(-9, 9), alea.entier(-9, 9), alea.entier(-9, 9), alea.entier(-4, 4) || 1];
    const ctx = `coef ${c.join(' ')}`;
    const r = variations(c);
    assert.equal(r.valide, true, ctx);
    const t = texteAffiche(r);
    verifierTexte(t, ctx);
    // f′(x) = 3c3 x² + 2c2 x + c1 ; Δ′ = 4c2² − 12c3c1
    const A = 3 * c[3]; const B = 2 * c[2]; const C = c[1];
    const delta = B * B - 4 * A * C;
    if (delta < 0) assert.equal(r.extremums.length, 0, ctx);
    if (delta === 0) assert.equal(r.extremums[0].type, 'aucun', ctx);
    if (delta > 0) {
      assert.equal(r.extremums.length, 2, ctx);
      const types = r.extremums.map((e) => e.type);
      assert.deepEqual(types, c[3] > 0 ? ['maximum', 'minimum'] : ['minimum', 'maximum'], ctx);
      for (const e of r.extremums) {
        const fp = A * e.x * e.x + B * e.x + C;
        assert.ok(Math.abs(fp) < 1e-6 * (1 + Math.abs(A) + Math.abs(B) + Math.abs(C)), ctx);
        if (!e.yTexte.startsWith('≈')) {
          // valeur exacte : comparée au calcul direct de f(x)
          const m = /^(-?\d+)(?:\/(\d+))?$/.exec(e.yTexte);
          assert.ok(m, `${ctx} : ${e.yTexte}`);
          const y = Number(m[1]) / Number(m[2] ?? 1);
          const fx = c[0] + c[1] * e.x + c[2] * e.x ** 2 + c[3] * e.x ** 3;
          assert.ok(Math.abs(y - fx) < 1e-9 * (1 + Math.abs(fx)), `${ctx} : ${e.yTexte} ≠ ${fx}`);
        }
      }
      // racines rationnelles ⇔ Δ′ carré parfait : alors l'extremum doit être exact
      const rac = Math.round(Math.sqrt(delta));
      if (rac * rac === delta) {
        assert.ok(r.extremums.every((e) => !e.yTexte.startsWith('≈')), ctx);
        // abscisses exactes : (−B ∓ √Δ′)/(2A), réduites
        const attendu = [frac(BigInt(-B - rac), BigInt(2 * A)), frac(BigInt(-B + rac), BigInt(2 * A))]
          .map(([n, d]) => (d === 1n ? `${n}` : `${n}/${d}`));
        const lus = /Racines de f′ — (.*)/.exec(t)[1].split(' · ');
        assert.deepEqual([...lus].sort(), [...attendu].sort(), ctx);
      }
    }
  }
});
