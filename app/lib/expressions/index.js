/**
 * Expressions mathématiques : lecture (LaTeX des corrigés ou saisie de l'élève),
 * égalité (on évalue les deux expressions en plusieurs points) et forme
 * (développée, factorisée, canonique).
 *
 *   « 6x + 8 », « 8 + 6x », « 2(3x+4) » sont égales ;
 *   pour « Développe », seule une forme sans parenthèses à multiplier est acceptée.
 *
 * Pas de calcul formel : deux expressions égales en 8 points choisis au hasard
 * (toujours les mêmes) sont considérées comme égales.
 */

// ─── Lecture ──────────────────────────────────────────────────────────────

const FONCTIONS = ['sqrt', 'exp', 'ln', 'cos', 'sin', 'tan'];

/** Contenu de l'accolade ouvrante à la position i (s[i] === '{') et position de fin. */
function accolade(s, i) {
  let p = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') p++;
    else if (s[j] === '}' && --p === 0) return [s.slice(i + 1, j), j + 1];
  }
  return null;
}

/** LaTeX → texte simple (« \dfrac{a}{b} » → « ((a)/(b)) »), ou null si on ne sait pas lire. */
export function latexVersSimple(s) {
  s = String(s).trim().replace(/^\$+|\$+\.?$/g, '').replace(/\$\s*\.?\s*$/, '').trim();
  if (s.includes('$')) return null;
  s = s
    .replace(/\\(?:left|right|displaystyle|limits)\b/g, '')
    .replace(/\{,\}/g, '.')
    .replace(/(\d)\\[,;: ]\s*(?=\d{3}(?!\d))/g, '$1')
    .replace(/\\[,;:! ]|~/g, ' ')
    .replace(/\\mathrm\{([ei])\}/g, '$1')
    .replace(/\\(?:mathcal|mathit)\{([A-Za-z])\}/g, '$1')
    .replace(/\\(?:times|cdot)/g, '*')
    .replace(/\\div/g, '/')
    .replace(/\\(ln|exp|cos|sin|tan)\b/g, ' $1 ')
    .replace(/\\pi\b/g, ' pi ');
  // Fractions et racines (de l'intérieur vers l'extérieur grâce à la récursion).
  for (let garde = 0; garde < 50; garde++) {
    const m = s.match(/\\[dt]?frac\s*\{|\\sqrt\s*\{/);
    if (!m) break;
    const i = m.index + m[0].length - 1;
    const a = accolade(s, i);
    if (!a) return null;
    if (m[0].includes('sqrt')) {
      const inn = latexVersSimple(a[0]);
      if (inn == null) return null;
      s = s.slice(0, m.index) + ` sqrt(${inn})` + s.slice(a[1]);
    } else {
      const j = s.slice(a[1]).search(/\S/) + a[1];
      if (s[j] !== '{') return null;
      const b = accolade(s, j);
      if (!b) return null;
      const num = latexVersSimple(a[0]);
      const den = latexVersSimple(b[0]);
      if (num == null || den == null) return null;
      s = s.slice(0, m.index) + `((${num})/(${den}))` + s.slice(b[1]);
    }
  }
  if (/\\sqrt\s*\[/.test(s)) return null;
  // Indices : « u_n », « u_{n+1} » → noms de variable.
  s = s.replace(/([A-Za-z])_\{([^{}]+)\}/g, (_, l, i) => `${l}_${i.replace(/\s+/g, '')}`).replace(/([A-Za-z])_([A-Za-z0-9])/g, '$1_$2');
  if (/\\[A-Za-z]+/.test(s)) return null; // commande inconnue (\vec, \infty, \mathrm{cm}, \pm, \in…)
  s = s.replace(/\{/g, '(').replace(/\}/g, ')');
  return s;
}

/** Saisie de l'élève (clavier de téléphone) → texte simple. */
export function saisieVersSimple(s) {
  return String(s)
    .trim()
    .replace(/[.。]$/, '')
    .replace(/(\d)[\s  ](?=\d{3}\b)/g, '$1')
    .replace(/(\d),(\d)/g, '$1.$2')
    .replace(/[−–—]/g, '-')
    .replace(/[×·∙⋅]/g, '*')
    .replace(/÷/g, '/')
    // Exposants tapés en caractères spéciaux : « 2⁸ », « 2¹⁰ », « 3⁻² » → 2^(8), 2^(10), 3^(-2).
    .replace(/([⁺⁻]?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, sg, d) => '^(' + (sg === '⁻' ? '-' : '') + [...d].map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).join('') + ')')
    .replace(/√/g, ' sqrt ')
    .replace(/π/g, ' pi ')
    .replace(/’/g, "'")
    .replace(/racine(?:\s+carr[ée]e)?(?:\s+de)?/gi, ' sqrt ');
}

function jetons(s) {
  const out = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    const num = s.slice(i).match(/^\d+(?:\.\d+)?/);
    if (num) { out.push({ t: 'num', v: parseFloat(num[0]) }); i += num[0].length; continue; }
    const f = FONCTIONS.concat('pi').find((n) => s.startsWith(n, i) && !/[A-Za-z_]/.test(s[i + n.length] || ''));
    if (f) { out.push(f === 'pi' ? { t: 'const', v: 'pi' } : { t: 'fn', v: f }); i += f.length; continue; }
    // Fonctions collées à leur argument : « sqrtx », « lnx ».
    const fc = FONCTIONS.find((n) => s.startsWith(n, i));
    if (fc) { out.push({ t: 'fn', v: fc }); i += fc.length; continue; }
    if (/[A-Za-z]/.test(c)) {
      const ind = s.slice(i + 1).match(/^_(?:\([^()]*\)|[A-Za-z0-9+\-]+)/);
      let nom = c + (ind ? '_' + ind[0].slice(1).replace(/[()]/g, '') : '');
      i += 1 + (ind ? ind[0].length : 0);
      while (s[i] === "'") { nom += "'"; i++; }
      out.push({ t: 'id', v: nom });
      continue;
    }
    if ('+-*/^()='.includes(c)) { out.push({ t: c }); i++; continue; }
    return null; // caractère inconnu (;, <, %, |…)
  }
  return out;
}

/** Arbre d'une expression (sans « = »), ou null. */
function arbre(toks) {
  let k = 0;
  const voir = () => toks[k];
  const debutAtome = (x) => x && (x.t === 'num' || x.t === 'id' || x.t === 'const' || x.t === 'fn' || x.t === '(');
  function somme() {
    const termes = [];
    const signes = [];
    let sg = 1;
    if (voir() && (voir().t === '+' || voir().t === '-')) { sg = voir().t === '-' ? -1 : 1; k++; }
    termes.push(produit()); signes.push(sg);
    while (voir() && (voir().t === '+' || voir().t === '-')) {
      signes.push(voir().t === '-' ? -1 : 1); k++;
      termes.push(produit());
    }
    if (termes.some((x) => !x)) return null;
    return termes.length === 1 && signes[0] === 1 ? termes[0] : { t: 'add', termes, signes };
  }
  function produit() {
    const f = [unaire()];
    const inv = [false];
    for (;;) {
      const x = voir();
      if (x && (x.t === '*' || x.t === '/')) { k++; inv.push(x.t === '/'); f.push(unaire()); }
      else if (debutAtome(x)) { inv.push(false); f.push(puissance()); }
      else break;
    }
    if (f.some((x) => !x)) return null;
    return f.length === 1 ? f[0] : { t: 'mul', f, inv };
  }
  function unaire() {
    const x = voir();
    if (x && x.t === '-') { k++; const a = unaire(); return a && { t: 'add', termes: [a], signes: [-1] }; }
    if (x && x.t === '+') { k++; return unaire(); }
    return puissance();
  }
  function puissance() {
    const b = atome();
    if (!b) return null;
    if (voir() && voir().t === '^') { k++; const e = unaire(); return e && { t: 'pow', b, e }; }
    return b;
  }
  function atome() {
    const x = voir();
    if (!x) return null;
    k++;
    if (x.t === 'num') return { t: 'num', v: x.v };
    if (x.t === 'const') return { t: 'const', v: x.v };
    if (x.t === 'id') return { t: 'var', v: x.v };
    if (x.t === '(') {
      const e = somme();
      if (!e || !voir() || voir().t !== ')') return null;
      k++;
      return { ...e, par: true };
    }
    if (x.t === 'fn') {
      // « sqrt(x+1) », « ln x », « cos 2x » (argument sans parenthèses : un produit simple).
      // « sin^2(x) » = (sin x)².
      let expo = null;
      if (voir() && voir().t === '^') { k++; expo = atome(); if (!expo) return null; }
      let a;
      if (voir() && voir().t === '(') a = puissance();
      else {
        const f = [puissance()];
        while (voir() && (voir().t === 'num' || voir().t === 'id' || voir().t === 'const')) f.push(puissance());
        a = f.some((y) => !y) ? null : f.length === 1 ? f[0] : { t: 'mul', f, inv: f.map(() => false) };
      }
      if (!a) return null;
      return expo ? { t: 'pow', b: { t: 'fn', v: x.v, a }, e: expo } : { t: 'fn', v: x.v, a };
    }
    return null;
  }
  const r = somme();
  return r && k === toks.length ? r : null;
}

/** Côté gauche « nom » : f(x), f'(x), y, B, u_n, A, sin x… */
function estNom(toks) {
  if (!toks.length) return false;
  if (toks.length === 1 && toks[0].t === 'id') return true;
  if (toks.length <= 3 && toks.every((x) => x.t === 'id')) return true; // AB, pH
  if (toks[0].t === 'id' && toks[1] && toks[1].t === '(' && toks[toks.length - 1].t === ')' && toks.length <= 8) return true;
  if (toks[0].t === 'fn' && toks.length === 2 && toks[1].t === 'id') return true;
  return false;
}

/**
 * Lit une réponse : { kind: 'expr', a } ou { kind: 'eq', a } (a = gauche − droite), ou null.
 * « f(x) = 3x − 2 » → expr 3x − 2 ; « 2x + 5y + 4 = 0 » → eq ; « A = 2x = … = 6 » → la dernière.
 */
export function lire(texte, { latex = false } = {}) {
  const s = latex ? latexVersSimple(texte) : saisieVersSimple(texte);
  if (s == null || !s.trim()) return null;
  const t = jetons(s);
  if (!t) return null;
  const parts = [[]];
  for (const x of t) (x.t === '=' ? parts.push([]) : parts[parts.length - 1].push(x));
  if (parts.some((p) => !p.length)) return null;
  if (parts.length === 1) { const a = arbre(parts[0]); return a && { kind: 'expr', a }; }
  if (estNom(parts[0])) {
    const a = arbre(parts[parts.length - 1]);
    return a && { kind: 'expr', a, nom: parts[0].map((x) => x.v ?? x.t).join('') };
  }
  if (parts.length === 2) {
    const g = arbre(parts[0]);
    const d = arbre(parts[1]);
    return g && d && { kind: 'eq', a: { t: 'add', termes: [g, d], signes: [1, -1] } };
  }
  return null;
}

// ─── Évaluation (nombres complexes, pour i) ─────────────────────────────

const C = (re, im = 0) => ({ re, im });
const NAN = C(NaN, NaN);
const ok = (z) => Number.isFinite(z.re) && Number.isFinite(z.im);
const add = (a, b) => C(a.re + b.re, a.im + b.im);
const mul = (a, b) => C(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const div = (a, b) => {
  const d = b.re * b.re + b.im * b.im;
  return d === 0 ? NAN : C((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d);
};
const reel = (z) => Math.abs(z.im) < 1e-12;

function puiss(b, e) {
  if (!ok(b) || !ok(e)) return NAN;
  if (reel(e) && Number.isInteger(e.re) && Math.abs(e.re) <= 64) {
    let r = C(1);
    for (let j = 0; j < Math.abs(e.re); j++) r = mul(r, b);
    return e.re < 0 ? div(C(1), r) : r;
  }
  if (reel(b) && reel(e) && b.re > 0) return C(Math.pow(b.re, e.re));
  return NAN;
}

function evaluer(n, vars, complexe) {
  switch (n.t) {
    case 'num': return C(n.v);
    case 'const': return C(Math.PI);
    case 'var':
      if (n.v === 'e') return C(Math.E);
      if (n.v === 'i' && complexe) return C(0, 1);
      return n.v in vars ? C(vars[n.v]) : NAN;
    case 'add': return n.termes.reduce((s, x, j) => { const v = evaluer(x, vars, complexe); return add(s, n.signes[j] < 0 ? C(-v.re, -v.im) : v); }, C(0));
    case 'mul': return n.f.reduce((s, x, j) => (n.inv[j] ? div : mul)(s, evaluer(x, vars, complexe)), C(1));
    case 'pow': {
      const e = evaluer(n.e, vars, complexe);
      if (n.b.t === 'var' && n.b.v === 'e') return fonction('exp', e);
      return puiss(evaluer(n.b, vars, complexe), e);
    }
    case 'fn': return fonction(n.v, evaluer(n.a, vars, complexe));
    default: return NAN;
  }
}

function fonction(f, z) {
  if (!ok(z)) return NAN;
  if (f === 'exp') { const m = Math.exp(z.re); return C(m * Math.cos(z.im), m * Math.sin(z.im)); }
  if (!reel(z)) return NAN;
  const x = z.re;
  if (f === 'sqrt') return x >= 0 ? C(Math.sqrt(x)) : NAN;
  if (f === 'ln') return x > 0 ? C(Math.log(x)) : NAN;
  return C(Math[f](x));
}

/** Noms des variables d'un arbre (sans e, ni i en mode complexe). */
export function variables(n, complexe = false, out = new Set()) {
  if (!n) return out;
  if (n.t === 'var' && n.v !== 'e' && !(complexe && n.v === 'i')) out.add(n.v);
  for (const k of ['termes', 'f']) if (n[k]) n[k].forEach((x) => variables(x, complexe, out));
  for (const k of ['b', 'e', 'a']) if (n[k]) variables(n[k], complexe, out);
  return out;
}

// Points d'essai, toujours les mêmes (résultat reproductible).
const REELS = [0.7316, 1.3742, 2.1937, 0.4123, 3.0719, 1.9168, 0.2894, 2.6351, -0.6127, -1.4339, 4.1773, 0.8659]; // décimales « quelconques » : cos(2000πt) ≠ cos(200πt)
const ENTIERS = [1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 0, 8];
const POINTS = 10;

function points(noms) {
  const liste = [...noms].sort();
  const out = [];
  for (let j = 0; j < POINTS; j++) {
    const v = {};
    liste.forEach((nom, q) => {
      const entier = /^[nkpm](?:$|_)/.test(nom);
      const serie = entier ? ENTIERS : REELS;
      v[nom] = serie[(j * 5 + q * 7 + q * j) % serie.length];
    });
    out.push(v);
  }
  return out;
}

const proches = (a, b) => Math.abs(a.re - b.re) <= 1e-8 * Math.max(1, Math.abs(a.re), Math.abs(b.re)) && Math.abs(a.im - b.im) <= 1e-8 * Math.max(1, Math.abs(a.im), Math.abs(b.im));

/**
 * Les deux arbres sont-ils égaux ? mode : 'egal' | 'constante' (primitives : à une
 * constante près) | 'proportionnel' (équations : à un facteur non nul près).
 * @returns {boolean|null} null si on ne peut pas trancher (trop peu de points calculables).
 */
export function egales(a, b, { complexe = false, mode = 'egal' } = {}) {
  const noms = new Set([...variables(a, complexe), ...variables(b, complexe)]);
  let utiles = 0;
  let ref = null;
  for (const v of points(noms)) {
    const x = evaluer(a, v, complexe);
    if (!ok(x)) continue;
    const y = evaluer(b, v, complexe);
    if (!ok(y)) return false;
    utiles++;
    if (mode === 'egal') { if (!proches(x, y)) return false; }
    else if (mode === 'constante') {
      const d = add(y, C(-x.re, -x.im));
      if (ref == null) ref = d; else if (!proches(ref, d)) return false;
    } else {
      if (Math.abs(x.re) + Math.abs(x.im) < 1e-9) { utiles--; if (!(Math.abs(y.re) + Math.abs(y.im) < 1e-9)) return false; continue; }
      const q = div(y, x);
      if (ref == null) { if (Math.abs(q.re) + Math.abs(q.im) < 1e-12) return false; ref = q; } else if (!proches(ref, q)) return false;
    }
  }
  return utiles >= 4 ? true : null;
}

// ─── Forme ────────────────────────────────────────────────────────────────

const constante = (n, complexe) => variables(n, complexe).size === 0 && !(complexe && contientI(n));
function contientI(n) {
  if (!n) return false;
  if (n.t === 'var' && n.v === 'i') return true;
  return ['termes', 'f'].some((k) => n[k] && n[k].some(contientI)) || ['b', 'e', 'a'].some((k) => n[k] && contientI(n[k]));
}

/** Nombre de termes une fois les sommes aplaties. */
function nbTermes(n) {
  if (n.t === 'add') return n.termes.reduce((s, x) => s + (x.t === 'add' && !x.par ? nbTermes(x) : x.t === 'add' && x.termes.length === 1 ? nbTermes(x) : 1), 0);
  return 1;
}

/** Forme développée : aucune somme multipliée, élevée à une puissance ou au dénominateur. */
function estDeveloppee(n, complexe) {
  const somme = (x) => x.t === 'add' && (x.termes.length > 1 || somme(x.termes[0]));
  const verif = (x) => {
    if (x.t === 'add') return x.termes.every(verif);
    if (x.t === 'mul') return x.f.every((y, j) => !somme(y) && verif(y) && !(x.inv[j] && !constante(y, complexe)));
    if (x.t === 'pow') return !somme(x.b) && verif(x.b) && !(complexe && contientI(x.e));
    if (x.t === 'fn') return !(complexe && contientI(x.a));
    return true;
  };
  return verif(n);
}

/** Facteurs non constants d'un produit (avec multiplicité) et constante en tête. */
function facteurs(n, complexe) {
  let signe = 1;
  while (n.t === 'add' && n.termes.length === 1) { signe *= n.signes[0]; n = n.termes[0]; }
  const liste = n.t === 'mul' ? n.f.map((x, j) => ({ x, inv: n.inv[j] })) : [{ x: n, inv: false }];
  let nb = 0;
  let k = signe;
  const bases = [];
  for (const { x, inv } of liste) {
    if (constante(x, complexe)) { const v = evaluer(x, {}, complexe).re; k = inv ? k / v : k * v; continue; }
    if (inv) return null;
    if (x.t === 'pow' && x.e.t === 'num' && Number.isInteger(x.e.v) && x.e.v > 0) { nb += x.e.v; bases.push(x.b); }
    else { nb += 1; bases.push(x); }
  }
  const produit = n.t === 'mul' || (n.t === 'pow' && n.b.t === 'add');
  return { produit, nb, k, bases };
}

function occurrences(n, nom) {
  if (!n) return 0;
  if (n.t === 'var') return n.v === nom ? 1 : 0;
  let s = 0;
  for (const k of ['termes', 'f']) if (n[k]) s += n[k].reduce((t, x) => t + occurrences(x, nom), 0);
  for (const k of ['b', 'e', 'a']) if (n[k]) s += occurrences(n[k], nom);
  return s;
}

/**
 * La saisie respecte-t-elle la forme demandée ?
 * regle : 'developpe' | 'factorise' | 'canonique' | 'libre' | 'primitive'
 */
export function formeOk(saisie, attendu, regle, complexe = false) {
  if (regle === 'developpe') return estDeveloppee(saisie, complexe) && nbTermes(saisie) <= nbTermes(attendu);
  if (regle === 'factorise') {
    const s = facteurs(saisie, complexe);
    const a = facteurs(attendu, complexe);
    if (!(s && a && s.produit && s.nb >= a.nb && Math.abs(Math.abs(s.k) - Math.abs(a.k)) < 1e-9 * Math.max(1, Math.abs(a.k)))) return false;
    // Chaque facteur doit être réduit (« (x-2)(3x+1+x-2) » n'est pas fini).
    const maxT = Math.max(...a.bases.map(nbTermes));
    return s.bases.every((b) => estDeveloppee(b, complexe) && nbTermes(b) <= maxT);
  }
  if (regle === 'canonique') {
    const [v] = [...variables(attendu, complexe)];
    return !!v && occurrences(saisie, v) === 1;
  }
  return true;
}

// ─── Exercice ─────────────────────────────────────────────────────────────

const plat = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function regleDe(enonce) {
  const e = plat(enonce);
  const dev = /developp|\breduis|\breduire|forme algebrique/.test(e);
  const fac = /factoris/.test(e);
  if (dev && fac) return null;
  if (/forme canonique/.test(e)) return 'canonique';
  if (fac) return 'factorise';
  if (dev) return 'developpe';
  if (/primitive/.test(e)) return /telle que|tel que|verifiant|s.annule|qui vaut|prenant la valeur|passant par/.test(e) ? 'libre' : 'primitive';
  if (/simplifi|plus simplement|sous (?:la )?forme|ecri(?:s|re) .{0,30}forme/.test(e)) return null;
  return 'libre';
}

/** Expressions écrites dans l'énoncé (entre $…$), lues. */
function expressionsEnonce(enonce, complexe) {
  const out = [];
  for (const m of String(enonce).matchAll(/\$([^$]+)\$/g)) {
    const r = lire(m[1], { latex: true });
    if (r) out.push(r.a);
    // « f(x) = … » dans une phrase : chaque membre.
    for (const morceau of m[1].split('=')) { const q = lire(morceau, { latex: true }); if (q) out.push(q.a); }
  }
  return out.filter((a) => variables(a, complexe).size || contientI(a));
}

/**
 * Exercice dont la réponse est une expression ou une équation : renvoie de quoi
 * comparer la saisie, ou null (l'exercice reste « à rédiger »).
 */
export function analyserCalcul(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  const r = ex.reponse.trim();
  if (!/^\$[^$]+\$\s*\.?$/.test(r)) return null;
  if (/frac\{\s*d|\\mathrm\{(?![ei]\})/.test(r)) return null; // dérivée d/dt, unités, points
  if (/d[ée]montr|montrer|montre que|justifi|prouv|expliqu|interpr[ée]t|comment|conclu/i.test(ex.enonce)) return null;
  const complexe = /\\mathrm\{i\}/.test(r) || (/(?:^|[^a-z\\])i(?![a-z])/i.test(r.replace(/\\[a-z]+/gi, ''))
    && /\\mathbb\{C\}|complexe|affixe|alg[ée]brique|\\overline|\\bar/i.test(ex.enonce));
  const lu = lire(r, { latex: true });
  if (!lu) return null;
  const vars = variables(lu.a, complexe);
  const special = complexe || /sqrt|ln|exp|pi|\^\(?\s*-|\^\(?\s*\(?\s*\d+\s*\/|e\^/.test(latexVersSimple(r) || '');
  if (!vars.size && !special) return null; // simple nombre : déjà géré ailleurs
  const regle = regleDe(ex.enonce);
  if (!regle) return null;
  if (lu.kind === 'eq' && regle !== 'libre') return null;
  // L'expression attendue doit elle-même respecter la règle (sinon : on ne sait pas lire la consigne).
  if (!formeOk(lu.a, lu.a, regle, complexe)) return null;
  // Contrôle de l'expression attendue : calculable en assez de points.
  const mode = lu.kind === 'eq' ? 'proportionnel' : regle === 'primitive' ? 'constante' : 'egal';
  if (egales(lu.a, lu.a, { complexe, mode }) !== true) return null;
  // Recopier une expression de l'énoncé ne doit jamais suffire.
  const copies = expressionsEnonce(ex.enonce, complexe);
  if (regle === 'libre' || regle === 'primitive') {
    if (copies.some((c) => egales(lu.a, c, { complexe, mode }) === true)) return null;
  }
  return { kind: 'calcul', forme: lu.kind, attendu: lu.a, nom: lu.nom || null, regle, complexe, mode, vars: [...vars], reduite: /reduite/.test(plat(ex.enonce)) };
}

/** La réponse (une formule $…$) contient-elle des lettres dans sa valeur (« E = 3(2x + 5) », « -2i ») ? */
export function valeurLitterale(reponse) {
  const r = String(reponse || '').trim();
  if (!/^\$[^$]+\$\s*\.?$/.test(r)) return false;
  const lu = lire(r, { latex: true });
  if (!lu) return false;
  const cx = /\\mathrm\{i\}/.test(r);
  return variables(lu.a, cx).size > 0 || (cx && contientI(lu.a));
}

/**
 * Compare une saisie à l'analyse d'analyserCalcul.
 * @returns {{juste:boolean, raison?:'forme'}}
 */
export function comparerCalcul(saisie, c) {
  // Valeur sans variable (angle « -2π/3 ») : l'unité « rad » est facultative.
  if (c && !c.vars.length) saisie = String(saisie).replace(/\s*\brad(?:ians?)?\s*\.?\s*$/i, '');
  const lu = lire(saisie);
  if (!lu || !c) return { juste: false };
  let a = lu.a;
  // Lettres : « l » pour « L » si ce n'est pas ambigu.
  const voulues = new Set(c.vars);
  const renommer = (n) => {
    if (n.t === 'var' && !voulues.has(n.v) && n.v !== 'e' && !(c.complexe && n.v === 'i')) {
      const autre = [...voulues].find((v) => v.toLowerCase() === n.v.toLowerCase());
      if (autre) return { ...n, v: autre };
    }
    const m = { ...n };
    for (const k of ['termes', 'f']) if (n[k]) m[k] = n[k].map(renommer);
    for (const k of ['b', 'e', 'a']) if (n[k]) m[k] = renommer(n[k]);
    return m;
  };
  a = renommer(a);
  let mode = c.mode;
  let attendu = c.attendu;
  if (c.forme === 'expr' && lu.kind === 'eq') {
    // Équation de droite donnée sous une autre forme (« 2y = x + 4 ») : permise sauf si « réduite ».
    if (c.reduite || !c.nom || !/^[a-z]$/i.test(c.nom)) return { juste: false };
    attendu = { t: 'add', termes: [{ t: 'var', v: c.nom }, c.attendu], signes: [1, -1] };
    mode = 'proportionnel';
  } else if (c.forme === 'eq' && lu.kind !== 'eq') {
    // Équation cartésienne attendue, « y = -0,4x - 0,8 » saisi : même droite si proportionnelle.
    if (!lu.nom || !/^[a-z]$/i.test(lu.nom) || !voulues.has(lu.nom)) return { juste: false };
    a = { t: 'add', termes: [{ t: 'var', v: lu.nom }, a], signes: [1, -1] };
  }
  if (lu.kind === 'expr' && lu.nom && c.nom && plat(lu.nom).replace(/\s/g, '') !== plat(c.nom).replace(/\s/g, '')) {
    // « f(x) = … » attendu, « g(x) = … » saisi : on compare quand même la valeur (le nom n'est qu'une étiquette)
  }
  const eg = egales(attendu, a, { complexe: c.complexe, mode });
  if (eg !== true) return { juste: false };
  if (!formeOk(a, c.attendu, c.regle, c.complexe)) return { juste: false, raison: 'forme' };
  return { juste: true };
}
