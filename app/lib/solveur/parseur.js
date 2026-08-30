/**
 * Parseur d'expressions mathématiques → arbre syntaxique (AST).
 *
 * Gère : nombres (entiers et décimaux), la variable x, + - × ÷, puissances ^,
 * parenthèses, moins unaire et multiplication implicite (2x, 3(x+1), (x+1)(x-1)).
 * Ne résout rien : il transforme le texte en arbre, que le solveur exploite.
 */

import { Rationnel } from './rationnel.js';

const EXPOSANT_MAX = 6;

/** Normalise la saisie : symboles unicode → ASCII, espaces retirés. */
export function normaliser(entree) {
  return String(entree)
    .replace(/×|·/g, '*')
    .replace(/÷|:/g, '/')
    .replace(/−/g, '-')
    .replace(/,/g, '.') // virgule décimale
    .replace(/\s+/g, '')
    .replace(/X/g, 'x');
}

function tokeniser(s) {
  const toks = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c)) {
      let j = i + 1;
      while (j < s.length && /[0-9.]/.test(s[j])) j += 1;
      toks.push({ type: 'num', valeur: s.slice(i, j) });
      i = j;
    } else if (c === 'x') { toks.push({ type: 'var' }); i += 1; }
    else if ('+-*/'.includes(c)) { toks.push({ type: 'op', valeur: c }); i += 1; }
    else if (c === '^') { toks.push({ type: 'pow' }); i += 1; }
    else if (c === '(') { toks.push({ type: 'lpar' }); i += 1; }
    else if (c === ')') { toks.push({ type: 'rpar' }); i += 1; }
    else throw new Error(`Caractère non reconnu : « ${c} »`);
  }
  return toks;
}

function numRationnel(str) {
  if ((str.match(/\./g) || []).length > 1) throw new Error(`Nombre invalide : « ${str} »`);
  if (str.includes('.')) {
    const [ent, dec] = str.split('.');
    const d = 10 ** dec.length;
    return new Rationnel(Number(ent + dec), d);
  }
  return new Rationnel(Number(str));
}

/** Analyse une expression et renvoie son AST. Lève une erreur claire sinon. */
export function analyser(entree) {
  const toks = tokeniser(normaliser(entree));
  if (toks.length === 0) throw new Error('Expression vide.');
  let pos = 0;
  const pic = () => toks[pos];
  const avaler = () => toks[pos++];
  const debutFacteur = () => {
    const t = pic();
    return t && (t.type === 'num' || t.type === 'var' || t.type === 'lpar');
  };

  function base() {
    const t = pic();
    if (!t) throw new Error('Expression incomplète.');
    if (t.type === 'op' && t.valeur === '-') { avaler(); return { t: 'neg', a: base() }; }
    if (t.type === 'op' && t.valeur === '+') { avaler(); return base(); }
    if (t.type === 'lpar') {
      avaler();
      const e = expr();
      if (!pic() || pic().type !== 'rpar') throw new Error('Parenthèse fermante manquante.');
      avaler();
      return e;
    }
    if (t.type === 'num') { avaler(); return { t: 'num', v: numRationnel(t.valeur) }; }
    if (t.type === 'var') { avaler(); return { t: 'var' }; }
    throw new Error('Expression invalide.');
  }

  function facteur() {
    let b = base();
    if (pic() && pic().type === 'pow') {
      avaler();
      const e = base();
      if (e.t !== 'num' || !e.v.estEntier() || e.v.n < 0) throw new Error('Un exposant doit être un entier positif.');
      if (e.v.n > EXPOSANT_MAX) throw new Error(`Exposant trop grand (max ${EXPOSANT_MAX}).`);
      b = { t: 'pow', a: b, n: e.v.n };
    }
    return b;
  }

  function terme() {
    let a = facteur();
    while (true) {
      const t = pic();
      if (t && t.type === 'op' && (t.valeur === '*' || t.valeur === '/')) {
        avaler();
        a = { t: 'op', op: t.valeur, a, b: facteur() };
      } else if (debutFacteur()) {
        a = { t: 'op', op: '*', a, b: facteur() };
      } else break;
    }
    return a;
  }

  function expr() {
    let a = terme();
    while (pic() && pic().type === 'op' && (pic().valeur === '+' || pic().valeur === '-')) {
      const op = avaler().valeur;
      a = { t: 'op', op, a, b: terme() };
    }
    return a;
  }

  const arbre = expr();
  if (pos !== toks.length) throw new Error('Expression mal formée.');
  return arbre;
}
