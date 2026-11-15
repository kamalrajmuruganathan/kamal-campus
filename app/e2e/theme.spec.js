/** Thème « Bleu cristal » : choisi dans le profil, appliqué à toute l'appli, gardé au rechargement. */
import { test, expect, ouvrirAppli, visible, toucher } from './outils.js';

const CAPTURES = process.env.E2E_CAPTURES || '';

test('choisir le thème « Bleu cristal » dans le profil', async ({ page }) => {
  await ouvrirAppli(page);
  await visible(page.getByRole('button', { name: /^Ma progression/ })).first().click();
  await toucher(page, '💎 Bleu cristal');
  // Fond bleu glacier (#f2f8fd) sur l'écran affiché.
  const fond = () => page.evaluate(() => {
    const els = [...document.querySelectorAll('div')].filter((d) => d.offsetParent !== null && d.getBoundingClientRect().width > 300);
    return els.map((d) => getComputedStyle(d).backgroundColor).filter((c) => c !== 'rgba(0, 0, 0, 0)');
  });
  await expect.poll(fond).toContain('rgb(242, 248, 253)');
  if (CAPTURES) await page.screenshot({ path: `${CAPTURES}/cristal-profil.png` });
  await page.reload();
  await expect(visible(page.getByText('Choisis ton niveau', { exact: false })).first()).toBeVisible({ timeout: 30_000 });
  await expect.poll(fond).toContain('rgb(242, 248, 253)');
  if (CAPTURES) await page.screenshot({ path: `${CAPTURES}/cristal-accueil.png`, fullPage: false });
});
