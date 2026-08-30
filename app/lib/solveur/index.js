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

// ── Mise en forme d'un AST en texte lisible ──────────────────────────────────

const SYM = { '+': ' + ', '-': ' − ', '*': ' × ', '/': ' ÷ ' };
const PREC = { '+': 1, '-': 1, '*': 2, '/': 2 };

function texteAst(node, parentPrec = 0) {
  switch (node.t) {
    case 'num': {
      const s = node.v.texte();
      return node.v.estNegatif() && parentPrec > 0 ? `(${s})` : s;
    }
    case 'var': return 'x';
    case 'neg': return `−${texteAst(node.a, 3)}`;
    case 'pow': return `${texteAst(node.a, 4)}^${node.n}`;
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
    const mono = d === 0 ? abs.texte() : `${abs.egal(new Rationnel(1)) ? '' : abs.texte()}x${d > 1 ? `^${d}` : ''}`;
    if (i === 0) out += (c.estNegatif() ? '−' : '') + mono;
    else out += ` ${signe} ${mono}`;
  });
  return out;
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
    etapes.push(`On isole x : ${b.texte()}x = ${c.oppose().texte()}.`);
    etapes.push(`x = ${c.oppose().texte()} ÷ ${b.texte()} = ${sol.texte()}.`);
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
      const x1 = b.oppose().moins(rac).sur(deux_a);
      const x2 = b.oppose().plus(rac).sur(deux_a);
      etapes.push(`√Δ = ${rac.texte()}.`);
      etapes.push(`x = (−b ± √Δ) ÷ (2a) : x₁ = ${x1.texte()}, x₂ = ${x2.texte()}.`);
      return { resultat: `x = ${x1.texte()}  ou  x = ${x2.texte()}`, etapes };
    }
    const s = Math.sqrt(dNum);
    const av = a.versNombre();
    const bv = b.versNombre();
    const x1 = Math.round(((-bv - s) / (2 * av)) * 1000) / 1000;
    const x2 = Math.round(((-bv + s) / (2 * av)) * 1000) / 1000;
    etapes.push(`√Δ ≈ ${Math.round(s * 1000) / 1000}.`);
    etapes.push(`x = (−b ± √Δ) ÷ (2a) : x₁ ≈ ${x1}, x₂ ≈ ${x2} (valeurs approchées).`);
    return { resultat: `x ≈ ${x1}  ou  x ≈ ${x2}`, etapes };
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
    if (degreMax(p) >= 1) {
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
    return { ok: true, type: 'calcul', entree: etapes[0], resultat: valeur.texte(), etapes };
  } catch (e) {
    return { ok: false, erreur: e.message || 'Expression invalide.' };
  }
}
