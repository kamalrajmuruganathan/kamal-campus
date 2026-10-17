---
id: 5e-math-probabilites
titre: "Probabilités"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Fractions et écritures décimales (5e)
  - Statistiques — effectifs et fréquences (5e)
statut: brouillon
relu_par: null
---

# Probabilités

> On ne peut pas prédire le résultat d'un lancer de dé. Mais on peut dire **quelle
> chance** on a d'obtenir un $6$ — et ce nombre, on sait le calculer exactement. C'est
> tout l'objet de ce chapitre : mettre un nombre sur le hasard.

---

## 1. Le vocabulaire

| Mot | Ce qu'il désigne | Exemple avec un dé |
|---|---|---|
| **Expérience aléatoire** | une expérience dont on ne peut pas prévoir le résultat | lancer un dé |
| **Issue** | un résultat possible | obtenir $4$ |
| **Événement** | ce dont on veut calculer la chance ; il regroupe une ou plusieurs issues | « obtenir un nombre pair » |

> **Aléatoire** vient du latin *alea*, « le dé ». Une expérience est aléatoire quand on
> connaît **tous les résultats possibles** sans savoir **lequel** sortira.

> **La différence entre issue et événement.** Une issue est un résultat unique : $4$.
> Un événement peut en regrouper plusieurs : « obtenir un nombre pair » rassemble les
> issues $2$, $4$ et $6$.

---

## 2. L'échelle des probabilités

<!-- schema:echelle -->
![L’échelle des probabilités va de 0 (impossible) à 1 (certain) ; 0,5 correspond à un événement aussi probable que son contraire.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjEwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyMTAiIGZpbGw9IiNmZmZmZmYiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdwIiB4MT0iMCIgeDI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2MwMmEyYSIgc3RvcC1vcGFjaXR5PSIwLjM1Ii8+PHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiNjMjVlMDAiIHN0b3Atb3BhY2l0eT0iMC4zIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWE3ZjRiIiBzdG9wLW9wYWNpdHk9IjAuNCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjYwIiB5PSI0OCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSJ1cmwoI2dwKSIvPjxsaW5lIHgxPSI2MCIgeTE9IjQ0IiB4Mj0iNjAiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjAiIHk9IjM2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0Pjx0ZXh0IHg9IjYwIiB5PSIxMDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmltcG9zc2libGU8L3RleHQ+PGxpbmUgeDE9IjExNCIgeTE9IjQ0IiB4Mj0iMTE0IiB5Mj0iNzYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMTQiIHkxPSI3NiIgeDI9IjExNCIgeTI9IjEyMCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTE0IiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBldSBwcm9iYWJsZTwvdGV4dD48bGluZSB4MT0iMzMwIiB5MT0iNDQiIHgyPSIzMzAiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzMwIiB5PSIzNiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MCw1PC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5hdXNzaSBwcm9iYWJsZTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjExNi4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+cXVlIHNvbiBjb250cmFpcmU8L3RleHQ+PGxpbmUgeDE9IjU0NiIgeTE9IjQ0IiB4Mj0iNTQ2IiB5Mj0iNzYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NDYiIHkxPSI3NiIgeDI9IjU0NiIgeTI9IjEyMCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTQ2IiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRyw6hzIHByb2JhYmxlPC90ZXh0PjxsaW5lIHgxPSI2MDAiIHkxPSI0NCIgeDI9IjYwMCIgeTI9Ijc2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MDAiIHk9IjM2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMTAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5jZXJ0YWluPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTkyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VbmUgcHJvYmFiaWxpdMOpIGVzdCB0b3Vqb3VycyBjb21wcmlzZSBlbnRyZSAwIGV0IDEuPC90ZXh0Pjwvc3ZnPg==)
*L’échelle des probabilités va de 0 (impossible) à 1 (certain) ; 0,5 correspond à un événement aussi probable que son contraire.*
<!-- /schema -->

Une probabilité est un nombre **compris entre $0$ et $1$**.

$$\boxed{0 \leqslant P(\text{événement}) \leqslant 1}$$

| Probabilité | L'événement est… | Exemple |
|---|---|---|
| $0$ | **impossible** | obtenir $7$ avec un dé à six faces |
| proche de $0$ | peu probable | obtenir $10$ fois de suite un $1$ |
| $0{,}5$ | aussi probable que son contraire | obtenir pile avec une pièce équilibrée |
| proche de $1$ | très probable | ne pas gagner au loto |
| $1$ | **certain** | obtenir un nombre entre $1$ et $6$ avec un dé |

> ⚠️ **Une probabilité ne dépasse jamais $1$** et n'est jamais négative. Trouver $1{,}5$
> ou $-0{,}2$ signale une erreur de calcul, pas un événement très probable.

---

## 3. Les trois écritures

Comme les fréquences, une probabilité s'écrit de trois façons équivalentes.

| Écriture | Obtenir un $6$ avec un dé |
|---|---|
| **Fraction** | $\dfrac{1}{6}$ |
| **Décimale** | environ $0{,}17$ |
| **Pourcentage** | environ $17\ \%$ |

> **La fraction est souvent la plus juste** : $\dfrac{1}{6}$ est exact, alors que
> $0{,}17$ est arrondi. Quand le résultat ne tombe pas juste, garde la fraction.

> **L'expression courante** « une chance sur quatre » signifie exactement
> $\dfrac{1}{4} = 0{,}25 = 25\ \%$.

---

## 4. Calculer une probabilité : l'équiprobabilité

Il y a **équiprobabilité** quand toutes les issues ont **la même chance** de se
produire — un dé équilibré, une pièce non truquée, des boules identiques dans une urne.

Dans ce cas :

$$\boxed{P(\text{événement}) = \frac{\text{nombre d'issues favorables}}{\text{nombre total d'issues}}}$$

> **« Favorable » ne veut pas dire « souhaitable »** : c'est simplement une issue qui
> **réalise** l'événement.

> **Exemple 1.** Un dé à six faces. Probabilité d'obtenir un nombre pair ?
> Issues favorables : $2$, $4$, $6$ → il y en a $3$. Issues au total : $6$.
> $P = \dfrac{3}{6} = \dfrac{1}{2}$.

> **Exemple 2.** Une urne contient $5$ boules rouges, $3$ vertes et $2$ bleues.
> Probabilité de tirer une verte ?
> Total : $5 + 3 + 2 = 10$ boules. Favorables : $3$.
> $P = \dfrac{3}{10} = 0{,}3 = 30\ \%$.

> ⚠️ **Compter le total, pas seulement ce qui est écrit.** Beaucoup répondent
> $\dfrac{3}{5}$ en prenant $5$ au lieu de $10$ : il faut **additionner toutes les
> boules**.

> ⚠️ **L'équiprobabilité n'est pas toujours vraie.** Avec un dé truqué ou une urne où
> les boules ont des tailles différentes, la formule ne s'applique pas.

---

## 5. Le contrôle qui évite les erreurs

$$\boxed{\text{La somme des probabilités de toutes les issues vaut } 1.}$$

> **Exemple.** Avec l'urne précédente :
> $P(\text{rouge}) + P(\text{verte}) + P(\text{bleue}) = \dfrac{5}{10} + \dfrac{3}{10} + \dfrac{2}{10} = \dfrac{10}{10} = 1$ ✓

> **À quoi ça sert.** Si tu connais toutes les probabilités sauf une, tu la trouves par
> soustraction. Et si la somme ne fait pas $1$, il y a une erreur.

---

## 6. Répéter l'expérience : fréquence et probabilité

<!-- schema:frequences-60 -->
![Sur 60 lancers, les fréquences observées s’écartent un peu de la probabilité théorique 1/6 ≈ 0,17 (ligne rouge) : c’est normal.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIzMDAiIHk9IjI0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5GcsOpcXVlbmNlcyBvYnNlcnbDqWVzIHN1ciA2MCBsYW5jZXJzPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjI3NCIgeDI9IjUzMCIgeTI9IjI3NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIyNzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMjMzLjIiIHgyPSI1MzAiIHkyPSIyMzMuMiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIyMzcuMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwwNTwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxOTIuNCIgeDI9IjUzMCIgeTI9IjE5Mi40IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjE5Ni40IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDE8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTUxLjYiIHgyPSI1MzAiIHkyPSIxNTEuNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxNTUuNiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwxNTwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxMTAuOCIgeDI9IjUzMCIgeTI9IjExMC44IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjExNC44IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDI8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iNzAiIHgyPSI1MzAiIHkyPSI3MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSI3NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwyNTwvdGV4dD48cmVjdCB4PSI3NS42NyIgeT0iMTY1LjIiIHdpZHRoPSI0NyIgaGVpZ2h0PSIxMDguOCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iOTkuMTciIHk9IjI5MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmFjZSAxPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI5OS4xNyIgeT0iMTU5LjIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjAsMTM8L3RleHQ+PHJlY3QgeD0iMTU0IiB5PSIxMTAuOCIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjE2My4yIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIxNzcuNSIgeT0iMjkzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mYWNlIDI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjE3Ny41IiB5PSIxMDQuOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MCwyMDwvdGV4dD48cmVjdCB4PSIyMzIuMzMiIHk9IjE1MS42IiB3aWR0aD0iNDciIGhlaWdodD0iMTIyLjQiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjI1NS44MyIgeT0iMjkzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mYWNlIDM8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjI1NS44MyIgeT0iMTQ1LjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjAsMTU8L3RleHQ+PHJlY3QgeD0iMzEwLjY3IiB5PSIxMjQuNCIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjE0OS42IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIzMzQuMTciIHk9IjI5MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmFjZSA0PC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzMzQuMTciIHk9IjExOC40IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wLDE4PC90ZXh0PjxyZWN0IHg9IjM4OSIgeT0iMTc4LjgiIHdpZHRoPSI0NyIgaGVpZ2h0PSI5NS4yIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSI0MTIuNSIgeT0iMjkzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mYWNlIDU8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQxMi41IiB5PSIxNzIuOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MCwxMjwvdGV4dD48cmVjdCB4PSI0NjcuMzMiIHk9Ijk3LjIiIHdpZHRoPSI0NyIgaGVpZ2h0PSIxNzYuOCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iNDkwLjgzIiB5PSIyOTMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZhY2UgNjwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDkwLjgzIiB5PSI5MS4yIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wLDIyPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjI3NCIgeDI9IjYwIiB5Mj0iNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjAsNTYgNTUuNSw2NSA2NC41LDY1IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjYwIiB5MT0iMjc0IiB4Mj0iNTM4IiB5Mj0iMjc0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIxMzgiIHgyPSI1MzgiIHkyPSIxMzgiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODAiIHkxPSI0OCIgeDI9IjMwOCIgeTI9IjQ4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMTQiIHk9IjUzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPnByb2JhYmlsaXTDqSAxLzYg4omIIDAsMTc8L3RleHQ+PHRleHQgeD0iNjgiIHk9IjUyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+ZnLDqXF1ZW5jZTwvdGV4dD48L3N2Zz4=)
*Sur 60 lancers, les fréquences observées s’écartent un peu de la probabilité théorique 1/6 ≈ 0,17 (ligne rouge) : c’est normal.*
<!-- /schema -->

Lance un dé $20$ fois : tu n'obtiendras sans doute pas exactement $3$ ou $4$ fois le
$6$, alors que sa probabilité est $\dfrac{1}{6}$.

> **Exemple.** $60$ lancers d'un dé, résultats enregistrés :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | Total |
|---|---|---|---|---|---|---|---|
| Effectif | $8$ | $12$ | $9$ | $11$ | $7$ | $13$ | $60$ |
| Fréquence | $0{,}13$ | $0{,}20$ | $0{,}15$ | $0{,}18$ | $0{,}12$ | $0{,}22$ | $1$ |

La probabilité théorique de chaque face est $\dfrac{1}{6} \approx 0{,}17$. Les fréquences
observées s'en écartent — c'est normal.

> **Ce qu'il faut retenir** : plus on répète l'expérience, plus les fréquences observées
> se **rapprochent** des probabilités théoriques. Sur $10$ lancers, l'écart peut être
> énorme. Sur $10\,000$, il devient minime.

> ⚠️ **Ne pas confondre les deux.**
> La **probabilité** se calcule *avant*, par le raisonnement : $\dfrac{1}{6}$.
> La **fréquence** se constate *après*, en comptant : $0{,}22$ pour le $6$ ici.
> Elles se rapprochent, elles ne sont pas égales.

> ⚠️ **L'erreur du joueur.** Après cinq « pile » d'affilée, la probabilité d'obtenir
> « face » au lancer suivant est **toujours $\dfrac{1}{2}$**. La pièce n'a pas de
> mémoire.

---

## 7. À retenir absolument

| | |
|---|---|
| Expérience aléatoire | on connaît les résultats possibles, pas lequel sortira |
| Issue | un résultat possible |
| Événement | regroupe une ou plusieurs issues |
| Encadrement | $0 \leqslant P \leqslant 1$ |
| $P = 0$ | impossible · $P = 1$ : certain |
| Équiprobabilité | $P = \dfrac{\text{issues favorables}}{\text{issues au total}}$ |
| Contrôle | la somme des probabilités de toutes les issues vaut $1$ |
| Trois écritures | fraction, décimale, pourcentage |
| Fréquence ≠ probabilité | l'une se constate, l'autre se calcule |
| Répétition | plus on répète, plus la fréquence approche la probabilité |

---

## 8. Les erreurs qui coûtent des points

1. **Annoncer une probabilité supérieure à $1$** ou négative : c'est impossible.
2. **Oublier des issues dans le total** : dans une urne, il faut additionner **toutes**
   les boules.
3. **Confondre issue et événement** : « obtenir un pair » n'est pas une issue, c'en est
   trois.
4. **Confondre fréquence et probabilité** : la fréquence se constate après coup, la
   probabilité se calcule avant.
5. **Croire qu'un résultat est « dû »** après une série : la pièce n'a pas de mémoire.
6. **Appliquer la formule sans équiprobabilité** : avec un dé truqué, elle ne vaut rien.
7. **Oublier de vérifier que la somme des probabilités fait $1$.**
8. **Arrondir trop tôt** : garde la fraction quand la division ne tombe pas juste.
