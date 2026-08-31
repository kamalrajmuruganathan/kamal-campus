---
id: 2nde-snt-localisation-cartographie-gps
titre: "Localisation, cartographie et GPS"
voie: generale
niveau: seconde
parcours: snt
matiere: snt
programme: "Seconde — SNT (programme officiel)"
duree_lecture_min: 7
prerequis:
  - Coordonnées et repérage
  - Notion d'onde et de satellite
statut: brouillon
relu_par: null
---

# Localisation, cartographie et GPS

## Se repérer sur la Terre

Pour indiquer un lieu sur la Terre, on utilise deux nombres, les **coordonnées géographiques** :

- la **latitude** : la position par rapport à l'**équateur** (de 0° à l'équateur jusqu'à 90° aux pôles, Nord ou Sud) ;
- la **longitude** : la position par rapport au **méridien de Greenwich** (de 0° jusqu'à 180°, Est ou Ouest).

Un couple (latitude ; longitude) désigne **un point unique** sur le globe.

## Le GPS : se localiser par satellites

Le **GPS** (*Global Positioning System*) est un système de **géolocalisation par satellites**, d'origine américaine. Il existe d'autres systèmes équivalents : **Galileo** (européen), GLONASS (russe), Beidou (chinois). On parle plus généralement de **GNSS**.

### Comment ça marche ?

- Une trentaine de **satellites** tournent autour de la Terre et **émettent en permanence** des signaux radio contenant l'**heure précise** d'émission et la **position** du satellite.
- Le récepteur (dans un téléphone, une voiture…) **reçoit** ces signaux. En comparant l'heure d'émission et l'heure de réception, il calcule la **distance** qui le sépare de chaque satellite (la vitesse des ondes étant connue, proche de celle de la lumière).
- Avec les distances à **plusieurs satellites** (au moins **quatre**), il détermine par calcul sa **position** : c'est la **trilatération**.

Point essentiel : **le récepteur ne fait que recevoir**. Il **ne communique pas** avec les satellites et ne « prévient » personne : le GPS seul **n'envoie aucune donnée** sur votre position à qui que ce soit. C'est l'usage combiné avec Internet (applications) qui peut transmettre la position.

### Précision et limites

- La précision courante est de quelques mètres.
- Le signal passe mal à l'intérieur des bâtiments, dans les tunnels ou entre de hauts immeubles : la localisation peut alors être imprécise.
- Les téléphones affinent souvent la position en combinant le GPS avec les **antennes-relais** du réseau mobile et les **réseaux Wi-Fi** proches.

## Les cartes numériques

Une **carte numérique** représente le territoire sous forme de données manipulables : on peut **zoomer**, **se déplacer**, superposer des **couches** d'informations (routes, relief, commerces, trafic…).

- Les cartes s'appuient sur d'énormes bases de **données géographiques**.
- Un projet comme **OpenStreetMap** est une carte **libre et collaborative** : chacun peut contribuer à l'enrichir.
- Les cartes combinées au GPS permettent le **calcul d'itinéraires** : l'application cherche, dans un **graphe** où les carrefours sont des sommets et les routes des arêtes (pondérées par la distance ou le temps), le **plus court** (ou le plus rapide) chemin.

## Le géocodage et les métadonnées

- Le **géocodage** transforme une adresse en coordonnées (latitude, longitude), et inversement.
- De nombreuses photos et publications contiennent des **coordonnées GPS** dans leurs métadonnées : on parle de **géolocalisation** des contenus.

## Enjeux

- **Services rendus** : navigation, secours d'urgence, agriculture, transports, suivi de flottes, applications du quotidien.
- **Vie privée** : la géolocalisation permet de **suivre les déplacements** d'une personne. Partager sa position en continu, ou publier des photos géolocalisées, peut révéler des habitudes (domicile, école, trajets).
- **Bon réflexe** : maîtriser les **autorisations de localisation** des applications (n'autoriser que si nécessaire, plutôt « pendant l'utilisation »).

## Ce qu'il faut retenir

- Un lieu se repère par **latitude** et **longitude**.
- Le **GPS** (un **GNSS**) localise grâce à des **satellites** : le récepteur calcule sa **distance** à au moins **quatre** satellites, puis sa position par **trilatération**.
- Le récepteur GPS **ne fait que recevoir** : seul, il n'émet aucune donnée sur votre position.
- Les **cartes numériques** superposent des couches de données et permettent le **calcul d'itinéraires** (recherche de plus court chemin dans un graphe).
- La géolocalisation soulève des enjeux de **vie privée**.

## Les erreurs à éviter

- « Le GPS de mon téléphone envoie ma position aux satellites » : **non**, le récepteur ne fait que **recevoir** ; c'est l'application (via Internet) qui peut transmettre la position.
- « Un seul satellite suffit pour se localiser » : il en faut **au moins quatre** pour calculer une position précise.
- « Latitude et longitude, c'est pareil » : la **latitude** se compte depuis l'**équateur**, la **longitude** depuis le **méridien de Greenwich**.
- « Publier une photo ne révèle jamais où je suis » : ses **métadonnées GPS** peuvent trahir le lieu de prise de vue.
