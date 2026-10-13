// Service worker de Kamal Campus.
//  - Rend l'appli installable et affiche les rappels de révision.
//  - Hors connexion : garde une copie de l'appli et des chapitres déjà ouverts
//    (fiches, exercices), pour pouvoir réviser sans internet.
//
// Stratégie « réseau d'abord » : avec internet, on prend TOUJOURS la version en
// ligne (le contenu reste à jour) et on met la copie à jour au passage ; sans
// internet, on sert la dernière copie gardée. Seules les requêtes GET vers le site
// lui-même sont concernées (jamais Supabase ni les autres sites).
const CACHE = 'kamal-campus-v1';

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
          const copie = rep.clone();
          caches.open(CACHE).then((c) => c.put(req, copie)).catch(() => {});
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
