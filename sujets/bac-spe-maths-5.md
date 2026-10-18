---
id: bac-spe-maths-5
titre: "Bac blanc n°5 — Spé maths : perfusion (équation différentielle), trigonométrie, concentration, suite d'intégrales"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Spécialité mathématiques, bac blanc n°5

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **quatre exercices**, qui sont indépendants. La qualité de la
rédaction, la clarté et la précision des raisonnements sont prises en compte dans la
notation. Toute trace de recherche, même incomplète, sera valorisée.

| Exercice | 1 (Équation différentielle) | 2 (Trigonométrie) | 3 (Probabilités) | 4 (Intégrales) | Total |
|---|---|---|---|---|---|
| Points | 5 | 5 | 5 | 5 | 20 |

---

## Exercice 1 — Une perfusion (5 points)

Un patient reçoit un médicament par perfusion à débit constant. On note $C(t)$ la
concentration du médicament dans le sang (en mg/L) à l'instant $t$ (en heures). Au début
de la perfusion, $C(0) = 0$. On admet que, tant que dure la perfusion, la fonction $C$ est
solution de l'équation différentielle
$$(E) : \quad y' = -0{,}5\,y + 2.$$

### Partie A — Pendant la perfusion

1. Déterminer la solution constante de $(E)$.
2. En déduire toutes les solutions de $(E)$, puis montrer que $C(t) = 4\left(1 - \mathrm{e}^{-0{,}5t}\right)$.
3. Étudier le sens de variation de $C$ sur $[0\,;+\infty[$ et sa limite en $+\infty$. Interpréter.
4. Déterminer, par le calcul, l'instant à partir duquel la concentration dépasse $3$ mg/L.
   Donner la valeur exacte, puis une valeur approchée à la minute près.
5. Calculer la valeur moyenne de la concentration sur l'intervalle $[0\,;6]$. Donner la valeur
   exacte puis une valeur approchée à $10^{-2}$.

### Partie B — Après la perfusion

La perfusion est arrêtée à l'instant $t = 6$. Ensuite, la concentration vérifie l'équation
$y' = -0{,}5\,y$.

6. Justifier que, pour $t \geqslant 6$, $C(t) = C(6)\,\mathrm{e}^{-0{,}5(t - 6)}$, et donner une valeur
   approchée de $C(6)$ à $10^{-2}$.
7. Le médicament n'est plus actif lorsque sa concentration est inférieure à $1$ mg/L. Combien
   de temps après l'arrêt de la perfusion cela se produit-il ? Arrondir au dixième d'heure.

---

## Exercice 2 — Un trapèze dans un demi-cercle (5 points)

### Partie A — Étude d'une fonction

On considère la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = (1 + \cos x)\sin x$.

1. Montrer que $f$ est impaire et périodique de période $2\pi$. Expliquer pourquoi il suffit
   de l'étudier sur $[0\,;\pi]$.
2. Montrer que, pour tout réel $x$, $f'(x) = 2\cos^2 x + \cos x - 1$, puis que
   $f'(x) = (2\cos x - 1)(\cos x + 1)$.
3. Résoudre dans $[-\pi\,;\pi]$ l'inéquation $\cos x \geqslant \dfrac12$.
4. Dresser le tableau de variations de $f$ sur $[0\,;\pi]$.

### Partie B — Un problème d'optimisation

Dans un repère orthonormé, on considère le demi-cercle de centre $\mathrm{O}$ et de rayon $1$
situé au-dessus de l'axe des abscisses, ainsi que les points $\mathrm{A}(-1\,;0)$ et
$\mathrm{B}(1\,;0)$. Pour $\theta \in \left]0\,;\dfrac{\pi}{2}\right]$, on place sur le demi-cercle
les points $\mathrm{C}(\cos\theta\,;\sin\theta)$ et $\mathrm{D}(-\cos\theta\,;\sin\theta)$.

5. Justifier que $\mathrm{ABCD}$ est un trapèze et que son aire est égale à $f(\theta)$.
6. Pour quelle valeur de $\theta$ l'aire du trapèze est-elle maximale ? Donner la valeur exacte
   de cette aire maximale. Que peut-on dire alors des longueurs $\mathrm{BC}$, $\mathrm{CD}$ et
   $\mathrm{DA}$ ?

---

## Exercice 3 — Paquets de café (5 points)

Une machine remplit des paquets de café. La masse, en grammes, d'un paquet pris au hasard
est une variable aléatoire $X$ d'espérance $\mu = 250$ et d'écart type $\sigma = 4$.

### Partie A — Inégalité de Bienaymé-Tchebychev

1. Majorer la probabilité qu'un paquet ait une masse qui s'écarte de $250$ g d'au moins $10$ g.
   Interpréter.

### Partie B — Moyenne d'un échantillon

On prélève $n$ paquets ; leurs masses $X_1, \dots, X_n$ sont des variables aléatoires
indépendantes de même loi que $X$. On note $M_n = \dfrac{X_1 + \dots + X_n}{n}$.

2. Donner $E(M_n)$ et $V(M_n)$.
3. Pour $n = 25$, majorer la probabilité $P\big(|M_{25} - 250| \geqslant 2\big)$.
4. Déterminer une taille d'échantillon $n$ pour laquelle la probabilité que la masse moyenne
   s'écarte de $250$ g d'au moins $1$ g est inférieure ou égale à $0{,}05$.

### Partie C — Paquets non conformes

Un paquet est déclaré non conforme s'il est mal fermé. La probabilité qu'un paquet soit non
conforme est $0{,}02$. Les paquets sont conditionnés par cartons de $100$, et on admet que les
états des paquets d'un carton sont indépendants. On note $Y$ le nombre de paquets non
conformes dans un carton.

5. Préciser la loi de $Y$, son espérance et sa variance.
6. Calculer $P(Y = 0)$ et $P(Y \leqslant 2)$, arrondies à $10^{-3}$.
7. Déterminer le plus petit entier $k$ tel que $P(Y \leqslant k) \geqslant 0{,}95$. Interpréter.

---

## Exercice 4 — Une suite d'intégrales (5 points)

Pour tout entier naturel $n$, on pose $I_n = \displaystyle\int_0^1 x^n\,\mathrm{e}^{-x}\,\mathrm{d}x$.

1. Calculer $I_0$.
2. Justifier que, pour tout entier naturel $n$, $I_n \geqslant 0$.
3. Montrer que la suite $(I_n)$ est décroissante.
4. Montrer que, pour tout entier naturel $n$, $\dfrac{1}{\mathrm{e}(n+1)} \leqslant I_n \leqslant \dfrac{1}{n+1}$.
   En déduire la limite de la suite $(I_n)$.
5. À l'aide d'une intégration par parties, montrer que, pour tout entier naturel $n$,
   $$I_{n+1} = (n+1)\,I_n - \frac{1}{\mathrm{e}}.$$
   En déduire les valeurs exactes de $I_1$ et $I_2$.
6. On programme la fonction Python suivante.
   ```python
   from math import exp

   def liste_I(n):
       L = [1 - exp(-1)]
       for k in range(n):
           L.append((k + 1) * L[k] - exp(-1))
       return L
   ```
   a. Que contient la liste `liste_I(2)` ? Donner des valeurs approchées à $10^{-4}$.
   b. L'appel `liste_I(20)` renvoie une liste dont certains des derniers termes sont
      **négatifs**. Pourquoi est-ce impossible ? Proposer une explication.

---

# Corrigé

## Exercice 1 — Une perfusion

**1.** Une fonction constante $y = k$ est solution si $0 = -0{,}5k + 2$, soit $k = 4$.

**2.** Les solutions de $y' = -0{,}5\,y$ sont les fonctions $t \mapsto K\,\mathrm{e}^{-0{,}5t}$
($K \in \mathbb{R}$). Les solutions de $(E)$ sont donc les fonctions
$t \mapsto K\,\mathrm{e}^{-0{,}5t} + 4$. La condition $C(0) = 0$ donne $K + 4 = 0$, soit $K = -4$ :
$$C(t) = 4 - 4\,\mathrm{e}^{-0{,}5t} = 4\left(1 - \mathrm{e}^{-0{,}5t}\right).$$

**3.** $C'(t) = 4 \times 0{,}5\,\mathrm{e}^{-0{,}5t} = 2\,\mathrm{e}^{-0{,}5t} > 0$ : $C$ est strictement
croissante. Comme $\displaystyle\lim_{t \to +\infty} \mathrm{e}^{-0{,}5t} = 0$, $\displaystyle\lim_{t \to +\infty} C(t) = 4$.
La concentration augmente et se stabilise vers $4$ mg/L (concentration d'équilibre).

**4.** $C(t) > 3 \iff 1 - \mathrm{e}^{-0{,}5t} > 0{,}75 \iff \mathrm{e}^{-0{,}5t} < 0{,}25 \iff -0{,}5t < \ln 0{,}25 \iff t > -2\ln 0{,}25 = 2\ln 4 = 4\ln 2$.
$4\ln 2 \approx 2{,}773$ h, soit environ **$2$ h $46$ min** ($0{,}773 \times 60 \approx 46$).

**5.** $$m = \frac{1}{6}\int_0^6 \left(4 - 4\,\mathrm{e}^{-0{,}5t}\right)\mathrm{d}t = \frac16\Big[4t + 8\,\mathrm{e}^{-0{,}5t}\Big]_0^6
= \frac16\left(24 + 8\,\mathrm{e}^{-3} - 8\right) = \frac{8}{3} + \frac{4}{3}\,\mathrm{e}^{-3} \approx 2{,}73 \ \text{mg/L}.$$

**6.** Les solutions de $y' = -0{,}5\,y$ sont de la forme $t \mapsto K\,\mathrm{e}^{-0{,}5t}$. La condition
en $t = 6$ donne $K\,\mathrm{e}^{-3} = C(6)$, donc $K = C(6)\,\mathrm{e}^{3}$ et
$C(t) = C(6)\,\mathrm{e}^{-0{,}5(t-6)}$. Avec la partie A : $C(6) = 4\left(1 - \mathrm{e}^{-3}\right) \approx 3{,}80$ mg/L.

**7.** $C(6)\,\mathrm{e}^{-0{,}5(t-6)} < 1 \iff \mathrm{e}^{-0{,}5(t-6)} < \dfrac{1}{C(6)} \iff -0{,}5(t - 6) < -\ln C(6) \iff t - 6 > 2\ln C(6)$.
$2\ln C(6) \approx 2\ln 3{,}80 \approx 2{,}67$ : le médicament n'est plus actif environ **$2{,}7$ h**
après l'arrêt de la perfusion.

## Exercice 2 — Un trapèze dans un demi-cercle

**1.** Pour tout réel $x$ : $f(-x) = (1 + \cos(-x))\sin(-x) = -(1 + \cos x)\sin x = -f(x)$ ($\cos$ paire,
$\sin$ impaire) : $f$ est impaire. $f(x + 2\pi) = f(x)$ car $\cos$ et $\sin$ sont $2\pi$-périodiques.
Par périodicité, il suffit d'étudier $f$ sur un intervalle de longueur $2\pi$, par exemple
$[-\pi\,;\pi]$ ; par imparité, la courbe sur $[-\pi\,;0]$ se déduit de celle sur $[0\,;\pi]$ par la
symétrie de centre $\mathrm{O}$.

**2.** $f'(x) = -\sin x \times \sin x + (1 + \cos x)\cos x = -\sin^2 x + \cos x + \cos^2 x$.
Avec $\sin^2 x = 1 - \cos^2 x$ : $f'(x) = 2\cos^2 x + \cos x - 1$.
En développant : $(2\cos x - 1)(\cos x + 1) = 2\cos^2 x + 2\cos x - \cos x - 1 = 2\cos^2 x + \cos x - 1$.

**3.** Sur $[-\pi\,;\pi]$, $\cos x = \dfrac12 \iff x = -\dfrac{\pi}{3}$ ou $x = \dfrac{\pi}{3}$. Par lecture
du cercle trigonométrique, $\cos x \geqslant \dfrac12 \iff x \in \left[-\dfrac{\pi}{3}\,;\dfrac{\pi}{3}\right]$.

**4.** Sur $[0\,;\pi]$, $\cos x + 1 \geqslant 0$ (nul seulement en $\pi$), donc $f'(x)$ a le signe de
$2\cos x - 1$ : positif sur $\left[0\,;\dfrac{\pi}{3}\right[$, négatif sur $\left]\dfrac{\pi}{3}\,;\pi\right[$.

| $x$ | $0$ | | $\dfrac{\pi}{3}$ | | $\pi$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ |
| $f$ | $0$ | $\nearrow$ | $\dfrac{3\sqrt3}{4}$ | $\searrow$ | $0$ |

avec $f\left(\dfrac{\pi}{3}\right) = \left(1 + \dfrac12\right)\dfrac{\sqrt3}{2} = \dfrac{3\sqrt3}{4}$.

**5.** $\mathrm{C}$ et $\mathrm{D}$ ont la même ordonnée $\sin\theta$ : $(\mathrm{CD})$ est parallèle à
$(\mathrm{AB})$, donc $\mathrm{ABCD}$ est un trapèze de bases $\mathrm{AB} = 2$ et
$\mathrm{DC} = 2\cos\theta$, et de hauteur $\sin\theta$ :
$$\mathcal{A}(\theta) = \frac{(\mathrm{AB} + \mathrm{DC}) \times \sin\theta}{2} = \frac{(2 + 2\cos\theta)\sin\theta}{2} = (1 + \cos\theta)\sin\theta = f(\theta).$$

**6.** D'après le tableau, sur $\left]0\,;\dfrac{\pi}{2}\right]$, $f$ atteint son maximum en $\theta = \dfrac{\pi}{3}$ :
l'aire maximale est $\dfrac{3\sqrt3}{4} \approx 1{,}30$ u.a.
Alors $\mathrm{C}\left(\dfrac12\,;\dfrac{\sqrt3}{2}\right)$ et $\mathrm{D}\left(-\dfrac12\,;\dfrac{\sqrt3}{2}\right)$ :
$\mathrm{CD} = 1$ et $\mathrm{BC} = \sqrt{\left(1 - \dfrac12\right)^2 + \dfrac34} = 1$, de même $\mathrm{DA} = 1$.
Les trois côtés $\mathrm{BC}$, $\mathrm{CD}$, $\mathrm{DA}$ sont égaux au rayon : le trapèze est un
demi-hexagone régulier.

## Exercice 3 — Paquets de café

**1.** $V(X) = \sigma^2 = 16$. D'après l'inégalité de Bienaymé-Tchebychev :
$$P\big(|X - 250| \geqslant 10\big) \leqslant \frac{V(X)}{10^2} = \frac{16}{100} = 0{,}16.$$
Au moins $84\,\%$ des paquets ont une masse strictement comprise entre $240$ g et $260$ g.

**2.** $E(M_n) = \mu = 250$ et $V(M_n) = \dfrac{V(X)}{n} = \dfrac{16}{n}$.

**3.** Inégalité de concentration : $P\big(|M_{25} - 250| \geqslant 2\big) \leqslant \dfrac{16}{25 \times 2^2} = \dfrac{16}{100} = 0{,}16$.

**4.** Il suffit que $\dfrac{16}{n \times 1^2} \leqslant 0{,}05$, soit $n \geqslant \dfrac{16}{0{,}05} = 320$.
Un échantillon de $320$ paquets (ou plus) convient.

**5.** On répète $100$ fois, de façon indépendante, une épreuve de Bernoulli de succès « le
paquet est non conforme » de probabilité $0{,}02$ : $Y \sim \mathcal{B}(100\,;0{,}02)$.
$E(Y) = 100 \times 0{,}02 = 2$ et $V(Y) = 100 \times 0{,}02 \times 0{,}98 = 1{,}96$.

**6.** $P(Y = 0) = 0{,}98^{100} \approx 0{,}133$ ; à la calculatrice, $P(Y \leqslant 2) \approx 0{,}677$.

**7.** À la calculatrice : $P(Y \leqslant 4) \approx 0{,}949 < 0{,}95$ et $P(Y \leqslant 5) \approx 0{,}985 \geqslant 0{,}95$.
Donc $k = 5$ : dans au moins $95\,\%$ des cartons, il y a au plus $5$ paquets non conformes.

## Exercice 4 — Une suite d'intégrales

**1.** $I_0 = \displaystyle\int_0^1 \mathrm{e}^{-x}\,\mathrm{d}x = \big[-\mathrm{e}^{-x}\big]_0^1 = 1 - \frac{1}{\mathrm{e}}$.

**2.** Sur $[0\,;1]$, $x^n \geqslant 0$ et $\mathrm{e}^{-x} > 0$, donc $x^n\,\mathrm{e}^{-x} \geqslant 0$ ; par
positivité de l'intégrale ($0 < 1$), $I_n \geqslant 0$.

**3.** $I_{n+1} - I_n = \displaystyle\int_0^1 x^n(x - 1)\,\mathrm{e}^{-x}\,\mathrm{d}x$ (linéarité). Sur $[0\,;1]$,
$x^n \geqslant 0$, $x - 1 \leqslant 0$ et $\mathrm{e}^{-x} > 0$ : l'intégrande est négative, donc
$I_{n+1} - I_n \leqslant 0$. La suite est décroissante.

**4.** Pour $x \in [0\,;1]$, $-1 \leqslant -x \leqslant 0$ donc, par croissance de l'exponentielle,
$\mathrm{e}^{-1} \leqslant \mathrm{e}^{-x} \leqslant 1$, et (comme $x^n \geqslant 0$)
$\mathrm{e}^{-1}x^n \leqslant x^n\,\mathrm{e}^{-x} \leqslant x^n$. Par intégration des inégalités :
$$\frac{1}{\mathrm{e}} \int_0^1 x^n\,\mathrm{d}x \leqslant I_n \leqslant \int_0^1 x^n\,\mathrm{d}x,
\qquad\text{avec}\qquad \int_0^1 x^n\,\mathrm{d}x = \left[\frac{x^{n+1}}{n+1}\right]_0^1 = \frac{1}{n+1}.$$
Les deux bornes tendent vers $0$ : d'après le théorème des gendarmes, $\displaystyle\lim_{n\to+\infty} I_n = 0$.

**5.** On pose $u(x) = x^{n+1}$, $v'(x) = \mathrm{e}^{-x}$ : $u'(x) = (n+1)x^n$, $v(x) = -\mathrm{e}^{-x}$.
$$I_{n+1} = \big[-x^{n+1}\mathrm{e}^{-x}\big]_0^1 + (n+1)\int_0^1 x^n\,\mathrm{e}^{-x}\,\mathrm{d}x = -\frac{1}{\mathrm{e}} + (n+1)\,I_n.$$
$I_1 = I_0 - \dfrac1{\mathrm{e}} = 1 - \dfrac{2}{\mathrm{e}}$ et $I_2 = 2I_1 - \dfrac1{\mathrm{e}} = 2 - \dfrac{5}{\mathrm{e}}$.

**6.** a. `liste_I(2)` contient $I_0$, $I_1$, $I_2$ : environ `[0.6321, 0.2642, 0.1606]`.
   b. D'après la question 2, $I_n \geqslant 0$ : un terme négatif est impossible. La valeur de
   départ $1 - \mathrm{e}^{-1}$ est stockée avec une petite erreur d'arrondi $\varepsilon$ ; la relation
   $I_{n+1} = (n+1)I_n - \mathrm{e}^{-1}$ multiplie l'erreur par $1$, puis $2$, puis $3$… : après $n$
   étapes, elle est multipliée par $n!$ (environ $2{,}4 \times 10^{18}$ pour $n = 20$). Elle finit par
   dépasser la vraie valeur de $I_n$, qui tend vers $0$ : les résultats calculés n'ont plus de sens.

<!-- notes : sujet original (pas une annale). Programme : docs/programme-terminale-specialite-maths-2027.txt — y' = ay + b
(solution constante puis toutes les solutions), valeur moyenne, fonctions sinus et cosinus (parité, périodicité, dérivées,
cos x ≥ a sur [−π ; π], optimisation géométrique), Bienaymé-Tchebychev et inégalité de concentration, loi binomiale,
suite d'intégrales, intégration par parties, gendarmes, listes Python.
Valeurs vérifiées par script (sympy + Python) : C(t) = 4 − 4e^(−t/2) (dsolve) ; seuil 4 ln 2 ≈ 2,7726 h (2 h 46 min) ;
moyenne 8/3 + 4e⁻³/3 ≈ 2,7330 ; C(6) ≈ 3,8009 ; 2 ln C(6) ≈ 2,671 h ; f' = cos x + cos 2x = (2cos x − 1)(cos x + 1) ;
f(π/3) = 3√3/4 ≈ 1,299 ; 0,16 ; 0,16 ; n ≥ 320 ; P(Y=0) ≈ 0,1326 ; P(Y≤2) ≈ 0,6767 ; P(Y≤4) ≈ 0,9492 ; P(Y≤5) ≈ 0,9845 ;
I0 = 1 − 1/e, I1 = 1 − 2/e, I2 = 2 − 5/e ≈ 0,1606 ; en flottants, liste_I donne I18 ≈ −0,20 (instabilité). -->
