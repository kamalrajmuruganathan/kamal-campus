---
id: 3e-math-racine-carree
titre: "Racine carrée : résoudre x² = a"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Définition de la racine carrée d'un nombre positif et encadrement (4e)
  - Carrés des nombres entiers de 0 à 12 (4e)
  - Fonction carré et sa représentation graphique (3e)
  - Équation produit nul et identité a² − b² = (a − b)(a + b) (3e)
  - Égalité de Pythagore dans un triangle rectangle (3e)
statut: brouillon
relu_par: null
---

# Racine carrée : résoudre $x^2 = a$

> En 4e, tu partais d'un nombre et tu cherchais sa racine : $\sqrt{49} = 7$, un seul
> résultat. Cette année, la question change de sens. On te donne l'aire et on demande
> **quels** nombres ont ce carré. Et là, surprise : il y en a souvent **deux**.

---

## 0. Ce que tu sais déjà

Tout ce qui suit s'appuie sur la fiche **« Racine carrée » de 4e**. Relis-la si l'un de ces
trois points ne te revient pas immédiatement : $\sqrt{a}$ est le nombre **positif** dont le
carré vaut $a$, et il n'existe que si $a \geqslant 0$ ; $(\sqrt{a})^2 = a$ ; on sait
encadrer $\sqrt{n}$ entre deux entiers consécutifs.

**L'automatisme exigé cette année encore** : les carrés des entiers de $0$ à $12$.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 |

---

## 1. Deux objets à ne surtout pas confondre

C'est **la** difficulté de ce chapitre. Prends trente secondes de plus sur ce tableau.

| | $\sqrt{a}$ | l'équation $x^2 = a$ |
|---|---|---|
| Ce que c'est | **un nombre** | **une question** |
| Ce que ça donne | une seule valeur, positive | zéro, une ou **deux** valeurs |
| Exemple | $\sqrt{25} = 5$ | $x^2 = 25$ a pour solutions $5$ **et** $-5$ |

$\sqrt{25}$ vaut $5$, et rien d'autre. Mais quand on **cherche** les nombres dont le carré
fait $25$, $-5$ convient aussi, puisque $(-5)^2 = 25$.

> ⚠️ **Ne réponds jamais « $\sqrt{25} = \pm 5$ ».** Le symbole $\sqrt{\ }$ désigne un seul
> nombre : c'est l'**équation** qui a deux solutions, pas la racine.

---

## 2. Résoudre $x^2 = a$ analytiquement

« Analytiquement » veut dire : par le calcul, avec des valeurs **exactes**. Tout dépend du
signe de $a$. Trois cas, pas un de plus.

### Cas 1 — si $a > 0$ : deux solutions opposées

$$\boxed{x^2 = a \iff x = \sqrt{a} \ \text{ ou } \ x = -\sqrt{a}}$$

> **Exemple.** $x^2 = 49$ donne $x = 7$ ou $x = -7$. Vérifie les deux :
> $7^2 = 49$ ✓ et $(-7)^2 = 49$ ✓

> **Exemple — quand ça ne tombe pas juste.** $x^2 = 5$ donne $x = \sqrt{5}$ ou
> $x = -\sqrt{5}$. Ce sont les **valeurs exactes** : ne les remplace pas par $2{,}236$ si on
> ne te demande pas une valeur approchée.

**Pourquoi exactement deux, et pas trois ?** Parce que tu sais factoriser une différence de
deux carrés :
$$x^2 = a \iff x^2 - (\sqrt{a})^2 = 0 \iff (x - \sqrt{a})(x + \sqrt{a}) = 0$$

Un produit est nul si et seulement si l'un de ses facteurs est nul. Donc $x = \sqrt{a}$ ou
$x = -\sqrt{a}$ — et aucune autre possibilité.

### Cas 2 — si $a = 0$ : une seule solution

$$x^2 = 0 \iff x = 0$$

Le seul nombre dont le carré est nul est $0$. Ici, les deux solutions se confondent : ne
réponds pas « $0$ et $-0$ », c'est le même nombre.

### Cas 3 — si $a < 0$ : aucune solution

$x^2 = -16$ n'a **aucune** solution. Un carré n'est jamais négatif : un nombre positif
multiplié par lui-même est positif, un nombre négatif aussi.

> **La réponse attendue** est une phrase : « Cette équation n'a pas de solution, car un
> carré est toujours positif ou nul. » Pas une case vide.

---

## 3. Résoudre $x^2 = a$ graphiquement

<!-- schema:resolution-graphique -->
![Pour résoudre x² = a, on coupe la parabole par la droite y = a : deux points si a est positif, un seul si a = 0, aucun si a est négatif.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIzNTAiIHgyPSI1MCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjkzLjc1IiB5MT0iMzUwIiB4Mj0iOTMuNzUiIHkyPSIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMzcuNSIgeTE9IjM1MCIgeDI9IjEzNy41IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTgxLjI1IiB5MT0iMzUwIiB4Mj0iMTgxLjI1IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjI1IiB5MT0iMzUwIiB4Mj0iMjI1IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjY4Ljc1IiB5MT0iMzUwIiB4Mj0iMjY4Ljc1IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzEyLjUiIHkxPSIzNTAiIHgyPSIzMTIuNSIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1Ni4yNSIgeTE9IjM1MCIgeDI9IjM1Ni4yNSIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMCIgeTE9IjM1MCIgeDI9IjQwMCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzUwIiB4Mj0iNDAwIiB5Mj0iMzUwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzI3LjE0IiB4Mj0iNDAwIiB5Mj0iMzI3LjE0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzA0LjI5IiB4Mj0iNDAwIiB5Mj0iMzA0LjI5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjgxLjQzIiB4Mj0iNDAwIiB5Mj0iMjgxLjQzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjU4LjU3IiB4Mj0iNDAwIiB5Mj0iMjU4LjU3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjM1LjcxIiB4Mj0iNDAwIiB5Mj0iMjM1LjcxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjEyLjg2IiB4Mj0iNDAwIiB5Mj0iMjEyLjg2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTkwIiB4Mj0iNDAwIiB5Mj0iMTkwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTY3LjE0IiB4Mj0iNDAwIiB5Mj0iMTY3LjE0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTQ0LjI5IiB4Mj0iNDAwIiB5Mj0iMTQ0LjI5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTIxLjQzIiB4Mj0iNDAwIiB5Mj0iMTIxLjQzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iOTguNTciIHgyPSI0MDAiIHkyPSI5OC41NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9Ijc1LjcxIiB4Mj0iNDAwIiB5Mj0iNzUuNzEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSI1Mi44NiIgeDI9IjQwMCIgeTI9IjUyLjg2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMzAiIHgyPSI0MDAiIHkyPSIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI1OC41NyIgeDI9IjQwNyIgeTI9IjI1OC41NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MTYsMjU4LjU3IDQwNywyNTQuMDcgNDA3LDI2My4wNyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIyMjUiIHkxPSIzNTAiIHgyPSIyMjUiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMjUsMTQgMjIwLjUsMjMgMjI5LjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTAiIHkxPSIyNTQuNTciIHgyPSI1MCIgeTI9IjI2Mi41NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oiSNDwvdGV4dD48bGluZSB4MT0iOTMuNzUiIHkxPSIyNTQuNTciIHgyPSI5My43NSIgeTI9IjI2Mi41NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iOTMuNzUiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oiSMzwvdGV4dD48bGluZSB4MT0iMTM3LjUiIHkxPSIyNTQuNTciIHgyPSIxMzcuNSIgeTI9IjI2Mi41NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTM3LjUiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oiSMjwvdGV4dD48bGluZSB4MT0iMTgxLjI1IiB5MT0iMjU0LjU3IiB4Mj0iMTgxLjI1IiB5Mj0iMjYyLjU3IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxODEuMjUiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oiSMTwvdGV4dD48bGluZSB4MT0iMjY4Ljc1IiB5MT0iMjU0LjU3IiB4Mj0iMjY4Ljc1IiB5Mj0iMjYyLjU3IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNjguNzUiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48bGluZSB4MT0iMzEyLjUiIHkxPSIyNTQuNTciIHgyPSIzMTIuNSIgeTI9IjI2Mi41NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzEyLjUiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD48bGluZSB4MT0iMzU2LjI1IiB5MT0iMjU0LjU3IiB4Mj0iMzU2LjI1IiB5Mj0iMjYyLjU3IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNTYuMjUiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48bGluZSB4MT0iNDAwIiB5MT0iMjU0LjU3IiB4Mj0iNDAwIiB5Mj0iMjYyLjU3IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDAiIHk9IjI3NS41NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iMzUwIiB4Mj0iMjI5IiB5Mj0iMzUwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMTciIHk9IjM1NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+4oiSNDwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iMzA0LjI5IiB4Mj0iMjI5IiB5Mj0iMzA0LjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMTciIHk9IjMwOC4yOSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+4oiSMjwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iMjEyLjg2IiB4Mj0iMjI5IiB5Mj0iMjEyLjg2IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMTciIHk9IjIxNi44NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iMTY3LjE0IiB4Mj0iMjI5IiB5Mj0iMTY3LjE0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMTciIHk9IjE3MS4xNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NDwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iMTIxLjQzIiB4Mj0iMjI5IiB5Mj0iMTIxLjQzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMTciIHk9IjEyNS40MyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NjwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iNzUuNzEiIHgyPSIyMjkiIHkyPSI3NS43MSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjE3IiB5PSI3OS43MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+ODwvdGV4dD48bGluZSB4MT0iMjIxIiB5MT0iMzAiIHgyPSIyMjkiIHkyPSIzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjE3IiB5PSIzNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTA8L3RleHQ+PHRleHQgeD0iMjE3IiB5PSIyNzUuNTciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PHBhdGggZD0iTSA4Ny45MiAzNC4xNyBMIDg5LjM4IDM4LjkxIEwgOTAuODMgNDMuNjEgTCA5Mi4yOSA0OC4yNiBMIDkzLjc1IDUyLjg2IEwgOTUuMjEgNTcuNCBMIDk2LjY3IDYxLjkgTCA5OC4xMyA2Ni4zNCBMIDk5LjU4IDcwLjc0IEwgMTAxLjA0IDc1LjA4IEwgMTAyLjUgNzkuMzcgTCAxMDMuOTYgODMuNjEgTCAxMDUuNDIgODcuOCBMIDEwNi44OCA5MS45NCBMIDEwOC4zMyA5Ni4wMyBMIDEwOS43OSAxMDAuMDcgTCAxMTEuMjUgMTA0LjA2IEwgMTEyLjcxIDEwNy45OSBMIDExNC4xNyAxMTEuODggTCAxMTUuNjMgMTE1LjcxIEwgMTE3LjA4IDExOS41IEwgMTE4LjU0IDEyMy4yMyBMIDEyMCAxMjYuOTEgTCAxMjEuNDYgMTMwLjU1IEwgMTIyLjkyIDEzNC4xMyBMIDEyNC4zOCAxMzcuNjYgTCAxMjUuODMgMTQxLjE0IEwgMTI3LjI5IDE0NC41NyBMIDEyOC43NSAxNDcuOTQgTCAxMzAuMjEgMTUxLjI3IEwgMTMxLjY3IDE1NC41NSBMIDEzMy4xMyAxNTcuNzcgTCAxMzQuNTggMTYwLjk1IEwgMTM2LjA0IDE2NC4wNyBMIDEzNy41IDE2Ny4xNCBMIDEzOC45NiAxNzAuMTcgTCAxNDAuNDIgMTczLjE0IEwgMTQxLjg4IDE3Ni4wNiBMIDE0My4zMyAxNzguOTMgTCAxNDQuNzkgMTgxLjc1IEwgMTQ2LjI1IDE4NC41MSBMIDE0Ny43MSAxODcuMjMgTCAxNDkuMTcgMTg5LjkgTCAxNTAuNjMgMTkyLjUxIEwgMTUyLjA4IDE5NS4wOCBMIDE1My41NCAxOTcuNTkgTCAxNTUgMjAwLjA2IEwgMTU2LjQ2IDIwMi40NyBMIDE1Ny45MiAyMDQuODMgTCAxNTkuMzggMjA3LjE0IEwgMTYwLjgzIDIwOS40IEwgMTYyLjI5IDIxMS42MSBMIDE2My43NSAyMTMuNzcgTCAxNjUuMjEgMjE1Ljg4IEwgMTY2LjY3IDIxNy45NCBMIDE2OC4xMyAyMTkuOTQgTCAxNjkuNTggMjIxLjkgTCAxNzEuMDQgMjIzLjggTCAxNzIuNSAyMjUuNjYgTCAxNzMuOTYgMjI3LjQ2IEwgMTc1LjQyIDIyOS4yMSBMIDE3Ni44OCAyMzAuOTEgTCAxNzguMzMgMjMyLjU3IEwgMTc5Ljc5IDIzNC4xNyBMIDE4MS4yNSAyMzUuNzEgTCAxODIuNzEgMjM3LjIxIEwgMTg0LjE3IDIzOC42NiBMIDE4NS42MyAyNDAuMDYgTCAxODcuMDggMjQxLjQgTCAxODguNTQgMjQyLjcgTCAxOTAgMjQzLjk0IEwgMTkxLjQ2IDI0NS4xNCBMIDE5Mi45MiAyNDYuMjggTCAxOTQuMzggMjQ3LjM3IEwgMTk1LjgzIDI0OC40MSBMIDE5Ny4yOSAyNDkuNCBMIDE5OC43NSAyNTAuMzQgTCAyMDAuMjEgMjUxLjIzIEwgMjAxLjY3IDI1Mi4wNyBMIDIwMy4xMyAyNTIuODYgTCAyMDQuNTggMjUzLjU5IEwgMjA2LjA0IDI1NC4yOCBMIDIwNy41IDI1NC45MSBMIDIwOC45NiAyNTUuNSBMIDIxMC40MiAyNTYuMDMgTCAyMTEuODggMjU2LjUxIEwgMjEzLjMzIDI1Ni45NSBMIDIxNC43OSAyNTcuMzMgTCAyMTYuMjUgMjU3LjY2IEwgMjE3LjcxIDI1Ny45NCBMIDIxOS4xNyAyNTguMTcgTCAyMjAuNjMgMjU4LjM0IEwgMjIyLjA4IDI1OC40NyBMIDIyMy41NCAyNTguNTUgTCAyMjUgMjU4LjU3IEwgMjI2LjQ2IDI1OC41NSBMIDIyNy45MiAyNTguNDcgTCAyMjkuMzcgMjU4LjM0IEwgMjMwLjgzIDI1OC4xNyBMIDIzMi4yOSAyNTcuOTQgTCAyMzMuNzUgMjU3LjY2IEwgMjM1LjIxIDI1Ny4zMyBMIDIzNi42NyAyNTYuOTUgTCAyMzguMTMgMjU2LjUxIEwgMjM5LjU4IDI1Ni4wMyBMIDI0MS4wNCAyNTUuNSBMIDI0Mi41IDI1NC45MSBMIDI0My45NiAyNTQuMjggTCAyNDUuNDIgMjUzLjU5IEwgMjQ2Ljg4IDI1Mi44NiBMIDI0OC4zMyAyNTIuMDcgTCAyNDkuNzkgMjUxLjIzIEwgMjUxLjI1IDI1MC4zNCBMIDI1Mi43MSAyNDkuNCBMIDI1NC4xNyAyNDguNDEgTCAyNTUuNjMgMjQ3LjM3IEwgMjU3LjA4IDI0Ni4yOCBMIDI1OC41NCAyNDUuMTQgTCAyNjAgMjQzLjk0IEwgMjYxLjQ2IDI0Mi43IEwgMjYyLjkyIDI0MS40IEwgMjY0LjM4IDI0MC4wNiBMIDI2NS44MyAyMzguNjYgTCAyNjcuMjkgMjM3LjIxIEwgMjY4Ljc1IDIzNS43MSBMIDI3MC4yMSAyMzQuMTcgTCAyNzEuNjcgMjMyLjU3IEwgMjczLjEzIDIzMC45MSBMIDI3NC41OCAyMjkuMjEgTCAyNzYuMDQgMjI3LjQ2IEwgMjc3LjUgMjI1LjY2IEwgMjc4Ljk2IDIyMy44IEwgMjgwLjQyIDIyMS45IEwgMjgxLjg4IDIxOS45NCBMIDI4My4zMyAyMTcuOTQgTCAyODQuNzkgMjE1Ljg4IEwgMjg2LjI1IDIxMy43NyBMIDI4Ny43MSAyMTEuNjEgTCAyODkuMTcgMjA5LjQgTCAyOTAuNjMgMjA3LjE0IEwgMjkyLjA4IDIwNC44MyBMIDI5My41NCAyMDIuNDcgTCAyOTUgMjAwLjA2IEwgMjk2LjQ2IDE5Ny41OSBMIDI5Ny45MiAxOTUuMDggTCAyOTkuMzggMTkyLjUxIEwgMzAwLjgzIDE4OS45IEwgMzAyLjI5IDE4Ny4yMyBMIDMwMy43NSAxODQuNTEgTCAzMDUuMjEgMTgxLjc1IEwgMzA2LjY3IDE3OC45MyBMIDMwOC4xMyAxNzYuMDYgTCAzMDkuNTggMTczLjE0IEwgMzExLjA0IDE3MC4xNyBMIDMxMi41IDE2Ny4xNCBMIDMxMy45NiAxNjQuMDcgTCAzMTUuNDIgMTYwLjk1IEwgMzE2Ljg4IDE1Ny43NyBMIDMxOC4zMyAxNTQuNTUgTCAzMTkuNzkgMTUxLjI3IEwgMzIxLjI1IDE0Ny45NCBMIDMyMi43MSAxNDQuNTcgTCAzMjQuMTcgMTQxLjE0IEwgMzI1LjYzIDEzNy42NiBMIDMyNy4wOCAxMzQuMTMgTCAzMjguNTQgMTMwLjU1IEwgMzMwIDEyNi45MSBMIDMzMS40NiAxMjMuMjMgTCAzMzIuOTIgMTE5LjUgTCAzMzQuMzggMTE1LjcxIEwgMzM1LjgzIDExMS44OCBMIDMzNy4yOSAxMDcuOTkgTCAzMzguNzUgMTA0LjA2IEwgMzQwLjIxIDEwMC4wNyBMIDM0MS42NyA5Ni4wMyBMIDM0My4xMyA5MS45NCBMIDM0NC41OCA4Ny44IEwgMzQ2LjA0IDgzLjYxIEwgMzQ3LjUgNzkuMzcgTCAzNDguOTYgNzUuMDggTCAzNTAuNDIgNzAuNzQgTCAzNTEuODggNjYuMzQgTCAzNTMuMzMgNjEuOSBMIDM1NC43OSA1Ny40IEwgMzU2LjI1IDUyLjg2IEwgMzU3LjcxIDQ4LjI2IEwgMzU5LjE3IDQzLjYxIEwgMzYwLjYzIDM4LjkxIEwgMzYyLjA4IDM0LjE3IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjM3My4zNSIgeT0iNDQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+eSA9IHjCsjwvdGV4dD48bGluZSB4MT0iNTAiIHkxPSIxNjcuMTQiIHgyPSI0MDAiIHkyPSIxNjcuMTQiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTM3LjUiIHkxPSIxNjcuMTQiIHgyPSIxMzcuNSIgeTI9IjI1OC41NyIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxMzcuNSIgY3k9IjE2Ny4xNCIgcj0iNSIgZmlsbD0iIzFhN2Y0YiIvPjxjaXJjbGUgY3g9IjEzNy41IiBjeT0iMjU4LjU3IiByPSI0IiBmaWxsPSIjMWE3ZjRiIi8+PGxpbmUgeDE9IjMxMi41IiB5MT0iMTY3LjE0IiB4Mj0iMzEyLjUiIHkyPSIyNTguNTciIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzEyLjUiIGN5PSIxNjcuMTQiIHI9IjUiIGZpbGw9IiMxYTdmNGIiLz48Y2lyY2xlIGN4PSIzMTIuNSIgY3k9IjI1OC41NyIgcj0iNCIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHg9IjQxNSIgeT0iNzAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+YSA9IDQgJmd0OyAwIDogZGV1eDwvdGV4dD48dGV4dCB4PSI0MTUiIHk9IjkwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnNvbHV0aW9ucywg4oiSMiBldCAyPC90ZXh0PjxsaW5lIHgxPSI1MCIgeTE9IjI1OC41NyIgeDI9IjQwMCIgeTI9IjI1OC41NyIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjIyNSIgY3k9IjI1OC41NyIgcj0iNiIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHg9IjQxNSIgeT0iMTMyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmEgPSAwIDogdW5lIHNldWxlPC90ZXh0Pjx0ZXh0IHg9IjQxNSIgeT0iMTUyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnNvbHV0aW9uLCAwPC90ZXh0PjxsaW5lIHgxPSI1MCIgeTE9IjMwNC4yOSIgeDI9IjQwMCIgeTI9IjMwNC4yOSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDE1IiB5PSIxOTQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+YSA9IOKIkjIgJmx0OyAwIDo8L3RleHQ+PHRleHQgeD0iNDE1IiB5PSIyMTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCI+YXVjdW5lIHNvbHV0aW9uPC90ZXh0Pjwvc3ZnPg==)
*Pour résoudre x² = a, on coupe la parabole par la droite y = a : deux points si a est positif, un seul si a = 0, aucun si a est négatif.*
<!-- /schema -->

Le programme demande les **deux** méthodes. La lecture graphique s'appuie sur la courbe de
la **fonction carré**, celle qui à $x$ associe $x^2$.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $x^2$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

Cette courbe s'appelle une **parabole**. Deux choses à voir dessus :

- elle est **au-dessus** de l'axe des abscisses (ou le touche) : un carré n'est jamais
  négatif ;
- elle est **symétrique** par rapport à l'axe des ordonnées : $x$ et $-x$ ont le même carré.
  C'est exactement ce qui fabrique les deux solutions opposées.

> **Culture, non exigible.** Une parabole possède un **foyer**, où se rassemblent les rayons
> arrivant parallèlement à son axe : c'est la forme d'une antenne parabolique. Autre
> curiosité : des **algorithmes d'extraction de racines carrées** approchent $\sqrt{a}$
> étape par étape, sans calculatrice, et cela depuis l'Antiquité.

**La méthode, en trois temps.** Trace la courbe de la fonction carré ; trace la **droite
horizontale** d'équation $y = a$ ; lis les **abscisses** des points d'intersection.

| Position de la droite | Points d'intersection | Solutions |
|---|---|---|
| $a > 0$ | $2$ | deux, opposées — pour $y = 4$, on lit $-2$ et $2$ |
| $a = 0$ | $1$ (le sommet) | une seule, $0$ |
| $a < 0$ | $0$ (la droite passe sous la courbe) | aucune |

> ⚠️ **On lit les abscisses, pas les ordonnées** — les deux points ont la même ordonnée $a$.
> Et une lecture graphique donne une valeur **approchée** : pour $x^2 = 5$ tu liras
> « environ $2{,}2$ et $-2{,}2$ », alors que la réponse exacte est $\sqrt{5}$ et $-\sqrt{5}$.
> Les deux méthodes doivent se confirmer l'une l'autre.

---

## 4. Méthode — se ramener à la forme $x^2 = a$

Une équation ne t'arrive presque jamais toute prête. Isole $x^2$ **d'abord**, résous
**ensuite**.

> **Exemple 1.** $3x^2 = 75$ : on divise par $3$, donc
> $$x^2 = 25 \quad\Longrightarrow\quad x = 5 \ \text{ ou } \ x = -5$$

> **Exemple 2.** $x^2 - 11 = 0$ : on ajoute $11$, donc
> $$x^2 = 11 \quad\Longrightarrow\quad x = \sqrt{11} \ \text{ ou } \ x = -\sqrt{11}$$

> **Exemples 3 et 4 — les cas limites.** $2x^2 + 7 = 7$ donne $x^2 = 0$, donc $x = 0$.
> $x^2 + 9 = 0$ donne $x^2 = -9$ : aucune solution.

> ⚠️ **Divise avant de prendre la racine.** Dans $3x^2 = 75$, la réponse n'est pas
> $\sqrt{75}$ : le $3$ doit partir en premier.

---

## 5. Résoudre des problèmes avec une racine carrée

Dans un problème concret, tu obtiens souvent une équation $x^2 = a$ — puis tu dois **trier**
ses solutions. Une longueur, une aire, une durée sont **positives** : la solution négative
existe mathématiquement, mais elle ne répond pas à la question posée.

> **Le côté d'un carré.** Un carré a pour aire $50\ \text{cm}^2$. Son côté $c$ vérifie
> $$c^2 = 50 \quad\Longrightarrow\quad c = \sqrt{50} \ \text{ ou } \ c = -\sqrt{50}$$
> Une longueur n'est pas négative : $c = \sqrt{50}\ \text{cm}$, soit environ $7{,}1$ cm.

> **Avec Pythagore.** Le triangle $ABC$ est rectangle en $A$, $AB = 5$ et $AC = 12$.
> $$BC^2 = AB^2 + AC^2 = 25 + 144 = 169 \quad\Longrightarrow\quad BC = \sqrt{169} = 13$$

> **Rédige le tri.** Écris la phrase : « $-\sqrt{50}$ est négatif, ce n'est pas une
> longueur : on ne garde que $\sqrt{50}$. » Cela montre au correcteur que tu n'as pas
> oublié la seconde solution — tu l'as **écartée**, ce n'est pas pareil.

---

## 6. Cas particuliers et pièges de calcul

**Quand $a$ n'est pas un carré parfait**, la réponse s'arrête au radical. $\sqrt{7}$ est une
valeur **exacte** et une réponse complète ; $2{,}645\ldots$ est **approchée**, s'écrit avec
$\approx$, et seulement si l'énoncé la demande. Même chose pour $\sqrt{50}$ : laisse-le tel
quel.

**Les deux cas limites** sont ceux qu'on oublie sous la pression : $x^2 = 0$ n'a **qu'une**
solution ($0$, où les deux se confondent), et $x^2 = $ un nombre négatif n'en a **aucune**.

**$x^2$ n'est ni $2x$ ni « la moitié ».** $x^2$ signifie $x \times x$. Pour $x^2 = 36$, les
solutions sont $6$ et $-6$ — ni $18$, ni $72$.

---

## 7. À retenir absolument

| | |
|---|---|
| $a > 0$ | $x^2 = a \iff x = \sqrt{a}$ ou $x = -\sqrt{a}$ |
| $a = 0$ | une seule solution : $x = 0$ |
| $a < 0$ | **aucune** solution |
| Pourquoi deux | $x^2 - a = (x - \sqrt{a})(x + \sqrt{a})$, puis produit nul |
| $\sqrt{a}$ | **un** nombre, toujours positif |
| Graphiquement | droite $y = a$ sur la parabole → on lit les **abscisses** |
| Graphique vs calcul | le graphique donne l'**approché**, le calcul l'**exact** |
| Problème concret | longueur ⟹ on **écarte** la solution négative, en le disant |
| Avant tout | isoler $x^2$ (diviser, transposer) |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier la solution négative.** C'est l'erreur n°1 du chapitre, et de loin.
   $x^2 = 36$ a **deux** solutions : $6$ et $-6$. N'en écris qu'une et tu perds la moitié
   des points. Le réflexe : dès que tu lis « $x^2 = $ un nombre positif », tu écris **deux**
   valeurs opposées. (Seule exception : $x^2 = 0$, où il n'y en a qu'une.)
2. **Écrire $\sqrt{36} = \pm 6$.** L'inverse du piège n°1, et tout aussi faux.
   $\sqrt{36} = 6$. Le « ou $-$ » appartient à l'équation, jamais au symbole radical.
3. **Répondre $-4$ à $x^2 = -16$.** Un carré n'est jamais négatif : il n'y a **aucune**
   solution. Et $\sqrt{-16}$ ne s'écrit même pas.
4. **Prendre la racine avant d'isoler $x^2$.** Dans $3x^2 = 75$, les solutions sont $5$ et
   $-5$, pas $\sqrt{75}$. On divise par $3$ d'abord.
5. **Garder la solution négative comme longueur.** Un côté ne mesure pas $-\sqrt{50}$ cm.
   Mais ne la fais pas disparaitre en silence : écarte-la par une phrase.
6. **Décimaliser sans qu'on te le demande.** $x = \sqrt{7}$ est une réponse exacte et
   complète. $x \approx 2{,}65$ est approchée : $\approx$ obligatoire, et seulement si
   l'énoncé la réclame.
