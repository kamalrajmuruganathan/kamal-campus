---
id: tale-spe-pc-phenomenes-ondulatoires
titre: "Phénomènes ondulatoires : diffraction, interférences, Doppler"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Ondes et signaux"
duree_lecture_min: 15
prerequis:
  - Ondes et signaux (Première spécialité)
  - Relation fondamentale λ = v·T = v/f (Première)
  - Fonction logarithme décimal (Maths spécialité)
statut: brouillon
relu_par: null
---

# Phénomènes ondulatoires : diffraction, interférences, Doppler

> La Première décrivait une onde qui se propage tout droit. La Terminale montre ce qui arrive
> quand plusieurs ondes se rencontrent, quand une onde franchit un trou, ou quand la source
> bouge. Trois phénomènes, trois formules — et un piège commun : les **puissances de 10** et
> les **unités**.

---

## 1. Intensité et niveau d'intensité sonore

### Définitions

L'**intensité sonore** $I$ mesure la puissance transportée par le son par unité de surface.
Elle s'exprime en **watts par mètre carré** ($\text{W·m}^{-2}$).

L'oreille perçoit un domaine énorme : du plus faible son audible au seuil de douleur, $I$
est multipliée par mille milliards. On rapporte donc $I$ à une **intensité de référence**

$$\boxed{I_0 = 1{,}0 \times 10^{-12}\ \text{W·m}^{-2}}$$

qui correspond au seuil d'audibilité à $1000$ Hz. On définit alors le **niveau d'intensité
sonore** $L$, en **décibels** (dB) :

$$\boxed{L = 10 \log\!\left(\frac{I}{I_0}\right)}$$

où $\log$ est le **logarithme décimal** (base 10).

> **Exemple.** Une conversation correspond à $I = 1{,}0 \times 10^{-6}\ \text{W·m}^{-2}$.
> Alors $\dfrac{I}{I_0} = \dfrac{10^{-6}}{10^{-12}} = 10^{6}$, donc
> $L = 10 \log(10^{6}) = 10 \times 6 = 60$ dB.

### Propriétés à connaître

Le logarithme transforme les multiplications en additions. Deux réflexes :

- **Multiplier $I$ par 10 ajoute 10 dB.** $\log(10 \times x) = 1 + \log x$.
- **Multiplier $I$ par 2 ajoute environ 3 dB.** $10\log 2 \approx 3{,}0$ dB.

> **Exemple.** Deux violons identiques jouant ensemble délivrent **deux fois** l'intensité d'un
> seul : le niveau ne double pas, il augmente de $3$ dB seulement. Pour gagner $10$ dB, il
> faudrait **dix** violons.

### Retrouver l'intensité à partir du niveau

On inverse la formule en appliquant $10^{(\cdots)}$ :

$$\boxed{I = I_0 \times 10^{\,L/10}}$$

> **Exemple.** Un seuil de douleur à $L = 120$ dB donne
> $I = 10^{-12} \times 10^{120/10} = 10^{-12} \times 10^{12} = 1{,}0\ \text{W·m}^{-2}$.

---

## 2. Diffraction par une ouverture

### Le phénomène

Quand une onde rencontre une **ouverture** (ou un obstacle) dont la taille $a$ est du même
ordre de grandeur que sa longueur d'onde $\lambda$, elle **s'étale** au-delà : c'est la
**diffraction**. Le phénomène est d'autant plus marqué que l'ouverture est **petite** devant
$\lambda$.

> **Exemple.** On entend une personne derrière l'angle d'un mur sans la voir : le son
> ($\lambda \sim 1$ m) est fortement diffracté par une ouverture de porte, la lumière
> ($\lambda \sim 0{,}5\ \mu$m) ne l'est presque pas.

### L'angle caractéristique

La diffraction concentre l'essentiel de l'énergie dans une **tache centrale**. Son
**demi-angle d'ouverture** $\theta$ (l'écart angulaire entre le centre et le premier
minimum) vaut :

$$\boxed{\theta = \frac{\lambda}{a}}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $\theta$ | demi-angle de diffraction | **radian** (rad) |
| $\lambda$ | longueur d'onde | mètre (m) |
| $a$ | largeur de l'ouverture | mètre (m) |

> ⚠️ $\theta$ est en **radians**, et $\lambda$ et $a$ doivent être dans la **même unité**
> (souvent des mètres) pour que le rapport soit correct. Plus la fente est fine, plus $\theta$
> est grand : la tache s'élargit.

### Mesure sur un écran

Pour un faisceau laser diffracté par une fente, la tache centrale a une **largeur** $\ell$ sur
un écran placé à la distance $D$. Comme $\theta$ est petit, $\tan\theta \approx \theta$, et la
demi-largeur vaut $\ell/2 = D\,\theta$ :

$$\ell = 2 D \theta = \frac{2 \lambda D}{a}$$

> **Exemple.** Laser $\lambda = 633$ nm $= 6{,}33 \times 10^{-7}$ m, fente
> $a = 0{,}10$ mm $= 1{,}0 \times 10^{-4}$ m, écran à $D = 2{,}0$ m.
> $\theta = \dfrac{6{,}33 \times 10^{-7}}{1{,}0 \times 10^{-4}} = 6{,}3 \times 10^{-3}$ rad, et
> $\ell = 2 \times 2{,}0 \times 6{,}3 \times 10^{-3} = 2{,}5 \times 10^{-2}$ m, soit $2{,}5$ cm.

> **La diffraction ne change ni la fréquence ni la longueur d'onde** : elle ne fait que
> redistribuer les directions de propagation.

---

## 3. Interférences de deux ondes

### Condition et différence de marche

Deux ondes de **même fréquence** issues de deux sources **synchrones** (en phase) se
superposent. En un point M, elles ont parcouru des distances $d_1$ et $d_2$ ; ce qui compte
est la **différence de marche** :

$$\boxed{\delta = d_2 - d_1}$$

Selon la valeur de $\delta$ comparée à $\lambda$, les deux ondes arrivent en phase ou en
opposition de phase.

### Interférences constructives

Les ondes sont **en phase**, les amplitudes s'**ajoutent** (maximum) lorsque la différence de
marche est un **multiple entier** de $\lambda$ :

$$\boxed{\delta = k\,\lambda \qquad k \in \mathbb{Z}}$$

> **Exemple.** $\lambda = 3$ cm. En un point où $d_1 = 12$ cm et $d_2 = 18$ cm,
> $\delta = 6$ cm $= 2\lambda$ : $k = 2$, entier → interférence **constructive**, le signal
> est renforcé (son fort, frange brillante).

### Interférences destructives

Les ondes sont **en opposition de phase**, les amplitudes se **retranchent** (minimum, parfois
nul) lorsque la différence de marche est un **demi-entier** de $\lambda$ :

$$\boxed{\delta = \left(k + \tfrac{1}{2}\right)\lambda \qquad k \in \mathbb{Z}}$$

> **Exemple.** Même dispositif, point où $\delta = 4{,}5$ cm $= 1{,}5\,\lambda = (1 + \tfrac12)\lambda$ :
> interférence **destructive**, le signal s'annule (silence, frange sombre).

### Lumière : franges et interfrange

Avec deux fentes distantes de $b$ éclairées par un laser, on observe sur un écran à distance
$D$ des franges régulières. La distance entre deux franges brillantes voisines, l'**interfrange**,
vaut

$$i = \frac{\lambda D}{b}$$

> ⚠️ Ne confonds pas $a$ (largeur d'**une** fente, diffraction) et $b$ (**écart entre deux**
> fentes, interférences) : ce sont deux longueurs différentes.

---

## 4. Effet Doppler

### Le phénomène

Quand la source d'une onde et l'observateur sont en **mouvement relatif**, la fréquence
**perçue** $f_R$ diffère de la fréquence **émise** $f_E$. C'est l'**effet Doppler**.

- Source qui **se rapproche** → fréquence perçue **plus grande** (son plus **aigu**).
- Source qui **s'éloigne** → fréquence perçue **plus petite** (son plus **grave**).

> **Exemple.** La sirène d'une ambulance semble plus aiguë quand elle vient vers toi, puis
> chute brusquement vers le grave dès qu'elle t'a dépassé.

### Établir le décalage (observateur fixe, source mobile)

La source, de fréquence $f_E$ et de période $T_E = 1/f_E$, se déplace à la vitesse $v$ vers
l'observateur. Pendant une période, l'onde avance de $c\,T_E$ mais la source avance de
$v\,T_E$ : les fronts d'onde sont **resserrés** devant elle. La longueur d'onde perçue est

$$\lambda_R = (c - v)\,T_E \quad\Rightarrow\quad
f_R = \frac{c}{\lambda_R} = f_E \, \frac{c}{c - v}.$$

$$\boxed{f_R = f_E\,\dfrac{c}{c - v}\ \text{(rapprochement)} \qquad
f_R = f_E\,\dfrac{c}{c + v}\ \text{(éloignement)}}$$

Le **décalage Doppler** est la différence des fréquences :

$$\boxed{\Delta f = f_R - f_E}$$

> **Exemple.** Une source émet $f_E = 1000$ Hz et fonce à $v = 34\ \text{m·s}^{-1}$ vers toi
> ($c = 340\ \text{m·s}^{-1}$). $f_R = 1000 \times \dfrac{340}{340 - 34} = 1000 \times \dfrac{340}{306} \approx 1111$ Hz,
> soit $\Delta f \approx +111$ Hz : le son est plus aigu.

### À quoi ça sert

Mesure de vitesse (radar routier, échographie Doppler des flux sanguins), et en astronomie le
**décalage vers le rouge** : les galaxies qui s'éloignent voient leurs raies décalées vers les
grandes longueurs d'onde, preuve de l'expansion de l'Univers.

---

## 5. Tableau récapitulatif

| Notion | Formule | Points de vigilance |
|---|---|---|
| Niveau sonore | $L = 10\log\!\left(\dfrac{I}{I_0}\right)$ | $I_0 = 10^{-12}\ \text{W·m}^{-2}$ ; $I$ en $\text{W·m}^{-2}$ |
| $\times 10$ sur $I$ | $+10$ dB | $\times 2$ sur $I$ → $+3$ dB |
| Intensité inverse | $I = I_0\,10^{L/10}$ | bien mettre $10^{-12}$ en facteur |
| Diffraction | $\theta = \dfrac{\lambda}{a}$ | $\theta$ en **rad** ; $\lambda$ et $a$ même unité |
| Interf. constructive | $\delta = k\lambda$ | $k$ entier |
| Interf. destructive | $\delta = \left(k+\tfrac12\right)\lambda$ | demi-entier |
| Doppler (approche) | $f_R = f_E\dfrac{c}{c-v}$ | approche → $f_R > f_E$ (aigu) |
| Décalage Doppler | $\Delta f = f_R - f_E$ | signe = sens du mouvement |

---

## 6. Les erreurs qui coûtent des points

1. **Oublier de convertir $I$ ou d'utiliser $I_0 = 10^{-12}$.** Le rapport $I/I_0$ doit être un
   nombre **sans unité** ; une erreur de puissance de 10 sur $I_0$ fait rater tout le calcul.
2. **Prendre $\log$ pour $\ln$.** Le niveau sonore utilise le logarithme **décimal** (base 10),
   pas le logarithme népérien.
3. **Croire que doubler l'intensité double le niveau en dB.** Doubler $I$ ajoute seulement
   $\approx 3$ dB, pas $\times 2$.
4. **Laisser $\theta$ en degrés** dans $\theta = \lambda/a$, ou mélanger les unités de $\lambda$
   et $a$ (nm avec mm). Tout en mètres, $\theta$ en radians.
5. **Confondre $a$ et $b$** : $a$ est la largeur d'une fente (diffraction), $b$ l'écart entre
   deux fentes (interférences).
6. **Se tromper de condition d'interférences** : constructive pour $\delta = k\lambda$,
   destructive pour $\delta = (k+\tfrac12)\lambda$ — ne pas les inverser.
7. **Mauvais signe en Doppler** : rapprochement → dénominateur $c - v$ et fréquence **plus
   grande** ; éloignement → $c + v$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait local :
docs/programme-terminale-physique-chimie-2019.txt, section « 4.1 Caractériser les phénomènes
ondulatoires » (lignes 160-170). Capacités exigibles retenues :
- Exploiter le niveau d'intensité sonore : L = 10 log(I/I0), I0 = 1,0e-12 W/m².
- Exploiter θ = λ/a (angle de diffraction).
- Établir les conditions d'interférences constructives (δ = kλ) et destructives (δ = (k+½)λ)
  via la différence de marche.
- Établir l'expression du décalage Doppler (observateur fixe, source mobile).

À CONFRONTER AU PDF OFFICIEL PAR UN PROFESSEUR :
- θ = λ/a : le programme donne l'« angle caractéristique ». Je l'ai présenté comme le
  demi-angle d'ouverture de la tache centrale (écart angulaire au premier minimum). Confirmer
  la convention attendue (demi-angle vs angle total) et l'usage de ℓ = 2λD/a, non explicitement
  exigé mais classique.
- Interfrange i = λD/b : hors capacités exigibles strictes (ajout « pour aller plus loin »).
  Vérifier qu'on souhaite le garder, et la notation b pour l'écart entre fentes.
- Effet Doppler : dérivation faite dans le cas « observateur fixe, source mobile », conforme au
  BO. Les expressions f_R = f_E·c/(c∓v) sont établies, pas seulement fournies.
- Vérifier l'intensité de référence I0 = 1,0×10⁻¹² W·m⁻² et les valeurs d'exemples (seuil de
  douleur 120 dB → I = 1 W·m⁻²).

Rédaction originale à partir du programme officiel (public). Aucun emprunt à un manuel.
Statut : brouillon, non relu — étape de relecture par un professeur obligatoire.
-->
