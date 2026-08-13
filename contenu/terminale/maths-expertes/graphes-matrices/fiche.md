---
id: tale-exp-math-graphes-matrices
titre: "Graphes et matrices"
voie: generale
niveau: terminale
parcours: maths-expertes
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths expertes, terminale générale"
duree_lecture_min: 16
prerequis:
  - Calcul matriciel et systèmes (notions de Première/Terminale)
  - Suites numériques (Terminale)
  - Probabilités et arbres pondérés (Première)
statut: brouillon
relu_par: null
---

# Graphes et matrices

> Un plan de métro, un réseau d'amis, les liens entre pages web : partout des
> **objets reliés entre eux**. Le graphe dessine ces liens, la matrice les
> **calcule**. L'idée forte du chapitre : une même situation a deux visages,
> un dessin et un tableau de nombres — et tout ce qu'on lit sur le dessin, on
> le **retrouve en multipliant des matrices**. C'est ce pont qui permet de
> compter des chemins et de prévoir l'évolution d'un système.

---

## 1. Graphes : le vocabulaire

Un **graphe** est constitué de **sommets** (les points) reliés par des **arêtes**
(les traits). Deux sommets reliés par une arête sont dits **adjacents** ; l'arête
est **incidente** à ces deux sommets.

- **Ordre** du graphe : son **nombre de sommets**.
- **Degré** d'un sommet : le **nombre d'arêtes** qui en partent (une boucle compte
  pour $2$).

$$\boxed{\text{ordre} = \text{nombre de sommets} \qquad \deg(S) = \text{nombre d'arêtes en } S}$$

> **Exemple.** Un graphe à sommets $A,B,C,D$ avec les arêtes $AB$, $AC$, $BC$, $CD$
> est d'**ordre $4$**. Ici $\deg(A)=2$ (arêtes $AB,AC$), $\deg(C)=3$ ($CA,CB,CD$),
> $\deg(D)=1$.

**Théorème des degrés (« poignées de main »).** La somme des degrés de tous les
sommets est égale à **deux fois** le nombre d'arêtes :

$$\boxed{\sum_{\text{sommets}} \deg(S) = 2 \times (\text{nombre d'arêtes})}$$

> **Exemple.** Dans le graphe précédent : $2+2+3+1 = 8 = 2\times 4$ arêtes. Comme
> le total est pair, il y a toujours un **nombre pair de sommets de degré impair**.

### Chaîne, longueur, connexité

- Une **chaîne** est une suite d'arêtes mises bout à bout permettant d'aller d'un
  sommet à un autre : $A - C - D$ est une chaîne de $A$ à $D$.
- La **longueur** d'une chaîne est son **nombre d'arêtes** (pas de sommets !).
- Un graphe est **connexe** si, pour tout couple de sommets, il existe une chaîne
  qui les relie : « on peut aller partout ».

$$\boxed{\text{longueur d'une chaîne} = \text{nombre d'arêtes qu'elle contient}}$$

> **Exemple.** $A-C-D$ a pour longueur $2$ (deux arêtes, trois sommets). Le graphe
> $A,B,C,D$ ci-dessus est connexe : de n'importe quel sommet on atteint tous les
> autres. Si on isole un cinquième sommet $E$ sans arête, le graphe **cesse** d'être
> connexe.

---

## 2. Matrices : objets et opérations

Une **matrice** de taille $n\times p$ est un tableau de nombres à $n$ **lignes** et
$p$ **colonnes**. On note $a_{ij}$ le coefficient de la ligne $i$, colonne $j$.

- Matrice **carrée** : autant de lignes que de colonnes ($n=p$).
- Matrice **ligne** : une seule ligne ($1\times p$). Matrice **colonne** : une seule
  colonne ($n\times 1$).

**Somme** et **produit par un réel** se font **terme à terme** (mêmes tailles exigées) :

$$k\begin{pmatrix} a & b \\ c & d\end{pmatrix} = \begin{pmatrix} ka & kb \\ kc & kd\end{pmatrix}$$

> **Exemple.** $3\begin{pmatrix} 1 & 0 \\ -2 & 4\end{pmatrix} = \begin{pmatrix} 3 & 0 \\ -6 & 12\end{pmatrix}$.

### Produit matriciel

Le produit $A\times B$ **n'existe que si** le nombre de **colonnes de $A$** égale le
nombre de **lignes de $B$**. Le coefficient de la ligne $i$, colonne $j$ de $AB$ est
la somme des produits « **ligne $i$ de $A$ par colonne $j$ de $B$** » :

$$\boxed{(AB)_{ij} = \sum_{k} a_{ik}\, b_{kj}}$$

> **Exemple.** $\begin{pmatrix} 1 & 2 \\ 0 & 3\end{pmatrix}\begin{pmatrix} 4 & 1 \\ 5 & 0\end{pmatrix}
> = \begin{pmatrix} 1\cdot4+2\cdot5 & 1\cdot1+2\cdot0 \\ 0\cdot4+3\cdot5 & 0\cdot1+3\cdot0\end{pmatrix}
> = \begin{pmatrix} 14 & 1 \\ 15 & 0\end{pmatrix}$.

> ⚠️ **Le produit matriciel n'est pas commutatif** : en général $AB \neq BA$. L'ordre
> des facteurs est essentiel.

### Matrice identité, inverse, puissances

La **matrice identité** $I$ (des $1$ sur la diagonale, des $0$ ailleurs) joue le rôle
du nombre $1$ : $A\times I = I\times A = A$.

Une matrice carrée $A$ est **inversible** s'il existe une matrice $A^{-1}$ telle que :

$$\boxed{A\times A^{-1} = A^{-1}\times A = I}$$

Pour une matrice $2\times 2$, $A=\begin{pmatrix} a & b \\ c & d\end{pmatrix}$ est
inversible **si et seulement si** $ad-bc\neq 0$, et alors :

$$\boxed{A^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a\end{pmatrix}}$$

> **Exemple.** Pour $A=\begin{pmatrix} 2 & 1 \\ 1 & 1\end{pmatrix}$, $ad-bc = 2-1 = 1$,
> donc $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2\end{pmatrix}$. On vérifie $AA^{-1}=I$.

Les **puissances** d'une matrice carrée se définissent comme pour les nombres :
$A^{2}=A\times A$, et plus généralement $A^{n} = \underbrace{A\times \cdots \times A}_{n \text{ fois}}$,
avec la convention $A^{0}=I$. On les calcule à la calculatrice ou par récurrence.

> **Exemple.** $\begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}^{2}
> = \begin{pmatrix} 1 & 2 \\ 0 & 1\end{pmatrix}$, et par récurrence
> $\begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}^{n} = \begin{pmatrix} 1 & n \\ 0 & 1\end{pmatrix}$.

---

## 3. Matrice d'adjacence et comptage de chemins

À un graphe d'ordre $n$ dont on numérote les sommets, on associe sa **matrice
d'adjacence** $M$ : le coefficient $m_{ij}$ vaut le **nombre d'arêtes** reliant le
sommet $i$ au sommet $j$ (souvent $0$ ou $1$).

> Pour un graphe **non orienté**, $M$ est **symétrique** ($m_{ij}=m_{ji}$).

**Théorème (comptage de chemins).** Le coefficient ligne $i$, colonne $j$ de la
puissance $M^{k}$ donne le **nombre de chemins de longueur exactement $k$** allant du
sommet $i$ au sommet $j$ :

$$\boxed{\big(M^{k}\big)_{ij} = \text{nombre de chemins de longueur } k \text{ de } i \text{ vers } j}$$

> **Exemple.** Si $M=\begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0\end{pmatrix}$
> (triangle $1,2,3$), alors $M^{2}=\begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2\end{pmatrix}$ :
> il y a $\mathbf{2}$ chemins de longueur $2$ de $1$ vers $1$ (aller-retour par $2$ ou par $3$)
> et $\mathbf{1}$ chemin de longueur $2$ de $1$ vers $2$ (passer par $3$).

---

## 4. Suites de matrices : $U_{n+1} = A\,U_n + C$

De nombreux systèmes évoluent par étapes : on décrit l'état à l'instant $n$ par une
**matrice colonne** $U_n$, et le passage d'une étape à la suivante par une relation

$$\boxed{U_{n+1} = A\,U_n + C}$$

où $A$ est une matrice carrée et $C$ une matrice colonne (éventuellement nulle).

**Calcul d'un terme.** On itère depuis l'état initial $U_0$ :

$$U_1 = A\,U_0 + C, \quad U_2 = A\,U_1 + C, \quad \dots$$

> **Exemple.** Avec $A=\begin{pmatrix} 0{,}5 & 0 \\ 0 & 2\end{pmatrix}$, $C=\begin{pmatrix} 1 \\ 0\end{pmatrix}$
> et $U_0=\begin{pmatrix} 4 \\ 1\end{pmatrix}$ :
> $U_1 = \begin{pmatrix} 0{,}5\cdot4+1 \\ 2\cdot1\end{pmatrix} = \begin{pmatrix} 3 \\ 2\end{pmatrix}$.

**État stable (cas $C\neq 0$).** Un état $U$ est **stable** (ou fixe) s'il ne change
plus : $U = A\,U + C$. Quand $I-A$ est inversible, on le résout :

$$\boxed{U = A\,U + C \iff (I-A)\,U = C \iff U = (I-A)^{-1}\,C}$$

> **Exemple.** L'état stable renseigne la valeur vers laquelle le système tend
> quand $U_n$ **converge** — c'est le point vers lequel les itérations se stabilisent.

---

## 5. Chaîne de Markov à 2 ou 3 états

Une **chaîne de Markov** modélise un système qui passe d'un **état** à un autre au fil
du temps, avec des **probabilités de transition** qui ne dépendent **que de l'état
présent** (pas du passé). On la représente par un graphe **orienté et pondéré** ou par
une matrice.

La **matrice de transition** $P$ contient les probabilités de passer d'un état à
l'autre : $p_{ij}$ = probabilité d'aller de l'état $i$ vers l'état $j$.

$$\boxed{\text{sur chaque ligne de } P,\ \text{la somme des coefficients vaut } 1}$$

> **Exemple (2 états).** Si de l'état $A$ on reste en $A$ avec probabilité $0{,}7$ (et
> on passe en $B$ avec $0{,}3$), et de $B$ on revient en $A$ avec $0{,}4$ (et reste en
> $B$ avec $0{,}6$) :
> $P = \begin{pmatrix} 0{,}7 & 0{,}3 \\ 0{,}4 & 0{,}6\end{pmatrix}$. Chaque ligne
> somme bien à $1$.

### Distribution et évolution

L'état probabiliste à l'instant $n$ est une **matrice ligne** $\pi_n = (\,x_n\ \ y_n\,)$
dont les termes (positifs, de somme $1$) sont les probabilités d'être dans chaque état.
L'évolution s'écrit **en multipliant par $P$ à droite** :

$$\boxed{\pi_{n+1} = \pi_n \times P \qquad\text{et}\qquad \pi_n = \pi_0 \times P^{\,n}}$$

> **Exemple.** Avec $\pi_0 = (\,1\ \ 0\,)$ (on part certainement en $A$) et le $P$
> ci-dessus : $\pi_1 = \pi_0 P = (\,0{,}7\ \ 0{,}3\,)$ : après une étape, $70\,\%$ de
> chance d'être en $A$.

### Distribution invariante

Une **distribution invariante** (ou état stationnaire) est une distribution $\pi$ qui
ne change plus d'une étape à l'autre :

$$\boxed{\pi = \pi \times P \quad\text{avec}\quad x+y = 1,\ \ x\geqslant 0,\ y\geqslant 0}$$

On la trouve en résolvant ce système linéaire (l'équation $\pi=\pi P$ complétée par
$x+y=1$).

> **Exemple.** Pour $P = \begin{pmatrix} 0{,}7 & 0{,}3 \\ 0{,}4 & 0{,}6\end{pmatrix}$,
> $\pi=(x\ \ y)$ vérifie $x = 0{,}7x + 0{,}4y$ et $x+y=1$. La première donne
> $0{,}3x = 0{,}4y$ ; avec $y=1-x$ : $0{,}3x = 0{,}4(1-x)$, soit $0{,}7x = 0{,}4$,
> $x = \dfrac{4}{7}$, $y=\dfrac{3}{7}$. **Distribution invariante $\left(\dfrac47\ \ \dfrac37\right)$.**

---

## 6. Méthodes clés

**Inverser une matrice $2\times 2$.** Calcule $ad-bc$. S'il est nul, la matrice n'est
**pas** inversible ; sinon applique la formule encadrée du §2.

**Compter les chemins de longueur $k$.** Écris la matrice d'adjacence $M$, calcule
$M^{k}$ (calculatrice), et lis le coefficient $(i,j)$. Le **total** des chemins de
longueur $k$ dans le graphe est la somme de **tous** les coefficients de $M^{k}$.

**Trouver une distribution invariante.** Pose $\pi=(x\ \ y)$, écris $\pi P = \pi$
(une équation suffit, les deux sont liées), ajoute $x+y=1$, résous.

**Trouver un état stable de $U_{n+1}=AU_n+C$.** Résous $(I-A)U=C$, c.-à-d.
$U=(I-A)^{-1}C$ si $I-A$ est inversible.

---

## 7. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Ordre / degré | ordre = nb de sommets ; $\deg S$ = nb d'arêtes en $S$ |
| Somme des degrés | $\sum \deg S = 2\times(\text{nb arêtes})$ |
| Longueur de chaîne | nombre d'**arêtes** de la chaîne |
| Connexité | on peut relier **tout** couple de sommets |
| Produit $AB$ | possible si colonnes de $A$ = lignes de $B$ ; **non commutatif** |
| Inverse $2\times2$ | $A^{-1}=\dfrac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a\end{pmatrix}$, si $ad-bc\neq0$ |
| Comptage de chemins | $(M^{k})_{ij}$ = nb de chemins de longueur $k$ de $i$ à $j$ |
| Suite matricielle | $U_{n+1}=AU_n+C$ ; état stable $(I-A)U=C$ |
| Transition (Markov) | $P$ : somme de chaque **ligne** $=1$ |
| Évolution | $\pi_{n+1}=\pi_n P$, $\pi_n=\pi_0 P^{n}$ (ligne $\times$ $P$) |
| Invariante | $\pi=\pi P$ avec $\sum \pi = 1$ |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre longueur et nombre de sommets.** Une chaîne de longueur $k$ a $k$
   **arêtes** et $k+1$ sommets. Compter les points au lieu des traits fausse tout le
   comptage de chemins.
2. **Croire que $AB=BA$.** Le produit matriciel **n'est pas commutatif** : dans une
   chaîne de Markov, $\pi P$ (ligne $\times$ matrice) et $P\pi$ n'ont même pas la même
   taille. On multiplie **la distribution ligne par $P$, à droite**.
3. **Oublier de tester $ad-bc$.** Avant d'inverser, on vérifie que $ad-bc\neq 0$. Si
   ce déterminant est nul, écrire un inverse est une faute : la matrice n'en a pas.
4. **Mal orienter la matrice de transition.** $p_{ij}$ va **de $i$ vers $j$** et
   **chaque ligne** somme à $1$ (pas chaque colonne). Transposer $P$ inverse le sens
   des flèches.
5. **Chercher l'invariante avec $\pi=\pi P$ seule.** L'équation $\pi=\pi P$ a une
   infinité de solutions proportionnelles : sans la condition $x+y=1$, on n'obtient
   pas de distribution. Il faut **toujours** ajouter « la somme fait $1$ ».
6. **Lire $M^{k}$ pour la mauvaise longueur.** $M^{2}$ compte les chemins de longueur
   $2$, pas de longueur $1$ : c'est $M$ elle-même ($M^{1}$) qui donne les arêtes
   directes. Attention aussi à $M^{0}=I$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-maths-options-2019.txt, section « Graphes et
matrices » (lignes 41 à 47), rubriques « Contenus » et « Capacités ». En-tête de
provenance du fichier : lignes 1 à 11.

Texte officiel repris (Contenus) : « graphe (sommets, arêtes, ordre, degré), chaîne,
longueur, connexité ; matrices (carrée, ligne, colonne), opérations, inverse,
puissances ; matrice d'adjacence ; suites Uₙ₊₁ = A·Uₙ + C ; chaîne de Markov à 2 ou 3
états, matrice de transition, distribution invariante. »
Capacités : « modéliser par un graphe ou une matrice ; calculer inverse et puissances
d'une matrice ; compter les chemins de longueur donnée ; étudier une chaîne de Markov. »

⚠️ PROVENANCE DE LA SOURCE : le fichier programme indique une extraction via WebFetch
depuis les PDF officiels (education.gouv.fr, BO spécial n°8 du 25/7/2019). AVANT TOUTE
PUBLICATION, CONFRONTER AU PDF OFFICIEL (arrêté du 19-7-2019, MENE1921264A) par un
professeur, au même titre que la relecture pédagogique.

⚠️ PROGRAMME 2019 TOUJOURS EN VIGUEUR : contrairement à la spécialité (qui change en
2027), l'option « maths expertes » relève encore du programme 2019. À revalider au
moment de la publication.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme cite les contenus sans fixer le niveau de détail. Choix retenus, standard
  du chapitre : théorème des degrés (« poignées de main »), formule d'inverse 2×2 via
  ad−bc, état stable via (I−A)⁻¹C. Vérifier que le déterminant/ad−bc est bien au niveau
  d'exigence attendu (le mot « déterminant » n'est PAS employé dans la fiche, seul
  ad−bc l'est — à confirmer).
- Convention Markov : distribution en matrice LIGNE et évolution πₙ₊₁ = πₙ P (produit à
  droite). C'est la convention la plus répandue au lycée, mais certains manuels utilisent
  des colonnes avec P à gauche. À harmoniser avec le manuel de référence de l'établissement.
- Comptage de chemins : énoncé pour graphe non orienté (M symétrique) ; l'exemple du
  triangle est vérifié à la main. Le théorème vaut aussi pour graphes orientés — préciser
  le cadre attendu.
- Existence/convergence vers la distribution invariante : admise, non démontrée
  (hypothèses de régularité hors programme lycée). Préciser si une justification est exigible.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
