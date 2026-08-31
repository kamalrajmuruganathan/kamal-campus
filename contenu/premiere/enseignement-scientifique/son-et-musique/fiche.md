---
id: 1esc-son-et-musique
titre: "Son et musique"
voie: generale
niveau: premiere
parcours: enseignement-scientifique
matiere: enseignement-scientifique
programme: "Première — Enseignement scientifique (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Signaux sonores (cycle 4)
  - Fréquence et période (Seconde)
statut: brouillon
relu_par: null
---

# Son et musique

> La musique, ce sont des sons organisés selon des **nombres**. Derrière une
> mélodie se cachent des fréquences, des rapports simples et, aujourd'hui, un
> codage numérique. Ce chapitre relie physique, mathématiques et art.

## 1. Le son, un phénomène vibratoire

Un **son** est une **vibration** qui se propage dans un milieu matériel (air,
eau, solide). Une source (corde, membrane, voix) fait vibrer les particules du
milieu de proche en proche. **Le son ne se propage pas dans le vide.**

Un son pur est décrit par un signal périodique caractérisé par :

- sa **période** $T$ : durée d'un motif qui se répète (en secondes) ;
- sa **fréquence** $f$ : nombre de vibrations par seconde (en **hertz**, Hz).
  Elle est reliée à la période par :

$$f = \frac{1}{T}$$

- sa **longueur d'onde** $\lambda$ : distance parcourue pendant une période,
  reliée à la **célérité** $v$ (vitesse du son) par :

$$\lambda = v \times T = \frac{v}{f}$$

Dans l'air, la vitesse du son est d'environ **340 m·s⁻¹**.

### Ce que l'oreille perçoit

- La **hauteur** d'un son (grave ou aigu) dépend de sa **fréquence** : plus la
  fréquence est grande, plus le son est **aigu**.
- L'**intensité** (fort ou faible) dépend de l'**amplitude** des vibrations.
- Le **timbre** distingue deux instruments jouant la même note : il provient des
  **harmoniques**, fréquences multiples de la fréquence fondamentale.

L'oreille humaine perçoit environ de **20 Hz à 20 000 Hz**.

## 2. La musique ou l'art de faire entendre les nombres

Les sons musicaux sont organisés en **gammes**. Ce qui rend deux notes
« consonantes » (agréables ensemble), c'est un **rapport simple** entre leurs
fréquences.

- L'**octave** correspond à un rapport de fréquences de **2**. Un la à 440 Hz et
  un la à 880 Hz sont « la même note » à l'octave supérieure.
- La **quinte** correspond à un rapport de **3/2** (par exemple 440 Hz et 660 Hz).

La **gamme de Pythagore** est construite en empilant des quintes (rapport 3/2)
puis en ramenant les notes dans une même octave (en multipliant ou divisant par
2). Plus le rapport de fréquences est simple, plus l'intervalle sonne juste à
l'oreille. C'est l'idée fondatrice : **la musique met en jeu des rapports de
nombres entiers**.

## 3. Le son, une information à coder : la numérisation

Pour enregistrer un son sur un ordinateur, il faut le transformer en **nombres**.
Le signal sonore est continu (analogique) ; on le convertit en signal
**numérique** (une suite de nombres) en deux étapes :

- **L'échantillonnage** : on mesure la valeur du signal à intervalles de temps
  réguliers. La **fréquence d'échantillonnage** est le nombre de mesures par
  seconde. Plus elle est élevée, plus le son numérisé est fidèle. Un CD utilise
  **44 100 échantillons par seconde** (44,1 kHz).
- **La quantification** : chaque valeur mesurée est arrondie et codée en
  **binaire** (0 et 1). Le nombre de **bits** par échantillon fixe le nombre de
  niveaux possibles : avec $n$ bits, on dispose de $2^n$ niveaux. Un CD code sur
  **16 bits** (soit 65 536 niveaux).

La numérisation entraîne une petite perte d'information (le signal continu est
approché par des « marches »), mais elle permet de **stocker, copier et
transmettre** le son sans dégradation supplémentaire.

## Ce qu'il faut retenir

- Un son est une **vibration** qui se propage dans un milieu matériel (pas dans
  le vide) ; $f = 1/T$ et $\lambda = v/f$, avec $v \approx 340$ m·s⁻¹ dans l'air.
- La **hauteur** dépend de la **fréquence**, l'**intensité** de l'amplitude, le
  **timbre** des harmoniques.
- La musique repose sur des **rapports simples** de fréquences : octave = 2,
  quinte = 3/2 ; gamme de Pythagore construite par empilement de quintes.
- Numériser un son = **échantillonner** (fréquence d'échantillonnage, 44,1 kHz
  pour un CD) puis **quantifier** en binaire ($n$ bits → $2^n$ niveaux).

## Les erreurs à éviter

- Le son ne se propage **pas dans le vide** : il lui faut un milieu matériel
  (contrairement à la lumière).
- Ne pas confondre **hauteur** (fréquence, grave/aigu) et **intensité**
  (amplitude, faible/fort) : un son grave peut être fort, un son aigu faible.
- L'octave n'ajoute pas une fréquence fixe : elle **multiplie par 2** la
  fréquence. C'est un rapport, pas une différence.
- Une fréquence d'échantillonnage plus élevée améliore la fidélité mais ne rend
  jamais le signal numérique strictement identique à l'analogique.
