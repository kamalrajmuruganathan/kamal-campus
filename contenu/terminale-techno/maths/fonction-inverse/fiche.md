---
id: tale-techno-math-fonction-inverse
titre: "Fonction inverse"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 12
prerequis:
  - Dérivation (Première technologique)
  - Fonctions de la variable réelle (Première technologique)
statut: brouillon
relu_par: null
---

# Fonction inverse

> Partager un budget de $1\,000$ € entre $x$ personnes ? Chacun reçoit
> $\dfrac{1000}{x}$ €. Plus il y a de monde, moins chacun touche : voilà la
> **fonction inverse** en action. Ce chapitre te donne son portrait complet —
> ensemble de définition troué en $0$, courbe en deux branches, asymptotes —
> puis t'apprend à étudier les fonctions du type $f(x) = ax + b + \dfrac{c}{x}$,
> la vraie capacité attendue au bac.

---

## 1. Définition et ensemble de définition

La **fonction inverse** est la fonction qui, à tout nombre $x$ **non nul**,
associe son inverse :

$$\boxed{f(x) = \frac{1}{x}, \quad \text{définie sur } \left]-\infty\,;0\right[ \,\cup\, \left]0\,;+\infty\right[}$$

**On ne peut pas diviser par $0$** : le nombre $0$ n'a pas d'image. L'ensemble de
définition est donc fait de **deux intervalles séparés**, de part et d'autre de $0$.

> **Exemple.** $f(2) = \dfrac{1}{2} = 0{,}5$ ; $f(-4) = -\dfrac{1}{4} = -0{,}25$ ;
> $f(0{,}1) = \dfrac{1}{0{,}1} = 10$. Et $f(0)$ **n'existe pas**.

Deux remarques immédiates :
- $x$ et $\dfrac{1}{x}$ ont toujours le **même signe** : positif à droite de $0$,
  négatif à gauche.
- $f(1) = 1$ et $f(-1) = -1$ : les nombres $1$ et $-1$ sont leur propre inverse.

---

## 2. Comportement aux bornes de l'ensemble de définition

Les bornes sont $-\infty$, $0$ (par la gauche et par la droite) et $+\infty$.
On décrit ce qui se passe **sans le formalisme des limites** — un tableau de
valeurs suffit à voir le phénomène.

### Quand $x$ devient très grand (vers $+\infty$)

| $x$ | $10$ | $100$ | $10\,000$ | $1\,000\,000$ |
|---|---|---|---|---|
| $1/x$ | $0{,}1$ | $0{,}01$ | $0{,}0001$ | $0{,}000001$ |

$\dfrac{1}{x}$ devient **aussi proche de $0$ que l'on veut**, tout en restant
positif. Même chose vers $-\infty$, avec des valeurs négatives proches de $0$.
Graphiquement, la courbe **se rapproche de l'axe des abscisses** sans jamais le
toucher : la droite d'équation $y = 0$ est une **asymptote horizontale**.

### Quand $x$ se rapproche de $0$

| $x$ | $0{,}1$ | $0{,}01$ | $0{,}001$ | $0{,}0001$ |
|---|---|---|---|---|
| $1/x$ | $10$ | $100$ | $1\,000$ | $10\,000$ |

En s'approchant de $0$ **par la droite**, $\dfrac{1}{x}$ devient **aussi grand que
l'on veut**. Par la gauche ($x = -0{,}01$ donne $-100$…), il devient aussi
**négatif** que l'on veut. Graphiquement, la courbe **longe l'axe des ordonnées**
sans jamais l'atteindre : la droite d'équation $x = 0$ est une **asymptote
verticale**.

$$\boxed{\text{Les deux asymptotes de la courbe de } x \mapsto \frac{1}{x} \text{ sont les axes du repère : } y = 0 \text{ et } x = 0}$$

> **Exemple (partage).** $1\,000$ € partagés entre $x$ personnes : avec beaucoup
> de monde, la part de chacun devient minuscule (proche de $0$) ; avec très peu
> de monde, elle explose. Les deux comportements aux bornes en une phrase.

⚠️ Une asymptote est une droite dont la courbe **se rapproche indéfiniment**.
Ici, la courbe ne touche jamais ses asymptotes : $\dfrac{1}{x}$ ne vaut jamais $0$
et $x = 0$ n'a pas d'image.

---

## 3. Dérivée et sens de variation

### La dérivée

Tu l'as vue en Première (chapitre Dérivation) dans le tableau des dérivées
usuelles :

$$\boxed{f(x) = \frac{1}{x} \quad \Longrightarrow \quad f'(x) = -\frac{1}{x^2}}$$

Et plus généralement, pour une constante $c$ :

$$\left(\frac{c}{x}\right)' = -\frac{c}{x^2}$$

> **Exemple.** $g(x) = \dfrac{5}{x}$ donne $g'(x) = -\dfrac{5}{x^2}$, et
> $g'(1) = -5$ : la tangente au point d'abscisse $1$ a pour coefficient
> directeur $-5$.

### Le sens de variation

Pour tout $x \neq 0$, $x^2 > 0$, donc $f'(x) = -\dfrac{1}{x^2} < 0$ : la dérivée
est **strictement négative partout** où elle existe.

$$\boxed{\text{La fonction inverse est décroissante sur } \left]-\infty\,;0\right[ \text{ ET décroissante sur } \left]0\,;+\infty\right[}$$

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $\|$ | $-$ | |
| $f(x)$ | | $\searrow$ | $\|$ | $\searrow$ | |

⚠️ **On ne dit jamais « décroissante sur $\left]-\infty\,;0\right[ \cup \left]0\,;+\infty\right[$ ».**
Une variation s'énonce sur **un intervalle**, pas sur une réunion. La preuve que
la phrase serait fausse : $-1 < 1$ et pourtant $f(-1) = -1 < f(1) = 1$ — en
traversant $0$, la fonction **remonte**.

> **Conséquence utile (comparaison).** Sur $\left]0\,;+\infty\right[$, la
> décroissance renverse l'ordre : $0 < a < b \Longrightarrow \dfrac{1}{a} > \dfrac{1}{b}$.
> Exemple : $\dfrac{1}{2026} > \dfrac{1}{2027}$, sans calculatrice.

---

## 4. La courbe : une hyperbole

<!-- schema:hyperbole-inverse -->
![L’hyperbole de la fonction inverse : deux branches, symétriques par rapport à l’origine, qui se rapprochent des deux axes sans les toucher. Points repères en rouge.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMzc5IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIzNzkiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzguMSIgeTE9IjI4IiB4Mj0iMzguMSIgeTI9IjM1MSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI4OC41NyIgeTE9IjI4IiB4Mj0iODguNTciIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTM5LjA1IiB5MT0iMjgiIHgyPSIxMzkuMDUiIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTg5LjUyIiB5MT0iMjgiIHgyPSIxODkuNTIiIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjQwIiB5MT0iMjgiIHgyPSIyNDAiIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjkwLjQ4IiB5MT0iMjgiIHgyPSIyOTAuNDgiIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQwLjk1IiB5MT0iMjgiIHgyPSIzNDAuOTUiIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzkxLjQzIiB5MT0iMjgiIHgyPSIzOTEuNDMiIHkyPSIzNTEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDQxLjkiIHkxPSIyOCIgeDI9IjQ0MS45IiB5Mj0iMzUxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzQwLjkxIiB4Mj0iNDUyIiB5Mj0iMzQwLjkxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjkwLjQ0IiB4Mj0iNDUyIiB5Mj0iMjkwLjQ0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjM5Ljk3IiB4Mj0iNDUyIiB5Mj0iMjM5Ljk3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTg5LjUiIHgyPSI0NTIiIHkyPSIxODkuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjEzOS4wMyIgeDI9IjQ1MiIgeTI9IjEzOS4wMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9Ijg4LjU2IiB4Mj0iNDUyIiB5Mj0iODguNTYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIzOC4wOSIgeDI9IjQ1MiIgeTI9IjM4LjA5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTg5LjUiIHgyPSI0NTEiIHkyPSIxODkuNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NjAsMTg5LjUgNDUxLDE4NSA0NTEsMTk0IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjI0MCIgeTE9IjM1MSIgeDI9IjI0MCIgeTI9IjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI0MCwyMCAyMzUuNSwyOSAyNDQuNSwyOSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjQ1NiIgeT0iMjA3LjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCB4PSIyMjgiIHk9IjI0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPnk8L3RleHQ+PHRleHQgeD0iMzguMSIgeT0iMjA1LjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjQ8L3RleHQ+PHRleHQgeD0iODguNTciIHk9IjIwNS41IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIzPC90ZXh0Pjx0ZXh0IHg9IjEzOS4wNSIgeT0iMjA1LjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjI8L3RleHQ+PHRleHQgeD0iMTg5LjUyIiB5PSIyMDUuNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMTwvdGV4dD48dGV4dCB4PSIyOTAuNDgiIHk9IjIwNS41IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjM0MC45NSIgeT0iMjA1LjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMzkxLjQzIiB5PSIyMDUuNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MzwvdGV4dD48dGV4dCB4PSIyMzQiIHk9IjM0NC45MSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMzwvdGV4dD48dGV4dCB4PSIyMzQiIHk9IjI5NC40NCIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMjwvdGV4dD48dGV4dCB4PSIyMzQiIHk9IjI0My45NyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMTwvdGV4dD48dGV4dCB4PSIyMzQiIHk9IjE0My4wMyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIyMzQiIHk9IjkyLjU2IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjIzMiIgeT0iMjA1LjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0MjQiIGhlaWdodD0iMzIzIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxsaW5lIHgxPSIxODkuNTIiIHkxPSIyMzkuOTciIHgyPSIyOTAuNDgiIHkyPSIxMzkuMDMiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI4IDIwMS41TDI5IDIwMS42TDMwLjEgMjAxLjZMMzEuMSAyMDEuN0wzMi4yIDIwMS44TDMzLjIgMjAxLjhMMzQuMyAyMDEuOUwzNS4zIDIwMS45TDM2LjQgMjAyTDM3LjQgMjAyLjFMMzguNSAyMDIuMUwzOS41IDIwMi4yTDQwLjYgMjAyLjNMNDEuNiAyMDIuM0w0Mi43IDIwMi40TDQzLjcgMjAyLjVMNDQuOCAyMDIuNUw0NS44IDIwMi42TDQ2LjkgMjAyLjdMNDcuOSAyMDIuOEw0OC45IDIwMi44TDUwIDIwMi45TDUxIDIwM0w1Mi4xIDIwMy4xTDUzLjEgMjAzLjFMNTQuMiAyMDMuMkw1NS4yIDIwMy4zTDU2LjMgMjAzLjRMNTcuMyAyMDMuNEw1OC40IDIwMy41TDU5LjQgMjAzLjZMNjAuNSAyMDMuN0w2MS41IDIwMy44TDYyLjYgMjAzLjlMNjMuNiAyMDMuOUw2NC43IDIwNEw2NS43IDIwNC4xTDY2LjggMjA0LjJMNjcuOCAyMDQuM0w2OC44IDIwNC40TDY5LjkgMjA0LjVMNzAuOSAyMDQuNkw3MiAyMDQuN0w3MyAyMDQuOEw3NC4xIDIwNC45TDc1LjEgMjA1TDc2LjIgMjA1LjFMNzcuMiAyMDUuMkw3OC4zIDIwNS4zTDc5LjMgMjA1LjRMODAuNCAyMDUuNUw4MS40IDIwNS42TDgyLjUgMjA1LjdMODMuNSAyMDUuOEw4NC42IDIwNS45TDg1LjYgMjA2TDg2LjcgMjA2LjFMODcuNyAyMDYuMkw4OC43IDIwNi4zTDg5LjggMjA2LjVMOTAuOCAyMDYuNkw5MS45IDIwNi43TDkyLjkgMjA2LjhMOTQgMjA2LjlMOTUgMjA3LjFMOTYuMSAyMDcuMkw5Ny4xIDIwNy4zTDk4LjIgMjA3LjVMOTkuMiAyMDcuNkwxMDAuMyAyMDcuN0wxMDEuMyAyMDcuOUwxMDIuNCAyMDhMMTAzLjQgMjA4LjJMMTA0LjUgMjA4LjNMMTA1LjUgMjA4LjRMMTA2LjYgMjA4LjZMMTA3LjYgMjA4LjdMMTA4LjYgMjA4LjlMMTA5LjcgMjA5LjFMMTEwLjcgMjA5LjJMMTExLjggMjA5LjRMMTEyLjggMjA5LjVMMTEzLjkgMjA5LjdMMTE0LjkgMjA5LjlMMTE2IDIxMEwxMTcgMjEwLjJMMTE4LjEgMjEwLjRMMTE5LjEgMjEwLjZMMTIwLjIgMjEwLjhMMTIxLjIgMjEwLjlMMTIyLjMgMjExLjFMMTIzLjMgMjExLjNMMTI0LjQgMjExLjVMMTI1LjQgMjExLjdMMTI2LjUgMjExLjlMMTI3LjUgMjEyLjFMMTI4LjUgMjEyLjRMMTI5LjYgMjEyLjZMMTMwLjYgMjEyLjhMMTMxLjcgMjEzTDEzMi43IDIxMy4zTDEzMy44IDIxMy41TDEzNC44IDIxMy43TDEzNS45IDIxNEwxMzYuOSAyMTQuMkwxMzggMjE0LjVMMTM5IDIxNC43TDE0MC4xIDIxNUwxNDEuMSAyMTUuM0wxNDIuMiAyMTUuNUwxNDMuMiAyMTUuOEwxNDQuMyAyMTYuMUwxNDUuMyAyMTYuNEwxNDYuNCAyMTYuN0wxNDcuNCAyMTdMMTQ4LjQgMjE3LjNMMTQ5LjUgMjE3LjZMMTUwLjUgMjE4TDE1MS42IDIxOC4zTDE1Mi42IDIxOC43TDE1My43IDIxOUwxNTQuNyAyMTkuNEwxNTUuOCAyMTkuN0wxNTYuOCAyMjAuMUwxNTcuOSAyMjAuNUwxNTguOSAyMjAuOUwxNjAgMjIxLjNMMTYxIDIyMS44TDE2Mi4xIDIyMi4yTDE2My4xIDIyMi42TDE2NC4yIDIyMy4xTDE2NS4yIDIyMy42TDE2Ni4zIDIyNEwxNjcuMyAyMjQuNUwxNjguMyAyMjUuMUwxNjkuNCAyMjUuNkwxNzAuNCAyMjYuMUwxNzEuNSAyMjYuN0wxNzIuNSAyMjcuM0wxNzMuNiAyMjcuOUwxNzQuNiAyMjguNUwxNzUuNyAyMjkuMUwxNzYuNyAyMjkuOEwxNzcuOCAyMzAuNEwxNzguOCAyMzEuMUwxNzkuOSAyMzEuOUwxODAuOSAyMzIuNkwxODIgMjMzLjRMMTgzIDIzNC4yTDE4NC4xIDIzNUwxODUuMSAyMzUuOUwxODYuMiAyMzYuOEwxODcuMiAyMzcuN0wxODguMiAyMzguN0wxODkuMyAyMzkuN0wxOTAuMyAyNDAuOEwxOTEuNCAyNDEuOUwxOTIuNCAyNDMuMUwxOTMuNSAyNDQuM0wxOTQuNSAyNDUuNUwxOTUuNiAyNDYuOUwxOTYuNiAyNDguMkwxOTcuNyAyNDkuN0wxOTguNyAyNTEuMkwxOTkuOCAyNTIuOEwyMDAuOCAyNTQuNUwyMDEuOSAyNTYuM0wyMDIuOSAyNTguMkwyMDQgMjYwLjJMMjA1IDI2Mi4zTDIwNi4xIDI2NC41TDIwNy4xIDI2Ni45TDIwOC4xIDI2OS41TDIwOS4yIDI3Mi4yTDIxMC4yIDI3NS4xTDIxMS4zIDI3OC4yTDIxMi4zIDI4MS42TDIxMy40IDI4NS4yTDIxNC40IDI4OS4xTDIxNS41IDI5My40TDIxNi41IDI5OEwyMTcuNiAzMDMuMUwyMTguNiAzMDguN0wyMTkuNyAzMTQuOEwyMjAuNyAzMjEuNkwyMjEuOCAzMjkuMkwyMjIuOCAzMzcuN0wyMjMuOSAzNDcuM0wyMjQuOSAzNTguM0wyMjYgMzcwLjlMMjI3IDM4NS41TDIyOCA0MDIuN0wyMjkuMSA0MjMuMkwyMzAuMSA0NDhMMjMxLjIgNDc4LjdMMjMyLjIgNTE3LjhMMjMzLjMgNTY5TDIzNC4zIDYzOS4xTDIzNS40IDc0MS4xTDIzNi40IDkwMi44TDIzNy41IDExOTguOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI0Mi41IC04MTkuOUwyNDMuNiAtNTIzLjhMMjQ0LjYgLTM2Mi4xTDI0NS43IC0yNjAuMUwyNDYuNyAtMTkwTDI0Ny44IC0xMzguOEwyNDguOCAtOTkuN0wyNDkuOSAtNjlMMjUwLjkgLTQ0LjJMMjUyIC0yMy43TDI1MyAtNi41TDI1NCA4LjFMMjU1LjEgMjAuN0wyNTYuMSAzMS43TDI1Ny4yIDQxLjNMMjU4LjIgNDkuOEwyNTkuMyA1Ny40TDI2MC4zIDY0LjJMMjYxLjQgNzAuM0wyNjIuNCA3NS45TDI2My41IDgxTDI2NC41IDg1LjZMMjY1LjYgODkuOUwyNjYuNiA5My44TDI2Ny43IDk3LjRMMjY4LjcgMTAwLjhMMjY5LjggMTAzLjlMMjcwLjggMTA2LjhMMjcxLjkgMTA5LjVMMjcyLjkgMTEyLjFMMjczLjkgMTE0LjVMMjc1IDExNi43TDI3NiAxMTguOEwyNzcuMSAxMjAuOEwyNzguMSAxMjIuN0wyNzkuMiAxMjQuNUwyODAuMiAxMjYuMkwyODEuMyAxMjcuOEwyODIuMyAxMjkuM0wyODMuNCAxMzAuOEwyODQuNCAxMzIuMUwyODUuNSAxMzMuNUwyODYuNSAxMzQuN0wyODcuNiAxMzUuOUwyODguNiAxMzcuMUwyODkuNyAxMzguMkwyOTAuNyAxMzkuM0wyOTEuOCAxNDAuM0wyOTIuOCAxNDEuM0wyOTMuOCAxNDIuMkwyOTQuOSAxNDMuMUwyOTUuOSAxNDRMMjk3IDE0NC44TDI5OCAxNDUuNkwyOTkuMSAxNDYuNEwzMDAuMSAxNDcuMUwzMDEuMiAxNDcuOUwzMDIuMiAxNDguNkwzMDMuMyAxNDkuMkwzMDQuMyAxNDkuOUwzMDUuNCAxNTAuNUwzMDYuNCAxNTEuMUwzMDcuNSAxNTEuN0wzMDguNSAxNTIuM0wzMDkuNiAxNTIuOUwzMTAuNiAxNTMuNEwzMTEuNyAxNTMuOUwzMTIuNyAxNTQuNUwzMTMuNyAxNTVMMzE0LjggMTU1LjRMMzE1LjggMTU1LjlMMzE2LjkgMTU2LjRMMzE3LjkgMTU2LjhMMzE5IDE1Ny4yTDMyMCAxNTcuN0wzMjEuMSAxNTguMUwzMjIuMSAxNTguNUwzMjMuMiAxNTguOUwzMjQuMiAxNTkuM0wzMjUuMyAxNTkuNkwzMjYuMyAxNjBMMzI3LjQgMTYwLjNMMzI4LjQgMTYwLjdMMzI5LjUgMTYxTDMzMC41IDE2MS40TDMzMS42IDE2MS43TDMzMi42IDE2MkwzMzMuNiAxNjIuM0wzMzQuNyAxNjIuNkwzMzUuNyAxNjIuOUwzMzYuOCAxNjMuMkwzMzcuOCAxNjMuNUwzMzguOSAxNjMuN0wzMzkuOSAxNjRMMzQxIDE2NC4zTDM0MiAxNjQuNUwzNDMuMSAxNjQuOEwzNDQuMSAxNjVMMzQ1LjIgMTY1LjNMMzQ2LjIgMTY1LjVMMzQ3LjMgMTY1LjhMMzQ4LjMgMTY2TDM0OS40IDE2Ni4yTDM1MC40IDE2Ni40TDM1MS41IDE2Ni42TDM1Mi41IDE2Ni45TDM1My41IDE2Ny4xTDM1NC42IDE2Ny4zTDM1NS42IDE2Ny41TDM1Ni43IDE2Ny43TDM1Ny43IDE2Ny45TDM1OC44IDE2OC4xTDM1OS44IDE2OC4yTDM2MC45IDE2OC40TDM2MS45IDE2OC42TDM2MyAxNjguOEwzNjQgMTY5TDM2NS4xIDE2OS4xTDM2Ni4xIDE2OS4zTDM2Ny4yIDE2OS41TDM2OC4yIDE2OS42TDM2OS4zIDE2OS44TDM3MC4zIDE2OS45TDM3MS40IDE3MC4xTDM3Mi40IDE3MC4zTDM3My40IDE3MC40TDM3NC41IDE3MC42TDM3NS41IDE3MC43TDM3Ni42IDE3MC44TDM3Ny42IDE3MUwzNzguNyAxNzEuMUwzNzkuNyAxNzEuM0wzODAuOCAxNzEuNEwzODEuOCAxNzEuNUwzODIuOSAxNzEuN0wzODMuOSAxNzEuOEwzODUgMTcxLjlMMzg2IDE3Mi4xTDM4Ny4xIDE3Mi4yTDM4OC4xIDE3Mi4zTDM4OS4yIDE3Mi40TDM5MC4yIDE3Mi41TDM5MS4zIDE3Mi43TDM5Mi4zIDE3Mi44TDM5My4zIDE3Mi45TDM5NC40IDE3M0wzOTUuNCAxNzMuMUwzOTYuNSAxNzMuMkwzOTcuNSAxNzMuM0wzOTguNiAxNzMuNEwzOTkuNiAxNzMuNUw0MDAuNyAxNzMuNkw0MDEuNyAxNzMuN0w0MDIuOCAxNzMuOEw0MDMuOCAxNzMuOUw0MDQuOSAxNzRMNDA1LjkgMTc0LjFMNDA3IDE3NC4yTDQwOCAxNzQuM0w0MDkuMSAxNzQuNEw0MTAuMSAxNzQuNUw0MTEuMiAxNzQuNkw0MTIuMiAxNzQuN0w0MTMuMiAxNzQuOEw0MTQuMyAxNzQuOUw0MTUuMyAxNzVMNDE2LjQgMTc1LjFMNDE3LjQgMTc1LjFMNDE4LjUgMTc1LjJMNDE5LjUgMTc1LjNMNDIwLjYgMTc1LjRMNDIxLjYgMTc1LjVMNDIyLjcgMTc1LjZMNDIzLjcgMTc1LjZMNDI0LjggMTc1LjdMNDI1LjggMTc1LjhMNDI2LjkgMTc1LjlMNDI3LjkgMTc1LjlMNDI5IDE3Nkw0MzAgMTc2LjFMNDMxLjEgMTc2LjJMNDMyLjEgMTc2LjJMNDMzLjEgMTc2LjNMNDM0LjIgMTc2LjRMNDM1LjIgMTc2LjVMNDM2LjMgMTc2LjVMNDM3LjMgMTc2LjZMNDM4LjQgMTc2LjdMNDM5LjQgMTc2LjdMNDQwLjUgMTc2LjhMNDQxLjUgMTc2LjlMNDQyLjYgMTc2LjlMNDQzLjYgMTc3TDQ0NC43IDE3Ny4xTDQ0NS43IDE3Ny4xTDQ0Ni44IDE3Ny4yTDQ0Ny44IDE3Ny4yTDQ0OC45IDE3Ny4zTDQ0OS45IDE3Ny40TDQ1MSAxNzcuNEw0NTIgMTc3LjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48dGV4dCB4PSIzNzEuMjQiIHk9IjE1Ni4wOSIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+eSA9IDEveDwvdGV4dD48Y2lyY2xlIGN4PSIxMzkuMDUiIGN5PSIyMTQuNzMiIHI9IjQuNSIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48Y2lyY2xlIGN4PSIxODkuNTIiIGN5PSIyMzkuOTciIHI9IjQuNSIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48Y2lyY2xlIGN4PSIyMTQuNzYiIGN5PSIyOTAuNDQiIHI9IjQuNSIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48Y2lyY2xlIGN4PSIyNjUuMjQiIGN5PSI4OC41NiIgcj0iNC41IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjxjaXJjbGUgY3g9IjI5MC40OCIgY3k9IjEzOS4wMyIgcj0iNC41IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjxjaXJjbGUgY3g9IjM0MC45NSIgY3k9IjE2NC4yNyIgcj0iNC41IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI5NS41MiIgeT0iMTI2LjQxIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPigxIDsgMSk8L3RleHQ+PHRleHQgeD0iMTg0LjQ4IiB5PSIyNjIuNjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPijiiJIxIDsg4oiSMSk8L3RleHQ+PC9zdmc+)
*L’hyperbole de la fonction inverse : deux branches, symétriques par rapport à l’origine, qui se rapprochent des deux axes sans les toucher. Points repères en rouge.*
<!-- /schema -->

La courbe représentative de la fonction inverse s'appelle une **hyperbole**.
Elle est formée de **deux branches** séparées :

- une branche dans le quadrant en haut à droite ($x > 0$, $y > 0$) ;
- une branche dans le quadrant en bas à gauche ($x < 0$, $y < 0$).

Chaque branche descend (fonction décroissante) et s'écrase sur les deux
asymptotes : l'axe des abscisses au loin, l'axe des ordonnées près de $0$.

**Points repères** pour un tracé rapide :

| $x$ | $-2$ | $-1$ | $-\dfrac{1}{2}$ | $\dfrac{1}{2}$ | $1$ | $2$ |
|---|---|---|---|---|---|---|
| $1/x$ | $-0{,}5$ | $-1$ | $-2$ | $2$ | $1$ | $0{,}5$ |

La courbe est **symétrique par rapport à l'origine** $O$ du repère : le point
$(x\,; \frac{1}{x})$ et le point $(-x\,; -\frac{1}{x})$ se correspondent. Les
deux branches sont donc l'image l'une de l'autre — en tracer une suffit.

---

## 5. Étudier $f(x) = ax + b + \dfrac{c}{x}$ — la capacité du programme

C'est la capacité attendue : **étudier et représenter des fonctions obtenues par
combinaisons linéaires simples faisant intervenir la fonction inverse**, c'est-à-dire
des fonctions de la forme

$$f(x) = ax + b + \frac{c}{x} \qquad (\text{définie pour } x \neq 0)$$

### La dérivée à connaître

On dérive terme à terme ($(ax)' = a$, $(b)' = 0$, $\left(\frac{c}{x}\right)' = -\frac{c}{x^2}$) :

$$\boxed{f(x) = ax + b + \frac{c}{x} \quad \Longrightarrow \quad f'(x) = a - \frac{c}{x^2}}$$

### La méthode, étape par étape

1. **Ensemble d'étude** : $x \neq 0$ — le plus souvent l'énoncé se place sur
   $\left]0\,;+\infty\right[$ (quantités, durées, prix…).
2. **Dériver** : $f'(x) = a - \dfrac{c}{x^2}$.
3. **Mettre au même dénominateur** pour étudier le signe :
   $f'(x) = \dfrac{ax^2 - c}{x^2}$. Comme $x^2 > 0$, **le signe de $f'$ est celui
   du numérateur** $ax^2 - c$.
4. **Résoudre** $ax^2 - c = 0$, dresser le **tableau de variations**, calculer les
   images aux points remarquables.
5. **Comportement aux bornes** : près de $0$, c'est $\dfrac{c}{x}$ qui impose des
   valeurs immenses (asymptote verticale $x = 0$) ; pour $x$ très grand,
   $\dfrac{c}{x}$ devient négligeable et la courbe **se rapproche de la droite**
   $y = ax + b$.

### Exemple complet

<!-- schema:exemple-ax-b-c-sur-x -->
![Courbe de f(x) = 2x + 1 + 8/x sur les réels strictement positifs : elle longe l’axe des ordonnées près de 0, atteint son minimum 9 en x = 2, puis se rapproche de la droite y = 2x + 1.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTguOTMiIHkxPSIyOCIgeDI9IjU4LjkzIiB5Mj0iMzUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMC40OSIgeTE9IjI4IiB4Mj0iMTEwLjQ5IiB5Mj0iMzUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE2Mi4wNCIgeTE9IjI4IiB4Mj0iMTYyLjA0IiB5Mj0iMzUyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIxMy42IiB5MT0iMjgiIHgyPSIyMTMuNiIgeTI9IjM1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNjUuMTYiIHkxPSIyOCIgeDI9IjI2NS4xNiIgeTI9IjM1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMTYuNzEiIHkxPSIyOCIgeDI9IjMxNi43MSIgeTI9IjM1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNjguMjciIHkxPSIyOCIgeDI9IjM2OC4yNyIgeTI9IjM1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MTkuODIiIHkxPSIyOCIgeDI9IjQxOS44MiIgeTI9IjM1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NzEuMzgiIHkxPSIyOCIgeDI9IjQ3MS4zOCIgeTI9IjM1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjMzMS43NSIgeDI9IjQ5MiIgeTI9IjMzMS43NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjI4MS4xMyIgeDI9IjQ5MiIgeTI9IjI4MS4xMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIzMC41IiB4Mj0iNDkyIiB5Mj0iMjMwLjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxNzkuODgiIHgyPSI0OTIiIHkyPSIxNzkuODgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxMjkuMjUiIHgyPSI0OTIiIHkyPSIxMjkuMjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSI3OC42MyIgeDI9IjQ5MiIgeTI9Ijc4LjYzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjgiIHgyPSI0OTIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjMzMS43NSIgeDI9IjQ5MSIgeTI9IjMzMS43NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MDAsMzMxLjc1IDQ5MSwzMjcuMjUgNDkxLDMzNi4yNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI1OC45MyIgeTE9IjM1MiIgeDI9IjU4LjkzIiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTguOTMsMjAgNTQuNDMsMjkgNjMuNDMsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSI0OTYiIHk9IjM0OS43NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj54PC90ZXh0Pjx0ZXh0IHg9IjQ2LjkzIiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj55PC90ZXh0Pjx0ZXh0IHg9IjExMC40OSIgeT0iMzQ3Ljc1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjE2Mi4wNCIgeT0iMzQ3Ljc1IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjIxMy42IiB5PSIzNDcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM8L3RleHQ+PHRleHQgeD0iMjY1LjE2IiB5PSIzNDcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PHRleHQgeD0iMzE2LjcxIiB5PSIzNDcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU8L3RleHQ+PHRleHQgeD0iMzY4LjI3IiB5PSIzNDcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjY8L3RleHQ+PHRleHQgeD0iNDE5LjgyIiB5PSIzNDcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjc8L3RleHQ+PHRleHQgeD0iNDcxLjM4IiB5PSIzNDcuNzUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PHRleHQgeD0iNTIuOTMiIHk9IjI4NS4xMyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NTwvdGV4dD48dGV4dCB4PSI1Mi45MyIgeT0iMjM0LjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjEwPC90ZXh0Pjx0ZXh0IHg9IjUyLjkzIiB5PSIxODMuODgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE1PC90ZXh0Pjx0ZXh0IHg9IjUyLjkzIiB5PSIxMzMuMjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIwPC90ZXh0Pjx0ZXh0IHg9IjUyLjkzIiB5PSI4Mi42MyIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjU8L3RleHQ+PHRleHQgeD0iNTAuOTMiIHk9IjM0Ny43NSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjQ2NCIgaGVpZ2h0PSIzMjQiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lKSI+PGxpbmUgeDE9IjE2Mi4wNCIgeTE9IjMzMS43NSIgeDI9IjE2Mi4wNCIgeTI9IjI0MC42MyIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTguOTMiIHkxPSIyNDAuNjMiIHgyPSIxNjIuMDQiIHkyPSIyNDAuNjMiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTcxLjggLTcuNEw3My45IDM3LjFMNzYgNzAuNkw3OC4xIDk2LjVMODAuMiAxMTcuMUw4Mi4zIDEzMy45TDg0LjQgMTQ3LjhMODYuNSAxNTkuNUw4OC42IDE2OS4zTDkwLjcgMTc3LjhMOTIuOCAxODUuMUw5NC45IDE5MS41TDk3IDE5Ny4xTDk5LjEgMjAyTDEwMS4yIDIwNi4zTDEwMy4zIDIxMC4xTDEwNS40IDIxMy42TDEwNy41IDIxNi42TDEwOS42IDIxOS40TDExMS43IDIyMS44TDExMy44IDIyNEwxMTUuOSAyMjZMMTE4IDIyNy44TDEyMC4xIDIyOS40TDEyMi4yIDIzMC44TDEyNC4zIDIzMi4xTDEyNi40IDIzMy4zTDEyOC41IDIzNC4zTDEzMC42IDIzNS4yTDEzMi43IDIzNi4xTDEzNC44IDIzNi44TDEzNi45IDIzNy41TDEzOS4xIDIzOEwxNDEuMiAyMzguNUwxNDMuMyAyMzlMMTQ1LjQgMjM5LjRMMTQ3LjUgMjM5LjdMMTQ5LjYgMjM5LjlMMTUxLjcgMjQwLjJMMTUzLjggMjQwLjNMMTU1LjkgMjQwLjVMMTU4IDI0MC42TDE2MC4xIDI0MC42TDE2Mi4yIDI0MC42TDE2NC4zIDI0MC42TDE2Ni40IDI0MC42TDE2OC41IDI0MC41TDE3MC42IDI0MC40TDE3Mi43IDI0MC4yTDE3NC44IDI0MC4xTDE3Ni45IDIzOS45TDE3OSAyMzkuN0wxODEuMSAyMzkuNUwxODMuMiAyMzkuMkwxODUuMyAyMzguOUwxODcuNCAyMzguN0wxODkuNSAyMzguNEwxOTEuNiAyMzhMMTkzLjcgMjM3LjdMMTk1LjggMjM3LjRMMTk3LjkgMjM3TDIwMCAyMzYuNkwyMDIuMSAyMzYuMkwyMDQuMiAyMzUuOEwyMDYuMyAyMzUuNEwyMDguNCAyMzVMMjEwLjUgMjM0LjVMMjEyLjYgMjM0LjFMMjE0LjcgMjMzLjZMMjE2LjggMjMzLjJMMjE4LjkgMjMyLjdMMjIxIDIzMi4yTDIyMy4xIDIzMS43TDIyNS4yIDIzMS4yTDIyNy4zIDIzMC43TDIyOS40IDIzMC4yTDIzMS41IDIyOS42TDIzMy42IDIyOS4xTDIzNS43IDIyOC42TDIzNy44IDIyOEwyMzkuOSAyMjcuNUwyNDIgMjI2LjlMMjQ0LjEgMjI2LjNMMjQ2LjIgMjI1LjhMMjQ4LjMgMjI1LjJMMjUwLjQgMjI0LjZMMjUyLjUgMjI0TDI1NC42IDIyMy40TDI1Ni43IDIyMi44TDI1OC44IDIyMi4yTDI2MC45IDIyMS42TDI2MyAyMjFMMjY1LjEgMjIwLjRMMjY3LjIgMjE5LjhMMjY5LjMgMjE5LjFMMjcxLjQgMjE4LjVMMjczLjUgMjE3LjlMMjc1LjYgMjE3LjJMMjc3LjcgMjE2LjZMMjc5LjggMjE2TDI4MS45IDIxNS4zTDI4NCAyMTQuN0wyODYuMSAyMTRMMjg4LjIgMjEzLjRMMjkwLjMgMjEyLjdMMjkyLjQgMjEyTDI5NC41IDIxMS40TDI5Ni42IDIxMC43TDI5OC43IDIxMEwzMDAuOCAyMDkuNEwzMDIuOSAyMDguN0wzMDUgMjA4TDMwNy4xIDIwNy4zTDMwOS4yIDIwNi42TDMxMS4zIDIwNS45TDMxMy40IDIwNS4zTDMxNS41IDIwNC42TDMxNy42IDIwMy45TDMxOS43IDIwMy4yTDMyMS44IDIwMi41TDMyMy45IDIwMS44TDMyNiAyMDEuMUwzMjguMSAyMDAuNEwzMzAuMiAxOTkuN0wzMzIuMyAxOTlMMzM0LjQgMTk4LjNMMzM2LjUgMTk3LjVMMzM4LjYgMTk2LjhMMzQwLjcgMTk2LjFMMzQyLjggMTk1LjRMMzQ0LjkgMTk0LjdMMzQ3IDE5NEwzNDkuMSAxOTMuMkwzNTEuMiAxOTIuNUwzNTMuMyAxOTEuOEwzNTUuNCAxOTEuMUwzNTcuNSAxOTAuNEwzNTkuNiAxODkuNkwzNjEuNyAxODguOUwzNjMuOCAxODguMkwzNjUuOSAxODcuNEwzNjggMTg2LjdMMzcwLjEgMTg2TDM3Mi4yIDE4NS4yTDM3NC40IDE4NC41TDM3Ni41IDE4My44TDM3OC42IDE4M0wzODAuNyAxODIuM0wzODIuOCAxODEuNUwzODQuOSAxODAuOEwzODcgMTgwLjFMMzg5LjEgMTc5LjNMMzkxLjIgMTc4LjZMMzkzLjMgMTc3LjhMMzk1LjQgMTc3LjFMMzk3LjUgMTc2LjNMMzk5LjYgMTc1LjZMNDAxLjcgMTc0LjhMNDAzLjggMTc0LjFMNDA1LjkgMTczLjNMNDA4IDE3Mi42TDQxMC4xIDE3MS44TDQxMi4yIDE3MS4xTDQxNC4zIDE3MC4zTDQxNi40IDE2OS41TDQxOC41IDE2OC44TDQyMC42IDE2OEw0MjIuNyAxNjcuM0w0MjQuOCAxNjYuNUw0MjYuOSAxNjUuOEw0MjkgMTY1TDQzMS4xIDE2NC4yTDQzMy4yIDE2My41TDQzNS4zIDE2Mi43TDQzNy40IDE2MS45TDQzOS41IDE2MS4yTDQ0MS42IDE2MC40TDQ0My43IDE1OS43TDQ0NS44IDE1OC45TDQ0Ny45IDE1OC4xTDQ1MCAxNTcuM0w0NTIuMSAxNTYuNkw0NTQuMiAxNTUuOEw0NTYuMyAxNTVMNDU4LjQgMTU0LjNMNDYwLjUgMTUzLjVMNDYyLjYgMTUyLjdMNDY0LjcgMTUyTDQ2Ni44IDE1MS4yTDQ2OC45IDE1MC40TDQ3MSAxNDkuNkw0NzMuMSAxNDguOUw0NzUuMiAxNDguMUw0NzcuMyAxNDcuM0w0NzkuNCAxNDYuNUw0ODEuNSAxNDUuOEw0ODMuNiAxNDVMNDg1LjcgMTQ0LjJMNDg3LjggMTQzLjRMNDg5LjkgMTQyLjdMNDkyIDE0MS45IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjggMzMzLjhMMzAuMyAzMzIuOUwzMi42IDMzMkwzNSAzMzFMMzcuMyAzMzAuMUwzOS42IDMyOS4yTDQxLjkgMzI4LjNMNDQuMiAzMjcuNEw0Ni42IDMyNi41TDQ4LjkgMzI1LjZMNTEuMiAzMjQuN0w1My41IDMyMy44TDU1LjggMzIyLjhMNTguMiAzMjEuOUw2MC41IDMyMUw2Mi44IDMyMC4xTDY1LjEgMzE5LjJMNjcuNCAzMTguM0w2OS44IDMxNy40TDcyLjEgMzE2LjVMNzQuNCAzMTUuNkw3Ni43IDMxNC42TDc5IDMxMy43TDgxLjQgMzEyLjhMODMuNyAzMTEuOUw4NiAzMTFMODguMyAzMTAuMUw5MC42IDMwOS4yTDkzIDMwOC4zTDk1LjMgMzA3LjNMOTcuNiAzMDYuNEw5OS45IDMwNS41TDEwMi4yIDMwNC42TDEwNC42IDMwMy43TDEwNi45IDMwMi44TDEwOS4yIDMwMS45TDExMS41IDMwMUwxMTMuOCAzMDAuMUwxMTYuMiAyOTkuMUwxMTguNSAyOTguMkwxMjAuOCAyOTcuM0wxMjMuMSAyOTYuNEwxMjUuNCAyOTUuNUwxMjcuOCAyOTQuNkwxMzAuMSAyOTMuN0wxMzIuNCAyOTIuOEwxMzQuNyAyOTEuOUwxMzcgMjkwLjlMMTM5LjQgMjkwTDE0MS43IDI4OS4xTDE0NCAyODguMkwxNDYuMyAyODcuM0wxNDguNiAyODYuNEwxNTEgMjg1LjVMMTUzLjMgMjg0LjZMMTU1LjYgMjgzLjdMMTU3LjkgMjgyLjdMMTYwLjIgMjgxLjhMMTYyLjYgMjgwLjlMMTY0LjkgMjgwTDE2Ny4yIDI3OS4xTDE2OS41IDI3OC4yTDE3MS44IDI3Ny4zTDE3NC4yIDI3Ni40TDE3Ni41IDI3NS41TDE3OC44IDI3NC41TDE4MS4xIDI3My42TDE4My40IDI3Mi43TDE4NS44IDI3MS44TDE4OC4xIDI3MC45TDE5MC40IDI3MEwxOTIuNyAyNjkuMUwxOTUgMjY4LjJMMTk3LjQgMjY3LjNMMTk5LjcgMjY2LjNMMjAyIDI2NS40TDIwNC4zIDI2NC41TDIwNi42IDI2My42TDIwOSAyNjIuN0wyMTEuMyAyNjEuOEwyMTMuNiAyNjAuOUwyMTUuOSAyNjBMMjE4LjIgMjU5LjFMMjIwLjYgMjU4LjFMMjIyLjkgMjU3LjJMMjI1LjIgMjU2LjNMMjI3LjUgMjU1LjRMMjI5LjggMjU0LjVMMjMyLjIgMjUzLjZMMjM0LjUgMjUyLjdMMjM2LjggMjUxLjhMMjM5LjEgMjUwLjlMMjQxLjQgMjQ5LjlMMjQzLjggMjQ5TDI0Ni4xIDI0OC4xTDI0OC40IDI0Ny4yTDI1MC43IDI0Ni4zTDI1MyAyNDUuNEwyNTUuNCAyNDQuNUwyNTcuNyAyNDMuNkwyNjAgMjQyLjdMMjYyLjMgMjQxLjdMMjY0LjYgMjQwLjhMMjY3IDIzOS45TDI2OS4zIDIzOUwyNzEuNiAyMzguMUwyNzMuOSAyMzcuMkwyNzYuMiAyMzYuM0wyNzguNiAyMzUuNEwyODAuOSAyMzQuNEwyODMuMiAyMzMuNUwyODUuNSAyMzIuNkwyODcuOCAyMzEuN0wyOTAuMiAyMzAuOEwyOTIuNSAyMjkuOUwyOTQuOCAyMjlMMjk3LjEgMjI4LjFMMjk5LjQgMjI3LjJMMzAxLjggMjI2LjJMMzA0LjEgMjI1LjNMMzA2LjQgMjI0LjRMMzA4LjcgMjIzLjVMMzExIDIyMi42TDMxMy40IDIyMS43TDMxNS43IDIyMC44TDMxOCAyMTkuOUwzMjAuMyAyMTlMMzIyLjYgMjE4TDMyNSAyMTcuMUwzMjcuMyAyMTYuMkwzMjkuNiAyMTUuM0wzMzEuOSAyMTQuNEwzMzQuMiAyMTMuNUwzMzYuNiAyMTIuNkwzMzguOSAyMTEuN0wzNDEuMiAyMTAuOEwzNDMuNSAyMDkuOEwzNDUuOCAyMDguOUwzNDguMiAyMDhMMzUwLjUgMjA3LjFMMzUyLjggMjA2LjJMMzU1LjEgMjA1LjNMMzU3LjQgMjA0LjRMMzU5LjggMjAzLjVMMzYyLjEgMjAyLjZMMzY0LjQgMjAxLjZMMzY2LjcgMjAwLjdMMzY5IDE5OS44TDM3MS40IDE5OC45TDM3My43IDE5OEwzNzYgMTk3LjFMMzc4LjMgMTk2LjJMMzgwLjYgMTk1LjNMMzgzIDE5NC40TDM4NS4zIDE5My40TDM4Ny42IDE5Mi41TDM4OS45IDE5MS42TDM5Mi4yIDE5MC43TDM5NC42IDE4OS44TDM5Ni45IDE4OC45TDM5OS4yIDE4OEw0MDEuNSAxODcuMUw0MDMuOCAxODYuMkw0MDYuMiAxODUuMkw0MDguNSAxODQuM0w0MTAuOCAxODMuNEw0MTMuMSAxODIuNUw0MTUuNCAxODEuNkw0MTcuOCAxODAuN0w0MjAuMSAxNzkuOEw0MjIuNCAxNzguOUw0MjQuNyAxNzhMNDI3IDE3N0w0MjkuNCAxNzYuMUw0MzEuNyAxNzUuMkw0MzQgMTc0LjNMNDM2LjMgMTczLjRMNDM4LjYgMTcyLjVMNDQxIDE3MS42TDQ0My4zIDE3MC43TDQ0NS42IDE2OS44TDQ0Ny45IDE2OC44TDQ1MC4yIDE2Ny45TDQ1Mi42IDE2N0w0NTQuOSAxNjYuMUw0NTcuMiAxNjUuMkw0NTkuNSAxNjQuM0w0NjEuOCAxNjMuNEw0NjQuMiAxNjIuNUw0NjYuNSAxNjEuNUw0NjguOCAxNjAuNkw0NzEuMSAxNTkuN0w0NzMuNCAxNTguOEw0NzUuOCAxNTcuOUw0NzguMSAxNTdMNDgwLjQgMTU2LjFMNDgyLjcgMTU1LjJMNDg1IDE1NC4zTDQ4Ny40IDE1My4zTDQ4OS43IDE1Mi40TDQ5MiAxNTEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWRhc2hhcnJheT0iNyA1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PHRleHQgeD0iNDAwLjEzIiB5PSIxNDIuNTciIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnkgPSAyeCArIDEgKyA4L3g8L3RleHQ+PHRleHQgeD0iNDU2Ljc2IiB5PSIxOTMuNzMiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPnkgPSAyeCArIDE8L3RleHQ+PGNpcmNsZSBjeD0iMTYyLjA0IiBjeT0iMjQwLjYzIiByPSI0IiBmaWxsPSIjYzAyYTJhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjE3NC4wNCIgeT0iMjYwLjYzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPm1pbmltdW0gKDIgOyA5KTwvdGV4dD48L3N2Zz4=)
*Courbe de f(x) = 2x + 1 + 8/x sur les réels strictement positifs : elle longe l’axe des ordonnées près de 0, atteint son minimum 9 en x = 2, puis se rapproche de la droite y = 2x + 1.*
<!-- /schema -->

Étudions $f(x) = 2x + 1 + \dfrac{8}{x}$ sur $\left]0\,;+\infty\right[$.

**Dérivée.** $f'(x) = 2 - \dfrac{8}{x^2} = \dfrac{2x^2 - 8}{x^2}$.

**Signe.** $x^2 > 0$, donc $f'(x)$ a le signe de $2x^2 - 8 = 2(x^2 - 4) = 2(x-2)(x+2)$.
Sur $\left]0\,;+\infty\right[$, $x + 2 > 0$ : le signe est celui de $x - 2$.

**Tableau.** $f(2) = 4 + 1 + 4 = 9$.

| $x$ | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\searrow$ | $9$ | $\nearrow$ | |

$f$ est décroissante sur $\left]0\,;2\right]$, croissante sur
$\left[2\,;+\infty\right[$, et admet un **minimum** égal à $9$, atteint en $x = 2$.

**Aux bornes.** Près de $0$ : $\dfrac{8}{x}$ devient énorme ($x = 0{,}01$ donne
$f(x) \approx 800$), la courbe grimpe le long de l'asymptote verticale $x = 0$.
Pour $x$ grand : $\dfrac{8}{x}$ devient négligeable ($x = 100$ donne
$f(x) = 201{,}08$, tout proche de $2x + 1 = 201$), la courbe se rapproche de la
droite $y = 2x + 1$.

> **À quoi ça sert ?** Ce sont les fonctions des **coûts moyens** : si produire
> $x$ objets coûte en tout $C(x) = 0{,}1x^2 + 5x + 90$ €, le coût moyen par objet
> est $\dfrac{C(x)}{x} = 0{,}1x + 5 + \dfrac{90}{x}$ — exactement la forme
> $ax + b + \dfrac{c}{x}$. Son minimum donne la production la plus rentable
> (exercice 6).

---

## 6. Tableau récapitulatif

| | Fonction inverse $x \mapsto \dfrac{1}{x}$ |
|---|---|
| Ensemble de définition | $\left]-\infty\,;0\right[ \cup \left]0\,;+\infty\right[$ (jamais $0$) |
| Dérivée | $-\dfrac{1}{x^2}$ (toujours $< 0$) |
| Variations | décroissante sur $\left]-\infty\,;0\right[$, décroissante sur $\left]0\,;+\infty\right[$ |
| Courbe | hyperbole, deux branches, symétrique par rapport à $O$ |
| Asymptotes | $y = 0$ (horizontale) et $x = 0$ (verticale) |
| Signe | $\dfrac{1}{x}$ a le signe de $x$ |
| $\left(\dfrac{c}{x}\right)'$ | $-\dfrac{c}{x^2}$ |
| $f(x) = ax + b + \dfrac{c}{x}$ | $f'(x) = a - \dfrac{c}{x^2} = \dfrac{ax^2 - c}{x^2}$, signe de $ax^2 - c$ |
| Aux bornes de $f$ | près de $0$ : $\dfrac{c}{x}$ domine ; pour $x$ grand : proche de la droite $y = ax + b$ |

---

## 7. Les erreurs qui coûtent des points

1. **Oublier la valeur interdite.** Écrire « $f$ est définie sur $\mathbb{R}$ »
   ou calculer $f(0)$ : la division par $0$ n'existe pas. Commence chaque étude
   en écrivant l'ensemble de définition.
2. **Dériver $\dfrac{1}{x}$ en $\dfrac{1}{x^2}$.** Le signe moins fait partie de
   la formule : $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$, et
   $\left(\frac{c}{x}\right)' = -\frac{c}{x^2}$. Ce moins oublié inverse tout le
   tableau de variations.
3. **Annoncer « décroissante sur $\left]-\infty\,;0\right[ \cup \left]0\,;+\infty\right[$ ».**
   Une variation s'énonce intervalle par intervalle. Contre-exemple :
   $-1 < 1$ mais $f(-1) = -1 < f(1) = 1$.
4. **Faire toucher la courbe à ses asymptotes.** La courbe s'en rapproche autant
   qu'on veut mais ne les atteint jamais : $\dfrac{1}{x}$ ne vaut jamais $0$.
5. **Étudier le signe de $f'(x) = a - \dfrac{c}{x^2}$ sans réduire au même
   dénominateur.** Écris $f'(x) = \dfrac{ax^2 - c}{x^2}$ : comme $x^2 > 0$, le
   signe se lit sur $ax^2 - c$, un trinôme sans terme en $x$ que tu sais résoudre.
6. **Confondre les deux comportements aux bornes** : près de $0$, c'est le terme
   en $\dfrac{c}{x}$ qui explose ; au loin, c'est lui qui disparaît et la courbe
   suit la droite $y = ax + b$. Un tableau de valeurs tranche en cas de doute.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTION INVERSE » (lignes 75-82).

Couverture, calée sur le texte officiel :
- Contenus : comportement de la fonction inverse aux bornes de son ensemble de
  définition (§2) ; dérivée, sens de variation (§3) ; courbe représentative,
  asymptotes (§2 et §4).
- Capacité : étudier et représenter des fonctions obtenues par combinaisons
  linéaires simples faisant intervenir la fonction inverse (§5, forme
  f(x) = ax + b + c/x, avec méthode et exemple complet).

Choix de rédaction :
- Comportement aux bornes décrit par tableaux de valeurs et vocabulaire
  « aussi proche/grand que l'on veut », SANS le formalisme des limites (le mot
  « limite » n'apparaît pas dans le corps) — conforme à l'esprit du programme
  techno, où les limites ne sont pas un objet d'étude.
- « La courbe se rapproche de la droite y = ax + b » : formulé en termes de
  proximité graphique et de tableau de valeurs, sans parler d'asymptote oblique
  (notion hors programme a priori).
- Prérequis : chapitre Dérivation de Première techno
  (contenu/premiere-techno/maths/derivation/) — la dérivée de 1/x y figure déjà
  dans le tableau des dérivées usuelles, ainsi que l'équation de tangente
  y = f'(a)(x-a) + f(a) réutilisée dans les exercices. Également Fonctions de la
  variable réelle (contenu/premiere-techno/maths/fonctions-variable-reelle/).

Vérifications numériques faites : f(2) = 2·2+1+8/2 = 9 ; 2x²−8 = 2(x−2)(x+2) ;
f(0,01) = 0,02+1+800 = 801,02 (≈ 800 annoncé « environ ») ; f(100) = 201,08 ;
coût moyen 0,1x²+5x+90 sur x → 0,1x+5+90/x.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La symétrie de l'hyperbole par rapport à l'origine (fonction impaire, §4) n'est
  pas citée dans l'extraction du programme : gardée comme aide au tracé, sans le
  mot « impaire ». Vérifier qu'elle n'est pas hors périmètre.
- La forme exacte des « combinaisons linéaires simples » : j'ai retenu
  ax + b + c/x (et le cas particulier b + c/x, exercice 4). Vérifier si le PDF
  donne des exemples types différents.
- Le mot « asymptote » est bien dans les contenus officiels (« Courbe
  représentative ; asymptotes ») : employé sans définition formelle par limite.
- L'étude sur ]−∞;0[ (exercice 5) : vérifier que le programme n'attend pas
  uniquement des études sur ]0;+∞[ en contexte.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
