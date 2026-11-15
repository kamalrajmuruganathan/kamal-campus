import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  nettoyerCode, codeValide, emailPlausible, verifierNouveauMotDePasse, traduireErreurRecuperation,
} from './index.js';

test('le code collé avec espaces ou tirets est nettoyé', () => {
  assert.equal(nettoyerCode(' 1234 5678 '), '12345678');
  assert.equal(nettoyerCode('123-456'), '123456');
  assert.equal(nettoyerCode('12345678901234'), '1234567890');
  assert.equal(nettoyerCode(null), '');
});

test('un code fait 6 à 10 chiffres', () => {
  assert.ok(codeValide('123456'));
  assert.ok(codeValide('12345678'));
  assert.ok(!codeValide('12345'));
  assert.ok(!codeValide('12a456'));
  assert.ok(!codeValide(''));
});

test('adresse e-mail plausible', () => {
  assert.ok(emailPlausible('eleve@exemple.fr'));
  assert.ok(emailPlausible('  eleve@exemple.fr '));
  assert.ok(!emailPlausible('eleve@exemple'));
  assert.ok(!emailPlausible('eleve exemple.fr'));
});

test('nouveau mot de passe : longueur et confirmation', () => {
  assert.match(verifierNouveauMotDePasse('', ''), /Choisis/);
  assert.match(verifierNouveauMotDePasse('abc', 'abc'), /au moins 6/);
  assert.match(verifierNouveauMotDePasse('abcdef', 'abcdeg'), /pas identiques/);
  assert.equal(verifierNouveauMotDePasse('abcdef', 'abcdef'), '');
});

test('erreurs de Supabase traduites en français', () => {
  assert.match(traduireErreurRecuperation('Token has expired or is invalid'), /Code incorrect ou expiré/);
  assert.match(traduireErreurRecuperation('New password should be different from the old password.'), /différent/);
  assert.match(traduireErreurRecuperation('For security purposes, you can only request this after 42 seconds.'), /attends 42 secondes/);
  assert.match(traduireErreurRecuperation('Email rate limit exceeded'), /Trop de demandes/);
  assert.match(traduireErreurRecuperation('Password should be at least 6 characters.'), /trop faible/);
  assert.match(traduireErreurRecuperation('Failed to fetch'), /réseau/);
  assert.equal(traduireErreurRecuperation('Something unexpected'), '');
  assert.equal(traduireErreurRecuperation(''), '');
});
