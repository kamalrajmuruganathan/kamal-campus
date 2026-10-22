/**
 * Autocorrection des exercices — logique pure, testable, sans dépendance.
 *
 * Deux fonctions principales :
 *  - typeReponse(reponse, matiere?) → 'auto' quand la réponse attendue est courte
 *    et vérifiable par la machine (un nombre avec ou sans unité, un mot ou une
 *    courte expression), sinon 'ouverte' (l'élève s'auto-évalue).
 *  - comparer(saisie, reponse, matiere?) → true / false, de façon tolérante
 *    (casse, accents, espaces, ponctuation finale, articles initiaux, virgule ou
 *    point décimal, espaces des milliers, unité facultative, LaTeX simple).
 *
 * Principe de sûreté : dans le doute, on classe la réponse 'ouverte'. Mieux vaut
 * laisser l'élève juger que lui dire « faux » alors qu'il a juste.
 */

import { analyserCalcul, analyserCalculForme, comparerCalcul, valeurLitterale } from '../expressions/index.js';
import { analyserAutre, comparerAutre, consigneAutre } from '../expressions/autres.js';
import { analyserNoyaux, egalNoyaux, consigneNoyaux } from './noyaux.js';
import { analyserExacte, comparerExacte, consigneExacte, analyserSuite, comparerSuite, consigneSuite, analyserFraction, memeValeurEcrite } from '../expressions/exactes.js';

/** Matières de langues étrangères : traductions, phrases → plus strict. */
const LANGUES = new Set(['anglais', 'allemand', 'espagnol', 'italien', 'langues-anciennes']);

/** Nombre maximal de mots d'une réponse textuelle vérifiable. */
export const MAX_MOTS = 4;

/* ------------------------------------------------------------------ */
/* Outils de normalisation                                             */
/* ------------------------------------------------------------------ */

const ESPACES = /[\s    ]+/g;

function sansAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

/** Normalisation commune (saisie et réponse) avant analyse. */
function nettoyer(s) {
  return String(s ?? '')
    .replace(/[’‘`´]/g, "'")
    .replace(/μ/g, 'µ') // mu grec = symbole micro
    .replace(/⩾/g, '≥').replace(/⩽/g, '≤')
    .replace(/∅/g, ' ensemble vide ')
    .replace(/[−–—]/g, '-')
    .replace(/[«»“”"¡¿]/g, ' ')
    .replace(ESPACES, ' ')
    .trim();
}

/**
 * Protège les nombres d'un texte avant d'en retirer espaces et ponctuation :
 * « −3,5 » et « 3,5 » restent distincts, « 2 ; 3 » ne devient pas « 23 ».
 */
function protegerNombres(s) {
  return s
    // Espaces des milliers : « 1 359 » = « 1359 » (groupes de 3 chiffres après le premier).
    .replace(/(?<![\d,.])(\d{1,3})((?: \d{3})+)(?![\d])/g, (_, a, b) => a + b.replace(/ /g, ''))
    // Virgule / point décimal (sauf dans un ensemble ou une liste : « {2,4,6} », « [8,11] »).
    .replace(/(\d)[,.](?=\d)/g, (m, d, i, tout) => (/[{[]|\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+\s*\)/.test(tout) ? d + '#' : d + '§'))
    .replace(/(\d§\d*?)0+(?!\d)/g, '$1').replace(/§(?!\d)/g, '') // « 0,80 » = « 0,8 » ; « 2,0 » = « 2 »
    .replace(/(^|[^\p{L}\d])-\s*(?=[\d\p{L}∞])/gu, '$1~') // signe moins (devant un nombre, « -i », « -∞ »)
    .replace(/(\d)[\s,;:/]+(?=[\d~])/g, '$1#');  // deux nombres qui se suivent
}

/** Retire la ponctuation finale (. ! ? … ; :) et les espaces autour. */
function sansPonctuationFinale(s) {
  return s.replace(/[\s.!?…;:]+$/u, '').replace(/^[\s¿¡]+/u, '').trim();
}

/**
 * Convertit le LaTeX SIMPLE d'un segment mathématique en texte brut.
 * Renvoie null si le segment contient du LaTeX non géré (→ réponse 'ouverte').
 */
function latexVersTexte(m) {
  let s = m;
  s = s.replace(/\{,\}/g, ',').replace(/\{\.\}/g, '.');
  // Nom indicé devant « = » (« P_\mathrm{J} = », « v_{0} \approx ») → « PJ = », « v0 ≈ ».
  s = s.replace(/^(\s*[A-Za-z])_\{?\s*(?:\\(?:mathrm|text)\s*\{)?([A-Za-z0-9]{1,4})\}?\}?(?=\s*(?:=|\\approx))/, '$1$2');
  // Unités composées : « \mathrm{W\cdot m^{-2}} » → « W·m⁻² ».
  s = s.replace(/\\(?:text|mathrm|textrm|mbox|operatorname)\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, (_, c) => ' ' + c
    .replace(/\\cdot\s*/g, '·')
    .replace(/\^\s*\{\s*-\s*([123])\s*\}|\^\s*-\s*([123])/g, (x, a, b) => '⁻' + '¹²³'[(a || b) - 1])
    .replace(/\^\s*\{?\s*([23])\s*\}?/g, (x, d) => '²³'[d - 2]));
  s = s.replace(/\^\s*\{?\\circ\}?/g, '°').replace(/\\degree/g, '°');
  s = s.replace(/\\%/g, '%').replace(/\\euro\b/g, '€');
  s = s.replace(/\\(?:times|cdot)/g, '×');
  s = s.replace(/\\approx/g, '≈');
  s = s.replace(/\\Omega/g, 'Ω').replace(/\\mu\b\s*/g, 'µ');
  s = s.replace(/\\[dt]?frac\s*\{\s*(-?\d+)\s*\}\s*\{\s*(\d+)\s*\}/g, '$1/$2');
  s = s.replace(/\\[,;:! ]/g, ' ').replace(/~/g, ' ');
  // Exposants d'unités (cm^{2}, m^3) ; 10^{-3} reste « 10^-3 ».
  s = s.replace(/([a-zA-Zµ])\s*\^\s*\{?\s*2\s*\}?/g, '$1²').replace(/([a-zA-Zµ])\s*\^\s*\{?\s*3\s*\}?/g, '$1³');
  s = s.replace(/10\s*\^\s*\{\s*([+-]?\d+)\s*\}/g, '10^$1');
  if (/[\\{}_]/.test(s)) return null; // LaTeX complexe
  return s;
}

/** Remplace les segments $…$ par du texte ; null si un segment est complexe. */
function sansDollars(r) {
  let complexe = false;
  const t = r.replace(/\$([^$]*)\$/g, (_, m) => {
    const x = latexVersTexte(m);
    if (x == null) complexe = true;
    return ' ' + (x ?? '') + ' ';
  });
  if (complexe || t.includes('$')) return null;
  return t.replace(ESPACES, ' ').trim();
}

/* ------------------------------------------------------------------ */
/* Nombres et unités                                                   */
/* ------------------------------------------------------------------ */

// Nombre : signe, chiffres groupés par 3 (espaces des milliers), décimales,
// puis éventuellement « × 10^n » / « e-n », puis éventuellement « /entier ».
const RE_NOMBRE = new RegExp(
  '^([+-]?)\\s*(\\d{1,3}(?:[ \\u00a0\\u202f]\\d{3})+|\\d+)(?:[.,](\\d+))?' +
    '(?:\\s*(?:[×x*·]\\s*10\\s*\\^\\s*\\(?\\s*([+-]?\\d+)(?:\\s*\\))?|[eE]([+-]?\\d+)))?' +
    '(?:\\s*/\\s*(\\d+)(?![\\d.,]))?',
);

/** Normalise une unité (minuscules, synonymes courants). */
function normUnite(u) {
  const brut = String(u || '').replace(/\s+/g, '');
  // « Nm » (majuscule) = newton-mètre, pas nanomètre.
  if (/^N[.·×*]?m$/.test(brut)) return 'n·m';
  let s = sansAccents(brut.toLowerCase());
  // Préfixes méga / milli : « MW » ≠ « mW », « Mo » ≠ « mo ».
  if (/^[mM][a-zA-ZΩ]{1,2}$/.test(brut) && !/^min$/i.test(brut)) s = brut[0] + s.slice(1);
  const EXP = { 1: '¹', 2: '²', 3: '³' };
  // Exposants : « s^-2 », « s-2 », « s^{-2} » → s⁻² ; « m^2 », « m2 » → m² (après une lettre).
  s = s.replace(/\^?\{?\(?-([123])\)?\}?/g, (_, d) => '⁻' + EXP[d]);
  s = s.replace(/\^\{?([23])\}?/g, (_, d) => EXP[d]);
  s = s.replace(/([a-zµω])([23])(?!\d)/g, (_, l, d) => l + EXP[d]);
  s = s.replace(/[.*×]/g, '·');
  // « a/b/c » = « a·b⁻¹·c⁻¹ » ; « m/s² » = « m·s⁻² ».
  const parts = s.split('/');
  if (parts.length >= 2 && parts.every(Boolean)) {
    const inverser = (f) => (/⁻¹$/.test(f) ? f.slice(0, -2) : /⁻[²³]$/.test(f) ? f.slice(0, -2) + f.slice(-1)
      : /[²³]$/.test(f) ? f.slice(0, -1) + '⁻' + f.slice(-1) : f + '⁻¹');
    s = parts[0] + parts.slice(1).map((p) => '·' + p.split('·').map(inverser).join('·')).join('');
  }
  const syn = {
    euro: '€', euros: '€', eur: '€',
    degre: '°', degres: '°',
    'degrecelsius': '°c', 'degrescelsius': '°c',
    pourcent: '%', pourcents: '%',
    ohm: 'ω', ohms: 'ω', kohm: 'kω', kohms: 'kω',
    sec: 's', seconde: 's', secondes: 's',
    heure: 'h', heures: 'h',
    minute: 'min', minutes: 'min',
    jour: 'jour', jours: 'jour',
    an: 'an', ans: 'an', annee: 'an', annees: 'an',
    semaine: 'semaine', semaines: 'semaine',
    dioptrie: 'δ', dioptries: 'δ',
  };
  return syn[s] ?? s;
}

/**
 * Lit « [var =] nombre [unité] ». Renvoie {valeur, decimales, unite} ou null.
 * L'unité doit commencer par une lettre ou un symbole d'unité, sans chiffre
 * hors exposants (sinon ce n'est pas « un nombre avec unité »).
 */
function lireNombre(texte) {
  let s = texte.trim().replace(/^(?:≈|environ|à peu près|en)\s+/i, '').replace(/^≈\s*/, '');
  // Préfixe « Q = », « x = », « AB = », « v_0 = » (une seule égalité).
  const pref = s.match(/^[A-Za-zΔθαλρω][A-Za-z0-9'_()]{0,5}\s*(?:=|≈)\s*/);
  if (pref) s = s.slice(pref[0].length);
  s = s.replace(/^≈\s*/, '');
  if (s.includes('=')) return null;
  // Exposants tapés en caractères spéciaux (10⁷, 10⁻³) → 10^7, 10^-3 ; « 10^7 » seul → 1 × 10^7.
  s = s.replace(/10\s*([⁻]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, e) => '10^' + [...e].map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c) >= 0 ? '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c) : '-').join(''));
  if (/^10\s*\^/.test(s)) s = '1 × ' + s;
  const m = s.match(RE_NOMBRE);
  if (!m) return null;
  const [tout, signe, entier, dec = '', exp1, exp2, denom] = m;
  // Chiffres significatifs écrits (« 3,35 » → 3 ; « 0,050 » → 2 ; « 314 » → 3).
  // Entier sans virgule : les zéros finaux ne comptent pas (« 280 » → 2 chiffres significatifs).
  const chiffres = dec || exp1 != null || exp2 != null
    ? (entier.replace(/\D/g, '') + dec).replace(/^0+/, '').length
    : entier.replace(/\D/g, '').replace(/^0+/, '').replace(/0+$/, '').length;
  let valeur = Number(entier.replace(/\D/g, '') + (dec ? '.' + dec : ''));
  const exposant = exp1 ?? exp2;
  if (exposant != null) valeur *= 10 ** Number(exposant);
  if (denom != null) {
    if (dec || exposant != null || Number(denom) === 0) return null;
    valeur /= Number(denom);
  }
  if (signe === '-') valeur = -valeur;
  const collee = s.slice(tout.length);
  // « L-1 », « s^-1 », « s^{-1} » : exposant −1 écrit au clavier.
  const reste = collee.trim().replace(/\^?\{?\(?-([123])\)?\}?(?![\d])/g, (_, d) => '⁻' + '¹²³'[d - 1])
    .replace(/(\p{L})([23])(?=[/·.\s]|$)/gu, (_, l, d) => l + '¹²³'[d - 1]); // « m3/s » = « m³/s »
  // « -4x », « 3n » : une lettre collée au nombre est une variable, pas une unité.
  if (/^[a-zA-Z]\b/.test(collee) && !/^[mgsVAWNJLhK]\b/.test(collee)) return null;
  if (reste && !/^[\p{L}µ°%€][\p{L}µ°%€²³/.·\-⁻¹ ]{0,14}(?:(?<=\p{L})[23])?$/u.test(reste)) return null;
  if (reste.split(' ').length > 2) return null;
  // « 3π/4 » : π n'est pas une unité ; « 3 cm/2 » non plus.
  if (/π|\/\s*\d/.test(reste)) return null;
  // « 90° droit » : un degré suivi d'un mot n'est pas une unité (seuls °C et °F le sont).
  if (/^°\s*\p{L}/u.test(reste) && !/^°\s*[cf]$/i.test(reste)) return null;
  return {
    valeur,
    decimales: exposant != null || denom != null ? null : dec.length,
    chiffres: denom != null ? null : chiffres,
    unite: reste ? normUnite(reste) : '',
    motsUnite: reste ? reste.split(' ').length : 0,
  };
}

/* ------------------------------------------------------------------ */
/* Texte                                                               */
/* ------------------------------------------------------------------ */

const ARTICLES = /^(?:(?:le|la|les|un|une)\s+|l'\s*)/;

/** Clé de comparaison d'un texte court. */
function cleTexte(s, { articles = true, ignorerAccents = true, espaces = false } = {}) {
  let x = sansPonctuationFinale(nettoyer(s)).toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae');
  if (ignorerAccents) x = sansAccents(x);
  if (articles) {
    const sans = x.replace(ARTICLES, '');
    if (sans) x = sans;
  }
  // En langue étrangère, les espaces comptent (« dagli » ≠ « da gli ») ; ailleurs on les ignore.
  if (espaces) return protegerNombres(x).replace(/\s+/g, ' ').trim();
  return protegerNombres(x).replace(/[\s\-‐]+/g, '');
}

/**
 * Phrase courte contenant UN SEUL nombre isolé (« Nina a 41 billes »,
 * « Environ 18 fois ») : on accepte aussi ce nombre seul, avec ou sans un des
 * mots de la phrase comme unité. Renvoie {valeur, mots} ou null.
 */
function nombreDansTexte(s) {
  const re = /(?:^|\s)(\d{1,3}(?: \d{3})+|\d+)(?:[.,](\d+))?(?=\s|$)/g;
  const trouves = [...s.matchAll(re)];
  if (trouves.length !== 1 || /demi|quart|tiers|virgule/i.test(s)) return null;
  const chiffres = (s.match(/\d/g) || []).length;
  const m = trouves[0];
  if ((m[1] + (m[2] || '')).replace(/\D/g, '').length !== chiffres) return null;
  const valeur = Number(m[1].replace(/\D/g, '') + (m[2] ? '.' + m[2] : ''));
  const mots = s.split(' ').map((w) => normUnite(w)).filter(Boolean);
  return { valeur, decimales: (m[2] || '').length, mots };
}

function compterMots(s) {
  return s.split(' ').filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/* ------------------------------------------------------------------ */
/* Analyse de la réponse attendue                                      */
/* ------------------------------------------------------------------ */

/** Découpe la réponse en alternatives (« ou », « / », « (ou … ) »). */
function alternatives(r) {
  const alts = [];
  let base = r;
  // « (ou X) » → X est une alternative ; les autres parenthèses sont facultatives.
  base = base.replace(/\(\s*ou\s+([^()]+)\)/gi, (_, x) => {
    alts.push(x.trim());
    return ' ';
  });
  const parens = [];
  base = base.replace(/\(([^()]*)\)/g, (p, x) => {
    parens.push(x.trim());
    return ' ';
  });
  if (/[()]/.test(base)) return null;
  base = base.replace(ESPACES, ' ').trim();
  // « A / B » sert surtout à donner PLUSIEURS réponses exigées (« his dog /
  // her cat », « der / die / das ») → on laisse l'élève juger.
  if (/\s\/\s/.test(base)) return null;
  // « A ou B » : vraie alternative seulement entre mots isolés (« grandfather ou
  // grandpa ») ; « génitif singulier ou nominatif pluriel » répond souvent à
  // « cite deux cas » → ouverte.
  const morceaux = base.split(/\s+ou\s+/i).map((m) => m.trim()).filter(Boolean);
  if (morceaux.length > 1 && morceaux.some((m) => compterMots(m) > 1)) return null;
  for (const morceau of morceaux) alts.unshift(morceau);
  return { alts: [...new Set(alts)], parens };
}

/**
 * Analyse une réponse attendue.
 * @returns {{type:'auto'|'ouverte', alternatives:Array}}
 */
export function analyser(reponse, matiere = null) {
  const OUVERTE = { type: 'ouverte', alternatives: [] };
  const brut = nettoyer(reponse);
  if (!brut || brut.length > 80) return OUVERTE;
  if (/exemple|par ex\.|réponses? possibles?|réponse libre|selon|corrigé/i.test(brut)) return OUVERTE;
  if (/`|\[|\n|→|⇒|;|:\s|\s:|…|\.\.\.|\b[a-e]\)|\([a-e]\)|\d\)\s|\set\/ou\s/.test(brut)) return OUVERTE;

  const texte = sansDollars(brut);
  if (texte == null) return OUVERTE;
  // Virgule suivie d'un espace = énumération (pas une virgule décimale).
  if (/,\s/.test(texte)) return OUVERTE;
  const decoupe = alternatives(texte);
  if (!decoupe) return OUVERTE;
  const langue = LANGUES.has(matiere);

  const out = [];
  for (const alt of decoupe.alts) {
    const nb = lireNombre(sansPonctuationFinale(alt));
    if (nb) {
      out.push({ kind: 'nombre', ...nb });
      continue;
    }
    // Un nombre « presque lu » (chiffres + symboles mathématiques) → ouverte.
    if (/[=<>≤≥×^√∞π+*]/.test(alt)) return OUVERTE;
    const propre = sansPonctuationFinale(alt);
    // Unité seule (« J·kg⁻¹·K⁻¹ ») : plusieurs écritures (J/(kg·K)…) → ouverte.
    if (/[·⁻]/.test(propre)) return OUVERTE;
    // Expression littérale (« 6x », « 3a ») : plusieurs écritures possibles.
    if (/\d[a-z]/i.test(propre) && !/\d(?:e|er|re|ème|eme|nd|nde)\b/i.test(propre)) return OUVERTE;
    const mots = compterMots(propre);
    if (mots === 0 || mots > MAX_MOTS) return OUVERTE;
    // En langue étrangère : une phrase (≥ 3 mots ou ponctuation finale) se
    // traduit de plusieurs façons → l'élève s'auto-évalue.
    if (langue && (mots >= 3 || /[.!?]\s*$/.test(alt))) return OUVERTE;
    out.push({ kind: 'texte', valeur: propre, articles: !langue, nombre: nombreDansTexte(propre) });
    // Parenthèse explicative facultative : on accepte aussi la forme longue.
    for (const p of decoupe.parens) {
      if (compterMots(p) <= MAX_MOTS) out.push({ kind: 'texte', valeur: `${propre} ${p}`, articles: !langue });
    }
  }
  // Plusieurs solutions numériques (« x = 2 ou x = 3 ») : les deux sont
  // exigées, ce ne sont pas des alternatives → ouverte.
  if (out.filter((a) => a.kind === 'nombre').length > 1) return OUVERTE;
  if (!out.length) return OUVERTE;
  return { type: 'auto', alternatives: out };
}

/** 'auto' si la réponse est courte et vérifiable, sinon 'ouverte'. */
export function typeReponse(reponse, matiere = null) {
  return analyser(reponse, matiere).type;
}

/** Unité attendue (pour l'afficher en indice dans le champ), ou ''. */
export function uniteAttendue(reponse, matiere = null) {
  const a = analyser(reponse, matiere);
  const nb = a.alternatives.find((x) => x.kind === 'nombre');
  if (!nb || !nb.unite) return '';
  // On réaffiche l'unité telle qu'écrite dans la réponse quand c'est possible.
  const texte = sansDollars(nettoyer(reponse)) || '';
  const m = texte.match(/[\d)]\s*([A-Za-zÀ-ÿµΩ°%€][^()]*?)\s*[.]?$/);
  return m ? m[1].trim() : nb.unite;
}

/* ------------------------------------------------------------------ */
/* Comparaison                                                         */
/* ------------------------------------------------------------------ */

// Préfixes SI pour convertir une saisie dans l'unité attendue (« 5,8 µm » = « 5,8 × 10⁻⁶ m »).
const PREFIXES = { G: 1e9, M: 1e6, k: 1e3, h: 1e2, d: 1e-1, c: 1e-2, m: 1e-3, 'µ': 1e-6, n: 1e-9 };
const UNITES_SIMPLES = new Set(['m', 'g', 's', 'l', 'w', 'j', 'v', 'a', 'ω', 'hz', 'wh', 'n', 'pa', 'o']);

/** Unité normalisée → { base, facteur } (« km » → m, 1000) ; null si ce n'est pas une unité simple. */
function decomposerUnite(u) {
  if (UNITES_SIMPLES.has(u)) return { base: u, facteur: 1 };
  const p = u[0] === 'K' ? 'k' : u[0];
  const base = u.slice(1);
  if (!(p in PREFIXES) || !UNITES_SIMPLES.has(base)) return null;
  if (p === 'h' && base !== 'pa') return null; // « ha », « hs » : pas des préfixes courants
  if (p === 'd' && base === 'a') return null;
  return { base, facteur: PREFIXES[p] };
}

/**
 * Saisie écrite avec un autre multiple de la même unité : convertie dans l'unité attendue.
 * Renvoie la saisie convertie, ou null.
 */
function convertir(att, saisie) {
  const a = decomposerUnite(att.unite);
  const b = decomposerUnite(saisie.unite);
  if (!a || !b || a.base !== b.base || a.facteur === b.facteur) return null;
  return { ...saisie, valeur: (saisie.valeur * b.facteur) / a.facteur, unite: att.unite, decimales: null };
}

function egalNombre(att, saisie, opts = {}) {
  const { conversion = false, strict = false } = opts;
  if (conversion && saisie.unite && att.unite && saisie.unite !== att.unite) {
    const c = convertir(att, saisie);
    if (c) saisie = c;
  }
  if (saisie.unite && att.unite && saisie.unite !== att.unite) return false;
  if (saisie.unite && !att.unite) {
    // « 1 électron », « 8 atomes » : un nom de la réponse attendue ou de l'énoncé (pas une unité) est permis.
    if (!(opts.mots && opts.mots.has(motSimple(saisie.unite)))) return false;
    saisie = { ...saisie, unite: '' };
  }
  // Tolérance RELATIVE seulement (sinon 10⁻¹⁹ « égalerait » 10⁻¹⁸).
  const e = att.valeur === 0 ? 1e-15 : Math.abs(att.valeur) * 1e-9;
  if (Math.abs(att.valeur - saisie.valeur) <= e) return true;
  // Arrondi demandé par l'énoncé (« arrondir au dixième », « écrire correctement le résultat ») :
  // une saisie plus précise n'a pas fait ce qui était demandé.
  if (strict) return false;
  // Saisie plus précise que la réponse (au moins 2 chiffres significatifs attendus) :
  // on arrondit la saisie au même nombre de chiffres significatifs (314,16 → 314 ;
  // 334 800 → 3,35 × 10^5 ; 13,86 → 14).
  if (att.chiffres >= 2 && saisie.chiffres != null && saisie.chiffres > att.chiffres && att.valeur !== 0) {
    const arrondi = Number(saisie.valeur.toPrecision(att.chiffres));
    if (Math.abs(arrondi - att.valeur) <= e) return true;
  }
  // Plus de décimales que la réponse (attendue décimale) : on accepte si
  // l'arrondi de la saisie redonne la réponse (3,1416 pour 3,14).
  if (att.decimales && saisie.decimales != null && saisie.decimales > att.decimales) {
    const f = 10 ** att.decimales;
    return Math.abs(Math.round(saisie.valeur * f) / f - att.valeur) <= e;
  }
  return false;
}

/** En français, l'orthographe compte : les accents doivent être justes. */
const ACCENTS_STRICTS = new Set(['francais', ...LANGUES]);

function egalTexte(att, saisie, matiere = null) {
  const opts = { articles: att.articles, espaces: LANGUES.has(matiere) };
  const a = cleTexte(att.valeur, { ...opts, ignorerAccents: false });
  const s = cleTexte(saisie, { ...opts, ignorerAccents: false });
  if (a === s) return true;
  if (ACCENTS_STRICTS.has(matiere)) return false;
  // Mots très courts (a/à, ou/où, la/là, du/dû, sur/sûr) : l'accent compte.
  if (sansAccents(a).length <= 3) return false;
  return cleTexte(att.valeur, opts) === cleTexte(saisie, opts);
}

/**
 * La saisie de l'élève correspond-elle à la réponse attendue ?
 * Renvoie false pour une réponse 'ouverte' (non vérifiable automatiquement).
 */
export function comparer(saisie, reponse, matiere = null) {
  const s = nettoyer(saisie);
  if (!s) return false;
  const a = analyser(reponse, matiere);
  if (a.type !== 'auto') return false;
  const texteSaisi = sansDollars(s) ?? s;
  const nbSaisi = lireNombre(sansPonctuationFinale(texteSaisi));
  return a.alternatives.some((alt) => {
    if (alt.kind === 'nombre') return !!nbSaisi && egalNombre(alt, nbSaisi);
    if (egalTexte(alt, texteSaisi, matiere)) return true;
    // Phrase à un seul nombre : le nombre seul suffit (unité = un mot de la phrase).
    if (alt.nombre && nbSaisi && (!nbSaisi.unite || alt.nombre.mots.includes(nbSaisi.unite))) {
      return egalNombre({ ...alt.nombre, unite: '' }, { ...nbSaisi, unite: '' });
    }
    return false;
  });
}

/* ------------------------------------------------------------------ */
/* Réponses acceptées écrites à la main (fichier attendus.json)        */
/* ------------------------------------------------------------------ */
//
// Beaucoup de réponses sont des phrases (« Il y a 30 timbres en tout. ») : la
// machine ne peut pas les comparer telles quelles. Le fichier attendus.json d'un
// chapitre donne, pour certains exercices, les formes courtes acceptées :
//   { "12": { "reponse": "<réponse exacte>", "accepte": ["30 timbres", "trente"] },
//     "13": { "reponse": "<réponse exacte>", "ensemble": ["le lait", "la pomme"] } }
// - « accepte » : chaque forme est un nombre (avec ou sans unité) ou un texte court ;
// - « ensemble » : l'élève doit citer TOUS les éléments, dans n'importe quel ordre,
//   séparés par des virgules, « et » ou des points-virgules.
// « reponse » sert de garde-fou : si l'exercice a changé, la ligne est ignorée.

/** Nombre maximal de mots d'une forme acceptée écrite à la main. */
export const MAX_MOTS_ATTENDU = 12;

/** Analyse UNE forme acceptée ; null si elle n'est pas vérifiable par la machine. */
function analyserForme(forme, matiere = null) {
  const brut = nettoyer(forme);
  if (!brut || brut.length > 100) return null;
  const texte = sansDollars(brut);
  if (texte == null) return null;
  const propre = sansPonctuationFinale(texte);
  // Suite ordonnée de nombres (« 35 mA ; 1,2 MW ; 5 ms ») : chacun comparé comme un nombre.
  const suiteNb = lireNombres(propre, true);
  // Points et vecteurs (« (-4 ; -1) ; vecteur nul ») : la comparaison par calcul les connaît mieux.
  let avecPoint = suiteNb && suiteNb.some((x) => x.kind === 'couple') && !LANGUES.has(matiere) && analyserSuite(brut);
  if (avecPoint && avecPoint.some((m) => m.k === 'expr' || m.k === 'eq')) avecPoint = null; // « 4,24 m/s » n'est pas une expression en m et s
  if (avecPoint) return { kind: 'math', suite: avecPoint, nombres: suiteNb };
  if (suiteNb) return { kind: 'nombres', liste: suiteNb, valeur: propre, articles: !LANGUES.has(matiere), phrase: true };
  // Formule brute seule (« C3H8O ») : mêmes éléments, mêmes nombres d'atomes.
  const brute = !LANGUES.has(matiere) && lireFormule(propre);
  if (brute) return { kind: 'formule', f: brute };
  const nb = lireNombre(propre);
  // « 1895 frères Lumière » : deux mots après le nombre → c'est une phrase, pas une unité
  // (sinon « 1895 » seul suffirait).
  if (nb && nb.motsUnite < 2) return { kind: 'nombre', ...nb };
  // Expression mathématique (« x² + 1 », « 6x ») : plusieurs écritures possibles → non.
  // (« < », « > » et les flèches sont permis : rangements, chaînes alimentaires.)
  // (« cm³ », « m² » : exposant collé à une unité, permis.)
  const symboles = matiere === 'langues-anciennes' ? /[=^√+*×²³]/ : /[=^√π+*×²³]/; // π est une lettre en grec ; ∞ permis (limites)
  const formule = symboles.test(propre.replace(/=>|->/g, '→').replace(/(\p{L})[²³]/gu, '$1').replace(/(^|[\s(;,])\+(?=\s?[\d∞])/g, '$1'))
    || (/\d[a-z]/i.test(propre) && !/\d(?:e|er|re|ème|eme|nd|nde|st|th|rd)\b/i.test(propre))
    || /[\d)][⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/.test(propre) // « 2¹⁰ » (un exposant collé à une unité, « cm³ », reste permis)
    || /\d\(\s*-?\d*[a-z]\s*[-+]|\)\(|\(\s*-?\d*[a-z]\s*[-+]\s*\d/i.test(propre) // « -2(x + 1)(x - 5) »
    // « 3/sqrt(x) ; 1 », « 1 - e ; e - 1 », « 1/(e - 1) » (hors langues).
    || (!LANGUES.has(matiere) && /\b(?:sqrt|ln|exp|log)\s*\(|\blog\s*\d|\d\s*\/\s*\(|(?:^|[\s;(])e\s*[-+]\s*\d|\d\s*[-+]\s*e(?:$|[\s;)])/.test(propre));
  // Point suivi d'autres réponses (« (3 ; 4) ; 5 ») : comparé par calcul, séparateurs libres.
  if (!formule && !LANGUES.has(matiere) && /\([^()]*;[^()]*\)\s*(?:;|\bet\b)\s*\S/.test(propre)) {
    const suite = analyserSuite(brut);
    if (suite) return { kind: 'math', suite };
  }
  if (formule) {
    // Valeur exacte, vecteur, point, ou suite de ces réponses (« H(1 ; 2) et AH = 2√5 ») : comparée par calcul.
    const suite = LANGUES.has(matiere) ? null : analyserSuite(brut);
    return suite ? { kind: 'math', suite } : null;
  }
  // « < », « > », « = » seuls (comparer deux nombres) : une réponse d'un seul symbole est permise.
  const mots = compterMots(propre) || (/∞|^[<>≤≥]$/.test(propre.trim()) ? 1 : 0);
  if (mots === 0 || mots > MAX_MOTS_ATTENDU) return null;
  // Pas de repli « le nombre seul suffit » : la forme écrite à la main est exigée en entier
  // (« 90° angle droit » ne doit pas accepter « 90 »). Les formes numériques sont données à part.
  // En langue étrangère, l'article fait souvent partie de ce qui est évalué (« la mia casa ») : on le garde.
  return { kind: 'texte', valeur: propre, articles: !LANGUES.has(matiere), phrase: true, nombre: null };
}

/**
 * Suite ordonnée de 2 à 6 réponses, dont au moins un nombre (« 35 mA ; 1,2 MW ; 5 ms »,
 * « 500 K ; 5,8 µm ; infrarouge ») : chaque nombre (avec ou sans unité) est comparé comme
 * un nombre, chaque mot (3 mots au plus, sans chiffre) comme un texte court.
 * Forme écrite à la main (`forme`) : morceaux séparés par « ; » seulement. Saisie de l'élève :
 * « ; », retour à la ligne, « , » suivi d'un espace, « et », « puis », « ± » ; une étiquette
 * « a) », « 1. » ou « T = » devant chaque valeur est permise. Renvoie la liste, ou null.
 */
function lireNombres(texte, forme = false) {
  return lireNombresTous(texte, forme)[0] || null;
}

/** Toutes les lectures possibles (une par façon de découper la saisie). */
/** Masque « ; » et « , » à l'intérieur des parenthèses (« (3 ; 3) » reste un seul morceau). */
function masquerParentheses(t) {
  let d = 0;
  let out = '';
  for (const c of t) {
    if (c === '(') d++;
    if (c === ')') d = Math.max(0, d - 1);
    out += d > 0 && c === ';' ? '\u0002' : d > 0 && c === ',' ? '\u0003' : c;
  }
  return out;
}
const demasquer = (x) => x.replace(/\u0002/g, ';').replace(/\u0003/g, ',');

/** « (3 ; -2) », « v = (3 ; 3) », « M(2 ; 1) » → liste de nombres (2 ou 3), ou null. */
function lireCoupleNb(x) {
  const m = String(x).trim().match(/^(?:[A-Za-z][A-Za-z0-9'_()]{0,5}\s*=\s*)?(?:[A-Z]'?\s*)?\(\s*([^()]+?)\s*\)$/);
  if (!m) return null;
  const parts = m[1].includes(';') ? m[1].split(/\s*;\s*/) : m[1].split(/\s*,\s+/);
  if (parts.length < 2 || parts.length > 3) return null;
  const vals = parts.map((p) => lireNombre(p));
  return vals.every((v) => v && !v.unite) ? vals : null;
}

function lireNombresTous(texte, forme = false) {
  const out = [];
  const t = masquerParentheses(String(texte || '').trim());
  if (forme && !t.includes(';')) return out;
  // « 36/91 ≈ 0,40 » dans une suite : valeur exacte et valeur approchée cohérente → on garde l'une ou l'autre.
  if (!forme && /≈/.test(t) && !/\u0002/.test(t)) {
    for (const garde of [0, 1]) {
      let ok = false;
      const v = demasquer(t).split(/\s*;\s*/).map((p) => {
        const m = p.split(/\s*≈\s*/);
        if (m.length !== 2) return p;
        const a = lireNombre(m[0]), b = lireNombre(m[1]);
        if (!a || !b || !Number.isFinite(a.valeur) || !Number.isFinite(b.valeur)) return p;
        if (a.unite || (b.unite && garde === 0)) return null;
        const tol = 0.5 * 10 ** -(b.decimales || 0) * 1.0001 + 1e-12;
        if (Math.abs(a.valeur - b.valeur) > tol) return null;
        ok = true;
        return m[garde];
      });
      if (ok && v.every((x) => x !== null)) out.push(...lireNombresTous(v.join(' ; '), false).filter((l) => l.length === v.length));
    }
  }
  // Forme écrite à la main : un morceau qui contient lui-même un séparateur de saisie
  // (« non, pas validée », « B et C ») serait mal découpé → on garde la comparaison de phrase.
  if (forme && t.split(/\s*;\s*/).some((x) => /,\s|\s(?:et|puis)\s|±/i.test(x))) return out;
  const essais = forme ? [/\s*;\s*/]
    : [/\s*(?:[;\n±]|\+\/-|,\s+|\s+(?:et|puis|soit)\s+)\s*/i, /\s*(?:[;\n±]|\+\/-|\s+(?:et|puis|soit)\s+)\s*/i,
      // « 7/20 = 0,35 = 35 % » : une même valeur sous plusieurs écritures.
      /\s*(?:[;\n=≈]|,\s+)\s*/];
  for (const sep of essais) {
    const parts = t.split(sep).map((x) => sansPonctuationFinale(demasquer(x).replace(/^(?:soit|donc)\s+/i, '').replace(/^\(?(?:[a-h]|[1-9])\s*(?:\)|\.(?=\s))\s*/i, ''))).filter(Boolean);
    if (parts.length < 2 || parts.length > 6) continue;
    const items = parts.map((x) => {
      if (!forme) {
        // « ×1,496 » (coefficient multiplicateur) ; « hausse de 49,6 % » = « +49,6 % », « baisse de 24,1 % » = « -24,1 % ».
        x = x.replace(/^[×*]\s*(?=\d)/, '')
          .replace(/^(?:une\s+)?(?:hausse|augmentation|augmente)\s+de\s+(?=\d[\d\s,.]*\s*%$)/i, '+')
          .replace(/^(?:une\s+)?(?:baisse|diminution|diminue)\s+de\s+(?=\d[\d\s,.]*\s*%$)/i, '-');
      }
      const cp = lireCoupleNb(x);
      if (cp) return { kind: 'couple', vals: cp };
      const cfg = lireConfig(x);
      if (cfg) return { kind: 'config', c: cfg };
      const f = lireFormule(x);
      if (f) return { kind: 'formule', f };
      // Limite infinie : « +∞ », « -∞ », « +inf », « moins l'infini » (le signe est exigé).
      const inf = x.replace(/^\p{L}[\p{L}0-9'_()]{0,8}\s*=\s*/u, '').match(/^(\+|-|plus|moins)\s*(?:l'\s*)?(?:∞|inf|infini|oo)$/i);
      if (inf) return { kind: 'infini', signe: /^(?:\+|plus)$/i.test(inf[1]) ? '+' : '-' };
      const n = lireNombre(x);
      if (n) return n.motsUnite < 2 ? { kind: 'nombre', ...n } : null;
      // Un chiffre n'est permis que dans un mot seul (« 2-méthylpentane », « B12 »).
      // « D1 », « D_2 » (nom d'une droite, d'un point) : un repère, comparé comme un mot.
      if (/^\p{Lu}_?\d$/u.test(x)) return { kind: 'texte', valeur: x.replace('_', ''), articles: true };
      if (!/\p{L}/u.test(x) || /^[-−–]/.test(x) || /[=<>≤≥×^√∞π/+*·⁻()[\]{}]/.test(x) || (/\d/.test(x) && (/\s/.test(x) || !/\p{L}{3}/u.test(x))) || !compterMots(x) || compterMots(x) > 3) return null;
      return { kind: 'texte', valeur: x, articles: true };
    });
    // « 23,5 ± 0,4 ms » : l'unité écrite à la fin vaut pour la valeur et pour l'incertitude.
    if (!forme && items.length === 2 && /±|\+\/-/.test(t) && items.every((x) => x && x.kind === 'nombre') && !items[0].unite && items[1].unite) {
      items[0] = { ...items[0], unite: items[1].unite };
    }
    if (items.every(Boolean) && items.some((x) => x.kind !== 'texte')) out.push(items);
  }
  return out;
}

/** La saisie donne-t-elle les mêmes réponses, dans le même ordre (unités facultatives, mais justes) ? */
function comparerNombres(saisie, liste, matiere, opts = {}) {
  return lireNombresTous(saisie, false).some((s) => s.length === liste.length && liste.every((att, i) => (att.kind === 'nombre'
    ? s[i].kind === 'nombre' && egalNombre(att, s[i], opts)
    : att.kind === 'formule' ? s[i].kind === 'formule' && s[i].f === att.f
      : att.kind === 'config' ? s[i].kind === 'config' && s[i].c === att.c
      : att.kind === 'couple' ? s[i].kind === 'couple' && s[i].vals.length === att.vals.length && att.vals.every((v, k) => egalNombre(v, s[i].vals[k], opts))
      : att.kind === 'infini' ? s[i].kind === 'infini' && s[i].signe === att.signe
      : s[i].kind === 'texte' && egalTexte(att, s[i].valeur, matiere))));
}

/**
 * Formule brute (« C3H8O », « C₆H₁₂O₆ », « CH4N2O ») → clé « C:3|H:8|O:1 » (ordre des éléments
 * libre, majuscules exigées : « CO » ≠ « Co »), ou null. Pas d'ion, de parenthèse ni de point.
 */
const ELEMENTS = new Set(('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Ti Cr Mn Fe Co Ni Cu Zn Br Ag Sn I Ba Pt Au Hg Pb U').split(' '));
export function lireFormule(texte) {
  let t = String(texte || '').trim()
    .replace(/[₀-₉]/g, (c) => String(c.charCodeAt(0) - 0x2080))
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => String('⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)))
    .replace(/⁺/g, '+').replace(/[⁻−–]/g, '-')
    .replace(/(\+{2,}|-{2,})$/, (x) => x.length + x[0]); // « Mg++ » = « Mg2+ »
  // Ion : charge écrite à la fin (« Na+ », « Mg2+ », « Mg²⁺ », « O2- » = O²⁻, « SO4 2- »).
  let charge = 0;
  const q = t.match(/^(.*?[A-Za-z\d)])\s*\^?\s*\{?\s*(\d?)\s*([+-])\s*\}?$/);
  if (q) {
    charge = (q[3] === '+' ? 1 : -1) * (q[2] ? Number(q[2]) : 1);
    if (!charge) return null;
    t = q[1];
  }
  if (!/^(?:[A-Z][a-z]?\d*)+$/.test(t) || (!charge && !/\d/.test(t))) return null;
  const compo = {};
  for (const [, el, n] of t.matchAll(/([A-Z][a-z]?)(\d*)/g)) {
    if (!ELEMENTS.has(el) || n === '0' || /^0/.test(n) || n === '1') return null;
    compo[el] = (compo[el] || 0) + (n ? Number(n) : 1);
  }
  return Object.keys(compo).sort().map((k) => `${k}:${compo[k]}`).join('|') + (charge ? `|q:${charge}` : '');
}

/** Configuration électronique (« 1s2 2s2 2p6 3s1 », « 1s² 2s² 2p⁶ 3s¹ ») → clé « 1s22s22p63s1 », ou null. */
export function lireConfig(texte) {
  const t = String(texte || '').trim()
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => String('⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)))
    .replace(/\^\s*\{?\s*(\d+)\s*\}?/g, '$1');
  if (!/^(?:\d[spdf]\d{1,2}\s*)+$/.test(t)) return null;
  return t.replace(/\s+/g, '');
}

/** Clé d'une phrase : comme cleTexte, sans la ponctuation intérieure. */
function clePhrase(s, opts) {
  const t = protegerNombres(nettoyer(s))
    .replace(/\s*(?:->|=>|⇒|→|⟶)\s*/g, ' ') // flèches = séparateurs (« a → b » = « a, b »)
    .replace(/\s*\/\s*/g, ' ') // « des / der » = « des/der » = « des der » (sauf fractions, déjà protégées)
    .replace(/\s*≤\s*/g, '<=').replace(/\s*≥\s*/g, '>=');
  return cleTexte(t.replace(/[,;:!?.]/g, ' '), opts);
}

/** Découpe une énumération saisie par l'élève (virgules, « et », « ; », « / », retours). */
function elements(saisie) {
  // D'abord les séparateurs sûrs, puis « et / and / und / y / e » seulement à l'intérieur d'un
  // morceau de plusieurs mots (une liste de voyelles « a, e, i » garde son « e »).
  // « 0,5 » (virgule entre deux chiffres) et « π/6 », « 3/4 » (barre devant un chiffre) ne coupent pas.
  return nettoyer(saisie)
    .split(/\s*(?:(?<!\d),|,(?!\d)|[;\n]|\/(?!\s*\d))\s*/)
    .flatMap((m) => (/\s/.test(m.trim()) ? m.split(/\s+(?:et|and|und|y|e)\s+/iu) : [m]))
    .map((x) => sansPonctuationFinale(x).replace(/^\(?([a-hA-H])\)$/, '$1'))
    .filter((x) => /[\p{L}\p{N}]/u.test(x));
}

/**
 * Analyse un exercice : formes acceptées d'attendus.json si présentes, sinon la
 * réponse elle-même. @returns {{type:'auto'|'ouverte', alternatives:Array, ensemble?:string[]}}
 */
export function analyserExercice(ex, matiere = null) {
  const att = ex && ex.attendu;
  if (att && Array.isArray(att.ensemble) && att.ensemble.length >= 2) {
    const items = att.ensemble.map((x) => sansDollars(nettoyer(x))).filter(Boolean);
    if (items.length === att.ensemble.length) return { type: 'auto', alternatives: [], ensemble: items };
  }
  if (att && Array.isArray(att.accepte) && att.accepte.length) {
    // Une seule forme « +∞ » ou « -∞ » : le signe est exigé (« -inf », « moins l'infini » acceptés).
    const inf = att.accepte.length === 1 && att.accepte[0].trim().match(/^([+-])\s*∞$/);
    if (inf && !LANGUES.has(matiere)) return { type: 'auto', alternatives: [{ kind: 'autre', autre: { kind: 'infini', signe: inf[1] } }] };
    // Une seule forme, qui est un intervalle ou une réunion (« ]0 ; 6] ») : bornes et crochets comparés.
    if (att.accepte.length === 1 && !LANGUES.has(matiere) && /^\s*[\[\]]|∪/.test(att.accepte[0])) {
      const iv = analyserAutre({ enonce: ex.enonce || '', reponse: `$${att.accepte[0].replace(/∪/g, '\\cup ').replace(/∞/g, '\\infty ')}$` });
      if (iv && iv.kind === 'intervalle') return { type: 'auto', alternatives: [{ kind: 'autre', autre: iv }] };
    }
    // Une seule forme, qui est une équation de réaction (« H2O2 + 2 H^+ + 2 Fe^2+ -> 2 H2O + 2 Fe^3+ ») ou une
    // demi-équation (« Ag^+ + e^- = Ag ») : mêmes espèces, mêmes nombres stœchiométriques.
    if (att.accepte.length === 1 && !LANGUES.has(matiere) && /->|→|\be\^-/.test(att.accepte[0])) {
      const reac = analyserAutre({ enonce: ex.enonce || '', reponse: `$${att.accepte[0].replace(/->|→/, '\\longrightarrow ')}$` });
      if (reac && reac.kind === 'reaction') return { type: 'auto', alternatives: [{ kind: 'autre', autre: reac }] };
    }
    // Une seule forme, qui est une expression ou une équation (« 1/sqrt(x) - 3/x^2 ») : comparée par calcul.
    if (att.accepte.length === 1 && !LANGUES.has(matiere) && !analyserForme(att.accepte[0], matiere)) {
      const c = analyserCalculForme(ex, att.accepte[0]);
      if (c) return { type: 'auto', alternatives: [{ kind: 'calcul', calcul: c }] };
    }
    const alts = att.accepte.map((f) => analyserForme(f, matiere));
    if (alts.every(Boolean)) {
      // Formes de la réponse d'origine, si elle était déjà vérifiable : on les garde aussi.
      const base = analyser(ex.reponse, matiere);
      return { type: 'auto', alternatives: [...alts, ...(base.type === 'auto' ? base.alternatives : [])] };
    }
  }
  // Une grille d'idées (réponse à expliquer) l'emporte : l'élève coche les idées de sa réponse.
  if (ex && Array.isArray(ex.criteres) && ex.criteres.length) return { type: 'ouverte', alternatives: [] };
  const base = analyser(ex && ex.reponse, matiere);
  // « Corrige l'erreur : heute ist sonntag. » → « Heute ist Sonntag. » : phrase recopiée corrigée.
  if (base.type !== 'auto') {
    const classe = analyserClassement(ex, matiere);
    if (classe) return { type: 'auto', alternatives: [classe] };
    const corr = analyserCorrection(ex, matiere);
    if (corr) return { type: 'auto', alternatives: [corr] };
  }
  if (LANGUES.has(matiere)) return base;
  // « ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He », « ¹⁴₇N » : noyaux (A, Z, symbole), ordre des produits libre.
  const noyaux = analyserNoyaux(ex);
  if (noyaux) return { type: 'auto', alternatives: [noyaux] };
  // « Décroissante puis croissante ; minimum f(3) = -4 » : sens de variation et extremums.
  const varia = analyserVariations(ex);
  if (varia) return { type: 'auto', alternatives: [varia] };
  // « Décompose 3 896 » → « 3 000 + 800 + 90 + 6 » ; « Décompose 360 en produit de facteurs premiers ».
  const deco = analyserDecomposition(ex);
  if (deco) return { type: 'auto', alternatives: [deco] };
  // « Donner la formule brute » → « $\mathrm{C_3H_6O_2}$ » : mêmes atomes, en même nombre.
  const fb = formuleBruteAttendue(ex);
  if (fb) return { type: 'auto', alternatives: [{ kind: 'formule', f: fb }] };
  // « Écris 4,6 sous forme d'une fraction décimale » : l'écriture compte (« 4,6 » recopié ne suffit pas).
  const fraction = analyserFraction(ex);
  if (fraction) return { type: 'auto', alternatives: [{ kind: 'exacte', exacte: fraction }] };
  // Expression ou équation (« 6x + 8 », « f'(x) = 3x² − 2 », « 2x + 5y + 4 = 0 ») : comparée par calcul.
  const calcul = analyserCalcul(ex);
  if (calcul) return { type: 'auto', alternatives: [{ kind: 'calcul', calcul }] };
  // Valeur exacte (« 2⁸ », « 6√2 »), vecteurs de base (« -2i + 7j »), écriture simplifiée (« x² »).
  const exacte = base.type !== 'auto' || valeurLitterale(ex && ex.reponse) ? analyserExacte(ex) : null;
  if (exacte) return { type: 'auto', alternatives: [{ kind: 'exacte', exacte }] };
  // Intervalle, coordonnées, équation de réaction chimique.
  const autre = base.type !== 'auto' || valeurLitterale(ex && ex.reponse) ? analyserAutre(ex) : null;
  if (autre) return { type: 'auto', alternatives: [{ kind: 'autre', autre }] };
  // « E = 3(2x + 5) » ou « -2i » ne sont pas des nombres : ne pas accepter « 3 » ou « -2 ».
  if (base.type === 'auto' && valeurLitterale(ex && ex.reponse)) return { type: 'ouverte', alternatives: [] };
  return base;
}

// ─── Variations (sens de variation, extremums) ──────────────────────────────

/** Texte sans LaTeX, sans accents, en minuscules ; nombres « 0,5 » → « 0.5 ». */
function texteVariations(t) {
  return sansAccents(String(t || '').toLowerCase())
    .replace(/\\(?:left|right|displaystyle)\b/g, '').replace(/\\infty|∞/g, 'inf').replace(/\{,\}/g, ',').replace(/\\[,;: !]/g, ' ')
    .replace(/[$]/g, ' ').replace(/[−–]/g, '-').replace(/(\d),(\d)/g, '$1.$2').replace(/\s+/g, ' ');
}

/** { sens: 'DC…', bornes: [nombres des intervalles], ext: [{ t, x, y }] } ou null. */
function lireVariations(t) {
  const x0 = texteVariations(t);
  const k = x0.search(/\b(?:minimum|maximum|min|max)\b/);
  const debut = k < 0 ? x0 : x0.slice(0, k);
  const sens = [...debut.matchAll(/\b(?:decroissante|decroit|decroissant|croissante|croit|croissant|constante)\b/g)]
    .map((m) => (m[0].startsWith('decr') ? 'D' : m[0].startsWith('const') ? 'K' : 'C')).join('');
  const nombre = /-?\d+(?:\.\d+)?/g;
  const bornes = [...debut.replace(/f\s*\([^()]*\)/g, ' ').matchAll(nombre)].map((m) => Number(m[0]));
  const ext = [];
  if (k >= 0) {
    for (const seg of x0.slice(k).split(/(?=\b(?:minimum|maximum|min|max)\b)/)) {
      const t1 = seg.match(/^(minimum|maximum|min|max)\b/);
      if (!t1) continue;
      let reste = seg.slice(t1[0].length).replace(/\blocal\b/, ' ');
      let x = null;
      const fx = reste.match(/f\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)/);
      if (fx) { x = Number(fx[1]); reste = reste.replace(fx[0], ' '); }
      const en = reste.match(/\b(?:atteint\s+)?(?:en|pour|a)\s+(?:x\s*=\s*)?(-?\d+(?:\.\d+)?)/);
      if (en) { const v = Number(en[1]); if (x != null && v !== x) return null; x = v; reste = reste.replace(en[0], ' '); }
      const ys = [...reste.matchAll(nombre)];
      if (!ys.length || /[a-z]{2,}\s*\(|\be\b|pi|sqrt|\//.test(reste.split(/[;,]/)[0])) return null;
      ext.push({ t: t1[1].startsWith('min') ? 'min' : 'max', x, y: Number(ys[0][0]) });
    }
  }
  return sens ? { sens, bornes, ext } : null;
}

/** Exercice « Étudier les variations … et préciser l'extremum » dont la réponse ne contient que cela. */
function analyserVariations(ex) {
  if (!ex || typeof ex.enonce !== 'string' || typeof ex.reponse !== 'string') return null;
  const e = sansAccents(ex.enonce.toLowerCase());
  if (!/variation|extremum|minimum|maximum/.test(e) || /montr|justifi|limite|calculer f'|derivee|convexit|interpret/.test(e)) return null;
  const r = ex.reponse;
  if (/f'|f''|\\lim|\\approx|≈|e\^|\\mathrm\{e\}|\\pi|\\dfrac|\\frac|\\sqrt|\bcomme\b/i.test(r)) return null;
  const v = lireVariations(r);
  if (!v || v.sens.length < 2 || !v.ext.length) return null;
  return { kind: 'variations', v };
}

function egalVariations(saisie, alt) {
  const s = lireVariations(saisie);
  if (!s || s.sens !== alt.v.sens || s.ext.length !== alt.v.ext.length) return false;
  // Les bornes écrites par l'élève (intervalles) doivent être celles de la réponse.
  if (!s.bornes.every((b) => alt.v.bornes.includes(b) || alt.v.ext.some((x) => x.x === b))) return false;
  return alt.v.ext.every((x, i) => s.ext[i].t === x.t && Math.abs(s.ext[i].y - x.y) < 1e-9 && (x.x == null || (s.ext[i].x != null && Math.abs(s.ext[i].x - x.x) < 1e-9)));
}

// ─── Décompositions (somme de termes, produit de facteurs premiers) ───────────

/** « 3\,000 + \dfrac{7}{10} » (LaTeX) ou « 3000 + 7/10 » (saisie) → texte simple. */
function texteDecomposition(t, latex) {
  let x = String(t || '');
  if (latex) {
    x = x.replace(/^\s*\$|\$\s*\.?\s*$/g, '').replace(/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '$1/$2')
      .replace(/\\times|\\cdot/g, '×').replace(/\^\{([^{}]*)\}/g, '^$1').replace(/\{,\}/g, ',').replace(/\\[,;: !]/g, '');
    if (/\\/.test(x)) return null;
  }
  return x.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (d) => '^' + [...d].map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).join(''))
    .replace(/[*·∙⋅]|(?<=\d)\s*[xX]\s*(?=\d)/g, '×').replace(/[−–]/g, '-')
    .replace(/(\d)[\s  ]+(?=\d{3}\b)/g, '$1').replace(/\s+/g, ' ').trim();
}

/** Valeur d'un terme « 3000 », « 7/10 », « 4 × 1000 », « 2,5 » ; null si illisible. */
function valeurTerme(t) {
  const f = t.split('×').map((x) => x.trim());
  let v = 1;
  for (const x of f) {
    const m = x.match(/^(\d+(?:[.,]\d+)?)(?:\/(\d+))?$/);
    if (!m) return null;
    v *= Number(m[1].replace(',', '.')) / (m[2] ? Number(m[2]) : 1);
  }
  return v;
}

/** Clé d'un terme : nombres sans zéros inutiles, facteurs triés (« 1000 × 4 » = « 4 × 1000 »). */
function cleTerme(t) {
  return t.split('×').map((x) => x.trim().replace(',', '.').replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '')).sort().join('×');
}

/** « 2^3 × 3^2 × 5 » → [2, 2, 2, 3, 3, 5] ; null si un facteur n'est pas un nombre premier. */
function facteursPremiers(t) {
  const out = [];
  for (const x of t.split('×').map((y) => y.trim())) {
    const m = x.match(/^(\d+)(?:\^\(?(\d+)\)?)?$/);
    if (!m) return null;
    const p = Number(m[1]);
    const k = m[2] ? Number(m[2]) : 1;
    if (p < 2 || k < 1 || k > 30) return null;
    for (let d = 2; d * d <= p; d++) if (p % d === 0) return null;
    for (let i = 0; i < k; i++) out.push(p);
  }
  return out.sort((a, b) => a - b);
}

/** « Décompose … » : la décomposition attendue (termes dans n'importe quel ordre), ou null. */
function analyserDecomposition(ex) {
  if (!ex || typeof ex.enonce !== 'string' || typeof ex.reponse !== 'string') return null;
  const e = sansAccents(ex.enonce.toLowerCase());
  if (!/decompos|entier plus une fraction|somme d'un (?:nombre )?entier et d'une fraction/.test(e)) return null;
  if (/justifi|explique|puis|en deduire|nombre de diviseurs/.test(e)) return null;
  const r = ex.reponse.trim();
  if (!/^\$[^$]+\$\s*\.?$/.test(r)) return null;
  const t = texteDecomposition(r, true);
  if (!t) return null;
  const cotes = t.split('=').map((x) => x.trim());
  if (cotes.length > 2) return null;
  const droite = cotes[cotes.length - 1];
  const gauche = cotes.length === 2 ? valeurTerme(cotes[0]) : null;
  if (/premier/.test(e)) {
    const f = facteursPremiers(droite);
    if (!f || f.length < 2) return null;
    return { kind: 'decomposition', premiers: f.join('×'), total: f.reduce((a, b) => a * b, 1) };
  }
  const termes = droite.split('+').map((x) => x.trim());
  if (termes.length < 2 || termes.some((x) => valeurTerme(x) == null)) return null;
  const total = termes.reduce((a, x) => a + valeurTerme(x), 0);
  if (gauche != null && Math.abs(gauche - total) > 1e-9) return null;
  // « avec des entiers et des fractions décimales » : la partie entière peut s'écrire d'un bloc (12) ou par rangs (10 + 2).
  const entiers = /fractions? decimales?/.test(e);
  return { kind: 'decomposition', termes: cleTermes(termes, entiers), total, entiers };
}

function cleTermes(termes, entiers) {
  if (!entiers) return termes.map(cleTerme).sort().join('+');
  const ent = termes.filter((x) => /^\d+$/.test(x)).reduce((a, x) => a + Number(x), 0);
  return [...(ent ? [String(ent)] : []), ...termes.filter((x) => !/^\d+$/.test(x)).map(cleTerme).sort()].join('+');
}

function egalDecomposition(saisie, alt) {
  const t = texteDecomposition(saisie, false);
  if (!t) return false;
  const cotes = t.split('=').map((x) => x.trim());
  if (cotes.length > 2) return false;
  // « 360 = 2^3 × 3^2 × 5 » : le nombre de gauche, s'il est écrit, doit être le bon.
  if (cotes.length === 2) { const g = valeurTerme(cotes[0]); if (g == null || Math.abs(g - alt.total) > 1e-9) return false; }
  const droite = cotes[cotes.length - 1];
  if (alt.premiers) { const f = facteursPremiers(droite); return !!f && f.join('×') === alt.premiers; }
  const termes = droite.split('+').map((x) => x.trim());
  if (termes.some((x) => valeurTerme(x) == null)) return false;
  return cleTermes(termes, alt.entiers) === alt.termes;
}

// ─── Classements (« Sauvages : lion, wolf ; Ferme : cow, horse ») ─────────────

/** Article étranger en tête d'un élément (« el pan » = « pan », « der Hund » = « Hund »). */
function sansArticle(x) {
  return String(x).replace(/^(?:el|la|los|las|un|una|der|die|das|ein|eine|the|a|an|il|lo|gli|i|le|l')\s+/i, '').replace(/^l'/, '');
}

/** « A : x, y ; B : z » → [{ label, items }] ; null si la forme n'est pas celle d'un classement. */
function lireClassement(t, avecLabels) {
  const groupes = String(t || '').replace(/\s*\n\s*/g, ' ; ').replace(/\s+/g, ' ').trim().replace(/\.$/, '')
    // Associations : « x → y », « x = y », « a-2 » s'écrivent comme « x : y ».
    .replace(/\s*(?:→|->|=>|⟶)\s*|\s+=\s+/g, ' : ').replace(/(^|[;,]\s*)([a-h])\s*-\s*(\d)\b/g, '$1$2 : $3')
    .split(avecLabels ? /\s*(?:;|\n|\.\s+(?=[^:;,.]{1,40}:))\s*/ : /\s*(?:;|\n|\.\s+(?=[^:;,.]{1,40}:)|,\s*(?=[^,;:.]{1,40}:))\s*/).filter(Boolean);
  if (groupes.length < 2 || groupes.length > 6) return null;
  const out = [];
  for (const g of groupes) {
    const m = g.match(/^([^:]{1,40}?)\s*:\s*(.+)$/);
    if (avecLabels && !m) return null;
    const items = (m ? m[2] : g).split(/\s*,\s*|\s+(?:et|and|und|y|e)\s+/i).map((x) => x.trim().replace(/\.$/, '')).filter(Boolean);
    if (!items.length) return null;
    out.push({ label: m ? m[1].trim() : '', items });
  }
  return out;
}

/** « Classe ces mots … » : groupes et éléments attendus, ou null. */
function analyserClassement(ex, matiere) {
  if (!ex || typeof ex.enonce !== 'string' || typeof ex.reponse !== 'string') return null;
  const e = ex.enonce;
  const association = /^(?:Associe|Relie|Fais correspondre)\b|\b(?:associe|relie) chaque\b/i.test(e) && !/\brelie (?:avec|ces|les)\b/i.test(e);
  if (!association && !/^(?:Classe|Range|Trie|Répartis|Sépare|Regroupe)\b|\b(?:classe|range) ces\b/i.test(e)) return null;
  if (/justifi|explique|pourquoi|puis\b|ajoute|donne un exemple/i.test(e)) return null;
  const r = ex.reponse.trim();
  if (/[$()\/…`]|exemple|\bou\b/i.test(r) || (!association && /→/.test(r))) return null;
  const groupes = lireClassement(r, true);
  if (!groupes) return null;
  if (association && groupes.some((g) => g.items.length !== 1)) return null;
  const tous = groupes.flatMap((g) => g.items);
  if (tous.length > 14 || tous.some((x) => x.split(' ').length > 5)) return null;
  // Chaque élément doit être un élément de la liste de l'énoncé, recopié en entier (ni abrégé, ni inventé),
  // ou la lettre d'un élément (« a) voter ; b) manifester » → « a et e »).
  const plat = (x) => sansArticle(cleTexte(x, { articles: true, ignorerAccents: true, espaces: true }));
  const liste = e.replace(/\([^()]*\)\s*\.?\s*$/, '').split(':').slice(1).join(':').replace(/[«»"*]/g, ' ')
    .split(/\s*[,;/—–→]\s*|\s+et\s+|\s*\(?\b[a-h1-9]\)\s*|\s*\b(?:Définitions|Rôles|Fonctions|Coûts proposés)\s*:\s*/i).map(plat).filter(Boolean);
  const reperes = new Set([...e.matchAll(/(?:^|[\s;:,(])([a-h1-9])\)/g)].map((m) => m[1]));
  const connu = (x) => liste.includes(plat(x)) || (/^[a-h1-9]$/.test(x) && reperes.has(x));
  if (!tous.every(connu)) return null;
  // Association : chaque élément de gauche est aussi un élément de l'énoncé ; on les reconnaît par leur nom.
  if (association && !groupes.every((g) => connu(g.label))) return null;
  const strict = ACCENTS_STRICTS.has(matiere);
  return { kind: 'classement', groupes, strict, association };
}

function egalClassement(saisie, alt) {
  const lu = lireClassement(saisie, false);
  if (!lu || lu.length !== alt.groupes.length) return false;
  const cle = (x) => sansArticle(cleTexte(x, { articles: true, ignorerAccents: !alt.strict, espaces: true }));
  const ensemble = (items) => items.map(cle).sort().join('|');
  const lab = (x) => cleTexte(x, { articles: true, ignorerAccents: true });
  // Groupes reconnus par leur nom (dans n'importe quel ordre), sinon pris dans l'ordre de la réponse attendue.
  const parNom = alt.groupes.map((g) => lu.find((h) => h.label && (lab(h.label) === lab(g.label) || lab(h.label).startsWith(lab(g.label)) || lab(g.label).startsWith(lab(h.label)))));
  const nommes = parNom.every(Boolean) && new Set(parNom).size === parNom.length;
  if (alt.association && !nommes) return false;
  const choix = nommes ? parNom : lu;
  return alt.groupes.every((g, i) => ensemble(choix[i].items) === ensemble(g.items));
}

/** La saisie redonne-t-elle la phrase corrigée attendue ? */
function egalCorrection(saisie, alt) {
  const s = phraseCorrection(saisie, alt.matiere);
  if (s === alt.valeur) return true;
  return !!alt.initiale && s.charAt(0).toLowerCase() === alt.valeur.charAt(0) && s.slice(1) === alt.valeur.slice(1);
}

/** Phrase normalisée pour une correction : espaces, apostrophes, guillemets ; point final facultatif. */
function phraseCorrection(t, matiere = null) {
  let x = String(t || '').normalize('NFC').replace(/[’ʼ`]/g, "'");
  // Anglais : formes contractées = formes pleines (« doesn't » = « does not », « I'm » = « I am »).
  if (matiere === 'anglais') {
    x = x.replace(/\b([Ww])on't\b/g, '$1ill not').replace(/\b([Cc])an't\b/g, '$1an not').replace(/\b([Cc])annot\b/g, '$1an not')
      .replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ll\b/g, ' will').replace(/'ve\b/g, ' have');
  }
  return x
    .replace(/[’ʼ`]/g, "'").replace(/[«»“”"*]/g, ' ')
    .replace(/\s+([!?;:.,])/g, '$1').replace(/([¿¡])\s+/g, '$1')
    .replace(/\s+/g, ' ').trim().replace(/\.$/, '').trim();
}

const CONSIGNE_CORRECTION = /\b(?:corrige[rz]?|r[ée]{1,2}cris correctement|recopie (?:correctement|en corrigeant)|ajoute la ponctuation|choisis la bonne orthographe|complète avec|mets (?:au|à l'|à la|en) (?:pluriel|singulier|féminin|masculin|comparatif|superlatif|présent|passé composé|imparfait|futur|prétérit)|r[ée]{1,2}cris (?:la phrase |ce texte |cette phrase )?(?:au |à l'|à la forme négative|avec les (?:bonnes )?majuscules|en remplaçant)|mets à la forme négative|mets les verbes (?:au|à l')|mets les points|recopie et mets le bon point)/i;
// Transformations mécaniques (temps, nombre, remplacement d'un sujet) : plusieurs mots changent, mais de façon réglée.
const CONSIGNE_TRANSFORMATION = /\bmets (?:les verbes )?(?:au|à l')|\br[ée]{1,2}cris (?:la phrase |ce texte |cette phrase )?(?:au |à l'|en remplaçant)/i;
// Réécritures à plusieurs bonnes réponses (style, discours indirect, tournures) : jamais comparées à l'identique.
const CONSIGNE_LIBRE = /explique|justifie|pourquoi|pr[ée]cise|nomme|indique|registre|soutenu|neutre|indirect|concession|théâtre|récit|synonyme|nominalstil|biographie|question|exclamati|conjugue|tradui/i;

/**
 * Exercice de correction d'une phrase (langues, français) : « Corrige l'erreur : « Tomorrow is
 * monday. » » → « Tomorrow is Monday. ». La phrase corrigée est unique quand elle ne diffère de la
 * phrase fautive que de quelques mots (au plus 3) : on l'exige alors à l'identique (majuscules,
 * accents, ponctuation ; seul le point final est facultatif). Renvoie l'alternative, ou null.
 */
function analyserCorrection(ex, matiere) {
  if (!ex || !(LANGUES.has(matiere) || matiere === 'francais') || matiere === 'langues-anciennes') return null;
  const e = String(ex.enonce || '').normalize('NFC');
  const r = String(ex.reponse || '').trim().normalize('NFC');
  if (!CONSIGNE_CORRECTION.test(e) || CONSIGNE_LIBRE.test(e)) return null;
  if (!r || r.length > 160 || /[$();/\n]|exemple|\bou\b|…|\.\.\./i.test(r)) return null;
  // « je suis allé » : la fille qui écrit « je suis allée » a juste aussi.
  if (/\b(?:je|j'|tu)\s*(?:suis|es|serai|seras|étais|était|serais|serait|sois)\b/i.test(r)) return null;
  // Phrase de départ : celle qui contient « ___ », sinon la dernière entre « », entre *…*, ou après les deux-points.
  const guill = [...e.matchAll(/«\s*([^«»]+?)\s*»/g)].map((x) => x[1]);
  const trou = e.split(/:\s*/).reverse().find((x) => /_{2,}/.test(x));
  const depart = trou || guill[guill.length - 1] || (e.match(/\*([^*]+)\*/) || [])[1] || (e.match(/:\s*([^:]+)$/) || [])[1];
  if (!depart) return null;
  // (Distance mesurée sur les formes écrites, contractions comprises : « goes » → « doesn't go ».)
  const fautive = phraseCorrection(depart).split(' ');
  const juste = phraseCorrection(r).split(' ');
  if (juste.length > 20 || juste.join(' ') === fautive.join(' ')) return null;
  // Abréviation (« D.C. ») : plusieurs écritures possibles.
  if (/\p{L}\.\p{L}/u.test(r)) return null;
  // Distance d'édition en mots : au plus 4 mots touchés, dont au plus 2 vrais changements de mot
  // (une majuscule, un accent ou une ponctuation corrigés ne comptent pas comme un autre mot).
  const brut = (w) => sansAccents(w.toLowerCase()).replace(/[^\p{L}\p{N}']/gu, '');
  const distance = (egal) => {
    const d = Array.from({ length: fautive.length + 1 }, (_, i) => [i, ...Array(juste.length).fill(0)]);
    for (let j = 1; j <= juste.length; j++) d[0][j] = j;
    for (let i = 1; i <= fautive.length; i++) {
      for (let j = 1; j <= juste.length; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (egal(fautive[i - 1], juste[j - 1]) ? 0 : 1));
      }
    }
    return d[fautive.length][juste.length];
  };
  if (CONSIGNE_TRANSFORMATION.test(e)) {
    // Chaque mot changé garde son radical (« grimpe » → « grimpent », « il » → « ils ») ; au plus 2 autres changements.
    const voisin = (x, y) => { const a = brut(x); const b = brut(y); return a === b || (a.length <= 3 && b.length <= 3) || (a.length >= 3 && b.startsWith(a.slice(0, 3))); };
    if (distance(voisin) > 2) return null;
  } else if (distance((x, y) => x === y) > 4 || distance((x, y) => brut(x) === brut(y)) > 2) return null;
  // Fragment en minuscule non corrigé (« la loro casa », « der Kopf und die Nase ») : majuscule initiale permise.
  const initiale = /^\p{Ll}/u.test(juste[0]) && fautive[0][0] === juste[0][0];
  return { kind: 'correction', valeur: phraseCorrection(r, matiere), matiere, initiale };
}

/** Formule LaTeX « \mathrm{C_{12}H_{22}O_{11}} », « \mathrm{Mg}^{2+} » → clé de lireFormule, ou null. */
function formuleLatex(m) {
  const c = String(m)
    .replace(/\\mathrm\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1')
    .replace(/[_^]\s*\{([^{}]*)\}/g, '$1').replace(/[_^]/g, '').replace(/\s+/g, '');
  return /[\\{}]/.test(c) ? null : lireFormule(c);
}

/**
 * Exercice « Donner la formule brute de … » ou « Quel ion … » dont la réponse est une formule
 * seule (« $\mathrm{C_3H_6O_2}$ », « $\mathrm{Mg}^{2+}$ »), non recopiée de l'énoncé.
 */
function formuleBruteAttendue(ex) {
  if (!ex || typeof ex.reponse !== 'string' || typeof ex.enonce !== 'string') return null;
  const m = ex.reponse.trim().match(/^\$\s*(\\mathrm\s*\{[^$]*\}(?:\s*\^\s*\{[^{}$]*\})?)\s*\$\s*\.?$/);
  if (!m) return null;
  const f = formuleLatex(m[1]);
  if (!f) return null;
  const e = sansAccents(ex.enonce.toLowerCase());
  const ion = /\|q:/.test(f);
  if (ion ? !/\bions?\b/.test(e) : !/formule (?:brute|moleculaire)/.test(e)) return null;
  for (const q of ex.enonce.matchAll(/\$([^$]*)\$/g)) if (formuleLatex(q[1]) === f) return null;
  return f;
}

/** 'auto' ou 'ouverte' pour un exercice (en tenant compte d'attendus.json). */
export function typeExercice(ex, matiere = null) {
  return analyserExercice(ex, matiere).type;
}

/** Unité à afficher dans le champ de saisie d'un exercice, ou ''. */
export function uniteExercice(ex, matiere = null) {
  const a = analyserExercice(ex, matiere);
  if (a.type !== 'auto' || a.ensemble) return '';
  const nbs = a.alternatives.filter((x) => x.kind === 'nombre');
  // On n'affiche l'unité que si toutes les formes numériques ont la même.
  if (!nbs.length || nbs.length !== a.alternatives.length || new Set(nbs.map((x) => x.unite)).size !== 1) return '';
  if (ex.attendu && ex.attendu.accepte) {
    const texte = sansDollars(nettoyer(ex.attendu.accepte[0])) || '';
    const m = texte.match(/[\d)]\s*([A-Za-zÀ-ÿµΩ°%€][^()]*?)\s*[.]?$/);
    return m ? m[1].trim() : nbs[0].unite;
  }
  return uniteAttendue(ex.reponse, matiere);
}

/** Indication à afficher sous le champ quand l'élève doit citer plusieurs éléments. */
export function consigneExercice(ex, matiere = null) {
  const a = analyserExercice(ex, matiere);
  if (a.ensemble) return `${a.ensemble.length} éléments, séparés par des virgules`;
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'variations') return 'le sens de variation puis l\'extremum, par ex. décroissante puis croissante ; minimum f(3) = -4';
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'classement') return `${a.alternatives[0].groupes.length} groupes, par ex. « ${a.alternatives[0].groupes.map((g) => `${g.label} : …`).join(' ; ')} »`;
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'decomposition') return a.alternatives[0].premiers ? 'un produit de facteurs premiers, par ex. 2^3 × 3 × 5' : 'une somme, par ex. 3000 + 800 + 6 (ordre libre ; fractions : 7/10)';
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'noyaux') return consigneNoyaux(a.alternatives[0]);
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'correction') return 'la phrase corrigée en entier (majuscules, accents et ponctuation comptent)';
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'autre') return consigneAutre(a.alternatives[0].autre);
  if (a.alternatives && a.alternatives[0] && a.alternatives[0].kind === 'exacte') return consigneExacte(a.alternatives[0].exacte);
  const nbs = a.alternatives && a.alternatives.find((x) => x.kind === 'nombres');
  if (nbs) return `${nbs.liste.length} réponses dans l'ordre, séparées par « ; »`;
  const math = a.alternatives && a.alternatives.find((x) => x.kind === 'math');
  if (math) return consigneSuite(math.suite);
  const c = a.alternatives && a.alternatives[0] && a.alternatives[0].calcul;
  if (!c) return '';
  if (c.forme === 'eq') return 'une équation, par ex. 2x + 3y - 1 = 0';
  if (c.complexe) return 'sous la forme a + bi (i² = -1), par ex. 3 - 2i';
  if (c.regle === 'developpe') return 'forme développée et réduite, par ex. 3x^2 - 5x + 2';
  if (c.regle === 'factorise') return 'forme factorisée, par ex. 2(x + 1)(x - 3)';
  if (c.regle === 'canonique') return 'forme canonique, par ex. 2(x - 1)^2 + 3';
  return 'une expression, par ex. 3x^2 - 2 ou (x + 1)/(x - 2) — x² ou x^2, √ ou sqrt, e^x, ln x';
}

/**
 * Pourquoi une saisie est refusée, quand on le sait : 'forme' = l'expression est égale
 * à la bonne réponse mais pas écrite sous la forme demandée (développée, factorisée…).
 */
export function diagnosticExercice(saisie, ex, matiere = null) {
  const a = analyserExercice(ex, matiere);
  const c = a.type === 'auto' && a.alternatives.length === 1 && a.alternatives[0].calcul;
  if (!c) return null;
  const r = comparerCalcul(saisie, c);
  return r.juste ? null : r.raison || null;
}

/** La saisie de l'élève est-elle juste pour cet exercice ? */
export function comparerExercice(saisie, ex, matiere = null) {
  const s = nettoyer(saisie);
  if (!s) return false;
  const a = analyserExercice(ex, matiere);
  if (a.type === 'auto' && a.alternatives.length && a.alternatives[0].kind === 'calcul') return comparerCalcul(saisie, a.alternatives[0].calcul).juste;
  if (a.type === 'auto' && a.alternatives.length && a.alternatives[0].kind === 'autre') return comparerAutre(saisie, a.alternatives[0].autre);
  if (a.type === 'auto' && a.alternatives.length && a.alternatives[0].kind === 'exacte') return comparerExacte(s, a.alternatives[0].exacte, { modulo: moduloAngle(ex) });
  // Phrase corrigée : comparée telle quelle (les ¿ ¡ espagnols comptent, la saisie n'est pas « nettoyée »).
  if (a.type === 'auto' && a.alternatives.length && a.alternatives[0].kind === 'correction') return egalCorrection(saisie, a.alternatives[0]);
  // Classement écrit sur plusieurs lignes : les retours à la ligne séparent les groupes.
  if (a.type === 'auto' && a.alternatives.length && a.alternatives[0].kind === 'classement' && /\n/.test(saisie) && egalClassement(String(saisie).trim(), a.alternatives[0])) return true;
  // Évolution (« Une baisse de 25 % ») : le sens donné par l'élève doit être le bon.
  if (!LANGUES.has(matiere) && !sensCompatible(s, ex)) return false;
  // « S = {1 ; 2} » : l'ensemble des solutions peut être précédé de « S = ».
  if (comparerUne(s, ex, matiere)) return true;
  // « S = {1 ; 2} », « f(-2) = 15 », « x = 3 ou x = -5 » : on retire les « nom = » devant les valeurs.
  const sansNoms = s.replace(/(^|[\s;,(]|\bou\b|\bet\b)\s*\p{L}[\p{L}0-9'_]{0,5}(?:\([^()=]{0,6}\))?\s*[=≈]\s*(?!=)/gu, '$1 ').replace(/\s+/g, ' ').trim();
  if (sansNoms !== s && sansNoms !== '' && comparerUne(sansNoms, ex, matiere)) return true;
  // « S = {1/e} » : un ensemble d'une seule solution.
  const seul = sansNoms.match(/^\{\s*([^{};]+?)\s*\}$/);
  return !!seul && comparerUne(seul[1], ex, matiere);
}

/**
 * Une saisie dans un autre multiple de l'unité (km pour m) n'est convertie que si l'énoncé
 * ne demande pas lui-même une conversion ou une unité précise (sinon recopier suffirait).
 */
function conversionPermise(ex) {
  const e = sansAccents(String((ex && ex.enonce) || '')).replace(/\\(?:mathrm|text)\s*\{([^{}]*)\}/g, '$1').replace(/[$\\]|\{|\}/g, ' ');
  return !/conver|exprim|unite|\ben\s+(?:[GMkhdcmµn]?(?:m|g|s|L|W|J|V|A|Hz|Wh|Pa|N|o)\b|(?:kilo|milli|micro|centi|deci|mega|giga|nano)?(?:metre|gramme|seconde|litre|watt|joule|volt|ampere|hertz|pascal|newton|octet|ohm))/i.test(e);
}

const UNITE_EN_MOT = /^(?:[a-z]{0,5}(?:metre|gramme|litre|seconde|minute|heure|euro|degre|watt|joule|volt|ampere|hertz|pascal|newton|octet|bit|ohm|mole?)|jour|an|annee|semaine|mois|siecle|centime|pourcent|dioptrie|tour)$/;
const motSimple = (w) => sansAccents(String(w).toLowerCase()).replace(/s$/, '');

/** Noms (3 lettres ou plus, hors unités) de la réponse et de l'énoncé : « 1 électron » = « 1 ». */
function motsDe(ex) {
  const t = `${(ex && ex.reponse) || ''} ${(ex && ex.enonce) || ''}`.replace(/\$[^$]*\$/g, ' ');
  const out = new Set();
  for (const w of t.split(/[^\p{L}]+/u)) {
    const m = motSimple(w);
    if (m.length >= 3 && !UNITE_EN_MOT.test(m)) out.add(m);
  }
  return out;
}

/** L'énoncé laisse-t-il libre l'écriture d'une expression (ni « réduis », ni « factorise », ni « forme »…) ? */
function formeLibre(ex) {
  const e = sansAccents(String((ex && ex.enonce) || '').toLowerCase());
  return !/redui|develop|factoris|simplifi|forme|puissance|une seule expression|exacte?\b/.test(e);
}

/**
 * « Donner un argument de z », réponse « … (modulo 2π) » : toute mesure égale à 2π près convient
 * (sauf « mesure principale », qui est unique).
 */
function moduloAngle(ex) {
  const e = sansAccents(String((ex && ex.enonce) || '').toLowerCase());
  const r = String((ex && ex.reponse) || '');
  if (/principale/.test(e)) return false;
  return /\bun argument\b|\bune mesure\b/.test(e) || /modulo\s*\$?\s*2\s*\\pi|\[\s*2\s*\\pi\s*\]/.test(r);
}

/** L'énoncé exige-t-il un arrondi ou une écriture précise du résultat ? */
function arrondiExige(ex) {
  const e = sansAccents(String((ex && ex.enonce) || '').toLowerCase());
  return /arrondi|chiffres? significatifs?|ecri\w* correctement|bon nombre de chiffres|incertitude/.test(e);
}

function comparerUne(s, ex, matiere) {
  // « c) », « (c) » → « c » (réponse à un QCM écrit).
  s = s.replace(/^\(?([a-hA-H])\)$/, '$1');
  const a = analyserExercice(ex, matiere);
  if (a.type !== 'auto') return false;
  if (a.ensemble) {
    const cle = (x) => clePhrase(sansDollars(x) ?? x, { articles: !LANGUES.has(matiere), ignorerAccents: false, espaces: LANGUES.has(matiere) });
    let bruts = elements(s);
    // « x = 4 ou x = -4 » : « ou » sépare aussi les solutions (seulement si le compte y gagne).
    if (bruts.length !== a.ensemble.length && /\sou\s/i.test(s)) bruts = elements(s.replace(/\s+ou\s+/gi, ' ; '));
    const voulus = a.ensemble.map((x, k) => ({ cle: cle(x), brut: a.ensemble[k] }));
    // « {7π/6 ; 11π/6} » : accolades de l'ensemble retirées.
    const donnes = bruts.map((x) => x.replace(/^\{\s*|\s*\}$/g, '')).map((x) => ({ cle: cle(x), brut: x }));
    if (donnes.length !== voulus.length) return false;
    const reste = [...voulus];
    const maths = !LANGUES.has(matiere);
    for (const d of donnes) {
      const i = reste.findIndex((v) => v.cle === d.cle || (!ACCENTS_STRICTS.has(matiere) && v.cle.length > 3 && sansAccents(v.cle) === sansAccents(d.cle))
        // Valeurs numériques ou exactes : « pi/6 » = « π/6 », « 0.5 » = « 0,5 ».
        || (maths && /\d|π/.test(v.brut) && (memeValeurEcrite(v.brut, d.brut)
          // « 5 cm et 5√3 cm » : l'unité écrite par l'élève est permise si l'élément attendu n'en a pas.
          || (!/[a-zA-Zµ°%€]\s*$/.test(v.brut) && memeValeurEcrite(v.brut, d.brut.replace(/\s*(?:[kcdmµ]?m[²³]?|[km]?g|[cm]?L|s|h|min|€|°|%|rad)\.?$/, ''))))));
      if (i < 0) return false;
      reste.splice(i, 1);
    }
    return true;
  }
  const canon = !LANGUES.has(matiere) && sensDe(ex && ex.reponse) ? canonSens : (x) => x;
  const texteSaisi = canon(sansDollars(s) ?? s);
  const nbSaisi = lireNombre(sansPonctuationFinale(texteSaisi));
  const opts = { conversion: conversionPermise(ex), strict: arrondiExige(ex), mots: motsDe(ex) };
  return a.alternatives.some((alt) => {
    if (alt.kind === 'nombre') return !!nbSaisi && egalNombre(alt, nbSaisi, opts);
    if (alt.kind === 'math') return comparerSuite(s, alt.suite, { libre: formeLibre(ex), modulo: moduloAngle(ex) }) || (!!alt.nombres && comparerNombres(texteSaisi, alt.nombres, matiere, opts));
    if (alt.kind === 'nombres') return comparerNombres(texteSaisi, alt.liste, matiere, opts);
    if (alt.kind === 'correction') return egalCorrection(s, alt);
    if (alt.kind === 'decomposition') return egalDecomposition(s, alt);
    if (alt.kind === 'noyaux') return egalNoyaux(s, alt);
    if (alt.kind === 'classement') return egalClassement(s, alt);
    if (alt.kind === 'variations') return egalVariations(s, alt);
    if (alt.kind === 'formule') return lireFormule(sansPonctuationFinale(texteSaisi)) === alt.f;
    if (alt.kind === 'texte') alt = { ...alt, valeur: canon(alt.valeur) };
    if (alt.phrase) {
      const opts = { articles: alt.articles, ignorerAccents: false, espaces: LANGUES.has(matiere) };
      const x = clePhrase(alt.valeur, opts);
      const y = clePhrase(texteSaisi, opts);
      if (x === y) return true;
      if (!ACCENTS_STRICTS.has(matiere) && sansAccents(x).length > 3 && sansAccents(x) === sansAccents(y)) return true;
    } else if (egalTexte(alt, texteSaisi, matiere)) return true;
    if (alt.nombre && nbSaisi && (!nbSaisi.unite || alt.nombre.mots.includes(nbSaisi.unite))) {
      return egalNombre({ ...alt.nombre, unite: '' }, { ...nbSaisi, unite: '' });
    }
    return false;
  });
}

/* ------------------------------------------------------------------ */
/* Sens d'une évolution : hausse / baisse                              */
/* ------------------------------------------------------------------ */

const MOTS_HAUSSE = /(?<!\p{L})(?:hausses?|augment\p{L}*)/iu;
const MOTS_BAISSE = /(?<!\p{L})(?:baiss\p{L}*|diminu\p{L}*|recul\p{L}*)/iu;
const NEGATION = /\bn['e]\s*(?:\p{L}+\s+)?(?:augment|diminu|baiss|recul)\p{L}*\s+(?:pas|plus|jamais)\b|\bni\s+(?:augment|diminu|baiss)/iu;

/**
 * Sens d'une réponse : 1 (hausse), -1 (baisse), 0 (aucun), NaN (les deux, ou une négation).
 * Avec `signes`, un « + » ou « − » écrit devant un nombre (au début, après « = », « : », « ; »,
 * « , », « et », « soit ») compte aussi.
 */
export function sensDe(texte, signes = false) {
  const t = nettoyer(texte);
  if (NEGATION.test(t)) return NaN;
  let plus = MOTS_HAUSSE.test(t);
  let moins = MOTS_BAISSE.test(t);
  if (signes) {
    for (const m of t.matchAll(/(?:^|[=:;,]\s*|\b(?:et|soit)\s+)([+-])\s*(?=\d)/g)) {
      if (m[1] === '+') plus = true; else moins = true;
    }
  }
  if (plus && moins) return NaN;
  return plus ? 1 : moins ? -1 : 0;
}

/**
 * Le sens de la saisie est-il compatible avec celui de la réponse ? Un sens contraire (ou
 * les deux à la fois) est toujours refusé. Sans aucun sens (« 25 % »), la saisie n'est
 * permise que si l'énoncé donne déjà le sens (« l'augmenter de quel pourcentage ? ») ou si
 * attendus.json accepte explicitement une forme sans sens.
 */
function sensCompatible(saisie, ex) {
  const attendu = sensDe(ex && ex.reponse);
  if (attendu !== 1 && attendu !== -1) return true;
  const donne = sensDe(saisie, true);
  if (Number.isNaN(donne)) return false;
  if (donne) return donne === attendu;
  const e = String(ex.enonce || '');
  const enonceDonne = (attendu === 1 ? MOTS_HAUSSE : MOTS_BAISSE).test(e) && !(attendu === 1 ? MOTS_BAISSE : MOTS_HAUSSE).test(e);
  if (enonceDonne) return true;
  const formes = (ex.attendu && (ex.attendu.accepte || ex.attendu.ensemble)) || [];
  return formes.some((f) => sensDe(f, true) === 0);
}

/** « diminution » = « baisse », « augmentation » = « hausse » ; « 25 % de baisse » = « baisse de 25 % ». */
function canonSens(t) {
  return String(t)
    .replace(/(\d[\d\s,.]*\s*%)\s+d['’e]\s*(baisse|hausse|diminution|augmentation)\b/giu, '$2 de $1')
    .replace(/(?<!\p{L})diminution(s?)(?!\p{L})/giu, 'baisse$1')
    .replace(/(?<!\p{L})augmentation(s?)(?!\p{L})/giu, 'hausse$1');
}

/**
 * Fusionne attendus.json dans un objet exercice.json (copie). Les lignes dont la
 * « reponse » ne correspond plus à l'exercice sont ignorées et renvoyées dans `ecarts`.
 */
export function fusionnerAttendus(exercice, attendus) {
  const ecarts = [];
  if (!exercice || !attendus) return { exercice, ecarts };
  const table = attendus.attendus || attendus;
  const exercices = (exercice.exercices || []).map((ex) => {
    const a = table[String(ex.id)];
    if (!a) return ex;
    if (a.reponse !== ex.reponse) { ecarts.push(ex.id); return ex; }
    if (a.criteres) return { ...ex, criteres: a.criteres };
    const attendu = a.ensemble ? { ensemble: a.ensemble } : { accepte: a.accepte };
    return { ...ex, attendu };
  });
  return { exercice: { ...exercice, exercices }, ecarts };
}

/* ------------------------------------------------------------------ */
/* Réponses rédigées : grille des idées attendues (« criteres »)       */
/* ------------------------------------------------------------------ */
//
// Pour un exercice à rédiger, attendus.json peut donner la liste des idées que la
// réponse doit contenir : { "reponse": "…", "criteres": [ { "idee": "texte affiché",
// "mots": ["mot-clé", "autre formulation"] } ] }. L'élève coche lui-même ; l'appli
// pré-coche les idées dont un mot-clé apparaît dans ce qu'il a écrit.

function cleLibre(s) {
  return ' ' + sansAccents(nettoyer(s).toLowerCase())
    .replace(/[₀-₉]/g, (c) => String(c.charCodeAt(0) - 0x2080)) // indices : « CO₂ » = « CO2 »
    .replace(/[µμ]/g, 'micro ') // « 10 µm » est trouvé par le mot-clé « micro »
    .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
    .replace(/[^a-z0-9ßäöüñç]+/g, ' ') // apostrophes comprises : « l'étoile » → « l etoile »
    .replace(/\s+/g, ' ')
    .trim() + ' ';
}

/** Pour chaque idée, true si l'un de ses mots-clés figure dans le texte de l'élève. */
export function detecterCriteres(saisie, criteres) {
  const texte = cleLibre(saisie || '');
  if (!texte.trim()) return (criteres || []).map(() => false);
  return (criteres || []).map((c) => (c.mots || []).some((m) => {
    const k = cleLibre(m).trim();
    // Début de mot : « inclin » trouve « inclinaison », « incliné ».
    return k.length >= 3 && texte.includes(' ' + k);
  }));
}

/** Bilan des cases cochées : { nb, total, complet }. */
export function bilanCriteres(coches) {
  const total = (coches || []).length;
  const nb = (coches || []).filter(Boolean).length;
  return { nb, total, complet: total > 0 && nb === total };
}
