// Service worker minimal de Kamal Campus : rend l'appli installable sur l'écran
// d'accueil et permet d'afficher les rappels de révision. Il ne met rien en cache
// (le contenu reste toujours à jour).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((fenetres) => {
      for (const f of fenetres) if ('focus' in f) return f.focus();
      return self.clients.openWindow('./');
    }),
  );
});
