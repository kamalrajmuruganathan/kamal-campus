---
id: tale-compl-math-probabilites-bayes-binomiale
titre: "Probabilités : conditionnelles, Bayes et loi binomiale"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 15
prerequis:
  - Probabilités, événements et arbres pondérés (Première)
  - Union, intersection et événement contraire (Seconde)
  - Puissances et calcul fractionnaire (Seconde)
statut: brouillon
relu_par: null
---

# Probabilités : conditionnelles, Bayes et loi binomiale

> Un test médical est positif : quelle est vraiment la probabilité d'être
> malade ? Une chaîne produit 200 pièces : combien seront défectueuses ? Ces deux
> questions se règlent avec les mêmes outils — **probabilité conditionnelle**,
> **arbre pondéré**, **formule de Bayes** d'un côté, **loi binomiale** de l'autre.
> Ce chapitre les relie.

---

## 1. Probabilité conditionnelle

### Définition

La **probabilité conditionnelle** de $B$ **sachant** $A$ est la probabilité que $B$
se réalise quand on sait déjà que $A$ est réalisé. On la note $P_A(B)$ (ou $P(B \mid A)$) :

$$\boxed{P_A(B) = \frac{P(A \cap B)}{P(A)}} \qquad \text{définie pour } P(A) \neq 0$$

> **Exemple.** Dans une classe, $60\,\%$ des élèves font de l'anglais ($A$) et
> $24\,\%$ font de l'anglais **et** de l'espagnol ($A \cap B$). Parmi les anglicistes, la
> proportion d'hispanophones est
> $$P_A(B) = \frac{0{,}24}{0{,}60} = 0{,}4.$$

### Propriété — probabilité d'une intersection

En multipliant en croix, on obtient la formule qui fait « descendre » un arbre :

$$\boxed{P(A \cap B) = P(A) \times P_A(B)}$$

> **Exemple.** Une urne contient $5$ boules dont $2$ gagnantes. On tire deux boules
> **sans remise**. Probabilité de tirer deux gagnantes :
> $$P(G_1 \cap G_2) = P(G_1) \times P_{G_1}(G_2) = \frac{2}{5} \times \frac{1}{4} = \frac{1}{10}.$$

### Cas de l'indépendance

$A$ et $B$ sont **indépendants** lorsque la réalisation de $A$ ne change pas la
probabilité de $B$ : $P_A(B) = P(B)$. La formule d'intersection devient alors le
simple produit $P(A \cap B) = P(A) \times P(B)$.

> ⚠️ **Indépendant $\neq$ incompatible.** Deux événements incompatibles
> ($A \cap B = \varnothing$) de probabilités non nulles ne sont **jamais**
> indépendants : si l'un se produit, l'autre devient impossible.

---

## 2. Arbre pondéré

<!-- schema:arbre-machines-70-30 -->
![Arbre des deux machines : le chemin « machine A puis défaut » vaut 0,70 × 0,02 = 0,014 ; avec le chemin par B (0,015), on obtient P(D) = 0,029.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzQiIHkxPSIxMzAiIHgyPSIxNjQiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iOTkiIHk9Ijk1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDcwPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iODEiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9Ijc2IiB4Mj0iMzE0IiB5Mj0iNDkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iNTQuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCwwMjwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjU0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9IjM2MCIgeT0iNTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+UChBIOKIqSBEKSA9IDAsNzAgw5cgMCwwMiA9IDAsMDE0PC90ZXh0PjxsaW5lIHgxPSIxOTYiIHkxPSI3NiIgeDI9IjMxNCIgeTI9IjEwMyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSIxMDYuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCw5ODwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjEwOCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkQ8L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iMzQiIHkxPSIxMzAiIHgyPSIxNjQiIHkyPSIxODQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijk5IiB5PSIxNzQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsMzA8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSIxODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPkI8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9IjE4NCIgeDI9IjMxNCIgeTI9IjE1NyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSIxNjIuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCwwNTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjE2MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+RDwvdGV4dD48dGV4dCB4PSIzNjAiIHk9IjE2MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QKEIg4oipIEQpID0gMCwzMCDDlyAwLDA1ID0gMCwwMTU8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9IjE4NCIgeDI9IjMxNCIgeTI9IjIxMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSIyMTQuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCw5NTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjIxNiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkQ8L3RzcGFuPjwvdGV4dD48L3N2Zz4=)
*Arbre des deux machines : le chemin « machine A puis défaut » vaut 0,70 × 0,02 = 0,014 ; avec le chemin par B (0,015), on obtient P(D) = 0,029.*
<!-- /schema -->

Un **arbre pondéré** organise une expérience en étapes. Chaque branche porte une
probabilité ; les branches issues d'un même nœud portent des probabilités **qui se
somment à $1$**.

Trois règles de lecture :

1. **Le long d'un chemin, on multiplie.** La probabilité d'un chemin est le produit
   des probabilités de ses branches — c'est exactement $P(A \cap B) = P(A)\,P_A(B)$.
2. **Une branche de 2e niveau est une probabilité conditionnelle** : la branche
   « $B$ après $A$ » vaut $P_A(B)$.
3. **Pour un événement atteint par plusieurs chemins, on additionne** les chemins.

> **Exemple.** Deux machines produisent des pièces. La machine $A$ fabrique $70\,\%$
> des pièces, avec $2\,\%$ de défauts ; la machine $B$ les $30\,\%$ restants, avec
> $5\,\%$ de défauts. Le chemin « machine $A$ puis défaut $D$ » vaut
> $P(A \cap D) = 0{,}70 \times 0{,}02 = 0{,}014$.

---

## 3. Formule des probabilités totales

### Propriété

Si les événements $A_1, A_2, \dots, A_n$ forment une **partition** de l'univers
(deux à deux incompatibles, de réunion l'univers, de probabilités non nulles), alors
pour tout événement $B$ :

$$\boxed{P(B) = P(A_1 \cap B) + \dots + P(A_n \cap B) = \sum_{i=1}^{n} P(A_i)\,P_{A_i}(B)}$$

Dans l'arbre, cela revient à **additionner tous les chemins qui mènent à $B$**.

> **Exemple (suite).** Probabilité qu'une pièce prise au hasard soit défectueuse :
> $$P(D) = P(A)P_A(D) + P(B)P_B(D) = 0{,}70 \times 0{,}02 + 0{,}30 \times 0{,}05 = 0{,}014 + 0{,}015 = 0{,}029.$$

> **Cas le plus fréquent : la partition $A$ / $\overline{A}$.** Un événement et son
> contraire forment toujours une partition, d'où
> $$P(B) = P(A)\,P_A(B) + P(\overline{A})\,P_{\overline{A}}(B).$$

---

## 4. Formule de Bayes

### Le problème : « inverser » le conditionnement

<!-- schema:bayes-inverser -->
![Formule de Bayes : sachant qu’une pièce est défectueuse, elle vient de A avec la probabilité 0,014 ÷ 0,029 ≈ 0,48, alors que A produit 70 % des pièces.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMTcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIxNzAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyODAiIHk9IjI2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5QYXJtaSBsZXMgcGnDqGNlcyBkw6lmZWN0dWV1c2VzIChQKEQpID0gMCwwMjkpIDo8L3RleHQ+PHJlY3QgeD0iNjAiIHk9IjUwIiB3aWR0aD0iMjEyLjQxIiBoZWlnaHQ9IjU0IiByeD0iMCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cmVjdCB4PSIyNzIuNDEiIHk9IjUwIiB3aWR0aD0iMjI3LjU5IiBoZWlnaHQ9IjU0IiByeD0iMCIgZmlsbD0iI2MwMmEyYSIgZmlsbC1vcGFjaXR5PSIwLjI1IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTY2LjIxIiB5PSI3NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+dmVuYW50IGRlIEE8L3RleHQ+PHRleHQgeD0iMTY2LjIxIiB5PSI5NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCwwMTQ8L3RleHQ+PHRleHQgeD0iMzg2LjIxIiB5PSI3NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+dmVuYW50IGRlIEI8L3RleHQ+PHRleHQgeD0iMzg2LjIxIiB5PSI5NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCwwMTU8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPlA8dHNwYW4gZm9udC1zaXplPSIxMS41MiIgZHk9IjQuOCI+RDwvdHNwYW4+PHRzcGFuIGR5PSItNC44Ij7igIs8L3RzcGFuPihBKSA9IDAsMDE0IMO3IDAsMDI5IOKJiCAwLDQ4PC90ZXh0Pjwvc3ZnPg==)
*Formule de Bayes : sachant qu’une pièce est défectueuse, elle vient de A avec la probabilité 0,014 ÷ 0,029 ≈ 0,48, alors que A produit 70 % des pièces.*
<!-- /schema -->

L'arbre donne facilement $P_A(D)$ (défaut **sachant** la machine). Bayes répond à la
question inverse : une pièce est défectueuse, **de quelle machine vient-elle**,
c'est-à-dire $P_D(A)$ ?

### Propriété

$$\boxed{P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)\,P_A(B)}{P(B)}}$$

où $P(B)$ se calcule, au besoin, par la **formule des probabilités totales**. C'est
la clé : on descend l'arbre pour obtenir $P(B)$, puis on remonte.

> **Exemple (dépistage).** Une maladie touche $2\,\%$ d'une population ($M$). Le test
> est positif ($T$) dans $95\,\%$ des cas quand on est malade et dans $1\,\%$ des cas
> quand on est sain. Une personne est testée positive : quelle est la probabilité
> qu'elle soit malade ?
> $$P(T) = P(M)P_M(T) + P(\overline{M})P_{\overline{M}}(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}01 = 0{,}0288.$$
> $$P_T(M) = \frac{P(M)\,P_M(T)}{P(T)} = \frac{0{,}02 \times 0{,}95}{0{,}0288} = \frac{0{,}019}{0{,}0288} \approx 0{,}66.$$
> Un positif n'a « que » $66\,\%$ de chances d'être malade : la maladie étant rare,
> les faux positifs pèsent lourd. C'est le résultat contre-intuitif classique.

---

## 5. Épreuve et loi de Bernoulli

### Définition

Une **épreuve de Bernoulli** est une expérience à **deux issues** seulement : le
**succès** $S$, de probabilité $p$, et l'**échec** $\overline{S}$, de probabilité
$1 - p$.

La **loi de Bernoulli** de paramètre $p$ est la loi de la variable $X$ qui vaut $1$
en cas de succès et $0$ en cas d'échec :

$$\boxed{P(X = 1) = p \qquad P(X = 0) = 1 - p} \qquad 0 \leqslant p \leqslant 1$$

Son espérance est $E(X) = 1 \times p + 0 \times (1 - p) = p$.

> **Exemple.** « Obtenir un $6$ » avec un dé équilibré : succès de probabilité
> $p = \tfrac{1}{6}$, échec de probabilité $\tfrac{5}{6}$.

> **Le succès, c'est toi qui le choisis** : simplement l'issue qui t'intéresse. Une
> fois fixé, $p$ ne s'échange plus avec $1 - p$.

---

## 6. Schéma de Bernoulli

### Définition

Un **schéma de Bernoulli** est la **répétition de $n$ épreuves de Bernoulli
identiques et indépendantes**, toutes de même paramètre $p$.

> **Trois conditions à vérifier :**
> 1. chaque épreuve n'a que **deux issues** (succès / échec) ;
> 2. les épreuves sont **indépendantes** ;
> 3. la probabilité de succès $p$ est **la même** à chaque épreuve.

> **Exemple.** Lancer $12$ fois une pièce truquée qui tombe sur Pile avec
> $p = 0{,}3$ (succès = Pile) : schéma de Bernoulli de paramètres $n = 12$ et
> $p = 0{,}3$.

### Probabilité d'un chemin à $k$ succès

Dans l'arbre, un chemin donnant $k$ succès et $n - k$ échecs a pour probabilité

$$p^{\,k}\,(1 - p)^{\,n-k}$$

quel que soit l'**ordre** des succès (on multiplie les branches, le produit ne
dépend pas de l'ordre).

---

## 7. Loi binomiale $B(n, p)$

### Définition

On répète un schéma de Bernoulli de paramètres $n$ et $p$. La variable $X$ qui compte
le **nombre de succès** parmi les $n$ épreuves suit la **loi binomiale** de paramètres
$n$ et $p$, notée $X \sim B(n, p)$. Elle prend les valeurs entières de $0$ à $n$.

### Propriété — expression de $P(X = k)$

$$\boxed{P(X = k) = \binom{n}{k}\,p^{\,k}\,(1 - p)^{\,n-k}} \qquad 0 \leqslant k \leqslant n$$

Les trois morceaux :

- $\dbinom{n}{k}$ = **nombre de chemins** donnant $k$ succès (façons de placer les $k$
  succès parmi les $n$ épreuves) ;
- $p^{\,k}$ = probabilité des $k$ succès d'un chemin ; $(1-p)^{\,n-k}$ = celle des
  $n - k$ échecs.

Le coefficient $\dbinom{n}{k}$ (« $k$ parmi $n$ ») se lit à la calculatrice ; pour de
petites valeurs, $\dbinom{n}{0} = \dbinom{n}{n} = 1$ et $\dbinom{n}{1} = n$.

> **Exemple.** Pièce équilibrée lancée $n = 4$ fois, succès = Pile, $p = \tfrac12$.
> $$P(X = 2) = \binom{4}{2}\left(\tfrac12\right)^2\left(\tfrac12\right)^2 = 6 \times \frac{1}{16} = \frac{3}{8}.$$
> Le $6 = \binom{4}{2}$ compte les $6$ façons de placer les deux Piles.

### Espérance de la loi binomiale

$$\boxed{E(X) = np}$$

C'est le **nombre moyen de succès** attendu sur $n$ épreuves (résultat admis).

> **Exemple.** Sur $200$ pièces avec $p = 0{,}02$ de défaut, on attend en moyenne
> $E(X) = 200 \times 0{,}02 = 4$ pièces défectueuses.

---

## 8. Méthodes de calcul

Pose toujours $n$, $p$ et la valeur (ou l'intervalle) de $k$ avant de te lancer.

### a) Une valeur exacte : $P(X = k)$

Application directe de la formule.

> $X \sim B(10\,;\,0{,}2)$ : $P(X = 3) = \dbinom{10}{3}(0{,}2)^3(0{,}8)^7 \approx 0{,}201$.

### b) Une probabilité cumulée : $P(X \leqslant k)$

<!-- schema:binomiale-cumulee -->
![Loi binomiale de paramètres 12 et 0,3 : la probabilité cumulée P(X ≤ 3) est la somme des bâtons orange, de k = 0 à k = 3 (environ 0,49).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDYiIHkxPSIyNjQiIHgyPSI1NDgiIHkyPSIyNjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjY4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjIyNS42NyIgeDI9IjU0OCIgeTI9IjIyNS42NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIyMjkuNjciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMDU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTg3LjMzIiB4Mj0iNTQ4IiB5Mj0iMTg3LjMzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9IjE5MS4zMyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwxPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjE0OSIgeDI9IjU0OCIgeTI9IjE0OSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIxNTMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMTU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTEwLjY3IiB4Mj0iNTQ4IiB5Mj0iMTEwLjY3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9IjExNC42NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwyPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjcyLjMzIiB4Mj0iNTQ4IiB5Mj0iNzIuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iNzYuMzMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMjU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMzQiIHgyPSI1NDgiIHkyPSIzNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIzOCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwzPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjI2NCIgeDI9IjU0OCIgeTI9IjI2NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMjY0IiB4Mj0iNDYiIHkyPSIyOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNjUuNiIgeT0iMjUzLjM5IiB3aWR0aD0iMjAuODEiIGhlaWdodD0iMTAuNjEiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC44NSIvPjx0ZXh0IHg9Ijc2IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHJlY3QgeD0iMTAzLjQzIiB5PSIyMDkuNDMiIHdpZHRoPSIyMC44MSIgaGVpZ2h0PSI1NC41NyIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMTEzLjgzIiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PHJlY3QgeD0iMTQxLjI2IiB5PSIxMzUuMzYiIHdpZHRoPSIyMC44MSIgaGVpZ2h0PSIxMjguNjQiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC44NSIvPjx0ZXh0IHg9IjE1MS42NyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0PjxyZWN0IHg9IjE3OS4xIiB5PSI4MC4yMyIgd2lkdGg9IjIwLjgxIiBoZWlnaHQ9IjE4My43NyIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMTg5LjUiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48cmVjdCB4PSIyMTYuOTMiIHk9Ijg2Ljc5IiB3aWR0aD0iMjAuODEiIGhlaWdodD0iMTc3LjIxIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjIyNy4zMyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40PC90ZXh0PjxyZWN0IHg9IjI1NC43NiIgeT0iMTQyLjQ5IiB3aWR0aD0iMjAuODEiIGhlaWdodD0iMTIxLjUxIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjI2NS4xNyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0PjxyZWN0IHg9IjI5Mi42IiB5PSIyMDMuMjQiIHdpZHRoPSIyMC44MSIgaGVpZ2h0PSI2MC43NiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzMDMiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD48cmVjdCB4PSIzMzAuNDMiIHk9IjI0MS42OCIgd2lkdGg9IjIwLjgxIiBoZWlnaHQ9IjIyLjMyIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM0MC44MyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43PC90ZXh0PjxyZWN0IHg9IjM2OC4yNiIgeT0iMjU4LjAyIiB3aWR0aD0iMjAuODEiIGhlaWdodD0iNS45OCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzNzguNjciIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD48cmVjdCB4PSI0MDYuMSIgeT0iMjYyLjg2IiB3aWR0aD0iMjAuODEiIGhlaWdodD0iMS4xNCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI0MTYuNSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PjxyZWN0IHg9IjQ0My45MyIgeT0iMjYzLjg1IiB3aWR0aD0iMjAuODEiIGhlaWdodD0iMC4xNSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI0NTQuMzMiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+PHJlY3QgeD0iNDgxLjc2IiB5PSIyNjMuOTkiIHdpZHRoPSIyMC44MSIgaGVpZ2h0PSIwLjAxIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjQ5Mi4xNyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMTwvdGV4dD48cmVjdCB4PSI1MTkuNiIgeT0iMjY0IiB3aWR0aD0iMjAuODEiIGhlaWdodD0iMCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI1MzAiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIyMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QigxMiA7IDAsMykgOiBQKFgg4omkIDMpID0gc29tbWUgZGVzIGLDonRvbnMgb3JhbmdlPC90ZXh0Pjwvc3ZnPg==)
*Loi binomiale de paramètres 12 et 0,3 : la probabilité cumulée P(X ≤ 3) est la somme des bâtons orange, de k = 0 à k = 3 (environ 0,49).*
<!-- /schema -->

C'est la **somme** $P(X = 0) + \dots + P(X = k)$, lue à la calculatrice (« binomFRép »
/ « BinomialCDF »).

> **Passage au complémentaire** — souvent le plus rapide :
> $$\boxed{P(X \geqslant k) = 1 - P(X \leqslant k - 1)} \qquad P(X > k) = 1 - P(X \leqslant k)$$
> En particulier « au moins un succès » : $P(X \geqslant 1) = 1 - P(X = 0) = 1 - (1-p)^n$.

### c) Un intervalle : $P(k \leqslant X \leqslant k')$

$$\boxed{P(k \leqslant X \leqslant k') = P(X \leqslant k') - P(X \leqslant k - 1)}$$

> ⚠️ C'est $k - 1$ à droite, pas $k$ : sinon tu **oublies** le terme $P(X = k)$.

### d) Appliquer Bayes dans une répétition

Quand l'énoncé mêle conditionnement et binomiale (« sachant qu'il y a eu au moins un
défaut… »), calcule d'abord la probabilité binomiale de l'événement conditionnant,
puis applique $P_B(A) = \dfrac{P(A \cap B)}{P(B)}$.

---

## 9. Tableau récapitulatif

| Objet | Formule / idée clé |
|---|---|
| Probabilité conditionnelle | $P_A(B) = \dfrac{P(A \cap B)}{P(A)}$, $\;P(A) \neq 0$ |
| Intersection | $P(A \cap B) = P(A)\,P_A(B)$ |
| Indépendance | $P_A(B) = P(B)$, soit $P(A \cap B) = P(A)P(B)$ |
| Probabilités totales | $P(B) = \sum_i P(A_i)\,P_{A_i}(B)$ (partition) |
| Formule de Bayes | $P_B(A) = \dfrac{P(A)\,P_A(B)}{P(B)}$ |
| Loi de Bernoulli | $P(X=1)=p$, $\;P(X=0)=1-p$, $\;E(X)=p$ |
| Schéma de Bernoulli | $n$ épreuves identiques, indépendantes, à 2 issues |
| Loi binomiale | $X \sim B(n,p)$, $X$ = nombre de succès |
| Probabilité exacte | $P(X=k)=\dbinom{n}{k}p^{\,k}(1-p)^{\,n-k}$ |
| « Au moins un » | $P(X\geqslant 1)=1-(1-p)^n$ |
| Complémentaire | $P(X\geqslant k)=1-P(X\leqslant k-1)$ |
| Intervalle | $P(k\leqslant X\leqslant k')=P(X\leqslant k')-P(X\leqslant k-1)$ |
| Espérance | $E(X)=np$ |

---

## 10. Les erreurs qui coûtent des points

1. **Inverser le conditionnement.** $P_A(B)$ et $P_B(A)$ ne sont **pas** égaux :
   $P_T(M) \neq P_M(T)$. Confondre « positif sachant malade » et « malade sachant
   positif » est l'erreur reine de ce chapitre — c'est précisément ce que Bayes corrige.
2. **Confondre indépendant et incompatible.** Incompatible veut dire
   $A \cap B = \varnothing$ ; indépendant veut dire $P_A(B) = P(B)$. Deux notions
   distinctes, souvent opposées.
3. **Oublier le coefficient $\binom{n}{k}$.** Écrire $P(X=k)=p^k(1-p)^{n-k}$ ne donne
   la probabilité que d'**un seul** chemin : le résultat est trop petit.
4. **Confondre $P(X=k)$ et $P(X\leqslant k)$.** « Exactement $k$ » est **un** terme ;
   « au plus $k$ » est une **somme**. Relis toujours « exactement / au moins / au plus ».
5. **Se tromper de borne dans un intervalle.** $P(k\leqslant X\leqslant k')$ vaut
   $P(X\leqslant k') - P(X\leqslant k-1)$, avec $k-1$ — sinon le terme $P(X=k)$ disparaît.
6. **Utiliser la binomiale sur un tirage sans remise.** Sans remise, $p$ change d'une
   épreuve à l'autre : les épreuves ne sont plus indépendantes, ce n'est **pas** un
   schéma de Bernoulli.
