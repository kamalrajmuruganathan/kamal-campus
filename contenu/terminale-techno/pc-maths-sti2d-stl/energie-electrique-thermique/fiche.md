---
id: tale-sti2d-pc-energie-electrique-thermique
titre: "Énergie électrique, thermique et lumineuse"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 14
prerequis:
  - Puissance, énergie et rendement d'une conversion (Première STI2D/STL)
  - Loi d'Ohm et puissance électrique (Première STI2D/STL)
  - Puissances de dix et conversions d'unités (Seconde)
statut: brouillon
relu_par: null
---

# Énergie électrique, thermique et lumineuse

> Une centrale produit de l'électricité, une ligne très haute tension la
> transporte, un chauffe-eau la convertit en énergie thermique, une batterie la
> stocke, un panneau photovoltaïque la fabrique à partir de la lumière. Ce
> chapitre suit l'énergie sur tout ce trajet — **électrique**, **thermique**,
> **chimique**, **lumineuse** — avec, à chaque étape, une unité à surveiller.

---

## 1. L'énergie électrique en régime sinusoïdal

### Tension sinusoïdale : période, fréquence

La tension du secteur n'est pas continue : elle **oscille** en suivant une
sinusoïde, caractérisée par sa **période** $T$ (en secondes, s), durée d'un
motif complet ; sa **fréquence** $f$ (en hertz, Hz), nombre de motifs par
seconde ; sa **valeur maximale** $U_{\text{max}}$ (en volts, V), l'amplitude.

$$\boxed{f = \frac{1}{T}}$$

> **Exemple.** Le secteur français oscille à $f = 50$ Hz, donc
> $T = \dfrac{1}{50} = 0{,}020$ s $= 20$ ms : $50$ allers-retours complets
> chaque seconde.

### Valeur efficace : ce que mesure le multimètre

> **Définition.** La **valeur efficace** $U$ d'une tension sinusoïdale est la
> valeur de la tension continue qui dissiperait la même puissance dans le même
> conducteur ohmique. Pour une sinusoïde :

$$\boxed{U = \frac{U_{\text{max}}}{\sqrt{2}}}$$

La même relation vaut pour l'intensité : $I = \dfrac{I_{\text{max}}}{\sqrt{2}}$.

> **Exemple.** « 230 V » sur une prise est une valeur **efficace** : la tension
> monte réellement à $U_{\text{max}} = 230 \times \sqrt{2} \approx 325$ V, cent
> fois par seconde. ⚠️ Le multimètre en mode alternatif (AC) affiche la valeur
> **efficace** ; l'oscilloscope, lui, montre $U_{\text{max}}$ (et $T$) sur la
> courbe : divise par $\sqrt{2}$ pour passer de l'un à l'autre.

### Notion de déphasage

Dans un circuit alimenté en sinusoïdal, la tension $u(t)$ et l'intensité
$i(t)$ oscillent à la **même fréquence**, mais pas forcément **en même
temps** : les maxima de $i$ peuvent être décalés d'une durée $\Delta t$ par
rapport à ceux de $u$. Ce décalage est le **déphasage** :

$$\varphi = 2\pi \cdot \frac{\Delta t}{T} \quad \text{(en radians)}$$

Pour un conducteur ohmique (radiateur), $\varphi = 0$ : $u$ et $i$ sont **en
phase** ; les moteurs, transformateurs et autres bobinages, eux, décalent
l'intensité. Ce n'est pas un détail : la puissance moyenne reçue par un dipôle
vaut $P = U I \cos\varphi$ ($U$ et $I$ **efficaces**) — d'où le « facteur de
puissance » $\cos\varphi$ que les industriels cherchent à garder proche de $1$.

> **Exemple.** Les maxima de $i$ arrivent $2{,}5$ ms après ceux de $u$, avec
> $T = 20$ ms : $\varphi = 2\pi \times \dfrac{2{,}5}{20} = \dfrac{\pi}{4}$ rad.

---

## 2. Transporter l'énergie électrique : les pertes en ligne

Entre la centrale et l'utilisateur, le courant traverse des centaines de
kilomètres de câbles, de résistance totale $R$ : traversés par une intensité
$I$, ils chauffent (effet Joule) et **dissipent** une puissance

$$\boxed{P_{\text{pertes}} = R \, I^2}$$

($P_{\text{pertes}}$ en W, $R$ en $\Omega$, $I$ en A) — de l'énergie **perdue**
pour l'utilisateur.

### La parade : la haute tension

La puissance transportée vaut $P = U \cdot I$. Pour livrer la **même
puissance** $P$ avec une tension plus élevée, il faut moins d'intensité
($I = P/U$), et les pertes $P_{\text{pertes}} = R\,\dfrac{P^2}{U^2}$
s'effondrent : **multiplier la tension par 10 divise les pertes par 100**.

> **Exemple.** Une ligne de résistance $R = 5{,}0\ \Omega$ transporte
> $P = 20$ MW. Sous $U = 20$ kV : $I = 1000$ A, pertes
> $= 5{,}0 \times 1000^2 = 5{,}0$ MW — le quart de la puissance transportée !
> Sous $U = 400$ kV : $I = 50$ A, pertes $= 12{,}5$ kW, moins de $0{,}1\,\%$.

C'est le principe du réseau : on **élève** la tension à la sortie de la
centrale (jusqu'à 400 kV), on transporte, puis on **abaisse** par étages
(transformateurs) jusqu'aux 230 V de la prise — le sinusoïdal a justement été
choisi parce qu'un transformateur ne fonctionne qu'en alternatif.

> ⚠️ Ne confonds pas les deux « P » : $P = UI$ est la puissance **transportée**,
> $P_{\text{pertes}} = RI^2$ la puissance **perdue** dans les câbles. La haute
> tension ne change pas la première, elle écrase la seconde.

---

## 3. Énergie interne et capacité thermique

> **Définition.** L'**énergie interne** $U$ d'un système est l'énergie stockée
> à l'échelle microscopique (agitation des molécules, interactions entre
> elles). Chauffer un corps, c'est augmenter son énergie interne.

On retient surtout comment $U$ varie, **sans changement d'état** :

$$\boxed{\Delta U = m \cdot c \cdot \Delta T}$$

avec $\Delta U$ en joules (J), $m$ en kilogrammes (kg),
$\Delta T = T_{\text{finale}} - T_{\text{initiale}}$ en kelvins (K), et $c$ la
**capacité thermique massique**, en J·kg⁻¹·K⁻¹ : l'énergie à fournir à $1$ kg
du matériau pour l'échauffer de $1$ K — son « inertie thermique ». L'eau est
un champion : $c_{\text{eau}} = 4185$ J·kg⁻¹·K⁻¹, contre environ $900$ pour
l'aluminium et $450$ pour l'acier.

> ✅ **Bonne nouvelle des unités** : un **écart** de température a la même
> valeur en kelvins et en degrés Celsius ($\Delta T = 80\ ^\circ$C $= 80$ K).
> On n'ajoute donc jamais $273$ dans un $\Delta T$ — c'est l'erreur classique.

> **Exemple.** Une bouilloire porte $1{,}5$ L d'eau ($1{,}5$ kg) de
> $20\ ^\circ$C à $100\ ^\circ$C :
> $\Delta U = 1{,}5 \times 4185 \times 80 \approx 5{,}0 \times 10^5$ J. Avec une
> résistance de $2000$ W sans pertes : $t \approx 250$ s, un peu plus de 4 min.

---

## 4. Flux thermique et résistance thermique

Quand les deux côtés d'une paroi ne sont pas à la même température, l'énergie
thermique la traverse spontanément **du chaud vers le froid** (conduction), et
la paroi s'oppose plus ou moins à ce passage : c'est sa **résistance
thermique**.

> **Définition.** Le **flux thermique** $\Phi$ est l'énergie thermique qui
> traverse la paroi **par seconde** : $\Phi = \dfrac{E}{\Delta t}$. C'est une
> puissance, en **watts** (W).

$$\boxed{\Phi = \frac{\Delta T}{R_{\text{th}}}}
\qquad \text{avec} \qquad
R_{\text{th}} = \frac{e}{\lambda \cdot S}$$

Unités : $\Phi$ en W, $\Delta T$ (écart entre les deux faces) en K,
$R_{\text{th}}$ en K·W⁻¹ ; $e$ épaisseur de la paroi en **mètres**, $S$ sa
surface en m², $\lambda$ la **conductivité thermique** du matériau en
W·m⁻¹·K⁻¹.

Un bon **isolant** a un $\lambda$ faible (laine de verre : $\approx 0{,}040$
W·m⁻¹·K⁻¹), un bon **conducteur** un $\lambda$ élevé (béton : $\approx 1{,}5$ ;
acier : $\approx 50$). Isoler, c'est **augmenter** $R_{\text{th}}$ : matériau
plus isolant ou paroi plus épaisse.

> **Exemple.** Paroi de $10$ m² isolée par $20$ cm de laine de verre :
> $R_{\text{th}} = \dfrac{0{,}20}{0{,}040 \times 10} = 0{,}50$ K·W⁻¹. S'il fait
> $20\ ^\circ$C dedans et $0\ ^\circ$C dehors : $\Phi = \dfrac{20}{0{,}50} =
> 40$ W — $40$ J à fournir chaque seconde pour compenser cette seule fuite.

Le vocabulaire n'est pas un hasard : $\Phi = \dfrac{\Delta T}{R_{\text{th}}}$
ressemble trait pour trait à la loi d'Ohm $I = \dfrac{U}{R}$. Conséquence :
pour un mur **multicouche** (béton + isolant), les résistances thermiques **en
série s'ajoutent** : $R_{\text{th, total}} = R_{\text{th},1} + R_{\text{th},2} + \dots$

> ⚠️ $e$ en **mètres** dans $R_{\text{th}} = \dfrac{e}{\lambda S}$. Une
> épaisseur laissée en centimètres fausse le résultat d'un facteur $100$.

---

## 5. Stocker l'énergie : piles et accumulateurs

Piles et accumulateurs convertissent de l'**énergie chimique** en énergie
électrique grâce à une réaction d'oxydoréduction. Dans une **pile**, la
conversion est à sens unique : réactifs consommés, pile morte. Dans un
**accumulateur** (batterie), la réaction est **réversible** : en imposant un
courant en sens inverse (charge), on reconstitue les réactifs. Cas à part, la
**pile à combustible** reçoit ses réactifs (dihydrogène et dioxygène) en
continu de l'extérieur : elle débite tant qu'on l'alimente.

### Capacité et énergie stockée

> **Définition.** La **capacité** $Q$ d'une pile ou d'un accumulateur est la
> charge électrique totale qu'il peut débiter, en **ampères-heures** (Ah) :
> $1$ Ah permet de débiter $1$ A pendant $1$ h.

$$\boxed{Q = I \cdot \Delta t}
\qquad \text{et} \qquad
\boxed{E = Q \cdot U}$$

$Q$ est en Ah si $I$ est en A et $\Delta t$ en **heures** ($1$ Ah $= 3600$ C).
L'énergie stockée $E$ vient en **wattheures** (Wh) si $Q$ est en Ah et $U$ en
V, avec $1$ Wh $= 3600$ J et $1$ kWh $= 3{,}6 \times 10^6$ J.

> **Exemple.** Batterie de voiture $12$ V, $60$ Ah :
> $E = 60 \times 12 = 720$ Wh $\approx 2{,}6 \times 10^6$ J. Elle peut en
> théorie débiter $6$ A pendant $10$ h, ou $60$ A pendant $1$ h.

> ⚠️ La capacité en Ah **ne suffit pas** à comparer deux batteries : $60$ Ah
> sous $12$ V stockent $720$ Wh, $60$ Ah sous $3{,}7$ V seulement $222$ Wh.
> C'est l'**énergie** $E = QU$ qui compare, pas la capacité seule.

---

## 6. L'énergie transportée par la lumière

La lumière transporte de l'énergie par « grains » : les **photons**. Un photon
de fréquence $\nu$ transporte l'énergie

$$\boxed{E = h \cdot \nu = \frac{h \cdot c}{\lambda}}$$

avec $E$ en joules (J), $\nu$ la fréquence en Hz, $\lambda$ la longueur d'onde
en **mètres**, $h = 6{,}63 \times 10^{-34}$ J·s la constante de Planck et
$c = 3{,}00 \times 10^8$ m·s⁻¹ la célérité de la lumière dans le vide.

> **Exemple.** Photon de lumière verte, $\lambda = 500$ nm
> $= 5{,}00 \times 10^{-7}$ m :
> $E = \dfrac{6{,}63 \times 10^{-34} \times 3{,}00 \times 10^8}{5{,}00 \times 10^{-7}}
> \approx 3{,}98 \times 10^{-19}$ J — minuscule : un faisceau ordinaire en
> transporte des milliards de milliards par seconde.

> ⚠️ Piège n°1 du calcul : $\lambda$ en **mètres** ($1$ nm $= 10^{-9}$ m).
> Laisser $500$ (nm) au dénominateur donne un résultat $10^9$ fois trop grand.

### La conversion photovoltaïque

Une cellule photovoltaïque convertit l'énergie lumineuse **directement** en
énergie électrique : chaque photon absorbé par le semi-conducteur (silicium)
peut libérer un électron. La conversion s'évalue avec le **rendement** :

$$\boxed{\eta = \frac{P_{\text{électrique}}}{P_{\text{lumineuse reçue}}}}
\qquad \text{avec} \qquad
P_{\text{lumineuse reçue}} = E_{\text{écl}} \cdot S$$

où $E_{\text{écl}}$ est l'**éclairement** (puissance lumineuse reçue par unité
de surface, en W·m⁻²) et $S$ la surface du panneau (m²). En plein soleil,
$E_{\text{écl}} \approx 1000$ W·m⁻².

> **Exemple.** Un panneau de $1{,}6$ m² reçoit $1000$ W·m⁻², donc
> $P_{\text{reçue}} = 1600$ W. S'il délivre $320$ W électriques :
> $\eta = \dfrac{320}{1600} = 20\,\%$ — l'ordre de grandeur du silicium actuel.
> Le reste est réfléchi ou converti en chaleur.

---

## 7. Tableau récapitulatif

| Notion | Formule | Unités |
|---|---|---|
| Fréquence / période | $f = \dfrac{1}{T}$ | Hz ; s |
| Valeur efficace | $U = \dfrac{U_{\text{max}}}{\sqrt{2}}$ | V |
| Déphasage | $\varphi = 2\pi \dfrac{\Delta t}{T}$ | rad |
| Pertes en ligne | $P_{\text{pertes}} = R I^2$ | W ; $\Omega$ ; A |
| Énergie interne (sans chgt d'état) | $\Delta U = m\,c\,\Delta T$ | J ; kg ; J·kg⁻¹·K⁻¹ ; K |
| Flux thermique | $\Phi = \dfrac{\Delta T}{R_{\text{th}}}$ | W ; K ; K·W⁻¹ |
| Résistance thermique | $R_{\text{th}} = \dfrac{e}{\lambda S}$ | m ; W·m⁻¹·K⁻¹ ; m² |
| Capacité d'un accumulateur | $Q = I\,\Delta t$ | Ah (A et h) |
| Énergie stockée | $E = Q\,U$ | Wh (Ah et V) |
| Énergie d'un photon | $E = h\nu = \dfrac{hc}{\lambda}$ | J ; Hz ; **m** |
| Rendement photovoltaïque | $\eta = \dfrac{P_{\text{élec}}}{E_{\text{écl}}\cdot S}$ | sans unité |

Conversions à connaître : $1$ Wh $= 3600$ J ; $1$ kWh $= 3{,}6\times10^6$ J ;
$1$ Ah $= 3600$ C ; $1$ nm $= 10^{-9}$ m ; $\Delta T$ identique en K et en °C.

---

## 8. Les erreurs qui coûtent des points

1. **Confondre valeur efficace et valeur maximale** : le multimètre AC affiche
   $U$ (efficace), l'oscilloscope montre $U_{\text{max}}$ ; on divise par
   $\sqrt{2} \approx 1{,}41$, pas par $2$.
2. **Oublier le carré dans les pertes en ligne** : $P_{\text{pertes}} = RI^2$,
   pas $RI$ — c'est ce carré qui fait tout l'intérêt de la haute tension.
3. **Ajouter 273 dans un écart de température** : dans $\Delta U = mc\Delta T$
   ou $\Phi = \Delta T/R_{\text{th}}$, un **écart** vaut la même chose en °C et
   en K. On convertit les températures, jamais les écarts.
4. **Laisser l'épaisseur en cm dans $R_{\text{th}} = e/(\lambda S)$** : $e$ en
   mètres, sinon la résistance thermique est fausse d'un facteur $100$.
5. **Confondre capacité (Ah) et énergie (Wh)** : la capacité compte la
   **charge** ; deux batteries de même capacité mais de tensions différentes
   ne stockent pas la même énergie ($E = QU$).
6. **Laisser $\lambda$ en nanomètres dans $E = hc/\lambda$** : résultat $10^9$
   fois trop grand. Un photon visible transporte quelques $10^{-19}$ J.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, sections « Énergie
électrique », « Énergie interne », « Énergie chimique » (volet piles/
accumulateurs uniquement) et « Énergie transportée par la lumière »), extrait
via WebFetch depuis le PDF officiel cache.media.education.gouv.fr
(spe261_annexe_1158935.pdf). À confronter au PDF avant publication.

Correspondance rubriques → sections :
- « Régime sinusoïdal : valeur efficace, fréquence, période, déphasage » → § 1.
- « Transport et distribution de l'énergie électrique ; pertes en ligne » → § 2.
- « Énergie interne ; capacité thermique » → § 3.
- « Flux thermique ; conduction ; résistance thermique » → § 4.
- « Piles, accumulateurs ; pile à combustible » → § 5 (le volet oxydoréduction
  de la rubrique « Énergie chimique » — couples, demi-équations — n'est PAS
  traité ici : il relève d'un chapitre de chimie dédié).
- « Photon, énergie E = hν ; conversion photovoltaïque » → § 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La formule P = U·I·cosφ (facteur de puissance) : l'extraction locale dit
  seulement « déphasage ». Elle est standard en STI2D et présente dans les
  sujets, mais vérifier si le texte officiel l'exige ou si la seule NOTION de
  déphasage suffit ; le cas échéant, la rétrograder en simple remarque.
- La formule Rth = e/(λS) : l'extraction dit « conduction ; résistance
  thermique » sans expliciter la formule. C'est la formule d'usage des sujets
  STI2D (souvent fournie) ; vérifier son statut exact (exigible ou fournie).
- L'additivité des résistances thermiques en série : prolongement naturel de
  l'analogie électrique, utilisée dans les sujets ; à confirmer.
- La convention d'écriture de l'éclairement (E_écl en W·m⁻², parfois noté E ou
  φ surfacique selon les manuels) : choisir la notation du sujet type.
- Valeurs numériques utilisées : c_eau = 4185 J·kg⁻¹·K⁻¹ (certains sujets
  prennent 4180 ou 4,18 kJ), λ laine de verre 0,040 et béton 1,5 W·m⁻¹·K⁻¹
  (ordres de grandeur constructeurs), h = 6,63×10⁻³⁴ J·s, c = 3,00×10⁸ m·s⁻¹.

Calculs vérifiés numériquement : 230√2 ≈ 325 V ; T = 1/50 = 20 ms ; pertes
5,0 Ω / 20 MW : 5,0 MW sous 20 kV (I = 1000 A) et 12,5 kW sous 400 kV
(I = 50 A) ; bouilloire : 1,5×4185×80 = 502 200 J ≈ 5,0×10⁵ J, t ≈ 251 s ;
Rth = 0,20/(0,040×10) = 0,50 K·W⁻¹, Φ = 20/0,50 = 40 W ; batterie 12 V 60 Ah :
720 Wh = 2,592×10⁶ J ; photon 500 nm : 3,978×10⁻¹⁹ J ; panneau 1,6 m² :
η = 320/1600 = 20 %.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
