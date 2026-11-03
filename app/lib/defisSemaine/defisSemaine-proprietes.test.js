import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  idsDefisDeLaSemaine, defisDeLaSemaine, appliquerBonusSemaine, bonusAVerser, compterSemaine, fusionnerSemaines,
  joursRestants, CATALOGUE, NB_DEFIS, semaineCourante,
} from './index.js';

const ajouter = (j, n) => { const d = new Date(`${j}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };

test('tirage sur 10 ans : 3 défis de familles différentes, identiques du lundi au dimanche', () => {
  const vus = new Map();
  let lundi = '2026-01-05';
  for (let s = 0; s < 520; s += 1) {
    const ids = idsDefisDeLaSemaine(lundi);
    assert.equal(ids.length, NB_DEFIS);
    const familles = ids.map((id) => CATALOGUE.find((d) => d.id === id).famille);
    assert.equal(new Set(familles).size, NB_DEFIS);
    for (let k = 1; k < 7; k += 1) assert.deepEqual(idsDefisDeLaSemaine(ajouter(lundi, k)), ids);
    for (const id of ids) vus.set(id, (vus.get(id) || 0) + 1);
    lundi = ajouter(lundi, 7);
  }
  // Chaque défi du catalogue sort au moins une fois en 10 ans.
  for (const d of CATALOGUE) assert.ok(vus.get(d.id) > 10, `défi ${d.id} trop rare (${vus.get(d.id) || 0})`);
});

test('textes des défis : français, espace insécable entre le nombre et le mot, pluriels', () => {
  for (const niveau of ['cp', '6e', 'terminale', undefined]) {
    let lundi = '2026-01-05';
    for (let s = 0; s < 60; s += 1) {
      for (const d of defisDeLaSemaine({ niveauParDefaut: niveau }, lundi)) {
        assert.ok(/^[A-ZÉ]/.test(d.texte), d.texte);
        assert.ok(!/ {2}|\d [^\d]/.test(d.texte), `espace ordinaire à côté d'un nombre : « ${d.texte} »`);
        if (d.cible > 1) assert.ok(!/\b1 /.test(d.texte));
        assert.ok(!/\b1 \S+s\b/.test(d.texte), `pluriel après 1 : ${d.texte}`);
      }
      lundi = ajouter(lundi, 7);
    }
  }
  const tous = CATALOGUE.map((d) => [d.texte(1), d.texte(2)]);
  assert.deepEqual(tous.find(([u]) => u.startsWith('Réussis un QCM')), ['Réussis un QCM sans aucune erreur', 'Réussis 2 QCM sans aucune erreur']);
  assert.ok(tous.some(([u]) => u === 'Fais une dictée'));
  assert.ok(tous.some(([u]) => u === 'Maîtrise une erreur de ton carnet'));
});

test('cibles : primaire (CP → CM2) plus basses ou égales, niveau inconnu = secondaire', () => {
  for (const d of CATALOGUE) assert.ok(d.cible.primaire <= d.cible.secondaire && d.cible.primaire >= 1, d.id);
  const jour = '2026-10-21';
  const prim = defisDeLaSemaine({ niveauParDefaut: 'cm2' }, jour);
  const sec = defisDeLaSemaine({ niveauParDefaut: null }, jour);
  prim.forEach((d, i) => assert.equal(d.cible, CATALOGUE.find((c) => c.id === d.id).cible.primaire, sec[i].id));
  sec.forEach((d) => assert.equal(d.cible, CATALOGUE.find((c) => c.id === d.id).cible.secondaire));
});

test('bonus : versé une seule fois par défi, même si l’on rappelle la fonction ou si l’on change de jour', () => {
  const jour = '2026-10-21';
  const plein = { exos: 99, qcm: 99, qcm80: 99, sansFaute: 99, dictees: 99, cartes: 99, enigmes: 99 };
  const p0 = {
    xp: 10, semaine: { debut: '2026-10-19', compteurs: plein, jours: ['2026-10-19', '2026-10-20', '2026-10-21', '2026-10-22'], recompenses: [] },
    ligue: { semaine: '2026-10-19', xpSemaine: 500 }, carnetMaitriseesJours: { '2026-10-20': 5 },
  };
  const bonus = defisDeLaSemaine(p0, jour).reduce((t, d) => t + d.bonus, 0);
  const p1 = appliquerBonusSemaine(p0, jour);
  assert.equal(p1.xp, 10 + bonus);
  assert.equal(p1.defisSemaineReussis, 3);
  assert.equal(appliquerBonusSemaine(p1, jour), p1);
  assert.equal(appliquerBonusSemaine(p1, '2026-10-25'), p1);
  // Lundi suivant : nouvelle semaine, compteurs à zéro → rien à verser.
  assert.equal(bonusAVerser(p1, '2026-10-26'), null);
  assert.equal(p0.semaine.recompenses.length, 0, 'le profil d’origine n’est pas modifié');
});

test('défis « carnet » et « xp » : seuls les jours de la semaine en cours comptent', () => {
  const p = { carnetMaitriseesJours: { '2026-10-18': 9, '2026-10-19': 1, '2026-10-21': 1, '2026-10-22': 9 }, ligue: { semaine: '2026-10-12', xpSemaine: 999 } };
  // On force les défis tirés en regardant directement la valeur via un profil où seuls ces défis comptent.
  let lundi = '2026-01-05';
  let carnetVu = false; let xpVu = false;
  for (let s = 0; s < 200 && !(carnetVu && xpVu); s += 1) {
    const ids = idsDefisDeLaSemaine(lundi);
    const mer = ajouter(lundi, 2);
    const decale = (j) => ajouter(lundi, (Date.parse(`${j}T00:00:00Z`) - Date.parse('2026-10-19T00:00:00Z')) / 86400000);
    const q = { carnetMaitriseesJours: Object.fromEntries(Object.entries(p.carnetMaitriseesJours).map(([j, v]) => [decale(j), v])), ligue: { semaine: ajouter(lundi, -7), xpSemaine: 999 } };
    for (const d of defisDeLaSemaine(q, mer)) {
      if (d.id === 'carnet') { carnetVu = true; assert.equal(d.valeur, 2); } // lundi + mercredi (pas la veille, pas demain)
      if (d.id === 'xp') { xpVu = true; assert.equal(d.valeur, 0); } // ligue d'une autre semaine
    }
    lundi = ajouter(lundi, 7);
  }
  assert.ok(carnetVu && xpVu);
});

test('compteur : incréments nuls, négatifs ou texte ignorés ; jour actif noté une fois', () => {
  let s = compterSemaine(null, '2026-10-21', { exos: 0, qcm: -2, cartes: 'abc' });
  assert.deepEqual(s, { debut: '2026-10-19', compteurs: {}, jours: [], recompenses: [] });
  s = compterSemaine(s, '2026-10-21', { exos: 2, cartes: '3' });
  s = compterSemaine(s, '2026-10-21', { exos: 1 });
  assert.deepEqual(s.compteurs, { exos: 3, cartes: 3 });
  assert.deepEqual(s.jours, ['2026-10-21']);
  assert.deepEqual(semaineCourante({ debut: '2026-10-19', compteurs: null, jours: 'x' }, '2026-10-20'), { debut: '2026-10-19', compteurs: {}, jours: [], recompenses: [] });
});

test('fusion des semaines : commutative, idempotente, associative', () => {
  const S = (debut, exos, jours, rec) => ({ debut, compteurs: { exos }, jours, recompenses: rec });
  const a = S('2026-10-19', 4, ['2026-10-19'], ['exos']);
  const b = S('2026-10-19', 7, ['2026-10-21'], []);
  const c = S('2026-10-12', 99, ['2026-10-12'], ['qcm']);
  const can = (x) => x && { ...x, jours: [...x.jours].sort(), recompenses: [...x.recompenses].sort() };
  assert.deepEqual(can(fusionnerSemaines(a, b)), can(fusionnerSemaines(b, a)));
  assert.deepEqual(can(fusionnerSemaines(a, a)), can(a));
  assert.deepEqual(can(fusionnerSemaines(fusionnerSemaines(a, b), c)), can(fusionnerSemaines(a, fusionnerSemaines(b, c))));
  assert.deepEqual(fusionnerSemaines(a, b).compteurs, { exos: 7 });
  assert.equal(fusionnerSemaines(c, a).debut, '2026-10-19');
  assert.equal(fusionnerSemaines(null, undefined) ?? null, null);
});

test('jours restants : 7 le lundi, 1 le dimanche', () => {
  const attendus = [7, 6, 5, 4, 3, 2, 1];
  attendus.forEach((n, k) => assert.equal(joursRestants(ajouter('2026-10-26', k)), n));
  assert.equal(joursRestants('2027-01-03'), 1); // dimanche, semaine à cheval sur deux années
});
