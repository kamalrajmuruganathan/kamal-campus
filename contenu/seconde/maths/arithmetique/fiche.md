---
id: 2nde-math-arithmetique
titre: "Arithmétique"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Multiples et diviseurs (cycle 4)
  - Calcul littéral (cycle 4)
statut: brouillon
relu_par: null
---

# Arithmétique

> Un chapitre court, mais c'est ici qu'on apprend à **démontrer**. Les objets sont
> simples — multiples, diviseurs, pairs, impairs — et c'est justement ce qui permet de
> se concentrer sur le raisonnement.

---

## 1. Les ensembles de nombres entiers

| Notation | Ensemble | Contient |
|---|---|---|
| $\mathbb{N}$ | entiers **naturels** | $0,\ 1,\ 2,\ 3,\ \dots$ |
| $\mathbb{Z}$ | entiers **relatifs** | $\dots,\ -2,\ -1,\ 0,\ 1,\ 2,\ \dots$ |

$$\mathbb{N} \subset \mathbb{Z}$$

> **Le moyen de retenir** : $\mathbb{N}$ comme *naturel* (ceux qu'on utilise pour
> compter), $\mathbb{Z}$ comme *Zahl*, « nombre » en allemand. $\mathbb{N}$ est inclus
> dans $\mathbb{Z}$, jamais l'inverse.

---

## 2. Multiple et diviseur

### Définition

Soient $a$ et $b$ deux entiers.

$$\boxed{a \text{ est un multiple de } b \iff \text{il existe un entier } k \text{ tel que } a = kb}$$

On dit alors aussi que **$b$ est un diviseur de $a$**, ou que **$b$ divise $a$**.

> **Deux mots pour une seule situation.** « $12$ est un multiple de $3$ » et « $3$ est un
> diviseur de $12$ » disent exactement la même chose : $12 = 4 \times 3$.

> **Ce que veut dire « il existe un entier $k$ ».** C'est tout le contenu de la
> définition. Pour prouver qu'un nombre est multiple de $b$, il faut **exhiber** ce $k$ et
> **dire qu'il est entier**. C'est ce dernier point qu'on oublie.

> **Exemple.** $91$ est-il un multiple de $7$ ? Oui : $91 = 13 \times 7$, et $13$ est un
> entier. Le $k$ vaut $13$.

---

## 3. Pair et impair

$$\boxed{n \text{ est pair} \iff n = 2k} \qquad\qquad \boxed{n \text{ est impair} \iff n = 2k+1}$$

avec $k$ entier dans les deux cas.

> Un nombre pair est donc simplement un **multiple de $2$**. Un nombre impair est ce qui
> reste.

> ⚠️ **Le piège des lettres.** Pour parler de **deux** nombres impairs différents, il faut
> **deux lettres** : $a = 2k+1$ et $b = 2k'+1$. Écrire $2k+1$ deux fois, c'est écrire deux
> fois le **même** nombre.

---

## 4. Fractions sous forme irréductible

Une fraction est **irréductible** quand son numérateur et son dénominateur n'ont plus de
diviseur commun autre que $1$.

**Méthode** : repérer un diviseur commun, simplifier, recommencer jusqu'à ce qu'il n'y en
ait plus.

> **Exemple.** $\dfrac{84}{126}$.
> Les deux sont pairs : $\dfrac{42}{63}$. Les deux sont divisibles par $3$ :
> $\dfrac{14}{21}$. Les deux sont divisibles par $7$ : $\dfrac{2}{3}$.
> Plus aucun diviseur commun : la fraction est irréductible.

> **Gagner du temps** : chercher directement le **plus grand** diviseur commun évite les
> étapes. Ici $84 = 42 \times 2$ et $126 = 42 \times 3$, donc une seule simplification par
> $42$ suffisait.

---

## 5. Le raisonnement type

C'est la compétence centrale du chapitre, et elle se reproduit à l'identique.

> **Exemple.** *Montrer que la somme de deux nombres impairs est paire.*
>
> Soient $a = 2k+1$ et $b = 2k'+1$ avec $k$ et $k'$ entiers.
> Alors $a + b = 2k + 2k' + 2 = 2(k + k' + 1)$.
> Comme $k + k' + 1$ est un entier, $a+b$ est un multiple de $2$, donc pair. ∎

> **La structure à reproduire**, dans cet ordre :
> 1. on **pose l'écriture algébrique** de chaque nombre ;
> 2. on **calcule** ;
> 3. on **factorise** pour faire apparaître le facteur voulu ;
> 4. on **conclut en signalant que le second facteur est entier**.
>
> L'étape 4 n'est pas une formalité : c'est elle qui prouve qu'on est bien face à un
> multiple.

---

## 6. Les deux démonstrations exigibles

Le programme en nomme deux. Elles peuvent tomber telles quelles.

### La somme de deux multiples de $a$ est un multiple de $a$

Le programme la demande **pour une valeur numérique de $a$** — prenons $a = 7$.

> Soient deux multiples de $7$ : $m = 7k$ et $n = 7k'$, avec $k$ et $k'$ entiers.
> Alors $m + n = 7k + 7k' = 7(k + k')$.
> Comme $k + k'$ est un entier, $m+n$ est un multiple de $7$. ∎

> **Le cœur de la preuve est la factorisation par $7$.** Le raisonnement est le même pour
> n'importe quelle valeur : remplace $7$ par $a$ et rien ne change.

### Le carré d'un nombre impair est impair

> Soit $n$ un nombre impair : $n = 2k+1$ avec $k$ entier.
> Alors $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.
> Comme $2k^2 + 2k$ est un entier, $n^2$ s'écrit $2k'' + 1$ : il est impair. ∎

> **L'astuce est la mise en facteur de $2$** sur les deux premiers termes, en laissant
> le $+1$ de côté. C'est ce qui fait apparaître la forme $2 \times (\text{entier}) + 1$.

---

## 7. Contre-exemple et démonstration

- Pour montrer qu'une propriété est **fausse**, un seul **contre-exemple** suffit
- Pour montrer qu'elle est **vraie**, il faut une **démonstration générale** — des exemples,
  même nombreux, ne prouvent rien

> **Exemple.** « Tout nombre impair est un multiple de $3$ » est faux : $5$ le contredit.
> Un seul contre-exemple clôt la question.

> ⚠️ **L'erreur symétrique** : vérifier une propriété sur dix cas et conclure qu'elle est
> vraie. Ça ne démontre rien du tout.

---

## 8. Deux algorithmes du programme

| Objectif | Idée |
|---|---|
| Déterminer si $a$ est un multiple de $b$ | tester si le **reste** de $a$ par $b$ vaut $0$ (`a % b == 0` en Python) |
| Trouver le plus grand multiple de $a$ inférieur ou égal à $b$ | partir de $a$ et ajouter $a$ tant qu'on ne dépasse pas $b$ |

> **Exemple.** Plus grand multiple de $7$ inférieur ou égal à $50$ :
> $7, 14, 21, 28, 35, 42, 49$ — puis $56 > 50$, on s'arrête. La réponse est $49$.

---

## 9. Rappels du cycle 4

> ⚠️ **Hors du programme de seconde.** Ces notions ont été vues au collège et servent
> encore, mais elles ne figurent pas dans le programme de seconde : elles ne feront pas
> l'objet d'une question directe cette année.

**Critères de divisibilité** — par $2$ : le chiffre des unités est pair ; par $3$ : la
somme des chiffres est un multiple de $3$ ; par $5$ : le chiffre des unités est $0$ ou
$5$ ; par $9$ : la somme des chiffres est un multiple de $9$.

**Division euclidienne** — pour $a$ entier et $b$ entier non nul, il existe un unique
couple $(q, r)$ tel que $a = bq + r$ avec $0 \leqslant r < b$. Le cas $r = 0$ correspond
exactement à « $b$ divise $a$ ».

**Nombres premiers** — un entier est premier s'il a exactement **deux** diviseurs, $1$ et
lui-même. $1$ n'est donc pas premier, et $2$ est le seul premier pair.

---

## 10. À retenir absolument

| | |
|---|---|
| $\mathbb{N}$ et $\mathbb{Z}$ | naturels ; relatifs. $\mathbb{N} \subset \mathbb{Z}$ |
| $a$ multiple de $b$ | $a = kb$ avec $k$ **entier** |
| $b$ divise $a$ | la même chose, dite dans l'autre sens |
| Pair / impair | $n = 2k$ / $n = 2k+1$ |
| Deux nombres distincts | **deux lettres** : $2k+1$ et $2k'+1$ |
| Fraction irréductible | plus aucun diviseur commun |
| Démonstration exigible 1 | somme de deux multiples de $a$ → multiple de $a$ |
| Démonstration exigible 2 | carré d'un impair → impair |
| Contre-exemple | suffit à réfuter, jamais à prouver |

---

## 11. Les erreurs qui coûtent des points

1. **Écrire deux nombres impairs $2k+1$ et $2k+1$** avec la **même** lettre : ils seraient
   égaux. Il faut deux variables distinctes.
2. **Oublier de conclure qu'un facteur est bien entier** : c'est ce qui achève la
   démonstration, et son absence coûte le point.
3. **Prouver par des exemples.** Vérifier sur dix cas ne démontre rien.
4. **Confondre multiple et diviseur** : $12$ est un *multiple* de $3$, $3$ est un
   *diviseur* de $12$.
5. **Oublier de terminer une simplification** de fraction : si numérateur et dénominateur
   ont encore un diviseur commun, elle n'est pas irréductible.
6. **Développer $(2k+1)^2$ en $4k^2 + 1$** en oubliant le double produit $4k$.
7. **Croire que $\mathbb{N}$ contient les négatifs** : c'est $\mathbb{Z}$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde, partie « Nombres et
calculs, algèbre », section « Arithmétique »
(docs/programme-seconde-2026.txt).

RÉÉCRITURE DU 2026-08-10, à la suite d'un dépistage systématique des 50 fiches contre
les programmes réextraits. Quatre sections de la version précédente ont été signalées
comme n'ayant aucun mot-clé commun avec le programme de seconde ; vérification faite,
le diagnostic était fondé.

Contenu réel de la section « Arithmétique » du programme de seconde :
- Contenus : notations ℕ et ℤ ; définitions de multiple, diviseur, nombre pair, nombre
  impair, avec la formulation « a est multiple de b s'il existe un entier k tel que
  a = kb ».
- Capacités attendues : modéliser et résoudre des problèmes mobilisant ces notions ;
  présenter les fractions sous forme irréductible.
- Démonstrations : « pour une valeur numérique de a, la somme de deux multiples de a est
  multiple de a » ; « le carré d'un nombre impair est impair ».
- Exemples d'algorithme : déterminer si a est multiple de b ; pour a et b donnés,
  déterminer le plus grand multiple de a inférieur ou égal à b.

Ce que cela change :

- HORS PROGRAMME DE SECONDE : critères de divisibilité, division euclidienne, nombres
  premiers, test de primalité par les diviseurs jusqu'à √n, décomposition en facteurs
  premiers. Aucun de ces termes n'apparaît dans le programme de seconde — vérifié :
  « euclidienne » 0 occurrence, « nombre premier » 0, « PGCD » 0. Ces notions relèvent
  du cycle 4. Elles occupaient les sections 1 à 3, soit l'essentiel de la fiche.
  Regroupées en section 9, explicitement signalées comme rappels hors programme, plutôt
  que supprimées : elles restent utiles et l'élève les rencontrera.
- MANQUAIENT : les notations ℕ et ℤ, la définition officielle du multiple par
  l'existence de k, la mise sous forme irréductible d'une fraction, les DEUX
  DÉMONSTRATIONS EXIGIBLES, et les deux algorithmes. Tous ajoutés.
- Les anciennes sections 4 et 5 (raisonnement type, contre-exemple) étaient justes et
  sont conservées, l'exemple de la section 7 ayant été changé pour ne plus reposer sur
  la notion de nombre premier.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le choix de conserver les rappels du cycle 4 en section 9 : un professeur peut
  préférer les retirer complètement pour ne pas surcharger.
- La formulation de la démonstration exigible n° 1 : le texte dit « pour une valeur
  numérique de a ». J'ai pris a = 7 puis signalé la généralisation. Vérifier que c'est
  bien l'attendu, et non une démonstration littérale.
- « Présenter les fractions sous forme irréductible » est traité sans nommer le PGCD,
  absent du programme de seconde. À valider.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
