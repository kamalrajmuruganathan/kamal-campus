---
id: tale-spe-pc-synthese-organique
titre: "Stratégies en synthèse organique"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Structure des entités organiques et groupes caractéristiques (Première)
  - Vitesse de réaction et facteurs cinétiques (Terminale)
  - Rendement d'une transformation, réactif limitant (Première)
  - Électronégativité et polarisation des liaisons (Première)
statut: brouillon
relu_par: null
---

# Stratégies en synthèse organique

> Un chimiste organicien ne se contente pas de « faire réagir ». Il **choisit** : quelle
> réaction, dans quel ordre, à quelle température, avec quel excès de réactif. Ce chapitre
> ne t'apprend pas de nouvelles réactions par cœur — il t'apprend à **raisonner** sur une
> synthèse : produire vite, produire beaucoup, et comprendre *pourquoi* les électrons se
> déplacent comme ils le font.

---

## 1. Optimiser une synthèse : vitesse et rendement

Réaliser une synthèse, c'est chercher **deux objectifs à la fois** :

- **la vitesse de formation** du produit — l'obtenir en un temps raisonnable ;
- le **rendement** — obtenir le plus possible de produit à partir des réactifs engagés.

Ce sont **deux choses différentes**. Une réaction peut être rapide et donner peu de produit,
ou lente et quasi totale.

### Agir sur la vitesse

Les **facteurs cinétiques** accélèrent la formation du produit :

| Levier | Effet sur la vitesse |
|---|---|
| Augmenter la **température** | accélère (agitation thermique) |
| Augmenter la **concentration** des réactifs | accélère (chocs plus fréquents) |
| Ajouter un **catalyseur** | accélère sans être consommé |
| Augmenter la **surface de contact** (solide broyé) | accélère |

> **Exemple.** Une estérification menée à chaud et en présence d'acide sulfurique (catalyseur)
> atteint son état final bien plus vite qu'à froid sans catalyseur.

### Agir sur le rendement

Le rendement dépend, lui, de l'état final de la transformation. Quand la réaction est
**limitée** (équilibre), on peut le **déplacer** en faveur du produit :

- **introduire un réactif en excès** : le réactif limitant est alors davantage consommé ;
- **éliminer un produit** au fur et à mesure (distillation, précipitation) : la réaction se
  poursuit vers la formation du produit.

> ⚠️ Un **catalyseur augmente la vitesse mais ne change PAS le rendement**. Il fait arriver
> plus vite au même état final. C'est le piège le plus fréquent du chapitre.

> ⚠️ La température joue **dans les deux sens**. Elle accélère toujours, mais pour une
> réaction limitée exothermique, une température trop élevée peut **abaisser** le rendement.
> On cherche alors un **compromis**.

---

## 2. Le rendement d'une synthèse

Le **rendement** $\eta$ compare la quantité de produit **réellement obtenue** à la quantité
que l'on obtiendrait si la réaction était **totale** :

$$\boxed{\eta = \dfrac{n_{\text{obtenu}}}{n_{\text{théorique}}}}$$

C'est un nombre **sans unité**, compris entre $0$ et $1$ (souvent exprimé en %). Il est
**toujours $\le 1$** : on ne peut pas récupérer plus que le maximum théorique.

### Méthode de calcul

1. Écris l'**équation** ajustée de la réaction.
2. Détermine le **réactif limitant** à partir des quantités de matière engagées et des
   coefficients stœchiométriques.
3. Déduis-en $n_{\text{théorique}}$ : la quantité de produit si le réactif limitant est
   **entièrement** consommé.
4. Calcule $n_{\text{obtenu}}$ à partir de la masse récupérée : $n = \dfrac{m}{M}$.
5. Applique $\eta = \dfrac{n_{\text{obtenu}}}{n_{\text{théorique}}}$.

> **Exemple.** On synthétise un ester selon une réaction de coefficients $1{:}1{:}1$. Le
> réactif limitant est introduit à $0{,}20$ mol, donc $n_{\text{théorique}} = 0{,}20$ mol
> d'ester. On récupère $m = 12{,}8$ g d'ester de masse molaire $M = 88$ g·mol⁻¹, soit
> $n_{\text{obtenu}} = \dfrac{12{,}8}{88} = 0{,}145$ mol.
> D'où $\eta = \dfrac{0{,}145}{0{,}20} = 0{,}73$, soit **73 %**.

> ⚠️ $n_{\text{obtenu}}$ et $n_{\text{théorique}}$ portent sur le **même produit** et
> s'expriment dans la **même unité**. Compare des moles à des moles, jamais une masse à une
> quantité de matière.

---

## 3. Modifier une molécule : chaîne et groupe caractéristique

Construire une molécule cible, c'est enchaîner des transformations qui modifient soit sa
**chaîne carbonée**, soit ses **groupes caractéristiques**.

### Modification de groupe caractéristique

On transforme une fonction chimique en une autre **sans toucher au squelette carboné**.

> **Exemple.** L'oxydation ménagée d'un **alcool primaire** donne un **aldéhyde**, puis un
> **acide carboxylique** ; celle d'un **alcool secondaire** donne une **cétone**. La chaîne
> carbonée est conservée, seul le groupe caractéristique change.

### Modification de chaîne carbonée

On **allonge**, on **raccourcit** ou on **ramifie** le squelette carboné, en créant ou en
rompant des liaisons **C–C**.

> **Exemple.** Une réaction qui crée une liaison carbone–carbone entre deux fragments allonge
> la chaîne : c'est ainsi qu'on construit de grosses molécules à partir de petites.

Une synthèse est le plus souvent une **séquence** : plusieurs étapes enchaînées, où le produit
d'une étape devient le réactif de la suivante.

---

## 4. Protection / déprotection

<!-- schema:protection -->
![Stratégie de protection : on protège le groupe à préserver, on fait réagir l'autre groupe, puis on régénère le groupe protégé.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2ODAgMTcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY4MCIgaGVpZ2h0PSIxNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTU4IiB5MT0iNzUiIHgyPSIxNjQiIHkyPSI3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTc0LDc1IDE2NCw3MCAxNjQsODAiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMzMyIiB5MT0iNzUiIHgyPSIzMzgiIHkyPSI3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzQ4LDc1IDMzOCw3MCAzMzgsODAiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iNTA2IiB5MT0iNzUiIHgyPSI1MTIiIHkyPSI3NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTIyLDc1IDUxMiw3MCA1MTIsODAiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSI0IiB5PSI0MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI3MCIgcng9IjgiIGZpbGw9IiNmMWY0ZjciIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI3OSIgeT0iNjMuMyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bW9sw6ljdWxlPC90ZXh0Pjx0ZXh0IHg9Ijc5IiB5PSI3OS41NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YXZlYyBkZXV4IGdyb3VwZXM8L3RleHQ+PHRleHQgeD0iNzkiIHk9Ijk1LjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnLDqWFjdGlmczwvdGV4dD48cmVjdCB4PSIxNzgiIHk9IjQwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjcwIiByeD0iOCIgZmlsbD0iI2YzZWNmYSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI1MyIgeT0iNjMuMyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS4gcHJvdMOpZ2VyPC90ZXh0Pjx0ZXh0IHg9IjI1MyIgeT0iNzkuNTUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmxlIGdyb3VwZTwvdGV4dD48dGV4dCB4PSIyNTMiIHk9Ijk1LjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPsOgIHByw6lzZXJ2ZXI8L3RleHQ+PHJlY3QgeD0iMzUyIiB5PSI0MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI3MCIgcng9IjgiIGZpbGw9IiNmZGYwZTMiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0MjciIHk9IjcxLjQzIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yLiBmYWlyZSByw6lhZ2lyPC90ZXh0Pjx0ZXh0IHg9IjQyNyIgeT0iODcuNjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmwnYXV0cmUgZ3JvdXBlPC90ZXh0PjxyZWN0IHg9IjUyNiIgeT0iNDAiIHdpZHRoPSIxNTAiIGhlaWdodD0iNzAiIHJ4PSI4IiBmaWxsPSIjZThmNWVlIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNjAxIiB5PSI3MS40MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+My4gZMOpcHJvdMOpZ2VyIDo8L3RleHQ+PHRleHQgeD0iNjAxIiB5PSI4Ny42OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+cHJvZHVpdCB2b3VsdTwvdGV4dD48dGV4dCB4PSIzNDAiIHk9IjE1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZGV1eCDDqXRhcGVzIGRlIHBsdXMgOiB1biBjb8O7dCBlbiByZW5kZW1lbnQsIGp1c3RpZmnDqSBwYXIgbGEgc8OpbGVjdGl2aXTDqTwvdGV4dD48L3N2Zz4=)
*Stratégie de protection : on protège le groupe à préserver, on fait réagir l'autre groupe, puis on régénère le groupe protégé.*
<!-- /schema -->

Problème récurrent : une molécule porte **deux groupes réactifs**, mais on ne veut en faire
réagir **qu'un seul**. Le réactif ne sait pas choisir — il attaquerait les deux.

**La stratégie :**

1. **Protéger** le groupe qu'on veut préserver, en le transformant en un groupe **inerte**
   dans les conditions de l'étape suivante.
2. Réaliser la transformation voulue sur l'**autre** groupe, resté libre.
3. **Déprotéger** : régénérer le groupe initial.

> **Exemple.** En **synthèse peptidique**, pour lier deux acides aminés par une seule liaison
> peptidique, on **protège** la fonction amine de l'un et la fonction acide de l'autre, afin
> qu'ils ne réagissent pas ensemble n'importe comment. Une fois la bonne liaison formée, on
> **déprotège**.

> **À retenir.** Une étape de protection **ne fabrique pas** le produit final : elle
> « met de côté » temporairement un groupe. On la **justifie** toujours par la sélectivité
> qu'elle apporte. Elle coûte deux étapes (protection + déprotection), donc du rendement : on
> ne l'emploie que si c'est nécessaire.

---

## 5. Les trois grands types de réactions

Toute transformation en synthèse organique se classe en **trois catégories**. Savoir les
reconnaître est une **capacité exigible**.

### Substitution

Un atome ou un groupe d'atomes est **remplacé** par un autre.

$$\text{R–X} + \text{Y} \longrightarrow \text{R–Y} + \text{X}$$

> **Exemple.** $\text{R–Cl} + \text{HO}^- \longrightarrow \text{R–OH} + \text{Cl}^-$ : le
> chlore est remplacé par le groupe hydroxyle. Le nombre de liaisons ne change pas.

### Addition

Deux fragments **s'ajoutent** de part et d'autre d'une **liaison multiple** (double ou
triple), qui s'ouvre. Le nombre d'atomes de la molécule **augmente**.

> **Exemple.** Hydratation d'un alcène :
> $\text{CH}_2{=}\text{CH}_2 + \text{H}_2\text{O} \longrightarrow \text{CH}_3{-}\text{CH}_2{-}\text{OH}$.
> La double liaison C=C disparaît au profit de deux liaisons simples.

### Élimination

<!-- schema:addition-elimination -->
![Addition et élimination sont inverses : l'hydratation de l'éthène ouvre la double liaison C=C, la déshydratation de l'éthanol la recrée en libérant de l'eau.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjcwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyNzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iODEiIHkxPSIxMTciIHgyPSI5MyIgeTI9IjExNyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjgxIiB5MT0iMTIzIiB4Mj0iOTMiIHkyPSIxMjMiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2Mi4yMiIgeTE9IjExMi4yMiIgeDI9IjUwLjU4IiB5Mj0iMTAwLjU4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjIuMjIiIHkxPSIxMjcuNzgiIHgyPSI1MC41OCIgeTI9IjEzOS40MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMS43OCIgeTE9IjExMi4yMiIgeDI9IjEyMy40MiIgeTI9IjEwMC41OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjExMS43OCIgeTE9IjEyNy43OCIgeDI9IjEyMy40MiIgeTI9IjEzOS40MiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNzAiIHk9IjEyNi4xMiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48dGV4dCB4PSIxMDQiIHk9IjEyNi4xMiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48dGV4dCB4PSI0Mi44IiB5PSI5OC45MiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD48dGV4dCB4PSI0Mi44IiB5PSIxNTMuMzIiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+PHRleHQgeD0iMTMxLjIiIHk9Ijk4LjkyIiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pjx0ZXh0IHg9IjEzMS4yIiB5PSIxNTMuMzIiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+PHRleHQgeD0iODciIHk9IjIwMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w6l0aMOobmUgKEM9Qyk8L3RleHQ+PHRleHQgeD0iMTkwIiB5PSIxMjYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPisgSOKCgk88L3RleHQ+PGxpbmUgeDE9IjQxMSIgeTE9IjEyMCIgeDI9IjQyMyIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ0NSIgeTE9IjEyMCIgeDI9IjQ1NyIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ3OSIgeTE9IjEyMCIgeDI9IjQ5MSIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4OSIgeTE9IjEyMCIgeDI9IjM3NyIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwMCIgeTE9IjEwOSIgeDI9IjQwMCIgeTI9Ijk3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAwIiB5MT0iMTMxIiB4Mj0iNDAwIiB5Mj0iMTQzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDM0IiB5MT0iMTA5IiB4Mj0iNDM0IiB5Mj0iOTciIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MzQiIHkxPSIxMzEiIHgyPSI0MzQiIHkyPSIxNDMiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwMCIgeT0iMTI2LjEyIiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjQzNCIgeT0iMTI2LjEyIiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0Pjx0ZXh0IHg9IjQ2OCIgeT0iMTI2LjEyIiBmb250LXNpemU9IjE3IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5PPC90ZXh0Pjx0ZXh0IHg9IjUwMiIgeT0iMTI2LjEyIiBmb250LXNpemU9IjE3IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pjx0ZXh0IHg9IjM2NiIgeT0iMTI2LjEyIiBmb250LXNpemU9IjE3IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pjx0ZXh0IHg9IjQwMCIgeT0iOTIuMTIiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIxNjAuMTIiIGZvbnQtc2l6ZT0iMTciIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkg8L3RleHQ+PHRleHQgeD0iNDM0IiB5PSI5Mi4xMiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD48dGV4dCB4PSI0MzQiIHk9IjE2MC4xMiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SDwvdGV4dD48dGV4dCB4PSI0NTAiIHk9IjIwMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w6l0aGFub2w8L3RleHQ+PGxpbmUgeDE9IjI1MCIgeTE9IjEwMCIgeDI9IjMzMCIgeTI9IjEwMCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNDAsMTAwIDMzMCw5NSAzMzAsMTA1IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMjk1IiB5PSI4OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+YWRkaXRpb248L3RleHQ+PGxpbmUgeDE9IjM0MCIgeTE9IjE0NiIgeDI9IjI2MCIgeTI9IjE0NiIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNTAsMTQ2IDI2MCwxNTEgMjYwLDE0MSIgZmlsbD0iIzdhM2ZiMCIvPjx0ZXh0IHg9IjI5NSIgeT0iMTY2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DqWxpbWluYXRpb248L3RleHQ+PHRleHQgeD0iMjk1IiB5PSIxODIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPijiiJIgSOKCgk8pPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMjM2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hZGRpdGlvbiA6IGxhIGxpYWlzb24gZG91YmxlIHMnb3V2cmUgOyDDqWxpbWluYXRpb24gOiB1bmUgbGlhaXNvbiBkb3VibGUgYXBwYXJhw650PC90ZXh0Pjwvc3ZnPg==)
*Addition et élimination sont inverses : l'hydratation de l'éthène ouvre la double liaison C=C, la déshydratation de l'éthanol la recrée en libérant de l'eau.*
<!-- /schema -->

Inverse de l'addition : deux atomes ou groupes portés par des **carbones voisins** partent,
et une **liaison multiple** apparaît.

> **Exemple.** Déshydratation d'un alcool :
> $\text{CH}_3{-}\text{CH}_2{-}\text{OH} \longrightarrow \text{CH}_2{=}\text{CH}_2 + \text{H}_2\text{O}$.
> On perd de l'eau et une double liaison C=C se forme.

| Type | Ce qui se passe | Liaison multiple |
|---|---|---|
| **Substitution** | un groupe en remplace un autre | inchangée |
| **Addition** | ouverture d'une liaison multiple | **disparaît** |
| **Élimination** | départ de deux groupes voisins | **apparaît** |

---

## 6. Sites donneurs et accepteurs de doublet d'électrons

Pour **comprendre** une réaction (et pas seulement la classer), on repère où sont les
électrons. Une liaison se crée toujours entre un site **riche** et un site **pauvre** en
électrons.

### Site donneur de doublet d'électrons

C'est un site **riche** en électrons, capable de **céder** un doublet :

- un **doublet non liant** (sur O, N, un halogène…) ;
- une **liaison multiple** (C=C, C=O) ;
- un atome portant une **charge négative**.

### Site accepteur de doublet d'électrons

C'est un site **pauvre** en électrons, capable d'**accepter** un doublet :

- un atome portant une **charge partielle** $\delta^+$ (à cause d'une liaison polarisée) ;
- un atome portant une **charge positive** ;
- une **lacune électronique**.

### Repérer les sites : la polarisation

Une liaison entre deux atomes d'**électronégativités différentes** est **polarisée**. L'atome
le plus électronégatif porte $\delta^-$ (tendance donneur), l'autre $\delta^+$ (site
accepteur).

> **Exemple.** Dans la liaison **C–Cl**, le chlore est plus électronégatif : $\text{C}^{\delta+}$
> est un **site accepteur**, $\text{Cl}^{\delta-}$ un site donneur. Un ion $\text{HO}^-$
> (donneur, chargé $-$) attaque le carbone $\delta^+$ : c'est le début d'une substitution.

---

## 7. Le mécanisme réactionnel : les flèches courbes

<!-- schema:mecanisme -->
![Exemple de la fiche : une flèche courbe va du doublet de HO⁻ vers le carbone δ+, une autre de la liaison C–Cl vers le chlore, qui part avec le doublet.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxMDAiIHk9IjE1NiIgZm9udC1zaXplPSIyMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+SE88L3RleHQ+PGNpcmNsZSBjeD0iMTMwIiBjeT0iMTQzIiByPSIyLjYiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSIxMzAiIGN5PSIxNTMiIHI9IjIuNiIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjEyNiIgeT0iMTMyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7iipY8L3RleHQ+PHRleHQgeD0iMjQwIiB5PSIxNTYiIGZvbnQtc2l6ZT0iMjIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlI8L3RleHQ+PGxpbmUgeDE9IjI1NCIgeTE9IjE1MCIgeDI9IjI4NiIgeTI9IjE1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAwIiB5PSIxNTYiIGZvbnQtc2l6ZT0iMjIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkM8L3RleHQ+PGxpbmUgeDE9IjMxNCIgeTE9IjE1MCIgeDI9IjM1OCIgeTI9IjE1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzc4IiB5PSIxNTYiIGZvbnQtc2l6ZT0iMjIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkNsPC90ZXh0Pjx0ZXh0IHg9IjMwMCIgeT0iMTgyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7OtCs8L3RleHQ+PHRleHQgeD0iMzgwIiB5PSIxODIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPs604oiSPC90ZXh0PjxwYXRoIGQ9Ik0gMTM0IDEzNiBRIDIxMCA2MCAyODcuOTMgMTI2Ljc5IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjk0LDEzMiAyODkuNjYsMTIxLjcgMjgzLjE1LDEyOS4yOSIgZmlsbD0iI2MwMmEyYSIvPjxwYXRoIGQ9Ik0gMzM2IDE0NiBRIDM1MCAxMDAgMzcwLjk2IDEyNS43OSIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM3NiwxMzIgMzczLjU3LDEyMS4wOSAzNjUuODEsMTI3LjM5IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMTEwIiB5PSIyMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNpdGUgZG9ubmV1cjwvdGV4dD48dGV4dCB4PSIxMTAiIHk9IjIxNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+KGRvdWJsZXQgbm9uIGxpYW50KTwvdGV4dD48dGV4dCB4PSIzMDAiIHk9IjIxMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c2l0ZSBhY2NlcHRldXI8L3RleHQ+PGxpbmUgeDE9IjQyMCIgeTE9IjE1MCIgeDI9IjQ2MCIgeTI9IjE1MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NzAsMTUwIDQ2MCwxNDUgNDYwLDE1NSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjU2MCIgeT0iMTU2IiBmb250LXNpemU9IjIwIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5S4oCTT0ggKyBDbOKBuzwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjM0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jaGFxdWUgZmzDqGNoZSBjb3VyYmUgcGFydCBkJ3VuIGRvdWJsZXQgKHNpdGUgZG9ubmV1cikgZXQgdmEgdmVycyBsZSBzaXRlIGFjY2VwdGV1cjwvdGV4dD48L3N2Zz4=)
*Exemple de la fiche : une flèche courbe va du doublet de HO⁻ vers le carbone δ+, une autre de la liaison C–Cl vers le chlore, qui part avec le doublet.*
<!-- /schema -->

Une équation dit *ce qui entre et ce qui sort*. Le **mécanisme** dit *comment* : il décrit le
mouvement des doublets d'électrons par des **flèches courbes**.

**Règle d'or de la flèche courbe :**

$$\boxed{\text{Une flèche courbe part d'un site DONNEUR (un doublet) vers un site ACCEPTEUR.}}$$

- La flèche représente le déplacement d'un **doublet d'électrons**, jamais d'un atome.
- Elle **part** d'un doublet non liant ou d'une liaison (le donneur).
- Elle **pointe** vers l'atome accepteur, là où la **nouvelle liaison** se forme.
- Quand une liaison se rompt, une flèche part de cette liaison vers l'atome qui **garde** le
  doublet.

> **Exemple.** Dans $\text{R–Cl} + \text{HO}^-$ : une flèche part du doublet de
> $\text{HO}^-$ vers le carbone $\delta^+$ (formation de C–O) ; une seconde flèche part de la
> liaison C–Cl vers le chlore, qui part avec le doublet sous forme $\text{Cl}^-$. Bilan : la
> substitution du chlore par $\text{OH}$.

> ⚠️ Le sens de la flèche n'est **jamais** arbitraire : **donneur → accepteur**, c'est-à-dire
> **du riche vers le pauvre** en électrons. Une flèche qui part d'un $\delta^+$ est une faute.

---

## 8. Tableau récapitulatif

| Notion | L'essentiel |
|---|---|
| Vitesse | leviers : température, concentration, catalyseur, surface |
| Rendement | $\eta = \dfrac{n_{\text{obtenu}}}{n_{\text{théorique}}} \le 1$ |
| Améliorer $\eta$ | excès d'un réactif, élimination d'un produit |
| Catalyseur | accélère, **ne change pas** le rendement |
| Modif. groupe | change la fonction, garde le squelette |
| Modif. chaîne | crée/rompt des liaisons C–C |
| Protection | rend un groupe inerte ; à **déprotéger** ensuite |
| Substitution | un groupe en remplace un autre |
| Addition | ouvre une liaison multiple |
| Élimination | crée une liaison multiple |
| Site donneur | riche en $e^-$ : doublet, liaison multiple, charge $-$ |
| Site accepteur | pauvre en $e^-$ : $\delta^+$, charge $+$, lacune |
| Flèche courbe | doublet, du **donneur** vers l'**accepteur** |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre vitesse et rendement.** Une réaction rapide n'est pas forcément une réaction à
   haut rendement. Ce sont deux objectifs indépendants.
2. **Croire qu'un catalyseur augmente le rendement.** Il augmente seulement la **vitesse** ;
   l'état final est inchangé.
3. **Écrire un rendement supérieur à 1** (ou à 100 %). C'est physiquement impossible : vérifie
   ton réactif limitant et tes moles.
4. **Comparer une masse à une quantité de matière** dans le calcul de $\eta$. Convertis
   d'abord la masse en moles avec $n = \dfrac{m}{M}$.
5. **Oublier de justifier la protection** par la sélectivité, ou oublier l'étape de
   **déprotection** dans la séquence.
6. **Confondre addition et élimination** : l'addition **ouvre** une liaison multiple,
   l'élimination en **crée** une. Repère si la double liaison apparaît ou disparaît.
7. **Tracer une flèche courbe à l'envers** : elle part **toujours** d'un doublet (site
   donneur) vers un site accepteur, jamais d'un $\delta^+$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019, thème 1 « Constitution et transformations de la matière »,
section 1.8 « Stratégies en synthèse organique ».
Fichier extrait : docs/programme-terminale-physique-chimie-2019.txt, lignes 90-98.
Extrait attendu via eduscol / education.gouv.fr, à CONFRONTER AU PDF OFFICIEL avant publication.

Notions et contenus retenus (verbatim programme) :
- Optimisation de la vitesse de formation et du rendement.
- Modification de groupe caractéristique, modification de chaîne carbonée. Protection/déprotection.
- Réactions de substitution, addition, élimination. Sites donneurs/accepteurs de doublet.
Capacités : identifier les opérations optimisant vitesse et rendement ; élaborer une séquence
réactionnelle et justifier une protection/déprotection ; identifier le type de réaction.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le mécanisme par flèches courbes est-il exigible en tant que TRACÉ à produire, ou seulement
  à interpréter ? J'ai présenté la règle (donneur → accepteur) sans exiger le tracé complet.
- Faut-il détailler les mécanismes SN1/SN2, E1/E2 ? Ils ne figurent PAS explicitement au
  programme 2019 ; je les ai volontairement ÉCARTÉS (hors programme de terminale).
- Les exemples chimiques (oxydation des alcools, estérification, hydratation d'alcène,
  déshydratation, synthèse peptidique) servent d'illustration : vérifier qu'ils correspondent
  bien aux acquis de Première/Terminale attendus des élèves.
- Le rendement η est donné en notation ratio (≤ 1) ET en % : harmoniser avec la convention
  retenue par le reste du corpus terminale.

⚠️ Le gabarit (docs/gabarit-chapitre.md §6) recommandait de ne PAS produire de contenu
terminale avant 2027 (changement de programme rentrée 2027-2028). Chapitre produit sur
demande explicite ; à revalider si le programme évolue.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
