---
id: tale-si-energie-dans-les-systemes
titre: "L'énergie dans les systèmes"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Grandeurs électriques (tension, courant)
  - Puissance et énergie (Première SI)
  - Mouvement et forces (Physique)
statut: brouillon
relu_par: null
---

# L'énergie dans les systèmes

> Tout système technique **reçoit**, **transforme**, **stocke** puis **restitue**
> de l'énergie. L'ingénieur analyse cette chaîne énergétique pour choisir les
> composants, dimensionner une source et surtout **améliorer le rendement**, car
> une partie de l'énergie est toujours perdue (le plus souvent en chaleur).

---

# 1. Énergie, travail et puissance

- L'**énergie** $E$ se mesure en **joules** ($\mathrm{J}$). C'est la capacité à
  produire une action (mettre en mouvement, chauffer, éclairer…).
- La **puissance** $P$ est l'énergie **par unité de temps**, en **watts**
  ($\mathrm{W}$) :
  $$P = \frac{E}{t}, \qquad \text{donc} \qquad E = P \times t.$$
- $1\ \mathrm{W} = 1\ \mathrm{J\cdot s^{-1}}$. Une unité usuelle d'énergie est le
  **wattheure** : $1\ \mathrm{Wh} = 3600\ \mathrm{J}$.

**Exemple.** Un moteur de $500\ \mathrm{W}$ fonctionne pendant $2\ \mathrm{h}$. Il
consomme $E = P \times t = 500 \times 2 = 1000\ \mathrm{Wh} = 1\ \mathrm{kWh}$.

---

# 2. Puissances mécanique et électrique

## Puissance électrique

$$P = U \times I,$$
avec $U$ la tension (volts, $\mathrm{V}$) et $I$ l'intensité (ampères,
$\mathrm{A}$). En courant continu, c'est direct.

**Exemple.** Sous $U = 12\ \mathrm{V}$ avec $I = 5\ \mathrm{A}$ :
$P = 12 \times 5 = 60\ \mathrm{W}$.

## Puissance mécanique

- En **translation** : $P = F \times v$ (force × vitesse).
- En **rotation** : $P = \mathcal{C} \times \omega$ (couple × vitesse angulaire),
  avec $\mathcal{C}$ en $\mathrm{N\cdot m}$ et $\omega$ en $\mathrm{rad\cdot
  s^{-1}}$.

**Exemple.** Un moteur fournit un couple $\mathcal{C} = 3\ \mathrm{N\cdot m}$ à
$\omega = 100\ \mathrm{rad\cdot s^{-1}}$ :
$P = 3 \times 100 = 300\ \mathrm{W}$.

---

# 3. La chaîne d'énergie

<!-- schema:chaine-energie -->
![La chaîne d'énergie : alimenter, distribuer, convertir puis transmettre l'énergie jusqu'à l'action sur la matière d'œuvre.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgNDk0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSI0OTQiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNDEiIHk9IjI2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zb3VyY2UgOiBzZWN0ZXVyLCBiYXR0ZXJpZeKApjwvdGV4dD48bGluZSB4MT0iMTQxIiB5MT0iMzIiIHgyPSIxNDEiIHkyPSI0NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQxLDU2IDE0Niw0NiAxMzYsNDYiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSIyNiIgeT0iNTgiIHdpZHRoPSIyMzAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxNDEiIHk9Ijc4LjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkFMSU1FTlRFUjwvdGV4dD48dGV4dCB4PSIxNDEiIHk9Ijk4LjEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZvdXJuaXIgbOKAmcOpbmVyZ2llIHV0aWxlPC90ZXh0PjxsaW5lIHgxPSIxNDEiIHkxPSIxMTIiIHgyPSIxNDEiIHkyPSIxNDQiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE0MSwxNTQgMTQ2LDE0NCAxMzYsMTQ0IiBmaWxsPSIjYzI1ZTAwIi8+PHJlY3QgeD0iMjYiIHk9IjE1NiIgd2lkdGg9IjIzMCIgaGVpZ2h0PSI1MiIgcng9IjgiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE0MSIgeT0iMTc2LjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkRJU1RSSUJVRVI8L3RleHQ+PHRleHQgeD0iMTQxIiB5PSIxOTYuMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cmVsYWlzLCB2YXJpYXRldXIsIGRpc3RyaWJ1dGV1cjwvdGV4dD48bGluZSB4MT0iMTQxIiB5MT0iMjEwIiB4Mj0iMTQxIiB5Mj0iMjQyIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNDEsMjUyIDE0NiwyNDIgMTM2LDI0MiIgZmlsbD0iI2MyNWUwMCIvPjxyZWN0IHg9IjI2IiB5PSIyNTQiIHdpZHRoPSIyMzAiIGhlaWdodD0iNTIiIHJ4PSI4IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxNDEiIHk9IjI3NC4zIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DT05WRVJUSVI8L3RleHQ+PHRleHQgeD0iMTQxIiB5PSIyOTQuMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bW90ZXVyLCB2w6lyaW48L3RleHQ+PGxpbmUgeDE9IjE0MSIgeTE9IjMwOCIgeDI9IjE0MSIgeTI9IjM0MCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQxLDM1MCAxNDYsMzQwIDEzNiwzNDAiIGZpbGw9IiNjMjVlMDAiLz48dGV4dCB4PSIxNTUiIHk9IjMzNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPsOpbmVyZ2llIG3DqWNhbmlxdWU8L3RleHQ+PHJlY3QgeD0iMjYiIHk9IjM1MiIgd2lkdGg9IjIzMCIgaGVpZ2h0PSI1MiIgcng9IjgiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE0MSIgeT0iMzcyLjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlRSQU5TTUVUVFJFPC90ZXh0Pjx0ZXh0IHg9IjE0MSIgeT0iMzkyLjEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnLDqWR1Y3RldXIsIHBvdWxpZXMsIGVuZ3JlbmFnZXM8L3RleHQ+PGxpbmUgeDE9IjE0MSIgeTE9IjQwNiIgeDI9IjE0MSIgeTI9IjQyMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQxLDQzMiAxNDYsNDIyIDEzNiw0MjIiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSIzNiIgeT0iNDM0IiB3aWR0aD0iMjEwIiBoZWlnaHQ9IjQ2IiByeD0iMTgiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE0MSIgeT0iNDUzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5hZ2lyIHN1ciBsYTwvdGV4dD48dGV4dCB4PSIxNDEiIHk9IjQ2OC42IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5tYXRpw6hyZSBk4oCZxZN1dnJlPC90ZXh0Pjwvc3ZnPg==)
*La chaîne d'énergie : alimenter, distribuer, convertir puis transmettre l'énergie jusqu'à l'action sur la matière d'œuvre.*
<!-- /schema -->

Le programme structure un système technique en **chaîne d'énergie**, articulée
avec la chaîne d'information :

```
   SOURCE → ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE → agir/sortie
 (secteur,   (réguler)   (relais,     (moteur,     (réducteur,
  batterie…)             variateur)   vérin…)      poulie…)
```

- **Alimenter** : fournir l'énergie utile (secteur, batterie, air comprimé).
- **Distribuer** : orienter/moduler l'énergie vers l'actionneur (relais,
  variateur, distributeur).
- **Convertir** : transformer une forme d'énergie en une autre (le moteur
  convertit électrique → mécanique).
- **Transmettre** : adapter et transporter l'énergie mécanique (engrenages,
  courroies, réducteurs).

---

# 4. Le rendement

À chaque conversion, une part de l'énergie est **perdue** (chaleur, frottements,
bruit). Le **rendement** $\eta$ compare l'énergie **utile** en sortie à l'énergie
**absorbée** en entrée :
$$\eta = \frac{P_{\text{utile}}}{P_{\text{absorbée}}} = \frac{E_{\text{utile}}}{E_{\text{absorbée}}}.$$

- $\eta$ est un nombre **sans unité**, compris entre 0 et 1 (souvent exprimé en
  %).
- $\eta$ est **toujours inférieur à 1** : on ne crée pas d'énergie (conservation),
  et il y a toujours des pertes.

**Exemple de calcul.** Un moteur absorbe $P_{\text{abs}} = 500\ \mathrm{W}$ et
fournit $P_{\text{utile}} = 400\ \mathrm{W}$. Son rendement vaut
$$\eta = \frac{400}{500} = 0{,}8 = 80\ \%.$$
Les $100\ \mathrm{W}$ manquants sont dissipés (chaleur, frottements).

## Rendement d'une chaîne

<!-- schema:rendement-chaine -->
![Exemple avec 500 W absorbés : le moteur fournit 450 W, le réducteur 360 W ; le rendement global vaut 0,9 × 0,8 = 0,72.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMzI0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIzMjQiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iNjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIxMTAiIHJ4PSIwIiBmaWxsPSIjZjZjMjdhIiBmaWxsLW9wYWNpdHk9IjAuOSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSI1NSIgeT0iNDgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjUwMCBXPC90ZXh0Pjx0ZXh0IHg9IjU1IiB5PSIzMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YWJzb3Jiw6llPC90ZXh0PjxyZWN0IHg9IjkwIiB5PSI1NCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjIiIHJ4PSI2IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTUwIiB5PSIxMTMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk1vdGV1cjwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjEzMSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+zrcgPSAwLDk8L3RleHQ+PHJlY3QgeD0iMjEwIiB5PSI2MCIgd2lkdGg9IjkwIiBoZWlnaHQ9Ijk5IiByeD0iMCIgZmlsbD0iI2Y2YzI3YSIgZmlsbC1vcGFjaXR5PSIwLjkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTSAyMTAgMTU5IEwgMjMyIDE1OSBRIDI0MyAxNTkgMjQzIDIxOSBMIDIzMiAyMTkgUSAyMzIgMTcwIDIxMCAxNzAgWiIgZmlsbD0iI2MwMmEyYSIgZmlsbC1vcGFjaXR5PSIwLjM1IiBzdHJva2U9Im5vbmUiLz48dGV4dCB4PSIyNDEuNSIgeT0iMjM5IiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5wZXJ0ZXMgNTAgVzwvdGV4dD48dGV4dCB4PSIyNjUiIHk9IjQ4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj40NTAgVzwvdGV4dD48cmVjdCB4PSIzMDAiIHk9IjU0IiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjExMSIgcng9IjYiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzNjAiIHk9IjEwNy41IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Sw6lkdWN0ZXVyPC90ZXh0Pjx0ZXh0IHg9IjM2MCIgeT0iMTI1LjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPs63ID0gMCw4PC90ZXh0PjxyZWN0IHg9IjQyMCIgeT0iNjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI3OS4yIiByeD0iMCIgZmlsbD0iI2Y2YzI3YSIgZmlsbC1vcGFjaXR5PSIwLjkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTSA0MjAgMTM5LjIgTCA0NDIgMTM5LjIgUSA0NjEuOCAxMzkuMiA0NjEuOCAxOTkuMiBMIDQ0MiAxOTkuMiBRIDQ0MiAxNTkgNDIwIDE1OSBaIiBmaWxsPSIjYzAyYTJhIiBmaWxsLW9wYWNpdHk9IjAuMzUiIHN0cm9rZT0ibm9uZSIvPjx0ZXh0IHg9IjQ1NS45IiB5PSIyMTkuMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+cGVydGVzIDkwIFc8L3RleHQ+PHRleHQgeD0iNDc1IiB5PSI0OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzYwIFc8L3RleHQ+PHRleHQgeD0iNDc1IiB5PSIzMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dXRpbGU8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnJlbmRlbWVudCBnbG9iYWwgOiDOtyA9IDAsOSDDlyAwLDggPSAwLDcyID0gNzIgJTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjMxMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj52w6lyaWZpY2F0aW9uIDogMzYwIMO3IDUwMCA9IDAsNzI8L3RleHQ+PC9zdmc+)
*Exemple avec 500 W absorbés : le moteur fournit 450 W, le réducteur 360 W ; le rendement global vaut 0,9 × 0,8 = 0,72.*
<!-- /schema -->

Pour plusieurs conversions en série, les rendements se **multiplient** :
$$\eta_{\text{total}} = \eta_1 \times \eta_2 \times \dots$$

**Exemple.** Une chaîne moteur ($\eta_1 = 0{,}9$) + réducteur ($\eta_2 = 0{,}8$) a
un rendement $\eta = 0{,}9 \times 0{,}8 = 0{,}72 = 72\ \%$.

---

# 5. Stocker l'énergie

Un système peut **stocker** de l'énergie pour la restituer plus tard :

- **Batterie / accumulateur** : énergie chimique → électrique. Capacité souvent en
  $\mathrm{A\cdot h}$ ; énergie $E = U \times Q$ (avec $Q$ en $\mathrm{A\cdot h}$).
- **Condensateur** : stocke une petite énergie électrique, restituée très vite.
- **Volant d'inertie / ressort** : stocke de l'énergie mécanique (cinétique ou
  élastique).

**Énergie cinétique** d'un solide en translation :
$E_c = \tfrac{1}{2}\,m\,v^2$ (en $\mathrm{J}$, avec $m$ en kg et $v$ en
$\mathrm{m\cdot s^{-1}}$).

**Exemple.** Une masse de $2\ \mathrm{kg}$ à $3\ \mathrm{m\cdot s^{-1}}$ possède
$E_c = \tfrac12 \times 2 \times 3^2 = 9\ \mathrm{J}$.

---

# Ce qu'il faut retenir

- **Énergie** en joules (J), **puissance** en watts (W) ; $E = P \times t$ ;
  $1\ \mathrm{Wh} = 3600\ \mathrm{J}$.
- Puissance **électrique** $P = U I$ ; **mécanique** $P = F v$ (translation) ou
  $P = \mathcal{C}\,\omega$ (rotation).
- Chaîne d'énergie : **alimenter → distribuer → convertir → transmettre**.
- **Rendement** $\eta = \dfrac{P_{\text{utile}}}{P_{\text{absorbée}}}$, sans
  unité, **toujours < 1**.
- Rendements en série : ils se **multiplient**.
- Énergie cinétique : $E_c = \tfrac12 m v^2$.

# Les erreurs à éviter

- Confondre **énergie** (J, capacité totale) et **puissance** (W, débit
  d'énergie).
- Croire qu'un rendement peut dépasser 100 % : impossible, il y a toujours des
  pertes.
- Additionner les rendements d'une chaîne au lieu de les **multiplier**.
- Oublier les unités cohérentes : $\omega$ en rad/s (pas en tr/min) pour
  $P = \mathcal{C}\,\omega$.
