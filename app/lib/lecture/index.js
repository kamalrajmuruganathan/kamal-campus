/**
 * Lecture à voix haute — préparation des textes (logique pure, testable).
 *
 *  - latexEnMots : « $3 + 4 = 7$ » → « 3 plus 4 égale 7 » (au lieu de sauter la formule) ;
 *  - segmentsFiche / segmentsTexte : découpe un texte en morceaux, chacun avec sa langue :
 *    dans une fiche d'anglais, « hello » est lu par la voix anglaise et « bonjour » par la
 *    voix française (tableaux de vocabulaire, mots en gras, citations « … ») ;
 *  - lectureActive : où proposer le bouton 🔊 (langues vivantes, CP-CE1, ou réglage « partout »).
 */

export const LANGUES_PARLEES = ['anglais', 'espagnol', 'allemand', 'italien'];
const NIVEAUX_LECTEURS_DEBUTANTS = ['cp', 'ce1'];

/** Le bouton « Écouter » est-il proposé ici ? */
export function lectureActive(matiere, niveau = null, profil = null) {
  return LANGUES_PARLEES.includes(matiere) || NIVEAUX_LECTEURS_DEBUTANTS.includes(niveau) || !!(profil && profil.lecturePartout);
}

const CHIFFRES_EXPOSANTS = { 2: 'au carré', 3: 'au cube' };

/** Formule LaTeX simple → mots lus par la voix française. */
export function latexEnMots(f) {
  let s = String(f);
  for (let k = 0; k < 6; k++) {
    s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, ' $1 sur $2 ').replace(/\\sqrt\{([^{}]*)\}/g, ' racine de $1 ');
  }
  s = s
    .replace(/\{,\}/g, ',')
    .replace(/\\[,;: !]|~/g, ' ')
    .replace(/(\d)\s+(?=\d{3}\b)/g, '$1')
    .replace(/\^\{?([23])\}?/g, (_, n) => ` ${CHIFFRES_EXPOSANTS[n]} `)
    .replace(/\^\{([^{}]*)\}|\^(\S)/g, ' puissance $1$2 ')
    .replace(/_\{([^{}]*)\}|_(\w)/g, ' $1$2 ')
    .replace(/\\times|×/g, ' fois ')
    .replace(/\\div|÷/g, ' divisé par ')
    .replace(/\\cdot/g, ' fois ')
    .replace(/\\leqslant|\\leq|≤/g, ' inférieur ou égal à ')
    .replace(/\\geqslant|\\geq|≥/g, ' supérieur ou égal à ')
    .replace(/\\neq|≠/g, ' différent de ')
    .replace(/\\approx|≈/g, ' environ ')
    .replace(/\\pi/g, ' pi ')
    .replace(/\\infty/g, ' l’infini ')
    .replace(/\\%|%/g, ' pour cent ')
    .replace(/°/g, ' degrés ')
    .replace(/\\(?:mathrm|text|mathbf|mathit)\{([^{}]*)\}/g, ' $1 ')
    .replace(/\\(?:left|right|displaystyle)/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/(\S)\s*=\s*/g, '$1 égale ')
    .replace(/(\d|\))\s*\+\s*/g, '$1 plus ')
    .replace(/(\d|\))\s*[-−]\s*(?=\d|\()/g, '$1 moins ')
    .replace(/(\d)\s*<\s*/g, '$1 inférieur à ')
    .replace(/(\d)\s*>\s*/g, '$1 supérieur à ')
    .replace(/[{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return s;
}

// Mots très fréquents du français : un morceau qui n'en contient aucun est sans doute en langue étrangère.
const MOTS_FRANCAIS = new Set(('le la les l de des du un une et est sont en au aux à ce cette ces se ne pas que qui pour avec dans ' +
  'sur par il elle ils elles on nous vous je tu son sa ses leur leurs mon ma mes ton ta tes plus mais ou où on c d qu s n j m t y ' +
  'été être avoir fait faire comme quand si très aussi ici dire veut veulent signifie mot mots exemple phrase verbe nom').split(' '));

const COMMUNS_ES = new Set('la de en que se a un una le les son no si me te mi tu sus su con por para es'.split(' '));
const COMMUNS_IT = new Set('la le de in che se a un una non si mi ti tu con per è e il lo gli sono come più anche'.split(' '));

/** Ce morceau est-il dans la langue étrangère de la matière (et non en français) ? */
export function estEtranger(morceau, matiere) {
  if (!LANGUES_PARLEES.includes(matiere)) return false;
  const mots = String(morceau).toLowerCase().normalize('NFC').split(/[^a-zà-öø-ÿœæßñ']+/).filter(Boolean);
  if (!mots.length) return false;
  // Lettres et terminaisons propres au français dans cette langue.
  const francais = (m) => /[êâîôûçœëï]/.test(m)
    || (matiere !== 'italien' && /[èà]/.test(m))
    || (matiere !== 'espagnol' && matiere !== 'italien' && /é/.test(m))
    || /(?:té|tés|tion|tions|ment|eux|euse|ais|ait|aient)$/.test(m) && matiere !== 'anglais'
    || (matiere === 'anglais' && /(?:é|té|eux|euse|aient)$/.test(m));
  if (mots.length <= 3 && mots.some(francais)) return false;
  // Mots communs au français et à l'espagnol / l'italien : ils ne prouvent rien.
  const communs = matiere === 'espagnol' ? COMMUNS_ES : matiere === 'italien' ? COMMUNS_IT : null;
  const fr = mots.filter((m) => {
    const b = m.replace(/'.*$/, '');
    if (communs && communs.has(b)) return false;
    if (matiere === 'italien' && m.includes("'")) return false; // c'è, l'acqua
    return MOTS_FRANCAIS.has(b) || (/^[cdjlmnst]'/.test(m) && matiere !== 'italien');
  }).length;
  // « Hello! » : aucun mot français → étranger ; « le mot hello » → français.
  return fr === 0 || (mots.length >= 4 && fr / mots.length < 0.12);
}

/** Nettoie un morceau de Markdown pour la voix (sans symboles, formules en mots). */
function propre(s) {
  return String(s)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\$\$([\s\S]*?)\$\$|\$([^$]*)\$/g, (_, a, b) => ` ${latexEnMots(a ?? b)} `)
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Ajoute un segment en fusionnant avec le précédent s'il est dans la même langue.
 * `suite` : le morceau continue la même phrase (passage en **gras** ou entre « … »
 * dans la même langue) : on le recolle avec une espace, pas avec un point.
 * @returns {boolean} vrai si quelque chose a été ajouté
 */
function pousser(out, texte, langue, suite = false) {
  const t = propre(texte);
  if (!t || !/[\p{L}\p{N}]/u.test(t)) return false;
  const der = out[out.length - 1];
  // Morceaux courts (≤ 220 caractères) : certains navigateurs coupent les lectures longues.
  if (der && der.langue === langue && der.texte.length + t.length < 220) {
    der.texte += (suite || /[.!?:;]$/.test(der.texte) ? ' ' : '. ') + t;
    return true;
  }
  if (t.length <= 220) { out.push({ texte: t, langue }); return true; }
  let bloc = '';
  for (const phrase of t.match(/[^.!?;]+[.!?;]*\s*/g) || [t]) {
    if (bloc && bloc.length + phrase.length > 220) { out.push({ texte: bloc.trim(), langue }); bloc = ''; }
    bloc += phrase;
  }
  if (bloc.trim()) out.push({ texte: bloc.trim(), langue });
  return true;
}

/**
 * Découpe une phrase (énoncé, explication) : les passages entre « … », "…" ou en **gras**
 * qui sont en langue étrangère sont lus avec la voix de la matière.
 * @returns {Array<{texte, langue}>}  langue = la matière (voix étrangère) ou 'francais'
 */
export function segmentsTexte(texte, matiere, out = []) {
  const s = String(texte ?? '');
  if (!LANGUES_PARLEES.includes(matiere)) { pousser(out, s, 'francais'); return out; }
  const re = /\*\*([^*]+)\*\*|«\s*([^»]+?)\s*»|"([^"]+)"|“([^”]+)”/g;
  let i = 0;
  let m;
  let suite = false; // après le premier morceau, on est dans la même phrase
  while ((m = re.exec(s))) {
    const dedans = m[1] ?? m[2] ?? m[3] ?? m[4];
    suite = pousser(out, s.slice(i, m.index), 'francais', suite) || suite;
    suite = pousser(out, dedans, estEtranger(dedans, matiere) ? matiere : 'francais', suite) || suite;
    i = m.index + m[0].length;
  }
  pousser(out, s.slice(i), 'francais', suite);
  // Une phrase entière en langue étrangère (« I like apples. ») sans marque.
  if (out.length === 1 && out[0].langue === 'francais' && estEtranger(out[0].texte, matiere)) out[0].langue = matiere;
  return out;
}

/**
 * Découpe une fiche Markdown en segments à lire dans l'ordre.
 * Tableaux : chaque cellule est lue dans sa langue (vocabulaire : « hello » puis « bonjour »).
 */
export function segmentsFiche(markdown, matiere) {
  const md = String(markdown ?? '')
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/```[\s\S]*?```/g, ' ');
  const out = [];
  let paragraphe = [];
  let tableau = [];
  const vider = () => {
    if (paragraphe.length) segmentsTexte(paragraphe.join(' '), matiere, out);
    paragraphe = [];
  };
  // Tableau : la ligne d'en-tête est lue en français ; chaque colonne prend la langue
  // de la majorité de ses cellules (« chien » seul reste français dans la colonne Français).
  const viderTableau = () => {
    if (!tableau.length) return;
    const lignes = tableau.map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
    const aEntete = lignes.length > 1 && /^[\s:|-]+$/.test(tableau[1]);
    const corps = lignes.filter((_, i) => !(aEntete && (i === 0 || i === 1)) && !/^[\s:|-]+$/.test(tableau[i]));
    const nbCol = Math.max(...lignes.map((l) => l.length));
    const langueCol = [];
    for (let c = 0; c < nbCol; c++) {
      const cellules = corps.map((l) => propre(l[c] || '')).filter(Boolean);
      const etr = cellules.filter((x) => estEtranger(x, matiere)).length;
      langueCol[c] = LANGUES_PARLEES.includes(matiere) && cellules.length && etr / cellules.length > 0.5 ? matiere : 'francais';
    }
    // Plusieurs colonnes « étrangères » (mots seuls, sans mot outil français) : le titre décide.
    if (langueCol.filter((x) => x !== 'francais').length > 1) {
      const titres = aEntete ? lignes[0].map((c) => c.toLowerCase()) : [];
      const fr = titres.map((c) => /fran[cç]ais|sens|traduction|signification/.test(c));
      if (fr.some(Boolean)) fr.forEach((estFr, c) => { if (estFr) langueCol[c] = 'francais'; });
      else langueCol.forEach((x, c) => { if (c > 0 && x !== 'francais') langueCol[c] = 'francais'; });
    }
    const dire = (cellules, langues) => cellules.forEach((c, i) => {
      pousser(out, c, langues[i] || 'francais');
      const der = out[out.length - 1];
      if (der && !/[.!?:;]$/.test(der.texte)) der.texte += '.';
    });
    if (aEntete) dire(lignes[0], []);
    corps.forEach((l) => dire(l, langueCol));
    tableau = [];
  };
  for (const ligne of md.split(/\r?\n/)) {
    const l = ligne.trim();
    if (/^\|/.test(l)) {
      vider();
      tableau.push(l);
      continue;
    }
    viderTableau();
    if (!l) {
      vider();
    } else {
      // Un titre ou un élément de liste termine la phrase précédente.
      if (/^(#{1,6}\s|[-*+]\s|\d+[.)]\s)/.test(l)) vider();
      paragraphe.push(l.replace(/^#{1,6}\s+/, '').replace(/^[-*+]\s+|^\d+[.)]\s+/, ''));
      if (/^#{1,6}\s/.test(l)) vider();
    }
  }
  viderTableau();
  vider();
  return out;
}
