---
id: 4e-math-transformations
titre: "Transformations : la translation"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Symétrie axiale et demi-tour, ou symétrie centrale (5e — chapitre « Transformations : symétrie axiale et demi-tour »)
  - Milieu d'un segment (6e)
  - Droites parallèles, tracé à la règle et à l'équerre (6e)
  - Report de longueurs au compas (6e)
  - Mesure d'un angle au rapporteur (6e-5e)
statut: brouillon
relu_par: null
---

# Transformations : la translation

> Tu connais deux façons de transformer une figure : la **plier** (symétrie axiale) et la
> **retourner d'un demi-tour** autour d'un point. En voici une troisième, la plus simple à
> voir : **faire glisser**. Rien ne tourne, rien ne se reflète — tout part dans la même
> direction, du même côté, de la même longueur.

La nouveauté de cette année, c'est la **translation**. Le reste — symétrie axiale et
demi-tour — devient un **automatisme** : tu dois savoir le faire vite et sans y penser.

---

## 1. Ce qui est déjà acquis (et qui reste exigible)

Ces gestes doivent être des réflexes. Travaillés en 5e : ici on les réactive.

| Automatisme attendu | Le geste |
|---|---|
| Construire le symétrique d'un point par **demi-tour** | $O$ est le **milieu** de $[MM']$ |
| Dire si deux figures sont images l'une de l'autre par une **symétrie axiale** | et **identifier l'axe** |
| Dire si deux figures sont images l'une de l'autre par un **demi-tour** | et **identifier le centre** |
| Dans une figure, déterminer les images de points, segments, droites, figures | par l'une ou l'autre |

> **Un doute ?** Reprends le chapitre de 5e « Transformations : symétrie axiale et
> demi-tour ». Rappel de vocabulaire : le **demi-tour**, c'est aussi ce qu'on appelle
> la **symétrie centrale**. Deux mots, une seule transformation.

---

## 2. La translation : comprendre l'effet

Une translation, c'est un **glissement**. Tous les points de la figure se déplacent
**exactement de la même façon** — aucun ne prend un chemin différent des autres.

$$\boxed{\text{Une translation fait glisser tous les points : même direction, même sens, même longueur}}$$

Ces trois données comptent **ensemble** : la **direction** (la « pente » du déplacement),
le **sens** (de quel côté on part sur cette direction) et la **longueur** (de combien on
glisse). Change-en une seule, ce n'est plus la même translation.

### Comment on te la donne

Presque toujours par **deux points** : « la translation qui transforme $A$ en $A'$ ».
Le déplacement de $A$ vers $A'$ sert de **modèle** : tous les autres points font le
même trajet.

> **Le geste à retenir.** Pose ton doigt sur la figure et pousse-la **sans la tourner
> et sans la retourner**. C'est exactement ça, une translation.

---

## 3. Méthode : construire l'image d'un point

### Sur quadrillage

<!-- schema:quadrillage -->
![La translation qui transforme A en A′ fait glisser chaque point de 3 carreaux vers la droite et de 2 vers le bas : le triangle MNP devient M′N′P′.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzIgMjk4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU3MiIgaGVpZ2h0PSIyOTgiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjIwIiB5Mj0iMjQ4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU4IiB5MT0iMjAiIHgyPSI1OCIgeTI9IjI0OCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI5NiIgeTE9IjIwIiB4Mj0iOTYiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTM0IiB5MT0iMjAiIHgyPSIxMzQiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTcyIiB5MT0iMjAiIHgyPSIxNzIiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjEwIiB5MT0iMjAiIHgyPSIyMTAiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjQ4IiB5MT0iMjAiIHgyPSIyNDgiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjg2IiB5MT0iMjAiIHgyPSIyODYiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzI0IiB5MT0iMjAiIHgyPSIzMjQiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzYyIiB5MT0iMjAiIHgyPSIzNjIiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAwIiB5MT0iMjAiIHgyPSI0MDAiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDM4IiB5MT0iMjAiIHgyPSI0MzgiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDc2IiB5MT0iMjAiIHgyPSI0NzYiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTE0IiB5MT0iMjAiIHgyPSI1MTQiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTUyIiB5MT0iMjAiIHgyPSI1NTIiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjU1MiIgeTI9IjIwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwIiB5MT0iNTgiIHgyPSI1NTIiIHkyPSI1OCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMCIgeTE9Ijk2IiB4Mj0iNTUyIiB5Mj0iOTYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAiIHkxPSIxMzQiIHgyPSI1NTIiIHkyPSIxMzQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAiIHkxPSIxNzIiIHgyPSI1NTIiIHkyPSIxNzIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAiIHkxPSIyMTAiIHgyPSI1NTIiIHkyPSIyMTAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAiIHkxPSIyNDgiIHgyPSI1NTIiIHkyPSIyNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSI1OCIgeDI9IjE2My42OCIgeTI9IjEyOC40NSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNzIsMTM0IDE2Ni40NSwxMjQuMjkgMTYwLjkxLDEzMi42MSIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjU4IiBjeT0iNTgiIHI9IjMuMiIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0NiIgeT0iNTIiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PGNpcmNsZSBjeD0iMTcyIiBjeT0iMTM0IiByPSIzLjIiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTc4IiB5PSIxNTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkHigLI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjExNSIgeT0iNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMgw6AgZHJvaXRlPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyMDYiIHk9IjEwMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MiBlbiBiYXM8L3RleHQ+PGxpbmUgeDE9IjU4IiB5MT0iNTgiIHgyPSIxNzIiIHkyPSI1OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTcyIiB5MT0iNTgiIHgyPSIxNzIiIHkyPSIxMzQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI0OCIgeTE9IjEzNCIgeDI9IjM1NS4zNCIgeTI9IjIwNS41NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM2MiwyMTAgMzU3LjU2LDIwMi4yMyAzNTMuMTIsMjA4Ljg5IiBmaWxsPSIjNWI2YjdhIi8+PGxpbmUgeDE9IjM2MiIgeTE9IjEzNCIgeDI9IjQ2OS4zNCIgeTI9IjIwNS41NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ3NiwyMTAgNDcxLjU2LDIwMi4yMyA0NjcuMTIsMjA4Ljg5IiBmaWxsPSIjNWI2YjdhIi8+PGxpbmUgeDE9IjI4NiIgeTE9IjU4IiB4Mj0iMzkzLjM0IiB5Mj0iMTI5LjU2IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDAwLDEzNCAzOTUuNTYsMTI2LjIzIDM5MS4xMiwxMzIuODkiIGZpbGw9IiM1YjZiN2EiLz48cG9seWdvbiBwb2ludHM9IjI0OCwxMzQgMzYyLDEzNCAyODYsNTgiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4xOCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzYyLDIxMCA0NzYsMjEwIDQwMCwxMzQiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4xOCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyMzYiIHk9IjE0MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzc0IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk48L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjI4MiIgeT0iNTAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlA8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjM0NS4yIiB5PSIyMjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQ5Mi44IiB5PSIyMjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk7igLI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjM5NC40IiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlDigLI8L3RleHQ+PHRleHQgeD0iMjg2IiB5PSIyODQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNoYXF1ZSBwb2ludCBmYWl0IGxlIG3Dqm1lIHRyYWpldCBxdWUgQSA6IDMgY2FycmVhdXggw6AgZHJvaXRlLCAyIHZlcnMgbGUgYmFzLjwvdGV4dD48L3N2Zz4=)
*La translation qui transforme A en A′ fait glisser chaque point de 3 carreaux vers la droite et de 2 vers le bas : le triangle MNP devient M′N′P′.*
<!-- /schema -->

Compte le déplacement de $A$ à $A'$ (tant de carreaux horizontalement, tant
verticalement), puis refais **le même comptage** à partir de $M$, dans le même sens.

> **Exemple.** De $A$ à $A'$ : $3$ carreaux à droite, $2$ vers le bas. Alors de $M$ à
> $M'$ : $3$ carreaux à droite, $2$ vers le bas. Toujours, pour tous les points.

### Sur feuille blanche

1. Trace la **parallèle** à $(AA')$ passant par $M$ — c'est elle qui donne la direction.
2. Au compas, reporte la longueur $AA'$ à partir de $M$ sur cette parallèle.
3. Le compas donne **deux** points : garde celui du **bon côté**, celui qui part dans le
   même sens que le déplacement de $A$ vers $A'$. L'autre est le glissement inverse.

### Pour une figure entière

Construis l'image de chaque **point clé** (les sommets), puis relie **dans le même ordre**.
Pour un cercle, l'image du centre suffit : le rayon ne change pas.

---

## 4. Les propriétés de conservation

C'est le cœur du programme de 4e : ce que la translation **ne change pas**. Chacune sert
à **calculer sans mesurer** et à **démontrer**.

### Elle conserve les longueurs

Si $A'$ et $B'$ sont les images de $A$ et $B$, alors $A'B' = AB$.

> **Exemple.** $[AB]$ mesure $6{,}3$ cm : son image mesure $6{,}3$ cm. Rien à mesurer.

### Elle conserve les mesures d'angles

> **Exemple.** L'image d'un angle de $52°$ est un angle de $52°$. Donc l'image d'un
> triangle rectangle est un triangle rectangle, et deux droites perpendiculaires ont pour
> images deux droites perpendiculaires.

### Elle conserve les aires

> **Exemple.** Un triangle d'aire $18$ cm² a pour image un triangle d'aire $18$ cm².

### Elle conserve l'alignement, et l'image d'une droite lui est parallèle

$$\boxed{\text{L'image d'une droite par une translation est une droite parallèle}}$$

> **Exemple.** Si $A$, $B$, $C$ sont alignés, leurs images le sont aussi : l'image de
> $(AB)$ est bien une **droite**, et elle est parallèle à $(AB)$ — « parallèle » incluant
> ici le cas où c'est **la même droite** (voir §5).

### Elle conserve le parallélisme

> **Exemple.** Deux droites parallèles ont pour images deux droites parallèles. Ajoute
> les angles et les longueurs : l'image d'un rectangle est un rectangle, celle d'un
> losange un losange, de **mêmes dimensions**.

### Elle ne retourne pas la figure

> **Comparaison.** Un miroir change ta main droite en main gauche : ça, c'est la
> symétrie axiale. Une translation, non — la figure se lit dans le **même sens**.

**Bilan.** La figure image est **superposable** à la figure de départ : il suffit de la
faire glisser, sans la tourner ni la retourner.

---

## 5. Invariants : ce qui bouge, ce qui ne bouge pas

### Aucun point ne reste sur place — c'est **la** différence avec la 5e

| Transformation | Points invariants |
|---|---|
| Symétrie axiale d'axe $(d)$ | **tous** les points de $(d)$ |
| Demi-tour de centre $O$ | **le seul** point $O$ |
| **Translation** (non nulle) | **aucun** |

Logique : tout le monde glisse, personne n'est épargné. Seul cas limite : si $A' = A$,
le glissement est nul et rien ne bouge.

### Les droites qui reviennent sur elles-mêmes

Une droite **parallèle à la direction** de la translation a pour image **elle-même** :
ses points glissent le long d'elle, mais la droite, dans son ensemble, ne change pas.

> **Exemple.** Translation horizontale vers la droite : toute droite horizontale est sa
> propre image. Une droite verticale se retrouve **à côté**, parallèle à celle de départ.

### La refaire deux fois ne ramène pas au départ

C'est le contraire du demi-tour. Deux demi-tours de même centre te ramènent au point de
départ ; deux fois la même translation te fait glisser **deux fois plus loin**, dans la
même direction et le même sens.

---

## 6. Reconnaître la bonne transformation

<!-- schema:reconnaitre -->
![Le même drapeau par une symétrie axiale (retourné), un demi-tour (segments MM′ concourants) et une translation (segments parallèles et de même longueur).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIxNTAiIHgyPSIxNTAiIHkyPSIxNTAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijk0IiB5MT0iODQiIHgyPSIxMDYiIHkyPSI4NCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iNDAiIHgyPSIxMDAiIHkyPSIyMDAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTAsNzAgOTQsODQgNTAsOTgiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjE1MCIgeDI9IjUwIiB5Mj0iNzAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE1MCw3MCAxMDYsODQgMTUwLDk4IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMTUwIiB5Mj0iNzAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTAiIHk9IjE3MSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTUwIiB5PSIxNzEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PHRleHQgeD0iMTEwIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnN5bcOpdHJpZSBheGlhbGU8L3RleHQ+PHRleHQgeD0iMTEwIiB5PSIyNTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZpZ3VyZSByZXRvdXJuw6llPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSIxNTAiIHgyPSIzNzAiIHkyPSI5MCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzE0IiB5MT0iODQiIHgyPSIzMjYiIHkyPSIxNTYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzIwIiBjeT0iMTIwIiByPSIzLjIiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzMyIiB5PSIxMTQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk88L3RleHQ+PHBvbHlnb24gcG9pbnRzPSIyNzAsNzAgMzE0LDg0IDI3MCw5OCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjE1MCIgeDI9IjI3MCIgeTI9IjcwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNzAsMTcwIDMyNiwxNTYgMzcwLDE0MiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjM3MCIgeTE9IjkwIiB4Mj0iMzcwIiB5Mj0iMTcwIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjI3MCIgeT0iMTcxIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5NPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzNzAiIHk9Ijc5IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5N4oCyPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMjM2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5kZW1pLXRvdXI8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyNTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZpZ3VyZSB0b3VybsOpZSBkZSAxODDCsDwvdGV4dD48bGluZSB4MT0iMjIwIiB5MT0iMjAiIHgyPSIyMjAiIHkyPSIyNTAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0OTAiIHkxPSIxNTAiIHgyPSI1OTAiIHkyPSIxOTAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUzNCIgeTE9Ijg0IiB4Mj0iNjM0IiB5Mj0iMTI0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDkwLDcwIDUzNCw4NCA0OTAsOTgiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI0OTAiIHkxPSIxNTAiIHgyPSI0OTAiIHkyPSI3MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTkwLDExMCA2MzQsMTI0IDU5MCwxMzgiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI1OTAiIHkxPSIxOTAiIHgyPSI1OTAiIHkyPSIxMTAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDkwIiB5PSIxNzEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk08L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjU5MCIgeT0iMjExIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5N4oCyPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMjM2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj50cmFuc2xhdGlvbjwvdGV4dD48dGV4dCB4PSI1NTAiIHk9IjI1NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmlndXJlIGdsaXNzw6llPC90ZXh0PjxsaW5lIHgxPSI0NDAiIHkxPSIyMCIgeDI9IjQ0MCIgeTI9IjI1MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+)
*Le même drapeau par une symétrie axiale (retourné), un demi-tour (segments MM′ concourants) et une translation (segments parallèles et de même longueur).*
<!-- /schema -->

Face à deux figures superposables, pose-toi les questions **dans cet ordre**.

1. **La figure est-elle retournée ?** (comme dans un miroir) → **symétrie axiale** ; l'axe
   est la médiatrice de $[MM']$ pour n'importe quel point $M$ et son image.
2. **Sinon, trace les segments $[AA']$, $[BB']$, $[CC']$ qui relient chaque point à son image.**
   - Ils se coupent tous en un **même point**, milieu de chacun → **demi-tour**, de centre
     ce point.
   - Ils sont **parallèles, de même longueur et de même sens** → **translation**.

> ⚠️ Le piège de la 4e : demi-tour et translation **ne retournent ni l'un ni l'autre** la
> figure, et donnent **tous les deux** une image parallèle à la droite de départ. Le test
> des segments $[MM']$ est le seul qui tranche à coup sûr.

> **Culture.** Les pavages d'Escher et ceux de l'Alhambra répètent indéfiniment un même
> motif par translation : d'où cette régularité qui semble pouvoir continuer sans fin.

---

## 7. Tableau récapitulatif

| | Symétrie axiale | Demi-tour (symétrie centrale) | Translation |
|---|---|---|---|
| Donnée par | une **droite** (l'axe) | un **point** (le centre) | une direction, un sens, une longueur |
| Le geste | pliage | demi-tour ($180°$) | glissement |
| Définition du point image | l'axe est la **médiatrice** de $[MM']$ | $O$ est le **milieu** de $[MM']$ | $M$ glisse comme $A$ glisse vers $A'$ |
| Longueurs, angles, aires | conservés | conservés | conservés |
| Alignement, parallélisme | conservés | conservés | conservés |
| Image d'une droite | droite, **pas** parallèle en général | droite **parallèle** | droite **parallèle** |
| Sens de lecture | **retourné** | conservé | conservé |
| Points invariants | ceux de l'axe | $O$ seulement | **aucun** |
| Deux fois de suite | on revient au départ | on revient au départ | on va **deux fois plus loin** |

---

## 8. Les erreurs qui coûtent des points

1. **Changer le déplacement en cours de route.** Le comptage doit être *exactement* le même
   pour tous les points, sans exception. Sinon, ce n'est pas une translation.
2. **Inverser le sens.** Glisser de $A'$ vers $A$ au lieu de $A$ vers $A'$ : direction et
   longueur bonnes, mais la figure part du mauvais côté.
3. **Croire qu'un point ne bouge pas.** Beaucoup laissent sur place un sommet « qui arrangeait
   bien ». Une translation non nulle n'a **aucun** point invariant.
4. **Confondre translation et demi-tour** parce qu'aucune des deux ne retourne la figure.
   Trace les segments $[MM']$ : concourants → demi-tour ; parallèles → translation.
5. **Recalculer longueurs, angles ou aires sur l'image.** Ils sont conservés : recopier
   la valeur suffit, la recalculer c'est risquer une erreur pour rien.
6. **Reporter la longueur au compas sans tracer la parallèle.** Sans la direction, ton point
   atterrit n'importe où sur un cercle. La parallèle d'abord, le compas ensuite.
