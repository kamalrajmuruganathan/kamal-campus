---
id: 1spe-math-probabilites-conditionnelles
titre: "Probabilités conditionnelles et indépendance"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 14
prerequis:
  - Probabilités (Seconde)
  - Proportions et pourcentages (Seconde)
statut: brouillon
relu_par: null
---

# Probabilités conditionnelles et indépendance

> L'idée centrale : **une information change la probabilité**. Savoir qu'il pleut modifie la
> probabilité que quelqu'un ait pris son parapluie. Tout le chapitre formalise ce mécanisme,
> et l'**arbre pondéré** en est l'outil visuel.

---

## 1. Probabilité conditionnelle

### Définition

Soient $\mathrm{A}$ et $\mathrm{B}$ deux événements avec $P(\mathrm{A}) \neq 0$.
La probabilité de $\mathrm{B}$ **sachant $\mathrm{A}$** est

$$\boxed{P_\mathrm{A}(\mathrm{B}) = \frac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}}$$

> **Comment la lire.** On se restreint à l'univers où $\mathrm{A}$ est réalisé, et on regarde
> quelle proportion de cet univers réalise aussi $\mathrm{B}$.

### Formule des probabilités composées

En multipliant par $P(\mathrm{A})$ :

$$\boxed{P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P_\mathrm{A}(\mathrm{B})}$$

C'est la formule qu'on lit sur un **chemin** d'arbre : on multiplie les probabilités
rencontrées.

> ⚠️ $P_\mathrm{A}(\mathrm{B})$ et $P_\mathrm{B}(\mathrm{A})$ sont **différentes** en général.
> Les confondre est l'erreur de raisonnement la plus coûteuse du chapitre.

---

## 2. L'arbre pondéré

<!-- schema:arbre-general -->
![Arbre pondéré : sur chaque branche, une probabilité (conditionnelle au second niveau) ; la probabilité d’un chemin est le produit des branches parcourues.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzQiIHkxPSIxMzUiIHgyPSIxNjQiIHkyPSI3OC41IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI5OSIgeT0iOTguNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlAoQSk8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4My41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0PjxsaW5lIHgxPSIxOTYiIHkxPSI3OC41IiB4Mj0iMzE0IiB5Mj0iNTAuMjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iNTYuMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlA8dHNwYW4gZm9udC1zaXplPSI5LjM2IiBkeT0iMy45Ij5BPC90c3Bhbj48dHNwYW4gZHk9Ii0zLjkiPuKAizwvdHNwYW4+KEIpPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iNTUuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPkI8L3RleHQ+PHRleHQgeD0iMzYwIiB5PSI1NS4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QKEEg4oipIEIpID0gUChBKSDDlyBQPHRzcGFuIGZvbnQtc2l6ZT0iOS4zNiIgZHk9IjMuOSI+QTwvdHNwYW4+PHRzcGFuIGR5PSItMy45Ij7igIs8L3RzcGFuPihCKTwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iNzguNSIgeDI9IjMxNCIgeTI9IjEwNi43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSIxMDkuNjMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlA8dHNwYW4gZm9udC1zaXplPSI5LjM2IiBkeT0iMy45Ij5BPC90c3Bhbj48dHNwYW4gZHk9Ii0zLjkiPuKAizwvdHNwYW4+KDx0c3BhbiB0ZXh0LWRlY29yYXRpb249Im92ZXJsaW5lIj5CPC90c3Bhbj4pPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTExLjc1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+QjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjM2MCIgeT0iMTExLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlAoQSDiiKkgPHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkI8L3RzcGFuPik8L3RleHQ+PGxpbmUgeDE9IjM0IiB5MT0iMTM1IiB4Mj0iMTY0IiB5Mj0iMTkxLjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijk5IiB5PSIxODAuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPlAoPHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkE8L3RzcGFuPik8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSIxOTYuNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkE8L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iMTkxLjUiIHgyPSIzMTQiIHkyPSIxNjMuMjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iMTY5LjM4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QPHRzcGFuIGZvbnQtc2l6ZT0iOS4zNiIgZHk9IjMuOSI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkE8L3RzcGFuPjwvdHNwYW4+PHRzcGFuIGR5PSItMy45Ij7igIs8L3RzcGFuPihCKTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjE2OC4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48dGV4dCB4PSIzNjAiIHk9IjE2OC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QKDx0c3BhbiB0ZXh0LWRlY29yYXRpb249Im92ZXJsaW5lIj5BPC90c3Bhbj4g4oipIEIpID0gUCg8dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+QTwvdHNwYW4+KSDDlyBQPHRzcGFuIGZvbnQtc2l6ZT0iOS4zNiIgZHk9IjMuOSI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkE8L3RzcGFuPjwvdHNwYW4+PHRzcGFuIGR5PSItMy45Ij7igIs8L3RzcGFuPihCKTwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iMTkxLjUiIHgyPSIzMTQiIHkyPSIyMTkuNzUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1NSIgeT0iMjIyLjYzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QPHRzcGFuIGZvbnQtc2l6ZT0iOS4zNiIgZHk9IjMuOSI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkE8L3RzcGFuPjwvdHNwYW4+PHRzcGFuIGR5PSItMy45Ij7igIs8L3RzcGFuPig8dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+QjwvdHNwYW4+KTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjIyNC43NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkI8L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIzNjAiIHk9IjIyNC43NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5QKDx0c3BhbiB0ZXh0LWRlY29yYXRpb249Im92ZXJsaW5lIj5BPC90c3Bhbj4g4oipIDx0c3BhbiB0ZXh0LWRlY29yYXRpb249Im92ZXJsaW5lIj5CPC90c3Bhbj4pPC90ZXh0Pjwvc3ZnPg==)
*Arbre pondéré : sur chaque branche, une probabilité (conditionnelle au second niveau) ; la probabilité d’un chemin est le produit des branches parcourues.*
<!-- /schema -->

### Les trois règles

1. La somme des probabilités des branches **issues d'un même nœud** vaut $1$
2. La probabilité d'un **chemin** est le **produit** des probabilités de ses branches
3. La probabilité d'un événement est la **somme** des probabilités des chemins qui le réalisent

```
                    P_A(B)
              ┌───────────── B      chemin : P(A) × P_A(B)
      P(A)    │
   ┌──────────┤ A
   │          │  P_A(B̄)
   │          └───────────── B̄
   │
   │  P(Ā)       P_Ā(B)
   └──────────┬───────────── B
              │ Ā
              │  P_Ā(B̄)
              └───────────── B̄
```

> **On multiplie le long d'un chemin, on additionne entre les chemins.** Toute la technique du
> chapitre tient dans cette phrase.

---

## 3. Formule des probabilités totales

<!-- schema:arbre-machines -->
![Les deux chemins qui mènent à D (pièce défectueuse) donnent P(D) = 0,012 + 0,020 = 0,032 : c’est la formule des probabilités totales.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzQiIHkxPSIxMzAiIHgyPSIxNjQiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iOTkiIHk9Ijk1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDY8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSI4MSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TeKCgTwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iNzYiIHgyPSIzMTQiIHkyPSI0OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSI1NC41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDAyPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iNTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPkQ8L3RleHQ+PHRleHQgeD0iMzYwIiB5PSI1NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDYgw5cgMCwwMiA9IDAsMDEyPC90ZXh0PjxsaW5lIHgxPSIxOTYiIHkxPSI3NiIgeDI9IjMxNCIgeTI9IjEwMyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSIxMDYuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCw5ODwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjEwOCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkQ8L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iMzQiIHkxPSIxMzAiIHgyPSIxNjQiIHkyPSIxODQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijk5IiB5PSIxNzQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsNDwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjE4OSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+TeKCgjwvdGV4dD48bGluZSB4MT0iMTk2IiB5MT0iMTg0IiB4Mj0iMzE0IiB5Mj0iMTU3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNTUiIHk9IjE2Mi41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDA1PC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMTYyIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9IjM2MCIgeT0iMTYyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAsNCDDlyAwLDA1ID0gMCwwMjA8L3RleHQ+PGxpbmUgeDE9IjE5NiIgeTE9IjE4NCIgeDI9IjMxNCIgeTI9IjIxMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1IiB5PSIyMTQuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MCw5NTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjIxNiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPkQ8L3RzcGFuPjwvdGV4dD48L3N2Zz4=)
*Les deux chemins qui mènent à D (pièce défectueuse) donnent P(D) = 0,012 + 0,020 = 0,032 : c’est la formule des probabilités totales.*
<!-- /schema -->

Si $\mathrm{A}$ et $\overline{\mathrm{A}}$ forment une partition de l'univers :

$$\boxed{P(\mathrm{B}) = P(\mathrm{A} \cap \mathrm{B}) + P(\overline{\mathrm{A}} \cap \mathrm{B})
= P(\mathrm{A})P_\mathrm{A}(\mathrm{B}) + P(\overline{\mathrm{A}})P_{\overline{\mathrm{A}}}(\mathrm{B})}$$

Sur l'arbre : on additionne tous les chemins qui aboutissent à $\mathrm{B}$.

> **Exemple.** Une usine a deux machines. La machine 1 produit $60\,\%$ des pièces avec
> $2\,\%$ de défauts ; la machine 2 produit les $40\,\%$ restants avec $5\,\%$ de défauts.
>
> $P(\mathrm{D}) = 0{,}6 \times 0{,}02 + 0{,}4 \times 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032$
>
> Soit $3{,}2\,\%$ de pièces défectueuses.

---

## 4. Indépendance

### Définition

Deux événements $\mathrm{A}$ et $\mathrm{B}$ sont **indépendants** lorsque

$$\boxed{P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P(\mathrm{B})}$$

De façon équivalente, si $P(\mathrm{A}) \neq 0$ :
$P_\mathrm{A}(\mathrm{B}) = P(\mathrm{B})$ — savoir que $\mathrm{A}$ est réalisé **ne change
rien** à la probabilité de $\mathrm{B}$.

> ⚠️ **Indépendants n'est pas incompatibles.** Deux événements incompatibles
> ($\mathrm{A} \cap \mathrm{B} = \varnothing$) de probabilités non nulles sont même toujours
> **dépendants** : savoir que l'un est réalisé garantit que l'autre ne l'est pas.

---

## 5. Succession d'épreuves indépendantes

Quand deux épreuves sont indépendantes, la probabilité d'un couple de résultats est le
**produit** des probabilités.

On représente la situation par un **arbre** ou par un **tableau à double entrée**.

> **Exemple.** Deux lancers d'un dé équilibré : $P(\text{deux }6) = \dfrac{1}{6} \times \dfrac{1}{6}
> = \dfrac{1}{36}$.

---

## 6. Répétition d'épreuves de Bernoulli (pour $n \leqslant 4$)

### Épreuve de Bernoulli

Une expérience à **deux issues** : succès (probabilité $p$) ou échec (probabilité $1-p$).

### Répétition

On répète $n$ fois la même épreuve, de façon **indépendante et identique**. Le programme limite
ce travail à $n \leqslant 4$, ce qui permet de tout lire sur un arbre.

**Méthode** : dessiner l'arbre, repérer tous les chemins réalisant l'événement, multiplier le
long de chaque chemin, additionner les chemins.

> **Exemple ($n = 3$, $p = 0{,}2$).** Probabilité d'obtenir **exactement un** succès.
>
> Trois chemins conviennent : SÉÉ, ÉSÉ, ÉÉS. Chacun a pour probabilité
> $0{,}2 \times 0{,}8 \times 0{,}8 = 0{,}128$.
>
> $P = 3 \times 0{,}128 = 0{,}384$

> ⚠️ Le facteur $3$ vient du **nombre de chemins**, pas d'un calcul supplémentaire. L'oublier
> est l'erreur type sur ce point.

---

## 7. À retenir absolument

| | |
|---|---|
| Probabilité conditionnelle | $P_\mathrm{A}(\mathrm{B}) = \dfrac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}$ |
| Probabilités composées | $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P_\mathrm{A}(\mathrm{B})$ |
| Probabilités totales | $P(\mathrm{B}) = P(\mathrm{A})P_\mathrm{A}(\mathrm{B}) + P(\overline{\mathrm{A}})P_{\overline{\mathrm{A}}}(\mathrm{B})$ |
| Indépendance | $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A})P(\mathrm{B})$ |
| Sur un arbre | multiplier le long d'un chemin, additionner entre chemins |
| Somme des branches d'un nœud | $1$ |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $P_\mathrm{A}(\mathrm{B})$ et $P_\mathrm{B}(\mathrm{A})$.** Ce ne sont pas les
   mêmes. « La probabilité d'être malade sachant qu'on est positif » n'est pas « la probabilité
   d'être positif sachant qu'on est malade ».
2. **Confondre $P_\mathrm{A}(\mathrm{B})$ et $P(\mathrm{A} \cap \mathrm{B})$.** La première est
   conditionnelle, la seconde est une intersection. La première est portée par une **branche**
   de l'arbre, la seconde par un **chemin entier**.
3. **Croire qu'indépendants signifie incompatibles.** Ce sont presque des contraires.
4. **Additionner le long d'un chemin** au lieu de multiplier.
5. **Oublier de compter les chemins** dans une répétition d'épreuves de Bernoulli.
6. **Utiliser $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A})P(\mathrm{B})$ sans indépendance.**
   Cette formule n'est valable que si l'indépendance est établie ou donnée par l'énoncé.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Probabilités conditionnelles et indépendance » (ligne 2811 du .txt extrait).

Éléments lisibles : indépendance de deux évènements, formule des probabilités totales,
succession de deux épreuves indépendantes avec représentation par arbre ou tableau,
et « pour n ≤ 4, répétition de n épreuves de Bernoulli indépendantes et identiques ».
La limite n ≤ 4 est explicite dans le programme — je l'ai respectée et signalée.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction a perdu une partie du bloc « Contenus » (fragment « è nements ). » avant la
  formule des probabilités totales) : vérifier qu'aucune notion n'est omise, notamment
  l'indépendance de deux variables aléatoires.
- La loi binomiale n'est PAS mentionnée pour la première (elle relève de la terminale) :
  je ne l'ai pas introduite, mais la limite n ≤ 4 le confirme indirectement — à valider.
- Le coefficient binomial n'est donc pas utilisé : les chemins se comptent à la main sur
  l'arbre. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
