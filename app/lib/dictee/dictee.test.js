import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  decouper, classer, aligner, corriger, noteSur10, segmentsEleve, segmentsCorrection,
  texteALire, xpDictee, noterDictee, fusionnerDictees, compterMots, sansAccents,
  distanceLettres, resumeFautes, GROUPES, TYPES, vitesseConseillee, estPrimaire,
} from './index.js';

const types = (r) => r.fautes.map((f) => f.type);
const mot = (t) => decouper(t)[0];

// ─── Découpage ──────────────────────────────────────────────────────────────
test('découpage : mots, élisions, traits d’union, ponctuation', () => {
  const j = decouper('L’enfant dit : « Aujourd’hui, peut-être… »');
  assert.deepEqual(j.map((x) => x.t), ['L’enfant', 'dit', ':', '«', 'Aujourd’hui', ',', 'peut-être', '…', '»']);
  assert.equal(j[0].n, "L'enfant");
  assert.equal(j[3].n, '"');
  assert.equal(j[8].n, '"');
  assert.equal(j[2].ponct, true);
  assert.equal(j[1].ponct, false);
});

test('découpage : positions conservées', () => {
  const s = 'Le  chat,dort.';
  const j = decouper(s);
  assert.deepEqual(j.map((x) => s.slice(x.debut, x.fin)), ['Le', 'chat', ',', 'dort', '.']);
});

test('découpage : lettres étrangères (ß, ñ, ¿ ¡)', () => {
  assert.deepEqual(decouper('¿Dónde está la niña?').map((x) => x.t), ['¿', 'Dónde', 'está', 'la', 'niña', '?']);
  assert.deepEqual(decouper('Die Straße ist groß.').map((x) => x.t), ['Die', 'Straße', 'ist', 'groß', '.']);
  assert.deepEqual(decouper('I don’t know.').map((x) => x.t), ['I', 'don’t', 'know', '.']);
});

test('découpage : « ... » = « … », tirets unifiés', () => {
  assert.equal(decouper('Alors...')[1].n, '…');
  assert.equal(decouper('— Oui')[0].n, decouper('- Oui')[0].n);
  assert.equal(decouper('– Oui')[0].n, '—');
});

test('texte vide ou absent', () => {
  assert.deepEqual(decouper(''), []);
  assert.deepEqual(decouper(null), []);
  assert.equal(compterMots('Le chat dort, puis il mange.'), 6);
});

test('sans accents et distance', () => {
  assert.equal(sansAccents('Élève à côté, ça'), 'eleve a cote, ca');
  assert.equal(sansAccents('cœur'), 'coeur');
  assert.equal(distanceLettres('chat', 'chats'), 1);
  assert.equal(distanceLettres('', 'abc'), 3);
  assert.equal(distanceLettres('niche', 'chien'), 4);
});

// ─── Classement d'un écart ──────────────────────────────────────────────────
test('classer : identiques', () => {
  assert.equal(classer(mot('chat'), mot('chat')), null);
  assert.equal(classer(mot('l’arbre'), mot("l'arbre")), null);
});

test('classer : majuscule', () => {
  assert.equal(classer(mot('Le'), mot('le')).type, 'majuscule');
  assert.equal(classer(mot('Le'), mot('le')).detail, 'majuscule oubliée');
  assert.equal(classer(mot('chat'), mot('Chat')).detail, 'pas de majuscule ici');
  assert.equal(classer(mot('Paris'), mot('paris')).type, 'majuscule');
});

test('classer : accents et cédille', () => {
  assert.equal(classer(mot('élève'), mot('eleve')).type, 'accent');
  assert.equal(classer(mot('à'), mot('a')).type, 'accent');
  assert.match(classer(mot('à'), mot('a')).detail, /homophones/);
  assert.equal(classer(mot('où'), mot('ou')).type, 'accent');
  assert.equal(classer(mot('garçon'), mot('garcon')).detail, 'cédille');
  assert.equal(classer(mot('forêt'), mot('foret')).type, 'accent');
  assert.equal(classer(mot('niña'), mot('nina')).type, 'accent');
  assert.equal(classer(mot('Straße'), mot('Strasse')).type, 'accent');
});

test('classer : accord et terminaisons', () => {
  assert.equal(classer(mot('chats'), mot('chat')).type, 'accord');
  assert.equal(classer(mot('mangeaient'), mot('mangeait')).type, 'accord');
  assert.equal(classer(mot('chantent'), mot('chante')).type, 'accord');
  assert.equal(classer(mot('jouer'), mot('joué')).type, 'accord');
  assert.equal(classer(mot('arrivées'), mot('arrivés')).type, 'accord');
  assert.equal(classer(mot('petite'), mot('petit')).type, 'accord');
  assert.equal(classer(mot('chevaux'), mot('chevaus')).type, 'accord');
  assert.equal(classer(mot('finirent'), mot('finires')).type, 'accord');
  assert.equal(classer(mot('as'), mot('a')).type, 'accord');
});

test('classer : homophones et orthographe', () => {
  const f = classer(mot('est'), mot('et'));
  assert.equal(f.type, 'autre');
  assert.equal(f.detail, 'homophones (est / et)');
  assert.equal(classer(mot('sont'), mot('son')).type, 'autre');
  assert.equal(classer(mot('ces'), mot('ses')).type, 'autre');
  assert.equal(classer(mot('maison'), mot('maizon')).type, 'autre');
  assert.equal(classer(mot('éléphant'), mot('éléfant')).type, 'autre');
});

test('classer : apostrophe et ponctuation', () => {
  assert.equal(classer(mot('l’école'), mot('lécole')).type, 'ponctuation');
  assert.equal(classer(mot('grand-mère'), mot('grandmère')).type, 'ponctuation');
  assert.equal(classer(mot(','), mot('.')).type, 'ponctuation');
});

// ─── Alignement ─────────────────────────────────────────────────────────────
test('alignement : texte identique', () => {
  const r = decouper('Le chat dort.');
  assert.ok(aligner(r, r).every((o) => o.op === 'egal'));
});

test('alignement : mot oublié au milieu', () => {
  const ops = aligner(decouper('Le petit chat dort.'), decouper('Le chat dort.'));
  assert.deepEqual(ops.map((o) => o.op), ['egal', 'manquant', 'egal', 'egal', 'egal']);
});

test('alignement : mot en trop', () => {
  const ops = aligner(decouper('Le chat dort.'), decouper('Le gros chat dort.'));
  assert.deepEqual(ops.map((o) => o.op), ['egal', 'en_trop', 'egal', 'egal', 'egal']);
});

test('alignement : mot remplacé par un mot sans rapport = une faute « mot différent »', () => {
  const r = corriger('Le chat dort.', 'Le vélo dort.');
  assert.deepEqual(types(r), ['autre']);
  assert.equal(r.fautes[0].detail, 'mot différent');
});

test('alignement : un mot oublié et un mot sans rapport ajouté ailleurs', () => {
  const r = corriger('Le chat dort dans la cuisine.', 'Le chat dort la cuisine aujourd’hui.');
  assert.deepEqual(types(r), ['manquant', 'en_trop']);
});

test('alignement : mot proche = une seule faute', () => {
  const r = corriger('Les enfants jouent.', 'Les enfant jouent.');
  assert.deepEqual(types(r), ['accord']);
});

// ─── Correction complète ────────────────────────────────────────────────────
test('dictée parfaite : 10/10', () => {
  const r = corriger('Le chat dort sur le lit.', 'Le chat dort sur le lit.');
  assert.equal(r.note, 10);
  assert.equal(r.fautes.length, 0);
  assert.equal(r.nbMots, 6);
});

test('tolérances : espaces, apostrophes, guillemets, points de suspension', () => {
  const ref = 'Il dit : « J’arrive… » Puis l’enfant part.';
  for (const s of [
    'Il dit : "J\'arrive..." Puis l\'enfant part.',
    'Il  dit:«J’arrive…»   Puis l’enfant part.',
    'Il dit : “J’arrive…” Puis l’enfant part.',
    'Il dit : « J’arrive… » Puis l’enfant part.',
  ]) {
    const r = corriger(ref, s);
    assert.equal(r.note, 10, s + ' → ' + JSON.stringify(r.fautes));
  }
});

test('deux fautes : accord + accent', () => {
  const r = corriger('Les élèves chantent à l’école.', 'Les élèves chante a l’école.');
  assert.deepEqual(types(r), ['accord', 'accent']);
  assert.equal(r.retires, 1.5);
  assert.equal(r.note, 8.5);
  assert.equal(r.fautes[0].attendu, 'chantent');
  assert.equal(r.fautes[0].ecrit, 'chante');
  assert.equal(r.fautes[1].n, 2);
});

test('majuscule et point oubliés', () => {
  const r = corriger('Le soleil brille.', 'le soleil brille');
  assert.deepEqual(types(r), ['majuscule', 'ponctuation']);
  assert.equal(r.note, 9);
});

test('virgule en trop, signe différent', () => {
  assert.deepEqual(types(corriger('Il pleut.', 'Il, pleut.')), ['ponctuation']);
  assert.deepEqual(types(corriger('Tu viens ?', 'Tu viens.')), ['ponctuation']);
});

test('mots oubliés en fin de texte', () => {
  const r = corriger('Le chien court dans le jardin.', 'Le chien court');
  assert.deepEqual(types(r), ['manquant', 'manquant', 'manquant', 'ponctuation']);
  assert.equal(r.note, 6.5);
});

test('saisie vide : 0 (jamais négatif)', () => {
  const r = corriger('Un long texte de plus de dix mots pour que la note tombe bien sous zéro.', '');
  assert.equal(r.note, 0);
  assert.ok(r.retires > 10);
});

test('homophones et/est', () => {
  const r = corriger('Le ciel est bleu et le soleil brille.', 'Le ciel et bleu et le soleil brille.');
  assert.deepEqual(types(r), ['autre']);
  assert.match(r.fautes[0].detail, /homophones/);
});

test('participe passé : é/er', () => {
  const r = corriger('Elle a mangé une pomme.', 'Elle a manger une pomme.');
  assert.deepEqual(types(r), ['accord']);
});

test('noteSur10 : arrondi au demi-point, plancher 0', () => {
  assert.equal(noteSur10(0), 10);
  assert.equal(noteSur10(1.5), 8.5);
  assert.equal(noteSur10(12), 0);
  assert.equal(noteSur10(0.25), 10);
});

test('résumé par type', () => {
  const r = corriger('Les élèves chantent à l’école.', 'Les eleves chante a l’école');
  assert.equal(resumeFautes(r), 'Accord ou terminaison : 1 · Accent : 2 · Ponctuation : 1');
});

test('barème : chaque type a ses points', () => {
  assert.equal(TYPES.manquant.points, 1);
  assert.equal(TYPES.accent.points, 0.5);
  assert.equal(TYPES.ponctuation.points, 0.5);
  assert.equal(TYPES.majuscule.points, 0.5);
  assert.equal(TYPES.accord.points, 1);
});

test('langues : allemand (majuscule des noms), espagnol (accents)', () => {
  assert.deepEqual(types(corriger('Der Hund spielt im Garten.', 'Der hund spielt im Garten.')), ['majuscule']);
  assert.deepEqual(types(corriger('Mi hermano está en casa.', 'Mi hermano esta en casa.')), ['accent']);
  assert.deepEqual(types(corriger('¿Cómo estás?', 'Cómo estás?')), ['ponctuation']);
});

// ─── Segments d'affichage ───────────────────────────────────────────────────
test('segments de l’élève : fautes repérées, espaces conservés', () => {
  const saisie = 'Les  élèves chante a l’école.';
  const r = corriger('Les élèves chantent à l’école.', saisie);
  const segs = segmentsEleve(saisie, r);
  assert.equal(segs.map((s) => s.texte).join(''), saisie);
  const fautes = segs.filter((s) => s.faute != null);
  assert.deepEqual(fautes.map((s) => [s.texte, s.n]), [['chante', 1], ['a', 2]]);
});

test('segments de l’élève : repère pour un mot oublié', () => {
  const saisie = 'Le chat dort.';
  const r = corriger('Le petit chat dort.', saisie);
  const segs = segmentsEleve(saisie, r);
  const m = segs.find((s) => s.manquant);
  assert.ok(m);
  assert.equal(m.texte, '‸');
  assert.equal(m.n, 1);
  assert.equal(segs.filter((s) => !s.manquant).map((s) => s.texte).join(''), saisie);
});

test('segments de la correction : mots à corriger marqués', () => {
  const texte = 'Le petit chat dort.';
  const r = corriger(texte, 'Le chat dors.');
  const segs = segmentsCorrection(texte, r);
  assert.equal(segs.map((s) => s.texte).join(''), texte);
  assert.deepEqual(segs.filter((s) => s.faute != null).map((s) => s.texte), ['petit', 'dort']);
});

// ─── Lecture à voix haute ───────────────────────────────────────────────────
test('texte à lire : sans ponctuation dite', () => {
  assert.equal(texteALire('Le chat dort.'), 'Le chat dort.');
  assert.equal(texteALire('L’enfant joue.'), "L'enfant joue.");
});

test('texte à lire : ponctuation dite', () => {
  assert.equal(texteALire('Il pleut, il fait froid.', { ponctuation: true }), 'Il pleut virgule, il fait froid point');
  assert.equal(texteALire('Tu viens ?', { ponctuation: true }), 'Tu viens point d\'interrogation');
  assert.equal(
    texteALire('Il crie : « Viens ! »', { ponctuation: true }),
    'Il crie deux-points, ouvrez les guillemets, Viens point d\'exclamation, fermez les guillemets',
  );
  assert.equal(texteALire('Attends...', { ponctuation: true }), 'Attends points de suspension');
});

test('texte à lire : pas de ponctuation dite hors français', () => {
  assert.equal(texteALire('Hello, Tom.', { ponctuation: true, matiere: 'anglais' }), 'Hello, Tom.');
});

test('vitesse et niveaux', () => {
  assert.equal(vitesseConseillee('cp'), 'lent');
  assert.equal(vitesseConseillee('ce2'), 'lent');
  assert.equal(vitesseConseillee('cm1'), 'normal');
  assert.equal(estPrimaire('cm2'), true);
  assert.equal(estPrimaire('sixieme'), false);
});

// ─── Progression ────────────────────────────────────────────────────────────
test('XP : la note la première fois, puis seulement le progrès', () => {
  assert.equal(xpDictee(8.5), 9);
  assert.equal(xpDictee(8.5, 6), 3);
  assert.equal(xpDictee(5, 9), 0);
  assert.equal(xpDictee(0), 0);
});

test('suivi des dictées', () => {
  let s = noterDictee({}, 'ce1-01', 6, '2026-10-18');
  s = noterDictee(s, 'ce1-01', 9, '2026-10-19');
  s = noterDictee(s, 'ce1-01', 7, '2026-10-20');
  assert.deepEqual(s['ce1-01'], { meilleure: 9, derniere: 7, essais: 3, date: '2026-10-20' });
});

test('fusion de deux appareils', () => {
  const a = { x: { meilleure: 8, derniere: 8, essais: 2, date: '2026-10-10' }, y: { meilleure: 5, derniere: 5, essais: 1, date: '2026-10-01' } };
  const b = { x: { meilleure: 6, derniere: 6, essais: 3, date: '2026-10-12' } };
  const f = fusionnerDictees(a, b);
  assert.deepEqual(f.x, { meilleure: 8, derniere: 6, essais: 3, date: '2026-10-12' });
  assert.deepEqual(f.y, a.y);
  assert.deepEqual(fusionnerDictees(null, undefined), {});
});

// ─── Contenu : dictees/*.json ───────────────────────────────────────────────
const DOSSIER = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'dictees');
const LONGUEURS = {
  cp: [4, 20], ce1: [12, 40], ce2: [20, 55], cm1: [35, 70], cm2: [55, 85],
  sixieme: [65, 105], cinquieme: [80, 120], quatrieme: [95, 140], troisieme: [115, 155],
};
const NIVEAUX_LANGUES = ['sixieme', 'cinquieme', 'quatrieme', 'troisieme'];
const DIFFICULTES = ['facile', 'moyen', 'difficile'];

test('contenu : un fichier par groupe, nombre de dictées', () => {
  assert.ok(existsSync(DOSSIER), 'dossier dictees/ absent');
  const fichiers = readdirSync(DOSSIER).filter((f) => f.endsWith('.json')).sort();
  assert.deepEqual(fichiers, GROUPES.map((g) => `${g.groupe}.json`).sort());
  for (const g of GROUPES) {
    const data = JSON.parse(readFileSync(join(DOSSIER, `${g.groupe}.json`), 'utf8'));
    assert.equal(data.groupe, g.groupe);
    assert.equal(data.matiere, g.matiere);
    assert.equal(data.dictees.length, g.matiere === 'francais' ? 12 : 8, g.groupe);
  }
});

test('contenu : chaque dictée est complète et cohérente', () => {
  const ids = new Set();
  const textes = new Set();
  for (const g of GROUPES) {
    const data = JSON.parse(readFileSync(join(DOSSIER, `${g.groupe}.json`), 'utf8'));
    for (const d of data.dictees) {
      const ou = `${g.groupe}/${d.id}`;
      for (const champ of ['id', 'niveau', 'titre', 'texte', 'difficulte']) assert.ok(d[champ], `${ou} : ${champ} vide`);
      assert.ok(!ids.has(d.id), `${ou} : id en double`);
      ids.add(d.id);
      assert.ok(!textes.has(d.texte), `${ou} : texte en double`);
      textes.add(d.texte);
      assert.ok(Array.isArray(d.notions) && d.notions.length >= 1, `${ou} : notions`);
      assert.ok(DIFFICULTES.includes(d.difficulte), `${ou} : difficulté`);
      if (g.niveau) assert.equal(d.niveau, g.niveau, ou);
      else assert.ok(NIVEAUX_LANGUES.includes(d.niveau), `${ou} : niveau ${d.niveau}`);
      // Le découpage pour la lecture redonne exactement le texte.
      assert.ok(Array.isArray(d.phrases) && d.phrases.length >= 1, `${ou} : phrases`);
      assert.equal(d.phrases.join(' '), d.texte, `${ou} : phrases ≠ texte`);
      for (const p of d.phrases) assert.ok(p.trim() === p && p.length > 0, `${ou} : phrase mal découpée « ${p} »`);
      // Typographie : pas d'espace double, pas d'apostrophe droite, fin de phrase ponctuée.
      assert.ok(!/ {2}/.test(d.texte), `${ou} : espace double`);
      assert.ok(!/'/.test(d.texte), `${ou} : apostrophe droite`);
      assert.ok(/[.!?…»]$/.test(d.texte), `${ou} : fin de texte`);
      assert.ok(/^[«¿¡—A-ZÀ-ÖØ-Þ]/.test(d.texte), `${ou} : début sans majuscule`);
      // Longueur adaptée au niveau.
      const n = compterMots(d.texte);
      if (g.matiere === 'francais') {
        const [min, max] = LONGUEURS[g.niveau];
        assert.ok(n >= min && n <= max, `${ou} : ${n} mots (attendu ${min}-${max})`);
      } else {
        assert.ok(n >= 25 && n <= 110, `${ou} : ${n} mots`);
      }
      // La dictée recopiée à l'identique obtient 10/10.
      assert.equal(corriger(d.texte, d.texte).note, 10, ou);
    }
  }
});
