---
id: tale-techno-math-statistiques-deux-variables
titre: "Séries statistiques à deux variables : changement de variable"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Statistiques à deux variables, ajustement affine (Première technologique)
  - Fonction logarithme décimal (Terminale technologique)
  - Fonctions exponentielles x ↦ a^x (Terminale technologique)
statut: brouillon
relu_par: null
---

# Séries statistiques à deux variables : changement de variable

> En Première, tu as ajusté des nuages de points **rectilignes** par une droite.
> Mais dans la vraie vie, beaucoup de phénomènes ne sont pas linéaires : une
> audience qui double chaque année, une distance de freinage qui explose avec la
> vitesse. L'idée de Terminale : **transformer** une des variables — poser
> $z = \log(y)$, $z = \dfrac{1}{y}$ ou $z = y^2$ — pour que le nuage transformé
> devienne rectiligne. On ajuste alors une droite… et on revient à $y$.

---

## 1. Ce que tu sais déjà (rappels de Première)

- Une série à deux variables quantitatives, c'est des couples $(x_i\,;y_i)$ :
  chaque individu est un **point** du nuage.
- Le **point moyen** $\mathrm{G}(\bar x\,;\bar y)$ est le centre de gravité du
  nuage ; la droite d'ajustement passe par lui.
- Quand le nuage a une allure **rectiligne**, on l'ajuste par une droite
  $y = ax + b$ obtenue par la **méthode des moindres carrés** (à la
  calculatrice ou au tableur).
- L'ajustement sert à **interpoler** (estimer à l'intérieur des données) ou à
  **extrapoler** (au-delà des données — avec prudence).

> **Exemple.** Tension et intensité d'un conducteur ohmique : nuage aligné,
> ajustement affine direct, la pente est la résistance. C'était la Première.

---

## 2. Quand la droite ne suffit plus

Certains nuages sont **manifestement courbes** : ajuster une droite serait un
contresens (c'était déjà une « erreur qui coûte des points » en Première).

Deux tests rapides sur un tableau de valeurs, quand les $x_i$ sont régulièrement
espacés :

| Ce que tu observes sur les $y_i$ | Allure du nuage | Modèle probable |
|---|---|---|
| les **différences** $y_{i+1} - y_i$ sont à peu près constantes | rectiligne | $y = ax + b$ : la Première suffit |
| les **quotients** $\dfrac{y_{i+1}}{y_i}$ sont à peu près constants | croissance (ou décroissance) de plus en plus rapide | exponentiel → poser $z = \log(y)$ |
| $y$ est à peu près **divisé par** $k$ quand $x$ est **multiplié par** $k$ | branche d'hyperbole | inverse → poser $z = \dfrac{1}{y}$ |
| les $y_i^2$ (ou les $x_i^2$) s'alignent avec l'autre variable | demi-parabole couchée | carré → poser $z = y^2$ (ou $X = x^2$) |

⚠️ Au bac, le changement de variable est **donné par l'énoncé** (« on pose
$z = \log(y)$ »). Tu n'as pas à le deviner — mais comprendre pourquoi celui-là
marche te fait gagner du temps et des points d'interprétation.

---

## 3. Le principe du changement de variable

$$\boxed{\text{nuage courbe en } (x\,;y) \xrightarrow{\ z = f(y)\ } \text{nuage rectiligne en } (x\,;z) \xrightarrow{\ \text{moindres carrés}\ } z = ax + b \xrightarrow{\ \text{retour}\ } y}$$

### La méthode en 4 étapes

1. **Poser** la nouvelle variable donnée par l'énoncé et **compléter le tableau**
   avec les valeurs de $z_i$ (arrondies comme demandé).
2. **Représenter** le nuage des points $(x_i\,;z_i)$ et constater qu'il est
   **sensiblement rectiligne**.
3. **Ajuster** : la calculatrice donne $z = ax + b$ (moindres carrés, comme en
   Première — c'est le même outil, appliqué à $z$).
4. **Revenir à $y$** en inversant le changement de variable, puis utiliser le
   modèle obtenu pour interpoler ou extrapoler.

### Les trois retours à $y$ à connaître

| Changement posé | Ajustement obtenu | Retour à $y$ |
|---|---|---|
| $z = \log(y)$ | $z = ax + b$ | $\boxed{y = 10^{\,ax+b} = 10^b \times \left(10^a\right)^x}$ |
| $z = \dfrac{1}{y}$ | $z = ax + b$ | $\boxed{y = \dfrac{1}{ax+b}}$ |
| $z = y^2$ (avec $y > 0$) | $z = ax + b$ | $\boxed{y = \sqrt{ax+b}}$ |

Le premier retour utilise la définition du **logarithme décimal** :
$\log(y) = t \iff y = 10^{\,t}$, et les propriétés des **fonctions
exponentielles** : $10^{\,ax+b} = 10^b \times (10^a)^x$.

---

## 4. Le changement $z = \log(y)$ — croissances exponentielles

C'est le changement de variable **vedette** de l'année : il transforme un modèle
exponentiel $y = k \times q^x$ en modèle affine, car
$\log(k \times q^x) = \log(k) + x \log(q)$ — la propriété $\log(ab) = \log a + \log b$
et $\log(a^n) = n \log a$ du chapitre logarithme.

> **Exemple complet.** Nombre d'abonnés $y$ d'une chaîne, $x$ années après son
> lancement :
>
> | $x$ (années) | $0$ | $1$ | $2$ | $3$ | $4$ |
> |---|---|---|---|---|---|
> | $y$ (abonnés) | $2\,000$ | $3\,000$ | $4\,400$ | $6\,700$ | $10\,100$ |
> | $z = \log(y)$ | $3{,}30$ | $3{,}48$ | $3{,}64$ | $3{,}83$ | $4{,}00$ |
>
> Le nuage $(x\,;y)$ monte de plus en plus vite (les quotients
> $\frac{3000}{2000} = 1{,}5$, $\frac{4400}{3000} \approx 1{,}47$… sont presque
> constants) : il n'est pas rectiligne. Le nuage $(x\,;z)$, lui, l'est : les
> $z_i$ augmentent d'environ $0{,}17$ à $0{,}18$ par an.
>
> La calculatrice donne l'ajustement par moindres carrés :
> $$z = 0{,}175\,x + 3{,}30$$
>
> **Retour à $y$** : $\log(y) = 0{,}175\,x + 3{,}30$, donc
> $$y = 10^{\,0{,}175x + 3{,}30} = 10^{3{,}30} \times \left(10^{0{,}175}\right)^x \approx 1\,995 \times 1{,}50^x$$
>
> **Interprétation** : le nombre d'abonnés est multiplié par environ $1{,}50$
> chaque année, soit $+50\,\%$ par an. On retrouve la suite géométrique des
> automatismes !

### Lire le taux d'évolution dans la pente

$$\boxed{z = ax + b \text{ avec } z = \log(y) \implies y \text{ est multiplié par } 10^a \text{ quand } x \text{ augmente de } 1}$$

Le taux d'évolution correspondant est $10^a - 1$. Ici $10^{0{,}175} \approx 1{,}50$ :
$+50\,\%$ par an. ⚠️ Ce n'est **pas** $a = 0{,}175$, ni $+17{,}5\,\%$.

---

## 5. Le changement $z = \dfrac{1}{y}$ — modèles inverses

Quand $y$ est à peu près **inversement proportionnel** à une expression affine
de $x$, le nuage $(x\,;y)$ ressemble à une branche d'hyperbole (chapitre
« fonction inverse ») ; le nuage $\left(x\,;\frac{1}{y}\right)$ est rectiligne.

> **Exemple complet.** On mesure l'intensité $y$ (en A) dans un circuit pour
> plusieurs valeurs de la résistance $x$ (en $\Omega$), sous tension constante :
>
> | $x$ ($\Omega$) | $2$ | $3$ | $4$ | $6$ |
> |---|---|---|---|---|
> | $y$ (A) | $3$ | $2$ | $1{,}5$ | $1$ |
> | $z = \dfrac{1}{y}$ | $0{,}33$ | $0{,}50$ | $0{,}67$ | $1{,}00$ |
>
> Le nuage $(x\,;y)$ est courbe (quand $x$ double de $2$ à $4$, $y$ est divisé
> par $2$). Le nuage $(x\,;z)$ est rectiligne, et la calculatrice donne
> $$z \approx 0{,}167\,x \quad (b \approx 0)$$
>
> **Retour à $y$** : $y = \dfrac{1}{0{,}167\,x} \approx \dfrac{6}{x}$.
> On reconnaît la loi d'Ohm $y = \dfrac{U}{x}$ avec $U = 6$ V.
>
> **Interpolation** : pour $x = 5\ \Omega$, $y \approx \dfrac{6}{5} = 1{,}2$ A.

---

## 6. Le changement $z = y^2$ — et les changements sur $x$

Quand c'est $y^2$ (et non $y$) qui dépend de façon affine de $x$, on pose
$z = y^2$.

> **Exemple complet.** Période $y$ (en s) d'un pendule selon sa longueur $x$
> (en m) :
>
> | $x$ (m) | $0{,}25$ | $0{,}50$ | $0{,}75$ | $1{,}00$ |
> |---|---|---|---|---|
> | $y$ (s) | $1{,}00$ | $1{,}42$ | $1{,}73$ | $2{,}00$ |
> | $z = y^2$ | $1{,}00$ | $2{,}02$ | $2{,}99$ | $4{,}00$ |
>
> Le nuage $(x\,;z)$ est presque parfaitement aligné ; la calculatrice donne
> $z \approx 3{,}99\,x + 0{,}01$, que l'on arrondit en $z \approx 4x$.
>
> **Retour à $y$** (une période est positive) : $y = \sqrt{4x} = 2\sqrt{x}$.
>
> **Interpolation** : pour $x = 0{,}64$ m, $y = 2\sqrt{0{,}64} = 1{,}6$ s.

**Le changement peut aussi porter sur l'abscisse.** Si le nuage $(x^2\,;y)$
est rectiligne, on pose $X = x^2$ et on ajuste $y = aX + b$, d'où $y = ax^2 + b$.
C'est le cas de la distance de freinage en fonction de la vitesse (voir
exercices). Le principe est identique : **on transforme une variable pour se
ramener à une droite.**

---

## 7. Interpoler, extrapoler — toujours avec prudence

Une fois le modèle en $y$ reconstruit, on l'utilise comme en Première :

- **Interpoler** : estimer $y$ pour un $x$ **à l'intérieur** de la plage
  observée. Raisonnable si le nuage transformé est bien aligné.
- **Extrapoler** : estimer $y$ **au-delà** des données. À faire, mais en
  **signalant la réserve** : rien ne garantit que le modèle se prolonge.

> **Exemple (suite du §4).** Prévision pour $x = 6$ :
> $z = 0{,}175 \times 6 + 3{,}30 = 4{,}35$, donc $y = 10^{4{,}35} \approx 22\,400$
> abonnés. C'est une **extrapolation** ($x = 6$ est hors de $[0\,;4]$) : une
> croissance de $+50\,\%$ par an finit toujours par ralentir (saturation du
> public). L'estimation vaut « si la tendance se poursuit ».

⚠️ Le piège inverse existe : l'exponentielle **sous-estime** rarement à court
terme mais **explose** à long terme. Plus on extrapole loin, moins c'est fiable
— dis-le explicitement dans ta rédaction, c'est un point d'argumentation attendu.

### Répondre à « quand $y$ dépassera-t-il un seuil ? »

Avec le modèle $z = ax + b$ et $z = \log(y)$, chercher $y > s$ revient à
résoudre $ax + b > \log(s)$ : une **équation du chapitre logarithme**.

> **Exemple.** Quand $y$ dépasse-t-il $100\,000 = 10^5$ abonnés ?
> $0{,}175\,x + 3{,}30 = 5 \iff x = \dfrac{1{,}7}{0{,}175} \approx 9{,}7$ :
> dans le courant de la $10^{\text{e}}$ année — si la tendance se maintient.

---

## 8. Tableau récapitulatif

| | |
|---|---|
| Pourquoi changer de variable | ramener un nuage **courbe** à un ajustement **affine** |
| Qui fournit le changement | l'énoncé (« on pose $z = \ldots$ ») |
| Les trois changements types | $z = \log(y)$ · $z = \dfrac{1}{y}$ · $z = y^2$ (parfois $X = x^2$) |
| Étapes | tableau de $z$ → nuage $(x\,;z)$ rectiligne → $z = ax+b$ (calculatrice) → retour à $y$ |
| Retour depuis $z = \log(y)$ | $y = 10^{\,ax+b} = 10^b \times (10^a)^x$ : modèle exponentiel |
| Retour depuis $z = 1/y$ | $y = \dfrac{1}{ax+b}$ : modèle inverse |
| Retour depuis $z = y^2$ | $y = \sqrt{ax+b}$ (si $y > 0$) |
| Taux caché dans la pente (cas log) | $y$ multiplié par $10^a$ par unité de $x$ |
| Interpolation / extrapolation | dans les données / au-delà, **avec réserve explicite** |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier le retour à $y$.** L'ajustement $z = 0{,}175x + 3{,}30$ ne répond
   pas à la question « combien d'abonnés ? » : il faut écrire
   $y = 10^{\,0{,}175x+3{,}30}$ et calculer en abonnés, pas en $\log$(abonnés).
2. **Confondre la pente et le taux d'évolution** (cas $z = \log y$) : la pente
   $a = 0{,}175$ ne signifie pas $+17{,}5\,\%$ par an, mais un coefficient
   multiplicateur $10^{0{,}175} \approx 1{,}50$, donc $+50\,\%$.
3. **Prendre le log de la mauvaise variable.** Si l'énoncé pose $z = \log(y)$,
   on transforme les ordonnées ; les $x_i$ ne bougent pas. (Et $\log$ exige
   $y > 0$ — vérifie-le d'un coup d'œil.)
4. **Ajuster $(x\,;y)$ au lieu de $(x\,;z)$** à la calculatrice : la droite des
   moindres carrés doit être calculée sur le **nuage transformé**.
5. **Extrapoler sans réserve.** Annoncer « $22\,400$ abonnés dans 6 ans » sans
   préciser « si la tendance se poursuit » fait perdre le point
   d'interprétation.
6. **Se tromper d'inverse au retour.** De $z = \dfrac{1}{y}$ on tire
   $y = \dfrac{1}{z} = \dfrac{1}{ax+b}$, et non $y = ax + b$ inversé terme à
   terme ; de $z = y^2$ on tire $y = \sqrt{z}$ (pas $\dfrac{z}{2}$, pas $z^2$).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« STATISTIQUE — SÉRIES À DEUX VARIABLES QUANTITATIVES » (lignes 85-91) :
- Contenus : « Changement de variable dans l'étude graphique d'une série
  statistique » ; « Ajustement se ramenant, par changement de variable, à un
  ajustement affine ».
- Capacités : « Représenter un nuage de points en effectuant un changement de
  variable donné » ; « Utiliser un ajustement pour interpoler ou extrapoler ».

Articulation avec la Première : le chapitre
contenu/premiere-techno/maths/statistiques-deux-variables/ (nuage, point moyen,
moindres carrés à la calculatrice, interpolation/extrapolation) est le prérequis
direct ; ici on n'introduit AUCUN nouveau calcul d'ajustement, seulement la
transformation préalable. Le retour à y depuis z = log(y) s'appuie sur le
chapitre « fonction logarithme décimal » de Terminale (définition 10^x = b,
propriétés log(ab), log(a^n)) et sur les fonctions exponentielles x ↦ a^x
(écriture 10^(ax+b) = 10^b·(10^a)^x). Ces deux chapitres sont cités en prérequis.

Choix de rédaction :
- Les changements retenus (log y, 1/y, y², et X = x² sur l'abscisse) sont les
  classiques du sujet ; le texte du BO ne donne pas de liste — le libellé
  « changement de variable donné » a été traduit par l'avertissement §2 : au bac
  le changement est fourni par l'énoncé.
- La capacité « représenter le nuage transformé » est traitée par les tableaux
  et la description de l'allure ; l'appli n'affiche pas de graphique dans la
  fiche.
- Le « taux caché dans la pente » (10^a − 1) est une interprétation directe des
  propriétés de log ; il fait le lien avec les automatismes (évolutions).

Vérifications numériques faites (Python) :
- §4 : log(2000, 3000, 4400, 6700, 10100) = 3,30 / 3,48 / 3,64 / 3,83 / 4,00
  (arrondis 10^-2) ; moindres carrés sur ces z arrondis : z = 0,175x + 3,30
  EXACTEMENT (x̄ = 2, z̄ = 3,65, Sxz = 1,75, Sxx = 10) ; 10^0,175 ≈ 1,4962 ;
  10^3,30 ≈ 1995 ; extrapolation x = 6 : 10^4,35 ≈ 22 387 ≈ 22 400 ;
  seuil 10^5 : x = 1,7/0,175 ≈ 9,71.
- §5 : z = 1/y = 0,33/0,50/0,67/1,00 ; moindres carrés ≈ 0,167x (b ≈ 0) ;
  y ≈ 6/x ; y(5) = 1,2 A.
- §6 : z = y² = 1,00/2,02(=1,42²)/2,99(=1,73²)/4,00 ; moindres carrés :
  a ≈ 3,988, b ≈ 0,01 → z ≈ 4x ; y = 2√x ; y(0,64) = 1,6 s.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La liste effective des changements de variable illustrés dans le préambule ou
  les commentaires du PDF officiel (l'extraction .txt ne conserve que
  Contenus/Capacités) : vérifier que log y, 1/y, y² sont bien les exemples
  visés et qu'aucun autre (√y, ln ?) n'est privilégié.
- Le logarithme utilisé : le programme de terminale techno ne définit que le
  log DÉCIMAL — toute la fiche est en log base 10, à confirmer.
- Le point moyen du nuage transformé n'est pas mentionné dans la fiche (la
  droite passe par G(x̄ ; z̄), pas par l'image de G(x̄ ; ȳ)) : point délicat,
  laissé hors fiche volontairement — valider ce choix.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
