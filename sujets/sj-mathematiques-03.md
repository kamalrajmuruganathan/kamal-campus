---
id: sj-mathematiques-03
titre: "Sujet type bac n°3 — Spé maths : équation différentielle, suites, QCM"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Épreuve de spécialité mathématiques (sujet d'entraînement n°3)

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée** (mode examen).

Le candidat traite les **trois exercices**, qui sont **indépendants**. La qualité de la rédaction, la clarté et la précision des raisonnements sont prises en compte dans la notation. Toute trace de recherche, même incomplète, sera valorisée.

| Exercice | 1 (Équation différentielle) | 2 (Suite et récurrence) | 3 (QCM) | Total |
|---|---|---|---|---|
| Points | 6 | 7 | 7 | 20 |

---

## Exercice 1 — Équation différentielle (6 points)

On modélise la température $T(t)$ (en degrés Celsius) d'un objet chaud placé dans une pièce, où $t$ désigne le temps écoulé en heures ($t \ge 0$). On admet que $T$ est solution de l'équation différentielle
$$(E) : \quad y' + 2y = 6,$$
avec la condition initiale $T(0) = 10$.

1. Déterminer la solution constante de $(E)$.
2. Résoudre l'équation différentielle $(E)$ (donner la forme générale des solutions).
3. Déterminer la fonction $T$ vérifiant $(E)$ et la condition $T(0) = 10$. On montrera que, pour tout $t \ge 0$, $T(t) = 3 + 7e^{-2t}$.
4. Étudier le sens de variation de $T$ sur $[0\,;+\infty[$ et déterminer $\displaystyle\lim_{t\to+\infty} T(t)$. Interpréter cette limite dans le contexte.
5. Déterminer l'instant $t$ (valeur exacte puis valeur approchée à $10^{-2}$ près, en heures) auquel la température de l'objet vaut $5$ °C.

---

## Exercice 2 — Suite et raisonnement par récurrence (7 points)

On considère la suite $(u_n)$ définie par $u_0 = 1$ et, pour tout entier naturel $n$,
$$u_{n+1} = \sqrt{2u_n + 3}.$$

1. Calculer $u_1$ et $u_2$ (valeurs exactes puis valeurs approchées à $10^{-3}$).
2. Démontrer par récurrence que, pour tout entier naturel $n$, $1 \le u_n \le 3$.
3. Étudier le signe de $u_{n+1} - u_n$ pour $u_n \in [1\,;3[$, et en déduire que la suite $(u_n)$ est croissante.
   *(On pourra étudier le signe de $2u_n + 3 - u_n^2$.)*
4. Justifier que la suite $(u_n)$ est convergente.
5. On admet que la limite $\ell$ de $(u_n)$ vérifie $\ell = \sqrt{2\ell + 3}$. Déterminer $\ell$.
6. Recopier et compléter la fonction Python suivante afin qu'elle renvoie le plus petit entier $n$ tel que $u_n > 2{,}99$ :

   ```python
   import math
   def seuil():
       n = 0
       u = 1
       while ... :
           u = math.sqrt(2 * u + 3)
           n = n + 1
       return n
   ```

---

## Exercice 3 — QCM (7 points)

Cet exercice est un questionnaire à choix multiples. Pour chacune des cinq questions, **une seule** réponse est exacte. Aucune justification n'est demandée ; une réponse fausse ou une absence de réponse n'enlève aucun point. Le candidat recopiera le numéro de la question et la lettre de la réponse choisie.

**Question 1.** Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = (x - 1)e^{2x}$. Alors $f'(x)$ est égale à :
**a.** $2e^{2x}$ **b.** $(2x - 1)e^{2x}$ **c.** $(2x - 2)e^{2x}$ **d.** $(x - 1)e^{2x}$

**Question 2.** Une primitive sur $\mathbb{R}$ de la fonction $g$ définie par $g(x) = \dfrac{x}{x^2 + 1}$ est :
**a.** $\ln(x^2 + 1)$ **b.** $\dfrac{1}{2}\ln(x^2 + 1)$ **c.** $\dfrac{1}{x^2 + 1}$ **d.** $\arctan(x)$

**Question 3.** La fonction $h$ définie sur $\mathbb{R}$ par $h(x) = x^3 - 3x^2$ est convexe sur :
**a.** $\mathbb{R}$ **b.** $]-\infty\,;1]$ **c.** $[1\,;+\infty[$ **d.** $[0\,;+\infty[$

**Question 4.** La variable aléatoire $X$ suit la loi binomiale $\mathcal{B}(30\,;\,0{,}2)$. Son espérance $E(X)$ vaut :
**a.** $0{,}2$ **b.** $4{,}8$ **c.** $6$ **d.** $30$

**Question 5.** Dans un repère orthonormé de l'espace, on considère le plan $\mathcal{P}$ d'équation $2x - y + 2z + 1 = 0$. La distance du point $O(0\,;0\,;0)$ au plan $\mathcal{P}$ vaut :
**a.** $\dfrac{1}{3}$ **b.** $1$ **c.** $\dfrac{1}{\sqrt5}$ **d.** $3$

---

## Corrigé

### Exercice 1

**1.** Une solution constante $y = k$ vérifie $y' = 0$, donc $2k = 6$, soit $k = 3$. La solution constante est $y = 3$.

**2.** L'équation $(E)$ s'écrit $y' = -2y + 6$. Les solutions de l'équation homogène $y' = -2y$ sont $t \mapsto Ce^{-2t}$, $C \in \mathbb{R}$. En ajoutant la solution particulière constante $y = 3$, la forme générale des solutions de $(E)$ est
$$y(t) = 3 + Ce^{-2t}, \quad C \in \mathbb{R}.$$

**3.** La condition $T(0) = 10$ donne $3 + Ce^{0} = 10$, soit $3 + C = 10$, d'où $C = 7$. Donc
$$T(t) = 3 + 7e^{-2t}.$$

**4.** $T'(t) = 7\times(-2)e^{-2t} = -14e^{-2t} < 0$ pour tout $t$, donc $T$ est **strictement décroissante** sur $[0\,;+\infty[$.
Comme $\lim_{t\to+\infty} e^{-2t} = 0$, on a $\lim_{t\to+\infty} T(t) = 3$. La température de l'objet tend vers $3$ °C : c'est la **température de la pièce**, vers laquelle l'objet se refroidit.

**5.** On résout $T(t) = 5$ :
$$3 + 7e^{-2t} = 5 \iff 7e^{-2t} = 2 \iff e^{-2t} = \frac{2}{7} \iff -2t = \ln\frac{2}{7} \iff t = -\frac12\ln\frac{2}{7} = \frac12\ln\frac{7}{2}.$$
Valeur approchée : $t = \tfrac12\ln 3{,}5 \approx \tfrac12\times1{,}2528 \approx 0{,}63$ heure (soit environ $38$ minutes).

### Exercice 2

**1.** $u_1 = \sqrt{2\times1 + 3} = \sqrt{5} \approx 2{,}236$.
$u_2 = \sqrt{2\sqrt5 + 3} = \sqrt{2\times2{,}236 + 3} = \sqrt{7{,}472} \approx 2{,}733$.

**2.** Notons $P(n)$ : « $1 \le u_n \le 3$ ».
*Initialisation :* $u_0 = 1$, donc $1 \le u_0 \le 3$ : $P(0)$ est vraie.
*Hérédité :* supposons $P(n)$ vraie, c'est-à-dire $1 \le u_n \le 3$. Alors $2 \le 2u_n \le 6$, puis $5 \le 2u_n + 3 \le 9$. La fonction racine carrée étant croissante, $\sqrt5 \le \sqrt{2u_n+3} \le \sqrt9$, soit $\sqrt5 \le u_{n+1} \le 3$. Comme $\sqrt5 \approx 2{,}236 \ge 1$, on a bien $1 \le u_{n+1} \le 3$ : $P(n+1)$ est vraie.
*Conclusion :* par récurrence, pour tout entier naturel $n$, $1 \le u_n \le 3$.

**3.** Étudions $2u_n + 3 - u_n^2 = -(u_n^2 - 2u_n - 3) = -(u_n - 3)(u_n + 1)$. Pour $u_n \in [1\,;3[$, on a $u_n - 3 < 0$ et $u_n + 1 > 0$, donc $(u_n - 3)(u_n + 1) < 0$ et ainsi $2u_n + 3 - u_n^2 > 0$, c'est-à-dire $2u_n + 3 > u_n^2$.
Comme $u_n \ge 1 > 0$, on a $u_n = \sqrt{u_n^2}$, et par croissance de la racine : $u_{n+1} = \sqrt{2u_n+3} > \sqrt{u_n^2} = u_n$. Donc $u_{n+1} - u_n > 0$ : la suite $(u_n)$ est **croissante**.

**4.** La suite $(u_n)$ est croissante et majorée par $3$ (question 2). D'après le théorème de la limite monotone, elle **converge**.

**5.** La limite $\ell$ vérifie $\ell = \sqrt{2\ell + 3}$ avec $\ell \ge 1 > 0$. En élevant au carré : $\ell^2 = 2\ell + 3$, soit $\ell^2 - 2\ell - 3 = 0$, dont les racines sont $\ell = 3$ et $\ell = -1$. Comme $\ell \ge 1$, on retient $\ell = 3$.

**6.** La boucle doit continuer tant que le seuil n'est pas franchi, donc tant que $u \le 2{,}99$ :
```python
import math
def seuil():
    n = 0
    u = 1
    while u <= 2.99:
        u = math.sqrt(2 * u + 3)
        n = n + 1
    return n
```

### Exercice 3 (QCM)

**Question 1 — réponse b.** $f(x) = (x-1)e^{2x}$, produit de $u = x-1$ ($u' = 1$) et $v = e^{2x}$ ($v' = 2e^{2x}$) :
$f'(x) = 1\cdot e^{2x} + (x-1)\cdot 2e^{2x} = e^{2x}(1 + 2x - 2) = (2x - 1)e^{2x}$.

**Question 2 — réponse b.** $\dfrac{\mathrm{d}}{\mathrm{d}x}\left[\tfrac12\ln(x^2+1)\right] = \tfrac12\cdot\dfrac{2x}{x^2+1} = \dfrac{x}{x^2+1} = g(x)$.

**Question 3 — réponse c.** $h(x) = x^3 - 3x^2$, $h'(x) = 3x^2 - 6x$, $h''(x) = 6x - 6 = 6(x-1)$. $h''(x) \ge 0 \iff x \ge 1$, donc $h$ est convexe sur $[1\,;+\infty[$.

**Question 4 — réponse c.** Pour $X \sim \mathcal{B}(30\,;\,0{,}2)$, $E(X) = np = 30\times0{,}2 = 6$.

**Question 5 — réponse a.** Avec $\vec n(2\,;-1\,;2)$, $\|\vec n\| = \sqrt{4+1+4} = 3$. La distance de $O$ à $\mathcal{P}$ est
$d = \dfrac{|2\cdot0 - 0 + 2\cdot0 + 1|}{3} = \dfrac{1}{3}$.
