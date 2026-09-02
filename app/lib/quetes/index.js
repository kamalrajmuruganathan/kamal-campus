/**
 * Quêtes quotidiennes légères — objectifs du jour, purs et testables.
 * Elles se calculent à partir de l'activité du jour (aucun stockage dédié :
 * elles se réinitialisent toutes seules chaque jour). Purement motivationnelles.
 */

/**
 * @param {{objectif:number, xpJour:number, activitesJour:number}} ctx
 * @returns {{id, texte, progres, fait}[]}
 */
export function quetesDuJour({ objectif = 50, xpJour = 0, activitesJour = 0 } = {}) {
  const q = [
    { id: 'objectif', texte: `Gagne ${objectif} XP aujourd'hui`, progres: objectif > 0 ? xpJour / objectif : 1 },
    { id: 'activites', texte: 'Fais 2 activités', progres: activitesJour / 2 },
    { id: 'serie', texte: 'Garde ta série 🔥', progres: xpJour > 0 ? 1 : 0 },
  ];
  return q.map((x) => ({ ...x, progres: Math.max(0, Math.min(1, x.progres)), fait: x.progres >= 1 }));
}

/** Nombre de quêtes accomplies aujourd'hui. */
export function quetesFaites(quetes) {
  return quetes.filter((q) => q.fait).length;
}
