---
id: 4e-math-probabilites
titre: "Probabilités"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Probabilités — expérience aléatoire, issue, événement, équiprobabilité (5e)
  - Statistiques — effectifs et fréquences (5e)
  - Fractions — simplifier, additionner, soustraire (5e)
statut: brouillon
relu_par: null
---

# Probabilités

> En 5e, tu as appris à mettre un nombre sur le hasard. Cette année, on te donne un
> **langage** pour le décrire : celui des ensembles. Avec lui, tu vas pouvoir combiner
> des événements, calculer par le **contraire**, et traiter des expériences qui se
> déroulent en **deux temps**.

**Ce chapitre suppose la 5e acquise** : expérience aléatoire, issue, événement,
échelle de $0$ à $1$, équiprobabilité, les trois écritures d'une probabilité. Va
relire la fiche de 5e si un de ces mots est flou — rien n'est répété ici.

---

## 1. Décrire une expérience avec des ensembles

Une expérience aléatoire, c'est d'abord une **liste de résultats possibles**. On lui
donne un nom et on l'écrit comme un ensemble : entre accolades, les issues séparées
par des points-virgules.

$$\boxed{\Omega = \text{l'univers} = \text{l'ensemble de \textbf{toutes} les issues}}$$

> **Exemple.** Lancer un dé équilibré à six faces :
> $$\Omega = \{1 \,;\, 2 \,;\, 3 \,;\, 4 \,;\, 5 \,;\, 6\}$$

> **Exemple.** Lancer une pièce équilibrée : $\Omega = \{P \,;\, F\}$.

Un **événement** est une **partie** de l'univers : tu sélectionnes, parmi les issues,
celles qui le réalisent.

> **Exemple.** Avec le dé, l'événement $A$ : « obtenir un nombre pair » s'écrit
> $$A = \{2 \,;\, 4 \,;\, 6\}$$

> ⚠️ **Ne confonds pas $\Omega$ et un événement.** $\Omega$ contient les issues, une
> par une. « Pair » et « impair » ne sont pas des issues : ce sont deux événements.

---

## 2. Les quatre mots à connaître

<!-- schema:ensembles -->
![Lancer d’un dé : l’issue 6 est dans A et dans B (intersection) ; la réunion regroupe 2, 4, 5 et 6 ; 1 et 3 ne sont ni dans A ni dans B.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iMTgiIHdpZHRoPSI1MjAiIGhlaWdodD0iMjE0IiByeD0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNiIgeT0iMjIwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPs6pPC90ZXh0PjxjaXJjbGUgY3g9IjIyMCIgY3k9IjEzMCIgcj0iOTUiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4xMiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjxjaXJjbGUgY3g9IjM0MCIgY3k9IjEzMCIgcj0iOTUiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4xMiIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNTAiIHk9IjM5IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BIDogcGFpcjwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDEwIiB5PSIzOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QiA6IGF1IG1vaW5zIDU8L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIxMjMiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjI8L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIxNDkiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjQ8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIxMzYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjY8L3RleHQ+PHRleHQgeD0iMzkwIiB5PSIxMzYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjU8L3RleHQ+PHRleHQgeD0iNTAwIiB5PSI2MCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48dGV4dCB4PSI1MDAiIHk9Ijg4IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iMjU4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BIOKIqSBCID0gezZ9ICAgOyAgIEEg4oiqIEIgPSB7MiA7IDQgOyA1IDsgNn08L3RleHQ+PC9zdmc+)
*Lancer d’un dé : l’issue 6 est dans A et dans B (intersection) ; la réunion regroupe 2, 4, 5 et 6 ; 1 et 3 ne sont ni dans A ni dans B.*
<!-- /schema -->

Tout le vocabulaire de l'année tient dans ce tableau. On garde le dé à six faces, avec
$A = \{2 \,;\, 4 \,;\, 6\}$ (« pair ») et $B = \{5 \,;\, 6\}$ (« au moins $5$ »).

| Mot | Notation | Ce que ça veut dire | Sur l'exemple |
|---|---|---|---|
| **Complémentaire** (contraire) | $\overline{A}$ | les issues de $\Omega$ qui **ne sont pas** dans $A$ | $\overline{A} = \{1 \,;\, 3 \,;\, 5\}$ |
| **Réunion** | $A \cup B$ | les issues qui sont dans $A$ **ou** dans $B$ | $A \cup B = \{2 \,;\, 4 \,;\, 5 \,;\, 6\}$ |
| **Intersection** | $A \cap B$ | les issues qui sont dans $A$ **et** dans $B$ | $A \cap B = \{6\}$ |
| **Ensemble vide** | $\emptyset$ | aucune issue : l'**événement impossible** | « obtenir $7$ » $= \emptyset$ |

> **Le « ou » des mathématiques n'est pas exclusif.** $A \cup B$ contient le $6$, qui
> est à la fois pair et supérieur à $5$. « Ou » veut dire « l'un, l'autre, ou les
> deux » — jamais « l'un ou l'autre mais pas les deux ».

> **Comment retenir les deux symboles.** Le $\cap$ de l'inter**s**ection est un
> chapeau : il **coince** ce qui est commun. Le $\cup$ de la réunion est un récipient :
> il **rassemble** tout.

> **Une intersection peut être vide.** $A = \{2 \,;\, 4 \,;\, 6\}$ et
> $\overline{A} = \{1 \,;\, 3 \,;\, 5\}$ n'ont aucune issue commune :
> $A \cap \overline{A} = \emptyset$. Un nombre n'est pas pair et impair à la fois.

---

## 3. Calculer la probabilité d'un événement

La méthode de 5e ne change pas. En situation d'**équiprobabilité** :

$$\boxed{P(A) = \frac{\text{nombre d'issues de } A}{\text{nombre d'issues de } \Omega}}$$

Ce qui change, c'est que tu sais maintenant **écrire** $A$ avant de compter. Écris
l'ensemble, compte, divise.

> **Exemples.** $A = \{2 \,;\, 4 \,;\, 6\}$ dans $\Omega$ à $6$ issues :
> $P(A) = \dfrac{3}{6} = \dfrac{1}{2}$.
> Et $A \cup B = \{2 \,;\, 4 \,;\, 5 \,;\, 6\}$ compte quatre issues, donc
> $P(A \cup B) = \dfrac{4}{6} = \dfrac{2}{3}$.

> ⚠️ **N'additionne pas $P(A)$ et $P(B)$ à l'aveugle.** Ici
> $P(A) + P(B) = \dfrac{3}{6} + \dfrac{2}{6} = \dfrac{5}{6}$, alors que la bonne
> réponse est $\dfrac{4}{6}$. L'addition compte le $6$ **deux fois**, parce qu'il est
> dans $A$ et dans $B$. La méthode sûre en 4e : **liste les issues et compte-les**.

Deux repères qui découlent directement de la formule :

$$P(\emptyset) = 0 \qquad\qquad P(\Omega) = 1$$

---

## 4. L'événement contraire : la ruse qui fait gagner du temps

$A$ et $\overline{A}$ se partagent tout l'univers, sans se chevaucher. Leurs
probabilités se complètent donc à $1$ :

$$\boxed{P(A) + P(\overline{A}) = 1 \qquad \text{soit} \qquad P(\overline{A}) = 1 - P(A)}$$

> **Exemple direct.** Si $P(A) = 0{,}3$, alors $P(\overline{A}) = 1 - 0{,}3 = 0{,}7$.

> **Quand c'est utile.** Dès que l'énoncé contient **« au moins »**. Compter toutes les
> façons d'avoir « au moins un » est long ; compter la seule façon de n'en avoir
> **aucun** est rapide. Tu calcules le contraire, puis tu retranches à $1$.

> ⚠️ **Deux confusions à éviter.** « Contraire » n'est pas « opposé » : le contraire de
> $0{,}3$ vaut $0{,}7$, jamais $-0{,}3$. Et le contraire de « au moins un », c'est
> « aucun » — pas « au plus un », ni « exactement un ». Formule la négation à voix
> haute avant de calculer.

---

## 5. Les expériences à deux épreuves

Certaines expériences se déroulent en **deux temps** : lancer deux pièces, une pièce
puis un dé, deux dés. Une issue n'est alors plus un nombre seul, mais un **couple de
résultats**, que l'on note entre parenthèses.

### La méthode : lister toutes les issues

<!-- schema:deux-pieces -->
![Avec deux pièces, l’arbre donne quatre couples équiprobables ; « exactement un pile » se réalise de deux façons, d’où la probabilité 2/4 = 1/2.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjc1IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyNzUiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNTAiIHk9IjI2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xZXIgbGFuY2VyPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjJlIGxhbmNlcjwvdGV4dD48dGV4dCB4PSI0NTAiIHk9IjI2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5pc3N1ZTwvdGV4dD48Y2lyY2xlIGN4PSI0MCIgY3k9IjEyOSIgcj0iNSIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0MCIgeTE9IjEyOSIgeDI9IjEzNiIgeTI9IjgzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIxMzYiIHk9IjY4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTUxIiB5PSI4OC4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+UDwvdGV4dD48bGluZSB4MT0iMTY2IiB5MT0iODMiIHgyPSIyODYiIHkyPSI2MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMjg2IiB5PSI0NSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjMwMSIgeT0iNjUuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlA8L3RleHQ+PHJlY3QgeD0iNDEwIiB5PSI0NCIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjQ1MiIgeT0iNjUuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPihQIDsgUCk8L3RleHQ+PGxpbmUgeDE9IjMxOCIgeTE9IjYwIiB4Mj0iNDA4IiB5Mj0iNjAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE2NiIgeTE9IjgzIiB4Mj0iMjg2IiB5Mj0iMTA2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIyODYiIHk9IjkxIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzAxIiB5PSIxMTEuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkY8L3RleHQ+PHJlY3QgeD0iNDEwIiB5PSI5MCIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iI2UzZjRlYSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjQ1MiIgeT0iMTExLjI1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4oUCA7IEYpPC90ZXh0PjxsaW5lIHgxPSIzMTgiIHkxPSIxMDYiIHgyPSI0MDgiIHkyPSIxMDYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iMTI5IiB4Mj0iMTM2IiB5Mj0iMTc1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIxMzYiIHk9IjE2MCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE1MSIgeT0iMTgwLjI1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5GPC90ZXh0PjxsaW5lIHgxPSIxNjYiIHkxPSIxNzUiIHgyPSIyODYiIHkyPSIxNTIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjI4NiIgeT0iMTM3IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzAxIiB5PSIxNTcuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlA8L3RleHQ+PHJlY3QgeD0iNDEwIiB5PSIxMzYiIHdpZHRoPSI4NCIgaGVpZ2h0PSIzMiIgcng9IjgiIGZpbGw9IiNlM2Y0ZWEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0NTIiIHk9IjE1Ny4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+KEYgOyBQKTwvdGV4dD48bGluZSB4MT0iMzE4IiB5MT0iMTUyIiB4Mj0iNDA4IiB5Mj0iMTUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjYiIHkxPSIxNzUiIHgyPSIyODYiIHkyPSIxOTgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjI4NiIgeT0iMTgzIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzAxIiB5PSIyMDMuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkY8L3RleHQ+PHJlY3QgeD0iNDEwIiB5PSIxODIiIHdpZHRoPSI4NCIgaGVpZ2h0PSIzMiIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0NTIiIHk9IjIwMy4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+KEYgOyBGKTwvdGV4dD48bGluZSB4MT0iMzE4IiB5MT0iMTk4IiB4Mj0iNDA4IiB5Mj0iMTk4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI4MCIgeT0iMjUyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5leGFjdGVtZW50IHVuIHBpbGUgOiAyIGlzc3VlcyBzdXIgNDwvdGV4dD48L3N2Zz4=)
*Avec deux pièces, l’arbre donne quatre couples équiprobables ; « exactement un pile » se réalise de deux façons, d’où la probabilité 2/4 = 1/2.*
<!-- /schema -->

> **Exemple 1 — deux pièces.**
> $$\Omega = \{(P\,;P) \,;\, (P\,;F) \,;\, (F\,;P) \,;\, (F\,;F)\}$$
> Quatre issues équiprobables. Probabilité d'obtenir **exactement un pile** ?
> Favorables : $(P\,;F)$ et $(F\,;P)$, soit $2$ issues.
> $$P = \frac{2}{4} = \frac{1}{2}$$

> ⚠️ **LE piège de tout le chapitre.** Beaucoup répondent $\dfrac{1}{3}$, en croyant
> que les trois cas « deux piles », « un pile », « zéro pile » ont la même chance.
> C'est faux : **« un pile » se réalise de deux façons**, $(P\,;F)$ et $(F\,;P)$.
> Les issues équiprobables sont les **couples**, pas les résumés qu'on en fait.

> **Exemple 2 — une pièce et un dé.** Chacun des $2$ résultats de la pièce se combine
> avec chacun des $6$ résultats du dé : l'univers a $2 \times 6 = 12$ issues.
> $$\Omega = \{(P\,;1) \,;\, (P\,;2) \,;\, \dots \,;\, (F\,;6)\}$$
> Probabilité d'obtenir face et un nombre pair ? Favorables : $(F\,;2)$, $(F\,;4)$,
> $(F\,;6)$, soit $3$ issues. $P = \dfrac{3}{12} = \dfrac{1}{4}$.

### Deux dés : le cas à connaître

Avec deux dés à six faces, l'univers compte $6 \times 6 = 36$ issues. Les ranger dans
un tableau évite d'en oublier — ici la **somme** des deux dés :

| $+$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| **$1$** | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| **$2$** | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| **$3$** | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
| **$4$** | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| **$5$** | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ |
| **$6$** | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |

Chaque **case** est une issue, et les $36$ cases sont équiprobables.

> **Exemple.** Probabilité que la somme fasse $7$ ? Compte les $7$ dans le tableau :
> il y en a $6$. $P = \dfrac{6}{36} = \dfrac{1}{6}$.

> ⚠️ **Les sommes ne sont pas équiprobables.** Il y a $11$ sommes possibles ($2$ à
> $12$), mais $P(\text{somme} = 7) = \dfrac{6}{36}$ alors que
> $P(\text{somme} = 2) = \dfrac{1}{36}$. On ne divise **jamais** par $11$.

> **Exemple avec le contraire.** Probabilité d'obtenir **au moins un $6$** ?
> Contraire : « aucun $6$ », c'est-à-dire $5$ possibilités par dé, soit
> $5 \times 5 = 25$ issues.
> $$P(\text{au moins un } 6) = 1 - \frac{25}{36} = \frac{11}{36}$$
> Réponse fausse fréquente : $\dfrac{1}{6} + \dfrac{1}{6} = \dfrac{12}{36}$ — elle
> compte deux fois l'issue $(6\,;6)$.

---

## 6. Répéter l'expérience : fréquences et probabilités

En 5e, tu as vu que la fréquence observée se rapproche de la probabilité quand on
répète beaucoup. Cette année, on **compare les deux distributions** et on regarde de
plus près ce qui se passe pour un nombre de répétitions **fixé**.

### Comparer les deux distributions

<!-- schema:frequences-120 -->
![Distribution des fréquences observées sur 120 lancers, en dents de scie, comparée à la probabilité 1/6 de chaque face (ligne rouge).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIzMDAiIHk9IjI0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5GcsOpcXVlbmNlcyBvYnNlcnbDqWVzIHN1ciAxMjAgbGFuY2VyczwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyNzQiIHgyPSI1MzAiIHkyPSIyNzQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMjc4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIzMy4yIiB4Mj0iNTMwIiB5Mj0iMjMzLjIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMjM3LjIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMDU8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTkyLjQiIHgyPSI1MzAiIHkyPSIxOTIuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxOTYuNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwxPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjE1MS42IiB4Mj0iNTMwIiB5Mj0iMTUxLjYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMTU1LjYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMTU8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTEwLjgiIHgyPSI1MzAiIHkyPSIxMTAuOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxMTQuOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwyPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjcwIiB4Mj0iNTMwIiB5Mj0iNzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iNzQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMjU8L3RleHQ+PHJlY3QgeD0iNzUuNjciIHk9IjE1MS42IiB3aWR0aD0iNDciIGhlaWdodD0iMTIyLjQiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9Ijk5LjE3IiB5PSIyOTMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZhY2UgMTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iOTkuMTciIHk9IjE0NS42IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wLDE1PC90ZXh0PjxyZWN0IHg9IjE1NCIgeT0iMTE3LjYiIHdpZHRoPSI0NyIgaGVpZ2h0PSIxNTYuNCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMTc3LjUiIHk9IjI5MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmFjZSAyPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNzcuNSIgeT0iMTExLjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjAsMTk8L3RleHQ+PHJlY3QgeD0iMjMyLjMzIiB5PSIxNTguNCIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjExNS42IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIyNTUuODMiIHk9IjI5MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmFjZSAzPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyNTUuODMiIHk9IjE1Mi40IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wLDE0PC90ZXh0PjxyZWN0IHg9IjMxMC42NyIgeT0iMTMxLjIiIHdpZHRoPSI0NyIgaGVpZ2h0PSIxNDIuOCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMzM0LjE3IiB5PSIyOTMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZhY2UgNDwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzM0LjE3IiB5PSIxMjUuMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MCwxNzwvdGV4dD48cmVjdCB4PSIzODkiIHk9IjE0NC44IiB3aWR0aD0iNDciIGhlaWdodD0iMTI5LjIiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjQxMi41IiB5PSIyOTMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZhY2UgNTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDEyLjUiIHk9IjEzOC44IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wLDE2PC90ZXh0PjxyZWN0IHg9IjQ2Ny4zMyIgeT0iMTI0LjQiIHdpZHRoPSI0NyIgaGVpZ2h0PSIxNDkuNiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iNDkwLjgzIiB5PSIyOTMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZhY2UgNjwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDkwLjgzIiB5PSIxMTguNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MCwxODwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyNzQiIHgyPSI2MCIgeTI9IjY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYwLDU2IDU1LjUsNjUgNjQuNSw2NSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI3NCIgeDI9IjUzOCIgeTI9IjI3NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTM4IiB4Mj0iNTM4IiB5Mj0iMTM4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgwIiB5MT0iNDgiIHgyPSIzMDgiIHkyPSI0OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzE0IiB5PSI1MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5wcm9iYWJpbGl0w6kgMS82IOKJiCAwLDE3PC90ZXh0Pjx0ZXh0IHg9IjY4IiB5PSI1MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPmZyw6lxdWVuY2U8L3RleHQ+PC9zdmc+)
*Distribution des fréquences observées sur 120 lancers, en dents de scie, comparée à la probabilité 1/6 de chaque face (ligne rouge).*
<!-- /schema -->

$120$ lancers d'un dé équilibré, réalisés en classe ou simulés :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | Total |
|---|---|---|---|---|---|---|---|
| Effectif | $18$ | $23$ | $17$ | $21$ | $19$ | $22$ | $120$ |
| Fréquence *(observée)* | $0{,}15$ | $0{,}19$ | $0{,}14$ | $0{,}18$ | $0{,}16$ | $0{,}18$ | $1$ |
| Probabilité *(modèle)* | $0{,}17$ | $0{,}17$ | $0{,}17$ | $0{,}17$ | $0{,}17$ | $0{,}17$ | $1$ |

Représentées en barres, ces deux lignes donnent deux diagrammes : la **distribution
fréquentielle**, en dents de scie, et la **distribution probabiliste**, parfaitement
plate. Elles ont la même allure d'ensemble, jamais la même hauteur exacte.

### La fluctuation, à nombre de lancers fixé

Refais **quatre séries de $50$ lancers** d'une même pièce équilibrée :

| Série | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Nombre de piles | $23$ | $27$ | $21$ | $29$ |
| Fréquence | $0{,}46$ | $0{,}54$ | $0{,}42$ | $0{,}58$ |

Même pièce, même nombre de lancers, **quatre résultats différents**. C'est la
**fluctuation d'échantillonnage** : la fréquence bouge d'une série à l'autre, autour
de la probabilité $0{,}5$.

> **Ce qu'il faut en conclure.** Un écart entre fréquence et probabilité n'est ni une
> erreur, ni une preuve que la pièce est truquée. Il faudrait un écart **important** et
> **sur un grand nombre** de lancers pour soupçonner le matériel.

> ⚠️ **La probabilité, elle, ne fluctue pas.** Elle appartient au **modèle** : elle
> vaut $0{,}5$ avant, pendant et après. Seules les fréquences observées bougent.

---

## 7. À retenir absolument

| | |
|---|---|
| Univers $\Omega$ | l'ensemble de **toutes** les issues |
| Événement | une **partie** de $\Omega$, écrite entre accolades |
| $\overline{A}$ | les issues qui **ne sont pas** dans $A$ |
| $A \cup B$ | dans $A$ **ou** dans $B$ (ou les deux) |
| $A \cap B$ | dans $A$ **et** dans $B$ |
| $\emptyset$ | événement impossible · $P(\emptyset) = 0$ |
| $P(\Omega)$ | $= 1$ |
| Équiprobabilité | $P(A) = \dfrac{\text{issues de } A}{\text{issues de } \Omega}$ |
| Contraire | $\boxed{P(\overline{A}) = 1 - P(A)}$ |
| « Au moins un » | passe par le contraire : « aucun » |
| Deux épreuves | les issues sont des **couples** ; $2$ pièces $\to 4$, $2$ dés $\to 36$ |
| Fluctuation | à nombre de lancers fixé, la fréquence change d'une série à l'autre |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $\cup$ et $\cap$.** « Ou » rassemble, « et » restreint : $A \cap B$ n'a
   jamais plus d'issues que $A \cup B$. Si tu trouves l'inverse, tu les as échangés.
2. **Additionner $P(A) + P(B)$ pour obtenir $P(A \cup B)$** quand les deux événements
   ont des issues communes : elles sont comptées deux fois. Liste et compte.
3. **Croire que « un pile sur deux pièces » a une chance sur trois.** Les issues
   équiprobables sont les couples $(P\,;F)$ et $(F\,;P)$ — deux issues, pas une. Même
   erreur que d'écrire « PF » une seule fois : elle fait perdre une issue.
4. **Diviser par le nombre de résultats affichés au lieu du nombre d'issues.** Avec
   deux dés, il y a $11$ sommes possibles mais $36$ issues : le dénominateur est $36$.
5. **Se tromper de contraire, ou de calcul.** Le contraire de « au moins un », c'est
   « aucun » — jamais « au plus un ». Et il se calcule par $1 - P(A)$, jamais $-P(A)$.
6. **Conclure qu'une pièce est truquée** parce qu'une série de $50$ lancers donne
   $0{,}58$. C'est la fluctuation normale des fréquences.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « Organisation et gestion
de données et probabilités », section QUATRIÈME, sous-section « Probabilités »,
LIGNES 936-946. Chapeau du thème lu : LIGNES 861-885.
Créé le 2026-08-12 ; premier chapitre de 4e du dépôt (contenu/quatrieme/ n'existait pas).

ARTICULATION AVEC LA 5e : la fiche 5e (contenu/cinquieme/maths/probabilites/fiche.md)
couvre expérience aléatoire, issue, événement, échelle 0-1, trois écritures,
équiprobabilité, somme = 1, fréquence vs probabilité. CITÉS EN PRÉREQUIS et non repris,
sauf la formule d'équiprobabilité (§ 3), rappelée car tout le chapitre s'appuie dessus.

Les cinq objectifs de la section sont couverts, dans l'ordre du texte :
- notations ensemblistes / définir un évènement → § 1
- définir complémentaire, réunion, intersection, ensemble vide → § 2 (les 4 termes)
- calculer la probabilité d'un évènement et de l'évènement contraire → § 3 et § 4
- expériences à deux épreuves → § 5 (les 3 exemples nommés : deux pièces, pièce et dé,
  deux dés)
- comparer distributions fréquentielle/probabiliste + fluctuation à n fixé → § 6

⚠️ PÉRIMÈTRE — VOLONTAIREMENT ÉCARTÉ, à valider :

- ARBRE DE PROBABILITÉS : le mot « arbre » n'apparaît NULLE PART dans le fichier de
  programme (recherche sur tout le texte). Pas d'arbre pondéré ni de multiplication le
  long des branches : les expériences à deux épreuves sont traitées par ÉNUMÉRATION DES
  ISSUES, suffisante dans les cas équiprobables demandés. À CONFIRMER — si l'arbre est
  attendu en 4e par ailleurs, il faudra ajouter un paragraphe.
- TABLEAU À DOUBLE ENTRÉE : expression absente du texte elle aussi. J'en utilise un au
  § 5 (somme de deux dés) comme simple support de dénombrement, pas comme objet de
  cours. À valider ou supprimer.
- FORMULE P(A ∪ B) = P(A) + P(B) − P(A ∩ B) : le texte demande de DÉFINIR réunion et
  intersection, mais de ne CALCULER que « la probabilité d'un évènement et de
  l'évènement contraire ». Non énoncée, donc : réunion et intersection sont obtenues en
  listant puis comptant les issues, et le § 3 signale l'erreur d'addition sans donner la
  correction générale. POINT DE PÉRIMÈTRE LE PLUS SENSIBLE DE LA FICHE.
- ÉVÉNEMENTS INCOMPATIBLES / INDÉPENDANCE : non nommés en 4e, non traités.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :

- LA DATE DU BO. Même réserve que les fiches de 5e (voir « parallelogrammes ») :
  l'en-tête dit « BO du 5 mars 2026 », ETAT.md dit « BO du 2 avril 2026 », aucune des
  deux ne figure dans le texte extrait. À trancher globalement.
- LES NOTATIONS Ω, ∪, ∩, ∅, A-barre : le texte dit « notations ensemblistes » sans les
  lister. Ω et la barre du complémentaire sont les plus discutables à ce niveau.
- « FLUCTUATION D'ÉCHANTILLONNAGE » (§ 6) : le programme écrit seulement « observer la
  fluctuation des fréquences ». Employé une fois ; à alléger si jugé prématuré.
- LES DONNÉES CHIFFRÉES du § 6 (120 lancers ; 4 séries de 50) sont INVENTÉES à titre
  d'illustration plausible. Fréquences arrondies au centième, somme arrondie = 1,00.
- Le programme demande de COMPARER DES GRAPHIQUES : la fiche donne les distributions en
  TABLEAU et décrit les diagrammes en barres sans les afficher (pas de support graphique
  dans le format actuel). Deux diagrammes côte à côte seraient plus fidèles.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
