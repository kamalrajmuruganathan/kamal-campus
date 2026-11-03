import { test } from 'node:test';
import assert from 'node:assert/strict';
import { etatSemaine, trierClassement, doitPublier, DELAI_PUBLICATION_MS } from './index.js';

test('XP de la semaine : remis à zéro le lundi, pas le dimanche', () => {
  const p = { xp: 900, semaineXp: '2026-10-26', xpDebutSemaine: 700 };
  assert.deepEqual(etatSemaine(p, '2026-11-01'), { semaineXp: '2026-10-26', xpDebutSemaine: 700, xpSemaine: 200, change: false });
  const lundi = etatSemaine(p, '2026-11-02');
  assert.deepEqual(lundi, { semaineXp: '2026-11-02', xpDebutSemaine: 900, xpSemaine: 0, change: true });
  // Une fois enregistré, plus rien à enregistrer.
  assert.equal(etatSemaine({ ...p, ...lundi }, '2026-11-03').change, false);
});

test('XP de la semaine : jamais négatif, jamais plus que l’XP total, XP décimaux ou en texte acceptés', () => {
  let graine = 3;
  const r = () => ((graine = (graine * 69069 + 1) % 4294967296) / 4294967296);
  for (let i = 0; i < 3000; i += 1) {
    const p = {
      xp: r() < 0.1 ? String(Math.floor(r() * 500)) : r() * 5000,
      semaineXp: r() < 0.5 ? '2026-10-26' : '2026-10-19',
      xpDebutSemaine: r() < 0.1 ? null : r() * 5000,
      ligue: r() < 0.5 ? { semaine: '2026-10-26', xpSemaine: r() * 800 } : null,
    };
    const e = etatSemaine(p, '2026-10-28');
    const xp = Math.floor(Number(p.xp));
    assert.ok(e.xpSemaine >= 0 && e.xpSemaine <= xp, JSON.stringify(p));
    assert.equal(e.xpDebutSemaine + e.xpSemaine, xp);
    assert.equal(e.semaineXp, '2026-10-26');
  }
});

test('classement : ex æquo à la même place, place suivante sautée (1, 1, 3)', () => {
  const lignes = [
    { id: 'a', pseudo: 'Zoé', xp: 100, xp_semaine: 50, semaine: 'S' },
    { id: 'b', pseudo: 'Adam', xp: 300, xp_semaine: 50, semaine: 'S' },
    { id: 'c', pseudo: 'Élise', xp: 900, xp_semaine: 20, semaine: 'S' },
    { id: 'd', pseudo: 'Émile', xp: 900, xp_semaine: 20, semaine: 'S' },
    { id: 'e', pseudo: 'Bob', xp: 5000, xp_semaine: 999, semaine: 'ancienne' },
  ];
  const t = trierClassement(lignes, { moiId: 'a', semaine: 'S' });
  assert.deepEqual(t.map((l) => [l.id, l.rang]), [['b', 1], ['a', 1], ['c', 3], ['d', 3], ['e', 5]]);
  // À égalité complète, ordre alphabétique français (É rangé avec E, avant « Emile » plus loin).
  assert.ok(t.findIndex((l) => l.id === 'c') < t.findIndex((l) => l.id === 'd'));
  assert.equal(t.find((l) => l.id === 'a').moi, true);
  assert.equal(t.find((l) => l.id === 'e').xpSemaine, 0);
});

test('classement : l’ordre des lignes reçues ne change rien', () => {
  const lignes = Array.from({ length: 12 }, (_, i) => ({ id: `u${i}`, pseudo: `Élève ${i % 5}`, xp: (i * 37) % 200, xp_semaine: (i * 13) % 4, semaine: 'S' }));
  const ref = trierClassement(lignes, { semaine: 'S' }).map((l) => [l.id, l.rang]);
  for (let k = 0; k < 20; k += 1) {
    const melange = [...lignes].sort(() => (Math.sin(k * 99 + lignes.length) > 0 ? 1 : -1)).reverse();
    assert.deepEqual(trierClassement(melange, { semaine: 'S' }).map((l) => l.rang), ref.map(([, r]) => r));
  }
  // Doublon d'id : gardé une fois. Lignes invalides : ignorées.
  assert.equal(trierClassement([{ id: 'x', xp: 1 }, { id: 'x', xp: 2 }, null, {}], {}).length, 1);
  assert.equal(trierClassement([{ id: 'x', xp: -5, pseudo: '' }], {})[0].pseudo, '(inconnu)');
});

test('publication : exactement 5 minutes après, pas 1 ms avant', () => {
  assert.equal(doitPublier(1000, 1000 + DELAI_PUBLICATION_MS - 1), false);
  assert.equal(doitPublier(1000, 1000 + DELAI_PUBLICATION_MS), true);
  assert.equal(doitPublier(undefined, 5), true);
  assert.equal(doitPublier(NaN, 5), true);
});
