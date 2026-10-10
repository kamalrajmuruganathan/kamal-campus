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
  s = s.replace(/\\(?:text|mathrm|textrm|mbox|operatorname)\s*\{([^{}]*)\}/g, ' $1');
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

function egalNombre(att, saisie) {
  if (saisie.unite && att.unite && saisie.unite !== att.unite) return false;
  if (saisie.unite && !att.unite) return false;
  // Tolérance RELATIVE seulement (sinon 10⁻¹⁹ « égalerait » 10⁻¹⁸).
  const e = att.valeur === 0 ? 1e-15 : Math.abs(att.valeur) * 1e-9;
  if (Math.abs(att.valeur - saisie.valeur) <= e) return true;
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
  const nb = lireNombre(propre);
  // « 1895 frères Lumière » : deux mots après le nombre → c'est une phrase, pas une unité
  // (sinon « 1895 » seul suffirait).
  if (nb && nb.motsUnite < 2) return { kind: 'nombre', ...nb };
  // Expression mathématique (« x² + 1 », « 6x ») : plusieurs écritures possibles → non.
  // (« < », « > » et les flèches sont permis : rangements, chaînes alimentaires.)
  // (« cm³ », « m² » : exposant collé à une unité, permis.)
  const symboles = matiere === 'langues-anciennes' ? /[=^√+*×²³]/ : /[=^√π+*×²³]/; // π est une lettre en grec ; ∞ permis (limites)
  if (symboles.test(propre.replace(/=>|->/g, '→').replace(/(\p{L})[²³]/gu, '$1').replace(/(^|[\s(;,])\+(?=\s?[\d∞])/g, '$1'))) return null;
  if (/\d[a-z]/i.test(propre) && !/\d(?:e|er|re|ème|eme|nd|nde|st|th|rd)\b/i.test(propre)) return null;
  const mots = compterMots(propre) || (/∞/.test(propre) ? 1 : 0);
  if (mots === 0 || mots > MAX_MOTS_ATTENDU) return null;
  // Pas de repli « le nombre seul suffit » : la forme écrite à la main est exigée en entier
  // (« 90° angle droit » ne doit pas accepter « 90 »). Les formes numériques sont données à part.
  // En langue étrangère, l'article fait souvent partie de ce qui est évalué (« la mia casa ») : on le garde.
  return { kind: 'texte', valeur: propre, articles: !LANGUES.has(matiere), phrase: true, nombre: null };
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
  return nettoyer(saisie)
    .split(/\s*[,;/\n]\s*/)
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
    const alts = att.accepte.map((f) => analyserForme(f, matiere));
    if (alts.every(Boolean)) {
      // Formes de la réponse d'origine, si elle était déjà vérifiable : on les garde aussi.
      const base = analyser(ex.reponse, matiere);
      return { type: 'auto', alternatives: [...alts, ...(base.type === 'auto' ? base.alternatives : [])] };
    }
  }
  return analyser(ex && ex.reponse, matiere);
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
  return a.ensemble ? `${a.ensemble.length} éléments, séparés par des virgules` : '';
}

/** La saisie de l'élève est-elle juste pour cet exercice ? */
export function comparerExercice(saisie, ex, matiere = null) {
  const s = nettoyer(saisie);
  if (!s) return false;
  // « S = {1 ; 2} » : l'ensemble des solutions peut être précédé de « S = ».
  if (comparerUne(s, ex, matiere)) return true;
  // « S = {1 ; 2} », « f(-2) = 15 », « x = 3 ou x = -5 » : on retire les « nom = » devant les valeurs.
  const sansNoms = s.replace(/(^|[\s;,(]|\bou\b|\bet\b)\s*\p{L}[\p{L}0-9'_]{0,5}(?:\([^()=]{0,6}\))?\s*[=≈]\s*(?!=)/gu, '$1 ').replace(/\s+/g, ' ').trim();
  return sansNoms !== s && sansNoms !== '' && comparerUne(sansNoms, ex, matiere);
}

function comparerUne(s, ex, matiere) {
  // « c) », « (c) » → « c » (réponse à un QCM écrit).
  s = s.replace(/^\(?([a-hA-H])\)$/, '$1');
  const a = analyserExercice(ex, matiere);
  if (a.type !== 'auto') return false;
  if (a.ensemble) {
    const cle = (x) => clePhrase(sansDollars(x) ?? x, { articles: !LANGUES.has(matiere), ignorerAccents: false, espaces: LANGUES.has(matiere) });
    const voulus = a.ensemble.map(cle);
    const donnes = elements(s).map(cle);
    if (donnes.length !== voulus.length) return false;
    const reste = [...voulus];
    for (const d of donnes) {
      const i = reste.findIndex((v) => v === d || (!ACCENTS_STRICTS.has(matiere) && v.length > 3 && sansAccents(v) === sansAccents(d)));
      if (i < 0) return false;
      reste.splice(i, 1);
    }
    return true;
  }
  const texteSaisi = sansDollars(s) ?? s;
  const nbSaisi = lireNombre(sansPonctuationFinale(texteSaisi));
  return a.alternatives.some((alt) => {
    if (alt.kind === 'nombre') return !!nbSaisi && egalNombre(alt, nbSaisi);
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
