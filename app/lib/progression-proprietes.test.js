/**
 * Progression : niveaux (bornes exactes), séries de jours (dates, fuseaux, heure d'été),
 * objectif du jour et quêtes. Valeurs attendues calculées à la main (et vérifiées en Python).
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { niveauPourXp, xpPourNiveau, coutNiveau, rang, pointsSession, meilleureSerie } from './progression.js';
import { appliquerXpJour, serieAffichee, veille, estConsecutif, dateLocale } from './serie.js';
import { quetesDuJour, quetesFaites } from './quetes/index.js';

// ── Niveaux ─────────────────────────────────────────────────────────────────

test('xpPourNiveau : valeurs exactes (somme des coûts 100, 150, 200…)', () => {
  // m = niveau − 1 ; total = 25·m² + 75·m.
  const attendus = { 1: 0, 2: 100, 3: 250, 4: 450, 5: 700, 6: 1000, 10: 2700, 15: 5950, 21: 11500, 28: 20250, 99: 247450, 100: 252450 };
  for (const [n, xp] of Object.entries(attendus)) assert.equal(xpPourNiveau(Number(n)), xp, `niveau ${n}`);
  // Cohérence avec coutNiveau, niveau par niveau.
  let cumul = 0;
  for (let n = 1; n <= 300; n += 1) {
    assert.equal(xpPourNiveau(n), cumul);
    cumul += coutNiveau(n);
  }
});

test('niveauPourXp : bornes exactes (juste avant / pile sur chaque palier)', () => {
  for (let n = 2; n <= 200; n += 1) {
    const seuil = xpPourNiveau(n);
    assert.equal(niveauPourXp(seuil - 1).niveau, n - 1, `${seuil - 1} XP`);
    assert.equal(niveauPourXp(seuil).niveau, n, `${seuil} XP`);
    assert.equal(niveauPourXp(seuil).xpDansNiveau, 0);
    assert.equal(niveauPourXp(seuil - 1).xpRestant, 1);
  }
});

test('niveauPourXp : marche en cours cohérente pour tous les XP de 0 à 30 000', () => {
  let precedent = 1;
  for (let xp = 0; xp <= 30000; xp += 7) {
    const r = niveauPourXp(xp);
    assert.ok(r.niveau >= precedent, 'le niveau ne redescend jamais quand l’XP monte');
    precedent = r.niveau;
    assert.ok(r.xpDebutNiveau <= xp && xp < r.xpProchainNiveau);
    assert.equal(r.xpDansNiveau + r.xpRestant, r.largeurNiveau);
    assert.equal(r.largeurNiveau, coutNiveau(r.niveau));
    assert.ok(r.progression >= 0 && r.progression < 1);
    assert.equal(r.titre, rang(r.niveau));
  }
});

test('niveauPourXp : XP énormes, infinis, négatifs, décimaux, texte → pas de blocage ni d’erreur', () => {
  const t0 = Date.now();
  assert.equal(niveauPourXp(1e15).niveau > 6e6, true); // profil trafiqué : réponse immédiate
  assert.equal(niveauPourXp(Infinity).niveau, 1);
  assert.equal(niveauPourXp(-Infinity).niveau, 1);
  assert.equal(niveauPourXp(NaN).niveau, 1);
  assert.equal(niveauPourXp(-50).niveau, 1);
  assert.equal(niveauPourXp(99.99).niveau, 1); // les XP partiels ne comptent pas
  assert.equal(niveauPourXp('250').niveau, 3);
  assert.equal(niveauPourXp(null).niveau, 1);
  assert.equal(niveauPourXp(undefined).xpRestant, 100);
  assert.ok(Date.now() - t0 < 200, 'calcul trop lent');
  // Très grand XP : la borne reste exacte malgré les arrondis flottants.
  for (const n of [1e3, 1e4, 123457, 1e6]) {
    const s = xpPourNiveau(n);
    assert.equal(niveauPourXp(s).niveau, n);
    assert.equal(niveauPourXp(s - 1).niveau, n - 1);
  }
});

test('rangs : bornes des titres', () => {
  const attendus = [[1, 'Débutant'], [2, 'Débutant'], [3, 'Apprenti'], [5, 'Apprenti'], [6, 'Confirmé'], [9, 'Confirmé'],
    [10, 'Chevronné'], [14, 'Chevronné'], [15, 'Expert'], [20, 'Expert'], [21, 'Maître'], [27, 'Maître'], [28, 'Génie'], [500, 'Génie']];
  for (const [n, t] of attendus) assert.equal(rang(n), t, `niveau ${n}`);
});

test('pointsSession : exemples calculés à la main', () => {
  const q = (d) => ({ difficulte: d });
  // 4/5 justes (80 %) : (8 + 11 + 14 + 10) × 1,2 = 51,6 → 52.
  const r = pointsSession([q('facile'), q('moyen'), q('difficile'), q(), q('bac')], [{ juste: true }, { juste: true }, { juste: true }, { juste: true }, { juste: false }]);
  assert.deepEqual([r.points, r.justes, r.total, r.sansFaute], [52, 4, 5, false]);
  // 3/4 = 75 % : pas de bonus. 8 + 8 + 8 = 24.
  assert.equal(pointsSession([q('facile'), q('facile'), q('facile'), q('facile')], [{ juste: true }, { juste: true }, { juste: true }, {}]).points, 24);
  // Sans-faute sur 1 question « brevet » : 18 × 1,5 = 27.
  assert.equal(pointsSession([q('brevet')], [{ juste: true }]).points, 27);
  // Session vide : 0 point, pas un sans-faute.
  assert.deepEqual(pointsSession([], []), { points: 0, justes: 0, total: 0, taux: 0, sansFaute: false });
  // Réponses manquantes : comptées fausses.
  assert.equal(pointsSession([q('facile'), q('facile')], [{ juste: true }]).justes, 1);
});

test('meilleureSerie : réponses absentes ou nulles cassent la série', () => {
  assert.equal(meilleureSerie([{ juste: true }, null, { juste: true }, { juste: true }, undefined]), 2);
  assert.equal(meilleureSerie([]), 0);
});

// ── Séries de jours ─────────────────────────────────────────────────────────

const etat0 = (o = {}) => ({ objectifQuotidien: 50, jourCourant: null, xpDuJour: 0, serieJours: 0, dernierJourValide: null, meilleureSerieJours: 0, ...o });

test('veille / estConsecutif : fins de mois, années, années bissextiles, heure d’été', () => {
  const cas = [['2026-03-01', '2026-02-28'], ['2028-03-01', '2028-02-29'], ['2100-03-01', '2100-02-28'], ['2000-03-01', '2000-02-29'],
    ['2027-01-01', '2026-12-31'], ['2026-03-30', '2026-03-29'], ['2026-10-26', '2026-10-25'], ['2026-05-01', '2026-04-30']];
  for (const [j, v] of cas) {
    assert.equal(veille(j), v, j);
    assert.ok(estConsecutif(v, j));
    assert.ok(!estConsecutif(j, v), 'l’ordre compte');
  }
  assert.equal(estConsecutif(null, '2026-11-03'), false);
  assert.equal(estConsecutif('2026-11-01', '2026-11-03'), false);
});

test('dateLocale : jour LOCAL autour de minuit (Paris, heure d’été / d’hiver, Antilles, Réunion)', () => {
  const tz = process.env.TZ;
  try {
    process.env.TZ = 'Europe/Paris';
    assert.equal(dateLocale(new Date('2026-11-02T23:30:00Z')), '2026-11-03'); // 0 h 30 à Paris (hiver)
    assert.equal(dateLocale(new Date('2026-07-01T22:30:00Z')), '2026-07-02'); // 0 h 30 à Paris (été)
    assert.equal(dateLocale(new Date('2026-03-29T00:30:00Z')), '2026-03-29'); // nuit du passage à l'heure d'été
    assert.equal(dateLocale(new Date('2026-12-31T23:00:00Z')), '2027-01-01'); // minuit du Nouvel An
    process.env.TZ = 'America/Martinique';
    assert.equal(dateLocale(new Date('2026-11-04T01:00:00Z')), '2026-11-03'); // 21 h la veille
    process.env.TZ = 'Indian/Reunion';
    assert.equal(dateLocale(new Date('2026-11-02T21:00:00Z')), '2026-11-03'); // 1 h du matin
  } finally {
    if (tz === undefined) delete process.env.TZ; else process.env.TZ = tz;
  }
});

test('série : pile l’objectif valide le jour ; une unité de moins, non', () => {
  assert.equal(appliquerXpJour(etat0(), 49, '2026-11-03').objectifAtteintMaintenant, false);
  const e = appliquerXpJour(etat0(), 50, '2026-11-03');
  assert.equal(e.objectifAtteintMaintenant, true);
  assert.equal(e.serieJours, 1);
  // Atteint en plusieurs fois : signalé une seule fois.
  let s = appliquerXpJour(etat0(), 30, '2026-11-03');
  s = appliquerXpJour(s, 20, '2026-11-03');
  assert.equal(s.objectifAtteintMaintenant, true);
  s = appliquerXpJour(s, 40, '2026-11-03');
  assert.equal(s.objectifAtteintMaintenant, false);
  assert.equal(s.xpDuJour, 90);
  assert.equal(s.serieJours, 1);
});

test('série : objectif abaissé en cours de journée → le jour est validé au gain suivant', () => {
  // 40 XP gagnés avec un objectif de 60, puis l'élève choisit 30 XP dans son profil.
  let s = appliquerXpJour(etat0({ objectifQuotidien: 60 }), 40, '2026-11-03');
  assert.equal(s.dernierJourValide, null);
  s = appliquerXpJour({ ...s, objectifQuotidien: 30 }, 5, '2026-11-03');
  assert.equal(s.objectifAtteintMaintenant, true);
  assert.equal(s.dernierJourValide, '2026-11-03');
});

test('série : objectif absent ou illisible → 50 XP par défaut', () => {
  for (const o of [undefined, null, 0, -10, 'x']) {
    assert.equal(appliquerXpJour(etat0({ objectifQuotidien: o }), 49, '2026-11-03').dernierJourValide, null);
    assert.equal(appliquerXpJour(etat0({ objectifQuotidien: o }), 50, '2026-11-03').dernierJourValide, '2026-11-03');
  }
});

test('série : passage de minuit, de mois et d’année sans casser la série', () => {
  const jours = ['2026-12-30', '2026-12-31', '2027-01-01', '2027-01-02'];
  let s = etat0();
  for (const j of jours) s = appliquerXpJour(s, 60, j);
  assert.equal(s.serieJours, 4);
  assert.equal(s.meilleureSerieJours, 4);
  assert.equal(serieAffichee(s.dernierJourValide, s.serieJours, '2027-01-03'), 4); // vivante le lendemain
  assert.equal(serieAffichee(s.dernierJourValide, s.serieJours, '2027-01-04'), 0); // cassée ensuite
});

test('série : un jour sans objectif atteint casse la série (même avec un peu d’XP)', () => {
  let s = etat0();
  s = appliquerXpJour(s, 60, '2026-11-01');
  s = appliquerXpJour(s, 10, '2026-11-02'); // sous l'objectif
  s = appliquerXpJour(s, 60, '2026-11-03');
  assert.equal(s.serieJours, 1);
  assert.equal(s.meilleureSerieJours, 1);
});

test('série : 2 000 journées tirées au hasard → la série égale la suite de jours validés', () => {
  let graine = 12345;
  const r = () => ((graine = (graine * 1103515245 + 12345) % 2147483648) / 2147483648);
  let s = etat0({ objectifQuotidien: 30 });
  let attendue = 0; let meilleure = 0; let hier = false;
  let d = new Date(Date.UTC(2026, 0, 1));
  for (let i = 0; i < 2000; i += 1) {
    const jour = d.toISOString().slice(0, 10);
    const gains = Array.from({ length: Math.floor(r() * 4) }, () => Math.floor(r() * 25));
    for (const g of gains) s = appliquerXpJour(s, g, jour);
    const total = gains.reduce((a, b) => a + b, 0);
    const valide = total >= 30;
    attendue = valide ? (hier ? attendue + 1 : 1) : attendue;
    if (valide) meilleure = Math.max(meilleure, attendue);
    hier = valide;
    if (valide) assert.equal(s.serieJours, attendue, jour);
    assert.equal(serieAffichee(s.dernierJourValide, s.serieJours, jour), valide ? attendue : (s.dernierJourValide === veille(jour) ? s.serieJours : 0));
    d.setUTCDate(d.getUTCDate() + 1);
  }
  assert.equal(s.meilleureSerieJours, meilleure);
});

// ── Quêtes du jour ──────────────────────────────────────────────────────────

test('quêtes : textes et progression exacts', () => {
  const q = quetesDuJour({ objectif: 60, xpJour: 30, activitesJour: 1 });
  assert.deepEqual(q.map((x) => x.texte), ['Gagne 60 XP aujourd\'hui', 'Fais 2 activités', 'Garde ta série 🔥']);
  assert.deepEqual(q.map((x) => x.progres), [0.5, 0.5, 1]);
  assert.deepEqual(q.map((x) => x.fait), [false, false, true]);
  assert.equal(quetesFaites(q), 1);
  // Dépassement : borné à 1. Valeurs négatives : bornées à 0.
  const t = quetesDuJour({ objectif: 30, xpJour: 300, activitesJour: 9 });
  assert.deepEqual(t.map((x) => x.progres), [1, 1, 1]);
  assert.equal(quetesFaites(t), 3);
  assert.deepEqual(quetesDuJour({ xpJour: -5, activitesJour: -1 }).map((x) => x.progres), [0, 0, 0]);
});
