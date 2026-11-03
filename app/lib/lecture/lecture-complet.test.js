// Tests complémentaires de la lecture à voix haute : formules réelles des fiches lues en mots,
// segments ≤ 220 caractères, rien d'illisible (« backslash frac », « $ », « ^ »), langue détectée.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { latexEnMots, formulesEnMots, segmentsFiche, segmentsTexte, estEtranger, lectureActive, indicesLangue, LANGUES_PARLEES } from './index.js';

const CONTENU = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'contenu');
const FICHES = [];
(function parcourir(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) parcourir(p);
    else if (f === 'fiche.md') FICHES.push(p);
  }
}(CONTENU));
const matiereDe = (md) => (/^matiere:\s*"?([^"\n]+?)"?\s*$/m.exec(md) || [])[1];

test('latexEnMots : formules courantes, valeurs exactes', () => {
  const cas = [
    ['\\dfrac{3}{4} \\times \\dfrac{8}{3} = 2', '3 sur 4 fois 8 sur 3 égale 2'],
    ['x^{2} + x^3', 'x au carré plus x au cube'],
    ['6{,}02 \\times 10^{23}', '6,02 fois 10 puissance 23'],
    ['10^{-3}', '10 puissance moins 3'],
    ['c = \\dfrac{0{,}52}{4{,}0\\times 10^{3}}', 'c égale 0,52 sur 4,0 fois 10 au cube'],
    ['\\frac{3}{8} = \\frac{7{,}5}{y}', '3 sur 8 égale 7,5 sur y'],
    ['\\sqrt{25} = 5', 'racine de 25 égale 5'],
    ['\\sqrt[3]{8} = 2', 'racine cubique de 8 égale 2'],
    ['\\sqrt[4]{16} = 2', 'racine d’indice 4 de 16 égale 2'],
    ['(-3) \\times (-3) = 9', '(moins 3) fois (moins 3) égale 9'],
    ['a \\neq 0', 'a différent de 0'],
    ['x \\leqslant 5', 'x inférieur ou égal à 5'],
    ['-1 < q < 1', 'moins 1 inférieur à q inférieur à 1'],
    ['90^\\circ', '90 degrés'],
    ['45^{\\circ}', '45 degrés'],
    ['3^\\text{e}', '3e'],
    ['1^{\\text{er}}', '1er'],
    ['25\\,^\\circ\\mathrm{C}', '25 degrés Celsius'],
    ['15\\,\\%', '15 pour cent'],
    ['1\\,250\\,000', '1250000'],
    ['\\text{H}^{+}', 'H plus'],
    ['\\mathrm{Cu}^{2+}', 'Cu 2 plus'],
    ['\\mathrm{AH = A^- + H^+}', 'AH égale A moins plus H plus'],
    ['\\overrightarrow{AB} + \\vec{u}', 'vecteur AB plus vecteur u'],
    ['\\overline{z} = x - iy', 'z barre égale x moins iy'],
    ['\\widehat{ABC} = 60^\\circ', 'angle ABC égale 60 degrés'],
    ['\\Delta = b^2 - 4ac', 'delta égale b au carré moins 4ac'],
    ['\\cos\\theta = \\dfrac{a}{r}', 'cosinus de thêta égale a sur r'],
    ['\\ln 2 \\approx 0{,}69', 'logarithme népérien de 2 environ 0,69'],
    ['\\lim_{x \\to +\\infty} \\dfrac{1}{x} = 0', 'limite quand x tend vers plus l’infini de 1 sur x égale 0'],
    ['\\int_{0}^{1} x^2 \\, dx = \\dfrac{1}{3}', 'intégrale de 0 à 1 de x au carré dx égale 1 sur 3'],
    ['\\sum_{i=1}^{n} i', 'somme pour i égale 1 jusqu\'à n de i'],
    ['\\dbinom{5}{2} = 10', '2 parmi 5 égale 10'],
    ['P(A \\cap B) = P(A) \\times P_A(B)', 'P(A inter B) égale P(A) fois P A (B)'],
    ['P_{A_1}(B)', 'P A 1 (B)'],
    ['f\'(x) = 2x', 'f prime (x) égale 2x'],
    ['f\'\'(x) = 6x', 'f seconde (x) égale 6x'],
    ['x \\in \\mathbb{R}', 'x appartient à R'],
    ['V_{\\text{cube}} = a^3', 'V cube égale a au cube'],
    ['\\boxed{\\mathcal{A}_{\\text{base}} = 6 \\text{ cm}^2}', 'A base égale 6 cm au carré'],
    ['E_\\oplus - E_\\ominus > 0', 'E plus moins E moins supérieur à 0'],
    ['\\|\\vec u\\|', 'norme vecteur u norme'],
    ['3 + 4 = 7', '3 plus 4 égale 7'],
    ['', ''],
  ];
  for (const [f, attendu] of cas) assert.equal(latexEnMots(f), attendu, f);
  assert.equal(latexEnMots(null), '');
  assert.equal(latexEnMots(undefined), '');
});

test('latexEnMots : environnements (cases, aligned, pmatrix), « & » et « \\\\ » deviennent des pauses', () => {
  const r = latexEnMots('f(x) = \\begin{cases} x & \\text{si } x \\geqslant 0 \\\\ -x & \\text{si } x < 0 \\end{cases}');
  assert.equal(r, 'f(x) égale x si x supérieur ou égal à 0; moins x si x inférieur à 0');
  const m = latexEnMots('\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}');
  assert.equal(m, 'a b; c d');
  const al = latexEnMots('\\begin{aligned} V &= 3 \\\\[2pt] \\sigma &= \\sqrt{V} \\end{aligned}');
  assert.equal(al, 'V égale 3; sigma égale racine de V');
});

test('latexEnMots : un trait d\'union dans un mot de \\text{…} reste un trait d\'union', () => {
  assert.equal(latexEnMots('\\text{grand-mère}'), 'grand-mère');
  assert.equal(latexEnMots('x-y'), 'x moins y');
  assert.equal(latexEnMots('\\text{(n\'a pas de limite)}'), '(n\'a pas de limite)');
});

test('toutes les formules des 959 fiches : jamais de commande lue (« backslash »), d\'accolade, de ^ ou de _', () => {
  let n = 0;
  for (const f of FICHES) {
    const md = readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
    for (const m of md.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]*)\$/g)) {
      const formule = m[1] ?? m[2];
      const lu = latexEnMots(formule);
      n += 1;
      assert.ok(!/[\\{}^_&$]/.test(lu), `${f.replace(CONTENU, '')} : « ${formule} » → « ${lu} »`);
      assert.ok(!/\b(?:frac|dfrac|sqrt|times|text|mathrm|left|right|begin|end|cdot|quad|boxed)\b/.test(lu), `${formule} → ${lu}`);
    }
  }
  assert.ok(n > 20000, `${n} formules`);
});

test('segmentsFiche sur les 959 fiches : morceaux ≤ 220 caractères, non vides, sans symbole brut, langue connue', () => {
  let total = 0;
  for (const f of FICHES) {
    const md = readFileSync(f, 'utf8');
    const matiere = matiereDe(md);
    const segs = segmentsFiche(md, matiere);
    total += segs.length;
    assert.ok(segs.length > 0, f);
    for (const s of segs) {
      const ou = `${f.replace(CONTENU, '')} : ${s.texte.slice(0, 120)}`;
      assert.ok(s.texte.length <= 220, `${ou} (${s.texte.length} caractères)`);
      assert.ok(/[\p{L}\p{N}]/u.test(s.texte), ou);
      assert.ok(!/[\\$^<>|]/.test(s.texte), ou);
      assert.ok(!/ {2}/.test(s.texte) && s.texte === s.texte.trim(), ou);
      assert.ok(s.langue === 'francais' || (s.langue === matiere && LANGUES_PARLEES.includes(matiere)), ou);
    }
  }
  assert.ok(total > 30000);
});

test('segmentsFiche : fiches de langues — la langue étudiée est vraiment entendue', () => {
  const parMatiere = {};
  for (const f of FICHES) {
    const md = readFileSync(f, 'utf8');
    const matiere = matiereDe(md);
    if (!LANGUES_PARLEES.includes(matiere)) continue;
    const segs = segmentsFiche(md, matiere);
    const etr = segs.filter((s) => s.langue === matiere).length;
    parMatiere[matiere] = parMatiere[matiere] || { fiches: 0, avec: 0 };
    parMatiere[matiere].fiches += 1;
    if (etr > 0) parMatiere[matiere].avec += 1;
  }
  for (const [m, { fiches, avec }] of Object.entries(parMatiere)) {
    assert.ok(avec / fiches >= 0.95, `${m} : ${avec}/${fiches} fiches avec au moins un passage lu dans la langue`);
  }
  assert.deepEqual(Object.keys(parMatiere).sort(), [...LANGUES_PARLEES].sort());
});

test('segmentsFiche : formules sur plusieurs lignes, tableaux de formules, comparaisons dans le texte', () => {
  // $$…$$ dont la 2e ligne commence par « + » (n'est pas une puce de liste).
  const s = segmentsFiche('### Probabilités totales\n\n$$P(B) = P(A) \\times P_A(B)\n+ P(\\overline{A}) \\times P_{\\overline{A}}(B)$$', 'mathematiques');
  assert.deepEqual(s.map((x) => x.texte), ['Probabilités totales. P(B) égale P(A) fois P A (B) plus P(A barre) fois P A barre (B)']);
  // Cellule de tableau avec « = » et parenthèses : lue d'un trait, parenthèses comprises.
  const t = segmentsFiche('| Développer | $k(a+b) = ka + kb$ |\n|---|---|\n| Carré | $(x+1)^2$ |', 'mathematiques');
  assert.deepEqual(t.map((x) => x.texte), ['Développer. k(a plus b) égale ka plus kb. Carré. (x plus 1) au carré.']);
  // « 8 > 5 » dans le texte (pas une balise HTML).
  const c = segmentsFiche('Comme 8 > 5, on a **4 800 > 4 500**. Et 2 300 < 2 310 < 2 400.', 'mathematiques');
  assert.equal(c[0].texte, 'Comme 8 supérieur à 5, on a 4 800 supérieur à 4 500 . Et 2 300 inférieur à 2 310 inférieur à 2 400.');
  // Le signe cité seul est nommé.
  const n = segmentsFiche('Le signe **<** veut dire « plus petit que ». Ne confonds pas < et >.', 'mathematiques');
  assert.equal(n[0].texte, 'Le signe inférieur veut dire « plus petit que ». Ne confonds pas signe inférieur et signe supérieur.');
  // Formule en ligne coupée par un retour à la ligne.
  const r = segmentsFiche('On a $A = 0{,}40\\\n\\text{mol}$ ici.', 'physique-chimie');
  assert.equal(r[0].texte, 'On a A égale 0,40 mol ici.');
  // Vraie balise HTML retirée.
  assert.equal(segmentsFiche('Texte <span style="color:red">rouge</span>.', 'svt')[0].texte, 'Texte rouge .');
});

test('segmentsFiche : texte très long sans ponctuation → morceaux ≤ 220 caractères, rien de perdu', () => {
  const mots = Array.from({ length: 300 }, (_, i) => `mot${i}`);
  const segs = segmentsFiche(mots.join(' '), 'svt');
  assert.ok(segs.length >= 8);
  assert.ok(segs.every((x) => x.texte.length <= 220));
  assert.deepEqual(segs.map((x) => x.texte).join(' ').split(/\s+/), mots);
  const virgules = segmentsFiche(Array.from({ length: 80 }, (_, i) => `élément ${i}`).join(', '), 'svt');
  assert.ok(virgules.every((x) => x.texte.length <= 220));
  assert.ok(virgules.slice(0, -1).every((x) => x.texte.endsWith(',')), 'coupé après une virgule');
});

test('segmentsTexte : formules dans un énoncé de QCM (langue ou non), entrée vide', () => {
  assert.deepEqual(segmentsTexte('Calcule $\\dfrac{1}{2} + \\dfrac{1}{4}$.', 'mathematiques'), [{ texte: 'Calcule 1 sur 2 plus 1 sur 4 .', langue: 'francais' }]);
  assert.deepEqual(segmentsTexte('', 'anglais'), []);
  assert.deepEqual(segmentsTexte(null, 'mathematiques'), []);
  const s = segmentsTexte('Traduis « I have $3$ dogs ».', 'anglais');
  assert.equal(s.at(-1).langue, 'anglais');
  assert.equal(s.at(-1).texte, 'I have 3 dogs');
});

test('formulesEnMots : $ isolé laissé tel quel, paires converties', () => {
  assert.equal(formulesEnMots('Prix : 5 $'), 'Prix : 5 $');
  assert.equal(formulesEnMots('$a$ et $b$').replace(/\s+/g, ' ').trim(), 'a et b');
  assert.equal(formulesEnMots(undefined), '');
});

test('estEtranger / indicesLangue : robustesse', () => {
  assert.equal(estEtranger('', 'anglais'), false);
  assert.equal(estEtranger('123 456', 'anglais'), false);
  assert.equal(estEtranger('Hello', 'mathematiques'), false);
  assert.deepEqual(indicesLangue('', 'anglais'), { mots: 0, fr: 0, etr: 0 });
  assert.equal(estEtranger('¿Qué tal?', 'espagnol'), true);
  assert.equal(estEtranger('Ich heiße Anna.', 'allemand'), true);
  assert.equal(estEtranger('Je m’appelle Anna.', 'allemand'), false);
});

test('lectureActive : langues, CP-CE1, réglage « partout »', () => {
  for (const m of LANGUES_PARLEES) assert.equal(lectureActive(m, 'terminale'), true);
  assert.equal(lectureActive('mathematiques', 'ce1'), true);
  assert.equal(lectureActive('mathematiques', 'ce2'), false);
  assert.equal(lectureActive('francais', null, {}), false);
  assert.equal(lectureActive('svt', 'seconde', { lecturePartout: true }), true);
  assert.equal(lectureActive(undefined, undefined, null), false);
});
