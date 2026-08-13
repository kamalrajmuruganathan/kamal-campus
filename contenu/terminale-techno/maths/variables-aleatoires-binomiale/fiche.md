---
id: tale-techno-math-variables-aleatoires-binomiale
titre: "Variables aléatoires et loi binomiale"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Probabilités et variables aléatoires (Première technologique)
  - Probabilités conditionnelles et arbres pondérés (Terminale techno)
  - Puissances et calcul avec des pourcentages (automatismes)
statut: brouillon
relu_par: null
---

# Variables aléatoires et loi binomiale

> Tu lances 10 fois la même pièce, tu contrôles 20 produits à la chaîne, tu
> réponds au hasard à un QCM de 6 questions : à chaque fois, la **même**
> expérience à deux issues se répète, et tu comptes les succès. Cette situation
> a une loi toute prête — la **loi binomiale** — et un outil de calcul vieux de
> plusieurs siècles : le **triangle de Pascal**. Ce chapitre te donne aussi le
> nombre qui résume une variable aléatoire : son **espérance**.

---

## 1. Variable aléatoire discrète finie et loi de probabilité

### Définition

Une **variable aléatoire** $X$ associe un nombre à chaque issue d'une
expérience aléatoire. Elle est **discrète finie** quand elle ne prend qu'un
nombre fini de valeurs $x_1, x_2, \ldots, x_n$.

Donner la **loi de probabilité** de $X$, c'est donner toutes ses valeurs et
leurs probabilités, en général dans un tableau :

| $x_i$ | $x_1$ | $x_2$ | $\cdots$ | $x_n$ |
|---|---|---|---|---|
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\cdots$ | $p_n$ |

**Contrôle obligatoire** : $\boxed{p_1 + p_2 + \cdots + p_n = 1}$.

> **Exemple (jeu de stand).** Une partie coûte $2$ €. Une roue donne $0$ €
> (probabilité $0{,}5$), $3$ € (probabilité $0{,}3$) ou $7$ € (probabilité
> $0{,}2$). Soit $X$ le **gain algébrique** (somme reçue moins la mise) :
>
> | $x_i$ | $-2$ | $1$ | $5$ |
> |---|---|---|---|
> | $P(X = x_i)$ | $0{,}5$ | $0{,}3$ | $0{,}2$ |
>
> Contrôle : $0{,}5 + 0{,}3 + 0{,}2 = 1$. ✓

⚠️ L'événement $\{X = k\}$ se lit « $X$ prend la valeur $k$ » : c'est un
**événement**, et $P(X = k)$ est sa probabilité.

---

## 2. Espérance d'une variable aléatoire discrète finie

### Définition

L'**espérance** de $X$ est la moyenne de ses valeurs, **pondérée par leurs
probabilités** :

$$\boxed{E(X) = x_1 p_1 + x_2 p_2 + \cdots + x_n p_n}$$

### Interprétation — c'est elle qu'on note au bac

$E(X)$ est la **valeur moyenne de $X$ sur un très grand nombre de répétitions**
de l'expérience. Ce n'est **pas** ce qui se passe à une partie donnée.

- Si $X$ est un gain : $E(X) > 0$, le jeu est favorable au joueur ;
  $E(X) < 0$, il est défavorable ; $\boxed{E(X) = 0 \Rightarrow \text{jeu équitable}}$.

> **Exemple (jeu de stand, suite).**
> $$E(X) = (-2) \times 0{,}5 + 1 \times 0{,}3 + 5 \times 0{,}2 = -1 + 0{,}3 + 1 = 0{,}3$$
> Sur un grand nombre de parties, un joueur gagne **en moyenne** $0{,}30$ € par
> partie : le jeu lui est légèrement favorable. À une partie donnée, il gagne
> $5$ € ou perd $2$ € — jamais $0{,}30$ €.

⚠️ Ne calcule pas la moyenne **simple** des valeurs
($\frac{-2 + 1 + 5}{3} = \frac{4}{3}$ ici, faux) : chaque valeur est pondérée
par sa probabilité.

---

## 3. Coefficients binomiaux et triangle de Pascal

### Définition

$n$ et $k$ sont des entiers avec $0 \leq k \leq n$. Le **coefficient binomial**
$\dbinom{n}{k}$ (lire « $k$ parmi $n$ ») est le **nombre de chemins réalisant
exactement $k$ succès** dans un arbre de $n$ répétitions à deux issues.

### Le triangle de Pascal — l'outil de calcul du programme

On calcule les $\dbinom{n}{k}$ **par le triangle de Pascal**, construit ligne
par ligne :

1. chaque ligne commence et finit par $1$ : $\dbinom{n}{0} = \dbinom{n}{n} = 1$ ;
2. chaque autre nombre est la **somme des deux nombres situés au-dessus de lui** :

$$\boxed{\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}}$$

| $n \backslash k$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|---|
| $n = 0$ | $1$ | | | | | | | | |
| $n = 1$ | $1$ | $1$ | | | | | | | |
| $n = 2$ | $1$ | $2$ | $1$ | | | | | | |
| $n = 3$ | $1$ | $3$ | $3$ | $1$ | | | | | |
| $n = 4$ | $1$ | $4$ | $6$ | $4$ | $1$ | | | | |
| $n = 5$ | $1$ | $5$ | $10$ | $10$ | $5$ | $1$ | | | |
| $n = 6$ | $1$ | $6$ | $15$ | $20$ | $15$ | $6$ | $1$ | | |
| $n = 7$ | $1$ | $7$ | $21$ | $35$ | $35$ | $21$ | $7$ | $1$ | |
| $n = 8$ | $1$ | $8$ | $28$ | $56$ | $70$ | $56$ | $28$ | $8$ | $1$ |

Lecture : $\dbinom{n}{k}$ est à la **ligne $n$**, **colonne $k$** — et la
numérotation **commence à $0$**, pas à $1$.

> **Exemple.** $\dbinom{5}{2}$ : ligne $5$, colonne $2$, on lit $10$.
> Vérification par la règle de construction : $\dbinom{5}{2} = \dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10$. ✓

### Propriétés lisibles sur le triangle

- **Symétrie** : $\dbinom{n}{k} = \dbinom{n}{n-k}$ — chaque ligne se lit
  pareil dans les deux sens. Exemple : $\dbinom{8}{6} = \dbinom{8}{2} = 28$.
- $\dbinom{n}{1} = n$ : un seul succès, $n$ places possibles.

> **Astuce.** Pour $\dbinom{7}{5}$, pas besoin d'aller loin dans la ligne :
> $\dbinom{7}{5} = \dbinom{7}{2} = 21$. La symétrie raccourcit la lecture.

---

## 4. Épreuve de Bernoulli et loi binomiale $B(n, p)$

### Épreuve de Bernoulli

Une **épreuve de Bernoulli** est une expérience à **deux issues** : le
**succès** $S$, de probabilité $p$, et l'**échec** $\bar{S}$, de probabilité
$1 - p$.

### Situation binomiale — les trois conditions à vérifier

$X$ suit la **loi binomiale** $B(n, p)$ quand :

1. on répète $n$ fois la **même** épreuve de Bernoulli ;
2. les répétitions sont **indépendantes** (le résultat d'une épreuve ne change
   pas les probabilités des suivantes) ;
3. $X$ **compte le nombre de succès** obtenus au cours des $n$ épreuves.

$X$ prend alors les valeurs $0, 1, 2, \ldots, n$.

> **Exemple (contrôle qualité).** Dans une production, $4\,\%$ des pièces sont
> défectueuses. On prélève $10$ pièces au hasard, la production étant assez
> grande pour assimiler le prélèvement à des tirages indépendants. $X$ = nombre
> de pièces défectueuses. Succès = « la pièce est défectueuse », $p = 0{,}04$,
> répété $n = 10$ fois de façon indépendante, $X$ compte les succès :
> $$X \sim B(10\,;\ 0{,}04)$$

⚠️ **Tirages sans remise dans un petit lot** : la probabilité change à chaque
tirage, les épreuves ne sont **pas** indépendantes — ce n'est pas une
situation binomiale. ⚠️ **« On joue jusqu'au premier succès »** : le nombre
d'épreuves n'est pas fixé — pas binomiale non plus.

### Interpréter $\{X = k\}$

$\{X = k\}$ est l'événement « on obtient **exactement** $k$ succès au cours
des $n$ épreuves ». **Exactement** : ni « au moins $k$ », ni « au plus $k$ »,
ni « la $k$-ième épreuve est un succès ».

Sur l'arbre des $n$ répétitions, $\{X = k\}$ regroupe **tous les chemins**
comportant $k$ succès et $n - k$ échecs — il y en a $\dbinom{n}{k}$.

---

## 5. Calculer $P(X = k)$

### La formule

Si $X \sim B(n, p)$, alors pour tout entier $k$ entre $0$ et $n$ :

$$\boxed{P(X = k) = \binom{n}{k}\, p^k\, (1-p)^{n-k}}$$

**D'où elle vient** (lecture sur l'arbre) : un chemin à $k$ succès et $n - k$
échecs a pour probabilité $p^k (1-p)^{n-k}$ (produit le long du chemin,
répétitions indépendantes) ; il y a $\dbinom{n}{k}$ chemins de ce type, tous
de même probabilité ; on additionne.

> **Exemple (lancers francs).** Une basketteuse réussit chaque lancer franc
> avec la probabilité $0{,}6$, les lancers étant supposés indépendants. Elle en
> tente $4$. $X$ = nombre de réussites, $X \sim B(4\,;\ 0{,}6)$.
>
> Probabilité d'exactement $3$ réussites : triangle de Pascal, ligne $4$,
> colonne $3$ : $\dbinom{4}{3} = 4$, puis
> $$P(X = 3) = \binom{4}{3} \times 0{,}6^3 \times 0{,}4^{1} = 4 \times 0{,}216 \times 0{,}4 = 0{,}3456$$

### Cas particuliers utiles

- $P(X = 0) = (1-p)^n$ : aucun succès, un seul chemin (que des échecs).
- $P(X = n) = p^n$ : que des succès, un seul chemin.

### Méthode type bac

1. **Justifie** la loi binomiale : même épreuve de Bernoulli répétée $n$ fois,
   répétitions indépendantes, $X$ compte les succès. Nomme le succès et donne
   $p$. Conclus : $X \sim B(n, p)$.
2. **Interprète** $\{X = k\}$ par une phrase (« exactement $k$… »).
3. **Lis** $\dbinom{n}{k}$ dans le triangle de Pascal (ligne $n$, colonne $k$),
   en le construisant jusqu'à la ligne $n$ si besoin.
4. **Applique** la formule $P(X = k) = \dbinom{n}{k} p^k (1-p)^{n-k}$, en
   vérifiant que les exposants somment à $n$.

---

## 6. Espérance de la loi binomiale

Si $X \sim B(n, p)$ :

$$\boxed{E(X) = n \times p}$$

Interprétation : sur un grand nombre de répétitions de l'expérience complète
(les $n$ épreuves), le nombre **moyen** de succès est $np$.

> **Exemple (lancers francs, suite).** $X \sim B(4\,;\ 0{,}6)$ :
> $E(X) = 4 \times 0{,}6 = 2{,}4$. Sur un grand nombre de séries de $4$
> lancers, la basketteuse réussit en moyenne $2{,}4$ lancers par série.
> $2{,}4$ n'est pas une valeur possible de $X$ — une moyenne n'a pas à en être
> une.

> **Exemple (contrôle qualité, suite).** $X \sim B(10\,;\ 0{,}04)$ :
> $E(X) = 10 \times 0{,}04 = 0{,}4$ pièce défectueuse en moyenne par
> prélèvement de $10$ pièces.

---

## 7. Tableau récapitulatif

| À savoir | Formule / règle |
|---|---|
| Loi de probabilité | tableau des $x_i$ et $p_i$, avec $p_1 + \cdots + p_n = 1$ |
| Espérance (cas général) | $E(X) = x_1 p_1 + \cdots + x_n p_n$ |
| Interprétation de $E(X)$ | moyenne de $X$ sur un grand nombre de répétitions |
| Jeu équitable | $E(\text{gain algébrique}) = 0$ |
| Triangle de Pascal | bords $= 1$ ; chaque nombre $=$ somme des deux du dessus |
| Coefficient binomial | $\dbinom{n}{k}$ : ligne $n$, colonne $k$ (numérotées depuis $0$) |
| Symétrie | $\dbinom{n}{k} = \dbinom{n}{n-k}$ |
| Situation binomiale | même épreuve à 2 issues, $n$ répétitions indépendantes, $X$ compte les succès |
| Événement $\{X = k\}$ | « exactement $k$ succès sur les $n$ épreuves » |
| Probabilité | $P(X = k) = \dbinom{n}{k}\, p^k\, (1-p)^{n-k}$ |
| Cas extrêmes | $P(X = 0) = (1-p)^n$ ; $P(X = n) = p^n$ |
| Espérance binomiale | $E(X) = np$ |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier le coefficient binomial** dans $P(X = k)$ : $p^k (1-p)^{n-k}$
   n'est la probabilité que d'**un seul** chemin. Il faut le multiplier par le
   nombre de chemins $\dbinom{n}{k}$.
2. **Se tromper d'exposants** : c'est $p^k (1-p)^{n-k}$ — les deux exposants
   somment à $n$. Écrire $0{,}6^3 \times 0{,}4^4$ pour $B(4\,;\ 0{,}6)$ et
   $k = 3$ est absurde : $3 + 4 \neq 4$.
3. **Mal lire le triangle de Pascal** : lignes et colonnes sont numérotées
   **à partir de $0$**. $\dbinom{5}{2}$ est le **troisième** nombre de la
   ligne $5$ ($10$), pas le deuxième ($5$).
4. **Déclarer binomiale une situation qui ne l'est pas** : tirages sans remise
   dans un petit lot (pas d'indépendance), nombre d'épreuves non fixé
   (« jusqu'au premier succès »), ou $X$ qui ne compte pas des succès. Les
   trois conditions se vérifient — et se rédigent.
5. **Confondre $\{X = k\}$ (« exactement $k$ ») avec « au moins $k$ »** ou
   « la $k$-ième épreuve est un succès ». La phrase d'interprétation doit
   contenir « exactement ».
6. **Interpréter $E(X)$ comme un résultat certain.** $E(X) = 2{,}4$ ne veut pas
   dire « on obtient $2{,}4$ succès » (impossible !) mais « $2{,}4$ succès **en
   moyenne** sur un grand nombre de répétitions ». Et pour l'espérance
   générale, ne pas oublier de **pondérer** par les probabilités.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« PROBABILITÉS — VARIABLES ALÉATOIRES ET LOI BINOMIALE » (lignes 105-115).

Couverture, calée sur le texte officiel :
- Contenus : espérance d'une variable aléatoire discrète finie (§1-2) ;
  coefficients binomiaux et triangle de Pascal (§3) ; loi binomiale B(n, p) et
  son espérance (§4-6).
- Capacités : calculer et interpréter l'espérance (§2, exemples + erreur 6) ;
  calculer des coefficients binomiaux À L'AIDE DU TRIANGLE DE PASCAL (§3 —
  conformément au programme, la formule factorielle n!/(k!(n-k)!) n'est PAS
  introduite ; tout passe par le triangle, donné en tableau jusqu'à n = 8) ;
  reconnaître une situation binomiale (§4, trois conditions + contre-exemples) ;
  interpréter {X = k} (§4) ; calculer P(X = k) à l'aide des coefficients
  binomiaux (§5).

Prérequis : la notion de variable aléatoire et de loi de probabilité vient de
Première techno (probabilites-variables-aleatoires) ; le §1 la rappelle car
l'espérance n'était pas au programme de Première techno. L'indépendance des
répétitions s'appuie sur les arbres du chapitre probabilites-conditionnelles
du même niveau.

Choix de rédaction : contextes voie techno (contrôle qualité, jeu de stand,
lancers francs) ; notation binom(n,k) avec lecture « k parmi n » ; le triangle
est présenté en tableau ligne n / colonne k pour coller à la lecture demandée
aux élèves. Variance et écart-type ABSENTS de l'extraction du programme : non
traités. P(X <= k), intervalles de fluctuation, échantillonnage : absents de
l'extraction, non traités (seul P(X = k) est exigible).

Vérifications numériques faites :
- jeu de stand : E(X) = -2(0,5) + 1(0,3) + 5(0,2) = -1 + 0,3 + 1 = 0,3.
- triangle : lignes 0 à 8 recalculées de proche en proche ; C(5,2) = 4 + 6 = 10 ;
  C(8,6) = C(8,2) = 28 ; C(7,5) = C(7,2) = 21.
- lancers francs : C(4,3) = 4 ; 0,6^3 = 0,216 ; 4 × 0,216 × 0,4 = 0,3456 ;
  E = 4 × 0,6 = 2,4.
- contrôle qualité : E = 10 × 0,04 = 0,4.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Vérifier que la variance/l'écart-type sont bien absents du programme commun
  (l'extraction ne les mentionne pas).
- Vérifier la notation officielle du coefficient binomial dans le préambule du
  PDF (binom(n,k) vs C(n,k)) et l'éventuelle mention de la calculatrice.
- La justification « production assez grande pour assimiler à des tirages
  indépendants » (§4) est l'argument standard : vérifier la formulation
  attendue par le programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
