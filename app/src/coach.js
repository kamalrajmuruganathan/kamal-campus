/**
 * « Coach » — calcule la prochaine action suggérée à l'élève, pour réduire les
 * clics sur l'accueil. Priorité : réviser les cartes dues → reprendre le dernier
 * chapitre → révision ciblée. Renvoie null pour un nouvel élève (la liste des
 * niveaux suffit alors).
 */

import { CHAPITRES } from './contenu-index';
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

/** Nombre de cartes à revoir aujourd'hui (répétition espacée). */
export function compterCartesDues(srs, jour) {
  return clesDues(srs || {}, toutesLesCles(), jour).length;
}

/** Action prioritaire du moment (ou null si rien de pertinent). */
export function prochaineAction(profil, jour) {
  const due = compterCartesDues(profil.srs, jour);
  if (due > 0) {
    return { icone: '🧠', titre: `Réviser ${due} carte${due > 1 ? 's' : ''}`, sousTitre: 'C\'est le bon moment pour mémoriser', ecran: 'RevisionSRS' };
  }
  const dc = profil.dernierChapitre;
  if (dc && dc.id) {
    return { icone: '▶️', titre: `Reprendre : ${dc.titre}`, sousTitre: 'Continue là où tu t\'es arrêté', ecran: 'Chapitre', params: { id: dc.id, titre: dc.titre } };
  }
  if ((profil.qcmTermines || 0) > 0) {
    return { icone: '🎯', titre: 'Révision ciblée', sousTitre: 'Travaille tes chapitres les plus fragiles', ecran: 'Revision' };
  }
  return null;
}
