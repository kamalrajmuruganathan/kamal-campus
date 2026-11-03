import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { BADGES, evaluerBadges, nombreObtenus, badgesNouveaux, statsDerivees } from './badges.js';
import { xpPourNiveau } from './progression.js';

/** profilVide() de src/progression/stockage.js (copié pour ne pas importer AsyncStorage). */
function profilVideStockage() {
  const src = readFileSync(new URL('../src/progression/stockage.js', import.meta.url), 'utf8');
  const corps = src.slice(src.indexOf('export function profilVide() {'), src.indexOf('function normaliser'));
  const objet = corps.slice(corps.indexOf('return {') + 7, corps.lastIndexOf('};') + 1);
  return Function(`return (${objet});`)();
}

test('profil vide (celui de l’appli), null, {} ou abîmé : aucun badge obtenu', () => {
  const vide = profilVideStockage();
  assert.equal(vide.xp, 0);
  const abime = { chapitres: { a: null, b: 'x' }, exosReussis: { c: 'abc', d: null }, dictees: { x: null }, examens: [null, 'x'], xpParMatiere: { m: -5 } };
  for (const p of [vide, null, undefined, {}, abime]) {
    assert.equal(nombreObtenus(p), 0, JSON.stringify(p));
    for (const b of evaluerBadges(p)) assert.equal(b.valeur, b.id.startsWith('niveau-') ? 1 : 0, `${b.id} sur ${JSON.stringify(p)}`);
  }
});

test('chaque badge : obtenu pile à la cible, pas une unité avant', () => {
  // Profil minimal qui donne exactement `v` à la valeur du badge.
  const profilPour = (id, v) => {
    switch (id) {
      case 'premier-qcm': case 'assidu-10': case 'assidu-50': return { qcmTermines: v };
      case 'sans-faute-1': case 'sans-faute-5': return { sansFautes: v };
      case 'serie-10': case 'serie-20': return { meilleureSerie: v };
      case 'bonnes-100': case 'bonnes-500': return { reponsesJustes: v };
      case 'maitrise-5': case 'maitrise-20': return { chapitres: Object.fromEntries(Array.from({ length: v }, (_, i) => [`c${i}`, { meilleurScore: 0.8 }])) };
      case 'niveau-5': case 'niveau-10': return { xp: v <= 1 ? 0 : xpPourNiveau(v) };
      case 'flash-50': case 'flash-250': return { flashcardsConnues: v };
      case 'serie-3': case 'serie-7': case 'serie-30': return { meilleureSerieJours: v };
      case 'enigmes-10': case 'enigmes-50': return { enigmesResolues: v };
      case 'exos-10': case 'exos-100': case 'exos-500': return { exosReussis: { a: Array.from({ length: v }, (_, i) => i) } };
      case 'dictee-1': case 'dictees-10': return { dictees: Object.fromEntries(Array.from({ length: v }, (_, i) => [`d${i}`, { meilleure: 5 }])) };
      case 'dictee-parfaite': return { dictees: Object.fromEntries(Array.from({ length: v }, (_, i) => [`d${i}`, { meilleure: 10 }])) };
      case 'examen-1': case 'examen-5': return { examens: Array.from({ length: v }, (_, i) => ({ id: `e${i}`, note20: 8 })) };
      case 'examen-16': return { examens: [{ id: 'e', note20: v }] };
      case 'carnet-10': case 'carnet-50': return { carnetMaitrisees: v };
      case 'defis-semaine-1': case 'defis-semaine-12': return { defisSemaineReussis: v };
      case 'deux-matieres': return { xpParMatiere: Object.fromEntries(['francais', 'anglais', 'svt'].slice(0, v).map((m) => [m, 10])) };
      default: return null;
    }
  };
  for (const b of BADGES) {
    const avant = profilPour(b.id, b.cible - 1);
    assert.ok(avant, `badge ${b.id} non couvert par le test`);
    assert.equal(evaluerBadges(avant).find((x) => x.id === b.id).obtenu, false, `${b.id} obtenu trop tôt`);
    assert.equal(evaluerBadges(profilPour(b.id, b.cible)).find((x) => x.id === b.id).obtenu, true, `${b.id} pas obtenu à la cible`);
  }
});

test('textes des badges : français soigné (majuscule, pas d’espace double, apostrophe typographique)', () => {
  for (const b of BADGES) {
    for (const t of [b.titre, b.desc]) {
      assert.ok(/^[A-ZÉÀ0-9«]/.test(t), t);
      assert.ok(!/ {2}|'|\s[,.]$/.test(t), t);
    }
  }
  // La description de « Touche-à-tout » dit ce que le badge mesure vraiment (deux matières quelconques).
  const t = BADGES.find((b) => b.id === 'deux-matieres');
  assert.equal(t.desc, 'Gagner des points dans deux matières différentes');
  assert.equal(evaluerBadges({ xpParMatiere: { francais: 5, anglais: 3 } }).find((x) => x.id === 'deux-matieres').obtenu, true);
});

test('badgesNouveaux : jamais un badge déjà acquis, jamais de badge perdu « gagné »', () => {
  let graine = 5;
  const r = () => ((graine = (graine * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 500; i += 1) {
    const avant = { qcmTermines: Math.floor(r() * 60), xp: Math.floor(r() * 5000), sansFautes: Math.floor(r() * 7), carnetMaitrisees: Math.floor(r() * 60) };
    const apres = { ...avant, qcmTermines: avant.qcmTermines + 1, xp: avant.xp + Math.floor(r() * 300) };
    const n = badgesNouveaux(avant, apres);
    assert.equal(n.length, nombreObtenus(apres) - nombreObtenus(avant));
    assert.deepEqual(badgesNouveaux(apres, apres), []);
  }
});

test('statsDerivees : maîtrise ≥ 0,8 ; exos et dictées comptés sans les entrées abîmées', () => {
  const s = statsDerivees({
    chapitres: { a: { meilleurScore: 0.8 }, b: { meilleurScore: 0.79 }, c: null },
    exosReussis: { a: [1, 2], b: 'x' },
    dictees: { d: { meilleure: 10 }, e: { meilleure: 9.5 }, f: 3 },
    examens: [{ note20: '17' }, null, { note20: 'abc' }],
  });
  assert.deepEqual([s.maitrises, s.exos, s.dictees, s.dicteesParfaites, s.examens, s.meilleurExamen], [1, 2, 2, 1, 2, 17]);
});
