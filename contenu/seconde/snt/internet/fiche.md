---
id: 2nde-snt-internet
titre: "Internet"
voie: generale
niveau: seconde
parcours: snt
matiere: snt
programme: "Seconde — SNT (programme officiel)"
duree_lecture_min: 7
prerequis:
  - Notion d'ordinateur et de fichier
  - Utilisation courante d'une connexion Internet
statut: brouillon
relu_par: null
---

# Internet

## De quoi parle-t-on ?

**Internet** est un *réseau de réseaux* : il relie entre eux des millions de réseaux d'ordinateurs à l'échelle de la planète. Le mot vient de l'anglais *inter-network* (« entre les réseaux »).

Attention à ne pas confondre :

- **Internet** = l'infrastructure mondiale qui relie les machines (les « tuyaux » et les règles de circulation).
- **Le Web** = **un service parmi d'autres** qui *utilise* Internet (les pages consultables avec un navigateur). D'autres services utilisent aussi Internet : la messagerie électronique, le transfert de fichiers, la visioconférence, etc.

Internet est né dans les années 1970 du réseau américain **ARPANET**, conçu pour résister aux pannes : si une liaison est coupée, l'information doit pouvoir emprunter un autre chemin.

## La commutation de paquets

Quand on envoie une information (un message, une image, une vidéo), elle n'est pas transmise d'un seul bloc. Elle est **découpée en petits morceaux appelés paquets**. Chaque paquet contient une partie des données et une « étiquette » indiquant notamment l'adresse de départ et l'adresse d'arrivée.

- Les paquets voyagent **indépendamment** les uns des autres et peuvent emprunter **des chemins différents**.
- Ils peuvent arriver **dans le désordre** : la machine destinataire les **remet dans le bon ordre** grâce à leur numéro.
- Si un paquet est perdu, il peut être **renvoyé** sans tout recommencer.

Ce principe s'appelle la **commutation de paquets**. C'est ce qui rend Internet robuste : il n'existe pas *un seul* chemin obligatoire entre deux machines.

## Les protocoles : des règles communes

Pour que des machines très différentes se comprennent, elles respectent des **protocoles**, c'est-à-dire des règles communes de communication.

- **IP** (*Internet Protocol*) : donne à chaque machine une **adresse IP** (par exemple `216.58.204.14` en IPv4, écrite sous la forme de quatre nombres de 0 à 255 séparés par des points). L'adresse IP permet d'**identifier** et de **localiser** une machine sur le réseau, et donc d'acheminer les paquets.
- **TCP** (*Transmission Control Protocol*) : s'occupe de **découper** les données en paquets, de **vérifier** qu'ils arrivent tous et de les **remettre dans l'ordre**. Si un paquet manque, TCP le redemande.

On parle souvent de l'ensemble **TCP/IP**, le couple de protocoles fondamental d'Internet.

Parce que les adresses IPv4 (environ 4 milliards) ne suffisent plus, on déploie **IPv6**, qui offre un nombre gigantesque d'adresses.

## Les routeurs et l'acheminement

Les paquets sont dirigés de proche en proche par des machines spécialisées, les **routeurs**. Chaque routeur lit l'adresse de destination d'un paquet et le transmet au routeur voisin le plus adapté, comme un jeu de relais, jusqu'à la machine finale. C'est ce que l'on appelle le **routage**.

Le **débit** mesure la quantité de données transmises par seconde (en bits par seconde : kbit/s, Mbit/s, Gbit/s). Un débit élevé permet de transférer plus vite de gros fichiers.

## Les noms de domaine et le DNS

Retenir une adresse IP est difficile pour un humain. On utilise donc des **noms de domaine** lisibles (par exemple `education.gouv.fr`). Le **DNS** (*Domain Name System*) est un annuaire mondial qui **traduit un nom de domaine en adresse IP**. Quand on tape une adresse, la machine interroge d'abord un serveur DNS pour obtenir l'adresse IP correspondante.

## Se connecter à Internet

Pour accéder à Internet, on passe par un **fournisseur d'accès à Internet (FAI)**, qui relie le logement ou le téléphone au reste du réseau, par exemple via l'ADSL, la fibre optique ou le réseau mobile (4G, 5G). L'information circule sur des supports variés : câbles de cuivre, **fibres optiques** (dont d'immenses câbles sous-marins reliant les continents) et ondes radio.

## Enjeux

Internet soulève des questions importantes :

- La **consommation d'énergie** des serveurs, réseaux et centres de données (*data centers*) a un coût environnemental réel.
- La **neutralité du Net** : le principe selon lequel les données doivent être acheminées sans discrimination, quel que soit leur contenu ou leur émetteur.

## Ce qu'il faut retenir

- Internet est un **réseau de réseaux** mondial ; le Web n'est qu'un **service** qui l'utilise.
- L'information est découpée en **paquets** qui voyagent indépendamment (**commutation de paquets**), ce qui rend le réseau robuste.
- Les machines communiquent grâce aux **protocoles TCP/IP** ; chaque machine a une **adresse IP**.
- Les **routeurs** acheminent les paquets de proche en proche.
- Le **DNS** traduit les noms de domaine en adresses IP.

## Les erreurs à éviter

- « Internet et le Web, c'est pareil » : **non**, le Web est un service qui fonctionne *grâce à* Internet.
- « L'information voyage d'un seul bloc par un chemin unique » : **non**, elle est découpée en paquets qui suivent des chemins variés.
- « L'adresse IP, c'est le nom du site » : le **nom de domaine** est lisible par l'humain, l'**adresse IP** est le numéro de la machine ; le **DNS** fait le lien entre les deux.
