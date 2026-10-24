/**
 * Équations différentielles : « Résoudre y' = 5y » → « $y(x) = Ce^{5x}$, $C \in \mathbb{R}$ ».
 *
 * La réponse est une FAMILLE de fonctions, avec une constante réelle (C, K, k, A…). La saisie
 * de l'élève (« y = k e^(5x), k ∈ R », « y(x) = Ce^{5x} avec C réel ») est juste si, après avoir
 * renommé sa constante, c'est la même expression en x et en la constante (calculée en plusieurs
 * points). « y = 5e^(5x) » (une seule solution) ou « Ce^(-5x) » sont refusés.
 */
import { lire, variables, egales } from '../expressions/index.js';

const CONSTANTE = /^[A-DF-HJ-Za-dfghj-wyzλ]$/; // toute lettre sauf e, i, x (et t, variable possible)

/** Analyse de la réponse attendue, ou null. */
export function analyserEdo(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  if (!/diff[ée]rentielle|\by\s*'\s*=|\$y'\s*=/i.test(ex.enonce)) return null;
  if (/d[ée]montr|montrer|montre que|justifi|v[ée]rifi|prouv|expliqu|interpr[ée]t|telle que|vérifiant|\by\s*\(\s*0\s*\)/i.test(ex.enonce)) return null;
  const m = ex.reponse.trim().match(/^\$([^$]+)\$\s*,\s*\$\s*(?:\\[;,:]\s*)?([A-Za-z])\s*\\in\s*\\mathbb\s*\{?\s*R\s*\}?\s*\$\s*\.?$/);
  if (!m) return null;
  const lu = lire(m[1], { latex: true });
  if (!lu || lu.kind !== 'expr' || !lu.nom || !/^[a-zA-Zθ]\(([xt])\)$/.test(lu.nom)) return null;
  const t = lu.nom.match(/\(([xt])\)/)[1];
  const k = m[2];
  const vars = variables(lu.a);
  if (vars.size !== 2 || !vars.has(t) || !vars.has(k)) return null;
  // Le contrôle d'égalité doit pouvoir trancher.
  if (egales(lu.a, lu.a) !== true) return null;
  return { kind: 'edo', a: lu.a, t, k };
}

/** La saisie donne-t-elle la même famille de solutions ? */
export function comparerEdo(saisie, att) {
  let s = String(saisie || '').trim().replace(/[.]$/, '').replace(/[−–—]/g, '-');
  let nommee = null;
  // « , C ∈ ℝ », « avec k réel », « où A est une constante réelle ».
  const fin = s.match(/\s*[,;]?\s*(?:avec|où|ou|pour)?\s*([A-Za-zλ])\s*(?:∈|\\in|appartient\s+à|dans)\s*(?:ℝ|R|IR|\\mathbb\s*\{?R\}?)\s*$/i)
    || s.match(/\s*[,;]?\s*(?:avec|où|ou)?\s*([A-Za-zλ])\s+(?:est\s+)?(?:un\s+|une\s+)?(?:réel|nombre\s+réel|constante(?:\s+réelle)?)\s*$/i);
  if (fin) { nommee = fin[1]; s = s.slice(0, fin.index).trim(); }
  s = s.replace(/λ/g, 'L').replace(/\{/g, '(').replace(/\}/g, ')');
  if (nommee === 'λ') nommee = 'L';
  const lu = lire(s);
  if (!lu || lu.kind !== 'expr') return false;
  if (lu.nom && !/^[a-zA-Zθ](?:\([xt]\))?$/.test(lu.nom)) return false;
  const vars = [...variables(lu.a)];
  const autres = vars.filter((v) => v !== att.t);
  if (!vars.includes(att.t) || autres.length !== 1 || !CONSTANTE.test(autres[0])) return false;
  if (nommee && nommee !== autres[0]) return false;
  const renomme = (n) => {
    if (!n || typeof n !== 'object') return n;
    if (n.t === 'var' && n.v === autres[0]) return { ...n, v: att.k };
    const out = { ...n };
    for (const c of ['termes', 'f']) if (n[c]) out[c] = n[c].map(renomme);
    for (const c of ['b', 'e', 'a']) if (n[c]) out[c] = renomme(n[c]);
    return out;
  };
  return egales(att.a, renomme(lu.a)) === true;
}

export function consigneEdo(att) {
  return `toutes les solutions, avec une constante, par ex. y = Ce^(2${att.t}) + 1, C ∈ R`;
}
