# Kamal Campus — identité visuelle

## Le principe

Deux couleurs, une par matière, et un **dégradé** qui fait le pont entre elles :
c'est toute l'idée de l'appli — les maths **et** la physique-chimie dans un seul
outil. La marque est un **K** dont l'arme haute se prolonge en **courbe
ascendante** (une fonction qui monte, une trajectoire) terminée par un **point**
(un astre, une particule, le sommet). Elle se lit à la fois « lettre » et
« science », et reste nette à petite taille.

## Palette

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Primaire — maths | Bleu | `#1f6feb` | accent principal, chapitres de maths |
| Primaire — physique-chimie | Violet | `#7a3fd4` | accent des chapitres de PC |
| Dégradé de marque | Bleu → Violet | `#1f6feb → #7a3fd4` | icône, pastille du logo |
| Texte | Ardoise | `#16232e` | titres, corps (thème clair) |
| Texte atténué | Gris-bleu | `#5b6b7a` | sous-titres, légendes |
| Fond clair | Blanc | `#ffffff` | fond de l'appli (clair) |
| Fond sombre | Encre | `#12181f` | fond de l'appli (sombre) |
| Succès | Vert | `#1a7f4b` | bonne réponse au QCM |
| Erreur | Rouge | `#c02a2a` | mauvaise réponse |

Ces valeurs sont **déjà** celles de `app/src/theme.js` : l'identité et
l'application parlent la même langue de couleurs.

## Fichiers

- `icon.svg` — icône d'application, 1024×1024, fond dégradé plein (le masque
  arrondi est appliqué par iOS/Android).
- `adaptive-foreground.svg` — premier plan de l'icône adaptative Android
  (marque blanche centrée, transparent) ; le fond bleu `#1f6feb` est dans `app.json`.
- `logo.svg` — logo horizontal (pastille + nom + accroche), pour l'écran
  d'accueil, les stores et la communication.
- `apercu.html` — planche de présentation (icône, logo, palette).

## Typographie

- **Nom** : une serif (Georgia / Times) pour le sérieux scolaire, « Campus » en bleu.
- **Interface** : la police système (San Francisco / Roboto), déjà utilisée par l'appli.

## Règles

- Ne jamais poser la marque blanche sur un fond clair sans la pastille dégradée.
- Zone de protection autour du logo : au moins la hauteur du point de la marque.
- Icône : garder le fond en dégradé plein, marque centrée, aucun texte dans l'icône.
