/** Vitrine (page d'accueil du site) et page « Parents et écoles » : lisibles sur téléphone. */
import { test, expect } from './outils.js';


const PAGES = [
  { chemin: '/kamal-campus/', nom: 'vitrine' },
  { chemin: '/kamal-campus/parents-et-ecoles.html', nom: 'parents et écoles' },
];

for (const { chemin, nom } of PAGES) {
  test(`page ${nom} : pas de défilement horizontal, liens internes valides`, async ({ page, request }) => {
    const reponse = await page.goto(chemin);
    expect(reponse.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
    await page.waitForLoadState('load');

    const { largeur, visible } = await page.evaluate(() => ({
      largeur: document.documentElement.scrollWidth,
      visible: document.documentElement.clientWidth,
    }));
    expect(largeur, 'aucun défilement horizontal').toBeLessThanOrEqual(visible);

    // Aucun élément ne dépasse à droite de l'écran (ce qui obligerait à zoomer).
    const debordants = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      return [...document.querySelectorAll('body *')]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.right > w + 1 && s.position !== 'fixed' && s.visibility !== 'hidden';
        })
        .filter((el) => !el.closest('[aria-hidden="true"]'))
        .slice(0, 5)
        .map((el) => `${el.tagName.toLowerCase()}.${el.className}`);
    });
    expect(debordants, 'éléments qui dépassent à droite').toEqual([]);

    // Liens internes (pages, appli) : tous répondent.
    const liens = await page.evaluate(() =>
      [...document.querySelectorAll('a[href]')]
        .map((a) => a.href)
        .filter((h) => h.startsWith(location.origin))
        .map((h) => h.split('#')[0]),
    );
    for (const lien of [...new Set(liens)]) {
      const r = await request.get(lien);
      expect(r.status(), `lien ${lien}`).toBe(200);
    }
  });
}

test('la vitrine mène à la page « Parents et écoles » et à l’appli', async ({ page }) => {
  await page.goto('/kamal-campus/');
  await page.getByRole('link', { name: 'Parents et écoles' }).first().click();
  await expect(page).toHaveURL(/parents-et-ecoles\.html$/);
  await expect(page.locator('h1').first()).toBeVisible();

  await page.goto('/kamal-campus/');
  await page.locator('a[href="./app/"]').first().click();
  await expect(page).toHaveURL(/\/kamal-campus\/app\/$/);
  await expect(page.getByText('Choisis ton niveau').first()).toBeVisible({ timeout: 30_000 });
});
