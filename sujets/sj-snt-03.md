---
id: "sj-snt-03"
titre: "SNT — La musique en streaming"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : La musique en streaming

**Durée : 1 heure — Barème sur 20 points.**

On étudie une application d'écoute de musique en ligne : le Web, le débit audio, les données et les recommandations.

---

## Exercice 1 — Comprendre une adresse Web (5 points)

Pour écouter un titre, l'application ouvre l'URL :
`https://ecoute.exemple.fr/album/2049?titre=07`

1. Que signifie le **s** de `https` par rapport à `http` ?
2. Identifier dans l'URL : le **protocole**, le **nom de domaine** et le **chemin**.
3. Le navigateur doit joindre le serveur `ecoute.exemple.fr`. Quel service traduit ce nom en **adresse IP** ? Comment s'appelle-t-il ?

---

## Exercice 2 — Le poids d'une chanson (5 points)

Un titre est encodé avec un **débit audio de 320 kbit/s**. La chanson dure **4 minutes** (1 ko = 1000 o, 1 octet = 8 bits).

1. Convertir la durée en secondes.
2. Calculer la **taille du fichier** en kilobits, puis en **méga-octets (Mo)**.
3. En qualité économique (**128 kbit/s**), le fichier serait-il plus léger ou plus lourd ? Donner sa nouvelle taille.

---

## Exercice 3 — Le compteur d'écoutes en binaire (4 points)

Un titre affiche son nombre d'écoutes de la semaine, codé sur **1 octet**.

1. Écrire **89** en binaire sur 8 bits.
2. Le compteur affiche **1011 0100** : combien d'écoutes cela fait-il ?
3. Que se passe-t-il quand le compteur dépasse 255 sur 1 octet ? Que faut-il alors changer ?

---

## Exercice 4 — Données et recommandations (6 points)

L'application recommande de la musique à partir de l'historique d'écoute.

1. Citer deux **données** collectées pendant l'écoute qui servent aux recommandations.
2. Expliquer en une ou deux phrases le principe d'un **algorithme de recommandation**.
3. Deux personnes différentes voient des accueils différents dans l'application. Comment appelle-t-on ce phénomène, et quel risque présente-t-il ?
4. Citer un droit garanti par le **RGPD** concernant ces données personnelles.

---

## Corrigé

### Exercice 1
1. Le **s** signifie « sécurisé » : les échanges sont **chiffrés** (HTTPS), on ne peut pas les lire en clair sur le réseau.
2. Protocole : **https** ; nom de domaine : **ecoute.exemple.fr** ; chemin : **/album/2049** (avec le paramètre `titre=07`).
3. Le **DNS** (Domain Name System) traduit le nom de domaine en adresse IP.

### Exercice 2
1. 4 min = 4 × 60 = **240 s**.
2. Taille = 320 × 240 = 76 800 kbit ; en octets : 76 800 ÷ 8 = 9 600 ko = **9,6 Mo**.
3. Débit plus faible → fichier **plus léger** : 128 × 240 = 30 720 kbit ÷ 8 = 3 840 ko = **3,84 Mo**.

### Exercice 3
1. 89 = 64 + 16 + 8 + 1 → **0101 1001**. (Vérif : 64+16=80, +8=88, +1=89.)
2. 1011 0100 = 128 + 32 + 16 + 4 = **180**.
3. Il y a **débordement** (dépassement de capacité) : 1 octet ne code que jusqu'à 255. Il faut **coder sur plus de bits** (2 octets → jusqu'à 65 535, etc.).

### Exercice 4
1. Par exemple : les **titres écoutés**, la **durée d'écoute / les titres passés**, les **« j'aime »**, l'heure d'écoute.
2. L'algorithme compare les goûts d'un utilisateur à ceux d'autres personnes aux profils proches (ou aux caractéristiques des titres) pour **proposer ce qui a plu à des profils similaires**.
3. C'est la **personnalisation** (bulle de filtres) : risque d'**enfermement**, on ne découvre plus que ce qui ressemble à ce qu'on écoute déjà.
4. Par exemple : le **droit d'accès**, de **rectification**, d'**effacement** de ses données, ou le droit de retirer son consentement.
