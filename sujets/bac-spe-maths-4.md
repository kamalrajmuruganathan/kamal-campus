---
id: bac-spe-maths-4
titre: "Bac blanc n°4 — Spé maths : suite homographique, fonction exponentielle, QCM au hasard, cube"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Spécialité mathématiques, bac blanc n°4

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **quatre exercices**, qui sont indépendants. La qualité de la
rédaction, la clarté et la précision des raisonnements sont prises en compte dans la
notation. Toute trace de recherche, même incomplète, sera valorisée.

| Exercice | 1 (Suites) | 2 (Fonction exponentielle) | 3 (Probabilités) | 4 (Espace) | Total |
|---|---|---|---|---|---|
| Points | 5 | 5 | 5 | 5 | 20 |

---

## Exercice 1 — La diffusion d'une application (5 points)

Une ville lance une application de covoiturage. On modélise la proportion des habitants
qui l'utilisent, $n$ semaines après son lancement, par le terme $u_n$ de la suite définie
par $u_0 = 0{,}1$ et, pour tout entier naturel $n$,
$$u_{n+1} = \frac{3u_n}{1 + 2u_n}.$$

1. Calculer $u_1$ et $u_2$.
2. Démontrer par récurrence que, pour tout entier naturel $n$, $0 < u_n < 1$.
3. Montrer que, pour tout entier naturel $n$, $u_{n+1} - u_n = \dfrac{2u_n(1 - u_n)}{1 + 2u_n}$.
   En déduire le sens de variation de la suite $(u_n)$.
4. Justifier que la suite $(u_n)$ est convergente.
5. Pour tout entier naturel $n$, on pose $v_n = \dfrac{u_n}{1 - u_n}$.
   a. Montrer que la suite $(v_n)$ est géométrique de raison $3$ ; préciser $v_0$.
   b. En déduire que, pour tout $n$, $u_n = \dfrac{3^n}{9 + 3^n}$, puis la limite de $(u_n)$.
      Interpréter dans le contexte.
6. On considère la fonction Python suivante.
   ```python
   def diffusion(seuil):
       L = [0.1]
       while L[-1] < seuil:
           u = L[-1]
           L.append(3*u / (1 + 2*u))
       return L
   ```
   a. Que contient la liste renvoyée par `diffusion(0.8)` ?
   b. Que représente `len(diffusion(0.99)) - 1` ? Déterminer cette valeur par le calcul.

---

## Exercice 2 — Une fonction exponentielle (5 points)

On considère la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = x^2\,\mathrm{e}^{-x}$, et on
note $\mathcal{C}$ sa courbe dans un repère orthonormé.

1. Déterminer la limite de $f$ en $-\infty$. On admet que $\displaystyle\lim_{x \to +\infty} f(x) = 0$ ;
   interpréter graphiquement ce résultat.
2. Montrer que, pour tout réel $x$, $f'(x) = x(2 - x)\,\mathrm{e}^{-x}$, puis dresser le tableau
   de variations de $f$ sur $\mathbb{R}$.
3. Montrer que l'équation $f(x) = \dfrac12$ admet exactement deux solutions sur
   $[0\,;+\infty[$, notées $\alpha < \beta$. Donner une valeur approchée de chacune à $10^{-2}$.
4. On admet que, pour tout réel $x$, $f''(x) = (x^2 - 4x + 2)\,\mathrm{e}^{-x}$. Étudier la
   convexité de $f$ et préciser les abscisses des points d'inflexion de $\mathcal{C}$.
5. Déterminer une équation de la tangente $T$ à $\mathcal{C}$ au point d'abscisse $1$.
   Que remarque-t-on ?
6. On pose $J = \displaystyle\int_0^1 x\,\mathrm{e}^{-x}\,\mathrm{d}x$ et $I = \displaystyle\int_0^1 x^2\,\mathrm{e}^{-x}\,\mathrm{d}x$.
   a. À l'aide d'une intégration par parties, montrer que $J = 1 - \dfrac{2}{\mathrm{e}}$.
   b. À l'aide d'une seconde intégration par parties, montrer que $I = 2J - \dfrac{1}{\mathrm{e}}$,
      puis en déduire la valeur exacte de $I$.

---

## Exercice 3 — Répondre au hasard à un QCM (5 points)

Un QCM comporte $20$ questions. Pour chaque question, quatre réponses sont proposées, dont
une seule est exacte. Un élève qui n'a pas révisé répond **au hasard** à chaque question,
de façon indépendante. On note $X$ le nombre de bonnes réponses.

1. Combien de grilles de réponses différentes l'élève peut-il remplir ? Combien de ces grilles
   comportent exactement $5$ bonnes réponses ?
2. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.
3. Calculer $P(X = 5)$ et $P(X \geqslant 10)$, arrondies à $10^{-3}$.
4. Donner l'espérance et la variance de $X$.
5. Chaque bonne réponse rapporte $1$ point et chaque mauvaise réponse enlève $0{,}25$ point.
   On note $S$ la note obtenue.
   a. Montrer que $S = 1{,}25X - 5$.
   b. Calculer l'espérance et la variance de $S$. Le barème décourage-t-il bien les réponses
      au hasard ? Commenter.
   c. Avec quelle probabilité l'élève obtient-il une note supérieure ou égale à $10$ ?
6. L'élève passe deux QCM de ce type, de façon indépendante. On note $T$ la somme des deux
   notes. Calculer l'espérance et la variance de $T$.

---

## Exercice 4 — Dans un cube (5 points)

$\mathrm{ABCDEFGH}$ est un cube d'arête $1$ (les faces $\mathrm{ABCD}$ et $\mathrm{EFGH}$ sont
opposées, $[\mathrm{AE}]$, $[\mathrm{BF}]$, $[\mathrm{CG}]$, $[\mathrm{DH}]$ sont des arêtes). On se
place dans le repère orthonormé
$\left(\mathrm{A}\,;\overrightarrow{\mathrm{AB}},\overrightarrow{\mathrm{AD}},\overrightarrow{\mathrm{AE}}\right)$.

1. Donner les coordonnées des points $\mathrm{B}$, $\mathrm{C}$, $\mathrm{D}$, $\mathrm{E}$, $\mathrm{F}$,
   $\mathrm{G}$, $\mathrm{H}$.
2. Montrer que le vecteur $\overrightarrow{\mathrm{AG}}$ est normal au plan $(\mathrm{BDE})$, puis
   déterminer une équation cartésienne de ce plan.
3. Donner une représentation paramétrique de la droite $(\mathrm{AG})$, puis les coordonnées du
   point $\mathrm{K}$, intersection de $(\mathrm{AG})$ et du plan $(\mathrm{BDE})$. En déduire la
   distance du point $\mathrm{A}$ au plan $(\mathrm{BDE})$.
4. Montrer que le plan $(\mathrm{CFH})$ a pour équation $x + y + z - 2 = 0$. Quelle est la
   position relative des plans $(\mathrm{BDE})$ et $(\mathrm{CFH})$ ? Justifier.
5. La droite $(\mathrm{AG})$ coupe le plan $(\mathrm{CFH})$ en $\mathrm{L}$. Montrer que les points
   $\mathrm{K}$ et $\mathrm{L}$ partagent le segment $[\mathrm{AG}]$ en trois segments de même longueur.
6. Vérifier le résultat de la question 3 en calculant de deux façons le volume du tétraèdre
   $\mathrm{ABDE}$. *On admet que le triangle $\mathrm{BDE}$ est équilatéral.*

---

# Corrigé

## Exercice 1 — La diffusion d'une application

**1.** $u_1 = \dfrac{3 \times 0{,}1}{1 + 0{,}2} = \dfrac{0{,}3}{1{,}2} = 0{,}25$ et
$u_2 = \dfrac{0{,}75}{1{,}5} = 0{,}5$.

**2.** Soit $\mathcal{P}(n)$ : « $0 < u_n < 1$ ».
- *Initialisation* : $u_0 = 0{,}1$ et $0 < 0{,}1 < 1$.
- *Hérédité* : supposons $0 < u_n < 1$. Alors $3u_n > 0$ et $1 + 2u_n > 0$, donc $u_{n+1} > 0$.
  De plus $1 - u_{n+1} = \dfrac{1 + 2u_n - 3u_n}{1 + 2u_n} = \dfrac{1 - u_n}{1 + 2u_n} > 0$, donc $u_{n+1} < 1$.
- *Conclusion* : pour tout $n$, $0 < u_n < 1$.

**3.** $u_{n+1} - u_n = \dfrac{3u_n - u_n(1 + 2u_n)}{1 + 2u_n} = \dfrac{2u_n - 2u_n^2}{1 + 2u_n} = \dfrac{2u_n(1 - u_n)}{1 + 2u_n}$.
D'après la question 2, $u_n > 0$, $1 - u_n > 0$ et $1 + 2u_n > 0$ : $u_{n+1} - u_n > 0$. La suite
est **strictement croissante**.

**4.** La suite est croissante et majorée par $1$ : elle converge.

**5.** a. $v_{n+1} = \dfrac{u_{n+1}}{1 - u_{n+1}} = \dfrac{\dfrac{3u_n}{1 + 2u_n}}{\dfrac{1 - u_n}{1 + 2u_n}} = \dfrac{3u_n}{1 - u_n} = 3v_n$
(calcul de $1 - u_{n+1}$ fait en 2). La suite $(v_n)$ est géométrique de raison $3$ et
$v_0 = \dfrac{0{,}1}{0{,}9} = \dfrac19$.

   b. $v_n = \dfrac{3^n}{9}$. De $v_n = \dfrac{u_n}{1 - u_n}$, on tire $v_n - v_n u_n = u_n$, soit
   $u_n = \dfrac{v_n}{1 + v_n} = \dfrac{3^n / 9}{1 + 3^n / 9} = \dfrac{3^n}{9 + 3^n}$.
   En divisant par $3^n$ : $u_n = \dfrac{1}{9 \times 3^{-n} + 1}$ ; comme $3 > 1$,
   $\displaystyle\lim_{n \to +\infty} 3^{-n} = \lim_{n \to +\infty} \left(\tfrac13\right)^n = 0$, donc $\displaystyle\lim_{n\to+\infty} u_n = 1$.
   À long terme, selon ce modèle, presque tous les habitants utiliseront l'application.

**6.** a. La boucle s'arrête dès que le dernier terme est supérieur ou égal à $0{,}8$ :
`[0.1, 0.25, 0.5, 0.75, 0.9]`, aux erreurs d'arrondi de Python près (car $u_3 = 0{,}75 < 0{,}8$ et $u_4 = \dfrac{81}{90} = 0{,}9$).
   b. C'est le plus petit entier $n$ tel que $u_n \geqslant 0{,}99$ (le nombre de semaines au bout
   duquel au moins $99\,\%$ des habitants utilisent l'application). Comme $u_n$ est croissante :
   $$\frac{3^n}{9 + 3^n} \geqslant 0{,}99 \iff 3^n \geqslant 0{,}99 \times 9 + 0{,}99 \times 3^n \iff 0{,}01 \times 3^n \geqslant 8{,}91 \iff 3^n \geqslant 891.$$
   Comme $\ln$ est croissante : $n \geqslant \dfrac{\ln 891}{\ln 3} \approx 6{,}18$. La valeur renvoyée est $7$
   (on vérifie : $u_6 = \dfrac{729}{738} \approx 0{,}988$ et $u_7 = \dfrac{2\,187}{2\,196} \approx 0{,}996$).

## Exercice 2 — Une fonction exponentielle

**1.** $\displaystyle\lim_{x\to-\infty} x^2 = +\infty$ et $\displaystyle\lim_{x\to-\infty} \mathrm{e}^{-x} = +\infty$, donc par
produit $\displaystyle\lim_{x \to -\infty} f(x) = +\infty$. En $+\infty$ (croissances comparées), la limite $0$
signifie que l'axe des abscisses est **asymptote horizontale** à $\mathcal{C}$ en $+\infty$.

**2.** $f'(x) = 2x\,\mathrm{e}^{-x} + x^2 \times (-\mathrm{e}^{-x}) = (2x - x^2)\,\mathrm{e}^{-x} = x(2 - x)\,\mathrm{e}^{-x}$.
Comme $\mathrm{e}^{-x} > 0$, $f'(x)$ a le signe de $x(2-x)$ : négatif sur $]-\infty\,;0[$, positif sur
$]0\,;2[$, négatif sur $]2\,;+\infty[$.

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f$ | $+\infty$ | $\searrow$ | $0$ | $\nearrow$ | $4\mathrm{e}^{-2}$ | $\searrow$ | $0$ |

avec $f(2) = 4\mathrm{e}^{-2} \approx 0{,}541$.

**3.** Sur $[0\,;2]$, $f$ est continue et strictement croissante, avec $f(0) = 0 < \dfrac12$ et
$f(2) \approx 0{,}541 > \dfrac12$ : d'après le théorème des valeurs intermédiaires (cas strictement
monotone), l'équation admet une unique solution $\alpha$ dans $[0\,;2]$.
Sur $[2\,;+\infty[$, $f$ est continue et strictement décroissante, de $f(2) > \dfrac12$ vers $0 < \dfrac12$ :
une unique solution $\beta$. Il y a donc exactement deux solutions sur $[0\,;+\infty[$ :
$\alpha \approx 1{,}49$ et $\beta \approx 2{,}62$.

**4.** $\mathrm{e}^{-x} > 0$ : $f''(x)$ a le signe du trinôme $x^2 - 4x + 2$, de discriminant $8$ et de
racines $2 - \sqrt2$ et $2 + \sqrt2$. $f$ est **convexe** sur $]-\infty\,;2 - \sqrt2]$ et sur
$[2 + \sqrt2\,;+\infty[$, **concave** sur $[2 - \sqrt2\,;2 + \sqrt2]$. $f''$ s'annule en changeant de
signe en $2 - \sqrt2 \approx 0{,}59$ et $2 + \sqrt2 \approx 3{,}41$ : ce sont les abscisses des deux
points d'inflexion.

**5.** $f(1) = \mathrm{e}^{-1}$ et $f'(1) = 1 \times 1 \times \mathrm{e}^{-1} = \mathrm{e}^{-1}$.
$T : y = \mathrm{e}^{-1}(x - 1) + \mathrm{e}^{-1}$, soit $y = \dfrac{x}{\mathrm{e}}$. La tangente passe par
l'**origine** du repère.

**6.** a. On pose $u(x) = x$, $v'(x) = \mathrm{e}^{-x}$ : $u'(x) = 1$, $v(x) = -\mathrm{e}^{-x}$.
$$J = \big[-x\,\mathrm{e}^{-x}\big]_0^1 + \int_0^1 \mathrm{e}^{-x}\,\mathrm{d}x = -\mathrm{e}^{-1} + \big[-\mathrm{e}^{-x}\big]_0^1 = -\mathrm{e}^{-1} - \mathrm{e}^{-1} + 1 = 1 - \frac{2}{\mathrm{e}}.$$
   b. On pose $u(x) = x^2$, $v'(x) = \mathrm{e}^{-x}$ : $u'(x) = 2x$, $v(x) = -\mathrm{e}^{-x}$.
$$I = \big[-x^2\,\mathrm{e}^{-x}\big]_0^1 + 2\int_0^1 x\,\mathrm{e}^{-x}\,\mathrm{d}x = -\frac{1}{\mathrm{e}} + 2J.$$
   Donc $I = 2\left(1 - \dfrac2{\mathrm{e}}\right) - \dfrac1{\mathrm{e}} = 2 - \dfrac{5}{\mathrm{e}} \approx 0{,}161$.
   Comme $f \geqslant 0$ sur $[0\,;1]$, $I$ est l'aire (en u.a.) du domaine compris entre $\mathcal{C}$,
   l'axe des abscisses et les droites $x = 0$ et $x = 1$.

## Exercice 3 — Répondre au hasard à un QCM

**1.** Pour chacune des $20$ questions, $4$ choix : $4^{20} \approx 1{,}1 \times 10^{12}$ grilles.
Grilles avec exactement $5$ bonnes réponses : on choisit les $5$ questions justes
($\binom{20}{5}$ façons), puis une des $3$ mauvaises réponses pour chacune des $15$ autres :
$\binom{20}{5} \times 3^{15} = 15\,504 \times 14\,348\,907 = 222\,465\,454\,128$ grilles.

**2.** On répète $20$ fois, de façon indépendante, une épreuve de Bernoulli dont le succès
« la réponse est juste » a pour probabilité $\dfrac14$. $X$ compte les succès :
$X \sim \mathcal{B}\left(20\,;\dfrac14\right)$.

**3.** $P(X = 5) = \dbinom{20}{5}\left(\dfrac14\right)^5\left(\dfrac34\right)^{15} \approx 0{,}202$ ;
$P(X \geqslant 10) = 1 - P(X \leqslant 9) \approx 0{,}014$.

**4.** $E(X) = 20 \times \dfrac14 = 5$ et $V(X) = 20 \times \dfrac14 \times \dfrac34 = \dfrac{15}{4} = 3{,}75$.

**5.** a. Il y a $X$ bonnes réponses et $20 - X$ mauvaises :
$S = X - 0{,}25(20 - X) = 1{,}25X - 5$.
   b. Par linéarité : $E(S) = 1{,}25 \times 5 - 5 = 1{,}25$. Et $V(S) = 1{,}25^2 \times V(X) = 1{,}562\,5 \times 3{,}75 \approx 5{,}86$
   (écart type $\approx 2{,}42$). En moyenne, répondre au hasard rapporte seulement $1{,}25$ point
   sur $20$ : le barème décourage bien cette stratégie (sans pénalité, l'espérance serait de $5$).
   c. $S \geqslant 10 \iff 1{,}25X \geqslant 15 \iff X \geqslant 12$. À la calculatrice,
   $P(X \geqslant 12) \approx 0{,}000\,9$ : c'est presque impossible.

**6.** Les deux notes $S_1$ et $S_2$ sont indépendantes et suivent la loi de $S$ :
$E(T) = E(S_1) + E(S_2) = 2{,}5$ et $V(T) = V(S_1) + V(S_2) = 2 \times \dfrac{375}{64} = \dfrac{375}{32} \approx 11{,}72$.

## Exercice 4 — Dans un cube

**1.** $\mathrm{B}(1\,;0\,;0)$, $\mathrm{C}(1\,;1\,;0)$, $\mathrm{D}(0\,;1\,;0)$, $\mathrm{E}(0\,;0\,;1)$,
$\mathrm{F}(1\,;0\,;1)$, $\mathrm{G}(1\,;1\,;1)$, $\mathrm{H}(0\,;1\,;1)$.

**2.** $\overrightarrow{\mathrm{AG}}\begin{pmatrix}1\\1\\1\end{pmatrix}$, $\overrightarrow{\mathrm{BD}}\begin{pmatrix}-1\\1\\0\end{pmatrix}$,
$\overrightarrow{\mathrm{BE}}\begin{pmatrix}-1\\0\\1\end{pmatrix}$ (non colinéaires).
$\overrightarrow{\mathrm{AG}} \cdot \overrightarrow{\mathrm{BD}} = -1 + 1 + 0 = 0$ et
$\overrightarrow{\mathrm{AG}} \cdot \overrightarrow{\mathrm{BE}} = -1 + 0 + 1 = 0$ : $\overrightarrow{\mathrm{AG}}$ est normal
au plan $(\mathrm{BDE})$. Équation : $x + y + z + d = 0$ avec $\mathrm{B}$ : $1 + d = 0$, d'où
$(\mathrm{BDE}) : x + y + z - 1 = 0$.

**3.** $(\mathrm{AG}) : \begin{cases} x = t \\ y = t \\ z = t \end{cases}$ ($t \in \mathbb{R}$).
$t + t + t - 1 = 0 \iff t = \dfrac13$ : $\mathrm{K}\left(\dfrac13\,;\dfrac13\,;\dfrac13\right)$.
Comme $(\mathrm{AG})$ est orthogonale au plan, $\mathrm{K}$ est le projeté orthogonal de $\mathrm{A}$
sur $(\mathrm{BDE})$ et la distance cherchée est
$\mathrm{AK} = \sqrt{3 \times \dfrac19} = \dfrac{1}{\sqrt3} = \dfrac{\sqrt3}{3} \approx 0{,}577$.

**4.** $\mathrm{C}$ : $1 + 1 + 0 - 2 = 0$ ; $\mathrm{F}$ : $1 + 0 + 1 - 2 = 0$ ; $\mathrm{H}$ : $0 + 1 + 1 - 2 = 0$.
Les trois points (non alignés) vérifient l'équation, qui est donc celle du plan
$(\mathrm{CFH})$. Les deux plans ont le même vecteur normal $\overrightarrow{\mathrm{AG}}$ : ils sont
**parallèles** ; ils sont distincts car $\mathrm{B}$ n'appartient pas à $(\mathrm{CFH})$ ($1 \neq 2$).

**5.** $3t - 2 = 0 \iff t = \dfrac23$ : $\mathrm{L}\left(\dfrac23\,;\dfrac23\,;\dfrac23\right)$.
Les points $\mathrm{A}$, $\mathrm{K}$, $\mathrm{L}$, $\mathrm{G}$ correspondent aux paramètres
$0$, $\dfrac13$, $\dfrac23$, $1$ : $\overrightarrow{\mathrm{AK}} = \overrightarrow{\mathrm{KL}} = \overrightarrow{\mathrm{LG}} = \dfrac13\overrightarrow{\mathrm{AG}}$.
Donc $\mathrm{AK} = \mathrm{KL} = \mathrm{LG} = \dfrac{\sqrt3}{3}$ : la diagonale est partagée en trois.

**6.** Avec la base $\mathrm{ABD}$ (aire $\dfrac12$) et la hauteur $\mathrm{AE} = 1$ :
$V = \dfrac13 \times \dfrac12 \times 1 = \dfrac16$.
Avec la base $\mathrm{BDE}$, triangle équilatéral de côté $\mathrm{BD} = \sqrt2$, d'aire
$\dfrac{\sqrt3}{4} \times (\sqrt2)^2 = \dfrac{\sqrt3}{2}$, et la hauteur $\mathrm{AK}$ :
$V = \dfrac13 \times \dfrac{\sqrt3}{2} \times \mathrm{AK}$. En égalant : $\mathrm{AK} = \dfrac{6 \times \frac16}{\sqrt3} = \dfrac{1}{\sqrt3}$,
ce qui confirme le résultat de la question 3.

<!-- notes : sujet original (pas une annale). Programme : docs/programme-terminale-specialite-maths-2027.txt — récurrence,
suites croissantes majorées, suite géométrique, listes Python (« Notion de liste »), limites et croissances comparées,
TVI (cas strictement monotone), convexité et points d'inflexion, intégration par parties, dénombrement (k-uplets,
combinaisons), loi binomiale, linéarité de l'espérance, V(aX) = a²V(X), V(X+Y) = V(X)+V(Y) pour X, Y indépendantes,
vecteur normal, équation de plan, projeté orthogonal.
Valeurs vérifiées par script (sympy) : u = 0,1 ; 0,25 ; 0,5 ; 0,75 ; 0,9 ; u6 ≈ 0,9878 ; u7 ≈ 0,9959 ; ln 891/ln 3 ≈ 6,18 ;
f(2) = 4e⁻² ≈ 0,5413 ; α ≈ 1,488 ; β ≈ 2,618 ; inflexions 2 ± √2 ; T : y = x/e ; I = 2 − 5/e ≈ 0,1606 ;
C(20,5)×3¹⁵ = 222 465 454 128 ; 4²⁰ ≈ 1,0995×10¹² ; P(X=5) ≈ 0,2023 ; P(X≥10) ≈ 0,0139 ; P(X≥12) ≈ 0,00094 ;
E(S) = 1,25 ; V(S) = 375/64 ≈ 5,859 ; cube : K(1/3), L(2/3), V = 1/6. -->
