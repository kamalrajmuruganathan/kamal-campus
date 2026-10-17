---
id: 5e-math-parallelogrammes
titre: "Parallélogrammes"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Droites parallèles et perpendiculaires (6e)
  - Angles et triangles (5e)
  - Aires des figures usuelles (6e)
statut: brouillon
relu_par: null
---

# Parallélogrammes

> Un parallélogramme se reconnaît à ses **côtés**, à ses **diagonales** ou à ses
> **angles** — et chacune de ces pistes suffit à le démontrer. Savoir laquelle choisir
> selon ce que l'énoncé donne, c'est tout l'enjeu du chapitre.

---

## 1. Définition

Un **parallélogramme** est un quadrilatère dont les côtés opposés sont **parallèles
deux à deux**.

> **La définition ne parle que de parallélisme.** Tout le reste — côtés de même
> longueur, diagonales qui se coupent en leur milieu — sont des **conséquences**, pas
> la définition.

> ⚠️ **L'ordre des lettres compte.** Dans le parallélogramme $ABCD$, les côtés
> $[AB]$ et $[CD]$ sont opposés, ainsi que $[BC]$ et $[AD]$. On tourne autour de la
> figure : $A$, puis $B$, puis $C$, puis $D$. Écrire $ABDC$ désignerait une figure
> croisée.

---

## 2. Le centre de symétrie

C'est la propriété la plus utile, et celle qui explique toutes les autres.

$$\boxed{\text{Un parallélogramme a un centre de symétrie : le point d'intersection de ses diagonales.}}$$

> **Ce que ça veut dire.** Si on fait tourner la figure d'un **demi-tour** autour de ce
> point, elle se superpose exactement à elle-même. Chaque sommet vient se placer sur le
> sommet opposé.

C'est de là que découle tout le reste : le demi-tour envoie $[AB]$ sur $[CD]$, donc ces
deux côtés ont la même longueur. Il envoie $A$ sur $C$, donc le centre est le milieu de
$[AC]$.

---

## 3. Les propriétés

<!-- schema:proprietes -->
![Dans le parallélogramme ABCD, les côtés opposés sont parallèles et de même longueur, et les diagonales se coupent en leur milieu O.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjExMCwyNTAgMzkwLDI1MCA0OTAsNzAgMjEwLDcwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMTEwIiB5MT0iMjUwIiB4Mj0iNDkwIiB5Mj0iNzAiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM5MCIgeTE9IjI1MCIgeDI9IjIxMCIgeTI9IjcwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTg3IDI1NS42IEwgMTk0IDI1MCBMIDE4NyAyNDQuNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxwYXRoIGQ9Ik0gMjg3IDc1LjYgTCAyOTQgNzAgTCAyODcgNjQuNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxwYXRoIGQ9Ik0gMTM5LjggMjA3LjkgTCAxMzguMyAxOTkuMDYgTCAxMzAuMDEgMjAyLjQ2IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHBhdGggZD0iTSAxNDMuMiAyMDEuNzggTCAxNDEuNyAxOTIuOTQgTCAxMzMuNCAxOTYuMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48cGF0aCBkPSJNIDQxOS44IDIwNy45IEwgNDE4LjMgMTk5LjA2IEwgNDEwLjAxIDIwMi40NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxwYXRoIGQ9Ik0gNDIzLjIgMjAxLjc4IEwgNDIxLjcgMTkyLjk0IEwgNDEzLjQgMTk2LjM0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PGxpbmUgeDE9IjI0OCIgeTE9IjI0MyIgeDI9IjI1MiIgeTI9IjI1NyIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0OCIgeTE9IjYzIiB4Mj0iMzUyIiB5Mj0iNzciIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNTEuNyIgeTE9IjE2MC41MyIgeDI9IjE2NS44OCIgeTI9IjE2My44NCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1NC4xMiIgeTE9IjE1Ni4xNiIgeDI9IjE2OC4zIiB5Mj0iMTU5LjQ3IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDMxLjciIHkxPSIxNjAuNTMiIHgyPSI0NDUuODgiIHkyPSIxNjMuODQiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MzQuMTIiIHkxPSIxNTYuMTYiIHgyPSI0NDguMyIgeTI9IjE1OS40NyIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMS4wNSIgeTE9IjIwMS4zNCIgeDI9IjIwOC45NSIgeTI9IjIwOC42NiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM5MS4wNSIgeTE9IjExMS4zNCIgeDI9IjM5OC45NSIgeTI9IjExOC42NiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0Ni40MSIgeTE9IjIxMy40OSIgeDI9IjM1MC42NiIgeTI9IjIwMy41OSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0Mi44OCIgeTE9IjIwOS45NSIgeDI9IjM0Ny4xMiIgeTI9IjIwMC4wNSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMzOS4zNCIgeTE9IjIwNi40MSIgeDI9IjM0My41OSIgeTI9IjE5Ni41MSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI1Ni40MSIgeTE9IjEyMy40OSIgeDI9IjI2MC42NiIgeTI9IjExMy41OSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI1Mi44OCIgeTE9IjExOS45NSIgeDI9IjI1Ny4xMiIgeTI9IjExMC4wNSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI0OS4zNCIgeTE9IjExNi40MSIgeDI9IjI1My41OSIgeTI9IjEwNi41MSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTYwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzAwIiB5PSIxODQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk88L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9Ijk2IiB5PSIyNTgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQwNCIgeT0iMjU4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI1MDQiIHk9IjcwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxOTYiIHk9IjcwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMjg4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5PIGVzdCBsZSBtaWxpZXUgZGUgW0FDXSBldCBkZSBbQkRdIDogY+KAmWVzdCBsZSBjZW50cmUgZGUgc3ltw6l0cmllPC90ZXh0Pjwvc3ZnPg==)
*Dans le parallélogramme ABCD, les côtés opposés sont parallèles et de même longueur, et les diagonales se coupent en leur milieu O.*
<!-- /schema -->

Si $ABCD$ est un parallélogramme, alors :

| Ce qui est vrai | Détail |
|---|---|
| **Côtés opposés parallèles** | $(AB) \parallel (CD)$ et $(BC) \parallel (AD)$ |
| **Côtés opposés de même longueur** | $AB = CD$ et $BC = AD$ |
| **Diagonales se coupant en leur milieu** | le point d'intersection est le milieu de $[AC]$ **et** de $[BD]$ |
| **Angles opposés égaux** | $\widehat{A} = \widehat{C}$ et $\widehat{B} = \widehat{D}$ |
| **Angles consécutifs supplémentaires** | $\widehat{A} + \widehat{B} = 180°$ |

> ⚠️ **Deux côtés opposés égaux ne suffisent pas.** Un trapèze isocèle a deux côtés
> opposés de même longueur sans être un parallélogramme. Il faut que ce soit vrai pour
> **les deux paires**, ou qu'une paire soit à la fois **parallèle et de même longueur**.

---

## 4. Les propriétés caractéristiques

Une propriété **caractéristique** fonctionne dans les **deux sens** : elle permet de
*démontrer* qu'un quadrilatère est un parallélogramme.

Un quadrilatère est un parallélogramme **si et seulement si** l'une de ces conditions
est vérifiée :

| Piste | Condition |
|---|---|
| **Par les côtés** | les côtés opposés sont parallèles deux à deux |
| **Par les côtés** | les côtés opposés ont deux à deux la même longueur |
| **Par un seul côté** | **deux côtés opposés sont à la fois parallèles ET de même longueur** |
| **Par les diagonales** | les diagonales se coupent en leur **milieu** |

> **Comment choisir ?** Regarde ce que l'énoncé te donne.
> Des **milieux** dans l'énoncé → la piste des diagonales.
> Des **longueurs égales** → la piste des côtés.
> Un **codage de parallélisme** → la piste des côtés parallèles.

> **Exemple rédigé.** *$ABCD$ est un quadrilatère tel que $I$ est le milieu de $[AC]$ et
> le milieu de $[BD]$. Montrer que $ABCD$ est un parallélogramme.*
>
> Les diagonales de $ABCD$ sont $[AC]$ et $[BD]$. Elles se coupent en $I$, qui est le
> milieu de chacune d'elles.
> **Or** si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce
> quadrilatère est un parallélogramme.
> **Donc** $ABCD$ est un parallélogramme. ∎

> **La structure d'une démonstration** : *je sais que…* / *or la propriété dit que…* /
> *donc je conclus que…* C'est le « or » qui fait la démonstration : sans lui, on
> constate au lieu de prouver.

---

## 5. Construire un parallélogramme

Trois méthodes, selon l'outil dont tu disposes.

| Méthode | Comment |
|---|---|
| **Par les diagonales** | tracer $[AC]$, marquer son milieu $I$, puis placer $B$ et $D$ de part et d'autre avec $IB = ID$ |
| **Par les côtés** | reporter au compas $CD = AB$ et $AD = BC$ |
| **Par le parallélisme** | tracer la parallèle à $(AB)$ passant par $C$, et la parallèle à $(BC)$ passant par $A$ |

> **La plus rapide est celle des diagonales** : un seul point à placer, le milieu, et
> tout découle.

---

## 6. Les parallélogrammes particuliers

<!-- schema:particuliers -->
![Les diagonales du rectangle ont la même longueur, celles du losange sont perpendiculaires, celles du carré ont les deux propriétés.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjM1LDE0NSAxODUsMTQ1IDE4NSw1NSAzNSw1NSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjA4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjM1IiB5MT0iMTQ1IiB4Mj0iMTg1IiB5Mj0iNTUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxODUiIHkxPSIxNDUiIHgyPSIzNSIgeTI9IjU1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNzYuNzkiIHkxPSIxMjUuNzYiIHgyPSI2OC4yMSIgeTI9IjExOS4yNCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0OC4zNiIgeTE9IjExNy4xOCIgeDI9IjE0Ni42NCIgeTI9IjEyNy44MiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0My4yMSIgeTE9Ijc0LjI0IiB4Mj0iMTUxLjc5IiB5Mj0iODAuNzYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI3MS42NCIgeTE9IjgyLjgyIiB4Mj0iNzMuMzYiIHkyPSI3Mi4xOCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSA0NyA1NSBMIDQ3IDY3IEwgMzUgNjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxMTAiIHk9IjE5NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+cmVjdGFuZ2xlPC90ZXh0Pjx0ZXh0IHg9IjExMCIgeT0iMjE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kaWFnb25hbGVzIGRlPC90ZXh0Pjx0ZXh0IHg9IjExMCIgeT0iMjM0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5tw6ptZSBsb25ndWV1cjwvdGV4dD4wPHBvbHlnb24gcG9pbnRzPSIzMzAsMTQ1IDQwNSwxMDAgMzMwLDU1IDI1NSwxMDAiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4wOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSIzMzAiIHkxPSIxNDUiIHgyPSIzMzAiIHkyPSI1NSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwNSIgeTE9IjEwMCIgeDI9IjI1NSIgeTI9IjEwMCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMzNSIgeTE9IjEyMC41IiB4Mj0iMzI1IiB5Mj0iMTI0LjUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMjUiIHkxPSI3OS41IiB4Mj0iMzM1IiB5Mj0iNzUuNSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM2MyIgeTE9Ijk1IiB4Mj0iMzY3IiB5Mj0iMTA1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzY4IiB5MT0iOTUiIHgyPSIzNzIiIHkyPSIxMDUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOTciIHkxPSIxMDUiIHgyPSIyOTMiIHkyPSI5NSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI5MiIgeTE9IjEwNSIgeDI9IjI4OCIgeTI9Ijk1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDMzMCAxMTEgTCAzNDEgMTExIEwgMzQxIDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxsaW5lIHgxPSIzNjIuMTgiIHkxPSIxMTcuNTMiIHgyPSIzNzIuODIiIHkyPSIxMjcuNDciIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNjUuNjEiIHkxPSI4NC41MyIgeDI9IjM2OS4zOSIgeTI9IjcwLjQ3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjk3LjgyIiB5MT0iODIuNDciIHgyPSIyODcuMTgiIHkyPSI3Mi41MyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI5NC4zOSIgeTE9IjExNS40NyIgeDI9IjI5MC42MSIgeTI9IjEyOS41MyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzMwIiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmxvc2FuZ2U8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRpYWdvbmFsZXM8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyMzQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBlcnBlbmRpY3VsYWlyZXM8L3RleHQ+MDxwb2x5Z29uIHBvaW50cz0iNTUwLDE2NSA2MTUsMTAwIDU1MCwzNSA0ODUsMTAwIiBmaWxsPSIjMWE3ZjRiIiBmaWxsLW9wYWNpdHk9IjAuMDgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iNTUwIiB5MT0iMTY1IiB4Mj0iNTUwIiB5Mj0iMzUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MTUiIHkxPSIxMDAiIHgyPSI0ODUiIHkyPSIxMDAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NTUiIHkxPSIxMzAuNSIgeDI9IjU0NSIgeTI9IjEzNC41IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgwLjUiIHkxPSI5NSIgeDI9IjU4NC41IiB5Mj0iMTA1IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTQ1IiB5MT0iNjkuNSIgeDI9IjU1NSIgeTI9IjY1LjUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MTkuNSIgeTE9IjEwNSIgeDI9IjUxNS41IiB5Mj0iOTUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNTUwIDExMSBMIDU2MSAxMTEgTCA1NjEgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjU3Ni4xNCIgeTE9IjEyOC45NiIgeDI9IjU4OC44NiIgeTI9IjEzNi4wNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU3OC45NiIgeTE9IjczLjg2IiB4Mj0iNTg2LjA0IiB5Mj0iNjEuMTQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MjMuODYiIHkxPSI3MS4wNCIgeDI9IjUxMS4xNCIgeTI9IjYzLjk2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTIxLjA0IiB5MT0iMTI2LjE0IiB4Mj0iNTEzLjk2IiB5Mj0iMTM4Ljg2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NTAiIHk9IjE5NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Y2FycsOpPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMjE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sZXMgZGV1eCDDoCBsYSBmb2lzPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMjM0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+MDwvc3ZnPg==)
*Les diagonales du rectangle ont la même longueur, celles du losange sont perpendiculaires, celles du carré ont les deux propriétés.*
<!-- /schema -->

Chacun est un parallélogramme **avec une condition en plus**.

| Figure | Définition | Ce qu'elle ajoute |
|---|---|---|
| **Rectangle** | parallélogramme ayant **un angle droit** | diagonales de **même longueur** |
| **Losange** | parallélogramme ayant **deux côtés consécutifs de même longueur** | diagonales **perpendiculaires** |
| **Carré** | parallélogramme à la fois **rectangle et losange** | diagonales de même longueur **et** perpendiculaires |

> **La logique à retenir.** Le rectangle joue sur les **angles**, le losange sur les
> **longueurs**, le carré cumule les deux. Un carré est donc à la fois un rectangle, un
> losange **et** un parallélogramme — l'inverse est faux.

### Propriétés caractéristiques des diagonales

C'est souvent le chemin le plus court pour identifier une figure :

| Diagonales | Nature du quadrilatère |
|---|---|
| se coupent en leur milieu | parallélogramme |
| se coupent en leur milieu **et** de même longueur | **rectangle** |
| se coupent en leur milieu **et** perpendiculaires | **losange** |
| se coupent en leur milieu, de même longueur **et** perpendiculaires | **carré** |

> ⚠️ **Ne pas oublier « se coupent en leur milieu ».** Deux diagonales perpendiculaires
> ne font pas un losange : encore faut-il qu'elles se coupent en leur milieu. Un
> cerf-volant a des diagonales perpendiculaires sans être un losange.

---

## 7. Aires

<!-- schema:aire -->
![Parallélogramme de base 8 cm et de hauteur 5 cm, à l’échelle : son aire vaut 40 cm², le côté oblique de 6 cm n’intervient pas.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjcwLDIyMCAzMTAsMjIwIDQwOS41LDcwIDE2OS41LDcwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMTY5LjUiIHkxPSI3MCIgeDI9IjE2OS41IiB5Mj0iMjIwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTgxLjUgMjIwIEwgMTgxLjUgMjA4IEwgMTY5LjUgMjA4IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjIyMCIgeT0iMjQ0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5iYXNlIDogOCBjbTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTc3LjUiIHk9IjE0OSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5oYXV0ZXVyIDogNSBjbTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTA3Ljc1IiB5PSIxNDUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjYgY208L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIyNzYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkFpcmUgPSBiYXNlIMOXIGhhdXRldXIgPSA4IMOXIDUgPSA0MCBjbcKyIChsZSBjw7R0w6kgZGUgNiBjbSBuZSBzZXJ0IHBhcyk8L3RleHQ+PC9zdmc+)
*Parallélogramme de base 8 cm et de hauteur 5 cm, à l’échelle : son aire vaut 40 cm², le côté oblique de 6 cm n’intervient pas.*
<!-- /schema -->

$$\boxed{\mathcal{A}_{\text{parallélogramme}} = \text{base} \times \text{hauteur}}$$

> ⚠️ **La hauteur n'est pas le côté.** C'est la distance **perpendiculaire** entre la
> base et le côté opposé. Multiplier deux côtés donnerait un résultat trop grand — sauf
> pour un rectangle, où les deux coïncident.

| Figure | Aire |
|---|---|
| Parallélogramme | base $\times$ hauteur |
| Rectangle | longueur $\times$ largeur |
| Losange | base $\times$ hauteur, ou $\dfrac{D \times d}{2}$ |
| Carré | côté$^2$ |

> **Exemple.** Un parallélogramme de base $8$ cm et de hauteur $5$ cm a pour aire
> $8 \times 5 = 40$ cm², **même si son côté oblique mesure $6$ cm**. Le $6$ ne sert pas.

### Figures complexes

Pour une figure composée, on **découpe** en figures connues et on **additionne** — ou
on encadre par une grande figure dont on **retranche** ce qui dépasse.

> **Exemple.** Une figure en L se découpe en deux rectangles ; on calcule chaque aire
> et on les ajoute.

---

## 8. Conversions d'unités

| Longueurs | $1\ \mathrm{m} = 10\ \mathrm{dm} = 100\ \mathrm{cm}$ |
|---|---|
| **Aires** | $1\ \mathrm{m^2} = 100\ \mathrm{dm^2} = 10\,000\ \mathrm{cm^2}$ |

> ⚠️ **Le piège classique.** Pour les aires, on multiplie par **100** à chaque rang, pas
> par $10$. La raison : un carré de $1$ m de côté vaut $10$ dm $\times$ $10$ dm, soit
> $100$ dm². Les longueurs sont en une dimension, les aires en deux — d'où le carré.

> **Exemple.** $2{,}5\ \mathrm{m^2} = 25\,000\ \mathrm{cm^2}$, et non $250$.

---

## 9. À retenir absolument

| | |
|---|---|
| Définition | quadrilatère à côtés opposés parallèles deux à deux |
| Centre de symétrie | l'intersection des diagonales |
| Propriétés | côtés opposés égaux · diagonales se coupant en leur milieu · angles opposés égaux |
| Caractéristique la plus utile | diagonales se coupant en leur **milieu** |
| Un seul côté suffit | s'il est **parallèle ET de même longueur** que son opposé |
| Rectangle | + un angle droit → diagonales de même longueur |
| Losange | + deux côtés consécutifs égaux → diagonales perpendiculaires |
| Carré | rectangle **et** losange |
| Aire | base $\times$ **hauteur**, jamais côté $\times$ côté |
| Conversion d'aires | $\times 100$ par rang, pas $\times 10$ |

---

## 10. Les erreurs qui coûtent des points

1. **Multiplier deux côtés** pour l'aire d'un parallélogramme au lieu d'utiliser la
   hauteur.
2. **Oublier « se coupent en leur milieu »** dans la caractérisation par les diagonales.
3. **Croire que deux côtés opposés égaux suffisent** : il en faut deux paires, ou une
   paire parallèle **et** égale.
4. **Convertir des aires comme des longueurs** : $\times 100$, pas $\times 10$.
5. **Écrire les sommets dans le désordre** : $ABDC$ n'est pas $ABCD$.
6. **Confondre propriété et définition** : la définition ne parle que de parallélisme.
7. **Constater au lieu de démontrer** : sans le « or… », il n'y a pas de démonstration.
8. **Dire qu'un carré n'est pas un rectangle** : il en est un, avec une condition de
   plus.
