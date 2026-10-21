import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  niveauPrecedent, datesSeances, estSeanceBilan, repartir, echantillonner, choisirChapitres,
  creerPlanVacances, noterActiviteVacances, basculerSeance, avancement, etatDuJour,
  libelleSeance, fusionnerVacances, abandonner, planActif, EXOS_PAR_SEANCE,
} from './index.js';

// Une classe fictive : 12 chapitres de maths, 10 de français, 8 d'anglais, 6 d'arts.
function chapitres() {
  const l = [];
  const ajout = (parcours, matiere, n, extra = {}) => {
    for (let i = 1; i <= n; i += 1) l.push({ id: `${parcours}-${i}`, titre: `${parcours} ${i}`, parcours, matiere, qcm: true, exercices: true, ...extra });
  };
  ajout('maths', 'mathematiques', 12);
  ajout('francais', 'francais', 10);
  ajout('anglais', 'anglais', 8);
  ajout('arts', 'arts', 6);
  return l;
}

const DEBUT = '2026-07-06'; // un lundi

test('niveau précédent', () => {
  assert.equal(niveauPrecedent('quatrieme'), 'cinquieme');
  assert.equal(niveauPrecedent('sixieme'), 'cm2');
  assert.equal(niveauPrecedent('seconde'), 'troisieme');
  assert.equal(niveauPrecedent('terminale-techno'), 'premiere-techno');
  assert.equal(niveauPrecedent('cp'), null);
  assert.equal(niveauPrecedent('inconnu'), null);
});

test('dates : 3, 5 ou 7 jours par semaine', () => {
  const d3 = datesSeances(DEBUT, 2, 3);
  assert.deepEqual(d3.map((d) => d.date), ['2026-07-06', '2026-07-08', '2026-07-10', '2026-07-13', '2026-07-15', '2026-07-17']);
  assert.equal(datesSeances(DEBUT, 4, 5).length, 20);
  // 5 jours : du lundi au vendredi, même en commençant un mercredi ; une « semaine » = 5 séances.
  const d5 = datesSeances('2026-07-08', 2, 5);
  assert.deepEqual(d5.map((d) => d.date), ['2026-07-08', '2026-07-09', '2026-07-10', '2026-07-13', '2026-07-14',
    '2026-07-15', '2026-07-16', '2026-07-17', '2026-07-20', '2026-07-21']);
  assert.deepEqual(d5.map((d) => d.semaine), [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
  // Début un samedi, 3 jours : lundi, mercredi, vendredi.
  assert.deepEqual(datesSeances('2026-07-11', 2, 3).slice(0, 3).map((d) => d.date), ['2026-07-13', '2026-07-15', '2026-07-17']);
  const d7 = datesSeances('2026-07-30', 2, 7);
  assert.equal(d7.length, 14);
  assert.equal(d7[2].date, '2026-08-01'); // passage de mois
  assert.throws(() => datesSeances(DEBUT, 2, 4));
});

test('bilans : chaque semaine (5 ou 7 j), une semaine sur deux (3 j), et toujours à la fin', () => {
  const nb = (sem, par) => datesSeances(DEBUT, sem, par).filter((d) => estSeanceBilan(d, sem, par)).length;
  assert.equal(nb(4, 5), 4);
  assert.equal(nb(6, 7), 6);
  assert.equal(nb(4, 3), 2);
  assert.equal(nb(2, 3), 1);
  assert.equal(nb(6, 3), 3);
});

test('répartition au prorata des poids, plafonnée au nombre de chapitres', () => {
  const r = repartir(10, [{ cle: 'a', poids: 3, max: 20 }, { cle: 'b', poids: 1, max: 20 }]);
  assert.deepEqual(r, { a: 8, b: 2 }); // 7,5 / 2,5 → plus fort reste à égalité : le plus grand poids
  const r2 = repartir(10, [{ cle: 'a', poids: 3, max: 2 }, { cle: 'b', poids: 1, max: 20 }]);
  assert.deepEqual(r2, { a: 2, b: 8 });
  const r3 = repartir(50, [{ cle: 'a', poids: 3, max: 2 }, { cle: 'b', poids: 1, max: 3 }]);
  assert.deepEqual(r3, { a: 2, b: 3 });
  const r4 = repartir(1, [{ cle: 'a', poids: 1, max: 5 }, { cle: 'b', poids: 3, max: 5 }]);
  assert.deepEqual(r4, { a: 0, b: 1 });
});

test('échantillonnage régulier sur l’année, ordre conservé', () => {
  const l = Array.from({ length: 10 }, (_, i) => i);
  assert.deepEqual(echantillonner(l, 5), [1, 3, 5, 7, 9]);
  assert.deepEqual(echantillonner(l, 2), [2, 7]);
  assert.deepEqual(echantillonner(l, 20), l);
  assert.deepEqual(echantillonner(l, 0), []);
});

test('choix : matières principales privilégiées, ordre de l’année, matières alternées', () => {
  const c = choisirChapitres(chapitres(), 16);
  assert.equal(c.length, 16);
  const par = (m) => c.filter((x) => x.chapitre.matiere === m).length;
  assert.ok(par('mathematiques') >= par('anglais'));
  assert.ok(par('francais') >= par('anglais'));
  assert.ok(par('anglais') > par('arts'));
  assert.ok(par('arts') >= 1);
  // Dans chaque matière, l'ordre de l'année est respecté.
  for (const m of ['maths', 'francais', 'anglais', 'arts']) {
    const nums = c.filter((x) => x.chapitre.parcours === m).map((x) => Number(x.chapitre.id.split('-')[1]));
    assert.deepEqual(nums, [...nums].sort((a, b) => a - b));
  }
  // Jamais trois fois de suite la même matière.
  for (let i = 2; i < c.length; i += 1) {
    const ms = [c[i - 2], c[i - 1], c[i]].map((x) => x.chapitre.matiere);
    assert.ok(!(ms[0] === ms[1] && ms[1] === ms[2]), `3 fois ${ms[0]} à partir de ${i - 2}`);
  }
  assert.ok(c.every((x) => !x.revision));
  // Pas de chapitre en double.
  assert.equal(new Set(c.map((x) => x.chapitre.id)).size, 16);
});

test('activités : maths en alternance QCM / exercices ; sans QCM → exercices ; sans rien → fiche', () => {
  const c = choisirChapitres(chapitres().filter((x) => x.matiere === 'mathematiques'), 4);
  assert.deepEqual(c.map((x) => x.activite), ['qcm', 'exercices', 'qcm', 'exercices']);
  const f = choisirChapitres(chapitres().filter((x) => x.matiere === 'francais'), 3);
  assert.ok(f.every((x) => x.activite === 'qcm'));
  const sansQcm = choisirChapitres([{ id: 'x', parcours: 'p', matiere: 'francais', qcm: false, exercices: true }], 1);
  assert.equal(sansQcm[0].activite, 'exercices');
  const rien = choisirChapitres([{ id: 'x', parcours: 'p', matiere: 'arts', qcm: false, exercices: false }], 1);
  assert.equal(rien[0].activite, 'fiche');
});

test('pas assez de chapitres : on revient sur les premiers, en révision', () => {
  const c = choisirChapitres(chapitres().slice(0, 3), 5);
  assert.equal(c.length, 5);
  assert.equal(c.filter((x) => x.revision).length, 2);
  assert.equal(c[3].chapitre.id, c[0].chapitre.id);
});

test('plan : séances datées, bilans avec les chapitres depuis le précédent, grand bilan final', () => {
  const p = creerPlanVacances({ niveau: 'cinquieme', semaines: 2, joursParSemaine: 5, chapitres: chapitres(), debut: DEBUT, id: 'v1' });
  assert.equal(p.seances.length, 10);
  const bilans = p.seances.filter((s) => s.type === 'bilan');
  assert.equal(bilans.length, 2);
  assert.equal(bilans[0].date, '2026-07-10');
  assert.equal(bilans[0].chapitres.length, 4);
  assert.equal(bilans[0].final, false);
  assert.equal(bilans[1].final, true);
  assert.equal(bilans[1].chapitres.length, 8);
  assert.equal(bilans[0].titreBilan, 'Bilan de vacances n° 1');
  assert.ok(p.seances.every((s) => s.minutes >= 15 && s.minutes <= 20));
  assert.throws(() => creerPlanVacances({ semaines: 3, joursParSemaine: 5, chapitres: chapitres(), debut: DEBUT }));
  assert.throws(() => creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: [], debut: DEBUT }));
});

test('coché automatiquement par le QCM du chapitre (une seule séance), et par le QCM bilan', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: chapitres(), debut: DEBUT, id: 'v1' });
  const s1 = p.seances[0];
  const p2 = noterActiviteVacances(p, { type: 'qcm', chapitreId: s1.chapitreId }, DEBUT);
  assert.equal(p2.faites[s1.id], true);
  assert.equal(avancement(p2).faites, 1);
  // Un QCM d'un chapitre absent du plan ne change rien (même objet).
  assert.equal(noterActiviteVacances(p2, { type: 'qcm', chapitreId: 'absent' }, DEBUT), p2);
  // Refaire le QCM ne coche rien de plus.
  assert.equal(noterActiviteVacances(p2, { type: 'qcm', chapitreId: s1.chapitreId }, DEBUT), p2);
  const bilan = p.seances.find((s) => s.type === 'bilan');
  const p3 = noterActiviteVacances(p2, { type: 'qcm', titre: bilan.titreBilan }, bilan.date);
  assert.equal(p3.faites[bilan.id], true);
  // Un QCM sans chapitre ni titre de bilan : rien.
  assert.equal(noterActiviteVacances(p3, { type: 'qcm', titre: 'Révision express' }, DEBUT), p3);
});

test('séance « exercices » : cochée au 3e exercice réussi', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 7, chapitres: chapitres(), debut: DEBUT, id: 'v1' });
  const s = p.seances.find((x) => x.activite === 'exercices');
  assert.ok(s);
  let q = p;
  for (let i = 1; i < EXOS_PAR_SEANCE; i += 1) {
    q = noterActiviteVacances(q, { type: 'exo', chapitreId: s.chapitreId }, s.date);
    assert.ok(!q.faites[s.id]);
  }
  q = noterActiviteVacances(q, { type: 'exo', chapitreId: s.chapitreId }, s.date);
  assert.equal(q.faites[s.id], true);
  // Le QCM du chapitre coche aussi une séance « exercices ».
  const r = noterActiviteVacances(p, { type: 'qcm', chapitreId: s.chapitreId }, s.date);
  assert.equal(r.faites[s.id], true);
});

test('cocher à la main, état du jour, retard', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: chapitres(), debut: DEBUT, id: 'v1' });
  const e0 = etatDuJour(p, '2026-07-05');
  assert.equal(e0.pasCommence, true);
  assert.equal(e0.aFaire, null);
  assert.equal(e0.prochaine.id, 's1');
  const e = etatDuJour(p, '2026-07-08');
  assert.equal(e.retard, 2);
  assert.equal(e.aFaire.id, 's3'); // la séance du jour d'abord
  const q = basculerSeance(basculerSeance(basculerSeance(p, 's1'), 's2'), 's3');
  const e2 = etatDuJour(q, '2026-07-08');
  assert.equal(e2.retard, 0);
  assert.equal(e2.duJourFaite, true);
  assert.equal(e2.aFaire, null);
  assert.equal(basculerSeance(q, 's1').faites.s1, undefined);
  // Week-end (rythme 5 j) : pas de séance ce jour-là.
  assert.equal(etatDuJour(q, '2026-07-11').duJour, null);
});

test('libellés en bon français', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 7, chapitres: chapitres(), debut: DEBUT, id: 'v1' });
  for (const s of p.seances) {
    const l = libelleSeance(s);
    assert.ok(l.length > 10);
    assert.ok(!/ {2}/.test(l));
    assert.ok(!/\bde «/.test(l) || /de « /.test(l));
  }
  assert.equal(libelleSeance({ type: 'chapitre', activite: 'qcm', titre: 'Les fractions' }), 'Lis la fiche « Les fractions », puis fais son QCM');
});

test('fusion entre appareils et abandon', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: chapitres(), debut: DEBUT, id: 'v1' });
  const a = basculerSeance(p, 's1');
  const b = noterActiviteVacances(basculerSeance(p, 's2'), { type: 'exo', chapitreId: p.seances.find((s) => s.activite === 'exercices')?.chapitreId ?? 'x' }, DEBUT);
  const f = fusionnerVacances(a, b);
  assert.equal(f.faites.s1, true);
  assert.equal(f.faites.s2, true);
  // Plans différents : le plus récent gagne.
  const nouveau = { ...p, id: 'v2', creeLe: '2026-07-20' };
  assert.equal(fusionnerVacances(a, nouveau), nouveau);
  assert.equal(fusionnerVacances(nouveau, a), nouveau);
  // Abandon : se propage même si l'autre appareil a coché des séances.
  const ab = abandonner(a);
  assert.equal(planActif(ab), null);
  assert.equal(fusionnerVacances(ab, b).abandonne, true);
  assert.equal(fusionnerVacances(b, ab).abandonne, true);
  // Un nouveau plan créé le même jour après l'abandon gagne (identifiant croissant).
  const ab2 = abandonner({ ...p, id: 'vac-a' });
  const neuf = { ...p, id: 'vac-b' };
  assert.equal(fusionnerVacances(ab2, neuf), neuf);
  assert.equal(fusionnerVacances(null, a), a);
  assert.equal(fusionnerVacances(a, undefined), a);
});
