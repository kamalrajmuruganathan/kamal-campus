/**
 * Synchronisation entre appareils : fusion de deux profils (src/cloud/fusion.js).
 * Règle : AUCUNE perte de progression, jamais d'XP compté deux fois, aucun plantage.
 * Propriétés vérifiées sur des profils tirés au hasard (graine fixe → reproductible).
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fusionnerProfils } from '../../src/cloud/fusion.js';
import { etatSemaine } from '../classement/index.js';
import { appliquerBonusSemaine, bonusAVerser } from '../defisSemaine/index.js';
import { MAX_CARNET } from '../carnet/index.js';

// ── Générateur pseudo-aléatoire reproductible (mulberry32) ──────────────────
function rng(graine) {
  let a = graine >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const ent = (r, n) => Math.floor(r() * n);
const choix = (r, l) => l[ent(r, l.length)];
const pad = (n) => String(n).padStart(2, '0');
const jourDe = (k) => { // k jours après le 2026-09-01
  const d = new Date(Date.UTC(2026, 8, 1 + k));
  return d.toISOString().slice(0, 10);
};
const sousEnsemble = (r, l, p = 0.5) => l.filter(() => r() < p);

const CHAPS = Array.from({ length: 12 }, (_, i) => `ch${i}`);
const MATS = ['mathematiques', 'physique-chimie', 'francais', 'anglais'];

/** Un profil plausible (ou partiel, ou d'ancien format) tiré au hasard. */
function profilAuHasard(r) {
  const p = {};
  const jour = jourDe(ent(r, 60));
  const champ = (nom, valeur) => { if (r() < 0.9) p[nom] = valeur; };
  champ('version', 1);
  champ('xp', ent(r, 5000));
  champ('qcmTermines', ent(r, 80));
  champ('reponsesJustes', ent(r, 900));
  champ('reponsesTotal', 900 + ent(r, 300));
  champ('sansFautes', ent(r, 10));
  champ('meilleureSerie', ent(r, 25));
  champ('flashcardsRevues', ent(r, 300));
  champ('flashcardsConnues', ent(r, 200));
  champ('enigmesResolues', ent(r, 60));
  champ('xpParMatiere', Object.fromEntries(sousEnsemble(r, MATS).map((m) => [m, ent(r, 2000)])));
  champ('favoris', sousEnsemble(r, CHAPS, 0.2));
  champ('chapitres', Object.fromEntries(sousEnsemble(r, CHAPS, 0.4).map((c) => [c, {
    titre: `Titre ${c}`, meilleurScore: ent(r, 11) / 10, tentatives: 1 + ent(r, 9),
  }])));
  champ('historique', Array.from({ length: ent(r, 40) }, (_, i) => ({
    date: `${jourDe(ent(r, 60))}T${pad(ent(r, 24))}:${pad(ent(r, 3) * 20)}:${pad(i)}.000Z`,
    titre: choix(r, ['QCM A', 'QCM B', 'Cartes — X', 'Énigme']),
    justes: ent(r, 10), total: 10, points: ent(r, 4) * 10, matiere: choix(r, MATS),
  })).sort((x, y) => y.date.localeCompare(x.date)).slice(0, 30));
  champ('objectifQuotidien', choix(r, [30, 50, 100]));
  const dernierValide = r() < 0.8 ? jourDe(ent(r, 60)) : null;
  champ('dernierJourValide', dernierValide);
  champ('jourCourant', dernierValide && r() < 0.5 ? dernierValide : jourDe(ent(r, 60)));
  champ('xpDuJour', ent(r, 150));
  champ('serieJours', ent(r, 20));
  champ('meilleureSerieJours', 20 + ent(r, 20));
  champ('onboardingFait', r() < 0.7);
  champ('prenom', choix(r, ['', 'Léa'])); // un même élève : un seul prénom non vide
  champ('langue', choix(r, ['fr', 'en']));
  champ('srs', Object.fromEntries(sousEnsemble(r, ['c1', 'c2', 'c3', 'c4', 'c5']).map((k) => [k, {
    rep: ent(r, 4), interval: ent(r, 10), ease: 2.5, due: jourDe(ent(r, 60)),
  }])));
  champ('planning', sousEnsemble(r, [1, 2, 3]).map((id) => ({ id, jour: id, heure: `1${id}:00` })));
  champ('erreurs', sousEnsemble(r, ['e1', 'e2', 'e3']).map((cle) => ({ cle, matiere: null, question: { enonce: cle } })));
  champ('carnet', sousEnsemble(r, ['q:1', 'q:2', 'q:3', 'e:ch1#4', 'e:ch2#7']).map((cle) => ({
    cle, type: cle[0] === 'q' ? 'qcm' : 'exo', etape: ent(r, 3), prochaine: jourDe(ent(r, 60)), echecs: 1 + ent(r, 3),
    ajoute: jourDe(ent(r, 60)), maj: `${jourDe(ent(r, 60))}T10:00:00.000Z`,
  })));
  champ('carnetMaitrisees', ent(r, 40));
  champ('carnetMaitriseesJours', Object.fromEntries(sousEnsemble(r, [3, 5, 9]).map((k) => [jourDe(k), 1 + ent(r, 4)])));
  champ('exosReussis', Object.fromEntries(sousEnsemble(r, CHAPS, 0.3).map((c) => [c, sousEnsemble(r, [1, 2, 3, 4, 5, 6])])));
  champ('dictees', Object.fromEntries(sousEnsemble(r, ['d1', 'd2', 'd3']).map((id) => [id, {
    meilleure: ent(r, 11), derniere: ent(r, 11), essais: 1 + ent(r, 5), date: jourDe(ent(r, 60)),
  }])));
  const lundi = choix(r, ['2026-10-19', '2026-10-26']);
  champ('ligue', { semaine: lundi, xpSemaine: Math.min(ent(r, 400), p.xp || 0), // jamais plus que l'XP total
    palier: ent(r, 5), dernier: null });
  champ('controles', sousEnsemble(r, ['k1', 'k2']).map((id) => ({
    id, dateControle: jourDe(40 + id.length * 7), faites: Object.fromEntries(sousEnsemble(r, ['t1', 't2', 't3']).map((t) => [t, true])),
  })));
  // Un examen (ou une épreuve) a un id unique : même id → même contenu sur les deux appareils.
  champ('examens', sousEnsemble(r, Array.from({ length: 40 }, (_, i) => i), 0.5).map((i) => ({
    id: `x${i}`, date: jourDe((i * 7) % 60), note20: (i * 3) % 21,
  })));
  champ('semaine', { debut: lundi, compteurs: { exos: ent(r, 20), qcm: ent(r, 10) }, jours: sousEnsemble(r, [lundi]), recompenses: sousEnsemble(r, ['exos', 'qcm']) });
  champ('defisSemaineReussis', ent(r, 15));
  champ('epreuves', sousEnsemble(r, ['p1', 'p2', 'p3']).map((id) => ({ id, sujetId: id, fin: 1000 * Number(id.slice(1)), date: jourDe(Number(id.slice(1))), note20: 12 })));
  if (r() < 0.7) {
    champ('semaineXp', '2026-10-26');
    champ('xpDebutSemaine', Math.max(0, (p.xp || 0) - ent(r, 300)));
  }
  return p;
}

// Remarque : un plan de contrôle, un créneau du planning, un examen ou une épreuve ont un id unique et
// leur contenu ne change pas d'un appareil à l'autre (seules les cases cochées changent, et elles sont
// réunies). S'ils étaient modifiés différemment sur deux appareils, l'appareil le plus récent l'emporterait
// (sans horodatage par élément, la fusion à trois appareils ne serait alors plus strictement associative).
const N = 400; // tirages par propriété
function* paires(graine, n = N) {
  const r = rng(graine);
  for (let i = 0; i < n; i += 1) yield [profilAuHasard(r), profilAuHasard(r), profilAuHasard(r), i];
}

/** Forme canonique (ordre des clés et des collections sans importance) pour comparer deux fusions. */
function canon(x) {
  if (Array.isArray(x)) {
    const l = x.map(canon);
    return l.every((e) => e && typeof e === 'object' && e.id != null) || l.every((e) => e && typeof e === 'object' && e.cle != null)
      ? l.sort((u, v) => String(u.id ?? u.cle).localeCompare(String(v.id ?? v.cle)))
      : l.every((e) => typeof e !== 'object') ? [...l].sort() : l;
  }
  if (x && typeof x === 'object') {
    const o = {};
    for (const k of Object.keys(x).sort()) if (x[k] !== undefined) o[k] = canon(x[k]);
    return o;
  }
  return x;
}

// ── Propriétés ──────────────────────────────────────────────────────────────

test('fusion(a, a) = a (idempotence) sur 400 profils au hasard', () => {
  for (const [a] of paires(1)) {
    const f = fusionnerProfils(a, structuredClone(a));
    for (const k of Object.keys(a)) {
      assert.deepEqual(canon(f[k]), canon(a[k]), `champ ${k} modifié par fusion(a, a)`);
    }
  }
});

test('fusion(a, b) équivaut à fusion(b, a) (ordre des appareils sans importance)', () => {
  for (const [a, b, , i] of paires(2)) {
    assert.deepEqual(canon(fusionnerProfils(a, b)), canon(fusionnerProfils(b, a)), `tirage ${i}`);
  }
});

test('fusion(fusion(a, b), c) équivaut à fusion(a, fusion(b, c)) (trois appareils)', () => {
  for (const [a, b, c, i] of paires(3)) {
    const g = fusionnerProfils(fusionnerProfils(a, b), c);
    const d = fusionnerProfils(a, fusionnerProfils(b, c));
    assert.deepEqual(canon(g), canon(d), `tirage ${i}`);
  }
});

test('re-synchroniser ne change rien : fusion(fusion(a, b), b) = fusion(a, b)', () => {
  for (const [a, b, , i] of paires(4)) {
    const f = fusionnerProfils(a, b);
    assert.deepEqual(canon(fusionnerProfils(f, b)), canon(f), `tirage ${i}`);
    assert.deepEqual(canon(fusionnerProfils(f, a)), canon(f), `tirage ${i}`);
  }
});

test('aucune perte : compteurs, chapitres, carnet, dictées, examens, épreuves, contrôles, semaine…', () => {
  const COMPTEURS = ['xp', 'qcmTermines', 'reponsesJustes', 'reponsesTotal', 'sansFautes', 'meilleureSerie',
    'flashcardsRevues', 'flashcardsConnues', 'enigmesResolues', 'meilleureSerieJours', 'carnetMaitrisees',
    'defisSemaineReussis'];
  for (const [a, b, , i] of paires(5)) {
    const f = fusionnerProfils(a, b);
    for (const p of [a, b]) {
      for (const k of COMPTEURS) assert.ok((f[k] || 0) >= (p[k] || 0), `${k} perdu (tirage ${i})`);
      // XP jamais additionné deux fois : la fusion ne dépasse pas le plus grand des deux.
      assert.equal(f.xp || 0, Math.max(a.xp || 0, b.xp || 0));
      for (const [m, v] of Object.entries(p.xpParMatiere || {})) assert.ok(f.xpParMatiere[m] >= v);
      for (const c of p.favoris || []) assert.ok(f.favoris.includes(c));
      for (const [id, c] of Object.entries(p.chapitres || {})) {
        assert.ok(f.chapitres[id], `chapitre ${id} perdu`);
        assert.ok(f.chapitres[id].meilleurScore >= c.meilleurScore);
        assert.ok(f.chapitres[id].tentatives >= c.tentatives);
      }
      for (const [id, l] of Object.entries(p.exosReussis || {})) for (const e of l) assert.ok(f.exosReussis[id].includes(e));
      for (const e of p.carnet || []) assert.ok(f.carnet.some((x) => x.cle === e.cle), `carnet ${e.cle} perdu`);
      for (const [j, v] of Object.entries(p.carnetMaitriseesJours || {})) assert.ok(f.carnetMaitriseesJours[j] >= v);
      for (const [id, d] of Object.entries(p.dictees || {})) {
        assert.ok(f.dictees[id].meilleure >= d.meilleure);
        assert.ok(f.dictees[id].essais >= d.essais);
      }
      for (const k of Object.keys(p.srs || {})) assert.ok(f.srs[k], `carte ${k} perdue`);
      for (const pl of p.planning || []) assert.ok(f.planning.some((x) => x.id === pl.id));
      for (const pl of p.controles || []) {
        const g = f.controles.find((x) => x.id === pl.id);
        assert.ok(g, `contrôle ${pl.id} perdu`);
        for (const t of Object.keys(pl.faites)) assert.equal(g.faites[t], true, 'case cochée perdue');
      }
      for (const e of p.epreuves || []) assert.ok(f.epreuves.some((x) => x.id === e.id));
      for (const k of ['onboardingFait']) if (p[k]) assert.equal(f[k], true);
      if (p.prenom) assert.ok(f.prenom);
    }
    // Examens : on garde les 30 plus récents de l'union.
    const tous = new Map([...(a.examens || []), ...(b.examens || [])].map((e) => [e.id, e]));
    if (tous.size) {
      assert.equal(f.examens.length, Math.min(30, tous.size));
      const plusVieuxGarde = f.examens[f.examens.length - 1].date;
      for (const e of tous.values()) if (e.date > plusVieuxGarde) assert.ok(f.examens.some((x) => x.id === e.id));
    }
    // Historique : 30 au plus, du plus récent au plus ancien.
    assert.ok(f.historique.length <= 30);
    for (let k = 1; k < f.historique.length; k += 1) assert.ok(f.historique[k - 1].date >= f.historique[k].date);
  }
});

test('série de jours : jamais perdue, et l’XP du jour reste celui du jour le plus récent', () => {
  for (const [a, b, , i] of paires(6)) {
    const f = fusionnerProfils(a, b);
    const dj = [a.dernierJourValide, b.dernierJourValide].filter(Boolean).sort().pop() || null;
    assert.equal(f.dernierJourValide ?? null, dj, `tirage ${i}`);
    // La série retenue est celle de l'appareil qui a validé le jour le plus récent (max si les deux).
    const series = [a, b].filter((p) => p.dernierJourValide && p.dernierJourValide === dj).map((p) => p.serieJours || 0);
    if (series.length) assert.equal(f.serieJours, Math.max(...series), `tirage ${i}`);
    const jc = [a.jourCourant, b.jourCourant].filter(Boolean).sort().pop() || null;
    assert.equal(f.jourCourant ?? null, jc, `tirage ${i}`);
    const xps = [a, b].filter((p) => p.jourCourant && p.jourCourant === jc).map((p) => p.xpDuJour || 0);
    if (xps.length) assert.equal(f.xpDuJour, Math.max(...xps), `tirage ${i}`);
  }
});

test('série : l’appareil qui a validé hier n’efface pas l’XP gagné aujourd’hui sur l’autre', () => {
  const a = { xp: 500, dernierJourValide: '2026-11-02', serieJours: 4, jourCourant: '2026-11-02', xpDuJour: 60 };
  const b = { xp: 300, dernierJourValide: '2026-10-20', serieJours: 1, jourCourant: '2026-11-03', xpDuJour: 35 };
  const f = fusionnerProfils(a, b);
  assert.equal(f.jourCourant, '2026-11-03');
  assert.equal(f.xpDuJour, 35);
  assert.equal(f.dernierJourValide, '2026-11-02');
  assert.equal(f.serieJours, 4);
});

test('ligue : semaine la plus récente ; même semaine → XP de la semaine max, sans addition', () => {
  for (const [a, b, , i] of paires(7)) {
    const f = fusionnerProfils(a, b);
    const la = a.ligue || {}; const lb = b.ligue || {};
    const s = [la.semaine, lb.semaine].filter(Boolean).sort().pop();
    if (!s) continue;
    assert.equal(f.ligue.semaine, s, `tirage ${i}`);
    const xs = [la, lb].filter((l) => l.semaine === s).map((l) => l.xpSemaine || 0);
    assert.equal(f.ligue.xpSemaine, Math.max(...xs), `tirage ${i}`);
  }
});

test('classement entre amis : l’XP de la semaine fusionné ne compte pas l’ancien XP de l’autre appareil', () => {
  // Appareil A : élève ancien, 1 000 XP, rien gagné cette semaine sur A.
  const a = { xp: 1000, semaineXp: '2026-10-26', xpDebutSemaine: 1000, jourCourant: '2026-10-20' };
  // Appareil B : nouveau téléphone, 40 XP gagnés cette semaine (démarré à 0).
  const b = { xp: 40, semaineXp: '2026-10-26', xpDebutSemaine: 0, jourCourant: '2026-10-28' };
  const f = fusionnerProfils(a, b);
  assert.equal(f.xp, 1000);
  const e = etatSemaine(f, '2026-10-28');
  assert.equal(e.xpSemaine, 40, 'l’XP de la semaine doit rester 40 (max des deux), pas 1 000');
  // Propriété : sur la même semaine, XP de la semaine fusionné = max des deux.
  for (const [p, q, , i] of paires(8)) {
    const g = fusionnerProfils(p, q);
    const semaine = (x) => etatSemaine(x, '2026-10-28').xpSemaine;
    if (p.semaineXp === '2026-10-26' && q.semaineXp === '2026-10-26') {
      assert.equal(semaine(g), Math.max(semaine(p), semaine(q)), `tirage ${i}`);
    }
    assert.ok(semaine(g) <= (g.xp || 0));
  }
});

test('défis de la semaine : bonus versé sur un appareil, jamais reversé après la synchro', () => {
  const jour = '2026-10-21';
  const base = { xp: 100, niveauParDefaut: '4e', semaine: { debut: '2026-10-19', compteurs: { exos: 99, qcm: 99, qcm80: 99, sansFaute: 99, dictees: 99, cartes: 99, enigmes: 99 }, jours: ['2026-10-19', '2026-10-20', '2026-10-21', '2026-10-22'], recompenses: [] }, ligue: { semaine: '2026-10-19', xpSemaine: 999 }, carnetMaitriseesJours: { '2026-10-20': 9 } };
  const a = appliquerBonusSemaine(base, jour);
  assert.ok(a.xp > base.xp);
  const f = fusionnerProfils(a, base);
  assert.equal(f.xp, a.xp);
  assert.equal(bonusAVerser(f, jour), null);
  assert.equal(appliquerBonusSemaine(f, jour), f);
  assert.equal(f.defisSemaineReussis, 3);
});

test('carnet : MAX_CARNET respecté et indépendant de l’ordre des appareils', () => {
  const ent = (n, maj) => ({ cle: `q:${n}`, etape: 0, prochaine: '2026-10-01', maj });
  const a = { carnet: Array.from({ length: 250 }, (_, i) => ent(i, `2026-10-${pad(1 + (i % 28))}T00:00:00Z`)) };
  const b = { carnet: Array.from({ length: 250 }, (_, i) => ent(1000 + i, `2026-09-${pad(1 + (i % 28))}T00:00:00Z`)) };
  const f1 = fusionnerProfils(a, b).carnet;
  const f2 = fusionnerProfils(b, a).carnet;
  assert.equal(f1.length, MAX_CARNET);
  assert.deepEqual(new Set(f1.map((e) => e.cle)), new Set(f2.map((e) => e.cle)));
  // Les 250 entrées d'octobre (les plus récentes) sont toutes gardées.
  for (const e of a.carnet) assert.ok(f1.some((x) => x.cle === e.cle));
});

test('ancien format : les erreurs d’un appareil sans carnet entrent dans le carnet de l’autre', () => {
  const ancien = { xp: 200, jourCourant: '2026-10-01', erreurs: [{ cle: 'Combien font 2 + 2 ?', question: { enonce: 'Combien font 2 + 2 ?', choix: ['3', '4'], reponse: 1 } }] };
  const nouveau = { xp: 10, jourCourant: '2026-11-03', carnet: [] };
  for (const f of [fusionnerProfils(ancien, nouveau), fusionnerProfils(nouveau, ancien)]) {
    assert.equal(f.carnet.length, 1);
    assert.equal(f.carnet[0].cle, 'q:Combien font 2 + 2 ?');
    assert.equal(f.carnet[0].type, 'qcm');
  }
});

test('profils vides, null, ancien format, champs de mauvais type : aucun plantage', () => {
  const bizarres = [
    null, undefined, {}, { xp: '120' }, { historique: null, favoris: null, chapitres: null },
    { historique: [null, { date: null }], carnet: [null, { cle: 'q:x' }], examens: [null], epreuves: [null] },
    { controles: { k: 1 }, examens: { a: 1 }, planning: 'x', erreurs: {}, srs: null, ligue: null, exosReussis: { c: 'x' } },
    { controles: [{ id: 'k', faites: ['t1'] }] }, { controles: [{ id: 'k', faites: { t2: true } }] },
    { chapitres: { c: null } }, { xpParMatiere: null, dictees: null, semaine: null, vacances: null },
  ];
  for (const a of bizarres) {
    for (const b of bizarres) {
      const f = fusionnerProfils(a, b);
      if (a || b) assert.ok(f && typeof f === 'object');
    }
  }
  // Deux formats de cases cochées pour le même plan : les deux cases sont gardées.
  const f = fusionnerProfils(bizarres[7], bizarres[8]);
  const k = f.controles.find((x) => x.id === 'k');
  const coche = (t) => (Array.isArray(k.faites) ? k.faites.includes(t) : !!k.faites[t]);
  assert.ok(coche('t1') && coche('t2'));
});

test('profil vide d’un côté : l’autre est rendu tel quel (pas de perte, pas de champ inventé)', () => {
  const r = rng(9);
  for (let i = 0; i < 50; i += 1) {
    const a = profilAuHasard(r);
    assert.equal(fusionnerProfils(a, null), a);
    assert.equal(fusionnerProfils(null, a), a);
    const f = fusionnerProfils(a, {});
    for (const k of Object.keys(a)) assert.deepEqual(canon(f[k]), canon(a[k]), `champ ${k}`);
  }
});

// ── Chaque champ écrit dans le profil est-il fusionné ? ─────────────────────

/** Champs « réglages » : l'appareil le plus récent l'emporte (c'est voulu). */
const REGLAGES = new Set(['version', 'langue', 'themePref', 'tailleTexte', 'contrasteFort', 'vitesseParole', 'voix',
  'lectureAutoCartes', 'lecturePartout', 'niveauParDefaut', 'dernierChapitre', 'rappelActif', 'rappelHeure',
  'objectifQuotidien', 'policeDyslexie', 'interligneLarge', 'animationsReduites']);

function fichiersJs(dossier) {
  const out = [];
  for (const nom of readdirSync(dossier)) {
    const c = join(dossier, nom);
    if (statSync(c).isDirectory()) out.push(...fichiersJs(c));
    else if (nom.endsWith('.js')) out.push(c);
  }
  return out;
}

/** Clés de premier niveau d'un littéral objet dont le « { » précède `debut` (analyse simple). */
function clesPremierNiveau(t, debut) {
  const cles = [];
  let prof = 0;
  let morceau = '';
  for (let i = debut; i < t.length; i += 1) {
    const c = t[i];
    if ('{[('.includes(c)) prof += 1;
    else if ('}])'.includes(c)) { if (prof === 0) { cles.push(morceau); break; } prof -= 1; }
    if (prof === 0 && c === ',') { cles.push(morceau); morceau = ''; continue; }
    if (prof === 0) morceau += c;
  }
  return cles.map((m) => (m.trim().match(/^(?:\.\.\.)?([a-zA-Z]+)/) || [])[0]).filter((k) => k && !k.startsWith('...'));
}

test('chaque champ écrit dans le profil (app/src) est fusionné explicitement ou est un réglage', () => {
  const ici = dirname(fileURLToPath(import.meta.url));
  const src = join(ici, '..', '..', 'src');
  const fusion = readFileSync(join(src, 'cloud', 'fusion.js'), 'utf8');
  const ecrits = new Set();
  // profilVide (stockage.js) : la forme de référence.
  const stockage = readFileSync(join(src, 'progression', 'stockage.js'), 'utf8');
  const vide = stockage.slice(stockage.indexOf('export function profilVide'), stockage.indexOf('function normaliser'));
  for (const m of vide.matchAll(/^\s{4}([a-zA-Z]+):/gm)) ecrits.add(m[1]);
  for (const f of fichiersJs(src)) {
    const t = readFileSync(f, 'utf8');
    // definirReglages({ a: …, b }) et les objets « const suivant = { … } » : clés de premier niveau.
    for (const m of t.matchAll(/(?:definirReglages\(|const suivant = )\{/g)) {
      for (const k of clesPremierNiveau(t, m.index + m[0].length)) ecrits.add(k);
    }
    for (const m of t.matchAll(/\bsuivant\.([a-zA-Z]+)\s*=/g)) ecrits.add(m[1]);
    for (const m of t.matchAll(/Object\.assign\(suivant, \{/g)) {
      for (const k of clesPremierNiveau(t, m.index + m[0].length)) ecrits.add(k);
    }
  }
  // Champs écrits par lib/defisSemaine (appliquerBonusSemaine) et l'écran Classement.
  ['semaine', 'defisSemaineReussis', 'semaineXp', 'xpDebutSemaine'].forEach((k) => ecrits.add(k));
  const oublies = [...ecrits].filter((k) => !REGLAGES.has(k) && !new RegExp(`\\bf\\.${k}\\b`).test(fusion));
  assert.deepEqual(oublies, [], `champs écrasés par l'autre appareil : ${oublies.join(', ')}`);
  assert.ok(ecrits.size > 40, `extraction des champs incomplète (${ecrits.size})`);
});
