---
id: maths-seconde-controle-commun-1
titre: "Seconde — Contrôle commun de maths n°1 : calculs, arithmétique, vecteurs, fonctions"
examen: "Seconde — contrôle commun de mathématiques"
niveau: seconde
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Seconde — Contrôle commun de mathématiques n°1 (milieu d'année)

**Durée : 1 h 30** — **Barème indicatif : 20 points** — **Calculatrice autorisée, sauf pour
l'exercice 1.**

Les quatre exercices sont indépendants. Toutes les réponses doivent être justifiées (sauf à
l'exercice 1). La qualité de la rédaction est prise en compte.

| Exercice | 1 — Automatismes | 2 — Arithmétique | 3 — Vecteurs | 4 — Fonctions | Total |
|---|---|---|---|---|---|
| Points | 4 | 4 | 6 | 6 | 20 |

---

## Exercice 1 — Automatismes, sans calculatrice (4 points)

Chaque question vaut $0{,}5$ point. Donner directement le résultat.

1. Calculer $A = \dfrac{2^5 \times 2^{-3}}{4}$.
2. Écrire $B = \sqrt{50} - \sqrt{18}$ sous la forme $a\sqrt2$, avec $a$ entier.
3. Calculer $C = \dfrac13 - \dfrac34 \times \dfrac29$ et donner le résultat sous forme irréductible.
4. Écrire sous forme d'un intervalle l'ensemble des réels $x$ tels que $x \in [-2\,;5[$ et
   $x \in\ ]1\,;7]$.
5. Écrire sous forme d'un intervalle l'ensemble des réels $x$ tels que $|x - 3| \leqslant 2$.
6. Développer et réduire $(x - 4)(x + 4) - (x - 4)^2$.
7. Le volume d'un cylindre est $V = \pi r^2 h$. Exprimer $r$ (positif) en fonction de $V$ et $h$.
8. Écrire la fraction $\dfrac{84}{126}$ sous forme irréductible.

---

## Exercice 2 — Arithmétique et programmation (4 points)

1. Démontrer que la somme de trois entiers consécutifs est toujours un multiple de $3$.
2. Démontrer que le carré d'un nombre impair est impair.
3. On considère la fonction Python suivante, où `a` et `b` sont des entiers naturels, avec
   `a` non nul.
   ```python
   def mystere(a, b):
       m = 0
       while m + a <= b:
           m = m + a
       return m
   ```
   a. Que renvoie `mystere(7, 100)` ? Justifier brièvement.
   b. Que renvoie cette fonction en général ?
   c. Écrire une fonction `est_multiple(a, b)` qui renvoie `True` si `a` est un multiple de `b`
      (avec `b` non nul) et `False` sinon. *On rappelle que `a % b` est le reste de la division
      euclidienne de `a` par `b`.*

---

## Exercice 3 — Vecteurs (6 points)

Dans un repère orthonormé, on considère les points $\mathrm{A}(-2\,;1)$, $\mathrm{B}(4\,;3)$ et
$\mathrm{C}(5\,;-2)$.

1. Calculer les coordonnées du vecteur $\overrightarrow{\mathrm{AB}}$.
2. Déterminer les coordonnées du point $\mathrm{D}$ tel que $\mathrm{ABCD}$ soit un parallélogramme.
3. Calculer les coordonnées du milieu $\mathrm{K}$ de $[\mathrm{AC}]$ et vérifier que c'est aussi le
   milieu de $[\mathrm{BD}]$.
4. Calculer les longueurs $\mathrm{AB}$ et $\mathrm{AD}$. Le parallélogramme $\mathrm{ABCD}$
   est-il un losange ?
5. Soit $\mathrm{E}(10\,;5)$. À l'aide d'un déterminant, montrer que les points $\mathrm{A}$,
   $\mathrm{B}$ et $\mathrm{E}$ sont alignés.
6. Déterminer le réel $m$ tel que le point $\mathrm{M}(m\,;0)$ vérifie
   $(\mathrm{CM}) \parallel (\mathrm{AB})$.
7. Calculer les coordonnées du vecteur $\vec u = 2\,\overrightarrow{\mathrm{AB}} - 3\,\overrightarrow{\mathrm{AD}}$.

---

## Exercice 4 — Une fonction (6 points)

On considère la fonction $f$ définie sur $[-2\,;5]$ par $f(x) = -x^2 + 4x - 3$.

1. Calculer les images de $0$ et de $2$ par $f$.
2. Montrer que, pour tout $x$ de $[-2\,;5]$ : $f(x) = (x - 1)(3 - x)$ et $f(x) = 1 - (x - 2)^2$.
3. En choisissant à chaque fois la forme la plus adaptée :
   a. déterminer les antécédents de $-3$ par $f$ ;
   b. résoudre l'équation $f(x) = 0$ ;
   c. montrer que, pour tout $x$ de $[-2\,;5]$, $f(x) \leqslant 1$. Que représente le nombre $1$
      pour la fonction $f$ ?
4. Dresser le tableau de signes de $f(x)$ sur $[-2\,;5]$.
5. On admet que $f$ est croissante sur $[-2\,;2]$ et décroissante sur $[2\,;5]$. Dresser son
   tableau de variations, en indiquant les valeurs aux bornes.
6. On considère la fonction $g$ définie sur $[-2\,;5]$ par $g(x) = x - 1$.
   a. Montrer que $f(x) - g(x) = (x - 1)(2 - x)$.
   b. Résoudre l'équation $f(x) = g(x)$, puis l'inéquation $f(x) > g(x)$. Interpréter
      graphiquement.

---

# Corrigé

## Exercice 1 — Automatismes

1. $A = \dfrac{2^{5 - 3}}{2^2} = \dfrac{2^2}{2^2} = \boxed{1}$.
2. $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt2$ et $\sqrt{18} = 3\sqrt2$, donc $B = \boxed{2\sqrt2}$.
3. $\dfrac34 \times \dfrac29 = \dfrac{6}{36} = \dfrac16$, donc $C = \dfrac13 - \dfrac16 = \dfrac26 - \dfrac16 = \boxed{\dfrac16}$.
4. Il faut $x > 1$ et $x < 5$ : $\boxed{]1\,;5[}$.
5. La distance entre $x$ et $3$ est au plus $2$ : $\boxed{[1\,;5]}$.
6. $(x^2 - 16) - (x^2 - 8x + 16) = \boxed{8x - 32}$.
7. $r^2 = \dfrac{V}{\pi h}$, donc $r = \boxed{\sqrt{\dfrac{V}{\pi h}}}$.
8. $\dfrac{84}{126} = \dfrac{42 \times 2}{42 \times 3} = \boxed{\dfrac23}$.

## Exercice 2 — Arithmétique et programmation

**1.** Trois entiers consécutifs s'écrivent $n$, $n + 1$, $n + 2$ avec $n \in \mathbb{Z}$. Leur somme
vaut $3n + 3 = 3(n + 1)$, et $n + 1$ est un entier : c'est un multiple de $3$. *(1 pt)*

**2.** Un nombre impair s'écrit $2k + 1$ avec $k \in \mathbb{Z}$.
$(2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, et $2k^2 + 2k$ est un entier : le carré est impair. *(1 pt)*

**3.** a. `m` prend successivement les valeurs $0, 7, 14, \dots$ tant que `m + 7` reste
inférieur ou égal à $100$. Comme $98 + 7 = 105 > 100$, la boucle s'arrête à $98$ :
`mystere(7, 100)` renvoie **$98$**. *(0,5 pt)*
   b. La fonction renvoie le **plus grand multiple de `a` inférieur ou égal à `b`**. *(0,5 pt)*
   c. Une solution : *(1 pt)*
   ```python
   def est_multiple(a, b):
       return a % b == 0
   ```

## Exercice 3 — Vecteurs

**1.** $\overrightarrow{\mathrm{AB}}\begin{pmatrix}4 - (-2)\\3 - 1\end{pmatrix} = \begin{pmatrix}6\\2\end{pmatrix}$. *(0,5 pt)*

**2.** $\mathrm{ABCD}$ est un parallélogramme si et seulement si $\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{DC}}$.
Avec $\mathrm{D}(x\,;y)$ : $5 - x = 6$ et $-2 - y = 2$, donc $\mathrm{D}(-1\,;-4)$. *(1 pt)*

**3.** $\mathrm{K}\left(\dfrac{-2 + 5}{2}\,;\dfrac{1 + (-2)}{2}\right) = \mathrm{K}(1{,}5\,;-0{,}5)$. Milieu de
$[\mathrm{BD}]$ : $\left(\dfrac{4 + (-1)}{2}\,;\dfrac{3 + (-4)}{2}\right) = (1{,}5\,;-0{,}5)$ : c'est bien $\mathrm{K}$
(les diagonales d'un parallélogramme ont le même milieu). *(1 pt)*

**4.** $\mathrm{AB} = \sqrt{6^2 + 2^2} = \sqrt{40} = 2\sqrt{10}$ ;
$\overrightarrow{\mathrm{AD}}\begin{pmatrix}1\\-5\end{pmatrix}$, $\mathrm{AD} = \sqrt{1 + 25} = \sqrt{26}$.
$\mathrm{AB} \neq \mathrm{AD}$ : deux côtés consécutifs n'ont pas la même longueur, ce n'est **pas un
losange**. *(1 pt)*

**5.** $\overrightarrow{\mathrm{AE}}\begin{pmatrix}12\\4\end{pmatrix}$ et
$\det\left(\overrightarrow{\mathrm{AB}}, \overrightarrow{\mathrm{AE}}\right) = 6 \times 4 - 2 \times 12 = 0$ :
les vecteurs sont colinéaires et ont le point $\mathrm{A}$ en commun, donc $\mathrm{A}$, $\mathrm{B}$,
$\mathrm{E}$ sont alignés. *(1 pt)*

**6.** $\overrightarrow{\mathrm{CM}}\begin{pmatrix}m - 5\\2\end{pmatrix}$. $(\mathrm{CM}) \parallel (\mathrm{AB})$ si et
seulement si $\det\left(\overrightarrow{\mathrm{AB}}, \overrightarrow{\mathrm{CM}}\right) = 0$ :
$6 \times 2 - 2(m - 5) = 0 \iff 22 - 2m = 0 \iff m = 11$. *(1 pt)*

**7.** $\vec u = 2\begin{pmatrix}6\\2\end{pmatrix} - 3\begin{pmatrix}1\\-5\end{pmatrix} = \begin{pmatrix}12 - 3\\4 + 15\end{pmatrix} = \begin{pmatrix}9\\19\end{pmatrix}$. *(0,5 pt)*

## Exercice 4 — Une fonction

**1.** $f(0) = -3$ et $f(2) = -4 + 8 - 3 = 1$. *(0,5 pt)*

**2.** $(x - 1)(3 - x) = 3x - x^2 - 3 + x = -x^2 + 4x - 3$ et
$1 - (x - 2)^2 = 1 - (x^2 - 4x + 4) = -x^2 + 4x - 3$. *(1 pt)*

**3.** a. Forme développée : $-x^2 + 4x - 3 = -3 \iff -x^2 + 4x = 0 \iff x(4 - x) = 0 \iff x = 0$ ou $x = 4$.
Les antécédents de $-3$ sont $0$ et $4$ (tous deux dans $[-2\,;5]$). *(0,5 pt)*
   b. Forme factorisée : $(x - 1)(3 - x) = 0 \iff x = 1$ ou $x = 3$. *(0,5 pt)*
   c. Forme $1 - (x - 2)^2$ : un carré est positif, donc $f(x) \leqslant 1$, avec égalité pour $x = 2$.
   Le nombre $1$ est le **maximum** de $f$ sur $[-2\,;5]$, atteint en $x = 2$. *(1 pt)*

**4.** *(1 pt)*

| $x$ | $-2$ | | $1$ | | $3$ | | $5$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $0$ | $+$ | | $+$ | |
| $3 - x$ | | $+$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |

**5.** $f(-2) = -4 - 8 - 3 = -15$ et $f(5) = -25 + 20 - 3 = -8$. *(0,5 pt)*

| $x$ | $-2$ | | $2$ | | $5$ |
|---|---|---|---|---|---|
| $f$ | $-15$ | $\nearrow$ | $1$ | $\searrow$ | $-8$ |

**6.** a. $f(x) - g(x) = (x - 1)(3 - x) - (x - 1) = (x - 1)(3 - x - 1) = (x - 1)(2 - x)$. *(0,5 pt)*
   b. $f(x) = g(x) \iff (x - 1)(2 - x) = 0 \iff x = 1$ ou $x = 2$.
   Le produit $(x - 1)(2 - x)$ est strictement positif entre ses racines : $f(x) > g(x) \iff x \in\ ]1\,;2[$.
   Graphiquement : la courbe de $f$ et la droite représentant $g$ se coupent aux points
   d'abscisses $1$ et $2$, et la courbe est **au-dessus** de la droite entre ces deux points. *(0,5 pt)*

<!-- notes : sujet original. Programme : docs/programme-seconde-2026.txt — automatismes (l. 246-344), arithmétique :
multiples, pairs, impairs, démonstration « carré d'un impair » et algorithme « plus grand multiple de a inférieur ou
égal à b » (l. 371-384), nombres réels, intervalles et |x − a| ≤ r (l. 385-412), vecteurs, déterminant, milieu,
distance (l. 475-512), fonctions, tableau de signes d'un produit, forme adaptée (l. 413-445, 566-602).
Valeurs vérifiées par script (sympy) : A = 1 ; B = 2√2 ; C = 1/6 ; 8x − 32 ; 2/3 ; mystere(7, 100) = 98 ;
D(−1 ; −4) ; K(1,5 ; −0,5) ; AB = 2√10, AD = √26 ; det = 0 ; m = 11 ; u(9 ; 19) ; f = −(x−1)(x−3) = 1 − (x−2)² ;
antécédents de −3 : 0 et 4 ; f(−2) = −15, f(5) = −8 ; f − g = −(x−1)(x−2). -->
