---
id: tale-spe-pc-transformations-nucleaires
titre: "Transformations nucléaires et radioactivité"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Constitution du noyau atomique, écriture $^{A}_{Z}\text{X}$ (Seconde)
  - Fonction exponentielle (Terminale, maths ou spécialité)
  - Puissances de 10 et écriture scientifique
statut: brouillon
relu_par: null
---

# Transformations nucléaires et radioactivité

> Jusqu'ici, une transformation chimique réorganisait les **atomes** sans toucher aux
> noyaux. Ici, c'est le **noyau lui-même** qui se transforme : un atome change d'élément.
> L'énergie mise en jeu est colossale, et le phénomène est **aléatoire** — on ne sait pas
> *quand* un noyau donné va se désintégrer, seulement avec quelle **probabilité**.

---

## 1. Noyau, nucléides, isotopes

Un noyau se note $^{A}_{Z}\text{X}$ :

| Symbole | Nom | Ce qu'il compte |
|---|---|---|
| $Z$ | numéro atomique | nombre de **protons** |
| $A$ | nombre de masse | nombre de **nucléons** (protons + neutrons) |
| $N = A - Z$ | — | nombre de **neutrons** |

Deux noyaux sont **isotopes** s'ils ont le même $Z$ mais des $A$ différents (même élément,
nombre de neutrons différent).

> **Exemple.** $^{12}_{6}\text{C}$ et $^{14}_{6}\text{C}$ sont deux isotopes du carbone :
> tous deux ont $6$ protons, mais le premier a $6$ neutrons et le second $8$.

---

## 2. Stabilité des noyaux : le diagramme (N, Z)

<!-- schema:vallee -->
![Diagramme (N, Z) schématique : les noyaux stables suivent la vallée de stabilité, qui s'écarte de N = Z pour les noyaux lourds ; au-delà de Z = 82, aucun noyau n'est stable.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIyOTQiIHgyPSI1MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE2Mi44IiB5MT0iMjk0IiB4Mj0iMTYyLjgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNzUuNiIgeTE9IjI5NCIgeDI9IjI3NS42IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzg4LjQiIHkxPSIyOTQiIHgyPSIzODguNCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwMS4yIiB5MT0iMjk0IiB4Mj0iNTAxLjIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MTQiIHkxPSIyOTQiIHgyPSI2MTQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI5NCIgeDI9IjYxNCIgeTI9IjI5NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI0OS42NyIgeDI9IjYxNCIgeTI9IjI0OS42NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjIwNS4zMyIgeDI9IjYxNCIgeTI9IjIwNS4zMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjE2MSIgeDI9IjYxNCIgeTI9IjE2MSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjExNi42NyIgeDI9IjYxNCIgeTI9IjExNi42NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjcyLjMzIiB4Mj0iNjE0IiB5Mj0iNzIuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSIyOCIgeDI9IjYxNCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjk0IiB4Mj0iNjE5IiB5Mj0iMjk0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYyOCwyOTQgNjE5LDI4OS41IDYxOSwyOTguNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI5NCIgeDI9IjUwIiB5Mj0iMjMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTAsMTQgNDUuNSwyMyA1NC41LDIzIiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjUwIiB5MT0iMjk0IiB4Mj0iNTAiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwIiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGxpbmUgeDE9IjE2Mi44IiB5MT0iMjk0IiB4Mj0iMTYyLjgiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE2Mi44IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwPC90ZXh0PjxsaW5lIHgxPSIyNzUuNiIgeTE9IjI5NCIgeDI9IjI3NS42IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNzUuNiIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40MDwvdGV4dD48bGluZSB4MT0iMzg4LjQiIHkxPSIyOTQiIHgyPSIzODguNCIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzg4LjQiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjA8L3RleHQ+PGxpbmUgeDE9IjUwMS4yIiB5MT0iMjk0IiB4Mj0iNTAxLjIiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwMS4yIiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjgwPC90ZXh0PjxsaW5lIHgxPSI2MTQiIHkxPSIyOTQiIHgyPSI2MTQiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjYxNCIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDA8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMjk0IiB4Mj0iNTAiIHkyPSIyOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIyOTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMjQ5LjY3IiB4Mj0iNTAiIHkyPSIyNDkuNjciIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIyNTMuNjciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjI1PC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjIwNS4zMyIgeDI9IjUwIiB5Mj0iMjA1LjMzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MiIgeT0iMjA5LjMzIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj41MDwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIxNjEiIHgyPSI1MCIgeTI9IjE2MSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDIiIHk9IjE2NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NzU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTE2LjY3IiB4Mj0iNTAiIHkyPSIxMTYuNjciIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIxMjAuNjciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjEwMDwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSI3Mi4zMyIgeDI9IjUwIiB5Mj0iNzIuMzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSI3Ni4zMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTI1PC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjI4IiB4Mj0iNTAiIHkyPSIyOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDIiIHk9IjMyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4xNTA8L3RleHQ+PHRleHQgeD0iNjM0IiB5PSIzMzAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPlogKHByb3RvbnMpPC90ZXh0Pjx0ZXh0IHg9IjQ0IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5OIChuZXV0cm9ucyk8L3RleHQ+PGxpbmUgeDE9IjUwIiB5MT0iMjk0IiB4Mj0iNjE0IiB5Mj0iMTE2LjY3IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjU0OC4wOCIgeT0iMTM2Ljg1IiB3aWR0aD0iNDEuNiIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjU2OC44OCIgeT0iMTQ4Ljg1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OID0gWjwvdGV4dD48cG9seWdvbiBwb2ludHM9IjU1LjY0LDI5MC4zNCA2MS4yOCwyODguNCA2Ni45MiwyODYuNDIgNzIuNTYsMjg0LjQgNzguMiwyODIuMzYgODMuODQsMjgwLjI4IDg5LjQ4LDI3OC4xNyA5NS4xMiwyNzYuMDQgMTAwLjc2LDI3My44OCAxMDYuNCwyNzEuNjkgMTEyLjA0LDI2OS40OCAxMTcuNjgsMjY3LjI1IDEyMy4zMiwyNjQuOTkgMTI4Ljk2LDI2Mi43MSAxMzQuNiwyNjAuNCAxNDAuMjQsMjU4LjA4IDE0NS44OCwyNTUuNzMgMTUxLjUyLDI1My4zNiAxNTcuMTYsMjUwLjk2IDE2Mi44LDI0OC41NSAxNjguNDQsMjQ2LjExIDE3NC4wOCwyNDMuNjYgMTc5LjcyLDI0MS4xOCAxODUuMzYsMjM4LjY5IDE5MSwyMzYuMTcgMTk2LjY0LDIzMy42MyAyMDIuMjgsMjMxLjA3IDIwNy45MiwyMjguNSAyMTMuNTYsMjI1LjkgMjE5LjIsMjIzLjI5IDIyNC44NCwyMjAuNjUgMjMwLjQ4LDIxOCAyMzYuMTIsMjE1LjMyIDI0MS43NiwyMTIuNjMgMjQ3LjQsMjA5LjkyIDI1My4wNCwyMDcuMTkgMjU4LjY4LDIwNC40NCAyNjQuMzIsMjAxLjY3IDI2OS45NiwxOTguODggMjc1LjYsMTk2LjA4IDI4MS4yNCwxOTMuMjYgMjg2Ljg4LDE5MC40MSAyOTIuNTIsMTg3LjU1IDI5OC4xNiwxODQuNjggMzAzLjgsMTgxLjc4IDMwOS40NCwxNzguODYgMzE1LjA4LDE3NS45MyAzMjAuNzIsMTcyLjk4IDMyNi4zNiwxNzAuMDEgMzMyLDE2Ny4wMiAzMzcuNjQsMTY0LjAyIDM0My4yOCwxNjEgMzQ4LjkyLDE1Ny45NiAzNTQuNTYsMTU0LjkgMzYwLjIsMTUxLjgyIDM2NS44NCwxNDguNzMgMzcxLjQ4LDE0NS42MiAzNzcuMTIsMTQyLjQ5IDM4Mi43NiwxMzkuMzQgMzg4LjQsMTM2LjE4IDM5NC4wNCwxMzMgMzk5LjY4LDEyOS44IDQwNS4zMiwxMjYuNTggNDEwLjk2LDEyMy4zNSA0MTYuNiwxMjAuMSA0MjIuMjQsMTE2LjgzIDQyNy44OCwxMTMuNTQgNDMzLjUyLDExMC4yNCA0MzkuMTYsMTA2LjkyIDQ0NC44LDEwMy41OCA0NTAuNDQsMTAwLjIyIDQ1Ni4wOCw5Ni44NSA0NjEuNzIsOTMuNDYgNDY3LjM2LDkwLjA1IDQ3Myw4Ni42MyA0NzguNjQsODMuMTkgNDg0LjI4LDc5LjczIDQ4OS45Miw3Ni4yNSA0OTUuNTYsNzIuNzYgNTAxLjIsNjkuMjUgNTA2Ljg0LDY1LjcyIDUxMi40OCw2Mi4xNyA1MTIuNDgsODMuMTcgNTA2Ljg0LDg2LjUgNTAxLjIsODkuODIgNDk1LjU2LDkzLjEyIDQ4OS45Miw5Ni40IDQ4NC4yOCw5OS42NiA0NzguNjQsMTAyLjkxIDQ3MywxMDYuMTQgNDY3LjM2LDEwOS4zNSA0NjEuNzIsMTEyLjU0IDQ1Ni4wOCwxMTUuNzIgNDUwLjQ0LDExOC44OCA0NDQuOCwxMjIuMDIgNDM5LjE2LDEyNS4xNSA0MzMuNTIsMTI4LjI1IDQyNy44OCwxMzEuMzUgNDIyLjI0LDEzNC40MiA0MTYuNiwxMzcuNDggNDEwLjk2LDE0MC41MSA0MDUuMzIsMTQzLjUzIDM5OS42OCwxNDYuNTQgMzk0LjA0LDE0OS41MiAzODguNCwxNTIuNDkgMzgyLjc2LDE1NS40NCAzNzcuMTIsMTU4LjM4IDM3MS40OCwxNjEuMjkgMzY1Ljg0LDE2NC4xOSAzNjAuMiwxNjcuMDcgMzU0LjU2LDE2OS45NCAzNDguOTIsMTcyLjc4IDM0My4yOCwxNzUuNjEgMzM3LjY0LDE3OC40MiAzMzIsMTgxLjIxIDMyNi4zNiwxODMuOTggMzIwLjcyLDE4Ni43NCAzMTUuMDgsMTg5LjQ4IDMwOS40NCwxOTIuMiAzMDMuOCwxOTQuOSAyOTguMTYsMTk3LjU4IDI5Mi41MiwyMDAuMjUgMjg2Ljg4LDIwMi45IDI4MS4yNCwyMDUuNTMgMjc1LjYsMjA4LjE0IDI2OS45NiwyMTAuNzMgMjY0LjMyLDIxMy4zIDI1OC42OCwyMTUuODYgMjUzLjA0LDIxOC40IDI0Ny40LDIyMC45MSAyNDEuNzYsMjIzLjQxIDIzNi4xMiwyMjUuODkgMjMwLjQ4LDIyOC4zNSAyMjQuODQsMjMwLjc5IDIxOS4yLDIzMy4yMiAyMTMuNTYsMjM1LjYyIDIwNy45MiwyMzggMjAyLjI4LDI0MC4zNyAxOTYuNjQsMjQyLjcxIDE5MSwyNDUuMDQgMTg1LjM2LDI0Ny4zNCAxNzkuNzIsMjQ5LjYyIDE3NC4wOCwyNTEuODkgMTY4LjQ0LDI1NC4xMyAxNjIuOCwyNTYuMzUgMTU3LjE2LDI1OC41NSAxNTEuNTIsMjYwLjczIDE0NS44OCwyNjIuODkgMTQwLjI0LDI2NS4wMyAxMzQuNiwyNjcuMTQgMTI4Ljk2LDI2OS4yMyAxMjMuMzIsMjcxLjMgMTE3LjY4LDI3My4zNSAxMTIuMDQsMjc1LjM3IDEwNi40LDI3Ny4zNyAxMDAuNzYsMjc5LjM0IDk1LjEyLDI4MS4yOSA4OS40OCwyODMuMjEgODMuODQsMjg1LjEgNzguMiwyODYuOTcgNzIuNTYsMjg4LjggNjYuOTIsMjkwLjYgNjEuMjgsMjkyLjM3IDU1LjY0LDI5NCIgZmlsbD0iI2NkZWNjZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjUxMi40OCIgeTE9IjI5NCIgeDI9IjUxMi40OCIgeTI9IjI4IiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUxOC40OCIgeT0iNDUuNzMiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJzdGFydCI+WiA9IDgyPC90ZXh0PjxyZWN0IHg9IjEzOC43NiIgeT0iMTU2Ljg3IiB3aWR0aD0iMTYwLjg4IiBoZWlnaHQ9IjIwLjI1IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iMjE5LjIiIHk9IjE2OS44NyIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+dHJvcCBkZSBuZXV0cm9ucyA6IM6y4oG7PC90ZXh0PjxyZWN0IHg9IjMyMi44OCIgeT0iMjEwLjA3IiB3aWR0aD0iMTUzLjYiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSIzOTkuNjgiIHk9IjIyMy4wNyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+dHJvcCBkZSBwcm90b25zIDogzrLigbo8L3RleHQ+PHJlY3QgeD0iNDk3LjM2IiB5PSIxMDMuNjciIHdpZHRoPSIxMzEuNzYiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSI1NjMuMjQiIHk9IjExNi42NyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bm95YXV4IGxvdXJkcyA6IM6xPC90ZXh0PjxyZWN0IHg9IjIzMC42NCIgeT0iMTM2LjMzIiB3aWR0aD0iMTQ2LjMyIiBoZWlnaHQ9IjIwLjI1IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iMzAzLjgiIHk9IjE0OS4zMyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+dmFsbMOpZSBkZSBzdGFiaWxpdMOpPC90ZXh0Pjwvc3ZnPg==)
*Diagramme (N, Z) schématique : les noyaux stables suivent la vallée de stabilité, qui s'écarte de N = Z pour les noyaux lourds ; au-delà de Z = 82, aucun noyau n'est stable.*
<!-- /schema -->

On place chaque noyau dans un repère : $Z$ (protons) en abscisse, $N$ (neutrons) en ordonnée.
Les noyaux **stables** se regroupent le long d'une **vallée de stabilité**.

- Pour les noyaux légers, la stabilité exige $N \approx Z$ (la droite $N = Z$).
- Pour les noyaux plus lourds, il faut de plus en plus de neutrons : la vallée s'écarte
  au-dessus de la droite $N = Z$.
- Au-delà de $Z = 82$ (le plomb), **aucun** noyau n'est stable.

Un noyau **instable** (radioactif) se situe **hors** de la vallée. Le type de radioactivité
dépend de sa position :

| Position par rapport à la vallée | Défaut | Radioactivité |
|---|---|---|
| au-dessus (trop de neutrons) | excès de $N$ | **β⁻** |
| au-dessous (trop de protons) | excès de $Z$ | **β⁺** |
| noyaux lourds ($Z > 82$) | trop de nucléons | **α** |

> **Exemple.** Le carbone 14 ($^{14}_{6}\text{C}$, $N = 8$) a trop de neutrons par rapport
> à l'isotope stable $^{12}_{6}\text{C}$ ($N = 6$) : il est au-dessus de la vallée, il est
> radioactif **β⁻**.

---

## 3. La radioactivité : trois désintégrations

La **radioactivité** est la transformation spontanée et aléatoire d'un noyau instable (le
**noyau père**) en un autre noyau (le **noyau fils**), avec émission d'une particule.

### Radioactivité α

Le noyau émet un **noyau d'hélium** $^{4}_{2}\text{He}$ (la particule α). Il perd
$2$ protons et $2$ neutrons.

$$\boxed{^{A}_{Z}\text{X} \longrightarrow \; ^{A-4}_{Z-2}\text{Y} + \; ^{4}_{2}\text{He}}$$

> **Exemple.** L'uranium 238 :
> $^{238}_{92}\text{U} \longrightarrow \; ^{234}_{90}\text{Th} + \; ^{4}_{2}\text{He}$.

### Radioactivité β⁻

Un **neutron** se transforme en **proton** ; le noyau émet un **électron**
$^{\;\;0}_{-1}\text{e}$. Le nombre de masse ne change pas, mais $Z$ augmente de $1$.

$$\boxed{^{A}_{Z}\text{X} \longrightarrow \; ^{\;\;A}_{Z+1}\text{Y} + \; ^{\;\;0}_{-1}\text{e}}$$

> **Exemple.** Le carbone 14 (base de la datation) :
> $^{14}_{6}\text{C} \longrightarrow \; ^{14}_{7}\text{N} + \; ^{\;\;0}_{-1}\text{e}$.

### Radioactivité β⁺

Un **proton** se transforme en **neutron** ; le noyau émet un **positron**
$^{0}_{+1}\text{e}$ (l'antiparticule de l'électron). $A$ ne change pas, $Z$ diminue de $1$.

$$\boxed{^{A}_{Z}\text{X} \longrightarrow \; ^{\;\;A}_{Z-1}\text{Y} + \; ^{0}_{+1}\text{e}}$$

> **Exemple.** Le fluor 18, utilisé en imagerie médicale (TEP) :
> $^{18}_{9}\text{F} \longrightarrow \; ^{18}_{8}\text{O} + \; ^{0}_{+1}\text{e}$.

### Le rayonnement γ

Après une désintégration α ou β, le noyau fils est souvent dans un état **excité** : il se
désexcite en émettant un **photon** très énergétique (rayonnement γ). Le γ **ne modifie ni
$A$ ni $Z$** ; il accompagne, il ne transforme pas.

---

## 4. Les lois de conservation (lois de Soddy)

<!-- schema:deplacements -->
![Déplacement dans le diagramme (N, Z) : α retire 2 protons et 2 neutrons, β⁻ change un neutron en proton, β⁺ un proton en neutron.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iODAiIHkxPSIyNzAiIHgyPSIzMTAiIHkyPSIyNzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iODAiIHkxPSIyNzAiIHgyPSI4MCIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgwIiB5MT0iMjI0IiB4Mj0iMzEwIiB5Mj0iMjI0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEyNiIgeTE9IjI3MCIgeDI9IjEyNiIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgwIiB5MT0iMTc4IiB4Mj0iMzEwIiB5Mj0iMTc4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE3MiIgeTE9IjI3MCIgeDI9IjE3MiIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgwIiB5MT0iMTMyIiB4Mj0iMzEwIiB5Mj0iMTMyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIxOCIgeTE9IjI3MCIgeDI9IjIxOCIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgwIiB5MT0iODYiIHgyPSIzMTAiIHkyPSI4NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNjQiIHkxPSIyNzAiIHgyPSIyNjQiIHkyPSI0MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI4MCIgeTE9IjQwIiB4Mj0iMzEwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzEwIiB5MT0iMjcwIiB4Mj0iMzEwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iODAiIHkxPSIyNzAiIHgyPSIzMjAiIHkyPSIyNzAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzMwLDI3MCAzMjAsMjY1IDMyMCwyNzUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iODAiIHkxPSIyNzAiIHgyPSI4MCIgeTI9IjMwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjgwLDIwIDc1LDMwIDg1LDMwIiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iMzMwIiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlo8L3RleHQ+PHRleHQgeD0iNjYiIHk9IjI2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5OPC90ZXh0PjxjaXJjbGUgY3g9IjIxOCIgY3k9IjEzMiIgcj0iMTIiIGZpbGw9IiM1NTUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSIyMjIiIHk9IjE2MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5ub3lhdSBww6hyZTwvdGV4dD48bGluZSB4MT0iMjE4IiB5MT0iMTMyIiB4Mj0iMTMzLjA3IiB5Mj0iMjE2LjkzIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMi44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEyNiwyMjQgMTM2LjYxLDIyMC40NiAxMjkuNTQsMjEzLjM5IiBmaWxsPSIjN2EzZmIwIi8+PGNpcmNsZSBjeD0iMTI2IiBjeT0iMjI0IiByPSI4IiBmaWxsPSIjN2EzZmIwIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iMTEyIiB5PSIyMjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPs6xIDogWiDiiJIgMiwgTiDiiJIgMjwvdGV4dD48bGluZSB4MT0iMjE4IiB5MT0iMTMyIiB4Mj0iMjU2LjkzIiB5Mj0iMTcwLjkzIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI2NCwxNzggMjYwLjQ2LDE2Ny4zOSAyNTMuMzksMTc0LjQ2IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iMjY0IiBjeT0iMTc4IiByPSI4IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iMjc4IiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+zrLigbsgOiBaICsgMSwgTiDiiJIgMTwvdGV4dD48bGluZSB4MT0iMjE4IiB5MT0iMTMyIiB4Mj0iMTc5LjA3IiB5Mj0iOTMuMDciIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTcyLDg2IDE3NS41NCw5Ni42MSAxODIuNjEsODkuNTQiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIxNzIiIGN5PSI4NiIgcj0iOCIgZmlsbD0iIzFmNmZlYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjE1OCIgeT0iODAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPs6y4oG6IDogWiDiiJIgMSwgTiArIDE8L3RleHQ+PHRleHQgeD0iNDQwIiB5PSI3MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5BID0gWiArIE48L3RleHQ+PHRleHQgeD0iNDQwIiB5PSI5NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij7OsSA6IEEgZGltaW51ZSBkZSA0PC90ZXh0Pjx0ZXh0IHg9IjQ0MCIgeT0iMTE2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPs6y4oG7IGV0IM6y4oG6IDogQSBpbmNoYW5nw6k8L3RleHQ+PHRleHQgeD0iNDQwIiB5PSIxMzYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+zrMgOiBuaSBaIG5pIE4gbmUgY2hhbmdlbnQ8L3RleHQ+PC9zdmc+)
*Déplacement dans le diagramme (N, Z) : α retire 2 protons et 2 neutrons, β⁻ change un neutron en proton, β⁺ un proton en neutron.*
<!-- /schema -->

Toute équation nucléaire respecte **deux** conservations :

$$\boxed{\text{conservation du nombre de masse } A \qquad \text{conservation du nombre de charge } Z}$$

Autrement dit : la **somme des $A$** est la même de chaque côté de la flèche, et la **somme
des $Z$** aussi. Ce sont ces deux égalités qui permettent d'identifier le noyau fils.

> **Exemple — méthode.** On cherche le noyau fils $^{A}_{Z}\text{Y}$ dans
> $^{226}_{88}\text{Ra} \longrightarrow \; ^{A}_{Z}\text{Y} + \; ^{4}_{2}\text{He}$.
> Conservation de $A$ : $226 = A + 4 \Rightarrow A = 222$.
> Conservation de $Z$ : $88 = Z + 2 \Rightarrow Z = 86$.
> L'élément de $Z = 86$ est le radon : le fils est $^{222}_{86}\text{Rn}$.

> ⚠️ On conserve $A$ et $Z$, **jamais** le nombre de neutrons ni la masse (une partie de la
> masse se convertit en énergie). L'électron émis compte pour $A = 0$ et $Z = -1$.

---

## 5. La loi de décroissance radioactive

### Caractère aléatoire

On ne peut pas prédire l'instant où **un** noyau se désintègre. Mais sur une **population**
de $N$ noyaux, chacun a, pendant une durée courte, la **même probabilité** de se
désintégrer. Le nombre de noyaux restants décroît alors de façon **exponentielle**.

### La loi

Si $N_0$ est le nombre de noyaux à l'instant $t = 0$, le nombre restant à l'instant $t$ est :

$$\boxed{N(t) = N_0\, e^{-\lambda t}}$$

- $N(t)$ : nombre de noyaux **non encore désintégrés** à l'instant $t$ ;
- $\lambda$ : la **constante radioactive**, en $\text{s}^{-1}$. Elle mesure la probabilité de
  désintégration par unité de temps : plus $\lambda$ est grand, plus la désintégration est rapide.

> **Exemple.** Un échantillon contient $N_0 = 5{,}0 \times 10^{10}$ noyaux, avec
> $\lambda = 2{,}3 \times 10^{-2}\ \text{s}^{-1}$. Au bout de $t = 100$ s :
> $N = 5{,}0 \times 10^{10} \times e^{-2{,}3 \times 10^{-2} \times 100}
> = 5{,}0 \times 10^{10} \times e^{-2{,}3} \approx 5{,}0 \times 10^{9}$ noyaux.

> **Où λ vient-elle ?** La loi découle de $\dfrac{\mathrm{d}N}{\mathrm{d}t} = -\lambda N$ :
> le nombre de désintégrations pendant $\mathrm{d}t$ est proportionnel au nombre de noyaux
> présents. Le signe $-$ traduit la diminution.

---

## 6. Temps de demi-vie

<!-- schema:decroissance -->
![Décroissance radioactive : après chaque demi-vie, il reste la moitié des noyaux, soit N₀/2, puis N₀/4, puis N₀/8.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjAiIHkxPSIyNTQiIHgyPSI2MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4MS4zNiIgeTE9IjI1NCIgeDI9IjE4MS4zNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwMi43MyIgeTE9IjI1NCIgeDI9IjMwMi43MyIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyNC4wOSIgeTE9IjI1NCIgeDI9IjQyNC4wOSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU0NS40NSIgeTE9IjI1NCIgeDI9IjU0NS40NSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjU0IiB4Mj0iNTk0IiB5Mj0iMjU0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjAzLjU1IiB4Mj0iNTk0IiB5Mj0iMjAzLjU1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTUzLjExIiB4Mj0iNTk0IiB5Mj0iMTUzLjExIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTAyLjY2IiB4Mj0iNTk0IiB5Mj0iMTAyLjY2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iNTIuMjEiIHgyPSI1OTQiIHkyPSI1Mi4yMSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI1NCIgeDI9IjU5OSIgeTI9IjI1NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDgsMjU0IDU5OSwyNDkuNSA1OTksMjU4LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNjAiIHkxPSIyNTQiIHgyPSI2MCIgeTI9IjIzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYwLDE0IDU1LjUsMjMgNjQuNSwyMyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI1NCIgeDI9IjYwIiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MCIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxsaW5lIHgxPSIxODEuMzYiIHkxPSIyNTQiIHgyPSIxODEuMzYiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE4MS4zNiIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50wr08L3RleHQ+PGxpbmUgeDE9IjMwMi43MyIgeTE9IjI1NCIgeDI9IjMwMi43MyIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAyLjczIiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIgdMK9PC90ZXh0PjxsaW5lIHgxPSI0MjQuMDkiIHkxPSIyNTQiIHgyPSI0MjQuMDkiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyNC4wOSIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zIHTCvTwvdGV4dD48bGluZSB4MT0iNTQ1LjQ1IiB5MT0iMjU0IiB4Mj0iNTQ1LjQ1IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NDUuNDUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NCB0wr08L3RleHQ+PHRleHQgeD0iNjE0IiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPnRlbXBzPC90ZXh0Pjx0ZXh0IHg9IjU0IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5OKHQpPC90ZXh0PjxwYXRoIGQ9Ik0gNjAgNTIuMjEgTCA2MS43NCA1NC4yMSBMIDYzLjQ4IDU2LjE4IEwgNjUuMjIgNTguMTQgTCA2Ni45NiA2MC4wOCBMIDY4LjcgNjEuOTkgTCA3MC40NCA2My44OSBMIDcyLjE4IDY1Ljc3IEwgNzMuOTIgNjcuNjMgTCA3NS42NiA2OS40NyBMIDc3LjQgNzEuMyBMIDc5LjEzIDczLjEgTCA4MC44NyA3NC44OSBMIDgyLjYxIDc2LjY2IEwgODQuMzUgNzguNDIgTCA4Ni4wOSA4MC4xNSBMIDg3LjgzIDgxLjg3IEwgODkuNTcgODMuNTcgTCA5MS4zMSA4NS4yNiBMIDkzLjA1IDg2LjkzIEwgOTQuNzkgODguNTggTCA5Ni41MyA5MC4yMSBMIDk4LjI3IDkxLjgzIEwgMTAwLjAxIDkzLjQ0IEwgMTAxLjc1IDk1LjAyIEwgMTAzLjQ5IDk2LjU5IEwgMTA1LjIzIDk4LjE1IEwgMTA2Ljk3IDk5LjY5IEwgMTA4LjcxIDEwMS4yMiBMIDExMC40NSAxMDIuNzMgTCAxMTIuMTkgMTA0LjIyIEwgMTEzLjkzIDEwNS43IEwgMTE1LjY3IDEwNy4xNyBMIDExNy40MSAxMDguNjIgTCAxMTkuMTQgMTEwLjA2IEwgMTIwLjg4IDExMS40OCBMIDEyMi42MiAxMTIuODkgTCAxMjQuMzYgMTE0LjI4IEwgMTI2LjEgMTE1LjY3IEwgMTI3Ljg0IDExNy4wMyBMIDEyOS41OCAxMTguMzkgTCAxMzEuMzIgMTE5LjczIEwgMTMzLjA2IDEyMS4wNiBMIDEzNC44IDEyMi4zNyBMIDEzNi41NCAxMjMuNjcgTCAxMzguMjggMTI0Ljk2IEwgMTQwLjAyIDEyNi4yNCBMIDE0MS43NiAxMjcuNSBMIDE0My41IDEyOC43NSBMIDE0NS4yNCAxMjkuOTkgTCAxNDYuOTggMTMxLjIxIEwgMTQ4LjcyIDEzMi40MyBMIDE1MC40NiAxMzMuNjMgTCAxNTIuMiAxMzQuODIgTCAxNTMuOTQgMTM2IEwgMTU1LjY3IDEzNy4xNiBMIDE1Ny40MSAxMzguMzIgTCAxNTkuMTUgMTM5LjQ2IEwgMTYwLjg5IDE0MC41OSBMIDE2Mi42MyAxNDEuNzIgTCAxNjQuMzcgMTQyLjgzIEwgMTY2LjExIDE0My45MiBMIDE2Ny44NSAxNDUuMDEgTCAxNjkuNTkgMTQ2LjA5IEwgMTcxLjMzIDE0Ny4xNiBMIDE3My4wNyAxNDguMjEgTCAxNzQuODEgMTQ5LjI2IEwgMTc2LjU1IDE1MC4yOSBMIDE3OC4yOSAxNTEuMzIgTCAxODAuMDMgMTUyLjMzIEwgMTgxLjc3IDE1My4zNCBMIDE4My41MSAxNTQuMzQgTCAxODUuMjUgMTU1LjMyIEwgMTg2Ljk5IDE1Ni4zIEwgMTg4LjczIDE1Ny4yNiBMIDE5MC40NyAxNTguMjIgTCAxOTIuMjEgMTU5LjE3IEwgMTkzLjk1IDE2MC4xIEwgMTk1LjY4IDE2MS4wMyBMIDE5Ny40MiAxNjEuOTUgTCAxOTkuMTYgMTYyLjg2IEwgMjAwLjkgMTYzLjc2IEwgMjAyLjY0IDE2NC42NSBMIDIwNC4zOCAxNjUuNTQgTCAyMDYuMTIgMTY2LjQxIEwgMjA3Ljg2IDE2Ny4yOCBMIDIwOS42IDE2OC4xMyBMIDIxMS4zNCAxNjguOTggTCAyMTMuMDggMTY5LjgyIEwgMjE0LjgyIDE3MC42NiBMIDIxNi41NiAxNzEuNDggTCAyMTguMyAxNzIuMyBMIDIyMC4wNCAxNzMuMSBMIDIyMS43OCAxNzMuOSBMIDIyMy41MiAxNzQuNjkgTCAyMjUuMjYgMTc1LjQ4IEwgMjI3IDE3Ni4yNSBMIDIyOC43NCAxNzcuMDIgTCAyMzAuNDggMTc3Ljc4IEwgMjMyLjIyIDE3OC41NCBMIDIzMy45NSAxNzkuMjggTCAyMzUuNjkgMTgwLjAyIEwgMjM3LjQzIDE4MC43NSBMIDIzOS4xNyAxODEuNDggTCAyNDAuOTEgMTgyLjE5IEwgMjQyLjY1IDE4Mi45IEwgMjQ0LjM5IDE4My42MSBMIDI0Ni4xMyAxODQuMyBMIDI0Ny44NyAxODQuOTkgTCAyNDkuNjEgMTg1LjY3IEwgMjUxLjM1IDE4Ni4zNSBMIDI1My4wOSAxODcuMDIgTCAyNTQuODMgMTg3LjY4IEwgMjU2LjU3IDE4OC4zNCBMIDI1OC4zMSAxODguOTkgTCAyNjAuMDUgMTg5LjYzIEwgMjYxLjc5IDE5MC4yNyBMIDI2My41MyAxOTAuOSBMIDI2NS4yNyAxOTEuNTIgTCAyNjcuMDEgMTkyLjE0IEwgMjY4Ljc1IDE5Mi43NSBMIDI3MC40OCAxOTMuMzUgTCAyNzIuMjIgMTkzLjk1IEwgMjczLjk2IDE5NC41NSBMIDI3NS43IDE5NS4xMyBMIDI3Ny40NCAxOTUuNzIgTCAyNzkuMTggMTk2LjI5IEwgMjgwLjkyIDE5Ni44NiBMIDI4Mi42NiAxOTcuNDMgTCAyODQuNCAxOTcuOTkgTCAyODYuMTQgMTk4LjU0IEwgMjg3Ljg4IDE5OS4wOSBMIDI4OS42MiAxOTkuNjMgTCAyOTEuMzYgMjAwLjE3IEwgMjkzLjEgMjAwLjcgTCAyOTQuODQgMjAxLjIzIEwgMjk2LjU4IDIwMS43NSBMIDI5OC4zMiAyMDIuMjcgTCAzMDAuMDYgMjAyLjc4IEwgMzAxLjggMjAzLjI4IEwgMzAzLjU0IDIwMy43OSBMIDMwNS4yOCAyMDQuMjggTCAzMDcuMDIgMjA0Ljc3IEwgMzA4Ljc2IDIwNS4yNiBMIDMxMC40OSAyMDUuNzQgTCAzMTIuMjMgMjA2LjIyIEwgMzEzLjk3IDIwNi42OSBMIDMxNS43MSAyMDcuMTYgTCAzMTcuNDUgMjA3LjYyIEwgMzE5LjE5IDIwOC4wOCBMIDMyMC45MyAyMDguNTQgTCAzMjIuNjcgMjA4Ljk4IEwgMzI0LjQxIDIwOS40MyBMIDMyNi4xNSAyMDkuODcgTCAzMjcuODkgMjEwLjMxIEwgMzI5LjYzIDIxMC43NCBMIDMzMS4zNyAyMTEuMTcgTCAzMzMuMTEgMjExLjU5IEwgMzM0Ljg1IDIxMi4wMSBMIDMzNi41OSAyMTIuNDIgTCAzMzguMzMgMjEyLjgzIEwgMzQwLjA3IDIxMy4yNCBMIDM0MS44MSAyMTMuNjQgTCAzNDMuNTUgMjE0LjA0IEwgMzQ1LjI5IDIxNC40NCBMIDM0Ny4wMyAyMTQuODMgTCAzNDguNzYgMjE1LjIyIEwgMzUwLjUgMjE1LjYgTCAzNTIuMjQgMjE1Ljk4IEwgMzUzLjk4IDIxNi4zNiBMIDM1NS43MiAyMTYuNzMgTCAzNTcuNDYgMjE3LjEgTCAzNTkuMiAyMTcuNDYgTCAzNjAuOTQgMjE3LjgyIEwgMzYyLjY4IDIxOC4xOCBMIDM2NC40MiAyMTguNTMgTCAzNjYuMTYgMjE4Ljg5IEwgMzY3LjkgMjE5LjIzIEwgMzY5LjY0IDIxOS41OCBMIDM3MS4zOCAyMTkuOTIgTCAzNzMuMTIgMjIwLjI1IEwgMzc0Ljg2IDIyMC41OSBMIDM3Ni42IDIyMC45MiBMIDM3OC4zNCAyMjEuMjQgTCAzODAuMDggMjIxLjU3IEwgMzgxLjgyIDIyMS44OSBMIDM4My41NiAyMjIuMjEgTCAzODUuMjkgMjIyLjUyIEwgMzg3LjAzIDIyMi44MyBMIDM4OC43NyAyMjMuMTQgTCAzOTAuNTEgMjIzLjQ0IEwgMzkyLjI1IDIyMy43NSBMIDM5My45OSAyMjQuMDUgTCAzOTUuNzMgMjI0LjM0IEwgMzk3LjQ3IDIyNC42NCBMIDM5OS4yMSAyMjQuOTMgTCA0MDAuOTUgMjI1LjIxIEwgNDAyLjY5IDIyNS41IEwgNDA0LjQzIDIyNS43OCBMIDQwNi4xNyAyMjYuMDYgTCA0MDcuOTEgMjI2LjMzIEwgNDA5LjY1IDIyNi42MSBMIDQxMS4zOSAyMjYuODggTCA0MTMuMTMgMjI3LjE1IEwgNDE0Ljg3IDIyNy40MSBMIDQxNi42MSAyMjcuNjggTCA0MTguMzUgMjI3Ljk0IEwgNDIwLjA5IDIyOC4xOSBMIDQyMS44MyAyMjguNDUgTCA0MjMuNTYgMjI4LjcgTCA0MjUuMyAyMjguOTUgTCA0MjcuMDQgMjI5LjIgTCA0MjguNzggMjI5LjQ0IEwgNDMwLjUyIDIyOS42OSBMIDQzMi4yNiAyMjkuOTMgTCA0MzQgMjMwLjE2IEwgNDM1Ljc0IDIzMC40IEwgNDM3LjQ4IDIzMC42MyBMIDQzOS4yMiAyMzAuODYgTCA0NDAuOTYgMjMxLjA5IEwgNDQyLjcgMjMxLjMyIEwgNDQ0LjQ0IDIzMS41NCBMIDQ0Ni4xOCAyMzEuNzcgTCA0NDcuOTIgMjMxLjk5IEwgNDQ5LjY2IDIzMi4yIEwgNDUxLjQgMjMyLjQyIEwgNDUzLjE0IDIzMi42MyBMIDQ1NC44OCAyMzIuODQgTCA0NTYuNjIgMjMzLjA1IEwgNDU4LjM2IDIzMy4yNiBMIDQ2MC4xIDIzMy40NiBMIDQ2MS44NCAyMzMuNjcgTCA0NjMuNTcgMjMzLjg3IEwgNDY1LjMxIDIzNC4wNyBMIDQ2Ny4wNSAyMzQuMjcgTCA0NjguNzkgMjM0LjQ2IEwgNDcwLjUzIDIzNC42NSBMIDQ3Mi4yNyAyMzQuODQgTCA0NzQuMDEgMjM1LjAzIEwgNDc1Ljc1IDIzNS4yMiBMIDQ3Ny40OSAyMzUuNDEgTCA0NzkuMjMgMjM1LjU5IEwgNDgwLjk3IDIzNS43NyBMIDQ4Mi43MSAyMzUuOTUgTCA0ODQuNDUgMjM2LjEzIEwgNDg2LjE5IDIzNi4zMSBMIDQ4Ny45MyAyMzYuNDggTCA0ODkuNjcgMjM2LjY2IEwgNDkxLjQxIDIzNi44MyBMIDQ5My4xNSAyMzcgTCA0OTQuODkgMjM3LjE3IEwgNDk2LjYzIDIzNy4zMyBMIDQ5OC4zNyAyMzcuNSBMIDUwMC4xIDIzNy42NiBMIDUwMS44NCAyMzcuODIgTCA1MDMuNTggMjM3Ljk4IEwgNTA1LjMyIDIzOC4xNCBMIDUwNy4wNiAyMzguMyBMIDUwOC44IDIzOC40NSBMIDUxMC41NCAyMzguNjEgTCA1MTIuMjggMjM4Ljc2IEwgNTE0LjAyIDIzOC45MSBMIDUxNS43NiAyMzkuMDYgTCA1MTcuNSAyMzkuMjEgTCA1MTkuMjQgMjM5LjM1IEwgNTIwLjk4IDIzOS41IEwgNTIyLjcyIDIzOS42NCBMIDUyNC40NiAyMzkuNzggTCA1MjYuMiAyMzkuOTIgTCA1MjcuOTQgMjQwLjA2IEwgNTI5LjY4IDI0MC4yIEwgNTMxLjQyIDI0MC4zNCBMIDUzMy4xNiAyNDAuNDcgTCA1MzQuOSAyNDAuNiBMIDUzNi42NCAyNDAuNzQgTCA1MzguMzggMjQwLjg3IEwgNTQwLjExIDI0MSBMIDU0MS44NSAyNDEuMTMgTCA1NDMuNTkgMjQxLjI1IEwgNTQ1LjMzIDI0MS4zOCBMIDU0Ny4wNyAyNDEuNSBMIDU0OC44MSAyNDEuNjMgTCA1NTAuNTUgMjQxLjc1IEwgNTUyLjI5IDI0MS44NyBMIDU1NC4wMyAyNDEuOTkgTCA1NTUuNzcgMjQyLjExIEwgNTU3LjUxIDI0Mi4yMyBMIDU1OS4yNSAyNDIuMzQgTCA1NjAuOTkgMjQyLjQ2IEwgNTYyLjczIDI0Mi41NyBMIDU2NC40NyAyNDIuNjkgTCA1NjYuMjEgMjQyLjggTCA1NjcuOTUgMjQyLjkxIEwgNTY5LjY5IDI0My4wMiBMIDU3MS40MyAyNDMuMTMgTCA1NzMuMTcgMjQzLjIzIEwgNTc0LjkxIDI0My4zNCBMIDU3Ni42NCAyNDMuNDUgTCA1NzguMzggMjQzLjU1IEwgNTgwLjEyIDI0My42NSBMIDU4MS44NiAyNDMuNzYiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iNTIuMjEiIHgyPSI2MCIgeTI9IjUyLjIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSI1Mi4yMSIgeDI9IjYwIiB5Mj0iMjU0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjUyLjIxIiByPSI0LjUiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI1MiIgeT0iNTYuMjEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPk7igoA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTUzLjExIiB4Mj0iMTgxLjM2IiB5Mj0iMTUzLjExIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTgxLjM2IiB5MT0iMTUzLjExIiB4Mj0iMTgxLjM2IiB5Mj0iMjU0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxODEuMzYiIGN5PSIxNTMuMTEiIHI9IjQuNSIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjUyIiB5PSIxNTcuMTEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPk7igoAvMjwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyMDMuNTUiIHgyPSIzMDIuNzMiIHkyPSIyMDMuNTUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMDIuNzMiIHkxPSIyMDMuNTUiIHgyPSIzMDIuNzMiIHkyPSIyNTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjMwMi43MyIgY3k9IjIwMy41NSIgcj0iNC41IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iNTIiIHk9IjIwNy41NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+TuKCgC80PC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIyOC43OCIgeDI9IjQyNC4wOSIgeTI9IjIyOC43OCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyNC4wOSIgeTE9IjIyOC43OCIgeDI9IjQyNC4wOSIgeTI9IjI1NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNDI0LjA5IiBjeT0iMjI4Ljc4IiByPSI0LjUiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI1MiIgeT0iMjMyLjc4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIj5O4oKALzg8L3RleHQ+PC9zdmc+)
*Décroissance radioactive : après chaque demi-vie, il reste la moitié des noyaux, soit N₀/2, puis N₀/4, puis N₀/8.*
<!-- /schema -->

La **demi-vie** $t_{1/2}$ est la durée au bout de laquelle la **moitié** des noyaux
initialement présents se sont désintégrés : $N(t_{1/2}) = \dfrac{N_0}{2}$.

En reportant dans la loi de décroissance, $\dfrac{N_0}{2} = N_0\, e^{-\lambda t_{1/2}}$, d'où
$e^{-\lambda t_{1/2}} = \dfrac12$, soit $\lambda t_{1/2} = \ln 2$ :

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}} \qquad\Longleftrightarrow\qquad \lambda = \frac{\ln 2}{t_{1/2}}$$

La demi-vie est **caractéristique** du nucléide et **indépendante** de $N_0$ : elle va de la
fraction de seconde à des milliards d'années.

> **Exemple.** L'iode 131 a une demi-vie $t_{1/2} = 8{,}0$ jours. Sa constante radioactive :
> d'abord convertir en secondes, $t_{1/2} = 8{,}0 \times 24 \times 3600 = 6{,}9 \times 10^{5}$ s,
> puis $\lambda = \dfrac{\ln 2}{6{,}9 \times 10^{5}} = 1{,}0 \times 10^{-6}\ \text{s}^{-1}$.

**Lecture d'une courbe.** Sur un graphe $N(t)$, on repère l'ordonnée $N_0/2$, on lit
l'abscisse correspondante : c'est $t_{1/2}$. Après $n$ demi-vies, il reste
$N_0 / 2^{\,n}$ noyaux.

| Temps écoulé | Noyaux restants |
|---|---|
| $t_{1/2}$ | $N_0 / 2$ |
| $2\, t_{1/2}$ | $N_0 / 4$ |
| $3\, t_{1/2}$ | $N_0 / 8$ |
| $n\, t_{1/2}$ | $N_0 / 2^{\,n}$ |

---

## 7. Activité d'un échantillon

L'**activité** $A$ est le **nombre de désintégrations par seconde** dans l'échantillon.
Elle est proportionnelle au nombre de noyaux présents :

$$\boxed{A = \lambda \, N}$$

- $A$ en **becquerel** ($\text{Bq}$), avec $1\ \text{Bq} = 1$ désintégration par seconde ;
- $\lambda$ en $\text{s}^{-1}$, $N$ sans unité (un nombre de noyaux).

Comme $N$ décroît exponentiellement, l'activité aussi : $A(t) = A_0\, e^{-\lambda t}$, avec
la **même** demi-vie que le nombre de noyaux.

> **Exemple.** Pour l'échantillon d'iode 131 précédent
> ($\lambda = 1{,}0 \times 10^{-6}\ \text{s}^{-1}$) contenant $N = 1{,}0 \times 10^{12}$ noyaux :
> $A = \lambda N = 1{,}0 \times 10^{-6} \times 1{,}0 \times 10^{12} = 1{,}0 \times 10^{6}\ \text{Bq}$,
> soit $1{,}0$ MBq.

> ⚠️ Le becquerel est **minuscule** : l'ancienne unité, le curie, valait
> $1\ \text{Ci} = 3{,}7 \times 10^{10}\ \text{Bq}$. Un résultat en Bq est souvent un très
> grand nombre — c'est normal.

---

## 8. Tableau récapitulatif

| Notion | Formule / règle | Unité |
|---|---|---|
| Nombre de neutrons | $N = A - Z$ | — |
| Radioactivité α | $^{A}_{Z}\text{X} \to \; ^{A-4}_{Z-2}\text{Y} + \; ^{4}_{2}\text{He}$ | — |
| Radioactivité β⁻ | $^{A}_{Z}\text{X} \to \; ^{\;\;A}_{Z+1}\text{Y} + \; ^{\;\;0}_{-1}\text{e}$ | — |
| Radioactivité β⁺ | $^{A}_{Z}\text{X} \to \; ^{\;\;A}_{Z-1}\text{Y} + \; ^{0}_{+1}\text{e}$ | — |
| Lois de conservation | somme des $A$ et somme des $Z$ conservées | — |
| Loi de décroissance | $N(t) = N_0\, e^{-\lambda t}$ | — |
| Constante radioactive | $\lambda = \dfrac{\ln 2}{t_{1/2}}$ | $\text{s}^{-1}$ |
| Demi-vie | $t_{1/2} = \dfrac{\ln 2}{\lambda}$ | s |
| Activité | $A = \lambda N$ | Bq ($= \text{s}^{-1}$) |

---

## 9. Les erreurs qui coûtent des points

1. **Vouloir conserver la masse ou le nombre de neutrons.** On ne conserve que $A$ et $Z$.
   Une partie de la masse devient de l'énergie.
2. **Se tromper de sens pour β⁻ / β⁺.** En β⁻, $Z$ **augmente** ($n \to p$) ; en β⁺, $Z$
   **diminue** ($p \to n$). Le nombre de masse $A$, lui, ne bouge pas.
3. **Oublier de convertir la demi-vie en secondes** avant de calculer $\lambda$. Des jours ou
   des années donnés dans l'énoncé doivent passer en secondes pour obtenir $\lambda$ en
   $\text{s}^{-1}$ et une activité en Bq.
4. **Confondre $\lambda$ et $t_{1/2}$.** Ils sont **inversement** proportionnels : un grand
   $\lambda$ (désintégration rapide) correspond à une **petite** demi-vie.
5. **Prendre $N_0 / (2n)$ au lieu de $N_0 / 2^{\,n}$** après $n$ demi-vies. La décroissance
   est géométrique, pas linéaire.
6. **Écrire l'activité en s⁻¹ « tout court » ou en noyaux.** L'unité est le **becquerel**, et
   $N$ dans $A = \lambda N$ est un nombre de noyaux (sans unité), pas une quantité de matière.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, terminale
générale, arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-physique-chimie-2019.txt, section « 1.5 Transformation nucléaire »,
lignes 63-72). Page BO : education.gouv.fr/bo/19/Special8/MENE1921249A.htm ;
PDF officiel : cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction via WebFetch depuis le PDF officiel — à confronter au PDF avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme cite « Radioactivité α et β » sans préciser explicitement β⁺ ni γ. J'ai
  distingué β⁻ et β⁺ (usage courant en terminale) et ajouté un paragraphe court sur le γ
  comme désexcitation. Vérifier le niveau d'exigence attendu : le γ et le positron sont-ils
  au programme, ou seulement α et β⁻ ?
- Le programme ne mentionne PAS explicitement la fission/fusion ni l'énergie de liaison
  (E = mc²) dans cette section 1.5 — je ne les ai PAS traitées. À confirmer qu'elles ne
  relèvent pas de ce chapitre.
- L'équation différentielle dN/dt = -λN est présentée en encadré « pour aller plus loin » :
  vérifier si son établissement est exigible ou seulement l'exploitation de N(t)=N0 e^(-λt).
- Constantes numériques des exemples (t1/2 iode 131 = 8,0 j ; U238→Th234 ; Ra226→Rn222 ;
  C14→N14 ; F18→O18) : valeurs standard à revérifier dans une table.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
