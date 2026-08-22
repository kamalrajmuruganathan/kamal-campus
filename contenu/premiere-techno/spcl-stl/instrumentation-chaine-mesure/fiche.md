---
id: 1stl-spcl-instrumentation-chaine-mesure
titre: "Instrumentation : la chaîne de mesure"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 17
prerequis:
  - Grandeurs, unités du Système international et conversions (Seconde)
  - Chiffres significatifs et puissances de 10 (Seconde)
  - Justesse et fidélité (Mesure et incertitudes en laboratoire, SPCL 1re)
  - Codage binaire, bit et octet (Appareil photo et image numérique, SPCL 1re)
statut: brouillon
relu_par: null
---

# Instrumentation : la chaîne de mesure

> Au laboratoire, tu ne « lis » jamais directement une température ou une pression. Un
> **capteur** transforme cette grandeur physique en un signal électrique, une électronique le
> met en forme, un **convertisseur** le transforme en nombres, et un ordinateur l'affiche. Ce
> trajet, c'est la **chaîne de mesure**. La comprendre, c'est savoir ce que vaut vraiment le
> chiffre affiché — et où se cachent ses limites.

---

## 1. Les caractéristiques d'un instrument de mesure

Avant d'utiliser un appareil, on regarde sa **notice** : elle donne les grandeurs qui décrivent
sa qualité. Ce sont les mêmes pour tous les instruments, du thermomètre au multimètre.

### L'étendue de mesure

L'**étendue de mesure** (EM) est l'intervalle entre la plus petite et la plus grande valeur que
l'instrument peut mesurer.

$$\boxed{\text{EM} = V_{\max} - V_{\min}}$$

> **Exemple.** Un thermomètre gradué de $-10\ \text{°C}$ à $+110\ \text{°C}$ a une étendue de
> mesure $\text{EM} = 110 - (-10) = 120\ \text{°C}$. Hors de cet intervalle, il ne mesure plus
> rien de fiable.

### La résolution

La **résolution** est la **plus petite variation** de la grandeur que l'instrument est capable
de **détecter et d'afficher**. Sur un appareil numérique, c'est le pas du dernier chiffre.

> **Exemple.** Une balance qui affiche $12{,}34\ \text{g}$ a une résolution de $0{,}01\ \text{g}$ :
> elle ne distingue pas $12{,}344\ \text{g}$ de $12{,}341\ \text{g}$.

> ⚠️ Ne confonds pas **résolution** et **précision**. Une balance peut afficher au $0{,}01\ \text{g}$
> près (bonne résolution) tout en se trompant de $0{,}5\ \text{g}$ (mauvaise justesse). Afficher
> beaucoup de chiffres ne prouve pas qu'ils sont justes.

### La sensibilité

La **sensibilité** relie la variation de la grandeur de **sortie** à la variation de la grandeur
d'**entrée** :

$$\boxed{S = \frac{\Delta(\text{sortie})}{\Delta(\text{entrée})}}$$

Elle a une **unité**, qui dépend des deux grandeurs (par exemple des mV·°C⁻¹ pour un capteur de
température qui délivre une tension). Plus $S$ est grande, plus l'instrument réagit fortement à
une petite variation.

> **Exemple.** Un capteur dont la tension augmente de $20\ \text{mV}$ quand la température monte
> de $10\ \text{°C}$ a une sensibilité $S = \dfrac{20}{10} = 2\ \text{mV·°C}^{-1}$.

### Le temps de réponse

Le **temps de réponse** est la durée que met l'instrument pour donner une valeur stable après
un changement brusque de la grandeur. Un capteur « lent » ne suit pas les variations rapides.

> **Exemple.** Un thermomètre plongé dans l'eau chaude n'affiche pas $80\ \text{°C}$
> instantanément : il faut quelques secondes pour que sa mesure se stabilise. Ce délai est son
> temps de réponse.

### La précision

La **précision** décrit l'écart entre la valeur mesurée et la valeur vraie. Elle rassemble deux
idées vues au chapitre incertitudes :

| Terme | Ce qu'il décrit |
|---|---|
| **Justesse** | l'absence d'erreur systématique (la mesure « vise » la bonne valeur) |
| **Fidélité** | la reproductibilité (les mesures répétées sont resserrées) |

Un instrument **précis** est à la fois **juste** et **fidèle**.

---

## 2. La chaîne de mesure

Mesurer une grandeur physique avec un système numérique, c'est enchaîner **quatre maillons** :

$$\text{grandeur physique} \;\xrightarrow{\text{capteur}}\; \text{signal électrique}
\;\xrightarrow{\text{conditionneur}}\; \text{tension exploitable}
\;\xrightarrow{\text{CAN}}\; \text{nombre}
\;\xrightarrow{}\; \text{traitement / affichage}$$

| Maillon | Rôle |
|---|---|
| **Capteur** | transforme la grandeur physique (température, pression, lumière…) en grandeur électrique |
| **Conditionneur** | met en forme le signal : il l'**amplifie**, le filtre, l'adapte au calibre du CAN |
| **CAN** | **convertit** la tension analogique en un **nombre** (valeur numérique) |
| **Traitement** | l'ordinateur affiche, enregistre, exploite la valeur |

> **Exemple.** Dans une sonde de température numérique : une thermistance (capteur) voit sa
> résistance varier, un circuit la transforme en tension et l'amplifie (conditionneur), un CAN
> code cette tension en nombre, l'écran affiche $37{,}0\ \text{°C}$.

> **À comprendre.** Chaque maillon peut dégrader la mesure. Le résultat final n'est jamais
> meilleur que le maillon le plus faible de la chaîne.

---

## 3. Le capteur et sa caractéristique de transfert

Le **capteur** est le premier maillon : il convertit la grandeur d'entrée (ce qu'on veut mesurer)
en une **grandeur de sortie** électrique — le plus souvent une **tension**.

La **caractéristique de transfert** est le **graphique** (ou la relation) qui donne la sortie en
fonction de l'entrée.

### Capteur linéaire

Un capteur est **linéaire** quand sa caractéristique de transfert est une **droite**. La sortie
$U$ s'écrit alors :

$$\boxed{U = S \times G + U_0}$$

où $G$ est la grandeur d'entrée, $U_0$ l'ordonnée à l'origine (valeur pour $G = 0$), et $S$ la
**pente** de la droite.

> **La pente de la caractéristique EST la sensibilité.** C'est le lien à retenir : une droite
> raide (grande pente) = capteur sensible.

> **Exemple.** Un capteur de température linéaire délivre $U = 0{,}50\ \text{V}$ à $0\ \text{°C}$
> et $U = 2{,}50\ \text{V}$ à $100\ \text{°C}$. Sa sensibilité est la pente :
> $S = \dfrac{2{,}50 - 0{,}50}{100 - 0} = \dfrac{2{,}00}{100} = 0{,}020\ \text{V·°C}^{-1}
> = 20\ \text{mV·°C}^{-1}$, et $U_0 = 0{,}50\ \text{V}$.

---

## 4. La mesure par étalonnage

Un capteur donne une tension ; on veut une grandeur physique. **Étalonner**, c'est établir la
correspondance entre les deux, pour pouvoir remonter de l'un à l'autre.

**La méthode :**

1. On applique des valeurs **connues** de la grandeur d'entrée (des valeurs de référence).
2. On relève la sortie correspondante pour chacune.
3. On trace la caractéristique de transfert (sortie en fonction de l'entrée).
4. Si elle est linéaire, on détermine son équation $U = S\,G + U_0$.
5. On l'**inverse** pour trouver la grandeur à partir d'une tension mesurée :
   $G = \dfrac{U - U_0}{S}$.

> **Exemple.** Avec le capteur ci-dessus ($S = 0{,}020\ \text{V·°C}^{-1}$, $U_0 = 0{,}50\ \text{V}$),
> une tension mesurée de $1{,}30\ \text{V}$ correspond à
> $\theta = \dfrac{1{,}30 - 0{,}50}{0{,}020} = \dfrac{0{,}80}{0{,}020} = 40\ \text{°C}$.

---

## 5. Le convertisseur analogique-numérique (CAN)

Un signal électrique varie de façon **continue** : c'est un signal **analogique**. Un ordinateur
ne manipule que des **nombres** : le **CAN** transforme la tension en un nombre entier.

### La résolution en bits

Un CAN à **$n$ bits** répartit la plage de tension en **$2^n$ niveaux** distincts. C'est sa
**résolution** :

| $n$ (bits) | Nombre de niveaux $2^n$ |
|---|---|
| $8$ | $256$ |
| $10$ | $1024$ |
| $12$ | $4096$ |

Plus $n$ est grand, plus la conversion est fine.

### Le quantum

Le **calibre** est l'étendue de tension que le CAN accepte à son entrée. Le **quantum** $q$ est
le « pas » de conversion : la plus petite variation de tension qui fait changer le nombre de sortie.

$$\boxed{q = \frac{\text{calibre}}{2^{\,n}}}$$

Le quantum est une **tension** (en volts). C'est la **résolution en tension** du CAN.

> **Exemple.** Un CAN de $8$ bits, calibre $5{,}00\ \text{V}$ :
> $q = \dfrac{5{,}00}{2^{8}} = \dfrac{5{,}00}{256} \approx 0{,}0195\ \text{V} \approx 19{,}5\ \text{mV}$.
> Deux tensions séparées de moins de $19{,}5\ \text{mV}$ donneront le **même** nombre.

### La valeur numérique

Pour une tension d'entrée $U_e$, le nombre entier $N$ délivré par le CAN est le nombre de quantums
contenus dans $U_e$ :

$$\boxed{N = \text{partie entière de } \frac{U_e}{q}}$$

> **Exemple.** Avec le CAN précédent ($q \approx 0{,}0195\ \text{V}$), une tension
> $U_e = 3{,}00\ \text{V}$ donne $\dfrac{3{,}00}{0{,}0195} \approx 153{,}6$, soit $N = 153$.
> Inversement, connaissant $N$, on retrouve la tension à un quantum près : $U \approx N \times q$.

> ⚠️ **Le calibre doit englober tout le signal.** Si la tension dépasse le calibre, le CAN
> **sature** : il bloque sur sa valeur maximale ($2^n - 1$) et la mesure est fausse. À l'inverse,
> un signal minuscule sur un gros calibre gaspille la résolution — d'où le rôle du conditionneur,
> qui amplifie pour occuper toute la plage.

---

## 6. La chaîne en tout ou rien

Toutes les chaînes ne mesurent pas une valeur : certaines ne répondent qu'à **deux états** —
*oui / non*, *marche / arrêt*, *alerte / repos*. C'est la chaîne **en tout ou rien** (TOR).

### Le comparateur et le seuil

Le cœur du dispositif est un **comparateur** : il compare la tension du capteur à une tension de
**seuil** fixée et bascule sa sortie d'un état à l'autre au franchissement du seuil.

> **Exemple.** Un capteur de température commande un ventilateur. Tant que $\theta < 30\ \text{°C}$,
> la sortie est à $0$ (ventilateur éteint). Dès que $\theta$ dépasse $30\ \text{°C}$, la sortie
> passe à $1$ (ventilateur allumé). Le seuil vaut $30\ \text{°C}$.

### L'hystérésis

Avec un seuil **unique**, un signal qui oscille juste autour du seuil fait **claqueter** la sortie
(marche/arrêt/marche… très vite). Pour l'éviter, on utilise **deux seuils** différents : c'est
l'**hystérésis**.

- un seuil **haut** $S_H$ pour **enclencher** ;
- un seuil **bas** $S_B$ (plus petit) pour **couper**.

Entre les deux, l'état ne change pas : le système reste dans la position où il était.

> **Exemple — régulation.** Un chauffage réglé sur $19\ \text{°C}$ (seuil bas) et $21\ \text{°C}$
> (seuil haut) : il chauffe jusqu'à $21\ \text{°C}$, s'arrête, ne redémarre qu'une fois retombé à
> $19\ \text{°C}$. Il ne s'allume pas et ne s'éteint pas cent fois par minute : c'est le rôle de
> l'hystérésis, la largeur $S_H - S_B$ étant l'écart entre les deux seuils.

> **Applications.** Alerte (détecteur qui déclenche au-delà d'un seuil), régulation (thermostat,
> niveau d'une cuve), sécurité (coupure d'un procédé au-delà d'une pression limite).

---

## 7. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Étendue de mesure | $\text{EM} = V_{\max} - V_{\min}$ |
| Résolution (instrument) | plus petite variation détectable / affichée |
| Sensibilité | $S = \dfrac{\Delta(\text{sortie})}{\Delta(\text{entrée})}$ = **pente** de la caractéristique |
| Temps de réponse | délai pour atteindre une valeur stable |
| Précision | justesse (pas d'erreur systématique) **+** fidélité (mesures resserrées) |
| Chaîne de mesure | grandeur → **capteur** → **conditionneur** → **CAN** → traitement |
| Capteur linéaire | $U = S\,G + U_0$ |
| Étalonnage | établir puis inverser la caractéristique : $G = \dfrac{U - U_0}{S}$ |
| Résolution du CAN | $n$ bits → $2^n$ niveaux |
| Quantum | $q = \dfrac{\text{calibre}}{2^{\,n}}$ (en volts) |
| Valeur numérique | $N = \text{partie entière de } \dfrac{U_e}{q}$ |
| Tout ou rien | comparateur + seuil ; **hystérésis** = deux seuils ($S_H$ et $S_B$) |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre résolution et précision.** Beaucoup de chiffres affichés ≠ mesure juste. La
   résolution est le pas d'affichage ; la précision est l'écart à la valeur vraie.
2. **Oublier l'unité de la sensibilité.** $S$ n'est pas un nombre nu : c'est un rapport
   sortie/entrée, donc des mV·°C⁻¹, des V·bar⁻¹, etc. selon les grandeurs.
3. **Se tromper de formule pour le quantum.** $q = \dfrac{\text{calibre}}{2^n}$, on **divise**
   par $2^n$. Écrire $q = \text{calibre} \times 2^n$ donne une tension absurde.
4. **Oublier de convertir avant de calculer $q$ ou $N$.** Un calibre en volts, un quantum souvent
   en millivolts : $19{,}5\ \text{mV} = 0{,}0195\ \text{V}$. Mélanger les deux fausse tout.
5. **Confondre $n$ (nombre de bits) et $2^n$ (nombre de niveaux).** Un CAN 8 bits ne code pas
   $8$ valeurs mais $256$.
6. **Croire qu'un seul seuil suffit en régulation.** Sans **hystérésis** (deux seuils), le
   système claquette autour du seuil et s'use.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel SPCL, série STL, classe de première — BO du 22 janvier 2019
(docs/programme-stl-spcl.txt, section « Instrumentation : chaîne de mesure (1re) », lignes 55-59) :
« Caractéristiques d'un instrument : résolution, étendue, temps de réponse ; chaîne de mesure :
capteur, conditionneur, caractéristique de transfert ; CAN : quantum, résolution ; chaîne en
tout ou rien : alerte, régulation, hystérésis. »
Extraction via WebFetch depuis le PDF officiel education.gouv.fr (spe260_annexe... / première STL),
à CONFRONTER au PDF avant publication.

CONVENTIONS DE CALCUL RETENUES (à valider par le relecteur) :
- Quantum q = calibre / 2^n, conformément à l'intitulé fourni. Certaines ressources écrivent
  q = étendue / (2^n − 1) (nombre d'intervalles). J'ai suivi calibre/2^n de bout en bout, y
  compris dans les exercices. À trancher avec l'équipe pour homogénéité inter-chapitres.
- Valeur numérique N = partie entière de U_e / q (troncature, pas arrondi). Convention courante ;
  à confirmer si l'épreuve attend un arrondi.
- « calibre » = étendue de tension d'entrée du CAN ; supposé de 0 à V_max (unipolaire) dans tous
  les exemples et exercices. Aucun CAN bipolaire n'est traité.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le temps de réponse est-il défini quantitativement au programme (t_90 / t_95 %) ou seulement
  qualitativement ? J'ai retenu l'approche qualitative.
- « précision » : le programme distingue-t-il explicitement justesse/fidélité dans CE module, ou
  seulement dans « Mesure et incertitudes » ? J'ai fait le lien avec le chapitre incertitudes.
- L'écriture U = S·G + U0 de la caractéristique linéaire est-elle attendue, ou seulement la
  lecture graphique de la pente ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel. Statut : brouillon, non relu.
-->
