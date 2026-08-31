---
id: "sj-snt-01"
titre: "SNT — Le jeu vidéo en ligne"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : Le jeu vidéo en ligne

**Durée : 1 heure — Barème sur 20 points.**

Léa joue à un jeu vidéo multijoueur en ligne. On étudie le voyage des données, la connexion et l'équipement.

---

## Exercice 1 — Télécharger le jeu (5 points)

Avant de jouer, Léa doit télécharger le jeu. Le fichier pèse **72 Go**. Sa connexion offre un débit descendant de **150 Mbit/s** (on prend 1 octet = 8 bits, 1 Go = 1000 Mo).

1. Convertir la taille du jeu en **mégabits (Mbit)**.
2. Calculer la **durée du téléchargement** en secondes, puis en minutes.
3. Léa affirme : « Avec une fibre à 900 Mbit/s, ce serait 6 fois plus rapide. » A-t-elle raison ? Justifier.

---

## Exercice 2 — Réseau et adresse IP (5 points)

À la maison, la box attribue à la console l'adresse IP **192.168.0.25**.

1. Cette adresse est-elle **publique** ou **privée** ? Justifier.
2. Le réseau local utilise le masque **/24** (255.255.255.0). Combien de machines différentes peut-on connecter au maximum sur ce réseau (adresses réseau et diffusion exclues) ?
3. Expliquer en une phrase le rôle du **routeur** (la box) entre le réseau local et Internet.
4. Le « ping » de Léa est de **28 ms**. Que mesure cette valeur, et pourquoi est-elle importante pour un jeu en ligne ?

---

## Exercice 3 — Codage binaire du score (5 points)

Dans le jeu, le score d'une partie est un entier stocké sur **1 octet**.

1. Quel est le **plus grand score** codable sur 1 octet ?
2. Léa termine avec le score **205**. Écrire **205 en binaire** sur 8 bits.
3. Le tableau des scores affiche le code binaire **0110 1010**. Quel score décimal cela représente-t-il ?

---

## Exercice 4 — Manette et informatique embarquée (5 points)

La manette sans fil contient un **microcontrôleur** et plusieurs **capteurs**.

1. Citer un **capteur** présent dans une manette moderne et l'information qu'il fournit.
2. La manette communique en Bluetooth. Est-ce un réseau **filaire** ou **sans fil** ? Donner un avantage et un inconvénient du sans-fil ici.
3. On dit que la manette est un système **embarqué**. Donner deux caractéristiques d'un système embarqué.

---

## Corrigé

### Exercice 1
1. 72 Go = 72 × 1000 = 72 000 Mo, et 72 000 × 8 = **576 000 Mbit**.
2. Durée = 576 000 ÷ 150 = **3 840 s**, soit 3 840 ÷ 60 = **64 minutes** (1 h 04).
3. 900 ÷ 150 = 6 : le débit est bien 6 fois plus grand, donc la durée est divisée par 6 : 3 840 ÷ 6 = 640 s ≈ 10,7 min. **Léa a raison.**

### Exercice 2
1. **Privée** : elle appartient à la plage 192.168.0.0 – 192.168.255.255 réservée aux réseaux locaux ; elle n'est pas routable sur Internet.
2. Avec /24, il reste 8 bits pour les hôtes : 2⁸ = 256 adresses, moins l'adresse réseau et l'adresse de diffusion = **254 machines**.
3. Le routeur relie le réseau local à Internet et **dirige les paquets** vers leur destination (traduction d'adresses / NAT).
4. Le ping mesure le **temps aller-retour** d'un paquet (latence). Une faible latence évite le « lag » : les actions du joueur sont prises en compte quasi instantanément.

### Exercice 3
1. Sur 8 bits : 2⁸ − 1 = **255**.
2. 205 = 128 + 64 + 8 + 4 + 1 → **1100 1101**. (Vérif : 128+64=192, +8=200, +4=204, +1=205.)
3. 0110 1010 = 64 + 32 + 8 + 2 = **106**.

### Exercice 4
1. Par exemple un **accéléromètre** / **gyroscope** (mouvement et inclinaison), ou des capteurs de pression sur les gâchettes.
2. **Sans fil**. Avantage : liberté de mouvement, pas de câble. Inconvénient : nécessite une batterie / peut subir des interférences ou une légère latence.
3. Un système embarqué est **dédié à une tâche précise**, avec des **ressources limitées** (mémoire, énergie), souvent **autonome** et intégré dans un objet.
