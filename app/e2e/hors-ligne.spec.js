/**
 * Hors connexion (web) : télécharger les chapitres d'un parcours, couper le réseau,
 * recharger l'appli : la fiche reste lisible (formules comprises).
 */
import { test, expect, ouvrirAppli, toucher, texte, visible, APPLI } from './outils.js';

// Vraie horloge : l'appli lit `performance` pour savoir quels morceaux de code garder.
test.use({ serviceWorkers: 'allow', horsLigne: true, horloge: null });

test('télécharger un parcours, couper le réseau, recharger : la fiche est lisible', async ({ page, context }) => {
  test.setTimeout(120_000);
  await ouvrirAppli(page);
  // Toute première visite : le service worker s'installe et prend la main sur la page
  // (la page et son code, chargés avant lui, ne sont pas encore en cache).
  await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller), { timeout: 15_000 }).toBe(true);

  await toucher(page, 'Troisième');
  await toucher(page, 'Physique-chimie');
  await visible(page.getByLabel('Télécharger ces chapitres pour les réviser hors connexion')).click();
  await expect(texte(page, '✅ Disponible hors connexion')).toBeVisible({ timeout: 60_000 });

  await context.setOffline(true);
  await page.reload();
  await expect(page.getByText('Choisis ton niveau').first()).toBeVisible({ timeout: 30_000 });
  await expect(texte(page, 'Hors connexion : les chapitres déjà ouverts ou téléchargés restent disponibles.')).toBeVisible();
  await toucher(page, 'Troisième');
  await toucher(page, 'Physique-chimie');
  await toucher(page, 'Masse volumique');
  const fiche = page.frameLocator('iframe').first();
  await expect(fiche.locator('h1').first()).toContainText('Masse volumique');
  await expect(fiche.locator('.katex').first()).toBeVisible();
  // Les exercices aussi sont disponibles.
  await toucher(page, /^Exercices · \d+$/, {});
  await expect(visible(page.getByLabel(/^Réponse à l'exercice 1$|^Ta réponse rédigée à l'exercice 1$/)).first()).toBeVisible();
  await context.setOffline(false);
});
