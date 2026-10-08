import { test } from 'node:test';
import assert from 'node:assert/strict';
import { etatSemaine, doitPublier, trierClassement, DELAI_PUBLICATION_MS } from './index.js';

// 2026-10-07 est un mercredi : la semaine commence le lundi 2026-10-05.
const MER = '2026-10-07';
const LUNDI = '2026-10-05';

test('profil sans champ : départ fixé, 0 XP cette semaine', () => {
  const e = etatSemaine({ xp: 500 }, MER);
  assert.deepEqual(e, { semaineXp: LUNDI, xpDebutSemaine: 500, xpSemaine: 0, change: true });
});

test('profil vide ou absent : rien ne plante', () => {
  assert.deepEqual(etatSemaine(undefined, MER), { semaineXp: LUNDI, xpDebutSemaine: 0, xpSemaine: 0, change: true });
  assert.deepEqual(etatSemaine({}, MER).xpSemaine, 0);
  assert.equal(etatSemaine({ xp: 'abc' }, MER).xpDebutSemaine, 0);
});

test('profil sans champ : on reprend les XP déjà comptés par la ligue de la semaine', () => {
  const e = etatSemaine({ xp: 500, ligue: { semaine: LUNDI, xpSemaine: 120 } }, MER);
  assert.equal(e.xpDebutSemaine, 380);
  assert.equal(e.xpSemaine, 120);
  assert.equal(e.change, true);
});

test('la ligue d’une autre semaine est ignorée', () => {
  const e = etatSemaine({ xp: 500, ligue: { semaine: '2026-09-28', xpSemaine: 120 } }, MER);
  assert.equal(e.xpSemaine, 0);
  assert.equal(e.xpDebutSemaine, 500);
});

test('même semaine : XP de la semaine = xp − xpDebutSemaine, rien à enregistrer', () => {
  const e = etatSemaine({ xp: 640, semaineXp: LUNDI, xpDebutSemaine: 500 }, MER);
  assert.deepEqual(e, { semaineXp: LUNDI, xpDebutSemaine: 500, xpSemaine: 140, change: false });
  // Dimanche : toujours la même semaine.
  assert.equal(etatSemaine({ xp: 640, semaineXp: LUNDI, xpDebutSemaine: 500 }, '2026-10-11').xpSemaine, 140);
});

test('changement de semaine : remise à zéro au lundi suivant', () => {
  const p = { xp: 640, semaineXp: LUNDI, xpDebutSemaine: 500 };
  const e = etatSemaine(p, '2026-10-12');
  assert.deepEqual(e, { semaineXp: '2026-10-12', xpDebutSemaine: 640, xpSemaine: 0, change: true });
});

test('changement de semaine avec XP déjà gagnés lundi (suivis par la ligue)', () => {
  const p = { xp: 700, semaineXp: LUNDI, xpDebutSemaine: 500, ligue: { semaine: '2026-10-12', xpSemaine: 60 } };
  const e = etatSemaine(p, '2026-10-13');
  assert.equal(e.xpSemaine, 60);
  assert.equal(e.xpDebutSemaine, 640);
});

test('profil remis à zéro (xp < départ) : on repart proprement, jamais de négatif', () => {
  const e = etatSemaine({ xp: 10, semaineXp: LUNDI, xpDebutSemaine: 500 }, MER);
  assert.equal(e.xpSemaine, 0);
  assert.equal(e.xpDebutSemaine, 10);
  assert.equal(e.change, true);
});

test('ligue incohérente (plus d’XP que le total) : bornée au total', () => {
  const e = etatSemaine({ xp: 50, ligue: { semaine: LUNDI, xpSemaine: 999 } }, MER);
  assert.equal(e.xpSemaine, 50);
  assert.equal(e.xpDebutSemaine, 0);
});

test('doitPublier : au plus une fois toutes les 5 minutes', () => {
  const t0 = 1_000_000_000;
  assert.equal(doitPublier(0, t0), true);
  assert.equal(doitPublier(undefined, t0), true);
  assert.equal(doitPublier(t0, t0 + 60_000), false);
  assert.equal(doitPublier(t0, t0 + DELAI_PUBLICATION_MS - 1), false);
  assert.equal(doitPublier(t0, t0 + DELAI_PUBLICATION_MS), true);
  assert.equal(doitPublier(t0, t0 - 1000), true); // horloge reculée
});

test('trierClassement : tri par XP de la semaine, ami d’une ancienne semaine = 0', () => {
  const lignes = [
    { id: 'a', pseudo: 'alice', xp: 900, xp_semaine: 50, semaine: LUNDI },
    { id: 'moi', pseudo: 'kamal', xp: 300, xp_semaine: 120, semaine: LUNDI },
    { id: 'b', pseudo: 'bob', xp: 5000, xp_semaine: 400, semaine: '2026-09-28' },
  ];
  const c = trierClassement(lignes, { moiId: 'moi', semaine: LUNDI });
  assert.deepEqual(c.map((l) => l.id), ['moi', 'a', 'b']);
  assert.deepEqual(c.map((l) => l.xpSemaine), [120, 50, 0]);
  assert.deepEqual(c.map((l) => l.rang), [1, 2, 3]);
  assert.equal(c[0].moi, true);
  assert.equal(c[1].moi, false);
});

test('trierClassement : égalité départagée par les XP totaux, même rang', () => {
  const lignes = [
    { id: 'a', pseudo: 'alice', xp: 100, xp_semaine: 0, semaine: LUNDI },
    { id: 'b', pseudo: 'bob', xp: 900, xp_semaine: 0, semaine: null },
  ];
  const c = trierClassement(lignes, { moiId: 'a', semaine: LUNDI });
  assert.deepEqual(c.map((l) => l.id), ['b', 'a']);
  assert.deepEqual(c.map((l) => l.rang), [1, 1]);
});

test('trierClassement sans colonnes de semaine : classement sur les XP totaux', () => {
  const lignes = [
    { id: 'a', pseudo: 'alice', xp: 100 },
    { id: 'b', pseudo: 'bob', xp: 900 },
    { id: 'b', pseudo: 'bob', xp: 900 }, // doublon ignoré
    null,
  ];
  const c = trierClassement(lignes, { moiId: 'a', semaine: LUNDI, avecSemaine: false });
  assert.deepEqual(c.map((l) => l.id), ['b', 'a']);
  assert.deepEqual(c.map((l) => l.rang), [1, 2]);
  assert.equal(c[1].xpSemaine, 0);
});

test('trierClassement : entrée vide', () => {
  assert.deepEqual(trierClassement(null, {}), []);
});
