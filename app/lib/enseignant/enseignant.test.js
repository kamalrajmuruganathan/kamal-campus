import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  normaliserCode, codeValide, erreurCode, erreurNomClasse, erreurNomEnseignant, erreurPseudo, erreurConsigne,
  erreurDateLimite, nettoyerTexte, libelleDevoir, nbExercices, echeanceEnLettres, taux, pourcent, texteScore,
  statutDevoir, tableauDeBord, exporterCsv, devoirsEleve, cacheDevoirs, chapitreConcerne, cachePerime,
  marquerFaitsQcm, resumeAccueil, ALPHABET_CODE,
} from './index.js';

const NBSP = ' ';
// Jour d'un horodatage, indépendant du fuseau de la machine de test.
const jourDe = (iso) => (iso ? String(iso).slice(0, 10) : null);
const AUJ = '2026-11-05'; // jeudi

// ── Saisies ─────────────────────────────────────────────────────────────────

test('code : normalisation et validité (alphabet sans ambiguïté)', () => {
  assert.equal(normaliserCode(' h8w-uv2 '), 'H8WUV2');
  assert.equal(codeValide('h8wuv2'), true);
  assert.equal(codeValide('H8WUV'), false);
  assert.equal(codeValide('H0WUV2'), false); // 0 exclu
  assert.equal(codeValide('HIWUV2'), false); // I exclu
  assert.equal(erreurCode('abc'), 'Le code doit comporter 6 caractères.');
  assert.match(erreurCode('ABCDE1'), /caractère impossible/);
  assert.equal(erreurCode('ABCDE2'), null);
  for (const c of 'O0I1L') assert.ok(!ALPHABET_CODE.includes(c));
  assert.equal(ALPHABET_CODE.length, 31);
});

test('nom de classe, nom affiché, consigne : longueurs', () => {
  assert.equal(nettoyerTexte('  4e   B \n maths '), '4e B maths');
  assert.match(erreurNomClasse('   '), /Donnez un nom/);
  assert.equal(erreurNomClasse('4e B'), null);
  assert.match(erreurNomClasse('x'.repeat(61)), /60/);
  assert.equal(erreurNomEnseignant(''), null);
  assert.match(erreurNomEnseignant('x'.repeat(41)), /40/);
  assert.equal(erreurConsigne('x'.repeat(300)), null);
  assert.match(erreurConsigne('x'.repeat(301)), /300/);
});

test('pseudo : mêmes règles que le SQL (accents acceptés, symboles refusés)', () => {
  assert.equal(erreurPseudo('Léa M.'), null);
  assert.equal(erreurPseudo('Zoé-Anaïs'), null);
  assert.equal(erreurPseudo("N'Golo"), null);
  assert.equal(erreurPseudo('Œdipe_2'), null);
  assert.ok(erreurPseudo('L'));
  assert.ok(erreurPseudo('x'.repeat(25)));
  assert.ok(erreurPseudo('<script>'));
  assert.ok(erreurPseudo('a@b.fr'));
  assert.ok(erreurPseudo('😀😀'));
});

test('date limite : entre aujourd’hui et dans un an', () => {
  assert.equal(erreurDateLimite(AUJ, AUJ), null);
  assert.equal(erreurDateLimite('2027-11-05', AUJ), null);
  assert.ok(erreurDateLimite('2027-11-06', AUJ));
  assert.ok(erreurDateLimite('2026-11-04', AUJ));
  assert.ok(erreurDateLimite('', AUJ));
});

// ── Libellés ────────────────────────────────────────────────────────────────

test('libellés des devoirs', () => {
  assert.equal(libelleDevoir({ type: 'fiche' }), 'Lire la fiche puis faire le QCM');
  assert.equal(libelleDevoir({ type: 'qcm' }), 'Faire le QCM');
  assert.equal(libelleDevoir({ type: 'exercices', nb_exercices: 5 }), `Faire 5${NBSP}exercices`);
  assert.equal(libelleDevoir({ type: 'exercices', nb_exercices: 1 }), 'Faire 1 exercice');
  assert.equal(nbExercices({ nb_exercices: 99 }), 20);
  assert.equal(nbExercices({}), 5);
});

test('échéance en lettres', () => {
  assert.equal(echeanceEnLettres('2026-11-05', AUJ), 'pour aujourd’hui');
  assert.equal(echeanceEnLettres('2026-11-06', AUJ), 'pour demain');
  assert.equal(echeanceEnLettres('2026-11-09', AUJ), 'pour lundi 9 novembre');
  assert.equal(echeanceEnLettres('2026-12-01', AUJ), 'pour mardi 1er décembre');
  assert.equal(echeanceEnLettres('2026-11-04', AUJ), 'en retard d’un jour');
  assert.equal(echeanceEnLettres('2026-11-02', AUJ), `en retard de 3${NBSP}jours`);
});

test('taux, pourcentage et score', () => {
  assert.equal(taux({ score: 9, total: 10 }), 0.9);
  assert.equal(taux({ score: 0, total: 0 }), null);
  assert.equal(taux(null), null);
  assert.equal(pourcent(0.734), `73${NBSP}%`);
  assert.equal(pourcent(null), '—');
  assert.equal(texteScore({ type: 'qcm' }, { score: 14, total: 20 }), '14/20');
  assert.equal(texteScore({ type: 'exercices' }, { score: 1, total: 3 }), '1 réussi sur 3');
  assert.equal(texteScore({ type: 'exercices' }, { score: 4, total: 5 }), '4 réussis sur 5');
  assert.equal(texteScore({ type: 'qcm' }, null), '');
});

test('statut d’un devoir', () => {
  const d = { pour_le: '2026-11-05' };
  assert.equal(statutDevoir(d, null, '2026-11-05', jourDe), 'a_faire');
  assert.equal(statutDevoir(d, null, '2026-11-06', jourDe), 'en_retard');
  assert.equal(statutDevoir(d, { score: 2, total: 3, fait_le: null }, '2026-11-04', jourDe), 'commence');
  assert.equal(statutDevoir(d, { score: 2, total: 3, fait_le: null }, '2026-11-07', jourDe), 'en_retard');
  assert.equal(statutDevoir(d, { score: 8, total: 10, fait_le: '2026-11-05T17:00:00Z' }, '2026-11-09', jourDe), 'fait');
  assert.equal(statutDevoir(d, { score: 8, total: 10, fait_le: '2026-11-06T08:00:00Z' }, '2026-11-09', jourDe), 'fait_retard');
});

// ── Tableau de bord ─────────────────────────────────────────────────────────

const CLASSE = {
  eleves: [
    { id: 'm1', pseudo: 'Léa', rejoint_le: '2026-10-01T10:00:00Z' },
    { id: 'm2', pseudo: 'Tom', rejoint_le: '2026-10-01T10:00:00Z' },
    { id: 'm3', pseudo: 'Inès', rejoint_le: '2026-11-04T10:00:00Z' }, // arrivée après le devoir d1
  ],
  devoirs: [
    { id: 'd1', chapitre_id: 'quatrieme-maths-puissances', type: 'qcm', pour_le: '2026-11-03', cree_le: '2026-10-30T10:00:00Z' },
    { id: 'd2', chapitre_id: 'quatrieme-pc-lumiere', type: 'exercices', nb_exercices: 3, pour_le: '2026-11-10', cree_le: '2026-11-02T10:00:00Z' },
  ],
  resultats: [
    { devoir: 'd1', membre: 'm1', score: 8, total: 20, fait_le: '2026-11-02T18:00:00Z' },
    { devoir: 'd1', membre: 'm2', score: 10, total: 20, fait_le: '2026-11-04T18:00:00Z' }, // en retard
    { devoir: 'd2', membre: 'm1', score: 3, total: 3, fait_le: '2026-11-05T09:00:00Z' },
    { devoir: 'd2', membre: 'm2', score: 1, total: 2, fait_le: null }, // commencé
  ],
};

test('tableau de bord : taux de devoirs faits, moyennes, retards', () => {
  const tb = tableauDeBord(CLASSE, AUJ, { jourDe });
  assert.equal(tb.nbEleves, 3);
  assert.equal(tb.nbDevoirs, 2);
  // d1 : Léa et Tom concernés (Inès arrivée après) ; d2 : les trois.
  assert.equal(tb.attendus, 5);
  assert.equal(tb.faits, 3);
  assert.equal(tb.tauxFaits, 3 / 5);
  // Devoirs du plus récent au plus ancien.
  assert.deepEqual(tb.devoirs.map((l) => l.devoir.id), ['d2', 'd1']);
  const [l2, l1] = tb.devoirs;
  assert.equal(l1.concernes, 2);
  assert.equal(l1.faits, 2);
  assert.equal(l1.moyenne, (0.4 + 0.5) / 2);
  assert.equal(l1.cellules.m3.statut, 'non_concerne');
  assert.equal(l1.cellules.m2.statut, 'fait_retard');
  assert.equal(l2.faits, 1);
  assert.equal(l2.commences, 1);
  assert.equal(l2.cellules.m2.texte, '1 réussi sur 2');
  assert.equal(l2.cellules.m3.statut, 'a_faire');
  // Chapitre difficile : puissances (moyenne 45 % sur 2 résultats) ; lumière n'a qu'un résultat.
  assert.deepEqual(tb.chapitresDifficiles.map((c) => c.chapitreId), ['quatrieme-maths-puissances']);
  assert.equal(tb.elevesEnRetard.length, 0);
});

test('tableau de bord : élèves en retard, du plus en retard au moins en retard', () => {
  const tb = tableauDeBord(CLASSE, '2026-11-12', { jourDe });
  // d2 est échu : Tom (commencé, pas fini) et Inès (rien) sont en retard.
  assert.deepEqual(tb.elevesEnRetard.map((x) => x.eleve.pseudo), ['Inès', 'Tom']);
  assert.equal(tb.elevesEnRetard[0].devoirs[0].id, 'd2');
  const tom = tb.eleves.find((e) => e.eleve.id === 'm2');
  assert.equal(tom.faits, 1);
  assert.equal(tom.enRetard, 1);
  assert.equal(tom.moyenne, 0.5);
});

test('tableau de bord : classe vide ou données manquantes', () => {
  const tb = tableauDeBord({}, AUJ);
  assert.equal(tb.tauxFaits, null);
  assert.deepEqual(tb.devoirs, []);
  assert.deepEqual(tb.chapitresDifficiles, []);
  const sansDevoir = tableauDeBord({ eleves: CLASSE.eleves, devoirs: [], resultats: [] }, AUJ, { jourDe });
  assert.equal(sansDevoir.eleves.length, 3);
  assert.equal(sansDevoir.eleves[0].moyenne, null);
});

test('export CSV : une ligne par élève, séparateur « ; »', () => {
  const tb = tableauDeBord(CLASSE, AUJ, { jourDe });
  const csv = exporterCsv(tb, (id) => (id === 'quatrieme-maths-puissances' ? 'Puissances; rappels' : 'Lumière'));
  const lignes = csv.split('\n');
  assert.equal(lignes.length, 4);
  assert.equal(lignes[0], 'Élève;Lumière (2026-11-10);"Puissances; rappels (2026-11-03)";Devoirs faits;Moyenne');
  assert.equal(lignes[1], 'Léa;3 réussis sur 3;8/20;2/2;70 %');
  assert.equal(lignes[2], 'Tom;1 réussi sur 2;10/20 (en retard);1/2;50 %');
  assert.equal(lignes[3], 'Inès;À faire;;0/1;');
});

// ── Côté élève ──────────────────────────────────────────────────────────────

const ELEVE = {
  classes: [
    { id: 'c1', nom: '4e B – maths', enseignant_nom: 'Mme Martin', archivee: false },
    { id: 'c2', nom: 'Ancienne', archivee: true },
  ],
  devoirs: [
    { id: 'd1', classe: 'c1', chapitre_id: 'a', type: 'qcm', pour_le: '2026-11-06', cree_le: '1', score: null, total: null, fait_le: null },
    { id: 'd2', classe: 'c1', chapitre_id: 'b', type: 'exercices', nb_exercices: 4, pour_le: '2026-11-04', cree_le: '2', score: 1, total: 2, fait_le: null },
    { id: 'd3', classe: 'c1', chapitre_id: 'c', type: 'fiche', pour_le: '2026-11-05', cree_le: '3', score: 18, total: 20, fait_le: '2026-11-05T07:00:00Z' },
    { id: 'd4', classe: 'c2', chapitre_id: 'd', type: 'qcm', pour_le: '2026-11-06', cree_le: '4' },
  ],
};

test('devoirs de l’élève : à faire (retards d’abord) et faits', () => {
  const { aFaire, faits } = devoirsEleve(ELEVE, AUJ, { jourDe });
  assert.deepEqual(aFaire.map((d) => d.id), ['d2', 'd1']);
  assert.equal(aFaire[0].statut, 'en_retard');
  assert.equal(aFaire[0].echeance, 'en retard d’un jour');
  assert.equal(aFaire[0].libelle, `Faire 4${NBSP}exercices`);
  assert.equal(aFaire[0].score, '1 réussi sur 2');
  assert.equal(aFaire[1].echeance, 'pour demain');
  assert.equal(aFaire[1].classeNom, '4e B – maths');
  assert.deepEqual(faits.map((d) => d.id), ['d3']);
  assert.equal(faits[0].score, '18/20');
});

test('cache : chapitres concernés, péremption, accueil', () => {
  const cache = cacheDevoirs(ELEVE, '2026-11-05T08:00:00Z');
  assert.deepEqual(cache.qcm.sort(), ['a', 'c']); // pas « d » (classe archivée)
  assert.deepEqual(cache.exercices, ['b']);
  assert.equal(chapitreConcerne(cache, 'a', 'qcm'), true);
  assert.equal(chapitreConcerne(cache, 'b', 'qcm'), false);
  assert.equal(chapitreConcerne(cache, 'b', 'exercice'), true);
  assert.equal(chapitreConcerne(null, 'a', 'qcm'), false);
  assert.equal(cachePerime(cache, new Date('2026-11-05T13:00:00Z')), false);
  assert.equal(cachePerime(cache, new Date('2026-11-05T15:00:00Z')), true);
  assert.equal(cachePerime(null, new Date()), true);
  assert.equal(resumeAccueil(cache, AUJ), `2${NBSP}devoirs à faire, dont 1 en retard`);
  const apres = marquerFaitsQcm(cache, 'a');
  assert.equal(resumeAccueil(apres, AUJ), `1${NBSP}devoir en retard`);
  assert.equal(cache.devoirs.find((d) => d.id === 'd1').fait, false); // pas de mutation
});

test('accueil : textes selon la situation', () => {
  const base = { maj: 'x', nbClasses: 1, qcm: [], exercices: [] };
  assert.match(resumeAccueil(null, AUJ), /Rejoins la classe/);
  assert.equal(resumeAccueil({ ...base, devoirs: [] }, AUJ), 'Aucun devoir à faire pour le moment 👍');
  assert.equal(resumeAccueil({ ...base, devoirs: [{ pour_le: AUJ, fait: false }] }, AUJ), `1${NBSP}devoir pour aujourd’hui`);
  assert.equal(resumeAccueil({ ...base, devoirs: [{ pour_le: '2026-11-06', fait: false }, { pour_le: '2026-11-20', fait: false }] }, AUJ),
    `2${NBSP}devoirs à faire, dont 1 pour demain`);
  assert.equal(resumeAccueil({ ...base, devoirs: [{ pour_le: '2026-11-20', fait: false }] }, AUJ), `1${NBSP}devoir à faire`);
});
