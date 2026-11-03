/**
 * Variantes justes et réponses fausses proches.
 *
 * 1) Bugs corrigés (chaque test reproduit le cas trouvé dans le contenu) ;
 * 2) Variantes justes : espaces, espace insécable, virgule/point, majuscules, « x = 3 » ;
 * 3) Réponses fausses proches, générées automatiquement sur les exercices du contenu :
 *    signe inversé, valeur × 10 ou ÷ 10, dernier chiffre faux, unité d'une autre grandeur.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeExercice, comparerExercice, diagnosticExercice } from './index.js';
import { chargerExercices } from './outils-tests.js';

function verifie(ex, justes, faux, matiere = 'physique-chimie') {
  assert.equal(typeExercice(ex, matiere), 'auto', `devrait être vérifiable : ${JSON.stringify(ex.attendu || ex.reponse)}`);
  for (const j of justes) assert.equal(comparerExercice(j, ex, matiere), true, `devrait accepter « ${j} »`);
  for (const f of faux) assert.equal(comparerExercice(f, ex, matiere), false, `devrait refuser « ${f} »`);
}

/* ─── 1. Bugs corrigés ─────────────────────────────────────────────── */

test('entier exact terminé par 0 : « 131 perles » ou « 1961 » ne valent pas « 130 » ou « 1960 »', () => {
  verifie({ enonce: 'Lina avait 200 perles, elle en donne 70. Combien lui en reste-t-il ?', reponse: 'Il lui reste 130 perles.', attendu: { accepte: ['130 perles'] } },
    ['130 perles', '130', ' 130 perles. '], ['131 perles', '131', '129', '13', '1300', '-130'], 'mathematiques');
  verifie({ enonce: 'Quelle est « l\'année de l\'Afrique » ?', reponse: 'L\'année de l\'Afrique est 1960.', attendu: { accepte: ['1960'] } },
    ['1960'], ['1961', '1959', '196', '19600'], 'hist-geo');
  verifie({ enonce: 'Écrire 192 en binaire sur 8 bits.', reponse: '192 s\'écrit 11000000 en binaire sur 8 bits.', attendu: { accepte: ['11000000'] } },
    ['11000000'], ['11000001', '1100000'], 'nsi');
});

test('valeur approchée (≈, environ) : une saisie plus précise qui s\'arrondit à la réponse reste acceptée', () => {
  verifie({ enonce: 'Calculer le temps de demi-réaction.', reponse: '$t_{1/2} \\approx 280\\ \\mathrm{s}$', attendu: { accepte: ['280 s'] } },
    ['280 s', '283 s', '279,6 s', 't1/2 = 280 s'], ['290 s', '28 s', '2 800 s', '-280 s', '280 m']);
  verifie({ enonce: 'Quelle est la longueur d\'onde ?', reponse: '$\\lambda \\approx 410\\ \\mathrm{nm}$', attendu: { accepte: ['410 nm'] } },
    ['410 nm', '411 nm', '0,41 µm'], ['420 nm', '41 nm', '410 mm']);
});

test('saisie dans un autre multiple de l\'unité : convertie, mais pas « arrondie » si la réponse est exacte', () => {
  const ex = { enonce: 'Calculer la puissance dissipée par effet Joule.', reponse: '$P_\\mathrm{J} = R\\,I^{2} = 1\\,600\\ \\mathrm{W} = 1{,}6\\ \\mathrm{kW}$', attendu: { accepte: ['1 600 W', '1,6 kW'] } };
  verifie(ex, ['1 600 W', '1600 W', '1,6 kW', '1.6 kW', '1 600 W.'], ['1601 W', '1 610 W', '16 kW', '160 W', '1,6 kJ']);
  // Choix gardé : « 1,61 kW » est accepté (forme décimale « 1,6 kW » : une saisie plus précise qui s'y arrondit
  // est acceptée, car beaucoup de réponses décimales sont arrondies sans le dire).
  assert.equal(comparerExercice('1,61 kW', ex, 'physique-chimie'), true);
});

test('nombres étiquetés : « 11 neutrons ; 12 protons » n\'est pas « 11 protons ; 12 neutrons »', () => {
  const ex = {
    enonce: 'Donner la composition de l\'atome ${}^{23}_{11}\\mathrm{Na}$ (protons, neutrons, électrons).',
    reponse: '11 protons, 12 neutrons, 11 électrons',
    attendu: { accepte: ['11 protons ; 12 neutrons ; 11 électrons', '11 ; 12 ; 11'] },
  };
  verifie(ex, ['11 protons ; 12 neutrons ; 11 électrons', '11 ; 12 ; 11', '11 protons, 12 neutrons et 11 électrons', '11 électrons ; 12 neutrons ; 11 protons'],
    ['11 neutrons ; 12 protons ; 11 électrons', '12 ; 11 ; 11', '11 ; 12 ; 12']);
});

test('unité avec exposant tapé « ^2 » : « 11 cm^2 » = « 11 cm² »', () => {
  const ex = { enonce: 'Calcule l\'aire de la plaque.', reponse: '$A = 11\\ \\mathrm{cm^2}$ (2 chiffres significatifs).' };
  verifie(ex, ['11 cm²', '11 cm^2', '11 cm2', 'A = 11 cm^2', '11 cm^(2)'], ['11 cm^3', '11 m^2', '12 cm²', '110 cm²']);
});

test('primitive écrite « … + C » : la constante n\'est pas une variable', () => {
  const ex = { enonce: 'Déterminer toutes les primitives de $f(x)=\\dfrac{4}{x}+\\dfrac{2}{x^{2}}$ sur $]0\\,;+\\infty[$.', reponse: '$F(x)=4\\ln x-\\dfrac{2}{x}+C$' };
  verifie(ex, ['F(x)=4ln x-2/x+C', '4ln(x) - 2/x + C', '4 ln x - 2/x', '4ln(x) - 2/x + 7', '4ln x - 2/x + C, C ∈ R'],
    ['4ln x + 2/x + C', '4/x', '4ln x - 2/x^2', 'ln x - 2/x'], 'mathematiques');
});

test('primitive dont la valeur est imposée (« F(0) = 3 », « passe par A ») : la constante compte', () => {
  verifie({ enonce: '$F$ et $G$ sont deux primitives d\'une même fonction $f$ sur $\\mathbb{R}$, avec $F(0)=3$ et $G(0)=-1$. Exprimer $G$ en fonction de $F$.', reponse: '$G(x)=F(x)-4$' },
    ['G(x)=F(x)-4', 'F(x) - 4'], ['G(x)=F(x)+4', 'F(x)', 'F(x) - 3'], 'mathematiques');
  verifie({ enonce: 'Déterminer la primitive $F$ de $f(x)=x^{3}-1$ sur $\\mathbb{R}$ dont la courbe passe par le point $A(1\\,;0)$.', reponse: '$F(x)=\\dfrac{x^{4}}{4}-x+\\dfrac{3}{4}$' },
    ['x^4/4 - x + 3/4', 'F(x) = 0,25x^4 - x + 0,75'], ['x^4/4 - x', 'x^4/4 - x + 3', 'x^4/4 - x + C'], 'mathematiques');
});

test('espace des milliers devant une lettre : « 1 000e^(-0,1t) » vaut 1000·e^(-0,1t), pas 0', () => {
  const ex = { enonce: 'Le nombre $N(t)$ vérifie $N\' = -0{,}1\\,N$, avec $N(0) = 1\\,000$. Exprimer $N(t)$ et calculer $N(10)$.', reponse: '$N(t) = 1\\,000\\,e^{-0{,}1t}$ ; $N(10) \\approx 368$.', attendu: { accepte: ['1 000e^(-0,1t) ; 368'] } };
  verifie(ex, ['1 000e^(-0,1t) ; 368', '1000e^(-0.1t) ; 368', '1 000 e^(-0,1t) ; 368', '1000*e^(-0,1t) ; 368'],
    ['2 000e^(-0,1t) ; 368', '0 ; 368', '1000e^(0,1t) ; 368', '1000e^(-0,1t) ; 367'], 'mathematiques');
});

test('égalités en chaîne : chaque étape doit être juste ; sans nom, tous les membres doivent être égaux', () => {
  const ex = { enonce: 'Calculer la dérivée de $f(x) = (3x - 2)^2$ et donner sa forme développée.', reponse: '$f\'(x) = 6(3x - 2) = 18x - 12$' };
  assert.equal(typeExercice(ex, 'mathematiques'), 'auto');
  for (const j of ["f'(x) = 6(3x - 2) = 18x - 12", '18x - 12', '6(3x - 2) = 18x - 12', "f'(x)=18x-12"]) assert.equal(comparerExercice(j, ex, 'mathematiques'), true, j);
  for (const f of ["f'(x) = 7(3x - 2) = 18x - 12", "f'(x) = 6(3x + 2) = 18x - 12", '6(3x - 2) = 18x + 12', '18x + 12']) assert.equal(comparerExercice(f, ex, 'mathematiques'), false, f);
});

test('coordonnées « M(-1,0,0) » : le nom du point seul n\'est pas une réponse', () => {
  // Avant : la parenthèse était prise pour une explication facultative et « M » était accepté.
  const sans = { enonce: 'Déterminer le point $M$ de l\'axe des abscisses tel que $MA = MB$.', reponse: '$M(-1,0,0)$.' };
  assert.equal(comparerExercice('M', sans, 'mathematiques'), false);
  const avec = { ...sans, attendu: { accepte: ['(-1 ; 0 ; 0)'] } };
  verifie(avec, ['(-1 ; 0 ; 0)', 'M(-1 ; 0 ; 0)', '(-1;0;0)', '(-1, 0, 0)', 'M(-1 ; 0 ; 0).'], ['M', '(1 ; 0 ; 0)', '(-1 ; 0)', '(0 ; -1 ; 0)', '-1 ; 0 ; 0'], 'mathematiques');
});

test('« P(X=4)=0,0064 » et « E(4X - 2Y) = 19 » : le nom avec parenthèse est permis devant la valeur', () => {
  verifie({ enonce: 'Calculer $P(X=4)$.', reponse: '$P(X=4)=0{,}0064$.' }, ['P(X=4)=0,0064', 'P(X = 4) = 0,0064', '0,0064', '0.0064'], ['P(X=4)=0,064', '0,0065', '-0,0064'], 'mathematiques');
  // Même valeur mais autre question : « P(X=5) = 0,0064 » n'est pas la réponse à « P(X=4) ».
  assert.equal(comparerExercice('P(X=5)=0,0064', { enonce: 'Calculer $P(X=4)$.', reponse: '$P(X=4)=0{,}0064$.' }, 'mathematiques'), false);
  verifie({ enonce: 'Calculer $E(4X - 2Y)$.', reponse: '$E(4X - 2Y) = 19$.' }, ['E(4X - 2Y) = 19', '19'], ['E(4X - 2Y) = 18', '-19', '190'], 'mathematiques');
});

test('ions et équations : charge « ^(2+) », point final, saisie sans espaces', () => {
  verifie({ enonce: 'En utilisant la règle du duet et de l\'octet, prévoir l\'ion formé par l\'atome de magnésium ($Z = 12$).', reponse: '$\\mathrm{Mg}^{2+}$' },
    ['Mg2+', 'Mg^2+', 'Mg²⁺', 'Mg^(2+)', 'Mg++'], ['Mg+', 'Mg^(3+)', 'Mg^(2-)', 'mg2+', 'Mg']);
  verifie({ enonce: 'Ajuster l\'équation $\\mathrm{Al} + \\mathrm{H^+} \\longrightarrow \\mathrm{Al^{3+}} + \\mathrm{H_2}$.', reponse: '$2\\,\\mathrm{Al} + 6\\,\\mathrm{H^+} \\longrightarrow 2\\,\\mathrm{Al^{3+}} + 3\\,\\mathrm{H_2}$' },
    ['2 Al + 6 H+ → 2 Al3+ + 3 H2', '2 Al + 6 H^+ → 2 Al^(3+) + 3 H2', '2 Al + 6 H^(+) -> 2 Al^(3+) + 3 H2.', '6 H+ + 2 Al -> 3 H2 + 2 Al3+'],
    ['2 Al + 6 H+ → 2 Al^(2+) + 3 H2', 'Al + 3 H+ → Al3+ + 3 H2', '2 Al + 6 H+ → 2 Al3+ + 6 H2']);
  verifie({ enonce: 'Écrire la demi-équation du couple $\\mathrm{Cl_2/Cl^-}$.', reponse: '$\\mathrm{Cl_2} + 2\\,e^- = 2\\,\\mathrm{Cl^-}$' },
    ['Cl2 + 2 e- = 2 Cl-', 'Cl2+2e^-=2Cl^-', 'Cl2 + 2e- = 2Cl-.'], ['Cl2 + e- = 2 Cl-', 'Cl2 + 2 e- = Cl-']);
});

test('décomposition en facteurs premiers : un nombre géant ne bloque pas l\'appli', () => {
  const ex = { enonce: 'Décompose $126$ en produit de facteurs premiers.', reponse: '$126 = 2 \\times 3^{2} \\times 7$' };
  verifie(ex, ['2 × 3^2 × 7', '126 = 2 × 3 × 3 × 7', '7 × 2 × 3²'], ['2 × 3 × 7', '2 × 63', '127 = 2 × 3^2 × 7'], 'mathematiques');
  const t0 = Date.now();
  for (const s of ['9'.repeat(400), '9007199254740881', `${'9'.repeat(30)} × 7`, '1e999']) assert.equal(comparerExercice(s, ex, 'mathematiques'), false);
  assert.ok(Date.now() - t0 < 500, `trop lent : ${Date.now() - t0} ms`);
});

/* ─── 2. Variantes justes ─────────────────────────────────────────── */

test('nombre : virgule ou point, espaces des milliers (normale, insécable, fine), espaces autour, point final', () => {
  const ex = { enonce: 'Quelle est la masse ?', reponse: 'La masse vaut $12\\,345{,}6$ g.', attendu: { accepte: ['12 345,6 g'] } };
  verifie(ex, ['12 345,6 g', '12345,6 g', '12345.6 g', '12\u00a0345,6 g', '12\u202f345,6 g', '  12 345,6 g  ', '12 345,6 g.', '12 345,60 g', 'm = 12 345,6 g', '12,3456 kg'],
    ['12 345,7 g', '123 456 g', '-12 345,6 g', '12 345,6 kg', '1 234,56 g']);
});

test('texte : majuscules et accents tolérés hors français et langues ; exigés en français', () => {
  const svt = { enonce: 'Quel organe pompe le sang ?', reponse: 'Le cœur.' };
  verifie(svt, ['le cœur', 'Le Cœur', 'COEUR', 'coeur', 'cœur.'], ['le poumon', 'cœurs battants'], 'svt');
  const fr = { enonce: 'Accorde l\'adjectif : des filles (fatigué).', reponse: 'fatiguées' };
  verifie(fr, ['fatiguées', 'Fatiguées'], ['fatiguees', 'fatiguée', 'fatigués'], 'francais');
});

test('« cos x = -4/5 » ou « -4/5 » ; « t1/2 = 280 s »', () => {
  verifie({ enonce: 'Sachant que $\\sin x = \\dfrac{3}{5}$ et $x \\in [\\frac{\\pi}{2} ; \\pi]$, calculer $\\cos x$.', reponse: '$\\cos x = -\\dfrac{4}{5}$.', attendu: { accepte: ['-4/5'] } },
    ['-4/5', 'cos x = -4/5', 'cos(x) = -4/5', '-0,8'], ['4/5', 'cos x = 4/5', '-5/4'], 'mathematiques');
});

test('« x = 3 », « 3 », « S = {3} » ; unités équivalentes', () => {
  verifie({ enonce: 'Résoudre $2x + 1 = 7$.', reponse: '$x = 3$' }, ['3', 'x = 3', 'x=3', 'X = 3', '3.', 'S = {3}', '{3}'], ['-3', '4', 'x = 4', '30', 'x = 3 ou x = 4'], 'mathematiques');
  verifie({ enonce: 'Calculer la vitesse.', reponse: '$v = 4{,}2\\ \\mathrm{m/s}$' }, ['4,2 m/s', 'v = 4,2 m/s', '4.2 m/s', '4,2 m.s-1', '4,2 m·s⁻¹', '4,2'], ['4,2 km/h', '-4,2 m/s', '42 m/s', '4,2 m/s²']);
});

test('expressions : écritures équivalentes acceptées, autres valeurs refusées', () => {
  const ex = { enonce: 'Calculer la dérivée de $f(x) = x^3 - 2x^2 + \\sqrt{x}$.', reponse: '$f\'(x) = 3x^2 - 4x + \\dfrac{1}{2\\sqrt{x}}$' };
  verifie(ex, ["f'(x) = 3x^2 - 4x + 1/(2sqrt(x))", '3x² - 4x + 1/(2√x)', '-4x + 3x^2 + 1/(2√(x))', '3*x^2-4*x+0,5/sqrt(x)', '3x^2 - 4x + (1/2)x^(-1/2)'],
    ['3x^2 - 4x + 1/2√x', '3x^2 + 4x + 1/(2√x)', '3x^2 - 4x', '3x^2 - 4x + 2√x', 'x^3 - 2x^2 + √x'], 'mathematiques');
});

test('développer : la forme compte (message « forme »), la valeur aussi', () => {
  const ex = { enonce: 'Développe et réduis $(x + 3)(x - 2)$.', reponse: '$x^2 + x - 6$' };
  assert.equal(comparerExercice('x^2 + x - 6', ex, 'mathematiques'), true);
  assert.equal(comparerExercice('-6 + x + x²', ex, 'mathematiques'), true);
  assert.equal(comparerExercice('(x + 3)(x - 2)', ex, 'mathematiques'), false);
  assert.equal(diagnosticExercice('(x + 3)(x - 2)', ex, 'mathematiques'), 'forme');
  assert.equal(comparerExercice('x^2 - x - 6', ex, 'mathematiques'), false);
  assert.equal(diagnosticExercice('x^2 - x - 6', ex, 'mathematiques'), null);
});

/* ─── 3. Réponses fausses générées sur le contenu ─────────────────── */

const { exercices } = chargerExercices();
const RE_NB = /^([+-]?)(\d{1,3}(?: \d{3})+|\d+)(?:,(\d+))?(\s*(?:[A-Za-zµ°%€Ω][^\d;]*)?)$/;

test('contenu : signe inversé, × 10, ÷ 10, unité d\'une autre grandeur → refusés', () => {
  const echecs = [];
  let n = 0;
  for (const o of exercices) {
    const formes = (o.ex.attendu && o.ex.attendu.accepte) || [];
    if (!formes.length || typeExercice(o.ex, o.matiere) !== 'auto') continue;
    for (const f of formes) {
      const m = f.trim().match(RE_NB);
      if (!m) continue;
      const [, sg, ent, dec = '', unite] = m;
      const v = Number(ent.replace(/\D/g, '') + (dec ? '.' + dec : ''));
      if (!v) continue;
      n++;
      const ecrire = (x) => String(+x.toPrecision(12)).replace('.', ',');
      const autres = [
        (sg === '-' ? '' : '-') + ent + (dec ? ',' + dec : '') + unite,
        sg + ecrire(v * 10) + unite,
        sg + ecrire(v / 10) + unite,
      ];
      // Unité d'une autre grandeur (« 12 m » → « 12 s ») : seulement pour une unité simple connue.
      const u = unite.trim();
      const AUTRE = { m: 's', s: 'm', g: 'L', L: 'g', W: 'J', J: 'W', V: 'A', A: 'V', N: 'Pa', Pa: 'N', Hz: 's', km: 'kg', kg: 'km', cm: 'cg', mL: 'mg', '€': '%', '%': '€' };
      if (AUTRE[u]) autres.push(sg + ent + (dec ? ',' + dec : '') + ' ' + AUTRE[u]);
      // Une autre forme acceptée peut légitimement valoir la variante (« 1 200 s » et « 20 min ») : on l'écarte.
      for (const x of autres) {
        if (formes.some((g) => g.replace(/\s/g, '') === x.replace(/\s/g, ''))) continue;
        if (comparerExercice(x, o.ex, o.matiere) === true) echecs.push(`${o.id} accepte « ${x} » (formes ${JSON.stringify(formes)})`);
      }
    }
  }
  assert.ok(n > 1500, `${n} formes numériques seulement`);
  assert.equal(echecs.length, 0, `${echecs.length} réponse(s) fausse(s) acceptée(s) :\n${echecs.slice(0, 20).join('\n')}`);
});

test('contenu : entier exact (sans « ≈ » ni « environ ») → le dernier chiffre faux est refusé', () => {
  const echecs = [];
  let n = 0;
  for (const o of exercices) {
    const formes = (o.ex.attendu && o.ex.attendu.accepte) || [];
    if (formes.length !== 1 || typeExercice(o.ex, o.matiere) !== 'auto') continue;
    const m = formes[0].trim().match(/^(\d{1,3}(?: \d{3})+|\d+)(\s*(?:[A-Za-zµ°%€][^\d;]*)?)$/);
    if (!m) continue;
    if (/≈|approx|environ|arrondi|approch|pr[eè]s|ordre de grandeur|estim|significatif|\(/i.test(o.ex.reponse + ' ' + o.ex.enonce)) continue;
    n++;
    const brut = m[1].replace(/\D/g, '');
    const faux = brut.slice(0, -1) + ((Number(brut.slice(-1)) + 1) % 10) + m[2];
    if (comparerExercice(faux, o.ex, o.matiere) === true) echecs.push(`${o.id} accepte « ${faux} » pour « ${formes[0]} »`);
  }
  assert.ok(n > 150, `${n} exercices seulement`);
  assert.equal(echecs.length, 0, `${echecs.length} :\n${echecs.slice(0, 20).join('\n')}`);
});

test('contenu : groupes de réponses « a ; b » dans l\'ordre inverse → refusés quand l\'ordre compte', () => {
  const echecs = [];
  let n = 0;
  for (const o of exercices) {
    const formes = (o.ex.attendu && o.ex.attendu.accepte) || [];
    if (!formes.length || typeExercice(o.ex, o.matiere) !== 'auto') continue;
    for (const f of formes) {
      const parts = f.split(' ; ');
      // Deux nombres sans unité, différents : « 12 ; 5 » ≠ « 5 ; 12 ».
      if (parts.length !== 2 || !parts.every((p) => /^-?\d+(?:,\d+)?$/.test(p.trim())) || parts[0].trim() === parts[1].trim()) continue;
      const inverse = [...parts].reverse().join(' ; ');
      if (formes.some((g) => g.replace(/\s/g, '') === inverse.replace(/\s/g, ''))) continue;
      n++;
      if (comparerExercice(inverse, o.ex, o.matiere) === true) echecs.push(`${o.id} accepte « ${inverse} » pour « ${f} »`);
    }
  }
  assert.ok(n > 50, `${n} formes seulement`);
  assert.equal(echecs.length, 0, `${echecs.length} :\n${echecs.slice(0, 20).join('\n')}`);
});
