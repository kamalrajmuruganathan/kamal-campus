---
id: sj-mathematiques-01
titre: "Sujet type bac n°1 — Spé maths : exponentielle, suites, probabilités"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Épreuve de spécialité mathématiques (sujet d'entraînement n°1)

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée** (mode examen).

Le candidat traite les **trois exercices**, qui sont **indépendants**. La qualité de la rédaction, la clarté et la précision des raisonnements sont prises en compte dans la notation. Toute trace de recherche, même incomplète, sera valorisée.

| Exercice | 1 (Fonction exp. + intégrale) | 2 (Suites) | 3 (Probabilités) | Total |
|---|---|---|---|---|
| Points | 7 | 6 | 7 | 20 |

---

## Exercice 1 — Fonction exponentielle et intégrale (7 points)

On considère la fonction $f$ définie sur $\mathbb{R}$ par
$$f(x) = (x+2)\,e^{-x}.$$
On note $\mathcal{C}_f$ sa courbe représentative dans un repère orthonormé.

1. Déterminer les limites de $f$ en $-\infty$ et en $+\infty$. On rappelle que $\displaystyle\lim_{x\to+\infty} x\,e^{-x} = 0$.
2. Montrer que, pour tout réel $x$, $f'(x) = -(x+1)\,e^{-x}$.
3. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$ sur $\mathbb{R}$. Préciser la valeur exacte de l'extremum.
4. Montrer que $f''(x) = x\,e^{-x}$. En déduire l'intervalle sur lequel $f$ est convexe et les coordonnées du point d'inflexion de $\mathcal{C}_f$.
5. On pose $\displaystyle I = \int_0^1 f(x)\,\mathrm{d}x$.
   a. Vérifier que la fonction $F$ définie sur $\mathbb{R}$ par $F(x) = (-x-3)\,e^{-x}$ est une primitive de $f$.
   b. Calculer la valeur exacte de $I$, puis en donner une valeur approchée à $10^{-2}$ près.
   c. Interpréter graphiquement le nombre $I$.

---

## Exercice 2 — Suites (6 points)

On considère la suite $(u_n)$ définie par $u_0 = 3$ et, pour tout entier naturel $n$,
$$u_{n+1} = \tfrac{1}{2}\,u_n + 2.$$

1. Calculer $u_1$ et $u_2$.
2. On pose, pour tout entier naturel $n$, $v_n = u_n - 4$.
   a. Montrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le premier terme.
   b. En déduire, pour tout $n$, l'expression de $v_n$ puis celle de $u_n$ en fonction de $n$.
3. Déterminer la limite de la suite $(u_n)$.
4. Montrer que la suite $(u_n)$ est croissante.
5. On souhaite déterminer le plus petit entier $n$ tel que $4 - u_n < 10^{-3}$.
   a. Résoudre l'inéquation $\left(\tfrac{1}{2}\right)^n < 10^{-3}$ et conclure.
   b. Recopier et compléter l'algorithme ci-dessous (écrit en langage Python) afin qu'il renvoie cette valeur de $n$ :

   ```python
   def seuil():
       n = 0
       u = 3
       while ... :
           u = 0.5 * u + 2
           n = n + 1
       return n
   ```

6. On pose $S_n = u_0 + u_1 + \dots + u_n$. Montrer que $S_n = 4n + 2 + \left(\tfrac{1}{2}\right)^n$.

---

## Exercice 3 — Probabilités (7 points)

Une entreprise fabrique des pièces à l'aide de deux machines A et B.

- La machine A assure $60\,\%$ de la production ; parmi ces pièces, $3\,\%$ sont défectueuses.
- La machine B assure le reste de la production ; parmi ces pièces, $5\,\%$ sont défectueuses.

On prélève une pièce au hasard dans la production totale. On note :
$A$ : « la pièce provient de la machine A » ; $B$ : « la pièce provient de la machine B » ; $D$ : « la pièce est défectueuse ».

### Partie A

1. Construire un arbre pondéré traduisant la situation.
2. Calculer la probabilité que la pièce soit produite par A et soit défectueuse.
3. Montrer que $P(D) = 0{,}038$.
4. La pièce prélevée est défectueuse. Quelle est la probabilité qu'elle provienne de la machine A ? On donnera la valeur exacte sous forme de fraction irréductible, puis une valeur approchée à $10^{-3}$ près.

### Partie B

Un contrôle qualité prélève au hasard $20$ pièces dans la production. La production est suffisamment grande pour assimiler ce prélèvement à un tirage successif avec remise. On admet que la probabilité qu'une pièce soit défectueuse est $p = 0{,}05$. On note $X$ la variable aléatoire égale au nombre de pièces défectueuses parmi les $20$.

1. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.
2. Calculer $P(X = 0)$, puis la probabilité qu'au moins une pièce soit défectueuse. Arrondir à $10^{-3}$.
3. Déterminer l'espérance $E(X)$ et interpréter ce résultat dans le contexte.
4. On prélève maintenant $n$ pièces. Déterminer le plus petit entier $n$ pour lequel la probabilité d'obtenir au moins une pièce défectueuse est supérieure ou égale à $0{,}99$.

---

## Corrigé

### Exercice 1

**1.** En $+\infty$ : $f(x) = (x+2)e^{-x} = x e^{-x} + 2 e^{-x}$. Or $\lim_{x\to+\infty} x e^{-x} = 0$ et $\lim_{x\to+\infty} 2 e^{-x} = 0$, donc $\boxed{\lim_{x\to+\infty} f(x) = 0}$.
En $-\infty$ : $\lim_{x\to-\infty}(x+2) = -\infty$ et $\lim_{x\to-\infty} e^{-x} = +\infty$, donc par produit $\boxed{\lim_{x\to-\infty} f(x) = -\infty}$.

**2.** $f$ est dérivable comme produit. Avec $u = x+2$, $u' = 1$, $w = e^{-x}$, $w' = -e^{-x}$ :
$$f'(x) = 1\cdot e^{-x} + (x+2)\cdot(-e^{-x}) = e^{-x}\big(1 - x - 2\big) = e^{-x}(-x-1) = -(x+1)e^{-x}.$$

**3.** Comme $e^{-x} > 0$, le signe de $f'(x)$ est celui de $-(x+1)$ : $f'(x) > 0$ pour $x < -1$, $f'(x) < 0$ pour $x > -1$, et $f'(-1) = 0$.
Donc $f$ est croissante sur $]-\infty,\,-1]$ et décroissante sur $[-1,\,+\infty[$. Elle admet un maximum en $x = -1$ :
$$f(-1) = (-1+2)e^{1} = e.$$

| $x$ | $-\infty$ | | $-1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f$ | $-\infty$ | $\nearrow$ | $e$ | $\searrow$ | $0$ |

**4.** $f'(x) = -(x+1)e^{-x}$. On dérive de nouveau ($u = -(x+1)$, $u' = -1$) :
$$f''(x) = -1\cdot e^{-x} + \big(-(x+1)\big)(-e^{-x}) = e^{-x}\big(-1 + x + 1\big) = x\,e^{-x}.$$
Comme $e^{-x} > 0$, $f''(x)$ a le signe de $x$ : $f''(x) \ge 0$ sur $[0,+\infty[$. Donc $f$ est **convexe sur $[0,+\infty[$** (et concave sur $]-\infty,0]$). Le signe de $f''$ change en $x = 0$ : $\mathcal{C}_f$ admet un **point d'inflexion** de coordonnées $\big(0,\;f(0)\big) = (0,\,2)$.

**5.a.** $F(x) = (-x-3)e^{-x}$. Avec $u = -x-3$, $u' = -1$ :
$$F'(x) = -1\cdot e^{-x} + (-x-3)(-e^{-x}) = e^{-x}\big(-1 + x + 3\big) = e^{-x}(x+2) = f(x).$$
Donc $F$ est bien une primitive de $f$ sur $\mathbb{R}$.

**5.b.** $\displaystyle I = \int_0^1 f(x)\,\mathrm{d}x = F(1) - F(0)$.
$F(1) = (-1-3)e^{-1} = -4e^{-1} = -\dfrac{4}{e}$ et $F(0) = (-0-3)e^{0} = -3$.
$$I = -\frac{4}{e} - (-3) = 3 - \frac{4}{e} \approx 3 - 1{,}4715 \approx \boxed{1{,}53}.$$

**5.c.** Sur $[0,1]$, $f(x) \ge 0$ (car $f(0)=2>0$, $f(1)=3e^{-1}>0$ et $f$ y est continue positive). Donc $I$ est l'**aire, en unités d'aire, du domaine délimité par $\mathcal{C}_f$, l'axe des abscisses et les droites $x=0$ et $x=1$**.

### Exercice 2

**1.** $u_1 = \tfrac12\cdot 3 + 2 = 3{,}5$ ; $u_2 = \tfrac12\cdot 3{,}5 + 2 = 3{,}75$.

**2.a.** Pour tout $n$ : $v_{n+1} = u_{n+1} - 4 = \tfrac12 u_n + 2 - 4 = \tfrac12 u_n - 2 = \tfrac12(u_n - 4) = \tfrac12 v_n$.
Donc $(v_n)$ est **géométrique de raison $q = \tfrac12$** et de premier terme $v_0 = u_0 - 4 = -1$.

**2.b.** $v_n = v_0\,q^n = -\left(\tfrac12\right)^n$, d'où $u_n = v_n + 4 = 4 - \left(\tfrac12\right)^n$.

**3.** Comme $-1 < \tfrac12 < 1$, $\lim_{n\to+\infty}\left(\tfrac12\right)^n = 0$, donc $\boxed{\lim_{n\to+\infty} u_n = 4}$.

**4.** $u_{n+1} - u_n = \left[4 - \left(\tfrac12\right)^{n+1}\right] - \left[4 - \left(\tfrac12\right)^{n}\right] = \left(\tfrac12\right)^{n} - \left(\tfrac12\right)^{n+1} = \left(\tfrac12\right)^{n}\left(1 - \tfrac12\right) = \tfrac12\left(\tfrac12\right)^{n} > 0$. La suite est donc **croissante**.

**5.a.** $4 - u_n = \left(\tfrac12\right)^n$. L'inéquation devient $\left(\tfrac12\right)^n < 10^{-3}$. En passant au logarithme (fonction croissante) : $n\ln\tfrac12 < \ln 10^{-3}$, soit, comme $\ln\tfrac12 < 0$, $n > \dfrac{-3\ln 10}{\ln \tfrac12} = \dfrac{3\ln 10}{\ln 2} \approx 9{,}97$.
Le plus petit entier convient donc pour $n = 10$ (on vérifie $\left(\tfrac12\right)^{10} = \tfrac{1}{1024} \approx 9{,}77\times10^{-4} < 10^{-3}$, tandis que $\left(\tfrac12\right)^9 \approx 1{,}95\times10^{-3}$). Donc $\boxed{n = 10}$.

**5.b.** La boucle doit continuer tant que le seuil n'est pas atteint, c'est-à-dire tant que $4 - u \ge 10^{-3}$ :
```python
def seuil():
    n = 0
    u = 3
    while 4 - u >= 1e-3:
        u = 0.5 * u + 2
        n = n + 1
    return n
```
Cet algorithme renvoie $10$.

**6.** $\displaystyle S_n = \sum_{k=0}^{n} u_k = \sum_{k=0}^{n}\left(4 - \left(\tfrac12\right)^k\right) = 4(n+1) - \sum_{k=0}^{n}\left(\tfrac12\right)^k$.
Or $\displaystyle\sum_{k=0}^{n}\left(\tfrac12\right)^k = \frac{1 - \left(\tfrac12\right)^{n+1}}{1 - \tfrac12} = 2\left(1 - \left(\tfrac12\right)^{n+1}\right) = 2 - \left(\tfrac12\right)^{n}$.
Donc $S_n = 4(n+1) - 2 + \left(\tfrac12\right)^{n} = \boxed{4n + 2 + \left(\tfrac12\right)^{n}}$.
*(Vérification : $S_0 = 2 + 1 = 3 = u_0$ ; $S_1 = 4 + 2 + 0{,}5 = 6{,}5 = u_0 + u_1$.)*

### Exercice 3

**Partie A**

**1.** Arbre : première génération $A$ (prob. $0{,}6$) et $B$ (prob. $0{,}4$) ; puis sous $A$ : $D$ ($0{,}03$), $\bar D$ ($0{,}97$) ; sous $B$ : $D$ ($0{,}05$), $\bar D$ ($0{,}95$).

**2.** $P(A \cap D) = P(A)\times P_A(D) = 0{,}6 \times 0{,}03 = 0{,}018$.

**3.** Par la formule des probabilités totales :
$$P(D) = P(A\cap D) + P(B\cap D) = 0{,}6\times0{,}03 + 0{,}4\times0{,}05 = 0{,}018 + 0{,}020 = 0{,}038.$$

**4.** $\displaystyle P_D(A) = \frac{P(A\cap D)}{P(D)} = \frac{0{,}018}{0{,}038} = \frac{18}{38} = \frac{9}{19} \approx 0{,}474.$

**Partie B**

**1.** On répète $20$ fois, de façon identique et indépendante (tirage assimilé à un tirage avec remise), une épreuve de Bernoulli de succès « pièce défectueuse » de probabilité $p = 0{,}05$. La variable $X$ compte les succès, donc $X$ suit la loi binomiale $\mathcal{B}(20\,;\,0{,}05)$.

**2.** $P(X = 0) = (1 - 0{,}05)^{20} = 0{,}95^{20} \approx 0{,}358$.
$P(X \ge 1) = 1 - P(X=0) \approx 1 - 0{,}358 = 0{,}642$.

**3.** $E(X) = n p = 20 \times 0{,}05 = 1$. En moyenne, sur $20$ pièces prélevées, on s'attend à environ **$1$ pièce défectueuse**.

**4.** Pour $n$ prélèvements, $P(\text{au moins une défectueuse}) = 1 - 0{,}95^{n}$. On résout :
$$1 - 0{,}95^{n} \ge 0{,}99 \iff 0{,}95^{n} \le 0{,}01 \iff n\ln 0{,}95 \le \ln 0{,}01 \iff n \ge \frac{\ln 0{,}01}{\ln 0{,}95} \approx 89{,}8.$$
Le plus petit entier convenable est $\boxed{n = 90}$ (on vérifie $0{,}95^{90} \approx 9{,}9\times10^{-3} \le 0{,}01$ et $0{,}95^{89} \approx 1{,}04\times10^{-2}$).
