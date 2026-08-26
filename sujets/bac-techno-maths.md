---
id: bac-techno-maths
titre: "Bac technologique — Mathématiques (sujet d'entraînement)"
examen: "Bac technologique"
niveau: terminale-techno
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat technologique — Épreuve de mathématiques (entraînement)

**Durée : 3 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **trois exercices**. La qualité de la rédaction, la clarté et
la précision des raisonnements sont prises en compte dans la notation. Toute trace de
recherche, même incomplète, sera valorisée.

| Exercice | 1 (Suites) | 2 (Probabilités) | 3 (Statistiques) | Total |
|---|---|---|---|---|
| Points | 7 | 7 | 6 | 20 |

---

## Exercice 1 — Suites et évolution (7 points)

Une plateforme de streaming compte $5\,000$ abonnés au $1^{\text{er}}$ janvier $2026$.
Une étude marketing montre que, chaque année :

- $15\,\%$ des abonnés de l'année précédente se désabonnent ;
- $900$ nouveaux abonnés souscrivent.

On modélise le nombre d'abonnés par la suite $(u_n)$, où $u_n$ désigne le nombre
d'abonnés au $1^{\text{er}}$ janvier de l'année $2026 + n$. On a donc $u_0 = 5\,000$
et, pour tout entier naturel $n$,
$$u_{n+1} = 0{,}85\,u_n + 900.$$

1. Justifier que le coefficient multiplicateur associé à une baisse de $15\,\%$ est
   bien $0{,}85$, puis calculer $u_1$ et $u_2$.
2. On pose, pour tout entier naturel $n$, $v_n = u_n - 6\,000$.
   a. Démontrer que $(v_n)$ est une suite géométrique dont on précisera la raison $q$
      et le premier terme $v_0$.
   b. En déduire l'expression de $v_n$, puis de $u_n$, en fonction de $n$.
3. a. Déterminer le sens de variation de la suite $(u_n)$.
   b. Déterminer $\displaystyle\lim_{n \to +\infty} u_n$ et interpréter ce résultat
      dans le contexte de l'exercice.
4. On souhaite connaître la première année au cours de laquelle le nombre d'abonnés
   dépassera $5\,900$.
   a. Montrer que cela revient à résoudre l'inéquation $0{,}85^n < 0{,}1$.
   b. Résoudre cette inéquation dans $\mathbb{N}$, puis conclure en donnant l'année.
5. Recopier et compléter la ligne manquante de l'algorithme suivant pour qu'il
   renvoie la valeur de $n$ trouvée à la question 4, puis donner cette valeur.

   ```
   n ← 0
   u ← 5000
   tant que ................ faire
       u ← 0.85 × u + 900
       n ← n + 1
   fin tant que
   renvoyer n
   ```

---

## Exercice 2 — Probabilités conditionnelles et loi binomiale (7 points)

Une entreprise fabrique des composants électroniques à l'aide de deux machines A et B.

- La machine A fournit $60\,\%$ de la production ; parmi ces composants, $3\,\%$ sont
  défectueux.
- La machine B fournit le reste de la production ; parmi ces composants, $6\,\%$ sont
  défectueux.

On prélève au hasard un composant dans la production totale. On note :
- $A$ l'événement « le composant provient de la machine A » ;
- $B$ l'événement « le composant provient de la machine B » ;
- $D$ l'événement « le composant est défectueux ».

### Partie A — Un composant

1. Représenter la situation par un arbre pondéré.
2. Calculer $P(A \cap D)$ et interpréter ce résultat par une phrase.
3. Montrer que la probabilité qu'un composant prélevé au hasard soit défectueux est
   $P(D) = 0{,}042$.
4. Un composant prélevé au hasard est défectueux. Calculer la probabilité qu'il
   provienne de la machine A. On arrondira au millième.

### Partie B — Un échantillon de contrôle

Pour un contrôle qualité, on prélève au hasard un échantillon de $20$ composants dans
la production. La production étant très grande, ce prélèvement est assimilé à un tirage
avec remise. On admet que la proportion de composants défectueux dans la production est
$p = 0{,}04$.

On note $X$ la variable aléatoire égale au nombre de composants défectueux dans
l'échantillon de $20$.

1. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.
2. Calculer $P(X = 0)$. Arrondir au millième.
3. En déduire la probabilité qu'au moins un composant de l'échantillon soit défectueux.
4. Calculer $P(X = 1)$, puis $P(X \leqslant 1)$. Arrondir au millième.
5. Calculer l'espérance $E(X)$ et interpréter ce résultat dans le contexte.

---

## Exercice 3 — Statistiques à deux variables et logarithme décimal (6 points)

Le tableau ci-dessous donne le nombre $y$ de visiteurs uniques (en milliers) d'un site
internet, en fonction du rang $x$ de l'année ($x = 0$ pour l'année $2026$).

| Année | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---|---|---|---|---|---|
| Rang $x_i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| Nombre $y_i$ (milliers) | $2{,}0$ | $3{,}2$ | $5{,}0$ | $7{,}9$ | $12{,}6$ | $20{,}0$ |

1. Sur l'énoncé, le nuage de points $(x_i\,;y_i)$ a une allure incurvée. Expliquer
   pourquoi un ajustement **affine** de $y$ en $x$ n'est pas pertinent ici.
2. On pose, pour chaque année, $z = \log(y)$ (logarithme décimal). Recopier et
   compléter le tableau suivant (valeurs de $z_i$ arrondies au millième).

   | $x_i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
   |---|---|---|---|---|---|---|
   | $z_i = \log(y_i)$ | | | | | | |

3. À l'aide de la calculatrice, donner une équation de la droite d'ajustement de $z$ en
   $x$ obtenue par la méthode des moindres carrés, sous la forme $z = a x + b$
   (coefficients arrondis au millième).
4. En déduire une expression de $y$ en fonction de $x$ de la forme
   $y = k \times m^{\,x}$, où $k$ et $m$ seront arrondis au centième. Interpréter la
   valeur de $m$ en termes de taux d'évolution annuel.
5. En supposant que ce modèle reste valable, estimer le nombre de visiteurs uniques en
   $2034$.
6. Déterminer, à l'aide du modèle, la première année où le nombre de visiteurs uniques
   dépassera $100$ milliers.

---

# Corrigé

## Exercice 1 — Suites et évolution

**1.** Une baisse de $15\,\%$ multiplie par $1 - \dfrac{15}{100} = 0{,}85$ ; il reste
donc $0{,}85\,u_n$ abonnés de l'année précédente, auxquels s'ajoutent $900$ nouveaux
abonnés, d'où $u_{n+1} = 0{,}85\,u_n + 900$.

$$u_1 = 0{,}85 \times 5\,000 + 900 = 4\,250 + 900 = 5\,150,$$
$$u_2 = 0{,}85 \times 5\,150 + 900 = 4\,377{,}5 + 900 = 5\,277{,}5 \approx 5\,278.$$

**2.a.** Pour tout entier naturel $n$ :
$$v_{n+1} = u_{n+1} - 6\,000 = 0{,}85\,u_n + 900 - 6\,000 = 0{,}85\,u_n - 5\,100.$$
Or $0{,}85\,u_n - 5\,100 = 0{,}85\,(u_n - 6\,000) = 0{,}85\,v_n$. Donc $(v_n)$ est
**géométrique de raison $q = 0{,}85$**, de premier terme $v_0 = u_0 - 6\,000 = -1\,000$.

**2.b.** Pour tout $n$ : $v_n = v_0 \times q^n = -1\,000 \times 0{,}85^n$, donc
$$u_n = v_n + 6\,000 = 6\,000 - 1\,000 \times 0{,}85^n.$$

**3.a.** Comme $0 < 0{,}85 < 1$, la suite $(0{,}85^n)$ est strictement décroissante et
positive. Donc $-1\,000 \times 0{,}85^n$ est strictement **croissante**, et
$u_n = 6\,000 - 1\,000\times 0{,}85^n$ aussi : la suite $(u_n)$ est **strictement
croissante**. (Le nombre d'abonnés augmente d'année en année.)

**3.b.** Comme $0 < 0{,}85 < 1$, $\displaystyle\lim_{n\to+\infty} 0{,}85^n = 0$, donc
$$\lim_{n\to+\infty} u_n = 6\,000.$$
À long terme, le nombre d'abonnés se stabilise autour de $6\,000$ (seuil que la suite
ne franchit jamais mais dont elle se rapproche).

**4.a.** On cherche $u_n > 5\,900$ :
$$6\,000 - 1\,000\times 0{,}85^n > 5\,900 \iff -1\,000\times 0{,}85^n > -100
\iff 1\,000\times 0{,}85^n < 100 \iff 0{,}85^n < 0{,}1.$$

**4.b.** La fonction $\log$ étant strictement croissante :
$$0{,}85^n < 0{,}1 \iff \log(0{,}85^n) < \log(0{,}1) \iff n\,\log(0{,}85) < -1.$$
Comme $\log(0{,}85) \approx -0{,}0706 < 0$, on divise en changeant le sens :
$$n > \frac{-1}{\log(0{,}85)} \approx \frac{-1}{-0{,}0706} \approx 14{,}17.$$
Le plus petit entier convient : $n = 15$. Vérification : $u_{14} \approx 5\,897 < 5\,900$
et $u_{15} \approx 5\,913 > 5\,900$. C'est donc en l'année $2026 + 15 = \boxed{2041}$.

**5.** La condition de continuation de la boucle est « tant que le nombre d'abonnés
n'a pas encore dépassé $5\,900$ », soit :
```
tant que u ≤ 5900 faire
```
(ou de façon équivalente `tant que u < 5900`, `5\,913 > 5\,900` étant strict). La
valeur renvoyée est $n = 15$.

---

## Exercice 2 — Probabilités conditionnelles et loi binomiale

### Partie A

**1.** Arbre pondéré :

```
            0,03   D
      A ───<
   0,6  \    0,97   D̄
         \
          \  0,06   D
      B ───<
   0,4      0,94   D̄
```
avec $P(A) = 0{,}6$, $P(B) = 0{,}4$, $P_A(D) = 0{,}03$, $P_B(D) = 0{,}06$.

**2.** $P(A \cap D) = P(A) \times P_A(D) = 0{,}6 \times 0{,}03 = 0{,}018.$
Autrement dit, $1{,}8\,\%$ des composants proviennent de A **et** sont défectueux.

**3.** D'après la formule des probabilités totales ($A$ et $B$ formant une partition) :
$$P(D) = P(A\cap D) + P(B\cap D) = 0{,}018 + 0{,}4 \times 0{,}06 = 0{,}018 + 0{,}024
= 0{,}042.$$

**4.** $\displaystyle P_D(A) = \frac{P(A\cap D)}{P(D)} = \frac{0{,}018}{0{,}042}
\approx 0{,}429.$

### Partie B

**1.** On répète $20$ fois, de façon **identique et indépendante** (tirage assimilé à
un tirage avec remise), une épreuve à deux issues : « défectueux » (succès, probabilité
$p = 0{,}04$) ou « non défectueux ». La variable $X$ compte le nombre de succès : elle
suit la **loi binomiale $\mathcal{B}(n = 20\,;\ p = 0{,}04)$**.

**2.** $P(X = 0) = \dbinom{20}{0}\,(0{,}04)^0\,(0{,}96)^{20} = 0{,}96^{20}
\approx 0{,}442.$

**3.** $P(X \geqslant 1) = 1 - P(X = 0) \approx 1 - 0{,}442 = 0{,}558.$

**4.** $P(X = 1) = \dbinom{20}{1}\,(0{,}04)^1\,(0{,}96)^{19}
= 20 \times 0{,}04 \times 0{,}96^{19} \approx 0{,}368.$
Donc $P(X \leqslant 1) = P(X=0) + P(X=1) \approx 0{,}442 + 0{,}368 = 0{,}810.$

**5.** $E(X) = n p = 20 \times 0{,}04 = 0{,}8.$ En moyenne, sur un grand nombre
d'échantillons de $20$ composants, on trouve $0{,}8$ composant défectueux par
échantillon.

---

## Exercice 3 — Statistiques à deux variables et logarithme décimal

**1.** Les écarts successifs de $y$ ($+1{,}2 ; +1{,}8 ; +2{,}9 ; +4{,}7 ; +7{,}4$) ne
sont pas constants mais **augmentent** : le nuage n'a pas une allure rectiligne, il
s'incurve (croissance qui s'accélère). Un ajustement affine, adapté à un nuage
rectiligne, n'est donc pas pertinent.

**2.** Avec $z = \log(y)$ :

| $x_i$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| $z_i$ | $0{,}301$ | $0{,}505$ | $0{,}699$ | $0{,}898$ | $1{,}100$ | $1{,}301$ |

Les écarts de $z$ sont, eux, quasi constants ($\approx 0{,}20$) : le nuage
$(x_i\,;z_i)$ est sensiblement rectiligne.

**3.** À la calculatrice, la droite des moindres carrés de $z$ en $x$ est :
$$z = 0{,}200\,x + 0{,}302.$$

**4.** On a $y = 10^{z} = 10^{0{,}200\,x + 0{,}302} = 10^{0{,}302} \times
\left(10^{0{,}200}\right)^{x}$. Or $10^{0{,}302} \approx 2{,}00$ et
$10^{0{,}200} \approx 1{,}58$, donc
$$y \approx 2{,}00 \times 1{,}58^{\,x}.$$
Le coefficient $m = 1{,}58$ est un coefficient multiplicateur : chaque année, le nombre
de visiteurs est multiplié par environ $1{,}58$, soit une **hausse d'environ
$58\,\%$ par an**.

**5.** L'année $2034$ correspond au rang $x = 8$ :
$$z = 0{,}200 \times 8 + 0{,}302 = 1{,}902, \qquad y = 10^{1{,}902} \approx 79{,}8.$$
On estime donc environ $\boxed{80\ \text{milliers}}$ de visiteurs uniques en $2034$.

**6.** On cherche $y > 100$, soit $10^{0{,}200\,x + 0{,}302} > 100 = 10^{2}$. La
fonction $10^{(\cdot)}$ étant strictement croissante :
$$0{,}200\,x + 0{,}302 > 2 \iff 0{,}200\,x > 1{,}698 \iff x > 8{,}49.$$
Le plus petit entier convient : $x = 9$, soit l'année $2026 + 9 = \boxed{2035}$.

<!-- notes : thèmes couverts — Ex1 suites arithmético-géométriques (v_n=u_n-6000), variation, limite, résolution 0,85^n<0,1 par log, algorithme ; Ex2 probabilités conditionnelles (arbre, proba totales, P_D(A)) + loi binomiale B(20;0,04), E(X) ; Ex3 stats à deux variables avec changement de variable z=log(y), régression z=0,200x+0,302, retour à y=2,00×1,58^x, extrapolation. Tous les calculs vérifiés numériquement (u1=5150, u2=5277,5, n=15 → 2041 ; P(D)=0,042, P_D(A)≈0,429 ; P(X=0)≈0,442, P(X=1)≈0,368, E=0,8 ; régression a=0,200 b=0,302, x=8→79,8, seuil 100 → x=9 → 2035). Points à vérifier : cohérence programme BO 2 avril 2026 terminale techno (suites, expo/log décimal, proba conditionnelles/binomiale, stats deux variables) — OK. -->
