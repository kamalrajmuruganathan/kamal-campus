---
id: 1st2s-pc-risques-electriques
titre: "Risques électriques dans l'habitat"
voie: technologique
niveau: premiere-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Prévenir et sécuriser"
duree_lecture_min: 15
prerequis:
  - Circuits électriques, tension et intensité (cycle 4)
  - Écriture scientifique et puissances de 10 (Seconde)
  - Conversions d'unités (préfixes milli-, kilo-)
statut: brouillon
relu_par: null
---

# Risques électriques dans l'habitat

> Le courant du secteur alimente tous les logements, mais il peut blesser ou tuer.
> Comme futur professionnel de la santé et du social, tu dois comprendre **pourquoi**
> le courant est dangereux pour le corps humain et **comment** l'installation
> domestique protège les personnes. Ce chapitre relie une grandeur physique — la
> tension alternative — à des gestes de sécurité concrets.

---

## 1. La tension alternative sinusoïdale

### Définition

Une tension **continue** garde toujours le même signe (une pile : borne + toujours
positive). La tension du **secteur** est **alternative** : elle change de signe
régulièrement, et sa courbe en fonction du temps a la forme d'une **sinusoïde**.

> **Exemple.** Sur l'écran d'un oscilloscope branché sur une prise, on ne voit pas une
> droite horizontale (ce serait du continu) mais une **vague** régulière qui monte
> au-dessus de zéro puis descend en dessous.

### Période et fréquence

La courbe se **répète** à l'identique. La durée d'un motif complet est la **période** $T$.

| Grandeur | Symbole | Unité |
|---|---|---|
| Période | $T$ | seconde (s) |
| Fréquence | $f$ | hertz (Hz) |

La **fréquence** est le nombre de périodes par seconde :

$$\boxed{f = \frac{1}{T}} \qquad\qquad T = \frac{1}{f}$$

> **Exemple — le secteur français.** Sa fréquence vaut $f = 50$ Hz : la tension
> effectue $50$ allers-retours par seconde. Sa période est donc
> $T = \dfrac{1}{f} = \dfrac{1}{50} = 0{,}020$ s $= 20$ ms.

### Valeurs maximale, minimale et efficace

<!-- schema:tension-secteur -->
![Tension du secteur : sinusoïde de période 20 ms (50 Hz) qui varie entre +325 V et −325 V ; le voltmètre affiche la valeur efficace 230 V.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNjQiIHkxPSIyOTQiIHgyPSI2NCIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEzMi43NSIgeTE9IjI5NCIgeDI9IjEzMi43NSIgeTI9IjMwIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjIwMS41IiB5MT0iMjk0IiB4Mj0iMjAxLjUiIHkyPSIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNzAuMjUiIHkxPSIyOTQiIHgyPSIyNzAuMjUiIHkyPSIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMzkiIHkxPSIyOTQiIHgyPSIzMzkiIHkyPSIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0MDcuNzUiIHkxPSIyOTQiIHgyPSI0MDcuNzUiIHkyPSIzMCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NzYuNSIgeTE9IjI5NCIgeDI9IjQ3Ni41IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTQ1LjI1IiB5MT0iMjk0IiB4Mj0iNTQ1LjI1IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjE0IiB5MT0iMjk0IiB4Mj0iNjE0IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIyOTQiIHgyPSI2MTQiIHkyPSIyOTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIyNjEiIHgyPSI2MTQiIHkyPSIyNjEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIyMjgiIHgyPSI2MTQiIHkyPSIyMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIxOTUiIHgyPSI2MTQiIHkyPSIxOTUiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIxNjIiIHgyPSI2MTQiIHkyPSIxNjIiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIxMjkiIHgyPSI2MTQiIHkyPSIxMjkiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSI5NiIgeDI9IjYxNCIgeTI9Ijk2IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjY0IiB5MT0iNjMiIHgyPSI2MTQiIHkyPSI2MyIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2NCIgeTE9IjMwIiB4Mj0iNjE0IiB5Mj0iMzAiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIyOTQiIHgyPSI2MTkiIHkyPSIyOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNjI4LDI5NCA2MTksMjg5LjUgNjE5LDI5OC41IiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjY0IiB5MT0iMjk0IiB4Mj0iNjQiIHkyPSIyNSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2NCwxNiA1OS41LDI1IDY4LjUsMjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNjQiIHkxPSIyOTQiIHgyPSI2NCIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjQiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD48bGluZSB4MT0iMTMyLjc1IiB5MT0iMjk0IiB4Mj0iMTMyLjc1IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMzIuNzUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMjAxLjUiIHkxPSIyOTQiIHgyPSIyMDEuNSIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjAxLjUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+PGxpbmUgeDE9IjI3MC4yNSIgeTE9IjI5NCIgeDI9IjI3MC4yNSIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjcwLjI1IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE1PC90ZXh0PjxsaW5lIHgxPSIzMzkiIHkxPSIyOTQiIHgyPSIzMzkiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMzOSIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iNDA3Ljc1IiB5MT0iMjk0IiB4Mj0iNDA3Ljc1IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MDcuNzUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjU8L3RleHQ+PGxpbmUgeDE9IjQ3Ni41IiB5MT0iMjk0IiB4Mj0iNDc2LjUiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ3Ni41IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMwPC90ZXh0PjxsaW5lIHgxPSI1NDUuMjUiIHkxPSIyOTQiIHgyPSI1NDUuMjUiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU0NS4yNSIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zNTwvdGV4dD48bGluZSB4MT0iNjE0IiB5MT0iMjk0IiB4Mj0iNjE0IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI2MTQiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NDA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMjk0IiB4Mj0iNjQiIHkyPSIyOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU2IiB5PSIyOTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPuKIkjQwMDwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIyNjEiIHgyPSI2NCIgeTI9IjI2MSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYiIHk9IjI2NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+4oiSMzAwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjIyOCIgeDI9IjY0IiB5Mj0iMjI4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NiIgeT0iMjMyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj7iiJIyMDA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMTk1IiB4Mj0iNjQiIHkyPSIxOTUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU2IiB5PSIxOTkiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPuKIkjEwMDwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxNjIiIHgyPSI2NCIgeTI9IjE2MiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYiIHk9IjE2NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MDwvdGV4dD48bGluZSB4MT0iNjAiIHkxPSIxMjkiIHgyPSI2NCIgeTI9IjEyOSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYiIHk9IjEzMyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MTAwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9Ijk2IiB4Mj0iNjQiIHkyPSI5NiIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYiIHk9IjEwMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MjAwPC90ZXh0PjxsaW5lIHgxPSI2MCIgeTE9IjYzIiB4Mj0iNjQiIHkyPSI2MyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTYiIHk9IjY3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4zMDA8L3RleHQ+PGxpbmUgeDE9IjYwIiB5MT0iMzAiIHgyPSI2NCIgeTI9IjMwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NiIgeT0iMzQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjQwMDwvdGV4dD48dGV4dCB4PSI2MzQiIHk9IjMzMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+dCAobXMpPC90ZXh0Pjx0ZXh0IHg9IjU4IiB5PSIxMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij51IChWKTwvdGV4dD48bGluZSB4MT0iNjQiIHkxPSIxNjIiIHgyPSI2MTQiIHkyPSIxNjIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNjQgMTYyIEwgNjUuODMgMTU3LjUxIEwgNjcuNjcgMTUzLjAyIEwgNjkuNSAxNDguNTUgTCA3MS4zMyAxNDQuMSBMIDczLjE3IDEzOS42OCBMIDc1IDEzNS4zMSBMIDc2LjgzIDEzMC45OCBMIDc4LjY3IDEyNi43IEwgODAuNSAxMjIuNDkgTCA4Mi4zMyAxMTguMzQgTCA4NC4xNyAxMTQuMjcgTCA4NiAxMTAuMjkgTCA4Ny44MyAxMDYuNCBMIDg5LjY3IDEwMi42IEwgOTEuNSA5OC45MSBMIDkzLjMzIDk1LjMzIEwgOTUuMTcgOTEuODYgTCA5NyA4OC41MiBMIDk4LjgzIDg1LjMxIEwgMTAwLjY3IDgyLjIzIEwgMTAyLjUgNzkuMjkgTCAxMDQuMzMgNzYuNSBMIDEwNi4xNyA3My44NiBMIDEwOCA3MS4zNyBMIDEwOS44MyA2OS4wNCBMIDExMS42NyA2Ni44OCBMIDExMy41IDY0Ljg4IEwgMTE1LjMzIDYzLjA1IEwgMTE3LjE3IDYxLjM5IEwgMTE5IDU5LjkxIEwgMTIwLjgzIDU4LjYyIEwgMTIyLjY3IDU3LjUgTCAxMjQuNSA1Ni41NiBMIDEyNi4zMyA1NS44MSBMIDEyOC4xNyA1NS4yNSBMIDEzMCA1NC44NyBMIDEzMS44MyA1NC42OCBMIDEzMy42NyA1NC42OCBMIDEzNS41IDU0Ljg3IEwgMTM3LjMzIDU1LjI1IEwgMTM5LjE3IDU1LjgxIEwgMTQxIDU2LjU2IEwgMTQyLjgzIDU3LjUgTCAxNDQuNjcgNTguNjIgTCAxNDYuNSA1OS45MSBMIDE0OC4zMyA2MS4zOSBMIDE1MC4xNyA2My4wNSBMIDE1MiA2NC44OCBMIDE1My44MyA2Ni44OCBMIDE1NS42NyA2OS4wNCBMIDE1Ny41IDcxLjM3IEwgMTU5LjMzIDczLjg2IEwgMTYxLjE3IDc2LjUgTCAxNjMgNzkuMjkgTCAxNjQuODMgODIuMjMgTCAxNjYuNjcgODUuMzEgTCAxNjguNSA4OC41MiBMIDE3MC4zMyA5MS44NiBMIDE3Mi4xNyA5NS4zMyBMIDE3NCA5OC45MSBMIDE3NS44MyAxMDIuNiBMIDE3Ny42NyAxMDYuNCBMIDE3OS41IDExMC4yOSBMIDE4MS4zMyAxMTQuMjcgTCAxODMuMTcgMTE4LjM0IEwgMTg1IDEyMi40OSBMIDE4Ni44MyAxMjYuNyBMIDE4OC42NyAxMzAuOTggTCAxOTAuNSAxMzUuMzEgTCAxOTIuMzMgMTM5LjY4IEwgMTk0LjE3IDE0NC4xIEwgMTk2IDE0OC41NSBMIDE5Ny44MyAxNTMuMDIgTCAxOTkuNjcgMTU3LjUxIEwgMjAxLjUgMTYyIEwgMjAzLjMzIDE2Ni40OSBMIDIwNS4xNyAxNzAuOTggTCAyMDcgMTc1LjQ1IEwgMjA4LjgzIDE3OS45IEwgMjEwLjY3IDE4NC4zMiBMIDIxMi41IDE4OC42OSBMIDIxNC4zMyAxOTMuMDIgTCAyMTYuMTcgMTk3LjMgTCAyMTggMjAxLjUxIEwgMjE5LjgzIDIwNS42NiBMIDIyMS42NyAyMDkuNzMgTCAyMjMuNSAyMTMuNzEgTCAyMjUuMzMgMjE3LjYgTCAyMjcuMTcgMjIxLjQgTCAyMjkgMjI1LjA5IEwgMjMwLjgzIDIyOC42NyBMIDIzMi42NyAyMzIuMTQgTCAyMzQuNSAyMzUuNDggTCAyMzYuMzMgMjM4LjY5IEwgMjM4LjE3IDI0MS43NyBMIDI0MCAyNDQuNzEgTCAyNDEuODMgMjQ3LjUgTCAyNDMuNjcgMjUwLjE0IEwgMjQ1LjUgMjUyLjYzIEwgMjQ3LjMzIDI1NC45NiBMIDI0OS4xNyAyNTcuMTIgTCAyNTEgMjU5LjEyIEwgMjUyLjgzIDI2MC45NSBMIDI1NC42NyAyNjIuNjEgTCAyNTYuNSAyNjQuMDkgTCAyNTguMzMgMjY1LjM4IEwgMjYwLjE3IDI2Ni41IEwgMjYyIDI2Ny40NCBMIDI2My44MyAyNjguMTkgTCAyNjUuNjcgMjY4Ljc1IEwgMjY3LjUgMjY5LjEzIEwgMjY5LjMzIDI2OS4zMiBMIDI3MS4xNyAyNjkuMzIgTCAyNzMgMjY5LjEzIEwgMjc0LjgzIDI2OC43NSBMIDI3Ni42NyAyNjguMTkgTCAyNzguNSAyNjcuNDQgTCAyODAuMzMgMjY2LjUgTCAyODIuMTcgMjY1LjM4IEwgMjg0IDI2NC4wOSBMIDI4NS44MyAyNjIuNjEgTCAyODcuNjcgMjYwLjk1IEwgMjg5LjUgMjU5LjEyIEwgMjkxLjMzIDI1Ny4xMiBMIDI5My4xNyAyNTQuOTYgTCAyOTUgMjUyLjYzIEwgMjk2LjgzIDI1MC4xNCBMIDI5OC42NyAyNDcuNSBMIDMwMC41IDI0NC43MSBMIDMwMi4zMyAyNDEuNzcgTCAzMDQuMTcgMjM4LjY5IEwgMzA2IDIzNS40OCBMIDMwNy44MyAyMzIuMTQgTCAzMDkuNjcgMjI4LjY3IEwgMzExLjUgMjI1LjA5IEwgMzEzLjMzIDIyMS40IEwgMzE1LjE3IDIxNy42IEwgMzE3IDIxMy43MSBMIDMxOC44MyAyMDkuNzMgTCAzMjAuNjcgMjA1LjY2IEwgMzIyLjUgMjAxLjUxIEwgMzI0LjMzIDE5Ny4zIEwgMzI2LjE3IDE5My4wMiBMIDMyOCAxODguNjkgTCAzMjkuODMgMTg0LjMyIEwgMzMxLjY3IDE3OS45IEwgMzMzLjUgMTc1LjQ1IEwgMzM1LjMzIDE3MC45OCBMIDMzNy4xNyAxNjYuNDkgTCAzMzkgMTYyIEwgMzQwLjgzIDE1Ny41MSBMIDM0Mi42NyAxNTMuMDIgTCAzNDQuNSAxNDguNTUgTCAzNDYuMzMgMTQ0LjEgTCAzNDguMTcgMTM5LjY4IEwgMzUwIDEzNS4zMSBMIDM1MS44MyAxMzAuOTggTCAzNTMuNjcgMTI2LjcgTCAzNTUuNSAxMjIuNDkgTCAzNTcuMzMgMTE4LjM0IEwgMzU5LjE3IDExNC4yNyBMIDM2MSAxMTAuMjkgTCAzNjIuODMgMTA2LjQgTCAzNjQuNjcgMTAyLjYgTCAzNjYuNSA5OC45MSBMIDM2OC4zMyA5NS4zMyBMIDM3MC4xNyA5MS44NiBMIDM3MiA4OC41MiBMIDM3My44MyA4NS4zMSBMIDM3NS42NyA4Mi4yMyBMIDM3Ny41IDc5LjI5IEwgMzc5LjMzIDc2LjUgTCAzODEuMTcgNzMuODYgTCAzODMgNzEuMzcgTCAzODQuODMgNjkuMDQgTCAzODYuNjcgNjYuODggTCAzODguNSA2NC44OCBMIDM5MC4zMyA2My4wNSBMIDM5Mi4xNyA2MS4zOSBMIDM5NCA1OS45MSBMIDM5NS44MyA1OC42MiBMIDM5Ny42NyA1Ny41IEwgMzk5LjUgNTYuNTYgTCA0MDEuMzMgNTUuODEgTCA0MDMuMTcgNTUuMjUgTCA0MDUgNTQuODcgTCA0MDYuODMgNTQuNjggTCA0MDguNjcgNTQuNjggTCA0MTAuNSA1NC44NyBMIDQxMi4zMyA1NS4yNSBMIDQxNC4xNyA1NS44MSBMIDQxNiA1Ni41NiBMIDQxNy44MyA1Ny41IEwgNDE5LjY3IDU4LjYyIEwgNDIxLjUgNTkuOTEgTCA0MjMuMzMgNjEuMzkgTCA0MjUuMTcgNjMuMDUgTCA0MjcgNjQuODggTCA0MjguODMgNjYuODggTCA0MzAuNjcgNjkuMDQgTCA0MzIuNSA3MS4zNyBMIDQzNC4zMyA3My44NiBMIDQzNi4xNyA3Ni41IEwgNDM4IDc5LjI5IEwgNDM5LjgzIDgyLjIzIEwgNDQxLjY3IDg1LjMxIEwgNDQzLjUgODguNTIgTCA0NDUuMzMgOTEuODYgTCA0NDcuMTcgOTUuMzMgTCA0NDkgOTguOTEgTCA0NTAuODMgMTAyLjYgTCA0NTIuNjcgMTA2LjQgTCA0NTQuNSAxMTAuMjkgTCA0NTYuMzMgMTE0LjI3IEwgNDU4LjE3IDExOC4zNCBMIDQ2MCAxMjIuNDkgTCA0NjEuODMgMTI2LjcgTCA0NjMuNjcgMTMwLjk4IEwgNDY1LjUgMTM1LjMxIEwgNDY3LjMzIDEzOS42OCBMIDQ2OS4xNyAxNDQuMSBMIDQ3MSAxNDguNTUgTCA0NzIuODMgMTUzLjAyIEwgNDc0LjY3IDE1Ny41MSBMIDQ3Ni41IDE2MiBMIDQ3OC4zMyAxNjYuNDkgTCA0ODAuMTcgMTcwLjk4IEwgNDgyIDE3NS40NSBMIDQ4My44MyAxNzkuOSBMIDQ4NS42NyAxODQuMzIgTCA0ODcuNSAxODguNjkgTCA0ODkuMzMgMTkzLjAyIEwgNDkxLjE3IDE5Ny4zIEwgNDkzIDIwMS41MSBMIDQ5NC44MyAyMDUuNjYgTCA0OTYuNjcgMjA5LjczIEwgNDk4LjUgMjEzLjcxIEwgNTAwLjMzIDIxNy42IEwgNTAyLjE3IDIyMS40IEwgNTA0IDIyNS4wOSBMIDUwNS44MyAyMjguNjcgTCA1MDcuNjcgMjMyLjE0IEwgNTA5LjUgMjM1LjQ4IEwgNTExLjMzIDIzOC42OSBMIDUxMy4xNyAyNDEuNzcgTCA1MTUgMjQ0LjcxIEwgNTE2LjgzIDI0Ny41IEwgNTE4LjY3IDI1MC4xNCBMIDUyMC41IDI1Mi42MyBMIDUyMi4zMyAyNTQuOTYgTCA1MjQuMTcgMjU3LjEyIEwgNTI2IDI1OS4xMiBMIDUyNy44MyAyNjAuOTUgTCA1MjkuNjcgMjYyLjYxIEwgNTMxLjUgMjY0LjA5IEwgNTMzLjMzIDI2NS4zOCBMIDUzNS4xNyAyNjYuNSBMIDUzNyAyNjcuNDQgTCA1MzguODMgMjY4LjE5IEwgNTQwLjY3IDI2OC43NSBMIDU0Mi41IDI2OS4xMyBMIDU0NC4zMyAyNjkuMzIgTCA1NDYuMTcgMjY5LjMyIEwgNTQ4IDI2OS4xMyBMIDU0OS44MyAyNjguNzUgTCA1NTEuNjcgMjY4LjE5IEwgNTUzLjUgMjY3LjQ0IEwgNTU1LjMzIDI2Ni41IEwgNTU3LjE3IDI2NS4zOCBMIDU1OSAyNjQuMDkgTCA1NjAuODMgMjYyLjYxIEwgNTYyLjY3IDI2MC45NSBMIDU2NC41IDI1OS4xMiBMIDU2Ni4zMyAyNTcuMTIgTCA1NjguMTcgMjU0Ljk2IEwgNTcwIDI1Mi42MyBMIDU3MS44MyAyNTAuMTQgTCA1NzMuNjcgMjQ3LjUgTCA1NzUuNSAyNDQuNzEgTCA1NzcuMzMgMjQxLjc3IEwgNTc5LjE3IDIzOC42OSBMIDU4MSAyMzUuNDggTCA1ODIuODMgMjMyLjE0IEwgNTg0LjY3IDIyOC42NyBMIDU4Ni41IDIyNS4wOSBMIDU4OC4zMyAyMjEuNCBMIDU5MC4xNyAyMTcuNiBMIDU5MiAyMTMuNzEgTCA1OTMuODMgMjA5LjczIEwgNTk1LjY3IDIwNS42NiBMIDU5Ny41IDIwMS41MSBMIDU5OS4zMyAxOTcuMyBMIDYwMS4xNyAxOTMuMDIgTCA2MDMgMTg4LjY5IEwgNjA0LjgzIDE4NC4zMiBMIDYwNi42NyAxNzkuOSBMIDYwOC41IDE3NS40NSBMIDYxMC4zMyAxNzAuOTggTCA2MTIuMTcgMTY2LjQ5IEwgNjE0IDE2MiIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjY0IiB5MT0iNTQuNjYiIHgyPSI2MTQiIHkyPSI1NC42NiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNjQiIHkxPSIyNjkuMzQiIHgyPSI2MTQiIHkyPSIyNjkuMzQiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjY0IiB5MT0iODYuMSIgeDI9IjYxNCIgeTI9Ijg2LjEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNTE4LjY0IiB5PSIzNS42NiIgd2lkdGg9Ijk1LjM2IiBoZWlnaHQ9IjIwLjI1IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjkyIi8+PHRleHQgeD0iNjEwIiB5PSI0OC42NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCI+VW1heCDiiYggMzI1IFY8L3RleHQ+PHJlY3QgeD0iNTExLjM2IiB5PSIyNzQuMzQiIHdpZHRoPSIxMDIuNjQiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSI2MTAiIHk9IjI4Ny4zNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCI+VW1pbiDiiYgg4oiSMzI1IFY8L3RleHQ+PHJlY3QgeD0iMjMwLjUiIHk9IjkxLjEiIHdpZHRoPSIxOTAiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSIyMzQuNSIgeT0iMTA0LjEiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCI+dmFsZXVyIGVmZmljYWNlIFUgPSAyMzAgVjwvdGV4dD48bGluZSB4MT0iMTMyLjc1IiB5MT0iNDAuNjYiIHgyPSIzOTkuNzUiIHkyPSI0MC42NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0MDcuNzUsNDAuNjYgMzk5Ljc1LDM2LjY2IDM5OS43NSw0NC42NiIgZmlsbD0iIzE2MjMyZSIvPjxsaW5lIHgxPSI0MDcuNzUiIHkxPSI0MC42NiIgeDI9IjE0MC43NSIgeTI9IjQwLjY2IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjEzMi43NSw0MC42NiAxNDAuNzUsNDQuNjYgMTQwLjc1LDM2LjY2IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMjcwLjI1IiB5PSIzNC42NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VCA9IDIwIG1zPC90ZXh0Pjwvc3ZnPg==)
*Tension du secteur : sinusoïde de période 20 ms (50 Hz) qui varie entre +325 V et −325 V ; le voltmètre affiche la valeur efficace 230 V.*
<!-- /schema -->

Sur une période, la tension varie entre deux extrêmes symétriques :

- la **valeur maximale** $U_{max}$ (le sommet de la vague) ;
- la **valeur minimale** $U_{min} = -U_{max}$ (le creux, exactement opposé).

Mais un voltmètre en position « alternatif » (~) n'affiche **ni** l'une **ni** l'autre :
il affiche la **valeur efficace** $U$. C'est la tension continue qui produirait le
**même échauffement** dans un appareil. Elle est reliée à $U_{max}$ par :

$$\boxed{U = \frac{U_{max}}{\sqrt{2}}} \qquad\text{d'où}\qquad U_{max} = U \times \sqrt{2}$$

> **Exemple — le secteur français.** Le voltmètre affiche la valeur **efficace**
> $U = 230$ V. La valeur maximale est donc
> $U_{max} = U \times \sqrt{2} = 230 \times \sqrt{2} \approx 325$ V, et la valeur
> minimale $U_{min} = -325$ V. La tension du secteur monte donc en réalité jusqu'à
> environ $325$ V, bien au-dessus des $230$ V annoncés.

> ⚠️ **La valeur affichée est la valeur efficace, pas le maximum.** Quand on dit
> « le secteur, c'est $230$ V », ce $230$ est la valeur **efficace**. Pour obtenir le
> pic, on **multiplie** par $\sqrt{2}$ ; on ne divise pas.

---

## 2. L'intensité du courant électrique

### Définition

L'**intensité** $I$ mesure le **débit de charges électriques** : plus il passe de
charges par seconde dans un fil, plus l'intensité est grande. Elle se mesure avec un
**ampèremètre**, branché **en série**.

| Grandeur | Symbole | Unité |
|---|---|---|
| Intensité | $I$ | ampère (A) |

Sous-multiple très utilisé pour la sécurité : le **milliampère**,
$1\ \text{mA} = 10^{-3}$ A, soit $1$ A $= 1000$ mA.

> **Exemple.** Un sèche-cheveux de forte puissance appelle une intensité d'environ
> $I = 5$ A. Un courant de seulement $I = 0{,}030$ A $= 30$ mA traversant le corps
> est déjà **dangereux** (risque d'asphyxie, mortel s'il se prolonge) : en sécurité électrique, ce sont les **milliampères** qui comptent.

> **Ce qu'il faut comprendre.** Ce n'est pas la tension seule qui blesse : c'est
> **l'intensité qui traverse le corps**. La tension est la cause, l'intensité dans le
> corps est l'effet dangereux.

---

## 3. Les risques électriques pour le corps

### Électrisation et électrocution

Deux mots à ne **jamais** confondre :

| Terme | Sens |
|---|---|
| **Électrisation** | passage d'un courant électrique à travers le corps (avec ou sans blessure) |
| **Électrocution** | électrisation **mortelle** (elle entraîne la mort) |

> **Exemple.** Recevoir une décharge et sursauter, c'est une **électrisation**. Si le
> courant provoque un arrêt du cœur et le décès, on parle d'**électrocution**. Toute
> électrocution est une électrisation ; l'inverse est faux.

### Ce qui fixe l'intensité qui traverse le corps

Le corps se comporte comme une **résistance** $R$. Sous une tension $U$, l'intensité
qui le traverse est d'autant plus grande que cette résistance est **faible**.

La résistance dépend surtout de l'**humidité de la peau** :

- peau **sèche** : résistance élevée → intensité plus faible ;
- peau **mouillée** (sueur, salle de bain, mains humides) : résistance qui **chute**
  → intensité qui **augmente** → danger bien plus grand.

> **Exemple — santé/sécurité domestique.** C'est pourquoi il ne faut **jamais**
> toucher un appareil électrique avec les mains mouillées ni utiliser un sèche-cheveux
> au-dessus d'un lavabo rempli : l'eau fait chuter la résistance du corps.

### Les effets du courant selon son intensité

<!-- schema:effets-courant -->
![Effets du courant alternatif qui traverse le corps selon son intensité, du seuil de perception (1 mA) à la fibrillation du cœur (100 mA).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIzMSIgeT0iNzAiIHdpZHRoPSI5NS42NyIgaGVpZ2h0PSIzMCIgcng9IjAiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIxMjYuNjciIHk9IjcwIiB3aWR0aD0iMTkzLjMzIiBoZWlnaHQ9IjMwIiByeD0iMCIgZmlsbD0iI2ZkZjZkOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxyZWN0IHg9IjMyMCIgeT0iNzAiIHdpZHRoPSI5Mi4yNCIgaGVpZ2h0PSIzMCIgcng9IjAiIGZpbGw9IiNmZGUzYzYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSI0MTIuMjQiIHk9IjcwIiB3aWR0aD0iMTAxLjA5IiBoZWlnaHQ9IjMwIiByeD0iMCIgZmlsbD0iI2Y4ZDBiOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxyZWN0IHg9IjUxMy4zMyIgeT0iNzAiIHdpZHRoPSI5Ni42MSIgaGVpZ2h0PSIzMCIgcng9IjAiIGZpbGw9IiNmMmI0YjQiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cmVjdCB4PSIzMSIgeT0iNzAiIHdpZHRoPSI1NzguOTQiIGhlaWdodD0iMzAiIHJ4PSIwIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48bGluZSB4MT0iMTI2LjY3IiB5MT0iNjIiIHgyPSIxMjYuNjciIHkyPSIxMDgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMjYuNjciIHk9IjU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xIG1BPC90ZXh0Pjx0ZXh0IHg9IjEyNi42NyIgeT0iMTMwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wZXJjZXB0aW9uPC90ZXh0Pjx0ZXh0IHg9IjEyNi42NyIgeT0iMTQ1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4ocGljb3RlbWVudCk8L3RleHQ+PGxpbmUgeDE9IjMyMCIgeTE9IjYyIiB4Mj0iMzIwIiB5Mj0iMTA4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzIwIiB5PSI1NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTAgbUE8L3RleHQ+PHRleHQgeD0iMzIwIiB5PSIxMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnTDqXRhbmlzYXRpb24gOjwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjE0NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+b24gbmUgbMOiY2hlIHBsdXM8L3RleHQ+PGxpbmUgeDE9IjQxMi4yNCIgeTE9IjYyIiB4Mj0iNDEyLjI0IiB5Mj0iMTA4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDEyLjI0IiB5PSI1NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzAgbUE8L3RleHQ+PHRleHQgeD0iNDEyLjI0IiB5PSIxMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFzcGh5eGllPC90ZXh0Pjx0ZXh0IHg9IjQxMi4yNCIgeT0iMTQ1IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wb3NzaWJsZTwvdGV4dD48bGluZSB4MT0iNTEzLjMzIiB5MT0iNjIiIHgyPSI1MTMuMzMiIHkyPSIxMDgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1MTMuMzMiIHk9IjU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMDAgbUE8L3RleHQ+PHRleHQgeD0iNTEzLjMzIiB5PSIxMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmZpYnJpbGxhdGlvbjwvdGV4dD48dGV4dCB4PSI1MTMuMzMiIHk9IjE0NSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZHUgY8WTdXI8L3RleHQ+PHRleHQgeD0iNDEyLjI0IiB5PSIxOTAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMwIG1BIDogc2V1aWwgZGUgY291cHVyZSBkdSBkaXNqb25jdGV1ciBkaWZmw6lyZW50aWVsPC90ZXh0Pjx0ZXh0IHg9IjYxMCIgeT0iMjE0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj5pbnRlbnNpdMOpIHRyYXZlcnNhbnQgbGUgY29ycHMgKMOpY2hlbGxlIGxvZ2FyaXRobWlxdWUpPC90ZXh0Pjwvc3ZnPg==)
*Effets du courant alternatif qui traverse le corps selon son intensité, du seuil de perception (1 mA) à la fibrillation du cœur (100 mA).*
<!-- /schema -->

C'est la valeur de l'intensité qui traverse le corps qui décide de la gravité :

| Intensité (courant alternatif) | Effet sur le corps |
|---|---|
| $\approx 1$ mA | seuil de **perception** (léger picotement) |
| $\approx 10$ mA | **tétanisation** des muscles : la personne ne peut plus lâcher la prise |
| $\approx 30$ mA | atteinte des muscles respiratoires : risque d'**asphyxie** |
| $\geq 100$ mA | **fibrillation** du cœur : arrêt cardiaque, mort probable |

> **Exemple.** À $10$ mA déjà, la main se **contracte** et se referme sur le fil : la
> victime est « collée » au conducteur, ce qui prolonge le passage du courant et
> aggrave tout. La durée du contact compte autant que l'intensité.

> ⚠️ **Le seuil de $30$ mA n'est pas choisi au hasard.** C'est à partir de là que la
> respiration est menacée : c'est exactement le seuil de coupure des dispositifs qui
> protègent les personnes (voir §5).

---

## 4. La prise de courant : phase, neutre, terre

Une prise domestique comporte **trois** bornes, chacune reliée à un fil de couleur
normalisée. Ne jamais les confondre :

| Borne | Fil (couleur) | Rôle |
|---|---|---|
| **Phase** | rouge ou marron | fil **actif** ; c'est lui qui est porté à la tension (dangereux) |
| **Neutre** | bleu | fil de **retour**, référence de tension (proche de $0$ V) |
| **Terre** | vert / jaune | relie les **carcasses métalliques** des appareils au sol |

### À quoi sert la mise à la terre

La borne de **terre** ne sert **pas** à faire fonctionner l'appareil : elle sert à la
**sécurité**. Elle relie la carcasse métallique (par exemple le tambour d'un
lave-linge) directement au sol.

> **Exemple.** Si un fil de phase se dénude à l'intérieur et touche la carcasse
> métallique, celle-ci se retrouve « sous tension ». Sans terre, une personne qui la
> touche s'électrise. **Avec** la terre, le courant de défaut file vers le sol par le
> fil vert/jaune ; il crée une différence détectée par le disjoncteur différentiel,
> qui coupe aussitôt (voir §5). La terre et le différentiel travaillent **ensemble**.

> ⚠️ **Ne jamais neutraliser la broche de terre** d'une prise (avec un adaptateur
> « bricolé », par exemple) : on supprime la protection sans que rien ne le montre
> tant qu'il n'y a pas de défaut.

---

## 5. Les dispositifs de sécurité

Deux familles de dispositifs, qui ne protègent **pas la même chose**.

### Le fusible et le disjoncteur : protéger l'installation

Un **fusible** contient un fil fin qui **fond** dès que l'intensité dépasse une valeur
maximale (le **calibre**, par exemple $16$ A). Un **disjoncteur** joue le même rôle
mais se **réarme** au lieu de fondre.

- Ils coupent le circuit en cas de **surintensité** : court-circuit ou trop
  d'appareils branchés sur la même ligne.
- Une surintensité échauffe les fils : sans coupure, c'est le **risque d'incendie**.
- Ils protègent donc surtout le **matériel et l'habitation**, pas directement les personnes.

> **Exemple.** Tu branches four, bouilloire et grille-pain sur la même multiprise :
> l'intensité dépasse $16$ A, le disjoncteur de la ligne **saute** et coupe avant que
> les fils ne chauffent dangereusement.

### Le disjoncteur différentiel : protéger les personnes

<!-- schema:differentiel -->
![Le disjoncteur différentiel compare le courant qui part par la phase et celui qui revient par le neutre ; une fuite de 30 mA ou plus le fait couper.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjEwIiB5MT0iOTUiIHgyPSI0NDAiIHkyPSI5NSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDUwLDk1IDQ0MCw5MCA0NDAsMTAwIiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMzMwIiB5PSI4OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cGhhc2UgOiBJIHBoYXNlPC90ZXh0PjxsaW5lIHgxPSI0NTAiIHkxPSIxNTUiIHgyPSIyMjAiIHkyPSIxNTUiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIxMCwxNTUgMjIwLDE2MCAyMjAsMTUwIiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMzMwIiB5PSIxNzMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm5ldXRyZSA6IEkgbmV1dHJlPC90ZXh0PjxsaW5lIHgxPSI1NDUiIHkxPSIxODQiIHgyPSI1NDUiIHkyPSIyMDYiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTQ1LDIxNiA1NTAsMjA2IDU0MCwyMDYiIGZpbGw9IiNjMjVlMDAiLz48dGV4dCB4PSI0NDkiIHk9IjIwNCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZnVpdGUgKGTDqWZhdXQsIHBlcnNvbm5lKTwvdGV4dD48cmVjdCB4PSIyMCIgeT0iNzAiIHdpZHRoPSIxOTAiIGhlaWdodD0iMTEwIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjExNSIgeT0iMTAzLjY1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5kaXNqb25jdGV1cjwvdGV4dD48dGV4dCB4PSIxMTUiIHk9IjEyMS4xNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZGlmZsOpcmVudGllbDwvdGV4dD48dGV4dCB4PSIxMTUiIHk9IjEzOC42NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y29tcGFyZSBJIHBoYXNlPC90ZXh0Pjx0ZXh0IHg9IjExNSIgeT0iMTU2LjE1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ldCBJIG5ldXRyZTwvdGV4dD48cmVjdCB4PSI0NTAiIHk9IjcwIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjExMCIgcng9IjgiIGZpbGw9IiNmMWY0ZjciIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI1NDUiIHk9IjExMi40IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hcHBhcmVpbDwvdGV4dD48dGV4dCB4PSI1NDUiIHk9IjEyOS45IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4oY2FyY2Fzc2U8L3RleHQ+PHRleHQgeD0iNTQ1IiB5PSIxNDcuNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bcOpdGFsbGlxdWUpPC90ZXh0PjxyZWN0IHg9IjQ1MCIgeT0iMjIwIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjQ2IiByeD0iOCIgZmlsbD0iI2U4ZjVlZSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjU0NSIgeT0iMjQ3LjkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRlcnJlIChsZSBzb2wpPC90ZXh0Pjx0ZXh0IHg9IjExNSIgeT0iMjIwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5zaSBJIHBoYXNlIOKIkiBJIG5ldXRyZSDiiaUgMzAgbUEgOjwvdGV4dD48dGV4dCB4PSIxMTUiIHk9IjIzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Y291cHVyZSBpbW3DqWRpYXRlPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnNhbnMgZnVpdGUgOiBJIHBoYXNlID0gSSBuZXV0cmU8L3RleHQ+PC9zdmc+)
*Le disjoncteur différentiel compare le courant qui part par la phase et celui qui revient par le neutre ; une fuite de 30 mA ou plus le fait couper.*
<!-- /schema -->

En fonctionnement normal, **tout** le courant qui part par la phase revient par le
neutre : $I_{\text{phase}} = I_{\text{neutre}}$.

Le **disjoncteur différentiel** (DDR) **compare en permanence** ces deux intensités.
Si une partie du courant **fuit** ailleurs — par exemple à travers le corps d'une
personne vers la terre — alors $I_{\text{phase}} \neq I_{\text{neutre}}$. Dès que
cette différence dépasse **$30$ mA**, il **coupe** le circuit en une fraction de seconde.

> **Exemple — protection des personnes.** Une personne touche un fil sous tension : un
> courant s'écoule par son corps vers le sol. La phase « débite » plus que ce que le
> neutre « ramène ». L'écart atteint $30$ mA : le différentiel déclenche **avant** que
> l'intensité dans le corps n'atteigne le seuil mortel. C'est pourquoi le seuil est
> fixé à $30$ mA — le seuil de danger respiratoire du §3.

| Dispositif | Grandeur surveillée | Protège avant tout |
|---|---|---|
| Fusible / disjoncteur | l'**intensité totale** de la ligne (surintensité) | l'**installation** (incendie) |
| Disjoncteur différentiel | l'**écart** phase − neutre (courant de fuite) | les **personnes** (électrisation) |

---

## 6. À retenir absolument

| | |
|---|---|
| Fréquence ↔ période | $f = \dfrac{1}{T}$ (Hz ↔ s) |
| Secteur français | $f = 50$ Hz, $T = 20$ ms, $U = 230$ V (efficace) |
| Valeur efficace | $U = \dfrac{U_{max}}{\sqrt{2}}$, donc $U_{max} = U\sqrt{2} \approx 325$ V |
| Valeurs extrêmes | $U_{min} = -U_{max}$ (sinusoïde symétrique) |
| Intensité | $I$ en ampères (A) ; $1$ mA $= 10^{-3}$ A |
| Danger réel | l'**intensité** qui traverse le corps, pas la tension seule |
| Électrisation / électrocution | passage du courant / **mortel** |
| Seuil critique | $30$ mA (respiration) ; $\geq 100$ mA (fibrillation) |
| Prise | **phase** (actif) · **neutre** (retour) · **terre** (carcasses) |
| Fusible / disjoncteur | surintensité → protège l'**installation** |
| Différentiel $30$ mA | fuite phase ≠ neutre → protège les **personnes** |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre valeur efficace et valeur maximale.** Le secteur « $230$ V » est une
   valeur **efficace** ; le pic vaut $U_{max} = 230\sqrt{2} \approx 325$ V. On
   **multiplie** par $\sqrt{2}$ pour aller de l'efficace au max.
2. **Se tromper d'unité entre A et mA.** Les seuils de danger sont en **milliampères** :
   $30$ mA $= 0{,}030$ A. Écrire « $30$ A » est une faute physique énorme (c'est $1000$
   fois trop).
3. **Confondre électrisation et électrocution.** L'électrocution est **mortelle** ;
   toute électrisation ne l'est pas.
4. **Croire que c'est la tension qui tue.** C'est l'**intensité** traversant le corps
   qui blesse ; elle dépend de la résistance du corps, donc de l'humidité de la peau.
5. **Inverser les rôles des dispositifs.** Le fusible/disjoncteur protège
   l'**installation** contre les surintensités ; le **différentiel** protège les
   **personnes** en détectant une fuite phase ≠ neutre.
6. **Oublier de convertir la période.** $T = 20$ ms $= 0{,}020$ s : garder les
   millisecondes dans $f = 1/T$ donne une fréquence fausse d'un facteur $1000$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 1 « Prévenir et
sécuriser », section « Risques électriques dans l'habitat (1re) ».
Extrait de référence utilisé : docs/programme-st2s-physique-chimie-sante.txt,
lignes 35-39 :
  - Tension alternative sinusoïdale : période, fréquence, valeurs max/min, valeur efficace.
  - Intensité du courant électrique.
  - Risques électriques ; électrisation et électrocution.
  - Prise de courant : phase, neutre, mise à la terre ; sécurité.
Le .txt précise (lignes 12-15) que la répartition 1re/Tale suit la progression usuelle
et reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production). Les deux
  autres chapitres ST2S déjà écrits (securite-chimique-acide-base, oxydoreduction-
  desinfectants) portent niveau: "premiere". Incohérence à trancher pour tout le
  parcours pc-sante-st2s : harmoniser sur une seule valeur avant publication.
- La consigne « valeur efficace » est traitée par U = Umax/√2. Le programme cite la
  notion sans exiger de démonstration : l'expression est donnée comme relation à
  connaître/utiliser. À confirmer que la relation figure bien parmi les capacités
  exigibles (et non seulement en note).
- Les SEUILS d'intensité (1, 10, 30, 100 mA) et les effets associés sont des valeurs
  de référence standard en sécurité électrique. Le libellé exact du programme ne
  chiffre pas forcément ces seuils : vérifier le niveau d'exigence attendu (ordres de
  grandeur vs valeurs précises) et l'accord avec les documents d'accompagnement eduscol.
- Valeur du secteur : U = 230 V, f = 50 Hz, Umax ≈ 325 V (230×√2 = 325,27 V).
- Le rôle exact « courant de défaut → terre → détecté par le différentiel » est
  présenté de façon simplifiée (couplage terre + DDR 30 mA) : à valider par un
  professeur pour la rigueur du mécanisme.
- Couleurs des fils (phase marron/rouge, neutre bleu, terre vert-jaune) : normes NF ;
  vérifier qu'on reste dans l'attendu du programme (santé/sécurité domestique).

Statut : brouillon, non relu.
-->
