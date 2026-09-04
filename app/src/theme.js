/**
 * Kamal Campus — jetons de style
 *
 * Un seul endroit pour les couleurs, espacements et tailles. L'application
 * suit le thème du système (clair ou sombre) : un lycéen qui révise le soir
 * ne doit pas se prendre un écran blanc.
 */

const COMMUN = {
  espace: { xs: 4, s: 8, m: 14, l: 20, xl: 28, xxl: 40 },
  rayon: { s: 6, m: 10, l: 16 },
  police: {
    minuscule: 12,
    petite: 13,
    normale: 15,
    moyenne: 17,
    grande: 21,
    titre: 27,
  },
};

const CLAIR = {
  ...COMMUN,
  sombre: false,
  couleur: {
    fond: '#ffffff',
    surface: '#f6f8fb',
    surfaceHaute: '#eef2f7',
    texte: '#16232e',
    attenue: '#5b6b7a',
    trait: '#e3e8ee',
    accent: '#1f6feb',
    accentTexte: '#ffffff',
    succes: '#1a7f4b',
    succesFond: '#e8f6ee',
    erreur: '#c02a2a',
    erreurFond: '#fdeced',
    alerte: '#8a6100',
    alerteFond: '#fff6e0',
    maths: '#1f6feb',
    physique: '#7a3fd4',
    anglais: '#b8336a',
    espagnol: '#c0392b',
    allemand: '#3949ab',
    italien: '#1d9bb8',
    francais: '#9c27b0',
    histgeo: '#a15c1e',
    philosophie: '#7b5aa6',
    ses: '#0f8a6a',
    hggsp: '#396a7a',
    arts: '#c0399b',
    lca: '#7d7f34',
    grandoral: '#0e8f9e',
  },
};

const SOMBRE = {
  ...COMMUN,
  sombre: true,
  couleur: {
    fond: '#12181f',
    surface: '#1a222b',
    surfaceHaute: '#222c37',
    texte: '#e6edf3',
    attenue: '#9aa8b5',
    trait: '#253039',
    accent: '#6aa8ff',
    accentTexte: '#0b1118',
    succes: '#5fd398',
    succesFond: '#12291f',
    erreur: '#ff8080',
    erreurFond: '#2a1518',
    alerte: '#e8b93b',
    alerteFond: '#2a2410',
    maths: '#6aa8ff',
    physique: '#b18cf0',
    anglais: '#f087b3',
    espagnol: '#f0776b',
    allemand: '#7c8cf0',
    italien: '#5cc7de',
    francais: '#d17ce0',
    histgeo: '#d68b4e',
    philosophie: '#b596e0',
    ses: '#35c49e',
    hggsp: '#6fb0c4',
    arts: '#e483c8',
    lca: '#b9bb63',
    grandoral: '#45c4d4',
  },
};

export const theme = (sombre) => (sombre ? SOMBRE : CLAIR);

/** Couleur associée à une matière, pour distinguer les parcours d'un coup d'œil. */
export const couleurMatiere = (t, matiere) => {
  if (matiere === 'physique-chimie') return t.couleur.physique;
  if (matiere === 'svt' || matiere === 'sciences') return t.couleur.succes;
  if (matiere === 'techno' || matiere === 'snt' || matiere === 'nsi' || matiere === 'si') return t.couleur.alerte;
  if (matiere === 'enseignement-scientifique') return t.couleur.physique;
  if (matiere === 'anglais') return t.couleur.anglais;
  if (matiere === 'espagnol') return t.couleur.espagnol;
  if (matiere === 'allemand') return t.couleur.allemand;
  if (matiere === 'italien') return t.couleur.italien;
  if (matiere === 'francais') return t.couleur.francais;
  if (matiere === 'hist-geo') return t.couleur.histgeo;
  if (matiere === 'philosophie') return t.couleur.philosophie;
  if (matiere === 'ses') return t.couleur.ses;
  if (matiere === 'hggsp') return t.couleur.hggsp;
  if (matiere === 'arts') return t.couleur.arts;
  if (matiere === 'langues-anciennes') return t.couleur.lca;
  if (matiere === 'grand-oral') return t.couleur.grandoral;
  return t.couleur.maths;
};
