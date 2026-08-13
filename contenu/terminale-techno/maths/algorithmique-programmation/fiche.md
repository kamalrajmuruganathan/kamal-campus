---
id: tale-techno-math-algorithmique-programmation
titre: "Algorithmique et programmation"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 11
prerequis:
  - Variables, boucle for et fonction range en Python (Seconde, algorithmique)
  - Suites arithmétiques et géométriques (Terminale technologique)
  - Moyenne d'une série statistique (Première technologique)
statut: brouillon
relu_par: null
---

# Algorithmique et programmation

> Un programme, c'est une suite d'instructions que la machine exécute **dans
> l'ordre**, sans jamais deviner ce que tu voulais dire. Ce chapitre reprend les
> quatre briques du programme — **variables**, **fonctions**, **listes**,
> **sélection de données** — et les met au service des autres chapitres :
> calculer les termes d'une suite, faire une moyenne, trier le bon grain de
> l'ivraie dans une série de valeurs.

Chapitre **pratique** : ici on ne démontre pas, on **lit et on écrit du code**.
Le langage utilisé est **Python**, avec une syntaxe volontairement minimale.

⚠️ **Ce chapitre concerne toutes les séries technologiques SAUF STD2A** : en
STD2A, il est remplacé par un programme d'**activités géométriques** (sections
planes d'un cône, tangente à une conique, perspective centrale).

---

## 1. Variables et affectation

### Une variable est une boîte nommée

Une **variable** associe un **nom** à une **valeur**. L'**affectation** range une
valeur dans la boîte ; elle s'écrit avec le signe `=` :

```python
u = 5          # la variable u reçoit la valeur 5
r = 3
u = u + r      # u reçoit son ancienne valeur plus 3 : u vaut 8
```

$$\boxed{\texttt{a = b} \text{ signifie « } a \text{ reçoit la valeur de } b \text{ », pas « } a \text{ égale } b \text{ »}}$$

- L'affectation se lit **de droite à gauche** : on calcule d'abord la valeur à
  droite, puis on la range dans le nom à gauche.
- `u = u + r` n'est pas une équation absurde : c'est « la nouvelle valeur de `u`
  est l'ancienne plus `r` ». C'est exactement la relation de récurrence
  $u_{n+1} = u_n + r$ d'une suite arithmétique.
- Chaque affectation **écrase** l'ancienne valeur : après `u = 8` puis `u = 2`,
  le $8$ est perdu.

> **Exemple — dérouler un programme à la main.**
> ```python
> a = 4
> b = a + 1      # b vaut 5
> a = 2 * b      # a vaut 10 (le 4 est écrasé)
> ```
> À la fin, `a` vaut $10$ et `b` vaut $5$. On suit les lignes **dans l'ordre**,
> en notant la valeur de chaque variable après chaque ligne.

### Le test d'égalité s'écrit `==`

En Python, `=` **affecte** et `==` **compare** : après `x = 7`, le test
`x == 7` vaut `True` et `x == 8` vaut `False`. Les comparaisons (`==`, `!=`,
`<`, `<=`, `>`, `>=`) renvoient `True` ou `False` ; ce sont elles qu'on écrit
dans les conditions `if`.

---

## 2. Fonctions : `def` et `return`

### Définir, appeler, renvoyer

Une **fonction** est un morceau de programme réutilisable : elle reçoit des
**arguments**, effectue un calcul, et **renvoie** un résultat avec `return`.

```python
def terme(n):
    return 5 + 3 * n
```

- `def` **définit** la fonction : rien ne s'exécute encore.
- `terme(4)` **appelle** la fonction avec `n = 4` : elle renvoie $5 + 3 \times 4 = 17$.
- Le résultat renvoyé peut être rangé dans une variable : `u = terme(4)`.

$$\boxed{\texttt{def nom(arguments):} \ \ldots \ \texttt{return resultat}}$$

C'est le même mot qu'en maths : `terme` ci-dessus **est** la fonction
$n \longmapsto 5 + 3n$, le terme général de la suite arithmétique de premier
terme $5$ et de raison $3$.

> **Exemple — terme d'une suite géométrique.** La suite $v_n = 200 \times 1{,}04^n$
> (un capital de $200$ € placé à $4\,\%$) se programme :
> ```python
> def v(n):
>     return 200 * 1.04 ** n
> ```
> `v(0)` renvoie `200.0`, `v(2)` renvoie `216.32`. En Python, la puissance
> s'écrit `**` et le séparateur décimal est le **point** : `1.04`, pas `1,04`.

### `return` termine la fonction

Dès qu'un `return` s'exécute, la fonction **s'arrête** et renvoie la valeur.
`print` **affiche** à l'écran mais ne renvoie rien : une fonction qui se
contente d'un `print` ne peut pas fournir son résultat à un calcul suivant.

> **Exemple.** Avec `def double(x): return 2 * x`, l'instruction
> `y = double(3) + 1` donne `y` $= 7$. Avec `print(2 * x)` à la place du
> `return`, le programme afficherait $6$ mais `y` ne vaudrait rien
> d'utilisable : `return` est **obligatoire** pour récupérer le résultat.

---

## 3. Listes : générer

Une **liste** est une collection de valeurs **ordonnées et numérotées**, notée
entre crochets. Le programme demande deux façons de la **générer**.

### En extension : on écrit tout

```python
notes = [12, 15, 8, 17]
```

- `len(notes)` donne le nombre d'éléments (ici $4$).
- Les **indices commencent à `0`** : `notes[0]` vaut `12`, `notes[3]` vaut `17`.
- Le dernier élément a l'indice `len(notes) - 1`, **pas** `len(notes)`.
- La liste vide s'écrit `[]`.

### Par ajouts successifs : on part de vide et on remplit

```python
L = []
for n in range(5):
    L.append(2 * n)      # L devient [0, 2, 4, 6, 8]
```

`append(x)` **ajoute `x` à la fin** de la liste. C'est la méthode reine pour
construire une liste dans une boucle.

> **Rappel `range`.** `range(n)` produit les entiers de $0$ à $n-1$ : la borne
> de droite est **exclue**. `range(5)` donne `0, 1, 2, 3, 4` — cinq valeurs,
> mais jamais $5$.

> **Exemple — les 10 premiers termes d'une suite.** Pour la suite géométrique
> $u_n = 100 \times 1{,}05^n$ :
> ```python
> termes = []
> for n in range(10):
>     termes.append(100 * 1.05 ** n)
> ```
> `termes[0]` vaut `100.0` (c'est $u_0$) et `termes[9]` vaut environ `155.13`
> (c'est $u_9$) : la liste contient $u_0$ à $u_9$, soit **dix** termes.

---

## 4. Listes : parcourir

**Parcourir** une liste, c'est passer sur tous ses éléments, en général pour
accumuler un résultat. Deux écritures :

### Sur les éléments directement

```python
notes = [12, 15, 8, 17]
total = 0
for note in notes:
    total = total + note     # total vaut 52 à la fin
```

La variable `note` prend **successivement chaque valeur** de la liste.

### Par les indices

```python
for i in range(len(notes)):
    total = total + notes[i]
```

`i` prend les valeurs `0, 1, 2, 3` et on lit `notes[i]`. Utile quand la
**position** compte ; sinon, la première écriture est plus simple.

> **Exemple complet — moyenne d'une liste.**
> ```python
> def moyenne(L):
>     total = 0
>     for x in L:
>         total = total + x
>     return total / len(L)
> ```
> `moyenne([12, 15, 8, 17])` renvoie `13.0` : c'est la moyenne
> $\bar{x} = \dfrac{12+15+8+17}{4}$ du chapitre de statistiques. Remarque
> d'écriture : le `return` est **après** la boucle (aligné avec `for`), sinon la
> fonction s'arrêterait au premier tour.

**L'accumulateur** (`total` ici) doit être **initialisé avant la boucle**
(`total = 0`) et mis à jour **dans** la boucle. Un compteur (`c = c + 1`) suit
la même logique.

---

## 5. Sélection de données : filtrer une liste

Dernière brique du programme : **sélectionner** dans une liste les valeurs qui
vérifient une **condition**. Le schéma est toujours le même :

$$\boxed{\text{liste vide} \ \rightarrow \ \text{parcours} \ \rightarrow \ \texttt{if} \text{ condition} \ \rightarrow \ \texttt{append}}$$

```python
notes = [12, 15, 8, 17, 9]
bonnes = []
for note in notes:
    if note >= 10:
        bonnes.append(note)
# bonnes vaut [12, 15, 17]
```

Seules les valeurs qui rendent la condition **vraie** sont ajoutées ; les autres
sont ignorées. La liste de départ n'est **pas modifiée**.

> **Exemple — compter au lieu de garder.** Pour savoir **combien** de notes
> atteignent $10$, on remplace la liste par un compteur :
> ```python
> def nb_bonnes(L):
>     c = 0
>     for x in L:
>         if x >= 10:
>             c = c + 1
>     return c
> ```
> `nb_bonnes([12, 15, 8, 17, 9])` renvoie `3`. Garder les valeurs → `append` ;
> les compter → `c = c + 1`.

> **Exemple — seuil sur une suite.** Quelles années la production
> $u_n = 8000 \times 1{,}06^n$ dépasse-t-elle $10\,000$ pièces, pour $n$ de $0$
> à $9$ ?
> ```python
> annees = []
> for n in range(10):
>     if 8000 * 1.06 ** n > 10000:
>         annees.append(n)
> # annees vaut [4, 5, 6, 7, 8, 9]
> ```
> On sélectionne ici les **rangs** `n`, pas les valeurs : c'est la question
> posée qui décide de ce qu'on met dans `append`.

⚠️ Attention à la condition : `>` (strictement) et `>=` (au sens large) ne
sélectionnent pas la même chose quand une valeur tombe **pile sur le seuil**.
Avec `note >= 10`, un $10$ est gardé ; avec `note > 10`, il est rejeté.

---

## 6. Tableau récapitulatif

| Idée | Écriture Python | À retenir |
|---|---|---|
| Affectation | `u = 5` | « reçoit », se lit de droite à gauche |
| Mise à jour | `u = u + r` | l'ancienne valeur est écrasée |
| Comparaison | `==`, `!=`, `<`, `<=`, `>`, `>=` | renvoie `True` / `False` |
| Définir une fonction | `def f(n):` | rien ne s'exécute à la définition |
| Renvoyer | `return resultat` | termine la fonction ; ≠ `print` |
| Liste en extension | `[12, 15, 8]` | indices à partir de **0** |
| Longueur | `len(L)` | dernier indice : `len(L) - 1` |
| Ajouts successifs | `L = []` puis `L.append(x)` | construire dans une boucle |
| `range(n)` | entiers de `0` à `n-1` | borne droite **exclue** |
| Parcourir | `for x in L:` ou `for i in range(len(L)):` | valeurs ou indices |
| Accumulateur | `total = 0` puis `total = total + x` | initialiser **avant** la boucle |
| Sélectionner | `if condition:` puis `append` | filtre, sans modifier la liste |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre `=` et `==`.** `x = 7` range $7$ dans `x` ; `x == 7` demande si
   `x` vaut $7$. Dans un `if`, c'est toujours `==`.
2. **Croire que `range(n)` va jusqu'à `n`.** `range(10)` s'arrête à $9$. Pour
   obtenir les termes $u_0$ à $u_{10}$ **inclus**, il faut `range(11)` — compte
   les valeurs produites, pas la borne écrite.
3. **Confondre `print` et `return`.** `print` affiche, `return` renvoie. Une
   fonction sans `return` ne fournit aucun résultat réutilisable dans un calcul.
4. **Mettre l'initialisation dans la boucle.** `total = 0` écrit **dans** le
   `for` remet le total à zéro à chaque tour : le résultat final ne compte que
   le dernier élément. L'initialisation se place **avant** la boucle.
5. **Se tromper d'un cran dans les indices.** `L[1]` est le **deuxième**
   élément ; le premier est `L[0]` et le dernier `L[len(L) - 1]`. `L[len(L)]`
   provoque une erreur.
6. **Mal placer le `return` dans une fonction avec boucle.** Indenté dans la
   boucle, il s'exécute dès le **premier tour** et la fonction s'arrête là. Pour
   renvoyer le résultat complet, le `return` s'aligne avec le `for`.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028. Fichier :
docs/programme-terminale-techno-2027.txt (extrait du PDF officiel education.gouv.fr
via WebFetch), section « ALGORITHMIQUE ET PROGRAMMATION (toutes séries SAUF STD2A) »
(lignes 117-120). À confronter au PDF officiel avant publication : l'extraction ne
donne qu'une ligne de Contenus (« Variables, affectation ; fonctions ; listes
(génération, parcours) ; sélection de données ») et AUCUNE rubrique « Capacités
attendues » — vérifier sur le PDF si des capacités détaillées existent.

⚠️ PÉRIMÈTRE SÉRIES : ce chapitre vaut pour toutes les séries technologiques SAUF
STD2A, qui le remplace par « ACTIVITÉS GÉOMÉTRIQUES » (sections planes d'un cône de
révolution, tangente à une conique, perspective centrale — lignes 123-126 du même
fichier). Mention faite dans le corps de la fiche (avertissement en tête). Le
chapitre STD2A de remplacement n'existe pas encore dans le dépôt.

Couverture, mappée sur la ligne de Contenus :
- « Variables, affectation » -> §1 (affectation, écrasement, = vs ==, déroulé à la main)
- « fonctions » -> §2 (def / return en Python, appel, return vs print)
- « listes (génération, parcours) » -> §3 (extension, ajouts successifs par append)
  et §4 (parcours sur les éléments / par les indices, accumulateur)
- « sélection de données » -> §5 (filtrage par condition : parcours + if + append,
  variante compteur, variante sélection de rangs)

Choix de rédaction :
- Python retenu comme langage (usage établi au lycée) ; le texte extrait ne
  prescrit pas de langage — à confirmer sur le PDF.
- La génération EN COMPRÉHENSION ([f(x) for x in ...]) n'est PAS traitée : le
  programme techno dit seulement « génération », sans détail ; le choix ici est de
  s'en tenir à extension + ajouts successifs, plus accessibles. Comparer avec la
  fiche de spécialité générale (contenu/terminale/maths-specialite/listes/) qui,
  elle, traite la compréhension. Le relecteur tranchera si elle doit être ajoutée.
- Exemples reliés aux autres chapitres du même programme : termes de suites
  arithmétiques et géométriques (§1, §2, §3), capital à intérêts composés (§2),
  moyenne d'une liste (§4, lien statistiques), seuil sur une suite géométrique (§5).
- Les notions non exigées (insert, del, remove, tri, while, dictionnaires) sont
  volontairement absentes.

Vérifications numériques faites : terme(4) = 17 ; 200×1,04² = 216,32 ;
100×1,05⁹ ≈ 155,133 ; 12+15+8+17 = 52, moyenne 13 ; filtre [12,15,17] et compte 3 ;
8000×1,06^n > 10000 ⇔ 1,06^n > 1,25, or 1,06³ ≈ 1,191 < 1,25 < 1,06⁴ ≈ 1,262,
donc rangs 4 à 9 sur range(10).

POINTS À SOUMETTRE AU RELECTEUR :
- Vérifier sur le PDF officiel si la section comporte des capacités attendues
  détaillées (l'extraction n'a que les Contenus).
- Trancher : la génération en compréhension fait-elle partie de « génération » ?
- Prérequis « Variables, boucle for et range (Seconde) » : le chapitre
  contenu/seconde/maths/algorithmique/ existe ; vérifier la cohérence des
  conventions (indices, range) entre les deux fiches.
- Le float Python (1.04, résultats du type 216.32000000000002) est passé sous
  silence : les valeurs affichées sont arrondies. À valider comme simplification
  acceptable.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel ou à
un site. Statut : brouillon, non relu.
-->
