---
id: 3e-techno-internet-et-reseaux
titre: Internet et les réseaux
voie: generale
niveau: troisieme
parcours: techno
matiere: techno
programme: Cycle 4 — Technologie (programme officiel)
duree_lecture_min: 8
prerequis:
  - Utiliser un ordinateur et un navigateur
  - Notions de données numériques (cycle 4)
statut: brouillon
relu_par: null
---

# Internet et les réseaux

Aujourd'hui, la plupart des objets techniques échangent des informations grâce à des
**réseaux informatiques**. Comprendre comment fonctionne un **réseau** et **Internet**
fait partie du thème « L'informatique et la programmation » du cycle 4.

## Qu'est-ce qu'un réseau informatique ?

Un **réseau informatique** est un ensemble d'appareils (ordinateurs, tablettes,
smartphones, objets connectés, imprimantes…) **reliés entre eux** pour **échanger des
données** et **partager des ressources** (une imprimante, une connexion, des fichiers).

- Un petit réseau limité à un lieu (une maison, une salle) est un **réseau local** (LAN).
- Un très grand réseau reliant des réseaux du monde entier, c'est **Internet**.

## Internet : le réseau des réseaux

**Internet** est un **réseau mondial** qui relie des millions de réseaux entre eux. On dit
souvent que c'est le « **réseau des réseaux** ». Il permet à des machines très éloignées de
communiquer.

> Attention : **Internet** n'est pas la même chose que le **Web**. Le **Web** (les pages que
> l'on consulte dans un navigateur) est **un** des services qui fonctionnent sur Internet ;
> le courrier électronique, les jeux en ligne ou la messagerie en sont d'autres.

## Le modèle client – serveur

De nombreux services d'Internet fonctionnent selon le modèle **client – serveur** :

- le **client** est la machine qui **demande** un service (ton navigateur qui demande une page) ;
- le **serveur** est une machine puissante qui **stocke** l'information et **répond** aux
  demandes (il « sert » la page).

## Comment circulent les données : les paquets

Les informations ne voyagent pas d'un seul bloc. Elles sont **découpées en petits morceaux**
appelés **paquets**. Chaque paquet voyage séparément à travers le réseau, en passant par des
appareils qui aiguillent le trafic (les **routeurs**), puis les paquets sont **réassemblés** à
l'arrivée. Ce découpage rend la transmission plus **fiable** et plus **efficace**.

## Les protocoles : des règles communes

Pour que des machines très différentes se comprennent, elles respectent des **protocoles** :
des **règles communes** de communication. Le plus connu est **TCP/IP**, qui gère l'envoi et le
réassemblage des paquets. Le Web utilise le protocole **HTTP** (ou **HTTPS**, sa version
sécurisée).

## Les adresses : IP et noms de domaine

- Chaque appareil relié à un réseau possède une **adresse IP** : un numéro unique qui permet de
  l'**identifier** et de lui envoyer les paquets, comme une adresse postale.
- Les adresses IP étant difficiles à retenir, on utilise des **noms de domaine** (par exemple
  `college.fr`). Le service **DNS** joue le rôle d'annuaire : il **traduit** un nom de domaine en
  adresse IP.

## Un exemple : afficher une page web

1. Tu tapes une adresse dans le navigateur (le **client**).
2. Le **DNS** traduit le nom de domaine en **adresse IP** du serveur.
3. Le navigateur envoie une demande (**HTTP/HTTPS**) au **serveur**.
4. Le serveur renvoie la page, découpée en **paquets** (**TCP/IP**), qui sont réassemblés et
   affichés.

## Sécurité et bon usage

Sur un réseau, il faut protéger les échanges : **mots de passe** solides, connexions
**sécurisées** (HTTPS), prudence avec les données personnelles. Un **pare-feu** et un
**antivirus** aident à se protéger des menaces.

## Ce qu'il faut retenir

- Un **réseau** relie des appareils pour **échanger des données** et **partager des ressources**.
- **Internet** est le **réseau des réseaux** ; le **Web** n'en est qu'**un service** parmi d'autres.
- Beaucoup de services suivent le modèle **client – serveur**.
- Les données voyagent en **paquets**, selon des **protocoles** (TCP/IP, HTTP/HTTPS).
- Chaque machine a une **adresse IP** ; le **DNS** traduit les **noms de domaine** en adresses IP.

## Les erreurs à éviter

- **Confondre Internet et le Web.** Internet est le réseau mondial ; le Web (les pages) est un de
  ses services.
- **Croire que les données voyagent d'un seul bloc.** Elles sont découpées en **paquets** puis
  réassemblées.
- **Confondre client et serveur.** Le client demande, le serveur stocke et répond.
- **Penser qu'un nom de domaine est l'adresse réelle.** C'est le **DNS** qui traduit ce nom en
  **adresse IP**.
- **Oublier la sécurité.** Mots de passe solides et connexions HTTPS protègent les échanges.
