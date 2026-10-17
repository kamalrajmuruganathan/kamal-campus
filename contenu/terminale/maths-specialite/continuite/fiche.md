---
id: tale-spe-math-continuite
titre: "Continuité et théorème des valeurs intermédiaires"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 14
prerequis:
  - Limite d'une fonction en un point et en l'infini (Terminale)
  - Dérivation et sens de variation (Première)
  - Suites et convergence (Terminale)
statut: brouillon
relu_par: null
---

# Continuité et théorème des valeurs intermédiaires

> Tracer la courbe « sans lever le crayon » : voilà l'image intuitive de la continuité.
> Mais l'intuition ne prouve rien. Ce chapitre transforme cette image en un outil
> redoutable — celui qui garantit qu'une équation **a une solution**, et parfois
> une seule, même quand on est incapable de la calculer.

---

## 1. Continuité en un point, sur un intervalle

### Définition (par les limites)

Soit $f$ une fonction définie sur un intervalle $I$ et $a \in I$.

$$\boxed{f \text{ est continue en } a \iff \lim_{x \to a} f(x) = f(a)}$$

Trois choses doivent donc être réunies : $f(a)$ **existe**, la limite $\displaystyle\lim_{x \to a} f(x)$ **existe**, et ces deux nombres sont **égaux**.

$f$ est **continue sur l'intervalle $I$** lorsqu'elle est continue en **chaque** point de $I$.

> **Exemple.** La fonction $f(x) = x^2 + 1$ vérifie $\displaystyle\lim_{x \to 3} f(x) = 10 = f(3)$.
> Elle est continue en $3$, et de la même façon en tout réel : elle est continue sur $\mathbb{R}$.

### Ce que la continuité interdit

<!-- schema:partie-entiere -->
![La fonction partie entière fait un saut à chaque entier (point plein : valeur prise ; point creux : valeur exclue) : elle n’est pas continue en ces points.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNzYuOTIiIHkxPSIyOCIgeDI9Ijc2LjkyIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1OC40NiIgeTE9IjI4IiB4Mj0iMTU4LjQ2IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI0MCIgeTE9IjI4IiB4Mj0iMjQwIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMyMS41NCIgeTE9IjI4IiB4Mj0iMzIxLjU0IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMy4wOCIgeTE9IjI4IiB4Mj0iNDAzLjA4IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjYwLjMyIiB4Mj0iNDUyIiB5Mj0iMjYwLjMyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjA3LjUyIiB4Mj0iNDUyIiB5Mj0iMjA3LjUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTU0LjcyIiB4Mj0iNDUyIiB5Mj0iMTU0LjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTAxLjkyIiB4Mj0iNDUyIiB5Mj0iMTAxLjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iNDkuMTIiIHgyPSI0NTIiIHkyPSI0OS4xMiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIwNy41MiIgeDI9IjQ1MSIgeTI9IjIwNy41MiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NjAsMjA3LjUyIDQ1MSwyMDMuMDIgNDUxLDIxMi4wMiIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIxNTguNDYiIHkxPSIyOTIiIHgyPSIxNTguNDYiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNTguNDYsMjAgMTUzLjk2LDI5IDE2Mi45NiwyOSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjQ1NiIgeT0iMjI1LjUyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPng8L3RleHQ+PHRleHQgeD0iMTQ2LjQ2IiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj55PC90ZXh0Pjx0ZXh0IHg9Ijc2LjkyIiB5PSIyMjMuNTIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjE8L3RleHQ+PHRleHQgeD0iMjQwIiB5PSIyMjMuNTIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMzIxLjU0IiB5PSIyMjMuNTIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iNDAzLjA4IiB5PSIyMjMuNTIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iMTUyLjQ2IiB5PSIyNjQuMzIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjE8L3RleHQ+PHRleHQgeD0iMTUyLjQ2IiB5PSIxNTguNzIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMTUyLjQ2IiB5PSIxMDUuOTIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMTUyLjQ2IiB5PSI1My4xMiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MzwvdGV4dD48dGV4dCB4PSIxNTAuNDYiIHk9IjIyMy41MiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjQyNCIgaGVpZ2h0PSIyNjQiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lKSI+PGxpbmUgeDE9Ijc2LjkyIiB5MT0iMjYwLjMyIiB4Mj0iMTU4LjQ2IiB5Mj0iMjYwLjMyIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1OC40NiIgeTE9IjIwNy41MiIgeDI9IjI0MCIgeTI9IjIwNy41MiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNDAiIHkxPSIxNTQuNzIiIHgyPSIzMjEuNTQiIHkyPSIxNTQuNzIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzIxLjU0IiB5MT0iMTAxLjkyIiB4Mj0iNDAzLjA4IiB5Mj0iMTAxLjkyIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMy4wOCIgeTE9IjQ5LjEyIiB4Mj0iNDUyIiB5Mj0iNDkuMTIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGxpbmUgeDE9IjI0MCIgeTE9IjIwMi4yNCIgeDI9IjI0MCIgeTI9IjE2OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNDAsMTYwIDIzNiwxNjggMjQ0LDE2OCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9Ijc2LjkyIiBjeT0iMjYwLjMyIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iMTU4LjQ2IiBjeT0iMjYwLjMyIiByPSI0LjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTU4LjQ2IiBjeT0iMjA3LjUyIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iMjQwIiBjeT0iMjA3LjUyIiByPSI0LjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMjQwIiBjeT0iMTU0LjcyIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iMzIxLjU0IiBjeT0iMTU0LjcyIiByPSI0LjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMzIxLjU0IiBjeT0iMTAxLjkyIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iNDAzLjA4IiBjeT0iMTAxLjkyIiByPSI0LjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNDAzLjA4IiBjeT0iNDkuMTIiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIyNTIuMjMiIHk9IjE4MS4xMiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5zYXV0PC90ZXh0Pjwvc3ZnPg==)
*La fonction partie entière fait un saut à chaque entier (point plein : valeur prise ; point creux : valeur exclue) : elle n’est pas continue en ces points.*
<!-- /schema -->

Une fonction n'est **pas** continue en $a$ si sa courbe fait un **saut** en $a$, ou si $f(a)$ n'est pas la valeur vers laquelle la courbe se dirige.

> **Exemple (partie entière).** $x \mapsto \lfloor x \rfloor$ saute de $0$ à $1$ en $x = 1$ :
> la limite à gauche $(0)$ n'est pas égale à $f(1) = 1$. Elle est **discontinue** en tout entier.

> ⚠️ **À connaître.** Toutes les fonctions usuelles — polynômes, $\sqrt{\ }$, $\exp$, $\ln$,
> $\sin$, $\cos$, valeur absolue, et leurs sommes, produits, quotients (là où le
> dénominateur ne s'annule pas), composées — sont continues sur tout intervalle de
> leur ensemble de définition. En pratique, la continuité se **justifie**, elle ne se
> calcule presque jamais à la main.

---

## 2. Propriétés et théorèmes

### 2.1 Toute fonction dérivable est continue

$$\boxed{f \text{ dérivable en } a \implies f \text{ continue en } a}$$

Si $f$ est dérivable sur $I$, alors $f$ est continue sur $I$.

> **Exemple.** $f(x) = x^3 - 2x$ est dérivable sur $\mathbb{R}$ (c'est un polynôme),
> donc elle est continue sur $\mathbb{R}$. On n'a même pas besoin de calculer une limite.

> ⚠️ **La réciproque est FAUSSE.** Une fonction peut être continue en un point sans y
> être dérivable. C'est le point le plus piégeux du chapitre.

### 2.2 Le contre-exemple à connaître : la valeur absolue

<!-- schema:valeur-absolue -->
![La valeur absolue est continue en 0 (pas de saut), mais pas dérivable en 0 : la pente vaut −1 à gauche et +1 à droite, la courbe forme un point anguleux.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNzQuNjIiIHkxPSIyOCIgeDI9Ijc0LjYyIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1Mi4zMSIgeTE9IjI4IiB4Mj0iMTUyLjMxIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIzMCIgeTE9IjI4IiB4Mj0iMjMwIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwNy42OSIgeTE9IjI4IiB4Mj0iMzA3LjY5IiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4NS4zOCIgeTE9IjI4IiB4Mj0iMzg1LjM4IiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjI2LjI1IiB4Mj0iNDMyIiB5Mj0iMjI2LjI1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTUwIiB4Mj0iNDMyIiB5Mj0iMTUwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iNzMuNzUiIHgyPSI0MzIiIHkyPSI3My43NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIyNi4yNSIgeDI9IjQzMSIgeTI9IjIyNi4yNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NDAsMjI2LjI1IDQzMSwyMjEuNzUgNDMxLDIzMC43NSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIyMzAiIHkxPSIyNzIiIHgyPSIyMzAiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMzAsMjAgMjI1LjUsMjkgMjM0LjUsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSI0MzYiIHk9IjI0NC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0Pjx0ZXh0IHg9IjIxOCIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eTwvdGV4dD48dGV4dCB4PSI3NC42MiIgeT0iMjQyLjI1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIyPC90ZXh0Pjx0ZXh0IHg9IjE1Mi4zMSIgeT0iMjQyLjI1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxPC90ZXh0Pjx0ZXh0IHg9IjMwNy42OSIgeT0iMjQyLjI1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjM4NS4zOCIgeT0iMjQyLjI1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjIyNCIgeT0iMTU0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjIyNCIgeT0iNzcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMjIyIiB5PSIyNDIuMjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0MDQiIGhlaWdodD0iMjQ0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxwYXRoIGQ9Ik0yOCAyOEwzMCAzMEwzMiAzMkwzNC4xIDMzLjlMMzYuMSAzNS45TDM4LjEgMzcuOUw0MC4xIDM5LjlMNDIuMSA0MS45TDQ0LjIgNDMuOUw0Ni4yIDQ1LjhMNDguMiA0Ny44TDUwLjIgNDkuOEw1Mi4yIDUxLjhMNTQuMyA1My44TDU2LjMgNTUuOEw1OC4zIDU3LjdMNjAuMyA1OS43TDYyLjMgNjEuN0w2NC40IDYzLjdMNjYuNCA2NS43TDY4LjQgNjcuN0w3MC40IDY5LjZMNzIuNCA3MS42TDc0LjUgNzMuNkw3Ni41IDc1LjZMNzguNSA3Ny42TDgwLjUgNzkuNUw4Mi41IDgxLjVMODQuNiA4My41TDg2LjYgODUuNUw4OC42IDg3LjVMOTAuNiA4OS41TDkyLjYgOTEuNEw5NC43IDkzLjRMOTYuNyA5NS40TDk4LjcgOTcuNEwxMDAuNyA5OS40TDEwMi43IDEwMS40TDEwNC44IDEwMy4zTDEwNi44IDEwNS4zTDEwOC44IDEwNy4zTDExMC44IDEwOS4zTDExMi44IDExMS4zTDExNC45IDExMy4yTDExNi45IDExNS4yTDExOC45IDExNy4yTDEyMC45IDExOS4yTDEyMi45IDEyMS4yTDEyNSAxMjMuMkwxMjcgMTI1LjFMMTI5IDEyNy4xTDEzMSAxMjkuMUwxMzMgMTMxLjFMMTM1LjEgMTMzLjFMMTM3LjEgMTM1LjFMMTM5LjEgMTM3TDE0MS4xIDEzOUwxNDMuMSAxNDFMMTQ1LjIgMTQzTDE0Ny4yIDE0NUwxNDkuMiAxNDdMMTUxLjIgMTQ4LjlMMTUzLjIgMTUwLjlMMTU1LjMgMTUyLjlMMTU3LjMgMTU0LjlMMTU5LjMgMTU2LjlMMTYxLjMgMTU4LjhMMTYzLjMgMTYwLjhMMTY1LjQgMTYyLjhMMTY3LjQgMTY0LjhMMTY5LjQgMTY2LjhMMTcxLjQgMTY4LjhMMTczLjQgMTcwLjdMMTc1LjUgMTcyLjdMMTc3LjUgMTc0LjdMMTc5LjUgMTc2LjdMMTgxLjUgMTc4LjdMMTgzLjUgMTgwLjdMMTg1LjYgMTgyLjZMMTg3LjYgMTg0LjZMMTg5LjYgMTg2LjZMMTkxLjYgMTg4LjZMMTkzLjYgMTkwLjZMMTk1LjcgMTkyLjVMMTk3LjcgMTk0LjVMMTk5LjcgMTk2LjVMMjAxLjcgMTk4LjVMMjAzLjcgMjAwLjVMMjA1LjggMjAyLjVMMjA3LjggMjA0LjRMMjA5LjggMjA2LjRMMjExLjggMjA4LjRMMjEzLjggMjEwLjRMMjE1LjkgMjEyLjRMMjE3LjkgMjE0LjRMMjE5LjkgMjE2LjNMMjIxLjkgMjE4LjNMMjIzLjkgMjIwLjNMMjI2IDIyMi4zTDIyOCAyMjQuM0wyMzAgMjI2LjNMMjMyIDIyNC4zTDIzNCAyMjIuM0wyMzYuMSAyMjAuM0wyMzguMSAyMTguM0wyNDAuMSAyMTYuM0wyNDIuMSAyMTQuNEwyNDQuMSAyMTIuNEwyNDYuMiAyMTAuNEwyNDguMiAyMDguNEwyNTAuMiAyMDYuNEwyNTIuMiAyMDQuNEwyNTQuMiAyMDIuNUwyNTYuMyAyMDAuNUwyNTguMyAxOTguNUwyNjAuMyAxOTYuNUwyNjIuMyAxOTQuNUwyNjQuMyAxOTIuNUwyNjYuNCAxOTAuNkwyNjguNCAxODguNkwyNzAuNCAxODYuNkwyNzIuNCAxODQuNkwyNzQuNCAxODIuNkwyNzYuNSAxODAuN0wyNzguNSAxNzguN0wyODAuNSAxNzYuN0wyODIuNSAxNzQuN0wyODQuNSAxNzIuN0wyODYuNiAxNzAuN0wyODguNiAxNjguOEwyOTAuNiAxNjYuOEwyOTIuNiAxNjQuOEwyOTQuNiAxNjIuOEwyOTYuNyAxNjAuOEwyOTguNyAxNTguOEwzMDAuNyAxNTYuOUwzMDIuNyAxNTQuOUwzMDQuNyAxNTIuOUwzMDYuOCAxNTAuOUwzMDguOCAxNDguOUwzMTAuOCAxNDdMMzEyLjggMTQ1TDMxNC44IDE0M0wzMTYuOSAxNDFMMzE4LjkgMTM5TDMyMC45IDEzN0wzMjIuOSAxMzUuMUwzMjQuOSAxMzMuMUwzMjcgMTMxLjFMMzI5IDEyOS4xTDMzMSAxMjcuMUwzMzMgMTI1LjFMMzM1IDEyMy4yTDMzNy4xIDEyMS4yTDMzOS4xIDExOS4yTDM0MS4xIDExNy4yTDM0My4xIDExNS4yTDM0NS4xIDExMy4yTDM0Ny4yIDExMS4zTDM0OS4yIDEwOS4zTDM1MS4yIDEwNy4zTDM1My4yIDEwNS4zTDM1NS4yIDEwMy4zTDM1Ny4zIDEwMS40TDM1OS4zIDk5LjRMMzYxLjMgOTcuNEwzNjMuMyA5NS40TDM2NS4zIDkzLjRMMzY3LjQgOTEuNEwzNjkuNCA4OS41TDM3MS40IDg3LjVMMzczLjQgODUuNUwzNzUuNCA4My41TDM3Ny41IDgxLjVMMzc5LjUgNzkuNUwzODEuNSA3Ny42TDM4My41IDc1LjZMMzg1LjUgNzMuNkwzODcuNiA3MS42TDM4OS42IDY5LjZMMzkxLjYgNjcuN0wzOTMuNiA2NS43TDM5NS42IDYzLjdMMzk3LjcgNjEuN0wzOTkuNyA1OS43TDQwMS43IDU3LjdMNDAzLjcgNTUuOEw0MDUuNyA1My44TDQwNy44IDUxLjhMNDA5LjggNDkuOEw0MTEuOCA0Ny44TDQxMy44IDQ1LjhMNDE1LjggNDMuOUw0MTcuOSA0MS45TDQxOS45IDM5LjlMNDIxLjkgMzcuOUw0MjMuOSAzNS45TDQyNS45IDMzLjlMNDI4IDMyTDQzMCAzMEw0MzIgMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48dGV4dCB4PSIzODMuMTUiIHk9IjU4LjEzIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj55ID0gfHh8PC90ZXh0PjxjaXJjbGUgY3g9IjIzMCIgY3k9IjIyNi4yNSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIyNDIiIHk9IjI0Ni4yNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5wb2ludCBhbmd1bGV1eDwvdGV4dD48dGV4dCB4PSIxMjkiIHk9IjE4NC4zMSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+cGVudGUg4oiSMTwvdGV4dD48dGV4dCB4PSIzMzEiIHk9IjE4NC4zMSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+cGVudGUgKzE8L3RleHQ+PC9zdmc+)
*La valeur absolue est continue en 0 (pas de saut), mais pas dérivable en 0 : la pente vaut −1 à gauche et +1 à droite, la courbe forme un point anguleux.*
<!-- /schema -->

La fonction $f(x) = |x|$ est **continue** en $0$ : $\displaystyle\lim_{x \to 0} |x| = 0 = f(0)$.

Mais elle n'est **pas dérivable** en $0$ : sa courbe forme un **point anguleux**. Le taux
d'accroissement vaut $+1$ à droite de $0$ et $-1$ à gauche : il n'a pas de limite unique,
donc $f'(0)$ n'existe pas.

> **À retenir.** Continue $\ne$ dérivable. « Dérivable » est **plus fort** que « continue ».
> Une pointe (valeur absolue), un rebroussement : continue, mais pas dérivable.

### 2.3 Image d'une suite convergente

Si $f$ est continue en $\ell$ et si $(u_n)$ est une suite telle que $\displaystyle\lim_{n \to +\infty} u_n = \ell$
(avec $\ell$ dans l'intervalle où $f$ est continue), alors :

$$\boxed{\lim_{n \to +\infty} f(u_n) = f(\ell)}$$

> **Exemple.** Soit $u_n = 1 + \dfrac{1}{n}$, qui converge vers $1$. Comme $f(x)=x^2$ est
> continue en $1$, la suite $f(u_n) = \left(1+\frac1n\right)^2$ converge vers $f(1) = 1$.

Cette propriété est **le moteur** des suites récurrentes $u_{n+1} = f(u_n)$ (méthode 4.3) :
si une telle suite converge vers $\ell$ et si $f$ est continue, alors $f(\ell) = \ell$.

### 2.4 Théorème des valeurs intermédiaires (TVI)

<!-- schema:tvi-exemple -->
![f(x) = x³ + x − 1 est continue sur l’intervalle de 0 à 1, avec f(0) = −1 et f(1) = 1 : la courbe franchit forcément la hauteur 0, en un réel c (c ≈ 0,68).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjgiIHkxPSIyOCIgeDI9IjI4IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzNCIgeTE9IjI4IiB4Mj0iMTM0IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI0MCIgeTE9IjI4IiB4Mj0iMjQwIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0NiIgeTE9IjI4IiB4Mj0iMzQ2IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ1MiIgeTE9IjI4IiB4Mj0iNDUyIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzEyIiB4Mj0iNDUyIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjcxLjQzIiB4Mj0iNDUyIiB5Mj0iMjcxLjQzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjMwLjg2IiB4Mj0iNDUyIiB5Mj0iMjMwLjg2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTkwLjI5IiB4Mj0iNDUyIiB5Mj0iMTkwLjI5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTQ5LjcxIiB4Mj0iNDUyIiB5Mj0iMTQ5LjcxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTA5LjE0IiB4Mj0iNDUyIiB5Mj0iMTA5LjE0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iNjguNTciIHgyPSI0NTIiIHkyPSI2OC41NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjI4IiB4Mj0iNDUyIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxOTAuMjkiIHgyPSI0NTEiIHkyPSIxOTAuMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDYwLDE5MC4yOSA0NTEsMTg1Ljc5IDQ1MSwxOTQuNzkiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iMTM0IiB5MT0iMzEyIiB4Mj0iMTM0IiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTM0LDIwIDEyOS41LDI5IDEzOC41LDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNDU2IiB5PSIyMDguMjkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCB4PSIxMjIiIHk9IjI0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+PHRleHQgeD0iMjQwIiB5PSIyMDYuMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsNTwvdGV4dD48dGV4dCB4PSIzNDYiIHk9IjIwNi4yOSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIxMjgiIHk9IjI3NS40MyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMTwvdGV4dD48dGV4dCB4PSIxMjgiIHk9IjIzNC44NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMCw1PC90ZXh0Pjx0ZXh0IHg9IjEyOCIgeT0iMTUzLjcxIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDU8L3RleHQ+PHRleHQgeD0iMTI4IiB5PSIxMTMuMTQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMTI4IiB5PSI3Mi41NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MSw1PC90ZXh0Pjx0ZXh0IHg9IjEyNiIgeT0iMjA2LjI5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxjbGlwUGF0aCBpZD0iem9uZSI+PHJlY3QgeD0iMjgiIHk9IjI4IiB3aWR0aD0iNDI0IiBoZWlnaHQ9IjI4NCIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI3pvbmUpIj48bGluZSB4MT0iMzQ2IiB5MT0iMTkwLjI5IiB4Mj0iMzQ2IiB5Mj0iMTA5LjE0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMzQiIHkxPSIxMDkuMTQiIHgyPSIzNDYiIHkyPSIxMDkuMTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI4IDMyMi4xTDMwLjEgMzIwLjdMMzIuMiAzMTkuNEwzNC40IDMxOEwzNi41IDMxNi43TDM4LjYgMzE1LjNMNDAuNyAzMTRMNDIuOCAzMTIuOEw0NSAzMTEuNUw0Ny4xIDMxMC4zTDQ5LjIgMzA5LjFMNTEuMyAzMDcuOUw1My40IDMwNi43TDU1LjYgMzA1LjZMNTcuNyAzMDQuNEw1OS44IDMwMy4zTDYxLjkgMzAyLjJMNjQgMzAxLjFMNjYuMiAzMDAuMUw2OC4zIDI5OUw3MC40IDI5OEw3Mi41IDI5Ni45TDc0LjYgMjk1LjlMNzYuOCAyOTQuOUw3OC45IDI5NEw4MSAyOTNMODMuMSAyOTJMODUuMiAyOTEuMUw4Ny40IDI5MC4xTDg5LjUgMjg5LjJMOTEuNiAyODguM0w5My43IDI4Ny40TDk1LjggMjg2LjVMOTggMjg1LjZMMTAwLjEgMjg0LjdMMTAyLjIgMjgzLjlMMTA0LjMgMjgzTDEwNi40IDI4Mi4yTDEwOC42IDI4MS4zTDExMC43IDI4MC41TDExMi44IDI3OS42TDExNC45IDI3OC44TDExNyAyNzhMMTE5LjIgMjc3LjFMMTIxLjMgMjc2LjNMMTIzLjQgMjc1LjVMMTI1LjUgMjc0LjdMMTI3LjYgMjczLjlMMTI5LjggMjczLjFMMTMxLjkgMjcyLjJMMTM0IDI3MS40TDEzNi4xIDI3MC42TDEzOC4yIDI2OS44TDE0MC40IDI2OUwxNDIuNSAyNjguMkwxNDQuNiAyNjcuNEwxNDYuNyAyNjYuNUwxNDguOCAyNjUuN0wxNTEgMjY0LjlMMTUzLjEgMjY0LjFMMTU1LjIgMjYzLjJMMTU3LjMgMjYyLjRMMTU5LjQgMjYxLjZMMTYxLjYgMjYwLjdMMTYzLjcgMjU5LjhMMTY1LjggMjU5TDE2Ny45IDI1OC4xTDE3MCAyNTcuMkwxNzIuMiAyNTYuM0wxNzQuMyAyNTUuNUwxNzYuNCAyNTQuNkwxNzguNSAyNTMuNkwxODAuNiAyNTIuN0wxODIuOCAyNTEuOEwxODQuOSAyNTAuOEwxODcgMjQ5LjlMMTg5LjEgMjQ4LjlMMTkxLjIgMjQ3LjlMMTkzLjQgMjQ2LjlMMTk1LjUgMjQ1LjlMMTk3LjYgMjQ0LjlMMTk5LjcgMjQzLjlMMjAxLjggMjQyLjhMMjA0IDI0MS43TDIwNi4xIDI0MC43TDIwOC4yIDIzOS41TDIxMC4zIDIzOC40TDIxMi40IDIzNy4zTDIxNC42IDIzNi4xTDIxNi43IDIzNUwyMTguOCAyMzMuOEwyMjAuOSAyMzIuNkwyMjMgMjMxLjNMMjI1LjIgMjMwLjFMMjI3LjMgMjI4LjhMMjI5LjQgMjI3LjVMMjMxLjUgMjI2LjJMMjMzLjYgMjI0LjlMMjM1LjggMjIzLjVMMjM3LjkgMjIyLjFMMjQwIDIyMC43TDI0Mi4xIDIxOS4zTDI0NC4yIDIxNy44TDI0Ni40IDIxNi4zTDI0OC41IDIxNC44TDI1MC42IDIxMy4zTDI1Mi43IDIxMS43TDI1NC44IDIxMC4yTDI1NyAyMDguNUwyNTkuMSAyMDYuOUwyNjEuMiAyMDUuMkwyNjMuMyAyMDMuNUwyNjUuNCAyMDEuOEwyNjcuNiAyMDBMMjY5LjcgMTk4LjJMMjcxLjggMTk2LjRMMjczLjkgMTk0LjVMMjc2IDE5Mi43TDI3OC4yIDE5MC43TDI4MC4zIDE4OC44TDI4Mi40IDE4Ni44TDI4NC41IDE4NC44TDI4Ni42IDE4Mi43TDI4OC44IDE4MC42TDI5MC45IDE3OC41TDI5MyAxNzYuM0wyOTUuMSAxNzQuMUwyOTcuMiAxNzEuOUwyOTkuNCAxNjkuNkwzMDEuNSAxNjcuM0wzMDMuNiAxNjVMMzA1LjcgMTYyLjZMMzA3LjggMTYwLjJMMzEwIDE1Ny43TDMxMi4xIDE1NS4yTDMxNC4yIDE1Mi42TDMxNi4zIDE1MEwzMTguNCAxNDcuNEwzMjAuNiAxNDQuN0wzMjIuNyAxNDJMMzI0LjggMTM5LjJMMzI2LjkgMTM2LjRMMzI5IDEzMy42TDMzMS4yIDEzMC43TDMzMy4zIDEyNy44TDMzNS40IDEyNC44TDMzNy41IDEyMS43TDMzOS42IDExOC43TDM0MS44IDExNS41TDM0My45IDExMi40TDM0NiAxMDkuMUwzNDguMSAxMDUuOUwzNTAuMiAxMDIuNkwzNTIuNCA5OS4yTDM1NC41IDk1LjhMMzU2LjYgOTIuM0wzNTguNyA4OC44TDM2MC44IDg1LjJMMzYzIDgxLjZMMzY1LjEgNzcuOUwzNjcuMiA3NC4yTDM2OS4zIDcwLjRMMzcxLjQgNjYuNUwzNzMuNiA2Mi43TDM3NS43IDU4LjdMMzc3LjggNTQuN0wzNzkuOSA1MC42TDM4MiA0Ni41TDM4NC4yIDQyLjRMMzg2LjMgMzguMUwzODguNCAzMy44TDM5MC41IDI5LjVMMzkyLjYgMjUuMUwzOTQuOCAyMC42TDM5Ni45IDE2LjFMMzk5IDExLjVMNDAxLjEgNi45TDQwMy4yIDIuMkw0MDUuNCAtMi42TDQwNy41IC03LjRMNDA5LjYgLTEyLjNMNDExLjcgLTE3LjNMNDEzLjggLTIyLjNMNDE2IC0yNy40TDQxOC4xIC0zMi41TDQyMC4yIC0zNy44TDQyMi4zIC00M0w0MjQuNCAtNDguNEw0MjYuNiAtNTMuOEw0MjguNyAtNTkuM0w0MzAuOCAtNjQuOEw0MzIuOSAtNzAuNEw0MzUgLTc2LjFMNDM3LjIgLTgxLjlMNDM5LjMgLTg3LjdMNDQxLjQgLTkzLjZMNDQzLjUgLTk5LjZMNDQ1LjYgLTEwNS42TDQ0Ny44IC0xMTEuN0w0NDkuOSAtMTE3LjlMNDUyIC0xMjQuMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzNCIgeTE9IjMwNy45NCIgeDI9IjEzNCIgeTI9IjMyLjA2IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjx0ZXh0IHg9IjM4Ny44IiB5PSI2MC43MSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj55ID0geMKzICsgeCDiiJIgMTwvdGV4dD48Y2lyY2xlIGN4PSIxMzQiIGN5PSIyNzEuNDMiIHI9IjQiIGZpbGw9IiNjMDJhMmEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTQ0IiB5PSIyODcuNDMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+ZigwKSA9IOKIkjE8L3RleHQ+PGNpcmNsZSBjeD0iMzQ2IiBjeT0iMTA5LjE0IiByPSI0IiBmaWxsPSIjMWE3ZjRiIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjM1NiIgeT0iMTAxLjE0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmYoMSkgPSAxPC90ZXh0PjxjaXJjbGUgY3g9IjI3OC42NSIgY3k9IjE5MC4yOSIgcj0iNCIgZmlsbD0iIzdhM2ZiMCIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIyNzAuNjUiIHk9IjE3OC4yOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+YyDiiYggMCw2ODwvdGV4dD48L3N2Zz4=)
*f(x) = x³ + x − 1 est continue sur l’intervalle de 0 à 1, avec f(0) = −1 et f(1) = 1 : la courbe franchit forcément la hauteur 0, en un réel c (c ≈ 0,68).*
<!-- /schema -->

$$\boxed{\begin{array}{l} f \text{ continue sur } [a\,;b] \\ k \text{ compris entre } f(a) \text{ et } f(b) \end{array} \implies \exists\, c \in [a\,;b],\ f(c) = k}$$

Autrement dit : une fonction continue **prend toutes les valeurs intermédiaires** entre
$f(a)$ et $f(b)$. Sa courbe ne peut pas passer de $f(a)$ à $f(b)$ sans franchir chaque
hauteur $k$ située entre les deux.

> **Exemple.** $f(x) = x^3 + x - 1$ est continue sur $[0\,;1]$, avec $f(0) = -1$ et
> $f(1) = 1$. Comme $0$ est compris entre $-1$ et $1$, il existe $c \in [0\,;1]$ tel que
> $f(c) = 0$ : l'équation a **au moins une** solution dans $[0\,;1]$.

> ⚠️ Le TVI donne l'**existence**, pas l'unicité, et pas la valeur de $c$. Il peut y
> avoir plusieurs solutions.

### 2.5 Corollaire : le théorème de la bijection

C'est le TVI **renforcé par la stricte monotonie**, qui apporte l'**unicité**.

$$\boxed{\begin{array}{l} f \text{ continue sur } [a\,;b] \\ f \text{ strictement monotone sur } [a\,;b] \\ k \text{ compris entre } f(a) \text{ et } f(b) \end{array} \implies \exists\,!\ c \in [a\,;b],\ f(c) = k}$$

Le symbole $\exists\,!$ se lit « il existe **un unique** ». La stricte monotonie empêche
la courbe de « repasser » par une même hauteur : chaque valeur $k$ est atteinte **une
seule fois**.

Ce résultat s'étend à un intervalle **ouvert ou infini** $\left]a\,;b\right[$ : on
remplace alors $f(a)$ et $f(b)$ par les **limites** de $f$ aux bornes.

> **Exemple.** $f(x) = x^3 + x - 1$ est continue et **strictement croissante** sur
> $\mathbb{R}$ (car $f'(x) = 3x^2 + 1 > 0$). L'équation $f(x) = 0$ a donc **une unique**
> solution réelle.

---

## 3. Convention du tableau de variations

Dans un tableau de variations, une **flèche** sous-entend par convention **deux
informations à la fois** : $f$ est **continue** et **strictement monotone** sur
l'intervalle concerné. C'est ce qui autorise à invoquer le théorème de la bijection
directement à partir du tableau (à condition d'avoir justifié le signe de $f'$ avant).

---

## 4. Méthodes

### 4.1 Étudier l'équation $f(x) = k$ : existence, unicité, encadrement

C'est **la** capacité attendue du chapitre. Procède **toujours** dans cet ordre.

1. **Continuité** — justifie que $f$ est continue sur l'intervalle (dérivable, usuelle…).
2. **Monotonie** — étudie le signe de $f'$ ; dresse le tableau de variations.
3. **Valeurs aux bornes** — calcule $f(a)$ et $f(b)$ (ou les limites aux bornes).
4. **Conclusion** — si $k$ est entre ces valeurs, le théorème de la bijection donne
   **existence et unicité** de la solution.
5. **Encadrement** — précise la solution avec la calculatrice (méthodes 4.2).

> **Exemple rédigé.** Résoudre $x^3 + x - 1 = 0$ sur $\mathbb{R}$.
> - $f(x) = x^3 + x - 1$ est un polynôme, donc **continue** sur $\mathbb{R}$.
> - $f'(x) = 3x^2 + 1 > 0$ : $f$ est **strictement croissante** sur $\mathbb{R}$.
> - $\displaystyle\lim_{x \to -\infty} f = -\infty$ et $\displaystyle\lim_{x \to +\infty} f = +\infty$.
> - $0$ est compris entre ces deux limites : d'après le théorème de la bijection,
>   l'équation admet **une unique solution** $\alpha \in \mathbb{R}$.

### 4.2 Encadrer la solution : balayage et dichotomie (lien avec l'algorithmique)

Une fois l'existence et l'unicité acquises, on **encadre** la solution $\alpha$ à la
précision voulue.

**Balayage.** On calcule $f$ de proche en proche avec un pas fixe (par exemple $0{,}1$)
et on repère le changement de signe.

> Sur l'exemple : $f(0{,}6) \approx -0{,}18 < 0$ et $f(0{,}7) \approx 0{,}04 > 0$.
> Donc $0{,}6 < \alpha < 0{,}7$.

**Dichotomie.** On part d'un intervalle $[a\,;b]$ où $f$ change de signe, et on le
**coupe en deux** à chaque étape en gardant la moitié qui contient la solution.
La **longueur de l'encadrement est divisée par 2** à chaque tour.

```
a, b : bornes telles que f(a) et f(b) sont de signes contraires
Tant que  b - a > précision :
    m = (a + b) / 2
    Si  f(a) et f(m) sont de signes contraires :
        b = m          # la solution est dans [a ; m]
    Sinon :
        a = m          # la solution est dans [m ; b]
Renvoyer a, b
```

> **Pourquoi ça marche.** À chaque tour, l'intervalle contient encore un changement de
> signe : par le TVI, la solution y est toujours. La dichotomie **converge très vite**
> (une dizaine d'étapes suffit pour 3 décimales), là où le balayage est simple mais lent.

### 4.3 Étudier une suite récurrente $u_{n+1} = f(u_n)$

Pour $f$ **continue** d'un intervalle dans lui-même :

1. Montre que la suite est bien définie (les $u_n$ restent dans l'intervalle).
2. Étudie sa monotonie et une éventuelle borne, pour prouver qu'elle **converge**.
3. La **limite $\ell$** est alors solution de l'équation $\boxed{f(\ell) = \ell}$
   (grâce à l'image d'une suite convergente, propriété 2.3).
4. Résous $f(\ell) = \ell$ pour identifier $\ell$.

> **Attention à l'ordre.** L'égalité $f(\ell) = \ell$ n'est valable **qu'après** avoir
> prouvé que la suite converge. Écrire « la limite vérifie $f(\ell) = \ell$ » sans avoir
> établi la convergence, c'est mettre la charrue avant les bœufs.

---

## 5. Cas particuliers et pièges de calcul

- **Intervalle ouvert ou infini.** Le théorème de la bijection reste valable sur
  $\left]a\,;b\right[$, $\left]a\,;+\infty\right[$, etc. : on remplace $f(a)$, $f(b)$ par
  les **limites** aux bornes. Une limite n'est **pas** une valeur atteinte — surveille
  les crochets ouverts/fermés dans ta conclusion.
- **$k$ n'est pas entre les valeurs.** Si $k$ n'est pas compris entre $f(a)$ et $f(b)$,
  le théorème ne dit **rien** : il peut y avoir zéro, une ou plusieurs solutions.
  L'hypothèse n'est pas vérifiée, donc on ne conclut pas.
- **Découper l'intervalle.** Si $f$ n'est pas monotone sur tout l'intervalle, on
  **découpe** selon les variations : sur chaque morceau où $f$ est strictement monotone,
  on applique le corollaire, puis on **additionne** le nombre de solutions.
- **Continue mais pas dérivable.** Pour appliquer le TVI, seule la **continuité** est
  requise. La dérivabilité sert seulement à obtenir la monotonie (via le signe de $f'$).

---

## 6. Tableau récapitulatif

| Notion | L'essentiel |
|---|---|
| Continuité en $a$ | $\displaystyle\lim_{x\to a} f(x) = f(a)$ |
| Dérivable $\Rightarrow$ continue | vrai ; **la réciproque est fausse** |
| Contre-exemple | $|x|$ : continue en $0$, **non dérivable** en $0$ |
| Suite convergente | $u_n \to \ell$ et $f$ continue $\Rightarrow f(u_n) \to f(\ell)$ |
| TVI | $f$ continue $+$ $k$ entre $f(a),f(b)$ $\Rightarrow$ **au moins une** solution |
| Bijection (corollaire) | TVI $+$ **stricte monotonie** $\Rightarrow$ solution **unique** |
| Flèche du tableau | signifie **continue ET strictement monotone** |
| Encadrer $\alpha$ | balayage (pas fixe) ou **dichotomie** (intervalle $\div 2$) |
| Suite $u_{n+1}=f(u_n)$ | si elle converge et $f$ continue : $f(\ell)=\ell$ |

---

## 7. Les erreurs qui coûtent des points

1. **Appliquer le TVI sans vérifier la continuité.** C'est l'hypothèse n°1. Sans
   continuité, une courbe peut sauter par-dessus la valeur $k$ : le théorème ne
   s'applique pas. Justifie **toujours** la continuité avant de conclure.
2. **Conclure à l'unicité sans la stricte monotonie.** Le TVI seul ne donne que
   l'**existence**. Sans strict sens de variation, il peut y avoir plusieurs solutions.
   L'unicité exige le **corollaire** (théorème de la bijection).
3. **Croire que continue implique dérivable.** C'est l'inverse : dérivable $\Rightarrow$
   continue, jamais le contraire. La valeur absolue est le contre-exemple à citer.
4. **Oublier de vérifier que $k$ est entre $f(a)$ et $f(b)$.** Si cette condition tombe,
   le théorème est muet : on ne peut affirmer ni l'existence ni l'absence de solution.
5. **Écrire $f(\ell) = \ell$ avant d'avoir prouvé la convergence** de la suite récurrente.
   L'équation de la limite ne vaut **qu'une fois** la convergence établie.
6. **Confondre limite et valeur aux bornes** sur un intervalle ouvert. Sur
   $\left]a\,;+\infty\right[$, on raisonne avec les **limites**, et une limite n'est pas
   une valeur atteinte : attention aux crochets dans la conclusion.
