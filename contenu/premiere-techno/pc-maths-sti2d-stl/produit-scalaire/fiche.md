---
id: 1sti2d-produit-scalaire
titre: "Produit scalaire"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 13
prerequis:
  - Vecteurs et coordonnées (Seconde)
  - Trigonométrie (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Produit scalaire

> Le produit scalaire est l'outil qui fait entrer **longueurs et angles** dans le
> calcul vectoriel. En STI2D et STL, il a une contrepartie physique immédiate : le
> **travail d'une force** en est exactement un.

---

## 1. Trois expressions équivalentes

On choisit celle qui correspond aux données de l'énoncé.

### a. Avec les normes et l'angle

$$\boxed{\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos\theta}$$

où $\theta$ est l'angle entre les deux vecteurs.

### b. En base orthonormée — l'expression de calcul

Si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ :

$$\boxed{\vec{u} \cdot \vec{v} = xx' + yy'}$$

> ⚠️ **Valable uniquement en repère ORTHONORMÉ.** Le programme précise que les
> situations de géométrie repérée y sont traitées exclusivement.

### c. Par projection orthogonale

<!-- schema:projection-orthogonale -->
![Le vecteur v′, en vert, est le projeté orthogonal de v sur la direction de u : le produit scalaire u · v est égal à ‖u‖ × ‖v′‖ lorsque v′ et u sont de même sens.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNzAiIHkxPSIyMjAiIHgyPSI0NDAiIHkyPSIyMjAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDUwLDIyMCA0NDAsMjE1IDQ0MCwyMjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iNzAiIHkxPSIyMjAiIHgyPSIzMDEuNjgiIHkyPSI2NS41NSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMTAsNjAgMjk4LjkxLDYxLjM5IDMwNC40NSw2OS43MSIgZmlsbD0iI2MwMmEyYSIvPjxsaW5lIHgxPSIzMTAiIHkxPSI2MCIgeDI9IjMxMCIgeTI9IjIyMCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNzAiIHkxPSIyMzYiIHgyPSIzMDAiIHkyPSIyMzYiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMxMCwyMzYgMzAwLDIzMSAzMDAsMjQxIiBmaWxsPSIjMWE3ZjRiIi8+PHBhdGggZD0iTSAyOTggMjIwIEwgMjk4IDIwOCBMIDMxMCAyMDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJNIDEyMCAyMjAgTCAxMTkuOTkgMjE5LjI3IEwgMTE5Ljk4IDIxOC41MyBMIDExOS45NSAyMTcuOCBMIDExOS45MSAyMTcuMDYgTCAxMTkuODcgMjE2LjMzIEwgMTE5LjgxIDIxNS42IEwgMTE5Ljc0IDIxNC44NiBMIDExOS42NSAyMTQuMTMgTCAxMTkuNTYgMjEzLjQgTCAxMTkuNDYgMjEyLjY4IEwgMTE5LjM1IDIxMS45NSBMIDExOS4yMiAyMTEuMjMgTCAxMTkuMDkgMjEwLjUgTCAxMTguOTQgMjA5Ljc4IEwgMTE4Ljc5IDIwOS4wNiBMIDExOC42MiAyMDguMzUgTCAxMTguNDUgMjA3LjYzIEwgMTE4LjI2IDIwNi45MiBMIDExOC4wNiAyMDYuMjIgTCAxMTcuODUgMjA1LjUxIEwgMTE3LjY0IDIwNC44MSBMIDExNy40MSAyMDQuMTEgTCAxMTcuMTcgMjAzLjQyIEwgMTE2LjkyIDIwMi43MiBMIDExNi42NiAyMDIuMDQgTCAxMTYuMzkgMjAxLjM1IEwgMTE2LjExIDIwMC42NyBMIDExNS44MiAyMDAgTCAxMTUuNTMgMTk5LjMyIEwgMTE1LjIyIDE5OC42NiBMIDExNC45IDE5OCBMIDExNC41NyAxOTcuMzQgTCAxMTQuMjMgMTk2LjY5IEwgMTEzLjg4IDE5Ni4wNCBMIDExMy41MyAxOTUuMzkgTCAxMTMuMTYgMTk0Ljc2IEwgMTEyLjc4IDE5NC4xMyBMIDExMi40IDE5My41IEwgMTEyLjAxIDE5Mi44OCBMIDExMS42IDE5Mi4yNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjEzMiIgeT0iMjA1IiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7OuDwvdGV4dD48dGV4dCB4PSI0NzAiIHk9IjIyNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj51PC90ZXh0PjxsaW5lIHgxPSI0NjQuODQiIHkxPSIyMTEuMjgiIHgyPSI0NzIuMTYiIHkyPSIyMTEuMjgiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDc3LjE2LDIxMS4yOCA0NzIuMTYsMjA4Ljc4IDQ3Mi4xNiwyMTMuNzgiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIxOTYiIHk9IjEyOCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj52PC90ZXh0PjxsaW5lIHgxPSIxOTAuODQiIHkxPSIxMTMuMjgiIHgyPSIxOTguMTYiIHkyPSIxMTMuMjgiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjAzLjE2LDExMy4yOCAxOTguMTYsMTEwLjc4IDE5OC4xNiwxMTUuNzgiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIxOTAiIHk9IjI2OCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj52JzwvdGV4dD48bGluZSB4MT0iMTgwLjg0IiB5MT0iMjUzLjI4IiB4Mj0iMTk2LjE2IiB5Mj0iMjUzLjI4IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIwMS4xNiwyNTMuMjggMTk2LjE2LDI1MC43OCAxOTYuMTYsMjU1Ljc4IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMzMwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+cHJvamVjdGlvbjwvdGV4dD48L3N2Zz4=)
*Le vecteur v′, en vert, est le projeté orthogonal de v sur la direction de u : le produit scalaire u · v est égal à ‖u‖ × ‖v′‖ lorsque v′ et u sont de même sens.*
<!-- /schema -->

$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v'}\|$$

où $\vec{v'}$ est le **projeté orthogonal** de $\vec v$ sur la direction de $\vec u$
— au signe près, selon que le projeté est dans le même sens que $\vec u$ ou non.

> **C'est l'interprétation physique** : seule la composante de la force **dans la
> direction du déplacement** travaille.

---

## 2. Le résultat est un NOMBRE

$$\vec{u} \cdot \vec{v} \in \mathbb{R}$$

D'où le nom *scalaire*. Il peut être positif, négatif ou nul.

| Signe | Angle |
|---|---|
| $\vec u \cdot \vec v > 0$ | **aigu** |
| $\vec u \cdot \vec v = 0$ | **droit** |
| $\vec u \cdot \vec v < 0$ | **obtus** |

---

## 3. Carré scalaire et norme

$$\vec{u} \cdot \vec{u} = \|\vec{u}\|^2 \qquad\qquad \|\vec{u}\| = \sqrt{x^2 + y^2}$$

---

## 4. Propriétés

| Propriété | Formule |
|---|---|
| **Symétrie** | $\vec u \cdot \vec v = \vec v \cdot \vec u$ |
| **Bilinéarité** | $\vec u \cdot (\vec v + \vec w) = \vec u\cdot\vec v + \vec u\cdot\vec w$ |
| | $(k\vec u) \cdot \vec v = k(\vec u \cdot \vec v)$ |

Ces propriétés permettent de **développer comme en algèbre** :

$$\boxed{\|\vec u + \vec v\|^2 = \|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2}$$

### Égalité du parallélogramme

$$\|\vec u + \vec v\|^2 + \|\vec u - \vec v\|^2 = 2\left(\|\vec u\|^2 + \|\vec v\|^2\right)$$

---

## 5. Orthogonalité

$$\boxed{\vec u \perp \vec v \iff \vec u \cdot \vec v = 0}$$

> **C'est l'usage numéro un.** Pour démontrer que deux droites sont perpendiculaires,
> on calcule le produit scalaire de deux vecteurs directeurs et on montre qu'il est nul.

> ⚠️ Deux vecteurs **non nuls** peuvent avoir un produit scalaire nul — c'est même
> tout l'intérêt. Contrairement au produit de deux nombres, un produit scalaire nul
> n'impose pas qu'un facteur soit nul.

---

## 6. Calculer un angle, calculer une longueur

### Angle

$$\cos\theta = \frac{\vec u \cdot \vec v}{\|\vec u\| \times \|\vec v\|}$$

### Théorème d'Al-Kashi

<!-- schema:al-kashi -->
![Dans le triangle ABC, le côté a = BC est opposé à l’angle Â : c’est cet angle qu’on utilise dans la formule d’Al-Kashi.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjkwLDI0MCA0NjAsMjQwIDIwMCw3MCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjA3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTMwIDI0MCBMIDEyOS45OSAyMzkgTCAxMjkuOTUgMjM4LjAxIEwgMTI5Ljg5IDIzNy4wMSBMIDEyOS44IDIzNi4wMiBMIDEyOS42OSAyMzUuMDMgTCAxMjkuNTUgMjM0LjA0IEwgMTI5LjM5IDIzMy4wNiBMIDEyOS4yMSAyMzIuMDggTCAxMjkgMjMxLjExIEwgMTI4Ljc3IDIzMC4xNCBMIDEyOC41MSAyMjkuMTggTCAxMjguMjMgMjI4LjIyIEwgMTI3LjkyIDIyNy4yNyBMIDEyNy41OSAyMjYuMzMgTCAxMjcuMjQgMjI1LjQgTCAxMjYuODYgMjI0LjQ3IEwgMTI2LjQ3IDIyMy41NiBMIDEyNi4wNSAyMjIuNjYgTCAxMjUuNiAyMjEuNzcgTCAxMjUuMTQgMjIwLjg4IEwgMTI0LjY1IDIyMC4wMiBMIDEyNC4xNCAyMTkuMTYgTCAxMjMuNjEgMjE4LjMxIEwgMTIzLjA2IDIxNy40OCBMIDEyMi40OSAyMTYuNjcgTCAxMjEuOSAyMTUuODcgTCAxMjEuMjkgMjE1LjA4IEwgMTIwLjY2IDIxNC4zMSBMIDEyMC4wMSAyMTMuNTUgTCAxMTkuMzQgMjEyLjgxIEwgMTE4LjY1IDIxMi4wOSBMIDExNy45NSAyMTEuMzggTCAxMTcuMjMgMjEwLjcgTCAxMTYuNDkgMjEwLjAzIEwgMTE1LjczIDIwOS4zOCBMIDExNC45NiAyMDguNzUgTCAxMTQuMTggMjA4LjEzIEwgMTEzLjM4IDIwNy41NCBMIDExMi41NiAyMDYuOTcgTCAxMTEuNzMgMjA2LjQyIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNzYiIHk9IjI2MiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48dGV4dCB4PSI0NzQiIHk9IjI2MCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48dGV4dCB4PSIyMDAiIHk9IjU4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMjY2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5jID0gQUI8L3RleHQ+PHRleHQgeD0iMTI3IiB5PSIxNTUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmIgPSBBQzwvdGV4dD48dGV4dCB4PSIzNDYiIHk9IjE1NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5hID0gQkM8L3RleHQ+PHRleHQgeD0iMTQwIiB5PSIyMjYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPsOCPC90ZXh0Pjx0ZXh0IHg9IjI2MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPmHCsiA9IGLCsiArIGPCsiDiiJIgMmJjIGNvcyDDgjwvdGV4dD48L3N2Zz4=)
*Dans le triangle ABC, le côté a = BC est opposé à l’angle Â : c’est cet angle qu’on utilise dans la formule d’Al-Kashi.*
<!-- /schema -->

Dans un triangle $\mathrm{ABC}$, avec $a = \mathrm{BC}$, $b = \mathrm{AC}$,
$c = \mathrm{AB}$ :

$$\boxed{a^2 = b^2 + c^2 - 2bc\,\cos\widehat{\mathrm{A}}}$$

> **C'est une généralisation du théorème de Pythagore** — le programme le présente
> explicitement ainsi. Si $\widehat{\mathrm{A}} = 90°$, alors $\cos\widehat{\mathrm{A}} = 0$
> et l'on retrouve $a^2 = b^2 + c^2$.

> ⚠️ L'angle utilisé doit être celui **opposé** au côté $a$ que l'on calcule.

---

## 7. Le lien avec la physique — le travail d'une force

<!-- schema:travail-force -->
![Une force F qui fait un angle α avec le déplacement AB effectue le travail W = F × AB × cos α : seule sa composante dans la direction du déplacement travaille.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjAiIHkxPSIyMDAiIHgyPSI1MjAiIHkyPSIyMDAiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSI2MCIgeT0iMTUwIiB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cmVjdCB4PSI0MDAiIHk9IjE1MCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjUwIiByeD0iNCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM5ZmI2ZDYiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9Ijk1IiB5MT0iMjI1IiB4Mj0iNDI1IiB5Mj0iMjI1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQzNSwyMjUgNDI1LDIyMCA0MjUsMjMwIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iOTUiIHk9IjI0NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48dGV4dCB4PSI0MzUiIHk9IjI0NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48bGluZSB4MT0iMTMwIiB5MT0iMTc1IiB4Mj0iMjUxLjI0IiB5Mj0iMTA1IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNTkuOSwxMDAgMjQ4Ljc0LDEwMC42NyAyNTMuNzQsMTA5LjMzIiBmaWxsPSIjYzAyYTJhIi8+PGxpbmUgeDE9IjEzMCIgeTE9IjE3NSIgeDI9IjMwMCIgeTI9IjE3NSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDE4NSAxNzUgTCAxODUgMTc0LjI4IEwgMTg0Ljk4IDE3My41NiBMIDE4NC45NiAxNzIuODQgTCAxODQuOTIgMTcyLjEyIEwgMTg0Ljg4IDE3MS40IEwgMTg0LjgzIDE3MC42OCBMIDE4NC43NyAxNjkuOTcgTCAxODQuNyAxNjkuMjUgTCAxODQuNjIgMTY4LjU0IEwgMTg0LjUzIDE2Ny44MiBMIDE4NC40MyAxNjcuMTEgTCAxODQuMzIgMTY2LjQgTCAxODQuMjEgMTY1LjY5IEwgMTg0LjA4IDE2NC45OCBMIDE4My45NCAxNjQuMjcgTCAxODMuOCAxNjMuNTYgTCAxODMuNjQgMTYyLjg2IEwgMTgzLjQ4IDE2Mi4xNiBMIDE4My4zMSAxNjEuNDYgTCAxODMuMTMgMTYwLjc2IEwgMTgyLjk0IDE2MC4wNyBMIDE4Mi43NCAxNTkuMzggTCAxODIuNTMgMTU4LjY5IEwgMTgyLjMxIDE1OCBMIDE4Mi4wOCAxNTcuMzIgTCAxODEuODUgMTU2LjY0IEwgMTgxLjYgMTU1Ljk2IEwgMTgxLjM1IDE1NS4yOSBMIDE4MS4wOCAxNTQuNjIgTCAxODAuODEgMTUzLjk1IEwgMTgwLjUzIDE1My4yOSBMIDE4MC4yNSAxNTIuNjMgTCAxNzkuOTUgMTUxLjk3IEwgMTc5LjY0IDE1MS4zMiBMIDE3OS4zMyAxNTAuNjcgTCAxNzkuMDEgMTUwLjAzIEwgMTc4LjY3IDE0OS4zOSBMIDE3OC4zMyAxNDguNzYgTCAxNzcuOTkgMTQ4LjEzIEwgMTc3LjYzIDE0Ny41IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTk2IiB5PSIxNjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPs6xPC90ZXh0Pjx0ZXh0IHg9IjI3MCIgeT0iOTIiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+RjwvdGV4dD48bGluZSB4MT0iMjYzLjcyIiB5MT0iNzcuMjgiIHgyPSIyNzMuMjgiIHkyPSI3Ny4yOCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzguMjgsNzcuMjggMjczLjI4LDc0Ljc4IDI3My4yOCw3OS43OCIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjI2NSIgeT0iMzAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPlcgPSBGIMOXIEFCIMOXIGNvcyDOsTwvdGV4dD48L3N2Zz4=)
*Une force F qui fait un angle α avec le déplacement AB effectue le travail W = F × AB × cos α : seule sa composante dans la direction du déplacement travaille.*
<!-- /schema -->

$$\boxed{W_{\mathrm{AB}}\!\left(\vec F\right) = \vec F \cdot \overrightarrow{\mathrm{AB}}
= F \times \mathrm{AB} \times \cos\alpha}$$

Le travail d'une force **est** un produit scalaire. Trois conséquences directes, que
le programme cite comme illustration :

**1. Une force perpendiculaire au déplacement ne travaille pas.**
$\cos 90° = 0$, donc $W = 0$. Le poids d'un objet déplacé horizontalement effectue un
travail **nul**.

**2. Le travail de la force résultante est la somme des travaux.**
C'est exactement la **bilinéarité** :
$$\left(\vec{F_1} + \vec{F_2}\right) \cdot \overrightarrow{\mathrm{AB}}
= \vec{F_1} \cdot \overrightarrow{\mathrm{AB}} + \vec{F_2} \cdot \overrightarrow{\mathrm{AB}}$$

**3. Le signe indique l'effet.**

| Signe de $W$ | Nature | Effet |
|---|---|---|
| $W > 0$ | moteur | accélère |
| $W < 0$ | résistant | freine |
| $W = 0$ | — | aucun effet sur la vitesse |

---

## 8. À retenir absolument

| | |
|---|---|
| En coordonnées | $\vec u \cdot \vec v = xx' + yy'$ (repère **orthonormé**) |
| Avec l'angle | $\|\vec u\|\,\|\vec v\|\cos\theta$ |
| Nature du résultat | un **nombre réel** |
| Orthogonalité | produit scalaire **nul** |
| Développement | $\|\vec u+\vec v\|^2 = \|\vec u\|^2 + 2\vec u\cdot\vec v + \|\vec v\|^2$ |
| Al-Kashi | $a^2 = b^2 + c^2 - 2bc\cos\widehat{\mathrm{A}}$ |
| Travail d'une force | $W = \vec F \cdot \overrightarrow{\mathrm{AB}}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire que le produit scalaire est un vecteur.** C'est un nombre.
2. **Conclure qu'un vecteur est nul** parce que le produit scalaire l'est.
3. **Oublier le facteur $2$** dans $\|\vec u+\vec v\|^2$.
4. **Se tromper de signe dans Al-Kashi** : c'est un **moins** $2bc\cos\widehat{\mathrm{A}}$.
5. **Utiliser $xx' + yy'$ dans un repère non orthonormé.**
6. **Croire qu'une force perpendiculaire au déplacement travaille.**
7. **Prendre le mauvais angle dans Al-Kashi** : il doit être opposé au côté cherché.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Géométrie dans le plan — Produit scalaire ».

⚠️ MÉTHODE : fiche construite sur l'UNION de deux extractions du PDF. Voir la note de
la fiche « energie ».

Éléments explicitement lisibles :
- « si [u] ou [v] est nul, alors [le produit scalaire est nul] »
- « Interprétation du produit scalaire en termes de PROJECTIONS ORTHOGONALES (du
  vecteur [u] ou du vecteur [v]) » — d'où la section 1c
- « Propriétés du produit scalaire : bilinéarité, symétrie »
- « Expressions, dans une base orthonormée, du produit scalaire de deux vecteurs, de
  la [norme] »
- « [Théorème d'Al-]Kashi, ÉGALITÉ DU PARALLÉLOGRAMME »
- Capacités : « Interpréter en termes de projection », « Utiliser un produit scalaire
  pour démontrer [une orthogonalité,] calculer un angle non orienté », « Utiliser un
  produit scalaire pour calculer des longueurs »
- Commentaires : « Les situations de géométrie repérée sont traitées UNIQUEMENT dans
  un repère orthonormé » ; « [Al-]Kashi est présenté comme une GÉNÉRALISATION DU
  THÉORÈME DE PYTHAGORE »
- Lien avec la physique-chimie, cité tel quel : « [le travail d'une] force
  perpendiculaire à la trajectoire est nul ou encore que le travail de la force
  résultante est la somme des travaux des forces en présence (illustration de la
  propriété de BILINÉARITÉ du produit scalaire) » — la section 7 reprend exactement
  ces deux illustrations.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'ensemble des points M tels que MA·MB = 0 (cercle de diamètre [AB]) est-il au
  programme ici ? Je ne l'ai PAS traité, faute de trace dans l'extraction — alors
  qu'il figure au programme de première générale.
- L'expression du produit scalaire avec le vecteur normal d'une droite est-elle
  attendue ?
- La formule de l'égalité du parallélogramme est nommée par le programme : est-elle
  exigible en tant que telle, ou seulement citée ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
