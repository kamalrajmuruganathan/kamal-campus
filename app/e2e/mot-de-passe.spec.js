/**
 * Mot de passe oublié : e-mail → code provisoire → nouveau mot de passe → l'appli s'ouvre.
 * Élève NON connecté (pas de session posée) ; Supabase simulé.
 */
import { test, expect } from '@playwright/test';
import { simulerSupabase, SUPABASE, APPLI, UTILISATEUR } from './outils.js';

const CODE = '48213907';
const CAPTURES = process.env.E2E_CAPTURES || '';

test('mot de passe oublié : code provisoire puis nouveau mot de passe', async ({ context, page }) => {
  const journal = [];
  const erreurs = [];
  page.on('pageerror', (e) => erreurs.push(e.message));
  await simulerSupabase(context, journal);
  // Routes de récupération (enregistrées après : elles passent en premier).
  await context.route(`${SUPABASE}/auth/v1/**`, async (route) => {
    const req = route.request();
    const p = new URL(req.url()).pathname;
    const repondre = (status, corps) => route.fulfill({
      status, contentType: 'application/json',
      headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' },
      body: JSON.stringify(corps),
    });
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    journal.push({ methode: req.method(), chemin: p, corps: req.postData() });
    if (p.endsWith('/recover')) return repondre(200, {});
    if (p.endsWith('/verify')) {
      const corps = JSON.parse(req.postData() || '{}');
      if (corps.token !== CODE) return repondre(403, { code: 403, error_code: 'otp_expired', msg: 'Token has expired or is invalid' });
      return repondre(200, {
        access_token: 'jeton-recuperation', refresh_token: 'r', token_type: 'bearer',
        expires_in: 3600, expires_at: 4102444800, user: UTILISATEUR,
      });
    }
    if (p.endsWith('/user')) return repondre(200, UTILISATEUR);
    return route.fallback();
  });

  await page.goto(APPLI);
  await expect(page.getByText('Mot de passe oublié ?')).toBeVisible({ timeout: 30_000 });
  if (CAPTURES) await page.screenshot({ path: `${CAPTURES}/mdp-1-connexion.png` });
  await page.getByText('Mot de passe oublié ?').click();
  await expect(page.getByRole('heading', { name: 'Mot de passe oublié' })).toBeVisible();
  await page.getByLabel('Adresse e-mail').fill('eleve.test@example.com');
  await page.getByText('Recevoir un code', { exact: true }).click();
  await expect(page.getByText(/valable 10 minutes/).last()).toBeVisible();
  expect(journal.some((j) => j.chemin.endsWith('/recover') && j.corps.includes('eleve.test@example.com'))).toBe(true);
  await expect(page.getByText(/Renvoyer un code \(dans \d+ s\)/)).toBeVisible();
  if (CAPTURES) await page.screenshot({ path: `${CAPTURES}/mdp-2-code.png`, fullPage: true });

  // Mots de passe différents : refusé avant tout envoi.
  await page.getByLabel('Code reçu par e-mail').fill('1234 5678');
  await page.getByLabel('Nouveau mot de passe', { exact: true }).fill('nouveau-mdp');
  await page.getByLabel('Confirmer le nouveau mot de passe').fill('autre-mdp');
  await page.getByText('Changer mon mot de passe', { exact: true }).click();
  await expect(page.getByText('Les deux mots de passe ne sont pas identiques.')).toBeVisible();

  // Mauvais code : message en français, on reste sur l'écran.
  await page.getByLabel('Confirmer le nouveau mot de passe').fill('nouveau-mdp');
  await page.getByText('Changer mon mot de passe', { exact: true }).click();
  await expect(page.getByText(/Code incorrect ou expiré/)).toBeVisible();

  // Bon code : le mot de passe est changé et l'appli s'ouvre.
  await page.getByLabel('Code reçu par e-mail').fill(CODE);
  await page.getByText('Changer mon mot de passe', { exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Mot de passe oublié' })).toBeHidden({ timeout: 15_000 });
  const maj = journal.find((j) => j.methode === 'PUT' && j.chemin.endsWith('/user'));
  expect(maj && JSON.parse(maj.corps).password).toBe('nouveau-mdp');
  expect(erreurs).toEqual([]);
});
