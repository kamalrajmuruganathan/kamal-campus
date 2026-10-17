---
id: 4e-math-parallelogrammes-translations
titre: "Parallélogrammes et translations"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Parallélogrammes — propriétés et propriétés caractéristiques (5e)
  - Transformations — symétrie axiale et demi-tour (5e)
  - Angles et droites parallèles (5e)
statut: brouillon
relu_par: null
---

# Parallélogrammes et translations

> Un parallélogramme, c'est une figure. Une translation, c'est un glissement. Et
> pourtant : dire « $ABDC$ est un parallélogramme » et dire « le glissement qui mène
> $A$ en $B$ mène $C$ en $D$ », c'est dire **exactement la même chose**.

Ce chapitre ne réapprend ni l'un ni l'autre : il t'apprend à **passer de l'un à
l'autre**, parce que c'est ce passage qui te permet de démontrer.

> **Avant de commencer.** Relis la fiche **« Parallélogrammes » (5e)** : définition,
> propriétés, et surtout **propriétés caractéristiques**. Tout ce qui suit s'appuie
> dessus sans le réexpliquer. La fiche **« Transformations » (4e)** détaille, elle,
> la translation pour elle-même.

---

## 1. L'effet d'une translation — le strict nécessaire

Une translation, c'est un **glissement**. Tous les points du plan se déplacent **de
la même façon** : même **direction**, même **sens**, même **longueur**. Pour la
définir entièrement, il suffit donc de donner **un point et son image** — on dit
« la translation qui envoie $A$ sur $B$ ».

> **Exemple.** Si la translation envoie $A$ sur $B$ par « $3$ carreaux à droite,
> $2$ vers le haut », alors **tout** point subit ce même déplacement — sans
> exception. C'est ce qui la distingue du demi-tour, où le déplacement dépend de la
> position du point par rapport au centre.

---

## 2. Le lien avec le parallélogramme

<!-- schema:abdc -->
![La translation qui envoie A sur B envoie C sur D : les flèches ont même direction, même sens et même longueur, et ABDC est un parallélogramme.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU0MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjExMCwyMzAgMzUwLDIwMCA0MTAsNTAgMTcwLDgwIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMTEwIiB5MT0iMjMwIiB4Mj0iMzM4LjA5IiB5Mj0iMjAxLjQ5IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNTAsMjAwIDMzNy4zNSwxOTUuNTMgMzM4Ljg0LDIwNy40NCIgZmlsbD0iI2MwMmEyYSIvPjxsaW5lIHgxPSIxNzAiIHkxPSI4MCIgeDI9IjM5OC4wOSIgeTI9IjUxLjQ5IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MTAsNTAgMzk3LjM1LDQ1LjUzIDM5OC44NCw1Ny40NCIgZmlsbD0iI2MyNWUwMCIvPjxjaXJjbGUgY3g9IjExMCIgY3k9IjIzMCIgcj0iMy4yIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9Ijk2IiB5PSIyNDAiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PGNpcmNsZSBjeD0iMzUwIiBjeT0iMjAwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzY0IiB5PSIyMTIiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkI8L3RleHQ+PGNpcmNsZSBjeD0iNDEwIiBjeT0iNTAiIHI9IjMuMiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0MjQiIHk9IjQ2IiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5EPC90ZXh0PjxjaXJjbGUgY3g9IjE3MCIgY3k9IjgwIiByPSIzLjIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMTU2IiB5PSI3NiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48dGV4dCB4PSIyNzAiIHk9IjI5MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+T24gcGFyY291cnQgbGUgY29udG91ciBBIOKGkiBCIOKGkiBEIOKGkiBDIDogY+KAmWVzdCBBQkRDLjwvdGV4dD48L3N2Zz4=)
*La translation qui envoie A sur B envoie C sur D : les flèches ont même direction, même sens et même longueur, et ABDC est un parallélogramme.*
<!-- /schema -->

Voici la propriété qui fait tout le chapitre. Soient $A$, $B$, $C$ trois points
**non alignés**, et $D$ un point du plan.

$$\boxed{ABDC \text{ est un parallélogramme} \iff \text{la translation qui envoie } A \text{ sur } B \text{ envoie } C \text{ sur } D}$$

Le symbole $\iff$ se lit **« si et seulement si »** : les deux phrases sont vraies
en même temps, ou fausses en même temps.

> **Pourquoi c'est naturel.** La translation fait glisser $A$ vers $B$ et $C$ vers
> $D$ **du même déplacement** : $[AB]$ et $[CD]$ ont donc même longueur et même
> direction. Deux côtés parallèles **et** de même longueur : parallélogramme (5e).

### ⚠️ $ABDC$, pas $ABCD$

| Écriture | Ce que ça désigne |
|---|---|
| $ABDC$ | on parcourt le contour : $A \to B \to D \to C \to A$ ✅ |
| $ABCD$ | on traverse la figure : quadrilatère **croisé** ❌ |

Retiens le **chemin** : $A$ glisse vers $B$, $C$ vers $D$ — les côtés « glissés »
$[AB]$ et $[CD]$ sont donc **opposés** dans $ABDC$.

> **Le contrôle en trois secondes.** Dans $ABDC$, les diagonales sont $[AD]$ et
> $[BC]$. Si tu prends $[AC]$ et $[BD]$ pour des diagonales, tu t'es trompé de
> figure : ce sont des **côtés**.

### Les deux lectures d'un même parallélogramme

Un quadrilatère se lit dans les deux sens : $ABDC$ et $ACDB$ désignent **la même
figure**. D'où un deuxième résultat, gratuit :

> Si $ABDC$ est un parallélogramme, alors la translation qui envoie $A$ sur $B$
> envoie $C$ sur $D$, **et** la translation qui envoie $A$ sur $C$ envoie $B$ sur $D$.
> Un même parallélogramme fournit donc **deux** translations.

---

## 3. Propriété, ou propriété **caractéristique** ?

C'est le cœur du raisonnement attendu cette année, et tu l'as déjà rencontré en 5e.

- Une **propriété** va dans **un seul sens** : *si* la figure est un parallélogramme,
  *alors* ses côtés opposés sont égaux. Elle sert à **exploiter** ce qu'on sait.
- Une propriété **caractéristique** va dans **les deux sens**. Elle sert en plus à
  **démontrer** qu'une figure est un parallélogramme.

Le lien du § 2 est **caractéristique**. Tu l'utilises donc dans les deux sens :

| Ce que l'énoncé te donne | Ce que tu en tires |
|---|---|
| Une **translation** ($D$ est l'image de $C$) | $ABDC$ est un **parallélogramme** |
| Un **parallélogramme** $ABDC$ | l'**image** de $C$ par la translation $A \to B$ est $D$ |

> ⚠️ **Ne confonds pas avec les conservations.** « La translation conserve les
> longueurs » ne va que dans **un** sens : deux segments de même longueur ne sont pas
> forcément images l'un de l'autre — ils peuvent être de travers.

---

## 4. Démontrer : trois modèles rédigés

Toujours la même structure : **je sais que… / or… / donc…** C'est le **« or »** qui
fait la preuve — sans lui, tu constates, tu ne démontres pas.

### Démonstration A — de la translation vers les longueurs

> *$A$, $B$, $C$ sont trois points non alignés. $D$ est l'image de $C$ par la
> translation qui envoie $A$ sur $B$. Montrer que $AB = CD$ et $(AB) \parallel (CD)$.*
>
> **Je sais que** $D$ est l'image de $C$ par la translation qui envoie $A$ sur $B$.
> **Or** si la translation qui envoie $A$ sur $B$ envoie $C$ sur $D$, alors $ABDC$
> est un parallélogramme.
> **Donc** $ABDC$ est un parallélogramme.
>
> **Je sais que** $ABDC$ est un parallélogramme, où $[AB]$ et $[CD]$ sont opposés.
> **Or** dans un parallélogramme, les côtés opposés sont parallèles et de même
> longueur.
> **Donc** $AB = CD$ et $(AB) \parallel (CD)$. ∎

### Démonstration B — du parallélogramme vers la translation

> *$ABDC$ est un quadrilatère dont les diagonales $[AD]$ et $[BC]$ se coupent en leur
> milieu. Quelle est l'image de $C$ par la translation qui envoie $A$ sur $B$ ?*
>
> **Je sais que** les diagonales $[AD]$ et $[BC]$ de $ABDC$ se coupent en leur milieu.
> **Or** si les diagonales d'un quadrilatère se coupent en leur milieu, alors ce
> quadrilatère est un parallélogramme *(caractéristique vue en 5e)*.
> **Donc** $ABDC$ est un parallélogramme.
>
> **Je sais que** $ABDC$ est un parallélogramme.
> **Or** si $ABDC$ est un parallélogramme, alors la translation qui envoie $A$ sur
> $B$ envoie $C$ sur $D$.
> **Donc** l'image de $C$ est le point $D$. ∎

> **Ce qu'il faut voir ici.** L'énoncé parlait de **milieux**, la question de
> **translation** : le parallélogramme a servi de **pont**. C'est son rôle dans
> presque tous les exercices du chapitre.

### Démonstration C — changer de lecture

> *$ABDC$ est un parallélogramme. Montrer que la translation qui envoie $A$ sur $C$
> envoie $B$ sur $D$.*
>
> **Je sais que** $ABDC$ est un parallélogramme.
> **Or** un quadrilatère se lit dans les deux sens : $ABDC$ et $ACDB$ sont la même
> figure.
> **Donc** $ACDB$ est un parallélogramme.
>
> **Je sais que** $ACDB$ est un parallélogramme.
> **Or** si $ACDB$ est un parallélogramme, alors la translation qui envoie $A$ sur
> $C$ envoie $B$ sur $D$.
> **Donc** l'image de $B$ est le point $D$. ∎

---

## 5. Ce que la translation conserve — et le lien avec les angles

| Elle conserve | Ce que ça te donne |
|---|---|
| les **longueurs** | $A'B' = AB$, sans calcul |
| les **mesures d'angles** | l'image d'un angle de $37°$ est un angle de $37°$ |
| l'**alignement** | l'image d'une droite est une **droite** |
| les **aires** | l'image d'un triangle d'aire $12$ cm² a pour aire $12$ cm² |
| le **sens de lecture** | la figure n'est pas retournée, juste déplacée |

$$\boxed{\text{Par une translation, l'image d'une droite est une droite qui lui est parallèle}}$$

> C'est exactement pour ça que le parallélogramme apparaît : deux côtés parallèles
> surgissent automatiquement.

### Les angles du parallélogramme, relus avec la translation

Dans le parallélogramme $ABDC$, la translation $A \to B$ envoie $[AC]$ sur $[BD]$.

> **Ce qu'on en déduit.** $AC = BD$ et $(AC) \parallel (BD)$, sans mesurer. Et comme
> $(AC) \parallel (BD)$ avec la sécante $(AB)$, les angles $\widehat{CAB}$ et
> $\widehat{ABD}$ sont **supplémentaires** : leur somme vaut $180°$. Tu retrouves les
> angles consécutifs du parallélogramme.

---

## 6. Méthodes

### Construire l'image d'un point $M$ par la translation qui envoie $A$ sur $B$

| Support | Comment |
|---|---|
| **Sur quadrillage** | compte le déplacement de $A$ à $B$ (à droite / vers le haut), refais-le **à l'identique** à partir de $M$ |
| **Sur feuille blanche** | construis le parallélogramme $ABM'M$ : trace la parallèle à $(AB)$ passant par $M$, puis reporte au compas la longueur $AB$, **dans le sens de $A$ vers $B$** |

> ⚠️ **Le compas seul ne suffit pas.** Il donne la bonne longueur, mais deux points
> conviennent : le bon et son opposé. C'est le **sens** du glissement qui tranche.

Pour une **figure** : l'image de chaque point clé, puis relie dans le même ordre.

### Démontrer qu'un quadrilatère est un parallélogramme — choisir sa piste

| L'énoncé parle de… | Piste |
|---|---|
| une **translation**, une **image** | la caractéristique du § 2 |
| des **milieux** | les diagonales (5e) |
| des **longueurs égales** | les côtés opposés (5e) |
| un **codage de parallélisme** | les côtés parallèles (5e) |

### Pavages

Un pavage répète un même motif par translations, sans trou ni chevauchement — les
mosaïques de l'Alhambra, les dessins d'Escher. Chaque motif étant l'image du
précédent, la trame est remplie de parallélogrammes.

---

## 7. Cas particuliers et pièges

### Si $A$, $B$, $C$ sont alignés

La translation existe toujours, et $D$ aussi. Mais les quatre points sont
alignés : $ABDC$ est un **parallélogramme aplati**, sans intérieur. C'est pour cela
que l'énoncé de la propriété précise **« non alignés »**.

Et si $B$ est confondu avec $A$, rien ne bouge : chaque point est sa propre image.

### Translation ou demi-tour ?

<!-- schema:translation-ou-demi-tour -->
![Le test des segments MM′ en pointillés : parallèles et de même longueur pour une translation, tous concourants au centre O pour un demi-tour.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTAiIHkxPSIxNTAiIHgyPSIyMDAiIHkyPSIxOTAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijk0IiB5MT0iODQiIHgyPSIyNDQiIHkyPSIxMjQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MCw3MCA5NCw4NCA1MCw5OCIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjUwIiB5MT0iMTUwIiB4Mj0iNTAiIHkyPSI3MCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjAwLDExMCAyNDQsMTI0IDIwMCwxMzgiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4zNSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDAiIHkxPSIxOTAiIHgyPSIyMDAiIHkyPSIxMTAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iNTAiIHk9IjE3MSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TTwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMjAwIiB5PSIyMTEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnRyYW5zbGF0aW9uPC90ZXh0Pjx0ZXh0IHg9IjE1MCIgeT0iMjU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5maWd1cmUgZ2xpc3PDqWU8L3RleHQ+PGxpbmUgeDE9IjM1MCIgeTE9IjE1MCIgeDI9IjUzMCIgeTI9IjkwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzOTQiIHkxPSI4NCIgeDI9IjQ4NiIgeTI9IjE1NiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0NDAiIGN5PSIxMjAiIHI9IjMuMiIgZmlsbD0iIzFhN2Y0YiIvPjx0ZXh0IHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiB4PSI0NTIiIHk9IjExNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TzwvdGV4dD48cG9seWdvbiBwb2ludHM9IjM1MCw3MCAzOTQsODQgMzUwLDk4IiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMzUwIiB5MT0iMTUwIiB4Mj0iMzUwIiB5Mj0iNzAiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUzMCwxNzAgNDg2LDE1NiA1MzAsMTQyIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iNTMwIiB5MT0iOTAiIHgyPSI1MzAiIHkyPSIxNzAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzUwIiB5PSIxNzEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk08L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjUzMCIgeT0iNzkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk3igLI8L3RleHQ+PHRleHQgeD0iNDUwIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmRlbWktdG91cjwvdGV4dD48dGV4dCB4PSI0NTAiIHk9IjI1NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZmlndXJlIHRvdXJuw6llIGRlIDE4MMKwPC90ZXh0PjxsaW5lIHgxPSIzMDAiIHkxPSIyMCIgeDI9IjMwMCIgeTI9IjI1MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+)
*Le test des segments MM′ en pointillés : parallèles et de même longueur pour une translation, tous concourants au centre O pour un demi-tour.*
<!-- /schema -->

Les deux conservent longueurs, angles et aires, et envoient une droite sur une
parallèle. Voici ce qui les sépare :

| | Translation | Demi-tour de centre $O$ |
|---|---|---|
| Déterminée par | un point et son image | un point, le centre |
| Déplacement d'un point | **le même** pour tous | dépend de la position par rapport à $O$ |
| Points invariants | **aucun** (sauf translation nulle) | **un seul** : $O$ |
| Les segments $[MM']$ | **parallèles et de même longueur** | ont tous le **même milieu** $O$ |

> **Le test qui tranche** : trace deux segments $[MM']$. Concourants → demi-tour.
> Parallèles et de même longueur → translation.

---

## 8. À retenir absolument

| | |
|---|---|
| Translation | même glissement **pour tous les points** ; définie par un point et son image |
| **La caractéristique** | $ABDC$ parallélogramme $\iff$ la translation $A \to B$ envoie $C$ sur $D$ |
| Ordre des lettres | $ABDC$ — surtout pas $ABCD$ |
| Diagonales de $ABDC$ | $[AD]$ et $[BC]$ |
| Deuxième lecture | $ABDC = ACDB$ : la translation $A \to C$ envoie $B$ sur $D$ |
| Conservations | longueurs · angles · aires · alignement · sens |
| Image d'une droite | une droite **parallèle** |
| Structure d'une preuve | je sais que… / **or**… / donc… |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire $ABCD$ au lieu de $ABDC$.** C'est l'erreur numéro un du chapitre. Le
   quadrilatère $ABCD$ est croisé : la démonstration entière tombe.
2. **Se tromper de diagonales.** Dans $ABDC$, ce sont $[AD]$ et $[BC]$. Beaucoup
   d'élèves écrivent $[AC]$ et $[BD]$ — qui sont des **côtés**.
3. **Utiliser une conservation comme une caractéristique.** Deux segments de même
   longueur ne sont pas forcément images l'un de l'autre : ça ne va que dans un sens.
4. **Oublier le sens du glissement** en construisant l'image : reporter la longueur
   $AB$ du mauvais côté donne le point symétrique, pas l'image.
5. **Confondre translation et demi-tour**, puisque les deux conservent tout. Regarde
   les segments $[MM']$ : parallèles, ou concourants ?
6. **Constater au lieu de démontrer.** Sans le « or… », il n'y a pas de preuve — et
   une mesure prise sur la figure n'en est pas une non plus.
