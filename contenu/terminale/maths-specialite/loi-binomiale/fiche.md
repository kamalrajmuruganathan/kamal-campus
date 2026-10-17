---
id: tale-spe-math-loi-binomiale
titre: "Succession d'épreuves, schéma de Bernoulli et loi binomiale"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 14
prerequis:
  - Coefficients binomiaux (Terminale, chapitre « Combinatoire et dénombrement »)
  - Probabilités conditionnelles et indépendance (Première)
  - Arbres pondérés et probabilités totales (Première)
statut: brouillon
relu_par: null
---

# Succession d'épreuves, schéma de Bernoulli et loi binomiale

> Lancer 10 fois une pièce, tester 200 pièces sur une chaîne de production, poser
> 15 questions à un candidat qui répond au hasard : à chaque fois on **répète la
> même expérience** et on compte les **succès**. La loi binomiale est l'outil qui
> donne directement la probabilité d'en obtenir exactement $k$.

---

## 1. Succession d'épreuves indépendantes

### Définition

Tu réalises une **succession d'épreuves indépendantes** quand tu enchaînes plusieurs
expériences aléatoires dont **le résultat de l'une n'influence pas les autres**.

Une **issue** de la succession est une liste ordonnée $(x_1, x_2, \dots, x_n)$ : le
résultat de la 1re épreuve, puis de la 2e, etc. L'ensemble de toutes les issues est le
**produit cartésien** des univers de chaque épreuve.

### Propriété — la probabilité d'une issue est un produit

$$\boxed{P\big((x_1, x_2, \dots, x_n)\big) = P(x_1) \times P(x_2) \times \dots \times P(x_n)}$$

> **Exemple.** Une urne contient 3 boules rouges et 2 vertes. On tire une boule, on la
> **remet**, on retire une boule (deux tirages indépendants). La probabilité de tirer
> Rouge puis Vert est
> $$P(R, V) = \frac{3}{5} \times \frac{2}{5} = \frac{6}{25}.$$

### Représentation par un arbre

<!-- schema:arbre-trois-epreuves -->
![Schéma de Bernoulli à trois épreuves (S : succès de probabilité p) : un chemin à k succès a pour probabilité pᵏ(1 − p)³⁻ᵏ ; les trois chemins à 2 succès sont en orange.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjgiIHkxPSIyMDAiIHgyPSIxMjMiIHkyPSIxMTEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijc1LjUiIHk9IjE0Ny41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5wPC90ZXh0Pjx0ZXh0IHg9IjEzOSIgeT0iMTE2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0PjxsaW5lIHgxPSIxNTUiIHkxPSIxMTEiIHgyPSIyMzgiIHkyPSI2Ni41IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxOTYuNSIgeT0iODAuNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnA8L3RleHQ+PHRleHQgeD0iMjU0IiB5PSI3MS41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSI2Ni41IiB4Mj0iMzUzIiB5Mj0iNDQuMjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMxMS41IiB5PSI0Ny4zOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+cDwvdGV4dD48dGV4dCB4PSIzNjkiIHk9IjQ5LjI1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0Pjx0ZXh0IHg9IjM5MCIgeT0iNDkuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MyBzdWNjw6hzIDogcMKzPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSI2Ni41IiB4Mj0iMzUzIiB5Mj0iODguNzUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMxMS41IiB5PSI5NC42MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MSDiiJIgcDwvdGV4dD48dGV4dCB4PSIzNjkiIHk9IjkzLjc1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+UzwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjM5MCIgeT0iOTMuNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MiBzdWNjw6hzIDogcMKyKDEg4oiSIHApPC90ZXh0PjxsaW5lIHgxPSIxNTUiIHkxPSIxMTEiIHgyPSIyMzgiIHkyPSIxNTUuNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTk2LjUiIHk9IjE1MC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MSDiiJIgcDwvdGV4dD48dGV4dCB4PSIyNTQiIHk9IjE2MC41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+UzwvdHNwYW4+PC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSIxNTUuNSIgeDI9IjM1MyIgeTI9IjEzMy4yNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzExLjUiIHk9IjEzNi4zOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+cDwvdGV4dD48dGV4dCB4PSIzNjkiIHk9IjEzOC4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UzwvdGV4dD48dGV4dCB4PSIzOTAiIHk9IjEzOC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yIHN1Y2PDqHMgOiBwwrIoMSDiiJIgcCk8L3RleHQ+PGxpbmUgeDE9IjI3MCIgeTE9IjE1NS41IiB4Mj0iMzUzIiB5Mj0iMTc3Ljc1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMTEuNSIgeT0iMTgzLjYzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xIOKIkiBwPC90ZXh0Pjx0ZXh0IHg9IjM2OSIgeT0iMTgyLjc1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+UzwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjM5MCIgeT0iMTgyLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEgc3VjY8OocyA6IHAoMSDiiJIgcCnCsjwvdGV4dD48bGluZSB4MT0iMjgiIHkxPSIyMDAiIHgyPSIxMjMiIHkyPSIyODkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijc1LjUiIHk9IjI2MS41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xIOKIkiBwPC90ZXh0Pjx0ZXh0IHg9IjEzOSIgeT0iMjk0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+UzwvdHNwYW4+PC90ZXh0PjxsaW5lIHgxPSIxNTUiIHkxPSIyODkiIHgyPSIyMzgiIHkyPSIyNDQuNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTk2LjUiIHk9IjI1OC43NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+cDwvdGV4dD48dGV4dCB4PSIyNTQiIHk9IjI0OS41IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5TPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSIyNDQuNSIgeDI9IjM1MyIgeTI9IjIyMi4yNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzExLjUiIHk9IjIyNS4zOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+cDwvdGV4dD48dGV4dCB4PSIzNjkiIHk9IjIyNy4yNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+UzwvdGV4dD48dGV4dCB4PSIzOTAiIHk9IjIyNy4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yIHN1Y2PDqHMgOiBwwrIoMSDiiJIgcCk8L3RleHQ+PGxpbmUgeDE9IjI3MCIgeTE9IjI0NC41IiB4Mj0iMzUzIiB5Mj0iMjY2Ljc1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMTEuNSIgeT0iMjcyLjYzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xIOKIkiBwPC90ZXh0Pjx0ZXh0IHg9IjM2OSIgeT0iMjcxLjc1IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4gdGV4dC1kZWNvcmF0aW9uPSJvdmVybGluZSI+UzwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjM5MCIgeT0iMjcxLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEgc3VjY8OocyA6IHAoMSDiiJIgcCnCsjwvdGV4dD48bGluZSB4MT0iMTU1IiB5MT0iMjg5IiB4Mj0iMjM4IiB5Mj0iMzMzLjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE5Ni41IiB5PSIzMjguMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEg4oiSIHA8L3RleHQ+PHRleHQgeD0iMjU0IiB5PSIzMzguNSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPlM8L3RzcGFuPjwvdGV4dD48bGluZSB4MT0iMjcwIiB5MT0iMzMzLjUiIHgyPSIzNTMiIHkyPSIzMTEuMjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMxMS41IiB5PSIzMTQuMzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnA8L3RleHQ+PHRleHQgeD0iMzY5IiB5PSIzMTYuMjUiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPlM8L3RleHQ+PHRleHQgeD0iMzkwIiB5PSIzMTYuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MSBzdWNjw6hzIDogcCgxIOKIkiBwKcKyPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSIzMzMuNSIgeDI9IjM1MyIgeTI9IjM1NS43NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzExLjUiIHk9IjM2MS42MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MSDiiJIgcDwvdGV4dD48dGV4dCB4PSIzNjkiIHk9IjM2MC43NSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PHRzcGFuIHRleHQtZGVjb3JhdGlvbj0ib3ZlcmxpbmUiPlM8L3RzcGFuPjwvdGV4dD48dGV4dCB4PSIzOTAiIHk9IjM2MC43NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wIHN1Y2PDqHMgOiAoMSDiiJIgcCnCszwvdGV4dD48L3N2Zz4=)
*Schéma de Bernoulli à trois épreuves (S : succès de probabilité p) : un chemin à k succès a pour probabilité pᵏ(1 − p)³⁻ᵏ ; les trois chemins à 2 succès sont en orange.*
<!-- /schema -->

Chaque niveau de l'arbre = une épreuve ; chaque branche porte la probabilité de l'issue
correspondante. **La probabilité d'un chemin est le produit des probabilités des
branches** de ce chemin.

> ⚠️ « Indépendantes » veut dire que les probabilités portées par les branches **ne
> changent pas** d'un niveau à l'autre. C'est le cas typique d'un **tirage avec remise**.

> **À savoir aussi.** Le programme demande aussi de traiter une succession de deux ou
> trois épreuves **quelconques** (pas forcément indépendantes) : on mobilise alors les
> probabilités conditionnelles de Première et la formule des probabilités totales.

---

## 2. Épreuve et loi de Bernoulli

### Définition

Une **épreuve de Bernoulli** est une expérience aléatoire à **deux issues** seulement :
le **succès** $S$, de probabilité $p$, et l'**échec** $\overline{S}$, de probabilité
$1 - p$.

La **loi de Bernoulli** de paramètre $p$ est la loi de la variable aléatoire $X$ qui vaut :

$$X = 1 \text{ en cas de succès} \qquad X = 0 \text{ en cas d'échec}$$

$$\boxed{P(X = 1) = p \qquad P(X = 0) = 1 - p} \qquad \text{avec } 0 \leqslant p \leqslant 1$$

> **Exemple.** « Obtenir un 6 » avec un dé équilibré est une épreuve de Bernoulli :
> succès = « 6 » avec $p = \tfrac{1}{6}$, échec = « pas 6 » avec $1 - p = \tfrac{5}{6}$.

> **Le « succès », c'est toi qui le choisis** : simplement l'issue qui t'intéresse. Une
> fois choisi, $p$ est fixé — ne l'échange pas avec $1 - p$ en cours de route.

---

## 3. Schéma de Bernoulli

### Définition

Un **schéma de Bernoulli** est la **répétition de $n$ épreuves de Bernoulli identiques et
indépendantes**, toutes de même paramètre $p$.

C'est donc un cas particulier de succession d'épreuves indépendantes : à chaque épreuve,
mêmes deux issues, même probabilité $p$ de succès.

> **Trois conditions à vérifier** avant de parler de schéma de Bernoulli :
> 1. chaque épreuve n'a que **deux issues** (succès / échec) ;
> 2. les épreuves sont **indépendantes** ;
> 3. la probabilité de succès $p$ est **la même** à chaque épreuve.

> **Exemple.** On lance 12 fois une pièce truquée qui tombe sur Pile avec $p = 0{,}3$.
> Succès = « Pile ». On a un schéma de Bernoulli de paramètres $n = 12$ et $p = 0{,}3$.

### Probabilité d'un chemin à $k$ succès

Dans l'arbre, un chemin qui donne $k$ succès et $n - k$ échecs a pour probabilité

$$p^k \, (1 - p)^{n-k}$$

quel que soit l'**ordre** des succès et des échecs (les branches se multiplient, la
multiplication ne dépend pas de l'ordre).

---

## 4. La loi binomiale $B(n, p)$

### Définition

On répète un schéma de Bernoulli de paramètres $n$ et $p$. Soit $X$ la variable aléatoire
qui compte le **nombre de succès** parmi les $n$ épreuves. On dit que $X$ suit la **loi
binomiale** de paramètres $n$ et $p$, notée $X \sim B(n, p)$.

$X$ peut prendre toutes les valeurs entières de $0$ à $n$.

### Propriété — expression de $P(X = k)$

<!-- schema:binomiale-4-demi -->
![Loi binomiale de paramètres 4 et 1/2 : P(X = 2) = 6 × (1/2)⁴ = 3/8, car 6 chemins de l’arbre comportent exactement deux succès.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDYiIHkxPSIyNTQiIHgyPSI0ODgiIHkyPSIyNTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjU4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjE5OSIgeDI9IjQ4OCIgeTI9IjE5OSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIyMDMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMTwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIxNDQiIHgyPSI0ODgiIHkyPSIxNDQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMTQ4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDI8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iODkiIHgyPSI0ODgiIHkyPSI4OSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSI5MyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwzPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjM0IiB4Mj0iNDg4IiB5Mj0iMzQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMzgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsNDwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIyNTQiIHgyPSI0ODgiIHkyPSIyNTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjI1NCIgeDI9IjQ2IiB5Mj0iMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjYzIiB5PSIyMTkuNjMiIHdpZHRoPSIyNiIgaGVpZ2h0PSIzNC4zOCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI3NiIgeT0iMjcxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxyZWN0IHg9IjE2MS41IiB5PSIxMTYuNSIgd2lkdGg9IjI2IiBoZWlnaHQ9IjEzNy41IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjE3NC41IiB5PSIyNzEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PHJlY3QgeD0iMjYwIiB5PSI0Ny43NSIgd2lkdGg9IjI2IiBoZWlnaHQ9IjIwNi4yNSIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMjczIiB5PSIyNzEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+PHJlY3QgeD0iMzU4LjUiIHk9IjExNi41IiB3aWR0aD0iMjYiIGhlaWdodD0iMTM3LjUiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PHRleHQgeD0iMzcxLjUiIHk9IjI3MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48cmVjdCB4PSI0NTciIHk9IjIxOS42MyIgd2lkdGg9IjI2IiBoZWlnaHQ9IjM0LjM4IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjQ3MCIgeT0iMjcxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40PC90ZXh0Pjx0ZXh0IHg9IjI1MCIgeT0iMjAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkIoNCA7IDAsNSkgOiBQKFggPSAyKSA9IDYvMTYgPSAzLzg8L3RleHQ+PC9zdmc+)
*Loi binomiale de paramètres 4 et 1/2 : P(X = 2) = 6 × (1/2)⁴ = 3/8, car 6 chemins de l’arbre comportent exactement deux succès.*
<!-- /schema -->

$$\boxed{P(X = k) = \binom{n}{k} \, p^k \, (1 - p)^{n-k}} \qquad \text{pour } 0 \leqslant k \leqslant n$$

Décortiquons les trois morceaux :

- $\dbinom{n}{k}$ = le **nombre de chemins** donnant exactement $k$ succès (façons de placer
  les $k$ succès parmi les $n$ épreuves) ;
- $p^k$ = probabilité des $k$ succès d'un chemin ; $(1 - p)^{n-k}$ = celle des $n-k$ échecs.

Le coefficient binomial $\binom{n}{k}$ vient du chapitre **Combinatoire et dénombrement** : c'est le nombre de
sous-ensembles de $k$ éléments parmi $n$.

> **Exemple.** Une pièce équilibrée lancée $n = 4$ fois, succès = Pile, $p = \tfrac12$.
> Probabilité d'obtenir exactement $k = 2$ Piles :
> $$P(X = 2) = \binom{4}{2}\left(\tfrac12\right)^2\left(\tfrac12\right)^2 = 6 \times \frac{1}{16} = \frac{6}{16} = \frac{3}{8}.$$
> Le $6$ vient de $\binom{4}{2}$ : les 6 façons de placer les deux Piles.

### Espérance et variance (résultats admis ici)

$$E(X) = np \qquad\qquad V(X) = np(1 - p)$$

> Ces formules sont **démontrées** dans le chapitre **« Sommes de variables aléatoires »**
> ($X$ vue comme somme de $n$ variables de Bernoulli) : tu peux les **utiliser sans les
> redémontrer**. Sens : sur $200$ pièces avec $p=0{,}02$, on attend $E(X)=4$ défauts.

---

## 5. Méthodes de calcul

L'énoncé se ramène presque toujours à l'un de ces trois calculs. Pose bien $n$, $p$ et la
valeur (ou l'intervalle) de $k$ avant de te lancer.

### a) Probabilité d'une valeur exacte : $P(X = k)$

On applique directement la formule.

> **Exemple.** $X \sim B(10 ; 0{,}2)$. Probabilité d'exactement 3 succès :
> $$P(X = 3) = \binom{10}{3} (0{,}2)^3 (0{,}8)^7 \approx 0{,}201.$$

### b) Probabilité cumulée : $P(X \leqslant k)$

C'est la **somme** des probabilités de $0$ jusqu'à $k$ :

$$P(X \leqslant k) = P(X = 0) + P(X = 1) + \dots + P(X = k)$$

En pratique, on lit cette valeur à la **calculatrice** (fonction « binomFRép » / « BinomialCDF »)
ou via un **algorithme** qui additionne les termes.

> **Passage au complémentaire** — souvent le plus rapide :
> $$\boxed{P(X \geqslant k) = 1 - P(X \leqslant k - 1)} \qquad P(X > k) = 1 - P(X \leqslant k)$$
> **Exemple.** « au moins un succès » : $P(X \geqslant 1) = 1 - P(X = 0) = 1 - (1-p)^n$.

### c) Probabilité d'un intervalle : $P(k \leqslant X \leqslant k')$

On soustrait deux probabilités cumulées :

$$\boxed{P(k \leqslant X \leqslant k') = P(X \leqslant k') - P(X \leqslant k - 1)}$$

> ⚠️ C'est bien $k - 1$ à droite, pas $k$ : la borne $X = k$ doit **rester dans** le
> calcul. Si tu écris $P(X \leqslant k') - P(X \leqslant k)$, tu **oublies** le terme
> $P(X = k)$.

### d) Problèmes de seuil

<!-- schema:probleme-seuil -->
![Loi binomiale de paramètres 50 et 0,1 : en cumulant les bâtons depuis 0, on dépasse 0,95 pour la première fois en 9 (bâtons orange), d’où s = 9.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDYiIHkxPSIyNjQiIHgyPSI1NDgiIHkyPSIyNjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjY4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjIwNi41IiB4Mj0iNTQ4IiB5Mj0iMjA2LjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjEwLjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMDU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTQ5IiB4Mj0iNTQ4IiB5Mj0iMTQ5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9IjE1MyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwxPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjkxLjUiIHgyPSI1NDgiIHkyPSI5MS41IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9Ijk1LjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMTU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMzQiIHgyPSI1NDgiIHkyPSIzNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIzOCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwyPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjI2NCIgeDI9IjU0OCIgeTI9IjI2NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMjY0IiB4Mj0iNDYiIHkyPSIyOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNjkuNzYiIHk9IjI1OC4wNyIgd2lkdGg9IjEyLjQ5IiBoZWlnaHQ9IjUuOTMiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC44NSIvPjx0ZXh0IHg9Ijc2IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PHJlY3QgeD0iOTIuNDYiIHk9IjIzMS4wNyIgd2lkdGg9IjEyLjQ5IiBoZWlnaHQ9IjMyLjkzIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuODUiLz48dGV4dCB4PSI5OC43IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48cmVjdCB4PSIxMTUuMTYiIHk9IjE3NC4zNyIgd2lkdGg9IjEyLjQ5IiBoZWlnaHQ9Ijg5LjYzIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuODUiLz48dGV4dCB4PSIxMjEuNCIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yPC90ZXh0PjxyZWN0IHg9IjEzNy44NiIgeT0iMTA0LjY1IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMTU5LjM1IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuODUiLz48dGV4dCB4PSIxNDQuMSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iMTYwLjU2IiB5PSI1NS45NiIgd2lkdGg9IjEyLjQ5IiBoZWlnaHQ9IjIwOC4wNCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMTY2LjgiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD48cmVjdCB4PSIxODMuMjYiIHk9IjUxLjM0IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMjEyLjY2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuODUiLz48dGV4dCB4PSIxODkuNSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iMjA1Ljk2IiB5PSI4Ni43OCIgd2lkdGg9IjEyLjQ5IiBoZWlnaHQ9IjE3Ny4yMiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMjEyLjIiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjwvdGV4dD48cmVjdCB4PSIyMjguNjYiIHk9IjE0MC4yMyIgd2lkdGg9IjEyLjQ5IiBoZWlnaHQ9IjEyMy43NyIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMjM0LjkiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0PjxyZWN0IHg9IjI1MS4zNiIgeT0iMTkwLjA4IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iNzMuOTIiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC44NSIvPjx0ZXh0IHg9IjI1Ny42IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjg8L3RleHQ+PHJlY3QgeD0iMjc0LjA2IiB5PSIyMjUuNjciIHdpZHRoPSIxMi40OSIgaGVpZ2h0PSIzOC4zMyIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+PHRleHQgeD0iMjgwLjMiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0PjxyZWN0IHg9IjI5Ni43NiIgeT0iMjQ2LjU0IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMTcuNDYiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PHRleHQgeD0iMzAzIiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxyZWN0IHg9IjMxOS40NiIgeT0iMjU2Ljk1IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iNy4wNSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzMjUuNyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iMzQyLjE2IiB5PSIyNjEuNDUiIHdpZHRoPSIxMi40OSIgaGVpZ2h0PSIyLjU1IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM0OC40IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0PjxyZWN0IHg9IjM2NC44NiIgeT0iMjYzLjE3IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMC44MyIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzNzEuMSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iMzg3LjU2IiB5PSIyNjMuNzYiIHdpZHRoPSIxMi40OSIgaGVpZ2h0PSIwLjI0IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM5My44IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0PC90ZXh0PjxyZWN0IHg9IjQxMC4yNiIgeT0iMjYzLjk0IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMC4wNiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI0MTYuNSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iNDMyLjk2IiB5PSIyNjMuOTgiIHdpZHRoPSIxMi40OSIgaGVpZ2h0PSIwLjAyIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjQzOS4yIiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE2PC90ZXh0PjxyZWN0IHg9IjQ1NS42NiIgeT0iMjY0IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI0NjEuOSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iNDc4LjM2IiB5PSIyNjQiIHdpZHRoPSIxMi40OSIgaGVpZ2h0PSIwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjQ4NC42IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE4PC90ZXh0PjxyZWN0IHg9IjUwMS4wNiIgeT0iMjY0IiB3aWR0aD0iMTIuNDkiIGhlaWdodD0iMCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI1MDcuMyIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PHJlY3QgeD0iNTIzLjc2IiB5PSIyNjQiIHdpZHRoPSIxMi40OSIgaGVpZ2h0PSIwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjUzMCIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48dGV4dCB4PSIyODAiIHk9IjIwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CKDUwIDsgMCwxKSA6IFAoWCDiiaQgOSkg4omlIDAsOTUgcG91ciBsYSBwcmVtacOocmUgZm9pcyBlbiA5PC90ZXh0Pjwvc3ZnPg==)
*Loi binomiale de paramètres 50 et 0,1 : en cumulant les bâtons depuis 0, on dépasse 0,95 pour la première fois en 9 (bâtons orange), d’où s = 9.*
<!-- /schema -->

On cherche le plus petit (ou plus grand) entier $k$ tel qu'une probabilité cumulée
franchisse un seuil $\alpha$. Type : « à partir de combien de succès est-on presque sûr ? »
ou « quel intervalle $I$ vérifie $P(X \in I) \geqslant 1 - \alpha$ ? ».

> **Exemple.** $X \sim B(50 ; 0{,}1)$. Plus petit entier $s$ tel que
> $P(X \leqslant s) \geqslant 0{,}95$ ? On calcule $P(X \leqslant s)$ pour $s = 0, 1, 2, \dots$
> (calculatrice ou boucle) jusqu'à dépasser $0{,}95$ : ici $s = 9$.

---

## 6. Cas particuliers et pièges de calcul

- **Les bornes $k = 0$ et $k = n$.** $\binom{n}{0} = \binom{n}{n} = 1$, donc
  $P(X = 0) = (1-p)^n$ (aucun succès) et $P(X = n) = p^n$ (que des succès). Aucun
  coefficient à chercher ici.
- **Somme totale.** $P(X = 0) + P(X = 1) + \dots + P(X = n) = 1$. Utile pour vérifier ou
  pour calculer un cas par différence.
- **Ordre sans importance.** $\binom{n}{k}$ compte **toutes** les positions possibles des
  succès : tu n'as pas à les énumérer une par une.
- **Sans remise = pas binomial.** Un tirage **sans remise** rend les épreuves
  **dépendantes** ($p$ change) : ce n'est **pas** un schéma de Bernoulli.

---

## 7. Tableau récapitulatif

| Objet | Formule / idée clé |
|---|---|
| Issue d'une succession indépendante | $P(x_1,\dots,x_n) = P(x_1)\times\dots\times P(x_n)$ |
| Loi de Bernoulli | $P(X=1)=p$, $\;P(X=0)=1-p$ |
| Schéma de Bernoulli | $n$ épreuves identiques, indépendantes, à 2 issues |
| Loi binomiale | $X \sim B(n,p)$, $X$ = nombre de succès |
| Probabilité exacte | $P(X=k)=\dbinom{n}{k}p^k(1-p)^{n-k}$ |
| Cas $k=0$ / $k=n$ | $P(X=0)=(1-p)^n$, $\;P(X=n)=p^n$ |
| « Au moins un » | $P(X\geqslant 1)=1-(1-p)^n$ |
| Complémentaire | $P(X\geqslant k)=1-P(X\leqslant k-1)$ |
| Intervalle | $P(k\leqslant X\leqslant k')=P(X\leqslant k')-P(X\leqslant k-1)$ |
| Espérance / variance | $E(X)=np$, $\;V(X)=np(1-p)$ (admis, chap. Sommes de v.a.) |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $P(X = k)$ et $P(X \leqslant k)$.** « Exactement $k$ » ≠ « au plus $k$ ».
   La première est **un** terme, la seconde est une **somme** de termes. C'est le piège
   n°1 : relis toujours « exactement / au moins / au plus » dans l'énoncé.
2. **Oublier le coefficient binomial $\binom{n}{k}$.** Écrire $P(X=k)=p^k(1-p)^{n-k}$
   donne la probabilité d'**un seul** chemin, pas de tous. Sans $\binom{n}{k}$, le
   résultat est trop petit.
3. **Se tromper de borne dans un intervalle.** $P(k \leqslant X \leqslant k')$ vaut
   $P(X\leqslant k') - P(X \leqslant k-1)$, avec $k-1$ — sinon tu perds le terme $P(X=k)$.
4. **Utiliser la binomiale sur un tirage sans remise.** Les épreuves ne sont alors plus
   indépendantes et $p$ change : le modèle ne s'applique pas.
5. **Intervertir $p$ et $1-p$.** Une fois le succès choisi, $p$ est celui du succès.
   Vérifie que l'exposant de $p$ est bien le **nombre de succès** $k$.
6. **Confondre $\binom{n}{k}$ et $n^k$** (ou $k^n$). $\binom{n}{k}$ est un nombre de
   choix sans ordre : reprends la formule $\dfrac{n!}{k!(n-k)!}$ du chapitre Combinatoire.
