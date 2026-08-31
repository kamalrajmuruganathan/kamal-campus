---
id: 2nde-snt-informatique-embarquee-objets-connectes
titre: "Informatique embarquée et objets connectés"
voie: generale
niveau: seconde
parcours: snt
matiere: snt
programme: "Seconde — SNT (programme officiel)"
duree_lecture_min: 7
prerequis:
  - Notion de programme et d'algorithme
  - Internet et données
statut: brouillon
relu_par: null
---

# Informatique embarquée et objets connectés

## L'informatique embarquée

L'**informatique embarquée** désigne les **systèmes informatiques intégrés à l'intérieur d'un objet** pour le piloter. On ne les voit pas, mais ils sont partout : machine à laver, four à micro-ondes, voiture, ascenseur, distributeur de billets, feux tricolores, montre, drone…

Ces systèmes sont conçus pour **une tâche précise** (contrairement à un ordinateur généraliste) et doivent souvent être **fiables**, **peu gourmands en énergie** et **réactifs** (répondre en temps voulu, on parle de **temps réel** pour un airbag, par exemple).

## La boucle : capteurs, traitement, actionneurs

Un système embarqué fonctionne selon une **boucle** en trois temps :

1. **Capter** : des **capteurs** mesurent des grandeurs du monde physique et les transforment en signaux (donc en données). Exemples : capteur de **température**, de **lumière**, de **mouvement**, d'**humidité**, bouton, caméra, microphone.
2. **Traiter** : un **programme** (dans un microcontrôleur, un petit ordinateur intégré) analyse ces données et **décide** quoi faire, en suivant un algorithme (des conditions « si… alors… »).
3. **Agir** : des **actionneurs** modifient le monde physique. Exemples : **moteur**, **chauffage**, **lampe** (DEL), **haut-parleur**, écran, serrure électrique.

Exemple : un chauffage automatique lit la température (capteur), la compare à la consigne (traitement) et allume ou éteint la résistance (actionneur). C'est une **boucle de régulation** : le résultat de l'action est mesuré à nouveau, en continu.

## Les objets connectés (IoT)

Un **objet connecté** est un objet doté d'informatique embarquée **relié à un réseau** (Internet le plus souvent). Il peut ainsi **envoyer** ses données et **recevoir** des commandes à distance. On parle d'**Internet des objets** (*IoT*, *Internet of Things*).

Exemples : montre connectée, thermostat connecté, ampoule pilotable par téléphone, enceinte à commande vocale, capteurs de qualité de l'air, bracelet d'activité, voiture connectée.

Un objet connecté associe donc :

- la boucle **capteurs → traitement → actionneurs** ;
- une **connexion réseau** (Wi-Fi, Bluetooth, réseau mobile…) qui lui permet de communiquer avec un téléphone, un serveur ou d'autres objets.

## Programmer un système embarqué

On programme souvent ces systèmes sur des cartes pédagogiques (comme une carte à microcontrôleur), avec un langage de programmation ou un environnement par blocs. Le programme lit les capteurs, applique des **conditions** et **boucles**, et commande les actionneurs.

## Enjeux et risques

- **Bienfaits** : confort, économies d'énergie (chauffage régulé), sécurité, santé (surveillance de constantes), automatisation.
- **Sécurité informatique** : un objet connecté mal protégé peut être **piraté** et détourné (espionnage par une caméra, prise de contrôle). Beaucoup d'objets ont des **mots de passe faibles** ou ne sont pas mis à jour.
- **Vie privée** : ces objets **collectent des données** (habitudes, santé, présence à la maison, voix) qui peuvent être exploitées.
- **Impact environnemental** : fabrication (métaux, ressources), consommation électrique, déchets électroniques.
- **Dépendance** : un objet peut devenir inutilisable si le service en ligne associé ferme.

## Bonnes pratiques

- **Changer les mots de passe** par défaut et faire les **mises à jour**.
- Limiter les objets connectés au **nécessaire** et régler leurs **autorisations**.
- Se demander **quelles données** un objet collecte et où elles vont.

## Ce qu'il faut retenir

- L'**informatique embarquée** intègre un système informatique dans un objet pour une **tâche précise**.
- Elle fonctionne en **boucle** : **capteurs** (mesurer) → **traitement** (décider) → **actionneurs** (agir).
- Un **objet connecté** (IoT) est un objet embarqué **relié à un réseau**, capable d'envoyer ses données et de recevoir des commandes.
- Enjeux : **sécurité informatique**, **vie privée**, **environnement**, **dépendance**.

## Les erreurs à éviter

- « Un capteur agit sur le monde » : **non**, un **capteur mesure** ; c'est l'**actionneur** qui agit (moteur, lampe, chauffage).
- « Informatique embarquée = objet connecté » : tout objet embarqué **n'est pas** connecté ; il l'est seulement s'il est **relié à un réseau**.
- « Un objet connecté est forcément sûr » : mal protégé (mot de passe faible, pas de mise à jour), il peut être **piraté**.
- « Ces objets ne collectent rien » : beaucoup **collectent des données** personnelles (habitudes, voix, santé).
