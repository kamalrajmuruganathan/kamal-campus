// Tests complémentaires de « Je révise mon contrôle » : toutes les combinaisons de jours restants,
// de chapitres et de contenus disponibles ; dates (mois, année, heure d'été) ; libellés.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  planifier, ajouterJours, ecartJours, optionsDates, dateEnLettres, delaiEnLettres, deMatiere, nomCourtMatiere,
  libelleTache, iconeTache, titreControle, creerPlan, basculerFait, avancement, tacheDuJour, cibleTache,
  TYPES, MAX_TACHES_PAR_JOUR,
} from './index.js';

const VARIANTES = [
  {}, { flashcards: false }, { exercices: false }, { qcm: false }, { fiche: false },
  { flashcards: false, exercices: false }, { flashcards: false, exercices: false, qcm: false },
];
const AUJ = '2026-10-30';

test('toutes les combinaisons (0 à 20 jours, 1 à 4 chapitres, contenus variés) : plan valide', () => {
  for (let n = 0; n <= 20; n++) {
    for (let k = 1; k <= 4; k++) {
      for (const v of VARIANTES) {
        const chapitres = Array.from({ length: k }, (_, i) => ({ id: `c${i}`, ...v }));
        const ou = `n=${n} k=${k} ${JSON.stringify(v)}`;
        const p = planifier({ chapitres, aujourdHui: AUJ, dateControle: ajouterJours(AUJ, n) });
        assert.equal(p.length, n + 1, ou);
        p.forEach((j, d) => {
          assert.equal(j.date, ajouterJours(AUJ, d), ou);
          assert.equal(j.role, d === n ? 'jourJ' : d === n - 1 ? 'veille' : 'travail', ou);
          assert.ok(j.taches.length <= MAX_TACHES_PAR_JOUR, `${ou} : ${j.taches.length} tâches le ${j.date}`);
          assert.equal(j.minutes, j.taches.reduce((s, t) => s + t.minutes, 0));
          for (const t of j.taches) {
            assert.ok(TYPES.includes(t.type), ou);
            assert.ok(t.minutes > 0, ou);
            assert.ok(t.chapitres.length >= 1, ou);
            // Jamais une tâche sur un contenu absent.
            for (const id of t.chapitres) {
              const c = chapitres.find((x) => x.id === id);
              if (t.type !== 'bilan') assert.notEqual(c[t.type], false, `${ou} : ${t.type} de ${id} absent`);
            }
          }
        });
        const ids = p.flatMap((j) => j.taches.map((t) => t.id));
        assert.equal(new Set(ids).size, ids.length, ou);
        if (n >= 1) assert.ok(p[n - 1].taches.some((t) => t.type === 'bilan'), `${ou} : bilan la veille`);
        if (n >= 3) {
          // Assez de temps : fiche, QCM et exercices avant la veille, au plus 45 min par jour. Les cartes
          // peuvent ne pas avoir de séance à part quand le temps est serré : elles sont alors relues la veille.
          for (const c of chapitres) {
            for (const type of ['fiche', 'flashcards', 'qcm', 'exercices']) {
              if (c[type] === false) continue;
              const jours = type === 'flashcards' ? p : p.slice(0, n - 1);
              assert.ok(jours.some((j) => j.taches.some((t) => t.type === type && t.chapitres.includes(c.id))), `${ou} : ${type} de ${c.id}`);
            }
          }
          // (Plan « express », tâches groupées sur 3-4 chapitres quand il ne reste que 2 jours : jusqu'à 80 min, choix assumé.)
          for (const j of p.slice(0, n - 1)) {
            const max = j.taches.some((t) => t.express) ? 80 : 45;
            assert.ok(j.minutes <= max, `${ou} : ${j.minutes} min le ${j.date}`);
          }
        }
      }
    }
  }
});

test('dates : fin de mois, fin d\'année, années bissextiles, heure d\'été et d\'hiver', () => {
  assert.equal(ajouterJours('2026-01-31', 1), '2026-02-01');
  assert.equal(ajouterJours('2028-02-28', 1), '2028-02-29');
  assert.equal(ajouterJours('2027-02-28', 1), '2027-03-01');
  assert.equal(ajouterJours('2026-12-31', 14), '2027-01-14');
  assert.equal(ajouterJours('2027-01-05', -10), '2026-12-26');
  assert.equal(ajouterJours('2026-03-28', 1), '2026-03-29'); // passage à l'heure d'été
  assert.equal(ajouterJours('2026-03-29', 1), '2026-03-30');
  assert.equal(ajouterJours('2026-10-24', 2), '2026-10-26'); // passage à l'heure d'hiver
  assert.equal(ecartJours('2026-10-24', '2026-10-26'), 2);
  assert.equal(ecartJours('2026-12-25', '2027-01-08'), 14);
  assert.equal(ecartJours('2028-02-01', '2028-03-01'), 29);
  assert.equal(ecartJours('2026-11-03', '2026-11-01'), -2);
  // Plan à cheval sur deux années : jours consécutifs, sans trou.
  const p = planifier({ chapitres: ['a', 'b'], aujourdHui: '2026-12-26', dateControle: '2027-01-05' });
  assert.deepEqual(p.map((j) => j.date), ['2026-12-26', '2026-12-27', '2026-12-28', '2026-12-29', '2026-12-30', '2026-12-31',
    '2027-01-01', '2027-01-02', '2027-01-03', '2027-01-04', '2027-01-05']);
});

test('dateEnLettres : jours de la semaine exacts (vérifiés au calendrier), « 1er »', () => {
  assert.equal(dateEnLettres('2026-11-03'), 'mardi 3 novembre');
  assert.equal(dateEnLettres('2027-01-01'), 'vendredi 1er janvier');
  assert.equal(dateEnLettres('2028-02-29'), 'mardi 29 février');
  assert.equal(dateEnLettres('2026-08-15'), 'samedi 15 août');
  assert.equal(dateEnLettres('2026-12-25'), 'vendredi 25 décembre');
  assert.equal(dateEnLettres('2026-03-29'), 'dimanche 29 mars');
});

test('delaiEnLettres : passé, présent, futur, espace insécable', () => {
  assert.equal(delaiEnLettres('2026-11-03', '2026-11-02'), 'hier');
  assert.equal(delaiEnLettres('2026-11-03', '2026-10-31'), 'il y a 3 jours');
  assert.equal(delaiEnLettres('2026-12-31', '2027-01-01'), 'demain');
  assert.equal(delaiEnLettres('2026-11-03', '2026-11-17'), 'dans 14 jours');
});

test('optionsDates : passage de mois et d\'année, libellés « Demain », jour de la semaine, « Dans n jours »', () => {
  const o = optionsDates('2026-12-27');
  assert.equal(o.length, 14);
  assert.deepEqual(o[0], { date: '2026-12-28', jours: 1, libelle: 'Demain', detail: 'lundi 28' });
  assert.equal(o[4].libelle, 'Vendredi 1er');
  assert.equal(o[4].date, '2027-01-01');
  assert.equal(o[5].libelle, 'Samedi 2');
  assert.equal(o[5].detail, 'dans 6 jours');
  assert.equal(o[6].libelle, 'Dans 7 jours');
  assert.equal(o[6].detail, 'dimanche 3');
  assert.deepEqual(o.map((x) => x.jours), Array.from({ length: 14 }, (_, i) => i + 1));
  assert.equal(optionsDates('2026-12-27', 3).length, 3);
});

test('entrées : identifiants vides ignorés, contrôle passé, date invalide', () => {
  assert.throws(() => planifier({ chapitres: [{ id: '' }], aujourdHui: AUJ, dateControle: ajouterJours(AUJ, 3) }), /entre 1 et 4/);
  assert.throws(() => planifier({ chapitres: undefined, aujourdHui: AUJ, dateControle: AUJ }));
  assert.deepEqual(planifier({ chapitres: ['a'], aujourdHui: AUJ, dateControle: '2026-01-01' }), []);
  assert.deepEqual(planifier({ chapitres: ['a'], aujourdHui: AUJ, dateControle: 'n\'importe quoi' }), []);
  const p = planifier({ chapitres: ['a', { id: null }, 'b'], aujourdHui: AUJ, dateControle: ajouterJours(AUJ, 5) });
  assert.deepEqual(p.at(-2).taches.find((t) => t.type === 'bilan').chapitres, ['a', 'b']);
});

test('deMatiere, nomCourtMatiere, titreControle : élisions et sigles', () => {
  assert.equal(deMatiere('italien'), 'd’italien');
  assert.equal(deMatiere('enseignement scientifique'), 'd’enseignement scientifique');
  assert.equal(deMatiere('arts'), 'd’arts');
  assert.equal(deMatiere('physique-chimie'), 'de physique-chimie');
  assert.equal(deMatiere('NSI'), 'de NSI');
  assert.equal(deMatiere(''), '');
  assert.equal(deMatiere(null), '');
  assert.equal(nomCourtMatiere('hist-geo'), 'histoire-géo');
  assert.equal(nomCourtMatiere('francais'), 'français');
  assert.equal(nomCourtMatiere('inconnue'), 'inconnue');
  assert.equal(nomCourtMatiere(undefined), '');
  assert.equal(titreControle({ matiere: 'anglais' }), 'Contrôle d’anglais');
  assert.equal(titreControle({ matiere: 'svt' }), 'Contrôle de SVT');
  assert.equal(titreControle({ matiere: 'hist-geo' }), 'Contrôle d’histoire-géo');
  assert.equal(titreControle({ matiereNom: 'maths' }), 'Contrôle de maths');
  assert.equal(titreControle(null), 'Contrôle');
});

test('libelleTache : tous les types, un ou plusieurs chapitres, nombres et espaces insécables', () => {
  const t = { a: 'Les fractions' };
  const g = (s) => `« ${s} »`;
  assert.equal(libelleTache({ type: 'fiche', chapitres: ['a'], express: true }, t), `Lis l’essentiel de la fiche ${g('Les fractions')}`);
  assert.equal(libelleTache({ type: 'fiche', chapitres: ['a', 'b', 'c'] }, t), 'Lis les fiches de tes 3 chapitres (l’essentiel)');
  assert.equal(libelleTache({ type: 'flashcards', chapitres: ['a'] }, t), `Apprends les cartes de ${g('Les fractions')}`);
  assert.equal(libelleTache({ type: 'flashcards', chapitres: ['a'], revision: true }, t), `Révise les cartes de ${g('Les fractions')}`);
  assert.equal(libelleTache({ type: 'flashcards', chapitres: ['a', 'b'] }, t), 'Apprends les cartes de tes 2 chapitres');
  assert.equal(libelleTache({ type: 'flashcards', chapitres: ['a', 'b'], revision: true }, t), 'Relis les cartes de tous tes chapitres');
  assert.equal(libelleTache({ type: 'qcm', chapitres: ['a', 'b'] }, t), 'Fais le QCM de chacun de tes 2 chapitres');
  assert.equal(libelleTache({ type: 'exercices', chapitres: ['a'] }, t), `Fais 3 exercices de ${g('Les fractions')}`);
  assert.equal(libelleTache({ type: 'exercices', chapitres: ['a'], revision: true }, t), `Fais 2 nouveaux exercices de ${g('Les fractions')}`);
  assert.equal(libelleTache({ type: 'exercices', chapitres: ['a', 'b', 'c', 'd'] }, t), 'Fais 2 exercices de chacun de tes 4 chapitres');
  assert.equal(libelleTache({ type: 'bilan', chapitres: ['a'] }, t), `Fais le QCM bilan de ${g('Les fractions')}`);
  assert.equal(libelleTache({ type: 'inconnu', chapitres: [] }), 'Tâche de révision');
  // Titre absent : l'identifiant s'affiche (jamais « undefined »).
  assert.equal(libelleTache({ type: 'qcm', chapitres: ['zz'] }), `Fais le QCM de ${g('zz')}`);
  for (const type of TYPES) assert.notEqual(iconeTache(type), '•');
  assert.equal(iconeTache('autre'), '•');
});

test('tous les libellés d\'un vrai plan : pas de « undefined », pas d\'espace double, majuscule initiale', () => {
  for (let n = 0; n <= 14; n++) {
    const plan = creerPlan({ id: 'p', matiere: 'mathematiques', aujourdHui: AUJ, dateControle: ajouterJours(AUJ, n),
      chapitres: [{ id: 'a', titre: 'Les fractions' }, { id: 'b', titre: 'Les aires' }, { id: 'c', titre: 'Le calcul littéral' }] });
    for (const j of plan.jours) {
      for (const tache of j.taches) {
        const l = libelleTache(tache, plan.titres);
        assert.ok(/^[A-ZÉ]/.test(l) && !/undefined|null| {2}/.test(l), l);
        const cible = cibleTache(tache, plan);
        assert.ok(['Controle', 'Chapitre', 'Flashcards', 'Qcm', 'Exercices'].includes(cible.ecran), JSON.stringify(cible));
      }
    }
  }
});

test('creerPlan : identifiants de chapitres en chaînes, titres par défaut, id aléatoire', () => {
  const p = creerPlan({ matiere: 'svt', chapitres: ['a', { id: 'b' }], aujourdHui: AUJ, dateControle: ajouterJours(AUJ, 2) });
  assert.deepEqual(p.chapitres, ['a', 'b']);
  assert.deepEqual(p.titres, { b: 'b' });
  assert.ok(p.id.startsWith(`ctrl-${AUJ}-`));
  assert.equal(p.matiereNom, 'SVT');
  assert.deepEqual(p.faites, {});
  assert.equal(p.creeLe, AUJ);
});

test('avancement et basculerFait : idempotence d\'un double basculement, tâche inconnue', () => {
  const p = creerPlan({ id: 'p', matiere: 'svt', chapitres: ['a'], aujourdHui: AUJ, dateControle: ajouterJours(AUJ, 4) });
  const { total } = avancement(p);
  assert.ok(total >= 5);
  let q = p;
  for (const j of p.jours) for (const t of j.taches) q = basculerFait(q, t.id);
  assert.deepEqual(avancement(q), { faites: total, total });
  // Une case inconnue cochée n'est pas comptée.
  assert.deepEqual(avancement(basculerFait(p, 'inconnue')), { faites: 0, total });
  assert.deepEqual(avancement(null), { faites: 0, total: 0 });
});

test('tacheDuJour : jour J (relire les cartes), plan sans tâche ce jour, texte au bon format', () => {
  const plan = creerPlan({ id: 'p', matiere: 'anglais', chapitres: [{ id: 'a', titre: 'Daily routine' }], aujourdHui: AUJ, dateControle: ajouterJours(AUJ, 2) });
  const jJ = tacheDuJour({ controles: [plan] }, ajouterJours(AUJ, 2));
  assert.equal(jJ.texte, 'Contrôle d’anglais aujourd’hui : relis tes cartes 10 minutes, pas plus.');
  assert.equal(jJ.joursRestants, 0);
  const veille = tacheDuJour({ controles: [plan] }, ajouterJours(AUJ, 1));
  assert.equal(veille.texte, 'Contrôle d’anglais demain : fais le QCM bilan de « Daily routine ».');
  assert.deepEqual(veille.cible, { ecran: 'Controle', params: { planId: 'p' } });
  // Après le contrôle : plus rien.
  assert.equal(tacheDuJour({ controles: [plan] }, ajouterJours(AUJ, 3)), null);
  // Plans abîmés ignorés.
  assert.equal(tacheDuJour({ controles: [null, { dateControle: '2099-01-01' }, 'x'] }, AUJ), null);
  // Le « QCM » en tête de libellé garde ses majuscules.
  const p2 = { ...plan, jours: [{ date: AUJ, taches: [{ id: 't', type: 'qcm', chapitres: ['a', 'b'] }] }], dateControle: ajouterJours(AUJ, 2) };
  assert.ok(tacheDuJour({ controles: [p2] }, AUJ).texte.endsWith(': fais le QCM de chacun de tes 2 chapitres.'));
});
