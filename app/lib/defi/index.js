/**
 * Défi à distance — sans serveur, 100 % hors ligne.
 *
 * Un défi = un chapitre + une GRAINE + un nombre de questions. Encodé dans un
 * court code (partagé par QR ou texte). Les deux joueurs, en rejouant la même
 * graine, obtiennent EXACTEMENT les mêmes questions générées → il suffit de
 * comparer les scores. Chacun renvoie un « code résultat » pour départager.
 *
 * Module pur et testable.
 */

/** Générateur pseudo-aléatoire déterministe (mulberry32) à partir d'une graine. */
export function rngGraine(graine) {
  let a = (Number(graine) >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Graine aléatoire (entier positif). */
export function graineAleatoire() { return Math.floor(Math.random() * 1e9) + 1; }

const SEP = '~';

/** Encode un défi en code court : « D1~<graine36>~<n>~<chapId> ». */
export function encoderDefi({ chapId, graine, n }) {
  return ['D1', Number(graine).toString(36), String(n), String(chapId)].join(SEP);
}

/** Décode un code de défi. Renvoie null si invalide. */
export function decoderDefi(code) {
  if (typeof code !== 'string') return null;
  const p = code.trim().split(SEP);
  if (p.length < 4 || p[0] !== 'D1') return null;
  const graine = parseInt(p[1], 36);
  const n = parseInt(p[2], 10);
  const chapId = p.slice(3).join(SEP); // au cas où (chapId ne contient pas ~)
  if (!Number.isFinite(graine) || !Number.isFinite(n) || !chapId) return null;
  return { chapId, graine, n };
}

/** Encode un résultat : « S1~<graine36>~<score>~<n> ». */
export function encoderResultat({ graine, score, n }) {
  return ['S1', Number(graine).toString(36), String(score), String(n)].join(SEP);
}

/** Décode un code résultat. Renvoie null si invalide. */
export function decoderResultat(code) {
  if (typeof code !== 'string') return null;
  const p = code.trim().split(SEP);
  if (p.length !== 4 || p[0] !== 'S1') return null;
  const graine = parseInt(p[1], 36);
  const score = parseInt(p[2], 10);
  const n = parseInt(p[3], 10);
  if (![graine, score, n].every(Number.isFinite)) return null;
  return { graine, score, n };
}

/** Verdict en comparant mon score et celui reçu. */
export function verdict(monScore, sonScore) {
  if (monScore > sonScore) return 'gagne';
  if (monScore < sonScore) return 'perd';
  return 'egalite';
}
