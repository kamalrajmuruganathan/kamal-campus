---
id: 5e-math-pensee-informatique
titre: "La pensée informatique"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 10
prerequis:
  - Instruction et séquence d'instructions (6e)
  - Répéter une séquence d'instructions pour accomplir une tâche (6e)
  - Programmes de calcul (CM2-6e)
  - Priorités opératoires et parenthèses (6e)
statut: brouillon
relu_par: null
---

# La pensée informatique

> Une machine ne devine rien : elle exécute **les instructions que tu lui donnes**, **dans
> l'ordre où tu les donnes**, sans rien corriger. Programmer, c'est dire exactement ce qu'on
> veut — et **prévoir** ce qui va se passer avant d'appuyer sur le bouton.

---

## 1. Le vocabulaire de base

| Mot | Ce que ça veut dire |
|---|---|
| **Instruction** | un ordre unique, que la machine sait exécuter |
| **Séquence** | plusieurs instructions mises **l'une après l'autre** |
| **Programme** | une séquence d'instructions écrite pour accomplir une tâche |
| **Exécuter** | dérouler les instructions, une par une, dans l'ordre |

En 5e, tu programmes dans un **langage par blocs** : chaque instruction est un bloc empilé
sous le précédent, et la pile se lit **de haut en bas**.

> **Une instruction** : `avancer de 50 pas`. **Une séquence** : `avancer de 50 pas`,
> puis `tourner de 90°`, puis `avancer de 50 pas`.

---

## 2. Les notions clés

### 2.1 La séquence — l'ordre change tout

<!-- schema:ordre-instructions -->
![Les mêmes instructions dans un ordre différent : le programme A affiche 25, le programme B affiche 17.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTU4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxNTgiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxMzIiIHk9IjQ3IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5Qcm9ncmFtbWUgQTwvdGV4dD48cmVjdCB4PSIxNTAiIHk9IjIyIiB3aWR0aD0iNzYiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTg4IiB5PSI0Ny42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0PjxyZWN0IHg9IjMzNiIgeT0iMjIiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNzQiIHk9IjQ3LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjU8L3RleHQ+PHJlY3QgeD0iNTIyIiB5PSIyMiIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjU2MCIgeT0iNDcuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjU8L3RleHQ+PGxpbmUgeDE9IjIzMiIgeTE9IjQyIiB4Mj0iMzIwIiB5Mj0iNDIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzMwLDQyIDMyMCwzNyAzMjAsNDciIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIyODEiIHk9IjMzIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4rIDI8L3RleHQ+PGxpbmUgeDE9IjQxOCIgeTE9IjQyIiB4Mj0iNTA2IiB5Mj0iNDIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTE2LDQyIDUwNiwzNyA1MDYsNDciIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSI0NjciIHk9IjMzIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DlyA1PC90ZXh0Pjx0ZXh0IHg9IjEzMiIgeT0iMTEzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5Qcm9ncmFtbWUgQjwvdGV4dD48cmVjdCB4PSIxNTAiIHk9Ijg4IiB3aWR0aD0iNzYiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTg4IiB5PSIxMTMuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzwvdGV4dD48cmVjdCB4PSIzMzYiIHk9Ijg4IiB3aWR0aD0iNzYiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzc0IiB5PSIxMTMuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTU8L3RleHQ+PHJlY3QgeD0iNTIyIiB5PSI4OCIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjU2MCIgeT0iMTEzLjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE3PC90ZXh0PjxsaW5lIHgxPSIyMzIiIHkxPSIxMDgiIHgyPSIzMjAiIHkyPSIxMDgiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzMwLDEwOCAzMjAsMTAzIDMyMCwxMTMiIGZpbGw9IiNjMjVlMDAiLz48dGV4dCB4PSIyODEiIHk9Ijk5IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DlyA1PC90ZXh0PjxsaW5lIHgxPSI0MTgiIHkxPSIxMDgiIHgyPSI1MDYiIHkyPSIxMDgiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTE2LDEwOCA1MDYsMTAzIDUwNiwxMTMiIGZpbGw9IiNjMjVlMDAiLz48dGV4dCB4PSI0NjciIHk9Ijk5IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4rIDI8L3RleHQ+PC9zdmc+)
*Les mêmes instructions dans un ordre différent : le programme A affiche 25, le programme B affiche 17.*
<!-- /schema -->

Une séquence n'est pas un sac d'instructions : c'est une **liste ordonnée**. Change l'ordre,
tu changes le résultat.

> **Exemple.** Deux programmes, les mêmes instructions, pas le même résultat.
>
> ```
> Programme A                Programme B
> choisir 3                  choisir 3
> ajouter 2                  multiplier par 5
> multiplier par 5           ajouter 2
> afficher                   afficher
> ```
>
> A affiche $(3 + 2) \times 5 = 25$. B affiche $3 \times 5 + 2 = 17$.
>
> $$\boxed{\text{Mêmes instructions} + \text{ordre différent} = \text{résultat différent}}$$

### 2.2 Les entrées et les sorties

- Une **entrée** : ce que le programme **reçoit** (un nombre saisi, un clic, une mesure).
- Une **sortie** : ce qu'il **produit** (un affichage, un dessin, un son, un déplacement).

> **Exemple.**
>
> ```
> demander « Quel est ton âge ? » et mettre la réponse dans age
> afficher age + 10
> ```
>
> **Entrée** : l'âge saisi. **Sortie** : le nombre affiché. Le programme lui-même n'est ni
> l'un ni l'autre : c'est la machine entre les deux.

### 2.3 La variable — une étiquette sur une donnée

Une **variable** est un nom qui désigne une donnée rangée par la machine. En 5e, on l'utilise
**uniquement en lecture** : une donnée est saisie, on lui donne un nom, et on **s'en sert**
dans les calculs. On ne la modifie pas en cours de route.

> **Exemple.** L'utilisateur saisit $7$ dans `a`.
>
> ```
> afficher a + 1
> afficher a + 2
> ```
>
> Le programme affiche $8$ puis $9$. **Attention** : `afficher a + 1` ne change pas `a`,
> qui vaut toujours $7$ à la ligne suivante. On l'a **lue**, pas modifiée.

### 2.4 L'expression informatique — une formule écrite pour la machine

Une **expression informatique** est la traduction d'une formule mathématique dans le langage
du programme. Elle suit **les mêmes priorités qu'en maths** : multiplications et divisions
avant additions et soustractions, et les parenthèses d'abord.

> **Exemple.** La moyenne de deux notes $m = \dfrac{a+b}{2}$ s'écrit `(a + b) / 2`.
>
> **Les parenthèses sont obligatoires** : la barre de fraction regroupait toute seule le
> numérateur ; écrite à plat, elle disparaît. `a + b / 2` calcule $a + \dfrac{b}{2}$.

### 2.5 La boucle — répéter sans réécrire

Une **boucle** demande de répéter une séquence un **nombre de fois fixé à l'avance**. On dit
qu'elle est **inconditionnelle** : le nombre de tours est connu avant de commencer, rien ne
peut l'interrompre.

> **Exemple.** Écrire quatre fois de suite `avancer de 50` puis `tourner de 90°` trace un
> carré. La boucle dit la même chose en trois lignes :
>
> ```
> répéter 4 fois
>     avancer de 50
>     tourner de 90°
> fin répéter
> ```
>
> Plus court, plus clair, et bien plus facile à modifier.

> **Ce qui est dans la boucle** : seules les instructions **décalées vers la droite** sont
> répétées. Ce qui est écrit après `fin répéter` n'est exécuté **qu'une fois**.

---

## 3. Méthodes — lire et écrire un algorithme

### Méthode 1 — Prévoir la valeur avant d'exécuter

Le réflexe attendu : **savoir ce que la machine va afficher avant de lancer le programme**.
Tu remplaces chaque variable par sa valeur, puis tu calcules.

> **Exemple.** L'utilisateur saisit $6$ dans `nombre`, et le programme dit
> `afficher nombre × nombre − nombre`.
>
> Je remplace : $6 \times 6 - 6$. La multiplication est prioritaire : $36 - 6 = 30$.
> Sortie : $30$.

### Méthode 2 — Traduire une formule en expression informatique

1. Repère ce qui est **regroupé** dans la formule (barre de fraction, grande parenthèse).
2. Remets ces regroupements en **parenthèses**, puisque la ligne est écrite à plat.
3. Remplace chaque grandeur par le **nom de sa variable**.

> **Exemple.** Le périmètre d'un rectangle $P = 2 \times (L + \ell)$ devient
> `2 * (longueur + largeur)`. Sans les parenthèses, `2 * longueur + largeur` ne double que
> la longueur.

### Méthode 3 — Calculer une formule avec une suite d'instructions

Une formule un peu longue peut se calculer **par étapes**, une instruction par étape. C'est
plus lent à écrire, mais bien plus facile à relire et à corriger.

> **Exemple.** Aire d'un triangle, $\mathcal{A} = \dfrac{b \times h}{2}$ :
>
> ```
> demander la base et la mettre dans b
> demander la hauteur et la mettre dans h
> afficher (b * h) / 2
> ```

### Méthode 4 — Analyser un programme et modifier ses paramètres

<!-- schema:robot-polygones -->
![Pour revenir à son point de départ, le robot fait un tour complet : 4 virages de 90° pour le carré, 3 virages de 120° pour le triangle équilatéral.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iODAiIHkxPSIyMDAiIHgyPSIxOTkiIHkyPSIyMDAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjEwLDIwMCAxOTksMTk0LjUgMTk5LDIwNS41IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjIxMCIgeTE9IjIwMCIgeDI9IjIxMCIgeTI9IjgxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIxMCw3MCAyMDQuNSw4MSAyMTUuNSw4MSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIyMTAiIHkxPSI3MCIgeDI9IjkxIiB5Mj0iNzAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iODAsNzAgOTEsNzUuNSA5MSw2NC41IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjgwIiB5MT0iNzAiIHgyPSI4MCIgeTI9IjE4OSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI4MCwyMDAgODUuNSwxODkgNzQuNSwxODkiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iODAiIHkxPSIyMDAiIHgyPSI4MCIgeTI9IjI0NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDgwIDIwMCBMIDgwIDIyNCBBIDI0IDI0IDAgMCAwIDEwNCAyMDAgWiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjIyIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNIDgwIDIyNCBBIDI0IDI0IDAgMCAwIDEwNCAyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTExLjExIiB5PSIyMzYuMTEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjkwwrA8L3RleHQ+PGxpbmUgeDE9IjIxMCIgeTE9IjIwMCIgeDI9IjI1NiIgeTI9IjIwMCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDIxMCAyMDAgTCAyMzQgMjAwIEEgMjQgMjQgMCAwIDAgMjEwIDE3NiBaIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMjIiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0gMjM0IDIwMCBBIDI0IDI0IDAgMCAwIDIxMCAxNzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMjQxLjExIiB5PSIxNzMuODkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjkwwrA8L3RleHQ+PGxpbmUgeDE9IjIxMCIgeTE9IjcwIiB4Mj0iMjEwIiB5Mj0iMjQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAyMTAgNzAgTCAyMTAgNDYgQSAyNCAyNCAwIDAgMCAxODYgNzAgWiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjIyIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNIDIxMCA0NiBBIDI0IDI0IDAgMCAwIDE4NiA3MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNzguODkiIHk9IjQzLjg5IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj45MMKwPC90ZXh0PjxsaW5lIHgxPSI4MCIgeTE9IjcwIiB4Mj0iMzQiIHkyPSI3MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDgwIDcwIEwgNTYgNzAgQSAyNCAyNCAwIDAgMCA4MCA5NCBaIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMjIiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0gNTYgNzAgQSAyNCAyNCAwIDAgMCA4MCA5NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0OC44OSIgeT0iMTA2LjExIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj45MMKwPC90ZXh0Pjx0ZXh0IHg9IjE0NSIgeT0iMjg0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5yw6lww6l0ZXIgNCBmb2lzIDogNCDDlyA5MMKwID0gMzYwwrA8L3RleHQ+PGxpbmUgeDE9IjM4MCIgeTE9IjIwMCIgeDI9IjUxOSIgeTI9IjIwMCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MzAsMjAwIDUxOSwxOTQuNSA1MTksMjA1LjUiIGZpbGw9IiMxYTdmNGIiLz48bGluZSB4MT0iNTMwIiB5MT0iMjAwIiB4Mj0iNDYwLjUiIHkyPSI3OS42MiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NTUsNzAuMSA0NTUuNzQsODIuMzcgNDY1LjI2LDc2Ljg3IiBmaWxsPSIjMWE3ZjRiIi8+PGxpbmUgeDE9IjQ1NSIgeTE9IjcwLjEiIHgyPSIzODUuNSIgeTI9IjE5MC40NyIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzODAsMjAwIDM5MC4yNiwxOTMuMjIgMzgwLjc0LDE4Ny43MiIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSIzODAiIHkxPSIyMDAiIHgyPSIzNTciIHkyPSIyMzkuODQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzODAgMjAwIEwgMzY4IDIyMC43OCBBIDI0IDI0IDAgMCAwIDQwNCAyMDAgWiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjIyIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNIDM2OCAyMjAuNzggQSAyNCAyNCAwIDAgMCA0MDQgMjAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQwMiIgeT0iMjQzLjExIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMjDCsDwvdGV4dD48bGluZSB4MT0iNTMwIiB5MT0iMjAwIiB4Mj0iNTc2IiB5Mj0iMjAwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNTMwIDIwMCBMIDU1NCAyMDAgQSAyNCAyNCAwIDAgMCA1MTggMTc5LjIyIFoiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4yMiIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTSA1NTQgMjAwIEEgMjQgMjQgMCAwIDAgNTE4IDE3OS4yMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI1NTIiIHk9IjE2Ni44OSIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTIwwrA8L3RleHQ+PGxpbmUgeDE9IjQ1NSIgeTE9IjcwLjEiIHgyPSI0MzIiIHkyPSIzMC4yNiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDQ1NSA3MC4xIEwgNDQzIDQ5LjMxIEEgMjQgMjQgMCAwIDAgNDQzIDkwLjg4IFoiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4yMiIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTSA0NDMgNDkuMzEgQSAyNCAyNCAwIDAgMCA0NDMgOTAuODgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNDExIiB5PSI3NS4xIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMjDCsDwvdGV4dD48dGV4dCB4PSI0NTUiIHk9IjI4NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+csOpcMOpdGVyIDMgZm9pcyA6IDMgw5cgMTIwwrAgPSAzNjDCsDwvdGV4dD48L3N2Zz4=)
*Pour revenir à son point de départ, le robot fait un tour complet : 4 virages de 90° pour le carré, 3 virages de 120° pour le triangle équilatéral.*
<!-- /schema -->

Un **paramètre**, c'est un nombre écrit dans une instruction : le $50$ de `avancer de 50`,
le $4$ de `répéter 4 fois`. Modifier un programme, c'est souvent ne changer que ça.

> **Exemple.** Reprends le programme du carré (§ 2.5). Pour tracer un **triangle
> équilatéral**, deux paramètres changent : `répéter 3 fois` et `tourner de 120°`.
>
> *Pourquoi $120$ ?* Le robot fait un tour complet, soit $360°$, réparti en $3$ virages
> identiques : $360 \div 3 = 120$. Pour le carré : $360 \div 4 = 90$ ✓

### Méthode 5 — Écrire une boucle

1. Repère la séquence qui **se répète à l'identique**.
2. Compte **combien de fois** elle revient.
3. Écris `répéter n fois`, puis place la séquence **à l'intérieur** du bloc.

> **Contrôle** : déroule mentalement le premier tour et le dernier. Si le dernier tour ajoute
> une instruction de trop (un dernier virage inutile, par exemple), c'est que le découpage
> n'est pas le bon.

---

## 4. Pièges de lecture

- **On lit strictement de haut en bas** : une instruction non atteinte ne fait rien.
- **Afficher n'est pas ranger** : `afficher a + 1` produit une sortie, `a` ne bouge pas.
- **Le décalage a un sens** : il dit ce qui est dans la boucle, donc ce qui est répété.
- **La machine ne simplifie pas** : elle applique les priorités à la lettre, sans deviner
  ton intention.
- **`répéter 4 fois` avec $2$ instructions dedans** exécute $4 \times 2 = 8$ instructions.

---

## 5. À retenir absolument

| | |
|---|---|
| Instruction | un ordre unique |
| Séquence | des instructions **dans un ordre**, lues de haut en bas |
| Entrée / sortie | ce que le programme **reçoit** / ce qu'il **produit** |
| Variable (en 5e) | un nom qui désigne une donnée saisie, qu'on **lit** |
| Expression informatique | une formule à plat, **parenthèses obligatoires** |
| Boucle inconditionnelle | `répéter n fois` — $n$ connu **à l'avance** |
| Instructions exécutées | (nombre de tours) $\times$ (instructions dans le bloc) |
| Angle de rotation | $360 \div (\text{nombre de côtés})$ |

---

## 6. Les erreurs qui coûtent des points

1. **Changer l'ordre des instructions** en croyant que ça ne change rien :
   $(3+2) \times 5 = 25$, mais $3 \times 5 + 2 = 17$.
2. **Oublier les parenthèses** en écrivant une fraction à plat : $\dfrac{a+b}{2}$ s'écrit
   `(a + b) / 2`, jamais `a + b / 2`.
3. **Calculer de gauche à droite** : la machine respecte les priorités,
   $4 + 3 \times 2 = 10$ et non $14$.
4. **Croire qu'afficher modifie une variable** : en 5e elle garde jusqu'au bout la valeur
   saisie.
5. **Compter les instructions écrites au lieu des instructions exécutées** : $4$ tours sur
   $2$ instructions en exécutent $8$. Et attention à ce qui est **hors** de la boucle : le
   décalage décide, pas le sens de la phrase.
6. **Confondre l'angle de la figure et l'angle du virage** : pour un triangle équilatéral, le
   robot tourne de $120°$, pas de $60°$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt — thème « La pensée informatique »,
introduction lignes 1071-1075, section « Cinquième » lignes 1076-1087 (seule source des
contenus), cadrage général lignes 302-321. Prérequis vérifiés dans
programme-college-cycle3-maths-2025.txt, section « Sixième » (lignes 1543-1552) :
instruction, séquence d'instructions, entrées, sorties, répétitions.

Les 7 objectifs de la section Cinquième sont tous couverts : séquencer des instructions →
1 et 2.1 · entrées et sorties → 2.2 · formule en expression informatique → 2.4 et méthode 2
· calculer une formule par une suite d'instructions → méthode 3 · prévoir la valeur avant
exécution → méthode 1 · modifier les paramètres d'un programme → méthode 4 · boucle
inconditionnelle → 2.5 et méthode 5. Variable « vue uniquement sous l'angle de la
manipulation en lecture d'une donnée saisie » → 2.3, volontairement restrictive.

⚠️ PÉRIMÈTRE — le point le plus sensible, à trancher par le relecteur.
La commande de production demandait le **test (instruction conditionnelle)** parmi les
notions clés. Le texte officiel le place en **Quatrième** (« Représenter des conditions
simples », « Écrire des instructions conditionnelles », lignes 1093-1094) et la boucle
conditionnelle en Troisième (ligne 1104) ; la section Cinquième ne mentionne aucune
condition. Le test n'est donc PAS traité ici, ni dans le QCM. Faut-il l'introduire quand
même ? Le dépistage du 2026-08-10 (docs/relecture.md) traite ce type d'ajout comme un écart.

⚠️ Même logique : écrire un programme en autonomie et modifier le *comportement* d'un
programme relèvent de la 4e. En 5e le texte ne demande que de modifier ses **paramètres**
(d'où la méthode 4, limitée aux valeurs numériques). Aucun accumulateur (compteur incrémenté
dans une boucle) n'apparaît nulle part : cela supposerait de modifier une variable.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le texte dit « langage de programmation par blocs » sans nommer Scratch (0 occurrence en
  cycle 4 ; le nom n'apparaît qu'en cycle 3, ligne 1539). La fiche ne nomme donc aucun
  logiciel et figure les blocs par du pseudo-code indenté (fiche et QCM) : à valider comme
  représentation acceptable d'un empilement de blocs. La syntaxe employée (`*`, `/`,
  `répéter n fois`, `fin répéter`) est une convention de rédaction, le programme n'en
  prescrit aucune : vérifier qu'elle ne heurte pas l'usage.
- Le tracé de polygone (carré, triangle) suppose l'angle de rotation **extérieur** et
  $360 \div n$ : cohérence à vérifier avec la progression de géométrie de 5e (QCM q. 7).
- « Prévoir la valeur d'une expression informatique » : le programme ne dit pas si les
  priorités opératoires sont réactivées à cette occasion. La fiche fait ce choix (2.4,
  erreurs 2 et 3) car c'est le point de contact direct avec le calcul de 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
-->
