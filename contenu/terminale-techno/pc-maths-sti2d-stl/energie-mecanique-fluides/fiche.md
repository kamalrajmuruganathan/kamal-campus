---
id: tale-sti2d-pc-energie-mecanique-fluides
titre: "Énergie mécanique : dynamique, rotation et fluides"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 15
prerequis:
  - Énergie : conversions, chaînes et rendement (Première STI2D/STL — chapitre energie, même parcours)
  - Principe d'inertie et notion de force (Seconde)
  - Mesure et incertitudes (terminale) — pour l'écriture des résultats
statut: brouillon
relu_par: null
---

# Énergie mécanique : dynamique, rotation et fluides

> Un moteur qui entraîne un tapis roulant, un vérin hydraulique qui lève une
> voiture : quelle **force** faut-il ? quel **couple**, quelle **puissance** ?
> quelle **pression** dans le circuit ? Ce chapitre te donne les trois outils —
> deuxième loi de Newton, moment d'une force, principe fondamental de
> l'hydrostatique — et les relie à l'énergie et au rendement vus en première.

---

## 1. Les forces : bilan avant calcul

Une **force** modélise une action mécanique exercée sur un système. Elle se
caractérise par sa **direction**, son **sens** et sa **valeur**, en **newtons
(N)**. Celles que tu rencontreras sans cesse : le **poids**
$\boxed{P = m\,g}$ (vertical, vers le bas, $g \approx 9{,}81$ N·kg⁻¹), la
**réaction d'un support** (perpendiculaire au support s'il est lisse), la
**tension d'un câble** (le long du câble), les **frottements** (opposés au
mouvement).

> **Exemple.** Poids d'une charge de $50$ kg :
> $P = 50 \times 9{,}81 \approx 491$ N. Retiens l'ordre de grandeur : $1$ kg
> « pèse » environ $10$ N.

**Tout calcul de dynamique commence par un bilan des forces** extérieures
s'exerçant sur le système choisi : une force oubliée, et tout est faux.

---

## 2. La deuxième loi de Newton (approche STI2D/STL)

### L'énoncé à connaître

> **Deuxième loi de Newton.** Pour un système de masse $m$ constante, la
> **résultante** des forces extérieures (leur somme, en tenant compte des sens)
> et l'accélération sont liées par :

$$\boxed{F_{\text{résultante}} = m \times a}$$

avec $F_{\text{résultante}}$ en **newtons (N)**, $m$ en **kilogrammes (kg)** et
$a$ en **m·s⁻²**.

En STI2D/STL, on l'applique **le long d'un axe** (horizontal ou vertical) : les
forces dans le sens du mouvement comptent positivement, celles qui s'y opposent
négativement. Pas de formalisme vectoriel lourd — mais les **sens** doivent
être respectés.

> **Exemple.** Un chariot de convoyeur de masse $m = 250$ kg est tiré
> horizontalement avec une force motrice de $650$ N, les frottements valant
> $150$ N. Résultante : $F = 650 - 150 = 500$ N, donc
> $a = \dfrac{F}{m} = \dfrac{500}{250} = 2{,}0$ m·s⁻².

### Deux cas limites à reconnaître

- **Équilibre (statique)** : système immobile ou en mouvement rectiligne
  uniforme $\Rightarrow$ $F_{\text{résultante}} = 0$, les forces se compensent.
  Pour une charge suspendue immobile, la tension du câble vaut le poids.
- **Chute** sous le seul poids : $a = g$, quelle que soit la masse.

> ⚠️ **Newtons obligatoires.** Une masse en kg n'est **pas** une force. Le
> passage masse → force se fait toujours par $P = mg$. « Une charge de
> $200$ kg » exerce sur son câble une tension d'environ $1{,}96 \times 10^3$ N,
> pas de « $200$ N ».

---

## 3. Le moment d'une force : faire tourner

<!-- schema:moment-cle -->
![Clé de 25 cm poussée perpendiculairement au bout du manche avec 200 N : le moment par rapport à l'axe de l'écrou vaut 50 N·m.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjE1NS45OCwxODUgMTMwLDIwMCAxMDQuMDIsMTg1IDEwNC4wMiwxNTUgMTMwLDE0MCAxNTUuOTgsMTU1IiBmaWxsPSIjY2ZkNmRlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHJlY3QgeD0iMTU2IiB5PSIxNTgiIHdpZHRoPSIyOTQiIGhlaWdodD0iMjQiIHJ4PSIxMCIgZmlsbD0iIzlhYTViMSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjEzMCIgY3k9IjE3MCIgcj0iNSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjExNiIgeT0iMjIyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5heGUgZGUgcm90YXRpb24gKMOpY3JvdSk8L3RleHQ+PGxpbmUgeDE9IjQ0MCIgeTE9IjE3MCIgeDI9IjQ0MCIgeTI9IjY0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMy40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0MCw1MCA0MzMsNjQgNDQ3LDY0IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iNDUyIiB5PSI3MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5GID0gMjAwIE48L3RleHQ+PHBhdGggZD0iTSA0NDAgMTQ2IEwgNDI4IDE0NiBMIDQyOCAxNTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iMTMwIiB5MT0iMjAwIiB4Mj0iNDMyIiB5Mj0iMjAwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0MCwyMDAgNDMyLDE5NiA0MzIsMjA0IiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjQ0MCIgeTE9IjIwMCIgeDI9IjEzOCIgeTI9IjIwMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMzAsMjAwIDEzOCwyMDQgMTM4LDE5NiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjMwNSIgeT0iMjIyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5icmFzIGRlIGxldmllciBkID0gMjUgY208L3RleHQ+PHBhdGggZD0iTSA4NCAxOTAgUSA3NCAxMzAgMTE2LjIyIDExOS44NyIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMjQsMTE4IDExMy4xMSwxMTUuNDcgMTE1LjQ0LDEyNS4yIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iNzAiIHk9IjEwOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cm90YXRpb248L3RleHQ+PHRleHQgeD0iMzEwIiB5PSIzNCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TSA9IEYgw5cgZCA9IDIwMCDDlyAwLDI1ID0gNTAgTsK3bTwvdGV4dD48L3N2Zz4=)
*Clé de 25 cm poussée perpendiculairement au bout du manche avec 200 N : le moment par rapport à l'axe de l'écrou vaut 50 N·m.*
<!-- /schema -->

Pousser une porte près des gonds ou près de la poignée : même force, effet
totalement différent. Ce qui fait tourner, ce n'est pas la force seule, c'est
son **moment**.

> **Définition.** Le **moment** d'une force $F$ par rapport à un axe de
> rotation est :

$$\boxed{M = F \times d}$$

| Symbole | Grandeur | Unité SI |
|---|---|---|
| $M$ | moment de la force | **newton-mètre (N·m)** |
| $F$ | valeur de la force | newton (N) |
| $d$ | **bras de levier** | mètre (m) |

Le **bras de levier** $d$ est la distance entre l'axe de rotation et la
**droite d'action** de la force, mesurée **perpendiculairement** à cette
droite. La formule $M = F \times d$ vaut telle quelle quand la force est
perpendiculaire au levier — le cas standard des exercices.

> **Exemple.** Tu serres un écrou avec une clé de $25$ cm, en poussant
> perpendiculairement au bout du manche avec $F = 200$ N :
> $M = 200 \times 0{,}25 = 50$ N·m. Une rallonge qui double la longueur divise
> la force nécessaire par deux : **c'est le principe du bras de levier**.

> ⚠️ **N·m, pas J.** Le moment a la même équation aux dimensions qu'une
> énergie, mais ce n'est **pas** une énergie : on écrit toujours son unité
> **N·m**, jamais « J ». Sur ta copie, un moment en joules est compté faux.

**Condition d'équilibre en rotation** : un système ne tourne pas si les moments
qui le font tourner dans un sens compensent ceux qui le font tourner dans
l'autre. C'est l'équilibre de la balançoire : $F_1 d_1 = F_2 d_2$.

---

## 4. Rotation : vitesse angulaire, couple, puissance

### La vitesse angulaire ω

Un solide en rotation (arbre moteur, roue, poulie) tourne à la **vitesse
angulaire** $\omega$, en **radians par seconde (rad/s)**. Les moteurs, eux,
s'affichent en **tours par minute** ($N$, en tr/min). Un tour vaut $2\pi$ rad
et une minute $60$ s, d'où la conversion :

$$\boxed{\omega = \frac{2\pi N}{60}} \qquad \omega \text{ en rad/s},\ N \text{ en tr/min}$$

> **Exemple.** Un moteur asynchrone tourne à $N = 1500$ tr/min :
> $\omega = \dfrac{2\pi \times 1500}{60} \approx 157$ rad/s.

Un point situé à la distance $r$ de l'axe avance à la vitesse linéaire
$v = r\,\omega$ ($r$ en m, $v$ en m·s⁻¹) — c'est le lien poulie/câble ou
roue/sol.

### Le couple

Un moteur exerce sur son arbre un ensemble d'actions dont l'effet est une pure
rotation : on l'appelle le **couple** moteur, noté $M$ (ou $C$), en **N·m**,
comme un moment. Sur la plaque signalétique d'un moteur, le « couple nominal »
est cette grandeur.

### La puissance d'un couple : la formule reine du chapitre

> **Propriété.** La puissance mécanique transmise par un couple $M$ à un arbre
> tournant à la vitesse angulaire $\omega$ est :

$$\boxed{P = M \times \omega}$$

avec $P$ en **watts (W)**, $M$ en **N·m** et $\omega$ en **rad/s**
obligatoirement. C'est l'analogue en rotation de $P = F \times v$ en
translation.

> **Exemple.** Couple $M = 12$ N·m à $1500$ tr/min :
> $\omega \approx 157$ rad/s, donc $P = 12 \times 157 \approx 1{,}9 \times
> 10^{3}$ W $\approx 1{,}9$ kW.

> ⚠️ **Le piège n°1 du chapitre** : injecter $N$ en tr/min directement dans
> $P = M\omega$. Avec l'exemple ci-dessus : $12 \times 1500 = 18\,000$ « W »,
> presque dix fois trop. **Toujours convertir en rad/s d'abord.**

### Retour à l'énergie et au rendement (première)

Tout ce que tu as vu en première s'applique : $E = P \times \Delta t$ (en J si
$\Delta t$ est en s) et $\eta = \dfrac{P_{\text{utile}}}{P_{\text{absorbée}}} < 1$.
Un moteur de rendement $0{,}85$ qui fournit $1{,}9$ kW mécaniques absorbe
$\dfrac{1{,}9}{0{,}85} \approx 2{,}2$ kW électriques.

---

## 5. Statique des fluides : la pression

> **Définition.** Un fluide (liquide ou gaz) au repos exerce sur toute surface
> une force **perpendiculaire** à celle-ci. La **pression** est la force
> exercée par unité de surface :

$$\boxed{p = \frac{F}{S}}$$

avec $p$ en **pascals (Pa)**, $F$ en **newtons (N)** et $S$ en **m²** ; par
définition $1$ Pa $= 1$ N·m⁻². Unités usuelles à savoir convertir :

$$1\ \text{bar} = 10^{5}\ \text{Pa} \qquad p_{\text{atm}} \approx 1{,}013 \times 10^{5}\ \text{Pa} \approx 1\ \text{bar}$$

> **Exemple.** Une force de $600$ N répartie sur un piston de section
> $S = 3{,}0$ cm² $= 3{,}0 \times 10^{-4}$ m² :
> $p = \dfrac{600}{3{,}0 \times 10^{-4}} = 2{,}0 \times 10^{6}$ Pa $= 20$ bar.

> ⚠️ **Conversion des surfaces** : $1$ cm² $= 10^{-4}$ m² (et non $10^{-2}$).
> C'est l'erreur de conversion la plus fréquente du chapitre : elle fausse le
> résultat d'un facteur $100$.

On distingue la **pression absolue** (comptée depuis le vide) et la **pression
relative** (comptée depuis la pression atmosphérique) : c'est la relative
qu'affiche un manomètre de gonflage.

---

## 6. Le principe fondamental de l'hydrostatique

<!-- schema:hydrostatique -->
![Dans l'eau, la pression augmente d'environ 1 bar tous les 10 m de profondeur, en partant de la pression atmosphérique à la surface.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzEwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI0MCIgeT0iNjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiByeD0iMCIgZmlsbD0iI2NmZTRmNyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxsaW5lIHgxPSI0MCIgeTE9IjYwIiB4Mj0iMzQwIiB5Mj0iNjAiIHN0cm9rZT0iIzZhYTNkOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDQwIDQwIEwgNDAgMjYwIEwgMzQwIDI2MCBMIDM0MCA0MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxOTAiIHk9IjUwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5haXIgOiBwIGF0bSDiiYggMSwwIGJhcjwvdGV4dD48Y2lyY2xlIGN4PSIxOTAiIGN5PSI2MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIzNDAiIHkxPSI2MCIgeDI9IjM2MCIgeTI9IjYwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzY2IiB5PSI2NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij4wIG08L3RleHQ+PHRleHQgeD0iNDMwIiB5PSI2NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5wIOKJiCAxLDAgYmFyPC90ZXh0PjxjaXJjbGUgY3g9IjE5MCIgY3k9IjE0MCIgcj0iNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIzNDAiIHkxPSIxNDAiIHgyPSIzNjAiIHkyPSIxNDAiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNjYiIHk9IjE0NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij4xMCBtPC90ZXh0Pjx0ZXh0IHg9IjQzMCIgeT0iMTQ1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPnAg4omIIDIsMCBiYXI8L3RleHQ+PGNpcmNsZSBjeD0iMTkwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjM0MCIgeTE9IjIyMCIgeDI9IjM2MCIgeTI9IjIyMCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM2NiIgeT0iMjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPjIwIG08L3RleHQ+PHRleHQgeD0iNDMwIiB5PSIyMjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+cCDiiYggMywwIGJhcjwvdGV4dD48bGluZSB4MT0iNzAiIHkxPSI2NiIgeDI9IjcwIiB5Mj0iMjI2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjcwLDIzNiA3NSwyMjYgNjUsMjI2IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iODAiIHk9IjE1NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5wcm9mb25kZXVyPC90ZXh0Pjx0ZXh0IHg9IjMxMCIgeT0iMjk4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5wID0gcCBhdG0gKyDPgSBnIGggOiBlbnZpcm9uIDEgYmFyIGRlIHBsdXMgdG91cyBsZXMgMTAgbSBkJ2VhdTwvdGV4dD48L3N2Zz4=)
*Dans l'eau, la pression augmente d'environ 1 bar tous les 10 m de profondeur, en partant de la pression atmosphérique à la surface.*
<!-- /schema -->

Dans un liquide au repos, la pression **augmente avec la profondeur** : chaque
couche supporte le poids de tout le liquide au-dessus d'elle.

> **Principe fondamental de l'hydrostatique.** Entre deux points A et B d'un
> même liquide au repos, séparés par une dénivellation $h$ (B plus bas que A) :

$$\boxed{\Delta p = p_B - p_A = \rho \, g \, h}$$

avec $\rho$ la masse volumique du liquide en **kg·m⁻³**, $g \approx 9{,}81$
N·kg⁻¹ et $h$ la dénivellation **verticale** en m. Pour un liquide à surface libre, la pression à la profondeur $h$ vaut donc
$p = p_{\text{atm}} + \rho g h$.

> **Exemple.** Dans l'eau ($\rho = 1000$ kg·m⁻³), à $10$ m de profondeur :
> $\Delta p = 1000 \times 9{,}81 \times 10 = 9{,}81 \times 10^{4}$ Pa
> $\approx 1$ bar. **Retiens : environ 1 bar tous les 10 m d'eau.** C'est aussi
> pourquoi un château d'eau est perché : la hauteur crée la pression du réseau.

À retenir : la pression ne dépend que de la **profondeur**, pas de la forme du
récipient ni du volume (paradoxe hydrostatique) ; et $\rho$ se met en
**kg·m⁻³** — l'eau, c'est $1000$, pas « $1$ ».

---

## 7. Transmission hydraulique : vérins et presses

C'est l'application industrielle majeure. Un liquide étant quasi
incompressible, **une pression appliquée en un point d'un liquide au repos se
transmet intégralement en tout point** (les termes $\rho g h$ sont négligeables
devant les pressions de service, souvent $100$ à $300$ bar).

### Le vérin

Un **vérin** est un piston de section $S$ poussé par un fluide sous pression
$p$ : il développe la force

$$\boxed{F = p \times S}$$

> **Exemple.** Vérin de section $S = 50$ cm² $= 5{,}0 \times 10^{-3}$ m²
> alimenté sous $p = 200$ bar $= 2{,}0 \times 10^{7}$ Pa :
> $F = 2{,}0 \times 10^{7} \times 5{,}0 \times 10^{-3} = 1{,}0 \times 10^{5}$ N
> — de quoi soulever environ $10$ tonnes. C'est la force des pelleteuses.

### La presse hydraulique : multiplier la force

<!-- schema:presse -->
![Presse hydraulique de l'exemple : 100 N sur le piston de 2 cm² donnent 2 500 N sur celui de 50 cm², car la pression est la même dans tout le liquide.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDExMCAxMjAgTCAxMTAgMjUwIEwgNTMwIDI1MCBMIDUzMCAxNTAgTCAzODAgMTUwIEwgMzgwIDIxMCBMIDE0MCAyMTAgTCAxNDAgMTIwIFoiIGZpbGw9IiNmM2QzNmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTEwIDYwIEwgMTEwIDI1MCBMIDUzMCAyNTAgTCA1MzAgOTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAxNDAgNjAgTCAxNDAgMjEwIEwgMzgwIDIxMCBMIDM4MCA5MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIxMTAiIHk9IjEwOCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEyIiByeD0iMCIgZmlsbD0iIzdkODc5NCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iMzgwIiB5PSIxMzYiIHdpZHRoPSIxNTAiIGhlaWdodD0iMTQiIHJ4PSIwIiBmaWxsPSIjN2Q4Nzk0IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iMTI1IiB5MT0iMzAiIHgyPSIxMjUiIHkyPSI5NiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTI1LDEwNiAxMzAsOTYgMTIwLDk2IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMTUwIiB5PSI0NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5G4oKBID0gMTAwIE48L3RleHQ+PHRleHQgeD0iMTI1IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlPigoEgPSAyIGNtwrI8L3RleHQ+PGxpbmUgeDE9IjQ1NSIgeTE9IjEzNCIgeDI9IjQ1NSIgeTI9IjU0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iNC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ1NSw0MCA0NDgsNTQgNDYyLDU0IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iNDY3IiB5PSI1NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5G4oKCID0gMiA1MDAgTjwvdGV4dD48dGV4dCB4PSI0NTUiIHk9IjI3MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U+KCgiA9IDUwIGNtwrI8L3RleHQ+PHRleHQgeD0iMjYwIiB5PSIyMzYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmxpcXVpZGUgOiBtw6ptZSBwcmVzc2lvbiBwYXJ0b3V0PC90ZXh0Pjx0ZXh0IHg9IjMxMCIgeT0iMjkwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5G4oKBIC8gU+KCgSA9IEbigoIgLyBT4oKCID0gNSwwIMOXIDEw4oG1IFBhIDogbGEgZm9yY2UgZXN0IG11bHRpcGxpw6llIHBhciAyNTwvdGV4dD48L3N2Zz4=)
*Presse hydraulique de l'exemple : 100 N sur le piston de 2 cm² donnent 2 500 N sur celui de 50 cm², car la pression est la même dans tout le liquide.*
<!-- /schema -->

Deux pistons de sections $S_1$ et $S_2$ reliés par le même liquide sont à la
même pression :

$$\boxed{\frac{F_1}{S_1} = \frac{F_2}{S_2}} \qquad \Rightarrow \qquad F_2 = F_1 \times \frac{S_2}{S_1}$$

Le **grand** piston reçoit la **grande** force : le rapport des forces est
celui des sections.

> **Exemple.** $F_1 = 100$ N sur un piston de $2$ cm² ; l'autre piston fait
> $50$ cm² : $F_2 = 100 \times \dfrac{50}{2} = 2{,}5 \times 10^{3}$ N. On
> multiplie la force par $25$ — mais pas l'énergie : le petit piston doit
> s'enfoncer $25$ fois plus que le grand ne monte. **Pas de miracle
> énergétique.**

---

## 8. Tableau récapitulatif

| Grandeur / loi | Formule | Unités à surveiller |
|---|---|---|
| Deuxième loi de Newton | $F_{\text{résultante}} = m\,a$ | $F$ en N, $m$ en kg, $a$ en m·s⁻² |
| Poids | $P = m\,g$ | $g \approx 9{,}81$ N·kg⁻¹ |
| Moment d'une force | $M = F \times d$ | $M$ en **N·m** (pas J), $d$ = bras de levier en m |
| Vitesse angulaire | $\omega = \dfrac{2\pi N}{60}$ | $\omega$ en **rad/s**, $N$ en tr/min |
| Puissance d'un couple | $P = M \times \omega$ | $\omega$ en **rad/s** obligatoirement |
| Pression | $p = \dfrac{F}{S}$ | $p$ en Pa, $S$ en **m²** ($1$ cm² $= 10^{-4}$ m²) |
| Unités de pression | $1$ bar $= 10^{5}$ Pa | $p_{\text{atm}} \approx 1{,}013 \times 10^{5}$ Pa |
| Hydrostatique | $\Delta p = \rho\,g\,h$ | $\rho$ en kg·m⁻³, $h$ vertical en m |
| Vérin | $F = p \times S$ | mêmes conversions que la pression |
| Presse hydraulique | $\dfrac{F_1}{S_1} = \dfrac{F_2}{S_2}$ | même pression des deux côtés |
| Énergie, rendement (1re) | $E = P\,\Delta t$ ; $\eta = \dfrac{P_u}{P_a}$ | $\Delta t$ en s, $\eta < 1$ sans unité |

---

## 9. Les erreurs qui coûtent des points

1. **Utiliser $N$ en tr/min dans $P = M\omega$** : la formule exige des
   **rad/s**. Convertis d'abord avec $\omega = \dfrac{2\pi N}{60}$ — l'oubli
   fausse la puissance d'un facteur $\approx 9{,}55$.
2. **Confondre masse et poids** : une charge de $200$ kg tire sur son câble
   avec $\approx 1960$ N, pas $200$ N. Le passage kg → N se fait par $P = mg$.
3. **Donner un moment en joules** : $M = F \times d$ s'exprime en **N·m**.
   Même dimension qu'une énergie, grandeur différente — l'unité J est refusée.
4. **Oublier la conversion des surfaces** : $1$ cm² $= 10^{-4}$ m². Une
   section de $50$ cm² écrite « $0{,}5$ m² » fausse la force d'un vérin d'un
   facteur $100$.
5. **Prendre $\rho_{\text{eau}} = 1$ dans $\Delta p = \rho g h$** : en unités
   SI, $\rho_{\text{eau}} = 1000$ kg·m⁻³. Le « 1 » (g·cm⁻³ ou kg·L⁻¹) donne
   une pression mille fois trop faible.
6. **Prendre le bras de levier le long du manche au lieu de la distance
   perpendiculaire** : si la force n'est pas perpendiculaire au levier, $d$
   est la distance de l'axe à la **droite d'action** de la force, pas la
   longueur de l'outil.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Énergie mécanique » :
« Dynamique : forces, deuxième loi (approche), moment d'une force, rotation. /
Statique des fluides : pression, principe fondamental de l'hydrostatique »,
complétée par l'encart « Énergie : enjeux, puissance, rendement » pour le lien
puissance/rendement du § 4), extrait via WebFetch depuis le PDF officiel
cache.media.education.gouv.fr (spe261_annexe_1158935.pdf). À confronter au PDF
avant publication.

Prérequis cité : chapitre « Énergie : conversions, chaînes et rendement »
(contenu/premiere-techno/pc-maths-sti2d-stl/energie/, id 1sti2d-energie) — les
relations E = PΔt et η = Pu/Pa y sont établies et sont seulement réutilisées ici.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- « Deuxième loi (approche) » : j'ai retenu une application le long d'un axe,
  sans formalisme vectoriel, conformément à l'esprit techno de l'extraction.
  Vérifier sur le PDF le niveau d'exigence exact (somme vectorielle ou non).
- La formule P = Mω figure-t-elle explicitement au programme ou est-elle donnée
  dans les sujets ? L'extraction dit seulement « moment d'une force, rotation » ;
  P = Mω est systématique dans les sujets de bac STI2D — à vérifier.
- La relation v = rω et la presse hydraulique (F1/S1 = F2/S2, transmission de la
  pression / principe de Pascal) sont présentées comme applications industrielles ;
  l'extraction dit « pression, principe fondamental de l'hydrostatique » et la
  commande demandait explicitement vérins/hydraulique. Vérifier que ce
  prolongement est bien dans l'esprit du texte officiel (contextes STI2D).
- Convention Δp = ρgh donnée avec h = dénivellation, B plus bas que A ; certains
  manuels écrivent p_A + ρg z_A = p_B + ρg z_B. Choix fait pour la simplicité.
- g = 9,81 N·kg⁻¹ partout ; certains sujets prennent 10 : les corrigés des
  exercices le signalent quand c'est utile.

Calculs vérifiés numériquement :
- a = 500/250 = 2,0 m·s⁻² ; P(50 kg) = 490,5 ≈ 491 N ;
- M = 200 × 0,25 = 50 N·m ;
- ω(1500 tr/min) = 157,08 rad/s ; P = 12 × 157,08 = 1885 W ≈ 1,9 kW ;
- p = 600/3,0e-4 = 2,0e6 Pa = 20 bar ; Δp(10 m d'eau) = 9,81e4 Pa ≈ 1 bar ;
- F(vérin) = 2,0e7 × 5,0e-3 = 1,0e5 N (≈ 10,2 t) ; F2 = 100 × 50/2 = 2500 N.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
