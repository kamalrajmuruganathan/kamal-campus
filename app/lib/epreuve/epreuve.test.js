import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  pointsDe, lireDuree, dureeEpreuve, separerSujet, sectionsNotees, questionsDe, baremeIndicatif,
  cleTitre, memeCle, analyserSujet, calculerNote, arrondiDemi, nombreFr,
  demarrerChrono, mettreEnPause, reprendre, tempsEcoule, tempsRestant, enPause, formaterChrono, formaterDuree,
  phaseChrono, xpEpreuve, meilleureNote, ajouterEpreuve, fusionnerEpreuves, MAX_EPREUVES,
} from './index.js';

const SUJET = `---
id: test
titre: "Test"
---

# Brevet — Épreuve test

**Durée : 2 h 00** — **Barème indicatif : 20 points**

## Exercice 1 — Calculs (8 points)

1. Calculer $2 + 3$. (3 pts)
2. Calculer $4 \\times 5$. (5 pts)

## Exercice 2 — Problème (12 points)

### Partie A

1. Question A1.

### Partie B

2. Question B2.

\`\`\`python
# Corrigé : ce commentaire n'est pas un titre
print(1)
\`\`\`

---

# Corrigé

## Exercice 1 — Calculs

1. $5$.
2. $20$.

## Exercice 2 — Problème

### Partie A

1. Réponse A1.

### Partie B

2. Réponse B2.
`;

test('pointsDe : différentes écritures', () => {
  assert.equal(pointsDe('Exercice 1 (15 points)'), 15);
  assert.equal(pointsDe('Rédaction (40 pts) — au choix'), 40);
  assert.equal(pointsDe('*(barème : 4 pts)*'), 4);
  assert.equal(pointsDe('Partie B — Câble (RDM, 9 points)'), 9);
  assert.equal(pointsDe('**Question 1.1 (2 points).**'), 2);
  assert.equal(pointsDe('Question (1,5 pt)'), 1.5);
  assert.equal(pointsDe('Exercice 1 — Suites'), null);
  assert.equal(pointsDe('durée (1 h 45 min)'), null);
});

test('lireDuree : formats rencontrés dans les sujets', () => {
  assert.equal(lireDuree('**Durée : 2 h 00** — Barème'), 120);
  assert.equal(lireDuree('**Durée : 3 h 30**'), 210);
  assert.equal(lireDuree('**Durée conseillée : 2 heures — Barème sur 20 points.**'), 120);
  assert.equal(lireDuree('**Durée : 1 heure — Barème sur 20 points.**'), 60);
  assert.equal(lireDuree('**Durée conseillée : 1 h — /20.**'), 60);
  assert.equal(lireDuree('**Durée : 4 h — /20.**'), 240);
  assert.equal(lireDuree('**Durée conseillée : 30 min**'), 30);
  assert.equal(lireDuree('**Durée : 1 h 00** (30 min par discipline)'), 60);
  assert.equal(lireDuree('Pas de durée ici'), null);
});

test('dureeEpreuve : sujet, sinon durée officielle certaine, sinon null', () => {
  assert.deepEqual(dureeEpreuve({ contenu: SUJET }), { minutes: 120, source: 'sujet' });
  assert.deepEqual(dureeEpreuve({ contenu: '# Sujet\n\ntexte', examen: 'Bac', matiere: 'philosophie' }), { minutes: 240, source: 'officielle' });
  assert.deepEqual(dureeEpreuve({ contenu: '# Sujet\n\ntexte', examen: 'Brevet (DNB)', matiere: 'mathematiques' }), { minutes: 120, source: 'officielle' });
  assert.deepEqual(dureeEpreuve({ contenu: '# Sujet', examen: 'Bac', matiere: 'anglais' }), { minutes: null, source: null });
});

test('separerSujet : coupe au titre « Corrigé », ignore les # des blocs de code', () => {
  const s = separerSujet(SUJET);
  assert.ok(s.enonce.includes('# Corrigé : ce commentaire'));
  assert.ok(!s.enonce.includes('Réponse A1'));
  assert.ok(s.corrige.startsWith('## Exercice 1'));
  assert.ok(!/---\s*$/.test(s.enonce));
  assert.equal(separerSujet('# Sujet\n\nSans corrigé.').corrige, null);
});

test('sectionsNotees et questionsDe', () => {
  const { enonce } = separerSujet(SUJET);
  const secs = sectionsNotees(enonce);
  assert.deepEqual(secs.map((s) => s.points), [8, 12]);
  assert.deepEqual(questionsDe(secs[0].corps).map((q) => [q.cle, q.points]), [['1', 3], ['2', 5]]);
  assert.deepEqual(questionsDe(secs[1].corps).map((q) => q.cle), ['A.1', 'B.2']);
  assert.deepEqual(questionsDe('**Question 1.1 (2 points).** Texte\n\n**1.2 (3 points).** Texte').map((q) => [q.cle, q.points]), [['1.1', 2], ['1.2', 3]]);
  assert.deepEqual(questionsDe('- **1.** Réponse\n- **2.** Réponse').map((q) => q.cle), ['1', '2']);
});

test('cleTitre et memeCle', () => {
  assert.equal(cleTitre('Exercice 2 — Soldes (18 points)'), 'exercice 2');
  assert.equal(cleTitre('Partie A'), 'partie a');
  assert.equal(cleTitre('**II. Pourtant…**'), 'r ii');
  assert.ok(memeCle(cleTitre('Compréhension'), cleTitre('Comprehension (10 points)')));
  assert.ok(memeCle(cleTitre('Réécriture (10 pts)'), cleTitre('Réécriture attendue')));
  assert.ok(!memeCle('exercice 1', 'exercice 12'));
});

test('baremeIndicatif : critères de dissertation', () => {
  const c = baremeIndicatif('**Barème indicatif.** Introduction et problématique : 4 pts ; arguments et exemples datés : 10 pts ; structure et conclusion : 4 pts ; expression : 2 pts.');
  assert.deepEqual(c.map((x) => x.points), [4, 10, 4, 2]);
  assert.equal(c[1].titre, 'Arguments et exemples datés');
  assert.equal(baremeIndicatif('Aucun barème'), null);
});

test('analyserSujet : barème du sujet, puis répartition estimée dans un exercice', () => {
  const a = analyserSujet({ contenu: SUJET });
  assert.equal(a.aCorrige, true);
  assert.equal(a.duree.minutes, 120);
  assert.equal(a.parties.length, 2);
  assert.deepEqual(a.parties[0].questions.map((q) => q.points), [3, 5]);
  assert.ok(a.parties[0].questions[1].corrige.includes('$20$'));
  // Exercice 2 : pas de points par question → 12 / 2 = 6 chacune, barème « partiel ».
  assert.deepEqual(a.parties[1].questions.map((q) => q.points), [6, 6]);
  assert.equal(a.parties[1].repartitionEstimee, true);
  assert.equal(a.bareme, 'partiel');
  assert.equal(a.total, 20);
  assert.equal(a.criteres.length, 4);
});

test('analyserSujet : sans corrigé → pas d\'auto-évaluation', () => {
  const a = analyserSujet({ contenu: '# Sujet\n\n**Durée : 1 h**\n\n## Exercice 1 (20 points)\n\n1. Question.' });
  assert.equal(a.aCorrige, false);
  assert.equal(a.criteres.length, 0);
});

test('analyserSujet : sans points → estimation à parts égales', () => {
  const md = '# Philo\n\n**Durée : 4 h — /20.**\n\n## Sujet\n\nLa liberté est-elle une illusion ?\n\n## Corrigé indicatif\n\n**Problématique.** …\n\n**I. Première partie.**\n- a\n\n**II. Deuxième partie.**\n- b\n\n**Conclusion.** …';
  const a = analyserSujet({ contenu: md });
  assert.equal(a.bareme, 'estime');
  assert.equal(a.parties.length, 4);
  assert.ok(a.parties.every((p) => p.points === 5));
});

test('calculerNote : réussi = tout, à moitié = la moitié, raté = 0, arrondi au demi-point', () => {
  const crit = [{ id: 'a', points: 15 }, { id: 'b', points: 18 }, { id: 'c', points: 67 }];
  const n = calculerNote(crit, { a: 'reussi', b: 'moitie', c: 'rate' });
  assert.equal(n.points, 24);
  assert.equal(n.total, 100);
  assert.equal(n.note20, 5); // 24/100 × 20 = 4,8 → 5
  assert.equal(n.complet, true);
  const p = calculerNote(crit, { a: 'reussi' });
  assert.equal(p.complet, false);
  assert.equal(p.manquants, 2);
  assert.equal(calculerNote([], {}).note20, 0);
  assert.equal(arrondiDemi(12.74), 12.5);
  assert.equal(arrondiDemi(12.76), 13);
  assert.equal(nombreFr(12.5), '12,5');
  assert.equal(nombreFr(14), '14');
});

test('chronomètre : pause et reprise calculées à partir de l\'horloge', () => {
  let c = demarrerChrono(1000);
  assert.equal(tempsEcoule(c, 61000), 60000);
  c = mettreEnPause(c, 61000);
  assert.ok(enPause(c));
  assert.equal(tempsEcoule(c, 999999), 60000); // le temps ne court pas pendant la pause
  assert.equal(mettreEnPause(c, 2e6), c);
  c = reprendre(c, 100000);
  assert.equal(tempsEcoule(c, 130000), 90000);
  assert.equal(tempsRestant(c, 120000, 130000), 30000);
  assert.equal(tempsRestant(c, 120000, 999999), 0);
});

test('formats et phases du chrono', () => {
  assert.equal(formaterChrono(2 * 3600 * 1000), '2:00:00');
  assert.equal(formaterChrono(65 * 1000), '1:05');
  assert.equal(formaterChrono(-5), '0:00');
  assert.equal(formaterDuree(120), '2 h');
  assert.equal(formaterDuree(210), '3 h 30');
  assert.equal(formaterDuree(30), '30 min');
  const d = 4 * 3600e3;
  assert.equal(phaseChrono(3 * 3600e3, d), 'normal');
  assert.equal(phaseChrono(20 * 60e3, d), 'bientot');
  assert.equal(phaseChrono(4 * 60e3, d), 'fin');
});

test('xpEpreuve : participation + note, puis seulement le progrès ; rien si fini trop tôt', () => {
  const d = 7200e3;
  assert.equal(xpEpreuve({ note20: 12.5, tempsMs: d, dureeMs: d }), 10 + 13);
  assert.equal(xpEpreuve({ note20: 15, meilleureAvant: 12, tempsMs: d, dureeMs: d }), 3);
  assert.equal(xpEpreuve({ note20: 10, meilleureAvant: 12, tempsMs: d, dureeMs: d }), 0);
  assert.equal(xpEpreuve({ note20: 20, tempsMs: d / 5, dureeMs: d }), 0);
});

test('historique : meilleure note, ajout (30 max), fusion par id', () => {
  let h = [];
  for (let i = 0; i < 35; i++) h = ajouterEpreuve(h, { id: `x${i}`, sujetId: i % 2 ? 's1' : 's2', note20: i % 20, fin: i });
  assert.equal(h.length, MAX_EPREUVES);
  assert.equal(h[0].id, 'x34');
  assert.equal(meilleureNote(h, 's1'), 19);
  assert.equal(meilleureNote(h, 'inconnu'), null);
  const a = [{ id: 'a', fin: 3 }, { id: 'b', fin: 1 }];
  const b = [{ id: 'b', fin: 1 }, { id: 'c', fin: 2 }];
  assert.deepEqual(fusionnerEpreuves(a, b).map((e) => e.id), ['a', 'c', 'b']);
  assert.deepEqual(fusionnerEpreuves(undefined, null), []);
});

test('les 195 sujets du dépôt : durée lue, corrigé trouvé, barème cohérent', () => {
  const dir = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'sujets');
  const fichiers = readdirSync(dir).filter((f) => f.endsWith('.md'));
  assert.ok(fichiers.length >= 150);
  for (const f of fichiers) {
    const a = analyserSujet({ contenu: readFileSync(join(dir, f), 'utf8') });
    assert.ok(a.duree.minutes >= 30 && a.duree.minutes <= 240, `${f} : durée ${a.duree.minutes}`);
    assert.ok(a.aCorrige, `${f} : corrigé`);
    assert.ok(a.criteres.length >= 1, `${f} : critères`);
    assert.ok(a.total > 0, `${f} : total`);
    assert.ok(a.criteres.every((c) => c.points > 0), `${f} : points > 0`);
    for (const p of a.parties) {
      if (p.questions) {
        const s = p.questions.reduce((x, q) => x + q.points, 0);
        assert.ok(Math.abs(s - p.points) < 1e-6, `${f} : ${p.titre} somme des questions`);
      }
    }
  }
});

test('fusion des profils : profil.epreuves réunies par id', async () => {
  const { fusionnerProfils } = await import('../../src/cloud/fusion.js');
  const f = fusionnerProfils(
    { xp: 10, epreuves: [{ id: 'a', fin: 1 }] },
    { xp: 5, epreuves: [{ id: 'b', fin: 2 }, { id: 'a', fin: 1 }] },
  );
  assert.deepEqual(f.epreuves.map((e) => e.id), ['b', 'a']);
});

test('sous-titre noté (« ### Réécriture (6 pts) ») : une question de la partie, corrigé trouvé par titre', () => {
  const md = '# DNB\n\n**Durée : 3 h 00**\n\n## Grammaire (18 pts)\n\n9. Q (6 pts)\n10. Q (6 pts)\n\n### Réécriture (6 pts)\n\nRéécrivez.\n\n## Corrigé indicatif\n\n- **9.** a\n- **10.** b\n- **Réécriture attendue :** c';
  const a = analyserSujet({ contenu: md });
  assert.deepEqual(a.parties[0].questions.map((q) => [q.libelle, q.points]), [['Question 9', 6], ['Question 10', 6], ['Réécriture', 6]]);
  assert.ok(a.parties[0].questions[2].corrige.includes('c'));
  assert.equal(a.bareme, 'sujet');
});
