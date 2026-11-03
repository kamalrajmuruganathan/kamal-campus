/**
 * L'écran « Outils de calcul » (src/ecrans/Outils.js), reproduit sans React :
 * mêmes conversions des champs (virgule, champ vide = null, texte illisible = NaN),
 * mêmes appels, même remplacement du point décimal par une virgule à l'affichage.
 * Chaque outil est essayé avec ses valeurs par défaut (résultat attendu calculé
 * à la main) puis avec des saisies limites : jamais d'exception, jamais de
 * « NaN », « undefined », « Infinity » ni « 1e-7 » à l'écran.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { resoudreSecondDegre } from './second-degre.js';
import { suiteArithmetique, suiteGeometrique } from './suites.js';
import { analyserSerie, lireListeNombres } from './statistiques.js';
import { deriver, variations } from './derivation.js';
import { masseMolaire, dilution } from './chimie.js';
import { energieCinetique, loiOhm } from './physique.js';
import { distance, milieu, produitScalaire, droiteParDeuxPoints } from './geometrie.js';
import { cosSin, degresVersRadians, resoudre } from './trigonometrie.js';
import { pgcdEuclide, bezout, resoudreCongruence, decompositionFacteurs } from './arithmetique.js';
import { additionner, multiplier, diviser, moduleArgument, secondDegreComplexe } from './nombres-complexes.js';
import { champ, texteAffiche, verifierTexte } from './aide-tests-calcul.js';

// Copie fidèle de la table OUTILS de l'écran (fonctions appelées).
const OUTILS = {
  'second-degre': { texte: [], f: (v) => resoudreSecondDegre(v.a, v.b, v.c) },
  'suite-arith': { texte: [], f: (v) => suiteArithmetique(v.u, v.r, v.n, v.p) },
  'suite-geom': { texte: [], f: (v) => suiteGeometrique(v.u, v.q, v.n, v.p) },
  stats: { texte: ['serie'], f: (v) => analyserSerie(lireListeNombres(v.serie)) },
  derivee: {
    texte: ['coef'],
    f: (v) => {
      const c = lireListeNombres(v.coef);
      const d = deriver(c);
      if (!d.valide) return d;
      const va = variations(c);
      return { valide: true, etapes: [...d.etapes, ...(va.valide ? va.etapes : [{ titre: 'Variations', detail: va.erreur }])] };
    },
  },
  'masse-molaire': { texte: ['formule'], f: (v) => masseMolaire(String(v.formule).trim()) },
  dilution: { texte: [], f: (v) => dilution({ c1: v.c1, v1: v.v1, c2: v.c2, v2: v.v2, unite: 'mL', uniteC: '' }) },
  'energie-cinetique': { texte: [], f: (v) => energieCinetique(v.m, v.v) },
  'loi-ohm': { texte: [], f: (v) => loiOhm({ U: v.U, R: v.R, I: v.I }) },
  'geo-distance': {
    texte: [],
    f: (v) => {
      const A = { x: v.ax, y: v.ay };
      const B = { x: v.bx, y: v.by };
      const d = distance(A, B);
      if (!d.valide) return d;
      const m = milieu(A, B);
      return { valide: true, etapes: [...d.etapes, ...(m.valide ? m.etapes : [])] };
    },
  },
  'geo-droite': { texte: [], f: (v) => droiteParDeuxPoints({ x: v.ax, y: v.ay }, { x: v.bx, y: v.by }) },
  'geo-produit-scalaire': { texte: [], f: (v) => produitScalaire({ x: v.ux, y: v.uy }, { x: v.vx, y: v.vy }) },
  'trigo-valeurs': { texte: [], f: (v) => cosSin(degresVersRadians(v.deg)) },
  'trigo-equation': { texte: ['type'], f: (v) => resoudre(String(v.type).trim().toLowerCase(), v.a) },
  'pgcd-euclide': {
    texte: [],
    f: (v) => {
      const g = pgcdEuclide(v.a, v.b);
      if (!g.valide) return g;
      const bz = bezout(v.a, v.b);
      return { valide: true, etapes: [...g.etapes, ...(bz.valide ? [bz.etapes.at(-1)] : [])] };
    },
  },
  congruences: { texte: [], f: (v) => resoudreCongruence(v.a, v.b, v.n) },
  'decomposition-premiers': { texte: [], f: (v) => decompositionFacteurs(v.n) },
  'complexe-forme': { texte: [], f: (v) => moduleArgument({ re: v.re, im: v.im }) },
  'complexe-operations': {
    texte: ['op'],
    f: (v) => {
      const z1 = { re: v.re1, im: v.im1 };
      const z2 = { re: v.re2, im: v.im2 };
      const op = String(v.op).trim();
      if (op === '+') return additionner(z1, z2);
      if (op === '*' || op === '×' || op === 'x') return multiplier(z1, z2);
      if (op === '/' || op === '÷') return diviser(z1, z2);
      return { valide: false, erreur: 'Opération inconnue' };
    },
  },
  'second-degre-complexe': { texte: [], f: (v) => secondDegreComplexe(v.a, v.b, v.c) },
};

/** Lance un outil comme l'écran : champs texte bruts, champs numériques convertis. */
function lancer(id, saisie) {
  const o = OUTILS[id];
  const v = {};
  for (const [k, brut] of Object.entries(saisie)) v[k] = o.texte.includes(k) ? brut : champ(brut);
  const res = o.f(v);
  const t = texteAffiche(res);
  verifierTexte(t, `${id} ${JSON.stringify(saisie)}`);
  return { res, t };
}

test('valeurs par défaut de chaque outil : résultats exacts attendus', () => {
  let { t } = lancer('second-degre', { a: '1', b: '-4', c: '1' });
  assert.match(t, /Δ = b² − 4ac = \(-4\)² − 4 × 1 × 1 = 12/);
  assert.match(t, /x₁ = 2 − √3 ≈ 0,2679, x₂ = 2 \+ √3 ≈ 3,7321/);

  ({ t } = lancer('suite-arith', { u: '5', r: '3', n: '20', p: '0' }));
  assert.match(t, /u₂₀ = 5 \+ \(20 − 0\) × 3 = 65/);
  assert.match(t, /21 × \(5 \+ 65\) \/ 2 = 735/);

  ({ t } = lancer('suite-geom', { u: '3', q: '2', n: '5', p: '0' }));
  assert.match(t, /u₅ = 3 × 2\^5 = 96/);
  assert.match(t, /= 189\b/);

  ({ t } = lancer('stats', { serie: '12 3 8 15 6' }));
  assert.match(t, /44 \/ 5 = 8,8/);
  assert.match(t, /soit 8\b/);

  ({ t } = lancer('derivee', { coef: '0 -3 0 1' }));
  assert.match(t, /maximum égal à 2/);
  assert.match(t, /minimum égal à -2/);

  ({ t } = lancer('masse-molaire', { formule: 'H2SO4' }));
  assert.match(t, /= 98,1 g·mol⁻¹/); // 2 × 1 + 32,1 + 4 × 16

  ({ t } = lancer('dilution', { c1: '0,5', v1: '', c2: '0,1', v2: '200' }));
  assert.match(t, /V₁ = c₂ × V₂ \/ c₁ = 0,1 × 200 \/ 0,5 = 40 mL/);
  assert.match(t, /F = c₁\/c₂ = V₂\/V₁ = 5/);

  ({ t } = lancer('energie-cinetique', { m: '1000', v: '20' }));
  assert.match(t, /= 200000 J/);

  ({ t } = lancer('loi-ohm', { U: '', R: '50', I: '0,2' }));
  assert.match(t, /U = R × I = 50 × 0,2 = 10 V/);

  ({ t } = lancer('geo-distance', { ax: '1', ay: '2', bx: '4', by: '6' }));
  assert.match(t, /AB = √\(3² \+ 4²\) = √25 = 5/);
  assert.match(t, /I\(2,5 ; 4\)/);

  ({ t } = lancer('geo-droite', { ax: '1', ay: '2', bx: '4', by: '8' }));
  assert.match(t, /y = 2x\b/);

  ({ t } = lancer('geo-produit-scalaire', { ux: '3', uy: '4', vx: '-2', vy: '1' }));
  assert.match(t, /3 × \(-2\) \+ 4 × 1 = -2/);

  ({ t } = lancer('trigo-valeurs', { deg: '60' }));
  assert.match(t, /cos = 1\/2, sin = √3\/2/);

  ({ t } = lancer('trigo-equation', { type: 'cos', a: '0,5' }));
  assert.match(t, /π\/3 et 5π\/3/);

  ({ t } = lancer('pgcd-euclide', { a: '252', b: '105' }));
  assert.match(t, /PGCD\(252, 105\) = 21/);
  assert.match(t, /252 × \(-2\) \+ 105 × 5 = 21/);

  ({ t } = lancer('congruences', { a: '5', b: '3', n: '7' }));
  assert.match(t, /x ≡ 2 \[7\]/); // 5 × 2 = 10 ≡ 3

  ({ t } = lancer('decomposition-premiers', { n: '360' }));
  assert.match(t, /360 = 2\^3 × 3\^2 × 5/);

  ({ t } = lancer('complexe-forme', { re: '1', im: '1' }));
  assert.match(t, /z = √2 \(cos\(π\/4\) \+ i sin\(π\/4\)\)/);

  ({ t } = lancer('complexe-operations', { re1: '2', im1: '3', op: '*', re2: '1', im2: '-2' }));
  assert.match(t, /Produit — 8 − i/);

  ({ t } = lancer('second-degre-complexe', { a: '1', b: '1', c: '1' }));
  assert.match(t, /z₁ = -1\/2 − i√3\/2 {3}et {3}z₂ = -1\/2 \+ i√3\/2/);
});

test('« Cosinus et sinus » : l’outil fonctionnait-il ? (degrés → valeurs exactes)', () => {
  // Avant : cosSin recevait l'objet renvoyé par degresVersRadians → toujours une erreur.
  for (const [deg, c, s] of [['0', '1', '0'], ['30', '√3/2', '1/2'], ['45', '√2/2', '√2/2'], ['90', '0', '1'],
    ['120', '−1/2', '√3/2'], ['180', '−1', '0'], ['-30', '√3/2', '−1/2'], ['405', '√2/2', '√2/2'], ['-720', '1', '0']]) {
    const { res } = lancer('trigo-valeurs', { deg });
    assert.equal(res.valide, true, deg);
    assert.equal(res.cosExact, c, deg);
    assert.equal(res.sinExact, s, deg);
  }
  const { res, t } = lancer('trigo-valeurs', { deg: '50' });
  assert.equal(res.remarquable, false);
  assert.match(t, /cos ≈ 0,642788, sin ≈ 0,766044/);
  assert.match(t, /Le point est dans le 1er quadrant/);
  assert.match(lancer('trigo-valeurs', { deg: '90' }).t, /Le point est sur l’axe des ordonnées/);
  assert.equal(lancer('trigo-valeurs', { deg: 'abc' }).res.valide, false);
  assert.equal(lancer('trigo-valeurs', { deg: '' }).res.valide, false);
});

test('saisies limites : champs vides, texte, zéros, négatifs, très grands → aucune exception', () => {
  const vides = {
    'second-degre': { a: '', b: 'x', c: '1' },
    'suite-arith': { u: '', r: '1', n: '2', p: '0' },
    'suite-geom': { u: '1', q: '0', n: '5', p: '0' },
    stats: { serie: '' },
    derivee: { coef: '' },
    'masse-molaire': { formule: '' },
    dilution: { c1: '', v1: '', c2: '', v2: '' },
    'energie-cinetique': { m: '-1', v: '3' },
    'loi-ohm': { U: '', R: '', I: '' },
    'geo-distance': { ax: '', ay: '', bx: '', by: '' },
    'geo-droite': { ax: '1', ay: '1', bx: '1', by: '1' },
    'geo-produit-scalaire': { ux: '0', uy: '0', vx: '0', vy: '0' },
    'trigo-equation': { type: 'tan', a: '2' },
    'pgcd-euclide': { a: '0', b: '0' },
    congruences: { a: '3', b: '1', n: '1' },
    'decomposition-premiers': { n: '1' },
    'complexe-forme': { re: '0', im: '0' },
    'complexe-operations': { re1: '1', im1: '1', op: '/', re2: '0', im2: '0' },
    'second-degre-complexe': { a: '0', b: '1', c: '1' },
  };
  for (const [id, saisie] of Object.entries(vides)) {
    const { res } = lancer(id, saisie);
    assert.equal(typeof res.valide, 'boolean', id);
  }
});

test('loi d’Ohm : saisie illisible ou résistance négative refusées (avant : « I = NaN A »)', () => {
  assert.equal(lancer('loi-ohm', { U: '12', R: 'abc', I: '' }).res.valide, false);
  assert.equal(lancer('loi-ohm', { U: '12', R: '-4', I: '' }).res.valide, false);
  assert.equal(lancer('loi-ohm', { U: '12', R: '', I: '-2' }).res.valide, false);
  assert.match(lancer('loi-ohm', { U: '12', R: '', I: '0,5' }).t, /R = U \/ I = 12 \/ 0,5 = 24 Ω/);
  assert.match(lancer('loi-ohm', { U: '230', R: '1000', I: '' }).t, /I = U \/ R = 230 \/ 1000 = 0,23 A/);
});

test('dilution : très faibles concentrations, jamais « 0 » ni « Infinity »', () => {
  const { res, t } = lancer('dilution', { c1: '0,000001', v1: '10', c2: '', v2: '1000' });
  assert.equal(res.valeur, 1e-8);
  assert.match(t, /= 1 × 10⁻⁸/);
  assert.match(t, /F = c₁\/c₂ = V₂\/V₁ = 100/);
  assert.equal(lancer('dilution', { c1: '0,5', v1: '10', c2: '0,1', v2: '50' }).res.valide, false); // 4 grandeurs
  assert.equal(lancer('dilution', { c1: '0', v1: '', c2: '0,1', v2: '50' }).res.valide, false);
  // solution « fille » plus concentrée : signalé
  assert.match(lancer('dilution', { c1: '0,1', v1: '', c2: '0,5', v2: '50' }).t, /ce n’est pas une dilution/);
});

test('énergie cinétique : vitesse négative au carré entre parenthèses', () => {
  assert.match(lancer('energie-cinetique', { m: '2', v: '-3' }).t, /Ec = 0,5 × 2 × \(-3\)² = 9 J/);
});

test('statistiques : virgules décimales, signe « − » typographique, espaces insécables', () => {
  const { res } = lancer('stats', { serie: '12,5 3 −2 8' });
  assert.deepEqual(res.serieOrdonnee, [-2, 3, 8, 12.5]);
  assert.equal(res.moyenne, 5.375);
  assert.equal(res.mediane, 5.5);
  assert.equal(lancer('stats', { serie: '1 2 abc' }).res.valide, false);
});

test('géométrie : coordonnées négatives et décimales', () => {
  let { t } = lancer('geo-distance', { ax: '1', ay: '2', bx: '-1', by: '4' });
  assert.match(t, /AB = √\(\(-2\)² \+ 2²\) = √8 = 2√2 ≈ 2,828427/);
  ({ t } = lancer('geo-distance', { ax: '0,1', ay: '0,2', bx: '0,4', by: '0,6' }));
  assert.match(t, /= 0,5\b/);
  assert.doesNotMatch(t, /≈ 0,5\b/);
  ({ t } = lancer('geo-droite', { ax: '2', ay: '-1', bx: '-4', by: '3' }));
  assert.match(t, /y = −\(2\/3\)x \+ 1\/3/);
  ({ t } = lancer('geo-droite', { ax: '-1', ay: '3', bx: '2', by: '3' }));
  assert.match(t, /Équation réduite — y = 3$/m);
  ({ t } = lancer('geo-produit-scalaire', { ux: '0,1', uy: '0,2', vx: '0,2', vy: '-0,1' }));
  assert.match(t, /ORTHOGONAUX/);
  assert.match(t, /θ = 90°/);
});

test('complexes : quotient exact en fractions, a < 0, racines simplifiées', () => {
  let { t } = lancer('complexe-operations', { re1: '1', im1: '0', op: '/', re2: '3', im2: '0' });
  assert.match(t, /= 1\/3$/m);
  ({ t } = lancer('complexe-operations', { re1: '2', im1: '3', op: '/', re2: '1', im2: '-2' }));
  assert.match(t, /-4\/5 \+ \(7\/5\)i/); // (2 + 3i)(1 + 2i)/5 = (−4 + 7i)/5
  ({ t } = lancer('complexe-operations', { re1: '0,1', im1: '0,2', op: '+', re2: '0,2', im2: '0,1' }));
  assert.match(t, /0,1 \+ 0,2 = 0,3/);
  ({ t } = lancer('second-degre-complexe', { a: '-1', b: '1', c: '-1' }));
  assert.match(t, /1\/2 − i√3\/2/);
  assert.doesNotMatch(t, /\/-/);
  ({ t } = lancer('second-degre-complexe', { a: '1', b: '2', c: '5' }));
  assert.match(t, /z₁ = -1 − 2i {3}et {3}z₂ = -1 \+ 2i/); // et non « i·4/2 »
  ({ t } = lancer('second-degre-complexe', { a: '1', b: '0', c: '8' }));
  assert.match(t, /−2i√2/);
});
