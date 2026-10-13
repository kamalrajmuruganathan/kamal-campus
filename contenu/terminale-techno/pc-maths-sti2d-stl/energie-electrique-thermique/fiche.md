---
id: tale-sti2d-pc-energie-electrique-thermique
titre: "Énergie électrique, thermique et lumineuse"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 14
prerequis:
  - Puissance, énergie et rendement d'une conversion (Première STI2D/STL)
  - Loi d'Ohm et puissance électrique (Première STI2D/STL)
  - Puissances de dix et conversions d'unités (Seconde)
statut: brouillon
relu_par: null
---

# Énergie électrique, thermique et lumineuse

> Une centrale produit de l'électricité, une ligne très haute tension la
> transporte, un chauffe-eau la convertit en énergie thermique, une batterie la
> stocke, un panneau photovoltaïque la fabrique à partir de la lumière. Ce
> chapitre suit l'énergie sur tout ce trajet — **électrique**, **thermique**,
> **chimique**, **lumineuse** — avec, à chaque étape, une unité à surveiller.

---

## 1. L'énergie électrique en régime sinusoïdal

### Tension sinusoïdale : période, fréquence

La tension du secteur n'est pas continue : elle **oscille** en suivant une
sinusoïde, caractérisée par sa **période** $T$ (en secondes, s), durée d'un
motif complet ; sa **fréquence** $f$ (en hertz, Hz), nombre de motifs par
seconde ; sa **valeur maximale** $U_{\text{max}}$ (en volts, V), l'amplitude.

$$\boxed{f = \frac{1}{T}}$$

> **Exemple.** Le secteur français oscille à $f = 50$ Hz, donc
> $T = \dfrac{1}{50} = 0{,}020$ s $= 20$ ms : $50$ allers-retours complets
> chaque seconde.

### Valeur efficace : ce que mesure le multimètre

> **Définition.** La **valeur efficace** $U$ d'une tension sinusoïdale est la
> valeur de la tension continue qui dissiperait la même puissance dans le même
> conducteur ohmique. Pour une sinusoïde :

$$\boxed{U = \frac{U_{\text{max}}}{\sqrt{2}}}$$

La même relation vaut pour l'intensité : $I = \dfrac{I_{\text{max}}}{\sqrt{2}}$.

> **Exemple.** « 230 V » sur une prise est une valeur **efficace** : la tension
> monte réellement à $U_{\text{max}} = 230 \times \sqrt{2} \approx 325$ V, cent
> fois par seconde. ⚠️ Le multimètre en mode alternatif (AC) affiche la valeur
> **efficace** ; l'oscilloscope, lui, montre $U_{\text{max}}$ (et $T$) sur la
> courbe : divise par $\sqrt{2}$ pour passer de l'un à l'autre.

### Notion de déphasage

<!-- schema:dephasage -->
![Exemple de la fiche : les maxima de i arrivent 2,5 ms après ceux de u, pour une période de 20 ms, d'où un déphasage de π/4 rad.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNDAiIHkxPSIyNTQiIHgyPSI2MTkiIHkyPSIyNTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjI4LDI1NCA2MTksMjQ5LjUgNjE5LDI1OC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjQwIiB5MT0iMjU0IiB4Mj0iNDAiIHkyPSIyMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MCwxNCAzNS41LDIzIDQ0LjUsMjMiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNDAiIHkxPSIyNTQiIHgyPSI0MCIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48bGluZSB4MT0iMTExLjc1IiB5MT0iMjU0IiB4Mj0iMTExLjc1IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMTEuNzUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMTgzLjUiIHkxPSIyNTQiIHgyPSIxODMuNSIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTgzLjUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+PGxpbmUgeDE9IjI1NS4yNSIgeTE9IjI1NCIgeDI9IjI1NS4yNSIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU1LjI1IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE1PC90ZXh0PjxsaW5lIHgxPSIzMjciIHkxPSIyNTQiIHgyPSIzMjciIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyNyIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iMzk4Ljc1IiB5MT0iMjU0IiB4Mj0iMzk4Ljc1IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOTguNzUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjU8L3RleHQ+PGxpbmUgeDE9IjQ3MC41IiB5MT0iMjU0IiB4Mj0iNDcwLjUiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ3MC41IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMwPC90ZXh0PjxsaW5lIHgxPSI1NDIuMjUiIHkxPSIyNTQiIHgyPSI1NDIuMjUiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU0Mi4yNSIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zNTwvdGV4dD48bGluZSB4MT0iNjE0IiB5MT0iMjU0IiB4Mj0iNjE0IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MTQiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDA8L3RleHQ+PHRleHQgeD0iNjM0IiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPnQgKG1zKTwvdGV4dD48bGluZSB4MT0iNDAiIHkxPSIxMzMuOTQiIHgyPSI2MTQiIHkyPSIxMzMuOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNDAgNjMuMzEgTCA0MS45MSA2My4zNyBMIDQzLjgzIDYzLjU2IEwgNDUuNzQgNjMuODcgTCA0Ny42NSA2NC4zIEwgNDkuNTcgNjQuODYgTCA1MS40OCA2NS41MyBMIDUzLjM5IDY2LjMzIEwgNTUuMzEgNjcuMjQgTCA1Ny4yMiA2OC4yNyBMIDU5LjEzIDY5LjQyIEwgNjEuMDUgNzAuNjggTCA2Mi45NiA3Mi4wNSBMIDY0Ljg3IDczLjUzIEwgNjYuNzkgNzUuMTEgTCA2OC43IDc2LjggTCA3MC42MSA3OC41OSBMIDcyLjUzIDgwLjQ3IEwgNzQuNDQgODIuNDUgTCA3Ni4zNSA4NC41MiBMIDc4LjI3IDg2LjY4IEwgODAuMTggODguOTIgTCA4Mi4wOSA5MS4yNCBMIDg0LjAxIDkzLjYzIEwgODUuOTIgOTYuMDkgTCA4Ny44MyA5OC42MyBMIDg5Ljc1IDEwMS4yMiBMIDkxLjY2IDEwMy44NyBMIDkzLjU3IDEwNi41NyBMIDk1LjQ5IDEwOS4zMiBMIDk3LjQgMTEyLjExIEwgOTkuMzEgMTE0Ljk1IEwgMTAxLjIzIDExNy44MSBMIDEwMy4xNCAxMjAuNyBMIDEwNS4wNSAxMjMuNjIgTCAxMDYuOTcgMTI2LjU2IEwgMTA4Ljg4IDEyOS41IEwgMTEwLjc5IDEzMi40NiBMIDExMi43MSAxMzUuNDIgTCAxMTQuNjIgMTM4LjM3IEwgMTE2LjUzIDE0MS4zMiBMIDExOC40NSAxNDQuMjUgTCAxMjAuMzYgMTQ3LjE3IEwgMTIyLjI3IDE1MC4wNiBMIDEyNC4xOSAxNTIuOTMgTCAxMjYuMSAxNTUuNzYgTCAxMjguMDEgMTU4LjU2IEwgMTI5LjkzIDE2MS4zMSBMIDEzMS44NCAxNjQuMDEgTCAxMzMuNzUgMTY2LjY2IEwgMTM1LjY3IDE2OS4yNSBMIDEzNy41OCAxNzEuNzggTCAxMzkuNDkgMTc0LjI0IEwgMTQxLjQxIDE3Ni42NCBMIDE0My4zMiAxNzguOTYgTCAxNDUuMjMgMTgxLjE5IEwgMTQ3LjE1IDE4My4zNSBMIDE0OS4wNiAxODUuNDIgTCAxNTAuOTcgMTg3LjQgTCAxNTIuODkgMTg5LjI5IEwgMTU0LjggMTkxLjA3IEwgMTU2LjcxIDE5Mi43NiBMIDE1OC42MyAxOTQuMzUgTCAxNjAuNTQgMTk1LjgzIEwgMTYyLjQ1IDE5Ny4yIEwgMTY0LjM3IDE5OC40NiBMIDE2Ni4yOCAxOTkuNiBMIDE2OC4xOSAyMDAuNjMgTCAxNzAuMTEgMjAxLjU1IEwgMTcyLjAyIDIwMi4zNCBMIDE3My45MyAyMDMuMDIgTCAxNzUuODUgMjAzLjU3IEwgMTc3Ljc2IDIwNC4wMSBMIDE3OS42NyAyMDQuMzEgTCAxODEuNTkgMjA0LjUgTCAxODMuNSAyMDQuNTYgTCAxODUuNDEgMjA0LjUgTCAxODcuMzMgMjA0LjMxIEwgMTg5LjI0IDIwNC4wMSBMIDE5MS4xNSAyMDMuNTcgTCAxOTMuMDcgMjAzLjAyIEwgMTk0Ljk4IDIwMi4zNCBMIDE5Ni44OSAyMDEuNTUgTCAxOTguODEgMjAwLjYzIEwgMjAwLjcyIDE5OS42IEwgMjAyLjYzIDE5OC40NiBMIDIwNC41NSAxOTcuMiBMIDIwNi40NiAxOTUuODMgTCAyMDguMzcgMTk0LjM1IEwgMjEwLjI5IDE5Mi43NiBMIDIxMi4yIDE5MS4wNyBMIDIxNC4xMSAxODkuMjkgTCAyMTYuMDMgMTg3LjQgTCAyMTcuOTQgMTg1LjQyIEwgMjE5Ljg1IDE4My4zNSBMIDIyMS43NyAxODEuMTkgTCAyMjMuNjggMTc4Ljk2IEwgMjI1LjU5IDE3Ni42NCBMIDIyNy41MSAxNzQuMjQgTCAyMjkuNDIgMTcxLjc4IEwgMjMxLjMzIDE2OS4yNSBMIDIzMy4yNSAxNjYuNjYgTCAyMzUuMTYgMTY0LjAxIEwgMjM3LjA3IDE2MS4zMSBMIDIzOC45OSAxNTguNTYgTCAyNDAuOSAxNTUuNzYgTCAyNDIuODEgMTUyLjkzIEwgMjQ0LjczIDE1MC4wNiBMIDI0Ni42NCAxNDcuMTcgTCAyNDguNTUgMTQ0LjI1IEwgMjUwLjQ3IDE0MS4zMiBMIDI1Mi4zOCAxMzguMzcgTCAyNTQuMjkgMTM1LjQyIEwgMjU2LjIxIDEzMi40NiBMIDI1OC4xMiAxMjkuNSBMIDI2MC4wMyAxMjYuNTYgTCAyNjEuOTUgMTIzLjYyIEwgMjYzLjg2IDEyMC43IEwgMjY1Ljc3IDExNy44MSBMIDI2Ny42OSAxMTQuOTUgTCAyNjkuNiAxMTIuMTEgTCAyNzEuNTEgMTA5LjMyIEwgMjczLjQzIDEwNi41NyBMIDI3NS4zNCAxMDMuODcgTCAyNzcuMjUgMTAxLjIyIEwgMjc5LjE3IDk4LjYzIEwgMjgxLjA4IDk2LjA5IEwgMjgyLjk5IDkzLjYzIEwgMjg0LjkxIDkxLjI0IEwgMjg2LjgyIDg4LjkyIEwgMjg4LjczIDg2LjY4IEwgMjkwLjY1IDg0LjUyIEwgMjkyLjU2IDgyLjQ1IEwgMjk0LjQ3IDgwLjQ3IEwgMjk2LjM5IDc4LjU5IEwgMjk4LjMgNzYuOCBMIDMwMC4yMSA3NS4xMSBMIDMwMi4xMyA3My41MyBMIDMwNC4wNCA3Mi4wNSBMIDMwNS45NSA3MC42OCBMIDMwNy44NyA2OS40MiBMIDMwOS43OCA2OC4yNyBMIDMxMS42OSA2Ny4yNCBMIDMxMy42MSA2Ni4zMyBMIDMxNS41MiA2NS41MyBMIDMxNy40MyA2NC44NiBMIDMxOS4zNSA2NC4zIEwgMzIxLjI2IDYzLjg3IEwgMzIzLjE3IDYzLjU2IEwgMzI1LjA5IDYzLjM3IEwgMzI3IDYzLjMxIEwgMzI4LjkxIDYzLjM3IEwgMzMwLjgzIDYzLjU2IEwgMzMyLjc0IDYzLjg3IEwgMzM0LjY1IDY0LjMgTCAzMzYuNTcgNjQuODYgTCAzMzguNDggNjUuNTMgTCAzNDAuMzkgNjYuMzMgTCAzNDIuMzEgNjcuMjQgTCAzNDQuMjIgNjguMjcgTCAzNDYuMTMgNjkuNDIgTCAzNDguMDUgNzAuNjggTCAzNDkuOTYgNzIuMDUgTCAzNTEuODcgNzMuNTMgTCAzNTMuNzkgNzUuMTEgTCAzNTUuNyA3Ni44IEwgMzU3LjYxIDc4LjU5IEwgMzU5LjUzIDgwLjQ3IEwgMzYxLjQ0IDgyLjQ1IEwgMzYzLjM1IDg0LjUyIEwgMzY1LjI3IDg2LjY4IEwgMzY3LjE4IDg4LjkyIEwgMzY5LjA5IDkxLjI0IEwgMzcxLjAxIDkzLjYzIEwgMzcyLjkyIDk2LjA5IEwgMzc0LjgzIDk4LjYyIEwgMzc2Ljc1IDEwMS4yMiBMIDM3OC42NiAxMDMuODcgTCAzODAuNTcgMTA2LjU3IEwgMzgyLjQ5IDEwOS4zMiBMIDM4NC40IDExMi4xMSBMIDM4Ni4zMSAxMTQuOTUgTCAzODguMjMgMTE3LjgxIEwgMzkwLjE0IDEyMC43IEwgMzkyLjA1IDEyMy42MiBMIDM5My45NyAxMjYuNTYgTCAzOTUuODggMTI5LjUgTCAzOTcuNzkgMTMyLjQ2IEwgMzk5LjcxIDEzNS40MiBMIDQwMS42MiAxMzguMzcgTCA0MDMuNTMgMTQxLjMyIEwgNDA1LjQ1IDE0NC4yNSBMIDQwNy4zNiAxNDcuMTcgTCA0MDkuMjcgMTUwLjA2IEwgNDExLjE5IDE1Mi45MyBMIDQxMy4xIDE1NS43NiBMIDQxNS4wMSAxNTguNTYgTCA0MTYuOTMgMTYxLjMxIEwgNDE4Ljg0IDE2NC4wMSBMIDQyMC43NSAxNjYuNjYgTCA0MjIuNjcgMTY5LjI1IEwgNDI0LjU4IDE3MS43OCBMIDQyNi40OSAxNzQuMjQgTCA0MjguNDEgMTc2LjY0IEwgNDMwLjMyIDE3OC45NiBMIDQzMi4yMyAxODEuMTkgTCA0MzQuMTUgMTgzLjM1IEwgNDM2LjA2IDE4NS40MiBMIDQzNy45NyAxODcuNCBMIDQzOS44OSAxODkuMjkgTCA0NDEuOCAxOTEuMDcgTCA0NDMuNzEgMTkyLjc2IEwgNDQ1LjYzIDE5NC4zNSBMIDQ0Ny41NCAxOTUuODMgTCA0NDkuNDUgMTk3LjIgTCA0NTEuMzcgMTk4LjQ2IEwgNDUzLjI4IDE5OS42IEwgNDU1LjE5IDIwMC42MyBMIDQ1Ny4xMSAyMDEuNTUgTCA0NTkuMDIgMjAyLjM0IEwgNDYwLjkzIDIwMy4wMiBMIDQ2Mi44NSAyMDMuNTcgTCA0NjQuNzYgMjA0LjAxIEwgNDY2LjY3IDIwNC4zMSBMIDQ2OC41OSAyMDQuNSBMIDQ3MC41IDIwNC41NiBMIDQ3Mi40MSAyMDQuNSBMIDQ3NC4zMyAyMDQuMzEgTCA0NzYuMjQgMjA0LjAxIEwgNDc4LjE1IDIwMy41NyBMIDQ4MC4wNyAyMDMuMDIgTCA0ODEuOTggMjAyLjM0IEwgNDgzLjg5IDIwMS41NSBMIDQ4NS44MSAyMDAuNjMgTCA0ODcuNzIgMTk5LjYgTCA0ODkuNjMgMTk4LjQ2IEwgNDkxLjU1IDE5Ny4yIEwgNDkzLjQ2IDE5NS44MyBMIDQ5NS4zNyAxOTQuMzUgTCA0OTcuMjkgMTkyLjc2IEwgNDk5LjIgMTkxLjA3IEwgNTAxLjExIDE4OS4yOSBMIDUwMy4wMyAxODcuNCBMIDUwNC45NCAxODUuNDIgTCA1MDYuODUgMTgzLjM1IEwgNTA4Ljc3IDE4MS4xOSBMIDUxMC42OCAxNzguOTYgTCA1MTIuNTkgMTc2LjY0IEwgNTE0LjUxIDE3NC4yNCBMIDUxNi40MiAxNzEuNzggTCA1MTguMzMgMTY5LjI1IEwgNTIwLjI1IDE2Ni42NiBMIDUyMi4xNiAxNjQuMDEgTCA1MjQuMDcgMTYxLjMxIEwgNTI1Ljk5IDE1OC41NiBMIDUyNy45IDE1NS43NiBMIDUyOS44MSAxNTIuOTMgTCA1MzEuNzMgMTUwLjA2IEwgNTMzLjY0IDE0Ny4xNyBMIDUzNS41NSAxNDQuMjUgTCA1MzcuNDcgMTQxLjMyIEwgNTM5LjM4IDEzOC4zNyBMIDU0MS4yOSAxMzUuNDIgTCA1NDMuMjEgMTMyLjQ2IEwgNTQ1LjEyIDEyOS41IEwgNTQ3LjAzIDEyNi41NiBMIDU0OC45NSAxMjMuNjIgTCA1NTAuODYgMTIwLjcgTCA1NTIuNzcgMTE3LjgxIEwgNTU0LjY5IDExNC45NSBMIDU1Ni42IDExMi4xMSBMIDU1OC41MSAxMDkuMzIgTCA1NjAuNDMgMTA2LjU3IEwgNTYyLjM0IDEwMy44NyBMIDU2NC4yNSAxMDEuMjIgTCA1NjYuMTcgOTguNjMgTCA1NjguMDggOTYuMDkgTCA1NjkuOTkgOTMuNjMgTCA1NzEuOTEgOTEuMjQgTCA1NzMuODIgODguOTIgTCA1NzUuNzMgODYuNjggTCA1NzcuNjUgODQuNTIgTCA1NzkuNTYgODIuNDUgTCA1ODEuNDcgODAuNDcgTCA1ODMuMzkgNzguNTkgTCA1ODUuMyA3Ni44IEwgNTg3LjIxIDc1LjExIEwgNTg5LjEzIDczLjUzIEwgNTkxLjA0IDcyLjA1IEwgNTkyLjk1IDcwLjY4IEwgNTk0Ljg3IDY5LjQyIEwgNTk2Ljc4IDY4LjI3IEwgNTk4LjY5IDY3LjI0IEwgNjAwLjYxIDY2LjMzIEwgNjAyLjUyIDY1LjUzIEwgNjA0LjQzIDY0Ljg2IEwgNjA2LjM1IDY0LjMgTCA2MDguMjYgNjMuODcgTCA2MTAuMTcgNjMuNTYgTCA2MTIuMDkgNjMuMzcgTCA2MTQgNjMuMzEiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSA0MCAxMDMuOTcgTCA0MS45MSAxMDIuNzUgTCA0My44MyAxMDEuNTcgTCA0NS43NCAxMDAuNDUgTCA0Ny42NSA5OS40IEwgNDkuNTcgOTguNCBMIDUxLjQ4IDk3LjQ2IEwgNTMuMzkgOTYuNTkgTCA1NS4zMSA5NS43OSBMIDU3LjIyIDk1LjA1IEwgNTkuMTMgOTQuMzggTCA2MS4wNSA5My43OCBMIDYyLjk2IDkzLjI1IEwgNjQuODcgOTIuNzkgTCA2Ni43OSA5Mi40IEwgNjguNyA5Mi4wOCBMIDcwLjYxIDkxLjg0IEwgNzIuNTMgOTEuNjggTCA3NC40NCA5MS41OCBMIDc2LjM1IDkxLjU2IEwgNzguMjcgOTEuNjIgTCA4MC4xOCA5MS43NSBMIDgyLjA5IDkxLjk1IEwgODQuMDEgOTIuMjMgTCA4NS45MiA5Mi41OCBMIDg3LjgzIDkzLjAxIEwgODkuNzUgOTMuNSBMIDkxLjY2IDk0LjA3IEwgOTMuNTcgOTQuNyBMIDk1LjQ5IDk1LjQxIEwgOTcuNCA5Ni4xOCBMIDk5LjMxIDk3LjAyIEwgMTAxLjIzIDk3LjkyIEwgMTAzLjE0IDk4Ljg5IEwgMTA1LjA1IDk5LjkyIEwgMTA2Ljk3IDEwMS4wMSBMIDEwOC44OCAxMDIuMTUgTCAxMTAuNzkgMTAzLjM1IEwgMTEyLjcxIDEwNC42MSBMIDExNC42MiAxMDUuOTEgTCAxMTYuNTMgMTA3LjI3IEwgMTE4LjQ1IDEwOC42NyBMIDEyMC4zNiAxMTAuMTIgTCAxMjIuMjcgMTExLjYxIEwgMTI0LjE5IDExMy4xNCBMIDEyNi4xIDExNC43IEwgMTI4LjAxIDExNi4zIEwgMTI5LjkzIDExNy45MyBMIDEzMS44NCAxMTkuNTggTCAxMzMuNzUgMTIxLjI3IEwgMTM1LjY3IDEyMi45NyBMIDEzNy41OCAxMjQuNjkgTCAxMzkuNDkgMTI2LjQzIEwgMTQxLjQxIDEyOC4xOSBMIDE0My4zMiAxMjkuOTUgTCAxNDUuMjMgMTMxLjcyIEwgMTQ3LjE1IDEzMy40OSBMIDE0OS4wNiAxMzUuMjcgTCAxNTAuOTcgMTM3LjA0IEwgMTUyLjg5IDEzOC44MSBMIDE1NC44IDE0MC41NyBMIDE1Ni43MSAxNDIuMzEgTCAxNTguNjMgMTQ0LjA1IEwgMTYwLjU0IDE0NS43NiBMIDE2Mi40NSAxNDcuNDUgTCAxNjQuMzcgMTQ5LjEyIEwgMTY2LjI4IDE1MC43NyBMIDE2OC4xOSAxNTIuMzggTCAxNzAuMTEgMTUzLjk2IEwgMTcyLjAyIDE1NS41MSBMIDE3My45MyAxNTcuMDIgTCAxNzUuODUgMTU4LjQ4IEwgMTc3Ljc2IDE1OS45MSBMIDE3OS42NyAxNjEuMjkgTCAxODEuNTkgMTYyLjYyIEwgMTgzLjUgMTYzLjkgTCAxODUuNDEgMTY1LjEzIEwgMTg3LjMzIDE2Ni4zIEwgMTg5LjI0IDE2Ny40MiBMIDE5MS4xNSAxNjguNDggTCAxOTMuMDcgMTY5LjQ4IEwgMTk0Ljk4IDE3MC40MSBMIDE5Ni44OSAxNzEuMjggTCAxOTguODEgMTcyLjA5IEwgMjAwLjcyIDE3Mi44MyBMIDIwMi42MyAxNzMuNSBMIDIwNC41NSAxNzQuMSBMIDIwNi40NiAxNzQuNjMgTCAyMDguMzcgMTc1LjA5IEwgMjEwLjI5IDE3NS40OCBMIDIxMi4yIDE3NS43OSBMIDIxNC4xMSAxNzYuMDMgTCAyMTYuMDMgMTc2LjIgTCAyMTcuOTQgMTc2LjI5IEwgMjE5Ljg1IDE3Ni4zMSBMIDIyMS43NyAxNzYuMjUgTCAyMjMuNjggMTc2LjEyIEwgMjI1LjU5IDE3NS45MiBMIDIyNy41MSAxNzUuNjQgTCAyMjkuNDIgMTc1LjI5IEwgMjMxLjMzIDE3NC44NyBMIDIzMy4yNSAxNzQuMzcgTCAyMzUuMTYgMTczLjgxIEwgMjM3LjA3IDE3My4xNyBMIDIzOC45OSAxNzIuNDcgTCAyNDAuOSAxNzEuNjkgTCAyNDIuODEgMTcwLjg2IEwgMjQ0LjczIDE2OS45NSBMIDI0Ni42NCAxNjguOTkgTCAyNDguNTUgMTY3Ljk2IEwgMjUwLjQ3IDE2Ni44NyBMIDI1Mi4zOCAxNjUuNzIgTCAyNTQuMjkgMTY0LjUyIEwgMjU2LjIxIDE2My4yNyBMIDI1OC4xMiAxNjEuOTYgTCAyNjAuMDMgMTYwLjYgTCAyNjEuOTUgMTU5LjIgTCAyNjMuODYgMTU3Ljc2IEwgMjY1Ljc3IDE1Ni4yNyBMIDI2Ny42OSAxNTQuNzQgTCAyNjkuNiAxNTMuMTggTCAyNzEuNTEgMTUxLjU4IEwgMjczLjQzIDE0OS45NSBMIDI3NS4zNCAxNDguMjkgTCAyNzcuMjUgMTQ2LjYxIEwgMjc5LjE3IDE0NC45IEwgMjgxLjA4IDE0My4xOCBMIDI4Mi45OSAxNDEuNDQgTCAyODQuOTEgMTM5LjY5IEwgMjg2LjgyIDEzNy45MyBMIDI4OC43MyAxMzYuMTYgTCAyOTAuNjUgMTM0LjM4IEwgMjkyLjU2IDEzMi42MSBMIDI5NC40NyAxMzAuODMgTCAyOTYuMzkgMTI5LjA3IEwgMjk4LjMgMTI3LjMxIEwgMzAwLjIxIDEyNS41NiBMIDMwMi4xMyAxMjMuODMgTCAzMDQuMDQgMTIyLjEyIEwgMzA1Ljk1IDEyMC40MiBMIDMwNy44NyAxMTguNzUgTCAzMDkuNzggMTE3LjExIEwgMzExLjY5IDExNS40OSBMIDMxMy42MSAxMTMuOTEgTCAzMTUuNTIgMTEyLjM3IEwgMzE3LjQzIDExMC44NiBMIDMxOS4zNSAxMDkuMzkgTCAzMjEuMjYgMTA3Ljk3IEwgMzIzLjE3IDEwNi41OSBMIDMyNS4wOSAxMDUuMjUgTCAzMjcgMTAzLjk3IEwgMzI4LjkxIDEwMi43NSBMIDMzMC44MyAxMDEuNTcgTCAzMzIuNzQgMTAwLjQ1IEwgMzM0LjY1IDk5LjQgTCAzMzYuNTcgOTguNCBMIDMzOC40OCA5Ny40NiBMIDM0MC4zOSA5Ni41OSBMIDM0Mi4zMSA5NS43OSBMIDM0NC4yMiA5NS4wNSBMIDM0Ni4xMyA5NC4zOCBMIDM0OC4wNSA5My43OCBMIDM0OS45NiA5My4yNSBMIDM1MS44NyA5Mi43OSBMIDM1My43OSA5Mi40IEwgMzU1LjcgOTIuMDggTCAzNTcuNjEgOTEuODQgTCAzNTkuNTMgOTEuNjggTCAzNjEuNDQgOTEuNTggTCAzNjMuMzUgOTEuNTYgTCAzNjUuMjcgOTEuNjIgTCAzNjcuMTggOTEuNzUgTCAzNjkuMDkgOTEuOTUgTCAzNzEuMDEgOTIuMjMgTCAzNzIuOTIgOTIuNTggTCAzNzQuODMgOTMuMDEgTCAzNzYuNzUgOTMuNSBMIDM3OC42NiA5NC4wNyBMIDM4MC41NyA5NC43IEwgMzgyLjQ5IDk1LjQxIEwgMzg0LjQgOTYuMTggTCAzODYuMzEgOTcuMDIgTCAzODguMjMgOTcuOTIgTCAzOTAuMTQgOTguODkgTCAzOTIuMDUgOTkuOTIgTCAzOTMuOTcgMTAxLjAxIEwgMzk1Ljg4IDEwMi4xNSBMIDM5Ny43OSAxMDMuMzUgTCAzOTkuNzEgMTA0LjYxIEwgNDAxLjYyIDEwNS45MSBMIDQwMy41MyAxMDcuMjcgTCA0MDUuNDUgMTA4LjY3IEwgNDA3LjM2IDExMC4xMiBMIDQwOS4yNyAxMTEuNjEgTCA0MTEuMTkgMTEzLjE0IEwgNDEzLjEgMTE0LjcgTCA0MTUuMDEgMTE2LjMgTCA0MTYuOTMgMTE3LjkzIEwgNDE4Ljg0IDExOS41OCBMIDQyMC43NSAxMjEuMjcgTCA0MjIuNjcgMTIyLjk3IEwgNDI0LjU4IDEyNC42OSBMIDQyNi40OSAxMjYuNDMgTCA0MjguNDEgMTI4LjE5IEwgNDMwLjMyIDEyOS45NSBMIDQzMi4yMyAxMzEuNzIgTCA0MzQuMTUgMTMzLjQ5IEwgNDM2LjA2IDEzNS4yNyBMIDQzNy45NyAxMzcuMDQgTCA0MzkuODkgMTM4LjgxIEwgNDQxLjggMTQwLjU3IEwgNDQzLjcxIDE0Mi4zMSBMIDQ0NS42MyAxNDQuMDUgTCA0NDcuNTQgMTQ1Ljc2IEwgNDQ5LjQ1IDE0Ny40NSBMIDQ1MS4zNyAxNDkuMTIgTCA0NTMuMjggMTUwLjc3IEwgNDU1LjE5IDE1Mi4zOCBMIDQ1Ny4xMSAxNTMuOTYgTCA0NTkuMDIgMTU1LjUxIEwgNDYwLjkzIDE1Ny4wMiBMIDQ2Mi44NSAxNTguNDggTCA0NjQuNzYgMTU5LjkxIEwgNDY2LjY3IDE2MS4yOSBMIDQ2OC41OSAxNjIuNjIgTCA0NzAuNSAxNjMuOSBMIDQ3Mi40MSAxNjUuMTMgTCA0NzQuMzMgMTY2LjMgTCA0NzYuMjQgMTY3LjQyIEwgNDc4LjE1IDE2OC40OCBMIDQ4MC4wNyAxNjkuNDggTCA0ODEuOTggMTcwLjQxIEwgNDgzLjg5IDE3MS4yOCBMIDQ4NS44MSAxNzIuMDkgTCA0ODcuNzIgMTcyLjgzIEwgNDg5LjYzIDE3My41IEwgNDkxLjU1IDE3NC4xIEwgNDkzLjQ2IDE3NC42MyBMIDQ5NS4zNyAxNzUuMDkgTCA0OTcuMjkgMTc1LjQ4IEwgNDk5LjIgMTc1Ljc5IEwgNTAxLjExIDE3Ni4wMyBMIDUwMy4wMyAxNzYuMiBMIDUwNC45NCAxNzYuMjkgTCA1MDYuODUgMTc2LjMxIEwgNTA4Ljc3IDE3Ni4yNSBMIDUxMC42OCAxNzYuMTIgTCA1MTIuNTkgMTc1LjkyIEwgNTE0LjUxIDE3NS42NCBMIDUxNi40MiAxNzUuMjkgTCA1MTguMzMgMTc0Ljg3IEwgNTIwLjI1IDE3NC4zNyBMIDUyMi4xNiAxNzMuODEgTCA1MjQuMDcgMTczLjE3IEwgNTI1Ljk5IDE3Mi40NyBMIDUyNy45IDE3MS42OSBMIDUyOS44MSAxNzAuODYgTCA1MzEuNzMgMTY5Ljk1IEwgNTMzLjY0IDE2OC45OSBMIDUzNS41NSAxNjcuOTYgTCA1MzcuNDcgMTY2Ljg3IEwgNTM5LjM4IDE2NS43MiBMIDU0MS4yOSAxNjQuNTIgTCA1NDMuMjEgMTYzLjI3IEwgNTQ1LjEyIDE2MS45NiBMIDU0Ny4wMyAxNjAuNiBMIDU0OC45NSAxNTkuMiBMIDU1MC44NiAxNTcuNzYgTCA1NTIuNzcgMTU2LjI3IEwgNTU0LjY5IDE1NC43NCBMIDU1Ni42IDE1My4xOCBMIDU1OC41MSAxNTEuNTggTCA1NjAuNDMgMTQ5Ljk1IEwgNTYyLjM0IDE0OC4yOSBMIDU2NC4yNSAxNDYuNjEgTCA1NjYuMTcgMTQ0LjkgTCA1NjguMDggMTQzLjE4IEwgNTY5Ljk5IDE0MS40NCBMIDU3MS45MSAxMzkuNjkgTCA1NzMuODIgMTM3LjkzIEwgNTc1LjczIDEzNi4xNiBMIDU3Ny42NSAxMzQuMzggTCA1NzkuNTYgMTMyLjYxIEwgNTgxLjQ3IDEzMC44MyBMIDU4My4zOSAxMjkuMDcgTCA1ODUuMyAxMjcuMzEgTCA1ODcuMjEgMTI1LjU2IEwgNTg5LjEzIDEyMy44MyBMIDU5MS4wNCAxMjIuMTIgTCA1OTIuOTUgMTIwLjQyIEwgNTk0Ljg3IDExOC43NSBMIDU5Ni43OCAxMTcuMTEgTCA1OTguNjkgMTE1LjQ5IEwgNjAwLjYxIDExMy45MSBMIDYwMi41MiAxMTIuMzcgTCA2MDQuNDMgMTEwLjg2IEwgNjA2LjM1IDEwOS4zOSBMIDYwOC4yNiAxMDcuOTcgTCA2MTAuMTcgMTA2LjU5IEwgNjEyLjA5IDEwNS4yNSBMIDYxNCAxMDMuOTciIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTY5LjE1IiB5PSI1Ny4zMSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+dSh0KTwvdGV4dD48dGV4dCB4PSIxODYuMzciIHk9IjkzLjU2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmkodCk8L3RleHQ+PGxpbmUgeDE9IjMyNyIgeTE9IjYzLjMxIiB4Mj0iMzI3IiB5Mj0iNDAuNzEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNjIuODgiIHkxPSI5MS41NiIgeDI9IjM2Mi44OCIgeTI9IjQwLjcxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMzI3IiB5MT0iNDUuNjYiIHgyPSIzNTQuODgiIHkyPSI0NS42NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNjIuODgsNDUuNjYgMzU0Ljg4LDQxLjY2IDM1NC44OCw0OS42NiIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSIzNjIuODgiIHkxPSI0NS42NiIgeDI9IjMzNSIgeTI9IjQ1LjY2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMyNyw0NS42NiAzMzUsNDkuNjYgMzM1LDQxLjY2IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzcwLjg4IiB5PSI1MC42NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj7OlHQgPSAyLDUgbXM8L3RleHQ+PGxpbmUgeDE9IjQwIiB5MT0iNjMuMzEiIHgyPSI0MCIgeTI9IjIyNS43NSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjMyNyIgeTE9IjIyNS43NSIgeDI9IjMyNyIgeTI9IjYzLjMxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDAiIHkxPSIyMjUuNzUiIHgyPSIzMTkiIHkyPSIyMjUuNzUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzI3LDIyNS43NSAzMTksMjIxLjc1IDMxOSwyMjkuNzUiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMzI3IiB5MT0iMjI1Ljc1IiB4Mj0iNDgiIHkyPSIyMjUuNzUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDAsMjI1Ljc1IDQ4LDIyOS43NSA0OCwyMjEuNzUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxODMuNSIgeT0iMjQxLjc1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UID0gMjAgbXM8L3RleHQ+PC9zdmc+)
*Exemple de la fiche : les maxima de i arrivent 2,5 ms après ceux de u, pour une période de 20 ms, d'où un déphasage de π/4 rad.*
<!-- /schema -->

Dans un circuit alimenté en sinusoïdal, la tension $u(t)$ et l'intensité
$i(t)$ oscillent à la **même fréquence**, mais pas forcément **en même
temps** : les maxima de $i$ peuvent être décalés d'une durée $\Delta t$ par
rapport à ceux de $u$. Ce décalage est le **déphasage** :

$$\varphi = 2\pi \cdot \frac{\Delta t}{T} \quad \text{(en radians)}$$

Pour un conducteur ohmique (radiateur), $\varphi = 0$ : $u$ et $i$ sont **en
phase** ; les moteurs, transformateurs et autres bobinages, eux, décalent
l'intensité. Ce n'est pas un détail : la puissance moyenne reçue par un dipôle
vaut $P = U I \cos\varphi$ ($U$ et $I$ **efficaces**) — d'où le « facteur de
puissance » $\cos\varphi$ que les industriels cherchent à garder proche de $1$.

> **Exemple.** Les maxima de $i$ arrivent $2{,}5$ ms après ceux de $u$, avec
> $T = 20$ ms : $\varphi = 2\pi \times \dfrac{2{,}5}{20} = \dfrac{\pi}{4}$ rad.

---

## 2. Transporter l'énergie électrique : les pertes en ligne

Entre la centrale et l'utilisateur, le courant traverse des centaines de
kilomètres de câbles, de résistance totale $R$ : traversés par une intensité
$I$, ils chauffent (effet Joule) et **dissipent** une puissance

$$\boxed{P_{\text{pertes}} = R \, I^2}$$

($P_{\text{pertes}}$ en W, $R$ en $\Omega$, $I$ en A) — de l'énergie **perdue**
pour l'utilisateur.

### La parade : la haute tension

<!-- schema:reseau -->
![Le réseau électrique : on élève la tension à la sortie de la centrale, on transporte sous 400 kV pour réduire les pertes, puis on l'abaisse jusqu'à 230 V.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2ODAgMjAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY4MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTA4IiB5MT0iODgiIHgyPSIxMzYiIHkyPSI4OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQ2LDg4IDEzNiw4MyAxMzYsOTMiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMjY2IiB5MT0iODgiIHgyPSIyOTgiIHkyPSI4OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzA4LDg4IDI5OCw4MyAyOTgsOTMiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iNDI2IiB5MT0iODgiIHgyPSI0NTYiIHkyPSI4OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDY2LDg4IDQ1Niw4MyA0NTYsOTMiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iNTg2IiB5MT0iODgiIHgyPSI2MDIiIHkyPSI4OCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjEyLDg4IDYwMiw4MyA2MDIsOTMiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSI0IiB5PSI2MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1NiIgcng9IjgiIGZpbGw9IiNmZGY2ZDgiIHN0cm9rZT0iIzlhNzQwMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI1NCIgeT0iOTIuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Y2VudHJhbGU8L3RleHQ+PHJlY3QgeD0iMTUwIiB5PSI2MCIgd2lkdGg9IjExMiIgaGVpZ2h0PSI1NiIgcng9IjgiIGZpbGw9IiNmMWY0ZjciIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyMDYiIHk9Ijg0LjciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRyYW5zZm9ybWF0ZXVyPC90ZXh0Pjx0ZXh0IHg9IjIwNiIgeT0iOTkuNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+w6lsw6l2YXRldXI8L3RleHQ+PHJlY3QgeD0iMzEyIiB5PSI2MCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI1NiIgcng9IjgiIGZpbGw9IiNmYmVhZWEiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIzNjciIHk9Ijg0LjE1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5saWduZTwvdGV4dD48dGV4dCB4PSIzNjciIHk9IjEwMS42NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+NDAwIGtWPC90ZXh0PjxyZWN0IHg9IjQ3MCIgeT0iNjAiIHdpZHRoPSIxMTIiIGhlaWdodD0iNTYiIHJ4PSI4IiBmaWxsPSIjZjFmNGY3IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNTI2IiB5PSI4NC43IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFuc2Zvcm1hdGV1cjwvdGV4dD48dGV4dCB4PSI1MjYiIHk9Ijk5LjciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFiYWlzc2V1cjwvdGV4dD48cmVjdCB4PSI2MTYiIHk9IjYwIiB3aWR0aD0iNjAiIGhlaWdodD0iNTYiIHJ4PSI4IiBmaWxsPSIjZThmNWVlIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNjQ2IiB5PSI4NC43IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wcmlzZTwvdGV4dD48dGV4dCB4PSI2NDYiIHk9Ijk5LjciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIzMCBWPC90ZXh0Pjx0ZXh0IHg9IjM2NyIgeT0iMTUwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5oYXV0ZSB0ZW5zaW9uIDogaW50ZW5zaXTDqSBmYWlibGUsIHBlcnRlcyBSIEnCsiB0csOocyByw6lkdWl0ZXM8L3RleHQ+PHRleHQgeD0iMzQwIiB5PSIzMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bcOqbWUgcHVpc3NhbmNlIFAgPSBVIEkgdHJhbnNwb3J0w6llPC90ZXh0Pjwvc3ZnPg==)
*Le réseau électrique : on élève la tension à la sortie de la centrale, on transporte sous 400 kV pour réduire les pertes, puis on l'abaisse jusqu'à 230 V.*
<!-- /schema -->

La puissance transportée vaut $P = U \cdot I$. Pour livrer la **même
puissance** $P$ avec une tension plus élevée, il faut moins d'intensité
($I = P/U$), et les pertes $P_{\text{pertes}} = R\,\dfrac{P^2}{U^2}$
s'effondrent : **multiplier la tension par 10 divise les pertes par 100**.

> **Exemple.** Une ligne de résistance $R = 5{,}0\ \Omega$ transporte
> $P = 20$ MW. Sous $U = 20$ kV : $I = 1000$ A, pertes
> $= 5{,}0 \times 1000^2 = 5{,}0$ MW — le quart de la puissance transportée !
> Sous $U = 400$ kV : $I = 50$ A, pertes $= 12{,}5$ kW, moins de $0{,}1\,\%$.

C'est le principe du réseau : on **élève** la tension à la sortie de la
centrale (jusqu'à 400 kV), on transporte, puis on **abaisse** par étages
(transformateurs) jusqu'aux 230 V de la prise — le sinusoïdal a justement été
choisi parce qu'un transformateur ne fonctionne qu'en alternatif.

> ⚠️ Ne confonds pas les deux « P » : $P = UI$ est la puissance **transportée**,
> $P_{\text{pertes}} = RI^2$ la puissance **perdue** dans les câbles. La haute
> tension ne change pas la première, elle écrase la seconde.

---

## 3. Énergie interne et capacité thermique

> **Définition.** L'**énergie interne** $U$ d'un système est l'énergie stockée
> à l'échelle microscopique (agitation des molécules, interactions entre
> elles). Chauffer un corps, c'est augmenter son énergie interne.

On retient surtout comment $U$ varie, **sans changement d'état** :

$$\boxed{\Delta U = m \cdot c \cdot \Delta T}$$

avec $\Delta U$ en joules (J), $m$ en kilogrammes (kg),
$\Delta T = T_{\text{finale}} - T_{\text{initiale}}$ en kelvins (K), et $c$ la
**capacité thermique massique**, en J·kg⁻¹·K⁻¹ : l'énergie à fournir à $1$ kg
du matériau pour l'échauffer de $1$ K — son « inertie thermique ». L'eau est
un champion : $c_{\text{eau}} = 4185$ J·kg⁻¹·K⁻¹, contre environ $900$ pour
l'aluminium et $450$ pour l'acier.

> ✅ **Bonne nouvelle des unités** : un **écart** de température a la même
> valeur en kelvins et en degrés Celsius ($\Delta T = 80\ ^\circ$C $= 80$ K).
> On n'ajoute donc jamais $273$ dans un $\Delta T$ — c'est l'erreur classique.

> **Exemple.** Une bouilloire porte $1{,}5$ L d'eau ($1{,}5$ kg) de
> $20\ ^\circ$C à $100\ ^\circ$C :
> $\Delta U = 1{,}5 \times 4185 \times 80 \approx 5{,}0 \times 10^5$ J. Avec une
> résistance de $2000$ W sans pertes : $t \approx 250$ s, un peu plus de 4 min.

---

## 4. Flux thermique et résistance thermique

<!-- schema:paroi -->
![Exemple de la fiche : 10 m² de laine de verre de 20 cm, avec 20 °C dedans et 0 °C dehors ; la résistance thermique vaut 0,50 K/W et le flux 40 W.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMjkwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIyOTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIwIiB5PSI0MCIgd2lkdGg9IjI3MCIgaGVpZ2h0PSIxOTAiIHJ4PSIwIiBmaWxsPSIjZmJlM2RjIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMzUwIiB5PSI0MCIgd2lkdGg9IjI3MCIgaGVpZ2h0PSIxOTAiIHJ4PSIwIiBmaWxsPSIjZGNlYWY4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHJlY3QgeD0iMjcwIiB5PSI0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE5MCIgcng9IjAiIGZpbGw9IiNmNmU3YjgiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNIDI3NiA1MiBxIDE3IC04IDM0IDAgdCAzNCAwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2M5YTIyNyIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMjc2IDczIHEgMTcgLTggMzQgMCB0IDM0IDAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzlhMjI3IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAyNzYgOTQgcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDI3NiAxMTUgcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDI3NiAxMzYgcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDI3NiAxNTcgcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDI3NiAxNzggcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDI3NiAxOTkgcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDI3NiAyMjAgcSAxNyAtOCAzNCAwIHQgMzQgMCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjOWEyMjciIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMjAiIHk9IjcwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5pbnTDqXJpZXVyPC90ZXh0Pjx0ZXh0IHg9IjEyMCIgeT0iOTIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPs64ID0gMjAgwrBDPC90ZXh0Pjx0ZXh0IHg9IjQ5MCIgeT0iNzAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmV4dMOpcmlldXI8L3RleHQ+PHRleHQgeD0iNDkwIiB5PSI5MiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+zrggPSAwIMKwQzwvdGV4dD48bGluZSB4MT0iMTUwIiB5MT0iMTYwIiB4Mj0iNDU0IiB5Mj0iMTYwIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0NzAsMTYwIDQ1NCwxNTIgNDU0LDE2OCIgZmlsbD0iI2MyNWUwMCIvPjxyZWN0IHg9IjM3My4yOCIgeT0iMTc2IiB3aWR0aD0iMTMzLjQ0IiBoZWlnaHQ9IjIxLjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSI0NDAiIHk9IjE5MCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Zmx1eCB0aGVybWlxdWUgzqY8L3RleHQ+PHRleHQgeD0iMTIwIiB5PSIxOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmR1IGNoYXVkPC90ZXh0Pjx0ZXh0IHg9IjEyMCIgeT0iMjA2LjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52ZXJzIGxlIGZyb2lkPC90ZXh0PjxsaW5lIHgxPSIyNzAiIHkxPSIyNDgiIHgyPSIzNDIiIHkyPSIyNDgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzUwLDI0OCAzNDIsMjQ0IDM0MiwyNTIiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMzUwIiB5MT0iMjQ4IiB4Mj0iMjc4IiB5Mj0iMjQ4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI3MCwyNDggMjc4LDI1MiAyNzgsMjQ0IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzEwIiB5PSIyNjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmUgPSAyMCBjbTwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjI4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5sYWluZSBkZSB2ZXJyZTwvdGV4dD48dGV4dCB4PSI2MTAiIHk9IjI3OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+UiA9IGUgLyAozrsgUykgPSAwLDUwIEsvVyAgOyAgzqYgPSDOlFQgLyBSID0gNDAgVzwvdGV4dD48L3N2Zz4=)
*Exemple de la fiche : 10 m² de laine de verre de 20 cm, avec 20 °C dedans et 0 °C dehors ; la résistance thermique vaut 0,50 K/W et le flux 40 W.*
<!-- /schema -->

Quand les deux côtés d'une paroi ne sont pas à la même température, l'énergie
thermique la traverse spontanément **du chaud vers le froid** (conduction), et
la paroi s'oppose plus ou moins à ce passage : c'est sa **résistance
thermique**.

> **Définition.** Le **flux thermique** $\Phi$ est l'énergie thermique qui
> traverse la paroi **par seconde** : $\Phi = \dfrac{E}{\Delta t}$. C'est une
> puissance, en **watts** (W).

$$\boxed{\Phi = \frac{\Delta T}{R_{\text{th}}}}
\qquad \text{avec} \qquad
R_{\text{th}} = \frac{e}{\lambda \cdot S}$$

Unités : $\Phi$ en W, $\Delta T$ (écart entre les deux faces) en K,
$R_{\text{th}}$ en K·W⁻¹ ; $e$ épaisseur de la paroi en **mètres**, $S$ sa
surface en m², $\lambda$ la **conductivité thermique** du matériau en
W·m⁻¹·K⁻¹.

Un bon **isolant** a un $\lambda$ faible (laine de verre : $\approx 0{,}040$
W·m⁻¹·K⁻¹), un bon **conducteur** un $\lambda$ élevé (béton : $\approx 1{,}5$ ;
acier : $\approx 50$). Isoler, c'est **augmenter** $R_{\text{th}}$ : matériau
plus isolant ou paroi plus épaisse.

> **Exemple.** Paroi de $10$ m² isolée par $20$ cm de laine de verre :
> $R_{\text{th}} = \dfrac{0{,}20}{0{,}040 \times 10} = 0{,}50$ K·W⁻¹. S'il fait
> $20\ ^\circ$C dedans et $0\ ^\circ$C dehors : $\Phi = \dfrac{20}{0{,}50} =
> 40$ W — $40$ J à fournir chaque seconde pour compenser cette seule fuite.

Le vocabulaire n'est pas un hasard : $\Phi = \dfrac{\Delta T}{R_{\text{th}}}$
ressemble trait pour trait à la loi d'Ohm $I = \dfrac{U}{R}$. Conséquence :
pour un mur **multicouche** (béton + isolant), les résistances thermiques **en
série s'ajoutent** : $R_{\text{th, total}} = R_{\text{th},1} + R_{\text{th},2} + \dots$

> ⚠️ $e$ en **mètres** dans $R_{\text{th}} = \dfrac{e}{\lambda S}$. Une
> épaisseur laissée en centimètres fausse le résultat d'un facteur $100$.

---

## 5. Stocker l'énergie : piles et accumulateurs

Piles et accumulateurs convertissent de l'**énergie chimique** en énergie
électrique grâce à une réaction d'oxydoréduction. Dans une **pile**, la
conversion est à sens unique : réactifs consommés, pile morte. Dans un
**accumulateur** (batterie), la réaction est **réversible** : en imposant un
courant en sens inverse (charge), on reconstitue les réactifs. Cas à part, la
**pile à combustible** reçoit ses réactifs (dihydrogène et dioxygène) en
continu de l'extérieur : elle débite tant qu'on l'alimente.

### Capacité et énergie stockée

> **Définition.** La **capacité** $Q$ d'une pile ou d'un accumulateur est la
> charge électrique totale qu'il peut débiter, en **ampères-heures** (Ah) :
> $1$ Ah permet de débiter $1$ A pendant $1$ h.

$$\boxed{Q = I \cdot \Delta t}
\qquad \text{et} \qquad
\boxed{E = Q \cdot U}$$

$Q$ est en Ah si $I$ est en A et $\Delta t$ en **heures** ($1$ Ah $= 3600$ C).
L'énergie stockée $E$ vient en **wattheures** (Wh) si $Q$ est en Ah et $U$ en
V, avec $1$ Wh $= 3600$ J et $1$ kWh $= 3{,}6 \times 10^6$ J.

> **Exemple.** Batterie de voiture $12$ V, $60$ Ah :
> $E = 60 \times 12 = 720$ Wh $\approx 2{,}6 \times 10^6$ J. Elle peut en
> théorie débiter $6$ A pendant $10$ h, ou $60$ A pendant $1$ h.

> ⚠️ La capacité en Ah **ne suffit pas** à comparer deux batteries : $60$ Ah
> sous $12$ V stockent $720$ Wh, $60$ Ah sous $3{,}7$ V seulement $222$ Wh.
> C'est l'**énergie** $E = QU$ qui compare, pas la capacité seule.

---

## 6. L'énergie transportée par la lumière

La lumière transporte de l'énergie par « grains » : les **photons**. Un photon
de fréquence $\nu$ transporte l'énergie

$$\boxed{E = h \cdot \nu = \frac{h \cdot c}{\lambda}}$$

avec $E$ en joules (J), $\nu$ la fréquence en Hz, $\lambda$ la longueur d'onde
en **mètres**, $h = 6{,}63 \times 10^{-34}$ J·s la constante de Planck et
$c = 3{,}00 \times 10^8$ m·s⁻¹ la célérité de la lumière dans le vide.

> **Exemple.** Photon de lumière verte, $\lambda = 500$ nm
> $= 5{,}00 \times 10^{-7}$ m :
> $E = \dfrac{6{,}63 \times 10^{-34} \times 3{,}00 \times 10^8}{5{,}00 \times 10^{-7}}
> \approx 3{,}98 \times 10^{-19}$ J — minuscule : un faisceau ordinaire en
> transporte des milliards de milliards par seconde.

> ⚠️ Piège n°1 du calcul : $\lambda$ en **mètres** ($1$ nm $= 10^{-9}$ m).
> Laisser $500$ (nm) au dénominateur donne un résultat $10^9$ fois trop petit.

### La conversion photovoltaïque

Une cellule photovoltaïque convertit l'énergie lumineuse **directement** en
énergie électrique : chaque photon absorbé par le semi-conducteur (silicium)
peut libérer un électron. La conversion s'évalue avec le **rendement** :

$$\boxed{\eta = \frac{P_{\text{électrique}}}{P_{\text{lumineuse reçue}}}}
\qquad \text{avec} \qquad
P_{\text{lumineuse reçue}} = E_{\text{écl}} \cdot S$$

où $E_{\text{écl}}$ est l'**éclairement** (puissance lumineuse reçue par unité
de surface, en W·m⁻²) et $S$ la surface du panneau (m²). En plein soleil,
$E_{\text{écl}} \approx 1000$ W·m⁻².

> **Exemple.** Un panneau de $1{,}6$ m² reçoit $1000$ W·m⁻², donc
> $P_{\text{reçue}} = 1600$ W. S'il délivre $320$ W électriques :
> $\eta = \dfrac{320}{1600} = 20\,\%$ — l'ordre de grandeur du silicium actuel.
> Le reste est réfléchi ou converti en chaleur.

---

## 7. Tableau récapitulatif

| Notion | Formule | Unités |
|---|---|---|
| Fréquence / période | $f = \dfrac{1}{T}$ | Hz ; s |
| Valeur efficace | $U = \dfrac{U_{\text{max}}}{\sqrt{2}}$ | V |
| Déphasage | $\varphi = 2\pi \dfrac{\Delta t}{T}$ | rad |
| Pertes en ligne | $P_{\text{pertes}} = R I^2$ | W ; $\Omega$ ; A |
| Énergie interne (sans chgt d'état) | $\Delta U = m\,c\,\Delta T$ | J ; kg ; J·kg⁻¹·K⁻¹ ; K |
| Flux thermique | $\Phi = \dfrac{\Delta T}{R_{\text{th}}}$ | W ; K ; K·W⁻¹ |
| Résistance thermique | $R_{\text{th}} = \dfrac{e}{\lambda S}$ | m ; W·m⁻¹·K⁻¹ ; m² |
| Capacité d'un accumulateur | $Q = I\,\Delta t$ | Ah (A et h) |
| Énergie stockée | $E = Q\,U$ | Wh (Ah et V) |
| Énergie d'un photon | $E = h\nu = \dfrac{hc}{\lambda}$ | J ; Hz ; **m** |
| Rendement photovoltaïque | $\eta = \dfrac{P_{\text{élec}}}{E_{\text{écl}}\cdot S}$ | sans unité |

Conversions à connaître : $1$ Wh $= 3600$ J ; $1$ kWh $= 3{,}6\times10^6$ J ;
$1$ Ah $= 3600$ C ; $1$ nm $= 10^{-9}$ m ; $\Delta T$ identique en K et en °C.

---

## 8. Les erreurs qui coûtent des points

1. **Confondre valeur efficace et valeur maximale** : le multimètre AC affiche
   $U$ (efficace), l'oscilloscope montre $U_{\text{max}}$ ; on divise par
   $\sqrt{2} \approx 1{,}41$, pas par $2$.
2. **Oublier le carré dans les pertes en ligne** : $P_{\text{pertes}} = RI^2$,
   pas $RI$ — c'est ce carré qui fait tout l'intérêt de la haute tension.
3. **Ajouter 273 dans un écart de température** : dans $\Delta U = mc\Delta T$
   ou $\Phi = \Delta T/R_{\text{th}}$, un **écart** vaut la même chose en °C et
   en K. On convertit les températures, jamais les écarts.
4. **Laisser l'épaisseur en cm dans $R_{\text{th}} = e/(\lambda S)$** : $e$ en
   mètres, sinon la résistance thermique est fausse d'un facteur $100$.
5. **Confondre capacité (Ah) et énergie (Wh)** : la capacité compte la
   **charge** ; deux batteries de même capacité mais de tensions différentes
   ne stockent pas la même énergie ($E = QU$).
6. **Laisser $\lambda$ en nanomètres dans $E = hc/\lambda$** : résultat $10^9$
   fois trop petit. Un photon visible transporte quelques $10^{-19}$ J.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie
et mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, sections « Énergie
électrique », « Énergie interne », « Énergie chimique » (volet piles/
accumulateurs uniquement) et « Énergie transportée par la lumière »), extrait
via WebFetch depuis le PDF officiel cache.media.education.gouv.fr
(spe261_annexe_1158935.pdf). À confronter au PDF avant publication.

Correspondance rubriques → sections :
- « Régime sinusoïdal : valeur efficace, fréquence, période, déphasage » → § 1.
- « Transport et distribution de l'énergie électrique ; pertes en ligne » → § 2.
- « Énergie interne ; capacité thermique » → § 3.
- « Flux thermique ; conduction ; résistance thermique » → § 4.
- « Piles, accumulateurs ; pile à combustible » → § 5 (le volet oxydoréduction
  de la rubrique « Énergie chimique » — couples, demi-équations — n'est PAS
  traité ici : il relève d'un chapitre de chimie dédié).
- « Photon, énergie E = hν ; conversion photovoltaïque » → § 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La formule P = U·I·cosφ (facteur de puissance) : l'extraction locale dit
  seulement « déphasage ». Elle est standard en STI2D et présente dans les
  sujets, mais vérifier si le texte officiel l'exige ou si la seule NOTION de
  déphasage suffit ; le cas échéant, la rétrograder en simple remarque.
- La formule Rth = e/(λS) : l'extraction dit « conduction ; résistance
  thermique » sans expliciter la formule. C'est la formule d'usage des sujets
  STI2D (souvent fournie) ; vérifier son statut exact (exigible ou fournie).
- L'additivité des résistances thermiques en série : prolongement naturel de
  l'analogie électrique, utilisée dans les sujets ; à confirmer.
- La convention d'écriture de l'éclairement (E_écl en W·m⁻², parfois noté E ou
  φ surfacique selon les manuels) : choisir la notation du sujet type.
- Valeurs numériques utilisées : c_eau = 4185 J·kg⁻¹·K⁻¹ (certains sujets
  prennent 4180 ou 4,18 kJ), λ laine de verre 0,040 et béton 1,5 W·m⁻¹·K⁻¹
  (ordres de grandeur constructeurs), h = 6,63×10⁻³⁴ J·s, c = 3,00×10⁸ m·s⁻¹.

Calculs vérifiés numériquement : 230√2 ≈ 325 V ; T = 1/50 = 20 ms ; pertes
5,0 Ω / 20 MW : 5,0 MW sous 20 kV (I = 1000 A) et 12,5 kW sous 400 kV
(I = 50 A) ; bouilloire : 1,5×4185×80 = 502 200 J ≈ 5,0×10⁵ J, t ≈ 251 s ;
Rth = 0,20/(0,040×10) = 0,50 K·W⁻¹, Φ = 20/0,50 = 40 W ; batterie 12 V 60 Ah :
720 Wh = 2,592×10⁶ J ; photon 500 nm : 3,978×10⁻¹⁹ J ; panneau 1,6 m² :
η = 320/1600 = 20 %.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
