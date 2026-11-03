// Tests complémentaires de l'épreuve en conditions réelles : les 195 sujets du dépôt
// (barème, durée, note), le calcul de la note, le chronomètre et l'XP.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  pointsDe, lireDuree, dureeEpreuve, separerSujet, analyserSujet, calculerNote, arrondiDemi, nombreFr,
  titrePropre, cleTitre, memeCle, questionsDe, baremeIndicatif, sansEntete, normaliser,
  demarrerChrono, mettreEnPause, reprendre, tempsEcoule, tempsRestant, enPause, formaterChrono, formaterDuree,
  phaseChrono, xpEpreuve, meilleureNote, ajouterEpreuve, fusionnerEpreuves, MAX_EPREUVES, NIVEAUX,
} from './index.js';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'sujets');
const SUJETS = readdirSync(DIR).filter((f) => f.endsWith('.md')).sort()
  .map((f) => ({ f, md: readFileSync(join(DIR, f), 'utf8') }));
const ANALYSES = SUJETS.map(({ f, md }) => ({ f, md, a: analyserSujet({ id: f, contenu: md }) }));

// Générateur pseudo-aléatoire reproductible (graine fixe).
function graine(s) {
  let x = s >>> 0;
  return () => { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 2 ** 32; };
}

/** Lecture indépendante (et volontairement simple) de l'en-tête « Durée … » d'un sujet. */
function dureeAnnoncee(md) {
  const ligne = sansEntete(md).split('\n').find((l) => /Durée/.test(l));
  if (!ligne) return null;
  const apres = ligne.slice(ligne.indexOf('Durée'));
  let m = /:\s*(\d+)\s*h(?:eures?)?\s*(\d\d)?/.exec(apres);
  if (m) return Number(m[1]) * 60 + Number(m[2] || 0);
  m = /:\s*(\d+)\s*min/.exec(apres);
  return m ? Number(m[1]) : null;
}

/** Total annoncé dans l'en-tête : « /20 », « /100 pts », « Barème … : 25 points », « sur 20 points ». */
function totalAnnonce(md) {
  const ligne = sansEntete(md).split('\n').find((l) => /Durée/.test(l)) || '';
  const m = /\/\s*(\d+)/.exec(ligne) || /Barème[^:]*:\s*(\d+)\s*points/.exec(ligne) || /sur\s+(\d+)\s+points/.exec(ligne);
  return m ? Number(m[1]) : null;
}

// Sujets d'histoire-géographie du brevet annoncés « /50 » alors que leurs 4 exercices font 4 × 10 = 40 points
// (incohérence du contenu, signalée ; la note /20 reste juste puisqu'elle est rapportée au total réel).
const TOTAL_INCOHERENT = new Set([]);

test('195 sujets : il y a bien 195 fichiers et chacun s\'analyse sans erreur', () => {
  assert.equal(SUJETS.length, 195);
  for (const { f, a } of ANALYSES) assert.ok(a && Array.isArray(a.criteres), f);
});

test('195 sujets : la durée retenue est celle écrite dans l\'en-tête', () => {
  for (const { f, md, a } of ANALYSES) {
    const d = dureeAnnoncee(md);
    assert.ok(d, `${f} : pas de durée lisible dans l'en-tête`);
    assert.equal(a.duree.minutes, d, f);
    assert.equal(a.duree.source, 'sujet', f);
  }
});

test('195 sujets : l\'énoncé ne contient pas le corrigé, le corrigé n\'est pas vide', () => {
  for (const { f, md, a } of ANALYSES) {
    const { enonce, corrige, titreCorrige } = separerSujet(md);
    assert.ok(corrige && corrige.length > 50, `${f} : corrigé`);
    assert.ok(/^(\*\*)?(corrig|correction|éléments)/i.test(titreCorrige), `${f} : titre « ${titreCorrige} »`);
    assert.ok(!/^#{1,6}\s+(corrig|correction)/im.test(enonce), `${f} : un titre de corrigé est resté dans l'énoncé`);
    assert.ok(!/^---\s*$/.test(enonce.split('\n').pop()), `${f} : séparateur final dans l'énoncé`);
    assert.ok(!enonce.startsWith('---'), `${f} : l'en-tête YAML est resté dans l'énoncé`);
    assert.equal(a.enonce, enonce);
  }
});

test('195 sujets : total = total annoncé quand le barème vient du sujet ; estimation sur 20 sinon', () => {
  let estimes = 0;
  for (const { f, md, a } of ANALYSES) {
    const annonce = totalAnnonce(md);
    assert.ok(annonce, `${f} : total annoncé introuvable`);
    if (a.bareme === 'estime') {
      estimes += 1;
      assert.ok(Math.abs(a.total - 20) < 1e-9, `${f} : estimation sur 20`);
      const p0 = a.parties[0].points;
      assert.ok(a.parties.every((p) => Math.abs(p.points - p0) < 1e-12), `${f} : parts égales`);
      continue;
    }
    if (TOTAL_INCOHERENT.has(f)) { assert.equal(a.total, 40, f); continue; }
    assert.ok(Math.abs(a.total - annonce) < 1e-6, `${f} : total ${a.total} ≠ annoncé ${annonce}`);
  }
  assert.ok(estimes >= 10 && estimes <= 40, `nombre d'estimations : ${estimes}`);
});

test('195 sujets : identifiants uniques, chaque critère a un corrigé à montrer', () => {
  for (const { f, a } of ANALYSES) {
    const ids = a.criteres.map((c) => c.id);
    assert.equal(new Set(ids).size, ids.length, `${f} : id en double`);
    for (const p of a.parties) {
      if (p.questions) {
        for (const q of p.questions) assert.ok(q.corrige && q.corrige.trim(), `${f} : ${q.id} sans corrigé`);
        assert.equal(new Set(p.questions.map((q) => q.id)).size, p.questions.length, `${f} : questions en double`);
      }
      assert.ok(p.titre && !/\(\s*\d+\s*(points?|pts?)\s*\)/.test(p.titre), `${f} : titre « ${p.titre} »`);
      assert.ok(!p.titre.includes('**'), `${f} : gras dans le titre « ${p.titre} »`);
    }
    // Critères dans l'ordre des parties.
    const ordreParties = a.parties.map((p) => p.id);
    const vus = [...new Set(a.criteres.map((c) => c.partieId))];
    assert.deepEqual(vus, ordreParties.filter((id) => vus.includes(id)), f);
  }
});

test('195 sujets : tout réussi = 20/20, tout raté = 0/20, tout à moitié = 10/20', () => {
  for (const { f, a } of ANALYSES) {
    const tout = (niv) => Object.fromEntries(a.criteres.map((c) => [c.id, niv]));
    const r = calculerNote(a.criteres, tout('reussi'));
    assert.equal(r.note20, 20, f);
    assert.equal(r.complet, true, f);
    assert.equal(r.manquants, 0, f);
    assert.ok(Math.abs(r.points - r.total) < 1e-9, f);
    assert.equal(calculerNote(a.criteres, tout('rate')).note20, 0, f);
    assert.equal(calculerNote(a.criteres, tout('moitie')).note20, 10, f);
    const vide = calculerNote(a.criteres, {});
    assert.equal(vide.complet, false, f);
    assert.equal(vide.manquants, a.criteres.length, f);
    assert.equal(vide.note20, 0, f);
  }
});

test('195 sujets : notes tirées au hasard (graine fixe) — dans [0 ; 20], au demi-point, arrondi au plus proche', () => {
  const r = graine(42);
  const niv = ['reussi', 'moitie', 'rate'];
  for (const { f, a } of ANALYSES) {
    for (let k = 0; k < 60; k++) {
      const rep = {};
      for (const c of a.criteres) rep[c.id] = niv[Math.floor(r() * 3)];
      const n = calculerNote(a.criteres, rep);
      assert.ok(n.note20 >= 0 && n.note20 <= 20, f);
      assert.ok(Number.isInteger(n.note20 * 2), `${f} : ${n.note20}`);
      const exacte = (n.points / n.total) * 20;
      assert.ok(Math.abs(n.note20 - exacte) <= 0.25 + 1e-6, `${f} : ${n.note20} pour ${exacte}`);
    }
  }
});

test('calculerNote : monotone — cocher « réussi » au lieu de « raté » ne fait jamais baisser la note', () => {
  const a = ANALYSES.find((x) => x.f === 'brevet-maths.md').a;
  const r = graine(7);
  for (let k = 0; k < 200; k++) {
    const rep = {};
    for (const c of a.criteres) rep[c.id] = ['reussi', 'moitie', 'rate'][Math.floor(r() * 3)];
    const avant = calculerNote(a.criteres, rep).note20;
    const c = a.criteres[Math.floor(r() * a.criteres.length)];
    const apres = calculerNote(a.criteres, { ...rep, [c.id]: 'reussi' }).note20;
    assert.ok(apres >= avant);
  }
});

test('arrondiDemi : demi-point supérieur, même quand le calcul flottant tombe juste en dessous', () => {
  assert.equal(arrondiDemi(12.25), 12.5);
  assert.equal(arrondiDemi(12.75), 13);
  assert.equal(arrondiDemi(12.2), 12);
  assert.equal(arrondiDemi(12.3), 12.5);
  assert.equal(arrondiDemi(0), 0);
  assert.equal(arrondiDemi(20), 20);
  assert.equal(arrondiDemi(19.9), 20);
  assert.equal(arrondiDemi(0.24), 0);
  // Bug corrigé : 16,25 calculé 16,249999999999996 donnait 16 au lieu de 16,5.
  assert.equal(arrondiDemi(16.249999999999996), 16.5);
  assert.equal(arrondiDemi(11.249999999999998), 11.5);
  assert.equal(arrondiDemi(13.749999999999996), 14);
  // Critères à 20/3 points : réussi + moitié + raté = 10 points sur 20 → 10/20.
  const tiers = [{ id: 'a', points: 20 / 3 }, { id: 'b', points: 20 / 3 }, { id: 'c', points: 20 / 3 }];
  assert.equal(calculerNote(tiers, { a: 'reussi', b: 'moitie', c: 'rate' }).note20, 10);
});

test('calculerNote : valeurs calculées à la main, réponses inconnues ignorées, entrées absentes', () => {
  const crit = [{ id: 'q1', points: 2 }, { id: 'q2', points: 3 }, { id: 'q3', points: 5 }, { id: 'q4', points: 10 }];
  // 2 + 1,5 + 0 + 10 = 13,5 / 20 → 13,5
  let n = calculerNote(crit, { q1: 'reussi', q2: 'moitie', q3: 'rate', q4: 'reussi' });
  assert.deepEqual(n, { points: 13.5, total: 20, note20: 13.5, coches: 4, manquants: 0, complet: true });
  // Sur 100 : 37 / 100 → 7,4 → 7,5
  n = calculerNote([{ id: 'a', points: 37 }, { id: 'b', points: 63 }], { a: 'reussi', b: 'rate' });
  assert.equal(n.note20, 7.5);
  // Sur 25 : 13 / 25 → 10,4 → 10,5
  n = calculerNote([{ id: 'a', points: 13 }, { id: 'b', points: 12 }], { a: 'reussi', b: 'rate' });
  assert.equal(n.note20, 10.5);
  // Valeur inconnue : pas comptée comme cochée.
  n = calculerNote(crit, { q1: 'super', q2: 'reussi', autre: 'reussi' });
  assert.equal(n.coches, 1);
  assert.equal(n.complet, false);
  assert.equal(n.points, 3);
  // Entrées absentes : pas d'exception.
  assert.deepEqual(calculerNote(undefined), { points: 0, total: 0, note20: 0, coches: 0, manquants: 0, complet: false });
  assert.deepEqual(calculerNote(null, null), { points: 0, total: 0, note20: 0, coches: 0, manquants: 0, complet: false });
  assert.equal(NIVEAUX.moitie.libelle, 'À moitié');
});

test('nombreFr : virgule décimale, pas de zéro inutile', () => {
  assert.equal(nombreFr(0), '0');
  assert.equal(nombreFr(7.25, 2), '7,25');
  assert.equal(nombreFr(20 / 3, 2), '6,67');
  assert.equal(nombreFr(6.666, 1), '6,7');
  assert.equal(nombreFr(100), '100');
  assert.equal(nombreFr(2.5), '2,5');
});

test('pointsDe : écritures supplémentaires', () => {
  assert.equal(pointsDe('(0,5 pt)'), 0.5);
  assert.equal(pointsDe('(0.5 pt)'), 0.5);
  assert.equal(pointsDe('(1 point)'), 1);
  assert.equal(pointsDe('Exercice 3 (20 pts au total)'), 20);
  assert.equal(pointsDe('Exercice 3 (POINTS : 4 pts)'), 4);
  assert.equal(pointsDe(''), null);
  assert.equal(pointsDe(null), null);
  assert.equal(pointsDe(undefined), null);
  assert.equal(pointsDe('15 points'), null); // sans parenthèses : pas un barème
  assert.equal(pointsDe('(voir page 3)'), null);
});

test('lireDuree : variantes d\'écriture', () => {
  assert.equal(lireDuree('Durée : 1h30'), 90);
  assert.equal(lireDuree('Durée : 1h'), 60);
  assert.equal(lireDuree('Durée : 1 h 45 min'), 105);
  assert.equal(lireDuree('Durée totale : 2 heures 30'), 150);
  assert.equal(lireDuree('Durée : 45 minutes'), 45);
  assert.equal(lireDuree('Duree : 2 h'), 120);
  assert.equal(lireDuree('DURÉE : 3 h'), 180);
  assert.equal(lireDuree('Première ligne\n**Durée : 2 h 00**'), 120);
  assert.equal(lireDuree(''), null);
  assert.equal(lireDuree(null), null);
  assert.equal(lireDuree('Durée : à vous de voir'), null);
});

test('dureeEpreuve : la durée écrite l\'emporte sur la durée officielle', () => {
  const s = { contenu: '# Bac\n\n**Durée : 1 h 30**\n\n## Corrigé\n\nx', examen: 'Bac', matiere: 'philosophie' };
  assert.deepEqual(dureeEpreuve(s), { minutes: 90, source: 'sujet' });
  assert.deepEqual(dureeEpreuve({ contenu: '# x', examen: 'Brevet', matiere: 'francais' }), { minutes: 180, source: 'officielle' });
  assert.deepEqual(dureeEpreuve({ contenu: '# x', examen: 'Bac', matiere: 'svt' }), { minutes: 210, source: 'officielle' });
  assert.deepEqual(dureeEpreuve(null), { minutes: null, source: null });
  assert.deepEqual(dureeEpreuve(undefined), { minutes: null, source: null });
});

test('separerSujet : variantes de titres de corrigé, en-tête YAML, BOM, retours Windows', () => {
  const md = '﻿---\r\nid: x\r\n---\r\n# Sujet\r\n\r\nQuestion ?\r\n\r\n***\r\n\r\n## Éléments de corrigé\r\n\r\nRéponse.';
  const s = separerSujet(md);
  assert.equal(s.enonce, '# Sujet\n\nQuestion ?');
  assert.equal(s.corrige, 'Réponse.');
  assert.equal(s.titreCorrige, 'Éléments de corrigé');
  assert.equal(separerSujet('# A\n\n## **Corrigé**\n\nB').corrige, 'B');
  assert.equal(separerSujet('# A\n\n## Correction\n\nB').corrige, 'B');
  // « Corrigé » au milieu d'une phrase n'est pas un titre de corrigé.
  assert.equal(separerSujet('# A\n\nLe corrigé viendra plus tard.').corrige, null);
  // Titre de corrigé sans contenu.
  assert.equal(separerSujet('# A\n\n## Corrigé\n').corrige, null);
  // Commentaire HTML multi-lignes contenant un faux titre.
  const c = separerSujet('# A\n\n<!--\n# Corrigé\n-->\nTexte\n\n## Corrigé\n\nB');
  assert.equal(c.corrige, 'B');
  assert.ok(c.enonce.includes('Texte'));
  assert.deepEqual(separerSujet(''), { enonce: '', corrige: null, titreCorrige: null });
});

test('titrePropre, cleTitre, memeCle, normaliser', () => {
  assert.equal(titrePropre('**Exercice 1 — Suites (5 points)**'), 'Exercice 1 — Suites');
  assert.equal(titrePropre('Rédaction (40 pts) — au choix'), 'Rédaction — au choix');
  assert.equal(titrePropre('Partie A :'), 'Partie A');
  assert.equal(normaliser('  Écrit  **ÉLÈVE** '), 'ecrit eleve');
  assert.equal(cleTitre('Exercice 12 (3 points)'), 'exercice 12');
  assert.equal(cleTitre('Problème 2'), 'probleme 2');
  assert.equal(cleTitre('IV — Conclusion'), 'r iv');
  assert.ok(!memeCle('exercice 2', 'exercice 21'));
  assert.ok(!memeCle('', 'a'));
  assert.ok(!memeCle(null, null));
  assert.ok(!memeCle('abc', 'abcdef')); // trop court pour un rapprochement par préfixe
  assert.ok(memeCle('redaction', 'redactionsujet'));
});

test('questionsDe : numéros, sous-parties, points, ignore le code', () => {
  const corps = '### Partie A\n\n1. Calculer. (2 pts)\n2. Tracer.\n\n```python\n1. pas une question\n```\n\n### Partie B\n\n1. Conclure. (1,5 pt)';
  const q = questionsDe(corps);
  assert.deepEqual(q.map((x) => [x.cle, x.points]), [['A.1', 2], ['A.2', null], ['B.1', 1.5]]);
  assert.ok(q[1].texte.includes('pas une question'));
  assert.equal(q[0].libelle, 'Question A.1');
  assert.deepEqual(questionsDe(''), []);
  assert.deepEqual(questionsDe('Texte sans question.'), []);
  // « 2024. » n'est pas un numéro de question (au plus 2 chiffres).
  assert.deepEqual(questionsDe('2024. Une année.'), []);
});

test('baremeIndicatif : critère sans points → refus ; un seul critère → refus ; virgule décimale', () => {
  assert.equal(baremeIndicatif('**Barème indicatif.** Tout : 20 pts.'), null);
  assert.equal(baremeIndicatif('Barème indicatif : intro : 4 pts ; corps ; conclusion : 4 pts'), null);
  const c = baremeIndicatif('Barème indicatif : intro : 2,5 pts ; développement : 15 points ; conclusion : 2,5 pts');
  assert.deepEqual(c.map((x) => x.points), [2.5, 15, 2.5]);
  assert.deepEqual(c.map((x) => x.titre), ['Intro', 'Développement', 'Conclusion']);
  assert.equal(baremeIndicatif(null), null);
});

test('analyserSujet : barème indicatif du corrigé (dissertation) → bareme « sujet », critères dans l\'ordre', () => {
  const md = '# Bac\n\n**Durée : 4 h**\n\n## Sujet\n\nQuestion.\n\n## Corrigé\n\n**Barème indicatif.** Introduction : 4 pts ; développement : 12 pts ; conclusion : 4 pts.';
  const a = analyserSujet({ contenu: md });
  assert.equal(a.bareme, 'sujet');
  assert.equal(a.total, 20);
  assert.deepEqual(a.criteres.map((c) => [c.id, c.libelle, c.points]), [['c1', 'Introduction', 4], ['c2', 'Développement', 12], ['c3', 'Conclusion', 4]]);
});

test('analyserSujet : corrigé d\'un seul bloc → un seul critère « Ta copie dans son ensemble » sur 20', () => {
  const a = analyserSujet({ contenu: '# Sujet\n\n**Durée : 1 h**\n\nÉcris un texte.\n\n## Corrigé\n\nUn texte réussi raconte une histoire.' });
  assert.equal(a.bareme, 'estime');
  assert.deepEqual(a.criteres.map((c) => [c.libelle, c.points]), [['Ta copie dans son ensemble', 20]]);
  assert.equal(calculerNote(a.criteres, { e1: 'moitie' }).note20, 10);
});

test('analyserSujet : sujet vide ou absent → pas d\'exception', () => {
  for (const s of [undefined, null, {}, { contenu: '' }]) {
    const a = analyserSujet(s);
    assert.equal(a.aCorrige, false);
    assert.equal(a.total, 0);
    assert.deepEqual(a.criteres, []);
  }
});

test('analyserSujet : questions de l\'énoncé avec points officiels → bareme « sujet » et somme exacte', () => {
  const md = '# Brevet\n\n**Durée : 2 h**\n\n## Exercice 1 (6 points)\n\n1. A (2 pts)\n2. B (4 pts)\n\n## Exercice 2 (14 points)\n\n1. C (14 pts)\n\n## Corrigé\n\n## Exercice 1\n\n1. a\n2. b\n\n## Exercice 2\n\n1. c';
  const a = analyserSujet({ contenu: md });
  assert.equal(a.bareme, 'sujet');
  assert.deepEqual(a.criteres.map((c) => c.points), [2, 4, 14]);
  assert.deepEqual(a.criteres.map((c) => c.id), ['p1q1', 'p1q2', 'p2']); // une seule question → partie entière
  assert.equal(a.parties[1].corrige, '1. c');
});

test('analyserSujet : points des questions incohérents avec ceux de l\'exercice → parts égales (partiel)', () => {
  const md = '# T\n\n**Durée : 1 h**\n\n## Exercice 1 (10 points)\n\n1. A (2 pts)\n2. B (2 pts)\n\n## Corrigé\n\n## Exercice 1\n\n1. a\n2. b';
  const a = analyserSujet({ contenu: md });
  assert.equal(a.bareme, 'partiel');
  assert.deepEqual(a.criteres.map((c) => c.points), [5, 5]);
  assert.equal(a.total, 10);
});

// ───────────────────────────── chronomètre ─────────────────────────────

test('chrono : plusieurs pauses et reprises s\'additionnent', () => {
  let c = demarrerChrono(0);
  c = mettreEnPause(c, 10_000); // 10 s
  c = reprendre(c, 50_000);
  c = mettreEnPause(c, 65_000); // + 15 s
  c = reprendre(c, 100_000);
  assert.equal(tempsEcoule(c, 130_000), 55_000); // + 30 s
  assert.equal(tempsRestant(c, 60_000, 130_000), 5_000);
  assert.equal(enPause(c), false);
});

test('chrono : reprendre un chrono en marche ou mettre en pause un chrono en pause ne change rien', () => {
  const c = demarrerChrono(1000);
  assert.equal(reprendre(c, 5000), c);
  const p = mettreEnPause(c, 2000);
  assert.equal(mettreEnPause(p, 9000), p);
  assert.equal(tempsEcoule(p, 1e12), 1000);
});

test('chrono : absent (null) → 0 écoulé, en pause ; reprendre démarre', () => {
  assert.equal(tempsEcoule(null, 5000), 0);
  assert.equal(enPause(null), true);
  assert.equal(enPause(undefined), true);
  assert.deepEqual(reprendre(null, 5000), { ecouleMs: 0, depuis: 5000 });
  assert.equal(tempsRestant(null, 60_000, 0), 60_000);
});

test('chrono : horloge qui recule (changement d\'heure manuel) → jamais de temps négatif', () => {
  let c = demarrerChrono(100_000);
  assert.equal(tempsEcoule(c, 40_000), 0);
  c = mettreEnPause(c, 40_000);
  assert.equal(c.ecouleMs, 0);
  c = reprendre(c, 40_000);
  assert.equal(tempsEcoule(c, 70_000), 30_000);
  assert.ok(tempsRestant(c, 10_000, 0) === 10_000);
});

test('chrono : sérialisable (reprise après fermeture de l\'appli)', () => {
  const c = mettreEnPause(demarrerChrono(1000), 61_000);
  const relu = JSON.parse(JSON.stringify(c));
  assert.equal(tempsEcoule(relu, 1e9), 60_000);
  assert.equal(enPause(relu), true);
  const r = reprendre(relu, 2e6);
  assert.equal(tempsEcoule(r, 2e6 + 1000), 61_000);
});

test('formaterChrono : secondes arrondies au-dessus (le chrono n\'affiche jamais 0:00 avant la fin)', () => {
  assert.equal(formaterChrono(0), '0:00');
  assert.equal(formaterChrono(1), '0:01');
  assert.equal(formaterChrono(999), '0:01');
  assert.equal(formaterChrono(59_999), '1:00');
  assert.equal(formaterChrono(60_000), '1:00');
  assert.equal(formaterChrono(3_599_000), '59:59');
  assert.equal(formaterChrono(3_600_000), '1:00:00');
  assert.equal(formaterChrono(3_661_000), '1:01:01');
  assert.equal(formaterChrono(4 * 3600e3), '4:00:00');
  assert.equal(formaterChrono(NaN), '0:00');
});

test('formaterDuree : espaces et zéros', () => {
  assert.equal(formaterDuree(0), '0 min');
  assert.equal(formaterDuree(1), '1 min');
  assert.equal(formaterDuree(59.6), '1 h');
  assert.equal(formaterDuree(65), '1 h 05');
  assert.equal(formaterDuree(90), '1 h 30');
  assert.equal(formaterDuree(240), '4 h');
});

test('phaseChrono : seuils exacts', () => {
  const h1 = 3600e3;
  assert.equal(phaseChrono(5 * 60e3, h1), 'fin');
  assert.equal(phaseChrono(5 * 60e3 + 1, h1), 'bientot');
  assert.equal(phaseChrono(15 * 60e3, h1), 'bientot');
  assert.equal(phaseChrono(15 * 60e3 + 1, h1), 'normal');
  // 4 h : 10 % = 24 min > 15 min
  assert.equal(phaseChrono(24 * 60e3, 4 * h1), 'bientot');
  assert.equal(phaseChrono(24 * 60e3 + 1, 4 * h1), 'normal');
  assert.equal(phaseChrono(0, h1), 'fin');
});

// ───────────────────────────── XP ─────────────────────────────

test('xpEpreuve : pas de double gain en refaisant le même sujet', () => {
  const d = 3600e3;
  let h = [];
  let total = 0;
  for (const note20 of [12, 12, 11, 15, 15, 14.5, 20, 20]) {
    const meilleureAvant = meilleureNote(h, 's');
    total += xpEpreuve({ note20, meilleureAvant, tempsMs: d, dureeMs: d });
    h = ajouterEpreuve(h, { id: `e${h.length}`, sujetId: 's', note20, fin: h.length + 1 });
  }
  // 10 + 20 (meilleure note finale) : pas plus que si l'élève avait eu 20 du premier coup.
  assert.equal(total, 30);
});

test('xpEpreuve : seuil du quart du temps, durées invalides', () => {
  const d = 4000;
  assert.equal(xpEpreuve({ note20: 10, tempsMs: 999, dureeMs: d }), 0);
  assert.equal(xpEpreuve({ note20: 10, tempsMs: 1000, dureeMs: d }), 20);
  assert.equal(xpEpreuve({ note20: 10, tempsMs: 1000, dureeMs: 0 }), 0);
  assert.equal(xpEpreuve({ note20: 10, tempsMs: 1000, dureeMs: null }), 0);
  assert.equal(xpEpreuve({ note20: 10, tempsMs: undefined, dureeMs: d }), 0);
  assert.equal(xpEpreuve({ note20: 10, tempsMs: NaN, dureeMs: d }), 0);
  assert.equal(xpEpreuve({ note20: 0, tempsMs: d, dureeMs: d }), 10);
  assert.equal(xpEpreuve({ note20: 0, meilleureAvant: 0, tempsMs: d, dureeMs: d }), 0);
});

test('meilleureNote : ignore les entrées abîmées', () => {
  const h = [null, { sujetId: 's' }, { sujetId: 's', note20: '18' }, { sujetId: 's', note20: 9 }, { sujetId: 't', note20: 19 }];
  assert.equal(meilleureNote(h, 's'), 9);
  assert.equal(meilleureNote(undefined, 's'), null);
  assert.equal(meilleureNote([], 's'), null);
});

test('ajouterEpreuve / fusionnerEpreuves : idempotence, ordre indifférent, pas de doublon', () => {
  const e = { id: 'a', fin: 5 };
  assert.deepEqual(ajouterEpreuve(ajouterEpreuve([], e), e), [e]);
  assert.deepEqual(ajouterEpreuve('pas une liste', e), [e]);
  const a = [{ id: 'x', fin: 1 }, { id: 'y', fin: 3 }];
  const b = [{ id: 'z', fin: 2 }];
  assert.deepEqual(fusionnerEpreuves(a, b), fusionnerEpreuves(b, a));
  const f = fusionnerEpreuves(a, b);
  assert.deepEqual(fusionnerEpreuves(f, f), f);
  // 40 + 40 entrées → 30 plus récentes.
  const l1 = Array.from({ length: 40 }, (_, i) => ({ id: `a${i}`, fin: 2 * i }));
  const l2 = Array.from({ length: 40 }, (_, i) => ({ id: `b${i}`, fin: 2 * i + 1 }));
  const g = fusionnerEpreuves(l1, l2);
  assert.equal(g.length, MAX_EPREUVES);
  assert.equal(g[0].id, 'b39');
  assert.equal(g[29].fin, 50);
  // Entrées sans id ignorées.
  assert.deepEqual(fusionnerEpreuves([{ fin: 3 }, null], []), []);
});
