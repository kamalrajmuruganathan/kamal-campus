---
id: tale-spe-math-vecteurs-droites-plans-espace
titre: "Vecteurs, droites et plans de l'espace"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 13
prerequis:
  - Vecteurs du plan, colinéarité et combinaisons linéaires (Seconde, puis Première spé)
  - Repérage dans le plan, coordonnées d'un vecteur (Seconde)
  - Translations (Seconde)
statut: brouillon
relu_par: null
---

# Vecteurs, droites et plans de l'espace

> Dans le plan, deux directions suffisent à tout décrire. Dans l'espace, il en
> faut **trois**. Tout ce chapitre tient dans cette phrase : le vecteur, la droite
> et le plan sont les outils qui te permettent de te repérer et de raisonner en
> trois dimensions, **sans jamais tracer de figure exacte**. Le calcul vectoriel
> remplace le dessin.

Support de tout le chapitre : le **cube $ABCDEFGH$**. Face du bas $ABCD$, face du
haut $EFGH$, avec $E$ au-dessus de $A$, $F$ au-dessus de $B$, $G$ au-dessus de $C$,
$H$ au-dessus de $D$. Garde-le en tête : chaque notion y sera illustrée.

---

## 1. Vecteurs de l'espace et translations

Un **vecteur** de l'espace se définit exactement comme dans le plan : par une
**direction**, un **sens** et une **longueur** (sa norme). Le vecteur
$\overrightarrow{AB}$ est la donnée du déplacement — la **translation** — qui
amène $A$ sur $B$.

- **Égalité** : $\overrightarrow{AB} = \overrightarrow{CD}$ signifie que $ABDC$ est
  un parallélogramme (éventuellement aplati). Le vecteur ne dépend pas de l'endroit
  où on le dessine.
- **Relation de Chasles** : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
  Elle est vraie même quand $A$, $B$, $C$ ne sont pas dans un même plan — c'est là
  toute la nouveauté de l'espace.

> **Sur le cube.** $\overrightarrow{AB} = \overrightarrow{DC} = \overrightarrow{EF}
> = \overrightarrow{HG}$ : ces quatre arêtes portent le **même** vecteur. De même
> $\overrightarrow{AE} = \overrightarrow{BF} = \overrightarrow{CG} = \overrightarrow{DH}$
> (les quatre montants verticaux).

---

## 2. Combinaisons linéaires

Soit des vecteurs $\overrightarrow{u_1}, \dots, \overrightarrow{u_n}$ et des réels
$a_1, \dots, a_n$. Le vecteur

$$\overrightarrow{w} = a_1\overrightarrow{u_1} + a_2\overrightarrow{u_2} + \dots + a_n\overrightarrow{u_n}$$

est une **combinaison linéaire** des $\overrightarrow{u_i}$. Les $a_i$ sont les
**coefficients**.

> **Sur le cube.** La grande diagonale s'écrit comme combinaison des trois arêtes
> issues de $A$ :
> $$\boxed{\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}}$$
> En effet $\overrightarrow{AG} = \overrightarrow{AC} + \overrightarrow{CG}$ et
> $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$ (diagonale de la
> face du bas), avec $\overrightarrow{CG} = \overrightarrow{AE}$. Le centre $I$ de la
> face du haut vérifie de même $\overrightarrow{AI} = \overrightarrow{AE} + \tfrac{1}{2}\overrightarrow{AB} + \tfrac{1}{2}\overrightarrow{AD}$.

---

## 3. Colinéarité

Deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont **colinéaires**
lorsqu'il existe un réel $k$ tel que $\overrightarrow{v} = k\,\overrightarrow{u}$
(avec $\overrightarrow{u} \neq \overrightarrow{0}$). Le vecteur nul est colinéaire à
tout vecteur.

**Interprétation :** deux vecteurs colinéaires ont la **même direction**. Ils
« portent » la même droite.

> **Sur le cube.** $\overrightarrow{AB}$ et $\overrightarrow{HG}$ sont colinéaires
> (ils sont même égaux : $k = 1$). $\overrightarrow{AG}$ et $\overrightarrow{AB}$ ne
> le sont **pas** : impossible de trouver $k$ tel que la diagonale soit un multiple
> d'une arête.

> **À retenir.** Colinéarité $\Rightarrow$ **alignement** de points :
> $A$, $B$, $C$ sont alignés $\iff \overrightarrow{AB}$ et $\overrightarrow{AC}$ sont
> colinéaires.

---

## 4. Droites de l'espace

Une droite est entièrement déterminée par **un point et une direction**.

**Vecteur directeur.** Un vecteur $\overrightarrow{u} \neq \overrightarrow{0}$ est un
vecteur directeur de la droite $(d)$ s'il a la direction de $(d)$. Tous les vecteurs
directeurs d'une même droite sont **colinéaires** entre eux.

**Caractérisation point + directeur.** Soit $A$ un point et $\overrightarrow{u}$ un
vecteur directeur. Un point $M$ appartient à la droite passant par $A$ dirigée par
$\overrightarrow{u}$ si et seulement si :

$$\boxed{\overrightarrow{AM} = t\,\overrightarrow{u}, \quad t \in \mathbb{R}}$$

Le réel $t$ « pilote » la position de $M$ sur la droite : $t=0$ donne $A$, $t=1$
donne le point $A + \overrightarrow{u}$, $t<0$ part de l'autre côté.

> **Sur le cube.** La droite $(EG)$ a pour vecteur directeur
> $\overrightarrow{EG} = \overrightarrow{EF} + \overrightarrow{FG} = \overrightarrow{AB} + \overrightarrow{AD}$.
> Un point $M$ est sur $(EG)$ ssi $\overrightarrow{EM} = t(\overrightarrow{AB} + \overrightarrow{AD})$.

---

## 5. Plans de l'espace

Un plan est déterminé par **un point et deux directions non colinéaires**.

**Direction d'un plan.** C'est l'ensemble des vecteurs « parallèles » au plan.
Elle est donnée par un **couple de vecteurs non colinéaires**
$(\overrightarrow{u}, \overrightarrow{v})$.

**Caractérisation point + deux vecteurs non colinéaires.** Soit $A$ un point et
$(\overrightarrow{u}, \overrightarrow{v})$ deux vecteurs non colinéaires. Un point
$M$ appartient au plan passant par $A$ dirigé par $(\overrightarrow{u}, \overrightarrow{v})$
si et seulement si :

$$\boxed{\overrightarrow{AM} = s\,\overrightarrow{u} + t\,\overrightarrow{v}, \quad (s,t) \in \mathbb{R}^2}$$

> **Sur le cube.** Le plan $(ABC)$ est celui de la face $ABCD$. Il passe par $A$ et
> est dirigé par $(\overrightarrow{AB}, \overrightarrow{AD})$, non colinéaires. Le
> point $C$ y est car $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$
> (donc $s=1$, $t=1$).

**Coplanarité de trois vecteurs.** $\overrightarrow{u}, \overrightarrow{v}, \overrightarrow{w}$
sont **coplanaires** si l'un est combinaison linéaire des deux autres (au moins deux
d'entre eux étant non colinéaires). Quatre points $A,B,C,D$ sont coplanaires ssi
$\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD}$ le sont.

> **Sur le cube.** $A$, $B$, $G$, $H$ sont coplanaires : $\overrightarrow{AG} =
> \overrightarrow{AB} + \overrightarrow{AH}$, donc $G$ est dans le plan $(A; \overrightarrow{AB}, \overrightarrow{AH})$.
> C'est un des plans « diagonaux » du cube.

---

## 6. Bases et repères de l'espace

**Base.** Trois vecteurs $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$
forment une **base de l'espace** lorsqu'ils sont **non coplanaires**. (Dans le plan,
il fallait deux vecteurs non colinéaires ; dans l'espace, trois vecteurs non
coplanaires — une direction de plus.)

**Repère.** Un point $O$ (l'origine) et une base $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$
forment un **repère** $(O ; \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$.

**Décomposition d'un vecteur sur une base.** Si $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$
est une base, alors **tout** vecteur $\overrightarrow{u}$ s'écrit de **manière unique**

$$\overrightarrow{u} = x\,\overrightarrow{i} + y\,\overrightarrow{j} + z\,\overrightarrow{k},$$

et $(x, y, z)$ sont les **coordonnées** de $\overrightarrow{u}$ dans la base. C'est
l'unicité qui rend le calcul possible : deux vecteurs sont égaux ssi ils ont les
mêmes coordonnées.

> **Sur le cube.** Prends le repère $(A ; \overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})$.
> Alors :
> - $A(0,0,0)$, $B(1,0,0)$, $C(1,1,0)$, $D(0,1,0)$,
> - $E(0,0,1)$, $F(1,0,1)$, $G(1,1,1)$, $H(0,1,1)$.
>
> On lit la décomposition directement : $\overrightarrow{AG}$ a pour coordonnées
> $(1,1,1)$, ce qui redonne $\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}$.

---

## 7. Méthodes

**A. Exprimer un vecteur comme combinaison linéaire (sur une figure).** Décompose le
trajet avec Chasles jusqu'à n'avoir que les vecteurs de la base. Ex. :
$\overrightarrow{DF} = -\overrightarrow{AD} + \overrightarrow{AB} + \overrightarrow{AE}$, soit $(1,-1,1)$.

**B. Tester la colinéarité par coordonnées.** Cherche un $k$ tel que chaque coordonnée
de $\overrightarrow{v}$ soit $k$ fois celle de $\overrightarrow{u}$. Un même $k$ partout :
colinéaires ; sinon : non.

**C. Décider si trois vecteurs forment une base.** Base $\iff$ non coplanaires $\iff$
**aucun n'est combinaison linéaire des deux autres** (ex. : trois arêtes issues d'un même sommet).

**D. Prouver un alignement / une coplanarité.** Alignement de $A,B,C$ : $\overrightarrow{AC} = k\,\overrightarrow{AB}$.
Coplanarité de $A,B,C,D$ : $\overrightarrow{AD} = s\,\overrightarrow{AB} + t\,\overrightarrow{AC}$.

---

## 8. Positions relatives

On raisonne sur les **directions** (vecteurs directeurs / directrices) puis sur
l'existence d'un **point commun**.

**Deux droites.** Elles peuvent être :
- **coplanaires** : soit **parallèles** (directeurs colinéaires) — confondues ou
  strictement parallèles —, soit **sécantes** (un point commun) ;
- **non coplanaires** : ni parallèles, ni sécantes (elles ne se rencontrent pas).
  C'est propre à l'espace.

> **Sur le cube.** $(AB)$ et $(EF)$ : parallèles. $(AB)$ et $(BC)$ : sécantes en $B$.
> $(AB)$ et $(CG)$ : **non coplanaires** (directions différentes et aucun point commun).

**Une droite et un plan.**
- droite **parallèle** au plan : un directeur de la droite appartient à la direction
  du plan, et la droite n'est pas incluse ;
- droite **incluse** dans le plan ;
- droite **sécante** : un seul point commun (elle « perce » le plan).

> **Sur le cube.** $(EF)$ et le plan $(ABCD)$ : parallèles. $(AB)$ et $(ABCD)$ :
> incluse. $(AE)$ et $(ABCD)$ : sécante en $A$.

**Deux plans.**
- **parallèles** (même direction) : confondus ou strictement parallèles ;
- **sécants** : leur intersection est une **droite**.

> **Sur le cube.** $(ABCD)$ et $(EFGH)$ : strictement parallèles. $(ABCD)$ et
> $(ABFE)$ : sécants, d'intersection la droite $(AB)$.

---

## 9. Pièges et cas particuliers

- **Colinéaire $\neq$ égal.** $\overrightarrow{AB}$ et $\overrightarrow{GH}$ sont
  colinéaires mais **opposés** ($\overrightarrow{GH} = -\overrightarrow{AB}$) : même
  direction, sens contraire.
- **Parallèle $\neq$ sécant… mais pas toujours l'un ou l'autre.** Dans l'espace, deux
  droites peuvent n'être **ni** parallèles **ni** sécantes (non coplanaires). Ce
  troisième cas n'existe pas dans le plan.
- **Non colinéaires est indispensable** pour caractériser un plan : si $\overrightarrow{u}$
  et $\overrightarrow{v}$ sont colinéaires, ils ne dirigent qu'une **droite**, pas un plan.
- **Trois vecteurs coplanaires ne forment pas une base** : il manque une direction,
  la décomposition n'est plus unique (ou plus possible).

---

## 10. Tableau récapitulatif

| Objet | Déterminé par | Condition | Écriture |
|---|---|---|---|
| Vecteurs colinéaires | — | même direction | $\overrightarrow{v} = k\,\overrightarrow{u}$ |
| Droite $(A, \overrightarrow{u})$ | 1 point + 1 directeur | $\overrightarrow{u} \neq \overrightarrow{0}$ | $\overrightarrow{AM} = t\,\overrightarrow{u}$ |
| Plan $(A, \overrightarrow{u}, \overrightarrow{v})$ | 1 point + 2 vecteurs | $\overrightarrow{u}, \overrightarrow{v}$ **non colinéaires** | $\overrightarrow{AM} = s\,\overrightarrow{u} + t\,\overrightarrow{v}$ |
| Base de l'espace | 3 vecteurs | **non coplanaires** | $\overrightarrow{u} = x\overrightarrow{i}+y\overrightarrow{j}+z\overrightarrow{k}$ (unique) |
| Alignement de $A,B,C$ | — | $\overrightarrow{AB},\overrightarrow{AC}$ colinéaires | $\overrightarrow{AC}=k\,\overrightarrow{AB}$ |
| Coplanarité de $A,B,C,D$ | — | $\overrightarrow{AD}$ comb. lin. de $\overrightarrow{AB},\overrightarrow{AC}$ | $\overrightarrow{AD}=s\,\overrightarrow{AB}+t\,\overrightarrow{AC}$ |

---

## 11. Les erreurs qui coûtent des points

1. **Croire que deux droites de l'espace sont forcément parallèles ou sécantes.**
   Le cas **non coplanaire** existe : $(AB)$ et $(CG)$ sur le cube.
2. **Confondre colinéaires et égaux.** Colinéaires = un est multiple de l'autre ; le
   coefficient $k$ peut être négatif ou différent de $1$.
3. **Diriger un plan par deux vecteurs colinéaires.** Ça ne définit qu'une droite. Il
   faut **deux directions distinctes**.
4. **Prendre trois vecteurs coplanaires pour une base.** Il faut trois vecteurs
   **non coplanaires** : trois arêtes concourantes du cube, pas trois vecteurs d'une
   même face.
5. **Oublier la relation de Chasles dans l'espace.** Elle reste valable même si les
   points ne sont pas dans un même plan — c'est l'outil n°1 pour décomposer un vecteur.
6. **Écrire des coordonnées sans préciser la base ou le repère.** $(1,1,1)$ ne veut
   rien dire sans le repère $(A ; \overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

⚠️ MENTION OBLIGATOIRE 1 — SOURCE / PROVENANCE : le contenu est rédigé à partir de
docs/programme-terminale-specialite-maths-2027.txt, section « ALGÈBRE ET GÉOMÉTRIE —
MANIPULATION DES VECTEURS, DES DROITES ET DES PLANS DE L'ESPACE » (lignes 60-80 du
fichier source ; rubriques Contenus et Capacités attendues). Ce fichier source est une
EXTRACTION via l'outil WebFetch depuis un MIROIR (xm1math.net), le proxy du sandbox
bloquant le PDF officiel (voir l'en-tête de provenance, lignes 1-20 du fichier source).
Cette extraction WebFetch DOIT être CONFRONTÉE AU PDF OFFICIEL (education.gouv.fr /
éduscol) avant toute publication. La reproduction n'est pas garantie exhaustive
(préambules, exemples et notes de bas de page non repris).

⚠️ MENTION OBLIGATOIRE 2 — PÉRIMÈTRE TERMINALE / RENTRÉE 2027 : ce chapitre de TERMINALE
a été produit sur le programme applicable à la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md, §6) recommandait de « ne rien
écrire pour la Terminale avant 2027 » ; la demande utilisateur lève cette réserve
puisque le nouveau programme 2027 est désormais publié. À signaler au relecteur.

PÉRIMÈTRE VOLONTAIREMENT RESTREINT :
- PAS de produit scalaire, PAS d'orthogonalité, PAS de norme/distance : ils relèvent de
  la section suivante du programme (« ORTHOGONALITÉ ET DISTANCES DANS L'ESPACE »,
  chapitre produit-scalaire-espace).
- PAS de représentation paramétrique de droite ni d'équation cartésienne de plan :
  section « REPRÉSENTATIONS PARAMÉTRIQUES ET ÉQUATIONS CARTÉSIENNES » du programme, hors
  de ce chapitre. La caractérisation vectorielle (AM = t·u ; AM = s·u + t·v) est incluse
  car elle figure explicitement dans les Contenus de CE chapitre ; la forme paramétrée
  coordonnée par coordonnée est délibérément laissée au chapitre suivant.

À CONFRONTER AU PROGRAMME OFFICIEL PAR UN PROFESSEUR :
- Le repère (A; AB, AD, AE) et les coordonnées des 8 sommets du cube sont un support
  pédagogique ajouté : vérifier que l'introduction des COORDONNÉES dans une base
  quelconque (non orthonormée) est bien attendue ici, la base orthonormée n'arrivant
  qu'au chapitre « orthogonalité ». J'ai fait le choix de rester en base quelconque,
  conforme au contenu « Bases et repères de l'espace. Décomposition d'un vecteur sur
  une base ».
- Vocabulaire « droites non coplanaires » : le BO parle de « position relative de deux
  droites » sans forcément nommer ce cas ; le terme est standard mais à valider.
- Aucune démonstration exigible n'est listée dans l'extraction pour cette section : je
  n'ai donc pas isolé de démonstration au sens du gabarit ; les justifications (Chasles)
  sont traitées comme méthodes.

Prérequis mobilisés : vecteurs et colinéarité du plan (Seconde/Première), repérage plan.
Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
