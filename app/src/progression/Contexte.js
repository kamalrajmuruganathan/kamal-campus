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
import { planifier as planifierSrs } from '../../lib/srs';
import { ajouterXp as ligueAjouterXp } from '../../lib/ligue';
import { appliquerXpJour, dateLocale } from '../../lib/serie';
import { majErreurs } from '../../lib/erreurs';
import { chargerProfil, sauverProfil, effacerProfil, profilVide, synchroniser, definirUtilisateur } from './stockage';
import { useAuth } from '../cloud/AuthContexte';
import { resynchroniserSiPermis } from '../notifications';
import { definirVitesseParole, definirVoix } from '../parole';

const MAX_HISTORIQUE = 30;
const XP_PAR_CARTE_CONNUE = 3; // les flashcards rapportent moins qu'un QCM
const XP_ENIGME = { facile: 8, moyen: 12, difficile: 18 };

const ProgressionContexte = createContext(null);

/** Applique un gain d'XP à l'état « jour / série » d'un profil. */
function calculerSerie(profilBase, points) {
  return appliquerXpJour(
    {
      objectifQuotidien: profilBase.objectifQuotidien,
      jourCourant: profilBase.jourCourant,
      xpDuJour: profilBase.xpDuJour,
      serieJours: profilBase.serieJours,
      dernierJourValide: profilBase.dernierJourValide,
      meilleureSerieJours: profilBase.meilleureSerieJours,
    },
    points,
    dateLocale(new Date()),
  );
}

export function ProgressionProvider({ children }) {
  const [profil, setProfil] = useState(profilVide());
  const [charge, setCharge] = useState(false);
  const { utilisateur } = useAuth();
  const idUtilisateur = utilisateur?.id ?? null;

  useEffect(() => {
    let vivant = true;
    definirUtilisateur(idUtilisateur);

    const appliquer = (p) => {
      if (!vivant || !p) return;
      setProfil(p);
      setCharge(true);
      // Restaure le planning / rappel après un redémarrage de l'OS (sans
      // demander de permission : ne fait rien si elle n'est pas déjà accordée).
      resynchroniserSiPermis(p);
      definirVitesseParole(p.vitesseParole);
      definirVoix(p.voix);
    };

    // Filet anti-page-blanche : si la synchro cloud traine (reseau lent/coupe),
    // on affiche quand meme l'appli avec le profil local au bout de 8 s.
    const secours = setTimeout(() => { chargerProfil().then(appliquer); }, 8000);

    synchroniser()
      .then(appliquer)
      .catch(() => { chargerProfil().then(appliquer); })
      .finally(() => clearTimeout(secours));

    return () => {
      vivant = false;
      clearTimeout(secours);
    };
  }, [idUtilisateur]);

  // Garde la vitesse de lecture à voix haute alignée sur la préférence.
  useEffect(() => {
    definirVitesseParole(profil.vitesseParole);
  }, [profil.vitesseParole]);

  // Garde les voix préférées alignées sur la préférence.
  useEffect(() => {
    definirVoix(profil.voix);
  }, [profil.voix]);

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
        suivant.dernierChapitre = { id: chapitreId, titre: titre || ancien.titre };
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

      // Série de jours / objectif quotidien.
      const s = calculerSerie(suivant, res.points);
      Object.assign(suivant, {
        jourCourant: s.jourCourant,
        xpDuJour: s.xpDuJour,
        serieJours: s.serieJours,
        dernierJourValide: s.dernierJourValide,
        meilleureSerieJours: s.meilleureSerieJours,
      });

      suivant.ligue = ligueAjouterXp(profil.ligue, res.points, dateLocale(new Date()));

      // Révision des erreurs : les questions ratées entrent en réserve,
      // les réussies en sortent (voir lib/erreurs).
      suivant.erreurs = majErreurs(profil.erreurs || [], questions, reponses, matiere);

      setProfil(suivant);
      sauverProfil(suivant);

      return {
        ...res,
        serie,
        niveauAvant,
        niveauApres,
        monteeDeNiveau: niveauApres > niveauAvant,
        badgesGagnes: badgesNouveaux(profil, suivant),
        serieJour: {
          atteint: s.objectifAtteintMaintenant,
          serie: s.serieJours,
          xpDuJour: s.xpDuJour,
          objectif: s.objectifQuotidien,
        },
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

      const s = calculerSerie(suivant, points);
      Object.assign(suivant, {
        jourCourant: s.jourCourant,
        xpDuJour: s.xpDuJour,
        serieJours: s.serieJours,
        dernierJourValide: s.dernierJourValide,
        meilleureSerieJours: s.meilleureSerieJours,
      });

      suivant.ligue = ligueAjouterXp(profil.ligue, points, dateLocale(new Date()));

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
        serieJour: {
          atteint: s.objectifAtteintMaintenant,
          serie: s.serieJours,
          xpDuJour: s.xpDuJour,
          objectif: s.objectifQuotidien,
        },
      };
    },
    [profil],
  );

  /**
   * Enregistre une énigme tentée. Rapporte de l'XP seulement si réussie.
   * @param {{difficulte?, reussi, titre?}} arg
   */
  const enregistrerEnigme = useCallback(({ difficulte = 'moyen', reussi = false, titre = 'Énigme' }) => {
    const points = reussi ? (XP_ENIGME[difficulte] ?? 10) : 0;
    const niveauAvant = niveauPourXp(profil.xp).niveau;
    const niveauApres = niveauPourXp(profil.xp + points).niveau;

    const suivant = {
      ...profil,
      xp: profil.xp + points,
      enigmesResolues: (profil.enigmesResolues || 0) + (reussi ? 1 : 0),
    };
    if (reussi) {
      suivant.historique = [
        { date: new Date().toISOString(), titre, justes: 1, total: 1, points, matiere: null },
        ...profil.historique,
      ].slice(0, MAX_HISTORIQUE);
    }

    const s = calculerSerie(suivant, points);
    Object.assign(suivant, {
      jourCourant: s.jourCourant,
      xpDuJour: s.xpDuJour,
      serieJours: s.serieJours,
      dernierJourValide: s.dernierJourValide,
      meilleureSerieJours: s.meilleureSerieJours,
    });

    suivant.ligue = ligueAjouterXp(profil.ligue, points, dateLocale(new Date()));

    setProfil(suivant);
    sauverProfil(suivant);

    return {
      points,
      niveauAvant,
      niveauApres,
      monteeDeNiveau: niveauApres > niveauAvant,
      badgesGagnes: badgesNouveaux(profil, suivant),
      serieJour: { atteint: s.objectifAtteintMaintenant, serie: s.serieJours, objectif: s.objectifQuotidien },
    };
  }, [profil]);

  const reinitialiser = useCallback(() => {
    const vide = profilVide();
    setProfil(vide);
    effacerProfil();
  }, []);

  /** Ajoute ou retire un chapitre des favoris. */
  const basculerFavori = useCallback((chapId) => {
    setProfil((p) => {
      const set = new Set(p.favoris || []);
      if (set.has(chapId)) set.delete(chapId); else set.add(chapId);
      const suivant = { ...p, favoris: [...set] };
      sauverProfil(suivant);
      return suivant;
    });
  }, []);

  /** Met à jour un ou plusieurs réglages du profil (objectif, prénom, rappel…). */
  const definirReglages = useCallback((changements) => {
    setProfil((p) => {
      const suivant = { ...p, ...changements };
      sauverProfil(suivant);
      return suivant;
    });
  }, []);

  /** Enregistre le jugement d'une carte pour la répétition espacée. */
  const noterCarteSrs = useCallback((cle, su) => {
    setProfil((p) => {
      const jour = dateLocale(new Date());
      const srs = { ...(p.srs || {}) };
      srs[cle] = planifierSrs(srs[cle], su, jour);
      const suivant = { ...p, srs };
      sauverProfil(suivant);
      return suivant;
    });
  }, []);

  /** Termine l'onboarding : prénom, niveau par défaut, objectif quotidien, planning. */
  const terminerOnboarding = useCallback(({ prenom = '', niveau = null, objectif = 50, planning = [] }) => {
    definirReglages({
      onboardingFait: true,
      prenom: prenom.trim(),
      niveauParDefaut: niveau,
      objectifQuotidien: objectif,
      planning: Array.isArray(planning) ? planning : [],
    });
  }, [definirReglages]);

  return (
    <ProgressionContexte.Provider
      value={{
        profil, charge, enregistrerResultat, enregistrerFlashcards, enregistrerEnigme,
        reinitialiser, definirReglages, terminerOnboarding, basculerFavori, noterCarteSrs,
      }}
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
      enregistrerEnigme: () => ({
        points: 0, niveauAvant: 1, niveauApres: 1, monteeDeNiveau: false,
        badgesGagnes: [], serieJour: { atteint: false, serie: 0, objectif: 50 },
      }),
      reinitialiser: () => {},
      definirReglages: () => {},
      terminerOnboarding: () => {},
      basculerFavori: () => {},
      noterCarteSrs: () => {},
    };
  }
  return ctx;
}
