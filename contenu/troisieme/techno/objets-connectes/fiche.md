---
id: 3e-techno-objets-connectes
titre: Les objets connectés
voie: generale
niveau: troisieme
parcours: techno
matiere: techno
programme: Cycle 4 — Technologie (programme officiel)
duree_lecture_min: 8
prerequis:
  - Chaîne d'énergie et chaîne d'information
  - Notions de programmation (cycle 4)
statut: brouillon
relu_par: null
---

# Les objets connectés

Un **objet connecté** est un objet technique capable d'échanger des **informations**
avec d'autres appareils ou avec Internet, sans intervention permanente de l'humain.
Montre connectée, thermostat intelligent, enceinte vocale, capteur de la maison : ils
appartiennent à ce qu'on appelle l'**Internet des objets** (en anglais **IoT**,
*Internet of Things*).

## Un objet qui traite de l'information

Tout objet technique programmable s'organise autour d'une **chaîne d'information**,
distincte de la chaîne d'énergie. La chaîne d'information suit trois grandes fonctions :

- **Acquérir** : recueillir une information grâce à un **capteur**.
- **Traiter** : décider quoi faire, grâce à un programme dans un **microcontrôleur**.
- **Communiquer / restituer** : transmettre l'information ou commander une action.

## Les capteurs : acquérir l'information

Un **capteur** transforme une **grandeur physique** (température, lumière, distance,
humidité, présence, position…) en un **signal** utilisable par la partie programmée.

> Exemples : capteur de température, capteur de luminosité, capteur ultrason (distance),
> capteur d'humidité, bouton-poussoir, accéléromètre.

Un capteur mesure ; il ne décide pas et n'agit pas. C'est l'entrée de la chaîne
d'information.

## Le traitement : le microcontrôleur et le programme

Le **microcontrôleur** est un petit ordinateur intégré à l'objet. Il exécute un
**programme** qui **traite** les informations reçues des capteurs et décide des
actions. C'est le « cerveau » de l'objet connecté.

## Les actionneurs : agir sur le monde

Un **actionneur** transforme une commande en une **action** : moteur qui tourne, LED
qui s'allume, chauffage qui se met en marche, buzzer qui sonne. L'actionneur appartient
à la **chaîne d'énergie**, mais il est **commandé** par la chaîne d'information.

> Ne pas confondre : le **capteur** mesure (entrée) ; l'**actionneur** agit (sortie).

## Communiquer : ce qui rend l'objet « connecté »

Ce qui distingue un objet connecté d'un objet programmé ordinaire, c'est sa capacité à
**communiquer à distance**. Il échange des données par des technologies sans fil comme
le **Wi-Fi**, le **Bluetooth** ou la téléphonie mobile. Les données peuvent être
envoyées vers un **serveur** ou un service en ligne (le « cloud »), puis consultées sur
un **smartphone** ou un ordinateur.

## Un exemple complet : le thermostat connecté

1. Le **capteur** de température mesure la température de la pièce (acquérir).
2. Le **microcontrôleur** compare avec la température souhaitée et décide (traiter).
3. S'il fait trop froid, il commande le **chauffage** (actionneur) : agir.
4. Il **envoie** la température au smartphone de l'utilisateur par le Wi-Fi (communiquer),
   qui peut la consulter et la régler à distance.

## Intérêts et limites

Les objets connectés apportent des **services** : confort, économies d'énergie,
surveillance de la santé, domotique. Mais ils posent des questions de **sécurité** et de
**protection des données personnelles** (les données peuvent être interceptées ou
utilisées à notre insu) et de **consommation** (électricité, ressources, obsolescence).

## Ce qu'il faut retenir

- Un **objet connecté** échange des informations à distance : c'est l'**Internet des
  objets (IoT)**.
- La **chaîne d'information** enchaîne trois fonctions : **acquérir** (capteur),
  **traiter** (microcontrôleur + programme), **communiquer/agir**.
- Un **capteur** mesure une grandeur physique (entrée) ; un **actionneur** agit (sortie).
- La communication se fait par **Wi-Fi, Bluetooth** ou réseau mobile, souvent vers un
  **serveur** consultable depuis un smartphone.
- Les objets connectés soulèvent des enjeux de **sécurité** et de **données personnelles**.

## Les erreurs à éviter

- **Confondre capteur et actionneur.** Le capteur mesure (entrée) ; l'actionneur agit
  (sortie).
- **Croire que tout objet programmé est « connecté ».** Il faut qu'il **communique** à
  distance (Wi-Fi, Bluetooth…) pour être un objet connecté.
- **Oublier le rôle du microcontrôleur.** C'est lui qui traite l'information et décide,
  grâce à son programme.
- **Penser que les données sont toujours sûres.** Les objets connectés posent de vrais
  enjeux de sécurité et de vie privée.
- **Mélanger chaîne d'information et chaîne d'énergie.** L'information circule pour
  décider ; l'énergie permet d'agir.
