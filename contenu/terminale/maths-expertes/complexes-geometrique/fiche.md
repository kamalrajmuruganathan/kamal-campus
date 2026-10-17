---
id: tale-exp-math-complexes-geometrique
titre: "Nombres complexes — point de vue géométrique"
voie: generale
niveau: terminale
parcours: maths-expertes
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths expertes, terminale générale"
duree_lecture_min: 15
prerequis:
  - Nombres complexes — point de vue algébrique (maths expertes)
  - Trigonométrie et cercle trigonométrique (Première)
  - Vecteurs et repérage du plan (Seconde)
statut: brouillon
relu_par: null
---

# Nombres complexes — point de vue géométrique

> Un nombre complexe, ce n'est pas qu'un objet de calcul $a+ib$. C'est aussi un **point du
> plan**, une **flèche** partant de l'origine. Sa longueur, c'est le **module** ; l'angle qu'il
> fait avec l'axe des abscisses, c'est l'**argument**. Tout le chapitre tient dans cette idée :
> **multiplier deux complexes, c'est multiplier les longueurs et additionner les angles.** La
> forme exponentielle $re^{i\theta}$ rend cette magie évidente.

---

## 1. Image et affixe : le plan complexe

<!-- schema:affixe-vecteur -->
![Le vecteur AB a pour affixe zB − zA = 3 + 2i, comme le vecteur qui va de O au point d’affixe 3 + 2i (en vert) ; sa longueur est AB = |3 + 2i| = √13.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMzg1IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4MCIgaGVpZ2h0PSIzODUiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iODYuNDgiIHkxPSIyOCIgeDI9Ijg2LjQ4IiB5Mj0iMzU3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1OS41OSIgeTE9IjI4IiB4Mj0iMTU5LjU5IiB5Mj0iMzU3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIzMi42OSIgeTE9IjI4IiB4Mj0iMjMyLjY5IiB5Mj0iMzU3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwNS43OSIgeTE9IjI4IiB4Mj0iMzA1Ljc5IiB5Mj0iMzU3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM3OC45IiB5MT0iMjgiIHgyPSIzNzguOSIgeTI9IjM1NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NTIiIHkxPSIyOCIgeDI9IjQ1MiIgeTI9IjM1NyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjMwNS44MiIgeDI9IjQ1MiIgeTI9IjMwNS44MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIzMi43MSIgeDI9IjQ1MiIgeTI9IjIzMi43MSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE1OS42IiB4Mj0iNDUyIiB5Mj0iMTU5LjYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSI4Ni40OSIgeDI9IjQ1MiIgeTI9Ijg2LjQ5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzA1LjgyIiB4Mj0iNDUxIiB5Mj0iMzA1LjgyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ2MCwzMDUuODIgNDUxLDMwMS4zMiA0NTEsMzEwLjMyIiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9Ijg2LjQ4IiB5MT0iMzU3IiB4Mj0iODYuNDgiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI4Ni40OCwyMCA4MS45OCwyOSA5MC45OCwyOSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjQ1NiIgeT0iMzIzLjgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPjwvdGV4dD48dGV4dCB4PSI3NC40OCIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+PC90ZXh0Pjx0ZXh0IHg9IjE1OS41OSIgeT0iMzIxLjgyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjIzMi42OSIgeT0iMzIxLjgyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjMwNS43OSIgeT0iMzIxLjgyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0Pjx0ZXh0IHg9IjM3OC45IiB5PSIzMjEuODIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjQ8L3RleHQ+PHRleHQgeD0iODAuNDgiIHk9IjIzNi43MSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSI4MC40OCIgeT0iMTYzLjYiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iODAuNDgiIHk9IjkwLjQ5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zPC90ZXh0Pjx0ZXh0IHg9Ijc4LjQ4IiB5PSIzMjEuODIiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI0MjQiIGhlaWdodD0iMzI5Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjwvZz48bGluZSB4MT0iMTU5LjU5IiB5MT0iMjMyLjcxIiB4Mj0iMzY5Ljc0IiB5Mj0iOTIuNTkiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzc4LjksODYuNDkgMzY2LjY5LDg4LjAxIDM3Mi44LDk3LjE3IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9Ijg2LjQ4IiB5MT0iMzA1LjgyIiB4Mj0iMjk2LjY0IiB5Mj0iMTY1LjciIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMDUuNzksMTU5LjYgMjkzLjU5LDE2MS4xMyAyOTkuNjksMTcwLjI4IiBmaWxsPSIjMWE3ZjRiIi8+PGNpcmNsZSBjeD0iMTU5LjU5IiBjeT0iMjMyLjcxIiByPSI0IiBmaWxsPSIjMTYyMzJlIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjE1MS41OSIgeT0iMjIyLjcxIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5BIDogMSArIGk8L3RleHQ+PGNpcmNsZSBjeD0iMzc4LjkiIGN5PSI4Ni40OSIgcj0iNCIgZmlsbD0iIzE2MjMyZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIzNzguOSIgeT0iNzQuNDkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPkIgOiA0ICsgM2k8L3RleHQ+PGNpcmNsZSBjeD0iMzA1Ljc5IiBjeT0iMTU5LjYiIHI9IjQiIGZpbGw9IiMxYTdmNGIiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMzE1Ljc5IiB5PSIxNzUuNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4zICsgMmk8L3RleHQ+PHRleHQgeD0iMjYxLjkzIiB5PSIxMjYuNyIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+QUIgPSB8ejx0c3BhbiBmb250LXNpemU9IjEwLjA4IiBkeT0iNC4yIj5CPC90c3Bhbj48dHNwYW4gZHk9Ii00LjIiPuKAizwvdHNwYW4+IOKIkiB6PHRzcGFuIGZvbnQtc2l6ZT0iMTAuMDgiIGR5PSI0LjIiPkE8L3RzcGFuPjx0c3BhbiBkeT0iLTQuMiI+4oCLPC90c3Bhbj58ID0g4oiaMTM8L3RleHQ+PC9zdmc+)
*Le vecteur AB a pour affixe zB − zA = 3 + 2i, comme le vecteur qui va de O au point d’affixe 3 + 2i (en vert) ; sa longueur est AB = |3 + 2i| = √13.*
<!-- /schema -->

On munit le plan d'un repère orthonormé direct $(O\,;\vec{u},\vec{v})$. À tout complexe
$z=a+ib$ (avec $a,b$ réels) on associe :

- le **point** $M$ de coordonnées $(a\,;b)$, appelé **image** de $z$ ;
- le **vecteur** $\overrightarrow{OM}$ de coordonnées $(a\,;b)$, appelé **vecteur image**.

Réciproquement, $z=a+ib$ est l'**affixe** du point $M$ et du vecteur $\overrightarrow{OM}$,
souvent noté $z_M$.

$$\boxed{M(a\,;b) \iff z_M=a+ib}$$

> **Exemple.** Le point $A$ d'affixe $z_A=3-2i$ a pour coordonnées $(3\,;-2)$. L'axe des
> abscisses est l'axe des **réels** ($b=0$), l'axe des ordonnées est l'axe des **imaginaires
> purs** ($a=0$).

**Affixe d'un vecteur défini par deux points.** Pour deux points $A$ et $B$ :

$$\boxed{z_{\overrightarrow{AB}}=z_B-z_A}$$

> **Exemple.** Si $z_A=1+i$ et $z_B=4+3i$, alors $z_{\overrightarrow{AB}}=(4+3i)-(1+i)=3+2i$ :
> le vecteur $\overrightarrow{AB}$ a pour coordonnées $(3\,;2)$.

**Affixe d'un milieu.** Le milieu $I$ de $[AB]$ a pour affixe $z_I=\dfrac{z_A+z_B}{2}$.

---

## 2. Module d'un complexe

Le **module** de $z=a+ib$ est le réel positif :

$$\boxed{|z|=\sqrt{a^2+b^2}}$$

Géométriquement, c'est la **distance** $OM$, la longueur du vecteur image.

> **Exemple.** $|3-4i|=\sqrt{3^2+(-4)^2}=\sqrt{9+16}=\sqrt{25}=5$.

**Lien fondamental avec le conjugué.** Comme $z\bar z=(a+ib)(a-ib)=a^2+b^2$ :

$$\boxed{|z|^2=z\bar z}$$

> C'est l'identité la plus utile du chapitre : elle transforme un module (avec sa racine
> carrée gênante) en un **produit**. On s'en sert pour calculer le module d'un quotient sans
> se battre avec les racines. **Exemple.** $|2+i|^2=(2+i)(2-i)=4+1=5$, donc $|2+i|=\sqrt5$.

**Distance entre deux points.** La longueur $AB$ est le module de l'affixe de
$\overrightarrow{AB}$ :

$$\boxed{AB=|z_B-z_A|}$$

> **Exemple.** Avec $z_A=1+i$ et $z_B=4+3i$ : $AB=|3+2i|=\sqrt{9+4}=\sqrt{13}$.

### Propriétés du module

Pour tous complexes $z,z'$ (et $z'\neq0$ pour le quotient) :

$$\boxed{|zz'|=|z|\,|z'| \qquad \left|\frac{z}{z'}\right|=\frac{|z|}{|z'|} \qquad |z^n|=|z|^n}$$

$$|\bar z|=|z| \qquad |-z|=|z| \qquad |z|=0 \iff z=0$$

> **Exemple.** $|(1+i)^{8}|=|1+i|^{8}=(\sqrt2)^{8}=2^{4}=16$ : on n'a pas eu à développer la
> puissance. Le module d'une **somme**, en revanche, ne se répartit pas :
> $|z+z'|\neq|z|+|z'|$ en général (on a seulement l'inégalité $|z+z'|\leqslant|z|+|z'|$).

---

## 3. L'ensemble 𝕌 des complexes de module 1

<!-- schema:ensemble-u -->
![L’ensemble 𝕌 des complexes de module 1 est le cercle de centre O et de rayon 1 : il contient 1, i, −1, −i et tous les e^(iθ).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgNDA0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSI0MDQiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTAwIiB5MT0iMjgiIHgyPSIxMDAiIHkyPSIzNzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjIwIiB5MT0iMjgiIHgyPSIyMjAiIHkyPSIzNzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQwIiB5MT0iMjgiIHgyPSIzNDAiIHkyPSIzNzYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIzMjIiIHgyPSI0MTIiIHkyPSIzMjIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyMDIiIHgyPSI0MTIiIHkyPSIyMDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSI4MiIgeDI9IjQxMiIgeTI9IjgyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjAyIiB4Mj0iNDExIiB5Mj0iMjAyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQyMCwyMDIgNDExLDE5Ny41IDQxMSwyMDYuNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIyMjAiIHkxPSIzNzYiIHgyPSIyMjAiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMjAsMjAgMjE1LjUsMjkgMjI0LjUsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSI0MTYiIHk9IjIyMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iMjA4IiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSIzODQiIGhlaWdodD0iMzQ4Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxsaW5lIHgxPSIyMjAiIHkxPSIyMDIiIHgyPSIxNDAuMDUiIHkyPSIxMTIuNTIiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxlbGxpcHNlIGN4PSIyMjAiIGN5PSIyMDIiIHJ4PSIxMjAiIHJ5PSIxMjAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMC4xMiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIvPjwvZz48cGF0aCBkPSJNIDI0NiAyMDIgTCAyNDUuOTYgMjAwLjUxIEwgMjQ1LjgzIDE5OS4wMiBMIDI0NS42MSAxOTcuNTQgTCAyNDUuMzIgMTk2LjA3IEwgMjQ0LjkzIDE5NC42MyBMIDI0NC40NyAxOTMuMjEgTCAyNDMuOTIgMTkxLjgyIEwgMjQzLjMgMTkwLjQ2IEwgMjQyLjYgMTg5LjE0IEwgMjQxLjgyIDE4Ny44NiBMIDI0MC45NyAxODYuNjMgTCAyNDAuMDUgMTg1LjQ1IEwgMjM5LjA3IDE4NC4zMyBMIDIzOC4wMiAxODMuMjYgTCAyMzYuOTEgMTgyLjI1IEwgMjM1Ljc1IDE4MS4zMSBMIDIzNC41NCAxODAuNDQgTCAyMzMuMjcgMTc5LjY0IEwgMjMxLjk3IDE3OC45MiBMIDIzMC42MiAxNzguMjcgTCAyMjkuMjQgMTc3LjcgTCAyMjcuODMgMTc3LjIxIEwgMjI2LjM5IDE3Ni44IEwgMjI0LjkzIDE3Ni40NyBMIDIyMy40NiAxNzYuMjMgTCAyMjEuOTcgMTc2LjA3IEwgMjIwLjQ4IDE3NiBMIDIxOC45OCAxNzYuMDIgTCAyMTcuNDkgMTc2LjEyIEwgMjE2LjAxIDE3Ni4zMSBMIDIxNC41NCAxNzYuNTggTCAyMTMuMDggMTc2Ljk0IEwgMjExLjY2IDE3Ny4zOCBMIDIxMC4yNSAxNzcuOSBMIDIwOC44OSAxNzguNSBMIDIwNy41NSAxNzkuMTcgTCAyMDYuMjYgMTc5LjkzIEwgMjA1LjAyIDE4MC43NSBMIDIwMy44MiAxODEuNjUgTCAyMDIuNjggMTgyLjYxIiBmaWxsPSJub25lIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PGxpbmUgeDE9IjIwNS4wMiIgeTE9IjE4MC43NSIgeDI9IjIwOS43MiIgeTI9IjE3Ny4wMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMDIuNjgsMTgyLjYxIDIxMi41MiwxODAuNTMgMjA2LjkyLDE3My40OSIgZmlsbD0iIzdhM2ZiMCIvPjxjaXJjbGUgY3g9IjM0MCIgY3k9IjIwMiIgcj0iNCIgZmlsbD0iIzE2MjMyZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIzNTAiIHk9IjE5NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxjaXJjbGUgY3g9IjEwMCIgY3k9IjIwMiIgcj0iNCIgZmlsbD0iIzE2MjMyZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSI5MCIgeT0iMTk0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxPC90ZXh0PjxjaXJjbGUgY3g9IjIyMCIgY3k9IjgyIiByPSI0IiBmaWxsPSIjMTYyMzJlIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjIzMCIgeT0iNzQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+aTwvdGV4dD48Y2lyY2xlIGN4PSIyMjAiIGN5PSIzMjIiIHI9IjQiIGZpbGw9IiMxNjIzMmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMjMwIiB5PSIzMzgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSaTwvdGV4dD48Y2lyY2xlIGN4PSIxNDAuMDUiIGN5PSIxMTIuNTIiIHI9IjQiIGZpbGw9IiM3YTNmYjAiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTMwLjA1IiB5PSIxMDQuNTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPmU8dHNwYW4gZm9udC1zaXplPSIxMC4wOCIgZHk9Ii01Ljg4Ij5pzrg8L3RzcGFuPjx0c3BhbiBkeT0iNS44OCI+4oCLPC90c3Bhbj48L3RleHQ+PHRleHQgeD0iMjUwIiB5PSIxNzgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPs64PC90ZXh0Pjx0ZXh0IHg9IjMyOCIgeT0iNjcuNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+8J2VjCA6IHx6fCA9IDE8L3RleHQ+PC9zdmc+)
*L’ensemble 𝕌 des complexes de module 1 est le cercle de centre O et de rayon 1 : il contient 1, i, −1, −i et tous les e^(iθ).*
<!-- /schema -->

On note $\mathbb{U}$ l'ensemble des complexes de module $1$ :

$$\boxed{\mathbb{U}=\{\,z\in\mathbb{C}\ :\ |z|=1\,\}}$$

Ce sont exactement les affixes des points du **cercle trigonométrique** (centre $O$, rayon $1$).

**Propriétés.** $\mathbb{U}$ est **stable par produit** et par passage à l'inverse :
si $z,z'\in\mathbb{U}$, alors $zz'\in\mathbb{U}$ et $\dfrac1z\in\mathbb{U}$. De plus :

$$\boxed{z\in\mathbb{U}\iff |z|=1 \iff \frac1z=\bar z}$$

> **Pourquoi $\frac1z=\bar z$ ?** Parce que $z\bar z=|z|^2=1$ quand $z\in\mathbb U$. **Exemple.**
> $i\in\mathbb U$ car $|i|=1$, et effectivement $\dfrac1i=-i=\bar i$. Les nombres $1,-1,i,-i$
> sont dans $\mathbb U$.

---

## 4. Argument et forme trigonométrique

Soit $z\neq0$ d'image $M$. Un **argument** de $z$ est une mesure de l'angle orienté
$(\vec u\,,\overrightarrow{OM})$, noté $\arg(z)$. Il est défini **modulo $2\pi$**.

Avec $r=|z|$, les coordonnées de $M$ s'écrivent $a=r\cos\theta$ et $b=r\sin\theta$, d'où la
**forme trigonométrique** :

$$\boxed{z=r\big(\cos\theta+i\sin\theta\big)\quad\text{avec } r=|z|>0 \text{ et } \theta=\arg(z)}$$

> ⚠️ **Le nombre $0$ n'a pas d'argument** : sa direction n'est pas définie. On ne parle
> d'argument que pour $z\neq0$.

**Déterminer un argument.** On cherche $\theta$ tel que
$\cos\theta=\dfrac{a}{r}$ **et** $\sin\theta=\dfrac{b}{r}$. Les deux conditions ensemble
fixent $\theta$ (modulo $2\pi$).

> **Exemple.** $z=1+i$. Module : $r=\sqrt2$. Alors $\cos\theta=\dfrac{1}{\sqrt2}$ et
> $\sin\theta=\dfrac{1}{\sqrt2}$, donc $\theta=\dfrac{\pi}{4}$. Forme trigonométrique :
> $z=\sqrt2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$.

> ⚠️ **Le seul cosinus ne suffit pas.** $\cos\theta=\dfrac12$ donne $\theta=\dfrac{\pi}3$ **ou**
> $\theta=-\dfrac{\pi}3$ : c'est le **signe de la partie imaginaire** (donc de $\sin\theta$) qui
> tranche. Toujours vérifier le sinus.

### Propriétés de l'argument

Pour $z,z'$ non nuls (égalités modulo $2\pi$) :

$$\boxed{\arg(zz')=\arg z+\arg z' \qquad \arg\!\left(\frac{z}{z'}\right)=\arg z-\arg z' \qquad \arg(z^n)=n\arg z}$$

$$\arg(\bar z)=-\arg z \qquad \arg(-z)=\arg z+\pi$$

> **Exemple.** $\arg\big((1+i)^2\big)=2\arg(1+i)=2\times\dfrac{\pi}4=\dfrac{\pi}2$. On vérifie :
> $(1+i)^2=2i$, dont l'argument est bien $\dfrac{\pi}2$. **Multiplier ajoute les angles.**

---

## 5. Forme exponentielle

Pour tout réel $\theta$, on **pose** la notation :

$$\boxed{e^{i\theta}=\cos\theta+i\sin\theta}$$

C'est un complexe de $\mathbb U$ (module $1$, argument $\theta$). Tout complexe non nul de
module $r$ et d'argument $\theta$ s'écrit alors sous **forme exponentielle** :

$$\boxed{z=re^{i\theta}\quad\text{avec } r=|z| \text{ et } \theta=\arg(z)}$$

> **Exemple.** $1+i=\sqrt2\,e^{i\pi/4}$. À connaître : $e^{i0}=1$, $e^{i\pi/2}=i$,
> $e^{i\pi}=-1$ (la célèbre relation $e^{i\pi}+1=0$), $e^{-i\pi/2}=-i$.

**Règles de calcul — celles des exposants.** Le grand intérêt de la notation : $e^{i\theta}$ se
manipule comme une vraie puissance.

$$\boxed{e^{i\theta}\times e^{i\theta'}=e^{i(\theta+\theta')} \qquad \frac{1}{e^{i\theta}}=e^{-i\theta} \qquad \overline{e^{i\theta}}=e^{-i\theta}}$$

> **Exemple — passer à l'exponentielle simplifie tout.** Soit $z=2e^{i\pi/3}$ et
> $z'=3e^{i\pi/6}$. Alors $zz'=6\,e^{i(\pi/3+\pi/6)}=6\,e^{i\pi/2}=6i$. On a multiplié les
> modules ($2\times3$) et ajouté les arguments ($\frac\pi3+\frac\pi6=\frac\pi2$).

**Passer d'une forme à l'autre.**
- Algébrique $\to$ exponentielle : calculer $r=|z|$, puis $\theta$ via $\cos\theta=\frac ar$,
  $\sin\theta=\frac br$.
- Exponentielle $\to$ algébrique : développer $re^{i\theta}=r\cos\theta+i\,r\sin\theta$.

> **Exemple.** $z=2e^{i2\pi/3}=2\left(\cos\dfrac{2\pi}3+i\sin\dfrac{2\pi}3\right)
> =2\left(-\dfrac12+i\dfrac{\sqrt3}2\right)=-1+i\sqrt3$.

---

## 6. Formules d'Euler et de Moivre

**Formules d'Euler.** En additionnant et soustrayant $e^{i\theta}=\cos\theta+i\sin\theta$ et
$e^{-i\theta}=\cos\theta-i\sin\theta$ :

$$\boxed{\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2} \qquad \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}}$$

> Elles servent à **linéariser** : transformer $\cos^n\theta$ ou $\sin^n\theta$ en une somme de
> $\cos(k\theta)$ et $\sin(k\theta)$ (utile pour intégrer). **Exemple.**
> $\cos^2\theta=\left(\dfrac{e^{i\theta}+e^{-i\theta}}2\right)^2
> =\dfrac{e^{2i\theta}+2+e^{-2i\theta}}4=\dfrac{1+\cos(2\theta)}2$.

**Formule de Moivre.** Pour tout réel $\theta$ et tout entier $n$ :

$$\boxed{\big(\cos\theta+i\sin\theta\big)^n=\cos(n\theta)+i\sin(n\theta)}$$

soit, en exponentielle, simplement $\big(e^{i\theta}\big)^n=e^{in\theta}$.

> Elle sert à l'inverse d'Euler : **exprimer $\cos(n\theta)$ en fonction de $\cos\theta$**.
> **Exemple.** $\cos(2\theta)+i\sin(2\theta)=(\cos\theta+i\sin\theta)^2
> =\cos^2\theta-\sin^2\theta+2i\sin\theta\cos\theta$. En identifiant les parties réelles :
> $\cos(2\theta)=\cos^2\theta-\sin^2\theta$.

---

## 7. Interprétations géométriques

<!-- schema:cercle-mediatrice -->
![À gauche, les points M tels que |z − zA| = 2 forment le cercle de centre A et de rayon 2 ; à droite, ceux tels que |z − zA| = |z − zB| forment la médiatrice du segment AB.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48c3ZnIHg9IjAiIHk9IjMwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIwIDI3MCIgZm9udC1mYW1pbHk9Ii1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLHNhbnMtc2VyaWYiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMjcwIiBmaWxsPSIjZmZmZmZmIi8+PGxpbmUgeDE9IjQ4LjMxIiB5MT0iMjgiIHgyPSI0OC4zMSIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI4OC45MiIgeTE9IjI4IiB4Mj0iODguOTIiIHkyPSIyNDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTI5LjU0IiB5MT0iMjgiIHgyPSIxMjkuNTQiIHkyPSIyNDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTcwLjE1IiB5MT0iMjgiIHgyPSIxNzAuMTUiIHkyPSIyNDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjEwLjc3IiB5MT0iMjgiIHgyPSIyMTAuNzciIHkyPSIyNDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjUxLjM4IiB5MT0iMjgiIHgyPSIyNTEuMzgiIHkyPSIyNDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjkyIiB5MT0iMjgiIHgyPSIyOTIiIHkyPSIyNDIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyMzQuMDciIHgyPSIyOTIiIHkyPSIyMzQuMDciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxOTQuNDQiIHgyPSIyOTIiIHkyPSIxOTQuNDQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxNTQuODEiIHgyPSIyOTIiIHkyPSIxNTQuODEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxMTUuMTkiIHgyPSIyOTIiIHkyPSIxMTUuMTkiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSI3NS41NiIgeDI9IjI5MiIgeTI9Ijc1LjU2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzUuOTMiIHgyPSIyOTIiIHkyPSIzNS45MyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE5NC40NCIgeDI9IjI5MSIgeTI9IjE5NC40NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMDAsMTk0LjQ0IDI5MSwxODkuOTQgMjkxLDE5OC45NCIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI4OC45MiIgeTE9IjI0MiIgeDI9Ijg4LjkyIiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iODguOTIsMjAgODQuNDIsMjkgOTMuNDIsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSIyOTYiIHk9IjIxMi40NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iNzYuOTIiIHk9IjI0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPjwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUwIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSIyNjQiIGhlaWdodD0iMjE0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZTApIj48bGluZSB4MT0iMTQ5Ljg1IiB5MT0iMTM1IiB4Mj0iMjExLjk3IiB5Mj0iODMuOTQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48ZWxsaXBzZSBjeD0iMTQ5Ljg1IiBjeT0iMTM1IiByeD0iODEuMjMiIHJ5PSI3OS4yNiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjEyIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PC9nPjxjaXJjbGUgY3g9IjE0OS44NSIgY3k9IjEzNSIgcj0iNCIgZmlsbD0iIzE2MjMyZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIxMzkuODUiIHk9IjE1MSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+QTwvdGV4dD48Y2lyY2xlIGN4PSIyMTEuOTciIGN5PSI4My45NCIgcj0iNCIgZmlsbD0iIzE2MjMyZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIyMjEuOTciIHk9Ijc3Ljk0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5NPC90ZXh0Pjx0ZXh0IHg9IjE4OC40MyIgeT0iMTE3LjE3IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj4yPC90ZXh0Pjwvc3ZnPjx0ZXh0IHg9IjE2MCIgeT0iMjIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPnx6IOKIkiB6PHRzcGFuIGZvbnQtc2l6ZT0iMTAuMDgiIGR5PSI0LjIiPkE8L3RzcGFuPjx0c3BhbiBkeT0iLTQuMiI+4oCLPC90c3Bhbj58ID0gMiA6IGNlcmNsZTwvdGV4dD48c3ZnIHg9IjMyMCIgeT0iMzAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMjcwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDguMzEiIHkxPSIyOCIgeDI9IjQ4LjMxIiB5Mj0iMjQyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijg4LjkyIiB5MT0iMjgiIHgyPSI4OC45MiIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMjkuNTQiIHkxPSIyOCIgeDI9IjEyOS41NCIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNzAuMTUiIHkxPSIyOCIgeDI9IjE3MC4xNSIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMTAuNzciIHkxPSIyOCIgeDI9IjIxMC43NyIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNTEuMzgiIHkxPSIyOCIgeDI9IjI1MS4zOCIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOTIiIHkxPSIyOCIgeDI9IjI5MiIgeTI9IjI0MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIzNC4wNyIgeDI9IjI5MiIgeTI9IjIzNC4wNyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE5NC40NCIgeDI9IjI5MiIgeTI9IjE5NC40NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE1NC44MSIgeDI9IjI5MiIgeTI9IjE1NC44MSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjExNS4xOSIgeDI9IjI5MiIgeTI9IjExNS4xOSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9Ijc1LjU2IiB4Mj0iMjkyIiB5Mj0iNzUuNTYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIzNS45MyIgeDI9IjI5MiIgeTI9IjM1LjkzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTk0LjQ0IiB4Mj0iMjkxIiB5Mj0iMTk0LjQ0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwMCwxOTQuNDQgMjkxLDE4OS45NCAyOTEsMTk4Ljk0IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9Ijg4LjkyIiB5MT0iMjQyIiB4Mj0iODguOTIiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI4OC45MiwyMCA4NC40MiwyOSA5My40MiwyOSIgZmlsbD0iIzhhOTlhOCIvPjx0ZXh0IHg9IjI5NiIgeT0iMjEyLjQ0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPjwvdGV4dD48dGV4dCB4PSI3Ni45MiIgeT0iMjQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+PC90ZXh0PjxjbGlwUGF0aCBpZD0iem9uZTEiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjI2NCIgaGVpZ2h0PSIyMTQiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lMSkiPjxsaW5lIHgxPSIxMDkuMjMiIHkxPSIxNjQuNzIiIHgyPSIyMTAuNzciIHkyPSI2NS42NSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjggLTEzLjZMMjkuMyAtMTIuM0wzMC42IC0xMUwzMiAtOS43TDMzLjMgLTguNUwzNC42IC03LjJMMzUuOSAtNS45TDM3LjIgLTQuNkwzOC42IC0zLjNMMzkuOSAtMkw0MS4yIC0wLjdMNDIuNSAwLjZMNDMuOCAxLjhMNDUuMiAzLjFMNDYuNSA0LjRMNDcuOCA1LjdMNDkuMSA3TDUwLjQgOC4zTDUxLjggOS42TDUzLjEgMTAuOUw1NC40IDEyLjFMNTUuNyAxMy40TDU3IDE0LjdMNTguNCAxNkw1OS43IDE3LjNMNjEgMTguNkw2Mi4zIDE5LjlMNjMuNiAyMS4yTDY1IDIyLjVMNjYuMyAyMy43TDY3LjYgMjVMNjguOSAyNi4zTDcwLjIgMjcuNkw3MS42IDI4LjlMNzIuOSAzMC4yTDc0LjIgMzEuNUw3NS41IDMyLjhMNzYuOCAzNEw3OC4yIDM1LjNMNzkuNSAzNi42TDgwLjggMzcuOUw4Mi4xIDM5LjJMODMuNCA0MC41TDg0LjggNDEuOEw4Ni4xIDQzLjFMODcuNCA0NC4zTDg4LjcgNDUuNkw5MCA0Ni45TDkxLjQgNDguMkw5Mi43IDQ5LjVMOTQgNTAuOEw5NS4zIDUyLjFMOTYuNiA1My40TDk4IDU0LjdMOTkuMyA1NS45TDEwMC42IDU3LjJMMTAxLjkgNTguNUwxMDMuMiA1OS44TDEwNC42IDYxLjFMMTA1LjkgNjIuNEwxMDcuMiA2My43TDEwOC41IDY1TDEwOS44IDY2LjJMMTExLjIgNjcuNUwxMTIuNSA2OC44TDExMy44IDcwLjFMMTE1LjEgNzEuNEwxMTYuNCA3Mi43TDExNy44IDc0TDExOS4xIDc1LjNMMTIwLjQgNzYuNUwxMjEuNyA3Ny44TDEyMyA3OS4xTDEyNC40IDgwLjRMMTI1LjcgODEuN0wxMjcgODNMMTI4LjMgODQuM0wxMjkuNiA4NS42TDEzMSA4Ni45TDEzMi4zIDg4LjFMMTMzLjYgODkuNEwxMzQuOSA5MC43TDEzNi4yIDkyTDEzNy42IDkzLjNMMTM4LjkgOTQuNkwxNDAuMiA5NS45TDE0MS41IDk3LjJMMTQyLjggOTguNEwxNDQuMiA5OS43TDE0NS41IDEwMUwxNDYuOCAxMDIuM0wxNDguMSAxMDMuNkwxNDkuNCAxMDQuOUwxNTAuOCAxMDYuMkwxNTIuMSAxMDcuNUwxNTMuNCAxMDguN0wxNTQuNyAxMTBMMTU2IDExMS4zTDE1Ny40IDExMi42TDE1OC43IDExMy45TDE2MCAxMTUuMkwxNjEuMyAxMTYuNUwxNjIuNiAxMTcuOEwxNjQgMTE5TDE2NS4zIDEyMC4zTDE2Ni42IDEyMS42TDE2Ny45IDEyMi45TDE2OS4yIDEyNC4yTDE3MC42IDEyNS41TDE3MS45IDEyNi44TDE3My4yIDEyOC4xTDE3NC41IDEyOS40TDE3NS44IDEzMC42TDE3Ny4yIDEzMS45TDE3OC41IDEzMy4yTDE3OS44IDEzNC41TDE4MS4xIDEzNS44TDE4Mi40IDEzNy4xTDE4My44IDEzOC40TDE4NS4xIDEzOS43TDE4Ni40IDE0MC45TDE4Ny43IDE0Mi4yTDE4OSAxNDMuNUwxOTAuNCAxNDQuOEwxOTEuNyAxNDYuMUwxOTMgMTQ3LjRMMTk0LjMgMTQ4LjdMMTk1LjYgMTUwTDE5NyAxNTEuMkwxOTguMyAxNTIuNUwxOTkuNiAxNTMuOEwyMDAuOSAxNTUuMUwyMDIuMiAxNTYuNEwyMDMuNiAxNTcuN0wyMDQuOSAxNTlMMjA2LjIgMTYwLjNMMjA3LjUgMTYxLjZMMjA4LjggMTYyLjhMMjEwLjIgMTY0LjFMMjExLjUgMTY1LjRMMjEyLjggMTY2LjdMMjE0LjEgMTY4TDIxNS40IDE2OS4zTDIxNi44IDE3MC42TDIxOC4xIDE3MS45TDIxOS40IDE3My4xTDIyMC43IDE3NC40TDIyMiAxNzUuN0wyMjMuNCAxNzdMMjI0LjcgMTc4LjNMMjI2IDE3OS42TDIyNy4zIDE4MC45TDIyOC42IDE4Mi4yTDIzMCAxODMuNEwyMzEuMyAxODQuN0wyMzIuNiAxODZMMjMzLjkgMTg3LjNMMjM1LjIgMTg4LjZMMjM2LjYgMTg5LjlMMjM3LjkgMTkxLjJMMjM5LjIgMTkyLjVMMjQwLjUgMTkzLjhMMjQxLjggMTk1TDI0My4yIDE5Ni4zTDI0NC41IDE5Ny42TDI0NS44IDE5OC45TDI0Ny4xIDIwMC4yTDI0OC40IDIwMS41TDI0OS44IDIwMi44TDI1MS4xIDIwNC4xTDI1Mi40IDIwNS4zTDI1My43IDIwNi42TDI1NSAyMDcuOUwyNTYuNCAyMDkuMkwyNTcuNyAyMTAuNUwyNTkgMjExLjhMMjYwLjMgMjEzLjFMMjYxLjYgMjE0LjRMMjYzIDIxNS42TDI2NC4zIDIxNi45TDI2NS42IDIxOC4yTDI2Ni45IDIxOS41TDI2OC4yIDIyMC44TDI2OS42IDIyMi4xTDI3MC45IDIyMy40TDI3Mi4yIDIyNC43TDI3My41IDIyNkwyNzQuOCAyMjcuMkwyNzYuMiAyMjguNUwyNzcuNSAyMjkuOEwyNzguOCAyMzEuMUwyODAuMSAyMzIuNEwyODEuNCAyMzMuN0wyODIuOCAyMzVMMjg0LjEgMjM2LjNMMjg1LjQgMjM3LjVMMjg2LjcgMjM4LjhMMjg4IDI0MC4xTDI4OS40IDI0MS40TDI5MC43IDI0Mi43TDI5MiAyNDQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48cGF0aCBkPSJNIDE2Ny4xNiAxMDguMiBMIDE3NC4zMSAxMTUuMTkgTCAxNjcuMTYgMTIyLjE3IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PGNpcmNsZSBjeD0iMTA5LjIzIiBjeT0iMTY0LjcyIiByPSI0IiBmaWxsPSIjMTYyMzJlIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9Ijk5LjIzIiB5PSIxODAuNzIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPkE8L3RleHQ+PGNpcmNsZSBjeD0iMjEwLjc3IiBjeT0iNjUuNjUiIHI9IjQiIGZpbGw9IiMxNjIzMmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMjIwLjc3IiB5PSI1OS42NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+QjwvdGV4dD48Y2lyY2xlIGN4PSIyMjcuMDIiIGN5PSIxODAuNTciIHI9IjQiIGZpbGw9IiMxNjIzMmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMjM3LjAyIiB5PSIxODQuNTciIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+TTwvdGV4dD48L3N2Zz48dGV4dCB4PSI0ODAiIHk9IjIyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj58eiDiiJIgejx0c3BhbiBmb250LXNpemU9IjEwLjA4IiBkeT0iNC4yIj5BPC90c3Bhbj48dHNwYW4gZHk9Ii00LjIiPuKAizwvdHNwYW4+fCA9IHx6IOKIkiB6PHRzcGFuIGZvbnQtc2l6ZT0iMTAuMDgiIGR5PSI0LjIiPkI8L3RzcGFuPjx0c3BhbiBkeT0iLTQuMiI+4oCLPC90c3Bhbj58IDogbcOpZGlhdHJpY2U8L3RleHQ+PC9zdmc+)
*À gauche, les points M tels que |z − zA| = 2 forment le cercle de centre A et de rayon 2 ; à droite, ceux tels que |z − zA| = |z − zB| forment la médiatrice du segment AB.*
<!-- /schema -->

Le pont entre calcul complexe et géométrie tient en deux traductions. Pour des points
$A,B,C$ d'affixes $z_A,z_B,z_C$ :

**Longueur (module d'une différence) :**

$$\boxed{AB=|z_B-z_A|}$$

**Angle (argument d'une différence, puis d'un quotient) :**

$$\arg(z_B-z_A)=\big(\vec u\,,\overrightarrow{AB}\big) \qquad\qquad
\boxed{\big(\overrightarrow{AB}\,,\overrightarrow{AC}\big)=\arg\!\left(\frac{z_C-z_A}{z_B-z_A}\right)}$$

> **Exemple — ensemble de points.** L'ensemble des points $M$ d'affixe $z$ tels que
> $|z-z_A|=k$ (avec $k>0$) est le **cercle** de centre $A$ et de rayon $k$, car $|z-z_A|=AM$.
> De même $|z-z_A|=|z-z_B|$ décrit la **médiatrice** de $[AB]$ (points équidistants de $A$ et
> $B$).

> **Exemple — nature d'un triangle.** Le quotient $\dfrac{z_C-z_A}{z_B-z_A}$ contient tout :
> son **module** vaut $\dfrac{AC}{AB}$ et son **argument** vaut l'angle
> $\big(\overrightarrow{AB},\overrightarrow{AC}\big)$. S'il vaut $i$, alors $AC=AB$ et l'angle
> est $\dfrac\pi2$ : le triangle est **rectangle isocèle** en $A$.

---

## 8. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Affixe d'un point | $M(a\,;b)\iff z_M=a+ib$ |
| Affixe d'un vecteur | $z_{\overrightarrow{AB}}=z_B-z_A$ |
| Module | $|z|=\sqrt{a^2+b^2}=OM$ |
| Module et conjugué | $|z|^2=z\bar z$ |
| Distance | $AB=|z_B-z_A|$ |
| Produit / puissance | $|zz'|=|z||z'|$, $\ |z^n|=|z|^n$ |
| Ensemble $\mathbb U$ | $|z|=1\iff \frac1z=\bar z$ |
| Forme trigo | $z=r(\cos\theta+i\sin\theta)$ |
| Argument (produit) | $\arg(zz')=\arg z+\arg z'$ |
| Forme exponentielle | $z=re^{i\theta}$, $\ e^{i\theta}e^{i\theta'}=e^{i(\theta+\theta')}$ |
| Euler | $\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}2$, $\ \sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}$ |
| Moivre | $(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)$ |
| Angle de vecteurs | $\big(\overrightarrow{AB},\overrightarrow{AC}\big)=\arg\frac{z_C-z_A}{z_B-z_A}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Déterminer un argument avec le seul cosinus.** $\cos\theta=\frac12$ laisse deux
   possibilités ($\pm\frac\pi3$). Il faut **aussi** le signe du sinus (la partie imaginaire)
   pour choisir. Un argument se lit toujours sur $\cos$ **et** $\sin$.
2. **Oublier que $0$ n'a pas d'argument.** La forme trigonométrique et l'exponentielle
   n'existent que pour $z\neq0$. Ne jamais écrire $\arg(0)$.
3. **Croire que $|z+z'|=|z|+|z'|$.** FAUX en général : le module ne se répartit que sur les
   **produits, quotients et puissances**, jamais sur les sommes.
4. **Confondre module et argument dans un produit.** Sur $zz'$ : les modules se
   **multiplient**, les arguments s'**additionnent**. Additionner les modules ou multiplier
   les arguments est l'erreur classique.
5. **Se tromper de signe dans $e^{-i\theta}$.** $\overline{e^{i\theta}}=e^{-i\theta}$ et
   $\frac1{e^{i\theta}}=e^{-i\theta}$ : conjuguer ou inverser **change le signe** de l'angle,
   pas celui du module.
6. **Inverser le quotient d'angle.** L'angle $\big(\overrightarrow{AB},\overrightarrow{AC}\big)$
   est $\arg\dfrac{z_C-z_A}{z_B-z_A}$ : au numérateur l'affixe du vecteur d'**arrivée**
   ($\overrightarrow{AC}$), au dénominateur celle de **départ** ($\overrightarrow{AB}$).
   L'inverser change le signe de l'angle.
