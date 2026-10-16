#!/usr/bin/env node
/**
 * Pose les schémas des lots `outils/schemas/lot_*.mjs` dans les fiches, à
 * l'endroit voulu (juste sous un titre de section), avec une légende visible.
 *
 * Chaque lot exporte :
 *   SCHEMAS = { id: (params) => '<svg…>' }
 *   POSES   = [{ fiche: 'niveau/matiere/slug', cle: 'nom-unique', schema: 'id',
 *               params: {…}, legende: 'Phrase en français.', apres: '## Titre exact' | null }]
 *
 * Bloc inséré (idempotent : relancer remplace le bloc existant de même clé) :
 *   <!-- schema:<cle> -->
 *   ![légende](data:image/svg+xml;base64,…)
 *   *légende*
 *   <!-- /schema -->
 *
 * Usage :
 *   node outils/poser-schemas.mjs                 # tous les lots
 *   node outils/poser-schemas.mjs lot_svt.mjs     # un lot
 *   node outils/poser-schemas.mjs --dry-run …     # vérifie sans écrire
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { svgVersDataUri } from './schemas/base.mjs';

const ICI = dirname(fileURLToPath(import.meta.url));
const CONTENU = join(ICI, '..', 'contenu');
const DOSSIER = join(ICI, 'schemas');
const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const lots = args.filter((a) => !a.startsWith('--'));
const fichiers = lots.length ? lots : readdirSync(DOSSIER).filter((f) => /^lot_.*\.mjs$/.test(f)).sort();

const normTitre = (s) => String(s).replace(/\s+/g, ' ').trim();
let erreurs = 0;
let poses = 0;
const parFiche = new Map();

for (const f of fichiers) {
  const lot = await import(pathToFileURL(join(DOSSIER, f.replace(/^.*\//, ''))).href);
  const { SCHEMAS = {}, POSES = [] } = lot;
  const cles = new Set();
  for (const p of POSES) {
    const ici = `${f} › ${p.fiche} › ${p.cle}`;
    const pb = (m) => { console.log(`❌ ${ici} : ${m}`); erreurs++; };
    if (!p.fiche || !p.cle || !p.schema || !p.legende) { pb('fiche, cle, schema et legende sont obligatoires'); continue; }
    if (!/^[a-z0-9-]+$/.test(p.cle)) { pb('cle : minuscules, chiffres et tirets seulement'); continue; }
    if (cles.has(p.fiche + '#' + p.cle)) { pb('clé en double'); continue; }
    cles.add(p.fiche + '#' + p.cle);
    if (!SCHEMAS[p.schema]) { pb(`schéma inconnu « ${p.schema} »`); continue; }
    if (/[$<>*_[\]]/.test(p.legende) || p.legende.length > 220) { pb('légende : pas de $ < > * _ [ ], 220 caractères max'); continue; }
    if (!/[.!?)»]$/.test(p.legende.trim())) { pb('légende : une phrase terminée par un point'); continue; }
    const chemin = join(CONTENU, p.fiche, 'fiche.md');
    if (!existsSync(chemin)) { pb('fiche introuvable'); continue; }
    let svg;
    try { svg = SCHEMAS[p.schema](p.params || {}); } catch (e) { pb(`le schéma plante : ${e.message}`); continue; }
    if (typeof svg !== 'string' || !/^<svg [^>]*viewBox=/.test(svg) || !svg.endsWith('</svg>')) { pb('SVG invalide'); continue; }
    if (/NaN|undefined|Infinity/.test(svg)) { pb('SVG contient NaN / undefined / Infinity'); continue; }
    if (svg.length > 40000) { pb(`SVG trop lourd (${svg.length} caractères, 40 000 max)`); continue; }
    if (!parFiche.has(chemin)) parFiche.set(chemin, []);
    parFiche.get(chemin).push({ ...p, svg, ici });
  }
}

for (const [chemin, liste] of parFiche) {
  let md = readFileSync(chemin, 'utf8');
  for (const p of liste) {
    const bloc = `<!-- schema:${p.cle} -->\n![${p.legende}](${svgVersDataUri(p.svg)})\n*${p.legende}*\n<!-- /schema -->`;
    const re = new RegExp(`<!-- schema:${p.cle} -->[\\s\\S]*?<!-- /schema -->`);
    if (re.test(md)) { md = md.replace(re, () => bloc); poses++; continue; }
    const lignes = md.split('\n');
    let idx = -1;
    if (p.apres) {
      idx = lignes.findIndex((l) => /^#{1,4}\s/.test(l) && normTitre(l) === normTitre(p.apres));
      if (idx < 0) { console.log(`❌ ${p.ici} : titre « ${p.apres} » introuvable dans la fiche`); erreurs++; continue; }
    } else {
      let i = 0;
      if (lignes[0] === '---') { i = 1; while (i < lignes.length && lignes[i] !== '---') i++; i++; }
      idx = lignes.findIndex((l, j) => j >= i && /^#\s/.test(l));
      if (idx < 0) idx = i - 1;
    }
    lignes.splice(idx + 1, 0, '', bloc, '');
    md = lignes.join('\n').replace(/\n{3,}/g, '\n\n');
    poses++;
  }
  if (!DRY) writeFileSync(chemin, md, 'utf8');
}

console.log(`\n${DRY ? '(essai, rien écrit) ' : ''}${poses} schéma(s) posé(s) dans ${parFiche.size} fiche(s) · ${erreurs ? `❌ ${erreurs} problème(s)` : '✅ 0 problème'}`);
process.exit(erreurs ? 1 : 0);
