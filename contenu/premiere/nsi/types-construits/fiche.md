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

Une liste peut contenir des listes : on obtient un **tableau à deux dimensions**.

```python
m = [[1, 2, 3], [4, 5, 6]]
m[1][2]   # 6  (2e ligne, 3e colonne)
```

---

# 3. Les dictionnaires (p-uplets nommés)

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
