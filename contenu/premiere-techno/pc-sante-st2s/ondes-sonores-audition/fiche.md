---
id: 1st2s-pc-ondes-sonores-audition
titre: "Ondes sonores et audition"
voie: technologique
niveau: premiere-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Analyser et diagnostiquer"
duree_lecture_min: 15
prerequis:
  - Fréquence et période d'un signal, relation f = 1/T (cycle 4)
  - Écriture scientifique et puissances de 10 (Seconde)
  - Logarithme décimal : log(10^n) = n (introduit ici, en lien avec les maths)
statut: brouillon
relu_par: null
---

# Ondes sonores et audition

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)

> Un son trop aigu qu'on n'entend plus, un baladeur poussé trop fort qui abîme
> l'oreille, une prothèse qui redonne l'audition : derrière ces situations de santé,
> deux grandeurs physiques suffisent à tout comprendre — la **fréquence** (le son est-il
> grave ou aigu ?) et le **niveau d'intensité sonore** en **décibels** (est-il faible,
> fort, ou dangereux ?). Comme futur professionnel du soin, tu dois savoir lire un
> audiogramme, reconnaître un son à risque et expliquer comment une prothèse compense
> une déficience. Ce chapitre relie l'onde sonore à l'oreille qui la reçoit.

---

## 1. Le son est une onde

### Définition

Un **son** est une onde : une vibration qui se propage de proche en proche dans un
milieu **matériel** (l'air le plus souvent, mais aussi l'eau ou les os). La source
(cordes vocales, haut-parleur, diapason) fait vibrer l'air, qui transmet la vibration
jusqu'au tympan.

> **Exemple.** Dans le vide, aucun son ne se propage : sans matière à faire vibrer,
> il n'y a pas de son. C'est pourquoi, dans l'espace, deux astronautes ne peuvent pas
> se parler directement.

Le son se propage dans l'air à une **célérité** (vitesse) d'environ $v = 340$ m·s⁻¹.

---

## 2. Fréquence et hauteur d'un son

### La fréquence

Un son pur est une vibration qui se **répète**. La durée d'un motif complet est la
**période** $T$ (en secondes). La **fréquence** $f$ est le nombre de vibrations par
seconde :

$$\boxed{f = \frac{1}{T}} \qquad\qquad T = \frac{1}{f}$$

| Grandeur | Symbole | Unité |
|---|---|---|
| Période | $T$ | seconde (s) |
| Fréquence | $f$ | hertz (Hz) |

> **Exemple.** Le « la » du diapason vibre $440$ fois par seconde : sa fréquence est
> $f = 440$ Hz. Sa période vaut $T = \dfrac{1}{f} = \dfrac{1}{440} \approx 2{,}3 \times 10^{-3}$ s,
> soit environ $2{,}3$ ms.

Multiple très utile : le **kilohertz**, $1\ \text{kHz} = 10^{3}$ Hz $= 1000$ Hz.

### La hauteur

La **hauteur** d'un son, c'est le fait qu'il soit **grave** ou **aigu**. Elle est fixée
**uniquement par la fréquence** :

- son **grave** → **basse** fréquence (peu de vibrations par seconde) ;
- son **aigu** → **haute** fréquence (beaucoup de vibrations par seconde).

> **Exemple — santé.** La voix d'un homme adulte est plus **grave** (fréquences autour
> de $100$–$150$ Hz) que celle d'un enfant, plus **aiguë** (autour de $300$ Hz). Ce
> n'est pas une question de « force » : à volume égal, c'est bien la fréquence qui
> change.

> ⚠️ **Hauteur ≠ intensité.** « Monter le son » d'une chaîne hi-fi ne rend pas le son
> plus aigu : ça le rend plus **fort**. La hauteur (grave/aigu) dépend de $f$ ;
> l'impression de « fort/faible » dépend de l'intensité (§4). Ne confonds jamais les deux.

---

## 3. Les sons audibles, les infrasons et les ultrasons

<!-- schema:domaines-frequences -->
![Les trois domaines de fréquences : l'oreille d'un jeune adulte entend de 20 Hz à 20 kHz ; l'échographie utilise des ultrasons.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjI2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMjYiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIzMCIgeT0iNjgiIHdpZHRoPSIxMjUuNzciIGhlaWdodD0iNDQiIHJ4PSIwIiBmaWxsPSIjZTllM2Y1IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMTU1Ljc3IiB5PSI2OCIgd2lkdGg9IjI5MCIgaGVpZ2h0PSI0NCIgcng9IjAiIGZpbGw9IiNlMmYyZTgiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSI0NDUuNzciIHk9IjY4IiB3aWR0aD0iMTY0LjIzIiBoZWlnaHQ9IjQ0IiByeD0iMCIgZmlsbD0iI2ZiZWFlYSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjx0ZXh0IHg9IjkyLjg4IiB5PSI5NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+aW5mcmFzb25zPC90ZXh0Pjx0ZXh0IHg9IjMwMC43NyIgeT0iOTUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnNvbnMgYXVkaWJsZXMgcGFyIGwnb3JlaWxsZSBodW1haW5lPC90ZXh0Pjx0ZXh0IHg9IjUyNy44OCIgeT0iOTUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnVsdHJhc29uczwvdGV4dD48bGluZSB4MT0iMzAiIHkxPSIxMjQiIHgyPSI2MTUiIHkyPSIxMjQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjI0LDEyNCA2MTUsMTE5LjUgNjE1LDEyOC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjE1NS43NyIgeTE9IjYwIiB4Mj0iMTU1Ljc3IiB5Mj0iMTMwIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTU1Ljc3IiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjIwIEh6PC90ZXh0PjxsaW5lIHgxPSI0NDUuNzciIHkxPSI2MCIgeDI9IjQ0NS43NyIgeTI9IjEzMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ0NS43NyIgeT0iMTQ4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4yMCAwMDAgSHogPSAyMCBrSHo8L3RleHQ+PHRleHQgeD0iNjEwIiB5PSIxNDgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPmZyw6lxdWVuY2U8L3RleHQ+PHRleHQgeD0iMzQiIHk9IjU2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnBsdXMgZ3JhdmU8L3RleHQ+PHRleHQgeD0iNjEwIiB5PSI1NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+cGx1cyBhaWd1PC90ZXh0Pjx0ZXh0IHg9IjMwMC43NyIgeT0iMTcyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52b2l4LCBtdXNpcXVlPC90ZXh0Pjx0ZXh0IHg9IjUyNy44OCIgeT0iMTcyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7DqWNob2dyYXBoaWUsIHNpZmZsZXQ8L3RleHQ+PHRleHQgeD0iNTI3Ljg4IiB5PSIxODguMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBvdXIgY2hpZW48L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIyMTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPsOpY2hlbGxlIGxvZ2FyaXRobWlxdWUgOiBjaGFxdWUgZ3JhZHVhdGlvbiBtdWx0aXBsaWUgbGEgZnLDqXF1ZW5jZSBwYXIgMTA8L3RleHQ+PGxpbmUgeDE9IjMwIiB5MT0iMTIwIiB4Mj0iMzAiIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxMjYuNjciIHkxPSIxMjAiIHgyPSIxMjYuNjciIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMjMuMzMiIHkxPSIxMjAiIHgyPSIyMjMuMzMiIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMjAiIHkxPSIxMjAiIHgyPSIzMjAiIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MTYuNjciIHkxPSIxMjAiIHgyPSI0MTYuNjciIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1MTMuMzMiIHkxPSIxMjAiIHgyPSI1MTMuMzMiIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MTAiIHkxPSIxMjAiIHgyPSI2MTAiIHkyPSIxMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==)
*Les trois domaines de fréquences : l'oreille d'un jeune adulte entend de 20 Hz à 20 kHz ; l'échographie utilise des ultrasons.*
<!-- /schema -->

L'oreille humaine ne perçoit qu'une **plage** de fréquences limitée. Un jeune adulte
entend les sons dont la fréquence est comprise, en gros, entre :

$$\boxed{20\ \text{Hz} \ \leq\ f \ \leq\ 20\ 000\ \text{Hz} = 20\ \text{kHz}}$$

En dehors de cette plage, la vibration existe toujours, mais l'oreille humaine ne la
**perçoit pas** :

| Domaine | Fréquence | Perçu par l'humain ? |
|---|---|---|
| **Infrasons** | $f < 20$ Hz | non |
| **Sons audibles** | $20$ Hz $\leq f \leq 20$ kHz | oui |
| **Ultrasons** | $f > 20$ kHz | non |

> **Exemple — santé/imagerie.** L'**échographie** utilise des **ultrasons** (plusieurs
> **mégahertz**, donc bien au-dessus de $20$ kHz) : inaudibles pour le patient, ils
> traversent les tissus et permettent d'observer un organe ou un fœtus sans rayons X.

> **Exemple — animaux.** Un chien entend jusqu'à environ $40$ kHz : le « sifflet à
> ultrasons » émet un son que le chien perçoit et que le maître, lui, n'entend pas.

> ⚠️ **La borne haute recule avec l'âge.** À $20$ kHz correspond l'oreille d'un **jeune**.
> En vieillissant (ou après une exposition au bruit), on perd d'abord les **aigus** : une
> personne âgée peut ne plus entendre au-delà de $8$–$10$ kHz. C'est ce que révèle un
> audiogramme.

---

## 4. Le niveau d'intensité sonore (en décibels)

### De l'intensité sonore au niveau en décibels

Un son transporte de l'énergie. On mesure cette énergie reçue par l'**intensité sonore**
$I$, exprimée en **watts par mètre carré** ($\text{W·m}^{-2}$). Mais l'oreille est
sensible sur une **plage énorme** : entre le son le plus faible audible et le seuil de
douleur, l'intensité est multipliée par **mille milliards** ($10^{12}$). Des nombres
pareils sont impossibles à manipuler.

On définit donc une grandeur plus commode, le **niveau d'intensité sonore** $L$,
exprimé en **décibels (dB)**, qui **compresse** cette plage grâce au **logarithme
décimal** :

$$\boxed{L = 10 \times \log\!\left(\frac{I}{I_0}\right)} \qquad\text{avec}\qquad I_0 = 10^{-12}\ \text{W·m}^{-2}$$

| Grandeur | Symbole | Unité |
|---|---|---|
| Intensité sonore | $I$ | watt par mètre carré ($\text{W·m}^{-2}$) |
| Intensité de référence | $I_0$ | $10^{-12}\ \text{W·m}^{-2}$ (seuil d'audibilité) |
| Niveau d'intensité sonore | $L$ | décibel (dB) |

$I_0 = 10^{-12}\ \text{W·m}^{-2}$ est le **seuil d'audibilité** : le plus petit son
qu'une oreille normale peut détecter. Pour ce son, $I = I_0$, donc
$L = 10\log(1) = 0$ dB.

### Le logarithme décimal, juste ce qu'il faut

Le logarithme décimal $\log$ répond à la question : *« $10$ à la puissance combien ? »*

$$\log(10^{n}) = n \qquad\text{par exemple}\qquad \log(1) = 0,\quad \log(10) = 1,\quad \log(10^{6}) = 6$$

Deux règles suffisent pour ce chapitre :

- $\log(10^{n}) = n$ ;
- $\log(a \times b) = \log(a) + \log(b)$, donc **multiplier $I$ par $10$ ajoute $10$ dB**
  au niveau ($\log(10\times I) = \log(10)+\log(I) = 1 + \log(I)$).

> **Exemple — calcul direct.** Une conversation correspond à $I = 10^{-6}\ \text{W·m}^{-2}$.
> Son niveau vaut :
> $$L = 10\log\!\left(\frac{10^{-6}}{10^{-12}}\right) = 10\log(10^{6}) = 10 \times 6 = 60\ \text{dB}.$$

> **Exemple — calcul inverse.** Quelle intensité correspond à $L = 100$ dB (concert) ?
> On isole $I$ : $\dfrac{I}{I_0} = 10^{L/10} = 10^{100/10} = 10^{10}$, donc
> $I = 10^{10} \times 10^{-12} = 10^{-2}\ \text{W·m}^{-2}$. Retiens la forme utile :
> $$\boxed{I = I_0 \times 10^{\,L/10}}$$

### Quelques repères à connaître

<!-- schema:niveaux-db -->
![Les repères de niveau sonore de la fiche ; en violet, l'intensité sonore correspondante : chaque fois 10 dB de plus, l'intensité est multipliée par 10.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI0MCIgeT0iOTQiIHdpZHRoPSIzMzIuNzEiIGhlaWdodD0iMzIiIHJ4PSIwIiBmaWxsPSIjZTJmMmU4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMzcyLjcxIiB5PSI5NCIgd2lkdGg9IjEzNyIgaGVpZ2h0PSIzMiIgcng9IjAiIGZpbGw9IiNmZGUzYzYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSI1MDkuNzEiIHk9Ijk0IiB3aWR0aD0iNzguMjkiIGhlaWdodD0iMzIiIHJ4PSIwIiBmaWxsPSIjZjZjN2M3IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iNDAiIHk9Ijk0IiB3aWR0aD0iNTQ4IiBoZWlnaHQ9IjMyIiByeD0iMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40Ii8+PGxpbmUgeDE9IjQwIiB5MT0iMTI2IiB4Mj0iNDAiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGxpbmUgeDE9Ijc5LjE0IiB5MT0iMTI2IiB4Mj0iNzkuMTQiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijc5LjE0IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSIxMTguMjkiIHkxPSIxMjYiIHgyPSIxMTguMjkiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjExOC4yOSIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iMTU3LjQzIiB5MT0iMTI2IiB4Mj0iMTU3LjQzIiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNTcuNDMiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzA8L3RleHQ+PGxpbmUgeDE9IjE5Ni41NyIgeTE9IjEyNiIgeDI9IjE5Ni41NyIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTk2LjU3IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQwPC90ZXh0PjxsaW5lIHgxPSIyMzUuNzEiIHkxPSIxMjYiIHgyPSIyMzUuNzEiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIzNS43MSIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41MDwvdGV4dD48bGluZSB4MT0iMjc0Ljg2IiB5MT0iMTI2IiB4Mj0iMjc0Ljg2IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNzQuODYiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjA8L3RleHQ+PGxpbmUgeDE9IjMxNCIgeTE9IjEyNiIgeDI9IjMxNCIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzE0IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjcwPC90ZXh0PjxsaW5lIHgxPSIzNTMuMTQiIHkxPSIxMjYiIHgyPSIzNTMuMTQiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM1My4xNCIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44MDwvdGV4dD48bGluZSB4MT0iMzkyLjI5IiB5MT0iMTI2IiB4Mj0iMzkyLjI5IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOTIuMjkiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+OTA8L3RleHQ+PGxpbmUgeDE9IjQzMS40MyIgeTE9IjEyNiIgeDI9IjQzMS40MyIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDMxLjQzIiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwMDwvdGV4dD48bGluZSB4MT0iNDcwLjU3IiB5MT0iMTI2IiB4Mj0iNDcwLjU3IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0NzAuNTciIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTEwPC90ZXh0PjxsaW5lIHgxPSI1MDkuNzEiIHkxPSIxMjYiIHgyPSI1MDkuNzEiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwOS43MSIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMjA8L3RleHQ+PGxpbmUgeDE9IjU0OC44NiIgeTE9IjEyNiIgeDI9IjU0OC44NiIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTQ4Ljg2IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEzMDwvdGV4dD48bGluZSB4MT0iNTg4IiB5MT0iMTI2IiB4Mj0iNTg4IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1ODgiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTQwPC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmRCPC90ZXh0Pjx0ZXh0IHg9IjQ0MS4yMSIgeT0iMTE1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5kYW5nZXI8L3RleHQ+PHRleHQgeD0iNTQ4Ljg2IiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmRvdWxldXI8L3RleHQ+PGxpbmUgeDE9IjQwIiB5MT0iOTQiIHgyPSI0MCIgeTI9IjgwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+c2V1aWwgZCdhdWRpYmlsaXTDqTwvdGV4dD48dGV4dCB4PSI0MCIgeT0iNzYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJzdGFydCI+MTDigbvCucKyPC90ZXh0Pjx0ZXh0IHg9IjE1Ny40MyIgeT0iMTY2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jaHVjaG90ZW1lbnQ8L3RleHQ+PHRleHQgeD0iMTU3LjQzIiB5PSIxODIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEw4oG74oG5PC90ZXh0PjxsaW5lIHgxPSIyNzQuODYiIHkxPSI5NCIgeDI9IjI3NC44NiIgeTI9IjgwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNzQuODYiIHk9IjYwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jb252ZXJzYXRpb248L3RleHQ+PHRleHQgeD0iMjc0Ljg2IiB5PSI3NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTDigbvigbY8L3RleHQ+PHRleHQgeD0iMzcyLjcxIiB5PSIxNjYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNldWlsIGRlIHJpc3F1ZTwvdGV4dD48dGV4dCB4PSIzNzIuNzEiIHk9IjE4MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4omIIDMgw5cgMTDigbvigbQ8L3RleHQ+PGxpbmUgeDE9IjQzMS40MyIgeTE9Ijk0IiB4Mj0iNDMxLjQzIiB5Mj0iODAiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQzMS40MyIgeT0iNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmNvbmNlcnQ8L3RleHQ+PHRleHQgeD0iNDMxLjQzIiB5PSI3NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTDigbvCsjwvdGV4dD48dGV4dCB4PSI1MDkuNzEiIHk9IjE2NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+ZG91bGV1cjwvdGV4dD48dGV4dCB4PSI1MDkuNzEiIHk9IjE4MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9ImVuZCI+MTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI0MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZW4gdmlvbGV0IDogaW50ZW5zaXTDqSBzb25vcmUgSSBjb3JyZXNwb25kYW50ZSAoV8K3beKBu8KyKTwvdGV4dD48dGV4dCB4PSIzNzIuNzEiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zZXVpbCBkZSBkYW5nZXIgOiA4NSBkQjwvdGV4dD48L3N2Zz4=)
*Les repères de niveau sonore de la fiche ; en violet, l'intensité sonore correspondante : chaque fois 10 dB de plus, l'intensité est multipliée par 10.*
<!-- /schema -->

| Situation | Niveau $L$ | Intensité $I$ ($\text{W·m}^{-2}$) |
|---|---|---|
| Seuil d'audibilité | $0$ dB | $10^{-12}$ |
| Chuchotement | $\approx 30$ dB | $10^{-9}$ |
| Conversation normale | $\approx 60$ dB | $10^{-6}$ |
| Rue passante, seuil de risque | $\approx 85$ dB | $\approx 3 \times 10^{-4}$ |
| Concert, boîte de nuit | $\approx 100$ dB | $10^{-2}$ |
| Seuil de douleur | $\approx 120$ dB | $1$ |

> ⚠️ **Les décibels ne s'additionnent pas comme des watts.** Deux haut-parleurs de
> $80$ dB chacun ne font **pas** $160$ dB. On double l'**intensité** ($I \to 2I$), ce qui
> ajoute $10\log(2) \approx 3$ dB : on obtient environ **$83$ dB**, pas $160$. Doubler
> l'intensité, c'est **+3 dB** ; la multiplier par $10$, c'est **+10 dB**.

---

## 5. La perception d'un son par l'oreille

L'oreille transforme une vibration de l'air en un signal nerveux envoyé au cerveau. Elle
comporte **trois** parties :

| Partie | Éléments | Rôle |
|---|---|---|
| **Oreille externe** | pavillon, conduit auditif | **capte** et canalise le son vers le tympan |
| **Oreille moyenne** | tympan, osselets (marteau, enclume, étrier) | **transmet** et amplifie mécaniquement la vibration |
| **Oreille interne** | cochlée (limaçon) et ses cellules ciliées | **convertit** la vibration en signal nerveux |

Le trajet : le son fait vibrer le **tympan** ; les **osselets** transmettent cette
vibration à la **cochlée** ; à l'intérieur, les **cellules ciliées** vibrent et créent
un **message nerveux** transmis au cerveau par le nerf auditif.

> **Exemple — santé.** Les **cellules ciliées** de la cochlée sont **fragiles et ne se
> régénèrent pas** : détruites par un bruit trop fort, elles le sont **définitivement**.
> C'est la cause principale des surdités dues au bruit.

L'oreille n'est pas sensible de la même façon à toutes les fréquences : elle perçoit le
mieux les fréquences de la **voix** (autour de $1$ à $4$ kHz) et beaucoup moins bien les
graves très bas et les aigus très hauts.

---

## 6. Les risques auditifs : niveau ET durée

<!-- schema:exposition -->
![Durée d'exposition à risque selon le niveau sonore : chaque fois que le niveau augmente de 3 dB, la durée tolérable est divisée par deux.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjAiIHkxPSIyNzQiIHgyPSI2MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE4OC41IiB5MT0iMjc0IiB4Mj0iMTg4LjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMTciIHkxPSIyNzQiIHgyPSIzMTciIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NDUuNSIgeTE9IjI3NCIgeDI9IjQ0NS41IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTc0IiB5MT0iMjc0IiB4Mj0iNTc0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIyNzQiIHgyPSI1NzQiIHkyPSIyNzQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIyNDYuNjciIHgyPSI1NzQiIHkyPSIyNDYuNjciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIyMTkuMzMiIHgyPSI1NzQiIHkyPSIyMTkuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIxOTIiIHgyPSI1NzQiIHkyPSIxOTIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIxNjQuNjciIHgyPSI1NzQiIHkyPSIxNjQuNjciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIxMzcuMzMiIHgyPSI1NzQiIHkyPSIxMzcuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIxMTAiIHgyPSI1NzQiIHkyPSIxMTAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSI4Mi42NyIgeDI9IjU3NCIgeTI9IjgyLjY3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjYwIiB5MT0iNTUuMzMiIHgyPSI1NzQiIHkyPSI1NS4zMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MCIgeTE9IjI4IiB4Mj0iNTc0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjAiIHkxPSIyNzQiIHgyPSI1NzkiIHkyPSIyNzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTg4LDI3NCA1NzksMjY5LjUgNTc5LDI3OC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjYwIiB5MT0iMjc0IiB4Mj0iNjAiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MCwxNCA1NS41LDIzIDY0LjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTYiIHkxPSIyNzQiIHgyPSI2MCIgeTI9IjI3NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjI3OCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIyNDYuNjciIHgyPSI2MCIgeTI9IjI0Ni42NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjI1MC42NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIyMTkuMzMiIHgyPSI2MCIgeTI9IjIxOS4zMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjIyMy4zMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIxOTIiIHgyPSI2MCIgeTI9IjE5MiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjE5NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MzwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIxNjQuNjciIHgyPSI2MCIgeTI9IjE2NC42NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjE2OC42NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NDwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIxMzcuMzMiIHgyPSI2MCIgeTI9IjEzNy4zMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjE0MS4zMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIxMTAiIHgyPSI2MCIgeTI9IjExMCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTIiIHk9IjExNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NjwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSI4Mi42NyIgeDI9IjYwIiB5Mj0iODIuNjciIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSI4Ni42NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NzwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSI1NS4zMyIgeDI9IjYwIiB5Mj0iNTUuMzMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSI1OS4zMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+ODwvdGV4dD48bGluZSB4MT0iNTYiIHkxPSIyOCIgeDI9IjYwIiB5Mj0iMjgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyIiB5PSIzMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+OTwvdGV4dD48dGV4dCB4PSI1OTQiIHk9IjMxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+bml2ZWF1IHNvbm9yZTwvdGV4dD48dGV4dCB4PSI1NCIgeT0iMTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+ZHVyw6llIGQnZXhwb3NpdGlvbiB0b2zDqXJhYmxlIChoKTwvdGV4dD48cmVjdCB4PSI4NS43IiB5PSI1NS4zMyIgd2lkdGg9Ijc3LjEiIGhlaWdodD0iMjE4LjY3IiByeD0iMCIgZmlsbD0iI2ZkZTNjNiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTI0LjI1IiB5PSI0Ny4zMyIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+OCBoPC90ZXh0Pjx0ZXh0IHg9IjEyNC4yNSIgeT0iMjk0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj44NSBkQjwvdGV4dD48cmVjdCB4PSIyMTQuMiIgeT0iMTY0LjY3IiB3aWR0aD0iNzcuMSIgaGVpZ2h0PSIxMDkuMzMiIHJ4PSIwIiBmaWxsPSIjZmRlM2M2IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIyNTIuNzUiIHk9IjE1Ni42NyIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NCBoPC90ZXh0Pjx0ZXh0IHg9IjI1Mi43NSIgeT0iMjk0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj44OCBkQjwvdGV4dD48cmVjdCB4PSIzNDIuNyIgeT0iMjE5LjMzIiB3aWR0aD0iNzcuMSIgaGVpZ2h0PSI1NC42NyIgcng9IjAiIGZpbGw9IiNmZGUzYzYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuNiIvPjx0ZXh0IHg9IjM4MS4yNSIgeT0iMjExLjMzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4yIGg8L3RleHQ+PHRleHQgeD0iMzgxLjI1IiB5PSIyOTQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjkxIGRCPC90ZXh0PjxyZWN0IHg9IjQ3MS4yIiB5PSIyNDYuNjciIHdpZHRoPSI3Ny4xIiBoZWlnaHQ9IjI3LjMzIiByeD0iMCIgZmlsbD0iI2ZkZTNjNiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iNTA5Ljc1IiB5PSIyMzguNjciIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjEgaDwvdGV4dD48dGV4dCB4PSI1MDkuNzUiIHk9IjI5NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+OTQgZEI8L3RleHQ+PHRleHQgeD0iMzk0LjEiIHk9IjY5IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4rIDMgZEIgIOKGkiAgZHVyw6llIGRpdmlzw6llIHBhciAyPC90ZXh0Pjwvc3ZnPg==)
*Durée d'exposition à risque selon le niveau sonore : chaque fois que le niveau augmente de 3 dB, la durée tolérable est divisée par deux.*
<!-- /schema -->

Un son endommage l'oreille selon **deux** facteurs qui comptent **ensemble** : le
**niveau** $L$ (en dB) **et** la **durée d'exposition**.

- En dessous de **$80$ dB**, l'exposition prolongée reste sans danger.
- À partir de **$85$ dB**, le risque apparaît : c'est le **seuil de danger** retenu en
  santé au travail, pour une exposition de **$8$ heures** par jour.
- **Plus le niveau monte, plus la durée sans danger s'effondre.** La règle usuelle :
  chaque **+3 dB** (soit une intensité **doublée**) **divise par deux** la durée
  d'exposition tolérable.
- Vers **$120$ dB**, c'est le **seuil de douleur** : le danger est **immédiat**, même
  pour une exposition brève.

| Niveau | Durée d'exposition « à risque » |
|---|---|
| $85$ dB | $8$ h |
| $88$ dB | $4$ h |
| $91$ dB | $2$ h |
| $94$ dB | $1$ h |
| $\geq 120$ dB | danger immédiat |

> **Exemple — santé publique.** Un concert à $100$ dB dépasse largement $85$ dB : même
> une heure d'exposition présente un risque réel pour les cellules ciliées. D'où les
> **bouchons d'oreille** distribués à l'entrée, qui abaissent le niveau reçu de $15$ à
> $25$ dB.

> ⚠️ **Un son peut abîmer sans faire mal.** Les dégâts commencent **bien avant** le
> seuil de douleur ($120$ dB). Un baladeur à $95$ dB pendant des heures, sans aucune
> gêne ressentie, use progressivement l'audition. « Ça ne fait pas mal » ne veut pas dire
> « c'est sans danger ».

---

## 7. Compenser une déficience auditive

Quand l'audition est diminuée (cellules ciliées abîmées, vieillissement), on **compense**
la perte par une **amplification** : on augmente le niveau du son reçu pour ramener les
sons faibles au-dessus du seuil que l'oreille perçoit encore.

Une **prothèse auditive** (appareil auditif) réalise cela en trois étapes :

1. un **microphone** capte le son extérieur ;
2. un **amplificateur** électronique **augmente** son niveau (en dB) ;
3. un **haut-parleur** miniature restitue le son amplifié dans le conduit auditif.

> **Exemple — santé.** Une personne dont le seuil d'audition est monté à $40$ dB (elle
> n'entend plus rien en dessous) n'entend plus une conversation normale à $60$ dB
> confortablement. Une prothèse réglée pour **ajouter** de l'ordre de $+30$ dB ramène la
> parole à un niveau nettement audible pour elle.

> **Exemple — réglage fin.** Les prothèses modernes **amplifient surtout les
> fréquences** perdues (souvent les **aigus**) et laissent les graves, déjà bien perçus,
> presque inchangés : on corrige la déficience mesurée sur l'**audiogramme**, fréquence
> par fréquence.

> ⚠️ **Amplifier n'est pas réparer.** La prothèse **compense** en montant le volume ;
> elle ne **répare pas** les cellules ciliées détruites. D'où l'importance de la
> **prévention** (limiter niveau et durée) : ce qui est perdu ne revient pas.

---

## 8. À retenir absolument

| | |
|---|---|
| Son | onde nécessitant un milieu **matériel** (pas de son dans le vide) |
| Fréquence ↔ période | $f = \dfrac{1}{T}$ (Hz ↔ s) ; $1$ kHz $= 10^{3}$ Hz |
| Hauteur | grave = **basse** $f$ ; aigu = **haute** $f$ (≠ intensité) |
| Plage audible | $20$ Hz $\leq f \leq 20$ kHz |
| Infrasons / ultrasons | $f < 20$ Hz / $f > 20$ kHz (échographie) |
| Niveau sonore | $L = 10\log\!\left(\dfrac{I}{I_0}\right)$, en **dB** |
| Référence | $I_0 = 10^{-12}\ \text{W·m}^{-2}$ → $L = 0$ dB |
| Calcul inverse | $I = I_0 \times 10^{\,L/10}$ |
| Règles dB | $\times 10$ sur $I$ → $+10$ dB ; $\times 2$ sur $I$ → $+3$ dB |
| Oreille | externe (capte) · moyenne (transmet) · interne = cochlée (convertit) |
| Cellules ciliées | fragiles, **non régénérées** : dégâts définitifs |
| Risque auditif | dépend du **niveau ET de la durée** ; seuil $85$ dB / $8$ h |
| Seuil de douleur | $\approx 120$ dB |
| Compensation | **amplification** ; prothèse = micro + ampli + haut-parleur |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre hauteur et intensité.** La hauteur (grave/aigu) dépend de la
   **fréquence** ; « fort/faible » dépend du **niveau sonore** en dB. Monter le son ne
   rend pas le son plus aigu.
2. **Oublier $I_0$ ou se tromper de puissance de 10.** La référence est
   $I_0 = 10^{-12}\ \text{W·m}^{-2}$. Dans $L = 10\log(I/I_0)$, c'est bien le **rapport**
   $I/I_0$ qui est dans le log, jamais $I$ seul.
3. **Additionner les décibels.** Deux sons de $80$ dB ne font pas $160$ dB. On additionne
   les **intensités** (en W·m⁻²), puis on recalcule $L$. Doubler $I$ n'ajoute que
   **+3 dB**.
4. **Oublier le facteur $10$ dans la formule.** C'est $L = \mathbf{10}\log(I/I_0)$ : un
   son à $I = 10^{-6}$ donne $L = 10 \times 6 = 60$ dB, pas $6$ dB. Sans le $\times 10$,
   on est en **bels**, jamais en décibels.
5. **Croire que « sans douleur = sans danger ».** Les dégâts auditifs commencent dès
   $85$ dB, bien avant le seuil de douleur de $120$ dB. C'est la **durée** d'exposition
   qui achève les cellules ciliées.
6. **Confondre les bornes de l'audible.** Audible = $20$ Hz à $20$ kHz. En dessous =
   **infrasons**, au-dessus = **ultrasons**. Ne pas inverser, et se souvenir que
   $20$ kHz $= 20\,000$ Hz.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 2 « Analyser et
diagnostiquer », section « Ondes sonores et audition (1re) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 53-56 :
  - Fréquence et hauteur d'un son ; sons audibles.
  - Niveau d'intensité sonore (dB).
  - Perception d'un son par l'oreille ; risques auditifs ; amplification (compensation).
Le .txt (lignes 12-15) précise que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production). Les deux
  premiers chapitres ST2S écrits (securite-chimique-acide-base, oxydoreduction-
  desinfectants) portent niveau: "premiere" ; risques-electriques et
  infrarouge-securite-routiere portent "premiere-techno". Incohérence à trancher pour
  tout le parcours pc-sante-st2s : harmoniser sur une seule valeur avant publication.
- Formule L = 10·log(I/I0) avec I0 = 10^-12 W/m² : valeur standard du seuil d'audibilité,
  conforme à l'énoncé de la consigne. Vérifier que le programme exige bien la manipulation
  du logarithme décimal (log(10^n)=n) à ce niveau, et son articulation avec le cours de
  maths ST2S (le log est parfois vu APRÈS ce chapitre) — sinon donner log comme outil admis.
- Bornes audibles 20 Hz – 20 kHz : ordre de grandeur standard (oreille jeune). À valider
  comme valeurs à connaître (et non seulement ordres de grandeur).
- Seuils de risque : 85 dB / 8 h et règle « +3 dB → durée /2 » = valeurs de référence en
  santé au travail (INRS / Code du travail). Le programme cite « risques auditifs » sans
  forcément chiffrer : confirmer le niveau d'exigence attendu (valeurs précises vs principe).
  Seuil de douleur ≈ 120 dB (I = 1 W/m²).
- Anatomie de l'oreille (externe/moyenne/interne, osselets, cochlée, cellules ciliées) :
  présentée de façon simplifiée. Vérifier la profondeur attendue par le programme ST2S
  (possible recoupement avec la SVT / biologie et physiopathologie humaines).
- Prothèse auditive (micro + ampli + haut-parleur) et « amplification » comme compensation :
  conforme à la consigne. Confirmer qu'aucune notion supplémentaire (implant cochléaire)
  n'est exigée au programme de Première.
- Vérifs numériques faites : 60 dB ↔ 10^-6 W/m² ; 100 dB ↔ 10^-2 W/m² ; 120 dB ↔ 1 W/m² ;
  ×10 sur I → +10 dB ; ×2 sur I → +10·log(2) ≈ 3,01 dB.

Statut : brouillon, non relu.
-->
