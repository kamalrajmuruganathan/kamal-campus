---
id: tale-techno-math-statistiques-deux-variables
titre: "Séries statistiques à deux variables : changement de variable"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Statistiques à deux variables, ajustement affine (Première technologique)
  - Fonction logarithme décimal (Terminale technologique)
  - Fonctions exponentielles x ↦ a^x (Terminale technologique)
statut: brouillon
relu_par: null
---

# Séries statistiques à deux variables : changement de variable

> En Première, tu as ajusté des nuages de points **rectilignes** par une droite.
> Mais dans la vraie vie, beaucoup de phénomènes ne sont pas linéaires : une
> audience qui double chaque année, une distance de freinage qui explose avec la
> vitesse. L'idée de Terminale : **transformer** une des variables — poser
> $z = \log(y)$, $z = \dfrac{1}{y}$ ou $z = y^2$ — pour que le nuage transformé
> devienne rectiligne. On ajuste alors une droite… et on revient à $y$.

---

## 1. Ce que tu sais déjà (rappels de Première)

- Une série à deux variables quantitatives, c'est des couples $(x_i\,;y_i)$ :
  chaque individu est un **point** du nuage.
- Le **point moyen** $\mathrm{G}(\bar x\,;\bar y)$ est le centre de gravité du
  nuage ; la droite d'ajustement passe par lui.
- Quand le nuage a une allure **rectiligne**, on l'ajuste par une droite
  $y = ax + b$ obtenue par la **méthode des moindres carrés** (à la
  calculatrice ou au tableur).
- L'ajustement sert à **interpoler** (estimer à l'intérieur des données) ou à
  **extrapoler** (au-delà des données — avec prudence).

> **Exemple.** Tension et intensité d'un conducteur ohmique : nuage aligné,
> ajustement affine direct, la pente est la résistance. C'était la Première.

---

## 2. Quand la droite ne suffit plus

Certains nuages sont **manifestement courbes** : ajuster une droite serait un
contresens (c'était déjà une « erreur qui coûte des points » en Première).

Deux tests rapides sur un tableau de valeurs, quand les $x_i$ sont régulièrement
espacés :

| Ce que tu observes sur les $y_i$ | Allure du nuage | Modèle probable |
|---|---|---|
| les **différences** $y_{i+1} - y_i$ sont à peu près constantes | rectiligne | $y = ax + b$ : la Première suffit |
| les **quotients** $\dfrac{y_{i+1}}{y_i}$ sont à peu près constants | croissance (ou décroissance) de plus en plus rapide | exponentiel → poser $z = \log(y)$ |
| $y$ est à peu près **divisé par** $k$ quand $x$ est **multiplié par** $k$ | branche d'hyperbole | inverse → poser $z = \dfrac{1}{y}$ |
| les $y_i^2$ (ou les $x_i^2$) s'alignent avec l'autre variable | demi-parabole couchée | carré → poser $z = y^2$ (ou $X = x^2$) |

⚠️ Au bac, le changement de variable est **donné par l'énoncé** (« on pose
$z = \log(y)$ »). Tu n'as pas à le deviner — mais comprendre pourquoi celui-là
marche te fait gagner du temps et des points d'interprétation.

---

## 3. Le principe du changement de variable

$$\boxed{\text{nuage courbe en } (x\,;y) \xrightarrow{\ z = f(y)\ } \text{nuage rectiligne en } (x\,;z) \xrightarrow{\ \text{moindres carrés}\ } z = ax + b \xrightarrow{\ \text{retour}\ } y}$$

### La méthode en 4 étapes

1. **Poser** la nouvelle variable donnée par l'énoncé et **compléter le tableau**
   avec les valeurs de $z_i$ (arrondies comme demandé).
2. **Représenter** le nuage des points $(x_i\,;z_i)$ et constater qu'il est
   **sensiblement rectiligne**.
3. **Ajuster** : la calculatrice donne $z = ax + b$ (moindres carrés, comme en
   Première — c'est le même outil, appliqué à $z$).
4. **Revenir à $y$** en inversant le changement de variable, puis utiliser le
   modèle obtenu pour interpoler ou extrapoler.

### Les trois retours à $y$ à connaître

| Changement posé | Ajustement obtenu | Retour à $y$ |
|---|---|---|
| $z = \log(y)$ | $z = ax + b$ | $\boxed{y = 10^{\,ax+b} = 10^b \times \left(10^a\right)^x}$ |
| $z = \dfrac{1}{y}$ | $z = ax + b$ | $\boxed{y = \dfrac{1}{ax+b}}$ |
| $z = y^2$ (avec $y > 0$) | $z = ax + b$ | $\boxed{y = \sqrt{ax+b}}$ |

Le premier retour utilise la définition du **logarithme décimal** :
$\log(y) = t \iff y = 10^{\,t}$, et les propriétés des **fonctions
exponentielles** : $10^{\,ax+b} = 10^b \times (10^a)^x$.

---

## 4. Le changement $z = \log(y)$ — croissances exponentielles

<!-- schema:changement-variable-log -->
![Abonnés d’une chaîne : le nuage (x ; y) monte de plus en plus vite, mais le nuage (x ; log y) est presque aligné sur la droite z = 0,175x + 3,30, d’où y ≈ 1 995 × 1,50ˣ.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48c3ZnIHg9IjAiIHk9IjMwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIwIDI3MCIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLHNhbnMtc2VyaWYiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMjcwIiBmaWxsPSIjZmZmZmZmIi8+PGxpbmUgeDE9IjYyLjUzIiB5MT0iMzQiIHgyPSI2Mi41MyIgeTI9IjIzNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMTAuMDgiIHkxPSIzNCIgeDI9IjExMC4wOCIgeTI9IjIzNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNTcuNjIiIHkxPSIzNCIgeDI9IjE1Ny42MiIgeTI9IjIzNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDUuMTciIHkxPSIzNCIgeDI9IjIwNS4xNyIgeTI9IjIzNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNTIuNzIiIHkxPSIzNCIgeDI9IjI1Mi43MiIgeTI9IjIzNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNCIgeTE9IjIyMi44NiIgeDI9IjI4NiIgeTI9IjIyMi44NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNCIgeTE9IjE5MC4wMiIgeDI9IjI4NiIgeTI9IjE5MC4wMiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNCIgeTE9IjE1Ny4xNyIgeDI9IjI4NiIgeTI9IjE1Ny4xNyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNCIgeTE9IjEyNC4zMyIgeDI9IjI4NiIgeTI9IjEyNC4zMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNCIgeTE9IjkxLjQ4IiB4Mj0iMjg2IiB5Mj0iOTEuNDgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQiIHkxPSI1OC42MyIgeDI9IjI4NiIgeTI9IjU4LjYzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0IiB5MT0iMjIyLjg2IiB4Mj0iMjg1IiB5Mj0iMjIyLjg2IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI5NCwyMjIuODYgMjg1LDIxOC4zNiAyODUsMjI3LjM2IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjYyLjUzIiB5MT0iMjM2IiB4Mj0iNjIuNTMiIHkyPSIzNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2Mi41MywyNiA1OC4wMywzNSA2Ny4wMywzNSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjI5MCIgeT0iMjQwLjg2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPng8L3RleHQ+PHRleHQgeD0iNTAuNTMiIHk9IjMwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+PHRleHQgeD0iMTEwLjA4IiB5PSIyMzguODYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMTU3LjYyIiB5PSIyMzguODYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMjA1LjE3IiB5PSIyMzguODYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iMjUyLjcyIiB5PSIyMzguODYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PHRleHQgeD0iNTYuNTMiIHk9IjE5NC4wMiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MiAwMDA8L3RleHQ+PHRleHQgeD0iNTYuNTMiIHk9IjE2MS4xNyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NCAwMDA8L3RleHQ+PHRleHQgeD0iNTYuNTMiIHk9IjEyOC4zMyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NiAwMDA8L3RleHQ+PHRleHQgeD0iNTYuNTMiIHk9Ijk1LjQ4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj44IDAwMDwvdGV4dD48dGV4dCB4PSI1Ni41MyIgeT0iNjIuNjMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEwIDAwMDwvdGV4dD48dGV4dCB4PSI1NC41MyIgeT0iMjM4Ljg2IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxjbGlwUGF0aCBpZD0iem9uZTAiPjxyZWN0IHg9IjM0IiB5PSIzNCIgd2lkdGg9IjI1MiIgaGVpZ2h0PSIyMDIiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lMCkiPjxwYXRoIGQ9Ik02Mi41IDE5MC4xTDYzLjYgMTg5LjlMNjQuNiAxODkuNkw2NS43IDE4OS4zTDY2LjcgMTg5TDY3LjggMTg4LjdMNjguOCAxODguNEw2OS45IDE4OEw3MC45IDE4Ny43TDcxLjkgMTg3LjRMNzMgMTg3LjFMNzQgMTg2LjhMNzUuMSAxODYuNUw3Ni4xIDE4Ni4xTDc3LjIgMTg1LjhMNzguMiAxODUuNUw3OS4zIDE4NS4xTDgwLjMgMTg0LjhMODEuNCAxODQuNUw4Mi40IDE4NC4xTDgzLjQgMTgzLjhMODQuNSAxODMuNEw4NS41IDE4My4xTDg2LjYgMTgyLjdMODcuNiAxODIuNEw4OC43IDE4Mkw4OS43IDE4MS42TDkwLjggMTgxLjNMOTEuOCAxODAuOUw5Mi45IDE4MC41TDkzLjkgMTgwLjFMOTUgMTc5LjhMOTYgMTc5LjRMOTcgMTc5TDk4LjEgMTc4LjZMOTkuMSAxNzguMkwxMDAuMiAxNzcuOEwxMDEuMiAxNzcuNEwxMDIuMyAxNzdMMTAzLjMgMTc2LjZMMTA0LjQgMTc2LjJMMTA1LjQgMTc1LjhMMTA2LjUgMTc1LjNMMTA3LjUgMTc0LjlMMTA4LjYgMTc0LjVMMTA5LjYgMTc0TDExMC42IDE3My42TDExMS43IDE3My4yTDExMi43IDE3Mi43TDExMy44IDE3Mi4zTDExNC44IDE3MS44TDExNS45IDE3MS40TDExNi45IDE3MC45TDExOCAxNzAuNEwxMTkgMTcwTDEyMC4xIDE2OS41TDEyMS4xIDE2OUwxMjIuMiAxNjguNkwxMjMuMiAxNjguMUwxMjQuMiAxNjcuNkwxMjUuMyAxNjcuMUwxMjYuMyAxNjYuNkwxMjcuNCAxNjYuMUwxMjguNCAxNjUuNkwxMjkuNSAxNjUuMUwxMzAuNSAxNjQuNUwxMzEuNiAxNjRMMTMyLjYgMTYzLjVMMTMzLjcgMTYzTDEzNC43IDE2Mi40TDEzNS44IDE2MS45TDEzNi44IDE2MS40TDEzNy44IDE2MC44TDEzOC45IDE2MC4yTDEzOS45IDE1OS43TDE0MSAxNTkuMUwxNDIgMTU4LjZMMTQzLjEgMTU4TDE0NC4xIDE1Ny40TDE0NS4yIDE1Ni44TDE0Ni4yIDE1Ni4yTDE0Ny4zIDE1NS42TDE0OC4zIDE1NUwxNDkuMyAxNTQuNEwxNTAuNCAxNTMuOEwxNTEuNCAxNTMuMkwxNTIuNSAxNTIuNkwxNTMuNSAxNTEuOUwxNTQuNiAxNTEuM0wxNTUuNiAxNTAuN0wxNTYuNyAxNTBMMTU3LjcgMTQ5LjRMMTU4LjggMTQ4LjdMMTU5LjggMTQ4LjFMMTYwLjkgMTQ3LjRMMTYxLjkgMTQ2LjdMMTYyLjkgMTQ2TDE2NCAxNDUuM0wxNjUgMTQ0LjdMMTY2LjEgMTQ0TDE2Ny4xIDE0My4zTDE2OC4yIDE0Mi41TDE2OS4yIDE0MS44TDE3MC4zIDE0MS4xTDE3MS4zIDE0MC40TDE3Mi40IDEzOS42TDE3My40IDEzOC45TDE3NC41IDEzOC4xTDE3NS41IDEzNy40TDE3Ni41IDEzNi42TDE3Ny42IDEzNS44TDE3OC42IDEzNS4xTDE3OS43IDEzNC4zTDE4MC43IDEzMy41TDE4MS44IDEzMi43TDE4Mi44IDEzMS45TDE4My45IDEzMS4xTDE4NC45IDEzMC4zTDE4NiAxMjkuNEwxODcgMTI4LjZMMTg4LjEgMTI3LjhMMTg5LjEgMTI2LjlMMTkwLjEgMTI2LjFMMTkxLjIgMTI1LjJMMTkyLjIgMTI0LjNMMTkzLjMgMTIzLjRMMTk0LjMgMTIyLjVMMTk1LjQgMTIxLjZMMTk2LjQgMTIwLjdMMTk3LjUgMTE5LjhMMTk4LjUgMTE4LjlMMTk5LjYgMTE4TDIwMC42IDExN0wyMDEuNyAxMTYuMUwyMDIuNyAxMTUuMUwyMDMuNyAxMTQuMkwyMDQuOCAxMTMuMkwyMDUuOCAxMTIuMkwyMDYuOSAxMTEuMkwyMDcuOSAxMTAuM0wyMDkgMTA5LjJMMjEwIDEwOC4yTDIxMS4xIDEwNy4yTDIxMi4xIDEwNi4yTDIxMy4yIDEwNS4xTDIxNC4yIDEwNC4xTDIxNS4yIDEwM0wyMTYuMyAxMDEuOUwyMTcuMyAxMDAuOUwyMTguNCA5OS44TDIxOS40IDk4LjdMMjIwLjUgOTcuNkwyMjEuNSA5Ni40TDIyMi42IDk1LjNMMjIzLjYgOTQuMkwyMjQuNyA5M0wyMjUuNyA5MS45TDIyNi44IDkwLjdMMjI3LjggODkuNUwyMjguOCA4OC4zTDIyOS45IDg3LjFMMjMwLjkgODUuOUwyMzIgODQuN0wyMzMgODMuNUwyMzQuMSA4Mi4yTDIzNS4xIDgxTDIzNi4yIDc5LjdMMjM3LjIgNzguNEwyMzguMyA3Ny4xTDIzOS4zIDc1LjhMMjQwLjQgNzQuNUwyNDEuNCA3My4yTDI0Mi40IDcxLjhMMjQzLjUgNzAuNUwyNDQuNSA2OS4xTDI0NS42IDY3LjhMMjQ2LjYgNjYuNEwyNDcuNyA2NUwyNDguNyA2My42TDI0OS44IDYyLjFMMjUwLjggNjAuN0wyNTEuOSA1OS4zTDI1Mi45IDU3LjhMMjU0IDU2LjNMMjU1IDU0LjhMMjU2IDUzLjNMMjU3LjEgNTEuOEwyNTguMSA1MC4zTDI1OS4yIDQ4LjdMMjYwLjIgNDcuMkwyNjEuMyA0NS42TDI2Mi4zIDQ0TDI2My40IDQyLjRMMjY0LjQgNDAuOEwyNjUuNSAzOS4yTDI2Ni41IDM3LjZMMjY3LjYgMzUuOUwyNjguNiAzNC4yTDI2OS42IDMyLjZMMjcwLjcgMzAuOUwyNzEuNyAyOS4xIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI3IDUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48Y2lyY2xlIGN4PSI2Mi41MyIgY3k9IjE5MC4wMiIgcj0iNC41IiBmaWxsPSIjMWY2ZmViIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMCIvPjxjaXJjbGUgY3g9IjExMC4wOCIgY3k9IjE3My41OSIgcj0iNC41IiBmaWxsPSIjMWY2ZmViIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMCIvPjxjaXJjbGUgY3g9IjE1Ny42MiIgY3k9IjE1MC42IiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iMjA1LjE3IiBjeT0iMTEyLjgzIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PGNpcmNsZSBjeD0iMjUyLjcyIiBjeT0iNTYuOTkiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjAiLz48L3N2Zz48dGV4dCB4PSIxNjAiIHk9IjIyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5udWFnZSAoeCA7IHkpIDogY291cmJlPC90ZXh0PjxzdmcgeD0iMzIwIiB5PSIzMCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyNzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCAyNzAiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLFNlZ29lIFVJLFJvYm90byxzYW5zLXNlcmlmIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI3MCIgZmlsbD0iI2ZmZmZmZiIvPjxsaW5lIHgxPSI2Mi41MyIgeTE9IjM0IiB4Mj0iNjIuNTMiIHkyPSIyMzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTEwLjA4IiB5MT0iMzQiIHgyPSIxMTAuMDgiIHkyPSIyMzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTU3LjYyIiB5MT0iMzQiIHgyPSIxNTcuNjIiIHkyPSIyMzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjA1LjE3IiB5MT0iMzQiIHgyPSIyMDUuMTciIHkyPSIyMzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUyLjcyIiB5MT0iMzQiIHgyPSIyNTIuNzIiIHkyPSIyMzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQiIHkxPSIyMTYuNzYiIHgyPSIyODYiIHkyPSIyMTYuNzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQiIHkxPSIxNzguMjkiIHgyPSIyODYiIHkyPSIxNzguMjkiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQiIHkxPSIxMzkuODEiIHgyPSIyODYiIHkyPSIxMzkuODEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQiIHkxPSIxMDEuMzMiIHgyPSIyODYiIHkyPSIxMDEuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQiIHkxPSI2Mi44NiIgeDI9IjI4NiIgeTI9IjYyLjg2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM0IiB5MT0iMjM2IiB4Mj0iMjg1IiB5Mj0iMjM2IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI5NCwyMzYgMjg1LDIzMS41IDI4NSwyNDAuNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI2Mi41MyIgeTE9IjIzNiIgeDI9IjYyLjUzIiB5Mj0iMzUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjIuNTMsMjYgNTguMDMsMzUgNjcuMDMsMzUiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSIyOTAiIHk9IjI1NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0Pjx0ZXh0IHg9IjUwLjUzIiB5PSIzMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj56PC90ZXh0Pjx0ZXh0IHg9IjExMC4wOCIgeT0iMjUyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjE1Ny42MiIgeT0iMjUyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjIwNS4xNyIgeT0iMjUyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0Pjx0ZXh0IHg9IjI1Mi43MiIgeT0iMjUyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj40PC90ZXh0Pjx0ZXh0IHg9IjU2LjUzIiB5PSIyMjAuNzYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjMsMjwvdGV4dD48dGV4dCB4PSI1Ni41MyIgeT0iMTgyLjI5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zLDQ8L3RleHQ+PHRleHQgeD0iNTYuNTMiIHk9IjE0My44MSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+Myw2PC90ZXh0Pjx0ZXh0IHg9IjU2LjUzIiB5PSIxMDUuMzMiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjMsODwvdGV4dD48dGV4dCB4PSI1Ni41MyIgeT0iNjYuODYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lMSI+PHJlY3QgeD0iMzQiIHk9IjM0IiB3aWR0aD0iMjUyIiBoZWlnaHQ9IjIwMiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI3pvbmUxKSI+PHBhdGggZD0iTTM0IDIxNy45TDM1LjMgMjE3TDM2LjUgMjE2LjFMMzcuOCAyMTUuMkwzOSAyMTQuM0w0MC4zIDIxMy40TDQxLjYgMjEyLjZMNDIuOCAyMTEuN0w0NC4xIDIxMC44TDQ1LjMgMjA5LjlMNDYuNiAyMDlMNDcuOSAyMDguMUw0OS4xIDIwNy4yTDUwLjQgMjA2LjNMNTEuNiAyMDUuNEw1Mi45IDIwNC41TDU0LjIgMjAzLjZMNTUuNCAyMDIuN0w1Ni43IDIwMS44TDU3LjkgMjAwLjlMNTkuMiAyMDBMNjAuNSAxOTkuMUw2MS43IDE5OC4yTDYzIDE5Ny4zTDY0LjIgMTk2LjRMNjUuNSAxOTUuNUw2Ni44IDE5NC43TDY4IDE5My44TDY5LjMgMTkyLjlMNzAuNSAxOTJMNzEuOCAxOTEuMUw3My4xIDE5MC4yTDc0LjMgMTg5LjNMNzUuNiAxODguNEw3Ni44IDE4Ny41TDc4LjEgMTg2LjZMNzkuNCAxODUuN0w4MC42IDE4NC44TDgxLjkgMTgzLjlMODMuMSAxODNMODQuNCAxODIuMUw4NS43IDE4MS4yTDg2LjkgMTgwLjNMODguMiAxNzkuNEw4OS40IDE3OC41TDkwLjcgMTc3LjZMOTIgMTc2LjhMOTMuMiAxNzUuOUw5NC41IDE3NUw5NS43IDE3NC4xTDk3IDE3My4yTDk4LjMgMTcyLjNMOTkuNSAxNzEuNEwxMDAuOCAxNzAuNUwxMDIgMTY5LjZMMTAzLjMgMTY4LjdMMTA0LjYgMTY3LjhMMTA1LjggMTY2LjlMMTA3LjEgMTY2TDEwOC4zIDE2NS4xTDEwOS42IDE2NC4yTDExMC45IDE2My4zTDExMi4xIDE2Mi40TDExMy40IDE2MS41TDExNC42IDE2MC42TDExNS45IDE1OS43TDExNy4yIDE1OC45TDExOC40IDE1OEwxMTkuNyAxNTcuMUwxMjAuOSAxNTYuMkwxMjIuMiAxNTUuM0wxMjMuNSAxNTQuNEwxMjQuNyAxNTMuNUwxMjYgMTUyLjZMMTI3LjIgMTUxLjdMMTI4LjUgMTUwLjhMMTI5LjggMTQ5LjlMMTMxIDE0OUwxMzIuMyAxNDguMUwxMzMuNSAxNDcuMkwxMzQuOCAxNDYuM0wxMzYuMSAxNDUuNEwxMzcuMyAxNDQuNUwxMzguNiAxNDMuNkwxMzkuOCAxNDIuN0wxNDEuMSAxNDEuOEwxNDIuNCAxNDFMMTQzLjYgMTQwLjFMMTQ0LjkgMTM5LjJMMTQ2LjEgMTM4LjNMMTQ3LjQgMTM3LjRMMTQ4LjcgMTM2LjVMMTQ5LjkgMTM1LjZMMTUxLjIgMTM0LjdMMTUyLjQgMTMzLjhMMTUzLjcgMTMyLjlMMTU1IDEzMkwxNTYuMiAxMzEuMUwxNTcuNSAxMzAuMkwxNTguNyAxMjkuM0wxNjAgMTI4LjRMMTYxLjMgMTI3LjVMMTYyLjUgMTI2LjZMMTYzLjggMTI1LjdMMTY1IDEyNC44TDE2Ni4zIDEyMy45TDE2Ny42IDEyMy4xTDE2OC44IDEyMi4yTDE3MC4xIDEyMS4zTDE3MS4zIDEyMC40TDE3Mi42IDExOS41TDE3My45IDExOC42TDE3NS4xIDExNy43TDE3Ni40IDExNi44TDE3Ny42IDExNS45TDE3OC45IDExNUwxODAuMiAxMTQuMUwxODEuNCAxMTMuMkwxODIuNyAxMTIuM0wxODMuOSAxMTEuNEwxODUuMiAxMTAuNUwxODYuNSAxMDkuNkwxODcuNyAxMDguN0wxODkgMTA3LjhMMTkwLjIgMTA2LjlMMTkxLjUgMTA2LjFMMTkyLjggMTA1LjJMMTk0IDEwNC4zTDE5NS4zIDEwMy40TDE5Ni41IDEwMi41TDE5Ny44IDEwMS42TDE5OS4xIDEwMC43TDIwMC4zIDk5LjhMMjAxLjYgOTguOUwyMDIuOCA5OEwyMDQuMSA5Ny4xTDIwNS40IDk2LjJMMjA2LjYgOTUuM0wyMDcuOSA5NC40TDIwOS4xIDkzLjVMMjEwLjQgOTIuNkwyMTEuNyA5MS43TDIxMi45IDkwLjhMMjE0LjIgODkuOUwyMTUuNCA4OUwyMTYuNyA4OC4yTDIxOCA4Ny4zTDIxOS4yIDg2LjRMMjIwLjUgODUuNUwyMjEuNyA4NC42TDIyMyA4My43TDIyNC4zIDgyLjhMMjI1LjUgODEuOUwyMjYuOCA4MUwyMjggODAuMUwyMjkuMyA3OS4yTDIzMC42IDc4LjNMMjMxLjggNzcuNEwyMzMuMSA3Ni41TDIzNC4zIDc1LjZMMjM1LjYgNzQuN0wyMzYuOSA3My44TDIzOC4xIDcyLjlMMjM5LjQgNzJMMjQwLjYgNzEuMUwyNDEuOSA3MC4zTDI0My4yIDY5LjRMMjQ0LjQgNjguNUwyNDUuNyA2Ny42TDI0Ni45IDY2LjdMMjQ4LjIgNjUuOEwyNDkuNSA2NC45TDI1MC43IDY0TDI1MiA2My4xTDI1My4yIDYyLjJMMjU0LjUgNjEuM0wyNTUuOCA2MC40TDI1NyA1OS41TDI1OC4zIDU4LjZMMjU5LjUgNTcuN0wyNjAuOCA1Ni44TDI2Mi4xIDU1LjlMMjYzLjMgNTVMMjY0LjYgNTQuMUwyNjUuOCA1My4yTDI2Ny4xIDUyLjRMMjY4LjQgNTEuNUwyNjkuNiA1MC42TDI3MC45IDQ5LjdMMjcyLjEgNDguOEwyNzMuNCA0Ny45TDI3NC43IDQ3TDI3NS45IDQ2LjFMMjc3LjIgNDUuMkwyNzguNCA0NC4zTDI3OS43IDQzLjRMMjgxIDQyLjVMMjgyLjIgNDEuNkwyODMuNSA0MC43TDI4NC43IDM5LjhMMjg2IDM4LjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGNpcmNsZSBjeD0iNjIuNTMiIGN5PSIxOTcuMzMiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjAiLz48Y2lyY2xlIGN4PSIxMTAuMDgiIGN5PSIxNjMuNDUiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjAiLz48Y2lyY2xlIGN4PSIxNTcuNjIiIGN5PSIxMzEuNDUiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjAiLz48Y2lyY2xlIGN4PSIyMDUuMTciIGN5PSI5Ni4zMiIgcj0iNC41IiBmaWxsPSIjMWY2ZmViIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMCIvPjxjaXJjbGUgY3g9IjI1Mi43MiIgY3k9IjYyLjAzIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTUwIiB5PSI3MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+eiA9IDAsMTc1eCArIDMsMzA8L3RleHQ+PC9zdmc+PHRleHQgeD0iNDgwIiB5PSIyMiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+bnVhZ2UgKHggOyB6ID0gbG9nIHkpIDogZHJvaXRlPC90ZXh0Pjwvc3ZnPg==)
*Abonnés d’une chaîne : le nuage (x ; y) monte de plus en plus vite, mais le nuage (x ; log y) est presque aligné sur la droite z = 0,175x + 3,30, d’où y ≈ 1 995 × 1,50ˣ.*
<!-- /schema -->

C'est le changement de variable **vedette** de l'année : il transforme un modèle
exponentiel $y = k \times q^x$ en modèle affine, car
$\log(k \times q^x) = \log(k) + x \log(q)$ — la propriété $\log(ab) = \log a + \log b$
et $\log(a^n) = n \log a$ du chapitre logarithme.

> **Exemple complet.** Nombre d'abonnés $y$ d'une chaîne, $x$ années après son
> lancement :
>
> | $x$ (années) | $0$ | $1$ | $2$ | $3$ | $4$ |
> |---|---|---|---|---|---|
> | $y$ (abonnés) | $2\,000$ | $3\,000$ | $4\,400$ | $6\,700$ | $10\,100$ |
> | $z = \log(y)$ | $3{,}30$ | $3{,}48$ | $3{,}64$ | $3{,}83$ | $4{,}00$ |
>
> Le nuage $(x\,;y)$ monte de plus en plus vite (les quotients
> $\frac{3000}{2000} = 1{,}5$, $\frac{4400}{3000} \approx 1{,}47$… sont presque
> constants) : il n'est pas rectiligne. Le nuage $(x\,;z)$, lui, l'est : les
> $z_i$ augmentent d'environ $0{,}17$ à $0{,}18$ par an.
>
> La calculatrice donne l'ajustement par moindres carrés :
> $$z = 0{,}175\,x + 3{,}30$$
>
> **Retour à $y$** : $\log(y) = 0{,}175\,x + 3{,}30$, donc
> $$y = 10^{\,0{,}175x + 3{,}30} = 10^{3{,}30} \times \left(10^{0{,}175}\right)^x \approx 1\,995 \times 1{,}50^x$$
>
> **Interprétation** : le nombre d'abonnés est multiplié par environ $1{,}50$
> chaque année, soit $+50\,\%$ par an. On retrouve la suite géométrique des
> automatismes !

### Lire le taux d'évolution dans la pente

$$\boxed{z = ax + b \text{ avec } z = \log(y) \implies y \text{ est multiplié par } 10^a \text{ quand } x \text{ augmente de } 1}$$

Le taux d'évolution correspondant est $10^a - 1$. Ici $10^{0{,}175} \approx 1{,}50$ :
$+50\,\%$ par an. ⚠️ Ce n'est **pas** $a = 0{,}175$, ni $+17{,}5\,\%$.

---

## 5. Le changement $z = \dfrac{1}{y}$ — modèles inverses

Quand $y$ est à peu près **inversement proportionnel** à une expression affine
de $x$, le nuage $(x\,;y)$ ressemble à une branche d'hyperbole (chapitre
« fonction inverse ») ; le nuage $\left(x\,;\frac{1}{y}\right)$ est rectiligne.

> **Exemple complet.** On mesure l'intensité $y$ (en A) dans un circuit pour
> plusieurs valeurs de la résistance $x$ (en $\Omega$), sous tension constante :
>
> | $x$ ($\Omega$) | $2$ | $3$ | $4$ | $6$ |
> |---|---|---|---|---|
> | $y$ (A) | $3$ | $2$ | $1{,}5$ | $1$ |
> | $z = \dfrac{1}{y}$ | $0{,}33$ | $0{,}50$ | $0{,}67$ | $1{,}00$ |
>
> Le nuage $(x\,;y)$ est courbe (quand $x$ double de $2$ à $4$, $y$ est divisé
> par $2$). Le nuage $(x\,;z)$ est rectiligne, et la calculatrice donne
> $$z \approx 0{,}167\,x \quad (b \approx 0)$$
>
> **Retour à $y$** : $y = \dfrac{1}{0{,}167\,x} \approx \dfrac{6}{x}$.
> On reconnaît la loi d'Ohm $y = \dfrac{U}{x}$ avec $U = 6$ V.
>
> **Interpolation** : pour $x = 5\ \Omega$, $y \approx \dfrac{6}{5} = 1{,}2$ A.

---

## 6. Le changement $z = y^2$ — et les changements sur $x$

Quand c'est $y^2$ (et non $y$) qui dépend de façon affine de $x$, on pose
$z = y^2$.

> **Exemple complet.** Période $y$ (en s) d'un pendule selon sa longueur $x$
> (en m) :
>
> | $x$ (m) | $0{,}25$ | $0{,}50$ | $0{,}75$ | $1{,}00$ |
> |---|---|---|---|---|
> | $y$ (s) | $1{,}00$ | $1{,}42$ | $1{,}73$ | $2{,}00$ |
> | $z = y^2$ | $1{,}00$ | $2{,}02$ | $2{,}99$ | $4{,}00$ |
>
> Le nuage $(x\,;z)$ est presque parfaitement aligné ; la calculatrice donne
> $z \approx 3{,}99\,x + 0{,}01$, que l'on arrondit en $z \approx 4x$.
>
> **Retour à $y$** (une période est positive) : $y = \sqrt{4x} = 2\sqrt{x}$.
>
> **Interpolation** : pour $x = 0{,}64$ m, $y = 2\sqrt{0{,}64} = 1{,}6$ s.

**Le changement peut aussi porter sur l'abscisse.** Si le nuage $(x^2\,;y)$
est rectiligne, on pose $X = x^2$ et on ajuste $y = aX + b$, d'où $y = ax^2 + b$.
C'est le cas de la distance de freinage en fonction de la vitesse (voir
exercices). Le principe est identique : **on transforme une variable pour se
ramener à une droite.**

---

## 7. Interpoler, extrapoler — toujours avec prudence

Une fois le modèle en $y$ reconstruit, on l'utilise comme en Première :

- **Interpoler** : estimer $y$ pour un $x$ **à l'intérieur** de la plage
  observée. Raisonnable si le nuage transformé est bien aligné.
- **Extrapoler** : estimer $y$ **au-delà** des données. À faire, mais en
  **signalant la réserve** : rien ne garantit que le modèle se prolonge.

> **Exemple (suite du §4).** Prévision pour $x = 6$ :
> $z = 0{,}175 \times 6 + 3{,}30 = 4{,}35$, donc $y = 10^{4{,}35} \approx 22\,400$
> abonnés. C'est une **extrapolation** ($x = 6$ est hors de $[0\,;4]$) : une
> croissance de $+50\,\%$ par an finit toujours par ralentir (saturation du
> public). L'estimation vaut « si la tendance se poursuit ».

⚠️ Le piège inverse existe : l'exponentielle **sous-estime** rarement à court
terme mais **explose** à long terme. Plus on extrapole loin, moins c'est fiable
— dis-le explicitement dans ta rédaction, c'est un point d'argumentation attendu.

### Répondre à « quand $y$ dépassera-t-il un seuil ? »

Avec le modèle $z = ax + b$ et $z = \log(y)$, chercher $y > s$ revient à
résoudre $ax + b > \log(s)$ : une **équation du chapitre logarithme**.

> **Exemple.** Quand $y$ dépasse-t-il $100\,000 = 10^5$ abonnés ?
> $0{,}175\,x + 3{,}30 = 5 \iff x = \dfrac{1{,}7}{0{,}175} \approx 9{,}7$ :
> dans le courant de la $10^{\text{e}}$ année — si la tendance se maintient.

---

## 8. Tableau récapitulatif

| | |
|---|---|
| Pourquoi changer de variable | ramener un nuage **courbe** à un ajustement **affine** |
| Qui fournit le changement | l'énoncé (« on pose $z = \ldots$ ») |
| Les trois changements types | $z = \log(y)$ · $z = \dfrac{1}{y}$ · $z = y^2$ (parfois $X = x^2$) |
| Étapes | tableau de $z$ → nuage $(x\,;z)$ rectiligne → $z = ax+b$ (calculatrice) → retour à $y$ |
| Retour depuis $z = \log(y)$ | $y = 10^{\,ax+b} = 10^b \times (10^a)^x$ : modèle exponentiel |
| Retour depuis $z = 1/y$ | $y = \dfrac{1}{ax+b}$ : modèle inverse |
| Retour depuis $z = y^2$ | $y = \sqrt{ax+b}$ (si $y > 0$) |
| Taux caché dans la pente (cas log) | $y$ multiplié par $10^a$ par unité de $x$ |
| Interpolation / extrapolation | dans les données / au-delà, **avec réserve explicite** |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier le retour à $y$.** L'ajustement $z = 0{,}175x + 3{,}30$ ne répond
   pas à la question « combien d'abonnés ? » : il faut écrire
   $y = 10^{\,0{,}175x+3{,}30}$ et calculer en abonnés, pas en $\log$(abonnés).
2. **Confondre la pente et le taux d'évolution** (cas $z = \log y$) : la pente
   $a = 0{,}175$ ne signifie pas $+17{,}5\,\%$ par an, mais un coefficient
   multiplicateur $10^{0{,}175} \approx 1{,}50$, donc $+50\,\%$.
3. **Prendre le log de la mauvaise variable.** Si l'énoncé pose $z = \log(y)$,
   on transforme les ordonnées ; les $x_i$ ne bougent pas. (Et $\log$ exige
   $y > 0$ — vérifie-le d'un coup d'œil.)
4. **Ajuster $(x\,;y)$ au lieu de $(x\,;z)$** à la calculatrice : la droite des
   moindres carrés doit être calculée sur le **nuage transformé**.
5. **Extrapoler sans réserve.** Annoncer « $22\,400$ abonnés dans 6 ans » sans
   préciser « si la tendance se poursuit » fait perdre le point
   d'interprétation.
6. **Se tromper d'inverse au retour.** De $z = \dfrac{1}{y}$ on tire
   $y = \dfrac{1}{z} = \dfrac{1}{ax+b}$, et non $y = ax + b$ inversé terme à
   terme ; de $z = y^2$ on tire $y = \sqrt{z}$ (pas $\dfrac{z}{2}$, pas $z^2$).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« STATISTIQUE — SÉRIES À DEUX VARIABLES QUANTITATIVES » (lignes 85-91) :
- Contenus : « Changement de variable dans l'étude graphique d'une série
  statistique » ; « Ajustement se ramenant, par changement de variable, à un
  ajustement affine ».
- Capacités : « Représenter un nuage de points en effectuant un changement de
  variable donné » ; « Utiliser un ajustement pour interpoler ou extrapoler ».

Articulation avec la Première : le chapitre
contenu/premiere-techno/maths/statistiques-deux-variables/ (nuage, point moyen,
moindres carrés à la calculatrice, interpolation/extrapolation) est le prérequis
direct ; ici on n'introduit AUCUN nouveau calcul d'ajustement, seulement la
transformation préalable. Le retour à y depuis z = log(y) s'appuie sur le
chapitre « fonction logarithme décimal » de Terminale (définition 10^x = b,
propriétés log(ab), log(a^n)) et sur les fonctions exponentielles x ↦ a^x
(écriture 10^(ax+b) = 10^b·(10^a)^x). Ces deux chapitres sont cités en prérequis.

Choix de rédaction :
- Les changements retenus (log y, 1/y, y², et X = x² sur l'abscisse) sont les
  classiques du sujet ; le texte du BO ne donne pas de liste — le libellé
  « changement de variable donné » a été traduit par l'avertissement §2 : au bac
  le changement est fourni par l'énoncé.
- La capacité « représenter le nuage transformé » est traitée par les tableaux
  et la description de l'allure ; l'appli n'affiche pas de graphique dans la
  fiche.
- Le « taux caché dans la pente » (10^a − 1) est une interprétation directe des
  propriétés de log ; il fait le lien avec les automatismes (évolutions).

Vérifications numériques faites (Python) :
- §4 : log(2000, 3000, 4400, 6700, 10100) = 3,30 / 3,48 / 3,64 / 3,83 / 4,00
  (arrondis 10^-2) ; moindres carrés sur ces z arrondis : z = 0,175x + 3,30
  EXACTEMENT (x̄ = 2, z̄ = 3,65, Sxz = 1,75, Sxx = 10) ; 10^0,175 ≈ 1,4962 ;
  10^3,30 ≈ 1995 ; extrapolation x = 6 : 10^4,35 ≈ 22 387 ≈ 22 400 ;
  seuil 10^5 : x = 1,7/0,175 ≈ 9,71.
- §5 : z = 1/y = 0,33/0,50/0,67/1,00 ; moindres carrés ≈ 0,167x (b ≈ 0) ;
  y ≈ 6/x ; y(5) = 1,2 A.
- §6 : z = y² = 1,00/2,02(=1,42²)/2,99(=1,73²)/4,00 ; moindres carrés :
  a ≈ 3,988, b ≈ 0,01 → z ≈ 4x ; y = 2√x ; y(0,64) = 1,6 s.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La liste effective des changements de variable illustrés dans le préambule ou
  les commentaires du PDF officiel (l'extraction .txt ne conserve que
  Contenus/Capacités) : vérifier que log y, 1/y, y² sont bien les exemples
  visés et qu'aucun autre (√y, ln ?) n'est privilégié.
- Le logarithme utilisé : le programme de terminale techno ne définit que le
  log DÉCIMAL — toute la fiche est en log base 10, à confirmer.
- Le point moyen du nuage transformé n'est pas mentionné dans la fiche (la
  droite passe par G(x̄ ; z̄), pas par l'image de G(x̄ ; ȳ)) : point délicat,
  laissé hors fiche volontairement — valider ce choix.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
