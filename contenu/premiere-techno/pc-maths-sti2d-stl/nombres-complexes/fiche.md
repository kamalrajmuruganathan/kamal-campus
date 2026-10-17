---
id: 1sti2d-nombres-complexes
titre: "Nombres complexes"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 14
prerequis:
  - Trigonométrie (Première STI2D/STL)
  - Vecteurs et repérage (Seconde)
statut: brouillon
relu_par: null
---

# Nombres complexes

> Un chapitre que **seuls les élèves de STI2D et STL abordent en Première** — en voie
> générale, les complexes n'arrivent qu'en Terminale, et encore, en maths expertes.
>
> Ils existent pour une raison simple : $x^2 = -1$ n'a pas de solution réelle. On
> invente donc un nombre dont le carré vaut $-1$. Ce n'est pas un artifice : en
> électricité, les complexes décrivent les circuits en régime sinusoïdal bien plus
> simplement que la trigonométrie.

---

## 1. Le nombre $\mathrm{i}$

On pose un nombre, noté $\mathrm{i}$, tel que

$$\boxed{\mathrm{i}^2 = -1}$$

> ⚠️ En sciences physiques, on écrit souvent $\mathrm{j}$ au lieu de $\mathrm{i}$,
> pour éviter la confusion avec l'intensité du courant. Les deux notations désignent
> le même objet.

---

## 2. Forme algébrique

Tout nombre complexe $z$ s'écrit de façon **unique** :

$$\boxed{z = a + \mathrm{i}b} \qquad \text{avec } a, b \in \mathbb{R}$$

| Élément | Notation | Nature |
|---|---|---|
| **Partie réelle** | $\mathrm{Re}(z) = a$ | un réel |
| **Partie imaginaire** | $\mathrm{Im}(z) = b$ | un réel |

> ⚠️ **La partie imaginaire est un nombre RÉEL.** Pour $z = 3 + 5\mathrm{i}$, la
> partie imaginaire vaut $5$, et non $5\mathrm{i}$. C'est l'erreur la plus fréquente.

### Cas particuliers

- $b = 0$ : $z$ est **réel**
- $a = 0$ : $z$ est **imaginaire pur**

---

## 3. Représentation géométrique

<!-- schema:plan-complexe-image -->
![Le point M(3 ; 2) est l’image du nombre complexe z = 3 + 2i : la partie réelle se lit en abscisse, la partie imaginaire en ordonnée.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjgiIHkxPSIyOCIgeDI9IjI4IiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMC44NiIgeTE9IjI4IiB4Mj0iMTEwLjg2IiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE5My43MSIgeTE9IjI4IiB4Mj0iMTkzLjcxIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3Ni41NyIgeTE9IjI4IiB4Mj0iMjc2LjU3IiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1OS40MyIgeTE9IjI4IiB4Mj0iMzU5LjQzIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ0Mi4yOSIgeTE9IjI4IiB4Mj0iNDQyLjI5IiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjcyIiB4Mj0iNDkyIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjE2LjU1IiB4Mj0iNDkyIiB5Mj0iMjE2LjU1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTYxLjA5IiB4Mj0iNDkyIiB5Mj0iMTYxLjA5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTA1LjY0IiB4Mj0iNDkyIiB5Mj0iMTA1LjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iNTAuMTgiIHgyPSI0OTIiIHkyPSI1MC4xOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIxNi41NSIgeDI9IjQ5MSIgeTI9IjIxNi41NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MDAsMjE2LjU1IDQ5MSwyMTIuMDUgNDkxLDIyMS4wNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIxMTAuODYiIHkxPSIyNzIiIHgyPSIxMTAuODYiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAuODYsMjAgMTA2LjM2LDI5IDExNS4zNiwyOSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjQ5NiIgeT0iMjM0LjU1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPjwvdGV4dD48dGV4dCB4PSI5OC44NiIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+PC90ZXh0Pjx0ZXh0IHg9IjE5My43MSIgeT0iMjMyLjU1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjI3Ni41NyIgeT0iMjMyLjU1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjM1OS40MyIgeT0iMjMyLjU1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0Pjx0ZXh0IHg9IjQ0Mi4yOSIgeT0iMjMyLjU1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj40PC90ZXh0Pjx0ZXh0IHg9IjEwNC44NiIgeT0iMTY1LjA5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjEwNC44NiIgeT0iMTA5LjY0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjEwNC44NiIgeT0iNTQuMTgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iMTAyLjg2IiB5PSIyMzIuNTUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0NjQiIGhlaWdodD0iMjQ0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxsaW5lIHgxPSIzNTkuNDMiIHkxPSIyMTYuNTUiIHgyPSIzNTkuNDMiIHkyPSIxMDUuNjQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMC44NiIgeTE9IjEwNS42NCIgeDI9IjM1OS40MyIgeTI9IjEwNS42NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGxpbmUgeDE9IjExMC44NiIgeTE9IjIxNi41NSIgeDI9IjM0OS4zOCIgeTI9IjExMC4xMiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNTkuNDMsMTA1LjY0IDM0Ny4xNCwxMDUuMSAzNTEuNjIsMTE1LjE0IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMzU5LjQzIiBjeT0iMTA1LjY0IiByPSI0IiBmaWxsPSIjMTYyMzJlIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjM5NS40MyIgeT0iOTkuNjQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPk0oMyA7IDIpPC90ZXh0PjxjaXJjbGUgY3g9IjM1OS40MyIgY3k9IjIxNi41NSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIzNjMuNDMiIHk9IjI0Ni41NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+YSA9IDM8L3RleHQ+PGNpcmNsZSBjeD0iMTEwLjg2IiBjeT0iMTA1LjY0IiByPSI0IiBmaWxsPSIjMWE3ZjRiIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjE0MC44NiIgeT0iOTYuNjQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmIgPSAyPC90ZXh0Pjx0ZXh0IHg9IjIzNS4xNCIgeT0iMTQxLjY4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj56ID0gMyArIDJpPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iMjUwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5heGUgZGVzIHLDqWVsczwvdGV4dD48dGV4dCB4PSIxNDAiIHk9IjM0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmF4ZSBkZXMgaW1hZ2luYWlyZXMgcHVyczwvdGV4dD48L3N2Zz4=)
*Le point M(3 ; 2) est l’image du nombre complexe z = 3 + 2i : la partie réelle se lit en abscisse, la partie imaginaire en ordonnée.*
<!-- /schema -->

Dans un repère orthonormé direct, on associe à $z = a + \mathrm{i}b$ le point
$\mathrm{M}(a\,;b)$, appelé **image** de $z$. Réciproquement, $z$ est l'**affixe**
de $\mathrm{M}$.

- L'axe des abscisses porte les **réels**
- L'axe des ordonnées porte les **imaginaires purs**

Ce plan s'appelle le **plan complexe**.

---

## 4. Conjugué

<!-- schema:conjugue-symetrie -->
![Le conjugué z̄ = 3 − 2i a pour image M′, symétrique de M par rapport à l’axe des abscisses (axe des réels).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjgiIHkxPSIyOCIgeDI9IjI4IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMC44NiIgeTE9IjI4IiB4Mj0iMTEwLjg2IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE5My43MSIgeTE9IjI4IiB4Mj0iMTkzLjcxIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3Ni41NyIgeTE9IjI4IiB4Mj0iMjc2LjU3IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1OS40MyIgeTE9IjI4IiB4Mj0iMzU5LjQzIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ0Mi4yOSIgeTE9IjI4IiB4Mj0iNDQyLjI5IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzEyIiB4Mj0iNDkyIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjY3LjYzIiB4Mj0iNDkyIiB5Mj0iMjY3LjYzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjIzLjI1IiB4Mj0iNDkyIiB5Mj0iMjIzLjI1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTc4Ljg4IiB4Mj0iNDkyIiB5Mj0iMTc4Ljg4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTM0LjUiIHgyPSI0OTIiIHkyPSIxMzQuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjkwLjEzIiB4Mj0iNDkyIiB5Mj0iOTAuMTMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSI0NS43NSIgeDI9IjQ5MiIgeTI9IjQ1Ljc1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTc4Ljg4IiB4Mj0iNDkxIiB5Mj0iMTc4Ljg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUwMCwxNzguODggNDkxLDE3NC4zOCA0OTEsMTgzLjM4IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjExMC44NiIgeTE9IjMxMiIgeDI9IjExMC44NiIgeTI9IjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjExMC44NiwyMCAxMDYuMzYsMjkgMTE1LjM2LDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNDk2IiB5PSIxOTYuODgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+PC90ZXh0Pjx0ZXh0IHg9Ijk4Ljg2IiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iMTkzLjcxIiB5PSIxOTQuODgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMjc2LjU3IiB5PSIxOTQuODgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMzU5LjQzIiB5PSIxOTQuODgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iNDQyLjI5IiB5PSIxOTQuODgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PHRleHQgeD0iMTA0Ljg2IiB5PSIyNzEuNjMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjI8L3RleHQ+PHRleHQgeD0iMTA0Ljg2IiB5PSIyMjcuMjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjE8L3RleHQ+PHRleHQgeD0iMTA0Ljg2IiB5PSIxMzguNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIxMDQuODYiIHk9Ijk0LjEzIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjEwNC44NiIgeT0iNDkuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iMTAyLjg2IiB5PSIxOTQuODgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0NjQiIGhlaWdodD0iMjg0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxsaW5lIHgxPSIzNTkuNDMiIHkxPSI5MC4xMyIgeDI9IjM1OS40MyIgeTI9IjI2Ny42MyIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGNpcmNsZSBjeD0iMzU5LjQzIiBjeT0iOTAuMTMiIHI9IjQiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMzU5LjQzIiB5PSI3OC4xMyIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TSA6IHogPSAzICsgMmk8L3RleHQ+PGNpcmNsZSBjeD0iMzU5LjQzIiBjeT0iMjY3LjYzIiByPSI0IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjM1OS40MyIgeT0iMjkxLjYzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5N4oCyIDogesyEID0gMyDiiJIgMmk8L3RleHQ+PHRleHQgeD0iMzcxLjg2IiB5PSIxMzguOTQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+c3ltw6l0cmllPC90ZXh0Pjwvc3ZnPg==)
*Le conjugué z̄ = 3 − 2i a pour image M′, symétrique de M par rapport à l’axe des abscisses (axe des réels).*
<!-- /schema -->

$$\boxed{\bar{z} = a - \mathrm{i}b}$$

Géométriquement, l'image de $\bar z$ est le **symétrique** de celle de $z$ par rapport
à l'axe des abscisses.

### Propriété décisive

$$z \times \bar{z} = a^2 + b^2 \qquad \text{— un nombre RÉEL positif}$$

> C'est cette propriété qui permet de **diviser** : on multiplie numérateur et
> dénominateur par le conjugué du dénominateur, exactement comme on rend rationnel
> un dénominateur contenant une racine carrée.

### Conjugué d'une somme, d'un produit, d'un quotient

$$\overline{z + z'} = \bar{z} + \bar{z'} \qquad\qquad \overline{z \times z'} = \bar{z} \times \bar{z'} \qquad\qquad \overline{\left(\dfrac{z}{z'}\right)} = \dfrac{\bar{z}}{\bar{z'}} \ (z' \neq 0)$$

> **Exemple.** Avec $z = 1 + 2\mathrm{i}$ et $z' = 3 - \mathrm{i}$ : $z z' = 3 - \mathrm{i} + 6\mathrm{i} - 2\mathrm{i}^2 = 5 + 5\mathrm{i}$,
> donc $\overline{z z'} = 5 - 5\mathrm{i}$ ; et $\bar{z} \times \bar{z'} = (1 - 2\mathrm{i})(3 + \mathrm{i}) = 3 + \mathrm{i} - 6\mathrm{i} - 2\mathrm{i}^2 = 5 - 5\mathrm{i}$.

---

## 5. Module

$$\boxed{|z| = \sqrt{a^2 + b^2}}$$

C'est la **distance** de l'origine au point image — donc toujours un réel **positif**.

| Propriété | Formule |
|---|---|
| Lien avec le conjugué | $|z|^2 = z\bar{z}$ |
| Produit | $|zz'| = |z| \times |z'|$ |
| Quotient | $\left|\dfrac{z}{z'}\right| = \dfrac{|z|}{|z'|}$ |

---

## 6. Opérations

### Somme

On additionne parties réelles et parties imaginaires séparément :

$$(a + \mathrm{i}b) + (c + \mathrm{i}d) = (a+c) + \mathrm{i}(b+d)$$

### Produit

On développe **comme en algèbre**, puis on remplace $\mathrm{i}^2$ par $-1$ :

$$(a+\mathrm{i}b)(c+\mathrm{i}d) = ac + \mathrm{i}ad + \mathrm{i}bc + \mathrm{i}^2bd
= (ac - bd) + \mathrm{i}(ad + bc)$$

> **Exemple.** $(2 + 3\mathrm{i})(1 - \mathrm{i}) = 2 - 2\mathrm{i} + 3\mathrm{i} - 3\mathrm{i}^2
> = 2 + \mathrm{i} + 3 = 5 + \mathrm{i}$
>
> Le $-3\mathrm{i}^2$ devient $+3$ : c'est là que tout se joue.

### Quotient — la méthode du conjugué

$$\frac{z}{z'} = \frac{z \times \overline{z'}}{z' \times \overline{z'}}
= \frac{z \times \overline{z'}}{|z'|^2}$$

> **Exemple.** $\dfrac{1}{2+\mathrm{i}} = \dfrac{2-\mathrm{i}}{(2+\mathrm{i})(2-\mathrm{i})}
> = \dfrac{2-\mathrm{i}}{4+1} = \dfrac{2}{5} - \dfrac{1}{5}\mathrm{i}$

---

## 7. Argument et forme trigonométrique

<!-- schema:module-argument -->
![Pour z = 1 + i : le module r = √2 est la distance OM et l’argument θ = π/4 est l’angle entre l’axe des abscisses et le vecteur OM.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgMzY4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSIzNjgiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTAxLjQ1IiB5MT0iMjgiIHgyPSIxMDEuNDUiIHkyPSIzNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTkzLjI3IiB5MT0iMjgiIHgyPSIxOTMuMjciIHkyPSIzNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjg1LjA5IiB5MT0iMjgiIHgyPSIyODUuMDkiIHkyPSIzNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzc2LjkxIiB5MT0iMjgiIHgyPSIzNzYuOTEiIHkyPSIzNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyODQuOTQiIHgyPSI0MzIiIHkyPSIyODQuOTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxOTMuMTgiIHgyPSI0MzIiIHkyPSIxOTMuMTgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxMDEuNDEiIHgyPSI0MzIiIHkyPSIxMDEuNDEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyODQuOTQiIHgyPSI0MzEiIHkyPSIyODQuOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDQwLDI4NC45NCA0MzEsMjgwLjQ0IDQzMSwyODkuNDQiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iMTAxLjQ1IiB5MT0iMzQwIiB4Mj0iMTAxLjQ1IiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTAxLjQ1LDIwIDk2Ljk1LDI5IDEwNS45NSwyOSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjQzNiIgeT0iMzAyLjk0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPjwvdGV4dD48dGV4dCB4PSI4OS40NSIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+PC90ZXh0Pjx0ZXh0IHg9IjE5My4yNyIgeT0iMzAwLjk0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDU8L3RleHQ+PHRleHQgeD0iMjg1LjA5IiB5PSIzMDAuOTQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMzc2LjkxIiB5PSIzMDAuOTQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEsNTwvdGV4dD48dGV4dCB4PSI5NS40NSIgeT0iMTk3LjE4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDU8L3RleHQ+PHRleHQgeD0iOTUuNDUiIHk9IjEwNS40MSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI5My40NSIgeT0iMzAwLjk0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxjbGlwUGF0aCBpZD0iem9uZSI+PHJlY3QgeD0iMjgiIHk9IjI4IiB3aWR0aD0iNDA0IiBoZWlnaHQ9IjMxMiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI3pvbmUpIj48bGluZSB4MT0iMjg1LjA5IiB5MT0iMjg0Ljk0IiB4Mj0iMjg1LjA5IiB5Mj0iMTAxLjQxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMDEuNDUiIHkxPSIxMDEuNDEiIHgyPSIyODUuMDkiIHkyPSIxMDEuNDEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjxwYXRoIGQ9Ik0gMTYxLjQ1IDI4NC45NCBMIDE2MS40NCAyODMuNzYgTCAxNjEuNDEgMjgyLjU5IEwgMTYxLjM1IDI4MS40MSBMIDE2MS4yNyAyODAuMjMgTCAxNjEuMTcgMjc5LjA2IEwgMTYxLjA0IDI3Ny44OSBMIDE2MC44OSAyNzYuNzIgTCAxNjAuNzIgMjc1LjU2IEwgMTYwLjUyIDI3NC4zOSBMIDE2MC4zIDI3My4yNCBMIDE2MC4wNiAyNzIuMDggTCAxNTkuOCAyNzAuOTMgTCAxNTkuNTEgMjY5Ljc5IEwgMTU5LjIgMjY4LjY1IEwgMTU4Ljg3IDI2Ny41MiBMIDE1OC41MiAyNjYuNCBMIDE1OC4xNCAyNjUuMjggTCAxNTcuNzUgMjY0LjE3IEwgMTU3LjMzIDI2My4wNyBMIDE1Ni44OSAyNjEuOTggTCAxNTYuNDMgMjYwLjkgTCAxNTUuOTQgMjU5LjgyIEwgMTU1LjQ0IDI1OC43NiBMIDE1NC45MSAyNTcuNyBMIDE1NC4zNyAyNTYuNjYgTCAxNTMuOCAyNTUuNjIgTCAxNTMuMjIgMjU0LjYgTCAxNTIuNjEgMjUzLjU5IEwgMTUxLjk5IDI1Mi41OSBMIDE1MS4zNCAyNTEuNjEgTCAxNTAuNjggMjUwLjYzIEwgMTUwIDI0OS42NyBMIDE0OS4yOSAyNDguNzMgTCAxNDguNTcgMjQ3LjggTCAxNDcuODQgMjQ2Ljg4IEwgMTQ3LjA4IDI0NS45NyBMIDE0Ni4zMSAyNDUuMDkgTCAxNDUuNTEgMjQ0LjIxIEwgMTQ0LjcxIDI0My4zNiBMIDE0My44OCAyNDIuNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48bGluZSB4MT0iMTQ1LjUxIiB5MT0iMjQ0LjIxIiB4Mj0iMTUwLjEyIiB5Mj0iMjQ5IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE0My44OCwyNDIuNTEgMTQ2Ljg3LDI1Mi4xMiAxNTMuMzYsMjQ1Ljg4IiBmaWxsPSIjYzI1ZTAwIi8+PGxpbmUgeDE9IjEwMS40NSIgeTE9IjI4NC45NCIgeDI9IjI3Ny4zMSIgeTI9IjEwOS4xOSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyODUuMDksMTAxLjQxIDI3My40MiwxMDUuMyAyODEuMiwxMTMuMDgiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIyODUuMDkiIGN5PSIxMDEuNDEiIHI9IjQiIGZpbGw9IiMxNjIzMmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMzIzLjA5IiB5PSI5Ny40MSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TSgxIDsgMSk8L3RleHQ+PHRleHQgeD0iMTY3LjU2IiB5PSIyNjIuOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+zrggPSDPgC80PC90ZXh0Pjx0ZXh0IHg9IjE3MS4yNCIgeT0iMTcxLjE1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5yID0g4oiaMjwvdGV4dD48L3N2Zz4=)
*Pour z = 1 + i : le module r = √2 est la distance OM et l’argument θ = π/4 est l’angle entre l’axe des abscisses et le vecteur OM.*
<!-- /schema -->

Pour $z \neq 0$, l'**argument** $\theta$ est l'angle orienté entre l'axe des abscisses
et le vecteur allant de l'origine au point image.

$$\boxed{z = r\left(\cos\theta + \mathrm{i}\sin\theta\right)} \qquad \text{avec } r = |z|$$

### Passer d'une forme à l'autre

| Sens | Méthode |
|---|---|
| **Algébrique → trigonométrique** | calculer $r = \sqrt{a^2+b^2}$, puis $\cos\theta = \dfrac{a}{r}$ et $\sin\theta = \dfrac{b}{r}$ |
| **Trigonométrique → algébrique** | $a = r\cos\theta$ et $b = r\sin\theta$ |

> **Exemple.** $z = 1 + \mathrm{i}$ : $r = \sqrt{2}$, puis
> $\cos\theta = \sin\theta = \dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}$, donc
> $\theta = \dfrac{\pi}{4}$.
>
> $z = \sqrt{2}\left(\cos\dfrac{\pi}{4} + \mathrm{i}\sin\dfrac{\pi}{4}\right)$

> ⚠️ **Il faut les DEUX équations** pour déterminer $\theta$. Le cosinus seul laisse
> deux possibilités — c'est le sinus qui tranche entre elles.

---

## 8. À retenir absolument

| | |
|---|---|
| Définition | $\mathrm{i}^2 = -1$ |
| Forme algébrique | $z = a + \mathrm{i}b$, unique |
| Partie imaginaire | $b$, un **réel** |
| Conjugué | $\bar z = a - \mathrm{i}b$ |
| Propriété clé | $z\bar z = a^2 + b^2$, réel positif |
| Module | $|z| = \sqrt{a^2+b^2}$ |
| Diviser | multiplier par le **conjugué du dénominateur** |
| Forme trigonométrique | $z = r(\cos\theta + \mathrm{i}\sin\theta)$ |

---

## 9. Les erreurs qui coûtent des points

1. **Dire que la partie imaginaire de $3+5\mathrm{i}$ est $5\mathrm{i}$.** C'est $5$.
2. **Oublier de remplacer $\mathrm{i}^2$ par $-1$** dans un produit.
3. **Écrire $|z| = a + b$** au lieu de $\sqrt{a^2+b^2}$.
4. **Annoncer un module négatif** : c'est une distance, toujours positive.
5. **Multiplier par le conjugué du numérateur** au lieu de celui du dénominateur.
6. **Déterminer l'argument avec le seul cosinus** : il faut aussi le sinus.
7. **Confondre affixe et image** : l'affixe est le nombre, l'image est le point.
