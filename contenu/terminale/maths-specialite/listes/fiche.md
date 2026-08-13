---
id: tale-spe-math-listes
titre: "Algorithmique : listes"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 9
prerequis:
  - Boucle for et fonction range (Seconde)
  - Notion d'ensemble : appartenance, inclusion (Terminale, vocabulaire ensembliste)
  - Combinatoire et dénombrement (Terminale)
statut: brouillon
relu_par: null
---

# Algorithmique : listes

> Une **liste**, c'est une collection d'objets **rangés dans un ordre** et
> **numérotés**. Là où un ensemble en maths se contente de dire *qui est dedans*,
> une liste ajoute deux choses : un **ordre** et des **répétitions possibles**.
> C'est l'outil de base pour énumérer, stocker et parcourir des données.

Chapitre **court et pratique** : ici on ne démontre pas, on **lit et on écrit du
code**. Le langage de référence au lycée est **Python** : tous les exemples sont en
Python.

---

## 1. Ce qu'est une liste

Une liste se note entre **crochets**, ses éléments séparés par des virgules :

```python
notes = [12, 15, 8, 17, 15]
```

- Les éléments sont **ordonnés** : `notes[0]` est le premier, `notes[1]` le
  deuxième…
- Un même élément peut apparaître **plusieurs fois** (ici `15` deux fois).
- La liste vide s'écrit `[]`.
- `len(notes)` donne le **nombre d'éléments** (ici $5$).

> **Liste et ensemble — le lien à retenir.** Un ensemble mathématique
> $\{12, 15, 8, 17\}$ ne connaît ni ordre ni répétition : $\{15, 15\} = \{15\}$.
> Une liste, si : `[15, 15]` a **deux** éléments. La liste est une version
> *ordonnée et avec doublons* de l'idée d'ensemble.

---

## 2. Générer une liste

Le programme distingue **trois** façons de fabriquer une liste. Sache les
reconnaître.

### En extension : on écrit tous les éléments

$$\boxed{\texttt{L = [1, 2, 3, 4, 5]}}$$

On donne la liste « en toutes lettres ». C'est le pendant de l'ensemble défini en
extension $\{1, 2, 3, 4, 5\}$.

### Par ajouts successifs : on part de vide et on remplit

```python
L = []
for i in range(1, 6):
    L.append(i)     # L devient [1, 2, 3, 4, 5]
```

> `append(x)` **ajoute `x` à la fin**. On construit la liste pas à pas, souvent
> dans une boucle.

### En compréhension : on décrit une règle

$$\boxed{\texttt{L = [f(x) for x in ...]}}$$

On lit : « la liste des $f(x)$ **pour** $x$ parcourant… ». C'est le pendant exact
de l'ensemble défini en compréhension $\{x^2 \mid x \in \{0,\dots,4\}\}$.

```python
carres = [x**2 for x in range(5)]   # [0, 1, 4, 9, 16]
```

On peut **filtrer** avec un `if` :

```python
pairs = [x for x in range(10) if x % 2 == 0]   # [0, 2, 4, 6, 8]
```

> **À quoi ça sert.** La compréhension remplace en une ligne une boucle `for` +
> `append`. Les trois listes ci-dessous sont **identiques** :
> ```python
> [x**2 for x in range(5)]
> # ==
> L = []
> for x in range(5):
>     L.append(x**2)
> ```

---

## 3. Comprendre `range`

`range(n)` produit les entiers **de `0` à `n-1`** — pas jusqu'à `n`.

| Appel | Entiers produits |
|---|---|
| `range(5)` | `0, 1, 2, 3, 4` |
| `range(1, 5)` | `1, 2, 3, 4` |
| `range(2, 11, 2)` | `2, 4, 6, 8, 10` (pas de $2$) |

> ⚠️ `range(5)` donne **cinq** valeurs mais s'arrête à **4**. La borne de droite
> est **exclue**. C'est la source d'erreur numéro un.

---

## 4. Les indices : lire un élément

Chaque élément a une **position**, appelée **indice**. En Python, **les indices
commencent à `0`**.

```python
L = [10, 20, 30, 40]
#     0   1   2   3      <- indices
```

- `L[0]` vaut `10` (le **premier**),
- `L[2]` vaut `30`,
- `L[3]` vaut `40` (le **dernier** d'une liste de longueur $4$).

> ⚠️ **Le dernier élément a l'indice `len(L) - 1`**, pas `len(L)`. Ici `len(L)`
> vaut $4$, mais `L[4]` provoque une erreur `IndexError` : l'indice $4$ n'existe
> pas.

**Indices négatifs** : `L[-1]` est le **dernier**, `L[-2]` l'avant-dernier.

On **modifie** un élément en écrivant dans sa case :

```python
L[1] = 99      # L devient [10, 99, 30, 40]
```

---

## 5. Manipuler : ajouter et supprimer

| Opération | Code | Effet sur `L = [10, 20, 30]` |
|---|---|---|
| Ajouter à la fin | `L.append(40)` | `[10, 20, 30, 40]` |
| Insérer à l'indice `i` | `L.insert(1, 99)` | `[10, 99, 20, 30]` |
| Supprimer par indice | `del L[0]` | `[20, 30]` |
| Supprimer par valeur | `L.remove(20)` | `[10, 30]` |
| Tester l'appartenance | `20 in L` | `True` |

> **Appartenance.** `x in L` renvoie `True` si `x` figure dans la liste : c'est le
> `\in` mathématique. `30 in [10, 20, 30]` vaut `True`.

> ⚠️ `remove(v)` supprime **la première occurrence** de la valeur `v`, pas toutes.
> Sur `[15, 15]`, `remove(15)` laisse `[15]`.

---

## 6. Parcourir et itérer

Deux façons de passer sur tous les éléments — le programme les distingue.

### Itérer sur les éléments (directement)

```python
notes = [12, 15, 8]
for note in notes:
    print(note)         # affiche 12 puis 15 puis 8
```

La variable `note` prend **successivement chaque valeur** de la liste. On n'a pas
besoin des indices.

### Parcourir par les indices

```python
for i in range(len(notes)):
    print(notes[i])
```

Ici `i` prend les valeurs `0, 1, 2` et on accède à `notes[i]`. Utile quand on a
besoin de la **position** (par exemple pour comparer `notes[i]` et `notes[i+1]`).

> **Exemple complet — moyenne d'une liste.**
> ```python
> notes = [12, 15, 8, 17]
> total = 0
> for note in notes:
>     total = total + note
> moyenne = total / len(notes)     # 13.0
> ```

---

## 7. Le lien avec la combinatoire

Une liste sert à **énumérer les objets à dénombrer**. Quand tu construis un arbre
ou un produit cartésien en dénombrement, tu peux en dresser la liste :

```python
# tous les couples (pile/face) de deux lancers
issues = [(a, b) for a in ["P", "F"] for b in ["P", "F"]]
# [('P','P'), ('P','F'), ('F','P'), ('F','F')]
len(issues)     # 4 = 2 x 2
```

> La longueur de la liste **est** le cardinal de l'ensemble énuméré. Générer la
> liste en compréhension puis compter avec `len` est une façon concrète de
> **dénombrer**.

---

## 8. Tableau récapitulatif

| Idée | Écriture Python | À retenir |
|---|---|---|
| Liste | `[10, 20, 30]` | ordonnée, doublons permis |
| Longueur | `len(L)` | nombre d'éléments |
| Premier / dernier | `L[0]` / `L[-1]` | indices commencent à **0** |
| Dernier indice | `L[len(L)-1]` | pas `L[len(L)]` |
| Extension | `[1, 2, 3]` | tout écrit |
| Ajouts successifs | `L = []` puis `L.append(x)` | on remplit |
| Compréhension | `[f(x) for x in ...]` | une règle |
| `range(n)` | `0 … n-1` | borne droite **exclue** |
| Ajouter / supprimer | `append`, `insert`, `del`, `remove` | — |
| Appartenance | `x in L` | le `\in` mathématique |
| Itérer | `for e in L:` | chaque valeur |
| Parcourir | `for i in range(len(L)):` | chaque indice |

---

## 9. Les erreurs qui coûtent des points

1. **Compter à partir de 1.** `L[1]` n'est **pas** le premier élément, c'est le
   **deuxième**. Le premier est `L[0]`.
2. **Croire que `range(n)` va jusqu'à `n`.** Il s'arrête à `n-1`. `range(5)`
   n'atteint jamais `5`.
3. **Accéder à `L[len(L)]`.** L'indice maximal est `len(L) - 1` ; `L[len(L)]`
   déclenche une `IndexError`.
4. **Confondre liste et ensemble.** `[3, 3]` a deux éléments et un ordre ;
   l'ensemble $\{3, 3\} = \{3\}$ n'en a qu'un.
5. **Penser que `remove(v)` enlève toutes les occurrences.** Il n'enlève que la
   **première**.
6. **Oublier que `append` modifie la liste sur place** et ne renvoie rien :
   `L = L.append(x)` écrase `L` avec `None`. On écrit juste `L.append(x)`.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : programme officiel de spécialité mathématiques, Terminale générale,
applicable à la rentrée 2027. Fichier :
docs/programme-terminale-specialite-maths-2027.txt, section « ALGORITHMIQUE ET
PROGRAMMATION — NOTION DE LISTE » (lignes 38-48). En-tête de provenance du fichier
source : lignes 1-20.

⚠️ MENTION 1 — NATURE DE LA SOURCE : ce programme n'a PAS été obtenu par la chaîne
d'extraction habituelle. Le proxy du sandbox bloquant le PDF, le texte a été
reconstitué via WebFetch depuis le miroir xm1math.net/reforme/term_gen_spe.pdf
(voir en-tête lignes 6-17 du fichier source). L'extraction est fiable dans l'esprit
et la lettre mais NON garantie exhaustive : elle DOIT être confrontée au PDF
officiel (education.gouv.fr / éduscol) avant toute publication.

⚠️ MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE produit sur le
programme de la RENTRÉE 2027, à la demande explicite de l'utilisateur. Le gabarit
(docs/gabarit-chapitre.md, §6) déconseille par défaut d'écrire de la Terminale
avant 2027 ; cette fiche est une exception assumée et demandée, le nouveau
programme 2027 étant déjà publié.

BRIÈVETÉ ASSUMÉE : la section du programme est très courte (1 ligne de « Contenus »,
4 « Capacités attendues »). Le gabarit standard (définition / propriétés-théorèmes
/ démonstrations) a été ADAPTÉ à un chapitre d'algorithmique pratique : « notions
clés » au lieu de théorèmes, « méthodes = lire et écrire du code » au lieu de
démonstrations. Pas de section « démonstration » (rien à démontrer ici).

CONTENU COUVERT, mappé aux capacités attendues du programme :
- « Générer une liste (extension / ajouts successifs / compréhension) » -> §2
- « lien avec la notion d'ensemble » -> encadrés §1 et §2
- « Manipuler des éléments et leurs indices (ajouter, supprimer) » -> §4, §5
- « Parcourir une liste » -> §6 (parcours par indices)
- « Itérer sur les éléments » -> §6 (itération directe)
- Lien combinatoire (demande utilisateur, cohérent avec la section « COMBINATOIRE
  ET DÉNOMBREMENT » du même programme) -> §7

POINTS À SOUMETTRE AU RELECTEUR :
- Python est le langage de référence retenu ; à confirmer que le PDF officiel
  n'impose pas une syntaxe/pseudo-code neutre plutôt que Python explicitement.
- Le programme ne mentionne pas nommément `range`, `append`, la compréhension avec
  `if`, les indices négatifs ni `insert`/`del`/`remove` : ce sont des choix de
  mise en œuvre Python usuels au lycée, à valider comme conformes à l'esprit du
  texte (« ajouter, supprimer, etc. »).
- Vérifier que le niveau de détail sur `range` (borne exclue) est jugé pertinent
  et non hors-sujet pour la Terminale.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à un
site. Statut : brouillon, non relu.
-->
