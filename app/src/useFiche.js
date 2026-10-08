/**
 * Charge la fiche d'un chapitre à la demande (elle n'est plus dans l'index pour
 * que l'appli démarre vite). Renvoie { fiche, etat: 'chargement' | 'ok' | 'erreur', recharger }.
 */
import { useCallback, useEffect, useState } from 'react';
import { chargerFiche } from './contenu-lourd';

export function useFiche(id) {
  const [fiche, setFiche] = useState(null);
  const [etat, setEtat] = useState('chargement');
  const [essai, setEssai] = useState(0);

  useEffect(() => {
    let vivant = true;
    setEtat('chargement');
    chargerFiche(id).then((texte) => {
      if (!vivant) return;
      setFiche(texte);
      setEtat(texte ? 'ok' : 'erreur');
    });
    return () => { vivant = false; };
  }, [id, essai]);

  const recharger = useCallback(() => setEssai((n) => n + 1), []);
  return { fiche, etat, recharger };
}
