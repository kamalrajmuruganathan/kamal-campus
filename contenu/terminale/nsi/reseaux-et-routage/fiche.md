---
id: tale-nsi-reseaux-et-routage
titre: "Réseaux et routage"
voie: generale
niveau: terminale
parcours: nsi
matiere: nsi
programme: "Terminale — spécialité NSI (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Notions de réseau et d'adresse IP de Première
  - Graphes (chapitre voisin) pour comprendre le routage
statut: brouillon
relu_par: null
---

# Réseaux et routage

> Internet est un **réseau de réseaux**. Pour qu'un message parte d'un ordinateur et
> arrive à un autre, à l'autre bout du monde, il faut : le **découper**, l'**adresser**,
> et choisir sa **route** de proche en proche. Ce chapitre explique comment les données
> circulent et comment les **routeurs** décident du chemin.

---

## 1. Commutation de paquets

Sur Internet, un message n'est pas envoyé d'un bloc : il est **découpé en paquets**.
Chaque **paquet** voyage **indépendamment**, avec son adresse de destination, et peut
emprunter un **chemin différent**. Les paquets sont **réassemblés** à l'arrivée.

C'est la **commutation de paquets**. Elle rend le réseau **robuste** : si un lien tombe
en panne, les paquets suivants sont **réacheminés** par un autre chemin, sans couper la
communication.

---

## 2. Adresse IP

Chaque machine connectée possède une **adresse IP** qui l'identifie sur le réseau.

- En **IPv4**, une adresse s'écrit sous la forme de **quatre nombres** entre 0 et 255
  séparés par des points, par exemple `192.168.1.10`.
- Une adresse IP se compose d'une partie **réseau** (commune à toutes les machines du
  même réseau local) et d'une partie **machine** (propre à chaque appareil).

L'adresse IP joue le rôle de l'**adresse postale** du paquet : c'est elle qui permet de
l'acheminer vers la bonne destination.

---

## 3. Le rôle des routeurs

Un **routeur** est un appareil qui **relie plusieurs réseaux** et fait passer les paquets
de l'un à l'autre. Chaque routeur possède une **table de routage** : elle indique, pour
une destination donnée, **vers quel voisin** envoyer le paquet (le « prochain saut »).

Un paquet traverse ainsi une **succession de routeurs**, chacun le rapprochant de sa
destination. On appelle **saut** (*hop*) le passage d'un routeur au suivant.

On peut voir le réseau comme un **graphe** : les routeurs sont les **sommets**, les liens
entre eux les **arêtes**. Router, c'est chercher un **chemin** dans ce graphe.

---

## 4. Les protocoles de routage

Un **protocole de routage** est l'ensemble des règles qui permettent aux routeurs de
**construire** et **mettre à jour** leurs tables de routage. Deux grandes familles au
programme :

- **RIP** (*Routing Information Protocol*) : choisit la route ayant le **moins de sauts**
  (le moins de routeurs traversés). C'est simple, mais ignore le débit des liens : une
  route courte en nombre de sauts peut être lente.
- **OSPF** (*Open Shortest Path First*) : choisit la route de **plus faible coût**, le
  coût d'un lien dépendant notamment de son **débit**. OSPF privilégie donc les liens
  rapides, même si le chemin compte plus de sauts.

Ici, le réseau est un **graphe pondéré** : RIP met un poids de 1 par saut, OSPF met un
poids lié au débit. Le routage revient à chercher un **plus court chemin** dans ce graphe.

---

## 5. Un protocole n'est pas l'autre

Un **protocole** est un ensemble de **conventions** que les machines respectent pour se
comprendre. Il ne faut pas confondre :

- **IP** : adresse et achemine les paquets (couche « réseau ») ;
- **RIP / OSPF** : servent aux routeurs à **construire** les tables de routage ;
- d'autres protocoles (comme TCP) assurent que les données arrivent **complètes et dans
  l'ordre**, mais cela dépasse le cœur de ce chapitre.

Retenir le partage des rôles : **IP** transporte, **RIP/OSPF** décident du chemin.

---

## Ce qu'il faut retenir

- Un message est **découpé en paquets** qui voyagent indépendamment (**commutation de
  paquets**), ce qui rend le réseau **robuste** aux pannes.
- L'**adresse IP** identifie une machine ; en IPv4 : quatre nombres de 0 à 255.
- Un **routeur** relie des réseaux et utilise sa **table de routage** pour choisir le
  **prochain saut**.
- Le réseau se modélise par un **graphe** ; router = chercher un **chemin**.
- **RIP** minimise le **nombre de sauts** ; **OSPF** minimise un **coût lié au débit**.

## Les erreurs à éviter

- Croire qu'un message part « d'un seul bloc » : il est découpé en paquets qui peuvent
  suivre des chemins différents.
- Penser que tous les paquets d'un message suivent forcément la **même** route : non,
  chacun est routé indépendamment.
- Confondre **RIP** (moins de sauts) et **OSPF** (moindre coût selon le débit) : la route
  la plus courte en sauts n'est pas toujours la plus rapide.
- Confondre le rôle d'**IP** (adresser/acheminer) avec celui des protocoles de routage
  (construire les tables).
