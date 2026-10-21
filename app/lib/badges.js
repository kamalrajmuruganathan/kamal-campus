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
  const exos = Object.values(p.exosReussis || {}).reduce((t, l) => t + (Array.isArray(l) ? l.length : 0), 0);
  const dictees = Object.values(p.dictees || {}).filter((d) => d && typeof d === 'object');
  const examens = (Array.isArray(p.examens) ? p.examens : []).filter(Boolean);
  return {
    niveau,
    maitrises,
    matieresEntamees,
    exos,
    dictees: dictees.length,
    dicteesParfaites: dictees.filter((d) => (d.meilleure ?? 0) >= 10).length,
    examens: examens.length,
    meilleurExamen: examens.reduce((m, e) => Math.max(m, Number(e.note20) || 0), 0),
  };
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

  { id: 'enigmes-10', icone: '🧩', titre: 'Curieux', desc: 'Résoudre 10 énigmes', cible: 10, valeur: (p) => p.enigmesResolues || 0 },
  { id: 'enigmes-50', icone: '🧠', titre: 'Fin limier', desc: 'Résoudre 50 énigmes', cible: 50, valeur: (p) => p.enigmesResolues || 0 },

  { id: 'exos-10', icone: '✏️', titre: 'Petite main', desc: 'Réussir 10 exercices', cible: 10, valeur: (p, s) => s.exos },
  { id: 'exos-100', icone: '🖋️', titre: 'Cent exercices', desc: 'Réussir 100 exercices différents', cible: 100, valeur: (p, s) => s.exos },
  { id: 'exos-500', icone: '📐', titre: 'Bourreau de travail', desc: 'Réussir 500 exercices différents', cible: 500, valeur: (p, s) => s.exos },

  { id: 'dictee-1', icone: '✍️', titre: 'Plume', desc: 'Faire une première dictée', cible: 1, valeur: (p, s) => s.dictees },
  { id: 'dictees-10', icone: '📜', titre: 'Écrivain', desc: 'Faire 10 dictées différentes', cible: 10, valeur: (p, s) => s.dictees },
  { id: 'dictee-parfaite', icone: '🪶', titre: 'Zéro faute', desc: 'Obtenir 10/10 à une dictée', cible: 1, valeur: (p, s) => s.dicteesParfaites },

  { id: 'examen-1', icone: '🎓', titre: 'Candidat', desc: 'Passer un examen sur mesure', cible: 1, valeur: (p, s) => s.examens },
  { id: 'examen-5', icone: '🗂️', titre: 'Habitué des examens', desc: 'Passer 5 examens sur mesure', cible: 5, valeur: (p, s) => s.examens },
  { id: 'examen-16', icone: '🥇', titre: 'Mention très bien', desc: 'Obtenir au moins 16/20 à un examen sur mesure', cible: 16, valeur: (p, s) => s.meilleurExamen },

  { id: 'carnet-10', icone: '📒', titre: 'Plus jamais', desc: 'Maîtriser 10 erreurs du carnet', cible: 10, valeur: (p) => p.carnetMaitrisees || 0 },
  { id: 'carnet-50', icone: '🛡️', titre: 'Tirer les leçons', desc: 'Maîtriser 50 erreurs du carnet', cible: 50, valeur: (p) => p.carnetMaitrisees || 0 },

  { id: 'defis-semaine-1', icone: '🎯', titre: 'Défi relevé', desc: 'Réussir un défi de la semaine', cible: 1, valeur: (p) => p.defisSemaineReussis || 0 },
  { id: 'defis-semaine-12', icone: '🏹', titre: 'Chasseur de défis', desc: 'Réussir 12 défis de la semaine', cible: 12, valeur: (p) => p.defisSemaineReussis || 0 },

  { id: 'flash-250', icone: '🗃️', titre: 'Mémoire d’éléphant', desc: 'Réviser 250 cartes connues', cible: 250, valeur: (p) => p.flashcardsConnues || 0 },

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
