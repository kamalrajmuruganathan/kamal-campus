/** Dictée : recopier exactement le texte donne 10/10. */
import { readFileSync } from 'node:fs';
import { test, expect, ouvrirAppli, toucher, texte, visible } from './outils.js';

const FICHIER = new URL('../e2e-site/kamal-campus/app/donnees/dictees/troisieme.json', import.meta.url);

test('dictée de 3e recopiée sans faute → 10/10', async ({ page }) => {
  const { dictees } = JSON.parse(readFileSync(FICHIER, 'utf8'));
  const dictee = dictees[0];
  await ouvrirAppli(page);
  await toucher(page, '✍️ Dictées');
  await toucher(page, '3e');
  await toucher(page, dictee.titre);
  await expect(texte(page, /^Phrase 1/, {})).toBeVisible();
  await visible(page.getByLabel('Zone de saisie de la dictée')).fill(dictee.texte);
  await toucher(page, '✅ Corriger');
  await expect(visible(page.getByLabel('Note : 10 sur 10'))).toBeVisible();
});
