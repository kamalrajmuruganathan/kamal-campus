---
id: 1nsi-traitement-de-donnees-en-tables
titre: "Traitement de données en tables"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Types construits (listes, dictionnaires)
  - Boucles et fonctions en Python
statut: brouillon
relu_par: null
---

# Traitement de données en tables

> Une grande partie des données du monde réel se présente sous forme de
> **tableaux** : un tableur, un carnet d'adresses, un catalogue. En NSI, on les
> manipule sous forme de **tables** : une liste d'enregistrements, chacun étant un
> **dictionnaire**.

---

# 1. Qu'est-ce qu'une table ?

Une **table** est un ensemble de **lignes** (les **enregistrements**) partageant
les mêmes **colonnes** (les **descripteurs** ou **attributs**).

| nom | age | ville |
|---|---|---|
| Diallo | 16 | Lyon |
| Nguyen | 17 | Paris |

En Python, on représente une table par une **liste de dictionnaires**. Chaque
dictionnaire est une ligne ; les **clés sont les descripteurs**.

```python
table = [
    {"nom": "Diallo", "age": 16, "ville": "Lyon"},
    {"nom": "Nguyen", "age": 17, "ville": "Paris"},
]
```

**Vocabulaire :** un descripteur (colonne) doit avoir un **nom unique** dans la
table.

---

# 2. Le format CSV

Les données en tables sont souvent stockées dans un fichier **CSV** (*Comma
Separated Values*). C'est un fichier **texte** où :

- chaque **ligne** est un enregistrement,
- les **champs** sont séparés par un **séparateur** (souvent la virgule `,` ou
  le point-virgule `;`),
- la **première ligne** contient généralement les **noms des colonnes** (l'en-tête).

```
nom,age,ville
Diallo,16,Lyon
Nguyen,17,Paris
```

Le CSV est **universel** (lisible par n'importe quel tableur ou langage) et ne
contient **aucune mise en forme**, juste les données.

## Importer un CSV en Python

Le module `csv` avec `DictReader` construit directement une liste de
dictionnaires :

```python
import csv
with open("eleves.csv", encoding="utf-8") as f:
    table = list(csv.DictReader(f))
```

**Attention :** toutes les valeurs lues depuis un CSV sont des **chaînes de
caractères**. Pour calculer sur l'âge, il faut convertir avec `int(...)`.

---

# 3. Rechercher (sélectionner) des lignes

On **filtre** une table pour ne garder que les lignes vérifiant une condition.
C'est une simple boucle, ou une compréhension de liste :

```python
majeurs = [ligne for ligne in table if int(ligne["age"]) >= 18]
lyonnais = [ligne for ligne in table if ligne["ville"] == "Lyon"]
```

---

# 4. Trier une table

On **trie** une table selon un descripteur avec `sorted` et une **clé de tri**.

```python
# trier par âge croissant
par_age = sorted(table, key=lambda ligne: int(ligne["age"]))

# trier par nom (ordre alphabétique)
par_nom = sorted(table, key=lambda ligne: ligne["nom"])

# trier par âge décroissant
par_age_desc = sorted(table, key=lambda ligne: int(ligne["age"]), reverse=True)
```

La fonction `lambda ligne: ...` indique **sur quel descripteur** comparer les
lignes. `sorted` renvoie une **nouvelle** liste triée sans modifier la table
d'origine.

---

# 5. Fusionner deux tables

On peut **fusionner** deux tables qui partagent un descripteur commun (une
information présente des deux côtés). Par exemple, une table `eleves` (nom,
classe) et une table `classes` (classe, salle) : on relie chaque élève à sa salle
en comparant le descripteur `classe`.

Concrètement, pour chaque ligne de la première table, on cherche la ligne
correspondante dans la seconde et on combine leurs champs dans un nouveau
dictionnaire.

---

# Ce qu'il faut retenir

- Une **table** = liste de **dictionnaires** ; les clés sont les **descripteurs**
  (colonnes), les dictionnaires sont les **enregistrements** (lignes).
- Un **descripteur** a un **nom unique**.
- Le **CSV** est un fichier texte : lignes = enregistrements, champs séparés par
  un séparateur, souvent un en-tête en première ligne.
- Les valeurs lues d'un CSV sont des **chaînes** : convertir avec `int`/`float`
  avant de calculer.
- On **sélectionne** avec une condition, on **trie** avec `sorted(..., key=...)`.
- Trier ou filtrer crée une **nouvelle** table sans modifier l'originale.

# Les erreurs à éviter

- Oublier de **convertir** les valeurs CSV : `"9" > "18"` est **vrai** en
  comparaison de chaînes (comparaison lettre à lettre) alors que $9 < 18$.
- Confondre **ligne** (enregistrement) et **colonne** (descripteur).
- Utiliser deux descripteurs de même nom dans une table.
- Croire que `sorted` modifie la table : il en renvoie une **copie** triée.
