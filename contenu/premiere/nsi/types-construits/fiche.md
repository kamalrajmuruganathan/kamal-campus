---
id: 1nsi-types-construits
titre: "Les types construits (tuples, listes, dictionnaires)"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Types de base et variables en Python
  - Boucles (for, while) et instruction conditionnelle
statut: brouillon
relu_par: null
---

# Les types construits (tuples, listes, dictionnaires)

> Les types de base (`int`, `float`, `str`, `bool`) ne suffisent pas à représenter
> des données structurées. Les **types construits** regroupent plusieurs valeurs
> dans un seul objet : **p-uplets** (tuples), **tableaux** (listes) et
> **dictionnaires** (p-uplets nommés).

---

# 1. Les p-uplets (tuples)

Un **p-uplet** rassemble plusieurs valeurs dans un **ordre fixe**. En Python, on
l'écrit entre parenthèses.

```python
point = (3, 5)
date = (31, 8, 2026)
```

On accède à un élément par son **indice**, qui **commence à 0** :

```python
point[0]   # 3
point[1]   # 5
```

Propriété essentielle : un tuple est **non modifiable** (*immuable*). On ne peut
pas changer un de ses éléments après création.

```python
point[0] = 10   # TypeError : impossible de modifier un tuple
```

On peut faire de l'**affectation multiple** (déballage) :

```python
x, y = point    # x vaut 3, y vaut 5
```

---

# 2. Les tableaux (listes)

<!-- schema:liste-indices -->
![Les éléments d'une liste sont repérés par leur indice, qui commence à 0 : l'élément d'indice 2 vaut 9 et le dernier indice est la longueur moins 1.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjA0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyMDQiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyODAiIHk9IjI4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iRGVqYVZ1IFNhbnMgTW9ubyxNZW5sbyxDb25zb2xhcyxtb25vc3BhY2UiPm5vdGVzwqA9wqBbMTIswqAxNSzCoDkswqAxOF08L3RleHQ+PHJlY3QgeD0iMTUyIiB5PSI2MCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ2IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE4NCIgeT0iOTAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEyPC90ZXh0Pjx0ZXh0IHg9IjE4NCIgeT0iMTI4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5pbmRpY2UgMDwvdGV4dD48cmVjdCB4PSIyMTYiIHk9IjYwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDYiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjQ4IiB5PSI5MCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTU8L3RleHQ+PHRleHQgeD0iMjQ4IiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmluZGljZSAxPC90ZXh0PjxyZWN0IHg9IjI4MCIgeT0iNjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0NiIgcng9IjAiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzMTIiIHk9IjkwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj45PC90ZXh0Pjx0ZXh0IHg9IjMxMiIgeT0iMTI4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5pbmRpY2UgMjwvdGV4dD48cmVjdCB4PSIzNDQiIHk9IjYwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDYiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMzc2IiB5PSI5MCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTg8L3RleHQ+PHRleHQgeD0iMzc2IiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmluZGljZSAzPC90ZXh0Pjx0ZXh0IHg9IjMxMiIgeT0iMTYwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iRGVqYVZ1IFNhbnMgTW9ubyxNZW5sbyxDb25zb2xhcyxtb25vc3BhY2UiIGZvbnQtd2VpZ2h0PSI3MDAiPm5vdGVzWzJdwqDihpLCoDk8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIxOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmxlbihub3RlcykgPSA0IDsgbGUgZGVybmllciBpbmRpY2UgZXN0IDM8L3RleHQ+PC9zdmc+)
*Les éléments d'une liste sont repérés par leur indice, qui commence à 0 : l'élément d'indice 2 vaut 9 et le dernier indice est la longueur moins 1.*
<!-- /schema -->

Un **tableau** contient une suite d'éléments **indexés** (à partir de 0). En
Python, il est représenté par le type **`list`**, écrit entre crochets.

```python
notes = [12, 15, 9, 18]
notes[2]        # 9
len(notes)      # 4  (nombre d'éléments)
```

Contrairement au tuple, une liste est **modifiable** (*mutable*) :

```python
notes[2] = 10       # remplace 9 par 10
notes.append(20)    # ajoute 20 à la fin
```

On **parcourt** une liste avec une boucle `for` :

```python
for note in notes:
    print(note)
```

## Construction par compréhension

Python permet de construire une liste de façon concise :

```python
carres = [n * n for n in range(5)]   # [0, 1, 4, 9, 16]
pairs = [n for n in range(10) if n % 2 == 0]   # [0, 2, 4, 6, 8]
```

## Tableaux de tableaux (matrices)

<!-- schema:matrice -->
![Un tableau de tableaux : on choisit d’abord la ligne (indice 1), puis la colonne (indice 2) ; l’élément obtenu vaut 6.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMjY2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIyNjYiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyNzAiIHk9IjI2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iRGVqYVZ1IFNhbnMgTW9ubyxNZW5sbyxDb25zb2xhcyxtb25vc3BhY2UiPm3CoD3CoFtbMSzCoDIswqAzXSzCoFs0LMKgNSzCoDZdXTwvdGV4dD48dGV4dCB4PSIyMDgiIHk9IjU0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jb2xvbm5lIDA8L3RleHQ+PHRleHQgeD0iMjg0IiB5PSI1NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y29sb25uZSAxPC90ZXh0Pjx0ZXh0IHg9IjM2MCIgeT0iNTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmNvbG9ubmUgMjwvdGV4dD48dGV4dCB4PSIxNTgiIHk9IjEwNyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+bVswXSDihpIgbGlnbmUgMDwvdGV4dD48cmVjdCB4PSIxNzAiIHk9IjY0IiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHJ4PSIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIyMDgiIHk9IjEwOSIgZm9udC1zaXplPSIxOSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTwvdGV4dD48cmVjdCB4PSIyNDYiIHk9IjY0IiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHJ4PSIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIyODQiIHk9IjEwOSIgZm9udC1zaXplPSIxOSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD48cmVjdCB4PSIzMjIiIHk9IjY0IiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHJ4PSIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzNjAiIHk9IjEwOSIgZm9udC1zaXplPSIxOSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48dGV4dCB4PSIxNTgiIHk9IjE4MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+bVsxXSDihpIgbGlnbmUgMTwvdGV4dD48cmVjdCB4PSIxNzAiIHk9IjE0MCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiByeD0iMCIgZmlsbD0iI2ZmZmFmNCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMjA4IiB5PSIxODUiIGZvbnQtc2l6ZT0iMTkiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+PHJlY3QgeD0iMjQ2IiB5PSIxNDAiIHdpZHRoPSI3NiIgaGVpZ2h0PSI3NiIgcng9IjAiIGZpbGw9IiNmZmZhZjQiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjI4NCIgeT0iMTg1IiBmb250LXNpemU9IjE5IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0PjxyZWN0IHg9IjMyMiIgeT0iMTQwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIHJ4PSIwIiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjYiLz48dGV4dCB4PSIzNjAiIHk9IjE4NSIgZm9udC1zaXplPSIxOSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NjwvdGV4dD48dGV4dCB4PSIyNzAiIHk9IjI1MCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkRlamFWdSBTYW5zIE1vbm8sTWVubG8sQ29uc29sYXMsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iNzAwIj5tWzFdWzJdwqDihpLCoDY8L3RleHQ+PC9zdmc+)
*Un tableau de tableaux : on choisit d’abord la ligne (indice 1), puis la colonne (indice 2) ; l’élément obtenu vaut 6.*
<!-- /schema -->

Une liste peut contenir des listes : on obtient un **tableau à deux dimensions**.

```python
m = [[1, 2, 3], [4, 5, 6]]
m[1][2]   # 6  (2e ligne, 3e colonne)
```

---

# 3. Les dictionnaires (p-uplets nommés)

<!-- schema:dictionnaire -->
![Un dictionnaire associe à chaque clé unique une valeur ; on accède à une valeur par sa clé, et non par un indice.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjUyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyNTIiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyNjAiIHk9IjI2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EaWN0aW9ubmFpcmUgwqsgZWxldmUgwrs8L3RleHQ+PHJlY3QgeD0iNjAiIHk9IjQ0IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2U4ZjVlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTM1IiB5PSI2OSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkRlamFWdSBTYW5zIE1vbm8sTWVubG8sQ29uc29sYXMsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iNzAwIj4ibm9tIjwvdGV4dD48bGluZSB4MT0iMjE0IiB5MT0iNjMiIHgyPSIyODYiIHkyPSI2MyIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjk2LDYzIDI4Niw1OCAyODYsNjgiIGZpbGw9IiM1YjZiN2EiLz48cmVjdCB4PSIzMDAiIHk9IjQ0IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzgwIiB5PSI2OSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkRlamFWdSBTYW5zIE1vbm8sTWVubG8sQ29uc29sYXMsbW9ub3NwYWNlIj4iRGlhbGxvIjwvdGV4dD48cmVjdCB4PSI2MCIgeT0iOTQiIHdpZHRoPSIxNTAiIGhlaWdodD0iMzgiIHJ4PSI4IiBmaWxsPSIjZThmNWVlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxMzUiIHk9IjExOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkRlamFWdSBTYW5zIE1vbm8sTWVubG8sQ29uc29sYXMsbW9ub3NwYWNlIiBmb250LXdlaWdodD0iNzAwIj4iYWdlIjwvdGV4dD48bGluZSB4MT0iMjE0IiB5MT0iMTEzIiB4Mj0iMjg2IiB5Mj0iMTEzIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyOTYsMTEzIDI4NiwxMDggMjg2LDExOCIgZmlsbD0iIzViNmI3YSIvPjxyZWN0IHg9IjMwMCIgeT0iOTQiIHdpZHRoPSIxNjAiIGhlaWdodD0iMzgiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzODAiIHk9IjExOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkRlamFWdSBTYW5zIE1vbm8sTWVubG8sQ29uc29sYXMsbW9ub3NwYWNlIj4xNjwvdGV4dD48cmVjdCB4PSI2MCIgeT0iMTQ0IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2U4ZjVlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTM1IiB5PSIxNjkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJEZWphVnUgU2FucyBNb25vLE1lbmxvLENvbnNvbGFzLG1vbm9zcGFjZSIgZm9udC13ZWlnaHQ9IjcwMCI+ImNsYXNzZSI8L3RleHQ+PGxpbmUgeDE9IjIxNCIgeTE9IjE2MyIgeDI9IjI4NiIgeTI9IjE2MyIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjk2LDE2MyAyODYsMTU4IDI4NiwxNjgiIGZpbGw9IiM1YjZiN2EiLz48cmVjdCB4PSIzMDAiIHk9IjE0NCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjM4MCIgeT0iMTY5IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iRGVqYVZ1IFNhbnMgTW9ubyxNZW5sbyxDb25zb2xhcyxtb25vc3BhY2UiPiIxRzMiPC90ZXh0Pjx0ZXh0IHg9IjEzNSIgeT0iMjA2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5jbMOpcyAodW5pcXVlcyk8L3RleHQ+PHRleHQgeD0iMzgwIiB5PSIyMDYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnZhbGV1cnM8L3RleHQ+PHRleHQgeD0iMjYwIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJEZWphVnUgU2FucyBNb25vLE1lbmxvLENvbnNvbGFzLG1vbm9zcGFjZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZWxldmVbIm5vbSJdwqDihpLCoCJEaWFsbG8iPC90ZXh0Pjwvc3ZnPg==)
*Un dictionnaire associe à chaque clé unique une valeur ; on accède à une valeur par sa clé, et non par un indice.*
<!-- /schema -->

Un **dictionnaire** associe à chaque **clé** une **valeur**. On n'accède plus par
un indice numérique mais par la clé. En Python, type **`dict`**, écrit entre
accolades.

```python
eleve = {"nom": "Diallo", "age": 16, "classe": "1G3"}
eleve["nom"]      # 'Diallo'
eleve["age"] = 17    # modification
eleve["ville"] = "Lyon"   # ajout d'une nouvelle clé
```

Un dictionnaire est **modifiable**. Les **clés** doivent être **uniques** (une clé
n'apparaît qu'une fois) et **immuables** (souvent des chaînes ou des nombres).

On le **parcourt** ainsi :

```python
for cle in eleve:               # parcourt les clés
    print(cle, eleve[cle])

for cle, valeur in eleve.items():   # clés et valeurs
    print(cle, valeur)
```

---

# 4. Quel type choisir ?

| Besoin | Type adapté |
|---|---|
| Regrouper des valeurs qui ne changent pas (coordonnées, date) | tuple |
| Une suite ordonnée que l'on modifie / parcourt par position | liste |
| Associer une valeur à un nom (fiche, enregistrement) | dictionnaire |

---

# Ce qu'il faut retenir

- Un **tuple** est **ordonné** et **non modifiable** : `(3, 5)`.
- Une **liste** est **ordonnée** et **modifiable** : `[12, 15, 9]`.
- Un **dictionnaire** associe des **clés** à des **valeurs** : `{"nom": "Diallo"}`.
- L'**indexation commence à 0** pour tuples et listes.
- On accède à une valeur d'un dictionnaire **par sa clé**, pas par un indice.
- Les clés d'un dictionnaire sont **uniques**.

# Les erreurs à éviter

- Croire que l'indexation commence à 1 : le premier élément est à l'indice **0**.
- Vouloir modifier un **tuple** : c'est impossible (utiliser une liste).
- Écrire `dico[0]` pour un dictionnaire quand la clé n'est pas 0 : on utilise
  la **clé** réelle.
- Confondre `len()` (nombre d'éléments) et le **dernier indice** (qui vaut
  `len − 1`).
