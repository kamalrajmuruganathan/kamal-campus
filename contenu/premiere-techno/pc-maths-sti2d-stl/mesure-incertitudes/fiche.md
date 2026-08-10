---
id: 1sti2d-mesure-incertitudes
titre: "Mesure et incertitudes"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 14
prerequis:
  - Grandeurs et unités (Seconde)
  - Statistiques à un caractère (Seconde)
  - Moyenne et écart-type (Seconde)
statut: brouillon
relu_par: null
---

# Mesure et incertitudes

> Aucune mesure n'est exacte. Un résultat sans incertitude n'a pas de valeur
> scientifique — c'est ce que ce chapitre installe, et c'est une exigence permanente
> en STI2D et STL, où l'on mesure tout le temps.

---

## 1. Grandeur, valeur, unité

Trois notions à distinguer soigneusement :

| Notion | Sens | Exemple |
|---|---|---|
| **Grandeur** | ce qu'on mesure | une longueur |
| **Valeur** | le nombre obtenu | $2{,}45$ |
| **Unité** | la référence de comparaison | le mètre |

$$L = 2{,}45\ \mathrm{m}$$

> ⚠️ **Un résultat sans unité est faux**, pas seulement incomplet. « $2{,}45$ » ne
> veut rien dire : mètres, centimètres, kilomètres ?

---

## 2. Les sept unités de base du Système international

Le programme demande de **citer les sept**. Les deux dernières sont moins utilisées au
lycée, mais elles font partie de la liste.

| Grandeur | Unité | Symbole |
|---|---|---|
| Longueur | mètre | m |
| Masse | kilogramme | kg |
| Temps | seconde | s |
| Intensité électrique | ampère | A |
| Température thermodynamique | kelvin | K |
| Quantité de matière | mole | mol |
| Intensité lumineuse | candela | cd |

Toutes les autres unités s'en déduisent : le newton vaut $\mathrm{kg\cdot m\cdot s^{-2}}$,
le volt s'exprime à partir du watt et de l'ampère.

> **Moyen de retenir.** Les cinq premières sont celles que tu manipules en TP. Les deux
> qu'on oublie sont la **mole** et la **candela**.

### Préfixes usuels

| Préfixe | Symbole | Facteur |
|---|---|---|
| nano | n | $10^{-9}$ |
| micro | µ | $10^{-6}$ |
| milli | m | $10^{-3}$ |
| kilo | k | $10^{3}$ |
| méga | M | $10^{6}$ |
| giga | G | $10^{9}$ |

---

## 3. Pourquoi une mesure varie

Répète dix fois la même mesure avec le même appareil : tu n'obtiens pas dix fois le
même nombre. Cette **variabilité** est le point de départ du chapitre.

Deux familles de causes, qu'il faut savoir distinguer :

| Type d'erreur | Origine | Effet | Remède |
|---|---|---|---|
| **Aléatoire** | fluctuations imprévisibles (lecture, bruit, courants d'air) | dispersion autour de la valeur vraie | **répéter** les mesures et moyenner |
| **Systématique** | défaut constant (appareil déréglé, zéro décalé) | **décalage** toujours dans le même sens | **étalonner** l'appareil |

> **La différence est décisive.** Répéter une mesure réduit l'erreur aléatoire, mais
> **ne corrige jamais** une erreur systématique : un appareil mal étalonné se trompera
> mille fois de la même façon, et la moyenne sera fausse avec une belle régularité.

---

## 4. Justesse et fidélité

Ces deux mots ont un sens **technique précis**, et ils ne sont pas synonymes.

| Terme | Ce qu'il décrit | Se dégrade à cause de |
|---|---|---|
| **Justesse** | la moyenne des mesures est-elle proche de la valeur vraie ? | l'erreur **systématique** |
| **Fidélité** | les mesures sont-elles resserrées entre elles ? | l'erreur **aléatoire** |

L'image de la cible rend la distinction immédiate :

| Situation | Justesse | Fidélité |
|---|---|---|
| Tirs groupés au centre | bonne | bonne |
| Tirs groupés mais décalés | **mauvaise** | bonne |
| Tirs dispersés autour du centre | bonne | **mauvaise** |
| Tirs dispersés et décalés | mauvaise | mauvaise |

> ⚠️ **Le cas piégeux est le deuxième** : des mesures très resserrées inspirent
> confiance, alors qu'un appareil déréglé les rend toutes fausses ensemble. **Fidèle
> ne veut pas dire juste.**

**Application attendue** : comparer deux méthodes de mesure d'une même grandeur en
disant laquelle est la plus juste et laquelle est la plus fidèle.

---

## 5. Exploiter une série de mesures

Quand on dispose de $n$ mesures indépendantes $x_1, x_2, \dots, x_n$ :

- l'**histogramme** montre d'un coup d'œil si les valeurs sont resserrées ou dispersées ;
- la **moyenne** $\bar{x}$ est la meilleure estimation de la valeur ;
- l'**écart-type** $s$ mesure la dispersion, donc la **fidélité**.

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

> **Lien avec les maths.** L'écart-type a été étudié en seconde : c'est le même objet,
> employé ici sur des mesures physiques.

> **Exemple.** Deux méthodes pour mesurer une même résistance, dix mesures chacune.
> La méthode A donne $\bar{x} = 100{,}4\ \Omega$ avec $s = 0{,}2\ \Omega$ ; la méthode B
> donne $\bar{x} = 100{,}0\ \Omega$ avec $s = 1{,}5\ \Omega$. La méthode A est plus
> **fidèle** (moins dispersée), la méthode B est plus **juste** si la valeur de référence
> est $100\ \Omega$.

---

## 6. L'incertitude-type

L'**incertitude-type**, notée $u(X)$, rend compte de l'étendue des valeurs qu'on peut
raisonnablement attribuer à la grandeur mesurée.

### Évaluation de type A — par une approche statistique

C'est celle qu'on utilise **quand on a répété la mesure**. À partir de $n$ mesures
indépendantes :

$$\boxed{u(X) = \frac{s}{\sqrt{n}}}$$

où $s$ est l'écart-type de la série.

> **Ce que dit la formule.** Plus on répète, plus $u(X)$ diminue — mais en $\sqrt{n}$ :
> pour diviser l'incertitude par $2$, il faut **quatre fois plus** de mesures. C'est
> pour cela qu'on ne gagne pas grand-chose au-delà d'une dizaine de répétitions.

> **Exemple.** $n = 9$ mesures, écart-type $s = 0{,}6\ \mathrm{mm}$.
> Alors $u = \dfrac{0{,}6}{\sqrt{9}} = \dfrac{0{,}6}{3} = 0{,}2\ \mathrm{mm}$.

### Sur une mesure unique

Quand on ne dispose que d'**une seule** mesure, on ne peut rien calculer
statistiquement : on **estime** $u(X)$ à partir de l'instrument.

| Situation | Estimation courante |
|---|---|
| Instrument gradué (règle, éprouvette) | la moitié de la plus petite graduation |
| Appareil numérique | l'indication du constructeur, ou le dernier chiffre affiché |

> **Exemple.** Règle graduée au millimètre : $u \approx 0{,}5\ \mathrm{mm}$.

---

## 7. Écrire correctement un résultat

Un résultat de mesure s'écrit avec **trois éléments indissociables** :

$$\boxed{X = X_{\text{mesurée}} \pm u(X)\quad \text{[unité]}}$$

> **Exemple.** $L = 2{,}45 \pm 0{,}02$ m signifie que la longueur se situe très
> probablement entre $2{,}43$ m et $2{,}47$ m.

### Chiffres significatifs

Le nombre de chiffres écrits doit refléter la **précision réelle** de la mesure.

> ⚠️ **La calculatrice n'est pas une source de précision.** Si l'on mesure $2{,}4$ cm
> et $1{,}3$ cm, le produit affiché $3{,}12$ cm² doit être arrondi à $3{,}1$ cm² :
> un calcul ne fait pas gagner en précision.

| Opération | Règle |
|---|---|
| Produit, quotient | on garde le **nombre de chiffres significatifs** du facteur le moins précis |
| Somme, différence | on garde le nombre de **décimales** du terme le moins précis |

> L'incertitude s'écrit avec **un seul chiffre significatif** en général, et la valeur
> est arrondie **au même rang** qu'elle. Écrire $m = 12{,}4567 \pm 0{,}2$ g n'a pas de
> sens : si l'incertitude porte sur le dixième, les chiffres suivants ne veulent rien
> dire. On écrit $m = 12{,}5 \pm 0{,}2$ g.

---

## 8. Comparer à une valeur de référence

C'est **le** critère de validité demandé par le programme.

La **valeur de référence** $X_{\text{réf}}$ est la valeur attendue : une constante
tabulée, ou le résultat d'un modèle.

### Méthode

1. Calculer l'**écart** entre la mesure et la référence :
   $$\left| X_{\text{mesurée}} - X_{\text{réf}} \right|$$
2. Le comparer à l'incertitude-type, c'est-à-dire l'**évaluer en nombre
   d'incertitudes-types** :
   $$\boxed{\text{écart en nombre de } u = \frac{\left| X_{\text{mesurée}} - X_{\text{réf}} \right|}{u(X)}}$$
3. Conclure :

| Écart | Interprétation |
|---|---|
| inférieur à $2\,u$ | résultat **compatible** avec la référence |
| supérieur à $2\,u$ | écart **trop grand** : erreur systématique, incertitude sous-estimée, ou modèle hors de son domaine de validité |

> **Exemple.** On mesure $g = 9{,}70\ \mathrm{m\cdot s^{-2}}$ avec $u = 0{,}08$, la
> référence étant $9{,}81$.
> Écart : $|9{,}70 - 9{,}81| = 0{,}11$. En nombre d'incertitudes-types :
> $\dfrac{0{,}11}{0{,}08} \approx 1{,}4$. C'est inférieur à $2$ : le résultat est
> **compatible** avec la valeur de référence.

> **Ce que ça sert aussi.** Cette comparaison permet de **délimiter le domaine de
> validité d'un modèle** : tant que l'écart reste de l'ordre de quelques
> incertitudes-types, le modèle décrit correctement la situation.

---

## 9. Pour aller plus loin — l'incertitude relative

> ⚠️ **Hors du programme de première STI2D/STL.** Utile, mais non exigible : ne
> l'utilise pas comme critère de validité, c'est la comparaison du § 8 qui est attendue.

$$\text{incertitude relative} = \frac{u(X)}{X}$$

Sans unité, souvent en pourcentage. Elle permet de comparer la **qualité** de deux
mesures portant sur des grandeurs différentes.

> **Exemple.** $u = 1$ cm sur $2$ m, c'est $0{,}5\,\%$ — une bonne mesure.
> $u = 1$ cm sur $5$ cm, c'est $20\,\%$ — une mauvaise mesure. Pourtant l'incertitude
> absolue est la même.

---

## 10. À retenir absolument

| | |
|---|---|
| Résultat complet | valeur **+ unité + incertitude-type** |
| Unités de base du SI | **sept** : m, kg, s, A, K, mol, cd |
| Erreur aléatoire | dégrade la **fidélité** — corrigée en **répétant** |
| Erreur systématique | dégrade la **justesse** — corrigée en **étalonnant** |
| Incertitude-type, type A | $u = \dfrac{s}{\sqrt{n}}$ |
| Mesure unique | $u$ **estimée** d'après l'instrument |
| Écriture | $X = X_{\text{mes}} \pm u(X)$, incertitude à 1 chiffre significatif |
| Validité | écart à la référence **en nombre d'incertitudes-types** |

---

## 11. Les erreurs qui coûtent des points

1. **Écrire un résultat sans unité.**
2. **Citer cinq unités de base au lieu de sept** : la mole et la candela sont dans la
   liste.
3. **Confondre justesse et fidélité** : des mesures très resserrées peuvent être toutes
   fausses ensemble.
4. **Croire que répéter les mesures corrige une erreur systématique.**
5. **Oublier le $\sqrt{n}$** dans l'incertitude de type A : $u = \dfrac{s}{\sqrt{n}}$,
   pas $u = s$.
6. **Recopier tous les chiffres de la calculatrice** : un calcul n'ajoute pas de
   précision.
7. **Donner l'incertitude avec trois chiffres significatifs** : un seul suffit, et la
   valeur s'arrondit au même rang.
8. **Conclure qu'une mesure est fausse** parce qu'elle diffère de la référence, sans
   avoir évalué l'écart **en nombre d'incertitudes-types**.
9. **Oublier de convertir** avant de comparer deux valeurs.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », section « Mesure et incertitudes ».

RÉÉCRITURE DU 2026-08-10. La version précédente avait été rédigée alors que
l'extraction du PDF ne laissait lisible qu'un seul marqueur (« Grandeurs et unités »).
Le PDF a été réextrait avec app/scripts/extraire-pdf.mjs : la section est désormais
intégralement lisible, et la fiche est adossée mot à mot à ses contenus et capacités.

Ce que la relecture du texte officiel a changé :

- SEPT unités de base exigées (« Citer les sept unités de base du système
  international »). La version précédente n'en donnait que cinq, en écartant
  explicitement les deux autres. Corrigé.
- JUSTESSE et FIDÉLITÉ sont des notions du programme, nommées dans les contenus et
  dans la capacité « comparer plusieurs méthodes de mesure [...] en termes de justesse
  et de fidélité ». Elles étaient totalement absentes. Section 4 ajoutée.
- INCERTITUDE-TYPE est le terme du programme, avec deux capacités distinctes :
  « procéder à une évaluation par une approche statistique (type A) » et « estimer une
  incertitude-type sur une mesure unique ». La version précédente parlait d'une
  « incertitude » générique sans jamais introduire ni le terme ni les deux méthodes.
  Section 6 ajoutée.
- HISTOGRAMME, moyenne et écart-type sont explicitement cités comme outils
  d'exploitation d'une série de mesures. Section 5 ajoutée.
- VALEUR DE RÉFÉRENCE : le programme demande de « discuter de la validité d'un résultat
  en comparant la différence entre le résultat d'une mesure et la valeur de référence
  d'une part et l'incertitude-type d'autre part », et les repères précisent que l'écart
  « peut être évalué en nombre d'incertitudes-types ». La version précédente enseignait
  à la place le RECOUVREMENT D'INTERVALLES entre deux mesures — méthode répandue, mais
  qui n'est pas celle du programme, et qui ne fait pas intervenir de valeur de
  référence. Section 8 réécrite.
- INCERTITUDE RELATIVE n'apparaît pas dans le programme. Conservée, mais reléguée en
  section 9 et explicitement signalée hors programme.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le seuil de 2 incertitudes-types (§ 8) : le texte officiel dit « écart maximal
  raisonnable [...] évalué en nombre d'incertitudes-types » SANS fixer de seuil
  numérique. Le 2 est l'usage courant, pas une exigence du texte — à confirmer, ou à
  formuler de façon plus prudente.
- La formule u = s/√n (§ 6) : le texte demande « une évaluation par une approche
  statistique (type A) » sans écrire la formule. Vérifier qu'elle est bien celle
  attendue en STI2D/STL, et non l'écart-type seul.
- Les estimations pour une mesure unique (demi-graduation) sont un usage, non un
  contenu du texte : à valider.
- La liste des préfixes n'est pas dans cette section du programme ; conservée comme
  outil pratique.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
