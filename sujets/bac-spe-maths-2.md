---
id: bac-spe-maths-2
titre: "Bac blanc n°2 — Spé maths"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Spécialité mathématiques, bac blanc n°2

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **quatre exercices**. La qualité de la rédaction, la clarté et la
précision des raisonnements sont prises en compte dans la notation. Toute trace de
recherche, même incomplète, sera valorisée.

| Exercice | 1 (Fonction ln) | 2 (Équa. diff.) | 3 (Probabilités) | 4 (Espace) | Total |
|---|---|---|---|---|---|
| Points | 6 | 5 | 5 | 4 | 20 |

---

## Exercice 1 — Étude d'une fonction logarithme (6 points)

On considère la fonction $f$ définie sur $\left]0\,;+\infty\right[$ par
$$f(x) = x\,(2 - \ln x).$$
On note $\mathcal{C}$ sa courbe représentative dans un repère orthonormé.

1. Déterminer les limites de $f$ aux bornes de son ensemble de définition.
   a. En $0$. *(On rappelle que $\displaystyle\lim_{x\to 0^+} x\ln x = 0$.)*
   b. En $+\infty$.
2. a. Montrer que, pour tout $x \in \left]0\,;+\infty\right[$, $f'(x) = 1 - \ln x$.
   b. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$. On précisera
      la valeur exacte du maximum.
3. Résoudre dans $\left]0\,;+\infty\right[$ l'équation $f(x) = 0$. Donner la valeur exacte
   de la solution.
4. a. Étudier la **convexité** de $f$ sur $\left]0\,;+\infty\right[$.
   b. Déterminer une équation de la tangente $T$ à $\mathcal{C}$ au point d'abscisse $1$.
   c. En déduire la position relative de $\mathcal{C}$ et de $T$.
5. On s'intéresse à l'équation $f(x) = 1$.
   a. Montrer que cette équation admet **exactement deux solutions** sur
      $\left]0\,;+\infty\right[$.
   b. Donner, pour chacune, un encadrement d'amplitude $0{,}1$ obtenu à la calculatrice.

---

## Exercice 2 — Équation différentielle : le refroidissement d'un café (5 points)

Une tasse de café est posée dans une pièce dont la température est constante, égale à
$20\ \text{°C}$. On note $\theta(t)$ la température du café (en °C) à l'instant $t$
(en minutes). La **loi de refroidissement de Newton** conduit à modéliser $\theta$ comme
la solution de l'équation différentielle
$$\theta'(t) = -0{,}2\,\big(\theta(t) - 20\big), \qquad \theta(0) = 80.$$

1. Montrer que cette équation peut s'écrire sous la forme $y' = a\,y + b$ et préciser les
   valeurs de $a$ et $b$.
2. Résoudre l'équation différentielle $y' = -0{,}2\,y + 4$ (solution générale sur
   $\mathbb{R}$).
3. En utilisant la condition initiale, montrer que, pour tout $t \geqslant 0$,
   $$\theta(t) = 20 + 60\,e^{-0{,}2\,t}.$$
4. Déterminer la température du café au bout de $5$ minutes. Arrondir au dixième de degré.
5. Déterminer $\displaystyle\lim_{t\to+\infty} \theta(t)$ et interpréter ce résultat dans le
   contexte.
6. Résoudre l'équation $\theta(t) = 30$ et interpréter le résultat. Donner une valeur
   approchée du temps obtenu au dixième de minute.
7. On admet que la fonction $F$ définie par $F(t) = 20\,t - 300\,e^{-0{,}2\,t}$ est une
   primitive de $\theta$ sur $[0\,;+\infty[$. En déduire la **température moyenne** du café
   pendant les $10$ premières minutes, c'est-à-dire
   $\displaystyle \theta_{\text{moy}} = \frac{1}{10}\int_0^{10} \theta(t)\,\mathrm{d}t$.
   Arrondir au dixième de degré.

---

## Exercice 3 — Probabilités : les lancers francs (5 points)

Une joueuse de basket réussit chaque lancer franc avec la probabilité $0{,}8$,
indépendamment des autres. Les parties A et B sont indépendantes.

### Partie A — Une série de dix lancers

La joueuse effectue une série de $10$ lancers francs. On note $X$ la variable aléatoire
égale au **nombre de lancers réussis**.

1. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.
2. Calculer la probabilité qu'elle réussisse **les $10$ lancers**. Arrondir à $10^{-4}$.
3. Calculer $P(X = 8)$, arrondie à $10^{-4}$.
4. Calculer la probabilité qu'elle réussisse **au moins $8$ lancers**, arrondie à $10^{-4}$.
5. Déterminer l'**espérance** $E(X)$ et l'**écart type** $\sigma(X)$ de $X$. Interpréter la
   valeur de $E(X)$.

### Partie B — Combien de lancers pour être quasi sûre d'en réussir un ?

La joueuse effectue maintenant $n$ lancers francs (avec $n \geqslant 1$).

6. Exprimer, en fonction de $n$, la probabilité qu'elle **ne réussisse aucun** des $n$
   lancers.
7. Déterminer le plus petit entier $n$ pour lequel la probabilité de réussir **au moins un**
   lancer est supérieure ou égale à $0{,}99$. On justifiera par le calcul (usage du
   logarithme attendu).

---

## Exercice 4 — Géométrie dans l'espace (4 points)

L'espace est muni d'un repère orthonormé $\left(O\,;\vec{\imath},\vec{\jmath},\vec{k}\right)$.
On considère les points
$$\mathrm{A}(2\,;0\,;0), \qquad \mathrm{B}(0\,;3\,;0), \qquad \mathrm{C}(0\,;0\,;4).$$

1. Déterminer les coordonnées des vecteurs $\overrightarrow{\mathrm{AB}}$ et
   $\overrightarrow{\mathrm{AC}}$.
2. Calculer le produit scalaire $\overrightarrow{\mathrm{AB}} \cdot \overrightarrow{\mathrm{AC}}$.
   Le triangle $\mathrm{ABC}$ est-il rectangle en $\mathrm{A}$ ? Justifier.
3. a. Montrer que le vecteur $\vec{n}\,(6\,;4\,;3)$ est **normal** au plan $(\mathrm{ABC})$.
   b. En déduire qu'une équation cartésienne du plan $(\mathrm{ABC})$ est
      $6x + 4y + 3z - 12 = 0$.
4. Donner une représentation paramétrique de la droite $\Delta$ passant par $O$ et
   **orthogonale** au plan $(\mathrm{ABC})$.
5. Déterminer les coordonnées du point $\mathrm{H}$, intersection de $\Delta$ et du plan
   $(\mathrm{ABC})$.
6. En déduire la distance du point $O$ au plan $(\mathrm{ABC})$. Donner la valeur exacte,
   puis une valeur approchée à $10^{-2}$ près.

---

# Corrigé

## Exercice 1 — Étude d'une fonction logarithme

1. a. Quand $x \to 0^+$ : $2x \to 0$ et $x\ln x \to 0$, donc
   $f(x) = 2x - x\ln x \to 0$. Ainsi $\displaystyle\lim_{x\to 0^+} f(x) = 0$.

   b. On écrit $f(x) = x\,(2 - \ln x)$. Quand $x \to +\infty$, $\ln x \to +\infty$ donc
   $2 - \ln x \to -\infty$, et $x \to +\infty$ ; par produit,
   $\displaystyle\lim_{x\to +\infty} f(x) = -\infty$.

2. a. $f(x) = 2x - x\ln x$. La dérivée de $x\ln x$ est $\ln x + x\times\frac1x = \ln x + 1$,
   donc
   $$f'(x) = 2 - (\ln x + 1) = 1 - \ln x.$$

   b. $f'(x) > 0 \iff \ln x < 1 \iff x < e$. Donc $f$ est **croissante** sur $\left]0\,;e\right]$
   et **décroissante** sur $\left[e\,;+\infty\right[$. Le maximum est atteint en $x = e$ :
   $f(e) = e\,(2 - \ln e) = e\,(2 - 1) = e$.

   | $x$ | $0$ | | $e$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $f'(x)$ | | $+$ | $0$ | $-$ | |
   | $f$ | $0$ | $\nearrow$ | $e$ | $\searrow$ | $-\infty$ |

3. Comme $x > 0$, $f(x) = 0 \iff 2 - \ln x = 0 \iff \ln x = 2 \iff x = e^{2}$. L'unique
   solution est $x = e^{2}$.

4. a. $f'(x) = 1 - \ln x$, donc $f''(x) = -\dfrac{1}{x}$. Pour tout $x > 0$, $f''(x) < 0$ :
   $f$ est **concave** sur $\left]0\,;+\infty\right[$ (et $\mathcal{C}$ n'a pas de point
   d'inflexion).

   b. $f(1) = 1\times(2 - 0) = 2$ et $f'(1) = 1 - \ln 1 = 1$. La tangente $T$ a pour
   équation :
   $$y = f'(1)(x - 1) + f(1) = 1\,(x - 1) + 2 = x + 1.$$

   c. $f$ étant **concave**, la courbe $\mathcal{C}$ est **située au-dessous** de chacune de
   ses tangentes ; en particulier $\mathcal{C}$ est au-dessous de $T$ sur
   $\left]0\,;+\infty\right[$ (avec contact au point d'abscisse $1$).

5. a. $f$ est continue sur $\left]0\,;+\infty\right[$.
   - Sur $\left]0\,;e\right]$, $f$ est continue et **strictement croissante**, de
     $\displaystyle\lim_{x\to 0^+} f = 0$ à $f(e) = e \approx 2{,}72$. Comme
     $1 \in \left]0\,;e\right[$, d'après le théorème des valeurs intermédiaires (corollaire
     pour une fonction strictement monotone), l'équation $f(x) = 1$ admet **une unique**
     solution $\alpha_1$ dans cet intervalle.
   - Sur $\left[e\,;+\infty\right[$, $f$ est continue et **strictement décroissante**, de
     $f(e) = e$ à $-\infty$. Comme $1 \in \left]-\infty\,;e\right[$, l'équation $f(x) = 1$
     admet **une unique** solution $\alpha_2$ dans cet intervalle.

   Au total, $f(x) = 1$ admet **exactement deux solutions** sur $\left]0\,;+\infty\right[$.

   b. À la calculatrice :
   - $f(0{,}3) \approx 0{,}96 < 1$ et $f(0{,}4) \approx 1{,}17 > 1$, donc
     $\alpha_1 \in \left]0{,}3\,;0{,}4\right[$ ;
   - $f(6) \approx 1{,}25 > 1$ et $f(7) \approx 0{,}38 < 1$, donc
     $\alpha_2 \in \left]6\,;7\right[$.

## Exercice 2 — Équation différentielle : le refroidissement d'un café

1. On développe : $\theta'(t) = -0{,}2\,\theta(t) + 0{,}2\times 20 = -0{,}2\,\theta(t) + 4$.
   C'est de la forme $y' = a\,y + b$ avec $a = -0{,}2$ et $b = 4$.

2. Les solutions de $y' = a\,y + b$ (avec $a \neq 0$) sont les fonctions
   $y(t) = C\,e^{a t} - \dfrac{b}{a}$, $C \in \mathbb{R}$. Ici
   $-\dfrac{b}{a} = -\dfrac{4}{-0{,}2} = 20$, donc la solution générale est
   $$y(t) = C\,e^{-0{,}2\,t} + 20, \qquad C \in \mathbb{R}.$$

3. La condition $\theta(0) = 80$ donne $C\,e^{0} + 20 = 80$, soit $C = 60$. Ainsi
   $$\theta(t) = 20 + 60\,e^{-0{,}2\,t}.$$

4. $\theta(5) = 20 + 60\,e^{-0{,}2\times 5} = 20 + 60\,e^{-1} \approx 20 + 22{,}07
   = 42{,}1\ \text{°C}$.

5. Comme $-0{,}2 < 0$, $\displaystyle\lim_{t\to+\infty} e^{-0{,}2\,t} = 0$, donc
   $\displaystyle\lim_{t\to+\infty} \theta(t) = 20$. À long terme, le café se met à
   l'équilibre avec la pièce : sa température tend vers $20\ \text{°C}$.

6. $\theta(t) = 30 \iff 20 + 60\,e^{-0{,}2\,t} = 30 \iff e^{-0{,}2\,t} = \dfrac{10}{60}
   = \dfrac{1}{6}$. En passant au logarithme :
   $-0{,}2\,t = \ln\!\left(\dfrac{1}{6}\right) = -\ln 6$, d'où
   $$t = \frac{\ln 6}{0{,}2} \approx \frac{1{,}792}{0{,}2} \approx 9{,}0\ \text{min}.$$
   Le café atteint $30\ \text{°C}$ au bout d'environ $9{,}0$ minutes.

7. $F$ est une primitive de $\theta$, donc
   $$\int_0^{10} \theta(t)\,\mathrm{d}t = F(10) - F(0)
   = \big(200 - 300\,e^{-2}\big) - \big(0 - 300\,e^{0}\big)
   = 500 - 300\,e^{-2}.$$
   D'où
   $$\theta_{\text{moy}} = \frac{1}{10}\big(500 - 300\,e^{-2}\big)
   = 50 - 30\,e^{-2} \approx 50 - 4{,}06 = 45{,}9\ \text{°C}.$$

## Exercice 3 — Probabilités : les lancers francs

### Partie A

1. On répète $10$ fois, de façon **identique et indépendante**, une épreuve de Bernoulli à
   deux issues (« réussi » avec probabilité $p = 0{,}8$, « raté » sinon). $X$ compte le
   nombre de réussites : $X$ suit la loi binomiale $\mathcal{B}(10\,;\,0{,}8)$.

2. $P(X = 10) = 0{,}8^{10} \approx 0{,}1074$.

3. $P(X = 8) = \dbinom{10}{8}\,0{,}8^{8}\,0{,}2^{2} = 45 \times 0{,}8^{8}\times 0{,}04
   \approx 0{,}3020$.

4. $P(X \geqslant 8) = P(X = 8) + P(X = 9) + P(X = 10)$, avec
   $P(X = 9) = \dbinom{10}{9}\,0{,}8^{9}\,0{,}2 \approx 0{,}2684$. Donc
   $$P(X \geqslant 8) \approx 0{,}3020 + 0{,}2684 + 0{,}1074 = 0{,}6778.$$

5. $E(X) = n\,p = 10 \times 0{,}8 = 8$ et
   $\sigma(X) = \sqrt{n\,p\,(1-p)} = \sqrt{10 \times 0{,}8 \times 0{,}2} = \sqrt{1{,}6}
   \approx 1{,}26$. En moyenne, sur de nombreuses séries de $10$ lancers, la joueuse en
   réussit **$8$**.

### Partie B

6. Rater les $n$ lancers, c'est rater chacun d'eux (indépendance), chacun avec probabilité
   $1 - 0{,}8 = 0{,}2$. La probabilité de n'en réussir **aucun** est donc $0{,}2^{\,n}$.

7. On cherche le plus petit $n$ tel que
   $$1 - 0{,}2^{\,n} \geqslant 0{,}99 \iff 0{,}2^{\,n} \leqslant 0{,}01.$$
   En passant au logarithme népérien (fonction croissante), et comme $\ln 0{,}2 < 0$ (le
   sens de l'inégalité change) :
   $$n\,\ln 0{,}2 \leqslant \ln 0{,}01 \iff n \geqslant \frac{\ln 0{,}01}{\ln 0{,}2}
   \approx \frac{-4{,}605}{-1{,}609} \approx 2{,}86.$$
   Le plus petit entier convenable est $n = 3$.
   *(Vérification : $0{,}2^{3} = 0{,}008 \leqslant 0{,}01$, alors que
   $0{,}2^{2} = 0{,}04 > 0{,}01$.)* À partir de **$3$ lancers**, elle a plus de $99\,\%$ de
   chances d'en réussir au moins un.

## Exercice 4 — Géométrie dans l'espace

1. $\overrightarrow{\mathrm{AB}} = \mathrm{B} - \mathrm{A} = (-2\,;3\,;0)$ et
   $\overrightarrow{\mathrm{AC}} = \mathrm{C} - \mathrm{A} = (-2\,;0\,;4)$.

2. $\overrightarrow{\mathrm{AB}} \cdot \overrightarrow{\mathrm{AC}}
   = (-2)\times(-2) + 3\times 0 + 0\times 4 = 4$.
   Ce produit scalaire est **non nul**, donc les vecteurs ne sont pas orthogonaux : le
   triangle $\mathrm{ABC}$ **n'est pas** rectangle en $\mathrm{A}$.

3. a. $\vec{n}\cdot\overrightarrow{\mathrm{AB}} = 6\times(-2) + 4\times 3 + 3\times 0
   = -12 + 12 + 0 = 0$ et
   $\vec{n}\cdot\overrightarrow{\mathrm{AC}} = 6\times(-2) + 4\times 0 + 3\times 4
   = -12 + 0 + 12 = 0$. Comme $\vec{n}$ est orthogonal à deux vecteurs non colinéaires du
   plan $(\mathrm{ABC})$, c'est un **vecteur normal** à ce plan.

   b. Le plan admet une équation de la forme $6x + 4y + 3z + d = 0$. Il passe par
   $\mathrm{A}(2\,;0\,;0)$ : $6\times 2 + d = 0$, d'où $d = -12$. Une équation cartésienne
   est donc $6x + 4y + 3z - 12 = 0$.
   *(Contrôle : $\mathrm{B}(0\,;3\,;0)$ donne $12 - 12 = 0$ ✓, $\mathrm{C}(0\,;0\,;4)$ donne
   $12 - 12 = 0$ ✓.)*

4. $\Delta$ passe par $O(0\,;0\,;0)$ et a pour vecteur directeur $\vec{n}(6\,;4\,;3)$ :
   $$\begin{cases} x = 6t \\ y = 4t \\ z = 3t \end{cases} \quad (t \in \mathbb{R}).$$

5. On reporte dans l'équation du plan :
   $$6(6t) + 4(4t) + 3(3t) - 12 = 0 \iff 36t + 16t + 9t = 12 \iff 61t = 12
   \iff t = \frac{12}{61}.$$
   D'où $\mathrm{H}\left(\dfrac{72}{61}\,;\dfrac{48}{61}\,;\dfrac{36}{61}\right)$.

6. $\mathrm{H}$ est le projeté orthogonal de $O$ sur le plan, donc la distance cherchée est
   $OH = |t|\times\|\vec{n}\|$ avec $\|\vec{n}\| = \sqrt{6^2 + 4^2 + 3^2} = \sqrt{61}$ :
   $$OH = \frac{12}{61}\times\sqrt{61} = \frac{12}{\sqrt{61}} = \frac{12\sqrt{61}}{61}
   \approx 1{,}54.$$
   *(On retrouve ce résultat par la formule de distance point-plan :
   $\dfrac{|6\times 0 + 4\times 0 + 3\times 0 - 12|}{\sqrt{6^2+4^2+3^2}} = \dfrac{12}{\sqrt{61}}$.)*

<!-- notes : thèmes couverts (variés par rapport à bac-spe-maths.md) — Ex1 fonction logarithme f(x)=x(2−ln x) : limites (croissance comparée), dérivée f'=1−ln x, variations (max f(e)=e), équation f=0 → x=e², convexité (f''=−1/x concave), tangente en 1 (y=x+1) et position, continuité + TVI (f=1 a deux solutions, α1∈]0,3;0,4[, α2∈]6;7[). Ex2 équation différentielle y'=ay+b (refroidissement de Newton) : solution générale, condition initiale θ(t)=20+60e^{−0,2t}, θ(5)≈42,1 °C, limite 20 °C, θ=30 → t=ln6/0,2≈9,0 min, valeur moyenne par intégrale = 50−30e^{−2}≈45,9 °C. Ex3 loi binomiale B(10;0,8) : P(X=10)≈0,1074, P(X=8)≈0,3020, P(X≥8)≈0,6778, E=8, σ=√1,6≈1,26 ; seuil 0,2^n ≤ 0,01 → n=3 (résolu par ln). Ex4 géométrie espace, points A(2;0;0),B(0;3;0),C(0;0;4) : produit scalaire AB·AC=4 (pas rectangle en A), vecteur normal n(6;4;3), plan 6x+4y+3z−12=0, droite orthogonale par O, intersection H(72/61;48/61;36/61), distance 12/√61≈1,54. Comparaison à bac-spe-maths.md (exp, aire par intégrale, arbre+Bayes+B(20;0,05), cube plan BDE) : chapitres et contextes distincts (logarithme au lieu d'exp, équa. diff. au lieu d'aire, binomiale seuil au lieu d'arbre, plan par intercepts au lieu du cube). Programme spé terminale. Tous les calculs vérifiés numériquement. Points à vérifier en relecture : encadrements de l'Ex1 Q5b (valeurs calculatrice) ; homogénéité des arrondis (10^{-4} binomiale, 10^{-2} distance, dixième de degré). -->
