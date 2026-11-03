/**
 * Test global de cohérence : pour CHAQUE exercice vérifiable automatiquement de contenu/,
 * la réponse attendue (et chaque forme d'attendus.json) doit être jugée JUSTE par
 * comparerExercice, la fonction qu'utilise l'écran Exercices.
 *
 * Les exercices sont fusionnés avec attendus.json comme dans scripts/generer-index.mjs,
 * et la matière est celle de l'en-tête de fiche.md (celle que reçoit l'écran).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { typeExercice, comparerExercice } from './index.js';
import { chargerExercices, recopies } from './outils-tests.js';

const { exercices, ecarts } = chargerExercices();
const auto = exercices.filter((o) => typeExercice(o.ex, o.matiere) === 'auto');

function juge(saisie, o) {
  try {
    return comparerExercice(saisie, o.ex, o.matiere);
  } catch (e) {
    return `exception : ${e.message}`;
  }
}

const resume = (echecs) => `${echecs.length} échec(s) :\n${echecs.slice(0, 25).join('\n')}`;

test('le contenu est chargé (≈ 48 000 exercices, ≈ 70 % vérifiables)', () => {
  assert.ok(exercices.length > 40000, `${exercices.length} exercices seulement`);
  assert.ok(auto.length > 0.6 * exercices.length, `${auto.length} vérifiables seulement`);
});

test('attendus.json : aucune ligne périmée (« reponse » identique à exercice.json)', () => {
  assert.deepEqual(ecarts, []);
});

test('chaque forme « accepte » et « exacte » d\'attendus.json est jugée juste', () => {
  const echecs = [];
  for (const o of auto) {
    const a = o.ex.attendu || {};
    for (const f of [...(a.accepte || []), ...(a.exacte || [])]) {
      if (juge(f, o) !== true) echecs.push(`${o.id} [${o.matiere}] « ${f} »`);
    }
  }
  assert.equal(echecs.length, 0, resume(echecs));
});

test('« ensemble » : tous les éléments, séparés par des virgules, dans l\'ordre donné ou à l\'envers', () => {
  const echecs = [];
  for (const o of auto) {
    const e = o.ex.attendu && o.ex.attendu.ensemble;
    if (!e) continue;
    for (const s of [e.join(', '), [...e].reverse().join(' ; ')]) if (juge(s, o) !== true) echecs.push(`${o.id} « ${s} »`);
  }
  assert.equal(echecs.length, 0, resume(echecs));
});

test('« ordre » : les éléments dans l\'ordre sont acceptés, à l\'envers refusés', () => {
  const echecs = [];
  for (const o of auto) {
    const ord = o.ex.attendu && o.ex.attendu.ordre;
    if (!ord) continue;
    const premiers = ord.map((x) => x.split('¦').map((v) => v.trim()).filter((v) => !/^\(?[a-h1-9]\)?$/i.test(v))[0] || x.split('¦')[0]);
    if (juge(premiers.join(' → '), o) !== true) echecs.push(`${o.id} refuse « ${premiers.join(' → ')} »`);
    if (juge([...premiers].reverse().join(' → '), o) === true) echecs.push(`${o.id} accepte l'ordre inverse`);
  }
  assert.equal(echecs.length, 0, resume(echecs));
});

test('sans attendus.json : la réponse recopiée depuis l\'affichage est jugée juste', () => {
  // Formes essayées : la réponse rendue (LaTeX → texte tapé), sans point final, sans parenthèse
  // explicative (« Faux (6) » → « Faux »). Une seule doit être acceptée.
  const echecs = [];
  let n = 0;
  for (const o of auto) {
    if (o.ex.attendu) continue;
    n++;
    const formes = recopies(o.ex.reponse);
    if (!formes.some((f) => juge(f, o) === true)) echecs.push(`${o.id} [${o.matiere}] « ${formes.join(' » / « ')} »`);
  }
  assert.ok(n > 1500, `${n} exercices seulement`);
  assert.equal(echecs.length, 0, resume(echecs));
});

test('une saisie vide ou blanche n\'est jamais juste, et rien ne plante', () => {
  const echecs = [];
  for (const [i, o] of auto.entries()) {
    if (i % 7) continue; // échantillon déterministe (≈ 5 000 exercices)
    for (const s of ['', '   ', '\n', null, undefined]) {
      const r = juge(s, o);
      if (r !== false) echecs.push(`${o.id} ${JSON.stringify(s)} → ${r}`);
    }
  }
  assert.equal(echecs.length, 0, resume(echecs));
});
