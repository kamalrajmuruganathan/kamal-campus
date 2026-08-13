---
id: 6e-math-configurations-planes
titre: "Géométrie : configurations planes"
voie: college
niveau: sixieme
parcours: maths
matiere: mathematiques
programme: "Programme de cycle 3 (2025) — applicable en 6e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - Vocabulaire de base (point, droite, segment) et codage des angles droits (CM1-CM2)
  - Reconnaître un carré, un rectangle, un triangle (CM)
  - Reconnaître les axes de symétrie d'une figure (CM)
statut: brouillon
relu_par: null
---

# Géométrie : configurations planes

> En géométrie, on ne devine pas : on **construit** avec des instruments et on
> **justifie** avec des définitions. Une figure bien faite au compas et à la règle
> vaut toutes les explications. Ce chapitre te donne le vocabulaire exact et les
> gestes précis pour tracer sans te tromper.

---

## 1. Le vocabulaire et les notations de base

On note les **points** par des lettres majuscules : $A$, $B$, $M$, $O$…

| Objet | Notation | Ce que c'est |
|---|---|---|
| Droite passant par $A$ et $B$ | $(AB)$ | infinie des deux côtés |
| Segment d'extrémités $A$ et $B$ | $[AB]$ | limité par $A$ et $B$ |
| Demi-droite d'origine $A$ passant par $B$ | $[AB)$ | limitée d'un seul côté |
| Longueur du segment | $AB$ | un **nombre** (en cm) |

> ⚠️ **Ne confonds pas $[AB]$ et $AB$.** $[AB]$ est un dessin (un segment) ;
> $AB$ est une mesure (par exemple $5$ cm). Les crochets changent tout.

---

## 2. Distances et milieu

La **distance** entre deux points $A$ et $B$ est la longueur du segment $[AB]$,
c'est-à-dire le nombre $AB$ : le chemin le plus court pour aller de $A$ à $B$.

Le **milieu** $I$ d'un segment $[AB]$ est le point de ce segment qui le partage en
deux morceaux de même longueur.

$$\boxed{I \text{ milieu de } [AB] \iff I \in [AB] \text{ et } IA = IB = \dfrac{AB}{2}}$$

> **Exemple.** Si $AB = 6$ cm, son milieu $I$ vérifie $IA = IB = 3$ cm.

> ⚠️ $IA = IB$ ne suffit pas : il faut aussi que $I$ soit **sur** le segment. Un point
> à égale distance de $A$ et $B$ hors de $(AB)$ n'est pas le milieu (voir §4).

---

## 3. Cercles et disques

Soit $O$ un point et $r$ une longueur positive.

- Le **cercle** de centre $O$ et de rayon $r$ est l'ensemble des points situés à la
  distance $r$ de $O$ : c'est **juste le contour** ($OM = r$).
- Le **disque** de centre $O$ et de rayon $r$ ajoute l'intérieur : tous les points à
  distance **inférieure ou égale** à $r$ ($OM \leq r$). Image : le cercle est la piste
  de course, le disque est tout le stade, pelouse comprise.

Vocabulaire : le **rayon** relie le centre $O$ à un point du cercle (longueur $r$) ;
une **corde** relie deux points du cercle ; un **diamètre** est une corde qui passe
par $O$. Le diamètre mesure **deux fois** le rayon.

> **Exemple.** Un cercle de rayon $4$ cm a un diamètre de $8$ cm — c'est sa plus
> longue corde. **Pour le tracer** : écarte le compas du rayon (règle : pointe sèche
> sur $0$, crayon sur la graduation), plante la pointe sur $O$, tourne d'un tour.

---

## 4. La médiatrice d'un segment

La **médiatrice** d'un segment $[AB]$ est la droite **perpendiculaire** à $[AB]$ qui
passe par son **milieu**. Sa propriété caractéristique :

$$\boxed{M \text{ est sur la médiatrice de } [AB] \iff MA = MB}$$

C'est donc l'ensemble des points **à égale distance** de $A$ et de $B$.

> **Exemple.** Où placer un puits à égale distance de deux maisons $A$ et $B$ ? Sur
> tout point de la médiatrice de $[AB]$.

**Construire la médiatrice au compas :**

1. Prends un écartement **plus grand que la moitié** de $AB$.
2. Pointe sèche sur $A$ : trace deux arcs, un au-dessus, un en dessous.
3. Sans changer l'écartement, pointe sèche sur $B$ : trace deux arcs qui croisent les
   premiers en deux points.
4. Trace la droite passant par ces deux points : c'est la médiatrice. (Ces deux points
   sont à égale distance de $A$ et $B$, d'où le résultat.)

---

## 5. Les angles

Un angle se note avec trois lettres et un chapeau : $\widehat{ABC}$, le sommet au
milieu (ici $B$). On le mesure en **degrés** ($^\circ$) avec un rapporteur.

| Angle | Mesure |
|---|---|
| **nul** | $0^\circ$ |
| **aigu** | entre $0^\circ$ et $90^\circ$ |
| **droit** | $90^\circ$ (codé par un petit carré) |
| **obtus** | entre $90^\circ$ et $180^\circ$ |
| **plat** | $180^\circ$ (les deux côtés forment une droite) |
| **plein** | $360^\circ$ (un tour complet) |

Deux angles particuliers à repérer :

- **Angles opposés par le sommet** : formés par deux droites qui se croisent, de part
  et d'autre du point. Ils sont **égaux**.
- **Angles adjacents** : ils ont le même sommet, un côté commun, et sont situés de
  part et d'autre de ce côté.
- **Angles supplémentaires** : deux angles dont la **somme fait $180^\circ$**.

> **Exemple.** Un angle de $130^\circ$ et un angle de $50^\circ$ sont supplémentaires
> car $130 + 50 = 180$.

**Mesurer un angle au rapporteur :** place le **centre** du rapporteur sur le
**sommet**, fais coïncider un côté avec la graduation **$0$**, puis lis la graduation
traversée par l'autre côté.

> ⚠️ Le rapporteur a **deux graduations** (montante et descendante). Choisis celle qui
> part du $0$ posé sur ton premier côté. Un angle aigu donne moins de $90^\circ$ :
> c'est ton garde-fou.

**Construire $\widehat{xOy} = 50^\circ$ :** trace une demi-droite $[Ox)$ ; pose le
centre du rapporteur sur $O$, le $0$ sur $[Ox)$ ; repère la graduation $50$ et marque
un point $y$ ; trace $[Oy)$.

---

## 6. La bissectrice d'un angle

La **bissectrice** d'un angle saillant (un angle qui ne dépasse pas $180^\circ$) est
la demi-droite qui partage cet angle en **deux angles égaux**.

> **Exemple.** La bissectrice d'un angle de $80^\circ$ le coupe en deux angles de
> $40^\circ$.

**Construire la bissectrice au compas :** pointe sèche sur le sommet $O$, trace un arc
qui coupe les deux côtés en $M$ et $N$ ; pointe sèche sur $M$ puis sur $N$ (même
écartement), trace deux arcs qui se croisent en $P$ ; trace $[OP)$.

---

## 7. Les triangles

**Construire un triangle dont on connaît les trois longueurs :** trace un côté $[AB]$
à la règle ; écarte le compas de $AC$, pointe sèche sur $A$, trace un arc ; écarte le
compas de $BC$, pointe sèche sur $B$, trace un arc ; le point $C$ est à l'intersection
des deux arcs, relie-le à $A$ et $B$.

> ⚠️ **Trois longueurs ne donnent pas toujours un triangle.** Si le plus long côté
> dépasse la somme des deux autres, les arcs ne se croisent pas. Avec $2$ cm, $2$ cm
> et $6$ cm, c'est impossible : $2 + 2 = 4 < 6$.

**Les triangles particuliers :**

| Triangle | Définition | Propriété des angles |
|---|---|---|
| **rectangle** | possède un angle droit | un angle de $90^\circ$ |
| **isocèle** | deux côtés de même longueur | deux angles égaux (à la base) |
| **équilatéral** | trois côtés de même longueur | trois angles de $60^\circ$ |

> **Exemple.** Dans un triangle isocèle en $A$ (donc $AB = AC$), les angles
> $\widehat{B}$ et $\widehat{C}$ sont égaux.

**La somme des angles.** Dans **tout** triangle, la somme des trois angles vaut :

$$\boxed{\widehat{A} + \widehat{B} + \widehat{C} = 180^\circ}$$

> **Exemple.** Si $\widehat{A} = 70^\circ$ et $\widehat{B} = 60^\circ$, alors
> $\widehat{C} = 180 - 70 - 60 = 50^\circ$. Contrôle sur l'équilatéral :
> $60 + 60 + 60 = 180$ ✓

**Le cercle circonscrit.** Les **trois médiatrices** d'un triangle se croisent en un
même point (elles sont **concourantes**). Ce point est à égale distance des trois
sommets : c'est le centre du **cercle circonscrit**, qui passe par les trois sommets.

> **Pourquoi.** Il est sur la médiatrice de $[AB]$ (donc $A$, $B$ à égale distance) et
> sur celle de $[BC]$ (donc $B$, $C$) : les trois sommets sont à la même distance.

---

## 8. La symétrie axiale

Le **symétrique** d'un point $M$ par rapport à une droite $(d)$ est le point $M'$ tel
que $(d)$ soit la **médiatrice** du segment $[MM']$ ; $(d)$ est l'**axe de symétrie**.
Cas particulier : si $M$ est **sur** l'axe, alors $M' = M$.

> **Comment lire.** $(d)$ médiatrice de $[MM']$ dit deux choses : $M$ et $M'$ sont à
> égale distance de l'axe, et $[MM']$ le coupe perpendiculairement. L'axe est un
> **miroir**.

**Construire le symétrique de $M$ :** trace la perpendiculaire à $(d)$ passant par $M$
(équerre) ; mesure la distance de $M$ à l'axe ; reporte-la de l'autre côté sur cette
perpendiculaire : tu obtiens $M'$.

**Propriétés de conservation.** La symétrie axiale **conserve** les **longueurs** (le
symétrique de $AB$ vérifie $A'B' = AB$), l'**alignement**, les **angles** (même mesure)
et les **aires**.

> **À retenir.** Une figure et son symétrique sont **superposables** : même forme,
> même taille, juste retournés comme dans un miroir.

---

## 9. Un mot sur la vision dans l'espace

En 6e, on entretient la reconnaissance des solides (cube, pavé, boule, cône, cylindre,
pyramide, prisme droit) et on travaille sur des **assemblages de cubes** : compter les
cubes d'un empilement, passer de l'objet en volume à ses vues à plat (et inversement).

---

## 10. À retenir absolument

| Notion | L'essentiel |
|---|---|
| Distance $AB$ | longueur du segment $[AB]$, un nombre |
| Milieu $I$ de $[AB]$ | sur $[AB]$ **et** $IA = IB = \frac{AB}{2}$ |
| Cercle | contour : $OM = r$ · Disque : contour + intérieur : $OM \leq r$ |
| Diamètre | $2 \times$ rayon, la plus longue corde |
| Médiatrice de $[AB]$ | perpendiculaire au milieu · ensemble des points où $MA = MB$ |
| Angles | droit $90^\circ$, plat $180^\circ$ · supplémentaires : somme $= 180^\circ$ |
| Bissectrice | partage l'angle en **deux angles égaux** |
| Somme des angles d'un triangle | $\boxed{180^\circ}$ · équilatéral : trois fois $60^\circ$ |
| Cercle circonscrit | centre = point de concours des **médiatrices** |
| Symétrie axiale | axe = médiatrice de $[MM']$ · conserve longueurs, angles, aires |

---

## 11. Les erreurs qui coûtent des points

1. **Confondre $[AB]$ (segment, qu'on dessine) et $AB$ (longueur, un nombre).** Oublier
   les crochets fausse toute la copie.
2. **Confondre cercle et disque.** Le cercle est **seulement** le contour ($OM = r$) ;
   le disque inclut l'intérieur ($OM \leq r$).
3. **Prendre le milieu pour n'importe quel point équidistant.** $IA = IB$ ne suffit pas :
   le milieu doit être **sur** le segment — sinon tu décris la médiatrice.
4. **Lire le rapporteur sur la mauvaise graduation.** Un angle aigu qui te donne
   $130^\circ$ : tu as lu la mauvaise rangée. Reprends au $0$.
5. **Croire que trois longueurs donnent toujours un triangle.** Faux si le plus grand
   côté dépasse la somme des deux autres.
6. **Confondre médiatrice (coupe un segment en son milieu) et bissectrice (coupe un
   angle en deux)**, ou oublier que la somme des angles fait $180^\circ$ (pas $360^\circ$).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source unique : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt, thème
« Espace et géométrie », niveau Sixième, « Étude de configurations planes », l.1210-1292.
Correspondances : distance + milieu (l.1242-1243) → §2 ; cercle/disque/rayon/diamètre/
corde (l.1246-1247) → §3 ; médiatrice + propriété caractéristique (l.1251-1253) → §4 ;
lexique + mesurer + construire un angle (l.1256-1259) → §5 ; bissectrice d'un angle
saillant (l.1260-1263) → §6 ; triangles, somme des angles, médiatrices concourantes,
cercle circonscrit (l.1264-1274) → §7 ; symétrique + propriétés (l.1275-1280) → §8 ;
cubes (l.1281-1292) → §9.

À trancher par le relecteur :
- §1 (point/droite/segment/demi-droite + notations) n'est PAS un objectif explicite de la
  section 6e ; relève des acquis CM (l.1212-1214) et automatismes (l.1234), ajouté à la
  demande de la consigne comme rappel — garder ou alléger ?
- « Angles opposés par le sommet égaux » : le programme ne liste que le lexique (l.1257) ;
  propriété d'égalité ajoutée par moi — confirmer qu'elle est attendue en 6e.
- Inégalité triangulaire : le programme dit seulement « trois longueurs ne permettent pas
  toujours un triangle » (l.1266-1267) sans critère formel ; critère (plus grand côté <
  somme des deux autres) ajouté — valider en 6e.
- Périmètre cycle 4 exclu (symétrie centrale = 5e, angles alternes-internes…) ; sans
  figures, vérifier chaque protocole de construction comme exact et exécutable tel quel.

Rédaction originale à partir du seul programme officiel. Aucun emprunt. Brouillon non relu.
-->
