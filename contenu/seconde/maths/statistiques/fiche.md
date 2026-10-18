---
id: 2nde-math-statistiques
titre: "Statistiques"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 16
prerequis:
  - Moyenne et médiane (cycle 4)
  - Pourcentages (cycle 4)
statut: brouillon
relu_par: null
---

# Statistiques

> Résumer une série de données par quelques nombres. Le point délicat n'est pas le calcul,
> c'est le **choix de l'indicateur** : moyenne ou médiane ne racontent pas la même histoire.

---

## 1. Vocabulaire

| Terme | Sens |
|---|---|
| **Population** | l'ensemble étudié |
| **Individu** | un élément de la population |
| **Caractère** | ce qu'on observe |
| **Effectif** $n_i$ | nombre d'individus pour une valeur |
| **Fréquence** $f_i$ | $\dfrac{n_i}{N}$, avec $N$ l'effectif total |

Les fréquences vérifient toujours $\sum f_i = 1$.

Un caractère est **quantitatif** (mesurable : taille, note) ou **qualitatif**
(catégorie : couleur, sport).

---

## 2. Indicateurs de position

### Moyenne

$$\boxed{\bar{x} = \frac{n_1x_1 + n_2x_2 + \cdots + n_px_p}{N}}$$

C'est le « point d'équilibre » de la série. Elle utilise **toutes** les valeurs, ce qui la rend
**sensible aux valeurs extrêmes**.

### Médiane

La **médiane** $\mathrm{Me}$ partage la série **ordonnée** en deux groupes de même effectif :
au moins la moitié des valeurs lui sont inférieures ou égales, au moins la moitié supérieures
ou égales.

**Méthode** :
1. **Ordonner** les valeurs — étape indispensable
2. Si $N$ est impair : la valeur de rang $\dfrac{N+1}{2}$
3. Si $N$ est pair : la moyenne des deux valeurs centrales

> **Exemple.** $3,\ 5,\ 8,\ 9,\ 40$ → médiane $8$, moyenne $13$.
> La valeur $40$ tire la moyenne vers le haut sans déplacer la médiane.

> **Le choix de l'indicateur.** Pour des salaires ou des prix de logements, la **médiane** est
> plus représentative : quelques valeurs très élevées faussent la moyenne.

### Ajouter ou supprimer une valeur

- La **moyenne** change dès qu'on ajoute ou supprime une valeur différente d'elle : on recalcule
  la somme. Une série de $5$ valeurs de moyenne $8$ a pour somme $40$ ; si on ajoute $20$, la
  nouvelle moyenne est $\dfrac{60}{6} = 10$.
- La **médiane** bouge peu : elle dépend des rangs, pas de la taille des valeurs extrêmes.

> **Exemple.** Dans la série $3,\ 5,\ 8,\ 9,\ 40$, on supprime $40$ : la moyenne passe de $13$ à
> $\dfrac{25}{4} = 6{,}25$, la médiane de $8$ à $\dfrac{5 + 8}{2} = 6{,}5$.

---

## 3. Indicateurs de dispersion

### Étendue

$$\text{étendue} = \text{valeur max} - \text{valeur min}$$

Simple, mais entièrement déterminée par deux valeurs — donc peu robuste.

### Quartiles

- $\mathrm{Q}_1$ : au moins $25\,\%$ des valeurs lui sont inférieures ou égales
- $\mathrm{Q}_3$ : au moins $75\,\%$ des valeurs lui sont inférieures ou égales

**Méthode de calcul** : on calcule $\dfrac{N}{4}$ (respectivement $\dfrac{3N}{4}$).
Si le résultat est entier, on prend la valeur de ce rang ; sinon on **arrondit au rang
supérieur**.

### Écart interquartile

<!-- schema:boite-moustaches -->
![Série de 12 valeurs résumée par ses indicateurs : Q₁ = 7 (rang 3), médiane 10,5, Q₃ = 12 (rang 9). La boîte, de Q₁ à Q₃, contient la moitié centrale des valeurs.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjkyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyOTIiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIyNTUiIHgyPSI1NzEiIHkyPSIyNTUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTgwLDI1NSA1NzEsMjUwLjUgNTcxLDI1OS41IiBmaWxsPSIjNWI2YjdhIi8+PGxpbmUgeDE9IjQwIiB5MT0iMjUxIiB4Mj0iNDAiIHkyPSIyNTkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjA8L3RleHQ+PGxpbmUgeDE9IjkyIiB5MT0iMjUxIiB4Mj0iOTIiIHkyPSIyNTkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjkyIiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PGxpbmUgeDE9IjE0NCIgeTE9IjI1MSIgeDI9IjE0NCIgeTI9IjI1OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTQ0IiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9IjI1MSIgeDI9IjE5NiIgeTI9IjI1OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTk2IiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjY8L3RleHQ+PGxpbmUgeDE9IjI0OCIgeTE9IjI1MSIgeDI9IjI0OCIgeTI9IjI1OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjQ4IiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PGxpbmUgeDE9IjMwMCIgeTE9IjI1MSIgeDI9IjMwMCIgeTI9IjI1OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAwIiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEwPC90ZXh0PjxsaW5lIHgxPSIzNTIiIHkxPSIyNTEiIHgyPSIzNTIiIHkyPSIyNTkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM1MiIgeT0iMjc5IiBmb250LXNpemU9IjE2IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMjwvdGV4dD48bGluZSB4MT0iNDA0IiB5MT0iMjUxIiB4Mj0iNDA0IiB5Mj0iMjU5IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDQiIHk9IjI3OSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTQ8L3RleHQ+PGxpbmUgeDE9IjQ1NiIgeTE9IjI1MSIgeDI9IjQ1NiIgeTI9IjI1OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDU2IiB5PSIyNzkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE2PC90ZXh0PjxsaW5lIHgxPSI1MDgiIHkxPSIyNTEiIHgyPSI1MDgiIHkyPSIyNTkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwOCIgeT0iMjc5IiBmb250LXNpemU9IjE2IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xODwvdGV4dD48bGluZSB4MT0iNTYwIiB5MT0iMjUxIiB4Mj0iNTYwIiB5Mj0iMjU5IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NjAiIHk9IjI3OSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjA8L3RleHQ+PGNpcmNsZSBjeD0iMTQ0IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjE5NiIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSI2NiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMjQ4IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjI3NCIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSI2NiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMzI2IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjM1MiIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIzNTIiIGN5PSI1MiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iNDA0IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjQ1NiIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MzQiIGN5PSI2NiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE0NCIgeTE9IjE1MCIgeDI9IjIyMiIgeTI9IjE1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTIiIHkxPSIxNTAiIHgyPSI1MzQiIHkyPSIxNTAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTQ0IiB5MT0iMTM4IiB4Mj0iMTQ0IiB5Mj0iMTYyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUzNCIgeTE9IjEzOCIgeDI9IjUzNCIgeTI9IjE2MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjIyMiIgeT0iMTI0IiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjUyIiByeD0iMCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjE1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIzMTMiIHkxPSIxMjQiIHgyPSIzMTMiIHkyPSIxNzYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNDQiIHk9IjExNCIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+bWluID0gNDwvdGV4dD48dGV4dCB4PSIyMjIiIHk9IjE5OCIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UeKCgSA9IDc8L3RleHQ+PHRleHQgeD0iMzEzIiB5PSIxMTQiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPk1lID0gMTAsNTwvdGV4dD48dGV4dCB4PSIzNTIiIHk9IjE5OCIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UeKCgyA9IDEyPC90ZXh0Pjx0ZXh0IHg9IjUzNCIgeT0iMTE0IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5tYXggPSAxOTwvdGV4dD48bGluZSB4MT0iMjIyIiB5MT0iMjEwIiB4Mj0iMzUyIiB5Mj0iMjEwIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjg3IiB5PSIyMzQiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPsOpY2FydCBpbnRlcnF1YXJ0aWxlIDogMTIg4oiSIDcgPSA1PC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSIyMiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5Tw6lyaWUgZGUgMTIgdmFsZXVycyA6IDQgNiA3IDggOSAxMCAxMSAxMiAxMiAxNCAxNiAxOTwvdGV4dD48L3N2Zz4=)
*Série de 12 valeurs résumée par ses indicateurs : Q₁ = 7 (rang 3), médiane 10,5, Q₃ = 12 (rang 9). La boîte, de Q₁ à Q₃, contient la moitié centrale des valeurs.*
<!-- /schema -->

$$\mathrm{Q}_3 - \mathrm{Q}_1$$

Il contient les $50\,\%$ centraux de la série et **ignore les valeurs extrêmes** — c'est sa force.

### Écart type

L'**écart type**, noté $\sigma$, mesure la dispersion des valeurs **autour de la moyenne** $\bar x$.
Pour une série de valeurs $x_i$ d'effectifs $n_i$ (effectif total $N$), on calcule d'abord la
moyenne $V$ des carrés des écarts à la moyenne, puis on prend sa racine carrée :

$$\begin{aligned} V &= \dfrac{n_1(x_1 - \bar x)^2 + \dots + n_p(x_p - \bar x)^2}{N} \\ \sigma &= \sqrt{V} \end{aligned}$$

En pratique, on l'obtient avec la **calculatrice** ou un **tableur** ; il faut surtout savoir
l'**interpréter** : plus $\sigma$ est grand, plus les valeurs sont dispersées autour de la moyenne.
Il s'exprime dans la même unité que les valeurs.

> **Exemple.** Les séries $6,\ 8,\ 10,\ 12,\ 14$ et $9,\ 10,\ 10,\ 10,\ 11$ ont la même moyenne $10$.
> Pour la première, les carrés des écarts à la moyenne sont $16,\ 4,\ 0,\ 4,\ 16$, de moyenne
> $\dfrac{40}{5} = 8$, d'où $\sigma = \sqrt{8} \approx 2{,}83$.
> Pour la seconde : $1,\ 0,\ 0,\ 0,\ 1$, de moyenne $\dfrac{2}{5} = 0{,}4$, d'où $\sigma = \sqrt{0{,}4} \approx 0{,}63$.
> Même moyenne, mais la seconde série est beaucoup plus **resserrée**.

Pour comparer deux séries, on utilise un **couple d'indicateurs** : (moyenne ; écart type) ou
(médiane ; écart interquartile). Comme la moyenne, l'écart type est sensible aux valeurs extrêmes.

---

## 4. Linéarité de la moyenne

Si toutes les valeurs subissent la même transformation affine $y_i = ax_i + b$ :

$$\bar{y} = a\,\bar{x} + b$$

> **Exemple.** Toutes les notes augmentées de $2$ points : la moyenne augmente de $2$.
> Toutes multipliées par $1{,}1$ : la moyenne aussi.

---

## 5. Séries regroupées en classes

Quand le caractère est **continu** (taille, durée, distance…), on regroupe les valeurs en
**classes** de même amplitude, notées $[a\,;\,b[$ : l'**amplitude** est $b - a$ et le **centre**
est $\dfrac{a + b}{2}$.

**Exemple suivi dans cette partie** : durée du trajet domicile-lycée de $40$ élèves.

| Durée (min) | $[0\,;\,10[$ | $[10\,;\,20[$ | $[20\,;\,30[$ | $[30\,;\,40[$ |
|---|---|---|---|---|
| Effectif | $12$ | $18$ | $7$ | $3$ |
| Effectif cumulé croissant | $12$ | $30$ | $37$ | $40$ |

### Représentations graphiques

- **Histogramme** : chaque classe est représentée par un rectangle. Comme les classes ont la
  **même amplitude**, la hauteur de chaque rectangle est proportionnelle à l'effectif de la classe.
- **Polygone des fréquences cumulées croissantes** : on place les points ayant pour abscisse la
  borne supérieure de chaque classe et pour ordonnée la fréquence cumulée croissante, puis on les
  relie par des segments (en partant de la borne inférieure de la première classe, à la fréquence $0$).

### Moyenne

On connaît rarement chaque valeur : on calcule une **moyenne pondérée** des moyennes des classes.

- Si l'on connaît la moyenne $m_i$ de chaque classe d'effectif $n_i$ : $\bar x = \dfrac{n_1m_1 + \dots + n_pm_p}{N}$
  (valeur exacte).
- Si l'on suppose la **répartition uniforme** dans chaque classe, la moyenne de chaque classe est
  son **centre** $c_i$ : $\bar x \approx \dfrac{n_1c_1 + \dots + n_pc_p}{N}$ (estimation).

> **Exemple.** Centres $5$, $15$, $25$, $35$ :
> $\bar x \approx \dfrac{5 \times 12 + 15 \times 18 + 25 \times 7 + 35 \times 3}{40} = \dfrac{610}{40} = 15{,}25$ min.

### Classe médiane et estimation de la médiane

- La **classe médiane** est la première classe dont l'effectif cumulé croissant atteint $\dfrac{N}{2}$.
- Si l'on suppose la répartition **uniforme** dans la classe médiane $[a\,;\,b[$, on estime la médiane
  par proportionnalité :

$$\mathrm{Me} \approx a + \dfrac{\dfrac{N}{2} - (\text{effectif cumulé avant la classe})}{\text{effectif de la classe}} \times (b - a)$$

> **Exemple.** $\dfrac{N}{2} = 20$ : l'effectif cumulé passe de $12$ à $30$ dans $[10\,;\,20[$, c'est la
> classe médiane. $\mathrm{Me} \approx 10 + \dfrac{20 - 12}{18} \times 10 \approx 14{,}44$ min.
> C'est aussi l'abscisse du point d'ordonnée $0{,}5$ du polygone des fréquences cumulées croissantes.

---

## 6. Croisement de deux caractères

Un **tableau croisé** (ou à double entrée) présente deux caractères simultanément.

> **Attention aux trois pourcentages différents** qu'on peut calculer dans une même case :
> par rapport au total général, par rapport au total de la ligne, ou par rapport au total de la
> colonne. La question doit préciser lequel — et une confusion ici change complètement
> l'interprétation.

- La **fréquence marginale** d'une modalité est son effectif total (ligne ou colonne « Total »)
  divisé par l'effectif total du tableau.
- La **fréquence conditionnelle** de $B$ parmi $A$ est $\dfrac{\text{effectif de } A \text{ et } B}{\text{effectif de } A}$ :
  on se restreint à la sous-population $A$.

> **Exemple.** Dans un lycée de $500$ élèves, $200$ sont externes, dont $50$ font du sport en club.
> La fréquence des sportifs **parmi les externes** est $\dfrac{50}{200} = 0{,}25$ ; la fréquence des
> externes dans tout le lycée (fréquence marginale) est $\dfrac{200}{500} = 0{,}4$.

---

## 7. À retenir absolument

| | |
|---|---|
| Moyenne | $\bar x = \dfrac{\sum n_ix_i}{N}$, sensible aux extrêmes |
| Médiane | partage en deux moitiés, **ordonner d'abord** |
| Étendue | max $-$ min |
| Écart interquartile | $\mathrm{Q}_3 - \mathrm{Q}_1$, robuste |
| Écart type | $\sigma$, dispersion autour de la moyenne (calculatrice) |
| Fréquences | $\sum f_i = 1$ |
| Linéarité | $\bar y = a\bar x + b$ |
| Classes | moyenne estimée avec les **centres** ; classe médiane : effectif cumulé $\geqslant \dfrac{N}{2}$ |
| Tableau croisé | fréquence conditionnelle : on se restreint à une sous-population |

---

## 8. Les erreurs qui coûtent des points

1. **Calculer la médiane sans ordonner la série.** C'est l'erreur la plus fréquente, et elle
   invalide tout le résultat.
2. **Oublier les effectifs** dans une moyenne pondérée : on ne fait pas la moyenne des valeurs,
   mais la moyenne **pondérée** par les effectifs.
3. **Confondre effectif et fréquence** : le premier est un nombre d'individus, le second une
   proportion.
4. **Croire que la médiane est la moyenne du minimum et du maximum.**
5. **Additionner des pourcentages calculés sur des bases différentes.**
6. **Utiliser la moyenne sur une série très asymétrique** — les salaires, par exemple — sans
   commenter la présence de valeurs extrêmes.
7. **Confondre écart interquartile et intervalle interquartile** : le premier est un nombre,
   le second un intervalle.
8. **Présenter la moyenne calculée avec les centres des classes comme exacte** : ce n'est qu'une
   estimation, qui suppose la répartition uniforme dans chaque classe.
9. **Prendre pour classe médiane la classe du milieu du tableau, ou celle de plus grand effectif** :
   il faut calculer les effectifs cumulés et les comparer à $\dfrac{N}{2}$.
