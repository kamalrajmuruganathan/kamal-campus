/**
 * Contexte de progression — l'état « niveau / XP / stats » partagé par l'app.
 *
 * Le provider charge le profil au démarrage, l'expose à toute l'application, et
 * fournit `enregistrerResultat` que l'écran de QCM appelle en fin de session.
 * Cette fonction renvoie de quoi afficher un retour immédiat (points gagnés,
 * montée de niveau).
 */

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  pointsSession,
  meilleureSerie as calcSerie,
  niveauPourXp,
} from '../../lib/progression';
import { badgesNouveaux } from '../../lib/badges';
import { chargerProfil, sauverProfil, effacerProfil, profilVide } from './stockage';

const MAX_HISTORIQUE = 30;
const XP_PAR_CARTE_CONNUE = 3; // les flashcards rapportent moins qu'un QCM

const ProgressionContexte = createContext(null);

export function ProgressionProvider({ children }) {
  const [profil, setProfil] = useState(profilVide());
  const [charge, setCharge] = useState(false);

  useEffect(() => {
    let vivant = true;
    chargerProfil().then((p) => {
      if (vivant) {
        setProfil(p);
        setCharge(true);
      }
    });
    return () => {
      vivant = false;
    };
  }, []);

  /**
   * Enregistre le résultat d'un QCM terminé et met à jour la progression.
   * @param {{questions, reponses, chapitreId?, titre?, matiere?}} arg
   * @returns {{points, justes, total, taux, sansFaute, serie,
   *            niveauAvant, niveauApres, monteeDeNiveau}}
   */
  const enregistrerResultat = useCallback(
    ({ questions = [], reponses = [], chapitreId = null, titre = 'QCM', matiere = null }) => {
      const res = pointsSession(questions, reponses);
      const serie = calcSerie(reponses);

      const niveauAvant = niveauPourXp(profil.xp).niveau;
      const niveauApres = niveauPourXp(profil.xp + res.points).niveau;

      const suivant = {
        ...profil,
        xp: profil.xp + res.points,
        xpParMatiere: { ...profil.xpParMatiere },
        qcmTermines: profil.qcmTermines + 1,
        reponsesJustes: profil.reponsesJustes + res.justes,
        reponsesTotal: profil.reponsesTotal + res.total,
        sansFautes: profil.sansFautes + (res.sansFaute ? 1 : 0),
        meilleureSerie: Math.max(profil.meilleureSerie, serie),
        chapitres: { ...profil.chapitres },
        historique: profil.historique,
      };

      if (matiere) {
        suivant.xpParMatiere[matiere] = (suivant.xpParMatiere[matiere] || 0) + res.points;
      }

      if (chapitreId) {
        const ancien = profil.chapitres[chapitreId] || { titre, meilleurScore: 0, tentatives: 0 };
        suivant.chapitres[chapitreId] = {
          titre: titre || ancien.titre,
          meilleurScore: Math.max(ancien.meilleurScore, res.taux),
          tentatives: ancien.tentatives + 1,
        };
      }

      suivant.historique = [
        {
          date: new Date().toISOString(),
          titre,
          justes: res.justes,
          total: res.total,
          points: res.points,
          matiere: matiere || null,
        },
        ...profil.historique,
      ].slice(0, MAX_HISTORIQUE);

      setProfil(suivant);
      sauverProfil(suivant);

      return {
        ...res,
        serie,
        niveauAvant,
        niveauApres,
        monteeDeNiveau: niveauApres > niveauAvant,
        badgesGagnes: badgesNouveaux(profil, suivant),
      };
    },
    [profil],
  );

  /**
   * Enregistre une session de flashcards (auto-évaluation « je savais »).
   * @param {{connues, total, chapitreId?, titre?, matiere?}} arg
   * @returns {{points, connues, total, niveauAvant, niveauApres,
   *            monteeDeNiveau, badgesGagnes}}
   */
  const enregistrerFlashcards = useCallback(
    ({ connues = 0, total = 0, titre = 'Cartes de révision', matiere = null }) => {
      const points = connues * XP_PAR_CARTE_CONNUE;
      const niveauAvant = niveauPourXp(profil.xp).niveau;
      const niveauApres = niveauPourXp(profil.xp + points).niveau;

      const suivant = {
        ...profil,
        xp: profil.xp + points,
        xpParMatiere: { ...profil.xpParMatiere },
        flashcardsRevues: (profil.flashcardsRevues || 0) + total,
        flashcardsConnues: (profil.flashcardsConnues || 0) + connues,
      };
      if (matiere && points > 0) {
        suivant.xpParMatiere[matiere] = (suivant.xpParMatiere[matiere] || 0) + points;
      }
      suivant.historique = [
        {
          date: new Date().toISOString(),
          titre: `Cartes — ${titre}`,
          justes: connues,
          total,
          points,
          matiere: matiere || null,
        },
        ...profil.historique,
      ].slice(0, MAX_HISTORIQUE);

      setProfil(suivant);
      sauverProfil(suivant);

      return {
        points,
        connues,
        total,
        niveauAvant,
        niveauApres,
        monteeDeNiveau: niveauApres > niveauAvant,
        badgesGagnes: badgesNouveaux(profil, suivant),
      };
    },
    [profil],
  );

  const reinitialiser = useCallback(() => {
    const vide = profilVide();
    setProfil(vide);
    effacerProfil();
  }, []);

  return (
    <ProgressionContexte.Provider
      value={{ profil, charge, enregistrerResultat, enregistrerFlashcards, reinitialiser }}
    >
      {children}
    </ProgressionContexte.Provider>
  );
}

/** Hook d'accès à la progression. */
export function useProgression() {
  const ctx = useContext(ProgressionContexte);
  if (!ctx) {
    // Filet de sécurité : hors provider, on renvoie un état neutre inerte.
    return {
      profil: profilVide(),
      charge: false,
      enregistrerResultat: () => ({
        points: 0, justes: 0, total: 0, taux: 0, sansFaute: false,
        serie: 0, niveauAvant: 1, niveauApres: 1, monteeDeNiveau: false, badgesGagnes: [],
      }),
      enregistrerFlashcards: () => ({
        points: 0, connues: 0, total: 0,
        niveauAvant: 1, niveauApres: 1, monteeDeNiveau: false, badgesGagnes: [],
      }),
      reinitialiser: () => {},
    };
  }
  return ctx;
}
