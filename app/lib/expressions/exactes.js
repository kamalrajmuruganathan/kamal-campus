/**
 * Valeurs exactes et réponses en plusieurs morceaux :
 *  - valeur exacte écrite avec π, √, une puissance, une fraction (« 2⁸ », « 6√2 », « -2π/3 ») ;
 *  - combinaison de vecteurs de base (« -2i + 7j », « −2i⃗ + 7j⃗ ») ;
 *  - expression « plus simple » (« x² » pour « x × x ») ;
 *  - suite ordonnée de réponses : « H(1 ; 2) et AH = 2√5 », « π/4 ; 5π/6 ».
 *
 * Règle de comparaison (stricte, pour ne pas devenir laxiste) : même valeur ET même
 * « écriture » (mêmes nombres, mêmes racines, mêmes puissances, mêmes lettres, dans
 * n'importe quel ordre). Ainsi « 6√2 » = « 6 sqrt(2) » = « √2 × 6 », mais « √72 », « 8,49 »,
 * « 256 » (pour 2⁸) ou « x × x » (pour x²) sont refusés : ce n'est pas la forme demandée.
 */
import { lire, latexVersSimple, variables, egales } from './index.js';

const plat = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** « Écriture » d'un arbre : liste triée de ses nombres, racines, puissances et lettres. */
export function signature(n) {
  const out = [];
  const voir = (x, ctx) => {
    if (!x) return;
    if (x.t === 'num') { if (!(x.v === 1 && ctx === '')) out.push(ctx + x.v); return; }
    if (x.t === 'const') { out.push(ctx + 'π'); return; }
    if (x.t === 'var') { out.push(ctx + 'v:' + x.v); return; }
    if (x.t === 'add') { x.termes.forEach((y, j) => { if (x.signes[j] < 0) out.push(ctx + '-'); voir(y, ctx); }); return; }
    if (x.t === 'mul') {
      // Les facteurs numériques d'un produit sont regroupés : « 3/2 √x » = « 1,5√x », « 2π/3 » = « (2/3)π ».
      let k = 1;
      const autres = [];
      const aplatir = (m, inv) => m.f.forEach((y, j) => {
        const iv = inv !== m.inv[j];
        if (y.t === 'num') k = iv ? k / y.v : k * y.v;
        else if (y.t === 'mul') aplatir(y, iv);
        else autres.push([y, iv]);
      });
      aplatir(x, false);
      if (Math.abs(k - 1) > 1e-12) out.push(ctx + Number(k.toPrecision(10)));
      autres.forEach(([y, iv]) => voir(y, ctx + (iv ? '/' : '')));
      return;
    }
    if (x.t === 'pow') { voir(x.b, ctx + 'b'); voir(x.e, ctx + '^'); return; } // « (-3)⁷ » ≠ « -3⁷ »
    if (x.t === 'fn') { voir(x.a, ctx + x.v + '('); return; }
    out.push('?');
  };
  voir(n, '');
  return out.sort().join('|');
}

/** L'arbre contient-il π, une racine, une puissance, e ou ln (sinon : simple nombre rationnel) ? */
function special(n) {
  if (!n) return false;
  if (n.t === 'const' || n.t === 'pow' || n.t === 'fn') return true;
  if (n.t === 'var') return true;
  return ['termes', 'f'].some((k) => n[k] && n[k].some(special)) || ['b', 'e', 'a'].some((k) => n[k] && special(n[k]));
}

/** Préparation commune (LaTeX ou saisie) : vecteurs de base, unités d'angle, flèches. */
function preparer(texte, latex) {
  let s = String(texte).trim();
  if (latex) {
    s = s.replace(/^\$+|\$+\s*\.?$/g, '').trim()
      .replace(/\\(?:vec|overrightarrow)\s*\{\s*\\([ij])math\s*\}/g, ' $1 ')
      .replace(/\\(?:vec|overrightarrow)\s*\\([ij])math\b/g, ' $1 ')
      .replace(/\\(?:vec|overrightarrow)\s*\{\s*([ij])\s*\}/g, ' $1 ')
      .replace(/\\(?:vec|overrightarrow)\s*\{\s*(?:\\mathrm\{)?([A-Za-z]{1,2})\}?\s*\}/g, 'VEC_$1')
      .replace(/\\(?:vec|overrightarrow)\s*([A-Za-z])\b/g, 'VEC_$1')
      .replace(/\\(?:text|mathrm)\s*\{\s*rad\s*\}|\\,\s*rad\b/g, ' rad');
  } else {
    s = s.replace(/[.。]$/, '').replace(/⃗/g, '').replace(/[−–—]/g, '-')
      .replace(/\bvec\s*\(?\s*([ij])\s*\)?/gi, ' $1 ');
  }
  // Mesure d'angle : « rad » final facultatif.
  s = s.replace(/\s*\brad(?:ians?)?\s*$/i, '').trim();
  return s;
}

/** Lit UN morceau : point, « nom = valeur », vecteur (i, j) ou expression. null si illisible. */
function lireMorceau(texte, latex) {
  let s = preparer(texte, latex);
  if (!s) return null;
  // Point ou couple : « H(1 ; 2) », « (8 ; 2) », « \mathrm{H}(3\,;3) ».
  let p = latex ? s.replace(/\\(?:mathrm|text)\{([A-Za-z]+)\}/g, '$1').replace(/\\[,!: ]/g, ' ') : s;
  p = p.replace(/^(?:point\s+)?[A-Za-z]{0,2}'?\s*(?=\()/i, '');
  const mp = p.match(/^\(\s*([^()]*(?:\([^()]*\)[^()]*)*)\)$/);
  if (mp && mp[1].includes(';')) {
    const morceaux = mp[1].split(';');
    if (morceaux.length < 2 || morceaux.length > 3) return null;
    const vals = morceaux.map((x) => lire(x, { latex }));
    if (vals.some((v) => !v || v.kind !== 'expr' || variables(v.a).size)) return null;
    return { k: 'point', a: vals.map((v) => v.a) };
  }
  // « AH = 2√5 », « ‖u‖ = √10 », « d = … » : on garde la valeur (le nom est une étiquette).
  s = s.replace(/^\\lVert\s*VEC_\w+\s*\\rVert\s*=\s*/, '').replace(/^(?:‖|\|\|)\s*\w+\s*(?:‖|\|\|)\s*=\s*/, '')
    .replace(/^VEC_\w+\s*=\s*/, '')
    .replace(/^(?:\\mathrm\{)?[A-Z]{1,2}'?\}?\s*=\s*/, '');
  if (/VEC_/.test(s)) return null;
  const lu = lire(s, { latex });
  if (!lu || lu.kind !== 'expr') return null;
  const vars = variables(lu.a);
  if ([...vars].every((v) => v === 'i' || v === 'j') && vars.size) return { k: 'vecteur', a: lu.a };
  return { k: vars.size ? 'expr' : 'valeur', a: lu.a };
}

/** Découpe aux séparateurs de premier niveau : « ; », « et », « , » suivi d'un espace, retour à la ligne. */
function decouper(texte) {
  const out = [];
  let prof = 0;
  let cur = '';
  const s = String(texte);
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '{' || c === '[') prof++;
    if (c === ')' || c === '}' || c === ']') prof--;
    if (prof === 0) {
      if (c === ';' || c === '\n' || (c === ',' && /\s/.test(s[i + 1] || ''))) { out.push(cur); cur = ''; continue; }
      const et = s.slice(i).match(/^\s+(?:et|puis)\s+/i);
      if (et) { out.push(cur); cur = ''; i += et[0].length - 1; continue; }
    }
    cur += c;
  }
  out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
}

/** Suite de morceaux (forme écrite à la main ou saisie de l'élève), ou null. */
export function lireSuite(texte, latex = false) {
  const parts = decouper(texte);
  if (!parts.length || parts.length > 6) return null;
  const out = parts.map((p) => lireMorceau(p, latex));
  return out.every(Boolean) ? out : null;
}

/** Forme écrite à la main (attendus.json) vérifiable par calcul : au moins un morceau « exact ». */
export function analyserSuite(forme) {
  const suite = lireSuite(forme, false);
  if (!suite) return null;
  if (!suite.some((m) => m.k === 'point' || m.k === 'vecteur' || special(m.a))) return null;
  if (suite.some((m) => m.k === 'expr')) return null; // lettres autres que i, j : non
  return suite;
}

/** Deux arbres sans variable (ou en i, j) : même valeur, et même écriture si l'attendu est « exact ». */
function memeValeur(att, s, strict) {
  if (egales(att, s) !== true) return false;
  return !strict || signature(att) === signature(s);
}

function memeMorceau(att, s) {
  if (!s || att.k !== s.k) return false;
  if (att.k === 'point') return att.a.length === s.a.length && att.a.every((x, i) => memeValeur(x, s.a[i], special(x)));
  return memeValeur(att.a, s.a, true);
}

/** La saisie donne-t-elle la même suite, dans le même ordre ? */
export function comparerSuite(saisie, suite) {
  const s = lireSuite(saisie, false);
  return !!s && s.length === suite.length && suite.every((m, i) => memeMorceau(m, s[i]));
}

// ─── Réponse $…$ seule, sans attendus.json ───────────────────────────────

const INTERDIT = /d[ée]montr|montrer|montre que|justifi|prouv|expliqu|interpr[ée]t|comment|conclu|v[ée]rifi/i;

/**
 * Exercice dont la réponse est une valeur exacte (« $2^{8}$ », « $6\sqrt{2}$ »), une
 * combinaison de vecteurs (« $\vec{u} = -2\,\vec{\imath} + 7\,\vec{\jmath}$ ») ou une
 * écriture simplifiée (« $x^2$ » pour « Écris plus simplement $x \times x$ ») : renvoie
 * de quoi comparer, ou null.
 */
export function analyserExacte(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  const r = ex.reponse.trim();
  if (!/^\$[^$]+\$\s*\.?$/.test(r) || INTERDIT.test(ex.enonce)) return null;
  if (/\\(?:approx|simeq|pm|infty|in|leq|geq|leqslant|geqslant|neq)\b|[<>]/.test(r)) return null;
  const m = lireMorceau(r, true);
  if (!m || m.k === 'point' || egales(m.a, m.a) !== true) return null;
  const e = plat(ex.enonce);
  if (m.k === 'valeur' && !special(m.a)) return null; // simple nombre : déjà géré ailleurs
  // Puissance seule (« 2⁸ ») : la forme n'est exigée que si l'énoncé la demande (sinon 256 est juste aussi).
  if (m.k === 'valeur' && !/sqrt|pi|ln|exp|cos|sin|tan|\be\b/.test(latexVersSimple(r) || '')
    && !/puissance|exposant|plus simplement|simplifi/.test(e)) return null;
  if (m.k === 'valeur' && /\bi\b/.test(latexVersSimple(r) || '')) return null;
  // Lettres (hors vecteurs de base) : seulement pour « écris plus simplement », « une seule puissance ».
  if (m.k === 'expr' && !/plus simplement|simplifi|seule puissance|forme d.une puissance|sous forme de puissance/.test(e)) return null;
  if (m.k === 'vecteur' && !/\\vec|\\overrightarrow/.test(r)) return null;
  // « Écris plus simplement $3 \times a \times b$ » : même écriture, mais sans signe ×.
  if (/plus simplement/.test(e) && /\\times|×/.test(ex.enonce) && !/\\times|\\cdot/.test(r)) return { kind: 'exacte', morceau: m, sansFois: true };
  // Recopier une expression de l'énoncé ne doit jamais suffire.
  for (const q of String(ex.enonce).matchAll(/\$([^$]+)\$/g)) {
    for (const morceau of [q[1], ...q[1].split('=')]) {
      const c = lireMorceau(`$${morceau}$`, true);
      if (c && c.k !== 'point' && egales(m.a, c.a) === true && signature(m.a) === signature(c.a)) return null;
    }
  }
  return { kind: 'exacte', morceau: m };
}

export function comparerExacte(saisie, a) {
  if (!a || !String(saisie || '').trim()) return false;
  // Sans « × » : ni signe ×, *, ·, ni nombre écrit après une lettre (« a7 »).
  if (a.sansFois && /[×*·⋅∙]|[\p{L})]\s*\d/u.test(saisie)) return false;
  const s = lireSuite(saisie, false);
  return !!s && s.length === 1 && memeMorceau(a.morceau, s[0]);
}

export function consigneExacte(a) {
  if (!a) return '';
  if (a.morceau.k === 'vecteur') return 'en fonction de i et j, par ex. -2i + 7j';
  return 'valeur exacte : √ ou sqrt, π ou pi, puissance avec ^ (2^8) ou ⁸';
}

export function consigneSuite(suite) {
  const n = suite.length;
  const base = 'valeur exacte (√ ou sqrt, π ou pi, 2^8)';
  return n > 1 ? `${n} réponses dans l'ordre, séparées par « ; » — ${base}` : base;
}
