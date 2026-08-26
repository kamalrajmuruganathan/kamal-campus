---
id: bac-maths-expertes
titre: "Bac général — Mathématiques expertes (sujet d'entraînement)"
examen: "Bac général — option"
niveau: terminale
matiere: mathematiques
statut: brouillon
relu_par: null
---

# Baccalauréat général — Option mathématiques expertes (entraînement)

**Durée indicative : 3 h 00** — **Barème indicatif : 20 points** — **Calculatrice
autorisée** (mode examen).

Le candidat traite les **trois exercices**. La qualité de la rédaction, la clarté et la
précision des raisonnements sont prises en compte dans la notation. Toute trace de
recherche, même incomplète, sera valorisée. Le plan complexe est rapporté à un repère
orthonormé direct $(O\,;\vec u,\vec v)$.

| Exercice | 1 (Nombres complexes) | 2 (Arithmétique) | 3 (Graphes et matrices) | Total |
|---|---|---|---|---|
| Points | 7 | 6 | 7 | 20 |

---

## Exercice 1 — Nombres complexes : algèbre et géométrie (7 points)

### Partie A — Point de vue algébrique

On considère l'équation d'inconnue complexe $z$ :
$$(E)\ :\qquad z^{2} - 2z + 4 = 0.$$

1. Calculer le discriminant $\Delta$ de $(E)$ et résoudre $(E)$ dans $\mathbb{C}$. On
   notera $z_A$ la solution de partie imaginaire positive.
2. On pose donc $z_A = 1 + i\sqrt{3}$. Écrire $z_A^{\,2}$ sous forme algébrique.
3. a. Déterminer le module et un argument de $z_A$.
   b. En déduire l'écriture de $z_A$ sous forme exponentielle.
4. En utilisant la forme exponentielle, calculer $z_A^{\,6}$. Le résultat était-il
   prévisible sans la forme exponentielle ? Justifier brièvement.

### Partie B — Point de vue géométrique

Dans le plan complexe, on considère les trois points $A$, $B$ et $C$ d'affixes
respectives
$$z_A = 1 + i\sqrt{3},\qquad z_B = -2,\qquad z_C = 1 - i\sqrt{3}.$$

1. Démontrer que les points $A$, $B$ et $C$ appartiennent à un même cercle $\mathcal{C}$
   de centre $O$ dont on précisera le rayon.
2. Calculer les longueurs $AB$, $BC$ et $CA$. Quelle est la nature du triangle $ABC$ ?
3. a. Montrer que
      $$\dfrac{z_C - z_A}{z_B - z_A} = \dfrac{1}{2} + i\,\dfrac{\sqrt{3}}{2}.$$
   b. En déduire le module et un argument de ce quotient.
   c. Interpréter géométriquement ces deux résultats et confirmer la nature du triangle
      $ABC$ trouvée à la question B.2.

---

## Exercice 2 — Arithmétique : congruences et équations diophantiennes (6 points)

### Partie A — Congruences et restes de puissances

1. Justifier que $9 \equiv 1 \ [8]$. En déduire que, pour tout entier naturel $n$,
   $$3^{2n} \equiv 1 \ [8].$$
2. Déterminer le reste de la division euclidienne de $3^{100}$ par $8$.
3. On s'intéresse maintenant à $3^{n}$ pour un entier naturel $n$ quelconque.
   a. Montrer que si $n$ est **pair**, alors $3^{n} \equiv 1 \ [8]$.
   b. Montrer que si $n$ est **impair**, alors $3^{n} \equiv 3 \ [8]$.
   c. En déduire les restes possibles de la division de $3^{n}$ par $8$.

### Partie B — Une équation diophantienne et un système de congruences

1. On considère l'équation $(D)\,:\ 7x - 5y = 1$, d'inconnues entières $x$ et $y$.
   a. Vérifier que le couple $(3\,;4)$ est une solution de $(D)$.
   b. Démontrer que le couple $(x\,;y)$ d'entiers relatifs est solution de $(D)$ si et
      seulement s'il existe un entier $k$ tel que
      $$x = 3 + 5k \qquad\text{et}\qquad y = 4 + 7k.$$
2. Un laboratoire range des tubes à essai. On cherche les entiers naturels $n$ tels que :
   $$n \equiv 2 \ [7] \qquad\text{et}\qquad n \equiv 3 \ [5].$$
   a. Montrer qu'un tel entier $n$ s'écrit $n = 2 + 7x$, où $x$ est un entier vérifiant
      $7x \equiv 1 \ [5]$, puis $7x - 5y = 1$ pour un certain entier $y$.
   b. À l'aide de la partie B.1, en déduire que $n \equiv 23 \ [35]$.
   c. Déterminer le plus petit entier naturel $n$ vérifiant les deux congruences.

---

## Exercice 3 — Graphes et matrices, chaîne de Markov (7 points)

### Partie A — Graphe et comptage de chemins

Une petite commune est découpée en quatre quartiers $A$, $B$, $C$, $D$. On modélise le
réseau routier par un graphe non orienté dont les arêtes représentent les routes
directes reliant deux quartiers :
$$A\!-\!B,\quad A\!-\!C,\quad B\!-\!C,\quad B\!-\!D,\quad C\!-\!D.$$

1. Donner l'ordre du graphe, le degré de chaque sommet, et vérifier le théorème des
   degrés (« poignées de main »).
2. On numérote les sommets dans l'ordre $A$, $B$, $C$, $D$. Écrire la matrice
   d'adjacence $M$ de ce graphe.
3. On donne
   $$M^{2} = \begin{pmatrix} 2 & 1 & 1 & 2 \\ 1 & 3 & 2 & 1 \\ 1 & 2 & 3 & 1 \\ 2 & 1 & 1 & 2 \end{pmatrix}.$$
   a. Combien y a-t-il de chemins de longueur $2$ reliant le quartier $A$ au quartier
      $D$ ? Les décrire tous.
   b. Interpréter le coefficient $3$ situé ligne $2$, colonne $2$ de $M^{2}$.

### Partie B — Chaîne de Markov : suivre une habitude sportive

Une étude de santé publique suit, semaine après semaine, la pratique d'une activité
physique dans un groupe de personnes. Chaque semaine, une personne est dans l'état $\mathcal{A}$
(« active » : elle a fait du sport cette semaine) ou dans l'état $\mathcal{I}$ (« inactive »).
On observe que :

- une personne active une semaine reste active la semaine suivante avec la probabilité
  $0{,}8$ ;
- une personne inactive une semaine devient active la semaine suivante avec la
  probabilité $0{,}3$.

Pour tout entier naturel $n$, on note $\pi_n = (\,a_n \ \ i_n\,)$ la matrice ligne
donnant les probabilités qu'une personne prise au hasard soit respectivement active ou
inactive la semaine $n$. La semaine $0$, toutes les personnes sont actives : $\pi_0 = (\,1\ \ 0\,)$.

1. Représenter la situation par un graphe probabiliste orienté et pondéré (états
   $\mathcal{A}$ et $\mathcal{I}$).
2. Écrire la matrice de transition $P$ (états dans l'ordre $\mathcal{A}$, $\mathcal{I}$)
   et vérifier que la somme des coefficients de chaque ligne vaut $1$.
3. Calculer $\pi_1$, puis interpréter.
4. On admet que, pour tout $n$, $a_{n+1} = 0{,}5\,a_n + 0{,}3$.
   a. On pose $v_n = a_n - 0{,}6$. Démontrer que $(v_n)$ est géométrique de raison $0{,}5$.
   b. En déduire l'expression de $a_n$ en fonction de $n$, puis
      $\displaystyle\lim_{n\to+\infty} a_n$.
5. Déterminer la distribution invariante $\pi = (\,x\ \ y\,)$ de cette chaîne (avec
   $x + y = 1$) et vérifier la cohérence avec le résultat de la question B.4.

---

# Corrigé

## Exercice 1 — Nombres complexes

### Partie A

1. $\Delta = b^2 - 4ac = (-2)^2 - 4\times 1 \times 4 = 4 - 16 = -12 < 0$. Comme
   $\Delta < 0$, l'équation admet deux racines complexes conjuguées. Ici
   $\sqrt{-\Delta} = \sqrt{12} = 2\sqrt{3}$, donc
   $$z = \dfrac{-b \pm i\sqrt{-\Delta}}{2a} = \dfrac{2 \pm 2i\sqrt{3}}{2} = 1 \pm i\sqrt{3}.$$
   La solution de partie imaginaire positive est $z_A = 1 + i\sqrt{3}$ (l'autre est
   $\overline{z_A} = 1 - i\sqrt{3}$).

2. $z_A^{\,2} = (1 + i\sqrt{3})^2 = 1 + 2i\sqrt{3} + (i\sqrt{3})^2 = 1 + 2i\sqrt{3} - 3
   = -2 + 2i\sqrt{3}.$

3. a. $|z_A| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$. Pour l'argument $\theta$ :
   $$\cos\theta = \dfrac{1}{2}, \qquad \sin\theta = \dfrac{\sqrt{3}}{2},$$
   d'où $\theta = \dfrac{\pi}{3}$ (modulo $2\pi$).

   b. Forme exponentielle : $\boxed{z_A = 2\,e^{i\pi/3}}$.

4. $z_A^{\,6} = \left(2\,e^{i\pi/3}\right)^6 = 2^6\,e^{i\,6\pi/3} = 64\,e^{i2\pi} = 64\times 1 = 64$.
   Le résultat ($z_A^6 = 64$, un **réel**) était prévisible : $6\times\frac{\pi}{3} = 2\pi$
   est un tour complet, donc $z_A^6$ a pour argument $0$, c'est un réel positif, de module
   $2^6 = 64$.

### Partie B

1. $|z_A| = 2$ (question A.3), $|z_B| = |-2| = 2$, et $|z_C| = |1 - i\sqrt{3}| = \sqrt{1+3} = 2$.
   Les trois affixes ont pour module $2$, donc $OA = OB = OC = 2$ : les points $A$, $B$,
   $C$ sont sur le cercle $\mathcal{C}$ de centre $O$ et de **rayon $2$**.

2. $AB = |z_B - z_A| = |-2 - (1 + i\sqrt{3})| = |-3 - i\sqrt{3}| = \sqrt{9 + 3} = \sqrt{12} = 2\sqrt{3}$.
   $BC = |z_C - z_B| = |(1 - i\sqrt{3}) - (-2)| = |3 - i\sqrt{3}| = \sqrt{9 + 3} = 2\sqrt{3}$.
   $CA = |z_A - z_C| = |(1 + i\sqrt{3}) - (1 - i\sqrt{3})| = |2i\sqrt{3}| = 2\sqrt{3}$.
   Les trois côtés sont égaux : le triangle $ABC$ est **équilatéral**.

3. a. On calcule numérateur et dénominateur :
   $z_C - z_A = (1 - i\sqrt{3}) - (1 + i\sqrt{3}) = -2i\sqrt{3}$ et
   $z_B - z_A = -3 - i\sqrt{3}$. Alors
   $$\dfrac{z_C - z_A}{z_B - z_A} = \dfrac{-2i\sqrt{3}}{-3 - i\sqrt{3}}
   = \dfrac{2i\sqrt{3}}{3 + i\sqrt{3}}.$$
   On multiplie haut et bas par le conjugué $3 - i\sqrt{3}$ du dénominateur :
   $$= \dfrac{2i\sqrt{3}\,(3 - i\sqrt{3})}{(3 + i\sqrt{3})(3 - i\sqrt{3})}
   = \dfrac{6i\sqrt{3} - 2i^2\times 3}{3^2 + (\sqrt{3})^2}
   = \dfrac{6 + 6i\sqrt{3}}{9 + 3} = \dfrac{6 + 6i\sqrt{3}}{12}
   = \dfrac{1}{2} + i\,\dfrac{\sqrt{3}}{2}.$$

   b. Ce complexe a pour module
   $\sqrt{\left(\tfrac12\right)^2 + \left(\tfrac{\sqrt3}{2}\right)^2} = \sqrt{\tfrac14 + \tfrac34} = 1$
   et pour argument $\dfrac{\pi}{3}$ (car $\cos = \tfrac12$, $\sin = \tfrac{\sqrt3}{2}$).
   Autrement dit, ce quotient vaut $e^{i\pi/3}$.

   c. Le **module** du quotient vaut $\dfrac{CA}{AB} = 1$, donc $CA = AB$ ; l'**argument**
   vaut l'angle orienté $\left(\overrightarrow{AB}, \overrightarrow{AC}\right) = \dfrac{\pi}{3}$.
   Le triangle $ABC$ a donc deux côtés égaux issus de $A$ ($AB = AC$) et l'angle entre eux
   vaut $60^\circ$ : il est bien **équilatéral**, ce qui confirme la question B.2.

## Exercice 2 — Arithmétique

### Partie A

1. $9 - 1 = 8 = 8\times 1$, donc $8 \mid (9 - 1)$, c'est-à-dire $9 \equiv 1 \ [8]$. Comme
   $3^{2n} = (3^2)^n = 9^n$, la compatibilité des congruences avec les puissances donne
   $$3^{2n} = 9^n \equiv 1^n \equiv 1 \ [8].$$

2. $100 = 2\times 50$, donc $3^{100} = 3^{2\times 50} \equiv 1 \ [8]$ d'après la question 1.
   Le reste de la division de $3^{100}$ par $8$ est donc $\boxed{1}$.

3. a. Si $n$ est pair, $n = 2k$ et $3^{n} = 3^{2k} \equiv 1 \ [8]$ (question 1).

   b. Si $n$ est impair, $n = 2k + 1$ et
   $3^{n} = 3^{2k+1} = 3\times 3^{2k} \equiv 3\times 1 \equiv 3 \ [8]$.

   c. Les seuls restes possibles de $3^{n}$ modulo $8$ sont donc $\boxed{1}$ (si $n$ pair)
   et $\boxed{3}$ (si $n$ impair).

### Partie B

1. a. $7\times 3 - 5\times 4 = 21 - 20 = 1$ : le couple $(3\,;4)$ est bien solution de $(D)$.

   b. Soit $(x\,;y)$ une solution. En soustrayant $7\times 3 - 5\times 4 = 1$ de
   $7x - 5y = 1$ :
   $$7(x - 3) - 5(y - 4) = 0 \quad\Longleftrightarrow\quad 7(x - 3) = 5(y - 4).$$
   Ainsi $5 \mid 7(x - 3)$ ; comme $\mathrm{pgcd}(5,7) = 1$, le théorème de Gauss donne
   $5 \mid (x - 3)$, donc $x - 3 = 5k$ soit $x = 3 + 5k$ pour un entier $k$. En reportant :
   $7\times 5k = 5(y - 4)$, d'où $y - 4 = 7k$, c'est-à-dire $y = 4 + 7k$.
   Réciproquement, tout couple $x = 3 + 5k$, $y = 4 + 7k$ vérifie
   $7x - 5y = 21 + 35k - 20 - 35k = 1$. Les solutions de $(D)$ sont donc exactement
   $$\boxed{(x\,;y) = (3 + 5k\,;\ 4 + 7k),\quad k \in \mathbb{Z}}.$$

2. a. Si $n \equiv 2 \ [7]$, il existe un entier $x$ tel que $n = 2 + 7x$. La seconde
   condition $n \equiv 3 \ [5]$ s'écrit $2 + 7x \equiv 3 \ [5]$, soit $7x \equiv 1 \ [5]$.
   Cette congruence signifie que $5 \mid (7x - 1)$, c'est-à-dire qu'il existe un entier
   $y$ tel que $7x - 1 = 5y$, soit $7x - 5y = 1$.

   b. D'après la partie B.1, $x = 3 + 5k$ (avec $k \in \mathbb{Z}$). Donc
   $$n = 2 + 7x = 2 + 7(3 + 5k) = 2 + 21 + 35k = 23 + 35k,$$
   ce qui signifie exactement $n \equiv 23 \ [35]$.

   c. Le plus petit entier naturel vérifiant les deux congruences est obtenu pour $k = 0$ :
   $\boxed{n = 23}$.
   *(Contrôle : $23 = 7\times 3 + 2$ donc $23 \equiv 2 \ [7]$ ✓, et $23 = 5\times 4 + 3$
   donc $23 \equiv 3 \ [5]$ ✓.)*

## Exercice 3 — Graphes et matrices

### Partie A

1. Le graphe a $4$ sommets : son **ordre est $4$**. Les degrés :
   $\deg(A) = 2$ (arêtes $AB$, $AC$), $\deg(B) = 3$ ($BA$, $BC$, $BD$),
   $\deg(C) = 3$ ($CA$, $CB$, $CD$), $\deg(D) = 2$ ($DB$, $DC$). La somme des degrés vaut
   $2 + 3 + 3 + 2 = 10 = 2\times 5$, ce qui correspond bien à deux fois le nombre d'arêtes
   ($5$ arêtes). Le théorème des degrés est vérifié.

2. La matrice d'adjacence (ordre $A$, $B$, $C$, $D$) est
   $$M = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{pmatrix}.$$
   *(Elle est symétrique, comme attendu pour un graphe non orienté.)*

3. a. Le coefficient ligne $A$ (1re), colonne $D$ (4e) de $M^2$ vaut $2$ : il y a
   **$2$ chemins de longueur $2$** de $A$ vers $D$, à savoir $A\!-\!B\!-\!D$ et
   $A\!-\!C\!-\!D$.

   b. Le coefficient ligne $2$, colonne $2$ de $M^2$ vaut $3$ : il y a $3$ chemins de
   longueur $2$ partant de $B$ et revenant en $B$, c'est-à-dire $3$ allers-retours
   $B\!-\!X\!-\!B$ (par $X = A$, $X = C$ ou $X = D$). Ce nombre est aussi égal au degré de
   $B$.

### Partie B

1. Graphe probabiliste à deux états $\mathcal{A}$ et $\mathcal{I}$ :
   ```
        0,8 ⟲                    ⟳ 0,7
             ┌────── 0,2 ──────►
        ( A )                    ( I )
             ◄────── 0,3 ──────┘
   ```
   Boucle $0{,}8$ sur $\mathcal{A}$, flèche $\mathcal{A}\to\mathcal{I}$ de poids $0{,}2$ ;
   boucle $0{,}7$ sur $\mathcal{I}$, flèche $\mathcal{I}\to\mathcal{A}$ de poids $0{,}3$.

2. Matrice de transition (états $\mathcal{A}$ puis $\mathcal{I}$) :
   $$P = \begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}3 & 0{,}7 \end{pmatrix}.$$
   Ligne $1$ : $0{,}8 + 0{,}2 = 1$ ; ligne $2$ : $0{,}3 + 0{,}7 = 1$. ✓

3. $\pi_1 = \pi_0\,P = (\,1\ \ 0\,)\begin{pmatrix} 0{,}8 & 0{,}2 \\ 0{,}3 & 0{,}7 \end{pmatrix}
   = (\,0{,}8\ \ 0{,}2\,)$. Après une semaine, une personne (partie active) a la probabilité
   $0{,}8$ d'être encore active et $0{,}2$ d'être devenue inactive.

4. a. $v_{n+1} = a_{n+1} - 0{,}6 = (0{,}5\,a_n + 0{,}3) - 0{,}6 = 0{,}5\,a_n - 0{,}3
   = 0{,}5\,(a_n - 0{,}6) = 0{,}5\,v_n.$
   Donc $(v_n)$ est **géométrique de raison $0{,}5$**, de premier terme
   $v_0 = a_0 - 0{,}6 = 1 - 0{,}6 = 0{,}4$.

   b. On en déduit $v_n = 0{,}4\times 0{,}5^{\,n}$, puis
   $$a_n = v_n + 0{,}6 = 0{,}6 + 0{,}4\times 0{,}5^{\,n}.$$
   Comme $-1 < 0{,}5 < 1$, $\displaystyle\lim_{n\to+\infty} 0{,}5^{\,n} = 0$, donc
   $\displaystyle\lim_{n\to+\infty} a_n = 0{,}6$.
   *(Contrôle : $a_1 = 0{,}6 + 0{,}4\times 0{,}5 = 0{,}8$, cohérent avec $\pi_1$.)*

5. La distribution invariante $\pi = (\,x\ \ y\,)$ vérifie $\pi = \pi P$ et $x + y = 1$.
   La première coordonnée de $\pi P$ donne $x = 0{,}8\,x + 0{,}3\,y$. Avec $y = 1 - x$ :
   $$x = 0{,}8\,x + 0{,}3\,(1 - x) \iff x = 0{,}5\,x + 0{,}3 \iff 0{,}5\,x = 0{,}3
   \iff x = 0{,}6.$$
   Donc $\pi = (\,0{,}6\ \ 0{,}4\,)$. À long terme, environ $60\,\%$ des personnes sont
   actives : cela **confirme** la limite $\lim a_n = 0{,}6$ trouvée à la question B.4.

<!-- notes : thèmes couverts — Ex1 nombres complexes (algébrique + géométrique) : second
degré à Δ<0 et racines conjuguées, forme algébrique/exponentielle, module-argument,
puissance via exponentielle (z_A^6=64), cercle circonscrit, longueurs, quotient
(z_C−z_A)/(z_B−z_A)=e^{iπ/3}, angle orienté, triangle équilatéral. Ex2 arithmétique :
congruences, 3^{2n}≡1[8], restes de puissances selon parité, théorème de Gauss, équation
diophantienne 7x−5y=1 et paramétrage, système de congruences n≡2[7], n≡3[5] → n≡23[35].
Ex3 graphes et matrices : ordre/degrés/poignées de main, matrice d'adjacence, comptage de
chemins par M², chaîne de Markov à 2 états, matrice de transition, π_n=π_0 P^n, suite
auxiliaire géométrique, distribution invariante (0,6 ; 0,4). Programme option maths
expertes (BO spécial n°8 du 25/7/2019). Résultats vérifiés numériquement : z_A=1+i√3,
|z_A|=2, arg=π/3, z_A^6=64 ; AB=BC=CA=2√3 ; quotient=½+i√3/2 (module 1, arg π/3) ;
3^{100}≡1[8] ; solutions (3+5k ; 4+7k) ; n=23 ; M² fournie (chemins A→D = 2) ; invariante
(0,6 ; 0,4) et a_n=0,6+0,4·0,5^n. Points à vérifier à la relecture : rendu ASCII des deux
graphes (à remplacer par de vrais schémas) et le statut de l'épreuve (l'option
maths expertes n'a pas d'épreuve terminale écrite : sujet d'entraînement uniquement). -->
