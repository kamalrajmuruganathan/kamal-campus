/**
 * Contrôle global (lecture seule) de TOUTES les banques de QCM écrites :
 * contenu/<niveau>/<matière>/<chapitre>/qcm.json et quiz/*.json.
 *
 * - 20 questions par chapitre (exigé par le CI) ;
 * - indice de bonne réponse valide ; choix non vides et distincts ;
 * - énoncé et explication présents ;
 * - aucune explication qui cite une lettre (« choix A ») : l'appli mélange les choix.
 *   Seules quelques questions des quiz de bac/brevet blanc le font (liste ci-dessous) :
 *   melangerChoix garde alors l'ordre écrit ;
 * - pas deux fois la même question (même énoncé et mêmes choix) dans un fichier.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { citeUneLettre, cleQuestion } from './quizmix.js';

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

function fichiersQcm() {
  const res = [];
  const contenu = path.join(RACINE, 'contenu');
  if (fs.existsSync(contenu)) {
    for (const niv of fs.readdirSync(contenu)) {
      const dn = path.join(contenu, niv);
      if (!fs.statSync(dn).isDirectory()) continue;
      for (const mat of fs.readdirSync(dn)) {
        const dm = path.join(dn, mat);
        if (!fs.statSync(dm).isDirectory()) continue;
        for (const ch of fs.readdirSync(dm)) {
          const f = path.join(dm, ch, 'qcm.json');
          if (fs.existsSync(f)) res.push(f);
        }
      }
    }
  }
  const quiz = path.join(RACINE, 'quiz');
  if (fs.existsSync(quiz)) for (const f of fs.readdirSync(quiz)) if (f.endsWith('.json')) res.push(path.join(quiz, f));
  return res;
}

const FICHIERS = fichiersQcm();
const rel = (f) => path.relative(RACINE, f);
const BANQUES = FICHIERS.map((f) => ({ f: rel(f), d: JSON.parse(fs.readFileSync(f, 'utf8')) }));

/** Explications qui citent une lettre, volontairement (quiz d'examen) : l'ordre écrit est gardé. */
const LETTRE_ADMISE = new Set([
  'quiz/bac-blanc-premiere-pc.json#3', 'quiz/bac-blanc-premiere-spe-maths.json#2', 'quiz/bac-blanc-premiere-spe-maths.json#5',
  'quiz/bac-blanc-seconde-maths.json#4', 'quiz/bac-blanc-seconde-maths.json#6', 'quiz/bac-blanc-seconde-maths.json#8',
  'quiz/bac-blanc-spe-maths.json#2', 'quiz/bac-blanc-spe-maths.json#13', 'quiz/bac-blanc-spe-maths.json#18',
  'quiz/brevet-blanc-maths.json#3', 'quiz/brevet-blanc-maths.json#5', 'quiz/revision-5e-maths.json#15',
  'quiz/revision-6e-maths.json#3', 'quiz/revision-premiere-ens-scientifique.json#5',
  'quiz/revision-premiere-techno-maths.json#8', 'quiz/revision-seconde-pc.json#6',
]);

/** Doublons connus (même question deux fois) à réécrire : signalés, pas bloquants. */
const DOUBLONS_CONNUS = new Set([]);

const norm = (s) => String(s).replace(/\s+/g, ' ').trim();

test('les banques de QCM sont trouvées', () => {
  assert.ok(BANQUES.length > 900, `${BANQUES.length} fichiers seulement`);
});

test('chaque chapitre a exactement 20 questions de QCM', () => {
  const erreurs = BANQUES.filter(({ f, d }) => f.startsWith('contenu') && d.questions?.length !== 20)
    .map(({ f, d }) => `${f} : ${d.questions?.length}`);
  assert.deepEqual(erreurs, []);
});

test('indice de bonne réponse valide, choix non vides et distincts, textes présents', () => {
  const erreurs = [];
  for (const { f, d } of BANQUES) {
    if (!Array.isArray(d.questions) || d.questions.length === 0) { erreurs.push(`${f} : aucune question`); continue; }
    for (const q of d.questions) {
      const ou = `${f}#${q.id}`;
      if (!Array.isArray(q.choix) || q.choix.length < 2) { erreurs.push(`${ou} : choix absents`); continue; }
      if (!Number.isInteger(q.reponse) || q.reponse < 0 || q.reponse >= q.choix.length) erreurs.push(`${ou} : reponse ${q.reponse} hors de [0, ${q.choix.length - 1}]`);
      if (q.choix.some((c) => typeof c !== 'string' || norm(c) === '')) erreurs.push(`${ou} : choix vide`);
      const n = q.choix.map(norm);
      if (new Set(n).size !== n.length) erreurs.push(`${ou} : choix en double ${JSON.stringify(q.choix)}`);
      if (typeof q.enonce !== 'string' || norm(q.enonce) === '') erreurs.push(`${ou} : énoncé vide`);
      if (typeof q.explication !== 'string' || norm(q.explication) === '') erreurs.push(`${ou} : explication vide`);
    }
  }
  assert.deepEqual(erreurs, []);
});

test('aucune explication ne cite une lettre (« choix A »), sauf exceptions connues des quiz', () => {
  const erreurs = [];
  for (const { f, d } of BANQUES) {
    for (const q of d.questions ?? []) {
      const ou = `${f}#${q.id}`;
      if (citeUneLettre(q.explication) && !LETTRE_ADMISE.has(ou)) erreurs.push(`${ou} : ${q.explication.slice(0, 80)}`);
    }
  }
  assert.deepEqual(erreurs, []);
  // La liste d'exceptions ne doit pas garder d'entrée périmée.
  const encore = new Set();
  for (const { f, d } of BANQUES) for (const q of d.questions ?? []) if (citeUneLettre(q.explication)) encore.add(`${f}#${q.id}`);
  for (const ou of LETTRE_ADMISE) assert.ok(encore.has(ou), `${ou} ne cite plus de lettre : retirer de LETTRE_ADMISE`);
});

test('pas deux fois la même question (énoncé et choix) dans un même fichier', () => {
  const erreurs = [];
  for (const { f, d } of BANQUES) {
    const vus = new Map();
    for (const q of d.questions ?? []) {
      const k = cleQuestion(q);
      if (vus.has(k) && !DOUBLONS_CONNUS.has(`${f}#${q.id}`)) erreurs.push(`${f}#${q.id} = #${vus.get(k)}`);
      if (!vus.has(k)) vus.set(k, q.id);
    }
  }
  assert.deepEqual(erreurs, []);
});

test('identifiants de questions uniques dans chaque fichier', () => {
  const erreurs = [];
  for (const { f, d } of BANQUES) {
    const ids = (d.questions ?? []).map((q) => q.id);
    if (new Set(ids).size !== ids.length) erreurs.push(f);
  }
  assert.deepEqual(erreurs, []);
});
