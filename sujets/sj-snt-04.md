---
id: "sj-snt-04"
titre: "SNT — La maison connectée"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : La maison connectée

**Durée : 1 heure — Barème sur 20 points.**

On étudie la domotique d'un logement : objets connectés, réseau local, données des capteurs et débit d'une caméra.

---

## Exercice 1 — Le réseau local des objets (5 points)

La box attribue des adresses IP privées aux objets : thermostat **192.168.1.10**, ampoule **192.168.1.11**, caméra **192.168.1.12**. Le réseau utilise le masque **/24**.

1. Ces adresses sont-elles **publiques** ou **privées** ? Justifier.
2. Combien d'objets au maximum peut-on connecter sur ce réseau /24 (hors adresses réseau et diffusion) ?
3. Les objets communiquent en **Wi-Fi**. Citer un avantage et un inconvénient par rapport à une liaison filaire (Ethernet).

---

## Exercice 2 — Le thermostat et le binaire (4 points)

Le thermostat code la température (en degrés entiers positifs) sur **1 octet**.

1. Il fait **22 °C**. Écrire **22** en binaire sur 8 bits.
2. Le capteur transmet **0001 1011**. Quelle température lit-on ?
3. Quelle est la température maximale codable sur 1 octet avec ce système (entiers de 0 à ...) ?

---

## Exercice 3 — Le flux de la caméra (6 points)

La caméra de surveillance filme en continu avec un débit de **8 Mbit/s** (1 Go = 1000 Mo, 1 octet = 8 bits).

1. Quelle quantité de données produit-elle en **1 heure** ? Donner le résultat en méga-octets (Mo).
2. En déduire la quantité produite en **24 heures**, en giga-octets (Go).
3. La carte mémoire fait **256 Go**. Pendant combien de jours (arrondi à l'unité) peut-elle enregistrer avant d'être pleine ?

---

## Exercice 4 — Capteurs, actionneurs et sécurité (5 points)

1. Pour chacun de ces éléments, dire si c'est un **capteur** ou un **actionneur** : (a) détecteur de fumée, (b) moteur du volet roulant, (c) sonde de température, (d) serrure électrique.
2. La caméra est un système **embarqué connecté**. Donner un risque de sécurité si son mot de passe reste celui d'usine.
3. Proposer **deux bonnes pratiques** pour sécuriser les objets connectés de la maison.

---

## Corrigé

### Exercice 1
1. **Privées** : plage 192.168.0.0 – 192.168.255.255, réservée aux réseaux locaux, non routable sur Internet.
2. /24 → 2⁸ = 256 adresses, moins réseau et diffusion = **254 objets**.
3. Wi-Fi : avantage = **pas de câble**, installation souple ; inconvénient = **portée / débit plus faibles**, sensible aux interférences et un peu moins sûr que le filaire.

### Exercice 2
1. 22 = 16 + 4 + 2 → **0001 0110**. (Vérif : 16+4=20, +2=22.)
2. 0001 1011 = 16 + 8 + 2 + 1 = **27 °C**.
3. Maximum sur 8 bits = 2⁸ − 1 = **255** (ici 255 °C, ce qui montre que 1 octet suffit largement pour des températures d'habitation).

### Exercice 3
1. En 1 h = 3 600 s : 8 × 3 600 = 28 800 Mbit ; en octets : 28 800 ÷ 8 = **3 600 Mo** (soit 3,6 Go).
2. En 24 h : 3,6 × 24 = **86,4 Go**.
3. 256 ÷ 86,4 ≈ 2,96 → environ **3 jours** (2 jours pleins et une fraction).

### Exercice 4
1. (a) **capteur**, (b) **actionneur**, (c) **capteur**, (d) **actionneur**.
2. Un mot de passe d'usine connu permet à un pirate de **prendre le contrôle** de la caméra (espionnage, accès aux images).
3. Par exemple : **changer les mots de passe par défaut**, **mettre à jour** régulièrement le logiciel, isoler les objets sur un réseau dédié, désactiver l'accès distant inutile.
