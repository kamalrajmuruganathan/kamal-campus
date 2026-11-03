import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bilanSemaine, texteBilan, conseilsSemaine, periodeEnLettres, jourCourt, jourLong, noteEnTexte, texteDerniereActivite, resumeEnfant } from './index.js';

const jourDe = (iso) => (iso ? String(iso).slice(0, 10) : null); // dates déjà « locales » dans ces tests
const AUJ = '2026-11-03'; // mardi
const sess = (jour, extra = {}) => ({ date: `${jour}T10:00:00.000Z`, titre: 'QCM', points: 10, matiere: 'maths', ...extra });

test('bilan : « cette semaine » = 7 derniers jours (aujourd’hui inclus), « précédente » = les 7 d’avant', () => {
  const historique = [
    sess('2026-11-03'), sess('2026-10-28'), // J et J−6 : cette semaine
    sess('2026-10-27'), sess('2026-10-21'), // J−7 et J−13 : semaine précédente
    sess('2026-10-20'), // J−14 : hors des deux
  ];
  const b = bilanSemaine({ historique }, { aujourdhui: AUJ, jourDe });
  assert.deepEqual(b.periode, { debut: '2026-10-28', fin: AUJ, debutPrecedente: '2026-10-21', finPrecedente: '2026-10-27', texte: 'du 28 octobre au 3 novembre' });
  assert.equal(b.activite.cetteSemaine.sessions, 2);
  assert.equal(b.activite.semainePrecedente.sessions, 2);
  assert.equal(b.activite.cetteSemaine.joursActifs, 2);
  assert.equal(b.activite.cetteSemaine.xp, 20);
});

test('dates en lettres : 1er, changement de mois et d’année', () => {
  assert.equal(periodeEnLettres('2026-12-29', '2027-01-04'), 'du 29 décembre au 4 janvier');
  assert.equal(periodeEnLettres('2026-10-26', '2026-11-01'), 'du 26 octobre au 1er novembre');
  assert.equal(periodeEnLettres('2026-02-01', '2026-02-07'), 'du 1er au 7 février');
  assert.equal(jourCourt('2026-08-01'), '1er août');
  assert.equal(jourCourt('2026-02-14'), '14 févr.');
  assert.equal(jourLong('2026-11-01'), 'dimanche 1er novembre');
  assert.equal(jourLong('2028-02-29'), 'mardi 29 février');
  assert.equal(jourLong('2026-13-01'.slice(0, 5)), '');
});

test('notes : arrondi au demi-point, virgule décimale', () => {
  assert.deepEqual([12.24, 12.25, 12.74, 12.75, 0, 20, 'x'].map(noteEnTexte), ['12', '12,5', '12,5', '13', '0', '20', '0']);
});

test('texte à partager : singuliers et pluriels exacts', () => {
  const un = bilanSemaine({ historique: [sess(AUJ)], carnet: [], carnetMaitriseesJours: { [AUJ]: 1 } }, { aujourdhui: AUJ, jourDe });
  const t1 = texteBilan(un, 'Léa');
  assert.ok(t1.includes('• Activité : 1 session, 1 jour actif sur 7, 10 XP (semaine précédente : 0 session).'), t1);
  assert.ok(t1.includes('1 maîtrisée cette semaine'), t1);
  assert.ok(t1.startsWith('Bilan de la semaine de Léa (du 28 octobre au 3 novembre)'));
  const deux = bilanSemaine({ historique: [sess(AUJ), sess('2026-11-02'), sess('2026-10-30')], carnet: [], carnetMaitriseesJours: { [AUJ]: 2 } }, { aujourdhui: AUJ, jourDe });
  const t2 = texteBilan(deux);
  assert.ok(t2.includes('3 sessions, 3 jours actifs sur 7'), t2);
  assert.ok(t2.includes('2 maîtrisées cette semaine'));
  assert.ok(t2.startsWith('Bilan de la semaine de votre enfant'));
  assert.ok(!/ {2}| ,| \.|\.\./.test(t2.replace(/…/g, '')), t2);
});

test('conseils : « 1 erreur est à revoir … la reprendre » / « 3 erreurs sont à revoir … les reprendre »', () => {
  const base = { activite: { cetteSemaine: { sessions: 1, joursActifs: 1, xp: 10 }, semainePrecedente: { sessions: 0 } }, joursDepuisDerniereActivite: 0 };
  const un = conseilsSemaine({ ...base, carnet: { aRevoirAujourdhui: 1 } });
  assert.ok(un.some((c) => c.texte.startsWith('1 erreur est à revoir aujourd’hui') && c.texte.includes('pour la reprendre')));
  const trois = conseilsSemaine({ ...base, carnet: { aRevoirAujourdhui: 3 } });
  assert.ok(trois.some((c) => c.texte.startsWith('3 erreurs sont à revoir') && c.texte.includes('pour les reprendre')));
  for (const c of [...un, ...trois]) assert.ok(!/ {2}|\d [%]/.test(c.texte), c.texte);
});

test('conseils : examen raté avec un ou deux chapitres à revoir (accord du verbe)', () => {
  const periode = { fin: AUJ };
  const ex = (aRevoir) => ({ date: '2026-11-01', note20: 7, note: '7', aRevoir });
  const un = conseilsSemaine({ periode, examens: [ex([{ titre: 'Fractions' }])] });
  assert.ok(un.some((c) => c.texte.includes('« Fractions » est à revoir')), JSON.stringify(un));
  const deux = conseilsSemaine({ periode, examens: [ex([{ titre: 'Fractions' }, { titre: 'Aires' }, { titre: 'Volumes' }])] });
  assert.ok(deux.some((c) => c.texte.includes('« Fractions » et « Aires » sont à revoir')), JSON.stringify(deux));
  // Examen trop ancien (plus de 14 jours) : pas de conseil.
  assert.equal(conseilsSemaine({ periode, examens: [{ ...ex([{ titre: 'X' }]), date: '2026-10-19' }] }).some((c) => c.icone === '🎓'), false);
});

test('conseils : contrôle proche, plan en retard → idée ; plan avancé → bravo (pourcentage avec espace insécable)', () => {
  const c = (ratio, joursRestants) => ({ titre: 'Contrôle de maths', quand: joursRestants === 1 ? 'demain' : `dans ${joursRestants} jours`, joursRestants, ratio, total: 4 });
  const retard = conseilsSemaine({ controles: [c(0.25, 2)] });
  assert.ok(retard[0].texte.startsWith('Contrôle de maths dans 2 jours : le plan de révision est fait à 25 %.'), retard[0].texte);
  const avance = conseilsSemaine({ controles: [c(0.75, 1)] });
  assert.ok(avance.some((x) => x.ton === 'bravo' && x.texte === 'Contrôle de maths demain : le plan de révision avance bien (75 % fait).'));
  assert.equal(conseilsSemaine({ controles: [c(0, 9)] }).some((x) => x.icone === '📅'), false); // plus d'une semaine
});

test('dernière activité : aujourd’hui, hier, il y a N jours ; jamais négatif', () => {
  assert.deepEqual([null, 0, 1, 2, 30].map(texteDerniereActivite), ['aucune activité enregistrée', 'aujourd’hui', 'hier', 'il y a 2 jours', 'il y a 30 jours']);
  const r = resumeEnfant({ historique: [sess('2026-11-05')] }, { aujourdhui: AUJ, jourDe });
  assert.equal(r.joursDepuisDerniereActivite, 0); // horloge de l'enfant en avance
});

test('bilan : n’importe quel profil abîmé ne fait pas planter le bilan ni le texte', () => {
  const abimes = [null, {}, { historique: 'x' }, { historique: [null, 5, { date: 'zz' }] }, { carnet: [null, { prochaine: 3 }], examens: [{ date: 'x' }], controles: [{ dateControle: AUJ, jours: [{ taches: [null, { id: 't' }] }], faites: ['t'] }] }];
  for (const p of abimes) {
    const b = bilanSemaine(p, { aujourdhui: AUJ, jourDe });
    assert.equal(typeof texteBilan(b), 'string');
    assert.ok(b.conseils.length <= 3);
  }
});
