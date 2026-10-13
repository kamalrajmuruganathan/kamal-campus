---
id: 1stl-spcl-mesure-incertitudes-labo
titre: "Mesure et incertitudes en laboratoire"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 15
prerequis:
  - Grandeurs, unités du Système international et conversions (Seconde)
  - Chiffres significatifs et notation scientifique (Seconde)
  - Moyenne d'une série de valeurs (Seconde)
statut: brouillon
relu_par: null
---

# Mesure et incertitudes en laboratoire

> Aucune mesure n'est parfaite. Recommence dix fois la même pesée : tu n'obtiens
> jamais exactement le même nombre. Le métier de laboratoire, ce n'est pas de faire
> disparaître ce doute — c'est de le **chiffrer**. Une mesure sérieuse s'écrit toujours
> `valeur ± incertitude`, avec son unité. Ce chapitre t'apprend à calculer cette
> incertitude et à présenter un résultat correctement.

---

## 1. Mesurer, c'est estimer une valeur qu'on ne connaîtra jamais exactement

La grandeur qu'on cherche à mesurer s'appelle le **mesurande** (une masse, un volume,
une concentration…). Sa **valeur vraie** existe, mais elle nous est **inaccessible** :
tout instrument, toute manipulation introduisent un écart.

- L'**erreur de mesure** est la différence (inconnue) entre la valeur mesurée et la
  valeur vraie.
- L'**incertitude** ne dit pas de combien on s'est trompé (on l'ignore) : elle
  **estime l'étendue** dans laquelle la valeur vraie a de bonnes chances de se trouver.

> **L'idée clé.** On ne corrige pas une mesure en supprimant l'erreur : on l'**encadre**.
> Le résultat n'est pas un nombre, c'est un **intervalle**.

---

## 2. Sources d'erreurs et variabilité

Quand on répète une mesure, les valeurs se **dispersent**. Cette variabilité a deux
origines de natures différentes.

| Type d'erreur | Comment elle se manifeste | Exemples au labo |
|---|---|---|
| **Aléatoire** | change de façon **imprévisible** à chaque essai ; les valeurs se dispersent **autour** de la vraie | lecture d'un ménisque, temps de réaction au chronomètre, fluctuations de température |
| **Systématique** | **décale** toujours la mesure dans le **même sens** | balance mal tarée, pipette mal étalonnée, verrerie mal lue toujours du même côté |

> **Exemple.** Une balance qui affiche $0{,}05\ \mathrm{g}$ à vide ajoute $0{,}05\ \mathrm{g}$
> à **chaque** pesée : c'est une erreur **systématique**. Le tremblement de la main qui
> arrête un chronomètre trop tôt ou trop tard, tantôt dans un sens tantôt dans l'autre,
> est une erreur **aléatoire**.

> ⚠️ **Répéter la mesure** réduit l'effet des erreurs **aléatoires** (elles se
> compensent en moyenne), mais **ne corrige jamais** une erreur **systématique** : on
> aurait beau moyenner mille pesées, la balance mal tarée reste fausse de $0{,}05\ \mathrm{g}$.

---

## 3. Justesse et fidélité

<!-- schema:cibles -->
![L'image de la cible : la justesse dit si les tirs sont centrés en moyenne, la fidélité s'ils sont groupés.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjYyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNjIiIGZpbGw9IiNmZmZmZmYiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjEwMCIgcj0iNjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMTAwIiByPSI0NiIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGNpcmNsZSBjeD0iODAiIGN5PSIxMDAiIHI9IjMwIiBmaWxsPSIjZGZlOWY4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjEwMCIgcj0iMTQiIGZpbGw9IiNjNmQ4ZjMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMTAwIiByPSIyLjUiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSI3Ni40IiBjeT0iMTAxLjM5IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNzcuMDgiIGN5PSI5OC45IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNzYuMjEiIGN5PSI5OC44NyIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9Ijc5LjIxIiBjeT0iMTAyLjI0IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iODIuODEiIGN5PSI5Ni4yOCIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9Ijg5LjEzIiBjeT0iMTAzLjgzIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNzQuMDQiIGN5PSIxMDQuNTIiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSI4MS40OSIgY3k9IjkwLjIyIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iODMuNjMiIGN5PSIxMDMuNzYiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI4MCIgeT0iMTkwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5qdXN0ZSBldCBmaWTDqGxlPC90ZXh0PjxjaXJjbGUgY3g9IjI0MCIgY3k9IjEwMCIgcj0iNjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjI0MCIgY3k9IjEwMCIgcj0iNDYiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjI0MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiNkZmU5ZjgiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjI0MCIgY3k9IjEwMCIgcj0iMTQiIGZpbGw9IiNjNmQ4ZjMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjI0MCIgY3k9IjEwMCIgcj0iMi41IiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iMjY0LjI3IiBjeT0iNzEuNjIiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSIyNjguMjgiIGN5PSI5MS4xMyIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjI2Ni45NSIgY3k9IjgyLjc2IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iMjY3Ljk4IiBjeT0iODEuNDMiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSIyNjkuNTYiIGN5PSI4NS4zOCIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjI2NC4xMiIgY3k9IjcyLjAyIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iMjYwLjYiIGN5PSI4MC44MiIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjI2Ny42OSIgY3k9Ijc2LjY1IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iMjY0LjU1IiBjeT0iNzguMTkiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSIyNDAiIHk9IjE5MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+Zmlkw6hsZSBtYWlzPC90ZXh0Pjx0ZXh0IHg9IjI0MCIgeT0iMjA2LjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5wYXMganVzdGU8L3RleHQ+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMTAwIiByPSI2MiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMTAwIiByPSI0NiIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMTAwIiByPSIzMCIgZmlsbD0iI2RmZTlmOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMTAwIiByPSIxNCIgZmlsbD0iI2M2ZDhmMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMTAwIiByPSIyLjUiIGZpbGw9IiMxNjIzMmUiLz48Y2lyY2xlIGN4PSIzNjEuNTYiIGN5PSIxMTYuNDEiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSI0MjcuNDYiIGN5PSI2Ny43MSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjM4NS40MyIgY3k9Ijg3LjExIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNDAyLjczIiBjeT0iNzkuNjQiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSI0MTkuOSIgY3k9IjEwMS44MyIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjQwMi4xNiIgY3k9IjEyMC42MSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjM4MC45OSIgY3k9IjEwOS45OCIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjQwOS40OCIgY3k9IjgxLjczIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNDEwLjI3IiBjeT0iMTM1IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iNDAwIiB5PSIxOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmp1c3RlIG1haXM8L3RleHQ+PHRleHQgeD0iNDAwIiB5PSIyMDYuMjUiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnBhcyBmaWTDqGxlPC90ZXh0PjxjaXJjbGUgY3g9IjU2MCIgY3k9IjEwMCIgcj0iNjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjU2MCIgY3k9IjEwMCIgcj0iNDYiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjU2MCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiNkZmU5ZjgiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjU2MCIgY3k9IjEwMCIgcj0iMTQiIGZpbGw9IiNjNmQ4ZjMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIvPjxjaXJjbGUgY3g9IjU2MCIgY3k9IjEwMCIgcj0iMi41IiBmaWxsPSIjMTYyMzJlIi8+PGNpcmNsZSBjeD0iNTc1LjkyIiBjeT0iMTMxLjE3IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNTUwLjYzIiBjeT0iMTI5LjMiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSI1NzAuNDEiIGN5PSIxNDEuODQiIHI9IjQiIGZpbGw9IiNjMDJhMmEiLz48Y2lyY2xlIGN4PSI1NzcuMTciIGN5PSI4OC4yMyIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjxjaXJjbGUgY3g9IjU4OC4xNSIgY3k9IjkzLjgyIiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNTcyLjI4IiBjeT0iMTE1LjQ3IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNjA1Ljk5IiBjeT0iMTQyLjg5IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNjIwLjI3IiBjeT0iMTI4LjM4IiByPSI0IiBmaWxsPSIjYzAyYTJhIi8+PGNpcmNsZSBjeD0iNTk1LjE5IiBjeT0iOTAuOSIgcj0iNCIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjU2MCIgeT0iMTkwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5uaSBqdXN0ZTwvdGV4dD48dGV4dCB4PSI1NjAiIHk9IjIwNi4yNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bmkgZmlkw6hsZTwvdGV4dD48dGV4dCB4PSIzMjAiIHk9IjI1MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y2VudHJlIGRlIGxhIGNpYmxlID0gdmFsZXVyIHZyYWllIDsgcG9pbnRzIHJvdWdlcyA9IG1lc3VyZXMgcsOpcMOpdMOpZXM8L3RleHQ+PC9zdmc+)
*L'image de la cible : la justesse dit si les tirs sont centrés en moyenne, la fidélité s'ils sont groupés.*
<!-- /schema -->

Ces deux mots décrivent deux qualités **distinctes** d'un instrument ou d'un protocole.
L'image des tirs sur une cible est la plus parlante.

| Qualité | Ce qu'elle mesure | Défaut associé |
|---|---|---|
| **Justesse** | la moyenne des mesures est-elle **proche de la valeur vraie** ? | une erreur **systématique** dégrade la justesse |
| **Fidélité** | les mesures répétées sont-elles **peu dispersées** entre elles ? | une erreur **aléatoire** dégrade la fidélité |

> **La cible.** *Juste et fidèle* : les tirs sont **groupés au centre**. *Fidèle mais
> pas juste* : tirs **groupés**, mais **tous à côté** du centre (erreur systématique).
> *Juste mais pas fidèle* : tirs **dispersés**, mais centrés **en moyenne** sur la cible.

> ⚠️ Un instrument peut être **très fidèle** (résultats très répétables) et pourtant
> **faux** : la fidélité ne garantit pas la justesse. Ne confonds pas « je retrouve
> toujours le même nombre » avec « ce nombre est le bon ».

---

## 4. L'incertitude-type : la grandeur qui chiffre le doute

L'**incertitude-type**, notée $u(x)$, est le nombre qui **quantifie la dispersion**
d'une mesure. Elle a **la même unité** que la grandeur mesurée. On l'évalue de deux
façons selon les informations dont on dispose.

- **Type A** : par une **analyse statistique** d'une série de mesures répétées.
- **Type B** : par toute **autre information** (notice de l'appareil, résolution,
  tolérance de la verrerie) quand on ne dispose que d'**une seule** mesure.

---

## 5. Incertitude-type de type A — la dispersion d'une série

<!-- schema:serie-type-a -->
![Les cinq durées de l'exemple placées sur un axe : leur moyenne 20,12 s, et la bande moyenne ± u avec u ≈ 0,11 s.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyNzEuMjgiIHk9IjgwIiB3aWR0aD0iMTE5Ljg0IiBoZWlnaHQ9IjYwIiByeD0iMCIgZmlsbD0iI2UyZjJlOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS4yIi8+PGxpbmUgeDE9IjMwIiB5MT0iMTIwIiB4Mj0iNjExIiB5Mj0iMTIwIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYyMCwxMjAgNjExLDExNS41IDYxMSwxMjQuNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI0MCIgeTE9IjExNiIgeDI9IjQwIiB5Mj0iMTI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDAiIHk9IjE0MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTksNjwvdGV4dD48bGluZSB4MT0iOTYiIHkxPSIxMTYiIHgyPSI5NiIgeTI9IjEyNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijk2IiB5PSIxNDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE5LDc8L3RleHQ+PGxpbmUgeDE9IjE1MiIgeTE9IjExNiIgeDI9IjE1MiIgeTI9IjEyNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE1MiIgeT0iMTQyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xOSw4PC90ZXh0PjxsaW5lIHgxPSIyMDgiIHkxPSIxMTYiIHgyPSIyMDgiIHkyPSIxMjQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyMDgiIHk9IjE0MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTksOTwvdGV4dD48bGluZSB4MT0iMjY0IiB5MT0iMTE2IiB4Mj0iMjY0IiB5Mj0iMTI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjY0IiB5PSIxNDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwLDA8L3RleHQ+PGxpbmUgeDE9IjMyMCIgeTE9IjExNiIgeDI9IjMyMCIgeTI9IjEyNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyMCIgeT0iMTQyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMCwxPC90ZXh0PjxsaW5lIHgxPSIzNzYiIHkxPSIxMTYiIHgyPSIzNzYiIHkyPSIxMjQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzYiIHk9IjE0MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjAsMjwvdGV4dD48bGluZSB4MT0iNDMyIiB5MT0iMTE2IiB4Mj0iNDMyIiB5Mj0iMTI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDMyIiB5PSIxNDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwLDM8L3RleHQ+PGxpbmUgeDE9IjQ4OCIgeTE9IjExNiIgeDI9IjQ4OCIgeTI9IjEyNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4OCIgeT0iMTQyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMCw0PC90ZXh0PjxsaW5lIHgxPSI1NDQiIHkxPSIxMTYiIHgyPSI1NDQiIHkyPSIxMjQiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NDQiIHk9IjE0MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjAsNTwvdGV4dD48bGluZSB4MT0iNjAwIiB5MT0iMTE2IiB4Mj0iNjAwIiB5Mj0iMTI0IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjAwIiB5PSIxNDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwLDY8L3RleHQ+PHRleHQgeD0iNjI2IiB5PSIxNDIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJzdGFydCI+czwvdGV4dD48Y2lyY2xlIGN4PSIzMjAiIGN5PSIxMDYiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSI0ODgiIGN5PSIxMDYiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIxNTIiIGN5PSIxMDYiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSI0MzIiIGN5PSIxMDYiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48Y2lyY2xlIGN4PSIyNjQiIGN5PSIxMDYiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48bGluZSB4MT0iMzMxLjIiIHkxPSI2OCIgeDI9IjMzMS4yIiB5Mj0iMTI4IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMzEuMiIgeT0iNjAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm1veWVubmUgPSAyMCwxMiBzPC90ZXh0Pjx0ZXh0IHg9IjMzMS4yIiB5PSIxNzIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmJhbmRlIHZlcnRlIDogbW95ZW5uZSDCsSB1LCBhdmVjIHUgPSBzIC8g4oiabiDiiYggMCwxMSBzPC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSIzMCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0Ij5wb2ludHMgYmxldXMgOiBsZXMgbWVzdXJlczwvdGV4dD48L3N2Zz4=)
*Les cinq durées de l'exemple placées sur un axe : leur moyenne 20,12 s, et la bande moyenne ± u avec u ≈ 0,11 s.*
<!-- /schema -->

On répète la mesure $n$ fois et on obtient les valeurs $x_1, x_2, \dots, x_n$.

**Étape 1 — la moyenne**, meilleure estimation du mesurande :
$$\boxed{\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}}$$

**Étape 2 — l'écart-type expérimental** $s$, qui mesure la dispersion des valeurs
autour de la moyenne (touche $\sigma_{n-1}$ ou $s_x$ de la calculatrice) :
$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}\left(x_i - \bar{x}\right)^2}$$

**Étape 3 — l'incertitude-type de type A** sur la moyenne :
$$\boxed{u(\bar{x}) = \frac{s}{\sqrt{n}}}$$

> **Exemple.** On mesure $5$ fois une durée (en $\mathrm{s}$) :
> $20{,}1$ ; $20{,}4$ ; $19{,}8$ ; $20{,}3$ ; $20{,}0$.
> Moyenne : $\bar{x} = \dfrac{100{,}6}{5} = 20{,}12\ \mathrm{s}$.
> Écart-type (calculatrice) : $s = 0{,}24\ \mathrm{s}$.
> Incertitude-type : $u(\bar{x}) = \dfrac{0{,}24}{\sqrt{5}} = 0{,}11\ \mathrm{s}$.
> On écrira $t = (20{,}1 \pm 0{,}1)\ \mathrm{s}$ (voir §8-9 pour l'arrondi).

> ⚠️ **Divise par $\sqrt{n}$, pas par $n$**, et prends bien l'écart-type en $n-1$
> (touche $\sigma_{n-1}$), pas celui en $n$. Plus on fait de mesures, plus $u(\bar{x})$
> **diminue** : mesurer davantage resserre l'intervalle autour de la moyenne.

---

## 6. Incertitude-type de type B — une seule mesure

Quand on ne dispose que d'**une** mesure, on estime l'incertitude à partir des
**caractéristiques de l'instrument**. On modélise le doute par une répartition
uniforme, ce qui donne un facteur $\sqrt{3}$.

| Origine de l'incertitude | Formule | Exemple |
|---|---|---|
| **Résolution / graduation** (plus petite division lisible, ou dernier digit affiché) | $u = \dfrac{\text{graduation}}{\sqrt{3}}$ | burette au $1/10$ de mL |
| **Tolérance** annoncée par le fabricant (verrerie jaugée, appareil de classe) | $u = \dfrac{\text{tolérance}}{\sqrt{3}}$ | pipette jaugée $\pm 0{,}03\ \mathrm{mL}$ |

$$\boxed{u = \frac{\text{graduation}}{\sqrt{3}} \qquad\text{ou}\qquad u = \frac{\text{tolérance}}{\sqrt{3}}}$$

> **Exemple 1 — résolution.** Une burette est graduée tous les $0{,}1\ \mathrm{mL}$.
> $u = \dfrac{0{,}1}{\sqrt{3}} = 0{,}058 \approx 0{,}06\ \mathrm{mL}$. Une lecture de
> $14{,}20\ \mathrm{mL}$ s'écrit $V = (14{,}20 \pm 0{,}06)\ \mathrm{mL}$.

> **Exemple 2 — tolérance.** Une pipette jaugée porte l'indication $20{,}00\ \mathrm{mL}
> \pm 0{,}03\ \mathrm{mL}$. $u = \dfrac{0{,}03}{\sqrt{3}} = 0{,}017 \approx 0{,}02\ \mathrm{mL}$,
> d'où $V = (20{,}00 \pm 0{,}02)\ \mathrm{mL}$.

> ⚠️ La **tolérance** est déjà une demi-largeur ($\pm$) : on divise directement par
> $\sqrt{3}$, **sans** la couper en deux. Et attention aux unités : une graduation lue
> en $\mathrm{mL}$ donne une incertitude en $\mathrm{mL}$.

---

## 7. Incertitude-type composée — quand le résultat vient d'un calcul

Le plus souvent, la grandeur cherchée se **calcule** à partir de plusieurs mesures, qui
portent chacune leur incertitude. On les **combine** — jamais en les additionnant
simplement, mais **en quadrature** (racine de la somme des carrés).

**Cas d'une somme ou d'une différence** $y = a + b$ ou $y = a - b$ :
$$\boxed{u(y) = \sqrt{u(a)^2 + u(b)^2}}$$

**Cas d'un produit ou d'un quotient** $y = \dfrac{a \times b}{c}$ : ce sont les
incertitudes **relatives** qui se combinent :
$$\boxed{\frac{u(y)}{|y|} = \sqrt{\left(\frac{u(a)}{a}\right)^2 + \left(\frac{u(b)}{b}\right)^2 + \left(\frac{u(c)}{c}\right)^2}}$$

> **Exemple — quotient.** Masse volumique $\rho = \dfrac{m}{V}$ avec
> $m = (24{,}6 \pm 0{,}1)\ \mathrm{g}$ et $V = (20{,}0 \pm 0{,}5)\ \mathrm{mL}$.
> Valeur : $\rho = \dfrac{24{,}6}{20{,}0} = 1{,}23\ \mathrm{g\cdot mL^{-1}}$.
> Incertitudes relatives : $\dfrac{u(m)}{m} = \dfrac{0{,}1}{24{,}6} = 0{,}0041$ et
> $\dfrac{u(V)}{V} = \dfrac{0{,}5}{20{,}0} = 0{,}025$.
> $\dfrac{u(\rho)}{\rho} = \sqrt{0{,}0041^2 + 0{,}025^2} = 0{,}025$, donc
> $u(\rho) = 0{,}025 \times 1{,}23 = 0{,}03\ \mathrm{g\cdot mL^{-1}}$.
> Résultat : $\rho = (1{,}23 \pm 0{,}03)\ \mathrm{g\cdot mL^{-1}}$.

> **Exemple — somme.** $L = L_1 + L_2$ avec $L_1 = (12{,}3 \pm 0{,}1)\ \mathrm{cm}$ et
> $L_2 = (8{,}5 \pm 0{,}1)\ \mathrm{cm}$ : $L = 20{,}8\ \mathrm{cm}$ et
> $u(L) = \sqrt{0{,}1^2 + 0{,}1^2} = 0{,}14 \approx 0{,}2\ \mathrm{cm}$.

> ⚠️ **Sommes/différences** → on combine les incertitudes **absolues** ($u$).
> **Produits/quotients** → on combine les incertitudes **relatives** ($u/x$). Confondre
> les deux est l'erreur la plus fréquente du chapitre. Et $\sqrt{u_a^2 + u_b^2}$ est
> **toujours plus petit** que $u_a + u_b$ : ne fais pas la somme brute.

---

## 8. Chiffres significatifs

Les **chiffres significatifs** (c.s.) d'un résultat sont les chiffres réellement porteurs
d'information, à partir du premier chiffre non nul.

| Écriture | Nombre de c.s. | Remarque |
|---|---|---|
| $2{,}45\ \mathrm{g}$ | $3$ | tous comptent |
| $0{,}0130\ \mathrm{mol}$ | $3$ | les zéros de tête ne comptent pas ; le zéro final, si |
| $1{,}20 \times 10^{2}\ \mathrm{mL}$ | $3$ | la notation scientifique lève l'ambiguïté |

**Règle de calcul.** Le résultat d'un **produit ou d'un quotient** ne peut pas avoir
plus de chiffres significatifs que la donnée qui en a le **moins**. Pour une **somme ou
différence**, on aligne sur le **dernier rang décimal** commun.

> **Exemple.** $\dfrac{12{,}0}{7}$ : la donnée $12{,}0$ a $3$ c.s., $7$ en a $1$… mais
> $7$ est ici un nombre entier exact (un coefficient, un nombre de mesures) : il ne
> limite pas. Reste $3$ c.s. : $\dfrac{12{,}0}{7} = 1{,}71$.

> ⚠️ Une calculatrice affiche $10$ chiffres : $99\ \%$ n'ont **aucun sens physique**.
> Écrire $\rho = 1{,}230000\ \mathrm{g\cdot mL^{-1}}$ prétend une précision qu'on n'a pas.

---

## 9. Exprimer le résultat : valeur, incertitude, unité

<!-- schema:intervalle-resultat -->
![Lecture du résultat m = (24,62 ± 0,04) g : la valeur vraie est très probablement comprise entre 24,58 g et 24,66 g.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMTUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIyMDIiIHk9IjY0IiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjMyIiByeD0iMCIgZmlsbD0iI2UyZjJlOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjMwIiB5MT0iODAiIHgyPSI1OTEiIHkyPSI4MCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDAsODAgNTkxLDc1LjUgNTkxLDg0LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iOTQiIHkxPSI3NSIgeDI9Ijk0IiB5Mj0iODUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjAyIiB5MT0iNzUiIHgyPSIyMDIiIHkyPSI4NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMTAiIHkxPSI3NSIgeDI9IjMxMCIgeTI9Ijg1IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQxOCIgeTE9Ijc1IiB4Mj0iNDE4IiB5Mj0iODUiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTI2IiB5MT0iNzUiIHgyPSI1MjYiIHkyPSI4NSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIwMiIgeT0iMTE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4yNCw1ODwvdGV4dD48dGV4dCB4PSI0MTgiIHk9IjExNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjQsNjY8L3RleHQ+PGNpcmNsZSBjeD0iMzEwIiBjeT0iODAiIHI9IjYiIGZpbGw9IiMxZjZmZWIiLz48dGV4dCB4PSIzMTAiIHk9IjExNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjQsNjI8L3RleHQ+PHRleHQgeD0iMzEwIiB5PSIzMiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bSA9ICgyNCw2MiDCsSAwLDA0KSBnIDogbGEgdmFsZXVyIHZyYWllIGVzdCB0csOocyBwcm9iYWJsZW1lbnQgZGFucyBsYSBiYW5kZSB2ZXJ0ZTwvdGV4dD48dGV4dCB4PSI1OTYiIHk9IjExNiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZzwvdGV4dD48L3N2Zz4=)
*Lecture du résultat m = (24,62 ± 0,04) g : la valeur vraie est très probablement comprise entre 24,58 g et 24,66 g.*
<!-- /schema -->

C'est l'aboutissement de tout le chapitre. Trois règles, dans l'ordre.

1. **Arrondir l'incertitude** à **1 chiffre significatif** (2 c.s. tolérés si le premier
   est un $1$), **en arrondissant vers le haut** (par excès) pour ne pas sous-estimer le
   doute.
2. **Arrondir la valeur** au **même rang décimal** que l'incertitude — ni plus, ni moins.
3. **Écrire** le résultat sous la forme, avec l'unité **hors parenthèses** :
$$\boxed{x = (\,\bar{x} \pm u(x)\,)\ \text{unité}}$$

> **Exemple.** Un calcul donne $\bar{x} = 24{,}6172\ \mathrm{g}$ et
> $u(x) = 0{,}0312\ \mathrm{g}$. On arrondit d'abord $u \approx 0{,}04\ \mathrm{g}$
> ($1$ c.s., par excès), puis la valeur au **centième** : $\bar{x} \approx 24{,}62\ \mathrm{g}$.
> Résultat : $m = (24{,}62 \pm 0{,}04)\ \mathrm{g}$.

> **Contre-exemple à ne pas écrire.** $m = (24{,}6172 \pm 0{,}04)\ \mathrm{g}$ : la valeur
> a des chiffres au-delà du rang de l'incertitude, qui ne veulent rien dire. Ou pire,
> $m = (24{,}62 \pm 0{,}0312)\ \mathrm{g}$ : incertitude non arrondie.

> **Lecture.** $m = (24{,}62 \pm 0{,}04)\ \mathrm{g}$ signifie : la valeur vraie est très
> probablement comprise entre $24{,}58$ et $24{,}66\ \mathrm{g}$.

---

## 10. À retenir absolument

| | |
|---|---|
| Mesurande / valeur vraie | la grandeur cherchée ; sa valeur exacte reste inaccessible |
| Erreur aléatoire | imprévisible, se disperse ; réduite en **répétant** |
| Erreur systématique | décalage constant ; **non** corrigée par la répétition |
| Justesse | moyenne proche de la valeur vraie |
| Fidélité | mesures peu dispersées entre elles |
| Type A | $\bar{x} = \dfrac{\sum x_i}{n}$ ; $u(\bar{x}) = \dfrac{s}{\sqrt{n}}$ |
| Type B | $u = \dfrac{\text{graduation}}{\sqrt{3}}$ ou $\dfrac{\text{tolérance}}{\sqrt{3}}$ |
| Composée (somme) | $u(y) = \sqrt{u(a)^2 + u(b)^2}$ |
| Composée (produit/quotient) | $\dfrac{u(y)}{|y|} = \sqrt{\left(\dfrac{u(a)}{a}\right)^2 + \left(\dfrac{u(b)}{b}\right)^2}$ |
| Résultat final | $x = (\bar{x} \pm u)\ \text{unité}$ ; $u$ à $1$ c.s. par excès ; $\bar{x}$ au même rang |

---

## 11. Les erreurs qui coûtent des points

1. **Oublier l'unité** de l'incertitude, ou la mettre à l'intérieur des parenthèses au
   lieu de la placer une seule fois **après** : on écrit $(20{,}00 \pm 0{,}02)\ \mathrm{mL}$.
2. **Diviser l'écart-type par $n$** au lieu de $\sqrt{n}$ dans une incertitude de type A —
   ou utiliser $\sigma_n$ au lieu de $\sigma_{n-1}$.
3. **Additionner brutalement** les incertitudes ($u_a + u_b$) au lieu de les combiner
   **en quadrature** ($\sqrt{u_a^2 + u_b^2}$).
4. **Combiner des incertitudes absolues dans un produit/quotient** : dans ce cas ce sont
   les incertitudes **relatives** $u/x$ qui s'ajoutent (en quadrature), jamais les $u$.
5. **Garder tous les chiffres de la calculatrice** : l'incertitude s'arrondit à $1$
   chiffre significatif, la valeur au **même rang** décimal.
6. **Croire qu'un instrument fidèle est juste** : des mesures bien groupées peuvent être
   toutes fausses (erreur systématique).
7. **Confondre les unités de graduation** : une burette au $0{,}1\ \mathrm{mL}$ donne
   $u$ en $\mathrm{mL}$, pas en $\mathrm{L}$ ni en gouttes.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SCIENCES PHYSIQUES ET CHIMIQUES EN LABORATOIRE (SPCL),
enseignement de spécialité de la série STL, classe de première.
Fichier : docs/programme-stl-spcl.txt, section « Mesure et incertitudes en laboratoire
(1re) » :
  - Sources d'erreurs et variabilité ; justesse et fidélité.
  - Évaluation des incertitudes-types (type A statistique, type B).
  - Expression d'un résultat de mesure avec son incertitude et ses chiffres significatifs.
Le fichier renvoie aux PDF officiels education.gouv.fr (Première SPCL). Le fichier source
cite le BO spécial n°8 du 25 juillet 2019 ET le BO spécial n°1 du 22 janvier 2019.
Extraits via WebFetch, À CONFRONTER AUX PDF OFFICIELS avant publication.

Champ « programme » de l'en-tête : renseigné à l'identique de la consigne de production
(« BO du 22 janvier 2019 — SPCL, série STL, classe de première »).
⚠️ À FAIRE VÉRIFIER AU RELECTEUR : l'intitulé exact du BO à afficher (22 janvier 2019 vs
25 juillet 2019) — même remarque que pour le chapitre « syntheses-extraction-purification ».

POINTS À CONFRONTER AU RELECTEUR / CONVENTIONS DE MÉTROLOGIE :
- CONVENTION TYPE B (POINT LE PLUS SENSIBLE). La consigne de production impose
  explicitement les formules u = graduation/√3 et u = tolérance/√3, retenues telles
  quelles dans la fiche. ATTENTION : les conventions varient selon les manuels/référentiels.
  Pour une RÉSOLUTION (demi-largeur = graduation/2), la loi uniforme rigoureuse donne
  plutôt u = graduation/(2√3) = graduation/√12. La formule u = graduation/√3 retenue ici
  suppose que « graduation » désigne la demi-largeur de l'intervalle de doute (loi
  rectangulaire de demi-largeur = graduation). À FAIRE TRANCHER par le relecteur selon le
  référentiel STL retenu par l'établissement / le PDF officiel. Les exemples chiffrés
  (burette 0,1 mL → u ≈ 0,06 mL) suivent la convention de la consigne.
- Pour la TOLÉRANCE (verrerie jaugée ± t), u = t/√3 fait l'hypothèse d'une loi uniforme de
  demi-largeur t : convention standard et cohérente avec la consigne.
- TYPE A : u(x̄) = s/√n avec s = écart-type expérimental (σ_{n-1}). Convention GUM/lycée
  standard. L'exemple (5 mesures, s ≈ 0,24 s, u ≈ 0,11 s) a été recalculé à la main :
  moyenne 20,12 s ; Σ(écarts²) = 0,228 ; s = √(0,228/4) = 0,239 s ; u = 0,239/√5 = 0,107 s.
- INCERTITUDE COMPOSÉE : formules de propagation en quadrature (somme → absolues ;
  produit/quotient → relatives). Présentées « formule fournie » conformément à la
  consigne ; au niveau première STL elles sont données, non démontrées.
- Facteur d'élargissement / intervalle de confiance : volontairement NON abordé (hors
  programme de première ; « valeur ± u » = incertitude-type, k=1). La phrase de lecture au
  §9 (« très probablement entre… ») reste qualitative pour cette raison. À valider.
- Arrondi de l'incertitude à 1 c.s. PAR EXCÈS et valeur au même rang : convention
  pédagogique répandue ; certains référentiels tolèrent 2 c.s. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
