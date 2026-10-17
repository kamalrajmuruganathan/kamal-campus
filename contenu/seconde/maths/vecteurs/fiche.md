---
id: 2nde-math-vecteurs
titre: "Vecteurs"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Repérage dans le plan (cycle 4)
  - Translations et symétries (cycle 4)
statut: brouillon
relu_par: null
---

# Vecteurs

> Un vecteur code un **déplacement** : une direction, un sens, une longueur. Peu importe d'où
> l'on part — c'est ce qui le distingue d'un segment, et ce qui le rend si commode en géométrie
> comme en physique.

---

## 1. Définition

Le vecteur $\overrightarrow{\mathrm{AB}}$ est caractérisé par trois données :

| Caractéristique | Sens |
|---|---|
| **Direction** | celle de la droite $(\mathrm{AB})$ |
| **Sens** | de $\mathrm{A}$ vers $\mathrm{B}$ |
| **Norme** | la longueur $\mathrm{AB}$, notée $\left\lVert \overrightarrow{\mathrm{AB}} \right\rVert$ |

### Égalité de vecteurs

<!-- schema:parallelogramme-abdc -->
![Les vecteurs AB et CD sont égaux : ABDC est un parallélogramme (attention à l’ordre des lettres), et ses diagonales AD et BC ont le même milieu I.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjcwLDI5MCAzMTgsMjI4IDM4MCw0MiAxMzIsMTA0IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iNzAiIHkxPSIyOTAiIHgyPSIzODAiIHkyPSI0MiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzE4IiB5MT0iMjI4IiB4Mj0iMTMyIiB5Mj0iMTA0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI3MCIgeTE9IjI5MCIgeDI9IjMwOC4zIiB5Mj0iMjMwLjQzIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMTgsMjI4IDMwNy4wOSwyMjUuNTcgMzA5LjUxLDIzNS4yOCIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIxMzIiIHkxPSIxMDQiIHgyPSIzNzAuMyIgeTI9IjQ0LjQzIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzODAsNDIgMzY5LjA5LDM5LjU3IDM3MS41MSw0OS4yOCIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iMjkwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI1OCIgeT0iMjk4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0PjxjaXJjbGUgY3g9IjMxOCIgY3k9IjIyOCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzMwIiB5PSIyNDAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+PGNpcmNsZSBjeD0iMTMyIiBjeT0iMTA0IiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxMjAiIHk9Ijk4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DPC90ZXh0PjxjaXJjbGUgY3g9IjM4MCIgY3k9IjQyIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIzOTIiIHk9IjM2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EPC90ZXh0PjxjaXJjbGUgY3g9IjIyNSIgY3k9IjE2NiIgcj0iMy4yIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjI1IiB5PSIxNTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkk8L3RleHQ+PHRleHQgeD0iMjAwIiB5PSIyODkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+QUI8L3RleHQ+PGxpbmUgeDE9IjE4OC40NCIgeTE9IjI3NC4yOCIgeDI9IjIwOC41NiIgeTI9IjI3NC4yOCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMTMuNTYsMjc0LjI4IDIwOC41NiwyNzEuNzggMjA4LjU2LDI3Ni43OCIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjI1MiIgeT0iNTkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+Q0Q8L3RleHQ+PGxpbmUgeDE9IjI0MC40NCIgeTE9IjQ0LjI4IiB4Mj0iMjYwLjU2IiB5Mj0iNDQuMjgiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjY1LjU2LDQ0LjI4IDI2MC41Niw0MS43OCAyNjAuNTYsNDYuNzgiIGZpbGw9IiMxZjZmZWIiLz48L3N2Zz4=)
*Les vecteurs AB et CD sont égaux : ABDC est un parallélogramme (attention à l’ordre des lettres), et ses diagonales AD et BC ont le même milieu I.*
<!-- /schema -->

$$\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{CD}} \iff \mathrm{ABDC} \text{ est un parallélogramme}$$

> ⚠️ **Attention à l'ordre des lettres** : c'est $\mathrm{ABDC}$, pas $\mathrm{ABCD}$.
> Un moyen sûr : $\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{CD}}$ signifie que
> $[\mathrm{AD}]$ et $[\mathrm{BC}]$ ont le **même milieu**.

### Vecteur nul et opposé

$$\overrightarrow{\mathrm{AA}} = \vec{0} \qquad\qquad \overrightarrow{\mathrm{BA}} = -\overrightarrow{\mathrm{AB}}$$

---

## 2. Coordonnées

### Base orthonormée et coordonnées d'un vecteur

Deux vecteurs $\vec{\imath}$ et $\vec{\jmath}$ de norme $1$ et de directions perpendiculaires forment une
**base orthonormée**. Tout vecteur $\vec{u}$ s'écrit alors d'une seule façon

$$\boxed{\vec{u} = x\,\vec{\imath} + y\,\vec{\jmath}}$$

Les nombres $x$ et $y$ sont les **coordonnées** de $\vec{u}$, notées $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$.

> **Exemple.** $\vec{u} = 3\,\vec{\imath} - 2\,\vec{\jmath}$ a pour coordonnées $\begin{pmatrix} 3 \\ -2 \end{pmatrix}$ :
> on avance de $3$ dans la direction de $\vec{\imath}$, puis de $2$ dans le sens opposé à $\vec{\jmath}$.

Plus généralement, si $\vec{v}$ et $\vec{w}$ sont deux vecteurs **non colinéaires**, tout vecteur du
plan peut s'écrire $a\,\vec{v} + b\,\vec{w}$ avec $a$ et $b$ réels (voir la multiplication par un réel
au § 3 et la colinéarité au § 4).

### Coordonnées de $\overrightarrow{\mathrm{AB}}$

Dans un repère, si $\mathrm{A}(x_\mathrm{A}\,;y_\mathrm{A})$ et
$\mathrm{B}(x_\mathrm{B}\,;y_\mathrm{B})$ :

$$\boxed{\overrightarrow{\mathrm{AB}}\begin{pmatrix} x_\mathrm{B} - x_\mathrm{A} \\ y_\mathrm{B} - y_\mathrm{A} \end{pmatrix}}$$

> **L'ordre est « arrivée moins départ »**, jamais l'inverse. C'est l'erreur numéro un du
> chapitre.

> **Exemple.** $\mathrm{A}(1\,;5)$ et $\mathrm{B}(4\,;3)$ donnent
> $\overrightarrow{\mathrm{AB}}\begin{pmatrix} 3 \\ -2 \end{pmatrix}$.

### Norme (en repère orthonormé)

$$\left\lVert \vec{u} \right\rVert = \sqrt{x^2 + y^2}$$

### Milieu de $[\mathrm{AB}]$

$$\mathrm{I}\left(\frac{x_\mathrm{A}+x_\mathrm{B}}{2}\,;\frac{y_\mathrm{A}+y_\mathrm{B}}{2}\right)$$

---

## 3. Opérations

### Somme — la relation de Chasles

<!-- schema:relation-chasles -->
![Relation de Chasles : enchaîner le vecteur AB puis le vecteur BC revient à aller directement de A à C ; le point B, arrivée du premier et départ du second, disparaît.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNzAiIHkxPSIyNTAiIHgyPSIyOTAuMjMiIHkyPSIyMDIuMTIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwMCwyMDAgMjg5LjE3LDE5Ny4yNCAyOTEuMjksMjA3LjAxIiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjMwMCIgeTE9IjIwMCIgeDI9IjM5NC4xOSIgeTI9IjY4LjE0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MDAsNjAgMzkwLjEyLDY1LjIzIDM5OC4yNiw3MS4wNCIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSI3MCIgeTE9IjI1MCIgeDI9IjM5MS4zMyIgeTI9IjY0Ljk5IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MDAsNjAgMzg4Ljg0LDYwLjY2IDM5My44Myw2OS4zMiIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iMjUwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI1OCIgeT0iMjYyIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0PjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwMCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzE0IiB5PSIyMTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+PGNpcmNsZSBjeD0iNDAwIiBjeT0iNjAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjQxMiIgeT0iNTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+PHRleHQgeD0iMTkwIiB5PSIyNTIiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+QUI8L3RleHQ+PGxpbmUgeDE9IjE3OC40NCIgeTE9IjIzNy4yOCIgeDI9IjE5OC41NiIgeTI9IjIzNy4yOCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMDMuNTYsMjM3LjI4IDE5OC41NiwyMzQuNzggMTk4LjU2LDIzOS43OCIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjM3OCIgeT0iMTQyIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPkJDPC90ZXh0PjxsaW5lIHgxPSIzNjYuNDQiIHkxPSIxMjcuMjgiIHgyPSIzODYuNTYiIHkyPSIxMjcuMjgiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzkxLjU2LDEyNy4yOCAzODYuNTYsMTI0Ljc4IDM4Ni41NiwxMjkuNzgiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSIxOTYiIHk9IjEyOCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj5BQzwvdGV4dD48bGluZSB4MT0iMTg0LjQ0IiB5MT0iMTEzLjI4IiB4Mj0iMjA0LjU2IiB5Mj0iMTEzLjI4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIwOS41NiwxMTMuMjggMjA0LjU2LDExMC43OCAyMDQuNTYsMTE1Ljc4IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjQwIiB5PSIyODQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPkFCICsgQkMgPSBBQyAoZW4gdmVjdGV1cnMpPC90ZXh0Pjwvc3ZnPg==)
*Relation de Chasles : enchaîner le vecteur AB puis le vecteur BC revient à aller directement de A à C ; le point B, arrivée du premier et départ du second, disparaît.*
<!-- /schema -->

$$\boxed{\overrightarrow{\mathrm{AB}} + \overrightarrow{\mathrm{BC}} = \overrightarrow{\mathrm{AC}}}$$

> **La règle mnémotechnique** : le point d'arrivée du premier doit être le point de départ du
> second, et il « disparaît ». C'est l'outil le plus utilisé de tout le chapitre.

En coordonnées, on additionne composante par composante :

$$\vec{u}\begin{pmatrix} x \\ y \end{pmatrix} + \vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} x + x' \\ y + y' \end{pmatrix}$$

### Multiplication par un réel

<!-- schema:multiplication-reel -->
![Les vecteurs 2u et −1,5u ont la même direction que u : 2u a le même sens et une longueur doublée, −1,5u est de sens opposé et 1,5 fois plus long.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDAiIHkxPSIxMDAiIHgyPSIxNTAuNzciIHkyPSI1My44NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTYwLDUwIDE0OC44NSw0OS4yMyAxNTIuNjksNTguNDYiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTkwIiB5MT0iMTMwIiB4Mj0iNDIwLjc3IiB5Mj0iMzMuODUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQzMCwzMCA0MTguODUsMjkuMjMgNDIyLjY5LDM4LjQ2IiBmaWxsPSIjMWE3ZjRiIi8+PGxpbmUgeDE9IjQ4MCIgeTE9IjE5MCIgeDI9IjMwOS4yMyIgeTI9IjI2MS4xNSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzAwLDI2NSAzMTEuMTUsMjY1Ljc3IDMwNy4zMSwyNTYuNTQiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI5MiIgeT0iNjQiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+dTwvdGV4dD48bGluZSB4MT0iODYuODQiIHkxPSI0OS4yOCIgeDI9Ijk0LjE2IiB5Mj0iNDkuMjgiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iOTkuMTYsNDkuMjggOTQuMTYsNDYuNzggOTQuMTYsNTEuNzgiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIyOTAiIHk9IjY0IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPjJ1PC90ZXh0PjxsaW5lIHgxPSIyODAuODQiIHkxPSI0OS4yOCIgeDI9IjI5Ni4xNiIgeTI9IjQ5LjI4IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwMS4xNiw0OS4yOCAyOTYuMTYsNDYuNzggMjk2LjE2LDUxLjc4IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iNDMwIiB5PSIyNTUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+4oiSMSw1dTwvdGV4dD48bGluZSB4MT0iNDA4LjUyIiB5MT0iMjQwLjI4IiB4Mj0iNDQ4LjQ4IiB5Mj0iMjQwLjI4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ1My40OCwyNDAuMjggNDQ4LjQ4LDIzNy43OCA0NDguNDgsMjQyLjc4IiBmaWxsPSIjYzAyYTJhIi8+PC9zdmc+)
*Les vecteurs 2u et −1,5u ont la même direction que u : 2u a le même sens et une longueur doublée, −1,5u est de sens opposé et 1,5 fois plus long.*
<!-- /schema -->

$$k\,\vec{u}\begin{pmatrix} kx \\ ky \end{pmatrix}$$

- $k > 0$ : même sens, longueur multipliée par $k$
- $k < 0$ : **sens opposé**
- $k = 0$ : vecteur nul

---

## 4. Colinéarité

### Définition

$\vec{u}$ et $\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\vec{v} = k\,\vec{u}$
(avec $\vec{u} \neq \vec 0$).

Géométriquement : ils ont la **même direction**.

### Critère par le déterminant

$$\boxed{\vec{u}\begin{pmatrix} x \\ y \end{pmatrix} \text{ et } \vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix} \text{ colinéaires} \iff xy' - yx' = 0}$$

Le nombre $xy' - yx'$ s'appelle le **déterminant**. On le calcule « en croix ».

> **Exemple.** $\vec{u}\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ et
> $\vec{v}\begin{pmatrix} 6 \\ 9 \end{pmatrix}$ :
> $2 \times 9 - 3 \times 6 = 18 - 18 = 0$. Ils sont colinéaires (et en effet $\vec v = 3\vec u$).

### Les deux usages décisifs

| Pour démontrer que… | On montre que… |
|---|---|
| $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ sont **alignés** | $\overrightarrow{\mathrm{AB}}$ et $\overrightarrow{\mathrm{AC}}$ sont colinéaires |
| $(\mathrm{AB})$ et $(\mathrm{CD})$ sont **parallèles** | $\overrightarrow{\mathrm{AB}}$ et $\overrightarrow{\mathrm{CD}}$ sont colinéaires |

> ⚠️ La différence tient au **point commun** : pour l'alignement, les deux vecteurs partent
> du même point.

---

## 5. À retenir absolument

| | |
|---|---|
| Coordonnées de $\overrightarrow{\mathrm{AB}}$ | arrivée **moins** départ |
| Chasles | $\overrightarrow{\mathrm{AB}} + \overrightarrow{\mathrm{BC}} = \overrightarrow{\mathrm{AC}}$ |
| Norme (orthonormé) | $\sqrt{x^2+y^2}$ |
| Colinéarité | $xy' - yx' = 0$ |
| Alignement de A, B, C | $\overrightarrow{\mathrm{AB}}$, $\overrightarrow{\mathrm{AC}}$ colinéaires |
| Parallélisme | $\overrightarrow{\mathrm{AB}}$, $\overrightarrow{\mathrm{CD}}$ colinéaires |
| $\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{CD}}$ | $\mathrm{ABDC}$ parallélogramme |

---

## 6. Les erreurs qui coûtent des points

1. **Calculer départ moins arrivée.** C'est toujours **arrivée moins départ**.
2. **Écrire $\mathrm{ABCD}$ au lieu de $\mathrm{ABDC}$** dans la caractérisation du
   parallélogramme.
3. **Mal enchaîner Chasles** : $\overrightarrow{\mathrm{AB}} + \overrightarrow{\mathrm{CD}}$
   ne se simplifie pas, il faut un point commun.
4. **Croiser le déterminant à l'envers** : c'est $xy' - yx'$, dans cet ordre.
5. **Confondre alignement et parallélisme** : pour l'alignement, les vecteurs doivent partir
   du même point.
6. **Utiliser la formule de la norme dans un repère non orthonormé.**
7. **Confondre vecteur et segment** : $[\mathrm{AB}]$ et $[\mathrm{BA}]$ sont le même segment,
   mais $\overrightarrow{\mathrm{AB}}$ et $\overrightarrow{\mathrm{BA}}$ sont opposés.
