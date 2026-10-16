---
id: tale-techno-math-fonctions-exponentielles
titre: "Fonctions exponentielles x ↦ aˣ"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Suites arithmétiques et géométriques (Terminale technologique)
  - Suites numériques (Première technologique)
  - Puissances d'un nombre et racine carrée (Seconde)
  - Pourcentages et évolutions successives (automatismes)
statut: brouillon
relu_par: null
---

# Fonctions exponentielles $x \mapsto a^x$

> Avec les suites géométriques, tu sais calculer un capital **année par année** :
> $u_n = u_0 \times q^n$, avec $n$ entier. Mais que vaut le capital au bout de
> $2{,}5$ ans ? De $6$ mois ? Les fonctions exponentielles $x \mapsto a^x$
> répondent à cette question : elles **prolongent** les suites géométriques à
> tous les exposants, entiers ou non. Au passage, elles règlent un problème
> très concret : trouver le **taux annuel moyen** qui résume plusieurs
> évolutions successives.

---

## 1. Définition : prolonger $n \mapsto a^n$ à tous les exposants

### Ce que tu sais déjà

Pour $a > 0$ et $n$ entier naturel, tu sais calculer $a^n = a \times a \times \cdots \times a$
($n$ facteurs), avec les conventions $a^0 = 1$ et $a^1 = a$. C'est exactement une
suite géométrique de premier terme $1$ et de raison $a$ : les points
$(0\,;1)$, $(1\,;a)$, $(2\,;a^2)$, … s'alignent sur une courbe régulière.

### La définition

**Pour $a > 0$**, on admet qu'il existe une unique façon « régulière » de relier
ces points : cela définit un nombre $a^x$ pour **tout réel $x \geqslant 0$**
(et même pour tout réel $x$, avec $a^{-x} = \dfrac{1}{a^x}$).

$$\boxed{\text{La fonction exponentielle de base } a \text{ est } f : x \mapsto a^x, \text{ définie pour } a > 0}$$

Elle **prolonge** la suite géométrique $n \mapsto a^n$ : pour les valeurs
entières de $x$, on retrouve exactement les termes de la suite.

> **Exemple.** Pour $a = 3$ : $3^0 = 1$, $3^1 = 3$, $3^2 = 9$… et entre les
> entiers, la fonction donne un sens à $3^{2{,}5} = 3^2 \times 3^{0{,}5} \approx 9 \times 1{,}732 \approx 15{,}6$.
> La calculatrice le calcule avec la touche puissance : `3^2.5`.

### Deux valeurs à connaître par cœur

Pour tout $a > 0$ :

$$\boxed{a^0 = 1 \qquad \text{et} \qquad a^1 = a}$$

**Toutes les courbes $y = a^x$ passent par le point $(0\,;1)$**, quelle que soit
la base $a$.

⚠️ La base doit être **strictement positive**. $a^x$ n'est pas défini pour
$a < 0$ (que vaudrait $(-2)^{0{,}5}$ ?) — cohérent avec le chapitre suites, où
les suites géométriques sont à termes strictement positifs.

---

## 2. Sens de variation et allure de la courbe selon $a$

<!-- schema:croissance-decroissance -->
![Les deux courbes passent par (0 ; 1) : 1,05ˣ est croissante (base plus grande que 1, capital à 5 %), 0,85ˣ est décroissante (base entre 0 et 1, perte de 15 % par an) et reste positive.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDUuOTMiIHkxPSIyOCIgeDI9IjQ1LjkzIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzNS41NiIgeTE9IjI4IiB4Mj0iMTM1LjU2IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIyNS4xOSIgeTE9IjI4IiB4Mj0iMjI1LjE5IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMxNC44MSIgeTE9IjI4IiB4Mj0iMzE0LjgxIiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwNC40NCIgeTE9IjI4IiB4Mj0iNDA0LjQ0IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ5NC4wNyIgeTE9IjI4IiB4Mj0iNDk0LjA3IiB5Mj0iMzEyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjgwLjQ0IiB4Mj0iNTEyIiB5Mj0iMjgwLjQ0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjQxIiB4Mj0iNTEyIiB5Mj0iMjQxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjAxLjU2IiB4Mj0iNTEyIiB5Mj0iMjAxLjU2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTYyLjExIiB4Mj0iNTEyIiB5Mj0iMTYyLjExIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTIyLjY3IiB4Mj0iNTEyIiB5Mj0iMTIyLjY3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iODMuMjIiIHgyPSI1MTIiIHkyPSI4My4yMiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjQzLjc4IiB4Mj0iNTEyIiB5Mj0iNDMuNzgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyODAuNDQiIHgyPSI1MTEiIHkyPSIyODAuNDQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTIwLDI4MC40NCA1MTEsMjc1Ljk0IDUxMSwyODQuOTQiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iMTM1LjU2IiB5MT0iMzEyIiB4Mj0iMTM1LjU2IiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTM1LjU2LDIwIDEzMS4wNiwyOSAxNDAuMDYsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSI1MTYiIHk9IjI5OC40NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0Pjx0ZXh0IHg9IjEyMy41NiIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eTwvdGV4dD48dGV4dCB4PSI0NS45MyIgeT0iMjk2LjQ0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJI1PC90ZXh0Pjx0ZXh0IHg9IjIyNS4xOSIgeT0iMjk2LjQ0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj41PC90ZXh0Pjx0ZXh0IHg9IjMxNC44MSIgeT0iMjk2LjQ0IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xMDwvdGV4dD48dGV4dCB4PSI0MDQuNDQiIHk9IjI5Ni40NCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTU8L3RleHQ+PHRleHQgeD0iNDk0LjA3IiB5PSIyOTYuNDQiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIwPC90ZXh0Pjx0ZXh0IHg9IjEyOS41NiIgeT0iMjQ1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4wLDU8L3RleHQ+PHRleHQgeD0iMTI5LjU2IiB5PSIyMDUuNTYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iMTI5LjU2IiB5PSIxNjYuMTEiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEsNTwvdGV4dD48dGV4dCB4PSIxMjkuNTYiIHk9IjEyNi42NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjwvdGV4dD48dGV4dCB4PSIxMjkuNTYiIHk9Ijg3LjIyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yLDU8L3RleHQ+PHRleHQgeD0iMTI5LjU2IiB5PSI0Ny43OCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MzwvdGV4dD48dGV4dCB4PSIxMjcuNTYiIHk9IjI5Ni40NCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjQ4NCIgaGVpZ2h0PSIyODQiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lKSI+PHBhdGggZD0iTTI4IDIyMS42TDMwLjQgMjIxLjJMMzIuOCAyMjAuOEwzNS4zIDIyMC40TDM3LjcgMjIwTDQwLjEgMjE5LjZMNDIuNSAyMTkuMkw0NC45IDIxOC44TDQ3LjQgMjE4LjRMNDkuOCAyMThMNTIuMiAyMTcuNkw1NC42IDIxNy4yTDU3IDIxNi43TDU5LjUgMjE2LjNMNjEuOSAyMTUuOUw2NC4zIDIxNS41TDY2LjcgMjE1TDY5LjEgMjE0LjZMNzEuNiAyMTQuMkw3NCAyMTMuN0w3Ni40IDIxMy4zTDc4LjggMjEyLjhMODEuMiAyMTIuNEw4My43IDIxMS45TDg2LjEgMjExLjVMODguNSAyMTFMOTAuOSAyMTAuNkw5My4zIDIxMC4xTDk1LjggMjA5LjdMOTguMiAyMDkuMkwxMDAuNiAyMDguN0wxMDMgMjA4LjJMMTA1LjQgMjA3LjhMMTA3LjkgMjA3LjNMMTEwLjMgMjA2LjhMMTEyLjcgMjA2LjNMMTE1LjEgMjA1LjhMMTE3LjUgMjA1LjNMMTIwIDIwNC44TDEyMi40IDIwNC4zTDEyNC44IDIwMy44TDEyNy4yIDIwMy4zTDEyOS42IDIwMi44TDEzMi4xIDIwMi4zTDEzNC41IDIwMS44TDEzNi45IDIwMS4zTDEzOS4zIDIwMC43TDE0MS43IDIwMC4yTDE0NC4yIDE5OS43TDE0Ni42IDE5OS4yTDE0OSAxOTguNkwxNTEuNCAxOTguMUwxNTMuOCAxOTcuNUwxNTYuMyAxOTdMMTU4LjcgMTk2LjRMMTYxLjEgMTk1LjlMMTYzLjUgMTk1LjNMMTY1LjkgMTk0LjhMMTY4LjQgMTk0LjJMMTcwLjggMTkzLjZMMTczLjIgMTkzTDE3NS42IDE5Mi41TDE3OCAxOTEuOUwxODAuNSAxOTEuM0wxODIuOSAxOTAuN0wxODUuMyAxOTAuMUwxODcuNyAxODkuNUwxOTAuMSAxODguOUwxOTIuNiAxODguM0wxOTUgMTg3LjdMMTk3LjQgMTg3LjFMMTk5LjggMTg2LjVMMjAyLjIgMTg1LjlMMjA0LjcgMTg1LjJMMjA3LjEgMTg0LjZMMjA5LjUgMTg0TDIxMS45IDE4My4zTDIxNC4zIDE4Mi43TDIxNi44IDE4MkwyMTkuMiAxODEuNEwyMjEuNiAxODAuN0wyMjQgMTgwLjFMMjI2LjQgMTc5LjRMMjI4LjkgMTc4LjdMMjMxLjMgMTc4LjFMMjMzLjcgMTc3LjRMMjM2LjEgMTc2LjdMMjM4LjUgMTc2TDI0MSAxNzUuM0wyNDMuNCAxNzQuNkwyNDUuOCAxNzMuOUwyNDguMiAxNzMuMkwyNTAuNiAxNzIuNUwyNTMuMSAxNzEuOEwyNTUuNSAxNzEuMUwyNTcuOSAxNzAuNEwyNjAuMyAxNjkuN0wyNjIuNyAxNjguOUwyNjUuMiAxNjguMkwyNjcuNiAxNjcuNEwyNzAgMTY2LjdMMjcyLjQgMTY1LjlMMjc0LjggMTY1LjJMMjc3LjMgMTY0LjRMMjc5LjcgMTYzLjdMMjgyLjEgMTYyLjlMMjg0LjUgMTYyLjFMMjg2LjkgMTYxLjNMMjg5LjQgMTYwLjVMMjkxLjggMTU5LjhMMjk0LjIgMTU5TDI5Ni42IDE1OC4yTDI5OSAxNTcuM0wzMDEuNSAxNTYuNUwzMDMuOSAxNTUuN0wzMDYuMyAxNTQuOUwzMDguNyAxNTQuMUwzMTEuMSAxNTMuMkwzMTMuNiAxNTIuNEwzMTYgMTUxLjVMMzE4LjQgMTUwLjdMMzIwLjggMTQ5LjhMMzIzLjIgMTQ5TDMyNS43IDE0OC4xTDMyOC4xIDE0Ny4yTDMzMC41IDE0Ni4zTDMzMi45IDE0NS41TDMzNS4zIDE0NC42TDMzNy44IDE0My43TDM0MC4yIDE0Mi44TDM0Mi42IDE0MS44TDM0NSAxNDAuOUwzNDcuNCAxNDBMMzQ5LjkgMTM5LjFMMzUyLjMgMTM4LjFMMzU0LjcgMTM3LjJMMzU3LjEgMTM2LjNMMzU5LjUgMTM1LjNMMzYyIDEzNC4zTDM2NC40IDEzMy40TDM2Ni44IDEzMi40TDM2OS4yIDEzMS40TDM3MS42IDEzMC40TDM3NC4xIDEyOS41TDM3Ni41IDEyOC41TDM3OC45IDEyNy41TDM4MS4zIDEyNi40TDM4My43IDEyNS40TDM4Ni4yIDEyNC40TDM4OC42IDEyMy40TDM5MSAxMjIuM0wzOTMuNCAxMjEuM0wzOTUuOCAxMjAuMkwzOTguMyAxMTkuMkw0MDAuNyAxMTguMUw0MDMuMSAxMTdMNDA1LjUgMTE2TDQwNy45IDExNC45TDQxMC40IDExMy44TDQxMi44IDExMi43TDQxNS4yIDExMS42TDQxNy42IDExMC41TDQyMCAxMDkuM0w0MjIuNSAxMDguMkw0MjQuOSAxMDcuMUw0MjcuMyAxMDUuOUw0MjkuNyAxMDQuOEw0MzIuMSAxMDMuNkw0MzQuNiAxMDIuNEw0MzcgMTAxLjNMNDM5LjQgMTAwLjFMNDQxLjggOTguOUw0NDQuMiA5Ny43TDQ0Ni43IDk2LjVMNDQ5LjEgOTUuM0w0NTEuNSA5NEw0NTMuOSA5Mi44TDQ1Ni4zIDkxLjZMNDU4LjggOTAuM0w0NjEuMiA4OS4xTDQ2My42IDg3LjhMNDY2IDg2LjVMNDY4LjQgODUuMkw0NzAuOSA4My45TDQ3My4zIDgyLjZMNDc1LjcgODEuM0w0NzguMSA4MEw0ODAuNSA3OC43TDQ4MyA3Ny40TDQ4NS40IDc2TDQ4Ny44IDc0LjdMNDkwLjIgNzMuM0w0OTIuNiA3MS45TDQ5NS4xIDcwLjZMNDk3LjUgNjkuMkw0OTkuOSA2Ny44TDUwMi4zIDY2LjRMNTA0LjcgNjVMNTA3LjIgNjMuNUw1MDkuNiA2Mi4xTDUxMiA2MC43IiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjggNzEuM0wzMC40IDc1LjhMMzIuOCA4MC4zTDM1LjMgODQuNkwzNy43IDg4LjhMNDAuMSA5M0w0Mi41IDk3LjFMNDQuOSAxMDEuMUw0Ny40IDEwNC45TDQ5LjggMTA4LjhMNTIuMiAxMTIuNUw1NC42IDExNi4xTDU3IDExOS43TDU5LjUgMTIzLjJMNjEuOSAxMjYuNkw2NC4zIDEyOS45TDY2LjcgMTMzLjJMNjkuMSAxMzYuNEw3MS42IDEzOS41TDc0IDE0Mi42TDc2LjQgMTQ1LjZMNzguOCAxNDguNUw4MS4yIDE1MS40TDgzLjcgMTU0LjJMODYuMSAxNTYuOUw4OC41IDE1OS42TDkwLjkgMTYyLjJMOTMuMyAxNjQuOEw5NS44IDE2Ny4zTDk4LjIgMTY5LjdMMTAwLjYgMTcyLjFMMTAzIDE3NC41TDEwNS40IDE3Ni44TDEwNy45IDE3OUwxMTAuMyAxODEuMkwxMTIuNyAxODMuNEwxMTUuMSAxODUuNUwxMTcuNSAxODcuNkwxMjAgMTg5LjZMMTIyLjQgMTkxLjVMMTI0LjggMTkzLjVMMTI3LjIgMTk1LjRMMTI5LjYgMTk3LjJMMTMyLjEgMTk5TDEzNC41IDIwMC44TDEzNi45IDIwMi41TDEzOS4zIDIwNC4yTDE0MS43IDIwNS45TDE0NC4yIDIwNy41TDE0Ni42IDIwOS4xTDE0OSAyMTAuNkwxNTEuNCAyMTIuMUwxNTMuOCAyMTMuNkwxNTYuMyAyMTUuMUwxNTguNyAyMTYuNUwxNjEuMSAyMTcuOUwxNjMuNSAyMTkuMkwxNjUuOSAyMjAuNkwxNjguNCAyMjEuOUwxNzAuOCAyMjMuMUwxNzMuMiAyMjQuNEwxNzUuNiAyMjUuNkwxNzggMjI2LjhMMTgwLjUgMjI3LjlMMTgyLjkgMjI5LjFMMTg1LjMgMjMwLjJMMTg3LjcgMjMxLjNMMTkwLjEgMjMyLjNMMTkyLjYgMjMzLjRMMTk1IDIzNC40TDE5Ny40IDIzNS40TDE5OS44IDIzNi40TDIwMi4yIDIzNy4zTDIwNC43IDIzOC4zTDIwNy4xIDIzOS4yTDIwOS41IDI0MC4xTDIxMS45IDI0MUwyMTQuMyAyNDEuOEwyMTYuOCAyNDIuN0wyMTkuMiAyNDMuNUwyMjEuNiAyNDQuM0wyMjQgMjQ1LjFMMjI2LjQgMjQ1LjhMMjI4LjkgMjQ2LjZMMjMxLjMgMjQ3LjNMMjMzLjcgMjQ4TDIzNi4xIDI0OC43TDIzOC41IDI0OS40TDI0MSAyNTAuMUwyNDMuNCAyNTAuOEwyNDUuOCAyNTEuNEwyNDguMiAyNTJMMjUwLjYgMjUyLjdMMjUzLjEgMjUzLjNMMjU1LjUgMjUzLjhMMjU3LjkgMjU0LjRMMjYwLjMgMjU1TDI2Mi43IDI1NS41TDI2NS4yIDI1Ni4xTDI2Ny42IDI1Ni42TDI3MCAyNTcuMUwyNzIuNCAyNTcuNkwyNzQuOCAyNTguMUwyNzcuMyAyNTguNkwyNzkuNyAyNTkuMUwyODIuMSAyNTkuNkwyODQuNSAyNjBMMjg2LjkgMjYwLjRMMjg5LjQgMjYwLjlMMjkxLjggMjYxLjNMMjk0LjIgMjYxLjdMMjk2LjYgMjYyLjFMMjk5IDI2Mi41TDMwMS41IDI2Mi45TDMwMy45IDI2My4zTDMwNi4zIDI2My43TDMwOC43IDI2NEwzMTEuMSAyNjQuNEwzMTMuNiAyNjQuN0wzMTYgMjY1LjFMMzE4LjQgMjY1LjRMMzIwLjggMjY1LjdMMzIzLjIgMjY2LjFMMzI1LjcgMjY2LjRMMzI4LjEgMjY2LjdMMzMwLjUgMjY3TDMzMi45IDI2Ny4zTDMzNS4zIDI2Ny42TDMzNy44IDI2Ny44TDM0MC4yIDI2OC4xTDM0Mi42IDI2OC40TDM0NSAyNjguNkwzNDcuNCAyNjguOUwzNDkuOSAyNjkuMUwzNTIuMyAyNjkuNEwzNTQuNyAyNjkuNkwzNTcuMSAyNjkuOUwzNTkuNSAyNzAuMUwzNjIgMjcwLjNMMzY0LjQgMjcwLjVMMzY2LjggMjcwLjhMMzY5LjIgMjcxTDM3MS42IDI3MS4yTDM3NC4xIDI3MS40TDM3Ni41IDI3MS42TDM3OC45IDI3MS44TDM4MS4zIDI3MS45TDM4My43IDI3Mi4xTDM4Ni4yIDI3Mi4zTDM4OC42IDI3Mi41TDM5MSAyNzIuN0wzOTMuNCAyNzIuOEwzOTUuOCAyNzNMMzk4LjMgMjczLjJMNDAwLjcgMjczLjNMNDAzLjEgMjczLjVMNDA1LjUgMjczLjZMNDA3LjkgMjczLjhMNDEwLjQgMjczLjlMNDEyLjggMjc0LjFMNDE1LjIgMjc0LjJMNDE3LjYgMjc0LjNMNDIwIDI3NC41TDQyMi41IDI3NC42TDQyNC45IDI3NC43TDQyNy4zIDI3NC44TDQyOS43IDI3NUw0MzIuMSAyNzUuMUw0MzQuNiAyNzUuMkw0MzcgMjc1LjNMNDM5LjQgMjc1LjRMNDQxLjggMjc1LjVMNDQ0LjIgMjc1LjZMNDQ2LjcgMjc1LjdMNDQ5LjEgMjc1LjhMNDUxLjUgMjc1LjlMNDUzLjkgMjc2TDQ1Ni4zIDI3Ni4xTDQ1OC44IDI3Ni4yTDQ2MS4yIDI3Ni4zTDQ2My42IDI3Ni40TDQ2NiAyNzYuNUw0NjguNCAyNzYuNkw0NzAuOSAyNzYuN0w0NzMuMyAyNzYuOEw0NzUuNyAyNzYuOEw0NzguMSAyNzYuOUw0ODAuNSAyNzdMNDgzIDI3Ny4xTDQ4NS40IDI3Ny4xTDQ4Ny44IDI3Ny4yTDQ5MC4yIDI3Ny4zTDQ5Mi42IDI3Ny4zTDQ5NS4xIDI3Ny40TDQ5Ny41IDI3Ny41TDQ5OS45IDI3Ny41TDUwMi4zIDI3Ny42TDUwNC43IDI3Ny43TDUwNy4yIDI3Ny43TDUwOS42IDI3Ny44TDUxMiAyNzcuOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjx0ZXh0IHg9IjQ2Ni4xNSIgeT0iNjcuMSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+eSA9IDEsMDU8dHNwYW4gZm9udC1zaXplPSIxMC44IiBkeT0iLTYuMyI+eDwvdHNwYW4+PHRzcGFuIGR5PSI2LjMiPuKAizwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHg9IjMwNi44OSIgeT0iMjUwLjE3IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnkgPSAwLDg1PHRzcGFuIGZvbnQtc2l6ZT0iMTAuOCIgZHk9Ii02LjMiPng8L3RzcGFuPjx0c3BhbiBkeT0iNi4zIj7igIs8L3RzcGFuPjwvdGV4dD48Y2lyY2xlIGN4PSIxMzUuNTYiIGN5PSIyMDEuNTYiIHI9IjQiIGZpbGw9IiMxNjIzMmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9zdmc+)
*Les deux courbes passent par (0 ; 1) : 1,05ˣ est croissante (base plus grande que 1, capital à 5 %), 0,85ˣ est décroissante (base entre 0 et 1, perte de 15 % par an) et reste positive.*
<!-- /schema -->

Tout dépend de la position de $a$ par rapport à $1$ :

$$\boxed{a > 1 : x \mapsto a^x \text{ est strictement croissante} \qquad 0 < a < 1 : x \mapsto a^x \text{ est strictement décroissante}}$$

(Si $a = 1$, la fonction est constante égale à $1$ : sans intérêt.)

| Base | Sens de variation | Allure | Modélise… |
|---|---|---|---|
| $a > 1$ | croissante | part de $(0\,;1)$ et **grimpe** de plus en plus vite | une **croissance** (capital, population) |
| $0 < a < 1$ | décroissante | part de $(0\,;1)$ et **descend** en s'approchant de $0$ sans l'atteindre | une **décroissance** (dépréciation, décharge) |

Dans les deux cas, $a^x > 0$ pour tout $x$ : **une exponentielle ne s'annule
jamais et n'est jamais négative**.

> **Exemple.** $f(x) = 1{,}05^x$ est croissante ($1{,}05 > 1$) : c'est la courbe
> d'un capital placé à $5\,\%$. $g(x) = 0{,}85^x$ est décroissante
> ($0 < 0{,}85 < 1$) : c'est la courbe d'un matériel qui perd $15\,\%$ de sa
> valeur par an.

### Les fonctions $k \cdot a^x$ (capacité attendue)

En pratique, on part rarement de $1$ : un capital de $5\,000$ € placé à $3\,\%$
se modélise par $C(x) = 5000 \times 1{,}03^x$. Le facteur $k$ est la **valeur de
départ** (car $k \cdot a^0 = k$).

Sens de variation de $f(x) = k \cdot a^x$ :

| | $a > 1$ | $0 < a < 1$ |
|---|---|---|
| $k > 0$ | croissante | décroissante |
| $k < 0$ | décroissante | croissante |

**Si $k > 0$ (le cas des situations concrètes), multiplier par $k$ ne change pas
le sens de variation.** Si $k < 0$, la courbe est retournée : le sens s'inverse.

> **Exemple.** $f(x) = 200 \times 0{,}9^x$ est décroissante ($k = 200 > 0$ et
> $0 < 0{,}9 < 1$). $g(x) = -3 \times 1{,}2^x$ est décroissante aussi : la base
> $1{,}2 > 1$ ferait croître, mais $k = -3 < 0$ inverse le sens.

---

## 3. Propriétés algébriques

Les règles des puissances entières restent vraies pour **tous** les exposants
réels. Pour $a > 0$, $x$ et $y$ réels, $n$ entier :

$$\boxed{a^{x+y} = a^x \times a^y \qquad a^{x-y} = \frac{a^x}{a^y} \qquad a^{nx} = \left(a^x\right)^n}$$

Et leurs conséquences directes :

$$a^{-x} = \frac{1}{a^x} \qquad \qquad a^{1/2} = \sqrt{a}$$

> **Exemple (somme).** $2^x \times 2^3 = 2^{x+3}$ : multiplier par $2^3 = 8$,
> c'est augmenter l'exposant de $3$.

> **Exemple (différence).** $\dfrac{3^{x+2}}{3^x} = 3^{x+2-x} = 3^2 = 9$ : le
> quotient ne dépend pas de $x$.

> **Exemple (produit d'exposants).** $5^{3x} = \left(5^x\right)^3$ : élever au
> cube, c'est tripler l'exposant.

> **Exemple (racine).** $a^{1/2}$ est le nombre positif dont le carré vaut $a$,
> car $\left(a^{1/2}\right)^2 = a^{2 \times \frac{1}{2}} = a^1 = a$. Donc
> $a^{1/2} = \sqrt{a}$ : par exemple $9^{1/2} = 3$.

### Traduction concrète : $a^{x+1} = a \times a^x$

Si $N(x) = k \cdot a^x$ modélise une quantité, alors

$$N(x+1) = k \cdot a^{x+1} = a \times k \cdot a^x = a \times N(x)$$

**D'une unité de temps à la suivante, la quantité est toujours multipliée par
$a$** — exactement comme une suite géométrique de raison $a$. C'est le lien
entre ce chapitre et le précédent.

---

## 4. L'exposant $\dfrac{1}{n}$ : le taux moyen équivalent à $n$ évolutions

### L'idée

De même que $a^{1/2} = \sqrt{a}$, le nombre $a^{1/n}$ est le nombre positif qui,
élevé à la puissance $n$, redonne $a$ :

$$\left(a^{1/n}\right)^n = a^{n \times \frac{1}{n}} = a^1 = a$$

**$a^{1/n}$ est donc le coefficient qui, appliqué $n$ fois de suite, produit le
même effet que le coefficient $a$ appliqué une fois.**

### La méthode du taux moyen (capacité attendue)

Une grandeur subit $n$ évolutions successives, de coefficient global $C$
(c'est-à-dire : valeur finale $=$ $C \times$ valeur initiale). Le **taux moyen**
est le taux unique $t_m$ qui, répété $n$ fois, donne la même évolution globale :

$$\boxed{c_m = C^{1/n} \qquad \text{puis} \qquad t_m = c_m - 1}$$

1. Calcule le coefficient global $C = \dfrac{\text{valeur finale}}{\text{valeur initiale}}$ (ou $C = 1 + \dfrac{t_{\text{global}}}{100}$).
2. Prends la racine $n$-ième : $c_m = C^{1/n}$ (touche puissance de la calculatrice, exposant $1/n$).
3. Reviens au taux : $t_m = c_m - 1$, à convertir en pourcentage.

> **Exemple (hausse).** Un loyer augmente de $44\,\%$ en $2$ ans. Coefficient
> global : $C = 1{,}44$. Coefficient moyen annuel : $c_m = 1{,}44^{1/2} = \sqrt{1{,}44} = 1{,}2$.
> Taux moyen : $+20\,\%$ par an — et **pas** $44/2 = 22\,\%$, car les hausses se
> composent : $1{,}2 \times 1{,}2 = 1{,}44$ mais $1{,}22 \times 1{,}22 = 1{,}4884$.

> **Exemple (baisse).** Les ventes d'un produit chutent de $27{,}1\,\%$ en $3$
> ans : $C = 1 - 0{,}271 = 0{,}729$. Coefficient moyen :
> $c_m = 0{,}729^{1/3} = 0{,}9$ (car $0{,}9^3 = 0{,}729$). Taux moyen :
> $0{,}9 - 1 = -0{,}1$, soit $-10\,\%$ par an.

⚠️ Le taux moyen est le pendant « fonctions » de la **moyenne géométrique** vue
au chapitre suites : pour $n = 2$, $C^{1/2} = \sqrt{C}$ est la moyenne
géométrique — jamais la moyenne arithmétique des taux.

---

## 5. Modéliser avec $k \cdot a^x$ : les situations à reconnaître

Une grandeur qui évolue de $t\,\%$ **par unité de temps** se modélise par

$$\boxed{f(x) = k \times a^x \qquad \text{avec } k = \text{valeur initiale et } a = 1 + \frac{t}{100}}$$

| Situation | $t$ | Base $a$ | Fonction |
|---|---|---|---|
| Capital de $5\,000$ € à $3\,\%$ par an | $+3\,\%$ | $1{,}03$ | $C(x) = 5000 \times 1{,}03^x$ |
| Machine de $12\,000$ € qui perd $15\,\%$ par an | $-15\,\%$ | $0{,}85$ | $V(x) = 12000 \times 0{,}85^x$ |
| Population de bactéries qui double chaque heure | $+100\,\%$ | $2$ | $N(x) = N_0 \times 2^x$ |

L'avantage sur la suite $u_n = u_0 \, q^n$ : **$x$ n'est plus forcément
entier**. On peut évaluer la grandeur à tout instant.

> **Exemple.** Capital $C(x) = 5000 \times 1{,}03^x$. Au bout de $10$ ans :
> $C(10) = 5000 \times 1{,}03^{10} \approx 5000 \times 1{,}3439 \approx 6\,719{,}58$ €.
> Au bout de $6$ mois ($x = 0{,}5$) :
> $C(0{,}5) = 5000 \times 1{,}03^{0{,}5} = 5000 \times \sqrt{1{,}03} \approx 5\,074{,}44$ €.

> **Exemple (dépréciation).** $V(x) = 12000 \times 0{,}85^x$. Après $5$ ans :
> $V(5) = 12000 \times 0{,}85^5 \approx 12000 \times 0{,}4437 \approx 5\,324{,}46$ €.
> La machine a perdu environ $55{,}6\,\%$ de sa valeur — et **pas**
> $5 \times 15 = 75\,\%$ : les baisses se composent, elles ne s'additionnent pas.

---

## 6. Tableau récapitulatif

| À savoir | Formule / résultat |
|---|---|
| Définition | $x \mapsto a^x$, $a > 0$, prolonge la suite géométrique $n \mapsto a^n$ |
| Valeurs clés | $a^0 = 1$ ; $a^1 = a$ ; courbe passe par $(0\,;1)$ |
| Signe | $a^x > 0$ pour tout $x$ : jamais nul, jamais négatif |
| Variations | $a > 1$ : croissante ; $0 < a < 1$ : décroissante |
| $k \cdot a^x$, $k > 0$ | même sens de variation que $a^x$ (inversé si $k < 0$) |
| Produit | $a^{x+y} = a^x \, a^y$ |
| Quotient | $a^{x-y} = \dfrac{a^x}{a^y}$ ; $a^{-x} = \dfrac{1}{a^x}$ |
| Puissance | $a^{nx} = (a^x)^n$ |
| Racine | $a^{1/2} = \sqrt{a}$ ; $\left(a^{1/n}\right)^n = a$ |
| Taux moyen sur $n$ évolutions | $c_m = C^{1/n}$, puis $t_m = c_m - 1$ |
| Modélisation à $t\,\%$ par période | $f(x) = k \times a^x$, $a = 1 + \dfrac{t}{100}$, $k$ = valeur initiale |

---

## 7. Les erreurs qui coûtent des points

1. **Diviser le taux global par $n$ pour trouver le taux moyen.** $+44\,\%$ en
   $2$ ans ne fait pas $+22\,\%$ par an mais $1{,}44^{1/2} - 1 = +20\,\%$. Les
   évolutions se **multiplient** : passe toujours par les coefficients et
   l'exposant $1/n$.
2. **Se tromper de base pour une baisse.** $-15\,\%$ par an donne $a = 0{,}85$,
   jamais $a = -0{,}15$ ni $a = 1{,}15$. Une base négative n'a même pas de sens.
3. **Confondre $a^{x+y}$ et $a^x + a^y$.** L'exponentielle transforme les
   sommes d'exposants en **produits** : $a^{x+y} = a^x \times a^y$. Vérifie sur
   un exemple : $2^{1+2} = 8$ alors que $2^1 + 2^2 = 6$.
4. **Juger le sens de variation sur $k$ au lieu de $a$** (ou l'inverse). Pour
   $k \cdot a^x$ avec $k > 0$, seule la base décide : $a > 1$ croissante,
   $0 < a < 1$ décroissante. Et si $k < 0$, le sens s'inverse.
5. **Croire que $a^x$ peut s'annuler ou devenir négatif.** $0{,}85^x$ se
   rapproche de $0$ mais ne l'atteint jamais : une valeur qui se déprécie de
   $15\,\%$ par an ne devient jamais nulle dans ce modèle.
6. **Additionner des pertes successives.** Perdre $15\,\%$ par an pendant $5$
   ans, ce n'est pas perdre $75\,\%$ : le coefficient global est
   $0{,}85^5 \approx 0{,}444$, soit environ $-55{,}6\,\%$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTIONS EXPONENTIELLES x ↦ a^x (a > 0) » (lignes 53-62).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Contenus : définition de x ↦ a^x pour x positif comme prolongement de n ↦ a^n
  (§1) ; sens de variation et allure de la courbe selon a (§2) ; propriétés
  algébriques a^(x+y), a^(x−y), a^(nx) (§3) ; exposant 1/n et taux moyen
  équivalent à n évolutions (§4).
- Capacités : sens de variation des fonctions k·a^x (§2) ; utiliser les
  propriétés algébriques (§3) ; calculer le taux d'évolution moyen équivalent à
  n évolutions successives (§4). La modélisation (§5) illustre ces capacités
  dans les contextes de la voie technologique (capital, dépréciation, croissance).

Prérequis : chapitre « Suites arithmétiques et géométriques » de Terminale
technologique (contenu/terminale-techno/maths/suites-arithmetiques-geometriques/) —
le taux moyen prolonge la moyenne géométrique de deux coefficients (n = 2) vue
dans ce chapitre, comme annoncé dans ses propres notes de production ; le lien
a^(x+1) = a·a^x renvoie à la raison d'une suite géométrique. Également : suites
numériques de Première techno, puissances et racine carrée, automatismes
pourcentages.

Choix de rédaction :
- « Défini pour x positif » selon le texte officiel ; l'extension à x négatif
  via a^(−x) = 1/a^x est mentionnée en passant (utile pour les propriétés
  algébriques), à confirmer au PDF si c'est hors périmètre.
- a = 1 traité en remarque (fonction constante), le programme ne le cite pas.
- k < 0 dans k·a^x : traité (une ligne + exemple) car la capacité dit « les
  fonctions k·a^x » sans restreindre k ; en contexte techno, k > 0 domine.
- Comportement en +∞ décrit qualitativement (« s'approche de 0 sans
  l'atteindre ») sans le vocabulaire des limites, absent du programme.

Vérifications numériques faites : 3^2,5 ≈ 15,59 ; 1,03^10 ≈ 1,343916 →
6 719,58 € ; √1,03 ≈ 1,014889 → 5 074,44 € ; 0,85^5 = 0,4437053125 →
5 324,46 € et −55,6 % ; 1,44^(1/2) = 1,2 exact ; 1,22² = 1,4884 ;
0,9³ = 0,729 exact ; 2^(1+2) = 8 ≠ 2^1 + 2^2 = 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact de la définition (x positif seulement ? extension à ℝ ?).
- La place de la remarque « a^x jamais nul » : formulation sans limites à valider.
- Le taux moyen : le texte dit « taux moyen équivalent à n évolutions » — ici
  n évolutions QUELCONQUES sont résumées via le coefficient global ; vérifier
  que le PDF n'attend que le cas d'évolutions données une à une.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
