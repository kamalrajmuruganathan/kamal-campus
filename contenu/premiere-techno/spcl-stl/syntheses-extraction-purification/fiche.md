---
id: 1stl-spcl-syntheses-extraction-purification
titre: "Synthèses chimiques : extraction et purification"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 15
prerequis:
  - Quantité de matière et masse molaire (Seconde)
  - Écriture et équilibrage d'une équation de réaction (Seconde)
  - Espèces chimiques, mélanges et corps purs (Seconde)
statut: brouillon
relu_par: null
---

# Synthèses chimiques : extraction et purification

> Au laboratoire, fabriquer une molécule ne suffit pas : il faut la **séparer** du reste
> du mélange, la **purifier**, puis **prouver** qu'elle est pure. Synthèse, purification,
> contrôle : ce sont les trois temps de tout TP de chimie organique en STL, et c'est
> exactement ce chapitre.

---

## 1. La synthèse d'un composé organique

Une **synthèse** transforme un ou plusieurs **réactifs** en un **produit** recherché,
selon une équation de réaction. Le déroulement suit toujours le même **protocole** en
trois étapes.

| Étape | Ce qu'on fait | Pourquoi |
|---|---|---|
| **Transformation** | mélanger les réactifs, souvent **chauffer à reflux** | apporter l'énergie et accélérer la réaction sans perdre de matière par évaporation |
| **Isolement** | séparer le produit du mélange réactionnel (extraction, filtration, distillation) | récupérer l'espèce voulue seule |
| **Purification + contrôle** | recristalliser ou redistiller, puis vérifier la pureté (CCM, température de fusion) | obtenir un produit propre et le prouver |

> **Le chauffage à reflux.** On chauffe le mélange surmonté d'un **réfrigérant** : les
> vapeurs se condensent et **retombent** dans le ballon. On chauffe donc fort et
> longtemps **sans rien perdre**. C'est le montage de base de la synthèse organique.

> ⚠️ Une **transformation chimique n'est presque jamais totale ni unique** : il reste
> des réactifs, il se forme des produits secondaires. C'est pour cela qu'il faut isoler
> puis purifier — et c'est pour cela que le **rendement** n'atteint jamais 100 %.

---

## 2. Réactif limitant

Les réactifs sont rarement introduits dans les proportions exactes de l'équation. Celui
qui est **entièrement consommé le premier** arrête la réaction : c'est le **réactif
limitant**. C'est lui qui fixe la quantité de produit qu'on peut espérer.

### Méthode — le trouver

Pour chaque réactif, on calcule le rapport $\dfrac{n_{\text{introduit}}}{\text{coefficient stœchiométrique}}$.
**Le plus petit rapport désigne le réactif limitant.**

> **Exemple.** Pour la réaction $\mathrm{A} + 2\,\mathrm{B} \rightarrow \mathrm{C}$, on
> introduit $n_\mathrm{A} = 0{,}10\ \mathrm{mol}$ et $n_\mathrm{B} = 0{,}15\ \mathrm{mol}$.
> Rapports : $\dfrac{0{,}10}{1} = 0{,}10$ pour A et $\dfrac{0{,}15}{2} = 0{,}075$ pour B.
> Le plus petit est celui de **B** : **B est le réactif limitant**, même si on en a
> introduit une plus grande quantité.

> ⚠️ Le réactif limitant n'est **pas** forcément celui dont la quantité est la plus
> faible : il faut **diviser par le coefficient** avant de comparer. C'est le piège
> classique.

### Quantité de matière — le point de départ de tout calcul

On ne pèse pas des moles, on pèse des grammes ou on mesure des volumes. Il faut donc
convertir.

$$\boxed{n = \frac{m}{M}} \qquad \boxed{m = \rho \times V} \qquad \text{(avec } \rho \text{ masse volumique)}$$

> **Exemple.** $m = 9{,}2\ \mathrm{g}$ d'éthanol, de masse molaire $M = 46\ \mathrm{g\cdot mol^{-1}}$ :
> $n = \dfrac{9{,}2}{46} = 0{,}20\ \mathrm{mol}$.

> ⚠️ **Unités.** $M$ en $\mathrm{g\cdot mol^{-1}}$, $m$ en $\mathrm{g}$. Un volume donné
> en $\mathrm{mL}$ doit être converti si $\rho$ est en $\mathrm{g\cdot mL^{-1}}$ : garde
> des unités **cohérentes** entre elles.

---

## 3. Le rendement

Le **rendement** $\eta$ (lettre grecque « êta ») compare ce qu'on a **réellement obtenu**
à ce qu'on **aurait dû obtenir** si la réaction était totale et sans perte.

$$\boxed{\eta = \frac{n_{\text{obtenu}}}{n_{\text{théorique}}}}$$

- $n_{\text{obtenu}}$ : quantité de produit **effectivement récupérée** (déduite de la
  masse pesée en fin de TP, $n_{\text{obtenu}} = \dfrac{m_{\text{obtenue}}}{M_{\text{produit}}}$) ;
- $n_{\text{théorique}}$ : quantité **maximale** de produit, calculée à partir du
  **réactif limitant** et de l'équation.

C'est un **rapport de deux quantités de matière** : il est **sans unité**, compris entre
$0$ et $1$, et on l'exprime souvent en **pourcentage** ($\times 100$).

> **Exemple complet.** Réaction $\mathrm{A} \rightarrow \mathrm{P}$, A limitant, avec
> $n_\mathrm{A} = 0{,}20\ \mathrm{mol}$. En théorie on attend donc
> $n_{\text{théorique}} = 0{,}20\ \mathrm{mol}$ de P. En fin de TP on pèse
> $m_\mathrm{P} = 22\ \mathrm{g}$, avec $M_\mathrm{P} = 150\ \mathrm{g\cdot mol^{-1}}$ :
> $$n_{\text{obtenu}} = \frac{22}{150} = 0{,}147\ \mathrm{mol}, \qquad
> \eta = \frac{0{,}147}{0{,}20} = 0{,}73 = 73\ \%.$$

> **Pourquoi $\eta < 100\ \%$ ?** Réaction incomplète, réactions secondaires, et surtout
> **pertes de matière** à chaque manipulation (produit resté sur le verre, cristaux
> perdus au filtre, extraction imparfaite). Un « bon » rendement de TP se situe souvent
> entre $60$ et $90\ \%$.

> ⚠️ On calcule toujours $n_{\text{théorique}}$ **à partir du réactif limitant**, jamais
> de l'autre réactif ni de la somme des deux.

---

## 4. Isoler le produit — extraction liquide-liquide

L'**extraction liquide-liquide** fait passer l'espèce voulue d'un solvant vers un autre
solvant, dans lequel elle est **beaucoup plus soluble**. On la réalise dans une **ampoule
à décanter**.

Deux conditions sont indispensables :

1. les deux solvants sont **non miscibles** (ils ne se mélangent pas et forment deux
   **phases** séparées par une interface nette) ;
2. l'espèce à extraire est **plus soluble** dans le solvant extracteur que dans le
   solvant de départ.

### Repérer les phases — la densité

<!-- schema:ampoule -->
![Extraction au dichlorométhane (d = 1,33) : plus dense que l'eau, la phase organique qui contient le produit est en bas de l'ampoule à décanter.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48Y2xpcFBhdGggaWQ9ImFtcCI+PHBhdGggZD0iTSAxODYgNjAgQyAxMTAgMTIwIDEzMCAyMjAgMTkyIDI2MiBMIDIwOCAyNjIgQyAyNzAgMjIwIDI5MCAxMjAgMjE0IDYwIFoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhbXApIj48cmVjdCB4PSIxMDAiIHk9IjEwNSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4NSIgZmlsbD0iI2NmZTRmNyIvPjxyZWN0IHg9IjEwMCIgeT0iMTkwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZjNkMzZiIi8+PGxpbmUgeDE9IjEwMCIgeTE9IjE5MCIgeDI9IjMwMCIgeTI9IjE5MCIgc3Ryb2tlPSIjOWE3YTIwIiBzdHJva2Utd2lkdGg9IjEuNiIvPjwvZz48cGF0aCBkPSJNIDE4NiA2MCBDIDExMCAxMjAgMTMwIDIyMCAxOTIgMjYyIEwgMjA4IDI2MiBDIDI3MCAyMjAgMjkwIDEyMCAyMTQgNjAgWiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIxOTAiIHk9IjQyIiB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHJ4PSIzIiBmaWxsPSIjZDlkOWQ5IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48cGF0aCBkPSJNIDE5NiAyNjIgTCAxOTYgMzIwIE0gMjA0IDI2MiBMIDIwNCAzMjAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iMTg2IiB5PSIyODAiIHdpZHRoPSIyOCIgaGVpZ2h0PSIxMCIgcng9IjAiIGZpbGw9IiMzYjQ2NTIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMjcwIiB5MT0iMTUwIiB4Mj0iMzAwIiB5Mj0iMTUwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMDYiIHk9IjE0NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5waGFzZSBhcXVldXNlPC90ZXh0Pjx0ZXh0IHg9IjMwNiIgeT0iMTY0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPihlYXUsIGQgPSAxLDAwKTwvdGV4dD48bGluZSB4MT0iMjUwIiB5MT0iMjI1IiB4Mj0iMzAwIiB5Mj0iMjI1IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMDYiIHk9IjIyMSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5waGFzZSBvcmdhbmlxdWU8L3RleHQ+PHRleHQgeD0iMzA2IiB5PSIyMzkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+KGRpY2hsb3JvbcOpdGhhbmUsIGQgPSAxLDMzKTwvdGV4dD48dGV4dCB4PSIyMjIiIHk9IjMwMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5yb2JpbmV0PC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMzAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmxhIHBoYXNlIGxhIHBsdXMgZGVuc2UgZXN0IGVuIGJhczwvdGV4dD48L3N2Zz4=)
*Extraction au dichlorométhane (d = 1,33) : plus dense que l'eau, la phase organique qui contient le produit est en bas de l'ampoule à décanter.*
<!-- /schema -->

La phase la plus **dense** est **en bas**, la moins dense **en haut**. Comme le solvant
de départ est souvent l'eau ($\rho_{\text{eau}} = 1{,}0\ \mathrm{g\cdot mL^{-1}}$), on
compare la **densité** $d$ du solvant extracteur à $1$ :

| Densité du solvant extracteur | Position de la phase organique |
|---|---|
| $d < 1$ (ex. cyclohexane, éther) | **en haut** |
| $d > 1$ (ex. dichlorométhane) | **en bas** |

> **Rappel.** La **densité** $d$ d'un liquide est le rapport de sa masse volumique à
> celle de l'eau : $d = \dfrac{\rho}{\rho_{\text{eau}}}$. Elle est **sans unité**.

> **Exemple.** On extrait une espèce d'une phase aqueuse avec du dichlorométhane
> ($d = 1{,}33$). Le dichlorométhane étant plus dense que l'eau, la **phase organique
> (qui contient le produit) est en bas** : on la récupère par le robinet, et on jette la
> phase aqueuse restée au-dessus. Avec de l'éther ($d = 0{,}71$), ce serait l'inverse.

> ⚠️ Se tromper de phase, c'est **jeter son produit**. Avant d'ouvrir le robinet,
> identifie toujours quelle phase contient l'espèce voulue **par la densité**.

---

## 5. Séparer un solide d'un liquide — la filtration

La **filtration** sépare un **solide** d'un **liquide**. On récupère selon le cas :

- le **solide** retenu sur le filtre (le **résidu**) — c'est le cas quand on a fait
  cristalliser le produit ;
- ou le **liquide** qui passe (le **filtrat**).

| Technique | Quand | Avantage |
|---|---|---|
| **Filtration simple** (papier plié, entonnoir) | petites quantités | facile à monter |
| **Filtration sous vide** (Büchner + fiole à vide) | récupérer un solide | plus **rapide**, le solide est **essoré** donc plus sec |

> **Exemple.** Après recristallisation, on filtre sur Büchner : les cristaux de produit
> restent sur le filtre, les impuretés dissoutes partent avec le filtrat.

---

## 6. Purifier par distillation

<!-- schema:distillation -->
![Montage de distillation fractionnée : les vapeurs montent dans la colonne de Vigreux, se condensent dans le réfrigérant et le distillat est recueilli.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDU4IDIzNCBRIDU4IDMwNiAxMjAgMzA2IFEgMTgyIDMwNiAxODIgMjM0IFoiIGZpbGw9IiNmM2M5YTgiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjUwIiB5PSIzMDYiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTgiIHJ4PSIzIiBmaWxsPSIjOWFhNmIyIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48Y2xpcFBhdGggaWQ9ImJsMTIwMjQwIj48cmVjdCB4PSI3NiIgeT0iMjQ0LjQiIHdpZHRoPSI4OCIgaGVpZ2h0PSIzOS41OTk5OTk5OTk5OTk5OTQiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNibDEyMDI0MCkiPjxjaXJjbGUgY3g9IjEyMCIgY3k9IjI0MCIgcj0iNDMiIGZpbGw9IiNmNmU3YjgiLz48L2c+PHBhdGggZD0iTSAxMTEgMTk2LjkzIEEgNDQgNDQgMCAxIDAgMTI5IDE5Ni45MyIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDExMSAxOTYuOTMgTCAxMTEgMTc2IE0gMTI5IDE3NiBMIDEyOSAxOTYuOTMiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGVsbGlwc2UgY3g9IjEwMi4wMSIgY3k9IjI3NS41MyIgcng9IjQiIHJ5PSIyLjUiIGZpbGw9IiM3YTdhN2EiLz48ZWxsaXBzZSBjeD0iMTEwLjg2IiBjeT0iMjc1LjQ0IiByeD0iNCIgcnk9IjIuNSIgZmlsbD0iIzdhN2E3YSIvPjxlbGxpcHNlIGN4PSIxMTUuNjIiIGN5PSIyNzAuNjkiIHJ4PSI0IiByeT0iMi41IiBmaWxsPSIjN2E3YTdhIi8+PGVsbGlwc2UgY3g9IjEwOC41NCIgY3k9IjI3NC4wOSIgcng9IjQiIHJ5PSIyLjUiIGZpbGw9IiM3YTdhN2EiLz48cGF0aCBkPSJNIDExMSAxNzYgTCAxMTEgNzAgTSAxMjkgMTc2IEwgMTI5IDcwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTExIDE2MiBsIDYgLTUgTSAxMjkgMTUzIGwgLTYgLTUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAxMTEgMTQ0IGwgNiAtNSBNIDEyOSAxMzUgbCAtNiAtNSIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDExMSAxMjYgbCA2IC01IE0gMTI5IDExNyBsIC02IC01IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTExIDEwOCBsIDYgLTUgTSAxMjkgOTkgbCAtNiAtNSIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDExMSA5MCBsIDYgLTUgTSAxMjkgODEgbCAtNiAtNSIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDExMSA3MCBMIDExMSA1MCBNIDEyOSA3MCBMIDEyOSA2MiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTIwIiB5MT0iMjAiIHgyPSIxMjAiIHkyPSI4MCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjEyMCIgY3k9IjgyIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMTA2IiB5PSIzMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCI+dGhlcm1vbcOodHJlPC90ZXh0PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOSw2Nikgcm90YXRlKDIyLjM5KSI+PHJlY3QgeD0iMCIgeT0iLTE1IiB3aWR0aD0iMzI1LjU0IiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2UzZjBmYSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iLTEyIiB5MT0iLTYiIHgyPSIzMzcuNTQiIHkyPSItNiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxsaW5lIHgxPSItMTIiIHkxPSI2IiB4Mj0iMzM3LjU0IiB5Mj0iNiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxyZWN0IHg9Ii0xMiIgeT0iLTUiIHdpZHRoPSIzNDkuNTQiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iLTEyIiB5MT0iLTYiIHgyPSIzMzcuNTQiIHkyPSItNiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxsaW5lIHgxPSItMTIiIHkxPSI2IiB4Mj0iMzM3LjU0IiB5Mj0iNiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjwvZz48bGluZSB4MT0iNDEwIiB5MT0iMjM2IiB4Mj0iNDA1LjMyIiB5Mj0iMjA3Ljg5IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQwNCwyMDAgNDAxLjM3LDIwOC41NSA0MDkuMjYsMjA3LjIzIiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iNDE0IiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJlbmQiPmVudHLDqWUgZCdlYXU8L3RleHQ+PGxpbmUgeDE9IjE3NiIgeTE9IjcwIiB4Mj0iMTYzLjc2IiB5Mj0iNDcuMDYiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTYwLDQwIDE2MC4yNCw0OC45NCAxNjcuMjksNDUuMTgiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIxODAiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnNvcnRpZSBkJ2VhdTwvdGV4dD48cG9seWdvbiBwb2ludHM9IjQzMCwzMDAgNTEwLDMwMCA1MDAuMjUsMjc3LjUgNDM5Ljc1LDI3Ny41IiBmaWxsPSIjZjZlN2I4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTSA0NTYgMjEwIEwgNDU2IDI0MCBMIDQzMCAzMDAgTCA1MTAgMzAwIEwgNDg0IDI0MCBMIDQ4NCAyMTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIwIiB5PSIyODAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+ZGlzdGlsbGF0PC90ZXh0Pjx0ZXh0IHg9IjEzOCIgeT0iMTYwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmNvbG9ubmU8L3RleHQ+PHRleHQgeD0iMTM4IiB5PSIxNzUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+ZGUgVmlncmV1eDwvdGV4dD48dGV4dCB4PSIyNjAiIHk9IjExMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+csOpZnJpZ8OpcmFudDwvdGV4dD48dGV4dCB4PSIxOTgiIHk9IjMwMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5jaGF1ZmZlLWJhbGxvbjwvdGV4dD48L3N2Zz4=)
*Montage de distillation fractionnée : les vapeurs montent dans la colonne de Vigreux, se condensent dans le réfrigérant et le distillat est recueilli.*
<!-- /schema -->

La **distillation** sépare des **liquides miscibles** ayant des **températures
d'ébullition différentes**. On chauffe : le liquide le plus **volatil** (température
d'ébullition la plus basse) s'évapore le premier, ses vapeurs se **condensent** dans le
réfrigérant et sont recueillies — c'est le **distillat**.

- La **température en tête de colonne** ($\theta_{\text{eb}}$ du composé qui passe) permet
  d'identifier ce qu'on recueille et de savoir quand changer de récipient.
- Une **colonne à distiller** (Vigreux) améliore la séparation : on parle alors de
  distillation **fractionnée**.

> **Exemple.** Pour séparer l'eau ($\theta_{\text{eb}} = 100\ \mathrm{°C}$) d'un produit
> bouillant à $78\ \mathrm{°C}$, le produit distille en premier : tant que le thermomètre
> indique environ $78\ \mathrm{°C}$, on recueille le produit ; il monte vers
> $100\ \mathrm{°C}$ quand le produit est épuisé.

> ⚠️ Ne confonds pas **distillation** (séparer des **liquides**, par les températures
> d'ébullition) et **extraction liquide-liquide** (séparer par la **solubilité** dans
> deux solvants non miscibles). Ce sont deux principes différents.

---

## 7. Purifier un solide — la recristallisation

La **recristallisation** purifie un **solide**. Elle exploite le fait que la
**solubilité augmente avec la température**.

### Protocole

1. **Dissoudre** le solide impur dans un **minimum de solvant chaud** (à chaud, tout se
   dissout) ;
2. **Refroidir** lentement : le produit, moins soluble à froid, **recristallise** ;
3. les **impuretés**, présentes en faible quantité, **restent dissoutes** dans le solvant
   froid ;
4. **filtrer** (Büchner) pour récupérer les cristaux purs, laver, sécher.

> **L'idée clé.** Le produit majoritaire redevient solide en refroidissant ; les
> impuretés, trop peu concentrées pour atteindre leur limite de solubilité, restent en
> solution et partent avec le filtrat.

> **Le bon solvant** dissout beaucoup le produit **à chaud** et très peu **à froid** ; il
> ne dissout pas les impuretés à chaud, ou les dissout complètement à froid.

> ⚠️ Trop de solvant, et le produit **reste dissous** même à froid : on perd du
> rendement. « Minimum de solvant chaud » n'est pas une formule creuse.

---

## 8. Contrôler la pureté — la CCM

La **chromatographie sur couche mince** (**CCM**) sépare les espèces d'un mélange et
permet de savoir **combien d'espèces** un échantillon contient et **si le produit est
pur**.

### Le principe

Une **phase fixe** (gel de silice sur une plaque) et une **phase mobile** (l'**éluant**,
un solvant qui migre par capillarité). Chaque espèce est plus ou moins entraînée par
l'éluant selon son **affinité** pour chacune des deux phases : elles migrent donc à des
hauteurs différentes et se **séparent**.

### Les étapes

| Étape | Geste | Point de vigilance |
|---|---|---|
| **Dépôt** | déposer une micro-goutte de chaque échantillon sur la **ligne de dépôt**, au crayon | la ligne doit rester **au-dessus** du niveau d'éluant |
| **Élution** | poser la plaque dans la cuve fermée contenant l'**éluant** | l'éluant ne doit **pas noyer** les dépôts |
| **Révélation** | rendre les taches visibles (UV, réactif) | marquer le **front de l'éluant** dès la sortie |

### Le rapport frontal

<!-- schema:ccm -->
![Plaque de CCM de l'exemple : la tache du produit a migré de 3,6 cm et le front de l'éluant de 4,8 cm, d'où Rf = 0,75.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzIyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMjIiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMjAiIHk9IjQ0IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI0NiIgcng9IjAiIGZpbGw9IiNmN2Y3ZjIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMTI2IiB5MT0iMjYwIiB4Mj0iMzE0IiB5Mj0iMjYwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMTIiIHk9IjI2NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+bGlnbmUgZGUgZMOpcMO0dDwvdGV4dD48bGluZSB4MT0iMTI2IiB5MT0iNjgiIHgyPSIzMTQiIHkyPSI2OCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMTIiIHk9IjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIj5mcm9udCBkZSBsJ8OpbHVhbnQ8L3RleHQ+PGVsbGlwc2UgY3g9IjE2NSIgY3k9IjExNiIgcng9IjkiIHJ5PSI2IiBmaWxsPSIjN2EzZmIwIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjIyMCIgY3k9IjIwMCIgcng9IjkiIHJ5PSI2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjI3NSIgY3k9IjExNiIgcng9IjkiIHJ5PSI2IiBmaWxsPSIjN2EzZmIwIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGVsbGlwc2UgY3g9IjI3NSIgY3k9IjIwMCIgcng9IjkiIHJ5PSI2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTY1IiBjeT0iMjYwIiByPSIyLjUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxNjUiIHk9IjI4MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+UDwvdGV4dD48Y2lyY2xlIGN4PSIyMjAiIGN5PSIyNjAiIHI9IjIuNSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjIyMCIgeT0iMjgyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5SPC90ZXh0PjxjaXJjbGUgY3g9IjI3NSIgY3k9IjI2MCIgcj0iMi41IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMjc1IiB5PSIyODIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk08L3RleHQ+PGxpbmUgeDE9IjM0MCIgeTE9IjI2MCIgeDI9IjM0MCIgeTI9IjEyNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNDAsMTE2IDMzNiwxMjQgMzQ0LDEyNCIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSIzNDAiIHkxPSIxMTYiIHgyPSIzNDAiIHkyPSIyNTIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzQwLDI2MCAzNDQsMjUyIDMzNiwyNTIiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIzNTAiIHk9IjE5MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9InN0YXJ0Ij5oID0gMyw2IGNtPC90ZXh0PjxsaW5lIHgxPSI0MzAiIHkxPSIyNjAiIHgyPSI0MzAiIHkyPSI3NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MzAsNjggNDI2LDc2IDQzNCw3NiIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0MzAiIHkxPSI2OCIgeDI9IjQzMCIgeTI9IjI1MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MzAsMjYwIDQzNCwyNTIgNDI2LDI1MiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjQ0MCIgeT0iMTY4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPkggPSA0LDggY208L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlJmID0gaCAvIEggPSAzLDYgLyA0LDggPSAwLDc1PC90ZXh0Pjx0ZXh0IHg9IjU2MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPlAgOiBwcm9kdWl0PC90ZXh0Pjx0ZXh0IHg9IjU2MCIgeT0iNzUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPlIgOiByw6lhY3RpZjwvdGV4dD48dGV4dCB4PSI1NjAiIHk9IjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj5NIDogbcOpbGFuZ2U8L3RleHQ+PC9zdmc+)
*Plaque de CCM de l'exemple : la tache du produit a migré de 3,6 cm et le front de l'éluant de 4,8 cm, d'où Rf = 0,75.*
<!-- /schema -->

Chaque espèce est caractérisée par son **rapport frontal** $R_f$ :

$$\boxed{R_f = \frac{h}{H}}$$

- $h$ : distance parcourue par la **tache** (du dépôt au centre de la tache) ;
- $H$ : distance parcourue par le **front de l'éluant** (du dépôt au front).

$R_f$ est **sans unité**, compris entre $0$ et $1$. Dans les mêmes conditions (même
éluant, même plaque), une espèce a **toujours le même** $R_f$.

> **Exemple.** Une tache a migré de $h = 3{,}6\ \mathrm{cm}$, le front a atteint
> $H = 4{,}8\ \mathrm{cm}$ : $R_f = \dfrac{3{,}6}{4{,}8} = 0{,}75$.

### Ce que la CCM prouve

| Observation | Conclusion |
|---|---|
| Le produit donne **une seule tache** | il est (a priori) **pur** |
| Le produit donne **plusieurs taches** | il contient plusieurs espèces : **impur** |
| Tache du produit **à la même hauteur** qu'un réactif de référence | il **reste du réactif** de départ |

> ⚠️ On trace la ligne de dépôt et on repère le front **au crayon à papier**, jamais au
> stylo : l'encre migrerait elle aussi. Et on **doit** marquer le front de l'éluant à la
> sortie de la cuve, sinon $H$ est impossible à mesurer et $R_f$ est perdu.

---

## 9. Contrôler la pureté — la température de fusion

Un **corps pur** solide fond à une **température de fusion $\theta_{\text{fus}}$ précise
et caractéristique**. On la mesure au **banc Kofler** ou en tube capillaire, et on la
compare à la valeur **tabulée** de l'espèce recherchée.

| Observation | Conclusion |
|---|---|
| Fusion **nette**, à la valeur **tabulée** | produit **pur** et **conforme** |
| Fusion à une température **plus basse** et sur un **intervalle large** | présence d'**impuretés** |

> **La règle.** Une impureté **abaisse** et **étale** la température de fusion. Un solide
> qui fond franchement à sa valeur de tables est pur ; un solide qui « fond mou » sur
> plusieurs degrés ne l'est pas.

> **CCM et température de fusion se complètent.** La CCM dit **combien d'espèces** ;
> la température de fusion dit si le solide est **pur et bien celui qu'on croit**.

---

## 10. À retenir absolument

| | |
|---|---|
| Protocole de synthèse | transformation (reflux) → isolement → purification + contrôle |
| Réactif limitant | plus petit $\dfrac{n}{\text{coeff.}}$ ; il fixe $n_{\text{théorique}}$ |
| Quantité de matière | $n = \dfrac{m}{M}$ |
| Rendement | $\eta = \dfrac{n_{\text{obtenu}}}{n_{\text{théorique}}}$, **sans unité**, entre $0$ et $1$ |
| Extraction liquide-liquide | ampoule à décanter ; solvants **non miscibles** ; phase dense **en bas** |
| Filtration | sépare **solide / liquide** ; Büchner sous vide |
| Distillation | sépare des **liquides** par $\theta_{\text{eb}}$ |
| Recristallisation | purifie un **solide** ; dissoudre à chaud, cristalliser à froid |
| CCM | $R_f = \dfrac{h}{H}$, sans unité ; une tache = pur |
| Température de fusion | nette et tabulée = pur ; basse et étalée = impur |

---

## 11. Les erreurs qui coûtent des points

1. **Prendre pour limitant le réactif de plus faible quantité** sans diviser par son
   coefficient stœchiométrique.
2. **Calculer le rendement à partir du mauvais réactif** : $n_{\text{théorique}}$ vient
   **toujours** du réactif limitant.
3. **Donner un rendement supérieur à 100 %** : c'est impossible ; c'est le signe d'une
   erreur de calcul ou d'un produit encore humide (mal séché).
4. **Mettre une unité au rendement ou au $R_f$** : ce sont des **rapports sans unité**.
5. **Oublier de convertir** les grammes en moles (ou les mL en L) avant d'utiliser
   l'équation.
6. **Se tromper de phase** à l'ampoule à décanter faute d'avoir comparé les densités —
   et jeter son produit.
7. **Confondre distillation et extraction** : l'une sépare des liquides par $\theta_{\text{eb}}$,
   l'autre par la solubilité dans deux solvants non miscibles.
8. **Tracer la ligne de CCM au stylo**, ou oublier de **marquer le front** de l'éluant :
   $R_f$ devient impossible à calculer.
9. **Noyer les dépôts** de CCM en mettant trop d'éluant dans la cuve.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SCIENCES PHYSIQUES ET CHIMIQUES EN LABORATOIRE (SPCL),
enseignement de spécialité de la série STL, classe de première.
Fichier : docs/programme-stl-spcl.txt, section « Synthèses chimiques : extraction et
purification (1re) » :
  - Synthèse d'un composé organique ; réactif limitant, rendement.
  - Extraction liquide-liquide, filtration, distillation, recristallisation.
  - Contrôles de pureté : chromatographie sur couche mince (CCM), température de fusion.
Le fichier renvoie aux PDF officiels education.gouv.fr (Première SPCL, BO spécial n°8 du
25 juillet 2019, et BO spécial n°1 du 22 janvier 2019). Extraits via WebFetch, À
CONFRONTER AUX PDF OFFICIELS avant publication.

Champ « programme » de l'en-tête : renseigné à l'identique de la consigne de production
(« BO du 22 janvier 2019 — SPCL, série STL, classe de première »). ⚠️ À FAIRE VÉRIFIER
AU RELECTEUR : le fichier source cite pour la Première SPCL le BO spécial n°8 du 25
juillet 2019 (le 22 janvier 2019 étant l'autre référence mentionnée). L'intitulé exact
du BO à afficher est à confirmer sur le PDF officiel.

POINTS À CONFRONTER AU RELECTEUR / PROGRAMME DÉTAILLÉ :
- Formule du rendement : la consigne et l'usage STL retiennent η = n_obtenu / n_théorique
  (en quantités de matière). Certains énoncés le définissent sur les masses,
  η = m_obtenue / m_théorique ; les deux coïncident quand il s'agit du même produit
  (même M). La fiche a choisi la définition en quantités de matière, la plus générale.
  À valider comme formulation attendue.
- Seuils chiffrés « rendement de TP entre 60 et 90 % » : ordre de grandeur pédagogique,
  pas une donnée du programme.
- Densité de la phase organique « en bas / en haut » : illustré avec dichlorométhane
  (d≈1,33) et éther/cyclohexane (d<1). Valeurs de densité usuelles, à vérifier si des
  valeurs officielles sont imposées.
- Le seuil « une impureté abaisse et étale θ_fus » est un fait de laboratoire classique,
  non chiffré ici : conforme au niveau première.
- Détails de gestes (Büchner, Vigreux, banc Kofler, révélation UV) : matériel usuel de
  laboratoire STL, cohérent avec le contexte « contrôles de pureté » du programme, mais
  la liste précise du matériel exigible est à confirmer sur le PDF.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
