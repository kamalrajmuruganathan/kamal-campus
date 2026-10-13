---
id: 1sti2d-ondes-information
titre: "Ondes et information"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 16
prerequis:
  - Trigonométrie et fonctions sinusoïdales (Première STI2D/STL)
  - Énergie (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Ondes et information

<!-- schema:auto -->
![Onde sinusoïdale : A est l’amplitude, λ la longueur d’onde (distance entre deux crêtes).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSIxMjAiIHgyPSI0MTAiIHkyPSIxMjAiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cGF0aCBkPSJNIDMwIDEyMCBsIC0wIDAiIC8+PHBhdGggZD0iTSAzMCAxMjAgTCAzMiAxMTQuODEgTCAzNCAxMDkuNjYgTCAzNiAxMDQuNTggTCAzOCA5OS42MSBMIDQwIDk0Ljc4IEwgNDIgOTAuMTMgTCA0NCA4NS42OSBMIDQ2IDgxLjQ5IEwgNDggNzcuNTYgTCA1MCA3My45MyBMIDUyIDcwLjYyIEwgNTQgNjcuNjUgTCA1NiA2NS4wNiBMIDU4IDYyLjg0IEwgNjAgNjEuMDMgTCA2MiA1OS42NCBMIDY0IDU4LjY3IEwgNjYgNTguMTIgTCA2OCA1OC4wMSBMIDcwIDU4LjM0IEwgNzIgNTkuMSBMIDc0IDYwLjI4IEwgNzYgNjEuODkgTCA3OCA2My45IEwgODAgNjYuMzEgTCA4MiA2OS4wOSBMIDg0IDcyLjIzIEwgODYgNzUuNyBMIDg4IDc5LjQ5IEwgOTAgODMuNTYgTCA5MiA4Ny44OCBMIDk0IDkyLjQzIEwgOTYgOTcuMTggTCA5OCAxMDIuMDggTCAxMDAgMTA3LjExIEwgMTAyIDExMi4yMyBMIDEwNCAxMTcuNCBMIDEwNiAxMjIuNiBMIDEwOCAxMjcuNzcgTCAxMTAgMTMyLjg5IEwgMTEyIDEzNy45MiBMIDExNCAxNDIuODIgTCAxMTYgMTQ3LjU3IEwgMTE4IDE1Mi4xMiBMIDEyMCAxNTYuNDQgTCAxMjIgMTYwLjUxIEwgMTI0IDE2NC4zIEwgMTI2IDE2Ny43NyBMIDEyOCAxNzAuOTEgTCAxMzAgMTczLjY5IEwgMTMyIDE3Ni4xIEwgMTM0IDE3OC4xMSBMIDEzNiAxNzkuNzIgTCAxMzggMTgwLjkgTCAxNDAgMTgxLjY2IEwgMTQyIDE4MS45OSBMIDE0NCAxODEuODggTCAxNDYgMTgxLjMzIEwgMTQ4IDE4MC4zNiBMIDE1MCAxNzguOTcgTCAxNTIgMTc3LjE2IEwgMTU0IDE3NC45NCBMIDE1NiAxNzIuMzUgTCAxNTggMTY5LjM4IEwgMTYwIDE2Ni4wNyBMIDE2MiAxNjIuNDQgTCAxNjQgMTU4LjUxIEwgMTY2IDE1NC4zMSBMIDE2OCAxNDkuODcgTCAxNzAgMTQ1LjIyIEwgMTcyIDE0MC4zOSBMIDE3NCAxMzUuNDIgTCAxNzYgMTMwLjM0IEwgMTc4IDEyNS4xOSBMIDE4MCAxMjAgTCAxODIgMTE0LjgxIEwgMTg0IDEwOS42NiBMIDE4NiAxMDQuNTggTCAxODggOTkuNjEgTCAxOTAgOTQuNzggTCAxOTIgOTAuMTMgTCAxOTQgODUuNjkgTCAxOTYgODEuNDkgTCAxOTggNzcuNTYgTCAyMDAgNzMuOTMgTCAyMDIgNzAuNjIgTCAyMDQgNjcuNjUgTCAyMDYgNjUuMDYgTCAyMDggNjIuODQgTCAyMTAgNjEuMDMgTCAyMTIgNTkuNjQgTCAyMTQgNTguNjcgTCAyMTYgNTguMTIgTCAyMTggNTguMDEgTCAyMjAgNTguMzQgTCAyMjIgNTkuMSBMIDIyNCA2MC4yOCBMIDIyNiA2MS44OSBMIDIyOCA2My45IEwgMjMwIDY2LjMxIEwgMjMyIDY5LjA5IEwgMjM0IDcyLjIzIEwgMjM2IDc1LjcgTCAyMzggNzkuNDkgTCAyNDAgODMuNTYgTCAyNDIgODcuODggTCAyNDQgOTIuNDMgTCAyNDYgOTcuMTggTCAyNDggMTAyLjA4IEwgMjUwIDEwNy4xMSBMIDI1MiAxMTIuMjMgTCAyNTQgMTE3LjQgTCAyNTYgMTIyLjYgTCAyNTggMTI3Ljc3IEwgMjYwIDEzMi44OSBMIDI2MiAxMzcuOTIgTCAyNjQgMTQyLjgyIEwgMjY2IDE0Ny41NyBMIDI2OCAxNTIuMTIgTCAyNzAgMTU2LjQ0IEwgMjcyIDE2MC41MSBMIDI3NCAxNjQuMyBMIDI3NiAxNjcuNzcgTCAyNzggMTcwLjkxIEwgMjgwIDE3My42OSBMIDI4MiAxNzYuMSBMIDI4NCAxNzguMTEgTCAyODYgMTc5LjcyIEwgMjg4IDE4MC45IEwgMjkwIDE4MS42NiBMIDI5MiAxODEuOTkgTCAyOTQgMTgxLjg4IEwgMjk2IDE4MS4zMyBMIDI5OCAxODAuMzYgTCAzMDAgMTc4Ljk3IEwgMzAyIDE3Ny4xNiBMIDMwNCAxNzQuOTQgTCAzMDYgMTcyLjM1IEwgMzA4IDE2OS4zOCBMIDMxMCAxNjYuMDcgTCAzMTIgMTYyLjQ0IEwgMzE0IDE1OC41MSBMIDMxNiAxNTQuMzEgTCAzMTggMTQ5Ljg3IEwgMzIwIDE0NS4yMiBMIDMyMiAxNDAuMzkgTCAzMjQgMTM1LjQyIEwgMzI2IDEzMC4zNCBMIDMyOCAxMjUuMTkgTCAzMzAgMTIwIEwgMzMyIDExNC44MSBMIDMzNCAxMDkuNjYgTCAzMzYgMTA0LjU4IEwgMzM4IDk5LjYxIEwgMzQwIDk0Ljc4IEwgMzQyIDkwLjEzIEwgMzQ0IDg1LjY5IEwgMzQ2IDgxLjQ5IEwgMzQ4IDc3LjU2IEwgMzUwIDczLjkzIEwgMzUyIDcwLjYyIEwgMzU0IDY3LjY1IEwgMzU2IDY1LjA2IEwgMzU4IDYyLjg0IEwgMzYwIDYxLjAzIEwgMzYyIDU5LjY0IEwgMzY0IDU4LjY3IEwgMzY2IDU4LjEyIEwgMzY4IDU4LjAxIEwgMzcwIDU4LjM0IEwgMzcyIDU5LjEgTCAzNzQgNjAuMjggTCAzNzYgNjEuODkgTCAzNzggNjMuOSBMIDM4MCA2Ni4zMSBMIDM4MiA2OS4wOSBMIDM4NCA3Mi4yMyBMIDM4NiA3NS43IEwgMzg4IDc5LjQ5IEwgMzkwIDgzLjU2IEwgMzkyIDg3Ljg4IEwgMzk0IDkyLjQzIEwgMzk2IDk3LjE4IEwgMzk4IDEwMi4wOCBMIDQwMCAxMDcuMTEgTCA0MDIgMTEyLjIzIEwgNDA0IDExNy40IEwgNDA2IDEyMi42IEwgNDA4IDEyNy43NyBMIDQxMCAxMzIuODkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjgiLz48bGluZSB4MT0iNjcuNSIgeTE9IjEyMCIgeDI9IjY3LjUiIHkyPSI1OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA0Ii8+PHRleHQgeD0iNzUuNSIgeT0iODkiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxYTdmNGIiPkE8L3RleHQ+PGxpbmUgeDE9IjY3LjUiIHkxPSI0NCIgeDI9IjIxNy41IiB5Mj0iNDQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNjcuNSIgeTE9IjM4IiB4Mj0iNjcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjIxNy41IiB5MT0iMzgiIHgyPSIyMTcuNSIgeTI9IjUwIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTQyLjUiIHk9IjM4IiBmb250LXNpemU9IjE1IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXN0eWxlPSJpdGFsaWMiPs67PC90ZXh0Pjwvc3ZnPg==)

> Une onde **transporte de l'énergie et de l'information, sans transporter de
> matière**. C'est cette idée qui relie le son, la lumière, la radio et la fibre
> optique — et qui fait de ce thème le socle des télécommunications.

---

## 1. Qu'est-ce qu'une onde ?

Une **onde** est la propagation d'une perturbation dans l'espace.

$$\boxed{\text{transfert d'énergie SANS déplacement de matière}}$$

> **L'image à retenir** : une vague fait monter et descendre un bouchon **sur place** ;
> elle ne l'emporte pas vers le rivage. Ce qui avance, c'est la perturbation.

---

## 2. Deux grandes familles

| | Onde **mécanique** | Onde **électromagnétique** |
|---|---|---|
| Milieu matériel | **indispensable** | **non nécessaire** |
| Se propage dans le vide | ❌ non | ✅ oui |
| Exemples | son, ultrasons, ondes sismiques, vagues | lumière, radio, micro-ondes, rayons X |
| Célérité dans l'air | $\approx 340$ m·s⁻¹ (son) | $3{,}0 \times 10^8$ m·s⁻¹ |

> ⚠️ **Le son ne se propage pas dans le vide** — c'est la différence fondamentale.
> Dans l'espace, aucune explosion ne s'entend.

---

## 3. Longitudinale ou transversale ?

<!-- schema:longi-transverse -->
![Dans une onde transversale, la perturbation est perpendiculaire à la propagation (corde) ; dans une onde longitudinale, elle lui est parallèle (ressort, son).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzEyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzMTIiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIzMjAiIHk9IjI4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5PbmRlIHRyYW5zdmVyc2FsZSAoY29yZGUpPC90ZXh0PjxwYXRoIGQ9Ik0gNDAgODAgTCA0MS44NyA4MCBMIDQzLjczIDgwIEwgNDUuNiA4MCBMIDQ3LjQ3IDgwIEwgNDkuMzMgODAgTCA1MS4yIDgwIEwgNTMuMDcgODAgTCA1NC45MyA4MCBMIDU2LjggODAgTCA1OC42NyA4MCBMIDYwLjUzIDgwIEwgNjIuNCA4MCBMIDY0LjI3IDgwIEwgNjYuMTMgODAgTCA2OCA4MCBMIDY5Ljg3IDgwIEwgNzEuNzMgODAgTCA3My42IDgwIEwgNzUuNDcgODAgTCA3Ny4zMyA4MCBMIDc5LjIgODAgTCA4MS4wNyA4MCBMIDgyLjkzIDgwIEwgODQuOCA4MCBMIDg2LjY3IDgwIEwgODguNTMgODAgTCA5MC40IDgwIEwgOTIuMjcgODAgTCA5NC4xMyA4MCBMIDk2IDgwIEwgOTcuODcgODAgTCA5OS43MyA4MCBMIDEwMS42IDgwIEwgMTAzLjQ3IDgwIEwgMTA1LjMzIDgwIEwgMTA3LjIgODAgTCAxMDkuMDcgODAgTCAxMTAuOTMgODAgTCAxMTIuOCA4MCBMIDExNC42NyA4MCBMIDExNi41MyA4MCBMIDExOC40IDgwIEwgMTIwLjI3IDgwIEwgMTIyLjEzIDgwIEwgMTI0IDgwIEwgMTI1Ljg3IDgwIEwgMTI3LjczIDgwIEwgMTI5LjYgODAgTCAxMzEuNDcgODAgTCAxMzMuMzMgODAgTCAxMzUuMiA4MCBMIDEzNy4wNyA4MCBMIDEzOC45MyA4MCBMIDE0MC44IDgwIEwgMTQyLjY3IDgwIEwgMTQ0LjUzIDgwIEwgMTQ2LjQgODAgTCAxNDguMjcgODAgTCAxNTAuMTMgODAgTCAxNTIgODAgTCAxNTMuODcgODAgTCAxNTUuNzMgODAgTCAxNTcuNiA4MCBMIDE1OS40NyA4MCBMIDE2MS4zMyA4MCBMIDE2My4yIDgwIEwgMTY1LjA3IDgwIEwgMTY2LjkzIDgwIEwgMTY4LjggODAgTCAxNzAuNjcgODAgTCAxNzIuNTMgODAgTCAxNzQuNCA4MCBMIDE3Ni4yNyA4MCBMIDE3OC4xMyA4MCBMIDE4MCA4MCBMIDE4MS44NyA4MCBMIDE4My43MyA4MCBMIDE4NS42IDgwIEwgMTg3LjQ3IDgwIEwgMTg5LjMzIDgwIEwgMTkxLjIgODAgTCAxOTMuMDcgODAgTCAxOTQuOTMgODAgTCAxOTYuOCA4MCBMIDE5OC42NyA4MCBMIDIwMC41MyA4MCBMIDIwMi40IDgwIEwgMjA0LjI3IDgwIEwgMjA2LjEzIDgwIEwgMjA4IDgwIEwgMjA5Ljg3IDgwIEwgMjExLjczIDc5Ljk5IEwgMjEzLjYgNzkuOTkgTCAyMTUuNDcgNzkuOTkgTCAyMTcuMzMgNzkuOTkgTCAyMTkuMiA3OS45OCBMIDIyMS4wNyA3OS45OCBMIDIyMi45MyA3OS45NyBMIDIyNC44IDc5Ljk3IEwgMjI2LjY3IDc5Ljk2IEwgMjI4LjUzIDc5Ljk1IEwgMjMwLjQgNzkuOTMgTCAyMzIuMjcgNzkuOTEgTCAyMzQuMTMgNzkuODkgTCAyMzYgNzkuODYgTCAyMzcuODcgNzkuODMgTCAyMzkuNzMgNzkuNzkgTCAyNDEuNiA3OS43NCBMIDI0My40NyA3OS42OCBMIDI0NS4zMyA3OS42MSBMIDI0Ny4yIDc5LjUzIEwgMjQ5LjA3IDc5LjQzIEwgMjUwLjkzIDc5LjMyIEwgMjUyLjggNzkuMTggTCAyNTQuNjcgNzkuMDIgTCAyNTYuNTMgNzguODMgTCAyNTguNCA3OC42MiBMIDI2MC4yNyA3OC4zNyBMIDI2Mi4xMyA3OC4wOSBMIDI2NCA3Ny43NyBMIDI2NS44NyA3Ny40IEwgMjY3LjczIDc2Ljk5IEwgMjY5LjYgNzYuNTIgTCAyNzEuNDcgNzYuMDEgTCAyNzMuMzMgNzUuNDMgTCAyNzUuMiA3NC44IEwgMjc3LjA3IDc0LjEgTCAyNzguOTMgNzMuMzQgTCAyODAuOCA3Mi41MSBMIDI4Mi42NyA3MS42MiBMIDI4NC41MyA3MC42NiBMIDI4Ni40IDY5LjY0IEwgMjg4LjI3IDY4LjU1IEwgMjkwLjEzIDY3LjQxIEwgMjkyIDY2LjIxIEwgMjkzLjg3IDY0Ljk3IEwgMjk1LjczIDYzLjY4IEwgMjk3LjYgNjIuMzYgTCAyOTkuNDcgNjEuMDEgTCAzMDEuMzMgNTkuNjYgTCAzMDMuMiA1OC4zIEwgMzA1LjA3IDU2Ljk1IEwgMzA2LjkzIDU1LjYyIEwgMzA4LjggNTQuMzMgTCAzMTAuNjcgNTMuMDggTCAzMTIuNTMgNTEuOSBMIDMxNC40IDUwLjggTCAzMTYuMjcgNDkuNzggTCAzMTguMTMgNDguODYgTCAzMjAgNDguMDYgTCAzMjEuODcgNDcuMzggTCAzMjMuNzMgNDYuODIgTCAzMjUuNiA0Ni40MSBMIDMyNy40NyA0Ni4xNCBMIDMyOS4zMyA0Ni4wMSBMIDMzMS4yIDQ2LjAzIEwgMzMzLjA3IDQ2LjIgTCAzMzQuOTMgNDYuNTEgTCAzMzYuOCA0Ni45NyBMIDMzOC42NyA0Ny41NiBMIDM0MC41MyA0OC4yOCBMIDM0Mi40IDQ5LjEyIEwgMzQ0LjI3IDUwLjA2IEwgMzQ2LjEzIDUxLjEgTCAzNDggNTIuMjMgTCAzNDkuODcgNTMuNDMgTCAzNTEuNzMgNTQuNjkgTCAzNTMuNiA1NiBMIDM1NS40NyA1Ny4zMyBMIDM1Ny4zMyA1OC42OCBMIDM1OS4yIDYwLjA1IEwgMzYxLjA3IDYxLjQgTCAzNjIuOTMgNjIuNzQgTCAzNjQuOCA2NC4wNSBMIDM2Ni42NyA2NS4zMyBMIDM2OC41MyA2Ni41NiBMIDM3MC40IDY3Ljc0IEwgMzcyLjI3IDY4Ljg3IEwgMzc0LjEzIDY5Ljk0IEwgMzc2IDcwLjk0IEwgMzc3Ljg3IDcxLjg4IEwgMzc5LjczIDcyLjc1IEwgMzgxLjYgNzMuNTYgTCAzODMuNDcgNzQuMyBMIDM4NS4zMyA3NC45OCBMIDM4Ny4yIDc1LjYgTCAzODkuMDcgNzYuMTYgTCAzOTAuOTMgNzYuNjYgTCAzOTIuOCA3Ny4xMSBMIDM5NC42NyA3Ny41MSBMIDM5Ni41MyA3Ny44NiBMIDM5OC40IDc4LjE3IEwgNDAwLjI3IDc4LjQ1IEwgNDAyLjEzIDc4LjY4IEwgNDA0IDc4Ljg5IEwgNDA1Ljg3IDc5LjA3IEwgNDA3LjczIDc5LjIyIEwgNDA5LjYgNzkuMzUgTCA0MTEuNDcgNzkuNDYgTCA0MTMuMzMgNzkuNTYgTCA0MTUuMiA3OS42NCBMIDQxNy4wNyA3OS43IEwgNDE4LjkzIDc5Ljc2IEwgNDIwLjggNzkuOCBMIDQyMi42NyA3OS44NCBMIDQyNC41MyA3OS44NyBMIDQyNi40IDc5LjkgTCA0MjguMjcgNzkuOTIgTCA0MzAuMTMgNzkuOTQgTCA0MzIgNzkuOTUgTCA0MzMuODcgNzkuOTYgTCA0MzUuNzMgNzkuOTcgTCA0MzcuNiA3OS45OCBMIDQzOS40NyA3OS45OCBMIDQ0MS4zMyA3OS45OSBMIDQ0My4yIDc5Ljk5IEwgNDQ1LjA3IDc5Ljk5IEwgNDQ2LjkzIDc5Ljk5IEwgNDQ4LjggNzkuOTkgTCA0NTAuNjcgODAgTCA0NTIuNTMgODAgTCA0NTQuNCA4MCBMIDQ1Ni4yNyA4MCBMIDQ1OC4xMyA4MCBMIDQ2MCA4MCBMIDQ2MS44NyA4MCBMIDQ2My43MyA4MCBMIDQ2NS42IDgwIEwgNDY3LjQ3IDgwIEwgNDY5LjMzIDgwIEwgNDcxLjIgODAgTCA0NzMuMDcgODAgTCA0NzQuOTMgODAgTCA0NzYuOCA4MCBMIDQ3OC42NyA4MCBMIDQ4MC41MyA4MCBMIDQ4Mi40IDgwIEwgNDg0LjI3IDgwIEwgNDg2LjEzIDgwIEwgNDg4IDgwIEwgNDg5Ljg3IDgwIEwgNDkxLjczIDgwIEwgNDkzLjYgODAgTCA0OTUuNDcgODAgTCA0OTcuMzMgODAgTCA0OTkuMiA4MCBMIDUwMS4wNyA4MCBMIDUwMi45MyA4MCBMIDUwNC44IDgwIEwgNTA2LjY3IDgwIEwgNTA4LjUzIDgwIEwgNTEwLjQgODAgTCA1MTIuMjcgODAgTCA1MTQuMTMgODAgTCA1MTYgODAgTCA1MTcuODcgODAgTCA1MTkuNzMgODAgTCA1MjEuNiA4MCBMIDUyMy40NyA4MCBMIDUyNS4zMyA4MCBMIDUyNy4yIDgwIEwgNTI5LjA3IDgwIEwgNTMwLjkzIDgwIEwgNTMyLjggODAgTCA1MzQuNjcgODAgTCA1MzYuNTMgODAgTCA1MzguNCA4MCBMIDU0MC4yNyA4MCBMIDU0Mi4xMyA4MCBMIDU0NCA4MCBMIDU0NS44NyA4MCBMIDU0Ny43MyA4MCBMIDU0OS42IDgwIEwgNTUxLjQ3IDgwIEwgNTUzLjMzIDgwIEwgNTU1LjIgODAgTCA1NTcuMDcgODAgTCA1NTguOTMgODAgTCA1NjAuOCA4MCBMIDU2Mi42NyA4MCBMIDU2NC41MyA4MCBMIDU2Ni40IDgwIEwgNTY4LjI3IDgwIEwgNTcwLjEzIDgwIEwgNTcyIDgwIEwgNTczLjg3IDgwIEwgNTc1LjczIDgwIEwgNTc3LjYgODAgTCA1NzkuNDcgODAgTCA1ODEuMzMgODAgTCA1ODMuMiA4MCBMIDU4NS4wNyA4MCBMIDU4Ni45MyA4MCBMIDU4OC44IDgwIEwgNTkwLjY3IDgwIEwgNTkyLjUzIDgwIEwgNTk0LjQgODAgTCA1OTYuMjcgODAgTCA1OTguMTMgODAgTCA2MDAgODAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iODAiIHI9IjMiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjgwIiByPSIzIiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iODAiIHI9IjMiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSIxNjAiIGN5PSI4MCIgcj0iMyIgZmlsbD0iIzE2MjMyZSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjgwIiByPSIzIiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iMjQwIiBjeT0iNzkuNzgiIHI9IjMiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSIyODAiIGN5PSI3Mi44NyIgcj0iMyIgZmlsbD0iIzE2MjMyZSIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjQ4LjA2IiByPSIzIiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iMzYwIiBjeT0iNjAuNjMiIHI9IjMiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI3OC40MSIgcj0iMyIgZmlsbD0iIzE2MjMyZSIvPjxjaXJjbGUgY3g9IjQ0MCIgY3k9Ijc5Ljk4IiByPSIzIiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iNDgwIiBjeT0iODAiIHI9IjMiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSI1MjAiIGN5PSI4MCIgcj0iMyIgZmlsbD0iIzE2MjMyZSIvPjxjaXJjbGUgY3g9IjU2MCIgY3k9IjgwIiByPSIzIiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iNjAwIiBjeT0iODAiIHI9IjMiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMjUwIiB5MT0iMTI0IiB4Mj0iNDEwIiB5Mj0iMTI0IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQyMCwxMjQgNDEwLDExOSA0MTAsMTI5IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMzM1IiB5PSIxNDQiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnByb3BhZ2F0aW9uPC90ZXh0PjxsaW5lIHgxPSI1NjAiIHkxPSI5NiIgeDI9IjU2MCIgeTI9IjYyIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU2MCw1MiA1NTUsNjIgNTY1LDYyIiBmaWxsPSIjMWE3ZjRiIi8+PGxpbmUgeDE9IjU2MCIgeTE9IjUyIiB4Mj0iNTYwIiB5Mj0iODYiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTYwLDk2IDU2NSw4NiA1NTUsODYiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSI1NDgiIHk9IjUwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0iZW5kIj5wZXJ0dXJiYXRpb248L3RleHQ+PHRleHQgeD0iNTQ4IiB5PSI2NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9ImVuZCI+cGVycGVuZGljdWxhaXJlPC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMTg2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5PbmRlIGxvbmdpdHVkaW5hbGUgKHJlc3NvcnQsIHNvbik8L3RleHQ+PGVsbGlwc2UgY3g9IjQwIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjU2LjUxIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjcyLjMiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iODYuODMiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iOTkuNzYiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMTExLjEzIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjEyMS4yNSIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIxMzAuNzIiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMTQwLjI0IiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjE1MC41MyIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIxNjIuMTIiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMTc1LjMxIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjE5MC4wNSIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIyMDYiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMjIyLjU2IiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjIzOSIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIyNTQuNjMiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMjY4LjkyIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjI4MS42MSIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIyOTIuNzUiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMzAyLjc0IiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjMxMi4xNiIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIzMjEuNzYiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMzMyLjIyIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjM0NC4wNCIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSIzNTcuNDgiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMzcyLjQ0IiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjM4OC41MyIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSI0MDUuMTEiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iNDIxLjQ3IiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjQzNi45MyIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSI0NTAuOTgiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iNDYzLjQyIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjQ3NC4zNSIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSI0ODQuMjEiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iNDkzLjYxIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjUwMy4zIiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjUxMy45NCIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSI1MjYiIGN5PSIyMzAiIHJ4PSI0IiByeT0iMTgiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iNTM5LjY5IiBjeT0iMjMwIiByeD0iNCIgcnk9IjE4IiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjU1NC44NiIgY3k9IjIzMCIgcng9IjQiIHJ5PSIxOCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSI0MCIgeTE9IjIzMCIgeDI9IjU2MiIgeTI9IjIzMCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjEzMCIgeT0iMjY2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jb21wcmVzc2lvbjwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjI2NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y29tcHJlc3Npb248L3RleHQ+PHRleHQgeD0iNDkwIiB5PSIyNjYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmNvbXByZXNzaW9uPC90ZXh0PjxsaW5lIHgxPSIyNTAiIHkxPSIyODQiIHgyPSI0MTAiIHkyPSIyODQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDIwLDI4NCA0MTAsMjc5IDQxMCwyODkiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIzMzUiIHk9IjMwMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cHJvcGFnYXRpb248L3RleHQ+PGxpbmUgeDE9IjUwMCIgeTE9IjIwMiIgeDI9IjU1MCIgeTI9IjIwMiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1NjAsMjAyIDU1MCwxOTcgNTUwLDIwNyIgZmlsbD0iIzFhN2Y0YiIvPjxsaW5lIHgxPSI1NjAiIHkxPSIyMDIiIHgyPSI1MTAiIHkyPSIyMDIiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTAwLDIwMiA1MTAsMjA3IDUxMCwxOTciIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSI1MzAiIHk9IjE5MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cGVydHVyYmF0aW9uIHBhcmFsbMOobGU8L3RleHQ+PC9zdmc+)
*Dans une onde transversale, la perturbation est perpendiculaire à la propagation (corde) ; dans une onde longitudinale, elle lui est parallèle (ressort, son).*
<!-- /schema -->

| Type | Direction de la perturbation | Exemple |
|---|---|---|
| **Longitudinale** | **parallèle** à la propagation | le son (compressions/dilatations de l'air) |
| **Transversale** | **perpendiculaire** à la propagation | une corde qu'on secoue, la lumière |

---

## 4. Grandeurs d'une onde périodique

| Grandeur | Symbole | Unité | Nature |
|---|---|---|---|
| Période | $T$ | s | période **temporelle** |
| Fréquence | $f$ | Hz | nombre d'oscillations par seconde |
| Longueur d'onde | $\lambda$ | m | période **spatiale** |
| Célérité | $v$ ou $c$ | m·s⁻¹ | vitesse de propagation |

$$\boxed{f = \frac{1}{T}} \qquad\qquad \boxed{\lambda = v \times T = \frac{v}{f}}$$

> **Ce que signifie $\lambda$** : la distance parcourue par l'onde **pendant une
> période**. C'est une longueur, pas une durée.

> **Exemple.** Un son de $170$ Hz dans l'air :
> $\lambda = \dfrac{340}{170} = 2$ m.

### ⚠️ Le piège du changement de milieu

Quand une onde passe d'un milieu à un autre :

| Grandeur | Évolution |
|---|---|
| **Fréquence** $f$ | **INCHANGÉE** — imposée par la source |
| Célérité $v$ | change |
| Longueur d'onde $\lambda$ | change, puisque $\lambda = v/f$ |

---

## 5. Phénomènes de propagation

| Phénomène | Description |
|---|---|
| **Absorption** | le milieu prélève une partie de l'énergie ; l'onde s'atténue |
| **Réflexion** | l'onde rebondit sur un obstacle (écho, miroir, radar) |
| **Transmission** | l'onde traverse le milieu |

Un **guide d'onde** confine l'onde pour limiter les pertes — la **fibre optique**
guide la lumière par réflexions successives, un câble coaxial guide les ondes radio.

---

## 6. Les ondes sonores

Le son est une onde **mécanique longitudinale** : une succession de compressions et de
dilatations du milieu. Il lui faut donc **toujours** un milieu matériel.

### Célérité selon le milieu

Le son va **plus vite dans les milieux denses**, à l'inverse de l'intuition.

| Milieu | Célérité (ordre de grandeur) |
|---|---|
| Air | $\approx 340$ m·s⁻¹ |
| Eau | $\approx 1\,500$ m·s⁻¹ |
| Métal (acier) | $\approx 5\,000$ m·s⁻¹ |

> **Pourquoi ?** Plus les particules du milieu sont liées entre elles, plus la
> perturbation se transmet vite de proche en proche.

### Ce que l'oreille perçoit

**Deux grandeurs physiques** déterminent la perception d'un son :

| Perception | Grandeur physique |
|---|---|
| **Hauteur** (grave / aigu) | la **fréquence** |
| **Intensité** sonore (fort / faible) | l'**amplitude** |

**Domaine audible** : environ $20$ Hz à $20\,000$ Hz. En dessous, ce sont des
**infrasons** ; au-dessus, des **ultrasons**.

### Puissance et intensité acoustiques

L'**intensité acoustique** $I$ est la puissance sonore reçue **par unité de surface** :

$$\boxed{I = \frac{P}{S}} \qquad I \text{ en W·m}^{-2},\ P \text{ en W},\ S \text{ en m}^2$$

Pour une source qui rayonne dans toutes les directions, l'onde se répartit à la
distance $d$ sur une sphère de surface $S = 4\pi d^2$ :

$$I = \frac{P}{4\pi d^2}$$

> **Ce que dit la formule.** L'intensité décroît comme $1/d^2$ : à **deux fois plus
> loin**, on reçoit **quatre fois moins**. C'est pourquoi on s'éloigne d'une source
> bruyante plutôt que de la couvrir.

> **Exemple.** Une enceinte de $P = 12$ W écoutée à $d = 2$ m :
> $I = \dfrac{12}{4\pi \times 2^2} = \dfrac{12}{50{,}3} \approx 0{,}24$ W·m⁻².

### Mesurer une distance par réflexion

<!-- schema:echo -->
![Mesure d'une distance par écho : l'onde fait l'aller et le retour pendant la durée mesurée, d'où le facteur 2.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjU4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNTgiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI0MCIgeT0iOTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI2MCIgcng9IjYiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9Ijc1IiB5PSIxNzAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPsOpbWV0dGV1ci1yw6ljZXB0ZXVyPC90ZXh0PjxyZWN0IHg9IjU2MCIgeT0iNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNzAiIHJ4PSIwIiBmaWxsPSIjZDhkZWU2IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iNTg0IiB5MT0iNDgiIHgyPSI1OTYiIHkyPSI0MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU4NCIgeTE9IjY5IiB4Mj0iNTk2IiB5Mj0iNjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1ODQiIHkxPSI5MCIgeDI9IjU5NiIgeTI9IjgyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTg0IiB5MT0iMTExIiB4Mj0iNTk2IiB5Mj0iMTAzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTg0IiB5MT0iMTMyIiB4Mj0iNTk2IiB5Mj0iMTI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTg0IiB5MT0iMTUzIiB4Mj0iNTk2IiB5Mj0iMTQ1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTg0IiB5MT0iMTc0IiB4Mj0iNTk2IiB5Mj0iMTY2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTg0IiB5MT0iMTk1IiB4Mj0iNTk2IiB5Mj0iMTg3IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NzIiIHk9IjIyOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+b2JzdGFjbGU8L3RleHQ+PGxpbmUgeDE9IjExNiIgeTE9IjEwNSIgeDI9IjU0NCIgeTI9IjEwNSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1NTQsMTA1IDU0NCwxMDAgNTQ0LDExMCIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjMzNSIgeT0iOTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFsbGVyPC90ZXh0PjxsaW5lIHgxPSI1NTQiIHkxPSIxMzUiIHgyPSIxMjYiIHkyPSIxMzUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTE2LDEzNSAxMjYsMTQwIDEyNiwxMzAiIGZpbGw9IiMxYTdmNGIiLz48dGV4dCB4PSIzMzUiIHk9IjE1NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cmV0b3VyICjDqWNobyk8L3RleHQ+PGxpbmUgeDE9IjExMCIgeTE9IjIwMCIgeDI9IjU1MiIgeTI9IjIwMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1NjAsMjAwIDU1MiwxOTYgNTUyLDIwNCIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI1NjAiIHkxPSIyMDAiIHgyPSIxMTgiIHkyPSIyMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDIwMCAxMTgsMjA0IDExOCwxOTYiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIzMzUiIHk9IjE5MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZDwvdGV4dD48dGV4dCB4PSIzMzUiIHk9IjI0NCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZHVyw6llIG1lc3Vyw6llIM6UdCA6IGFsbGVyICsgcmV0b3VyIDsgZCA9IHYgw5cgzpR0IC8gMjwvdGV4dD48L3N2Zz4=)
*Mesure d'une distance par écho : l'onde fait l'aller et le retour pendant la durée mesurée, d'où le facteur 2.*
<!-- /schema -->

On émet un signal, on mesure la durée $\Delta t$ de l'**aller-retour**, et :

$$\boxed{d = \frac{v \times \Delta t}{2}}$$

Le facteur $2$ vient du trajet double. C'est le principe du **sonar**, du **télémètre
à ultrasons** et de l'**échographie**.

> **Exemple.** Un écho revient après $\Delta t = 0{,}6$ s dans l'air :
> $d = \dfrac{340 \times 0{,}6}{2} = 102$ m.

> ⚠️ **Sans réflexion** — quand émetteur et récepteur sont distincts — il n'y a **pas**
> de facteur $2$ : $d = v \times \Delta t$. Lis bien l'énoncé.

---

## 7. Les ondes électromagnétiques

Toutes se propagent dans le vide à la **même** célérité :

$$\boxed{c = 3{,}00 \times 10^8\ \text{m·s}^{-1}}$$

Elles ne diffèrent que par leur **fréquence** — donc par leur longueur d'onde, puisque
$\lambda = c/f$.

### Ordonner les domaines

<!-- schema:spectre-em -->
![Les domaines des ondes électromagnétiques rangés par longueur d'onde croissante : la fréquence croît en sens inverse ; le visible va d'environ 400 à 800 nm.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjY2IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyNjYiIGZpbGw9IiNmZmZmZmYiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InZpcyIgeDE9IjAiIHgyPSIxIiB5MT0iMCIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzdhMWZkMSIvPjxzdG9wIG9mZnNldD0iMC4xIiBzdG9wLWNvbG9yPSIjM2IyZmY1Ii8+PHN0b3Agb2Zmc2V0PSIwLjIiIHN0b3AtY29sb3I9IiMxZjc4ZmYiLz48c3RvcCBvZmZzZXQ9IjAuMjciIHN0b3AtY29sb3I9IiMxM2I1ZDYiLz48c3RvcCBvZmZzZXQ9IjAuMzciIHN0b3AtY29sb3I9IiMyNmMyNGEiLz48c3RvcCBvZmZzZXQ9IjAuNDUiIHN0b3AtY29sb3I9IiNhNmQ2MWMiLz48c3RvcCBvZmZzZXQ9IjAuNDciIHN0b3AtY29sb3I9IiNmZmUyMWEiLz48c3RvcCBvZmZzZXQ9IjAuNTIiIHN0b3AtY29sb3I9IiNmZmIyMWEiLz48c3RvcCBvZmZzZXQ9IjAuNiIgc3RvcC1jb2xvcj0iI2ZmNmExYSIvPjxzdG9wIG9mZnNldD0iMC43IiBzdG9wLWNvbG9yPSIjZjAxODE4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN2EwYTBhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMjAiIHk9IjcwIiB3aWR0aD0iNzcuNSIgaGVpZ2h0PSI0NiIgcng9IjAiIGZpbGw9IiNkOWM3ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSI1OC43NSIgeT0iOTgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPs6zPC90ZXh0PjxyZWN0IHg9Ijk3LjUiIHk9IjcwIiB3aWR0aD0iMTE2LjI1IiBoZWlnaHQ9IjQ2IiByeD0iMCIgZmlsbD0iI2U2ZDZmMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjE1NS42MyIgeT0iOTgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlg8L3RleHQ+PHJlY3QgeD0iMjEzLjc1IiB5PSI3MCIgd2lkdGg9IjYyLjA4IiBoZWlnaHQ9IjQ2IiByeD0iMCIgZmlsbD0iI2VmZTNmNyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjI0NC43OSIgeT0iOTgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlVWPC90ZXh0PjxyZWN0IHg9IjI3NS44MyIgeT0iNzAiIHdpZHRoPSIxMS42NiIgaGVpZ2h0PSI0NiIgcng9IjAiIGZpbGw9InVybCgjdmlzKSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjI4Ny40OSIgeT0iNzAiIHdpZHRoPSIxMjAuMDEiIGhlaWdodD0iNDYiIHJ4PSIwIiBmaWxsPSIjZmRlMGQ2IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMzQ3LjUiIHk9Ijk4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5pbmZyYXJvdWdlPC90ZXh0PjxyZWN0IHg9IjQwNy41IiB5PSI3MCIgd2lkdGg9IjExNi4yNSIgaGVpZ2h0PSI0NiIgcng9IjAiIGZpbGw9IiNmZGVjZDIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48dGV4dCB4PSI0NjUuNjMiIHk9Ijk4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5taWNyby1vbmRlczwvdGV4dD48cmVjdCB4PSI1MjMuNzUiIHk9IjcwIiB3aWR0aD0iMTE2LjI1IiBoZWlnaHQ9IjQ2IiByeD0iMCIgZmlsbD0iI2ZkZjRkOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjU4MS44OCIgeT0iOTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm9uZGVzIHJhZGlvPC90ZXh0PjxwYXRoIGQ9Ik0gMjc1LjgzIDExNiBMIDE5MCAxOTAiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiLz48cGF0aCBkPSJNIDI4Ny40OSAxMTYgTCA0NzAgMTkwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1Ii8+PHJlY3QgeD0iMTkwIiB5PSIxOTAiIHdpZHRoPSIyODAiIGhlaWdodD0iMzAiIHJ4PSIwIiBmaWxsPSJ1cmwoI3ZpcykiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEiLz48cmVjdCB4PSIyNzEuNCIgeT0iMTY5IiB3aWR0aD0iMTE3LjIiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSIzMzAiIHk9IjE4MiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bHVtacOocmUgdmlzaWJsZTwvdGV4dD48dGV4dCB4PSIxOTAiIHk9IjIzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDAwIG5tICh2aW9sZXQpPC90ZXh0Pjx0ZXh0IHg9IjQ3MCIgeT0iMjM4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj44MDAgbm0gKHJvdWdlKTwvdGV4dD48bGluZSB4MT0iMjAiIHkxPSI0OCIgeDI9IjYzMSIgeTI9IjQ4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjY0MCw0OCA2MzEsNDMuNSA2MzEsNTIuNSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjY0MCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPmxvbmd1ZXVyIGQnb25kZSDOuyBjcm9pc3NhbnRlPC90ZXh0PjxsaW5lIHgxPSI2NDAiIHkxPSIxMzgiIHgyPSIyOSIgeTI9IjEzOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMCwxMzggMjksMTQyLjUgMjksMTMzLjUiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSI0MTQuMjQiIHk9IjE0NCIgd2lkdGg9IjIyOS43NiIgaGVpZ2h0PSIxOSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjY0MCIgeT0iMTU2IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIj5mcsOpcXVlbmNlIChldCDDqW5lcmdpZSkgY3JvaXNzYW50ZTwvdGV4dD48L3N2Zz4=)
*Les domaines des ondes électromagnétiques rangés par longueur d'onde croissante : la fréquence croît en sens inverse ; le visible va d'environ 400 à 800 nm.*
<!-- /schema -->

C'est **cela** qui est exigible : savoir les classer, dans un sens comme dans l'autre.

| Fréquence croissante → | Ondes radio · micro-ondes · infrarouge · **visible** · ultraviolet · rayons X · rayons gamma |
|---|---|
| **Longueur d'onde croissante →** | rayons gamma · rayons X · ultraviolet · **visible** · infrarouge · micro-ondes · ondes radio |

> **La règle** : plus la fréquence est élevée, plus la longueur d'onde est **courte**,
> et plus l'onde transporte d'énergie. Les deux classements sont donc **inverses** l'un
> de l'autre.

### Ce qu'il faut savoir citer — et ce qu'il ne faut pas apprendre

| | |
|---|---|
| ✅ **À citer** | les longueurs d'onde perceptibles par l'œil : **de $400$ nm environ (violet) à $800$ nm environ (rouge)** |
| ✅ **À citer** | la célérité dans le vide : $3{,}00 \times 10^8$ m·s⁻¹ |
| ❌ **Non exigible** | les valeurs limites des autres plages (gamma, X, UV, IR, radio) |

> **Ne perds pas de temps** à mémoriser les bornes des UV ou des micro-ondes : le
> programme précise qu'elles ne sont **pas exigibles**. Ce qui compte, c'est l'ordre.

---

## 8. Les sources lumineuses

| Source | Ce qui la caractérise |
|---|---|
| **Rayonnement solaire** | spectre continu, très large, du UV à l'IR |
| **Corps chauffé** | spectre continu ; plus le corps est chaud, plus le rayonnement se décale vers les courtes longueurs d'onde |
| **Diode électroluminescente (DEL)** | spectre étroit autour d'une couleur, bon rendement |
| **Lampe spectrale** | spectre de **raies** : quelques longueurs d'onde précises, caractéristiques de l'élément |
| **Laser** | une seule longueur d'onde, faisceau très directif |
| **Lampe UV** | rayonnement invisible, au-delà du violet |

### Les trois caractéristiques d'un laser

Ce sont celles qu'on relève dans une documentation technique :

| Caractéristique | Ce qu'elle dit |
|---|---|
| **Longueur d'onde** | la couleur du faisceau (ex. $650$ nm, rouge) |
| **Puissance** | l'énergie délivrée par seconde (ex. $1$ mW) |
| **Directivité** | l'ouverture du faisceau — très faible, d'où sa portée |

### ⚠️ Risques et précautions

C'est une **exigence du programme**, pas un avertissement de forme.

| Source | Risque | Précaution |
|---|---|---|
| **Laser** | lésion **irréversible** de la rétine : l'œil concentre le faisceau sur un point | ne jamais regarder dans l'axe, ni viser quelqu'un ; ne pas suivre le faisceau dans un miroir |
| **Lampe UV** | brûlures de la peau, lésions de la cornée | lunettes de protection, exposition limitée, peau couverte |
| **Soleil** | idem UV, et éblouissement | ne jamais l'observer directement, encore moins avec un instrument optique |

> **Pourquoi un laser de $1$ mW est dangereux alors qu'une ampoule de $60$ W ne l'est
> pas** : c'est la **directivité**. Toute la puissance du laser arrive concentrée sur
> une surface minuscule, donc l'intensité y est énorme — c'est exactement le $I = P/S$
> du § 6, avec un $S$ très petit.

---

## 9. Ondes et transport de l'information

Une onde est une perturbation qui se propage, et **ses caractéristiques peuvent porter
une information**.

Le principe est toujours le même :

$$\text{émetteur} \longrightarrow \text{onde modulée selon un code} \longrightarrow \text{récepteur}$$

**Moduler**, c'est faire varier une caractéristique de l'onde — son amplitude, sa
fréquence — au rythme de l'information à transmettre. Le récepteur lit ces variations
et reconstitue le message, **à condition de connaître le code** utilisé.

| Étape | Ce qui se passe |
|---|---|
| **Émission** | l'information modifie une caractéristique de l'onde porteuse |
| **Propagation** | l'onde traverse le milieu (air, fibre, câble) |
| **Réception** | le récepteur détecte les variations et décode |

> **Exemples de la vie courante** : la radio (l'onde porteuse est modulée par le son),
> la téléphonie mobile, la télécommande infrarouge, la fibre optique où la lumière est
> allumée et éteinte très vite pour coder des $0$ et des $1$.

> **Le point clé** : ce n'est pas l'onde qui *est* l'information, c'est la **façon dont
> elle est modifiée**. Une porteuse non modulée ne transmet rien.

---

## 10. À retenir absolument

| | |
|---|---|
| Onde | transfert d'**énergie** sans transport de **matière** |
| Mécanique | milieu matériel **indispensable** |
| Électromagnétique | se propage dans le **vide** |
| Longitudinale / transversale | perturbation parallèle / perpendiculaire |
| Relation fondamentale | $\lambda = vT = \dfrac{v}{f}$ |
| Changement de milieu | $f$ **inchangée**, $v$ et $\lambda$ changent |
| Célérité du son | air $340$ · eau $1\,500$ · acier $5\,000$ m·s⁻¹ |
| Célérité de la lumière | $3{,}00 \times 10^8$ m·s⁻¹ |
| Perception d'un son | **fréquence** → hauteur · **amplitude** → intensité |
| Domaine audible | $20$ Hz à $20$ kHz |
| Intensité acoustique | $I = \dfrac{P}{S}$, en W·m⁻² |
| Distance par écho | $d = \dfrac{v\,\Delta t}{2}$ |
| Visible | $\approx 400$ à $800$ nm |
| Transport d'information | onde **modulée selon un code** |

---

## 11. Les erreurs qui coûtent des points

1. **Croire qu'une onde transporte de la matière.**
2. **Penser que le son se propage dans le vide.**
3. **Croire que le son va plus vite dans l'air que dans l'eau** : c'est l'inverse.
4. **Confondre hauteur et intensité** : la hauteur dépend de la **fréquence**,
   l'intensité de l'**amplitude**.
5. **Oublier le facteur $2$** dans une mesure de distance par écho — ou l'ajouter
   quand il n'y a pas de réflexion.
6. **Croire que la fréquence change** quand l'onde change de milieu : c'est la
   **célérité** et la **longueur d'onde** qui changent.
7. **Apprendre par cœur les bornes du spectre** : seules celles du visible sont
   exigibles.
8. **Négliger le risque d'un laser de faible puissance** : c'est la directivité qui le
   rend dangereux, pas la puissance affichée.
9. **Confondre l'onde et l'information** : c'est la **modulation** qui porte le message.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », thème « Ondes et information » — trois sous-parties : « Notion
d'onde », « Ondes sonores », « Ondes électromagnétiques ».

RÉÉCRITURE DU 2026-08-10. La version précédente avait été bâtie sur l'UNION de deux
extractions partielles du PDF. Celui-ci a été réextrait avec app/scripts/extraire-pdf.mjs :
les trois sous-parties sont désormais intégralement lisibles. Les sections 1 à 5, déjà
bien adossées au texte, sont conservées ; la suite est réécrite.

Ce que la relecture du texte officiel a changé :

- SOURCES LUMINEUSES : bloc de contenus entier, totalement absent de la version
  précédente. Le programme liste « rayonnement solaire, corps chauffés, diodes
  électroluminescentes, lasers, lampes spectrales, lampes UV », exige d'« extraire
  d'une documentation fournie et exploiter les principales caractéristiques (longueur
  d'onde, puissance, directivité) d'un laser », et de « citer les risques et les
  précautions associés à l'utilisation de sources lumineuses variées ». Section 8
  ajoutée.
- TRANSPORT DE L'INFORMATION : la version précédente traitait BANDE PASSANTE et
  ATTÉNUATION, qui n'apparaissent nulle part dans le texte, et ne mentionnait pas la
  modulation. Le programme demande d'« associer le transport de l'information à la
  propagation entre l'émetteur et le récepteur d'une onde MODULÉE SELON UN CODE
  DONNÉ ». Section 9 réécrite autour de la modulation. La question ouverte de la
  version précédente — « la modulation est-elle au programme ? » — est donc tranchée :
  oui, c'est même le cœur de la capacité. En revanche AM et FM ne sont pas nommées :
  le principe est exigible, pas la typologie.
- INTENSITÉ ACOUSTIQUE : le programme exige d'« exploiter la relation entre la
  puissance et l'intensité acoustiques ». C'est une relation QUANTITATIVE, absente de
  la version précédente, qui mentionnait à la place le niveau en DÉCIBELS — lequel
  n'apparaît nulle part dans le texte. Le décibel a été retiré, I = P/S ajouté.
  La question ouverte « décibels quantitatifs ou qualitatifs ? » est tranchée : ni
  l'un ni l'autre, ce n'est pas la grandeur du programme.
- PERCEPTION DU SON : le texte impose « identifier et citer LES DEUX grandeurs
  influençant la perception sensorielle d'un son : amplitude et fréquence ». La
  version précédente en listait trois, en ajoutant le TIMBRE (harmoniques), qui n'est
  pas dans le texte. Retiré.
- CÉLÉRITÉ DU SON : le programme demande d'« évaluer la célérité du son dans quelques
  milieux : air, eau, métal ». Seul l'air était traité. Table ajoutée.
- DISTANCES PAR PROPAGATION : la capacité vise « avec OU SANS réflexion ». Le cas sans
  réflexion (pas de facteur 2) a été ajouté.
- SPECTRE ÉLECTROMAGNÉTIQUE : les repères pour l'enseignement précisent que « les
  valeurs limites des différentes plages [...] NE SONT PAS EXIGIBLES ». En revanche
  « citer les longueurs d'ondes perceptibles par l'œil humain » l'est. La fiche
  distingue désormais explicitement les deux, ce qui répond à la question ouverte de
  la version précédente.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La forme exacte attendue pour « la relation entre puissance et intensité
  acoustiques » (§ 6) : le texte ne l'écrit pas. I = P/S, et le cas sphérique
  I = P/(4πd²), sont la lecture la plus naturelle — à confirmer.
- Les bornes du visible (400–800 nm) : le programme demande de les citer sans donner
  de valeurs. 400–800 est l'usage ; certains manuels retiennent 380–780.
- Les ordres de grandeur de célérité (eau 1500, acier 5000 m·s⁻¹) sont des valeurs
  usuelles, non fournies par le texte.
- Le programme mentionne « mettre en œuvre un guide d'onde » comme activité
  expérimentale : vérifier si la fiche doit en dire davantage que le § 5.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
