---
id: 1nsi-algorithmique-tris-et-recherche
titre: "Algorithmique : tris et recherche"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 15
prerequis:
  - Listes (types construits)
  - Boucles for et while, comparaisons
statut: brouillon
relu_par: null
---

# Algorithmique : tris et recherche

> Un **algorithme** est une suite finie d'étapes qui résout un problème. Ce
> chapitre étudie les algorithmes de **recherche** dans un tableau (séquentielle
> et **dichotomique**), deux algorithmes de **tri** (sélection, insertion), les
> algorithmes **gloutons**, et la notion de **coût**.

---

# 1. Recherche séquentielle

Pour trouver une valeur dans un tableau **quelconque**, on parcourt les éléments
**un à un** jusqu'à trouver la valeur (ou atteindre la fin).

```python
def recherche(tab, cible):
    for i in range(len(tab)):
        if tab[i] == cible:
            return i          # trouvé, on renvoie l'indice
    return -1                 # non trouvé
```

Dans le **pire des cas**, on examine **tous** les éléments : le coût est
**proportionnel à la taille** $n$ du tableau. On parle de coût **linéaire**.

---

# 2. Recherche dichotomique

Si le tableau est **déjà trié**, on peut faire beaucoup mieux. La **recherche
dichotomique** compare la cible à l'élément du **milieu** :

- si c'est la cible, c'est fini ;
- si la cible est **plus petite**, on cherche dans la **moitié gauche** ;
- si elle est **plus grande**, dans la **moitié droite**.

À chaque étape, on **divise par deux** la zone de recherche.

```python
def dichotomie(tab, cible):   # tab doit être trié
    g, d = 0, len(tab) - 1
    while g <= d:
        m = (g + d) // 2
        if tab[m] == cible:
            return m
        elif tab[m] < cible:
            g = m + 1
        else:
            d = m - 1
    return -1
```

**Condition indispensable :** le tableau doit être **trié**. Le coût est
**logarithmique** : pour 1000 éléments, une dizaine d'étapes suffisent, contre
1000 pour la recherche séquentielle.

---

# 3. Tri par sélection

Idée : à chaque tour, **chercher le plus petit** élément restant et le placer à sa
position définitive (au début de la partie non triée).

```python
def tri_selection(tab):
    for i in range(len(tab)):
        i_min = i
        for j in range(i + 1, len(tab)):
            if tab[j] < tab[i_min]:
                i_min = j
        tab[i], tab[i_min] = tab[i_min], tab[i]   # échange
```

---

# 4. Tri par insertion

Idée : on parcourt le tableau et on **insère** chaque élément à sa **bonne place**
parmi les éléments déjà triés à sa gauche (comme on trie des cartes en main).

```python
def tri_insertion(tab):
    for i in range(1, len(tab)):
        valeur = tab[i]
        j = i - 1
        while j >= 0 and tab[j] > valeur:
            tab[j + 1] = tab[j]     # on décale vers la droite
            j = j - 1
        tab[j + 1] = valeur         # on insère
```

Ces deux tris ont un coût **quadratique** dans le pire cas : doubler la taille du
tableau multiplie environ le temps par **quatre**.

---

# 5. Invariant, terminaison, correction

Pour être sûr qu'un algorithme est juste, on raisonne avec deux idées :

- **La terminaison** : l'algorithme **s'arrête** toujours. Pour une boucle
  `while`, on exhibe une quantité (un **variant**) qui **décroît** strictement
  vers une borne (ex. `d - g` diminue à chaque tour de la dichotomie).
- **La correction** : l'algorithme donne le **bon résultat**. On s'appuie sur un
  **invariant de boucle** : une propriété **vraie avant et après chaque tour**
  (ex. « la partie gauche du tableau est triée »).

---

# 6. Algorithmes gloutons

Un algorithme **glouton** construit une solution **étape par étape** en faisant à
chaque fois le choix **qui paraît le meilleur sur le moment** (choix **localement
optimal**), sans jamais revenir en arrière.

**Exemple : le rendu de monnaie.** Pour rendre une somme avec le moins de pièces,
on choisit à chaque étape la **plus grande pièce** qui ne dépasse pas ce qu'il
reste à rendre.

Rendre 68 centimes avec 50, 20, 10, 5, 2, 1 :
50 → reste 18 ; 10 → reste 8 ; 5 → reste 3 ; 2 → reste 1 ; 1 → reste 0.
Soit **5 pièces**.

> Attention : un algorithme glouton est **rapide** mais ne donne pas **toujours**
> la solution optimale, selon le problème et le jeu de valeurs.

---

# Ce qu'il faut retenir

- **Recherche séquentielle** : parcours un à un, coût **linéaire** ($n$),
  fonctionne sur un tableau quelconque.
- **Recherche dichotomique** : sur un tableau **trié**, on divise la zone par 2
  à chaque étape, coût **logarithmique** (bien plus rapide).
- **Tri par sélection** : placer à chaque tour le **minimum** restant.
- **Tri par insertion** : insérer chaque élément à sa **place** parmi les
  précédents. Coût **quadratique** pour les deux.
- **Terminaison** : la boucle s'arrête (un variant décroît). **Correction** :
  le résultat est juste (invariant de boucle).
- **Algorithme glouton** : choix localement optimal, rapide, pas toujours optimal.

# Les erreurs à éviter

- Appliquer la **dichotomie** à un tableau **non trié** : le résultat est faux.
- Confondre **valeur** cherchée et **indice** renvoyé.
- Croire qu'un algorithme glouton donne **toujours** la meilleure solution.
- Oublier de justifier qu'une boucle `while` **se termine** (risque de boucle
  infinie).
