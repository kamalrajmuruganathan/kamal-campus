import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { sansEmoji, texteLisible, reglagesAffichage, cssAccessibilite, cssPolice } from './index.js';

test('sansEmoji : retire les pictogrammes, garde le texte et la ponctuation', () => {
  assert.equal(sansEmoji('📒 Mon carnet d’erreurs'), 'Mon carnet d’erreurs');
  assert.equal(sansEmoji('⏱️ Révision express (2 min)'), 'Révision express (2 min)');
  assert.equal(sansEmoji('👨‍👩‍👧 Espace parent'), 'Espace parent');
  assert.equal(sansEmoji('Garde ta série 🔥'), 'Garde ta série');
  assert.equal(sansEmoji('🇫🇷 Français'), 'Français');
  assert.equal(sansEmoji('CE2 · 41 chapitres'), 'CE2 · 41 chapitres');
  assert.equal(sansEmoji('Équation : x = 3 ✓'), 'Équation : x = 3');
  assert.equal(sansEmoji(null), '');
  // Les chiffres et les signes ne sont pas des emojis.
  assert.equal(sansEmoji('1 + 2 = 3 # 4 * 5'), '1 + 2 = 3 # 4 * 5');
});

test('texteLisible : formules lues en mots, Markdown retiré', () => {
  assert.equal(texteLisible('$x^2$'), 'x au carré');
  assert.match(texteLisible('La valeur **exacte** est $\\frac{1}{2}$.'), /^La valeur exacte est .*1.*2.*\.$/);
  assert.equal(texteLisible('*Le* chat'), 'Le chat');
  assert.equal(texteLisible('- un\n- deux'), 'un deux');
  assert.equal(texteLisible('Paris'), 'Paris');
  assert.ok(!/[$\\*]/.test(texteLisible('$\\sqrt{16} = 4$ et **gras**')));
});

test('reglagesAffichage : valeurs par défaut et normalisation', () => {
  assert.deepEqual(reglagesAffichage(null), { taille: 'normale', contraste: false, policeAdaptee: false, interligne: false, animationsReduites: false });
  const r = reglagesAffichage({ tailleTexte: 'grande', contrasteFort: 1, policeDyslexie: true, interligneLarge: true, animationsReduites: true });
  assert.deepEqual(r, { taille: 'grande', contraste: true, policeAdaptee: true, interligne: true, animationsReduites: true });
  assert.equal(reglagesAffichage({ tailleTexte: 'énorme' }).taille, 'normale');
});

test('cssAccessibilite : focus toujours visible, options ajoutées seulement si choisies', () => {
  const base = cssAccessibilite(reglagesAffichage({}), { accent: '#123456' });
  assert.match(base, /:focus-visible\{outline:3px solid #123456/);
  assert.match(base, /prefers-reduced-motion/);
  assert.doesNotMatch(base, /Atkinson/);
  assert.doesNotMatch(base, /line-height:1\.6/);
  const tout = cssAccessibilite(reglagesAffichage({ policeDyslexie: true, interligneLarge: true, animationsReduites: true, tailleTexte: 'tres-grande' }),
    { racine: '#root', lignes: '[dir="auto"]', fiche: true });
  assert.match(tout, /#root \*:not\(\.katex\)[^{]*\{font-family:"Atkinson Hyperlegible"/);
  assert.match(tout, /#root \[dir="auto"\]:not\(\.katex \*\)\{line-height:1\.6/);
  assert.match(tout, /animation-duration:\.01ms/);
  assert.match(tout, /body\{font-size:22px/);
  // Les formules gardent leur police (KaTeX).
  assert.match(tout, /:not\(\.katex\)/);
});

test('cssPolice : les quatre fichiers livrés existent, avec leur licence OFL', () => {
  const css = cssPolice('polices/');
  const fichiers = [...css.matchAll(/url\("polices\/([^"]+)"\)/g)].map((m) => m[1]);
  assert.equal(fichiers.length, 4);
  for (const f of fichiers) {
    const octets = readFileSync(new URL(`../../public/polices/${f}`, import.meta.url));
    assert.equal(octets.subarray(0, 4).toString('latin1'), 'wOF2', f);
  }
  const licence = readFileSync(new URL('../../public/polices/OFL.txt', import.meta.url), 'utf8');
  assert.match(licence, /SIL Open Font License, Version 1\.1/);
});
