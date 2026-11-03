import { test } from 'node:test';
import assert from 'node:assert/strict';
import { debutSemaine, cohorte, rangEleve, nouveauPalier, appliquerRollover, ajouterXp, etatInitial, LIGUES } from './index.js';

test('debutSemaine : le lundi, y compris dimanche, fin d’année, bissextile, heure d’été', () => {
  const cas = {
    '2026-11-02': '2026-11-02', // lundi
    '2026-11-08': '2026-11-02', // dimanche → lundi d'avant
    '2026-11-09': '2026-11-09',
    '2027-01-01': '2026-12-28', // vendredi du Nouvel An
    '2027-01-03': '2026-12-28',
    '2028-03-01': '2028-02-28', // mercredi, année bissextile
    '2026-03-29': '2026-03-23', // dimanche du passage à l'heure d'été
    '2026-10-25': '2026-10-19', // dimanche du retour à l'heure d'hiver
    '2026-10-26': '2026-10-26',
  };
  for (const [j, l] of Object.entries(cas)) assert.equal(debutSemaine(j), l, j);
  // Sur deux ans : toujours un lundi, au plus 6 jours avant.
  let d = new Date(Date.UTC(2026, 0, 1));
  for (let i = 0; i < 730; i += 1) {
    const j = d.toISOString().slice(0, 10);
    const l = debutSemaine(j);
    assert.equal(new Date(`${l}T00:00:00Z`).getUTCDay(), 1);
    const ecart = (d - new Date(`${l}T00:00:00Z`)) / 86400000;
    assert.ok(ecart >= 0 && ecart <= 6);
    d.setUTCDate(d.getUTCDate() + 1);
  }
});

test('cohorte : égalité d’XP avec un adversaire → l’élève passe après lui (règle fixe)', () => {
  const c = cohorte('2026-10-26', 2, 0);
  const autre = c.find((m) => !m.moi);
  const avec = cohorte('2026-10-26', 2, autre.xp);
  const iMoi = avec.findIndex((m) => m.moi);
  const iAutre = avec.findIndex((m) => m.nom === autre.nom);
  assert.ok(iMoi > iAutre);
  // Noms uniques, XP entiers, cohorte de 10.
  for (let p = 0; p < LIGUES.length; p += 1) {
    const k = cohorte('2026-10-26', p, 123.6);
    assert.equal(k.length, 10);
    assert.equal(new Set(k.map((m) => m.nom)).size, 10);
    assert.equal(k.find((m) => m.moi).xp, 124);
    for (let i = 1; i < k.length; i += 1) assert.ok(k[i - 1].xp >= k[i].xp);
  }
  assert.equal(cohorte('2026-10-26', 0, -50).find((m) => m.moi).xp, 0);
});

test('rang : de plus en plus d’XP → rang de mieux en mieux (jamais pire)', () => {
  let prec = 11;
  for (let xp = 0; xp <= 3000; xp += 10) {
    const r = rangEleve('2026-10-26', 3, xp);
    assert.ok(r >= 1 && r <= 10);
    assert.ok(r <= prec);
    prec = r;
  }
  assert.equal(prec, 1);
});

test('paliers : promotion (rangs 1-3), maintien (4-7), relégation (8-10), bornes Bronze / Diamant', () => {
  const attendus = [1, 1, 1, 0, 0, 0, 0, -1, -1, -1];
  for (let rang = 1; rang <= 10; rang += 1) assert.equal(nouveauPalier(2, rang), 2 + attendus[rang - 1], `rang ${rang}`);
  assert.equal(nouveauPalier(4, 1), 4);
  assert.equal(nouveauPalier(0, 10), 0);
});

test('changement de semaine : le lundi seulement (dimanche soir → même semaine)', () => {
  let e = ajouterXp(null, 40, '2026-10-26'); // lundi
  e = ajouterXp(e, 10, '2026-11-01'); // dimanche
  assert.equal(e.semaine, '2026-10-26');
  assert.equal(e.xpSemaine, 50);
  e = ajouterXp(e, 5, '2026-11-02'); // lundi suivant
  assert.equal(e.semaine, '2026-11-02');
  assert.equal(e.xpSemaine, 5);
  assert.equal(e.dernier.semaine, '2026-10-26');
  assert.ok(['promotion', 'maintien', 'relegation'].includes(e.dernier.sens));
  // XP négatifs ou absents : ignorés.
  assert.equal(ajouterXp(e, -30, '2026-11-02').xpSemaine, 5);
  assert.equal(ajouterXp(e, undefined, '2026-11-02').xpSemaine, 5);
});

test('rollover : idempotent dans la même semaine et déterministe', () => {
  const e = { semaine: '2026-10-19', xpSemaine: 500, palier: 1, dernier: null };
  const r1 = appliquerRollover(e, '2026-10-28');
  assert.deepEqual(appliquerRollover(e, '2026-10-28'), r1);
  assert.equal(appliquerRollover(r1, '2026-11-01'), r1);
  assert.equal(etatInitial('2026-11-04').semaine, '2026-11-02');
});
