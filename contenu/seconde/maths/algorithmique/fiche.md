---
id: 2nde-math-algorithmique
titre: "Algorithmique et programmation"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Scratch et notions d'algorithme (cycle 4)
  - Notion de fonction (Seconde)
statut: brouillon
relu_par: null
---

# Algorithmique et programmation

> Le langage du programme est **Python**. L'objectif n'est pas de devenir développeur, mais de
> savoir **lire** un programme, **prévoir** ce qu'il affiche, et en **écrire** de courts pour
> résoudre un problème mathématique.

---

## 1. Variables et affectation

```python
x = 5          # affectation : x prend la valeur 5
x = x + 3      # x vaut maintenant 8
```

> ⚠️ Le signe `=` n'est **pas** une égalité mathématique, c'est une **affectation**.
> `x = x + 3` n'a aucun sens en maths, mais se lit ici : « prendre la valeur de x, ajouter 3,
> ranger le résultat dans x ».

### Types de données

| Type | Exemple |
|---|---|
| `int` | entier : `7` |
| `float` | décimal : `3.14` |
| `str` | chaîne : `"bonjour"` |
| `bool` | booléen : `True` / `False` |

> ⚠️ En Python, le séparateur décimal est le **point**, jamais la virgule.

---

## 2. Instructions conditionnelles

```python
if x > 0:
    print("positif")
elif x == 0:
    print("nul")
else:
    print("négatif")
```

> ⚠️ **Deux pièges à la fois** : le test d'égalité s'écrit avec **deux** signes `==` (un seul
> serait une affectation), et l'**indentation** délimite les blocs — elle n'est pas décorative,
> elle fait partie de la syntaxe.

### Opérateurs de comparaison

| Python | Sens |
|---|---|
| `==` | égal à |
| `!=` | différent de |
| `<` `>` `<=` `>=` | comparaisons |
| `and` `or` `not` | et, ou, non |

---

## 3. Boucle bornée — `for`

Quand on connaît **à l'avance** le nombre de répétitions.

```python
for i in range(5):
    print(i)          # affiche 0, 1, 2, 3, 4
```

> ⚠️ `range(5)` produit $0,1,2,3,4$ — **cinq valeurs, en commençant à zéro, sans atteindre 5**.
> C'est la source d'erreur numéro un.

| Écriture | Valeurs produites |
|---|---|
| `range(5)` | $0,1,2,3,4$ |
| `range(1, 5)` | $1,2,3,4$ |
| `range(1, 10, 2)` | $1,3,5,7,9$ |

> **Exemple — somme des entiers de 1 à 100.**
> ```python
> S = 0
> for i in range(1, 101):
>     S = S + i
> print(S)        # 5050
> ```
> Noter le `101` : pour aller jusqu'à $100$, il faut écrire $101$.

---

## 4. Boucle non bornée — `while`

Quand on ne sait **pas** combien de tours seront nécessaires, mais qu'on connaît la
**condition d'arrêt**.

```python
n = 1
while 2**n < 1000:
    n = n + 1
print(n)          # plus petit n tel que 2^n >= 1000
```

> ⚠️ Il faut **garantir que la condition finira par devenir fausse**, sinon la boucle est
> infinie. C'est le risque propre au `while`.

---

## 5. Fonctions

```python
def aire_rectangle(longueur, largeur):
    return longueur * largeur

print(aire_rectangle(5, 3))    # 15
```

- `def` définit la fonction, ses **paramètres** sont entre parenthèses
- `return` **renvoie** un résultat et termine la fonction

> ⚠️ **`return` n'est pas `print`.** `print` affiche à l'écran ; `return` renvoie une valeur
> réutilisable dans un calcul. Une fonction sans `return` ne renvoie rien.

---

## 6. Algorithmes classiques du programme

### Balayage — encadrer une solution

```python
x = 0
while x**2 < 2:
    x = x + 0.001
print(x)          # valeur approchée de racine de 2
```

### Compter dans une liste

```python
notes = [12, 8, 15, 9, 18]
compteur = 0
for n in notes:
    if n >= 10:
        compteur = compteur + 1
print(compteur)   # 3
```

### Simuler le hasard

```python
from random import randint
de = randint(1, 6)     # entier au hasard entre 1 et 6 inclus
```

> `randint(1, 6)` **inclut** les deux bornes — contrairement à `range`.

---

## 7. À retenir absolument

| | |
|---|---|
| `=` | affectation, pas égalité |
| `==` | test d'égalité |
| `range(n)` | $0$ à $n-1$, soit $n$ valeurs |
| `range(a, b)` | $a$ à $b-1$ |
| `for` | nombre de tours **connu** |
| `while` | condition d'arrêt, nombre de tours inconnu |
| Indentation | fait partie de la syntaxe |
| `return` ≠ `print` | renvoyer ≠ afficher |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que `range(5)` va de $1$ à $5$.** Il va de $0$ à $4$.
2. **Écrire `=` au lieu de `==`** dans un test.
3. **Oublier l'indentation** ou les deux-points en fin de ligne : le programme ne s'exécute pas.
4. **Confondre `return` et `print`.**
5. **Écrire une virgule décimale** : Python attend `3.14`, pas `3,14`.
6. **Oublier d'initialiser** une variable d'accumulation avant la boucle (`S = 0`).
7. **Écrire une boucle `while` dont la condition ne devient jamais fausse.**
8. **Confondre les bornes de `range` et de `randint`** : la première exclut la borne
   supérieure, la seconde l'inclut.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Algorithmique et programmation » (lignes 33, 594,
818 du .txt extrait). L'extraction fait apparaître « Variables et instructions élémentaires »
(ligne 892) et « Fonctions à un ou plusieurs arguments » (ligne 950), ainsi que
« Déterminer par balayage un encadrement de … », d'où la section 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les listes sont-elles au programme de seconde ? Je les utilise dans un exemple — à vérifier,
  car c'est un point de périmètre.
- Le programme précise-t-il les modules autorisés (random, math) ?
- Les fonctions à plusieurs arguments sont explicitement mentionnées : le périmètre exact
  (récursivité exclue ? portée des variables ?) reste à confirmer.
- Le programme mentionne (ligne 1761) une restriction « Toute autre utilisation est hors
  programme » : vérifier qu'elle ne concerne pas ce bloc.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
