---
id: bac-spe-maths-3
titre: "Bac blanc n°3 — Spé maths : test de dépistage, tétraèdre, logarithme et suite, QCM"
examen: "Bac général — spécialité"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Spécialité mathématiques, bac blanc n°3

**Durée : 4 h 00** — **Barème indicatif : 20 points** — **Calculatrice autorisée**
(mode examen).

Le candidat traite les **quatre exercices**, qui sont indépendants. La qualité de la
rédaction, la clarté et la précision des raisonnements sont prises en compte dans la
notation. Toute trace de recherche, même incomplète, sera valorisée.

| Exercice | 1 (Probabilités) | 2 (Espace) | 3 (Fonction ln, suite) | 4 (QCM) | Total |
|---|---|---|---|---|---|
| Points | 5 | 5 | 6 | 4 | 20 |

---

## Exercice 1 — Un test de dépistage (5 points)

Dans une population, $8\,\%$ des personnes sont allergiques à un certain pollen. On dispose
d'un test de dépistage :

- si la personne est allergique, le test est positif dans $95\,\%$ des cas ;
- si la personne n'est pas allergique, le test est positif dans $4\,\%$ des cas.

On choisit une personne au hasard dans la population. On note $M$ l'évènement « la personne
est allergique » et $T$ l'évènement « le test est positif ».

### Partie A

1. Représenter la situation par un arbre pondéré.
2. Montrer que $P(T) = 0{,}112\,8$.
3. Le test d'une personne est positif. Calculer la probabilité qu'elle soit réellement
   allergique. Arrondir à $10^{-3}$. Commenter.

### Partie B

On fait passer le test à $50$ personnes choisies au hasard. La population est assez grande
pour assimiler ce choix à des tirages avec remise. On note $X$ le nombre de tests positifs.

4. Justifier que $X$ suit une loi binomiale dont on précisera les paramètres.
5. Calculer l'espérance de $X$ et interpréter.
6. Calculer $P(X = 0)$ puis $P(X \geqslant 10)$. Arrondir à $10^{-3}$.

### Partie C

On fait passer le test à $n$ personnes ($n \geqslant 1$). Pour $i$ entier de $1$ à $n$, on
note $Y_i$ la variable aléatoire qui vaut $1$ si le test de la $i$-ième personne est positif
et $0$ sinon. Les variables $Y_1, \dots, Y_n$ sont indépendantes et suivent la même loi de
Bernoulli de paramètre $p = 0{,}112\,8$. On note $M_n = \dfrac{Y_1 + \dots + Y_n}{n}$ la
proportion de tests positifs.

7. Donner l'espérance et la variance de $Y_1$, puis l'espérance et la variance de $M_n$.
8. À l'aide de l'inégalité de concentration, déterminer une valeur de $n$ à partir de
   laquelle la probabilité que la proportion $M_n$ s'écarte de $p$ d'au moins $0{,}05$ est
   inférieure ou égale à $0{,}1$.

---

## Exercice 2 — Un tétraèdre (5 points)

L'espace est muni d'un repère orthonormé $(\mathrm{O}\,;\vec\imath,\vec\jmath,\vec k)$. On
considère les points $\mathrm{A}(1\,;0\,;0)$, $\mathrm{B}(0\,;2\,;0)$ et $\mathrm{C}(0\,;0\,;2)$,
ainsi que le vecteur $\vec n\begin{pmatrix}2\\1\\1\end{pmatrix}$.

1. Montrer que $\vec n$ est un vecteur normal au plan $(\mathrm{ABC})$, puis qu'une équation
   cartésienne de ce plan est $2x + y + z - 2 = 0$.
2. On note $\Delta$ la droite passant par $\mathrm{O}$ et orthogonale au plan $(\mathrm{ABC})$.
   Donner une représentation paramétrique de $\Delta$.
3. Déterminer les coordonnées du point $\mathrm{H}$, intersection de $\Delta$ et du plan
   $(\mathrm{ABC})$. En déduire que la distance du point $\mathrm{O}$ au plan $(\mathrm{ABC})$
   est égale à $\dfrac{\sqrt6}{3}$.
4. Calculer le volume du tétraèdre $\mathrm{OABC}$. *On rappelle que le volume d'un
   tétraèdre est $V = \dfrac{1}{3} \times \mathcal{B} \times h$.*
   En déduire l'aire du triangle $\mathrm{ABC}$.
5. Calculer le produit scalaire $\overrightarrow{\mathrm{AB}} \cdot \overrightarrow{\mathrm{AC}}$,
   puis une mesure de l'angle $\widehat{\mathrm{BAC}}$ arrondie au dixième de degré.

---

## Exercice 3 — Logarithme et suite récurrente (6 points)

### Partie A — Une inégalité

On considère la fonction $f$ définie sur $]0\,;+\infty[$ par $f(x) = x - 1 - \ln x$.

1. Déterminer la limite de $f$ en $0$. On admet que $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$.
2. Calculer $f'(x)$, étudier son signe et dresser le tableau de variations de $f$.
3. En déduire que, pour tout réel $x > 0$, $\ln x \leqslant x - 1$. Interpréter graphiquement
   cette inégalité à l'aide de la tangente à la courbe de la fonction $\ln$ au point d'abscisse $1$.

### Partie B — Une suite

On considère la fonction $g$ définie sur $]0\,;+\infty[$ par $g(x) = x - \ln x$ et la suite
$(u_n)$ définie par $u_0 = 2$ et, pour tout entier naturel $n$, $u_{n+1} = g(u_n)$.

4. Justifier que, pour tout $x > 0$, $g(x) \geqslant 1$, et que $g$ est croissante sur $[1\,;+\infty[$.
5. Démontrer par récurrence que, pour tout entier naturel $n$, $1 \leqslant u_{n+1} \leqslant u_n$.
6. En déduire que la suite $(u_n)$ converge, puis déterminer sa limite.
7. On considère la fonction Python ci-dessous.
   ```python
   from math import log

   def termes(n):
       L = [2]
       for k in range(n):
           L.append(L[-1] - log(L[-1]))
       return L
   ```
   Que renvoie l'appel `termes(3)` ? Donner les valeurs arrondies à $10^{-4}$. Quel est le plus
   petit entier $n$ tel que $u_n - 1 < 10^{-3}$ ?

### Partie C — Une aire

8. À l'aide d'une intégration par parties, montrer que $\displaystyle\int_1^{\mathrm{e}} \ln x \, \mathrm{d}x = 1$.
9. En déduire l'aire, en unités d'aire, du domaine compris entre la droite d'équation
   $y = x - 1$, la courbe de la fonction $\ln$ et les droites d'équations $x = 1$ et $x = \mathrm{e}$.
   Donner la valeur exacte, puis une valeur approchée à $10^{-2}$.

---

## Exercice 4 — QCM (4 points)

Pour chaque question, une seule des quatre réponses est exacte. Indiquer sur la copie le
numéro de la question et la lettre de la réponse choisie. Aucune justification n'est
demandée. Une bonne réponse rapporte $1$ point ; une réponse fausse, une absence de réponse
ou plusieurs réponses ne rapportent ni n'enlèvent de point.

1. L'ensemble des solutions dans $[-\pi\,;\pi]$ de l'équation $\cos x = \dfrac12$ est :
   **a.** $\left\{\dfrac{\pi}{3}\right\}$ ; **b.** $\left\{-\dfrac{\pi}{3}\,;\dfrac{\pi}{3}\right\}$ ;
   **c.** $\left\{\dfrac{\pi}{6}\,;\dfrac{5\pi}{6}\right\}$ ; **d.** $\left\{-\dfrac{\pi}{6}\,;\dfrac{\pi}{6}\right\}$.
2. Le nombre de codes de $4$ chiffres (de $0$ à $9$) dont les chiffres sont **tous différents** est :
   **a.** $10^4$ ; **b.** $210$ ; **c.** $5\,040$ ; **d.** $24$.
3. Après l'instruction Python `L = [k**2 for k in range(1, 6) if k % 2 == 1]`, la liste `L` vaut :
   **a.** `[1, 4, 9, 16, 25]` ; **b.** `[4, 16]` ; **c.** `[1, 9, 25, 49]` ; **d.** `[1, 9, 25]`.
4. Une primitive sur $\mathbb{R}$ de la fonction $x \mapsto x\,\mathrm{e}^{x^2}$ est :
   **a.** $x \mapsto \dfrac12\,\mathrm{e}^{x^2}$ ; **b.** $x \mapsto \mathrm{e}^{x^2}$ ;
   **c.** $x \mapsto \dfrac{x^2}{2}\,\mathrm{e}^{x^2}$ ; **d.** $x \mapsto 2x\,\mathrm{e}^{x^2}$.

---

# Corrigé

## Exercice 1 — Un test de dépistage

**1.** Arbre : $M$ ($0{,}08$) puis $T$ ($0{,}95$) et $\overline{T}$ ($0{,}05$) ;
$\overline{M}$ ($0{,}92$) puis $T$ ($0{,}04$) et $\overline{T}$ ($0{,}96$).

**2.** D'après la formule des probabilités totales ($M$ et $\overline M$ forment une partition) :
$$P(T) = P(M)\,P_M(T) + P(\overline M)\,P_{\overline M}(T) = 0{,}08 \times 0{,}95 + 0{,}92 \times 0{,}04 = 0{,}076 + 0{,}036\,8 = 0{,}112\,8.$$

**3.** $$P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}076}{0{,}112\,8} = \frac{95}{141} \approx 0{,}674.$$
Seulement environ $67\,\%$ des personnes testées positives sont réellement allergiques :
un test positif doit être confirmé (environ un tiers des positifs sont des « faux positifs »,
car les non-allergiques sont très nombreux).

**4.** On répète $50$ fois, de manière indépendante, la même épreuve de Bernoulli dont le
succès « le test est positif » a pour probabilité $p = 0{,}112\,8$. $X$ compte le nombre de
succès : $X$ suit la loi binomiale $\mathcal{B}(50\,;0{,}112\,8)$.

**5.** $E(X) = np = 50 \times 0{,}112\,8 = 5{,}64$. Sur un grand nombre de groupes de $50$
personnes, on obtiendrait en moyenne environ $5{,}64$ tests positifs par groupe.

**6.** $P(X = 0) = (1 - 0{,}112\,8)^{50} = 0{,}887\,2^{50} \approx 0{,}003$.
À la calculatrice : $P(X \geqslant 10) = 1 - P(X \leqslant 9) \approx 0{,}050$.

**7.** $Y_1$ suit une loi de Bernoulli de paramètre $p$ : $E(Y_1) = p = 0{,}112\,8$ et
$V(Y_1) = p(1-p) = 0{,}112\,8 \times 0{,}887\,2 \approx 0{,}100\,1$.
Par linéarité de l'espérance, $E(M_n) = \dfrac{1}{n} \times n\,p = p$. Les $Y_i$ étant
indépendantes, $V(M_n) = \dfrac{1}{n^2} \times n\,V(Y_1) = \dfrac{V(Y_1)}{n} = \dfrac{p(1-p)}{n}$.

**8.** D'après l'inégalité de concentration, pour tout $\delta > 0$ :
$P\big(|M_n - p| \geqslant \delta\big) \leqslant \dfrac{V(Y_1)}{n\,\delta^2}$. Avec $\delta = 0{,}05$,
il suffit que
$$\frac{0{,}100\,08}{n \times 0{,}05^2} \leqslant 0{,}1 \iff n \geqslant \frac{0{,}100\,08}{0{,}1 \times 0{,}002\,5} \approx 400{,}3.$$
Il suffit donc de prendre $n \geqslant 401$ (cette valeur garantit la condition ; elle n'est
pas forcément la plus petite possible, car l'inégalité n'est qu'une majoration).

## Exercice 2 — Un tétraèdre

**1.** $\overrightarrow{\mathrm{AB}}\begin{pmatrix}-1\\2\\0\end{pmatrix}$ et
$\overrightarrow{\mathrm{AC}}\begin{pmatrix}-1\\0\\2\end{pmatrix}$ ne sont pas colinéaires
(la deuxième coordonnée de $\overrightarrow{\mathrm{AC}}$ est nulle, pas celle de
$\overrightarrow{\mathrm{AB}}$). De plus
$$\vec n \cdot \overrightarrow{\mathrm{AB}} = -2 + 2 + 0 = 0 \qquad\text{et}\qquad \vec n \cdot \overrightarrow{\mathrm{AC}} = -2 + 0 + 2 = 0.$$
$\vec n$ est orthogonal à deux vecteurs non colinéaires du plan : il est normal au plan
$(\mathrm{ABC})$. Une équation est donc $2x + y + z + d = 0$ ; comme $\mathrm{A}$ appartient au
plan, $2 + d = 0$, soit $d = -2$ : $(\mathrm{ABC}) : 2x + y + z - 2 = 0$.

**2.** $\Delta$ passe par $\mathrm{O}$ et a pour vecteur directeur $\vec n$ :
$$\Delta : \begin{cases} x = 2t \\ y = t \\ z = t \end{cases} \qquad (t \in \mathbb{R}).$$

**3.** On remplace dans l'équation du plan : $2(2t) + t + t - 2 = 0 \iff 6t = 2 \iff t = \dfrac13$.
Donc $\mathrm{H}\left(\dfrac23\,;\dfrac13\,;\dfrac13\right)$. $\mathrm{H}$ est le projeté orthogonal de
$\mathrm{O}$ sur le plan, et la distance cherchée est
$$\mathrm{OH} = \sqrt{\frac49 + \frac19 + \frac19} = \sqrt{\frac69} = \frac{\sqrt6}{3}.$$

**4.** Le triangle $\mathrm{OAB}$ est rectangle en $\mathrm{O}$, dans le plan $z = 0$ ; son aire
est $\dfrac{1 \times 2}{2} = 1$. La hauteur correspondante est $\mathrm{OC} = 2$ (l'axe des
cotes est orthogonal à ce plan). Donc
$$V = \frac13 \times 1 \times 2 = \frac23 \ \text{u.v.}$$
En prenant $\mathrm{ABC}$ comme base, la hauteur est $\mathrm{OH}$ :
$\dfrac23 = \dfrac13 \times \mathcal{A}_{\mathrm{ABC}} \times \dfrac{\sqrt6}{3}$, d'où
$$\mathcal{A}_{\mathrm{ABC}} = \frac{2 \times 3}{\sqrt6} = \frac{6}{\sqrt6} = \sqrt6 \approx 2{,}45 \ \text{u.a.}$$

**5.** $\overrightarrow{\mathrm{AB}} \cdot \overrightarrow{\mathrm{AC}} = (-1)(-1) + 2 \times 0 + 0 \times 2 = 1$.
$\mathrm{AB} = \mathrm{AC} = \sqrt{1 + 4} = \sqrt5$. Donc
$$\cos\widehat{\mathrm{BAC}} = \frac{\overrightarrow{\mathrm{AB}} \cdot \overrightarrow{\mathrm{AC}}}{\mathrm{AB} \times \mathrm{AC}} = \frac{1}{5}
\qquad\text{et}\qquad \widehat{\mathrm{BAC}} \approx 78{,}5^\circ.$$

## Exercice 3 — Logarithme et suite récurrente

**1.** $\displaystyle\lim_{x \to 0^+} \ln x = -\infty$, donc $\displaystyle\lim_{x \to 0^+} (-\ln x) = +\infty$ et
$\displaystyle\lim_{x \to 0^+} (x - 1) = -1$ : par somme, $\displaystyle\lim_{x \to 0^+} f(x) = +\infty$.

**2.** $f'(x) = 1 - \dfrac1x = \dfrac{x - 1}{x}$. Sur $]0\,;+\infty[$, $x > 0$, donc $f'(x)$ a le
signe de $x - 1$ : négatif sur $]0\,;1[$, nul en $1$, positif sur $]1\,;+\infty[$.

| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f$ | $+\infty$ | $\searrow$ | $0$ | $\nearrow$ | $+\infty$ |

avec $f(1) = 1 - 1 - \ln 1 = 0$.

**3.** Le minimum de $f$ sur $]0\,;+\infty[$ est $0$ : pour tout $x > 0$, $f(x) \geqslant 0$,
c'est-à-dire $\ln x \leqslant x - 1$.
La tangente à la courbe de $\ln$ au point d'abscisse $1$ a pour équation
$y = \ln'(1)(x - 1) + \ln 1 = x - 1$. L'inégalité signifie que la courbe de la fonction $\ln$
est **en dessous de cette tangente** (ce qui traduit la concavité de $\ln$).

**4.** $g(x) = f(x) + 1 \geqslant 0 + 1 = 1$ pour tout $x > 0$.
$g'(x) = 1 - \dfrac1x = \dfrac{x-1}{x} \geqslant 0$ pour $x \geqslant 1$ : $g$ est croissante sur $[1\,;+\infty[$.

**5.** Soit $\mathcal{P}(n)$ : « $1 \leqslant u_{n+1} \leqslant u_n$ ».
- *Initialisation* : $u_0 = 2$ et $u_1 = 2 - \ln 2 \approx 1{,}307$ ; on a bien $1 \leqslant u_1 \leqslant u_0$.
- *Hérédité* : supposons $1 \leqslant u_{n+1} \leqslant u_n$ pour un entier $n$. La fonction $g$ est
  croissante sur $[1\,;+\infty[$, donc $g(1) \leqslant g(u_{n+1}) \leqslant g(u_n)$, c'est-à-dire
  $1 \leqslant u_{n+2} \leqslant u_{n+1}$ (car $g(1) = 1 - \ln 1 = 1$). $\mathcal{P}(n+1)$ est vraie.
- *Conclusion* : pour tout entier naturel $n$, $1 \leqslant u_{n+1} \leqslant u_n$.

**6.** La suite $(u_n)$ est décroissante et minorée par $1$ : elle converge vers un réel
$\ell \geqslant 1$. La fonction $g$ est continue sur $[1\,;+\infty[$ et $u_{n+1} = g(u_n)$ ; par
passage à la limite, $\ell = g(\ell)$, soit $\ell = \ell - \ln \ell$, donc $\ln \ell = 0$ et
$\ell = 1$. La suite converge vers $\boxed{1}$.

**7.** `termes(3)` renvoie la liste des termes $u_0$ à $u_3$ :
`[2, 1.3069, 1.0392, 1.0007]` (valeurs arrondies à $10^{-4}$ ; plus précisément
$u_3 \approx 1{,}000\,75$).
On a $u_2 - 1 \approx 0{,}039 \geqslant 10^{-3}$ et $u_3 - 1 \approx 0{,}000\,75 < 10^{-3}$ :
le plus petit entier cherché est $n = 3$.

**8.** On pose $u(x) = \ln x$, $v'(x) = 1$, donc $u'(x) = \dfrac1x$, $v(x) = x$ ; ces fonctions
sont dérivables à dérivées continues sur $[1\,;\mathrm{e}]$ :
$$\int_1^{\mathrm{e}} \ln x\,\mathrm{d}x = \big[x \ln x\big]_1^{\mathrm{e}} - \int_1^{\mathrm{e}} x \times \frac1x\,\mathrm{d}x
= (\mathrm{e} - 0) - (\mathrm{e} - 1) = 1.$$

**9.** D'après la partie A, sur $[1\,;\mathrm{e}]$, $x - 1 \geqslant \ln x$ : la droite est au-dessus
de la courbe. L'aire cherchée est
$$\int_1^{\mathrm{e}} \big((x - 1) - \ln x\big)\,\mathrm{d}x = \left[\frac{x^2}{2} - x\right]_1^{\mathrm{e}} - 1
= \left(\frac{\mathrm{e}^2}{2} - \mathrm{e}\right) - \left(\frac12 - 1\right) - 1 = \frac{\mathrm{e}^2}{2} - \mathrm{e} - \frac12 \approx 0{,}48 \ \text{u.a.}$$

## Exercice 4 — QCM

1. **b.** $\cos x = \dfrac12 = \cos\dfrac{\pi}{3}$ ; dans $[-\pi\,;\pi]$, les solutions sont
   $-\dfrac{\pi}{3}$ et $\dfrac{\pi}{3}$.
2. **c.** On choisit les chiffres dans l'ordre sans répétition : $10 \times 9 \times 8 \times 7 = 5\,040$
   (nombre de $4$-uplets d'éléments distincts d'un ensemble à $10$ éléments).
3. **d.** `range(1, 6)` donne $1, 2, 3, 4, 5$ ; on garde les impairs $1, 3, 5$ et on les élève
   au carré : `[1, 9, 25]`.
4. **a.** La dérivée de $x \mapsto \dfrac12\,\mathrm{e}^{x^2}$ est $\dfrac12 \times 2x\,\mathrm{e}^{x^2} = x\,\mathrm{e}^{x^2}$.

<!-- notes : sujet original (pas une annale). Programme : docs/programme-terminale-specialite-maths-2027.txt — formule des
probabilités totales et loi binomiale (« Succession d'épreuves indépendantes »), inégalité de concentration
(« Concentration, loi des grands nombres »), produit scalaire, projeté orthogonal et distance (« Orthogonalité et distances »),
représentation paramétrique, équation de plan, suites u(n+1) = f(u(n)) et continuité, fonction ln, intégration par parties,
aire entre deux courbes, listes Python, dénombrement, cos x = a.
Valeurs vérifiées par script (sympy) : P(T) = 0,1128 ; P_T(M) = 95/141 ≈ 0,674 ; E(X) = 5,64 ; P(X=0) ≈ 0,0025 ;
P(X≥10) ≈ 0,0502 ; V = 0,10008 → n ≥ 400,3 ; H(2/3 ; 1/3 ; 1/3), OH = √6/3, V = 2/3, aire ABC = √6 (aussi par produit vectoriel) ;
cos BAC = 1/5 → 78,46° ; u = [2 ; 1,30685 ; 1,03923 ; 1,00075] ; ∫ ln = 1 ; aire = e²/2 − e − 1/2 ≈ 0,4762 ; QCM : b, c, d, a. -->
