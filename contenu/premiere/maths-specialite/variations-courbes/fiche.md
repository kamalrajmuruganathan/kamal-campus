---
id: 1spe-math-variations-courbes
titre: "Variations et courbes représentatives des fonctions"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Dérivation (Première)
  - Second degré (Première)
  - Fonctions de référence (Seconde)
statut: brouillon
relu_par: null
---

# Variations et courbes représentatives des fonctions

> C'est ici que la dérivation devient un **outil**. Le signe de $f'$ donne les variations de
> $f$ : on passe d'un calcul local à une compréhension globale de la courbe.

---

## 1. Signe de la dérivée et sens de variation

### Théorème

Soit $f$ dérivable sur un intervalle $I$.

| Sur $I$ | Alors $f$ est |
|---|---|
| $f'(x) > 0$ | **strictement croissante** |
| $f'(x) < 0$ | **strictement décroissante** |
| $f'(x) = 0$ | **constante** |

> ⚠️ **Ce théorème vaut sur un INTERVALLE.** La fonction inverse a une dérivée négative partout
> où elle est définie, mais elle n'est pas décroissante sur $\mathbb{R}^*$ : elle l'est sur
> $]-\infty\,;0[$ et sur $]0\,;+\infty[$ séparément.

### Caractérisation des fonctions constantes

$$f \text{ est constante sur } I \iff f'(x) = 0 \text{ pour tout } x \in I$$

---

## 2. Méthode — étudier les variations

1. Déterminer l'ensemble de définition
2. Calculer $f'(x)$
3. Étudier le **signe de $f'$** — c'est souvent là qu'est le vrai travail
4. Dresser le tableau de variations
5. Calculer les valeurs aux bornes et aux extrémums

> **Exemple complet.** $f(x) = x^3 - 3x$ sur $\mathbb{R}$.
> $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$.
> Ce trinôme est du signe de $a = 3 > 0$ à l'extérieur des racines $-1$ et $1$.

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\nearrow$ | $2$ | $\searrow$ | $-2$ | $\nearrow$ | |

---

## 3. Extrémums

### Définition

$f$ admet un **maximum local** en $a$ si $f(x) \leqslant f(a)$ pour tout $x$ proche de $a$.
De même pour un **minimum local**.

### Théorème — nombre dérivé en un extrémum

Si $f$ est dérivable sur un intervalle **ouvert** $I$ et admet un extrémum local en $a \in I$,
alors

$$\boxed{f'(a) = 0}$$

Géométriquement : la tangente à la courbe en un extrémum est **horizontale**.

### ⚠️ La réciproque est fausse

$f'(a) = 0$ **n'implique pas** un extrémum en $a$.

> **Contre-exemple à connaître.** $f(x) = x^3$ a $f'(0) = 0$, mais $f$ est croissante sur
> $\mathbb{R}$ : il n'y a **aucun** extrémum en $0$. La tangente y est horizontale et la courbe
> la traverse — c'est un *point d'inflexion*.

**Le bon critère** : il y a extrémum quand $f'$ **change de signe**.

---

## 4. Fonctions paires et impaires

### Définitions

Soit $f$ définie sur un ensemble $D$ **symétrique par rapport à $0$**.

| | Condition | Traduction géométrique |
|---|---|---|
| **Paire** | $f(-x) = f(x)$ | courbe symétrique par rapport à l'**axe des ordonnées** |
| **Impaire** | $f(-x) = -f(x)$ | courbe symétrique par rapport à l'**origine** |

> **Exemples.** $x^2$, $\cos x$, $\dfrac{1}{x^2}$ sont paires.
> $x^3$, $\dfrac{1}{x}$, $\sin x$ sont impaires.
> $x^2 + x$ n'est ni l'une ni l'autre.

> **L'intérêt pratique** : il suffit d'étudier la fonction sur la moitié de son domaine, puis
> de compléter par symétrie. On divise le travail par deux.

> ⚠️ Une fonction impaire définie en $0$ vérifie nécessairement $f(0) = 0$.

---

## 5. Étude du second degré par la dérivation

Pour $f(x) = ax^2 + bx + c$ :

$$f'(x) = 2ax + b, \qquad f'(x) = 0 \iff x = -\frac{b}{2a}$$

On retrouve **par le calcul** l'abscisse du sommet vue au chapitre précédent.

| Cas | Variations | Extrémum |
|---|---|---|
| $a > 0$ | décroissante puis croissante | **minimum** en $-\dfrac{b}{2a}$ |
| $a < 0$ | croissante puis décroissante | **maximum** en $-\dfrac{b}{2a}$ |

> C'est un bon contrôle : deux méthodes indépendantes — forme canonique et dérivation —
> doivent donner le même sommet.

---

## 6. À retenir absolument

| | |
|---|---|
| $f' > 0$ sur $I$ | $f$ croissante sur $I$ |
| $f' < 0$ sur $I$ | $f$ décroissante sur $I$ |
| $f' = 0$ sur $I$ | $f$ constante sur $I$ |
| Extrémum en $a$ (intervalle ouvert) | $\Rightarrow f'(a) = 0$ |
| Réciproque | **fausse** — voir $x^3$ en $0$ |
| Vrai critère d'extrémum | $f'$ **change de signe** |
| Paire | $f(-x) = f(x)$, symétrie / axe $(Oy)$ |
| Impaire | $f(-x) = -f(x)$, symétrie / origine |

---

## 7. Les erreurs qui coûtent des points

1. **Conclure à un extrémum dès que $f'(a) = 0$.** Il faut un **changement de signe**.
   Sinon $x^3$ aurait un extrémum en $0$.
2. **Annoncer une variation sur une réunion d'intervalles.** La fonction inverse est
   décroissante sur $]-\infty\,;0[$ et sur $]0\,;+\infty[$, mais **pas** sur $\mathbb{R}^*$.
3. **Étudier le signe de $f$ au lieu de celui de $f'$.** Ce sont deux questions distinctes.
4. **Oublier de vérifier la symétrie du domaine** avant de conclure à la parité. Une fonction
   définie sur $[0\,;+\infty[$ ne peut être ni paire ni impaire.
5. **Confondre les deux symétries** : paire → axe des ordonnées, impaire → origine.
6. **Négliger les valeurs aux extrémums** dans le tableau : un tableau sans les images n'est
   pas complet.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Variations et courbes représentatives des fonctions » (ligne 2077 du .txt).

Éléments lisibles dans l'extraction : fonctions paires/impaires avec traduction géométrique,
caractérisation des fonctions constantes, nombre dérivé en un extrémum, tangente à la courbe
représentative, et « étudier en lien avec la dérivation une fonction polynôme du second degré ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le théorème « f' > 0 ⟹ f croissante » est-il admis ou démontré ?
- La notion de point d'inflexion est-elle au programme de première ou de terminale ?
  Je l'ai seulement nommée en passant sur le contre-exemple x³, sans la développer.
- Le périmètre exact des capacités attendues (l'extraction est tronquée en fin de section).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
