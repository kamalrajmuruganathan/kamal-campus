---
id: bac-nsi-terminale
titre: "Bac blanc NSI — Terminale (entraînement)"
examen: "Bac général — spécialité NSI (entraînement)"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI (entraînement)

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. La qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.

---

## Exercice 1 — Structures de données et algorithmique (10 points)

On souhaite gérer une **file d'attente** de tickets à l'aide d'une implémentation reposant sur deux piles. On rappelle qu'une file suit le principe **FIFO** (premier arrivé, premier sorti) et qu'une pile suit le principe **LIFO** (dernier arrivé, premier sorti).

On dispose d'une classe `Pile` déjà implémentée offrant les méthodes suivantes :

```python
class Pile:
    def __init__(self):
        self.elements = []

    def est_vide(self):
        return self.elements == []

    def empiler(self, valeur):
        self.elements.append(valeur)

    def depiler(self):
        return self.elements.pop()

    def sommet(self):
        return self.elements[-1]
```

**Question 1.1 (2 points).** Expliquer en quelques lignes la différence entre une structure de type pile (LIFO) et une structure de type file (FIFO). Donner pour chacune un exemple concret d'utilisation en informatique.

**Question 1.2 (3 points).** On implémente une file à l'aide de deux piles `entree` et `sortie`. Compléter la méthode `enfiler` ci-dessous, qui ajoute un élément dans la file.

```python
class File:
    def __init__(self):
        self.entree = Pile()
        self.sortie = Pile()

    def enfiler(self, valeur):
        # À compléter
        ...
```

**Question 1.3 (3 points).** Écrire la méthode `defiler(self)` qui retire et renvoie l'élément le plus ancien de la file. On transfèrera les éléments de la pile `entree` vers la pile `sortie` uniquement lorsque `sortie` est vide.

**Question 1.4 (2 points).** On enfile successivement les valeurs 5, 8, 3 puis on effectue deux `defiler`. Donner les deux valeurs renvoyées, dans l'ordre, en justifiant.

---

## Exercice 2 — Bases de données relationnelles (10 points)

Une médiathèque gère ses emprunts à l'aide d'une base de données relationnelle comportant les trois relations suivantes (les clés primaires sont soulignées par le mot-clé `PK`, les clés étrangères par `FK`) :

```
Adherent(id_adherent PK, nom, prenom, ville)
Livre(id_livre PK, titre, auteur, annee)
Emprunt(id_emprunt PK, id_adherent FK, id_livre FK, date_emprunt, date_retour)
```

Dans la table `Emprunt`, la colonne `date_retour` vaut `NULL` tant que le livre n'a pas été rendu.

**Question 2.1 (2 points).** Expliquer le rôle d'une clé primaire et celui d'une clé étrangère. Pourquoi `id_adherent` figure-t-il dans la table `Emprunt` ?

**Question 2.2 (2 points).** Écrire une requête SQL qui renvoie le titre et l'auteur de tous les livres parus après l'an 2000, triés par année croissante.

**Question 2.3 (3 points).** Écrire une requête SQL qui affiche le nom et le prénom des adhérents ayant actuellement au moins un livre non rendu (c'est-à-dire dont `date_retour` est `NULL`).

**Question 2.4 (3 points).** Écrire une requête SQL qui renvoie, pour chaque ville, le nombre d'adhérents. Le résultat comportera deux colonnes : `ville` et `nb_adherents`.

---

## Corrigé

### Exercice 1

**1.1.** Une **pile** est de type LIFO : le dernier élément empilé est le premier retiré (exemple : gestion de la pile d'appels de fonctions, mécanisme « annuler/undo » d'un éditeur). Une **file** est de type FIFO : le premier élément entré est le premier sorti (exemple : file d'impression d'une imprimante, gestion des tâches d'un serveur, parcours en largeur d'un graphe).

**1.2.** Pour enfiler, il suffit d'empiler dans la pile d'entrée :

```python
    def enfiler(self, valeur):
        self.entree.empiler(valeur)
```

**1.3.** On ne transvase que si la pile de sortie est vide, ce qui inverse l'ordre et rétablit le FIFO :

```python
    def defiler(self):
        if self.sortie.est_vide():
            while not self.entree.est_vide():
                self.sortie.empiler(self.entree.depiler())
        return self.sortie.depiler()
```

**1.4.** On enfile 5, 8, 3 : la pile `entree` contient (du fond au sommet) [5, 8, 3]. Au premier `defiler`, `sortie` est vide : on transvase, `sortie` devient [3, 8, 5] (5 au sommet). On dépile donc **5**. Au second `defiler`, `sortie` n'est pas vide, on dépile directement **8**. Les valeurs renvoyées sont donc **5** puis **8**, ce qui respecte bien l'ordre FIFO.

### Exercice 2

**2.1.** Une **clé primaire** identifie de manière unique chaque enregistrement d'une table (pas de doublon, pas de valeur `NULL`). Une **clé étrangère** est un attribut qui référence la clé primaire d'une autre table, garantissant l'intégrité référentielle. `id_adherent` figure dans `Emprunt` comme clé étrangère afin de relier chaque emprunt à l'adhérent concerné.

**2.2.**
```sql
SELECT titre, auteur
FROM Livre
WHERE annee > 2000
ORDER BY annee ASC;
```

**2.3.**
```sql
SELECT DISTINCT Adherent.nom, Adherent.prenom
FROM Adherent
JOIN Emprunt ON Adherent.id_adherent = Emprunt.id_adherent
WHERE Emprunt.date_retour IS NULL;
```

**2.4.**
```sql
SELECT ville, COUNT(*) AS nb_adherents
FROM Adherent
GROUP BY ville;
```
