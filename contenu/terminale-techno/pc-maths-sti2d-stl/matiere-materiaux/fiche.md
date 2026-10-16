---
id: tale-sti2d-pc-matiere-materiaux
titre: "Matière et matériaux : états, radioactivité, combustions et acido-basique"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 16
prerequis:
  - Constitution de l'atome, écriture du noyau (Seconde)
  - Énergie, puissance, rendement (Première STI2D/STL)
  - Fonctions exponentielle et logarithme (Maths, Terminale STI2D/STL)
statut: brouillon
relu_par: null
---

# Matière et matériaux : états, radioactivité, combustions et acido-basique

> Choisir un matériau, le fondre, le souder, contrôler la soudure aux rayons gamma,
> décaper la pièce à l'acide, chauffer l'atelier au gaz : tout ce chapitre parle du
> **quotidien de l'industrie**. Quatre volets — matériaux et états, radioactivité,
> combustions, acido-basique — et à chaque fois la même exigence : un calcul simple,
> les bonnes unités, et la sécurité en tête.

---

## 1. Organisation de la matière et propriétés des matériaux

La matière est faite d'**atomes**, de **molécules** ou d'**ions**. La façon dont ces
entités s'assemblent explique les propriétés du matériau à notre échelle.

### Les grandes familles de matériaux

| Famille | Constitution | Propriétés typiques | Exemples |
|---|---|---|---|
| **Métaux et alliages** | atomes + électrons libres | conducteurs (électricité, chaleur), déformables | acier, aluminium, cuivre |
| **Polymères (plastiques)** | très longues molécules (macromolécules) | légers, isolants, peu résistants à la chaleur | PVC, polyéthylène |
| **Céramiques et verres** | ions ou oxydes | durs, isolants, **fragiles** (cassent net) | brique, verre, porcelaine |
| **Composites** | **matrice + renfort** | légers ET résistants | fibre de carbone + résine, béton armé |

> **Exemple.** Un câble électrique associe deux familles : le **cuivre** (métal,
> conducteur) pour le cœur, le **PVC** (polymère, isolant) pour la gaine. Chaque
> matériau est choisi pour sa propriété dominante.

### Structure ordonnée ou désordonnée

- Structure **cristalline** : les entités sont rangées de façon régulière et
  périodique (métaux, sel, glace).
- Structure **amorphe** : pas d'ordre à grande distance (verre, la plupart des
  plastiques).

### Les propriétés qu'on mesure

| Propriété | Grandeur / test | Unité |
|---|---|---|
| Masse volumique | $\rho = \dfrac{m}{V}$ | $\mathrm{kg/m^3}$ |
| Conductivité électrique | conducteur / isolant | — |
| Conductivité thermique | conduit ou non la chaleur | — |
| Tenue à la corrosion | oxydation, rouille | — |

> ⚠️ Pour $\rho = m/V$ : $m$ en **kg** et $V$ en **m³** donnent des $\mathrm{kg/m^3}$.
> Avec des g et des cm³, tu obtiens des $\mathrm{g/cm^3}$ — et
> $1\ \mathrm{g/cm^3} = 1000\ \mathrm{kg/m^3}$. C'est LA conversion piège du volet matériaux.

---

## 2. Les changements d'état

### Les six transitions

```
            fusion                vaporisation
   SOLIDE ──────────►  LIQUIDE ──────────────►  GAZ
   SOLIDE ◄──────────  LIQUIDE ◄──────────────  GAZ
          solidification            liquéfaction

   SOLIDE ──── sublimation ────► GAZ
   GAZ ──── condensation ────► SOLIDE
```

> **Repère industriel.** La **fonderie** = fusion puis solidification dans un moule.
> Le **soudage** = fusion locale des deux pièces. Le **zingage à chaud** = trempage
> dans du zinc fondu.

### Ce qu'il faut savoir sur un corps pur

Pendant le changement d'état d'un **corps pur**, la température reste **constante** :
c'est le **palier de température**. Toute l'énergie reçue sert à changer d'état, pas
à chauffer.

### L'énergie de changement d'état

$$\boxed{E = m \times L}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $E$ | énergie échangée | J |
| $m$ | masse | **kg** |
| $L$ | énergie massique de changement d'état (chaleur latente) | **J/kg** |

- Fusion, vaporisation : le matériau **reçoit** de l'énergie.
- Solidification, liquéfaction : il en **libère** autant.

> **Exemple.** Faire fondre $2{,}0$ kg de glace ($L_f = 334$ kJ/kg) demande
> $E = 2{,}0 \times 334 = 668$ kJ $= 6{,}68 \times 10^{5}$ J — sans que la température
> ne bouge de 0 °C tant qu'il reste de la glace.

---

## 3. La radioactivité

### Noyaux et isotopes

<!-- schema:penetration -->
![Pouvoir de pénétration des rayonnements : α est arrêté par une feuille de papier, β par quelques millimètres d'aluminium, γ par une forte épaisseur de plomb.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iNjAiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxNzAiIHJ4PSI2IiBmaWxsPSIjZTZlOWVlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNDUiIHk9IjUwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zb3VyY2U8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSI0MCIgd2lkdGg9IjYiIGhlaWdodD0iMjAwIiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMjAzIiB5PSIyNTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBhcGllcjwvdGV4dD48cmVjdCB4PSIzMzAiIHk9IjQwIiB3aWR0aD0iMTQiIGhlaWdodD0iMjAwIiByeD0iMCIgZmlsbD0iI2M5ZDFkYSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMzM3IiB5PSIyNTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFsdW1pbml1bSAobW0pPC90ZXh0PjxyZWN0IHg9IjQ3MCIgeT0iNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMDAiIHJ4PSIwIiBmaWxsPSIjNmI3NDgwIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI1MDAiIHk9IjI1OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cGxvbWIgw6lwYWlzPC90ZXh0PjxsaW5lIHgxPSI3MiIgeTE9IjkwIiB4Mj0iMTg4IiB5Mj0iOTAiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE5OCw5MCAxODgsODUgMTg4LDk1IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMTEwIiB5PSI4MCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+zrE8L3RleHQ+PGxpbmUgeDE9IjcyIiB5MT0iMTQwIiB4Mj0iMzE4IiB5Mj0iMTQwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMjgsMTQwIDMxOCwxMzUgMzE4LDE0NSIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjExMCIgeT0iMTMwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7OsjwvdGV4dD48cGF0aCBkPSJNIDcyIDE5MCBMIDcyIDE5MCBMIDc0IDE5Mi44OCBMIDc2IDE5NS4wNSBMIDc4IDE5NS45OCBMIDgwIDE5NS40NiBMIDgyIDE5My41OSBMIDg0IDE5MC44NSBMIDg2IDE4Ny45IEwgODggMTg1LjQ2IEwgOTAgMTg0LjEzIEwgOTIgMTg0LjI1IEwgOTQgMTg1Ljc3IEwgOTYgMTg4LjMyIEwgOTggMTkxLjI5IEwgMTAwIDE5My45NCBMIDEwMiAxOTUuNjMgTCAxMDQgMTk1Ljk0IEwgMTA2IDE5NC43OSBMIDEwOCAxOTIuNDcgTCAxMTAgMTg5LjU1IEwgMTEyIDE4Ni43NCBMIDExNCAxODQuNzIgTCAxMTYgMTg0IEwgMTE4IDE4NC43NSBMIDEyMCAxODYuNzggTCAxMjIgMTg5LjYgTCAxMjQgMTkyLjUyIEwgMTI2IDE5NC44MiBMIDEyOCAxOTUuOTQgTCAxMzAgMTk1LjYxIEwgMTMyIDE5My45IEwgMTM0IDE5MS4yNCBMIDEzNiAxODguMjcgTCAxMzggMTg1LjczIEwgMTQwIDE4NC4yMyBMIDE0MiAxODQuMTUgTCAxNDQgMTg1LjQ5IEwgMTQ2IDE4Ny45NSBMIDE0OCAxOTAuOSBMIDE1MCAxOTMuNjMgTCAxNTIgMTk1LjQ4IEwgMTU0IDE5NS45OCBMIDE1NiAxOTUuMDIgTCAxNTggMTkyLjgzIEwgMTYwIDE4OS45NSBMIDE2MiAxODcuMDggTCAxNjQgMTg0LjkyIEwgMTY2IDE4NC4wMSBMIDE2OCAxODQuNTcgTCAxNzAgMTg2LjQ1IEwgMTcyIDE4OS4yMSBMIDE3NCAxOTIuMTUgTCAxNzYgMTk0LjU4IEwgMTc4IDE5NS44OCBMIDE4MCAxOTUuNzQgTCAxODIgMTk0LjIgTCAxODQgMTkxLjYzIEwgMTg2IDE4OC42NiBMIDE4OCAxODYuMDIgTCAxOTAgMTg0LjM1IEwgMTkyIDE4NC4wNyBMIDE5NCAxODUuMjQgTCAxOTYgMTg3LjU4IEwgMTk4IDE5MC41IEwgMjAwIDE5My4zMSBMIDIwMiAxOTUuMyBMIDIwNCAxOTYgTCAyMDYgMTk1LjIzIEwgMjA4IDE5My4xNyBMIDIxMCAxOTAuMzQgTCAyMTIgMTg3LjQzIEwgMjE0IDE4NS4xNSBMIDIxNiAxODQuMDUgTCAyMTggMTg0LjQxIEwgMjIwIDE4Ni4xNCBMIDIyMiAxODguODEgTCAyMjQgMTkxLjc4IEwgMjI2IDE5NC4zMSBMIDIyOCAxOTUuNzggTCAyMzAgMTk1Ljg0IEwgMjMyIDE5NC40NyBMIDIzNCAxOTIgTCAyMzYgMTg5LjA1IEwgMjM4IDE4Ni4zMiBMIDI0MCAxODQuNSBMIDI0MiAxODQuMDIgTCAyNDQgMTg1LjAxIEwgMjQ2IDE4Ny4yMiBMIDI0OCAxOTAuMTEgTCAyNTAgMTkyLjk3IEwgMjUyIDE5NS4xMSBMIDI1NCAxOTUuOTkgTCAyNTYgMTk1LjQxIEwgMjU4IDE5My41MSBMIDI2MCAxOTAuNzQgTCAyNjIgMTg3LjggTCAyNjQgMTg1LjM5IEwgMjY2IDE4NC4xMSBMIDI2OCAxODQuMjggTCAyNzAgMTg1Ljg0IEwgMjcyIDE4OC40MyBMIDI3NCAxOTEuMzkgTCAyNzYgMTk0LjAyIEwgMjc4IDE5NS42NiBMIDI4MCAxOTUuOTIgTCAyODIgMTk0LjczIEwgMjg0IDE5Mi4zOCBMIDI4NiAxODkuNDQgTCAyODggMTg2LjY1IEwgMjkwIDE4NC42NyBMIDI5MiAxODQgTCAyOTQgMTg0LjggTCAyOTYgMTg2Ljg3IEwgMjk4IDE4OS43MSBMIDMwMCAxOTIuNjIgTCAzMDIgMTk0Ljg5IEwgMzA0IDE5NS45NiBMIDMwNiAxOTUuNTcgTCAzMDggMTkzLjgyIEwgMzEwIDE5MS4xMyBMIDMxMiAxODguMTcgTCAzMTQgMTg1LjY2IEwgMzE2IDE4NC4yIEwgMzE4IDE4NC4xNyBMIDMyMCAxODUuNTYgTCAzMjIgMTg4LjA1IEwgMzI0IDE5MSBMIDMyNiAxOTMuNzIgTCAzMjggMTk1LjUyIEwgMzMwIDE5NS45NyBMIDMzMiAxOTQuOTYgTCAzMzQgMTkyLjc0IEwgMzM2IDE4OS44NCBMIDMzOCAxODYuOTggTCAzNDAgMTg0Ljg3IEwgMzQyIDE4NC4wMSBMIDM0NCAxODQuNjEgTCAzNDYgMTg2LjU0IEwgMzQ4IDE4OS4zMSBMIDM1MCAxOTIuMjUgTCAzNTIgMTk0LjY0IEwgMzU0IDE5NS45IEwgMzU2IDE5NS43MSBMIDM1OCAxOTQuMTIgTCAzNjAgMTkxLjUyIEwgMzYyIDE4OC41NSBMIDM2NCAxODUuOTQgTCAzNjYgMTg0LjMyIEwgMzY4IDE4NC4wOSBMIDM3MCAxODUuMzEgTCAzNzIgMTg3LjY3IEwgMzc0IDE5MC42MSBMIDM3NiAxOTMuNCBMIDM3OCAxOTUuMzUgTCAzODAgMTk2IEwgMzgyIDE5NS4xNyBMIDM4NCAxOTMuMDggTCAzODYgMTkwLjI0IEwgMzg4IDE4Ny4zNCBMIDM5MCAxODUuMDggTCAzOTIgMTg0LjA0IEwgMzk0IDE4NC40NSBMIDM5NiAxODYuMjIgTCAzOTggMTg4LjkyIEwgNDAwIDE5MS44OCBMIDQwMiAxOTQuMzggTCA0MDQgMTk1LjgxIEwgNDA2IDE5NS44MiBMIDQwOCAxOTQuNCBMIDQxMCAxOTEuOSBMIDQxMiAxODguOTQgTCA0MTQgMTg2LjI0IEwgNDE2IDE4NC40NiBMIDQxOCAxODQuMDMgTCA0MjAgMTg1LjA3IEwgNDIyIDE4Ny4zMSBMIDQyNCAxOTAuMjEgTCA0MjYgMTkzLjA2IEwgNDI4IDE5NS4xNiBMIDQzMCAxOTYgTCA0MzIgMTk1LjM2IEwgNDM0IDE5My40MiBMIDQzNiAxOTAuNjQgTCA0MzggMTg3LjcgTCA0NDAgMTg1LjMyIEwgNDQyIDE4NC4wOSBMIDQ0NCAxODQuMzEgTCA0NDYgMTg1LjkyIEwgNDQ4IDE4OC41MyBMIDQ1MCAxOTEuNSBMIDQ1MiAxOTQuMSBMIDQ1NCAxOTUuNyBMIDQ1NiAxOTUuOSBMIDQ1OCAxOTQuNjYgTCA0NjAgMTkyLjI4IEwgNDYyIDE4OS4zNCBMIDQ2NCAxODYuNTYgTCA0NjYgMTg0LjYyIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDY4LDE5MCA0NTgsMTg1IDQ1OCwxOTUiIGZpbGw9IiM3YTNmYjAiLz48dGV4dCB4PSIxMTAiIHk9IjE4MCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+zrM8L3RleHQ+PHRleHQgeD0iNTYwIiB5PSIzMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cG91dm9pciBkZSBww6luw6l0cmF0aW9uIDo8L3RleHQ+PHRleHQgeD0iNTkwIiB5PSI5NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrEgdHLDqHMgZmFpYmxlPC90ZXh0Pjx0ZXh0IHg9IjU5MCIgeT0iMTQ1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7OsiBtb3llbjwvdGV4dD48dGV4dCB4PSI1OTAiIHk9IjE5NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrMgdHLDqHMgZ3JhbmQ8L3RleHQ+PC9zdmc+)
*Pouvoir de pénétration des rayonnements : α est arrêté par une feuille de papier, β par quelques millimètres d'aluminium, γ par une forte épaisseur de plomb.*
<!-- /schema -->

Un noyau se note $^{A}_{Z}\text{X}$ : $Z$ protons, $A$ nucléons (protons + neutrons).
Deux **isotopes** ont le même $Z$ mais des $A$ différents. Certains noyaux sont
**instables** : ils se désintègrent spontanément — c'est la **radioactivité**, un
phénomène **aléatoire** (on ne sait pas *quand* un noyau donné se désintègre) et
**inévitable** (rien ne l'accélère ni ne l'arrête).

| Rayonnement | Nature | Pouvoir de pénétration | Arrêté par |
|---|---|---|---|
| **α** | noyau d'hélium | très faible | une feuille de papier |
| **β** | électron | moyen | quelques mm d'aluminium |
| **γ** | photon très énergétique | très grand | forte épaisseur de plomb ou béton |

### L'activité

L'**activité** $A$ d'un échantillon est le **nombre de désintégrations par seconde** :

$$\boxed{A = \lambda \times N} \qquad A \text{ en becquerels (Bq), } 1\ \mathrm{Bq} = 1 \text{ désintégration/s}$$

$N$ est le nombre de noyaux radioactifs présents et $\lambda$ la **constante
radioactive** (en $\mathrm{s^{-1}}$) : plus $\lambda$ est grand, plus la
désintégration est rapide.

### La loi de décroissance — le lien avec tes maths

Le nombre de noyaux restants diminue de façon **exponentielle** :

$$\boxed{N(t) = N_0\, e^{-\lambda t}}$$

C'est exactement la fonction exponentielle de ton cours de maths : $N(t)$ est la
solution de l'équation différentielle $N' = -\lambda N$ (type $y' = ay$ avec
$a = -\lambda < 0$, d'où la décroissance). L'activité suit la même loi :
$A(t) = A_0\, e^{-\lambda t}$.

> **Exemple.** Une source de $\lambda = 0{,}010\ \mathrm{j^{-1}}$ contient
> $N_0 = 4{,}0 \times 10^{15}$ noyaux. Au bout de $t = 100$ jours :
> $N = 4{,}0 \times 10^{15} \times e^{-0{,}010 \times 100} = 4{,}0 \times 10^{15} \times e^{-1}
> \approx 1{,}5 \times 10^{15}$ noyaux.

### La demi-vie

<!-- schema:demi-vie -->
![Décroissance radioactive : à chaque demi-vie, le nombre de noyaux restants est divisé par deux ; il en reste la moitié, puis le quart, puis le huitième.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjAiIHkxPSIyNTQiIHgyPSI2MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4MS4zNiIgeTE9IjI1NCIgeDI9IjE4MS4zNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwMi43MyIgeTE9IjI1NCIgeDI9IjMwMi43MyIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyNC4wOSIgeTE9IjI1NCIgeDI9IjQyNC4wOSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU0NS40NSIgeTE9IjI1NCIgeDI9IjU0NS40NSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjU0IiB4Mj0iNTk0IiB5Mj0iMjU0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjAzLjU1IiB4Mj0iNTk0IiB5Mj0iMjAzLjU1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTUzLjExIiB4Mj0iNTk0IiB5Mj0iMTUzLjExIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMTAyLjY2IiB4Mj0iNTk0IiB5Mj0iMTAyLjY2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iNTIuMjEiIHgyPSI1OTQiIHkyPSI1Mi4yMSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI1NCIgeDI9IjU5OSIgeTI9IjI1NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDgsMjU0IDU5OSwyNDkuNSA1OTksMjU4LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNjAiIHkxPSIyNTQiIHgyPSI2MCIgeTI9IjIzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYwLDE0IDU1LjUsMjMgNjQuNSwyMyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI1NCIgeDI9IjYwIiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MCIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxsaW5lIHgxPSIxODEuMzYiIHkxPSIyNTQiIHgyPSIxODEuMzYiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE4MS4zNiIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50wr08L3RleHQ+PGxpbmUgeDE9IjMwMi43MyIgeTE9IjI1NCIgeDI9IjMwMi43MyIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAyLjczIiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIgdMK9PC90ZXh0PjxsaW5lIHgxPSI0MjQuMDkiIHkxPSIyNTQiIHgyPSI0MjQuMDkiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyNC4wOSIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zIHTCvTwvdGV4dD48bGluZSB4MT0iNTQ1LjQ1IiB5MT0iMjU0IiB4Mj0iNTQ1LjQ1IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NDUuNDUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NCB0wr08L3RleHQ+PHRleHQgeD0iNjE0IiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPnRlbXBzPC90ZXh0Pjx0ZXh0IHg9IjU0IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5OKHQpPC90ZXh0PjxwYXRoIGQ9Ik0gNjAgNTIuMjEgTCA2MS43NCA1NC4yMSBMIDYzLjQ4IDU2LjE4IEwgNjUuMjIgNTguMTQgTCA2Ni45NiA2MC4wOCBMIDY4LjcgNjEuOTkgTCA3MC40NCA2My44OSBMIDcyLjE4IDY1Ljc3IEwgNzMuOTIgNjcuNjMgTCA3NS42NiA2OS40NyBMIDc3LjQgNzEuMyBMIDc5LjEzIDczLjEgTCA4MC44NyA3NC44OSBMIDgyLjYxIDc2LjY2IEwgODQuMzUgNzguNDIgTCA4Ni4wOSA4MC4xNSBMIDg3LjgzIDgxLjg3IEwgODkuNTcgODMuNTcgTCA5MS4zMSA4NS4yNiBMIDkzLjA1IDg2LjkzIEwgOTQuNzkgODguNTggTCA5Ni41MyA5MC4yMSBMIDk4LjI3IDkxLjgzIEwgMTAwLjAxIDkzLjQ0IEwgMTAxLjc1IDk1LjAyIEwgMTAzLjQ5IDk2LjU5IEwgMTA1LjIzIDk4LjE1IEwgMTA2Ljk3IDk5LjY5IEwgMTA4LjcxIDEwMS4yMiBMIDExMC40NSAxMDIuNzMgTCAxMTIuMTkgMTA0LjIyIEwgMTEzLjkzIDEwNS43IEwgMTE1LjY3IDEwNy4xNyBMIDExNy40MSAxMDguNjIgTCAxMTkuMTQgMTEwLjA2IEwgMTIwLjg4IDExMS40OCBMIDEyMi42MiAxMTIuODkgTCAxMjQuMzYgMTE0LjI4IEwgMTI2LjEgMTE1LjY3IEwgMTI3Ljg0IDExNy4wMyBMIDEyOS41OCAxMTguMzkgTCAxMzEuMzIgMTE5LjczIEwgMTMzLjA2IDEyMS4wNiBMIDEzNC44IDEyMi4zNyBMIDEzNi41NCAxMjMuNjcgTCAxMzguMjggMTI0Ljk2IEwgMTQwLjAyIDEyNi4yNCBMIDE0MS43NiAxMjcuNSBMIDE0My41IDEyOC43NSBMIDE0NS4yNCAxMjkuOTkgTCAxNDYuOTggMTMxLjIxIEwgMTQ4LjcyIDEzMi40MyBMIDE1MC40NiAxMzMuNjMgTCAxNTIuMiAxMzQuODIgTCAxNTMuOTQgMTM2IEwgMTU1LjY3IDEzNy4xNiBMIDE1Ny40MSAxMzguMzIgTCAxNTkuMTUgMTM5LjQ2IEwgMTYwLjg5IDE0MC41OSBMIDE2Mi42MyAxNDEuNzIgTCAxNjQuMzcgMTQyLjgzIEwgMTY2LjExIDE0My45MiBMIDE2Ny44NSAxNDUuMDEgTCAxNjkuNTkgMTQ2LjA5IEwgMTcxLjMzIDE0Ny4xNiBMIDE3My4wNyAxNDguMjEgTCAxNzQuODEgMTQ5LjI2IEwgMTc2LjU1IDE1MC4yOSBMIDE3OC4yOSAxNTEuMzIgTCAxODAuMDMgMTUyLjMzIEwgMTgxLjc3IDE1My4zNCBMIDE4My41MSAxNTQuMzQgTCAxODUuMjUgMTU1LjMyIEwgMTg2Ljk5IDE1Ni4zIEwgMTg4LjczIDE1Ny4yNiBMIDE5MC40NyAxNTguMjIgTCAxOTIuMjEgMTU5LjE3IEwgMTkzLjk1IDE2MC4xIEwgMTk1LjY4IDE2MS4wMyBMIDE5Ny40MiAxNjEuOTUgTCAxOTkuMTYgMTYyLjg2IEwgMjAwLjkgMTYzLjc2IEwgMjAyLjY0IDE2NC42NSBMIDIwNC4zOCAxNjUuNTQgTCAyMDYuMTIgMTY2LjQxIEwgMjA3Ljg2IDE2Ny4yOCBMIDIwOS42IDE2OC4xMyBMIDIxMS4zNCAxNjguOTggTCAyMTMuMDggMTY5LjgyIEwgMjE0LjgyIDE3MC42NiBMIDIxNi41NiAxNzEuNDggTCAyMTguMyAxNzIuMyBMIDIyMC4wNCAxNzMuMSBMIDIyMS43OCAxNzMuOSBMIDIyMy41MiAxNzQuNjkgTCAyMjUuMjYgMTc1LjQ4IEwgMjI3IDE3Ni4yNSBMIDIyOC43NCAxNzcuMDIgTCAyMzAuNDggMTc3Ljc4IEwgMjMyLjIyIDE3OC41NCBMIDIzMy45NSAxNzkuMjggTCAyMzUuNjkgMTgwLjAyIEwgMjM3LjQzIDE4MC43NSBMIDIzOS4xNyAxODEuNDggTCAyNDAuOTEgMTgyLjE5IEwgMjQyLjY1IDE4Mi45IEwgMjQ0LjM5IDE4My42MSBMIDI0Ni4xMyAxODQuMyBMIDI0Ny44NyAxODQuOTkgTCAyNDkuNjEgMTg1LjY3IEwgMjUxLjM1IDE4Ni4zNSBMIDI1My4wOSAxODcuMDIgTCAyNTQuODMgMTg3LjY4IEwgMjU2LjU3IDE4OC4zNCBMIDI1OC4zMSAxODguOTkgTCAyNjAuMDUgMTg5LjYzIEwgMjYxLjc5IDE5MC4yNyBMIDI2My41MyAxOTAuOSBMIDI2NS4yNyAxOTEuNTIgTCAyNjcuMDEgMTkyLjE0IEwgMjY4Ljc1IDE5Mi43NSBMIDI3MC40OCAxOTMuMzUgTCAyNzIuMjIgMTkzLjk1IEwgMjczLjk2IDE5NC41NSBMIDI3NS43IDE5NS4xMyBMIDI3Ny40NCAxOTUuNzIgTCAyNzkuMTggMTk2LjI5IEwgMjgwLjkyIDE5Ni44NiBMIDI4Mi42NiAxOTcuNDMgTCAyODQuNCAxOTcuOTkgTCAyODYuMTQgMTk4LjU0IEwgMjg3Ljg4IDE5OS4wOSBMIDI4OS42MiAxOTkuNjMgTCAyOTEuMzYgMjAwLjE3IEwgMjkzLjEgMjAwLjcgTCAyOTQuODQgMjAxLjIzIEwgMjk2LjU4IDIwMS43NSBMIDI5OC4zMiAyMDIuMjcgTCAzMDAuMDYgMjAyLjc4IEwgMzAxLjggMjAzLjI4IEwgMzAzLjU0IDIwMy43OSBMIDMwNS4yOCAyMDQuMjggTCAzMDcuMDIgMjA0Ljc3IEwgMzA4Ljc2IDIwNS4yNiBMIDMxMC40OSAyMDUuNzQgTCAzMTIuMjMgMjA2LjIyIEwgMzEzLjk3IDIwNi42OSBMIDMxNS43MSAyMDcuMTYgTCAzMTcuNDUgMjA3LjYyIEwgMzE5LjE5IDIwOC4wOCBMIDMyMC45MyAyMDguNTQgTCAzMjIuNjcgMjA4Ljk4IEwgMzI0LjQxIDIwOS40MyBMIDMyNi4xNSAyMDkuODcgTCAzMjcuODkgMjEwLjMxIEwgMzI5LjYzIDIxMC43NCBMIDMzMS4zNyAyMTEuMTcgTCAzMzMuMTEgMjExLjU5IEwgMzM0Ljg1IDIxMi4wMSBMIDMzNi41OSAyMTIuNDIgTCAzMzguMzMgMjEyLjgzIEwgMzQwLjA3IDIxMy4yNCBMIDM0MS44MSAyMTMuNjQgTCAzNDMuNTUgMjE0LjA0IEwgMzQ1LjI5IDIxNC40NCBMIDM0Ny4wMyAyMTQuODMgTCAzNDguNzYgMjE1LjIyIEwgMzUwLjUgMjE1LjYgTCAzNTIuMjQgMjE1Ljk4IEwgMzUzLjk4IDIxNi4zNiBMIDM1NS43MiAyMTYuNzMgTCAzNTcuNDYgMjE3LjEgTCAzNTkuMiAyMTcuNDYgTCAzNjAuOTQgMjE3LjgyIEwgMzYyLjY4IDIxOC4xOCBMIDM2NC40MiAyMTguNTMgTCAzNjYuMTYgMjE4Ljg5IEwgMzY3LjkgMjE5LjIzIEwgMzY5LjY0IDIxOS41OCBMIDM3MS4zOCAyMTkuOTIgTCAzNzMuMTIgMjIwLjI1IEwgMzc0Ljg2IDIyMC41OSBMIDM3Ni42IDIyMC45MiBMIDM3OC4zNCAyMjEuMjQgTCAzODAuMDggMjIxLjU3IEwgMzgxLjgyIDIyMS44OSBMIDM4My41NiAyMjIuMjEgTCAzODUuMjkgMjIyLjUyIEwgMzg3LjAzIDIyMi44MyBMIDM4OC43NyAyMjMuMTQgTCAzOTAuNTEgMjIzLjQ0IEwgMzkyLjI1IDIyMy43NSBMIDM5My45OSAyMjQuMDUgTCAzOTUuNzMgMjI0LjM0IEwgMzk3LjQ3IDIyNC42NCBMIDM5OS4yMSAyMjQuOTMgTCA0MDAuOTUgMjI1LjIxIEwgNDAyLjY5IDIyNS41IEwgNDA0LjQzIDIyNS43OCBMIDQwNi4xNyAyMjYuMDYgTCA0MDcuOTEgMjI2LjMzIEwgNDA5LjY1IDIyNi42MSBMIDQxMS4zOSAyMjYuODggTCA0MTMuMTMgMjI3LjE1IEwgNDE0Ljg3IDIyNy40MSBMIDQxNi42MSAyMjcuNjggTCA0MTguMzUgMjI3Ljk0IEwgNDIwLjA5IDIyOC4xOSBMIDQyMS44MyAyMjguNDUgTCA0MjMuNTYgMjI4LjcgTCA0MjUuMyAyMjguOTUgTCA0MjcuMDQgMjI5LjIgTCA0MjguNzggMjI5LjQ0IEwgNDMwLjUyIDIyOS42OSBMIDQzMi4yNiAyMjkuOTMgTCA0MzQgMjMwLjE2IEwgNDM1Ljc0IDIzMC40IEwgNDM3LjQ4IDIzMC42MyBMIDQzOS4yMiAyMzAuODYgTCA0NDAuOTYgMjMxLjA5IEwgNDQyLjcgMjMxLjMyIEwgNDQ0LjQ0IDIzMS41NCBMIDQ0Ni4xOCAyMzEuNzcgTCA0NDcuOTIgMjMxLjk5IEwgNDQ5LjY2IDIzMi4yIEwgNDUxLjQgMjMyLjQyIEwgNDUzLjE0IDIzMi42MyBMIDQ1NC44OCAyMzIuODQgTCA0NTYuNjIgMjMzLjA1IEwgNDU4LjM2IDIzMy4yNiBMIDQ2MC4xIDIzMy40NiBMIDQ2MS44NCAyMzMuNjcgTCA0NjMuNTcgMjMzLjg3IEwgNDY1LjMxIDIzNC4wNyBMIDQ2Ny4wNSAyMzQuMjcgTCA0NjguNzkgMjM0LjQ2IEwgNDcwLjUzIDIzNC42NSBMIDQ3Mi4yNyAyMzQuODQgTCA0NzQuMDEgMjM1LjAzIEwgNDc1Ljc1IDIzNS4yMiBMIDQ3Ny40OSAyMzUuNDEgTCA0NzkuMjMgMjM1LjU5IEwgNDgwLjk3IDIzNS43NyBMIDQ4Mi43MSAyMzUuOTUgTCA0ODQuNDUgMjM2LjEzIEwgNDg2LjE5IDIzNi4zMSBMIDQ4Ny45MyAyMzYuNDggTCA0ODkuNjcgMjM2LjY2IEwgNDkxLjQxIDIzNi44MyBMIDQ5My4xNSAyMzcgTCA0OTQuODkgMjM3LjE3IEwgNDk2LjYzIDIzNy4zMyBMIDQ5OC4zNyAyMzcuNSBMIDUwMC4xIDIzNy42NiBMIDUwMS44NCAyMzcuODIgTCA1MDMuNTggMjM3Ljk4IEwgNTA1LjMyIDIzOC4xNCBMIDUwNy4wNiAyMzguMyBMIDUwOC44IDIzOC40NSBMIDUxMC41NCAyMzguNjEgTCA1MTIuMjggMjM4Ljc2IEwgNTE0LjAyIDIzOC45MSBMIDUxNS43NiAyMzkuMDYgTCA1MTcuNSAyMzkuMjEgTCA1MTkuMjQgMjM5LjM1IEwgNTIwLjk4IDIzOS41IEwgNTIyLjcyIDIzOS42NCBMIDUyNC40NiAyMzkuNzggTCA1MjYuMiAyMzkuOTIgTCA1MjcuOTQgMjQwLjA2IEwgNTI5LjY4IDI0MC4yIEwgNTMxLjQyIDI0MC4zNCBMIDUzMy4xNiAyNDAuNDcgTCA1MzQuOSAyNDAuNiBMIDUzNi42NCAyNDAuNzQgTCA1MzguMzggMjQwLjg3IEwgNTQwLjExIDI0MSBMIDU0MS44NSAyNDEuMTMgTCA1NDMuNTkgMjQxLjI1IEwgNTQ1LjMzIDI0MS4zOCBMIDU0Ny4wNyAyNDEuNSBMIDU0OC44MSAyNDEuNjMgTCA1NTAuNTUgMjQxLjc1IEwgNTUyLjI5IDI0MS44NyBMIDU1NC4wMyAyNDEuOTkgTCA1NTUuNzcgMjQyLjExIEwgNTU3LjUxIDI0Mi4yMyBMIDU1OS4yNSAyNDIuMzQgTCA1NjAuOTkgMjQyLjQ2IEwgNTYyLjczIDI0Mi41NyBMIDU2NC40NyAyNDIuNjkgTCA1NjYuMjEgMjQyLjggTCA1NjcuOTUgMjQyLjkxIEwgNTY5LjY5IDI0My4wMiBMIDU3MS40MyAyNDMuMTMgTCA1NzMuMTcgMjQzLjIzIEwgNTc0LjkxIDI0My4zNCBMIDU3Ni42NCAyNDMuNDUgTCA1NzguMzggMjQzLjU1IEwgNTgwLjEyIDI0My42NSBMIDU4MS44NiAyNDMuNzYiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iNTIuMjEiIHgyPSI2MCIgeTI9IjUyLjIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSI1Mi4yMSIgeDI9IjYwIiB5Mj0iMjU0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjUyLjIxIiByPSI0LjUiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI1MiIgeT0iNTYuMjEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPk7igoA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTUzLjExIiB4Mj0iMTgxLjM2IiB5Mj0iMTUzLjExIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTgxLjM2IiB5MT0iMTUzLjExIiB4Mj0iMTgxLjM2IiB5Mj0iMjU0IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxODEuMzYiIGN5PSIxNTMuMTEiIHI9IjQuNSIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjUyIiB5PSIxNTcuMTEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPk7igoAvMjwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyMDMuNTUiIHgyPSIzMDIuNzMiIHkyPSIyMDMuNTUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMDIuNzMiIHkxPSIyMDMuNTUiIHgyPSIzMDIuNzMiIHkyPSIyNTQiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjMwMi43MyIgY3k9IjIwMy41NSIgcj0iNC41IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iNTIiIHk9IjIwNy41NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+TuKCgC80PC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIyOC43OCIgeDI9IjQyNC4wOSIgeTI9IjIyOC43OCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyNC4wOSIgeTE9IjIyOC43OCIgeDI9IjQyNC4wOSIgeTI9IjI1NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNDI0LjA5IiBjeT0iMjI4Ljc4IiByPSI0LjUiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI1MiIgeT0iMjMyLjc4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIj5O4oKALzg8L3RleHQ+PC9zdmc+)
*Décroissance radioactive : à chaque demi-vie, le nombre de noyaux restants est divisé par deux ; il en reste la moitié, puis le quart, puis le huitième.*
<!-- /schema -->

La **demi-vie** $t_{1/2}$ est la durée au bout de laquelle la **moitié** des noyaux
s'est désintégrée. Elle est reliée à $\lambda$ (en écrivant $N_0/2 = N_0 e^{-\lambda t_{1/2}}$
puis en utilisant $\ln$) :

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}}$$

| Temps écoulé | $t_{1/2}$ | $2\,t_{1/2}$ | $3\,t_{1/2}$ | $n\,t_{1/2}$ |
|---|---|---|---|---|
| Il reste | $N_0/2$ | $N_0/4$ | $N_0/8$ | $N_0/2^{\,n}$ |

> ⚠️ Après 2 demi-vies il reste le **quart**, pas zéro : on divise par 2 **à chaque
> fois**. La décroissance n'est jamais linéaire.

### Applications et radioprotection

- **Gammagraphie** : contrôle des soudures avec une source γ (iridium 192,
  $t_{1/2} = 74$ jours) — la « radio » des pièces métalliques.
- **Jauges radioactives** : mesure d'épaisseur ou de niveau sans contact.
- **Datation** au carbone 14 ; **détecteurs de fumée** (anciens, à américium).
- **Se protéger** : trois leviers — **durée** d'exposition minimale, **distance**
  maximale, **écrans** (plomb, béton).

---

## 4. Les combustions

### Ce qu'est une combustion

<!-- schema:triangle-feu -->
![Le triangle du feu : un combustible, un comburant et une source d'énergie sont nécessaires ; en supprimer un seul suffit à éteindre le feu.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjI4MCw1MCAxMTAsMjQwIDQ1MCwyNDAiIGZpbGw9IiNmZGUzYzYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCB4PSIxNjAiIHk9IjEzNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+Y29tYnVzdGlibGU8L3RleHQ+PHRleHQgeD0iMTYwIiB5PSIxNTMiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPihnYXosIGVzc2VuY2UsIGJvaXMpPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iMTM1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmNvbWJ1cmFudDwvdGV4dD48dGV4dCB4PSI0MDAiIHk9IjE1MyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij4oZGlveHlnw6huZSBkZSBsJ2Fpcik8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIyNjYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnNvdXJjZSBkJ8OpbmVyZ2llICjDqXRpbmNlbGxlLCBmbGFtbWUpPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iMTgwIiBmb250LXNpemU9IjIyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5GRVU8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIyMDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnN1cHByaW1lciB1biBjw7R0w6kgw6l0ZWludCBsZSBmZXU8L3RleHQ+PC9zdmc+)
*Le triangle du feu : un combustible, un comburant et une source d'énergie sont nécessaires ; en supprimer un seul suffit à éteindre le feu.*
<!-- /schema -->

Une **combustion** est une réaction d'oxydation rapide entre un **combustible**
(gaz, essence, bois…) et un **comburant** (le dioxygène de l'air), déclenchée par une
**source d'énergie** (étincelle, flamme). Ces trois éléments forment le **triangle du
feu** : supprimer l'un d'eux éteint le feu.

### L'équation de combustion complète

Un combustible carboné brûle en donnant du **dioxyde de carbone** et de l'**eau**.
On ajuste les coefficients pour conserver chaque élément :

$$\boxed{\mathrm{CH_4 + 2\,O_2 \longrightarrow CO_2 + 2\,H_2O}} \qquad \text{(méthane)}$$

> **Exemple — méthode d'ajustement.** Pour le propane $\mathrm{C_3H_8}$ :
> 3 carbones → $3\,\mathrm{CO_2}$ ; 8 hydrogènes → $4\,\mathrm{H_2O}$ ; on compte
> alors $6 + 4 = 10$ oxygènes à droite, soit $5\,\mathrm{O_2}$ :
> $$\mathrm{C_3H_8 + 5\,O_2 \longrightarrow 3\,CO_2 + 4\,H_2O}$$

### L'énergie libérée : le pouvoir calorifique

L'énergie libérée par la combustion est proportionnelle à la masse brûlée :

$$\boxed{E = m \times PC}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $E$ | énergie libérée | J |
| $m$ | masse de combustible | **kg** |
| $PC$ | pouvoir calorifique | **J/kg** (souvent donné en MJ/kg) |

| Combustible | $PC$ (ordre de grandeur) |
|---|---|
| Dihydrogène | $\sim 120$ MJ/kg |
| Méthane (gaz naturel) | $\sim 50$ MJ/kg |
| Essence, gazole | $\sim 45$ MJ/kg |
| Charbon | $\sim 30$ MJ/kg |
| Bois sec | $\sim 15$ MJ/kg |

> **Exemple.** Brûler $3{,}0$ kg de gaz naturel libère
> $E = 3{,}0 \times 50 = 150$ MJ $= 1{,}5 \times 10^{8}$ J. Si la chaudière a un
> rendement de $0{,}90$, l'énergie utile est $0{,}90 \times 150 = 135$ MJ.

### Le danger de la combustion incomplète

Si le dioxygène manque, la combustion est **incomplète** : elle produit du
**monoxyde de carbone CO** — gaz **incolore, inodore et mortel** — et des suies
(carbone). D'où l'obligation d'**aérer** et d'entretenir les appareils à combustion.

---

## 5. Les réactions acido-basiques

### Acide, base, couple

- Un **acide** est une espèce capable de **céder** un ion hydrogène $\mathrm{H^+}$.
- Une **base** est une espèce capable de **capter** un ion $\mathrm{H^+}$.
- Un **couple acide/base** réunit les deux formes, qui ne diffèrent que d'**un**
  $\mathrm{H^+}$ : $\mathrm{CH_3COOH / CH_3COO^-}$, $\mathrm{NH_4^+ / NH_3}$,
  $\mathrm{H_3O^+ / H_2O}$, $\mathrm{H_2O / OH^-}$.

Une **réaction acido-basique** est un **transfert de $\mathrm{H^+}$** entre l'acide
d'un couple et la base d'un **autre** couple.

> **Exemple.** Neutralisation d'un bain acide par la soude :
> $$\mathrm{H_3O^+ + OH^- \longrightarrow 2\,H_2O}$$
> L'acide $\mathrm{H_3O^+}$ (couple $\mathrm{H_3O^+/H_2O}$) cède un proton à la base
> $\mathrm{OH^-}$ (couple $\mathrm{H_2O/OH^-}$).

### Le pH

Le **pH** mesure l'acidité à partir de la concentration en ions oxonium
$[\mathrm{H_3O^+}]$ (en mol/L) — c'est le logarithme décimal de ton cours de maths :

$$\boxed{\mathrm{pH} = -\log[\mathrm{H_3O^+}]} \qquad\qquad \boxed{[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}\ \mathrm{mol/L}}$$

| pH (à 25 °C) | Solution | Exemples |
|---|---|---|
| $< 7$ | **acide** | bain de décapage, jus de citron |
| $= 7$ | **neutre** | eau pure |
| $> 7$ | **basique** | soude, déboucheur, eau de chaux |

> ⚠️ **Une unité de pH = un facteur 10** sur $[\mathrm{H_3O^+}]$. Passer de pH 5 à
> pH 3, c'est **100 fois** plus d'ions oxonium. Et plus $[\mathrm{H_3O^+}]$ est
> grand, plus le pH est **petit**.

> **Exemple.** Un bain de décapage a $[\mathrm{H_3O^+}] = 1{,}0 \times 10^{-2}$ mol/L :
> $\mathrm{pH} = -\log(10^{-2}) = 2{,}0$. Une eau de rejet à pH $= 6{,}0$ contient
> $[\mathrm{H_3O^+}] = 10^{-6}$ mol/L, soit dix mille fois moins.

### Sécurité au laboratoire et à l'atelier

- Acides et bases concentrés sont **corrosifs** (pictogramme corrosion) : port de
  **gants, lunettes, blouse** obligatoire.
- Pour diluer un acide concentré : **toujours verser l'acide dans l'eau**, jamais
  l'inverse (l'ajout d'eau dans l'acide provoque un échauffement brutal et des
  projections).
- Les effluents acides ou basiques sont **neutralisés** (pH ramené vers 7) avant
  rejet — c'est une obligation industrielle.

---

## 6. Tableau récapitulatif

| Notion | Formule / règle | Unités |
|---|---|---|
| Masse volumique | $\rho = m/V$ | kg/m³ ($1$ g/cm³ $= 1000$ kg/m³) |
| Énergie de changement d'état | $E = m \times L$ | J, kg, J/kg |
| Corps pur | palier de température pendant le changement d'état | — |
| Activité | $A = \lambda N$ | Bq |
| Décroissance | $N(t) = N_0\, e^{-\lambda t}$ (solution de $N' = -\lambda N$) | — |
| Demi-vie | $t_{1/2} = \dfrac{\ln 2}{\lambda}$ ; après $n\,t_{1/2}$ il reste $N_0/2^{\,n}$ | s (ou j, ans) |
| Combustion du méthane | $\mathrm{CH_4 + 2\,O_2 \to CO_2 + 2\,H_2O}$ | — |
| Énergie de combustion | $E = m \times PC$ | J, kg, J/kg |
| Acide / base | cède / capte $\mathrm{H^+}$ ; réaction = transfert entre 2 couples | — |
| pH | $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$ ; $[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}$ | mol/L, pH sans unité |
| 1 unité de pH | facteur **10** sur $[\mathrm{H_3O^+}]$ | — |

---

## 7. Les erreurs qui coûtent des points

1. **Mélanger les unités de masse volumique** : $1$ g/cm³ $= 1000$ kg/m³, pas $1$ kg/m³.
2. **Croire qu'il ne reste rien après 2 demi-vies.** Il reste $N_0/4$ : on divise par
   $2$ à chaque demi-vie ($N_0/2^{\,n}$), jamais par $2n$.
3. **Oublier de convertir la demi-vie** (jours, années) **en secondes** quand on veut
   $\lambda$ en $\mathrm{s^{-1}}$ ou une activité en Bq.
4. **Mal ajuster l'équation de combustion** — vérifie C, puis H, puis O, dans cet
   ordre, et compte les O **en dernier**.
5. **Utiliser $E = m \times PC$ avec $m$ en grammes** : le PC est en J/**kg**. Un
   facteur 1000 d'écart, et tout le bilan est faux.
6. **Se tromper de sens sur le pH** : plus la solution est acide, plus le pH est
   **petit** ; et une unité de pH est un facteur **10**, pas une addition.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie et mathématiques, spécialité,
terminale STI2D et STL, arrêté MENE1921261A, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Matière et matériaux »,
lignes 46-49). Extraction via WebFetch depuis le PDF officiel
(cache.media.education.gouv.fr .../spe261_annexe_1158935.pdf) — à confronter au PDF
avant publication.

La section du programme extrait est TRÈS condensée (3 lignes) :
« Propriétés des matériaux ; organisation de la matière ; changements d'état. /
Radioactivité : activité, décroissance, demi-vie (approche STI2D/STL). /
Combustions ; réactions acido-basiques (pH, couples). »
Le développement (familles de matériaux, E = mL, PC, tableau des rayonnements,
sécurité chimique) suit l'esprit « approche techno, contextes industriels » mais
DOIT être confronté au détail des capacités exigibles du PDF officiel.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Périmètre exact du volet radioactivité STI2D/STL : les équations de désintégration
  (lois de Soddy) sont-elles exigibles, ou seulement activité/décroissance/demi-vie ?
  J'ai volontairement limité aux trois notions citées + tableau qualitatif α/β/γ.
- La relation A = λN et λ = ln2/t1/2 : exigibles ou données ? Je les ai incluses car
  elles font le lien avec l'exponentielle et le ln du programme de maths du parcours
  (fonctions exp/ln, équations différentielles y' = ay — même BO).
- Valeurs numériques choisies par moi (ordres de grandeur usuels, à vérifier en
  table) : L_f glace 334 kJ/kg ; PC (H2 ~120, CH4 ~50, essence/gazole ~45,
  charbon ~30, bois ~15 MJ/kg) ; t1/2 iridium 192 = 74 jours.
- Le pH est écrit pH = -log[H3O+] avec [H3O+] en mol/L (sans la division explicite
  par c° retenue dans la fiche de terminale générale) : simplification assumée pour
  la voie techno, à valider.
- La partie sécurité (EPI, acide dans l'eau, neutralisation avant rejet) répond à la
  demande « sécurité » de la commande ; vérifier qu'elle correspond bien à une
  capacité du programme officiel.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
