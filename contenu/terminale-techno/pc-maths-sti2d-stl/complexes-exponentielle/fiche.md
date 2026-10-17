---
id: tale-sti2d-math-complexes-exponentielle
titre: "Nombres complexes : exponentielle complexe et signal"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 15
prerequis:
  - Nombres complexes — forme algébrique, module, argument, forme trigonométrique (Première STI2D/STL)
  - Trigonométrie (Première STI2D/STL)
  - Primitives (Terminale STI2D/STL)
statut: brouillon
relu_par: null
---

# Nombres complexes : exponentielle complexe et signal

> En Première, tu as appris à écrire $z = a + \mathrm{i}b$ et
> $z = r(\cos\theta + \mathrm{i}\sin\theta)$. Cette année, une notation change
> tout : $\mathrm{e}^{\mathrm{i}\theta}$. Avec elle, multiplier deux complexes
> revient à **additionner des angles**, et une tension sinusoïdale
> $a\cos(\omega t) + b\sin(\omega t)$ se réécrit d'un coup
> $A\cos(\omega t + \varphi)$ — amplitude et phase, exactement ce que lit
> l'oscilloscope. C'est le chapitre le plus « électricité » de tout le programme
> de maths.

---

## 1. L'exponentielle complexe

Pour tout réel $\theta$, on pose :

$$\boxed{\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta}$$

C'est le nombre complexe de **module $1$** et d'**argument $\theta$** : son image
est le point du cercle trigonométrique repéré par l'angle $\theta$.

| $\theta$ | $0$ | $\dfrac{\pi}{2}$ | $\pi$ | $-\dfrac{\pi}{2}$ |
|---|---|---|---|---|
| $\mathrm{e}^{\mathrm{i}\theta}$ | $1$ | $\mathrm{i}$ | $-1$ | $-\mathrm{i}$ |

> **Exemple.** $\mathrm{e}^{\mathrm{i}\pi/3} = \cos\dfrac{\pi}{3} + \mathrm{i}\sin\dfrac{\pi}{3}
> = \dfrac{1}{2} + \mathrm{i}\dfrac{\sqrt{3}}{2}$.

Cette notation se manipule **comme une puissance** :

$$\mathrm{e}^{\mathrm{i}\theta} \times \mathrm{e}^{\mathrm{i}\theta'} = \mathrm{e}^{\mathrm{i}(\theta + \theta')}
\qquad \frac{1}{\mathrm{e}^{\mathrm{i}\theta}} = \mathrm{e}^{-\mathrm{i}\theta}
\qquad \left(\mathrm{e}^{\mathrm{i}\theta}\right)^n = \mathrm{e}^{\mathrm{i}n\theta}$$

> ⚠️ Pour tout $\theta$ réel, $\left|\mathrm{e}^{\mathrm{i}\theta}\right| = 1$ :
> l'exponentielle complexe ne « grandit » pas, elle **tourne**.

---

## 2. Forme exponentielle

<!-- schema:forme-exponentielle-oppose -->
![Les points d’affixes 2e^(iπ/4) et 2e^(i5π/4) sont sur le cercle de rayon 2 et symétriques par rapport à O : multiplier par −1 ajoute π à l’argument, d’où −2e^(iπ/4) = 2e^(i5π/4).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NjAgNDEzIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ2MCIgaGVpZ2h0PSI0MTMiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNzQuNjIiIHkxPSIyOCIgeDI9Ijc0LjYyIiB5Mj0iMzg1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE1Mi4zMSIgeTE9IjI4IiB4Mj0iMTUyLjMxIiB5Mj0iMzg1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIzMCIgeTE9IjI4IiB4Mj0iMjMwIiB5Mj0iMzg1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwNy42OSIgeTE9IjI4IiB4Mj0iMzA3LjY5IiB5Mj0iMzg1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM4NS4zOCIgeTE9IjI4IiB4Mj0iMzg1LjM4IiB5Mj0iMzg1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzYxLjcyIiB4Mj0iNDMyIiB5Mj0iMzYxLjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjg0LjExIiB4Mj0iNDMyIiB5Mj0iMjg0LjExIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjA2LjUiIHgyPSI0MzIiIHkyPSIyMDYuNSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjEyOC44OSIgeDI9IjQzMiIgeTI9IjEyOC44OSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjUxLjI4IiB4Mj0iNDMyIiB5Mj0iNTEuMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIyMDYuNSIgeDI9IjQzMSIgeTI9IjIwNi41IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0MCwyMDYuNSA0MzEsMjAyIDQzMSwyMTEiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iMjMwIiB5MT0iMzg1IiB4Mj0iMjMwIiB5Mj0iMjkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjMwLDIwIDIyNS41LDI5IDIzNC41LDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNDM2IiB5PSIyMjQuNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iMjE4IiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iNzQuNjIiIHk9IjIyMi41IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIyPC90ZXh0Pjx0ZXh0IHg9IjE1Mi4zMSIgeT0iMjIyLjUiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPuKIkjE8L3RleHQ+PHRleHQgeD0iMzA3LjY5IiB5PSIyMjIuNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIzODUuMzgiIHk9IjIyMi41IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0Pjx0ZXh0IHg9IjIyNCIgeT0iMzY1LjcyIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIyPC90ZXh0Pjx0ZXh0IHg9IjIyNCIgeT0iMjg4LjExIiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxPC90ZXh0Pjx0ZXh0IHg9IjIyNCIgeT0iMTMyLjg5IiBmb250LXNpemU9IjExIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0Pjx0ZXh0IHg9IjIyNCIgeT0iNTUuMjgiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjI8L3RleHQ+PHRleHQgeD0iMjIyIiB5PSIyMjIuNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjQwNCIgaGVpZ2h0PSIzNTciLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lKSI+PGVsbGlwc2UgY3g9IjIzMCIgY3k9IjIwNi41IiByeD0iMTU1LjM4IiByeT0iMTU1LjIyIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjAuMTIiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIvPjwvZz48cGF0aCBkPSJNIDI2NCAyMDYuNSBMIDI2My45OSAyMDUuODMgTCAyNjMuOTcgMjA1LjE3IEwgMjYzLjk0IDIwNC41IEwgMjYzLjkgMjAzLjgzIEwgMjYzLjg0IDIwMy4xNyBMIDI2My43NiAyMDIuNSBMIDI2My42OCAyMDEuODQgTCAyNjMuNTggMjAxLjE4IEwgMjYzLjQ3IDIwMC41MiBMIDI2My4zNSAxOTkuODcgTCAyNjMuMjEgMTk5LjIxIEwgMjYzLjA2IDE5OC41NiBMIDI2Mi45IDE5Ny45MiBMIDI2Mi43MiAxOTcuMjcgTCAyNjIuNTQgMTk2LjYzIEwgMjYyLjM0IDE5NS45OSBMIDI2Mi4xMiAxOTUuMzYgTCAyNjEuOSAxOTQuNzMgTCAyNjEuNjYgMTk0LjExIEwgMjYxLjQxIDE5My40OSBMIDI2MS4xNSAxOTIuODcgTCAyNjAuODggMTkyLjI3IEwgMjYwLjU5IDE5MS42NiBMIDI2MC4yOSAxOTEuMDYgTCAyNTkuOTkgMTkwLjQ3IEwgMjU5LjY2IDE4OS44OSBMIDI1OS4zMyAxODkuMzEgTCAyNTguOTkgMTg4Ljc0IEwgMjU4LjY0IDE4OC4xNyBMIDI1OC4yNyAxODcuNjEgTCAyNTcuODkgMTg3LjA2IEwgMjU3LjUxIDE4Ni41MiBMIDI1Ny4xMSAxODUuOTggTCAyNTYuNyAxODUuNDUgTCAyNTYuMjggMTg0LjkzIEwgMjU1Ljg1IDE4NC40MiBMIDI1NS40MiAxODMuOTIgTCAyNTQuOTcgMTgzLjQyIEwgMjU0LjUxIDE4Mi45NCBMIDI1NC4wNCAxODIuNDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48bGluZSB4MT0iMjU0Ljk3IiB5MT0iMTgzLjQyIiB4Mj0iMjYwLjI4IiB5Mj0iMTg4Ljk1IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI1NC4wNCwxODIuNDYgMjU3LjA0LDE5Mi4wNiAyNjMuNTIsMTg1LjgzIiBmaWxsPSIjMWY2ZmViIi8+PHBhdGggZD0iTSAyODAgMjA2LjUgTCAyNzkuNzYgMjAxLjYgTCAyNzkuMDQgMTk2Ljc1IEwgMjc3Ljg1IDE5MS45OSBMIDI3Ni4xOSAxODcuMzcgTCAyNzQuMSAxODIuOTMgTCAyNzEuNTcgMTc4LjcyIEwgMjY4LjY1IDE3NC43OCBMIDI2NS4zNiAxNzEuMTQgTCAyNjEuNzIgMTY3Ljg1IEwgMjU3Ljc4IDE2NC45MyBMIDI1My41NyAxNjIuNCBMIDI0OS4xMyAxNjAuMzEgTCAyNDQuNTEgMTU4LjY1IEwgMjM5Ljc1IDE1Ny40NiBMIDIzNC45IDE1Ni43NCBMIDIzMCAxNTYuNSBMIDIyNS4xIDE1Ni43NCBMIDIyMC4yNSAxNTcuNDYgTCAyMTUuNDkgMTU4LjY1IEwgMjEwLjg3IDE2MC4zMSBMIDIwNi40MyAxNjIuNCBMIDIwMi4yMiAxNjQuOTMgTCAxOTguMjggMTY3Ljg1IEwgMTk0LjY0IDE3MS4xNCBMIDE5MS4zNSAxNzQuNzggTCAxODguNDMgMTc4LjcyIEwgMTg1LjkgMTgyLjkzIEwgMTgzLjgxIDE4Ny4zNyBMIDE4Mi4xNSAxOTEuOTkgTCAxODAuOTYgMTk2Ljc1IEwgMTgwLjI0IDIwMS42IEwgMTgwIDIwNi41IEwgMTgwLjI0IDIxMS40IEwgMTgwLjk2IDIxNi4yNSBMIDE4Mi4xNSAyMjEuMDEgTCAxODMuODEgMjI1LjYzIEwgMTg1LjkgMjMwLjA3IEwgMTg4LjQzIDIzNC4yOCBMIDE5MS4zNSAyMzguMjIgTCAxOTQuNjQgMjQxLjg2IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44Ii8+PGxpbmUgeDE9IjE4OC40MyIgeTE9IjIzNC4yOCIgeDI9IjE4OC45NCIgeTI9IjIzNC45IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE5NC42NCwyNDEuODYgMTkyLjQxLDIzMi4wNCAxODUuNDYsMjM3Ljc1IiBmaWxsPSIjYzAyYTJhIi8+PGxpbmUgeDE9IjIzMCIgeTE9IjIwNi41IiB4Mj0iMzMyLjA5IiB5Mj0iMTA0LjUyIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMzOS44Nyw5Ni43NCAzMjguMiwxMDAuNjMgMzM1Ljk4LDEwOC40MSIgZmlsbD0iIzFmNmZlYiIvPjxsaW5lIHgxPSIyMzAiIHkxPSIyMDYuNSIgeDI9IjEyNy45MSIgeTI9IjMwOC40OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMjAuMTMsMzE2LjI2IDEzMS44LDMxMi4zNyAxMjQuMDIsMzA0LjU5IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iMzM5Ljg3IiBjeT0iOTYuNzQiIHI9IjQiIGZpbGw9IiMxZjZmZWIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMzUxLjg3IiB5PSI5MC43NCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yZTx0c3BhbiBmb250LXNpemU9IjEwLjA4IiBkeT0iLTUuODgiPmnPgC80PC90c3Bhbj48dHNwYW4gZHk9IjUuODgiPuKAizwvdHNwYW4+PC90ZXh0PjxjaXJjbGUgY3g9IjEyMC4xMyIgY3k9IjMxNi4yNiIgcj0iNCIgZmlsbD0iI2MwMmEyYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjAiLz48dGV4dCB4PSIxMDguMTMiIHk9IjMzNC4yNiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MmU8dHNwYW4gZm9udC1zaXplPSIxMC4wOCIgZHk9Ii01Ljg4Ij5pNc+ALzQ8L3RzcGFuPjx0c3BhbiBkeT0iNS44OCI+4oCLPC90c3Bhbj48L3RleHQ+PHRleHQgeD0iMjc2LjYyIiB5PSIxOTcuMTkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+z4AvNDwvdGV4dD48dGV4dCB4PSIxNzEuNzMiIHk9IjE1OC4zOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+Nc+ALzQ8L3RleHQ+PHRleHQgeD0iMzg5LjI3IiB5PSIyMjkuNzgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+ciA9IDI8L3RleHQ+PC9zdmc+)
*Les points d’affixes 2e^(iπ/4) et 2e^(i5π/4) sont sur le cercle de rayon 2 et symétriques par rapport à O : multiplier par −1 ajoute π à l’argument, d’où −2e^(iπ/4) = 2e^(i5π/4).*
<!-- /schema -->

Tout complexe $z \neq 0$ de module $r$ et d'argument $\theta$ s'écrit :

$$\boxed{z = r\,\mathrm{e}^{\mathrm{i}\theta}} \qquad \text{avec } r = |z| > 0$$

C'est la forme trigonométrique $r(\cos\theta + \mathrm{i}\sin\theta)$ en version
compacte. Le module et l'argument sont les mêmes qu'en Première — seule
l'écriture change.

> ⚠️ Dans $r\,\mathrm{e}^{\mathrm{i}\theta}$, le facteur $r$ doit être
> **strictement positif**. $-2\,\mathrm{e}^{\mathrm{i}\pi/4}$ n'est PAS une forme
> exponentielle : on écrit $-2\,\mathrm{e}^{\mathrm{i}\pi/4} = 2\,\mathrm{e}^{\mathrm{i}(\pi/4 + \pi)} = 2\,\mathrm{e}^{\mathrm{i}5\pi/4}$,
> car multiplier par $-1 = \mathrm{e}^{\mathrm{i}\pi}$ ajoute $\pi$ à l'argument.

---

## 3. Passer d'une forme à l'autre

### Algébrique → exponentielle

1. Calculer $r = |z| = \sqrt{a^2 + b^2}$.
2. Chercher $\theta$ tel que $\cos\theta = \dfrac{a}{r}$ **et** $\sin\theta = \dfrac{b}{r}$.
3. Écrire $z = r\,\mathrm{e}^{\mathrm{i}\theta}$.

> **Exemple.** $z = \sqrt{3} + \mathrm{i}$ : $r = \sqrt{3 + 1} = 2$, puis
> $\cos\theta = \dfrac{\sqrt3}{2}$ et $\sin\theta = \dfrac{1}{2}$, donc
> $\theta = \dfrac{\pi}{6}$ et $z = 2\,\mathrm{e}^{\mathrm{i}\pi/6}$.

### Exponentielle → algébrique

Développer avec la définition : $r\,\mathrm{e}^{\mathrm{i}\theta} = r\cos\theta + \mathrm{i}\,r\sin\theta$.

> **Exemple.** $z = 4\,\mathrm{e}^{-\mathrm{i}\pi/3} = 4\cos\left(-\dfrac{\pi}{3}\right)
> + 4\mathrm{i}\sin\left(-\dfrac{\pi}{3}\right) = 2 - 2\mathrm{i}\sqrt{3}$.

---

## 4. Opérations sous forme exponentielle

C'est LA nouveauté de Terminale : produit et quotient deviennent immédiats.

$$\boxed{r\,\mathrm{e}^{\mathrm{i}\theta} \times r'\,\mathrm{e}^{\mathrm{i}\theta'} = rr'\,\mathrm{e}^{\mathrm{i}(\theta + \theta')}}
\qquad \frac{r\,\mathrm{e}^{\mathrm{i}\theta}}{r'\,\mathrm{e}^{\mathrm{i}\theta'}} = \frac{r}{r'}\,\mathrm{e}^{\mathrm{i}(\theta - \theta')}$$

**Les modules se multiplient, les arguments s'additionnent.**

> **Exemple.** $2\,\mathrm{e}^{\mathrm{i}\pi/6} \times 3\,\mathrm{e}^{\mathrm{i}\pi/3}
> = 6\,\mathrm{e}^{\mathrm{i}\pi/2} = 6\mathrm{i}$.

**Règle de choix de la forme** : forme **algébrique** pour les sommes, forme
**exponentielle** pour les produits, quotients et puissances.

---

## 5. Formules d'addition et de duplication

Le produit $\mathrm{e}^{\mathrm{i}(a+b)} = \mathrm{e}^{\mathrm{i}a}\,\mathrm{e}^{\mathrm{i}b}$,
développé puis identifié partie réelle / partie imaginaire, redonne les
**formules d'addition** :

$$\boxed{\cos(a+b) = \cos a\cos b - \sin a\sin b}$$
$$\boxed{\sin(a+b) = \sin a\cos b + \cos a\sin b}$$

En remplaçant $b$ par $-b$ : $\cos(a-b) = \cos a\cos b + \sin a\sin b$ et
$\sin(a-b) = \sin a\cos b - \cos a\sin b$.

Avec $b = a$, on obtient les **formules de duplication** :

$$\boxed{\cos(2a) = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a}$$
$$\boxed{\sin(2a) = 2\sin a\cos a}$$

> **Exemple.** Si $\cos a = \dfrac{3}{5}$, alors
> $\cos(2a) = 2 \times \dfrac{9}{25} - 1 = -\dfrac{7}{25}$ — sans avoir besoin
> de connaître $a$.

---

## 6. Linéariser $\cos^2$ et $\sin^2$

**Linéariser** = transformer un carré en expression **sans puissance**, du
premier degré en $\cos$ et $\sin$. On isole $\cos^2 a$ et $\sin^2 a$ dans les
formules de duplication :

$$\boxed{\cos^2 a = \frac{1 + \cos(2a)}{2}} \qquad \boxed{\sin^2 a = \frac{1 - \cos(2a)}{2}}$$

**Moyen mnémotechnique** : les deux commencent par $\dfrac{1}{2}$ ; le signe
$+$ va avec $\cos^2$, le signe $-$ avec $\sin^2$. Contrôle rapide en $a = 0$ :
$\cos^2 0 = 1 = \dfrac{1+1}{2}$ ✓ et $\sin^2 0 = 0 = \dfrac{1-1}{2}$ ✓.

### Application : calculer une primitive

On ne sait pas primitiver $\cos^2 t$ directement — mais on sait primitiver
$\cos(2t)$. On linéarise **d'abord** :

$$\int \cos^2 t\,\mathrm{d}t = \int \left(\frac{1}{2} + \frac{\cos(2t)}{2}\right)\mathrm{d}t
= \frac{t}{2} + \frac{\sin(2t)}{4} + C$$

> ⚠️ Ne pas oublier de **diviser par $2$** en primitivant $\cos(2t)$ :
> une primitive de $\cos(2t)$ est $\dfrac{\sin(2t)}{2}$, d'où le $4$ au
> dénominateur final. Ce type de calcul sert en physique pour la **valeur
> moyenne** de $u^2(t)$, donc pour la valeur efficace d'une tension.

---

## 7. Le cœur du chapitre en STI2D : $a\cos(\omega t) + b\sin(\omega t)$

<!-- schema:somme-sinusoides -->
![La somme cos(ωt) + √3 sin(ωt) (en bleu) est une seule sinusoïde : amplitude A = 2, maximum atteint pour ωt = π/3, d’où 2 cos(ωt − π/3).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDQuMjIiIHkxPSIyOCIgeDI9IjQ0LjIyIiB5Mj0iMjcyIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijg0Ljc3IiB5MT0iMjgiIHgyPSI4NC43NyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMjUuMzIiIHkxPSIyOCIgeDI9IjEyNS4zMiIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjUuODciIHkxPSIyOCIgeDI9IjE2NS44NyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMDYuNDIiIHkxPSIyOCIgeDI9IjIwNi40MiIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNDYuOTciIHkxPSIyOCIgeDI9IjI0Ni45NyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODcuNTIiIHkxPSIyOCIgeDI9IjI4Ny41MiIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMjguMDciIHkxPSIyOCIgeDI9IjMyOC4wNyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNjguNjIiIHkxPSIyOCIgeDI9IjM2OC42MiIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MDkuMTciIHkxPSIyOCIgeDI9IjQwOS4xNyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NDkuNzIiIHkxPSIyOCIgeDI9IjQ0OS43MiIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0OTAuMjciIHkxPSIyOCIgeDI9IjQ5MC4yNyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MzAuODIiIHkxPSIyOCIgeDI9IjUzMC44MiIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NzEuMzciIHkxPSIyOCIgeDI9IjU3MS4zNyIgeTI9IjI3MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjI0OC4wOCIgeDI9IjU5MiIgeTI9IjI0OC4wOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIwMC4yNCIgeDI9IjU5MiIgeTI9IjIwMC4yNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjE1Mi4zOSIgeDI9IjU5MiIgeTI9IjE1Mi4zOSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjEwNC41NSIgeDI9IjU5MiIgeTI9IjEwNC41NSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjU2LjcxIiB4Mj0iNTkyIiB5Mj0iNTYuNzEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjgiIHkxPSIxNTIuMzkiIHgyPSI1OTEiIHkyPSIxNTIuMzkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjAwLDE1Mi4zOSA1OTEsMTQ3Ljg5IDU5MSwxNTYuODkiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNDQuMjIiIHkxPSIyNzIiIHgyPSI0NC4yMiIgeTI9IjI5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0LjIyLDIwIDM5LjcyLDI5IDQ4LjcyLDI5IiBmaWxsPSIjOGE5OWE4Ii8+PHRleHQgeD0iNTk2IiB5PSIxNzAuMzkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+z4l0PC90ZXh0Pjx0ZXh0IHg9IjMyLjIyIiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PGxpbmUgeDE9IjE3MS42MSIgeTE9IjE0OC4zOSIgeDI9IjE3MS42MSIgeTI9IjE1Ni4zOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTcxLjYxIiB5PSIxNjkuMzkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPs+APC90ZXh0PjxsaW5lIHgxPSIyOTkiIHkxPSIxNDguMzkiIHgyPSIyOTkiIHkyPSIxNTYuMzkiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI5OSIgeT0iMTY5LjM5IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yz4A8L3RleHQ+PGxpbmUgeDE9IjQyNi4zOSIgeTE9IjE0OC4zOSIgeDI9IjQyNi4zOSIgeTI9IjE1Ni4zOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDI2LjM5IiB5PSIxNjkuMzkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjPPgDwvdGV4dD48bGluZSB4MT0iNTUzLjc4IiB5MT0iMTQ4LjM5IiB4Mj0iNTUzLjc4IiB5Mj0iMTU2LjM5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NTMuNzgiIHk9IjE2OS4zOSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+NM+APC90ZXh0PjxsaW5lIHgxPSI4Ni42OCIgeTE9IjE0OC4zOSIgeDI9Ijg2LjY4IiB5Mj0iMTU2LjM5IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI4Ni42OCIgeT0iMTY5LjM5IiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7PgC8zPC90ZXh0PjxsaW5lIHgxPSI0MC4yMiIgeTE9IjU2LjcxIiB4Mj0iNDguMjIiIHkyPSI1Ni43MSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzcuMjIiIHk9IjYwLjcxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4yPC90ZXh0PjxsaW5lIHgxPSI0MC4yMiIgeTE9IjEwNC41NSIgeDI9IjQ4LjIyIiB5Mj0iMTA0LjU1IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNy4yMiIgeT0iMTA4LjU1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj4xPC90ZXh0PjxsaW5lIHgxPSI0MC4yMiIgeTE9IjIwMC4yNCIgeDI9IjQ4LjIyIiB5Mj0iMjAwLjI0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNy4yMiIgeT0iMjA0LjI0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIxPC90ZXh0PjxsaW5lIHgxPSI0MC4yMiIgeTE9IjI0OC4wOCIgeDI9IjQ4LjIyIiB5Mj0iMjQ4LjA4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNy4yMiIgeT0iMjUyLjA4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJIyPC90ZXh0Pjx0ZXh0IHg9IjM2LjIyIiB5PSIxNjguMzkiIGZvbnQtc2l6ZT0iMTEiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGNsaXBQYXRoIGlkPSJ6b25lIj48cmVjdCB4PSIyOCIgeT0iMjgiIHdpZHRoPSI1NjQiIGhlaWdodD0iMjQ0Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjem9uZSkiPjxsaW5lIHgxPSI4Ni42OCIgeTE9IjE1Mi4zOSIgeDI9Ijg2LjY4IiB5Mj0iNTYuNzEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQ0LjIgMTA0LjVMNDcgMTA0LjdMNDkuNyAxMDVMNTIuNCAxMDUuNUw1NS4yIDEwNi4zTDU3LjkgMTA3LjNMNjAuNyAxMDguNEw2My40IDEwOS44TDY2LjEgMTExLjRMNjguOSAxMTMuMUw3MS42IDExNS4xTDc0LjMgMTE3LjJMNzcuMSAxMTkuNEw3OS44IDEyMS44TDgyLjYgMTI0LjRMODUuMyAxMjcuMUw4OCAxMjkuOUw5MC44IDEzMi44TDkzLjUgMTM1LjhMOTYuMyAxMzguOEw5OSAxNDJMMTAxLjcgMTQ1LjFMMTA0LjUgMTQ4LjNMMTA3LjIgMTUxLjZMMTEwIDE1NC44TDExMi43IDE1OEwxMTUuNCAxNjEuMkwxMTguMiAxNjQuNEwxMjAuOSAxNjcuNUwxMjMuNiAxNzAuNUwxMjYuNCAxNzMuNEwxMjkuMSAxNzYuM0wxMzEuOSAxNzlMMTM0LjYgMTgxLjdMMTM3LjMgMTg0LjFMMTQwLjEgMTg2LjVMMTQyLjggMTg4LjdMMTQ1LjYgMTkwLjdMMTQ4LjMgMTkyLjVMMTUxIDE5NC4yTDE1My44IDE5NS43TDE1Ni41IDE5N0wxNTkuMyAxOThMMTYyIDE5OC45TDE2NC43IDE5OS41TDE2Ny41IDIwMEwxNzAuMiAyMDAuMkwxNzIuOSAyMDAuMkwxNzUuNyAyMDBMMTc4LjQgMTk5LjZMMTgxLjIgMTk4LjlMMTgzLjkgMTk4LjFMMTg2LjYgMTk3TDE4OS40IDE5NS43TDE5Mi4xIDE5NC4yTDE5NC45IDE5Mi42TDE5Ny42IDE5MC43TDIwMC4zIDE4OC43TDIwMy4xIDE4Ni41TDIwNS44IDE4NC4yTDIwOC42IDE4MS43TDIxMS4zIDE3OS4xTDIxNCAxNzYuNEwyMTYuOCAxNzMuNUwyMTkuNSAxNzAuNkwyMjIuMiAxNjcuNUwyMjUgMTY0LjRMMjI3LjcgMTYxLjNMMjMwLjUgMTU4LjFMMjMzLjIgMTU0LjlMMjM1LjkgMTUxLjZMMjM4LjcgMTQ4LjRMMjQxLjQgMTQ1LjJMMjQ0LjIgMTQyTDI0Ni45IDEzOC45TDI0OS42IDEzNS44TDI1Mi40IDEzMi44TDI1NS4xIDEyOS45TDI1Ny45IDEyNy4xTDI2MC42IDEyNC41TDI2My4zIDEyMS45TDI2Ni4xIDExOS41TDI2OC44IDExNy4yTDI3MS41IDExNS4xTDI3NC4zIDExMy4yTDI3NyAxMTEuNEwyNzkuOCAxMDkuOEwyODIuNSAxMDguNUwyODUuMiAxMDcuM0wyODggMTA2LjNMMjkwLjcgMTA1LjVMMjkzLjUgMTA1TDI5Ni4yIDEwNC43TDI5OC45IDEwNC41TDMwMS43IDEwNC43TDMwNC40IDEwNUwzMDcuMiAxMDUuNUwzMDkuOSAxMDYuM0wzMTIuNiAxMDcuMkwzMTUuNCAxMDguNEwzMTguMSAxMDkuOEwzMjAuOCAxMTEuM0wzMjMuNiAxMTMuMUwzMjYuMyAxMTVMMzI5LjEgMTE3LjFMMzMxLjggMTE5LjRMMzM0LjUgMTIxLjhMMzM3LjMgMTI0LjNMMzQwIDEyN0wzNDIuOCAxMjkuOEwzNDUuNSAxMzIuN0wzNDguMiAxMzUuN0wzNTEgMTM4LjhMMzUzLjcgMTQxLjlMMzU2LjUgMTQ1LjFMMzU5LjIgMTQ4LjNMMzYxLjkgMTUxLjVMMzY0LjcgMTU0LjdMMzY3LjQgMTU3LjlMMzcwLjEgMTYxLjFMMzcyLjkgMTY0LjNMMzc1LjYgMTY3LjRMMzc4LjQgMTcwLjRMMzgxLjEgMTczLjRMMzgzLjggMTc2LjJMMzg2LjYgMTc5TDM4OS4zIDE4MS42TDM5Mi4xIDE4NC4xTDM5NC44IDE4Ni40TDM5Ny41IDE4OC42TDQwMC4zIDE5MC43TDQwMyAxOTIuNUw0MDUuOCAxOTQuMkw0MDguNSAxOTUuNkw0MTEuMiAxOTYuOUw0MTQgMTk4TDQxNi43IDE5OC45TDQxOS40IDE5OS41TDQyMi4yIDIwMEw0MjQuOSAyMDAuMkw0MjcuNyAyMDAuMkw0MzAuNCAyMDBMNDMzLjEgMTk5LjZMNDM1LjkgMTk4LjlMNDM4LjYgMTk4LjFMNDQxLjQgMTk3TDQ0NC4xIDE5NS43TDQ0Ni44IDE5NC4zTDQ0OS42IDE5Mi42TDQ1Mi4zIDE5MC44TDQ1NS4xIDE4OC44TDQ1Ny44IDE4Ni42TDQ2MC41IDE4NC4zTDQ2My4zIDE4MS44TDQ2NiAxNzkuMkw0NjguNyAxNzYuNEw0NzEuNSAxNzMuNkw0NzQuMiAxNzAuNkw0NzcgMTY3LjZMNDc5LjcgMTY0LjVMNDgyLjQgMTYxLjRMNDg1LjIgMTU4LjJMNDg3LjkgMTU0LjlMNDkwLjcgMTUxLjdMNDkzLjQgMTQ4LjVMNDk2LjEgMTQ1LjNMNDk4LjkgMTQyLjFMNTAxLjYgMTM5TDUwNC40IDEzNS45TDUwNy4xIDEzMi45TDUwOS44IDEzMEw1MTIuNiAxMjcuMkw1MTUuMyAxMjQuNUw1MTggMTIyTDUyMC44IDExOS41TDUyMy41IDExNy4zTDUyNi4zIDExNS4xTDUyOSAxMTMuMkw1MzEuNyAxMTEuNEw1MzQuNSAxMDkuOUw1MzcuMiAxMDguNUw1NDAgMTA3LjNMNTQyLjcgMTA2LjNMNTQ1LjQgMTA1LjZMNTQ4LjIgMTA1TDU1MC45IDEwNC43TDU1My43IDEwNC41TDU1Ni40IDEwNC42TDU1OS4xIDEwNUw1NjEuOSAxMDUuNUw1NjQuNiAxMDYuMkw1NjcuMyAxMDcuMkw1NzAuMSAxMDguNEw1NzIuOCAxMDkuN0w1NzUuNiAxMTEuM0w1NzguMyAxMTNMNTgxIDExNUw1ODMuOCAxMTcuMUw1ODYuNSAxMTkuM0w1ODkuMyAxMjEuN0w1OTIgMTI0LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjcgNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQ0LjIgMTUyLjRMNDcgMTQ2LjhMNDkuNyAxNDEuMkw1Mi40IDEzNS43TDU1LjIgMTMwLjNMNTcuOSAxMjQuOUw2MC43IDExOS43TDYzLjQgMTE0LjdMNjYuMSAxMDkuOEw2OC45IDEwNS4xTDcxLjYgMTAwLjZMNzQuMyA5Ni4zTDc3LjEgOTIuM0w3OS44IDg4LjZMODIuNiA4NS4yTDg1LjMgODIuMUw4OCA3OS4zTDkwLjggNzYuOEw5My41IDc0LjdMOTYuMyA3Mi45TDk5IDcxLjVMMTAxLjcgNzAuNUwxMDQuNSA2OS44TDEwNy4yIDY5LjVMMTEwIDY5LjZMMTEyLjcgNzAuMUwxMTUuNCA3MC45TDExOC4yIDcyLjJMMTIwLjkgNzMuN0wxMjMuNiA3NS43TDEyNi40IDc4TDEyOS4xIDgwLjZMMTMxLjkgODMuNkwxMzQuNiA4Ni44TDEzNy4zIDkwLjRMMTQwLjEgOTQuM0wxNDIuOCA5OC40TDE0NS42IDEwMi43TDE0OC4zIDEwNy4zTDE1MSAxMTIuMUwxNTMuOCAxMTcuMUwxNTYuNSAxMjIuM0wxNTkuMyAxMjcuNUwxNjIgMTMyLjlMMTY0LjcgMTM4LjRMMTY3LjUgMTQzLjlMMTcwLjIgMTQ5LjVMMTcyLjkgMTU1LjFMMTc1LjcgMTYwLjdMMTc4LjQgMTY2LjNMMTgxLjIgMTcxLjdMMTgzLjkgMTc3LjFMMTg2LjYgMTgyLjRMMTg5LjQgMTg3LjZMMTkyLjEgMTkyLjVMMTk0LjkgMTk3LjNMMTk3LjYgMjAxLjlMMjAwLjMgMjA2LjNMMjAzLjEgMjEwLjRMMjA1LjggMjE0LjNMMjA4LjYgMjE3LjlMMjExLjMgMjIxLjFMMjE0IDIyNC4xTDIxNi44IDIyNi44TDIxOS41IDIyOS4xTDIyMi4yIDIzMUwyMjUgMjMyLjZMMjI3LjcgMjMzLjhMMjMwLjUgMjM0LjdMMjMzLjIgMjM1LjFMMjM1LjkgMjM1LjJMMjM4LjcgMjM1TDI0MS40IDIzNC4zTDI0NC4yIDIzMy4zTDI0Ni45IDIzMS45TDI0OS42IDIzMC4xTDI1Mi40IDIyOEwyNTUuMSAyMjUuNkwyNTcuOSAyMjIuOEwyNjAuNiAyMTkuN0wyNjMuMyAyMTYuMkwyNjYuMSAyMTIuNUwyNjguOCAyMDguNUwyNzEuNSAyMDQuM0wyNzQuMyAxOTkuOEwyNzcgMTk1LjFMMjc5LjggMTkwLjJMMjgyLjUgMTg1LjJMMjg1LjIgMTgwTDI4OCAxNzQuNkwyOTAuNyAxNjkuMkwyOTMuNSAxNjMuN0wyOTYuMiAxNTguMUwyOTguOSAxNTIuNUwzMDEuNyAxNDYuOUwzMDQuNCAxNDEuNEwzMDcuMiAxMzUuOEwzMDkuOSAxMzAuNEwzMTIuNiAxMjUuMUwzMTUuNCAxMTkuOEwzMTguMSAxMTQuOEwzMjAuOCAxMDkuOUwzMjMuNiAxMDUuMkwzMjYuMyAxMDAuN0wzMjkuMSA5Ni40TDMzMS44IDkyLjRMMzM0LjUgODguN0wzMzcuMyA4NS4zTDM0MCA4Mi4xTDM0Mi44IDc5LjNMMzQ1LjUgNzYuOUwzNDguMiA3NC43TDM1MSA3M0wzNTMuNyA3MS41TDM1Ni41IDcwLjVMMzU5LjIgNjkuOEwzNjEuOSA2OS41TDM2NC43IDY5LjZMMzY3LjQgNzAuMUwzNzAuMSA3MC45TDM3Mi45IDcyLjFMMzc1LjYgNzMuN0wzNzguNCA3NS42TDM4MS4xIDc3LjlMMzgzLjggODAuNUwzODYuNiA4My41TDM4OS4zIDg2LjhMMzkyLjEgOTAuM0wzOTQuOCA5NC4yTDM5Ny41IDk4LjNMNDAwLjMgMTAyLjZMNDAzIDEwNy4yTDQwNS44IDExMkw0MDguNSAxMTdMNDExLjIgMTIyLjFMNDE0IDEyNy40TDQxNi43IDEzMi44TDQxOS40IDEzOC4zTDQyMi4yIDE0My44TDQyNC45IDE0OS40TDQyNy43IDE1NUw0MzAuNCAxNjAuNkw0MzMuMSAxNjYuMUw0MzUuOSAxNzEuNkw0MzguNiAxNzdMNDQxLjQgMTgyLjNMNDQ0LjEgMTg3LjRMNDQ2LjggMTkyLjRMNDQ5LjYgMTk3LjJMNDUyLjMgMjAxLjhMNDU1LjEgMjA2LjJMNDU3LjggMjEwLjNMNDYwLjUgMjE0LjJMNDYzLjMgMjE3LjhMNDY2IDIyMS4xTDQ2OC43IDIyNEw0NzEuNSAyMjYuN0w0NzQuMiAyMjlMNDc3IDIzMUw0NzkuNyAyMzIuNkw0ODIuNCAyMzMuOEw0ODUuMiAyMzQuN0w0ODcuOSAyMzUuMUw0OTAuNyAyMzUuM0w0OTMuNCAyMzVMNDk2LjEgMjM0LjNMNDk4LjkgMjMzLjNMNTAxLjYgMjMxLjlMNTA0LjQgMjMwLjJMNTA3LjEgMjI4LjFMNTA5LjggMjI1LjZMNTEyLjYgMjIyLjhMNTE1LjMgMjE5LjdMNTE4IDIxNi4zTDUyMC44IDIxMi42TDUyMy41IDIwOC42TDUyNi4zIDIwNC40TDUyOSAxOTkuOUw1MzEuNyAxOTUuMkw1MzQuNSAxOTAuNEw1MzcuMiAxODUuM0w1NDAgMTgwLjFMNTQyLjcgMTc0LjhMNTQ1LjQgMTY5LjNMNTQ4LjIgMTYzLjhMNTUwLjkgMTU4LjJMNTUzLjcgMTUyLjdMNTU2LjQgMTQ3LjFMNTU5LjEgMTQxLjVMNTYxLjkgMTM2TDU2NC42IDEzMC41TDU2Ny4zIDEyNS4yTDU3MC4xIDEyMEw1NzIuOCAxMTQuOUw1NzUuNiAxMTBMNTc4LjMgMTA1LjNMNTgxIDEwMC44TDU4My44IDk2LjVMNTg2LjUgOTIuNUw1ODkuMyA4OC44TDU5MiA4NS40IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtZGFzaGFycmF5PSI3IDUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik00NC4yIDEwNC41TDQ3IDk5LjFMNDkuNyA5My44TDUyLjQgODguOUw1NS4yIDg0LjJMNTcuOSA3OS44TDYwLjcgNzUuOEw2My40IDcyLjFMNjYuMSA2OC43TDY4LjkgNjUuOEw3MS42IDYzLjJMNzQuMyA2MS4xTDc3LjEgNTkuNEw3OS44IDU4LjFMODIuNiA1Ny4yTDg1LjMgNTYuOEw4OCA1Ni44TDkwLjggNTcuMkw5My41IDU4LjFMOTYuMyA1OS40TDk5IDYxLjFMMTAxLjcgNjMuMkwxMDQuNSA2NS44TDEwNy4yIDY4LjdMMTEwIDcyTDExMi43IDc1LjdMMTE1LjQgNzkuOEwxMTguMiA4NC4xTDEyMC45IDg4LjhMMTIzLjYgOTMuOEwxMjYuNCA5OUwxMjkuMSAxMDQuNUwxMzEuOSAxMTAuMkwxMzQuNiAxMTYuMUwxMzcuMyAxMjIuMkwxNDAuMSAxMjguNEwxNDIuOCAxMzQuN0wxNDUuNiAxNDFMMTQ4LjMgMTQ3LjVMMTUxIDE1My45TDE1My44IDE2MC40TDE1Ni41IDE2Ni44TDE1OS4zIDE3My4yTDE2MiAxNzkuNEwxNjQuNyAxODUuNkwxNjcuNSAxOTEuNUwxNzAuMiAxOTcuM0wxNzIuOSAyMDIuOUwxNzUuNyAyMDguM0wxNzguNCAyMTMuNEwxODEuMiAyMTguM0wxODMuOSAyMjIuOEwxODYuNiAyMjdMMTg5LjQgMjMwLjlMMTkyLjEgMjM0LjRMMTk0LjkgMjM3LjVMMTk3LjYgMjQwLjNMMjAwLjMgMjQyLjZMMjAzLjEgMjQ0LjZMMjA1LjggMjQ2LjFMMjA4LjYgMjQ3LjJMMjExLjMgMjQ3LjlMMjE0IDI0OC4xTDIxNi44IDI0Ny45TDIxOS41IDI0Ny4yTDIyMi4yIDI0Ni4xTDIyNSAyNDQuNkwyMjcuNyAyNDIuN0wyMzAuNSAyNDAuNEwyMzMuMiAyMzcuNkwyMzUuOSAyMzQuNUwyMzguNyAyMzFMMjQxLjQgMjI3LjFMMjQ0LjIgMjIyLjlMMjQ2LjkgMjE4LjRMMjQ5LjYgMjEzLjZMMjUyLjQgMjA4LjVMMjU1LjEgMjAzLjFMMjU3LjkgMTk3LjVMMjYwLjYgMTkxLjdMMjYzLjMgMTg1LjdMMjY2LjEgMTc5LjZMMjY4LjggMTczLjRMMjcxLjUgMTY3TDI3NC4zIDE2MC42TDI3NyAxNTQuMUwyNzkuOCAxNDcuN0wyODIuNSAxNDEuMkwyODUuMiAxMzQuOUwyODggMTI4LjVMMjkwLjcgMTIyLjNMMjkzLjUgMTE2LjNMMjk2LjIgMTEwLjRMMjk4LjkgMTA0LjdMMzAxLjcgOTkuMkwzMDQuNCA5My45TDMwNy4yIDg5TDMwOS45IDg0LjNMMzEyLjYgNzkuOUwzMTUuNCA3NS44TDMxOC4xIDcyLjFMMzIwLjggNjguOEwzMjMuNiA2NS45TDMyNi4zIDYzLjNMMzI5LjEgNjEuMUwzMzEuOCA1OS40TDMzNC41IDU4LjFMMzM3LjMgNTcuMkwzNDAgNTYuOEwzNDIuOCA1Ni44TDM0NS41IDU3LjJMMzQ4LjIgNThMMzUxIDU5LjNMMzUzLjcgNjFMMzU2LjUgNjMuMkwzNTkuMiA2NS43TDM2MS45IDY4LjZMMzY0LjcgNzJMMzY3LjQgNzUuNkwzNzAuMSA3OS43TDM3Mi45IDg0TDM3NS42IDg4LjdMMzc4LjQgOTMuN0wzODEuMSA5OC45TDM4My44IDEwNC40TDM4Ni42IDExMC4xTDM4OS4zIDExNkwzOTIuMSAxMjJMMzk0LjggMTI4LjJMMzk3LjUgMTM0LjVMNDAwLjMgMTQwLjlMNDAzIDE0Ny4zTDQwNS44IDE1My44TDQwOC41IDE2MC4yTDQxMS4yIDE2Ni43TDQxNCAxNzNMNDE2LjcgMTc5LjNMNDE5LjQgMTg1LjRMNDIyLjIgMTkxLjRMNDI0LjkgMTk3LjJMNDI3LjcgMjAyLjhMNDMwLjQgMjA4LjJMNDMzLjEgMjEzLjNMNDM1LjkgMjE4LjFMNDM4LjYgMjIyLjdMNDQxLjQgMjI2LjlMNDQ0LjEgMjMwLjhMNDQ2LjggMjM0LjNMNDQ5LjYgMjM3LjVMNDUyLjMgMjQwLjJMNDU1LjEgMjQyLjZMNDU3LjggMjQ0LjVMNDYwLjUgMjQ2LjFMNDYzLjMgMjQ3LjJMNDY2IDI0Ny44TDQ2OC43IDI0OC4xTDQ3MS41IDI0Ny45TDQ3NC4yIDI0Ny4yTDQ3NyAyNDYuMkw0NzkuNyAyNDQuN0w0ODIuNCAyNDIuOEw0ODUuMiAyNDAuNEw0ODcuOSAyMzcuN0w0OTAuNyAyMzQuNkw0OTMuNCAyMzEuMUw0OTYuMSAyMjcuMkw0OTguOSAyMjNMNTAxLjYgMjE4LjVMNTA0LjQgMjEzLjdMNTA3LjEgMjA4LjZMNTA5LjggMjAzLjJMNTEyLjYgMTk3LjdMNTE1LjMgMTkxLjlMNTE4IDE4NS45TDUyMC44IDE3OS44TDUyMy41IDE3My41TDUyNi4zIDE2Ny4yTDUyOSAxNjAuN0w1MzEuNyAxNTQuM0w1MzQuNSAxNDcuOEw1MzcuMiAxNDEuNEw1NDAgMTM1TDU0Mi43IDEyOC43TDU0NS40IDEyMi41TDU0OC4yIDExNi40TDU1MC45IDExMC41TDU1My43IDEwNC44TDU1Ni40IDk5LjNMNTU5LjEgOTQuMUw1NjEuOSA4OS4xTDU2NC42IDg0LjRMNTY3LjMgODBMNTcwLjEgNzUuOUw1NzIuOCA3Mi4yTDU3NS42IDY4LjlMNTc4LjMgNjUuOUw1ODEgNjMuNEw1ODMuOCA2MS4yTDU4Ni41IDU5LjRMNTg5LjMgNTguMUw1OTIgNTcuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48dGV4dCB4PSI2MDAiIHk9IjI0IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5jb3Moz4l0KSArIOKImjMgc2luKM+JdCkgPSAyIGNvcyjPiXQg4oiSIM+ALzMpPC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMjkwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5wb2ludGlsbMOpcyA6IGNvcyjPiXQpIGVuIHZlcnQsIOKImjMgc2luKM+JdCkgZW4gb3JhbmdlPC90ZXh0Pjwvc3ZnPg==)
*La somme cos(ωt) + √3 sin(ωt) (en bleu) est une seule sinusoïde : amplitude A = 2, maximum atteint pour ωt = π/3, d’où 2 cos(ωt − π/3).*
<!-- /schema -->

Un signal sinusoïdal se présente souvent comme une somme
$a\cos(\omega t) + b\sin(\omega t)$. Physiquement, c'est **une seule**
sinusoïde : il existe $A > 0$ et $\varphi$ tels que

$$\boxed{a\cos(\omega t) + b\sin(\omega t) = A\cos(\omega t + \varphi)}
\qquad \text{avec } A = \sqrt{a^2 + b^2}$$

$A$ est l'**amplitude**, $\varphi$ la **phase à l'origine**.

### Méthode (identification)

1. Développer la cible avec la formule d'addition :
   $A\cos(\omega t + \varphi) = A\cos\varphi\,\cos(\omega t) - A\sin\varphi\,\sin(\omega t)$.
2. Identifier les coefficients de $\cos(\omega t)$ et $\sin(\omega t)$ :
   $A\cos\varphi = a$ et $-A\sin\varphi = b$.
3. D'où $A = \sqrt{a^2+b^2}$, puis $\cos\varphi = \dfrac{a}{A}$ **et**
   $\sin\varphi = -\dfrac{b}{A}$, qui déterminent $\varphi$.

> **Exemple.** $u(t) = \cos(\omega t) + \sqrt{3}\sin(\omega t)$.
> $A = \sqrt{1 + 3} = 2$, puis $\cos\varphi = \dfrac{1}{2}$ et
> $\sin\varphi = -\dfrac{\sqrt3}{2}$, donc $\varphi = -\dfrac{\pi}{3}$ :
>
> $$u(t) = 2\cos\!\left(\omega t - \frac{\pi}{3}\right)$$
>
> Vérification par développement : $2\left[\cos\omega t\cos\dfrac{\pi}{3}
> + \sin\omega t\sin\dfrac{\pi}{3}\right] = \cos\omega t + \sqrt3\sin\omega t$ ✓.

**Lecture complexe** : $a\cos(\omega t) + b\sin(\omega t)$ est la partie réelle
de $(a - \mathrm{i}b)\,\mathrm{e}^{\mathrm{i}\omega t}$ ; écrire
$a - \mathrm{i}b = A\,\mathrm{e}^{\mathrm{i}\varphi}$ donne directement
$A$ et $\varphi$. C'est le principe des **vecteurs de Fresnel** et des
impédances complexes vus en physique.

> ⚠️ **Le signe de $\sin\varphi$ est le piège n°1** : $\sin\varphi = -\dfrac{b}{A}$,
> avec un **moins**, parce que le développement de $\cos(\omega t + \varphi)$
> fait apparaître $-\sin\varphi\sin(\omega t)$.

---

## 8. Équations dans $\mathbb{C}$

### Premier degré

Comme dans $\mathbb{R}$ : isoler $z$, puis mettre le quotient sous forme
algébrique avec le conjugué.

> **Exemple.** $(1+\mathrm{i})z = 4\mathrm{i}$ donne
> $z = \dfrac{4\mathrm{i}}{1+\mathrm{i}} = \dfrac{4\mathrm{i}(1-\mathrm{i})}{2} = 2 + 2\mathrm{i}$.

### Équation $z^2 = a$, avec $a$ réel

| Cas | Solutions dans $\mathbb{C}$ |
|---|---|
| $a > 0$ | $z = \sqrt{a}$ ou $z = -\sqrt{a}$ |
| $a = 0$ | $z = 0$ (unique) |
| $a < 0$ | $\boxed{z = \mathrm{i}\sqrt{-a} \ \text{ou} \ z = -\mathrm{i}\sqrt{-a}}$ |

> **Exemple.** $z^2 = -16$ : les solutions sont $4\mathrm{i}$ et $-4\mathrm{i}$.
> Vérification : $(4\mathrm{i})^2 = 16\,\mathrm{i}^2 = -16$ ✓.

> ⚠️ Dans $\mathbb{C}$, une équation $z^2 = a$ avec $a \neq 0$ a **toujours deux
> solutions opposées** — même quand $a < 0$. Et on n'écrit JAMAIS $\sqrt{-16}$ :
> le symbole $\sqrt{\ }$ est réservé aux réels positifs.

---

## 9. Interprétation géométrique de $z \mapsto z + b$ et $z \mapsto az$

Dans le plan complexe, à chaque transformation de l'écriture correspond une
transformation géométrique.

### $z \mapsto z + b$ : translation

Ajouter $b$ à l'affixe **translate** le point : $M(z) \mapsto M'(z + b)$ est la
**translation de vecteur d'affixe $b$**.

> **Exemple.** $z \mapsto z + 3 - 2\mathrm{i}$ décale tout point de $3$ vers la
> droite et de $2$ vers le bas.

### $z \mapsto az$ (avec $a = r\,\mathrm{e}^{\mathrm{i}\theta} \neq 0$)

<!-- schema:rotation-iz -->
![Multiplier par i, c’est faire tourner d’un quart de tour direct autour de O : le point M d’affixe 1 + i a pour image M′ d’affixe i(1 + i) = −1 + i.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjkyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyOTIiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDUuNDUiIHkxPSIyOCIgeDI9IjQ1LjQ1IiB5Mj0iMjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzMi43MyIgeTE9IjI4IiB4Mj0iMTMyLjczIiB5Mj0iMjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIyMCIgeTE9IjI4IiB4Mj0iMjIwIiB5Mj0iMjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMwNy4yNyIgeTE9IjI4IiB4Mj0iMzA3LjI3IiB5Mj0iMjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM5NC41NSIgeTE9IjI4IiB4Mj0iMzk0LjU1IiB5Mj0iMjY0IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMjExLjU2IiB4Mj0iNDEyIiB5Mj0iMjExLjU2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMTI0LjE1IiB4Mj0iNDEyIiB5Mj0iMTI0LjE1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI4IiB5MT0iMzYuNzQiIHgyPSI0MTIiIHkyPSIzNi43NCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyOCIgeTE9IjIxMS41NiIgeDI9IjQxMSIgeTI9IjIxMS41NiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MjAsMjExLjU2IDQxMSwyMDcuMDYgNDExLDIxNi4wNiIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSIyMjAiIHkxPSIyNjQiIHgyPSIyMjAiIHkyPSIyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMjAsMjAgMjE1LjUsMjkgMjI0LjUsMjkiIGZpbGw9IiM4YTk5YTgiLz48dGV4dCB4PSI0MTYiIHk9IjIyOS41NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iMjA4IiB5PSIyNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj48L3RleHQ+PHRleHQgeD0iNDUuNDUiIHk9IjIyNy41NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMjwvdGV4dD48dGV4dCB4PSIxMzIuNzMiIHk9IjIyNy41NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSMTwvdGV4dD48dGV4dCB4PSIzMDcuMjciIHk9IjIyNy41NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIzOTQuNTUiIHk9IjIyNy41NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MjwvdGV4dD48dGV4dCB4PSIyMTQiIHk9IjEyOC4xNSIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+MTwvdGV4dD48dGV4dCB4PSIyMTIiIHk9IjIyNy41NiIgZm9udC1zaXplPSIxMSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48Y2xpcFBhdGggaWQ9InpvbmUiPjxyZWN0IHg9IjI4IiB5PSIyOCIgd2lkdGg9IjM4NCIgaGVpZ2h0PSIyMzYiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCN6b25lKSI+PC9nPjxwYXRoIGQ9Ik0gMjYyLjQzIDE2OS4xMyBMIDI2MC43MyAxNjcuNSBMIDI1OC45NyAxNjUuOTMgTCAyNTcuMTUgMTY0LjQ0IEwgMjU1LjI3IDE2My4wMSBMIDI1My4zMyAxNjEuNjcgTCAyNTEuMzUgMTYwLjQgTCAyNDkuMzIgMTU5LjIxIEwgMjQ3LjI0IDE1OC4xIEwgMjQ1LjEyIDE1Ny4wNyBMIDI0Mi45NiAxNTYuMTIgTCAyNDAuNzcgMTU1LjI2IEwgMjM4LjU0IDE1NC40OSBMIDIzNi4yOSAxNTMuODEgTCAyMzQuMDEgMTUzLjIxIEwgMjMxLjcxIDE1Mi43MSBMIDIyOS4zOSAxNTIuMjkgTCAyMjcuMDUgMTUxLjk3IEwgMjI0LjcxIDE1MS43NCBMIDIyMi4zNiAxNTEuNiBMIDIyMCAxNTEuNTYgTCAyMTcuNjQgMTUxLjYgTCAyMTUuMjkgMTUxLjc0IEwgMjEyLjk1IDE1MS45NyBMIDIxMC42MSAxNTIuMjkgTCAyMDguMjkgMTUyLjcxIEwgMjA1Ljk5IDE1My4yMSBMIDIwMy43MSAxNTMuODEgTCAyMDEuNDYgMTU0LjQ5IEwgMTk5LjIzIDE1NS4yNiBMIDE5Ny4wNCAxNTYuMTIgTCAxOTQuODggMTU3LjA3IEwgMTkyLjc2IDE1OC4xIEwgMTkwLjY4IDE1OS4yMSBMIDE4OC42NSAxNjAuNCBMIDE4Ni42NyAxNjEuNjcgTCAxODQuNzMgMTYzLjAxIEwgMTgyLjg1IDE2NC40NCBMIDE4MS4wMyAxNjUuOTMgTCAxNzkuMjcgMTY3LjUgTCAxNzcuNTcgMTY5LjEzIiBmaWxsPSJub25lIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PGxpbmUgeDE9IjE4MS4wMyIgeTE9IjE2NS45MyIgeDI9IjE4NC4xOCIgeTI9IjE2My4wMiIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNzcuNTcsMTY5LjEzIDE4Ny4yNCwxNjYuMzIgMTgxLjEzLDE1OS43MiIgZmlsbD0iI2MyNWUwMCIvPjxwYXRoIGQ9Ik0gMjI4LjQ4IDIwMy4wNiBMIDIyMCAxOTQuNTcgTCAyMTEuNTIgMjAzLjA2IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PGxpbmUgeDE9IjIyMCIgeTE9IjIxMS41NiIgeDI9IjI5OS41IiB5Mj0iMTMxLjkzIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwNy4yNywxMjQuMTUgMjk1LjYxLDEyOC4wNSAzMDMuMzksMTM1LjgyIiBmaWxsPSIjMWY2ZmViIi8+PGxpbmUgeDE9IjIyMCIgeTE9IjIxMS41NiIgeDI9IjE0MC41IiB5Mj0iMTMxLjkzIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEzMi43MywxMjQuMTUgMTM2LjYxLDEzNS44MiAxNDQuMzksMTI4LjA1IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iMzA3LjI3IiBjeT0iMTI0LjE1IiByPSI0IiBmaWxsPSIjMWY2ZmViIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjMxOS4yNyIgeT0iMTE4LjE1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPk0gOiAxICsgaTwvdGV4dD48Y2lyY2xlIGN4PSIxMzIuNzMiIGN5PSIxMjQuMTUiIHI9IjQiIGZpbGw9IiNjMDJhMmEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHRleHQgeD0iMTIwLjczIiB5PSIxMTguMTUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPk3igLIgOiDiiJIxICsgaTwvdGV4dD48dGV4dCB4PSIyMjAiIHk9Ijg0LjgxIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj5xdWFydCBkZSB0b3VyPC90ZXh0Pjwvc3ZnPg==)
*Multiplier par i, c’est faire tourner d’un quart de tour direct autour de O : le point M d’affixe 1 + i a pour image M′ d’affixe i(1 + i) = −1 + i.*
<!-- /schema -->

Multiplier par $a$ **multiplie le module par $r$** et **ajoute $\theta$ à
l'argument** :

| Valeur de $a$ | Transformation |
|---|---|
| $a = \mathrm{e}^{\mathrm{i}\theta}$ (module $1$) | **rotation** de centre $O$ et d'angle $\theta$ |
| $a = r$ réel, $r > 0$ | **homothétie** de centre $O$ et de rapport $r$ |
| $a = r\,\mathrm{e}^{\mathrm{i}\theta}$ quelconque | rotation d'angle $\theta$ **suivie de** l'homothétie de rapport $r$ (centre $O$) |

> **Exemple.** $z \mapsto \mathrm{i}z$ : comme $\mathrm{i} = \mathrm{e}^{\mathrm{i}\pi/2}$,
> c'est la **rotation de centre $O$ et d'angle $\dfrac{\pi}{2}$** (quart de tour
> direct). Ainsi $1 + \mathrm{i} \mapsto \mathrm{i}(1+\mathrm{i}) = -1 + \mathrm{i}$.

---

## 10. À retenir absolument

| | |
|---|---|
| Exponentielle complexe | $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$, module $1$ |
| Forme exponentielle | $z = r\,\mathrm{e}^{\mathrm{i}\theta}$, $r = \lvert z\rvert > 0$ |
| Produit | modules multipliés, arguments **additionnés** |
| Addition | $\cos(a+b) = \cos a\cos b - \sin a\sin b$ ; $\sin(a+b) = \sin a\cos b + \cos a\sin b$ |
| Duplication | $\cos 2a = 2\cos^2 a - 1$ ; $\sin 2a = 2\sin a\cos a$ |
| Linéarisation | $\cos^2 a = \dfrac{1+\cos 2a}{2}$ ; $\sin^2 a = \dfrac{1-\cos 2a}{2}$ |
| Signal | $a\cos\omega t + b\sin\omega t = A\cos(\omega t + \varphi)$, $A = \sqrt{a^2+b^2}$, $\cos\varphi = \dfrac{a}{A}$, $\sin\varphi = -\dfrac{b}{A}$ |
| $z^2 = a$, $a<0$ | $z = \pm\,\mathrm{i}\sqrt{-a}$ |
| $z \mapsto z + b$ | translation de vecteur d'affixe $b$ |
| $z \mapsto az$ | rotation d'angle $\arg a$ et homothétie de rapport $\lvert a\rvert$ (centre $O$) |

---

## 11. Les erreurs qui coûtent des points

1. **Additionner les modules dans un produit.** Les modules se **multiplient** ;
   ce sont les **arguments** qui s'additionnent.
2. **Écrire une forme exponentielle avec $r$ négatif.** Transformer le signe en
   ajoutant $\pi$ à l'argument : $-2\,\mathrm{e}^{\mathrm{i}\theta} = 2\,\mathrm{e}^{\mathrm{i}(\theta+\pi)}$.
3. **Se tromper de signe dans la phase** : $\sin\varphi = -\dfrac{b}{A}$, à cause
   du $-\sin\varphi\sin(\omega t)$ du développement.
4. **Prendre $A = a^2 + b^2$** au lieu de $A = \sqrt{a^2+b^2}$.
5. **Inverser les linéarisations** : le $+$ va avec $\cos^2$, le $-$ avec
   $\sin^2$ — teste en $a = 0$ pour vérifier.
6. **Oublier le facteur $\dfrac{1}{2}$** en primitivant $\cos(2t)$ : une
   primitive est $\dfrac{\sin(2t)}{2}$, pas $\sin(2t)$.
7. **Ne donner qu'une solution à $z^2 = a$** : il y en a deux, opposées, dès que
   $a \neq 0$.
