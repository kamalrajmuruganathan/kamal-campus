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

import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = dirname(fileURLToPath(import.meta.url));
const RACINE_APP = join(ICI, '..');
const CONTENU = join(RACINE_APP, '..', 'contenu');
const SORTIE = join(RACINE_APP, 'src', 'contenu-index.js');

// ─────────────────────────── libellés d'affichage ───────────────────────────

const LIBELLES_NIVEAU = {
  seconde: 'Seconde',
  premiere: 'Première',
};

// Ces clefs sont les NOMS DE RÉPERTOIRE sous contenu/<niveau>/, et non le champ
// `parcours` de l'en-tête YAML : en Seconde, les deux matières partagent le même
// parcours (« tronc-commun ») mais vivent dans des répertoires distincts.
const LIBELLES_PARCOURS = {
  maths: 'Mathématiques',
  'physique-chimie': 'Physique-chimie',
  'maths-specialite': 'Spécialité mathématiques',
  'maths-enseignement-scientifique': 'Maths — enseignement scientifique',
  'tronc-commun': 'Tronc commun',
};

const LIBELLES_MATIERE = {
  mathematiques: 'Mathématiques',
  'physique-chimie': 'Physique-chimie',
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
        cheminFiche: './' + relative(join(RACINE_APP, 'src'), fiche).split('\\').join('/'),
        cheminQcm: './' + relative(join(RACINE_APP, 'src'), qcm).split('\\').join('/'),
      });
    }
  }
}

chapitres.sort((a, b) => a.niveau.localeCompare(b.niveau)
  || a.parcours.localeCompare(b.parcours)
  || a.dossier.localeCompare(b.dossier));

// ────────────────────────────── génération ──────────────────────────────────

const imports = chapitres.map((c, i) => {
  // Les .md sont chargés en texte brut par le transformer Metro (voir metro.config.cjs)
  return `import fiche${i} from '${c.cheminFiche}';\nimport qcm${i} from '${c.cheminQcm}';`;
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
    fiche: fiche${i},
    qcm: qcm${i},
  },`).join('\n');

const sortie = `/**
 * FICHIER GÉNÉRÉ — NE PAS MODIFIER À LA MAIN.
 * Produit par scripts/generer-index.mjs. Relancer \`npm run preparer\`
 * après tout ajout ou suppression de chapitre.
 *
 * ${chapitres.length} chapitres indexés.
 */

${imports}

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
