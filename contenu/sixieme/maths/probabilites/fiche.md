---
id: 6e-math-probabilites
titre: "Premières probabilités"
voie: college
niveau: sixieme
parcours: maths
matiere: mathematiques
programme: "Programme de cycle 3 (2025) — applicable en 6e à la rentrée 2026"
duree_lecture_min: 10
prerequis:
  - Compter les résultats possibles d'un tirage (CM2)
  - Fractions simples (CM1-CM2-6e)
  - Écriture décimale et pourcentages simples (6e)
statut: brouillon
relu_par: null
---

# Premières probabilités

> Peux-tu deviner sur quelle face un dé va tomber ? Non — personne ne le peut. Mais tu
> peux dire combien tu as de **chances** d'obtenir un $6$, et même mettre un **nombre**
> dessus. C'est ça, une probabilité : mesurer le hasard.

---

## 1. Le vocabulaire du hasard

Trois mots reviennent tout le temps.

| Mot | Ce qu'il désigne | Exemple avec un dé |
|---|---|---|
| **Expérience aléatoire** | une expérience dont on connaît les résultats possibles, mais pas lequel va sortir | lancer un dé |
| **Issue** | un résultat possible | obtenir $4$ |
| **Événement** | ce dont on parle, décrit par une phrase ; il regroupe une ou plusieurs issues | « obtenir un nombre pair » |

> **Aléatoire** veut dire « qui dépend du hasard ». Tu connais **tous** les résultats
> possibles d'un lancer de dé ($1$, $2$, $3$, $4$, $5$, $6$), mais tu ne sais pas
> **lequel** va tomber.

> **Ne confonds pas issue et événement.** Une issue est un seul résultat : $4$. Un
> événement peut en rassembler plusieurs : « obtenir un nombre pair », c'est $2$, $4$
> **ou** $6$ — trois issues à la fois.

> **Pas de panique avec ces mots.** Tu n'as pas à les réciter par cœur : ton professeur
> les emploiera, et ce qui compte, c'est de comprendre l'idée derrière.

---

## 2. Certain, impossible, ou possible ?

Avant de calculer, on classe un événement.

- Un événement est **certain** quand il se produit à coup sûr.
  > **Exemple.** Avec un dé à six faces, « obtenir un nombre entre $1$ et $6$ » est
  > certain : ça arrive à tous les coups.

- Un événement est **impossible** quand il ne peut jamais se produire.
  > **Exemple.** « Obtenir $7$ » avec un dé à six faces est impossible : le $7$ n'existe
  > pas sur le dé.

- Un événement est **possible** quand il peut arriver… ou non.
  > **Exemple.** « Obtenir un $6$ » est possible : parfois oui, parfois non.

---

## 3. L'échelle des probabilités

<!-- schema:echelle -->
![L’échelle des probabilités va de 0 (impossible) à 1 (certain) ; 0,5 correspond à une chance sur deux.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjEwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyMTAiIGZpbGw9IiNmZmZmZmYiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdwIiB4MT0iMCIgeDI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2MwMmEyYSIgc3RvcC1vcGFjaXR5PSIwLjM1Ii8+PHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiNjMjVlMDAiIHN0b3Atb3BhY2l0eT0iMC4zIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWE3ZjRiIiBzdG9wLW9wYWNpdHk9IjAuNCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjYwIiB5PSI0OCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSJ1cmwoI2dwKSIvPjxsaW5lIHgxPSI2MCIgeTE9IjQ0IiB4Mj0iNjAiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjAiIHk9IjM2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0Pjx0ZXh0IHg9IjYwIiB5PSIxMDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmltcG9zc2libGU8L3RleHQ+PGxpbmUgeDE9IjExNCIgeTE9IjQ0IiB4Mj0iMTE0IiB5Mj0iNzYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMTQiIHkxPSI3NiIgeDI9IjExNCIgeTI9IjEyMCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTE0IiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBldSBwcm9iYWJsZTwvdGV4dD48bGluZSB4MT0iMzMwIiB5MT0iNDQiIHgyPSIzMzAiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzMwIiB5PSIzNiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MCw1PC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj51bmUgY2hhbmNlPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTE2LjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5zdXIgZGV1eDwvdGV4dD48bGluZSB4MT0iNTQ2IiB5MT0iNDQiIHgyPSI1NDYiIHkyPSI3NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU0NiIgeTE9Ijc2IiB4Mj0iNTQ2IiB5Mj0iMTIwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NDYiIHk9IjEzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dHLDqHMgcHJvYmFibGU8L3RleHQ+PGxpbmUgeDE9IjYwMCIgeTE9IjQ0IiB4Mj0iNjAwIiB5Mj0iNzYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjYwMCIgeT0iMzYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHRleHQgeD0iNjAwIiB5PSIxMDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmNlcnRhaW48L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlVuZSBwcm9iYWJpbGl0w6kgZXN0IHRvdWpvdXJzIGNvbXByaXNlIGVudHJlIDAgZXQgMS48L3RleHQ+PC9zdmc+)
*L’échelle des probabilités va de 0 (impossible) à 1 (certain) ; 0,5 correspond à une chance sur deux.*
<!-- /schema -->

Une probabilité est un **nombre compris entre $0$ et $1$**.

$$\boxed{0 \leqslant \text{probabilité} \leqslant 1}$$

- Une probabilité de $0$ : l'événement est **impossible**.
- Une probabilité de $1$ : l'événement est **certain**.
- Entre les deux : l'événement est **possible**. Plus le nombre est grand, plus il a de
  chances de se produire.

On retrouve cette échelle dans les mots de tous les jours :

| Probabilité | En langage courant | Exemple |
|---|---|---|
| $0$ | **impossible** | obtenir $7$ avec un dé à six faces |
| proche de $0$ | peu probable | tirer l'as de pique dans un jeu de $32$ cartes |
| $0{,}5$ | une chance sur deux | obtenir pile avec une pièce |
| proche de $1$ | très probable | ne **pas** tirer l'as de pique |
| $1$ | **certain** | obtenir un nombre entre $1$ et $6$ avec un dé |

> ⚠️ **Une probabilité ne dépasse jamais $1$** et n'est jamais négative. Si tu trouves
> $2$ ou $-0{,}3$, c'est une erreur de calcul, pas un événement « super probable ».

---

## 4. Compter les chances : « $a$ chances sur $b$ »

On sait calculer quand il y a **équiprobabilité** : toutes les issues ont **la même
chance** de sortir. C'est le cas d'un dé équilibré, d'une pièce non truquée, ou de
boules identiques dans un sac.

Dans ce cas, on compte :

- $a$ = le nombre d'issues qui **réalisent** l'événement ;
- $b$ = le nombre **total** d'issues possibles.

On dit alors que l'événement a **« $a$ chances sur $b$ »**.

> **Exemple.** Un dé à six faces, événement « obtenir un nombre pair ».
> Les issues qui marchent : $2$, $4$, $6$ → il y en a $3$. Total d'issues : $6$.
> L'événement a **$3$ chances sur $6$**.

> ⚠️ **« Réaliser » ne veut pas dire « gagner ».** Une issue réalise l'événement dès
> qu'elle correspond à la phrase, même si elle ne t'arrange pas.

> **Compte bien TOUTES les issues pour le total.** Dans un sac de $5$ boules rouges et
> $3$ vertes, le total n'est pas $5$ ni $3$ : c'est $5 + 3 = 8$. Quand il y a beaucoup
> d'issues, un tableau ou un arbre aide à toutes les lister sans en oublier — tu en as
> déjà construit au CM2.

---

## 5. Écrire la probabilité comme un nombre

<!-- schema:sac-boules -->
![Le sac contient 10 boules dont 3 vertes : tirer une verte a 3 chances sur 10, soit une probabilité de 0,3.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDYwIDUwIEwgNjAgMjAwIFEgNjAgMjI1IDg1IDIyNSBMIDI1NSAyMjUgUSAyODAgMjI1IDI4MCAyMDAgTCAyODAgNTAiIGZpbGw9IiNmNGY2ZjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiLz48Y2lyY2xlIGN4PSI5NSIgY3k9IjE5NSIgcj0iMTkiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjE0MCIgY3k9IjE5NSIgcj0iMTkiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC45NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjE4NSIgY3k9IjE5NSIgcj0iMTkiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjIzMCIgY3k9IjE5NSIgcj0iMTkiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC45NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjExNyIgY3k9IjE1NSIgcj0iMTkiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjE2MiIgY3k9IjE1NSIgcj0iMTkiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjIwNyIgY3k9IjE1NSIgcj0iMTkiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjI1MiIgY3k9IjE2MCIgcj0iMTkiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjE0MCIgY3k9IjExNSIgcj0iMTkiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC45NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjE4NSIgY3k9IjExNSIgcj0iMTkiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjMyMCIgeT0iNzAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+NSByb3VnZXMgKyAzIHZlcnRlcyArIDIgYmxldWVzPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+PSAxMCBib3VsZXMgZW4gdG91dDwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjEzNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj50aXJlciB1bmUgdmVydGUgOjwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjE1OCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0Ij4zIGNoYW5jZXMgc3VyIDEwPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMTkyIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPlAgPSAzLzEwID0gMCwzID0gMzAgJTwvdGV4dD48L3N2Zz4=)
*Le sac contient 10 boules dont 3 vertes : tirer une verte a 3 chances sur 10, soit une probabilité de 0,3.*
<!-- /schema -->

C'est le grand pas de la 6e : **« $a$ chances sur $b$ » s'écrit comme le nombre $a$ sur
$b$**, c'est-à-dire la fraction $\dfrac{a}{b}$.

$$\boxed{a \text{ chances sur } b \;\longrightarrow\; \dfrac{a}{b}}$$

Et comme toute fraction, ce nombre s'écrit de **trois façons** équivalentes.

| Écriture | « $3$ chances sur $6$ » |
|---|---|
| **Fraction** | $\dfrac{3}{6} = \dfrac{1}{2}$ |
| **Décimale** | $0{,}5$ |
| **Pourcentage** | $50\ \%$ |

> **Exemple.** Obtenir un $6$ avec un dé : $1$ chance sur $6$.
> $$\dfrac{1}{6} \approx 0{,}17 \approx 17\ \%$$
> La **fraction** $\dfrac{1}{6}$ est **exacte** ; $0{,}17$ est arrondi. Quand la division
> ne tombe pas juste, garde la fraction.

> **Exemple.** Un sac contient $5$ boules rouges, $3$ vertes et $2$ bleues, toutes
> pareilles au toucher. Probabilité de tirer une verte ?
> Total : $5 + 3 + 2 = 10$ boules. Vertes : $3$.
> $$\dfrac{3}{10} = 0{,}3 = 30\ \%$$

---

## 6. La probabilité et l'expérience répétée

Une probabilité se **calcule à l'avance**, par le raisonnement. La **fréquence**, elle,
se **constate après coup**, en répétant l'expérience et en comptant.

> **Exemple.** La probabilité d'obtenir un $6$ est $\dfrac{1}{6} \approx 0{,}17$.
> On lance vraiment le dé $60$ fois et on note ce qui sort :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | Total |
|---|---|---|---|---|---|---|---|
| Nombre de fois | $9$ | $11$ | $8$ | $12$ | $7$ | $13$ | $60$ |
| Fréquence | $0{,}15$ | $0{,}18$ | $0{,}13$ | $0{,}20$ | $0{,}12$ | $0{,}22$ | $1$ |

La fréquence du $6$ ici est $0{,}22$, alors que la probabilité calculée est $0{,}17$.
Elles ne sont pas égales, et c'est **normal**.

> **Ce qu'il faut retenir.** Plus tu répètes l'expérience, plus les fréquences observées
> se **rapprochent** de la probabilité calculée. Sur $10$ lancers, l'écart peut être
> énorme. Sur $10\,000$, il devient tout petit.

---

## 7. Les pièges à connaître

> ⚠️ **L'équiprobabilité n'est pas toujours vraie.** Avec un dé truqué, ou des boules de
> tailles différentes, les issues n'ont pas la même chance : on ne peut plus simplement
> écrire « $a$ chances sur $b$ ».

> ⚠️ **Le dé n'a pas de mémoire.** Même après cinq $6$ d'affilée, la chance d'obtenir un
> $6$ au coup suivant reste $\dfrac{1}{6}$. Le dé « ne se souvient pas » du coup
> précédent.

> ⚠️ **Ne prends pas le total pour un sous-total.** Dans le sac de $10$ boules, la
> probabilité d'une verte est $\dfrac{3}{10}$, pas $\dfrac{3}{7}$ : il faut compter
> **toutes** les boules, pas seulement les autres couleurs.

---

## 8. À retenir absolument

| | |
|---|---|
| Expérience aléatoire | on connaît les résultats possibles, pas lequel sortira |
| Issue | un résultat possible |
| Événement | regroupe une ou plusieurs issues |
| Encadrement | $0 \leqslant$ probabilité $\leqslant 1$ |
| Probabilité $0$ | impossible · probabilité $1$ : certain |
| Équiprobabilité | toutes les issues ont la même chance |
| Compter | $a$ chances sur $b$ : $a$ = issues qui réalisent, $b$ = total |
| Écrire en nombre | $a$ chances sur $b \;=\; \dfrac{a}{b}$ |
| Trois écritures | fraction, décimale, pourcentage |
| Fréquence ≠ probabilité | l'une se constate, l'autre se calcule |

---

## 9. Les erreurs qui coûtent des points

1. **Annoncer une probabilité plus grande que $1$** (ou négative) : c'est impossible, une
   probabilité vit toujours entre $0$ et $1$.
2. **Oublier des issues dans le total** : dans un sac, on additionne **toutes** les
   boules pour trouver $b$.
3. **Confondre issue et événement** : « obtenir un pair » n'est pas une issue, c'en est
   trois ($2$, $4$, $6$).
4. **Croire qu'un $6$ est « dû »** après une série sans $6$ : le dé n'a pas de mémoire.
5. **Appliquer « $a$ chances sur $b$ » quand ce n'est pas équiprobable** : un dé truqué
   casse le calcul.
6. **Arrondir trop tôt** : garde la fraction quand la division ne tombe pas juste
   ($\dfrac{1}{6}$ est exact, $0{,}17$ ne l'est pas).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source EXACTE : docs/programme-college-cycle3-maths-2025.txt, thème « Organisation et
gestion de données et probabilités », niveau Sixième, entrée « Les probabilités »,
lignes 1399 à 1421.

Objectifs d'apprentissage 6e (lignes 1419-1421) — couverture :
- « Savoir que la probabilité d'un évènement est un nombre compris entre 0 et 1 » → § 3
  (échelle des probabilités, encadrement encadré).
- « Calculer des probabilités dans des situations simples d'équiprobabilité » → § 4
  (compter a chances sur b) et § 5 (écriture en nombre a/b). Exemples : dé, sac de
  boules — tous en équiprobabilité simple.
- « Comparer des résultats d'une expérience aléatoire répétée à une probabilité
  calculée » → § 6 (tableau de 60 lancers, comparaison fréquence observée / probabilité
  calculée = approche fréquentiste des lignes 1413-1414).

Passage central de la 6e (lignes 1409-1412) : « passer de la traduction d'une
probabilité en termes de chances (a chances sur b) à son expression par le nombre égal
au quotient a/b, qui peut s'exprimer comme une fraction, un nombre décimal ou un
pourcentage » → § 4 puis § 5, avec les trois écritures. C'est le fil directeur choisi
pour la fiche.

Vocabulaire (lignes 1415-1416) : le texte précise qu'il « n'est PAS attendu que l'élève
utilise le vocabulaire spécifique (expérience, issue, univers, évènement) de manière
autonome, mais le professeur peut l'employer ». D'où § 1 qui introduit expérience /
issue / évènement AVEC une note explicite disant à l'élève qu'il n'a pas à les réciter.
« Univers » n'est volontairement PAS introduit (jugé trop abstrait pour la 6e et non
exigible). À valider par le relecteur.

QUESTION POSÉE PAR LA CONSIGNE — l'expérience à deux étapes (tableau/arbre) figure-t-elle
dans le texte de 6e ? RÉPONSE : oui, mais UNIQUEMENT dans le paragraphe de continuité
comme ACQUIS DU CM2 (lignes 1404-1408 : « Au CM2… les élèves ont appris à utiliser des
tableaux à double entrée ou des arbres… pour une expérience constituée de deux épreuves
indépendantes »). Elle NE figure PAS dans les « Connaissances et capacités attendues »
de la 6e (lignes 1417-1421). Elle n'est donc PAS traitée comme un objectif 6e : seule
une mention légère en § 4 rappelle le tableau/arbre comme outil de dénombrement déjà vu
au CM2. À CONFIRMER par le relecteur : faut-il en dire plus, ou est-ce hors périmètre 6e ?

PÉRIMÈTRE / CONTINUITÉ AVEC LA 5e (contenu/cinquieme/maths/probabilites/fiche.md) :
tension à trancher. La consigne du chapitre évoquait « ne pas déborder sur le cycle 4,
le calcul formel cas favorables/cas possibles se structurant en 5e ». Or le texte
officiel de 6e demande EXPLICITEMENT de « calculer des probabilités dans des situations
simples d'équiprobabilité » et d'exprimer a/b. Le calcul EST donc au programme de 6e.
Choix retenu pour préparer la continuité sans empiéter :
  • 6e (cette fiche) : langage « a chances sur b » → nombre a/b, échelle du langage
    courant, situations simples, approche fréquentiste qualitative.
  • réservé à la 5e (déjà rédigé) : la NOTATION formelle P(évènement), la formule encadrée
    P = favorables/total, le contrôle « somme des probabilités = 1 », l'« erreur du
    joueur » nommée. Ces éléments sont volontairement ABSENTS ici pour ne pas doublonner.
À VALIDER par le relecteur : ce partage 6e/5e est-il le bon, ou faut-il alléger encore
la 6e (par ex. retirer le § 6 fréquentiste s'il est jugé trop proche de la 5e) ?

Rédaction 100 % originale à partir du seul texte du BO. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
