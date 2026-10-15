---
id: 1spe-math-produit-scalaire
titre: "Calcul vectoriel et produit scalaire"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 15
prerequis:
  - Vecteurs et coordonnées (Seconde)
  - Trigonométrie (Première)
  - Théorème de Pythagore (collège)
statut: brouillon
relu_par: null
---

# Calcul vectoriel et produit scalaire

> Le produit scalaire est l'outil qui fait entrer les **longueurs et les angles** dans le calcul
> vectoriel. Deux vecteurs, une multiplication, et le résultat est un **nombre** — d'où le mot
> *scalaire*. C'est ce nombre qui permet de démontrer une orthogonalité ou de calculer un angle.

---

## 1. Définitions du produit scalaire

Il existe plusieurs expressions équivalentes. On choisit celle qui correspond aux données du
problème.

### a. Avec les normes et l'angle

<!-- schema:angle-deux-vecteurs -->
![Deux vecteurs u et v issus d’un même point font un angle θ : leur produit scalaire vaut ‖u‖ × ‖v‖ × cos θ.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iOTAiIHkxPSIyMzAiIHgyPSI0NTAiIHkyPSIyMzAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDYwLDIzMCA0NTAsMjI1IDQ1MCwyMzUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iOTAiIHkxPSIyMzAiIHgyPSIyNDQuMjciIHkyPSI0Ni4xNSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNTAuNywzOC40OSAyNDAuNDQsNDIuOTQgMjQ4LjEsNDkuMzYiIGZpbGw9IiNjMDJhMmEiLz48cGF0aCBkPSJNIDE0NSAyMzAgTCAxNDQuOTkgMjI4LjggTCAxNDQuOTUgMjI3LjYgTCAxNDQuODggMjI2LjQgTCAxNDQuNzkgMjI1LjIxIEwgMTQ0LjY3IDIyNC4wMSBMIDE0NC41MyAyMjIuODIgTCAxNDQuMzYgMjIxLjYzIEwgMTQ0LjE2IDIyMC40NSBMIDE0My45NCAyMTkuMjcgTCAxNDMuNyAyMTguMSBMIDE0My40MiAyMTYuOTMgTCAxNDMuMTMgMjE1Ljc2IEwgMTQyLjggMjE0LjYxIEwgMTQyLjQ1IDIxMy40NiBMIDE0Mi4wOCAyMTIuMzIgTCAxNDEuNjggMjExLjE5IEwgMTQxLjI2IDIxMC4wNyBMIDE0MC44MSAyMDguOTUgTCAxNDAuMzQgMjA3Ljg1IEwgMTM5Ljg1IDIwNi43NiBMIDEzOS4zMyAyMDUuNjcgTCAxMzguNzkgMjA0LjYgTCAxMzguMjIgMjAzLjU1IEwgMTM3LjYzIDIwMi41IEwgMTM3LjAyIDIwMS40NyBMIDEzNi4zOSAyMDAuNDUgTCAxMzUuNzMgMTk5LjQ0IEwgMTM1LjA1IDE5OC40NSBMIDEzNC4zNSAxOTcuNDggTCAxMzMuNjMgMTk2LjUyIEwgMTMyLjg5IDE5NS41NyBMIDEzMi4xMyAxOTQuNjUgTCAxMzEuMzUgMTkzLjc0IEwgMTMwLjU1IDE5Mi44NCBMIDEyOS43MyAxOTEuOTcgTCAxMjguODkgMTkxLjExIEwgMTI4LjAzIDE5MC4yNyBMIDEyNy4xNiAxODkuNDUgTCAxMjYuMjYgMTg4LjY1IEwgMTI1LjM1IDE4Ny44NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE2MiIgeT0iMjA4IiBmb250LXNpemU9IjE3IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7OuDwvdGV4dD48dGV4dCB4PSI0NzAiIHk9IjI1NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj51PC90ZXh0PjxsaW5lIHgxPSI0NjQuODQiIHkxPSIyNDEuMjgiIHgyPSI0NzIuMTYiIHkyPSIyNDEuMjgiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDc3LjE2LDI0MS4yOCA0NzIuMTYsMjM4Ljc4IDQ3Mi4xNiwyNDMuNzgiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIyNjQuNyIgeT0iMzQuNDkiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+djwvdGV4dD48bGluZSB4MT0iMjU5LjU0IiB5MT0iMTkuNzciIHgyPSIyNjYuODYiIHkyPSIxOS43NyIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzEuODYsMTkuNzcgMjY2Ljg2LDE3LjI3IDI2Ni44NiwyMi4yNyIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjM4MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPnUgwrcgdiA9IOKAlnXigJYgw5cg4oCWduKAliDDlyBjb3Mgzrg8L3RleHQ+PC9zdmc+)
*Deux vecteurs u et v issus d’un même point font un angle θ : leur produit scalaire vaut ‖u‖ × ‖v‖ × cos θ.*
<!-- /schema -->

$$\boxed{\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos\theta}$$

où $\theta$ est l'angle entre les deux vecteurs (supposés non nuls ; si l'un est nul, le produit scalaire vaut $0$).

### b. En base orthonormée — l'expression de calcul

Si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ :

$$\boxed{\vec{u} \cdot \vec{v} = x x' + y y'}$$

C'est la formule qu'on utilise en pratique dès qu'on a des coordonnées.

### c. Avec les normes seules

$$\vec{u} \cdot \vec{v} = \frac{1}{2}\left(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2\right)$$

---

## 2. Norme et carré scalaire

$$\vec{u} \cdot \vec{u} = \|\vec{u}\|^2 \qquad\qquad \|\vec{u}\| = \sqrt{x^2 + y^2}$$

On note $\vec{u}^{\,2} = \vec{u} \cdot \vec{u}$, appelé **carré scalaire**.

---

## 3. Propriétés

Pour tous vecteurs $\vec{u}, \vec{v}, \vec{w}$ et tout réel $k$ :

| Propriété | Formule |
|---|---|
| **Symétrie** | $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$ |
| **Bilinéarité** | $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u}\cdot\vec{v} + \vec{u}\cdot\vec{w}$ |
| | $(k\vec{u}) \cdot \vec{v} = k\,(\vec{u} \cdot \vec{v})$ |

Ces propriétés permettent de **développer comme en algèbre** :

$$\boxed{\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u}\cdot\vec{v} + \|\vec{v}\|^2}$$

$$\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 - 2\,\vec{u}\cdot\vec{v} + \|\vec{v}\|^2$$

> C'est l'analogue vectoriel de $(a+b)^2 = a^2 + 2ab + b^2$.

---

## 4. Le critère d'orthogonalité

### Théorème

$$\boxed{\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0}$$

*Pourquoi* : si les vecteurs sont non nuls, $\cos\theta = 0$ équivaut à $\theta = \dfrac{\pi}{2}$.

> **C'est l'usage numéro un du produit scalaire.** Pour démontrer que deux droites sont
> perpendiculaires, on calcule le produit scalaire de deux vecteurs directeurs et on montre
> qu'il est nul.

> **Exemple.** $\vec{u}\begin{pmatrix} 3 \\ -2 \end{pmatrix}$ et
> $\vec{v}\begin{pmatrix} 4 \\ 6 \end{pmatrix}$ :
> $\vec{u} \cdot \vec{v} = 3 \times 4 + (-2) \times 6 = 12 - 12 = 0$.
> Les vecteurs sont orthogonaux.

---

## 5. Calculer un angle

De $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$ on tire

$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \times \|\vec{v}\|}$$

> **Le signe renseigne déjà** : produit scalaire positif → angle aigu ; négatif → angle obtus ;
> nul → angle droit.

---

## 6. Théorème d'Al-Kashi

<!-- schema:al-kashi -->
![Dans le triangle ABC, le côté a = BC est opposé à l’angle Â : c’est cet angle qu’on utilise dans la formule d’Al-Kashi.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjkwLDI0MCA0NjAsMjQwIDIwMCw3MCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjA3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTMwIDI0MCBMIDEyOS45OSAyMzkgTCAxMjkuOTUgMjM4LjAxIEwgMTI5Ljg5IDIzNy4wMSBMIDEyOS44IDIzNi4wMiBMIDEyOS42OSAyMzUuMDMgTCAxMjkuNTUgMjM0LjA0IEwgMTI5LjM5IDIzMy4wNiBMIDEyOS4yMSAyMzIuMDggTCAxMjkgMjMxLjExIEwgMTI4Ljc3IDIzMC4xNCBMIDEyOC41MSAyMjkuMTggTCAxMjguMjMgMjI4LjIyIEwgMTI3LjkyIDIyNy4yNyBMIDEyNy41OSAyMjYuMzMgTCAxMjcuMjQgMjI1LjQgTCAxMjYuODYgMjI0LjQ3IEwgMTI2LjQ3IDIyMy41NiBMIDEyNi4wNSAyMjIuNjYgTCAxMjUuNiAyMjEuNzcgTCAxMjUuMTQgMjIwLjg4IEwgMTI0LjY1IDIyMC4wMiBMIDEyNC4xNCAyMTkuMTYgTCAxMjMuNjEgMjE4LjMxIEwgMTIzLjA2IDIxNy40OCBMIDEyMi40OSAyMTYuNjcgTCAxMjEuOSAyMTUuODcgTCAxMjEuMjkgMjE1LjA4IEwgMTIwLjY2IDIxNC4zMSBMIDEyMC4wMSAyMTMuNTUgTCAxMTkuMzQgMjEyLjgxIEwgMTE4LjY1IDIxMi4wOSBMIDExNy45NSAyMTEuMzggTCAxMTcuMjMgMjEwLjcgTCAxMTYuNDkgMjEwLjAzIEwgMTE1LjczIDIwOS4zOCBMIDExNC45NiAyMDguNzUgTCAxMTQuMTggMjA4LjEzIEwgMTEzLjM4IDIwNy41NCBMIDExMi41NiAyMDYuOTcgTCAxMTEuNzMgMjA2LjQyIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNzYiIHk9IjI2MiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48dGV4dCB4PSI0NzQiIHk9IjI2MCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48dGV4dCB4PSIyMDAiIHk9IjU4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMjY2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5jID0gQUI8L3RleHQ+PHRleHQgeD0iMTI3IiB5PSIxNTUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmIgPSBBQzwvdGV4dD48dGV4dCB4PSIzNDYiIHk9IjE1NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5hID0gQkM8L3RleHQ+PHRleHQgeD0iMTQwIiB5PSIyMjYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPsOCPC90ZXh0Pjx0ZXh0IHg9IjI2MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPmHCsiA9IGLCsiArIGPCsiDiiJIgMmJjIGNvcyDDgjwvdGV4dD48L3N2Zz4=)
*Dans le triangle ABC, le côté a = BC est opposé à l’angle Â : c’est cet angle qu’on utilise dans la formule d’Al-Kashi.*
<!-- /schema -->

Dans un triangle $\mathrm{ABC}$, en notant $a = \mathrm{BC}$, $b = \mathrm{AC}$,
$c = \mathrm{AB}$ :

$$\boxed{a^2 = b^2 + c^2 - 2bc\,\cos\widehat{\mathrm{A}}}$$

*C'est la généralisation du théorème de Pythagore* : si $\widehat{\mathrm{A}} = \dfrac{\pi}{2}$,
alors $\cos\widehat{\mathrm{A}} = 0$ et on retrouve $a^2 = b^2 + c^2$.

**Démonstration** (exigible au programme) : partir de
$\overrightarrow{\mathrm{BC}} = \overrightarrow{\mathrm{AC}} - \overrightarrow{\mathrm{AB}}$,
puis élever au carré scalaire et développer.

---

## 7. Ensemble des points $\mathrm{M}$ tels que $\overrightarrow{\mathrm{MA}} \cdot \overrightarrow{\mathrm{MB}} = 0$

<!-- schema:cercle-diametre -->
![Un point M du cercle de diamètre AB voit le segment AB sous un angle droit : les vecteurs MA et MB sont orthogonaux, donc leur produit scalaire est nul.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIyNjAiIGN5PSIxNzUiIHI9IjEzNSIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjE1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PGxpbmUgeDE9IjEyNSIgeTE9IjE3NSIgeDI9IjM5NSIgeTI9IjE3NSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzI3LjUiIHkxPSI1OC4wOSIgeDI9IjEzMy42NiIgeTI9IjE3MCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMjUsMTc1IDEzNi4xNiwxNzQuMzMgMTMxLjE2LDE2NS42NyIgZmlsbD0iI2MwMmEyYSIvPjxsaW5lIHgxPSIzMjcuNSIgeTE9IjU4LjA5IiB4Mj0iMzkwIiB5Mj0iMTY2LjM0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM5NSwxNzUgMzk0LjMzLDE2My44NCAzODUuNjcsMTY4Ljg0IiBmaWxsPSIjMWE3ZjRiIi8+PHBhdGggZD0iTSAzMTcuMTEgNjQuMDkgTCAzMjMuMTEgNzQuNDggTCAzMzMuNSA2OC40OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxjaXJjbGUgY3g9IjEyNSIgY3k9IjE3NSIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMTExIiB5PSIxODEiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkE8L3RleHQ+PGNpcmNsZSBjeD0iMzk1IiBjeT0iMTc1IiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI0MDkiIHk9IjE4MSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QjwvdGV4dD48Y2lyY2xlIGN4PSIyNjAiIGN5PSIxNzUiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjI2MCIgeT0iMTk1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JPC90ZXh0PjxjaXJjbGUgY3g9IjMyNy41IiBjeT0iNTguMDkiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjMzMy41IiB5PSI0Ni4wOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TTwvdGV4dD48dGV4dCB4PSIyNjAiIHk9IjI2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5NQSDCtyBNQiA9IDAgIOKfuiAgTSBlc3Qgc3VyIGxlIGNlcmNsZSBkZSBkaWFtw6h0cmUgW0FCXTwvdGV4dD48L3N2Zz4=)
*Un point M du cercle de diamètre AB voit le segment AB sous un angle droit : les vecteurs MA et MB sont orthogonaux, donc leur produit scalaire est nul.*
<!-- /schema -->

### Théorème

L'ensemble des points $\mathrm{M}$ vérifiant
$\overrightarrow{\mathrm{MA}} \cdot \overrightarrow{\mathrm{MB}} = 0$ est le **cercle de
diamètre $[\mathrm{AB}]$**.

*Interprétation* : c'est exactement la propriété « un triangle inscrit dans un demi-cercle est
rectangle », redémontrée avec le produit scalaire.

**Démonstration** (exigible) : en notant $\mathrm{I}$ le milieu de $[\mathrm{AB}]$, on écrit
$\overrightarrow{\mathrm{MA}} = \overrightarrow{\mathrm{MI}} + \overrightarrow{\mathrm{IA}}$ et
$\overrightarrow{\mathrm{MB}} = \overrightarrow{\mathrm{MI}} + \overrightarrow{\mathrm{IB}}
= \overrightarrow{\mathrm{MI}} - \overrightarrow{\mathrm{IA}}$. Le produit devient
$\mathrm{MI}^2 - \mathrm{IA}^2$, nul si et seulement si $\mathrm{MI} = \mathrm{IA}$.

---

## 8. À retenir absolument

| | |
|---|---|
| En coordonnées | $\vec{u} \cdot \vec{v} = xx' + yy'$ |
| Avec l'angle | $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$ |
| Carré scalaire | $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$ |
| Norme | $\|\vec{u}\| = \sqrt{x^2 + y^2}$ |
| Orthogonalité | $\vec{u} \cdot \vec{v} = 0$ |
| Développement | $\|\vec{u}+\vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u}\cdot\vec{v} + \|\vec{v}\|^2$ |
| Al-Kashi | $a^2 = b^2 + c^2 - 2bc\cos\widehat{\mathrm{A}}$ |
| $\overrightarrow{\mathrm{MA}}\cdot\overrightarrow{\mathrm{MB}} = 0$ | cercle de diamètre $[\mathrm{AB}]$ |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire que le produit scalaire est un vecteur.** C'est un **nombre réel**.
2. **Confondre $\vec{u} \cdot \vec{v} = 0$ avec $\vec{u} = \vec{0}$ ou $\vec{v} = \vec{0}$.**
   Deux vecteurs non nuls peuvent avoir un produit scalaire nul — c'est même tout l'intérêt.
3. **Oublier le facteur $2$** dans $\|\vec{u}+\vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u}\cdot\vec{v}
   + \|\vec{v}\|^2$.
4. **Se tromper de signe dans Al-Kashi** : c'est un **moins** $2bc\cos\widehat{\mathrm{A}}$.
5. **Utiliser la formule $xx' + yy'$ dans une base non orthonormée.** Elle n'y est pas valable.
6. **Appliquer Al-Kashi avec le mauvais angle** : l'angle utilisé doit être celui **opposé**
   au côté $a$ qu'on calcule.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Calcul vectoriel et produit scalaire » (ligne 2500 du .txt extrait).

Éléments explicitement lisibles dans l'extraction : bilinéarité, symétrie, expression du
produit scalaire et de la norme en base orthonormée, critère d'orthogonalité, expression des
coordonnées en termes de produits scalaires avec les vecteurs de la base, développement de
‖u+v‖², théorème d'Al-Kashi. Deux DÉMONSTRATIONS exigibles sont nommées : Al-Kashi avec le
produit scalaire, et l'ensemble des points M tels que MA·MB = 0. Approfondissement possible
mentionné : la loi des sinus.
Le programme précise aussi : « Les élèves doivent conserver une pratique du calcul vectoriel
en géométrie non repérée. »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'expression des coordonnées via les produits scalaires avec les vecteurs de la base
  (x = u·i et y = u·j) est au programme — je ne l'ai pas développée, à ajouter.
- La définition retenue en premier par le programme (normes et angle, ou coordonnées ?)
- La loi des sinus est en approfondissement possible : à ajouter ou non selon le choix
  pédagogique.
- Les démonstrations que j'esquisse doivent être rédigées en entier pour être exploitables.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
