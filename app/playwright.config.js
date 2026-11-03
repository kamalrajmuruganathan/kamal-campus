/**
 * Tests de bout en bout (Playwright) : on parcourt les écrans de l'appli web
 * comme un élève, sur un téléphone simulé (390 × 844), Supabase simulé.
 *
 *   npm run e2e            (construit le site si besoin, puis lance les tests)
 *   E2E_RECONSTRUIRE=1 npm run e2e   (force la reconstruction du site)
 *
 * Le site est construit dans app/e2e-site/ (ignoré par git), rangé comme sur GitHub Pages.
 * En local seulement : CHROMIUM_CHEMIN=/chemin/vers/chromium pour utiliser un Chromium déjà installé.
 */
import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.E2E_PORT ?? 4173);
const chromium = process.env.CHROMIUM_CHEMIN;

export default defineConfig({
  testDir: './e2e',
  testMatch: /.*\.spec\.js$/,
  globalSetup: './e2e/construire-site.mjs',
  outputDir: './e2e-resultats',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : 3,
  reporter: process.env.CI
    ? [['list'], ['html', { outputFolder: 'e2e-rapport', open: 'never' }]]
    : [['list']],
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    ...devices['Desktop Chrome'],
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: false,
    hasTouch: true,
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris',
    serviceWorkers: 'block',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: chromium ? { executablePath: chromium } : {},
  },
  webServer: {
    command: `node e2e/serveur.mjs e2e-site ${PORT}`,
    url: `http://127.0.0.1:${PORT}/kamal-campus/app/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
