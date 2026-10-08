import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  planifier, ajouterJours, ecartJours, optionsDates, deMatiere, libelleTache, creerPlan,
  basculerFait, avancement, tacheDuJour, cibleTache, delaiEnLettres, dateEnLettres, TYPES,
} from './index.js';

const AUJ = '2026-10-07';
const dans = (n) => ajouterJours(AUJ, n);
const IDS = ['a', 'b', 'c', 'd'];
const toutesLesTaches = (plan) => plan.flatMap((j) => j.taches.map((t) => ({ ...t, date: j.date, role: j.role })));

// Vérifications communes à tous les plans.
function verifierPlan(plan, ids, n) {
  assert.equal(plan.length, n + 1, 'un jour par jour restant + le jour J');
  plan.forEach((j, i) => assert.equal(j.date, dans(i)));
  assert.equal(plan.at(-1).role, 'jourJ');
  assert.equal(plan.at(-2).role, 'veille');
  for (const j of plan) {
    assert.ok(j.taches.length <= 3, `${j.date} : au plus 3 tâches`);
    if (j.role !== 'jourJ') assert.ok(j.taches.length >= 1, `${j.date} : au moins 1 tâche`);
    for (const t of j.taches) {
      assert.ok(TYPES.includes(t.type));
      assert.ok(t.chapitres.length >= 1 && t.chapitres.every((id) => ids.includes(id)));
    }
  }
  const tIds = toutesLesTaches(plan).map((t) => t.id);
  assert.equal(new Set(tIds).size, tIds.length, 'identifiants de tâches uniques');
  // Chaque chapitre : fiche lue, QCM fait, avant la veille si possible.
  for (const id of ids) {
    assert.ok(toutesLesTaches(plan).some((t) => t.type === 'fiche' && t.chapitres.includes(id)), `fiche de ${id}`);
  }
}

test('dates : ajout, écart, libellés', () => {
  assert.equal(ajouterJours('2026-10-30', 3), '2026-11-02');
  assert.equal(ajouterJours('2026-12-31', 1), '2027-01-01');
  assert.equal(ecartJours('2026-10-07', '2026-10-21'), 14);
  assert.equal(ecartJours('2026-03-28', '2026-03-30'), 2); // changement d'heure sans effet
  assert.equal(dateEnLettres('2026-10-07'), 'mercredi 7 octobre');
  assert.equal(dateEnLettres('2026-11-01'), 'dimanche 1er novembre');
  assert.equal(delaiEnLettres(AUJ, AUJ), 'aujourd’hui');
  assert.equal(delaiEnLettres(AUJ, dans(1)), 'demain');
  assert.equal(delaiEnLettres(AUJ, dans(3)), 'dans 3 jours');
});

test('optionsDates : de demain à dans 14 jours', () => {
  const o = optionsDates(AUJ);
  assert.equal(o.length, 14);
  assert.equal(o[0].libelle, 'Demain');
  assert.equal(o[0].detail, 'jeudi 8');
  assert.equal(o[1].libelle, 'Vendredi 9');
  assert.equal(o[1].detail, 'dans 2 jours');
  assert.equal(o[13].libelle, 'Dans 14 jours');
  assert.equal(o[13].date, '2026-10-21');
});

test('nombre de chapitres : 1 à 4, sinon erreur', () => {
  assert.throws(() => planifier({ chapitres: [], aujourdHui: AUJ, dateControle: dans(5) }));
  assert.throws(() => planifier({ chapitres: ['a', 'b', 'c', 'd', 'e'], aujourdHui: AUJ, dateControle: dans(5) }));
});

test('contrôle passé → plan vide ; contrôle aujourd’hui → seulement le jour J', () => {
  assert.deepEqual(planifier({ chapitres: ['a'], aujourdHui: AUJ, dateControle: dans(-1) }), []);
  const p = planifier({ chapitres: ['a'], aujourdHui: AUJ, dateControle: AUJ });
  assert.equal(p.length, 1);
  assert.equal(p[0].role, 'jourJ');
  assert.equal(p[0].taches[0].type, 'flashcards');
  assert.ok(p[0].taches[0].minutes <= 10);
});

test('un seul jour restant : l’essentiel puis le QCM bilan, aujourd’hui', () => {
  for (const k of [1, 4]) {
    const p = planifier({ chapitres: IDS.slice(0, k), aujourdHui: AUJ, dateControle: dans(1) });
    verifierPlan(p, IDS.slice(0, k), 1);
    assert.equal(p[0].date, AUJ);
    assert.deepEqual(p[0].taches.map((t) => t.type), ['fiche', 'flashcards', 'bilan']);
    assert.equal(p[1].taches.length, 1);
  }
});

test('progression logique : fiche → cartes/QCM → exercices, exercices au plus tôt le lendemain', () => {
  for (let n = 3; n <= 14; n += 1) {
    for (let k = 1; k <= 4; k += 1) {
      const p = planifier({ chapitres: IDS.slice(0, k), aujourdHui: AUJ, dateControle: dans(n) });
      verifierPlan(p, IDS.slice(0, k), n);
      const toutes = toutesLesTaches(p);
      for (const id of IDS.slice(0, k)) {
        const premier = (type) => toutes.find((t) => t.type === type && t.chapitres.includes(id) && !t.revision);
        const fiche = premier('fiche');
        const qcm = premier('qcm');
        const ex = premier('exercices');
        assert.ok(fiche && qcm && ex, `n=${n} k=${k} ${id}`);
        assert.ok(fiche.date <= qcm.date && qcm.date <= ex.date);
        if (!fiche.express) assert.ok(fiche.date < ex.date, 'exercices après le jour de la fiche');
        // Les apprentissages se font avant la veille.
        for (const t of [fiche, qcm, ex]) assert.equal(t.role, 'travail');
      }
    }
  }
});

test('la veille : QCM bilan de tous les chapitres, aucune nouvelle notion', () => {
  for (let n = 2; n <= 14; n += 1) {
    const p = planifier({ chapitres: ['a', 'b', 'c'], aujourdHui: AUJ, dateControle: dans(n) });
    const veille = p.at(-2);
    assert.equal(veille.date, dans(n - 1));
    const bilan = veille.taches.find((t) => t.type === 'bilan');
    assert.deepEqual(bilan.chapitres, ['a', 'b', 'c']);
    assert.ok(veille.taches.every((t) => t.type === 'bilan' || t.revision), 'que de la révision');
    assert.ok(!veille.taches.some((t) => t.type === 'fiche'));
  }
});

test('le jour J : seulement relire ses cartes 10 minutes', () => {
  const p = planifier({ chapitres: ['a', 'b'], aujourdHui: AUJ, dateControle: dans(6) });
  const j = p.at(-1);
  assert.equal(j.date, dans(6));
  assert.equal(j.taches.length, 1);
  assert.equal(j.taches[0].type, 'flashcards');
  assert.equal(j.minutes, 10);
  assert.equal(libelleTache(j.taches[0]), 'Relis tes cartes 10 minutes, pas plus');
});

test('beaucoup de jours : pas plus de 30 minutes par jour, des révisions espacées', () => {
  for (let k = 1; k <= 4; k += 1) {
    const p = planifier({ chapitres: IDS.slice(0, k), aujourdHui: AUJ, dateControle: dans(14) });
    for (const j of p) assert.ok(j.minutes <= 30, `k=${k} ${j.date} : ${j.minutes} min`);
    const revisions = toutesLesTaches(p).filter((t) => t.revision && t.role === 'travail');
    assert.ok(revisions.length >= 3, 'des révisions espacées');
    // Chaque chapitre est révisé au moins une fois après son apprentissage.
    for (const id of IDS.slice(0, k)) assert.ok(revisions.some((t) => t.chapitres.includes(id)));
  }
});

test('chapitre sans cartes ni exercices : tâches adaptées', () => {
  const p = planifier({
    chapitres: [{ id: 'a', flashcards: false, exercices: false }],
    aujourdHui: AUJ,
    dateControle: dans(4),
  });
  const types = toutesLesTaches(p).map((t) => t.type);
  assert.ok(!types.includes('flashcards'));
  assert.ok(!types.includes('exercices'));
  assert.deepEqual(p.at(-1).taches, []); // jour J : rien
});

test('deMatiere : élision', () => {
  assert.equal(deMatiere('maths'), 'de maths');
  assert.equal(deMatiere('anglais'), 'd’anglais');
  assert.equal(deMatiere('histoire-géo'), 'd’histoire-géo');
  assert.equal(deMatiere('SVT'), 'de SVT');
  assert.equal(deMatiere('espagnol'), 'd’espagnol');
});

test('libellés en français', () => {
  const titres = { a: 'Les fractions', b: 'Les aires' };
  assert.equal(libelleTache({ type: 'fiche', chapitres: ['a'] }, titres), 'Lis la fiche « Les fractions »');
  assert.equal(libelleTache({ type: 'qcm', chapitres: ['a'] }, titres), 'Fais le QCM de « Les fractions »');
  assert.equal(libelleTache({ type: 'qcm', chapitres: ['a'], revision: true }, titres), 'Refais le QCM de « Les fractions »');
  assert.equal(libelleTache({ type: 'bilan', chapitres: ['a', 'b'] }, titres), 'Fais le QCM bilan : tous tes chapitres mélangés');
});

test('plan enregistré : création, cases cochées, avancement', () => {
  const plan = creerPlan({
    id: 'p1',
    niveau: 'cinquieme',
    matiere: 'mathematiques',
    chapitres: [{ id: 'a', titre: 'Les fractions' }, { id: 'b', titre: 'Les aires' }],
    aujourdHui: AUJ,
    dateControle: dans(3),
  });
  assert.equal(plan.matiereNom, 'maths');
  assert.deepEqual(plan.chapitres, ['a', 'b']);
  assert.equal(plan.titres.a, 'Les fractions');
  const premiere = plan.jours[0].taches[0];
  const coche = basculerFait(plan, premiere.id);
  assert.equal(avancement(coche).faites, 1);
  assert.equal(avancement(plan).faites, 0, 'plan d’origine inchangé');
  assert.equal(avancement(basculerFait(coche, premiere.id)).faites, 0);
});

test('tacheDuJour : prochaine tâche non faite du contrôle le plus proche', () => {
  const maths = creerPlan({
    id: 'm', matiere: 'mathematiques', aujourdHui: AUJ, dateControle: dans(3),
    chapitres: [{ id: 'a', titre: 'Les fractions' }],
  });
  const anglais = creerPlan({
    id: 'e', matiere: 'anglais', aujourdHui: AUJ, dateControle: dans(5),
    chapitres: [{ id: 'b', titre: 'Daily routine' }],
  });
  const vieux = { ...creerPlan({ id: 'v', matiere: 'svt', aujourdHui: '2026-09-01', dateControle: '2026-09-05', chapitres: ['c'] }) };
  const profil = { controles: [anglais, vieux, maths] };

  const r = tacheDuJour(profil, AUJ);
  assert.equal(r.plan.id, 'm');
  assert.equal(r.joursRestants, 3);
  assert.equal(r.texte, 'Contrôle de maths dans 3 jours : lis la fiche « Les fractions ».');
  assert.deepEqual(r.cible, { ecran: 'Chapitre', params: { id: 'a', titre: 'Les fractions' } });

  // Toutes les tâches du jour des maths faites → on passe à l'anglais.
  let m2 = maths;
  for (const t of maths.jours[0].taches) m2 = basculerFait(m2, t.id);
  const r2 = tacheDuJour({ controles: [m2, anglais] }, AUJ);
  assert.equal(r2.plan.id, 'e');
  assert.ok(r2.titre.startsWith('Contrôle d’anglais'));

  assert.equal(tacheDuJour({ controles: [m2] }, AUJ), null);
  assert.equal(tacheDuJour({}, AUJ), null);
  assert.equal(tacheDuJour(null, AUJ), null);
});

test('cibleTache : bons écrans et paramètres', () => {
  const plan = { id: 'p', titres: { a: 'A' } };
  assert.deepEqual(cibleTache({ type: 'qcm', chapitres: ['a'] }, plan), { ecran: 'Qcm', params: { id: 'a', titre: 'A' } });
  assert.deepEqual(cibleTache({ type: 'flashcards', chapitres: ['a'] }, plan), { ecran: 'Flashcards', params: { id: 'a', titre: 'A' } });
  assert.deepEqual(cibleTache({ type: 'exercices', chapitres: ['a'] }, plan), { ecran: 'Exercices', params: { id: 'a', titre: 'A' } });
  assert.deepEqual(cibleTache({ type: 'bilan', chapitres: ['a'] }, plan), { ecran: 'Controle', params: { planId: 'p' } });
  assert.deepEqual(cibleTache({ type: 'fiche', chapitres: ['a', 'b'] }, plan), { ecran: 'Controle', params: { planId: 'p' } });
});
