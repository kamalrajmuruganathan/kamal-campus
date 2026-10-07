import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  resumeEnfant, activiteRecente, matieresTravaillees, reculerJour, pourcentage, texteDerniereActivite,
} from './index.js';

// Jour d'une date ISO, indépendant du fuseau de la machine de test.
const jourUTC = (iso) => (iso ? String(iso).slice(0, 10) : null);
const OPTS = { aujourdhui: '2026-10-07', jourDe: jourUTC };

const PROFIL = {
  prenom: ' Léa ',
  xp: 420,
  xpParMatiere: { mathematiques: 300, 'physique-chimie': 120 },
  qcmTermines: 12,
  reponsesJustes: 90,
  reponsesTotal: 120,
  sansFautes: 2,
  flashcardsRevues: 40,
  enigmesResolues: 3,
  exosReussis: { 'c-maths-1': ['e1', 'e2'], 'c-pc-1': ['e7'] },
  chapitres: {
    'c-maths-1': { titre: 'Fractions', meilleurScore: 0.9, tentatives: 3 },
    'c-maths-2': { titre: 'Équations', meilleurScore: 0.3, tentatives: 1 },
    'c-pc-1': { titre: 'Atomes', meilleurScore: 0.6, tentatives: 2 },
  },
  historique: [
    { date: '2026-10-07T12:00:00.000Z', titre: 'Fractions', justes: 9, total: 10, points: 100, matiere: 'mathematiques' },
    { date: '2026-10-06T12:00:00.000Z', titre: 'Atomes', justes: 6, total: 10, points: 60, matiere: 'physique-chimie' },
    { date: '2026-10-06T13:00:00.000Z', titre: 'Énigme', justes: 1, total: 1, points: 10, matiere: null },
    { date: '2026-09-20T12:00:00.000Z', titre: 'Équations', justes: 3, total: 10, points: 30, matiere: 'mathematiques' },
  ],
  objectifQuotidien: 50,
  jourCourant: '2026-10-07',
  xpDuJour: 100,
  serieJours: 4,
  meilleureSerieJours: 6,
  dernierJourValide: '2026-10-07',
};

test('reculerJour traverse les mois', () => {
  assert.equal(reculerJour('2026-10-01', 1), '2026-09-30');
  assert.equal(reculerJour('2026-03-01', 1), '2026-02-28');
  assert.equal(reculerJour('2026-10-07', 0), '2026-10-07');
});

test('resumeEnfant : chiffres principaux', () => {
  const r = resumeEnfant(PROFIL, OPTS);
  assert.equal(r.prenom, 'Léa');
  assert.equal(r.vide, false);
  assert.equal(r.xp, 420);
  assert.ok(r.niveau >= 1);
  assert.equal(typeof r.rang, 'string');
  assert.equal(r.qcmTermines, 12);
  assert.equal(r.exercicesReussis, 3);
  assert.equal(r.tauxReussite, 0.75);
  assert.equal(r.serieJours, 4);
  assert.equal(r.meilleureSerieJours, 6);
  assert.equal(r.xpAujourdhui, 100);
  assert.equal(r.objectifAtteint, true);
  assert.equal(r.chapitresTravailles, 3);
  assert.equal(r.chapitresMaitrises, 1);
  assert.deepEqual(r.aRevoir.map((c) => c.titre), ['Équations']);
  assert.equal(r.recents.length, 4);
  assert.equal(r.recents[0].titre, 'Fractions');
  assert.equal(r.derniereActivite, '2026-10-07T12:00:00.000Z');
  assert.equal(r.joursDepuisDerniereActivite, 0);
});

test('resumeEnfant : série cassée et objectif du jour remis à zéro', () => {
  const r = resumeEnfant(PROFIL, { ...OPTS, aujourdhui: '2026-10-10' });
  assert.equal(r.serieJours, 0); // dernier jour validé il y a 3 jours
  assert.equal(r.xpAujourdhui, 0);
  assert.equal(r.objectifAtteint, false);
  assert.equal(r.joursDepuisDerniereActivite, 3);
});

test('resumeEnfant : profil vide ou absent', () => {
  for (const p of [null, undefined, {}, 'n’importe quoi']) {
    const r = resumeEnfant(p, OPTS);
    assert.equal(r.vide, true);
    assert.equal(r.xp, 0);
    assert.equal(r.niveau, 1);
    assert.equal(r.tauxReussite, null);
    assert.equal(r.derniereActivite, null);
    assert.equal(r.joursDepuisDerniereActivite, null);
    assert.deepEqual(r.matieres, []);
    assert.equal(r.semaine.sessions, 0);
  }
});

test('resumeEnfant : valeurs aberrantes neutralisées', () => {
  const r = resumeEnfant({ xp: -5, reponsesJustes: 50, reponsesTotal: 10, chapitres: { a: { meilleurScore: 7 }, b: null } }, OPTS);
  assert.equal(r.xp, 0);
  assert.equal(r.tauxReussite, 1);
  assert.equal(r.chapitresTravailles, 1);
  assert.equal(r.chapitresMaitrises, 1);
});

test('activiteRecente : 7 jours, du plus ancien au plus récent', () => {
  const a = activiteRecente(PROFIL.historique, '2026-10-07', 7, jourUTC);
  assert.equal(a.jours.length, 7);
  assert.equal(a.jours[0].date, '2026-10-01');
  assert.equal(a.jours[6].date, '2026-10-07');
  assert.deepEqual(a.jours[5], { date: '2026-10-06', sessions: 2, xp: 70 });
  assert.equal(a.sessions, 3); // la session du 20/09 est hors période
  assert.equal(a.xp, 170);
  assert.equal(a.joursActifs, 2);
  assert.equal(a.partielle, false);
});

test('activiteRecente : historique plein sur la semaine → partielle', () => {
  const plein = Array.from({ length: 30 }, () => ({ date: '2026-10-06T12:00:00Z', points: 10 }));
  assert.equal(activiteRecente(plein, '2026-10-07', 7, jourUTC).partielle, true);
  const ancien = [...plein.slice(0, 29), { date: '2026-09-01T12:00:00Z', points: 10 }];
  assert.equal(activiteRecente(ancien, '2026-10-07', 7, jourUTC).partielle, false);
});

test('matieresTravaillees : tri par XP puis chapitres, libellés', () => {
  const libelles = { mathematiques: 'Mathématiques', 'physique-chimie': 'Physique-chimie', svt: 'SVT' };
  const m = matieresTravaillees(
    { ...PROFIL, chapitres: { ...PROFIL.chapitres, 'c-svt-1': { titre: 'Cellule', meilleurScore: 1 } } },
    {
      matiereDeChapitre: (id) => ({ 'c-maths-1': 'mathematiques', 'c-maths-2': 'mathematiques', 'c-pc-1': 'physique-chimie', 'c-svt-1': 'svt' })[id],
      libelleMatiere: (x) => libelles[x],
    },
  );
  assert.deepEqual(m.map((e) => e.libelle), ['Mathématiques', 'Physique-chimie', 'SVT']);
  assert.deepEqual(m[0], { matiere: 'mathematiques', libelle: 'Mathématiques', xp: 300, sessions: 2, chapitres: 2 });
  assert.equal(m[2].chapitres, 1);
});

test('pourcentage et texteDerniereActivite', () => {
  assert.equal(pourcentage(0.75), '75 %');
  assert.equal(pourcentage(null), '—');
  assert.equal(texteDerniereActivite(null), 'aucune activité enregistrée');
  assert.equal(texteDerniereActivite(0), 'aujourd’hui');
  assert.equal(texteDerniereActivite(1), 'hier');
  assert.equal(texteDerniereActivite(4), 'il y a 4 jours');
});
