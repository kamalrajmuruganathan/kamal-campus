---
id: 1spe-math-variables-aleatoires
titre: "Variables aléatoires"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 16
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
| $P(X = a)$ | la **probabilité** de l'événement $\{X = a\}$ |
| $P(X \leqslant a)$ | la probabilité de l'événement $\{X \leqslant a\}$ — somme des $p_i$ pour $x_i \leqslant a$ |

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

## 5. Linéarité de l'espérance

C'est la propriété du programme. Pour tous réels $a$ et $b$ :

$$\boxed{E(aX + b) = a\,E(X) + b}$$

> **À comprendre plutôt qu'à retenir.** Ajouter $b$ décale toutes les valeurs de $X$ : la
> moyenne se décale d'autant. Multiplier par $a$ dilate l'échelle : la moyenne suit.

> **Exemple.** Un jeu rapporte $X$ euros, et l'organisateur double les gains puis prélève
> $3$ € de mise. Le gain réel est $Y = 2X - 3$, donc $E(Y) = 2\,E(X) - 3$.

### Pour aller plus loin — la variance d'une transformation affine

> ⚠️ **Hors du programme de première.** Le texte officiel ne mentionne la linéarité que
> pour l'**espérance**. Ces deux formules sont classiques et vraies, mais elles ne sont pas
> exigibles cette année.

$$V(aX + b) = a^2\,V(X) \qquad\qquad \sigma(aX+b) = \lvert a \rvert\,\sigma(X)$$

L'idée : un décalage de $b$ ne change **pas la dispersion** — d'où l'absence de $b$. Une
dilatation par $a$ multiplie la variance par $a^2$, parce que la variance est quadratique.

---

## 6. Estimer une espérance par échantillonnage

Le programme prolonge ici le travail de simulation commencé en seconde. L'idée est simple :
**on peut approcher $E(X)$ sans la calculer**, en simulant beaucoup de tirages et en prenant
la moyenne observée.

### Le principe

On simule un **échantillon** de taille $n$ de la variable $X$ — $n$ tirages indépendants — et
on calcule la moyenne $m$ de ces $n$ valeurs. Cette moyenne est une **estimation** de $E(X)$.

> **Attention à ne pas confondre.** $E(X)$ est un nombre fixe, propriété de la loi. La
> moyenne $m$ d'un échantillon est **aléatoire** : deux simulations donnent deux valeurs
> différentes. C'est toute la différence entre la théorie et l'observation.

### Plus l'échantillon est grand, plus l'estimation est fiable

En notant $\mu = E(X)$ et $\sigma = \sigma(X)$, on observe sur des simulations répétées que
l'écart entre $m$ et $\mu$ est le plus souvent inférieur à

$$\boxed{\frac{2\sigma}{\sqrt{n}}}$$

> **Ce que dit cette expression.** L'écart typique décroît en $\dfrac{1}{\sqrt{n}}$ : pour
> diviser l'erreur par $2$, il faut **quatre fois plus** de tirages. C'est la même loi que
> pour l'incertitude d'une mesure physique répétée — ce n'est pas un hasard.

### En pratique, avec Python ou un tableur

| Ce qu'on sait faire | Comment |
|---|---|
| Simuler $X$ | `random` en Python, `ALEA()` dans un tableur |
| Moyenne d'un échantillon de taille $n$ | une fonction qui simule $n$ fois et divise la somme par $n$ |
| Comparer $m$ et $\mu$ | répéter $N$ échantillons, compter la proportion de cas où $\lvert m - \mu \rvert \leqslant \dfrac{2\sigma}{\sqrt{n}}$ |

> Le programme mentionne aussi un **algorithme renvoyant l'espérance, la variance ou
> l'écart-type** d'une variable aléatoire à partir de sa loi — cette fois par le calcul
> exact, non par simulation.

---

## 7. À retenir absolument

| | |
|---|---|
| Nature de $X$ | une **fonction** de $\Omega$ dans $\mathbb{R}$ |
| Événement / nombre | $\{X \leqslant a\}$ est un événement, $P(X \leqslant a)$ un nombre |
| Somme des probabilités | $\sum p_i = 1$ |
| Espérance | $E(X) = \sum x_i\,p_i$ |
| König-Huygens | $V(X) = E(X^2) - \left(E(X)\right)^2$ |
| Écart-type | $\sigma(X) = \sqrt{V(X)}$ |
| Linéarité de l'espérance | $E(aX+b) = aE(X)+b$ |
| Jeu équitable | $E(X) = 0$ |
| Estimation par échantillon | $m$ approche $\mu$, à environ $\dfrac{2\sigma}{\sqrt{n}}$ près |

---

## 8. Les erreurs qui coûtent des points

1. **Inverser König-Huygens** en écrivant $\left(E(X)\right)^2 - E(X^2)$. On obtiendrait une
   variance négative, ce qui est impossible — c'est d'ailleurs un bon signal d'alerte.
2. **Oublier de vérifier que $\sum p_i = 1$.** C'est le contrôle le plus rapide et le plus
   rentable.
3. **Confondre $\{X = a\}$ et $P(X = a\)$** : un événement et un nombre.
4. **Confondre variance et écart-type** dans la conclusion : l'écart-type est la racine, et
   c'est lui qui s'exprime dans l'unité de $X$.
5. **Oublier le signe négatif des pertes** dans un calcul de gain algébrique — une mise
   perdue compte négativement.
6. **Confondre l'espérance $\mu$ et la moyenne $m$ d'un échantillon.** La première est un
   nombre fixe, la seconde est aléatoire et change à chaque simulation.
7. **Oublier la racine dans $\dfrac{2\sigma}{\sqrt{n}}$** : l'écart décroît en $1/\sqrt{n}$,
   pas en $1/n$.
8. *(si tu utilises la propriété hors programme du § 5)* **Écrire $V(aX+b) = a\,V(X)$** au
   lieu de $a^2$, ou **ajouter $b$ dans la variance** alors qu'un décalage ne change pas la
   dispersion.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Variables aléatoires réelles ».

Éléments explicitement lisibles : « Variable aléatoire réelle : formalisation comme fonction »,
« Formule de König-Huygens », et la capacité « Interpréter en situation et utiliser les
notations {X = a}, {X ≤ a}, P(X = a) ». J'ai construit la fiche autour de ces trois points,
qui sont les marqueurs distinctifs de cette section.

RÉVISION DU 2026-08-10, après réextraction propre du PDF (app/scripts/extraire-pdf.mjs).
Le programme de spécialité maths a récupéré 74 % de texte : la section « Variables
aléatoires réelles » est désormais intégralement lisible, ainsi que sa sous-section
« Expérimentations ». Les quatre questions ouvertes de la version précédente sont tranchées.

- ESPÉRANCE, VARIANCE, ÉCART TYPE : confirmés, listés tels quels dans les contenus. Ils
  avaient été reconstitués par déduction — la déduction était juste.
- LINÉARITÉ DE L'ESPÉRANCE : au programme, nommée explicitement. E(aX+b) = aE(X)+b est donc
  légitime et reste en section 5.
- VARIANCE D'UNE TRANSFORMATION AFFINE : le texte ne mentionne la linéarité QUE pour
  l'espérance. V(aX+b) et σ(aX+b) ne sont pas exigibles en première. Conservées pour leur
  utilité, mais déplacées dans un encadré « pour aller plus loin » explicitement signalé
  hors programme, et retirées du récapitulatif. Les erreurs 4 et 5 de la version précédente
  portaient dessus : refondues en une erreur 8 conditionnelle.
- ÉCHANTILLONNAGE : oui, il relève bien de cette section. La sous-section
  « Expérimentations » du programme demande de simuler une variable aléatoire, d'écrire une
  fonction Python renvoyant la moyenne d'un échantillon de taille n, et de calculer la
  proportion des cas où |m − μ| ⩽ 2σ/√n. Rien de tout cela n'était traité : section 6
  ajoutée.
- NOTATION P(X ⩽ a) : le texte exige les quatre notations {X = a}, {X ⩽ a}, P(X = a),
  P(X ⩽ a). La quatrième manquait au tableau du § 1. Ajoutée.
- ALGORITHMES : le programme cite un algorithme renvoyant espérance, variance ou écart-type.
  Mentionné en fin de section 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- DÉMONSTRATION EXIGIBLE : la section n'en liste aucune explicitement. König-Huygens reste
  la candidate naturelle, mais rien ne l'impose dans le texte. À trancher.
- L'approfondissement possible « pour X variable aléatoire, étude de la fonction du second
  degré x ↦ E((X − x)²) » figure au programme comme APPROFONDISSEMENT. Non traité ici :
  décider s'il a sa place dans la fiche.
- La formulation « l'écart est le plus souvent inférieur à 2σ/√n » (§ 6) reste qualitative :
  le texte demande de CALCULER cette proportion sur des simulations, sans énoncer de
  résultat. Vérifier que la fiche ne laisse pas croire à une règle démontrée.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
