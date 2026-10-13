---
id: 4e-math-racine-carree
titre: "Racine carrée"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 10
prerequis:
  - Carré d'un nombre et carrés parfaits de 0 à 12 (5e-4e)
  - Aire d'un carré (6e)
  - Comparaison de nombres décimaux (6e)
statut: brouillon
relu_par: null
---

# Racine carrée

> Tu sais élever un nombre au carré : $7$ donne $49$. La racine carrée fait le
> chemin **inverse** : partant de $49$, elle te rend $7$. C'est l'outil qui répond à
> la question « quel carré a cette aire-là ? ».

---

## 1. Définition

La **racine carrée** d'un nombre positif $a$ est le nombre **positif** dont le carré
vaut $a$. On la note $\sqrt{a}$.

$$\boxed{\sqrt{a} \text{ est le nombre positif tel que } (\sqrt{a})^2 = a}$$

Le symbole $\sqrt{\phantom{a}}$ est le **radical**, le nombre dessous le **radicande**.

> **Exemple.** $\sqrt{36} = 6$, parce que $6$ est positif **et** que $6^2 = 36$.

Les deux conditions comptent : $(-6)^2$ fait aussi $36$, mais $-6$ est négatif, ce n'est
donc **pas** $\sqrt{36}$.

> ⚠️ **$\sqrt{36}$ vaut $6$, et rien d'autre.** Une racine carrée ne donne jamais deux
> réponses. Elle désigne **un seul** nombre, toujours positif.

### Condition d'existence

$$\boxed{\sqrt{a} \text{ n'existe que si } a \geqslant 0}$$

**Pourquoi ?** Un carré n'est jamais négatif : $3^2 = 9$ et $(-3)^2 = 9$. Aucun nombre,
multiplié par lui-même, ne donne $-9$. Donc $\sqrt{-9}$ n'a aucun sens.

> **Le réflexe.** Avant d'écrire $\sqrt{\ }$, regarde ce qu'il y a dessous. Si c'est
> négatif, tu t'arrêtes : l'écriture est fausse.

---

## 2. Les carrés parfaits de $0$ à $12$

Un **carré parfait** est le carré d'un nombre entier. Ces treize valeurs doivent te
venir sans réfléchir, dans les **deux sens**.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 |

Lue de gauche à droite, elle donne les carrés. Lue de droite à gauche, les racines.

> **Exemple.** $\sqrt{121} = 11$ et $\sqrt{144} = 12$.

---

## 3. Trois propriétés à connaitre

### Propriété 1 — la racine annule le carré

Pour tout nombre positif $a$ :

$$\boxed{(\sqrt{a})^2 = a}$$

C'est la définition elle-même, relue à l'envers.

> **Exemple.** $(\sqrt{13})^2 = 13$. Inutile de chercher une valeur pour $\sqrt{13}$ :
> le carré la fait disparaitre.

### Propriété 2 — le carré annule la racine

Pour tout nombre **positif** $a$ :

$$\boxed{\sqrt{a^2} = a}$$

> **Exemple.** $\sqrt{7^2} = \sqrt{49} = 7$.

> ⚠️ Cette propriété s'écrit **pour $a$ positif**. En 4e, tu ne rencontreras
> $\sqrt{a^2}$ qu'avec des nombres positifs — n'essaie pas de l'appliquer à un nombre
> négatif, ce cas s'étudie plus tard.

### Propriété 3 — la racine respecte l'ordre

Si $a$ et $b$ sont positifs et que $a < b$, alors $\sqrt{a} < \sqrt{b}$. Autrement dit :
**plus le nombre sous le radical est grand, plus sa racine est grande.** C'est cette
propriété qui rend l'encadrement possible.

> **Exemple.** $25 < 30 < 36$, donc $\sqrt{25} < \sqrt{30} < \sqrt{36}$,
> c'est-à-dire $5 < \sqrt{30} < 6$.

---

## 4. Méthode — encadrer $\sqrt{n}$ par deux entiers consécutifs

<!-- schema:encadrement -->
![50 est entre les carrés parfaits 49 et 64 ; en prenant les racines, √50 est entre 7 et 8.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDIiIHkxPSI2MCIgeDI9IjU5MiIgeTI9IjYwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDIsNjAgNTkyLDU1IDU5Miw2NSIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI2MCIgeTE9IjU1IiB4Mj0iNjAiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijg0Ljc2IiB5MT0iNTUiIHgyPSI4NC43NiIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTA5LjUyIiB5MT0iNTUiIHgyPSIxMDkuNTIiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzNC4yOSIgeTE9IjU1IiB4Mj0iMTM0LjI5IiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNTkuMDUiIHkxPSI1NSIgeDI9IjE1OS4wNSIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTgzLjgxIiB5MT0iNTUiIHgyPSIxODMuODEiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwOC41NyIgeTE9IjU1IiB4Mj0iMjA4LjU3IiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMzMuMzMiIHkxPSI1NSIgeDI9IjIzMy4zMyIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjU4LjEiIHkxPSI1NSIgeDI9IjI1OC4xIiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODIuODYiIHkxPSI1NSIgeDI9IjI4Mi44NiIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzA3LjYyIiB5MT0iNTUiIHgyPSIzMDcuNjIiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMzMi4zOCIgeTE9IjU1IiB4Mj0iMzMyLjM4IiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTcuMTQiIHkxPSI1NSIgeDI9IjM1Ny4xNCIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzgxLjkiIHkxPSI1NSIgeDI9IjM4MS45IiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MDYuNjciIHkxPSI1NSIgeDI9IjQwNi42NyIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDMxLjQzIiB5MT0iNTUiIHgyPSI0MzEuNDMiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ1Ni4xOSIgeTE9IjU1IiB4Mj0iNDU2LjE5IiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0ODAuOTUiIHkxPSI1NSIgeDI9IjQ4MC45NSIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTA1LjcxIiB5MT0iNTUiIHgyPSI1MDUuNzEiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUzMC40OCIgeTE9IjU1IiB4Mj0iNTMwLjQ4IiB5Mj0iNjUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NTUuMjQiIHkxPSI1NSIgeDI9IjU1NS4yNCIgeTI9IjY1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgwIiB5MT0iNTUiIHgyPSI1ODAiIHkyPSI2NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyIiB5MT0iMTcwIiB4Mj0iNTkyIiB5Mj0iMTcwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDIsMTcwIDU5MiwxNjUgNTkyLDE3NSIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI2MCIgeTE9IjE2NSIgeDI9IjYwIiB5Mj0iMTc1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iOTcuMTQiIHkxPSIxNjUiIHgyPSI5Ny4xNCIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzNC4yOSIgeTE9IjE2NSIgeDI9IjEzNC4yOSIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE3MS40MyIgeTE9IjE2NSIgeDI9IjE3MS40MyIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwOC41NyIgeTE9IjE2NSIgeDI9IjIwOC41NyIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI0NS43MSIgeTE9IjE2NSIgeDI9IjI0NS43MSIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4Mi44NiIgeTE9IjE2NSIgeDI9IjI4Mi44NiIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMyMCIgeTE9IjE2NSIgeDI9IjMyMCIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1Ny4xNCIgeTE9IjE2NSIgeDI9IjM1Ny4xNCIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM5NC4yOSIgeTE9IjE2NSIgeDI9IjM5NC4yOSIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQzMS40MyIgeTE9IjE2NSIgeDI9IjQzMS40MyIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2OC41NyIgeTE9IjE2NSIgeDI9IjQ2OC41NyIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjUwNS43MSIgeTE9IjE2NSIgeDI9IjUwNS43MSIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU0Mi44NiIgeTE9IjE2NSIgeDI9IjU0Mi44NiIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU4MCIgeTE9IjE2NSIgeDI9IjU4MCIgeTI9IjE3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAiIHk9IjY0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIiBmb250LXN0eWxlPSJpdGFsaWMiPm48L3RleHQ+PHRleHQgeD0iMzAiIHk9IjE3NCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+4oiabjwvdGV4dD48Y2lyY2xlIGN4PSIxNTkuMDUiIGN5PSI2MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjE3MS40MyIgY3k9IjE3MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNTkuMDUiIHk9IjQwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj40OTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTcxLjQzIiB5PSIyMDAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjc8L3RleHQ+PGxpbmUgeDE9IjE1OS4wNSIgeTE9IjcyIiB4Mj0iMTcwLjI5IiB5Mj0iMTUwLjA4IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTcxLjQzLDE1OCAxNzQuMjUsMTQ5LjUxIDE2Ni4zMywxNTAuNjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIxODMuODEiIGN5PSI2MCIgcj0iNSIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjE5Ny44MyIgY3k9IjE3MCIgcj0iNSIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxODMuODEiIHk9IjQwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj41MDwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTk3LjgzIiB5PSIyMDAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPuKImjUwPC90ZXh0PjxsaW5lIHgxPSIxODMuODEiIHkxPSI3MiIgeDI9IjE5Ni41NCIgeTI9IjE1MC4xIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTk3LjgzLDE1OCAyMDAuNDksMTQ5LjQ2IDE5Mi41OSwxNTAuNzUiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSI1MzAuNDgiIGN5PSI2MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjU0Mi44NiIgY3k9IjE3MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI1MzAuNDgiIHk9IjQwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj42NDwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTQyLjg2IiB5PSIyMDAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjg8L3RleHQ+PGxpbmUgeDE9IjUzMC40OCIgeTE9IjcyIiB4Mj0iNTQxLjcyIiB5Mj0iMTUwLjA4IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTQyLjg2LDE1OCA1NDUuNjgsMTQ5LjUxIDUzNy43NiwxNTAuNjUiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzgwIiB5PSIxMDgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjQ5ICZsdDsgNTAgJmx0OyA2NDwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzgwIiB5PSIxMzIiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmRvbmMgNyAmbHQ7IOKImjUwICZsdDsgODwvdGV4dD48L3N2Zz4=)
*50 est entre les carrés parfaits 49 et 64 ; en prenant les racines, √50 est entre 7 et 8.*
<!-- /schema -->

La plupart des racines carrées ne tombent pas juste. Savoir **entre quels deux entiers**
elles se situent, c'est déjà savoir beaucoup. **La méthode, en trois temps :**

1. Repère les deux carrés parfaits qui **encadrent** $n$.
2. Écris $k^2 < n < (k+1)^2$.
3. Prends la racine de chaque membre : $k < \sqrt{n} < k+1$.

> **Exemple 1 — encadrer $\sqrt{50}$.** Dans la table, $49$ et $64$ entourent $50$.
> $$49 < 50 < 64 \quad\Longrightarrow\quad \sqrt{49} < \sqrt{50} < \sqrt{64}$$
> $$\boxed{7 < \sqrt{50} < 8}$$

> **Exemple 2 — encadrer $\sqrt{90}$.** $81 < 90 < 100$, donc $9 < \sqrt{90} < 10$.

> **Exemple 3 — dans l'autre sens.** On sait que $8 < \sqrt{n} < 9$. Que peut valoir $n$ ?
> On élève au carré : $64 < n < 81$, donc $n$ vaut $65$, $66$, … jusqu'à $80$.
>
> Attention : $n$ n'est **pas** compris entre $8$ et $9$ — c'est sa **racine** qui l'est.

---

## 5. À quoi ça sert — le côté d'un carré

<!-- schema:cote-carre -->
![Un carré d’aire 81 cm² contient 9 × 9 carrés de 1 cm² : son côté mesure √81 = 9 cm.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMjkyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIyOTIiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI2MCIgeT0iMzAiIHdpZHRoPSIyMTYiIGhlaWdodD0iMjE2IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDgiLz48bGluZSB4MT0iNjAiIHkxPSIzMCIgeDI9IjYwIiB5Mj0iMjQ2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIzMCIgeDI9IjI3NiIgeTI9IjMwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iODQiIHkxPSIzMCIgeDI9Ijg0IiB5Mj0iMjQ2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSI1NCIgeDI9IjI3NiIgeTI9IjU0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTA4IiB5MT0iMzAiIHgyPSIxMDgiIHkyPSIyNDYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9Ijc4IiB4Mj0iMjc2IiB5Mj0iNzgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMzIiIHkxPSIzMCIgeDI9IjEzMiIgeTI9IjI0NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTAyIiB4Mj0iMjc2IiB5Mj0iMTAyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTU2IiB5MT0iMzAiIHgyPSIxNTYiIHkyPSIyNDYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9IjEyNiIgeDI9IjI3NiIgeTI9IjEyNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4MCIgeTE9IjMwIiB4Mj0iMTgwIiB5Mj0iMjQ2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIxNTAiIHgyPSIyNzYiIHkyPSIxNTAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDQiIHkxPSIzMCIgeDI9IjIwNCIgeTI9IjI0NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTc0IiB4Mj0iMjc2IiB5Mj0iMTc0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjI4IiB5MT0iMzAiIHgyPSIyMjgiIHkyPSIyNDYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9IjE5OCIgeDI9IjI3NiIgeTI9IjE5OCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI1MiIgeTE9IjMwIiB4Mj0iMjUyIiB5Mj0iMjQ2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIyMjIiIHgyPSIyNzYiIHkyPSIyMjIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNzYiIHkxPSIzMCIgeDI9IjI3NiIgeTI9IjI0NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjQ2IiB4Mj0iMjc2IiB5Mj0iMjQ2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSI2MCIgeT0iMzAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjciLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iOTAiIHk9IjQ3IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPjEgY23CsjwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTY4IiB5PSIyNzAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmPDtHTDqSA9IOKImjgxID0gOSBjbTwvdGV4dD48dGV4dCB4PSIyOTYiIHk9IjEzOCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5BaXJlID0gODEgY23CsjwvdGV4dD48L3N2Zz4=)
*Un carré d’aire 81 cm² contient 9 × 9 carrés de 1 cm² : son côté mesure √81 = 9 cm.*
<!-- /schema -->

C'est la situation qui a fait naitre la notion. Un carré de côté $c$ a pour aire $c^2$ ;
si tu connais l'**aire** et que tu cherches le **côté**, tu prends la racine carrée :

$$\boxed{c = \sqrt{\mathcal{A}}}$$

> **Exemple.** Un carré d'aire $81\ \text{cm}^2$ a un côté de $\sqrt{81} = 9\ \text{cm}$.

Et si l'aire vaut $50\ \text{cm}^2$ ? Le côté mesure $\sqrt{50}\ \text{cm}$, qui ne tombe
pas juste — mais l'encadrement du §4 te dit qu'il est entre $7$ et $8\ \text{cm}$.

> **Un autre usage t'attend.** Dans le chapitre sur les **triangles**, le théorème de
> Pythagore donne le **carré** d'une longueur. Pour remonter à la longueur elle-même,
> c'est encore la racine carrée qui sert.

---

## 6. Pour aller plus loin — un nombre qui n'est pas décimal

<!-- schema:racine-de-deux -->
![Le carré orange, fait de quatre demi-carrés d’aire 1, a une aire de 2 : son côté, la diagonale du carré de côté 1, mesure √2.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI1MCIgeT0iMzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iMTEwIiBmaWxsPSJub25lIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iNTAiIHk9IjE0MCIgd2lkdGg9IjExMCIgaGVpZ2h0PSIxMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cmVjdCB4PSIxNjAiIHk9IjMwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxyZWN0IHg9IjE2MCIgeT0iMTQwIiB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxyZWN0IHg9IjUwIiB5PSIxNDAiIHdpZHRoPSIxMTAiIGhlaWdodD0iMTEwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMTUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz48cG9seWdvbiBwb2ludHM9IjE2MCwzMCAyNzAsMTQwIDE2MCwyNTAgNTAsMTQwIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iODciIHk9IjIyNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YWlyZSAxPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNjAiIHk9IjExOCIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YWlyZSAyPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxMDUiIHk9IjI3MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTI3IiB5PSIxOTciIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+4oiaMjwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjgwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPkxlIGNhcnLDqSBvcmFuZ2UgZXN0IGZhaXQgZGU8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxMDAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+NCBkZW1pLWNhcnLDqXMgZOKAmWFpcmUgMSA6IGFpcmUgMi48L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+U29uIGPDtHTDqSBlc3QgZG9uYyDiiJoyLDwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjE2MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5sYSBkaWFnb25hbGUgZHUgY2FycsOpIGRlIGPDtHTDqSAxLjwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjIwMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij7iiJoyIOKJiCAxLDQxNOKApjwvdGV4dD48L3N2Zz4=)
*Le carré orange, fait de quatre demi-carrés d’aire 1, a une aire de 2 : son côté, la diagonale du carré de côté 1, mesure √2.*
<!-- /schema -->

Tape $\sqrt{2}$ sur une calculatrice : elle affiche $1{,}414213562\ldots$ et s'arrête —
une **valeur approchée**. Le nombre exact ne s'écrit avec aucune suite finie de décimales.

**On peut le démontrer**, par l'absurde. Supposons que $\sqrt{2}$ soit décimal.

- Ce n'est pas un entier : $1^2 = 1$ et $2^2 = 4$, donc $\sqrt{2}$ est entre $1$ et $2$.
- Il a donc des chiffres après la virgule, et son **dernier** chiffre n'est pas $0$.
- Or le chiffre des unités de $1^2, 2^2, \ldots, 9^2$ vaut $1, 4, 9, 6, 5, 6, 9, 4, 1$ —
  **jamais $0$**. En élevant au carré, le dernier chiffre reste donc non nul.
- Le carré garde des décimales : il ne peut pas valoir l'entier $2$. Contradiction.

Conclusion : $\sqrt{2}$ **existe** — c'est le côté d'un carré d'aire $2$ — mais ce n'est
pas un nombre décimal. On dit qu'il est **irrationnel**. (Ouverture culturelle : à
comprendre, pas à réciter.)

---

## 7. Les pièges de calcul

### La racine ne se distribue pas sur une somme

$$\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$$

> **Contre-exemple.** $\sqrt{9 + 16} = \sqrt{25} = 5$, alors que
> $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$. Et $5 \neq 7$.

**La bonne méthode** : on calcule d'abord **sous** le radical, puis on prend la racine.
Le radical joue le rôle d'une parenthèse.

### Racine carrée n'est pas moitié

$\sqrt{36} = 6$, et non $18$. Le radical n'est pas une division par $2$.

### $\sqrt{0}$ et $\sqrt{1}$

$\sqrt{0} = 0$ et $\sqrt{1} = 1$ : les deux seuls nombres égaux à leur propre racine.

### La calculatrice ment (un peu)

Elle affiche $\sqrt{50} \approx 7{,}0710678$ : valeur **approchée**, donc $\approx$ et
non $=$. Si on te demande la valeur **exacte**, la réponse est $\sqrt{50}$, telle quelle.

---

## 8. À retenir absolument

| | |
|---|---|
| Définition | $\sqrt{a}$ = le nombre **positif** dont le carré vaut $a$ |
| Existence | $\sqrt{a}$ n'existe que si $a \geqslant 0$ |
| Signe | $\sqrt{a}$ est **toujours positif** |
| Propriété 1 | $(\sqrt{a})^2 = a$ |
| Propriété 2 | $\sqrt{a^2} = a$ (pour $a$ positif) |
| Ordre | $a < b \Rightarrow \sqrt{a} < \sqrt{b}$ |
| Encadrer | $k^2 < n < (k+1)^2 \Rightarrow k < \sqrt{n} < k+1$ |
| Côté d'un carré | $c = \sqrt{\mathcal{A}}$ |
| Interdit | $\sqrt{a+b} \neq \sqrt{a} + \sqrt{b}$ |
| À savoir par cœur | les carrés de $0$ à $12$ |

---

## 9. Les erreurs qui coûtent des points

1. **Donner deux réponses.** $\sqrt{25}$ vaut $5$. Pas « $5$ et $-5$ ». Le radical
   désigne un seul nombre, positif.
2. **Écrire $\sqrt{-16}$.** Ça n'existe pas. Un carré n'est jamais négatif — vérifie
   toujours le signe du radicande avant d'écrire quoi que ce soit.
3. **Distribuer la racine sur une somme** : $\sqrt{9+16}$ vaut $5$, pas $7$. On calcule
   d'abord sous le radical.
4. **Confondre racine carrée et moitié** : $\sqrt{100} = 10$, pas $50$.
5. **Encadrer le mauvais nombre** : si $7 < \sqrt{n} < 8$, c'est $n$ qui est entre
   $49$ et $64$, pas entre $7$ et $8$.
6. **Écrire $=$ au lieu de $\approx$** après la calculatrice : $\sqrt{2} \approx 1{,}414$,
   jamais $=$. Et ne cherche pas à tout prix une valeur décimale : $\sqrt{50}$ est déjà
   une réponse exacte et acceptable.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt — « Annexe 2 – Programme de mathématiques
pour le cycle 4 », domaine « Nombres et calculs », niveau QUATRIÈME, entrée
« Racine carrée », lignes 556 à 564.

Contenu littéral de l'entrée — c'est TOUT ce que le texte donne pour la 4e :
- l. 558 (automatismes) : « Donner les carrés des nombres entiers compris entre 0 et 12. »
- l. 560 : « Comprendre et connaitre la définition de la racine carrée d'un nombre positif. »
- l. 561 : « Encadrer la racine carrée d'un entier par deux nombres entiers consécutifs. »
- l. 563 (prolongement) : « Découverte de l'existence de nombres irrationnels (lien entre
  l'aire d'un carré et la longueur d'un de ses côtés). »
- l. 564 (prolongement) : « √2 n'est pas décimal (démonstration par l'absurde en
  considérant le chiffre des unités). »

Cadrage du domaine, l. 344-345 : « La racine carrée est introduite, en lien avec des
situations géométriques (longueur du côté d'un carré d'aire donnée, théorème de
Pythagore). » — justifie le §5. Pythagore n'est PAS traité ici : il relève de l'entrée
« Triangles » (Espace et géométrie, Quatrième, l. 800). Le §5 annonce seulement le lien.

PÉRIMÈTRE — CE QUI A ÉTÉ VOLONTAIREMENT EXCLU
- √(ab) = √a × √b et √(a/b) = √a/√b : ces règles n'apparaissent NULLE PART dans le texte
  du cycle 4 — ni en 4e (l. 556-564), ni en 3e (l. 605-614). Vérifié par recherche sur
  tout le fichier : « racine » n'apparait qu'aux lignes 15, 20, 344, 556, 560, 561, 564,
  605, 610, 614. Elles ne sont donc pas dans la fiche.
  ⚠️ POINT N°1 À TRANCHER : confirmer sur le PDF que ces règles ont bien disparu du
  collège (ou qu'elles passent en Seconde). C'est le choix de périmètre le plus lourd.
- √(a²) = |a| : hors programme (la valeur absolue n'est pas au cycle 4). La propriété 2
  est donc énoncée UNIQUEMENT pour a positif, avec avertissement explicite dans la fiche.
- Résolution de x² = a : le texte la place en TROISIÈME (l. 609). Absente.
- Simplification de radicaux (√50 = 5√2) : absente du texte, absente de la fiche.

POINTS À SOUMETTRE AU RELECTEUR
1. (ci-dessus) √(ab) = √a√b : absence confirmée dans l'extraction, à confronter au PDF.
2. Propriété 3 (croissance : a < b ⟹ √a < √b). Non énoncée telle quelle dans le texte,
   mais l'objectif « encadrer… par deux entiers consécutifs » ne se justifie pas sans
   elle. Introduite comme outil, sans démonstration. Bon niveau de formalisme pour une
   4e, ou faut-il rester purement intuitif ?
3. Le §6 (√2 non décimal) est un « prolongement possible », donc NON exigible : isolé
   sous « Pour aller plus loin ». À garder, alléger, ou sortir ? La démonstration suit
   l'indication du BO (« chiffre des unités ») en version simplifiée ; le passage « son
   dernier chiffre n'est pas 0 » suppose l'écriture décimale réduite, implicite ici.
4. Le mot « irrationnel » est-il à donner en 4e ? Le texte dit « découverte de
   l'existence de nombres irrationnels » : je l'ai nommé, sans le définir.
5. Le §2 lit la table des carrés de 0 à 12 dans les DEUX sens (carré → racine). Le texte
   n'exige littéralement que « donner les carrés ». Le sens inverse me parait
   indispensable pour l'encadrement — à confirmer.
6. Racines de décimaux (√0,09) : non traitées, le texte dit seulement « un nombre
   positif ». Vérifier qu'elles ne sont pas attendues.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
-->
