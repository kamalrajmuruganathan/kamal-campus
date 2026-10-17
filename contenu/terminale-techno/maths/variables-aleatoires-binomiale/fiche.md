---
id: tale-techno-math-variables-aleatoires-binomiale
titre: "Variables aléatoires et loi binomiale"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Probabilités et variables aléatoires (Première technologique)
  - Probabilités conditionnelles et arbres pondérés (Terminale techno)
  - Puissances et calcul avec des pourcentages (automatismes)
statut: brouillon
relu_par: null
---

# Variables aléatoires et loi binomiale

> Tu lances 10 fois la même pièce, tu contrôles 20 produits à la chaîne, tu
> réponds au hasard à un QCM de 6 questions : à chaque fois, la **même**
> expérience à deux issues se répète, et tu comptes les succès. Cette situation
> a une loi toute prête — la **loi binomiale** — et un outil de calcul vieux de
> plusieurs siècles : le **triangle de Pascal**. Ce chapitre te donne aussi le
> nombre qui résume une variable aléatoire : son **espérance**.

---

## 1. Variable aléatoire discrète finie et loi de probabilité

### Définition

Une **variable aléatoire** $X$ associe un nombre à chaque issue d'une
expérience aléatoire. Elle est **discrète finie** quand elle ne prend qu'un
nombre fini de valeurs $x_1, x_2, \ldots, x_n$.

Donner la **loi de probabilité** de $X$, c'est donner toutes ses valeurs et
leurs probabilités, en général dans un tableau :

| $x_i$ | $x_1$ | $x_2$ | $\cdots$ | $x_n$ |
|---|---|---|---|---|
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\cdots$ | $p_n$ |

**Contrôle obligatoire** : $\boxed{p_1 + p_2 + \cdots + p_n = 1}$.

> **Exemple (jeu de stand).** Une partie coûte $2$ €. Une roue donne $0$ €
> (probabilité $0{,}5$), $3$ € (probabilité $0{,}3$) ou $7$ € (probabilité
> $0{,}2$). Soit $X$ le **gain algébrique** (somme reçue moins la mise) :
>
> | $x_i$ | $-2$ | $1$ | $5$ |
> |---|---|---|---|
> | $P(X = x_i)$ | $0{,}5$ | $0{,}3$ | $0{,}2$ |
>
> Contrôle : $0{,}5 + 0{,}3 + 0{,}2 = 1$. ✓

⚠️ L'événement $\{X = k\}$ se lit « $X$ prend la valeur $k$ » : c'est un
**événement**, et $P(X = k)$ est sa probabilité.

---

## 2. Espérance d'une variable aléatoire discrète finie

### Définition

L'**espérance** de $X$ est la moyenne de ses valeurs, **pondérée par leurs
probabilités** :

$$\boxed{E(X) = x_1 p_1 + x_2 p_2 + \cdots + x_n p_n}$$

### Interprétation — c'est elle qu'on note au bac

$E(X)$ est la **valeur moyenne de $X$ sur un très grand nombre de répétitions**
de l'expérience. Ce n'est **pas** ce qui se passe à une partie donnée.

- Si $X$ est un gain : $E(X) > 0$, le jeu est favorable au joueur ;
  $E(X) < 0$, il est défavorable ; $\boxed{E(X) = 0 \Rightarrow \text{jeu équitable}}$.

> **Exemple (jeu de stand, suite).**
> $$E(X) = (-2) \times 0{,}5 + 1 \times 0{,}3 + 5 \times 0{,}2 = -1 + 0{,}3 + 1 = 0{,}3$$
> Sur un grand nombre de parties, un joueur gagne **en moyenne** $0{,}30$ € par
> partie : le jeu lui est légèrement favorable. À une partie donnée, il gagne
> $5$ € ou perd $2$ € — jamais $0{,}30$ €.

⚠️ Ne calcule pas la moyenne **simple** des valeurs
($\frac{-2 + 1 + 5}{3} = \frac{4}{3}$ ici, faux) : chaque valeur est pondérée
par sa probabilité.

---

## 3. Coefficients binomiaux et triangle de Pascal

### Définition

$n$ et $k$ sont des entiers avec $0 \leq k \leq n$. Le **coefficient binomial**
$\dbinom{n}{k}$ (lire « $k$ parmi $n$ ») est le **nombre de chemins réalisant
exactement $k$ succès** dans un arbre de $n$ répétitions à deux issues.

### Le triangle de Pascal — l'outil de calcul du programme

<!-- schema:triangle-pascal -->
![Triangle de Pascal jusqu’à n = 8 : chaque nombre est la somme des deux nombres situés au-dessus de lui (ligne précédente, même colonne et colonne de gauche), par exemple 4 + 6 = 10, coefficient de la ligne 5, colonne 2.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzU2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNTYiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxMDIiIHk9IjQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0Pjx0ZXh0IHg9IjE0NiIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHRleHQgeD0iMTkwIiB5PSI0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjwvdGV4dD48dGV4dCB4PSIyMzQiIHk9IjQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4zPC90ZXh0Pjx0ZXh0IHg9IjI3OCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjQ8L3RleHQ+PHRleHQgeD0iMzIyIiB5PSI0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NTwvdGV4dD48dGV4dCB4PSIzNjYiIHk9IjQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj42PC90ZXh0Pjx0ZXh0IHg9IjQxMCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjc8L3RleHQ+PHRleHQgeD0iNDU0IiB5PSI0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+ODwvdGV4dD48dGV4dCB4PSI3MCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPm4gXCBrPC90ZXh0Pjx0ZXh0IHg9IjY4IiB5PSI3MC44NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MDwvdGV4dD48cmVjdCB4PSI4MCIgeT0iNTAiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjEwMiIgeT0iNzAuODQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iNjgiIHk9IjEwMi41MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48cmVjdCB4PSI4MCIgeT0iODEuNjgiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjEwMiIgeT0iMTAyLjUyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxyZWN0IHg9IjEyNCIgeT0iODEuNjgiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE0NiIgeT0iMTAyLjUyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjY4IiB5PSIxMzQuMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjwvdGV4dD48cmVjdCB4PSI4MCIgeT0iMTEzLjM2IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxMDIiIHk9IjEzNC4yIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxyZWN0IHg9IjEyNCIgeT0iMTEzLjM2IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxNDYiIHk9IjEzNC4yIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0PjxyZWN0IHg9IjE2OCIgeT0iMTEzLjM2IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxOTAiIHk9IjEzNC4yIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjY4IiB5PSIxNjUuODgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjM8L3RleHQ+PHJlY3QgeD0iODAiIHk9IjE0NS4wNCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTAyIiB5PSIxNjUuODgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHJlY3QgeD0iMTI0IiB5PSIxNDUuMDQiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE0NiIgeT0iMTY1Ljg4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0PjxyZWN0IHg9IjE2OCIgeT0iMTQ1LjA0IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxOTAiIHk9IjE2NS44OCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MzwvdGV4dD48cmVjdCB4PSIyMTIiIHk9IjE0NS4wNCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjM0IiB5PSIxNjUuODgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iNjgiIHk9IjE5Ny41NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48cmVjdCB4PSI4MCIgeT0iMTc2LjcyIiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxMDIiIHk9IjE5Ny41NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48cmVjdCB4PSIxMjQiIHk9IjE3Ni43MiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxNDYiIHk9IjE5Ny41NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDwvdGV4dD48cmVjdCB4PSIxNjgiIHk9IjE3Ni43MiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxOTAiIHk9IjE5Ny41NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NjwvdGV4dD48cmVjdCB4PSIyMTIiIHk9IjE3Ni43MiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjM0IiB5PSIxOTcuNTYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PHJlY3QgeD0iMjU2IiB5PSIxNzYuNzIiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjI3OCIgeT0iMTk3LjU2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjY4IiB5PSIyMjkuMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjU8L3RleHQ+PHJlY3QgeD0iODAiIHk9IjIwOC40IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxMDIiIHk9IjIyOS4yNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48cmVjdCB4PSIxMjQiIHk9IjIwOC40IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxNDYiIHk9IjIyOS4yNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NTwvdGV4dD48cmVjdCB4PSIxNjgiIHk9IjIwOC40IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMyIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE5MCIgeT0iMjI5LjI0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4xMDwvdGV4dD48cmVjdCB4PSIyMTIiIHk9IjIwOC40IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIyMzQiIHk9IjIyOS4yNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTA8L3RleHQ+PHJlY3QgeD0iMjU2IiB5PSIyMDguNCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjc4IiB5PSIyMjkuMjQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU8L3RleHQ+PHJlY3QgeD0iMzAwIiB5PSIyMDguNCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMzIyIiB5PSIyMjkuMjQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iNjgiIHk9IjI2MC45MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NjwvdGV4dD48cmVjdCB4PSI4MCIgeT0iMjQwLjA4IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxMDIiIHk9IjI2MC45MiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48cmVjdCB4PSIxMjQiIHk9IjI0MC4wOCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTQ2IiB5PSIyNjAuOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjY8L3RleHQ+PHJlY3QgeD0iMTY4IiB5PSIyNDAuMDgiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE5MCIgeT0iMjYwLjkyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xNTwvdGV4dD48cmVjdCB4PSIyMTIiIHk9IjI0MC4wOCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjM0IiB5PSIyNjAuOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIwPC90ZXh0PjxyZWN0IHg9IjI1NiIgeT0iMjQwLjA4IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIyNzgiIHk9IjI2MC45MiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTU8L3RleHQ+PHJlY3QgeD0iMzAwIiB5PSIyNDAuMDgiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjMyMiIgeT0iMjYwLjkyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj42PC90ZXh0PjxyZWN0IHg9IjM0NCIgeT0iMjQwLjA4IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIzNjYiIHk9IjI2MC45MiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI2OCIgeT0iMjkyLjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPjc8L3RleHQ+PHJlY3QgeD0iODAiIHk9IjI3MS43NiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTAyIiB5PSIyOTIuNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48cmVjdCB4PSIxMjQiIHk9IjI3MS43NiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTQ2IiB5PSIyOTIuNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NzwvdGV4dD48cmVjdCB4PSIxNjgiIHk9IjI3MS43NiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTkwIiB5PSIyOTIuNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjE8L3RleHQ+PHJlY3QgeD0iMjEyIiB5PSIyNzEuNzYiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjIzNCIgeT0iMjkyLjYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjM1PC90ZXh0PjxyZWN0IHg9IjI1NiIgeT0iMjcxLjc2IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIyNzgiIHk9IjI5Mi42IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zNTwvdGV4dD48cmVjdCB4PSIzMDAiIHk9IjI3MS43NiIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMzIyIiB5PSIyOTIuNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjE8L3RleHQ+PHJlY3QgeD0iMzQ0IiB5PSIyNzEuNzYiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjM2NiIgeT0iMjkyLjYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjc8L3RleHQ+PHJlY3QgeD0iMzg4IiB5PSIyNzEuNzYiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjQxMCIgeT0iMjkyLjYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PHRleHQgeD0iNjgiIHk9IjMyNC4yOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+ODwvdGV4dD48cmVjdCB4PSI4MCIgeT0iMzAzLjQ0IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIxMDIiIHk9IjMyNC4yOCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48cmVjdCB4PSIxMjQiIHk9IjMwMy40NCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMTQ2IiB5PSIzMjQuMjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjg8L3RleHQ+PHJlY3QgeD0iMTY4IiB5PSIzMDMuNDQiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjE5MCIgeT0iMzI0LjI4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yODwvdGV4dD48cmVjdCB4PSIyMTIiIHk9IjMwMy40NCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMjM0IiB5PSIzMjQuMjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjU2PC90ZXh0PjxyZWN0IHg9IjI1NiIgeT0iMzAzLjQ0IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSIyNzgiIHk9IjMyNC4yOCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NzA8L3RleHQ+PHJlY3QgeD0iMzAwIiB5PSIzMDMuNDQiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMS42OCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjAuOCIvPjx0ZXh0IHg9IjMyMiIgeT0iMzI0LjI4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj41NjwvdGV4dD48cmVjdCB4PSIzNDQiIHk9IjMwMy40NCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iMzY2IiB5PSIzMjQuMjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI4PC90ZXh0PjxyZWN0IHg9IjM4OCIgeT0iMzAzLjQ0IiB3aWR0aD0iNDQiIGhlaWdodD0iMzEuNjgiIHJ4PSIwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz48dGV4dCB4PSI0MTAiIHk9IjMyNC4yOCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+ODwvdGV4dD48cmVjdCB4PSI0MzIiIHk9IjMwMy40NCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMxLjY4IiByeD0iMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMC44Ii8+PHRleHQgeD0iNDU0IiB5PSIzMjQuMjgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjE8L3RleHQ+PGxpbmUgeDE9IjE0NiIgeTE9IjIwMC40OCIgeDI9IjE3NC45MyIgeTI9IjIxNC44IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE4MS4yLDIxNy45IDE3Ni40OCwyMTEuNjYgMTczLjM3LDIxNy45NCIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSIxOTAiIHkxPSIyMDMuNjUiIHgyPSIxOTAiIHkyPSIyMDcuNzQiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTkwLDIxNC43NCAxOTMuNSwyMDcuNzQgMTg2LjUsMjA3Ljc0IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iNTIwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+NCArIDYgPSAxMDwvdGV4dD48L3N2Zz4=)
*Triangle de Pascal jusqu’à n = 8 : chaque nombre est la somme des deux nombres situés au-dessus de lui (ligne précédente, même colonne et colonne de gauche), par exemple 4 + 6 = 10, coefficient de la ligne 5, colonne 2.*
<!-- /schema -->

On calcule les $\dbinom{n}{k}$ **par le triangle de Pascal**, construit ligne
par ligne :

1. chaque ligne commence et finit par $1$ : $\dbinom{n}{0} = \dbinom{n}{n} = 1$ ;
2. chaque autre nombre est la **somme des deux nombres situés au-dessus de lui** :

$$\boxed{\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}}$$

| $n \backslash k$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|---|
| $n = 0$ | $1$ | | | | | | | | |
| $n = 1$ | $1$ | $1$ | | | | | | | |
| $n = 2$ | $1$ | $2$ | $1$ | | | | | | |
| $n = 3$ | $1$ | $3$ | $3$ | $1$ | | | | | |
| $n = 4$ | $1$ | $4$ | $6$ | $4$ | $1$ | | | | |
| $n = 5$ | $1$ | $5$ | $10$ | $10$ | $5$ | $1$ | | | |
| $n = 6$ | $1$ | $6$ | $15$ | $20$ | $15$ | $6$ | $1$ | | |
| $n = 7$ | $1$ | $7$ | $21$ | $35$ | $35$ | $21$ | $7$ | $1$ | |
| $n = 8$ | $1$ | $8$ | $28$ | $56$ | $70$ | $56$ | $28$ | $8$ | $1$ |

Lecture : $\dbinom{n}{k}$ est à la **ligne $n$**, **colonne $k$** — et la
numérotation **commence à $0$**, pas à $1$.

> **Exemple.** $\dbinom{5}{2}$ : ligne $5$, colonne $2$, on lit $10$.
> Vérification par la règle de construction : $\dbinom{5}{2} = \dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10$. ✓

### Propriétés lisibles sur le triangle

- **Symétrie** : $\dbinom{n}{k} = \dbinom{n}{n-k}$ — chaque ligne se lit
  pareil dans les deux sens. Exemple : $\dbinom{8}{6} = \dbinom{8}{2} = 28$.
- $\dbinom{n}{1} = n$ : un seul succès, $n$ places possibles.

> **Astuce.** Pour $\dbinom{7}{5}$, pas besoin d'aller loin dans la ligne :
> $\dbinom{7}{5} = \dbinom{7}{2} = 21$. La symétrie raccourcit la lecture.

---

## 4. Épreuve de Bernoulli et loi binomiale $B(n, p)$

### Épreuve de Bernoulli

Une **épreuve de Bernoulli** est une expérience à **deux issues** : le
**succès** $S$, de probabilité $p$, et l'**échec** $\bar{S}$, de probabilité
$1 - p$.

### Situation binomiale — les trois conditions à vérifier

$X$ suit la **loi binomiale** $B(n, p)$ quand :

1. on répète $n$ fois la **même** épreuve de Bernoulli ;
2. les répétitions sont **indépendantes** (le résultat d'une épreuve ne change
   pas les probabilités des suivantes) ;
3. $X$ **compte le nombre de succès** obtenus au cours des $n$ épreuves.

$X$ prend alors les valeurs $0, 1, 2, \ldots, n$.

> **Exemple (contrôle qualité).** Dans une production, $4\,\%$ des pièces sont
> défectueuses. On prélève $10$ pièces au hasard, la production étant assez
> grande pour assimiler le prélèvement à des tirages indépendants. $X$ = nombre
> de pièces défectueuses. Succès = « la pièce est défectueuse », $p = 0{,}04$,
> répété $n = 10$ fois de façon indépendante, $X$ compte les succès :
> $$X \sim B(10\,;\ 0{,}04)$$

⚠️ **Tirages sans remise dans un petit lot** : la probabilité change à chaque
tirage, les épreuves ne sont **pas** indépendantes — ce n'est pas une
situation binomiale. ⚠️ **« On joue jusqu'au premier succès »** : le nombre
d'épreuves n'est pas fixé — pas binomiale non plus.

### Interpréter $\{X = k\}$

$\{X = k\}$ est l'événement « on obtient **exactement** $k$ succès au cours
des $n$ épreuves ». **Exactement** : ni « au moins $k$ », ni « au plus $k$ »,
ni « la $k$-ième épreuve est un succès ».

Sur l'arbre des $n$ répétitions, $\{X = k\}$ regroupe **tous les chemins**
comportant $k$ succès et $n - k$ échecs — il y en a $\dbinom{n}{k}$.

---

## 5. Calculer $P(X = k)$

### La formule

Si $X \sim B(n, p)$, alors pour tout entier $k$ entre $0$ et $n$ :

$$\boxed{P(X = k) = \binom{n}{k}\, p^k\, (1-p)^{n-k}}$$

**D'où elle vient** (lecture sur l'arbre) : un chemin à $k$ succès et $n - k$
échecs a pour probabilité $p^k (1-p)^{n-k}$ (produit le long du chemin,
répétitions indépendantes) ; il y a $\dbinom{n}{k}$ chemins de ce type, tous
de même probabilité ; on additionne.

> **Exemple (lancers francs).** Une basketteuse réussit chaque lancer franc
> avec la probabilité $0{,}6$, les lancers étant supposés indépendants. Elle en
> tente $4$. $X$ = nombre de réussites, $X \sim B(4\,;\ 0{,}6)$.
>
> Probabilité d'exactement $3$ réussites : triangle de Pascal, ligne $4$,
> colonne $3$ : $\dbinom{4}{3} = 4$, puis
> $$P(X = 3) = \binom{4}{3} \times 0{,}6^3 \times 0{,}4^{1} = 4 \times 0{,}216 \times 0{,}4 = 0{,}3456$$

### Cas particuliers utiles

- $P(X = 0) = (1-p)^n$ : aucun succès, un seul chemin (que des échecs).
- $P(X = n) = p^n$ : que des succès, un seul chemin.

### Méthode type bac

1. **Justifie** la loi binomiale : même épreuve de Bernoulli répétée $n$ fois,
   répétitions indépendantes, $X$ compte les succès. Nomme le succès et donne
   $p$. Conclus : $X \sim B(n, p)$.
2. **Interprète** $\{X = k\}$ par une phrase (« exactement $k$… »).
3. **Lis** $\dbinom{n}{k}$ dans le triangle de Pascal (ligne $n$, colonne $k$),
   en le construisant jusqu'à la ligne $n$ si besoin.
4. **Applique** la formule $P(X = k) = \dbinom{n}{k} p^k (1-p)^{n-k}$, en
   vérifiant que les exposants somment à $n$.

---

## 6. Espérance de la loi binomiale

<!-- schema:loi-binomiale-4-06 -->
![Loi de X qui suit B(4 ; 0,6), nombre de lancers francs réussis sur 4 : l’espérance E(X) = 4 × 0,6 = 2,4 n’est pas une valeur possible de X, c’est une moyenne.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDYiIHkxPSIyNjQiIHgyPSI1MDgiIHkyPSIyNjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjY4IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjIwNi41IiB4Mj0iNTA4IiB5Mj0iMjA2LjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMjEwLjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMTwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIxNDkiIHgyPSI1MDgiIHkyPSIxNDkiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMTUzIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDI8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iOTEuNSIgeDI9IjUwOCIgeTI9IjkxLjUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iOTUuNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCwzPC90ZXh0PjxsaW5lIHgxPSI0NiIgeTE9IjM0IiB4Mj0iNTA4IiB5Mj0iMzQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iMzgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsNDwvdGV4dD48bGluZSB4MT0iNDYiIHkxPSIyNjQiIHgyPSI1MDgiIHkyPSIyNjQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjI2NCIgeDI9IjQ2IiB5Mj0iMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjYzIiB5PSIyNDkuMjgiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxNC43MiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI3NiIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxyZWN0IHg9IjE2Ni41IiB5PSIxNzUuNjgiIHdpZHRoPSIyNiIgaGVpZ2h0PSI4OC4zMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSIxNzkuNSIgeT0iMjgxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xPC90ZXh0PjxyZWN0IHg9IjI3MCIgeT0iNjUuMjgiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxOTguNzIiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PHRleHQgeD0iMjgzIiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI8L3RleHQ+PHJlY3QgeD0iMzczLjUiIHk9IjY1LjI4IiB3aWR0aD0iMjYiIGhlaWdodD0iMTk4LjcyIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuNyIvPjx0ZXh0IHg9IjM4Ni41IiB5PSIyODEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjM8L3RleHQ+PHJlY3QgeD0iNDc3IiB5PSIxODkuNDgiIHdpZHRoPSIyNiIgaGVpZ2h0PSI3NC41MiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCB4PSI0OTAiIHk9IjI4MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDwvdGV4dD48bGluZSB4MT0iMzI0LjQiIHkxPSIyNjQiIHgyPSIzMjQuNCIgeTI9IjM0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMzAuNCIgeT0iNDQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+RShYKSA9IDIsNDwvdGV4dD48dGV4dCB4PSIyNjAiIHk9IjIwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Mb2kgYmlub21pYWxlIEIoNCA7IDAsNik8L3RleHQ+PC9zdmc+)
*Loi de X qui suit B(4 ; 0,6), nombre de lancers francs réussis sur 4 : l’espérance E(X) = 4 × 0,6 = 2,4 n’est pas une valeur possible de X, c’est une moyenne.*
<!-- /schema -->

Si $X \sim B(n, p)$ :

$$\boxed{E(X) = n \times p}$$

Interprétation : sur un grand nombre de répétitions de l'expérience complète
(les $n$ épreuves), le nombre **moyen** de succès est $np$.

> **Exemple (lancers francs, suite).** $X \sim B(4\,;\ 0{,}6)$ :
> $E(X) = 4 \times 0{,}6 = 2{,}4$. Sur un grand nombre de séries de $4$
> lancers, la basketteuse réussit en moyenne $2{,}4$ lancers par série.
> $2{,}4$ n'est pas une valeur possible de $X$ — une moyenne n'a pas à en être
> une.

> **Exemple (contrôle qualité, suite).** $X \sim B(10\,;\ 0{,}04)$ :
> $E(X) = 10 \times 0{,}04 = 0{,}4$ pièce défectueuse en moyenne par
> prélèvement de $10$ pièces.

---

## 7. Tableau récapitulatif

| À savoir | Formule / règle |
|---|---|
| Loi de probabilité | tableau des $x_i$ et $p_i$, avec $p_1 + \cdots + p_n = 1$ |
| Espérance (cas général) | $E(X) = x_1 p_1 + \cdots + x_n p_n$ |
| Interprétation de $E(X)$ | moyenne de $X$ sur un grand nombre de répétitions |
| Jeu équitable | $E(\text{gain algébrique}) = 0$ |
| Triangle de Pascal | bords $= 1$ ; chaque nombre $=$ somme des deux du dessus |
| Coefficient binomial | $\dbinom{n}{k}$ : ligne $n$, colonne $k$ (numérotées depuis $0$) |
| Symétrie | $\dbinom{n}{k} = \dbinom{n}{n-k}$ |
| Situation binomiale | même épreuve à 2 issues, $n$ répétitions indépendantes, $X$ compte les succès |
| Événement $\{X = k\}$ | « exactement $k$ succès sur les $n$ épreuves » |
| Probabilité | $P(X = k) = \dbinom{n}{k}\, p^k\, (1-p)^{n-k}$ |
| Cas extrêmes | $P(X = 0) = (1-p)^n$ ; $P(X = n) = p^n$ |
| Espérance binomiale | $E(X) = np$ |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier le coefficient binomial** dans $P(X = k)$ : $p^k (1-p)^{n-k}$
   n'est la probabilité que d'**un seul** chemin. Il faut le multiplier par le
   nombre de chemins $\dbinom{n}{k}$.
2. **Se tromper d'exposants** : c'est $p^k (1-p)^{n-k}$ — les deux exposants
   somment à $n$. Écrire $0{,}6^3 \times 0{,}4^4$ pour $B(4\,;\ 0{,}6)$ et
   $k = 3$ est absurde : $3 + 4 \neq 4$.
3. **Mal lire le triangle de Pascal** : lignes et colonnes sont numérotées
   **à partir de $0$**. $\dbinom{5}{2}$ est le **troisième** nombre de la
   ligne $5$ ($10$), pas le deuxième ($5$).
4. **Déclarer binomiale une situation qui ne l'est pas** : tirages sans remise
   dans un petit lot (pas d'indépendance), nombre d'épreuves non fixé
   (« jusqu'au premier succès »), ou $X$ qui ne compte pas des succès. Les
   trois conditions se vérifient — et se rédigent.
5. **Confondre $\{X = k\}$ (« exactement $k$ ») avec « au moins $k$ »** ou
   « la $k$-ième épreuve est un succès ». La phrase d'interprétation doit
   contenir « exactement ».
6. **Interpréter $E(X)$ comme un résultat certain.** $E(X) = 2{,}4$ ne veut pas
   dire « on obtient $2{,}4$ succès » (impossible !) mais « $2{,}4$ succès **en
   moyenne** sur un grand nombre de répétitions ». Et pour l'espérance
   générale, ne pas oublier de **pondérer** par les probabilités.
