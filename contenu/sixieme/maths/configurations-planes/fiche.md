---
id: 6e-math-configurations-planes
titre: "Géométrie : configurations planes"
voie: college
niveau: sixieme
parcours: maths
matiere: mathematiques
programme: "Programme de cycle 3 (2025) — applicable en 6e à la rentrée 2026"
duree_lecture_min: 14
prerequis:
  - Vocabulaire de base (point, droite, segment) et codage des angles droits (CM1-CM2)
  - Reconnaître un carré, un rectangle, un triangle (CM)
  - Reconnaître les axes de symétrie d'une figure (CM)
statut: brouillon
relu_par: null
---

# Géométrie : configurations planes

> En géométrie, on ne devine pas : on **construit** avec des instruments et on
> **justifie** avec des définitions. Une figure bien faite au compas et à la règle
> vaut toutes les explications. Ce chapitre te donne le vocabulaire exact et les
> gestes précis pour tracer sans te tromper.

---

## 1. Le vocabulaire et les notations de base

On note les **points** par des lettres majuscules : $A$, $B$, $M$, $O$…

| Objet | Notation | Ce que c'est |
|---|---|---|
| Droite passant par $A$ et $B$ | $(AB)$ | infinie des deux côtés |
| Segment d'extrémités $A$ et $B$ | $[AB]$ | limité par $A$ et $B$ |
| Demi-droite d'origine $A$ passant par $B$ | $[AB)$ | limitée d'un seul côté |
| Longueur du segment | $AB$ | un **nombre** (en cm) |

> ⚠️ **Ne confonds pas $[AB]$ et $AB$.** $[AB]$ est un dessin (un segment) ;
> $AB$ est une mesure (par exemple $5$ cm). Les crochets changent tout.

---

## 2. Distances et milieu

La **distance** entre deux points $A$ et $B$ est la longueur du segment $[AB]$,
c'est-à-dire le nombre $AB$ : le chemin le plus court pour aller de $A$ à $B$.

Le **milieu** $I$ d'un segment $[AB]$ est le point de ce segment qui le partage en
deux morceaux de même longueur.

$$\boxed{I \text{ milieu de } [AB] \iff I \in [AB] \text{ et } IA = IB = \dfrac{AB}{2}}$$

> **Exemple.** Si $AB = 6$ cm, son milieu $I$ vérifie $IA = IB = 3$ cm.

> ⚠️ $IA = IB$ ne suffit pas : il faut aussi que $I$ soit **sur** le segment. Un point
> à égale distance de $A$ et $B$ hors de $(AB)$ n'est pas le milieu (voir §4).

---

## 3. Cercles et disques

<!-- schema:cercle-vocabulaire -->
![Le centre O, le rayon OA, le diamètre BC et la corde DE : le cercle est le contour, le disque ajoute l’intérieur.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIxNTAiIHI9IjExNSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjA4IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42Ii8+PGxpbmUgeDE9IjY4LjkyIiB5MT0iMTIwLjI0IiB4Mj0iMjkxLjA4IiB5Mj0iMTc5Ljc2IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTgwIiB5MT0iMTUwIiB4Mj0iMjE5LjMzIiB5Mj0iNDEuOTQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMDMuMDUiIHkxPSIyMzUuNDYiIHgyPSIyMjguNiIgeTI9IjI1NC4yMyIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTgwIiBjeT0iMTUwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTc2IiB5PSIxNzIiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk88L3RleHQ+PGNpcmNsZSBjeD0iMjE5LjMzIiBjeT0iNDEuOTQiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyMjcuMzMiIHk9IjMzLjk0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0PjxjaXJjbGUgY3g9IjY4LjkyIiBjeT0iMTIwLjI0IiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTQuOTIiIHk9IjExNC4yNCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48Y2lyY2xlIGN4PSIyOTEuMDgiIGN5PSIxNzkuNzYiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzMDUuMDgiIHk9IjE5My43NiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48Y2lyY2xlIGN4PSIxMDMuMDUiIGN5PSIyMzUuNDYiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI4OS4wNSIgeT0iMjQ3LjQ2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0PjxjaXJjbGUgY3g9IjIyOC42IiBjeT0iMjU0LjIzIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMjM4LjYiIHk9IjI3Mi4yMyIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMjMzLjY3IiB5PSI5OS45NyIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+cmF5b248L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjEyMCIgeT0iMTgwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5kaWFtw6h0cmU8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjE3MS44MyIgeT0iMjM0Ljg0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5jb3JkZTwvdGV4dD48dGV4dCB4PSIzNDUiIHk9IjcwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmNlbnRyZSBPPC90ZXh0Pjx0ZXh0IHg9IjM0NSIgeT0iOTgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCI+cmF5b24gW09BXSA6IE9BID0gcjwvdGV4dD48dGV4dCB4PSIzNDUiIHk9IjEyNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0Ij5kaWFtw6h0cmUgW0JDXSA6IEJDID0gMiDDlyByPC90ZXh0Pjx0ZXh0IHg9IjM0NSIgeT0iMTU0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmNvcmRlIFtERV08L3RleHQ+PHRleHQgeD0iMzQ1IiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+Y2VyY2xlIDogbGUgY29udG91ciBzZXVsPC90ZXh0Pjx0ZXh0IHg9IjM0NSIgeT0iMjIwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmRpc3F1ZSA6IGNvbnRvdXIgKyBpbnTDqXJpZXVyPC90ZXh0Pjwvc3ZnPg==)
*Le centre O, le rayon OA, le diamètre BC et la corde DE : le cercle est le contour, le disque ajoute l’intérieur.*
<!-- /schema -->

Soit $O$ un point et $r$ une longueur positive.

- Le **cercle** de centre $O$ et de rayon $r$ est l'ensemble des points situés à la
  distance $r$ de $O$ : c'est **juste le contour** ($OM = r$).
- Le **disque** de centre $O$ et de rayon $r$ ajoute l'intérieur : tous les points à
  distance **inférieure ou égale** à $r$ ($OM \leq r$). Image : le cercle est la piste
  de course, le disque est tout le stade, pelouse comprise.

Vocabulaire : le **rayon** relie le centre $O$ à un point du cercle (longueur $r$) ;
une **corde** relie deux points du cercle ; un **diamètre** est une corde qui passe
par $O$. Le diamètre mesure **deux fois** le rayon.

> **Exemple.** Un cercle de rayon $4$ cm a un diamètre de $8$ cm — c'est sa plus
> longue corde. **Pour le tracer** : écarte le compas du rayon (règle : pointe sèche
> sur $0$, crayon sur la graduation), plante la pointe sur $O$, tourne d'un tour.

---

## 4. La médiatrice d'un segment

<!-- schema:mediatrice -->
![La médiatrice du segment AB lui est perpendiculaire en son milieu I ; tout point M de cette droite vérifie MA = MB. Les arcs de compas montrent la construction.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDI4Mi42IDExOS44OCBBIDE1MCAxNTAgMCAwIDAgMjU0LjQ0IDgyLjM0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHBhdGggZD0iTSAyNTQuNDQgMjk3LjY2IEEgMTUwIDE1MCAwIDAgMCAyODIuNiAyNjAuMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48cGF0aCBkPSJNIDI4NS41NiA4Mi4zNCBBIDE1MCAxNTAgMCAwIDAgMjU3LjQgMTE5Ljg4IiBmaWxsPSJub25lIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHBhdGggZD0iTSAyNTcuNCAyNjAuMTIgQSAxNTAgMTUwIDAgMCAwIDI4NS41NiAyOTcuNjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48bGluZSB4MT0iMjcwIiB5MT0iMjIiIHgyPSIyNzAiIHkyPSIzMTYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyODIiIHk9IjMwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPihkKSBtw6lkaWF0cmljZSBkZSBbQUJdPC90ZXh0PjxsaW5lIHgxPSIxNTAiIHkxPSIxOTAiIHgyPSIzOTAiIHkyPSIxOTAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMjgzIDE5MCBMIDI4MyAxNzcgTCAyNzAgMTc3IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIwOCIgeTE9IjE4MyIgeDI9IjIxMiIgeTI9IjE5NyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMyOCIgeTE9IjE4MyIgeDI9IjMzMiIgeTI9IjE5NyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjYyIiB4Mj0iMTUwIiB5Mj0iMTkwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjcwIiB5MT0iNjIiIHgyPSIzOTAiIHkyPSIxOTAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMTguMTgiIHkxPSIxMjcuNSIgeDI9IjIwNS4yNCIgeTI9IjEyMC44NSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIxNC43NiIgeTE9IjEzMS4xNSIgeDI9IjIwMS44MiIgeTI9IjEyNC41IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzMyLjAzIiB5MT0iMTE3LjkzIiB4Mj0iMzI0LjU1IiB5Mj0iMTMwLjQyIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzM1LjQ1IiB5MT0iMTIxLjU4IiB4Mj0iMzI3Ljk3IiB5Mj0iMTM0LjA3IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxOTAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxMzYiIHk9IjE5NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48Y2lyY2xlIGN4PSIzOTAiIGN5PSIxOTAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0MDQiIHk9IjE5NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48Y2lyY2xlIGN4PSIyNzAiIGN5PSIxOTAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyNTYiIHk9IjIxMiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+STwvdGV4dD48Y2lyY2xlIGN4PSIyNzAiIGN5PSI2MiIgcj0iMy4yIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjI1NCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk08L3RleHQ+PGNpcmNsZSBjeD0iMjcwIiBjeT0iMTAwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSIyNzAiIGN5PSIyODAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjU0MCIgeT0iMjUwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIj5JQSA9IElCPC90ZXh0Pjx0ZXh0IHg9IjU0MCIgeT0iMjc0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5NQSA9IE1CPC90ZXh0Pjwvc3ZnPg==)
*La médiatrice du segment AB lui est perpendiculaire en son milieu I ; tout point M de cette droite vérifie MA = MB. Les arcs de compas montrent la construction.*
<!-- /schema -->

La **médiatrice** d'un segment $[AB]$ est la droite **perpendiculaire** à $[AB]$ qui
passe par son **milieu**. Sa propriété caractéristique :

$$\boxed{M \text{ est sur la médiatrice de } [AB] \iff MA = MB}$$

C'est donc l'ensemble des points **à égale distance** de $A$ et de $B$.

> **Exemple.** Où placer un puits à égale distance de deux maisons $A$ et $B$ ? Sur
> tout point de la médiatrice de $[AB]$.

**Construire la médiatrice au compas :**

1. Prends un écartement **plus grand que la moitié** de $AB$.
2. Pointe sèche sur $A$ : trace deux arcs, un au-dessus, un en dessous.
3. Sans changer l'écartement, pointe sèche sur $B$ : trace deux arcs qui croisent les
   premiers en deux points.
4. Trace la droite passant par ces deux points : c'est la médiatrice. (Ces deux points
   sont à égale distance de $A$ et $B$, d'où le résultat.)

---

## 5. Les angles

<!-- schema:types-angles -->
![Un angle aigu, un angle droit (codé par un petit carré), un angle obtus et un angle plat.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjEwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyMTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDUiIHkxPSIxMjAiIHgyPSIxNDUiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NSIgeTE9IjEyMCIgeDI9IjEwOS4yOCIgeTI9IjQzLjQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNDUgMTIwIEwgNzMgMTIwIEEgMjggMjggMCAwIDAgNjMgOTguNTUgWiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjIyIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNIDczIDEyMCBBIDI4IDI4IDAgMCAwIDYzIDk4LjU1IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PGNpcmNsZSBjeD0iNDUiIGN5PSIxMjAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9Ijk1IiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmFpZ3U8L3RleHQ+PHRleHQgeD0iOTUiIHk9IjE4MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZW50cmUgMMKwIGV0IDkwwrA8L3RleHQ+PGxpbmUgeDE9IjIwNyIgeTE9IjEyMCIgeDI9IjMwNyIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwNyIgeTE9IjEyMCIgeDI9IjIwNyIgeTI9IjIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDIyMyAxMjAgTCAyMjMgMTA0IEwgMjA3IDEwNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxjaXJjbGUgY3g9IjIwNyIgY3k9IjEyMCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMjU3IiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmRyb2l0PC90ZXh0Pjx0ZXh0IHg9IjI1NyIgeT0iMTgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MMKwPC90ZXh0PjxsaW5lIHgxPSI0MTYiIHkxPSIxMjAiIHgyPSI0OTQiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MTYiIHkxPSIxMjAiIHgyPSIzNjUuODYiIHkyPSI2MC4yNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSA0MTYgMTIwIEwgNDQ0IDEyMCBBIDI4IDI4IDAgMCAwIDM5OCA5OC41NSBaIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMjIiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0gNDQ0IDEyMCBBIDI4IDI4IDAgMCAwIDM5OCA5OC41NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxjaXJjbGUgY3g9IjQxNiIgY3k9IjEyMCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNDE5IiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm9idHVzPC90ZXh0Pjx0ZXh0IHg9IjQxOSIgeT0iMTgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lbnRyZSA5MMKwIGV0IDE4MMKwPC90ZXh0PjxsaW5lIHgxPSI1ODEiIHkxPSIxMjAiIHgyPSI2NDMiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1ODEiIHkxPSIxMjAiIHgyPSI1MTkiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNTgxIDEyMCBMIDYwOSAxMjAgQSAyOCAyOCAwIDAgMCA1NTMgMTIwIFoiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4yMiIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTSA2MDkgMTIwIEEgMjggMjggMCAwIDAgNTUzIDEyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxjaXJjbGUgY3g9IjU4MSIgY3k9IjEyMCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNTgxIiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnBsYXQ8L3RleHQ+PHRleHQgeD0iNTgxIiB5PSIxODIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE4MMKwPC90ZXh0Pjwvc3ZnPg==)
*Un angle aigu, un angle droit (codé par un petit carré), un angle obtus et un angle plat.*
<!-- /schema -->

Un angle se note avec trois lettres et un chapeau : $\widehat{ABC}$, le sommet au
milieu (ici $B$). On le mesure en **degrés** ($^\circ$) avec un rapporteur.

| Angle | Mesure |
|---|---|
| **nul** | $0^\circ$ |
| **aigu** | entre $0^\circ$ et $90^\circ$ |
| **droit** | $90^\circ$ (codé par un petit carré) |
| **obtus** | entre $90^\circ$ et $180^\circ$ |
| **plat** | $180^\circ$ (les deux côtés forment une droite) |
| **plein** | $360^\circ$ (un tour complet) |

Des paires d'angles particulières à repérer :

- **Angles opposés par le sommet** : formés par deux droites qui se croisent, de part
  et d'autre du point. Ils sont **égaux**.
- **Angles adjacents** : ils ont le même sommet, un côté commun, et sont situés de
  part et d'autre de ce côté.
- **Angles supplémentaires** : deux angles dont la **somme fait $180^\circ$**.

> **Exemple.** Un angle de $130^\circ$ et un angle de $50^\circ$ sont supplémentaires
> car $130 + 50 = 180$.

**Mesurer un angle au rapporteur :** place le **centre** du rapporteur sur le
**sommet**, fais coïncider un côté avec la graduation **$0$**, puis lis la graduation
traversée par l'autre côté.

> ⚠️ Le rapporteur a **deux graduations** (montante et descendante). Choisis celle qui
> part du $0$ posé sur ton premier côté. Un angle aigu donne moins de $90^\circ$ :
> c'est ton garde-fou.

**Construire $\widehat{xOy} = 50^\circ$ :** trace une demi-droite $[Ox)$ ; pose le
centre du rapporteur sur $O$, le $0$ sur $[Ox)$ ; repère la graduation $50$ et marque
un point $y$ ; trace $[Oy)$.

---

## 6. La bissectrice d'un angle

La **bissectrice** d'un angle saillant (un angle qui ne dépasse pas $180^\circ$) est
la demi-droite qui partage cet angle en **deux angles égaux**.

> **Exemple.** La bissectrice d'un angle de $80^\circ$ le coupe en deux angles de
> $40^\circ$.

**Construire la bissectrice au compas :** pointe sèche sur le sommet $O$, trace un arc
qui coupe les deux côtés en $M$ et $N$ ; pointe sèche sur $M$ puis sur $N$ (même
écartement), trace deux arcs qui se croisent en $P$ ; trace $[OP)$.

---

## 7. Les triangles

**Construire un triangle dont on connaît les trois longueurs :** trace un côté $[AB]$
à la règle ; écarte le compas de $AC$, pointe sèche sur $A$, trace un arc ; écarte le
compas de $BC$, pointe sèche sur $B$, trace un arc ; le point $C$ est à l'intersection
des deux arcs, relie-le à $A$ et $B$.

> ⚠️ **Trois longueurs ne donnent pas toujours un triangle.** Si le plus long côté
> dépasse la somme des deux autres, les arcs ne se croisent pas. Avec $2$ cm, $2$ cm
> et $6$ cm, c'est impossible : $2 + 2 = 4 < 6$.

**Les triangles particuliers :**

| Triangle | Définition | Propriété des angles |
|---|---|---|
| **rectangle** | possède un angle droit | un angle de $90^\circ$ |
| **isocèle** | deux côtés de même longueur | deux angles égaux (à la base) |
| **équilatéral** | trois côtés de même longueur | trois angles de $60^\circ$ |

> **Exemple.** Dans un triangle isocèle en $A$ (donc $AB = AC$), les angles
> $\widehat{B}$ et $\widehat{C}$ sont égaux.

**La somme des angles.** Dans **tout** triangle, la somme des trois angles vaut :

$$\boxed{\widehat{A} + \widehat{B} + \widehat{C} = 180^\circ}$$

> **Exemple.** Si $\widehat{A} = 70^\circ$ et $\widehat{B} = 60^\circ$, alors
> $\widehat{C} = 180 - 70 - 60 = 50^\circ$. Contrôle sur l'équilatéral :
> $60 + 60 + 60 = 180$ ✓

**Le cercle circonscrit.** Les **trois médiatrices** d'un triangle se croisent en un
même point (elles sont **concourantes**). Ce point est à égale distance des trois
sommets : c'est le centre du **cercle circonscrit**, qui passe par les trois sommets.

> **Pourquoi.** Il est sur la médiatrice de $[AB]$ (donc $A$, $B$ à égale distance) et
> sur celle de $[BC]$ (donc $B$, $C$) : les trois sommets sont à la même distance.

---

## 8. La symétrie axiale

Le **symétrique** d'un point $M$ par rapport à une droite $(d)$ est le point $M'$ tel
que $(d)$ soit la **médiatrice** du segment $[MM']$ ; $(d)$ est l'**axe de symétrie**.
Cas particulier : si $M$ est **sur** l'axe, alors $M' = M$.

> **Comment lire.** $(d)$ médiatrice de $[MM']$ dit deux choses : $M$ et $M'$ sont à
> égale distance de l'axe, et $[MM']$ le coupe perpendiculairement. L'axe est un
> **miroir**.

**Construire le symétrique de $M$ :** trace la perpendiculaire à $(d)$ passant par $M$
(équerre) ; mesure la distance de $M$ à l'axe ; reporte-la de l'autre côté sur cette
perpendiculaire : tu obtiens $M'$.

**Propriétés de conservation.** La symétrie axiale **conserve** les **longueurs** (le
symétrique de $AB$ vérifie $A'B' = AB$), l'**alignement**, les **angles** (même mesure)
et les **aires**.

> **À retenir.** Une figure et son symétrique sont **superposables** : même forme,
> même taille, juste retournés comme dans un miroir.

---

## 9. Un mot sur la vision dans l'espace

En 6e, on entretient la reconnaissance des solides (cube, pavé, boule, cône, cylindre,
pyramide, prisme droit) et on travaille sur des **assemblages de cubes** : compter les
cubes d'un empilement, passer de l'objet en volume à ses vues à plat (et inversement).

---

## 10. À retenir absolument

| Notion | L'essentiel |
|---|---|
| Distance $AB$ | longueur du segment $[AB]$, un nombre |
| Milieu $I$ de $[AB]$ | sur $[AB]$ **et** $IA = IB = \frac{AB}{2}$ |
| Cercle | contour : $OM = r$ · Disque : contour + intérieur : $OM \leq r$ |
| Diamètre | $2 \times$ rayon, la plus longue corde |
| Médiatrice de $[AB]$ | perpendiculaire au milieu · ensemble des points où $MA = MB$ |
| Angles | droit $90^\circ$, plat $180^\circ$ · supplémentaires : somme $= 180^\circ$ |
| Bissectrice | partage l'angle en **deux angles égaux** |
| Somme des angles d'un triangle | $\boxed{180^\circ}$ · équilatéral : trois fois $60^\circ$ |
| Cercle circonscrit | centre = point de concours des **médiatrices** |
| Symétrie axiale | axe = médiatrice de $[MM']$ · conserve longueurs, angles, aires |

---

## 11. Les erreurs qui coûtent des points

1. **Confondre $[AB]$ (segment, qu'on dessine) et $AB$ (longueur, un nombre).** Oublier
   les crochets fausse toute la copie.
2. **Confondre cercle et disque.** Le cercle est **seulement** le contour ($OM = r$) ;
   le disque inclut l'intérieur ($OM \leq r$).
3. **Prendre le milieu pour n'importe quel point équidistant.** $IA = IB$ ne suffit pas :
   le milieu doit être **sur** le segment — sinon tu décris la médiatrice.
4. **Lire le rapporteur sur la mauvaise graduation.** Un angle aigu qui te donne
   $130^\circ$ : tu as lu la mauvaise rangée. Reprends au $0$.
5. **Croire que trois longueurs donnent toujours un triangle.** Faux si le plus grand
   côté dépasse la somme des deux autres.
6. **Confondre médiatrice (coupe un segment en son milieu) et bissectrice (coupe un
   angle en deux)**, ou oublier que la somme des angles fait $180^\circ$ (pas $360^\circ$).
