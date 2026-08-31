---
id: tale-nsi-bases-de-donnees-et-sql
titre: "Bases de données et SQL"
voie: generale
niveau: terminale
parcours: nsi
matiere: nsi
programme: "Terminale — spécialité NSI (programme officiel)"
duree_lecture_min: 15
prerequis:
  - Notion de données structurées (tables, dictionnaires) de Première
  - Manipulation de collections en Python
statut: brouillon
relu_par: null
---

# Bases de données et SQL

> Dès qu'un système gère beaucoup de données partagées par plusieurs programmes et
> utilisateurs, on ne les range plus dans des fichiers isolés mais dans une **base de
> données relationnelle**, pilotée par un **SGBD** (système de gestion de base de
> données). Le modèle relationnel organise tout en **tables**, et on interroge ces
> tables avec le langage **SQL**.

---

## 1. Le modèle relationnel

Une base **relationnelle** est un ensemble de **relations**, présentées comme des
**tables** :

- une **table** décrit une catégorie d'objets (ex. `eleve`, `livre`, `emprunt`) ;
- chaque **ligne** (ou **enregistrement**) est un objet particulier ;
- chaque **colonne** (ou **attribut**) est une caractéristique, avec un **domaine**
  (type de valeurs autorisées : entier, texte, date…).

Le **schéma** d'une table donne son nom et la liste de ses attributs avec leur type.
Exemple : `eleve(id ENTIER, nom TEXTE, classe TEXTE, ddn DATE)`.

---

## 2. Clés primaires et clés étrangères

Pour éviter les doublons et relier les tables, on utilise des **clés** :

- une **clé primaire** identifie de façon **unique** chaque ligne d'une table. Deux
  lignes ne peuvent pas avoir la même valeur de clé primaire, et cette valeur n'est
  jamais absente (non nulle). Exemple : `id` dans `eleve`.
- une **clé étrangère** est un attribut d'une table qui **référence** la clé primaire
  d'une autre table. Elle matérialise un lien. Exemple : dans `emprunt`, l'attribut
  `id_eleve` est une clé étrangère qui pointe vers `eleve.id`.

Une clé étrangère impose une **contrainte d'intégrité référentielle** : on ne peut pas
référencer un élève qui n'existe pas. C'est ce qui garantit la **cohérence** des
données réparties sur plusieurs tables.

---

## 3. Interroger : SELECT

Le cœur de SQL est la requête `SELECT`, qui **lit** des données sans les modifier.

```sql
SELECT nom, classe
FROM eleve
WHERE classe = 'TG1'
ORDER BY nom;
```

- `SELECT` : les colonnes voulues (`*` = toutes) ;
- `FROM` : la table source ;
- `WHERE` : une **condition** de filtrage des lignes ;
- `ORDER BY` : le tri du résultat (`ASC` croissant par défaut, `DESC` décroissant).

Les conditions combinent des comparaisons (`=`, `<`, `>`, `<>`) avec `AND`, `OR`, `NOT`.

---

## 4. Agréger et joindre

**Fonctions d'agrégation** : elles calculent une valeur sur un groupe de lignes —
`COUNT` (compter), `AVG` (moyenne), `SUM` (somme), `MIN`, `MAX`. Souvent avec
`GROUP BY` pour calculer par groupe.

```sql
SELECT classe, COUNT(*) AS effectif
FROM eleve
GROUP BY classe;
```

**Jointure** : pour croiser deux tables reliées par une clé, on les **joint** sur
l'égalité clé primaire = clé étrangère.

```sql
SELECT eleve.nom, emprunt.date_emprunt
FROM eleve
JOIN emprunt ON eleve.id = emprunt.id_eleve;
```

La jointure reconstitue l'information éclatée entre les tables sans dupliquer les
données de départ.

---

## 5. Modifier : INSERT, UPDATE, DELETE

Trois requêtes modifient le contenu (pas la lecture) :

```sql
INSERT INTO eleve (id, nom, classe) VALUES (42, 'Diallo', 'TG1');
UPDATE eleve SET classe = 'TG2' WHERE id = 42;
DELETE FROM eleve WHERE id = 42;
```

- `INSERT INTO` ajoute une ligne ;
- `UPDATE ... SET ... WHERE` modifie des lignes existantes ;
- `DELETE FROM ... WHERE` supprime des lignes.

**Danger** : un `UPDATE` ou `DELETE` **sans `WHERE`** s'applique à **toutes** les
lignes. C'est l'erreur la plus coûteuse en pratique.

---

## Ce qu'il faut retenir

- Une base relationnelle organise les données en **tables** (lignes = enregistrements,
  colonnes = attributs avec un domaine).
- La **clé primaire** identifie une ligne de façon unique ; la **clé étrangère**
  référence la clé primaire d'une autre table et assure l'**intégrité référentielle**.
- `SELECT ... FROM ... WHERE ... ORDER BY` interroge sans modifier.
- `GROUP BY` + agrégats (`COUNT`, `AVG`…) résument par groupe ; `JOIN` croise des
  tables reliées par une clé.
- `INSERT`, `UPDATE`, `DELETE` modifient les données.

## Les erreurs à éviter

- Oublier le `WHERE` dans un `UPDATE`/`DELETE` : toute la table est affectée.
- Croire qu'une clé primaire peut se répéter ou être vide : elle est **unique** et
  **non nulle**.
- Confondre `WHERE` (filtre des lignes avant regroupement) et `GROUP BY` (regroupe).
- Penser qu'une jointure duplique physiquement les données : elle les **relie** le
  temps de la requête, grâce aux clés.
