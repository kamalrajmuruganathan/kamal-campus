---
id: tale-techno-math-algorithmique-programmation
titre: "Algorithmique et programmation"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 11
prerequis:
  - Variables, boucle for et fonction range en Python (Seconde, algorithmique)
  - Suites arithmétiques et géométriques (Terminale technologique)
  - Moyenne d'une série statistique (Première technologique)
statut: brouillon
relu_par: null
---

# Algorithmique et programmation

> Un programme, c'est une suite d'instructions que la machine exécute **dans
> l'ordre**, sans jamais deviner ce que tu voulais dire. Ce chapitre reprend les
> quatre briques du programme — **variables**, **fonctions**, **listes**,
> **sélection de données** — et les met au service des autres chapitres :
> calculer les termes d'une suite, faire une moyenne, trier le bon grain de
> l'ivraie dans une série de valeurs.

Chapitre **pratique** : ici on ne démontre pas, on **lit et on écrit du code**.
Le langage utilisé est **Python**, avec une syntaxe volontairement minimale.

⚠️ **Ce chapitre concerne toutes les séries technologiques SAUF STD2A** : en
STD2A, il est remplacé par un programme d'**activités géométriques** (sections
planes d'un cône, tangente à une conique, perspective centrale).

---

## 1. Variables et affectation

### Une variable est une boîte nommée

Une **variable** associe un **nom** à une **valeur**. L'**affectation** range une
valeur dans la boîte ; elle s'écrit avec le signe `=` :

```python
u = 5          # la variable u reçoit la valeur 5
r = 3
u = u + r      # u reçoit son ancienne valeur plus 3 : u vaut 8
```

$$\boxed{\texttt{a = b} \text{ signifie « } a \text{ reçoit la valeur de } b \text{ », pas « } a \text{ égale } b \text{ »}}$$

- L'affectation se lit **de droite à gauche** : on calcule d'abord la valeur à
  droite, puis on la range dans le nom à gauche.
- `u = u + r` n'est pas une équation absurde : c'est « la nouvelle valeur de `u`
  est l'ancienne plus `r` ». C'est exactement la relation de récurrence
  $u_{n+1} = u_n + r$ d'une suite arithmétique.
- Chaque affectation **écrase** l'ancienne valeur : après `u = 8` puis `u = 2`,
  le $8$ est perdu.

> **Exemple — dérouler un programme à la main.**
> ```python
> a = 4
> b = a + 1      # b vaut 5
> a = 2 * b      # a vaut 10 (le 4 est écrasé)
> ```
> À la fin, `a` vaut $10$ et `b` vaut $5$. On suit les lignes **dans l'ordre**,
> en notant la valeur de chaque variable après chaque ligne.

### Le test d'égalité s'écrit `==`

En Python, `=` **affecte** et `==` **compare** : après `x = 7`, le test
`x == 7` vaut `True` et `x == 8` vaut `False`. Les comparaisons (`==`, `!=`,
`<`, `<=`, `>`, `>=`) renvoient `True` ou `False` ; ce sont elles qu'on écrit
dans les conditions `if`.

---

## 2. Fonctions : `def` et `return`

### Définir, appeler, renvoyer

Une **fonction** est un morceau de programme réutilisable : elle reçoit des
**arguments**, effectue un calcul, et **renvoie** un résultat avec `return`.

```python
def terme(n):
    return 5 + 3 * n
```

- `def` **définit** la fonction : rien ne s'exécute encore.
- `terme(4)` **appelle** la fonction avec `n = 4` : elle renvoie $5 + 3 \times 4 = 17$.
- Le résultat renvoyé peut être rangé dans une variable : `u = terme(4)`.

$$\boxed{\texttt{def nom(arguments):} \ \ldots \ \texttt{return resultat}}$$

C'est le même mot qu'en maths : `terme` ci-dessus **est** la fonction
$n \longmapsto 5 + 3n$, le terme général de la suite arithmétique de premier
terme $5$ et de raison $3$.

> **Exemple — terme d'une suite géométrique.** La suite $v_n = 200 \times 1{,}04^n$
> (un capital de $200$ € placé à $4\,\%$) se programme :
> ```python
> def v(n):
>     return 200 * 1.04 ** n
> ```
> `v(0)` renvoie `200.0`, `v(2)` renvoie environ `216.32` (Python affiche
> `216.32000000000002` : les calculs sur les décimaux laissent de minuscules
> erreurs d'arrondi). En Python, la puissance
> s'écrit `**` et le séparateur décimal est le **point** : `1.04`, pas `1,04`.

### `return` termine la fonction

Dès qu'un `return` s'exécute, la fonction **s'arrête** et renvoie la valeur.
`print` **affiche** à l'écran mais ne renvoie rien : une fonction qui se
contente d'un `print` ne peut pas fournir son résultat à un calcul suivant.

> **Exemple.** Avec `def double(x): return 2 * x`, l'instruction
> `y = double(3) + 1` donne `y` $= 7$. Avec `print(2 * x)` à la place du
> `return`, le programme afficherait $6$ mais `y` ne vaudrait rien
> d'utilisable : `return` est **obligatoire** pour récupérer le résultat.

---

## 3. Listes : générer

Une **liste** est une collection de valeurs **ordonnées et numérotées**, notée
entre crochets. Le programme demande deux façons de la **générer**.

### En extension : on écrit tout

```python
notes = [12, 15, 8, 17]
```

- `len(notes)` donne le nombre d'éléments (ici $4$).
- Les **indices commencent à `0`** : `notes[0]` vaut `12`, `notes[3]` vaut `17`.
- Le dernier élément a l'indice `len(notes) - 1`, **pas** `len(notes)`.
- La liste vide s'écrit `[]`.

### Par ajouts successifs : on part de vide et on remplit

```python
L = []
for n in range(5):
    L.append(2 * n)      # L devient [0, 2, 4, 6, 8]
```

`append(x)` **ajoute `x` à la fin** de la liste. C'est la méthode reine pour
construire une liste dans une boucle.

> **Rappel `range`.** `range(n)` produit les entiers de $0$ à $n-1$ : la borne
> de droite est **exclue**. `range(5)` donne `0, 1, 2, 3, 4` — cinq valeurs,
> mais jamais $5$.

> **Exemple — les 10 premiers termes d'une suite.** Pour la suite géométrique
> $u_n = 100 \times 1{,}05^n$ :
> ```python
> termes = []
> for n in range(10):
>     termes.append(100 * 1.05 ** n)
> ```
> `termes[0]` vaut `100.0` (c'est $u_0$) et `termes[9]` vaut environ `155.13`
> (c'est $u_9$) : la liste contient $u_0$ à $u_9$, soit **dix** termes.

---

## 4. Listes : parcourir

**Parcourir** une liste, c'est passer sur tous ses éléments, en général pour
accumuler un résultat. Deux écritures :

### Sur les éléments directement

```python
notes = [12, 15, 8, 17]
total = 0
for note in notes:
    total = total + note     # total vaut 52 à la fin
```

La variable `note` prend **successivement chaque valeur** de la liste.

### Par les indices

```python
for i in range(len(notes)):
    total = total + notes[i]
```

`i` prend les valeurs `0, 1, 2, 3` et on lit `notes[i]`. Utile quand la
**position** compte ; sinon, la première écriture est plus simple.

> **Exemple complet — moyenne d'une liste.**
> ```python
> def moyenne(L):
>     total = 0
>     for x in L:
>         total = total + x
>     return total / len(L)
> ```
> `moyenne([12, 15, 8, 17])` renvoie `13.0` : c'est la moyenne
> $\bar{x} = \dfrac{12+15+8+17}{4}$ du chapitre de statistiques. Remarque
> d'écriture : le `return` est **après** la boucle (aligné avec `for`), sinon la
> fonction s'arrêterait au premier tour.

**L'accumulateur** (`total` ici) doit être **initialisé avant la boucle**
(`total = 0`) et mis à jour **dans** la boucle. Un compteur (`c = c + 1`) suit
la même logique.

---

## 5. Sélection de données : filtrer une liste

<!-- schema:filtrer-liste -->
![Filtrer une liste : on parcourt notes, on teste chaque valeur, et seules celles qui vérifient la condition (au moins 10) sont ajoutées à la liste bonnes par append.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMzAiIHk9IjQwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxNjIiIHk9IjY4IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4xMjwvdGV4dD48dGV4dCB4PSIxNjIiIHk9IjMyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wPC90ZXh0PjxyZWN0IHg9IjIwMiIgeT0iNDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjIzNCIgeT0iNjgiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjE1PC90ZXh0Pjx0ZXh0IHg9IjIzNCIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHJlY3QgeD0iMjc0IiB5PSI0MCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzA2IiB5PSI2OCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+ODwvdGV4dD48dGV4dCB4PSIzMDYiIHk9IjMyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0PjxyZWN0IHg9IjM0NiIgeT0iNDAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjM3OCIgeT0iNjgiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjE3PC90ZXh0Pjx0ZXh0IHg9IjM3OCIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHJlY3QgeD0iNDE4IiB5PSI0MCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDUwIiB5PSI2OCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+OTwvdGV4dD48dGV4dCB4PSI0NTAiIHk9IjMyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj40PC90ZXh0Pjx0ZXh0IHg9IjExOCIgeT0iNjgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPm5vdGVzPC90ZXh0Pjx0ZXh0IHg9IjExOCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmluZGljZXM8L3RleHQ+PHRleHQgeD0iMTYyIiB5PSIxMTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPuKJpSAxMCDinJM8L3RleHQ+PHRleHQgeD0iMjM0IiB5PSIxMTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPuKJpSAxMCDinJM8L3RleHQ+PHRleHQgeD0iMzA2IiB5PSIxMTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPiZsdDsgMTAg4pyXPC90ZXh0Pjx0ZXh0IHg9IjM3OCIgeT0iMTE4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7iiaUgMTAg4pyTPC90ZXh0Pjx0ZXh0IHg9IjQ1MCIgeT0iMTE4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4mbHQ7IDEwIOKclzwvdGV4dD48bGluZSB4MT0iMTYyIiB5MT0iMTI2IiB4Mj0iMTg5LjE1IiB5Mj0iMTYxLjY0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE5NCwxNjggMTkyLjMzLDE1OS4yMSAxODUuOTcsMTY0LjA2IiBmaWxsPSIjMWE3ZjRiIi8+PGxpbmUgeDE9IjIzNCIgeTE9IjEyNiIgeDI9IjI2MS4xNSIgeTI9IjE2MS42NCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNjYsMTY4IDI2NC4zMywxNTkuMjEgMjU3Ljk3LDE2NC4wNiIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSIzNzgiIHkxPSIxMjYiIHgyPSIzNDMuNTIiIHkyPSIxNjIuMjEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzM4LDE2OCAzNDYuNDEsMTY0Ljk3IDM0MC42MiwxNTkuNDUiIGZpbGw9IiMxYTdmNGIiLz48cmVjdCB4PSIxNzAiIHk9IjE3MCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjE1IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjAyIiB5PSIxOTgiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjEyPC90ZXh0Pjx0ZXh0IHg9IjIwMiIgeT0iMTYyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wPC90ZXh0PjxyZWN0IHg9IjI0MiIgeT0iMTcwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDQiIHJ4PSIwIiBmaWxsPSIjMWE3ZjRiIiBmaWxsLW9wYWNpdHk9IjAuMTUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyNzQiIHk9IjE5OCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTU8L3RleHQ+PHRleHQgeD0iMjc0IiB5PSIxNjIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHJlY3QgeD0iMzE0IiB5PSIxNzAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjM0NiIgeT0iMTk4IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4xNzwvdGV4dD48dGV4dCB4PSIzNDYiIHk9IjE2MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjwvdGV4dD48dGV4dCB4PSIxNTgiIHk9IjE5OCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+Ym9ubmVzPC90ZXh0Pjx0ZXh0IHg9IjQxMCIgeT0iMTk4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKGkCBhcHBlbmQ8L3RleHQ+PC9zdmc+)
*Filtrer une liste : on parcourt notes, on teste chaque valeur, et seules celles qui vérifient la condition (au moins 10) sont ajoutées à la liste bonnes par append.*
<!-- /schema -->

Dernière brique du programme : **sélectionner** dans une liste les valeurs qui
vérifient une **condition**. Le schéma est toujours le même :

$$\boxed{\text{liste vide} \ \rightarrow \ \text{parcours} \ \rightarrow \ \texttt{if} \text{ condition} \ \rightarrow \ \texttt{append}}$$

```python
notes = [12, 15, 8, 17, 9]
bonnes = []
for note in notes:
    if note >= 10:
        bonnes.append(note)
# bonnes vaut [12, 15, 17]
```

Seules les valeurs qui rendent la condition **vraie** sont ajoutées ; les autres
sont ignorées. La liste de départ n'est **pas modifiée**.

> **Exemple — compter au lieu de garder.** Pour savoir **combien** de notes
> atteignent $10$, on remplace la liste par un compteur :
> ```python
> def nb_bonnes(L):
>     c = 0
>     for x in L:
>         if x >= 10:
>             c = c + 1
>     return c
> ```
> `nb_bonnes([12, 15, 8, 17, 9])` renvoie `3`. Garder les valeurs → `append` ;
> les compter → `c = c + 1`.

> **Exemple — seuil sur une suite.** Quelles années la production
> $u_n = 8000 \times 1{,}06^n$ dépasse-t-elle $10\,000$ pièces, pour $n$ de $0$
> à $9$ ?
> ```python
> annees = []
> for n in range(10):
>     if 8000 * 1.06 ** n > 10000:
>         annees.append(n)
> # annees vaut [4, 5, 6, 7, 8, 9]
> ```
> On sélectionne ici les **rangs** `n`, pas les valeurs : c'est la question
> posée qui décide de ce qu'on met dans `append`.

⚠️ Attention à la condition : `>` (strictement) et `>=` (au sens large) ne
sélectionnent pas la même chose quand une valeur tombe **pile sur le seuil**.
Avec `note >= 10`, un $10$ est gardé ; avec `note > 10`, il est rejeté.

---

## 6. Tableau récapitulatif

| Idée | Écriture Python | À retenir |
|---|---|---|
| Affectation | `u = 5` | « reçoit », se lit de droite à gauche |
| Mise à jour | `u = u + r` | l'ancienne valeur est écrasée |
| Comparaison | `==`, `!=`, `<`, `<=`, `>`, `>=` | renvoie `True` / `False` |
| Définir une fonction | `def f(n):` | rien ne s'exécute à la définition |
| Renvoyer | `return resultat` | termine la fonction ; ≠ `print` |
| Liste en extension | `[12, 15, 8]` | indices à partir de **0** |
| Longueur | `len(L)` | dernier indice : `len(L) - 1` |
| Ajouts successifs | `L = []` puis `L.append(x)` | construire dans une boucle |
| `range(n)` | entiers de `0` à `n-1` | borne droite **exclue** |
| Parcourir | `for x in L:` ou `for i in range(len(L)):` | valeurs ou indices |
| Accumulateur | `total = 0` puis `total = total + x` | initialiser **avant** la boucle |
| Sélectionner | `if condition:` puis `append` | filtre, sans modifier la liste |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre `=` et `==`.** `x = 7` range $7$ dans `x` ; `x == 7` demande si
   `x` vaut $7$. Dans un `if`, c'est toujours `==`.
2. **Croire que `range(n)` va jusqu'à `n`.** `range(10)` s'arrête à $9$. Pour
   obtenir les termes $u_0$ à $u_{10}$ **inclus**, il faut `range(11)` — compte
   les valeurs produites, pas la borne écrite.
3. **Confondre `print` et `return`.** `print` affiche, `return` renvoie. Une
   fonction sans `return` ne fournit aucun résultat réutilisable dans un calcul.
4. **Mettre l'initialisation dans la boucle.** `total = 0` écrit **dans** le
   `for` remet le total à zéro à chaque tour : le résultat final ne compte que
   le dernier élément. L'initialisation se place **avant** la boucle.
5. **Se tromper d'un cran dans les indices.** `L[1]` est le **deuxième**
   élément ; le premier est `L[0]` et le dernier `L[len(L) - 1]`. `L[len(L)]`
   provoque une erreur.
6. **Mal placer le `return` dans une fonction avec boucle.** Indenté dans la
   boucle, il s'exécute dès le **premier tour** et la fonction s'arrête là. Pour
   renvoyer le résultat complet, le `return` s'aligne avec le `for`.
