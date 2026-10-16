---
id: tale-si-resistance-des-structures
titre: "Résistance des structures"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 13
prerequis:
  - Forces et actions mécaniques (Première SI)
  - Aires et unités
  - Proportionnalité
statut: brouillon
relu_par: null
---

# Résistance des structures

> Une structure (poutre, câble, châssis, pont…) doit **supporter des efforts sans
> se rompre ni se déformer excessivement**. La **résistance des matériaux (RDM)**
> permet de vérifier qu'une pièce tiendra : on calcule la **contrainte** qu'elle
> subit et on la compare à ce que le matériau peut supporter, avec une **marge de
> sécurité**.

---

# 1. Les sollicitations d'une structure

<!-- schema:sollicitations -->
![Les cinq sollicitations ; les flèches rouges représentent les efforts, les pointillés la déformation de la pièce.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxNCIgeT0iMTQiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTQyIiByeD0iMTAiIGZpbGw9IiNmYmZjZmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjExMCIgeT0iMzYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlRyYWN0aW9uPC90ZXh0Pjx0ZXh0IHg9IjExMCIgeT0iMTQ0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vbiB0aXJlIDogbGEgcGnDqGNlIHPigJlhbGxvbmdlPC90ZXh0PjxyZWN0IHg9IjU0IiB5PSI4MCIgd2lkdGg9IjExMiIgaGVpZ2h0PSIxNiIgcng9IjAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1Ii8+PHJlY3QgeD0iNjQiIHk9Ijc5IiB3aWR0aD0iOTIiIGhlaWdodD0iMTgiIHJ4PSIwIiBmaWxsPSIjZGZlN2YxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjYyIiB5MT0iODgiIHgyPSIzNiIgeTI9Ijg4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI2LDg4IDM2LDkzIDM2LDgzIiBmaWxsPSIjYzAyYTJhIi8+PGxpbmUgeDE9IjE1OCIgeTE9Ijg4IiB4Mj0iMTg0IiB5Mj0iODgiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTk0LDg4IDE4NCw4MyAxODQsOTMiIGZpbGw9IiNjMDJhMmEiLz48cmVjdCB4PSIyMTQiIHk9IjE0IiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE0MiIgcng9IjEwIiBmaWxsPSIjZmJmY2ZlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSIzMTAiIHk9IjM2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Db21wcmVzc2lvbjwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjE0NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+b24gw6ljcmFzZSA6IGVsbGUgcmFjY291cmNpdDwvdGV4dD48cmVjdCB4PSIyNzIiIHk9Ijc3IiB3aWR0aD0iNzYiIGhlaWdodD0iMjIiIHJ4PSIwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIvPjxyZWN0IHg9IjI2NCIgeT0iNzkiIHdpZHRoPSI5MiIgaGVpZ2h0PSIxOCIgcng9IjAiIGZpbGw9IiNkZmU3ZjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjI0IiB5MT0iODgiIHgyPSIyNTAiIHkyPSI4OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNjAsODggMjUwLDgzIDI1MCw5MyIgZmlsbD0iI2MwMmEyYSIvPjxsaW5lIHgxPSIzOTYiIHkxPSI4OCIgeDI9IjM3MCIgeTI9Ijg4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM2MCw4OCAzNzAsOTMgMzcwLDgzIiBmaWxsPSIjYzAyYTJhIi8+PHJlY3QgeD0iNDE0IiB5PSIxNCIgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxNDIiIHJ4PSIxMCIgZmlsbD0iI2ZiZmNmZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iNTEwIiB5PSIzNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+RmxleGlvbjwvdGV4dD48dGV4dCB4PSI1MTAiIHk9IjE0NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+b24gcGxpZSBsYSBwacOoY2U8L3RleHQ+PHBhdGggZD0iTSA0NDAgODYgUSA1MTAgMTE0IDU4MCA4NiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIvPjxyZWN0IHg9IjQzNCIgeT0iNzQiIHdpZHRoPSIxNTIiIGhlaWdodD0iMTIiIHJ4PSIwIiBmaWxsPSIjZGZlN2YxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSI0NDQsODYgNDM2LDEwMCA0NTIsMTAwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU3Niw4NiA1NjgsMTAwIDU4NCwxMDAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI1MTAiIHkxPSI0MiIgeDI9IjUxMCIgeTI9IjYyIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUxMCw3MiA1MTUsNjIgNTA1LDYyIiBmaWxsPSIjYzAyYTJhIi8+PHJlY3QgeD0iMTE0IiB5PSIxNzQiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTQyIiByeD0iMTAiIGZpbGw9IiNmYmZjZmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjIxMCIgeT0iMTk2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Ub3JzaW9uPC90ZXh0Pjx0ZXh0IHg9IjIxMCIgeT0iMzA0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vbiB0b3JkIGxhIHBpw6hjZTwvdGV4dD48cmVjdCB4PSIxNTAiIHk9IjIzNyIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyMiIgcng9IjAiIGZpbGw9IiNkZmU3ZjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMjQ4IiByeD0iNSIgcnk9IjExIiBmaWxsPSIjY2ZkYmU4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIyNzAiIGN5PSIyNDgiIHJ4PSI1IiByeT0iMTEiIGZpbGw9IiNjZmRiZTgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSAxNDIgMjcwIFEgMTE2IDI0OCAxMzggMjI2IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTM4LDIyNiAxMzUuODMsMjM0LjczIDEyOS4yNywyMjguMTciIGZpbGw9IiNjMDJhMmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNIDI3OCAyNzAgUSAzMDQgMjQ4IDI4MiAyMjYiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyODIsMjI2IDI5MC43MywyMjguMTcgMjg0LjE3LDIzNC43MyIgZmlsbD0iI2MwMmEyYSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxyZWN0IHg9IjMxNCIgeT0iMTc0IiB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE0MiIgcng9IjEwIiBmaWxsPSIjZmJmY2ZlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSI0MTAiIHk9IjE5NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Q2lzYWlsbGVtZW50PC90ZXh0Pjx0ZXh0IHg9IjQxMCIgeT0iMzA0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5vbiB0ZW5kIMOgIGxhIGNvdXBlcjwvdGV4dD48cmVjdCB4PSIzNDAiIHk9IjIzOCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyMCIgcng9IjAiIGZpbGw9IiNkZmU3ZjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iNDEwIiB5MT0iMjI2IiB4Mj0iNDEwIiB5Mj0iMjcwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MDIiIHkxPSIyMDIiIHgyPSI0MDIiIHkyPSIyMjYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDAyLDIzNiA0MDcsMjI2IDM5NywyMjYiIGZpbGw9IiNjMDJhMmEiLz48bGluZSB4MT0iNDE4IiB5MT0iMjk0IiB4Mj0iNDE4IiB5Mj0iMjcwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQxOCwyNjAgNDEzLDI3MCA0MjMsMjcwIiBmaWxsPSIjYzAyYTJhIi8+PC9zdmc+)
*Les cinq sollicitations ; les flèches rouges représentent les efforts, les pointillés la déformation de la pièce.*
<!-- /schema -->

Selon la façon dont les efforts s'appliquent, une pièce subit une **sollicitation**
différente :

- **Traction** : la pièce est **tirée** dans le sens de sa longueur (ex. un
  câble d'ascenseur). Elle tend à s'allonger.
- **Compression** : la pièce est **poussée** (ex. un pilier de pont). Elle tend à
  se raccourcir (risque de flambage si elle est élancée).
- **Flexion** : la pièce **plie** sous une charge transversale (ex. une étagère
  chargée, une poutre de plancher).
- **Cisaillement** : deux forces opposées tendent à **trancher** la pièce (ex. un
  boulon, une goupille).
- **Torsion** : la pièce est **vrillée** autour de son axe (ex. un arbre de
  transmission).

---

# 2. La contrainte

<!-- schema:contrainte-section -->
![Le câble de l’exemple (4 000 N sur 20 mm²) subit 200 MPa ; avec une section double, la contrainte tombe à 100 MPa.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzUyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzNTIiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMjgiIHk9IjcwIiB3aWR0aD0iNDQiIGhlaWdodD0iMTUwIiByeD0iMCIgZmlsbD0iI2ZiZWFlYSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNTAiIHkxPSI2NiIgeDI9IjE1MCIgeTI9IjMwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE1MCwyMCAxNDUsMzAgMTU1LDMwIiBmaWxsPSIjMTYyMzJlIi8+PGxpbmUgeDE9IjE1MCIgeTE9IjIyNCIgeDI9IjE1MCIgeTI9IjI2MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNTAsMjcwIDE1NSwyNjAgMTQ1LDI2MCIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjE2MCIgeT0iMzYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+RiA9IDTigK8wMDAgTjwvdGV4dD48dGV4dCB4PSIxNTAiIHk9IjI5MiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+UyA9IDIwIG1twrI8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIzMTQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPs+DID0gNOKArzAwMCDDtyAyMCA9IDIwMCBNUGE8L3RleHQ+PHJlY3QgeD0iNDA2IiB5PSI3MCIgd2lkdGg9Ijg4IiBoZWlnaHQ9IjE1MCIgcng9IjAiIGZpbGw9IiNlOGY1ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iNDUwIiB5MT0iNjYiIHgyPSI0NTAiIHkyPSIzMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NTAsMjAgNDQ1LDMwIDQ1NSwzMCIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0NTAiIHkxPSIyMjQiIHgyPSI0NTAiIHkyPSIyNjAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDUwLDI3MCA0NTUsMjYwIDQ0NSwyNjAiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI0NjAiIHk9IjM2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPkYgPSA04oCvMDAwIE48L3RleHQ+PHRleHQgeD0iNDUwIiB5PSIyOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlMgPSA0MCBtbcKyPC90ZXh0Pjx0ZXh0IHg9IjQ1MCIgeT0iMzE0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7PgyA9IDTigK8wMDAgw7cgNDAgPSAxMDAgTVBhPC90ZXh0Pjx0ZXh0IHg9IjMxMCIgeT0iMzQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPm3Dqm1lIGZvcmNlLCBzZWN0aW9uIGRvdWJsZSA6IGNvbnRyYWludGUgZGl2aXPDqWUgcGFyIGRldXg8L3RleHQ+PC9zdmc+)
*Le câble de l’exemple (4 000 N sur 20 mm²) subit 200 MPa ; avec une section double, la contrainte tombe à 100 MPa.*
<!-- /schema -->

La **contrainte** $\sigma$ (sigma) mesure l'effort **rapporté à la surface** qui
le subit. En traction ou compression simple :
$$\sigma = \frac{F}{S},$$

- $F$ : effort normal (en newtons, $\mathrm{N}$),
- $S$ : aire de la section (en $\mathrm{m^2}$),
- $\sigma$ : contrainte en **pascals** ($\mathrm{Pa}$), avec
  $1\ \mathrm{Pa} = 1\ \mathrm{N/m^2}$. En pratique on utilise le **mégapascal** :
  $1\ \mathrm{MPa} = 10^6\ \mathrm{Pa} = 1\ \mathrm{N/mm^2}$.

**Idée clé** : à effort égal, plus la section est **grande**, plus la contrainte
est **faible**. C'est pourquoi on épaissit une pièce trop sollicitée.

**Exemple de calcul.** Un câble de section $S = 20\ \mathrm{mm^2}$ supporte
$F = 4000\ \mathrm{N}$. La contrainte vaut
$$\sigma = \frac{F}{S} = \frac{4000}{20} = 200\ \mathrm{N/mm^2} = 200\ \mathrm{MPa}.$$

---

# 3. Déformation et loi de Hooke

Sous l'effort, la pièce se déforme. En traction, l'**allongement relatif**
(déformation) est :
$$\varepsilon = \frac{\Delta L}{L_0},$$
où $\Delta L$ est l'allongement et $L_0$ la longueur initiale. $\varepsilon$ est
**sans unité**.

Dans le domaine **élastique** (la pièce revient à sa forme initiale quand on
relâche), la contrainte est **proportionnelle** à la déformation : c'est la **loi
de Hooke** :
$$\sigma = E \times \varepsilon.$$

$E$ est le **module de Young** (ou module d'élasticité), en MPa ou GPa. Il traduit
la **rigidité** du matériau : plus $E$ est grand, moins le matériau se déforme.
(Ex. acier $\approx 210\ \mathrm{GPa}$, aluminium $\approx 70\ \mathrm{GPa}$.)

**Exemple.** Un acier ($E = 200\ 000\ \mathrm{MPa}$) subit une déformation
$\varepsilon = 0{,}001$. La contrainte vaut $\sigma = 200\,000 \times 0{,}001 =
200\ \mathrm{MPa}$.

---

# 4. Limite élastique et coefficient de sécurité

<!-- schema:coefficient-securite -->
![Avec Re = 300 MPa et s = 3, la contrainte admissible vaut 100 MPa : une pièce à 80 MPa est validée, une pièce à 120 MPa est refusée.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzYwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzNjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjQiIHkxPSIzMTIiIHgyPSI1ODgiIHkyPSIzMTIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTk2LDMxMiA1ODgsMzA4IDU4OCwzMTYiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNjQiIHkxPSIzMTIiIHgyPSI2NCIgeTI9IjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjY0LDE2IDYwLDI0IDY4LDI0IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNTkwIiB5PSIzMzIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtc3R5bGU9Iml0YWxpYyI+ZMOpZm9ybWF0aW9uIM61PC90ZXh0Pjx0ZXh0IHg9IjcyIiB5PSIyNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXN0eWxlPSJpdGFsaWMiPmNvbnRyYWludGUgz4M8L3RleHQ+PHBhdGggZD0iTSA2NCAzMTIgTCAzMjcgMTE3LjUyIFEgNDMyLjIgOTQuMTggNTYzLjcgNzguNjIiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNjQiIHk9IjI0Ny4xNyIgd2lkdGg9IjUyNiIgaGVpZ2h0PSI2NC44MyIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjA4Ii8+PGxpbmUgeDE9IjY0IiB5MT0iMTE3LjUyIiB4Mj0iNTkwIiB5Mj0iMTE3LjUyIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU4IiB5PSIxMjEuNTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPjMwMDwvdGV4dD48dGV4dCB4PSI1ODYiIHk9IjEwOS41MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+bGltaXRlIMOpbGFzdGlxdWUgUmUgPSAzMDAgTVBhPC90ZXh0PjxsaW5lIHgxPSI2NCIgeTE9IjI0Ny4xNyIgeDI9IjU5MCIgeTI9IjI0Ny4xNyIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU4IiB5PSIyNTEuMTciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPjEwMDwvdGV4dD48dGV4dCB4PSI1ODYiIHk9IjIzOS4xNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+z4MgYWRtaXNzaWJsZSA9IDMwMCDDtyAzID0gMTAwIE1QYTwvdGV4dD48Y2lyY2xlIGN4PSIxMzQuMTMiIGN5PSIyNjAuMTQiIHI9IjYiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSIxMjQuMTMiIHk9IjI2NS4xNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+ODAgTVBhIDogdmFsaWTDqWU8L3RleHQ+PGNpcmNsZSBjeD0iMTY5LjIiIGN5PSIyMzQuMjEiIHI9IjYiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIxNTkuMiIgeT0iMjM5LjIxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj4xMjAgTVBhIDogcmVmdXPDqWU8L3RleHQ+PHRleHQgeD0iMTU0IiB5PSIzMDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+em9uZSBzw7tyZTwvdGV4dD48dGV4dCB4PSI1OTAiIHk9IjM1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1zdHlsZT0iaXRhbGljIj7PgyBlbiBNUGEgOyBhbGx1cmUgZGUgbGEgY291cmJlLCBub24gw6AgbOKAmcOpY2hlbGxlIGF1LWRlbMOgIGRlIFJlPC90ZXh0Pjwvc3ZnPg==)
*Avec Re = 300 MPa et s = 3, la contrainte admissible vaut 100 MPa : une pièce à 80 MPa est validée, une pièce à 120 MPa est refusée.*
<!-- /schema -->

Chaque matériau a une **limite élastique** $R_e$ : au-delà, il se déforme de façon
**permanente** (déformation plastique), puis se rompt. Pour rester en sécurité,
l'ingénieur impose que la contrainte de travail reste **bien en dessous** de cette
limite, en appliquant un **coefficient de sécurité** $s$ :
$$\sigma_{\text{admissible}} = \frac{R_e}{s}.$$

Une structure est **validée** si la contrainte réelle respecte :
$$\sigma \le \sigma_{\text{admissible}} = \frac{R_e}{s}.$$

**Exemple de calcul.** Un acier a $R_e = 300\ \mathrm{MPa}$ ; on choisit un
coefficient de sécurité $s = 3$. La contrainte admissible vaut
$$\sigma_{\text{admissible}} = \frac{300}{3} = 100\ \mathrm{MPa}.$$
Si la pièce subit $\sigma = 80\ \mathrm{MPa}$, elle est **validée** (80 ≤ 100). Si
elle subit $120\ \mathrm{MPa}$, elle est **refusée** (il faut augmenter la
section).

---

# 5. Choisir et dimensionner

Dimensionner une pièce, c'est déterminer sa **section minimale** pour tenir un
effort donné :
$$S_{\min} = \frac{F}{\sigma_{\text{admissible}}}.$$

Le choix du **matériau** dépend aussi de la **masse**, du **coût**, de la
**tenue à la corrosion**, etc. On compare souvent les matériaux par leur rapport
**résistance / masse** (important en aéronautique).

**Exemple.** Pour tenir $F = 5000\ \mathrm{N}$ avec
$\sigma_{\text{admissible}} = 100\ \mathrm{MPa} = 100\ \mathrm{N/mm^2}$ :
$$S_{\min} = \frac{5000}{100} = 50\ \mathrm{mm^2}.$$

---

# Ce qu'il faut retenir

- Cinq sollicitations : **traction, compression, flexion, cisaillement, torsion**.
- **Contrainte** : $\sigma = \dfrac{F}{S}$, en pascals (1 MPa = 1 N/mm²) ; plus la
  section est grande, plus $\sigma$ est faible.
- **Déformation** $\varepsilon = \dfrac{\Delta L}{L_0}$ (sans unité) ; loi de
  Hooke dans le domaine élastique : $\sigma = E\,\varepsilon$.
- Le **module de Young** $E$ mesure la rigidité (grand $E$ = peu déformable).
- **Sécurité** : $\sigma_{\text{admissible}} = \dfrac{R_e}{s}$ ; structure validée
  si $\sigma \le \sigma_{\text{admissible}}$.
- **Section minimale** : $S_{\min} = \dfrac{F}{\sigma_{\text{admissible}}}$.

# Les erreurs à éviter

- Confondre **force** (N) et **contrainte** (N/mm² = MPa) : la contrainte tient
  compte de la surface.
- Oublier la cohérence des unités : mélanger mm² et m² fausse tout le calcul.
- Confondre **limite élastique** $R_e$ et **contrainte admissible** (celle-ci est
  $R_e$ divisée par le coefficient de sécurité).
- Croire qu'un coefficient de sécurité de 3 signifie « 3 fois plus solide » sans
  vérifier la contrainte réelle par le calcul.
