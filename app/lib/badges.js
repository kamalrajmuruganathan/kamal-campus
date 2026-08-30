/**
 * Badges / objectifs — logique pure.
 *
 * Un badge se déduit entièrement du profil de progression : rien de plus n'est
 * stocké. Chaque badge a une CIBLE numérique et une fonction `valeur(profil, s)`
 * qui donne l'avancement actuel ; le badge est obtenu dès que valeur ≥ cible.
 * Ce modèle uniforme permet d'afficher une barre de progression pour ceux qui
 * ne sont pas encore décrochés.
 */

import { niveauPourXp } from './progression.js';

/** Statistiques dérivées du profil, calculées une fois pour tous les badges. */
export function statsDerivees(profil) {
  const p = profil || {};
  const niveau = niveauPourXp(p.xp || 0).niveau;
  const chaps = Object.values(p.chapitres || {});
  const maitrises = chaps.filter((c) => c.meilleurScore >= 0.8).length;
  const matieresEntamees = Object.values(p.xpParMatiere || {}).filter((v) => v > 0).length;
  return { niveau, maitrises, matieresEntamees };
}

/**
 * Catalogue des badges. `icone` est un emoji, `cible` le seuil à atteindre.
 * L'ordre est l'ordre d'affichage (progression douce puis paliers plus hauts).
 */
export const BADGES = [
  { id: 'premier-qcm', icone: '🎯', titre: 'Premiers pas', desc: 'Terminer un premier QCM', cible: 1, valeur: (p) => p.qcmTermines || 0 },
  { id: 'assidu-10', icone: '📚', titre: 'Assidu', desc: 'Terminer 10 QCM', cible: 10, valeur: (p) => p.qcmTermines || 0 },
  { id: 'assidu-50', icone: '🔥', titre: 'Marathonien', desc: 'Terminer 50 QCM', cible: 50, valeur: (p) => p.qcmTermines || 0 },

  { id: 'sans-faute-1', icone: '✨', titre: 'Sans-faute', desc: 'Réussir un QCM sans aucune erreur', cible: 1, valeur: (p) => p.sansFautes || 0 },
  { id: 'sans-faute-5', icone: '🌟', titre: 'Perfectionniste', desc: '5 QCM sans aucune erreur', cible: 5, valeur: (p) => p.sansFautes || 0 },

  { id: 'serie-10', icone: '⚡', titre: 'En série', desc: '10 bonnes réponses d’affilée', cible: 10, valeur: (p) => p.meilleureSerie || 0 },
  { id: 'serie-20', icone: '💥', titre: 'Imparable', desc: '20 bonnes réponses d’affilée', cible: 20, valeur: (p) => p.meilleureSerie || 0 },

  { id: 'bonnes-100', icone: '💯', titre: 'Cent bonnes', desc: '100 bonnes réponses au total', cible: 100, valeur: (p) => p.reponsesJustes || 0 },
  { id: 'bonnes-500', icone: '🏆', titre: 'Cinq cents', desc: '500 bonnes réponses au total', cible: 500, valeur: (p) => p.reponsesJustes || 0 },

  { id: 'maitrise-5', icone: '🧠', titre: 'Cinq chapitres', desc: 'Maîtriser 5 chapitres (QCM ≥ 80 %)', cible: 5, valeur: (p, s) => s.maitrises },
  { id: 'maitrise-20', icone: '🎓', titre: 'Vingt chapitres', desc: 'Maîtriser 20 chapitres', cible: 20, valeur: (p, s) => s.maitrises },

  { id: 'niveau-5', icone: '⭐', titre: 'Niveau 5', desc: 'Atteindre le niveau 5', cible: 5, valeur: (p, s) => s.niveau },
  { id: 'niveau-10', icone: '🚀', titre: 'Niveau 10', desc: 'Atteindre le niveau 10', cible: 10, valeur: (p, s) => s.niveau },

  { id: 'flash-50', icone: '🃏', titre: 'Cartes en main', desc: 'Réviser 50 cartes connues', cible: 50, valeur: (p) => p.flashcardsConnues || 0 },

  { id: 'serie-3', icone: '🔥', titre: 'Sur sa lancée', desc: 'Objectif atteint 3 jours d’affilée', cible: 3, valeur: (p) => p.meilleureSerieJours || 0 },
  { id: 'serie-7', icone: '🗓️', titre: 'Une semaine', desc: 'Objectif atteint 7 jours d’affilée', cible: 7, valeur: (p) => p.meilleureSerieJours || 0 },
  { id: 'serie-30', icone: '🏅', titre: 'Un mois entier', desc: 'Objectif atteint 30 jours d’affilée', cible: 30, valeur: (p) => p.meilleureSerieJours || 0 },

  { id: 'deux-matieres', icone: '⚗️', titre: 'Touche-à-tout', desc: 'Gagner des points en maths ET en physique-chimie', cible: 2, valeur: (p, s) => s.matieresEntamees },
];

/**
 * Évalue tous les badges pour un profil.
 * @returns {Array<{id, icone, titre, desc, cible, valeur, obtenu}>}
 * `valeur` est plafonnée à `cible` pour l'affichage.
 */
export function evaluerBadges(profil) {
  const s = statsDerivees(profil);
  return BADGES.map((b) => {
    const brut = b.valeur(profil || {}, s) || 0;
    return {
      id: b.id,
      icone: b.icone,
      titre: b.titre,
      desc: b.desc,
      cible: b.cible,
      valeur: Math.min(brut, b.cible),
      obtenu: brut >= b.cible,
    };
  });
}

/** Nombre de badges obtenus pour un profil. */
export function nombreObtenus(profil) {
  return evaluerBadges(profil).filter((b) => b.obtenu).length;
}

/**
 * Badges nouvellement obtenus entre deux profils (avant → après).
 * @returns {Array<{id, icone, titre}>}
 */
export function badgesNouveaux(avant, apres) {
  const acquis = new Set(evaluerBadges(avant).filter((b) => b.obtenu).map((b) => b.id));
  return evaluerBadges(apres)
    .filter((b) => b.obtenu && !acquis.has(b.id))
    .map((b) => ({ id: b.id, icone: b.icone, titre: b.titre }));
}
