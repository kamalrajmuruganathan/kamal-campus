/** Examen sur mesure lancé ; sujet type brevet → épreuve en conditions réelles démarrée. */
import { test, expect, ouvrirAppli, toucher, texte, visible } from './outils.js';

test('examen sur mesure : classe, matière, chapitres, format → l’examen commence', async ({ page }) => {
  await ouvrirAppli(page);
  await toucher(page, '🎓 Examen sur mesure');
  await visible(page.getByLabel('Classe : Troisième', { exact: true })).click();
  await visible(page.getByLabel('Matière : Mathématiques', { exact: true })).click();
  await visible(page.getByLabel('Cocher tous les chapitres', { exact: true })).click();
  await visible(page.getByLabel(/^Format Express/)).click();
  await toucher(page, 'Commencer');
  // Pendant l'examen : le chrono et la navigation entre questions.
  await expect(visible(page.getByLabel(/^Question 1, sans réponse$/))).toBeVisible();
  await page.screenshot({ path: test.info().outputPath('examen.png') });
});

test('sujet type brevet → épreuve en conditions réelles démarrée', async ({ page }) => {
  await ouvrirAppli(page);
  await toucher(page, 'Sujets type bac / brevet');
  await toucher(page, /^Sixième — Évaluation de maths/, {});
  await visible(page.getByLabel('Passer l\'épreuve en conditions réelles')).click();
  await toucher(page, '▶️ Commencer l’épreuve');
  await expect(texte(page, '⏸️ Pause')).toBeVisible();
  await expect(texte(page, '✅ J\'ai fini')).toBeVisible();
  // La pause masque le sujet.
  await toucher(page, '⏸️ Pause');
  await expect(texte(page, 'Épreuve en pause')).toBeVisible();
  await page.screenshot({ path: test.info().outputPath('epreuve.png') });
});
