---
id: tale-nsi-programmation-et-complexite
titre: "Programmation, mise au point et complexité"
voie: generale
niveau: terminale
parcours: nsi
matiere: nsi
programme: "Terminale — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Programmation Python (fonctions, boucles, tests) de Première
  - Notions d'algorithmes de tri et de recherche
statut: brouillon
relu_par: null
---

# Programmation, mise au point et complexité

> Écrire un programme, ce n'est pas seulement qu'il « marche » : il doit être **correct**,
> **testé**, **lisible** et **efficace**. Ce chapitre réunit les bonnes pratiques de
> mise au point d'un programme et l'outil qui permet de comparer les algorithmes : la
> **complexité**.

---

## 1. Spécifier et documenter

Avant de coder une fonction, on la **spécifie** : que prend-elle en entrée, que
renvoie-t-elle, sous quelles conditions. On l'écrit dans une **docstring** :

```python
def moyenne(notes):
    """Renvoie la moyenne d'une liste non vide de nombres.
    Précondition : notes est une liste d'au moins un nombre."""
    return sum(notes) / len(notes)
```

Une **précondition** est ce que l'on suppose **vrai en entrée** (ici : liste non vide).
Une bonne spécification rend le code **réutilisable** et le teste plus facilement.

---

## 2. Tester : les jeux de tests

Un programme se **valide par des tests**. On prépare un **jeu de tests** : des cas dont
on connaît le résultat attendu, y compris les **cas limites** (liste vide, valeur nulle,
premier/dernier élément…). On peut vérifier automatiquement avec `assert` :

```python
assert moyenne([10, 20]) == 15
assert moyenne([7]) == 7
```

Une assertion vraie ne fait rien ; une assertion **fausse** lève une erreur et signale
le problème. Un test **réussi** ne prouve pas l'absence de tout bug, mais un test
**échoué** prouve la présence d'un bug.

---

## 3. Corriger : la mise au point (debug)

Un **bug** est un écart entre le comportement **attendu** et le comportement **observé**.
La **mise au point** consiste à le localiser et le corriger. Méthodes :

- **lire les messages d'erreur** (le type d'erreur et la ligne fautive) ;
- **afficher des valeurs intermédiaires** (avec `print`) pour observer l'état du programme ;
- **tester par petits morceaux** plutôt que tout d'un coup.

On distingue les **erreurs de syntaxe** (le programme ne s'exécute pas du tout) des
**erreurs d'exécution** (il s'arrête en cours, ex. division par zéro) et des **erreurs de
logique** (il s'exécute mais donne un résultat faux). Les erreurs de logique sont les
plus difficiles, car rien ne « plante ».

---

## 4. La notion de complexité

La **complexité** (en temps) évalue **comment le nombre d'opérations augmente avec la
taille des données** `n`. Elle sert à **comparer des algorithmes** indépendamment de la
machine : on ne mesure pas des secondes, on compte l'**ordre de grandeur** des opérations.

On note souvent la complexité avec la notation « grand O » :

- **O(1)** — *constante* : le temps ne dépend pas de `n` (ex. accéder à `tab[i]`) ;
- **O(log n)** — *logarithmique* : divise le problème par deux à chaque étape (recherche
  dichotomique) ;
- **O(n)** — *linéaire* : on parcourt les données une fois (recherche séquentielle) ;
- **O(n²)** — *quadratique* : deux boucles imbriquées sur les données (tri par sélection
  naïf) ;
- **O(n log n)** — typique des bons tris comme le tri fusion.

On raisonne surtout sur le **pire cas** : le plus grand nombre d'opérations possible.

---

## 5. Comparer des algorithmes

Deux algorithmes qui donnent le même résultat peuvent avoir des complexités très
différentes. Exemple : chercher une valeur dans un tableau **trié**.

- Recherche **séquentielle** : on regarde les éléments un par un — **O(n)**.
- Recherche **dichotomique** : on divise par deux à chaque étape — **O(log n)**.

Pour `n = 1 000 000`, la séquentielle peut demander un million de comparaisons, la
dichotomique une vingtaine : l'écart est énorme quand `n` grandit. C'est pourquoi on
choisit un algorithme en fonction de sa complexité, surtout pour de **grandes données**.

Attention : une meilleure complexité peut exiger une **précondition** (ici, tableau
trié) ; le coût du tri préalable fait partie de l'analyse.

---

## Ce qu'il faut retenir

- **Spécifier** une fonction (entrées, sorties, préconditions) avant de coder ; la
  **documenter** (docstring).
- **Tester** avec des jeux de tests et des `assert`, en incluant les **cas limites** ;
  un test échoué prouve un bug, un test réussi ne prouve pas l'absence de bug.
- Distinguer erreurs de **syntaxe**, d'**exécution** et de **logique** (les plus sournoises).
- La **complexité** mesure la croissance du nombre d'opérations avec `n` : O(1), O(log n),
  O(n), O(n log n), O(n²)… On raisonne au **pire cas**.
- À résultat égal, on choisit l'algorithme de **meilleure complexité**, surtout pour de
  grandes données.

## Les erreurs à éviter

- Croire qu'un programme qui « marche sur un exemple » est correct : il faut des jeux de
  tests, dont les cas limites.
- Penser qu'un test réussi prouve l'absence de bug : il prouve seulement que ce cas passe.
- Confondre la complexité (croissance en fonction de `n`) avec un temps en secondes
  mesuré sur une machine précise.
- Oublier la précondition d'un algorithme rapide (ex. la dichotomique n'est valable que
  sur un tableau **trié**).
