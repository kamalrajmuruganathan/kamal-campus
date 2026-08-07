---
id: 2nde-math-droites-du-plan
titre: "Droites du plan"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Vecteurs (Seconde)
  - Fonctions affines (Seconde)
  - Équations et inéquations (Seconde)
statut: brouillon
relu_par: null
---

# Droites du plan

> Une droite se décrit par une **équation**. Savoir passer des points à l'équation, et de
> l'équation aux positions relatives, est l'essentiel du chapitre.

---

## 1. Les deux formes d'équation

### Équation réduite

$$y = mx + p$$

- $m$ est le **coefficient directeur**
- $p$ est l'**ordonnée à l'origine**

⚠️ Cette forme **ne peut pas** représenter une droite **verticale**.

### Équation cartésienne

$$ax + by + c = 0 \qquad \text{avec } (a\,;b) \neq (0\,;0)$$

Cette forme représente **toutes** les droites, verticales comprises.

| Cas | Équation | Nature |
|---|---|---|
| $b \neq 0$ | se ramène à $y = mx+p$ | droite « ordinaire » |
| $b = 0$ | $x = k$ | droite **verticale** |
| $a = 0$ | $y = k$ | droite **horizontale** |

---

## 2. Coefficient directeur

Pour deux points distincts $\mathrm{A}$ et $\mathrm{B}$ d'abscisses différentes :

$$\boxed{m = \frac{y_\mathrm{B} - y_\mathrm{A}}{x_\mathrm{B} - x_\mathrm{A}}}$$

> **Interprétation** : quand on avance de $1$ vers la droite, on monte de $m$.
> $m > 0$ → la droite monte ; $m < 0$ → elle descend ; $m = 0$ → elle est horizontale.

> **Exemple.** $\mathrm{A}(1\,;2)$ et $\mathrm{B}(4\,;11)$ :
> $m = \dfrac{11-2}{4-1} = \dfrac{9}{3} = 3$.
>
> Puis on trouve $p$ en remplaçant par un point : $2 = 3 \times 1 + p$ donne $p = -1$.
> La droite a pour équation $y = 3x - 1$.

---

## 3. Vecteur directeur

Un **vecteur directeur** d'une droite est un vecteur non nul dont la direction est celle de la
droite.

| Forme de l'équation | Vecteur directeur |
|---|---|
| $y = mx + p$ | $\vec{u}\begin{pmatrix} 1 \\ m \end{pmatrix}$ |
| $ax + by + c = 0$ | $\vec{u}\begin{pmatrix} -b \\ a \end{pmatrix}$ |

> **À vérifier soi-même** : pour $2x + 3y - 6 = 0$, le vecteur
> $\begin{pmatrix} -3 \\ 2 \end{pmatrix}$ convient. Les points $(3\,;0)$ et $(0\,;2)$ sont sur
> la droite, et le vecteur qui les joint est bien $\begin{pmatrix} -3 \\ 2 \end{pmatrix}$.

---

## 4. Positions relatives

### Parallélisme

Deux droites sont **parallèles** si et seulement si leurs vecteurs directeurs sont
**colinéaires**.

| Forme | Critère |
|---|---|
| $y = mx+p$ et $y = m'x+p'$ | $m = m'$ |
| $ax+by+c=0$ et $a'x+b'y+c'=0$ | $ab' - a'b = 0$ |

> Si de plus $p = p'$, les droites sont **confondues**.

### Sécantes

Si elles ne sont pas parallèles, elles se coupent en **un unique point**, dont on trouve les
coordonnées en **résolvant le système** formé par les deux équations.

> **Exemple.** $y = 2x + 1$ et $y = -x + 7$.
> $2x + 1 = -x + 7 \iff 3x = 6 \iff x = 2$, puis $y = 5$.
> Point d'intersection : $(2\,;5)$.

---

## 5. Systèmes de deux équations à deux inconnues

### Par substitution

On exprime une inconnue en fonction de l'autre, puis on remplace.

### Par combinaison linéaire

On multiplie les équations pour faire disparaître une inconnue par addition.

> **Exemple.**
> $\begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases}$
>
> En additionnant : $3x = 9$, donc $x = 3$, puis $y = 1$.

### Interprétation géométrique

| Système | Droites |
|---|---|
| Une solution unique | sécantes |
| Aucune solution | strictement parallèles |
| Une infinité de solutions | confondues |

---

## 6. À retenir absolument

| | |
|---|---|
| Équation réduite | $y = mx + p$ (sauf verticales) |
| Équation cartésienne | $ax + by + c = 0$ (toutes les droites) |
| Coefficient directeur | $\dfrac{y_\mathrm{B}-y_\mathrm{A}}{x_\mathrm{B}-x_\mathrm{A}}$ |
| Vecteur directeur de $ax+by+c=0$ | $\begin{pmatrix} -b \\ a \end{pmatrix}$ |
| Parallèles (forme réduite) | $m = m'$ |
| Verticale | $x = k$, pas d'équation réduite |

---

## 7. Les erreurs qui coûtent des points

1. **Chercher une équation réduite pour une droite verticale.** Elle n'en a pas — son équation
   est $x = k$.
2. **Inverser le calcul du coefficient directeur** : $\dfrac{\Delta y}{\Delta x}$, l'ordonnée
   au numérateur.
3. **Oublier de calculer $p$** après avoir trouvé $m$.
4. **Confondre vecteur directeur et vecteur normal** — le second est vu en Première.
5. **Conclure au parallélisme depuis $a = a'$** dans la forme cartésienne : il faut le critère
   croisé $ab' - a'b = 0$.
6. **Résoudre un système sans vérifier** : remplacer la solution dans les deux équations prend
   dix secondes.
7. **Oublier le cas des droites confondues** : un système peut avoir une infinité de solutions.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Géométrie », section repérée à la ligne 2584 du
.txt extrait (« équations de droite »). L'extraction montre aussi un intitulé « Droites du
plan ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les systèmes de deux équations à deux inconnues relèvent-ils de ce chapitre ou du bloc
  « Algèbre » ? Je les ai rattachés ici pour l'interprétation géométrique, à arbitrer.
- La méthode du pivot / combinaison linéaire est-elle exigible, ou seulement la substitution ?
- Les démonstrations exigibles de cette section.
- La distance d'un point à une droite n'est PAS traitée (elle relève de la première).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
