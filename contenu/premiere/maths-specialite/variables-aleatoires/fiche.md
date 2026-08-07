---
id: 1spe-math-variables-aleatoires
titre: "Variables aléatoires"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Probabilités conditionnelles (Première)
  - Moyenne et écart-type (Seconde)
statut: brouillon
relu_par: null
---

# Variables aléatoires

> Une variable aléatoire **associe un nombre à chaque issue** d'une expérience. C'est ce qui
> permet de passer du langage des événements à celui du calcul : moyenne, dispersion, gain
> espéré.

---

## 1. Définition et notations

### Définition

Une **variable aléatoire réelle** $X$ est une **fonction** qui, à chaque issue de l'univers
$\Omega$, associe un nombre réel.

$$X : \Omega \longrightarrow \mathbb{R}$$

> **Retenir que c'est une fonction** clarifie tout le reste : $X$ n'est pas un nombre, c'est une
> règle d'association.

### Notations à maîtriser

| Notation | Signification |
|---|---|
| $\{X = a\}$ | l'**événement** « $X$ prend la valeur $a$ » |
| $\{X \leqslant a\}$ | l'événement « $X$ prend une valeur inférieure ou égale à $a$ » |
| $P(X = a)$ | la **probabilité** de cet événement |

> ⚠️ $\{X = a\}$ est un **événement**, $P(X = a)$ est un **nombre**. Les accolades marquent
> cette différence.

> **Exemple.** On lance deux dés et $X$ désigne la somme obtenue.
> $\{X = 12\}$ est l'événement « obtenir deux six », et $P(X = 12) = \dfrac{1}{36}$.

---

## 2. Loi de probabilité

La **loi de probabilité** de $X$ associe à chaque valeur possible $x_i$ sa probabilité
$p_i = P(X = x_i)$. On la présente sous forme de tableau.

| $x_i$ | $x_1$ | $x_2$ | $\cdots$ | $x_n$ |
|---|---|---|---|---|
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\cdots$ | $p_n$ |

$$\boxed{\sum_{i=1}^{n} p_i = 1}$$

> **Le contrôle systématique** : la somme de la seconde ligne doit valoir $1$. Si ce n'est pas
> le cas, il y a une erreur — inutile de poursuivre.

---

## 3. Espérance

### Définition

$$\boxed{E(X) = \sum_{i=1}^{n} x_i\,p_i = x_1p_1 + x_2p_2 + \cdots + x_np_n}$$

C'est la **moyenne** des valeurs prises, pondérée par leurs probabilités.

> **Interprétation concrète.** Si on répétait l'expérience un très grand nombre de fois,
> la moyenne des résultats se rapprocherait de $E(X)$.

> **Exemple — un jeu.** On mise $2$ €. On gagne $10$ € avec probabilité $0{,}1$, sinon rien.
> Soit $X$ le gain algébrique : $X = 8$ avec probabilité $0{,}1$, $X = -2$ avec probabilité $0{,}9$.
>
> $E(X) = 8 \times 0{,}1 + (-2) \times 0{,}9 = 0{,}8 - 1{,}8 = -1$
>
> En moyenne, le joueur **perd $1$ € par partie**. Un jeu est dit *équitable* lorsque
> $E(X) = 0$.

---

## 4. Variance et écart-type

### Définition

$$V(X) = \sum_{i=1}^{n} p_i\left(x_i - E(X)\right)^2$$

$$\sigma(X) = \sqrt{V(X)}$$

La variance mesure la **dispersion** autour de l'espérance. L'écart-type a l'avantage d'être
dans la **même unité** que $X$.

### Formule de König-Huygens

$$\boxed{V(X) = E\left(X^2\right) - \left(E(X)\right)^2}$$

où $E(X^2) = \sum p_i\,x_i^2$.

> **Pourquoi elle est utile** : elle évite de calculer tous les écarts $x_i - E(X)$. En pratique,
> on l'utilise presque toujours.

> **Le moyen mnémotechnique** : *« moyenne des carrés moins carré de la moyenne »*.
> L'ordre compte — l'inverse donnerait un résultat négatif, impossible pour une variance.

> **Exemple.** $X$ prend les valeurs $0$, $1$, $2$ avec probabilités $0{,}5$, $0{,}3$, $0{,}2$.
>
> $E(X) = 0 \times 0{,}5 + 1 \times 0{,}3 + 2 \times 0{,}2 = 0{,}7$
>
> $E(X^2) = 0 \times 0{,}5 + 1 \times 0{,}3 + 4 \times 0{,}2 = 1{,}1$
>
> $V(X) = 1{,}1 - 0{,}7^2 = 1{,}1 - 0{,}49 = 0{,}61$, donc $\sigma(X) \approx 0{,}78$

---

## 5. Propriétés

Pour tous réels $a$ et $b$ :

| | |
|---|---|
| Espérance | $E(aX + b) = a\,E(X) + b$ |
| Variance | $V(aX + b) = a^2\,V(X)$ |
| Écart-type | $\sigma(aX+b) = \lvert a \rvert\,\sigma(X)$ |

> **À comprendre plutôt qu'à retenir.** Ajouter $b$ décale toutes les valeurs : la moyenne se
> décale d'autant, mais la **dispersion ne change pas** — d'où l'absence de $b$ dans la
> variance. Multiplier par $a$ dilate l'échelle : la variance, qui est quadratique, est
> multipliée par $a^2$.

---

## 6. À retenir absolument

| | |
|---|---|
| Nature de $X$ | une **fonction** de $\Omega$ dans $\mathbb{R}$ |
| Somme des probabilités | $\sum p_i = 1$ |
| Espérance | $E(X) = \sum x_i\,p_i$ |
| König-Huygens | $V(X) = E(X^2) - \left(E(X)\right)^2$ |
| Écart-type | $\sigma(X) = \sqrt{V(X)}$ |
| Transformation affine | $E(aX+b) = aE(X)+b$, $V(aX+b) = a^2V(X)$ |
| Jeu équitable | $E(X) = 0$ |

---

## 7. Les erreurs qui coûtent des points

1. **Inverser König-Huygens** en écrivant $\left(E(X)\right)^2 - E(X^2)$. On obtiendrait une
   variance négative, ce qui est impossible — c'est d'ailleurs un bon signal d'alerte.
2. **Oublier de vérifier que $\sum p_i = 1$.** C'est le contrôle le plus rapide et le plus
   rentable.
3. **Confondre $\{X = a\}$ et $P(X = a\)$** : un événement et un nombre.
4. **Écrire $V(aX+b) = a\,V(X)$.** C'est $a^2$, la variance étant quadratique.
5. **Ajouter $b$ dans la variance.** Un décalage ne change pas la dispersion.
6. **Confondre variance et écart-type** dans la conclusion : l'écart-type est la racine, et
   c'est lui qui s'exprime dans l'unité de $X$.
7. **Oublier le signe négatif des pertes** dans un calcul de gain algébrique — une mise
   perdue compte négativement.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Variables aléatoires » (ligne 2914 du .txt extrait).

Éléments explicitement lisibles : « Variable aléatoire réelle : formalisation comme fonction »,
« Formule de König-Huygens », et la capacité « Interpréter en situation et utiliser les
notations {X = a}, {X ≤ a}, P(X = a) ». J'ai construit la fiche autour de ces trois points,
qui sont les marqueurs distinctifs de cette section.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction est très lacunaire sur cette section : espérance, variance et écart-type sont
  traités ici par déduction du contexte (König-Huygens implique la variance), mais leurs
  définitions exactes et leur périmètre ne sont PAS lisibles dans mon extraction.
- Les propriétés de transformation affine E(aX+b) et V(aX+b) sont-elles au programme de
  première ? Je les ai incluses car classiques, à confirmer impérativement.
- L'échantillonnage et la simulation (souvent associés aux variables aléatoires) ne sont pas
  traités ici — vérifier s'ils relèvent de cette section ou d'une autre.
- Y a-t-il une démonstration exigible (König-Huygens en est une candidate naturelle) ?

C'est la fiche dont la conformité au programme est la MOINS assurée des dix. À relire en
priorité.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
