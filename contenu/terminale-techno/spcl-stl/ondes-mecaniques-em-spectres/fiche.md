---
id: tale-stl-spcl-ondes-mecaniques-em-spectres
titre: "Ondes : mécaniques, électromagnétiques et spectres"
voie: technologique
niveau: terminale-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — SPCL, série STL, classe terminale"
duree_lecture_min: 20
prerequis:
  - Ondes et signaux, relation $\lambda = v \times T$ (Première)
  - Ondes sonores, ondes transversales et longitudinales (Première)
  - Spectroscopies UV-visible et infrarouge, loi de Beer-Lambert (Première STL)
  - Puissances de 10 et chiffres significatifs (Seconde / Première)
statut: brouillon
relu_par: null
---

# Ondes : mécaniques, électromagnétiques et spectres

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)


> Une onde sonore a besoin d'air pour se propager ; la lumière du Soleil, elle, traverse le
> vide. Ce sont deux familles d'ondes — **mécaniques** et **électromagnétiques** — décrites
> par les **mêmes** grandeurs : célérité, période, fréquence, longueur d'onde. Ce chapitre
> montre comment on s'en sert pour **mesurer** une distance (échographie, sonar, radar), une
> vitesse (effet Doppler) et pour **observer** la matière (spectres et spectroscopies).

---

## 1. Ondes mécaniques progressives

### Définition

Une **onde mécanique progressive** est la propagation d'une perturbation dans un **milieu
matériel**, sans transport de matière — seulement de l'**énergie**.

> **Exemple.** Une vague fait monter et descendre un bouchon sur place : elle ne l'emporte
> pas vers le rivage. Ce qui avance, c'est la perturbation et son énergie.

> ⚠️ Une onde mécanique **ne se propage pas dans le vide** : pas de milieu, pas d'onde. Le
> son ne traverse pas l'espace.

### Transversale ou longitudinale

| Type | Direction de la perturbation | Exemple |
|---|---|---|
| **Transversale** | perpendiculaire à la propagation | corde qu'on secoue, vague |
| **Longitudinale** | parallèle à la propagation | son (compressions de l'air), ressort |

### Célérité

La **célérité** $v$ est la vitesse de propagation de la perturbation dans le milieu. Elle
dépend du **milieu**, pas de la source.

$$\boxed{v = \frac{d}{\Delta t}}\qquad v \text{ en } \text{m·s}^{-1},\ d \text{ en m},\ \Delta t \text{ en s}$$

> **Exemple.** Le son parcourt $d = 1{,}0\ \text{km} = 1{,}0\times 10^{3}\ \text{m}$ dans l'air
> ($v \approx 340\ \text{m·s}^{-1}$) en $\Delta t = d/v = 2{,}9\ \text{s}$. Dans l'eau, le
> même son va bien plus vite : $v_{\text{eau}} \approx 1{,}5\times 10^{3}\ \text{m·s}^{-1}$.

---

## 2. Ondes périodiques : les grandeurs à maîtriser

Une onde **périodique** reproduit le même motif à intervalles réguliers, dans le temps
**et** dans l'espace.

| Grandeur | Symbole | Unité SI | Ce que c'est |
|---|---|---|---|
| Période temporelle | $T$ | s | durée d'un motif |
| Fréquence | $f$ | Hz ($=\text{s}^{-1}$) | nombre de motifs par seconde |
| Longueur d'onde | $\lambda$ | m | distance d'un motif (période **spatiale**) |
| Célérité | $v$ | m·s⁻¹ | vitesse de propagation |

$$\boxed{f = \frac{1}{T}}\qquad\qquad \boxed{\lambda = v \times T = \frac{v}{f}}$$

> **Ce qu'il faut comprendre.** La longueur d'onde est la **distance parcourue pendant une
> période** : $\lambda = v \times T$. C'est une période **spatiale**, à ne pas confondre avec
> $T$ qui est une durée.

> **Exemple.** Un ultrason de fréquence $f = 2{,}0\ \text{MHz} = 2{,}0\times 10^{6}\ \text{Hz}$
> se propage dans les tissus à $v = 1{,}5\times 10^{3}\ \text{m·s}^{-1}$. Sa longueur d'onde
> vaut $\lambda = \dfrac{v}{f} = \dfrac{1{,}5\times 10^{3}}{2{,}0\times 10^{6}}
> = 7{,}5\times 10^{-4}\ \text{m} = 0{,}75\ \text{mm}$.

> ⚠️ **Changement de milieu.** Quand une onde change de milieu, sa **fréquence ne change
> pas** — elle est imposée par la source. C'est $v$ qui change, donc $\lambda$ aussi.

### Les préfixes à connaître par cœur

| Préfixe | Symbole | Facteur | Préfixe | Symbole | Facteur |
|---|---|---|---|---|---|
| kilo | k | $10^{3}$ | milli | m | $10^{-3}$ |
| méga | M | $10^{6}$ | micro | µ | $10^{-6}$ |
| giga | G | $10^{9}$ | nano | n | $10^{-9}$ |
| téra | T | $10^{12}$ | pico | p | $10^{-12}$ |

> Ainsi $500\ \text{nm} = 500\times 10^{-9}\ \text{m} = 5{,}00\times 10^{-7}\ \text{m}$ et
> $2{,}0\ \text{MHz} = 2{,}0\times 10^{6}\ \text{Hz}$. **Convertir en unités SI avant tout
> calcul** est le réflexe qui évite la moitié des erreurs.

---

## 3. Ondes électromagnétiques

### Une onde qui se propage dans le vide

Une **onde électromagnétique** (onde EM) est la propagation couplée d'un champ électrique et
d'un champ magnétique. Contrairement aux ondes mécaniques, **elle se propage dans le vide**.

Dans le vide (et quasiment dans l'air), toutes les ondes EM vont à la **célérité de la
lumière** :

$$\boxed{c = 3{,}00\times 10^{8}\ \text{m·s}^{-1}}\qquad\qquad \boxed{\lambda = \frac{c}{f}}$$

> **Exemple.** Une onde radio FM à $f = 100\ \text{MHz} = 1{,}00\times 10^{8}\ \text{Hz}$ a
> pour longueur d'onde $\lambda = \dfrac{c}{f} = \dfrac{3{,}00\times 10^{8}}{1{,}00\times 10^{8}}
> = 3{,}00\ \text{m}$.

### Le spectre électromagnétique

Toutes les ondes EM forment un **spectre continu**, classé par fréquence croissante (donc
longueur d'onde décroissante) :

| Domaine | Longueur d'onde $\lambda$ | Usage / origine |
|---|---|---|
| Ondes radio | $> 1\ \text{m}$ | radio, TV, télécommunications |
| Micro-ondes | $1\ \text{m} \to 1\ \text{mm}$ | four, radar, Wi-Fi, GPS |
| Infrarouge (IR) | $1\ \text{mm} \to 800\ \text{nm}$ | chaleur, télécommande, thermographie |
| **Visible** | $\approx 400 \to 800\ \text{nm}$ | lumière perçue par l'œil |
| Ultraviolet (UV) | $400 \to 10\ \text{nm}$ | soleil, stérilisation |
| Rayons X | $10\ \text{nm} \to 10\ \text{pm}$ | radiographie |
| Rayons $\gamma$ | $< 10\ \text{pm}$ | nucléaire, cosmos |

> **À mémoriser.** Le **visible** va d'environ **$400\ \text{nm}$ (violet)** à
> **$800\ \text{nm}$ (rouge)**. Plus $\lambda$ est **grande**, plus $f$ est **petite** et
> moins l'onde est **énergétique** : le rouge est moins énergétique que le violet.

> ⚠️ Fréquence **croissante** signifie longueur d'onde **décroissante** : les deux varient
> en **sens inverse** puisque $\lambda = c/f$.

---

## 4. Des ondes pour MESURER

### Mesure de distance : échographie, sonar, radar

On envoie une onde vers une cible, elle se **réfléchit**, et on mesure la durée
**aller-retour** $\Delta t$. Comme l'onde parcourt **deux fois** la distance $d$ :

$$\boxed{d = \frac{v \times \Delta t}{2}}$$

Le facteur $2$ vient de l'aller **et** du retour. Selon la technique : ultrasons dans les
tissus (échographie), ultrasons dans l'eau (sonar), ondes EM dans l'air (radar, télémétrie
laser).

> **Exemple (échographie).** Un écho revient après $\Delta t = 130\ \text{µs}
> = 1{,}30\times 10^{-4}\ \text{s}$ dans un tissu où $v = 1{,}5\times 10^{3}\ \text{m·s}^{-1}$.
> La profondeur de la cible est
> $d = \dfrac{v\,\Delta t}{2} = \dfrac{1{,}5\times 10^{3}\times 1{,}30\times 10^{-4}}{2}
> = 9{,}8\times 10^{-2}\ \text{m} \approx 9{,}8\ \text{cm}$.

> ⚠️ **Le facteur 2 est le piège n°1.** Oublier de diviser par $2$ donne une distance
> **deux fois trop grande**. La durée mesurée est celle de l'**aller-retour**.

### Mesure de vitesse : l'effet Doppler (qualitatif)

L'**effet Doppler** est le **décalage de fréquence** perçu quand la source et le récepteur
sont en mouvement relatif.

| Situation | Fréquence perçue | Longueur d'onde perçue |
|---|---|---|
| Source qui **se rapproche** | **plus grande** (son plus aigu) | plus petite |
| Source qui **s'éloigne** | **plus petite** (son plus grave) | plus grande |

> **Exemple.** La sirène d'une ambulance paraît **plus aiguë** quand elle vient vers toi,
> **plus grave** dès qu'elle t'a dépassé. Même onde, même source : seul le **mouvement
> relatif** change la fréquence perçue.

> **Applications.** Radar de vitesse (routier), mesure du débit sanguin par écho-Doppler,
> et en astronomie le **décalage vers le rouge** (*redshift*) : les galaxies qui s'éloignent
> décalent leur spectre vers les grandes longueurs d'onde.

---

## 5. Des ondes pour OBSERVER : spectres

### Deux types de spectres d'émission

- **Spectre continu** : émis par un corps **dense** chauffé (solide, liquide, gaz sous
  pression). Il contient **toutes** les couleurs sans interruption. Sa répartition dépend de
  la **température** (filament d'ampoule, surface d'une étoile).
- **Spectre de raies d'émission** : émis par un **gaz atomique** chaud à basse pression.
  Il ne contient que quelques **raies colorées**, à des longueurs d'onde **précises**,
  caractéristiques de chaque élément — une véritable **signature**.

### Spectre d'absorption

Quand une lumière **blanche** (spectre continu) traverse un gaz **froid**, ce gaz **absorbe**
exactement les longueurs d'onde qu'il émettrait chaud. On voit alors des **raies noires** sur
le fond continu, aux **mêmes** positions que les raies d'émission de l'élément.

> **Exemple.** Les **raies de Fraunhofer** — raies noires du spectre du Soleil — révèlent
> les éléments (hydrogène, hélium, sodium…) présents dans son atmosphère. On identifie ainsi
> la composition d'une étoile **sans y aller**.

> **À retenir.** Raies d'émission (colorées sur fond noir) et raies d'absorption (noires sur
> fond continu) d'un même élément sont aux **mêmes longueurs d'onde**. C'est cette
> correspondance qui permet l'**identification**.

---

## 6. Des ondes pour OBSERVER : les spectroscopies

### Spectroscopie UV-visible

Une espèce en solution absorbe certaines longueurs d'onde du domaine **UV-visible**
(transitions **électroniques**). Le spectre donne l'**absorbance** $A$ en fonction de
$\lambda$, avec un maximum à $\lambda_{\max}$.

- $\lambda_{\max}$ **identifie** l'espèce colorée.
- Pour une longueur d'onde fixée, l'absorbance suit la **loi de Beer-Lambert**
  $A = \varepsilon \times \ell \times c$ : elle est **proportionnelle** à la concentration,
  ce qui permet un **dosage** par étalonnage.

> **Exemple.** Une espèce dont $\lambda_{\max} \approx 620\ \text{nm}$ (dans l'orange-rouge)
> absorbe cette zone et apparaît **bleue** : la couleur perçue est la **complémentaire** de
> la couleur absorbée.

### Spectroscopie infrarouge (IR)

L'IR sonde les **vibrations des liaisons** d'une molécule. Le spectre donne la
**transmittance** en fonction du **nombre d'onde** $\sigma = 1/\lambda$ (en $\text{cm}^{-1}$),
lu de la droite ($4000\ \text{cm}^{-1}$) vers la gauche.

Chaque type de liaison absorbe dans une **bande caractéristique** : on identifie les
**groupes fonctionnels** (bandes indicatives, à confirmer avec une table) :

| Liaison | Bande indicative ($\text{cm}^{-1}$) |
|---|---|
| O–H (alcool, large) | $3200 \to 3600$ |
| O–H (acide, très large) | $2500 \to 3200$ |
| C=O (carbonyle, fine et intense) | $\approx 1700$ |
| C–H | $\approx 3000$ |

> **Exemple.** Une bande intense vers $1700\ \text{cm}^{-1}$ signale une liaison **C=O** :
> la molécule contient un groupe carbonyle (aldéhyde, cétone, acide, ester…).

> **UV-visible vs IR — ne pas confondre.** L'UV-visible sonde les **électrons** et sert
> surtout à **doser** (Beer-Lambert) ; l'IR sonde les **liaisons** et sert à **identifier
> les groupes fonctionnels**. L'IR se lit en nombre d'onde, pas en longueur d'onde.

---

## 7. Analyse spectrale : la démarche

**Analyser un spectre**, c'est remonter de la lumière reçue à la matière qui l'a émise ou
traversée :

1. **Repérer** les raies ou bandes (leurs longueurs d'onde / nombres d'onde).
2. **Comparer** à des tables ou spectres de référence.
3. **Identifier** les espèces ou groupes présents, voire **doser** (Beer-Lambert).

C'est la méthode qui donne la composition d'une étoile, la pureté d'un produit de synthèse,
ou la concentration d'un colorant — **à distance** et **sans détruire** l'échantillon.

---

## 8. Tableau récapitulatif

| | |
|---|---|
| Célérité | $v = \dfrac{d}{\Delta t}$ (m·s⁻¹) |
| Relation fondamentale | $\lambda = v\,T = \dfrac{v}{f}$ |
| Fréquence / période | $f = \dfrac{1}{T}$ |
| Onde EM dans le vide | $c = 3{,}00\times 10^{8}\ \text{m·s}^{-1}$, $\lambda = \dfrac{c}{f}$ |
| Visible | $\approx 400\ \text{nm}$ (violet) $\to 800\ \text{nm}$ (rouge) |
| Ordre du spectre EM | radio · micro-ondes · IR · visible · UV · X · $\gamma$ |
| Changement de milieu | $f$ **inchangée** ; $v$ et $\lambda$ changent |
| Mesure de distance | $d = \dfrac{v\,\Delta t}{2}$ (aller-retour) |
| Effet Doppler | rapproche → plus aigu ; éloigne → plus grave |
| Spectre de raies | signature d'un **élément** |
| Beer-Lambert | $A = \varepsilon\,\ell\,c$ : $A$ ∝ concentration |
| IR | nombre d'onde $\sigma = 1/\lambda$ ($\text{cm}^{-1}$), groupes fonctionnels |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier le facteur $2$** dans $d = v\,\Delta t/2$ : la durée mesurée est celle de
   l'**aller-retour**, la distance est la moitié.
2. **Ne pas convertir en unités SI** : un $\lambda$ en nm, un $f$ en MHz, un $\Delta t$ en µs
   doivent devenir m, Hz et s **avant** tout calcul. C'est le piège n°1 en physique.
3. **Croire que la fréquence change** au passage d'un milieu à l'autre. Elle est imposée par
   la source ; c'est $v$, donc $\lambda$, qui change.
4. **Confondre $\lambda$ (distance) et $T$ (durée)**, ou lire un sens de variation à
   l'envers : quand $f$ **augmente**, $\lambda$ **diminue** ($\lambda = c/f$).
5. **Penser qu'une onde mécanique traverse le vide** : seule l'onde EM le peut. Le son a
   besoin d'un milieu.
6. **Confondre les deux spectroscopies** : UV-visible = électrons, dosage (Beer-Lambert) ;
   IR = liaisons, groupes fonctionnels, lu en nombre d'onde.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SPCL (Sciences physiques et chimiques en laboratoire),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du 25 juillet
2019. Fichier docs/programme-stl-spcl.txt, section « Ondes : mécaniques, électromagnétiques
et spectres (Tale) » :
  - Ondes mécaniques et électromagnétiques ; célérité, longueur d'onde, fréquence.
  - Des ondes pour mesurer (échographie, télémétrie) et pour observer (spectroscopies).
  - Spectres ; analyse spectrale.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction résumée via WebFetch — À CONFRONTER AU PDF OFFICIEL avant publication pour les
capacités exigibles détaillées.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA MATIÈRE :
- Bornes du visible : j'ai retenu 400–800 nm (convention fréquente en STL). Certaines
  références utilisent 380–780 nm. À aligner sur la référence retenue par l'établissement.
- Effet Doppler : le programme le veut-il seulement QUALITATIF, ou la relation quantitative
  (Δf/f = v/c pour source lente) est-elle exigible en Tale SPCL ? Je suis resté qualitatif,
  conformément à la consigne.
- Beer-Lambert : rappelée ici comme prérequis de Première STL. Est-elle re-mobilisée en
  Terminale (dosage spectrophotométrique) ou seulement citée ? À confirmer.
- Bandes IR : valeurs INDICATIVES (O–H, C=O ~1700, C–H). En épreuve, une table est fournie —
  vérifier qu'aucune valeur numérique n'est présentée comme « à connaître par cœur ».
- Célérité des ultrasons dans les tissus : valeur usuelle 1540 m/s ; j'ai arrondi à
  1,5×10³ m·s⁻¹ pour les exemples. Cohérent avec les corrigés du QCM et des exercices.
- Vérifier que « radar / télémétrie laser » (ondes EM) est bien admis comme illustration au
  même titre que l'échographie et le sonar (ondes mécaniques).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
-->
