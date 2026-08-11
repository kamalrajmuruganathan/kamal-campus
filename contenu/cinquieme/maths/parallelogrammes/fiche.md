---
id: 5e-math-parallelogrammes
titre: "Parallélogrammes"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Droites parallèles et perpendiculaires (6e)
  - Angles et triangles (5e)
  - Aires des figures usuelles (6e)
statut: brouillon
relu_par: null
---

# Parallélogrammes

> Un parallélogramme se reconnaît à ses **côtés**, à ses **diagonales** ou à ses
> **angles** — et chacune de ces pistes suffit à le démontrer. Savoir laquelle choisir
> selon ce que l'énoncé donne, c'est tout l'enjeu du chapitre.

---

## 1. Définition

Un **parallélogramme** est un quadrilatère dont les côtés opposés sont **parallèles
deux à deux**.

> **La définition ne parle que de parallélisme.** Tout le reste — côtés de même
> longueur, diagonales qui se coupent en leur milieu — sont des **conséquences**, pas
> la définition.

> ⚠️ **L'ordre des lettres compte.** Dans le parallélogramme $ABCD$, les côtés
> $[AB]$ et $[CD]$ sont opposés, ainsi que $[BC]$ et $[AD]$. On tourne autour de la
> figure : $A$, puis $B$, puis $C$, puis $D$. Écrire $ABDC$ désignerait une figure
> croisée.

---

## 2. Le centre de symétrie

C'est la propriété la plus utile, et celle qui explique toutes les autres.

$$\boxed{\text{Un parallélogramme a un centre de symétrie : le point d'intersection de ses diagonales.}}$$

> **Ce que ça veut dire.** Si on fait tourner la figure d'un **demi-tour** autour de ce
> point, elle se superpose exactement à elle-même. Chaque sommet vient se placer sur le
> sommet opposé.

C'est de là que découle tout le reste : le demi-tour envoie $[AB]$ sur $[CD]$, donc ces
deux côtés ont la même longueur. Il envoie $A$ sur $C$, donc le centre est le milieu de
$[AC]$.

---

## 3. Les propriétés

Si $ABCD$ est un parallélogramme, alors :

| Ce qui est vrai | Détail |
|---|---|
| **Côtés opposés parallèles** | $(AB) \parallel (CD)$ et $(BC) \parallel (AD)$ |
| **Côtés opposés de même longueur** | $AB = CD$ et $BC = AD$ |
| **Diagonales se coupant en leur milieu** | le point d'intersection est le milieu de $[AC]$ **et** de $[BD]$ |
| **Angles opposés égaux** | $\widehat{A} = \widehat{C}$ et $\widehat{B} = \widehat{D}$ |
| **Angles consécutifs supplémentaires** | $\widehat{A} + \widehat{B} = 180°$ |

> ⚠️ **Deux côtés opposés égaux ne suffisent pas.** Un trapèze isocèle a deux côtés
> opposés de même longueur sans être un parallélogramme. Il faut que ce soit vrai pour
> **les deux paires**, ou qu'une paire soit à la fois **parallèle et de même longueur**.

---

## 4. Les propriétés caractéristiques

Une propriété **caractéristique** fonctionne dans les **deux sens** : elle permet de
*démontrer* qu'un quadrilatère est un parallélogramme.

Un quadrilatère est un parallélogramme **si et seulement si** l'une de ces conditions
est vérifiée :

| Piste | Condition |
|---|---|
| **Par les côtés** | les côtés opposés sont parallèles deux à deux |
| **Par les côtés** | les côtés opposés ont deux à deux la même longueur |
| **Par un seul côté** | **deux côtés opposés sont à la fois parallèles ET de même longueur** |
| **Par les diagonales** | les diagonales se coupent en leur **milieu** |

> **Comment choisir ?** Regarde ce que l'énoncé te donne.
> Des **milieux** dans l'énoncé → la piste des diagonales.
> Des **longueurs égales** → la piste des côtés.
> Un **codage de parallélisme** → la piste des côtés parallèles.

> **Exemple rédigé.** *$ABCD$ est un quadrilatère tel que $I$ est le milieu de $[AC]$ et
> le milieu de $[BD]$. Montrer que $ABCD$ est un parallélogramme.*
>
> Les diagonales de $ABCD$ sont $[AC]$ et $[BD]$. Elles se coupent en $I$, qui est le
> milieu de chacune d'elles.
> **Or** si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce
> quadrilatère est un parallélogramme.
> **Donc** $ABCD$ est un parallélogramme. ∎

> **La structure d'une démonstration** : *je sais que…* / *or la propriété dit que…* /
> *donc je conclus que…* C'est le « or » qui fait la démonstration : sans lui, on
> constate au lieu de prouver.

---

## 5. Construire un parallélogramme

Trois méthodes, selon l'outil dont tu disposes.

| Méthode | Comment |
|---|---|
| **Par les diagonales** | tracer $[AC]$, marquer son milieu $I$, puis placer $B$ et $D$ de part et d'autre avec $IB = ID$ |
| **Par les côtés** | reporter au compas $CD = AB$ et $AD = BC$ |
| **Par le parallélisme** | tracer la parallèle à $(AB)$ passant par $C$, et la parallèle à $(BC)$ passant par $A$ |

> **La plus rapide est celle des diagonales** : un seul point à placer, le milieu, et
> tout découle.

---

## 6. Les parallélogrammes particuliers

Chacun est un parallélogramme **avec une condition en plus**.

| Figure | Définition | Ce qu'elle ajoute |
|---|---|---|
| **Rectangle** | parallélogramme ayant **un angle droit** | diagonales de **même longueur** |
| **Losange** | parallélogramme ayant **deux côtés consécutifs de même longueur** | diagonales **perpendiculaires** |
| **Carré** | parallélogramme à la fois **rectangle et losange** | diagonales de même longueur **et** perpendiculaires |

> **La logique à retenir.** Le rectangle joue sur les **angles**, le losange sur les
> **longueurs**, le carré cumule les deux. Un carré est donc à la fois un rectangle, un
> losange **et** un parallélogramme — l'inverse est faux.

### Propriétés caractéristiques des diagonales

C'est souvent le chemin le plus court pour identifier une figure :

| Diagonales | Nature du quadrilatère |
|---|---|
| se coupent en leur milieu | parallélogramme |
| se coupent en leur milieu **et** de même longueur | **rectangle** |
| se coupent en leur milieu **et** perpendiculaires | **losange** |
| se coupent en leur milieu, de même longueur **et** perpendiculaires | **carré** |

> ⚠️ **Ne pas oublier « se coupent en leur milieu ».** Deux diagonales perpendiculaires
> ne font pas un losange : encore faut-il qu'elles se coupent en leur milieu. Un
> cerf-volant a des diagonales perpendiculaires sans être un losange.

---

## 7. Aires

$$\boxed{\mathcal{A}_{\text{parallélogramme}} = \text{base} \times \text{hauteur}}$$

> ⚠️ **La hauteur n'est pas le côté.** C'est la distance **perpendiculaire** entre la
> base et le côté opposé. Multiplier deux côtés donnerait un résultat trop grand — sauf
> pour un rectangle, où les deux coïncident.

| Figure | Aire |
|---|---|
| Parallélogramme | base $\times$ hauteur |
| Rectangle | longueur $\times$ largeur |
| Losange | base $\times$ hauteur, ou $\dfrac{D \times d}{2}$ |
| Carré | côté$^2$ |

> **Exemple.** Un parallélogramme de base $8$ cm et de hauteur $5$ cm a pour aire
> $8 \times 5 = 40$ cm², **même si son côté oblique mesure $6$ cm**. Le $6$ ne sert pas.

### Figures complexes

Pour une figure composée, on **découpe** en figures connues et on **additionne** — ou
on encadre par une grande figure dont on **retranche** ce qui dépasse.

> **Exemple.** Une figure en L se découpe en deux rectangles ; on calcule chaque aire
> et on les ajoute.

---

## 8. Conversions d'unités

| Longueurs | $1\ \mathrm{m} = 10\ \mathrm{dm} = 100\ \mathrm{cm}$ |
|---|---|
| **Aires** | $1\ \mathrm{m^2} = 100\ \mathrm{dm^2} = 10\,000\ \mathrm{cm^2}$ |

> ⚠️ **Le piège classique.** Pour les aires, on multiplie par **100** à chaque rang, pas
> par $10$. La raison : un carré de $1$ m de côté vaut $10$ dm $\times$ $10$ dm, soit
> $100$ dm². Les longueurs sont en une dimension, les aires en deux — d'où le carré.

> **Exemple.** $2{,}5\ \mathrm{m^2} = 25\,000\ \mathrm{cm^2}$, et non $250$.

---

## 9. À retenir absolument

| | |
|---|---|
| Définition | quadrilatère à côtés opposés parallèles deux à deux |
| Centre de symétrie | l'intersection des diagonales |
| Propriétés | côtés opposés égaux · diagonales se coupant en leur milieu · angles opposés égaux |
| Caractéristique la plus utile | diagonales se coupant en leur **milieu** |
| Un seul côté suffit | s'il est **parallèle ET de même longueur** que son opposé |
| Rectangle | + un angle droit → diagonales de même longueur |
| Losange | + deux côtés consécutifs égaux → diagonales perpendiculaires |
| Carré | rectangle **et** losange |
| Aire | base $\times$ **hauteur**, jamais côté $\times$ côté |
| Conversion d'aires | $\times 100$ par rang, pas $\times 10$ |

---

## 10. Les erreurs qui coûtent des points

1. **Multiplier deux côtés** pour l'aire d'un parallélogramme au lieu d'utiliser la
   hauteur.
2. **Oublier « se coupent en leur milieu »** dans la caractérisation par les diagonales.
3. **Croire que deux côtés opposés égaux suffisent** : il en faut deux paires, ou une
   paire parallèle **et** égale.
4. **Convertir des aires comme des longueurs** : $\times 100$, pas $\times 10$.
5. **Écrire les sommets dans le désordre** : $ABDC$ n'est pas $ABCD$.
6. **Confondre propriété et définition** : la définition ne parle que de parallélisme.
7. **Constater au lieu de démontrer** : sans le « or… », il n'y a pas de démonstration.
8. **Dire qu'un carré n'est pas un rectangle** : il en est un, avec une condition de
   plus.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel du cycle 4, thème « Espace et géométrie », niveau
Cinquième, section « Parallélogrammes »
(docs/programme-college-cycle4-maths-2026.txt).

CHAPITRE CRÉÉ LE 2026-08-11, premier d'un lot destiné à compléter la 5e (5 chapitres
écrits sur 16 au programme).

Correspondance objectif par objectif — tous les objectifs d'apprentissage de la section
sont couverts :

- « Définir le parallélogramme » → § 1.
- « Construire des parallélogrammes » → § 5, trois méthodes.
- « Connaitre les propriétés caractéristiques des côtés opposés et des diagonales »
  → § 3 et § 4. La distinction propriété / propriété CARACTÉRISTIQUE (qui fonctionne
  dans les deux sens) est le point pédagogique central : c'est elle qui permet de
  démontrer plutôt que de constater.
- « Utiliser une propriété caractéristique sur les diagonales ou les côtés pour les
  construire ou donner la nature du quadrilatère » → § 4 avec un exemple rédigé, et
  § 6 avec la table des diagonales.
- « Définir les parallélogrammes particuliers (rectangle, losange, carré). Connaitre
  les propriétés caractéristiques » → § 6.
- « Savoir calculer l'aire d'un parallélogramme et de figures complexes » → § 7.
- « Résoudre des problèmes faisant appel à des conversions d'unités de longueur et
  d'unités d'aires » → § 8.

Les automatismes de la section (reconnaitre un quadrilatère dans une figure complexe,
exploiter un codage) sont supposés acquis et non retraités : ils relèvent du travail
en classe plutôt que d'une fiche de révision.

Le CENTRE DE SYMÉTRIE (§ 2) n'est pas nommé dans la section « Parallélogrammes », mais
la section « Transformations » du même niveau demande de « définir le demi-tour, ou
symétrie centrale » et d'en « connaitre les propriétés ». Le lien est fait ici parce
qu'il explique d'un coup toutes les propriétés du parallélogramme, au lieu de les faire
apprendre par cœur séparément.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- LA DATE DU BO. L'en-tête reprend « BO du 5 mars 2026 » des cinq fiches de 5e
  existantes, mais ETAT.md annonce « BO du 2 avril 2026 » pour le même cycle 4, et
  AUCUNE des deux dates n'apparaît dans le texte extrait. L'une au moins est fausse.
  À trancher et à harmoniser sur les six fiches.
- Le § 2 (centre de symétrie) est un choix de progression : il suppose que la symétrie
  centrale a été vue avant. Si l'ordre retenu en classe est inverse, il faudrait le
  déplacer ou l'alléger.
- Les angles opposés égaux et les angles consécutifs supplémentaires (§ 3) ne sont pas
  explicitement listés dans les objectifs, qui ne citent que « côtés opposés et
  diagonales ». Conservés car classiques et utiles, mais à valider.
- La formule de l'aire du losange par les diagonales (D × d)/2 n'est pas dans le texte :
  seule l'aire du parallélogramme est demandée. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
