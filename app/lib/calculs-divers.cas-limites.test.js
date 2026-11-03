/**
 * Cas limites des autres modules de calcul : écriture des nombres, chimie,
 * physique, géométrie, trigonométrie, complexes, statistiques, probabilités,
 * opérations posées, série de jours.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { nombre, par, arrondi, exposant } from './format-calcul.js';
import { masseMolaire, quantiteDepuisMasse, quantiteDepuisEntites, entitesDepuisQuantite, concentrationMolaire, convertirConcentrations, versLitres } from './chimie.js';
import { gravitation, travail, energieElectrique, onde, loiOhm, poids } from './physique.js';
import { reconnaitreCercle, analyserDroite, cercle, norme, colineaires, alKashi } from './geometrie.js';
import { cosSin, resoudre as resoudreTrigo, degresVersRadians, relationFondamentale } from './trigonometrie.js';
import { multiplier, diviser, moduleArgument, secondDegreComplexe, additionner } from './nombres-complexes.js';
import { analyserSerie, lireListeNombres, mediane, quartile } from './statistiques.js';
import { bernoulli, variableAleatoire, arbrePondere, union } from './probabilites.js';
import { poserAddition, poserSoustraction, poserMultiplication } from './solveur/poser.js';
import { veille, appliquerXpJour, serieAffichee } from './serie.js';
import { graine, texteAffiche, verifierTexte } from './aide-tests-calcul.js';

// ── écriture des nombres ──
test('nombre() : entiers, décimaux, bruit flottant, notation scientifique, −0', () => {
  assert.equal(nombre(12), '12');
  assert.equal(nombre(0.1 + 0.2), '0.3');
  assert.equal(nombre(-0), '0');
  assert.equal(nombre(2.5e-8), '2.5 × 10⁻⁸');
  assert.equal(nombre(-1.23456e-5), '-1.235 × 10⁻⁵');
  assert.equal(nombre(6.02e23, 3), '6.02 × 10²³');
  assert.equal(nombre(2 ** 60), '1.153 × 10¹⁸');
  assert.equal(nombre(123456789), '123456789');
  assert.equal(nombre(0.0012345678), '0.001235');
  assert.equal(nombre(Infinity), '+∞');
  assert.equal(nombre(NaN), '?');
  assert.equal(par(-3), '(-3)');
  assert.equal(par(3), '3');
  assert.equal(exposant(-12), '⁻¹²');
  assert.equal(arrondi(1e-8 / 3), 3.33333e-9);
  assert.equal(arrondi(1 / 3), 0.333333);
});

// ── chimie ──
test('masses molaires : valeurs de référence (tableau scolaire)', () => {
  const cas = { H2O: 18, CO2: 44, NaCl: 58.5, H2SO4: 98.1, 'Ca(OH)2': 74.1, 'Al2(SO4)3': 342.3, C6H12O6: 180, 'Cu(NO3)2': 187.5, 'CuSO4': 159.6 };
  for (const [f, M] of Object.entries(cas)) assert.equal(masseMolaire(f).masseMolaire, M, f);
  for (const f of ['h2o', 'H2O)', '(H2O', 'Xy2', '2H2O', '']) assert.equal(masseMolaire(f).valide, false, f);
});

test('quantité de matière : contrôle de bon sens quand m = M', () => {
  assert.match(texteAffiche(quantiteDepuisMasse(18, 18)), /EXACTEMENT une mole/);
});

test('entités ↔ moles : écriture scientifique scolaire (pas « 6.02e+23 »)', () => {
  const t = texteAffiche(quantiteDepuisEntites(1));
  assert.match(t, /n = 1 \/ \(6,02 × 10²³\) = 1,661 × 10⁻²⁴ mol/);
  assert.match(texteAffiche(entitesDepuisQuantite(2)), /N = 2 × 6,02 × 10²³ = 1,2 × 10²⁴ entités/);
  verifierTexte(t);
});

test('concentrations : µL et très faibles valeurs non arrondies à 0', () => {
  const r = concentrationMolaire(1e-9, 1, 'mL');
  assert.equal(r.concentration, 1e-6);
  verifierTexte(texteAffiche(r));
  assert.equal(versLitres(0.5, 'µL').litres, 5e-7);
  assert.equal(convertirConcentrations({ c: -1, M: 18 }).valide, false);
  assert.equal(convertirConcentrations({ cm: NaN, M: 18 }).valide, false);
  assert.equal(convertirConcentrations({ c: 0.1, M: 58.5 }).concentration, 5.85);
});

// ── physique ──
test('gravitation : écriture scientifique, Terre–Lune ≈ 1,98 × 10²⁰ N', () => {
  const r = gravitation(5.97e24, 7.35e22, 3.84e8);
  assert.ok(Math.abs(r.force - 1.98e20) / 1.98e20 < 0.01);
  const t = texteAffiche(r);
  verifierTexte(t);
  assert.match(t, /10²⁰ N/);
});

test('travail : force perpendiculaire → travail NUL, même pour de grandes valeurs', () => {
  const r = travail(1e6, 1e3, 90);
  assert.equal(r.nature, 'nul');
  assert.equal(r.travail, 0);
  assert.equal(travail(10, 2, 180).nature, 'résistant');
  assert.equal(travail(10, 2, 60).travail, 10);
});

test('énergie électrique : kWh et joules lisibles', () => {
  const r = energieElectrique(2000, 3, 'h'); // 6 kWh = 2,16 × 10⁷ J
  assert.equal(r.energieKWh, 6);
  assert.equal(r.energie, 2.16e7);
  verifierTexte(texteAffiche(r));
});

test('ondes : valeurs nulles, négatives ou illisibles refusées (pas de « Infinity »)', () => {
  assert.equal(onde({ v: 340, f: 0 }).valide, false);
  assert.equal(onde({ v: NaN, f: 440 }).valide, false);
  assert.equal(onde({ lambda: -1, f: 440 }).valide, false);
  const r = onde({ v: 340, f: 440 });
  assert.equal(r.valeur, 0.772727);
  verifierTexte(texteAffiche(r));
  assert.equal(onde({ v: 3e8, T: 2e-15 }).valeur, 6e-7);
});

test('loi d’Ohm et poids : calculs connus', () => {
  assert.equal(loiOhm({ U: 12, R: 4 }).valeur, 3);
  assert.equal(loiOhm({ U: 12, I: 0.5 }).valeur, 24);
  assert.equal(loiOhm({ R: 100, I: 0.02 }).valeur, 2);
  assert.equal(loiOhm({ U: 12, R: 4, I: 3 }).valide, false);
  assert.equal(poids(70).poids, 686);
});

// ── géométrie ──
test('cercle : équations sans « − -2 », cas dégénérés', () => {
  assert.equal(cercle({ x: -2, y: 0 }, 3).equation, '(x + 2)² + y² = 9');
  assert.equal(cercle({ x: 1.5, y: -1 }, 0.5).equation, '(x − 1.5)² + (y + 1)² = 0.25');
  const r = reconnaitreCercle(-4, 6, -3); // (x − 2)² + (y + 3)² = 16
  assert.equal(r.nature, 'cercle');
  assert.equal(r.rayon, 4);
  assert.deepEqual(r.centre, { x: 2, y: -3 });
  assert.match(texteAffiche(r), /y² \+ 6y = \(y \+ 3\)² − 9/);
  assert.equal(reconnaitreCercle(-2, 0, 1).nature, 'point');
  assert.equal(reconnaitreCercle(0, 0, 1).nature, 'vide');
  verifierTexte(texteAffiche(reconnaitreCercle(0, 2, 0)));
});

test('droite ax + by + c = 0 : écriture propre', () => {
  assert.equal(analyserDroite(2, -3, 1).equation, '2x − 3y + 1 = 0');
  assert.equal(analyserDroite(1, 0, -4).equation, 'x − 4 = 0');
  assert.equal(analyserDroite(0, -1, 0).equation, '−y = 0');
  verifierTexte(texteAffiche(analyserDroite(-1, 1, -2)));
});

test('norme : √8 simplifiée, √0,25 exacte, colinéarité avec négatifs', () => {
  assert.equal(norme({ x: 2, y: 2 }).texte, '√8 = 2√2 ≈ 2.828427');
  assert.equal(norme({ x: 0.3, y: 0.4 }).texte, '0.5');
  assert.equal(norme({ x: 0.3, y: 0.4 }).exact, true);
  assert.match(texteAffiche(colineaires({ x: -2, y: 4 }, { x: 1, y: -2 })), /\(-2\) × \(-2\) − 4 × 1 = 0/);
  assert.equal(alKashi(3, 4, 90).a, 5);
});

// ── trigonométrie ──
test('cos x = a : valeurs non remarquables en radians approchés, pas « 0.403214π »', () => {
  const t = texteAffiche(resoudreTrigo('cos', 0.3));
  assert.match(t, /≈ 1,2661 rad \(≈ 72,54°\) et ≈ 5,0171 rad \(≈ 287,46°\)/);
  assert.doesNotMatch(t, /\d,\d+π/);
  assert.equal(resoudreTrigo('sin', 1).solutionsExactes.join(), 'π/2');
  assert.equal(resoudreTrigo('sin', -1).solutionsExactes.join(), '3π/2');
  assert.equal(resoudreTrigo('cos', -1).solutionsExactes.join(), 'π');
  assert.equal(resoudreTrigo('sin', 0).solutionsExactes.join(), '0,π');
  assert.equal(resoudreTrigo('cos', 1.5).valide, false);
});

test('cosSin en radians : 7π/6 et angles négatifs', () => {
  const r = cosSin((7 * Math.PI) / 6);
  assert.equal(r.cosExact, '−√3/2');
  assert.equal(r.sinExact, '−1/2');
  assert.match(texteAffiche(r), /Le point est dans le 3e quadrant/);
  assert.equal(cosSin(-Math.PI / 2).sinExact, '−1');
  assert.equal(cosSin(degresVersRadians(-90)).sin, -1);
  assert.equal(cosSin(degresVersRadians(90)).cos, 0);
  verifierTexte(texteAffiche(cosSin(degresVersRadians(0.0000001))));
});

test('relation fondamentale : sin = 0,6 → cos = ± 0,8', () => {
  assert.equal(relationFondamentale(0.6, 'sin', 'negatif').cos, -0.8);
  assert.equal(relationFondamentale(1.2, 'sin', 'positif').valide, false);
});

// ── complexes ──
test('complexes : produits et quotients connus, sans bruit flottant', () => {
  assert.deepEqual(multiplier({ re: 1, im: 1 }, { re: 1, im: -1 }).resultat, { re: 2, im: 0 });
  assert.equal(diviser({ re: 1, im: 0 }, { re: 0, im: 1 }).texte, '−i'); // 1/i = −i
  assert.equal(diviser({ re: 1, im: 2 }, { re: 3, im: 4 }).texte, '11/25 + (2/25)i');
  assert.equal(additionner({ re: 0.1, im: 0.7 }, { re: 0.2, im: -0.1 }).texte, '0,3 + 0,6i');
  verifierTexte(texteAffiche(multiplier({ re: -1.5, im: 2 }, { re: 0.2, im: -3 })));
  assert.match(texteAffiche(moduleArgument({ re: 0, im: -3 })), /arg\(z\) = −π\/2/);
  assert.match(texteAffiche(moduleArgument({ re: -1, im: 0 })), /arg\(z\) = π  \(/);
});

test('second degré dans ℂ : 1 000 trinômes, racines réinjectées', () => {
  const alea = graine(5);
  for (let i = 0; i < 1000; i++) {
    const a = alea.entier(-6, 6) || 2; const b = alea.entier(-10, 10); const c = alea.entier(-10, 10);
    const r = secondDegreComplexe(a, b, c);
    for (const z of r.racines) {
      // a z² + b z + c, avec z² = (x² − y²) + 2xy i
      const re = a * (z.re * z.re - z.im * z.im) + b * z.re + c;
      const im = a * 2 * z.re * z.im + b * z.im;
      assert.ok(Math.abs(re) < 1e-9 && Math.abs(im) < 1e-9, `${a}, ${b}, ${c}`);
    }
    if (r.delta < 0) assert.equal(r.racines[0].im, -r.racines[1].im);
    const t = texteAffiche(r);
    verifierTexte(t, `${a}, ${b}, ${c}`);
    assert.doesNotMatch(t, /\/-|i·|\b\d+\/1\b/, `${a}, ${b}, ${c}`);
  }
});

// ── statistiques ──
test('statistiques : médiane, quartiles (convention du lycée), cas à 1 valeur', () => {
  const s = analyserSerie([1, 2, 3, 4, 5, 6, 7, 8]);
  assert.equal(s.mediane, 4.5);
  assert.equal(s.q1, 2); // N/4 = 2 → 2e valeur
  assert.equal(s.q3, 6); // 3N/4 = 6 → 6e valeur
  const u = analyserSerie([7]);
  assert.equal(u.q1, 7);
  assert.equal(u.q3, 7);
  assert.equal(u.etendue, 0);
  verifierTexte(texteAffiche(u));
  const p = analyserSerie([10, 20], [3, 1]);
  assert.equal(p.moyenne, 12.5);
  assert.equal(p.mediane, 10);
  assert.equal(analyserSerie([1], [2e6]).valide, false);
  assert.ok(Number.isNaN(mediane([])));
  assert.ok(Number.isNaN(quartile([], 1)));
  assert.deepEqual(lireListeNombres('1,5;2 ; 3'), [1.5, 2, 3]);
  assert.deepEqual(lireListeNombres('1,2,3'), [1, 2, 3]);
  assert.deepEqual(lireListeNombres('−1 –2'), [-1, -2]);
});

// ── probabilités ──
test('Bernoulli et variable aléatoire : valeurs connues', () => {
  const b = bernoulli(3, 0.5, 2);
  assert.equal(b.nombreChemins, 3);
  assert.equal(b.probabilite, 0.375);
  assert.match(texteAffiche(bernoulli(2, 0.3, 0)), /1 chemin × /);
  const v = variableAleatoire([-1, 2], [0.5, 0.5]);
  assert.equal(v.esperance, 0.5);
  assert.equal(v.variance, 2.25);
  assert.equal(v.ecartType, 1.5);
  assert.equal(variableAleatoire([5, 5], [0.3, 0.7]).variance, 0);
  const a = arbrePondere(0.01, 0.99, 0.02); // test de dépistage
  assert.equal(a.pB, 0.0297);
  assert.equal(a.pA_sachantB, 0.333333);
  assert.equal(union(0.5, 0.6).valide, false); // incompatibles : 1,1 > 1
});

// ── opérations posées ──
test('opérations posées : 1 000 tirages, résultat et chiffres affichés cohérents', () => {
  const alea = graine(8);
  for (let i = 0; i < 1000; i++) {
    const a = alea.entier(0, 999999);
    const b = alea.entier(0, 999999);
    assert.equal(poserAddition(a, b).resultat, a + b);
    assert.equal(poserMultiplication(a % 10000, b % 1000).resultat, (a % 10000) * (b % 1000));
    const [g, p] = a >= b ? [a, b] : [b, a];
    const s = poserSoustraction(g, p);
    assert.equal(s.resultat, g - p);
    // reconstruit le résultat à partir des chiffres écrits rang par rang
    const ecrits = s.etapes.slice(0, -1).map((e) => /= (\d+)\./.exec(e)[1].slice(-1));
    assert.equal(Number(ecrits.reverse().join('')), g - p, `${g} − ${p}`);
  }
  const t = poserSoustraction(1000, 1).etapes;
  assert.ok(t[1].includes('0 est plus petit que (0 + 1 de retenue)'), t[1]);
});

// ── série de jours ──
test('série : veille aux 29 février et changements d’année, objectif quotidien', () => {
  assert.equal(veille('2028-03-01'), '2028-02-29');
  assert.equal(veille('2100-03-01'), '2100-02-28');
  assert.equal(veille('2000-03-01'), '2000-02-29');
  let e = { objectifQuotidien: 20, jourCourant: '2026-12-31', xpDuJour: 0, serieJours: 0, dernierJourValide: null };
  e = appliquerXpJour(e, 25, '2026-12-31');
  assert.equal(e.serieJours, 1);
  e = appliquerXpJour(e, 25, '2027-01-01');
  assert.equal(e.serieJours, 2);
  assert.equal(e.objectifAtteintMaintenant, true);
  e = appliquerXpJour(e, 50, '2027-01-01'); // déjà validé aujourd'hui
  assert.equal(e.serieJours, 2);
  assert.equal(e.objectifAtteintMaintenant, false);
  assert.equal(e.meilleureSerieJours, 2);
  assert.equal(serieAffichee('2027-01-01', 2, '2027-01-03'), 0);
  e = appliquerXpJour(e, 20, '2027-01-04'); // un jour sauté : la série repart à 1
  assert.equal(e.serieJours, 1);
  assert.equal(e.meilleureSerieJours, 2);
});
