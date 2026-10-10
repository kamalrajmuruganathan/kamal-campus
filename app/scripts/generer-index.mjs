#!/usr/bin/env node
/**
 * Génère `src/contenu-index.js` en scannant le répertoire `contenu/`.
 *
 * POURQUOI CE SCRIPT EXISTE
 * Le bundler React Native (Metro) résout les imports STATIQUEMENT : il ne sait
 * pas lire un fichier dont le chemin est calculé à l'exécution. On ne peut donc
 * pas parcourir `contenu/` depuis l'application. Ce script produit un module
 * JavaScript contenant des imports explicites de chaque fiche et de chaque QCM.
 *
 * À relancer après tout ajout ou suppression de chapitre :
 *     npm run preparer
 */

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fusionnerAttendus } from '../lib/autocorrection/index.js';

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE_APP = join(ICI, '..');
const CONTENU = join(RACINE_APP, '..', 'contenu');
const FORMULAIRES_DIR = join(RACINE_APP, '..', 'formulaires');
const SUJETS_DIR = join(RACINE_APP, '..', 'sujets');
const QUIZ_DIR = join(RACINE_APP, '..', 'quiz');
const SORTIE = join(RACINE_APP, 'src', 'contenu-index.js');

// ─────────────────────────── libellés d'affichage ───────────────────────────

// Source de vérité unique des niveaux : l'ordre de ce tableau EST la progression
// pédagogique affichée. Le tri alphabétique placerait « seconde » après
// « premiere » — d'où la table d'ordre plutôt qu'un localeCompare.
// Ajouter un niveau = ajouter une ligne ici, à sa place dans la scolarité.
const NIVEAUX = [
  ['cp', 'CP'],
  ['ce1', 'CE1'],
  ['ce2', 'CE2'],
  ['cm1', 'CM1'],
  ['cm2', 'CM2'],
  ['sixieme', 'Sixième'],
  ['cinquieme', 'Cinquième'],
  ['quatrieme', 'Quatrième'],
  ['troisieme', 'Troisième'],
  ['seconde', 'Seconde'],
  ['premiere', 'Première'],
  ['premiere-techno', 'Première technologique'],
  ['terminale', 'Terminale'],
  ['terminale-techno', 'Terminale technologique'],
];

const LIBELLES_NIVEAU = Object.fromEntries(NIVEAUX);
const ORDRE_NIVEAU = new Map(NIVEAUX.map(([clef], i) => [clef, i]));

// Ces clefs sont les NOMS DE RÉPERTOIRE sous contenu/<niveau>/, et non le champ
// `parcours` de l'en-tête YAML : en Seconde, les deux matières partagent le même
// parcours (« tronc-commun ») mais vivent dans des répertoires distincts.
const LIBELLES_PARCOURS = {
  maths: 'Mathématiques',
  'physique-chimie': 'Physique-chimie',
  'maths-specialite': 'Spécialité mathématiques',
  'maths-complementaires': 'Maths complémentaires',
  'maths-expertes': 'Maths expertes',
  'maths-enseignement-scientifique': 'Maths — enseignement scientifique',
  'pc-maths-sti2d-stl': 'Physique-chimie et maths — STI2D/STL',
  'pc-sante-st2s': 'Physique-chimie pour la santé — ST2S',
  'spcl-stl': 'Sciences physiques en laboratoire — STL',
  'enseignement-scientifique': 'Enseignement scientifique',
  'tronc-commun': 'Tronc commun',
  si: 'Sciences de l’ingénieur',
  sciences: 'Sciences',
  svt: 'SVT',
  techno: 'Technologie',
  snt: 'SNT',
  nsi: 'NSI',
  anglais: 'Anglais',
  espagnol: 'Espagnol',
  allemand: 'Allemand',
  italien: 'Italien',
  francais: 'Français',
  'hist-geo': 'Histoire-Géo-EMC',
  philosophie: 'Philosophie',
  ses: 'SES',
  hggsp: 'HGGSP',
  arts: 'Arts / Histoire des arts',
  'langues-anciennes': 'Langues anciennes',
  'grand-oral': 'Grand oral',
};

const LIBELLES_MATIERE = {
  mathematiques: 'Mathématiques',
  'physique-chimie': 'Physique-chimie',
  'enseignement-scientifique': 'Enseignement scientifique',
  si: 'Sciences de l’ingénieur',
  sciences: 'Sciences',
  svt: 'SVT',
  techno: 'Technologie',
  snt: 'SNT',
  nsi: 'NSI',
  anglais: 'Anglais',
  espagnol: 'Espagnol',
  allemand: 'Allemand',
  italien: 'Italien',
  francais: 'Français',
  'hist-geo': 'Histoire-Géo-EMC',
  philosophie: 'Philosophie',
  ses: 'SES',
  hggsp: 'HGGSP',
  arts: 'Arts / Histoire des arts',
  'langues-anciennes': 'Langues anciennes',
  'grand-oral': 'Grand oral',
};

// ─────────────────────────── lecture de l'en-tête ───────────────────────────

/** Extrait l'en-tête YAML d'une fiche. Analyseur volontairement minimal. */
function lireEntete(chemin) {
  const texte = readFileSync(chemin, 'utf8');
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(texte);
  if (!m) return {};
  const meta = {};
  let clefListe = null;
  for (const ligne of m[1].split(/\r?\n/)) {
    const item = /^\s*-\s+(.*)$/.exec(ligne);
    if (item && clefListe) {
      meta[clefListe].push(nettoyer(item[1]));
      continue;
    }
    const paire = /^([A-Za-z_]+):\s*(.*)$/.exec(ligne);
    if (!paire) continue;
    const [, clef, brut] = paire;
    if (brut === '') {
      clefListe = clef;
      meta[clef] = [];
    } else {
      clefListe = null;
      meta[clef] = nettoyer(brut);
    }
  }
  return meta;
}

const nettoyer = (s) => s.trim().replace(/^["'](.*)["']$/, '$1');

// ────────────────────────────── parcours du disque ──────────────────────────

const dossiers = (chemin) => {
  try {
    return readdirSync(chemin).filter((n) => !n.startsWith('.') && statSync(join(chemin, n)).isDirectory());
  } catch {
    return [];
  }
};

const chapitres = [];

for (const niveau of dossiers(CONTENU)) {
  for (const parcours of dossiers(join(CONTENU, niveau))) {
    for (const chapitre of dossiers(join(CONTENU, niveau, parcours))) {
      const dossier = join(CONTENU, niveau, parcours, chapitre);
      const fiche = join(dossier, 'fiche.md');
      const qcm = join(dossier, 'qcm.json');
      const exercice = join(dossier, 'exercice.json');
      const outil = join(dossier, 'outil.json');
      const flash = join(dossier, 'flashcards.json');

      let meta;
      try {
        meta = lireEntete(fiche);
      } catch {
        console.warn(`  ⚠️  fiche.md illisible ou absente : ${niveau}/${parcours}/${chapitre}`);
        continue;
      }

      let nbQuestions = 0;
      try {
        nbQuestions = JSON.parse(readFileSync(qcm, 'utf8')).questions.length;
      } catch {
        console.warn(`  ⚠️  qcm.json illisible ou absent : ${niveau}/${parcours}/${chapitre}`);
      }

      // exercice.json et outil.json sont OPTIONNELS : un chapitre peut n'avoir
      // ni exercices ni outil de calcul associé.
      let nbExercices = 0;
      let aExercice = false;
      if (existsSync(exercice)) {
        try {
          nbExercices = JSON.parse(readFileSync(exercice, 'utf8')).exercices.length;
          aExercice = true;
        } catch {
          console.warn(`  ⚠️  exercice.json illisible : ${niveau}/${parcours}/${chapitre}`);
        }
      }

      let outils = [];
      if (existsSync(outil)) {
        try {
          outils = JSON.parse(readFileSync(outil, 'utf8')).outils ?? [];
        } catch {
          console.warn(`  ⚠️  outil.json illisible : ${niveau}/${parcours}/${chapitre}`);
        }
      }

      // flashcards.json OPTIONNEL : cartes de révision recto/verso.
      let nbFlashcards = 0;
      let aFlashcards = false;
      if (existsSync(flash)) {
        try {
          nbFlashcards = JSON.parse(readFileSync(flash, 'utf8')).cartes.length;
          aFlashcards = true;
        } catch {
          console.warn(`  ⚠️  flashcards.json illisible : ${niveau}/${parcours}/${chapitre}`);
        }
      }

      chapitres.push({
        id: meta.id ?? `${niveau}-${parcours}-${chapitre}`,
        dossier: chapitre,
        niveau,
        parcours,
        titre: meta.titre ?? chapitre,
        matiere: meta.matiere ?? 'mathematiques',
        programme: meta.programme ?? '',
        duree: Number(meta.duree_lecture_min ?? 10),
        prerequis: meta.prerequis ?? [],
        statut: meta.statut ?? 'brouillon',
        reluPar: meta.relu_par === 'null' ? null : (meta.relu_par ?? null),
        nbQuestions,
        nbExercices,
        aExercice,
        nbFlashcards,
        aFlashcards,
        outils,
        cheminFiche: './' + relative(join(RACINE_APP, 'src'), fiche).split('\\').join('/'),
        cheminQcm: './' + relative(join(RACINE_APP, 'src'), qcm).split('\\').join('/'),
        cheminExercice: aExercice
          ? './' + relative(join(RACINE_APP, 'src'), exercice).split('\\').join('/')
          : null,
        cheminFlashcards: aFlashcards
          ? './' + relative(join(RACINE_APP, 'src'), flash).split('\\').join('/')
          : null,
        // Réponses courtes acceptées (facultatif) : rend plus d'exercices vérifiables par l'appli.
        cheminAttendus: aExercice && existsSync(join(dossier, 'attendus.json'))
          ? './' + relative(join(RACINE_APP, 'src'), join(dossier, 'attendus.json')).split('\\').join('/')
          : null,
      });
    }
  }
}

// Un niveau inconnu de NIVEAUX est rejeté en fin de liste plutôt que masqué,
// et signalé plus bas : mieux vaut un affichage bancal qu'un chapitre invisible.
const rang = (niveau) => ORDRE_NIVEAU.get(niveau) ?? Number.MAX_SAFE_INTEGER;

// Ordre des chapitres dans une matière : celui de l'année scolaire, donné par
// contenu/<niveau>/<parcours>/ordre.json (liste des dossiers). Un chapitre absent
// de la liste passe après, par ordre alphabétique (et il est signalé).
const ordres = new Map();
for (const [niveau, parcours] of [...new Set(chapitres.map((c) => `${c.niveau}|${c.parcours}`))].map((k) => k.split("|"))) {
  const f = join(CONTENU, niveau, parcours, 'ordre.json');
  if (!existsSync(f)) continue;
  try {
    const liste = JSON.parse(readFileSync(f, 'utf8'));
    ordres.set(`${niveau}|${parcours}`, new Map(liste.map((d, i) => [d, i])));
  } catch {
    console.warn(`  ⚠️  ordre.json illisible : ${niveau}/${parcours}`);
  }
}
const rangChapitre = (c) => ordres.get(`${c.niveau}|${c.parcours}`)?.get(c.dossier) ?? Number.MAX_SAFE_INTEGER;
for (const c of chapitres) {
  const o = ordres.get(`${c.niveau}|${c.parcours}`);
  if (o && !o.has(c.dossier)) console.warn(`  ⚠️  ${c.niveau}/${c.parcours}/${c.dossier} absent de ordre.json : placé en fin de liste.`);
}

chapitres.sort((a, b) => rang(a.niveau) - rang(b.niveau)
  || a.parcours.localeCompare(b.parcours)
  || rangChapitre(a) - rangChapitre(b)
  || a.dossier.localeCompare(b.dossier));

const niveauxInconnus = [...new Set(chapitres.map((c) => c.niveau))]
  .filter((n) => !ORDRE_NIVEAU.has(n));
for (const n of niveauxInconnus) {
  console.warn(`  ⚠️  niveau « ${n} » absent de NIVEAUX : libellé brut et tri en fin de liste.`);
}

for (const p of [...new Set(chapitres.map((c) => c.parcours))].filter((p) => !(p in LIBELLES_PARCOURS))) {
  console.warn(`  ⚠️  parcours « ${p} » absent de LIBELLES_PARCOURS : le nom de répertoire s'affichera tel quel.`);
}

// ────────────────────────────── génération ──────────────────────────────────

// ─────────────────────────── formulaires (aide-mémoire) ─────────────────────
// Fichiers Markdown de formulaires/*.md, indépendants des chapitres.
const formulaires = [];
if (existsSync(FORMULAIRES_DIR)) {
  for (const f of readdirSync(FORMULAIRES_DIR)) {
    if (!f.endsWith('.md')) continue;
    const chemin = join(FORMULAIRES_DIR, f);
    let meta;
    try { meta = lireEntete(chemin); } catch { console.warn(`  ⚠️  formulaire illisible : ${f}`); continue; }
    formulaires.push({
      id: meta.id ?? f.replace(/\.md$/, ''),
      titre: meta.titre ?? f,
      niveau: meta.niveau ?? '',
      matiere: meta.matiere ?? 'mathematiques',
      statut: meta.statut ?? 'brouillon',
      reluPar: meta.relu_par === 'null' ? null : (meta.relu_par ?? null),
      chemin: './' + relative(join(RACINE_APP, 'src'), chemin).split('\\').join('/'),
    });
  }
  formulaires.sort((a, b) => rang(a.niveau) - rang(b.niveau) || a.matiere.localeCompare(b.matiere));
}

const importsFormulaires = formulaires.map((f, i) => `import formulaire${i} from '${f.chemin}';`).join('\n');
const entreesFormulaires = formulaires.map((f, i) => `  {
    id: ${JSON.stringify(f.id)},
    titre: ${JSON.stringify(f.titre)},
    niveau: ${JSON.stringify(f.niveau)},
    matiere: ${JSON.stringify(f.matiere)},
    statut: ${JSON.stringify(f.statut)},
    reluPar: ${JSON.stringify(f.reluPar)},
    contenu: formulaire${i},
  },`).join('\n');

// ─────────────────────────── sujets (annales complètes) ─────────────────────
const sujets = [];
if (existsSync(SUJETS_DIR)) {
  for (const f of readdirSync(SUJETS_DIR)) {
    if (!f.endsWith('.md')) continue;
    const chemin = join(SUJETS_DIR, f);
    let meta;
    try { meta = lireEntete(chemin); } catch { console.warn(`  ⚠️  sujet illisible : ${f}`); continue; }
    sujets.push({
      id: meta.id ?? f.replace(/\.md$/, ''),
      titre: meta.titre ?? f,
      examen: meta.examen ?? '',
      niveau: meta.niveau ?? '',
      matiere: meta.matiere ?? 'mathematiques',
      statut: meta.statut ?? 'brouillon',
      reluPar: meta.relu_par === 'null' ? null : (meta.relu_par ?? null),
      chemin: './' + relative(join(RACINE_APP, 'src'), chemin).split('\\').join('/'),
    });
  }
  sujets.sort((a, b) => rang(a.niveau) - rang(b.niveau) || a.matiere.localeCompare(b.matiere));
}
// ─────────────────────────── quiz / bac blanc (JSON) ────────────────────────
const quiz = [];
if (existsSync(QUIZ_DIR)) {
  for (const f of readdirSync(QUIZ_DIR)) {
    if (!f.endsWith('.json')) continue;
    const chemin = join(QUIZ_DIR, f);
    try {
      const data = JSON.parse(readFileSync(chemin, 'utf8'));
      quiz.push({
        id: data.id ?? f.replace(/\.json$/, ''),
        titre: data.titre ?? f,
        examen: data.examen ?? '',
        niveau: data.niveau ?? '',
        matiere: data.matiere ?? 'mathematiques',
        statut: data.statut ?? 'brouillon',
        reluPar: data.relu_par === 'null' ? null : (data.relu_par ?? null),
        nbQuestions: (data.questions ?? []).length,
        chemin: './' + relative(join(RACINE_APP, 'src'), chemin).split('\\').join('/'),
      });
    } catch { console.warn(`  ⚠️  quiz illisible : ${f}`); }
  }
  quiz.sort((a, b) => rang(a.niveau) - rang(b.niveau) || a.matiere.localeCompare(b.matiere));
}
const importsQuiz = quiz.map((q, i) => `import quiz${i} from '${q.chemin}';`).join('\n');
const entreesQuiz = quiz.map((q, i) => `  {
    id: ${JSON.stringify(q.id)},
    titre: ${JSON.stringify(q.titre)},
    examen: ${JSON.stringify(q.examen)},
    niveau: ${JSON.stringify(q.niveau)},
    matiere: ${JSON.stringify(q.matiere)},
    statut: ${JSON.stringify(q.statut)},
    reluPar: ${JSON.stringify(q.reluPar)},
    nbQuestions: ${q.nbQuestions},
    questions: quiz${i}.questions,
  },`).join('\n');

const importsSujets = sujets.map((s, i) => `import sujet${i} from '${s.chemin}';`).join('\n');
const entreesSujets = sujets.map((s, i) => `  {
    id: ${JSON.stringify(s.id)},
    titre: ${JSON.stringify(s.titre)},
    examen: ${JSON.stringify(s.examen)},
    niveau: ${JSON.stringify(s.niveau)},
    matiere: ${JSON.stringify(s.matiere)},
    statut: ${JSON.stringify(s.statut)},
    reluPar: ${JSON.stringify(s.reluPar)},
    contenu: sujet${i},
  },`).join('\n');

const imports = chapitres.map((c, i) => {
  // Les .md sont chargés en texte brut par le transformer Metro (voir metro.config.cjs)
  // Fiches et exercices (le plus lourd) ne sont PAS dans l'index : ils sont chargés à la demande
  // via src/contenu-lourd(.web|.native).js, générés plus bas.
  let ligne = `import qcm${i} from '${c.cheminQcm}';`;
  if (c.cheminFlashcards) ligne += `\nimport flash${i} from '${c.cheminFlashcards}';`;
  return ligne;
}).join('\n');

const entrees = chapitres.map((c, i) => `  {
    id: ${JSON.stringify(c.id)},
    dossier: ${JSON.stringify(c.dossier)},
    niveau: ${JSON.stringify(c.niveau)},
    parcours: ${JSON.stringify(c.parcours)},
    titre: ${JSON.stringify(c.titre)},
    matiere: ${JSON.stringify(c.matiere)},
    programme: ${JSON.stringify(c.programme)},
    duree: ${c.duree},
    prerequis: ${JSON.stringify(c.prerequis)},
    statut: ${JSON.stringify(c.statut)},
    reluPar: ${JSON.stringify(c.reluPar)},
    nbQuestions: ${c.nbQuestions},
    nbExercices: ${c.nbExercices},
    nbFlashcards: ${c.nbFlashcards},
    outils: ${JSON.stringify(c.outils)},
    qcm: qcm${i},
    flashcards: ${c.cheminFlashcards ? `flash${i}` : 'null'},
  },`).join('\n');

const sortie = `/**
 * FICHIER GÉNÉRÉ — NE PAS MODIFIER À LA MAIN.
 * Produit par scripts/generer-index.mjs. Relancer \`npm run preparer\`
 * après tout ajout ou suppression de chapitre.
 *
 * ${chapitres.length} chapitres indexés.
 */

${imports}
${importsFormulaires}
${importsSujets}
${importsQuiz}

export const FORMULAIRES = [
${entreesFormulaires}
];

export const SUJETS = [
${entreesSujets}
];

export const QUIZ = [
${entreesQuiz}
];

export const LIBELLES_NIVEAU = ${JSON.stringify(LIBELLES_NIVEAU, null, 2)};
export const LIBELLES_PARCOURS = ${JSON.stringify(LIBELLES_PARCOURS, null, 2)};
export const LIBELLES_MATIERE = ${JSON.stringify(LIBELLES_MATIERE, null, 2)};

export const CHAPITRES = [
${entrees}
];

/** Chapitres d'un niveau et d'un parcours donnés. */
export function chapitresDe(niveau, parcours) {
  return CHAPITRES.filter((c) => c.niveau === niveau && c.parcours === parcours);
}

/** Parcours disponibles pour un niveau, avec leur nombre de chapitres. */
export function parcoursDe(niveau) {
  const vus = new Map();
  for (const c of CHAPITRES.filter((x) => x.niveau === niveau)) {
    const e = vus.get(c.parcours) ?? { parcours: c.parcours, matiere: c.matiere, nombre: 0 };
    e.nombre += 1;
    vus.set(c.parcours, e);
  }
  return [...vus.values()];
}

/** Niveaux disponibles. */
export function niveaux() {
  return [...new Set(CHAPITRES.map((c) => c.niveau))];
}

export function chapitreParId(id) {
  return CHAPITRES.find((c) => c.id === id) ?? null;
}
`;

mkdirSync(dirname(SORTIE), { recursive: true });
writeFileSync(SORTIE, sortie, 'utf8');

// ─────────────── contenu lourd chargé à la demande (fiches + exercices) ───────────────
// Web : fichiers statiques copiés dans public/donnees/<niveau>/<parcours>/<dossier>/,
// téléchargés seulement quand l'élève ouvre le chapitre (l'appli démarre bien plus vite).
// Téléphone (Expo natif) : imports classiques, comme avant.
const ENTETE_LOURD = `/**
 * FICHIER GÉNÉRÉ par scripts/generer-index.mjs — NE PAS MODIFIER À LA MAIN.
 * Fiches et exercices, chargés à la demande : chargerFiche(id) et chargerExercices(id)
 * renvoient une promesse (texte Markdown / objet exercice.json, ou null).
 */
`;
const lourdNatif = `${ENTETE_LOURD}
import { fusionnerAttendus } from '../lib/autocorrection';
${chapitres.map((c, i) => `import fiche${i} from '${c.cheminFiche}';` + (c.cheminExercice ? `\nimport exercice${i} from '${c.cheminExercice}';` : '') + (c.cheminAttendus ? `\nimport attendus${i} from '${c.cheminAttendus}';` : '')).join('\n')}

const FICHES = {
${chapitres.map((c, i) => `  ${JSON.stringify(c.id)}: fiche${i},`).join('\n')}
};
const EXERCICES = {
${chapitres.filter((c) => c.cheminExercice).map((c) => `  ${JSON.stringify(c.id)}: exercice${chapitres.indexOf(c)},`).join('\n')}
};

const ATTENDUS = {
${chapitres.filter((c) => c.cheminAttendus).map((c) => `  ${JSON.stringify(c.id)}: attendus${chapitres.indexOf(c)},`).join('\n')}
};

export async function chargerFiche(id) { return FICHES[id] ?? null; }
export async function chargerExercices(id) {
  const ex = EXERCICES[id] ?? null;
  return ex && ATTENDUS[id] ? fusionnerAttendus(ex, ATTENDUS[id]).exercice : ex;
}
`;
const chemins = Object.fromEntries(chapitres.map((c) => [c.id, `${c.niveau}/${c.parcours}/${c.dossier}`]));
const exAvec = chapitres.filter((c) => c.cheminExercice).map((c) => c.id);
const lourdWeb = `${ENTETE_LOURD}
const CHEMINS = ${JSON.stringify(chemins)};
const AVEC_EXERCICES = new Set(${JSON.stringify(exAvec)});
const cache = new Map();

// Dossier de l'appli (ex. /kamal-campus/app/) : on prend celui de la page, sans le nom d'écran éventuel.
function base() {
  try {
    const url = new URL(document.baseURI);
    const i = url.pathname.indexOf('/app/');
    const dossier = i >= 0 ? url.pathname.slice(0, i + 5) : url.pathname.replace(/[^/]*$/, '');
    return url.origin + dossier;
  } catch {
    return './';
  }
}

async function telecharger(chemin, enJson) {
  if (cache.has(chemin)) return cache.get(chemin);
  const promesse = fetch(base() + 'donnees/' + chemin)
    .then((r) => { if (!r.ok) throw new Error(String(r.status)); return enJson ? r.json() : r.text(); })
    .catch(() => { cache.delete(chemin); return null; });
  cache.set(chemin, promesse);
  return promesse;
}

export function chargerFiche(id) {
  const c = CHEMINS[id];
  return c ? telecharger(c + '/fiche.md', false) : Promise.resolve(null);
}
export function chargerExercices(id) {
  const c = CHEMINS[id];
  return c && AVEC_EXERCICES.has(id) ? telecharger(c + '/exercice.json', true) : Promise.resolve(null);
}
`;
writeFileSync(join(RACINE_APP, 'src', 'contenu-lourd.native.js'), lourdNatif, 'utf8');
writeFileSync(join(RACINE_APP, 'src', 'contenu-lourd.web.js'), lourdWeb, 'utf8');
// Copie des fichiers pour le web (dossier ignoré par git, recréé à chaque « npm run preparer »).
const DONNEES = join(RACINE_APP, 'public', 'donnees');
for (const c of chapitres) {
  const dest = join(DONNEES, c.niveau, c.parcours, c.dossier);
  mkdirSync(dest, { recursive: true });
  const src = join(CONTENU, c.niveau, c.parcours, c.dossier);
  writeFileSync(join(dest, 'fiche.md'), readFileSync(join(src, 'fiche.md')));
  if (c.cheminExercice) {
    let ex = JSON.parse(readFileSync(join(src, 'exercice.json'), 'utf8'));
    if (c.cheminAttendus) {
      const r = fusionnerAttendus(ex, JSON.parse(readFileSync(join(src, 'attendus.json'), 'utf8')));
      ex = r.exercice;
      if (r.ecarts.length) console.warn(`  ⚠️  attendus.json périmé (exercices ${r.ecarts.join(', ')}) : ${c.id}`);
    }
    writeFileSync(join(dest, 'exercice.json'), JSON.stringify(ex));
  }
}
console.log(`✓ fiches et exercices à la demande → src/contenu-lourd.(web|native).js + public/donnees/`);

const nonRelus = chapitres.filter((c) => !c.reluPar).length;
console.log(`✓ ${chapitres.length} chapitres indexés → src/contenu-index.js`);
console.log(`  ${chapitres.reduce((s, c) => s + c.nbQuestions, 0)} questions au total`);
if (nonRelus) {
  console.log(`  ⚠️  ${nonRelus} chapitre(s) non relu(s) par un professeur — statut brouillon`);
}
