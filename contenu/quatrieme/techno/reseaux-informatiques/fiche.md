---
id: 4e-techno-reseaux-informatiques
titre: "Les réseaux informatiques"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "L'informatique et la programmation"
duree_lecture_min: 12
prerequis:
  - Notion d'objet connecté (5e)
  - Chaîne d'information (4e)
statut: brouillon
relu_par: null
---

# Les réseaux informatiques

> Quand tu envoies un message, regardes une vidéo ou fais une recherche, ton appareil ne
> travaille pas seul : il **échange des données** avec d'autres machines. Cet ensemble de
> machines reliées entre elles s'appelle un **réseau informatique**. Comprendre comment il
> fonctionne, c'est comprendre Internet.

---

## 1. Qu'est-ce qu'un réseau ?

Un **réseau informatique** est un ensemble d'appareils (ordinateurs, téléphones,
imprimantes, objets connectés…) **reliés entre eux** pour **échanger des données** et
**partager des ressources** (fichiers, imprimante, connexion Internet).

On distingue les réseaux selon leur **taille** :

| Type | Étendue | Exemple |
|---|---|---|
| **Réseau local (LAN)** | un lieu (maison, salle, établissement) | le réseau du collège, ta box à la maison |
| **Réseau étendu (WAN)** | une région, un pays, le monde | **Internet** |

> **Internet** est le plus grand des réseaux : c'est un **réseau de réseaux** reliés à
> l'échelle mondiale.

---

## 2. Relier les machines : avec ou sans fil

Les données circulent d'une machine à l'autre par un **support de transmission** :

- **Filaire** : le **câble Ethernet** (RJ45) ou la **fibre optique** (lumière dans un fil
  de verre, très rapide).
- **Sans fil** : les **ondes radio** — **Wi-Fi** (dans un bâtiment), **Bluetooth** (courte
  distance), réseau **mobile 4G/5G** (à l'extérieur).

Pour créer un réseau, on utilise des **équipements d'interconnexion** :

| Équipement | Rôle |
|---|---|
| **Switch (commutateur)** | Relie plusieurs appareils d'un même réseau local |
| **Routeur** | Relie des réseaux différents et choisit le chemin des données |
| **Box / point d'accès Wi-Fi** | Donne accès à Internet et diffuse le Wi-Fi |
| **Serveur** | Machine puissante qui fournit un service (fichiers, sites, messagerie) |

---

## 3. Adresse IP : l'adresse de chaque machine

Pour que les données arrivent au bon endroit, **chaque appareil connecté possède une
adresse unique** sur le réseau : l'**adresse IP** (ex. `192.168.1.15`).

> **Comparaison.** L'adresse IP joue le même rôle qu'une **adresse postale** : sans elle,
> le facteur (le réseau) ne saurait pas à qui livrer le courrier (les données).

---

## 4. Client, serveur et échange de données

Beaucoup d'échanges suivent le modèle **client / serveur** :

- Le **client** (ton navigateur, ton appli) **demande** une ressource.
- Le **serveur** **répond** en envoyant la ressource (une page web, une vidéo…).

Les données ne voyagent pas d'un bloc : elles sont **découpées en petits morceaux**
appelés **paquets**. Chaque paquet contient l'adresse de départ, l'adresse d'arrivée et un
morceau du message. Les paquets sont réassemblés dans l'ordre à l'arrivée.

> **Un protocole**, c'est un ensemble de **règles communes** que les machines respectent
> pour se comprendre. Exemples : **HTTP/HTTPS** (pages web), **IP** (adressage). Sans
> protocole commun, deux machines ne pourraient pas dialoguer.

---

## 5. Web ≠ Internet

Attention à ne pas tout mélanger :

- **Internet** est le **réseau** physique mondial (les câbles, les machines, les adresses).
- Le **Web** (World Wide Web) est **un service** qui circule sur Internet : les **pages
  web** reliées par des **liens** et consultées avec un **navigateur**.

Le Web n'est donc qu'**un** des services d'Internet, à côté de la messagerie, des jeux en
ligne, du streaming, etc.

---

## 6. Sécurité et bon usage

Un réseau doit être **protégé** : mot de passe du Wi-Fi, comptes utilisateurs, **HTTPS**
(le « cadenas » qui **chiffre** les données pour qu'un tiers ne puisse pas les lire).
Chaque échange laisse aussi des **traces** (données personnelles) : il faut donc réfléchir
à ce que l'on partage.

---

## Ce qu'il faut retenir

- Un **réseau** relie des appareils pour **échanger des données** et **partager des
  ressources** ; **LAN** = local, **WAN** = étendu, **Internet** = réseau mondial de réseaux.
- On relie les machines par **câble** (Ethernet, fibre) ou **sans fil** (Wi-Fi, Bluetooth,
  4G/5G), à l'aide d'un **switch**, d'un **routeur** et d'un **serveur**.
- Chaque machine a une **adresse IP** unique ; les données voyagent en **paquets** selon
  des **protocoles** (HTTP/HTTPS, IP).
- **Internet** est le réseau ; le **Web** n'est qu'**un service** qui circule dessus.

## Les erreurs à éviter

- **Confondre Internet et le Web.** Internet est le réseau physique ; le Web est un service
  (les pages) parmi d'autres qui l'utilisent.
- **Croire que le Wi-Fi « est » Internet.** Le Wi-Fi n'est qu'un moyen sans fil de se
  relier au réseau local ; sans box/routeur relié au réseau, pas d'accès à Internet.
- **Confondre switch et routeur.** Le switch relie des machines d'un même réseau ; le
  routeur relie des réseaux différents et choisit le chemin.
- **Penser que les données voyagent d'un seul bloc.** Elles sont découpées en **paquets**
  qui portent chacun les adresses de départ et d'arrivée.
- **Confondre adresse IP et mot de passe.** L'adresse IP identifie la machine ; ce n'est pas
  un code secret de connexion.
