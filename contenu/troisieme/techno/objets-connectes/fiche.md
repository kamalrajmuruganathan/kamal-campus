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

<!-- schema:thermostat-connecte -->
![Le thermostat connecté mesure la température, décide, commande le chauffage et envoie ses données au smartphone par le Wi-Fi.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjc0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNzQiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI4OSIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkFDUVXDiVJJUjwvdGV4dD48cmVjdCB4PSIxNCIgeT0iNDAiIHdpZHRoPSIxNTAiIGhlaWdodD0iNTgiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI4OSIgeT0iNjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmNhcHRldXIgZGU8L3RleHQ+PHRleHQgeD0iODkiIHk9IjgxLjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnRlbXDDqXJhdHVyZTwvdGV4dD48bGluZSB4MT0iMTY2IiB5MT0iNjkiIHgyPSIyMzMiIHkyPSI2OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjQzLDY5IDIzMyw2NCAyMzMsNzQiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIzMjAiIHk9IjMwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5UUkFJVEVSPC90ZXh0PjxyZWN0IHg9IjI0NSIgeT0iNDAiIHdpZHRoPSIxNTAiIGhlaWdodD0iNTgiIHJ4PSI4IiBmaWxsPSIjZjNlY2ZhIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzMjAiIHk9IjY2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5taWNyb2NvbnRyw7RsZXVyPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iODEuNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+KHByb2dyYW1tZSk8L3RleHQ+PGxpbmUgeDE9IjM5NyIgeTE9IjY5IiB4Mj0iNDY0IiB5Mj0iNjkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ3NCw2OSA0NjQsNjQgNDY0LDc0IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNTUxIiB5PSIzMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QUdJUjwvdGV4dD48cmVjdCB4PSI0NzYiIHk9IjQwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjU4IiByeD0iOCIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNTUxIiB5PSI2NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Y2hhdWZmYWdlPC90ZXh0Pjx0ZXh0IHg9IjU1MSIgeT0iODEuNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+KGFjdGlvbm5ldXIpPC90ZXh0Pjx0ZXh0IHg9IjMzNCIgeT0iMTI4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPkNPTU1VTklRVUVSPC90ZXh0PjxwYXRoIGQ9Ik0gMzI2Ljg4IDEyMS44MyBBIDEyIDEyIDAgMCAxIDMxMy4xMiAxMjEuODMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDMzMC4zMiAxMjYuNzQgQSAxOCAxOCAwIDAgMSAzMDkuNjggMTI2Ljc0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzMzMuNzcgMTMxLjY2IEEgMjQgMjQgMCAwIDEgMzA2LjIzIDEzMS42NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMzNCIgeT0iMTQ0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+V2ktRmk8L3RleHQ+PHBhdGggZD0iTSAyNzIgMjIyLjQgQyAyNTIuOCAyMjIuNCAyNTQuMzk5OTk5OTk5OTk5OTggMTk2LjggMjczLjYgMTk4LjQgQyAyNzUuMiAxNzcuNiAzMDUuNiAxNzQuNCAzMTUuMiAxODguOCBDIDMyNC44IDE3MS4yIDM2MCAxNzYgMzYwIDE5Ni44IEMgMzgyLjQgMTk1LjIgMzg1LjYgMjIyLjQgMzY0LjggMjIyLjQgWiIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIwIiB5PSIyMDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnNlcnZldXI8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIyMTkuOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+KGNsb3VkKTwvdGV4dD48cmVjdCB4PSI1MzkiIHk9IjE4OCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjQyIiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHJlY3QgeD0iNTQzIiB5PSIxOTQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyOCIgcng9IjAiIGZpbGw9IiNjZmUwZjciIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSI1NTEiIHk9IjI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+c21hcnRwaG9uZTwvdGV4dD48bGluZSB4MT0iMzIwIiB5MT0iMTM0IiB4Mj0iMzIwIiB5Mj0iMTgwIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzg2IiB5MT0iMjEwIiB4Mj0iNTMzIiB5Mj0iMjEwIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0NTkuNSIgeT0iMjAyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPkludGVybmV0PC90ZXh0Pjwvc3ZnPg==)
*Le thermostat connecté mesure la température, décide, commande le chauffage et envoie ses données au smartphone par le Wi-Fi.*
<!-- /schema -->

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
