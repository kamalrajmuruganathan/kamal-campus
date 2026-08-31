---
id: sj-nsi-01
titre: "Bac NSI — Récursivité et file de priorité"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. La qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies. L'usage de la calculatrice n'est pas autorisé.

---

## Exercice 1 — Récursivité : les tours de Hanoï (10 points)

Le jeu des **tours de Hanoï** se compose de trois piquets nommés `'A'`, `'B'` et `'C'` et de `n` disques de diamètres tous différents. Au départ, les `n` disques sont empilés sur le piquet `'A'`, du plus grand (en bas) au plus petit (en haut). Le but est de déplacer toute la pile sur le piquet `'C'` en respectant deux règles :

- on ne déplace qu'un seul disque à la fois (celui du sommet d'un piquet) ;
- on ne peut jamais poser un disque sur un disque plus petit.

**Question 1.1 (2 points).** On note `m(n)` le nombre minimal de déplacements nécessaires pour résoudre le problème à `n` disques. On admet que `m(1) = 1` et que, pour `n > 1`, `m(n) = 2 × m(n-1) + 1`. Écrire une fonction récursive `nb_mouvements(n)` qui renvoie `m(n)`.

```python
def nb_mouvements(n):
    # À compléter
    ...
```

**Question 1.2 (1 point).** Donner la valeur de `nb_mouvements(5)`. Justifier brièvement pourquoi le nombre de déplacements double (à un près) chaque fois qu'on ajoute un disque.

**Question 1.3 (4 points).** On souhaite obtenir la liste des déplacements effectués. Un déplacement est représenté par un couple `(depart, arrivee)`. Compléter la fonction récursive `hanoi` ci-dessous : elle déplace `n` disques du piquet `depart` vers le piquet `arrivee` en utilisant `inter` comme piquet intermédiaire, et ajoute chaque déplacement à la liste `mouvements`.

```python
def hanoi(n, depart, inter, arrivee, mouvements):
    if n == 1:
        mouvements.append((depart, arrivee))
    else:
        # À compléter : les trois étapes de la stratégie récursive
        ...
    return mouvements
```

**Question 1.4 (1 point).** Donner, dans l'ordre, la liste des déplacements renvoyée par l'appel `hanoi(2, 'A', 'B', 'C', [])`.

**Question 1.5 (2 points).** Expliquer ce qu'est un **cas de base** dans une fonction récursive et pourquoi il est indispensable. Identifier le cas de base de la fonction `hanoi`.

---

## Exercice 2 — Programmation objet : une file de priorité (10 points)

Un ordonnanceur de tâches doit toujours traiter en premier la tâche la plus urgente. On modélise cela par une **file de priorité** : chaque élément est associé à une *priorité* (un entier), et l'on extrait toujours l'élément de plus petite priorité (1 = plus urgent).

On implémente cette structure par une classe `FilePriorite` dont les éléments sont stockés dans une liste de couples `(priorite, valeur)`.

```python
class FilePriorite:
    def __init__(self):
        self.elements = []

    def est_vide(self):
        return self.elements == []

    def inserer(self, priorite, valeur):
        # Question 2.2
        ...

    def extraire_min(self):
        # Question 2.3
        ...
```

**Question 2.1 (2 points).** Expliquer la différence entre une file de priorité et une file classique (FIFO). Donner un exemple concret d'utilisation d'une file de priorité en informatique.

**Question 2.2 (2 points).** Compléter la méthode `inserer(self, priorite, valeur)` qui ajoute le couple `(priorite, valeur)` à la fin de la liste `self.elements`.

**Question 2.3 (4 points).** Compléter la méthode `extraire_min(self)` qui recherche le couple de plus petite priorité, le retire de la liste et le renvoie. On suppose la file non vide.

**Question 2.4 (2 points).** On exécute le code suivant :

```python
f = FilePriorite()
f.inserer(3, 'sauvegarde')
f.inserer(1, 'alerte')
f.inserer(2, 'rapport')
print(f.extraire_min())
print(f.extraire_min())
```

Donner l'affichage produit. Quelle est la complexité (en fonction du nombre `k` d'éléments) d'une extraction du minimum avec cette implémentation par liste non triée ?

---

## Corrigé

### Exercice 1

**1.1.** Traduction directe de la relation de récurrence, avec le cas de base `n = 1` :

```python
def nb_mouvements(n):
    if n == 1:
        return 1
    return 2 * nb_mouvements(n - 1) + 1
```

**1.2.** `nb_mouvements(5) = 31`. Comme `m(n) = 2·m(n-1) + 1`, chaque disque supplémentaire impose de déplacer toute la sous-pile précédente deux fois (avant puis après le grand disque), d'où un nombre de déplacements qui double, augmenté de 1 pour le grand disque. On a d'ailleurs `m(n) = 2ⁿ − 1`.

**1.3.** Stratégie récursive : déplacer les `n-1` disques du sommet vers le piquet intermédiaire, déplacer le grand disque vers l'arrivée, puis ramener les `n-1` disques sur l'arrivée.

```python
def hanoi(n, depart, inter, arrivee, mouvements):
    if n == 1:
        mouvements.append((depart, arrivee))
    else:
        hanoi(n - 1, depart, arrivee, inter, mouvements)
        mouvements.append((depart, arrivee))
        hanoi(n - 1, inter, depart, arrivee, mouvements)
    return mouvements
```

**1.4.** `hanoi(2, 'A', 'B', 'C', [])` renvoie `[('A', 'B'), ('A', 'C'), ('B', 'C')]` : on pose le petit disque en B, on déplace le grand en C, on ramène le petit en C.

**1.5.** Le **cas de base** est la situation la plus simple, résolue sans nouvel appel récursif ; il garantit que la suite des appels s'arrête (sinon la récursion serait infinie et provoquerait un débordement de pile). Ici, le cas de base est `n == 1` : un unique disque est déplacé directement de `depart` vers `arrivee`.

### Exercice 2

**2.1.** Dans une file classique (FIFO), l'ordre de sortie est l'ordre d'arrivée : premier entré, premier sorti. Dans une file de priorité, l'ordre de sortie dépend uniquement de la priorité associée à chaque élément, indépendamment de l'ordre d'insertion. Exemples d'utilisation : ordonnancement des processus d'un système d'exploitation, algorithme de Dijkstra (choix du sommet le plus proche), gestion des urgences dans un service hospitalier.

**2.2.**
```python
    def inserer(self, priorite, valeur):
        self.elements.append((priorite, valeur))
```

**2.3.** On parcourt la liste pour trouver l'indice du couple de plus petite priorité, puis on le retire avec `pop` :

```python
    def extraire_min(self):
        indice_min = 0
        for i in range(1, len(self.elements)):
            if self.elements[i][0] < self.elements[indice_min][0]:
                indice_min = i
        return self.elements.pop(indice_min)
```

**2.4.** L'affichage est :

```
(1, 'alerte')
(2, 'rapport')
```

La recherche du minimum parcourt tous les éléments : la complexité d'une extraction est **linéaire**, en O(k) où `k` est le nombre d'éléments présents dans la file. (Une implémentation par tas binaire permettrait de descendre à O(log k).)
