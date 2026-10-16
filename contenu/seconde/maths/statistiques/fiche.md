---
id: 2nde-math-statistiques
titre: "Statistiques"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
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
![Série de 12 valeurs résumée par ses indicateurs : Q₁ = 7 (rang 3), médiane 10,5, Q₃ = 12 (rang 9). La boîte, de Q₁ à Q₃, contient la moitié centrale des valeurs.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjY1IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNjUiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIyMzAiIHgyPSI1NzEiIHkyPSIyMzAiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTgwLDIzMCA1NzEsMjI1LjUgNTcxLDIzNC41IiBmaWxsPSIjNWI2YjdhIi8+PGxpbmUgeDE9IjQwIiB5MT0iMjI2IiB4Mj0iNDAiIHkyPSIyMzQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjA8L3RleHQ+PGxpbmUgeDE9IjkyIiB5MT0iMjI2IiB4Mj0iOTIiIHkyPSIyMzQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjkyIiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PGxpbmUgeDE9IjE0NCIgeTE9IjIyNiIgeDI9IjE0NCIgeTI9IjIzNCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTQ0IiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9IjIyNiIgeDI9IjE5NiIgeTI9IjIzNCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTk2IiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjY8L3RleHQ+PGxpbmUgeDE9IjI0OCIgeTE9IjIyNiIgeDI9IjI0OCIgeTI9IjIzNCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjQ4IiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PGxpbmUgeDE9IjMwMCIgeTE9IjIyNiIgeDI9IjMwMCIgeTI9IjIzNCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAwIiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEwPC90ZXh0PjxsaW5lIHgxPSIzNTIiIHkxPSIyMjYiIHgyPSIzNTIiIHkyPSIyMzQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM1MiIgeT0iMjUwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMjwvdGV4dD48bGluZSB4MT0iNDA0IiB5MT0iMjI2IiB4Mj0iNDA0IiB5Mj0iMjM0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDQiIHk9IjI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTQ8L3RleHQ+PGxpbmUgeDE9IjQ1NiIgeTE9IjIyNiIgeDI9IjQ1NiIgeTI9IjIzNCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDU2IiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE2PC90ZXh0PjxsaW5lIHgxPSI1MDgiIHkxPSIyMjYiIHgyPSI1MDgiIHkyPSIyMzQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwOCIgeT0iMjUwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xODwvdGV4dD48bGluZSB4MT0iNTYwIiB5MT0iMjI2IiB4Mj0iNTYwIiB5Mj0iMjM0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NjAiIHk9IjI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjA8L3RleHQ+PGNpcmNsZSBjeD0iMTQ0IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjE5NiIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIyMjIiIGN5PSI2NiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMjQ4IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjI3NCIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSI2NiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMzI2IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjM1MiIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIzNTIiIGN5PSI1MiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iNDA0IiBjeT0iNjYiIHI9IjUiIGZpbGw9IiMxNjIzMmUiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjQ1NiIgY3k9IjY2IiByPSI1IiBmaWxsPSIjMTYyMzJlIiBmaWxsLW9wYWNpdHk9IjAuOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSI1MzQiIGN5PSI2NiIgcj0iNSIgZmlsbD0iIzE2MjMyZSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjE0NCIgeTE9IjE1MCIgeDI9IjIyMiIgeTI9IjE1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTIiIHkxPSIxNTAiIHgyPSI1MzQiIHkyPSIxNTAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTQ0IiB5MT0iMTM4IiB4Mj0iMTQ0IiB5Mj0iMTYyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUzNCIgeTE9IjEzOCIgeDI9IjUzNCIgeTI9IjE2MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjIyMiIgeT0iMTI0IiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjUyIiByeD0iMCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjE1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIzMTMiIHkxPSIxMjQiIHgyPSIzMTMiIHkyPSIxNzYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNDQiIHk9IjExNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+bWluID0gNDwvdGV4dD48dGV4dCB4PSIyMjIiIHk9IjE5NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UeKCgSA9IDc8L3RleHQ+PHRleHQgeD0iMzEzIiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPk1lID0gMTAsNTwvdGV4dD48dGV4dCB4PSIzNTIiIHk9IjE5NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UeKCgyA9IDEyPC90ZXh0Pjx0ZXh0IHg9IjUzNCIgeT0iMTE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5tYXggPSAxOTwvdGV4dD48bGluZSB4MT0iMjIyIiB5MT0iMjA1IiB4Mj0iMzUyIiB5Mj0iMjA1IiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDQ3IiB5PSIyMTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPsOpY2FydCBpbnRlcnF1YXJ0aWxlIDogMTIg4oiSIDcgPSA1PC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSIyMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5Tw6lyaWUgZGUgMTIgdmFsZXVycyA6IDQgNiA3IDggOSAxMCAxMSAxMiAxMiAxNCAxNiAxOTwvdGV4dD48L3N2Zz4=)
*Série de 12 valeurs résumée par ses indicateurs : Q₁ = 7 (rang 3), médiane 10,5, Q₃ = 12 (rang 9). La boîte, de Q₁ à Q₃, contient la moitié centrale des valeurs.*
<!-- /schema -->

$$\mathrm{Q}_3 - \mathrm{Q}_1$$

Il contient les $50\,\%$ centraux de la série et **ignore les valeurs extrêmes** — c'est sa force.

---

## 4. Linéarité de la moyenne

Si toutes les valeurs subissent la même transformation affine $y_i = ax_i + b$ :

$$\bar{y} = a\,\bar{x} + b$$

> **Exemple.** Toutes les notes augmentées de $2$ points : la moyenne augmente de $2$.
> Toutes multipliées par $1{,}1$ : la moyenne aussi.

---

## 5. Croisement de deux caractères

Un **tableau croisé** (ou à double entrée) présente deux caractères simultanément.

> **Attention aux trois pourcentages différents** qu'on peut calculer dans une même case :
> par rapport au total général, par rapport au total de la ligne, ou par rapport au total de la
> colonne. La question doit préciser lequel — et une confusion ici change complètement
> l'interprétation.

---

## 6. À retenir absolument

| | |
|---|---|
| Moyenne | $\bar x = \dfrac{\sum n_ix_i}{N}$, sensible aux extrêmes |
| Médiane | partage en deux moitiés, **ordonner d'abord** |
| Étendue | max $-$ min |
| Écart interquartile | $\mathrm{Q}_3 - \mathrm{Q}_1$, robuste |
| Fréquences | $\sum f_i = 1$ |
| Linéarité | $\bar y = a\bar x + b$ |

---

## 7. Les erreurs qui coûtent des points

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

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Statistiques » (lignes 1475 et 3241 du .txt).
L'extraction fait apparaître explicitement « Croisement de deux variables qualitatives » et
« Dresser le tableau croisé de deux variables », d'où la section 5.
Le programme met aussi en garde (ligne 3606) : « leur utilisation inappropriée mène facilement
à de fausses affirmations » — j'ai traduit cet avertissement dans les erreurs à éviter.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'écart-type est-il au programme de seconde, ou seulement en première ? Je ne l'ai PAS
  inclus — à vérifier, c'est un point de périmètre net.
- Les diagrammes en boîte (boîtes à moustaches) sont-ils exigibles ?
- La convention de calcul des quartiles varie selon les manuels : celle retenue par le
  programme doit être confirmée, car elle change les résultats numériques.
- Les démonstrations ou capacités liées à la linéarité de la moyenne.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
