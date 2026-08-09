---
id: 1techno-math-fonctions-variable-reelle
titre: "Fonctions de la variable réelle"
voie: technologique
niveau: premiere
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — première, voie technologique"
duree_lecture_min: 13
prerequis:
  - Notion de fonction (Seconde)
  - Fonctions de référence (Seconde)
statut: brouillon
relu_par: null
---

# Fonctions de la variable réelle

> Le programme met l'accent sur une notion précise : le **taux de variation**.
> C'est lui qui relie le sens de variation d'une fonction, la pente d'une droite,
> et — au chapitre suivant — la dérivation.

---

## 1. Rappels et notations

Une fonction $f$ associe à chaque réel $x$ de son ensemble de définition **un unique**
nombre $f(x)$.

$$f : x \longmapsto f(x)$$

Elle peut être donnée par une **expression littérale**, par une **représentation
graphique**, ou par un **tableau de valeurs**.

---

## 2. Le taux de variation

### Définition

Pour deux réels $a$ et $b$ distincts de l'intervalle :

$$\boxed{\tau = \frac{f(b) - f(a)}{b - a}}$$

C'est le **coefficient directeur de la droite** passant par les deux points de la
courbe — la **sécante**.

> **Interprétation concrète** : c'est la variation moyenne de $f$ par unité de $x$
> sur l'intervalle $[a\,;b]$.

> **Exemple.** $f(x) = x^2$ entre $1$ et $4$ :
> $\tau = \dfrac{16 - 1}{4 - 1} = \dfrac{15}{3} = 5$.
> Entre $1$ et $4$, la fonction augmente en moyenne de $5$ par unité.

---

## 3. Taux de variation et sens de variation

C'est le résultat central du chapitre :

| Sur un intervalle $I$ | La fonction est |
|---|---|
| taux de variation **toujours positif** | **croissante** sur $I$ |
| taux de variation **toujours négatif** | **décroissante** sur $I$ |
| taux de variation **nul** | **constante** sur $I$ |

> ⚠️ **Ce théorème vaut sur un INTERVALLE.** La fonction inverse a des taux négatifs
> partout où elle est définie, mais elle n'est pas décroissante sur $\mathbb{R}^*$ :
> elle l'est sur $]-\infty\,;0[$ et sur $]0\,;+\infty[$ séparément.

---

## 4. Fonctions polynômes du second degré

$$f(x) = ax^2 + bx + c \qquad (a \neq 0)$$

### Éléments caractéristiques de la parabole

| | |
|---|---|
| **Allure** | tournée vers le haut si $a > 0$, vers le bas si $a < 0$ |
| **Sommet** | $\mathrm{S}\left(\alpha\,;f(\alpha)\right)$ avec $\boxed{\alpha = -\dfrac{b}{2a}}$ |
| **Axe de symétrie** | la droite verticale $x = \alpha$ |

### Tableau de variations

Pour $a > 0$ :

| $x$ | $-\infty$ | | $\alpha$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f(x)$ | | $\searrow$ | $f(\alpha)$ | $\nearrow$ | |

Le sommet est un **minimum**. Pour $a < 0$, tout s'inverse : c'est un **maximum**.

> **Le lien avec la symétrie** : deux valeurs de $x$ symétriques par rapport à
> $\alpha$ ont la **même image**. C'est ce qui permet de retrouver le sommet
> graphiquement — il est à mi-chemin entre deux points de même ordonnée.

### Racines

Les **racines** sont les solutions de $f(x) = 0$ : ce sont les abscisses des points
où la parabole coupe l'axe des abscisses. Elle peut en avoir **deux**, **une** ou
**aucune**.

> **Contrôle graphique** : si le sommet est au-dessus de l'axe et la parabole tournée
> vers le haut, il n'y a aucune racine.

---

## 5. Résoudre graphiquement

| Question | Lecture sur le graphique |
|---|---|
| $f(x) = k$ | abscisses des intersections avec la droite $y = k$ |
| $f(x) > k$ | abscisses où la courbe est **au-dessus** de $y = k$ |
| $f(x) < 0$ | abscisses où la courbe est **sous** l'axe des abscisses |
| $f(x) = g(x)$ | abscisses des intersections des deux courbes |

---

## 6. À retenir absolument

| | |
|---|---|
| Taux de variation | $\tau = \dfrac{f(b)-f(a)}{b-a}$ |
| Interprétation | coefficient directeur de la sécante |
| Taux $> 0$ sur $I$ | fonction croissante sur $I$ |
| Sommet de la parabole | $\alpha = -\dfrac{b}{2a}$ |
| Axe de symétrie | $x = \alpha$ |
| $a > 0$ | minimum, parabole vers le haut |
| $a < 0$ | maximum, parabole vers le bas |

---

## 7. Les erreurs qui coûtent des points

1. **Inverser le taux de variation** : l'écart des images est au **numérateur**.
2. **Oublier le signe moins** dans $\alpha = -\dfrac{b}{2a}$.
3. **Annoncer une variation sur une réunion d'intervalles** au lieu d'un intervalle.
4. **Confondre le sommet et son abscisse** : le sommet est un point, $\alpha$ un nombre.
5. **Confondre le signe de $f$ et le signe du taux de variation** : le premier dit où
   la courbe est au-dessus de l'axe, le second où elle monte.
6. **Croire qu'une parabole coupe toujours l'axe des abscisses.**
7. **Lire une inéquation graphique à l'envers** : $f(x) > k$ se lit **au-dessus**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Analyse », section
« Fonctions de la variable réelle » (ligne 1830 du .txt extrait).

Éléments explicitement lisibles dans l'extraction : « expression littérale,
représentation graphique », « Taux de variation entre deux valeurs de la variable »,
« Fonctions monotones sur un intervalle, LIEN AVEC LE SIGNE DU TAUX DE VARIATION »,
et pour le second degré : « allure, axe de symétrie, coordonnées du sommet en lien
avec la symétrie et tableau de variation de la fonction », « Racines ».

Le programme insiste sur le TAUX DE VARIATION comme notion charnière — la fiche est
construite autour, plutôt que sur une simple liste de fonctions de référence.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le DISCRIMINANT est-il au programme de la voie technologique, ou les racines sont-
  elles obtenues autrement (forme factorisée, lecture graphique, calculatrice) ?
  Je ne l'ai PAS introduit — point de périmètre décisif à trancher.
- La forme canonique est-elle exigible, ou seulement les coordonnées du sommet ?
- Quelles fonctions de référence sont au programme de première technologique ?
  L'extraction est coupée après « Fonctions dérivées de : » dans la section suivante.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
