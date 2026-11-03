/**
 * Sous-titre de la carte « Mes classes » de l'accueil : « 2 devoirs à faire, dont 1 pour demain ».
 * Lu dans le petit cache des devoirs gardé sur l'appareil (cloud/enseignant.js), rafraîchi
 * depuis Supabase au plus toutes les 6 heures, seulement si l'élève est connecté.
 */
import { useEffect, useState } from 'react';
import { useAuth } from './cloud/AuthContexte';
import { cacheDevoirsLocal, ecouterCacheDevoirs, rafraichirCacheDevoirs } from './cloud/enseignant';
import { resumeAccueil, cachePerime } from '../lib/enseignant';
import { dateLocale } from '../lib/serie';

export function useResumeDevoirs() {
  const { utilisateur } = useAuth();
  const [cache, setCache] = useState(null);

  useEffect(() => {
    if (!utilisateur) { setCache(null); return undefined; }
    let vivant = true;
    const arret = ecouterCacheDevoirs((c) => { if (vivant) setCache(c); });
    cacheDevoirsLocal().then((c) => {
      if (!vivant) return;
      setCache(c);
      // Jamais ouvert « Mes classes » sur cet appareil (cache vide) ou cache trop vieux : on relit.
      if (cachePerime(c, new Date())) rafraichirCacheDevoirs().catch(() => {});
    }).catch(() => {});
    return () => { vivant = false; arret(); };
  }, [utilisateur]);

  return resumeAccueil(utilisateur ? cache : null, dateLocale(new Date()));
}
