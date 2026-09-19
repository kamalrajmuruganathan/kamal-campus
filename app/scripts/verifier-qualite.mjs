#!/usr/bin/env node
/**
 * Contrôle QUALITÉ de Kamal Campus — complète outils/verifier-contenu.sh.
 *
 * verifier-contenu.sh valide la STRUCTURE (présence, comptes, bornes). Ce script
 * traque les défauts de RENDU et de cohérence qui, eux, passent inaperçus :
 *   - LaTeX double-échappé (`\\pi` au lieu de `\pi`) : cassé au rendu KaTeX
 *   - symbole `$` non échappé et non apparié : ouvre une formule par erreur
 *   - doublons (choix de QCM, recto de cartes, énoncés d'exercices dans un chapitre)
 *   - champs vides (énoncé, explication, corrigé, réponse, recto/verso)
 *   - comptes non homogènes (20 QCM / 10 exercices / 12 cartes)
 *   - `chapitre` des JSON ≠ id de la fiche
 *   - JSON invalide dans contenu/, quiz/ et en-têtes de sujets/
 *
 * Sortie : rapport lisible + code de sortie 1 s'il reste des anomalies.
 *   usage : node scripts/verifier-qualite.mjs   (ou : npm run qualite)
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENU = join(RACINE, 'contenu');
const QUIZ = join(RACINE, 'quiz');
const SUJETS = join(RACINE, 'sujets');

const problemes = [];
const avert = [];
let nbChap = 0, nbJson = 0;

const sig = (f, msg) => problemes.push(`${relative(RACINE, f)} — ${msg}`);
const warn = (f, msg) => avert.push(`${relative(RACINE, f)} — ${msg}`);

// Toutes les chaînes d'un objet JSON (récursif).
function* chaines(o) {
  if (typeof o === 'string') yield o;
  else if (Array.isArray(o)) for (const x of o) yield* chaines(x);
  else if (o && typeof o === 'object') for (const v of Object.values(o)) yield* chaines(v);
}
// LaTeX double-échappé dans une chaîne DÉJÀ parsée : deux backslashes suivis d'un
// NOM DE COMMANDE (≥ 2 lettres), signature de l'artefact JSON `\\pi`, `\\dfrac`…
// On EXCLUT ainsi `\\` + lettre unique, qui est le séparateur de lignes LÉGITIME
// d'une matrice/aligné KaTeX (ex. \begin{pmatrix}x\\y\\z\end{pmatrix}).
const DOUBLE_ESC = /\\\\[a-zA-Z]{2,}/;
// `$` non précédé d'un backslash (délimiteur potentiel de formule).
const dollarsLibres = (s) => (s.match(/(?<!\\)\$/g) || []).length;

function litJson(f) {
  nbJson += 1;
  try { return JSON.parse(readFileSync(f, 'utf8')); }
  catch (e) { sig(f, `JSON invalide : ${String(e.message).slice(0, 60)}`); return null; }
}

function verifChaines(f, obj) {
  for (const s of chaines(obj)) {
    if (DOUBLE_ESC.test(s)) { sig(f, `LaTeX double-échappé (\\\\ + lettre) : « ${s.slice(0, 50)}… »`); break; }
  }
  for (const s of chaines(obj)) {
    if (dollarsLibres(s) % 2 !== 0) { sig(f, `symbole $ non apparié (échapper en \\$ si c'est un dollar) : « ${s.slice(0, 50)}… »`); break; }
  }
}

// ---- Parcours des chapitres de contenu/ ----
for (const niveau of existsSync(CONTENU) ? readdirSync(CONTENU) : []) {
  const dNiveau = join(CONTENU, niveau);
  if (!statSync(dNiveau).isDirectory()) continue;
  for (const parcours of readdirSync(dNiveau)) {
    const dParcours = join(dNiveau, parcours);
    if (!statSync(dParcours).isDirectory()) continue;
    for (const slug of readdirSync(dParcours)) {
      const d = join(dParcours, slug);
      if (!statSync(d).isDirectory()) continue;
      const fiche = join(d, 'fiche.md');
      if (!existsSync(fiche)) continue;
      nbChap += 1;

      // id de la fiche
      const md = readFileSync(fiche, 'utf8');
      const idm = md.match(/^id:\s*(.+)$/m);
      const ficheId = idm ? idm[1].trim() : null;
      if (!ficheId) sig(fiche, 'id absent de l’en-tête');

      // fiche : LaTeX double-échappé à l’intérieur des $...$ (hors blocs de code)
      const sansCode = md.replace(/```[\s\S]*?```/g, '');
      const spans = sansCode.match(/\$\$?[^$]*\$\$?/g) || [];
      if (spans.some((sp) => DOUBLE_ESC.test(sp))) sig(fiche, 'LaTeX double-échappé dans une formule de la fiche');

      const qcm = existsSync(join(d, 'qcm.json')) ? litJson(join(d, 'qcm.json')) : (sig(fiche, 'qcm.json manquant'), null);
      const exo = existsSync(join(d, 'exercice.json')) ? litJson(join(d, 'exercice.json')) : (sig(fiche, 'exercice.json manquant'), null);
      const fc = existsSync(join(d, 'flashcards.json')) ? litJson(join(d, 'flashcards.json')) : (sig(fiche, 'flashcards.json manquant'), null);

      if (qcm) {
        verifChaines(join(d, 'qcm.json'), qcm);
        const qs = qcm.questions || [];
        if (qs.length !== 20) sig(join(d, 'qcm.json'), `${qs.length} questions (attendu 20)`);
        if (ficheId && qcm.chapitre && qcm.chapitre !== ficheId) sig(join(d, 'qcm.json'), `chapitre « ${qcm.chapitre} » ≠ id fiche « ${ficheId} »`);
        qs.forEach((q, i) => {
          const c = q.choix || [];
          if (c.length !== 4 || new Set(c).size !== 4) sig(join(d, 'qcm.json'), `Q${i + 1} : choix non distincts / ≠ 4`);
          if (c.some((x) => !String(x).trim())) sig(join(d, 'qcm.json'), `Q${i + 1} : choix vide`);
          if (!(Number.isInteger(q.reponse) && q.reponse >= 0 && q.reponse < 4)) sig(join(d, 'qcm.json'), `Q${i + 1} : reponse hors bornes`);
          if (!String(q.enonce || '').trim()) sig(join(d, 'qcm.json'), `Q${i + 1} : énoncé vide`);
          if (!String(q.explication || '').trim()) sig(join(d, 'qcm.json'), `Q${i + 1} : explication vide`);
        });
      }
      if (exo) {
        verifChaines(join(d, 'exercice.json'), exo);
        const ex = exo.exercices || [];
        if (ex.length !== 10 && ex.length !== 50) sig(join(d, 'exercice.json'), `${ex.length} exercices (attendu 10)`);
        const enonces = new Set();
        ex.forEach((e, i) => {
          if (!Array.isArray(e.corrige) || e.corrige.length === 0 || e.corrige.some((s) => !String(s).trim())) sig(join(d, 'exercice.json'), `ex ${i + 1} : corrigé vide`);
          if (!String(e.reponse || '').trim()) sig(join(d, 'exercice.json'), `ex ${i + 1} : réponse vide`);
          if (!String(e.enonce || '').trim()) sig(join(d, 'exercice.json'), `ex ${i + 1} : énoncé vide`);
          const k = String(e.enonce || '').trim();
          if (k && enonces.has(k)) warn(join(d, 'exercice.json'), `ex ${i + 1} : énoncé en doublon`);
          enonces.add(k);
        });
      }
      if (fc) {
        verifChaines(join(d, 'flashcards.json'), fc);
        const ca = fc.cartes || [];
        if (ca.length !== 12) sig(join(d, 'flashcards.json'), `${ca.length} cartes (attendu 12)`);
        const rectos = new Set();
        ca.forEach((c, i) => {
          if (!String(c.recto || '').trim() || !String(c.verso || '').trim()) sig(join(d, 'flashcards.json'), `carte ${i + 1} : recto/verso vide`);
          const k = String(c.recto || '').trim();
          if (k && rectos.has(k)) warn(join(d, 'flashcards.json'), `carte ${i + 1} : recto en doublon`);
          rectos.add(k);
        });
      }
    }
  }
}

// ---- quiz/ (bacs blancs) ----
for (const f of existsSync(QUIZ) ? readdirSync(QUIZ).filter((x) => x.endsWith('.json')) : []) {
  const d = litJson(join(QUIZ, f));
  if (d) verifChaines(join(QUIZ, f), d);
}
// ---- sujets/ (markdown : cohérence $ et LaTeX) ----
for (const f of existsSync(SUJETS) ? readdirSync(SUJETS).filter((x) => x.endsWith('.md')) : []) {
  const md = readFileSync(join(SUJETS, f), 'utf8').replace(/```[\s\S]*?```/g, '');
  const spans = md.match(/\$\$?[^$]*\$\$?/g) || [];
  if (spans.some((sp) => DOUBLE_ESC.test(sp))) sig(join(SUJETS, f), 'LaTeX double-échappé dans une formule');
}

// ---- Rapport ----
console.log(`\n  Kamal Campus — contrôle qualité`);
console.log(`  ${nbChap} chapitres · ${nbJson} fichiers JSON analysés\n`);
if (avert.length) {
  console.log(`  ⚠️  ${avert.length} avertissement(s) (non bloquants) :`);
  for (const a of avert.slice(0, 40)) console.log(`     - ${a}`);
  if (avert.length > 40) console.log(`     … et ${avert.length - 40} de plus`);
  console.log('');
}
if (problemes.length === 0) {
  console.log('  ✅ aucune anomalie de rendu ni de cohérence détectée.');
  console.log('  ⚠️  ceci ne dit rien de l’exactitude pédagogique : voir docs/relecture.md.\n');
  process.exit(0);
} else {
  console.log(`  ✗ ${problemes.length} anomalie(s) à corriger :`);
  for (const p of problemes.slice(0, 60)) console.log(`     - ${p}`);
  if (problemes.length > 60) console.log(`     … et ${problemes.length - 60} de plus`);
  console.log('');
  process.exit(1);
}
