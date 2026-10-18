import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  LONGUEUR_MAX, TYPES, cibleQcm, cibleExo, cibleValide, preparerSignalement,
  estTableAbsente, restants, longueur,
} from './index.js';

const base = { chapitreId: 'cm1-math-cercle', niveau: 'cm1', type: 'contenu', cible: 'fiche', message: 'Le périmètre est faux.' };

test('cibles : fiche, QCM (écrit ou généré), exercice', () => {
  assert.equal(cibleQcm({ id: 7 }), 'qcm:7');
  assert.equal(cibleQcm({ id: 'q12' }), 'qcm:q12');
  assert.equal(cibleQcm({ id: 3 }, { genere: true }), 'qcm:gen-3');
  assert.equal(cibleQcm({}), 'qcm:inconnu');
  assert.equal(cibleExo('n4'), 'exo:n4');
  assert.equal(cibleExo('a b/c'), 'exo:abc');
  assert.equal(cibleExo(''), 'exo:inconnu');
  for (const c of ['fiche', 'qcm:7', 'qcm:gen-3', 'exo:n4']) assert.ok(cibleValide(c), c);
  for (const c of ['', 'fiches', 'qcm:', 'exo:a b', 'qcm:x;drop']) assert.ok(!cibleValide(c), c);
});

test('preparerSignalement : ligne complète', () => {
  const { ligne, erreur } = preparerSignalement({ ...base, extrait: '  Calcule\n le   périmètre ', userId: 'u1' });
  assert.equal(erreur, undefined);
  assert.deepEqual(ligne, {
    chapitre_id: 'cm1-math-cercle', niveau: 'cm1', type: 'contenu', cible: 'fiche',
    message: 'Le périmètre est faux.', extrait: 'Calcule le périmètre', user_id: 'u1',
  });
});

test('preparerSignalement : anonyme, sans extrait', () => {
  const { ligne } = preparerSignalement(base);
  assert.equal(ligne.user_id, null);
  assert.equal(ligne.extrait, null);
});

test('preparerSignalement : refus', () => {
  assert.match(preparerSignalement({ ...base, message: '   ' }).erreur, /quelques mots/);
  assert.match(preparerSignalement({ ...base, message: 'é'.repeat(LONGUEUR_MAX + 1) }).erreur, /trop long/);
  assert.ok(preparerSignalement({ ...base, message: 'é'.repeat(LONGUEUR_MAX) }).ligne);
  assert.match(preparerSignalement({ ...base, type: 'spam' }).erreur, /type/);
  assert.match(preparerSignalement({ ...base, chapitreId: '' }).erreur, /Chapitre/);
  assert.match(preparerSignalement({ ...base, cible: 'n’importe quoi' }).erreur, /Cible/);
});

test('extrait coupé à 300 caractères', () => {
  const { ligne } = preparerSignalement({ ...base, extrait: 'x'.repeat(1000) });
  assert.equal(ligne.extrait.length, 300);
});

test('compteur de caractères (emoji = 1 caractère)', () => {
  assert.equal(longueur('😀a'), 2);
  assert.equal(restants(''), LONGUEUR_MAX);
  assert.equal(restants('abc'), LONGUEUR_MAX - 3);
});

test('types proposés', () => {
  assert.deepEqual(TYPES.map((x) => x.id), ['contenu', 'francais', 'autre']);
});

test('estTableAbsente', () => {
  assert.ok(estTableAbsente({ code: 'PGRST205', message: 'Could not find the table public.signalements in the schema cache' }));
  assert.ok(estTableAbsente({ code: '42P01' }));
  assert.ok(estTableAbsente({ message: 'relation "public.signalements" does not exist' }));
  assert.ok(!estTableAbsente({ code: '42501', message: 'new row violates row-level security policy' }));
  assert.ok(!estTableAbsente(null));
});
