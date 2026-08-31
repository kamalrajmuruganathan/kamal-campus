---
id: sj-nsi-02
titre: "Bac NSI — Arbres binaires de recherche et bases de données"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants. La qualité de la rédaction et la précision des justifications seront prises en compte dans l'appréciation des copies.

---

## Exercice 1 — Arbres binaires de recherche (10 points)

Un **arbre binaire de recherche** (ABR) est un arbre binaire d'entiers tel que, pour chaque nœud, toutes les valeurs du sous-arbre gauche sont strictement inférieures à la valeur du nœud, et toutes les valeurs du sous-arbre droit lui sont strictement supérieures.

On représente un nœud par la classe suivante :

```python
class Noeud:
    def __init__(self, valeur):
        self.valeur = valeur
        self.gauche = None
        self.droit = None
```

Un arbre vide est représenté par `None`.

**Question 1.1 (2 points).** On insère successivement les valeurs `8, 3, 10, 1, 6, 14` dans un ABR initialement vide, en respectant la propriété d'ABR. Dessiner l'arbre obtenu.

**Question 1.2 (3 points).** Compléter la fonction récursive `inserer_abr(racine, valeur)` qui insère `valeur` dans l'ABR de racine `racine` et renvoie la racine de l'arbre modifié. Si la valeur est déjà présente, l'arbre n'est pas modifié.

```python
def inserer_abr(racine, valeur):
    if racine is None:
        return Noeud(valeur)
    if valeur < racine.valeur:
        # À compléter
        ...
    elif valeur > racine.valeur:
        # À compléter
        ...
    return racine
```

**Question 1.3 (3 points).** Écrire une fonction récursive `parcours_infixe(racine)` qui renvoie la **liste** des valeurs de l'arbre lors d'un parcours infixe (gauche, racine, droit). Quelle propriété remarquable possède cette liste pour un ABR ?

**Question 1.4 (2 points).** Écrire une fonction récursive `recherche(racine, valeur)` qui renvoie `True` si `valeur` figure dans l'ABR, `False` sinon, en exploitant la propriété d'ABR pour ne descendre que dans un seul sous-arbre à chaque étape.

---

## Exercice 2 — Bases de données relationnelles (10 points)

Un lycée gère les notes de ses élèves à l'aide d'une base de données comportant trois relations (les clés primaires sont notées `PK`, les clés étrangères `FK`) :

```
Eleve(id_eleve PK, nom, classe)
Matiere(id_matiere PK, intitule, coefficient)
Note(id_note PK, id_eleve FK, id_matiere FK, valeur)
```

**Question 2.1 (2 points).** Expliquer pourquoi la note d'un élève dans une matière est stockée dans la table `Note` plutôt que dans la table `Eleve`. Quel principe de conception cela illustre-t-il ?

**Question 2.2 (3 points).** Écrire une requête SQL qui affiche, pour chaque élève, son nom et sa **moyenne** (moyenne arithmétique de ses notes), triés par moyenne décroissante. On utilisera la fonction d'agrégation `AVG`.

**Question 2.3 (3 points).** Écrire une requête SQL qui affiche le nom des élèves ayant obtenu une note **supérieure ou égale à 12 en NSI**, ainsi que cette note, triés par note décroissante. La requête devra joindre les trois tables.

**Question 2.4 (2 points).** Écrire une requête SQL qui insère une nouvelle note : l'élève d'identifiant `2` a obtenu `11.0` dans la matière d'identifiant `3`. On choisira `7` comme identifiant de note.

---

## Corrigé

### Exercice 1

**1.1.** Insertions successives :

```
        8
       / \
      3   10
     / \    \
    1   6    14
```

`8` devient la racine ; `3 < 8` va à gauche ; `10 > 8` à droite ; `1 < 3` à gauche de 3 ; `6 > 3` à droite de 3 ; `14 > 10` à droite de 10.

**1.2.**
```python
def inserer_abr(racine, valeur):
    if racine is None:
        return Noeud(valeur)
    if valeur < racine.valeur:
        racine.gauche = inserer_abr(racine.gauche, valeur)
    elif valeur > racine.valeur:
        racine.droit = inserer_abr(racine.droit, valeur)
    return racine
```

**1.3.**
```python
def parcours_infixe(racine):
    if racine is None:
        return []
    return parcours_infixe(racine.gauche) + [racine.valeur] + parcours_infixe(racine.droit)
```

Pour un ABR, le parcours infixe fournit la liste des valeurs **triée par ordre croissant**. Sur l'arbre de la question 1.1, on obtient `[1, 3, 6, 8, 10, 14]`.

**1.4.**
```python
def recherche(racine, valeur):
    if racine is None:
        return False
    if racine.valeur == valeur:
        return True
    if valeur < racine.valeur:
        return recherche(racine.gauche, valeur)
    return recherche(racine.droit, valeur)
```

À chaque étape, la comparaison avec la valeur du nœud permet d'éliminer un sous-arbre entier : la recherche est en O(h), où `h` est la hauteur de l'arbre (O(log n) pour un arbre équilibré).

### Exercice 2

**2.1.** Un élève passe plusieurs notes, dans plusieurs matières : le nombre de notes n'est pas fixé à l'avance. Les stocker dans la table `Eleve` obligerait à des colonnes en nombre variable ou à répéter les informations de l'élève. On isole donc les notes dans une table dédiée, reliée à `Eleve` par une clé étrangère. Cela illustre la **normalisation** : éviter la redondance et représenter une relation « un à plusieurs » par une table séparée.

**2.2.**
```sql
SELECT Eleve.nom, AVG(Note.valeur) AS moyenne
FROM Eleve
JOIN Note ON Eleve.id_eleve = Note.id_eleve
GROUP BY Eleve.id_eleve
ORDER BY moyenne DESC;
```

**2.3.**
```sql
SELECT Eleve.nom, Note.valeur
FROM Eleve
JOIN Note ON Eleve.id_eleve = Note.id_eleve
JOIN Matiere ON Note.id_matiere = Matiere.id_matiere
WHERE Matiere.intitule = 'NSI' AND Note.valeur >= 12
ORDER BY Note.valeur DESC;
```

**2.4.**
```sql
INSERT INTO Note (id_note, id_eleve, id_matiere, valeur)
VALUES (7, 2, 3, 11.0);
```
