---
id: 4e-math-transformations
titre: "Transformations : la translation"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Symétrie axiale et demi-tour, ou symétrie centrale (5e — chapitre « Transformations : symétrie axiale et demi-tour »)
  - Milieu d'un segment (6e)
  - Droites parallèles, tracé à la règle et à l'équerre (6e)
  - Report de longueurs au compas (6e)
  - Mesure d'un angle au rapporteur (6e-5e)
statut: brouillon
relu_par: null
---

# Transformations : la translation

> Tu connais deux façons de transformer une figure : la **plier** (symétrie axiale) et la
> **retourner d'un demi-tour** autour d'un point. En voici une troisième, la plus simple à
> voir : **faire glisser**. Rien ne tourne, rien ne se reflète — tout part dans la même
> direction, du même côté, de la même longueur.

La nouveauté de cette année, c'est la **translation**. Le reste — symétrie axiale et
demi-tour — devient un **automatisme** : tu dois savoir le faire vite et sans y penser.

---

## 1. Ce qui est déjà acquis (et qui reste exigible)

Ces gestes doivent être des réflexes. Travaillés en 5e : ici on les réactive.

| Automatisme attendu | Le geste |
|---|---|
| Construire le symétrique d'un point par **demi-tour** | $O$ est le **milieu** de $[MM']$ |
| Dire si deux figures sont images l'une de l'autre par une **symétrie axiale** | et **identifier l'axe** |
| Dire si deux figures sont images l'une de l'autre par un **demi-tour** | et **identifier le centre** |
| Dans une figure, déterminer les images de points, segments, droites, figures | par l'une ou l'autre |

> **Un doute ?** Reprends le chapitre de 5e « Transformations : symétrie axiale et
> demi-tour ». Rappel de vocabulaire : le **demi-tour**, c'est aussi ce qu'on appelle
> la **symétrie centrale**. Deux mots, une seule transformation.

---

## 2. La translation : comprendre l'effet

Une translation, c'est un **glissement**. Tous les points de la figure se déplacent
**exactement de la même façon** — aucun ne prend un chemin différent des autres.

$$\boxed{\text{Une translation fait glisser tous les points : même direction, même sens, même longueur}}$$

Ces trois données comptent **ensemble** : la **direction** (la « pente » du déplacement),
le **sens** (de quel côté on part sur cette direction) et la **longueur** (de combien on
glisse). Change-en une seule, ce n'est plus la même translation.

### Comment on te la donne

Presque toujours par **deux points** : « la translation qui transforme $A$ en $A'$ ».
Le déplacement de $A$ vers $A'$ sert de **modèle** : tous les autres points font le
même trajet.

> **Le geste à retenir.** Pose ton doigt sur la figure et pousse-la **sans la tourner
> et sans la retourner**. C'est exactement ça, une translation.

---

## 3. Méthode : construire l'image d'un point

### Sur quadrillage

Compte le déplacement de $A$ à $A'$ (tant de carreaux horizontalement, tant
verticalement), puis refais **le même comptage** à partir de $M$, dans le même sens.

> **Exemple.** De $A$ à $A'$ : $3$ carreaux à droite, $2$ vers le bas. Alors de $M$ à
> $M'$ : $3$ carreaux à droite, $2$ vers le bas. Toujours, pour tous les points.

### Sur feuille blanche

1. Trace la **parallèle** à $(AA')$ passant par $M$ — c'est elle qui donne la direction.
2. Au compas, reporte la longueur $AA'$ à partir de $M$ sur cette parallèle.
3. Le compas donne **deux** points : garde celui du **bon côté**, celui qui part dans le
   même sens que le déplacement de $A$ vers $A'$. L'autre est le glissement inverse.

### Pour une figure entière

Construis l'image de chaque **point clé** (les sommets), puis relie **dans le même ordre**.
Pour un cercle, l'image du centre suffit : le rayon ne change pas.

---

## 4. Les propriétés de conservation

C'est le cœur du programme de 4e : ce que la translation **ne change pas**. Chacune sert
à **calculer sans mesurer** et à **démontrer**.

### Elle conserve les longueurs

Si $A'$ et $B'$ sont les images de $A$ et $B$, alors $A'B' = AB$.

> **Exemple.** $[AB]$ mesure $6{,}3$ cm : son image mesure $6{,}3$ cm. Rien à mesurer.

### Elle conserve les mesures d'angles

> **Exemple.** L'image d'un angle de $52°$ est un angle de $52°$. Donc l'image d'un
> triangle rectangle est un triangle rectangle, et deux droites perpendiculaires ont pour
> images deux droites perpendiculaires.

### Elle conserve les aires

> **Exemple.** Un triangle d'aire $18$ cm² a pour image un triangle d'aire $18$ cm².

### Elle conserve l'alignement, et l'image d'une droite lui est parallèle

$$\boxed{\text{L'image d'une droite par une translation est une droite parallèle}}$$

> **Exemple.** Si $A$, $B$, $C$ sont alignés, leurs images le sont aussi : l'image de
> $(AB)$ est bien une **droite**, et elle est parallèle à $(AB)$ — « parallèle » incluant
> ici le cas où c'est **la même droite** (voir §5).

### Elle conserve le parallélisme

> **Exemple.** Deux droites parallèles ont pour images deux droites parallèles. Ajoute
> les angles et les longueurs : l'image d'un rectangle est un rectangle, celle d'un
> losange un losange, de **mêmes dimensions**.

### Elle ne retourne pas la figure

> **Comparaison.** Un miroir change ta main droite en main gauche : ça, c'est la
> symétrie axiale. Une translation, non — la figure se lit dans le **même sens**.

**Bilan.** La figure image est **superposable** à la figure de départ : il suffit de la
faire glisser, sans la tourner ni la retourner.

---

## 5. Invariants : ce qui bouge, ce qui ne bouge pas

### Aucun point ne reste sur place — c'est **la** différence avec la 5e

| Transformation | Points invariants |
|---|---|
| Symétrie axiale d'axe $(d)$ | **tous** les points de $(d)$ |
| Demi-tour de centre $O$ | **le seul** point $O$ |
| **Translation** (non nulle) | **aucun** |

Logique : tout le monde glisse, personne n'est épargné. Seul cas limite : si $A' = A$,
le glissement est nul et rien ne bouge.

### Les droites qui reviennent sur elles-mêmes

Une droite **parallèle à la direction** de la translation a pour image **elle-même** :
ses points glissent le long d'elle, mais la droite, dans son ensemble, ne change pas.

> **Exemple.** Translation horizontale vers la droite : toute droite horizontale est sa
> propre image. Une droite verticale se retrouve **à côté**, parallèle à celle de départ.

### La refaire deux fois ne ramène pas au départ

C'est le contraire du demi-tour. Deux demi-tours de même centre te ramènent au point de
départ ; deux fois la même translation te fait glisser **deux fois plus loin**, dans la
même direction et le même sens.

---

## 6. Reconnaître la bonne transformation

Face à deux figures superposables, pose-toi les questions **dans cet ordre**.

1. **La figure est-elle retournée ?** (comme dans un miroir) → **symétrie axiale** ; l'axe
   est la médiatrice de $[MM']$ pour n'importe quel point $M$ et son image.
2. **Sinon, trace les segments $[AA']$, $[BB']$, $[CC']$ qui relient chaque point à son image.**
   - Ils se coupent tous en un **même point**, milieu de chacun → **demi-tour**, de centre
     ce point.
   - Ils sont **parallèles, de même longueur et de même sens** → **translation**.

> ⚠️ Le piège de la 4e : demi-tour et translation **ne retournent ni l'un ni l'autre** la
> figure, et donnent **tous les deux** une image parallèle à la droite de départ. Le test
> des segments $[MM']$ est le seul qui tranche à coup sûr.

> **Culture.** Les pavages d'Escher et ceux de l'Alhambra répètent indéfiniment un même
> motif par translation : d'où cette régularité qui semble pouvoir continuer sans fin.

---

## 7. Tableau récapitulatif

| | Symétrie axiale | Demi-tour (symétrie centrale) | Translation |
|---|---|---|---|
| Donnée par | une **droite** (l'axe) | un **point** (le centre) | une direction, un sens, une longueur |
| Le geste | pliage | demi-tour ($180°$) | glissement |
| Définition du point image | l'axe est la **médiatrice** de $[MM']$ | $O$ est le **milieu** de $[MM']$ | $M$ glisse comme $A$ glisse vers $A'$ |
| Longueurs, angles, aires | conservés | conservés | conservés |
| Alignement, parallélisme | conservés | conservés | conservés |
| Image d'une droite | droite, **pas** parallèle en général | droite **parallèle** | droite **parallèle** |
| Sens de lecture | **retourné** | conservé | conservé |
| Points invariants | ceux de l'axe | $O$ seulement | **aucun** |
| Deux fois de suite | on revient au départ | on revient au départ | on va **deux fois plus loin** |

---

## 8. Les erreurs qui coûtent des points

1. **Changer le déplacement en cours de route.** Le comptage doit être *exactement* le même
   pour tous les points, sans exception. Sinon, ce n'est pas une translation.
2. **Inverser le sens.** Glisser de $A'$ vers $A$ au lieu de $A$ vers $A'$ : direction et
   longueur bonnes, mais la figure part du mauvais côté.
3. **Croire qu'un point ne bouge pas.** Beaucoup laissent sur place un sommet « qui arrangeait
   bien ». Une translation non nulle n'a **aucun** point invariant.
4. **Confondre translation et demi-tour** parce qu'aucune des deux ne retourne la figure.
   Trace les segments $[MM']$ : concourants → demi-tour ; parallèles → translation.
5. **Recalculer longueurs, angles ou aires sur l'image.** Ils sont conservés : recopier
   la valeur suffit, la recalculer c'est risquer une erreur pour rien.
6. **Reporter la longueur au compas sans tracer la parallèle.** Sans la direction, ton point
   atterrit n'importe où sur un cercle. La parallèle d'abord, le compas ensuite.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »
(intro du thème : l. 645-666), section « Quatrième », l. 755-809.

⚠️ PÉRIMÈTRE — LE POINT À TRANCHER EN PRIORITÉ. L'entrée « Transformations » de la 4e
(l. 756-758) ne contient RIEN d'autre qu'UN automatisme : « − Construire le symétrique
d'un point par demi-tour. » Aucun objectif d'apprentissage ne lui est rattaché, et la
translation n'y figure PAS : elle est dans l'entrée SUIVANTE, « Parallélogrammes et
translations » (l. 779-793), objet du chapitre produit en parallèle. Cette fiche a donc
été construite, selon la consigne, comme le chapitre « la transformation elle-même » :
l. 758 (automatisme demi-tour) → §1 ; l. 781-784 (dire si deux figures sont images l'une
de l'autre par symétrie axiale ou demi-tour en identifiant l'axe ou le centre ;
déterminer les images) → §1 et §6 ; l. 789 « Comprendre l'effet d'une translation. » →
§2-§3 ; l. 791 « Connaitre et utiliser les propriétés de conservations des
translations. » → §4-§5 ; l. 790 « Faire le lien avec les parallélogrammes, les
angles. » → SEULE la partie « angles » est traitée (§4), le parallélogramme est laissé à
l'autre chapitre. LE DÉCOUPAGE ENTRE LES DEUX CHAPITRES EST DONC ÉDITORIAL, PAS CELUI DU
BO : risque qu'un objectif soit traité deux fois, ou aucune. À relire conjointement.

Recherche refaite sur tout le fichier (confirme la vérification faite en 5e) : ROTATION (autre
que le demi-tour) et HOMOTHÉTIE : AUCUNE occurrence dans le cycle 4 — non introduites, le mot
« rotation » est même évité. TRANSLATION : l. 35, 41, 779, 789, 791 (4e) et 849-856 (3e).
VECTEUR : 3e seulement (l. 854-857) — aucune notation vectorielle, le mot n'apparait pas.

À TRANCHER PAR LE RELECTEUR
1. NIVEAU D'EXIGENCE. Le BO de 4e dit « Comprendre l'EFFET d'une translation » ; la
   définition ponctuelle avec parallélogramme est un objectif de 3e (l. 853). D'où l'absence
   de définition formelle : caractérisation par l'effet, entrée par « la translation qui
   transforme A en A' ». Bon curseur ?
2. VOCABULAIRE « direction / sens / longueur » (§2) et mot « glissement » : PAS dans le BO de
   4e, et c'est le vocabulaire du vecteur en 3e. Retenu faute d'alternative. À valider.
3. CONSTRUIRE l'image par translation (§3) : EXTENSION de ma part — le BO de 4e ne demande
   de construire que le symétrique par demi-tour (l. 758) et l'automatisme « déterminer
   les images » (l. 783-784) ne cite que symétrie axiale et demi-tour. Jugé indispensable
   pour « comprendre l'effet ». À confirmer, surtout sur feuille blanche (parallèle +
   compas), plus exigeant que sur quadrillage.
4. LISTE DES CONSERVATIONS (§4) : le BO écrit « les propriétés de conservations » sans les
   énumérer. Ma liste : longueurs, angles, aires, alignement, parallélisme, sens de lecture.
   Doute : les AIRES sont-elles exigibles ? Incluses par cohérence avec la 5e et parce que
   l'intro du thème (l. 661-664) fait des « preuves utilisant les aires » un fil rouge et
   insiste sur « l'identification d'invariants ».
5. §5 « La refaire deux fois… » + dernière ligne du tableau récapitulatif : l'enchainement
   de deux translations est un objectif de 3e (l. 856). Présenté ici sans formalisme, comme
   simple CONTRASTE avec le demi-tour (involutif, vu en 5e). À retirer si c'est jugé
   anticiper — de même que la translation nulle (§5). Concerne aussi la question 10 du QCM.
6. §6, critère « les segments [MM'] sont parallèles, de même longueur et de même sens » :
   caractérisation que le BO n'énonce pas en 4e (elle relève de la définition de 3e).
   Utilisée UNIQUEMENT comme critère visuel, pour servir l'automatisme des l. 781-784
   étendu à la translation. Le plus discutable après le n°1 ; cf. questions 6 et 9 du QCM.
7. Prolongement culturel (l. 793, Escher / Alhambra) : deux lignes, faute de figures.

ARTICULATION AVEC LA 5e : le chapitre 5e « Transformations : symétrie axiale et demi-tour »
est cité en prérequis et n'est pas réexpliqué (§1 = tableau de rappel, pas un cours).
Vocabulaire « demi-tour, ou symétrie centrale » repris tel quel, dans l'ordre du BO.
Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à un
site de cours. Statut : brouillon, non relu.
-->
