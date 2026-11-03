/**
 * Outils communs des tests de bout en bout :
 *  - Supabase entièrement simulé (aucune requête ne sort du navigateur) ;
 *  - session et profil de test posés dans le localStorage avant le chargement ;
 *  - relevé des erreurs JavaScript et des erreurs de la console.
 */
import { test as base, expect } from '@playwright/test';

export const SUPABASE = 'https://zxhxevucpuudknyfidla.supabase.co';
export const APPLI = '/kamal-campus/app/';
export const ID_TEST = '00000000-0000-4000-8000-00000000e2e0';

export const UTILISATEUR = {
  id: ID_TEST,
  aud: 'authenticated',
  role: 'authenticated',
  email: 'eleve.test@example.com',
  email_confirmed_at: '2026-09-01T08:00:00Z',
  app_metadata: { provider: 'email', providers: ['email'] },
  user_metadata: {},
  created_at: '2026-09-01T08:00:00Z',
  updated_at: '2026-09-01T08:00:00Z',
};

const SESSION = {
  access_token: 'jeton-de-test',
  refresh_token: 'jeton-de-rafraichissement',
  token_type: 'bearer',
  expires_in: 3600,
  expires_at: 4102444800, // 2100 : jamais expirée pendant les tests
  user: UTILISATEUR,
};

/** Profil de départ : onboarding fait, classe choisie. */
export function profilTest(niveau = 'troisieme', extra = {}) {
  return { version: 1, onboardingFait: true, prenom: 'Léa', niveau, ...extra };
}

/** Répond à toutes les requêtes Supabase (REST, RPC, auth, temps réel) sans réseau. */
export async function simulerSupabase(context, journal = []) {
  await context.route(`${SUPABASE}/**`, async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    const methode = req.method();
    journal.push({ methode, chemin: url.pathname, corps: req.postData() });
    const json = (status, corps) =>
      route.fulfill({
        status,
        contentType: 'application/json',
        headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' },
        body: corps === undefined ? '' : JSON.stringify(corps),
      });
    if (methode === 'OPTIONS') return json(204);
    const p = url.pathname;
    if (p.startsWith('/auth/v1/user')) return json(200, UTILISATEUR);
    if (p.startsWith('/auth/v1/token')) return json(200, SESSION);
    if (p.startsWith('/auth/v1/logout')) return json(204);
    if (p.startsWith('/auth/v1/')) return json(200, {});
    if (p.startsWith('/rest/v1/rpc/')) return json(200, null);
    if (p.startsWith('/rest/v1/signalements')) return json(201);
    if (p.startsWith('/rest/v1/')) {
      if (methode === 'GET' || methode === 'HEAD') {
        // .single() / .maybeSingle() : objet attendu, aucune ligne → null.
        const objet = (req.headers()['accept'] ?? '').includes('vnd.pgrst.object');
        return objet ? json(406, { code: 'PGRST116', message: 'no rows', details: '', hint: null }) : json(200, []);
      }
      return json(201, []);
    }
    return json(404, {});
  });
  // Polices Google de la vitrine : feuille vide (tests sans internet, rendu stable).
  await context.route('https://fonts.googleapis.com/**', (route) => route.fulfill({ status: 200, contentType: 'text/css', body: '' }));
  // Temps réel (WebSocket) : socket simulée, jamais reliée au vrai serveur.
  await context.routeWebSocket(/supabase\.co\/realtime/, () => {});
}

/** Pose la session et le profil dans le localStorage (seulement s'ils n'y sont pas déjà). */
export async function poserSession(context, profil = profilTest()) {
  await context.addInitScript(
    ({ session, profil, id }) => {
      try {
        const cleSession = 'sb-zxhxevucpuudknyfidla-auth-token';
        if (!localStorage.getItem(cleSession)) localStorage.setItem(cleSession, JSON.stringify(session));
        const cleProfil = `kamal-campus/progression/v1/${id}`;
        if (!localStorage.getItem(cleProfil)) localStorage.setItem(cleProfil, JSON.stringify(profil));
      } catch {}
    },
    { session: SESSION, profil, id: ID_TEST },
  );
}

/** Erreurs ignorées : réseau Supabase (simulé). */
const IGNOREES = [/supabase\.co/i];
/** Erreurs réseau, ignorées seulement quand le test coupe le réseau exprès (option `horsLigne`). */
const RESEAU = [/Failed to load resource/i, /net::ERR_/i, /ERR_INTERNET_DISCONNECTED/i];

/**
 * Fixture `page` enrichie : Supabase simulé, session posée, et à la fin du test,
 * échec s'il y a eu une erreur JavaScript ou une erreur dans la console.
 * Options : `profil` (test.use({ profil })) pour changer la classe de départ ;
 * `horsLigne: true` pour tolérer les erreurs réseau d'un test qui coupe le réseau ;
 * `horloge` : date fixe (par défaut) ou null pour la vraie horloge.
 */
export const test = base.extend({
  profil: [profilTest(), { option: true }],
  horsLigne: [false, { option: true }],
  // Horloge fixe (mercredi 4 novembre 2026, 10 h, heure de Paris) : bannières et défis du jour stables.
  // null = vraie horloge (l'horloge simulée de Playwright remplace aussi `performance`, vide).
  horloge: [new Date('2026-11-04T10:00:00+01:00'), { option: true }],
  journalSupabase: async ({}, use) => {
    await use([]);
  },
  context: async ({ context, profil, journalSupabase }, use) => {
    await simulerSupabase(context, journalSupabase);
    await poserSession(context, profil);
    await use(context);
  },
  erreurs: async ({}, use) => {
    await use([]);
  },
  page: async ({ page, erreurs, horsLigne, horloge }, use) => {
    page.on('pageerror', (e) => erreurs.push(`Erreur JS : ${e.message}`));
    page.on('console', (m) => {
      if (m.type() !== 'error') return;
      const texte = m.text();
      const lieu = m.location()?.url ?? '';
      if (IGNOREES.some((r) => r.test(texte) || r.test(lieu))) return;
      if (horsLigne && RESEAU.some((r) => r.test(texte))) return;
      erreurs.push(`Console : ${texte}`);
    });
    if (horloge) await page.clock.setFixedTime(horloge);
    await use(page);
    expect(erreurs, 'aucune erreur JavaScript ni console').toEqual([]);
  },
});

export { expect };

/** Ouvre l'appli et attend l'accueil. */
export async function ouvrirAppli(page) {
  await page.goto(APPLI);
  await expect(page.getByText('Choisis ton niveau', { exact: false }).first()).toBeVisible({ timeout: 30_000 });
}

/** Seuls les éléments visibles (la pile de navigation garde les écrans précédents, masqués, dans la page). */
export const visible = (locator) => locator.filter({ visible: true });

/** Texte visible à l'écran (premier trouvé). */
export const texte = (page, t, options = { exact: true }) => visible(page.getByText(t, options)).first();

/** Touche un élément par son texte visible. */
export async function toucher(page, t, options = { exact: true }) {
  await texte(page, t, options).click();
}
