---
id: tale-nsi-structures-de-donnees
titre: "Structures de données (piles, files, listes, arbres)"
voie: generale
niveau: terminale
parcours: nsi
matiere: nsi
programme: "Terminale — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Programmation Python de Première (fonctions, listes, dictionnaires, classes)
  - Notion de type et d'interface abstraite d'un type
statut: brouillon
relu_par: null
---

# Structures de données (piles, files, listes, arbres)

> Une **structure de données** n'est pas d'abord du code : c'est un **contrat**.
> Elle dit *quelles opérations* on peut faire et *ce qu'elles garantissent*, sans
> dire *comment* c'est programmé. On distingue donc le **type abstrait** (l'interface,
> les opérations et leur comportement) de son **implémentation** (tableau, chaînage,
> objet Python…). Le même type abstrait peut avoir plusieurs implémentations.

---

## 1. Type abstrait de données

Un **type abstrait de données** (TAD) se définit par :

- un ensemble de **valeurs** manipulées ;
- une liste d'**opérations** (le *nom*, ce qu'elles prennent, ce qu'elles rendent) ;
- des **propriétés** décrivant leur comportement (axiomes).

Exemple : le TAD *Pile* fournit `empiler`, `depiler`, `est_vide`, `sommet`. Peu importe
qu'on la code avec une liste Python ou une liste chaînée : tant que le comportement
est respecté, le programme qui *utilise* la pile n'a pas à changer. C'est le principe
d'**encapsulation** : on programme *contre l'interface*, pas contre l'implémentation.

---

## 2. La pile (LIFO)

<!-- schema:pile-file -->
![Une pile ressort le dernier élément ajouté (on entre et on sort par le sommet) ; une file ressort le premier (on entre en queue, on sort en tête).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNDAiIHk9IjI0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5QaWxlIChMSUZPKTwvdGV4dD48cGF0aCBkPSJNIDkwIDYwIEwgOTAgMjMwIEwgMTkwIDIzMCBMIDE5MCA2MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSI5OCIgeT0iMTkzIiB3aWR0aD0iODQiIGhlaWdodD0iMzQiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTQwIiB5PSIyMTYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmE8L3RleHQ+PHJlY3QgeD0iOTgiIHk9IjE1MyIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjM0IiByeD0iNCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE0MCIgeT0iMTc2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5iPC90ZXh0PjxyZWN0IHg9Ijk4IiB5PSIxMTMiIHdpZHRoPSI4NCIgaGVpZ2h0PSIzNCIgcng9IjQiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxNDAiIHk9IjEzNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YzwvdGV4dD48bGluZSB4MT0iNTAiIHkxPSI3MCIgeDI9IjExMSIgeTI9Ijk5LjYzIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEyMCwxMDQgMTEzLjE5LDk1LjEzIDEwOC44MiwxMDQuMTMiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSI0NiIgeT0iNjAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmVtcGlsZXI8L3RleHQ+PGxpbmUgeDE9IjE2MCIgeTE9IjEwNCIgeDI9IjIyMSIgeTI9Ijc0LjM3IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIzMCw3MCAyMTguODIsNjkuODcgMjIzLjE5LDc4Ljg3IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjQwIiB5PSI2MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZMOpcGlsZXI8L3RleHQ+PHRleHQgeD0iMTQwIiB5PSIyNTYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+b24gZW50cmUgZXQgb24gc29ydCBwYXIgbGUgc29tbWV0PC90ZXh0Pjx0ZXh0IHg9IjIwMiIgeT0iMTI2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPuKGkCBzb21tZXQ8L3RleHQ+PHRleHQgeD0iNDgwIiB5PSIyNCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RmlsZSAoRklGTyk8L3RleHQ+PGxpbmUgeDE9IjM0MCIgeTE9IjEyMCIgeDI9IjYwMCIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0MCIgeTE9IjE3MCIgeDI9IjYwMCIgeTI9IjE3MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNTE0IiB5PSIxMjgiIHdpZHRoPSI1MiIgaGVpZ2h0PSIzNCIgcng9IjQiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI1NDAiIHk9IjE1MSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YTwvdGV4dD48cmVjdCB4PSI0NTAiIHk9IjEyOCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjM0IiByeD0iNCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjQ3NiIgeT0iMTUxIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5iPC90ZXh0PjxyZWN0IHg9IjM4NiIgeT0iMTI4IiB3aWR0aD0iNTIiIGhlaWdodD0iMzQiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNDEyIiB5PSIxNTEiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmM8L3RleHQ+PGxpbmUgeDE9IjMwMCIgeTE9IjE0NSIgeDI9IjMzNiIgeTI9IjE0NSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNDYsMTQ1IDMzNiwxNDAgMzM2LDE1MCIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHg9IjMyMCIgeT0iMTEwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5lbmZpbGVyPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMTkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4ocXVldWUpPC90ZXh0PjxsaW5lIHgxPSI1OTQiIHkxPSIxNDUiIHgyPSI2MjYiIHkyPSIxNDUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjM2LDE0NSA2MjYsMTQwIDYyNiwxNTAiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI2MTYiIHk9IjExMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZMOpZmlsZXI8L3RleHQ+PHRleHQgeD0iNjE2IiB5PSIxOTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPih0w6p0ZSk8L3RleHQ+PHRleHQgeD0iNDcwIiB5PSIyNTYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+cHJlbWllciBlbnRyw6ksIHByZW1pZXIgc29ydGk8L3RleHQ+PC9zdmc+)
*Une pile ressort le dernier élément ajouté (on entre et on sort par le sommet) ; une file ressort le premier (on entre en queue, on sort en tête).*
<!-- /schema -->

Une **pile** (*stack*) fonctionne en **dernier entré, premier sorti** (*Last In, First
Out*, LIFO). Comme une pile d'assiettes : on ajoute et on retire par le **sommet**.

Opérations : `empiler(x)` (ajouter au sommet), `depiler()` (retirer et renvoyer le
sommet), `est_vide()`, éventuellement `sommet()` (lire sans retirer).

Implémentation simple en Python avec une liste, où le sommet est la **fin** de la liste :

```python
class Pile:
    def __init__(self):
        self.elements = []
    def est_vide(self):
        return self.elements == []
    def empiler(self, x):
        self.elements.append(x)      # ajout en fin = sommet
    def depiler(self):
        return self.elements.pop()   # retrait en fin
```

Usages typiques : évaluation d'expressions, gestion du bouton « précédent » d'un
navigateur, **pile d'appels** d'un programme récursif.

---

## 3. La file (FIFO)

Une **file** (*queue*) fonctionne en **premier entré, premier sorti** (*First In,
First Out*, FIFO). Comme une file d'attente : on ajoute d'un côté (**enfiler**) et on
retire de l'autre (**défiler**).

Opérations : `enfiler(x)`, `defiler()`, `est_vide()`.

Attention à l'implémentation : avec une liste Python, `pop(0)` retire en tête mais
oblige à décaler tous les éléments (coût proportionnel à la taille). On préfère souvent
`collections.deque`, dont l'ajout et le retrait aux deux bouts sont efficaces :

```python
from collections import deque
file = deque()
file.append("a")     # enfiler
premier = file.popleft()  # defiler
```

Usages : parcours en largeur d'un graphe, gestion de tâches, tampons.

---

## 4. Les listes (et le chaînage)

<!-- schema:liste-chainee -->
![Une liste chaînée : chaque cellule contient une valeur et une référence vers la suivante ; la dernière ne pointe vers rien (None).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTg0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxODQiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyMCIgeT0iOTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnTDqnRlPC90ZXh0PjxsaW5lIHgxPSI0MCIgeTE9IjkyIiB4Mj0iNTYiIHkyPSI5MiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjYsOTIgNTYsODcgNTYsOTciIGZpbGw9IiMxYTdmNGIiLz48cmVjdCB4PSI3MCIgeT0iNzAiIHdpZHRoPSI2NC44IiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjEzNC44IiB5PSI3MCIgd2lkdGg9IjQzLjIiIGhlaWdodD0iNDQiIHJ4PSIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTAyLjQiIHk9Ijk4IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMjwvdGV4dD48Y2lyY2xlIGN4PSIxNTYuNCIgY3k9IjkyIiByPSI0IiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjE1Ni40IiB5MT0iOTIiIHgyPSIyMDEiIHkyPSI5MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjExLDkyIDIwMSw4NyAyMDEsOTciIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSIyMTQiIHk9IjcwIiB3aWR0aD0iNjQuOCIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIyNzguOCIgeT0iNzAiIHdpZHRoPSI0My4yIiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjI0Ni40IiB5PSI5OCIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NzwvdGV4dD48Y2lyY2xlIGN4PSIzMDAuNCIgY3k9IjkyIiByPSI0IiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjMwMC40IiB5MT0iOTIiIHgyPSIzNDUiIHkyPSI5MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzU1LDkyIDM0NSw4NyAzNDUsOTciIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSIzNTgiIHk9IjcwIiB3aWR0aD0iNjQuOCIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI0MjIuOCIgeT0iNzAiIHdpZHRoPSI0My4yIiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjM5MC40IiB5PSI5OCIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjU8L3RleHQ+PGNpcmNsZSBjeD0iNDQ0LjQiIGN5PSI5MiIgcj0iNCIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0NDQuNCIgeTE9IjkyIiB4Mj0iNDg5IiB5Mj0iOTIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ5OSw5MiA0ODksODcgNDg5LDk3IiBmaWxsPSIjMTYyMzJlIi8+PHJlY3QgeD0iNTAyIiB5PSI3MCIgd2lkdGg9IjY0LjgiIGhlaWdodD0iNDQiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHJlY3QgeD0iNTY2LjgiIHk9IjcwIiB3aWR0aD0iNDMuMiIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI1MzQuNCIgeT0iOTgiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjM8L3RleHQ+PGxpbmUgeDE9IjU3Ni40IiB5MT0iMTA0IiB4Mj0iNjAwLjQiIHkyPSI4MCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU4OC40IiB5PSIxMzQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk5vbmU8L3RleHQ+PHRleHQgeD0iMTAyLjQiIHk9IjU2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52YWxldXI8L3RleHQ+PHRleHQgeD0iMTU2LjQiIHk9IjU2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdWl2YW50ZTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjE3MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj51bmUgY2VsbHVsZSA9IHVuZSB2YWxldXIgKyB1bmUgcsOpZsOpcmVuY2UgdmVycyBsYSBjZWxsdWxlIHN1aXZhbnRlPC90ZXh0Pjwvc3ZnPg==)
*Une liste chaînée : chaque cellule contient une valeur et une référence vers la suivante ; la dernière ne pointe vers rien (None).*
<!-- /schema -->

La **liste** (au sens abstrait) est une séquence ordonnée d'éléments où l'on peut
insérer, supprimer, parcourir. Deux grandes implémentations :

- **par tableau** (la `list` de Python) : accès direct à l'indice `i` immédiat, mais
  insérer/supprimer au milieu coûte cher (décalages) ;
- **par chaînage** (*liste chaînée*) : chaque **cellule** contient une valeur et une
  référence vers la cellule **suivante**. Insérer/supprimer en tête est immédiat, mais
  accéder au i-ᵉ élément oblige à parcourir depuis le début.

Le choix dépend des opérations les plus fréquentes. Il n'y a pas de « meilleure »
structure dans l'absolu.

---

## 5. Les arbres

<!-- schema:abr -->
![Arbre binaire de recherche obtenu en insérant 8, 3, 10, 1, 6, 14, 4, 7, 13 : racine en orange, feuilles en vert, profondeurs indiquées à droite.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzM4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMzgiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjgyLjExIiB5MT0iNTguOTQiIHgyPSIxNzcuODkiIHkyPSIxMTEuMDYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzE3Ljg5IiB5MT0iNTguOTQiIHgyPSI0MjIuMTEiIHkyPSIxMTEuMDYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTQ1Ljg2IiB5MT0iMTM0LjE0IiB4Mj0iMTA0LjE0IiB5Mj0iMTc1Ljg2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE3NC4xNCIgeTE9IjEzNC4xNCIgeDI9IjIxNS44NiIgeTI9IjE3NS44NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMjEuMDYiIHkxPSIyMDcuODkiIHgyPSIyMDMuOTQiIHkyPSIyNDIuMTEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjM4Ljk0IiB5MT0iMjA3Ljg5IiB4Mj0iMjU2LjA2IiB5Mj0iMjQyLjExIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ1NC4xNCIgeTE9IjEzNC4xNCIgeDI9IjQ5NS44NiIgeTI9IjE3NS44NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MDEuMDYiIHkxPSIyMDcuODkiIHgyPSI0ODMuOTQiIHkyPSIyNDIuMTEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSI1MCIgcj0iMjAiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjMwMCIgeT0iNTYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjg8L3RleHQ+PGNpcmNsZSBjeD0iMTYwIiBjeT0iMTIwIiByPSIyMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMTYwIiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjM8L3RleHQ+PGNpcmNsZSBjeD0iOTAiIGN5PSIxOTAiIHI9IjIwIiBmaWxsPSIjZThmNWVlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48dGV4dCB4PSI5MCIgeT0iMTk2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0PjxjaXJjbGUgY3g9IjIzMCIgY3k9IjE5MCIgcj0iMjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjIzMCIgeT0iMTk2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj42PC90ZXh0PjxjaXJjbGUgY3g9IjE5NSIgY3k9IjI2MCIgcj0iMjAiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjE5NSIgeT0iMjY2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj40PC90ZXh0PjxjaXJjbGUgY3g9IjI2NSIgY3k9IjI2MCIgcj0iMjAiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjI2NSIgeT0iMjY2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj43PC90ZXh0PjxjaXJjbGUgY3g9IjQ0MCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIvPjx0ZXh0IHg9IjQ0MCIgeT0iMTI2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMDwvdGV4dD48Y2lyY2xlIGN4PSI1MTAiIGN5PSIxOTAiIHI9IjIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48dGV4dCB4PSI1MTAiIHk9IjE5NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTQ8L3RleHQ+PGNpcmNsZSBjeD0iNDc1IiBjeT0iMjYwIiByPSIyMCIgZmlsbD0iI2U4ZjVlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iNDc1IiB5PSIyNjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEzPC90ZXh0Pjx0ZXh0IHg9IjU2MCIgeT0iNTYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+cHJvZm9uZGV1ciAwPC90ZXh0Pjx0ZXh0IHg9IjU2MCIgeT0iMTI2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnByb2ZvbmRldXIgMTwvdGV4dD48dGV4dCB4PSI1NjAiIHk9IjE5NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5wcm9mb25kZXVyIDI8L3RleHQ+PHRleHQgeD0iNTYwIiB5PSIyNjYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+cHJvZm9uZGV1ciAzPC90ZXh0Pjx0ZXh0IHg9IjMyOCIgeT0iMzYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+cmFjaW5lPC90ZXh0Pjx0ZXh0IHg9IjE0IiB5PSIzMDQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+dmVydCA6IGZldWlsbGVzIDsgaGF1dGV1ciBkZSBs4oCZYXJicmUgOiAzIDsgdGFpbGxlIDogOSBuxZN1ZHM8L3RleHQ+PHRleHQgeD0iMTQiIHk9IjMyNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPnBvdXIgY2hhcXVlIG7Fk3VkIDogY2zDqXMgcGx1cyBwZXRpdGVzIMOgIGdhdWNoZSwgcGx1cyBncmFuZGVzIMOgIGRyb2l0ZTwvdGV4dD48L3N2Zz4=)
*Arbre binaire de recherche obtenu en insérant 8, 3, 10, 1, 6, 14, 4, 7, 13 : racine en orange, feuilles en vert, profondeurs indiquées à droite.*
<!-- /schema -->

Un **arbre** est une structure **hiérarchique** : un **nœud racine**, et chaque nœud
possède des nœuds **enfants**. Un nœud sans enfant est une **feuille**. On ne peut
remonter à la racine que par un seul chemin (pas de cycle).

Vocabulaire :

- **racine** : le nœud du sommet (le seul sans parent) ;
- **parent / enfant** : lien direct entre deux nœuds ;
- **feuille** : nœud sans enfant ;
- **profondeur** d'un nœud : nombre d'arêtes depuis la racine (racine = 0) ;
- **hauteur** de l'arbre : la plus grande profondeur.

Un **arbre binaire** est un arbre où chaque nœud a **au plus deux** enfants (gauche et
droite). Un **arbre binaire de recherche** (ABR) est un arbre binaire où, pour chaque
nœud, toutes les clés du **sous-arbre gauche** sont **inférieures** à sa clé et toutes
celles du **sous-arbre droit** lui sont **supérieures** : cette propriété permet une
recherche rapide, semblable à la recherche dichotomique.

Implémentation d'un nœud d'arbre binaire :

```python
class Noeud:
    def __init__(self, valeur, gauche=None, droite=None):
        self.valeur = valeur
        self.gauche = gauche
        self.droite = droite
```

Taille = nombre de nœuds ; hauteur = longueur du plus long chemin racine → feuille.

---

## Ce qu'il faut retenir

- On sépare le **type abstrait** (les opérations et leurs garanties) de l'**implémentation**.
- **Pile = LIFO** (on entre et sort par le sommet) ; **file = FIFO** (on entre d'un côté,
  on sort de l'autre).
- Une **liste chaînée** insère vite en tête mais accède lentement à un indice ; un
  **tableau** fait l'inverse.
- Un **arbre** est hiérarchique et sans cycle ; un **arbre binaire** a au plus deux enfants
  par nœud ; un **ABR** ordonne gauche < nœud < droite.

## Les erreurs à éviter

- Confondre **pile** et **file** : une pile ressort le *dernier* ajouté, une file le
  *premier*.
- Croire qu'une structure abstraite impose une implémentation : une pile *n'est pas*
  « une liste Python », elle *peut être réalisée* avec.
- Utiliser `list.pop(0)` pour une file sans voir que c'est coûteux (décalage) ; préférer
  `deque`.
- Confondre **profondeur** (d'un nœud) et **hauteur** (de l'arbre), ou dire qu'une racine
  est une feuille.
