---
id: tale-sti2d-pc-ondes-signaux
titre: "Ondes et signaux (terminale)"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 14
prerequis:
  - Ondes et information (Première STI2D/STL — chapitre ondes-information, même parcours)
  - Nombres complexes et exponentielle complexe (Terminale STI2D/STL — transformer a·cos(ωt) + b·sin(ωt) en A·cos(ωt + φ))
  - Fonctions exponentielle et logarithme népérien (Terminale STI2D/STL — logarithme décimal)
statut: brouillon
relu_par: null
---

# Ondes et signaux (terminale)

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)

> En première, tu as appris ce qu'est une onde et comment elle transporte une
> information. En terminale, tu apprends à **regarder dedans** : un signal
> périodique se décompose en sinusoïdes — c'est le **spectre d'amplitude**, qui
> explique pourquoi une guitare et un piano jouant la même note ne sonnent pas
> pareil. Et tu chiffres enfin le « volume » d'un son avec le **niveau sonore en
> décibels**, une échelle logarithmique : le log décimal de ton cours de maths
> sert ici tous les jours.

---

## 1. Ce que tu dois déjà savoir (première)

Ce chapitre prolonge le chapitre « Ondes et information » de première, à relire
d'abord. En quatre lignes :

- une onde transporte de l'**énergie sans transporter de matière** ; mécanique
  (le son : milieu matériel indispensable) ou électromagnétique (se propage
  dans le vide à $c = 3{,}00 \times 10^8$ m·s⁻¹) ;
- $\lambda = v\,T = \dfrac{v}{f}$, et la **fréquence ne change pas** quand
  l'onde change de milieu ;
- l'**intensité acoustique** est une puissance par unité de surface :
  $I = \dfrac{P}{S}$, en W·m⁻² ;
- transmettre une information = propager une **onde modulée selon un code**
  entre un émetteur et un récepteur.

Rien de tout cela n'est redémontré ici : on le **réutilise**.

---

## 2. Le spectre d'amplitude d'un signal périodique

### Le signal sinusoïdal, brique élémentaire

Le signal périodique le plus simple est le signal **sinusoïdal** :

$$s(t) = A\cos(2\pi f t + \varphi)$$

avec $A$ l'**amplitude** (unité du signal : V, Pa…), $f$ la **fréquence** en Hz
et $\varphi$ la **phase à l'origine**. C'est exactement la forme
$A\cos(\omega t + \varphi)$, avec $\omega = 2\pi f$, que ton chapitre de maths
sur l'exponentielle complexe t'apprend à obtenir à partir de
$a\cos(\omega t) + b\sin(\omega t)$ : une somme de cosinus et de sinus **de même
fréquence** reste un signal sinusoïdal de cette fréquence.

### Fondamental et harmoniques

> **Propriété (admise).** Tout signal **périodique** de fréquence $f_1$ peut se
> décomposer en une somme de signaux **sinusoïdaux** de fréquences
> $f_1,\ 2f_1,\ 3f_1,\ \dots$
> - la sinusoïde de fréquence $f_1$ est le **fondamental** ;
> - celle de fréquence $n f_1$ est l'**harmonique de rang $n$**.

$$\boxed{f_n = n \times f_1 \qquad (n = 2,\ 3,\ \dots)}$$

> **Exemple.** Un signal périodique de fréquence $f_1 = 100$ Hz ne peut contenir
> que les fréquences $100$, $200$, $300$, $400$ Hz… L'harmonique de rang $3$ est
> à $3 \times 100 = 300$ Hz — pas à $103$ Hz.

### Le spectre d'amplitude

<!-- schema:signal-spectre -->
![Exemple de la fiche : le signal somme de deux sinusoïdes, 5,0 V à 100 Hz et 1,5 V à 300 Hz, et son spectre d'amplitude à deux raies.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NzAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY3MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDQiIHkxPSIyMzQiIHgyPSIzMTkiIHkyPSIyMzQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzI4LDIzNCAzMTksMjI5LjUgMzE5LDIzOC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjQ0IiB5MT0iMjM0IiB4Mj0iNDQiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NCwxNCAzOS41LDIzIDQ4LjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNDQiIHkxPSIyMzQiIHgyPSI0NCIgeTI9IjIzOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDQiIHk9IjI1MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48bGluZSB4MT0iMTExLjUiIHkxPSIyMzQiIHgyPSIxMTEuNSIgeTI9IjIzOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTExLjUiIHk9IjI1MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMTc5IiB5MT0iMjM0IiB4Mj0iMTc5IiB5Mj0iMjM4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNzkiIHk9IjI1MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+PGxpbmUgeDE9IjI0Ni41IiB5MT0iMjM0IiB4Mj0iMjQ2LjUiIHkyPSIyMzgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI0Ni41IiB5PSIyNTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE1PC90ZXh0PjxsaW5lIHgxPSIzMTQiIHkxPSIyMzQiIHgyPSIzMTQiIHkyPSIyMzgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMxNCIgeT0iMjUyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iNDAiIHkxPSIyMDUuNTkiIHgyPSI0NCIgeTI9IjIwNS41OSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzYiIHk9IjIwOS41OSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+4oiSNTwvdGV4dD48bGluZSB4MT0iNDAiIHkxPSIxMzQuNTUiIHgyPSI0NCIgeTI9IjEzNC41NSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzYiIHk9IjEzOC41NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD48bGluZSB4MT0iNDAiIHkxPSI2My41MiIgeDI9IjQ0IiB5Mj0iNjMuNTIiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM2IiB5PSI2Ny41MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTwvdGV4dD48dGV4dCB4PSIzMzQiIHk9IjI3MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+dCAobXMpPC90ZXh0Pjx0ZXh0IHg9IjM4IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij51IChWKTwvdGV4dD48bGluZSB4MT0iNDQiIHkxPSIxMzQuNTUiIHgyPSIzMTQiIHkyPSIxMzQuNTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNDQgNDIuMjEgTCA0NC45IDQyLjQ0IEwgNDUuOCA0My4xMyBMIDQ2LjcgNDQuMjYgTCA0Ny42IDQ1Ljg0IEwgNDguNSA0Ny44MyBMIDQ5LjQgNTAuMjEgTCA1MC4zIDUyLjk3IEwgNTEuMiA1Ni4wNSBMIDUyLjEgNTkuNDMgTCA1MyA2My4wNyBMIDUzLjkgNjYuOTMgTCA1NC44IDcwLjk3IEwgNTUuNyA3NS4xMyBMIDU2LjYgNzkuMzggTCA1Ny41IDgzLjY3IEwgNTguNCA4Ny45NiBMIDU5LjMgOTIuMiBMIDYwLjIgOTYuMzUgTCA2MS4xIDEwMC4zOSBMIDYyIDEwNC4yNiBMIDYyLjkgMTA3Ljk1IEwgNjMuOCAxMTEuNDIgTCA2NC43IDExNC42NSBMIDY1LjYgMTE3LjYzIEwgNjYuNSAxMjAuMzQgTCA2Ny40IDEyMi43OCBMIDY4LjMgMTI0Ljk1IEwgNjkuMiAxMjYuODQgTCA3MC4xIDEyOC40NyBMIDcxIDEyOS44NCBMIDcxLjkgMTMwLjk4IEwgNzIuOCAxMzEuOTEgTCA3My43IDEzMi42NiBMIDc0LjYgMTMzLjI1IEwgNzUuNSAxMzMuNzEgTCA3Ni40IDEzNC4wOCBMIDc3LjMgMTM0LjQgTCA3OC4yIDEzNC43IEwgNzkuMSAxMzUuMDIgTCA4MCAxMzUuMzkgTCA4MC45IDEzNS44NiBMIDgxLjggMTM2LjQ0IEwgODIuNyAxMzcuMTkgTCA4My42IDEzOC4xMiBMIDg0LjUgMTM5LjI2IEwgODUuNCAxNDAuNjQgTCA4Ni4zIDE0Mi4yNiBMIDg3LjIgMTQ0LjE2IEwgODguMSAxNDYuMzIgTCA4OSAxNDguNzYgTCA4OS45IDE1MS40NyBMIDkwLjggMTU0LjQ1IEwgOTEuNyAxNTcuNjkgTCA5Mi42IDE2MS4xNiBMIDkzLjUgMTY0Ljg0IEwgOTQuNCAxNjguNzIgTCA5NS4zIDE3Mi43NSBMIDk2LjIgMTc2LjkxIEwgOTcuMSAxODEuMTUgTCA5OCAxODUuNDMgTCA5OC45IDE4OS43MiBMIDk5LjggMTkzLjk3IEwgMTAwLjcgMTk4LjE0IEwgMTAxLjYgMjAyLjE3IEwgMTAyLjUgMjA2LjAzIEwgMTAzLjQgMjA5LjY3IEwgMTA0LjMgMjEzLjA1IEwgMTA1LjIgMjE2LjE0IEwgMTA2LjEgMjE4Ljg5IEwgMTA3IDIyMS4yNyBMIDEwNy45IDIyMy4yNyBMIDEwOC44IDIyNC44NCBMIDEwOS43IDIyNS45OCBMIDExMC42IDIyNi42NyBMIDExMS41IDIyNi45IEwgMTEyLjQgMjI2LjY3IEwgMTEzLjMgMjI1Ljk4IEwgMTE0LjIgMjI0Ljg0IEwgMTE1LjEgMjIzLjI3IEwgMTE2IDIyMS4yNyBMIDExNi45IDIxOC44OSBMIDExNy44IDIxNi4xNCBMIDExOC43IDIxMy4wNSBMIDExOS42IDIwOS42NyBMIDEyMC41IDIwNi4wMyBMIDEyMS40IDIwMi4xNyBMIDEyMi4zIDE5OC4xNCBMIDEyMy4yIDE5My45NyBMIDEyNC4xIDE4OS43MiBMIDEyNSAxODUuNDMgTCAxMjUuOSAxODEuMTUgTCAxMjYuOCAxNzYuOTEgTCAxMjcuNyAxNzIuNzUgTCAxMjguNiAxNjguNzIgTCAxMjkuNSAxNjQuODQgTCAxMzAuNCAxNjEuMTYgTCAxMzEuMyAxNTcuNjkgTCAxMzIuMiAxNTQuNDUgTCAxMzMuMSAxNTEuNDcgTCAxMzQgMTQ4Ljc2IEwgMTM0LjkgMTQ2LjMyIEwgMTM1LjggMTQ0LjE2IEwgMTM2LjcgMTQyLjI2IEwgMTM3LjYgMTQwLjY0IEwgMTM4LjUgMTM5LjI2IEwgMTM5LjQgMTM4LjEyIEwgMTQwLjMgMTM3LjE5IEwgMTQxLjIgMTM2LjQ0IEwgMTQyLjEgMTM1Ljg2IEwgMTQzIDEzNS4zOSBMIDE0My45IDEzNS4wMiBMIDE0NC44IDEzNC43IEwgMTQ1LjcgMTM0LjQgTCAxNDYuNiAxMzQuMDggTCAxNDcuNSAxMzMuNzEgTCAxNDguNCAxMzMuMjUgTCAxNDkuMyAxMzIuNjYgTCAxNTAuMiAxMzEuOTEgTCAxNTEuMSAxMzAuOTggTCAxNTIgMTI5Ljg0IEwgMTUyLjkgMTI4LjQ3IEwgMTUzLjggMTI2Ljg0IEwgMTU0LjcgMTI0Ljk1IEwgMTU1LjYgMTIyLjc4IEwgMTU2LjUgMTIwLjM0IEwgMTU3LjQgMTE3LjYzIEwgMTU4LjMgMTE0LjY1IEwgMTU5LjIgMTExLjQyIEwgMTYwLjEgMTA3Ljk1IEwgMTYxIDEwNC4yNiBMIDE2MS45IDEwMC4zOSBMIDE2Mi44IDk2LjM1IEwgMTYzLjcgOTIuMiBMIDE2NC42IDg3Ljk2IEwgMTY1LjUgODMuNjcgTCAxNjYuNCA3OS4zOCBMIDE2Ny4zIDc1LjEzIEwgMTY4LjIgNzAuOTcgTCAxNjkuMSA2Ni45MyBMIDE3MCA2My4wNyBMIDE3MC45IDU5LjQzIEwgMTcxLjggNTYuMDUgTCAxNzIuNyA1Mi45NyBMIDE3My42IDUwLjIxIEwgMTc0LjUgNDcuODMgTCAxNzUuNCA0NS44NCBMIDE3Ni4zIDQ0LjI2IEwgMTc3LjIgNDMuMTMgTCAxNzguMSA0Mi40NCBMIDE3OSA0Mi4yMSBMIDE3OS45IDQyLjQ0IEwgMTgwLjggNDMuMTMgTCAxODEuNyA0NC4yNiBMIDE4Mi42IDQ1Ljg0IEwgMTgzLjUgNDcuODMgTCAxODQuNCA1MC4yMSBMIDE4NS4zIDUyLjk3IEwgMTg2LjIgNTYuMDUgTCAxODcuMSA1OS40MyBMIDE4OCA2My4wNyBMIDE4OC45IDY2LjkzIEwgMTg5LjggNzAuOTcgTCAxOTAuNyA3NS4xMyBMIDE5MS42IDc5LjM4IEwgMTkyLjUgODMuNjcgTCAxOTMuNCA4Ny45NiBMIDE5NC4zIDkyLjIgTCAxOTUuMiA5Ni4zNSBMIDE5Ni4xIDEwMC4zOSBMIDE5NyAxMDQuMjYgTCAxOTcuOSAxMDcuOTUgTCAxOTguOCAxMTEuNDIgTCAxOTkuNyAxMTQuNjUgTCAyMDAuNiAxMTcuNjMgTCAyMDEuNSAxMjAuMzQgTCAyMDIuNCAxMjIuNzggTCAyMDMuMyAxMjQuOTUgTCAyMDQuMiAxMjYuODQgTCAyMDUuMSAxMjguNDcgTCAyMDYgMTI5Ljg0IEwgMjA2LjkgMTMwLjk4IEwgMjA3LjggMTMxLjkxIEwgMjA4LjcgMTMyLjY2IEwgMjA5LjYgMTMzLjI1IEwgMjEwLjUgMTMzLjcxIEwgMjExLjQgMTM0LjA4IEwgMjEyLjMgMTM0LjQgTCAyMTMuMiAxMzQuNyBMIDIxNC4xIDEzNS4wMiBMIDIxNSAxMzUuMzkgTCAyMTUuOSAxMzUuODYgTCAyMTYuOCAxMzYuNDQgTCAyMTcuNyAxMzcuMTkgTCAyMTguNiAxMzguMTIgTCAyMTkuNSAxMzkuMjYgTCAyMjAuNCAxNDAuNjQgTCAyMjEuMyAxNDIuMjYgTCAyMjIuMiAxNDQuMTYgTCAyMjMuMSAxNDYuMzIgTCAyMjQgMTQ4Ljc2IEwgMjI0LjkgMTUxLjQ3IEwgMjI1LjggMTU0LjQ1IEwgMjI2LjcgMTU3LjY5IEwgMjI3LjYgMTYxLjE2IEwgMjI4LjUgMTY0Ljg0IEwgMjI5LjQgMTY4LjcyIEwgMjMwLjMgMTcyLjc1IEwgMjMxLjIgMTc2LjkxIEwgMjMyLjEgMTgxLjE1IEwgMjMzIDE4NS40MyBMIDIzMy45IDE4OS43MiBMIDIzNC44IDE5My45NyBMIDIzNS43IDE5OC4xNCBMIDIzNi42IDIwMi4xNyBMIDIzNy41IDIwNi4wMyBMIDIzOC40IDIwOS42NyBMIDIzOS4zIDIxMy4wNSBMIDI0MC4yIDIxNi4xNCBMIDI0MS4xIDIxOC44OSBMIDI0MiAyMjEuMjcgTCAyNDIuOSAyMjMuMjcgTCAyNDMuOCAyMjQuODQgTCAyNDQuNyAyMjUuOTggTCAyNDUuNiAyMjYuNjcgTCAyNDYuNSAyMjYuOSBMIDI0Ny40IDIyNi42NyBMIDI0OC4zIDIyNS45OCBMIDI0OS4yIDIyNC44NCBMIDI1MC4xIDIyMy4yNyBMIDI1MSAyMjEuMjcgTCAyNTEuOSAyMTguODkgTCAyNTIuOCAyMTYuMTQgTCAyNTMuNyAyMTMuMDUgTCAyNTQuNiAyMDkuNjcgTCAyNTUuNSAyMDYuMDMgTCAyNTYuNCAyMDIuMTcgTCAyNTcuMyAxOTguMTQgTCAyNTguMiAxOTMuOTcgTCAyNTkuMSAxODkuNzIgTCAyNjAgMTg1LjQzIEwgMjYwLjkgMTgxLjE1IEwgMjYxLjggMTc2LjkxIEwgMjYyLjcgMTcyLjc1IEwgMjYzLjYgMTY4LjcyIEwgMjY0LjUgMTY0Ljg0IEwgMjY1LjQgMTYxLjE2IEwgMjY2LjMgMTU3LjY5IEwgMjY3LjIgMTU0LjQ1IEwgMjY4LjEgMTUxLjQ3IEwgMjY5IDE0OC43NiBMIDI2OS45IDE0Ni4zMiBMIDI3MC44IDE0NC4xNiBMIDI3MS43IDE0Mi4yNiBMIDI3Mi42IDE0MC42NCBMIDI3My41IDEzOS4yNiBMIDI3NC40IDEzOC4xMiBMIDI3NS4zIDEzNy4xOSBMIDI3Ni4yIDEzNi40NCBMIDI3Ny4xIDEzNS44NiBMIDI3OCAxMzUuMzkgTCAyNzguOSAxMzUuMDIgTCAyNzkuOCAxMzQuNyBMIDI4MC43IDEzNC40IEwgMjgxLjYgMTM0LjA4IEwgMjgyLjUgMTMzLjcxIEwgMjgzLjQgMTMzLjI1IEwgMjg0LjMgMTMyLjY2IEwgMjg1LjIgMTMxLjkxIEwgMjg2LjEgMTMwLjk4IEwgMjg3IDEyOS44NCBMIDI4Ny45IDEyOC40NyBMIDI4OC44IDEyNi44NCBMIDI4OS43IDEyNC45NSBMIDI5MC42IDEyMi43OCBMIDI5MS41IDEyMC4zNCBMIDI5Mi40IDExNy42MyBMIDI5My4zIDExNC42NSBMIDI5NC4yIDExMS40MiBMIDI5NS4xIDEwNy45NSBMIDI5NiAxMDQuMjYgTCAyOTYuOSAxMDAuMzkgTCAyOTcuOCA5Ni4zNSBMIDI5OC43IDkyLjIgTCAyOTkuNiA4Ny45NiBMIDMwMC41IDgzLjY3IEwgMzAxLjQgNzkuMzggTCAzMDIuMyA3NS4xMyBMIDMwMy4yIDcwLjk3IEwgMzA0LjEgNjYuOTMgTCAzMDUgNjMuMDcgTCAzMDUuOSA1OS40MyBMIDMwNi44IDU2LjA1IEwgMzA3LjcgNTIuOTcgTCAzMDguNiA1MC4yMSBMIDMwOS41IDQ3LjgzIEwgMzEwLjQgNDUuODQgTCAzMTEuMyA0NC4yNiBMIDMxMi4yIDQzLjEzIEwgMzEzLjEgNDIuNDQgTCAzMTQgNDIuMjEiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUwLDApIj48bGluZSB4MT0iNDAiIHkxPSIyMzQiIHgyPSI0MCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9Ijk2Ljg5IiB5MT0iMjM0IiB4Mj0iOTYuODkiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNTMuNzgiIHkxPSIyMzQiIHgyPSIxNTMuNzgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyMTAuNjciIHkxPSIyMzQiIHgyPSIyMTAuNjciIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNjcuNTYiIHkxPSIyMzQiIHgyPSIyNjcuNTYiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjIzNCIgeDI9IjI5NiIgeTI9IjIzNCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjIwMi4zMSIgeDI9IjI5NiIgeTI9IjIwMi4zMSIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjE3MC42MiIgeDI9IjI5NiIgeTI9IjE3MC42MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjEzOC45MiIgeDI9IjI5NiIgeTI9IjEzOC45MiIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9IjEwNy4yMyIgeDI9IjI5NiIgeTI9IjEwNy4yMyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MCIgeTE9Ijc1LjU0IiB4Mj0iMjk2IiB5Mj0iNzUuNTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAiIHkxPSI0My44NSIgeDI9IjI5NiIgeTI9IjQzLjg1IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQwIiB5MT0iMjM0IiB4Mj0iMzAxIiB5Mj0iMjM0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMxMCwyMzQgMzAxLDIyOS41IDMwMSwyMzguNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI0MCIgeTE9IjIzNCIgeDI9IjQwIiB5Mj0iMjMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDAsMTQgMzUuNSwyMyA0NC41LDIzIiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjQwIiB5MT0iMjM0IiB4Mj0iNDAiIHkyPSIyMzgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIyNTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGxpbmUgeDE9Ijk2Ljg5IiB5MT0iMjM0IiB4Mj0iOTYuODkiIHkyPSIyMzgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijk2Ljg5IiB5PSIyNTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwMDwvdGV4dD48bGluZSB4MT0iMTUzLjc4IiB5MT0iMjM0IiB4Mj0iMTUzLjc4IiB5Mj0iMjM4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNTMuNzgiIHk9IjI1MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjAwPC90ZXh0PjxsaW5lIHgxPSIyMTAuNjciIHkxPSIyMzQiIHgyPSIyMTAuNjciIHkyPSIyMzgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIxMC42NyIgeT0iMjUyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zMDA8L3RleHQ+PGxpbmUgeDE9IjI2Ny41NiIgeTE9IjIzNCIgeDI9IjI2Ny41NiIgeTI9IjIzOCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjY3LjU2IiB5PSIyNTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQwMDwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSIyMzQiIHgyPSI0MCIgeTI9IjIzNCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSIyMDIuMzEiIHgyPSI0MCIgeTI9IjIwMi4zMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIiIHk9IjIwNi4zMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSIxNzAuNjIiIHgyPSI0MCIgeTI9IjE3MC42MiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIiIHk9IjE3NC42MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSIxMzguOTIiIHgyPSI0MCIgeTI9IjEzOC45MiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIiIHk9IjE0Mi45MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MzwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSIxMDcuMjMiIHgyPSI0MCIgeTI9IjEwNy4yMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIiIHk9IjExMS4yMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NDwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSI3NS41NCIgeDI9IjQwIiB5Mj0iNzUuNTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyIiB5PSI3OS41NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NTwvdGV4dD48bGluZSB4MT0iMzYiIHkxPSI0My44NSIgeDI9IjQwIiB5Mj0iNDMuODUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyIiB5PSI0Ny44NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+NjwvdGV4dD48dGV4dCB4PSIzMTQiIHk9IjI3MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+ZiAoSHopPC90ZXh0Pjx0ZXh0IHg9IjM0IiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5hbXBsaXR1ZGUgKFYpPC90ZXh0PjxsaW5lIHgxPSI5Ni44OSIgeTE9IjIzNCIgeDI9Ijk2Ljg5IiB5Mj0iNzUuNTQiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjEwLjY3IiB5MT0iMjM0IiB4Mj0iMjEwLjY3IiB5Mj0iMTg2LjQ2IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTA0Ljg5IiB5PSI3OS41NCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj41LDAgVjwvdGV4dD48dGV4dCB4PSIyMTAuNjciIHk9IjE3Ni40NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MSw1IFYgKHJhbmcgMyk8L3RleHQ+PC9nPjwvc3ZnPg==)
*Exemple de la fiche : le signal somme de deux sinusoïdes, 5,0 V à 100 Hz et 1,5 V à 300 Hz, et son spectre d'amplitude à deux raies.*
<!-- /schema -->

> **Définition.** Le **spectre d'amplitude** d'un signal est le graphique qui
> donne l'**amplitude de chaque composante sinusoïdale en fonction de sa
> fréquence**. Chaque composante y apparaît comme une **raie** verticale.

| Signal | Spectre d'amplitude |
|---|---|
| sinusoïdal pur (fréquence $f$) | **une seule raie**, à $f$ |
| périodique non sinusoïdal (fréquence $f_1$) | **plusieurs raies**, à $f_1$, $2f_1$, $3f_1$… |

> **Exemple.** $u(t) = 5{,}0\cos(2\pi \times 100\,t) + 1{,}5\cos(2\pi \times 300\,t)$
> (en V) : deux raies — $(100 \text{ Hz},\ 5{,}0 \text{ V})$ et
> $(300 \text{ Hz},\ 1{,}5 \text{ V})$. Fondamental à $100$ Hz, harmonique de
> rang $3$. La fréquence **du signal** est $100$ Hz, sa période
> $T = \dfrac{1}{100} = 10$ ms.

> ⚠️ **Bien lire les axes.** L'oscillogramme montre le signal **en fonction du
> temps** (axe en s) ; le spectre le montre **en fonction de la fréquence** (axe
> en Hz). Ce sont deux représentations du **même** signal.

---

## 3. Ondes sonores : hauteur et timbre

Un son musical est un signal périodique. Deux attributs perçus par l'oreille se
lisent directement sur son spectre :

| Perception | Ce qui la détermine |
|---|---|
| **Hauteur** (grave / aigu) | la **fréquence du fondamental** $f_1$ |
| **Timbre** (« couleur » du son) | la **composition en harmoniques** : nombre et amplitudes relatives des raies |

> **Exemple.** Un diapason et une guitare jouent le la à $440$ Hz.
> - Le diapason produit un **son pur** : une seule raie, à $440$ Hz.
> - La guitare produit un **son composé** : raies à $440$, $880$, $1320$ Hz…
> Même fondamental, donc **même hauteur** — mais des harmoniques différents,
> donc des **timbres** différents. C'est pour cela qu'on les distingue à
> l'oreille.

> ⚠️ Deux sons de même hauteur n'ont pas forcément le même spectre : ils
> partagent seulement la **raie du fondamental**. Le timbre, lui, est dans le
> reste du spectre.

---

## 4. Intensité acoustique et niveau sonore

### L'intensité acoustique (rappel élargi)

$$\boxed{I = \frac{P}{S}} \qquad I \text{ en W·m}^{-2},\ P \text{ en W},\ S \text{ en m}^2$$

Pour une source qui émet dans toutes les directions, à la distance $d$ la
puissance se répartit sur une sphère de surface $S = 4\pi d^2$ :

$$I = \frac{P}{4\pi d^2}$$

> **Exemple.** À deux fois plus loin, $d^2$ est multiplié par $4$ : l'intensité
> est **divisée par 4**. À dix fois plus loin, divisée par $100$.

### Pourquoi une échelle logarithmique ?

L'oreille perçoit des intensités de $I_0 = 1{,}0 \times 10^{-12}$ W·m⁻² (seuil
d'audibilité) à environ $1$ W·m⁻² (seuil de douleur) : **douze ordres de
grandeur**. Une échelle linéaire est inutilisable ; on comprime avec le
**logarithme décimal** — celui de ton chapitre de maths, $\log(10^n) = n$.

### Le niveau sonore ou niveau d'intensité sonore

$$\boxed{L = 10 \log\left(\frac{I}{I_0}\right)} \qquad
L \text{ en décibels (dB)},\ I \text{ et } I_0 \text{ en W·m}^{-2},\ I_0 = 1{,}0 \times 10^{-12} \text{ W·m}^{-2}$$

Dans l'autre sens :

$$\boxed{I = I_0 \times 10^{L/10}}$$

> **Exemple.** $I = 1{,}0 \times 10^{-5}$ W·m⁻² :
> $L = 10\log\left(\dfrac{10^{-5}}{10^{-12}}\right) = 10\log(10^{7}) = 70$ dB.
> Et réciproquement, $L = 70$ dB redonne
> $I = 10^{-12} \times 10^{7} = 1{,}0 \times 10^{-5}$ W·m⁻².

### Les deux réflexes « décibels »

| Sur l'intensité $I$ | Sur le niveau $L$ |
|---|---|
| $I \times 2$ | $L + 3$ dB (car $10\log 2 \approx 3{,}0$) |
| $I \times 10$ | $L + 10$ dB |
| $I \times 100$ | $L + 20$ dB |
| $I \div 100$ | $L - 20$ dB |

> **Exemple.** Deux machines identiques côte à côte : les **intensités**
> s'ajoutent, $I \to 2I$, donc le niveau passe de $80$ dB à $83$ dB — et
> sûrement pas à $160$ dB. **Les niveaux sonores ne s'additionnent jamais.**

### Ordres de grandeur à connaître pour situer

<!-- schema:niveaux-db -->
![Les ordres de grandeur de la fiche sur l'échelle des décibels : risque auditif dès 85 dB en exposition prolongée, douleur vers 120 dB.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI0MCIgeT0iOTQiIHdpZHRoPSIzMzIuNzEiIGhlaWdodD0iMzIiIHJ4PSIwIiBmaWxsPSIjZTJmMmU4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMzcyLjcxIiB5PSI5NCIgd2lkdGg9IjEzNyIgaGVpZ2h0PSIzMiIgcng9IjAiIGZpbGw9IiNmZGUzYzYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSI1MDkuNzEiIHk9Ijk0IiB3aWR0aD0iNzguMjkiIGhlaWdodD0iMzIiIHJ4PSIwIiBmaWxsPSIjZjZjN2M3IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iNDAiIHk9Ijk0IiB3aWR0aD0iNTQ4IiBoZWlnaHQ9IjMyIiByeD0iMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS40Ii8+PGxpbmUgeDE9IjQwIiB5MT0iMTI2IiB4Mj0iNDAiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQwIiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+PGxpbmUgeDE9Ijc5LjE0IiB5MT0iMTI2IiB4Mj0iNzkuMTQiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijc5LjE0IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSIxMTguMjkiIHkxPSIxMjYiIHgyPSIxMTguMjkiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjExOC4yOSIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iMTU3LjQzIiB5MT0iMTI2IiB4Mj0iMTU3LjQzIiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxNTcuNDMiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzA8L3RleHQ+PGxpbmUgeDE9IjE5Ni41NyIgeTE9IjEyNiIgeDI9IjE5Ni41NyIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTk2LjU3IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQwPC90ZXh0PjxsaW5lIHgxPSIyMzUuNzEiIHkxPSIxMjYiIHgyPSIyMzUuNzEiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIzNS43MSIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41MDwvdGV4dD48bGluZSB4MT0iMjc0Ljg2IiB5MT0iMTI2IiB4Mj0iMjc0Ljg2IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNzQuODYiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjA8L3RleHQ+PGxpbmUgeDE9IjMxNCIgeTE9IjEyNiIgeDI9IjMxNCIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzE0IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjcwPC90ZXh0PjxsaW5lIHgxPSIzNTMuMTQiIHkxPSIxMjYiIHgyPSIzNTMuMTQiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM1My4xNCIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44MDwvdGV4dD48bGluZSB4MT0iMzkyLjI5IiB5MT0iMTI2IiB4Mj0iMzkyLjI5IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOTIuMjkiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+OTA8L3RleHQ+PGxpbmUgeDE9IjQzMS40MyIgeTE9IjEyNiIgeDI9IjQzMS40MyIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDMxLjQzIiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwMDwvdGV4dD48bGluZSB4MT0iNDcwLjU3IiB5MT0iMTI2IiB4Mj0iNDcwLjU3IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0NzAuNTciIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTEwPC90ZXh0PjxsaW5lIHgxPSI1MDkuNzEiIHkxPSIxMjYiIHgyPSI1MDkuNzEiIHkyPSIxMzIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUwOS43MSIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMjA8L3RleHQ+PGxpbmUgeDE9IjU0OC44NiIgeTE9IjEyNiIgeDI9IjU0OC44NiIgeTI9IjEzMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTQ4Ljg2IiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEzMDwvdGV4dD48bGluZSB4MT0iNTg4IiB5MT0iMTI2IiB4Mj0iNTg4IiB5Mj0iMTMyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1ODgiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTQwPC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMTQ2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmRCPC90ZXh0Pjx0ZXh0IHg9IjQ0MS4yMSIgeT0iMTE1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5kYW5nZXI8L3RleHQ+PHRleHQgeD0iNTQ4Ljg2IiB5PSIxMTUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmRvdWxldXI8L3RleHQ+PGxpbmUgeDE9IjQwIiB5MT0iOTQiIHgyPSI0MCIgeTI9IjgwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+c2V1aWw8L3RleHQ+PHRleHQgeD0iNDAiIHk9Ijc1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPmQnYXVkaWJpbGl0w6k8L3RleHQ+PHRleHQgeD0iMjc0Ljg2IiB5PSIxNjYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmNvbnZlcnNhdGlvbjwvdGV4dD48bGluZSB4MT0iNDMxLjQzIiB5MT0iOTQiIHgyPSI0MzEuNDMiIHkyPSI4MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDMxLjQzIiB5PSI2MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y29uY2VydDwvdGV4dD48dGV4dCB4PSIzNzIuNzEiIHk9IjQwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zZXVpbCBkZSBkYW5nZXIgOiA4NSBkQjwvdGV4dD48L3N2Zz4=)
*Les ordres de grandeur de la fiche sur l'échelle des décibels : risque auditif dès 85 dB en exposition prolongée, douleur vers 120 dB.*
<!-- /schema -->

| Situation | Niveau sonore (indicatif) |
|---|---|
| seuil d'audibilité | $0$ dB |
| conversation | $\approx 60$ dB |
| risque auditif (exposition prolongée) | $\approx 85$ dB |
| concert, discothèque | $\approx 100$ dB |
| seuil de douleur | $\approx 120$ dB |

---

## 5. Ondes électromagnétiques et transmission d'informations

### La relation fréquence – longueur d'onde

Dans le vide (et en pratique dans l'air), toutes les ondes électromagnétiques
vont à $c = 3{,}00 \times 10^8$ m·s⁻¹ :

$$\boxed{c = \lambda \times f} \qquad \lambda \text{ en m},\ f \text{ en Hz},\ c \text{ en m·s}^{-1}$$

> **Exemple.** Radio FM à $f = 100$ MHz $= 1{,}00 \times 10^8$ Hz :
> $\lambda = \dfrac{c}{f} = \dfrac{3{,}00 \times 10^8}{1{,}00 \times 10^8} = 3{,}00$ m.
> Wi-Fi à $2{,}4$ GHz : $\lambda = \dfrac{3{,}0 \times 10^8}{2{,}4 \times 10^9} \approx 13$ cm.

> ⚠️ **Convertis d'abord** : MHz $= 10^6$ Hz, GHz $= 10^9$ Hz, nm $= 10^{-9}$ m.
> C'est là que se perdent les points, pas dans la formule.

### Le spectre électromagnétique (rappel de première)

Par fréquence croissante — donc longueur d'onde décroissante :
ondes radio · micro-ondes · infrarouge · **visible** ($\approx 400$ à $800$ nm) ·
ultraviolet · rayons X · rayons gamma. Les deux classements sont inverses l'un
de l'autre.

### Transmettre une information

Le principe reste celui de première : l'information **module** une onde
porteuse, le récepteur décode. Ce que la terminale ajoute, c'est le choix du
**canal de transmission** :

| Canal | Onde utilisée | Exemples |
|---|---|---|
| **Propagation libre** | onde électromagnétique dans l'air (ondes hertziennes) | radio, télévision, 4G/5G, Wi-Fi, Bluetooth |
| **Propagation guidée** | onde confinée dans un guide | câble coaxial (signal électrique), **fibre optique** (lumière, souvent infrarouge) |

Deux critères pour comparer les canaux :

- l'**atténuation** : l'amplitude du signal diminue au fil de la propagation
  (absorption par le milieu) — très faible dans une fibre optique, d'où son
  usage pour les longues distances ;
- la **fréquence de la porteuse** : plus elle est élevée, plus on peut
  transporter d'informations par seconde, mais plus l'onde est facilement
  absorbée par les obstacles (c'est le compromis des réseaux mobiles).

---

## 6. Méthodes

### Lire un spectre d'amplitude

1. Repère la raie de **plus basse fréquence** : c'est le fondamental $f_1$ —
   il donne la **fréquence du signal** et la **hauteur** du son.
2. Vérifie que les autres raies sont aux **multiples** $2f_1$, $3f_1$… et
   identifie le **rang** de chaque harmonique : $n = \dfrac{f_n}{f_1}$.
3. Une seule raie → son **pur** (sinusoïdal). Plusieurs raies → son
   **composé** ; les amplitudes relatives font le **timbre**.
4. La période du signal s'en déduit : $T = \dfrac{1}{f_1}$.

### Manier le niveau sonore sans se tromper

1. Toujours passer par l'**intensité** : c'est $I$ qui s'ajoute (plusieurs
   sources) et qui se calcule ($I = P/(4\pi d^2)$), jamais $L$.
2. $I \to L$ : $L = 10\log(I/I_0)$ — touche **log** de la calculatrice (log
   décimal), pas **ln**.
3. $L \to I$ : $I = I_0 \times 10^{L/10}$.
4. Contrôle l'ordre de grandeur : entre $0$ et $120$ dB pour un son ; un
   résultat de $840$ dB signale un oubli de $I_0$ ou une erreur de puissance
   de dix.

---

## 7. Tableau récapitulatif

| À savoir | Formule / règle | Unités |
|---|---|---|
| Signal sinusoïdal | $s(t) = A\cos(2\pi f t + \varphi)$ | $f$ en Hz |
| Harmonique de rang $n$ | $f_n = n\,f_1$ | Hz |
| Spectre d'amplitude | amplitude de chaque composante **en fonction de la fréquence** | — |
| Hauteur | fréquence du **fondamental** | Hz |
| Timbre | **harmoniques** (nombre, amplitudes relatives) | — |
| Intensité acoustique | $I = \dfrac{P}{S}$ ; source isotrope : $I = \dfrac{P}{4\pi d^2}$ | W·m⁻² |
| Niveau sonore | $L = 10\log\left(\dfrac{I}{I_0}\right)$, $I_0 = 1{,}0 \times 10^{-12}$ W·m⁻² | dB |
| Sens inverse | $I = I_0 \times 10^{L/10}$ | W·m⁻² |
| Réflexes dB | $I \times 2 \Rightarrow +3$ dB ; $I \times 10 \Rightarrow +10$ dB | — |
| Ondes électromagnétiques | $c = \lambda f$, $c = 3{,}00 \times 10^8$ m·s⁻¹ | $\lambda$ en m, $f$ en Hz |
| Transmission | porteuse **modulée** ; propagation **libre** ou **guidée** (fibre) | — |

---

## 8. Les erreurs qui coûtent des points

1. **Additionner les niveaux sonores** : deux sources de $60$ dB donnent
   $63$ dB, pas $120$ dB. Ce sont les **intensités** (en W·m⁻²) qui
   s'ajoutent, jamais les décibels.
2. **Utiliser ln au lieu de log** dans $L = 10\log(I/I_0)$ : le niveau sonore
   est défini avec le **logarithme décimal**. Avec ln, $10^{-5}/10^{-12}$
   donnerait $161$ dB au lieu de $70$ dB.
3. **Confondre hauteur et timbre** : la hauteur est la fréquence du
   **fondamental** ; le timbre vient des **harmoniques**. Supprimer les
   harmoniques change le timbre, pas la hauteur.
4. **Prendre la raie la plus haute (ou la dernière) pour la fréquence du
   signal** : la fréquence du signal est celle du fondamental, la raie de
   **plus basse fréquence** — même si un harmonique a une amplitude plus
   grande.
5. **Oublier les conversions** MHz/GHz → Hz et nm → m dans $c = \lambda f$ :
   une erreur de $10^3$ sur la fréquence déplace l'onde d'un domaine entier du
   spectre.
6. **Oublier que $I$ décroît en $1/d^2$** : doubler la distance divise $I$ par
   $4$ (soit $-6$ dB), pas par $2$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Ondes et signaux »),
extrait via WebFetch depuis le PDF officiel cache.media.education.gouv.fr
(spe261_annexe_1158935.pdf). À confronter au PDF avant publication.

Contenus couverts, tels que listés dans l'extraction :
- « Notion d'onde ; spectre d'amplitude ; transmission d'un signal » → § 1
  (rappel actif, le détail est dans le chapitre de première ondes-information
  du même parcours, cité en prérequis et non répété), § 2 (spectre), § 5
  (transmission).
- « Ondes sonores : hauteur, timbre, intensité acoustique, niveau sonore »
  → § 3-4.
- « Ondes électromagnétiques : spectre, transmission d'informations » → § 5.

Liens inter-chapitres assumés :
- § 2 renvoie au chapitre de maths complexes-exponentielle (même parcours) pour
  la forme A·cos(ωt+φ) obtenue à partir de a·cos(ωt) + b·sin(ωt) — le
  programme de maths cite explicitement cette capacité.
- § 4 renvoie au chapitre exponentielle-logarithme (lien ln / log décimal,
  explicitement au programme de maths).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La décomposition en fondamental + harmoniques est présentée comme propriété
  ADMISE (pas de série de Fourier nommée) : vérifier la formulation exacte du
  BO (« spectre d'amplitude ») et le niveau d'exigence attendu.
- I₀ = 1,0×10⁻¹² W·m⁻² : valeur conventionnelle du seuil d'audibilité à
  1 kHz ; l'extraction locale ne la donne pas. En sujet de bac elle est
  normalement fournie.
- § 5 « transmission » : propagation libre / guidée, atténuation et le
  compromis fréquence de porteuse / quantité d'information transmise sont la
  lecture usuelle de « transmission d'informations » en STI2D — vérifier sur
  le PDF les capacités exactes (le mot « débit » n'a volontairement pas été
  employé comme grandeur).
- Ordres de grandeur du tableau des niveaux sonores (60, 85, 100, 120 dB) :
  valeurs usuelles, non fournies par le texte.
- Bornes du visible 400–800 nm : reprises du chapitre de première (usage ;
  certains manuels retiennent 380–780).

Calculs vérifiés numériquement : 10·log(10⁷) = 70 dB ; 10⁻¹²×10⁷ = 10⁻⁵ ;
10·log 2 = 3,01 ; λ(FM 100 MHz) = 3,00 m ; λ(2,4 GHz) = 0,125 m ≈ 13 cm ;
T = 1/100 = 10 ms.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
