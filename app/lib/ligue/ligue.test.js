import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  LIGUES, debutSemaine, etatInitial, cohorte, rangEleve, nouveauPalier, appliquerRollover, ajouterXp,
} from './index.js';

test('debutSemaine renvoie toujours un lundi', () => {
  assert.equal(debutSemaine('2026-01-07'), '2026-01-05'); // mer → lundi 5
  assert.equal(debutSemaine('2026-01-05'), '2026-01-05'); // lundi
  assert.equal(debutSemaine('2026-01-11'), '2026-01-05'); // dim → même lundi
  assert.equal(debutSemaine('2026-01-12'), '2026-01-12'); // lundi suivant
});

test('la cohorte compte 10 membres dont l’élève, triée par XP', () => {
  const c = cohorte('2026-01-05', 0, 300);
  assert.equal(c.length, 10);
  assert.equal(c.filter((m) => m.moi).length, 1);
  for (let i = 1; i < c.length; i += 1) assert.ok(c[i - 1].xp >= c[i].xp);
});

test('la cohorte est déterministe (même entrée → même sortie)', () => {
  assert.deepEqual(cohorte('2026-01-05', 1, 250), cohorte('2026-01-05', 1, 250));
});

test('rang : beaucoup d’XP = 1er, zéro XP = dernier', () => {
  assert.equal(rangEleve('2026-01-05', 0, 999999), 1);
  assert.equal(rangEleve('2026-01-05', 0, 0), 10);
});

test('promotion/relégation selon le rang', () => {
  assert.equal(nouveauPalier(1, 1), 2); // top 3 → +1
  assert.equal(nouveauPalier(1, 3), 2);
  assert.equal(nouveauPalier(1, 5), 1); // milieu → maintien
  assert.equal(nouveauPalier(1, 9), 0); // bottom 3 → -1
  assert.equal(nouveauPalier(0, 10), 0); // pas sous Bronze
  assert.equal(nouveauPalier(4, 1), 4); // pas au-dessus de Diamant
});

test('appliquerRollover ne change rien dans la même semaine', () => {
  const e = { semaine: '2026-01-05', xpSemaine: 120, palier: 2, dernier: null };
  assert.deepEqual(appliquerRollover(e, '2026-01-09'), e);
});

test('appliquerRollover résout la semaine et réinitialise les XP', () => {
  const e = { semaine: '2026-01-05', xpSemaine: 999999, palier: 1, dernier: null };
  const apres = appliquerRollover(e, '2026-01-13'); // semaine suivante
  assert.equal(apres.semaine, '2026-01-12');
  assert.equal(apres.xpSemaine, 0);
  assert.equal(apres.palier, 2); // 1er → promu
  assert.equal(apres.dernier.sens, 'promotion');
});

test('ajouterXp cumule dans la semaine et gère le changement de semaine', () => {
  let e = etatInitial('2026-01-05');
  e = ajouterXp(e, 50, '2026-01-05');
  e = ajouterXp(e, 30, '2026-01-06');
  assert.equal(e.xpSemaine, 80);
  e = ajouterXp(e, 10, '2026-01-19'); // nouvelle semaine → reset puis +10
  assert.equal(e.xpSemaine, 10);
  assert.equal(e.semaine, '2026-01-19');
  assert.ok(LIGUES[e.palier]);
});
