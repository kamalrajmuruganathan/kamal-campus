---
id: sj-nsi-04
titre: "Bac NSI — Réseaux, routage et base de données d'équipements"
examen: "Bac général — spécialité NSI"
niveau: terminale
matiere: nsi
statut: brouillon
relu_par: null
---

# Bac général — spécialité NSI

**Durée conseillée : 2 heures — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants portant sur les réseaux et les bases de données.

---

## Exercice 1 — Routage et plus court chemin (11 points)

Un réseau est modélisé par un **graphe pondéré** : les sommets sont des routeurs, les arêtes des liaisons, et le poids d'une arête représente un coût (par exemple la latence). On représente le graphe par un dictionnaire de dictionnaires :

```python
graphe = {
    'A': {'B': 4, 'C': 1},
    'B': {'A': 4, 'D': 1},
    'C': {'A': 1, 'B': 2, 'D': 5},
    'D': {'B': 1, 'C': 5},
}
```

Ainsi `graphe['A']['B']` vaut `4` : la liaison entre `A` et `B` a un coût de 4.

**Question 1.1 (2 points).** Donner la liste des voisins du routeur `C` et le coût de chaque liaison correspondante. Ce graphe est-il orienté ou non orienté ? Justifier à partir de la structure de données.

**Question 1.2 (3 points).** Écrire une fonction `cout_chemin(graphe, chemin)` qui reçoit une liste de sommets consécutifs et renvoie le coût total du chemin (somme des poids des liaisons empruntées). Par exemple, `cout_chemin(graphe, ['A', 'C', 'B', 'D'])` doit renvoyer `4`.

**Question 1.3 (4 points).** L'algorithme de **Dijkstra** calcule le coût minimal pour aller d'un sommet de départ vers tous les autres. Compléter la fonction ci-dessous : à chaque tour, on sélectionne le sommet non traité de plus petite distance, puis on met à jour les distances de ses voisins (*relâchement*).

```python
def dijkstra(graphe, depart):
    distances = {sommet: float('inf') for sommet in graphe}
    distances[depart] = 0
    a_traiter = list(graphe.keys())
    while a_traiter:
        u = min(a_traiter, key=lambda s: distances[s])
        a_traiter.remove(u)
        for voisin, poids in graphe[u].items():
            # À compléter : condition de relâchement et mise à jour
            ...
    return distances
```

**Question 1.4 (2 points).** Donner le dictionnaire `distances` renvoyé par `dijkstra(graphe, 'A')`. Indiquer le chemin de coût minimal de `A` à `D`.

---

## Exercice 2 — Base de données d'un parc informatique (9 points)

Un établissement recense ses équipements réseau dans la base suivante (`PK` : clé primaire, `FK` : clé étrangère) :

```
Equipement(id_eq PK, nom, type, salle)
Connexion(id_co PK, id_source FK, id_dest FK, debit)
```

Le champ `type` vaut `'switch'`, `'poste'` ou `'serveur'` ; `debit` est exprimé en Mbit/s.

**Question 2.1 (2 points).** Expliquer ce que représente une clé étrangère dans la table `Connexion`. Que garantit la contrainte d'intégrité référentielle associée ?

**Question 2.2 (2 points).** Écrire une requête SQL renvoyant le nom des équipements de type `'poste'` situés dans la salle `'S1'`, triés par nom croissant.

**Question 2.3 (3 points).** Écrire une requête SQL affichant, pour chaque connexion dont le débit est supérieur ou égal à `10000`, le nom de l'équipement source, le nom de l'équipement destination et le débit. La requête joindra deux fois la table `Equipement`.

**Question 2.4 (2 points).** Écrire une requête SQL renvoyant, pour chaque type d'équipement, le nombre d'équipements de ce type. Le résultat comportera les colonnes `type` et le décompte.

---

## Corrigé

### Exercice 1

**1.1.** Voisins de `C` : `A` (coût 1), `B` (coût 2), `D` (coût 5). Le graphe est **non orienté** car chaque liaison figure dans les deux sens avec le même poids (par exemple `graphe['A']['C'] == graphe['C']['A'] == 1`).

**1.2.**
```python
def cout_chemin(graphe, chemin):
    total = 0
    for k in range(len(chemin) - 1):
        total += graphe[chemin[k]][chemin[k + 1]]
    return total
```

Vérification : `['A','C','B','D']` → `1 (A-C) + 2 (C-B) + 1 (B-D) = 4`.

**1.3.**
```python
def dijkstra(graphe, depart):
    distances = {sommet: float('inf') for sommet in graphe}
    distances[depart] = 0
    a_traiter = list(graphe.keys())
    while a_traiter:
        u = min(a_traiter, key=lambda s: distances[s])
        a_traiter.remove(u)
        for voisin, poids in graphe[u].items():
            if distances[u] + poids < distances[voisin]:
                distances[voisin] = distances[u] + poids
    return distances
```

**1.4.** `dijkstra(graphe, 'A')` renvoie `{'A': 0, 'B': 3, 'C': 1, 'D': 4}`. Le chemin de coût minimal de `A` à `D` est `A → C → B → D`, de coût `1 + 2 + 1 = 4` (plus court que le direct `A → B → D` de coût `4 + 1 = 5`).

### Exercice 2

**2.1.** Dans `Connexion`, `id_source` et `id_dest` sont des clés étrangères référençant la clé primaire `id_eq` de la table `Equipement` : elles désignent les deux équipements reliés par la connexion. La contrainte d'**intégrité référentielle** garantit qu'on ne peut pas enregistrer une connexion vers un équipement inexistant, ni supprimer un équipement encore référencé par une connexion.

**2.2.**
```sql
SELECT nom
FROM Equipement
WHERE type = 'poste' AND salle = 'S1'
ORDER BY nom ASC;
```

**2.3.**
```sql
SELECT e1.nom, e2.nom, Connexion.debit
FROM Connexion
JOIN Equipement AS e1 ON Connexion.id_source = e1.id_eq
JOIN Equipement AS e2 ON Connexion.id_dest = e2.id_eq
WHERE Connexion.debit >= 10000;
```

**2.4.**
```sql
SELECT type, COUNT(*) AS nb_equipements
FROM Equipement
GROUP BY type;
```
