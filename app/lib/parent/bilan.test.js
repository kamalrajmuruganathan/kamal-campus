import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  bilanSemaine, conseilsSemaine, texteBilan, chapitresDeLaPeriode, periodeEnLettres, jourCourt, jourLong, noteEnTexte,
} from './index.js';

const jourUTC = (iso) => (iso ? String(iso).slice(0, 10) : null);
const AUJ = '2026-10-18'; // dimanche : cette semaine = 12 → 18 octobre ; précédente = 5 → 11 octobre
const TITRES = { 'c-frac': 'Les fractions', 'c-eq': 'Équations', 'c-atomes': 'Atomes' };
const OPTS = {
  aujourdhui: AUJ,
  jourDe: jourUTC,
  titreChapitre: (id) => TITRES[id],
  libelleMatiere: (m) => ({ mathematiques: 'Mathématiques', 'physique-chimie': 'Physique-chimie' })[m] || m,
};
const s = (date, titre, extra = {}) => ({ date: `${date}T12:00:00.000Z`, titre, justes: 7, total: 10, points: 70, matiere: 'mathematiques', ...extra });

// Ce que renvoie l'ANCIENNE fonction SQL (v1) : pas de carnet, d'examens, de contrôles.
const V1 = {
  prenom: 'Léa',
  xp: 900,
  historique: [
    s('2026-10-18', 'Les fractions', { chapitreId: 'c-frac' }),
    s('2026-10-16', 'Cartes — Les fractions', { chapitreId: 'c-frac' }),
    s('2026-10-15', 'Atomes', { matiere: 'physique-chimie' }),
    s('2026-10-14', 'Examen sur mesure — maths'),
    s('2026-10-13', 'Énigme', { matiere: null }),
    s('2026-10-12', 'Équations', { chapitreId: 'c-eq' }), // 1er jour de la semaine : compté
    s('2026-10-11', 'Équations', { chapitreId: 'c-eq' }), // veille : semaine précédente
    s('2026-10-05', 'Atomes', { matiere: 'physique-chimie' }), // 1er jour de la semaine précédente
    s('2026-10-04', 'Vieux chapitre'), // hors des deux semaines
  ],
  serieJours: 2,
  dernierJourValide: '2026-10-18',
};

const V2 = {
  ...V1,
  version: 2,
  carnet: [
    { type: 'qcm', chapitreId: 'c-frac', titre: 'Les fractions', etape: 0, prochaine: '2026-10-18', ajoute: '2026-10-17' },
    { type: 'exo', chapitreId: 'c-frac', titre: 'Les fractions', etape: 1, prochaine: '2026-10-16', ajoute: '2026-10-10' },
    { type: 'qcm', chapitreId: 'c-eq', titre: 'Équations', etape: 2, prochaine: '2026-10-22', ajoute: '2026-10-12' },
    { type: 'qcm', chapitreId: null, titre: null, etape: 0, prochaine: '2026-10-19', ajoute: '2026-10-11' },
  ],
  carnetMaitrisees: 9,
  carnetMaitriseesJours: { '2026-10-11': 5, '2026-10-12': 2, '2026-10-18': 2 },
  examens: [
    { id: 'e1', date: '2026-10-10', matiere: 'mathematiques', note20: 15, chapitres: ['c-frac'] },
    { id: 'e2', date: '2026-10-17', matiere: 'mathematiques', note20: 8.5, chapitres: ['c-frac', 'c-eq'], aRevoir: ['c-eq', 'c-frac'] },
  ],
  controles: [
    {
      id: 'k1', matiere: 'mathematiques', matiereNom: 'maths', dateControle: '2026-10-20', chapitres: ['c-frac'], titres: { 'c-frac': 'Les fractions' },
      jours: [{ date: '2026-10-18', taches: [{ id: 't1' }, { id: 't2' }] }, { date: '2026-10-19', taches: [{ id: 't3' }, { id: 't4' }] }],
      faites: { t1: true },
    },
    { id: 'k0', matiere: 'mathematiques', dateControle: '2026-10-15', jours: [], faites: {} }, // passé : ignoré
    {
      id: 'k2', matiere: 'anglais', matiereNom: 'anglais', dateControle: '2026-10-30', chapitres: [],
      jours: [{ date: '2026-10-29', taches: [{ id: 'a' }, { id: 'b' }] }], faites: ['a', 'b'], // ancienne forme (liste)
    },
  ],
};

test('dates en lettres', () => {
  assert.equal(periodeEnLettres('2026-10-12', '2026-10-18'), 'du 12 au 18 octobre');
  assert.equal(periodeEnLettres('2026-09-28', '2026-10-04'), 'du 28 septembre au 4 octobre');
  assert.equal(periodeEnLettres('2026-10-01', '2026-10-07'), 'du 1er au 7 octobre');
  assert.equal(jourCourt('2026-10-01'), '1er oct.');
  assert.equal(jourLong('2026-10-22'), 'jeudi 22 octobre');
  assert.equal(noteEnTexte(12.5), '12,5');
  assert.equal(noteEnTexte(14), '14');
});

test('bilanSemaine : ancienne version SQL → rubriques v2 à null, le reste calculé', () => {
  const b = bilanSemaine(V1, OPTS);
  assert.equal(b.version, 1);
  assert.equal(b.carnet, null);
  assert.equal(b.examens, null);
  assert.equal(b.controles, null);
  assert.equal(b.periode.debut, '2026-10-12');
  assert.equal(b.periode.fin, AUJ);
  assert.equal(b.periode.debutPrecedente, '2026-10-05');
  assert.equal(b.periode.finPrecedente, '2026-10-11');
  // 6 sessions du 12 au 18 (bord inclus), 2 du 5 au 11 (bords inclus), celle du 4 hors période.
  assert.equal(b.activite.cetteSemaine.sessions, 6);
  assert.equal(b.activite.cetteSemaine.joursActifs, 6);
  assert.equal(b.activite.semainePrecedente.sessions, 2);
  // Chapitres : fractions (id, compté une fois malgré les cartes), atomes (titre), équations (id).
  // L'examen et l'énigme ne sont pas des chapitres.
  assert.deepEqual(b.chapitres.cetteSemaine.map((c) => c.titre).sort(), ['Atomes', 'Les fractions', 'Équations'].sort());
  assert.equal(b.chapitres.semainePrecedente, 2);
  assert.ok(b.conseils.length >= 1 && b.conseils.length <= 3);
  assert.ok(b.conseils.some((c) => c.ton === 'bravo')); // 6 jours actifs → félicitations
});

test('bilanSemaine : nouvelle version SQL (carnet, examens, contrôles)', () => {
  const b = bilanSemaine(V2, OPTS);
  assert.equal(b.version, 2);
  assert.equal(b.carnet.total, 4);
  assert.equal(b.carnet.aRevoirAujourdhui, 2);
  assert.equal(b.carnet.plusTard, 2);
  assert.equal(b.carnet.ajoutesCetteSemaine, 2); // 17/10 et 12/10 (bord) ; pas le 10 ni le 11
  assert.equal(b.carnet.maitriseesCetteSemaine, 4); // 12/10 + 18/10, pas le 11
  assert.equal(b.carnet.maitriseesTotal, 9);
  assert.deepEqual(b.carnet.chapitresARevoir, [{ cle: 'c-frac', titre: 'Les fractions', nombre: 2 }]);

  assert.equal(b.examens.length, 2);
  assert.equal(b.examens[0].id, 'e2'); // plus récent d'abord
  assert.equal(b.examens[0].note, '8,5');
  assert.equal(b.examens[0].cetteSemaine, true);
  assert.deepEqual(b.examens[0].aRevoir.map((c) => c.titre), ['Équations', 'Les fractions']);
  assert.equal(b.examens[1].cetteSemaine, false);
  assert.equal(b.examens[1].aRevoir, null); // ancien enregistrement : inconnu

  assert.equal(b.controles.length, 2);
  const k1 = b.controles[0];
  assert.equal(k1.titre, 'Contrôle de maths');
  assert.equal(k1.joursRestants, 2);
  assert.equal(k1.quand, 'dans 2 jours');
  assert.deepEqual([k1.faites, k1.total], [1, 4]);
  assert.deepEqual(k1.chapitres, ['Les fractions']);
  assert.equal(b.controles[1].ratio, 1); // « faites » sous forme de liste

  // Conseils : contrôle proche peu avancé, carnet, examen faible (2 idées max) + 1 bravo.
  assert.equal(b.conseils.length, 3);
  assert.match(b.conseils[0].texte, /^Contrôle de maths dans 2 jours : le plan de révision est fait à 25 %/);
  assert.equal(b.conseils.filter((c) => c.ton === 'bravo').length, 1);
  for (const c of b.conseils) assert.doesNotMatch(c.texte, /\b(devrait|doit|aurait dû|pas assez|paresse)\b/i);
});

test('bilanSemaine : semaine vide ou profil absent', () => {
  for (const d of [null, {}, { version: 2, carnet: [], examens: [], controles: [] }]) {
    const b = bilanSemaine(d, OPTS);
    assert.equal(b.vide, true);
    assert.equal(b.activite.cetteSemaine.sessions, 0);
    assert.equal(b.chapitres.cetteSemaine.length, 0);
    assert.equal(b.conseils.length, 1);
    assert.match(b.conseils[0].texte, /10 minutes par jour/);
  }
  const v2vide = bilanSemaine({ version: 2, carnet: [], examens: [], controles: [] }, OPTS);
  assert.equal(v2vide.carnet.aRevoirAujourdhui, 0);
  assert.equal(v2vide.carnet.maitriseesCetteSemaine, null); // pas de journal daté
  assert.deepEqual(v2vide.examens, []);
  assert.deepEqual(v2vide.controles, []);
});

test('bilanSemaine : pause de plusieurs jours → conseil doux, sans reproche', () => {
  const b = bilanSemaine({ xp: 100, historique: [s('2026-10-14', 'Les fractions', { chapitreId: 'c-frac' })] }, OPTS);
  assert.equal(b.joursDepuisDerniereActivite, 4);
  assert.match(b.conseils[0].texte, /^Pas de révision depuis 4 jours : proposez 10 minutes de cartes de révision/);
});

test('bilanSemaine : données partielles ou abîmées', () => {
  const b = bilanSemaine({
    version: 2,
    historique: [null, { date: 'pas une date', titre: 'X' }, s('2026-10-18', 'Atomes')],
    carnet: [null, 'x', { prochaine: 'bientôt' }],
    examens: [{ date: '2026-10-18' }, { id: 'z', date: '2026-10-18', note20: 25 }],
    controles: [{ dateControle: '2026-10-18' }, { id: 'sans-date' }],
  }, OPTS);
  assert.equal(b.activite.cetteSemaine.sessions, 1);
  assert.equal(b.carnet.total, 1);
  assert.equal(b.carnet.aRevoirAujourdhui, 0);
  assert.equal(b.examens.length, 1);
  assert.equal(b.examens[0].note20, 20); // borné
  assert.equal(b.controles.length, 1); // le jour même compte encore
  assert.equal(b.controles[0].quand, 'aujourd’hui');
  assert.equal(b.controles[0].total, 0);
  assert.equal(b.controles[0].ratio, null);
});

test('bilanSemaine : historique plein (30 sessions) → semaine précédente marquée partielle', () => {
  const plein = Array.from({ length: 30 }, (_, i) => s(i < 20 ? '2026-10-17' : '2026-10-09', `C${i}`));
  const b = bilanSemaine({ historique: plein }, OPTS);
  assert.equal(b.activite.partielle, false);
  assert.equal(b.activite.precedentePartielle, true);
  // Pas de comparaison « plus que la semaine précédente » quand elle est incomplète.
  assert.ok(!b.conseils.some((c) => /semaine précédente/.test(c.texte)));
});

test('chapitresDeLaPeriode : même chapitre avec et sans identifiant compté une fois', () => {
  const h = [s('2026-10-18', 'Les fractions', { chapitreId: 'c-frac' }), s('2026-10-15', 'Les fractions')];
  assert.equal(chapitresDeLaPeriode(h, '2026-10-12', '2026-10-18', { jourDe: jourUTC, titreChapitre: (id) => TITRES[id] }).length, 1);
});

test('chapitresDeLaPeriode : bornes incluses', () => {
  const h = [s('2026-10-12', 'A'), s('2026-10-18', 'B'), s('2026-10-11', 'C'), s('2026-10-19', 'D')];
  assert.deepEqual(chapitresDeLaPeriode(h, '2026-10-12', '2026-10-18', { jourDe: jourUTC }).map((c) => c.titre), ['A', 'B']);
  // Filtre fourni par l'appli : seuls les vrais titres de chapitres comptent.
  assert.deepEqual(
    chapitresDeLaPeriode(h, '2026-10-12', '2026-10-18', { jourDe: jourUTC, estTitreDeChapitre: (t) => t === 'B' }).map((c) => c.titre),
    ['B'],
  );
});

test('conseilsSemaine : jamais plus de 3, toujours un encouragement s’il y en a un', () => {
  const c = conseilsSemaine({
    joursDepuisDerniereActivite: 0,
    activite: { cetteSemaine: { sessions: 1, joursActifs: 1 }, semainePrecedente: { sessions: 0 } },
    carnet: { aRevoirAujourdhui: 1, maitriseesCetteSemaine: 3 },
    controles: [{ titre: 'Contrôle de maths', quand: 'demain', joursRestants: 1, total: 4, ratio: 0 }],
    examens: [],
    periode: { fin: AUJ },
  });
  assert.equal(c.length, 3);
  assert.deepEqual(c.map((x) => x.icone), ['📅', '📒', '💪']);
  assert.equal(c[2].ton, 'bravo');
  // Avec une pause en plus : 2 idées seulement (les plus importantes) + l'encouragement.
  const c2 = conseilsSemaine({
    joursDepuisDerniereActivite: 5,
    activite: { cetteSemaine: { sessions: 0, joursActifs: 0 }, semainePrecedente: { sessions: 0 } },
    carnet: { aRevoirAujourdhui: 1, maitriseesCetteSemaine: 3 },
    controles: [{ titre: 'Contrôle de maths', quand: 'demain', joursRestants: 1, total: 4, ratio: 0 }],
  });
  assert.deepEqual(c2.map((x) => x.icone), ['📅', '🃏', '💪']);
  assert.match(c.find((x) => x.icone === '📒').texte, /1 erreur est à revoir aujourd’hui .* pour la reprendre/);
});

test('texteBilan : texte simple à partager', () => {
  const t = texteBilan(bilanSemaine(V2, OPTS), 'Léa');
  assert.match(t, /^Bilan de la semaine de Léa \(du 12 au 18 octobre\)/);
  assert.match(t, /• Activité : 6 sessions, 6 jours actifs sur 7/);
  assert.match(t, /• Carnet d’erreurs : 2 à revoir aujourd’hui, 4 maîtrisées cette semaine\./);
  assert.match(t, /• Examen sur mesure \(Mathématiques\) le 17 oct\. : 8,5\/20 \(à revoir : Équations, Les fractions\)\./);
  assert.doesNotMatch(t, /15\/20/); // examen d'une autre semaine
  assert.match(t, /• Contrôle de maths mardi 20 octobre : plan de révision fait à 25 %\./);
  assert.match(t, /Conseils :\n– /);
  const t1 = texteBilan(bilanSemaine(V1, OPTS), 'Léa');
  assert.doesNotMatch(t1, /Carnet|Examen|Contrôle/);
});
