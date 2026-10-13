---
id: tale-stl-spcl-ondes-transmission-stockage
titre: "Ondes : transmettre, stocker, lire et afficher"
voie: technologique
niveau: terminale-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — SPCL, série STL, classe terminale"
duree_lecture_min: 22
prerequis:
  - "Ondes : mécaniques, électromagnétiques et spectres (Terminale STL SPCL)"
  - Ondes électromagnétiques, spectre et relation $\lambda = c/f$ (Première / Terminale STL)
  - Puissances de 10, préfixes k/M/G, chiffres significatifs (Seconde / Première)
  - Fonction logarithme décimal $\log$ (Terminale)
statut: brouillon
relu_par: null
---

# Ondes : transmettre, stocker, lire et afficher

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)

> Une chanson, une photo, une vidéo : tout ce qui circule aujourd'hui est une suite de
> **0 et de 1**. Ce chapitre suit la chaîne complète de l'information : **numériser** un
> signal, mesurer son **débit**, le **transmettre** par un canal (fibre, câble, ondes
> hertziennes), le **stocker** sur un disque optique, puis l'**afficher** sur un écran. Le
> fil conducteur du chapitre précédent — les ondes EM et la relation $\lambda = c/f$ — sert
> ici d'outil : c'est un **laser** qui lit un CD, ce sont des **ondes hertziennes** qui
> portent la 5G. Le vrai piège n'est pas la physique : ce sont les **unités** (bit / octet,
> k / M / G). On y revient sans arrêt.

---

## 1. Numériser un signal : échantillonnage

Un signal **analogique** (une tension, un son) varie de façon **continue** dans le temps.
Pour le traiter et le stocker, on le transforme en une suite de nombres : c'est la
**numérisation**. Elle se fait en deux temps : **échantillonner**, puis **quantifier**.

### Échantillonnage

<!-- schema:numerisation -->
![Numérisation d'un signal : on l'échantillonne tous les Tₑ, puis chaque échantillon est quantifié sur un nombre fini de niveaux, ici 8 niveaux pour 3 bits.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMzAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTgiIHkxPSIyODQiIHgyPSI1OCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijg1LjgiIHkxPSIyODQiIHgyPSI4NS44IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTEzLjYiIHkxPSIyODQiIHgyPSIxMTMuNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0MS40IiB5MT0iMjg0IiB4Mj0iMTQxLjQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjkuMiIgeTE9IjI4NCIgeDI9IjE2OS4yIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTk3IiB5MT0iMjg0IiB4Mj0iMTk3IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjI0LjgiIHkxPSIyODQiIHgyPSIyMjQuOCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI1Mi42IiB5MT0iMjg0IiB4Mj0iMjUyLjYiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODAuNCIgeTE9IjI4NCIgeDI9IjI4MC40IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzA4LjIiIHkxPSIyODQiIHgyPSIzMDguMiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMzNiIgeTE9IjI4NCIgeDI9IjMzNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM2My44IiB5MT0iMjg0IiB4Mj0iMzYzLjgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzOTEuNiIgeTE9IjI4NCIgeDI9IjM5MS42IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDE5LjQiIHkxPSIyODQiIHgyPSI0MTkuNCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ0Ny4yIiB5MT0iMjg0IiB4Mj0iNDQ3LjIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NzUiIHkxPSIyODQiIHgyPSI0NzUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MDIuOCIgeTE9IjI4NCIgeDI9IjUwMi44IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTMwLjYiIHkxPSIyODQiIHgyPSI1MzAuNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU1OC40IiB5MT0iMjg0IiB4Mj0iNTU4LjQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1ODYuMiIgeTE9IjI4NCIgeDI9IjU4Ni4yIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjE0IiB5MT0iMjg0IiB4Mj0iNjE0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIyODQiIHgyPSI2MTQiIHkyPSIyODQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIyNTIiIHgyPSI2MTQiIHkyPSIyNTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIyMjAiIHgyPSI2MTQiIHkyPSIyMjAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIxODgiIHgyPSI2MTQiIHkyPSIxODgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIxNTYiIHgyPSI2MTQiIHkyPSIxNTYiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIxMjQiIHgyPSI2MTQiIHkyPSIxMjQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSI5MiIgeDI9IjYxNCIgeTI9IjkyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU4IiB5MT0iNjAiIHgyPSI2MTQiIHkyPSI2MCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1OCIgeTE9IjI4IiB4Mj0iNjE0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTgiIHkxPSIyODQiIHgyPSI2MTkiIHkyPSIyODQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjI4LDI4NCA2MTksMjc5LjUgNjE5LDI4OC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjU4IiB5MT0iMjg0IiB4Mj0iNTgiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1OCwxNCA1My41LDIzIDYyLjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTQiIHkxPSIyODQiIHgyPSI1OCIgeTI9IjI4NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAiIHk9IjI4OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDAwPC90ZXh0PjxsaW5lIHgxPSI1NCIgeTE9IjI1MiIgeDI9IjU4IiB5Mj0iMjUyIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MCIgeT0iMjU2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4wMDE8L3RleHQ+PGxpbmUgeDE9IjU0IiB5MT0iMjIwIiB4Mj0iNTgiIHkyPSIyMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwIiB5PSIyMjQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAxMDwvdGV4dD48bGluZSB4MT0iNTQiIHkxPSIxODgiIHgyPSI1OCIgeTI9IjE4OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAiIHk9IjE5MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDExPC90ZXh0PjxsaW5lIHgxPSI1NCIgeTE9IjE1NiIgeDI9IjU4IiB5Mj0iMTU2IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MCIgeT0iMTYwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4xMDA8L3RleHQ+PGxpbmUgeDE9IjU0IiB5MT0iMTI0IiB4Mj0iNTgiIHkyPSIxMjQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwIiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjEwMTwvdGV4dD48bGluZSB4MT0iNTQiIHkxPSI5MiIgeDI9IjU4IiB5Mj0iOTIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwIiB5PSI5NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTEwPC90ZXh0PjxsaW5lIHgxPSI1NCIgeTE9IjYwIiB4Mj0iNTgiIHkyPSI2MCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAiIHk9IjY0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4xMTE8L3RleHQ+PGxpbmUgeDE9IjU0IiB5MT0iMjgiIHgyPSI1OCIgeTI9IjI4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MCIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjwvdGV4dD48dGV4dCB4PSI2MzQiIHk9IjMyMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+dGVtcHM8L3RleHQ+PHRleHQgeD0iNTIiIHk9IjEwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPm5pdmVhdSBjb2TDqTwvdGV4dD48cGF0aCBkPSJNIDU4IDEzNy4yMyBMIDU5Ljg1IDEzMS43NCBMIDYxLjcxIDEyNi4zMyBMIDYzLjU2IDEyMS4wMSBMIDY1LjQxIDExNS44MiBMIDY3LjI3IDExMC43OCBMIDY5LjEyIDEwNS45MSBMIDcwLjk3IDEwMS4yMyBMIDcyLjgzIDk2Ljc2IEwgNzQuNjggOTIuNTIgTCA3Ni41MyA4OC41MiBMIDc4LjM5IDg0Ljc5IEwgODAuMjQgODEuMzQgTCA4Mi4wOSA3OC4xNyBMIDgzLjk1IDc1LjMgTCA4NS44IDcyLjc0IEwgODcuNjUgNzAuNDkgTCA4OS41MSA2OC41NSBMIDkxLjM2IDY2LjkyIEwgOTMuMjEgNjUuNjEgTCA5NS4wNyA2NC42IEwgOTYuOTIgNjMuOTEgTCA5OC43NyA2My41MSBMIDEwMC42MyA2My4zOSBMIDEwMi40OCA2My41NiBMIDEwNC4zMyA2My45OSBMIDEwNi4xOSA2NC42NyBMIDEwOC4wNCA2NS41OSBMIDEwOS44OSA2Ni43MyBMIDExMS43NSA2OC4wOCBMIDExMy42IDY5LjYxIEwgMTE1LjQ1IDcxLjMxIEwgMTE3LjMxIDczLjE2IEwgMTE5LjE2IDc1LjE0IEwgMTIxLjAxIDc3LjIzIEwgMTIyLjg3IDc5LjQyIEwgMTI0LjcyIDgxLjY5IEwgMTI2LjU3IDg0LjAyIEwgMTI4LjQzIDg2LjM5IEwgMTMwLjI4IDg4Ljc5IEwgMTMyLjEzIDkxLjIxIEwgMTMzLjk5IDkzLjYzIEwgMTM1Ljg0IDk2LjA1IEwgMTM3LjY5IDk4LjQ0IEwgMTM5LjU1IDEwMC44MSBMIDE0MS40IDEwMy4xNCBMIDE0My4yNSAxMDUuNDQgTCAxNDUuMTEgMTA3LjcgTCAxNDYuOTYgMTA5LjkxIEwgMTQ4LjgxIDExMi4wOCBMIDE1MC42NyAxMTQuMjIgTCAxNTIuNTIgMTE2LjMxIEwgMTU0LjM3IDExOC4zNyBMIDE1Ni4yMyAxMjAuNDEgTCAxNTguMDggMTIyLjQyIEwgMTU5LjkzIDEyNC40MyBMIDE2MS43OSAxMjYuNDMgTCAxNjMuNjQgMTI4LjQ0IEwgMTY1LjQ5IDEzMC40OCBMIDE2Ny4zNSAxMzIuNTQgTCAxNjkuMiAxMzQuNjQgTCAxNzEuMDUgMTM2LjggTCAxNzIuOTEgMTM5LjAzIEwgMTc0Ljc2IDE0MS4zMyBMIDE3Ni42MSAxNDMuNzIgTCAxNzguNDcgMTQ2LjIxIEwgMTgwLjMyIDE0OC44MSBMIDE4Mi4xNyAxNTEuNTIgTCAxODQuMDMgMTU0LjM2IEwgMTg1Ljg4IDE1Ny4zMyBMIDE4Ny43MyAxNjAuNDMgTCAxODkuNTkgMTYzLjY2IEwgMTkxLjQ0IDE2Ny4wMyBMIDE5My4yOSAxNzAuNTUgTCAxOTUuMTUgMTc0LjE5IEwgMTk3IDE3Ny45NyBMIDE5OC44NSAxODEuODcgTCAyMDAuNzEgMTg1Ljg5IEwgMjAyLjU2IDE5MC4wMiBMIDIwNC40MSAxOTQuMjUgTCAyMDYuMjcgMTk4LjU2IEwgMjA4LjEyIDIwMi45NCBMIDIwOS45NyAyMDcuMzggTCAyMTEuODMgMjExLjg1IEwgMjEzLjY4IDIxNi4zMyBMIDIxNS41MyAyMjAuODIgTCAyMTcuMzkgMjI1LjI4IEwgMjE5LjI0IDIyOS43IEwgMjIxLjA5IDIzNC4wNSBMIDIyMi45NSAyMzguMzEgTCAyMjQuOCAyNDIuNDYgTCAyMjYuNjUgMjQ2LjQ3IEwgMjI4LjUxIDI1MC4zMyBMIDIzMC4zNiAyNTQuMDEgTCAyMzIuMjEgMjU3LjQ4IEwgMjM0LjA3IDI2MC43NCBMIDIzNS45MiAyNjMuNzUgTCAyMzcuNzcgMjY2LjUxIEwgMjM5LjYzIDI2OC45OSBMIDI0MS40OCAyNzEuMTggTCAyNDMuMzMgMjczLjA3IEwgMjQ1LjE5IDI3NC42NCBMIDI0Ny4wNCAyNzUuODggTCAyNDguODkgMjc2Ljc5IEwgMjUwLjc1IDI3Ny4zNiBMIDI1Mi42IDI3Ny41OSBMIDI1NC40NSAyNzcuNDggTCAyNTYuMzEgMjc3LjAyIEwgMjU4LjE2IDI3Ni4yMiBMIDI2MC4wMSAyNzUuMDkgTCAyNjEuODcgMjczLjYzIEwgMjYzLjcyIDI3MS44NiBMIDI2NS41NyAyNjkuNzggTCAyNjcuNDMgMjY3LjQgTCAyNjkuMjggMjY0Ljc1IEwgMjcxLjEzIDI2MS44NCBMIDI3Mi45OSAyNTguNjkgTCAyNzQuODQgMjU1LjMyIEwgMjc2LjY5IDI1MS43NCBMIDI3OC41NSAyNDcuOTggTCAyODAuNCAyNDQuMDYgTCAyODIuMjUgMjQwIEwgMjg0LjExIDIzNS44MyBMIDI4NS45NiAyMzEuNTYgTCAyODcuODEgMjI3LjIyIEwgMjg5LjY3IDIyMi44NCBMIDI5MS41MiAyMTguNDMgTCAyOTMuMzcgMjE0LjAxIEwgMjk1LjIzIDIwOS42MSBMIDI5Ny4wOCAyMDUuMjQgTCAyOTguOTMgMjAwLjkyIEwgMzAwLjc5IDE5Ni42NiBMIDMwMi42NCAxOTIuNDggTCAzMDQuNDkgMTg4LjQgTCAzMDYuMzUgMTg0LjQyIEwgMzA4LjIgMTgwLjU2IEwgMzEwLjA1IDE3Ni44MSBMIDMxMS45MSAxNzMuMTkgTCAzMTMuNzYgMTY5LjcxIEwgMzE1LjYxIDE2Ni4zNSBMIDMxNy40NyAxNjMuMTMgTCAzMTkuMzIgMTYwLjA0IEwgMzIxLjE3IDE1Ny4wOCBMIDMyMy4wMyAxNTQuMjQgTCAzMjQuODggMTUxLjUyIEwgMzI2LjczIDE0OC45MiBMIDMyOC41OSAxNDYuNDEgTCAzMzAuNDQgMTQ0IEwgMzMyLjI5IDE0MS42OCBMIDMzNC4xNSAxMzkuNDIgTCAzMzYgMTM3LjIzIEwgMzM3Ljg1IDEzNS4wOSBMIDMzOS43MSAxMzIuOTggTCAzNDEuNTYgMTMwLjkgTCAzNDMuNDEgMTI4Ljg0IEwgMzQ1LjI3IDEyNi43OCBMIDM0Ny4xMiAxMjQuNzIgTCAzNDguOTcgMTIyLjY0IEwgMzUwLjgzIDEyMC41NCBMIDM1Mi42OCAxMTguNDEgTCAzNTQuNTMgMTE2LjI0IEwgMzU2LjM5IDExNC4wMyBMIDM1OC4yNCAxMTEuNzcgTCAzNjAuMDkgMTA5LjQ3IEwgMzYxLjk1IDEwNy4xMyBMIDM2My44IDEwNC43NCBMIDM2NS42NSAxMDIuMzEgTCAzNjcuNTEgOTkuODUgTCAzNjkuMzYgOTcuMzUgTCAzNzEuMjEgOTQuODQgTCAzNzMuMDcgOTIuMzIgTCAzNzQuOTIgODkuOCBMIDM3Ni43NyA4Ny4yOSBMIDM3OC42MyA4NC44MSBMIDM4MC40OCA4Mi4zNyBMIDM4Mi4zMyA3OS45OSBMIDM4NC4xOSA3Ny42OSBMIDM4Ni4wNCA3NS40OCBMIDM4Ny44OSA3My4zOSBMIDM4OS43NSA3MS40MiBMIDM5MS42IDY5LjYxIEwgMzkzLjQ1IDY3Ljk2IEwgMzk1LjMxIDY2LjUxIEwgMzk3LjE2IDY1LjI1IEwgMzk5LjAxIDY0LjIyIEwgNDAwLjg3IDYzLjQyIEwgNDAyLjcyIDYyLjg4IEwgNDA0LjU3IDYyLjYxIEwgNDA2LjQzIDYyLjYxIEwgNDA4LjI4IDYyLjkxIEwgNDEwLjEzIDYzLjUgTCA0MTEuOTkgNjQuNCBMIDQxMy44NCA2NS42MSBMIDQxNS42OSA2Ny4xNCBMIDQxNy41NSA2OC45OCBMIDQxOS40IDcxLjE0IEwgNDIxLjI1IDczLjYyIEwgNDIzLjExIDc2LjQgTCA0MjQuOTYgNzkuNDggTCA0MjYuODEgODIuODUgTCA0MjguNjcgODYuNSBMIDQzMC41MiA5MC40MiBMIDQzMi4zNyA5NC41OSBMIDQzNC4yMyA5OC45OSBMIDQzNi4wOCAxMDMuNjEgTCA0MzcuOTMgMTA4LjQzIEwgNDM5Ljc5IDExMy40MiBMIDQ0MS42NCAxMTguNTYgTCA0NDMuNDkgMTIzLjgyIEwgNDQ1LjM1IDEyOS4xOSBMIDQ0Ny4yIDEzNC42NCBMIDQ0OS4wNSAxNDAuMTUgTCA0NTAuOTEgMTQ1LjY4IEwgNDUyLjc2IDE1MS4yMiBMIDQ1NC42MSAxNTYuNzQgTCA0NTYuNDcgMTYyLjIxIEwgNDU4LjMyIDE2Ny42MiBMIDQ2MC4xNyAxNzIuOTQgTCA0NjIuMDMgMTc4LjE0IEwgNDYzLjg4IDE4My4yMSBMIDQ2NS43MyAxODguMTQgTCA0NjcuNTkgMTkyLjg5IEwgNDY5LjQ0IDE5Ny40NyBMIDQ3MS4yOSAyMDEuODUgTCA0NzMuMTUgMjA2LjAyIEwgNDc1IDIwOS45NyBMIDQ3Ni44NSAyMTMuNyBMIDQ3OC43MSAyMTcuMiBMIDQ4MC41NiAyMjAuNDYgTCA0ODIuNDEgMjIzLjQ4IEwgNDg0LjI3IDIyNi4yNyBMIDQ4Ni4xMiAyMjguODMgTCA0ODcuOTcgMjMxLjE2IEwgNDg5LjgzIDIzMy4yNiBMIDQ5MS42OCAyMzUuMTQgTCA0OTMuNTMgMjM2LjgyIEwgNDk1LjM5IDIzOC4zIEwgNDk3LjI0IDIzOS41OSBMIDQ5OS4wOSAyNDAuNyBMIDUwMC45NSAyNDEuNjYgTCA1MDIuOCAyNDIuNDYgTCA1MDQuNjUgMjQzLjEzIEwgNTA2LjUxIDI0My42OCBMIDUwOC4zNiAyNDQuMTIgTCA1MTAuMjEgMjQ0LjQ3IEwgNTEyLjA3IDI0NC43NCBMIDUxMy45MiAyNDQuOTQgTCA1MTUuNzcgMjQ1LjEgTCA1MTcuNjMgMjQ1LjIxIEwgNTE5LjQ4IDI0NS4yOSBMIDUyMS4zMyAyNDUuMzUgTCA1MjMuMTkgMjQ1LjQgTCA1MjUuMDQgMjQ1LjQ1IEwgNTI2Ljg5IDI0NS40OSBMIDUyOC43NSAyNDUuNTQgTCA1MzAuNiAyNDUuNTkgTCA1MzIuNDUgMjQ1LjY1IEwgNTM0LjMxIDI0NS43MiBMIDUzNi4xNiAyNDUuNzkgTCA1MzguMDEgMjQ1Ljg2IEwgNTM5Ljg3IDI0NS45MiBMIDU0MS43MiAyNDUuOTcgTCA1NDMuNTcgMjQ2IEwgNTQ1LjQzIDI0NS45OSBMIDU0Ny4yOCAyNDUuOTUgTCA1NDkuMTMgMjQ1Ljg0IEwgNTUwLjk5IDI0NS42OCBMIDU1Mi44NCAyNDUuNDMgTCA1NTQuNjkgMjQ1LjA4IEwgNTU2LjU1IDI0NC42MyBMIDU1OC40IDI0NC4wNiBMIDU2MC4yNSAyNDMuMzQgTCA1NjIuMTEgMjQyLjQ4IEwgNTYzLjk2IDI0MS40NSBMIDU2NS44MSAyNDAuMjQgTCA1NjcuNjcgMjM4Ljg0IEwgNTY5LjUyIDIzNy4yNCBMIDU3MS4zNyAyMzUuNDIgTCA1NzMuMjMgMjMzLjM5IEwgNTc1LjA4IDIzMS4xMyBMIDU3Ni45MyAyMjguNjMgTCA1NzguNzkgMjI1Ljg5IEwgNTgwLjY0IDIyMi45MiBMIDU4Mi40OSAyMTkuNyBMIDU4NC4zNSAyMTYuMjUgTCA1ODYuMiAyMTIuNTYgTCA1ODguMDUgMjA4LjY0IEwgNTg5LjkxIDIwNC40OSBMIDU5MS43NiAyMDAuMTQgTCA1OTMuNjEgMTk1LjU4IEwgNTk1LjQ3IDE5MC44NCBMIDU5Ny4zMiAxODUuOTMgTCA1OTkuMTcgMTgwLjg2IEwgNjAxLjAzIDE3NS42NSBMIDYwMi44OCAxNzAuMzMgTCA2MDQuNzMgMTY0LjkyIEwgNjA2LjU5IDE1OS40MyBMIDYwOC40NCAxNTMuODkgTCA2MTAuMjkgMTQ4LjMzIEwgNjEyLjE1IDE0Mi43NyBMIDYxNCAxMzcuMjMiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU4IiB5MT0iMjg0IiB4Mj0iNTgiIHkyPSIxMzcuMjMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI1OCIgY3k9IjEzNy4yMyIgcj0iMy41IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9Ijg1LjgiIHkxPSIyODQiIHgyPSI4NS44IiB5Mj0iNzIuNzQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI4NS44IiBjeT0iNzIuNzQiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIxMTMuNiIgeTE9IjI4NCIgeDI9IjExMy42IiB5Mj0iNjkuNjEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxMTMuNiIgY3k9IjY5LjYxIiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTQxLjQiIHkxPSIyODQiIHgyPSIxNDEuNCIgeTI9IjEwMy4xNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjE0MS40IiBjeT0iMTAzLjE0IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTY5LjIiIHkxPSIyODQiIHgyPSIxNjkuMiIgeTI9IjEzNC42NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjE2OS4yIiBjeT0iMTM0LjY0IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMTk3IiB5MT0iMjg0IiB4Mj0iMTk3IiB5Mj0iMTc3Ljk3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMTk3IiBjeT0iMTc3Ljk3IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMjI0LjgiIHkxPSIyODQiIHgyPSIyMjQuOCIgeTI9IjI0Mi40NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjIyNC44IiBjeT0iMjQyLjQ2IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMjUyLjYiIHkxPSIyODQiIHgyPSIyNTIuNiIgeTI9IjI3Ny41OSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjI1Mi42IiBjeT0iMjc3LjU5IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMjgwLjQiIHkxPSIyODQiIHgyPSIyODAuNCIgeTI9IjI0NC4wNiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjI4MC40IiBjeT0iMjQ0LjA2IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMzA4LjIiIHkxPSIyODQiIHgyPSIzMDguMiIgeTI9IjE4MC41NiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjMwOC4yIiBjeT0iMTgwLjU2IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMzM2IiB5MT0iMjg0IiB4Mj0iMzM2IiB5Mj0iMTM3LjIzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzM2IiBjeT0iMTM3LjIzIiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMzYzLjgiIHkxPSIyODQiIHgyPSIzNjMuOCIgeTI9IjEwNC43NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjM2My44IiBjeT0iMTA0Ljc0IiByPSIzLjUiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMzkxLjYiIHkxPSIyODQiIHgyPSIzOTEuNiIgeTI9IjY5LjYxIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iMzkxLjYiIGN5PSI2OS42MSIgcj0iMy41IiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjQxOS40IiB5MT0iMjg0IiB4Mj0iNDE5LjQiIHkyPSI3MS4xNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQxOS40IiBjeT0iNzEuMTQiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI0NDcuMiIgeTE9IjI4NCIgeDI9IjQ0Ny4yIiB5Mj0iMTM0LjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNDQ3LjIiIGN5PSIxMzQuNjQiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI0NzUiIHkxPSIyODQiIHgyPSI0NzUiIHkyPSIyMDkuOTciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0NzUiIGN5PSIyMDkuOTciIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI1MDIuOCIgeTE9IjI4NCIgeDI9IjUwMi44IiB5Mj0iMjQyLjQ2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNTAyLjgiIGN5PSIyNDIuNDYiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI1MzAuNiIgeTE9IjI4NCIgeDI9IjUzMC42IiB5Mj0iMjQ1LjU5IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNTMwLjYiIGN5PSIyNDUuNTkiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI1NTguNCIgeTE9IjI4NCIgeDI9IjU1OC40IiB5Mj0iMjQ0LjA2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNTU4LjQiIGN5PSIyNDQuMDYiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSI1ODYuMiIgeTE9IjI4NCIgeDI9IjU4Ni4yIiB5Mj0iMjEyLjU2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGNpcmNsZSBjeD0iNTg2LjIiIGN5PSIyMTIuNTYiIHI9IjMuNSIgZmlsbD0iIzFmNmZlYiIvPjxwYXRoIGQ9Ik0gNTggMTU2IEwgODUuOCAxNTYgTCA4NS44IDkyIEwgMTEzLjYgOTIgTCAxMTMuNiA5MiBMIDE0MS40IDkyIEwgMTQxLjQgMTI0IEwgMTY5LjIgMTI0IEwgMTY5LjIgMTU2IEwgMTk3IDE1NiBMIDE5NyAxODggTCAyMjQuOCAxODggTCAyMjQuOCAyNTIgTCAyNTIuNiAyNTIgTCAyNTIuNiAyODQgTCAyODAuNCAyODQgTCAyODAuNCAyNTIgTCAzMDguMiAyNTIgTCAzMDguMiAxODggTCAzMzYgMTg4IEwgMzM2IDE1NiBMIDM2My44IDE1NiBMIDM2My44IDEyNCBMIDM5MS42IDEyNCBMIDM5MS42IDkyIEwgNDE5LjQgOTIgTCA0MTkuNCA5MiBMIDQ0Ny4yIDkyIEwgNDQ3LjIgMTU2IEwgNDc1IDE1NiBMIDQ3NSAyMjAgTCA1MDIuOCAyMjAgTCA1MDIuOCAyNTIgTCA1MzAuNiAyNTIgTCA1MzAuNiAyNTIgTCA1NTguNCAyNTIgTCA1NTguNCAyNTIgTCA1ODYuMiAyNTIgTCA1ODYuMiAyMjAgTCA2MTQgMjIwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjkuMiIgeTE9IjI0IiB4Mj0iMTg5IiB5Mj0iMjQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTk3LDI0IDE4OSwyMCAxODksMjgiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMTk3IiB5MT0iMjQiIHgyPSIxNzcuMiIgeTI9IjI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE2OS4yLDI0IDE3Ny4yLDI4IDE3Ny4yLDIwIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMTgzLjEiIHk9IjE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5U4oKRPC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJlbmQiPmVuIGJsZXUgOiBzaWduYWwgYW5hbG9naXF1ZSBldCDDqWNoYW50aWxsb25zPC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJlbmQiPmVuIHJvdWdlIDogc2lnbmFsIG51bcOpcmlxdWUgKDMgYml0cyDihpIgOCBuaXZlYXV4KTwvdGV4dD48L3N2Zz4=)
*Numérisation d'un signal : on l'échantillonne tous les Tₑ, puis chaque échantillon est quantifié sur un nombre fini de niveaux, ici 8 niveaux pour 3 bits.*
<!-- /schema -->

**Échantillonner**, c'est mesurer la valeur du signal à des instants réguliers, séparés par
la **période d'échantillonnage** $T_e$. On ne garde plus une courbe, mais une suite de points.

$$\boxed{f_e = \frac{1}{T_e}}\qquad f_e \text{ en Hz},\ T_e \text{ en s}$$

$f_e$ est la **fréquence d'échantillonnage** : le nombre d'échantillons prélevés par seconde.

> **Exemple.** Le son d'un CD est échantillonné à $f_e = 44{,}1\ \text{kHz}
> = 44\,100\ \text{Hz}$ : on mesure la tension $44\,100$ fois par seconde. La période
> d'échantillonnage vaut $T_e = \dfrac{1}{f_e} = \dfrac{1}{44\,100} = 2{,}27\times 10^{-5}\ \text{s}
> \approx 23\ \text{µs}$.

### Le critère de Shannon (Nyquist)

Pour reconstituer fidèlement le signal, il faut échantillonner **assez souvent** :

$$\boxed{f_e \ge 2\,f_{\max}}$$

où $f_{\max}$ est la fréquence la plus élevée présente dans le signal.

> **Exemple.** L'oreille humaine entend jusqu'à $f_{\max} \approx 20\ \text{kHz}$. Il faut
> donc $f_e \ge 40\ \text{kHz}$ : le choix de $44{,}1\ \text{kHz}$ pour le CD respecte le
> critère avec une marge.

> ⚠️ Échantillonner **trop lentement** ($f_e < 2 f_{\max}$) déforme le signal : des
> fréquences fausses apparaissent (**repliement de spectre**). On ne peut plus le
> reconstituer.

---

## 2. Numériser un signal : quantification et résolution

Une fois l'instant choisi, il reste à **coder** la valeur mesurée. **Quantifier**, c'est
attribuer à chaque échantillon une valeur parmi un **nombre fini** de niveaux, codée sur
$n$ bits.

$$\boxed{N = 2^{n}}\qquad N = \text{nombre de niveaux},\ n = \text{nombre de bits}$$

Le **pas de quantification** (ou **résolution**, ou **quantum**) $q$ est le plus petit écart
de tension que le codage peut distinguer. Pour une plage de mesure (un **calibre**) d'étendue
$U$ :

$$\boxed{q = \frac{U}{2^{n}}}\qquad q \text{ et } U \text{ en volts (V)}$$

Plus $n$ est **grand**, plus $N$ est grand, plus $q$ est **petit** : la numérisation est plus
**fine**, plus fidèle.

> **Exemple.** Un convertisseur code une tension sur la plage $U = 5{,}0\ \text{V}$ avec
> $n = 12$ bits. Il distingue $N = 2^{12} = 4096$ niveaux, et sa résolution vaut
> $q = \dfrac{5{,}0}{4096} = 1{,}2\times 10^{-3}\ \text{V} = 1{,}2\ \text{mV}$. Passer à
> $n = 8$ bits ne donnerait que $256$ niveaux et $q = \dfrac{5{,}0}{256} \approx 20\ \text{mV}$ :
> beaucoup plus grossier.

> ⚠️ **Ne confonds pas les deux étapes.** L'**échantillonnage** découpe le **temps**
> (fréquence $f_e$) ; la **quantification** découpe l'**amplitude** (nombre de bits $n$). Le
> son du CD : $f_e = 44{,}1\ \text{kHz}$ (temps) **et** $n = 16$ bits (amplitude).

| Étape | Ce qu'elle découpe | Grandeur clé |
|---|---|---|
| Échantillonnage | le **temps** | $f_e$ (Hz), $T_e$ (s) |
| Quantification | l'**amplitude** | $n$ (bits), $N = 2^n$, $q$ (V) |

---

## 3. Le débit binaire

### Définition

Le **débit binaire** $D$ mesure la quantité d'information transmise ou lue par unité de temps.

$$\boxed{D = \frac{Q}{\Delta t}}\qquad D \text{ en bit/s},\ Q \text{ en bits},\ \Delta t \text{ en s}$$

$Q$ est la **quantité de données** (en bits), $\Delta t$ la **durée** (en secondes). On en
tire aussi bien la durée qu'une taille de fichier : $Q = D \times \Delta t$.

> **Exemple.** Un fichier de $Q = 24\ \text{Mbit}$ se télécharge en $\Delta t = 3{,}0\ \text{s}$.
> Le débit vaut $D = \dfrac{24\times 10^{6}}{3{,}0} = 8{,}0\times 10^{6}\ \text{bit/s}
> = 8{,}0\ \text{Mbit/s}$.

### Le débit d'un signal numérisé

Pour un signal échantillonné à $f_e$, codé sur $n$ bits, avec $k$ **voies** (1 en mono,
2 en stéréo) :

$$\boxed{D = f_e \times n \times k}$$

> **Exemple (CD audio).** $f_e = 44{,}1\ \text{kHz}$, $n = 16$ bits, $k = 2$ voies (stéréo) :
> $$D = 44\,100 \times 16 \times 2 = 1\,411\,200\ \text{bit/s} \approx 1{,}41\ \text{Mbit/s}.$$

---

## 4. Bits, octets, et les préfixes : le vrai piège

Tout se joue ici. Deux confusions font perdre le plus de points.

### Bit et octet

$$\boxed{1\ \text{octet} = 8\ \text{bits}}\qquad (\text{en anglais : } 1\ \text{byte} = 8\ \text{bits})$$

Les **débits** se donnent en **bit/s** (b/s) ; les **tailles de fichiers** en **octets** (o).
Pour passer de l'un à l'autre, on **multiplie ou divise par 8**.

> **Exemple.** Une «box» annonce $D = 8\ \text{Mbit/s}$. En octets, cela fait
> $\dfrac{8}{8} = 1\ \text{Mo/s}$ : un fichier de $1\ \text{Mo}$ arrive en une seconde, pas de
> $8\ \text{Mo}$.

### Les préfixes k, M, G

Pour les débits et les tailles courantes, on utilise les préfixes **décimaux** (SI) :

$$1\ \text{k} = 10^{3}\qquad 1\ \text{M} = 10^{6}\qquad 1\ \text{G} = 10^{9}\qquad 1\ \text{T} = 10^{12}$$

Ainsi $1\ \text{Mbit/s} = 10^{6}\ \text{bit/s}$ et $1\ \text{Go} = 10^{9}\ \text{octets}$.

> ⚠️ **Le préfixe binaire.** Les systèmes d'exploitation comptent parfois en puissances de
> $2$ : $1\ \text{kio} = 2^{10} = 1024$ octets (kibioctet), $1\ \text{Mio} = 2^{20}$ octets.
> C'est pour cela qu'un disque «de $500\ \text{Go}$» n'affiche que «$465\ \text{Gio}$». **Par
> défaut, dans ce cours, k / M / G valent $10^{3}$ / $10^{6}$ / $10^{9}$** ; on précise «kio,
> Mio…» quand on veut les puissances de $2$.

### Méthode — taille d'un fichier audio

> **Exemple (CD audio, morceau de 3 min).** On reprend $D = 1{,}41\ \text{Mbit/s}$.
> 1. Durée en secondes : $\Delta t = 3\ \text{min} = 180\ \text{s}$.
> 2. Quantité de bits : $Q = D \times \Delta t = 1{,}411\,200\times 10^{6} \times 180
>    = 2{,}54\times 10^{8}\ \text{bits}$.
> 3. En octets : $\dfrac{2{,}54\times 10^{8}}{8} = 3{,}18\times 10^{7}\ \text{octets}
>    \approx 32\ \text{Mo}$.
>
> Un morceau non compressé « pèse » donc une trentaine de mégaoctets — d'où l'intérêt de la
> **compression** (MP3).

---

## 5. Transmettre : les canaux

Le **canal de transmission** est le support qui porte le signal de l'émetteur au récepteur.
On distingue deux familles.

### Canal guidé (transmission filaire)

<!-- schema:fibre -->
![Dans une fibre optique, la lumière se réfléchit totalement à la frontière entre le cœur et la gaine, ce qui la guide sur de grandes distances.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMCIgeT0iNTQiIHdpZHRoPSI2MDAiIGhlaWdodD0iMTIyIiByeD0iMCIgZmlsbD0iI2U2ZWRmNSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iMjAiIHk9IjgwIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjcwIiByeD0iMCIgZmlsbD0iI2ZmZjZkZCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHBhdGggZD0iTSAzMCA5MCBMIDk4LjU3IDE1MCBMIDE3OC41NyA4MCBMIDI1OC41NyAxNTAgTCAzMzguNTcgODAgTCA0MTguNTcgMTUwIEwgNDk4LjU3IDgwIEwgNTc4LjU3IDE1MCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU3OC41NywxNTAgNTc0LjM0LDEzOS42NSA1NjcuNzUsMTQ3LjE4IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMzMwIiB5PSIzNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Z2FpbmU8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjwvdGV4dD48dGV4dCB4PSI2MDAiIHk9IjE5NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzlhN2EyMCIgdGV4dC1hbmNob3I9ImVuZCI+Y8WTdXI8L3RleHQ+PGxpbmUgeDE9IjU2MCIgeTE9IjE4NCIgeDI9IjU0MCIgeTI9IjE0NCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyMCIgeT0iMjE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5sYSBsdW1pw6hyZSByZXN0ZSBwacOpZ8OpZSBkYW5zIGxlIGPFk3VyIHBhciByw6lmbGV4aW9uIHRvdGFsZSDDoCBjaGFxdWUgcmVib25kPC90ZXh0Pjwvc3ZnPg==)
*Dans une fibre optique, la lumière se réfléchit totalement à la frontière entre le cœur et la gaine, ce qui la guide sur de grandes distances.*
<!-- /schema -->

Le signal est **confiné** dans un support matériel.

| Support | Ce qui se propage | Atouts |
|---|---|---|
| **Câble électrique** (cuivre : paire torsadée, coaxial) | un signal **électrique** | simple, peu coûteux |
| **Fibre optique** | un signal **lumineux** (laser IR) guidé par réflexion totale | très faible atténuation, très haut débit, insensible aux perturbations EM |

> **Exemple.** Dans une fibre, la lumière reste piégée dans le cœur par **réflexion totale**
> et parcourt des dizaines de kilomètres. C'est le support des réseaux à très haut débit
> (« fibre » de l'opérateur, liaisons intercontinentales sous-marines).

### Canal libre (transmission non guidée)

Le signal se propage **librement** dans l'espace (air, vide) sous forme d'**ondes
hertziennes** — des ondes **électromagnétiques** (radio, micro-ondes).

> **Exemple.** Radio FM, télévision hertzienne, Wi-Fi, 4G/5G, GPS, liaisons satellites : tous
> utilisent des ondes hertziennes. Pas de câble, mais une sensibilité aux **obstacles** et
> aux **perturbations**, et un partage des **fréquences** strictement réglementé.

---

## 6. Transmettre : atténuation et portée

En se propageant, un signal **s'affaiblit** : sa puissance diminue. Cet affaiblissement est
l'**atténuation**, mesurée en **décibels (dB)** à partir du rapport des puissances d'entrée
$P_e$ et de sortie $P_s$ :

$$\boxed{A_{\text{dB}} = 10\,\log\!\left(\frac{P_e}{P_s}\right)}$$

Une atténuation **positive** signifie que le signal a **diminué** ($P_s < P_e$). L'échelle
est **logarithmique** : $+3\ \text{dB}$ ≈ puissance divisée par $2$, $+10\ \text{dB}$ =
divisée par $10$, $+20\ \text{dB}$ = divisée par $100$.

Pour un câble ou une fibre, l'atténuation croît avec la longueur $L$ selon un **coefficient
linéique** $\alpha$ (en dB/km) :

$$\boxed{A_{\text{dB}} = \alpha \times L}$$

> **Exemple (fibre optique).** Une fibre a $\alpha = 0{,}20\ \text{dB/km}$. Sur $L = 50\ \text{km}$ :
> $A = 0{,}20 \times 50 = 10\ \text{dB}$. La puissance de sortie est donc
> $P_s = \dfrac{P_e}{10^{A/10}} = \dfrac{P_e}{10^{1}} = \dfrac{P_e}{10}$ : il reste **un
> dixième** de la puissance émise. Un câble coaxial, lui, atténue bien plus vite.

La **portée** est la distance maximale avant que le signal, trop atténué, ne soit plus
exploitable par le récepteur. La très faible atténuation de la fibre explique sa **grande
portée** face au cuivre.

> ⚠️ **Le décibel n'est pas linéaire.** Additionner des dB revient à **multiplier** des
> rapports de puissance. $10\ \text{dB} + 10\ \text{dB} = 20\ \text{dB}$, soit une puissance
> divisée par $10 \times 10 = 100$ — pas par $20$.

---

## 7. Stocker : le disque optique (CD, DVD, Blu-ray)

L'information est gravée le long d'une **piste en spirale** unique, sous forme d'une
alternance de :

- **cuvettes** (creux, en anglais *pits*),
- **plats** ou **plateaux** (surfaces planes, *lands*).

### Lecture par laser

Un faisceau **laser** balaie la piste. La lumière se **réfléchit** différemment sur une
cuvette et sur un plat : une **photodiode** capte l'intensité réfléchie et la traduit en
**signal binaire**. Ce sont les **transitions** cuvette ↔ plat qui codent les bits.

### La longueur d'onde fixe la capacité

Plus la longueur d'onde du laser est **courte**, plus les cuvettes peuvent être **petites et
rapprochées**, donc plus la **densité** de données — et la **capacité** — est grande.

| Disque | Laser | $\lambda$ | Capacité typique |
|---|---|---|---|
| **CD** | infrarouge | $780\ \text{nm}$ | $\approx 700\ \text{Mo}$ |
| **DVD** | rouge | $650\ \text{nm}$ | $\approx 4{,}7\ \text{Go}$ |
| **Blu-ray** | bleu-violet | $405\ \text{nm}$ | $\approx 25\ \text{Go}$ |

> **Exemple.** Le passage du DVD (rouge, $650\ \text{nm}$) au Blu-ray (bleu, $405\ \text{nm}$)
> réduit $\lambda$, donc la taille des cuvettes : on passe de $4{,}7\ \text{Go}$ à
> $25\ \text{Go}$ sur le même diamètre de disque. C'est directement la physique des ondes du
> chapitre précédent ($\lambda$ plus petite → détail plus fin).

---

## 8. Afficher : pixels et sous-pixels RVB

Un écran est une **matrice de pixels** (*picture elements*). Chaque **pixel** est composé de
trois **sous-pixels** : **Rouge, Vert, Bleu (RVB)**. En dosant l'intensité de chacun,
la **synthèse additive** recompose n'importe quelle couleur (R + V + B au maximum = blanc ;
tous éteints = noir).

- La **définition** est le nombre de pixels : largeur × hauteur (ex. Full HD :
  $1920 \times 1080$).
- La **résolution** est le nombre de pixels par unité de longueur (en ppp / dpi) : elle dit
  la **finesse**, pas le nombre total.
- Coder chaque sous-pixel sur $8$ bits ($256$ niveaux) donne $24$ bits par pixel, soit
  $256^{3} \approx 16{,}7$ millions de couleurs (**couleur vraie**).

### Méthode — taille d'une image non compressée

$$\text{taille} = (\text{nombre de pixels}) \times (\text{nombre d'octets par pixel})$$

> **Exemple (image Full HD, 24 bits).** Nombre de pixels :
> $1920 \times 1080 = 2{,}0736\times 10^{6}$ pixels. À $24$ bits $= 3$ octets par pixel :
> $$\text{taille} = 2{,}0736\times 10^{6} \times 3 = 6{,}22\times 10^{6}\ \text{octets}
> \approx 6{,}2\ \text{Mo}.$$
> Une seconde de vidéo à $25$ images/s « pèserait » $25$ fois plus ($\approx 155\ \text{Mo/s}$)
> sans compression — d'où, là encore, l'importance des formats compressés.

> ⚠️ **Définition ≠ résolution.** La **définition** est un nombre **total** de pixels
> ($1920\times1080$) ; la **résolution** est une **densité** (ppp). Deux écrans de même
> définition mais de tailles différentes n'ont pas la même résolution.

---

## 9. Tableau récapitulatif

| | |
|---|---|
| Fréquence d'échantillonnage | $f_e = \dfrac{1}{T_e}$ (Hz) |
| Critère de Shannon | $f_e \ge 2\,f_{\max}$ |
| Nombre de niveaux | $N = 2^{n}$ |
| Pas de quantification | $q = \dfrac{U}{2^{n}}$ (V) |
| Débit binaire | $D = \dfrac{Q}{\Delta t}$ (bit/s) ; $\;D = f_e\, n\, k$ |
| Bit / octet | $1\ \text{octet} = 8\ \text{bits}$ |
| Préfixes (SI) | $\text{k}=10^{3}$, $\text{M}=10^{6}$, $\text{G}=10^{9}$ (binaire : kio $=2^{10}$) |
| Canaux | guidé (câble, **fibre**) · libre (**ondes hertziennes**) |
| Atténuation | $A_{\text{dB}} = 10\log\!\left(\dfrac{P_e}{P_s}\right) = \alpha L$ |
| Disque optique | cuvettes / plats, lecture **laser** ; $\lambda\downarrow \Rightarrow$ capacité $\uparrow$ |
| Pixel | 3 sous-pixels **RVB**, synthèse additive |
| Image | taille $=$ (nb pixels) $\times$ (octets/pixel) |

---

## 10. Les erreurs qui coûtent des points

1. **Confondre bit et octet.** $1\ \text{octet} = 8\ \text{bits}$. Un débit «$8\ \text{Mbit/s}$»
   ne fait que $1\ \text{Mo/s}$. Oublier le facteur $8$ fausse toute taille de fichier.
2. **Mélanger k / M / G décimaux et binaires.** Par défaut $\text{M} = 10^{6}$, pas
   $2^{20}$. N'utilise $1024$ que si l'énoncé parle de **kio / Mio / Gio**.
3. **Confondre échantillonnage et quantification.** $f_e$ découpe le **temps** ; $n$ bits
   découpent l'**amplitude**. Ce sont deux réglages indépendants.
4. **Additionner les décibels comme des nombres ordinaires.** L'échelle est
   **logarithmique** : $+10\ \text{dB}$ divise la puissance par $10$, $+20\ \text{dB}$ par
   $100$ (pas par $20$).
5. **Ne pas convertir les durées.** Une durée en minutes doit passer en **secondes** avant
   d'entrer dans $D = Q/\Delta t$. $3\ \text{min} = 180\ \text{s}$.
6. **Confondre définition et résolution d'un écran.** La définition est un **nombre total**
   de pixels ; la résolution est une **densité** (ppp).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SPCL (Sciences physiques et chimiques en laboratoire),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du 25 juillet
2019. Fichier docs/programme-stl-spcl.txt, section « Ondes : transmettre, stocker, lire et
afficher (Tale) » (lignes 82-84) :
  - Numérisation d'un signal ; débit binaire.
  - Transmission (guidée, libre), stockage optique, affichage.
Le libellé du programme est TRÈS condensé : le détail des capacités exigibles
(échantillonnage/quantification, atténuation en dB, cuvettes/plats, sous-pixels RVB) a été
reconstitué à partir de la consigne de production et des usages STL, à CONFRONTER au document
d'accompagnement / au PDF officiel avant publication.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction résumée via WebFetch — À CONFRONTER AU PDF OFFICIEL.
Prérequis cité : chapitre « Ondes : mécaniques, électromagnétiques et spectres » du même
parcours (id tale-stl-spcl-ondes-mecaniques-em-spectres), pour λ = c/f et le spectre EM.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA MATIÈRE :
- Pas de quantification : j'ai retenu q = U / 2^n (convention STL dominante). Certaines
  références écrivent q = U / (2^n − 1) (les 2^n niveaux bornent la plage aux extrémités).
  À aligner sur la convention de l'établissement — impacte les corrigés (exo 3, QCM Q6).
- Critère de Shannon : formulé fe ≥ 2 fmax. Vérifier s'il est exigible quantitativement en
  Tale SPCL ou seulement cité qualitativement (notion de repliement).
- Atténuation : formule 10 log(Pe/Ps) pour un rapport de PUISSANCES. Si l'épreuve raisonne
  en amplitudes/tensions, le facteur est 20 log — à vérifier. Coefficient linéique α en dB/km
  supposé exigible (calcul fibre).
- Convention préfixes : j'ai posé k/M/G = 10^3/10^6/10^9 par défaut, kio/Mio/Gio = 2^10/2^20.
  Confirmer que c'est bien la convention attendue (télécom décimal vs stockage binaire).
- Capacités des disques (700 Mo / 4,7 Go / 25 Go) et longueurs d'onde des lasers
  (780/650/405 nm) : valeurs usuelles, à vérifier comme « ordres de grandeur » et non comme
  valeurs à connaître par cœur.
- Débit CD audio : 44,1 kHz × 16 bits × 2 voies = 1 411 200 bit/s ≈ 1,41 Mbit/s (vérifié).
  Taille d'un morceau de 3 min ≈ 32 Mo non compressé (vérifié, ÷8 pour les octets).
- Codage couleur 24 bits (8 bits/sous-pixel, 16,7 M de couleurs) : standard, à confirmer
  exigible.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
-->
