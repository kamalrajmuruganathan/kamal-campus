---
id: tale-spe-pc-premier-principe-thermique
titre: "Premier principe et transferts thermiques"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "L'énergie : conversions et transferts"
duree_lecture_min: 15
prerequis:
  - Énergie mécanique et travail d'une force (Première)
  - Modèle du gaz parfait, température thermodynamique (Terminale)
  - Puissance et énergie (Première)
statut: brouillon
relu_par: null
---

# Premier principe et transferts thermiques

> La thermodynamique répond à une question simple : où passe l'énergie ? Quand tu chauffes
> de l'eau, l'énergie apportée ne disparaît pas, elle s'accumule dans le liquide sous une
> forme invisible — l'**énergie interne**. Le premier principe n'est rien d'autre que la
> **comptabilité** rigoureuse de ces échanges. Un mot d'ordre pour tout le chapitre :
> surveille les **unités** (J, W, K) et le **signe** de chaque transfert.

---

## 1. Énergie interne d'un système

### Définition

L'**énergie interne** $U$ d'un système est la somme de toutes les énergies stockées à
l'échelle microscopique : l'énergie **cinétique d'agitation** des particules (liée à la
température) et l'énergie **potentielle d'interaction** entre elles.

C'est une **grandeur d'état** : elle ne dépend que de l'état actuel du système (température,
quantité de matière…), pas du chemin suivi pour y arriver. Elle s'exprime en **joules (J)**.

> **Exemple.** Un litre d'eau à $80\ \text{°C}$ possède une énergie interne plus grande que
> le même litre à $20\ \text{°C}$ : ses molécules s'agitent davantage. On ne « voit » pas
> cette énergie, mais elle est bien là.

### Le cas du système incompressible

Un **système incompressible** (un solide, un liquide) a un volume qui ne varie
pratiquement pas. Pour un tel système, l'énergie interne ne dépend que de la
**température** : la faire varier, c'est uniquement changer $T$.

---

## 2. Le premier principe de la thermodynamique

### Énoncé

La variation d'énergie interne d'un système entre deux états est égale à la somme des
énergies échangées avec l'extérieur, sous forme de **transfert thermique** $Q$ et de
**travail** $W$ :

$$\boxed{\Delta U = Q + W}$$

Toutes les grandeurs sont en **joules (J)**. C'est un **bilan** : l'énergie ne se crée pas
et ne se détruit pas, elle ne fait que se transférer.

### La convention de signe (le cœur du chapitre)

<!-- schema:signes -->
![Convention de signe : un transfert reçu par le système est compté positivement, un transfert cédé négativement ; ΔU = W + Q.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMjYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIyNjAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMDAiIHk9IjYwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE0MCIgcng9IjE0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiLz48dGV4dCB4PSIzMTAiIHk9IjEyNCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+c3lzdMOobWU8L3RleHQ+PHRleHQgeD0iMzEwIiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPs6UVSA9IFcgKyBRPC90ZXh0PjxsaW5lIHgxPSI0MCIgeTE9IjEwMCIgeDI9IjE4NiIgeTI9IjEwMCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTk2LDEwMCAxODYsOTUgMTg2LDEwNSIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjExMCIgeT0iODgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlEgcmXDp3UgOiBRICZndDsgMDwvdGV4dD48bGluZSB4MT0iNDI0IiB5MT0iMTAwIiB4Mj0iNTcwIiB5Mj0iMTAwIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1ODAsMTAwIDU3MCw5NSA1NzAsMTA1IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iNTAwIiB5PSI4OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+VyBjw6lkw6kgOiBXICZsdDsgMDwvdGV4dD48bGluZSB4MT0iNDI0IiB5MT0iMTcwIiB4Mj0iNTcwIiB5Mj0iMTcwIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1ODAsMTcwIDU3MCwxNjUgNTcwLDE3NSIgZmlsbD0iI2MyNWUwMCIvPjx0ZXh0IHg9IjUwMCIgeT0iMTU4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5RIGPDqWTDqSA6IFEgJmx0OyAwPC90ZXh0Pjx0ZXh0IHg9IjMxMCIgeT0iMjM2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vbiByYWlzb25uZSB0b3Vqb3VycyBkdSBwb2ludCBkZSB2dWUgZHUgc3lzdMOobWUgOiByZcOndSAmZ3Q7IDAsIGPDqWTDqSAmbHQ7IDA8L3RleHQ+PC9zdmc+)
*Convention de signe : un transfert reçu par le système est compté positivement, un transfert cédé négativement ; ΔU = W + Q.*
<!-- /schema -->

On se place toujours **du point de vue du système**. Un transfert est compté :

| Transfert | Signe |
|---|---|
| **reçu** par le système (il gagne de l'énergie) | **positif** ($> 0$) |
| **cédé** par le système (il en perd) | **négatif** ($< 0$) |

> **Exemple.** De l'eau qu'on chauffe **reçoit** de l'énergie : $Q > 0$. La même eau qui
> refroidit en **cède** au milieu : $Q < 0$.

### Variation du système ≠ transfert avec l'extérieur

$\Delta U$ décrit **l'état interne** du système ; $Q$ et $W$ décrivent ce qui **traverse la
frontière**. Ce sont deux choses distinctes qu'une capacité exigible te demande de ne pas
confondre. Un système peut recevoir de la chaleur ($Q > 0$) et **ne pas** changer de
température si, en même temps, il fournit du travail.

### Le cas usuel : $\Delta U = Q$

Pour un système **incompressible** qui n'échange **pas de travail** utile avec l'extérieur
(pas de piston, pas de moteur), le travail des forces de pression est négligeable et le
premier principe se réduit à :

$$\boxed{\Delta U = Q}$$

C'est la situation de presque tous les exercices de calorimétrie : chauffer, refroidir,
mélanger des liquides.

---

## 3. Capacité thermique

### Définition et relation

Pour un système incompressible, la variation d'énergie interne est **proportionnelle** à la
variation de température :

$$\boxed{\Delta U = C \times \Delta T}$$

- $C$ est la **capacité thermique** du système, en **joules par kelvin (J·K⁻¹)**.
- $\Delta T = T_{\text{final}} - T_{\text{initial}}$ est la variation de température.

Comme $C$ dépend de la quantité de matière, on l'exprime souvent à partir de la
**capacité thermique massique** $c$ (en **J·kg⁻¹·K⁻¹**) :

$$\boxed{\Delta U = m \times c \times \Delta T}$$

où $m$ est la masse (en kg). Pour l'eau liquide, $c_{\text{eau}} \approx 4{,}18 \times 10^{3}\
\text{J·kg}^{-1}\text{·K}^{-1}$.

> **Exemple.** Chauffer $m = 0{,}50$ kg d'eau de $20\ \text{°C}$ à $80\ \text{°C}$ :
> $\Delta T = 80 - 20 = 60\ \text{°C} = 60\ \text{K}$ (un **écart** de température est
> identique en °C et en K).
> $\Delta U = m\,c\,\Delta T = 0{,}50 \times 4{,}18\times 10^{3} \times 60 = 1{,}3\times 10^{5}\
> \text{J}$.
> Comme $\Delta U = Q$, il faut apporter environ $1{,}3\times 10^{5}$ J, soit $130$ kJ.

> ⚠️ **Écart de température.** Dans $\Delta T$, °C et K donnent le **même nombre** : une hausse
> de $60\ \text{°C}$ vaut une hausse de $60$ K. La conversion $T(\text{K}) = \theta(\text{°C})
> + 273{,}15$ ne concerne que les températures **absolues**, pas les écarts.

---

## 4. Sens spontané d'un transfert thermique

Un transfert thermique se fait **spontanément du corps le plus chaud vers le corps le plus
froid**, jamais l'inverse. Il s'arrête quand les deux corps atteignent la **même
température** (équilibre thermique).

> **Exemple.** Un glaçon dans un verre d'eau : l'énergie va de l'eau (chaude) vers le glaçon
> (froid). L'eau se refroidit, le glaçon fond. Jamais l'eau ne gèle davantage en réchauffant
> le glaçon.

C'est une capacité exigible : savoir **prévoir le sens** d'un transfert à partir des
températures.

---

## 5. Les trois modes de transfert thermique

| Mode | Mécanisme | Milieu | Exemple |
|---|---|---|---|
| **Conduction** | de proche en proche, **sans déplacement de matière** | solides surtout | manche d'une casserole qui chauffe |
| **Convection** | par **déplacement de matière** (mouvement du fluide) | liquides, gaz | radiateur qui chauffe une pièce |
| **Rayonnement** | par **ondes électromagnétiques**, **sans milieu matériel** | même le vide | chaleur du Soleil, braises |

> **Exemple.** Au coin d'un feu de bois : le tisonnier chauffe par **conduction**, l'air chaud
> qui monte relève d'une **convection**, et la chaleur qui te frappe le visage sans contact
> arrive par **rayonnement**. Les trois modes coexistent.

> ⚠️ Le rayonnement est le **seul** mode qui traverse le **vide** : c'est ainsi que l'énergie
> du Soleil atteint la Terre à travers l'espace.

---

## 6. Flux thermique et résistance thermique

### Flux thermique

Le **flux thermique** $\varphi$ mesure la **puissance** transférée, c'est-à-dire l'énergie
échangée par unité de temps :

$$\boxed{\varphi = \frac{Q}{\Delta t}}$$

Il s'exprime en **watts (W)**, avec $1\ \text{W} = 1\ \text{J·s}^{-1}$. Un flux, c'est une
énergie **par seconde**.

### Résistance thermique

À travers une paroi, le flux est d'autant plus grand que l'écart de température de part et
d'autre est élevé, et d'autant plus faible que la paroi **isole** bien. On modélise cela par
la **résistance thermique** $R_{th}$ (analogie avec la loi d'Ohm) :

$$\boxed{\varphi = \frac{\Delta T}{R_{th}}} \qquad \text{soit} \qquad R_{th} = \frac{\Delta T}{\varphi}$$

- $\varphi$ en **W**, $\Delta T$ en **K** (l'écart entre les deux faces), donc $R_{th}$ en
  **kelvins par watt (K·W⁻¹)**.
- Cette expression est **fournie** le jour de l'épreuve : on attend que tu saches l'exploiter.

> **Exemple.** Un mur sépare l'intérieur ($19\ \text{°C}$) de l'extérieur ($4\ \text{°C}$) ;
> sa résistance thermique vaut $R_{th} = 0{,}030\ \text{K·W}^{-1}$.
> $\Delta T = 19 - 4 = 15\ \text{K}$, donc $\varphi = \dfrac{\Delta T}{R_{th}} =
> \dfrac{15}{0{,}030} = 5{,}0 \times 10^{2}\ \text{W}$ : le mur laisse fuir $500$ W.
> Un mur mieux isolé (plus grand $R_{th}$) laisserait passer **moins** de puissance.

> ⚠️ **Grand $R_{th}$ = bon isolant.** Plus la résistance thermique est élevée, plus le flux
> est faible : c'est l'inverse d'une intuition rapide. Une bonne isolation cherche à
> **maximiser** $R_{th}$.

---

## 7. Bilan Terre-atmosphère et effet de serre

La Terre **reçoit** de l'énergie du Soleil par **rayonnement** et en **réémet** vers l'espace,
elle aussi par rayonnement. À l'équilibre, l'énergie reçue égale l'énergie émise : la
température moyenne reste stable.

L'**effet de serre** : certains gaz de l'atmosphère (vapeur d'eau, $\text{CO}_2$, méthane…)
**absorbent** une partie du rayonnement infrarouge réémis par le sol et le **renvoient** vers
la surface. Résultat : la Terre est plus chaude qu'elle ne le serait sans atmosphère
(environ $+15\ \text{°C}$ au lieu de $-18\ \text{°C}$). L'augmentation de ces gaz **renforce**
l'effet de serre et **déplace l'équilibre** vers une température moyenne plus élevée.

> **À comprendre.** L'effet de serre n'est pas un défaut : sans lui, la Terre serait gelée.
> Le problème est son **renforcement** par les émissions humaines de gaz.

---

## 8. Loi de Newton du refroidissement

<!-- schema:refroidissement -->
![Refroidissement d'un café : rapide au début, puis de plus en plus lent ; la température tend vers celle de la pièce sans jamais descendre en dessous.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDAiIHkxPSIyNTQiIHgyPSI0MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijk1LjQiIHkxPSIyNTQiIHgyPSI5NS40IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTUwLjgiIHkxPSIyNTQiIHgyPSIxNTAuOCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwNi4yIiB5MT0iMjU0IiB4Mj0iMjA2LjIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNjEuNiIgeTE9IjI1NCIgeDI9IjI2MS42IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzE3IiB5MT0iMjU0IiB4Mj0iMzE3IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzcyLjQiIHkxPSIyNTQiIHgyPSIzNzIuNCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyNy44IiB5MT0iMjU0IiB4Mj0iNDI3LjgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0ODMuMiIgeTE9IjI1NCIgeDI9IjQ4My4yIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTM4LjYiIHkxPSIyNTQiIHgyPSI1MzguNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU5NCIgeTE9IjI1NCIgeDI9IjU5NCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iMjU0IiB4Mj0iNTk0IiB5Mj0iMjU0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iMjMxLjQiIHgyPSI1OTQiIHkyPSIyMzEuNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjIwOC44IiB4Mj0iNTk0IiB5Mj0iMjA4LjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAiIHkxPSIxODYuMiIgeDI9IjU5NCIgeTI9IjE4Ni4yIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iMTYzLjYiIHgyPSI1OTQiIHkyPSIxNjMuNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjE0MSIgeDI9IjU5NCIgeTI9IjE0MSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjExOC40IiB4Mj0iNTk0IiB5Mj0iMTE4LjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAiIHkxPSI5NS44IiB4Mj0iNTk0IiB5Mj0iOTUuOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjczLjIiIHgyPSI1OTQiIHkyPSI3My4yIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iNTAuNiIgeDI9IjU5NCIgeTI9IjUwLjYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAiIHkxPSIyOCIgeDI9IjU5NCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iMjU0IiB4Mj0iNTk5IiB5Mj0iMjU0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYwOCwyNTQgNTk5LDI0OS41IDU5OSwyNTguNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI0MCIgeTE9IjI1NCIgeDI9IjQwIiB5Mj0iMjMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDAsMTQgMzUuNSwyMyA0NC41LDIzIiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNjE0IiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPnRlbXBzPC90ZXh0Pjx0ZXh0IHg9IjM0IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij50ZW1ww6lyYXR1cmU8L3RleHQ+PHBhdGggZD0iTSA0MCA1MC42IEwgNDEuODUgNTIuODEgTCA0My42OSA1NC45OCBMIDQ1LjU0IDU3LjEzIEwgNDcuMzkgNTkuMjQgTCA0OS4yMyA2MS4zMiBMIDUxLjA4IDYzLjM3IEwgNTIuOTMgNjUuMzggTCA1NC43NyA2Ny4zNyBMIDU2LjYyIDY5LjMzIEwgNTguNDcgNzEuMjUgTCA2MC4zMSA3My4xNSBMIDYyLjE2IDc1LjAyIEwgNjQuMDEgNzYuODYgTCA2NS44NSA3OC42OCBMIDY3LjcgODAuNDYgTCA2OS41NSA4Mi4yMiBMIDcxLjM5IDgzLjk2IEwgNzMuMjQgODUuNjYgTCA3NS4wOSA4Ny4zNSBMIDc2LjkzIDg5IEwgNzguNzggOTAuNjMgTCA4MC42MyA5Mi4yNCBMIDgyLjQ3IDkzLjgyIEwgODQuMzIgOTUuMzggTCA4Ni4xNyA5Ni45MiBMIDg4LjAxIDk4LjQzIEwgODkuODYgOTkuOTIgTCA5MS43MSAxMDEuMzkgTCA5My41NSAxMDIuODMgTCA5NS40IDEwNC4yNiBMIDk3LjI1IDEwNS42NiBMIDk5LjA5IDEwNy4wNCBMIDEwMC45NCAxMDguNCBMIDEwMi43OSAxMDkuNzQgTCAxMDQuNjMgMTExLjA2IEwgMTA2LjQ4IDExMi4zNiBMIDEwOC4zMyAxMTMuNjQgTCAxMTAuMTcgMTE0LjkgTCAxMTIuMDIgMTE2LjE0IEwgMTEzLjg3IDExNy4zNyBMIDExNS43MSAxMTguNTcgTCAxMTcuNTYgMTE5Ljc2IEwgMTE5LjQxIDEyMC45MyBMIDEyMS4yNSAxMjIuMDggTCAxMjMuMSAxMjMuMjEgTCAxMjQuOTUgMTI0LjMzIEwgMTI2Ljc5IDEyNS40MyBMIDEyOC42NCAxMjYuNTEgTCAxMzAuNDkgMTI3LjU4IEwgMTMyLjMzIDEyOC42MyBMIDEzNC4xOCAxMjkuNjcgTCAxMzYuMDMgMTMwLjY5IEwgMTM3Ljg3IDEzMS42OSBMIDEzOS43MiAxMzIuNjggTCAxNDEuNTcgMTMzLjY2IEwgMTQzLjQxIDEzNC42MiBMIDE0NS4yNiAxMzUuNTYgTCAxNDcuMTEgMTM2LjQ5IEwgMTQ4Ljk1IDEzNy40MSBMIDE1MC44IDEzOC4zMiBMIDE1Mi42NSAxMzkuMjEgTCAxNTQuNDkgMTQwLjA4IEwgMTU2LjM0IDE0MC45NSBMIDE1OC4xOSAxNDEuOCBMIDE2MC4wMyAxNDIuNjMgTCAxNjEuODggMTQzLjQ2IEwgMTYzLjczIDE0NC4yNyBMIDE2NS41NyAxNDUuMDcgTCAxNjcuNDIgMTQ1Ljg2IEwgMTY5LjI3IDE0Ni42NCBMIDE3MS4xMSAxNDcuNCBMIDE3Mi45NiAxNDguMTUgTCAxNzQuODEgMTQ4LjkgTCAxNzYuNjUgMTQ5LjYzIEwgMTc4LjUgMTUwLjM1IEwgMTgwLjM1IDE1MS4wNiBMIDE4Mi4xOSAxNTEuNzUgTCAxODQuMDQgMTUyLjQ0IEwgMTg1Ljg5IDE1My4xMiBMIDE4Ny43MyAxNTMuNzkgTCAxODkuNTggMTU0LjQ0IEwgMTkxLjQzIDE1NS4wOSBMIDE5My4yNyAxNTUuNzMgTCAxOTUuMTIgMTU2LjM2IEwgMTk2Ljk3IDE1Ni45OCBMIDE5OC44MSAxNTcuNTkgTCAyMDAuNjYgMTU4LjE5IEwgMjAyLjUxIDE1OC43OCBMIDIwNC4zNSAxNTkuMzYgTCAyMDYuMiAxNTkuOTMgTCAyMDguMDUgMTYwLjUgTCAyMDkuODkgMTYxLjA1IEwgMjExLjc0IDE2MS42IEwgMjEzLjU5IDE2Mi4xNCBMIDIxNS40MyAxNjIuNjcgTCAyMTcuMjggMTYzLjIgTCAyMTkuMTMgMTYzLjcxIEwgMjIwLjk3IDE2NC4yMiBMIDIyMi44MiAxNjQuNzIgTCAyMjQuNjcgMTY1LjIyIEwgMjI2LjUxIDE2NS43IEwgMjI4LjM2IDE2Ni4xOCBMIDIzMC4yMSAxNjYuNjUgTCAyMzIuMDUgMTY3LjExIEwgMjMzLjkgMTY3LjU3IEwgMjM1Ljc1IDE2OC4wMiBMIDIzNy41OSAxNjguNDYgTCAyMzkuNDQgMTY4LjkgTCAyNDEuMjkgMTY5LjMzIEwgMjQzLjEzIDE2OS43NSBMIDI0NC45OCAxNzAuMTcgTCAyNDYuODMgMTcwLjU4IEwgMjQ4LjY3IDE3MC45OSBMIDI1MC41MiAxNzEuMzkgTCAyNTIuMzcgMTcxLjc4IEwgMjU0LjIxIDE3Mi4xNyBMIDI1Ni4wNiAxNzIuNTUgTCAyNTcuOTEgMTcyLjkyIEwgMjU5Ljc1IDE3My4yOSBMIDI2MS42IDE3My42NiBMIDI2My40NSAxNzQuMDEgTCAyNjUuMjkgMTc0LjM3IEwgMjY3LjE0IDE3NC43MSBMIDI2OC45OSAxNzUuMDYgTCAyNzAuODMgMTc1LjM5IEwgMjcyLjY4IDE3NS43MyBMIDI3NC41MyAxNzYuMDUgTCAyNzYuMzcgMTc2LjM4IEwgMjc4LjIyIDE3Ni42OSBMIDI4MC4wNyAxNzcuMDEgTCAyODEuOTEgMTc3LjMyIEwgMjgzLjc2IDE3Ny42MiBMIDI4NS42MSAxNzcuOTIgTCAyODcuNDUgMTc4LjIxIEwgMjg5LjMgMTc4LjUgTCAyOTEuMTUgMTc4Ljc5IEwgMjkyLjk5IDE3OS4wNyBMIDI5NC44NCAxNzkuMzUgTCAyOTYuNjkgMTc5LjYyIEwgMjk4LjUzIDE3OS44OSBMIDMwMC4zOCAxODAuMTUgTCAzMDIuMjMgMTgwLjQxIEwgMzA0LjA3IDE4MC42NyBMIDMwNS45MiAxODAuOTIgTCAzMDcuNzcgMTgxLjE3IEwgMzA5LjYxIDE4MS40MiBMIDMxMS40NiAxODEuNjYgTCAzMTMuMzEgMTgxLjkgTCAzMTUuMTUgMTgyLjEzIEwgMzE3IDE4Mi4zNiBMIDMxOC44NSAxODIuNTkgTCAzMjAuNjkgMTgyLjgyIEwgMzIyLjU0IDE4My4wNCBMIDMyNC4zOSAxODMuMjUgTCAzMjYuMjMgMTgzLjQ3IEwgMzI4LjA4IDE4My42OCBMIDMyOS45MyAxODMuODkgTCAzMzEuNzcgMTg0LjA5IEwgMzMzLjYyIDE4NC4yOSBMIDMzNS40NyAxODQuNDkgTCAzMzcuMzEgMTg0LjY5IEwgMzM5LjE2IDE4NC44OCBMIDM0MS4wMSAxODUuMDcgTCAzNDIuODUgMTg1LjI2IEwgMzQ0LjcgMTg1LjQ0IEwgMzQ2LjU1IDE4NS42MiBMIDM0OC4zOSAxODUuOCBMIDM1MC4yNCAxODUuOTggTCAzNTIuMDkgMTg2LjE1IEwgMzUzLjkzIDE4Ni4zMiBMIDM1NS43OCAxODYuNDkgTCAzNTcuNjMgMTg2LjY2IEwgMzU5LjQ3IDE4Ni44MiBMIDM2MS4zMiAxODYuOTggTCAzNjMuMTcgMTg3LjE0IEwgMzY1LjAxIDE4Ny4yOSBMIDM2Ni44NiAxODcuNDUgTCAzNjguNzEgMTg3LjYgTCAzNzAuNTUgMTg3Ljc1IEwgMzcyLjQgMTg3Ljg5IEwgMzc0LjI1IDE4OC4wNCBMIDM3Ni4wOSAxODguMTggTCAzNzcuOTQgMTg4LjMyIEwgMzc5Ljc5IDE4OC40NiBMIDM4MS42MyAxODguNTkgTCAzODMuNDggMTg4LjczIEwgMzg1LjMzIDE4OC44NiBMIDM4Ny4xNyAxODguOTkgTCAzODkuMDIgMTg5LjEyIEwgMzkwLjg3IDE4OS4yNCBMIDM5Mi43MSAxODkuMzcgTCAzOTQuNTYgMTg5LjQ5IEwgMzk2LjQxIDE4OS42MSBMIDM5OC4yNSAxODkuNzMgTCA0MDAuMSAxODkuODUgTCA0MDEuOTUgMTg5Ljk2IEwgNDAzLjc5IDE5MC4wNyBMIDQwNS42NCAxOTAuMTkgTCA0MDcuNDkgMTkwLjMgTCA0MDkuMzMgMTkwLjQgTCA0MTEuMTggMTkwLjUxIEwgNDEzLjAzIDE5MC42MiBMIDQxNC44NyAxOTAuNzIgTCA0MTYuNzIgMTkwLjgyIEwgNDE4LjU3IDE5MC45MiBMIDQyMC40MSAxOTEuMDIgTCA0MjIuMjYgMTkxLjEyIEwgNDI0LjExIDE5MS4yMSBMIDQyNS45NSAxOTEuMzEgTCA0MjcuOCAxOTEuNCBMIDQyOS42NSAxOTEuNDkgTCA0MzEuNDkgMTkxLjU4IEwgNDMzLjM0IDE5MS42NyBMIDQzNS4xOSAxOTEuNzYgTCA0MzcuMDMgMTkxLjg1IEwgNDM4Ljg4IDE5MS45MyBMIDQ0MC43MyAxOTIuMDIgTCA0NDIuNTcgMTkyLjEgTCA0NDQuNDIgMTkyLjE4IEwgNDQ2LjI3IDE5Mi4yNiBMIDQ0OC4xMSAxOTIuMzQgTCA0NDkuOTYgMTkyLjQyIEwgNDUxLjgxIDE5Mi40OSBMIDQ1My42NSAxOTIuNTcgTCA0NTUuNSAxOTIuNjQgTCA0NTcuMzUgMTkyLjcxIEwgNDU5LjE5IDE5Mi43OSBMIDQ2MS4wNCAxOTIuODYgTCA0NjIuODkgMTkyLjkzIEwgNDY0LjczIDE5MyBMIDQ2Ni41OCAxOTMuMDYgTCA0NjguNDMgMTkzLjEzIEwgNDcwLjI3IDE5My4yIEwgNDcyLjEyIDE5My4yNiBMIDQ3My45NyAxOTMuMzIgTCA0NzUuODEgMTkzLjM5IEwgNDc3LjY2IDE5My40NSBMIDQ3OS41MSAxOTMuNTEgTCA0ODEuMzUgMTkzLjU3IEwgNDgzLjIgMTkzLjYzIEwgNDg1LjA1IDE5My42OSBMIDQ4Ni44OSAxOTMuNzUgTCA0ODguNzQgMTkzLjggTCA0OTAuNTkgMTkzLjg2IEwgNDkyLjQzIDE5My45MSBMIDQ5NC4yOCAxOTMuOTcgTCA0OTYuMTMgMTk0LjAyIEwgNDk3Ljk3IDE5NC4wNyBMIDQ5OS44MiAxOTQuMTIgTCA1MDEuNjcgMTk0LjE3IEwgNTAzLjUxIDE5NC4yMiBMIDUwNS4zNiAxOTQuMjcgTCA1MDcuMjEgMTk0LjMyIEwgNTA5LjA1IDE5NC4zNyBMIDUxMC45IDE5NC40MiBMIDUxMi43NSAxOTQuNDYgTCA1MTQuNTkgMTk0LjUxIEwgNTE2LjQ0IDE5NC41NSBMIDUxOC4yOSAxOTQuNiBMIDUyMC4xMyAxOTQuNjQgTCA1MjEuOTggMTk0LjY4IEwgNTIzLjgzIDE5NC43MyBMIDUyNS42NyAxOTQuNzcgTCA1MjcuNTIgMTk0LjgxIEwgNTI5LjM3IDE5NC44NSBMIDUzMS4yMSAxOTQuODkgTCA1MzMuMDYgMTk0LjkzIEwgNTM0LjkxIDE5NC45NyBMIDUzNi43NSAxOTUuMDEgTCA1MzguNiAxOTUuMDQgTCA1NDAuNDUgMTk1LjA4IEwgNTQyLjI5IDE5NS4xMiBMIDU0NC4xNCAxOTUuMTUgTCA1NDUuOTkgMTk1LjE5IEwgNTQ3LjgzIDE5NS4yMiBMIDU0OS42OCAxOTUuMjYgTCA1NTEuNTMgMTk1LjI5IEwgNTUzLjM3IDE5NS4zMiBMIDU1NS4yMiAxOTUuMzYgTCA1NTcuMDcgMTk1LjM5IEwgNTU4LjkxIDE5NS40MiBMIDU2MC43NiAxOTUuNDUgTCA1NjIuNjEgMTk1LjQ4IEwgNTY0LjQ1IDE5NS41MSBMIDU2Ni4zIDE5NS41NCBMIDU2OC4xNSAxOTUuNTcgTCA1NjkuOTkgMTk1LjYgTCA1NzEuODQgMTk1LjYzIEwgNTczLjY5IDE5NS42NiBMIDU3NS41MyAxOTUuNjkgTCA1NzcuMzggMTk1LjcxIEwgNTc5LjIzIDE5NS43NCBMIDU4MS4wNyAxOTUuNzcgTCA1ODIuOTIgMTk1Ljc5IEwgNTg0Ljc3IDE5NS44MiBMIDU4Ni42MSAxOTUuODQgTCA1ODguNDYgMTk1Ljg3IEwgNTkwLjMxIDE5NS44OSBMIDU5Mi4xNSAxOTUuOTIgTCA1OTQgMTk1Ljk0IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjE5Ny41IiB4Mj0iNTk0IiB5Mj0iMTk3LjUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMzg0LjA0IiB5PSIyMDMuNSIgd2lkdGg9IjIwMi44OCIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjU4Mi45MiIgeT0iMjE1LjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJlbmQiPnRlbXDDqXJhdHVyZSBkZSBsYSBwacOoY2UgVCBleHQ8L3RleHQ+PGxpbmUgeDE9IjQwIiB5MT0iNTAuNiIgeDI9IjEyOC42NCIgeTI9IjE1Ny40NCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMTM1LjcyIiB5PSI0My4xMiIgd2lkdGg9IjIyOS43NiIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjEzOS43MiIgeT0iNTUuMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCI+YXUgZMOpYnV0IDogcmVmcm9pZGlzc2VtZW50IHJhcGlkZTwvdGV4dD48cmVjdCB4PSIzNjguNCIgeT0iMTM4LjA0IiB3aWR0aD0iMjQ5LjkyIiBoZWlnaHQ9IjE5IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iMzcyLjQiIHk9IjE1MC4wNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5wcsOocyBkZSBUIGV4dCA6IGRlIHBsdXMgZW4gcGx1cyBsZW50PC90ZXh0Pjx0ZXh0IHg9IjQ4IiB5PSI0Mi42IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmNhZsOpIGNoYXVkPC90ZXh0Pjwvc3ZnPg==)
*Refroidissement d'un café : rapide au début, puis de plus en plus lent ; la température tend vers celle de la pièce sans jamais descendre en dessous.*
<!-- /schema -->

Un corps chaud placé dans un milieu plus froid perd de l'énergie par un flux **proportionnel
à l'écart de température** avec ce milieu :

$$\boxed{\varphi = h\, S\, (T - T_{\text{ext}})}$$

Plus le corps est proche de la température extérieure, plus il se refroidit **lentement** :
l'écart $T - T_{\text{ext}}$ diminue, donc le flux aussi. La température tend vers
$T_{\text{ext}}$ selon une **décroissance exponentielle** (jamais brutalement).

> **Exemple.** Un café brûlant se refroidit vite au début, puis de plus en plus lentement à
> mesure qu'il approche de la température de la pièce. Il ne descend jamais **en dessous** de
> $T_{\text{ext}}$.

---

## 9. Tableau récapitulatif

| Grandeur | Relation | Unité |
|---|---|---|
| Énergie interne | grandeur d'état $U$ | J |
| Premier principe | $\Delta U = Q + W$ | J |
| Cas incompressible sans travail | $\Delta U = Q$ | J |
| Capacité thermique | $\Delta U = C\,\Delta T = m\,c\,\Delta T$ | J |
| Capacité thermique massique | $c$ | J·kg⁻¹·K⁻¹ |
| Flux thermique | $\varphi = \dfrac{Q}{\Delta t}$ | W |
| Résistance thermique | $\varphi = \dfrac{\Delta T}{R_{th}}$ | $R_{th}$ en K·W⁻¹ |
| Sens spontané | du **chaud** vers le **froid** | — |
| Modes | conduction / convection / rayonnement | — |
| Refroidissement | $\varphi \propto (T - T_{\text{ext}})$ | — |

---

## 10. Les erreurs qui coûtent des points

1. **Se tromper de signe.** $Q > 0$ si le système **reçoit**, $Q < 0$ s'il **cède**. Un
   corps qui refroidit a $\Delta U < 0$ et $Q < 0$.
2. **Confondre °C et K sur un écart.** Dans $\Delta T$, une hausse de $60\ \text{°C}$ vaut
   $60$ K. On n'ajoute $273{,}15$ que pour une température **absolue**, jamais pour un écart.
3. **Oublier de convertir les masses en kg** avant d'utiliser $c$ en J·kg⁻¹·K⁻¹ (une masse
   en grammes fausse le résultat d'un facteur $1000$).
4. **Confondre flux et énergie.** $\varphi$ est une **puissance** en watts (J·s⁻¹) ; pour
   obtenir l'énergie $Q$, il faut multiplier par la durée : $Q = \varphi \times \Delta t$.
5. **Croire que grand $R_{th}$ = grand flux.** C'est l'inverse : $\varphi = \Delta T / R_{th}$,
   donc une grande résistance thermique **réduit** le flux (bon isolant).
6. **Confondre les modes de transfert.** La convection suppose un **déplacement de matière** ;
   le rayonnement est le seul à traverser le **vide**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, ENSEIGNEMENT DE SPÉCIALITÉ, terminale
générale — BO spécial n°8 du 25 juillet 2019, arrêté du 19-7-2019.
  Page BO   : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
  PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Section 3.2 « Premier principe et transferts thermiques » (thème 3 « L'énergie :
conversions et transferts »). Extraction via WebFetch depuis le PDF officiel, reprise dans
docs/programme-terminale-physique-chimie-2019.txt (lignes 145-155). À confronter au PDF
officiel avant publication.

⚠️ À CONFRONTER AU PDF / À SOUMETTRE AU RELECTEUR :
- Le programme écrit strictement « ΔU = C·ΔT pour un système incompressible ». La forme
  m·c·ΔT (capacité thermique massique) est-elle explicitement exigible, ou seulement C
  globale ? Je l'ai incluse car omniprésente en calorimétrie — à valider.
- L'expression φ = ΔT/Rth est « fournie » (capacité : exploiter, expression fournie). Bien
  vérifié.
- La loi de Newton du refroidissement : la forme φ = h·S·(T − T_ext) est-elle attendue avec
  le coefficient h et la surface S, ou seulement la proportionnalité φ ∝ (T − T_ext) ? Le BO
  parle de « loi de Newton du refroidissement » sans détailler. J'ai donné la forme complète
  encadrée mais insisté sur la proportionnalité — à trancher par le relecteur.
- Valeur c_eau = 4,18e3 J·kg⁻¹·K⁻¹ (usuelle 4185) : arrondi pédagogique, à confirmer.
- Convention de signe W (reçu > 0) : conforme au programme actuel (thermodynamique « du
  système »). Vérifier qu'aucune convention « travail fourni » n'est attendue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
