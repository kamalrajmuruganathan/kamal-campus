/**
 * Résolveur pas-à-pas — le « cerveau » façon Photomath, hors ligne.
 *
 * À partir d'une saisie texte, il rend un résultat ET les étapes :
 *   - un calcul numérique (avec priorités)         → réduction étape par étape
 *   - une expression avec x                          → forme réduite
 *   - une équation du 1er ou du 2nd degré (avec « = ») → résolution détaillée
 *
 * Tout passe par des rationnels exacts (pas d'erreur d'arrondi).
 */

import { Rationnel, ZERO } from './rationnel.js';
import { analyser, normaliser } from './parseur.js';
import { poserDepuisTexte } from './poser.js';
import { resoudreSecondDegre } from '../second-degre.js';

/** Écriture française d'un décimal : virgule et signe « − » (0.268 → « 0,268 »). */
const fr = (x) => String(x === 0 ? 0 : x).replace('.', ',').replace(/^-/, '−');
/** Rationnel → texte avec « − » : « −1/2 ». */
const txt = (r) => r.texte().replace(/^-/, '−');
/** Rationnel entre parenthèses s'il est négatif : « ÷ (−2) ». */
const txtPar = (r) => (r.estNegatif() || !r.estEntier() ? `(${txt(r)})` : txt(r));
/** Coefficient devant x : « 2x », « x », « −x », « (1/2)x ». */
function coefX(r) {
  if (r.egal(new Rationnel(1))) return 'x';
  if (r.egal(new Rationnel(-1))) return '−x';
  if (!r.estEntier()) return `${r.estNegatif() ? '−' : ''}(${txt(r.estNegatif() ? r.oppose() : r)})x`;
  return `${txt(r)}x`;
}

/** Écriture décimale exacte d'un rationnel si elle est finie (dénominateur 2^a·5^b), sinon null. */
function decimalExact(r) {
  let d = r.d;
  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;
  if (d !== 1) return null;
  return fr(Number((r.n / r.d).toPrecision(15)));
}

// ── Mise en forme d'un AST en texte lisible ──────────────────────────────────

const SYM = { '+': ' + ', '-': ' − ', '*': ' × ', '/': ' ÷ ' };
const PREC = { '+': 1, '-': 1, '*': 2, '/': 2 };

function texteAst(node, parentPrec = 0) {
  switch (node.t) {
    case 'num': {
      // un décimal tapé par l'élève reste écrit en décimal (« 1,5 » et non « 3/2 »)
      const s = node.s ? node.s.replace('.', ',') : node.v.texte().replace(/^-/, '−');
      if (node.v.estNegatif() && parentPrec > 0) return `(${s})`;
      // une fraction dans un produit ou une puissance prend des parenthèses : (3/4) × 2
      if (!node.s && !node.v.estEntier() && parentPrec > 1) return `(${s})`;
      return s;
    }
    case 'var': return 'x';
    case 'neg': {
      // « 3 × (−2) », « 5 − (−x) », « (−2)^2 » : parenthèses dès qu'il y a ambiguïté
      const s = `−${texteAst(node.a, 3)}`;
      return parentPrec > 1 ? `(${s})` : s;
    }
    case 'pow': {
      // (2^3)^2 et non « 2^3^2 », que le parseur refuse
      const s = `${texteAst(node.a, 4)}^${node.n}`;
      return parentPrec >= 4 ? `(${s})` : s;
    }
    case 'op': {
      const p = PREC[node.op];
      const gauche = texteAst(node.a, p);
      const droite = texteAst(node.b, p + (node.op === '-' || node.op === '/' ? 1 : 0));
      const s = `${gauche}${SYM[node.op]}${droite}`;
      return p < parentPrec ? `(${s})` : s;
    }
    default: return '?';
  }
}

// ── Polynôme en x : { degré: Rationnel } ─────────────────────────────────────

function polyAjoute(a, b, signe = 1) {
  const r = { ...a };
  for (const [k, v] of Object.entries(b)) {
    const d = Number(k);
    const ajout = signe < 0 ? v.oppose() : v;
    r[d] = (r[d] || ZERO).plus(ajout);
  }
  return r;
}

function polyMultiplie(a, b) {
  const r = {};
  for (const [ka, va] of Object.entries(a)) {
    for (const [kb, vb] of Object.entries(b)) {
      const d = Number(ka) + Number(kb);
      r[d] = (r[d] || ZERO).plus(va.fois(vb));
    }
  }
  return r;
}

function polyPuissance(a, n) {
  let r = { 0: new Rationnel(1) };
  for (let i = 0; i < n; i++) r = polyMultiplie(r, a);
  return r;
}

/** AST → polynôme en x. Lève une erreur si x apparaît au dénominateur. */
function polynome(node) {
  switch (node.t) {
    case 'num': return { 0: node.v };
    case 'var': return { 1: new Rationnel(1) };
    case 'neg': return polyAjoute({}, polynome(node.a), -1);
    case 'pow': return polyPuissance(polynome(node.a), node.n);
    case 'op': {
      const A = polynome(node.a);
      const B = polynome(node.b);
      if (node.op === '+') return polyAjoute(A, B);
      if (node.op === '-') return polyAjoute(A, B, -1);
      if (node.op === '*') return polyMultiplie(A, B);
      if (node.op === '/') {
        const degB = degreMax(B);
        if (degB > 0) throw new Error('Division par une expression contenant x : non gérée.');
        const c = B[0] || ZERO;
        if (c.estNul()) throw new Error('Division par zéro.');
        const r = {};
        for (const [k, v] of Object.entries(A)) r[k] = v.sur(c);
        return r;
      }
      return {};
    }
    default: return {};
  }
}

function degreMax(p) {
  let d = 0;
  for (const [k, v] of Object.entries(p)) if (!v.estNul() && Number(k) > d) d = Number(k);
  return d;
}

/** Polynôme → texte, du degré le plus haut au plus bas. */
function textePoly(p) {
  const degs = Object.keys(p).map(Number).filter((d) => !(p[d] || ZERO).estNul()).sort((a, b) => b - a);
  if (degs.length === 0) return '0';
  let out = '';
  degs.forEach((d, i) => {
    const c = p[d];
    const abs = c.estNegatif() ? c.oppose() : c;
    const signe = c.estNegatif() ? '−' : '+';
    // « (1/2)x » et non « 1/2x », qui se lirait 1 ÷ (2x)
    const coef = abs.egal(new Rationnel(1)) ? '' : abs.estEntier() ? abs.texte() : `(${abs.texte()})`;
    const mono = d === 0 ? abs.texte() : `${coef}x${d > 1 ? `^${d}` : ''}`;
    if (i === 0) out += (c.estNegatif() ? '−' : '') + mono;
    else out += ` ${signe} ${mono}`;
  });
  return out;
}

function contientX(node) {
  if (node.t === 'var') return true;
  return ['a', 'b'].some((k) => node[k] && contientX(node[k]));
}

// ── Réduction d'un calcul numérique, étape par étape ─────────────────────────

function evalOp(op, a, b) {
  if (op === '+') return a.plus(b);
  if (op === '-') return a.moins(b);
  if (op === '*') return a.fois(b);
  return a.sur(b);
}

function reduireUn(node) {
  if (node.t === 'num' || node.t === 'var') return [node, false];
  if (node.t === 'neg') {
    const [na, d] = reduireUn(node.a);
    if (d) return [{ t: 'neg', a: na }, true];
    if (node.a.t === 'num') return [{ t: 'num', v: node.a.v.oppose() }, true];
    return [node, false];
  }
  if (node.t === 'pow') {
    const [na, d] = reduireUn(node.a);
    if (d) return [{ t: 'pow', a: na, n: node.n }, true];
    if (node.a.t === 'num') {
      let r = new Rationnel(1);
      for (let i = 0; i < node.n; i++) r = r.fois(node.a.v);
      return [{ t: 'num', v: r }, true];
    }
    return [node, false];
  }
  // op
  const [na, d1] = reduireUn(node.a);
  if (d1) return [{ t: 'op', op: node.op, a: na, b: node.b }, true];
  const [nb, d2] = reduireUn(node.b);
  if (d2) return [{ t: 'op', op: node.op, a: node.a, b: nb }, true];
  if (node.a.t === 'num' && node.b.t === 'num') {
    return [{ t: 'num', v: evalOp(node.op, node.a.v, node.b.v) }, true];
  }
  return [node, false];
}

function reduireCalcul(ast) {
  let cur = ast;
  const etapes = [texteAst(cur)];
  let garde = 0;
  while (cur.t !== 'num' && garde < 100) {
    const [nx, done] = reduireUn(cur);
    if (!done) throw new Error('Calcul non réductible.');
    cur = nx;
    const s = texteAst(cur);
    if (s !== etapes[etapes.length - 1]) etapes.push(s);
    garde += 1;
  }
  return { valeur: cur.v, etapes };
}

function pgcdEntier(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

// ── Racine exacte d'un rationnel (si carré parfait) ──────────────────────────

function racineExacte(r) {
  if (r.estNegatif()) return null;
  const sn = Math.round(Math.sqrt(r.n));
  const sd = Math.round(Math.sqrt(r.d));
  if (sn * sn === r.n && sd * sd === r.d) return new Rationnel(sn, sd);
  return null;
}

// ── Résolution d'équation à partir du polynôme D(x) = 0 ───────────────────────

function resoudreEquation(D) {
  const a = D[2] || ZERO;
  const b = D[1] || ZERO;
  const c = D[0] || ZERO;
  const degre = degreMax(D);
  const etapes = [];

  if (degre === 0) {
    if (c.estNul()) return { resultat: 'Toujours vrai (identité) : une infinité de solutions.', etapes: ['Après simplification, l’égalité est toujours vérifiée.'] };
    return { resultat: 'Aucune solution.', etapes: ['Après simplification, on obtient une égalité fausse : pas de solution.'] };
  }

  if (degre === 1) {
    etapes.push(`On ramène tout d’un côté : ${textePoly(D)} = 0.`);
    const sol = c.oppose().sur(b);
    etapes.push(`On isole x : ${coefX(b)} = ${txt(c.oppose())}.`);
    if (!b.egal(new Rationnel(1))) etapes.push(`x = ${txt(c.oppose())} ÷ ${txtPar(b)} = ${txt(sol)}.`);
    const dec = sol.estEntier() ? null : decimalExact(sol);
    if (dec) etapes.push(`Soit x = ${dec} en écriture décimale.`);
    return { resultat: `x = ${sol.texte()}`, etapes };
  }

  if (degre === 2) {
    etapes.push(`Forme du second degré : ${textePoly(D)} = 0, avec a = ${a.texte()}, b = ${b.texte()}, c = ${c.texte()}.`);
    const delta = b.fois(b).moins(new Rationnel(4).fois(a).fois(c));
    etapes.push(`Δ = b² − 4ac = ${delta.texte()}.`);
    const dNum = delta.versNombre();
    const deux_a = new Rationnel(2).fois(a);
    if (dNum < 0) {
      etapes.push('Δ < 0 : pas de solution réelle.');
      return { resultat: 'Aucune solution réelle.', etapes };
    }
    if (delta.estNul()) {
      const x0 = b.oppose().sur(deux_a);
      etapes.push(`Δ = 0 : une racine double x = −b ÷ (2a) = ${x0.texte()}.`);
      return { resultat: `x = ${x0.texte()}`, etapes };
    }
    const rac = racineExacte(delta);
    if (rac) {
      let x1 = b.oppose().moins(rac).sur(deux_a);
      let x2 = b.oppose().plus(rac).sur(deux_a);
      if (x1.versNombre() > x2.versNombre()) [x1, x2] = [x2, x1]; // ordre croissant, même si a < 0
      etapes.push(`√Δ = ${rac.texte()}.`);
      etapes.push(`x = (−b ± √Δ) ÷ (2a) : x₁ = ${x1.texte()}, x₂ = ${x2.texte()}.`);
      return { resultat: `x = ${x1.texte()}  ou  x = ${x2.texte()}`, etapes };
    }
    // Racines irrationnelles : écriture EXACTE avec √ (coefficients rendus entiers
    // en multipliant par le dénominateur commun, ce qui ne change pas les racines),
    // suivie d'une valeur approchée au millième.
    const s = Math.sqrt(dNum);
    const den = [a, b, c].reduce((m, r) => (m * r.d) / pgcdEntier(m, r.d), 1);
    const exact = resoudreSecondDegre(a.n * (den / a.d), b.n * (den / b.d), c.n * (den / c.d));
    const ecrit = exact.valide && exact.racines.every((r) => r.radical)
      ? exact.racines.map((r) => r.texte)
      : null;
    const av = a.versNombre();
    const bv = b.versNombre();
    const [x1, x2] = [(-bv - s) / (2 * av), (-bv + s) / (2 * av)]
      .sort((p, q) => p - q)
      .map((v) => Math.round(v * 1000) / 1000);
    etapes.push(`√Δ = √${delta.texte()} ≈ ${fr(Math.round(s * 1000) / 1000)}.`);
    if (ecrit) {
      etapes.push(`x = (−b ± √Δ) ÷ (2a) : x₁ = ${ecrit[0]} ≈ ${fr(x1)}, x₂ = ${ecrit[1]} ≈ ${fr(x2)}.`);
      return { resultat: `x = ${ecrit[0]}  ou  x = ${ecrit[1]}`, etapes };
    }
    etapes.push(`x = (−b ± √Δ) ÷ (2a) : x₁ ≈ ${fr(x1)}, x₂ ≈ ${fr(x2)} (valeurs approchées).`);
    return { resultat: `x ≈ ${fr(x1)}  ou  x ≈ ${fr(x2)}`, etapes };
  }

  return { resultat: null, erreur: 'Équation de degré trop élevé (max 2).' };
}

// ── Point d'entrée ────────────────────────────────────────────────────────────

/**
 * Résout une saisie et renvoie { ok, type, entree, resultat, etapes } ou
 * { ok:false, erreur }.
 */
export function resoudre(entree) {
  try {
    const brut = normaliser(entree);
    if (!brut) return { ok: false, erreur: 'Saisie vide.' };

    const nbEgal = (brut.match(/=/g) || []).length;
    if (nbEgal > 1) return { ok: false, erreur: 'Une seule égalité (=) autorisée.' };

    if (nbEgal === 1) {
      const [g, d] = brut.split('=');
      if (!g || !d) return { ok: false, erreur: 'Écris quelque chose des deux côtés du =.' };
      const D = polyAjoute(polynome(analyser(g)), polynome(analyser(d)), -1);
      const r = resoudreEquation(D);
      if (r.erreur) return { ok: false, erreur: r.erreur };
      return { ok: true, type: 'equation', entree: `${texteAst(analyser(g))} = ${texteAst(analyser(d))}`, resultat: r.resultat, etapes: r.etapes };
    }

    const ast = analyser(brut);
    const p = polynome(ast);
    // « x − x » ou « 2(x + 1) − 2x » contiennent x mais se réduisent à une
    // constante : c'est une expression, pas un calcul (avant : « Calcul non réductible »)
    if (degreMax(p) >= 1 || contientX(ast)) {
      const forme = textePoly(p);
      return {
        ok: true,
        type: 'expression',
        entree: texteAst(ast),
        resultat: forme,
        etapes: [`En développant et en réduisant : ${forme}.`],
      };
    }
    const { valeur, etapes } = reduireCalcul(ast);
    // Pour « entier op entier » (+ − ×), on ajoute l'opération posée détaillée.
    const posee = poserDepuisTexte(brut);
    let resultat = valeur.texte();
    if (!valeur.estEntier()) {
      const dec = decimalExact(valeur);
      const saisieDecimale = /\d\.\d|\.\d/.test(brut);
      if (dec) {
        etapes.push(`${valeur.texte()} = ${dec} en écriture décimale.`);
        if (saisieDecimale) resultat = dec;
      } else if (saisieDecimale) {
        const approx = fr(Number(valeur.versNombre().toPrecision(6)));
        etapes.push(`${valeur.texte()} ≈ ${approx} (valeur approchée).`);
      }
    }
    return { ok: true, type: 'calcul', entree: etapes[0], resultat, etapes, posee };
  } catch (e) {
    return { ok: false, erreur: e.message || 'Expression invalide.' };
  }
}
