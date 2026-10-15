---
id: tale-spe-math-listes
titre: "Algorithmique : listes"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 9
prerequis:
  - Boucle for et fonction range (Seconde)
  - Notion d'ensemble : appartenance, inclusion (Terminale, vocabulaire ensembliste)
  - Combinatoire et dénombrement (Terminale)
statut: brouillon
relu_par: null
---

# Algorithmique : listes

> Une **liste**, c'est une collection d'objets **rangés dans un ordre** et
> **numérotés**. Là où un ensemble en maths se contente de dire *qui est dedans*,
> une liste ajoute deux choses : un **ordre** et des **répétitions possibles**.
> C'est l'outil de base pour énumérer, stocker et parcourir des données.

Chapitre **court et pratique** : ici on ne démontre pas, on **lit et on écrit du
code**. Le langage de référence au lycée est **Python** : tous les exemples sont en
Python.

---

## 1. Ce qu'est une liste

Une liste se note entre **crochets**, ses éléments séparés par des virgules :

```python
notes = [12, 15, 8, 17, 15]
```

- Les éléments sont **ordonnés** : `notes[0]` est le premier, `notes[1]` le
  deuxième…
- Un même élément peut apparaître **plusieurs fois** (ici `15` deux fois).
- La liste vide s'écrit `[]`.
- `len(notes)` donne le **nombre d'éléments** (ici $5$).

> **Liste et ensemble — le lien à retenir.** Un ensemble mathématique
> $\{12, 15, 8, 17\}$ ne connaît ni ordre ni répétition : $\{15, 15\} = \{15\}$.
> Une liste, si : `[15, 15]` a **deux** éléments. La liste est une version
> *ordonnée et avec doublons* de l'idée d'ensemble.

---

## 2. Générer une liste

Le programme distingue **trois** façons de fabriquer une liste. Sache les
reconnaître.

### En extension : on écrit tous les éléments

$$\boxed{\texttt{L = [1, 2, 3, 4, 5]}}$$

On donne la liste « en toutes lettres ». C'est le pendant de l'ensemble défini en
extension $\{1, 2, 3, 4, 5\}$.

### Par ajouts successifs : on part de vide et on remplit

```python
L = []
for i in range(1, 6):
    L.append(i)     # L devient [1, 2, 3, 4, 5]
```

> `append(x)` **ajoute `x` à la fin**. On construit la liste pas à pas, souvent
> dans une boucle.

### En compréhension : on décrit une règle

$$\boxed{\texttt{L = [f(x) for x in ...]}}$$

On lit : « la liste des $f(x)$ **pour** $x$ parcourant… ». C'est le pendant exact
de l'ensemble défini en compréhension $\{x^2 \mid x \in \{0,\dots,4\}\}$.

```python
carres = [x**2 for x in range(5)]   # [0, 1, 4, 9, 16]
```

On peut **filtrer** avec un `if` :

```python
pairs = [x for x in range(10) if x % 2 == 0]   # [0, 2, 4, 6, 8]
```

> **À quoi ça sert.** La compréhension remplace en une ligne une boucle `for` +
> `append`. Les deux écritures ci-dessous donnent la **même** liste :
> ```python
> [x**2 for x in range(5)]
> # ==
> L = []
> for x in range(5):
>     L.append(x**2)
> ```

---

## 3. Comprendre `range`

<!-- schema:range -->
![Les entiers produits par range (en bleu) : range(5) va de 0 à 4, range(1, 5) de 1 à 4, range(2, 11, 2) de 2 à 10 de 2 en 2 ; la borne de droite est toujours exclue.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMTcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIxNzAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNzUiIHk9IjQwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5yYW5nZSg1KTwvdGV4dD48bGluZSB4MT0iMTgwIiB5MT0iMzUiIHgyPSI1NzQiIHkyPSIzNSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMzUiIHI9IjEyIiBmaWxsPSIjY2ZlMGZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48dGV4dCB4PSIxOTAiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0PjxjaXJjbGUgY3g9IjIyNCIgY3k9IjM1IiByPSIxMiIgZmlsbD0iI2NmZTBmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMjI0IiB5PSI0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48Y2lyY2xlIGN4PSIyNTgiIGN5PSIzNSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjI1OCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjI8L3RleHQ+PGNpcmNsZSBjeD0iMjkyIiBjeT0iMzUiIHI9IjEyIiBmaWxsPSIjY2ZlMGZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48dGV4dCB4PSIyOTIiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0PjxjaXJjbGUgY3g9IjMyNiIgY3k9IjM1IiByPSIxMiIgZmlsbD0iI2NmZTBmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMzI2IiB5PSI0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48Y2lyY2xlIGN4PSIzNjAiIGN5PSIzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjM2MCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU8L3RleHQ+PGNpcmNsZSBjeD0iMzk0IiBjeT0iMzUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzOTQiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj42PC90ZXh0PjxjaXJjbGUgY3g9IjQyOCIgY3k9IjM1IiByPSIxMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjN2QwZGEiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iNDI4IiB5PSI0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NzwvdGV4dD48Y2lyY2xlIGN4PSI0NjIiIGN5PSIzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjQ2MiIgeT0iNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PGNpcmNsZSBjeD0iNDk2IiBjeT0iMzUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0OTYiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj45PC90ZXh0PjxjaXJjbGUgY3g9IjUzMCIgY3k9IjM1IiByPSIxMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjN2QwZGEiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iNTMwIiB5PSI0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTA8L3RleHQ+PGNpcmNsZSBjeD0iNTY0IiBjeT0iMzUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI1NjQiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMTwvdGV4dD48dGV4dCB4PSIxNzUiIHk9IjkwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5yYW5nZSgxLCA1KTwvdGV4dD48bGluZSB4MT0iMTgwIiB5MT0iODUiIHgyPSI1NzQiIHkyPSI4NSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTkwIiBjeT0iODUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIxOTAiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wPC90ZXh0PjxjaXJjbGUgY3g9IjIyNCIgY3k9Ijg1IiByPSIxMiIgZmlsbD0iI2NmZTBmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMjI0IiB5PSI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48Y2lyY2xlIGN4PSIyNTgiIGN5PSI4NSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjI1OCIgeT0iOTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjI8L3RleHQ+PGNpcmNsZSBjeD0iMjkyIiBjeT0iODUiIHI9IjEyIiBmaWxsPSIjY2ZlMGZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48dGV4dCB4PSIyOTIiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0PjxjaXJjbGUgY3g9IjMyNiIgY3k9Ijg1IiByPSIxMiIgZmlsbD0iI2NmZTBmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMzI2IiB5PSI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48Y2lyY2xlIGN4PSIzNjAiIGN5PSI4NSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjM2MCIgeT0iOTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU8L3RleHQ+PGNpcmNsZSBjeD0iMzk0IiBjeT0iODUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzOTQiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj42PC90ZXh0PjxjaXJjbGUgY3g9IjQyOCIgY3k9Ijg1IiByPSIxMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjN2QwZGEiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iNDI4IiB5PSI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NzwvdGV4dD48Y2lyY2xlIGN4PSI0NjIiIGN5PSI4NSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjQ2MiIgeT0iOTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PGNpcmNsZSBjeD0iNDk2IiBjeT0iODUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0OTYiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj45PC90ZXh0PjxjaXJjbGUgY3g9IjUzMCIgY3k9Ijg1IiByPSIxMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjN2QwZGEiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iNTMwIiB5PSI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTA8L3RleHQ+PGNpcmNsZSBjeD0iNTY0IiBjeT0iODUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI1NjQiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMTwvdGV4dD48dGV4dCB4PSIxNzUiIHk9IjE0MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+cmFuZ2UoMiwgMTEsIDIpPC90ZXh0PjxsaW5lIHgxPSIxODAiIHkxPSIxMzUiIHgyPSI1NzQiIHkyPSIxMzUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjE5MCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjE5MCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wPC90ZXh0PjxjaXJjbGUgY3g9IjIyNCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjIyNCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxjaXJjbGUgY3g9IjI1OCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjI1OCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4yPC90ZXh0PjxjaXJjbGUgY3g9IjI5MiIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjI5MiIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0PjxjaXJjbGUgY3g9IjMyNiIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjMyNiIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj40PC90ZXh0PjxjaXJjbGUgY3g9IjM2MCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjM2MCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj41PC90ZXh0PjxjaXJjbGUgY3g9IjM5NCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjM5NCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj42PC90ZXh0PjxjaXJjbGUgY3g9IjQyOCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjQyOCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj43PC90ZXh0PjxjaXJjbGUgY3g9IjQ2MiIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjQ2MiIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj44PC90ZXh0PjxjaXJjbGUgY3g9IjQ5NiIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzdkMGRhIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjQ5NiIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj45PC90ZXh0PjxjaXJjbGUgY3g9IjUzMCIgY3k9IjEzNSIgcj0iMTIiIGZpbGw9IiNjZmUwZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjUzMCIgeT0iMTQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4xMDwvdGV4dD48Y2lyY2xlIGN4PSI1NjQiIGN5PSIxMzUiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M3ZDBkYSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI1NjQiIHk9IjE0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTE8L3RleHQ+PC9zdmc+)
*Les entiers produits par range (en bleu) : range(5) va de 0 à 4, range(1, 5) de 1 à 4, range(2, 11, 2) de 2 à 10 de 2 en 2 ; la borne de droite est toujours exclue.*
<!-- /schema -->

`range(n)` produit les entiers **de `0` à `n-1`** — pas jusqu'à `n`.

| Appel | Entiers produits |
|---|---|
| `range(5)` | `0, 1, 2, 3, 4` |
| `range(1, 5)` | `1, 2, 3, 4` |
| `range(2, 11, 2)` | `2, 4, 6, 8, 10` (pas de $2$) |

> ⚠️ `range(5)` donne **cinq** valeurs mais s'arrête à **4**. La borne de droite
> est **exclue**. C'est la source d'erreur numéro un.

---

## 4. Les indices : lire un élément

<!-- schema:indices-liste -->
![La liste L de valeurs 10, 20, 30, 40 : les indices vont de 0 à 3 (en vert) ; les indices négatifs partent de la fin (en violet) ; l’indice 4 n’existe pas.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMTkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIxOTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMjAiIHk9IjYwIiB3aWR0aD0iNzYiIGhlaWdodD0iNTAiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTU4IiB5PSI5MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTA8L3RleHQ+PHRleHQgeD0iMTU4IiB5PSI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TFswXTwvdGV4dD48dGV4dCB4PSIxNTgiIHk9IjEzNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TFviiJI0XTwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjYwIiB3aWR0aD0iNzYiIGhlaWdodD0iNTAiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjM4IiB5PSI5MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjA8L3RleHQ+PHRleHQgeD0iMjM4IiB5PSI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TFsxXTwvdGV4dD48dGV4dCB4PSIyMzgiIHk9IjEzNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TFviiJIzXTwvdGV4dD48cmVjdCB4PSIyODAiIHk9IjYwIiB3aWR0aD0iNzYiIGhlaWdodD0iNTAiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMzE4IiB5PSI5MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzA8L3RleHQ+PHRleHQgeD0iMzE4IiB5PSI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TFsyXTwvdGV4dD48dGV4dCB4PSIzMTgiIHk9IjEzNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TFviiJIyXTwvdGV4dD48cmVjdCB4PSIzNjAiIHk9IjYwIiB3aWR0aD0iNzYiIGhlaWdodD0iNTAiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMzk4IiB5PSI5MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDA8L3RleHQ+PHRleHQgeD0iMzk4IiB5PSI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TFszXTwvdGV4dD48dGV4dCB4PSIzOTgiIHk9IjEzNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TFviiJIxXTwvdGV4dD48cmVjdCB4PSI0NDAiIHk9IjYwIiB3aWR0aD0iNzYiIGhlaWdodD0iNTAiIHJ4PSIwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI0NzgiIHk9IjkyIiBmb250LXNpemU9IjIwIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7inJc8L3RleHQ+PHRleHQgeD0iNDc4IiB5PSI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TFs0XTwvdGV4dD48dGV4dCB4PSI0NzgiIHk9IjEzNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+SW5kZXhFcnJvcjwvdGV4dD48dGV4dCB4PSIxMTAiIHk9IjkyIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5MID08L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIxNzAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPmxlbihMKSA9IDQgOiBpbmRpY2VzIGRlIDAgw6AgMyAoZGVybmllciA6IGxlbihMKSDiiJIgMSk8L3RleHQ+PC9zdmc+)
*La liste L de valeurs 10, 20, 30, 40 : les indices vont de 0 à 3 (en vert) ; les indices négatifs partent de la fin (en violet) ; l’indice 4 n’existe pas.*
<!-- /schema -->

Chaque élément a une **position**, appelée **indice**. En Python, **les indices
commencent à `0`**.

```python
L = [10, 20, 30, 40]
#     0   1   2   3      <- indices
```

- `L[0]` vaut `10` (le **premier**),
- `L[2]` vaut `30`,
- `L[3]` vaut `40` (le **dernier** d'une liste de longueur $4$).

> ⚠️ **Le dernier élément a l'indice `len(L) - 1`**, pas `len(L)`. Ici `len(L)`
> vaut $4$, mais `L[4]` provoque une erreur `IndexError` : l'indice $4$ n'existe
> pas.

**Indices négatifs** : `L[-1]` est le **dernier**, `L[-2]` l'avant-dernier.

On **modifie** un élément en écrivant dans sa case :

```python
L[1] = 99      # L devient [10, 99, 30, 40]
```

---

## 5. Manipuler : ajouter et supprimer

| Opération | Code | Effet sur `L = [10, 20, 30]` |
|---|---|---|
| Ajouter à la fin | `L.append(40)` | `[10, 20, 30, 40]` |
| Insérer à l'indice `i` | `L.insert(1, 99)` | `[10, 99, 20, 30]` |
| Supprimer par indice | `del L[0]` | `[20, 30]` |
| Supprimer par valeur | `L.remove(20)` | `[10, 30]` |
| Tester l'appartenance | `20 in L` | `True` |

> **Appartenance.** `x in L` renvoie `True` si `x` figure dans la liste : c'est le
> $\in$ mathématique. `30 in [10, 20, 30]` vaut `True`.

> ⚠️ `remove(v)` supprime **la première occurrence** de la valeur `v`, pas toutes.
> Sur `[15, 15]`, `remove(15)` laisse `[15]`.

---

## 6. Parcourir et itérer

Deux façons de passer sur tous les éléments — le programme les distingue.

### Itérer sur les éléments (directement)

```python
notes = [12, 15, 8]
for note in notes:
    print(note)         # affiche 12 puis 15 puis 8
```

La variable `note` prend **successivement chaque valeur** de la liste. On n'a pas
besoin des indices.

### Parcourir par les indices

```python
for i in range(len(notes)):
    print(notes[i])
```

Ici `i` prend les valeurs `0, 1, 2` et on accède à `notes[i]`. Utile quand on a
besoin de la **position** (par exemple pour comparer `notes[i]` et `notes[i+1]`).

> **Exemple complet — moyenne d'une liste.**
> ```python
> notes = [12, 15, 8, 17]
> total = 0
> for note in notes:
>     total = total + note
> moyenne = total / len(notes)     # 13.0
> ```

---

## 7. Le lien avec la combinatoire

Une liste sert à **énumérer les objets à dénombrer**. Quand tu construis un arbre
ou un produit cartésien en dénombrement, tu peux en dresser la liste :

```python
# tous les couples (pile/face) de deux lancers
issues = [(a, b) for a in ["P", "F"] for b in ["P", "F"]]
# [('P','P'), ('P','F'), ('F','P'), ('F','F')]
len(issues)     # 4 = 2 x 2
```

> La longueur de la liste **est** le cardinal de l'ensemble énuméré. Générer la
> liste en compréhension puis compter avec `len` est une façon concrète de
> **dénombrer**.

---

## 8. Tableau récapitulatif

| Idée | Écriture Python | À retenir |
|---|---|---|
| Liste | `[10, 20, 30]` | ordonnée, doublons permis |
| Longueur | `len(L)` | nombre d'éléments |
| Premier / dernier | `L[0]` / `L[-1]` | indices commencent à **0** |
| Dernier indice | `L[len(L)-1]` | pas `L[len(L)]` |
| Extension | `[1, 2, 3]` | tout écrit |
| Ajouts successifs | `L = []` puis `L.append(x)` | on remplit |
| Compréhension | `[f(x) for x in ...]` | une règle |
| `range(n)` | `0 … n-1` | borne droite **exclue** |
| Ajouter / supprimer | `append`, `insert`, `del`, `remove` | — |
| Appartenance | `x in L` | le $\in$ mathématique |
| Itérer | `for e in L:` | chaque valeur |
| Parcourir | `for i in range(len(L)):` | chaque indice |

---

## 9. Les erreurs qui coûtent des points

1. **Compter à partir de 1.** `L[1]` n'est **pas** le premier élément, c'est le
   **deuxième**. Le premier est `L[0]`.
2. **Croire que `range(n)` va jusqu'à `n`.** Il s'arrête à `n-1`. `range(5)`
   n'atteint jamais `5`.
3. **Accéder à `L[len(L)]`.** L'indice maximal est `len(L) - 1` ; `L[len(L)]`
   déclenche une `IndexError`.
4. **Confondre liste et ensemble.** `[3, 3]` a deux éléments et un ordre ;
   l'ensemble $\{3, 3\} = \{3\}$ n'en a qu'un.
5. **Penser que `remove(v)` enlève toutes les occurrences.** Il n'enlève que la
   **première**.
6. **Oublier que `append` modifie la liste sur place** et ne renvoie rien :
   `L = L.append(x)` écrase `L` avec `None`. On écrit juste `L.append(x)`.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de spécialité mathématiques, Terminale générale,
applicable à la rentrée 2027. Fichier :
docs/programme-terminale-specialite-maths-2027.txt, section « ALGORITHMIQUE ET
PROGRAMMATION — NOTION DE LISTE » (lignes 38-48). En-tête de provenance du fichier
source : lignes 1-20.

⚠️ MENTION 1 — NATURE DE LA SOURCE : ce programme n'a PAS été obtenu par la chaîne
d'extraction habituelle. Le proxy du sandbox bloquant le PDF, le texte a été
reconstitué via WebFetch depuis le miroir xm1math.net/reforme/term_gen_spe.pdf
(voir en-tête lignes 6-17 du fichier source). L'extraction est fiable dans l'esprit
et la lettre mais NON garantie exhaustive : elle DOIT être confrontée au PDF
officiel (education.gouv.fr / éduscol) avant toute publication.

⚠️ MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE produit sur le
programme de la RENTRÉE 2027, à la demande explicite de l'utilisateur. Le gabarit
(docs/gabarit-chapitre.md, §6) déconseille par défaut d'écrire de la Terminale
avant 2027 ; cette fiche est une exception assumée et demandée, le nouveau
programme 2027 étant déjà publié.

BRIÈVETÉ ASSUMÉE : la section du programme est très courte (1 ligne de « Contenus »,
4 « Capacités attendues »). Le gabarit standard (définition / propriétés-théorèmes
/ démonstrations) a été ADAPTÉ à un chapitre d'algorithmique pratique : « notions
clés » au lieu de théorèmes, « méthodes = lire et écrire du code » au lieu de
démonstrations. Pas de section « démonstration » (rien à démontrer ici).

CONTENU COUVERT, mappé aux capacités attendues du programme :
- « Générer une liste (extension / ajouts successifs / compréhension) » -> §2
- « lien avec la notion d'ensemble » -> encadrés §1 et §2
- « Manipuler des éléments et leurs indices (ajouter, supprimer) » -> §4, §5
- « Parcourir une liste » -> §6 (parcours par indices)
- « Itérer sur les éléments » -> §6 (itération directe)
- Lien combinatoire (demande utilisateur, cohérent avec la section « COMBINATOIRE
  ET DÉNOMBREMENT » du même programme) -> §7

POINTS À SOUMETTRE AU RELECTEUR :
- Python est le langage de référence retenu ; à confirmer que le PDF officiel
  n'impose pas une syntaxe/pseudo-code neutre plutôt que Python explicitement.
- Le programme ne mentionne pas nommément `range`, `append`, la compréhension avec
  `if`, les indices négatifs ni `insert`/`del`/`remove` : ce sont des choix de
  mise en œuvre Python usuels au lycée, à valider comme conformes à l'esprit du
  texte (« ajouter, supprimer, etc. »).
- Vérifier que le niveau de détail sur `range` (borne exclue) est jugé pertinent
  et non hors-sujet pour la Terminale.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à un
site. Statut : brouillon, non relu.
-->
