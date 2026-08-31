---
id: sj-nsi-03
titre: "Bac NSI — Graphes et parcours"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. La clarté des explications et la rigueur des raisonnements seront valorisées.

---

## Exercice 1 — Graphes et parcours (12 points)

On modélise le plan d'un petit réseau de couloirs par un **graphe non orienté** dont les sommets sont des salles et les arêtes des passages directs. On considère le graphe suivant :

```
A — B        arêtes : A-B, A-C, B-D, C-D, D-E
A — C
B — D
C — D
D — E
```

On représente le graphe par une **matrice d'adjacence** au sein de la classe ci-dessous. La liste `sommets` fixe l'ordre des sommets ; le dictionnaire `indice` associe à chaque sommet sa position.

```python
class Graphe:
    def __init__(self, sommets):
        self.sommets = sommets
        self.n = len(sommets)
        self.indice = {s: i for i, s in enumerate(sommets)}
        self.matrice = [[0] * self.n for _ in range(self.n)]

    def ajouter_arete(self, s1, s2):
        i, j = self.indice[s1], self.indice[s2]
        self.matrice[i][j] = 1
        self.matrice[j][i] = 1

    def voisins(self, s):
        # Question 1.2
        ...
```

**Question 1.1 (2 points).** Écrire la matrice d'adjacence de ce graphe en prenant l'ordre des sommets `['A', 'B', 'C', 'D', 'E']`. Pourquoi cette matrice est-elle symétrique ?

**Question 1.2 (3 points).** Compléter la méthode `voisins(self, s)` qui renvoie la liste des sommets adjacents à `s`, dans l'ordre de la liste `self.sommets`.

**Question 1.3 (4 points).** Compléter la fonction `parcours_largeur(graphe, depart)` ci-dessous, qui réalise un **parcours en largeur** (BFS) à partir du sommet `depart` et renvoie la liste des sommets visités dans l'ordre de visite. On utilise une liste `file` gérée en FIFO (`pop(0)` retire en tête, `append` ajoute en queue).

```python
def parcours_largeur(graphe, depart):
    visites = [depart]
    file = [depart]
    while file != []:
        s = file.pop(0)
        for voisin in graphe.voisins(s):
            if voisin not in visites:
                # À compléter
                ...
    return visites
```

**Question 1.4 (3 points).** Écrire une fonction récursive `parcours_profondeur(graphe, depart, visites=None)` qui réalise un **parcours en profondeur** (DFS) et renvoie la liste des sommets visités. Donner la liste obtenue pour l'appel `parcours_profondeur(g, 'A')` sur le graphe étudié.

---

## Exercice 2 — Détection de cycle et connexité (8 points)

On réutilise la classe `Graphe` et la fonction `parcours_profondeur` de l'exercice 1.

**Question 2.1 (2 points).** Rappeler la définition d'un **graphe connexe**. Le graphe de l'exercice 1 est-il connexe ? Justifier à l'aide d'un parcours.

**Question 2.2 (3 points).** Écrire une fonction `est_connexe(graphe)` qui renvoie `True` si le graphe est connexe, `False` sinon. On pourra comparer le nombre de sommets atteints par un parcours depuis le premier sommet au nombre total de sommets.

**Question 2.3 (3 points).** On dispose d'un graphe non orienté connexe à `n` sommets. Expliquer pourquoi, s'il possède exactement `n - 1` arêtes, il ne contient aucun cycle (c'est alors un **arbre**). Que peut-on dire s'il possède `n` arêtes ou davantage ?

---

## Corrigé

### Exercice 1

**1.1.** Matrice d'adjacence pour l'ordre `[A, B, C, D, E]` :

```
     A  B  C  D  E
  A  0  1  1  0  0
  B  1  0  0  1  0
  C  1  0  0  1  0
  D  0  1  1  0  1
  E  0  0  0  1  0
```

La matrice est symétrique parce que le graphe est **non orienté** : si `A` est relié à `B`, alors `B` est relié à `A`, donc `matrice[i][j] = matrice[j][i]`.

**1.2.**
```python
    def voisins(self, s):
        i = self.indice[s]
        return [self.sommets[j] for j in range(self.n) if self.matrice[i][j] == 1]
```

**1.3.**
```python
def parcours_largeur(graphe, depart):
    visites = [depart]
    file = [depart]
    while file != []:
        s = file.pop(0)
        for voisin in graphe.voisins(s):
            if voisin not in visites:
                visites.append(voisin)
                file.append(voisin)
    return visites
```

Depuis `A`, on obtient `['A', 'B', 'C', 'D', 'E']`.

**1.4.**
```python
def parcours_profondeur(graphe, depart, visites=None):
    if visites is None:
        visites = []
    visites.append(depart)
    for voisin in graphe.voisins(depart):
        if voisin not in visites:
            parcours_profondeur(graphe, voisin, visites)
    return visites
```

Pour `parcours_profondeur(g, 'A')`, on obtient `['A', 'B', 'D', 'C', 'E']` : on plonge d'abord dans A→B→D, D visite C (voisin non encore vu) puis E.

*Remarque : on initialise `visites` à `None` puis à une liste vide dans le corps, afin d'éviter le piège de l'argument par défaut mutable partagé entre les appels.*

### Exercice 2

**2.1.** Un graphe est **connexe** si, pour tout couple de sommets, il existe une chaîne (suite d'arêtes) reliant l'un à l'autre. De façon équivalente, un parcours (largeur ou profondeur) lancé depuis n'importe quel sommet atteint tous les autres. Ici, `parcours_profondeur(g, 'A')` atteint les 5 sommets : le graphe est donc **connexe**.

**2.2.**
```python
def est_connexe(graphe):
    if graphe.n == 0:
        return True
    atteints = parcours_profondeur(graphe, graphe.sommets[0])
    return len(atteints) == graphe.n
```

**2.3.** Un graphe non orienté connexe à `n` sommets possède au moins `n - 1` arêtes (le minimum pour relier tous les sommets). S'il en a exactement `n - 1`, aucune arête n'est « en trop » : en retirer une le déconnecterait, et il ne peut contenir de cycle (un cycle offrirait un chemin redondant permettant d'enlever une arête sans perdre la connexité). C'est alors un **arbre**. Dès qu'il possède `n` arêtes ou plus, il contient nécessairement **au moins un cycle**.
