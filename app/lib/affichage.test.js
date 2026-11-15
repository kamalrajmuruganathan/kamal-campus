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

test('thème « Bleu cristal » : palette claire bleutée, mêmes clés, textes lisibles (≥ 4,5:1)', () => {
  const clair = theme(false);
  const cristal = theme(false, { palette: 'cristal' });
  assert.equal(cristal.sombre, false);
  assert.notEqual(cristal.couleur.fond, clair.couleur.fond);
  assert.deepEqual(Object.keys(cristal.couleur).sort(), Object.keys(clair.couleur).sort());
  // Le thème sombre l'emporte ; réglages d'accessibilité appliqués par-dessus.
  assert.equal(theme(true, { palette: 'cristal' }).couleur.fond, theme(true).couleur.fond);
  assert.equal(theme(false, { palette: 'cristal', contraste: true }).couleur.texte, '#000000');
  assert.equal(theme(false, { palette: 'cristal', taille: 'grande' }).couleur.fond, cristal.couleur.fond);
  const lum = (h) => {
    const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const ratio = (a, b) => { const x = lum(a); const y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const C = cristal.couleur;
  const fonds = [C.fond, C.surface, C.surfaceHaute];
  for (const k of Object.keys(C)) {
    if (['fond', 'surface', 'surfaceHaute', 'trait', 'accentTexte'].includes(k) || k.endsWith('Fond')) continue;
    for (const f of fonds) assert.ok(ratio(C[k], f) >= 4.5, `${k} sur ${f} : ${ratio(C[k], f).toFixed(2)}`);
  }
  assert.ok(ratio(C.accentTexte, C.accent) >= 4.5);
});
