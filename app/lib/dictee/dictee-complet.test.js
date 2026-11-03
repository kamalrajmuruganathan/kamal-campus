// Tests complémentaires des dictées : les 280 dictées du dépôt, beaucoup de fautes écrites à la main,
// tolérances de saisie (apostrophes, espaces insécables, tirets), langues étrangères.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  decouper, classer, corriger, segmentsEleve, segmentsCorrection, texteALire, xpDictee, noterDictee,
  fusionnerDictees, compterMots, noteSur10, resumeFautes, TYPES, ORDRE_TYPES, BAREME_TEXTE, GROUPES,
} from './index.js';

const DOSSIER = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'dictees');
const DICTEES = readdirSync(DOSSIER).filter((f) => f.endsWith('.json')).sort()
  .flatMap((f) => JSON.parse(readFileSync(join(DOSSIER, f), 'utf8')).dictees.map((d) => ({ ...d, groupe: f.replace('.json', '') })));

const types = (r) => r.fautes.map((f) => f.type);
const mot = (t) => decouper(t)[0];
function graine(s) {
  let x = s >>> 0;
  return () => { x = (Math.imul(x, 1664525) + 1013904223) >>> 0; return x / 2 ** 32; };
}

// ─── Les 280 dictées ────────────────────────────────────────────────────────

test('280 dictées : recopie exacte = 10/10, aucune faute, segments = saisie', () => {
  assert.equal(DICTEES.length, 280);
  for (const d of DICTEES) {
    const r = corriger(d.texte, d.texte);
    assert.equal(r.note, 10, d.id);
    assert.equal(r.fautes.length, 0, d.id);
    assert.equal(r.retires, 0, d.id);
    const segs = segmentsEleve(d.texte, r);
    assert.equal(segs.map((s) => s.texte).join(''), d.texte, d.id);
    assert.ok(segs.every((s) => s.faute == null), d.id);
    assert.equal(segmentsCorrection(d.texte, r).map((s) => s.texte).join(''), d.texte, d.id);
  }
});

test('280 dictées : recopie avec apostrophes droites, guillemets droits, « ... », espaces insécables = 10/10', () => {
  for (const d of DICTEES) {
    const variante = d.texte
      .replace(/[’]/g, "'")
      .replace(/[«»“”]/g, '"')
      .replace(/…/g, '...')
      .replace(/ ([:;!?»])/g, ' $1')
      .replace(/« /g, '« ')
      .replace(/—/g, '-');
    assert.equal(corriger(d.texte, variante).note, 10, `${d.id} : ${variante}`);
    // Saisie phrase par phrase, avec des retours à la ligne et des espaces en trop.
    assert.equal(corriger(d.texte, `  ${d.phrases.join('\n\n')}  `).note, 10, d.id);
  }
});

test('280 dictées : une faute introduite au hasard (graine fixe) est trouvée et bien classée', () => {
  const r = graine(2026);
  const choisir = (l) => l[Math.floor(r() * l.length)];
  const remplacer = (texte, j, nouveau) => texte.slice(0, j.debut) + nouveau + texte.slice(j.fin);
  let essais = 0;
  for (const d of DICTEES) {
    const jetons = decouper(d.texte);
    const mots = jetons.filter((j) => !j.ponct);
    // Accent oublié (é → e) : −0,5.
    const accentues = mots.filter((m) => /[éèêàùâîôûç]/.test(m.t));
    if (accentues.length) {
      const m = choisir(accentues);
      const s = remplacer(d.texte, m, m.t.replace(/[éèêàùâîôû]/, (c) => c.normalize('NFD')[0]).replace('ç', 'c'));
      const c = corriger(d.texte, s);
      assert.deepEqual(types(c), ['accent'], `${d.id} : ${m.t}`);
      assert.equal(c.note, 9.5, d.id);
      essais += 1;
    }
    // Mot oublié : −1.
    const m = choisir(mots);
    const s = (d.texte.slice(0, m.debut) + d.texte.slice(m.fin)).replace(/ {2}/, ' ');
    const c = corriger(d.texte, s);
    assert.deepEqual(types(c), ['manquant'], `${d.id} : ${m.t} oublié`);
    assert.equal(c.fautes[0].attendu, m.t, d.id);
    assert.equal(c.note, 9, d.id);
    // Mot en trop : −1.
    const m2 = choisir(mots);
    const c2 = corriger(d.texte, `${d.texte.slice(0, m2.fin)} xyz${d.texte.slice(m2.fin)}`);
    assert.deepEqual(types(c2), ['en_trop'], d.id);
    assert.equal(c2.fautes[0].ecrit, 'xyz', d.id);
    // Majuscule oubliée au premier mot : −0,5.
    const premier = mots[0];
    if (/^[A-ZÀ-Ö]/.test(premier.t)) {
      const c3 = corriger(d.texte, remplacer(d.texte, premier, premier.t[0].toLowerCase() + premier.t.slice(1)));
      assert.deepEqual(types(c3), ['majuscule'], d.id);
      assert.equal(c3.fautes[0].detail, 'majuscule oubliée', d.id);
    }
    // Point final oublié : −0,5.
    const dernier = jetons[jetons.length - 1];
    if (dernier.t === '.') {
      const c4 = corriger(d.texte, d.texte.slice(0, -1));
      assert.deepEqual(types(c4), ['ponctuation'], d.id);
      assert.equal(c4.note, 9.5, d.id);
    }
    essais += 1;
  }
  assert.ok(essais > 400);
});

test('280 dictées : saisie très incomplète ou hors sujet → note entre 0 et 10, jamais d\'exception', () => {
  for (const d of DICTEES.filter((_, i) => i % 4 === 0)) { // une dictée sur 4 (suite rapide)
    for (const s of [d.phrases[0], 'n\'importe quoi', '...', '¿?', d.texte + ' ' + d.texte]) {
      const r = corriger(d.texte, s);
      assert.ok(r.note >= 0 && r.note <= 10 && Number.isInteger(r.note * 2), `${d.id} : ${r.note}`);
      assert.equal(segmentsEleve(s, r).filter((x) => !x.manquant).map((x) => x.texte).join(''), s, d.id);
    }
  }
});

test('280 dictées : le titre, le niveau et le groupe sont cohérents avec GROUPES', () => {
  const parGroupe = Object.fromEntries(GROUPES.map((g) => [g.groupe, g]));
  for (const d of DICTEES) {
    const g = parGroupe[d.groupe];
    assert.ok(g, d.groupe);
    assert.ok(d.id.startsWith(`${d.groupe}-`), d.id);
    assert.ok(d.titre.trim() === d.titre && d.titre.length >= 3, d.id);
  }
});

// ─── Fautes écrites à la main (français) ───────────────────────────────────

const CAS = [
  // [texte, saisie, types attendus, note]
  ['Les filles sont parties.', 'Les filles sont partis.', ['accord'], 9],
  ['Les oiseaux chantent.', 'Les oiseau chantent.', ['accord'], 9],
  ['Nous chantons.', 'Nous chantont.', ['accord'], 9],
  ['Tu chantes.', 'Tu chante.', ['accord'], 9],
  ['Il chante.', 'Il chantes.', ['accord'], 9],
  ['Elles sont arrivées hier.', 'Elles sont arrivé hier.', ['accord'], 9],
  ['Vous mangez.', 'Vous manger.', ['accord'], 9],
  ['Il faut manger.', 'Il faut mangé.', ['accord'], 9],
  ['Vous chantez.', 'Vous chanter.', ['accord'], 9],
  ['Elle a chanté.', 'Elle a chantez.', ['accord'], 9],
  ['Ils chantaient.', 'Ils chantait.', ['accord'], 9],
  ['Ils ont mangé.', 'Ils on mangé.', ['autre'], 9],
  ['Il est là.', 'Il est la.', ['accent'], 9.5],
  ['Je vais à la plage.', 'Je vais a la plage.', ['accent'], 9.5],
  ['Il a faim.', 'Il à faim.', ['accent'], 9.5],
  ['Où est-il ?', 'Ou est-il ?', ['accent'], 9.5],
  ['C’est beau.', 'S’est beau.', ['autre'], 9],
  ['Elle s’est levée.', 'Elle c’est levée.', ['autre'], 9],
  ['Ça va.', 'Sa va.', ['autre'], 9],
  ['Il peut venir.', 'Il peu venir.', ['autre'], 9],
  ['Mais oui.', 'Mes oui.', ['autre'], 9],
  ['Quand il vient.', 'Quant il vient.', ['autre'], 9],
  ['Je vois leurs amis.', 'Je vois leur amis.', ['autre'], 9],
  ['Il est sûr.', 'Il est sur.', ['accent'], 9.5],
  ['Un garçon.', 'Un garcon.', ['accent'], 9.5],
  ['Il était une fois.', 'Il etait une fois.', ['accent'], 9.5],
  ['Un enfant naïf.', 'Un enfant naif.', ['accent'], 9.5],
  ['La maison est belle.', 'La maizon est belle.', ['autre'], 9],
  ['Il marche beaucoup.', 'Il marche boku.', ['autre'], 9],
  ['L’arbre est grand.', 'Larbre est grand.', ['ponctuation'], 9.5],
  ['Elle a dit qu’elle viendrait.', 'Elle a dit quelle viendrait.', ['ponctuation'], 9.5],
  ['Il pleut.', 'il pleut.', ['majuscule'], 9.5],
  ['Il habite à Paris.', 'Il habite à paris.', ['majuscule'], 9.5],
  ['Il est grand.', 'Il est Grand.', ['majuscule'], 9.5],
  ['Il est grand.', 'Il est grand !', ['ponctuation'], 9.5],
  ['Il dit : « Oui. »', 'Il dit « Oui. »', ['ponctuation'], 9.5],
  ['Le chat, la nuit, dort.', 'Le chat la nuit dort.', ['ponctuation', 'ponctuation'], 9],
  ['Le chat dort.', 'Le chat dort', ['ponctuation'], 9.5],
  ['Le chat dort.', 'Le le chat dort.', ['en_trop'], 9],
  ['Le petit chat dort.', 'Le chat dort.', ['manquant'], 9],
  ['Le chien.', 'Les chiens.', ['accord', 'accord'], 8],
];

test('fautes écrites à la main : type et note', () => {
  for (const [texte, saisie, attendus, note] of CAS) {
    const r = corriger(texte, saisie);
    assert.deepEqual(types(r), attendus, `${saisie} → ${JSON.stringify(r.fautes.map((f) => [f.type, f.detail]))}`);
    assert.equal(r.note, note, saisie);
  }
});

test('détails expliqués à l\'élève : homophones, cédille, mot différent', () => {
  assert.equal(corriger('Il a faim.', 'Il à faim.').fautes[0].detail, 'homophones (a / à)');
  assert.equal(corriger('Ils ont mangé.', 'Ils on mangé.').fautes[0].detail, 'homophones (ont / on)');
  assert.equal(corriger('Un garçon.', 'Un garcon.').fautes[0].detail, 'cédille');
  assert.equal(corriger('Le chat dort.', 'Le vélo dort.').fautes[0].detail, 'mot différent');
  assert.equal(corriger('La maison.', 'La maizon.').fautes[0].detail, 'orthographe du mot');
  assert.equal(corriger('Il pleut', 'Il pleut.').fautes[0].detail, '« . » en trop');
  assert.equal(corriger('Il pleut.', 'Il pleut').fautes[0].detail, '« . » oublié');
  assert.equal(corriger('Il pleut.', 'Il pleut !').fautes[0].detail, '« ! » au lieu de « . »');
});

// Bug corrigé : un mot à trait d'union ou à apostrophe écrit en deux morceaux comptait
// « mot en trop » + « orthographe » (−2) au lieu d'une seule faute de trait d'union (−0,5).
test('mot à trait d\'union ou apostrophe écrit en deux morceaux : une seule faute', () => {
  for (const [texte, saisie, ecrit] of [
    ['— Viens ici, dit-elle.', '— Viens ici, dit elle.', 'dit elle'],
    ['Ma grand-mère arrive.', 'Ma grand mère arrive.', 'grand mère'],
    ['L’arbre est grand.', 'L arbre est grand.', 'L arbre'],
    ['Il est venu aujourd’hui.', 'Il est venu aujourd hui.', 'aujourd hui'],
    ['Peut-être demain.', 'Peut être demain.', 'Peut être'],
  ]) {
    const r = corriger(texte, saisie);
    assert.deepEqual(types(r), ['ponctuation'], saisie);
    assert.equal(r.note, 9.5, saisie);
    assert.equal(r.fautes[0].ecrit, ecrit);
    assert.equal(r.fautes[0].detail, 'apostrophe ou trait d’union');
    const segs = segmentsEleve(saisie, r);
    assert.equal(segs.map((s) => s.texte).join(''), saisie);
    assert.deepEqual(segs.filter((s) => s.n).map((s) => s.texte), [ecrit]);
  }
  // Espace après l'apostrophe : toléré (comme les espaces multiples).
  assert.equal(corriger('L’arbre est grand.', 'L’ arbre est grand.').note, 10);
  assert.equal(corriger('L’arbre est grand.', "L' arbre est grand.").fautes.length, 0);
  // Deux mots différents ne sont pas « fusionnés » à tort.
  assert.deepEqual(types(corriger('Ma grand-mère.', 'Ma grande mère.')), ['autre', 'en_trop']);
});

// ─── Tolérances de saisie ───────────────────────────────────────────────────

test('apostrophes : droite, courbe, ʼ, ‘ et accent grave sont équivalentes', () => {
  for (const a of ["'", '’', 'ʼ', '‘', '`']) {
    assert.equal(corriger('L’enfant s’amuse.', `L${a}enfant s${a}amuse.`).note, 10, a);
  }
});

test('espaces : insécables, fines, tabulations, retours à la ligne, espaces en trop', () => {
  const ref = 'Il dit : « Bonjour ! »';
  for (const s of [
    'Il dit : « Bonjour ! »',
    'Il dit : « Bonjour ! »',
    'Il\tdit :\n« Bonjour ! »',
    '   Il dit : « Bonjour ! »   ',
    'Il dit:«Bonjour!»',
  ]) assert.equal(corriger(ref, s).note, 10, JSON.stringify(s));
});

test('tirets de dialogue : —, –, - et -- sont équivalents ; tiret oublié = ponctuation', () => {
  const ref = '— Viens ici, dit-elle.';
  for (const s of ['— Viens ici, dit-elle.', '– Viens ici, dit-elle.', '- Viens ici, dit-elle.', '-- Viens ici, dit-elle.']) {
    assert.equal(corriger(ref, s).note, 10, s);
  }
  assert.deepEqual(types(corriger(ref, 'Viens ici, dit-elle.')), ['ponctuation']);
});

test('guillemets et points de suspension', () => {
  assert.equal(corriger('« Viens… »', '"Viens..."').note, 10);
  assert.equal(corriger('« Viens… »', '“Viens…”').note, 10);
  assert.equal(corriger('« Viens… »', '„Viens…“').note, 10);
  assert.deepEqual(types(corriger('Il attend…', 'Il attend.')), ['ponctuation']);
});

test('saisie vide, blanche ou absente : chaque mot compte oublié, note plancher 0', () => {
  for (const s of ['', '   ', '\n', null, undefined]) {
    const r = corriger('Le chat dort.', s);
    assert.deepEqual(types(r), ['manquant', 'manquant', 'manquant', 'ponctuation']);
    assert.equal(r.note, 6.5);
    assert.ok(segmentsEleve(s, r).filter((x) => !x.manquant).every((x) => !x.texte.trim() && x.faute == null));
  }
  assert.equal(corriger('', '').note, 10);
  assert.equal(corriger(null, null).fautes.length, 0);
});

test('texte en trop après la dictée : chaque mot et signe en trop compte', () => {
  const r = corriger('Le chat dort.', 'Le chat dort. Le chien aboie.');
  assert.deepEqual(types(r), ['ponctuation', 'en_trop', 'en_trop', 'en_trop']);
  assert.equal(r.note, 6.5);
  assert.equal(r.retires, 3.5);
});

test('note : jamais négative, au demi-point, cohérente avec le barème', () => {
  const r = corriger('Un deux trois quatre cinq six sept huit neuf dix onze douze.', 'Treize.');
  assert.equal(r.note, 0);
  for (const pr of [0, 0.5, 1, 9.5, 10, 10.5, 99]) {
    const n = noteSur10(pr);
    assert.ok(n >= 0 && n <= 10 && Number.isInteger(n * 2));
  }
  assert.equal(noteSur10(3.5), 6.5);
  // La somme des points des fautes = points retirés.
  const c = corriger('Les élèves chantent à l’école.', 'les eleves chante a lécole');
  assert.equal(c.retires, c.fautes.reduce((s, f) => s + f.points, 0));
  assert.equal(c.note, noteSur10(c.retires));
  for (const f of c.fautes) assert.equal(f.points, TYPES[f.type].points);
  assert.deepEqual(c.fautes.map((f) => f.n), c.fautes.map((_, i) => i + 1));
});

// ─── Langues ────────────────────────────────────────────────────────────────

test('allemand : ß, tréma, majuscule des noms', () => {
  const ss = corriger('Die Straße ist groß.', 'Die Strasse ist gross.');
  assert.deepEqual(types(ss), ['accent', 'accent']);
  assert.equal(ss.fautes[0].detail, 'ß (eszett)');
  assert.deepEqual(types(corriger('Er übt.', 'Er ubt.')), ['accent']);
  // « ue » pour « ü » : faute de tréma, pas un mot différent.
  const ue = corriger('Er übt jeden Tag.', 'Er uebt jeden Tag.');
  assert.deepEqual(types(ue), ['accent']);
  assert.equal(ue.fautes[0].detail, 'tréma (ä, ö, ü)');
  assert.deepEqual(types(corriger('Die Mädchen spielen.', 'Die Maedchen spielen.')), ['accent']);
  assert.deepEqual(types(corriger('Ich höre Musik.', 'Ich hoere Musik.')), ['accent']);
  assert.deepEqual(types(corriger('Ich habe einen Hund.', 'Ich habe einen hund.')), ['majuscule']);
  assert.deepEqual(types(corriger('Ich weiß, dass er kommt.', 'Ich weiß, das er kommt.')), ['autre']);
});

test('espagnol : ñ, accents, ¿ et ¡', () => {
  assert.deepEqual(types(corriger('El niño juega.', 'El nino juega.')), ['accent']);
  assert.deepEqual(types(corriger('¿Dónde está?', '¿Donde esta?')), ['accent', 'accent']);
  assert.deepEqual(types(corriger('¡Hola! Me llamo Lucía.', 'Hola! Me llamo Lucía.')), ['ponctuation']);
  assert.deepEqual(types(corriger('¿Qué hora es?', 'Qué hora es?')), ['ponctuation']);
  assert.deepEqual(types(corriger('Tengo once años.', 'Tengo once anos.')), ['accent']);
  assert.match(corriger('Él come.', 'El come.').fautes[0].detail, /homophones/);
});

test('anglais et italien', () => {
  assert.deepEqual(types(corriger('It is their house.', 'It is there house.')), ['autre']);
  assert.deepEqual(types(corriger('I don’t know.', "I don't know.")), []);
  assert.deepEqual(types(corriger('I don’t know.', 'I dont know.')), ['ponctuation']);
  assert.deepEqual(types(corriger('The children play.', 'The childrens play.')), ['accord']);
  assert.deepEqual(types(corriger('Lei è italiana.', 'Lei e italiana.')), ['accent']);
  assert.deepEqual(types(corriger('Perché no?', 'Perche no?')), ['accent']);
});

test('lettres soudées œ et æ tapées « oe », « ae » : faute d\'accent, détail clair', () => {
  const r = corriger('Il a bon cœur.', 'Il a bon coeur.');
  assert.deepEqual(types(r), ['accent']);
  assert.equal(r.fautes[0].detail, 'lettres soudées (œ, æ)');
  assert.deepEqual(types(corriger('Un ex æquo.', 'Un ex aequo.')), ['accent']);
});

// ─── Classement direct ──────────────────────────────────────────────────────

test('classer : jeton contre jeton', () => {
  assert.equal(classer(mot('été'), mot('Été')).type, 'majuscule');
  assert.equal(classer(mot('Été'), mot('ete')).type, 'accent');
  assert.equal(classer(mot('«'), mot('"')), null);
  assert.equal(classer(mot('…'), mot('...')), null);
  assert.equal(classer(mot('.'), mot('chat')).type, 'ponctuation');
  assert.equal(classer(mot('chantaient'), mot('chantait')).type, 'accord');
  assert.equal(classer(mot('chanteront'), mot('chanterons')).type, 'accord');
});

// ─── Segments ───────────────────────────────────────────────────────────────

test('segments : plusieurs mots oubliés consécutifs → un repère par mot', () => {
  const saisie = 'Le dort.';
  const r = corriger('Le petit chat dort.', saisie);
  const segs = segmentsEleve(saisie, r);
  assert.equal(segs.filter((s) => s.manquant).length, 2);
  assert.deepEqual(segs.filter((s) => s.manquant).map((s) => s.n), [1, 2]);
  const corr = segmentsCorrection('Le petit chat dort.', r);
  assert.deepEqual(corr.filter((s) => s.n).map((s) => s.texte), ['petit', 'chat']);
});

test('segments de correction : texte de référence conservé à l\'identique (espaces insécables, ponctuation)', () => {
  const texte = 'Il dit : « Oui ! »';
  const r = corriger(texte, 'Il dit « Non »');
  const segs = segmentsCorrection(texte, r);
  assert.equal(segs.map((s) => s.texte).join(''), texte);
});

// ─── Résumé, barème, lecture ────────────────────────────────────────────────

test('resumeFautes : ordre fixe, vide si aucune faute', () => {
  assert.equal(resumeFautes(corriger('Le chat.', 'Le chat.')), '');
  const r = corriger('Le petit chat dort.', 'le chat dorts');
  assert.equal(resumeFautes(r), 'Mot oublié : 1 · Accord ou terminaison : 1 · Majuscule : 1 · Ponctuation : 1');
  assert.deepEqual(ORDRE_TYPES.slice().sort(), Object.keys(TYPES).sort());
  assert.ok(BAREME_TEXTE.includes('−0,5'));
});

test('texteALire : ponctuation dite avec espaces insécables et tirets', () => {
  assert.equal(texteALire('Il dit : « Oui ! »', { ponctuation: true }),
    'Il dit deux-points, ouvrez les guillemets, Oui point d\'exclamation, fermez les guillemets');
  assert.equal(texteALire('— Viens, dit-elle.', { ponctuation: true }), 'tiret, Viens virgule, dit-elle point');
  assert.equal(texteALire('Il (le chat) dort.', { ponctuation: true }),
    'Il ouvrez la parenthèse, le chat fermez la parenthèse, dort point');
  assert.equal(texteALire(''), '');
  assert.equal(texteALire(null), '');
  assert.equal(texteALire('Il dort;', { ponctuation: true }), 'Il dort point-virgule');
});

test('texteALire : chaque phrase des dictées françaises est lisible (pas de signe brut, pas de virgule double)', () => {
  for (const d of DICTEES.filter((x) => GROUPES.find((g) => g.groupe === x.groupe).matiere === 'francais')) {
    for (const p of d.phrases) {
      const l = texteALire(p, { ponctuation: true });
      assert.ok(!/[.;:!?«»…—–()]/.test(l), `${d.id} : ${l}`);
      assert.ok(!/,\s*,/.test(l) && !/^,/.test(l) && !/\s{2}/.test(l), `${d.id} : ${l}`);
      assert.ok(!/’/.test(l), d.id);
    }
  }
});

// ─── Progression ────────────────────────────────────────────────────────────

test('xpDictee : pas de double gain, valeurs absurdes neutralisées', () => {
  let meilleure = null;
  let total = 0;
  for (const note of [6, 6, 8.5, 7, 10, 10]) {
    total += xpDictee(note, meilleure);
    meilleure = Math.max(meilleure ?? 0, note);
  }
  assert.equal(total, 10);
  assert.equal(xpDictee('abc'), 0);
  assert.equal(xpDictee(undefined), 0);
  assert.equal(xpDictee(9.5, null), 10);
  assert.equal(xpDictee(-3), 0);
});

test('noterDictee : sans suivi, suivi ancien format, ne touche pas aux autres dictées', () => {
  assert.deepEqual(noterDictee(undefined, 'a', 7, 'd1'), { a: { meilleure: 7, derniere: 7, essais: 1, date: 'd1' } });
  const s = noterDictee({ b: { meilleure: 3 }, a: { derniere: 5 } }, 'a', 4, 'd2');
  assert.deepEqual(s.a, { meilleure: 4, derniere: 4, essais: 1, date: 'd2' });
  assert.deepEqual(s.b, { meilleure: 3 });
});

test('fusionnerDictees : ordre indifférent pour la meilleure note et les essais, idempotente, entrées abîmées ignorées', () => {
  const a = { x: { meilleure: 8, derniere: 8, essais: 2, date: '2026-10-10' }, z: null, w: 'abc' };
  const b = { x: { meilleure: 9, derniere: 4, essais: 5, date: '2026-10-09' } };
  const ab = fusionnerDictees(a, b);
  const ba = fusionnerDictees(b, a);
  assert.deepEqual(ab, ba);
  assert.deepEqual(ab, { x: { meilleure: 9, derniere: 8, essais: 5, date: '2026-10-10' } });
  assert.deepEqual(fusionnerDictees(ab, ab), ab);
});

test('compterMots : élisions et traits d\'union = un seul mot', () => {
  assert.equal(compterMots('L’enfant dit-il aujourd’hui : « Oui » ?'), 4);
  assert.equal(compterMots(''), 0);
  assert.equal(compterMots('¿Qué?'), 1);
});

// Bug corrigé : à date égale, le premier appareil gagnait (fusion dépendant de l'ordre des arguments).
test('fusionnerDictees : même date sur les deux appareils → départage déterministe (meilleure dernière note)', () => {
  const a = { x: { meilleure: 7, derniere: 5, essais: 2, date: '2026-10-10' } };
  const b = { x: { meilleure: 6, derniere: 6, essais: 3, date: '2026-10-10' } };
  const ab = fusionnerDictees(a, b);
  assert.deepEqual(ab, fusionnerDictees(b, a));
  assert.deepEqual(ab.x, { meilleure: 7, derniere: 6, essais: 3, date: '2026-10-10' });
  // Tirages reproductibles : fusion(a, b) ≡ fusion(b, a) dans tous les cas.
  let g = 99;
  const r = (n) => { g = (Math.imul(g, 1103515245) + 12345) >>> 0; return g % n; };
  for (let k = 0; k < 500; k++) {
    const e = () => ({ meilleure: r(11), derniere: r(11), essais: 1 + r(5), date: `2026-10-1${r(3)}` });
    const u = { d: e() };
    const v = { d: e() };
    assert.deepEqual(fusionnerDictees(u, v), fusionnerDictees(v, u));
  }
});
