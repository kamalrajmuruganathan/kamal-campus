/**
 * « Coach » — calcule la prochaine action suggérée à l'élève, pour réduire les
 * clics sur l'accueil. Priorité : réviser les cartes dues → reprendre le dernier
 * chapitre → révision ciblée → (nouvel élève) commencer un chapitre de sa classe.
 * Renvoie null si la classe n'est pas encore choisie (la liste des niveaux suffit alors).
 */

import { CHAPITRES, parcoursDe, LIBELLES_PARCOURS, LIBELLES_NIVEAU } from './contenu-index';
import { clesDues } from '../lib/srs';

let _cles = null;
function toutesLesCles() {
  if (_cles) return _cles;
  const k = [];
  for (const c of CHAPITRES) {
    const n = (c.flashcards && c.flashcards.cartes ? c.flashcards.cartes.length : c.nbFlashcards) || 0;
    for (let i = 0; i < n; i += 1) k.push(`${c.id}#${i}`);
  }
  _cles = k;
  return k;
}

/**
 * Nombre de cartes DÉJÀ ÉTUDIÉES à revoir aujourd'hui (répétition espacée).
 * Les cartes jamais vues ne comptent pas : sinon un nouvel élève verrait
 * « Réviser 11 000 cartes », ce qui n'a pas de sens.
 */
export function compterCartesDues(srs, jour) {
  const etats = srs || {};
  const vues = toutesLesCles().filter((k) => etats[k]);
  return clesDues(etats, vues, jour).length;
}

/** Action prioritaire du moment (ou null si rien de pertinent). */
export function prochaineAction(profil, jour) {
  const due = compterCartesDues(profil.srs, jour);
  if (due > 0) {
    return { icone: '🧠', titre: `Réviser ${due.toLocaleString('fr-FR')} carte${due > 1 ? 's' : ''}`, sousTitre: 'C\'est le bon moment pour mémoriser', ecran: 'RevisionSRS' };
  }
  const dc = profil.dernierChapitre;
  if (dc && dc.id) {
    return { icone: '▶️', titre: `Reprendre : ${dc.titre}`, sousTitre: 'Continue là où tu t\'es arrêté', ecran: 'Chapitre', params: { id: dc.id, titre: dc.titre } };
  }
  if ((profil.qcmTermines || 0) > 0) {
    return { icone: '🎯', titre: 'Révision ciblée', sousTitre: 'Travaille tes chapitres les plus fragiles', ecran: 'Revision' };
  }
  // Nouvel élève : on l'emmène vers les chapitres de maths de sa classe (ou la 1re matière disponible).
  const niveau = profil.niveauParDefaut;
  if (niveau) {
    const liste = parcoursDe(niveau);
    const p = liste.find((x) => x.matiere === 'mathematiques') ?? liste[0];
    if (p) {
      const nomParcours = LIBELLES_PARCOURS[p.parcours] ?? p.parcours;
      const nomClasse = LIBELLES_NIVEAU[niveau] ?? niveau;
      return {
        icone: '🚀',
        titre: 'Commence ton premier chapitre',
        sousTitre: `${nomParcours} · ${nomClasse} : choisis un chapitre pour démarrer`,
        ecran: 'Chapitres',
        params: { niveau, parcours: p.parcours, titre: nomParcours },
      };
    }
  }
  return null;
}
