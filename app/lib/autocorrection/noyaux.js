/**
 * Noyaux et équations de désintégration (2de) :
 *   « Écrire le symbole ^A_Z X » → « ${}^{14}_{7}\mathrm{N}$ » ;
 *   « Écrire l'équation de la désintégration » → « ${}^{238}_{92}\mathrm{U} \longrightarrow {}^{234}_{90}\mathrm{Th} + {}^{4}_{2}\mathrm{He}$ ».
 *
 * Saisies acceptées pour un noyau (A = nombre de masse, Z = numéro atomique) :
 *   « 238 92 U », « 238/92 U », « (238 ; 92) U », « ^238_92 U », « ^{238}_{92}U », « ²³⁸₉₂U », « U 238 92 » ;
 *   particules : « e- », « β- » (= 0 -1 e), « e+ », « β+ » (= 0 1 e), « α » (= 4 2 He).
 * Pour un noyau, les deux nombres peuvent être donnés dans l'ordre Z A (A ≥ Z, aucune ambiguïté).
 * Le symbole doit être exact (majuscule puis minuscule : « Th », pas « TH »). Ordre des produits libre,
 * mais le noyau père doit être à gauche de la flèche.
 */

const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const chiffresSup = (s) => [...s].map((c) => (SUP.includes(c) ? SUP.indexOf(c) : SUB.includes(c) ? SUB.indexOf(c) : c)).join('');
const SYMBOLE = /^(?:[A-Z][a-z]?|e|n|p)$/;

function cle(A, Z, X) {
  return `${A}|${Z}|${X}`;
}

/** Une particule ou un noyau → « A|Z|X », ou null. */
function lireTerme(brut) {
  let t = String(brut).trim()
    .replace(/\\mathrm\{([^{}]*)\}/g, '$1').replace(/\{\}/g, '')
    .replace(/[−–]/g, '-').replace(/⁻/g, '-').replace(/⁺/g, '+').replace(/₋/g, '_-').replace(/₊/g, '_+')
    .replace(/\s+/g, ' ');
  // Particules écrites sans nombres.
  if (/^(?:e-|e\^-|e\^\{-\}|β-|beta-|électron)$/i.test(t)) return cle(0, -1, 'e');
  if (/^(?:e\+|e\^\+|e\^\{\+\}|β\+|beta\+|positon|positron)$/i.test(t)) return cle(0, 1, 'e');
  if (/^(?:α|alpha)$/i.test(t)) return cle(4, 2, 'He');
  let A; let Z; let X;
  // « ²³⁸₉₂U » (exposant puis indice en caractères spéciaux).
  let m = t.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)\s*(_?[-+]?)([₀₁₂₃₄₅₆₇₈₉]+)\s*([A-Za-z]{1,2})$/);
  if (m) { A = Number(chiffresSup(m[1])); Z = Number((m[2].replace('_', '') || '') + chiffresSup(m[3])); X = m[4]; }
  // « ^238_92 U », « ^{238}_{92}U », « _92^238 U ».
  if (!m) {
    m = t.match(/^\^\s*\{?\s*(\d+)\s*\}?\s*_\s*\{?\s*([-+]?\d+)\s*\}?\s*([A-Za-z]{1,2})$/);
    if (m) { A = Number(m[1]); Z = Number(m[2]); X = m[3]; }
  }
  if (!m) {
    m = t.match(/^_\s*\{?\s*([-+]?\d+)\s*\}?\s*\^\s*\{?\s*(\d+)\s*\}?\s*([A-Za-z]{1,2})$/);
    if (m) { A = Number(m[2]); Z = Number(m[1]); X = m[3]; }
  }
  // « 238 92 U », « 238/92 U », « (238 ; 92) U », « U 238 92 », « U(238 ; 92) ».
  if (!m) {
    m = t.match(/^\(?\s*([-+]?\d+)\s*[\s,;/]\s*([-+]?\d+)\s*\)?\s*([A-Za-z]{1,2})$/);
    if (!m) {
      const k = t.match(/^([A-Za-z]{1,2})\s*\(?\s*([-+]?\d+)\s*[\s,;/]\s*([-+]?\d+)\s*\)?$/);
      if (k) m = [k[0], k[2], k[3], k[1]];
    }
    if (m) {
      const a = Number(m[1]); const b = Number(m[2]); X = m[3];
      if (X === 'e') {
        // Électron / positon : A = 0, Z = ±1 (le signe + peut être omis).
        if (a === 0 && Math.abs(b) === 1) { A = 0; Z = b; } else if (b === 0 && Math.abs(a) === 1) { A = 0; Z = a; } else return null;
      } else if (/^[+-]/.test(m[1]) || /^[+-]/.test(m[2])) return null;
      else { A = Math.max(a, b); Z = Math.min(a, b); }
    }
  }
  if (!m || !SYMBOLE.test(X) || !Number.isInteger(A) || !Number.isInteger(Z)) return null;
  return cle(A, Z, X);
}

/** « … → … + … » → [[clés à gauche], [clés à droite]] (une seule liste sans flèche), ou null. */
export function lireNoyaux(texte) {
  const t = String(texte || '').trim().replace(/^\$|\$\s*\.?$/g, '').replace(/\.$/, '');
  const cotes = t.split(/\s*(?:\\longrightarrow|\\rightarrow|\\to|-{1,2}>|→|⟶|=>)\s*/);
  if (cotes.length > 2) return null;
  const lus = [];
  for (const c of cotes) {
    // Séparateur « + » entouré d'espaces (« e+ » et « _+1 » restent dans leur terme), ou « + » suivi d'un nombre/symbole.
    const decoupes = [c.split(/\s+\+\s+/), c.split(/\s*\+\s*(?=[\^_⁰¹²³⁴⁵⁶⁷⁸⁹(\d]|\\|\{\}|[A-Zαβe])/)];
    let ok = null;
    for (const d of decoupes) {
      const termes = d.map(lireTerme);
      if (termes.every(Boolean)) { ok = termes.sort(); break; }
    }
    if (!ok) return null;
    lus.push(ok);
  }
  return lus;
}

/** La réponse est-elle un noyau ou une équation de désintégration écrite en LaTeX ? */
export function analyserNoyaux(ex) {
  const r = String((ex && ex.reponse) || '').trim();
  if (!/^\$\s*(?:\{\})?\^\{\d+\}_\{[-+]?\d+\}\\mathrm\{[A-Za-z]{1,2}\}[^$]*\$\.?$/.test(r)) return null;
  const lu = lireNoyaux(r);
  if (!lu) return null;
  return { kind: 'noyaux', membres: lu.map((l) => l.join(' + ')) };
}

export function egalNoyaux(saisie, alt) {
  const lu = lireNoyaux(saisie);
  return !!lu && lu.length === alt.membres.length && lu.every((l, i) => l.join(' + ') === alt.membres[i]);
}

export function consigneNoyaux(alt) {
  return alt.membres.length > 1
    ? 'chaque noyau sous la forme A Z X, par ex. 238 92 U -> 234 90 Th + 4 2 He (électron : e-, positon : e+)'
    : 'le noyau sous la forme A Z X, par ex. 238 92 U (ou ^238_92 U)';
}
