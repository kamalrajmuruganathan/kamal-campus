---
id: 4e-math-statistiques
titre: "Statistiques : moyenne pondérée, médiane, étendue"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Effectifs, fréquences et moyenne simple (5e)
  - Tableaux d'effectifs, diagrammes en barres et circulaires (5e)
  - Ranger des nombres décimaux dans l'ordre croissant (6e)
statut: brouillon
relu_par: null
---

# Statistiques : moyenne pondérée, médiane, étendue

> Une série de données ne se raconte pas valeur par valeur : on la **résume**. Tu apprends
> cette année trois nombres pour le faire — et surtout qu'aucun ne suffit tout seul.

---

## 1. Ce que tu sais déjà

Tout vient de la 5e — relis la fiche **« Statistiques » (5e)** si un mot te manque :
**effectif**, **effectif total**, **fréquence** ($\frac{\text{effectif}}{\text{effectif total}}$),
**moyenne simple**, et les représentations (tableau, diagrammes, graphique). Trois calculs
doivent devenir **automatiques** cette année :

> - une moyenne sur très peu de valeurs, de tête : $\dfrac{6+8+10}{3} = 8$ ;
> - un **effectif manquant** : si le total vaut $25$ et que les effectifs connus font
>   $4+7+8+1 = 20$, il manque $25-20 = 5$ ;
> - une **fréquence simple** : $6$ sur $24$, c'est $\dfrac{6}{24} = 0{,}25 = 25\ \%$.

---

## 2. Trois indicateurs, trois questions

| Indicateur | La question à laquelle il répond | Condition |
|---|---|---|
| **Moyenne pondérée** | *et si on répartissait tout également ?* | effectif total non nul |
| **Médiane** | *quelle valeur coupe la série en deux moitiés ?* | série **rangée** |
| **Étendue** | *les données sont-elles resserrées ou dispersées ?* | au moins une valeur |

---

## 3. La moyenne pondérée

Quand une valeur apparaît plusieurs fois, elle doit **peser** autant de fois. C'est ce que
veut dire « pondérée » : chaque valeur est multipliée par son effectif.

$$\boxed{\text{moyenne} = \frac{\text{somme des } (\text{valeur} \times \text{effectif})}{\text{effectif total}}}$$

### À partir d'un tableau

> **Exemple.** Livres lus pendant les vacances par $25$ élèves.
>
> | Livres lus | $0$ | $1$ | $2$ | $3$ | $5$ | **Total** |
> |---|---|---|---|---|---|---|
> | **Effectif** | $4$ | $7$ | $8$ | $5$ | $1$ | $25$ |
>
> $\text{moyenne} = \dfrac{0 \times 4 + 1 \times 7 + 2 \times 8 + 3 \times 5 + 5 \times 1}{25}
> = \dfrac{43}{25} = 1{,}72$ livre par élève.

> **Le contrôle qui sauve** : la moyenne est toujours **entre la plus petite et la plus
> grande valeur**. Ici entre $0$ et $5$ : $1{,}72$ passe le test. Si tu trouves $8{,}6$,
> c'est que tu as divisé par $5$ (le nombre de colonnes) au lieu de $25$.

### À partir de données brutes

Même calcul, mais commence par **construire le tableau d'effectifs**.

> **Exemple.** $7$ ; $9$ ; $7$ ; $12$ ; $9$ ; $7$ ; $10$ ; $9$ ; $7$ ; $12$ → effectifs $4$
> pour $7$, $3$ pour $9$, $1$ pour $10$, $2$ pour $12$ (total $10$), d'où
> $\text{moyenne} = \dfrac{28 + 27 + 10 + 24}{10} = 8{,}9$.

### À partir d'un diagramme en barres

Un diagramme en barres est un tableau d'effectifs dessiné : **la hauteur d'une barre est
l'effectif** de la valeur écrite dessous. Lis les hauteurs, recopie un tableau, applique la
formule — ne calcule jamais sur le dessin.

> ⚠️ L'**effectif total** n'est pas écrit sur un diagramme : tu dois **additionner toutes
> les hauteurs** pour l'obtenir.

---

## 4. La médiane

<!-- schema:mediane -->
![Avec 7 valeurs rangées, la médiane est la 4e, 11 ; avec 8 valeurs, c’est la demi-somme des deux valeurs centrales, ici 10.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyMCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+NyB2YWxldXJzIChpbXBhaXIpPC90ZXh0PjxyZWN0IHg9IjEzNSIgeT0iNDIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxNTgiIHk9IjY2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjg8L3RleHQ+PHJlY3QgeD0iMTg5IiB5PSI0MiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjIxMiIgeT0iNjYuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD48cmVjdCB4PSIyNDMiIHk9IjQyIiB3aWR0aD0iNDYiIGhlaWdodD0iMzgiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjY2IiB5PSI2Ni42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PjxyZWN0IHg9IjI5NyIgeT0iNDIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZGU3Y2YiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzMjAiIHk9IjY2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjExPC90ZXh0PjxyZWN0IHg9IjM1MSIgeT0iNDIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNzQiIHk9IjY2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0PjxyZWN0IHg9IjQwNSIgeT0iNDIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0MjgiIHk9IjY2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0PC90ZXh0PjxyZWN0IHg9IjQ1OSIgeT0iNDIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0ODIiIHk9IjY2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE1PC90ZXh0PjxwYXRoIGQ9Ik0gMTM1IDg2IFEgMTM1IDk2IDE0NSA5NiBMIDIwMiA5NiBRIDIxMiA5NiAyMTIgMTA2IFEgMjEyIDk2IDIyMiA5NiBMIDI3OSA5NiBRIDI4OSA5NiAyODkgODYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDM1MSA4NiBRIDM1MSA5NiAzNjEgOTYgTCA0MTggOTYgUSA0MjggOTYgNDI4IDEwNiBRIDQyOCA5NiA0MzggOTYgTCA0OTUgOTYgUSA1MDUgOTYgNTA1IDg2IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMjE2IiB5PSIxMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMgdmFsZXVyczwvdGV4dD48dGV4dCB4PSI0MzIiIHk9IjEyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MyB2YWxldXJzPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMTI0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5tw6lkaWFuZSA9IDExPC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+OCB2YWxldXJzIChwYWlyKTwvdGV4dD48cmVjdCB4PSIxMDgiIHk9IjE3MiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjEzMSIgeT0iMTk2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjY8L3RleHQ+PHJlY3QgeD0iMTYyIiB5PSIxNzIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxODUiIHk9IjE5Ni42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44PC90ZXh0PjxyZWN0IHg9IjIxNiIgeT0iMTcyIiB3aWR0aD0iNDYiIGhlaWdodD0iMzgiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjM5IiB5PSIxOTYuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD48cmVjdCB4PSIyNzAiIHk9IjE3MiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2ZkZTdjZiIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI5MyIgeT0iMTk2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjk8L3RleHQ+PHJlY3QgeD0iMzI0IiB5PSIxNzIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZGU3Y2YiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNDciIHk9IjE5Ni42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMTwvdGV4dD48cmVjdCB4PSIzNzgiIHk9IjE3MiIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjM4IiByeD0iOCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjQwMSIgeT0iMTk2LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0PjxyZWN0IHg9IjQzMiIgeT0iMTcyIiB3aWR0aD0iNDYiIGhlaWdodD0iMzgiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDU1IiB5PSIxOTYuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTQ8L3RleHQ+PHJlY3QgeD0iNDg2IiB5PSIxNzIiIHdpZHRoPSI0NiIgaGVpZ2h0PSIzOCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI1MDkiIHk9IjE5Ni42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNTwvdGV4dD48bGluZSB4MT0iMzIwIiB5MT0iMTY2IiB4Mj0iMzIwIiB5Mj0iMjE2IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMjAiIHk9IjI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bcOpZGlhbmUgPSAoOSArIDExKSDDtyAyID0gMTA8L3RleHQ+PC9zdmc+)
*Avec 7 valeurs rangées, la médiane est la 4e, 11 ; avec 8 valeurs, c’est la demi-somme des deux valeurs centrales, ici 10.*
<!-- /schema -->

> **Définition.** La médiane d'une série rangée dans l'**ordre croissant** est une valeur
> qui partage la série en **deux groupes de même effectif** : autant de données en dessous
> qu'au-dessus. Donc on **range d'abord**, toujours.

### Effectif impair : la valeur du milieu

> **Exemple.** $12$ ; $8$ ; $15$ ; $9$ ; $14$ ; $8$ ; $11$ — soit $7$ valeurs.
> Rangées : $8$ ; $8$ ; $9$ ; $\mathbf{11}$ ; $12$ ; $14$ ; $15$.
> $3$ valeurs avant, $3$ après : **médiane $= 11$**. Avec $n$ impair, elle occupe le rang
> $\dfrac{n+1}{2}$, ici $\dfrac{7+1}{2} = 4$.

### Effectif pair : deux valeurs au milieu

On prend la **demi-somme des deux valeurs centrales**.

> **Exemple.** On ajoute $6$, soit $8$ valeurs : $6$ ; $8$ ; $8$ ; $\mathbf{9}$ ;
> $\mathbf{11}$ ; $12$ ; $14$ ; $15$. Médiane $= \dfrac{9 + 11}{2} = 10$.

### Interpréter une médiane

> Médiane $= 11$ sur un contrôle signifie : **la moitié de la classe au moins a eu $11$ ou
> moins, l'autre moitié $11$ ou plus.** ⚠️ La médiane **ne se calcule pas, elle se repère** :
> c'est une position dans la liste rangée, pas une somme. Ce n'est pas la moyenne.

---

## 5. L'étendue

C'est l'indicateur de **dispersion** : il dit sur quelle largeur les données s'étalent.

$$\boxed{\text{étendue} = \text{plus grande valeur} - \text{plus petite valeur}}$$

> **Exemples.** Sur $8$ ; $8$ ; $9$ ; $11$ ; $12$ ; $14$ ; $15$ : $15 - 8 = 7$. Sur le
> tableau des livres lus, les valeurs vont de $0$ à $5$ : étendue $= 5$ livres.

> **Sur un diagramme en barres ou circulaire**, tu lis les **valeurs présentes**, pas les
> hauteurs ni les angles. Le plus gros secteur du diagramme des livres est celui de
> « $2$ livres », mais l'étendue reste $5 - 0 = 5$ : les effectifs n'y entrent pas.

> **Interpréter.** Deux séries de moyenne $10$ : $9$ ; $10$ ; $10$ ; $10$ ; $11$ a une
> étendue de $2$ (notes resserrées), $2$ ; $6$ ; $10$ ; $14$ ; $18$ une étendue de $16$
> (notes très dispersées). ⚠️ L'étendue est **un nombre**, avec l'unité des données, et elle
> ne regarde que les **deux extrêmes** : une donnée bizarre suffit à la faire exploser.

---

## 6. Quand on ajoute une valeur extrême

<!-- schema:valeur-extreme -->
![En ajoutant la valeur 20, la moyenne passe de 10 à environ 11,7, alors que la médiane ne passe que de 10 à 10,5.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjg4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyODgiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTIwIiB5MT0iODAiIHgyPSI2MTAiIHkyPSI4MCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEyMCIgeTE9Ijc3IiB4Mj0iMTIwIiB5Mj0iODMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMjAiIHk9Ijk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42PC90ZXh0PjxsaW5lIHgxPSIxNTAuNjMiIHkxPSI3NyIgeDI9IjE1MC42MyIgeTI9IjgzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4MS4yNSIgeTE9Ijc3IiB4Mj0iMTgxLjI1IiB5Mj0iODMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxODEuMjUiIHk9Ijk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44PC90ZXh0PjxsaW5lIHgxPSIyMTEuODgiIHkxPSI3NyIgeDI9IjIxMS44OCIgeTI9IjgzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI0Mi41IiB5MT0iNzciIHgyPSIyNDIuNSIgeTI9IjgzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjQyLjUiIHk9Ijk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDwvdGV4dD48bGluZSB4MT0iMjczLjEzIiB5MT0iNzciIHgyPSIyNzMuMTMiIHkyPSI4MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMDMuNzUiIHkxPSI3NyIgeDI9IjMwMy43NSIgeTI9IjgzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAzLjc1IiB5PSI5NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PGxpbmUgeDE9IjMzNC4zOCIgeTE9Ijc3IiB4Mj0iMzM0LjM4IiB5Mj0iODMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzY1IiB5MT0iNzciIHgyPSIzNjUiIHkyPSI4MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM2NSIgeT0iOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0PC90ZXh0PjxsaW5lIHgxPSIzOTUuNjMiIHkxPSI3NyIgeDI9IjM5NS42MyIgeTI9IjgzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyNi4yNSIgeTE9Ijc3IiB4Mj0iNDI2LjI1IiB5Mj0iODMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MjYuMjUiIHk9Ijk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNjwvdGV4dD48bGluZSB4MT0iNDU2Ljg4IiB5MT0iNzciIHgyPSI0NTYuODgiIHkyPSI4MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0ODcuNSIgeTE9Ijc3IiB4Mj0iNDg3LjUiIHkyPSI4MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4Ny41IiB5PSI5NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTg8L3RleHQ+PGxpbmUgeDE9IjUxOC4xMyIgeTE9Ijc3IiB4Mj0iNTE4LjEzIiB5Mj0iODMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTQ4Ljc1IiB5MT0iNzciIHgyPSI1NDguNzUiIHkyPSI4MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU0OC43NSIgeT0iOTciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwPC90ZXh0PjxsaW5lIHgxPSI1NzkuMzgiIHkxPSI3NyIgeDI9IjU3OS4zOCIgeTI9IjgzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYxMCIgeTE9Ijc3IiB4Mj0iNjEwIiB5Mj0iODMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MTAiIHk9Ijk3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMjwvdGV4dD48Y2lyY2xlIGN4PSIxODEuMjUiIGN5PSI3MCIgcj0iNiIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjIxMS44OCIgY3k9IjcwIiByPSI2IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMjQyLjUiIGN5PSI3MCIgcj0iNiIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjI3My4xMyIgY3k9IjcwIiByPSI2IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMzAzLjc1IiBjeT0iNzAiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIxMDYiIHk9Ijc0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5Ew6lwYXJ0PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMjQyLjUsMTAyIDIzNS41LDExNCAyNDkuNSwxMTQiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCB4PSIyNDIuNSIgeT0iMTMwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5tb3llbm5lIDEwPC90ZXh0PjxsaW5lIHgxPSIyNDIuNSIgeTE9IjQwIiB4Mj0iMjQyLjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyNDIuNSIgeT0iMzYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm3DqWRpYW5lIDEwPC90ZXh0PjxsaW5lIHgxPSIxMjAiIHkxPSIyMTIiIHgyPSI2MTAiIHkyPSIyMTIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMjAiIHkxPSIyMDkiIHgyPSIxMjAiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMjAiIHk9IjIyOSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD48bGluZSB4MT0iMTUwLjYzIiB5MT0iMjA5IiB4Mj0iMTUwLjYzIiB5Mj0iMjE1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4MS4yNSIgeTE9IjIwOSIgeDI9IjE4MS4yNSIgeTI9IjIxNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE4MS4yNSIgeT0iMjI5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44PC90ZXh0PjxsaW5lIHgxPSIyMTEuODgiIHkxPSIyMDkiIHgyPSIyMTEuODgiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjQyLjUiIHkxPSIyMDkiIHgyPSIyNDIuNSIgeTI9IjIxNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI0Mi41IiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSIyNzMuMTMiIHkxPSIyMDkiIHgyPSIyNzMuMTMiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzAzLjc1IiB5MT0iMjA5IiB4Mj0iMzAzLjc1IiB5Mj0iMjE1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAzLjc1IiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0PjxsaW5lIHgxPSIzMzQuMzgiIHkxPSIyMDkiIHgyPSIzMzQuMzgiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzY1IiB5MT0iMjA5IiB4Mj0iMzY1IiB5Mj0iMjE1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzY1IiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0PC90ZXh0PjxsaW5lIHgxPSIzOTUuNjMiIHkxPSIyMDkiIHgyPSIzOTUuNjMiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDI2LjI1IiB5MT0iMjA5IiB4Mj0iNDI2LjI1IiB5Mj0iMjE1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDI2LjI1IiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE2PC90ZXh0PjxsaW5lIHgxPSI0NTYuODgiIHkxPSIyMDkiIHgyPSI0NTYuODgiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDg3LjUiIHkxPSIyMDkiIHgyPSI0ODcuNSIgeTI9IjIxNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4Ny41IiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE4PC90ZXh0PjxsaW5lIHgxPSI1MTguMTMiIHkxPSIyMDkiIHgyPSI1MTguMTMiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTQ4Ljc1IiB5MT0iMjA5IiB4Mj0iNTQ4Ljc1IiB5Mj0iMjE1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTQ4Ljc1IiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwPC90ZXh0PjxsaW5lIHgxPSI1NzkuMzgiIHkxPSIyMDkiIHgyPSI1NzkuMzgiIHkyPSIyMTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjEwIiB5MT0iMjA5IiB4Mj0iNjEwIiB5Mj0iMjE1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjEwIiB5PSIyMjkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIyPC90ZXh0PjxjaXJjbGUgY3g9IjE4MS4yNSIgY3k9IjIwMiIgcj0iNiIgZmlsbD0iI2MyNWUwMCIvPjxjaXJjbGUgY3g9IjIxMS44OCIgY3k9IjIwMiIgcj0iNiIgZmlsbD0iI2MyNWUwMCIvPjxjaXJjbGUgY3g9IjI0Mi41IiBjeT0iMjAyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iMjczLjEzIiBjeT0iMjAyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iMzAzLjc1IiBjeT0iMjAyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iNTQ4Ljc1IiBjeT0iMjAyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iMTA2IiB5PSIyMDYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPkF2ZWMgMjA8L3RleHQ+PHBvbHlnb24gcG9pbnRzPSIyOTMuNTQsMjM0IDI4Ni41NCwyNDYgMzAwLjU0LDI0NiIgZmlsbD0iI2MwMmEyYSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjx0ZXh0IHg9IjI5My41NCIgeT0iMjYyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5tb3llbm5lIOKJiCAxMSw3PC90ZXh0PjxsaW5lIHgxPSIyNTcuODEiIHkxPSIxNzIiIHgyPSIyNTcuODEiIHkyPSIxOTAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMjU3LjgxIiB5PSIxNjgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm3DqWRpYW5lIDEwLDU8L3RleHQ+PC9zdmc+)
*En ajoutant la valeur 20, la moyenne passe de 10 à environ 11,7, alors que la médiane ne passe que de 10 à 10,5.*
<!-- /schema -->

L'expérience à connaître par cœur : **la moyenne bouge beaucoup, la médiane presque pas.**

> **Départ.** $8$ ; $9$ ; $10$ ; $11$ ; $12$ → moyenne $= \dfrac{50}{5} = 10$, médiane
> $= 10$, étendue $= 4$. **On ajoute $20$** → moyenne $= \dfrac{70}{6} \approx 11{,}7$,
> médiane $= \dfrac{10+11}{2} = 10{,}5$, étendue $= 12$.

| Indicateur | Avant | Après | Variation |
|---|---|---|---|
| Moyenne | $10$ | $\approx 11{,}7$ | $+1{,}7$ — **forte** |
| Médiane | $10$ | $10{,}5$ | $+0{,}5$ — faible |
| Étendue | $4$ | $12$ | $\times 3$ — **énorme** |

> **Pourquoi.** La moyenne fait entrer le $20$ dans une **somme** : elle en subit tout le
> poids. La médiane ne regarde qu'une **position** : que la dernière valeur soit $20$ ou
> $200$ ne change rien. Une série avec une valeur très à l'écart ? La médiane la décrit mieux.

---

## 7. Comparer deux séries

<!-- schema:comparer-series -->
![Les classes A et B ont la même moyenne et la même médiane, mais pas la même étendue : A est resserrée, B est très dispersée.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjU4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNTgiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTIwIiB5MT0iNzAiIHgyPSI2MTAiIHkyPSI3MCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEyMCIgeTE9IjY3IiB4Mj0iMTIwIiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMjAiIHk9Ijg3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxsaW5lIHgxPSIxNDQuNSIgeTE9IjY3IiB4Mj0iMTQ0LjUiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjkiIHkxPSI2NyIgeDI9IjE2OSIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTY5IiB5PSI4NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD48bGluZSB4MT0iMTkzLjUiIHkxPSI2NyIgeDI9IjE5My41IiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjE4IiB5MT0iNjciIHgyPSIyMTgiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIxOCIgeT0iODciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+PGxpbmUgeDE9IjI0Mi41IiB5MT0iNjciIHgyPSIyNDIuNSIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI2NyIgeTE9IjY3IiB4Mj0iMjY3IiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNjciIHk9Ijg3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42PC90ZXh0PjxsaW5lIHgxPSIyOTEuNSIgeTE9IjY3IiB4Mj0iMjkxLjUiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMTYiIHkxPSI2NyIgeDI9IjMxNiIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzE2IiB5PSI4NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD48bGluZSB4MT0iMzQwLjUiIHkxPSI2NyIgeDI9IjM0MC41IiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzY1IiB5MT0iNjciIHgyPSIzNjUiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM2NSIgeT0iODciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSIzODkuNSIgeTE9IjY3IiB4Mj0iMzg5LjUiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MTQiIHkxPSI2NyIgeDI9IjQxNCIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDE0IiB5PSI4NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PGxpbmUgeDE9IjQzOC41IiB5MT0iNjciIHgyPSI0MzguNSIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2MyIgeTE9IjY3IiB4Mj0iNDYzIiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0NjMiIHk9Ijg3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNDwvdGV4dD48bGluZSB4MT0iNDg3LjUiIHkxPSI2NyIgeDI9IjQ4Ny41IiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTEyIiB5MT0iNjciIHgyPSI1MTIiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUxMiIgeT0iODciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE2PC90ZXh0PjxsaW5lIHgxPSI1MzYuNSIgeTE9IjY3IiB4Mj0iNTM2LjUiIHkyPSI3MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NjEiIHkxPSI2NyIgeDI9IjU2MSIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYxIiB5PSI4NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTg8L3RleHQ+PGxpbmUgeDE9IjU4NS41IiB5MT0iNjciIHgyPSI1ODUuNSIgeTI9IjczIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYxMCIgeTE9IjY3IiB4Mj0iNjEwIiB5Mj0iNzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MTAiIHk9Ijg3IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48Y2lyY2xlIGN4PSIzNDAuNSIgY3k9IjYwIiByPSI2IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMzY1IiBjeT0iNjAiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIzNjUiIGN5PSI0NiIgcj0iNiIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjM2NSIgY3k9IjMyIiByPSI2IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMzg5LjUiIGN5PSI2MCIgcj0iNiIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjEwNiIgeT0iNjQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPkNsYXNzZSBBPC90ZXh0PjxwYXRoIGQ9Ik0gMzQwLjUgOTggTCAzNDAuNSAxMDQgTCAzODkuNSAxMDQgTCAzODkuNSA5OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzNjUiIHk9IjEyMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w6l0ZW5kdWUgMjwvdGV4dD48bGluZSB4MT0iMTIwIiB5MT0iMTYyIiB4Mj0iNjEwIiB5Mj0iMTYyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTIwIiB5MT0iMTU5IiB4Mj0iMTIwIiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTIwIiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGxpbmUgeDE9IjE0NC41IiB5MT0iMTU5IiB4Mj0iMTQ0LjUiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTY5IiB5MT0iMTU5IiB4Mj0iMTY5IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTY5IiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+PGxpbmUgeDE9IjE5My41IiB5MT0iMTU5IiB4Mj0iMTkzLjUiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjE4IiB5MT0iMTU5IiB4Mj0iMjE4IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjE4IiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+PGxpbmUgeDE9IjI0Mi41IiB5MT0iMTU5IiB4Mj0iMjQyLjUiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjY3IiB5MT0iMTU5IiB4Mj0iMjY3IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjY3IiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjY8L3RleHQ+PGxpbmUgeDE9IjI5MS41IiB5MT0iMTU5IiB4Mj0iMjkxLjUiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzE2IiB5MT0iMTU5IiB4Mj0iMzE2IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzE2IiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjg8L3RleHQ+PGxpbmUgeDE9IjM0MC41IiB5MT0iMTU5IiB4Mj0iMzQwLjUiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzY1IiB5MT0iMTU5IiB4Mj0iMzY1IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzY1IiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSIzODkuNSIgeTE9IjE1OSIgeDI9IjM4OS41IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQxNCIgeTE9IjE1OSIgeDI9IjQxNCIgeTI9IjE2NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQxNCIgeT0iMTc5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMjwvdGV4dD48bGluZSB4MT0iNDM4LjUiIHkxPSIxNTkiIHgyPSI0MzguNSIgeTI9IjE2NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NjMiIHkxPSIxNTkiIHgyPSI0NjMiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0NjMiIHk9IjE3OSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTQ8L3RleHQ+PGxpbmUgeDE9IjQ4Ny41IiB5MT0iMTU5IiB4Mj0iNDg3LjUiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTEyIiB5MT0iMTU5IiB4Mj0iNTEyIiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTEyIiB5PSIxNzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE2PC90ZXh0PjxsaW5lIHgxPSI1MzYuNSIgeTE9IjE1OSIgeDI9IjUzNi41IiB5Mj0iMTY1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU2MSIgeTE9IjE1OSIgeDI9IjU2MSIgeTI9IjE2NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU2MSIgeT0iMTc5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xODwvdGV4dD48bGluZSB4MT0iNTg1LjUiIHkxPSIxNTkiIHgyPSI1ODUuNSIgeTI9IjE2NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MTAiIHkxPSIxNTkiIHgyPSI2MTAiIHkyPSIxNjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MTAiIHk9IjE3OSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjA8L3RleHQ+PGNpcmNsZSBjeD0iMTY5IiBjeT0iMTUyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iMjY3IiBjeT0iMTUyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iMzY1IiBjeT0iMTUyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iNDYzIiBjeT0iMTUyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iNTYxIiBjeT0iMTUyIiByPSI2IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iMTA2IiB5PSIxNTYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPkNsYXNzZSBCPC90ZXh0PjxwYXRoIGQ9Ik0gMTY5IDE5MCBMIDE2OSAxOTYgTCA1NjEgMTk2IEwgNTYxIDE5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzNjUiIHk9IjIxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w6l0ZW5kdWUgMTY8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIyMzQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm3Dqm1lIG1veWVubmUgKDEwKSwgbcOqbWUgbcOpZGlhbmUgKDEwKTwvdGV4dD48L3N2Zz4=)
*Les classes A et B ont la même moyenne et la même médiane, mais pas la même étendue : A est resserrée, B est très dispersée.*
<!-- /schema -->

On prend l'indicateur qui répond à la question posée, et souvent **plusieurs**.

> **Exemple.** Classe **A** : $9$ ; $10$ ; $10$ ; $10$ ; $11$ — moyenne $10$, médiane $10$,
> étendue $2$. Classe **B** : $2$ ; $6$ ; $10$ ; $14$ ; $18$ — moyenne $10$, médiane $10$,
> étendue $16$. Même moyenne, même médiane, et pourtant rien à voir : seule l'**étendue**
> les distingue. A est homogène, B est éclatée.

| La question | L'indicateur |
|---|---|
| Quel est le niveau général ? | moyenne |
| Quelle valeur coupe le groupe en deux ? | médiane |
| Le groupe est-il homogène ? | étendue |
| Une valeur fausse-t-elle le tableau ? | comparer moyenne **et** médiane |

> ⚠️ Deux séries d'**effectifs différents** se comparent quand même : moyenne, médiane et
> étendue ne dépendent pas de la taille du groupe. Ce sont les **effectifs bruts** qui ne se
> comparent pas — pour eux, passe par les fréquences (vu en 5e).

---

## 8. Au tableur

| Ce que tu veux | La formule |
|---|---|
| Moyenne des cellules $A1$ à $A20$ | `=MOYENNE(A1:A20)` |
| Médiane | `=MEDIANE(A1:A20)` |
| Étendue | `=MAX(A1:A20)-MIN(A1:A20)` |

> ⚠️ Il n'existe **pas** de fonction « ÉTENDUE » : on la fabrique avec `MAX` et `MIN`. Et le
> tableur range les données tout seul pour la médiane — à la main, non.

---

## 9. Les pièges de calcul

| Situation | Le piège | Le bon geste |
|---|---|---|
| Moyenne depuis un tableau | diviser par le nombre de colonnes | diviser par l'**effectif total** |
| Médiane | chercher le milieu de la liste **non rangée** | ranger d'abord |
| Médiane, effectif pair | garder une seule valeur centrale | en faire la **demi-somme** |
| Médiane | oublier les valeurs **répétées** | $8$ ; $8$ compte pour deux données |
| Étendue | soustraire les deux effectifs extrêmes | soustraire les deux **valeurs** extrêmes |

---

## 10. À retenir absolument

| | |
|---|---|
| Moyenne pondérée | $\dfrac{\text{somme des }(\text{valeur}\times\text{effectif})}{\text{effectif total}}$ |
| Contrôle de la moyenne | comprise entre la plus petite et la plus grande valeur |
| Médiane | partage la série **rangée** en deux groupes de même effectif |
| Médiane, $n$ impair | la valeur de rang $\dfrac{n+1}{2}$ |
| Médiane, $n$ pair | demi-somme des deux valeurs centrales |
| Étendue | plus grande valeur $-$ plus petite valeur |
| Ce que mesure l'étendue | la **dispersion**, pas le niveau |
| Valeur extrême ajoutée | la moyenne bouge beaucoup, la médiane très peu |
| Tableur | `=MOYENNE()` · `=MEDIANE()` · `=MAX()-MIN()` |

---

## 11. Les erreurs qui coûtent des points

1. **Chercher la médiane sans ranger la série.** L'erreur n°1 de l'année.
2. **Prendre la valeur de gauche quand l'effectif est pair** : avec $9$ et $11$, c'est $10$.
3. **Confondre valeur et effectif dans l'étendue** : $5-0=5$ livres, pas $8-1=7$ élèves.
4. **Diviser par le nombre de valeurs distinctes** au lieu de l'effectif total.
5. **Juger une série sur la seule moyenne** : regarde aussi la médiane et l'étendue.
6. **Croire qu'une valeur extrême décale la médiane autant que la moyenne.** Non : la
   médiane est une position, elle encaisse à peine.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : docs/programme-college-cycle4-maths-2026.txt — chapeau du thème
« Organisation et gestion de données et probabilités » l. 861-885 (partie statistiques du
chapeau : l. 861-872) ; section « Quatrième » / « Statistiques » l. 918-935 (automatismes
920-923, objectifs 924-933, prolongements 934-935).

CHAPITRE CRÉÉ LE 2026-08-12. Premier chapitre du niveau 4e du dépôt.

Couverture, item par item — tout ce que contient la section est traité, rien d'autre.
Automatismes (l. 920-923) → § 1 (fréquence seulement rappelée : traitée en entier en 5e).
Objectifs (l. 924-933) : moyenne pondérée en données brutes / tableau / diagramme en barres
→ § 3 (les TROIS formes, dans l'ordre du texte) ; médiane + interprétation → § 4 ; étendue +
interprétation en données brutes / tableau / diagramme en barres / diagramme circulaire → § 5
(les QUATRE formes) ; ajout d'une valeur extrême → § 6 ; problèmes avec les différents
indicateurs et comparaison de séries → § 7 ; tableur → § 8. Chapeau (l. 863-872) : « esprit
critique [...] présentations trompeuses » → § 6 et § 7 ; « tableur » → § 8.

PÉRIMÈTRE — EXCLU car relevant de la 3e (l. 947-958) : quartiles, effectifs cumulés
croissants, boites à moustache, médiane depuis un tableau d'effectifs ou un diagramme.
L'ÉTENDUE, elle, est bien un objectif de 4e (l. 928-929) : traitée.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :

1. MÉDIANE, EFFECTIF PAIR. Le texte dit « déterminer UNE médiane » : au sens strict, toute
   valeur entre les deux centrales partage la série en deux. La fiche enseigne la convention
   de la demi-somme (§ 4). Faut-il dire à l'élève que c'est une convention ?

2. MÉDIANE LIMITÉE AUX DONNÉES BRUTES. Le texte de 4e la restreint aux séries « présentée[s]
   sous forme de données brutes » ; la médiane depuis un tableau d'effectifs n'apparait qu'en
   3e. La fiche s'y tient — plus strict que beaucoup de progressions. À confirmer.

3. SENS DE « PONDÉRÉE ». Les formes de présentation citées par le texte imposent des poids
   = EFFECTIFS. La fiche ne traite donc PAS la moyenne à coefficients (« devoir coefficient
   3 »), pourtant l'acception courante du mot. À trancher.

4. ARTICULATION AVEC LA 5e. La fiche 5e traite déjà le calcul « valeur × effectif » sous le
   nom de moyenne simple ; la 4e le renomme moyenne pondérée. Le § 3 assume ce recouvrement
   et insiste sur les trois formes de présentation. Progression lisible ?

5. DATE DU BO, comme pour toutes les fiches du cycle 4 (voir la note de la fiche 5e). Et
   FORMULES TABLEUR en français (MOYENNE, MEDIANE, MAX, MIN) : à aligner sur l'outil de la
   classe.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
