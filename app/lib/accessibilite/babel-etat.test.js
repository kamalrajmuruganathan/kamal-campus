import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const babel = require('@babel/core');
const plugin = require('../../scripts/babel-etat-accessible.cjs');

const transformer = (code, filename = '/app/src/ecrans/X.js') => babel.transformSync(code, {
  filename, babelrc: false, configFile: false, plugins: ['@babel/plugin-syntax-jsx', plugin],
}).code;

test('accessibilityState → attributs ARIA selon le rôle', () => {
  const sortie = transformer(`
    const a = <P accessibilityRole="button" accessibilityState={{ selected: actif }} />;
    const b = <P accessibilityRole="tab" accessibilityState={{ selected: x === 1 }} />;
    const c = <P accessibilityRole="radio" accessibilityState={{ checked: on, disabled: plein }} />;
    const d = <P accessibilityRole="switch" accessibilityState={{ checked: !!p.a }} />;
    const e = <P accessibilityState={{ expanded: ouvert, busy }} />;
    const f = <P accessibilityRole="checkbox" accessibilityState={{ selected: s }} />;`);
  assert.match(sortie, /accessibilityState=\{\{\s*selected: actif\s*\}\} aria-pressed=\{!!actif\}/);
  assert.match(sortie, /aria-selected=\{!!\(x === 1\)\}/);
  assert.match(sortie, /aria-checked=\{!!on\} aria-disabled=\{!!plein\}/);
  assert.match(sortie, /aria-checked=\{!!!!p\.a\}/);
  assert.match(sortie, /aria-expanded=\{!!ouvert\} aria-busy=\{!!busy\}/);
  assert.match(sortie, /accessibilityRole="checkbox" accessibilityState=\{\{\s*selected: s\s*\}\} aria-checked=\{!!s\}/);
});

test('un attribut ARIA déjà écrit est gardé ; hors de app/src rien ne change', () => {
  const s1 = transformer('<P accessibilityRole="switch" accessibilityState={{ checked: a }} aria-checked={b} />;');
  assert.equal((s1.match(/aria-checked/g) || []).length, 1);
  assert.match(s1, /aria-checked=\{b\}/);
  const s2 = transformer('<P accessibilityState={{ disabled: a }} />;', '/app/node_modules/x/src/Y.js');
  assert.doesNotMatch(s2, /aria-disabled/);
  const s3 = transformer('<P accessibilityState={etat} />;');
  assert.doesNotMatch(s3, /aria-/);
});

test('Pressable sans rôle → bouton ; rôle existant ou props étalées : inchangé', () => {
  assert.match(transformer('<Pressable onPress={f}><T /></Pressable>;'), /<Pressable onPress=\{f\} accessibilityRole="button">/);
  assert.match(transformer('<Pressable accessibilityRole="link" />;'), /^<Pressable accessibilityRole="link" \/>;$/);
  assert.doesNotMatch(transformer('<Pressable {...p} />;'), /accessibilityRole/);
  assert.doesNotMatch(transformer('<View onPress={f} />;'), /accessibilityRole/);
});
