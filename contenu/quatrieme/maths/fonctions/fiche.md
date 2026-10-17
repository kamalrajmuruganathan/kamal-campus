---
id: 4e-math-fonctions
titre: "Fonctions : programmes de calcul et dépendance"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Fonctions — dépendance entre deux grandeurs, « en fonction de » (5e)
  - Tableau de valeurs et lecture graphique (5e)
  - Calcul littéral — substituer, réduire, développer (5e puis 4e)
  - Priorités opératoires et enchaînements d'opérations (5e)
  - Opérations sur les nombres relatifs (4e)
statut: brouillon
relu_par: null
---

# Fonctions : programmes de calcul et dépendance

> En 5e, tu as appris à dire « le prix varie **en fonction du** nombre de séances ».
> Cette année, tu apprends à **écrire** cette dépendance : une suite d'instructions
> appliquée non plus à un nombre, mais à une **lettre**. Et surtout à faire le chemin
> **dans les deux sens** — du nombre de départ vers le résultat, et du résultat vers le
> nombre de départ.

---

## 1. La dépendance entre deux grandeurs

C'est le point de départ, déjà rencontré en 5e.

> **Définition.** Une grandeur dépend d'une autre — elle varie **en fonction d'**une
> autre — lorsque, dès qu'on connaît la première, on peut déterminer la seconde.

- La grandeur qu'on **choisit** s'appelle la **variable**.
- La grandeur qu'on **obtient** en dépend.

> **La condition à ne pas oublier.** À **chaque** valeur de la variable doit correspondre
> **une seule** valeur d'arrivée. Sinon, on n'a pas le droit de dire « en fonction de ».

En 4e, une nouveauté : cette dépendance, on la décrit avec **trois outils** qui disent la
même chose.

| Outil | Ce qu'il donne |
|---|---|
| Une **formule** | toutes les valeurs, exactement |
| Un **tableau de valeurs** | quelques valeurs, choisies |
| Un **graphique** | l'allure d'ensemble, d'un coup d'œil |

> **Exemple.** Une piscine facture $5$ € d'abonnement, puis $2$ € par séance. Le prix
> dépend du nombre de séances : la variable est le **nombre de séances**, la grandeur qui
> en dépend est le **prix**.

---

## 2. Appliquer un programme de calcul à un nombre

> **Définition.** Un **programme de calcul** est une suite d'instructions, exécutées
> **dans l'ordre**, à partir d'un nombre choisi au départ.

> **Programme A**
> 1. Choisis un nombre.
> 2. Multiplie-le par $3$.
> 3. Ajoute $4$.

> **Exemple.** Avec $5$ : $5 \times 3 = 15$, puis $15 + 4 = 19$. Le programme A renvoie
> $19$.

> **Exemple avec un relatif.** Avec $-4$ : $-4 \times 3 = -12$, puis $-12 + 4 = -8$.

> ⚠️ **Une étape à la fois, dans l'ordre écrit.** Chaque ligne travaille sur le résultat
> de la ligne précédente, jamais sur le nombre du départ.

---

## 3. Appliquer un programme de calcul à une variable

C'est le vrai saut de la 4e : au lieu d'un nombre, on met une **lettre**. Le programme
devient alors une **expression littérale**, valable pour tous les nombres à la fois.

> **Méthode.**
> 1. Note $x$ le nombre choisi.
> 2. Écris le résultat de chaque étape, l'un sous l'autre.
> 3. **Réduis** l'expression finale.

> **Exemple — programme A.**
>
> | Étape | Avec $5$ | Avec $x$ |
> |---|---|---|
> | Nombre choisi | $5$ | $x$ |
> | Multiplier par $3$ | $15$ | $3x$ |
> | Ajouter $4$ | $19$ | $3x + 4$ |
>
> Le programme A se résume donc à $\boxed{3x + 4}$.

> **Programme B**
> 1. Choisis un nombre.
> 2. Ajoute $2$.
> 3. Multiplie par $5$.
>
> Avec $x$ : après l'étape 2 on a $x + 2$ ; on multiplie **ce résultat entier** par $5$.
> $$5 \times (x + 2) = 5x + 10$$

> ⚠️ **Les parenthèses ne sont pas décoratives.** « Ajoute $2$ **puis** multiplie par
> $5$ » donne $5(x+2)$, c'est-à-dire $5x + 10$ — **pas** $5x + 2$. Contrôle avec $x = 3$ :
> le programme donne $3 + 2 = 5$ puis $5 \times 5 = 25$ ; et $5 \times 3 + 10 = 25$ ✓,
> alors que $5 \times 3 + 2 = 17$ ✗. Ce contrôle sur un nombre simple, fais-le
> systématiquement : le programme pas à pas et l'expression réduite doivent coïncider.

---

## 4. Nommer le résultat : l'écriture $P(x)$

Quand une grandeur dépend d'une autre, on peut lui donner un **nom** et écrire, entre
parenthèses, la valeur de la variable.

> **Notation.** Si le prix $P$ dépend du nombre $n$ de séances, on écrit :
> $$\boxed{P(n) = 5 + 2 \times n}$$
> et on lit « $P$ **de** $n$ ».

> **Exemple.** $P(3) = 5 + 2 \times 3 = 11$ : pour $3$ séances, le prix est de $11$ €.
> De même $P(0) = 5$ : sans aucune séance, on paie quand même l'abonnement.

On rencontre aussi la **flèche**, qui se lit « à … on associe … » :
$$n \longrightarrow 5 + 2 \times n$$

La lettre choisie rappelle en général la grandeur : $P$ pour un prix, $A$ pour une aire,
$t$ pour un temps.

> ⚠️ **$P(3)$ n'est PAS $P \times 3$.** Les parenthèses ne sont pas une multiplication
> ici : elles indiquent **quelle valeur on donne à la variable**. C'est l'erreur n°1 sur
> cette notation.

> **Exemple complet.** Le programme A de la section 2 donne un résultat $R$ qui dépend du
> nombre choisi $x$ : $R(x) = 3x + 4$. Alors $R(5) = 19$ et $R(-4) = -8$ — ce sont
> exactement les calculs déjà faits.

---

## 5. Remonter un programme de calcul

<!-- schema:aller-retour -->
![Le programme A fait × 3 puis + 4 ; pour le remonter depuis 19, on fait − 4 puis ÷ 3 et l’on retrouve 5.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTU4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxNTgiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxMzIiIHk9IjQ3IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5hbGxlcjwvdGV4dD48cmVjdCB4PSIxNTAiIHk9IjIyIiB3aWR0aD0iNzYiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTg4IiB5PSI0Ny42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj41PC90ZXh0PjxyZWN0IHg9IjMzNiIgeT0iMjIiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNzQiIHk9IjQ3LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE1PC90ZXh0PjxyZWN0IHg9IjUyMiIgeT0iMjIiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI1NjAiIHk9IjQ3LjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE5PC90ZXh0PjxsaW5lIHgxPSIyMzIiIHkxPSI0MiIgeDI9IjMyMCIgeTI9IjQyIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMzMCw0MiAzMjAsMzcgMzIwLDQ3IiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMjgxIiB5PSIzMyIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w5cgMzwvdGV4dD48bGluZSB4MT0iNDE4IiB5MT0iNDIiIHgyPSI1MDYiIHkyPSI0MiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MTYsNDIgNTA2LDM3IDUwNiw0NyIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjQ2NyIgeT0iMzMiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPisgNDwvdGV4dD48dGV4dCB4PSIxMzIiIHk9IjExMyIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+cmV0b3VyPC90ZXh0PjxyZWN0IHg9IjE1MCIgeT0iODgiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxODgiIHk9IjExMy42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj41PC90ZXh0PjxyZWN0IHg9IjMzNiIgeT0iODgiIHdpZHRoPSI3NiIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNzQiIHk9IjExMy42IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xNTwvdGV4dD48cmVjdCB4PSI1MjIiIHk9Ijg4IiB3aWR0aD0iNzYiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNTYwIiB5PSIxMTMuNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTk8L3RleHQ+PGxpbmUgeDE9IjMzMCIgeTE9IjEwOCIgeDI9IjI0MiIgeTI9IjEwOCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMzIsMTA4IDI0MiwxMTMgMjQyLDEwMyIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHg9IjI4MSIgeT0iOTkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPsO3IDM8L3RleHQ+PGxpbmUgeDE9IjUxNiIgeTE9IjEwOCIgeDI9IjQyOCIgeTI9IjEwOCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MTgsMTA4IDQyOCwxMTMgNDI4LDEwMyIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHg9IjQ2NyIgeT0iOTkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPuKIkiA0PC90ZXh0Pjwvc3ZnPg==)
*Le programme A fait × 3 puis + 4 ; pour le remonter depuis 19, on fait − 4 puis ÷ 3 et l’on retrouve 5.*
<!-- /schema -->

On connaît le résultat, on cherche **le nombre de départ**. On refait le chemin à
l'envers.

> **Méthode.**
> 1. Reprends les étapes **de la dernière vers la première**.
> 2. Remplace chaque opération par son **opération inverse**.
> 3. Applique-les au résultat connu.

| Opération de l'aller | Opération du retour |
|---|---|
| $+\,a$ | $-\,a$ |
| $-\,a$ | $+\,a$ |
| $\times\,a$ (avec $a \neq 0$) | $\div\,a$ |
| $\div\,a$ | $\times\,a$ |

> **Exemple — programme A ($\times 3$ puis $+4$), résultat $19$.**
> - Dernière étape à défaire : « ajouter $4$ » → $19 - 4 = 15$.
> - Étape précédente : « multiplier par $3$ » → $15 \div 3 = 5$.
>
> Le nombre de départ était $5$. **Vérification obligatoire** : $5 \times 3 + 4 = 19$ ✓

> **Exemple — programme B ($+2$ puis $\times 5$), résultat $40$.**
> - $40 \div 5 = 8$, puis $8 - 2 = 6$.
> - Vérification : $6 + 2 = 8$, $8 \times 5 = 40$ ✓

> ⚠️ **Deux choses s'inversent en même temps** : l'**ordre** des étapes *et* chaque
> **opération**. N'en inverser qu'une seule sur les deux donne un résultat faux.

Avec la notation de la section 4, cela revient à chercher le nombre $x$ tel que
$R(x) = 19$.

---

## 6. Produire une formule littérale

Ici, on part d'une **situation** décrite avec des mots, et on écrit la formule.

> **Méthode.**
> 1. Choisis une lettre pour la variable et **écris ce qu'elle représente**, avec son
>    unité.
> 2. Repère ce qui est **fixe** et ce qui **varie**.
> 3. Écris le calcul que tu ferais avec un nombre, puis remplace ce nombre par la lettre.
> 4. **Teste** la formule sur une valeur simple.

> **Exemple 1 — un forfait.** $8$ € par mois, plus $0{,}15$ € par minute d'appel. Soit $t$
> la durée d'appel en minutes et $C$ le coût en euros :
> $$\boxed{C(t) = 8 + 0{,}15\,t}$$
> Test avec $t = 20$ : $0{,}15 \times 20 = 3$, donc $C(20) = 11$ €. ✓

> **Exemple 2 — une aire.** Un rectangle a une largeur $\ell$ (en cm) et une longueur qui
> dépasse la largeur de $3$ cm. Son aire :
> $$\boxed{A(\ell) = \ell \times (\ell + 3)}$$
> Test avec $\ell = 4$ : longueur $7$ cm, aire $28$ cm². Et $4 \times 7 = 28$ ✓

> **Exemple 3 — un carré.** Aire d'un carré de côté $c$ : $\boxed{A(c) = c \times c}$.

> ⚠️ **Une formule sans phrase ne vaut rien.** « $C(t) = 8 + 0{,}15\,t$, où $t$ est la
> durée en minutes et $C$ le coût en euros » : c'est la phrase qui rend la formule
> lisible.

---

## 7. Représenter la dépendance par un graphique

<!-- schema:nuage-ou-courbe -->
![À gauche, le prix de la piscine : des points isolés qu’on ne relie pas. À droite, l’aire du carré : une courbe qui monte de plus en plus vite.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIyMzAiIHgyPSI1MCIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMi41IiB5MT0iMjMwIiB4Mj0iMTEyLjUiIHkyPSI0MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNzUiIHkxPSIyMzAiIHgyPSIxNzUiIHkyPSI0MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMzcuNSIgeTE9IjIzMCIgeDI9IjIzNy41IiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzAwIiB5MT0iMjMwIiB4Mj0iMzAwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSIyMzAiIHgyPSIzMDAiIHkyPSIyMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSIyMDYuMjUiIHgyPSIzMDAiIHkyPSIyMDYuMjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSIxODIuNSIgeDI9IjMwMCIgeTI9IjE4Mi41IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTU4Ljc1IiB4Mj0iMzAwIiB5Mj0iMTU4Ljc1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTM1IiB4Mj0iMzAwIiB5Mj0iMTM1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTExLjI1IiB4Mj0iMzAwIiB5Mj0iMTExLjI1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iODcuNSIgeDI9IjMwMCIgeTI9Ijg3LjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSI2My43NSIgeDI9IjMwMCIgeTI9IjYzLjc1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iNDAiIHgyPSIzMDAiIHkyPSI0MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjIzMCIgeDI9IjMwNyIgeTI9IjIzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMTYsMjMwIDMwNywyMjUuNSAzMDcsMjM0LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTAiIHkxPSIyMzAiIHgyPSI1MCIgeTI9IjMzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUwLDI0IDQ1LjUsMzMgNTQuNSwzMyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIxMTIuNSIgeTE9IjIyNiIgeDI9IjExMi41IiB5Mj0iMjM0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMTIuNSIgeT0iMjQ3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0PjxsaW5lIHgxPSIxNzUiIHkxPSIyMjYiIHgyPSIxNzUiIHkyPSIyMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE3NSIgeT0iMjQ3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0PjxsaW5lIHgxPSIyMzcuNSIgeTE9IjIyNiIgeDI9IjIzNy41IiB5Mj0iMjM0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMzcuNSIgeT0iMjQ3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0PjxsaW5lIHgxPSIzMDAiIHkxPSIyMjYiIHgyPSIzMDAiIHkyPSIyMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMwMCIgeT0iMjQ3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40PC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjE4Mi41IiB4Mj0iNTQiIHkyPSIxODIuNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDIiIHk9IjE4Ni41IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj40PC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjEzNSIgeDI9IjU0IiB5Mj0iMTM1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MiIgeT0iMTM5IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj44PC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9Ijg3LjUiIHgyPSI1NCIgeTI9Ijg3LjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSI5MS41IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4xMjwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSI0MCIgeDI9IjU0IiB5Mj0iNDAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSI0NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTY8L3RleHQ+PHRleHQgeD0iNDIiIHk9IjI0NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD48dGV4dCB4PSIzMTQiIHk9IjIyMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zdHlsZT0iaXRhbGljIj5uPC90ZXh0Pjx0ZXh0IHg9IjYwIiB5PSIzNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPlAobikgKOKCrCk8L3RleHQ+PGNpcmNsZSBjeD0iNTAiIGN5PSIxNzAuNjMiIHI9IjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIxMTIuNSIgY3k9IjE0Ni44OCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjE3NSIgY3k9IjEyMy4xMyIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjIzNy41IiBjeT0iOTkuMzgiIHI9IjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSI3NS42MyIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjE3NSIgeT0iMjY0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5QKG4pID0gNSArIDJuIDogb24gbmUgcmVsaWUgcGFzPC90ZXh0Pjx0ZXh0IHg9IjE3NSIgeT0iMjg0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oMiw1IHPDqWFuY2VzIG7igJlleGlzdGUgcGFzKTwvdGV4dD48bGluZSB4MT0iMzgwIiB5MT0iMjMwIiB4Mj0iMzgwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDQyLjUiIHkxPSIyMzAiIHgyPSI0NDIuNSIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwNSIgeTE9IjIzMCIgeDI9IjUwNSIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU2Ny41IiB5MT0iMjMwIiB4Mj0iNTY3LjUiIHkyPSI0MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MzAiIHkxPSIyMzAiIHgyPSI2MzAiIHkyPSI0MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzODAiIHkxPSIyMzAiIHgyPSI2MzAiIHkyPSIyMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzgwIiB5MT0iMjA2LjI1IiB4Mj0iNjMwIiB5Mj0iMjA2LjI1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjE4Mi41IiB4Mj0iNjMwIiB5Mj0iMTgyLjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzgwIiB5MT0iMTU4Ljc1IiB4Mj0iNjMwIiB5Mj0iMTU4Ljc1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjEzNSIgeDI9IjYzMCIgeTI9IjEzNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzODAiIHkxPSIxMTEuMjUiIHgyPSI2MzAiIHkyPSIxMTEuMjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzgwIiB5MT0iODcuNSIgeDI9IjYzMCIgeTI9Ijg3LjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzgwIiB5MT0iNjMuNzUiIHgyPSI2MzAiIHkyPSI2My43NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzODAiIHkxPSI0MCIgeDI9IjYzMCIgeTI9IjQwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjIzMCIgeDI9IjYzNyIgeTI9IjIzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2NDYsMjMwIDYzNywyMjUuNSA2MzcsMjM0LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iMzgwIiB5MT0iMjMwIiB4Mj0iMzgwIiB5Mj0iMzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzgwLDI0IDM3NS41LDMzIDM4NC41LDMzIiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjQ0Mi41IiB5MT0iMjI2IiB4Mj0iNDQyLjUiIHkyPSIyMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ0Mi41IiB5PSIyNDciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PGxpbmUgeDE9IjUwNSIgeTE9IjIyNiIgeDI9IjUwNSIgeTI9IjIzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTA1IiB5PSIyNDciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+PGxpbmUgeDE9IjU2Ny41IiB5MT0iMjI2IiB4Mj0iNTY3LjUiIHkyPSIyMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU2Ny41IiB5PSIyNDciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjM8L3RleHQ+PGxpbmUgeDE9IjYzMCIgeTE9IjIyNiIgeDI9IjYzMCIgeTI9IjIzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjMwIiB5PSIyNDciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+PGxpbmUgeDE9IjM3NiIgeTE9IjE4Mi41IiB4Mj0iMzg0IiB5Mj0iMTgyLjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM3MiIgeT0iMTg2LjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQ8L3RleHQ+PGxpbmUgeDE9IjM3NiIgeTE9IjEzNSIgeDI9IjM4NCIgeTI9IjEzNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzcyIiB5PSIxMzkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjg8L3RleHQ+PGxpbmUgeDE9IjM3NiIgeTE9Ijg3LjUiIHgyPSIzODQiIHkyPSI4Ny41IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzIiIHk9IjkxLjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjEyPC90ZXh0PjxsaW5lIHgxPSIzNzYiIHkxPSI0MCIgeDI9IjM4NCIgeTI9IjQwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzIiIHk9IjQ0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4xNjwvdGV4dD48dGV4dCB4PSIzNzIiIHk9IjI0NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD48dGV4dCB4PSI2NDQiIHk9IjIyMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zdHlsZT0iaXRhbGljIj5jPC90ZXh0Pjx0ZXh0IHg9IjM5MCIgeT0iMzQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1zdHlsZT0iaXRhbGljIj5BKGMpIChjbcKyKTwvdGV4dD48cGF0aCBkPSJNIDM4MCAyMzAgTCAzODEuMDQgMjMwIEwgMzgyLjA4IDIyOS45OSBMIDM4My4xMyAyMjkuOTcgTCAzODQuMTcgMjI5Ljk1IEwgMzg1LjIxIDIyOS45MiBMIDM4Ni4yNSAyMjkuODggTCAzODcuMjkgMjI5Ljg0IEwgMzg4LjMzIDIyOS43OSBMIDM4OS4zOCAyMjkuNzMgTCAzOTAuNDIgMjI5LjY3IEwgMzkxLjQ2IDIyOS42IEwgMzkyLjUgMjI5LjUzIEwgMzkzLjU0IDIyOS40NCBMIDM5NC41OCAyMjkuMzUgTCAzOTUuNjMgMjI5LjI2IEwgMzk2LjY3IDIyOS4xNiBMIDM5Ny43MSAyMjkuMDUgTCAzOTguNzUgMjI4LjkzIEwgMzk5Ljc5IDIyOC44MSBMIDQwMC44MyAyMjguNjggTCA0MDEuODggMjI4LjU1IEwgNDAyLjkyIDIyOC40IEwgNDAzLjk2IDIyOC4yNiBMIDQwNSAyMjguMSBMIDQwNi4wNCAyMjcuOTQgTCA0MDcuMDggMjI3Ljc3IEwgNDA4LjEzIDIyNy42IEwgNDA5LjE3IDIyNy40MSBMIDQxMC4yMSAyMjcuMjMgTCA0MTEuMjUgMjI3LjAzIEwgNDEyLjI5IDIyNi44MyBMIDQxMy4zMyAyMjYuNjIgTCA0MTQuMzggMjI2LjQxIEwgNDE1LjQyIDIyNi4xOSBMIDQxNi40NiAyMjUuOTYgTCA0MTcuNSAyMjUuNzMgTCA0MTguNTQgMjI1LjQ4IEwgNDE5LjU4IDIyNS4yNCBMIDQyMC42MyAyMjQuOTggTCA0MjEuNjcgMjI0LjcyIEwgNDIyLjcxIDIyNC40NiBMIDQyMy43NSAyMjQuMTggTCA0MjQuNzkgMjIzLjkgTCA0MjUuODMgMjIzLjYxIEwgNDI2Ljg4IDIyMy4zMiBMIDQyNy45MiAyMjMuMDIgTCA0MjguOTYgMjIyLjcxIEwgNDMwIDIyMi40IEwgNDMxLjA0IDIyMi4wOCBMIDQzMi4wOCAyMjEuNzUgTCA0MzMuMTMgMjIxLjQyIEwgNDM0LjE3IDIyMS4wOCBMIDQzNS4yMSAyMjAuNzMgTCA0MzYuMjUgMjIwLjM4IEwgNDM3LjI5IDIyMC4wMiBMIDQzOC4zMyAyMTkuNjYgTCA0MzkuMzggMjE5LjI4IEwgNDQwLjQyIDIxOC45IEwgNDQxLjQ2IDIxOC41MiBMIDQ0Mi41IDIxOC4xMyBMIDQ0My41NCAyMTcuNzMgTCA0NDQuNTggMjE3LjMyIEwgNDQ1LjYzIDIxNi45MSBMIDQ0Ni42NyAyMTYuNDkgTCA0NDcuNzEgMjE2LjA2IEwgNDQ4Ljc1IDIxNS42MyBMIDQ0OS43OSAyMTUuMTkgTCA0NTAuODMgMjE0Ljc1IEwgNDUxLjg4IDIxNC4zIEwgNDUyLjkyIDIxMy44NCBMIDQ1My45NiAyMTMuMzcgTCA0NTUgMjEyLjkgTCA0NTYuMDQgMjEyLjQyIEwgNDU3LjA4IDIxMS45NCBMIDQ1OC4xMyAyMTEuNDUgTCA0NTkuMTcgMjEwLjk1IEwgNDYwLjIxIDIxMC40NCBMIDQ2MS4yNSAyMDkuOTMgTCA0NjIuMjkgMjA5LjQxIEwgNDYzLjMzIDIwOC44OSBMIDQ2NC4zOCAyMDguMzYgTCA0NjUuNDIgMjA3LjgyIEwgNDY2LjQ2IDIwNy4yOCBMIDQ2Ny41IDIwNi43MyBMIDQ2OC41NCAyMDYuMTcgTCA0NjkuNTggMjA1LjYgTCA0NzAuNjMgMjA1LjAzIEwgNDcxLjY3IDIwNC40NiBMIDQ3Mi43MSAyMDMuODcgTCA0NzMuNzUgMjAzLjI4IEwgNDc0Ljc5IDIwMi42OCBMIDQ3NS44MyAyMDIuMDggTCA0NzYuODggMjAxLjQ3IEwgNDc3LjkyIDIwMC44NSBMIDQ3OC45NiAyMDAuMjMgTCA0ODAgMTk5LjYgTCA0ODEuMDQgMTk4Ljk2IEwgNDgyLjA4IDE5OC4zMiBMIDQ4My4xMyAxOTcuNjcgTCA0ODQuMTcgMTk3LjAxIEwgNDg1LjIxIDE5Ni4zNSBMIDQ4Ni4yNSAxOTUuNjggTCA0ODcuMjkgMTk1LjAxIEwgNDg4LjMzIDE5NC4zMiBMIDQ4OS4zOCAxOTMuNjMgTCA0OTAuNDIgMTkyLjk0IEwgNDkxLjQ2IDE5Mi4yMyBMIDQ5Mi41IDE5MS41MyBMIDQ5My41NCAxOTAuODEgTCA0OTQuNTggMTkwLjA5IEwgNDk1LjYzIDE4OS4zNiBMIDQ5Ni42NyAxODguNjIgTCA0OTcuNzEgMTg3Ljg4IEwgNDk4Ljc1IDE4Ny4xMyBMIDQ5OS43OSAxODYuMzggTCA1MDAuODMgMTg1LjYxIEwgNTAxLjg4IDE4NC44NSBMIDUwMi45MiAxODQuMDcgTCA1MDMuOTYgMTgzLjI5IEwgNTA1IDE4Mi41IEwgNTA2LjA0IDE4MS43MSBMIDUwNy4wOCAxODAuOSBMIDUwOC4xMyAxODAuMSBMIDUwOS4xNyAxNzkuMjggTCA1MTAuMjEgMTc4LjQ2IEwgNTExLjI1IDE3Ny42MyBMIDUxMi4yOSAxNzYuOCBMIDUxMy4zMyAxNzUuOTYgTCA1MTQuMzggMTc1LjExIEwgNTE1LjQyIDE3NC4yNSBMIDUxNi40NiAxNzMuMzkgTCA1MTcuNSAxNzIuNTIgTCA1MTguNTQgMTcxLjY1IEwgNTE5LjU4IDE3MC43NyBMIDUyMC42MyAxNjkuODggTCA1MjEuNjcgMTY4Ljk5IEwgNTIyLjcxIDE2OC4wOSBMIDUyMy43NSAxNjcuMTggTCA1MjQuNzkgMTY2LjI3IEwgNTI1LjgzIDE2NS4zNSBMIDUyNi44OCAxNjQuNDIgTCA1MjcuOTIgMTYzLjQ5IEwgNTI4Ljk2IDE2Mi41NSBMIDUzMCAxNjEuNiBMIDUzMS4wNCAxNjAuNjUgTCA1MzIuMDggMTU5LjY5IEwgNTMzLjEzIDE1OC43MiBMIDUzNC4xNyAxNTcuNzUgTCA1MzUuMjEgMTU2Ljc3IEwgNTM2LjI1IDE1NS43OCBMIDUzNy4yOSAxNTQuNzkgTCA1MzguMzMgMTUzLjc5IEwgNTM5LjM4IDE1Mi43OCBMIDU0MC40MiAxNTEuNzcgTCA1NDEuNDYgMTUwLjc1IEwgNTQyLjUgMTQ5LjczIEwgNTQzLjU0IDE0OC42OSBMIDU0NC41OCAxNDcuNjUgTCA1NDUuNjMgMTQ2LjYxIEwgNTQ2LjY3IDE0NS41NiBMIDU0Ny43MSAxNDQuNSBMIDU0OC43NSAxNDMuNDMgTCA1NDkuNzkgMTQyLjM2IEwgNTUwLjgzIDE0MS4yOCBMIDU1MS44OCAxNDAuMiBMIDU1Mi45MiAxMzkuMSBMIDU1My45NiAxMzguMDEgTCA1NTUgMTM2LjkgTCA1NTYuMDQgMTM1Ljc5IEwgNTU3LjA4IDEzNC42NyBMIDU1OC4xMyAxMzMuNTUgTCA1NTkuMTcgMTMyLjQxIEwgNTYwLjIxIDEzMS4yOCBMIDU2MS4yNSAxMzAuMTMgTCA1NjIuMjkgMTI4Ljk4IEwgNTYzLjMzIDEyNy44MiBMIDU2NC4zOCAxMjYuNjYgTCA1NjUuNDIgMTI1LjQ5IEwgNTY2LjQ2IDEyNC4zMSBMIDU2Ny41IDEyMy4xMyBMIDU2OC41NCAxMjEuOTMgTCA1NjkuNTggMTIwLjc0IEwgNTcwLjYzIDExOS41MyBMIDU3MS42NyAxMTguMzIgTCA1NzIuNzEgMTE3LjExIEwgNTczLjc1IDExNS44OCBMIDU3NC43OSAxMTQuNjUgTCA1NzUuODMgMTEzLjQxIEwgNTc2Ljg4IDExMi4xNyBMIDU3Ny45MiAxMTAuOTIgTCA1NzguOTYgMTA5LjY2IEwgNTgwIDEwOC40IEwgNTgxLjA0IDEwNy4xMyBMIDU4Mi4wOCAxMDUuODUgTCA1ODMuMTMgMTA0LjU3IEwgNTg0LjE3IDEwMy4yOCBMIDU4NS4yMSAxMDEuOTggTCA1ODYuMjUgMTAwLjY4IEwgNTg3LjI5IDk5LjM3IEwgNTg4LjMzIDk4LjA2IEwgNTg5LjM4IDk2LjczIEwgNTkwLjQyIDk1LjQgTCA1OTEuNDYgOTQuMDcgTCA1OTIuNSA5Mi43MyBMIDU5My41NCA5MS4zOCBMIDU5NC41OCA5MC4wMiBMIDU5NS42MyA4OC42NiBMIDU5Ni42NyA4Ny4yOSBMIDU5Ny43MSA4NS45MSBMIDU5OC43NSA4NC41MyBMIDU5OS43OSA4My4xNCBMIDYwMC44MyA4MS43NSBMIDYwMS44OCA4MC4zNSBMIDYwMi45MiA3OC45NCBMIDYwMy45NiA3Ny41MiBMIDYwNSA3Ni4xIEwgNjA2LjA0IDc0LjY3IEwgNjA3LjA4IDczLjI0IEwgNjA4LjEzIDcxLjggTCA2MDkuMTcgNzAuMzUgTCA2MTAuMjEgNjguODkgTCA2MTEuMjUgNjcuNDMgTCA2MTIuMjkgNjUuOTYgTCA2MTMuMzMgNjQuNDkgTCA2MTQuMzggNjMuMDEgTCA2MTUuNDIgNjEuNTIgTCA2MTYuNDYgNjAuMDMgTCA2MTcuNSA1OC41MyBMIDYxOC41NCA1Ny4wMiBMIDYxOS41OCA1NS41IEwgNjIwLjYzIDUzLjk4IEwgNjIxLjY3IDUyLjQ2IEwgNjIyLjcxIDUwLjkyIEwgNjIzLjc1IDQ5LjM4IEwgNjI0Ljc5IDQ3LjgzIEwgNjI1LjgzIDQ2LjI4IEwgNjI2Ljg4IDQ0LjcyIEwgNjI3LjkyIDQzLjE1IEwgNjI4Ljk2IDQxLjU4IEwgNjMwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGNpcmNsZSBjeD0iMzgwIiBjeT0iMjMwIiByPSI1IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iNDQyLjUiIGN5PSIyMTguMTMiIHI9IjUiIGZpbGw9IiNjMjVlMDAiLz48Y2lyY2xlIGN4PSI1MDUiIGN5PSIxODIuNSIgcj0iNSIgZmlsbD0iI2MyNWUwMCIvPjxjaXJjbGUgY3g9IjU2Ny41IiBjeT0iMTIzLjEzIiByPSI1IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iNjMwIiBjeT0iNDAiIHI9IjUiIGZpbGw9IiNjMjVlMDAiLz48dGV4dCB4PSI1MDUiIHk9IjI2NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QShjKSA9IGMgw5cgYyA6IG9uIHJlbGllPC90ZXh0Pjx0ZXh0IHg9IjUwNSIgeT0iMjg0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4odW4gY8O0dMOpIGRlIDIsNSBjbSBhIHVuIHNlbnMpPC90ZXh0Pjwvc3ZnPg==)
*À gauche, le prix de la piscine : des points isolés qu’on ne relie pas. À droite, l’aire du carré : une courbe qui monte de plus en plus vite.*
<!-- /schema -->

> **Méthode.**
> 1. Construis un **tableau de valeurs** à partir de la formule.
> 2. Trace un repère : **horizontal** = la variable, **vertical** = la grandeur qui en
>    dépend. Nomme les axes, indique les **unités**.
> 3. Place les points de coordonnées (valeur de la variable ; valeur obtenue).
> 4. Relie — ou non.

> **Exemple 1 — le prix de la piscine, $P(n) = 5 + 2n$.**
>
> | Séances $n$ | 0 | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|---|
> | Prix $P(n)$ (€) | 5 | 7 | 9 | 11 | 13 |
>
> Points : $(0\,;5)$, $(1\,;7)$, $(2\,;9)$, $(3\,;11)$, $(4\,;13)$. Ils sont **alignés**,
> mais on ne les relie **pas** : $2{,}5$ séances n'existe pas. C'est un **nuage de
> points**.

> **Exemple 2 — l'aire du carré, $A(c) = c \times c$.**
>
> | Côté $c$ (cm) | 0 | 1 | 2 | 3 | 4 |
> |---|---|---|---|---|---|
> | Aire $A(c)$ (cm²) | 0 | 1 | 4 | 9 | 16 |
>
> Ici on **relie** : un côté de $2{,}5$ cm a un sens. Les points ne sont **pas alignés**,
> la représentation est une **courbe** qui monte de plus en plus vite.

> **La lecture inverse.** Lire sur un graphique le nombre de départ à partir du résultat,
> c'est la version graphique de la section 5 : on part de l'axe **vertical**, on rejoint
> la courbe, puis on **descend** vers l'axe horizontal.

---

## 8. Les pièges de calcul

- **Priorités opératoires.** Dans $5 + 2n$ avec $n = 3$, on calcule $2 \times 3 = 6$
  **puis** $5 + 6 = 11$. Jamais $5 + 2 = 7$ puis $7 \times 3$.
- **Substituer un nombre négatif : mets des parenthèses.** Dans $3x + 4$ avec $x = -4$,
  on écrit $3 \times (-4) + 4$.
- **Le carré d'un négatif est positif.** Programme « multiplie le nombre par lui-même » :
  avec $-3$ on obtient $(-3) \times (-3) = 9$, et non $-9$.
- **Un seul essai ne prouve rien.** Les programmes « $\times 3$ puis $+4$ » et
  « $\times 2$ puis $+4$ » donnent tous les deux $4$ pour le nombre $0$ — et pourtant
  $3x + 4$ et $2x + 4$ ne sont pas la même expression. Pour prouver que deux programmes
  sont identiques, il faut **réduire les deux expressions littérales** et les comparer.
- **Multiplier par $0$ efface tout.** Un tel programme ne se remonte pas : tous les
  nombres de départ donnent $0$, et on ne pourra jamais retrouver lequel — c'est pour cela
  que le tableau des opérations inverses exige $a \neq 0$.

---

## 9. À retenir absolument

| | |
|---|---|
| Variable | la grandeur qu'on **choisit** |
| Condition | une seule valeur d'arrivée par valeur de départ |
| Trois outils | formule · tableau de valeurs · graphique |
| Programme de calcul | des étapes exécutées **dans l'ordre** |
| Appliqué à une lettre | on obtient une **expression littérale**, valable pour tous les nombres |
| « Ajoute $2$ puis $\times 5$ » | $5(x + 2) = 5x + 10$ — parenthèses **obligatoires** |
| Notation | $P(n)$ se lit « $P$ de $n$ » — **pas** $P \times n$ |
| Flèche | $n \longrightarrow 5 + 2n$ : « à $n$ on associe $5 + 2n$ » |
| Remonter | ordre **inversé** *et* opérations **inversées** |
| Toujours | **vérifier** en refaisant le programme à l'endroit |
| Graphique | horizontal = variable ; on relie seulement si l'entre-deux a un sens |

---

## 10. Les erreurs qui coûtent des points

1. **Oublier les parenthèses en traduisant un programme.** « Ajoute $2$, multiplie par
   $5$ » donne $5(x+2)$. Écrire $5x + 2$ change complètement le programme : c'est
   l'erreur la plus fréquente du chapitre.
2. **Lire $P(3)$ comme une multiplication.** $P(3)$ est le résultat obtenu **pour**
   $n = 3$. Écrire $P(3) = 3P$ n'a aucun sens.
3. **Remonter en ne changeant que l'ordre**, ou en ne changeant que les opérations. Les
   **deux** s'inversent. Le réflexe qui sauve : recalculer le programme à l'endroit avec
   le nombre trouvé.
4. **Substituer un relatif sans parenthèses** : $3 \times -4$ s'écrit $3 \times (-4)$, et
   $(-3)^2 = 9$ alors que $-3^2 = -9$.
5. **Conclure que deux programmes sont les mêmes après un seul essai.** Un exemple ne
   démontre rien ; seule la comparaison des expressions réduites le fait.
6. **Relier les points quand les valeurs intermédiaires n'existent pas** (nombre de
   séances, nombre d'objets), ou oublier de nommer les axes et leurs unités.
