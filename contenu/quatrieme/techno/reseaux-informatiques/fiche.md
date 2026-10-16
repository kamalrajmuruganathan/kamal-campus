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

<!-- schema:reseau-local -->
![Un réseau local : les appareils sont reliés par câble au switch ou en Wi-Fi à la box, qui donne accès à Internet et aux serveurs.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMCIgeT0iMzAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjgwIiByeD0iMTIiIGZpbGw9IiNmYmZjZmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1Ii8+PHRleHQgeD0iMjIiIHk9IjUyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPlLDqXNlYXUgbG9jYWwgKExBTik8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTEwIiB4Mj0iMTUwIiB5Mj0iMTkwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iMjYwIiB4Mj0iMTUwIiB5Mj0iMTkwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4MCIgeTE9IjI3MCIgeDI9IjE1MCIgeTI9IjE5MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNTAiIHkxPSIxOTAiIHgyPSIzMzAiIHkyPSIxMjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIyOCIgeT0iODIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI3NCIgcng9IjAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIzNCIgeT0iODgiIHdpZHRoPSI1MiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxyZWN0IHg9IjQwIiB5PSI5MyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iMCIgZmlsbD0iI2NmZTBmNyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxsaW5lIHgxPSI2MCIgeTE9IjEyMiIgeDI9IjYwIiB5Mj0iMTI4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ2IiB5MT0iMTI5IiB4Mj0iNzQiIHkyPSIxMjkiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjYwIiB5PSIxNTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm9yZGluYXRldXI8L3RleHQ+PHJlY3QgeD0iMjgiIHk9IjIzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9Ijc0IiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxyZWN0IHg9IjM0IiB5PSIyMzgiIHdpZHRoPSI1MiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxyZWN0IHg9IjQwIiB5PSIyNDMiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyNCIgcng9IjAiIGZpbGw9IiNjZmUwZjciIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48bGluZSB4MT0iNjAiIHkxPSIyNzIiIHgyPSI2MCIgeTI9IjI3OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NiIgeTE9IjI3OSIgeDI9Ijc0IiB5Mj0iMjc5IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MCIgeT0iMzAwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5vcmRpbmF0ZXVyPC90ZXh0PjxyZWN0IHg9IjE0OCIgeT0iMjQyIiB3aWR0aD0iNjQiIGhlaWdodD0iNzQiIHJ4PSIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMTU0IiB5PSIyNjAiIHdpZHRoPSI1MiIgaGVpZ2h0PSIyNiIgcng9IjQiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIvPjxyZWN0IHg9IjE2NCIgeT0iMjQ4IiB3aWR0aD0iMzIiIGhlaWdodD0iMTIiIHJ4PSIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cmVjdCB4PSIxNjQiIHk9IjI3OCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjE0IiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHRleHQgeD0iMTgwIiB5PSIzMTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmltcHJpbWFudGU8L3RleHQ+PHJlY3QgeD0iMTEwIiB5PSIxNzciIHdpZHRoPSI4MCIgaGVpZ2h0PSIyNiIgcng9IjQiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxMTgiIHk9IjE4NiIgd2lkdGg9IjkiIGhlaWdodD0iOCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIxMzEiIHk9IjE4NiIgd2lkdGg9IjkiIGhlaWdodD0iOCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIxNDQiIHk9IjE4NiIgd2lkdGg9IjkiIGhlaWdodD0iOCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIxNTciIHk9IjE4NiIgd2lkdGg9IjkiIGhlaWdodD0iOCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIxNzAiIHk9IjE4NiIgd2lkdGg9IjkiIGhlaWdodD0iOCIgcng9IjAiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIxOTYiIHk9IjE5NSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5zd2l0Y2g8L3RleHQ+PHJlY3QgeD0iMjk0IiB5PSIxMDciIHdpZHRoPSI3MiIgaGVpZ2h0PSIyNiIgcng9IjYiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMzA2IiB5MT0iMTA3IiB4Mj0iMzAwIiB5Mj0iOTAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNTQiIHkxPSIxMDciIHgyPSIzNjAiIHkyPSI5MCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzE0IiBjeT0iMTIwIiByPSIzIiBmaWxsPSIjMWE3ZjRiIi8+PGNpcmNsZSBjeD0iMzI0IiBjeT0iMTIwIiByPSIzIiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMzMwIiB5PSI4MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Ym94IC8gcm91dGV1cjwvdGV4dD48cmVjdCB4PSIzMTgiIHk9IjIyOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjQyIiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHJlY3QgeD0iMzIyIiB5PSIyMzQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyOCIgcng9IjAiIGZpbGw9IiNjZmUwZjciIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIzMzAiIHk9IjI5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+c21hcnRwaG9uZTwvdGV4dD48cGF0aCBkPSJNIDMzNi44OCAxNDcuODMgQSAxMiAxMiAwIDAgMSAzMjMuMTIgMTQ3LjgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzNDAuMzIgMTUyLjc0IEEgMTggMTggMCAwIDEgMzE5LjY4IDE1Mi43NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMzQzLjc3IDE1Ny42NiBBIDI0IDI0IDAgMCAxIDMxNi4yMyAxNTcuNjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDMyMy4xMiAyMTIuMTcgQSAxMiAxMiAwIDAgMSAzMzYuODggMjEyLjE3IiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzMTkuNjggMjA3LjI2IEEgMTggMTggMCAwIDEgMzQwLjMyIDIwNy4yNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMzE2LjIzIDIwMi4zNCBBIDI0IDI0IDAgMCAxIDM0My43NyAyMDIuMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNDUiIHk9IjE5MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5XaS1GaTwvdGV4dD48dGV4dCB4PSIxOTYiIHk9IjIyNiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPmPDomJsZXMgRXRoZXJuZXQ8L3RleHQ+PGxpbmUgeDE9IjM2NiIgeTE9IjEyMCIgeDI9IjUwMCIgeTI9IjEyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSA0NjAgMTQzIEMgNDM2IDE0MyA0MzggMTExIDQ2MiAxMTMgQyA0NjQgODcgNTAyIDgzIDUxNCAxMDEgQyA1MjYgNzkgNTcwIDg1IDU3MCAxMTEgQyA1OTggMTA5IDYwMiAxNDMgNTc2IDE0MyBaIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MjAiIHk9IjEzMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+SW50ZXJuZXQ8L3RleHQ+PGxpbmUgeDE9IjU2MCIgeTE9IjE1MCIgeDI9IjYwMCIgeTI9IjIyMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNTkwIiB5PSIyMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI2MCIgcng9IjQiIGZpbGw9IiNmM2VjZmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iNTk4IiB5MT0iMjMyIiB4Mj0iNjIyIiB5Mj0iMjMyIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU5OCIgeTE9IjI0NCIgeDI9IjYyMiIgeTI9IjI0NCIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1OTgiIHkxPSIyNTYiIHgyPSI2MjIiIHkyPSIyNTYiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTk4IiB5MT0iMjY4IiB4Mj0iNjIyIiB5Mj0iMjY4IiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjEwIiB5PSIyOTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnNlcnZldXI8L3RleHQ+PHRleHQgeD0iNTIwIiB5PSIxODAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+csOpc2VhdSDDqXRlbmR1PC90ZXh0Pjwvc3ZnPg==)
*Un réseau local : les appareils sont reliés par câble au switch ou en Wi-Fi à la box, qui donne accès à Internet et aux serveurs.*
<!-- /schema -->

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

<!-- schema:client-serveur-paquets -->
![Le client demande une ressource ; le serveur répond en envoyant les données découpées en paquets, réassemblés dans l’ordre à l’arrivée.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjk4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyOTgiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTUwIiB5MT0iNjQiIHgyPSIxNTAiIHkyPSIyODYiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNjUiIHk9IjE0IiB3aWR0aD0iMTcwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTUwIiB5PSIzMy4zIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DbGllbnQ8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSI1My4xIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5uYXZpZ2F0ZXVyPC90ZXh0PjxsaW5lIHgxPSI0MTAiIHkxPSI2NCIgeDI9IjQxMCIgeTI9IjI4NiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSIzMjUiIHk9IjE0IiB3aWR0aD0iMTcwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iI2YzZWNmYSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDEwIiB5PSIzMy4zIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5TZXJ2ZXVyPC90ZXh0Pjx0ZXh0IHg9IjQxMCIgeT0iNTMuMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c2l0ZSB3ZWI8L3RleHQ+PGxpbmUgeDE9IjE1NCIgeTE9IjEwOCIgeDI9IjM5NiIgeTI9IjEwOCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MDYsMTA4IDM5NiwxMDMgMzk2LDExMyIgZmlsbD0iIzFmNmZlYiIvPjxyZWN0IHg9IjE1OS44IiB5PSI4NiIgd2lkdGg9IjI0MC40IiBoZWlnaHQ9IjIxIiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI4MCIgeT0iMTAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5yZXF1w6p0ZSA6IMKrIGVudm9pZS1tb2kgbGEgcGFnZSDCuzwvdGV4dD48bGluZSB4MT0iNDA2IiB5MT0iMTU2IiB4Mj0iMTY0IiB5Mj0iMTU2IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE1NCwxNTYgMTY0LDE2MSAxNjQsMTUxIiBmaWxsPSIjMWE3ZjRiIi8+PHJlY3QgeD0iMjI0LjYiIHk9IjEzNCIgd2lkdGg9IjExMC44IiBoZWlnaHQ9IjIxIiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI4MCIgeT0iMTQ4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wYXF1ZXQgMSBzdXIgMzwvdGV4dD48bGluZSB4MT0iNDA2IiB5MT0iMjA0IiB4Mj0iMTY0IiB5Mj0iMjA0IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE1NCwyMDQgMTY0LDIwOSAxNjQsMTk5IiBmaWxsPSIjMWE3ZjRiIi8+PHJlY3QgeD0iMjI0LjYiIHk9IjE4MiIgd2lkdGg9IjExMC44IiBoZWlnaHQ9IjIxIiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI4MCIgeT0iMTk2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wYXF1ZXQgMiBzdXIgMzwvdGV4dD48bGluZSB4MT0iNDA2IiB5MT0iMjUyIiB4Mj0iMTY0IiB5Mj0iMjUyIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE1NCwyNTIgMTY0LDI1NyAxNjQsMjQ3IiBmaWxsPSIjMWE3ZjRiIi8+PHJlY3QgeD0iMjI0LjYiIHk9IjIzMCIgd2lkdGg9IjExMC44IiBoZWlnaHQ9IjIxIiByeD0iMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjI4MCIgeT0iMjQ0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wYXF1ZXQgMyBzdXIgMzwvdGV4dD48L3N2Zz4=)
*Le client demande une ressource ; le serveur répond en envoyant les données découpées en paquets, réassemblés dans l’ordre à l’arrivée.*
<!-- /schema -->

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
