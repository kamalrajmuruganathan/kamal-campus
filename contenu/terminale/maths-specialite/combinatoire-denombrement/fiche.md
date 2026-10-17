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

<!-- schema:triangle-pascal -->
![Triangle de Pascal jusqu’à n = 5 : chaque nombre est la somme des deux nombres situés juste au-dessus, par exemple 4 + 6 = 10, le coefficient « 2 parmi 5 ».](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMjY1IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIyNjUiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxMjMiIHk9IjQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0Pjx0ZXh0IHg9IjE2OSIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHRleHQgeD0iMjE1IiB5PSI0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjwvdGV4dD48dGV4dCB4PSIyNjEiIHk9IjQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0Pjx0ZXh0IHg9IjMwNyIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjQ8L3RleHQ+PHRleHQgeD0iMzUzIiB5PSI0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTwvdGV4dD48dGV4dCB4PSI4OCIgeT0iNzIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHJlY3QgeD0iMTAwIiB5PSI1MCIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTIzIiB5PSI3MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI4OCIgeT0iMTA2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0PjxyZWN0IHg9IjEwMCIgeT0iODQiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjEyMyIgeT0iMTA2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxyZWN0IHg9IjE0NiIgeT0iODQiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE2OSIgeT0iMTA2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9Ijg4IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjI8L3RleHQ+PHJlY3QgeD0iMTAwIiB5PSIxMTgiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjEyMyIgeT0iMTQwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxyZWN0IHg9IjE0NiIgeT0iMTE4IiB3aWR0aD0iNDYiIGhlaWdodD0iMzQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxNjkiIHk9IjE0MCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjwvdGV4dD48cmVjdCB4PSIxOTIiIHk9IjExOCIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjE1IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iODgiIHk9IjE3NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzwvdGV4dD48cmVjdCB4PSIxMDAiIHk9IjE1MiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTIzIiB5PSIxNzQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHJlY3QgeD0iMTQ2IiB5PSIxNTIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE2OSIgeT0iMTc0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0PjxyZWN0IHg9IjE5MiIgeT0iMTUyIiB3aWR0aD0iNDYiIGhlaWdodD0iMzQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIyMTUiIHk9IjE3NCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MzwvdGV4dD48cmVjdCB4PSIyMzgiIHk9IjE1MiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjYxIiB5PSIxNzQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iODgiIHk9IjIwOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48cmVjdCB4PSIxMDAiIHk9IjE4NiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTIzIiB5PSIyMDgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHJlY3QgeD0iMTQ2IiB5PSIxODYiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTY5IiB5PSIyMDgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjQ8L3RleHQ+PHJlY3QgeD0iMTkyIiB5PSIxODYiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjE1IiB5PSIyMDgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjY8L3RleHQ+PHJlY3QgeD0iMjM4IiB5PSIxODYiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjI2MSIgeT0iMjA4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj40PC90ZXh0PjxyZWN0IHg9IjI4NCIgeT0iMTg2IiB3aWR0aD0iNDYiIGhlaWdodD0iMzQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIzMDciIHk9IjIwOCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI4OCIgeT0iMjQyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj41PC90ZXh0PjxyZWN0IHg9IjEwMCIgeT0iMjIwIiB3aWR0aD0iNDYiIGhlaWdodD0iMzQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxMjMiIHk9IjI0MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48cmVjdCB4PSIxNDYiIHk9IjIyMCIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTY5IiB5PSIyNDIiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU8L3RleHQ+PHJlY3QgeD0iMTkyIiB5PSIyMjAiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjE1IiB5PSIyNDIiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjEwPC90ZXh0PjxyZWN0IHg9IjIzOCIgeT0iMjIwIiB3aWR0aD0iNDYiIGhlaWdodD0iMzQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIyNjEiIHk9IjI0MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTA8L3RleHQ+PHJlY3QgeD0iMjg0IiB5PSIyMjAiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzNCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjMwNyIgeT0iMjQyIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj41PC90ZXh0PjxyZWN0IHg9IjMzMCIgeT0iMjIwIiB3aWR0aD0iNDYiIGhlaWdodD0iMzQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIzNTMiIHk9IjI0MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI4OCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPm4gXCBwPC90ZXh0Pjx0ZXh0IHg9IjQzMCIgeT0iMTUwIiBmb250LXNpemU9IjE3IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj40ICsgNiA9IDEwPC90ZXh0Pjx0ZXh0IHg9IjQzMCIgeT0iMTc1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7CqyAyIHBhcm1pIDUgwrsgPSAxMDwvdGV4dD48L3N2Zz4=)
*Triangle de Pascal jusqu’à n = 5 : chaque nombre est la somme des deux nombres situés juste au-dessus, par exemple 4 + 6 = 10, le coefficient « 2 parmi 5 ».*
<!-- /schema -->

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

<!-- schema:choisir-le-modele -->
![Pour choisir le modèle de dénombrement, on se demande d’abord si l’ordre compte, puis si les répétitions sont possibles : p-liste, arrangement (ou permutation) ou combinaison.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU3MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMDAiIHk9IjE0IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjQyIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI5MCIgeT0iMzkuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TOKAmW9yZHJlIGNvbXB0ZS10LWlsID88L3RleHQ+PGxpbmUgeDE9IjI0MCIgeTE9IjU2IiB4Mj0iMTM5LjQiIHkyPSI5Mi41OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTMwLDk2IDE0MS4xMSw5Ny4yOCAxMzcuNjksODcuODgiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSIxNjgiIHk9IjcwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5vdWk8L3RleHQ+PGxpbmUgeDE9IjM0MCIgeTE9IjU2IiB4Mj0iNDQwLjYiIHkyPSI5Mi41OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDUwLDk2IDQ0Mi4zMSw4Ny44OCA0MzguODksOTcuMjgiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI0MTIiIHk9IjcwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5ub248L3RleHQ+PHJlY3QgeD0iMzAiIHk9Ijk2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQyIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjEzMCIgeT0iMTIxLjkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlLDqXDDqXRpdGlvbiBwb3NzaWJsZSA/PC90ZXh0PjxyZWN0IHg9IjM3MCIgeT0iOTYiIHdpZHRoPSIxODAiIGhlaWdodD0iNTQiIHJ4PSI4IiBmaWxsPSIjZmZmNGU2IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDYwIiB5PSIxMTkuMTUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmNvbWJpbmFpc29uPC90ZXh0Pjx0ZXh0IHg9IjQ2MCIgeT0iMTM2LjY1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7CqyBwIHBhcm1pIG4gwrs8L3RleHQ+PGxpbmUgeDE9IjgwIiB5MT0iMTM4IiB4Mj0iNzIuMzIiIHkyPSIxNzAuMjciIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjcwLDE4MCA3Ny4xOCwxNzEuNDMgNjcuNDUsMTY5LjExIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iNTgiIHk9IjE2MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+b3VpPC90ZXh0PjxsaW5lIHgxPSIxODAiIHkxPSIxMzgiIHgyPSIyNDEuNDMiIHkyPSIxNzQuODYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI1MCwxODAgMjQ0LDE3MC41NyAyMzguODUsMTc5LjE0IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjI2IiB5PSIxNTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+bm9uPC90ZXh0PjxyZWN0IHg9IjEwIiB5PSIxODAiIHdpZHRoPSIxMzAiIGhlaWdodD0iNTQiIHJ4PSI4IiBmaWxsPSIjZTlmNmVlIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNzUiIHk9IjIwMy4xNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cC1saXN0ZTwvdGV4dD48dGV4dCB4PSI3NSIgeT0iMjIwLjY1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5u4bWWPC90ZXh0PjxyZWN0IHg9IjE2MCIgeT0iMTgwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjU0IiByeD0iOCIgZmlsbD0iI2U5ZjZlZSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI2MCIgeT0iMjAzLjQzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hcnJhbmdlbWVudCBuIS8obiDiiJIgcCkhPC90ZXh0Pjx0ZXh0IHg9IjI2MCIgeT0iMjE5LjY4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4ocGVybXV0YXRpb24gc2kgcCA9IG4gOiBuISk8L3RleHQ+PHRleHQgeD0iNDYwIiB5PSIxODIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPm4hLyhwISAobiDiiJIgcCkhKTwvdGV4dD48L3N2Zz4=)
*Pour choisir le modèle de dénombrement, on se demande d’abord si l’ordre compte, puis si les répétitions sont possibles : p-liste, arrangement (ou permutation) ou combinaison.*
<!-- /schema -->

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
