---
id: 4e-techno-programmation-evenementielle
titre: "Programmation événementielle"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "L'informatique et la programmation"
duree_lecture_min: 12
prerequis:
  - Notions d'algorithme, boucle et condition (5e)
  - Chaîne d'information, capteurs et actionneurs (4e)
statut: brouillon
relu_par: null
---

# Programmation événementielle

> Quand tu appuies sur une touche, cliques sur un bouton ou secoues une manette, le
> programme **réagit tout de suite**. C'est le principe de la **programmation
> événementielle** : le programme **attend des événements** et **exécute** le code
> correspondant quand ils se produisent. C'est ainsi que fonctionnent les jeux, les applis
> et beaucoup d'objets techniques.

---

## 1. Qu'est-ce qu'un événement ?

Un **événement** est **quelque chose qui se produit** et auquel le programme peut réagir :

- une action de l'utilisateur : **clic**, **appui sur une touche**, toucher l'écran ;
- un signal d'un **capteur** : bouton pressé, détecteur activé, température dépassée ;
- un événement du système : le programme **démarre**, un **temps** est écoulé, deux objets
  se **touchent** (dans un jeu).

> **Programmation événementielle** = façon d'écrire un programme où l'on définit **quel
> bloc de code se déclenche quand tel événement arrive**.

On l'exprime souvent par la formule : **« QUAND … alors FAIRE … »**.

---

## 2. Le modèle « QUAND … FAIRE … »

<!-- schema:scripts-quand-faire -->
![Quatre scripts événementiels : chacun commence par un bloc « quand … » et ne s’exécute que lorsque son événement se produit.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjQ2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNDYiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDE4IDMwIFEgNTggOCA5OCAyNiBMIDMxMiAyNiBMIDMxMiA2MCBMIDUyIDYwIEwgNDYgNjYgTCAzNiA2NiBMIDMwIDYwIEwgMTggNjAgWiIgZmlsbD0iI2ZmZjRjYyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNiMzg2MDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMCIgeT0iNDkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+cXVhbmQgbGUgZHJhcGVhdSB2ZXJ0IGVzdCBjbGlxdcOpPC90ZXh0PjxwYXRoIGQ9Ik0gMTggNjYgTCAzMCA2NiBMIDM2IDcyIEwgNDYgNzIgTCA1MiA2NiBMIDMxMiA2NiBMIDMxMiAxMDAgTCA1MiAxMDAgTCA0NiAxMDYgTCAzNiAxMDYgTCAzMCAxMDAgTCAxOCAxMDAgWiIgZmlsbD0iI2UzZWVmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMCIgeT0iODgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+bWV0dHJlIHNjb3JlIMOgIDA8L3RleHQ+PHBhdGggZD0iTSAzMjggMzAgUSAzNjggOCA0MDggMjYgTCA2MjIgMjYgTCA2MjIgNjAgTCAzNjIgNjAgTCAzNTYgNjYgTCAzNDYgNjYgTCAzNDAgNjAgTCAzMjggNjAgWiIgZmlsbD0iI2ZmZjRjYyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNiMzg2MDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNDAiIHk9IjQ5IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPnF1YW5kIGxhIHRvdWNoZSDihpIgZXN0IHByZXNzw6llPC90ZXh0PjxwYXRoIGQ9Ik0gMzI4IDY2IEwgMzQwIDY2IEwgMzQ2IDcyIEwgMzU2IDcyIEwgMzYyIDY2IEwgNjIyIDY2IEwgNjIyIDEwMCBMIDM2MiAxMDAgTCAzNTYgMTA2IEwgMzQ2IDEwNiBMIDM0MCAxMDAgTCAzMjggMTAwIFoiIGZpbGw9IiNlM2VlZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzQwIiB5PSI4OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5hdmFuY2VyIGRlIDEwIHBhczwvdGV4dD48cGF0aCBkPSJNIDE4IDEzNiBRIDU4IDExNCA5OCAxMzIgTCAzMTIgMTMyIEwgMzEyIDE2NiBMIDUyIDE2NiBMIDQ2IDE3MiBMIDM2IDE3MiBMIDMwIDE2NiBMIDE4IDE2NiBaIiBmaWxsPSIjZmZmNGNjIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2IzODYwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMwIiB5PSIxNTUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+cXVhbmQgY2UgbHV0aW4gZXN0IGNsaXF1w6k8L3RleHQ+PHBhdGggZD0iTSAxOCAxNzIgTCAzMCAxNzIgTCAzNiAxNzggTCA0NiAxNzggTCA1MiAxNzIgTCAzMTIgMTcyIEwgMzEyIDIwNiBMIDUyIDIwNiBMIDQ2IDIxMiBMIDM2IDIxMiBMIDMwIDIwNiBMIDE4IDIwNiBaIiBmaWxsPSIjZTNlZWZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMwIiB5PSIxOTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+am91ZXIgdW4gc29uPC90ZXh0PjxwYXRoIGQ9Ik0gMzI4IDEzNiBRIDM2OCAxMTQgNDA4IDEzMiBMIDYyMiAxMzIgTCA2MjIgMTY2IEwgMzYyIDE2NiBMIDM1NiAxNzIgTCAzNDYgMTcyIEwgMzQwIDE2NiBMIDMyOCAxNjYgWiIgZmlsbD0iI2ZmZjRjYyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNiMzg2MDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNDAiIHk9IjE1NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5xdWFuZCBqZSByZcOnb2lzIFtnYWduw6ldPC90ZXh0PjxwYXRoIGQ9Ik0gMzI4IDE3MiBMIDM0MCAxNzIgTCAzNDYgMTc4IEwgMzU2IDE3OCBMIDM2MiAxNzIgTCA2MjIgMTcyIEwgNjIyIDIwNiBMIDM2MiAyMDYgTCAzNTYgMjEyIEwgMzQ2IDIxMiBMIDM0MCAyMDYgTCAzMjggMjA2IFoiIGZpbGw9IiNlM2VlZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzQwIiB5PSIxOTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+ZGlyZSDCqyBCcmF2byAhIMK7PC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMjMyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPmNoYXF1ZSBzY3JpcHQgYXR0ZW5kIHNvbiDDqXbDqW5lbWVudCAoUVVBTkQpLCBwdWlzIGV4w6ljdXRlIHNlcyBhY3Rpb25zIChGQUlSRSk8L3RleHQ+PC9zdmc+)
*Quatre scripts événementiels : chacun commence par un bloc « quand … » et ne s’exécute que lorsque son événement se produit.*
<!-- /schema -->

Dans un logiciel comme **Scratch**, un programme événementiel est fait de **scripts** qui
commencent chacun par un **bloc-événement** (un « chapeau ») :

| Bloc-événement (QUAND) | Se déclenche… |
|---|---|
| *Quand le drapeau vert est cliqué* | au démarrage du programme |
| *Quand la touche [espace] est pressée* | quand on appuie sur cette touche |
| *Quand ce lutin est cliqué* | quand on clique dessus |
| *Quand je reçois [message]* | quand un autre script envoie ce message |

Sous chaque « chapeau », on place les **actions** (avancer, jouer un son, changer un
score…). Plusieurs scripts peuvent ainsi **attendre en même temps** des événements
différents et réagir **en parallèle**.

> **Exemple.** *Quand la touche → est pressée → avancer de 10 pas.* Le lutin ne bouge que
> lorsqu'on appuie sur la flèche : le mouvement est **déclenché par l'événement**.

---

## 3. Événementiel ≠ séquentiel

<!-- schema:sequentiel-evenementiel -->
![Un programme séquentiel s’exécute du début à la fin sans attendre ; un programme événementiel attend un événement, réagit, puis attend à nouveau.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzODAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI4NSIgeT0iMzgiIHdpZHRoPSIxMTAiIGhlaWdodD0iMzYiIHJ4PSIxOCIgZmlsbD0iI2U4ZjVlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTQwIiB5PSI2MSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RMOpYnV0PC90ZXh0PjxyZWN0IHg9IjY1IiB5PSIxMDYiIHdpZHRoPSIxNTAiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIxNDAiIHk9IjEzMSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+aW5zdHJ1Y3Rpb24gMTwvdGV4dD48cmVjdCB4PSI2NSIgeT0iMTc2IiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTQwIiB5PSIyMDEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmluc3RydWN0aW9uIDI8L3RleHQ+PHJlY3QgeD0iNjUiIHk9IjI0NiIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE0MCIgeT0iMjcxIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5pbnN0cnVjdGlvbiAzPC90ZXh0PjxyZWN0IHg9Ijg1IiB5PSIzMTgiIHdpZHRoPSIxMTAiIGhlaWdodD0iMzYiIHJ4PSIxOCIgZmlsbD0iI2U4ZjVlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTQwIiB5PSIzNDEiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkZpbjwvdGV4dD48cmVjdCB4PSIzNzUiIHk9IjM4IiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjM2IiByeD0iMTgiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjQ0MCIgeT0iNjEiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkTDqW1hcnJhZ2U8L3RleHQ+PHJlY3QgeD0iMzQ1IiB5PSIxMDgiIHdpZHRoPSIxOTAiIGhlaWdodD0iNDQiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0NDAiIHk9IjEzNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YXR0ZW5kcmUgdW4gw6l2w6luZW1lbnQ8L3RleHQ+PHBvbHlnb24gcG9pbnRzPSI0NDAsMTg2IDU1MCwyMjYgNDQwLDI2NiAzMzAsMjI2IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCB4PSI0NDAiIHk9IjIyMi42IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50b3VjaGUg4oaSPC90ZXh0Pjx0ZXh0IHg9IjQ0MCIgeT0iMjM4LjIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnByZXNzw6llID88L3RleHQ+PHJlY3QgeD0iMzUwIiB5PSIzMTAiIHdpZHRoPSIxODAiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0NDAiIHk9IjMzNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YXZhbmNlciBkZSAxMCBwYXM8L3RleHQ+PGxpbmUgeDE9IjE0MCIgeTE9Ijc0IiB4Mj0iMTQwIiB5Mj0iOTciIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQwLDEwNiAxNDQuNSw5NyAxMzUuNSw5NyIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSIxNDAiIHkxPSIxNDYiIHgyPSIxNDAiIHkyPSIxNjciIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQwLDE3NiAxNDQuNSwxNjcgMTM1LjUsMTY3IiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjE0MCIgeTE9IjIxNiIgeDI9IjE0MCIgeTI9IjIzNyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNDAsMjQ2IDE0NC41LDIzNyAxMzUuNSwyMzciIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMTQwIiB5MT0iMjg2IiB4Mj0iMTQwIiB5Mj0iMzA5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE0MCwzMTggMTQ0LjUsMzA5IDEzNS41LDMwOSIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0NDAiIHkxPSI3NCIgeDI9IjQ0MCIgeTI9Ijk5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0MCwxMDggNDQ0LjUsOTkgNDM1LjUsOTkiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iNDQwIiB5MT0iMTUyIiB4Mj0iNDQwIiB5Mj0iMTc3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0MCwxODYgNDQ0LjUsMTc3IDQzNS41LDE3NyIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0NDAiIHkxPSIyNjYiIHgyPSI0NDAiIHkyPSIzMDEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDQwLDMxMCA0NDQuNSwzMDEgNDM1LjUsMzAxIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNDU2IiB5PSIyODIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm91aTwvdGV4dD48bGluZSB4MT0iNTUwIiB5MT0iMjI2IiB4Mj0iNjAwIiB5Mj0iMjI2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAwIiB5MT0iMjI2IiB4Mj0iNjAwIiB5Mj0iMTMwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAwIiB5MT0iMTMwIiB4Mj0iNTQ0IiB5Mj0iMTMwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUzNSwxMzAgNTQ0LDEzNC41IDU0NCwxMjUuNSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjU3NCIgeT0iMjE4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5ub248L3RleHQ+PGxpbmUgeDE9IjM1MCIgeTE9IjMzMCIgeDI9IjMxMCIgeTI9IjMzMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMxMCIgeTE9IjMzMCIgeDI9IjMxMCIgeTI9IjEzMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMxMCIgeTE9IjEzMCIgeDI9IjMzNiIgeTI9IjEzMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNDUsMTMwIDMzNiwxMjUuNSAzMzYsMTM0LjUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxNDAiIHk9IjIyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Tw6lxdWVudGllbCA6IGR1IGTDqWJ1dCDDoCBsYSBmaW48L3RleHQ+PHRleHQgeD0iNDQwIiB5PSIyMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+w4l2w6luZW1lbnRpZWwgOiBvbiBhdHRlbmQ8L3RleHQ+PC9zdmc+)
*Un programme séquentiel s’exécute du début à la fin sans attendre ; un programme événementiel attend un événement, réagit, puis attend à nouveau.*
<!-- /schema -->

- Un programme **séquentiel** s'exécute **du début à la fin, dans l'ordre**, sans attendre.
- Un programme **événementiel** **attend** : il ne fait rien tant que l'événement prévu ne
  s'est pas produit, puis il exécute le bloc correspondant.

> **Image.** Le séquentiel, c'est une recette qu'on suit ligne par ligne. L'événementiel,
> c'est une sonnette : on attend que quelqu'un appuie, et **alors** on va ouvrir.

---

## 4. Les briques utiles avec les événements

La programmation événementielle se combine avec les notions de base de l'algorithmique :

- **Variables** : mémoriser une information qui change (un **score**, un nombre de vies).
- **Conditions (SI … ALORS)** : agir seulement dans certains cas (*si score = 10 → gagné*).
- **Boucles** : répéter des actions (*répéter 4 fois*, *répéter indéfiniment*).
- **Messages / diffusion** : un script **envoie** un message, un autre **le reçoit** et
  réagit — c'est un moyen de faire **communiquer** plusieurs parties du programme.

> **Exemple combiné.** *Quand le drapeau vert est cliqué → mettre score à 0 ; répéter
> indéfiniment : si le lutin touche la pièce → ajouter 1 au score.*

---

## 5. Programmer un objet technique

Sur une carte programmable (**micro:bit**, **Arduino**…), le principe est le même :

- **QUAND le bouton A est pressé → afficher un cœur** ;
- **QUAND on secoue la carte → jouer un son** ;
- **QUAND la température dépasse 30 °C → allumer une DEL**.

L'objet **acquiert** l'événement (capteur/bouton), le programme **traite** la condition,
puis **communique** ou **agit** : on retrouve la **chaîne d'information**.

---

## Ce qu'il faut retenir

- La **programmation événementielle** consiste à écrire un programme qui **réagit à des
  événements** (clic, touche, capteur, message, démarrage…).
- Chaque script commence par un **bloc-événement** : **« QUAND … alors FAIRE … »**.
- Elle se distingue du **séquentiel** : le programme **attend** l'événement avant d'agir,
  et plusieurs scripts peuvent réagir **en parallèle**.
- On la combine avec **variables**, **conditions**, **boucles** et **messages** ; sur un
  objet technique, elle relie **capteur → traitement → action** (chaîne d'information).

## Les erreurs à éviter

- **Confondre événementiel et séquentiel.** Le séquentiel se déroule dans l'ordre sans
  attendre ; l'événementiel **attend** un déclencheur.
- **Oublier le bloc-événement.** Sans « QUAND … », les actions ne savent pas **quand** se
  déclencher : le script ne démarre pas.
- **Croire qu'un seul script tourne à la fois.** Plusieurs scripts peuvent guetter des
  événements **en même temps** et s'exécuter en parallèle.
- **Confondre événement et action.** L'événement est le **déclencheur** (le clic) ;
  l'action est ce que le programme **fait ensuite** (avancer, jouer un son).
- **Confondre une variable et un événement.** Une variable **mémorise** une valeur (le
  score) ; un événement **déclenche** l'exécution d'un bloc.
