---
id: bac-maths-complementaires
titre: "Bac général — Mathématiques complémentaires, option (sujet d'entraînement)"
examen: "Bac général — option"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Option mathématiques complémentaires (entraînement)

**Durée : 3 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **trois exercices**, indépendants. La clarté des raisonnements et la
qualité de la rédaction entrent dans l'appréciation. Toute trace de recherche, même
incomplète, sera valorisée. Les valeurs approchées seront données à la précision demandée.

| Exercice | 1 — Fonctions et intégrale | 2 — Suites | 3 — Probabilités | Total |
|---|---|---|---|---|
| Thème | exponentielle, ln, aire | modèle d'évolution | lois à densité, binomiale | |
| Points | 7 | 6 | 7 | 20 |

---

## Exercice 1 — Concentration d'un médicament (7 points)

Après l'injection d'un médicament, sa concentration dans le sang (en mg·L⁻¹) est modélisée,
en fonction du temps $t$ (en heures) écoulé depuis l'injection, par la fonction $C$ définie
sur $[0\,;+\infty[$ par
$$C(t) = 20\left(e^{-0{,}2\,t} - e^{-t}\right).$$

1. a. Calculer $C(0)$. Interpréter ce résultat dans le contexte.
   b. Déterminer $\displaystyle\lim_{t \to +\infty} C(t)$. Que peut-on en déduire pour
      l'évolution de la concentration à long terme ?
2. a. Montrer que, pour tout $t \in [0\,;+\infty[$,
      $$C'(t) = 4\left(5\,e^{-t} - e^{-0{,}2\,t}\right).$$
   b. Résoudre l'équation $C'(t) = 0$. On donnera la valeur exacte de la solution, puis une
      valeur approchée à $10^{-2}$ près.
   c. En étudiant le signe de $C'(t)$, dresser le tableau de variations de $C$ sur
      $[0\,;+\infty[$.
   d. En déduire la concentration maximale atteinte (« pic »), arrondie à $10^{-1}$ près, et
      l'heure à laquelle elle se produit.
3. Le médicament n'est efficace que lorsque la concentration est **supérieure ou égale à**
   $5$ mg·L⁻¹.
   a. Justifier, à l'aide du tableau de variations et du théorème des valeurs
      intermédiaires, que l'équation $C(t) = 5$ admet **exactement deux** solutions $t_1$ et
      $t_2$ sur $[0\,;+\infty[$ (avec $t_1 < t_2$).
   b. À la calculatrice, déterminer des valeurs approchées de $t_1$ et $t_2$ à $10^{-1}$
      près. En déduire la durée pendant laquelle le médicament est efficace.
4. On souhaite calculer la concentration moyenne du médicament sur les $6$ premières heures.
   a. Vérifier que la fonction $F$ définie sur $[0\,;+\infty[$ par
      $$F(t) = -100\,e^{-0{,}2\,t} + 20\,e^{-t}$$
      est une primitive de $C$ sur $[0\,;+\infty[$.
   b. En déduire la valeur exacte de $\displaystyle\int_0^{6} C(t)\,\mathrm{d}t$, puis une
      valeur approchée à $10^{-2}$ près.
   c. Calculer la valeur moyenne $C_{\text{moy}}$ de la concentration sur $[0\,;6]$, arrondie
      à $10^{-1}$ près.

---

## Exercice 2 — Déclin d'un service d'abonnement (6 points)

Un service de vidéo à la demande compte, au $1^{\text{er}}$ janvier $2026$, $500$ milliers
d'abonnés. Une étude montre que, chaque année, le service **conserve $75\,\%$** de ses
abonnés et en **gagne $50$ milliers** de nouveaux.

On modélise le nombre d'abonnés (en milliers) par la suite $(u_n)$, où $u_n$ désigne le
nombre d'abonnés au $1^{\text{er}}$ janvier de l'année $2026 + n$. Ainsi $u_0 = 500$ et, pour
tout entier naturel $n$,
$$u_{n+1} = 0{,}75\,u_n + 50.$$

1. Calculer $u_1$ et $u_2$.
2. Démontrer par récurrence que, pour tout entier naturel $n$, $u_n > 200$.
3. a. Montrer que, pour tout entier naturel $n$, $u_{n+1} - u_n = 0{,}25\,(200 - u_n)$.
   b. En déduire le sens de variation de la suite $(u_n)$.
   c. Justifier que la suite $(u_n)$ est convergente.
4. On pose, pour tout entier naturel $n$, $v_n = u_n - 200$.
   a. Démontrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le
      premier terme.
   b. Exprimer $v_n$, puis $u_n$, en fonction de $n$.
   c. Déterminer $\displaystyle\lim_{n \to +\infty} u_n$ et interpréter dans le contexte.
5. On cherche la première année où le service comptera **moins de $250$ milliers**
   d'abonnés.
   a. Résoudre l'inéquation $u_n < 250$ d'inconnue l'entier $n$.
   b. Recopier et compléter la ligne manquante de l'algorithme suivant pour qu'il renvoie le
      plus petit entier $n$ tel que $u_n < 250$, puis donner la valeur renvoyée et l'année
      correspondante.

   ```
   n ← 0
   u ← 500
   tant que ................ faire
       u ← 0.75 × u + 50
       n ← n + 1
   fin tant que
   renvoyer n
   ```

---

## Exercice 3 — Durée de vie d'ampoules LED (7 points)

La durée de vie, en heures, d'une ampoule LED d'un certain modèle est modélisée par une
variable aléatoire $X$ qui suit une **loi exponentielle** de paramètre $\lambda > 0$. On
rappelle que, pour tout réel $t \geqslant 0$, $P(X \leqslant t) = 1 - e^{-\lambda t}$, et que
l'espérance de $X$ est $E(X) = \dfrac{1}{\lambda}$.

Le fabricant annonce une durée de vie moyenne de $20\,000$ heures.

### Partie A — Étude de la loi exponentielle

1. Déterminer la valeur du paramètre $\lambda$.
2. Calculer la probabilité qu'une ampoule fonctionne **plus de** $10\,000$ heures. Arrondir
   à $10^{-3}$.
3. Calculer $P(X \leqslant 30\,000)$, arrondie à $10^{-3}$.
4. En déduire la probabilité $P(10\,000 \leqslant X \leqslant 30\,000)$, arrondie à
   $10^{-3}$.
5. Une ampoule fonctionne déjà depuis $10\,000$ heures. En utilisant la propriété de
   **durée de vie sans vieillissement**, déterminer la probabilité qu'elle fonctionne encore
   au moins $20\,000$ heures de plus. On rappellera la propriété utilisée.
6. Déterminer la **durée de vie médiane** $m$ des ampoules, c'est-à-dire la durée $m$ telle
   que $P(X \leqslant m) = 0{,}5$. Arrondir à l'heure. Comparer à la durée de vie moyenne et
   commenter.

### Partie B — Un lot d'ampoules

On installe dans un bâtiment un lot de $10$ de ces ampoules, dont les durées de vie sont
supposées **indépendantes**. On admet que la probabilité qu'une ampoule fonctionne plus de
$20\,000$ heures est $p = e^{-1} \approx 0{,}368$.

On note $Y$ la variable aléatoire égale au nombre d'ampoules, parmi les $10$, qui
fonctionnent plus de $20\,000$ heures.

1. Justifier que $Y$ suit une loi binomiale dont on précisera les paramètres.
2. Calculer la probabilité qu'**aucune** des $10$ ampoules ne dépasse $20\,000$ heures.
   Arrondir à $10^{-3}$.
3. En déduire la probabilité qu'**au moins une** ampoule dépasse $20\,000$ heures. Arrondir
   à $10^{-3}$.
4. Déterminer l'espérance $E(Y)$ et interpréter le résultat.

---

# Corrigé

## Exercice 1 — Concentration d'un médicament

1. a. $C(0) = 20\left(e^{0} - e^{0}\right) = 20(1 - 1) = 0$. Au moment de l'injection, la
   concentration sanguine du médicament est **nulle** : il n'est pas encore passé dans le
   sang.

   b. Comme $\displaystyle\lim_{t\to+\infty} e^{-0{,}2t} = 0$ et
   $\displaystyle\lim_{t\to+\infty} e^{-t} = 0$, on a
   $\displaystyle\lim_{t\to+\infty} C(t) = 0$. À long terme, le médicament est **entièrement
   éliminé** : la concentration tend vers $0$.

2. a. $C(t) = 20\,e^{-0{,}2t} - 20\,e^{-t}$. En dérivant :
   $$C'(t) = 20 \times (-0{,}2)\,e^{-0{,}2t} - 20\times(-1)\,e^{-t}
   = -4\,e^{-0{,}2t} + 20\,e^{-t} = 4\left(5\,e^{-t} - e^{-0{,}2t}\right).$$

   b. $C'(t) = 0 \iff 5\,e^{-t} = e^{-0{,}2t} \iff 5 = \dfrac{e^{-0{,}2t}}{e^{-t}}
   = e^{-0{,}2t + t} = e^{0{,}8t}$. En passant au logarithme :
   $0{,}8\,t = \ln 5$, d'où
   $$t = \frac{\ln 5}{0{,}8} \approx 2{,}01 \text{ h}.$$

   c. Le facteur $4$ est positif. Pour comparer les deux exponentielles, on repart de
   $C'(t) = 4\,e^{-t}\left(5 - e^{0{,}8t}\right)$ (en factorisant par $e^{-t} > 0$). Le signe
   de $C'(t)$ est celui de $5 - e^{0{,}8t}$ : positif tant que $e^{0{,}8t} < 5$, c'est-à-dire
   $t < \dfrac{\ln 5}{0{,}8}$, négatif ensuite. D'où le tableau :

   | $t$ | $0$ | | $\frac{\ln 5}{0{,}8} \approx 2{,}01$ | | $+\infty$ |
   |---|---|---|---|---|---|
   | $C'(t)$ | | $+$ | $0$ | $-$ | |
   | $C$ | $0$ | $\nearrow$ | $C_{\max}$ | $\searrow$ | $0$ |

   d. Le maximum est atteint pour $t \approx 2{,}01$ h. Sa valeur :
   $$C_{\max} = 20\left(e^{-0{,}2\times 2{,}01} - e^{-2{,}01}\right)
   = 20\left(e^{-0{,}402} - e^{-2{,}01}\right) \approx 20(0{,}669 - 0{,}134)
   \approx \boxed{10{,}7 \text{ mg·L}^{-1}}.$$
   Le pic de concentration ($\approx 10{,}7$ mg·L⁻¹) survient environ $2{,}0$ h après
   l'injection.

3. a. Sur $[0\,;\,2{,}01]$, $C$ est **continue** et **strictement croissante** de $C(0) = 0$
   à $C_{\max} \approx 10{,}7$. Comme $5 \in\,]0\,;\,10{,}7]$, le théorème des valeurs
   intermédiaires (version « bijection ») garantit une **unique** solution $t_1$ dans cet
   intervalle. Sur $[2{,}01\,;+\infty[$, $C$ est continue et strictement décroissante de
   $10{,}7$ vers $0$ ; comme $5 \in\,]0\,;\,10{,}7]$, il existe une **unique** solution $t_2$.
   L'équation $C(t) = 5$ admet donc **exactement deux** solutions.

   b. À la calculatrice : $t_1 \approx 0{,}4$ h et $t_2 \approx 6{,}9$ h. Le médicament est
   efficace ($C \geqslant 5$) entre ces deux instants, soit pendant environ
   $t_2 - t_1 \approx 6{,}9 - 0{,}4 = 6{,}5$ heures.

4. a. $F(t) = -100\,e^{-0{,}2t} + 20\,e^{-t}$. On dérive :
   $$F'(t) = -100\times(-0{,}2)\,e^{-0{,}2t} + 20\times(-1)\,e^{-t}
   = 20\,e^{-0{,}2t} - 20\,e^{-t} = 20\left(e^{-0{,}2t} - e^{-t}\right) = C(t).$$
   Donc $F$ est bien une primitive de $C$ sur $[0\,;+\infty[$.

   b. $$\int_0^{6} C(t)\,\mathrm{d}t = F(6) - F(0)
   = \left(-100\,e^{-1{,}2} + 20\,e^{-6}\right) - \left(-100 + 20\right).$$
   Or $-100 + 20 = -80$, donc la valeur exacte est
   $$\int_0^{6} C(t)\,\mathrm{d}t = -100\,e^{-1{,}2} + 20\,e^{-6} + 80 \approx -30{,}12 + 0{,}05 + 80
   \approx \boxed{49{,}93}.$$

   c. La valeur moyenne sur $[0\,;6]$ vaut
   $$C_{\text{moy}} = \frac{1}{6 - 0}\int_0^{6} C(t)\,\mathrm{d}t \approx \frac{49{,}93}{6}
   \approx \boxed{8{,}3 \text{ mg·L}^{-1}}.$$

## Exercice 2 — Déclin d'un service d'abonnement

1. $u_1 = 0{,}75 \times 500 + 50 = 375 + 50 = 425$ ; puis
   $u_2 = 0{,}75 \times 425 + 50 = 318{,}75 + 50 = 368{,}75$.

2. Notons $P(n)$ la propriété « $u_n > 200$ ».
   **Initialisation :** $u_0 = 500 > 200$, donc $P(0)$ est vraie.
   **Hérédité :** supposons $u_k > 200$ pour un entier $k$. En multipliant par $0{,}75 > 0$
   puis en ajoutant $50$ :
   $$u_{k+1} = 0{,}75\,u_k + 50 > 0{,}75 \times 200 + 50 = 150 + 50 = 200.$$
   Donc $P(k+1)$ est vraie.
   **Conclusion :** par récurrence, $u_n > 200$ pour tout entier naturel $n$.

3. a. $u_{n+1} - u_n = (0{,}75\,u_n + 50) - u_n = -0{,}25\,u_n + 50 = 0{,}25\,(200 - u_n)$.

   b. D'après la question 2, $u_n > 200$, donc $200 - u_n < 0$, d'où
   $u_{n+1} - u_n = 0{,}25\,(200 - u_n) < 0$ : la suite $(u_n)$ est **strictement
   décroissante**.

   c. La suite $(u_n)$ est **décroissante** et **minorée** par $200$ : d'après le théorème de
   convergence des suites monotones, elle est **convergente**.

4. a. Pour tout entier naturel $n$ :
   $$v_{n+1} = u_{n+1} - 200 = 0{,}75\,u_n + 50 - 200 = 0{,}75\,u_n - 150
   = 0{,}75\,(u_n - 200) = 0{,}75\,v_n.$$
   Donc $(v_n)$ est **géométrique de raison $q = 0{,}75$**, de premier terme
   $v_0 = u_0 - 200 = 300$.

   b. On en déduit $v_n = 300 \times 0{,}75^{\,n}$, puis
   $$u_n = v_n + 200 = 200 + 300 \times 0{,}75^{\,n}.$$
   *(Contrôle : $u_1 = 200 + 300\times 0{,}75 = 200 + 225 = 425$ ✓.)*

   c. Comme $0 < 0{,}75 < 1$, on a $\displaystyle\lim_{n\to+\infty} 0{,}75^{\,n} = 0$, donc
   $\displaystyle\lim_{n\to+\infty} u_n = 200$. À long terme, le nombre d'abonnés se
   **stabilise autour de $200$ milliers**.

5. a. $u_n < 250 \iff 200 + 300 \times 0{,}75^{\,n} < 250 \iff 300 \times 0{,}75^{\,n} < 50
   \iff 0{,}75^{\,n} < \dfrac{1}{6}$. En passant au logarithme (la fonction $\ln$ est
   croissante) et en divisant par $\ln 0{,}75 < 0$ (ce qui **inverse** le sens) :
   $$n\ln 0{,}75 < \ln\tfrac{1}{6} \iff n > \frac{\ln \frac{1}{6}}{\ln 0{,}75} \approx 6{,}23.$$
   Le plus petit entier convenable est donc $n = 7$.
   *(Vérification : $u_6 = 200 + 300\times 0{,}75^{6} \approx 253{,}4 > 250$ et
   $u_7 = 200 + 300\times 0{,}75^{7} \approx 240{,}1 < 250$.)*

   b. La boucle doit se poursuivre **tant que $u \geqslant 250$**. La ligne à compléter est :
   `tant que u ≥ 250 faire`. L'algorithme **renvoie $n = 7$**, soit l'année
   $2026 + 7 = \boxed{2033}$.

## Exercice 3 — Durée de vie d'ampoules LED

### Partie A

1. $E(X) = \dfrac{1}{\lambda} = 20\,000$, donc
   $\lambda = \dfrac{1}{20\,000} = \boxed{5\times 10^{-5} \text{ h}^{-1}}$.

2. $P(X > 10\,000) = e^{-\lambda \times 10\,000} = e^{-5\times 10^{-5} \times 10\,000}
   = e^{-0{,}5} \approx \boxed{0{,}607}$.

3. $P(X \leqslant 30\,000) = 1 - e^{-\lambda \times 30\,000} = 1 - e^{-1{,}5}
   \approx 1 - 0{,}223 = \boxed{0{,}777}$.

4. $$P(10\,000 \leqslant X \leqslant 30\,000) = P(X \leqslant 30\,000) - P(X \leqslant 10\,000)
   = \left(1 - e^{-1{,}5}\right) - \left(1 - e^{-0{,}5}\right) = e^{-0{,}5} - e^{-1{,}5}.$$
   Numériquement, $\approx 0{,}607 - 0{,}223 = \boxed{0{,}384}$.

5. **Propriété de durée de vie sans vieillissement :** pour une loi exponentielle, pour tous
   $s, t \geqslant 0$, $P_{X > s}(X > s + t) = P(X > t)$. Ici $s = 10\,000$ et $t = 20\,000$ :
   $$P_{X > 10\,000}(X > 30\,000) = P(X > 20\,000) = e^{-\lambda \times 20\,000} = e^{-1}
   \approx \boxed{0{,}368}.$$
   Le fait d'avoir déjà fonctionné $10\,000$ h ne « fatigue » pas l'ampoule : sa probabilité
   de tenir $20\,000$ h de plus est la même que celle d'une ampoule neuve de tenir
   $20\,000$ h.

6. On cherche $m$ tel que $P(X \leqslant m) = 0{,}5$ :
   $$1 - e^{-\lambda m} = 0{,}5 \iff e^{-\lambda m} = 0{,}5 \iff -\lambda m = \ln 0{,}5
   \iff m = \frac{\ln 2}{\lambda} = 20\,000\,\ln 2 \approx \boxed{13\,863 \text{ h}}.$$
   La médiane ($\approx 13\,900$ h) est **inférieure** à la moyenne ($20\,000$ h) : la moitié
   des ampoules tombent en panne avant $13\,900$ h, mais quelques ampoules à très longue durée
   de vie « tirent » la moyenne vers le haut (distribution dissymétrique).

### Partie B

1. On répète $10$ fois, de façon **identique et indépendante**, une épreuve de Bernoulli à
   deux issues : « l'ampoule dépasse $20\,000$ h » (succès, probabilité $p = e^{-1} \approx
   0{,}368$) ou non. $Y$ compte le nombre de succès : $Y$ suit donc la loi binomiale
   $\mathcal{B}(10\,;\,0{,}368)$.

2. $P(Y = 0) = \dbinom{10}{0}\,p^{0}\,(1 - p)^{10} = (1 - 0{,}368)^{10} = 0{,}632^{10}
   \approx \boxed{0{,}010}$.

3. $P(Y \geqslant 1) = 1 - P(Y = 0) = 1 - 0{,}632^{10} \approx 1 - 0{,}010
   = \boxed{0{,}990}$.

4. $E(Y) = n\,p = 10 \times 0{,}368 = \boxed{3{,}68}$. Sur de nombreux lots de $10$ ampoules,
   on peut s'attendre à ce qu'**en moyenne $3{,}68$ ampoules** (soit environ $3$ à $4$)
   dépassent $20\,000$ heures de fonctionnement.

<!-- notes : thèmes couverts —
Ex1 (Fonctions exp/ln + Calcul intégral) : modèle C(t)=20(e^{−0,2t}−e^{−t}), valeur initiale,
limite en +∞ (croissance/décroissance des exponentielles), dérivée, résolution de C'(t)=0 par
le logarithme (t=ln5/0,8≈2,01 h), tableau de variations, pic C_max≈10,7 mg/L, TVI pour deux
solutions de C(t)=5 (t1≈0,4 h, t2≈6,9 h, durée d'efficacité ≈6,5 h), primitive vérifiée
F(t)=−100e^{−0,2t}+20e^{−t}, intégrale exacte −100e^{−1,2}+20e^{−6}+80≈49,93, valeur moyenne
≈8,3 mg/L. Tous les calculs recontrôlés numériquement.
Ex2 (Suites et modèles d'évolution) : récurrence u_{n+1}=0,75u_n+50, minoration par 200,
u_{n+1}−u_n=0,25(200−u_n), décroissance, convergence (monotone minorée), suite auxiliaire
v_n=u_n−200 géométrique de raison 0,75 et v_0=300, terme général u_n=200+300·0,75^n, limite 200,
inéquation u_n<250 → n>ln(1/6)/ln(0,75)≈6,23 → n=7 (année 2033), algorithme de seuil (condition
u≥250). Contrôles : u1=425, u2=368,75, u6≈253,4, u7≈240,1.
Ex3 (Lois à densité + loi binomiale) : loi exponentielle λ=1/20000=5·10^{−5} h^{−1},
P(X>10000)=e^{−0,5}≈0,607, P(X≤30000)=1−e^{−1,5}≈0,777, P(10000≤X≤30000)=e^{−0,5}−e^{−1,5}≈0,384,
absence de vieillissement → P_{X>10000}(X>30000)=P(X>20000)=e^{−1}≈0,368, médiane
m=20000·ln2≈13863 h < moyenne 20000 (dissymétrie), puis loi binomiale B(10; 0,368) :
P(Y=0)≈0,010, P(Y≥1)≈0,990, E(Y)=3,68. Résultats vérifiés.
Points à vérifier à la relecture : arrondis demandés (10^{−3} pour les probabilités, 10^{−1} pour
concentrations et t1/t2, 10^{−2} pour l'intégrale) ; en Ex1 3.a la stricte croissance/décroissance
justifie l'unicité par TVI-bijection ; en Ex3 la propriété sans vieillissement doit être citée
(elle est au programme maths comp « lois à densité »). Programme : BO spécial n°8 du 25 juillet
2019, option mathématiques complémentaires, terminale générale. -->
