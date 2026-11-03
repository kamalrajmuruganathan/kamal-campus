/**
 * Vérification indépendante des générateurs de QCM.
 *
 * Pour chaque générateur, sur des milliers de tirages à graine fixe, on RELIT
 * l'énoncé, on RECALCULE la bonne réponse ici (sans appeler le code du modèle),
 * et on contrôle : 4 choix distincts (aussi en valeur : « 2 » = « 4/2 »),
 * exactement un juste (aucun distracteur n'a la valeur de la réponse, aucune forme
 * « aussi correcte » proposée comme piège), index valide, texte propre (pas de
 * NaN / undefined, pas de « 1x », pas de « + 0 », virgule décimale, typographie
 * française), LaTeX accepté par KaTeX (si KaTeX est installé), valeurs adaptées
 * au niveau (pas de nombre négatif en primaire ni en 6e).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import * as M from './modeles.js';
import { REGISTRE, genererQuestions } from './index.js';

let katex = null;
try { katex = createRequire(import.meta.url)('katex'); } catch { katex = null; }

// RNG déterministe (mulberry32).
function rng(graine) {
  let a = graine >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Lecture des valeurs ──────────────────────────────────────────────────────

const UNITE = /\s*(€|cm²|cm³|cm|g\/cm³|m\/s|N·m|N\/mm²|Wh|W|V|N|%|mm|km|min|m|s|h|jours)$/;

/** Nombre écrit à la française en LaTeX (« 12\,500 », « 84{,}5 ») → Number. */
function nombre(s) {
  return Number(String(s).replace(/\{,\}/g, '.').replace(/\\,/g, '').replace(/\s/g, ''));
}

/** Valeur numérique d'un choix (fraction, puissance, nombre, avec ou sans unité). */
function valeur(choix) {
  let s = String(choix).replace(/\$/g, '').trim();
  s = s.replace(/^x = /, '').replace(UNITE, '').trim();
  let m = /^(-)?\\dfrac\{(\d+)\}\{(\d+)\}$/.exec(s);
  if (m) return (m[1] ? -1 : 1) * Number(m[2]) / Number(m[3]);
  m = /^(\d+)\^\{(\d+)\}$/.exec(s);
  if (m) return Number(m[1]) ** Number(m[2]);
  if (/^-?[\d\\,{}]+$/.test(s)) return nombre(s);
  return NaN;
}

/** Unité finale d'un choix (« 12 m/s » → « m/s »), '' sinon. */
function unite(choix) {
  const m = UNITE.exec(String(choix).replace(/\$/g, '').trim());
  return m ? m[1] : '';
}

/** Polynôme « 2x^2 - x + 3 » → { a, b, c }. */
function polynome(t) {
  const s = t.replace(/\s/g, '');
  const re = /([+-]?)(\d*)(x\^2|x)?/g;
  let a = 0; let b = 0; let c = 0; let m;
  while ((m = re.exec(s)) !== null) {
    if (m[0] === '') { re.lastIndex += 1; if (re.lastIndex > s.length) break; continue; }
    const k = (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : Number(m[2]));
    if (m[3] === 'x^2') a += k; else if (m[3] === 'x') b += k; else c += k;
  }
  return { a, b, c };
}

function lire(re, texte) {
  const m = re.exec(texte);
  assert.ok(m, `énoncé inattendu : ${texte}`);
  return m.slice(1).map((x) => (/^-?\d+$/.test(x) ? Number(x) : x));
}

const pgcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };

// ── Réponses recalculées : générateur → (question) => valeur attendue ─────────
// Chaque solveur renvoie { valeur, unite? } (numérique) ou { texte } (forme exacte).

const NUMERIQUES = {
  eqLineaire: (q) => { const [a, s, b, c] = lire(/\$(-?\d+)x ([+-]) (\d+) = (-?\d+)\$/, q.enonce); return { valeur: (c - (s === '-' ? -b : b)) / a }; },
  eqSimple5e: (q) => {
    const m = /\$x \+ (\d+) = (\d+)\$/.exec(q.enonce);
    if (m) return { valeur: Number(m[2]) - Number(m[1]) };
    const [a, c] = lire(/\$(\d+)x = (\d+)\$/, q.enonce); return { valeur: c / a };
  },
  fractionSomme6e: (q) => fraction56(q),
  fractionSomme5e: (q) => fraction56(q),
  fractionSomme: (q) => { const [a, b, c, d] = lire(/\\dfrac\{(-?\d+)\}\{(\d+)\} \+ \\dfrac\{(-?\d+)\}\{(\d+)\}/, q.enonce); return { valeur: a / b + c / d }; },
  puissancesProduit: (q) => { const [a, m, a2, n] = lire(/\$(\d+)\^\{(\d+)\} \\times (\d+)\^\{(\d+)\}\$/, q.enonce); assert.equal(a, a2); return { valeur: a ** (m + n), texte: `$${a}^{${m + n}}$` }; },
  proportionnalite: (q) => { const [q1, p1, q2] = lire(/^(\d+) articles identiques coûtent (\d+) €\. Combien coûtent (\d+) articles/, q.enonce); return { valeur: (p1 / q1) * q2, unite: '€' }; },
  pourcentage: (q) => { const [p, n] = lire(/\$(\d+)\\,\\%\$ de \$(\d+)\$/, q.enonce); return { valeur: (p * n) / 100 }; },
  relatifsSomme: (q) => { const [a, b] = lire(/\$\(([+-]?\d+)\) \+ \(([+-]?\d+)\)\$/, q.enonce).map(Number); return { valeur: a + b }; },
  relatifsProduit: (q) => { const [a, b] = lire(/\$\(([+-]?\d+)\) \\times \(([+-]?\d+)\)\$/, q.enonce).map(Number); return { valeur: a * b }; },
  moyenne: (q) => {
    const [serie] = lire(/série : \$(.*)\$ \?/, q.enonce);
    const v = String(serie).split(' \\, ; \\, ').map(Number);
    return { valeur: v.reduce((s, x) => s + x, 0) / v.length };
  },
  discriminant: (q) => { const [t] = lire(/discriminant de \$(.*)\$ \?/, q.enonce); const { a, b, c } = polynome(String(t)); return { valeur: b * b - 4 * a * c }; },
  nombreDerive: (q) => { const [t, x0] = lire(/f\(x\) = (.*)\$\. Que vaut \$f'\((-?\d+)\)\$/, q.enonce); const { a, b } = polynome(String(t)); return { valeur: 2 * a * x0 + b }; },
  suiteArithmetique: (q) => { const [u0, r, n] = lire(/u_0 = (-?\d+)\$ et de raison \$r = (-?\d+)\$\. Que vaut \$u_\{(\d+)\}/, q.enonce); return { valeur: u0 + n * r }; },
  suiteGeometrique: (q) => { const [u0, r, n] = lire(/u_0 = (-?\d+)\$ et de raison \$q = (-?\d+)\$\. Que vaut \$u_\{(\d+)\}/, q.enonce); return { valeur: u0 * r ** n }; },
  produitScalaire: (q) => { const [a, b, c, d] = lire(/\\vec\{u\}\((-?\d+)\\,;(-?\d+)\)\$ et \$\\vec\{v\}\((-?\d+)\\,;(-?\d+)\)\$/, q.enonce); return { valeur: a * c + b * d }; },
  additionSimple: (q) => { const [a, b] = lire(/^Combien font (\d+) \+ (\d+) \?$/, q.enonce); return { valeur: a + b }; },
  soustractionSimple: (q) => { const [a, b] = lire(/^Combien font (\d+) − (\d+) \?$/, q.enonce); return { valeur: a - b }; },
  multiplicationSimple: (q) => { const [a, b] = lire(/^Combien font (\d+) × (\d+) \?$/, q.enonce); return { valeur: a * b }; },
  complementDix: (q) => { const [a] = lire(/^(\d+) \+ \? = 10\./, q.enonce); return { valeur: 10 - a }; },
  leDouble: (q) => { const [a] = lire(/double de (\d+) \?/, q.enonce); return { valeur: 2 * a }; },
  racineCarreParfait: (q) => { const [n] = lire(/\\sqrt\{(\d+)\}/, q.enonce); return { valeur: Math.sqrt(n) }; },
  masseVolumique: (q) => { const [m, v] = lire(/masse de (\d+) g et un volume de (\d+) cm³/, q.enonce); return { valeur: m / v, unite: 'g/cm³' }; },
  vitesse: (q) => { const [d, t] = lire(/parcourt (\d+) m en (\d+) s\./, q.enonce); return { valeur: d / t, unite: 'm/s' }; },
  loiOhm: (q) => { const [r, i] = lire(/résistance de (\d+) Ω .* courant de (\d+) A\./, q.enonce); return { valeur: r * i, unite: 'V' }; },
  puissanceUI: (q) => { const [u, i] = lire(/sous (\d+) V .* courant de (\d+) A\./, q.enonce); return { valeur: u * i, unite: 'W' }; },
  moment: (q) => { const [f, d] = lire(/force de (\d+) N s'applique à (\d+) m /, q.enonce); return { valeur: f * d, unite: 'N·m' }; },
  contrainte: (q) => { const [s, f] = lire(/section (\d+) mm² subit une force de traction de (\d+) N\./, q.enonce); return { valeur: f / s, unite: 'N/mm²' }; },
  rendement: (q) => { const [pa, pu] = lire(/puissance de (\d+) W et fournit une puissance utile de (\d+) W\./, q.enonce); return { valeur: (pu / pa) * 100, unite: '%' }; },
  perimetreRectangle: (q) => { const [l1, l2] = lire(/mesure \$(\d+)\$ cm de long et \$(\d+)\$ cm de large\. Quel est son périmètre/, q.enonce); return { valeur: 2 * l1 + 2 * l2, unite: 'cm' }; },
  aireRectangle: (q) => { const [l1, l2] = lire(/mesure \$(\d+)\$ cm de long et \$(\d+)\$ cm de large\. Quelle est son aire/, q.enonce); return { valeur: l1 * l2, unite: 'cm²' }; },
  aireTriangle: (q) => { const [b, h] = lire(/base de \$(\d+)\$ cm et une hauteur de \$(\d+)\$ cm/, q.enonce); return { valeur: (b * h) / 2, unite: 'cm²' }; },
  fonctionAffine: (q) => { const [a, s, b, x] = lire(/f\(x\) = (-?\d+)x ([+-]) (\d+)\$\. Combien vaut \$f\((-?\d+)\)\$/, q.enonce); return { valeur: a * x + (s === '-' ? -b : b) }; },
  pythagore: (q) => { const [a, b] = lire(/mesurent \$(\d+)\$ et \$(\d+)\$/, q.enonce); return { valeur: Math.hypot(a, b) }; },
  trigRatio: (q) => {
    const [h, adj, opp, f] = lire(/hypoténuse \$(\d+)\$, côté adjacent .* mesurant \$(\d+)\$, côté opposé mesurant \$(\d+)\$\. Que vaut \$\\(cos|sin|tan)/, q.enonce);
    assert.equal(adj * adj + opp * opp, h * h, `triangle non rectangle : ${q.enonce}`);
    return { valeur: { cos: adj / h, sin: opp / h, tan: opp / adj }[f] };
  },
  distanceParcourue: (q) => { const [v, t] = lire(/à (\d+) m\/s pendant (\d+) s\./, q.enonce); return { valeur: v * t, unite: 'm' }; },
  dureeParcours: (q) => { const [v, d] = lire(/à (\d+) m\/s et parcourt (\d+) m\./, q.enonce); return { valeur: d / v, unite: 's' }; },
  poids: (q) => { const [m] = lire(/masse \$(\d+)\$ kg/, q.enonce); return { valeur: m * 10, unite: 'N' }; },
  energiePuissanceTemps: (q) => { const [p, t] = lire(/puissance \$(\d+)\$ W fonctionne pendant \$(\d+)\$ h/, q.enonce); return { valeur: p * t, unite: 'Wh' }; },
  conversionLongueur: (q) => {
    const [vers, n, de] = lire(/^Combien de (\w+) y a-t-il dans \$(\d+)\$ (\w+) \?$/, q.enonce);
    const mm = { km: 1e6, m: 1000, cm: 10, mm: 1 };
    return { valeur: (n * mm[de]) / mm[vers], unite: vers };
  },
  conversionDuree: (q) => duree(q, { 'heures→minutes': [60, 'min'], 'minutes→secondes': [60, 's'], 'jours→heures': [24, 'h'] }),
  conversionDureeCM1: (q) => duree(q, { 'heures→minutes': [60, 'min'], 'jours→heures': [24, 'h'], 'semaines→jours': [7, 'jours'] }),
  penseUnNombre6e: (q) => { const [a, b, c] = lire(/multiplie par (\d+), puis j'ajoute (\d+) : j'obtiens (\d+)\./, q.enonce); return { valeur: (c - b) / a }; },
  schemaBarres6e: (q) => { const [k, t] = lire(/a (\d+) fois plus de \w+ que \w+\. Ensemble, ils en ont (\d+)\./, q.enonce); return { valeur: t / (k + 1) }; },
  motifEvolutif6e: (q) => { const [u1, u2, u3, n] = lire(/formé de (\d+) allumettes à l'étape 1, (\d+) à l'étape 2, (\d+) à l'étape 3, .* l'étape (\d+) \?/, q.enonce); assert.equal(u3 - u2, u2 - u1); return { valeur: u1 + (n - 1) * (u2 - u1) }; },
};

function fraction56(q) {
  const [a, b, op, c, d] = lire(/\\dfrac\{(\d+)\}\{(\d+)\} ([+-]) \\dfrac\{(\d+)\}\{(\d+)\}/, q.enonce);
  return { valeur: op === '+' ? a / b + c / d : a / b - c / d };
}

function duree(q, table) {
  const [vers, n, de] = lire(/^Combien (?:de |d')(\w+) y a-t-il dans (\d+) (\w+) \?$/, q.enonce);
  const t = table[`${de}→${vers}`];
  assert.ok(t, `conversion inattendue : ${q.enonce}`);
  return { valeur: n * t[0], unite: t[1] };
}

// ── Langues : tables écrites indépendamment des modèles ─────────────────────

const IRR_EN = {
  go: ['went', 'gone'], see: ['saw', 'seen'], take: ['took', 'taken'], give: ['gave', 'given'], come: ['came', 'come'],
  know: ['knew', 'known'], get: ['got', 'got'], make: ['made', 'made'], find: ['found', 'found'], think: ['thought', 'thought'],
  buy: ['bought', 'bought'], bring: ['brought', 'brought'], teach: ['taught', 'taught'], catch: ['caught', 'caught'],
  eat: ['ate', 'eaten'], drink: ['drank', 'drunk'], drive: ['drove', 'driven'], write: ['wrote', 'written'],
  speak: ['spoke', 'spoken'], break: ['broke', 'broken'], choose: ['chose', 'chosen'], begin: ['began', 'begun'],
  sing: ['sang', 'sung'], swim: ['swam', 'swum'], ride: ['rode', 'ridden'], fall: ['fell', 'fallen'], fly: ['flew', 'flown'],
  grow: ['grew', 'grown'], throw: ['threw', 'thrown'], wear: ['wore', 'worn'], sell: ['sold', 'sold'], tell: ['told', 'told'],
  feel: ['felt', 'felt'], keep: ['kept', 'kept'], leave: ['left', 'left'], lose: ['lost', 'lost'], meet: ['met', 'met'],
  pay: ['paid', 'paid'], send: ['sent', 'sent'], sleep: ['slept', 'slept'], spend: ['spent', 'spent'], win: ['won', 'won'],
  build: ['built', 'built'], hear: ['heard', 'heard'], hold: ['held', 'held'], stand: ['stood', 'stood'],
  understand: ['understood', 'understood'], run: ['ran', 'run'],
};
/** Autres formes admises (variantes) qui ne doivent jamais servir de piège. */
const VARIANTES_EN = { get: ['gotten'], fish: ['fishes'], person: ['persons'], bus: ['busses'], travel: ['traveled'] };

const PLURIELS_EN = {
  man: 'men', woman: 'women', child: 'children', foot: 'feet', tooth: 'teeth', mouse: 'mice', person: 'people',
  leaf: 'leaves', knife: 'knives', wife: 'wives', life: 'lives', city: 'cities', baby: 'babies', country: 'countries',
  box: 'boxes', watch: 'watches', bus: 'buses', tomato: 'tomatoes', sheep: 'sheep', fish: 'fish',
};

function preteritEN(v) {
  if (['stop', 'plan', 'travel'].includes(v)) return `${v}${v.at(-1)}ed`; // consonne doublée (anglais britannique pour travel)
  if (v.endsWith('e')) return `${v}d`;
  if (/[^aeiou]y$/.test(v)) return `${v.slice(0, -1)}ied`;
  return `${v}ed`;
}

const PASSIF_EN = { // verbe conjugué → participe passé ; complément → auxiliaire
  cooks: 'cooked', explains: 'explained', build: 'built', sells: 'sold', paints: 'painted', clean: 'cleaned',
  delivers: 'delivered', speak: 'spoken',
};
const AUX_EN = { 'the meal': 'is', 'the lesson': 'is', 'the houses': 'are', 'the tickets': 'are', 'the picture': 'is', 'the classroom': 'is', 'the letters': 'are', English: 'is' };

const PERS_ES = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos/ellas'];
const PRES_ES = { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] };
const INDEF_ES = { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] };
const IRR_ES = {
  ser: 'soy eres es somos sois son', estar: 'estoy estás está estamos estáis están', tener: 'tengo tienes tiene tenemos tenéis tienen',
  ir: 'voy vas va vamos vais van', hacer: 'hago haces hace hacemos hacéis hacen', poder: 'puedo puedes puede podemos podéis pueden',
};

const PERS_DE = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const PRES_DE = ['e', 'st', 't', 'en', 't', 'en'];
const IRR_DE = {
  sein: 'bin bist ist sind seid sind', haben: 'habe hast hat haben habt haben', werden: 'werde wirst wird werden werdet werden',
  können: 'kann kannst kann können könnt können', müssen: 'muss musst muss müssen müsst müssen',
};
const GENRE_DE = {
  Mann: 'der', Frau: 'die', Kind: 'das', Tisch: 'der', Tür: 'die', Buch: 'das', Hund: 'der', Katze: 'die', Haus: 'das',
  Apfel: 'der', Schule: 'die', Auto: 'das', Baum: 'der', Blume: 'die', Wasser: 'das', Tag: 'der', Nacht: 'die', Jahr: 'das',
  Freund: 'der', Familie: 'die',
};

const PERS_IT = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
const PRES_IT = { are: ['o', 'i', 'a', 'iamo', 'ate', 'ano'], ere: ['o', 'i', 'e', 'iamo', 'ete', 'ono'], ire: ['o', 'i', 'e', 'iamo', 'ite', 'ono'] };
const IRR_IT = {
  essere: 'sono sei è siamo siete sono', avere: 'ho hai ha abbiamo avete hanno', andare: 'vado vai va andiamo andate vanno',
  fare: 'faccio fai fa facciamo fate fanno', stare: 'sto stai sta stiamo state stanno', potere: 'posso puoi può possiamo potete possono',
};
const PP_IT_IRREGULIERS = { aprire: 'aperto' };

const PERS_FR = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];

const conj = (re, q) => lire(re, q.enonce);

const TEXTES = {
  verbeIrregulierPreterit: (q) => { const [v] = conj(/prétérit du verbe « (\w+) »/, q); return { texte: IRR_EN[v][0], admis: [] }; },
  verbeIrregulierParticipe: (q) => { const [v] = conj(/participe passé de « (\w+) »/, q); return { texte: IRR_EN[v][1], admis: VARIANTES_EN[v] ?? [] }; },
  plurielIrregulier: (q) => { const [s] = conj(/pluriel de « (\w+) »/, q); return { texte: PLURIELS_EN[s], admis: VARIANTES_EN[s] ?? [] }; },
  preteritRegulier: (q) => { const [v] = conj(/verbe régulier « (\w+) »/, q); return { texte: preteritEN(v), admis: VARIANTES_EN[v] ?? [] }; },
  actifPassif: (q) => {
    const [phrase] = conj(/« (.*)\. »$/, q);
    const verbe = Object.keys(PASSIF_EN).find((v) => phrase.includes(` ${v} `));
    const [sujet, objet] = phrase.split(` ${verbe} `);
    const cap = objet.charAt(0).toUpperCase() + objet.slice(1);
    return { texte: `${cap} ${AUX_EN[objet]} ${PASSIF_EN[verbe]} by ${sujet.charAt(0).toLowerCase() + sujet.slice(1)}.`, admis: [] };
  },
  presenteRegularES: (q) => { const [v, p] = conj(/« (\w+) » au présent avec « ([^»]+) »/, q); return { texte: v.slice(0, -2) + PRES_ES[v.slice(-2)][PERS_ES.indexOf(p)], admis: [] }; },
  preteritoRegularES: (q) => { const [v, p] = conj(/« (\w+) » au pretérito indefinido avec « ([^»]+) »/, q); return { texte: v.slice(0, -2) + INDEF_ES[v.slice(-2)][PERS_ES.indexOf(p)], admis: [] }; },
  verboIrregularPresenteES: (q) => { const [v, p] = conj(/« (\w+) » au présent avec « ([^»]+) »/, q); return { texte: IRR_ES[v].split(' ')[PERS_ES.indexOf(p)], admis: [] }; },
  praesensRegularDE: (q) => { const [v, p] = conj(/« (\S+) » au présent avec « ([^»]+) »/, q); return { texte: v.slice(0, -2) + PRES_DE[PERS_DE.indexOf(p)], admis: [] }; },
  seinHabenModalDE: (q) => { const [v, p] = conj(/« (\S+) » au présent avec « ([^»]+) »/, q); return { texte: IRR_DE[v].split(' ')[PERS_DE.indexOf(p)], admis: [] }; },
  artikelGenusDE: (q) => { const [n] = conj(/de « (\S+) » \?/, q); return { texte: GENRE_DE[n], admis: [] }; },
  presenteRegularIT: (q) => { const [v, p] = conj(/« (\w+) » au présent avec « ([^»]+) »/, q); return { texte: v.slice(0, -3) + PRES_IT[v.slice(-3)][PERS_IT.indexOf(p)], admis: [] }; },
  verbiIrregolariPresenteIT: (q) => { const [v, p] = conj(/« (\w+) » au présent avec « ([^»]+) »/, q); return { texte: IRR_IT[v].split(' ')[PERS_IT.indexOf(p)], admis: [] }; },
  participioPassatoIT: (q) => {
    const [v] = conj(/participe passé de « (\w+) »/, q);
    const reg = v.slice(0, -3) + { are: 'ato', ere: 'uto', ire: 'ito' }[v.slice(-3)];
    return { texte: PP_IT_IRREGULIERS[v] ?? reg, admis: [] };
  },
  presentERegulierFR: (q) => { const [v, p] = conj(/« (\w+) » au présent de l'indicatif avec « ([^»]+) »/, q); return { texte: v.slice(0, -2) + ['e', 'es', 'e', 'ons', 'ez', 'ent'][PERS_FR.indexOf(p)], admis: [] }; },
  imparfaitERegulierFR: (q) => { const [v, p] = conj(/« (\w+) » à l'imparfait avec « ([^»]+) »/, q); return { texte: v.slice(0, -2) + ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'][PERS_FR.indexOf(p)], admis: [] }; },
  futurERegulierFR: (q) => { const [v, p] = conj(/« (\w+) » au futur simple avec « ([^»]+) »/, q); return { texte: v + ['ai', 'as', 'a', 'ons', 'ez', 'ont'][PERS_FR.indexOf(p)], admis: [] }; },
  divisionEuclidienne: (q) => {
    const [a, b] = lire(/de \$(\d+)\$ par \$(\d+)\$ :/, q.enonce);
    return { texte: `quotient ${Math.floor(a / b)}, reste ${a % b}`, admis: [] };
  },
  secondDegreRacines: (q) => {
    const [t] = lire(/Résoudre \$(.*) = 0\$\./, q.enonce);
    const { a, b, c } = polynome(String(t));
    const d = Math.sqrt(b * b - 4 * a * c);
    const r = [(-b - d) / (2 * a), (-b + d) / (2 * a)].sort((x, y) => x - y);
    assert.ok(r.every(Number.isInteger) && r[0] !== r[1], `racines non entières ou double : ${q.enonce}`);
    return { texte: `$x = ${r[0]}$ ou $x = ${r[1]}$`, admis: [`$x = ${r[1]}$ ou $x = ${r[0]}$`] };
  },
};

const DIFFICULTES = new Set(['facile', 'moyen', 'difficile']);
const GENERATEURS = Object.entries(M).filter(([, v]) => typeof v === 'function');
const TIRAGES = 1500;

test('chaque générateur exporté a un solveur indépendant dans ce test', () => {
  for (const [nom] of GENERATEURS) {
    assert.ok(NUMERIQUES[nom] || TEXTES[nom], `${nom} : ajouter un solveur dans verification.test.js`);
  }
});

/** Contrôles de texte communs à toutes les questions. */
function controlerTexte(nom, q) {
  for (const texte of [q.enonce, q.explication, ...q.choix]) {
    assert.equal(typeof texte, 'string', `${nom} : texte non chaîne`);
    assert.ok(!/NaN|undefined|Infinity|null|\[object/.test(texte), `${nom} : valeur cassée dans « ${texte} »`);
    assert.ok(!/\d\.\d/.test(texte), `${nom} : point décimal dans « ${texte} »`);
    assert.equal((texte.match(/(?<!\\)\$/g) || []).length % 2, 0, `${nom} : $ impair dans « ${texte} »`);
  }
  assert.ok(q.enonce.trim().length > 10, `${nom} : énoncé trop court`);
  assert.ok(q.explication.trim().length > 5, `${nom} : explication vide`);
  // Écriture mathématique propre dans l'énoncé : pas de « 1x », pas de « + 0 », pas de « + - ».
  assert.ok(!/(^|[^\d])1x/.test(q.enonce), `${nom} : « 1x » dans « ${q.enonce} »`);
  assert.ok(!/[+-] 0(?![\d{,])/.test(q.enonce), `${nom} : « + 0 » dans « ${q.enonce} »`);
  assert.ok(!/[+-] -|\+ \+/.test(q.enonce), `${nom} : double signe dans « ${q.enonce} »`);
  // Typographie française hors formules : espace avant « ? ! ; : ».
  const horsMaths = q.enonce.replace(/\$[^$]*\$/g, 'M');
  assert.ok(!/[^\s\u00a0\u202f]([?!;])/.test(horsMaths), `${nom} : espace manquante avant ? ! ; dans « ${q.enonce} »`);
  assert.ok(!/[^\s\u00a0\u202f\d]:/.test(horsMaths), `${nom} : espace manquante avant « : » dans « ${q.enonce} »`);
  for (const c of q.choix) assert.equal(c, c.trim(), `${nom} : choix avec espaces superflues « ${c} »`);
}

function controlerKatex(nom, q) {
  if (!katex) return;
  for (const texte of [q.enonce, q.explication, ...q.choix]) {
    const re = /(?<!\\)\$([^$]+?)(?<!\\)\$/g; let m;
    while ((m = re.exec(texte))) {
      assert.doesNotThrow(() => katex.renderToString(m[1], { throwOnError: true, strict: 'ignore' }),
        `${nom} : LaTeX refusé par KaTeX « ${m[1]} »`);
    }
  }
}

for (const [nom, gen] of GENERATEURS) {
  test(`${nom} : ${TIRAGES} tirages, bonne réponse recalculée, un seul choix juste`, () => {
    const rand = rng(nom.split('').reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7));
    const positions = [0, 0, 0, 0];
    for (let i = 0; i < TIRAGES; i++) {
      const q = gen(rand);
      assert.equal(q.choix.length, 4, `${nom} : 4 choix`);
      assert.equal(new Set(q.choix).size, 4, `${nom} : choix en double ${q.choix.join(' / ')}`);
      assert.ok(Number.isInteger(q.reponse) && q.reponse >= 0 && q.reponse < 4, `${nom} : index invalide`);
      assert.ok(DIFFICULTES.has(q.difficulte), `${nom} : difficulté ${q.difficulte}`);
      assert.ok(typeof q.notion === 'string' && q.notion.trim().length > 0, `${nom} : notion vide`);
      positions[q.reponse] += 1;
      controlerTexte(nom, q);
      if (i < 300) controlerKatex(nom, q);
      const bonne = q.choix[q.reponse];
      if (NUMERIQUES[nom]) {
        const att = NUMERIQUES[nom](q);
        const vals = q.choix.map(valeur);
        assert.ok(Number.isFinite(vals[q.reponse]), `${nom} : réponse illisible « ${bonne} »`);
        assert.ok(Math.abs(vals[q.reponse] - att.valeur) < 1e-9, `${nom} : « ${q.enonce} » → marqué ${bonne}, attendu ${att.valeur}`);
        if (att.texte) assert.equal(bonne, att.texte, `${nom} : forme attendue ${att.texte}`);
        if (att.unite) for (const c of q.choix) assert.equal(unite(c), att.unite, `${nom} : unité de « ${c} »`);
        // Exactement un juste : aucune autre valeur égale (« 2 » et « 4/2 » seraient deux bonnes réponses).
        vals.forEach((v, k) => {
          if (k !== q.reponse) assert.ok(!(Math.abs(v - att.valeur) < 1e-9), `${nom} : deux choix valent ${att.valeur} (${q.choix.join(' / ')})`);
        });
        const finies = vals.filter(Number.isFinite);
        assert.equal(new Set(finies.map((v) => v.toFixed(9))).size, finies.length, `${nom} : deux choix de même valeur ${q.choix.join(' / ')}`);
      } else {
        const att = TEXTES[nom](q);
        assert.ok(att.texte, `${nom} : solveur sans réponse pour « ${q.enonce} »`);
        assert.equal(bonne, att.texte, `${nom} : « ${q.enonce} » → marqué ${bonne}, attendu ${att.texte}`);
        q.choix.forEach((c, k) => {
          if (k === q.reponse) return;
          assert.notEqual(c, att.texte, `${nom} : la bonne réponse est aussi en distracteur`);
          assert.ok(!att.admis.includes(c), `${nom} : « ${c} » est aussi correct (${q.enonce})`);
        });
      }
    }
    // La bonne réponse n'est pas toujours au même endroit : chaque position ≈ 25 %.
    for (const p of positions) assert.ok(p > TIRAGES * 0.18 && p < TIRAGES * 0.32, `${nom} : positions ${positions}`);
  });
}

// ── Valeurs précises calculées à la main ──────────────────────────────────────

test('solveurs du test : valeurs connues', () => {
  assert.equal(valeur('$-\\dfrac{3}{4}$'), -0.75);
  assert.equal(valeur('$12\\,500$ €'), 12500);
  assert.equal(valeur('$112{,}5$'), 112.5);
  assert.equal(valeur('$3^{4}$'), 81);
  assert.equal(valeur('$x = -2$'), -2);
  assert.equal(valeur('12 N/mm²'), 12);
  assert.ok(Number.isNaN(valeur('quotient 3, reste 1')));
  assert.deepEqual(polynome('2x^2 - x + 3'), { a: 2, b: -1, c: 3 });
  assert.deepEqual(polynome('x^2 + x - 6'), { a: 1, b: 1, c: -6 });
  assert.deepEqual(polynome('4x^2 - 6x'), { a: 4, b: -6, c: 0 });
  assert.equal(preteritEN('study'), 'studied');
  assert.equal(preteritEN('enjoy'), 'enjoyed');
  assert.equal(preteritEN('stop'), 'stopped');
  assert.equal(preteritEN('live'), 'lived');
});

test('anglais : aucune forme admise (fishes, persons, busses, traveled) proposée comme piège', () => {
  const rand = rng(77);
  const interdits = new Set(['fishes', 'persons', 'busses', 'traveled']);
  for (let i = 0; i < 3000; i++) {
    for (const g of [M.plurielIrregulier, M.preteritRegulier]) {
      const q = g(rand);
      q.choix.forEach((c, k) => { if (k !== q.reponse) assert.ok(!interdits.has(c), `${q.enonce} : ${c}`); });
    }
  }
});

test('italien : « aprire » n’est jamais demandé au participe passé régulier (aperto)', () => {
  const rand = rng(5);
  for (let i = 0; i < 2000; i++) {
    const q = M.participioPassatoIT(rand);
    assert.ok(!q.enonce.includes('aprire'), q.enonce);
    assert.ok(!q.choix.includes('aprito') || q.choix[q.reponse] !== 'aprito');
  }
});

test('second degré : deux racines distinctes, jamais « x = 3 ou x = 3 »', () => {
  const rand = rng(8);
  for (let i = 0; i < 3000; i++) {
    const q = M.secondDegreRacines(rand);
    const m = /\$x = (-?\d+)\$ ou \$x = (-?\d+)\$/.exec(q.choix[q.reponse]);
    assert.notEqual(m[1], m[2], q.enonce);
  }
});

test('moyenne : toutes les valeurs de la série sont positives', () => {
  const rand = rng(9);
  for (let i = 0; i < 3000; i++) {
    const q = M.moyenne(rand);
    const serie = /série : \$(.*)\$ \?/.exec(q.enonce)[1].split(' \\, ; \\, ').map(Number);
    assert.ok(serie.every((v) => Number.isInteger(v) && v >= 1), q.enonce);
  }
});

test('fractionSomme : fractions de l’énoncé irréductibles', () => {
  const rand = rng(10);
  for (let i = 0; i < 2000; i++) {
    const q = M.fractionSomme(rand);
    const [, a, b, c, d] = /\\dfrac\{(-?\d+)\}\{(\d+)\} \+ \\dfrac\{(-?\d+)\}\{(\d+)\}/.exec(q.enonce).map(Number);
    assert.equal(pgcd(a, b), 1, q.enonce);
    assert.equal(pgcd(c, d), 1, q.enonce);
  }
});

test('relatifs : le signe des nombres positifs est écrit, « (+5) + (-3) »', () => {
  const rand = rng(11);
  for (let i = 0; i < 500; i++) {
    const q = M.relatifsSomme(rand);
    assert.match(q.enonce, /^Calculer \$\([+-]\d+\) \+ \([+-]\d+\)\$\.$/);
    const p = M.relatifsProduit(rand);
    assert.match(p.enonce, /^Calculer \$\([+-]\d+\) \\times \([+-]\d+\)\$\.$/);
  }
});

test('division euclidienne : énoncé au pluriel « quels sont le quotient et le reste »', () => {
  const q = M.divisionEuclidienne(rng(1));
  assert.match(q.enonce, /quels sont le quotient et le reste \?$/);
});

// ── Chapitres du registre : niveau et lot de 20 ─────────────────────────────

const PRIMAIRE_6E = /^(cp|ce1|ce2|cm1|cm2|6e)-/;

test('registre : chaque chapitre donne 20 questions valides, ids 1..20', () => {
  const rand = rng(2027);
  for (const id of Object.keys(REGISTRE)) {
    for (let lot = 0; lot < 5; lot++) {
      const qs = genererQuestions(id, 20, rand);
      assert.equal(qs.length, 20, id);
      assert.deepEqual(qs.map((q) => q.id), Array.from({ length: 20 }, (_, i) => i + 1), id);
      for (const q of qs) {
        assert.equal(new Set(q.choix).size, 4, id);
        assert.ok(q.reponse >= 0 && q.reponse < q.choix.length, id);
      }
    }
  }
});

test('primaire et 6e : aucun nombre négatif, ni dans l’énoncé ni dans les choix', () => {
  const rand = rng(2028);
  for (const id of Object.keys(REGISTRE).filter((k) => PRIMAIRE_6E.test(k))) {
    for (let lot = 0; lot < 30; lot++) {
      for (const q of genererQuestions(id, 20, rand)) {
        for (const t of [q.enonce, ...q.choix]) {
          assert.ok(!/(^|[\s$(=])[-−]\s?\d/.test(t.replace(/\d+ − \d+/g, '')), `${id} : nombre négatif dans « ${t} »`);
        }
      }
    }
  }
});

test('lots de 20 : autant d’énoncés distincts que le générateur peut en offrir', () => {
  const rand = rng(2029);
  // Petits espaces de tirage (Pythagore : 9 triplets) : les écrans complètent alors avec la banque
  // écrite (sansDoublons + completerQuestions). On vérifie seulement que le lot n'en perd pas.
  for (const id of Object.keys(REGISTRE)) {
    const espace = new Set();
    for (let i = 0; i < 2000; i++) for (const g of REGISTRE[id]) espace.add(g(rand).enonce);
    const qs = genererQuestions(id, 20, rand);
    const distincts = new Set(qs.map((q) => q.enonce)).size;
    assert.ok(distincts >= Math.min(20, espace.size), `${id} : ${distincts} énoncés distincts sur 20 (espace ${espace.size})`);
  }
});

test('puissancesProduit : jamais deux choix de même valeur (25^9 = 5^18)', () => {
  const rand = rng(12);
  for (let i = 0; i < 3000; i++) {
    const q = M.puissancesProduit(rand);
    const vals = q.choix.map((c) => { const [, b, e] = /\$(\d+)\^\{(\d+)\}\$/.exec(c); return Number(e) * Math.log(Number(b)); });
    for (let j = 0; j < 4; j++) for (let k = j + 1; k < 4; k++) assert.ok(Math.abs(vals[j] - vals[k]) > 1e-9, q.choix.join(' / '));
  }
});

// ── Briques du noyau ─────────────────────────────────────────────────────────

test('noyau : fracLatex réduit, porte le signe au numérateur, rend un entier si possible', async () => {
  const { fracLatex, avecSigne, entier, entierNonNul, construireQuestion } = await import('./noyau.js');
  assert.equal(fracLatex(6, 8), '\\dfrac{3}{4}');
  assert.equal(fracLatex(3, -6), '-\\dfrac{1}{2}');
  assert.equal(fracLatex(-4, -6), '\\dfrac{2}{3}');
  assert.equal(fracLatex(12, 4), '3');
  assert.equal(fracLatex(0, 7), '0');
  assert.equal(avecSigne(3), '+ 3');
  assert.equal(avecSigne(-3), '- 3');
  const rand = rng(1);
  const vus = new Set();
  for (let i = 0; i < 2000; i++) {
    const e = entier(rand, -2, 2);
    assert.ok(Number.isInteger(e) && e >= -2 && e <= 2);
    vus.add(e);
    assert.notEqual(entierNonNul(rand, -1, 1), 0);
  }
  assert.equal(vus.size, 5, 'bornes incluses');
  // Pas assez de distracteurs distincts : erreur explicite plutôt qu'une question à 3 choix.
  assert.throws(() => construireQuestion({ enonce: 'Q', bonne: '1', distracteurs: ['2', '2', '1', '3'], explication: '' }, rand), /distracteurs insuffisants/);
  const q = construireQuestion({ enonce: 'Q', bonne: '1', distracteurs: ['2', '2', '1', '3', '4', '5'], explication: 'E', difficulte: 'facile', notion: 'n' }, rand);
  assert.deepEqual([...q.choix].sort(), ['1', '2', '3', '4']);
  assert.equal(q.choix[q.reponse], '1');
});
