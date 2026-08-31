---
id: sj-mathematiques-02
titre: "Sujet type bac n°2 — Spé maths : logarithme, géométrie dans l'espace, probabilités"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Épreuve de spécialité mathématiques (sujet d'entraînement n°2)

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée** (mode examen).

Le candidat traite les **trois exercices**, qui sont **indépendants**. La qualité de la rédaction, la clarté et la précision des raisonnements sont prises en compte dans la notation. Toute trace de recherche, même incomplète, sera valorisée.

| Exercice | 1 (Fonction ln + intégrale) | 2 (Géométrie dans l'espace) | 3 (Probabilités) | Total |
|---|---|---|---|---|
| Points | 7 | 7 | 6 | 20 |

---

## Exercice 1 — Fonction logarithme et intégrale (7 points)

On considère la fonction $f$ définie sur $]0\,;+\infty[$ par
$$f(x) = 1 + \ln x - x.$$
On note $\mathcal{C}_f$ sa courbe représentative.

1. Déterminer les limites de $f$ en $0^+$ et en $+\infty$. Pour la limite en $+\infty$, on pourra écrire $f(x) = x\left(\dfrac{1}{x} + \dfrac{\ln x}{x} - 1\right)$.
2. Calculer $f'(x)$ et montrer que $f'(x) = \dfrac{1-x}{x}$.
3. Étudier les variations de $f$ sur $]0\,;+\infty[$ et dresser son tableau de variations.
4. En déduire que, pour tout $x > 0$, $\ln x \le x - 1$, l'égalité n'ayant lieu que pour $x = 1$.
5. Étudier la convexité de $f$ sur $]0\,;+\infty[$.
6. On pose $\displaystyle J = \int_1^{e} f(x)\,\mathrm{d}x$.
   a. Vérifier que $F(x) = x\ln x - \dfrac{x^2}{2}$ est une primitive de $f$ sur $]0\,;+\infty[$. *(On rappelle qu'une primitive de $\ln$ est $x\mapsto x\ln x - x$.)*
   b. Calculer la valeur exacte de $J$.
   c. En déduire, en unités d'aire, l'aire du domaine compris entre $\mathcal{C}_f$, l'axe des abscisses et les droites $x=1$ et $x=e$.

---

## Exercice 2 — Géométrie dans l'espace (7 points)

L'espace est rapporté à un repère orthonormé $(O\,;\,\vec\imath,\,\vec\jmath,\,\vec k)$. On considère les points
$$A(1\,;1\,;0), \quad B(2\,;3\,;1), \quad C(0\,;2\,;2), \quad D(3\,;1\,;2).$$

1. Déterminer les coordonnées des vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$, puis justifier que les points $A$, $B$ et $C$ ne sont pas alignés.
2. Montrer que le vecteur $\vec n(1\,;-1\,;1)$ est normal au plan $(ABC)$.
3. En déduire qu'une équation cartésienne du plan $(ABC)$ est $x - y + z = 0$.
4. Le point $D$ appartient-il au plan $(ABC)$ ? Justifier.
5. Déterminer une représentation paramétrique de la droite $\Delta$ passant par $D$ et orthogonale au plan $(ABC)$.
6. Déterminer les coordonnées du point $H$, projeté orthogonal de $D$ sur le plan $(ABC)$.
7. En déduire la distance du point $D$ au plan $(ABC)$.
8. Montrer que l'aire du triangle $ABC$ vaut $\dfrac{3\sqrt3}{2}$, puis calculer le volume du tétraèdre $ABCD$.
   *(On rappelle : volume d'un tétraèdre $= \tfrac13 \times \text{aire de la base} \times \text{hauteur}$.)*

---

## Exercice 3 — Probabilités (6 points)

Un jeu de hasard se déroule ainsi : le joueur mise $2$ € puis tire au hasard une boule dans une urne contenant $10$ boules indiscernables au toucher :
- $6$ boules rouges : le joueur ne reçoit rien ;
- $3$ boules vertes : le joueur reçoit $3$ € ;
- $1$ boule jaune : le joueur reçoit $5$ €.

On note $X$ la variable aléatoire égale au **gain algébrique** du joueur (somme reçue diminuée de la mise), exprimé en euros.

### Partie A

1. Justifier que $X$ prend les valeurs $-2$, $1$ et $3$, et déterminer la loi de probabilité de $X$.
2. Calculer l'espérance $E(X)$. Le jeu est-il favorable au joueur ?
3. Calculer la variance $V(X)$ et l'écart-type $\sigma(X)$ (valeur approchée à $10^{-2}$).

### Partie B

Le joueur effectue $8$ parties identiques et indépendantes. On dit qu'une partie est *gagnante* lorsque la boule tirée est verte ou jaune. On note $Y$ la variable aléatoire égale au nombre de parties gagnantes.

1. Justifier que $Y$ suit une loi binomiale dont on donnera les paramètres.
2. Calculer la probabilité que le joueur ne remporte aucune partie gagnante (arrondir à $10^{-3}$).
3. Calculer la probabilité qu'il remporte exactement $2$ parties gagnantes (arrondir à $10^{-3}$).
4. Déterminer $E(Y)$ et interpréter.

---

## Corrigé

### Exercice 1

**1.** En $0^+$ : $\ln x \to -\infty$, et $1 - x \to 1$, donc $f(x) \to -\infty$. Donc $\boxed{\lim_{x\to 0^+} f(x) = -\infty}$.
En $+\infty$ : $f(x) = x\left(\dfrac1x + \dfrac{\ln x}{x} - 1\right)$. Or $\dfrac1x \to 0$ et $\dfrac{\ln x}{x} \to 0$ (croissances comparées), donc la parenthèse tend vers $-1$ ; comme $x \to +\infty$, on obtient $\boxed{\lim_{x\to+\infty} f(x) = -\infty}$.

**2.** $f'(x) = 0 + \dfrac1x - 1 = \dfrac{1}{x} - 1 = \dfrac{1 - x}{x}$.

**3.** Sur $]0\,;+\infty[$, $x > 0$ donc $f'(x)$ a le signe de $1 - x$ : $f'(x) > 0$ pour $0 < x < 1$, $f'(x) < 0$ pour $x > 1$, $f'(1) = 0$. Donc $f$ est croissante sur $]0\,;1]$ et décroissante sur $[1\,;+\infty[$, avec un maximum $f(1) = 1 + \ln 1 - 1 = 0$.

| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f$ | $-\infty$ | $\nearrow$ | $0$ | $\searrow$ | $-\infty$ |

**4.** D'après le tableau, le maximum de $f$ sur $]0\,;+\infty[$ vaut $0$, atteint uniquement en $x=1$. Donc pour tout $x>0$, $f(x) \le 0$, soit $1 + \ln x - x \le 0$, c'est-à-dire $\ln x \le x - 1$, avec égalité seulement si $x = 1$.

**5.** $f'(x) = \dfrac1x - 1$, donc $f''(x) = -\dfrac{1}{x^2} < 0$ sur $]0\,;+\infty[$. La fonction $f$ est donc **concave** sur $]0\,;+\infty[$.

**6.a.** $F(x) = x\ln x - \dfrac{x^2}{2}$. On dérive : $F'(x) = \big(\ln x + x\cdot\tfrac1x\big) - \dfrac{2x}{2} = \ln x + 1 - x = f(x)$. Donc $F$ est bien une primitive de $f$.

**6.b.** $\displaystyle J = F(e) - F(1)$.
$F(e) = e\ln e - \dfrac{e^2}{2} = e - \dfrac{e^2}{2}$ (car $\ln e = 1$) ; $F(1) = 1\cdot\ln 1 - \dfrac{1}{2} = -\dfrac12$.
$$J = \left(e - \frac{e^2}{2}\right) - \left(-\frac12\right) = e - \frac{e^2}{2} + \frac12.$$
Valeur approchée : $J \approx 2{,}718 - 3{,}695 + 0{,}5 \approx -0{,}476$.

**6.c.** Sur $[1\,;e]$, $f(x) \le 0$ (d'après la question 4, puisque $\ln x \le x-1$). L'aire cherchée vaut donc $\displaystyle \mathcal{A} = \int_1^e \big(-f(x)\big)\,\mathrm{d}x = -J = \frac{e^2}{2} - e - \frac12 \approx 0{,}48$ unité d'aire.

### Exercice 2

**1.** $\overrightarrow{AB} = (2-1\,;\,3-1\,;\,1-0) = (1\,;2\,;1)$ ; $\overrightarrow{AC} = (0-1\,;\,2-1\,;\,2-0) = (-1\,;1\,;2)$.
Ces vecteurs ne sont pas colinéaires (les coordonnées ne sont pas proportionnelles : $\tfrac{1}{-1} \ne \tfrac{2}{1}$), donc $A$, $B$, $C$ ne sont **pas alignés** et définissent un plan.

**2.** $\vec n(1\,;-1\,;1)$. On calcule les produits scalaires :
$\vec n \cdot \overrightarrow{AB} = 1\times1 + (-1)\times2 + 1\times1 = 1 - 2 + 1 = 0$ ;
$\vec n \cdot \overrightarrow{AC} = 1\times(-1) + (-1)\times1 + 1\times2 = -1 - 1 + 2 = 0$.
$\vec n$ est orthogonal à deux vecteurs non colinéaires du plan $(ABC)$ : c'est donc un **vecteur normal** à ce plan.

**3.** Le plan $(ABC)$ a une équation de la forme $x - y + z + d = 0$. Comme $A(1\,;1\,;0)$ y appartient : $1 - 1 + 0 + d = 0$, d'où $d = 0$. Une équation cartésienne est donc $\boxed{x - y + z = 0}$.
*(Vérification : $B$ : $2-3+1=0$ ; $C$ : $0-2+2=0$.)*

**4.** Pour $D(3\,;1\,;2)$ : $3 - 1 + 2 = 4 \ne 0$. Donc $D \notin (ABC)$.

**5.** $\Delta$ passe par $D(3\,;1\,;2)$ et a pour vecteur directeur $\vec n(1\,;-1\,;1)$ :
$$\Delta : \begin{cases} x = 3 + t \\ y = 1 - t \\ z = 2 + t \end{cases}, \quad t \in \mathbb{R}.$$

**6.** $H$ est l'intersection de $\Delta$ et du plan $(ABC)$. On reporte dans $x - y + z = 0$ :
$(3+t) - (1-t) + (2+t) = 0 \iff 3 + t - 1 + t + 2 + t = 0 \iff 4 + 3t = 0 \iff t = -\dfrac43$.
D'où $H\left(3 - \tfrac43\,;\,1 + \tfrac43\,;\,2 - \tfrac43\right) = \left(\dfrac53\,;\,\dfrac73\,;\,\dfrac23\right)$.
*(Vérification : $\tfrac53 - \tfrac73 + \tfrac23 = 0$.)*

**7.** $\overrightarrow{DH} = H - D = \left(\tfrac53 - 3\,;\,\tfrac73 - 1\,;\,\tfrac23 - 2\right) = \left(-\tfrac43\,;\,\tfrac43\,;\,-\tfrac43\right)$.
$DH = \sqrt{\left(\tfrac43\right)^2 \times 3} = \dfrac43\sqrt3 = \dfrac{4\sqrt3}{3}$.
La distance de $D$ au plan $(ABC)$ est donc $\dfrac{4\sqrt3}{3} \approx 2{,}31$.
*(Contrôle par la formule : $\dfrac{|3-1+2|}{\sqrt{1^2+(-1)^2+1^2}} = \dfrac{4}{\sqrt3} = \dfrac{4\sqrt3}{3}$.)*

**8.** Aire de $ABC$ : le produit vectoriel $\overrightarrow{AB}\wedge\overrightarrow{AC}$ a pour coordonnées
$(2\cdot2 - 1\cdot1\,;\,1\cdot(-1) - 1\cdot2\,;\,1\cdot1 - 2\cdot(-1)) = (3\,;-3\,;3)$, de norme $\sqrt{9+9+9} = 3\sqrt3$.
Donc $\mathcal{A}_{ABC} = \dfrac12\,\|\overrightarrow{AB}\wedge\overrightarrow{AC}\| = \dfrac{3\sqrt3}{2}$.
Volume du tétraèdre : $V = \dfrac13 \times \mathcal{A}_{ABC} \times DH = \dfrac13 \times \dfrac{3\sqrt3}{2} \times \dfrac{4\sqrt3}{3} = \dfrac13 \times \dfrac{3\cdot4\cdot 3}{2\cdot3} = \dfrac13\times 6 = \boxed{2}.$
*(Contrôle par le produit mixte : $\overrightarrow{AD}=(2\,;0\,;2)$, $\overrightarrow{AD}\cdot(\overrightarrow{AB}\wedge\overrightarrow{AC}) = 2\cdot3 + 0\cdot(-3) + 2\cdot3 = 12$, d'où $V = \tfrac16|12| = 2$.)*

### Exercice 3

**Partie A**

**1.** Si la boule est rouge (probabilité $\tfrac{6}{10}$), le joueur ne reçoit rien : gain $0 - 2 = -2$.
Si elle est verte ($\tfrac{3}{10}$), il reçoit $3$ : gain $3 - 2 = 1$.
Si elle est jaune ($\tfrac{1}{10}$), il reçoit $5$ : gain $5 - 2 = 3$.

| $x_i$ | $-2$ | $1$ | $3$ |
|---|---|---|---|
| $P(X=x_i)$ | $0{,}6$ | $0{,}3$ | $0{,}1$ |

**2.** $E(X) = (-2)\times0{,}6 + 1\times0{,}3 + 3\times0{,}1 = -1{,}2 + 0{,}3 + 0{,}3 = -0{,}6$.
$E(X) = -0{,}60$ € $< 0$ : en moyenne le joueur perd $0{,}60$ € par partie, le jeu est **défavorable au joueur**.

**3.** $E(X^2) = (-2)^2\times0{,}6 + 1^2\times0{,}3 + 3^2\times0{,}1 = 4\times0{,}6 + 0{,}3 + 9\times0{,}1 = 2{,}4 + 0{,}3 + 0{,}9 = 3{,}6$.
$V(X) = E(X^2) - \big(E(X)\big)^2 = 3{,}6 - (-0{,}6)^2 = 3{,}6 - 0{,}36 = 3{,}24$.
$\sigma(X) = \sqrt{3{,}24} = 1{,}80$.

**Partie B**

**1.** Chaque partie est une épreuve de Bernoulli de succès « boule verte ou jaune », de probabilité $p = \tfrac{3}{10} + \tfrac{1}{10} = 0{,}4$. Les $8$ parties sont identiques et indépendantes, donc $Y$ suit la loi binomiale $\mathcal{B}(8\,;\,0{,}4)$.

**2.** $P(Y = 0) = (1 - 0{,}4)^8 = 0{,}6^8 \approx 0{,}017$.

**3.** $P(Y = 2) = \dbinom{8}{2}(0{,}4)^2(0{,}6)^6 = 28 \times 0{,}16 \times 0{,}046656 \approx 0{,}209$.

**4.** $E(Y) = n p = 8 \times 0{,}4 = 3{,}2$. Sur $8$ parties, le joueur remporte en moyenne $3{,}2$ parties gagnantes.
