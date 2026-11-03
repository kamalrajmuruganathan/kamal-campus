/**
 * Aides partagées par les tests des outils de calcul (pas un test lui-même).
 */
import assert from 'node:assert/strict';

/** Générateur pseudo-aléatoire reproductible (mulberry32). */
export function graine(s) {
  let a = s >>> 0;
  const suivant = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  suivant.entier = (min, max) => min + Math.floor(suivant() * (max - min + 1));
  return suivant;
}

/** Ce que fait l'écran Outils : le point décimal devient une virgule. */
export const virgule = (s) => (typeof s === 'string' ? s.replace(/(\d)\.(\d)/g, '$1,$2') : s);

/** Ce que fait l'écran Outils avec un champ numérique tapé par l'élève. */
export function champ(brut) {
  if (brut === '' || brut === null || brut === undefined) return null;
  const n = Number(String(brut).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
}

/** Tout le texte affiché pour un résultat (étapes ou message d'erreur). */
export function texteAffiche(res) {
  if (!res.valide) return virgule(res.erreur);
  return (res.etapes ?? []).map((e) => [e.titre, e.detail, e.remarque].filter(Boolean).map(virgule).join(' — ')).join('\n');
}

/** Aucun artefact informatique dans un texte destiné à un élève. */
export function verifierTexte(t, ctx = '') {
  const m = `${ctx}\n${t}`;
  assert.equal(typeof t, 'string', m);
  assert.doesNotMatch(t, /NaN|undefined|Infinity|\bnull\b|\[object/, m);
  assert.doesNotMatch(t, /\d(?:[.,]\d+)?e[+-]?\d/i, `notation « 1e-7 » : ${m}`);
  assert.doesNotMatch(t, /\d[.,]\d{12,}/, `bruit flottant : ${m}`);
  assert.doesNotMatch(t, /[+×−-] -\d/, `négatif sans parenthèses : ${m}`);
  assert.doesNotMatch(t, /(?<![\d⁰-⁹])-0(?![.,]\d)(?!\d)/, `« -0 » : ${m}`);
}
