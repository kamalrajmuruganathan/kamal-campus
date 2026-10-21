import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluerBadges, nombreObtenus, badgesNouveaux, statsDerivees, BADGES } from './badges.js';

function profil(over = {}) {
  return {
    xp: 0,
    xpParMatiere: {},
    qcmTermines: 0,
    reponsesJustes: 0,
    reponsesTotal: 0,
    sansFautes: 0,
    meilleureSerie: 0,
    flashcardsConnues: 0,
    chapitres: {},
    historique: [],
    ...over,
  };
}

test('un profil vierge n’a aucun badge', () => {
  assert.equal(nombreObtenus(profil()), 0);
});

test('terminer un QCM débloque « Premiers pas »', () => {
  const b = evaluerBadges(profil({ qcmTermines: 1 })).find((x) => x.id === 'premier-qcm');
  assert.equal(b.obtenu, true);
});

test('la valeur affichée est plafonnée à la cible', () => {
  const b = evaluerBadges(profil({ qcmTermines: 999 })).find((x) => x.id === 'premier-qcm');
  assert.equal(b.valeur, 1);
  assert.equal(b.cible, 1);
});

test('statsDerivees compte les chapitres maîtrisés (score ≥ 0,8)', () => {
  const p = profil({
    chapitres: {
      c1: { meilleurScore: 0.9, tentatives: 1 },
      c2: { meilleurScore: 0.5, tentatives: 1 },
      c3: { meilleurScore: 0.8, tentatives: 2 },
    },
  });
  assert.equal(statsDerivees(p).maitrises, 2);
});

test('le badge de niveau suit l’XP', () => {
  // niveau 5 ≈ 700 XP (cf. progression.js)
  const b = evaluerBadges(profil({ xp: 700 })).find((x) => x.id === 'niveau-5');
  assert.equal(b.obtenu, true);
  const bas = evaluerBadges(profil({ xp: 100 })).find((x) => x.id === 'niveau-5');
  assert.equal(bas.obtenu, false);
});

test('« Touche-à-tout » exige les deux matières', () => {
  const une = evaluerBadges(profil({ xpParMatiere: { mathematiques: 50 } })).find((x) => x.id === 'deux-matieres');
  assert.equal(une.obtenu, false);
  const deux = evaluerBadges(
    profil({ xpParMatiere: { mathematiques: 50, 'physique-chimie': 10 } }),
  ).find((x) => x.id === 'deux-matieres');
  assert.equal(deux.obtenu, true);
});

test('badgesNouveaux ne renvoie que les badges gagnés dans la transition', () => {
  const avant = profil({ qcmTermines: 0 });
  const apres = profil({ qcmTermines: 1, sansFautes: 1 });
  const gagnes = badgesNouveaux(avant, apres).map((b) => b.id).sort();
  assert.deepEqual(gagnes, ['premier-qcm', 'sans-faute-1']);
});

test('badgesNouveaux est vide si aucun palier n’est franchi', () => {
  const p = profil({ qcmTermines: 2 });
  assert.deepEqual(badgesNouveaux(p, profil({ qcmTermines: 3 })), []);
});

test('tous les badges ont un id unique et une cible positive', () => {
  const ids = BADGES.map((b) => b.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const b of BADGES) assert.ok(b.cible > 0, `${b.id} doit avoir une cible > 0`);
});

test('badges des fonctions récentes : exercices, dictées, examens, carnet, défis de la semaine', () => {
  const p = profil({
    exosReussis: { a: ['1', '2', '3', '4', '5'], b: ['1', '2', '3', '4', '5'], c: 'abimé' },
    dictees: { d1: { meilleure: 10, derniere: 9, essais: 2, date: '2026-10-20' }, d2: { meilleure: 7 }, x: null },
    examens: [{ id: 'e1', note20: 16.5 }, { id: 'e2', note20: 9 }, null],
    carnetMaitrisees: 10,
    defisSemaineReussis: 1,
  });
  const s = statsDerivees(p);
  assert.equal(s.exos, 10);
  assert.equal(s.dictees, 2);
  assert.equal(s.dicteesParfaites, 1);
  assert.equal(s.examens, 2);
  assert.equal(s.meilleurExamen, 16.5);
  const obtenus = new Set(evaluerBadges(p).filter((b) => b.obtenu).map((b) => b.id));
  for (const id of ['exos-10', 'dictee-1', 'dictee-parfaite', 'examen-1', 'examen-16', 'carnet-10', 'defis-semaine-1']) {
    assert.ok(obtenus.has(id), id);
  }
  for (const id of ['exos-100', 'dictees-10', 'examen-5', 'carnet-50', 'defis-semaine-12']) assert.ok(!obtenus.has(id), id);
  // Les nouveaux badges apparaissent dans badgesNouveaux.
  const nv = badgesNouveaux(profil(), p).map((b) => b.id);
  assert.ok(nv.includes('examen-16'));
});

test('identifiants de badges uniques', () => {
  assert.equal(new Set(BADGES.map((b) => b.id)).size, BADGES.length);
});
