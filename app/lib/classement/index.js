/**
 * Classement de la semaine entre amis — logique pure (aucune dépendance réseau).
 *
 * Le profil local garde deux champs :
 *   - `semaineXp`      : lundi de la semaine suivie, « AAAA-MM-JJ » (même convention que la ligue) ;
 *   - `xpDebutSemaine` : valeur de `profil.xp` au début de cette semaine.
 * L'XP de la semaine vaut alors `profil.xp − xpDebutSemaine`.
 *
 * Au changement de semaine (ou si les champs manquent), on repart de la ligue
 * hebdomadaire quand elle suit déjà la semaine en cours (`profil.ligue.xpSemaine`) :
 * cela évite de perdre les XP gagnés avant la première ouverture du classement.
 */

import { debutSemaine } from '../ligue/index.js';

export const DELAI_PUBLICATION_MS = 5 * 60 * 1000; // au plus une publication toutes les 5 minutes

function entier(x) {
  const n = Number(x);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
}

/**
 * État « XP de la semaine » d'un profil pour le jour donné (« AAAA-MM-JJ »).
 * @returns {{ semaineXp: string, xpDebutSemaine: number, xpSemaine: number, change: boolean }}
 *   `change` = true si `semaineXp` / `xpDebutSemaine` doivent être enregistrés dans le profil.
 */
export function etatSemaine(profil, jour) {
  const p = profil && typeof profil === 'object' ? profil : {};
  const semaine = debutSemaine(jour);
  const xp = entier(p.xp);
  const debutConnu = Number.isFinite(Number(p.xpDebutSemaine)) && p.xpDebutSemaine !== null && p.xpDebutSemaine !== '';
  const debut = entier(p.xpDebutSemaine);

  // Même semaine, champ cohérent (XP jamais repassés sous le point de départ) : simple différence.
  if (p.semaineXp === semaine && debutConnu && debut <= xp) {
    return { semaineXp: semaine, xpDebutSemaine: debut, xpSemaine: xp - debut, change: false };
  }

  // Nouvelle semaine, champs absents ou profil remis à zéro : on (re)fixe le point de départ.
  const ligue = p.ligue && typeof p.ligue === 'object' ? p.ligue : {};
  const dejaGagnes = ligue.semaine === semaine ? Math.min(entier(ligue.xpSemaine), xp) : 0;
  const nouveauDebut = xp - dejaGagnes;
  return { semaineXp: semaine, xpDebutSemaine: nouveauDebut, xpSemaine: dejaGagnes, change: true };
}

/** Faut-il publier le score maintenant ? (au plus une fois toutes les `delai` ms) */
export function doitPublier(dernierePublication, maintenant, delai = DELAI_PUBLICATION_MS) {
  if (!Number.isFinite(dernierePublication) || dernierePublication <= 0) return true;
  if (maintenant < dernierePublication) return true; // horloge reculée : on ne bloque pas
  return maintenant - dernierePublication >= delai;
}

/**
 * Trie les lignes « profils_publics » (moi + amis) pour le classement de la semaine.
 * Une ligne dont `semaine` n'est pas la semaine en cours compte 0 XP cette semaine.
 * Tri : XP de la semaine décroissants, puis XP totaux décroissants, puis pseudo.
 * Si `avecSemaine` est faux (colonnes pas encore créées), on classe sur les XP totaux.
 * @returns {{ id, pseudo, avatar, xp, xpSemaine, moi, rang }[]}
 */
export function trierClassement(lignes, { moiId, semaine, avecSemaine = true } = {}) {
  const liste = (Array.isArray(lignes) ? lignes : [])
    .filter((l) => l && l.id)
    .map((l) => ({
      id: l.id,
      pseudo: l.pseudo || '(inconnu)',
      avatar: l.avatar || null,
      xp: entier(l.xp),
      xpSemaine: avecSemaine && l.semaine === semaine ? entier(l.xp_semaine) : 0,
      moi: l.id === moiId,
    }));
  // Un même élève ne doit apparaître qu'une fois (on garde la première occurrence).
  const vus = new Set();
  const uniques = liste.filter((l) => (vus.has(l.id) ? false : (vus.add(l.id), true)));
  const cle = avecSemaine ? 'xpSemaine' : 'xp';
  uniques.sort((a, b) => b[cle] - a[cle] || b.xp - a.xp || a.pseudo.localeCompare(b.pseudo, 'fr'));
  // Rang « sportif » : les ex æquo partagent la même place.
  let rang = 0;
  uniques.forEach((l, i) => {
    const prec = uniques[i - 1];
    if (!prec || prec[cle] !== l[cle]) rang = i + 1;
    l.rang = rang;
  });
  return uniques;
}
