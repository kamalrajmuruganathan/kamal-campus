/**
 * Résolveur pas à pas : des milliers de calculs et d'équations tirés au hasard
 * (graine fixe). Chaque résultat est vérifié par un calcul indépendant en
 * fractions exactes (BigInt), et chaque solution d'équation est RÉINJECTÉE dans
 * l'équation de départ. Chaque étape affichée est recalculée : elle doit valoir
 * le résultat final (une étape fausse est aussi grave qu'un résultat faux).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resoudre } from './index.js';
import { graine } from '../aide-tests-calcul.js';

// ── fractions exactes indépendantes du code testé ────────────────────────────
const pg = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a || 1n; };
function F(n, d = 1n) {
  n = BigInt(n); d = BigInt(d);
  if (d === 0n) throw new Error('div0');
  if (d < 0n) { n = -n; d = -d; }
  const g = pg(n, d);
  return { n: n / g, d: d / g };
}
const add = (a, b) => F(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a, b) => F(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a, b) => F(a.n * b.n, a.d * b.d);
const div = (a, b) => F(a.n * b.d, a.d * b.n);
const texteF = (f) => (f.d === 1n ? `${f.n}` : `${f.n}/${f.d}`);

/** Lit « 3 », « -7/2 », « −7/2 », « 3,5 » → fraction. */
function lireF(s) {
  s = s.replace('−', '-').trim();
  const m = /^(-?\d+)(?:\/(\d+))?$/.exec(s);
  if (m) return F(m[1], m[2] ?? 1);
  const d = /^(-?)(\d+),(\d+)$/.exec(s);
  if (d) return F(BigInt(`${d[1]}${d[2]}${d[3]}`), 10n ** BigInt(d[3].length));
  throw new Error(`illisible : ${s}`);
}

/** Valeur d'une saisie numérique d'après le solveur lui-même (pour les réinjections). */
function valeurSolveur(expr) {
  const r = resoudre(expr);
  assert.equal(r.ok, true, `${expr} : ${r.erreur}`);
  assert.equal(r.type, 'calcul', expr);
  return lireF(r.resultat);
}

// ── générateur d'expressions numériques ──────────────────────────────────────
function expression(alea, profondeur) {
  if (profondeur === 0 || alea() < 0.3) {
    const n = alea.entier(1, 12);
    return { s: String(n), v: F(n) };
  }
  const op = ['+', '-', '*', '/', '^'][alea.entier(0, alea() < 0.15 ? 4 : 3)];
  const a = expression(alea, profondeur - 1);
  if (op === '^') {
    const e = alea.entier(0, 3);
    let v = F(1);
    for (let i = 0; i < e; i++) v = mul(v, a.v);
    return { s: `(${a.s})^${e}`, v };
  }
  const b = expression(alea, profondeur - 1);
  if (op === '/' && b.v.n === 0n) return a;
  const v = op === '+' ? add(a.v, b.v) : op === '-' ? sub(a.v, b.v) : op === '*' ? mul(a.v, b.v) : div(a.v, b.v);
  const sym = { '+': '+', '-': alea() < 0.5 ? '-' : '−', '*': alea() < 0.5 ? '*' : '×', '/': alea() < 0.5 ? '/' : '÷' }[op];
  return { s: `(${a.s} ${sym} ${b.s})`, v };
}

test('2 000 calculs aléatoires : résultat exact ET chaque étape vaut le résultat', () => {
  const alea = graine(2026);
  for (let i = 0; i < 2000; i++) {
    const e = expression(alea, 3);
    const r = resoudre(e.s);
    assert.equal(r.ok, true, `${e.s} : ${r.erreur}`);
    assert.equal(r.type, 'calcul', e.s);
    // le résultat peut être écrit en fraction (« 19/12 »)
    assert.equal(r.resultat, texteF(e.v), e.s);
    // chaque étape (sauf la conversion décimale finale) se recalcule en le même nombre
    for (const etape of r.etapes) {
      if (/écriture décimale|valeur approchée/.test(etape)) continue;
      const v = valeurSolveur(etape);
      assert.deepEqual(v, e.v, `${e.s} — étape « ${etape} »`);
    }
    for (const etape of r.etapes) assert.doesNotMatch(etape, /NaN|undefined|Infinity|e[+-]\d/, e.s);
  }
});

test('calculs avec décimaux à virgule : résultat décimal exact', () => {
  const alea = graine(11);
  for (let i = 0; i < 500; i++) {
    const a = alea.entier(-999, 999);
    const b = alea.entier(1, 999);
    const op = ['+', '-', '*'][alea.entier(0, 2)];
    const sa = `${a < 0 ? '-' : ''}${Math.floor(Math.abs(a) / 10)},${Math.abs(a) % 10}`;
    const sb = `${Math.floor(b / 100)},${String(b % 100).padStart(2, '0')}`;
    const r = resoudre(`${sa} ${op} ${sb}`);
    const va = F(a, 10);
    const vb = F(b, 100);
    const v = op === '+' ? add(va, vb) : op === '-' ? sub(va, vb) : mul(va, vb);
    assert.equal(r.ok, true, `${sa} ${op} ${sb}`);
    assert.deepEqual(lireF(r.resultat), v, `${sa} ${op} ${sb} → ${r.resultat}`);
    if (v.d !== 1n) assert.match(r.resultat, /,/, 'une saisie décimale donne un résultat décimal');
  }
  assert.equal(resoudre('0,1 + 0,2').resultat, '0,3');
  assert.equal(resoudre('1,5 × 4').resultat, '6');
  assert.deepEqual(resoudre('1,5 + 2').etapes.slice(0, 1), ['1,5 + 2']);
});

test('3 000 équations du 1er degré : solution vérifiée par réinjection', () => {
  const alea = graine(1);
  for (let i = 0; i < 3000; i++) {
    const a = alea.entier(-12, 12);
    let c = alea.entier(-12, 12);
    if (a === c) c += 1;
    const b = alea.entier(-30, 30);
    const d = alea.entier(-30, 30);
    const terme = (k) => (k === 1 ? 'x' : k === -1 ? '-x' : `${k}x`);
    const eq = `${terme(a)} + ${b} = ${terme(c)} - ${d}`.replace('+ -', '- ').replace('- -', '+ ').replace(/^0x \+ /, '');
    const r = resoudre(eq);
    assert.equal(r.ok, true, `${eq} : ${r.erreur}`);
    const attendu = F(-d - b, a - c);
    assert.equal(r.resultat, `x = ${texteF(attendu)}`, eq);
    // réinjection : on remplace x par la solution dans chaque membre
    const [g, dr] = eq.split('=');
    const sol = `(${texteF(attendu)})`;
    const gauche = valeurSolveur(g.replace(/(\d)x/g, `$1*${sol}`).replace(/x/g, sol));
    const droite = valeurSolveur(dr.replace(/(\d)x/g, `$1*${sol}`).replace(/x/g, sol));
    assert.deepEqual(gauche, droite, `réinjection dans ${eq}`);
    for (const e of r.etapes) assert.doesNotMatch(e, /÷ -|NaN|undefined|(?<![\d/])1x\b/, `${eq} : ${e}`);
  }
});

test('2 000 équations du 2nd degré à racines rationnelles : les deux racines, réinjectées', () => {
  const alea = graine(2);
  for (let i = 0; i < 2000; i++) {
    const p = alea.entier(1, 6); const q = alea.entier(-9, 9);
    const r2 = alea.entier(1, 6) * (alea() < 0.5 ? -1 : 1); const s = alea.entier(-9, 9);
    // (px − q)(r2x − s) = 0 développé : a x² + b x + c = 0
    const a = p * r2; const b = -(p * s + q * r2); const c = q * s;
    const eq = `${a}x^2 + ${b}x + ${c} = 0`.replace(/\+ -/g, '- ');
    const r = resoudre(eq);
    assert.equal(r.ok, true, `${eq} : ${r.erreur}`);
    const x1 = F(q, p); const x2 = F(s, r2);
    const attendues = [texteF(x1), texteF(x2)];
    const lues = [...r.resultat.matchAll(/x = (-?\d+(?:\/\d+)?)/g)].map((m) => m[1]);
    if (x1.n === x2.n && x1.d === x2.d) assert.deepEqual(lues, [attendues[0]], eq);
    else assert.deepEqual([...lues].sort(), [...attendues].sort(), eq);
    for (const l of lues) {
      const sol = `(${l})`;
      const v = valeurSolveur(`${a}*${sol}^2 + ${b}*${sol} + ${c}`.replace(/\+ -/g, '- '));
      assert.equal(v.n, 0n, `réinjection de ${l} dans ${eq}`);
    }
  }
});

test('1 000 équations du 2nd degré à racines irrationnelles : écriture exacte cohérente', () => {
  const alea = graine(3);
  let vues = 0;
  for (let i = 0; i < 1000; i++) {
    const a = alea.entier(-5, 5) || 1; const b = alea.entier(-10, 10); const c = alea.entier(-10, 10);
    const delta = b * b - 4 * a * c;
    const rac = Math.round(Math.sqrt(Math.max(delta, 0)));
    if (delta <= 0 || rac * rac === delta) continue;
    vues += 1;
    const eq = `${a}x^2 + ${b}x + ${c} = 0`;
    const r = resoudre(eq);
    assert.equal(r.ok, true, eq);
    assert.match(r.resultat, /√/, eq);
    // valeurs approchées des étapes : réinjectées (à 10⁻³ près sur x)
    const approx = [...r.etapes.join(' ').matchAll(/≈ (−?\d+(?:,\d+)?)/g)].slice(1).map((m) => Number(m[1].replace('−', '-').replace(',', '.')));
    assert.equal(approx.length, 2, eq);
    const exactes = [(-b - Math.sqrt(delta)) / (2 * a), (-b + Math.sqrt(delta)) / (2 * a)].sort((u, v) => u - v);
    approx.forEach((x, k) => assert.ok(Math.abs(x - exactes[k]) <= 0.0005 + 1e-12, `${eq} : ${x} vs ${exactes[k]}`));
    for (const e of r.etapes) assert.doesNotMatch(e, /\d\.\d/, `virgule décimale attendue : ${e}`);
  }
  assert.ok(vues > 300);
});

test('expressions avec x : forme réduite égale à l’expression en 5 points', () => {
  const alea = graine(4);
  for (let i = 0; i < 800; i++) {
    const k = () => alea.entier(-6, 6);
    const expr = `(${k()}x + ${k()})(${k()}x - ${k()}) + ${k()}(x - ${k()})^2`.replace(/\+ -/g, '- ').replace(/- -/g, '+ ');
    const r = resoudre(expr);
    assert.equal(r.ok, true, `${expr} : ${r.erreur}`);
    if (r.type !== 'expression') continue; // tout s'est simplifié en constante
    for (const x of [-2, -1, 0, 3, 7]) {
      const sx = `(${x})`;
      const brut = valeurSolveur(expr.replace(/(\d)x/g, `$1*${sx}`).replace(/x/g, sx));
      const reduit = valeurSolveur(r.resultat.replace(/\)x/g, `)*${sx}`).replace(/(\d)x/g, `$1*${sx}`).replace(/x/g, sx));
      assert.deepEqual(reduit, brut, `${expr} → ${r.resultat} en x = ${x}`);
    }
  }
});

test('saisies de téléphone : ², ³, X majuscule, espaces insécables, tiret long', () => {
  assert.equal(resoudre('x² − 5x + 6 = 0').resultat, 'x = 2  ou  x = 3');
  assert.equal(resoudre('2³').resultat, '8');
  assert.equal(resoudre('3X + 1 = 7').resultat, 'x = 2');
  assert.equal(resoudre('10 – 4').resultat, '6');
  assert.equal(resoudre('(x+1)² = 0').resultat, 'x = -1');
});

test('nombres trop grands, saisies absurdes : refus clair, jamais un résultat faux', () => {
  for (const s of ['99999999*99999999', '12345678901234567890 + 1', '1000000^3', '.', ',', '1,2,3', 'y + 2 = 3', '2^60', 'x^3 = 8', '1/x = 2', '=', '3 =', '()']) {
    const r = resoudre(s);
    assert.equal(r.ok, false, s);
    assert.ok(r.erreur && !/undefined|NaN/.test(r.erreur), `${s} : ${r.erreur}`);
  }
  assert.match(resoudre('y + 2 = 3').erreur, /inconnue x/);
  assert.match(resoudre('1/0').erreur, /zéro/i);
});

test('étapes du 1er degré : « x » et non « 1x », diviseur négatif entre parenthèses', () => {
  const r = resoudre('-2x + 3 = 1');
  assert.ok(r.etapes.includes('On isole x : −2x = −2.'), r.etapes.join(' | '));
  assert.ok(r.etapes.includes('x = −2 ÷ (−2) = 1.'), r.etapes.join(' | '));
  const r2 = resoudre('x/2 + 1 = 0');
  assert.ok(r2.etapes.includes('On ramène tout d’un côté : (1/2)x + 1 = 0.'), r2.etapes.join(' | '));
  assert.ok(r2.etapes.includes('x = −1 ÷ (1/2) = −2.'), r2.etapes.join(' | '));
  assert.ok(!resoudre('x + 3 = 5').etapes.some((e) => /1x|÷ 1 /.test(e)));
  assert.ok(resoudre('0,5x = 1,2').etapes.includes('Soit x = 2,4 en écriture décimale.'));
});

test('racines irrationnelles : écriture exacte et approchée avec virgule', () => {
  const r = resoudre('x^2 - 4x + 1 = 0');
  assert.equal(r.resultat, 'x = 2 − √3  ou  x = 2 + √3');
  assert.ok(r.etapes.some((e) => e.includes('x₁ = 2 − √3 ≈ 0,268, x₂ = 2 + √3 ≈ 3,732')), r.etapes.join(' | '));
  // a < 0 : racines rangées dans l'ordre croissant
  const n = resoudre('-x^2 + 2x + 1 = 0');
  assert.equal(n.resultat, 'x = 1 − √2  ou  x = 1 + √2');
  // coefficients fractionnaires
  assert.equal(resoudre('x^2/2 - 1 = 0').resultat, 'x = −√2  ou  x = √2');
});
