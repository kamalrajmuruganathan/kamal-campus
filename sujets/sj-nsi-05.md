---
id: sj-nsi-05
titre: "Bac NSI — Algorithmes de tri et complexité"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. On attachera une importance particulière à la justification des complexités.

---

## Exercice 1 — Tri fusion (11 points)

Le **tri fusion** est un algorithme de tri fondé sur le principe « diviser pour régner » : on découpe la liste en deux moitiés, on trie récursivement chacune, puis on fusionne les deux moitiés triées.

**Question 1.1 (4 points).** On dispose de deux listes déjà triées par ordre croissant. Compléter la fonction `fusion(gauche, droite)` qui renvoie une nouvelle liste triée contenant tous les éléments des deux listes. On parcourt les deux listes en parallèle à l'aide de deux indices.

```python
def fusion(gauche, droite):
    resultat = []
    i, j = 0, 0
    while i < len(gauche) and j < len(droite):
        if gauche[i] <= droite[j]:
            # À compléter
            ...
        else:
            # À compléter
            ...
    resultat.extend(gauche[i:])
    resultat.extend(droite[j:])
    return resultat
```

**Question 1.2 (1 point).** À quoi servent les deux instructions `resultat.extend(...)` placées après la boucle `while` ?

**Question 1.3 (3 points).** Compléter la fonction récursive `tri_fusion(liste)` qui trie la liste par le procédé décrit ci-dessus. On rappelle que `liste[:milieu]` et `liste[milieu:]` renvoient les deux moitiés.

```python
def tri_fusion(liste):
    if len(liste) <= 1:
        return liste
    milieu = len(liste) // 2
    # À compléter
    ...
```

**Question 1.4 (1 point).** Quel est le **cas de base** de cette fonction récursive ? Pourquoi une liste de longueur `0` ou `1` est-elle déjà triée ?

**Question 1.5 (2 points).** On admet que la complexité du tri fusion est en O(n log n) pour une liste de `n` éléments, alors que le tri par insertion est en O(n²) dans le pire cas. Pour une liste d'un million d'éléments, expliquer en quelques lignes pourquoi cette différence est considérable en pratique.

---

## Exercice 2 — Tri par insertion et invariant (9 points)

Le **tri par insertion** parcourt la liste de gauche à droite et insère chaque élément à sa place parmi les éléments déjà triés qui le précèdent.

```python
def tri_insertion(liste):
    for i in range(1, len(liste)):
        cle = liste[i]
        j = i - 1
        while j >= 0 and liste[j] > cle:
            liste[j + 1] = liste[j]
            j -= 1
        liste[j + 1] = cle
    return liste
```

**Question 2.1 (2 points).** On applique `tri_insertion` à la liste `[5, 2, 8, 1, 9]`. Donner l'état de la liste après chaque tour complet de la boucle `for` (soit après `i = 1`, `i = 2`, `i = 3`, `i = 4`).

**Question 2.2 (2 points).** Expliquer le rôle de la boucle `while` interne. Pourquoi la condition teste-t-elle à la fois `j >= 0` et `liste[j] > cle` ?

**Question 2.3 (2 points).** Un **invariant de boucle** est une propriété vraie à chaque tour de boucle. Proposer un invariant pour la boucle `for` de ce tri, portant sur la portion `liste[0..i-1]`.

**Question 2.4 (3 points).** Décrire un cas où le tri par insertion est particulièrement **rapide** (complexité linéaire) et un cas où il est le plus **lent** (complexité quadratique). Justifier à l'aide du nombre de décalages effectués par la boucle interne.

---

## Corrigé

### Exercice 1

**1.1.** À chaque tour, on ajoute le plus petit des deux éléments courants et on avance l'indice correspondant :

```python
def fusion(gauche, droite):
    resultat = []
    i, j = 0, 0
    while i < len(gauche) and j < len(droite):
        if gauche[i] <= droite[j]:
            resultat.append(gauche[i])
            i += 1
        else:
            resultat.append(droite[j])
            j += 1
    resultat.extend(gauche[i:])
    resultat.extend(droite[j:])
    return resultat
```

**1.2.** Lorsque la boucle `while` s'arrête, l'une des deux listes a été entièrement parcourue mais l'autre contient peut-être encore des éléments (les plus grands). Les deux `extend` recopient ces éléments restants ; comme une seule des deux tranches est non vide, cela complète correctement la fusion.

**1.3.**
```python
def tri_fusion(liste):
    if len(liste) <= 1:
        return liste
    milieu = len(liste) // 2
    gauche = tri_fusion(liste[:milieu])
    droite = tri_fusion(liste[milieu:])
    return fusion(gauche, droite)
```

Exemple : `tri_fusion([5, 2, 8, 1, 9, 3, 7, 4])` renvoie `[1, 2, 3, 4, 5, 7, 8, 9]`.

**1.4.** Le cas de base est `len(liste) <= 1`. Une liste vide ne contient aucun élément à comparer, et une liste d'un seul élément n'a rien à réordonner : elles sont donc déjà triées, ce qui arrête la récursion.

**1.5.** Pour `n = 10⁶`, on a `n² = 10¹²` opérations contre `n log₂ n ≈ 10⁶ × 20 = 2 × 10⁷`. Le tri fusion effectue environ **cinquante mille fois moins** d'opérations. Là où le tri fusion s'exécute en une fraction de seconde, un tri quadratique demanderait un temps de calcul totalement rédhibitoire.

### Exercice 2

**2.1.** États successifs de la liste :

| après `i =` | liste |
|-------------|-------|
| 1 | `[2, 5, 8, 1, 9]` |
| 2 | `[2, 5, 8, 1, 9]` |
| 3 | `[1, 2, 5, 8, 9]` |
| 4 | `[1, 2, 5, 8, 9]` |

**2.2.** La boucle `while` décale vers la droite tous les éléments déjà triés qui sont strictement plus grands que la clé, pour libérer la place où l'insérer. La condition `j >= 0` empêche de sortir du tableau par la gauche ; la condition `liste[j] > cle` arrête le décalage dès qu'on rencontre un élément inférieur ou égal à la clé, c'est-à-dire la bonne position d'insertion. Les deux tests sont nécessaires : sans `j >= 0`, on accéderait à un indice négatif hors zone triée.

**2.3.** Invariant proposé : « au début du tour d'indice `i`, la portion `liste[0..i-1]` contient les `i` premiers éléments d'origine, rangés par ordre croissant ». Au premier tour (`i = 1`) la portion `liste[0..0]` d'un seul élément est bien triée, et l'invariant est maintenu à chaque insertion ; à la fin (`i = n`), toute la liste est triée.

**2.4.** Si la liste est **déjà triée**, la condition `liste[j] > cle` est fausse dès le premier test : la boucle interne ne fait aucun décalage, et le tri est en O(n) (linéaire). Si la liste est **triée à l'envers** (décroissante), chaque nouvelle clé est plus petite que tous les éléments précédents : la boucle interne les décale tous, soit `1 + 2 + … + (n-1) ≈ n²/2` décalages, d'où une complexité quadratique O(n²).
