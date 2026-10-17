---
id: tale-spe-math-vecteurs-droites-plans-espace
titre: "Vecteurs, droites et plans de l'espace"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 13
prerequis:
  - Vecteurs du plan, colinéarité et combinaisons linéaires (Seconde, puis Première spé)
  - Repérage dans le plan, coordonnées d'un vecteur (Seconde)
  - Translations (Seconde)
statut: brouillon
relu_par: null
---

# Vecteurs, droites et plans de l'espace

> Dans le plan, deux directions suffisent à tout décrire. Dans l'espace, il en
> faut **trois**. Tout ce chapitre tient dans cette phrase : le vecteur, la droite
> et le plan sont les outils qui te permettent de te repérer et de raisonner en
> trois dimensions, **sans jamais tracer de figure exacte**. Le calcul vectoriel
> remplace le dessin.

Support de tout le chapitre : le **cube $ABCDEFGH$**. Face du bas $ABCD$, face du
haut $EFGH$, avec $E$ au-dessus de $A$, $F$ au-dessus de $B$, $G$ au-dessus de $C$,
$H$ au-dessus de $D$. Garde-le en tête : chaque notion y sera illustrée.

---

## 1. Vecteurs de l'espace et translations

<!-- schema:cube-vecteurs-egaux -->
![Sur le cube ABCDEFGH, les quatre arêtes parallèles à AB, parcourues dans le même sens, portent le même vecteur : AB = DC = EF = HG (en vecteurs).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMjcwIiB5Mj0iMjkwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjI5MCIgeDI9IjM1OC4zMyIgeTI9IjIzOSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTguMzMiIHkxPSIyMzkiIHgyPSIxODguMzMiIHkyPSIyMzkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4OC4zMyIgeTE9IjIzOSIgeDI9IjEwMCIgeTI9IjI5MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMTIwIiB4Mj0iMjcwIiB5Mj0iMTIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjEyMCIgeDI9IjM1OC4zMyIgeTI9IjY5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1OC4zMyIgeTE9IjY5IiB4Mj0iMTg4LjMzIiB5Mj0iNjkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTg4LjMzIiB5MT0iNjkiIHgyPSIxMDAiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMTAwIiB5Mj0iMTIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjI5MCIgeDI9IjI3MCIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTguMzMiIHkxPSIyMzkiIHgyPSIzNTguMzMiIHkyPSI2OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxODguMzMiIHkxPSIyMzkiIHgyPSIxODguMzMiIHkyPSI2OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMjU4IiB5Mj0iMjkwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzAsMjkwIDI1OCwyODQgMjU4LDI5NiIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIxODguMzMiIHkxPSIyMzkiIHgyPSIzNDYuMzMiIHkyPSIyMzkiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM1OC4zMywyMzkgMzQ2LjMzLDIzMyAzNDYuMzMsMjQ1IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjEwMCIgeTE9IjEyMCIgeDI9IjI1OCIgeTI9IjEyMCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjcwLDEyMCAyNTgsMTE0IDI1OCwxMjYiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTg4LjMzIiB5MT0iNjkiIHgyPSIzNDYuMzMiIHkyPSI2OSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzU4LjMzLDY5IDM0Ni4zMyw2MyAzNDYuMzMsNzUiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSI4NiIgeT0iMzA4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0Pjx0ZXh0IHg9IjI4NCIgeT0iMzA4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHg9IjM3NC4zMyIgeT0iMjQ3IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjE3MC4zMyIgeT0iMjM3IiBmb250LXNpemU9IjE2IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9Ijg0IiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkU8L3RleHQ+PHRleHQgeD0iMjg2IiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkY8L3RleHQ+PHRleHQgeD0iMzcwLjMzIiB5PSI2MSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RzwvdGV4dD48dGV4dCB4PSIxNzYuMzMiIHk9IjYxIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5IPC90ZXh0Pjx0ZXh0IHg9IjE2IiB5PSIzMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5BQiA9IERDID0gRUYgPSBIRzwvdGV4dD48dGV4dCB4PSIxNiIgeT0iNTIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+KGVuIHZlY3RldXJzKTwvdGV4dD48L3N2Zz4=)
*Sur le cube ABCDEFGH, les quatre arêtes parallèles à AB, parcourues dans le même sens, portent le même vecteur : AB = DC = EF = HG (en vecteurs).*
<!-- /schema -->

Un **vecteur** de l'espace se définit exactement comme dans le plan : par une
**direction**, un **sens** et une **longueur** (sa norme). Le vecteur
$\overrightarrow{AB}$ est la donnée du déplacement — la **translation** — qui
amène $A$ sur $B$.

- **Égalité** : $\overrightarrow{AB} = \overrightarrow{CD}$ signifie que $ABDC$ est
  un parallélogramme (éventuellement aplati). Le vecteur ne dépend pas de l'endroit
  où on le dessine.
- **Relation de Chasles** : $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
  Elle reste vraie pour tous points $A$, $B$, $C$ de l'espace, exactement
  comme dans le plan.

> **Sur le cube.** $\overrightarrow{AB} = \overrightarrow{DC} = \overrightarrow{EF}
> = \overrightarrow{HG}$ : ces quatre arêtes portent le **même** vecteur. De même
> $\overrightarrow{AE} = \overrightarrow{BF} = \overrightarrow{CG} = \overrightarrow{DH}$
> (les quatre montants verticaux).

---

## 2. Combinaisons linéaires

Soit des vecteurs $\overrightarrow{u_1}, \dots, \overrightarrow{u_n}$ et des réels
$a_1, \dots, a_n$. Le vecteur

$$\overrightarrow{w} = a_1\overrightarrow{u_1} + a_2\overrightarrow{u_2} + \dots + a_n\overrightarrow{u_n}$$

est une **combinaison linéaire** des $\overrightarrow{u_i}$. Les $a_i$ sont les
**coefficients**.

> **Sur le cube.** La grande diagonale s'écrit comme combinaison des trois arêtes
> issues de $A$ :
> $$\boxed{\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}}$$
> En effet $\overrightarrow{AG} = \overrightarrow{AC} + \overrightarrow{CG}$ et
> $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$ (diagonale de la
> face du bas), avec $\overrightarrow{CG} = \overrightarrow{AE}$. Le centre $I$ de la
> face du haut vérifie de même $\overrightarrow{AI} = \overrightarrow{AE} + \tfrac{1}{2}\overrightarrow{AB} + \tfrac{1}{2}\overrightarrow{AD}$.

---

## 3. Colinéarité

Deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ sont **colinéaires**
lorsqu'il existe un réel $k$ tel que $\overrightarrow{v} = k\,\overrightarrow{u}$
(avec $\overrightarrow{u} \neq \overrightarrow{0}$). Le vecteur nul est colinéaire à
tout vecteur.

**Interprétation :** deux vecteurs colinéaires ont la **même direction**. Ils
« portent » la même droite.

> **Sur le cube.** $\overrightarrow{AB}$ et $\overrightarrow{HG}$ sont colinéaires
> (ils sont même égaux : $k = 1$). $\overrightarrow{AG}$ et $\overrightarrow{AB}$ ne
> le sont **pas** : impossible de trouver $k$ tel que la diagonale soit un multiple
> d'une arête.

> **À retenir.** Colinéarité $\Rightarrow$ **alignement** de points :
> $A$, $B$, $C$ sont alignés $\iff \overrightarrow{AB}$ et $\overrightarrow{AC}$ sont
> colinéaires.

---

## 4. Droites de l'espace

Une droite est entièrement déterminée par **un point et une direction**.

**Vecteur directeur.** Un vecteur $\overrightarrow{u} \neq \overrightarrow{0}$ est un
vecteur directeur de la droite $(d)$ s'il a la direction de $(d)$. Tous les vecteurs
directeurs d'une même droite sont **colinéaires** entre eux.

**Caractérisation point + directeur.** Soit $A$ un point et $\overrightarrow{u}$ un
vecteur directeur. Un point $M$ appartient à la droite passant par $A$ dirigée par
$\overrightarrow{u}$ si et seulement si :

$$\boxed{\overrightarrow{AM} = t\,\overrightarrow{u}, \quad t \in \mathbb{R}}$$

Le réel $t$ « pilote » la position de $M$ sur la droite : $t=0$ donne $A$, $t=1$
donne le point $A + \overrightarrow{u}$, $t<0$ part de l'autre côté.

> **Sur le cube.** La droite $(EG)$ a pour vecteur directeur
> $\overrightarrow{EG} = \overrightarrow{EF} + \overrightarrow{FG} = \overrightarrow{AB} + \overrightarrow{AD}$.
> Un point $M$ est sur $(EG)$ ssi $\overrightarrow{EM} = t(\overrightarrow{AB} + \overrightarrow{AD})$.

---

## 5. Plans de l'espace

Un plan est déterminé par **un point et deux directions non colinéaires**.

**Direction d'un plan.** C'est l'ensemble des vecteurs « parallèles » au plan.
Elle est donnée par un **couple de vecteurs non colinéaires**
$(\overrightarrow{u}, \overrightarrow{v})$.

**Caractérisation point + deux vecteurs non colinéaires.** Soit $A$ un point et
$(\overrightarrow{u}, \overrightarrow{v})$ deux vecteurs non colinéaires. Un point
$M$ appartient au plan passant par $A$ dirigé par $(\overrightarrow{u}, \overrightarrow{v})$
si et seulement si :

$$\boxed{\overrightarrow{AM} = s\,\overrightarrow{u} + t\,\overrightarrow{v}, \quad (s,t) \in \mathbb{R}^2}$$

> **Sur le cube.** Le plan $(ABC)$ est celui de la face $ABCD$. Il passe par $A$ et
> est dirigé par $(\overrightarrow{AB}, \overrightarrow{AD})$, non colinéaires. Le
> point $C$ y est car $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$
> (donc $s=1$, $t=1$).

**Coplanarité de trois vecteurs.** $\overrightarrow{u}, \overrightarrow{v}, \overrightarrow{w}$
sont **coplanaires** si l'un est combinaison linéaire des deux autres (au moins deux
d'entre eux étant non colinéaires). Quatre points $A,B,C,D$ sont coplanaires ssi
$\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD}$ le sont.

> **Sur le cube.** $A$, $B$, $G$, $H$ sont coplanaires : $\overrightarrow{AG} =
> \overrightarrow{AB} + \overrightarrow{AH}$, donc $G$ est dans le plan $(A; \overrightarrow{AB}, \overrightarrow{AH})$.
> C'est un des plans « diagonaux » du cube.

---

## 6. Bases et repères de l'espace

<!-- schema:cube-repere -->
![Dans le repère (A ; AB, AD, AE), en rouge, vert et bleu, le sommet G a pour coordonnées (1 ; 1 ; 1) : le vecteur AG est la somme AB + AD + AE.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMjcwIiB5Mj0iMjkwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjI5MCIgeDI9IjM1OC4zMyIgeTI9IjIzOSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTguMzMiIHkxPSIyMzkiIHgyPSIxODguMzMiIHkyPSIyMzkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4OC4zMyIgeTE9IjIzOSIgeDI9IjEwMCIgeTI9IjI5MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMTIwIiB4Mj0iMjcwIiB5Mj0iMTIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjEyMCIgeDI9IjM1OC4zMyIgeTI9IjY5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1OC4zMyIgeTE9IjY5IiB4Mj0iMTg4LjMzIiB5Mj0iNjkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTg4LjMzIiB5MT0iNjkiIHgyPSIxMDAiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMTAwIiB5Mj0iMTIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjI5MCIgeDI9IjI3MCIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTguMzMiIHkxPSIyMzkiIHgyPSIzNTguMzMiIHkyPSI2OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxODguMzMiIHkxPSIyMzkiIHgyPSIxODguMzMiIHkyPSI2OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMjU4IiB5Mj0iMjkwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNzAsMjkwIDI1OCwyODQgMjU4LDI5NiIgZmlsbD0iI2MwMmEyYSIvPjxsaW5lIHgxPSIxMDAiIHkxPSIyOTAiIHgyPSIxNzcuOTQiIHkyPSIyNDUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE4OC4zMywyMzkgMTc0Ljk0LDIzOS44IDE4MC45NCwyNTAuMiIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSIxMDAiIHkxPSIyOTAiIHgyPSIxMDAiIHkyPSIxMzIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEwMCwxMjAgOTQsMTMyIDEwNiwxMzIiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMzQ5LjIyIiB5Mj0iNzYuOCIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzU4LjMzLDY5IDM0NS4zMiw3Mi4yNCAzNTMuMTIsODEuMzYiIGZpbGw9IiM3YTNmYjAiLz48dGV4dCB4PSI4NiIgeT0iMzA4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0Pjx0ZXh0IHg9IjI4NCIgeT0iMzA4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHg9IjM3NC4zMyIgeT0iMjQ3IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjE3MC4zMyIgeT0iMjM3IiBmb250LXNpemU9IjE2IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9Ijg0IiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkU8L3RleHQ+PHRleHQgeD0iMjg2IiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkY8L3RleHQ+PHRleHQgeD0iMzcwLjMzIiB5PSI2MSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RzwvdGV4dD48dGV4dCB4PSIxNzYuMzMiIHk9IjYxIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5IPC90ZXh0Pjx0ZXh0IHg9IjUwMCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPkcoMSA7IDEgOyAxKTwvdGV4dD48dGV4dCB4PSI1MDAiIHk9Ijg0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5BRyA9IEFCICsgQUQgKyBBRTwvdGV4dD48L3N2Zz4=)
*Dans le repère (A ; AB, AD, AE), en rouge, vert et bleu, le sommet G a pour coordonnées (1 ; 1 ; 1) : le vecteur AG est la somme AB + AD + AE.*
<!-- /schema -->

**Base.** Trois vecteurs $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$
forment une **base de l'espace** lorsqu'ils sont **non coplanaires**. (Dans le plan,
il fallait deux vecteurs non colinéaires ; dans l'espace, trois vecteurs non
coplanaires — une direction de plus.)

**Repère.** Un point $O$ (l'origine) et une base $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$
forment un **repère** $(O ; \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$.

**Décomposition d'un vecteur sur une base.** Si $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$
est une base, alors **tout** vecteur $\overrightarrow{u}$ s'écrit de **manière unique**

$$\overrightarrow{u} = x\,\overrightarrow{i} + y\,\overrightarrow{j} + z\,\overrightarrow{k},$$

et $(x, y, z)$ sont les **coordonnées** de $\overrightarrow{u}$ dans la base. C'est
l'unicité qui rend le calcul possible : deux vecteurs sont égaux ssi ils ont les
mêmes coordonnées.

> **Sur le cube.** Prends le repère $(A ; \overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})$.
> Alors :
> - $A(0,0,0)$, $B(1,0,0)$, $C(1,1,0)$, $D(0,1,0)$,
> - $E(0,0,1)$, $F(1,0,1)$, $G(1,1,1)$, $H(0,1,1)$.
>
> On lit la décomposition directement : $\overrightarrow{AG}$ a pour coordonnées
> $(1,1,1)$, ce qui redonne $\overrightarrow{AG} = \overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}$.

---

## 7. Méthodes

**A. Exprimer un vecteur comme combinaison linéaire (sur une figure).** Décompose le
trajet avec Chasles jusqu'à n'avoir que les vecteurs de la base. Ex. :
$\overrightarrow{DF} = -\overrightarrow{AD} + \overrightarrow{AB} + \overrightarrow{AE}$, soit $(1,-1,1)$.

**B. Tester la colinéarité par coordonnées.** Cherche un $k$ tel que chaque coordonnée
de $\overrightarrow{v}$ soit $k$ fois celle de $\overrightarrow{u}$. Un même $k$ partout :
colinéaires ; sinon : non.

**C. Décider si trois vecteurs forment une base.** Base $\iff$ non coplanaires $\iff$
**aucun n'est combinaison linéaire des deux autres** (ex. : trois arêtes issues d'un même sommet).

**D. Prouver un alignement / une coplanarité.** Alignement de $A,B,C$ : $\overrightarrow{AC} = k\,\overrightarrow{AB}$.
Coplanarité de $A,B,C,D$ : $\overrightarrow{AD} = s\,\overrightarrow{AB} + t\,\overrightarrow{AC}$.

---

## 8. Positions relatives

<!-- schema:cube-positions -->
![Sur le cube : les droites (AB) et (EF) sont parallèles ; les droites (AB) et (CG) ne sont ni parallèles ni sécantes, elles sont non coplanaires, une situation propre à l’espace.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMjcwIiB5Mj0iMjkwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjI5MCIgeDI9IjM1OC4zMyIgeTI9IjIzOSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTguMzMiIHkxPSIyMzkiIHgyPSIxODguMzMiIHkyPSIyMzkiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4OC4zMyIgeTE9IjIzOSIgeDI9IjEwMCIgeTI9IjI5MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMTIwIiB4Mj0iMjcwIiB5Mj0iMTIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjEyMCIgeDI9IjM1OC4zMyIgeTI9IjY5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1OC4zMyIgeTE9IjY5IiB4Mj0iMTg4LjMzIiB5Mj0iNjkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTg4LjMzIiB5MT0iNjkiIHgyPSIxMDAiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMjkwIiB4Mj0iMTAwIiB5Mj0iMTIwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MCIgeTE9IjI5MCIgeDI9IjI3MCIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTguMzMiIHkxPSIyMzkiIHgyPSIzNTguMzMiIHkyPSI2OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxODguMzMiIHkxPSIyMzkiIHgyPSIxODguMzMiIHkyPSI2OSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTcuNSIgeTE9IjI5MCIgeDI9IjMxMi41IiB5Mj0iMjkwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iMTIwIiB4Mj0iMjcwIiB5Mj0iMTIwIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzU4LjMzIiB5MT0iMjgxLjUiIHgyPSIzNTguMzMiIHkyPSIyNi41IiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI4NiIgeT0iMzA4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0Pjx0ZXh0IHg9IjI4NCIgeT0iMzA4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHg9IjM3NC4zMyIgeT0iMjQ3IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjE3MC4zMyIgeT0iMjM3IiBmb250LXNpemU9IjE2IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9Ijg0IiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkU8L3RleHQ+PHRleHQgeD0iMjg2IiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkY8L3RleHQ+PHRleHQgeD0iMzcwLjMzIiB5PSI2MSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RzwvdGV4dD48dGV4dCB4PSIxNzYuMzMiIHk9IjYxIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5IPC90ZXh0Pjx0ZXh0IHg9IjU1MCIgeT0iMTQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4oQUIpIGV0IChFRikgOiBwYXJhbGzDqGxlczwvdGV4dD48dGV4dCB4PSI1NTAiIHk9IjE2NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+KEFCKSBldCAoQ0cpIDogbm9uIGNvcGxhbmFpcmVzPC90ZXh0Pjwvc3ZnPg==)
*Sur le cube : les droites (AB) et (EF) sont parallèles ; les droites (AB) et (CG) ne sont ni parallèles ni sécantes, elles sont non coplanaires, une situation propre à l’espace.*
<!-- /schema -->

On raisonne sur les **directions** (vecteurs directeurs / directrices) puis sur
l'existence d'un **point commun**.

**Deux droites.** Elles peuvent être :
- **coplanaires** : soit **parallèles** (directeurs colinéaires) — confondues ou
  strictement parallèles —, soit **sécantes** (un point commun) ;
- **non coplanaires** : ni parallèles, ni sécantes (elles ne se rencontrent pas).
  C'est propre à l'espace.

> **Sur le cube.** $(AB)$ et $(EF)$ : parallèles. $(AB)$ et $(BC)$ : sécantes en $B$.
> $(AB)$ et $(CG)$ : **non coplanaires** (directions différentes et aucun point commun).

**Une droite et un plan.**
- droite **parallèle** au plan : un directeur de la droite appartient à la direction
  du plan, et la droite n'est pas incluse ;
- droite **incluse** dans le plan ;
- droite **sécante** : un seul point commun (elle « perce » le plan).

> **Sur le cube.** $(EF)$ et le plan $(ABCD)$ : parallèles. $(AB)$ et $(ABCD)$ :
> incluse. $(AE)$ et $(ABCD)$ : sécante en $A$.

**Deux plans.**
- **parallèles** (même direction) : confondus ou strictement parallèles ;
- **sécants** : leur intersection est une **droite**.

> **Sur le cube.** $(ABCD)$ et $(EFGH)$ : strictement parallèles. $(ABCD)$ et
> $(ABFE)$ : sécants, d'intersection la droite $(AB)$.

---

## 9. Pièges et cas particuliers

- **Colinéaire $\neq$ égal.** $\overrightarrow{AB}$ et $\overrightarrow{GH}$ sont
  colinéaires mais **opposés** ($\overrightarrow{GH} = -\overrightarrow{AB}$) : même
  direction, sens contraire.
- **Parallèle $\neq$ sécant… mais pas toujours l'un ou l'autre.** Dans l'espace, deux
  droites peuvent n'être **ni** parallèles **ni** sécantes (non coplanaires). Ce
  troisième cas n'existe pas dans le plan.
- **Non colinéaires est indispensable** pour caractériser un plan : si $\overrightarrow{u}$
  et $\overrightarrow{v}$ sont colinéaires, ils ne dirigent qu'une **droite**, pas un plan.
- **Trois vecteurs coplanaires ne forment pas une base** : il manque une direction,
  la décomposition n'est plus unique (ou plus possible).

---

## 10. Tableau récapitulatif

| Objet | Déterminé par | Condition | Écriture |
|---|---|---|---|
| Vecteurs colinéaires | — | même direction | $\overrightarrow{v} = k\,\overrightarrow{u}$ |
| Droite $(A, \overrightarrow{u})$ | 1 point + 1 directeur | $\overrightarrow{u} \neq \overrightarrow{0}$ | $\overrightarrow{AM} = t\,\overrightarrow{u}$ |
| Plan $(A, \overrightarrow{u}, \overrightarrow{v})$ | 1 point + 2 vecteurs | $\overrightarrow{u}, \overrightarrow{v}$ **non colinéaires** | $\overrightarrow{AM} = s\,\overrightarrow{u} + t\,\overrightarrow{v}$ |
| Base de l'espace | 3 vecteurs | **non coplanaires** | $\overrightarrow{u} = x\overrightarrow{i}+y\overrightarrow{j}+z\overrightarrow{k}$ (unique) |
| Alignement de $A,B,C$ | — | $\overrightarrow{AB},\overrightarrow{AC}$ colinéaires | $\overrightarrow{AC}=k\,\overrightarrow{AB}$ |
| Coplanarité de $A,B,C,D$ | — | $\overrightarrow{AD}$ comb. lin. de $\overrightarrow{AB},\overrightarrow{AC}$ | $\overrightarrow{AD}=s\,\overrightarrow{AB}+t\,\overrightarrow{AC}$ |

---

## 11. Les erreurs qui coûtent des points

1. **Croire que deux droites de l'espace sont forcément parallèles ou sécantes.**
   Le cas **non coplanaire** existe : $(AB)$ et $(CG)$ sur le cube.
2. **Confondre colinéaires et égaux.** Colinéaires = un est multiple de l'autre ; le
   coefficient $k$ peut être négatif ou différent de $1$.
3. **Diriger un plan par deux vecteurs colinéaires.** Ça ne définit qu'une droite. Il
   faut **deux directions distinctes**.
4. **Prendre trois vecteurs coplanaires pour une base.** Il faut trois vecteurs
   **non coplanaires** : trois arêtes concourantes du cube, pas trois vecteurs d'une
   même face.
5. **Oublier la relation de Chasles dans l'espace.** Elle reste valable pour des
   points quelconques de l'espace — c'est l'outil n°1 pour décomposer un vecteur.
6. **Écrire des coordonnées sans préciser la base ou le repère.** $(1,1,1)$ ne veut
   rien dire sans le repère $(A ; \overrightarrow{AB}, \overrightarrow{AD}, \overrightarrow{AE})$.
