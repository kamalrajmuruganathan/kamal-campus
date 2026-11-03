/**
 * Petit serveur statique (sans dépendance) pour les tests de bout en bout.
 * Sert le dossier donné (par défaut app/e2e-site) : le site est rangé comme sur
 * GitHub Pages, c'est-à-dire sous /kamal-campus/ (vitrine) et /kamal-campus/app/ (appli).
 *
 *   node e2e/serveur.mjs [dossier] [port]
 */
import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const racine = resolve(process.argv[2] ?? new URL('../e2e-site', import.meta.url).pathname);
const port = Number(process.argv[3] ?? process.env.PORT ?? 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

function fichier(chemin) {
  try {
    const s = statSync(chemin);
    if (s.isDirectory()) return fichier(join(chemin, 'index.html'));
    return { chemin, taille: s.size };
  } catch {
    return null;
  }
}

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let rel;
  try {
    rel = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, '');
  } catch {
    res.writeHead(400).end();
    return;
  }
  const absolu = join(racine, rel);
  if (!absolu.startsWith(racine)) {
    res.writeHead(403).end();
    return;
  }
  const f = fichier(absolu);
  if (!f) {
    // Comme GitHub Pages : 404.html du site s'il existe.
    const p404 = fichier(join(racine, 'kamal-campus', '404.html'));
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    if (p404) createReadStream(p404.chemin).pipe(res);
    else res.end('Introuvable');
    return;
  }
  res.writeHead(200, {
    'Content-Type': TYPES[extname(f.chemin).toLowerCase()] ?? 'application/octet-stream',
    'Content-Length': f.taille,
    'Cache-Control': 'no-cache',
  });
  if (req.method === 'HEAD') res.end();
  else createReadStream(f.chemin).pipe(res);
}).listen(port, '127.0.0.1', () => {
  console.log(`Site de test : http://127.0.0.1:${port}/kamal-campus/app/ (dossier ${racine})`);
});
