#!/usr/bin/env node
/**
 * Vérifie les fichiers contenu/<niveau>/<matiere>/<chapitre>/attendus.json
 * (réponses courtes acceptées par la vérification automatique des exercices).
 *
 *   node scripts/verifier-attendus.mjs                 → tous les chapitres
 *   node scripts/verifier-attendus.mjs cm1/maths/x …   → seulement ceux-là
 *
 * Erreurs bloquantes (code de sortie 1) :
 *  - format (clé = id existant, « reponse » identique à l'exercice, « accepte » OU « ensemble ») ;
 *  - forme non vérifiable par l'appli, ou que l'appli refuserait elle-même ;
 *  - nombre accepté qui n'apparaît ni dans la réponse ni dans le corrigé (garde-fou anti-erreur) ;
 *  - réponse « exemple » / « réponses possibles » (plusieurs bonnes réponses : pas d'attendu).
 * Affiche aussi la part d'exercices vérifiables automatiquement.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { typeExercice, comparerExercice, fusionnerAttendus } from '../lib/autocorrection/index.js';

const CONTENU = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'contenu');
const MAX_FORMES = 8;

function tousLesChapitres() {
  const out = [];
  for (const niv of readdirSync(CONTENU)) {
    const dn = join(CONTENU, niv);
    if (!statSync(dn).isDirectory()) continue;
    for (const mat of readdirSync(dn)) {
      const dm = join(dn, mat);
      if (!statSync(dm).isDirectory()) continue;
      for (const slug of readdirSync(dm)) {
        if (existsSync(join(dm, slug, 'exercice.json'))) out.push(`${niv}/${mat}/${slug}`);
      }
    }
  }
  return out.sort();
}

/** Texte « à plat » pour retrouver un nombre : sans LaTeX ni espaces des milliers. */
function aPlat(s) {
  return String(s)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => String('⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)))
    .replace(/\{,\}/g, ',')
    .replace(/\\[,;: !]|~| | /g, '')
    .replace(/[{}$\\]/g, '')
    .replace(/(\d)\s+(?=\d{3}\b)/g, '$1')
    .replace(/\./g, ',');
}

function nombresDe(forme) {
  return (aPlat(forme).match(/\d+(?:,\d+)?/g) || []);
}

const args = process.argv.slice(2);
const chapitres = args.length ? args.map((a) => a.replace(/^contenu\//, '').replace(/\/$/, '')) : tousLesChapitres();
let erreurs = 0;
let fichiers = 0;
let total = 0;
let autoAvant = 0;
let autoApres = 0;

for (const chemin of chapitres) {
  const dossier = join(CONTENU, chemin);
  const fEx = join(dossier, 'exercice.json');
  if (!existsSync(fEx)) { console.log(`❌ ${chemin} : pas d'exercice.json`); erreurs++; continue; }
  const matiere = chemin.split('/')[1];
  const exo = JSON.parse(readFileSync(fEx, 'utf8'));
  const fAtt = join(dossier, 'attendus.json');
  let fusion = exo;
  const pb = [];
  if (existsSync(fAtt)) {
    fichiers++;
    let att;
    try { att = JSON.parse(readFileSync(fAtt, 'utf8')); } catch (e) { pb.push(`JSON illisible (${e.message})`); }
    if (att) {
      const parId = new Map(exo.exercices.map((e) => [String(e.id), e]));
      for (const [id, a] of Object.entries(att)) {
        const ex = parId.get(id);
        const ici = `exercice ${id}`;
        if (!ex) { pb.push(`${ici} : id inconnu`); continue; }
        if (!a || typeof a !== 'object') { pb.push(`${ici} : valeur invalide`); continue; }
        if (a.reponse !== ex.reponse) { pb.push(`${ici} : « reponse » différente de exercice.json`); continue; }
        const cles = Object.keys(a).filter((k) => k !== 'reponse');
        if (cles.length !== 1 || !['accepte', 'ensemble'].includes(cles[0])) { pb.push(`${ici} : il faut « accepte » OU « ensemble » (et rien d'autre)`); continue; }
        const liste = a[cles[0]];
        if (!Array.isArray(liste) || !liste.length || liste.some((x) => typeof x !== 'string' || !x.trim())) { pb.push(`${ici} : « ${cles[0]} » doit être une liste de textes non vides`); continue; }
        if (liste.length > MAX_FORMES) { pb.push(`${ici} : ${liste.length} formes (max ${MAX_FORMES})`); continue; }
        if (cles[0] === 'ensemble' && liste.length < 2) { pb.push(`${ici} : « ensemble » demande au moins 2 éléments`); continue; }
        if (/^\s*(?:par\s+)?ex(?:emple|\.)\b|exemple de réponse|exemples? possibles?|réponses? possibles?|réponse libre|\((?:par\s+)?exemple\)|,\s*par exemple\s*:/i.test(ex.reponse)) { pb.push(`${ici} : réponse « exemple » → plusieurs bonnes réponses, pas d'attendu`); continue; }
        const avecAtt = { ...ex, attendu: cles[0] === 'ensemble' ? { ensemble: liste } : { accepte: liste } };
        if (typeExercice(avecAtt, matiere) !== 'auto') { pb.push(`${ici} : une forme n'est pas vérifiable (formule, plus de 12 mots…) : ${JSON.stringify(liste)}`); continue; }
        if (cles[0] === 'ensemble') {
          if (!comparerExercice(liste.join(', '), avecAtt, matiere)) pb.push(`${ici} : l'appli refuserait « ${liste.join(', ')} »`);
          if (liste.some((x) => /,|\bet\b/.test(x))) pb.push(`${ici} : un élément d'« ensemble » contient une virgule ou « et » (il serait coupé en deux)`);
        } else {
          for (const f of liste) if (!comparerExercice(f, avecAtt, matiere)) pb.push(`${ici} : l'appli refuserait sa propre forme « ${f} »`);
        }
        const source = aPlat(`${ex.reponse} ${(ex.corrige || []).join(' ')} ${ex.enonce}`);
        for (const f of liste) {
          for (const n of nombresDe(f)) {
            if (!source.includes(n)) pb.push(`${ici} : le nombre « ${n} » de « ${f} » n'apparaît ni dans la réponse ni dans le corrigé`);
          }
        }
      }
      fusion = fusionnerAttendus(exo, att).exercice;
    }
  }
  for (const [a, b] of exo.exercices.map((e, i) => [e, fusion.exercices[i]])) {
    total++;
    if (typeExercice(a, matiere) === 'auto') autoAvant++;
    if (typeExercice(b, matiere) === 'auto') autoApres++;
  }
  if (pb.length) {
    erreurs += pb.length;
    console.log(`❌ ${chemin}`);
    for (const p of pb) console.log(`   - ${p}`);
  } else if (args.length) {
    const n = fusion.exercices.filter((e) => typeExercice(e, matiere) === 'auto').length;
    console.log(`✅ ${chemin} : ${n}/${fusion.exercices.length} exercices vérifiables par l'appli`);
  }
}

const pct = (x) => (total ? ((100 * x) / total).toFixed(1) : '0') + ' %';
console.log(`\n${fichiers} fichier(s) attendus.json · exercices vérifiables : ${autoAvant}/${total} (${pct(autoAvant)}) → ${autoApres}/${total} (${pct(autoApres)})`);
console.log(erreurs ? `❌ ${erreurs} problème(s)` : '✅ 0 problème');
process.exit(erreurs ? 1 : 0);
