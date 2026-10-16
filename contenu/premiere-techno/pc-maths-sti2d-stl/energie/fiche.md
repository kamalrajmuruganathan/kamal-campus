---
id: 1sti2d-energie
titre: "Énergie : conversions, chaînes et rendement"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 14
prerequis:
  - Loi d'Ohm et circuits (Seconde)
  - Mesure et incertitudes (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Énergie : conversions, chaînes et rendement

> Le programme place l'énergie au **pôle central** de la formation en STI2D et STL.
> Ce n'est pas un chapitre parmi d'autres : c'est celui qui relie l'électricité,
> la mécanique, la thermique — et qui donne sens aux problématiques de
> développement durable.

---

## 1. Énergie, puissance, durée

$$\boxed{E = P \times \Delta t} \qquad\qquad \boxed{P = \frac{E}{\Delta t}}$$

| Symbole | Grandeur | Unité SI |
|---|---|---|
| $E$ | énergie | joule (J) |
| $P$ | puissance | watt (W) |
| $\Delta t$ | durée | seconde (s) |

> ⚠️ **La durée doit être en secondes** pour obtenir des joules. C'est l'oubli le
> plus coûteux du chapitre.

### Le kilowattheure

$$1\ \mathrm{kWh} = 1000\ \mathrm{W} \times 3600\ \mathrm{s} = 3{,}6 \times 10^{6}\ \mathrm{J}$$

C'est une **énergie**, malgré le « watt » dans son nom — c'est l'unité des factures
d'électricité.

### Ordres de grandeur à connaître

| Système | Puissance |
|---|---|
| Lampe LED | quelques W |
| Ordinateur portable | ~ 50 W |
| Four électrique | ~ 2 kW |
| Voiture thermique | ~ 100 kW |
| TGV | ~ 10 MW |
| Réacteur nucléaire | ~ 1 GW |

> Savoir **citer et évaluer** des ordres de grandeur est une capacité explicitement
> attendue par le programme.

---

## 2. Les formes d'énergie

| Forme | Où on la rencontre |
|---|---|
| **Électrique** | circuits, réseaux |
| **Mécanique** | cinétique (mouvement) et potentielle (position) |
| **Thermique** (interne) | agitation des particules |
| **Chimique** | liaisons, combustibles, batteries |
| **Rayonnante** | lumière, rayonnement solaire |
| **Nucléaire** | noyaux |

---

## 3. Les conversions d'énergie

Un **convertisseur** transforme une forme d'énergie en une autre.

| Type de conversion | Exemple |
|---|---|
| **Électromécanique** | moteur électrique, alternateur |
| **Photoélectrique** | panneau photovoltaïque |
| **Électrochimique** | batterie, pile, électrolyse |
| **Thermodynamique** | machine thermique, moteur à explosion |

---

## 4. La chaîne énergétique

<!-- schema:chaine-moteur -->
![Chaîne énergétique d'un moteur : l'énergie électrique reçue du réseau devient de l'énergie mécanique utile, et une partie est dissipée en chaleur.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTU0IiB5MT0iNjgiIHgyPSIyNDEiIHkyPSI2OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjUxLDY4IDI0MSw2MyAyNDEsNzMiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIyMDIuNSIgeT0iNjEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPsOpbGVjdHJpcXVlPC90ZXh0PjxsaW5lIHgxPSIzODkiIHkxPSI2OCIgeDI9IjQ3NiIgeTI9IjY4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0ODYsNjggNDc2LDYzIDQ3Niw3MyIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjQzNy41IiB5PSI2MSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bcOpY2FuaXF1ZTwvdGV4dD48bGluZSB4MT0iMzIwIiB5MT0iMTAwIiB4Mj0iMzIwIiB5Mj0iMTQ2IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzMjAsMTU2IDMyNSwxNDYgMzE1LDE0NiIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjM5MCIgeT0iMTMyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50aGVybWlxdWUgKHBlcnRlcyk8L3RleHQ+PGVsbGlwc2UgY3g9Ijg1IiBjeT0iNjgiIHJ4PSI2NSIgcnk9IjI4IiBmaWxsPSIjZmRmNmQ4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzlhNzQwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI4NSIgeT0iNzIuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UsOpc2VhdTwvdGV4dD48cmVjdCB4PSIyNTUiIHk9IjQwIiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjU2IiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjMyMCIgeT0iNzIuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TW90ZXVyPC90ZXh0PjxlbGxpcHNlIGN4PSI1NTUiIGN5PSI2OCIgcng9IjY1IiByeT0iMjgiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjU1NSIgeT0iNzIuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2hhcmdlPC90ZXh0PjxlbGxpcHNlIGN4PSIzMjAiIGN5PSIxODUiIHJ4PSI4MCIgcnk9IjI1IiBmaWxsPSIjZmJlYWVhIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzMjAiIHk9IjE4OS45IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FbnZpcm9ubmVtZW50PC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMjI0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5lbGxpcHNlcyA6IHLDqXNlcnZvaXJzIDsgcmVjdGFuZ2xlIDogY29udmVydGlzc2V1cjwvdGV4dD48L3N2Zz4=)
*Chaîne énergétique d'un moteur : l'énergie électrique reçue du réseau devient de l'énergie mécanique utile, et une partie est dissipée en chaleur.*
<!-- /schema -->

On représente les transferts par un **schéma** : réservoirs, convertisseurs, et
flèches indiquant les transferts.

```
   ┌──────────┐   électrique   ┌──────────┐   mécanique   ┌─────────┐
   │  Réseau  │ ─────────────► │  Moteur  │ ────────────► │  Charge │
   └──────────┘                └────┬─────┘               └─────────┘
                                    │ thermique (pertes)
                                    ▼
                               Environnement
```

> **Ce que le schéma doit toujours montrer** : l'énergie **utile**, mais aussi
> l'énergie **dissipée**. Elle existe dans tout convertisseur réel.

---

## 5. Conservation de l'énergie

Pour un **système isolé**, l'énergie totale se conserve : elle ne se crée ni ne se
détruit, elle se **convertit** et se **transfère**.

$$\boxed{E_{\text{fournie}} = E_{\text{utile}} + E_{\text{dissipée}}}$$

> C'est le principe qui permet de **vérifier** tout bilan : la somme doit tomber juste.

---

## 6. Rendement

$$\boxed{\eta = \frac{E_{\text{utile}}}{E_{\text{fournie}}} = \frac{P_{\text{utile}}}{P_{\text{fournie}}}}$$

Grandeur **sans unité**, comprise entre $0$ et $1$ — souvent exprimée en pourcentage.

> ⚠️ **Un rendement ne peut JAMAIS dépasser 1.** Obtenir $\eta > 1$ signale une
> erreur de calcul ou une mauvaise identification de l'énergie utile.

### Ordres de grandeur

| Convertisseur | Rendement typique |
|---|---|
| Moteur électrique | 85 – 95 % |
| Panneau photovoltaïque | 15 – 22 % |
| Moteur thermique | 25 – 40 % |
| Transformateur | 95 – 99 % |
| Ampoule à incandescence | ~ 5 % |

### Chaîne de plusieurs convertisseurs

<!-- schema:rendements-chaine -->
![Deux convertisseurs de rendement 80 % à la suite : il reste 0,8 × 0,8 = 64 % de l'énergie reçue, les pertes s'accumulent à chaque étape.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMCIgeT0iOTIiIHdpZHRoPSIxNDAiIGhlaWdodD0iODAiIHJ4PSIwIiBmaWxsPSIjZjVjMjZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTIiIHk9IjgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPsOpbmVyZ2llIHJlw6d1ZTwvdGV4dD48dGV4dCB4PSI4MCIgeT0iMTM3IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMDAgSjwvdGV4dD48cmVjdCB4PSIxNzQiIHk9IjkyIiB3aWR0aD0iMjc2IiBoZWlnaHQ9IjY0IiByeD0iMCIgZmlsbD0iI2Y1YzI2YiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjMxMiIgeT0iMTI5IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj44MCBKPC90ZXh0PjxyZWN0IHg9IjE3NCIgeT0iMTU2IiB3aWR0aD0iMTYiIGhlaWdodD0iNzIiIHJ4PSIwIiBmaWxsPSIjZTdhM2EzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBvbHlnb24gcG9pbnRzPSIxODIsMjQwIDE4OCwyMjggMTc2LDIyOCIgZmlsbD0iI2MyNmI2YiIvPjx0ZXh0IHg9IjE4MiIgeT0iMjYwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wZXJ0ZXMgOiAyMCBKPC90ZXh0PjxyZWN0IHg9IjE1MCIgeT0iODIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxMDAiIHJ4PSI0IiBmaWxsPSIjZTllZWY0IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxNjIiIHk9IjU0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5jb252ZXJ0aXNzZXVyIDE8L3RleHQ+PHRleHQgeD0iMTYyIiB5PSI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrcgPSA4MCAlPC90ZXh0PjxyZWN0IHg9IjQ3NCIgeT0iOTIiIHdpZHRoPSIxNTYiIGhlaWdodD0iNTEuMiIgcng9IjAiIGZpbGw9IiNmNWMyNmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSI1NTIiIHk9IjEyMi42IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj42NCBKPC90ZXh0PjxyZWN0IHg9IjQ3NCIgeT0iMTQzLjIiIHdpZHRoPSIxMi44IiBoZWlnaHQ9Ijg0LjgiIHJ4PSIwIiBmaWxsPSIjZTdhM2EzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBvbHlnb24gcG9pbnRzPSI0ODAuNCwyNDAgNDg2LjQsMjI4IDQ3NC40LDIyOCIgZmlsbD0iI2MyNmI2YiIvPjx0ZXh0IHg9IjQ4MC40IiB5PSIyNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBlcnRlcyA6IDE2IEo8L3RleHQ+PHJlY3QgeD0iNDUwIiB5PSI4MiIgd2lkdGg9IjI0IiBoZWlnaHQ9Ijg0IiByeD0iNCIgZmlsbD0iI2U5ZWVmNCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iNDYyIiB5PSI1NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Y29udmVydGlzc2V1ciAyPC90ZXh0Pjx0ZXh0IHg9IjQ2MiIgeT0iNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPs63ID0gODAgJTwvdGV4dD48dGV4dCB4PSI2MjgiIHk9IjgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjOWE2YTAwIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj7DqW5lcmdpZSB1dGlsZTwvdGV4dD48L3N2Zz4=)
*Deux convertisseurs de rendement 80 % à la suite : il reste 0,8 × 0,8 = 64 % de l'énergie reçue, les pertes s'accumulent à chaque étape.*
<!-- /schema -->

$$\eta_{\text{global}} = \eta_1 \times \eta_2 \times \cdots$$

> **On multiplie les rendements, on ne les additionne pas.** Deux convertisseurs à
> $80\,\%$ donnent $0{,}8 \times 0{,}8 = 64\,\%$, et non $80\,\%$ ni $160\,\%$.

---

## 7. Énergie électrique et effet Joule

### Puissance électrique

$$\boxed{P = U \times I}$$

### Loi d'Ohm

$$\boxed{U = R \times I}$$

### Effet Joule

Toute résistance parcourue par un courant dissipe de l'énergie sous forme de chaleur :

$$\boxed{P_\mathrm{J} = R\,I^{2}} \qquad \text{ou} \qquad P_\mathrm{J} = \frac{U^2}{R}$$

> **La dépendance en $I^2$ est décisive** : doubler l'intensité **quadruple** les
> pertes. C'est pourquoi l'électricité est transportée à très haute tension — à
> puissance égale, une tension élevée signifie une intensité faible, donc des pertes
> réduites.

L'effet Joule est **utile** dans un radiateur, **parasite** dans un câble ou un moteur.

---

## 8. Stockage de l'énergie

| Procédé | Forme stockée |
|---|---|
| Batterie, accumulateur | chimique |
| Volant d'inertie | cinétique |
| Barrage, station de pompage | potentielle de pesanteur |
| Condensateur | électrique |
| Réservoir d'hydrogène | chimique |

> **Exemple cité par le programme** : le **volant d'inertie** récupère l'énergie de
> freinage d'un véhicule sous forme cinétique, au lieu de la dissiper en chaleur dans
> les plaquettes.

---

## 9. À retenir absolument

| | |
|---|---|
| Énergie | $E = P \times \Delta t$, en joules, $\Delta t$ en **secondes** |
| $1$ kWh | $3{,}6 \times 10^{6}$ J — une **énergie** |
| Conservation | $E_{\text{fournie}} = E_{\text{utile}} + E_{\text{dissipée}}$ |
| Rendement | $\eta = \dfrac{E_{\text{utile}}}{E_{\text{fournie}}} \leqslant 1$ |
| Chaîne | $\eta_{\text{global}} = \eta_1 \times \eta_2$ |
| Puissance électrique | $P = UI$ |
| Effet Joule | $P_\mathrm{J} = RI^2$ |
| Doubler $I$ | pertes $\times 4$ |

---

## 10. Les erreurs qui coûtent des points

1. **Oublier de convertir la durée en secondes** avant de calculer une énergie.
2. **Confondre puissance et énergie** : le watt est une puissance, le joule et le kWh
   sont des énergies.
3. **Annoncer un rendement supérieur à $1$** sans réagir.
4. **Additionner les rendements** d'une chaîne au lieu de les multiplier.
5. **Écrire $P_\mathrm{J} = RI$** au lieu de $RI^2$.
6. **Omettre les pertes** dans un schéma de chaîne énergétique.
7. **Oublier les unités** — un résultat sans unité est faux.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », thème « Énergie ».

⚠️ MÉTHODE D'EXTRACTION — cette fiche a été rendue possible par une SECONDE
extraction du PDF exploitant les tables ToUnicode (CMap) du document, qui récupère
des passages que la première extraction perdait. Les deux extractions sont
PARTIELLES ET COMPLÉMENTAIRES : la v1 restitue mieux la structure (« Notions et
contenu », « Capacités exigibles »), la v2 mieux le texte courant. La fiche est
construite sur leur UNION.

Éléments explicitement lisibles (union v1 + v2) :
- « Énergie et puissance » ; « Énoncer et exploiter la relation entre puissance,
  énergie et durée » ; « Évaluer et citer des ordres de grandeur des puissances mises
  en jeu dans les secteurs [de l'industrie], des transports, des communications »
- « Les conversions et les chaînes énergétiques » ; « électromécanique,
  photoélectrique, électrochimique, thermodynamique (conversions réalisées par une
  machine thermique) » ; « Schématiser une chaîne énergétique ou une conversion »
- « Identifier les principales conversions d'énergie »
- « Principe de la conservation de [l'énerg]ie pour un système isolé »
- « Rendement » ; « Déterminer le rendement d'une chaîne énergétique ou [d'un
  convertisseur] » ; « déterminer le rendement d'un panneau photovoltaïque »
- « Stockage de l'énergie » ; « Stockage de l'énergie de freinage par volant
  d'inertie » (exemple cité TEL QUEL par le programme)
- « Loi d'Ohm. Effet Joule » ; « Calculer la puissance moyenne et l'énergi[e] » ;
  « Exploiter la relation entre la puissance et l'intensité »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les ordres de grandeur du tableau §1 et les rendements typiques du §6 sont des
  valeurs usuelles que j'ai choisies : le programme demande de « citer des ordres de
  grandeur » sans les lister. Vérifier qu'ils correspondent aux attendus.
- Le bilan énergétique d'une machine thermique est-il quantitatif en première ?
- Les énergies mécaniques (cinétique, potentielle) sont-elles traitées dans ce thème
  ou renvoyées à un autre ? Le programme mentionne « L'étude de l'énergie mécanique
  aborde explicitement [...] » sans que la suite soit lisible.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
