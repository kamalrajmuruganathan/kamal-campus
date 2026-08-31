---
id: tale-nsi-recursivite-et-diviser-pour-regner
titre: "Récursivité et « diviser pour régner »"
voie: generale
niveau: terminale
parcours: nsi
matiere: nsi
programme: "Terminale — spécialité NSI (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Fonctions et conditions en Python (Première)
  - Notion de pile d'appels
statut: brouillon
relu_par: null
---

# Récursivité et « diviser pour régner »

> Une fonction **récursive** est une fonction qui **s'appelle elle-même**. C'est une
> autre façon de répéter, où l'on résout un problème en se ramenant à une version
> **plus petite** du même problème, jusqu'à un cas assez simple pour être résolu
> directement.

---

## 1. Définition et fonctionnement

Une fonction récursive comporte toujours **deux parties** :

- le **cas de base** : le cas le plus simple, résolu **sans** rappel (il arrête la
  récursion) ;
- le **cas récursif** : on se ramène à un ou plusieurs sous-problèmes plus petits en
  **s'appelant soi-même**, puis on combine les résultats.

Exemple, la factorielle $n! = n \times (n-1)!$ avec $0! = 1$ :

```python
def factorielle(n):
    if n == 0:          # cas de base
        return 1
    return n * factorielle(n - 1)   # cas récursif
```

À l'exécution, chaque appel attend le résultat de l'appel plus petit : les appels
s'**empilent** dans la **pile d'appels**, puis se **dépilent** en calculant. C'est
pourquoi une récursivité est intimement liée à une pile.

---

## 2. La condition d'arrêt

Sans cas de base atteignable, la fonction s'appelle **indéfiniment**. En pratique la
pile d'appels finit par saturer : Python lève une erreur `RecursionError`
(dépassement de la profondeur maximale de récursion).

Une récursion correcte garantit deux choses :

1. il existe un cas de base ;
2. **chaque** appel récursif se rapproche **strictement** de ce cas de base (l'argument
   « diminue » vers le cas simple).

Dans `factorielle`, l'argument passe de `n` à `n-1` : il décroît vers `0`, le cas de
base. C'est ce qui garantit la **terminaison**.

---

## 3. Récursivité et itération

Tout ce qui se fait récursivement peut se faire de façon **itérative** (avec une boucle)
et réciproquement. Les deux styles sont **équivalents** en résultats.

- La récursivité rend souvent le code plus **lisible** quand le problème est lui-même
  défini récursivement (arbres, `diviser pour régner`).
- L'itération évite d'empiler des appels et donc de saturer la pile pour de grandes
  tailles.

Le bon choix dépend du problème et des contraintes.

---

## 4. Le paradigme « diviser pour régner »

**Diviser pour régner** (*divide and conquer*) est une méthode de conception d'algorithme
en **trois temps** :

1. **Diviser** : découper le problème en sous-problèmes de **même nature**, plus petits ;
2. **Régner** : résoudre chaque sous-problème (souvent récursivement) ;
3. **Combiner** : reconstruire la solution du problème complet à partir des solutions
   partielles.

C'est une stratégie de conception : la récursivité en est l'outil naturel d'écriture.

---

## 5. Exemples au programme

**Recherche dichotomique** dans un tableau **trié** : on compare la valeur cherchée à
l'élément du milieu ; on écarte la moitié où elle ne peut pas être, et on recommence sur
l'autre moitié. À chaque étape la zone de recherche est **divisée par deux**.

```python
def dichotomie(tab, cible):
    g, d = 0, len(tab) - 1
    while g <= d:
        m = (g + d) // 2
        if tab[m] == cible:
            return m
        elif tab[m] < cible:
            g = m + 1          # on garde la moitié droite
        else:
            d = m - 1          # on garde la moitié gauche
    return -1
```

**Tri fusion** (*tri par fusion*) : on coupe le tableau en deux moitiés, on trie chacune
(récursivement), puis on **fusionne** les deux moitiés triées en une seule liste triée.
C'est un cas emblématique de diviser pour régner : le travail de « combinaison » est la
fusion.

---

## Ce qu'il faut retenir

- Une fonction récursive s'appelle elle-même ; elle a **toujours** un **cas de base**
  (arrêt) et un **cas récursif** (problème plus petit).
- La terminaison exige que chaque appel se **rapproche** du cas de base.
- Récursivité et itération sont **équivalentes**.
- **Diviser pour régner** = diviser en sous-problèmes, régner (résoudre), combiner ;
  exemples : recherche dichotomique, tri fusion.

## Les erreurs à éviter

- Oublier le cas de base ou écrire un appel qui ne se rapproche pas de lui : la fonction
  ne s'arrête pas (`RecursionError`).
- Croire que « récursif » veut dire « toujours plus rapide » : ce n'est qu'un style
  d'écriture, pas une garantie d'efficacité.
- Appliquer la recherche dichotomique à un tableau **non trié** : elle n'est valide que
  sur un tableau **trié**.
- Confondre « diviser pour régner » (méthode de conception) et « récursivité » (mécanisme
  d'appel) : l'un s'écrit souvent avec l'autre, mais ce ne sont pas des synonymes.
