---
id: tale-spe-pc-decrire-mouvement
titre: "Décrire un mouvement"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Mouvement et interactions"
duree_lecture_min: 15
prerequis:
  - Vecteurs et coordonnées (Seconde)
  - Vitesse moyenne et référentiel (Seconde)
  - Dérivée d'une fonction (Maths, Première)
statut: brouillon
relu_par: null
---

# Décrire un mouvement

> En Seconde, tu calculais une vitesse **moyenne** entre deux positions. En Terminale, on
> passe à la vitesse **instantanée** : celle du compteur, à un instant précis. L'outil pour
> cela, c'est la **dérivée**. Décrire un mouvement, ce sera manipuler trois vecteurs qui se
> déduisent l'un de l'autre par dérivation : **position → vitesse → accélération**.

Tout ce qui suit est écrit dans un **référentiel** donné, muni d'un **repère**
$(\mathrm{O}, \vec{\imath}, \vec{\jmath}, \vec{k})$. Un mouvement n'a de sens que par
rapport à un référentiel : il faut toujours le préciser.

---

## 1. Le vecteur position

### Définition

La position d'un point $\mathrm{M}$ à l'instant $t$ est donnée par le **vecteur position**
$\vec{\mathrm{OM}}(t)$, qui va de l'origine $\mathrm{O}$ du repère jusqu'au point $\mathrm{M}$.

En coordonnées cartésiennes, à deux dimensions :

$$\boxed{\vec{\mathrm{OM}}(t) = x(t)\,\vec{\imath} + y(t)\,\vec{\jmath}}$$

Les fonctions $x(t)$ et $y(t)$ sont les **équations horaires** du mouvement. Elles
s'expriment en **mètres (m)**. Éliminer $t$ entre elles donne l'**équation de la
trajectoire** (une relation entre $x$ et $y$, sans le temps).

> **Exemple.** Un mobile a pour équations horaires $x(t) = 2t$ et $y(t) = 3$ (en mètres, $t$
> en secondes). Sa trajectoire est la droite d'équation $y = 3$ : il avance horizontalement.

### Distance à l'origine

La norme $\lVert \vec{\mathrm{OM}} \rVert = \sqrt{x^2 + y^2}$ donne la distance entre
$\mathrm{M}$ et l'origine, en mètres.

---

## 2. Le vecteur vitesse

### Définition : dérivée du vecteur position

Le **vecteur vitesse** est la **dérivée du vecteur position par rapport au temps** :

$$\boxed{\vec{v}(t) = \frac{\mathrm{d}\vec{\mathrm{OM}}}{\mathrm{d}t}}$$

Concrètement, on dérive **chaque coordonnée** :

$$v_x = \frac{\mathrm{d}x}{\mathrm{d}t} = \dot{x}
\qquad
v_y = \frac{\mathrm{d}y}{\mathrm{d}t} = \dot{y}$$

Le vecteur vitesse s'exprime en **mètres par seconde (m·s⁻¹)**. Le point au-dessus de la
lettre ($\dot{x}$) est une notation courante pour « dérivée par rapport au temps ».

> **Exemple.** Si $x(t) = 2t$ et $y(t) = 3$, alors $v_x = 2$ et $v_y = 0$ :
> $\vec{v} = 2\,\vec{\imath}$. Le mobile va à $2$ m·s⁻¹ dans la direction de $\vec{\imath}$.

### Direction : toujours tangente à la trajectoire

Propriété essentielle : **le vecteur vitesse est toujours tangent à la trajectoire** et
orienté dans le sens du mouvement. C'est ce qui permet, sur un enregistrement, de tracer
$\vec{v}$ « le long » du chemin suivi.

Sa norme, la **vitesse** (ou célérité) $v = \lVert \vec{v} \rVert = \sqrt{v_x^2 + v_y^2}$,
est un scalaire positif en m·s⁻¹.

### En pratique, sur un enregistrement de points

Quand on ne dispose que de positions relevées à intervalle de temps $\tau$ régulier, on
**approche** la dérivée par un taux de variation entre les points **encadrant** l'instant
étudié :

$$v_i \approx \frac{M_{i-1}M_{i+1}}{2\tau}$$

> ⚠️ On utilise les points $M_{i-1}$ et $M_{i+1}$ (**avant et après**), pas $M_i$ et
> $M_{i+1}$. Encadrer le point donne une bien meilleure estimation de la vitesse instantanée.

---

## 3. Le vecteur accélération

### Définition : dérivée du vecteur vitesse

Le **vecteur accélération** est la **dérivée du vecteur vitesse par rapport au temps** —
donc la dérivée **seconde** du vecteur position :

$$\boxed{\vec{a}(t) = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t}
= \frac{\mathrm{d}^2\vec{\mathrm{OM}}}{\mathrm{d}t^2}}$$

Coordonnée par coordonnée :

$$a_x = \frac{\mathrm{d}v_x}{\mathrm{d}t} = \dot{v}_x = \ddot{x}
\qquad
a_y = \frac{\mathrm{d}v_y}{\mathrm{d}t} = \dot{v}_y = \ddot{y}$$

L'accélération s'exprime en **mètres par seconde au carré (m·s⁻²)**.

> **Exemple.** Une bille en chute libre a $v_y(t) = -9{,}8\,t$. Alors
> $a_y = \dfrac{\mathrm{d}v_y}{\mathrm{d}t} = -9{,}8$ m·s⁻² : accélération constante,
> dirigée vers le bas.

### Ce que signale l'accélération

L'accélération traduit **toute variation du vecteur vitesse** — en **norme** (on accélère
ou on freine) **ou en direction** (on tourne). Un mouvement peut donc être accéléré même à
vitesse constante en valeur, s'il change de direction : c'est le cas du mouvement circulaire.

> ⚠️ « Vitesse constante » ne veut pas dire « accélération nulle ». L'accélération n'est
> nulle **que** si le vecteur vitesse est constant **en norme ET en direction**.

---

## 4. Méthode : des coordonnées à tout le reste

<!-- schema:trajectoire -->
![Exemple de la fiche : x = 3t et y = 5t − t² ; le vecteur vitesse est tangent à la trajectoire et l'accélération (0 ; −2) reste la même en tout point.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIyODQiIHgyPSI1MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgzLjE4IiB5MT0iMjg0IiB4Mj0iODMuMTgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMTYuMzUiIHkxPSIyODQiIHgyPSIxMTYuMzUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNDkuNTMiIHkxPSIyODQiIHgyPSIxNDkuNTMiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxODIuNzEiIHkxPSIyODQiIHgyPSIxODIuNzEiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMTUuODgiIHkxPSIyODQiIHgyPSIyMTUuODgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNDkuMDYiIHkxPSIyODQiIHgyPSIyNDkuMDYiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODIuMjQiIHkxPSIyODQiIHgyPSIyODIuMjQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMTUuNDEiIHkxPSIyODQiIHgyPSIzMTUuNDEiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNDguNTkiIHkxPSIyODQiIHgyPSIzNDguNTkiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzODEuNzYiIHkxPSIyODQiIHgyPSIzODEuNzYiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MTQuOTQiIHkxPSIyODQiIHgyPSI0MTQuOTQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NDguMTIiIHkxPSIyODQiIHgyPSI0NDguMTIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0ODEuMjkiIHkxPSIyODQiIHgyPSI0ODEuMjkiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MTQuNDciIHkxPSIyODQiIHgyPSI1MTQuNDciIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NDcuNjUiIHkxPSIyODQiIHgyPSI1NDcuNjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1ODAuODIiIHkxPSIyODQiIHgyPSI1ODAuODIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MTQiIHkxPSIyODQiIHgyPSI2MTQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI4NCIgeDI9IjYxNCIgeTI9IjI4NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI1MiIgeDI9IjYxNCIgeTI9IjI1MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjIyMCIgeDI9IjYxNCIgeTI9IjIyMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjE4OCIgeDI9IjYxNCIgeTI9IjE4OCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjE1NiIgeDI9IjYxNCIgeTI9IjE1NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjEyNCIgeDI9IjYxNCIgeTI9IjEyNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjkyIiB4Mj0iNjE0IiB5Mj0iOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTAiIHkxPSI2MCIgeDI9IjYxNCIgeTI9IjYwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMjgiIHgyPSI2MTQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI4NCIgeDI9IjYxOSIgeTI9IjI4NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MjgsMjg0IDYxOSwyNzkuNSA2MTksMjg4LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTAiIHkxPSIyODQiIHgyPSI1MCIgeTI9IjIzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUwLDE0IDQ1LjUsMjMgNTQuNSwyMyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI1MCIgeTE9IjI4NCIgeDI9IjUwIiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MCIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxsaW5lIHgxPSI4My4xOCIgeTE9IjI4NCIgeDI9IjgzLjE4IiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI4My4xOCIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PGxpbmUgeDE9IjExNi4zNSIgeTE9IjI4NCIgeDI9IjExNi4zNSIgeTI9IjI4OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTE2LjM1IiB5PSIzMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48bGluZSB4MT0iMTQ5LjUzIiB5MT0iMjg0IiB4Mj0iMTQ5LjUzIiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNDkuNTMiIHk9IjMwMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzwvdGV4dD48bGluZSB4MT0iMTgyLjcxIiB5MT0iMjg0IiB4Mj0iMTgyLjcxIiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxODIuNzEiIHk9IjMwMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0PjxsaW5lIHgxPSIyMTUuODgiIHkxPSIyODQiIHgyPSIyMTUuODgiIHkyPSIyODgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIxNS44OCIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PGxpbmUgeDE9IjI0OS4wNiIgeTE9IjI4NCIgeDI9IjI0OS4wNiIgeTI9IjI4OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjQ5LjA2IiB5PSIzMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjY8L3RleHQ+PGxpbmUgeDE9IjI4Mi4yNCIgeTE9IjI4NCIgeDI9IjI4Mi4yNCIgeTI9IjI4OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjgyLjI0IiB5PSIzMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48bGluZSB4MT0iMzE1LjQxIiB5MT0iMjg0IiB4Mj0iMzE1LjQxIiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMTUuNDEiIHk9IjMwMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0PjxsaW5lIHgxPSIzNDguNTkiIHkxPSIyODQiIHgyPSIzNDguNTkiIHkyPSIyODgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM0OC41OSIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PjxsaW5lIHgxPSIzODEuNzYiIHkxPSIyODQiIHgyPSIzODEuNzYiIHkyPSIyODgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4MS43NiIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PGxpbmUgeDE9IjQxNC45NCIgeTE9IjI4NCIgeDI9IjQxNC45NCIgeTI9IjI4OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDE0Ljk0IiB5PSIzMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48bGluZSB4MT0iNDQ4LjEyIiB5MT0iMjg0IiB4Mj0iNDQ4LjEyIiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0NDguMTIiIHk9IjMwMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTI8L3RleHQ+PGxpbmUgeDE9IjQ4MS4yOSIgeTE9IjI4NCIgeDI9IjQ4MS4yOSIgeTI9IjI4OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgxLjI5IiB5PSIzMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48bGluZSB4MT0iNTE0LjQ3IiB5MT0iMjg0IiB4Mj0iNTE0LjQ3IiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MTQuNDciIHk9IjMwMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0PjxsaW5lIHgxPSI1NDcuNjUiIHkxPSIyODQiIHgyPSI1NDcuNjUiIHkyPSIyODgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU0Ny42NSIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNTwvdGV4dD48bGluZSB4MT0iNTgwLjgyIiB5MT0iMjg0IiB4Mj0iNTgwLjgyIiB5Mj0iMjg4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1ODAuODIiIHk9IjMwMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0PjxsaW5lIHgxPSI2MTQiIHkxPSIyODQiIHgyPSI2MTQiIHkyPSIyODgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjYxNCIgeT0iMzAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj48L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMjg0IiB4Mj0iNTAiIHkyPSIyODQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIyODgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMjUyIiB4Mj0iNTAiIHkyPSIyNTIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIyNTYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjE8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMjIwIiB4Mj0iNTAiIHkyPSIyMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIyMjQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjI8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTg4IiB4Mj0iNTAiIHkyPSIxODgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIxOTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjM8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTU2IiB4Mj0iNTAiIHkyPSIxNTYiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIxNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQ8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMTI0IiB4Mj0iNTAiIHkyPSIxMjQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyIiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjU8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iOTIiIHgyPSI1MCIgeTI9IjkyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MiIgeT0iOTYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjY8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iNjAiIHgyPSI1MCIgeTI9IjYwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MiIgeT0iNjQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjc8L3RleHQ+PGxpbmUgeDE9IjQ2IiB5MT0iMjgiIHgyPSI1MCIgeTI9IjI4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MiIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjg8L3RleHQ+PHRleHQgeD0iNjM0IiB5PSIzMjAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPnggKG0pPC90ZXh0Pjx0ZXh0IHg9IjQ0IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij55IChtKTwvdGV4dD48cGF0aCBkPSJNIDUwIDI4NCBMIDUxLjY2IDI4MS4zNCBMIDUzLjMyIDI3OC43IEwgNTQuOTggMjc2LjA4IEwgNTYuNjQgMjczLjQ4IEwgNTguMjkgMjcwLjg5IEwgNTkuOTUgMjY4LjMyIEwgNjEuNjEgMjY1Ljc3IEwgNjMuMjcgMjYzLjI0IEwgNjQuOTMgMjYwLjcyIEwgNjYuNTkgMjU4LjIyIEwgNjguMjUgMjU1Ljc0IEwgNjkuOTEgMjUzLjI4IEwgNzEuNTYgMjUwLjg0IEwgNzMuMjIgMjQ4LjQxIEwgNzQuODggMjQ2IEwgNzYuNTQgMjQzLjYxIEwgNzguMiAyNDEuMjQgTCA3OS44NiAyMzguODggTCA4MS41MiAyMzYuNTQgTCA4My4xOCAyMzQuMjIgTCA4NC44NCAyMzEuOTIgTCA4Ni40OSAyMjkuNjQgTCA4OC4xNSAyMjcuMzcgTCA4OS44MSAyMjUuMTIgTCA5MS40NyAyMjIuODkgTCA5My4xMyAyMjAuNjggTCA5NC43OSAyMTguNDggTCA5Ni40NSAyMTYuMyBMIDk4LjExIDIxNC4xNCBMIDk5Ljc2IDIxMiBMIDEwMS40MiAyMDkuODggTCAxMDMuMDggMjA3Ljc3IEwgMTA0Ljc0IDIwNS42OCBMIDEwNi40IDIwMy42MSBMIDEwOC4wNiAyMDEuNTYgTCAxMDkuNzIgMTk5LjUyIEwgMTExLjM4IDE5Ny41IEwgMTEzLjA0IDE5NS41IEwgMTE0LjY5IDE5My41MiBMIDExNi4zNSAxOTEuNTYgTCAxMTguMDEgMTg5LjYxIEwgMTE5LjY3IDE4Ny42OCBMIDEyMS4zMyAxODUuNzcgTCAxMjIuOTkgMTgzLjg4IEwgMTI0LjY1IDE4MiBMIDEyNi4zMSAxODAuMTQgTCAxMjcuOTYgMTc4LjMgTCAxMjkuNjIgMTc2LjQ4IEwgMTMxLjI4IDE3NC42OCBMIDEzMi45NCAxNzIuODkgTCAxMzQuNiAxNzEuMTIgTCAxMzYuMjYgMTY5LjM3IEwgMTM3LjkyIDE2Ny42NCBMIDEzOS41OCAxNjUuOTIgTCAxNDEuMjQgMTY0LjIyIEwgMTQyLjg5IDE2Mi41NCBMIDE0NC41NSAxNjAuODggTCAxNDYuMjEgMTU5LjI0IEwgMTQ3Ljg3IDE1Ny42MSBMIDE0OS41MyAxNTYgTCAxNTEuMTkgMTU0LjQxIEwgMTUyLjg1IDE1Mi44NCBMIDE1NC41MSAxNTEuMjggTCAxNTYuMTYgMTQ5Ljc0IEwgMTU3LjgyIDE0OC4yMiBMIDE1OS40OCAxNDYuNzIgTCAxNjEuMTQgMTQ1LjI0IEwgMTYyLjggMTQzLjc3IEwgMTY0LjQ2IDE0Mi4zMiBMIDE2Ni4xMiAxNDAuODkgTCAxNjcuNzggMTM5LjQ4IEwgMTY5LjQ0IDEzOC4wOCBMIDE3MS4wOSAxMzYuNyBMIDE3Mi43NSAxMzUuMzQgTCAxNzQuNDEgMTM0IEwgMTc2LjA3IDEzMi42OCBMIDE3Ny43MyAxMzEuMzcgTCAxNzkuMzkgMTMwLjA4IEwgMTgxLjA1IDEyOC44MSBMIDE4Mi43MSAxMjcuNTYgTCAxODQuMzYgMTI2LjMyIEwgMTg2LjAyIDEyNS4xIEwgMTg3LjY4IDEyMy45IEwgMTg5LjM0IDEyMi43MiBMIDE5MSAxMjEuNTYgTCAxOTIuNjYgMTIwLjQxIEwgMTk0LjMyIDExOS4yOCBMIDE5NS45OCAxMTguMTcgTCAxOTcuNjQgMTE3LjA4IEwgMTk5LjI5IDExNiBMIDIwMC45NSAxMTQuOTQgTCAyMDIuNjEgMTEzLjkgTCAyMDQuMjcgMTEyLjg4IEwgMjA1LjkzIDExMS44OCBMIDIwNy41OSAxMTAuODkgTCAyMDkuMjUgMTA5LjkyIEwgMjEwLjkxIDEwOC45NyBMIDIxMi41NiAxMDguMDQgTCAyMTQuMjIgMTA3LjEyIEwgMjE1Ljg4IDEwNi4yMiBMIDIxNy41NCAxMDUuMzQgTCAyMTkuMiAxMDQuNDggTCAyMjAuODYgMTAzLjY0IEwgMjIyLjUyIDEwMi44MSBMIDIyNC4xOCAxMDIgTCAyMjUuODQgMTAxLjIxIEwgMjI3LjQ5IDEwMC40NCBMIDIyOS4xNSA5OS42OCBMIDIzMC44MSA5OC45NCBMIDIzMi40NyA5OC4yMiBMIDIzNC4xMyA5Ny41MiBMIDIzNS43OSA5Ni44NCBMIDIzNy40NSA5Ni4xNyBMIDIzOS4xMSA5NS41MiBMIDI0MC43NiA5NC44OSBMIDI0Mi40MiA5NC4yOCBMIDI0NC4wOCA5My42OCBMIDI0NS43NCA5My4xIEwgMjQ3LjQgOTIuNTQgTCAyNDkuMDYgOTIgTCAyNTAuNzIgOTEuNDggTCAyNTIuMzggOTAuOTcgTCAyNTQuMDQgOTAuNDggTCAyNTUuNjkgOTAuMDEgTCAyNTcuMzUgODkuNTYgTCAyNTkuMDEgODkuMTIgTCAyNjAuNjcgODguNyBMIDI2Mi4zMyA4OC4zIEwgMjYzLjk5IDg3LjkyIEwgMjY1LjY1IDg3LjU2IEwgMjY3LjMxIDg3LjIxIEwgMjY4Ljk2IDg2Ljg4IEwgMjcwLjYyIDg2LjU3IEwgMjcyLjI4IDg2LjI4IEwgMjczLjk0IDg2IEwgMjc1LjYgODUuNzQgTCAyNzcuMjYgODUuNSBMIDI3OC45MiA4NS4yOCBMIDI4MC41OCA4NS4wOCBMIDI4Mi4yNCA4NC44OSBMIDI4My44OSA4NC43MiBMIDI4NS41NSA4NC41NyBMIDI4Ny4yMSA4NC40NCBMIDI4OC44NyA4NC4zMiBMIDI5MC41MyA4NC4yMiBMIDI5Mi4xOSA4NC4xNCBMIDI5My44NSA4NC4wOCBMIDI5NS41MSA4NC4wNCBMIDI5Ny4xNiA4NC4wMSBMIDI5OC44MiA4NCBMIDMwMC40OCA4NC4wMSBMIDMwMi4xNCA4NC4wNCBMIDMwMy44IDg0LjA4IEwgMzA1LjQ2IDg0LjE0IEwgMzA3LjEyIDg0LjIyIEwgMzA4Ljc4IDg0LjMyIEwgMzEwLjQ0IDg0LjQ0IEwgMzEyLjA5IDg0LjU3IEwgMzEzLjc1IDg0LjcyIEwgMzE1LjQxIDg0Ljg5IEwgMzE3LjA3IDg1LjA4IEwgMzE4LjczIDg1LjI4IEwgMzIwLjM5IDg1LjUgTCAzMjIuMDUgODUuNzQgTCAzMjMuNzEgODYgTCAzMjUuMzYgODYuMjggTCAzMjcuMDIgODYuNTcgTCAzMjguNjggODYuODggTCAzMzAuMzQgODcuMjEgTCAzMzIgODcuNTYgTCAzMzMuNjYgODcuOTIgTCAzMzUuMzIgODguMyBMIDMzNi45OCA4OC43IEwgMzM4LjY0IDg5LjEyIEwgMzQwLjI5IDg5LjU2IEwgMzQxLjk1IDkwLjAxIEwgMzQzLjYxIDkwLjQ4IEwgMzQ1LjI3IDkwLjk3IEwgMzQ2LjkzIDkxLjQ4IEwgMzQ4LjU5IDkyIEwgMzUwLjI1IDkyLjU0IEwgMzUxLjkxIDkzLjEgTCAzNTMuNTYgOTMuNjggTCAzNTUuMjIgOTQuMjggTCAzNTYuODggOTQuODkgTCAzNTguNTQgOTUuNTIgTCAzNjAuMiA5Ni4xNyBMIDM2MS44NiA5Ni44NCBMIDM2My41MiA5Ny41MiBMIDM2NS4xOCA5OC4yMiBMIDM2Ni44NCA5OC45NCBMIDM2OC40OSA5OS42OCBMIDM3MC4xNSAxMDAuNDQgTCAzNzEuODEgMTAxLjIxIEwgMzczLjQ3IDEwMiBMIDM3NS4xMyAxMDIuODEgTCAzNzYuNzkgMTAzLjY0IEwgMzc4LjQ1IDEwNC40OCBMIDM4MC4xMSAxMDUuMzQgTCAzODEuNzYgMTA2LjIyIEwgMzgzLjQyIDEwNy4xMiBMIDM4NS4wOCAxMDguMDQgTCAzODYuNzQgMTA4Ljk3IEwgMzg4LjQgMTA5LjkyIEwgMzkwLjA2IDExMC44OSBMIDM5MS43MiAxMTEuODggTCAzOTMuMzggMTEyLjg4IEwgMzk1LjA0IDExMy45IEwgMzk2LjY5IDExNC45NCBMIDM5OC4zNSAxMTYgTCA0MDAuMDEgMTE3LjA4IEwgNDAxLjY3IDExOC4xNyBMIDQwMy4zMyAxMTkuMjggTCA0MDQuOTkgMTIwLjQxIEwgNDA2LjY1IDEyMS41NiBMIDQwOC4zMSAxMjIuNzIgTCA0MDkuOTYgMTIzLjkgTCA0MTEuNjIgMTI1LjEgTCA0MTMuMjggMTI2LjMyIEwgNDE0Ljk0IDEyNy41NiBMIDQxNi42IDEyOC44MSBMIDQxOC4yNiAxMzAuMDggTCA0MTkuOTIgMTMxLjM3IEwgNDIxLjU4IDEzMi42OCBMIDQyMy4yNCAxMzQgTCA0MjQuODkgMTM1LjM0IEwgNDI2LjU1IDEzNi43IEwgNDI4LjIxIDEzOC4wOCBMIDQyOS44NyAxMzkuNDggTCA0MzEuNTMgMTQwLjg5IEwgNDMzLjE5IDE0Mi4zMiBMIDQzNC44NSAxNDMuNzcgTCA0MzYuNTEgMTQ1LjI0IEwgNDM4LjE2IDE0Ni43MiBMIDQzOS44MiAxNDguMjIgTCA0NDEuNDggMTQ5Ljc0IEwgNDQzLjE0IDE1MS4yOCBMIDQ0NC44IDE1Mi44NCBMIDQ0Ni40NiAxNTQuNDEgTCA0NDguMTIgMTU2IEwgNDQ5Ljc4IDE1Ny42MSBMIDQ1MS40NCAxNTkuMjQgTCA0NTMuMDkgMTYwLjg4IEwgNDU0Ljc1IDE2Mi41NCBMIDQ1Ni40MSAxNjQuMjIgTCA0NTguMDcgMTY1LjkyIEwgNDU5LjczIDE2Ny42NCBMIDQ2MS4zOSAxNjkuMzcgTCA0NjMuMDUgMTcxLjEyIEwgNDY0LjcxIDE3Mi44OSBMIDQ2Ni4zNiAxNzQuNjggTCA0NjguMDIgMTc2LjQ4IEwgNDY5LjY4IDE3OC4zIEwgNDcxLjM0IDE4MC4xNCBMIDQ3MyAxODIgTCA0NzQuNjYgMTgzLjg4IEwgNDc2LjMyIDE4NS43NyBMIDQ3Ny45OCAxODcuNjggTCA0NzkuNjQgMTg5LjYxIEwgNDgxLjI5IDE5MS41NiBMIDQ4Mi45NSAxOTMuNTIgTCA0ODQuNjEgMTk1LjUgTCA0ODYuMjcgMTk3LjUgTCA0ODcuOTMgMTk5LjUyIEwgNDg5LjU5IDIwMS41NiBMIDQ5MS4yNSAyMDMuNjEgTCA0OTIuOTEgMjA1LjY4IEwgNDk0LjU2IDIwNy43NyBMIDQ5Ni4yMiAyMDkuODggTCA0OTcuODggMjEyIEwgNDk5LjU0IDIxNC4xNCBMIDUwMS4yIDIxNi4zIEwgNTAyLjg2IDIxOC40OCBMIDUwNC41MiAyMjAuNjggTCA1MDYuMTggMjIyLjg5IEwgNTA3Ljg0IDIyNS4xMiBMIDUwOS40OSAyMjcuMzcgTCA1MTEuMTUgMjI5LjY0IEwgNTEyLjgxIDIzMS45MiBMIDUxNC40NyAyMzQuMjIgTCA1MTYuMTMgMjM2LjU0IEwgNTE3Ljc5IDIzOC44OCBMIDUxOS40NSAyNDEuMjQgTCA1MjEuMTEgMjQzLjYxIEwgNTIyLjc2IDI0NiBMIDUyNC40MiAyNDguNDEgTCA1MjYuMDggMjUwLjg0IEwgNTI3Ljc0IDI1My4yOCBMIDUyOS40IDI1NS43NCBMIDUzMS4wNiAyNTguMjIgTCA1MzIuNzIgMjYwLjcyIEwgNTM0LjM4IDI2My4yNCBMIDUzNi4wNCAyNjUuNzcgTCA1MzcuNjkgMjY4LjMyIEwgNTM5LjM1IDI3MC44OSBMIDU0MS4wMSAyNzMuNDggTCA1NDIuNjcgMjc2LjA4IEwgNTQ0LjMzIDI3OC43IEwgNTQ1Ljk5IDI4MS4zNCBMIDU0Ny42NSAyODQiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSIyODQiIHI9IjQiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSIxNDkuNTMiIGN5PSIxNTYiIHI9IjQiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxNTMuNTMiIHk9IjE3NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij50ID0gMSBzPC90ZXh0PjxjaXJjbGUgY3g9IjI0OS4wNiIgY3k9IjkyIiByPSI0IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMjUzLjA2IiB5PSIxMTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+dCA9IDIgczwvdGV4dD48Y2lyY2xlIGN4PSIzNDguNTkiIGN5PSI5MiIgcj0iNCIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjM1Mi41OSIgeT0iMTEwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnQgPSAzIHM8L3RleHQ+PGNpcmNsZSBjeD0iNDQ4LjEyIiBjeT0iMTU2IiByPSI0IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNDUyLjEyIiB5PSIxNzQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+dCA9IDQgczwvdGV4dD48Y2lyY2xlIGN4PSI1NDcuNjUiIGN5PSIyODQiIHI9IjQiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMTQ5LjUzIiB5MT0iMTU2IiB4Mj0iMjE2Ljk4IiB5Mj0iOTAuOTQiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjI0LjE4LDg0IDIxMy41MSw4Ny4zNCAyMjAuNDUsOTQuNTQiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTQ5LjUzIiB5MT0iMTU2IiB4Mj0iMTQ5LjUzIiB5Mj0iMTk0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE0OS41MywyMDQgMTU0LjUzLDE5NCAxNDQuNTMsMTk0IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjMwLjE4IiB5PSI4MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj52ICgzIDsgMyk8L3RleHQ+PGxpbmUgeDE9IjQ0OC4xMiIgeTE9IjE1NiIgeDI9IjUxNS41NyIgeTI9IjIyMS4wNiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MjIuNzYsMjI4IDUxOS4wNCwyMTcuNDYgNTEyLjEsMjI0LjY2IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjQ0OC4xMiIgeTE9IjE1NiIgeDI9IjQ0OC4xMiIgeTI9IjE5NCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NDguMTIsMjA0IDQ1My4xMiwxOTQgNDQzLjEyLDE5NCIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjUyOC43NiIgeT0iMjI0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPnYgKDMgOyDiiJIzKTwvdGV4dD48dGV4dCB4PSIxNDEuNTMiIHk9IjE5NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+YSAoMCA7IOKIkjIpPC90ZXh0Pjx0ZXh0IHg9IjYwNy4zNiIgeT0iNTAuNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+eCA9IDN0IDsgeSA9IDV0IOKIkiB0wrI8L3RleHQ+PC9zdmc+)
*Exemple de la fiche : x = 3t et y = 5t − t² ; le vecteur vitesse est tangent à la trajectoire et l'accélération (0 ; −2) reste la même en tout point.*
<!-- /schema -->

Face à des équations horaires $x(t)$ et $y(t)$, la démarche est toujours la même :

1. **Écrire** le vecteur position $\vec{\mathrm{OM}} = x(t)\,\vec{\imath} + y(t)\,\vec{\jmath}$.
2. **Dériver** chaque coordonnée pour obtenir $\vec{v}$ : $v_x = \dot{x}$, $v_y = \dot{y}$.
3. **Dériver encore** pour obtenir $\vec{a}$ : $a_x = \dot{v}_x$, $a_y = \dot{v}_y$.
4. **Calculer les normes** si besoin : $v = \sqrt{v_x^2 + v_y^2}$, etc.

> **Exemple complet.** $x(t) = 3t$ et $y(t) = 5t - t^2$ (SI).
> $\vec{v} : v_x = 3,\ v_y = 5 - 2t$. $\vec{a} : a_x = 0,\ a_y = -2$.
> L'accélération est constante : $\vec{a} = -2\,\vec{\jmath}$ (m·s⁻²).

---

## 5. Le repère de Frenet (mouvement circulaire)

<!-- schema:frenet -->
![Repère de Frenet en un point M d'un cercle : uₜ est tangent dans le sens du mouvement, uₙ dirigé vers le centre ; l'accélération a une composante normale v²/R.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNzAiIHI9IjEyMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTcwIiByPSIzLjUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxOTQiIHk9IjE4OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TyAoY2VudHJlKTwvdGV4dD48bGluZSB4MT0iMjAwIiB5MT0iMTcwIiB4Mj0iMjk4LjMiIHkyPSIxMDEuMTciIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI1My4xNSIgeT0iMTI3LjU5IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SPC90ZXh0PjxjaXJjbGUgY3g9IjI5OC4zIiBjeT0iMTAxLjE3IiByPSI1IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzA4LjMiIHk9IjExNy4xNyIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5NPC90ZXh0PjxsaW5lIHgxPSIyOTguMyIgeTE9IjEwMS4xNyIgeDI9IjI3Ny42NSIgeTI9IjcxLjY4IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI3MS45MSw2My40OSAyNzMuNTUsNzQuNTUgMjgxLjc1LDY4LjgxIiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMjc3LjYyIiB5PSI2MC4yMSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj514oKcPC90ZXh0PjxsaW5lIHgxPSIyOTguMyIgeTE9IjEwMS4xNyIgeDI9IjI2OC44MSIgeTI9IjEyMS44MiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNjAuNjIsMTI3LjU2IDI3MS42OCwxMjUuOTIgMjY1Ljk0LDExNy43MiIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHg9IjI1NC42MiIgeT0iMTQzLjU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj514oKZPC90ZXh0PjxsaW5lIHgxPSIyNzUuMzYiIHkxPSI2OC40IiB4Mj0iMjA5LjgyIiB5Mj0iMTE0LjI5IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjMyLjc3IiB5MT0iMTQ3LjA2IiB4Mj0iMjA5LjgyIiB5Mj0iMTE0LjI5IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjk4LjMiIHkxPSIxMDEuMTciIHgyPSIyMTkuNzEiIHkyPSIxMTIuODIiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIwOS44MiwxMTQuMjkgMjIwLjQ1LDExNy43NyAyMTguOTgsMTA3Ljg4IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjAxLjgyIiB5PSIxMDguMjkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPmE8L3RleHQ+PHBhdGggZD0iTSA5Ni4wOCAyMzAgUSA5MS4xMSAyNzguODkgMTMyLjA0IDI3NC43MyIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE0MCwyNzMuOTIgMTI5LjU1LDI2OS45NiAxMzAuNTYsMjc5LjkxIiBmaWxsPSIjNWI2YjdhIi8+PHRleHQgeD0iODAiIHk9IjI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c2VucyBkdSBtb3V2ZW1lbnQ8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSI3MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0Ij514oKcIDogdGFuZ2VudCwgc2VucyBkdSBtb3V2ZW1lbnQ8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSI5NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0Ij514oKZIDogbm9ybWFsLCB2ZXJzIGxlIGNlbnRyZTwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjE0MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5hID0gYeKCnCB14oKcICsgYeKCmSB14oKZPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMTY2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmHigpwgPSBkdi9kdDwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjE5MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5h4oKZID0gdsKyIC8gUiAodG91am91cnMgJmd0OyAwKTwvdGV4dD48L3N2Zz4=)
*Repère de Frenet en un point M d'un cercle : uₜ est tangent dans le sens du mouvement, uₙ dirigé vers le centre ; l'accélération a une composante normale v²/R.*
<!-- /schema -->

Pour un mouvement **circulaire** de rayon $R$, le repère cartésien est peu commode. On lui
préfère le **repère de Frenet**, attaché au point mobile $\mathrm{M}$ et composé de deux
vecteurs unitaires :

| Vecteur | Direction | Sens |
|---|---|---|
| $\vec{u_t}$ | **tangent** à la trajectoire | sens du mouvement |
| $\vec{u_n}$ | **normal** (perpendiculaire) | vers le **centre** du cercle |

Dans ce repère, la vitesse n'a **qu'une composante tangentielle** (puisque $\vec{v}$ est
tangent) :

$$\vec{v} = v\,\vec{u_t}$$

Et l'accélération se décompose en deux termes, l'un tangentiel, l'autre normal :

$$\boxed{\vec{a} = \underbrace{\frac{\mathrm{d}v}{\mathrm{d}t}}_{a_t}\,\vec{u_t}
\;+\; \underbrace{\frac{v^2}{R}}_{a_n}\,\vec{u_n}}$$

| Composante | Expression | Ce qu'elle traduit |
|---|---|---|
| Tangentielle $a_t$ | $\dfrac{\mathrm{d}v}{\mathrm{d}t}$ | la variation de la **valeur** de la vitesse |
| Normale $a_n$ | $\dfrac{v^2}{R}$ | le **changement de direction** (courbure) |

> **Ce qu'il faut comprendre** : la composante normale $a_n = \dfrac{v^2}{R}$ est **toujours
> présente** dès qu'on tourne, et **toujours dirigée vers le centre**. Elle ne peut pas être
> nulle sur une trajectoire courbe. La composante tangentielle, elle, n'existe que si la
> **valeur** de la vitesse change.

> ⚠️ Dans $a_n = \dfrac{v^2}{R}$, la vitesse est **au carré** et $R$ est au **dénominateur** :
> plus on va vite ou plus le virage est serré (petit $R$), plus l'accélération normale est
> grande. C'est pourquoi un virage serré à grande vitesse « plaque » dans le siège.

---

## 6. Caractériser un mouvement par son accélération

Le programme demande de **caractériser le vecteur accélération** pour trois mouvements types.

### Mouvement rectiligne uniforme

Trajectoire **droite**, vitesse **constante en norme et en direction**.

$$\vec{v} = \text{constant} \qquad \Longrightarrow \qquad \boxed{\vec{a} = \vec{0}}$$

> **Exemple.** Un palet glissant sans frottement en ligne droite à vitesse fixe :
> aucune accélération.

### Mouvement rectiligne uniformément accéléré

Trajectoire **droite**, mais la **valeur** de la vitesse varie de façon régulière.

$$\boxed{\vec{a} = \text{constant, colinéaire à } \vec{v}}$$

L'accélération est **portée par la trajectoire** (composante normale nulle, puisque $R$ est
infini sur une droite). Elle est dans le sens de $\vec{v}$ si le mobile **accélère**, en
sens opposé s'il **freine**.

> **Exemple.** Une bille en chute libre verticale : $\vec{a} = \vec{g}$, constante, dirigée
> vers le bas, colinéaire à la vitesse.

### Mouvement circulaire uniforme

Trajectoire **cercle** de rayon $R$, vitesse **constante en valeur** ($v = $ cte).

La composante tangentielle est **nulle** ($\frac{\mathrm{d}v}{\mathrm{d}t} = 0$), il ne
reste que la composante normale :

$$\boxed{\vec{a} = \frac{v^2}{R}\,\vec{u_n}}$$

L'accélération est **centripète** : constante en **norme** ($a = \frac{v^2}{R}$), mais elle
**change sans cesse de direction** puisqu'elle pointe toujours vers le centre. On relie aussi
la vitesse à la période $T$ (durée d'un tour) : $v = \dfrac{2\pi R}{T}$.

> **Exemple.** Un satellite en orbite circulaire garde une vitesse constante en valeur, mais
> subit en permanence une accélération dirigée vers la Terre : c'est elle qui le fait
> « tourner » au lieu de filer tout droit.

> ⚠️ Dans un mouvement circulaire **uniforme**, la vitesse est constante en **valeur** mais
> le vecteur $\vec{v}$, lui, **change** (sa direction tourne). D'où une accélération non
> nulle. C'est le piège classique.

---

## 7. Tableau récapitulatif

| Grandeur | Définition | Formule | Unité |
|---|---|---|---|
| Position | vecteur $\mathrm{O} \to \mathrm{M}$ | $\vec{\mathrm{OM}} = x\vec{\imath} + y\vec{\jmath}$ | m |
| Vitesse | dérivée de la position | $\vec{v} = \dfrac{\mathrm{d}\vec{\mathrm{OM}}}{\mathrm{d}t}$, $v_x = \dot{x}$ | m·s⁻¹ |
| Accélération | dérivée de la vitesse | $\vec{a} = \dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$, $a_x = \ddot{x}$ | m·s⁻² |
| Frenet | $\vec{a} = a_t\,\vec{u_t} + a_n\,\vec{u_n}$ | $a_t = \dfrac{\mathrm{d}v}{\mathrm{d}t}$, $a_n = \dfrac{v^2}{R}$ | m·s⁻² |

| Mouvement | Vecteur accélération |
|---|---|
| Rectiligne uniforme | $\vec{a} = \vec{0}$ |
| Rectiligne uniformément accéléré | $\vec{a}$ constant, colinéaire à $\vec{v}$ |
| Circulaire uniforme | $\vec{a} = \dfrac{v^2}{R}\,\vec{u_n}$ (centripète) |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre vitesse moyenne et vitesse instantanée.** La vitesse instantanée est une
   **dérivée** ; la moyenne, un rapport distance/durée entre deux points.
2. **Croire que « vitesse constante en valeur » implique $\vec{a} = \vec{0}$.** Faux en
   circulaire : la direction de $\vec{v}$ change, donc $\vec{a} \neq \vec{0}$.
3. **Oublier le carré dans $a_n = \dfrac{v^2}{R}$**, ou mettre $R$ au numérateur. C'est
   $v$ **au carré**, divisé par $R$.
4. **Diriger l'accélération centripète vers l'extérieur.** $\vec{u_n}$ pointe vers le
   **centre** : l'accélération d'un mouvement circulaire uniforme est **centripète**.
5. **Prendre $M_i M_{i+1}$ au lieu de $M_{i-1} M_{i+1}$** pour estimer la vitesse : il faut
   **encadrer** le point et diviser par $2\tau$.
6. **Négliger les unités.** Position en m, vitesse en m·s⁻¹, accélération en m·s⁻². Une
   accélération en « m·s⁻¹ » signale une dérivation oubliée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe
terminale générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-physique-chimie-2019.txt, thème 2 « Mouvement et interactions »,
section « 2.1 Décrire un mouvement », lignes 103-111).
Page BO : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction via WebFetch depuis le PDF officiel, à confronter au PDF avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Notations : le programme utilise-t-il $\vec{u_t}/\vec{u_n}$ ou $\vec{\tau}/\vec{n}$ pour le
  repère de Frenet ? J'ai retenu $\vec{u_t}, \vec{u_n}$ (usage manuel le plus fréquent).
- Le rayon de courbure est ici noté $R$ (rayon du cercle en circulaire) ; vérifier qu'on ne
  demande pas la notion générale de rayon de courbure hors trajectoire circulaire.
- L'estimation numérique de la vitesse par M_{i-1}M_{i+1}/(2τ) relève de la démarche
  expérimentale : confirmer qu'elle est bien attendue à ce niveau (elle l'est en pratique).
- La relation v = 2πR/T (circulaire uniforme) est ajoutée comme lien utile ; vérifier
  qu'elle n'excède pas le périmètre de 2.1 (vitesse angulaire ω non introduite ici,
  volontairement, car non listée dans les capacités exigibles de 2.1).
- g pris à 9,8 m·s⁻² dans les exemples ; harmoniser avec la valeur retenue par le relecteur.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
