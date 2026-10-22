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

// Unités permises après une valeur dans une suite saisie (« 26 cm », « 27 € », « 62,8 cm³ »).
const UNITES = /^(.*?(?:[\dπ)]|(?<![a-zA-Z])pi))\s*(€|euros?|°C|°|%|[kcdm]?m[²³]?|[kcdm]?m\^?[23]|[km]?g|[cm]?L|min|h|s|(?:k?m|rad)\s*(?:\/\s*s|[.·]\s*s\^?(?:-|⁻)1|[.·]\s*s⁻¹)|km\/h|m?g\s*(?:\/\s*L|[.·]\s*L\^?(?:-|⁻)1|[.·]\s*L⁻¹)|mol\s*\/\s*L|[kMG]?W|[km]?V|[mµ]?A|[kM]?J|[kM]?Hz|Pa|bar|dB|N|Ω|ohms?|ans?|jours?)\.?$/;
const normUnite = (u) => {
  if (/^euros?$/i.test(u)) return '€';
  if (/^ohms?$/i.test(u)) return 'Ω';
  if (/^ans?$/.test(u)) return 'an';
  if (/^jours?$/.test(u)) return 'jour';
  // « m.s-1 », « m·s⁻¹ » = « m/s » ; « mg.L-1 » = « mg/L ».
  const par = u.replace(/\s+/g, '').match(/^(.+?)(?:\/|[.·])(s|L)(?:\^?(?:-|⁻)1|⁻¹)?$/);
  if (par) return `${par[1]}/${par[2]}`;
  return u.replace(/\^?2$/, '²').replace(/\^?3$/, '³');
};

/**
 * Lit UN morceau : point, « nom = valeur », vecteur (i, j), vecteur nul, équation
 * (« x + 15 = 42 ») ou expression. null si illisible.
 */
function lireMorceau(texte, latex) {
  let s = preparer(texte, latex);
  if (!s) return null;
  // « rad » écrit par l'élève : permis pour une valeur sans unité, refusé si des degrés sont attendus.
  const radian = !latex && /\brad(?:ians?)?\s*\.?\s*$/i.test(String(texte).trim());
  // Vecteur nul : « vecteur nul », « \vec{0} », « vec 0 » (« 0⃗ » est lu comme 0).
  if (latex ? /^\\vec\s*\{?\s*0\s*\}?$/.test(s) : /^(?:le\s+)?vecteur\s+nul$|^vec\s*\(?\s*0\s*\)?$/i.test(s)) return { k: 'nul' };
  // Unité après une valeur (saisie ou forme écrite à la main seulement).
  let unite = '';
  const mu = !latex && s.match(UNITES);
  if (mu && !/[a-zA-Z]\s*$/.test(mu[1].replace(/(?<![a-zA-Z])pi$/, 'π'))) { s = mu[1].trim(); unite = normUnite(mu[2]); }
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
  if (!lu) return null;
  if (lu.kind === 'eq') {
    // « x + 15 = 42 » ; « x = 27 » écrit « 27 = x » est une équation déjà résolue.
    if (unite) return null;
    const [g, d] = lu.a.termes;
    const seul = (x) => x.t === 'var';
    const resolue = (seul(g) && !variables(d).size) || (seul(d) && !variables(g).size);
    return variables(lu.a).size ? { k: 'eq', a: lu.a, resolue } : null;
  }
  if (lu.kind !== 'expr') return null;
  const vars = variables(lu.a);
  if (unite && vars.size) return null;
  if ([...vars].every((v) => v === 'i' || v === 'j') && vars.size) return { k: 'vecteur', a: lu.a };
  return vars.size ? { k: 'expr', a: lu.a } : { k: 'valeur', a: lu.a, unite: unite || (radian ? 'rad' : '') };
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
      if (c === ';' || c === '\n' || c === '≈' || (c === ',' && /\s/.test(s[i + 1] || ''))) { out.push(cur); cur = ''; continue; }
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

/**
 * Forme écrite à la main (attendus.json) vérifiable par calcul : au moins un morceau « exact »
 * (point, vecteur, vecteur nul, valeur avec π ou √…), ou une équation / expression suivie
 * d'autres réponses (« x + 15 = 42 ; 27 € », « 4x + 6 ; 26 cm »).
 */
export function analyserSuite(forme) {
  const suite = lireSuite(forme, false);
  if (!suite) return null;
  const litteral = suite.some((m) => m.k === 'eq' || m.k === 'expr');
  if (litteral && suite.length < 2) return null; // une expression seule : vérifiée ailleurs (consigne de forme)
  if (!litteral && !suite.some((m) => m.k === 'point' || m.k === 'vecteur' || m.k === 'nul' || special(m.a))) return null;
  if (suite.some((m) => m.k === 'eq' && m.resolue)) return null;
  return suite;
}

/** Deux arbres sans variable (ou en i, j) : même valeur, et même écriture si l'attendu est « exact ». */
function memeValeur(att, s, strict) {
  if (egales(att, s) !== true) return false;
  return !strict || signature(att) === signature(s);
}

function memeMorceau(att, s, libre = false, modulo = false) {
  if (!s) return false;
  // Argument d'un complexe ou mesure d'angle « modulo 2π » : π/2 = -3π/2 = 5π/2 (écriture exacte exigée).
  if (modulo && att.k === 'valeur' && s.k === 'valeur' && !s.unite && egales(att.a, s.a) !== true
    && (/pi/.test(JSON.stringify(att.a)) || egales(att.a, { t: 'num', v: 0 }) === true)) {
    return egales(att.a, s.a, { mode: 'modulo2pi' }) === true && (/pi/.test(JSON.stringify(s.a)) || !nombreSeul(s.a));
  }
  // Expression (« 3x + 4 », « n(n + 1)/2 ») quand l'énoncé n'impose aucune forme : toute écriture égale convient.
  if (libre && att.k === 'expr' && s.k === 'expr') return egales(att.a, s.a) === true;
  // Vecteur nul : « vecteur nul », « 0⃗ » / « 0 », « (0 ; 0) ».
  if (att.k === 'nul') return s.k === 'nul' || (s.k === 'valeur' && !s.unite && egales(s.a, { t: 'num', v: 0 }) === true)
    || (s.k === 'point' && s.a.every((x) => egales(x, { t: 'num', v: 0 }) === true));
  if (att.k !== s.k) return false;
  // Coordonnées : une valeur exacte peut s'écrire autrement (« 2e^(-2) » = « 2/e² »), mais pas en décimal arrondi.
  const decimal = (x) => x.t === 'num' || (x.t === 'add' && x.termes.length === 1 && x.termes[0].t === 'num');
  if (att.k === 'point') return att.a.length === s.a.length && att.a.every((x, i) => memeValeur(x, s.a[i], special(x) && decimal(s.a[i])));
  // Équation : la même (à un facteur près), écrite avec les mêmes nombres, et pas déjà résolue
  // (« x + 15 = 42 » = « 15 + x = 42 » = « 42 = x + 15 », mais pas « x = 27 » ni « x - 27 = 0 »).
  if (att.k === 'eq') return !s.resolue && egales(att.a, s.a, { mode: 'proportionnel' }) === true && signature(att.a) === signature(s.a);
  // Valeur : l'unité est facultative, mais si elle est écrite, ce doit être la bonne.
  if (att.k === 'valeur' && s.unite && s.unite !== att.unite && !(s.unite === 'rad' && !att.unite)) return false;
  // Nombre décimal attendu (« 1,5 ») : le calcul doit être fait (ni « 9/6 », ni « 42 - 15 »).
  const nombre = (x) => x.t === 'num' || (x.t === 'add' && x.termes.length === 1 && x.termes[0].t === 'num');
  if (att.k === 'valeur' && nombre(att.a) && !nombre(s.a)) return false;
  return memeValeur(att.a, s.a, true);
}

/**
 * Deux réponses courtes égales par le calcul (« π/6 » = « pi/6 », « -2π/3 » = « -(2/3)π »,
 * « √2/2 » = « sqrt(2)/2 »), avec la même écriture. false si l'une n'est pas lisible.
 */
export function memeValeurEcrite(attendu, saisie) {
  const a = lireSuite(attendu, false);
  const s = lireSuite(saisie, false);
  return !!a && !!s && a.length === 1 && s.length === 1 && memeMorceau(a[0], s[0]);
}

const nombreSeul = (x) => x.t === 'num' || (x.t === 'add' && x.termes.length === 1 && x.termes[0].t === 'num');

/** La saisie donne-t-elle la même suite, dans le même ordre ? */
export function comparerSuite(saisie, suite, opts = {}) {
  const s = lireSuite(saisie, false);
  return !!s && s.length === suite.length && suite.every((m, i) => memeMorceau(m, s[i], !!opts.libre, !!opts.modulo));
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
  const fraction = analyserFraction(ex);
  if (fraction) return fraction;
  const m = lireMorceau(r, true);
  if (!m || m.k === 'point' || m.k === 'eq' || m.k === 'nul' || egales(m.a, m.a) !== true) return null;
  const e = plat(ex.enonce);
  // « Réécris 4xy en faisant apparaître tous les signes × » : mêmes facteurs, chacun séparé par ×.
  if (/fai\w* appara\w*.{0,20}signes?/.test(e) && /\\times/.test(r) && !/[+\-]|\\[dt]?frac|\^/.test(r.replace(/\\times/g, ''))) {
    const fact = facteursFois(r, true);
    if (fact && fact.length >= 2) return { kind: 'exacte', morceau: m, facteurs: fact };
  }
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

export function comparerExacte(saisie, a, opts = {}) {
  if (!a || !String(saisie || '').trim()) return false;
  if (a.fraction) return comparerFraction(saisie, a);
  // Tous les signes × écrits : mêmes facteurs (dans n'importe quel ordre), chacun séparé par ×.
  if (a.facteurs) {
    const f = facteursFois(saisie, false);
    return !!f && f.length === a.facteurs.length && [...f].sort().join('|') === [...a.facteurs].sort().join('|');
  }
  // Sans « × » : ni signe ×, *, ·, ni nombre écrit après une lettre (« a7 »).
  if (a.sansFois && /[×*·⋅∙]|[\p{L})]\s*\d/u.test(saisie)) return false;
  const s = lireSuite(saisie, false);
  return !!s && s.length === 1 && memeMorceau(a.morceau, s[0], false, !!opts.modulo);
}

export function consigneExacte(a) {
  if (!a) return '';
  if (a.fraction === 'decimale') return 'une fraction décimale, par ex. 75/100';
  if (a.fraction === 'mixte') return 'un entier + une fraction, par ex. 3 + 25/100';
  if (a.facteurs) return 'avec tous les signes ×, par ex. 3 × a × b';
  if (a.morceau.k === 'vecteur') return 'en fonction de i et j, par ex. -2i + 7j';
  return 'valeur exacte : √ ou sqrt, π ou pi, puissance avec ^ (2^8) ou ⁸';
}

export function consigneSuite(suite) {
  const n = suite.length;
  let base = 'valeur exacte (√ ou sqrt, π ou pi, 2^8)';
  if (suite.some((m) => m.k === 'eq')) base = "l'équation puis la solution, par ex. 3x + 2 = 11 ; 3";
  else if (suite.filter((m) => m.k === 'expr').length > 1) base = 'expressions : x^2 ou x², e^(2x), ln(x), sqrt(x)';
  else if (suite.some((m) => m.k === 'expr')) base = "l'expression puis sa valeur, par ex. 3x + 2 ; 14";
  else if (suite.some((m) => m.k === 'nul')) base = 'coordonnées (2 ; -1), vecteur nul : 0';
  // Nombres complexes (« i » seul, ni « j » ni point) : forme algébrique.
  else if (suite.some((m) => m.k === 'vecteur') && !suite.some((m) => m.k === 'point' || (m.k === 'vecteur' && variables(m.a).has('j')))) base = 'nombres complexes : a + bi, par ex. 3 - 2i';
  else if (!suite.some((m) => m.k !== 'point' && m.k !== 'vecteur' && special(m.a))) base = 'coordonnées, par ex. (2 ; -1)';
  return n > 1 ? `${n} réponses dans l'ordre, séparées par « ; » — ${base}` : base;
}

// ─── Écritures imposées : facteurs séparés par ×, fractions décimales, nombres mixtes ──

/** « 4 × x × y » → ['4', 'x', 'y'] ; null s'il manque un signe × (« 4xy », « 4 × xy »). */
function facteursFois(texte, latex) {
  let s = String(texte).trim();
  s = latex ? s.replace(/^\$+|\$+\s*\.?$/g, '').replace(/\\(?:times|cdot)/g, '×').replace(/\\[,;: !]/g, ' ')
    : s.replace(/[.]$/, '').replace(/[*·⋅∙]/g, '×');
  const f = s.split('×').map((x) => x.trim().replace(/,/g, '.'));
  // Chaque facteur : un nombre ou une seule lettre.
  return f.every((x) => /^(?:\d+(?:\.\d+)?|[a-zA-Z])$/.test(x)) ? f.map((x) => (/^\d/.test(x) ? String(Number(x)) : x)) : null;
}

/** « 4107/1000 », « 30 + 45/100 », « 45/100 + 30 » → { entier, num, den } (entiers), ou null. */
function lireFraction(texte, latex) {
  const simple = latex ? latexVersSimple(texte) : String(texte).trim().replace(/[.]$/, '').replace(/(\d)[\s  ](?=\d{3}\b)/g, '$1');
  if (simple == null || /\d\s+\d/.test(simple)) return null; // « 4 6/10 » : ambigu
  const t = simple.replace(/\s+/g, '').replace(/[()]/g, '');
  let m = t.match(/^(\d+)\/(\d+)$/);
  if (m) return { entier: null, num: +m[1], den: +m[2] };
  m = t.match(/^(\d+)\+(\d+)\/(\d+)$/);
  if (m) return { entier: +m[1], num: +m[2], den: +m[3] };
  m = t.match(/^(\d+)\/(\d+)\+(\d+)$/);
  if (m) return { entier: +m[3], num: +m[1], den: +m[2] };
  return null;
}

const puissanceDe10 = (n) => n >= 10 && /^10*$/.test(String(n));

/**
 * « Écris 4,107 sous forme d'une fraction décimale » (réponse a/10ⁿ) ou « … sous forme d'un
 * nombre mixte » (réponse E + a/b) : la valeur ET l'écriture demandée sont contrôlées.
 */
export function analyserFraction(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  const e = plat(ex.enonce);
  const f = lireFraction(ex.reponse, true);
  if (!f || !f.den) return null;
  if (/fraction decimale/.test(e) && f.entier == null && puissanceDe10(f.den)) return { kind: 'exacte', fraction: 'decimale', num: f.num, den: f.den };
  if (/nombre mixte|un entier \+ une fraction/.test(e) && f.entier != null && f.num < f.den) return { kind: 'exacte', fraction: 'mixte', entier: f.entier, num: f.num, den: f.den };
  return null;
}

function comparerFraction(saisie, a) {
  const f = lireFraction(saisie, false);
  if (!f || !f.den) return false;
  // Même valeur (calcul entier, sans arrondi).
  const memeValeur = (n, d) => n * a.den === a.num * d;
  if (a.fraction === 'decimale') return f.entier == null && puissanceDe10(f.den) && memeValeur(f.num, f.den);
  // Nombre mixte : la partie entière, puis une fraction inférieure à 1 de même valeur.
  return f.entier === a.entier && f.num < f.den && memeValeur(f.num, f.den);
}
