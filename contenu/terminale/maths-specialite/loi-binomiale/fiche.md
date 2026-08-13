---
id: tale-spe-math-loi-binomiale
titre: "Succession d'épreuves, schéma de Bernoulli et loi binomiale"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Coefficients binomiaux (Terminale, chapitre « Combinatoire et dénombrement »)
  - Probabilités conditionnelles et indépendance (Première)
  - Arbres pondérés et probabilités totales (Première)
statut: brouillon
relu_par: null
---

# Succession d'épreuves, schéma de Bernoulli et loi binomiale

> Lancer 10 fois une pièce, tester 200 pièces sur une chaîne de production, poser
> 15 questions à un candidat qui répond au hasard : à chaque fois on **répète la
> même expérience** et on compte les **succès**. La loi binomiale est l'outil qui
> donne directement la probabilité d'en obtenir exactement $k$.

---

## 1. Succession d'épreuves indépendantes

### Définition

Tu réalises une **succession d'épreuves indépendantes** quand tu enchaînes plusieurs
expériences aléatoires dont **le résultat de l'une n'influence pas les autres**.

Une **issue** de la succession est une liste ordonnée $(x_1, x_2, \dots, x_n)$ : le
résultat de la 1re épreuve, puis de la 2e, etc. L'ensemble de toutes les issues est le
**produit cartésien** des univers de chaque épreuve.

### Propriété — la probabilité d'une issue est un produit

$$\boxed{P\big((x_1, x_2, \dots, x_n)\big) = P(x_1) \times P(x_2) \times \dots \times P(x_n)}$$

> **Exemple.** Une urne contient 3 boules rouges et 2 vertes. On tire une boule, on la
> **remet**, on retire une boule (deux tirages indépendants). La probabilité de tirer
> Rouge puis Vert est
> $$P(R, V) = \frac{3}{5} \times \frac{2}{5} = \frac{6}{25}.$$

### Représentation par un arbre

Chaque niveau de l'arbre = une épreuve ; chaque branche porte la probabilité de l'issue
correspondante. **La probabilité d'un chemin est le produit des probabilités des
branches** de ce chemin.

> ⚠️ « Indépendantes » veut dire que les probabilités portées par les branches **ne
> changent pas** d'un niveau à l'autre. C'est le cas typique d'un **tirage avec remise**.

> **À savoir aussi.** Le programme demande aussi de traiter une succession de deux ou
> trois épreuves **quelconques** (pas forcément indépendantes) : on mobilise alors les
> probabilités conditionnelles de Première et la formule des probabilités totales.

---

## 2. Épreuve et loi de Bernoulli

### Définition

Une **épreuve de Bernoulli** est une expérience aléatoire à **deux issues** seulement :
le **succès** $S$, de probabilité $p$, et l'**échec** $\overline{S}$, de probabilité
$1 - p$.

La **loi de Bernoulli** de paramètre $p$ est la loi de la variable aléatoire $X$ qui vaut :

$$X = 1 \text{ en cas de succès} \qquad X = 0 \text{ en cas d'échec}$$

$$\boxed{P(X = 1) = p \qquad P(X = 0) = 1 - p} \qquad \text{avec } 0 \leqslant p \leqslant 1$$

> **Exemple.** « Obtenir un 6 » avec un dé équilibré est une épreuve de Bernoulli :
> succès = « 6 » avec $p = \tfrac{1}{6}$, échec = « pas 6 » avec $1 - p = \tfrac{5}{6}$.

> **Le « succès », c'est toi qui le choisis** : simplement l'issue qui t'intéresse. Une
> fois choisi, $p$ est fixé — ne l'échange pas avec $1 - p$ en cours de route.

---

## 3. Schéma de Bernoulli

### Définition

Un **schéma de Bernoulli** est la **répétition de $n$ épreuves de Bernoulli identiques et
indépendantes**, toutes de même paramètre $p$.

C'est donc un cas particulier de succession d'épreuves indépendantes : à chaque épreuve,
mêmes deux issues, même probabilité $p$ de succès.

> **Trois conditions à vérifier** avant de parler de schéma de Bernoulli :
> 1. chaque épreuve n'a que **deux issues** (succès / échec) ;
> 2. les épreuves sont **indépendantes** ;
> 3. la probabilité de succès $p$ est **la même** à chaque épreuve.

> **Exemple.** On lance 12 fois une pièce truquée qui tombe sur Pile avec $p = 0{,}3$.
> Succès = « Pile ». On a un schéma de Bernoulli de paramètres $n = 12$ et $p = 0{,}3$.

### Probabilité d'un chemin à $k$ succès

Dans l'arbre, un chemin qui donne $k$ succès et $n - k$ échecs a pour probabilité

$$p^k \, (1 - p)^{n-k}$$

quel que soit l'**ordre** des succès et des échecs (les branches se multiplient, la
multiplication ne dépend pas de l'ordre).

---

## 4. La loi binomiale $B(n, p)$

### Définition

On répète un schéma de Bernoulli de paramètres $n$ et $p$. Soit $X$ la variable aléatoire
qui compte le **nombre de succès** parmi les $n$ épreuves. On dit que $X$ suit la **loi
binomiale** de paramètres $n$ et $p$, notée $X \sim B(n, p)$.

$X$ peut prendre toutes les valeurs entières de $0$ à $n$.

### Propriété — expression de $P(X = k)$

$$\boxed{P(X = k) = \binom{n}{k} \, p^k \, (1 - p)^{n-k}} \qquad \text{pour } 0 \leqslant k \leqslant n$$

Décortiquons les trois morceaux :

- $\dbinom{n}{k}$ = le **nombre de chemins** donnant exactement $k$ succès (façons de placer
  les $k$ succès parmi les $n$ épreuves) ;
- $p^k$ = probabilité des $k$ succès d'un chemin ; $(1 - p)^{n-k}$ = celle des $n-k$ échecs.

Le coefficient binomial $\binom{n}{k}$ vient du chapitre **Combinatoire et dénombrement**
(`contenu/terminale/maths-specialite/combinatoire-denombrement/`) : c'est le nombre de
sous-ensembles de $k$ éléments parmi $n$.

> **Exemple.** Une pièce équilibrée lancée $n = 4$ fois, succès = Pile, $p = \tfrac12$.
> Probabilité d'obtenir exactement $k = 2$ Piles :
> $$P(X = 2) = \binom{4}{2}\left(\tfrac12\right)^2\left(\tfrac12\right)^2 = 6 \times \frac{1}{16} = \frac{6}{16} = \frac{3}{8}.$$
> Le $6$ vient de $\binom{4}{2}$ : les 6 façons de placer les deux Piles.

### Espérance et variance (résultats admis ici)

$$E(X) = np \qquad\qquad V(X) = np(1 - p)$$

> Ces formules sont **démontrées** dans le chapitre **« Sommes de variables aléatoires »**
> ($X$ vue comme somme de $n$ variables de Bernoulli) : tu peux les **utiliser sans les
> redémontrer**. Sens : sur $200$ pièces avec $p=0{,}02$, on attend $E(X)=4$ défauts.

---

## 5. Méthodes de calcul

L'énoncé se ramène presque toujours à l'un de ces trois calculs. Pose bien $n$, $p$ et la
valeur (ou l'intervalle) de $k$ avant de te lancer.

### a) Probabilité d'une valeur exacte : $P(X = k)$

On applique directement la formule.

> **Exemple.** $X \sim B(10 ; 0{,}2)$. Probabilité d'exactement 3 succès :
> $$P(X = 3) = \binom{10}{3} (0{,}2)^3 (0{,}8)^7 \approx 0{,}201.$$

### b) Probabilité cumulée : $P(X \leqslant k)$

C'est la **somme** des probabilités de $0$ jusqu'à $k$ :

$$P(X \leqslant k) = P(X = 0) + P(X = 1) + \dots + P(X = k)$$

En pratique, on lit cette valeur à la **calculatrice** (fonction « binomFRép » / « BinomialCDF »)
ou via un **algorithme** qui additionne les termes.

> **Passage au complémentaire** — souvent le plus rapide :
> $$\boxed{P(X \geqslant k) = 1 - P(X \leqslant k - 1)} \qquad P(X > k) = 1 - P(X \leqslant k)$$
> **Exemple.** « au moins un succès » : $P(X \geqslant 1) = 1 - P(X = 0) = 1 - (1-p)^n$.

### c) Probabilité d'un intervalle : $P(k \leqslant X \leqslant k')$

On soustrait deux probabilités cumulées :

$$\boxed{P(k \leqslant X \leqslant k') = P(X \leqslant k') - P(X \leqslant k - 1)}$$

> ⚠️ C'est bien $k - 1$ à droite, pas $k$ : la borne $X = k$ doit **rester dans** le
> calcul. Si tu écris $P(X \leqslant k') - P(X \leqslant k)$, tu **oublies** le terme
> $P(X = k)$.

### d) Problèmes de seuil

On cherche le plus petit (ou plus grand) entier $k$ tel qu'une probabilité cumulée
franchit un seuil $\alpha$. Type : « à partir de combien de succès est-on presque sûr ? »
ou « quel intervalle $I$ vérifie $P(X \in I) \geqslant 1 - \alpha$ ? ».

> **Exemple.** $X \sim B(50 ; 0{,}1)$. Plus petit entier $s$ tel que
> $P(X \leqslant s) \geqslant 0{,}95$ ? On calcule $P(X \leqslant s)$ pour $s = 0, 1, 2, \dots$
> (calculatrice ou boucle) jusqu'à dépasser $0{,}95$ : ici $s = 9$.

---

## 6. Cas particuliers et pièges de calcul

- **Les bornes $k = 0$ et $k = n$.** $\binom{n}{0} = \binom{n}{n} = 1$, donc
  $P(X = 0) = (1-p)^n$ (aucun succès) et $P(X = n) = p^n$ (que des succès). Aucun
  coefficient à chercher ici.
- **Somme totale.** $P(X = 0) + P(X = 1) + \dots + P(X = n) = 1$. Utile pour vérifier ou
  pour calculer un cas par différence.
- **Ordre sans importance.** $\binom{n}{k}$ compte **toutes** les positions possibles des
  succès : tu n'as pas à les énumérer une par une.
- **Sans remise = pas binomial.** Un tirage **sans remise** rend les épreuves
  **dépendantes** ($p$ change) : ce n'est **pas** un schéma de Bernoulli.

---

## 7. Tableau récapitulatif

| Objet | Formule / idée clé |
|---|---|
| Issue d'une succession indépendante | $P(x_1,\dots,x_n) = P(x_1)\times\dots\times P(x_n)$ |
| Loi de Bernoulli | $P(X=1)=p$, $\;P(X=0)=1-p$ |
| Schéma de Bernoulli | $n$ épreuves identiques, indépendantes, à 2 issues |
| Loi binomiale | $X \sim B(n,p)$, $X$ = nombre de succès |
| Probabilité exacte | $P(X=k)=\dbinom{n}{k}p^k(1-p)^{n-k}$ |
| Cas $k=0$ / $k=n$ | $P(X=0)=(1-p)^n$, $\;P(X=n)=p^n$ |
| « Au moins un » | $P(X\geqslant 1)=1-(1-p)^n$ |
| Complémentaire | $P(X\geqslant k)=1-P(X\leqslant k-1)$ |
| Intervalle | $P(k\leqslant X\leqslant k')=P(X\leqslant k')-P(X\leqslant k-1)$ |
| Espérance / variance | $E(X)=np$, $\;V(X)=np(1-p)$ (admis, chap. Sommes de v.a.) |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $P(X = k)$ et $P(X \leqslant k)$.** « Exactement $k$ » ≠ « au plus $k$ ».
   La première est **un** terme, la seconde est une **somme** de termes. C'est le piège
   n°1 : relis toujours « exactement / au moins / au plus » dans l'énoncé.
2. **Oublier le coefficient binomial $\binom{n}{k}$.** Écrire $P(X=k)=p^k(1-p)^{n-k}$
   donne la probabilité d'**un seul** chemin, pas de tous. Sans $\binom{n}{k}$, le
   résultat est trop petit.
3. **Se tromper de borne dans un intervalle.** $P(k \leqslant X \leqslant k')$ vaut
   $P(X\leqslant k') - P(X \leqslant k-1)$, avec $k-1$ — sinon tu perds le terme $P(X=k)$.
4. **Utiliser la binomiale sur un tirage sans remise.** Les épreuves ne sont alors plus
   indépendantes et $p$ change : le modèle ne s'applique pas.
5. **Intervertir $p$ et $1-p$.** Une fois le succès choisi, $p$ est celui du succès.
   Vérifie que l'exposant de $p$ est bien le **nombre de succès** $k$.
6. **Confondre $\binom{n}{k}$ et $n^k$** (ou $k^n$). $\binom{n}{k}$ est un nombre de
   choix sans ordre : reprends la formule $\dfrac{n!}{k!(n-k)!}$ du chapitre Combinatoire.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « PROBABILITÉS — SUCCESSION D'ÉPREUVES INDÉPENDANTES, SCHÉMA DE BERNOULLI »
(rubriques Contenus et Capacités attendues).

⚠️ MENTION 1 — PROVENANCE DE LA SOURCE : ce programme n'a PAS été produit par la chaîne
d'extraction habituelle. Son texte a été reconstitué via l'outil WebFetch depuis le miroir
https://www.xm1math.net/reforme/term_gen_spe.pdf (voir en-tête « SOURCE ET PROVENANCE »).
Cette extraction WebFetch doit être CONFRONTÉE au PDF officiel (education.gouv.fr / éduscol)
avant toute publication : reproduction non garantie exhaustive.

⚠️ MENTION 2 — PÉRIMÈTRE TEMPOREL : chapitre de TERMINALE produit sur le programme de la
rentrée 2027, à la demande explicite de l'utilisateur. Le gabarit (§6) demande par défaut
de ne rien écrire pour la Terminale avant 2027 ; le programme 2027 étant publié et la
demande explicite, le chapitre est rédigé en brouillon.

Éléments lisibles dans l'extraction et traités : produit des probabilités d'une issue (§1) ;
succession de 2-3 épreuves quelconques, prob. conditionnelles/totales (§1) ; épreuve et loi
de Bernoulli (§2) ; schéma de Bernoulli (§3) ; loi binomiale B(n,p) via coefficients
binomiaux (§4) ; calcul de P(X=k), P(X⩽k), P(k⩽X⩽k'), intervalle-seuil (§5). E(X)=np et
V(X)=np(1−p) figurent dans la section « SOMMES DE VARIABLES ALÉATOIRES » : cités SANS
démonstration, avec renvoi à ce chapitre (consigne respectée).

À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Notation du coefficient binomial retenue par le BO 2027 : $\binom{n}{k}$ (choisie ici,
  cohérente avec le chapitre Combinatoire) vs $C_n^k$. À harmoniser après relecture.
- Valeurs numériques à revérifier : seuil §5d (B(50 ; 0,1), s = 9), P(X=3)≈0,201.
- Vérifier que « produit cartésien » est bien attendu des élèves au sens du BO.
Rédaction originale à partir du programme, aucun emprunt à un manuel. Statut : brouillon, non relu.
-->
