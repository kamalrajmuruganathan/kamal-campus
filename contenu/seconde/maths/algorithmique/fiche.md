---
id: 2nde-math-algorithmique
titre: "Algorithmique et programmation"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Scratch et notions d'algorithme (cycle 4)
  - Notion de fonction (Seconde)
statut: brouillon
relu_par: null
---

# Algorithmique et programmation

> Le langage du programme est **Python**. L'objectif n'est pas de devenir développeur, mais de
> savoir **lire** un programme, **prévoir** ce qu'il affiche, et en **écrire** de courts pour
> résoudre un problème mathématique.

---

## 1. Variables et affectation

```python
x = 5          # affectation : x prend la valeur 5
x = x + 3      # x vaut maintenant 8
```

> ⚠️ Le signe `=` n'est **pas** une égalité mathématique, c'est une **affectation**.
> `x = x + 3` n'a aucun sens en maths, mais se lit ici : « prendre la valeur de x, ajouter 3,
> ranger le résultat dans x ».

### Types de données

| Type | Exemple |
|---|---|
| `int` | entier : `7` |
| `float` | décimal : `3.14` |
| `str` | chaîne : `"bonjour"` |
| `bool` | booléen : `True` / `False` |

> ⚠️ En Python, le séparateur décimal est le **point**, jamais la virgule.

---

## 2. Instructions conditionnelles

```python
if x > 0:
    print("positif")
elif x == 0:
    print("nul")
else:
    print("négatif")
```

> ⚠️ **Deux pièges à la fois** : le test d'égalité s'écrit avec **deux** signes `==` (un seul
> serait une affectation), et l'**indentation** délimite les blocs — elle n'est pas décorative,
> elle fait partie de la syntaxe.

### Opérateurs de comparaison

| Python | Sens |
|---|---|
| `==` | égal à |
| `!=` | différent de |
| `<` `>` `<=` `>=` | comparaisons |
| `and` `or` `not` | et, ou, non |

---

## 3. Boucle bornée — `for`

Quand on connaît **à l'avance** le nombre de répétitions.

```python
for i in range(5):
    print(i)          # affiche 0, 1, 2, 3, 4
```

> ⚠️ `range(5)` produit $0,1,2,3,4$ — **cinq valeurs, en commençant à zéro, sans atteindre 5**.
> C'est la source d'erreur numéro un.

| Écriture | Valeurs produites |
|---|---|
| `range(5)` | $0,1,2,3,4$ |
| `range(1, 5)` | $1,2,3,4$ |
| `range(1, 10, 2)` | $1,3,5,7,9$ |

> **Exemple — somme des entiers de 1 à 100.**
> ```python
> S = 0
> for i in range(1, 101):
>     S = S + i
> print(S)        # 5050
> ```
> Noter le `101` : pour aller jusqu'à $100$, il faut écrire $101$.

---

## 4. Boucle non bornée — `while`

<!-- schema:organigramme-while -->
![Organigramme de la boucle while : tant que 2ⁿ est inférieur à 1 000, on ajoute 1 à n ; dès que le test est faux, on sort de la boucle et on affiche n, ici 10.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxOTAiIHk9IjE0IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI3MCIgeT0iMzguMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm4gPSAxPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSI1MiIgeDI9IjI3MCIgeTI9IjcwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzAsODAgMjc1LDcwIDI2NSw3MCIgZmlsbD0iIzE2MjMyZSIvPjxwb2x5Z29uIHBvaW50cz0iMjcwLDgwIDM3MCwxMjAgMjcwLDE2MCAxNzAsMTIwIiBmaWxsPSIjZmZmNGU2IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHRleHQgeD0iMjcwIiB5PSIxMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjI8dHNwYW4gZm9udC1zaXplPSIxMC44IiBkeT0iLTYuMyI+bjwvdHNwYW4+PHRzcGFuIGR5PSI2LjMiPuKAizwvdHNwYW4+ICZsdDsgMTAwMCA/PC90ZXh0PjxsaW5lIHgxPSIzNzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQyMCwxMjAgNDEwLDExNSA0MTAsMTI1IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMzk1IiB5PSIxMTIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPm91aTwvdGV4dD48cmVjdCB4PSI0MjAiIHk9IjEwMCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNlOWY2ZWUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0NzUiIHk9IjEyNS4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+biA9IG4gKyAxPC90ZXh0PjxsaW5lIHgxPSI0NzUiIHkxPSIxMDAiIHgyPSI0NzUiIHkyPSI2NiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NzUiIHkxPSI2NiIgeDI9IjI4MiIgeTI9IjY2IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzMsNjYgMjgyLDcwLjUgMjgyLDYxLjUiIGZpbGw9IiMxYTdmNGIiLz48bGluZSB4MT0iMjcwIiB5MT0iMTYwIiB4Mj0iMjcwIiB5Mj0iMTg2IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzAsMTk2IDI3NSwxODYgMjY1LDE4NiIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjI4OCIgeT0iMTg0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPm5vbjwvdGV4dD48cmVjdCB4PSIxOTAiIHk9IjE5NiIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmYmVhZWEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyNzAiIHk9IjIyMC4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YWZmaWNoZXIgbjwvdGV4dD48dGV4dCB4PSIyMCIgeT0iMTIwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmJvdWNsZSB3aGlsZSA6PC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+b24gcmVjb21tZW5jZTwvdGV4dD48dGV4dCB4PSIyMCIgeT0iMTU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnRhbnQgcXVlIGxlIHRlc3Q8L3RleHQ+PHRleHQgeD0iMjAiIHk9IjE3NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5lc3QgdnJhaTwvdGV4dD48L3N2Zz4=)
*Organigramme de la boucle while : tant que 2ⁿ est inférieur à 1 000, on ajoute 1 à n ; dès que le test est faux, on sort de la boucle et on affiche n, ici 10.*
<!-- /schema -->

Quand on ne sait **pas** combien de tours seront nécessaires, mais qu'on connaît la
**condition d'arrêt**.

```python
n = 1
while 2**n < 1000:
    n = n + 1
print(n)          # plus petit n tel que 2^n >= 1000
```

> ⚠️ Il faut **garantir que la condition finira par devenir fausse**, sinon la boucle est
> infinie. C'est le risque propre au `while`.

---

## 5. Fonctions

```python
def aire_rectangle(longueur, largeur):
    return longueur * largeur

print(aire_rectangle(5, 3))    # 15
```

- `def` définit la fonction, ses **paramètres** sont entre parenthèses
- `return` **renvoie** un résultat et termine la fonction

> ⚠️ **`return` n'est pas `print`.** `print` affiche à l'écran ; `return` renvoie une valeur
> réutilisable dans un calcul. Une fonction sans `return` ne renvoie rien.

---

## 6. Algorithmes classiques du programme

### Balayage — encadrer une solution

```python
x = 0
while x**2 < 2:
    x = x + 0.001
print(x)          # valeur approchée de racine de 2
```

### Compter dans une liste

```python
notes = [12, 8, 15, 9, 18]
compteur = 0
for n in notes:
    if n >= 10:
        compteur = compteur + 1
print(compteur)   # 3
```

### Simuler le hasard

```python
from random import randint
de = randint(1, 6)     # entier au hasard entre 1 et 6 inclus
```

> `randint(1, 6)` **inclut** les deux bornes — contrairement à `range`.

---

## 7. À retenir absolument

| | |
|---|---|
| `=` | affectation, pas égalité |
| `==` | test d'égalité |
| `range(n)` | $0$ à $n-1$, soit $n$ valeurs |
| `range(a, b)` | $a$ à $b-1$ |
| `for` | nombre de tours **connu** |
| `while` | condition d'arrêt, nombre de tours inconnu |
| Indentation | fait partie de la syntaxe |
| `return` ≠ `print` | renvoyer ≠ afficher |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que `range(5)` va de $1$ à $5$.** Il va de $0$ à $4$.
2. **Écrire `=` au lieu de `==`** dans un test.
3. **Oublier l'indentation** ou les deux-points en fin de ligne : le programme ne s'exécute pas.
4. **Confondre `return` et `print`.**
5. **Écrire une virgule décimale** : Python attend `3.14`, pas `3,14`.
6. **Oublier d'initialiser** une variable d'accumulation avant la boucle (`S = 0`).
7. **Écrire une boucle `while` dont la condition ne devient jamais fausse.**
8. **Confondre les bornes de `range` et de `randint`** : la première exclut la borne
   supérieure, la seconde l'inclut.
