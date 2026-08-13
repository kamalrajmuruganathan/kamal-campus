---
id: tale-spe-math-combinatoire-denombrement
titre: "Combinatoire et dénombrement"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 14
prerequis:
  - Ensembles, cardinal d'un ensemble fini (Seconde)
  - Arbres de dénombrement et probabilités (Seconde – Première)
  - Puissances et notation exposant (collège – Seconde)
statut: brouillon
relu_par: null
---

# Combinatoire et dénombrement

> Dénombrer, c'est **compter sans énumérer**. Quand il y a 3 objets, tu peux les
> lister. Quand il y en a $10^6$, il te faut une **méthode** : reconnaître la
> structure du problème, puis appliquer la bonne formule. Tout part d'une question :
> *l'ordre compte-t-il, et peut-on répéter ?*

---

## 1. Dénombrer : la première étape est de **représenter**

Avant toute formule, le programme demande de choisir une **représentation adaptée**
et de **reconnaître les objets à dénombrer**.

| Représentation | Quand l'utiliser |
|---|---|
| **Ensemble** (liste des éléments) | petits effectifs, on peut tout écrire |
| **Arbre** | choix successifs, étape par étape |
| **Tableau** (à double entrée) | deux caractères croisés |
| **Diagramme** (patates, Venn) | réunions, intersections, complémentaires |

Le **cardinal** d'un ensemble fini $E$, noté $\mathrm{Card}(E)$ ou $|E|$, est son
**nombre d'éléments**.

> **Exemple.** $E = \{a, b, c, d\}$ : $\mathrm{Card}(E) = 4$.

---

## 2. Les deux principes fondamentaux

Tout dénombrement se ramène, au fond, à ces deux principes.

### Principe additif

Si on doit choisir **soit** dans un cas, **soit** dans un autre, et que ces cas
n'ont **aucun élément commun** (ils sont *disjoints*), on **additionne**.

$$\boxed{\mathrm{Card}(A \cup B) = \mathrm{Card}(A) + \mathrm{Card}(B) \quad \text{si } A \cap B = \varnothing}$$

> **Exemple.** Un dessert : 3 gâteaux **ou** 2 glaces. Comme un dessert n'est pas
> à la fois gâteau et glace, il y a $3 + 2 = 5$ choix.

Si les cas se **chevauchent**, on retire ce qui est compté deux fois (18 anglicistes
+ 12 hispanistes − 5 bilingues = 25 élèves) :

$$\mathrm{Card}(A \cup B) = \mathrm{Card}(A) + \mathrm{Card}(B) - \mathrm{Card}(A \cap B)$$

### Principe multiplicatif

Si un choix se fait en **plusieurs étapes successives**, et que chaque étape a un
nombre de possibilités **indépendant** des précédentes, on **multiplie**.

$$\boxed{\text{(étape 1)} \times \text{(étape 2)} \times \cdots \times \text{(étape } p)}$$

> **Exemple.** Menu = 1 entrée parmi 3, puis 1 plat parmi 4 : $3 \times 4 = 12$
> menus. L'arbre a 3 branches, chacune se divisant en 4.

> ⚠️ **« et » → on multiplie ; « ou » (exclusif) → on additionne.** C'est la
> question à te poser en premier.

---

## 3. La factorielle

Pour compter des rangements, il faut la **factorielle** :

$$\boxed{n! = 1 \times 2 \times \cdots \times n} \qquad \text{et par convention } 0! = 1$$

> **Exemples.** $3! = 1\times2\times3 = 6$ ; $\; 5! = 120$ ; $\; 1! = 1$. La convention
> $0! = 1$ rend cohérentes toutes les formules qui suivent (une façon de ne rien ranger).

---

## 4. Les quatre modèles de dénombrement

On tire $p$ objets parmi $n$. Deux questions décident du modèle : **l'ordre compte-t-il ?** et **peut-on répéter un objet ?**

### a) p-listes — ordre + répétition autorisée

Une **$p$-liste** (ou $p$-uplet) d'un ensemble à $n$ éléments est une suite ordonnée
de $p$ éléments, **avec répétition possible**.

$$\boxed{n^p}$$

> **Exemple.** Un code à 4 chiffres : 10 possibilités par position, indépendantes, soit $10^4 = 10\,000$ codes.

### b) Permutations — ranger **tous** les objets dans un ordre

Une **permutation** des $n$ éléments est un rangement de **tous** les éléments,
sans répétition. Il y en a :

$$\boxed{n!}$$

> **Exemple.** Ranger 5 livres différents : $5! = 120$ (5 choix pour la 1ʳᵉ place, 4 pour la 2ᵉ, …, 1 pour la dernière).

### c) Arrangements — ordre, **sans** répétition, $p$ parmi $n$

Un **arrangement** est une suite ordonnée de $p$ éléments **distincts** choisis
parmi $n$ :

$$\boxed{A_n^p = \dfrac{n!}{(n-p)!} = \underbrace{n(n-1)\cdots(n-p+1)}_{p \text{ facteurs}}}$$

> **Exemple.** Podium (1ᵉʳ, 2ᵉ, 3ᵉ) parmi 8 coureurs, l'ordre compte, pas de répétition : $A_8^3 = 8 \times 7 \times 6 = 336$.

### d) Combinaisons — **sans** ordre, sans répétition, $p$ parmi $n$

Une **combinaison** est un **sous-ensemble** de $p$ éléments choisis parmi $n$ :
l'ordre **ne compte pas**. On la note $\binom{n}{p}$ (lire « $p$ parmi $n$ ») :

$$\boxed{\binom{n}{p} = \dfrac{n!}{p!\,(n-p)!}} \qquad \text{pour } 0 \leqslant p \leqslant n$$

> **Exemple.** Choisir 2 délégués parmi 30, l'ordre sans importance : $\binom{30}{2} = \dfrac{30 \times 29}{2} = 435$.

> **Le lien clé.** Un arrangement, c'est *choisir* $p$ éléments **puis** les *ranger*.
> D'où $A_n^p = \binom{n}{p} \times p!$, soit $\binom{n}{p} = \dfrac{A_n^p}{p!}$.

---

## 5. Coefficients binomiaux : propriétés à connaître

Les nombres $\binom{n}{p}$ s'appellent **coefficients binomiaux**. Tu les
retrouveras directement dans la **loi binomiale** : $P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}$.

**Valeurs de base** (à savoir de tête) :

$$\binom{n}{0} = 1 \qquad \binom{n}{n} = 1 \qquad \binom{n}{1} = n \qquad \binom{n}{n-1} = n$$

> **1** façon de ne choisir personne, **1** de tout choisir, **$n$** d'en choisir un seul.

**Symétrie** — choisir les $p$ qu'on prend, c'est choisir les $n-p$ qu'on laisse :

$$\boxed{\binom{n}{p} = \binom{n}{n-p}}$$

> **Exemple.** $\binom{10}{7} = \binom{10}{3} = \dfrac{10\times9\times8}{3!} = 120$ (bien plus rapide que $\binom{10}{7}$ directement).

**Relation de Pascal** — la brique du triangle :

$$\boxed{\binom{n}{p} = \binom{n-1}{p-1} + \binom{n-1}{p}} \qquad (1 \leqslant p \leqslant n-1)$$

> **Exemple.** $\binom{5}{2} = \binom{4}{1} + \binom{4}{2} = 4 + 6 = 10$.

### Le triangle de Pascal

Chaque nombre est la **somme des deux nombres au-dessus de lui** (Pascal). On lit
$\binom{n}{p}$ à la ligne $n$, position $p$ (on commence à compter à $0$).

| $n \backslash p$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| **0** | 1 | | | | | |
| **1** | 1 | 1 | | | | |
| **2** | 1 | 2 | 1 | | | |
| **3** | 1 | 3 | 3 | 1 | | |
| **4** | 1 | 4 | 6 | 4 | 1 | |
| **5** | 1 | 5 | 10 | 10 | 5 | 1 |

> **Lecture.** $\binom{5}{2} = 10$ (ligne 5, colonne 2). Et $10 = 4 + 6$, les deux
> nombres juste au-dessus : c'est la relation de Pascal en action.

---

## 6. La méthode : reconnaître le bon modèle

Face à un énoncé, pose-toi **les deux questions dans l'ordre** :

1. **L'ordre compte-t-il ?**
2. **Peut-on répéter un élément ?**

| Ordre ? | Répétition ? | Modèle | Formule |
|---|---|---|---|
| Oui | Oui | $p$-liste | $n^p$ |
| Oui | Non ($p = n$) | Permutation | $n!$ |
| Oui | Non ($p < n$) | Arrangement | $A_n^p = \dfrac{n!}{(n-p)!}$ |
| Non | Non | Combinaison | $\binom{n}{p} = \dfrac{n!}{p!(n-p)!}$ |

> **Test rapide.** « Podium » → l'ordre compte (arrangement). « Équipe », « délégués »,
> « main de cartes » → l'ordre est sans effet (combinaison). « Code », « plaque » →
> ordre **et** répétition ($p$-liste).

---

## 7. Cas particuliers et pièges de calcul

- **$\binom{n}{0} = \binom{n}{n} = 1$** et **$0! = 1$** : ne bloque pas dessus.
- **Simplifie avant de multiplier.** Pour $\binom{49}{2}$, écris
  $\dfrac{49 \times 48}{2}$ et **pas** $\dfrac{49!}{2!\,47!}$ en entier : $47!$ est
  gigantesque et se simplifie.
- **Utilise la symétrie** pour alléger : calcule $\binom{20}{18}$ comme $\binom{20}{2} = 190$.
- **Un $p$-uplet n'est pas un sous-ensemble.** $(1,2)$ et $(2,1)$ sont deux couples
  **différents**, mais $\{1,2\}$ et $\{2,1\}$ sont le **même** ensemble.

---

## 8. Tableau récapitulatif

| À mémoriser | |
|---|---|
| Principe additif (cas disjoints) | on **additionne** |
| Principe multiplicatif (étapes) | on **multiplie** |
| Factorielle | $n! = 1\times2\times\cdots\times n$, $\;0! = 1$ |
| $p$-liste (ordre + répétition) | $n^p$ |
| Permutation (tout ranger) | $n!$ |
| Arrangement (ordre, sans répétition) | $A_n^p = \dfrac{n!}{(n-p)!}$ |
| Combinaison (sans ordre) | $\binom{n}{p} = \dfrac{n!}{p!(n-p)!}$ |
| Lien | $A_n^p = \binom{n}{p} \times p!$ |
| Symétrie | $\binom{n}{p} = \binom{n}{n-p}$ |
| Pascal | $\binom{n}{p} = \binom{n-1}{p-1} + \binom{n-1}{p}$ |
| Valeurs sûres | $\binom{n}{0}=\binom{n}{n}=1$, $\;\binom{n}{1}=n$ |

---

## 9. Les erreurs qui coûtent des points

1. **Additionner quand il faut multiplier.** Étapes successives (« et ») → produit.
   Un menu 3 entrées / 4 plats donne $3\times4 = 12$, pas $3 + 4 = 7$.
2. **Confondre arrangement et combinaison.** Si l'ordre compte, c'est $A_n^p$ ;
   sinon $\binom{n}{p}$. Un podium n'est pas une équipe.
3. **Oublier de diviser par $p!$.** Une combinaison, c'est un arrangement divisé par
   $p!$. Oublier cette division **surcompte** les résultats identiques.
4. **Additionner des cas qui se chevauchent** sans retirer l'intersection : il faut
   $\mathrm{Card}(A) + \mathrm{Card}(B) - \mathrm{Card}(A\cap B)$.
5. **Écrire $\binom{n}{p} = n^p$** : faux. $n^p$ est le nombre de $p$-listes avec
   répétition, pas de sous-ensembles.
6. **Bloquer sur $0!$** : $0! = 1$, ce n'est pas $0$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt, section « ALGÈBRE ET
GÉOMÉTRIE — COMBINATOIRE ET DÉNOMBREMENT », lignes 51-58. Rubrique « Capacités
attendues » uniquement (pas de rubrique « Contenus » : le texte est volontairement
sobre). « Représentation adaptée (ensembles, arbres, tableaux, diagrammes) » →
sections 1 et 6 ; « dénombrements simples dans divers domaines » → exemples.

⚠️ MENTION OBLIGATOIRE 1 — SOURCE À CONFRONTER AU PDF : ce programme n'a PAS été
obtenu par la chaîne d'extraction habituelle ; son texte est une EXTRACTION WebFetch
depuis le miroir xm1math.net (en-tête de provenance du fichier source, lignes 6-17).
AVANT PUBLICATION il DOIT être confronté au PDF officiel (education.gouv.fr /
éduscol) ; reproduction verbatim non garantie exhaustive.

⚠️ MENTION OBLIGATOIRE 2 — PÉRIMÈTRE PROJET : chapitre de TERMINALE produit sur le
programme RENTRÉE 2027 à la demande explicite de l'utilisateur, alors que le projet
EXCLUAIT initialement la Terminale (gabarit ligne 197 : « Ne rien écrire pour la
Terminale avant 2027 »). Contrainte levée car le programme 2027 est publié ; à
signaler au relecteur, ainsi que le préfixe d'id « tale- » non documenté dans les
consignes collège (6e/5e/4e/3e), à valider comme convention Terminale.

⚠️ AU-DELÀ DE LA LETTRE « DÉNOMBREMENTS SIMPLES » — à trancher par le relecteur.
J'ai INTRODUIT, au-delà du texte, les FORMULES de p-listes ($n^p$), d'ARRANGEMENTS
($A_n^p$) et de PERMUTATIONS ($n!$) : ces objets ne sont pas nommés dans la
sous-section « combinatoire », ils relèvent de l'usage classique de Terminale — à
décider s'ils sont exigibles ou seulement illustratifs (et la notation $A_n^p$
n'est plus exigée par certaines éditions). En revanche COMBINAISONS et COEFFICIENTS
BINOMIAUX (factorielle, k parmi n, symétrie, Pascal, triangle) sont justifiés : la
sous-section « schéma de Bernoulli » (lignes 294-296) mobilise « l'expression de la
loi binomiale à l'aide des coefficients binomiaux ». Traités à ce titre.

À CONFRONTER AU PDF : notation $\binom{n}{p}$ vs $C_n^p$ retenue par le BO 2027 ;
niveau d'exigence sur p-listes / arrangements ; formule du crible
$\mathrm{Card}(A\cup B)$ avec intersection (à confirmer comme attendue).

Rédaction 100 % originale, aucun emprunt à un manuel ou site. Brouillon, non relu.
-->
