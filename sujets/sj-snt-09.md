---
id: "sj-snt-09"
titre: "SNT — La ville intelligente"
examen: "Seconde — évaluation SNT"
niveau: seconde
matiere: snt
statut: brouillon
relu_par: null
---

# Seconde — SNT : La ville intelligente

**Durée : 1 heure — Barème sur 20 points.**

Une ville déploie des milliers de capteurs (pollution, éclairage, stationnement). On étudie l'adressage réseau, le débit collecté, les données ouvertes et le codage.

---

## Exercice 1 — Adresser tous les capteurs (6 points)

La ville installe **2 000 capteurs**, chacun ayant besoin d'une adresse IP.

1. Un réseau en masque **/24** offre 254 adresses utilisables. Est-ce suffisant pour 2 000 capteurs ? Justifier.
2. On propose un masque **/21**, qui laisse **11 bits** pour les machines. Combien d'adresses de machines utilisables cela fait-il (2¹¹ − 2) ? Est-ce suffisant ?
3. Ces capteurs utilisent des adresses **privées**. Expliquer comment ils peuvent tout de même envoyer leurs mesures à un serveur sur Internet (citer le **routeur / la passerelle**).

---

## Exercice 2 — Indice de qualité de l'air (4 points)

L'indice de qualité de l'air (entier de 0 à 100) est codé sur **1 octet**.

1. Un capteur mesure l'indice **1000 0101**. Quelle valeur décimale ?
2. L'indice atteint **72**. Écrire **72** en binaire sur 8 bits.
3. Un octet suffit-il pour coder un indice compris entre 0 et 100 ? Justifier.

---

## Exercice 3 — Le débit des mesures (5 points)

Chaque capteur envoie **80 octets** de mesures **toutes les 30 secondes**. On considère les **2 000 capteurs**.

1. Combien de messages arrivent au serveur en **1 minute** (tous capteurs confondus) ?
2. Quelle quantité de données (en kilo-octets, 1 ko = 1000 o) le serveur reçoit-il en **1 minute** ?
3. Pourquoi la ville n'envoie-t-elle pas plutôt une mesure **toutes les 0,1 seconde** ? Donner deux raisons.

---

## Exercice 4 — Données ouvertes et citoyens (5 points)

La ville publie ces mesures en **données ouvertes** (open data).

1. Qu'est-ce qu'une **donnée ouverte** ? Donner un exemple d'usage utile pour les habitants.
2. Les capteurs de stationnement pourraient révéler des habitudes de déplacement. Donner un **risque pour la vie privée** et une mesure pour le limiter (ex. anonymisation).
3. Citer un **avantage** concret de la ville intelligente pour l'environnement (ex. éclairage ou circulation).

---

## Corrigé

### Exercice 1
1. **Non** : /24 n'offre que **254** adresses utilisables, or il faut en adresser **2 000**. C'est insuffisant.
2. /21 → 2¹¹ − 2 = 2 048 − 2 = **2 046 adresses** utilisables. C'est **suffisant** pour 2 000 capteurs.
3. Les capteurs ont des adresses privées non routables ; le **routeur (passerelle)** fait la **traduction d'adresses (NAT)** et relaie leurs messages vers le serveur public sur Internet.

### Exercice 2
1. 1000 0101 = 128 + 4 + 1 = **133**.
2. 72 = 64 + 8 → **0100 1000**. (Vérif : 64+8=72.)
3. **Oui** : 1 octet code de 0 à 255, ce qui contient largement l'intervalle 0–100.

### Exercice 3
1. Chaque capteur envoie 60 ÷ 30 = 2 messages/min ; pour 2 000 capteurs : 2 × 2 000 = **4 000 messages/min**.
2. 4 000 × 80 = 320 000 octets = **320 ko** par minute.
3. Par exemple : cela **multiplierait par 300** le volume de données (saturation réseau/serveur, coût de stockage) et **userait la batterie** des capteurs, pour une précision inutile sur des grandeurs qui varient lentement (pollution, stationnement).

### Exercice 4
1. Une donnée ouverte est une donnée **publiée librement, réutilisable par tous** (souvent gratuitement). Exemple : une appli citoyenne qui affiche la **qualité de l'air en temps réel** ou les **places libres**.
2. Risque : croiser des mesures pourrait **suivre les déplacements** d'une personne. Mesure : **anonymiser / agréger** les données, ne pas conserver d'identifiant individuel.
3. Par exemple : l'**éclairage adaptatif** (baissé quand personne ne passe) réduit la consommation ; la régulation du trafic diminue embouteillages et pollution.
