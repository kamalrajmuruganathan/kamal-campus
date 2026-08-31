---
id: 1si-chaine-dinformation
titre: "La chaîne d'information"
voie: generale
niveau: premiere
parcours: si
matiere: si
programme: "Première — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Analyse fonctionnelle des systèmes (Première SI)
  - Notion de tension et de signal électrique
statut: brouillon
relu_par: null
---

# La chaîne d'information

> Dans un système automatisé, la chaîne d'information est le « système nerveux » :
> elle **perçoit** l'état du système et de son environnement, **décide** de la
> conduite à tenir, puis **transmet** des ordres et des informations. Elle pilote
> la chaîne d'énergie sans jamais fournir elle-même la puissance.

---

## 1. Les trois fonctions de la chaîne d'information

La chaîne d'information se structure en trois fonctions techniques successives :

- **ACQUÉRIR** : prélever des grandeurs physiques (température, position,
  présence…) grâce à des **capteurs** ;
- **TRAITER** : élaborer une décision à partir des mesures et des consignes,
  dans une **unité de traitement** (microcontrôleur, automate) ;
- **COMMUNIQUER** : transmettre le résultat, soit vers la chaîne d'énergie
  (ordres), soit vers l'utilisateur ou un réseau (affichage, données).

On résume : **grandeurs physiques → ACQUÉRIR → TRAITER → COMMUNIQUER → ordres/données.**

---

## 2. Acquérir : les capteurs

Un **capteur** transforme une grandeur physique en un **signal** exploitable
(le plus souvent électrique). On distingue :

- **capteur TOR** (Tout Ou Rien) : deux états seulement, 0 ou 1 (bouton-poussoir,
  détecteur de fin de course, capteur de présence) ;
- **capteur analogique** : sa sortie varie **continûment** avec la grandeur
  (thermistance, potentiomètre, photorésistance) ;
- **capteur numérique** : il délivre directement une valeur codée en binaire
  (capteur I²C, codeur incrémental).

Vocabulaire utile : l'**étendue de mesure** (valeurs min–max mesurables), la
**sensibilité** (variation de sortie pour une variation d'entrée) et la
**résolution** (plus petite variation détectable).

---

## 3. Numériser un signal : CAN, quantification

L'unité de traitement est **numérique** : elle ne manipule que des **nombres
binaires** (bits). Un signal analogique doit donc être **numérisé** par un
**convertisseur analogique-numérique (CAN)**. Deux opérations :

- l'**échantillonnage** : on relève la valeur à intervalles réguliers (fréquence
  d'échantillonnage) ;
- la **quantification** : chaque valeur est arrondie sur un nombre fini de
  niveaux. Avec **n bits**, on dispose de **2ⁿ niveaux**.

Exemple : un CAN **10 bits** sur une plage **0–5 V** offre **2¹⁰ = 1024 niveaux**.
Le pas (résolution) vaut :
**q = 5 V ÷ (1024 − 1) ≈ 4,89 mV**.
Plus n est grand, plus la résolution est fine.

---

## 4. Traiter : l'information binaire

Un **bit** vaut 0 ou 1. Un groupe de **8 bits** forme un **octet**, qui code
**2⁸ = 256** valeurs (0 à 255). Un système à **n** bits code **2ⁿ** valeurs.

Le traitement suit un **algorithme** : suite d'instructions (tests, boucles,
calculs) exécutée par le programme. Les capteurs fournissent les **entrées**, le
programme calcule, et les **sorties** commandent les préactionneurs de la chaîne
d'énergie. Une **fonction logique** (ET, OU, NON) combine des variables binaires :
par exemple, « démarrer si (marche ET sécurité) ».

---

## 5. Communiquer : transmettre l'information

La communication peut être :

- **filaire** (liaison série UART, I²C, SPI, bus CAN, Ethernet) ;
- **sans fil** (Wi-Fi, Bluetooth, radio).

On parle de **transmission série** (bits envoyés l'un après l'autre sur un fil)
ou **parallèle** (plusieurs bits en même temps). Un **débit** s'exprime en
**bits par seconde (bit/s)**. Une **trame** est un paquet organisé de bits
(début, données, contrôle) permettant de vérifier l'intégrité du message.

---

## Ce qu'il faut retenir

- La chaîne d'information enchaîne **ACQUÉRIR → TRAITER → COMMUNIQUER**.
- Un **capteur** convertit une grandeur physique en signal ; il peut être **TOR**,
  **analogique** ou **numérique**.
- Un **CAN** numérise par **échantillonnage** puis **quantification** ; avec
  **n bits**, on a **2ⁿ niveaux**, et la résolution vaut **q = plage ÷ (2ⁿ − 1)**.
- **1 octet = 8 bits = 256 valeurs** ; **n bits ↔ 2ⁿ valeurs**.
- La communication peut être **filaire ou sans fil**, **série ou parallèle**, et
  se mesure en **bit/s**.

## Les erreurs à éviter

- **Confondre TOR et analogique** : un bouton (TOR) n'a que 2 états ; un
  potentiomètre (analogique) varie continûment.
- **Oublier le −1 dans la résolution** : avec n bits on a 2ⁿ niveaux mais
  **2ⁿ − 1** intervalles, donc q = plage ÷ (2ⁿ − 1).
- **Croire que la chaîne d'information fournit la puissance** : elle **commande**,
  la chaîne d'énergie **agit**.
