---
id: tale-nsi-algorithmes-de-graphes
titre: "Algorithmes sur les graphes"
voie: generale
niveau: terminale
parcours: nsi
matiere: nsi
programme: "Terminale — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Piles et files (chapitre « Structures de données »)
  - Récursivité (chapitre voisin)
statut: brouillon
relu_par: null
---

# Algorithmes sur les graphes

> Un **graphe** modélise des **objets** et des **liens** entre eux : des villes reliées
> par des routes, des personnes reliées par des amitiés, des pages web par des liens.
> C'est l'outil idéal pour représenter des **réseaux**. On apprend à le décrire, à le
> stocker en mémoire et à le **parcourir**.

---

## 1. Vocabulaire des graphes

Un graphe est constitué de **sommets** (les objets, appelés aussi nœuds) et d'**arêtes**
(les liens entre deux sommets).

- Graphe **non orienté** : une arête relie deux sommets **dans les deux sens** (une
  amitié, une route à double sens).
- Graphe **orienté** : les liens ont un **sens** (un arc va de A **vers** B ; ex. un lien
  hypertexte). Un arc de A vers B n'implique pas un arc de B vers A.
- Deux sommets reliés par une arête sont **adjacents** (ou **voisins**).
- Le **degré** d'un sommet est son nombre de voisins.
- Un **chemin** est une suite de sommets reliés de proche en proche par des arêtes.
- Un **cycle** est un chemin qui revient à son point de départ.
- Un graphe est **connexe** si l'on peut aller de n'importe quel sommet à n'importe quel
  autre.
- Une arête peut porter un **poids** (une distance, un coût) : le graphe est alors
  **pondéré**.

---

## 2. Représenter un graphe en mémoire

Deux représentations classiques :

- **Matrice d'adjacence** : un tableau carré `M` où `M[i][j] = 1` s'il existe une arête
  de `i` vers `j`, `0` sinon. Rapide pour tester si deux sommets sont reliés, mais
  occupe de la place même quand il y a peu d'arêtes.
- **Listes d'adjacence** : à chaque sommet on associe la **liste de ses voisins**. En
  Python, souvent un dictionnaire :

```python
graphe = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"],
}
```

Les listes d'adjacence sont économes quand le graphe a **peu d'arêtes** (graphe creux).

---

## 3. Le parcours en largeur (BFS)

Le **parcours en largeur** (*Breadth-First Search*) explore le graphe **par cercles
concentriques** : d'abord le sommet de départ, puis tous ses voisins, puis les voisins
des voisins, etc.

Il utilise une **file** (FIFO) : on enfile un sommet découvert, on le traite quand il
sort de la file. On note les sommets **déjà visités** pour ne pas les traiter deux fois.

```python
from collections import deque
def parcours_largeur(g, depart):
    vus = {depart}
    file = deque([depart])
    ordre = []
    while file:
        s = file.popleft()
        ordre.append(s)
        for voisin in g[s]:
            if voisin not in vus:
                vus.add(voisin)
                file.append(voisin)
    return ordre
```

Propriété clé : dans un graphe **non pondéré**, le parcours en largeur trouve le
**plus court chemin** (en nombre d'arêtes) depuis le sommet de départ.

---

## 4. Le parcours en profondeur (DFS)

Le **parcours en profondeur** (*Depth-First Search*) s'enfonce le plus loin possible le
long d'un chemin avant de **revenir en arrière** (*backtracking*) explorer les autres
branches.

Il utilise une **pile** (LIFO) — souvent implicitement, via la récursivité :

```python
def parcours_profondeur(g, s, vus=None):
    if vus is None:
        vus = set()
    vus.add(s)
    for voisin in g[s]:
        if voisin not in vus:
            parcours_profondeur(g, voisin, vus)
    return vus
```

Dans les deux parcours, marquer les sommets **visités** est indispensable : sans cela,
un cycle ferait tourner l'algorithme indéfiniment.

---

## 5. Où sert-on des graphes ?

- Trouver un **itinéraire** (le plus court chemin) dans un réseau routier ;
- Détecter la **connexité** ou des **cycles** ;
- Modéliser des **réseaux sociaux**, des dépendances, le **web** ;
- Résoudre des **labyrinthes** (un labyrinthe est un graphe : cases = sommets, passages
  = arêtes).

Le choix entre BFS et DFS dépend du besoin : le plus court chemin non pondéré appelle un
BFS ; explorer entièrement ou détecter un cycle se fait bien en DFS.

---

## Ce qu'il faut retenir

- Un graphe = **sommets** + **arêtes** ; il peut être **orienté** ou non, **pondéré** ou non.
- Deux représentations : **matrice d'adjacence** et **listes d'adjacence** (dictionnaire).
- **BFS** utilise une **file** et explore par cercles ; dans un graphe non pondéré, il
  donne le **plus court chemin** en nombre d'arêtes.
- **DFS** utilise une **pile** (souvent la récursivité) et s'enfonce avant de revenir en
  arrière.
- Toujours **marquer les sommets visités** pour éviter les boucles infinies dans les cycles.

## Les erreurs à éviter

- Confondre BFS (file, largeur) et DFS (pile, profondeur).
- Croire qu'un arc de A vers B implique un arc de B vers A dans un graphe **orienté** :
  c'est faux.
- Oublier de marquer les sommets visités : sur un graphe avec cycle, le parcours ne
  s'arrête plus.
- Utiliser le BFS pour un plus court chemin **pondéré** : le BFS ne compte que le nombre
  d'arêtes, pas les poids.
