---
id: 5e-math-proportionnalite
titre: "Proportionnalité"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Fractions (5e)
  - Multiplication et division de décimaux (6e)
statut: brouillon
relu_par: null
---

# Proportionnalité

> C'est le chapitre le plus utile de toute l'année : recettes, prix, échelles,
> vitesses, pourcentages. Le programme insiste sur un point — savoir **reconnaître**
> si une situation est proportionnelle, avant même de calculer.

---

## 1. Reconnaître une situation de proportionnalité

Deux grandeurs sont **proportionnelles** si l'on passe de l'une à l'autre en
multipliant **toujours par le même nombre**.

> **Exemple proportionnel.** Le prix des tomates : $2$ kg coûtent $6$ €, donc
> $4$ kg coûtent $12$ €. On multiplie toujours par $3$.

> **Contre-exemple.** L'âge et la taille d'une personne : à $10$ ans elle mesure
> $1{,}40$ m, mais à $20$ ans elle ne mesure pas $2{,}80$ m. **Ce n'est pas
> proportionnel.**

> ⚠️ **La première question à se poser** est toujours : *est-ce vraiment
> proportionnel ?* Beaucoup de situations de la vie courante ne le sont pas — un
> abonnement avec frais fixes, un tarif dégressif, l'aire d'un carré selon son côté.

---

## 2. Le coefficient de proportionnalité

<!-- schema:coefficient -->
![On passe de la masse au prix en multipliant toujours par 3 : c’est le coefficient de proportionnalité.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxODAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI2MCIgeT0iNzAiIHdpZHRoPSIxMzAiIGhlaWdodD0iNDAiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIxMjUiIHk9Ijk1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5NYXNzZSAoa2cpPC90ZXh0PjxyZWN0IHg9IjE5MCIgeT0iNzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjIzMCIgeT0iOTYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+PHJlY3QgeD0iMjcwIiB5PSI3MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMzEwIiB5PSI5NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD48cmVjdCB4PSIzNTAiIHk9IjcwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIzOTAiIHk9Ijk2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41PC90ZXh0PjxyZWN0IHg9IjQzMCIgeT0iNzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjQ3MCIgeT0iOTYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjc8L3RleHQ+PHJlY3QgeD0iNjAiIHk9IjExMCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjEyNSIgeT0iMTM1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Qcml4ICjigqwpPC90ZXh0PjxyZWN0IHg9IjE5MCIgeT0iMTEwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIyMzAiIHk9IjEzNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD48cmVjdCB4PSIyNzAiIHk9IjExMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMzEwIiB5PSIxMzYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0PjxyZWN0IHg9IjM1MCIgeT0iMTEwIiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIzOTAiIHk9IjEzNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTU8L3RleHQ+PHJlY3QgeD0iNDMwIiB5PSIxMTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjQ3MCIgeT0iMTM2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMTwvdGV4dD48cGF0aCBkPSJNIDIzMCA2NiBRIDI3MCAzNCAzMDIuOTcgNjAuMzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIzMTAsNjYgMzA1Ljc4LDU2Ljg2IDMwMC4xNiw2My44OSIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyNzAiIHk9IjQ0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DlyAyPC90ZXh0PjxwYXRoIGQ9Ik0gNTI4IDkwIFEgNTYyIDExMCA1MjggMTIyIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHBvbHlnb24gcG9pbnRzPSI1MjgsMTMwIDUyNiwxMTggNTM2LDEyMSIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHg9IjU1OCIgeT0iMTE1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPsOXIDM8L3RleHQ+PC9zdmc+)
*On passe de la masse au prix en multipliant toujours par 3 : c’est le coefficient de proportionnalité.*
<!-- /schema -->

C'est le nombre par lequel on multiplie pour passer d'une grandeur à l'autre.

| Masse (kg) | $2$ | $4$ | $5$ | $7$ |
|---|---|---|---|---|
| Prix (€) | $6$ | $12$ | $15$ | $21$ |

Ici le coefficient vaut $3$ : $\text{prix} = 3 \times \text{masse}$.

> **Comment le trouver** : divise une valeur de la seconde ligne par la valeur
> correspondante de la première. $6 \div 2 = 3$, $12 \div 4 = 3$ — et si tous les
> quotients sont égaux, la situation **est** proportionnelle.

---

## 3. Les quatre méthodes de calcul

Le programme demande de **mobiliser une procédure adaptée** — pas d'en appliquer une
seule mécaniquement.

### a. Le coefficient

On multiplie directement.

> $9$ kg de tomates : $9 \times 3 = 27$ €.

### b. Le retour à l'unité

On calcule d'abord pour $1$, puis on multiplie.

> Si $4$ personnes consomment $600$ g de pâtes, alors $1$ personne en consomme
> $150$ g, donc $6$ personnes en consomment $900$ g.

### c. La linéarité pour l'addition

$$8 \text{ personnes} = 4 + 4 \quad\Longrightarrow\quad \text{quantité} = 600 + 600 = 1200\ \mathrm{g}$$

### d. La linéarité pour la multiplication

$$8 \text{ personnes} = 2 \times 4 \quad\Longrightarrow\quad \text{quantité} = 2 \times 600 = 1200\ \mathrm{g}$$

> **Laquelle choisir ?** Celle qui donne les calculs les plus simples. Pour passer de
> $4$ à $8$ personnes, doubler est immédiat. Pour passer de $4$ à $7$, le retour à
> l'unité est plus sûr.

---

## 4. Le produit en croix

<!-- schema:produit-croix -->
![Dans le tableau de proportionnalité, les produits en croix sont égaux : 3 × x = 7 × 4,50, donc x = 10,50 €.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSIxMTAiIGhlaWdodD0iNDYiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSI5NSIgeT0iNjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlN0eWxvczwvdGV4dD48cmVjdCB4PSIxNTAiIHk9IjQwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMjAwIiB5PSI2OSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzwvdGV4dD48cmVjdCB4PSIyNTAiIHk9IjQwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMzAwIiB5PSI2OSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NzwvdGV4dD48cmVjdCB4PSI0MCIgeT0iODYiIHdpZHRoPSIxMTAiIGhlaWdodD0iNDYiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSI5NSIgeT0iMTE0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Qcml4ICjigqwpPC90ZXh0PjxyZWN0IHg9IjE1MCIgeT0iODYiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDYiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIyMDAiIHk9IjExNSIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NCw1MDwvdGV4dD48cmVjdCB4PSIyNTAiIHk9Ijg2IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQ2IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMzAwIiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPng8L3RleHQ+PGxpbmUgeDE9IjIxNiIgeTE9IjcxIiB4Mj0iMjg0IiB5Mj0iOTUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODQiIHkxPSI3MSIgeDI9IjIyNiIgeTI9Ijk1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzODAiIHk9IjcwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPjMgw5cgeDwvdGV4dD48dGV4dCB4PSIzODAiIHk9Ijk2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPj0gNyDDlyA0LDUwPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iMTgwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4zeCA9IDMxLDUwLCBkb25jIHggPSAzMSw1MCDDtyAzID0gMTAsNTAg4oKsPC90ZXh0Pjwvc3ZnPg==)
*Dans le tableau de proportionnalité, les produits en croix sont égaux : 3 × x = 7 × 4,50, donc x = 10,50 €.*
<!-- /schema -->

Dans un tableau de proportionnalité, les **produits en croix sont égaux** :

$$\begin{array}{c|c} a & b \\ \hline c & d \end{array}
\qquad\Longrightarrow\qquad a \times d = b \times c$$

> **Exemple.** $3$ stylos coûtent $4{,}50$ €. Combien coûtent $7$ stylos ?
>
> $$\frac{3}{4{,}50} = \frac{7}{x} \quad\Longrightarrow\quad 3x = 7 \times 4{,}50 = 31{,}50
> \quad\Longrightarrow\quad x = 10{,}50\ \text{€}$$

---

## 5. Pourcentages

Prendre $t\,\%$ d'un nombre, c'est le multiplier par $\dfrac{t}{100}$.

| Pourcentage | Revient à |
|---|---|
| $50\,\%$ | diviser par $2$ |
| $25\,\%$ | diviser par $4$ |
| $10\,\%$ | diviser par $10$ |
| $1\,\%$ | diviser par $100$ |

> **La technique la plus rapide** : $30\,\%$ de $80$, c'est trois fois $10\,\%$ de
> $80$, donc $3 \times 8 = 24$.

---

## 6. Échelles

Une **échelle** est un rapport de proportionnalité entre un dessin et la réalité.

$$\text{échelle} = \frac{\text{distance sur le plan}}{\text{distance réelle}}$$

> **Exemple.** Une échelle de $\dfrac{1}{200}$ signifie que $1$ cm sur le plan
> représente $200$ cm — soit $2$ m — dans la réalité.

> ⚠️ **Les deux distances doivent être dans la même unité** avant de calculer le
> rapport.

---

## 7. Vitesse

**À vitesse constante**, la distance parcourue est proportionnelle à la durée. Le
coefficient de proportionnalité est la **vitesse moyenne** : la distance parcourue en $1$ h.

> **Exemple.** Une voiture parcourt $120$ km en $2$ h à vitesse constante : en $1$ h, elle
> parcourt $120 \div 2 = 60$ km (sa vitesse est $60$ km/h), donc en $3$ h, $60 \times 3 = 180$ km.

> ⚠️ **La précision « à vitesse constante » est essentielle.** Une voiture qui
> accélère ne parcourt pas une distance proportionnelle au temps.

---

## 8. À retenir absolument

| | |
|---|---|
| Proportionnel | on multiplie **toujours par le même nombre** |
| Coefficient | se trouve en divisant une valeur par l'autre |
| Contrôle | tous les quotients doivent être égaux |
| Produit en croix | $a \times d = b \times c$ |
| $10\,\%$ | diviser par $10$ |
| Échelle | même unité des deux côtés |
| Vitesse | proportionnelle **si elle est constante** |

---

## 9. Les erreurs qui coûtent des points

1. **Appliquer la proportionnalité sans vérifier** qu'elle s'applique.
2. **Croire que l'âge et la taille sont proportionnels** — ou toute situation avec
   un « départ » non nul.
3. **Oublier de convertir les unités** dans un calcul d'échelle.
4. **Inverser le coefficient** : diviser au lieu de multiplier.
5. **Ajouter un pourcentage à un autre** sans vérifier qu'ils portent sur la même base.
6. **Utiliser le produit en croix sur un tableau non proportionnel.**
7. **Oublier l'unité dans le résultat** : $27$ ne veut rien dire, $27$ € oui.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Proportionnalité,
fonctions », niveau Cinquième, section « Proportionnalité ».

Éléments explicitement lisibles dans l'extraction (rubrique « Automatismes ») :
- « Reconnaitre si une situation donnée entre dans le cadre de la proportionnalité ou
  non » — d'où la section 1, placée en tête
- « Dans des situations simples, mobiliser une PROCÉDURE ADAPTÉE (propriété de
  linéarité pour la multiplication ou l'addition, retour à l'unité) pour résoudre un
  problème lié à la proportionnalité » — d'où les quatre méthodes de la section 3
- Exemples cités TELS QUELS par le programme :
  · « à partir d'une recette pour 4 personnes, on sait donner (ou verbaliser la
    procédure) les quantités lorsque l'on passe à 2, 8 ou 6 personnes »
  · « si l'on connait le prix d'un kilogramme de tomates, on sait comment calculer le
    prix de 3 kg ou de 4,3 kg de tomates »
  · « lors de l'élection des délégués de la classe, 4 élèves se présentent... »
  Les exemples de la fiche (recette, tomates) reprennent ceux du programme.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le PRODUIT EN CROIX est-il explicitement au programme de 5e, ou introduit plus
  tard ? Il ne figure pas dans la partie « Automatismes » extraite. Je l'ai inclus
  car classique, mais c'est un point de périmètre à vérifier.
- Les ÉCHELLES et la VITESSE sont-elles rattachées à ce chapitre ? Elles ne sont pas
  visibles dans l'extraction du niveau 5e.
- Les pourcentages : le programme les mentionne dans « Nombres rationnels »
  (« prendre 1 %, 10 % ou 50 % d'un nombre, en lien avec la proportionnalité »).
  Il y a donc un recouvrement à arbitrer avec la fiche « fractions ».
- Le troisième exemple du programme (élection des délégués) suggère un lien avec les
  statistiques : à explorer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
