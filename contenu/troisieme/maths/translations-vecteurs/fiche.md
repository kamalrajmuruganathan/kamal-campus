---
id: 3e-math-translations-vecteurs
titre: "Translations et vecteurs"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Parallélogrammes — propriétés caractéristiques et diagonales (5e)
  - Symétrie axiale et demi-tour (5e)
  - Translation — effet et propriétés de conservation (4e)
  - Lien translation / parallélogramme (4e)
statut: brouillon
relu_par: null
---

# Translations et vecteurs

> En 4e, tu savais **reconnaître** une translation : un glissement, le même pour tous
> les points. Cette année, tu apprends à l'**écrire**. Un déplacement — direction,
> sens, longueur — devient un objet qu'on note, qu'on compare, et même qu'on
> **additionne** : le **vecteur**. C'est l'outil que tu utiliseras jusqu'au lycée.

---

## 1. La translation, enfin définie

<!-- schema:definition -->
![L’image de M par la translation qui transforme A en B est le point M′ tel que ABM′M soit un parallélogramme.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjExMCwyMzAgMzUwLDIwMCA0MTAsNTAgMTcwLDgwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMTEwIiB5MT0iMjMwIiB4Mj0iMzM4LjA5IiB5Mj0iMjAxLjQ5IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNTAsMjAwIDMzNy4zNSwxOTUuNTMgMzM4Ljg0LDIwNy40NCIgZmlsbD0iI2MwMmEyYSIvPjxsaW5lIHgxPSIxNzAiIHkxPSI4MCIgeDI9IjM5OC4wOSIgeTI9IjUxLjQ5IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MTAsNTAgMzk3LjM1LDQ1LjUzIDM5OC44NCw1Ny40NCIgZmlsbD0iI2MyNWUwMCIvPjxjaXJjbGUgY3g9IjExMCIgY3k9IjIzMCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9Ijk2IiB5PSIyNDAiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PGNpcmNsZSBjeD0iMzUwIiBjeT0iMjAwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzY0IiB5PSIyMTIiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkI8L3RleHQ+PGNpcmNsZSBjeD0iNDEwIiBjeT0iNTAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0MjQiIHk9IjQ2IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5N4oCyPC90ZXh0PjxjaXJjbGUgY3g9IjE3MCIgY3k9IjgwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTU2IiB5PSI3NiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48dGV4dCB4PSIyNzAiIHk9IjI5MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUJN4oCyTSBlc3QgdW4gcGFyYWxsw6lsb2dyYW1tZTwvdGV4dD48L3N2Zz4=)
*L’image de M par la translation qui transforme A en B est le point M′ tel que ABM′M soit un parallélogramme.*
<!-- /schema -->

En 4e, la translation était décrite par son **effet** : tout glisse pareil. C'était
une image. Voici maintenant la **définition**, point par point.

> **Définition.** Soient $A$ et $B$ deux points. La **translation qui transforme
> $A$ en $B$** associe à tout point $M$ du plan l'unique point $M'$ tel que
> $$\boxed{ABM'M \text{ est un parallélogramme}}$$

Autrement dit : pour trouver l'image de $M$, tu **fermes le parallélogramme**.

> **⚠️ L'ordre des lettres.** C'est $ABM'M$ : on parcourt le contour
> $A \to B \to M' \to M \to A$. Les côtés « glissés » $[AB]$ et $[MM']$ sont
> **opposés** dans la figure, jamais consécutifs.

> **Exemple.** Si $ABM'M$ est un parallélogramme, alors $MM' = AB$ et
> $(MM') \parallel (AB)$ : on retrouve exactement le glissement de la 4e, et toutes
> les conservations (longueurs, angles, aires, alignement) restent vraies.

---

## 2. Le vecteur

Une même translation peut être décrite par une infinité de couples de points : la
translation qui transforme $A$ en $B$ est aussi celle qui transforme $M$ en $M'$.
Ce qui compte, ce n'est donc pas le couple choisi, c'est le **déplacement**
lui-même. On lui donne un nom : le **vecteur**.

> **Définition.** Le **vecteur** $\overrightarrow{AB}$ est le déplacement qui mène de
> $A$ à $B$. Il est entièrement décrit par **trois** données :

| Caractéristique | Ce que c'est |
|---|---|
| **Direction** | celle de la droite $(AB)$ |
| **Sens** | de $A$ vers $B$ |
| **Longueur** | la longueur $AB$ |

$A$ est l'**origine** du vecteur, $B$ son **extrémité** ; on le dessine par une
flèche de $A$ vers $B$. On dit désormais « la **translation de vecteur**
$\overrightarrow{AB}$ » — c'est la même chose que « la translation qui transforme
$A$ en $B$ ».

> ⚠️ **Direction et sens ne sont pas la même chose.** La direction, c'est la droite
> (« celle de $(AB)$ »). Le sens, c'est le choix parmi les deux possibles sur cette
> droite (« vers la droite »). Deux vecteurs peuvent avoir la même direction et des
> sens **opposés**.

---

## 3. Deux vecteurs égaux

C'est le cœur du chapitre.

> **Définition.** Deux vecteurs sont **égaux** lorsqu'ils ont **même direction,
> même sens et même longueur**.

Les trois conditions à la fois : il en manque une, l'égalité est fausse.

### La traduction géométrique

<!-- schema:vecteurs-egaux -->
![Les vecteurs AB et CD sont égaux : ABDC est un parallélogramme, et ses diagonales AD et BC ont le même milieu.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjExMCwyMzAgMzUwLDIwMCA0MTAsNTAgMTcwLDgwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMTEwIiB5MT0iMjMwIiB4Mj0iNDEwIiB5Mj0iNTAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM1MCIgeTE9IjIwMCIgeDI9IjE3MCIgeTI9IjgwIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxODAuNzEiIHkxPSIxODEuNzQiIHgyPSIxODkuMjkiIHkyPSIxODguMjYiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMzAuNzEiIHkxPSI5MS43NCIgeDI9IjMzOS4yOSIgeTI9Ijk4LjI2IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzA1Ljk3IiB5MT0iMTc2LjY2IiB4Mj0iMzA4LjE5IiB5Mj0iMTY2LjEyIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzAxLjgxIiB5MT0iMTczLjg4IiB4Mj0iMzA0LjAzIiB5Mj0iMTYzLjM0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjE1Ljk3IiB5MT0iMTE2LjY2IiB4Mj0iMjE4LjE5IiB5Mj0iMTA2LjEyIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjExLjgxIiB5MT0iMTEzLjg4IiB4Mj0iMjE0LjAzIiB5Mj0iMTAzLjM0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIyNjAiIGN5PSIxNDAiIHI9IjMuMiIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSIxMTAiIHkxPSIyMzAiIHgyPSIzMzguMDkiIHkyPSIyMDEuNDkiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM1MCwyMDAgMzM3LjM1LDE5NS41MyAzMzguODQsMjA3LjQ0IiBmaWxsPSIjYzAyYTJhIi8+PGxpbmUgeDE9IjE3MCIgeTE9IjgwIiB4Mj0iMzk4LjA5IiB5Mj0iNTEuNDkiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQxMCw1MCAzOTcuMzUsNDUuNTMgMzk4Ljg0LDU3LjQ0IiBmaWxsPSIjYzI1ZTAwIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMjMwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iOTYiIHk9IjI0MCIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48Y2lyY2xlIGN4PSIzNTAiIGN5PSIyMDAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIzNjQiIHk9IjIxMiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QjwvdGV4dD48Y2lyY2xlIGN4PSI0MTAiIGN5PSI1MCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjQyNCIgeT0iNDYiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkQ8L3RleHQ+PGNpcmNsZSBjeD0iMTcwIiBjeT0iODAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSIxNTYiIHk9Ijc2IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjI3MCIgeT0iMjkwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sZXMgZGlhZ29uYWxlcyBbQURdIGV0IFtCQ10gb250IGxlIG3Dqm1lIG1pbGlldTwvdGV4dD48L3N2Zz4=)
*Les vecteurs AB et CD sont égaux : ABDC est un parallélogramme, et ses diagonales AD et BC ont le même milieu.*
<!-- /schema -->

$$\boxed{\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC \text{ est un parallélogramme}}$$

Le symbole $\iff$ se lit **« si et seulement si »** : les deux phrases sont vraies
ensemble, ou fausses ensemble. Tu peux donc t'en servir dans **les deux sens** :
pour démontrer une égalité de vecteurs, comme pour démontrer qu'une figure est un
parallélogramme.

> **⚠️ $ABDC$, pas $ABCD$ !** C'est le piège numéro un de la 3e.
>
> | Écriture | Ce que ça donne |
> |---|---|
> | $ABDC$ | contour $A \to B \to D \to C \to A$ ✅ |
> | $ABCD$ | quadrilatère **croisé** ❌ |
>
> **Le réflexe qui sauve** : $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont les
> deux flèches, donc $[AB]$ et $[CD]$ sont des **côtés opposés**. Dans $ABDC$, les
> **diagonales** sont $[AD]$ et $[BC]$.
>
> **Le contrôle de secours** : $\overrightarrow{AB} = \overrightarrow{CD}$ équivaut
> aussi à « $[AD]$ et $[BC]$ ont le même milieu ».

> **Exemple.** $ABDC$ est un parallélogramme. Alors $\overrightarrow{AB} =
> \overrightarrow{CD}$, mais aussi $\overrightarrow{AC} = \overrightarrow{BD}$ —
> un parallélogramme donne **deux** égalités de vecteurs, une par paire de côtés
> opposés.

Remarque : $\overrightarrow{AB} = \overrightarrow{CD}$ ne dit **pas** que $A = C$ et
$B = D$. Un vecteur ne retient que le déplacement, pas l'endroit d'où on part — c'est
ce qui le distingue d'un segment.

---

## 4. Vecteur nul, vecteurs opposés

### Le vecteur nul

$$\overrightarrow{AA} = \vec{0}$$

C'est le déplacement qui ne déplace rien : la translation de vecteur $\vec{0}$ laisse
chaque point à sa place. Sa longueur vaut $0$, et sa direction n'est pas définie.

> **Exemple.** $\overrightarrow{MM} = \vec 0$ pour n'importe quel point $M$ : tous les
> vecteurs nuls sont égaux entre eux.

### L'opposé d'un vecteur

$$\boxed{\overrightarrow{BA} = -\overrightarrow{AB}}$$

Même direction, même longueur, mais **sens contraire** : c'est le déplacement qui
défait le premier.

> **Exemple.** Si $\overrightarrow{AB}$ mesure $5$ cm vers la droite, alors
> $\overrightarrow{BA}$ mesure $5$ cm vers la gauche.

---

## 5. Additionner deux vecteurs

<!-- schema:somme -->
![À gauche, la relation de Chasles : aller de A à B puis de B à C revient à aller de A à C. À droite, pour deux vecteurs de même origine, on ferme le parallélogramme ABCD.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDAiIHkxPSIyMDAiIHgyPSIxODAuNjMiIHkyPSI4Ny41IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxOTAsODAgMTc2Ljg4LDgyLjgxIDE4NC4zOCw5Mi4xOCIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIxOTAiIHkxPSI4MCIgeDI9IjI5MS41MSIgeTI9IjE4MS41MSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzAwLDE5MCAyOTUuNzYsMTc3LjI3IDI4Ny4yNywxODUuNzYiIGZpbGw9IiNjMjVlMDAiLz48bGluZSB4MT0iNDAiIHkxPSIyMDAiIHgyPSIyODguMDEiIHkyPSIxOTAuNDYiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwMCwxOTAgMjg3Ljc4LDE4NC40NyAyODguMjQsMTk2LjQ2IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjMwIiB5PSIyMjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjE5MCIgeT0iNjgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjMxNCIgeT0iMTk2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjEyMy45MiIgeT0iMjQ2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BQjwvdGV4dD48bGluZSB4MT0iMTE0LjM2IiB5MT0iMjMwLjMyIiB4Mj0iMTI5LjQ4IiB5Mj0iMjMwLjMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEzNS40OCwyMzAuMzIgMTI5LjQ4LDIyNy4zMiAxMjkuNDgsMjMzLjMyIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMTQ2Ljk2IiB5PSIyNDYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPis8L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIyNDYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkJDPC90ZXh0PjxsaW5lIHgxPSIxNjAuNDQiIHkxPSIyMzAuMzIiIHgyPSIxNzUuNTYiIHkyPSIyMzAuMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTgxLjU2LDIzMC4zMiAxNzUuNTYsMjI3LjMyIDE3NS41NiwyMzMuMzIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxOTMuMDQiIHk9IjI0NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+PTwvdGV4dD48dGV4dCB4PSIyMTYuMDgiIHk9IjI0NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QUM8L3RleHQ+PGxpbmUgeDE9IjIwNi41MiIgeTE9IjIzMC4zMiIgeDI9IjIyMS42NCIgeTI9IjIzMC4zMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMjcuNjQsMjMwLjMyIDIyMS42NCwyMjcuMzIgMjIxLjY0LDIzMy4zMiIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSIzNDAiIHkxPSIyMCIgeDI9IjM0MCIgeTI9IjI1MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU0MCIgeTE9IjIwMCIgeDI9IjYwMCIgeTI9IjkwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NDAiIHkxPSI5MCIgeDI9IjYwMCIgeTI9IjkwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzODAiIHkxPSIyMDAiIHgyPSI1MjgiIHkyPSIyMDAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU0MCwyMDAgNTI4LDE5NCA1MjgsMjA2IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjIwMCIgeDI9IjQzNC4yNSIgeTI9IjEwMC41MyIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDQwLDkwIDQyOC45OSw5Ny42NiA0MzkuNTIsMTAzLjQxIiBmaWxsPSIjYzI1ZTAwIi8+PGxpbmUgeDE9IjM4MCIgeTE9IjIwMCIgeDI9IjU4OS4yNyIgeTI9Ijk1LjM3IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDAsOTAgNTg2LjU4LDkwIDU5MS45NSwxMDAuNzMiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzcwIiB5PSIyMjAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjU0NiIgeT0iMjIwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5CPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI2MTIiIHk9Ijg0IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0MjgiIHk9IjgyIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0Pjx0ZXh0IHg9IjQ1My45MiIgeT0iMjQ2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BQjwvdGV4dD48bGluZSB4MT0iNDQ0LjM2IiB5MT0iMjMwLjMyIiB4Mj0iNDU5LjQ4IiB5Mj0iMjMwLjMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ2NS40OCwyMzAuMzIgNDU5LjQ4LDIyNy4zMiA0NTkuNDgsMjMzLjMyIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNDc2Ljk2IiB5PSIyNDYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPis8L3RleHQ+PHRleHQgeD0iNTAwIiB5PSIyNDYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkFEPC90ZXh0PjxsaW5lIHgxPSI0OTAuNDQiIHkxPSIyMzAuMzIiIHgyPSI1MDUuNTYiIHkyPSIyMzAuMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTExLjU2LDIzMC4zMiA1MDUuNTYsMjI3LjMyIDUwNS41NiwyMzMuMzIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI1MjMuMDQiIHk9IjI0NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+PTwvdGV4dD48dGV4dCB4PSI1NDYuMDgiIHk9IjI0NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QUM8L3RleHQ+PGxpbmUgeDE9IjUzNi41MiIgeTE9IjIzMC4zMiIgeDI9IjU1MS42NCIgeTI9IjIzMC4zMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1NTcuNjQsMjMwLjMyIDU1MS42NCwyMjcuMzIgNTUxLjY0LDIzMy4zMiIgZmlsbD0iIzE2MjMyZSIvPjwvc3ZnPg==)
*À gauche, la relation de Chasles : aller de A à B puis de B à C revient à aller de A à C. À droite, pour deux vecteurs de même origine, on ferme le parallélogramme ABCD.*
<!-- /schema -->

### L'idée : enchaîner deux translations

Applique la translation de vecteur $\overrightarrow{AB}$, puis celle de vecteur
$\overrightarrow{BC}$. Tu es parti de $A$, tu es arrivé en $C$ : le résultat est la
translation de vecteur $\overrightarrow{AC}$. On écrit cet enchaînement comme une
**somme**.

### La relation de Chasles

$$\boxed{\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}}$$

> **La règle en un mot** : l'extrémité du premier doit être l'origine du second — et
> ce point commun **disparaît**.

> **Exemple.** $\overrightarrow{EF} + \overrightarrow{FG} = \overrightarrow{EG}$ ·
> $\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec 0$, ce qui
> redit que $\overrightarrow{BA}$ est l'opposé de $\overrightarrow{AB}$.

> ⚠️ $\overrightarrow{AB} + \overrightarrow{CD}$ ne se simplifie **pas** : il n'y a
> pas de point commun. Il faut d'abord remplacer $\overrightarrow{CD}$ par un vecteur
> qui lui est **égal** et qui part de $B$.

### Additionner deux vecteurs de même origine

Si les deux vecteurs partent du même point, on ferme le parallélogramme :

$$\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC} \quad
\text{où } ABCD \text{ est un parallélogramme}$$

> **Pourquoi ça marche.** $ABCD$ parallélogramme donne $\overrightarrow{AD} =
> \overrightarrow{BC}$. Donc $\overrightarrow{AB} + \overrightarrow{AD} =
> \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ par Chasles.
>
> ⚠️ **Ici l'ordre des lettres est $ABCD$**, parce que les deux vecteurs partent du
> **même point**. Ce n'est pas la même situation qu'au § 3.

---

## 6. Méthodes

### Construire l'image de $M$ par la translation de vecteur $\overrightarrow{AB}$

| Support | Comment faire |
|---|---|
| **Sur quadrillage** | compte le déplacement de $A$ vers $B$, refais-le à l'identique à partir de $M$ |
| **Sur feuille blanche** | ferme le parallélogramme $ABM'M$ : parallèle à $(AB)$ par $M$, puis report de $AB$ au compas, **dans le sens $A \to B$** |

> ⚠️ Le compas donne la bonne longueur mais **deux** points possibles. C'est le
> **sens** qui tranche.

### Démontrer que deux vecteurs sont égaux

Tu as deux voies. Choisis selon ce que l'énoncé te donne.

| L'énoncé te donne… | Tu démontres… |
|---|---|
| un **parallélogramme** $ABDC$ | $\overrightarrow{AB} = \overrightarrow{CD}$ directement |
| des **milieux**, des **longueurs**, du **parallélisme** | d'abord que $ABDC$ est un parallélogramme (5e), puis l'égalité |
| une **translation** ($D$ image de $C$) | $\overrightarrow{CD} = \overrightarrow{AB}$, par définition |

### Démontrer qu'un quadrilatère est un parallélogramme

C'est le sens inverse, et il rend le vecteur vraiment utile :

> **Modèle rédigé.** *Montrer que $ABDC$ est un parallélogramme.*
>
> **Je sais que** $\overrightarrow{AB} = \overrightarrow{CD}$.
> **Or** si $\overrightarrow{AB} = \overrightarrow{CD}$, alors $ABDC$ est un
> parallélogramme.
> **Donc** $ABDC$ est un parallélogramme. ∎

### Simplifier une somme de vecteurs

1. Repère les points communs (extrémité de l'un = origine du suivant).
2. Applique Chasles, le point commun disparaît.
3. Recommence tant que c'est possible.

> **Exemple.** $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD}
> = \overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}$.
>
> Et $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA}
> = \overrightarrow{AC} + \overrightarrow{CA} = \overrightarrow{AA} = \vec 0$ :
> une somme qui **revient au départ** vaut le vecteur nul.

---

## 7. Cas particuliers et pièges

### Quand $A$, $B$ et $C$ sont alignés

L'égalité $\overrightarrow{AB} = \overrightarrow{CD}$ garde tout son sens, mais la
figure $ABDC$ est un parallélogramme **aplati** : les quatre points sont sur une même
droite, il n'y a plus d'intérieur. C'est pourquoi l'énoncé de la propriété suppose en
général les points **non alignés**.

### Quand $A = B$

La translation de vecteur $\overrightarrow{AA} = \vec 0$ ne bouge rien : chaque point
est sa propre image. C'est la seule translation qui possède des points invariants —
et elle les a **tous**.

### Vecteur, segment, droite : trois objets différents

| Objet | Notation | $A$ et $B$ échangés ? |
|---|---|---|
| Droite | $(AB)$ | même objet |
| Segment | $[AB]$ | même objet |
| Longueur | $AB$ | même nombre |
| **Vecteur** | $\overrightarrow{AB}$ | **objet opposé** |

### Égalité de longueurs $\ne$ égalité de vecteurs

$AB = CD$ ne donne **pas** $\overrightarrow{AB} = \overrightarrow{CD}$ : deux segments
de même longueur peuvent être de travers l'un par rapport à l'autre. Il faut aussi la
direction **et** le sens.

---

## 8. À retenir absolument

| | |
|---|---|
| Définition de la translation | image $M'$ de $M$ : $ABM'M$ parallélogramme |
| Vecteur | direction · sens · longueur |
| Égalité | $\overrightarrow{AB} = \overrightarrow{CD} \iff ABDC$ parallélogramme |
| Ordre des lettres | $ABDC$ — **jamais** $ABCD$ |
| Diagonales de $ABDC$ | $[AD]$ et $[BC]$ |
| Vecteur nul | $\overrightarrow{AA} = \vec 0$ |
| Opposé | $\overrightarrow{BA} = -\overrightarrow{AB}$ |
| Chasles | $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ |
| Somme de même origine | $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$, $ABCD$ parallélogramme |
| Un aller-retour | $\overrightarrow{AB} + \overrightarrow{BA} = \vec 0$ |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire $ABCD$ au lieu de $ABDC$.** L'erreur numéro un du chapitre.
   $\overrightarrow{AB} = \overrightarrow{CD}$ donne le parallélogramme $ABDC$ ;
   $ABCD$ est un quadrilatère **croisé**, et toute la démonstration s'effondre.
   Contrôle : dans $ABDC$, les diagonales sont $[AD]$ et $[BC]$ — si tu écris $[AC]$
   et $[BD]$, tu t'es trompé de figure.
2. **Confondre direction et sens.** $\overrightarrow{AB}$ et $\overrightarrow{BA}$ ont
   la même direction ; ils ne sont **pas** égaux, ils sont opposés.
3. **Croire que $\overrightarrow{AB} = \overrightarrow{CD}$ dès que $AB = CD$.**
   L'égalité de deux vecteurs exige les **trois** conditions, pas seulement la
   longueur.
4. **Appliquer Chasles sans point commun.** $\overrightarrow{AB} +
   \overrightarrow{CD}$ ne se simplifie pas. Il faut d'abord déplacer l'un des deux.
5. **Se tromper de point qui disparaît.** Dans $\overrightarrow{AB} +
   \overrightarrow{BC}$, c'est $B$ qui saute : le résultat est $\overrightarrow{AC}$,
   surtout pas $\overrightarrow{CA}$.
6. **Traiter le vecteur comme un segment.** $[AB]$ et $[BA]$ sont le même segment,
   $\overrightarrow{AB}$ et $\overrightarrow{BA}$ sont deux vecteurs différents.
7. **Oublier le sens en construisant une image** : reporter $AB$ au compas du mauvais
   côté donne le symétrique, pas l'image.
