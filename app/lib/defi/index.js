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

/** Nombre de questions accepté dans un code (un code tapé de travers ne doit pas lancer 99 999 questions). */
export const N_MAX_DEFI = 50;

/** Entier écrit seulement avec des chiffres (« 10 », pas « 10abc » ni « -5 »), sinon NaN. */
function entierStrict(texte, base = 10) {
  const motif = base === 36 ? /^[0-9a-z]+$/i : /^\d+$/;
  return motif.test(texte) ? parseInt(texte, base) : NaN;
}

/** Encode un défi en code court : « D1~<graine36>~<n>~<chapId> ». */
export function encoderDefi({ chapId, graine, n }) {
  return ['D1', Number(graine).toString(36), String(n), String(chapId)].join(SEP);
}

/** Décode un code de défi. Renvoie null si invalide. */
export function decoderDefi(code) {
  if (typeof code !== 'string') return null;
  const p = code.trim().split(SEP);
  if (p.length < 4 || p[0] !== 'D1') return null;
  const graine = entierStrict(p[1], 36);
  const n = entierStrict(p[2]);
  const chapId = p.slice(3).join(SEP); // au cas où (chapId ne contient pas ~)
  if (!Number.isFinite(graine) || !Number.isInteger(n) || n < 1 || n > N_MAX_DEFI || !chapId) return null;
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
  const graine = entierStrict(p[1], 36);
  const score = entierStrict(p[2]);
  const n = entierStrict(p[3]);
  if (![graine, score, n].every(Number.isFinite)) return null;
  if (n < 1 || n > N_MAX_DEFI || score > n) return null; // « 12 / 10 » est impossible
  return { graine, score, n };
}

/** Verdict en comparant mon score et celui reçu. */
export function verdict(monScore, sonScore) {
  if (monScore > sonScore) return 'gagne';
  if (monScore < sonScore) return 'perd';
  return 'egalite';
}
