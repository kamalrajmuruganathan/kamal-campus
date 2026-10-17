---
id: 5e-math-statistiques
titre: "Statistiques"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Fractions et écritures décimales (5e)
  - Proportionnalité et pourcentages (5e)
statut: brouillon
relu_par: null
---

# Statistiques

> Faire des statistiques, c'est transformer une masse de données en une information
> qu'on peut lire d'un coup d'œil. Trois outils suffisent : compter, ramener à un
> total, et résumer par une moyenne.

---

## 1. Le vocabulaire

| Mot | Ce qu'il désigne | Exemple |
|---|---|---|
| **Série** | l'ensemble des données recueillies | les notes de la classe |
| **Effectif** | le nombre de fois qu'une valeur apparaît | $7$ élèves ont eu $12$ |
| **Effectif total** | le nombre de données en tout | $30$ élèves |
| **Fréquence** | la part que représente une valeur | $7$ sur $30$ |

---

## 2. Organiser les données dans un tableau

Une liste brute ne se lit pas. On la range dans un **tableau d'effectifs**.

> **Exemple.** Notes obtenues par $20$ élèves :
> $8, 12, 15, 12, 8, 10, 12, 15, 10, 12, 8, 10, 15, 12, 10, 8, 12, 10, 15, 12$

| Note | $8$ | $10$ | $12$ | $15$ | **Total** |
|---|---|---|---|---|---|
| **Effectif** | $4$ | $5$ | $7$ | $4$ | $20$ |

> **Le contrôle systématique** : la somme des effectifs doit être égale à l'**effectif
> total**. Ici $4+5+7+4 = 20$ ✓. Si ça ne tombe pas juste, une donnée a été oubliée ou
> comptée deux fois — inutile d'aller plus loin.

---

## 3. Les fréquences

$$\boxed{\text{fréquence} = \frac{\text{effectif}}{\text{effectif total}}}$$

Une fréquence s'exprime de **trois façons**, qui disent la même chose :

| Écriture | Pour la note $12$ |
|---|---|
| **Fraction** | $\dfrac{7}{20}$ |
| **Décimale** | $0{,}35$ |
| **Pourcentage** | $35\ \%$ |

> **Pour passer de l'une à l'autre** : la fraction se calcule en divisant, et le
> pourcentage s'obtient en multipliant la décimale par $100$.
> $\dfrac{7}{20} = 0{,}35 = 35\ \%$.

> **Le contrôle** : la somme de toutes les fréquences vaut **$1$** (ou $100\ \%$).
> Ici $0{,}20 + 0{,}25 + 0{,}35 + 0{,}20 = 1$ ✓.

> ⚠️ **À quoi sert la fréquence plutôt que l'effectif** : à **comparer deux groupes de
> tailles différentes**. $7$ élèves sur $20$ et $9$ élèves sur $30$, c'est $35\ \%$
> contre $30\ \%$ — le premier groupe est en meilleure proportion, alors que son
> effectif est plus petit.

---

## 4. Représenter les données

<!-- schema:barres-notes -->
![Diagramme en barres des notes des 20 élèves : la note 12 est la plus fréquente, avec 7 élèves.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyODAiIHk9IjI0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Ob3RlcyBkZSAyMCDDqWzDqHZlczwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyNTQiIHgyPSI0OTAiIHkyPSIyNTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMjU4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIyOS4yNSIgeDI9IjQ5MCIgeTI9IjIyOS4yNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIyMzMuMjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjE8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMjA0LjUiIHgyPSI0OTAiIHkyPSIyMDQuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIyMDguNSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxNzkuNzUiIHgyPSI0OTAiIHkyPSIxNzkuNzUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMTgzLjc1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4zPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjE1NSIgeDI9IjQ5MCIgeTI9IjE1NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxNTkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQ8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTMwLjI1IiB4Mj0iNDkwIiB5Mj0iMTMwLjI1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjEzNC4yNSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxMDUuNSIgeDI9IjQ5MCIgeTI9IjEwNS41IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjEwOS41IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj42PC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjgwLjc1IiB4Mj0iNDkwIiB5Mj0iODAuNzUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iODQuNzUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjc8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iNTYiIHgyPSI0OTAiIHkyPSI1NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSI2MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+ODwvdGV4dD48cmVjdCB4PSI4NS43NSIgeT0iMTU1IiB3aWR0aD0iNTYiIGhlaWdodD0iOTkiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNSIvPjx0ZXh0IHg9IjExMy43NSIgeT0iMjczIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44PC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxMTMuNzUiIHk9IjE0OSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48cmVjdCB4PSIxOTMuMjUiIHk9IjEzMC4yNSIgd2lkdGg9IjU2IiBoZWlnaHQ9IjEyMy43NSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMjIxLjI1IiB5PSIyNzMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyMjEuMjUiIHk9IjEyNC4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTwvdGV4dD48cmVjdCB4PSIzMDAuNzUiIHk9IjgwLjc1IiB3aWR0aD0iNTYiIGhlaWdodD0iMTczLjI1IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48dGV4dCB4PSIzMjguNzUiIHk9IjI3MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjMyOC43NSIgeT0iNzQuNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjc8L3RleHQ+PHJlY3QgeD0iNDA4LjI1IiB5PSIxNTUiIHdpZHRoPSI1NiIgaGVpZ2h0PSI5OSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iNDM2LjI1IiB5PSIyNzMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE1PC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0MzYuMjUiIHk9IjE0OSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyNTQiIHgyPSI2MCIgeTI9IjUxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYwLDQyIDU1LjUsNTEgNjQuNSw1MSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI1NCIgeDI9IjQ5OCIgeTI9IjI1NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjgiIHk9IjM4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+ZWZmZWN0aWY8L3RleHQ+PHRleHQgeD0iMjc1IiB5PSIyOTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+bm90ZTwvdGV4dD48L3N2Zz4=)
*Diagramme en barres des notes des 20 élèves : la note 12 est la plus fréquente, avec 7 élèves.*
<!-- /schema -->

Trois représentations au programme, chacune pour un usage.

| Représentation | Ce qu'elle montre bien | Quand l'utiliser |
|---|---|---|
| **Diagramme en barres** | la comparaison des effectifs | pour comparer des catégories entre elles |
| **Diagramme circulaire** | la part de chaque valeur dans le tout | pour montrer une **répartition** |
| **Graphique cartésien** | l'évolution d'une grandeur | quand les données se suivent (dans le temps, par exemple) |

> **Choisir la bonne, c'est répondre à la question posée.** « Quelle matière a la
> meilleure moyenne ? » appelle des barres. « Comment se répartissent les élèves entre
> les options ? » appelle un diagramme circulaire. « Comment la température a-t-elle
> évolué ? » appelle un graphique.

### Calculer les angles d'un diagramme circulaire

<!-- schema:circulaire-notes -->
![Diagramme circulaire des notes : les angles 72°, 90°, 126° et 72° sont proportionnels aux effectifs et totalisent 360°.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDE5MCAxNTAgTCAxOTAgNDAgQSAxMTAgMTEwIDAgMCAxIDI5NC42MiAxMTYuMDEgWiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjIzMC4wOSIgeT0iOTkuODMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjcywrA8L3RleHQ+PHJlY3QgeD0iMzQwIiB5PSI5MyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM2NCIgeT0iMTA2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPm5vdGUgODwvdGV4dD48cGF0aCBkPSJNIDE5MCAxNTAgTCAyOTQuNjIgMTE2LjAxIEEgMTEwIDExMCAwIDAgMSAyMjMuOTkgMjU0LjYyIFoiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC43IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIyNTAuNzciIHk9IjE4NS45NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+OTDCsDwvdGV4dD48cmVjdCB4PSIzNDAiIHk9IjEyMyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM2NCIgeT0iMTM2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPm5vdGUgMTA8L3RleHQ+PHBhdGggZD0iTSAxOTAgMTUwIEwgMjIzLjk5IDI1NC42MiBBIDExMCAxMTAgMCAwIDEgODUuMzggMTE2LjAxIFoiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC43IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNDEuNzgiIHk9IjIwMy4yMiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTI2wrA8L3RleHQ+PHJlY3QgeD0iMzQwIiB5PSIxNTMiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSIzNjQiIHk9IjE2NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5ub3RlIDEyPC90ZXh0PjxwYXRoIGQ9Ik0gMTkwIDE1MCBMIDg1LjM4IDExNi4wMSBBIDExMCAxMTAgMCAwIDEgMTkwIDQwIFoiIGZpbGw9IiM3YTNmYjAiIGZpbGwtb3BhY2l0eT0iMC43IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNDkuOTEiIHk9Ijk5LjgzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj43MsKwPC90ZXh0PjxyZWN0IHg9IjM0MCIgeT0iMTgzIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3YTNmYjAiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PHRleHQgeD0iMzY0IiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+bm90ZSAxNTwvdGV4dD48L3N2Zz4=)
*Diagramme circulaire des notes : les angles 72°, 90°, 126° et 72° sont proportionnels aux effectifs et totalisent 360°.*
<!-- /schema -->

Le disque entier représente l'effectif total et mesure $360°$. Les angles sont
**proportionnels** aux effectifs.

$$\boxed{\text{angle} = \text{fréquence} \times 360°}$$

> **Exemple.** Pour la note $12$ : $0{,}35 \times 360 = 126°$.

| Note | $8$ | $10$ | $12$ | $15$ | Total |
|---|---|---|---|---|---|
| Effectif | $4$ | $5$ | $7$ | $4$ | $20$ |
| Fréquence | $0{,}20$ | $0{,}25$ | $0{,}35$ | $0{,}20$ | $1$ |
| **Angle** | $72°$ | $90°$ | $126°$ | $72°$ | $360°$ |

> **Le contrôle** : la somme des angles doit faire $360°$. Ici
> $72+90+126+72 = 360$ ✓.

---

## 5. La moyenne

$$\boxed{\text{moyenne} = \frac{\text{somme de toutes les valeurs}}{\text{effectif total}}}$$

### Quand les valeurs se répètent

On ne réécrit pas chaque valeur : on **multiplie chaque valeur par son effectif**.

> **Exemple**, avec le tableau précédent :
>
> $\text{moyenne} = \dfrac{8 \times 4 + 10 \times 5 + 12 \times 7 + 15 \times 4}{20}$
>
> $= \dfrac{32 + 50 + 84 + 60}{20} = \dfrac{226}{20} = 11{,}3$

> ⚠️ **L'erreur classique** : additionner les quatre notes différentes et diviser par
> $4$, ce qui donnerait $\dfrac{8+10+12+15}{4} = 11{,}25$. C'est faux : cela reviendrait
> à dire que chaque note a été obtenue une seule fois, alors que $12$ revient $7$ fois.
> **On divise toujours par l'effectif total**, jamais par le nombre de valeurs
> distinctes.

### Interpréter une moyenne

La moyenne est la valeur qu'auraient toutes les données si elles étaient **également
réparties**.

> **Exemple.** Une moyenne de $11{,}3$ signifie que si tous les élèves avaient la même
> note, ce serait $11{,}3$.

> ⚠️ **Ce que la moyenne ne dit pas.** Deux classes de moyenne $10$ peuvent être très
> différentes : l'une avec tous les élèves entre $9$ et $11$, l'autre avec la moitié à
> $0$ et l'autre à $20$. La moyenne résume, elle ne décrit pas tout.

---

## 6. Lire un graphique

<!-- schema:axe-tronque -->
![Mêmes données, deux graphiques : avec un axe qui part de 80, une hausse de 2 points semble énorme.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjAiIHkxPSIyMzAiIHgyPSIyODAiIHkyPSIyMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iMjM0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjE5MiIgeDI9IjI4MCIgeTI9IjE5MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjIwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjE1NCIgeDI9IjI4MCIgeTI9IjE1NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxNTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjExNiIgeDI9IjI4MCIgeTI9IjExNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjYwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9Ijc4IiB4Mj0iMjgwIiB5Mj0iNzgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iODIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjgwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjQwIiB4Mj0iMjgwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MiIgeT0iNDQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjEwMDwvdGV4dD48cmVjdCB4PSI5NCIgeT0iNzYuMSIgd2lkdGg9IjUyIiBoZWlnaHQ9IjE1My45IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNzUiLz48dGV4dCB4PSIxMjAiIHk9IjI1MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YW5uw6llIDE8L3RleHQ+PHRleHQgeD0iMTIwIiB5PSI3MC4xIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj44MSAlPC90ZXh0PjxyZWN0IHg9IjE5NCIgeT0iNzIuMyIgd2lkdGg9IjUyIiBoZWlnaHQ9IjE1Ny43IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuNzUiLz48dGV4dCB4PSIyMjAiIHk9IjI1MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YW5uw6llIDI8L3RleHQ+PHRleHQgeD0iMjIwIiB5PSI2Ni4zIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj44MyAlPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIzMCIgeDI9IjI4MCIgeTI9IjIzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjMwIiB4Mj0iNjAiIHkyPSIzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTcwIiB5PSIyNzQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmF4ZSBxdWkgcGFydCBkZSAwPC90ZXh0PjxsaW5lIHgxPSIzODAiIHkxPSIyMzAiIHgyPSI2MDAiIHkyPSIyMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzIiIHk9IjIzNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+ODA8L3RleHQ+PGxpbmUgeDE9IjM4MCIgeTE9IjE4Mi41IiB4Mj0iNjAwIiB5Mj0iMTgyLjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzIiIHk9IjE4Ni41IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj44MTwvdGV4dD48bGluZSB4MT0iMzgwIiB5MT0iMTM1IiB4Mj0iNjAwIiB5Mj0iMTM1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzcyIiB5PSIxMzkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjgyPC90ZXh0PjxsaW5lIHgxPSIzODAiIHkxPSI4Ny41IiB4Mj0iNjAwIiB5Mj0iODcuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM3MiIgeT0iOTEuNSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+ODM8L3RleHQ+PGxpbmUgeDE9IjM4MCIgeTE9IjQwIiB4Mj0iNjAwIiB5Mj0iNDAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzIiIHk9IjQ0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj44NDwvdGV4dD48cmVjdCB4PSI0MTQiIHk9IjE4Mi41IiB3aWR0aD0iNTIiIGhlaWdodD0iNDcuNSIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjc1Ii8+PHRleHQgeD0iNDQwIiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFubsOpZSAxPC90ZXh0Pjx0ZXh0IHg9IjQ0MCIgeT0iMTc2LjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjgxICU8L3RleHQ+PHJlY3QgeD0iNTE0IiB5PSI4Ny41IiB3aWR0aD0iNTIiIGhlaWdodD0iMTQyLjUiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC43NSIvPjx0ZXh0IHg9IjU0MCIgeT0iMjUwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hbm7DqWUgMjwvdGV4dD48dGV4dCB4PSI1NDAiIHk9IjgxLjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjgzICU8L3RleHQ+PGxpbmUgeDE9IjM4MCIgeTE9IjIzMCIgeDI9IjYwMCIgeTI9IjIzMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjIzMCIgeDI9IjM4MCIgeTI9IjM0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0OTAiIHk9IjI3NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YXhlIHF1aSBwYXJ0IGRlIDgwPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMjIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxlcyBtw6ptZXMgZG9ubsOpZXMgKDgxICUgcHVpcyA4MyAlKSwgZGV1eCBpbXByZXNzaW9ucyB0csOocyBkaWZmw6lyZW50ZXM8L3RleHQ+PC9zdmc+)
*Mêmes données, deux graphiques : avec un axe qui part de 80, une hausse de 2 points semble énorme.*
<!-- /schema -->

Lire, c'est répondre à des questions précises. Les réflexes :

| Réflexe | Pourquoi |
|---|---|
| Lire le **titre** | savoir de quoi on parle |
| Lire les **légendes des axes** | savoir ce qui est mesuré, et dans quelle unité |
| Repérer l'**échelle** | une graduation peut valoir $1$, $10$ ou $100$ |
| Vérifier si l'axe part de **zéro** | sinon les écarts paraissent bien plus grands qu'ils ne sont |

> ⚠️ **Le piège le plus courant** : un axe vertical qui commence à $80$ au lieu de $0$
> transforme une hausse de $2\ \%$ en une montagne. Toujours regarder d'où part l'axe
> avant de commenter.

---

## 7. À retenir absolument

| | |
|---|---|
| Effectif | le nombre de fois qu'une valeur apparaît |
| Contrôle des effectifs | leur somme = effectif total |
| Fréquence | $\dfrac{\text{effectif}}{\text{effectif total}}$ |
| Trois écritures | fraction, décimale, pourcentage |
| Contrôle des fréquences | leur somme = $1$, soit $100\ \%$ |
| Angle d'un secteur | fréquence $\times\ 360°$ |
| Moyenne | $\dfrac{\text{somme des valeurs}}{\text{effectif total}}$ |
| Valeurs répétées | multiplier chaque valeur par son effectif |
| Diagramme circulaire | pour une **répartition** |
| Diagramme en barres | pour **comparer** |

---

## 8. Les erreurs qui coûtent des points

1. **Diviser par le nombre de valeurs distinctes** au lieu de l'effectif total.
2. **Oublier de multiplier par l'effectif** dans une moyenne : chaque valeur compte
   autant de fois qu'elle apparaît.
3. **Confondre effectif et fréquence** : l'un est un nombre d'individus, l'autre une
   proportion.
4. **Oublier de vérifier que la somme des fréquences vaut $1$** — c'est le contrôle le
   plus rapide.
5. **Se tromper sur le total dans un diagramme circulaire** : c'est $360°$, pas $100$.
6. **Comparer deux effectifs de groupes de tailles différentes** au lieu de comparer
   leurs fréquences.
7. **Commenter un graphique sans regarder l'échelle** ni l'origine de l'axe.
8. **Croire que la moyenne décrit toute la série** : deux séries très différentes
   peuvent avoir la même.
