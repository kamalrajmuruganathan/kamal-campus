---
id: sj-nsi-06
titre: "Bac NSI — Programmation dynamique et algorithmes gloutons"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants portant sur les stratégies algorithmiques.

---

## Exercice 1 — Rendu de monnaie : glouton et programmation dynamique (12 points)

On souhaite rendre une somme d'argent à l'aide d'un ensemble de pièces, en utilisant le **moins de pièces possible**. Un *système de pièces* est représenté par une liste de valeurs.

### Partie A — Algorithme glouton

L'**algorithme glouton** consiste à choisir à chaque étape la plus grande pièce inférieure ou égale au montant restant.

```python
def rendu_glouton(montant, systeme):
    # systeme est trié par ordre décroissant
    pieces = []
    for piece in systeme:
        while montant >= piece:
            pieces.append(piece)
            montant -= piece
    return pieces
```

**Question 1.1 (2 points).** Dérouler l'algorithme pour `rendu_glouton(67, [50, 20, 10, 5, 2, 1])`. Donner la liste des pièces renvoyée et leur nombre.

**Question 1.2 (2 points).** Expliquer pourquoi il est indispensable que la liste `systeme` soit triée par ordre **décroissant** pour que l'algorithme glouton fonctionne comme prévu.

### Partie B — Un système où le glouton échoue

On considère à présent le système de pièces `[4, 3, 1]` et l'on veut rendre `6`.

**Question 1.3 (2 points).** Donner le résultat de `rendu_glouton(6, [4, 3, 1])`. Montrer qu'il existe une solution utilisant **moins** de pièces. L'algorithme glouton est-il optimal pour ce système ?

**Question 1.4 (4 points).** On calcule le nombre minimal de pièces par **programmation dynamique**. On construit un tableau `tableau` où `tableau[m]` est le nombre minimal de pièces pour rendre le montant `m`. Compléter la fonction :

```python
def rendu_optimal(montant, systeme):
    INF = float('inf')
    tableau = [0] + [INF] * montant   # tableau[0] = 0
    for m in range(1, montant + 1):
        for piece in systeme:
            if piece <= m and tableau[m - piece] + 1 < tableau[m]:
                # À compléter : mise à jour de tableau[m]
                ...
    return tableau[montant]
```

**Question 1.5 (2 points).** Donner la valeur de `rendu_optimal(6, [1, 3, 4])`. Expliquer en quoi la programmation dynamique évite de recalculer plusieurs fois les mêmes sous-problèmes.

---

## Exercice 2 — Suite de Fibonacci et mémoïsation (8 points)

La suite de Fibonacci est définie par `F(0) = 0`, `F(1) = 1` et `F(n) = F(n-1) + F(n-2)` pour `n ≥ 2`.

```python
def fib_naif(n):
    if n < 2:
        return n
    return fib_naif(n - 1) + fib_naif(n - 2)
```

**Question 2.1 (2 points).** Dessiner l'arbre des appels engendrés par `fib_naif(4)`. Combien de fois `fib_naif(2)` est-il évalué ?

**Question 2.2 (2 points).** Expliquer pourquoi la version naïve devient très lente lorsque `n` grandit (on parle d'explosion du nombre d'appels).

**Question 2.3 (4 points).** Écrire une fonction `fib_memo(n, memo=None)` qui utilise un dictionnaire `memo` pour **mémoïser** les valeurs déjà calculées : avant tout calcul, on vérifie si le résultat est déjà mémorisé ; après calcul, on le range dans `memo`. Indiquer la complexité obtenue.

---

## Corrigé

### Exercice 1

**1.1.** `montant = 67` : on prend `50` (reste 17), puis `10` (reste 7), puis `5` (reste 2), puis `2` (reste 0). Résultat : `[50, 10, 5, 2]`, soit **4 pièces**.

**1.2.** L'algorithme parcourt les pièces dans l'ordre de la liste et prend le plus possible de chaque avant de passer à la suivante. Si la liste n'est pas triée par ordre décroissant, il pourrait épuiser une petite pièce avant d'avoir considéré une plus grande, et donc utiliser bien plus de pièces que nécessaire. L'ordre décroissant garantit qu'on privilégie toujours d'abord les grosses coupures.

**1.3.** `rendu_glouton(6, [4, 3, 1])` prend `4` (reste 2), puis deux fois `1` : résultat `[4, 1, 1]`, soit **3 pièces**. Or `3 + 3 = 6` donne la solution `[3, 3]`, soit **2 pièces**. L'algorithme glouton n'est donc **pas optimal** pour ce système.

**1.4.**
```python
def rendu_optimal(montant, systeme):
    INF = float('inf')
    tableau = [0] + [INF] * montant
    for m in range(1, montant + 1):
        for piece in systeme:
            if piece <= m and tableau[m - piece] + 1 < tableau[m]:
                tableau[m] = tableau[m - piece] + 1
    return tableau[montant]
```

**1.5.** `rendu_optimal(6, [1, 3, 4])` renvoie `2` (solution `3 + 3`). La programmation dynamique remplit le tableau des montants de `1` à `montant` une seule fois ; chaque `tableau[m]` réutilise directement les résultats déjà calculés pour les montants inférieurs, au lieu de relancer un calcul récursif complet à chaque fois. On échange ainsi du temps de calcul contre un peu de mémoire.

### Exercice 2

**2.1.** Arbre des appels de `fib_naif(4)` :

```
                fib(4)
              /        \
          fib(3)       fib(2)
         /     \       /    \
     fib(2)  fib(1) fib(1) fib(0)
     /   \
 fib(1) fib(0)
```

`fib_naif(2)` est évalué **deux fois**.

**2.2.** Chaque appel `fib_naif(n)` déclenche deux appels, si bien que le nombre total d'appels croît de façon quasi exponentielle (de l'ordre de `1,6ⁿ`). Les mêmes sous-problèmes sont recalculés un très grand nombre de fois, ce qui rend la fonction inutilisable dès `n` de l'ordre de quelques dizaines.

**2.3.**
```python
def fib_memo(n, memo=None):
    if memo is None:
        memo = {}
    if n < 2:
        return n
    if n in memo:
        return memo[n]
    resultat = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    memo[n] = resultat
    return resultat
```

Chaque valeur `F(k)` n'est calculée qu'une seule fois puis lue dans le dictionnaire : la complexité passe de quasi exponentielle à **linéaire**, en O(n).
