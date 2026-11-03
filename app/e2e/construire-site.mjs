/**
 * Avant les tests : construit le site web dans app/e2e-site/ (comme pages.yml),
 * sauf s'il existe déjà (E2E_RECONSTRUIRE=1 pour forcer).
 *   e2e-site/kamal-campus/            ← vitrine (web-vitrine/*.html)
 *   e2e-site/kamal-campus/app/        ← appli (expo export, baseUrl /kamal-campus/app)
 */
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const app = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(app, 'e2e-site');
const sortie = join(site, 'kamal-campus');

export default function construireSite() {
  const pret = existsSync(join(sortie, 'app', 'index.html')) && existsSync(join(sortie, 'index.html'));
  if (pret && !process.env.E2E_RECONSTRUIRE) return;
  rmSync(site, { recursive: true, force: true });
  const lancer = (cmd) => execSync(cmd, { cwd: app, stdio: 'inherit' });
  lancer('npm run preparer');
  lancer(`npx expo export --platform web --output-dir ${JSON.stringify(join(sortie, 'app'))}`);
  const vitrine = join(app, '..', 'web-vitrine');
  mkdirSync(sortie, { recursive: true });
  for (const f of readdirSync(vitrine)) if (f.endsWith('.html')) cpSync(join(vitrine, f), join(sortie, f));
}
