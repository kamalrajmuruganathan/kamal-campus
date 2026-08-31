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
