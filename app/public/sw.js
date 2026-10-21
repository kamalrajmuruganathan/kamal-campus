// Service worker de Kamal Campus.
//  - Rend l'appli installable et affiche les rappels de révision.
//  - Hors connexion : garde une copie de l'appli et des chapitres déjà ouverts
//    (fiches, exercices), pour pouvoir réviser sans internet.
//
// Stratégie « réseau d'abord » : avec internet, on prend TOUJOURS la version en
// ligne (le contenu reste à jour) et on met la copie à jour au passage ; sans
// internet, on sert la dernière copie gardée. Seules les requêtes GET vers le site
// lui-même sont concernées (jamais Supabase ni les autres sites).
//
// Nom du cache : NE PAS le changer à la légère. Le même nom est utilisé par
// src/horsLigne.web.js, et changer de nom effacerait les chapitres que les élèves
// ont téléchargés pour réviser sans internet. Le ménage des anciennes versions de
// l'appli se fait plutôt fichier par fichier (voir `menage` ci-dessous).
const CACHE = 'kamal-campus-v1';

// Fichiers de l'appli produits par « expo export » : leur nom contient une
// empreinte (index-<32 caractères hexadécimaux>.js), qui change à chaque publication.
const DOSSIER_APPLI = '/_expo/static/';
const RE_ASSET_HTML = /_expo\/static\/[^"'\s)]+/g;
const RE_EMPREINTE = /[0-9a-f]{32}/g;

// Empreintes trouvées dans un bundle (mémorisées : un bundle ne change jamais de contenu).
const empreintesDe = new Map();

const nomFichier = (chemin) => chemin.slice(chemin.lastIndexOf('/') + 1);
const estAppli = (url) => new URL(url).pathname.includes(DOSSIER_APPLI);

/**
 * Ménage sûr : retire du cache les fichiers `_expo/static/…` d'anciennes
 * publications (≈ 16 Mo chacune), et seulement eux.
 * Garde : les fichiers cités par la page de l'appli (`html`), et les morceaux
 * chargés à la demande dont l'empreinte figure dans ces fichiers.
 * Ne touche jamais aux fiches, exercices, dictées (public/donnees/) ni aux pages.
 * Si un fichier cité par la page n'est pas encore en cache, ne fait rien
 * (le ménage aura lieu au prochain passage).
 */
async function menage(html) {
  const cites = new Set((String(html || '').match(RE_ASSET_HTML) || []).map(nomFichier));
  if (cites.size === 0) return;
  const c = await caches.open(CACHE);
  const cles = (await c.keys()).filter((k) => estAppli(k.url));
  const candidates = cles.filter((k) => !cites.has(nomFichier(new URL(k.url).pathname)));
  if (candidates.length === 0) return;

  // Empreintes citées par les fichiers JS de la page (morceaux chargés à la demande).
  const empreintes = new Set();
  for (const nom of cites) {
    if (!nom.endsWith('.js')) continue;
    const k = cles.find((x) => nomFichier(new URL(x.url).pathname) === nom);
    if (!k) return; // la nouvelle version n'est pas encore entièrement en cache
    if (!empreintesDe.has(nom)) {
      const rep = await c.match(k);
      if (!rep) return;
      empreintesDe.set(nom, new Set((await rep.text()).match(RE_EMPREINTE) || []));
    }
    for (const e of empreintesDe.get(nom)) empreintes.add(e);
  }
  await Promise.all(
    candidates
      .filter((k) => !(nomFichier(new URL(k.url).pathname).match(RE_EMPREINTE) || []).some((e) => empreintes.has(e)))
      .map((k) => c.delete(k)),
  );
}

/** Page HTML de l'appli gardée en cache (celle qui a chargé `req`, sinon l'accueil). */
async function pageGardee(req) {
  const c = await caches.open(CACHE);
  const essais = [req.referrer, new URL('./', self.registration.scope).href, new URL('./index.html', self.registration.scope).href];
  for (const u of essais) {
    if (!u) continue;
    const r = await c.match(u, { ignoreSearch: true });
    if (r && (r.headers.get('Content-Type') || '').includes('text/html')) return r.text();
  }
  return '';
}

/** Met la réponse en cache, puis fait le ménage si c'est une nouvelle page ou un nouveau bundle. */
async function garder(req, rep) {
  const c = await caches.open(CACHE);
  const html = req.mode === 'navigate' && (rep.headers.get('Content-Type') || '').includes('text/html');
  const texte = html ? await rep.clone().text() : null;
  await c.put(req, rep);
  if (html) return menage(texte);
  if (estAppli(req.url) && new URL(req.url).pathname.endsWith('.js')) {
    const page = await pageGardee(req);
    // Seulement pour un fichier cité par la page (pas pour un morceau chargé à la demande).
    if (page.includes(nomFichier(new URL(req.url).pathname))) return menage(page);
  }
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((noms) => Promise.all(noms.filter((n) => n.startsWith('kamal-campus-') && n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  ),
);

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  e.respondWith(
    fetch(req)
      .then((rep) => {
        if (rep && rep.ok && rep.type === 'basic') {
          e.waitUntil(garder(req, rep.clone()).catch(() => {}));
        }
        return rep;
      })
      .catch(async () => {
        const c = await caches.open(CACHE);
        const garde = await c.match(req, { ignoreSearch: true });
        if (garde) return garde;
        // Page de l'appli demandée hors connexion (ex. /app/Chapitre) → la page d'accueil gardée.
        if (req.mode === 'navigate') {
          const accueil = (await c.match(new URL('./', self.registration.scope).href)) || (await c.match(new URL('./index.html', self.registration.scope).href));
          if (accueil) return accueil;
        }
        return new Response('Hors connexion', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }),
  );
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((fenetres) => {
      for (const f of fenetres) if ('focus' in f) return f.focus();
      return self.clients.openWindow('./');
    }),
  );
});
