---
id: 1stl-spcl-analyses-spectroscopies-dosages
titre: "Analyses physico-chimiques : spectroscopies et dosages"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 16
prerequis:
  - Grandeurs, unités du Système international et conversions (Seconde)
  - Concentration en quantité de matière et dilution (Seconde)
  - Espèces chimiques, groupes caractéristiques (Seconde)
  - Absorption de la lumière et couleur (Seconde)
statut: brouillon
relu_par: null
---

# Analyses physico-chimiques : spectroscopies et dosages

> Au laboratoire, une question revient sans cesse : **qu'y a-t-il dans ce flacon, et en
> quelle quantité ?** Pour y répondre, on ne goûte pas — on **mesure**. Une température de
> fusion identifie une espèce ; un spectre trahit ses groupes chimiques ; une absorbance
> ou un volume versé donne sa concentration. Ce chapitre te donne les deux gestes du
> métier : **identifier** une espèce et **doser** une solution.

---

## 1. Identifier une espèce par ses propriétés physiques

Une espèce chimique pure possède des **propriétés physiques caractéristiques** : mesurées
avec soin, elles servent de « carte d'identité ». On les compare à des valeurs **tabulées**
(données constructeur, tables de chimie).

| Propriété | Symbole | Unité usuelle | Ce qu'elle renseigne |
|---|---|---|---|
| Température de fusion | $T_{\text{fus}}$ | °C | identité + **pureté** |
| Température d'ébullition | $T_{\text{eb}}$ | °C | identité |
| Indice de réfraction | $n$ | sans unité | identité (liquides) |
| Densité | $d$ | sans unité | identité |

> **Exemple.** Un liquide incolore distille à $78\ \text{°C}$ sous pression normale, de
> densité $d = 0{,}79$ : ces valeurs pointent vers l'**éthanol** ($T_{\text{eb}} = 78\ \text{°C}$,
> $d = 0{,}79$). Une seule propriété ne suffit pas ; c'est le **faisceau** de propriétés
> concordantes qui identifie.

### La densité

La densité d'un liquide compare sa masse volumique à celle de l'eau :

$$\boxed{d = \frac{\rho}{\rho_{\text{eau}}}}\qquad \rho_{\text{eau}} = 1{,}00\times 10^{3}\ \text{kg·m}^{-3} = 1{,}00\ \text{g·mL}^{-1}$$

$d$ est **sans unité** : c'est un rapport de deux masses volumiques. Numériquement, en
$\text{g·mL}^{-1}$, la masse volumique $\rho$ et la densité $d$ ont **la même valeur**.

> **Exemple.** $50{,}0\ \text{mL}$ d'un liquide pèsent $44{,}0\ \text{g}$. Sa masse volumique
> vaut $\rho = \frac{44{,}0}{50{,}0} = 0{,}88\ \text{g·mL}^{-1}$, donc $d = 0{,}88$.

### La température de fusion mesure aussi la pureté

Une espèce **pure** fond à température **fixe et nette**. Une espèce **impure** fond sur un
**intervalle** (fusion « pâteuse ») et à une température **plus basse** que le corps pur :
l'impureté **abaisse et élargit** le point de fusion. C'est le critère qu'on utilise après
une recristallisation pour juger si le solide est bien purifié.

> ⚠️ **Un test d'identification n'est pas une preuve absolue** : deux espèces peuvent
> partager une même propriété. On croise toujours **plusieurs** critères.

---

## 2. Spectroscopie UV-visible

### Le principe

Une solution colorée **absorbe** une partie de la lumière visible qui la traverse. Le
**spectrophotomètre** mesure, longueur d'onde par longueur d'onde, l'**absorbance** $A$ :
une grandeur **sans unité** qui dit *quelle fraction* de lumière est retenue. Plus $A$ est
grande, plus la solution absorbe.

Le tracé de $A$ en fonction de la longueur d'onde $\lambda$ est le **spectre d'absorption**.
La longueur d'onde du **maximum** d'absorption se note $\lambda_{\max}$ : c'est une signature
de l'espèce et le réglage à choisir pour un dosage.

### Couleur et couleur complémentaire

<!-- schema:cercle-chromatique -->
![Cercle des couleurs : la couleur perçue d'une solution est la complémentaire, diamétralement opposée, de la couleur qu'elle absorbe le plus.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDIzMCAxNjAgTCAxNzUgNjQuNzQgQSAxMTAgMTEwIDAgMCAxIDI4NSA2NC43NCBaIiBmaWxsPSIjZTgyMjJiIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjIzMCIgeT0iMjkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnJvdWdlPC90ZXh0PjxwYXRoIGQ9Ik0gMjMwIDE2MCBMIDI4NSA2NC43NCBBIDExMCAxMTAgMCAwIDEgMzQwIDE2MCBaIiBmaWxsPSIjZjZkMzFhIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjM0Ny43OCIgeT0iOTciIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmphdW5lPC90ZXh0PjxwYXRoIGQ9Ik0gMjMwIDE2MCBMIDM0MCAxNjAgQSAxMTAgMTEwIDAgMCAxIDI4NSAyNTUuMjYgWiIgZmlsbD0iIzJiYjM0YSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzNDcuNzgiIHk9IjIzMyIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+dmVydDwvdGV4dD48cGF0aCBkPSJNIDIzMCAxNjAgTCAyODUgMjU1LjI2IEEgMTEwIDExMCAwIDAgMSAxNzUgMjU1LjI2IFoiIGZpbGw9IiMxOGMwZGMiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjMwIiB5PSIzMDEiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmN5YW48L3RleHQ+PHBhdGggZD0iTSAyMzAgMTYwIEwgMTc1IDI1NS4yNiBBIDExMCAxMTAgMCAwIDEgMTIwIDE2MCBaIiBmaWxsPSIjMmE0ZmQ4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjExMi4yMiIgeT0iMjMzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5ibGV1PC90ZXh0PjxwYXRoIGQ9Ik0gMjMwIDE2MCBMIDEyMCAxNjAgQSAxMTAgMTEwIDAgMCAxIDE3NSA2NC43NCBaIiBmaWxsPSIjZDYyYWEwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjExMi4yMiIgeT0iOTciIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm1hZ2VudGE8L3RleHQ+PGxpbmUgeDE9IjIzMCIgeTE9IjE2MCIgeDI9IjIzMCIgeTI9Ijc3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMzAsNjggMjI1LjUsNzcgMjM0LjUsNzciIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMjMwIiB5MT0iMTYwIiB4Mj0iMjMwIiB5Mj0iMjQzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMzAsMjUyIDIzNC41LDI0MyAyMjUuNSwyNDMiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI0MjAiIHk9IjgwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPkNvdWxldXJzIGNvbXBsw6ltZW50YWlyZXMgOjwvdGV4dD48dGV4dCB4PSI0MjAiIHk9IjEwNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5kaWFtw6l0cmFsZW1lbnQgb3Bwb3PDqWVzPC90ZXh0Pjx0ZXh0IHg9IjQyMCIgeT0iMTIyLjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnN1ciBsZSBjZXJjbGUuPC90ZXh0Pjx0ZXh0IHg9IjQyMCIgeT0iMTcwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPlVuZSBzb2x1dGlvbiBxdWkgYWJzb3JiZTwvdGV4dD48dGV4dCB4PSI0MjAiIHk9IjE4Ni4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5zdXJ0b3V0IGxlIHJvdWdlIHBhcmHDrnQ8L3RleHQ+PHRleHQgeD0iNDIwIiB5PSIyMDIuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5jeWFuIChibGV1LXZlcnQpIDs8L3RleHQ+PHRleHQgeD0iNDIwIiB5PSIyMTguNzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+cXVpIGFic29yYmUgbGUgYmxldSw8L3RleHQ+PHRleHQgeD0iNDIwIiB5PSIyMzUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+cGFyYcOudCBqYXVuZS48L3RleHQ+PC9zdmc+)
*Cercle des couleurs : la couleur perçue d'une solution est la complémentaire, diamétralement opposée, de la couleur qu'elle absorbe le plus.*
<!-- /schema -->

La couleur **perçue** d'une solution est la **couleur complémentaire** de celle qu'elle
**absorbe** le plus. On lit $\lambda_{\max}$ (la couleur absorbée) sur le spectre, puis on
en déduit la couleur vue sur l'**étoile des couleurs**.

| $\lambda_{\max}$ absorbée | Couleur absorbée | Couleur **perçue** (complémentaire) |
|---|---|---|
| $\approx 450\ \text{nm}$ | bleu | jaune-orangé |
| $\approx 500\ \text{nm}$ | vert | rouge-magenta |
| $\approx 620\ \text{nm}$ | orangé | bleu |
| $\approx 660\ \text{nm}$ | rouge | vert-cyan |

> **Exemple.** Une solution de sulfate de cuivre absorbe vers $\lambda_{\max} \approx 800\ \text{nm}$
> (rouge/proche IR) : elle apparaît **bleue**, la complémentaire. À l'inverse, une solution
> **jaune** absorbe dans le **bleu** ($\approx 450\ \text{nm}$).

> ⚠️ Ne confonds pas **couleur absorbée** et **couleur perçue** : elles sont
> **opposées** sur le cercle chromatique. La solution ne « renvoie » pas la couleur de son
> $\lambda_{\max}$.

---

## 3. Spectroscopie infrarouge

Le rayonnement **infrarouge** (IR) fait **vibrer** les liaisons d'une molécule. Chaque type
de liaison absorbe à un **nombre d'onde** $\sigma$ caractéristique (en $\text{cm}^{-1}$),
indépendant du reste de la molécule. Le spectre IR est donc une **carte des groupes
caractéristiques** présents.

On lit un spectre IR en repérant les **bandes d'absorption** (creux de transmittance) et en
les comparant à une **table**.

| Groupe / liaison | Bande caractéristique ($\text{cm}^{-1}$) | Allure |
|---|---|---|
| O–H (alcool) | $3200$–$3400$ | **large**, forte |
| O–H (acide carboxylique) | $2500$–$3200$ | **très large** |
| N–H (amine) | $3300$–$3500$ | fine(s) |
| C–H | $\approx 2900$–$3000$ | moyenne |
| C=O (carbonyle) | $1700$–$1750$ | **fine et intense** |

> **Exemple.** Un spectre montre une bande **large** vers $3300\ \text{cm}^{-1}$ **et** une
> bande **fine et intense** vers $1710\ \text{cm}^{-1}$ : on identifie à la fois un O–H et un
> C=O, cohérents avec un **acide carboxylique** (le O–H acide, très large, confirme).

> ⚠️ L'IR identifie des **groupes**, pas la molécule entière. Deux molécules différentes
> portant les mêmes groupes ont des bandes semblables dans cette zone. La zone en dessous de
> $1500\ \text{cm}^{-1}$ (« empreinte digitale ») est propre à chaque molécule mais on ne
> l'interprète pas bande par bande.

---

## 4. La loi de Beer-Lambert

Pour une solution **diluée**, l'absorbance est **proportionnelle** à la concentration de
l'espèce colorée :

$$\boxed{A = \varepsilon \cdot \ell \cdot c}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $A$ | absorbance | **sans unité** |
| $\varepsilon$ | coefficient d'absorption molaire (à $\lambda$ fixée) | $\text{L·mol}^{-1}\text{·cm}^{-1}$ |
| $\ell$ | épaisseur de solution traversée (largeur de la cuve) | $\text{cm}$ |
| $c$ | concentration en quantité de matière | $\text{mol·L}^{-1}$ |

> **Exemple.** Dans une cuve de $\ell = 1{,}0\ \text{cm}$, à $\lambda_{\max}$, une espèce de
> coefficient $\varepsilon = 6{,}0\times 10^{3}\ \text{L·mol}^{-1}\text{·cm}^{-1}$ est à
> $c = 2{,}0\times 10^{-4}\ \text{mol·L}^{-1}$. Alors
> $A = 6{,}0\times 10^{3} \times 1{,}0 \times 2{,}0\times 10^{-4} = 1{,}2$. Bien **sans unité** :
> $\text{L·mol}^{-1}\text{·cm}^{-1} \times \text{cm} \times \text{mol·L}^{-1}$ se simplifie
> entièrement.

> ⚠️ **Domaine de validité.** La loi n'est linéaire que pour les solutions **diluées**
> ($A \lesssim 1{,}5$ en pratique). Trop concentrée, la droite se courbe : on **dilue** avant
> de mesurer.

Deux conséquences utiles :
- $\varepsilon$ dépend de l'espèce **et** de $\lambda$ : on se place toujours à $\lambda_{\max}$
  pour maximiser la sensibilité.
- À $\lambda$, $\ell$ et espèce fixés, $A$ et $c$ sont **proportionnelles** : c'est ce qui
  rend le dosage par étalonnage possible.

---

## 5. Dosage par étalonnage spectrophotométrique

**Doser**, c'est déterminer une concentration inconnue. Le dosage par étalonnage ne
**détruit pas** l'échantillon : il le **compare** à des solutions connues.

### La méthode, dans l'ordre

<!-- schema:etalonnage -->
![Droite d'étalonnage de l'exemple : A = 4,0 × 10³ × c ; l'absorbance 0,52 de l'inconnue correspond à c = 1,3 × 10⁻⁴ mol·L⁻¹.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1NiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEwMC44MyIgeTE9IjI5NCIgeDI9IjEwMC44MyIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0NS42NyIgeTE9IjI5NCIgeDI9IjE0NS42NyIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE5MC41IiB5MT0iMjk0IiB4Mj0iMTkwLjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMzUuMzMiIHkxPSIyOTQiIHgyPSIyMzUuMzMiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODAuMTciIHkxPSIyOTQiIHgyPSIyODAuMTciIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMjUiIHkxPSIyOTQiIHgyPSIzMjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNjkuODMiIHkxPSIyOTQiIHgyPSIzNjkuODMiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MTQuNjciIHkxPSIyOTQiIHgyPSI0MTQuNjciIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NTkuNSIgeTE9IjI5NCIgeDI9IjQ1OS41IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTA0LjMzIiB5MT0iMjk0IiB4Mj0iNTA0LjMzIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTQ5LjE3IiB5MT0iMjk0IiB4Mj0iNTQ5LjE3IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTk0IiB5MT0iMjk0IiB4Mj0iNTk0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1OTQiIHkyPSIyOTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyNDAuOCIgeDI9IjU5NCIgeTI9IjI0MC44IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU2IiB5MT0iMTg3LjYiIHgyPSI1OTQiIHkyPSIxODcuNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NiIgeTE9IjEzNC40IiB4Mj0iNTk0IiB5Mj0iMTM0LjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSI4MS4yIiB4Mj0iNTk0IiB5Mj0iODEuMiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NiIgeTE9IjI4IiB4Mj0iNTk0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1OTkiIHkyPSIyOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjA4LDI5NCA1OTksMjg5LjUgNTk5LDI5OC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjU2IiB5MT0iMjk0IiB4Mj0iNTYiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1NiwxNCA1MS41LDIzIDYwLjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1NiIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MCwwPC90ZXh0PjxsaW5lIHgxPSIxMDAuODMiIHkxPSIyOTQiIHgyPSIxMDAuODMiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjEwMC44MyIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wLDI8L3RleHQ+PGxpbmUgeDE9IjE0NS42NyIgeTE9IjI5NCIgeDI9IjE0NS42NyIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTQ1LjY3IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjAsNDwvdGV4dD48bGluZSB4MT0iMTkwLjUiIHkxPSIyOTQiIHgyPSIxOTAuNSIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTkwLjUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MCw2PC90ZXh0PjxsaW5lIHgxPSIyMzUuMzMiIHkxPSIyOTQiIHgyPSIyMzUuMzMiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIzNS4zMyIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wLDg8L3RleHQ+PGxpbmUgeDE9IjI4MC4xNyIgeTE9IjI5NCIgeDI9IjI4MC4xNyIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjgwLjE3IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEsMDwvdGV4dD48bGluZSB4MT0iMzI1IiB5MT0iMjk0IiB4Mj0iMzI1IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMjUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MSwyPC90ZXh0PjxsaW5lIHgxPSIzNjkuODMiIHkxPSIyOTQiIHgyPSIzNjkuODMiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM2OS44MyIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xLDQ8L3RleHQ+PGxpbmUgeDE9IjQxNC42NyIgeTE9IjI5NCIgeDI9IjQxNC42NyIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDE0LjY3IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEsNjwvdGV4dD48bGluZSB4MT0iNDU5LjUiIHkxPSIyOTQiIHgyPSI0NTkuNSIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDU5LjUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MSw4PC90ZXh0PjxsaW5lIHgxPSI1MDQuMzMiIHkxPSIyOTQiIHgyPSI1MDQuMzMiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwNC4zMyIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLDA8L3RleHQ+PGxpbmUgeDE9IjU0OS4xNyIgeTE9IjI5NCIgeDI9IjU0OS4xNyIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTQ5LjE3IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIsMjwvdGV4dD48bGluZSB4MT0iNTk0IiB5MT0iMjk0IiB4Mj0iNTk0IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1OTQiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Miw0PC90ZXh0PjxsaW5lIHgxPSI1MiIgeTE9IjI5NCIgeDI9IjU2IiB5Mj0iMjk0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0OCIgeT0iMjk4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDA8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iMjQwLjgiIHgyPSI1NiIgeTI9IjI0MC44IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0OCIgeT0iMjQ0LjgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMjwvdGV4dD48bGluZSB4MT0iNTIiIHkxPSIxODcuNiIgeDI9IjU2IiB5Mj0iMTg3LjYiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4IiB5PSIxOTEuNiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCw0PC90ZXh0PjxsaW5lIHgxPSI1MiIgeTE9IjEzNC40IiB4Mj0iNTYiIHkyPSIxMzQuNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgiIHk9IjEzOC40IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wLDY8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iODEuMiIgeDI9IjU2IiB5Mj0iODEuMiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgiIHk9Ijg1LjIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsODwvdGV4dD48bGluZSB4MT0iNTIiIHkxPSIyOCIgeDI9IjU2IiB5Mj0iMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4IiB5PSIzMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MSwwPC90ZXh0Pjx0ZXh0IHg9IjYxNCIgeT0iMzMwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIj5jICjDlyAxMOKBu+KBtCBtb2zCt0zigbvCuSk8L3RleHQ+PHRleHQgeD0iNTAiIHk9IjEwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmFic29yYmFuY2UgQTwvdGV4dD48cGF0aCBkPSJNIDU2IDI5NCBMIDU3Ljc5IDI5My4xNSBMIDU5LjU5IDI5Mi4zIEwgNjEuMzggMjkxLjQ1IEwgNjMuMTcgMjkwLjYgTCA2NC45NyAyODkuNzQgTCA2Ni43NiAyODguODkgTCA2OC41NSAyODguMDQgTCA3MC4zNSAyODcuMTkgTCA3Mi4xNCAyODYuMzQgTCA3My45MyAyODUuNDkgTCA3NS43MyAyODQuNjQgTCA3Ny41MiAyODMuNzkgTCA3OS4zMSAyODIuOTMgTCA4MS4xMSAyODIuMDggTCA4Mi45IDI4MS4yMyBMIDg0LjY5IDI4MC4zOCBMIDg2LjQ5IDI3OS41MyBMIDg4LjI4IDI3OC42OCBMIDkwLjA3IDI3Ny44MyBMIDkxLjg3IDI3Ni45OCBMIDkzLjY2IDI3Ni4xMiBMIDk1LjQ1IDI3NS4yNyBMIDk3LjI1IDI3NC40MiBMIDk5LjA0IDI3My41NyBMIDEwMC44MyAyNzIuNzIgTCAxMDIuNjMgMjcxLjg3IEwgMTA0LjQyIDI3MS4wMiBMIDEwNi4yMSAyNzAuMTcgTCAxMDguMDEgMjY5LjMyIEwgMTA5LjggMjY4LjQ2IEwgMTExLjU5IDI2Ny42MSBMIDExMy4zOSAyNjYuNzYgTCAxMTUuMTggMjY1LjkxIEwgMTE2Ljk3IDI2NS4wNiBMIDExOC43NyAyNjQuMjEgTCAxMjAuNTYgMjYzLjM2IEwgMTIyLjM1IDI2Mi41MSBMIDEyNC4xNSAyNjEuNjUgTCAxMjUuOTQgMjYwLjggTCAxMjcuNzMgMjU5Ljk1IEwgMTI5LjUzIDI1OS4xIEwgMTMxLjMyIDI1OC4yNSBMIDEzMy4xMSAyNTcuNCBMIDEzNC45MSAyNTYuNTUgTCAxMzYuNyAyNTUuNyBMIDEzOC40OSAyNTQuODQgTCAxNDAuMjkgMjUzLjk5IEwgMTQyLjA4IDI1My4xNCBMIDE0My44NyAyNTIuMjkgTCAxNDUuNjcgMjUxLjQ0IEwgMTQ3LjQ2IDI1MC41OSBMIDE0OS4yNSAyNDkuNzQgTCAxNTEuMDUgMjQ4Ljg5IEwgMTUyLjg0IDI0OC4wNCBMIDE1NC42MyAyNDcuMTggTCAxNTYuNDMgMjQ2LjMzIEwgMTU4LjIyIDI0NS40OCBMIDE2MC4wMSAyNDQuNjMgTCAxNjEuODEgMjQzLjc4IEwgMTYzLjYgMjQyLjkzIEwgMTY1LjM5IDI0Mi4wOCBMIDE2Ny4xOSAyNDEuMjMgTCAxNjguOTggMjQwLjM3IEwgMTcwLjc3IDIzOS41MiBMIDE3Mi41NyAyMzguNjcgTCAxNzQuMzYgMjM3LjgyIEwgMTc2LjE1IDIzNi45NyBMIDE3Ny45NSAyMzYuMTIgTCAxNzkuNzQgMjM1LjI3IEwgMTgxLjUzIDIzNC40MiBMIDE4My4zMyAyMzMuNTYgTCAxODUuMTIgMjMyLjcxIEwgMTg2LjkxIDIzMS44NiBMIDE4OC43MSAyMzEuMDEgTCAxOTAuNSAyMzAuMTYgTCAxOTIuMjkgMjI5LjMxIEwgMTk0LjA5IDIyOC40NiBMIDE5NS44OCAyMjcuNjEgTCAxOTcuNjcgMjI2Ljc2IEwgMTk5LjQ3IDIyNS45IEwgMjAxLjI2IDIyNS4wNSBMIDIwMy4wNSAyMjQuMiBMIDIwNC44NSAyMjMuMzUgTCAyMDYuNjQgMjIyLjUgTCAyMDguNDMgMjIxLjY1IEwgMjEwLjIzIDIyMC44IEwgMjEyLjAyIDIxOS45NSBMIDIxMy44MSAyMTkuMDkgTCAyMTUuNjEgMjE4LjI0IEwgMjE3LjQgMjE3LjM5IEwgMjE5LjE5IDIxNi41NCBMIDIyMC45OSAyMTUuNjkgTCAyMjIuNzggMjE0Ljg0IEwgMjI0LjU3IDIxMy45OSBMIDIyNi4zNyAyMTMuMTQgTCAyMjguMTYgMjEyLjI4IEwgMjI5Ljk1IDIxMS40MyBMIDIzMS43NSAyMTAuNTggTCAyMzMuNTQgMjA5LjczIEwgMjM1LjMzIDIwOC44OCBMIDIzNy4xMyAyMDguMDMgTCAyMzguOTIgMjA3LjE4IEwgMjQwLjcxIDIwNi4zMyBMIDI0Mi41MSAyMDUuNDggTCAyNDQuMyAyMDQuNjIgTCAyNDYuMDkgMjAzLjc3IEwgMjQ3Ljg5IDIwMi45MiBMIDI0OS42OCAyMDIuMDcgTCAyNTEuNDcgMjAxLjIyIEwgMjUzLjI3IDIwMC4zNyBMIDI1NS4wNiAxOTkuNTIgTCAyNTYuODUgMTk4LjY3IEwgMjU4LjY1IDE5Ny44MSBMIDI2MC40NCAxOTYuOTYgTCAyNjIuMjMgMTk2LjExIEwgMjY0LjAzIDE5NS4yNiBMIDI2NS44MiAxOTQuNDEgTCAyNjcuNjEgMTkzLjU2IEwgMjY5LjQxIDE5Mi43MSBMIDI3MS4yIDE5MS44NiBMIDI3Mi45OSAxOTEgTCAyNzQuNzkgMTkwLjE1IEwgMjc2LjU4IDE4OS4zIEwgMjc4LjM3IDE4OC40NSBMIDI4MC4xNyAxODcuNiBMIDI4MS45NiAxODYuNzUgTCAyODMuNzUgMTg1LjkgTCAyODUuNTUgMTg1LjA1IEwgMjg3LjM0IDE4NC4yIEwgMjg5LjEzIDE4My4zNCBMIDI5MC45MyAxODIuNDkgTCAyOTIuNzIgMTgxLjY0IEwgMjk0LjUxIDE4MC43OSBMIDI5Ni4zMSAxNzkuOTQgTCAyOTguMSAxNzkuMDkgTCAyOTkuODkgMTc4LjI0IEwgMzAxLjY5IDE3Ny4zOSBMIDMwMy40OCAxNzYuNTMgTCAzMDUuMjcgMTc1LjY4IEwgMzA3LjA3IDE3NC44MyBMIDMwOC44NiAxNzMuOTggTCAzMTAuNjUgMTczLjEzIEwgMzEyLjQ1IDE3Mi4yOCBMIDMxNC4yNCAxNzEuNDMgTCAzMTYuMDMgMTcwLjU4IEwgMzE3LjgzIDE2OS43MiBMIDMxOS42MiAxNjguODcgTCAzMjEuNDEgMTY4LjAyIEwgMzIzLjIxIDE2Ny4xNyBMIDMyNSAxNjYuMzIgTCAzMjYuNzkgMTY1LjQ3IEwgMzI4LjU5IDE2NC42MiBMIDMzMC4zOCAxNjMuNzcgTCAzMzIuMTcgMTYyLjkyIEwgMzMzLjk3IDE2Mi4wNiBMIDMzNS43NiAxNjEuMjEgTCAzMzcuNTUgMTYwLjM2IEwgMzM5LjM1IDE1OS41MSBMIDM0MS4xNCAxNTguNjYgTCAzNDIuOTMgMTU3LjgxIEwgMzQ0LjczIDE1Ni45NiBMIDM0Ni41MiAxNTYuMTEgTCAzNDguMzEgMTU1LjI1IEwgMzUwLjExIDE1NC40IEwgMzUxLjkgMTUzLjU1IEwgMzUzLjY5IDE1Mi43IEwgMzU1LjQ5IDE1MS44NSBMIDM1Ny4yOCAxNTEgTCAzNTkuMDcgMTUwLjE1IEwgMzYwLjg3IDE0OS4zIEwgMzYyLjY2IDE0OC40NCBMIDM2NC40NSAxNDcuNTkgTCAzNjYuMjUgMTQ2Ljc0IEwgMzY4LjA0IDE0NS44OSBMIDM2OS44MyAxNDUuMDQgTCAzNzEuNjMgMTQ0LjE5IEwgMzczLjQyIDE0My4zNCBMIDM3NS4yMSAxNDIuNDkgTCAzNzcuMDEgMTQxLjY0IEwgMzc4LjggMTQwLjc4IEwgMzgwLjU5IDEzOS45MyBMIDM4Mi4zOSAxMzkuMDggTCAzODQuMTggMTM4LjIzIEwgMzg1Ljk3IDEzNy4zOCBMIDM4Ny43NyAxMzYuNTMgTCAzODkuNTYgMTM1LjY4IEwgMzkxLjM1IDEzNC44MyBMIDM5My4xNSAxMzMuOTcgTCAzOTQuOTQgMTMzLjEyIEwgMzk2LjczIDEzMi4yNyBMIDM5OC41MyAxMzEuNDIgTCA0MDAuMzIgMTMwLjU3IEwgNDAyLjExIDEyOS43MiBMIDQwMy45MSAxMjguODcgTCA0MDUuNyAxMjguMDIgTCA0MDcuNDkgMTI3LjE2IEwgNDA5LjI5IDEyNi4zMSBMIDQxMS4wOCAxMjUuNDYgTCA0MTIuODcgMTI0LjYxIEwgNDE0LjY3IDEyMy43NiBMIDQxNi40NiAxMjIuOTEgTCA0MTguMjUgMTIyLjA2IEwgNDIwLjA1IDEyMS4yMSBMIDQyMS44NCAxMjAuMzYgTCA0MjMuNjMgMTE5LjUgTCA0MjUuNDMgMTE4LjY1IEwgNDI3LjIyIDExNy44IEwgNDI5LjAxIDExNi45NSBMIDQzMC44MSAxMTYuMSBMIDQzMi42IDExNS4yNSBMIDQzNC4zOSAxMTQuNCBMIDQzNi4xOSAxMTMuNTUgTCA0MzcuOTggMTEyLjY5IEwgNDM5Ljc3IDExMS44NCBMIDQ0MS41NyAxMTAuOTkgTCA0NDMuMzYgMTEwLjE0IEwgNDQ1LjE1IDEwOS4yOSBMIDQ0Ni45NSAxMDguNDQgTCA0NDguNzQgMTA3LjU5IEwgNDUwLjUzIDEwNi43NCBMIDQ1Mi4zMyAxMDUuODggTCA0NTQuMTIgMTA1LjAzIEwgNDU1LjkxIDEwNC4xOCBMIDQ1Ny43MSAxMDMuMzMgTCA0NTkuNSAxMDIuNDggTCA0NjEuMjkgMTAxLjYzIEwgNDYzLjA5IDEwMC43OCBMIDQ2NC44OCA5OS45MyBMIDQ2Ni42NyA5OS4wOCBMIDQ2OC40NyA5OC4yMiBMIDQ3MC4yNiA5Ny4zNyBMIDQ3Mi4wNSA5Ni41MiBMIDQ3My44NSA5NS42NyBMIDQ3NS42NCA5NC44MiBMIDQ3Ny40MyA5My45NyBMIDQ3OS4yMyA5My4xMiBMIDQ4MS4wMiA5Mi4yNyBMIDQ4Mi44MSA5MS40MSBMIDQ4NC42MSA5MC41NiBMIDQ4Ni40IDg5LjcxIEwgNDg4LjE5IDg4Ljg2IEwgNDg5Ljk5IDg4LjAxIEwgNDkxLjc4IDg3LjE2IEwgNDkzLjU3IDg2LjMxIEwgNDk1LjM3IDg1LjQ2IEwgNDk3LjE2IDg0LjYgTCA0OTguOTUgODMuNzUgTCA1MDAuNzUgODIuOSBMIDUwMi41NCA4Mi4wNSBMIDUwNC4zMyA4MS4yIEwgNTA2LjEzIDgwLjM1IEwgNTA3LjkyIDc5LjUgTCA1MDkuNzEgNzguNjUgTCA1MTEuNTEgNzcuOCBMIDUxMy4zIDc2Ljk0IEwgNTE1LjA5IDc2LjA5IEwgNTE2Ljg5IDc1LjI0IEwgNTE4LjY4IDc0LjM5IEwgNTIwLjQ3IDczLjU0IEwgNTIyLjI3IDcyLjY5IEwgNTI0LjA2IDcxLjg0IEwgNTI1Ljg1IDcwLjk5IEwgNTI3LjY1IDcwLjEzIEwgNTI5LjQ0IDY5LjI4IEwgNTMxLjIzIDY4LjQzIEwgNTMzLjAzIDY3LjU4IEwgNTM0LjgyIDY2LjczIEwgNTM2LjYxIDY1Ljg4IEwgNTM4LjQxIDY1LjAzIEwgNTQwLjIgNjQuMTggTCA1NDEuOTkgNjMuMzIgTCA1NDMuNzkgNjIuNDcgTCA1NDUuNTggNjEuNjIgTCA1NDcuMzcgNjAuNzcgTCA1NDkuMTcgNTkuOTIgTCA1NTAuOTYgNTkuMDcgTCA1NTIuNzUgNTguMjIgTCA1NTQuNTUgNTcuMzcgTCA1NTYuMzQgNTYuNTIgTCA1NTguMTMgNTUuNjYgTCA1NTkuOTMgNTQuODEgTCA1NjEuNzIgNTMuOTYgTCA1NjMuNTEgNTMuMTEgTCA1NjUuMzEgNTIuMjYgTCA1NjcuMSA1MS40MSBMIDU2OC44OSA1MC41NiBMIDU3MC42OSA0OS43MSBMIDU3Mi40OCA0OC44NSBMIDU3NC4yNyA0OCBMIDU3Ni4wNyA0Ny4xNSBMIDU3Ny44NiA0Ni4zIEwgNTc5LjY1IDQ1LjQ1IEwgNTgxLjQ1IDQ0LjYgTCA1ODMuMjQgNDMuNzUgTCA1ODUuMDMgNDIuOSBMIDU4Ni44MyA0Mi4wNCBMIDU4OC42MiA0MS4xOSBMIDU5MC40MSA0MC4zNCBMIDU5Mi4yMSAzOS40OSBMIDU5NCAzOC42NCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxNDUuNjciIGN5PSIyNTEuNDQiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjIzNS4zMyIgY3k9IjIwOC44OCIgcj0iNC41IiBmaWxsPSIjMWY2ZmViIi8+PGNpcmNsZSBjeD0iMzI1IiBjeT0iMTY2LjMyIiByPSI0LjUiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSI0MTQuNjciIGN5PSIxMjMuNzYiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIvPjxjaXJjbGUgY3g9IjUwNC4zMyIgY3k9IjgxLjIiIHI9IjQuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI1NiIgeTE9IjE1NS42OCIgeDI9IjM0Ny40MiIgeTI9IjE1NS42OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzQ3LjQyIiB5MT0iMTU1LjY4IiB4Mj0iMzQ3LjQyIiB5Mj0iMjk0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjM0Ny40MiIgY3k9IjE1NS42OCIgcj0iNS41IiBmaWxsPSIjYzAyYTJhIi8+PHJlY3QgeD0iNjAiIHk9IjEzNC42OCIgd2lkdGg9IjczLjUyIiBoZWlnaHQ9IjIwLjI1IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iNjQiIHk9IjE0Ny42OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5BeCA9IDAsNTI8L3RleHQ+PHJlY3QgeD0iMzUxLjQyIiB5PSIyNzEiIHdpZHRoPSIxNzUuNDQiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSIzNTUuNDIiIHk9IjI4NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5jeCA9IDEsMyDDlyAxMOKBu+KBtCBtb2zCt0zigbvCuTwvdGV4dD48cmVjdCB4PSI0NDkuMzYiIHk9IjEzMS4xNCIgd2lkdGg9IjEzMS43NiIgaGVpZ2h0PSIyMC4yNSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjQ1My4zNiIgeT0iMTQ0LjE0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPkEgPSA0LDAgw5cgMTDCsyDDlyBjPC90ZXh0Pjx0ZXh0IHg9IjM4MCIgeT0iNzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBvaW50cyBibGV1cyA6IHNvbHV0aW9ucyDDqXRhbG9uczwvdGV4dD48L3N2Zz4=)
*Droite d'étalonnage de l'exemple : A = 4,0 × 10³ × c ; l'absorbance 0,52 de l'inconnue correspond à c = 1,3 × 10⁻⁴ mol·L⁻¹.*
<!-- /schema -->

1. **Préparer une gamme d'étalons** : plusieurs solutions de concentrations **connues** de
   l'espèce colorée (par dilutions d'une solution mère).
2. **Régler** le spectrophotomètre sur $\lambda_{\max}$ et **faire le blanc** (zéro sur le
   solvant seul).
3. **Mesurer** l'absorbance $A$ de chaque étalon.
4. **Tracer** la **droite d'étalonnage** $A = f(c)$. D'après Beer-Lambert elle passe par
   l'**origine** ; son coefficient directeur vaut $k = \varepsilon\,\ell$.
5. **Mesurer** l'absorbance $A_x$ de la solution inconnue et **lire** (ou calculer) $c_x$ sur
   la droite.

$$\boxed{c_x = \frac{A_x}{k}}\qquad k = \varepsilon\,\ell = \text{coefficient directeur de } A=f(c)$$

> **Exemple.** La droite d'étalonnage a pour équation $A = 4{,}0\times 10^{3}\, c$ (avec $c$ en
> $\text{mol·L}^{-1}$). L'inconnue donne $A_x = 0{,}52$. Alors
> $c_x = \dfrac{0{,}52}{4{,}0\times 10^{3}} = 1{,}3\times 10^{-4}\ \text{mol·L}^{-1}$.

> ⚠️ **La même cuve, la même $\lambda$, le même blanc** pour les étalons **et** l'inconnue.
> Changer un réglage entre la calibration et la mesure fausse tout. Et si $A_x$ **dépasse** la
> gamme, on **dilue** l'inconnue (puis on multiplie $c_x$ par le facteur de dilution).

---

## 6. Dosage direct par titrage

Quand l'espèce n'est pas colorée, on la **dose par titrage** : on la fait **réagir
totalement** avec un réactif de concentration connue (le **titrant**), versé à la burette.

### L'équivalence

<!-- schema:montage-titrage -->
![Montage d'un titrage : la solution titrante est versée à la burette dans la solution à titrer, agitée en permanence ; une sonde suit la transformation.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzE2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMTYiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI4MCIgeT0iMzAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjgiIHJ4PSIwIiBmaWxsPSIjOWFhNmIyIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48bGluZSB4MT0iMTAwIiB5MT0iMzAwIiB4Mj0iMTAwIiB5Mj0iMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTAwIiB5MT0iNjAiIHgyPSIyMDUiIHkyPSI2MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjIwMyIgeT0iNjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMzAiIHJ4PSIwIiBmaWxsPSIjY2ZlNGY3IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTSAyMDMgMzAgTCAyMDMgMTk2IEwgMjA4IDIxMCBMIDIwOCAyMjggTSAyMTIgMjI4IEwgMjEyIDIxMCBMIDIxNyAxOTYgTCAyMTcgMzAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMyIgeTE9IjQyIiB4Mj0iMjA5IiB5Mj0iNDIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAzIiB5MT0iNTciIHgyPSIyMDkiIHkyPSI1NyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDMiIHkxPSI3MiIgeDI9IjIwOSIgeTI9IjcyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMyIgeTE9Ijg3IiB4Mj0iMjA5IiB5Mj0iODciIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAzIiB5MT0iMTAyIiB4Mj0iMjA5IiB5Mj0iMTAyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMyIgeTE9IjExNyIgeDI9IjIwOSIgeTI9IjExNyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDMiIHkxPSIxMzIiIHgyPSIyMDkiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAzIiB5MT0iMTQ3IiB4Mj0iMjA5IiB5Mj0iMTQ3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMyIgeTE9IjE2MiIgeDI9IjIwOSIgeTI9IjE2MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDMiIHkxPSIxNzciIHgyPSIyMDkiIHkyPSIxNzciIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAzIiB5MT0iMTkyIiB4Mj0iMjA5IiB5Mj0iMTkyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMjAwIiB5PSIyMTIiIHdpZHRoPSIyMCIgaGVpZ2h0PSI2IiByeD0iMCIgZmlsbD0iIzNiNDY1MiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjIzMiIgeT0iNzAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+YnVyZXR0ZSBncmFkdcOpZTwvdGV4dD48dGV4dCB4PSIyMzIiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnNvbHV0aW9uIHRpdHJhbnRlPC90ZXh0Pjx0ZXh0IHg9IjIzMiIgeT0iMTA3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPihjb25jZW50cmF0aW9uIGNvbm51ZSk8L3RleHQ+PHJlY3QgeD0iMTI1IiB5PSIyNjYiIHdpZHRoPSIxNzAiIGhlaWdodD0iMzQiIHJ4PSI1IiBmaWxsPSIjZTZlYmYwIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48Y2lyY2xlIGN4PSIyNzMiIGN5PSIyODMiIHI9IjgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxyZWN0IHg9IjE2NSIgeT0iMjIzLjUiIHdpZHRoPSI5MCIgaGVpZ2h0PSIzOC41IiByeD0iMCIgZmlsbD0iI2Y2ZTdiOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0gMTYwIDE5MiBRIDE2NSAxOTIgMTY1IDE5OCBMIDE2NSAyNjIgTCAyNTUgMjYyIEwgMjU1IDE5MiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIyMDAiIHk9IjI1MiIgd2lkdGg9IjE4IiBoZWlnaHQ9IjUiIHJ4PSIyIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzIwIiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+c29sdXRpb24gw6AgdGl0cmVyPC90ZXh0PjxsaW5lIHgxPSIzMTYiIHkxPSIyNDYiIHgyPSIyNTYuOTUiIHkyPSIyMzguODQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjUwLDIzOCAyNTYuNTMsMjQyLjMyIDI1Ny4zNywyMzUuMzciIGZpbGw9IiM1YjZiN2EiLz48dGV4dCB4PSIzMzAiIHk9IjI5NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5hZ2l0YXRldXIgbWFnbsOpdGlxdWU8L3RleHQ+PGxpbmUgeDE9IjI0MCIgeTE9IjI1MCIgeDI9IjI0MCIgeTI9IjE1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMjQwIDE1MCBMIDI0MCAxMzAgTCA0MzAgMTMwIEwgNDMwIDE1MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSI0MDAiIHk9IjE1MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI3MCIgcng9IjYiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxyZWN0IHg9IjQxNSIgeT0iMTYyIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjMwIiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iNDc1IiB5PSIyMTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnBILW3DqHRyZTwvdGV4dD48dGV4dCB4PSIyNTAiIHk9IjE3MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5zb25kZTwvdGV4dD48L3N2Zz4=)
*Montage d'un titrage : la solution titrante est versée à la burette dans la solution à titrer, agitée en permanence ; une sonde suit la transformation.*
<!-- /schema -->

L'**équivalence** est l'instant où les réactifs sont introduits dans les **proportions
stœchiométriques** : le réactif titrant vient d'avoir **entièrement consommé** l'espèce
titrée. Avant, le titré est en excès ; après, le titrant est en excès. On la repère par un
**changement** : virage d'un indicateur coloré, saut de pH, saut de conductivité.

### La relation à l'équivalence

Pour un titrage dont l'équation est $a\,\text{A} + b\,\text{B} \rightarrow \text{produits}$
(A titré, B titrant), les quantités introduites sont dans le rapport des coefficients :

$$\boxed{\dfrac{n_{\text{A}}}{a} = \dfrac{n_{\text{B, versé}}}{b}}\qquad
\text{soit, pour } a=b=1 :\quad n_{\text{A}} = n_{\text{B}} = C_{\text{B}}\,V_{\text{E}}$$

où $V_{\text{E}}$ est le **volume à l'équivalence** (volume de titrant versé pour l'atteindre)
et $C_{\text{B}}$ la concentration du titrant. On en tire la concentration cherchée :

$$C_{\text{A}} = \frac{n_{\text{A}}}{V_{\text{A}}} = \frac{C_{\text{B}}\,V_{\text{E}}}{V_{\text{A}}}\quad(\text{cas } a=b=1)$$

> **Exemple.** On titre $V_{\text{A}} = 10{,}0\ \text{mL}$ d'une solution d'acide par une base
> à $C_{\text{B}} = 0{,}10\ \text{mol·L}^{-1}$ (réaction $1$ pour $1$). L'équivalence est
> atteinte pour $V_{\text{E}} = 12{,}5\ \text{mL}$.
> $n_{\text{A}} = C_{\text{B}} V_{\text{E}} = 0{,}10 \times 12{,}5\times 10^{-3} = 1{,}25\times 10^{-3}\ \text{mol}$,
> puis $C_{\text{A}} = \dfrac{1{,}25\times 10^{-3}}{10{,}0\times 10^{-3}} = 0{,}125\ \text{mol·L}^{-1}$.

> ⚠️ **Convertis les volumes en litres** (ou garde des mL des deux côtés de manière
> cohérente) : un $\text{mL}$ oublié fait un facteur $1000$. Et n'utilise $n_A = C_B V_E$ que
> si les coefficients valent $1$ ; sinon, passe par la relation encadrée avec $a$ et $b$.

---

## 7. Tableau récapitulatif

| | |
|---|---|
| Densité | $d = \dfrac{\rho}{\rho_{\text{eau}}}$, **sans unité** ; $\rho_{\text{eau}} = 1{,}00\ \text{g·mL}^{-1}$ |
| Fusion | pure = nette ; impure = basse et étalée |
| Couleur perçue | **complémentaire** de la couleur absorbée à $\lambda_{\max}$ |
| IR | bandes = **groupes** : O–H large ($\sim 3300$), C=O fine ($\sim 1700$) en $\text{cm}^{-1}$ |
| Beer-Lambert | $A = \varepsilon\,\ell\,c$ — $A$ sans unité, $\varepsilon$ en $\text{L·mol}^{-1}\text{·cm}^{-1}$, $\ell$ en $\text{cm}$, $c$ en $\text{mol·L}^{-1}$ |
| Étalonnage | droite $A=f(c)$ par l'origine, pente $k=\varepsilon\ell$ ; $c_x = A_x/k$ |
| Titrage | à l'équivalence $\dfrac{n_A}{a}=\dfrac{n_B}{b}$ ; si $1$–$1$ : $C_A = \dfrac{C_B V_E}{V_A}$ |

---

## 8. Les erreurs qui coûtent des points

1. **Donner une unité à $A$ ou à $d$.** L'absorbance et la densité sont **sans unité**.
   Écrire « $A = 0{,}52$ » et « $d = 0{,}88$ », jamais « $0{,}52$ unités ».
2. **Se tromper d'unité pour $\varepsilon$.** C'est $\text{L·mol}^{-1}\text{·cm}^{-1}$ : c'est
   ce qui fait tomber toutes les unités de $A = \varepsilon\ell c$.
3. **Confondre couleur absorbée et couleur perçue.** Elles sont **complémentaires** : une
   solution bleue absorbe dans le rouge/orangé, pas dans le bleu.
4. **Oublier de convertir les mL en L** dans un titrage ou un calcul de concentration :
   $V_E = 12{,}5\ \text{mL} = 12{,}5\times 10^{-3}\ \text{L}$. Un facteur $1000$ sinon.
5. **Utiliser $n_A = C_B V_E$ quand les coefficients ne valent pas $1$.** Repars de
   $\frac{n_A}{a} = \frac{n_B}{b}$.
6. **Mesurer l'inconnue avec une absorbance hors gamme** (trop concentrée, hors du domaine
   linéaire) : il faut **diluer** avant, puis corriger par le facteur de dilution.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « Sciences physiques et chimiques en laboratoire » (SPCL),
série STL, classe de première — BO du 22 janvier 2019.
Extrait : docs/programme-stl-spcl.txt, section « Analyses physico-chimiques :
spectroscopies et dosages (1re) » (ligne 34), qui liste :
  - Tests d'identification ; propriétés physiques des espèces.
  - Spectroscopies UV-visible et infrarouge (identification de groupes).
  - Dosage par étalonnage spectrophotométrique (loi de Beer-Lambert).
  - Dosage direct par titrage.
Le programme de référence est très synthétique ; le contenu détaillé (valeurs de bandes IR,
étoile des couleurs, protocole d'étalonnage) a été rédigé à partir des attendus usuels du
niveau. À CONFRONTER AU PDF/BO OFFICIEL par un professeur avant publication (le .txt fourni
ne donne que les intitulés, pas le détail des capacités exigibles).

⚠️ POINTS À CONFRONTER AU RELECTEUR :
- Les valeurs de bandes IR (tableau §3) sont des ordres de grandeur usuels ; vérifier
  qu'elles correspondent à la table de référence utilisée en STL SPCL.
- Le coefficient ε est-il nommé « coefficient d'absorption molaire » ou « absorptivité
  molaire » dans le référentiel STL ? Unité L·mol⁻¹·cm⁻¹ retenue.
- Le titrage : le programme dit « dosage direct par titrage » sans préciser suivi (coloré /
  pH-métrique / conductimétrique). J'ai présenté l'équivalence de façon générale sans fixer
  le type de suivi. À valider.
- Faut-il traiter le titrage colorimétrique par un exemple d'oxydoréduction (permanganate)
  plutôt qu'acide-base ? Choix acide-base fait pour rester sur du 1–1 simple.
- λmax de CuSO4 (~800 nm, proche IR) : exemple correct mais à la limite du visible ;
  un relecteur préférera peut-être un exemple pleinement visible.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
