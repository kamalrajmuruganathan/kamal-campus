import { test } from 'node:test';
import assert from 'node:assert/strict';
import { theme, couleurMatiere } from '../src/theme.js';

test('theme sans réglages renvoie le thème de base (rétrocompatible)', () => {
  const clair = theme(false);
  const sombre = theme(true);
  assert.equal(clair.sombre, false);
  assert.equal(sombre.sombre, true);
  assert.equal(clair.police.normale, 15);
});

test('la taille du texte agrandit toutes les polices', () => {
  const base = theme(false).police;
  const grande = theme(false, { taille: 'grande' }).police;
  const tres = theme(false, { taille: 'tres-grande' }).police;
  for (const k of Object.keys(base)) {
    assert.ok(grande[k] > base[k], `${k} doit être plus grand en « grande »`);
    assert.ok(tres[k] > grande[k], `${k} doit être plus grand en « tres-grande »`);
  }
  // valeurs attendues (arrondis) : 15 → 18 → 20
  assert.equal(grande.normale, 18);
  assert.equal(tres.normale, 20);
});

test('taille inconnue → aucun agrandissement (repli sûr)', () => {
  assert.equal(theme(false, { taille: 'xxl-inconnu' }).police.normale, 15);
});

test('le contraste renforcé rend le texte plus noir / plus blanc', () => {
  assert.equal(theme(false, { contraste: true }).couleur.texte, '#000000');
  assert.equal(theme(true, { contraste: true }).couleur.texte, '#ffffff');
  // sans contraste, on garde la couleur d'origine
  assert.notEqual(theme(false).couleur.texte, '#000000');
});

test('taille et contraste se combinent sans casser les couleurs de matière', () => {
  const t = theme(true, { taille: 'grande', contraste: true });
  assert.equal(t.police.normale, 18);
  assert.equal(t.couleur.texte, '#ffffff');
  // les jetons de matière restent présents
  assert.equal(couleurMatiere(t, 'maths'), t.couleur.maths);
  assert.equal(couleurMatiere(t, 'grand-oral'), t.couleur.grandoral);
});
