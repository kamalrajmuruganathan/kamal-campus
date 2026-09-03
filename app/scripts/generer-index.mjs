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
      });
    }
  }
}

// Un niveau inconnu de NIVEAUX est rejeté en fin de liste plutôt que masqué,
// et signalé plus bas : mieux vaut un affichage bancal qu'un chapitre invisible.
const rang = (niveau) => ORDRE_NIVEAU.get(niveau) ?? Number.MAX_SAFE_INTEGER;

chapitres.sort((a, b) => rang(a.niveau) - rang(b.niveau)
  || a.parcours.localeCompare(b.parcours)
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
  let ligne = `import fiche${i} from '${c.cheminFiche}';\nimport qcm${i} from '${c.cheminQcm}';`;
  if (c.cheminExercice) ligne += `\nimport exercice${i} from '${c.cheminExercice}';`;
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
    fiche: fiche${i},
    qcm: qcm${i},
    exercice: ${c.cheminExercice ? `exercice${i}` : 'null'},
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

const nonRelus = chapitres.filter((c) => !c.reluPar).length;
console.log(`✓ ${chapitres.length} chapitres indexés → src/contenu-index.js`);
console.log(`  ${chapitres.reduce((s, c) => s + c.nbQuestions, 0)} questions au total`);
if (nonRelus) {
  console.log(`  ⚠️  ${nonRelus} chapitre(s) non relu(s) par un professeur — statut brouillon`);
}
