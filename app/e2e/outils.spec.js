/** Accueil, recherche, résolveur pas à pas et outils de calcul. */
import { test, expect, ouvrirAppli, toucher, texte, visible } from './outils.js';

test('l’accueil s’affiche sans erreur', async ({ page }) => {
  await ouvrirAppli(page);
  await expect(texte(page, 'Salut Léa 👋')).toBeVisible();
  await expect(texte(page, /^21 matières — \d+ chapitres/, {})).toBeVisible();
  for (const classe of ['CP', 'Sixième', 'Troisième', 'Terminale']) await expect(texte(page, classe)).toBeVisible();
  // Pas de défilement horizontal sur un téléphone.
  const largeur = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(largeur).toBeLessThanOrEqual(390);
});

test('recherche « Pythagore » → un chapitre de géométrie', async ({ page }) => {
  await ouvrirAppli(page);
  await toucher(page, '🔎 Rechercher');
  await visible(page.getByPlaceholder('Chercher un chapitre, une notion…')).fill('Pythagore');
  const resultat = texte(page, /«[^»]*Pythagore[^»]*»/i, {});
  await expect(resultat).toBeVisible();
  await expect(texte(page, 'Aucun chapitre trouvé.')).toBeHidden();
  // Le premier résultat ouvre bien une fiche.
  await resultat.click();
  await expect(page.frameLocator('iframe').first().locator('h1, h2').first()).toBeVisible();
});

test('résolveur : -x^2+1=0 → x = -1 ou x = 1', async ({ page }) => {
  await ouvrirAppli(page);
  await toucher(page, '🧮 Résolveur pas à pas');
  await visible(page.getByPlaceholder('ex. 2x + 5 = 13')).fill('-x^2+1=0');
  await toucher(page, 'Résoudre');
  await expect(texte(page, /^x = -1\s+ou\s+x = 1$/, {})).toBeVisible();
  await expect(texte(page, 'Δ = b² − 4ac = 4.')).toBeVisible();
});

test('outils : second degré x² − 3x + 2', async ({ page }) => {
  await ouvrirAppli(page);
  await toucher(page, 'Outils de calcul');
  await toucher(page, 'Second degré');
  const champs = visible(page.locator('input'));
  await champs.nth(0).fill('1');
  await champs.nth(1).fill('-3');
  await champs.nth(2).fill('2');
  await toucher(page, 'Calculer');
  await expect(texte(page, 'Δ = b² − 4ac = (-3)² − 4 × 1 × 2 = 1')).toBeVisible();
  await expect(texte(page, /x₁ = 1, x₂ = 2$/, {})).toBeVisible();
  await expect(texte(page, 'f(x) = (x - 1)(x - 2)')).toBeVisible();
});
