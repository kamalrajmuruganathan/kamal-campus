---
id: 2nde-math-equations-inequations
titre: "Équations et inéquations"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Calcul numérique et algébrique (Seconde)
  - Équations du premier degré (cycle 4)
statut: brouillon
relu_par: null
---

# Équations et inéquations

> Une équation cherche **quand deux expressions sont égales**, une inéquation **quand l'une
> dépasse l'autre**. La différence technique tient en une règle — le renversement du sens —
> mais c'est celle qui fait perdre le plus de points.

---

## 1. Équations du premier degré

$$ax + b = 0 \iff x = -\frac{b}{a} \quad (a \neq 0)$$

**Méthode** : isoler $x$ en effectuant la même opération des deux côtés.

> **Exemple.** $5x - 3 = 2x + 9 \iff 3x = 12 \iff x = 4$.

---

## 2. Équations produit

### La règle du produit nul

$$\boxed{A \times B = 0 \iff A = 0 \ \text{ ou } \ B = 0}$$

C'est **la** technique centrale de la Seconde : on ramène toute équation à une forme
factorisée égale à zéro.

**Méthode en trois temps**

1. Tout ramener dans le membre de gauche, pour avoir $\ldots = 0$
2. **Factoriser**
3. Appliquer la règle du produit nul

> **Exemple.** Résoudre $x^2 = 4x$.
>
> $x^2 - 4x = 0$ puis $x(x-4) = 0$, donc $x = 0$ ou $x = 4$.
>
> ⚠️ **Ne jamais diviser par $x$** : on perdrait la solution $x = 0$. Diviser par une quantité
> qui peut être nulle est une faute de raisonnement, pas seulement d'inattention.

---

## 3. Équations quotient

$$\frac{A}{B} = 0 \iff A = 0 \ \text{ et } \ B \neq 0$$

Un quotient est nul quand son **numérateur** l'est, à condition que le dénominateur ne le soit pas.

**Toujours commencer par la valeur interdite.**

> **Exemple.** $\dfrac{x-3}{x+2} = 0$.
> Valeur interdite : $x = -2$. Puis $x - 3 = 0$ donne $x = 3$, qui est acceptable.

---

## 4. Inéquations — la règle qui change tout

### Les opérations autorisées

| Opération | Effet sur le sens |
|---|---|
| Ajouter ou soustraire un nombre | **inchangé** |
| Multiplier ou diviser par un nombre **positif** | **inchangé** |
| Multiplier ou diviser par un nombre **négatif** | ⚠️ **le sens s'inverse** |

> **Exemple.** $-3x > 12$. En divisant par $-3$ : $x < -4$.
> L'inégalité a **changé de sens**. C'est l'erreur la plus fréquente de toute la Seconde.

> **Pour s'en convaincre** : $2 < 5$, mais en multipliant par $-1$ on obtient $-2 > -5$.

---

## 5. Tableaux de signes

Pour résoudre une inéquation produit ou quotient, on étudie le **signe de chaque facteur**,
puis on applique la règle des signes.

### Signe de $ax + b$

<!-- schema:signe-ax-plus-b -->
![Signe de 2x − 4 (ici a = 2 est positif) : l’expression s’annule en −b/a = 2, elle est négative avant cette valeur et du signe de a, donc positive, après.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTQuMTIiIHkxPSIyOCIgeDI9IjU0LjEyIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEwNi4zNSIgeTE9IjI4IiB4Mj0iMTA2LjM1IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1OC41OSIgeTE9IjI4IiB4Mj0iMTU4LjU5IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIxMC44MiIgeTE9IjI4IiB4Mj0iMjEwLjgyIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI2My4wNiIgeTE9IjI4IiB4Mj0iMjYzLjA2IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMxNS4yOSIgeTE9IjI4IiB4Mj0iMzE1LjI5IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM2Ny41MyIgeTE9IjI4IiB4Mj0iMzY3LjUzIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQxOS43NiIgeTE9IjI4IiB4Mj0iNDE5Ljc2IiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ3MiIgeTE9IjI4IiB4Mj0iNDcyIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjkyIiB4Mj0iNDcyIiB5Mj0iMjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjY1LjYiIHgyPSI0NzIiIHkyPSIyNjUuNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIzOS4yIiB4Mj0iNDcyIiB5Mj0iMjM5LjIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyMTIuOCIgeDI9IjQ3MiIgeTI9IjIxMi44IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTg2LjQiIHgyPSI0NzIiIHkyPSIxODYuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE2MCIgeDI9IjQ3MiIgeTI9IjE2MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjEzMy42IiB4Mj0iNDcyIiB5Mj0iMTMzLjYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxMDcuMiIgeDI9IjQ3MiIgeTI9IjEwNy4yIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iODAuOCIgeDI9IjQ3MiIgeTI9IjgwLjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSI1NC40IiB4Mj0iNDcyIiB5Mj0iNTQuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjI4IiB4Mj0iNDcyIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxNjAiIHgyPSI0NzEiIHkyPSIxNjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDgwLDE2MCA0NzEsMTU1LjUgNDcxLDE2NC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjE1OC41OSIgeTE9IjI5MiIgeDI9IjE1OC41OSIgeTI9IjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE1OC41OSwyMCAxNTQuMDksMjkgMTYzLjA5LDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNDc2IiB5PSIxNzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCB4PSIxNDYuNTkiIHk9IjI0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0NDQiIGhlaWdodD0iMjY0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxwYXRoIGQ9Ik0yOCAzOTcuNkwzMC4yIDM5NS40TDMyLjQgMzkzLjFMMzQuNyAzOTAuOUwzNi45IDM4OC42TDM5LjEgMzg2LjRMNDEuMyAzODQuMUw0My41IDM4MS45TDQ1LjggMzc5LjZMNDggMzc3LjRMNTAuMiAzNzUuMkw1Mi40IDM3Mi45TDU0LjYgMzcwLjdMNTYuOSAzNjguNEw1OS4xIDM2Ni4yTDYxLjMgMzYzLjlMNjMuNSAzNjEuN0w2NS43IDM1OS41TDY4IDM1Ny4yTDcwLjIgMzU1TDcyLjQgMzUyLjdMNzQuNiAzNTAuNUw3Ni44IDM0OC4yTDc5LjEgMzQ2TDgxLjMgMzQzLjdMODMuNSAzNDEuNUw4NS43IDMzOS4zTDg3LjkgMzM3TDkwLjIgMzM0LjhMOTIuNCAzMzIuNUw5NC42IDMzMC4zTDk2LjggMzI4TDk5IDMyNS44TDEwMS4zIDMyMy41TDEwMy41IDMyMS4zTDEwNS43IDMxOS4xTDEwNy45IDMxNi44TDExMC4xIDMxNC42TDExMi40IDMxMi4zTDExNC42IDMxMC4xTDExNi44IDMwNy44TDExOSAzMDUuNkwxMjEuMiAzMDMuNEwxMjMuNSAzMDEuMUwxMjUuNyAyOTguOUwxMjcuOSAyOTYuNkwxMzAuMSAyOTQuNEwxMzIuMyAyOTIuMUwxMzQuNiAyODkuOUwxMzYuOCAyODcuNkwxMzkgMjg1LjRMMTQxLjIgMjgzLjJMMTQzLjQgMjgwLjlMMTQ1LjcgMjc4LjdMMTQ3LjkgMjc2LjRMMTUwLjEgMjc0LjJMMTUyLjMgMjcxLjlMMTU0LjUgMjY5LjdMMTU2LjggMjY3LjRMMTU5IDI2NS4yTDE2MS4yIDI2M0wxNjMuNCAyNjAuN0wxNjUuNiAyNTguNUwxNjcuOSAyNTYuMkwxNzAuMSAyNTRMMTcyLjMgMjUxLjdMMTc0LjUgMjQ5LjVMMTc2LjcgMjQ3LjNMMTc5IDI0NUwxODEuMiAyNDIuOEwxODMuNCAyNDAuNUwxODUuNiAyMzguM0wxODcuOCAyMzZMMTkwLjEgMjMzLjhMMTkyLjMgMjMxLjVMMTk0LjUgMjI5LjNMMTk2LjcgMjI3LjFMMTk4LjkgMjI0LjhMMjAxLjIgMjIyLjZMMjAzLjQgMjIwLjNMMjA1LjYgMjE4LjFMMjA3LjggMjE1LjhMMjEwIDIxMy42TDIxMi4zIDIxMS4zTDIxNC41IDIwOS4xTDIxNi43IDIwNi45TDIxOC45IDIwNC42TDIyMS4xIDIwMi40TDIyMy40IDIwMC4xTDIyNS42IDE5Ny45TDIyNy44IDE5NS42TDIzMCAxOTMuNEwyMzIuMiAxOTEuMkwyMzQuNSAxODguOUwyMzYuNyAxODYuN0wyMzguOSAxODQuNEwyNDEuMSAxODIuMkwyNDMuMyAxNzkuOUwyNDUuNiAxNzcuN0wyNDcuOCAxNzUuNEwyNTAgMTczLjJMMjUyLjIgMTcxTDI1NC40IDE2OC43TDI1Ni43IDE2Ni41TDI1OC45IDE2NC4yTDI2MS4xIDE2MkwyNjMuMyAxNTkuN0wyNjUuNSAxNTcuNUwyNjcuOCAxNTUuMkwyNzAgMTUzTDI3Mi4yIDE1MC44TDI3NC40IDE0OC41TDI3Ni42IDE0Ni4zTDI3OC45IDE0NEwyODEuMSAxNDEuOEwyODMuMyAxMzkuNUwyODUuNSAxMzcuM0wyODcuNyAxMzUuMUwyOTAgMTMyLjhMMjkyLjIgMTMwLjZMMjk0LjQgMTI4LjNMMjk2LjYgMTI2LjFMMjk4LjggMTIzLjhMMzAxLjEgMTIxLjZMMzAzLjMgMTE5LjNMMzA1LjUgMTE3LjFMMzA3LjcgMTE0LjlMMzA5LjkgMTEyLjZMMzEyLjIgMTEwLjRMMzE0LjQgMTA4LjFMMzE2LjYgMTA1LjlMMzE4LjggMTAzLjZMMzIxIDEwMS40TDMyMy4zIDk5LjFMMzI1LjUgOTYuOUwzMjcuNyA5NC43TDMyOS45IDkyLjRMMzMyLjEgOTAuMkwzMzQuNCA4Ny45TDMzNi42IDg1LjdMMzM4LjggODMuNEwzNDEgODEuMkwzNDMuMiA3OUwzNDUuNSA3Ni43TDM0Ny43IDc0LjVMMzQ5LjkgNzIuMkwzNTIuMSA3MEwzNTQuMyA2Ny43TDM1Ni42IDY1LjVMMzU4LjggNjMuMkwzNjEgNjFMMzYzLjIgNTguOEwzNjUuNCA1Ni41TDM2Ny43IDU0LjNMMzY5LjkgNTJMMzcyLjEgNDkuOEwzNzQuMyA0Ny41TDM3Ni41IDQ1LjNMMzc4LjggNDNMMzgxIDQwLjhMMzgzLjIgMzguNkwzODUuNCAzNi4zTDM4Ny42IDM0LjFMMzg5LjkgMzEuOEwzOTIuMSAyOS42TDM5NC4zIDI3LjNMMzk2LjUgMjUuMUwzOTguNyAyMi45TDQwMSAyMC42TDQwMy4yIDE4LjRMNDA1LjQgMTYuMUw0MDcuNiAxMy45TDQwOS44IDExLjZMNDEyLjEgOS40TDQxNC4zIDcuMUw0MTYuNSA0LjlMNDE4LjcgMi43TDQyMC45IDAuNEw0MjMuMiAtMS44TDQyNS40IC00LjFMNDI3LjYgLTYuM0w0MjkuOCAtOC42TDQzMiAtMTAuOEw0MzQuMyAtMTMuMUw0MzYuNSAtMTUuM0w0MzguNyAtMTcuNUw0NDAuOSAtMTkuOEw0NDMuMSAtMjJMNDQ1LjQgLTI0LjNMNDQ3LjYgLTI2LjVMNDQ5LjggLTI4LjhMNDUyIC0zMUw0NTQuMiAtMzMuMkw0NTYuNSAtMzUuNUw0NTguNyAtMzcuN0w0NjAuOSAtNDBMNDYzLjEgLTQyLjJMNDY1LjMgLTQ0LjVMNDY3LjYgLTQ2LjdMNDY5LjggLTQ5TDQ3MiAtNTEuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTYwIiB4Mj0iMjYzLjA2IiB5Mj0iMTYwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI2My4wNiIgeTE9IjE2MCIgeDI9IjQ3MiIgeTI9IjE2MCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48dGV4dCB4PSI0MjMuOTgiIHk9IjQ3Ljg0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj55ID0gMngg4oiSIDQ8L3RleHQ+PGNpcmNsZSBjeD0iMjYzLjA2IiBjeT0iMTYwIiByPSI0IiBmaWxsPSIjMTYyMzJlIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI3MS4wNiIgeT0iMTg0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkmIvYSA9IDI8L3RleHQ+PHRleHQgeD0iMTMyLjQ3IiB5PSIxNDQuMTYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPm7DqWdhdGlmPC90ZXh0Pjx0ZXh0IHg9IjM4OC40MiIgeT0iMTg2LjQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPnBvc2l0aWY8L3RleHQ+PC9zdmc+)
*Signe de 2x − 4 (ici a = 2 est positif) : l’expression s’annule en −b/a = 2, elle est négative avant cette valeur et du signe de a, donc positive, après.*
<!-- /schema -->

Il s'annule en $-\dfrac{b}{a}$, et est **du signe de $a$ après** cette valeur.

> **Exemple.** Résoudre $(x-1)(x+3) \geqslant 0$.

| $x$ | $-\infty$ | | $-3$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $-$ | $-$ | $0$ | $+$ | |
| $x + 3$ | | $-$ | $0$ | $+$ | $+$ | $+$ | |
| **produit** | | $+$ | $0$ | $-$ | $0$ | $+$ | |

Solutions : $x \in \left]-\infty\,;-3\right] \cup \left[1\,;+\infty\right[$

> ⚠️ Pour un **quotient**, les valeurs qui annulent le dénominateur sont **exclues** : crochet
> ouvert et double barre dans le tableau.

---

## 6. Méthode générale pour une inéquation

1. Tout ramener d'un même côté : $\ldots \leqslant 0$ ou $\ldots \geqslant 0$
2. Factoriser
3. Dresser le tableau de signes
4. Lire les solutions et les écrire sous forme d'**intervalles**

> **Ne jamais** « faire passer » un facteur de l'autre côté en divisant : son signe est inconnu,
> donc on ne sait pas si le sens change.

---

## 7. À retenir absolument

| | |
|---|---|
| Produit nul | $AB = 0 \iff A = 0$ ou $B = 0$ |
| Quotient nul | $\dfrac{A}{B} = 0 \iff A = 0$ et $B \neq 0$ |
| Multiplication par un négatif | le sens de l'inégalité **s'inverse** |
| Signe de $ax+b$ | s'annule en $-\dfrac ba$, signe de $a$ après |
| Solutions d'inéquation | écrites en **intervalles** |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier d'inverser le sens** en divisant par un nombre négatif.
2. **Diviser par $x$** dans une équation : on perd la solution $x = 0$. Il faut factoriser.
3. **Oublier la valeur interdite** d'un quotient — et pire, la donner comme solution.
4. **Écrire les solutions d'une inéquation sous forme d'égalités** : on attend des intervalles.
5. **Faire passer un facteur littéral de l'autre côté** dans une inéquation : son signe est
   inconnu.
6. **Fermer le crochet sur une valeur interdite** dans le résultat.
7. **Confondre $\cup$ et $\cap$** : les solutions d'une inéquation produit forment souvent une
   **réunion** de deux intervalles.
