/**
 * Autres réponses « mathématiques » vérifiables par l'appli :
 *  - intervalles et réunions (« S = ]-∞ ; 5[ », « [2 ; 3] ∪ [4 ; +∞[ »),
 *    ou l'inéquation équivalente (« x < 5 », « -2 ≤ x ≤ 3 ») ;
 *  - coordonnées d'un point ou couple (« M(2 ; 1) », « (u ; v) = (-3 ; 8) ») ;
 *  - équations de réaction chimique ajustées (« 2 H2 + O2 -> 2 H2O »).
 */
import { lire, latexVersSimple, variables, egales } from './index.js';
import { signature } from './exactes.js';

const plat = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** Valeur exacte d'une borne ou d'une coordonnée (« -3 », « 5{,}6 », « \dfrac{1}{3} », « √2 »). */
function valeur(texte, latex) {
  const lu = lire(texte, { latex });
  if (!lu || lu.kind !== 'expr' || variables(lu.a).size) return null;
  // Évaluation sans variable : on passe par l'égalité avec elle-même (même moteur que les calculs).
  return evaluerConstante(lu.a);
}

function evaluerConstante(n) {
  switch (n.t) {
    case 'num': return n.v;
    case 'const': return Math.PI;
    case 'var': return n.v === 'e' ? Math.E : NaN;
    case 'add': return n.termes.reduce((s, x, j) => s + n.signes[j] * evaluerConstante(x), 0);
    case 'mul': return n.f.reduce((s, x, j) => (n.inv[j] ? s / evaluerConstante(x) : s * evaluerConstante(x)), 1);
    case 'pow': {
      const e = evaluerConstante(n.e);
      return n.b.t === 'var' && n.b.v === 'e' ? Math.exp(e) : Math.pow(evaluerConstante(n.b), e);
    }
    case 'fn': {
      const x = evaluerConstante(n.a);
      return { sqrt: Math.sqrt, ln: Math.log, exp: Math.exp, cos: Math.cos, sin: Math.sin, tan: Math.tan }[n.v](x);
    }
    default: return NaN;
  }
}

const egaux = (a, b) => (a === b) || (Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b)));

/** Sépare « a ; b » (ou « a, +∞ » / « a, b » avec espace, quand la virgule ne peut pas être décimale). */
function separer(s) {
  if (s.includes(';')) return s.split(';');
  const m = s.match(/^(.+?),\s*([+\-−∞]|inf)(.*)$/i);
  if (m) return [m[1], m[2] + m[3]];
  const k = s.split(/,\s+/);
  return k.length === 2 ? k : [s];
}

// ─── Intervalles ──────────────────────────────────────────────────────────

const INF = Infinity;

function borne(t, latex) {
  const s = t.trim().replace(/\\infty|∞|\binf(?:ini)?\b/gi, 'INF').replace(/\s+/g, '');
  if (/^\+?INF$/.test(s)) return INF;
  if (/^[-−]INF$/.test(s)) return -INF;
  if (s.includes('INF')) return null;
  return valeur(t, latex);
}

/** « ]-∞ ; 5[ ∪ [7 ; 9] » → [{a, b, fa, fb}] (fa/fb : borne fermée ?), ou null. */
function lireIntervalles(texte, latex) {
  let s = String(texte).trim();
  if (latex) {
    s = s.replace(/^\$|\$\.?$/g, '').replace(/\$\s*\.?\s*$/, '')
      .replace(/\\(?:left|right)\b/g, '').replace(/\\cup/g, '∪').replace(/\\infty/g, '∞')
      .replace(/\\[,;: !]/g, ' ').trim();
  } else {
    s = s.replace(/[.]$/, '').replace(/−/g, '-').replace(/\s+[uU]\s+|\s*U\s*(?=[\[\]])/g, ' ∪ ');
  }
  s = s.replace(/^[A-Za-z_]{1,3}\s*=\s*/, '').trim(); // « S = », « D = »
  if (/^(?:\\mathbb\{R\}|ℝ|R)$/.test(s)) return [{ a: -INF, b: INF, fa: false, fb: false }];
  const morceaux = s.split('∪').map((x) => x.trim());
  const out = [];
  for (const m of morceaux) {
    const r = m.match(/^([\[\]])\s*(.+?)\s*([\[\]])$/);
    if (!r) return null;
    const parts = separer(r[2]);
    if (parts.length !== 2) return null;
    const a = borne(parts[0], latex);
    const b = borne(parts[1], latex);
    if (a == null || b == null || Number.isNaN(a) || Number.isNaN(b) || !(a < b)) return null;
    const fa = r[1] === '[';
    const fb = r[3] === ']';
    if ((a === -INF && fa) || (b === INF && fb)) return null; // [-∞ … : faux
    out.push({ a, b, fa, fb });
  }
  return out;
}

/** « x < 5 », « x >= 4 », « -2 <= x < 3 » → intervalle. */
function inequation(texte) {
  const s = String(texte).replace(/\s+/g, '').replace(/≤|<=|⩽/g, '≤').replace(/≥|>=|⩾/g, '≥').replace(/−/g, '-').replace(/,(\d)/g, '.$1');
  let m = s.match(/^([a-z])([<>≤≥])(.+)$/);
  if (m) {
    const v = valeur(m[3], false);
    if (v == null || Number.isNaN(v)) return null;
    if (m[2] === '<') return [{ a: -INF, b: v, fa: false, fb: false }];
    if (m[2] === '≤') return [{ a: -INF, b: v, fa: false, fb: true }];
    if (m[2] === '>') return [{ a: v, b: INF, fa: false, fb: false }];
    return [{ a: v, b: INF, fa: true, fb: false }];
  }
  m = s.match(/^(.+?)([<≤])([a-z])([<≤])(.+)$/);
  if (m) {
    const a = valeur(m[1], false);
    const b = valeur(m[5], false);
    if (a == null || b == null || !(a < b)) return null;
    return [{ a, b, fa: m[2] === '≤', fb: m[4] === '≤' }];
  }
  return null;
}

function memesIntervalles(x, y) {
  if (!x || !y || x.length !== y.length) return false;
  const tri = (l) => [...l].sort((p, q) => p.a - q.a);
  const a = tri(x);
  const b = tri(y);
  return a.every((p, i) => egaux(p.a, b[i].a) && egaux(p.b, b[i].b) && p.fa === b[i].fa && p.fb === b[i].fb);
}

// ─── Points, couples ──────────────────────────────────────────────────────

/** « M(2 ; 1) », « \mathrm{S}(-3\,;-13) », « (u ; v) = (-3 ; 8) » → [2, 1], ou null. */
function lireCouple(texte, latex) {
  let s = String(texte).trim();
  if (latex) {
    s = s.replace(/^\$|\$\.?$/g, '').replace(/\$\s*\.?\s*$/, '').replace(/\\(?:left|right)\b/g, '')
      .replace(/\\(?:mathrm|text)\{([A-Za-z]+)\}/g, '$1').trim();
    // Vecteur en colonne : « \vec{w}\begin{pmatrix} 7 \\ -4 \end{pmatrix} » → (7 ; -4).
    s = s.replace(/^(?:\\(?:vec|overrightarrow)\s*(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|[A-Za-z]))?\s*\\begin\{pmatrix\}([^]*?)\\end\{pmatrix\}$/,
      (_, c) => '(' + c.split(/\\\\/).map((x) => x.trim()).join(' ; ') + ')');
    s = s.replace(/\\[,!: ]/g, ' ').trim();
    if (/\\begin|\\vec|\\overrightarrow/.test(s)) return null;
  } else s = s.replace(/[.]$/, '').replace(/−/g, '-');
  const parts = s.split('=');
  s = parts[parts.length - 1].trim();
  s = s.replace(/^[A-Za-z]{1,2}'*(?:_\{?\w+\}?)?\s*(?=\()/, ''); // nom du point
  const m = s.match(/^\(\s*(.+)\s*\)$/) || (!latex && s.match(/^(.+;.+)$/));
  if (!m) return null;
  const morceaux = m[1].split(';');
  if (morceaux.length < 2 || morceaux.length > 3) return null;
  const vals = morceaux.map((x) => valeur(x, latex));
  return vals.some((v) => v == null || Number.isNaN(v)) ? null : vals;
}

// ─── Équations chimiques ──────────────────────────────────────────────────

const INDICES = '₀₁₂₃₄₅₆₇₈₉';
const EXPOSANTS = '⁰¹²³⁴⁵⁶⁷⁸⁹';

/** « 2 H2 + O2 -> 2 H2O » → { reactifs: {H2: 2, O2: 1}, produits: {H2O: 2} } ou null. */
function lireReaction(texte, latex) {
  let s = String(texte).trim();
  if (latex) {
    if (/\{\}\^|\\begin/.test(s)) return null; // noyaux (désintégrations) : non traités
    s = s.replace(/^\$|\$\.?$/g, '').replace(/\$\s*\.?\s*$/, '')
      .replace(/\\(?:longrightarrow|rightarrow|to)\b/g, ' -> ')
      .replace(/\\(?:mathrm|text)\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, '$1')
      .replace(/_\{([^{}]*)\}|_(\w)/g, '$1$2').replace(/\^\{([^{}]*)\}|\^([+\-]|\d[+\-]?)/g, '$1$2')
      .replace(/\\[,;: !]/g, ' ');
    if (/\\/.test(s)) return null;
  } else {
    s = [...s].map((c) => (INDICES.includes(c) ? String(INDICES.indexOf(c)) : EXPOSANTS.includes(c) ? String(EXPOSANTS.indexOf(c)) : c)).join('')
      .replace(/⁺/g, '+').replace(/⁻/g, '-').replace(/[−–]/g, '-').replace(/\^/g, '');
  }
  s = s.replace(/\((?:aq|s|l|g)\)/g, '');
  const cotes = s.split(/\s*(?:->|→|⟶|=>|=)\s*/);
  if (cotes.length !== 2) return null;
  const membre = (t) => {
    const out = {};
    let i = 0;
    t = t.trim();
    while (i < t.length) {
      while (t[i] === ' ') i++;
      const m = t.slice(i).match(/^(\d*)\s*((?:[A-Z][a-z]?\d*|\((?:[A-Z][a-z]?\d*)+\)\d*)+|e)(\d*[+-])?/);
      if (!m || !m[2]) return null;
      const coef = m[1] ? parseInt(m[1], 10) : 1;
      if (!coef) return null;
      const esp = m[2] + (m[3] ? '^' + (m[3].length === 1 ? '1' + m[3] : m[3]) : '');
      out[esp] = (out[esp] || 0) + coef;
      i += m[0].length;
      while (t[i] === ' ') i++;
      if (i < t.length) { if (t[i] !== '+') return null; i++; }
    }
    return Object.keys(out).length ? out : null;
  };
  // Sans espaces (« 2H2+O2 »), un « + » suivi d'une espèce est un signe d'addition, pas une charge.
  const lireMembre = (t) => membre(t) || (latex ? null : membre(t.replace(/\+(?=\s*\d*(?:[A-Z(]|e[-+]?(?:\s|$)))/g, ' + ')));
  const reactifs = lireMembre(cotes[0]);
  const produits = lireMembre(cotes[1]);
  return reactifs && produits ? { reactifs, produits } : null;
}

const memesEspeces = (x, y) => {
  const kx = Object.keys(x);
  return kx.length === Object.keys(y).length && kx.every((k) => y[k] === x[k]);
};

// ─── Division euclidienne ─────────────────────────────────────────────────

const ENTIER = '(\\d+)';
const FOIS = '\\s*(?:×|x|X|\\*|·|\\\\times|\\\\cdot)\\s*';

/** « 200 = 15 × 13 + 5 » (ou « 200 = 5 + 13 × 15 ») → { a, f: [15, 13], r }, ou null. */
function lireEuclide(texte, latex) {
  let s = String(texte).trim();
  if (latex) s = s.replace(/^\$|\$\.?$/g, '').replace(/\$\s*\.?\s*$/, '').replace(/(\d)\\[,;: ]\s*(?=\d{3})/g, '$1').replace(/\\[,;: !]/g, ' ');
  else s = s.replace(/[.]$/, '').replace(/(\d)[\s\u00a0\u202f](?=\d{3}\b)/g, '$1');
  s = s.trim();
  const p1 = s.match(new RegExp(`^${ENTIER}\\s*=\\s*${ENTIER}${FOIS}${ENTIER}\\s*\\+\\s*${ENTIER}$`));
  if (p1) return { a: +p1[1], f: [+p1[2], +p1[3]], r: +p1[4] };
  const p2 = s.match(new RegExp(`^${ENTIER}\\s*=\\s*${ENTIER}\\s*\\+\\s*${ENTIER}${FOIS}${ENTIER}$`));
  if (p2) return { a: +p2[1], f: [+p2[3], +p2[4]], r: +p2[2] };
  return null;
}

// ─── Comparaisons, encadrements, rangements ──────────────────────────────

const OPS = { '<': '<', '>': '>', '≤': '≤', '≥': '≥' };
const INVERSE = { '<': '>', '>': '<', '≤': '≥', '≥': '≤' };

/** « 4 < \sqrt{20} < 5 » → { termes: [arbres], ops: ['<', '<'] } (sans lettre), ou null. */
function lireChaine(texte, latex) {
  let s = String(texte).trim();
  if (latex) {
    s = s.replace(/^\$|\$\.?$/g, '').replace(/\$\s*\.?\s*$/, '')
      .replace(/\\(?:leqslant|leq|le)\b/g, '≤').replace(/\\(?:geqslant|geq|ge)\b/g, '≥');
    if (/\\(?:approx|neq|in|int|lim)\b|≈/.test(s)) return null;
  } else {
    s = s.replace(/[.]$/, '').replace(/<=|⩽/g, '≤').replace(/>=|⩾/g, '≥');
  }
  const morceaux = s.split(/\s*([<>≤≥])\s*/);
  if (morceaux.length < 3 || morceaux.length % 2 === 0) return null;
  const termes = [];
  const ops = [];
  for (let k = 0; k < morceaux.length; k++) {
    if (k % 2) { ops.push(OPS[morceaux[k]]); continue; }
    const lu = lire(morceaux[k], { latex });
    if (!lu || lu.kind !== 'expr' || variables(lu.a).size) return null;
    termes.push(lu.a);
  }
  return { termes, ops };
}

/** Valeur numérique d'un terme sans lettre (NaN si incalculable). */
const nombre = (a) => evaluerConstante(a);

/** La chaîne est-elle vraie (« 4 < √20 < 5 ») ? */
function chaineVraie(c) {
  return c.ops.every((op, k) => {
    const x = nombre(c.termes[k]);
    const y = nombre(c.termes[k + 1]);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
    return op === '<' ? x < y : op === '>' ? x > y : op === '≤' ? x <= y : x >= y;
  });
}

function memesChaines(att, s) {
  if (!s || s.termes.length !== att.termes.length) return false;
  // « 5 > √20 > 4 » = « 4 < √20 < 5 » : on retourne la chaîne écrite dans l'autre sens.
  if (s.ops.every((op, k) => op === INVERSE[att.ops[s.ops.length - 1 - k]]) && !s.ops.every((op, k) => op === att.ops[k])) {
    s = { termes: [...s.termes].reverse(), ops: [...s.ops].reverse().map((op) => INVERSE[op]) };
  }
  if (!s.ops.every((op, k) => op === att.ops[k])) return false;
  // Chaque terme : même valeur ET même écriture (« √20 », pas « 4,47 »).
  return att.termes.every((t, k) => egales(t, s.termes[k]) === true && signature(t) === signature(s.termes[k]));
}

/** « 124 ; 130 ; 160 » ou « 124, 130, 160 » (rangement sans les signes), ou null. */
function lireListe(texte) {
  const parts = String(texte).trim().replace(/[.]$/, '').split(/\s*;\s*|,\s+/);
  if (parts.length < 2) return null;
  const termes = parts.map((x) => lire(x));
  return termes.every((t) => t && t.kind === 'expr' && !variables(t.a).size) ? termes.map((t) => t.a) : null;
}

// ─── Égalités de calcul (« 3 × 5 = 15 ») ────────────────────────────────

/** « 3 × 5 = 15 », « 15 = 5 × 3 », « 6 + 4 = 10 » → { op, a, b, c } (entiers), ou null. */
function lireEgalite(texte, latex) {
  let s = String(texte).trim();
  s = latex ? s.replace(/^\$|\$\.?$/g, '').replace(/\$\s*\.?\s*$/, '').replace(/\\times|\\cdot/g, '×').replace(/\\div/g, '÷').replace(/(\d)\\[,;: ]\s*(?=\d{3})/g, '$1')
    : s.replace(/[.]$/, '').replace(/(\d)[\s\u00a0\u202f](?=\d{3}\b)/g, '$1').replace(/[*·xX]/g, '×').replace(/[−–]/g, '-').replace(/:/g, '÷');
  const n = '(\\d+)';
  const op = '\\s*([×+\\-÷])\\s*';
  let m = s.match(new RegExp(`^${n}${op}${n}\\s*=\\s*${n}$`));
  if (m) return { op: m[2], a: +m[1], b: +m[3], c: +m[4] };
  m = s.match(new RegExp(`^${n}\\s*=\\s*${n}${op}${n}$`));
  if (m) return { op: m[3], a: +m[2], b: +m[4], c: +m[1] };
  return null;
}

const calculer = (q) => (q.op === '×' ? q.a * q.b : q.op === '+' ? q.a + q.b : q.op === '-' ? q.a - q.b : q.a / q.b);

// ─── Exercice ─────────────────────────────────────────────────────────────

/** Analyse d'une réponse d'un de ces types, ou null. */
export function analyserAutre(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  const r = ex.reponse.trim();
  if (!/^\$[^$]+\$\s*\.?$/.test(r)) return null;
  if (/d[ée]montr|montrer|justifi|prouv|expliqu|interpr[ée]t|comment/i.test(ex.enonce)) return null;
  const e = plat(ex.enonce);
  // Limite infinie : « +∞ » ou « -∞ » (le signe est exigé).
  const inf = r.match(/^\$\s*([+-])\s*\\infty\s*\$\s*\.?$/);
  if (inf) return { kind: 'infini', signe: inf[1] };
  // « Compare 124 et 130 : écris < ou > » : un seul signe.
  const symbole = r.match(/^\$\s*(<|>|=|\\leqslant|\\geqslant)\s*\$\s*\.?$/);
  if (symbole && /compare/.test(e)) {
    const sym = symbole[1] === '\\leqslant' ? '≤' : symbole[1] === '\\geqslant' ? '≥' : symbole[1];
    // « Compare 124 et 130 » : la comparaison écrite en entier (« 124 < 130 ») est juste aussi.
    const m = ex.enonce.replace(/(\d)(?:\\,|\s)(?=\d{3}\b)/g, '$1').match(/compare\s+\$?\s*(\d+(?:[.,]\d+)?)\s*\$?\s+et\s+\$?\s*(\d+(?:[.,]\d+)?)/i);
    const c = m && sym !== '=' && lireChaine(`${m[1]} ${sym} ${m[2]}`, false);
    return { kind: 'symbole', s: sym, c: c && chaineVraie(c) ? c : null };
  }
  // Comparaison, encadrement, rangement : « 4 < √20 < 5 », « -5 < -1 < 0 < 2 < 3 ».
  if (/<|>|\\[lg]eq/.test(r)) {
    const c = lireChaine(r, true);
    if (!c || !chaineVraie(c)) return null;
    // La même chaîne déjà écrite dans l'énoncé : recopier suffirait.
    for (const q of ex.enonce.matchAll(/\$([^$]+)\$/g)) { if (memesChaines(c, lireChaine(`$${q[1]}$`, true))) return null; }
    const range = /\brange|ordre (?:croissant|decroissant)/.test(e) && new Set(c.ops).size === 1;
    return { kind: 'chaine', c, range };
  }
  // « Écris 5 + 5 + 5 avec le signe × , puis calcule » → « 3 × 5 = 15 ».
  const eg = lireEgalite(r, true);
  if (eg) {
    if (calculer(eg) !== eg.c) return null;
    for (const q of ex.enonce.matchAll(/\$([^$]+)\$/g)) {
      const x = lireEgalite(`$${q[1]}$`, true);
      if (x && x.op === eg.op && x.c === eg.c && [x.a, x.b].sort().join() === [eg.a, eg.b].sort().join()) return null;
    }
    return { kind: 'egalite', ...eg };
  }
  if (/division euclidienne/.test(e)) {
    const eu = lireEuclide(r, true);
    if (!eu) return null;
    // Le diviseur est donné dans l'énoncé (« … de 200 par 15 ») ; l'égalité attendue doit être juste.
    const d = (e.match(/\bpar\s*\$?\s*(\d+)/) || [])[1];
    if (!d || !eu.f.includes(+d)) return null;
    const q = eu.f[0] === +d ? eu.f[1] : eu.f[0];
    if (eu.a !== +d * q + eu.r || eu.r < 0 || eu.r >= +d) return null;
    return { kind: 'euclide', a: eu.a, d: +d, q, r: eu.r };
  }
  if (/\\(?:longrightarrow|rightarrow)\b/.test(r)) {
    const reac = lireReaction(r, true);
    if (!reac) return null;
    // Équation déjà écrite, ajustée, dans l'énoncé : recopier suffirait.
    for (const m of ex.enonce.matchAll(/\$([^$]+)\$/g)) {
      const q = lireReaction(`$${m[1]}$`, true);
      if (q && memesEspeces(q.reactifs, reac.reactifs) && memesEspeces(q.produits, reac.produits)) return null;
    }
    return { kind: 'reaction', reac };
  }
  if (/\\infty|\\cup|^\$\s*[A-Z]?\s*=?\s*\\?,?\s*[\[\]]/.test(r) && !/\\equiv|\\setminus/.test(r)) {
    const iv = lireIntervalles(r, true);
    return iv ? { kind: 'intervalle', iv } : null;
  }
  if (/\\,?;/.test(r) || /^\$\s*(?:\\(?:vec|overrightarrow)\s*(?:\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|[A-Za-z]))?\s*\\begin\{pmatrix\}[^$]*\\end\{pmatrix\}\s*\$\.?$/.test(r)) {
    const c = lireCouple(r, true);
    if (!c) return null;
    // « Donne un vecteur directeur » : plusieurs bonnes réponses.
    if (/\bun vecteur|\bune solution|\bun couple|\bun point\b/.test(e)) return null;
    return { kind: 'couple', c };
  }
  return null;
}

export function comparerAutre(saisie, a) {
  if (!a || !String(saisie || '').trim()) return false;
  if (a.kind === 'infini') {
    const t = plat(saisie).replace(/[.]$/, '').replace(/^.*=\s*/, '').replace(/[−–]/g, '-').replace(/\s+/g, ' ').trim();
    const m = t.match(/^(\+|-|plus|moins)\s*(?:l'\s*)?(?:∞|inf|infini|oo)$/);
    return !!m && (m[1] === '+' || m[1] === 'plus' ? '+' : '-') === a.signe;
  }
  if (a.kind === 'symbole') {
    const t = String(saisie).trim().replace(/[.]$/, '').replace(/<=|⩽/g, '≤').replace(/>=|⩾/g, '≥');
    return t === a.s || (!!a.c && memesChaines(a.c, lireChaine(saisie, false)));
  }
  if (a.kind === 'chaine') {
    if (memesChaines(a.c, lireChaine(saisie, false))) return true;
    // Rangement : la liste dans le bon ordre suffit (« -5 ; -1 ; 0 ; 2 ; 3 »).
    const l = a.range && !/[<>≤≥]/.test(saisie) && lireListe(saisie);
    return !!l && l.length === a.c.termes.length && a.c.termes.every((t, k) => egales(t, l[k]) === true && signature(t) === signature(l[k]));
  }
  if (a.kind === 'egalite') {
    const q = lireEgalite(saisie, false);
    if (!q || q.op !== a.op || q.c !== a.c) return false;
    // Addition et multiplication : l'ordre des deux nombres est libre.
    return (q.a === a.a && q.b === a.b) || ((a.op === '×' || a.op === '+') && q.a === a.b && q.b === a.a);
  }
  if (a.kind === 'intervalle') return memesIntervalles(a.iv, lireIntervalles(saisie, false) || inequation(saisie));
  if (a.kind === 'couple') {
    const c = lireCouple(saisie, false);
    return !!c && c.length === a.c.length && c.every((v, i) => egaux(v, a.c[i]));
  }
  if (a.kind === 'euclide') {
    const eu = lireEuclide(saisie, false);
    if (!eu || eu.a !== a.a || eu.r !== a.r) return false;
    const [x, y] = eu.f;
    // Mêmes facteurs (diviseur et quotient, dans n'importe quel ordre), égalité juste, 0 ≤ reste < diviseur.
    if (!((x === a.d && y === a.q) || (x === a.q && y === a.d))) return false;
    return eu.a === x * y + eu.r && eu.r >= 0 && eu.r < a.d;
  }
  if (a.kind === 'reaction') {
    const q = lireReaction(saisie, false);
    return !!q && memesEspeces(q.reactifs, a.reac.reactifs) && memesEspeces(q.produits, a.reac.produits);
  }
  return false;
}

export function consigneAutre(a) {
  if (!a) return '';
  if (a.kind === 'infini') return '+∞ ou -∞ (on peut écrire +inf, -inf)';
  if (a.kind === 'symbole') return 'un signe : < ou >';
  if (a.kind === 'chaine') return a.range ? 'les nombres rangés, avec < ou >, ou séparés par « ; »' : 'avec < ou > (≤ : <=), par ex. 3 < √10 < 4';
  if (a.kind === 'egalite') return `le calcul et son résultat, par ex. 4 ${a.op} 2 = ${a.op === '×' ? 8 : a.op === '+' ? 6 : a.op === '-' ? 2 : 2}`;
  if (a.kind === 'intervalle') return 'un intervalle, par ex. ]-∞ ; 5[ ou [2 ; 3] ∪ [4 ; +∞[';
  if (a.kind === 'euclide') return `l'égalité, par ex. 47 = 6 × 7 + 5 (reste plus petit que le diviseur)`;
  if (a.kind === 'couple') return a.c.length === 3 ? 'des coordonnées, par ex. (2 ; -1 ; 3)' : 'des coordonnées, par ex. (2 ; -1)';
  return 'une équation, par ex. 2 H2 + O2 -> 2 H2O (charges : Fe3+, Cl-)';
}

export { latexVersSimple };
