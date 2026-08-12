---
id: 4e-math-parallelogrammes-translations
titre: "Parallélogrammes et translations"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Parallélogrammes — propriétés et propriétés caractéristiques (5e)
  - Transformations — symétrie axiale et demi-tour (5e)
  - Angles et droites parallèles (5e)
statut: brouillon
relu_par: null
---

# Parallélogrammes et translations

> Un parallélogramme, c'est une figure. Une translation, c'est un glissement. Et
> pourtant : dire « $ABDC$ est un parallélogramme » et dire « le glissement qui mène
> $A$ en $B$ mène $C$ en $D$ », c'est dire **exactement la même chose**.

Ce chapitre ne réapprend ni l'un ni l'autre : il t'apprend à **passer de l'un à
l'autre**, parce que c'est ce passage qui te permet de démontrer.

> **Avant de commencer.** Relis la fiche **« Parallélogrammes » (5e)** : définition,
> propriétés, et surtout **propriétés caractéristiques**. Tout ce qui suit s'appuie
> dessus sans le réexpliquer. La fiche **« Transformations » (4e)** détaille, elle,
> la translation pour elle-même.

---

## 1. L'effet d'une translation — le strict nécessaire

Une translation, c'est un **glissement**. Tous les points du plan se déplacent **de
la même façon** : même **direction**, même **sens**, même **longueur**. Pour la
définir entièrement, il suffit donc de donner **un point et son image** — on dit
« la translation qui envoie $A$ sur $B$ ».

> **Exemple.** Si la translation envoie $A$ sur $B$ par « $3$ carreaux à droite,
> $2$ vers le haut », alors **tout** point subit ce même déplacement — sans
> exception. C'est ce qui la distingue du demi-tour, où le déplacement dépend de la
> position du point par rapport au centre.

---

## 2. Le lien avec le parallélogramme

Voici la propriété qui fait tout le chapitre. Soient $A$, $B$, $C$ trois points
**non alignés**, et $D$ un point du plan.

$$\boxed{ABDC \text{ est un parallélogramme} \iff \text{la translation qui envoie } A \text{ sur } B \text{ envoie } C \text{ sur } D}$$

Le symbole $\iff$ se lit **« si et seulement si »** : les deux phrases sont vraies
en même temps, ou fausses en même temps.

> **Pourquoi c'est naturel.** La translation fait glisser $A$ vers $B$ et $C$ vers
> $D$ **du même déplacement** : $[AB]$ et $[CD]$ ont donc même longueur et même
> direction. Deux côtés parallèles **et** de même longueur : parallélogramme (5e).

### ⚠️ $ABDC$, pas $ABCD$

| Écriture | Ce que ça désigne |
|---|---|
| $ABDC$ | on parcourt le contour : $A \to B \to D \to C \to A$ ✅ |
| $ABCD$ | on traverse la figure : quadrilatère **croisé** ❌ |

Retiens le **chemin** : $A$ glisse vers $B$, $C$ vers $D$ — les côtés « glissés »
$[AB]$ et $[CD]$ sont donc **opposés** dans $ABDC$.

> **Le contrôle en trois secondes.** Dans $ABDC$, les diagonales sont $[AD]$ et
> $[BC]$. Si tu prends $[AC]$ et $[BD]$ pour des diagonales, tu t'es trompé de
> figure : ce sont des **côtés**.

### Les deux lectures d'un même parallélogramme

Un quadrilatère se lit dans les deux sens : $ABDC$ et $ACDB$ désignent **la même
figure**. D'où un deuxième résultat, gratuit :

> Si $ABDC$ est un parallélogramme, alors la translation qui envoie $A$ sur $B$
> envoie $C$ sur $D$, **et** la translation qui envoie $A$ sur $C$ envoie $B$ sur $D$.
> Un même parallélogramme fournit donc **deux** translations.

---

## 3. Propriété, ou propriété **caractéristique** ?

C'est le cœur du raisonnement attendu cette année, et tu l'as déjà rencontré en 5e.

- Une **propriété** va dans **un seul sens** : *si* la figure est un parallélogramme,
  *alors* ses côtés opposés sont égaux. Elle sert à **exploiter** ce qu'on sait.
- Une propriété **caractéristique** va dans **les deux sens**. Elle sert en plus à
  **démontrer** qu'une figure est un parallélogramme.

Le lien du § 2 est **caractéristique**. Tu l'utilises donc dans les deux sens :

| Ce que l'énoncé te donne | Ce que tu en tires |
|---|---|
| Une **translation** ($D$ est l'image de $C$) | $ABDC$ est un **parallélogramme** |
| Un **parallélogramme** $ABDC$ | l'**image** de $C$ par la translation $A \to B$ est $D$ |

> ⚠️ **Ne confonds pas avec les conservations.** « La translation conserve les
> longueurs » ne va que dans **un** sens : deux segments de même longueur ne sont pas
> forcément images l'un de l'autre — ils peuvent être de travers.

---

## 4. Démontrer : trois modèles rédigés

Toujours la même structure : **je sais que… / or… / donc…** C'est le **« or »** qui
fait la preuve — sans lui, tu constates, tu ne démontres pas.

### Démonstration A — de la translation vers les longueurs

> *$A$, $B$, $C$ sont trois points non alignés. $D$ est l'image de $C$ par la
> translation qui envoie $A$ sur $B$. Montrer que $AB = CD$ et $(AB) \parallel (CD)$.*
>
> **Je sais que** $D$ est l'image de $C$ par la translation qui envoie $A$ sur $B$.
> **Or** si la translation qui envoie $A$ sur $B$ envoie $C$ sur $D$, alors $ABDC$
> est un parallélogramme.
> **Donc** $ABDC$ est un parallélogramme.
>
> **Je sais que** $ABDC$ est un parallélogramme, où $[AB]$ et $[CD]$ sont opposés.
> **Or** dans un parallélogramme, les côtés opposés sont parallèles et de même
> longueur.
> **Donc** $AB = CD$ et $(AB) \parallel (CD)$. ∎

### Démonstration B — du parallélogramme vers la translation

> *$ABDC$ est un quadrilatère dont les diagonales $[AD]$ et $[BC]$ se coupent en leur
> milieu. Quelle est l'image de $C$ par la translation qui envoie $A$ sur $B$ ?*
>
> **Je sais que** les diagonales $[AD]$ et $[BC]$ de $ABDC$ se coupent en leur milieu.
> **Or** si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce
> quadrilatère est un parallélogramme *(caractéristique vue en 5e)*.
> **Donc** $ABDC$ est un parallélogramme.
>
> **Je sais que** $ABDC$ est un parallélogramme.
> **Or** si $ABDC$ est un parallélogramme, alors la translation qui envoie $A$ sur
> $B$ envoie $C$ sur $D$.
> **Donc** l'image de $C$ est le point $D$. ∎

> **Ce qu'il faut voir ici.** L'énoncé parlait de **milieux**, la question de
> **translation** : le parallélogramme a servi de **pont**. C'est son rôle dans
> presque tous les exercices du chapitre.

### Démonstration C — changer de lecture

> *$ABDC$ est un parallélogramme. Montrer que la translation qui envoie $A$ sur $C$
> envoie $B$ sur $D$.*
>
> **Je sais que** $ABDC$ est un parallélogramme.
> **Or** un quadrilatère se lit dans les deux sens : $ABDC$ et $ACDB$ sont la même
> figure.
> **Donc** $ACDB$ est un parallélogramme.
>
> **Je sais que** $ACDB$ est un parallélogramme.
> **Or** si $ACDB$ est un parallélogramme, alors la translation qui envoie $A$ sur
> $C$ envoie $B$ sur $D$.
> **Donc** l'image de $B$ est le point $D$. ∎

---

## 5. Ce que la translation conserve — et le lien avec les angles

| Elle conserve | Ce que ça te donne |
|---|---|
| les **longueurs** | $A'B' = AB$, sans calcul |
| les **mesures d'angles** | l'image d'un angle de $37°$ est un angle de $37°$ |
| l'**alignement** | l'image d'une droite est une **droite** |
| les **aires** | l'image d'un triangle d'aire $12$ cm² a pour aire $12$ cm² |
| le **sens de lecture** | la figure n'est pas retournée, juste déplacée |

$$\boxed{\text{Par une translation, l'image d'une droite est une droite qui lui est parallèle}}$$

> C'est exactement pour ça que le parallélogramme apparaît : deux côtés parallèles
> surgissent automatiquement.

### Les angles du parallélogramme, relus avec la translation

Dans le parallélogramme $ABDC$, la translation $A \to B$ envoie $[AC]$ sur $[BD]$.

> **Ce qu'on en déduit.** $AC = BD$ et $(AC) \parallel (BD)$, sans mesurer. Et comme
> $(AC) \parallel (BD)$ avec la sécante $(AB)$, les angles $\widehat{CAB}$ et
> $\widehat{ABD}$ sont **supplémentaires** : leur somme vaut $180°$. Tu retrouves les
> angles consécutifs du parallélogramme.

---

## 6. Méthodes

### Construire l'image d'un point $M$ par la translation qui envoie $A$ sur $B$

| Support | Comment |
|---|---|
| **Sur quadrillage** | compte le déplacement de $A$ à $B$ (à droite / vers le haut), refais-le **à l'identique** à partir de $M$ |
| **Sur feuille blanche** | construis le parallélogramme $ABM'M$ : trace la parallèle à $(AB)$ passant par $M$, puis reporte au compas la longueur $AB$, **dans le sens de $A$ vers $B$** |

> ⚠️ **Le compas seul ne suffit pas.** Il donne la bonne longueur, mais deux points
> conviennent : le bon et son opposé. C'est le **sens** du glissement qui tranche.

Pour une **figure** : l'image de chaque point clé, puis relie dans le même ordre.

### Démontrer qu'un quadrilatère est un parallélogramme — choisir sa piste

| L'énoncé parle de… | Piste |
|---|---|
| une **translation**, une **image** | la caractéristique du § 2 |
| des **milieux** | les diagonales (5e) |
| des **longueurs égales** | les côtés opposés (5e) |
| un **codage de parallélisme** | les côtés parallèles (5e) |

### Pavages

Un pavage répète un même motif par translations, sans trou ni chevauchement — les
mosaïques de l'Alhambra, les dessins d'Escher. Chaque motif étant l'image du
précédent, la trame est remplie de parallélogrammes.

---

## 7. Cas particuliers et pièges

### Si $A$, $B$, $C$ sont alignés

La translation existe toujours, et $D$ aussi. Mais les quatre points sont
alignés : $ABDC$ est un **parallélogramme aplati**, sans intérieur. C'est pour cela
que l'énoncé de la propriété précise **« non alignés »**.

Et si $B$ est confondu avec $A$, rien ne bouge : chaque point est sa propre image.

### Translation ou demi-tour ?

Les deux conservent longueurs, angles et aires, et envoient une droite sur une
parallèle. Voici ce qui les sépare :

| | Translation | Demi-tour de centre $O$ |
|---|---|---|
| Déterminée par | un point et son image | un point, le centre |
| Déplacement d'un point | **le même** pour tous | dépend de la position par rapport à $O$ |
| Points invariants | **aucun** (sauf translation nulle) | **un seul** : $O$ |
| Les segments $[MM']$ | **parallèles et de même longueur** | ont tous le **même milieu** $O$ |

> **Le test qui tranche** : trace deux segments $[MM']$. Concourants → demi-tour.
> Parallèles et de même longueur → translation.

---

## 8. À retenir absolument

| | |
|---|---|
| Translation | même glissement **pour tous les points** ; définie par un point et son image |
| **La caractéristique** | $ABDC$ parallélogramme $\iff$ la translation $A \to B$ envoie $C$ sur $D$ |
| Ordre des lettres | $ABDC$ — surtout pas $ABCD$ |
| Diagonales de $ABDC$ | $[AD]$ et $[BC]$ |
| Deuxième lecture | $ABDC = ACDB$ : la translation $A \to C$ envoie $B$ sur $D$ |
| Conservations | longueurs · angles · aires · alignement · sens |
| Image d'une droite | une droite **parallèle** |
| Structure d'une preuve | je sais que… / **or**… / donc… |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire $ABCD$ au lieu de $ABDC$.** C'est l'erreur numéro un du chapitre. Le
   quadrilatère $ABCD$ est croisé : la démonstration entière tombe.
2. **Se tromper de diagonales.** Dans $ABDC$, ce sont $[AD]$ et $[BC]$. Beaucoup
   d'élèves écrivent $[AC]$ et $[BD]$ — qui sont des **côtés**.
3. **Utiliser une conservation comme une caractéristique.** Deux segments de même
   longueur ne sont pas forcément images l'un de l'autre : ça ne va que dans un sens.
4. **Oublier le sens du glissement** en construisant l'image : reporter la longueur
   $AB$ du mauvais côté donne le point symétrique, pas l'image.
5. **Confondre translation et demi-tour**, puisque les deux conservent tout. Regarde
   les segments $[MM']$ : parallèles, ou concourants ?
6. **Constater au lieu de démontrer.** Sans le « or… », il n'y a pas de preuve — et
   une mesure prise sur la figure n'en est pas une non plus.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »
(intro : lignes 645-666), section « Quatrième » (lignes 755 à 809), entrée
« Parallélogrammes et translations », lignes 779 à 793.

CONTENU DE L'ENTRÉE, littéralement :
- Automatismes : « Dire si des figures planes sont images l'une de l'autre par une
  symétrie axiale (dont on identifie l'axe) ou par un demi-tour (dont on identifie le
  centre). » / « Dans une configuration donnée, déterminer les images de figures, de
  droites, de segments, de points par une symétrie axiale ou un demi-tour. » /
  « Reconnaitre un parallélogramme à l'aide de sa définition ou d'une propriété
  caractéristique grâce aux codages. » / « Reconnaitre un parallélogramme particulier
  à partir de ses propriétés caractéristiques, notamment à partir des propriétés de
  ses diagonales. »
- Objectifs : « Comprendre l'effet d'une translation. » / « Faire le lien avec les
  parallélogrammes, les angles. » (ligne 790, le lien explicite) / « Connaitre et
  utiliser les propriétés de conservations des translations. »
- Prolongements : « Pavage d'Escher ou de l'Alhambra. » → § 6, dernier paragraphe.

Correspondance : § 1 = « comprendre l'effet » ; § 2, § 3, § 4 = « faire le lien avec
les parallélogrammes » ; § 5 = « les conservations » + « les angles » ; § 6 =
automatismes de reconnaissance et de construction ; § 7 = cas limites.

PÉRIMÈTRE ET ARTICULATION AVEC LES CHAPITRES VOISINS
- Les VECTEURS ne sont PAS utilisés, ni la notation fléchée : « Translations et
  vecteurs » est une entrée de TROISIÈME (lignes 849-856), qui introduit aussi la
  « définition ponctuelle avec parallélogramme » de la translation. En 4e le lien
  parallélogramme/translation est donc posé comme PROPRIÉTÉ CARACTÉRISTIQUE ADMISE,
  pas comme définition, et les preuves du § 4 l'utilisent comme « or ». À valider :
  c'est le choix didactique structurant de la fiche.
- PRÉREQUIS 5e cité et non répété : contenu/cinquieme/maths/parallelogrammes/fiche.md
  (définition, propriétés, propriétés caractéristiques, diagonales) et
  contenu/cinquieme/maths/transformations/fiche.md (demi-tour, conservations).
  La distinction propriété / propriété CARACTÉRISTIQUE est reprise au § 3 et étendue
  au nouveau cas, conformément à la demande.
- ⚠️ RECOUVREMENT À ARBITRER avec le chapitre 4e « Transformations » produit en
  parallèle : dans le BO, l'entrée 4e « Transformations » (lignes 756-758) ne contient
  QU'UN automatisme (« Construire le symétrique d'un point par demi-tour ») ; les
  objectifs sur la translation appartiennent tous à l'entrée « Parallélogrammes et
  translations ». Le § 1 (effet de la translation) et le § 5 (conservations) sont donc
  ici chez eux au sens du programme, mais peuvent faire doublon avec le chapitre
  voisin. Ils sont volontairement traités de façon COMPACTE, avec renvoi explicite.
  Le relecteur doit trancher qui porte quoi, et vérifier que le renvoi du préambule
  correspond bien au titre retenu pour l'autre chapitre.

À TRANCHER PAR LE RELECTEUR
1. LA DATE DU BO. L'en-tête reprend « BO du 5 mars 2026 », comme les autres fiches de
   4e et de 5e, mais ETAT.md et PASSATION.md annoncent « BO du 2 avril 2026 » pour le
   même cycle 4, et AUCUNE des deux dates n'apparaît dans le texte extrait. Problème
   déjà signalé sur la fiche 5e « Parallélogrammes » : à trancher une fois pour toutes
   et à harmoniser sur l'ensemble des fiches collège.
2. L'ÉQUIVALENCE du § 2 est énoncée avec l'hypothèse « A, B, C non alignés », et le
   cas aligné est traité au § 7 comme parallélogramme aplati. Vérifier que ce niveau
   de précision est celui attendu en 4e, ou s'il faut se contenter du cas générique.
3. Le symbole $\iff$ : est-il admis en 4e, ou faut-il n'écrire que « si et seulement
   si » en toutes lettres ? Il est ici systématiquement doublé par sa lecture.
4. § 5, dernier paragraphe : la conclusion sur les angles supplémentaires mobilise les
   angles formés par deux parallèles et une sécante (5e). Vérifier que le vocabulaire
   attendu (alternes-internes / correspondants) n'est pas exigé explicitement — il est
   ici contourné.
5. La conservation des AIRES par la translation n'est pas listée dans le BO, qui dit
   seulement « les propriétés de conservations » sans les énumérer. Incluse par
   cohérence avec l'intro du thème (« preuves utilisant les aires » en fil rouge,
   lignes 661-664) et avec la fiche 5e sur le demi-tour. Même doute que là-bas.
6. § 7, « translation nulle » : formulation évitée dans le corps du texte (le « vecteur
   nul » est une notion de 3e). Vérifier que la mention « sauf translation nulle » du
   tableau ne dépasse pas le niveau.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni
à un site de cours. Statut : brouillon, non relu.
-->
