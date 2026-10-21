/**
 * QCM, cartes de révision, sujets et quiz de bac blanc : chargés à la demande
 * (ils ne sont plus dans l'index, pour que l'appli démarre vite).
 *
 *  - fonctions asynchrones (chargerQcm, questionsDuQcm, chargerCartes, chargerSujet,
 *    chargerQuiz) : pour un bouton qui lance une partie ;
 *  - hooks (useQcm, useCartes, useSujet) : pour un écran qui affiche ce contenu.
 *    Ils renvoient { donnee, etat: 'chargement' | 'ok' | 'erreur', recharger }.
 *
 * Ce qui a déjà été chargé est gardé en mémoire : le second accès est immédiat.
 * null = introuvable ou pas de réseau (sur le web, hors connexion, seuls les
 * chapitres déjà ouverts ou téléchargés restent disponibles).
 */
import { useCallback, useEffect, useState } from 'react';
import * as lourd from './contenu-lourd';

const memoire = { qcm: new Map(), cartes: new Map(), sujet: new Map(), quiz: new Map() };

function avecMemoire(table, charger) {
  return (id) => {
    if (id == null) return Promise.resolve(null);
    if (table.has(id)) return Promise.resolve(table.get(id));
    return Promise.resolve()
      .then(() => charger(id))
      .then((v) => {
        if (v != null) table.set(id, v);
        return v ?? null;
      })
      .catch(() => null);
  };
}

export const chargerQcm = avecMemoire(memoire.qcm, lourd.chargerQcm);
export const chargerCartes = avecMemoire(memoire.cartes, lourd.chargerCartes);
export const chargerSujet = avecMemoire(memoire.sujet, lourd.chargerSujet);
export const chargerQuiz = avecMemoire(memoire.quiz, lourd.chargerQuiz);

/** Questions du QCM écrit d'un chapitre ([] si aucune) ; null si le chargement a échoué. */
export async function questionsDuQcm(id) {
  const q = await chargerQcm(id);
  return q ? (q.questions ?? []) : null;
}

function useCharge(table, charger, id) {
  const deja = id != null && table.has(id) ? table.get(id) : null;
  const [donnee, setDonnee] = useState(deja);
  const [etat, setEtat] = useState(deja || id == null ? 'ok' : 'chargement');
  const [essai, setEssai] = useState(0);

  useEffect(() => {
    let vivant = true;
    if (id == null) { // rien à charger (ex. QCM fabriqué par un générateur)
      setDonnee(null);
      setEtat('ok');
      return undefined;
    }
    if (table.has(id)) {
      setDonnee(table.get(id));
      setEtat('ok');
      return undefined;
    }
    setEtat('chargement');
    charger(id).then((v) => {
      if (!vivant) return;
      setDonnee(v);
      setEtat(v != null ? 'ok' : 'erreur');
    });
    return () => { vivant = false; };
  }, [id, essai]); // eslint-disable-line react-hooks/exhaustive-deps

  const recharger = useCallback(() => setEssai((n) => n + 1), []);
  return { donnee, etat, recharger };
}

/** QCM écrit d'un chapitre ({ questions }). Passer id = null pour ne rien charger. */
export const useQcm = (id) => useCharge(memoire.qcm, chargerQcm, id);
/** Cartes de révision d'un chapitre ({ cartes }). */
export const useCartes = (id) => useCharge(memoire.cartes, chargerCartes, id);
/** Texte Markdown d'un sujet. */
export const useSujet = (id) => useCharge(memoire.sujet, chargerSujet, id);
