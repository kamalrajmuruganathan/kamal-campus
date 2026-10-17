/**
 * Autres réponses « mathématiques » vérifiables par l'appli :
 *  - intervalles et réunions (« S = ]-∞ ; 5[ », « [2 ; 3] ∪ [4 ; +∞[ »),
 *    ou l'inéquation équivalente (« x < 5 », « -2 ≤ x ≤ 3 ») ;
 *  - coordonnées d'un point ou couple (« M(2 ; 1) », « (u ; v) = (-3 ; 8) ») ;
 *  - équations de réaction chimique ajustées (« 2 H2 + O2 -> 2 H2O »).
 */
import { lire, latexVersSimple, variables } from './index.js';

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

// ─── Exercice ─────────────────────────────────────────────────────────────

/** Analyse d'une réponse d'un de ces trois types, ou null. */
export function analyserAutre(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  const r = ex.reponse.trim();
  if (!/^\$[^$]+\$\s*\.?$/.test(r)) return null;
  if (/d[ée]montr|montrer|justifi|prouv|expliqu|interpr[ée]t|comment/i.test(ex.enonce)) return null;
  const e = plat(ex.enonce);
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
  if (a.kind === 'intervalle') return 'un intervalle, par ex. ]-∞ ; 5[ ou [2 ; 3] ∪ [4 ; +∞[';
  if (a.kind === 'euclide') return `l'égalité, par ex. 47 = 6 × 7 + 5 (reste plus petit que le diviseur)`;
  if (a.kind === 'couple') return a.c.length === 3 ? 'des coordonnées, par ex. (2 ; -1 ; 3)' : 'des coordonnées, par ex. (2 ; -1)';
  return 'une équation, par ex. 2 H2 + O2 -> 2 H2O (charges : Fe3+, Cl-)';
}

export { latexVersSimple };
