---
id: tale-spe-pc-lois-newton-champs
titre: "Deuxième loi de Newton et mouvements dans un champ"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Mouvement et interactions"
duree_lecture_min: 16
prerequis:
  - Vecteurs position, vitesse et accélération (Terminale, 2.1)
  - Forces et interactions ; poids et champ de pesanteur (Première/Seconde)
  - Dérivation d'une fonction (Terminale maths)
statut: brouillon
relu_par: null
---

# Deuxième loi de Newton et mouvements dans un champ

<!-- schema:auto -->
![Le poids : force verticale, dirigée vers le bas, appliquée au centre de gravité G.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDAiIHkxPSIyMTAiIHgyPSIzMjAiIHkyPSIyMTAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjUyIiB5MT0iMjEwIiB4Mj0iNDQiIHkyPSIyMjIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48bGluZSB4MT0iODYiIHkxPSIyMTAiIHgyPSI3OCIgeTI9IjIyMiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjxsaW5lIHgxPSIxMjAiIHkxPSIyMTAiIHgyPSIxMTIiIHkyPSIyMjIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48bGluZSB4MT0iMTU0IiB5MT0iMjEwIiB4Mj0iMTQ2IiB5Mj0iMjIyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGxpbmUgeDE9IjE4OCIgeTE9IjIxMCIgeDI9IjE4MCIgeTI9IjIyMiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjxsaW5lIHgxPSIyMjIiIHkxPSIyMTAiIHgyPSIyMTQiIHkyPSIyMjIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48bGluZSB4MT0iMjU2IiB5MT0iMjEwIiB4Mj0iMjQ4IiB5Mj0iMjIyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGxpbmUgeDE9IjI5MCIgeTE9IjIxMCIgeDI9IjI4MiIgeTI9IjIyMiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjxyZWN0IHg9IjEzMCIgeT0iMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjcwIiByeD0iNiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjEwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjE4MCIgY3k9IjE1NSIgcj0iMy41IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMTg4IiB5PSIxNDkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiPkc8L3RleHQ+PGxpbmUgeDE9IjE4MCIgeTE9IjE1NSIgeDI9IjE4MCIgeTI9IjIwMiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuOCIvPjxwYXRoIGQ9Ik0gMTgwIDIwNiBsIC02IC0xMiBoIDEyIHoiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIxOTIiIHk9IjE4Mi41IiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzAyYTJhIiBmb250LXN0eWxlPSJpdGFsaWMiPlA8L3RleHQ+PHRleHQgeD0iMjA0IiB5PSIxODIuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSI+KHBvaWRzKTwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjI0NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dmVydGljYWwsIHZlcnMgbGUgYmFzLCBhcHBsaXF1w6kgZW4gRzwvdGV4dD48L3N2Zz4=)

> La cinématique décrivait le mouvement ; la dynamique l'**explique**. La deuxième loi de
> Newton fait le pont entre les **forces** subies par un système et son **accélération**. Un
> seul principe, et le même, décrit la chute d'une balle, la déviation d'un électron dans un
> écran et l'orbite de la Lune. C'est l'un des sommets du programme.

---

## 1. La deuxième loi de Newton

### Système, centre de masse, référentiel

On étudie un **système** (la balle, le satellite, l'électron). On le modélise le plus souvent
par son **centre de masse** $G$, point unique où l'on peut considérer toute la masse concentrée.
Étudier « le mouvement du système », c'est étudier le mouvement de $G$.

Un mouvement n'a de sens que dans un **référentiel** donné. La deuxième loi n'est valable que
dans un **référentiel galiléen** : un référentiel dans lequel un système isolé (soumis à aucune
force) est au repos ou en mouvement rectiligne uniforme (c'est la 1re loi, le principe d'inertie).

| Référentiel | Galiléen pour… |
|---|---|
| **Terrestre** (lié au sol) | chutes, projectiles, expériences de courte durée |
| **Géocentrique** (centre Terre, axes vers les étoiles) | satellites de la Terre, la Lune |
| **Héliocentrique** (centre Soleil, axes vers les étoiles) | planètes du système solaire |

### La loi

Dans un référentiel galiléen, la somme des forces extérieures appliquées à un système de
masse $m$ constante est égale au produit de la masse par l'accélération de son centre de masse :

$$\boxed{\sum \vec{F}_{\text{ext}} = m\,\vec{a}_G}$$

C'est une égalité **vectorielle** : elle vaut sur chaque coordonnée ($x$, $y$, $z$). Le vecteur
accélération a donc **toujours la même direction et le même sens** que la somme des forces.

> **Exemple.** Une bille de masse $m = 0{,}20$ kg n'est soumise qu'à son poids
> $\vec{P} = m\vec{g}$. La deuxième loi donne $m\vec{g} = m\vec{a}$, donc $\vec{a} = \vec{g}$ :
> l'accélération vaut $g = 9{,}81$ m·s⁻², **indépendamment de la masse**. Une plume et une
> enclume tombent de même dans le vide.

### Cas de l'équilibre

Si $\vec{a}_G = \vec{0}$ (système au repos ou en translation rectiligne uniforme), alors

$$\sum \vec{F}_{\text{ext}} = \vec{0}$$

C'est la condition d'**équilibre** (les forces se compensent). Réciproque vraie uniquement en
référentiel galiléen.

> **Exemple.** Un parachutiste à vitesse constante : son poids est exactement compensé par les
> frottements de l'air. Somme des forces nulle ⇒ accélération nulle ⇒ vitesse constante.

---

## 2. Méthode générale de résolution

Le même enchaînement résout **tous** les problèmes de dynamique du chapitre :

1. **Système** et **référentiel** (galiléen).
2. **Bilan des forces** (faire un schéma des vecteurs).
3. **Deuxième loi** : $\sum \vec{F}_{\text{ext}} = m\vec{a}$.
4. **Projection** sur les axes → composantes de $\vec{a}$.
5. **Intégration** : de $\vec{a}$ on remonte à $\vec{v}$ (une intégration), puis à la position
   $\vec{OG}$ (deuxième intégration). À chaque étape, les **constantes** sont fixées par les
   **conditions initiales** ($\vec{v}_0$ et la position à $t=0$).

> **Le sens de la dérivation.** $\vec{v} = \dfrac{\mathrm{d}\vec{OG}}{\mathrm{d}t}$ et
> $\vec{a} = \dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$. Remonter de l'accélération à la position,
> c'est faire le chemin inverse : intégrer deux fois.

---

## 3. Chute dans un champ de pesanteur uniforme

Le champ de pesanteur $\vec{g}$ est supposé **uniforme** (même valeur partout, vertical, vers le
bas) et on **néglige les frottements** de l'air. La seule force est le poids $\vec{P} = m\vec{g}$.

Deuxième loi : $m\vec{g} = m\vec{a}$, d'où $\boxed{\vec{a} = \vec{g}}$. L'accélération est
**constante** : le mouvement est dit **uniformément accéléré**.

### Repère et conditions initiales

On lance le système depuis l'origine $O$ avec une vitesse initiale $\vec{v}_0$ faisant un angle
$\alpha$ avec l'horizontale. Axe $x$ horizontal, axe $y$ vertical **vers le haut** (alors
$g_x = 0$ et $g_y = -g$).

$$v_{0x} = v_0\cos\alpha \qquad v_{0y} = v_0\sin\alpha$$

### Équations horaires

En intégrant $\vec{a} = (0\,;\,-g)$ une fois (vitesse) puis deux fois (position) :

$$\boxed{v_x(t) = v_0\cos\alpha} \qquad \boxed{v_y(t) = -g\,t + v_0\sin\alpha}$$

$$\boxed{x(t) = (v_0\cos\alpha)\,t} \qquad \boxed{y(t) = -\tfrac{1}{2}g\,t^{2} + (v_0\sin\alpha)\,t}$$

> **Le mouvement est plan.** Aucune force ne sort du plan $(xOy)$ défini par $\vec{v}_0$ et
> $\vec{g}$ : $z(t)$ reste nul. On travaille toujours à deux dimensions.

> **Lecture physique.** Sur $x$, la vitesse est **constante** (mouvement uniforme) : rien ne
> pousse horizontalement. Sur $y$, la vitesse décroît linéairement : c'est la pesanteur qui
> freine la montée puis accélère la descente.

### Équation de la trajectoire

<!-- schema:projectile -->
![Ballon de l'exemple lancé à 20 m/s sous 30° : la flèche, environ 5,1 m, est atteinte vers 1,0 s, et la portée vaut environ 35 m (frottements négligés).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDYiIHkxPSIyNTQiIHgyPSI0NiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExNyIgeTE9IjI1NCIgeDI9IjExNyIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4OCIgeTE9IjI1NCIgeDI9IjE4OCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI1OSIgeTE9IjI1NCIgeDI9IjI1OSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMzMCIgeTE9IjI1NCIgeDI9IjMzMCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMSIgeTE9IjI1NCIgeDI9IjQwMSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ3MiIgeTE9IjI1NCIgeDI9IjQ3MiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU0MyIgeTE9IjI1NCIgeDI9IjU0MyIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYxNCIgeTE9IjI1NCIgeDI9IjYxNCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMjU0IiB4Mj0iNjE0IiB5Mj0iMjU0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMjI1Ljc1IiB4Mj0iNjE0IiB5Mj0iMjI1Ljc1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMTk3LjUiIHgyPSI2MTQiIHkyPSIxOTcuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjE2OS4yNSIgeDI9IjYxNCIgeTI9IjE2OS4yNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjE0MSIgeDI9IjYxNCIgeTI9IjE0MSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjExMi43NSIgeDI9IjYxNCIgeTI9IjExMi43NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9Ijg0LjUiIHgyPSI2MTQiIHkyPSI4NC41IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iNTYuMjUiIHgyPSI2MTQiIHkyPSI1Ni4yNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjI4IiB4Mj0iNjE0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDYiIHkxPSIyNTQiIHgyPSI2MTkiIHkyPSIyNTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjI4LDI1NCA2MTksMjQ5LjUgNjE5LDI1OC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjQ2IiB5MT0iMjU0IiB4Mj0iNDYiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NiwxNCA0MS41LDIzIDUwLjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNDYiIHkxPSIyNTQiIHgyPSI0NiIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDYiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48bGluZSB4MT0iMTE3IiB5MT0iMjU0IiB4Mj0iMTE3IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMTciIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMTg4IiB5MT0iMjU0IiB4Mj0iMTg4IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxODgiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+PGxpbmUgeDE9IjI1OSIgeTE9IjI1NCIgeDI9IjI1OSIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU5IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE1PC90ZXh0PjxsaW5lIHgxPSIzMzAiIHkxPSIyNTQiIHgyPSIzMzAiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMzMCIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iNDAxIiB5MT0iMjU0IiB4Mj0iNDAxIiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDEiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjU8L3RleHQ+PGxpbmUgeDE9IjQ3MiIgeTE9IjI1NCIgeDI9IjQ3MiIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDcyIiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMwPC90ZXh0PjxsaW5lIHgxPSI1NDMiIHkxPSIyNTQiIHgyPSI1NDMiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU0MyIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zNTwvdGV4dD48bGluZSB4MT0iNjE0IiB5MT0iMjU0IiB4Mj0iNjE0IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MTQiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDA8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMjU0IiB4Mj0iNDYiIHkyPSIyNTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIyNTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMjI1Ljc1IiB4Mj0iNDYiIHkyPSIyMjUuNzUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIyMjkuNzUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjE8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMTk3LjUiIHgyPSI0NiIgeTI9IjE5Ny41IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iMjAxLjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjI8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMTY5LjI1IiB4Mj0iNDYiIHkyPSIxNjkuMjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIxNzMuMjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjM8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMTQxIiB4Mj0iNDYiIHkyPSIxNDEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIxNDUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQ8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMTEyLjc1IiB4Mj0iNDYiIHkyPSIxMTIuNzUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM4IiB5PSIxMTYuNzUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjU8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iODQuNSIgeDI9IjQ2IiB5Mj0iODQuNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzgiIHk9Ijg4LjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjY8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iNTYuMjUiIHgyPSI0NiIgeTI9IjU2LjI1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iNjAuMjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjc8L3RleHQ+PGxpbmUgeDE9IjQyIiB5MT0iMjgiIHgyPSI0NiIgeTI9IjI4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOCIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjg8L3RleHQ+PHRleHQgeD0iNjM0IiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPnggKG0pPC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij55IChtKTwvdGV4dD48cGF0aCBkPSJNIDQ2IDI1NCBMIDQ3LjY3IDI1Mi4wOCBMIDQ5LjM1IDI1MC4xOCBMIDUxLjAyIDI0OC4yOSBMIDUyLjY5IDI0Ni40MiBMIDU0LjM3IDI0NC41NSBMIDU2LjA0IDI0Mi43IEwgNTcuNzEgMjQwLjg2IEwgNTkuMzkgMjM5LjA0IEwgNjEuMDYgMjM3LjIyIEwgNjIuNzMgMjM1LjQyIEwgNjQuNCAyMzMuNjQgTCA2Ni4wOCAyMzEuODYgTCA2Ny43NSAyMzAuMSBMIDY5LjQyIDIyOC4zNSBMIDcxLjEgMjI2LjYxIEwgNzIuNzcgMjI0Ljg5IEwgNzQuNDQgMjIzLjE4IEwgNzYuMTIgMjIxLjQ4IEwgNzcuNzkgMjE5LjggTCA3OS40NiAyMTguMTMgTCA4MS4xNCAyMTYuNDcgTCA4Mi44MSAyMTQuODIgTCA4NC40OCAyMTMuMTkgTCA4Ni4xNiAyMTEuNTcgTCA4Ny44MyAyMDkuOTYgTCA4OS41IDIwOC4zNiBMIDkxLjE3IDIwNi43OCBMIDkyLjg1IDIwNS4yMSBMIDk0LjUyIDIwMy42NiBMIDk2LjE5IDIwMi4xMSBMIDk3Ljg3IDIwMC41OCBMIDk5LjU0IDE5OS4wNiBMIDEwMS4yMSAxOTcuNTYgTCAxMDIuODkgMTk2LjA3IEwgMTA0LjU2IDE5NC41OSBMIDEwNi4yMyAxOTMuMTIgTCAxMDcuOTEgMTkxLjY2IEwgMTA5LjU4IDE5MC4yMiBMIDExMS4yNSAxODguNzkgTCAxMTIuOTMgMTg3LjM4IEwgMTE0LjYgMTg1Ljk4IEwgMTE2LjI3IDE4NC41OSBMIDExNy45NCAxODMuMjEgTCAxMTkuNjIgMTgxLjg0IEwgMTIxLjI5IDE4MC40OSBMIDEyMi45NiAxNzkuMTUgTCAxMjQuNjQgMTc3LjgzIEwgMTI2LjMxIDE3Ni41MSBMIDEyNy45OCAxNzUuMjEgTCAxMjkuNjYgMTczLjkzIEwgMTMxLjMzIDE3Mi42NSBMIDEzMyAxNzEuMzkgTCAxMzQuNjggMTcwLjE0IEwgMTM2LjM1IDE2OC45IEwgMTM4LjAyIDE2Ny42OCBMIDEzOS43IDE2Ni40NyBMIDE0MS4zNyAxNjUuMjcgTCAxNDMuMDQgMTY0LjA5IEwgMTQ0LjcyIDE2Mi45MSBMIDE0Ni4zOSAxNjEuNzYgTCAxNDguMDYgMTYwLjYxIEwgMTQ5LjczIDE1OS40NyBMIDE1MS40MSAxNTguMzUgTCAxNTMuMDggMTU3LjI1IEwgMTU0Ljc1IDE1Ni4xNSBMIDE1Ni40MyAxNTUuMDcgTCAxNTguMSAxNTQgTCAxNTkuNzcgMTUyLjk0IEwgMTYxLjQ1IDE1MS45IEwgMTYzLjEyIDE1MC44NyBMIDE2NC43OSAxNDkuODUgTCAxNjYuNDcgMTQ4Ljg0IEwgMTY4LjE0IDE0Ny44NSBMIDE2OS44MSAxNDYuODcgTCAxNzEuNDkgMTQ1LjkgTCAxNzMuMTYgMTQ0Ljk1IEwgMTc0LjgzIDE0NCBMIDE3Ni41IDE0My4wOCBMIDE3OC4xOCAxNDIuMTYgTCAxNzkuODUgMTQxLjI2IEwgMTgxLjUyIDE0MC4zNyBMIDE4My4yIDEzOS40OSBMIDE4NC44NyAxMzguNjIgTCAxODYuNTQgMTM3Ljc3IEwgMTg4LjIyIDEzNi45MyBMIDE4OS44OSAxMzYuMTEgTCAxOTEuNTYgMTM1LjI5IEwgMTkzLjI0IDEzNC40OSBMIDE5NC45MSAxMzMuNyBMIDE5Ni41OCAxMzIuOTMgTCAxOTguMjYgMTMyLjE3IEwgMTk5LjkzIDEzMS40MiBMIDIwMS42IDEzMC42OCBMIDIwMy4yNyAxMjkuOTYgTCAyMDQuOTUgMTI5LjI1IEwgMjA2LjYyIDEyOC41NSBMIDIwOC4yOSAxMjcuODYgTCAyMDkuOTcgMTI3LjE5IEwgMjExLjY0IDEyNi41MyBMIDIxMy4zMSAxMjUuODggTCAyMTQuOTkgMTI1LjI1IEwgMjE2LjY2IDEyNC42MyBMIDIxOC4zMyAxMjQuMDIgTCAyMjAuMDEgMTIzLjQyIEwgMjIxLjY4IDEyMi44NCBMIDIyMy4zNSAxMjIuMjcgTCAyMjUuMDMgMTIxLjcxIEwgMjI2LjcgMTIxLjE3IEwgMjI4LjM3IDEyMC42NCBMIDIzMC4wNSAxMjAuMTIgTCAyMzEuNzIgMTE5LjYxIEwgMjMzLjM5IDExOS4xMiBMIDIzNS4wNiAxMTguNjQgTCAyMzYuNzQgMTE4LjE3IEwgMjM4LjQxIDExNy43MSBMIDI0MC4wOCAxMTcuMjcgTCAyNDEuNzYgMTE2Ljg0IEwgMjQzLjQzIDExNi40MyBMIDI0NS4xIDExNi4wMiBMIDI0Ni43OCAxMTUuNjMgTCAyNDguNDUgMTE1LjI1IEwgMjUwLjEyIDExNC44OSBMIDI1MS44IDExNC41NCBMIDI1My40NyAxMTQuMiBMIDI1NS4xNCAxMTMuODcgTCAyNTYuODIgMTEzLjU2IEwgMjU4LjQ5IDExMy4yNiBMIDI2MC4xNiAxMTIuOTcgTCAyNjEuODMgMTEyLjY5IEwgMjYzLjUxIDExMi40MyBMIDI2NS4xOCAxMTIuMTggTCAyNjYuODUgMTExLjk0IEwgMjY4LjUzIDExMS43MiBMIDI3MC4yIDExMS41MSBMIDI3MS44NyAxMTEuMzEgTCAyNzMuNTUgMTExLjEyIEwgMjc1LjIyIDExMC45NSBMIDI3Ni44OSAxMTAuNzkgTCAyNzguNTcgMTEwLjY0IEwgMjgwLjI0IDExMC41MSBMIDI4MS45MSAxMTAuMzkgTCAyODMuNTkgMTEwLjI4IEwgMjg1LjI2IDExMC4xOCBMIDI4Ni45MyAxMTAuMSBMIDI4OC42IDExMC4wMyBMIDI5MC4yOCAxMDkuOTcgTCAyOTEuOTUgMTA5LjkzIEwgMjkzLjYyIDEwOS44OSBMIDI5NS4zIDEwOS44NyBMIDI5Ni45NyAxMDkuODcgTCAyOTguNjQgMTA5Ljg3IEwgMzAwLjMyIDEwOS44OSBMIDMwMS45OSAxMDkuOTMgTCAzMDMuNjYgMTA5Ljk3IEwgMzA1LjM0IDExMC4wMyBMIDMwNy4wMSAxMTAuMSBMIDMwOC42OCAxMTAuMTggTCAzMTAuMzYgMTEwLjI4IEwgMzEyLjAzIDExMC4zOSBMIDMxMy43IDExMC41MSBMIDMxNS4zOCAxMTAuNjQgTCAzMTcuMDUgMTEwLjc5IEwgMzE4LjcyIDExMC45NSBMIDMyMC4zOSAxMTEuMTIgTCAzMjIuMDcgMTExLjMxIEwgMzIzLjc0IDExMS41MSBMIDMyNS40MSAxMTEuNzIgTCAzMjcuMDkgMTExLjk0IEwgMzI4Ljc2IDExMi4xOCBMIDMzMC40MyAxMTIuNDMgTCAzMzIuMTEgMTEyLjY5IEwgMzMzLjc4IDExMi45NyBMIDMzNS40NSAxMTMuMjYgTCAzMzcuMTMgMTEzLjU2IEwgMzM4LjggMTEzLjg3IEwgMzQwLjQ3IDExNC4yIEwgMzQyLjE1IDExNC41NCBMIDM0My44MiAxMTQuODkgTCAzNDUuNDkgMTE1LjI1IEwgMzQ3LjE2IDExNS42MyBMIDM0OC44NCAxMTYuMDIgTCAzNTAuNTEgMTE2LjQzIEwgMzUyLjE4IDExNi44NCBMIDM1My44NiAxMTcuMjcgTCAzNTUuNTMgMTE3LjcxIEwgMzU3LjIgMTE4LjE3IEwgMzU4Ljg4IDExOC42NCBMIDM2MC41NSAxMTkuMTIgTCAzNjIuMjIgMTE5LjYxIEwgMzYzLjkgMTIwLjEyIEwgMzY1LjU3IDEyMC42NCBMIDM2Ny4yNCAxMjEuMTcgTCAzNjguOTIgMTIxLjcxIEwgMzcwLjU5IDEyMi4yNyBMIDM3Mi4yNiAxMjIuODQgTCAzNzMuOTMgMTIzLjQyIEwgMzc1LjYxIDEyNC4wMiBMIDM3Ny4yOCAxMjQuNjMgTCAzNzguOTUgMTI1LjI1IEwgMzgwLjYzIDEyNS44OCBMIDM4Mi4zIDEyNi41MyBMIDM4My45NyAxMjcuMTkgTCAzODUuNjUgMTI3Ljg2IEwgMzg3LjMyIDEyOC41NSBMIDM4OC45OSAxMjkuMjUgTCAzOTAuNjcgMTI5Ljk2IEwgMzkyLjM0IDEzMC42OCBMIDM5NC4wMSAxMzEuNDIgTCAzOTUuNjkgMTMyLjE3IEwgMzk3LjM2IDEzMi45MyBMIDM5OS4wMyAxMzMuNyBMIDQwMC43MSAxMzQuNDkgTCA0MDIuMzggMTM1LjI5IEwgNDA0LjA1IDEzNi4xMSBMIDQwNS43MiAxMzYuOTMgTCA0MDcuNCAxMzcuNzcgTCA0MDkuMDcgMTM4LjYyIEwgNDEwLjc0IDEzOS40OSBMIDQxMi40MiAxNDAuMzcgTCA0MTQuMDkgMTQxLjI2IEwgNDE1Ljc2IDE0Mi4xNiBMIDQxNy40NCAxNDMuMDggTCA0MTkuMTEgMTQ0IEwgNDIwLjc4IDE0NC45NSBMIDQyMi40NiAxNDUuOSBMIDQyNC4xMyAxNDYuODcgTCA0MjUuOCAxNDcuODUgTCA0MjcuNDggMTQ4Ljg0IEwgNDI5LjE1IDE0OS44NSBMIDQzMC44MiAxNTAuODcgTCA0MzIuNDkgMTUxLjkgTCA0MzQuMTcgMTUyLjk0IEwgNDM1Ljg0IDE1NCBMIDQzNy41MSAxNTUuMDcgTCA0MzkuMTkgMTU2LjE1IEwgNDQwLjg2IDE1Ny4yNSBMIDQ0Mi41MyAxNTguMzUgTCA0NDQuMjEgMTU5LjQ3IEwgNDQ1Ljg4IDE2MC42MSBMIDQ0Ny41NSAxNjEuNzYgTCA0NDkuMjMgMTYyLjkxIEwgNDUwLjkgMTY0LjA5IEwgNDUyLjU3IDE2NS4yNyBMIDQ1NC4yNSAxNjYuNDcgTCA0NTUuOTIgMTY3LjY4IEwgNDU3LjU5IDE2OC45IEwgNDU5LjI2IDE3MC4xNCBMIDQ2MC45NCAxNzEuMzkgTCA0NjIuNjEgMTcyLjY1IEwgNDY0LjI4IDE3My45MyBMIDQ2NS45NiAxNzUuMjEgTCA0NjcuNjMgMTc2LjUxIEwgNDY5LjMgMTc3LjgzIEwgNDcwLjk4IDE3OS4xNSBMIDQ3Mi42NSAxODAuNDkgTCA0NzQuMzIgMTgxLjg0IEwgNDc2IDE4My4yMSBMIDQ3Ny42NyAxODQuNTkgTCA0NzkuMzQgMTg1Ljk4IEwgNDgxLjAyIDE4Ny4zOCBMIDQ4Mi42OSAxODguNzkgTCA0ODQuMzYgMTkwLjIyIEwgNDg2LjA0IDE5MS42NiBMIDQ4Ny43MSAxOTMuMTIgTCA0ODkuMzggMTk0LjU5IEwgNDkxLjA1IDE5Ni4wNyBMIDQ5Mi43MyAxOTcuNTYgTCA0OTQuNCAxOTkuMDYgTCA0OTYuMDcgMjAwLjU4IEwgNDk3Ljc1IDIwMi4xMSBMIDQ5OS40MiAyMDMuNjYgTCA1MDEuMDkgMjA1LjIxIEwgNTAyLjc3IDIwNi43OCBMIDUwNC40NCAyMDguMzYgTCA1MDYuMTEgMjA5Ljk2IEwgNTA3Ljc5IDIxMS41NyBMIDUwOS40NiAyMTMuMTkgTCA1MTEuMTMgMjE0LjgyIEwgNTEyLjgxIDIxNi40NyBMIDUxNC40OCAyMTguMTMgTCA1MTYuMTUgMjE5LjggTCA1MTcuODIgMjIxLjQ4IEwgNTE5LjUgMjIzLjE4IEwgNTIxLjE3IDIyNC44OSBMIDUyMi44NCAyMjYuNjEgTCA1MjQuNTIgMjI4LjM1IEwgNTI2LjE5IDIzMC4xIEwgNTI3Ljg2IDIzMS44NiBMIDUyOS41NCAyMzMuNjQgTCA1MzEuMjEgMjM1LjQyIEwgNTMyLjg4IDIzNy4yMiBMIDUzNC41NiAyMzkuMDQgTCA1MzYuMjMgMjQwLjg2IEwgNTM3LjkgMjQyLjcgTCA1MzkuNTggMjQ0LjU1IEwgNTQxLjI1IDI0Ni40MiBMIDU0Mi45MiAyNDguMjkgTCA1NDQuNTkgMjUwLjE4IEwgNTQ2LjI3IDI1Mi4wOCBMIDU0Ny45NCAyNTQiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNDYiIGN5PSIyNTQiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9Ijk2LjE5IiBjeT0iMjAyLjExIiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIxNDYuMzkiIGN5PSIxNjEuNzYiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjE5Ni41OCIgY3k9IjEzMi45MyIgcj0iMy41IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMjQ2Ljc4IiBjeT0iMTE1LjYzIiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIyOTYuOTciIGN5PSIxMDkuODciIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjM0Ny4xNiIgY3k9IjExNS42MyIgcj0iMy41IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMzk3LjM2IiBjeT0iMTMyLjkzIiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSI0NDcuNTUiIGN5PSIxNjEuNzYiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjQ5Ny43NSIgY3k9IjIwMi4xMSIgcj0iMy41IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iNTQ3Ljk0IiBjeT0iMjU0IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iNDYiIHkxPSIyNTQiIHgyPSIxMTMuMjIiIHkyPSIxNzYuNzkiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTE5Ljc5LDE2OS4yNSAxMDkuNDUsMTczLjUxIDExNi45OSwxODAuMDgiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSI1MiIgeT0iMTUyLjMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+duKCgCA9IDIwIG0vczwvdGV4dD48dGV4dCB4PSIxMDYiIHk9IjI0NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0Ij7OsSA9IDMwwrA8L3RleHQ+PGxpbmUgeDE9IjI5Ni45NyIgeTE9IjEwOS44NyIgeDI9IjM0Ni45NyIgeTI9IjEwOS44NyIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNTYuOTcsMTA5Ljg3IDM0Ni45NywxMDQuODcgMzQ2Ljk3LDExNC44NyIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHg9IjM2Mi45NyIgeT0iMTEzLjg3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnYgaG9yaXpvbnRhbGUgKHZ5ID0gMCk8L3RleHQ+PGxpbmUgeDE9IjQ4Ni4yIiB5MT0iNTYuMjUiIHgyPSI0ODYuMiIgeTI9Ijk3LjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDg2LjIsMTA3LjEgNDkxLjIsOTcuMSA0ODEuMiw5Ny4xIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iNDk0LjIiIHk9Ijc4Ljg1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmc8L3RleHQ+PGxpbmUgeDE9IjI5Ni45NyIgeTE9IjEwOS44NyIgeDI9IjI5Ni45NyIgeTI9IjI1NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjk2Ljk3IiB5PSIyODgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZsw6hjaGUgNSwxIG0gw6AgdCDiiYggMSwwIHM8L3RleHQ+PHJlY3QgeD0iNDUyLjU4IiB5PSIyMzIiIHdpZHRoPSI5NS4zNiIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjU0My45NCIgeT0iMjQ0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5wb3J0w6llIOKJiCAzNSBtPC90ZXh0Pjwvc3ZnPg==)
*Ballon de l'exemple lancé à 20 m/s sous 30° : la flèche, environ 5,1 m, est atteinte vers 1,0 s, et la portée vaut environ 35 m (frottements négligés).*
<!-- /schema -->

On élimine le temps : $t = \dfrac{x}{v_0\cos\alpha}$, que l'on reporte dans $y(t)$ :

$$\boxed{y(x) = -\frac{g}{2\,v_0^{2}\cos^{2}\alpha}\,x^{2} + (\tan\alpha)\,x}$$

C'est une fonction du second degré en $x$ : la trajectoire est une **parabole** (concavité vers
le bas car le coefficient de $x^2$ est négatif).

> **Exemple.** Un ballon lancé à $v_0 = 20$ m·s⁻¹ avec $\alpha = 30°$ ($g = 9{,}8$ m·s⁻²).
> Flèche (hauteur max) atteinte quand $v_y = 0$ : $t = \dfrac{v_0\sin\alpha}{g} = \dfrac{20\times
> 0{,}50}{9{,}8} \approx 1{,}0$ s. La portée (retour au sol, $y=0$) est atteinte au double de ce
> temps.

---

## 4. Mouvement d'une particule chargée dans un champ électrique uniforme

### Le condensateur plan

Deux plaques parallèles séparées d'une distance $d$, entre lesquelles on applique une tension
$U$, créent entre elles un champ électrique $\vec{E}$ **uniforme**, dirigé de la plaque **+** vers
la plaque **−**, de valeur

$$\boxed{E = \frac{U}{d}} \qquad (E \text{ en V·m}^{-1},\; U \text{ en V},\; d \text{ en m})$$

### Force et accélération

<!-- schema:condensateur-plan -->
![Électron dans un condensateur plan : le champ va de la plaque + vers la plaque −, la force est opposée au champ, et l'électron décrit une parabole vers la plaque +.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxNTAiIHk9IjUwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjEwIiByeD0iMCIgZmlsbD0iI2Y2YzdjNyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iMTUwIiB5PSIyMjAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTAiIHJ4PSIwIiBmaWxsPSIjYzdkOWY2IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI0ODQiIHk9IjYwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPisgKyArIHBsYXF1ZSBwb3NpdGl2ZTwvdGV4dD48dGV4dCB4PSI0ODQiIHk9IjIzMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj7iiJIg4oiSIOKIkiBwbGFxdWUgbsOpZ2F0aXZlPC90ZXh0PjxsaW5lIHgxPSIxODAiIHkxPSI2NiIgeDI9IjE4MCIgeTI9IjIwNiIgc3Ryb2tlPSIjYzlhMjI3IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxODAsMjE0IDE4NCwyMDYgMTc2LDIwNiIgZmlsbD0iI2M5YTIyNyIvPjxsaW5lIHgxPSIyNDAiIHkxPSI2NiIgeDI9IjI0MCIgeTI9IjIwNiIgc3Ryb2tlPSIjYzlhMjI3IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNDAsMjE0IDI0NCwyMDYgMjM2LDIwNiIgZmlsbD0iI2M5YTIyNyIvPjxsaW5lIHgxPSIzMDAiIHkxPSI2NiIgeDI9IjMwMCIgeTI9IjIwNiIgc3Ryb2tlPSIjYzlhMjI3IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMDAsMjE0IDMwNCwyMDYgMjk2LDIwNiIgZmlsbD0iI2M5YTIyNyIvPjxsaW5lIHgxPSIzNjAiIHkxPSI2NiIgeDI9IjM2MCIgeTI9IjIwNiIgc3Ryb2tlPSIjYzlhMjI3IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNjAsMjE0IDM2NCwyMDYgMzU2LDIwNiIgZmlsbD0iI2M5YTIyNyIvPjxsaW5lIHgxPSI0MjAiIHkxPSI2NiIgeDI9IjQyMCIgeTI9IjIwNiIgc3Ryb2tlPSIjYzlhMjI3IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MjAsMjE0IDQyNCwyMDYgNDE2LDIwNiIgZmlsbD0iI2M5YTIyNyIvPjx0ZXh0IHg9IjE5NCIgeT0iMTAwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjOWE3NDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5FPC90ZXh0PjxwYXRoIGQ9Ik0gNDAgMTcwIEwgMTUwIDE3MCBMIDE1MCAxNzAgTCAxNTQgMTY5Ljk4IEwgMTU4IDE2OS45MyBMIDE2MiAxNjkuODQgTCAxNjYgMTY5LjcyIEwgMTcwIDE2OS41NiBMIDE3NCAxNjkuMzcgTCAxNzggMTY5LjE0IEwgMTgyIDE2OC44NyBMIDE4NiAxNjguNTcgTCAxOTAgMTY4LjI0IEwgMTk0IDE2Ny44NyBMIDE5OCAxNjcuNDcgTCAyMDIgMTY3LjAzIEwgMjA2IDE2Ni41NSBMIDIxMCAxNjYuMDQgTCAyMTQgMTY1LjQ5IEwgMjE4IDE2NC45MSBMIDIyMiAxNjQuMyBMIDIyNiAxNjMuNjUgTCAyMzAgMTYyLjk2IEwgMjM0IDE2Mi4yNCBMIDIzOCAxNjEuNDggTCAyNDIgMTYwLjY5IEwgMjQ2IDE1OS44NiBMIDI1MCAxNTkgTCAyNTQgMTU4LjEgTCAyNTggMTU3LjE3IEwgMjYyIDE1Ni4yIEwgMjY2IDE1NS4yIEwgMjcwIDE1NC4xNiBMIDI3NCAxNTMuMDkgTCAyNzggMTUxLjk4IEwgMjgyIDE1MC44MyBMIDI4NiAxNDkuNjUgTCAyOTAgMTQ4LjQ0IEwgMjk0IDE0Ny4xOSBMIDI5OCAxNDUuOTEgTCAzMDIgMTQ0LjU5IEwgMzA2IDE0My4yMyBMIDMxMCAxNDEuODQgTCAzMTQgMTQwLjQxIEwgMzE4IDEzOC45NSBMIDMyMiAxMzcuNDYgTCAzMjYgMTM1LjkzIEwgMzMwIDEzNC4zNiBMIDMzNCAxMzIuNzYgTCAzMzggMTMxLjEyIEwgMzQyIDEyOS40NSBMIDM0NiAxMjcuNzQgTCAzNTAgMTI2IEwgMzU0IDEyNC4yMiBMIDM1OCAxMjIuNDEgTCAzNjIgMTIwLjU2IEwgMzY2IDExOC42OCBMIDM3MCAxMTYuNzYgTCAzNzQgMTE0LjgxIEwgMzc4IDExMi44MiBMIDM4MiAxMTAuNzkgTCAzODYgMTA4LjczIEwgMzkwIDEwNi42NCBMIDM5NCAxMDQuNTEgTCAzOTggMTAyLjM1IEwgNDAyIDEwMC4xNSBMIDQwNiA5Ny45MSBMIDQxMCA5NS42NCBMIDQxNCA5My4zMyBMIDQxOCA5MC45OSBMIDQyMiA4OC42MiBMIDQyNiA4Ni4yMSBMIDQzMCA4My43NiBMIDQzNCA4MS4yOCBMIDQzOCA3OC43NiBMIDQ0MiA3Ni4yMSBMIDQ0NiA3My42MiBMIDQ1MCA3MSBMIDQ1NCA2OC4zNCBMIDQ1OCA2NS42NSBMIDQ2MiA2Mi45MiBMIDQ2NiA2MC4xNiBMIDQ3MCA1Ny4zNiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjE3MCIgcj0iNyIgZmlsbD0iIzdhM2ZiMCIgc3Ryb2tlPSIjNWEyZDgyIiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjcwIiB5PSIxOTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPsOpbGVjdHJvbjwvdGV4dD48bGluZSB4MT0iODQiIHkxPSIxNzAiIHgyPSIxMjAiIHkyPSIxNzAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTMwLDE3MCAxMjAsMTY1IDEyMCwxNzUiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSIxMDgiIHk9IjE2MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+duKCgDwvdGV4dD48bGluZSB4MT0iMzAwIiB5MT0iMTQ1LjI1IiB4Mj0iMzAwIiB5Mj0iMTAzLjI1IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMDAsOTMuMjUgMjk1LDEwMy4yNSAzMDUsMTAzLjI1IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMzA4IiB5PSIxMDUuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+RiA9IHFFIChxICZsdDsgMCk8L3RleHQ+PGxpbmUgeDE9IjUxMCIgeTE9IjYwIiB4Mj0iNTEwIiB5Mj0iMjEyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUxMCwyMjAgNTE0LDIxMiA1MDYsMjEyIiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjUxMCIgeTE9IjIyMCIgeDI9IjUxMCIgeTI9IjY4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUxMCw2MCA1MDYsNjggNTE0LDY4IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNTIwIiB5PSIxNDUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+ZDwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI4MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RSA9IFUgLyBkLCBkaXJpZ8OpIGRlICsgdmVycyDiiJIgOyBsJ8OpbGVjdHJvbiBlc3QgZMOpdmnDqSB2ZXJzIGxhIHBsYXF1ZSArPC90ZXh0Pjwvc3ZnPg==)
*Électron dans un condensateur plan : le champ va de la plaque + vers la plaque −, la force est opposée au champ, et l'électron décrit une parabole vers la plaque +.*
<!-- /schema -->

Une particule de charge $q$ subit la force électrique $\vec{F} = q\vec{E}$. Aux échelles
atomiques, le **poids est négligeable** devant elle. Deuxième loi :

$$q\vec{E} = m\vec{a} \quad\Longrightarrow\quad \boxed{\vec{a} = \frac{q}{m}\,\vec{E}}$$

L'accélération est **constante** : la structure est **exactement la même** qu'une chute
parabolique, avec $\dfrac{q}{m}\vec{E}$ à la place de $\vec{g}$.

> **Attention au signe de $q$.** Pour un électron, $q = -e < 0$ : la force $\vec{F} = q\vec{E}$
> est de sens **opposé** au champ $\vec{E}$. L'électron est dévié vers la plaque **positive**.

> **Exemple.** Un électron ($q = -1{,}6\times 10^{-19}$ C, $m = 9{,}1\times 10^{-31}$ kg) entre
> horizontalement dans un champ $E = 1{,}0\times 10^{4}$ V·m⁻¹. La valeur de l'accélération est
> $a = \dfrac{|q|E}{m} = \dfrac{1{,}6\times10^{-19}\times 1{,}0\times10^{4}}{9{,}1\times10^{-31}}
> \approx 1{,}8\times 10^{15}$ m·s⁻² : gigantesque devant $g$, d'où l'on néglige le poids.

La particule décrit une **parabole** entre les plaques, exactement comme un projectile. C'est le
principe de la déviation dans un oscilloscope à tube.

---

## 5. Satellites, planètes et lois de Kepler

### Mouvement circulaire uniforme

Un satellite (ou une planète) en orbite **circulaire** de rayon $r$ n'est soumis qu'à la force
d'attraction gravitationnelle, dirigée vers l'astre central (force **centripète**). Pour un
satellite de masse $m$ autour d'un astre de masse $M$ :

$$\vec{F} = \frac{G\,M\,m}{r^{2}}\,\vec{u} \quad(\text{vers le centre})$$

En mouvement circulaire uniforme, l'accélération est **centripète** de valeur $a = \dfrac{v^2}{r}$.
La deuxième loi projetée sur l'axe centripète donne $\dfrac{GMm}{r^2} = m\dfrac{v^2}{r}$, d'où

$$\boxed{v = \sqrt{\frac{G\,M}{r}}}$$

La vitesse ne dépend **pas** de la masse du satellite, seulement du rayon de l'orbite : plus
l'orbite est basse, plus le satellite va vite.

### Les trois lois de Kepler

<!-- schema:loi-aires -->
![Loi des aires : en des durées égales, le segment Soleil-planète balaie des aires égales, donc la planète va plus vite près du Soleil.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48ZWxsaXBzZSBjeD0iMTkwIiBjeT0iMTQ1IiByeD0iMTYwIiByeT0iMTI4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48cGF0aCBkPSJNIDI4NiAxNDUgTCAyOTUuNDQgMjQxLjI3IEwgMzAwLjczIDIzNy4zOSBMIDMwNS45NyAyMzMuMTkgTCAzMTEuMTMgMjI4LjYzIEwgMzE2LjE3IDIyMy43MSBMIDMyMS4wNyAyMTguNDEgTCAzMjUuNzggMjEyLjcxIEwgMzMwLjI1IDIwNi42IEwgMzM0LjQzIDIwMC4wOCBMIDMzOC4yNCAxOTMuMTYgTCAzNDEuNjMgMTg1Ljg1IEwgMzQ0LjUzIDE3OC4xOCBMIDM0Ni44NyAxNzAuMTkgTCAzNDguNTkgMTYxLjk0IEwgMzQ5LjY1IDE1My41MiBMIDM1MCAxNDUgTCAzNDkuNjUgMTM2LjQ4IEwgMzQ4LjU5IDEyOC4wNiBMIDM0Ni44NyAxMTkuODEgTCAzNDQuNTMgMTExLjgyIEwgMzQxLjYzIDEwNC4xNSBMIDMzOC4yNCA5Ni44NCBMIDMzNC40MyA4OS45MiBMIDMzMC4yNSA4My40IEwgMzI1Ljc4IDc3LjI5IEwgMzIxLjA3IDcxLjU5IEwgMzE2LjE3IDY2LjI5IEwgMzExLjEzIDYxLjM3IEwgMzA1Ljk3IDU2LjgxIEwgMzAwLjczIDUyLjYxIEwgMjk1LjQ0IDQ4LjczIFoiIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAyODYgMTQ1IEwgMzUuMDEgMTEzLjIxIEwgMzQuMzcgMTE1LjMgTCAzMy43NiAxMTcuNCBMIDMzLjIxIDExOS41MSBMIDMyLjY5IDEyMS42MiBMIDMyLjIyIDEyMy43MyBMIDMxLjggMTI1Ljg1IEwgMzEuNDIgMTI3Ljk3IEwgMzEuMDkgMTMwLjA5IEwgMzAuOCAxMzIuMjEgTCAzMC41NiAxMzQuMzQgTCAzMC4zNiAxMzYuNDcgTCAzMC4yIDEzOC42IEwgMzAuMDkgMTQwLjczIEwgMzAuMDIgMTQyLjg3IEwgMzAgMTQ1IEwgMzAuMDIgMTQ3LjEzIEwgMzAuMDkgMTQ5LjI3IEwgMzAuMiAxNTEuNCBMIDMwLjM2IDE1My41MyBMIDMwLjU2IDE1NS42NiBMIDMwLjggMTU3Ljc5IEwgMzEuMDkgMTU5LjkxIEwgMzEuNDIgMTYyLjAzIEwgMzEuOCAxNjQuMTUgTCAzMi4yMiAxNjYuMjcgTCAzMi42OSAxNjguMzggTCAzMy4yMSAxNzAuNDkgTCAzMy43NiAxNzIuNiBMIDM0LjM3IDE3NC43IEwgMzUuMDEgMTc2Ljc5IFoiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMjg2IiBjeT0iMTQ1IiByPSIxMiIgZmlsbD0iI2ZmZDM0ZCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjI4NiIgeT0iMTc3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Tb2xlaWwgKGZveWVyKTwvdGV4dD48dGV4dCB4PSIzNjQiIHk9Ijg1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnByw6hzIGR1IFNvbGVpbCA6PC90ZXh0Pjx0ZXh0IHg9IjM2NCIgeT0iMTAxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmFyYyBsb25nLCBwbGFuw6h0ZSByYXBpZGU8L3RleHQ+PHRleHQgeD0iMzYiIHk9IjI3NyIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PC90ZXh0Pjx0ZXh0IHg9IjM2NCIgeT0iMTk1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmxvaW4gZHUgU29sZWlsIDo8L3RleHQ+PHRleHQgeD0iMzY0IiB5PSIyMTEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCI+YXJjIGNvdXJ0LCBwbGFuw6h0ZSBsZW50ZTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI4OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bGVzIGRldXggc2VjdGV1cnMsIHBhcmNvdXJ1cyBlbiBkZXMgZHVyw6llcyDDqWdhbGVzLCBvbnQgbGEgbcOqbWUgYWlyZSAob3JiaXRlIHRyw6hzIGFwbGF0aWUgcG91ciBsYSBsaXNpYmlsaXTDqSk8L3RleHQ+PC9zdmc+)
*Loi des aires : en des durées égales, le segment Soleil-planète balaie des aires égales, donc la planète va plus vite près du Soleil.*
<!-- /schema -->

1. **Loi des orbites** : chaque planète décrit une **ellipse** dont le Soleil occupe un foyer.
2. **Loi des aires** : le segment astre–planète balaie des aires égales en des durées égales
   (la planète va plus vite au périhélie).
3. **Loi des périodes** : le rapport du carré de la période $T$ au cube du demi-grand axe $a$ est
   le **même pour tous** les astres orbitant autour du même corps central :

$$\boxed{\frac{T^{2}}{a^{3}} = \frac{4\pi^{2}}{G\,M} = \text{constante}}$$

### Démonstration de la 3e loi (cas circulaire, exigible)

En orbite circulaire, $a = r$ et $v = \dfrac{2\pi r}{T}$ (un tour de circonférence en une
période). On reporte dans $v = \sqrt{GM/r}$ :

$$\frac{2\pi r}{T} = \sqrt{\frac{GM}{r}} \;\Longrightarrow\; \frac{4\pi^{2}r^{2}}{T^{2}} =
\frac{GM}{r} \;\Longrightarrow\; \frac{T^{2}}{r^{3}} = \frac{4\pi^{2}}{GM}$$

Le membre de droite ne dépend que de l'astre central $M$ : c'est bien une constante.

> **Exemple.** La constante $T^2/a^3$ est la même pour toutes les planètes du système solaire.
> Connaissant $T$ et $a$ de la Terre, on en déduit ceux de n'importe quelle autre planète.

### Le satellite géostationnaire

Un satellite **géostationnaire** paraît **immobile** au-dessus d'un point de l'équateur. Trois
conditions :

- période $T = 23$ h $56$ min $\approx 86\,164$ s (période de rotation de la Terre, **jour
  sidéral**, pas 24 h) ;
- orbite dans le **plan équatorial** ;
- sens de rotation **identique** à celui de la Terre.

On en tire son altitude par la 3e loi : $r = \left(\dfrac{GM\,T^2}{4\pi^2}\right)^{1/3}
\approx 4{,}2\times 10^{4}$ km depuis le centre, soit une **altitude** $h = r - R_T \approx
3{,}6\times 10^{4}$ km (environ $36\,000$ km).

---

## 6. Tableau récapitulatif

| Notion | Relation clé | Unités |
|---|---|---|
| Deuxième loi de Newton | $\sum \vec{F}_{\text{ext}} = m\vec{a}$ | N, kg, m·s⁻² |
| Équilibre | $\sum \vec{F}_{\text{ext}} = \vec{0}$ | — |
| Chute libre | $\vec{a} = \vec{g}$ | $g \approx 9{,}81$ m·s⁻² |
| Trajectoire (projectile) | $y = -\dfrac{g}{2v_0^2\cos^2\alpha}x^2 + x\tan\alpha$ | parabole |
| Champ du condensateur | $E = \dfrac{U}{d}$ | V·m⁻¹ |
| Particule chargée | $\vec{a} = \dfrac{q}{m}\vec{E}$ | C, kg |
| Vitesse orbitale | $v = \sqrt{\dfrac{GM}{r}}$ | m·s⁻¹ |
| 3e loi de Kepler | $\dfrac{T^2}{a^3} = \dfrac{4\pi^2}{GM}$ | s², m³ |
| Constante de gravitation | $G = 6{,}67\times 10^{-11}$ | N·m²·kg⁻² |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre masse et poids.** La masse (kg) est intrinsèque ; le poids $P = mg$ (N) est une
   force. Dans $\sum\vec{F} = m\vec{a}$, le $m$ est la masse, pas le poids.
2. **Faire dépendre l'accélération de chute de la masse.** En chute libre $\vec{a} = \vec{g}$ :
   la masse se simplifie. Tous les corps tombent de la même façon dans le vide.
3. **Oublier le signe de la charge.** Pour un électron $q = -e < 0$ : $\vec{F} = q\vec{E}$ est
   **opposée** à $\vec{E}$. Ne pas recopier mécaniquement le sens du champ.
4. **Négliger la mauvaise force.** Pour une particule chargée, on néglige le **poids** (pas la
   force électrique). Pour un projectile macroscopique, l'inverse n'a aucun sens.
5. **Utiliser $T = 24$ h pour le géostationnaire.** La bonne période est le **jour sidéral**
   ($\approx 23$ h $56$ min), pas le jour solaire de 24 h.
6. **Mélanger rayon d'orbite et altitude.** Dans les formules, $r$ est mesuré depuis le
   **centre** de l'astre : $r = R_T + h$. L'altitude $h$ seule donne un résultat faux.
7. **Oublier de convertir.** $U$ en volts, $d$ en mètres (pas en cm) pour $E = U/d$ ; périodes
   en secondes, distances en mètres dans Kepler avant tout calcul.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019 (education.gouv.fr, arrêté MENE1921249A).
Extrait via le fichier docs/programme-terminale-physique-chimie-2019.txt, section
« 2.2 Deuxième loi de Newton et mouvements dans un champ » (lignes 113-122) :
- Notions : deuxième loi de Newton, centre de masse, référentiel galiléen, équilibre ;
  mouvement dans un champ de pesanteur uniforme ; champ électrique d'un condensateur plan
  et mouvement d'une particule chargée ; mouvement des satellites et planètes, orbite,
  lois de Kepler, satellite géostationnaire.
- Capacités exigibles : utiliser la 2e loi pour déduire a (et réciproquement) ; montrer que
  le mouvement dans un champ uniforme est plan, établir/exploiter les équations horaires,
  établir l'équation de la trajectoire ; établir et exploiter la 3e loi de Kepler dans le
  cas du mouvement circulaire.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La démonstration de la 3e loi de Kepler n'est exigible QUE dans le cas circulaire : la
  fiche ne démontre pas le cas elliptique (les 1re et 2e lois sont énoncées, pas démontrées).
  À confirmer conforme.
- Le programme parle de « champ de pesanteur uniforme » : j'ai supposé les frottements
  négligés (chute libre). C'est la convention du programme mais à valider.
- Valeurs numériques utilisées : g = 9,81 m·s⁻², G = 6,67e-11, masse/charge de l'électron,
  altitude géostationnaire ≈ 36 000 km, jour sidéral ≈ 86 164 s. À revérifier au CRC/formulaire
  officiel avant publication.
- Vérifier que la notation « a » pour le demi-grand axe (Kepler) et « a » pour l'accélération
  ne prête pas à confusion pour l'élève : dans la fiche, a = r en circulaire, précisé.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
