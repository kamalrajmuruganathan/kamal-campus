/**
 * Parcours d'un élève : classe → matière → chapitre → fiche (formules KaTeX) → QCM complet → score,
 * puis les questions ratées apparaissent dans le carnet d'erreurs.
 */
import { test, expect, ouvrirAppli, toucher, texte, visible, APPLI } from './outils.js';

test('classe → matière → chapitre → fiche → QCM → score → carnet d’erreurs', async ({ page }) => {
  test.setTimeout(120_000);
  await ouvrirAppli(page);

  await toucher(page, 'Troisième');
  await toucher(page, 'Mathématiques');
  await toucher(page, 'Puissances : exposants négatifs et notation scientifique');

  // Fiche : rendue dans une iframe, avec des formules KaTeX.
  const fiche = page.frameLocator('iframe').first();
  await expect(fiche.locator('h1, h2').first()).toBeVisible();
  await expect(fiche.locator('.katex').first()).toBeVisible();
  expect(await fiche.locator('.katex-error').count(), 'aucune formule en erreur').toBe(0);

  // QCM complet : on répond toujours « A » et on compte les bonnes réponses annoncées.
  await toucher(page, /^QCM · \d+ questions$/, { exact: false });
  const total = Number((await texte(page, /^Question 1 \/ \d+$/, {}).innerText()).split('/')[1]);
  expect(total).toBe(20);
  let justes = 0;
  for (let i = 1; i <= total; i++) {
    await expect(texte(page, `Question ${i} / ${total}`)).toBeVisible();
    await visible(page.getByRole('button').filter({ hasText: /^A$/ })).first().click();
    const verdict = visible(page.getByText(/^(Correct|Réponse : [A-F])$/)).first();
    await expect(verdict).toBeVisible();
    if ((await verdict.innerText()) === 'Correct') justes++;
    await toucher(page, i < total ? 'Question suivante' : 'Voir mon résultat');
  }
  await expect(texte(page, `${justes} / ${total}`)).toBeVisible();
  await expect(texte(page, `${Math.round((justes / total) * 100)} % de bonnes réponses`)).toBeVisible();
  // Choix mélangés : toujours « A » ne peut pas tout réussir.
  expect(justes).toBeLessThan(total);

  // Carnet d'erreurs : les questions ratées y sont, à revoir plus tard (1er rappel dans 1 jour).
  await page.goto(APPLI);
  await toucher(page, '📒 Mon carnet d’erreurs');
  const rates = total - justes;
  await expect(texte(page, 'Puissances : exposants négatifs et notation scientifique', { exact: false })).toBeVisible();
  await expect(texte(page, `${rates} erreur${rates > 1 ? 's' : ''}`)).toBeVisible();
  await expect(texte(page, 'Rien à revoir aujourd', { exact: false })).toBeVisible();
});

test('signaler une erreur sur une fiche : la ligne part vers Supabase (simulé)', async ({ page, journalSupabase }) => {
  await ouvrirAppli(page);
  await toucher(page, 'Troisième');
  await toucher(page, 'Mathématiques');
  await toucher(page, 'Puissances : exposants négatifs et notation scientifique');
  await visible(page.getByLabel('Signaler une erreur', { exact: true })).first().click();
  await visible(page.getByLabel('Décris l’erreur')).fill('Test automatique : coquille dans le deuxième paragraphe.');
  await toucher(page, 'Envoyer');
  await expect(texte(page, 'Merci ! Ton signalement a été envoyé. Un professeur le lira.')).toBeVisible();
  const envoi = journalSupabase.find((r) => r.methode === 'POST' && r.chemin === '/rest/v1/signalements');
  expect(envoi, 'signalement envoyé').toBeTruthy();
  expect(JSON.parse(envoi.corps)).toMatchObject({ chapitre_id: expect.stringContaining('puissances') });
});
