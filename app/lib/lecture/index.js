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

// Commandes LaTeX lues par un mot (les autres sont simplement retirées, jamais lues « backslash … »).
const COMMANDES = {
  // Lettres grecques
  alpha: 'alpha', beta: 'bêta', gamma: 'gamma', Gamma: 'gamma', delta: 'delta', Delta: 'delta', epsilon: 'epsilon',
  varepsilon: 'epsilon', zeta: 'zêta', eta: 'êta', theta: 'thêta', Theta: 'thêta', iota: 'iota', kappa: 'kappa',
  lambda: 'lambda', Lambda: 'lambda', mu: 'mu', nu: 'nu', xi: 'xi', pi: 'pi', Pi: 'pi', rho: 'rhô', sigma: 'sigma',
  Sigma: 'sigma', tau: 'tau', phi: 'phi', varphi: 'phi', Phi: 'phi', chi: 'khi', psi: 'psi', Psi: 'psi', omega: 'oméga', Omega: 'oméga',
  // Fonctions
  ln: 'logarithme népérien de', log: 'logarithme décimal de', exp: 'exponentielle de', cos: 'cosinus de', sin: 'sinus de',
  tan: 'tangente de', lim: 'limite', sum: 'somme', int: 'intégrale', max: 'maximum', min: 'minimum', arg: 'argument', deg: 'degré',
  // Opérations et relations
  times: 'fois', cdot: 'fois', div: 'divisé par', pm: 'plus ou moins', mp: 'moins ou plus',
  leqslant: 'inférieur ou égal à', leq: 'inférieur ou égal à', le: 'inférieur ou égal à',
  geqslant: 'supérieur ou égal à', geq: 'supérieur ou égal à', ge: 'supérieur ou égal à',
  neq: 'différent de', ne: 'différent de', approx: 'environ', simeq: 'environ', sim: 'équivalent à', equiv: 'congru à',
  propto: 'proportionnel à', ll: 'très inférieur à', gg: 'très supérieur à', lesssim: 'inférieur ou environ égal à',
  infty: 'l’infini', parallel: 'parallèle à', perp: 'perpendiculaire à', circ: 'rond', mid: 'tel que', nmid: 'ne divise pas',
  // Flèches et logique
  to: 'tend vers', rightarrow: 'donne', longrightarrow: 'donne', xrightarrow: 'donne', leftarrow: 'vient de', longleftarrow: 'vient de',
  Rightarrow: 'donc', Longrightarrow: 'donc', implies: 'donc', iff: 'équivaut à', Leftrightarrow: 'équivaut à',
  Longleftrightarrow: 'équivaut à', mapsto: 'associe', longmapsto: 'associe', rightleftharpoons: 'en équilibre avec',
  nearrow: 'croissante', searrow: 'décroissante', uparrow: 'augmente', downarrow: 'diminue',
  forall: 'pour tout', exists: 'il existe', in: 'appartient à', notin: 'n’appartient pas à', cap: 'inter', cup: 'union',
  subset: 'inclus dans', setminus: 'privé de', emptyset: 'ensemble vide', varnothing: 'ensemble vide', wedge: 'et',
  // Divers
  oplus: 'plus', ominus: 'moins',
  ell: 'l', imath: 'i', jmath: 'j', dots: '…', ldots: '…', cdots: '…', backslash: 'barre oblique inverse', checkmark: 'coché',
};
// Commandes « de mise en forme » dont on garde seulement le contenu (avec, parfois, un mot avant ou après).
const ENVELOPPES = [
  [/\\(?:text|textbf|textit|texttt|textrm|mathrm|mathbf|mathit|mathcal|mathbb|mathsf|boldsymbol|operatorname|boxed|underline|mbox|hbox|displaystyle|textstyle|phantom)\s*\{([^{}]*)\}/g, ' $1 '],
  [/\\(?:vec|overrightarrow)\s*\{([^{}]*)\}/g, ' vecteur $1 '],
  [/\\(?:overline|bar)\s*\{([^{}]*)\}/g, ' $1 barre '],
  [/\\(?:widehat|hat)\s*\{([^{}]*)\}/g, ' angle $1 '],
  [/\\(?:dot|ddot|tilde|widetilde)\s*\{([^{}]*)\}/g, ' $1 '],
  [/\\[dt]?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, ' $1 sur $2 '],
  [/\\[dt]?binom\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, ' $2 parmi $1 '],
  [/\\sqrt\s*\[\s*3\s*\]\s*\{([^{}]*)\}/g, ' racine cubique de $1 '],
  [/\\sqrt\s*\[([^\]]*)\]\s*\{([^{}]*)\}/g, ' racine d’indice $1 de $2 '],
  [/\\sqrt\s*\{([^{}]*)\}/g, ' racine de $1 '],
  [/\\underbrace\s*\{([^{}]*)\}\s*_\s*\{([^{}]*)\}/g, ' $1 ( $2 ) '],
  [/\\(?:overset|underset|stackrel)\s*\{[^{}]*\}\s*\{([^{}]*)\}/g, ' $1 '],
  [/\\xrightarrow\s*(?:\[[^\]]*\])?\s*\{([^{}]*)\}/g, ' donne ( $1 ) '],
];

/** Formule LaTeX → mots lus par la voix française (« 3 + 4 = 7 » → « 3 plus 4 égale 7 »). */
export function latexEnMots(f) {
  let s = String(f ?? '');
  // Ordinaux et degrés, avant que \text{…} ne soit déballé : 3^{e} → 3e ; 90^\circ → 90 degrés.
  // Charges des ions : H^{+} → H plus, Cu^{2+} → Cu 2 plus. Virgule décimale {,} d'abord (elle gêne \frac{7{,}5}{…}).
  s = s
    .replace(/\{,\}/g, ',')
    .replace(/\^\s*\{\s*(\d*)\s*([+−-])\s*\}|\^\s*([+−-])(?![\d{])/g, (_, n, sg, sg2) => ` ${n || ''} ${(sg || sg2) === '+' ? 'plus' : 'moins'} `)
    .replace(/(\d)\s*\^\s*\{?\s*(?:\\(?:text|mathrm)\s*\{\s*)?(er|re|e|ème|nd|nde)\s*\}?\s*\}?(?![a-zA-Z])/g, '$1$2')
    .replace(/\^\s*\{?\s*\\circ\s*\}?/g, ' degrés ')
    .replace(/\bbar\s+(\w)/g, '$1 barre');
  // Intégrales, sommes et limites avec leurs bornes.
  const borne = '(\\{[^{}]*\\}|\\\\?[a-zA-Z]+|[-−]?\\d+|\\S)';
  const sansAccolades = (x) => x.replace(/^\{|\}$/g, '');
  s = s
    .replace(new RegExp(`\\\\int\\s*_\\s*${borne}\\s*\\^\\s*${borne}`, 'g'), (_, a, b) => ` intégrale de ${sansAccolades(a)} à ${sansAccolades(b)} de `)
    .replace(new RegExp(`\\\\sum\\s*_\\s*${borne}\\s*\\^\\s*${borne}`, 'g'), (_, a, b) => ` somme pour ${sansAccolades(a)} jusqu'à ${sansAccolades(b)} de `)
    .replace(/\\lim\s*(?:\\limits)?\s*_\s*\{([^{}]*)\}/g, ' limite quand $1 de ');
  // Commandes à arguments, puissances et indices, de l'intérieur vers l'extérieur.
  for (let k = 0; k < 8; k++) {
    const avant = s;
    for (const [re, par] of ENVELOPPES) s = s.replace(re, par);
    s = s
      .replace(/\^\s*\{\s*([23])\s*\}/g, (_, n) => ` ${CHIFFRES_EXPOSANTS[n]} `)
      .replace(/\^\s*\{([^{}]*)\}/g, ' puissance $1 ')
      .replace(/_\s*\{([^{}]*)\}/g, ' $1 ');
    s = s.replace(/\\bar\s+(\w)/g, ' $1 barre ').replace(/\\vec\s+(\w)/g, ' vecteur $1 ').replace(/\\sqrt\s*(\d|\w)/g, ' racine de $1 ');
    if (s === avant) break;
  }
  s = s
    // Tableaux et alignements : \begin{cases} … \end{cases}, « & », « \\ » (pause).
    .replace(/\\(?:begin|end)\s*\{[a-zA-Z*]+\}(?:\s*\{[^{}]*\})?/g, ' ')
    .replace(/\\\\(?:\s*\[[^\]]*\])?/g, ' ; ')
    .replace(/&/g, ' ')
    .replace(/\\\|/g, ' norme ')
    .replace(/\\(?:hline|left|right|big|Big|bigg|Bigg|limits|nolimits|quad|qquad|not)(?![a-zA-Z])/g, ' ')
    .replace(/\{,\}/g, ',')
    .replace(/\\!/g, '')
    .replace(/\\[,;:>]|\\\s|~/g, ' ')
    .replace(/(\d)\s+(?=\d{3}\b)/g, '$1')
    // Puissances : ^2 / ^{2} → au carré (mais 10^{23} → puissance 23).
    .replace(/\^\s*(?:\{\s*([23])\s*\}|([23])(?!\d))/g, (_, a, b) => ` ${CHIFFRES_EXPOSANTS[a || b]} `)
    .replace(/\^\s*\{([^{}]*)\}|\^\s*(\\?[a-zA-Z]+|[-−]?\d|\S)/g, ' puissance $1$2 ')
    .replace(/_\s*\{([^{}]*)\}|_\s*(\\[a-zA-Z]+|\w)/g, ' $1$2 ')
    .replace(/_\s*\{([^{}]*)\}|_\s*(\\[a-zA-Z]+|\w)/g, ' $1$2 ')
    // Dérivées : f'(x) → f prime de x.
    .replace(/\b([a-zA-Z])''(?=\s*\()/g, '$1 seconde ')
    .replace(/\b([a-zA-Z])'(?=\s*\()/g, '$1 prime ')
    // Symboles Unicode.
    .replace(/×|⋅|·/g, ' fois ')
    .replace(/÷/g, ' divisé par ')
    .replace(/≤|⩽/g, ' inférieur ou égal à ')
    .replace(/≥|⩾/g, ' supérieur ou égal à ')
    .replace(/≠/g, ' différent de ')
    .replace(/≈/g, ' environ ')
    .replace(/±/g, ' plus ou moins ')
    .replace(/∞/g, ' l’infini ')
    .replace(/→|⟶/g, ' donne ')
    .replace(/⇒|⟹/g, ' donc ')
    .replace(/⇔|⟺/g, ' équivaut à ')
    .replace(/∈/g, ' appartient à ')
    .replace(/√/g, ' racine de ')
    .replace(/\\%|%/g, ' pour cent ')
    .replace(/°/g, ' degrés ')
    .replace(/degrés\s+C\b/g, 'degrés Celsius')
    // Autres commandes : un mot, ou rien.
    .replace(/\\([a-zA-Z]+)/g, (_, c) => ` ${COMMANDES[c] ?? ''} `)
    .replace(/\\./g, ' ')
    // Opérateurs.
    .replace(/\s*=\s*/g, ' égale ')
    .replace(/\s*\+\s*/g, ' plus ')
    // « - » entre deux mots (« grand-mère » dans un \text{…}) reste un trait d'union ; sinon c'est « moins ».
    .replace(/(?<!\p{L}\p{L})[-−]|[-−](?!\p{L}\p{L})/gu, ' moins ')
    .replace(/\s*<\s*/g, ' inférieur à ')
    .replace(/\s*>\s*/g, ' supérieur à ')
    .replace(/[{}|]/g, ' ')
    .replace(/\s+([,.;)])/g, '$1')
    .replace(/\(\s+/g, '(')
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
    .replace(/<\/?[a-zA-Z][^<>]*>/g, ' ') // vraies balises HTML seulement (« 2 300 < 2 310 » reste du texte)
    .replace(/[*_`~]/g, ' ')
    .replace(/<>/g, ' différent de ')
    .replace(/<=(?!>)/g, ' inférieur ou égal ')
    .replace(/(?<![<=])>=/g, ' supérieur ou égal ')
    // « 8 > 5 » se lit « 8 supérieur à 5 » ; le signe cité seul (« ne confonds pas < et > ») est nommé.
    .replace(/([^\s<>=-])\s*<\s*(?!(?:et|ou|veut|signifie|se|est)\b)(?=[\p{L}\p{N}(])/gu, '$1 inférieur à ')
    .replace(/([^\s<>=-])\s*>\s*(?!(?:et|ou|veut|signifie|se|est)\b)(?=[\p{L}\p{N}(])/gu, '$1 supérieur à ')
    .replace(/^\s*>\s?/, '') // citation Markdown
    .replace(/(^|\s)<(?=[\s.,;:!?]|$)/g, '$1signe inférieur')
    .replace(/(\S\s+)>(?=[\s.,;:!?]|$)/g, '$1signe supérieur')
    .replace(/\^/g, ' puissance ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[#>*_`~|{}]/g, ' ')
    .replace(/\bsignes?\s+(signe\s)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

const MAX_SEGMENT = 218;

/** Coupe une phrase trop longue en morceaux ≤ MAX_SEGMENT (aux virgules si possible, sinon aux espaces). */
function couperLong(phrase) {
  const res = [];
  let bloc = '';
  for (const mot of phrase.match(/[^,\s]+,?\s*|[,\s]+/g) || [phrase]) {
    if (bloc && bloc.length + mot.length > MAX_SEGMENT) {
      // Recule jusqu'à la dernière virgule du bloc si elle n'est pas trop loin.
      const v = bloc.lastIndexOf(', ');
      if (v > MAX_SEGMENT / 2) { res.push(bloc.slice(0, v + 2)); bloc = bloc.slice(v + 2); } else { res.push(bloc); bloc = ''; }
    }
    bloc += mot.length > MAX_SEGMENT ? mot.slice(0, MAX_SEGMENT) : mot;
  }
  if (bloc) res.push(bloc);
  return res;
}

/** Formules $…$ et $$…$$ (même sur plusieurs lignes) lues en mots, avant tout découpage du texte. */
export function formulesEnMots(texte) {
  return String(texte ?? '').replace(/\$\$([\s\S]*?)\$\$|\$((?:[^$\n]|\n(?![ \t]*\n))*)\$/g, (_, a, b) => ` ${latexEnMots((a ?? b).replace(/¦/g, '\\|'))} `);
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
  // On garde 2 caractères de marge pour la ponctuation ajoutée ensuite (« . » en fin de cellule, « , »).
  const sep = der && (suite || /[.!?:;]$/.test(der.texte)) ? ' ' : '. ';
  if (der && der.langue === langue && der.texte.length + sep.length + t.length <= MAX_SEGMENT) {
    der.texte += sep + t;
    return true;
  }
  if (t.length <= MAX_SEGMENT) { out.push({ texte: t, langue }); return true; }
  let bloc = '';
  const fermer = () => { if (bloc.trim()) out.push({ texte: bloc.trim(), langue }); bloc = ''; };
  for (const phrase of t.match(/[^.!?;]+[.!?;]*\s*/g) || [t]) {
    // Une phrase trop longue à elle seule est coupée aux virgules, puis aux espaces.
    const morceaux = phrase.length <= MAX_SEGMENT ? [phrase] : couperLong(phrase);
    for (const mc of morceaux) {
      if (bloc && bloc.length + mc.length > MAX_SEGMENT) fermer();
      bloc += mc;
    }
  }
  fermer();
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
  const s = sansGrasDansMot(formulesEnMots(texte));
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
  // Formules lues en mots d'abord : un « | », un « = » ou une parenthèse d'une formule ne doit pas
  // couper une cellule de tableau ou une phrase ; un $$…$$ sur plusieurs lignes reste d'un seul tenant.
  const md2 = formulesEnMots(md.replace(/\\\|/g, '¦'));
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
      // Hors langues vivantes, la cellule est lue telle quelle (ses parenthèses comptent : « (x + 1)² »).
      if (!LANGUES_PARLEES.includes(matiere)) { pousser(out, c, 'francais'); } else {
      const loc = [];
      decouper(c, matiere, langues[i] || 'francais', loc);
      loc.forEach((x, k) => pousser(out, x.texte, x.langue, k > 0));
      }
      const der = out[out.length - 1];
      if (der && !/[.!?:;]$/.test(der.texte)) der.texte += '.';
    });
    if (aEntete) dire(lignes[0], []);
    corps.forEach((l) => dire(l, langueCol));
    tableau = [];
  };
  for (const ligne of md2.split(/\r?\n/)) {
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
      paragraphe.push(l.replace(/^>\s?/, '').replace(/^#{1,6}\s+/, '').replace(/^[-*+]\s+|^\d+[.)]\s+/, ''));
      if (/^#{1,6}\s/.test(l)) vider();
    }
  }
  viderTableau();
  vider();
  return out;
}
