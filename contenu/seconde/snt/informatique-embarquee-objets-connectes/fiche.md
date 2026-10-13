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

<!-- schema:boucle-embarquee -->
![Un système embarqué fonctionne en boucle : les capteurs mesurent, le programme décide, les actionneurs agissent, et le résultat est mesuré à nouveau.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzI5LjkxIiB5MT0iNjciIHgyPSI0MDkuNTIiIHkyPSIxMTQuODUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQxOC4wOSwxMjAgNDEyLjA5LDExMC41NiA0MDYuOTQsMTE5LjEzIiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjQxOC4wOSIgeTE9IjE4MCIgeDI9IjMzOC40OCIgeTI9IjIyNy44NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzI5LjkxLDIzMyAzNDEuMDYsMjMyLjEzIDMzNS45MSwyMjMuNTYiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMjMwLjA5IiB5MT0iMjMzIiB4Mj0iMTUwLjQ4IiB5Mj0iMTg1LjE1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNDEuOTEsMTgwIDE0Ny45MSwxODkuNDQgMTUzLjA2LDE4MC44NyIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIxNDEuOTEiIHkxPSIxMjAiIHgyPSIyMjEuNTIiIHkyPSI3Mi4xNSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjMwLjA5LDY3IDIxOC45NCw2Ny44NyAyMjQuMDksNzYuNDQiIGZpbGw9IiMxZjZmZWIiLz48cmVjdCB4PSIyMDAiIHk9IjEyIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjI4MCIgeT0iMzQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkNhcHRldXJzPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iNDkuNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+KG1lc3VyZXIpPC90ZXh0PjxyZWN0IHg9IjM4OCIgeT0iMTI1IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiNmM2VjZmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjQ2OCIgeT0iMTQ3IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5UcmFpdGVtZW50PC90ZXh0Pjx0ZXh0IHg9IjQ2OCIgeT0iMTYyLjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPihkw6ljaWRlcik8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSIyMzgiIHdpZHRoPSIxNjAiIGhlaWdodD0iNTAiIHJ4PSIxMCIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjgwIiB5PSIyNjAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkFjdGlvbm5ldXJzPC90ZXh0Pjx0ZXh0IHg9IjI4MCIgeT0iMjc1LjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPihhZ2lyKTwvdGV4dD48cmVjdCB4PSIxMiIgeT0iMTI1IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjUwIiByeD0iMTAiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjkyIiB5PSIxNDciIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk1vbmRlIHBoeXNpcXVlPC90ZXh0Pjx0ZXh0IHg9IjkyIiB5PSIxNjIuNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+KG1vZGlmacOpKTwvdGV4dD48dGV4dCB4PSIyODAiIHk9IjE0NyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj5ib3VjbGU8L3RleHQ+PHRleHQgeD0iMjgwIiB5PSIxNjIuNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj5lbiBjb250aW51PC90ZXh0Pjwvc3ZnPg==)
*Un système embarqué fonctionne en boucle : les capteurs mesurent, le programme décide, les actionneurs agissent, et le résultat est mesuré à nouveau.*
<!-- /schema -->

Un système embarqué fonctionne selon une **boucle** en trois temps :

1. **Capter** : des **capteurs** mesurent des grandeurs du monde physique et les transforment en signaux (donc en données). Exemples : capteur de **température**, de **lumière**, de **mouvement**, d'**humidité**, bouton, caméra, microphone.
2. **Traiter** : un **programme** (dans un microcontrôleur, un petit ordinateur intégré) analyse ces données et **décide** quoi faire, en suivant un algorithme (des conditions « si… alors… »).
3. **Agir** : des **actionneurs** modifient le monde physique. Exemples : **moteur**, **chauffage**, **lampe** (DEL), **haut-parleur**, écran, serrure électrique.

Exemple : un chauffage automatique lit la température (capteur), la compare à la consigne (traitement) et allume ou éteint la résistance (actionneur). C'est une **boucle de régulation** : le résultat de l'action est mesuré à nouveau, en continu.

## Les objets connectés (IoT)

<!-- schema:objet-connecte -->
![Un objet connecté associe la boucle capteurs, traitement, actionneurs à une connexion réseau qui le relie à un serveur ou à un téléphone.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjc0IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNzQiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSI4OSIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkFDUVXDiVJJUjwvdGV4dD48cmVjdCB4PSIxNCIgeT0iNDAiIHdpZHRoPSIxNTAiIGhlaWdodD0iNTgiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI4OSIgeT0iNzQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmNhcHRldXJzPC90ZXh0PjxsaW5lIHgxPSIxNjYiIHkxPSI2OSIgeDI9IjIzMyIgeTI9IjY5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNDMsNjkgMjMzLDY0IDIzMyw3NCIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjMyMCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlRSQUlURVI8L3RleHQ+PHJlY3QgeD0iMjQ1IiB5PSI0MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI1OCIgcng9IjgiIGZpbGw9IiNmM2VjZmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjMyMCIgeT0iNjYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm1pY3JvY29udHLDtGxldXI8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSI4MS42IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4ocHJvZ3JhbW1lKTwvdGV4dD48bGluZSB4MT0iMzk3IiB5MT0iNjkiIHgyPSI0NjQiIHkyPSI2OSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDc0LDY5IDQ2NCw2NCA0NjQsNzQiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI1NTEiIHk9IjMwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BR0lSPC90ZXh0PjxyZWN0IHg9IjQ3NiIgeT0iNDAiIHdpZHRoPSIxNTAiIGhlaWdodD0iNTgiIHJ4PSI4IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI1NTEiIHk9Ijc0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5hY3Rpb25uZXVyczwvdGV4dD48dGV4dCB4PSIzMzQiIHk9IjEyOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5DT01NVU5JUVVFUjwvdGV4dD48cGF0aCBkPSJNIDMyNi44OCAxMjEuODMgQSAxMiAxMiAwIDAgMSAzMTMuMTIgMTIxLjgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzMzAuMzIgMTI2Ljc0IEEgMTggMTggMCAwIDEgMzA5LjY4IDEyNi43NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMzMzLjc3IDEzMS42NiBBIDI0IDI0IDAgMCAxIDMwNi4yMyAxMzEuNjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMzQiIHk9IjE0NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPldpLUZpLCBCbHVldG9vdGgsPC90ZXh0Pjx0ZXh0IHg9IjMzNCIgeT0iMTU5IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+csOpc2VhdSBtb2JpbGU8L3RleHQ+PHBhdGggZD0iTSAyNzIgMjIyLjQgQyAyNTIuOCAyMjIuNCAyNTQuMzk5OTk5OTk5OTk5OTggMTk2LjggMjczLjYgMTk4LjQgQyAyNzUuMiAxNzcuNiAzMDUuNiAxNzQuNCAzMTUuMiAxODguOCBDIDMyNC44IDE3MS4yIDM2MCAxNzYgMzYwIDE5Ni44IEMgMzgyLjQgMTk1LjIgMzg1LjYgMjIyLjQgMzY0LjggMjIyLjQgWiIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIwIiB5PSIyMDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnNlcnZldXI8L3RleHQ+PHJlY3QgeD0iNTM5IiB5PSIxODgiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxyZWN0IHg9IjU0MyIgeT0iMTk0IiB3aWR0aD0iMTYiIGhlaWdodD0iMjgiIHJ4PSIwIiBmaWxsPSIjY2ZlMGY3IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iNTUxIiB5PSIyNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnTDqWzDqXBob25lPC90ZXh0PjxsaW5lIHgxPSIzMjAiIHkxPSIxMzQiIHgyPSIzMjAiIHkyPSIxODAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzODYiIHkxPSIyMTAiIHgyPSI1MzMiIHkyPSIyMTAiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ1OS41IiB5PSIyMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+SW50ZXJuZXQ8L3RleHQ+PC9zdmc+)
*Un objet connecté associe la boucle capteurs, traitement, actionneurs à une connexion réseau qui le relie à un serveur ou à un téléphone.*
<!-- /schema -->

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
