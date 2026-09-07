#!/usr/bin/env node
/**
 * Insère des schémas (SVG en data-URI) dans les fiches de mathématiques, là où
 * un schéma est pertinent et JUSTE par construction (géométrie, fonctions).
 *
 * Prudence : on ne pose un schéma que sur les chapitres de mathématiques dont
 * le titre/identifiant correspond sans ambiguïté à un type de schéma connu.
 * L'insertion est IDEMPOTENTE : un marqueur `<!-- schema:auto -->` (retiré au
 * rendu) empêche tout doublon lors d'une relance.
 *
 * Usage :
 *   node outils/generer-schemas.mjs --dry-run   # liste les correspondances
 *   node outils/generer-schemas.mjs             # insère
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SCHEMAS, svgVersDataUri } from './schemas/schemas.mjs';

const ICI = dirname(fileURLToPath(import.meta.url));
const CONTENU = join(ICI, '..', 'contenu');
const MARQUEUR = '<!-- schema:auto -->';

const DRY = process.argv.includes('--dry-run');

/** Retire les accents et met en minuscules, pour une comparaison robuste. */
const norm = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/**
 * Choisit un schéma pour un chapitre de maths d'après son slug + son titre.
 * Règles ordonnées de la plus spécifique à la plus générale ; renvoie
 * { id, params, legende } ou null.
 */
function choisirSchema(cle, corps = '', matiere = '') {
  const t = (re) => re.test(cle);
  const compte = (re) => (corps.match(re) || []).length;

  // — Physique-chimie, sciences & SVT —
  if (matiere === 'physique-chimie' || matiere === 'sciences' || matiere === 'svt') {
    if (t(/chaine alimentaire|chaines alimentaires|chaine-alimentaire/)) {
      return { id: 'chaine-alimentaire', params: {}, legende: 'Chaîne alimentaire : chaque flèche signifie « est mangé par ».' };
    }
    if (t(/digest|nutrition/)) {
      return { id: 'appareil-digestif', params: {}, legende: 'Le trajet des aliments dans l’appareil digestif, de la bouche au gros intestin.' };
    }
    if (t(/systeme-solaire|systeme solaire|terre.{0,8}soleil|soleil.{0,8}lune/)) {
      return { id: 'systeme-solaire', params: {}, legende: 'Le Soleil et les planètes les plus proches (schéma non à l’échelle).' };
    }
    if (t(/corps-purs|biomolecules/)) {
      return { id: 'molecule-eau', params: {}, legende: 'La molécule d’eau : deux atomes d’hydrogène liés à un atome d’oxygène (H₂O).' };
    }
    if (t(/lentille|lunette/)) {
      return { id: 'lentille-convergente', params: {}, legende: 'Lentille convergente : objet placé à 2F, image réelle inversée à 2F′.' };
    }
    if (t(/\bcircuit/)) {
      return { id: 'circuit-electrique', params: {}, legende: 'Circuit électrique en série : générateur (pile), interrupteur et lampe.' };
    }
    if (t(/\bonde|\bsignal|sonore|sinusoid/)) {
      return { id: 'onde-sinusoidale', params: {}, legende: 'Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).' };
    }
    if (t(/etats-de-l|cycle de l.?eau|etats de l.?eau/)) {
      return { id: 'cycle-eau', params: {}, legende: 'Le cycle de l’eau : évaporation, condensation, précipitation, ruissellement.' };
    }
    if (t(/\bpoids|gravitation|\bforces?\b|newton/)) {
      return { id: 'poids', params: {}, legende: 'Le poids : force verticale, dirigée vers le bas, appliquée au centre de gravité G.' };
    }
    if (t(/atome|organisation-matiere|description-matiere/)) {
      return { id: 'atome', params: {}, legende: 'Modèle de l’atome : un noyau (protons et neutrons) autour duquel se répartissent les électrons.' };
    }
    return null;
  }

  // — Mathématiques —
  if (matiere !== 'mathematiques') return null;

  if (t(/pythagore/)) {
    return { id: 'triangle-rectangle', params: {}, legende: 'Triangle rectangle : le côté opposé à l’angle droit est l’hypoténuse.' };
  }
  if (t(/thales|theoreme de thales/)) {
    return { id: 'thales', params: {}, legende: 'Configuration de Thalès : (MN) parallèle à (BC).' };
  }
  if (t(/perimetre|\baire|longueurs-aires|aires-perimetres|aire-perimetre/) && !t(/integral/)) {
    return { id: 'rectangle-aire-perimetre', params: {}, legende: 'Aire et périmètre d’un rectangle : aire = longueur × largeur ; périmètre = 2 × (longueur + largeur).' };
  }
  if (t(/\bsolide|representation-espace|patron/)) {
    return { id: 'pave-droit', params: {}, legende: 'Pavé droit en perspective : volume = longueur × largeur × hauteur.' };
  }
  if (t(/\bangle/)) {
    return { id: 'angle', params: {}, legende: 'Un angle est formé par deux demi-droites de même origine (le sommet).' };
  }
  if (t(/relatif/)) {
    return { id: 'droite-graduee', params: {}, legende: 'Droite graduée : les nombres négatifs à gauche de 0, les positifs à droite.' };
  }
  if (t(/trigonom|cosinus|sinus|tangente/)) {
    return { id: 'cercle-trigo', params: {}, legende: 'Cercle trigonométrique : cosinus sur l’axe des abscisses, sinus sur l’axe des ordonnées.' };
  }
  if (t(/second degre|second-degre|trinome|parabole|polynome du second|fonction du second/)) {
    return { id: 'parabole', params: {}, legende: 'Parabole : courbe d’une fonction du second degré, symétrique par rapport à l’axe passant par le sommet.' };
  }
  if (t(/fonction affine|fonctions affines|\baffine\b/)) {
    return { id: 'fonction-affine', params: { a: 1, b: 1 }, legende: 'Fonction affine : sa représentation est une droite ; b est l’ordonnée à l’origine.' };
  }
  if (t(/fonction lineaire|fonctions lineaires|\blineaire\b/)) {
    return { id: 'fonction-affine', params: { a: 2, b: 0 }, legende: 'Fonction linéaire : droite passant par l’origine du repère.' };
  }
  // Repérage dans le PLAN uniquement — pas le repérage dans le temps (droite graduée).
  if (t(/reperage|\brepere\b|coordonnee|repere dans le plan|repere orthonorme/) && !t(/temps|duree|chronolog|histoire/)) {
    return { id: 'repere-coordonnees', params: {}, legende: 'Repérage d’un point dans le plan par ses coordonnées (x ; y).' };
  }
  // Basé sur le CONTENU : chapitre « triangles » très centré sur Pythagore.
  if (t(/triangle/) && compte(/pythagore/gi) >= 3) {
    return { id: 'triangle-rectangle', params: {}, legende: 'Triangle rectangle : le côté opposé à l’angle droit est l’hypoténuse.' };
  }
  return null;
}

/** Premier titre # d'une fiche (après l'en-tête YAML). */
function titreFiche(md) {
  const sansYaml = md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const m = sansYaml.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

/** Matière déclarée dans l'en-tête YAML. */
function matiereFiche(md) {
  const m = md.match(/^matiere:\s*(.+)$/m);
  return m ? m[1].trim() : '';
}

/** Insère le bloc image juste après le premier titre # (ou en tête). */
function inserer(md, bloc) {
  const lignes = md.split('\n');
  // trouver la fin de l'en-tête YAML
  let i = 0;
  if (lignes[0] === '---') {
    i = 1;
    while (i < lignes.length && lignes[i] !== '---') i += 1;
    i += 1; // ligne du --- fermant
  }
  // trouver le premier titre # à partir de là
  let idxTitre = -1;
  for (let j = i; j < lignes.length; j += 1) {
    if (/^#\s+/.test(lignes[j])) { idxTitre = j; break; }
  }
  const pos = idxTitre >= 0 ? idxTitre + 1 : i;
  lignes.splice(pos, 0, '', bloc, '');
  return lignes.join('\n');
}

function lister(dir) {
  const out = [];
  for (const niveau of readdirSync(dir)) {
    const pNiveau = join(dir, niveau);
    if (!statSync(pNiveau).isDirectory()) continue;
    for (const parcours of readdirSync(pNiveau)) {
      const pParcours = join(pNiveau, parcours);
      if (!statSync(pParcours).isDirectory()) continue;
      for (const chap of readdirSync(pParcours)) {
        const pChap = join(pParcours, chap);
        if (!statSync(pChap).isDirectory()) continue;
        const fiche = join(pChap, 'fiche.md');
        try {
          statSync(fiche);
          out.push({ niveau, parcours, chap, fiche });
        } catch { /* pas de fiche */ }
      }
    }
  }
  return out;
}

const fiches = lister(CONTENU);
const parType = {};
let poses = 0;
let deja = 0;

for (const f of fiches) {
  const md = readFileSync(f.fiche, 'utf8');
  const matiere = matiereFiche(md);
  if (!['mathematiques', 'physique-chimie', 'sciences', 'svt'].includes(matiere)) continue;
  const titre = titreFiche(md);
  const cle = norm(f.chap + ' ' + titre);
  const choix = choisirSchema(cle, md, matiere);
  if (!choix) continue;
  if (!SCHEMAS[choix.id]) continue;

  (parType[choix.id] ||= []).push(`${f.niveau}/${f.parcours}/${f.chap}  —  « ${titre} »`);

  if (md.includes(MARQUEUR)) { deja += 1; continue; }

  if (!DRY) {
    const svg = SCHEMAS[choix.id](choix.params);
    const uri = svgVersDataUri(svg);
    const bloc = `${MARQUEUR}\n![${choix.legende}](${uri})`;
    writeFileSync(f.fiche, inserer(md, bloc), 'utf8');
  }
  poses += 1;
}

console.log(DRY ? '— DRY RUN (aucune écriture) —\n' : '— insertion —\n');
for (const [id, liste] of Object.entries(parType)) {
  console.log(`### ${id}  (${liste.length})`);
  for (const l of liste) console.log('   ' + l);
  console.log('');
}
console.log(`Total chapitres concernés : ${Object.values(parType).reduce((a, b) => a + b.length, 0)}`);
console.log(DRY ? '' : `Schémas posés : ${poses} · déjà présents : ${deja}`);
