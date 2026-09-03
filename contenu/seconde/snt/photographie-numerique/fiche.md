---
id: 2nde-snt-photographie-numerique
titre: "La photographie numérique"
voie: generale
niveau: seconde
parcours: snt
matiere: snt
programme: "Programme de SNT — seconde"
duree_lecture_min: 8
prerequis:
  - Notion de bit et d'octet
  - Représentation binaire des nombres (compter jusqu'à 255)
statut: brouillon
relu_par: null
---

# La photographie numérique

## De quoi parle-t-on ?

Une photo prise avec un appareil ou un smartphone n'est pas une « vraie image » : c'est un **fichier**, c'est-à-dire une **suite de nombres**. Pour comprendre la photographie numérique, il faut savoir **comment une image est fabriquée par l'appareil**, **comment elle est codée** en mémoire et **comment on peut la transformer** avec des algorithmes.

## Le pixel, la définition et la résolution

Une image numérique est une **grille de petits carrés colorés** appelés **pixels** (de l'anglais *picture element*). Chaque pixel a **une seule couleur**. Vus de loin, les pixels se fondent et forment l'image ; en zoomant fortement, on finit par distinguer les carrés.

- La **définition** est le **nombre total de pixels** de l'image, donné par sa largeur et sa hauteur : une image de 1920 × 1080 pixels contient 1920 × 1080 = 2 073 600 pixels.
- La **résolution** mesure le **nombre de pixels par unité de longueur**, souvent en **ppp** (points par pouce, ou *dpi* en anglais). Elle compte surtout pour l'impression : plus la résolution est élevée, plus l'image imprimée est fine.

Attention : définition et résolution sont **deux notions différentes**. La définition dit *combien* de pixels ; la résolution dit *à quelle densité* on les affiche ou on les imprime.

## Le codage RVB d'une couleur

La couleur d'un pixel est obtenue en mélangeant **trois couleurs primaires de la lumière** : le **Rouge**, le **Vert** et le **Bleu** (codage **RVB**, ou *RGB* en anglais). C'est une **synthèse additive** : plus on ajoute de lumière, plus on va vers le blanc.

Pour chaque pixel, on stocke **trois nombres** indiquant la quantité de rouge, de vert et de bleu. Chaque nombre est codé sur **1 octet (8 bits)**, ce qui permet **256 niveaux** allant de **0** (éteint) à **255** (au maximum).

| Couleur | R | V | B |
|---|---|---|---|
| Noir | 0 | 0 | 0 |
| Blanc | 255 | 255 | 255 |
| Rouge vif | 255 | 0 | 0 |
| Vert vif | 0 | 255 | 0 |
| Jaune | 255 | 255 | 0 |
| Gris moyen | 128 | 128 | 128 |

Un pixel est donc codé sur **3 octets** (un par composante). Avec 256 valeurs par composante, on obtient 256 × 256 × 256 ≈ **16,7 millions de couleurs** possibles.

## Image matricielle ou image vectorielle

Il existe deux grandes familles d'images numériques :

- L'**image matricielle** (ou *bitmap*) est décrite **pixel par pixel** : c'est le cas des photos. Si on l'agrandit trop, elle devient **floue** et les pixels apparaissent (**pixellisation**).
- L'**image vectorielle** est décrite par des **formes géométriques** (droites, courbes, cercles) et des formules. On peut l'**agrandir autant qu'on veut sans perte de qualité** ; elle convient aux logos et aux schémas, mais **pas aux photos**.

Une **photographie** est toujours une image **matricielle**.

## Le poids d'une image

Le **poids** d'une image est la place qu'elle occupe en mémoire, en octets. Pour une image matricielle non compressée en RVB, on le calcule ainsi :

> **poids = largeur × hauteur × 3 octets**

(3 octets par pixel, car un octet pour le rouge, un pour le vert, un pour le bleu.)

**Exemple** : une image de 1000 × 800 pixels pèse 1000 × 800 × 3 = **2 400 000 octets**, soit environ 2,4 Mo. On voit qu'une photo non compressée est **volumineuse** : d'où l'intérêt de la compression.

## Le capteur et les photosites

Dans l'appareil, l'image est captée par un **capteur** couvert de millions de cellules sensibles à la lumière appelées **photosites**. Chaque photosite mesure la **quantité de lumière** reçue et la transforme en un **signal électrique**, converti ensuite en nombres. Un capteur possédant beaucoup de photosites peut produire une image de grande définition (on parle en **mégapixels**, soit des millions de pixels).

## Les métadonnées EXIF

Quand l'appareil enregistre une photo, il ajoute au fichier des **métadonnées**, c'est-à-dire des **données qui décrivent la photo** (« des données sur la donnée »). Le format le plus courant s'appelle **EXIF** (*Exchangeable Image File Format*).

Les métadonnées EXIF contiennent par exemple : la **date et l'heure** de la prise de vue, le **modèle de l'appareil**, les **réglages** (temps d'exposition, sensibilité, ouverture) et parfois la **position GPS** du lieu. Ces informations sont utiles, mais elles peuvent aussi poser des **questions de vie privée** : partager une photo peut révéler *où* et *quand* elle a été prise.

## Le traitement d'image

Un **algorithme de traitement d'image** transforme une image en **modifiant les valeurs des pixels**. Quelques exemples classiques :

- **Luminosité** : on **ajoute** une même valeur à R, V et B de chaque pixel pour éclaircir (ou on retranche pour assombrir), en restant entre 0 et 255.
- **Contraste** : on **écarte** les valeurs claires et sombres pour rendre l'image plus marquée.
- **Niveaux de gris** : on remplace chaque pixel par une nuance de gris. Une méthode simple consiste à calculer la **moyenne des trois composantes** : `gris = (R + V + B) / 3`, puis à mettre cette même valeur dans R, V et B (un pixel est gris quand R = V = B).
- **Filtres** : on applique un calcul sur chaque pixel et parfois ses voisins pour flouter, détecter les contours, rendre une image « négative » (on remplace chaque composante par 255 − sa valeur), etc.

## La compression JPEG

Une photo non compressée est trop lourde à stocker et à envoyer. On la **compresse** donc pour **réduire son poids**. Le format le plus répandu pour les photos est le **JPEG**.

Le JPEG est une **compression avec pertes** : pour gagner de la place, l'algorithme **supprime des détails peu perceptibles** par l'œil. On règle un **taux de compression** : plus on compresse, plus le fichier est léger, mais plus la qualité baisse (apparition d'**artefacts**). À l'inverse, un format comme le **PNG** offre une compression **sans perte**, mais des fichiers plus lourds.

## Ce qu'il faut retenir

- Une image numérique est une **grille de pixels** ; sa **définition** est le nombre total de pixels, sa **résolution** la densité de pixels.
- Chaque pixel est codé en **RVB** : trois valeurs de **0 à 255**, sur **3 octets**.
- Une **photo** est une image **matricielle** (elle se pixellise en zoomant), à la différence de l'image **vectorielle**.
- Le **poids** d'une image non compressée = **largeur × hauteur × 3 octets**.
- L'appareil capte la lumière avec des **photosites** et ajoute des **métadonnées EXIF** au fichier.
- Le **traitement d'image** modifie les valeurs des pixels ; le **JPEG** compresse **avec pertes** pour alléger les photos.

## Les erreurs à éviter

- « Définition et résolution, c'est pareil » : **non**, la définition compte les pixels, la résolution donne leur densité (ppp).
- « On peut agrandir une photo autant qu'on veut » : **non**, une image matricielle se **pixellise** ; seule l'image **vectorielle** s'agrandit sans perte.
- « Une composante RVB peut valoir 300 » : **non**, chaque composante va de **0 à 255** (1 octet).
- « Le JPEG ne perd rien » : **faux**, c'est une compression **avec pertes** ; c'est le **PNG** qui est sans perte.
