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

// ─── Détection de la langue d'un morceau ───────────────────────────────────────────
// Chaque mot donne un indice : « français », « langue étudiée » ou rien (mot commun aux deux,
// mot inconnu). Les indices viennent de petites listes de mots outils et de l'orthographe
// (accents, terminaisons, groupes de lettres impossibles dans l'autre langue).

// Mots très fréquents du français (mots outils, vocabulaire de grammaire des fiches).
const MOTS_FRANCAIS = new Set(('le la les l de des du un une et est sont en au aux à ce cette ces se ne pas que qui pour avec dans ' +
  'sur par il elle ils elles on nous vous je tu son sa ses leur leurs mon ma mes ton ta tes plus mais ou où c d qu s n j m t y ' +
  'été être avoir fait faire comme quand si très aussi ici dire veut veulent signifie mot mots exemple exemples phrase phrases verbe verbes nom noms ' +
  'moi toi lui eux soi ça cela ceci voici voilà rien tout tous toute toutes autre autres même quelque quelques chaque plusieurs beaucoup peu trop assez ' +
  'toujours jamais souvent parfois encore déjà avant après devant derrière depuis pendant chez sans sous vers dont donc car puis alors ensuite enfin ' +
  'pourquoi comment combien quel quelle quels quelles oui non bien mal chose choses lieu fois ai as avons avez ont suis es sommes êtes était va vont ' +
  'peut doit faut dit fois cas sens genre nombre temps mode forme formes accord accent accents lettre lettres son sons mot ' +
  'passé présent futur imparfait conditionnel subjonctif indicatif impératif infinitif gérondif participe auxiliaire ' +
  'pronom pronoms adjectif adjectifs adverbe article articles sujet complément singulier pluriel masculin féminin ' +
  'direct directe indirect indirecte défini indéfini personnel personnelle personne personnes radical terminaison terminaisons ' +
  'affirmatif affirmative négatif négative interrogatif interrogative question questions réponse vocabulaire traduction ' +
  'aime aimes aiment adore foot trois emploi emplois usage usages règle règles quatre ville villes pays monde centre reste seulement personnage confondre oublier utiliser mettre employer traduire accorder placer habitude habitudes discours droit gauche haut bas grand grande petit petite nord sud est ouest').split(' '));

// Mots que le français partage avec la langue étudiée : ils ne prouvent rien.
const COMMUNS = {
  espagnol: new Set('la de en que se a un una le les son no si me te mi tu sus su con por para es entre bien mal va nombre base simple sol cause dos nos os'.split(' ')),
  italien: new Set('la le de in se a un non si mi ti tu con per e il va dire ai lui base forme fine mal cause ne ci vi qui'.split(' ')),
  anglais: new Set('a on son car but plus as an me sur pour if article question questions accent accents direct indirect mode genre type simple base long sens fine'.split(' ')),
  allemand: new Set('du des an in so mal je mode genre plus elle fast'.split(' ')),
};

// Mots outils propres à la langue étudiée (absents du français).
const MOTS_ETRANGERS = {
  italien: new Set(('lo gli della delle dello degli del dei nel nella nei negli sul sulla al alla dal dalla sono è ho hai ha hanno ' +
    'sei siamo siete era ero essere avere che chi come dove quando perché cosa questo questa questi queste quello quella molto anche ' +
    'ancora sempre mai poi già io lei noi voi loro mio mia miei mie tuo tua suo sua nostro nostra vostro ciao grazie sì no di da ' +
    'una uno ecco bene piace piacciono ed od tra fra oggi domani ieri').split(' ')),
  espagnol: new Set(('el los las del al y está están estoy estás estamos soy eres somos hay muy pero porque por para con sin yo tú él ' +
    'ella ellos ellas usted ustedes nosotros vosotros su sus mis tus nuestro nuestra qué cómo dónde cuándo quién este esta esto ' +
    'estos estas ese esa eso aquí también sí no nunca siempre todo todos toda todas hola gracias una uno unos unas lo hace tengo ' +
    'tiene tienes voy vas ser estar ir hoy mañana ayer').split(' ')),
  anglais: new Set(('the and is are am was were be been has had do does did to of at with for from by it its this that these those ' +
    'he she we they you i my your his her our their him them not no yes can will would should could what who where when why how ' +
    'there here very some any or in').split(' ')),
  allemand: new Set(('der die das den dem ein eine einen einem einer und ist sind bin bist hat habe hast haben ich er sie es wir ihr ' +
    'mit von zu auf für nicht kein keine auch sehr ja nein wie was wo wer warum wann aber oder im am vom zum zur heute').split(' ')),
};

// Mots français en -o / -a (ne pas les prendre pour de l'italien ou de l'espagnol).
const FRANCAIS_EN_VOYELLE = new Set('photo radio piano auto stylo kilo euro trio duo loto lavabo moto metro zoo villa extra agenda panda coca sofa sauna pizza opera cinema'.split(' '));
// Mots d'emprunt courants en italien, terminés par une consonne.
const EMPRUNTS_IT = new Set('film sport tennis autobus bus chef internet tv bar gas jeans weekend rock computer hotel tram camion yogurt'.split(' '));

/** Indice donné par un mot : 'fr', 'etr' ou null. `m` est en minuscules. */
function indiceMot(m, matiere, majuscule = false) {
  const communs = COMMUNS[matiere];
  const etr = MOTS_ETRANGERS[matiere];
  // Élisions : « c'est », « j'ai », « l'école » (français) ; « c'è », « dov'è », « l'acqua » (italien).
  const el = m.match(/^(qu|[cdjlmnst])'(.*)$/);
  if (el) {
    const [, pre, reste] = el;
    if (matiere === 'italien') {
      if (/^(qu|j|n|s|m|t)$/.test(pre) || (pre === 'c' && /^(est|ét)/.test(reste))) return 'fr';
      return reste ? indiceMot(reste, matiere) : null;
    }
    if (matiere === 'anglais' || matiere === 'allemand' || matiere === 'espagnol') return 'fr';
  }
  if (matiere === 'anglais' && /'(s|t|m|re|ll|ve|d)$/.test(m)) return 'etr';
  const b = m.replace(/'.*$/, '');
  if (communs && communs.has(b)) return null;
  if (etr && etr.has(b)) return 'etr';
  if (MOTS_FRANCAIS.has(b)) return 'fr';
  // Lettres propres au français.
  if (/[êâîôûçœëï]/.test(m)) return 'fr';
  if (/(?:eau|eaux|eux|euse|euses|aient|oir|oire)$/.test(m)) return 'fr';
  if (matiere === 'italien') {
    if (/[éèà](?=\p{L})/u.test(m)) return 'fr';            // « père », « été » (en italien, l'accent est final)
    if (/é$/.test(m) && !/ché$/.test(m) && m.length > 2) return 'fr'; // « passé » (mais « perché »)
    if (/[àèìòù]$/.test(m) && m !== 'où') return 'etr';    // città, caffè, più
    if (/ou/.test(m)) return 'fr';
    if (/(?:zione|zioni|mente|iamo|zz)/.test(m) || m.length >= 5 && /(?:are|ere)$/.test(m) && !/aire$/.test(m)
      || m.length >= 6 && /ire$/.test(m) && !/[uoa]ire$/.test(m)) return 'etr'; // « parlare », « dormire »
    if (EMPRUNTS_IT.has(b)) return null;
    if (m.length >= 5 && /[bcdfghjkmpqstvwxz]$/.test(m) || m.length >= 3 && /x$/.test(m)) return 'fr'; // « direct », « voix »
    if (m.length >= 4 && /(?:[aeiou]l|ur|ir|eur|on|en|in|an|ent|ant)$/.test(m) && !/^(?:buon|nessun|alcun|ciascun|signor|quel|bel)$/.test(m)) return 'fr';
    if (majuscule) return null; // « Marco » : un prénom ne dit rien de la langue
    if (m.length >= 3 && /[oa]$/.test(m) && !/ra$/.test(m) && !FRANCAIS_EN_VOYELLE.has(b)) return 'etr';
    return null;
  }
  if (/[èà]/.test(m)) return 'fr';
  if (matiere === 'espagnol') {
    if (/ñ|[áíóú]/.test(m)) return 'etr';
    // « numéro » : un é avant la dernière syllabe d'un mot en voyelle n'existe pas en espagnol (« número »).
    if (/é[^aeiouáéíóú\s]+[aeiou]+[ns]?$/.test(m)) return 'fr';
    if (/ou|qu[aoôu]|ée|é.*é|eaux?$|ain$|oi(?:[rstxe]|$)|([bdfgmpstvz])\1/.test(m) && m !== 'sois') return 'fr';
    if (/(?:tion|tions|ment|ait|(?<!b)ais|ent|eur|eurs)$/.test(m) || /[bcfghkmpqtvwx]$/.test(m) && m.length >= 3) return 'fr';
    if (/(?:ción|ciones|dad|mente)$/.test(m) || /^ll/.test(m) || m.length >= 5 && /ar$/.test(m)) return 'etr'; // « hablar »
    if (majuscule) return null;
    if (m.length >= 3 && /(?:o|os|a|as)$/.test(m) && !/ras?$/.test(m) && !FRANCAIS_EN_VOYELLE.has(b)) return 'etr';
    return null;
  }
  if (/é/.test(m)) return 'fr';
  if (matiere === 'anglais') {
    if (/(?:th|sh|ck|ght|ing$|ly$|oo|ee|w)/.test(m)) return 'etr';
    return null;
  }
  if (matiere === 'allemand') {
    if (/[äöüß]|sch|tz|(?:ung|chen|lich|keit|heit)$|^[wk]/.test(m)) return 'etr';
    if (/(?:ait|ais|aient)$|ou(?!r)/.test(m)) return 'fr';
    return null;
  }
  return null;
}

/** Compte les indices d'un morceau : { mots, fr, etr }. */
export function indicesLangue(morceau, matiere) {
  const mots = String(morceau).normalize('NFC').replace(/[’]/g, "'")
    .split(/[^a-zA-Zà-öø-ÿÀ-ÖØ-ÞœŒæÆßñÑ']+/).map((m) => m.replace(/^'+|'+$/g, '')).filter(Boolean);
  let fr = 0;
  let etr = 0;
  for (const m of mots) {
    const i = indiceMot(m.toLowerCase(), matiere, /^\p{Lu}/u.test(m));
    // Un mot outil connu compte double ; un indice d'orthographe compte simple.
    const b = m.toLowerCase().replace(/'.*$/, '');
    const poids = MOTS_FRANCAIS.has(b) || (MOTS_ETRANGERS[matiere] && MOTS_ETRANGERS[matiere].has(b)) ? 2 : 1;
    if (i === 'fr') fr += poids;
    else if (i === 'etr') etr += poids;
  }
  // Ponctuation espagnole.
  if (matiere === 'espagnol' && /[¿¡]/.test(morceau)) etr++;
  return { mots: mots.length, fr, etr };
}

/**
 * Ce morceau est-il dans la langue étrangère de la matière (et non en français) ?
 * `prudent` : seulement s'il y a plus d'indices étrangers que d'indices français (texte
 * non marqué) ; sinon, un morceau sans aucun indice français (« Hello! ») est étranger.
 */
export function estEtranger(morceau, matiere, prudent = false) {
  if (!LANGUES_PARLEES.includes(matiere)) return false;
  const { mots, fr, etr } = indicesLangue(morceau, matiere);
  if (!mots) return false;
  if (etr > fr) return true;
  if (prudent) return false;
  if (fr === 0) return true;
  // Une longue phrase étrangère avec un seul mot qui ressemble au français.
  return etr > 0 && mots >= 8 && fr / mots < 0.12;
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
 * Langue d'un morceau de texte non marqué, lu par défaut dans la langue `defaut`.
 * `precedente` : langue du morceau d'avant ; un morceau sans aucun indice la garde
 * (« Lui ___ (credere) alle favole » : « alle favole » reste en italien).
 */
function langueLibre(morceau, matiere, defaut, precedente = null) {
  const { mots, fr, etr } = indicesLangue(morceau, matiere);
  if (mots && !fr && !etr && precedente) return precedente;
  if (defaut === 'francais') return etr > fr ? matiere : 'francais';
  return fr > etr ? 'francais' : defaut;
}

/**
 * Découpe un texte en segments { texte, langue } (ajoutés à `loc`).
 *  - passages en **gras**, en *italique*, entre « … » ou "…" : leur langue est devinée ;
 *  - reste du texte, découpé en propositions (« : », « → », « = », parenthèses, fin de phrase) :
 *    lu dans la langue `defaut`, sauf proposition nettement dans l'autre langue
 *    (« Dov'è la stazione? → Où est la gare ? », « il nonno (le grand-père) »).
 * @returns {boolean} vrai si quelque chose a été ajouté
 */
function decouper(texte, matiere, defaut, loc) {
  const s = String(texte ?? '');
  const re = /\*\*([^*]+)\*\*|(?<![*\w])\*([^*\s][^*]*?)\*(?![*\w])|«\s*([^»]+?)\s*»|"([^"]+)"|“([^”]+)”/g;
  let i = 0;
  let m;
  let suite = false; // après le premier morceau, on est dans la même phrase
  let parentheses = 0; // entre parenthèses : souvent une traduction (« il nonno (le grand-père) »)
  // Un morceau sans indice garde la langue du précédent s'il le prolonge après une parenthèse
  // (« Lui ___ (credere) alle favole »), pas après « : », « = », « → » ou un point.
  let prolonge = false;
  const libre = (t) => {
    const morceaux = t.split(/(\s*[()]\s*|(?<=[.!?;:→=])\s+|\s+(?=[→=]))/);
    morceaux.forEach((mc, k) => {
      if (k % 2) { // séparateur
        const sep = mc.trim();
        if (sep === '(') parentheses++;
        if (sep === ')') parentheses = Math.max(0, parentheses - 1);
        prolonge = sep === ')';
        return;
      }
      if (!mc) return;
      // « , » ou « : » seul (après un passage marqué) : rattaché au morceau d'avant (pause).
      if (/^[,;:]+$/.test(mc.trim())) {
        const der = loc[loc.length - 1];
        if (der && !/[,;:.!?…]$/.test(der.texte)) der.texte += mc.trim();
        return;
      }
      const precedente = prolonge && !parentheses && loc.length ? loc[loc.length - 1].langue : null;
      suite = pousser(loc, mc, langueLibre(mc, matiere, parentheses ? 'francais' : defaut, precedente), suite) || suite;
      prolonge = false;
    });
  };
  while ((m = re.exec(s))) {
    let dedans = m[1] ?? m[2] ?? m[3] ?? m[4] ?? m[5];
    let avant = s.slice(i, m.index);
    const etranger = estEtranger(dedans, matiere);
    // « L'*imperfetto* » : l'article élidé est lu avec le mot.
    const el = etranger && matiere === 'italien' && avant.match(/(?:^|\s)((?:[LlDd]|[Dd]ell|[Uu]n|[Nn]ell|[Aa]ll)')$/);
    if (el) { avant = avant.slice(0, -el[1].length); dedans = el[1] + dedans; }
    libre(avant);
    suite = pousser(loc, dedans, etranger ? matiere : 'francais', suite) || suite;
    prolonge = false;
    i = m.index + m[0].length;
  }
  libre(s.slice(i));
  return suite;
}

/**
 * Découpe une phrase (énoncé, explication) : les passages en langue étrangère (marqués par
 * le gras, les guillemets… ou nettement étrangers) sont lus avec la voix de la matière.
 * @returns {Array<{texte, langue}>}  langue = la matière (voix étrangère) ou 'francais'
 */
export function segmentsTexte(texte, matiere, out = [], defaut = 'francais') {
  const s = sansGrasDansMot(texte);
  if (!LANGUES_PARLEES.includes(matiere)) { pousser(out, s, 'francais'); return out; }
  const loc = [];
  decouper(s, matiere, defaut, loc);
  // Une phrase entière en langue étrangère (« I like apples. ») sans marque.
  if (loc.length === 1 && loc[0].langue === 'francais' && estEtranger(loc[0].texte, matiere)) loc[0].langue = matiere;
  loc.forEach((x, k) => pousser(out, x.texte, x.langue, k > 0));
  return out;
}

/** « parl**avo** » (terminaison en gras) → « parlavo » : un seul mot, lu d'un trait. */
function sansGrasDansMot(t) {
  return String(t ?? '').replace(/(\p{L})\*\*(\p{L}+)\*\*/gu, '$1$2').replace(/\*\*(\p{L}+)\*\*(?=\p{L})/gu, '$1');
}

/** Cellule de tableau sans ses parenthèses (« il nonno (le grand-père) » → « il nonno »). */
function sansParentheses(c) {
  return propre(c || '').replace(/\([^()]*\)/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Découpe une fiche Markdown en segments à lire dans l'ordre.
 * Tableaux : chaque cellule est lue dans sa langue (vocabulaire : « hello » puis « bonjour »).
 */
export function segmentsFiche(markdown, matiere) {
  const md = sansGrasDansMot(markdown)
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
      // La langue d'une colonne se juge sans les parenthèses (« il nonno (le grand-père) »).
      const cellules = corps.map((l) => sansParentheses(l[c])).filter(Boolean);
      const etr = cellules.filter((x) => estEtranger(x, matiere)).length;
      langueCol[c] = LANGUES_PARLEES.includes(matiere) && cellules.length && etr / cellules.length > 0.5 ? matiere : 'francais';
    }
    // Plusieurs colonnes « étrangères » (mots seuls, sans mot outil français) : le titre décide.
    if (langueCol.filter((x) => x !== 'francais').length > 1) {
      const titres = aEntete ? lignes[0].map((c) => propre(c).toLowerCase()) : [];
      const fr = titres.map((c) => /fran[cç]ais|sens|traduction|signification/.test(c));
      if (fr.some(Boolean)) fr.forEach((estFr, c) => { if (estFr) langueCol[c] = 'francais'; });
      else {
        langueCol.forEach((x, c) => {
          if (c === 0 || x === 'francais') return;
          // On garde la voix étrangère si le titre l'annonce (« Italien », « -are (parlare) »)
          // ou si les cellules ont nettement plus d'indices étrangers que français.
          let nFr = 0;
          let nEtr = 0;
          corps.forEach((l) => { const r = indicesLangue(sansParentheses(l[c]), matiere); nFr += r.fr; nEtr += r.etr; });
          const titre = titres[c] || '';
          const garde = /italien|espagnol|anglais|allemand|langue/.test(titre) || (titre && estEtranger(titre, matiere, true)) || nEtr > nFr;
          if (!garde) langueCol[c] = 'francais';
        });
      }
    }
    const dire = (cellules, langues) => cellules.forEach((c, i) => {
      // Chaque cellule est découpée : « il nonno (le grand-père) » → deux voix.
      const loc = [];
      decouper(c, matiere, langues[i] || 'francais', loc);
      loc.forEach((x, k) => pousser(out, x.texte, x.langue, k > 0));
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
