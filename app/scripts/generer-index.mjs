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

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fusionnerAttendus } from '../lib/autocorrection/index.js';
import { estRelu } from '../lib/relecture/index.js';

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

/** Titres de niveau 2 d'une fiche, sans numéro ni mise en forme (pour la recherche). */
function sectionsFiche(texte) {
  const corps = texte.replace(/^---[\s\S]*?\n---\n/, '').replace(/<!--[\s\S]*?-->/g, '');
  const titres = [];
  for (const m of corps.matchAll(/^##\s+(.+)$/gm)) {
    const t = m[1]
      .replace(/^\d+[.)]\s*/, '')
      .replace(/\$[^$]*\$/g, ' ')
      .replace(/[*_`#]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (t && !/^(à retenir|les pièges|les erreurs|exercices?\b|pour aller plus loin)/i.test(t)) titres.push(t);
  }
  return titres.join(' · ');
}

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

      // Titres de sections de la fiche (« Le théorème de Pythagore »…) : la recherche les
      // parcourt aussi, pour trouver un chapitre par une notion absente de son titre.
      let sections = '';
      try {
        sections = sectionsFiche(readFileSync(fiche, 'utf8'));
      } catch { /* fiche illisible : déjà signalé */ }

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
        reluLe: meta.relu_le === 'null' ? null : (meta.relu_le ?? null),
        nbQuestions,
        nbExercices,
        aExercice,
        nbFlashcards,
        aFlashcards,
        outils,
        sections,
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
      reluLe: meta.relu_le === 'null' ? null : (meta.relu_le ?? null),
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
    reluLe: ${JSON.stringify(f.reluLe)},
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
      fichier: f.replace(/\.md$/, ''),
      titre: meta.titre ?? f,
      examen: meta.examen ?? '',
      niveau: meta.niveau ?? '',
      matiere: meta.matiere ?? 'mathematiques',
      statut: meta.statut ?? 'brouillon',
      reluPar: meta.relu_par === 'null' ? null : (meta.relu_par ?? null),
      reluLe: meta.relu_le === 'null' ? null : (meta.relu_le ?? null),
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
        fichier: f.replace(/\.json$/, ''),
        titre: data.titre ?? f,
        examen: data.examen ?? '',
        niveau: data.niveau ?? '',
        matiere: data.matiere ?? 'mathematiques',
        statut: data.statut ?? 'brouillon',
        reluPar: data.relu_par === 'null' ? null : (data.relu_par ?? null),
        reluLe: data.relu_le === 'null' ? null : (data.relu_le ?? null),
        nbQuestions: (data.questions ?? []).length,
        chemin: './' + relative(join(RACINE_APP, 'src'), chemin).split('\\').join('/'),
      });
    } catch { console.warn(`  ⚠️  quiz illisible : ${f}`); }
  }
  quiz.sort((a, b) => rang(a.niveau) - rang(b.niveau) || a.matiere.localeCompare(b.matiere));
}
// Questions des quiz et texte des sujets : chargés à la demande (src/contenu-lourd), pas dans l'index.
const entreesQuiz = quiz.map((q, i) => `  {
    id: ${JSON.stringify(q.id)},
    titre: ${JSON.stringify(q.titre)},
    examen: ${JSON.stringify(q.examen)},
    niveau: ${JSON.stringify(q.niveau)},
    matiere: ${JSON.stringify(q.matiere)},
    statut: ${JSON.stringify(q.statut)},
    reluPar: ${JSON.stringify(q.reluPar)},
    reluLe: ${JSON.stringify(q.reluLe)},
    nbQuestions: ${q.nbQuestions},
  },`).join('\n');

const entreesSujets = sujets.map((s, i) => `  {
    id: ${JSON.stringify(s.id)},
    titre: ${JSON.stringify(s.titre)},
    examen: ${JSON.stringify(s.examen)},
    niveau: ${JSON.stringify(s.niveau)},
    matiere: ${JSON.stringify(s.matiere)},
    statut: ${JSON.stringify(s.statut)},
    reluPar: ${JSON.stringify(s.reluPar)},
    reluLe: ${JSON.stringify(s.reluLe)},
  },`).join('\n');

// Fiches, exercices, QCM et cartes (le plus lourd) ne sont PAS dans l'index : ils sont chargés
// à la demande via src/contenu-lourd(.web|.native).js, générés plus bas. L'index ne garde que
// ce dont l'accueil, la recherche et les listes ont besoin (titres, nombres de questions…).

const entrees = chapitres.map((c, i) => `  {
    id: ${JSON.stringify(c.id)},
    dossier: ${JSON.stringify(c.dossier)},
    niveau: ${JSON.stringify(c.niveau)},
    parcours: ${JSON.stringify(c.parcours)},
    titre: ${JSON.stringify(c.titre)},
    matiere: ${JSON.stringify(c.matiere)},
    programme: ${JSON.stringify(c.programme)},
    duree: ${c.duree},
    statut: ${JSON.stringify(c.statut)},
    reluPar: ${JSON.stringify(c.reluPar)},
    reluLe: ${JSON.stringify(c.reluLe)},
    nbQuestions: ${c.nbQuestions},
    nbExercices: ${c.nbExercices},
    nbFlashcards: ${c.nbFlashcards},
    outils: ${JSON.stringify(c.outils)},
  },`).join('\n');

// ── Accents des notions de QCM ───────────────────────────────────────────────
// Beaucoup de questions ont une notion écrite comme un identifiant
// (« evolution-reciproque »). Pour l'afficher à l'élève (« Notions à revoir »),
// on rétablit les accents mot à mot, d'après la forme la plus fréquente de
// chaque mot dans les fiches et les QCM du même groupe (le français pour les
// matières enseignées en français, chaque langue vivante ou ancienne à part).
// Un mot ambigu (« a/à », « cote/côte/côté »…) n'est pas touché.
const LANGUES = new Set(['anglais', 'espagnol', 'allemand', 'italien', 'langues-anciennes']);
// Mots qu'on laisse tels quels : le sens dépend du chapitre (« cote » d'une pièce / « côté »).
const NOTIONS_A_LAISSER = new Set(['cote']);
const groupeNotion = (matiere) => (LANGUES.has(matiere) ? matiere : 'fr');
const sansAccent = (m) => m.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const groupes = new Map(); // groupe → { formes: Map(mot sans accent → Map(forme → nombre)), mots: Set }
for (const c of chapitres) {
  const g = groupeNotion(c.matiere);
  if (!groupes.has(g)) groupes.set(g, { formes: new Map(), mots: new Set(), textes: [] });
  const G = groupes.get(g);
  try { G.textes.push(readFileSync(join(RACINE_APP, 'src', c.cheminFiche.replace(/^\.\//, '')), 'utf8')); } catch { /* fiche absente */ }
  try {
    const q = JSON.parse(readFileSync(join(RACINE_APP, 'src', c.cheminQcm.replace(/^\.\//, '')), 'utf8'));
    for (const x of q.questions ?? []) {
      G.textes.push(`${x.enonce ?? ''} ${x.explication ?? ''}`);
      if (typeof x.notion === 'string' && /^[a-z0-9-]+$/.test(x.notion)) for (const m of x.notion.split('-')) if (m) G.mots.add(m);
    }
  } catch { /* qcm illisible : déjà signalé */ }
}
const ACCENTS_NOTIONS = {};
for (const [g, G] of groupes) {
  const casses = new Map(); // mot sans accent → Map(forme exacte, majuscules comprises → nombre)
  for (const t of G.textes) {
    for (const x of t.matchAll(/[A-Za-zÀ-ÖØ-öø-ÿœŒæÆß]+/g)) {
      const brut = x[0];
      const m = brut.toLowerCase();
      const cle = sansAccent(m);
      if (!G.mots.has(cle)) continue;
      const f = G.formes.get(cle) ?? new Map();
      f.set(m, (f.get(m) ?? 0) + 1);
      G.formes.set(cle, f);
      // Casse : on ne regarde que les mots en milieu de phrase (« selon Sartre »,
      // « d’Euler »), pas un début de phrase, de titre ou de liste (« Traduction : »).
      const avant = t.slice(Math.max(0, x.index - 2), x.index);
      if (/[a-zà-ÿ0-9,;)»] $|[a-zà-ÿ][’']$/.test(avant)) {
        const c = casses.get(cle) ?? new Map();
        c.set(brut, (c.get(brut) ?? 0) + 1);
        casses.set(cle, c);
      }
    }
  }
  const dico = {};
  for (const m of [...G.mots].sort()) {
    const f = G.formes.get(m);
    if (!f) continue;
    if (NOTIONS_A_LAISSER.has(m)) continue;
    const tri = [...f.entries()].sort((x, y) => y[1] - x[1]);
    let [meilleure, n] = tri[0];
    const ambigu = tri.length > 1 && tri[1][1] >= 0.2 * n;
    if (ambigu || n < 2) meilleure = m; // accents incertains : on garde le mot tel quel
    // Nom propre ou sigle (« Sartre », « Kant », « pH ») : presque toujours écrit avec cette
    // casse dans les fiches et les QCM → on la garde (avant : « sartre », « ph »).
    const formesExactes = [...(casses.get(m) ?? new Map()).entries()].sort((x, y) => y[1] - x[1]);
    const total = formesExactes.reduce((s, [, k]) => s + k, 0);
    if (formesExactes.length && total >= 2) {
      const [exacte, k] = formesExactes[0];
      if (exacte !== exacte.toLowerCase() && k >= 0.9 * total && exacte.toLowerCase() === meilleure) meilleure = exacte;
    }
    if (meilleure === m) continue;
    dico[m] = meilleure;
  }
  ACCENTS_NOTIONS[g] = dico;
}

const sortie = `/**
 * FICHIER GÉNÉRÉ — NE PAS MODIFIER À LA MAIN.
 * Produit par scripts/generer-index.mjs. Relancer \`npm run preparer\`
 * après tout ajout ou suppression de chapitre.
 *
 * ${chapitres.length} chapitres indexés.
 */

${importsFormulaires}

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

/** Accents à rétablir dans les notions de QCM écrites comme des identifiants. */
export const ACCENTS_NOTIONS = ${JSON.stringify(ACCENTS_NOTIONS)};

/**
 * « evolution-reciproque » → « évolution réciproque » (texte déjà lisible : inchangé).
 * \`matiere\` choisit le dictionnaire (français, ou la langue étudiée).
 */
export function libelleNotion(notion, matiere) {
  const s = String(notion ?? '');
  if (!/^[a-z0-9-]+$/.test(s)) return s;
  const groupe = ${JSON.stringify([...LANGUES])}.includes(matiere) ? matiere : 'fr';
  const dico = ACCENTS_NOTIONS[groupe] ?? {};
  return s.split('-').filter(Boolean).map((m) => dico[m] ?? m).join(' ');
}

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

// Titres de sections des fiches, pour la recherche : module à part, chargé par
// l'écran Recherche seulement (import() : morceau séparé sur le web, l'index reste léger).
const sectionsRecherche = Object.fromEntries(chapitres.filter((c) => c.sections).map((c) => [c.id, c.sections]));
writeFileSync(
  join(RACINE_APP, 'src', 'sections-recherche.js'),
  `/**\n * FICHIER GÉNÉRÉ — NE PAS MODIFIER À LA MAIN (scripts/generer-index.mjs).\n`
  + ` * Titres de sections des fiches (« Le théorème de Pythagore »…), pour l'écran Recherche.\n */\n`
  + `export const SECTIONS = ${JSON.stringify(sectionsRecherche)};\n`,
  'utf8',
);

// ─────────────── contenu lourd chargé à la demande (fiches + exercices) ───────────────
// Web : fichiers statiques copiés dans public/donnees/<niveau>/<parcours>/<dossier>/,
// téléchargés seulement quand l'élève ouvre le chapitre (l'appli démarre bien plus vite).
// Téléphone (Expo natif) : voir lourdNatif ci-dessous.
const ENTETE_LOURD = `/**
 * FICHIER GÉNÉRÉ par scripts/generer-index.mjs — NE PAS MODIFIER À LA MAIN.
 * Contenu lourd, chargé à la demande (rien de tout cela n'est dans l'index) :
 *   chargerFiche(id)      → texte Markdown de la fiche
 *   chargerExercices(id)  → objet exercice.json (fusionné avec attendus.json)
 *   chargerQcm(id)        → objet qcm.json ({ questions }) ; { questions: [] } si le chapitre n'en a pas
 *   chargerCartes(id)     → objet flashcards.json ({ cartes }) ; { cartes: [] } si le chapitre n'en a pas
 *   chargerSujet(id)      → texte Markdown d'un sujet (SUJETS)
 *   chargerQuiz(id)       → objet quiz/<fichier>.json ({ questions… }) d'un QUIZ
 * Chaque fonction renvoie une promesse ; null = introuvable ou réseau indisponible.
 */
`;
// Téléphone : chaque fiche / exercice (déjà fusionné avec attendus.json) est un petit module à part,
// app/donnees-natif/<niveau>/<parcours>/<dossier>/{fiche,exercice}.js (dossier ignoré par git, recréé
// ici), chargé seulement à l'ouverture du chapitre (require dans une fonction). Chaque module exporte
// le texte JSON avec les caractères non ASCII écrits \uXXXX : Hermes stockerait sinon tout texte
// accentué en UTF-16 (taille doublée). D'où le JSON.parse.
const cheminNatif = (c, f) => `../donnees-natif/${c.niveau}/${c.parcours}/${c.dossier}/${f}`;
const lourdNatif = `${ENTETE_LOURD}
const FICHES = {
${chapitres.map((c) => `  ${JSON.stringify(c.id)}: () => require(${JSON.stringify(cheminNatif(c, 'fiche.js'))}),`).join('\n')}
};
const EXERCICES = {
${chapitres.filter((c) => c.cheminExercice).map((c) => `  ${JSON.stringify(c.id)}: () => require(${JSON.stringify(cheminNatif(c, 'exercice.js'))}),`).join('\n')}
};
const QCM = {
${chapitres.filter((c) => c.nbQuestions > 0).map((c) => `  ${JSON.stringify(c.id)}: () => require(${JSON.stringify(cheminNatif(c, 'qcm.js'))}),`).join('\n')}
};
const CARTES = {
${chapitres.filter((c) => c.cheminFlashcards).map((c) => `  ${JSON.stringify(c.id)}: () => require(${JSON.stringify(cheminNatif(c, 'flashcards.js'))}),`).join('\n')}
};
const SUJETS = {
${sujets.map((x) => `  ${JSON.stringify(x.id)}: () => require(${JSON.stringify(`../donnees-natif/sujets/${x.fichier}.js`)}),`).join('\n')}
};
const QUIZ = {
${quiz.map((x) => `  ${JSON.stringify(x.id)}: () => require(${JSON.stringify(`../donnees-natif/quiz/${x.fichier}.js`)}),`).join('\n')}
};

function lire(table, id) {
  const f = table[id];
  if (!f) return null;
  try { return JSON.parse(f()); } catch { return null; }
}

export async function chargerFiche(id) { return lire(FICHES, id); }
export function cheminDonnees() { return null; }
export async function chargerExercices(id) { return lire(EXERCICES, id); }
export async function chargerQcm(id) { return QCM[id] ? lire(QCM, id) : { questions: [] }; }
export async function chargerCartes(id) { return CARTES[id] ? lire(CARTES, id) : { cartes: [] }; }
export async function chargerSujet(id) { return lire(SUJETS, id); }
export async function chargerQuiz(id) { return lire(QUIZ, id); }
`;
// Le dossier d'un chapitre (« niveau/parcours/dossier ») se déduit de l'index : on ne le répète pas.
const sansFichier = (ok) => chapitres.filter((c) => !ok(c)).map((c) => c.id);
const lourdWeb = `${ENTETE_LOURD}
import { chapitreParId, SUJETS, QUIZ } from './contenu-index';

// Chapitres SANS exercices / QCM / cartes (listes courtes).
const SANS_EXERCICES = new Set(${JSON.stringify(sansFichier((c) => c.cheminExercice))});
const SANS_QCM = new Set(${JSON.stringify(sansFichier((c) => c.nbQuestions > 0))});
const SANS_CARTES = new Set(${JSON.stringify(sansFichier((c) => c.cheminFlashcards))});
// Fichier de chaque sujet / quiz quand il diffère de son identifiant.
const FICHIER_SUJET = ${JSON.stringify(Object.fromEntries(sujets.filter((x) => x.fichier !== x.id).map((x) => [x.id, x.fichier])))};
const FICHIER_QUIZ = ${JSON.stringify(Object.fromEntries(quiz.filter((x) => x.fichier !== x.id).map((x) => [x.id, x.fichier])))};
const cache = new Map();

function dossierDe(id) {
  const c = chapitreParId(id);
  return c ? \`\${c.niveau}/\${c.parcours}/\${c.dossier}\` : null;
}

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
  const c = dossierDe(id);
  return c ? telecharger(c + '/fiche.md', false) : Promise.resolve(null);
}
/** Dossier d'un chapitre dans public/donnees (« niveau/parcours/dossier »), ou null. */
export function cheminDonnees(id) { return dossierDe(id); }
export function chargerExercices(id) {
  const c = dossierDe(id);
  return c && !SANS_EXERCICES.has(id) ? telecharger(c + '/exercice.json', true) : Promise.resolve(null);
}
export function chargerQcm(id) {
  const c = dossierDe(id);
  if (!c) return Promise.resolve(null);
  return SANS_QCM.has(id) ? Promise.resolve({ questions: [] }) : telecharger(c + '/qcm.json', true);
}
export function chargerCartes(id) {
  const c = dossierDe(id);
  if (!c) return Promise.resolve(null);
  return SANS_CARTES.has(id) ? Promise.resolve({ cartes: [] }) : telecharger(c + '/flashcards.json', true);
}
export function chargerSujet(id) {
  if (!SUJETS.some((s) => s.id === id)) return Promise.resolve(null);
  return telecharger('sujets/' + (FICHIER_SUJET[id] ?? id) + '.md', false);
}
export function chargerQuiz(id) {
  if (!QUIZ.some((q) => q.id === id)) return Promise.resolve(null);
  return telecharger('quiz/' + (FICHIER_QUIZ[id] ?? id) + '.json', true);
}
`;
writeFileSync(join(RACINE_APP, 'src', 'contenu-lourd.native.js'), lourdNatif, 'utf8');
writeFileSync(join(RACINE_APP, 'src', 'contenu-lourd.web.js'), lourdWeb, 'utf8');
// Copie des fichiers pour le web (dossier ignoré par git, recréé à chaque « npm run preparer »).
const DONNEES = join(RACINE_APP, 'public', 'donnees');
const DONNEES_NATIF = join(RACINE_APP, 'donnees-natif');
rmSync(DONNEES_NATIF, { recursive: true, force: true });
/** Module natif : `module.exports = "<texte JSON en ASCII>"` (é → \u00e9, lu par JSON.parse). */
function moduleNatif(valeur) {
  const ascii = JSON.stringify(valeur).replace(/[\u0080-\uffff]/g, (ch) => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'));
  return '// Fichier genere par scripts/generer-index.mjs (ne pas modifier)\nmodule.exports = ' + JSON.stringify(ascii) + ';\n';
}
for (const c of chapitres) {
  const dest = join(DONNEES, c.niveau, c.parcours, c.dossier);
  mkdirSync(dest, { recursive: true });
  const src = join(CONTENU, c.niveau, c.parcours, c.dossier);
  const fiche = readFileSync(join(src, 'fiche.md'), 'utf8');
  writeFileSync(join(dest, 'fiche.md'), fiche);
  const destNatif = join(DONNEES_NATIF, c.niveau, c.parcours, c.dossier);
  mkdirSync(destNatif, { recursive: true });
  writeFileSync(join(destNatif, 'fiche.js'), moduleNatif(fiche));
  if (c.cheminExercice) {
    let ex = JSON.parse(readFileSync(join(src, 'exercice.json'), 'utf8'));
    if (c.cheminAttendus) {
      const r = fusionnerAttendus(ex, JSON.parse(readFileSync(join(src, 'attendus.json'), 'utf8')));
      ex = r.exercice;
      if (r.ecarts.length) console.warn(`  ⚠️  attendus.json périmé (exercices ${r.ecarts.join(', ')}) : ${c.id}`);
    }
    writeFileSync(join(dest, 'exercice.json'), JSON.stringify(ex));
    writeFileSync(join(destNatif, 'exercice.js'), moduleNatif(ex));
  }
  if (c.nbQuestions > 0) {
    const q = JSON.parse(readFileSync(join(src, 'qcm.json'), 'utf8'));
    writeFileSync(join(dest, 'qcm.json'), JSON.stringify(q));
    writeFileSync(join(destNatif, 'qcm.js'), moduleNatif(q));
  }
  if (c.cheminFlashcards) {
    const f = JSON.parse(readFileSync(join(src, 'flashcards.json'), 'utf8'));
    writeFileSync(join(dest, 'flashcards.json'), JSON.stringify(f));
    writeFileSync(join(destNatif, 'flashcards.js'), moduleNatif(f));
  }
}
// Sujets (Markdown) et quiz de bac blanc (JSON) : même principe.
for (const [nom, liste, ext, lire] of [
  ['sujets', sujets, '.md', (f) => readFileSync(f, 'utf8')],
  ['quiz', quiz, '.json', (f) => JSON.parse(readFileSync(f, 'utf8'))],
]) {
  const dest = join(DONNEES, nom);
  const destNatif = join(DONNEES_NATIF, nom);
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  mkdirSync(destNatif, { recursive: true });
  for (const x of liste) {
    const valeur = lire(join(RACINE_APP, 'src', x.chemin.replace(/^\.\//, '')));
    writeFileSync(join(dest, x.fichier + ext), typeof valeur === 'string' ? valeur : JSON.stringify(valeur));
    writeFileSync(join(destNatif, x.fichier + '.js'), moduleNatif(valeur));
  }
}
console.log(`✓ fiches, exercices, QCM, cartes, sujets et quiz à la demande → src/contenu-lourd.(web|native).js + public/donnees/ + donnees-natif/`);

// ─────────────────────────── dictées (dictees/*.json) ───────────────────────────
// Web : copiées dans public/donnees/dictees/ (chargées à la demande par src/dictees-donnees.web.js).
// Téléphone : importées directement par src/dictees-donnees.native.js.
const DICTEES_DIR = join(RACINE_APP, '..', 'dictees');
if (existsSync(DICTEES_DIR)) {
  const dest = join(DONNEES, 'dictees');
  mkdirSync(dest, { recursive: true });
  let nb = 0;
  for (const f of readdirSync(DICTEES_DIR).filter((x) => x.endsWith('.json'))) {
    try {
      const data = JSON.parse(readFileSync(join(DICTEES_DIR, f), 'utf8'));
      for (const d of data.dictees ?? []) {
        if (!d.texte || !Array.isArray(d.phrases) || d.phrases.join(' ') !== d.texte) console.warn(`  ⚠️  dictée ${d.id} : découpage en phrases incohérent`);
      }
      nb += (data.dictees ?? []).length;
      writeFileSync(join(dest, f), JSON.stringify(data));
    } catch { console.warn(`  ⚠️  dictées illisibles : ${f}`); }
  }
  console.log(`✓ ${nb} dictées → public/donnees/dictees/`);
}

const nonRelus = chapitres.filter((c) => !estRelu(c)).length;
console.log(`✓ ${chapitres.length} chapitres indexés → src/contenu-index.js`);
console.log(`  ${chapitres.reduce((s, c) => s + c.nbQuestions, 0)} questions au total`);
if (nonRelus) {
  console.log(`  ⚠️  ${nonRelus} chapitre(s) non relu(s) par un professeur (statut: relu + relu_par requis)`);
}
