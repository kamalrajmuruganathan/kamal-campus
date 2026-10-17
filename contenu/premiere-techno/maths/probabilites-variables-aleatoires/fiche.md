---
id: 1techno-math-probabilites-variables-aleatoires
titre: "Probabilités et variables aléatoires"
voie: technologique
niveau: premiere
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — première, voie technologique"
duree_lecture_min: 13
prerequis:
  - Probabilités (Seconde)
  - Suites et pourcentages (Première techno)
statut: brouillon
relu_par: null
---

# Probabilités et variables aléatoires

> Deux objets à maîtriser : l'**arbre de probabilités** pour les épreuves répétées,
> et l'**espérance** pour évaluer un gain moyen. L'espérance est l'outil qui permet
> de dire si un jeu, une assurance ou un investissement est avantageux **à long terme**.

---

# Probabilités conditionnelles et indépendance

## 1. Indépendance et probabilités totales

### Rappel — probabilité conditionnelle

Pour un événement $\mathrm{A}$ de probabilité non nulle, $P_{\mathrm{A}}(\mathrm{B}) = \dfrac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}$
est la probabilité de $\mathrm{B}$ **sachant** que $\mathrm{A}$ est réalisé.

### Événements indépendants

$\mathrm{B}$ est **indépendant** de $\mathrm{A}$ (avec $P(\mathrm{A}) \neq 0$) si savoir que $\mathrm{A}$ est réalisé ne change
pas la probabilité de $\mathrm{B}$ :

$$\boxed{P_{\mathrm{A}}(\mathrm{B}) = P(\mathrm{B})} \qquad \text{ce qui revient à} \qquad P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P(\mathrm{B})$$

Lorsque $\mathrm{A}$ et $\mathrm{B}$ ont des probabilités non nulles, la propriété est **symétrique** : on dit
que $\mathrm{A}$ et $\mathrm{B}$ sont indépendants.

> **Exemple.** On lance un dé équilibré. $\mathrm{A}$ : « le résultat est pair » ($\{2, 4, 6\}$) et
> $\mathrm{B}$ : « le résultat est inférieur ou égal à $2$ » ($\{1, 2\}$).
> $P(\mathrm{A}) = \dfrac{1}{2}$, $P(\mathrm{B}) = \dfrac{1}{3}$ et $\mathrm{A} \cap \mathrm{B} = \{2\}$, donc $P(\mathrm{A} \cap \mathrm{B}) = \dfrac{1}{6} = \dfrac{1}{2} \times \dfrac{1}{3}$ :
> $\mathrm{A}$ et $\mathrm{B}$ sont indépendants.

### Formule des probabilités totales

Avec un arbre à deux niveaux ($\mathrm{A}$ ou $\overline{\mathrm{A}}$, puis $\mathrm{B}$ ou $\overline{\mathrm{B}}$), on additionne les
probabilités des chemins qui mènent à $\mathrm{B}$ :

$$\boxed{P(\mathrm{B}) = P(\mathrm{A}) \times P_{\mathrm{A}}(\mathrm{B}) + P\left(\overline{\mathrm{A}}\right) \times P_{\overline{\mathrm{A}}}(\mathrm{B})}$$

> **Exemple.** Une usine fabrique $60\,\%$ de ses pièces sur la machine $\mathrm{A}$ et $40\,\%$ sur la
> machine $\mathrm{B}$. $3\,\%$ des pièces de $\mathrm{A}$ et $5\,\%$ des pièces de $\mathrm{B}$ sont défectueuses.
> On prend une pièce au hasard ; $\mathrm{D}$ : « elle est défectueuse ».
> $P(\mathrm{D}) = 0{,}6 \times 0{,}03 + 0{,}4 \times 0{,}05 = 0{,}018 + 0{,}02 = 0{,}038$, soit $3{,}8\,\%$.

---

# Répétition d'épreuves de Bernoulli

## 2. L'épreuve de Bernoulli

Une expérience à **deux issues seulement** :

- **succès**, de probabilité $p$
- **échec**, de probabilité $1 - p$

> **Exemples.** Une pièce tombe sur pile ou non. Une pièce fabriquée est conforme ou
> défectueuse. Un composant tombe en panne ou non.

---

## 3. Répétition — l'arbre de probabilités

On répète $n$ fois la même épreuve, de façon **identique et indépendante**.
Chaque répétition ne dépend pas des précédentes.

### Les trois règles de l'arbre

1. La somme des branches issues d'un même nœud vaut $1$
2. La probabilité d'un **chemin** est le **produit** des branches parcourues
3. La probabilité d'un événement est la **somme** des chemins qui le réalisent

```
              p     ┌── S      chemin SS  : p × p
         ┌── S ─────┤
         │          └── É      chemin SÉ  : p × (1−p)
    ─────┤
         │    1−p   ┌── S      chemin ÉS  : (1−p) × p
         └── É ─────┤
                    └── É      chemin ÉÉ  : (1−p) × (1−p)
```

> **On multiplie le long d'un chemin, on additionne entre les chemins.**

### Méthode

<!-- schema:arbre-trois-epreuves -->
![Arbre de trois épreuves de Bernoulli avec p = 0,2 : trois chemins donnent exactement un succès, chacun de probabilité 0,128, d’où P = 3 × 0,128 = 0,384.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjgiIHkxPSIyMDAiIHgyPSIxMjgiIHkyPSIxMTEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijc4IiB5PSIxNDcuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCwyPC90ZXh0Pjx0ZXh0IHg9IjE0NCIgeT0iMTE2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0PjxsaW5lIHgxPSIxNjAiIHkxPSIxMTEiIHgyPSIyNDgiIHkyPSI2Ni41IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMDQiIHk9IjgwLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDI8L3RleHQ+PHRleHQgeD0iMjY0IiB5PSI3MS41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSI2Ni41IiB4Mj0iMzY4IiB5Mj0iNDQuMjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyNCIgeT0iNDcuMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsMjwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjQ5LjI1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iNDkuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+U1NTPC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSI2Ni41IiB4Mj0iMzY4IiB5Mj0iODguNzUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyNCIgeT0iOTQuNjMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsODwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjkzLjc1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7DiTwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjkzLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlNTw4k8L3RleHQ+PGxpbmUgeDE9IjE2MCIgeTE9IjExMSIgeDI9IjI0OCIgeTI9IjE1NS41IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMDQiIHk9IjE1MC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCw4PC90ZXh0Pjx0ZXh0IHg9IjI2NCIgeT0iMTYwLjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPsOJPC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSIxNTUuNSIgeDI9IjM2OCIgeTI9IjEzMy4yNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzI0IiB5PSIxMzYuMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsMjwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjEzOC4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UzwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjEzOC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5Tw4lTPC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSIxNTUuNSIgeDI9IjM2OCIgeTI9IjE3Ny43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzI0IiB5PSIxODMuNjMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsODwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjE4Mi43NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+w4k8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIxODIuNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+U8OJw4kgOiAwLDIgw5cgMCw4IMOXIDAsOCA9IDAsMTI4PC90ZXh0PjxsaW5lIHgxPSIyOCIgeTE9IjIwMCIgeDI9IjEyOCIgeTI9IjI4OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNzgiIHk9IjI2MS41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDg8L3RleHQ+PHRleHQgeD0iMTQ0IiB5PSIyOTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPsOJPC90ZXh0PjxsaW5lIHgxPSIxNjAiIHkxPSIyODkiIHgyPSIyNDgiIHkyPSIyNDQuNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjA0IiB5PSIyNTguNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsMjwvdGV4dD48dGV4dCB4PSIyNjQiIHk9IjI0OS41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSIyNDQuNSIgeDI9IjM2OCIgeTI9IjIyMi4yNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzI0IiB5PSIyMjUuMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsMjwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjIyNy4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UzwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjIyNy4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7DiVNTPC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSIyNDQuNSIgeDI9IjM2OCIgeTI9IjI2Ni43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzI0IiB5PSIyNzIuNjMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsODwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjI3MS43NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+w4k8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIyNzEuNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+w4lTw4kgOiAwLDggw5cgMCwyIMOXIDAsOCA9IDAsMTI4PC90ZXh0PjxsaW5lIHgxPSIxNjAiIHkxPSIyODkiIHgyPSIyNDgiIHkyPSIzMzMuNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjA0IiB5PSIzMjguMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsODwvdGV4dD48dGV4dCB4PSIyNjQiIHk9IjMzOC41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7DiTwvdGV4dD48bGluZSB4MT0iMjgwIiB5MT0iMzMzLjUiIHgyPSIzNjgiIHkyPSIzMTEuMjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyNCIgeT0iMzE0LjM4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDI8L3RleHQ+PHRleHQgeD0iMzg0IiB5PSIzMTYuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPlM8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzMTYuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+w4nDiVMgOiAwLDggw5cgMCw4IMOXIDAsMiA9IDAsMTI4PC90ZXh0PjxsaW5lIHgxPSIyODAiIHkxPSIzMzMuNSIgeDI9IjM2OCIgeTI9IjM1NS43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzI0IiB5PSIzNjEuNjMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsODwvdGV4dD48dGV4dCB4PSIzODQiIHk9IjM2MC43NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+w4k8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIzNjAuNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+w4nDicOJPC90ZXh0Pjwvc3ZnPg==)
*Arbre de trois épreuves de Bernoulli avec p = 0,2 : trois chemins donnent exactement un succès, chacun de probabilité 0,128, d’où P = 3 × 0,128 = 0,384.*
<!-- /schema -->

Pour calculer la probabilité d'obtenir **exactement $k$ succès** :

1. dessiner l'arbre
2. repérer **tous** les chemins qui conviennent
3. calculer la probabilité d'un chemin : $p^k \times (1-p)^{n-k}$
4. **multiplier par le nombre de chemins**

> **Exemple ($n = 3$, $p = 0{,}2$) — exactement un succès.**
>
> Trois chemins conviennent : SÉÉ, ÉSÉ, ÉÉS.
> Chacun vaut $0{,}2 \times 0{,}8 \times 0{,}8 = 0{,}128$.
>
> $P = 3 \times 0{,}128 = 0{,}384$

> ⚠️ **Le facteur vient du nombre de chemins.** L'oublier est l'erreur type de ce
> chapitre — et elle est systématiquement sanctionnée.

---

# Variables aléatoires

## 4. Définition et notations

Une **variable aléatoire** $X$ associe un **nombre** à chaque issue d'une expérience.

| Notation | Signification |
|---|---|
| $\{X = a\}$ | l'**événement** « $X$ prend la valeur $a$ » |
| $P(X = a)$ | la **probabilité** de cet événement — un nombre |

> ⚠️ Les accolades marquent la différence : $\{X = a\}$ est un événement,
> $P(X = a)$ est un nombre entre $0$ et $1$.

---

## 5. Loi de probabilité

<!-- schema:loi-nombre-succes -->
![Loi du nombre de succès sur trois épreuves (p = 0,2) : 0,512 ; 0,384 ; 0,096 ; 0,008. Les hauteurs des bâtons ont pour somme 1.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDYiIHkxPSIyNjQiIHgyPSI1MDgiIHkyPSIyNjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjY4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjIyNS42NyIgeDI9IjUwOCIgeTI9IjIyNS42NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIyMjkuNjciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMTwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIxODcuMzMiIHgyPSI1MDgiIHkyPSIxODcuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMTkxLjMzIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDI8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTQ5IiB4Mj0iNTA4IiB5Mj0iMTQ5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9IjE1MyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwzPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjExMC42NyIgeDI9IjUwOCIgeTI9IjExMC42NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIxMTQuNjciIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsNDwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSI3Mi4zMyIgeDI9IjUwOCIgeTI9IjcyLjMzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9Ijc2LjMzIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMzQiIHgyPSI1MDgiIHkyPSIzNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIzOCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCw2PC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjI2NCIgeDI9IjUwOCIgeTI9IjI2NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMjY0IiB4Mj0iNDYiIHkyPSIyOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNjMiIHk9IjY3LjczIiB3aWR0aD0iMjYiIGhlaWdodD0iMTk2LjI3IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9Ijc2IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHJlY3QgeD0iMjAxIiB5PSIxMTYuOCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjE0Ny4yIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjIxNCIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0PjxyZWN0IHg9IjMzOSIgeT0iMjI3LjIiIHdpZHRoPSIyNiIgaGVpZ2h0PSIzNi44IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM1MiIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0PjxyZWN0IHg9IjQ3NyIgeT0iMjYwLjkzIiB3aWR0aD0iMjYiIGhlaWdodD0iMy4wNyIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI0OTAiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48dGV4dCB4PSIyNjAiIHk9IjIwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Ob21icmUgZGUgc3VjY8OocyBwb3VyIG4gPSAzIGV0IHAgPSAwLDI8L3RleHQ+PC9zdmc+)
*Loi du nombre de succès sur trois épreuves (p = 0,2) : 0,512 ; 0,384 ; 0,096 ; 0,008. Les hauteurs des bâtons ont pour somme 1.*
<!-- /schema -->

La **loi de probabilité** de $X$ donne, pour chaque valeur possible, sa probabilité.
On la présente en tableau.

| $x_i$ | $x_1$ | $x_2$ | $\cdots$ | $x_n$ |
|---|---|---|---|---|
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\cdots$ | $p_n$ |

$$\boxed{\sum p_i = 1}$$

> **Le contrôle systématique** : la somme de la seconde ligne doit valoir $1$. Si ce
> n'est pas le cas, inutile de poursuivre — il y a une erreur.

---

## 6. Espérance

$$\boxed{E(X) = x_1p_1 + x_2p_2 + \cdots + x_np_n}$$

C'est la **moyenne des valeurs, pondérée par leurs probabilités**.

> **Interprétation** : si on répétait l'expérience un très grand nombre de fois, la
> moyenne des résultats se rapprocherait de $E(X)$. C'est un gain **moyen à long
> terme**, pas une prévision pour une partie.

### Le gain algébrique

> **Exemple.** On mise $2$ €. On gagne $10$ € avec probabilité $0{,}1$, sinon rien.
>
> Le **gain algébrique** tient compte de la mise :
> $X = 8$ avec probabilité $0{,}1$, et $X = -2$ avec probabilité $0{,}9$.
>
> $E(X) = 8 \times 0{,}1 + (-2) \times 0{,}9 = 0{,}8 - 1{,}8 = -1$
>
> En moyenne, le joueur **perd $1$ € par partie**.

| $E(X)$ | Le jeu est |
|---|---|
| $> 0$ | favorable au joueur |
| $= 0$ | **équitable** |
| $< 0$ | défavorable au joueur |

---

## 7. Loi de Bernoulli

C'est le cas le plus simple : $X$ ne prend que les valeurs $0$ et $1$.

| $x_i$ | $0$ | $1$ |
|---|---|---|
| $P(X = x_i)$ | $1-p$ | $p$ |

$$\boxed{E(X) = p}$$

*Démonstration immédiate* : $E(X) = 0 \times (1-p) + 1 \times p = p$.

> **Ce qu'il faut retenir** : pour une loi de Bernoulli, l'espérance **est** le
> paramètre $p$. C'est le résultat le plus court du chapitre, et il tombe souvent.

---

## 8. À retenir absolument

| | |
|---|---|
| Épreuve de Bernoulli | deux issues : succès $p$, échec $1-p$ |
| Sur un arbre | multiplier le long d'un chemin, additionner entre chemins |
| Exactement $k$ succès | $(\text{nombre de chemins}) \times p^k(1-p)^{n-k}$ |
| Somme des probabilités | $\sum p_i = 1$ |
| Espérance | $E(X) = \sum x_i p_i$ |
| Jeu équitable | $E(X) = 0$ |
| Loi de Bernoulli | $E(X) = p$ |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier de compter les chemins** dans une répétition d'épreuves.
2. **Additionner le long d'un chemin** au lieu de multiplier.
3. **Oublier de retrancher la mise** dans un calcul de gain algébrique.
4. **Ne pas vérifier que $\sum p_i = 1$** avant de calculer l'espérance.
5. **Confondre $\{X = a\}$ et $P(X = a)$** : un événement et un nombre.
6. **Interpréter l'espérance comme une prévision** pour une seule partie : c'est une
   moyenne sur un grand nombre de répétitions.
7. **Oublier le signe négatif des pertes** dans le tableau de la loi.
