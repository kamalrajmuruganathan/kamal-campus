// Tests complémentaires des révisions de vacances : toutes les combinaisons durée × rythme sur les
// vrais chapitres du dépôt, dates (mois, année, années bissextiles, heure d'été), coche automatique,
// plan terminé.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DUREES, RYTHMES, MINUTES, EXOS_PAR_SEANCE, MATIERES_PRINCIPALES, niveauPrecedent, datesSeances, estSeanceBilan,
  repartir, echantillonner, choisirChapitres, creerPlanVacances, noterActiviteVacances, basculerSeance, avancement,
  etatDuJour, libelleSeance, iconeSeance, fusionnerVacances, planActif, abandonner, poidsMatiere,
} from './index.js';

const CONTENU = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'contenu');

/** Chapitres d'une classe, dans l'ordre de l'année (ordre.json), lus dans les fiches. */
function chapitresDe(niveau) {
  const res = [];
  for (const parcours of readdirSync(join(CONTENU, niveau)).sort()) {
    const ordre = join(CONTENU, niveau, parcours, 'ordre.json');
    if (!existsSync(ordre)) continue;
    for (const slug of JSON.parse(readFileSync(ordre, 'utf8'))) {
      const dossier = join(CONTENU, niveau, parcours, slug);
      if (!existsSync(join(dossier, 'fiche.md'))) continue;
      const entete = readFileSync(join(dossier, 'fiche.md'), 'utf8').slice(0, 1500);
      const champ = (k) => (new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm').exec(entete) || [])[1];
      res.push({
        id: champ('id'), titre: champ('titre'), parcours, matiere: champ('matiere'),
        qcm: existsSync(join(dossier, 'qcm.json')), exercices: existsSync(join(dossier, 'exercice.json')),
      });
    }
  }
  return res;
}

const NIVEAUX = ['cp', 'ce2', 'cm2', 'sixieme', 'cinquieme', 'quatrieme', 'troisieme', 'seconde', 'premiere', 'terminale'];
const JOURS_OK = { 3: [1, 3, 5], 5: [1, 2, 3, 4, 5], 7: [0, 1, 2, 3, 4, 5, 6] };
const jourSemaine = (date) => new Date(`${date}T12:00:00Z`).getUTCDay();

/** Vérifications communes à tous les plans. */
function verifierPlan(p, semaines, rythme, chapitres) {
  const ou = `${semaines} sem × ${rythme} j`;
  assert.equal(p.seances.length, semaines * rythme, `${ou} : nombre de séances`);
  const ids = new Set(chapitres.map((c) => c.id));
  // Dates strictement croissantes, jours de la semaine du rythme, au plus 7 jours entre deux séances.
  for (let i = 0; i < p.seances.length; i++) {
    const s = p.seances[i];
    assert.equal(s.id, `s${i + 1}`);
    assert.ok(JOURS_OK[rythme].includes(jourSemaine(s.date)), `${ou} : ${s.date} n'est pas un jour travaillé`);
    if (i) assert.ok(s.date > p.seances[i - 1].date, `${ou} : dates croissantes`);
    assert.equal(s.semaine, Math.floor(i / rythme) + 1);
    assert.ok(s.minutes >= 15 && s.minutes <= 20);
    assert.ok(libelleSeance(s).length > 10 && !/ {2}|undefined|null/.test(libelleSeance(s)), libelleSeance(s));
    assert.notEqual(iconeSeance(s), '•');
  }
  assert.ok(p.seances[0].date >= p.debut);
  // Bilans : au bon rang, avec les chapitres revus depuis le précédent ; le dernier est le grand bilan.
  const bilans = p.seances.filter((s) => s.type === 'bilan');
  const attendus = semaines * rythme <= 0 ? 0 : (rythme >= 5 ? semaines : Math.ceil(semaines / 2));
  assert.equal(bilans.length, attendus, `${ou} : nombre de bilans`);
  const derniere = p.seances.at(-1);
  assert.equal(derniere.type, 'bilan');
  assert.equal(derniere.final, true);
  assert.equal(derniere.titreBilan, 'Grand bilan de vacances');
  let depuis = [];
  const tous = new Set();
  let num = 0;
  for (const s of p.seances) {
    if (s.type === 'chapitre') {
      assert.ok(ids.has(s.chapitreId), `${ou} : chapitre inconnu ${s.chapitreId}`);
      assert.ok(['qcm', 'exercices', 'fiche'].includes(s.activite));
      const c = chapitres.find((x) => x.id === s.chapitreId);
      if (s.activite === 'qcm') assert.ok(c.qcm !== false, `${ou} : QCM d'un chapitre sans QCM`);
      if (s.activite === 'exercices') assert.ok(c.exercices !== false, `${ou} : exercices d'un chapitre sans exercices`);
      depuis.push(s.chapitreId);
      tous.add(s.chapitreId);
      continue;
    }
    num += 1;
    if (s.final) assert.deepEqual(new Set(s.chapitres), tous);
    else {
      assert.deepEqual(s.chapitres, [...new Set(depuis)]);
      assert.equal(s.titreBilan, `Bilan de vacances n° ${num}`);
    }
    assert.ok(s.chapitres.length >= 1, `${ou} : bilan vide`);
    depuis = [];
  }
}

test('vraies classes : 3 durées × 3 rythmes, matières principales — plans complets et cohérents', () => {
  for (const niveau of NIVEAUX) {
    const chapitres = chapitresDe(niveau).filter((c) => MATIERES_PRINCIPALES.includes(c.matiere));
    assert.ok(chapitres.length >= 5, `${niveau} : ${chapitres.length} chapitres principaux`);
    for (const semaines of DUREES) {
      for (const rythme of RYTHMES) {
        const p = creerPlanVacances({ niveau, semaines, joursParSemaine: rythme, chapitres, debut: '2026-07-04', id: 'v' });
        verifierPlan(p, semaines, rythme, chapitres);
        // Pas de chapitre répété tant qu'il en reste d'inédits.
        const vus = p.seances.filter((s) => s.type === 'chapitre').map((s) => s.chapitreId);
        if (vus.length <= chapitres.length) assert.equal(new Set(vus).size, vus.length, `${niveau} ${semaines}×${rythme} : doublon`);
      }
    }
  }
});

test('vraies classes : maths et français reçoivent au moins autant de séances que chaque autre matière', () => {
  for (const niveau of ['sixieme', 'cinquieme', 'quatrieme', 'troisieme']) {
    const chapitres = chapitresDe(niveau);
    const p = creerPlanVacances({ niveau, semaines: 6, joursParSemaine: 5, chapitres, debut: '2026-07-06', id: 'v' });
    verifierPlan(p, 6, 5, chapitres);
    const n = {};
    for (const s of p.seances) if (s.type === 'chapitre') n[s.matiere] = (n[s.matiere] || 0) + 1;
    for (const [m, k] of Object.entries(n)) {
      assert.ok((n.mathematiques || 0) >= k && (n.francais || 0) >= k, `${niveau} : ${m} ${k} > maths ${n.mathematiques} / français ${n.francais}`);
    }
  }
});

test('vraies classes : tout faire jour après jour (QCM ou 3 exercices) coche toutes les séances et termine le plan', () => {
  for (const niveau of ['cm1', 'cinquieme', 'seconde']) {
    const chapitres = chapitresDe(niveau).filter((c) => MATIERES_PRINCIPALES.includes(c.matiere));
    for (const semaines of DUREES) {
      for (const rythme of RYTHMES) {
        let p = creerPlanVacances({ niveau, semaines, joursParSemaine: rythme, chapitres, debut: '2026-07-06', id: 'v' });
        for (const s of p.seances) {
          const e = etatDuJour(p, s.date);
          assert.equal(e.aFaire?.id, s.id, `${niveau} : séance du jour proposée`);
          assert.equal(e.retard, 0);
          if (s.type === 'bilan') p = noterActiviteVacances(p, { type: 'qcm', titre: s.titreBilan }, s.date);
          else if (s.activite === 'exercices') {
            for (let k = 0; k < EXOS_PAR_SEANCE; k++) p = noterActiviteVacances(p, { type: 'exo', chapitreId: s.chapitreId }, s.date);
          } else if (s.activite === 'qcm') p = noterActiviteVacances(p, { type: 'qcm', chapitreId: s.chapitreId }, s.date);
          else p = basculerSeance(p, s.id); // fiche seule : cochée à la main
          assert.equal(p.faites[s.id], true, `${niveau} ${semaines}×${rythme} : ${s.id} (${s.type}/${s.activite}) non cochée`);
        }
        const a = avancement(p);
        assert.deepEqual(a, { faites: semaines * rythme, total: semaines * rythme });
        const fin = etatDuJour(p, p.seances.at(-1).date);
        assert.equal(fin.termine, true);
        assert.equal(fin.aFaire, null);
        assert.equal(fin.prochaine, null);
        assert.equal(etatDuJour(p, '2026-12-01').fini, true);
      }
    }
  }
});

test('dates : passage d\'année, 29 février, heure d\'été — jours exacts (vérifiés au calendrier)', () => {
  assert.deepEqual(datesSeances('2026-12-28', 6, 3).map((d) => d.date), [
    '2026-12-28', '2026-12-30', '2027-01-01', '2027-01-04', '2027-01-06', '2027-01-08', '2027-01-11', '2027-01-13',
    '2027-01-15', '2027-01-18', '2027-01-20', '2027-01-22', '2027-01-25', '2027-01-27', '2027-01-29', '2027-02-01',
    '2027-02-03', '2027-02-05',
  ]);
  assert.deepEqual(datesSeances('2028-02-26', 2, 5).map((d) => d.date), [
    '2028-02-28', '2028-02-29', '2028-03-01', '2028-03-02', '2028-03-03', '2028-03-06', '2028-03-07', '2028-03-08',
    '2028-03-09', '2028-03-10',
  ]);
  // 2027 n'est pas bissextile : du 27 février au 2 mars.
  assert.deepEqual(datesSeances('2027-02-27', 2, 7).slice(0, 4).map((d) => d.date), ['2027-02-27', '2027-02-28', '2027-03-01', '2027-03-02']);
  // Heure d'été (29 mars 2026) et heure d'hiver (25 octobre 2026) : aucun jour sauté ni doublé.
  for (const debut of ['2026-03-27', '2026-10-23']) {
    const d = datesSeances(debut, 2, 7).map((x) => x.date);
    assert.equal(new Set(d).size, 14);
    for (let i = 1; i < d.length; i++) {
      assert.equal((Date.parse(`${d[i]}T00:00:00Z`) - Date.parse(`${d[i - 1]}T00:00:00Z`)) / 864e5, 1);
    }
  }
});

test('dates : pour chaque jour de départ de la semaine, les séances tombent les bons jours', () => {
  for (let k = 0; k < 7; k++) {
    const debut = `2026-07-${String(5 + k).padStart(2, '0')}`; // du dimanche 5 au samedi 11 juillet 2026
    for (const r of RYTHMES) {
      for (const sem of DUREES) {
        const d = datesSeances(debut, sem, r);
        assert.equal(d.length, sem * r);
        assert.ok(d.every((x) => JOURS_OK[r].includes(jourSemaine(x.date))));
        assert.ok(d[0].date >= debut);
        // Le premier jour travaillé à partir du départ est bien pris.
        const premier = Array.from({ length: 7 }, (_, i) => new Date(Date.parse(`${debut}T12:00:00Z`) + i * 864e5))
          .find((x) => JOURS_OK[r].includes(x.getUTCDay())).toISOString().slice(0, 10);
        assert.equal(d[0].date, premier);
      }
    }
  }
});

test('estSeanceBilan : seulement la dernière séance d\'une semaine', () => {
  assert.equal(estSeanceBilan({ semaine: 1, rang: 4 }, 2, 5), true);
  assert.equal(estSeanceBilan({ semaine: 1, rang: 3 }, 2, 5), false);
  assert.equal(estSeanceBilan({ semaine: 1, rang: 2 }, 4, 3), false); // semaine impaire à 3 j
  assert.equal(estSeanceBilan({ semaine: 2, rang: 2 }, 4, 3), true);
  assert.equal(estSeanceBilan({ semaine: 3, rang: 2 }, 3, 3), true); // dernière semaine
});

test('repartir : somme exacte, plafonds respectés, poids respectés (tirages reproductibles)', () => {
  let x = 12345;
  const r = () => { x = (Math.imul(x, 1103515245) + 12345) >>> 0; return x / 2 ** 32; };
  for (let k = 0; k < 2000; k++) {
    const groupes = Array.from({ length: 1 + Math.floor(r() * 7) }, (_, i) => ({ cle: `g${i}`, poids: 1 + Math.floor(r() * 3), max: Math.floor(r() * 12) }));
    const nb = Math.floor(r() * 45);
    const res = repartir(nb, groupes);
    const somme = Object.values(res).reduce((a, b) => a + b, 0);
    assert.equal(somme, Math.min(nb, groupes.reduce((s, g) => s + g.max, 0)));
    for (const g of groupes) assert.ok(res[g.cle] >= 0 && res[g.cle] <= g.max);
    // Deux groupes non plafonnés : celui de plus grand poids n'a jamais moins.
    for (const a of groupes) {
      for (const b of groupes) {
        if (a.poids > b.poids && res[a.cle] < a.max && res[b.cle] < b.max) assert.ok(res[a.cle] >= res[b.cle], JSON.stringify({ nb, groupes, res }));
      }
    }
  }
  assert.deepEqual(repartir(0, [{ cle: 'a', poids: 1, max: 3 }]), { a: 0 });
  assert.deepEqual(repartir(5, []), {});
});

test('echantillonner : k éléments distincts, dans l\'ordre, début et fin d\'année représentés', () => {
  const l = Array.from({ length: 20 }, (_, i) => i);
  for (let k = 0; k <= 22; k++) {
    const e = echantillonner(l, k);
    assert.equal(e.length, Math.min(k, 20));
    assert.equal(new Set(e).size, e.length);
    assert.deepEqual(e, [...e].sort((a, b) => a - b));
  }
  const e4 = echantillonner(l, 4);
  assert.ok(e4[0] <= 4 && e4[3] >= 15);
  assert.deepEqual(echantillonner([], 3), []);
  assert.deepEqual(echantillonner(l, -1), []);
});

test('choisirChapitres : entrées abîmées ignorées, nombre demandé respecté', () => {
  const l = [null, {}, { id: 'a', matiere: 'mathematiques', parcours: 'maths' }, { id: 'b', matiere: 'arts', parcours: 'arts', qcm: false, exercices: false }];
  const c = choisirChapitres(l, 7);
  assert.equal(c.length, 7);
  assert.ok(c.every((s) => ['a', 'b'].includes(s.chapitre.id)));
  assert.equal(c.find((s) => s.chapitre.id === 'b').activite, 'fiche');
  assert.deepEqual(choisirChapitres([], 5), []);
  assert.deepEqual(choisirChapitres(l, 0), []);
  assert.deepEqual(choisirChapitres(undefined, 3), []);
  assert.equal(poidsMatiere('mathematiques'), 3);
  assert.equal(poidsMatiere('arts'), 1);
});

test('un seul chapitre : toutes les séances le concernent, en alternant les activités', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 7, chapitres: [{ id: 'x', titre: 'Les fractions', parcours: 'maths', matiere: 'mathematiques' }], debut: '2026-07-06', id: 'v' });
  const ch = p.seances.filter((s) => s.type === 'chapitre');
  assert.equal(ch.length, 12);
  assert.ok(ch.every((s) => s.chapitreId === 'x'));
  assert.ok(ch.slice(1).every((s) => s.revision === true));
  assert.ok(new Set(ch.map((s) => s.activite)).size === 2);
});

test('coche automatique : QCM fait en avance → séance future cochée ; QCM d\'un chapitre déjà coché → rien', () => {
  const chapitres = ['a', 'b', 'c', 'd', 'e', 'f'].map((id) => ({ id, titre: id.toUpperCase(), parcours: 'francais', matiere: 'francais', exercices: false }));
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres, debut: '2026-07-06', id: 'v' });
  const futur = p.seances.find((s) => s.type === 'chapitre' && s.date > '2026-07-07');
  const q = noterActiviteVacances(p, { type: 'qcm', chapitreId: futur.chapitreId }, '2026-07-06');
  assert.equal(q.faites[futur.id], true);
  assert.equal(noterActiviteVacances(q, { type: 'qcm', chapitreId: futur.chapitreId }, '2026-07-06'), q);
  // Des exercices d'un chapitre en « QCM » ne cochent rien (et ne comptent pas).
  const r = noterActiviteVacances(p, { type: 'exo', chapitreId: futur.chapitreId }, '2026-07-06');
  assert.equal(r, p);
  // Activité inconnue, absente, ou plan abandonné : même objet.
  assert.equal(noterActiviteVacances(p, { type: 'autre', chapitreId: 'a' }, '2026-07-06'), p);
  assert.equal(noterActiviteVacances(p, null, '2026-07-06'), p);
  const ab = abandonner(p);
  assert.equal(noterActiviteVacances(ab, { type: 'qcm', chapitreId: 'a' }, '2026-07-06'), ab);
  assert.equal(noterActiviteVacances(undefined, { type: 'qcm', chapitreId: 'a' }, '2026-07-06'), undefined);
});

test('coche automatique : le chapitre revu deux fois coche d\'abord la séance déjà passée', () => {
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 7, chapitres: [{ id: 'x', titre: 'X', parcours: 'francais', matiere: 'francais', exercices: false }], debut: '2026-07-06', id: 'v' });
  const ch = p.seances.filter((s) => s.type === 'chapitre');
  const q = noterActiviteVacances(p, { type: 'qcm', chapitreId: 'x' }, ch[2].date);
  assert.equal(q.faites[ch[0].id], true);
  assert.equal(Object.keys(q.faites).length, 1);
});

test('etatDuJour : avant le début, retards, plan fini mais incomplet, plan absent', () => {
  const chapitres = ['a', 'b', 'c'].map((id) => ({ id, titre: id, parcours: 'francais', matiere: 'francais' }));
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 3, chapitres, debut: '2026-07-04', id: 'v' }); // samedi
  const avant = etatDuJour(p, '2026-07-04');
  assert.equal(avant.pasCommence, true);
  assert.equal(avant.duJour, null);
  assert.equal(avant.prochaine.date, '2026-07-06');
  const apres = etatDuJour(p, '2026-08-01');
  assert.equal(apres.fini, true);
  assert.equal(apres.termine, false);
  assert.equal(apres.retard, 6);
  assert.equal(apres.aFaire.id, 's1');
  assert.equal(etatDuJour(null, '2026-07-04'), null);
  assert.equal(etatDuJour(abandonner(p), '2026-07-04'), null);
  assert.deepEqual(avancement(null), { faites: 0, total: 0 });
});

test('creerPlanVacances : paramètres invalides refusés avec un message en français', () => {
  const ch = [{ id: 'a', parcours: 'maths', matiere: 'mathematiques' }];
  assert.throws(() => creerPlanVacances({ semaines: 4, joursParSemaine: 6, chapitres: ch, debut: '2026-07-06' }), /Rythme impossible/);
  assert.throws(() => creerPlanVacances({ semaines: 1, joursParSemaine: 5, chapitres: ch, debut: '2026-07-06' }), /Durée impossible/);
  assert.throws(() => creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: [], debut: '2026-07-06' }), /Choisis au moins une matière/);
  assert.ok(creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: ch, debut: '2026-07-06' }).id.startsWith('vac-'));
});

test('libellés : nombres et espaces insécables, guillemets français', () => {
  assert.equal(libelleSeance({ type: 'chapitre', activite: 'exercices', titre: 'Les fractions' }), 'Relis la fiche « Les fractions », puis fais 3 exercices');
  assert.equal(libelleSeance({ type: 'chapitre', activite: 'exercices', titre: 'Les fractions', revision: true }), 'Refais 3 exercices de « Les fractions »');
  assert.equal(libelleSeance({ type: 'chapitre', activite: 'qcm', titre: 'X', revision: true }), 'Refais le QCM de « X »');
  assert.equal(libelleSeance({ type: 'chapitre', activite: 'fiche', titre: 'X' }), 'Lis la fiche « X », puis révise ses cartes');
  assert.equal(libelleSeance({ type: 'bilan', final: true }), 'Grand bilan : un QCM qui mélange toute ta révision');
  assert.equal(libelleSeance(null), '');
  assert.equal(iconeSeance({ type: 'bilan', final: true }), '🏆');
  assert.equal(MINUTES.bilan, 20);
});

test('fusionnerVacances : ordre indifférent pour un même plan, progrès au maximum', () => {
  const ch = ['a', 'b'].map((id) => ({ id, titre: id, parcours: 'maths', matiere: 'mathematiques' }));
  const p = creerPlanVacances({ semaines: 2, joursParSemaine: 5, chapitres: ch, debut: '2026-07-06', id: 'v' });
  const a = { ...basculerSeance(p, 's1'), progres: { s2: 2 } };
  const b = { ...basculerSeance(p, 's3'), progres: { s2: 1, s4: 1 } };
  const ab = fusionnerVacances(a, b);
  const ba = fusionnerVacances(b, a);
  assert.deepEqual(ab.faites, ba.faites);
  assert.deepEqual(ab.progres, { s2: 2, s4: 1 });
  assert.deepEqual(ba.progres, { s2: 2, s4: 1 });
  assert.deepEqual(fusionnerVacances(ab, ab), ab);
  assert.equal(planActif({ seances: 'pas une liste' }), null);
});

test('niveauPrecedent : toutes les classes ont la classe d\'avant attendue', () => {
  const chaine = ['cp', 'ce1', 'ce2', 'cm1', 'cm2', 'sixieme', 'cinquieme', 'quatrieme', 'troisieme', 'seconde', 'premiere', 'terminale'];
  for (let i = 1; i < chaine.length; i++) assert.equal(niveauPrecedent(chaine[i]), chaine[i - 1]);
  assert.equal(niveauPrecedent('premiere-techno'), 'seconde');
  assert.equal(niveauPrecedent(undefined), null);
});
