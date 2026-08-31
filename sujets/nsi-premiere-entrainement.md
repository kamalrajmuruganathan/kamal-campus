---
id: nsi-premiere-entrainement
titre: "Entraînement NSI — Première"
examen: "Première — spécialité NSI"
niveau: premiere
matiere: nsi
statut: brouillon
relu_par: null
---

# Première — spécialité NSI (entraînement)

**Durée conseillée : 1 h 30 — Barème sur 20 points.**

Le sujet comporte deux exercices indépendants.

---

## Exercice 1 — Types construits et tables de données (10 points)

Un club sportif enregistre ses adhérents dans une table de données. Chaque adhérent est représenté par un **dictionnaire** (p-uplet nommé) et l'ensemble des adhérents par une **liste** de dictionnaires :

```python
adherents = [
    {"nom": "Diallo",  "age": 15, "sport": "judo",    "cotisation": 120},
    {"nom": "Nguyen",  "age": 17, "sport": "natation", "cotisation": 150},
    {"nom": "Martin",  "age": 16, "sport": "judo",    "cotisation": 120},
    {"nom": "Lopez",   "age": 15, "sport": "escalade", "cotisation": 180},
]
```

**Question 1.1 (2 points).** Quelle instruction Python affiche le sport pratiqué par l'adhérent d'indice 1 dans la liste ? Que renvoie-t-elle ?

**Question 1.2 (2 points).** Expliquer la différence entre un **tableau** (liste) et un **dictionnaire** en Python. Pourquoi le dictionnaire est-il adapté pour représenter un enregistrement (une ligne) d'une table de données ?

**Question 1.3 (3 points).** Écrire une fonction `nb_judo(table)` qui prend en paramètre une liste de dictionnaires comme `adherents` et renvoie le nombre d'adhérents pratiquant le judo.

**Question 1.4 (3 points).** Écrire une fonction `cotisation_totale(table)` qui renvoie la somme de toutes les cotisations. Donner la valeur renvoyée pour la table `adherents`.

---

## Exercice 2 — Recherche dichotomique (10 points)

On dispose d'un tableau d'entiers **trié dans l'ordre croissant** et l'on souhaite y rechercher une valeur.

```python
tab = [2, 5, 7, 11, 15, 19, 23, 28, 31]
```

**Question 2.1 (2 points).** Rappeler le principe de la recherche **dichotomique**. Quelle condition le tableau doit-il impérativement vérifier pour qu'elle soit applicable ?

**Question 2.2 (2 points).** On recherche la valeur 19 dans `tab`. Indiquer les indices `milieu` successivement examinés par l'algorithme (on prendra `milieu = (debut + fin) // 2`).

**Question 2.3 (4 points).** Compléter la fonction `recherche(tab, cible)` ci-dessous. Elle renvoie l'indice de `cible` dans `tab` si elle est présente, et `-1` sinon.

```python
def recherche(tab, cible):
    debut = 0
    fin = len(tab) - 1
    while debut <= fin:
        milieu = (debut + fin) // 2
        if tab[milieu] == cible:
            return ...
        elif tab[milieu] < cible:
            debut = ...
        else:
            fin = ...
    return -1
```

**Question 2.4 (2 points).** Pour un tableau de 1000 éléments, environ combien de comparaisons la recherche dichotomique effectue-t-elle au maximum ? Comparer avec une recherche séquentielle (élément par élément).

---

## Corrigé

### Exercice 1

**1.1.** `print(adherents[1]["sport"])` affiche `natation`. L'expression `adherents[1]` désigne le deuxième dictionnaire de la liste, dont la clé `"sport"` vaut `"natation"`.

**1.2.** Un **tableau** (liste) est indexé par des entiers de 0 à n-1 et l'ordre des éléments a un sens. Un **dictionnaire** associe des **clés** (ici des chaînes) à des valeurs ; l'accès se fait par la clé et non par une position. Le dictionnaire est adapté à un enregistrement car chaque attribut (nom, âge, sport…) est nommé explicitement, ce qui rend le code lisible et indépendant de l'ordre des colonnes.

**1.3.**
```python
def nb_judo(table):
    n = 0
    for adherent in table:
        if adherent["sport"] == "judo":
            n = n + 1
    return n
```

**1.4.**
```python
def cotisation_totale(table):
    total = 0
    for adherent in table:
        total = total + adherent["cotisation"]
    return total
```
Pour `adherents` : 120 + 150 + 120 + 180 = **570**.

### Exercice 2

**2.1.** La recherche dichotomique compare la cible à l'élément du milieu du tableau, puis élimine à chaque étape la moitié qui ne peut pas contenir la valeur, en recommençant sur la moitié restante. Le tableau doit impérativement être **trié**.

**2.2.** Indices : `debut=0, fin=8` → `milieu=4` (tab[4]=15 < 19) ; `debut=5, fin=8` → `milieu=6` (tab[6]=23 > 19) ; `debut=5, fin=5` → `milieu=5` (tab[5]=19, trouvé). Indices examinés : **4, 6, 5**.

**2.3.**
```python
def recherche(tab, cible):
    debut = 0
    fin = len(tab) - 1
    while debut <= fin:
        milieu = (debut + fin) // 2
        if tab[milieu] == cible:
            return milieu
        elif tab[milieu] < cible:
            debut = milieu + 1
        else:
            fin = milieu - 1
    return -1
```

**2.4.** La recherche dichotomique divise l'intervalle par 2 à chaque étape : au maximum environ log₂(1000) ≈ **10 comparaisons**. La recherche séquentielle en effectuerait jusqu'à **1000**. La dichotomie est donc beaucoup plus efficace, au prix de la contrainte d'un tableau trié.
