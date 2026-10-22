import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  idsDefisDeLaSemaine, compterSemaine, semaineCourante, fusionnerSemaines, defisDeLaSemaine,
  bonusAVerser, appliquerBonusSemaine, nombreReussis, joursRestants, CATALOGUE, groupeNiveau,
} from './index.js';
import { fusionnerProfils } from '../../src/cloud/fusion.js';

const LUNDI = '2026-10-19';
const MERCREDI = '2026-10-21';
const LUNDI_SUIVANT = '2026-10-26';

test('tirage : 3 défis, déterministe sur la semaine, familles différentes', () => {
  const a = idsDefisDeLaSemaine(LUNDI);
  assert.equal(a.length, 3);
  assert.deepEqual(idsDefisDeLaSemaine(MERCREDI), a);
  assert.deepEqual(idsDefisDeLaSemaine('2026-10-25'), a); // dimanche : même semaine
  const familles = a.map((id) => CATALOGUE.find((d) => d.id === id).famille);
  assert.equal(new Set(familles).size, 3);
});

test('tirage : les défis changent d’une semaine à l’autre (sur plusieurs semaines)', () => {
  const vus = new Set();
  let jour = '2026-01-05';
  for (let i = 0; i < 20; i += 1) {
    vus.add(idsDefisDeLaSemaine(jour).join(','));
    const d = new Date(`${jour}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + 7);
    jour = d.toISOString().slice(0, 10);
  }
  assert.ok(vus.size >= 10, `trop peu de variété : ${vus.size}`);
});

test('compteur : cumule dans la semaine, note les jours actifs, repart à zéro le lundi', () => {
  let s = compterSemaine(null, LUNDI, { exos: 2 });
  s = compterSemaine(s, MERCREDI, { exos: 3, qcm: 1, rien: 0 });
  s = compterSemaine(s, MERCREDI, { qcm: 1 });
  assert.equal(s.debut, LUNDI);
  assert.deepEqual(s.compteurs, { exos: 5, qcm: 2 });
  assert.deepEqual(s.jours, [LUNDI, MERCREDI]);
  const t = compterSemaine(s, LUNDI_SUIVANT, { qcm: 1 });
  assert.equal(t.debut, LUNDI_SUIVANT);
  assert.deepEqual(t.compteurs, { qcm: 1 });
  assert.deepEqual(t.jours, [LUNDI_SUIVANT]);
  // Une semaine passée est lue comme vide.
  assert.deepEqual(semaineCourante(s, LUNDI_SUIVANT).compteurs, {});
});

test('aucun incrément positif : le jour n’est pas compté comme actif', () => {
  const s = compterSemaine(null, LUNDI, { exos: 0 });
  assert.deepEqual(s.jours, []);
});

function profilAvecTout(jour, niveau = 'quatrieme') {
  // Assez d'activité pour réussir n'importe quel défi du catalogue.
  return {
    xp: 1000,
    niveauParDefaut: niveau,
    semaine: { debut: '2026-10-19', compteurs: { exos: 99, qcm: 99, qcm80: 99, sansFaute: 99, dictees: 99, cartes: 999, enigmes: 99 }, jours: ['2026-10-19', '2026-10-20', '2026-10-21', '2026-10-22'], recompenses: [] },
    ligue: { semaine: '2026-10-19', xpSemaine: 999 },
    carnetMaitriseesJours: { [jour]: 9 },
  };
}

test('avancement : borné à la cible, « fait » quand atteint, cibles adaptées au primaire', () => {
  const p = { niveauParDefaut: 'cm1', semaine: compterSemaine(null, MERCREDI, {}) };
  const d = defisDeLaSemaine(p, MERCREDI);
  assert.equal(d.length, 3);
  assert.equal(nombreReussis(d), 0);
  for (const x of d) {
    const cat = CATALOGUE.find((c) => c.id === x.id);
    assert.equal(x.cible, cat.cible.primaire);
    assert.ok(!/  /.test(x.texte));
  }
  const q = defisDeLaSemaine(profilAvecTout(MERCREDI), MERCREDI);
  assert.equal(nombreReussis(q), 3);
  for (const x of q) { assert.equal(x.valeur, x.cible); assert.equal(x.progres, 1); }
  assert.equal(groupeNiveau('terminale'), 'secondaire');
  assert.equal(groupeNiveau(null), 'secondaire');
});

test('XP de la ligue et carnet : seules les données de la semaine en cours comptent', () => {
  // On cherche des semaines où ces défis sont tirés.
  let trouveXp = false;
  let trouveCarnet = false;
  let jour = '2026-01-07';
  for (let i = 0; i < 60 && !(trouveXp && trouveCarnet); i += 1) {
    const ids = idsDefisDeLaSemaine(jour);
    if (ids.includes('xp') && !trouveXp) {
      const d = defisDeLaSemaine({ ligue: { semaine: '2000-01-03', xpSemaine: 900 } }, jour).find((x) => x.id === 'xp');
      assert.equal(d.valeur, 0); // XP d'une semaine passée
      trouveXp = true;
    }
    if (ids.includes('carnet') && !trouveCarnet) {
      const d = defisDeLaSemaine({ carnetMaitriseesJours: { [jour]: 1, '2000-01-01': 7 } }, jour).find((x) => x.id === 'carnet');
      assert.equal(d.valeur, 1);
      trouveCarnet = true;
    }
    const dd = new Date(`${jour}T00:00:00Z`);
    dd.setUTCDate(dd.getUTCDate() + 7);
    jour = dd.toISOString().slice(0, 10);
  }
  assert.ok(trouveXp && trouveCarnet);
});

test('bonus : versé une seule fois par défi', () => {
  const p = profilAvecTout(MERCREDI);
  const b = bonusAVerser(p, MERCREDI);
  assert.equal(b.defis.length, 3);
  const attendu = b.defis.reduce((s, d) => s + d.bonus, 0);
  const p2 = appliquerBonusSemaine(p, MERCREDI);
  assert.equal(p2.xp, 1000 + attendu);
  assert.equal(p2.defisSemaineReussis, 3);
  assert.equal(p2.semaine.recompenses.length, 3);
  // Deuxième passage : rien.
  assert.equal(bonusAVerser(p2, MERCREDI), null);
  assert.equal(appliquerBonusSemaine(p2, MERCREDI), p2);
  // Nouvelle activité la même semaine : toujours rien.
  const p3 = { ...p2, semaine: compterSemaine(p2.semaine, MERCREDI, { exos: 5 }) };
  assert.equal(bonusAVerser(p3, MERCREDI), null);
});

test('bonus : la semaine suivante, les récompenses repartent de zéro', () => {
  const p2 = appliquerBonusSemaine(profilAvecTout(MERCREDI), MERCREDI);
  const lundi = defisDeLaSemaine(p2, LUNDI_SUIVANT);
  assert.ok(lundi.every((d) => !d.recompense));
  assert.equal(bonusAVerser({ ...p2, ligue: {}, carnetMaitriseesJours: {} }, LUNDI_SUIVANT), null);
});

test('fusion : même semaine → max et unions ; semaines différentes → la plus récente', () => {
  const a = { debut: LUNDI, compteurs: { exos: 4, qcm: 1 }, jours: [LUNDI], recompenses: ['exos'] };
  const b = { debut: LUNDI, compteurs: { exos: 2, dictees: 1 }, jours: [MERCREDI], recompenses: ['dictees'] };
  const f = fusionnerSemaines(a, b);
  assert.deepEqual(f.compteurs, { exos: 4, qcm: 1, dictees: 1 });
  assert.deepEqual(f.jours, [LUNDI, MERCREDI]);
  assert.deepEqual(f.recompenses.sort(), ['dictees', 'exos']);
  const c = { debut: LUNDI_SUIVANT, compteurs: { qcm: 1 }, jours: [], recompenses: [] };
  assert.equal(fusionnerSemaines(a, c), c);
  assert.equal(fusionnerSemaines(c, a), c);
  assert.equal(fusionnerSemaines(null, a), a);
  assert.equal(fusionnerSemaines(a, undefined), a);
});

test('fusion de deux appareils : un bonus versé des deux côtés ne compte pas double', () => {
  const base = profilAvecTout(MERCREDI);
  const tel = appliquerBonusSemaine(base, MERCREDI);
  const pc = appliquerBonusSemaine(base, MERCREDI);
  const f = fusionnerProfils({ ...tel, jourCourant: MERCREDI }, { ...pc, jourCourant: MERCREDI });
  assert.equal(f.xp, tel.xp); // max, pas la somme
  assert.equal(f.defisSemaineReussis, 3);
  assert.equal(bonusAVerser(f, MERCREDI), null);
});

test('fusion : un défi récompensé sur un seul appareil reste récompensé', () => {
  const base = profilAvecTout(MERCREDI);
  const tel = appliquerBonusSemaine(base, MERCREDI);
  const f = fusionnerProfils(tel, { ...base, semaine: compterSemaine(base.semaine, MERCREDI, { exos: 1 }) });
  assert.equal(f.semaine.recompenses.length, 3);
  assert.equal(f.semaine.compteurs.exos, 100);
  assert.equal(bonusAVerser(f, MERCREDI), null);
});

test('jours restants avant lundi', () => {
  assert.equal(joursRestants(LUNDI), 7);
  assert.equal(joursRestants(MERCREDI), 5);
  assert.equal(joursRestants('2026-10-25'), 1);
});
