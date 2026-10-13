---
id: 5e-math-transformations
titre: "Transformations : symétrie axiale et demi-tour"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Symétrie axiale (6e)
  - Milieu d'un segment (6e)
  - Médiatrice d'un segment (6e-5e)
  - Report de longueurs au compas (6e)
statut: brouillon
relu_par: null
---

# Transformations : symétrie axiale et demi-tour

> Transformer une figure, c'est la déplacer selon une règle précise. Le plus
> intéressant n'est pas ce qui change — c'est ce qui **ne change pas** : les
> longueurs, les angles, les aires. Ce sont ces **invariants** qui te permettront
> de démontrer.

Cette année, deux transformations : la **symétrie axiale**, que tu connais déjà, et une nouveauté, le **demi-tour**.

---

## 1. Rappel : la symétrie axiale

<!-- schema:symetrie-axiale -->
![Avec un axe oblique (d) : M′ est le symétrique de M car (d) coupe le segment MM′ perpendiculairement en son milieu H ; le triangle A′B′C′ est l’image de ABC.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjUyLjEyIiB5MT0iMjkxLjU2IiB4Mj0iMzQ3Ljg4IiB5Mj0iMjguNDQiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzNTYuNDYiIHk9IjQ1Ljg0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPihkKTwvdGV4dD48bGluZSB4MT0iMTkwIiB5MT0iMjI1IiB4Mj0iMzQyLjQ4IiB5Mj0iMjgwLjUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAyNzAgMjQyLjQxIEwgMjgwLjM0IDI0Ni4xOCBMIDI3Ni41OCAyNTYuNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iMjI4LjY0IiB5MT0iMjMxLjYxIiB4Mj0iMjI3LjYxIiB5Mj0iMjQ2LjE0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzA0Ljg4IiB5MT0iMjU5LjM2IiB4Mj0iMzAzLjg1IiB5Mj0iMjczLjg5IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxOTAiIGN5PSIyMjUiIHI9IjMuMiIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNzYiIHk9IjIzMSIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48Y2lyY2xlIGN4PSIzNDIuNDgiIGN5PSIyODAuNSIgcj0iMy4yIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjM1OC40OCIgeT0iMjg2LjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjI2Mi4yNCIgeT0iMjc0Ljc1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5IPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMTUwLDcwIDIzMCw1MCAyMDAsMTMwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMTUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ3Mi43NiwxODcuNDcgNDI0LjMzLDEyMC43MyAzOTUuODksMjAxLjMiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxMzgiIHk9IjYyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyNDAiIHk9IjQyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxODgiIHk9IjE0NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDg2Ljc2IiB5PSIxODEuNDciIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkHigLI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQzOC4zMyIgeT0iMTE0LjczIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5C4oCyPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0MDkuODkiIHk9IjIxMy4zIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5D4oCyPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMzA2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oZCkgZXN0IGxhIG3DqWRpYXRyaWNlIGRlIFtNTeKAsl0gOiBtw6ptZSBkaXN0YW5jZSwgYW5nbGUgZHJvaXQ8L3RleHQ+PC9zdmc+)
*Avec un axe oblique (d) : M′ est le symétrique de M car (d) coupe le segment MM′ perpendiculairement en son milieu H ; le triangle A′B′C′ est l’image de ABC.*
<!-- /schema -->

Elle se fait par rapport à une **droite**, appelée l'**axe**. Le symétrique d'un
point $M$ par rapport à un axe $(d)$ est le point $M'$ tel que :

$$\boxed{(d) \text{ est la médiatrice de } [MM']}$$

Autrement dit : $(d)$ coupe $[MM']$ en son **milieu** et **perpendiculairement**.

> **Le geste à retenir.** C'est le pliage. Si tu plies la feuille le long de $(d)$,
> $M$ tombe exactement sur $M'$.

### Construire, sur quadrillage

Compte les carreaux qui séparent le point de l'axe, puis reporte le même nombre
de l'autre côté.

> **Exemple.** Axe vertical, $M$ à $3$ carreaux à gauche : $M'$ est à $3$ carreaux
> à **droite** de l'axe, sur la **même** ligne.

Tu dois savoir le faire avec un axe **vertical**, **horizontal**, mais aussi
**en diagonale** — c'est le cas qui piège le plus.

### Construire, sur feuille blanche

1. Trace la perpendiculaire à $(d)$ passant par $M$.
2. Appelle $H$ le point où elle coupe $(d)$.
3. Reporte la longueur $HM$ de l'autre côté de $H$, sur cette perpendiculaire.

> **Cas particulier.** Un point **posé sur l'axe** ne bouge pas : il est son propre
> symétrique.

Pour une **figure**, construis le symétrique de chaque point important (sommets,
centre d'un cercle), puis relie.

---

## 2. Le demi-tour, ou symétrie centrale

<!-- schema:demi-tour -->
![Par le demi-tour de centre O, M a pour image M′, O étant le milieu du segment MM′ ; le triangle ABC est tourné de 180° autour de O.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTIwIiB5MT0iNzAiIHgyPSI0ODAiIHkyPSIyMTAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIxMCIgeTE9IjYwIiB4Mj0iMzkwIiB5Mj0iMjIwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNzAiIHkxPSIxMjAiIHgyPSI0MzAiIHkyPSIxNjAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMjAsNzAgMjEwLDYwIDE3MCwxMjAiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDgwLDIxMCAzOTAsMjIwIDQzMCwxNjAiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSIxNzAiIHkxPSIyMDAiIHgyPSI0MzAiIHkyPSI4MCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjMwLjI1IiB5MT0iMTY0LjQ4IiB4Mj0iMjM5Ljc1IiB5Mj0iMTc1LjUyIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzYwLjI1IiB5MT0iMTA0LjQ4IiB4Mj0iMzY5Ljc1IiB5Mj0iMTE1LjUyIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxNzAiIGN5PSIyMDAiIHI9IjMuMiIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNTYiIHk9IjIwOCIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48Y2lyY2xlIGN4PSI0MzAiIGN5PSI4MCIgcj0iMy4yIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQ0NiIgeT0iODQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTQwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzA0IiB5PSIxNjQiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk88L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjExMCIgeT0iNjIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjIwMCIgeT0iNTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjE2MCIgeT0iMTM4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0OTIiIHk9IjIyNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QeKAsjwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDAyIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkLigLI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQ0MiIgeT0iMTQ4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5D4oCyPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjg2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PIGVzdCBsZSBtaWxpZXUgZGUgW01N4oCyXSA6IHVuIGRlbWktdG91ciAoMTgwwrApIGF1dG91ciBkZSBPPC90ZXh0Pjwvc3ZnPg==)
*Par le demi-tour de centre O, M a pour image M′, O étant le milieu du segment MM′ ; le triangle ABC est tourné de 180° autour de O.*
<!-- /schema -->

C'est la nouveauté de cette année. Elle se fait non plus par rapport à une droite,
mais par rapport à un **point**, appelé le **centre**.

### Définition

Soit $O$ un point du plan et $M$ un point différent de $O$. L'image de $M$ par le
demi-tour de centre $O$ est le point $M'$ tel que :

$$\boxed{O \text{ est le milieu de } [MM']}$$

Et l'image de $O$ est $O$ **lui-même**.

> **Le geste à retenir.** C'est le demi-tour au sens propre : pique en $O$ et fais
> tourner la figure d'un **demi-tour**, c'est-à-dire de $180°$ (un tour complet
> vaut $360°$). Tu retrouves la figure image.

> **Autre nom.** Le programme t'apprend le mot **demi-tour** et te dit que c'est la
> même chose que la **symétrie centrale**. Deux mots, une seule transformation.

### Ce que la définition impose

Dire que $O$ est le milieu de $[MM']$, c'est dire **deux** choses à la fois :
$M$, $O$, $M'$ sont **alignés**, et $OM' = OM$. Si tu ne respectes qu'une des
deux conditions, ton point est faux.

---

## 3. Méthode : construire l'image par un demi-tour

### Un point, sur feuille blanche

1. Trace la demi-droite $[MO)$ — attention, elle **traverse** $O$ et continue au-delà.
2. Reporte la longueur $OM$ à partir de $O$, sur cette demi-droite, de l'autre côté.
3. Le point obtenu est $M'$.

### Un point, sur quadrillage

Compte le déplacement de $M$ jusqu'à $O$, puis **continue le même déplacement**
au-delà de $O$.

> **Exemple.** De $M$ à $O$ : $2$ carreaux à droite et $1$ vers le haut. Alors de
> $O$ à $M'$ : tu refais $2$ carreaux à droite et $1$ vers le haut.

### Une figure

Construis l'image de chaque **point clé**, puis relie dans le même ordre.

| Figure | Ce qu'il suffit de construire |
|---|---|
| Segment $[AB]$ | les images $A'$ et $B'$ des deux extrémités |
| Triangle | les images des trois sommets |
| Cercle de centre $C$ et de rayon $r$ | l'image $C'$ du centre ; le rayon reste $r$ |

---

## 4. Les propriétés du demi-tour

Chaque propriété sert à **construire**, mais aussi à **démontrer**.

### Il conserve les longueurs

Si $A'$ et $B'$ sont les images de $A$ et $B$, alors $A'B' = AB$.

> **Exemple.** $[AB]$ mesure $5{,}2$ cm : son image aussi, sans aucun calcul.

### Il conserve les mesures d'angles

> **Exemple.** L'image d'un angle de $47°$ est un angle de $47°$. Donc l'image d'un
> triangle rectangle est un triangle rectangle.

### Il conserve les aires

> **Exemple.** Un triangle d'aire $12$ cm² a pour image un triangle d'aire $12$ cm².
> C'est ce qui rend le demi-tour utile dans les preuves par les aires.

### Il conserve l'alignement

> **Exemple.** Si $A$, $B$, $C$ sont alignés, $A'$, $B'$, $C'$ le sont aussi.
> L'image d'une droite est donc bien une **droite**.

### L'image d'une droite lui est parallèle

C'est **la** propriété qui distingue le demi-tour de la symétrie axiale.

$$\boxed{\text{L'image d'une droite par un demi-tour est une droite parallèle}}$$

> **Exemple.** L'image de $[AB]$ est un segment $[A'B']$ **à la fois** de même
> longueur que $[AB]$ **et** parallèle à $(AB)$.

### Il ne retourne pas la figure

La figure image est tournée, pas retournée : elle se lit dans le même sens.

> **Comparaison.** Ta main droite dans un miroir devient une main gauche — ça, c'est
> la symétrie axiale. Après un demi-tour, ta main droite reste une main droite.

### Le refaire deux fois ne sert à rien

$M$ donne $M'$ ; $M'$ redonne $M$. Deux demi-tours font un tour complet.

---

## 5. Cas particuliers et pièges

### Les points qui ne bougent pas

| Transformation | Points invariants |
|---|---|
| Symétrie axiale d'axe $(d)$ | **tous** les points de $(d)$ |
| Demi-tour de centre $O$ | **le seul** point $O$ |

### Les droites qui reviennent sur elles-mêmes

Une droite qui **passe par $O$** a pour image elle-même : ses points glissent le
long d'elle, mais la droite, dans son ensemble, ne change pas.

### Le piège du parallélisme

Par un **demi-tour**, l'image d'une droite lui est **toujours** parallèle. Par une
**symétrie axiale**, c'est **faux** en général : dès qu'une droite est « de travers »
par rapport à l'axe, son image la **coupe**.

### Un centre de symétrie que tu connais déjà

Dans un parallélogramme, les diagonales se coupent en leur milieu. Ce point de
croisement est donc le centre d'un demi-tour qui envoie la figure sur elle-même.

---

## 6. Tableau récapitulatif

<!-- schema:retournee-ou-tournee -->
![La symétrie axiale retourne le drapeau comme un miroir ; le demi-tour le fait tourner de 180° sans le retourner.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTQwIiB5MT0iNDAiIHgyPSIxNDAiIHkyPSIyMDAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTAsNzAgOTQsODQgNTAsOTgiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjE1MCIgeDI9IjUwIiB5Mj0iNzAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIzMCw3MCAxODYsODQgMjMwLDk4IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMjMwIiB5MT0iMTUwIiB4Mj0iMjMwIiB5Mj0iNzAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTAiIHk9IjE3MSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMjMwIiB5PSIxNzEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnN5bcOpdHJpZSBheGlhbGU8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyNTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZpZ3VyZSByZXRvdXJuw6llPC90ZXh0PjxjaXJjbGUgY3g9IjQ0MCIgY3k9IjEyMCIgcj0iMy4yIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQ1MiIgeT0iMTE0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5PPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMzUwLDcwIDM5NCw4NCAzNTAsOTgiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTAiIHkxPSIxNTAiIHgyPSIzNTAiIHkyPSI3MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTMwLDE3MCA0ODYsMTU2IDUzMCwxNDIiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI1MzAiIHkxPSI5MCIgeDI9IjUzMCIgeTI9IjE3MCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzNTAiIHk9IjE3MSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTMwIiB5PSI3OSIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TeKAsjwvdGV4dD48dGV4dCB4PSI0NTAiIHk9IjIzNiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZGVtaS10b3VyPC90ZXh0Pjx0ZXh0IHg9IjQ1MCIgeT0iMjU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5maWd1cmUgdG91cm7DqWUgZGUgMTgwwrA8L3RleHQ+PGxpbmUgeDE9IjMwMCIgeTE9IjIwIiB4Mj0iMzAwIiB5Mj0iMjUwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=)
*La symétrie axiale retourne le drapeau comme un miroir ; le demi-tour le fait tourner de 180° sans le retourner.*
<!-- /schema -->

| | Symétrie axiale | Demi-tour (symétrie centrale) |
|---|---|---|
| Par rapport à | une **droite** (l'axe) | un **point** (le centre) |
| Définition | l'axe est la **médiatrice** de $[MM']$ | $O$ est le **milieu** de $[MM']$ |
| Geste | pliage | demi-tour ($180°$) autour de $O$ |
| Points invariants | tous ceux de l'axe | seulement $O$ |
| Longueurs, angles, aires | conservés | conservés |
| Alignement | conservé | conservé |
| Image d'une droite | droite, **pas** parallèle en général | droite **parallèle** |
| Sens de lecture | **retourné** | **conservé** |

---

## 7. Les erreurs qui coûtent des points

1. **Placer $M'$ du même côté que $M$.** Le demi-tour fait *traverser* le centre.
   Si $M$ et $M'$ sont du même côté de $O$, $O$ n'est pas le milieu de $[MM']$ :
   c'est faux.
2. **Aligner sans mesurer, ou mesurer sans aligner.** Les deux conditions vont
   ensemble. Et $OM' = OM$ est une **égalité** : utilise le compas, pas ton œil.
3. **Oublier que $O$ est sa propre image.** Si le centre est un sommet de la figure,
   ce sommet ne bouge pas — beaucoup d'élèves le déplacent quand même.
4. **Croire que l'image d'une droite est parallèle dans les deux transformations.**
   C'est vrai pour le demi-tour, **faux** pour la symétrie axiale.
5. **Traiter le demi-tour comme un miroir.** Il ne retourne pas la figure. Si ton
   dessin ressemble à un reflet, tu as fait une symétrie axiale.
6. **Refaire tout le cercle point par point.** L'image du centre suffit : le rayon
   ne change pas.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie »,
section « Cinquième », entrée « Transformations », lignes 696-707 (intro du thème :
lignes 645-666).

TOUT le contenu de l'entrée, littéralement. Automatismes : « Reconnaitre et
construire le symétrique d'une figure par symétrie axiale, dont l'axe est vertical,
horizontal, ou en diagonale sur quadrillage. » / « Construire le symétrique, par
rapport à un axe, d'un point, d'une figure, sur feuille blanche. » — Objectifs :
« Définir le demi-tour, ou symétrie centrale. » / « Connaitre les propriétés du
demi-tour. » — Prolongements : rosaces et pavages du Moyen Âge ; flocon, alvéoles.

PÉRIMÈTRE — vérifié, texte NON ambigu. La 5e ne comporte que deux transformations :
symétrie axiale (en automatisme, donc réactivation des acquis de 6e) et demi-tour /
symétrie centrale (seul objectif nouveau). Recherche faite sur tout le fichier :
- TRANSLATION : apparait seulement en 4e (« Parallélogrammes et translations »,
  lignes 779-793) et en 3e (« Translations et vecteurs », lignes 849-856).
- ROTATION (autre que le demi-tour) et HOMOTHÉTIE : AUCUNE occurrence dans tout le
  programme de cycle 4.
Aucune des trois n'est traitée ici. Le demi-tour reparait en automatisme en 4e
(lignes 758 et 781-784) : notion bien installée en 5e, cohérent. NB : le mot
« rotation » est évité dans la fiche, la rotation générale n'étant pas au programme.

À TRANCHER PAR LE RELECTEUR
1. PRINCIPAL — « Connaitre les propriétés du demi-tour » : le BO ne les LISTE PAS.
   La section 4 est mon interprétation du niveau d'exigence de 5e (conservation des
   longueurs, angles, aires, alignement ; image d'une droite parallèle ; conservation
   du sens ; involution). Deux doutes précis : (a) la conservation des AIRES est-elle
   exigible ? Incluse parce que l'intro du thème (lignes 661-664) fait des « preuves
   utilisant les aires » un fil rouge et insiste sur « l'identification
   d'invariants ». (b) L'involution est-elle attendue, ou hors-programme ?
2. VOCABULAIRE : le BO écrit « le demi-tour, ou symétrie centrale », dans cet ordre.
   « Demi-tour » est donc le terme principal ici, à rebours de l'usage des manuels.
3. Section 5, lien avec le parallélogramme : de moi. Les deux notions sont en 5e
   (entrée « Parallélogrammes », lignes 740-753), mais le BO ne relie explicitement
   transformations et parallélogrammes qu'en 4e (ligne 790). À retirer si c'est jugé
   anticiper. Même remarque pour la notion de « centre de symétrie d'une figure »,
   non nommée en 5e : je ne l'ai pas érigée en section, seulement évoquée.
4. Section 5, image d'une droite par symétrie axiale : le cas d'une droite
   PERPENDICULAIRE à l'axe (image = elle-même) est volontairement passé sous
   silence, jugé trop subtil pour la 5e. À valider.
5. Médiatrice : automatisme de 5e (ligne 723), mais cette fiche la suppose déjà vue
   — vérifier la progression annuelle. Enfin, les prolongements culturels du BO ne
   sont pas exploités faute de figures : à prévoir si des illustrations arrivent.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel
ni à un site de cours. Statut : brouillon, non relu.
-->
