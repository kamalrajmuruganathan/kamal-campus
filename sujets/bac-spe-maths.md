---
id: bac-spe-maths
titre: "Bac général — Mathématiques, spécialité (sujet d'entraînement)"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Épreuve de spécialité mathématiques (entraînement)

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **quatre exercices**. La qualité de la rédaction, la clarté et
la précision des raisonnements sont prises en compte dans la notation. Toute trace de
recherche, même incomplète, sera valorisée.

| Exercice | 1 (Suites) | 2 (Fonctions) | 3 (Probabilités) | 4 (Espace) | Total |
|---|---|---|---|---|---|
| Points | 5 | 6 | 5 | 4 | 20 |

---

## Exercice 1 — Suites et récurrence (5 points)

Une réserve naturelle abrite une population de cerfs. Au $1^{\text{er}}$ janvier $2026$,
on y compte $200$ cerfs. Une étude montre que, chaque année, $80\,\%$ des cerfs
présents survivent et que $30$ nouveaux cerfs sont introduits.

On modélise le nombre de cerfs par la suite $(u_n)$, où $u_n$ désigne le nombre de
cerfs au $1^{\text{er}}$ janvier de l'année $2026 + n$. On a donc $u_0 = 200$ et, pour
tout entier naturel $n$,
$$u_{n+1} = 0{,}8\,u_n + 30.$$

1. Calculer $u_1$ et $u_2$.
2. Démontrer par récurrence que, pour tout entier naturel $n$, $u_n > 150$.
3. a. Montrer que, pour tout entier naturel $n$, $u_{n+1} - u_n = 0{,}2\,(150 - u_n)$.
   b. En déduire le sens de variation de la suite $(u_n)$, puis justifier qu'elle est
      convergente.
4. On pose, pour tout entier naturel $n$, $v_n = u_n - 150$.
   a. Démontrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le
      premier terme.
   b. En déduire l'expression de $v_n$, puis de $u_n$, en fonction de $n$.
   c. Déterminer $\displaystyle\lim_{n \to +\infty} u_n$ et interpréter ce résultat dans
      le contexte.
5. On souhaite déterminer la première année où la population sera passée sous les
   $155$ cerfs. Recopier et compléter la ligne manquante de l'algorithme suivant pour
   qu'il renvoie cette valeur de $n$, puis donner la valeur renvoyée.

   ```
   n ← 0
   u ← 200
   tant que ................ faire
       u ← 0.8 × u + 30
       n ← n + 1
   fin tant que
   renvoyer n
   ```

---

## Exercice 2 — Fonction, exponentielle et intégrale (6 points)

On considère la fonction $f$ définie sur $[0\,;+\infty[$ par
$$f(x) = (x - 1)\,e^{-x}.$$
On note $\mathcal{C}$ sa courbe représentative dans un repère orthonormé.

1. a. Calculer $f(0)$.
   b. Déterminer $\displaystyle\lim_{x \to +\infty} f(x)$. On rappelle que
      $\displaystyle\lim_{x \to +\infty} x\,e^{-x} = 0$.
2. a. Montrer que, pour tout $x \in [0\,;+\infty[$, $f'(x) = (2 - x)\,e^{-x}$.
   b. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$ sur
      $[0\,;+\infty[$. On précisera la valeur exacte du maximum.
3. Résoudre dans $[0\,;+\infty[$ l'équation $f(x) = 0$. Que représente graphiquement la
   solution ?
4. a. On admet que $f$ est deux fois dérivable. Montrer que $f''(x) = (x - 3)\,e^{-x}$.
   b. En déduire l'abscisse du point d'inflexion de la courbe $\mathcal{C}$.
5. On souhaite calculer l'aire, en unités d'aire, du domaine compris entre la courbe
   $\mathcal{C}$, l'axe des abscisses et les droites d'équations $x = 1$ et $x = 3$.
   a. Justifier que $f(x) \geqslant 0$ pour tout $x$ de l'intervalle $[1\,;3]$.
   b. Vérifier que la fonction $F$ définie sur $[0\,;+\infty[$ par $F(x) = -x\,e^{-x}$
      est une primitive de $f$.
   c. En déduire la valeur exacte de cette aire, puis une valeur approchée à $10^{-2}$
      près.

---

## Exercice 3 — Probabilités : conditionnelles et loi binomiale (5 points)

Une usine assemble des cartes électroniques. Les composants qu'elle utilise
proviennent de deux fournisseurs : $60\,\%$ des composants viennent du fournisseur $A$
et le reste du fournisseur $B$. On sait de plus que :

- $4\,\%$ des composants du fournisseur $A$ sont défectueux ;
- $6{,}5\,\%$ des composants du fournisseur $B$ sont défectueux.

On prélève un composant au hasard dans le stock. On note :
$A$ « le composant vient du fournisseur $A$ », $B$ « le composant vient du fournisseur
$B$ » et $D$ « le composant est défectueux ».

### Partie A

1. Construire un arbre pondéré décrivant cette situation.
2. Calculer la probabilité $P(A \cap D)$.
3. Démontrer que la probabilité qu'un composant prélevé au hasard soit défectueux est
   $P(D) = 0{,}05$.
4. Un composant prélevé est défectueux. Quelle est la probabilité qu'il provienne du
   fournisseur $A$ ? On donnera la valeur exacte.

### Partie B

On prélève au hasard $20$ composants dans un très grand stock. Le stock est
suffisamment grand pour que ce prélèvement soit assimilé à un tirage successif avec
remise. On note $X$ la variable aléatoire égale au nombre de composants défectueux
parmi les $20$ prélevés. On admet, d'après la partie A, que la probabilité qu'un
composant soit défectueux est $0{,}05$.

1. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.
2. Calculer $P(X = 0)$, arrondie à $10^{-4}$.
3. Calculer la probabilité qu'au moins un composant soit défectueux, arrondie à
   $10^{-4}$.
4. Calculer $P(X \leqslant 2)$, arrondie à $10^{-4}$.
5. Déterminer l'espérance $E(X)$ et interpréter ce résultat.

---

## Exercice 4 — Géométrie dans l'espace (4 points)

On considère le cube $\mathrm{ABCDEFGH}$ d'arête $1$. On munit l'espace du repère
orthonormé $\left(\mathrm{A}\,;\ \overrightarrow{\mathrm{AB}},\ \overrightarrow{\mathrm{AD}},\ \overrightarrow{\mathrm{AE}}\right)$.
Dans ce repère, on a :
$$\mathrm{A}(0\,;0\,;0),\quad \mathrm{B}(1\,;0\,;0),\quad \mathrm{D}(0\,;1\,;0),\quad
\mathrm{E}(0\,;0\,;1),\quad \mathrm{G}(1\,;1\,;1).$$

1. Déterminer les coordonnées des vecteurs $\overrightarrow{\mathrm{BD}}$ et
   $\overrightarrow{\mathrm{BE}}$.
2. a. Montrer que le vecteur $\vec{n}\,(1\,;1\,;1)$ est normal au plan
      $(\mathrm{BDE})$.
   b. En déduire qu'une équation cartésienne du plan $(\mathrm{BDE})$ est
      $x + y + z - 1 = 0$.
3. Donner une représentation paramétrique de la droite $(\mathrm{AG})$.
4. Démontrer que la droite $(\mathrm{AG})$ coupe le plan $(\mathrm{BDE})$ en un unique
   point $\mathrm{K}$ dont on déterminera les coordonnées.
5. a. Montrer que le triangle $\mathrm{BDE}$ est équilatéral.
   b. Justifier que $\mathrm{K}$ est le centre de gravité du triangle $\mathrm{BDE}$ et
      que $(\mathrm{AG})$ est perpendiculaire au plan $(\mathrm{BDE})$.
   c. En déduire la distance du point $\mathrm{A}$ au plan $(\mathrm{BDE})$.

---

# Corrigé

## Exercice 1 — Suites et récurrence

1. $u_1 = 0{,}8 \times 200 + 30 = 160 + 30 = 190$, puis
   $u_2 = 0{,}8 \times 190 + 30 = 152 + 30 = 182$.

2. Notons $P(n)$ la propriété « $u_n > 150$ ».
   **Initialisation :** $u_0 = 200 > 150$, donc $P(0)$ est vraie.
   **Hérédité :** supposons $u_k > 150$ pour un entier $k$ fixé. En multipliant par
   $0{,}8 > 0$ puis en ajoutant $30$ :
   $$u_{k+1} = 0{,}8\,u_k + 30 > 0{,}8 \times 150 + 30 = 120 + 30 = 150.$$
   Donc $P(k+1)$ est vraie.
   **Conclusion :** par récurrence, $u_n > 150$ pour tout entier naturel $n$.

3. a. $u_{n+1} - u_n = (0{,}8\,u_n + 30) - u_n = -0{,}2\,u_n + 30 = 0{,}2\,(150 - u_n)$.

   b. D'après la question 2, $u_n > 150$, donc $150 - u_n < 0$, d'où
   $u_{n+1} - u_n = 0{,}2\,(150 - u_n) < 0$. La suite $(u_n)$ est donc
   **strictement décroissante**. Étant décroissante et minorée par $150$, elle est
   **convergente** (théorème de convergence des suites monotones).

4. a. Pour tout $n$ :
   $$v_{n+1} = u_{n+1} - 150 = 0{,}8\,u_n + 30 - 150 = 0{,}8\,u_n - 120
   = 0{,}8\,(u_n - 150) = 0{,}8\,v_n.$$
   Donc $(v_n)$ est **géométrique de raison $q = 0{,}8$** et de premier terme
   $v_0 = u_0 - 150 = 50$.

   b. On en déduit $v_n = 50 \times 0{,}8^{\,n}$, puis
   $$u_n = v_n + 150 = 150 + 50 \times 0{,}8^{\,n}.$$
   *(Contrôle : $u_1 = 150 + 50\times 0{,}8 = 190$ ✓.)*

   c. Comme $-1 < 0{,}8 < 1$, on a $\displaystyle\lim_{n\to+\infty} 0{,}8^{\,n} = 0$,
   donc $\displaystyle\lim_{n\to+\infty} u_n = 150$. À long terme, la population se
   stabilise autour de **$150$ cerfs**.

5. Il faut poursuivre la boucle **tant que la population n'est pas encore passée sous
   $155$**, donc tant que $u \geqslant 155$. La ligne à compléter est :
   `tant que u ≥ 155 faire`.
   On cherche le plus petit $n$ tel que $u_n < 155$, soit $50 \times 0{,}8^{\,n} < 5$,
   c'est-à-dire $0{,}8^{\,n} < 0{,}1$. Or $0{,}8^{10} \approx 0{,}107 > 0{,}1$ et
   $0{,}8^{11} \approx 0{,}086 < 0{,}1$. L'algorithme **renvoie $n = 11$**
   ($u_{11} \approx 154{,}3 < 155$, alors que $u_{10} \approx 155{,}4$), soit l'année
   $2026 + 11 = 2037$.

## Exercice 2 — Fonction, exponentielle et intégrale

1. a. $f(0) = (0 - 1)\,e^{0} = -1$.

   b. $f(x) = x\,e^{-x} - e^{-x}$. Or $\displaystyle\lim_{x\to+\infty} x\,e^{-x} = 0$
   (croissance comparée) et $\displaystyle\lim_{x\to+\infty} e^{-x} = 0$, donc
   $\displaystyle\lim_{x\to+\infty} f(x) = 0$. La courbe admet l'axe des abscisses pour
   asymptote horizontale en $+\infty$.

2. a. $f$ est un produit ; avec $u = x - 1$ et $v = e^{-x}$ ($u' = 1$, $v' = -e^{-x}$) :
   $$f'(x) = u'v + uv' = 1\cdot e^{-x} + (x-1)\cdot(-e^{-x}) = e^{-x}\big(1 - (x-1)\big)
   = (2 - x)\,e^{-x}.$$

   b. Comme $e^{-x} > 0$, le signe de $f'(x)$ est celui de $2 - x$ : $f'(x) > 0$ pour
   $x < 2$ et $f'(x) < 0$ pour $x > 2$. La fonction croît sur $[0\,;2]$ puis décroît sur
   $[2\,;+\infty[$. Le maximum est atteint en $x = 2$ et vaut
   $f(2) = (2-1)\,e^{-2} = e^{-2}$.

   | $x$ | $0$ | | $2$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f'(x)$ | | $+$ | $0$ | $-$ | |
   | $f$ | $-1$ | $\nearrow$ | $e^{-2}$ | $\searrow$ | $0$ |

3. Comme $e^{-x} > 0$, $f(x) = 0 \iff x - 1 = 0 \iff x = 1$. L'unique solution est
   $x = 1$ ; elle correspond à l'abscisse du point d'intersection de $\mathcal{C}$ avec
   l'axe des abscisses.

4. a. En dérivant $f'(x) = (2 - x)\,e^{-x}$ (produit, $u = 2-x$, $u' = -1$) :
   $$f''(x) = -1\cdot e^{-x} + (2-x)(-e^{-x}) = e^{-x}\big(-1 - (2 - x)\big)
   = (x - 3)\,e^{-x}.$$

   b. $f''(x)$ a le signe de $x - 3$ : négatif avant $3$, positif après. $f''$ s'annule
   en changeant de signe en $x = 3$, donc la courbe $\mathcal{C}$ admet un **point
   d'inflexion d'abscisse $x = 3$**.

5. a. Sur $[1\,;3]$, on a $x - 1 \geqslant 0$ et $e^{-x} > 0$, donc
   $f(x) = (x-1)\,e^{-x} \geqslant 0$.

   b. Avec $F(x) = -x\,e^{-x}$ ($u = -x$, $v = e^{-x}$) :
   $$F'(x) = -1\cdot e^{-x} + (-x)(-e^{-x}) = -e^{-x} + x\,e^{-x} = (x - 1)\,e^{-x} = f(x).$$
   Donc $F$ est bien une primitive de $f$.

   c. Comme $f \geqslant 0$ sur $[1\,;3]$, l'aire cherchée vaut
   $$\mathcal{A} = \int_1^3 f(x)\,\mathrm{d}x = F(3) - F(1)
   = -3\,e^{-3} - \big(-1\cdot e^{-1}\big) = e^{-1} - 3\,e^{-3}.$$
   Valeur approchée : $\mathcal{A} \approx 0{,}22$ unité d'aire.

## Exercice 3 — Probabilités

### Partie A

1. Arbre pondéré :

   ```
              0,04      D
        A ─────────────
       /│    0,96      D̄
   0,6/ │
     /  
     \  
   0,4\ │    0,065     D
        B ─────────────
              0,935     D̄
   ```

2. $P(A \cap D) = P(A) \times P_A(D) = 0{,}6 \times 0{,}04 = 0{,}024$.

3. D'après la formule des probabilités totales, $A$ et $B$ formant une partition :
   $$P(D) = P(A \cap D) + P(B \cap D) = 0{,}6 \times 0{,}04 + 0{,}4 \times 0{,}065
   = 0{,}024 + 0{,}026 = 0{,}05.$$

4. $$P_D(A) = \frac{P(A \cap D)}{P(D)} = \frac{0{,}024}{0{,}05} = \frac{24}{50}
   = 0{,}48.$$

### Partie B

1. On répète $20$ fois, de façon **identique et indépendante** (tirage avec remise),
   une épreuve de Bernoulli à deux issues : « défectueux » (succès, probabilité
   $p = 0{,}05$) ou non. $X$ compte le nombre de succès : $X$ suit donc la loi
   binomiale $\mathcal{B}(20\,;\,0{,}05)$.

2. $P(X = 0) = \dbinom{20}{0}\,0{,}05^{0}\,0{,}95^{20} = 0{,}95^{20} \approx 0{,}3585$.

3. $P(X \geqslant 1) = 1 - P(X = 0) = 1 - 0{,}95^{20} \approx 0{,}6415$.

4. $P(X \leqslant 2) = P(X=0) + P(X=1) + P(X=2)$ avec
   $P(X=1) = \dbinom{20}{1}\,0{,}05\,0{,}95^{19} \approx 0{,}3774$ et
   $P(X=2) = \dbinom{20}{2}\,0{,}05^{2}\,0{,}95^{18} \approx 0{,}1887$. Donc
   $$P(X \leqslant 2) \approx 0{,}3585 + 0{,}3774 + 0{,}1887 = 0{,}9245.$$

5. $E(X) = n\,p = 20 \times 0{,}05 = 1$. Sur de nombreux prélèvements de $20$
   composants, on compte **en moyenne $1$ composant défectueux** par prélèvement.

## Exercice 4 — Géométrie dans l'espace

1. $\overrightarrow{\mathrm{BD}} = \mathrm{D} - \mathrm{B} = (0-1\,;\,1-0\,;\,0-0)
   = (-1\,;1\,;0)$ et
   $\overrightarrow{\mathrm{BE}} = \mathrm{E} - \mathrm{B} = (-1\,;0\,;1)$.

2. a. $\vec{n}\cdot\overrightarrow{\mathrm{BD}} = 1\times(-1) + 1\times 1 + 1\times 0 = 0$
   et $\vec{n}\cdot\overrightarrow{\mathrm{BE}} = 1\times(-1) + 1\times 0 + 1\times 1 = 0$.
   Comme $\vec{n}$ est orthogonal à deux vecteurs non colinéaires du plan
   $(\mathrm{BDE})$, il en est un **vecteur normal**.

   b. Le plan a une équation de la forme $x + y + z + d = 0$. Il passe par
   $\mathrm{B}(1\,;0\,;0)$ : $1 + 0 + 0 + d = 0$, d'où $d = -1$. Une équation
   cartésienne est donc $x + y + z - 1 = 0$.

3. La droite $(\mathrm{AG})$ passe par $\mathrm{A}(0\,;0\,;0)$ et a pour vecteur
   directeur $\overrightarrow{\mathrm{AG}} = (1\,;1\,;1)$. Représentation paramétrique :
   $$\begin{cases} x = t \\ y = t \\ z = t \end{cases} \quad (t \in \mathbb{R}).$$

4. On cherche $t$ tel que le point $(t\,;t\,;t)$ vérifie l'équation du plan :
   $$t + t + t - 1 = 0 \iff 3t = 1 \iff t = \frac{1}{3}.$$
   Il existe une unique valeur de $t$ : la droite coupe le plan en un unique point
   $$\mathrm{K}\left(\tfrac{1}{3}\,;\,\tfrac{1}{3}\,;\,\tfrac{1}{3}\right).$$

5. a. On calcule les longueurs :
   $\mathrm{BD} = \sqrt{(-1)^2 + 1^2 + 0^2} = \sqrt{2}$,
   $\mathrm{BE} = \sqrt{(-1)^2 + 0^2 + 1^2} = \sqrt{2}$, et
   $\overrightarrow{\mathrm{DE}} = (0\,;-1\,;1)$ donne
   $\mathrm{DE} = \sqrt{0 + 1 + 1} = \sqrt{2}$. Les trois côtés sont égaux : le triangle
   $\mathrm{BDE}$ est **équilatéral**.

   b. Le centre de gravité de $\mathrm{BDE}$ a pour coordonnées la moyenne de celles de
   $\mathrm{B}$, $\mathrm{D}$, $\mathrm{E}$ :
   $\left(\tfrac{1+0+0}{3}\,;\tfrac{0+1+0}{3}\,;\tfrac{0+0+1}{3}\right)
   = \left(\tfrac13\,;\tfrac13\,;\tfrac13\right) = \mathrm{K}$. De plus, le vecteur
   directeur de $(\mathrm{AG})$ est $(1\,;1\,;1) = \vec{n}$, vecteur normal au plan
   $(\mathrm{BDE})$ : la droite $(\mathrm{AG})$ est donc **perpendiculaire** au plan
   $(\mathrm{BDE})$.

   c. Puisque $(\mathrm{AG}) \perp (\mathrm{BDE})$ et coupe ce plan en $\mathrm{K}$, le
   point $\mathrm{K}$ est le projeté orthogonal de $\mathrm{A}$ sur le plan. La distance
   cherchée est donc $\mathrm{AK}$ :
   $$\mathrm{AK} = \sqrt{\left(\tfrac13\right)^2 + \left(\tfrac13\right)^2 + \left(\tfrac13\right)^2}
   = \sqrt{\tfrac{3}{9}} = \sqrt{\tfrac13} = \frac{\sqrt{3}}{3} \approx 0{,}58.$$
   *(On retrouve ce résultat par la formule de distance point-plan :
   $\dfrac{|0 + 0 + 0 - 1|}{\sqrt{1^2+1^2+1^2}} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt3}{3}$.)*

<!-- notes : thèmes couverts — Ex1 suites : récurrence, monotonie, suite auxiliaire géométrique, limite, algorithme de seuil ; Ex2 fonction (x−1)e^{−x} : limites/croissance comparée, dérivée, variations, point d'inflexion (f''), primitive et calcul d'aire par intégrale ; Ex3 probabilités : arbre pondéré, probabilités totales, formule de Bayes, loi binomiale B(20;0,05) et espérance ; Ex4 géométrie dans l'espace : vecteurs, vecteur normal, équation cartésienne de plan, représentation paramétrique, intersection droite/plan, triangle équilatéral, distance point-plan. Programme de spécialité terminale (BO). Résultats vérifiés numériquement : u_n=150+50·0,8^n → lim 150 ; seuil u<155 en n=11 ; aire = e^{-1}−3e^{-3} ≈ 0,22 ; P(D)=0,05 et P_D(A)=0,48 ; P(X=0)≈0,3585, P(X≥1)≈0,6415, P(X≤2)≈0,9245, E(X)=1 ; K(1/3,1/3,1/3), AK=√3/3≈0,58. Points à vérifier à la relecture : rendu de l'arbre pondéré en ASCII (à remplacer éventuellement par un vrai schéma), et arrondis demandés (10^{-4} pour la binomiale, 10^{-2} pour l'aire). -->
