/**
 * Dictées (web) : chaque niveau est un petit fichier public/donnees/dictees/<groupe>.json
 * (copié par scripts/generer-index.mjs), téléchargé seulement quand on ouvre les dictées.
 * Le service worker (public/sw.js) en garde une copie : les dictées déjà ouvertes
 * marchent ensuite hors connexion ; prechargerDictees() les télécharge toutes d'un coup.
 */
import { GROUPES } from '../lib/dictee';

const cache = new Map();

// Dossier de l'appli (ex. /kamal-campus/app/), comme dans contenu-lourd.web.js.
function base() {
  try {
    const url = new URL(document.baseURI);
    const i = url.pathname.indexOf('/app/');
    const dossier = i >= 0 ? url.pathname.slice(0, i + 5) : url.pathname.replace(/[^/]*$/, '');
    return url.origin + dossier;
  } catch {
    return './';
  }
}

/** Dictées d'un groupe (« ce1 », « anglais »…) : promesse de { groupe, libelle, matiere, dictees } ou null. */
export function chargerDictees(groupe) {
  if (!GROUPES.some((g) => g.groupe === groupe)) return Promise.resolve(null);
  if (cache.has(groupe)) return cache.get(groupe);
  const promesse = fetch(`${base()}donnees/dictees/${groupe}.json`)
    .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
    .catch(() => { cache.delete(groupe); return null; });
  cache.set(groupe, promesse);
  return promesse;
}

/** Télécharge tous les niveaux (≈ 100 Ko) pour pouvoir faire les dictées sans internet. */
export function prechargerDictees() {
  for (const g of GROUPES) chargerDictees(g.groupe);
}
