/**
 * Dictées — logique pure (testable, sans React).
 *
 *  - decouper(texte)        : texte → jetons (mots et signes de ponctuation), avec leur position ;
 *  - aligner(ref, eleve)    : alignement mot à mot (distance d'édition de Levenshtein sur les mots,
 *                             avec un coût plus faible quand deux mots se ressemblent) ;
 *  - classer(attendu, ecrit): nature d'un écart (accent, accord, majuscule, ponctuation, autre) ;
 *  - corriger(texte, saisie): fautes classées, note sur 10 (barème ci-dessous), segments à afficher ;
 *  - texteALire(phrase, …)  : phrase préparée pour la voix (ponctuation dite : « virgule », « point ») ;
 *  - xpDictee, noterDictee, fusionnerDictees : progression de l'élève.
 *
 * Tolérances : espaces multiples, apostrophes droites ou courbes (' ’), guillemets « » ou " ",
 * points de suspension « ... » ou « … », tirets de dialogue - – —.
 *
 * Barème (sur 10, jamais en dessous de 0) :
 *   −1   par mot manquant, mot en trop, faute d'accord ou de terminaison, autre faute d'orthographe ;
 *   −0,5 par faute d'accent (ou de cédille), de majuscule, de ponctuation (signe oublié, en trop ou
 *        différent, apostrophe ou trait d'union oublié).
 */

// ─── Groupes de dictées (un fichier dictees/<groupe>.json par groupe) ───────────────
export const GROUPES = [
  { groupe: 'cp', libelle: 'CP', matiere: 'francais', niveau: 'cp' },
  { groupe: 'ce1', libelle: 'CE1', matiere: 'francais', niveau: 'ce1' },
  { groupe: 'ce2', libelle: 'CE2', matiere: 'francais', niveau: 'ce2' },
  { groupe: 'cm1', libelle: 'CM1', matiere: 'francais', niveau: 'cm1' },
  { groupe: 'cm2', libelle: 'CM2', matiere: 'francais', niveau: 'cm2' },
  { groupe: 'sixieme', libelle: '6e', matiere: 'francais', niveau: 'sixieme' },
  { groupe: 'cinquieme', libelle: '5e', matiere: 'francais', niveau: 'cinquieme' },
  { groupe: 'quatrieme', libelle: '4e', matiere: 'francais', niveau: 'quatrieme' },
  { groupe: 'troisieme', libelle: '3e', matiere: 'francais', niveau: 'troisieme' },
  { groupe: 'anglais', libelle: 'Anglais', matiere: 'anglais', niveau: null },
  { groupe: 'espagnol', libelle: 'Espagnol', matiere: 'espagnol', niveau: null },
  { groupe: 'allemand', libelle: 'Allemand', matiere: 'allemand', niveau: null },
  { groupe: 'italien', libelle: 'Italien', matiere: 'italien', niveau: null },
];

/** Niveaux où l'on propose la lecture lente et la ponctuation dite (CP → CM2). */
const PRIMAIRE = ['cp', 'ce1', 'ce2', 'cm1', 'cm2'];
export function estPrimaire(niveau) { return PRIMAIRE.includes(niveau); }

/** Vitesse de lecture conseillée : lente pour les petits (CP, CE1, CE2). */
export function vitesseConseillee(niveau) {
  return ['cp', 'ce1', 'ce2'].includes(niveau) ? 'lent' : 'normal';
}

// ─── Barème ──────────────────────────────────────────────────────────────────────
export const TYPES = {
  manquant: { libelle: 'Mot oublié', points: 1 },
  en_trop: { libelle: 'Mot en trop', points: 1 },
  accord: { libelle: 'Accord ou terminaison', points: 1 },
  autre: { libelle: 'Orthographe', points: 1 },
  accent: { libelle: 'Accent', points: 0.5 },
  majuscule: { libelle: 'Majuscule', points: 0.5 },
  ponctuation: { libelle: 'Ponctuation', points: 0.5 },
};
export const ORDRE_TYPES = ['manquant', 'en_trop', 'accord', 'autre', 'accent', 'majuscule', 'ponctuation'];

export const BAREME_TEXTE = '−1 par mot oublié, mot en trop, faute d’accord ou d’orthographe ; −0,5 par faute d’accent, de majuscule ou de ponctuation. La note ne descend pas sous 0.';

// ─── Découpage en jetons ─────────────────────────────────────────────────────────
// Lettres latines (accents compris, œ, ß, ñ…) et chiffres ; pas de \p{L} (moteur Hermes).
const L = 'A-Za-z0-9À-ÖØ-öø-ɏ';
const RE_JETON = new RegExp(`[${L}]+(?:['’ʼ‘\`-][${L}]+)*['’]?|\\.\\.\\.|[.,;:!?…«»"“”„()¿¡—–-]`, 'g');

const PONCT_NORMALE = {
  '«': '"', '»': '"', '“': '"', '”': '"', '„': '"',
  '...': '…', '–': '—', '-': '—',
};

/** Forme de comparaison d'un jeton : apostrophes et guillemets unifiés. */
function formeNormale(brut) {
  if (PONCT_NORMALE[brut]) return PONCT_NORMALE[brut];
  return brut.replace(/[’ʼ‘`]/g, "'");
}

/**
 * Texte → jetons { t (tel qu'écrit), n (forme de comparaison), ponct, debut, fin }.
 */
export function decouper(texte) {
  const s = String(texte ?? '');
  const jetons = [];
  RE_JETON.lastIndex = 0;
  let m;
  while ((m = RE_JETON.exec(s)) !== null) {
    const t = m[0];
    const n = formeNormale(t);
    const ponct = !new RegExp(`[${L}]`).test(t);
    jetons.push({ t, n, ponct, debut: m.index, fin: m.index + t.length });
  }
  return jetons;
}

// ─── Comparaison de deux mots ────────────────────────────────────────────────────
const SANS_ACCENT = {
  à: 'a', â: 'a', ä: 'a', á: 'a', ã: 'a', å: 'a',
  ç: 'c', é: 'e', è: 'e', ê: 'e', ë: 'e',
  î: 'i', ï: 'i', í: 'i', ì: 'i',
  ô: 'o', ö: 'o', ó: 'o', ò: 'o', õ: 'o',
  û: 'u', ù: 'u', ü: 'u', ú: 'u',
  ÿ: 'y', ñ: 'n', œ: 'oe', æ: 'ae', ß: 'ss',
};

/** Minuscules sans accents (ni cédille, ni tilde). */
export function sansAccents(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9'\- ]/g, (c) => SANS_ACCENT[c] ?? c);
}

/** Distance de Levenshtein entre deux chaînes (lettres). */
export function distanceLettres(a, b) {
  const n = a.length;
  const m = b.length;
  if (!n) return m;
  if (!m) return n;
  let prec = Array.from({ length: m + 1 }, (_, j) => j);
  for (let i = 1; i <= n; i++) {
    const cour = [i];
    for (let j = 1; j <= m; j++) {
      cour[j] = Math.min(prec[j] + 1, cour[j - 1] + 1, prec[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prec = cour;
  }
  return prec[m];
}

// Terminaisons qui varient avec l'accord ou la conjugaison (genre, nombre, personne, temps, é/er/ez…).
const TERMINAISONS = new Set([
  '', 's', 'x', 'e', 'es', 'ent', 'nt', 't', 'd', 'z', 'ez', 'er', 'é', 'ée', 'és', 'ées',
  'ai', 'ais', 'ait', 'aient', 'a', 'as', 'ons', 'i', 'is', 'it', 'u', 'us', 'ut', 'ue', 'ues',
  'èrent', 'irent', 'urent', 'ra', 'ras', 'rai', 'rais', 'rait', 'raient', 'ront',
]);

/** Les deux mots ne diffèrent-ils que par leur terminaison (accord, conjugaison) ? */
function differenceDeTerminaison(a, b) {
  let p = 0;
  while (p < a.length && p < b.length && a[p] === b[p]) p++;
  const ra = a.slice(p);
  const rb = b.slice(p);
  if (!TERMINAISONS.has(ra) || !TERMINAISONS.has(rb)) return false;
  const court = Math.min(a.length, b.length);
  return p >= 2 || (court === 1 && p === 1);
}

// Homophones grammaticaux fréquents (pour expliquer la faute).
const HOMOPHONES = [
  ['et', 'est'], ['son', 'sont'], ['on', 'ont'], ['ces', 'ses'], ['ce', 'se'], ['mais', 'mes'],
  ['peu', 'peut'], ['peu', 'peux'], ['sa', 'ça'], ['ma', "m'a"], ['ta', "t'a"], ["c'est", "s'est"],
  ["c'est", 'ces'], ["c'est", 'ses'], ["s'est", 'ses'], ['sans', "s'en"], ['ni', "n'y"], ['si', "s'y"],
  ['quand', 'quant'], ['quand', "qu'en"], ['dans', "d'en"], ['leur', 'leurs'], ['tout', 'tous'],
  ['quel', "qu'elle"], ['quelle', "qu'elle"], ['quel', 'quelle'], ['cet', 'cette'], ['ou', 'où'],
  ['a', 'à'], ['la', 'là'], ['mes', "m'est"], ['ses', "s'est"], ['ont', 'on'],
  ['their', 'there'], ['your', "you're"], ['its', "it's"], ['to', 'too'], ['then', 'than'],
  ['das', 'dass'], ['e', 'è'], ['si', 'sí'], ['el', 'él'], ['tu', 'tú'], ['mi', 'mí'],
];
function sontHomophones(a, b) {
  const x = a.toLowerCase();
  const y = b.toLowerCase();
  return HOMOPHONES.some(([p, q]) => (p === x && q === y) || (p === y && q === x));
}

/**
 * Nature de l'écart entre le mot attendu et le mot écrit (formes normalisées, mêmes jetons).
 * @returns {{type: string, detail: string} | null} null si identiques
 */
export function classer(attendu, ecrit) {
  const a = attendu.n;
  const e = ecrit.n;
  if (a === e) return null;
  if (attendu.ponct || ecrit.ponct) {
    return { type: 'ponctuation', detail: `« ${ecrit.t} » au lieu de « ${attendu.t} »` };
  }
  const al = a.toLowerCase();
  const el = e.toLowerCase();
  if (al === el) {
    const doitMaj = a[0] !== a[0].toLowerCase();
    return { type: 'majuscule', detail: doitMaj ? 'majuscule oubliée' : 'pas de majuscule ici' };
  }
  const as = sansAccents(a);
  const es = sansAccents(e);
  if (as === es) {
    const homo = sontHomophones(al, el);
    const cedille = /ç/.test(al) !== /ç/.test(el);
    return { type: 'accent', detail: homo ? `homophones (${al} / ${el})` : cedille ? 'cédille' : 'accent oublié ou en trop' };
  }
  if (as.replace(/['-]/g, '') === es.replace(/['-]/g, '')) {
    return { type: 'ponctuation', detail: 'apostrophe ou trait d’union' };
  }
  if (sontHomophones(al, el)) {
    return { type: 'autre', detail: `homophones (${al} / ${el})` };
  }
  if (differenceDeTerminaison(al, el)) {
    return { type: 'accord', detail: 'terminaison (accord ou conjugaison)' };
  }
  const d = distanceLettres(as, es);
  return { type: 'autre', detail: d / Math.max(as.length, es.length) > 0.6 && d > 1 ? 'mot différent' : 'orthographe du mot' };
}

// ─── Alignement mot à mot ────────────────────────────────────────────────────────
function coutSubstitution(x, y) {
  if (x.n === y.n) return 0;
  if (x.ponct !== y.ponct) return 3; // un mot ne s'aligne jamais sur un signe
  if (x.ponct) return 0.8;
  const xs = sansAccents(x.n);
  const ys = sansAccents(y.n);
  if (xs === ys) return 0.3; // accent ou majuscule seulement
  const d = distanceLettres(xs, ys);
  const longueur = Math.max(xs.length, ys.length);
  const r = d / longueur;
  if (r > 0.6 && d > 1) return 1.6; // mots sans rapport : une seule faute, mais l'alignement préfère un mot proche
  return 0.4 + r;
}

/**
 * Aligne deux listes de jetons. Renvoie des opérations dans l'ordre du texte :
 * { op: 'egal' | 'sub' | 'manquant' | 'en_trop', i (indice dans ref), j (indice dans élève) }.
 */
export function aligner(ref, eleve) {
  const n = ref.length;
  const m = eleve.length;
  const D = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) D[i][0] = i;
  for (let j = 1; j <= m; j++) D[0][j] = j;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      D[i][j] = Math.min(
        D[i - 1][j - 1] + coutSubstitution(ref[i - 1], eleve[j - 1]),
        D[i - 1][j] + 1,
        D[i][j - 1] + 1,
      );
    }
  }
  const ops = [];
  let i = n;
  let j = m;
  const proche = (x, y) => Math.abs(x - y) < 1e-9;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && proche(D[i][j], D[i - 1][j - 1] + coutSubstitution(ref[i - 1], eleve[j - 1]))) {
      ops.push({ op: ref[i - 1].n === eleve[j - 1].n ? 'egal' : 'sub', i: i - 1, j: j - 1 });
      i--; j--;
    } else if (i > 0 && proche(D[i][j], D[i - 1][j] + 1)) {
      ops.push({ op: 'manquant', i: i - 1, j: null });
      i--;
    } else {
      ops.push({ op: 'en_trop', i: null, j: j - 1 });
      j--;
    }
  }
  return ops.reverse();
}

/** Note sur 10 à partir des points retirés (arrondie au demi-point, jamais négative). */
export function noteSur10(pointsRetires) {
  return Math.max(0, Math.round((10 - pointsRetires) * 2) / 2);
}

/**
 * Corrige une dictée.
 * @param {string} texte  texte de référence
 * @param {string} saisie texte tapé par l'élève
 * @returns {{
 *   note: number, sur: 10, retires: number, nbMots: number,
 *   fautes: Array<{n, type, libelle, points, attendu, ecrit, detail, i, j}>,
 *   parType: Object<string, number>,
 *   ops: Array, ref: Array, eleve: Array
 * }}
 */
export function corriger(texte, saisie) {
  const ref = decouper(texte);
  const eleve = decouper(saisie);
  const ops = aligner(ref, eleve);
  const fautes = [];
  for (const o of ops) {
    let f = null;
    if (o.op === 'sub') {
      f = classer(ref[o.i], eleve[o.j]);
    } else if (o.op === 'manquant') {
      f = ref[o.i].ponct
        ? { type: 'ponctuation', detail: `« ${ref[o.i].t} » oublié` }
        : { type: 'manquant', detail: 'mot oublié' };
    } else if (o.op === 'en_trop') {
      f = eleve[o.j].ponct
        ? { type: 'ponctuation', detail: `« ${eleve[o.j].t} » en trop` }
        : { type: 'en_trop', detail: 'mot en trop' };
    }
    if (f) {
      o.faute = fautes.length;
      fautes.push({
        n: fautes.length + 1,
        type: f.type,
        libelle: TYPES[f.type].libelle,
        points: TYPES[f.type].points,
        attendu: o.i != null ? ref[o.i].t : null,
        ecrit: o.j != null ? eleve[o.j].t : null,
        detail: f.detail,
        i: o.i,
        j: o.j,
      });
    }
  }
  const retires = fautes.reduce((s, f) => s + f.points, 0);
  const parType = {};
  for (const f of fautes) parType[f.type] = (parType[f.type] || 0) + 1;
  return {
    note: noteSur10(retires),
    sur: 10,
    retires,
    nbMots: ref.filter((x) => !x.ponct).length,
    fautes,
    parType,
    ops,
    ref,
    eleve,
  };
}

/**
 * Texte de l'élève découpé pour l'affichage : passages justes, fautes (numérotées), et
 * repères « ‸ » là où un mot ou un signe a été oublié. L'espacement de l'élève est conservé.
 * @returns {Array<{texte: string, faute: number|null, manquant?: boolean}>}
 */
export function segmentsEleve(saisie, resultat) {
  const s = String(saisie ?? '');
  const { ops, eleve, fautes } = resultat;
  const segs = [];
  let pos = 0;
  const pousser = (texte, faute = null, extra = {}) => {
    if (!texte) return;
    const der = segs[segs.length - 1];
    if (der && faute == null && der.faute == null && !der.manquant && !extra.manquant) der.texte += texte;
    else segs.push({ texte, faute, ...extra });
  };
  for (const o of ops) {
    if (o.j == null) {
      // Mot ou signe oublié : repère à l'endroit courant.
      pousser('‸', o.faute, { manquant: true });
      continue;
    }
    const jt = eleve[o.j];
    pousser(s.slice(pos, jt.debut));
    pousser(s.slice(jt.debut, jt.fin), o.faute ?? null);
    pos = jt.fin;
  }
  pousser(s.slice(pos));
  return segs.map((x) => ({ ...x, n: x.faute != null ? fautes[x.faute].n : null }));
}

/**
 * Texte de référence découpé pour l'affichage de la correction : les mots que l'élève a
 * manqués ou mal écrits sont marqués (numéro de la faute).
 */
export function segmentsCorrection(texte, resultat) {
  const s = String(texte ?? '');
  const { ops, ref, fautes } = resultat;
  const marque = new Map();
  for (const o of ops) if (o.i != null && o.faute != null) marque.set(o.i, o.faute);
  const segs = [];
  let pos = 0;
  ref.forEach((r, i) => {
    if (r.debut > pos) segs.push({ texte: s.slice(pos, r.debut), faute: null });
    const f = marque.has(i) ? marque.get(i) : null;
    const der = segs[segs.length - 1];
    if (f == null && der && der.faute == null) der.texte += s.slice(r.debut, r.fin);
    else segs.push({ texte: s.slice(r.debut, r.fin), faute: f });
    pos = r.fin;
  });
  if (pos < s.length) segs.push({ texte: s.slice(pos), faute: null });
  return segs.map((x) => ({ ...x, n: x.faute != null ? fautes[x.faute].n : null }));
}

/** Résumé lisible : « 2 fautes d'accord, 1 accent ». */
export function resumeFautes(resultat) {
  const morceaux = [];
  for (const type of ORDRE_TYPES) {
    const k = resultat.parType[type];
    if (!k) continue;
    morceaux.push(`${TYPES[type].libelle} : ${k}`);
  }
  return morceaux.join(' · ');
}

// ─── Lecture à voix haute ─────────────────────────────────────────────────────────
const PONCT_DITE = {
  francais: {
    ',': 'virgule', '.': 'point', '?': 'point d’interrogation', '!': 'point d’exclamation',
    ':': 'deux-points', ';': 'point-virgule', '«': 'ouvrez les guillemets', '»': 'fermez les guillemets',
    '…': 'points de suspension', '—': 'tiret', '–': 'tiret', '(': 'ouvrez la parenthèse', ')': 'fermez la parenthèse',
  },
};

/**
 * Phrase prête pour la synthèse vocale.
 * @param {string} phrase
 * @param {{ponctuation?: boolean, matiere?: string}} opts ponctuation : dire « virgule », « point »…
 */
export function texteALire(phrase, { ponctuation = false, matiere = 'francais' } = {}) {
  let s = String(phrase ?? '').replace(/\.\.\./g, '…');
  const dico = PONCT_DITE[matiere];
  if (ponctuation && dico) {
    s = s.replace(/[,.?!:;«»…—–()]/g, (c) => ` ${dico[c]}, `);
  }
  // L'apostrophe courbe gêne certaines voix : on la remplace par l'apostrophe droite.
  return s.replace(/[’ʼ]/g, "'").replace(/\s*,\s*,/g, ',').replace(/\s+/g, ' ').replace(/\s+,/g, ',').replace(/,\s*$/, '').trim();
}

// ─── Progression ──────────────────────────────────────────────────────────────────
/** XP gagnés : la note arrondie, mais seulement ce qui dépasse le meilleur résultat précédent. */
export function xpDictee(note, meilleureAvant = null) {
  const actuel = Math.round(Number(note) || 0);
  const avant = meilleureAvant == null ? 0 : Math.round(Number(meilleureAvant) || 0);
  return Math.max(0, actuel - avant);
}

/** Met à jour le suivi { [id]: { meilleure, derniere, essais, date } } après une dictée. */
export function noterDictee(suivi, id, note, date) {
  const avant = (suivi && suivi[id]) || null;
  return {
    ...(suivi || {}),
    [id]: {
      meilleure: avant ? Math.max(avant.meilleure ?? 0, note) : note,
      derniere: note,
      essais: (avant?.essais ?? 0) + 1,
      date,
    },
  };
}

/** Fusion de deux suivis (deux appareils) : meilleure note et nombre d'essais maximaux. */
export function fusionnerDictees(a, b) {
  const f = {};
  for (const src of [a || {}, b || {}]) {
    for (const id in src) {
      const x = src[id];
      if (!x || typeof x !== 'object') continue;
      const d = f[id];
      if (!d) { f[id] = { ...x }; continue; }
      const recent = String(x.date || '') > String(d.date || '') ? x : d;
      f[id] = {
        meilleure: Math.max(d.meilleure ?? 0, x.meilleure ?? 0),
        derniere: recent.derniere,
        essais: Math.max(d.essais ?? 0, x.essais ?? 0),
        date: recent.date,
      };
    }
  }
  return f;
}

/** Nombre de mots (ponctuation exclue) d'un texte. */
export function compterMots(texte) {
  return decouper(texte).filter((x) => !x.ponct).length;
}
