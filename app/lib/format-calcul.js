/**
 * Écriture des nombres dans les étapes des outils de calcul (Outils, résolveur).
 *
 * Un élève ne doit jamais lire « 0.30000000000000004 », « 1e-8 », « Infinity »
 * ni « NaN ». Ces fonctions écrivent :
 *   - les entiers tels quels (jusqu'à 2^53) ;
 *   - les décimaux « ordinaires » arrondis à 6 décimales (bruit flottant effacé) ;
 *   - les très petits ou très grands nombres en notation scientifique
 *     « 2.5 × 10⁻⁸ » (l'écran Outils remplace ensuite le point par une virgule).
 */

const EXPOSANTS = {
  '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹',
};

/** « −8 » → « ⁻⁸ » (exposant en caractères surélevés). */
export function exposant(n) {
  return String(n).split('').map((c) => EXPOSANTS[c] ?? c).join('');
}

/**
 * Nombre → texte lisible (point décimal, signe « - »).
 * @param {number} x
 * @param {number} [chiffres=4] chiffres significatifs en notation scientifique
 */
export function nombre(x, chiffres = 4) {
  if (typeof x !== 'number' || Number.isNaN(x)) return '?';
  if (!Number.isFinite(x)) return x > 0 ? '+∞' : '−∞';
  if (x === 0) return '0'; // y compris −0
  const a = Math.abs(x);
  if (Number.isInteger(x) && a <= Number.MAX_SAFE_INTEGER) return String(x);
  if (a >= 1e-3 && a < 1e15) {
    const v = Number(x.toFixed(6));
    if (v !== 0) return String(v);
  }
  const [m, e] = x.toExponential(chiffres - 1).split('e');
  return `${Number(m)} × 10${exposant(Number(e))}`;
}

/** Comme `nombre`, entre parenthèses s'il est négatif : « 3 × (−2) ». */
export function par(x, chiffres = 4) {
  const s = nombre(x, chiffres);
  return s.startsWith('-') ? `(${s})` : s;
}

/**
 * Arrondi d'une valeur RENVOYÉE (nombre) : 6 décimales pour les valeurs
 * ordinaires, 6 chiffres significatifs pour les très petites (sinon 1e-8 → 0).
 */
export function arrondi(x) {
  if (!Number.isFinite(x) || Number.isInteger(x)) return x;
  if (Math.abs(x) >= 1e-3) return Number(x.toFixed(6));
  return Number(x.toPrecision(6));
}
