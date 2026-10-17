---
id: tale-spe-math-logique-ensembles
titre: "Vocabulaire ensembliste et logique"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 10
prerequis:
  - Ensembles de nombres $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$ (Seconde)
  - Intervalles de $\mathbb{R}$ (Seconde)
  - Notion de fonction et d'équation (Première)
statut: brouillon
relu_par: null
---

# Vocabulaire ensembliste et logique

> Ce chapitre ne t'apprend pas un nouveau calcul : il te donne la **langue** dans laquelle
> toutes les mathématiques de Terminale s'écrivent. Savoir ce qu'est une proposition, la
> nier, l'impliquer, c'est ce qui sépare une preuve d'une simple intuition. C'est un
> chapitre **transversal** : tu le retrouveras dans chaque démonstration de l'année.

---

## 1. Ensembles : appartenance et inclusion

Un **ensemble** est une collection d'objets, appelés ses **éléments**. On le décrit soit
en **extension** (on liste ses éléments), soit en **compréhension** (on donne la propriété
qui les caractérise).

$$A = \{0, 2, 4, 6\} \qquad B = \{\, n \in \mathbb{N} \mid n \text{ est pair}\,\}$$

### Appartenance

Dire qu'un objet $x$ est un élément de $A$ se note $x \in A$. Sinon, on écrit $x \notin A$.

$$\boxed{x \in A \quad\text{ou}\quad x \notin A}$$

> **Exemple.** $2 \in A$, mais $3 \notin A$. Attention : $\in$ relie un **élément** à un
> **ensemble**, jamais deux ensembles entre eux.

### Inclusion et sous-ensemble

<!-- schema:inclusions-nombres -->
![La chaîne d’inclusions ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ : tout élément d’un ensemble appartient aussi à tous ceux qui le contiennent.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI0ODgiIGhlaWdodD0iMjIwIiByeD0iMTYiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4wNyIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIvPjx0ZXh0IHg9IjMwIiB5PSI0MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7ihJ08L3RleHQ+PHRleHQgeD0iNDYiIHk9IjIyNiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJoyIDsgz4A8L3RleHQ+PHJlY3QgeD0iNzYiIHk9IjQ2IiB3aWR0aD0iMzY4IiBoZWlnaHQ9IjE2MCIgcng9IjE2IiBmaWxsPSIjN2EzZmIwIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI5MCIgeT0iNzIiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+4oSaPC90ZXh0Pjx0ZXh0IHg9IjEwNiIgeT0iMTk2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIvMzwvdGV4dD48cmVjdCB4PSIxMzYiIHk9Ijc2IiB3aWR0aD0iMjQ4IiBoZWlnaHQ9IjEwMCIgcng9IjE2IiBmaWxsPSIjYzAyYTJhIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxNTAiIHk9IjEwMiIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7ihKQ8L3RleHQ+PHRleHQgeD0iMTY2IiB5PSIxNjYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSNTwvdGV4dD48cmVjdCB4PSIxOTYiIHk9IjEwNiIgd2lkdGg9IjEyOCIgaGVpZ2h0PSI0MCIgcng9IjE2IiBmaWxsPSIjMWE3ZjRiIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIyMTAiIHk9IjEzMiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7ihJU8L3RleHQ+PHRleHQgeD0iMjYwIiB5PSIxMzYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAgOyA3PC90ZXh0Pjwvc3ZnPg==)
*La chaîne d’inclusions ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ : tout élément d’un ensemble appartient aussi à tous ceux qui le contiennent.*
<!-- /schema -->

$A$ est un **sous-ensemble** de $B$ (ou : $A$ est inclus dans $B$) lorsque **tout** élément
de $A$ est aussi élément de $B$. On note $A \subset B$.

$$\boxed{A \subset B \iff \big(\text{pour tout } x,\ x \in A \Rightarrow x \in B\big)}$$

> **Exemple.** $\{0, 2\} \subset A$, et l'on a la chaîne classique
> $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.

### L'ensemble vide

L'ensemble qui ne contient **aucun** élément est l'**ensemble vide**, noté $\varnothing$.

> **Exemple.** $\{\, x \in \mathbb{R} \mid x^2 = -1 \,\} = \varnothing$ : aucun réel n'a un
> carré négatif. L'ensemble vide est inclus dans **tout** ensemble : $\varnothing \subset A$.

> ⚠️ Ne confonds pas $\varnothing$ et $\{0\}$. $\varnothing$ n'a **aucun** élément ;
> $\{0\}$ en a **un**, le nombre $0$.

---

## 2. Propositions, variables et quantificateurs

### Proposition mathématique

Une **proposition** (ou assertion) est un énoncé mathématique qui est **soit vrai, soit
faux** — jamais les deux, jamais « entre les deux ».

> **Exemple.** « $7$ est premier » est une proposition (vraie). « $3 > 5$ » est une
> proposition (fausse). En revanche « $x + 1$ » n'est **pas** une proposition : ce n'est
> pas un énoncé qu'on peut déclarer vrai ou faux.

### Variables

Un énoncé qui dépend d'une **variable**, comme $P(x)$ : « $x > 2$ », n'a pas de valeur de
vérité tant que $x$ n'est pas fixé : c'est un **prédicat**. Il devient une proposition dès
qu'on donne une valeur à $x$, ou qu'on le **quantifie**.

### Quantificateurs

| Symbole | Se lit | Sens |
|---|---|---|
| $\forall$ | « pour tout » | la propriété vaut pour **chaque** élément |
| $\exists$ | « il existe » | la propriété vaut pour **au moins un** élément |

> **Exemple.** $\forall x \in \mathbb{R},\ x^2 \geqslant 0$ est vraie. 
> $\exists x \in \mathbb{R},\ x^2 = 2$ est vraie (c'est $\sqrt{2}$). 
> $\forall x \in \mathbb{R},\ x^2 = 2$ est **fausse** (elle échoue dès $x = 0$).

> ⚠️ **L'ordre des quantificateurs change tout.** 
> $\forall x \in \mathbb{R},\ \exists y \in \mathbb{R},\ y > x$ est vraie (à chaque $x$ on
> choisit un $y$ plus grand). En échangeant : $\exists y,\ \forall x,\ y > x$ serait un
> $y$ plus grand que **tous** les réels : c'est faux.

---

## 3. Connecteurs logiques

À partir de propositions $P$ et $Q$, on en fabrique de nouvelles.

- **Conjonction** $P \text{ et } Q$ : vraie quand $P$ **et** $Q$ sont vraies toutes deux.
- **Disjonction** $P \text{ ou } Q$ : vraie dès qu'**au moins une** des deux est vraie.

> ⚠️ Le « ou » mathématique est **inclusif** : $P \text{ ou } Q$ reste vraie quand $P$ et
> $Q$ sont vraies **en même temps**. Ce n'est pas le « ou » exclusif du langage courant
> (« fromage ou dessert »).

> **Exemple.** Pour $x$ réel : « $x \geqslant 0$ **ou** $x \leqslant 0$ » est **toujours**
> vraie (en $x = 0$, les deux le sont).

---

## 4. Négation, implication, équivalence

### Négation

La **négation** de $P$, notée $\text{non } P$, est vraie exactement quand $P$ est fausse.
Nier une proposition **quantifiée** échange les quantificateurs et nie l'intérieur :

$$\boxed{\text{non}\,(\forall x,\ P(x)) \iff \exists x,\ \text{non}\,P(x)}$$
$$\boxed{\text{non}\,(\exists x,\ P(x)) \iff \forall x,\ \text{non}\,P(x)}$$

> **Exemple.** La négation de « $\forall x \in \mathbb{R},\ x^2 \geqslant 1$ » est
> « $\exists x \in \mathbb{R},\ x^2 < 1$ » — vraie, prends $x = 0$. Nier « pour tout »,
> c'est exhiber **un seul** contre-exemple.

La négation échange aussi « et » et « ou » (lois de De Morgan) :

$$\text{non}\,(P \text{ et } Q) \iff (\text{non } P) \text{ ou } (\text{non } Q)$$

### Implication

<!-- schema:implication-contraposee -->
![Si P implique Q, l’ensemble où P est vraie est inclus dans celui où Q est vraie ; donc, hors de Q, on est forcément hors de P : c’est la contraposée, non Q implique non P.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMjIwIiByeD0iMTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxyZWN0IHg9IjE0MCIgeT0iNDUiIHdpZHRoPSIzNjAiIGhlaWdodD0iMTcwIiByeD0iODUiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC4xIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iMzAwIiB5PSI4NSIgd2lkdGg9IjE3MCIgaGVpZ2h0PSI5MCIgcng9IjQ1IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMTUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIzODUiIHk9IjEyOCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UCB2cmFpZTwvdGV4dD48dGV4dCB4PSIzODUiIHk9IjE1MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+KG4gcGFpcik8L3RleHQ+PHRleHQgeD0iMjE1IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPlEgdnJhaWU8L3RleHQ+PHRleHQgeD0iMjE1IiB5PSIxNDIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPihuwrIgcGFpcik8L3RleHQ+PHRleHQgeD0iODAiIHk9IjEyMCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+bm9uIFE8L3RleHQ+PHRleHQgeD0iODAiIHk9IjE0MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+ZG9uYyBub24gUDwvdGV4dD48dGV4dCB4PSIyNzAiIHk9IjI1NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+UCDih5IgUSA6IGxhIHpvbmUgZGUgUCBlc3QgZGFucyBjZWxsZSBkZSBRIDsgaG9ycyBkZSBRLCBvbiBlc3QgaG9ycyBkZSBQPC90ZXh0Pjwvc3ZnPg==)
*Si P implique Q, l’ensemble où P est vraie est inclus dans celui où Q est vraie ; donc, hors de Q, on est forcément hors de P : c’est la contraposée, non Q implique non P.*
<!-- /schema -->

$P \Rightarrow Q$ (« $P$ implique $Q$ ») signifie : **si** $P$ est vraie, **alors** $Q$
l'est. Elle n'est **fausse** que dans un seul cas : $P$ vraie et $Q$ fausse.

$$\boxed{\text{non}\,(P \Rightarrow Q) \iff \big(P \text{ et } \text{non } Q\big)}$$

- La **réciproque** de $P \Rightarrow Q$ est $Q \Rightarrow P$ (souvent de valeur différente !).
- La **contraposée** de $P \Rightarrow Q$ est $\text{non } Q \Rightarrow \text{non } P$.

$$\boxed{(P \Rightarrow Q) \iff (\text{non } Q \Rightarrow \text{non } P)}$$

> **Exemple.** « $n$ pair $\Rightarrow n^2$ pair » est vraie. Sa réciproque « $n^2$ pair
> $\Rightarrow n$ pair » est vraie **aussi**, mais c'est un autre énoncé, à prouver
> séparément. Sa contraposée « $n^2$ impair $\Rightarrow n$ impair » lui est **équivalente**.

### Équivalence

$P \iff Q$ signifie $(P \Rightarrow Q)$ **et** $(Q \Rightarrow P)$ : $P$ et $Q$ ont la même
valeur de vérité. On dit « $P$ si et seulement si $Q$ ».

> **Exemple.** Pour $x$ réel : $x^2 = 1 \iff (x = 1 \text{ ou } x = -1)$. Prouver une
> équivalence, c'est prouver **les deux** implications.

---

## 5. Les grands types de raisonnement

C'est le cœur du chapitre : le programme demande de savoir raisonner **par disjonction de
cas, par l'absurde, par contraposée**.

### Disjonction de cas

On découpe la situation en cas qui **couvrent tout**, et on conclut dans chacun.

> **Exemple.** Montrer que $\forall n \in \mathbb{N},\ n(n+1)$ est pair. 
> **Cas 1** : $n$ pair, alors $n(n+1)$ est pair. **Cas 2** : $n$ impair, alors $n+1$ est
> pair, donc le produit l'est. Les deux cas couvrent tout $\mathbb{N}$ : c'est prouvé.

### Raisonnement par contraposée

Pour prouver $P \Rightarrow Q$, on prouve la **contraposée** $\text{non } Q \Rightarrow
\text{non } P$, qui lui est équivalente — parfois bien plus simple.

> **Exemple.** Montrer : « si $n^2$ est pair, alors $n$ est pair ». La contraposée « si $n$
> est impair, alors $n^2$ est impair » se prouve directement : $n = 2k+1$ donne
> $n^2 = 2(2k^2+2k)+1$, impair. La contraposée étant prouvée, l'énoncé de départ l'est.

### Raisonnement par l'absurde

Pour prouver une proposition, on **suppose sa négation** et on aboutit à une contradiction.

> **Exemple.** Montrer que $\sqrt{2} \notin \mathbb{Q}$. On suppose l'absurde :
> $\sqrt{2} = \dfrac{p}{q}$ irréductible. Alors $2q^2 = p^2$, donc $p$ est pair, $p = 2p'$,
> d'où $q^2 = 2p'^2$ et $q$ pair aussi. $p$ et $q$ tous deux pairs contredisent
> « irréductible ». La supposition est donc absurde : $\sqrt{2}$ est irrationnel.

### Et la récurrence ?

Le **raisonnement par récurrence** est un autre grand mode de preuve, exigé au programme.
Il est **prérequis du chapitre « Suites »** et y est traité en détail : reporte-toi à ce
chapitre pour l'initialisation, l'hérédité et la conclusion. On ne le développe pas ici.

---

## 6. Tableau récapitulatif

| Objet | Symbole | À retenir |
|---|---|---|
| Appartenance | $x \in A$ | relie un élément à un ensemble |
| Inclusion | $A \subset B$ | tout élément de $A$ est dans $B$ |
| Ensemble vide | $\varnothing$ | aucun élément ; inclus dans tout ensemble |
| Pour tout | $\forall$ | nié par $\exists\ \text{non}$ |
| Il existe | $\exists$ | nié par $\forall\ \text{non}$ |
| Ou | inclusif | vrai même si les deux le sont |
| Implication | $P \Rightarrow Q$ | fausse seulement si $P$ vraie et $Q$ fausse |
| Contraposée | $\text{non } Q \Rightarrow \text{non } P$ | **équivalente** à $P \Rightarrow Q$ |
| Réciproque | $Q \Rightarrow P$ | **pas** équivalente en général |
| Équivalence | $P \iff Q$ | les deux implications |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre implication et équivalence.** $P \Rightarrow Q$ ne donne pas $Q \Rightarrow P$.
   Prouver l'une ne prouve pas l'autre.
2. **Confondre réciproque et contraposée.** Seule la **contraposée** est équivalente à
   l'implication. La réciproque, elle, est un énoncé à démontrer à part.
3. **Nier une implication avec une autre implication.** La négation de $P \Rightarrow Q$
   n'est pas $P \Rightarrow \text{non } Q$, mais « $P$ **et** $\text{non } Q$ ».
4. **Oublier de retourner les quantificateurs en niant.** La négation de « $\forall x, P(x)$ »
   est « $\exists x, \text{non } P(x)$ », pas « $\forall x, \text{non } P(x)$ ».
5. **Lire le « ou » comme exclusif.** En maths, $P \text{ ou } Q$ est vraie quand les deux
   le sont.
6. **Écrire $x \subset A$ pour un élément, ou $x \in A$ pour un sous-ensemble.** $\in$ relie
   un élément à un ensemble ; $\subset$ relie deux ensembles.
7. **Croire qu'un contre-exemple prouve un « pour tout ».** Un contre-exemple **réfute** un
   « $\forall$ » ; il ne prouve jamais un énoncé universel.
