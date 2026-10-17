---
id: 1si-mecanique-des-solides
titre: "Mécanique des solides (statique)"
voie: generale
niveau: premiere
parcours: si
matiere: si
programme: "Première — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 16
prerequis:
  - Notion de force et de poids (Seconde/physique)
  - Trigonométrie de base (sinus, cosinus)
statut: brouillon
relu_par: null
---

# Mécanique des solides (statique)

> La statique étudie les solides **à l'équilibre** : immobiles, ou en mouvement
> rectiligne uniforme. Elle permet de dimensionner une structure (pont, potence, bras de
> robot) en garantissant qu'elle ne se déplacera ni ne basculera sous les
> efforts. Deux outils suffisent : la **force** et le **moment**.

---

## 1. Modéliser une action mécanique : la force

Une **action mécanique** est modélisée par une **force**, représentée par un
**vecteur** possédant :

- un **point d'application** (où la force s'exerce) ;
- une **direction** (la droite d'action) ;
- un **sens** ;
- une **intensité** (ou **norme**), en **newtons (N)**.

Exemple fondamental : le **poids** d'un objet de masse **m** est
**P = m × g**, avec **g ≈ 9,81 N/kg** (souvent arrondi à 10 N/kg). Il s'applique
au **centre de gravité** G, dirigé **verticalement vers le bas**.

Ainsi une masse de **2 kg** a un poids **P = 2 × 9,81 ≈ 19,6 N**.

---

## 2. Le principe fondamental de la statique (PFS)

Un solide est en **équilibre** si deux conditions sont réunies :

1. **la somme (résultante) de toutes les forces est nulle** :
   **Σ F⃗ = 0⃗** (les forces se compensent) ;
2. **la somme des moments de toutes les forces, en un point, est nulle** :
   **Σ M = 0** (les rotations se compensent).

Cas particulier utile — un solide **soumis à deux forces** est en équilibre si et
seulement si ces forces ont **même droite d'action, même intensité et des sens
opposés** (elles sont directement opposées).

---

## 3. Le moment d'une force

<!-- schema:moment-cle -->
![Une force de 50 N appliquée perpendiculairement à 0,30 m de l'axe crée un moment M = F × d = 15 N·m.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMTAiIHk9Ijk4IiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiNkZmU3ZjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48cG9seWdvbiBwb2ludHM9IjEzNiwxMTAgMTIzLDEzMi41MiA5NywxMzIuNTIgODQsMTEwIDk3LDg3LjQ4IDEyMyw4Ny40OCIgZmlsbD0iI2M3ZDNlMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjExMCIgY3k9IjExMCIgcj0iNSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjExMCIgeT0iNzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmF4ZSBkZSByb3RhdGlvbjwvdGV4dD48bGluZSB4MT0iNDEwIiB5MT0iMTA2IiB4Mj0iNDEwIiB5Mj0iMTgwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MTAsMTkwIDQxNSwxODAgNDA1LDE4MCIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjQyMiIgeT0iMTg0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPkYgPSA1MCBOPC90ZXh0PjxsaW5lIHgxPSIxMTAiIHkxPSIxNDAiIHgyPSIxMTAiIHkyPSIyMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDEwIiB5MT0iMTk2IiB4Mj0iNDEwIiB5Mj0iMjI4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMiIgeTE9IjIyMCIgeDI9IjQwMiIgeTI9IjIyMCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MTAsMjIwIDQwMiwyMTYgNDAyLDIyNCIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI0MDgiIHkxPSIyMjAiIHgyPSIxMTgiIHkyPSIyMjAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDIyMCAxMTgsMjI0IDExOCwyMTYiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIyNjAiIHk9IjIxMiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZCA9IDAsMyBtIChicmFzIGRlIGxldmllcik8L3RleHQ+PHBhdGggZD0iTSAxNTQgNzYgQSA1NiA1NiAwIDAgMSAxNjAgMTM2IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMi40Ii8+PHBvbHlnb24gcG9pbnRzPSIxNjAsMTQ0IDE1MywxMzIgMTY2LDEzMSIgZmlsbD0iIzdhM2ZiMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjx0ZXh0IHg9IjMwMCIgeT0iMjY0IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5NID0gRiDDlyBkID0gNTAgw5cgMCwzID0gMTUgTsK3bTwvdGV4dD48L3N2Zz4=)
*Une force de 50 N appliquée perpendiculairement à 0,30 m de l'axe crée un moment M = F × d = 15 N·m.*
<!-- /schema -->

Une force ne fait pas que pousser : elle peut aussi faire **tourner**. Cet effet
de rotation autour d'un point (ou d'un axe) se mesure par le **moment**.

Pour une force **F** perpendiculaire au bras de levier :

**M = F × d**

où **d** est la **distance** (bras de levier) entre l'axe de rotation et la
droite d'action de la force. Unité : le **newton-mètre (N·m)**.

- Le moment est **grand** si la force est loin de l'axe : c'est le principe du
  **levier** et de la **clé longue** ;
- on affecte un **signe** au moment selon le sens de rotation (par convention,
  positif dans le sens trigonométrique).

Exemple : une force de **50 N** appliquée à **0,30 m** de l'axe crée un moment
**M = 50 × 0,30 = 15 N·m**.

---

## 4. Le théorème du levier (bras de balance)

<!-- schema:levier-balancoire -->
![La balançoire de l'exemple, à l'échelle : l'enfant (300 N à 1,2 m) équilibre l'adulte (600 N à 0,6 m) car les deux moments valent 360 N·m.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMjk2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIyOTYiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMCIgeT0iMTQzIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjE0IiByeD0iNCIgZmlsbD0iI2U4ZDNiMCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTVhMWEiIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5Z29uIHBvaW50cz0iMzEwLDE1NyAyODgsMTk2IDMzMiwxOTYiIGZpbGw9IiNjN2QzZTAiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSIzMTAiIGN5PSIxNTAiIHI9IjUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIzMzgiIHk9IjE5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5heGU8L3RleHQ+PGxpbmUgeDE9IjcwIiB5MT0iOTYiIHgyPSI3MCIgeTI9IjEzMiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNzAsMTQyIDc1LDEzMiA2NSwxMzIiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSI3MCIgeT0iODYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmVuZmFudCA6IEbigoEgPSAzMDAgTjwvdGV4dD48bGluZSB4MT0iNDMwIiB5MT0iNDgiIHgyPSI0MzAiIHkyPSIxMzIiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQzMCwxNDIgNDM1LDEzMiA0MjUsMTMyIiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iNDMwIiB5PSIzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YWR1bHRlIDogRuKCgiA9IDYwMCBOPC90ZXh0PjxsaW5lIHgxPSI3MiIgeTE9IjIxNCIgeDI9IjMwMyIgeTI9IjIxNCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMTAsMjE0IDMwMywyMTAuNSAzMDMsMjE3LjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMzA4IiB5MT0iMjE0IiB4Mj0iNzciIHkyPSIyMTQiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNzAsMjE0IDc3LDIxNy41IDc3LDIxMC41IiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMTkwIiB5PSIyMzIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmTigoEgPSAxLDIgbTwvdGV4dD48bGluZSB4MT0iMzEyIiB5MT0iMjE0IiB4Mj0iNDIzIiB5Mj0iMjE0IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQzMCwyMTQgNDIzLDIxMC41IDQyMywyMTcuNSIgZmlsbD0iI2MyNWUwMCIvPjxsaW5lIHgxPSI0MjgiIHkxPSIyMTQiIHgyPSIzMTciIHkyPSIyMTQiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzEwLDIxNCAzMTcsMjE3LjUgMzE3LDIxMC41IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iMzcwIiB5PSIyMzIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmTigoIgPSAwLDYgbTwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjI2NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RuKCgSDDlyBk4oKBID0gMzAwIMOXIDEsMiA9IDM2MCAgIGV0ICAgRuKCgiDDlyBk4oKCID0gNjAwIMOXIDAsNiA9IDM2MDwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjI4NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj5sZXMgbW9tZW50cyBzZSBjb21wZW5zZW50IDogw6lxdWlsaWJyZSAoZGVzc2luIMOgIGzigJnDqWNoZWxsZSk8L3RleHQ+PC9zdmc+)
*La balançoire de l'exemple, à l'échelle : l'enfant (300 N à 1,2 m) équilibre l'adulte (600 N à 0,6 m) car les deux moments valent 360 N·m.*
<!-- /schema -->

Un solide en rotation autour d'un axe est en équilibre si les moments qui le font
tourner dans un sens **compensent** ceux qui le font tourner dans l'autre :

**F₁ × d₁ = F₂ × d₂**

C'est la loi de la **balance à fléau**, de la **balançoire** et du
**pied-de-biche**. Elle explique pourquoi une petite force sur un grand bras
équilibre une grande force sur un petit bras.

Exemple : sur une balançoire, un enfant de poids **300 N** assis à **1,2 m** de
l'axe équilibre un adulte de poids **600 N** assis à **d₂** si **600 × d₂ = 300 × 1,2**, soit
**d₂ = 360 / 600 = 0,6 m**.

---

## 5. Décomposer une force et projeter

<!-- schema:projection-force -->
![Une force F inclinée d'un angle α sur l'horizontale se décompose en une composante horizontale Fx et une composante verticale Fy.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTAwIiB5MT0iMjYwIiB4Mj0iNDUyIiB5Mj0iMjYwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ2MCwyNjAgNDUyLDI1NiA0NTIsMjY0IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjEyMCIgeTE9IjI4MCIgeDI9IjEyMCIgeTI9IjY4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEyMCw2MCAxMTYsNjggMTI0LDY4IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNDY0IiB5PSIyNzgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCB4PSIxMDYiIHk9IjY0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+PGxpbmUgeDE9IjM0NS4xNyIgeTE9IjI2MCIgeDI9IjM0NS4xNyIgeTI9IjEzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTIwIiB5MT0iMTMwIiB4Mj0iMzQ1LjE3IiB5Mj0iMTMwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMjAiIHkxPSIyNjAiIHgyPSIzMzUuMTciIHkyPSIyNjAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM0NS4xNywyNjAgMzM1LjE3LDI1NSAzMzUuMTcsMjY1IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjEyMCIgeTE9IjI2MCIgeDI9IjEyMCIgeTI9IjE0MCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTIwLDEzMCAxMTUsMTQwIDEyNSwxNDAiIGZpbGw9IiMxYTdmNGIiLz48bGluZSB4MT0iMTIwIiB5MT0iMjYwIiB4Mj0iMzM2LjUxIiB5Mj0iMTM1IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM0NS4xNywxMzAgMzM0LjAxLDEzMC42NyAzMzkuMDEsMTM5LjMzIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjQ2LjU4IiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc3R5bGU9Iml0YWxpYyI+RjwvdGV4dD48dGV4dCB4PSIyMzIuNTgiIHk9IjI4NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RnggPSBGIMOXIGNvcyDOsTwvdGV4dD48dGV4dCB4PSIxMTAiIHk9IjIwMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+RnkgPSBGIMOXIHNpbiDOsTwvdGV4dD48cGF0aCBkPSJNIDE3NiAyNjAgQSA1NiA1NiAwIDAgMCAxNjguNSAyMzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTg3LjYxIiB5PSIyNDYuODgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPs6xPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iMjIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+ZGVzc2luIGF2ZWMgzrEgPSAzMMKwPC90ZXh0Pjwvc3ZnPg==)
*Une force F inclinée d'un angle α sur l'horizontale se décompose en une composante horizontale Fx et une composante verticale Fy.*
<!-- /schema -->

Quand une force est **inclinée**, on la **projette** sur deux axes
perpendiculaires (horizontal x, vertical y) à l'aide de la trigonométrie. Pour
une force **F** faisant un angle **α** avec l'horizontale :

- composante horizontale : **Fx = F × cos α** ;
- composante verticale : **Fy = F × sin α**.

Cette décomposition est indispensable pour appliquer le PFS quand les forces ne
sont pas toutes verticales ou horizontales (plan incliné, câble oblique,
haubanage). On projette **Σ F⃗ = 0⃗** sur chaque axe :
**Σ Fx = 0** et **Σ Fy = 0**.

---

## Ce qu'il faut retenir

- Une **force** (vecteur, en newtons) a un point d'application, une direction, un
  sens et une intensité ; le **poids** vaut **P = m × g** (g ≈ 9,81 N/kg).
- Un solide est en **équilibre** si **Σ F⃗ = 0⃗** ET **Σ M = 0** (PFS).
- Le **moment** d'une force mesure son effet de rotation : **M = F × d** (en N·m),
  d = bras de levier.
- **Théorème du levier** : équilibre si **F₁ × d₁ = F₂ × d₂**.
- Une force inclinée se **projette** : **Fx = F cos α**, **Fy = F sin α**.

## Les erreurs à éviter

- **Confondre masse et poids** : la masse (kg) est propre au corps et ne dépend pas du lieu ; le
  poids (N) est une force, P = m × g.
- **Oublier le bras de levier** : le moment dépend de la **distance** à l'axe,
  pas seulement de l'intensité de la force.
- **Additionner des forces sans tenir compte de leur direction** : il faut
  d'abord les **projeter** sur des axes.
- **Ne vérifier qu'une seule condition** : l'équilibre exige **forces nulles ET
  moments nuls**, pas l'une sans l'autre.
