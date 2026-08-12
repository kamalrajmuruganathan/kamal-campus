---
id: 5e-math-transformations
titre: "Transformations : symétrie axiale et demi-tour"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Symétrie axiale (6e)
  - Milieu d'un segment (6e)
  - Médiatrice d'un segment (6e-5e)
  - Report de longueurs au compas (6e)
statut: brouillon
relu_par: null
---

# Transformations : symétrie axiale et demi-tour

> Transformer une figure, c'est la déplacer selon une règle précise. Le plus
> intéressant n'est pas ce qui change — c'est ce qui **ne change pas** : les
> longueurs, les angles, les aires. Ce sont ces **invariants** qui te permettront
> de démontrer.

Cette année, deux transformations : la **symétrie axiale**, que tu connais déjà, et une nouveauté, le **demi-tour**.

---

## 1. Rappel : la symétrie axiale

Elle se fait par rapport à une **droite**, appelée l'**axe**. Le symétrique d'un
point $M$ par rapport à un axe $(d)$ est le point $M'$ tel que :

$$\boxed{(d) \text{ est la médiatrice de } [MM']}$$

Autrement dit : $(d)$ coupe $[MM']$ en son **milieu** et **perpendiculairement**.

> **Le geste à retenir.** C'est le pliage. Si tu plies la feuille le long de $(d)$,
> $M$ tombe exactement sur $M'$.

### Construire, sur quadrillage

Compte les carreaux qui séparent le point de l'axe, puis reporte le même nombre
de l'autre côté.

> **Exemple.** Axe vertical, $M$ à $3$ carreaux à gauche : $M'$ est à $3$ carreaux
> à **droite** de l'axe, sur la **même** ligne.

Tu dois savoir le faire avec un axe **vertical**, **horizontal**, mais aussi
**en diagonale** — c'est le cas qui piège le plus.

### Construire, sur feuille blanche

1. Trace la perpendiculaire à $(d)$ passant par $M$.
2. Appelle $H$ le point où elle coupe $(d)$.
3. Reporte la longueur $HM$ de l'autre côté de $H$, sur cette perpendiculaire.

> **Cas particulier.** Un point **posé sur l'axe** ne bouge pas : il est son propre
> symétrique.

Pour une **figure**, construis le symétrique de chaque point important (sommets,
centre d'un cercle), puis relie.

---

## 2. Le demi-tour, ou symétrie centrale

C'est la nouveauté de cette année. Elle se fait non plus par rapport à une droite,
mais par rapport à un **point**, appelé le **centre**.

### Définition

Soit $O$ un point du plan et $M$ un point différent de $O$. L'image de $M$ par le
demi-tour de centre $O$ est le point $M'$ tel que :

$$\boxed{O \text{ est le milieu de } [MM']}$$

Et l'image de $O$ est $O$ **lui-même**.

> **Le geste à retenir.** C'est le demi-tour au sens propre : pique en $O$ et fais
> tourner la figure d'un **demi-tour**, c'est-à-dire de $180°$ (un tour complet
> vaut $360°$). Tu retrouves la figure image.

> **Autre nom.** Le programme t'apprend le mot **demi-tour** et te dit que c'est la
> même chose que la **symétrie centrale**. Deux mots, une seule transformation.

### Ce que la définition impose

Dire que $O$ est le milieu de $[MM']$, c'est dire **deux** choses à la fois :
$M$, $O$, $M'$ sont **alignés**, et $OM' = OM$. Si tu ne respectes qu'une des
deux conditions, ton point est faux.

---

## 3. Méthode : construire l'image par un demi-tour

### Un point, sur feuille blanche

1. Trace la demi-droite $[MO)$ — attention, elle **traverse** $O$ et continue au-delà.
2. Reporte la longueur $OM$ à partir de $O$, sur cette demi-droite, de l'autre côté.
3. Le point obtenu est $M'$.

### Un point, sur quadrillage

Compte le déplacement de $M$ jusqu'à $O$, puis **continue le même déplacement**
au-delà de $O$.

> **Exemple.** De $M$ à $O$ : $2$ carreaux à droite et $1$ vers le haut. Alors de
> $O$ à $M'$ : tu refais $2$ carreaux à droite et $1$ vers le haut.

### Une figure

Construis l'image de chaque **point clé**, puis relie dans le même ordre.

| Figure | Ce qu'il suffit de construire |
|---|---|
| Segment $[AB]$ | les images $A'$ et $B'$ des deux extrémités |
| Triangle | les images des trois sommets |
| Cercle de centre $C$ et de rayon $r$ | l'image $C'$ du centre ; le rayon reste $r$ |

---

## 4. Les propriétés du demi-tour

Chaque propriété sert à **construire**, mais aussi à **démontrer**.

### Il conserve les longueurs

Si $A'$ et $B'$ sont les images de $A$ et $B$, alors $A'B' = AB$.

> **Exemple.** $[AB]$ mesure $5{,}2$ cm : son image aussi, sans aucun calcul.

### Il conserve les mesures d'angles

> **Exemple.** L'image d'un angle de $47°$ est un angle de $47°$. Donc l'image d'un
> triangle rectangle est un triangle rectangle.

### Il conserve les aires

> **Exemple.** Un triangle d'aire $12$ cm² a pour image un triangle d'aire $12$ cm².
> C'est ce qui rend le demi-tour utile dans les preuves par les aires.

### Il conserve l'alignement

> **Exemple.** Si $A$, $B$, $C$ sont alignés, $A'$, $B'$, $C'$ le sont aussi.
> L'image d'une droite est donc bien une **droite**.

### L'image d'une droite lui est parallèle

C'est **la** propriété qui distingue le demi-tour de la symétrie axiale.

$$\boxed{\text{L'image d'une droite par un demi-tour est une droite parallèle}}$$

> **Exemple.** L'image de $[AB]$ est un segment $[A'B']$ **à la fois** de même
> longueur que $[AB]$ **et** parallèle à $(AB)$.

### Il ne retourne pas la figure

La figure image est tournée, pas retournée : elle se lit dans le même sens.

> **Comparaison.** Ta main droite dans un miroir devient une main gauche — ça, c'est
> la symétrie axiale. Après un demi-tour, ta main droite reste une main droite.

### Le refaire deux fois ne sert à rien

$M$ donne $M'$ ; $M'$ redonne $M$. Deux demi-tours font un tour complet.

---

## 5. Cas particuliers et pièges

### Les points qui ne bougent pas

| Transformation | Points invariants |
|---|---|
| Symétrie axiale d'axe $(d)$ | **tous** les points de $(d)$ |
| Demi-tour de centre $O$ | **le seul** point $O$ |

### Les droites qui reviennent sur elles-mêmes

Une droite qui **passe par $O$** a pour image elle-même : ses points glissent le
long d'elle, mais la droite, dans son ensemble, ne change pas.

### Le piège du parallélisme

Par un **demi-tour**, l'image d'une droite lui est **toujours** parallèle. Par une
**symétrie axiale**, c'est **faux** en général : dès qu'une droite est « de travers »
par rapport à l'axe, son image la **coupe**.

### Un centre de symétrie que tu connais déjà

Dans un parallélogramme, les diagonales se coupent en leur milieu. Ce point de
croisement est donc le centre d'un demi-tour qui envoie la figure sur elle-même.

---

## 6. Tableau récapitulatif

| | Symétrie axiale | Demi-tour (symétrie centrale) |
|---|---|---|
| Par rapport à | une **droite** (l'axe) | un **point** (le centre) |
| Définition | l'axe est la **médiatrice** de $[MM']$ | $O$ est le **milieu** de $[MM']$ |
| Geste | pliage | demi-tour ($180°$) autour de $O$ |
| Points invariants | tous ceux de l'axe | seulement $O$ |
| Longueurs, angles, aires | conservés | conservés |
| Alignement | conservé | conservé |
| Image d'une droite | droite, **pas** parallèle en général | droite **parallèle** |
| Sens de lecture | **retourné** | **conservé** |

---

## 7. Les erreurs qui coûtent des points

1. **Placer $M'$ du même côté que $M$.** Le demi-tour fait *traverser* le centre.
   Si $M$ et $M'$ sont du même côté de $O$, $O$ n'est pas le milieu de $[MM']$ :
   c'est faux.
2. **Aligner sans mesurer, ou mesurer sans aligner.** Les deux conditions vont
   ensemble. Et $OM' = OM$ est une **égalité** : utilise le compas, pas ton œil.
3. **Oublier que $O$ est sa propre image.** Si le centre est un sommet de la figure,
   ce sommet ne bouge pas — beaucoup d'élèves le déplacent quand même.
4. **Croire que l'image d'une droite est parallèle dans les deux transformations.**
   C'est vrai pour le demi-tour, **faux** pour la symétrie axiale.
5. **Traiter le demi-tour comme un miroir.** Il ne retourne pas la figure. Si ton
   dessin ressemble à un reflet, tu as fait une symétrie axiale.
6. **Refaire tout le cercle point par point.** L'image du centre suffit : le rayon
   ne change pas.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »,
section « Cinquième », entrée « Transformations », lignes 696-707 (intro du thème :
lignes 645-666).

TOUT le contenu de l'entrée, littéralement. Automatismes : « Reconnaitre et
construire le symétrique d'une figure par symétrie axiale, dont l'axe est vertical,
horizontal, ou en diagonale sur quadrillage. » / « Construire le symétrique, par
rapport à un axe, d'un point, d'une figure, sur feuille blanche. » — Objectifs :
« Définir le demi-tour, ou symétrie centrale. » / « Connaitre les propriétés du
demi-tour. » — Prolongements : rosaces et pavages du Moyen Âge ; flocon, alvéoles.

PÉRIMÈTRE — vérifié, texte NON ambigu. La 5e ne comporte que deux transformations :
symétrie axiale (en automatisme, donc réactivation des acquis de 6e) et demi-tour /
symétrie centrale (seul objectif nouveau). Recherche faite sur tout le fichier :
- TRANSLATION : apparait seulement en 4e (« Parallélogrammes et translations »,
  lignes 779-793) et en 3e (« Translations et vecteurs », lignes 849-856).
- ROTATION (autre que le demi-tour) et HOMOTHÉTIE : AUCUNE occurrence dans tout le
  programme de cycle 4.
Aucune des trois n'est traitée ici. Le demi-tour reparait en automatisme en 4e
(lignes 758 et 781-784) : notion bien installée en 5e, cohérent. NB : le mot
« rotation » est évité dans la fiche, la rotation générale n'étant pas au programme.

À TRANCHER PAR LE RELECTEUR
1. PRINCIPAL — « Connaitre les propriétés du demi-tour » : le BO ne les LISTE PAS.
   La section 4 est mon interprétation du niveau d'exigence de 5e (conservation des
   longueurs, angles, aires, alignement ; image d'une droite parallèle ; conservation
   du sens ; involution). Deux doutes précis : (a) la conservation des AIRES est-elle
   exigible ? Incluse parce que l'intro du thème (lignes 661-664) fait des « preuves
   utilisant les aires » un fil rouge et insiste sur « l'identification
   d'invariants ». (b) L'involution est-elle attendue, ou hors-programme ?
2. VOCABULAIRE : le BO écrit « le demi-tour, ou symétrie centrale », dans cet ordre.
   « Demi-tour » est donc le terme principal ici, à rebours de l'usage des manuels.
3. Section 5, lien avec le parallélogramme : de moi. Les deux notions sont en 5e
   (entrée « Parallélogrammes », lignes 740-753), mais le BO ne relie explicitement
   transformations et parallélogrammes qu'en 4e (ligne 790). À retirer si c'est jugé
   anticiper. Même remarque pour la notion de « centre de symétrie d'une figure »,
   non nommée en 5e : je ne l'ai pas érigée en section, seulement évoquée.
4. Section 5, image d'une droite par symétrie axiale : le cas d'une droite
   PERPENDICULAIRE à l'axe (image = elle-même) est volontairement passé sous
   silence, jugé trop subtil pour la 5e. À valider.
5. Médiatrice : automatisme de 5e (ligne 723), mais cette fiche la suppose déjà vue
   — vérifier la progression annuelle. Enfin, les prolongements culturels du BO ne
   sont pas exploités faute de figures : à prévoir si des illustrations arrivent.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel
ni à un site de cours. Statut : brouillon, non relu.
-->
