/**
 * Banque d'énigmes d'ALLUMETTES — « déplace UNE allumette pour rendre
 * l'égalité vraie ».
 *
 * Chaque entrée :
 *   - `enonceEquation` : une égalité FAUSSE, affichée en allumettes.
 *   - `choix` : 3 à 4 égalités candidates (chaînes) ; une seule est vraie ET
 *     atteignable en déplaçant EXACTEMENT une allumette.
 *   - `reponse` : index de la bonne réponse dans `choix`.
 *   - `explication` : la manipulation à faire.
 *
 * Un « déplacement » conserve le nombre total d'allumettes : on en retire une
 * d'un endroit et on la repose ailleurs (jamais d'ajout ni de retrait net).
 * Chaque solution ci-dessous a été vérifiée sur l'afficheur 7 segments :
 * l'énoncé est faux, la réponse est vraie, et le passage de l'un à l'autre
 * ne coûte qu'une seule allumette. Les autres choix sont soit faux, soit
 * inatteignables en un seul mouvement.
 *
 * Caractères autorisés : 0-9 + - =  (un seul opérateur, un seul « = »).
 */

export const ALLUMETTES = [
  // ——— FACILE ———————————————————————————————————————————————
  {
    id: 'alu-01',
    difficulte: 'facile',
    enonceEquation: '6+4=4',
    choix: ['8+4=4', '0+4=4', '6+4=8', '9+4=4'],
    reponse: 1,
    explication:
      'On retire l’allumette du milieu du 6 et on la remet en haut à droite : le 6 devient 0. On obtient 0+4=4, qui est vrai.',
  },
  {
    id: 'alu-02',
    difficulte: 'facile',
    enonceEquation: '4+5=0',
    choix: ['4+5=6', '4+5=9', '9+5=0', '4-5=0'],
    reponse: 1,
    explication:
      'On déplace l’allumette en bas à gauche du 0 vers le milieu : le 0 devient 9. On obtient 4+5=9, qui est vrai.',
  },
  {
    id: 'alu-03',
    difficulte: 'facile',
    enonceEquation: '9-3=0',
    choix: ['9-3=8', '8-3=0', '9-3=9', '9-3=6'],
    reponse: 3,
    explication:
      'On déplace l’allumette en haut à droite du 0 vers le milieu : le 0 devient 6. On obtient 9-3=6, qui est vrai.',
  },
  {
    id: 'alu-04',
    difficulte: 'facile',
    enonceEquation: '5+3=7',
    choix: ['6+3=7', '5+2=7', '5+3=2', '9+3=7'],
    reponse: 1,
    explication:
      'On déplace une allumette du 3 (segment bas-droite vers bas-gauche) : le 3 devient 2. On obtient 5+2=7, qui est vrai.',
  },
  {
    id: 'alu-05',
    difficulte: 'facile',
    enonceEquation: '2+3=3',
    choix: ['2+3=8', '2+3=5', '3+3=3', '2-3=3'],
    reponse: 1,
    explication:
      'On déplace l’allumette en haut à droite du 3 (résultat) vers le haut à gauche : le 3 devient 5. On obtient 2+3=5, qui est vrai.',
  },
  {
    id: 'alu-06',
    difficulte: 'facile',
    enonceEquation: '7-1=0',
    choix: ['7-1=8', '7-1=6', '7-1=9', '7-4=0'],
    reponse: 1,
    explication:
      'On déplace l’allumette en haut à droite du 0 vers le milieu : le 0 devient 6. On obtient 7-1=6, qui est vrai.',
  },

  // ——— MOYEN ————————————————————————————————————————————————
  {
    id: 'alu-07',
    difficulte: 'moyen',
    enonceEquation: '5+4=6',
    choix: ['5+4=8', '5+4=9', '6+4=6', '5-4=6'],
    reponse: 1,
    explication:
      'On déplace l’allumette en bas à gauche du 6 vers le haut à droite : le 6 devient 9. On obtient 5+4=9, qui est vrai.',
  },
  {
    id: 'alu-08',
    difficulte: 'moyen',
    enonceEquation: '3+3=0',
    choix: ['3+3=8', '3+3=6', '8+3=0', '3+3=9'],
    reponse: 1,
    explication:
      'On déplace l’allumette en haut à droite du 0 vers le milieu : le 0 devient 6. On obtient 3+3=6, qui est vrai.',
  },
  {
    id: 'alu-09',
    difficulte: 'moyen',
    enonceEquation: '7-5=3',
    choix: ['7-5=8', '7-5=2', '1-5=3', '7-6=3'],
    reponse: 1,
    explication:
      'On déplace une allumette du 3 (résultat, segment bas-droite vers bas-gauche) : le 3 devient 2. On obtient 7-5=2, qui est vrai.',
  },
  {
    id: 'alu-10',
    difficulte: 'moyen',
    enonceEquation: '7+2=0',
    choix: ['7+2=6', '7+2=9', '7+3=0', '1+2=9'],
    reponse: 1,
    explication:
      'On déplace l’allumette en bas à gauche du 0 vers le milieu : le 0 devient 9. On obtient 7+2=9, qui est vrai.',
  },
  {
    id: 'alu-11',
    difficulte: 'moyen',
    enonceEquation: '4+1=3',
    choix: ['4+1=2', '4+1=5', '4+1=9', '7+1=3'],
    reponse: 1,
    explication:
      'On déplace l’allumette en haut à droite du 3 (résultat) vers le haut à gauche : le 3 devient 5. On obtient 4+1=5, qui est vrai.',
  },
  {
    id: 'alu-12',
    difficulte: 'moyen',
    enonceEquation: '4+2=7',
    choix: ['4+2=8', '4+3=7', '4+3=2', '9+2=7'],
    reponse: 1,
    explication:
      'On déplace une allumette du 2 (segment bas-gauche vers bas-droite) : le 2 devient 3. On obtient 4+3=7, qui est vrai.',
  },

  // ——— DIFFICILE ————————————————————————————————————————————
  {
    id: 'alu-13',
    difficulte: 'difficile',
    enonceEquation: '8-2=8',
    choix: ['9+2=8', '6+2=8', '8+2=8', '6-2=8'],
    reponse: 1,
    explication:
      'On retire l’allumette en bas à gauche du premier 8 (il devient 6) et on la pose en barre verticale sur le « - » (il devient « + »). On obtient 6+2=8, qui est vrai.',
  },
  {
    id: 'alu-14',
    difficulte: 'difficile',
    enonceEquation: '1+1=6',
    choix: ['1+1=8', '7-1=6', '1-1=6', '7+1=6'],
    reponse: 1,
    explication:
      'On retire la barre verticale du « + » (il devient « - ») et on la pose en haut du premier 1 (il devient 7). On obtient 7-1=6, qui est vrai.',
  },
];

export default ALLUMETTES;
