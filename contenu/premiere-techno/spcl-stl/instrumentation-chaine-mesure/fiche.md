---
id: 1stl-spcl-instrumentation-chaine-mesure
titre: "Instrumentation : la chaîne de mesure"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 17
prerequis:
  - Grandeurs, unités du Système international et conversions (Seconde)
  - Chiffres significatifs et puissances de 10 (Seconde)
  - Justesse et fidélité (Mesure et incertitudes en laboratoire, SPCL 1re)
  - Codage binaire, bit et octet (Appareil photo et image numérique, SPCL 1re)
statut: brouillon
relu_par: null
---

# Instrumentation : la chaîne de mesure

> Au laboratoire, tu ne « lis » jamais directement une température ou une pression. Un
> **capteur** transforme cette grandeur physique en un signal électrique, une électronique le
> met en forme, un **convertisseur** le transforme en nombres, et un ordinateur l'affiche. Ce
> trajet, c'est la **chaîne de mesure**. La comprendre, c'est savoir ce que vaut vraiment le
> chiffre affiché — et où se cachent ses limites.

---

## 1. Les caractéristiques d'un instrument de mesure

Avant d'utiliser un appareil, on regarde sa **notice** : elle donne les grandeurs qui décrivent
sa qualité. Ce sont les mêmes pour tous les instruments, du thermomètre au multimètre.

### L'étendue de mesure

L'**étendue de mesure** (EM) est l'intervalle entre la plus petite et la plus grande valeur que
l'instrument peut mesurer.

$$\boxed{\text{EM} = V_{\max} - V_{\min}}$$

> **Exemple.** Un thermomètre gradué de $-10\ \text{°C}$ à $+110\ \text{°C}$ a une étendue de
> mesure $\text{EM} = 110 - (-10) = 120\ \text{°C}$. Hors de cet intervalle, il ne mesure plus
> rien de fiable.

### La résolution

La **résolution** est la **plus petite variation** de la grandeur que l'instrument est capable
de **détecter et d'afficher**. Sur un appareil numérique, c'est le pas du dernier chiffre.

> **Exemple.** Une balance qui affiche $12{,}34\ \text{g}$ a une résolution de $0{,}01\ \text{g}$ :
> elle ne distingue pas $12{,}344\ \text{g}$ de $12{,}341\ \text{g}$.

> ⚠️ Ne confonds pas **résolution** et **précision**. Une balance peut afficher au $0{,}01\ \text{g}$
> près (bonne résolution) tout en se trompant de $0{,}5\ \text{g}$ (mauvaise justesse). Afficher
> beaucoup de chiffres ne prouve pas qu'ils sont justes.

### La sensibilité

La **sensibilité** relie la variation de la grandeur de **sortie** à la variation de la grandeur
d'**entrée** :

$$\boxed{S = \frac{\Delta(\text{sortie})}{\Delta(\text{entrée})}}$$

Elle a une **unité**, qui dépend des deux grandeurs (par exemple des mV·°C⁻¹ pour un capteur de
température qui délivre une tension). Plus $S$ est grande, plus l'instrument réagit fortement à
une petite variation.

> **Exemple.** Un capteur dont la tension augmente de $20\ \text{mV}$ quand la température monte
> de $10\ \text{°C}$ a une sensibilité $S = \dfrac{20}{10} = 2\ \text{mV·°C}^{-1}$.

### Le temps de réponse

Le **temps de réponse** est la durée que met l'instrument pour donner une valeur stable après
un changement brusque de la grandeur. Un capteur « lent » ne suit pas les variations rapides.

> **Exemple.** Un thermomètre plongé dans l'eau chaude n'affiche pas $80\ \text{°C}$
> instantanément : il faut quelques secondes pour que sa mesure se stabilise. Ce délai est son
> temps de réponse.

### La précision

La **précision** décrit l'écart entre la valeur mesurée et la valeur vraie. Elle rassemble deux
idées vues au chapitre incertitudes :

| Terme | Ce qu'il décrit |
|---|---|
| **Justesse** | l'absence d'erreur systématique (la mesure « vise » la bonne valeur) |
| **Fidélité** | la reproductibilité (les mesures répétées sont resserrées) |

Un instrument **précis** est à la fois **juste** et **fidèle**.

---

## 2. La chaîne de mesure

<!-- schema:chaine-mesure -->
![Les maillons de la chaîne de mesure : le capteur transforme la grandeur physique en signal électrique, le conditionneur l'adapte, le CAN le code en nombre.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTIwIiB5MT0iOTAiIHgyPSIxMzYiIHkyPSI5MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTQ2LDkwIDEzNiw4NSAxMzYsOTUiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMjU0IiB5MT0iOTAiIHgyPSIyODYiIHkyPSI5MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjk2LDkwIDI4Niw4NSAyODYsOTUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIyNzUiIHk9IjQyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zaWduYWw8L3RleHQ+PHRleHQgeD0iMjc1IiB5PSI1NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+w6lsZWN0cmlxdWU8L3RleHQ+PGxpbmUgeDE9IjQyNCIgeTE9IjkwIiB4Mj0iNDQ2IiB5Mj0iOTAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ1Niw5MCA0NDYsODUgNDQ2LDk1IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iNDQwIiB5PSI0MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dGVuc2lvbjwvdGV4dD48dGV4dCB4PSI0NDAiIHk9IjU3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hZGFwdMOpZTwvdGV4dD48bGluZSB4MT0iNTM0IiB5MT0iOTAiIHgyPSI1NDYiIHkyPSI5MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTU2LDkwIDU0Niw4NSA1NDYsOTUiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSI1NDUiIHk9IjUwIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ub21icmU8L3RleHQ+PGVsbGlwc2UgY3g9IjYxIiBjeT0iOTAiIHJ4PSI1NSIgcnk9IjMwIiBmaWxsPSIjZjFmNGY3IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI2MSIgeT0iODYuMTUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmdyYW5kZXVyPC90ZXh0Pjx0ZXh0IHg9IjYxIiB5PSIxMDMuNjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBoeXNpcXVlPC90ZXh0PjxyZWN0IHg9IjE1MCIgeT0iNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMjAwIiB5PSI5NC45IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5jYXB0ZXVyPC90ZXh0PjxyZWN0IHg9IjMwMCIgeT0iNjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzYwIiB5PSI5NC45IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5jb25kaXRpb25uZXVyPC90ZXh0PjxyZWN0IHg9IjQ2MCIgeT0iNjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI0OTUiIHk9Ijk0LjkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkNBTjwvdGV4dD48cmVjdCB4PSI1NjAiIHk9IjYwIiB3aWR0aD0iOTYiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjZThmNWVlIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNjA4IiB5PSI4Ni4xNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+dHJhaXRlbWVudCw8L3RleHQ+PHRleHQgeD0iNjA4IiB5PSIxMDMuNjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmFmZmljaGFnZTwvdGV4dD48dGV4dCB4PSIzMzAiIHk9IjE2MCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZXguIDogc29uZGUgZGUgdGVtcMOpcmF0dXJlIOKGkiBhbXBsaWZpY2F0aW9uIOKGkiBjb2RhZ2Ug4oaSIMKrIDM3LDAgwrBDIMK7IGFmZmljaMOpPC90ZXh0Pjwvc3ZnPg==)
*Les maillons de la chaîne de mesure : le capteur transforme la grandeur physique en signal électrique, le conditionneur l'adapte, le CAN le code en nombre.*
<!-- /schema -->

Mesurer une grandeur physique avec un système numérique, c'est enchaîner **quatre maillons** :

$$\text{grandeur physique} \;\xrightarrow{\text{capteur}}\; \text{signal électrique}
\;\xrightarrow{\text{conditionneur}}\; \text{tension exploitable}
\;\xrightarrow{\text{CAN}}\; \text{nombre}
\;\xrightarrow{}\; \text{traitement / affichage}$$

| Maillon | Rôle |
|---|---|
| **Capteur** | transforme la grandeur physique (température, pression, lumière…) en grandeur électrique |
| **Conditionneur** | met en forme le signal : il l'**amplifie**, le filtre, l'adapte au calibre du CAN |
| **CAN** | **convertit** la tension analogique en un **nombre** (valeur numérique) |
| **Traitement** | l'ordinateur affiche, enregistre, exploite la valeur |

> **Exemple.** Dans une sonde de température numérique : une thermistance (capteur) voit sa
> résistance varier, un circuit la transforme en tension et l'amplifie (conditionneur), un CAN
> code cette tension en nombre, l'écran affiche $37{,}0\ \text{°C}$.

> **À comprendre.** Chaque maillon peut dégrader la mesure. Le résultat final n'est jamais
> meilleur que le maillon le plus faible de la chaîne.

---

## 3. Le capteur et sa caractéristique de transfert

Le **capteur** est le premier maillon : il convertit la grandeur d'entrée (ce qu'on veut mesurer)
en une **grandeur de sortie** électrique — le plus souvent une **tension**.

La **caractéristique de transfert** est le **graphique** (ou la relation) qui donne la sortie en
fonction de l'entrée.

### Capteur linéaire

<!-- schema:caracteristique -->
![Caractéristique du capteur de l'exemple : une droite d'ordonnée à l'origine 0,50 V et de pente 0,020 V·°C⁻¹ ; une tension de 1,30 V correspond à 40 °C.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1NiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEwOS44IiB5MT0iMjk0IiB4Mj0iMTA5LjgiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNjMuNiIgeTE9IjI5NCIgeDI9IjE2My42IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjE3LjQiIHkxPSIyOTQiIHgyPSIyMTcuNCIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjI3MS4yIiB5MT0iMjk0IiB4Mj0iMjcxLjIiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMjUiIHkxPSIyOTQiIHgyPSIzMjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzNzguOCIgeTE9IjI5NCIgeDI9IjM3OC44IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDMyLjYiIHkxPSIyOTQiIHgyPSI0MzIuNiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQ4Ni40IiB5MT0iMjk0IiB4Mj0iNDg2LjQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NDAuMiIgeTE9IjI5NCIgeDI9IjU0MC4yIiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTk0IiB5MT0iMjk0IiB4Mj0iNTk0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1OTQiIHkyPSIyOTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyNDkuNjciIHgyPSI1OTQiIHkyPSIyNDkuNjciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyMDUuMzMiIHgyPSI1OTQiIHkyPSIyMDUuMzMiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIxNjEiIHgyPSI1OTQiIHkyPSIxNjEiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIxMTYuNjciIHgyPSI1OTQiIHkyPSIxMTYuNjciIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSI3Mi4zMyIgeDI9IjU5NCIgeTI9IjcyLjMzIiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU2IiB5MT0iMjgiIHgyPSI1OTQiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI1NiIgeTE9IjI5NCIgeDI9IjU5OSIgeTI9IjI5NCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MDgsMjk0IDU5OSwyODkuNSA1OTksMjk4LjUiIGZpbGw9IiM4YTk5YTgiLz48bGluZSB4MT0iNTYiIHkxPSIyOTQiIHgyPSI1NiIgeTI9IjIzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU2LDE0IDUxLjUsMjMgNjAuNSwyMyIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI1NiIgeTE9IjI5NCIgeDI9IjU2IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1NiIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxsaW5lIHgxPSIxMDkuOCIgeTE9IjI5NCIgeDI9IjEwOS44IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMDkuOCIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDwvdGV4dD48bGluZSB4MT0iMTYzLjYiIHkxPSIyOTQiIHgyPSIxNjMuNiIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTYzLjYiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjA8L3RleHQ+PGxpbmUgeDE9IjIxNy40IiB5MT0iMjk0IiB4Mj0iMjE3LjQiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjIxNy40IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjMwPC90ZXh0PjxsaW5lIHgxPSIyNzEuMiIgeTE9IjI5NCIgeDI9IjI3MS4yIiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNzEuMiIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40MDwvdGV4dD48bGluZSB4MT0iMzI1IiB5MT0iMjk0IiB4Mj0iMzI1IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMjUiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTA8L3RleHQ+PGxpbmUgeDE9IjM3OC44IiB5MT0iMjk0IiB4Mj0iMzc4LjgiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjM3OC44IiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjYwPC90ZXh0PjxsaW5lIHgxPSI0MzIuNiIgeTE9IjI5NCIgeDI9IjQzMi42IiB5Mj0iMjk4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0MzIuNiIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj43MDwvdGV4dD48bGluZSB4MT0iNDg2LjQiIHkxPSIyOTQiIHgyPSI0ODYuNCIgeTI9IjI5OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDg2LjQiIHk9IjMxMiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODA8L3RleHQ+PGxpbmUgeDE9IjU0MC4yIiB5MT0iMjk0IiB4Mj0iNTQwLjIiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU0MC4yIiB5PSIzMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjkwPC90ZXh0PjxsaW5lIHgxPSI1OTQiIHkxPSIyOTQiIHgyPSI1OTQiIHkyPSIyOTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU5NCIgeT0iMzEyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDA8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iMjk0IiB4Mj0iNTYiIHkyPSIyOTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4IiB5PSIyOTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjAsMDwvdGV4dD48bGluZSB4MT0iNTIiIHkxPSIyNDkuNjciIHgyPSI1NiIgeTI9IjI0OS42NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgiIHk9IjI1My42NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MCw1PC90ZXh0PjxsaW5lIHgxPSI1MiIgeTE9IjIwNS4zMyIgeDI9IjU2IiB5Mj0iMjA1LjMzIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0OCIgeT0iMjA5LjMzIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4xLDA8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iMTYxIiB4Mj0iNTYiIHkyPSIxNjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4IiB5PSIxNjUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjEsNTwvdGV4dD48bGluZSB4MT0iNTIiIHkxPSIxMTYuNjciIHgyPSI1NiIgeTI9IjExNi42NyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgiIHk9IjEyMC42NyIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9ImVuZCI+MiwwPC90ZXh0PjxsaW5lIHgxPSI1MiIgeTE9IjcyLjMzIiB4Mj0iNTYiIHkyPSI3Mi4zMyIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDgiIHk9Ijc2LjMzIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIj4yLDU8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iMjgiIHgyPSI1NiIgeTI9IjI4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0OCIgeT0iMzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjMsMDwvdGV4dD48dGV4dCB4PSI2MTQiIHk9IjMzMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCI+zrggKMKwQyk8L3RleHQ+PHRleHQgeD0iNTAiIHk9IjEwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPlUgKFYpPC90ZXh0PjxwYXRoIGQ9Ik0gNTYgMjQ5LjY3IEwgNTcuNzkgMjQ5LjA4IEwgNTkuNTkgMjQ4LjQ4IEwgNjEuMzggMjQ3Ljg5IEwgNjMuMTcgMjQ3LjMgTCA2NC45NyAyNDYuNzEgTCA2Ni43NiAyNDYuMTIgTCA2OC41NSAyNDUuNTMgTCA3MC4zNSAyNDQuOTQgTCA3Mi4xNCAyNDQuMzUgTCA3My45MyAyNDMuNzYgTCA3NS43MyAyNDMuMTYgTCA3Ny41MiAyNDIuNTcgTCA3OS4zMSAyNDEuOTggTCA4MS4xMSAyNDEuMzkgTCA4Mi45IDI0MC44IEwgODQuNjkgMjQwLjIxIEwgODYuNDkgMjM5LjYyIEwgODguMjggMjM5LjAzIEwgOTAuMDcgMjM4LjQ0IEwgOTEuODcgMjM3Ljg0IEwgOTMuNjYgMjM3LjI1IEwgOTUuNDUgMjM2LjY2IEwgOTcuMjUgMjM2LjA3IEwgOTkuMDQgMjM1LjQ4IEwgMTAwLjgzIDIzNC44OSBMIDEwMi42MyAyMzQuMyBMIDEwNC40MiAyMzMuNzEgTCAxMDYuMjEgMjMzLjEyIEwgMTA4LjAxIDIzMi41MiBMIDEwOS44IDIzMS45MyBMIDExMS41OSAyMzEuMzQgTCAxMTMuMzkgMjMwLjc1IEwgMTE1LjE4IDIzMC4xNiBMIDExNi45NyAyMjkuNTcgTCAxMTguNzcgMjI4Ljk4IEwgMTIwLjU2IDIyOC4zOSBMIDEyMi4zNSAyMjcuOCBMIDEyNC4xNSAyMjcuMiBMIDEyNS45NCAyMjYuNjEgTCAxMjcuNzMgMjI2LjAyIEwgMTI5LjUzIDIyNS40MyBMIDEzMS4zMiAyMjQuODQgTCAxMzMuMTEgMjI0LjI1IEwgMTM0LjkxIDIyMy42NiBMIDEzNi43IDIyMy4wNyBMIDEzOC40OSAyMjIuNDggTCAxNDAuMjkgMjIxLjg4IEwgMTQyLjA4IDIyMS4yOSBMIDE0My44NyAyMjAuNyBMIDE0NS42NyAyMjAuMTEgTCAxNDcuNDYgMjE5LjUyIEwgMTQ5LjI1IDIxOC45MyBMIDE1MS4wNSAyMTguMzQgTCAxNTIuODQgMjE3Ljc1IEwgMTU0LjYzIDIxNy4xNiBMIDE1Ni40MyAyMTYuNTYgTCAxNTguMjIgMjE1Ljk3IEwgMTYwLjAxIDIxNS4zOCBMIDE2MS44MSAyMTQuNzkgTCAxNjMuNiAyMTQuMiBMIDE2NS4zOSAyMTMuNjEgTCAxNjcuMTkgMjEzLjAyIEwgMTY4Ljk4IDIxMi40MyBMIDE3MC43NyAyMTEuODQgTCAxNzIuNTcgMjExLjI0IEwgMTc0LjM2IDIxMC42NSBMIDE3Ni4xNSAyMTAuMDYgTCAxNzcuOTUgMjA5LjQ3IEwgMTc5Ljc0IDIwOC44OCBMIDE4MS41MyAyMDguMjkgTCAxODMuMzMgMjA3LjcgTCAxODUuMTIgMjA3LjExIEwgMTg2LjkxIDIwNi41MiBMIDE4OC43MSAyMDUuOTIgTCAxOTAuNSAyMDUuMzMgTCAxOTIuMjkgMjA0Ljc0IEwgMTk0LjA5IDIwNC4xNSBMIDE5NS44OCAyMDMuNTYgTCAxOTcuNjcgMjAyLjk3IEwgMTk5LjQ3IDIwMi4zOCBMIDIwMS4yNiAyMDEuNzkgTCAyMDMuMDUgMjAxLjIgTCAyMDQuODUgMjAwLjYgTCAyMDYuNjQgMjAwLjAxIEwgMjA4LjQzIDE5OS40MiBMIDIxMC4yMyAxOTguODMgTCAyMTIuMDIgMTk4LjI0IEwgMjEzLjgxIDE5Ny42NSBMIDIxNS42MSAxOTcuMDYgTCAyMTcuNCAxOTYuNDcgTCAyMTkuMTkgMTk1Ljg4IEwgMjIwLjk5IDE5NS4yOCBMIDIyMi43OCAxOTQuNjkgTCAyMjQuNTcgMTk0LjEgTCAyMjYuMzcgMTkzLjUxIEwgMjI4LjE2IDE5Mi45MiBMIDIyOS45NSAxOTIuMzMgTCAyMzEuNzUgMTkxLjc0IEwgMjMzLjU0IDE5MS4xNSBMIDIzNS4zMyAxOTAuNTYgTCAyMzcuMTMgMTg5Ljk2IEwgMjM4LjkyIDE4OS4zNyBMIDI0MC43MSAxODguNzggTCAyNDIuNTEgMTg4LjE5IEwgMjQ0LjMgMTg3LjYgTCAyNDYuMDkgMTg3LjAxIEwgMjQ3Ljg5IDE4Ni40MiBMIDI0OS42OCAxODUuODMgTCAyNTEuNDcgMTg1LjI0IEwgMjUzLjI3IDE4NC42NCBMIDI1NS4wNiAxODQuMDUgTCAyNTYuODUgMTgzLjQ2IEwgMjU4LjY1IDE4Mi44NyBMIDI2MC40NCAxODIuMjggTCAyNjIuMjMgMTgxLjY5IEwgMjY0LjAzIDE4MS4xIEwgMjY1LjgyIDE4MC41MSBMIDI2Ny42MSAxNzkuOTIgTCAyNjkuNDEgMTc5LjMyIEwgMjcxLjIgMTc4LjczIEwgMjcyLjk5IDE3OC4xNCBMIDI3NC43OSAxNzcuNTUgTCAyNzYuNTggMTc2Ljk2IEwgMjc4LjM3IDE3Ni4zNyBMIDI4MC4xNyAxNzUuNzggTCAyODEuOTYgMTc1LjE5IEwgMjgzLjc1IDE3NC42IEwgMjg1LjU1IDE3NCBMIDI4Ny4zNCAxNzMuNDEgTCAyODkuMTMgMTcyLjgyIEwgMjkwLjkzIDE3Mi4yMyBMIDI5Mi43MiAxNzEuNjQgTCAyOTQuNTEgMTcxLjA1IEwgMjk2LjMxIDE3MC40NiBMIDI5OC4xIDE2OS44NyBMIDI5OS44OSAxNjkuMjggTCAzMDEuNjkgMTY4LjY4IEwgMzAzLjQ4IDE2OC4wOSBMIDMwNS4yNyAxNjcuNSBMIDMwNy4wNyAxNjYuOTEgTCAzMDguODYgMTY2LjMyIEwgMzEwLjY1IDE2NS43MyBMIDMxMi40NSAxNjUuMTQgTCAzMTQuMjQgMTY0LjU1IEwgMzE2LjAzIDE2My45NiBMIDMxNy44MyAxNjMuMzYgTCAzMTkuNjIgMTYyLjc3IEwgMzIxLjQxIDE2Mi4xOCBMIDMyMy4yMSAxNjEuNTkgTCAzMjUgMTYxIEwgMzI2Ljc5IDE2MC40MSBMIDMyOC41OSAxNTkuODIgTCAzMzAuMzggMTU5LjIzIEwgMzMyLjE3IDE1OC42NCBMIDMzMy45NyAxNTguMDQgTCAzMzUuNzYgMTU3LjQ1IEwgMzM3LjU1IDE1Ni44NiBMIDMzOS4zNSAxNTYuMjcgTCAzNDEuMTQgMTU1LjY4IEwgMzQyLjkzIDE1NS4wOSBMIDM0NC43MyAxNTQuNSBMIDM0Ni41MiAxNTMuOTEgTCAzNDguMzEgMTUzLjMyIEwgMzUwLjExIDE1Mi43MiBMIDM1MS45IDE1Mi4xMyBMIDM1My42OSAxNTEuNTQgTCAzNTUuNDkgMTUwLjk1IEwgMzU3LjI4IDE1MC4zNiBMIDM1OS4wNyAxNDkuNzcgTCAzNjAuODcgMTQ5LjE4IEwgMzYyLjY2IDE0OC41OSBMIDM2NC40NSAxNDggTCAzNjYuMjUgMTQ3LjQgTCAzNjguMDQgMTQ2LjgxIEwgMzY5LjgzIDE0Ni4yMiBMIDM3MS42MyAxNDUuNjMgTCAzNzMuNDIgMTQ1LjA0IEwgMzc1LjIxIDE0NC40NSBMIDM3Ny4wMSAxNDMuODYgTCAzNzguOCAxNDMuMjcgTCAzODAuNTkgMTQyLjY4IEwgMzgyLjM5IDE0Mi4wOCBMIDM4NC4xOCAxNDEuNDkgTCAzODUuOTcgMTQwLjkgTCAzODcuNzcgMTQwLjMxIEwgMzg5LjU2IDEzOS43MiBMIDM5MS4zNSAxMzkuMTMgTCAzOTMuMTUgMTM4LjU0IEwgMzk0Ljk0IDEzNy45NSBMIDM5Ni43MyAxMzcuMzYgTCAzOTguNTMgMTM2Ljc2IEwgNDAwLjMyIDEzNi4xNyBMIDQwMi4xMSAxMzUuNTggTCA0MDMuOTEgMTM0Ljk5IEwgNDA1LjcgMTM0LjQgTCA0MDcuNDkgMTMzLjgxIEwgNDA5LjI5IDEzMy4yMiBMIDQxMS4wOCAxMzIuNjMgTCA0MTIuODcgMTMyLjA0IEwgNDE0LjY3IDEzMS40NCBMIDQxNi40NiAxMzAuODUgTCA0MTguMjUgMTMwLjI2IEwgNDIwLjA1IDEyOS42NyBMIDQyMS44NCAxMjkuMDggTCA0MjMuNjMgMTI4LjQ5IEwgNDI1LjQzIDEyNy45IEwgNDI3LjIyIDEyNy4zMSBMIDQyOS4wMSAxMjYuNzIgTCA0MzAuODEgMTI2LjEyIEwgNDMyLjYgMTI1LjUzIEwgNDM0LjM5IDEyNC45NCBMIDQzNi4xOSAxMjQuMzUgTCA0MzcuOTggMTIzLjc2IEwgNDM5Ljc3IDEyMy4xNyBMIDQ0MS41NyAxMjIuNTggTCA0NDMuMzYgMTIxLjk5IEwgNDQ1LjE1IDEyMS40IEwgNDQ2Ljk1IDEyMC44IEwgNDQ4Ljc0IDEyMC4yMSBMIDQ1MC41MyAxMTkuNjIgTCA0NTIuMzMgMTE5LjAzIEwgNDU0LjEyIDExOC40NCBMIDQ1NS45MSAxMTcuODUgTCA0NTcuNzEgMTE3LjI2IEwgNDU5LjUgMTE2LjY3IEwgNDYxLjI5IDExNi4wOCBMIDQ2My4wOSAxMTUuNDggTCA0NjQuODggMTE0Ljg5IEwgNDY2LjY3IDExNC4zIEwgNDY4LjQ3IDExMy43MSBMIDQ3MC4yNiAxMTMuMTIgTCA0NzIuMDUgMTEyLjUzIEwgNDczLjg1IDExMS45NCBMIDQ3NS42NCAxMTEuMzUgTCA0NzcuNDMgMTEwLjc2IEwgNDc5LjIzIDExMC4xNiBMIDQ4MS4wMiAxMDkuNTcgTCA0ODIuODEgMTA4Ljk4IEwgNDg0LjYxIDEwOC4zOSBMIDQ4Ni40IDEwNy44IEwgNDg4LjE5IDEwNy4yMSBMIDQ4OS45OSAxMDYuNjIgTCA0OTEuNzggMTA2LjAzIEwgNDkzLjU3IDEwNS40NCBMIDQ5NS4zNyAxMDQuODQgTCA0OTcuMTYgMTA0LjI1IEwgNDk4Ljk1IDEwMy42NiBMIDUwMC43NSAxMDMuMDcgTCA1MDIuNTQgMTAyLjQ4IEwgNTA0LjMzIDEwMS44OSBMIDUwNi4xMyAxMDEuMyBMIDUwNy45MiAxMDAuNzEgTCA1MDkuNzEgMTAwLjEyIEwgNTExLjUxIDk5LjUyIEwgNTEzLjMgOTguOTMgTCA1MTUuMDkgOTguMzQgTCA1MTYuODkgOTcuNzUgTCA1MTguNjggOTcuMTYgTCA1MjAuNDcgOTYuNTcgTCA1MjIuMjcgOTUuOTggTCA1MjQuMDYgOTUuMzkgTCA1MjUuODUgOTQuOCBMIDUyNy42NSA5NC4yIEwgNTI5LjQ0IDkzLjYxIEwgNTMxLjIzIDkzLjAyIEwgNTMzLjAzIDkyLjQzIEwgNTM0LjgyIDkxLjg0IEwgNTM2LjYxIDkxLjI1IEwgNTM4LjQxIDkwLjY2IEwgNTQwLjIgOTAuMDcgTCA1NDEuOTkgODkuNDggTCA1NDMuNzkgODguODggTCA1NDUuNTggODguMjkgTCA1NDcuMzcgODcuNyBMIDU0OS4xNyA4Ny4xMSBMIDU1MC45NiA4Ni41MiBMIDU1Mi43NSA4NS45MyBMIDU1NC41NSA4NS4zNCBMIDU1Ni4zNCA4NC43NSBMIDU1OC4xMyA4NC4xNiBMIDU1OS45MyA4My41NiBMIDU2MS43MiA4Mi45NyBMIDU2My41MSA4Mi4zOCBMIDU2NS4zMSA4MS43OSBMIDU2Ny4xIDgxLjIgTCA1NjguODkgODAuNjEgTCA1NzAuNjkgODAuMDIgTCA1NzIuNDggNzkuNDMgTCA1NzQuMjcgNzguODQgTCA1NzYuMDcgNzguMjQgTCA1NzcuODYgNzcuNjUgTCA1NzkuNjUgNzcuMDYgTCA1ODEuNDUgNzYuNDcgTCA1ODMuMjQgNzUuODggTCA1ODUuMDMgNzUuMjkgTCA1ODYuODMgNzQuNyBMIDU4OC42MiA3NC4xMSBMIDU5MC40MSA3My41MiBMIDU5Mi4yMSA3Mi45MiBMIDU5NCA3Mi4zMyIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIxNzguNzMiIHgyPSIyNzEuMiIgeTI9IjE3OC43MyIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMjcxLjIiIHkxPSIxNzguNzMiIHgyPSIyNzEuMiIgeTI9IjI5NCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIyNzEuMiIgY3k9IjE3OC43MyIgcj0iNSIgZmlsbD0iI2MwMmEyYSIvPjxyZWN0IHg9IjI3NS4yIiB5PSIxODcuNzMiIHdpZHRoPSIxNjguMTYiIGhlaWdodD0iMjAuMjUiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSIyNzkuMiIgeT0iMjAwLjczIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPlUgPSAxLDMwIFYg4oaSIM64ID0gNDAgwrBDPC90ZXh0PjxwYXRoIGQ9Ik0gMzc4LjggMTQzLjI3IEwgNTQwLjIgMTQzLjI3IEwgNTQwLjIgOTAuMDciIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiLz48dGV4dCB4PSI0NTkuNSIgeT0iMTYxLjI3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4rIDMwIMKwQzwvdGV4dD48dGV4dCB4PSI1NDYuMiIgeT0iMTE2LjY3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPisgMCw2MCBWPC90ZXh0PjxyZWN0IHg9IjE3OS4yIiB5PSI0OC42OSIgd2lkdGg9IjI3MC4wOCIgaGVpZ2h0PSIyMC4yNSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45MiIvPjx0ZXh0IHg9IjMxNC4yNCIgeT0iNjEuNjkiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBlbnRlID0gc2Vuc2liaWxpdMOpIFMgPSAwLDAyMCBWwrfCsEPigbvCuTwvdGV4dD48cmVjdCB4PSI2Mi43NiIgeT0iMjI3LjY3IiB3aWR0aD0iODEuOTIiIGhlaWdodD0iMTkiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOTIiLz48dGV4dCB4PSI2Ni43NiIgeT0iMjM5LjY3IiBmb250LXNpemU9IjEyIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPlXigoAgPSAwLDUwIFY8L3RleHQ+PC9zdmc+)
*Caractéristique du capteur de l'exemple : une droite d'ordonnée à l'origine 0,50 V et de pente 0,020 V·°C⁻¹ ; une tension de 1,30 V correspond à 40 °C.*
<!-- /schema -->

Un capteur est **linéaire** quand sa caractéristique de transfert est une **droite**. La sortie
$U$ s'écrit alors :

$$\boxed{U = S \times G + U_0}$$

où $G$ est la grandeur d'entrée, $U_0$ l'ordonnée à l'origine (valeur pour $G = 0$), et $S$ la
**pente** de la droite.

> **La pente de la caractéristique EST la sensibilité.** C'est le lien à retenir : une droite
> raide (grande pente) = capteur sensible.

> **Exemple.** Un capteur de température linéaire délivre $U = 0{,}50\ \text{V}$ à $0\ \text{°C}$
> et $U = 2{,}50\ \text{V}$ à $100\ \text{°C}$. Sa sensibilité est la pente :
> $S = \dfrac{2{,}50 - 0{,}50}{100 - 0} = \dfrac{2{,}00}{100} = 0{,}020\ \text{V·°C}^{-1}
> = 20\ \text{mV·°C}^{-1}$, et $U_0 = 0{,}50\ \text{V}$.

---

## 4. La mesure par étalonnage

Un capteur donne une tension ; on veut une grandeur physique. **Étalonner**, c'est établir la
correspondance entre les deux, pour pouvoir remonter de l'un à l'autre.

**La méthode :**

1. On applique des valeurs **connues** de la grandeur d'entrée (des valeurs de référence).
2. On relève la sortie correspondante pour chacune.
3. On trace la caractéristique de transfert (sortie en fonction de l'entrée).
4. Si elle est linéaire, on détermine son équation $U = S\,G + U_0$.
5. On l'**inverse** pour trouver la grandeur à partir d'une tension mesurée :
   $G = \dfrac{U - U_0}{S}$.

> **Exemple.** Avec le capteur ci-dessus ($S = 0{,}020\ \text{V·°C}^{-1}$, $U_0 = 0{,}50\ \text{V}$),
> une tension mesurée de $1{,}30\ \text{V}$ correspond à
> $\theta = \dfrac{1{,}30 - 0{,}50}{0{,}020} = \dfrac{0{,}80}{0{,}020} = 40\ \text{°C}$.

---

## 5. Le convertisseur analogique-numérique (CAN)

Un signal électrique varie de façon **continue** : c'est un signal **analogique**. Un ordinateur
ne manipule que des **nombres** : le **CAN** transforme la tension en un nombre entier.

### La résolution en bits

Un CAN à **$n$ bits** répartit la plage de tension en **$2^n$ niveaux** distincts. C'est sa
**résolution** :

| $n$ (bits) | Nombre de niveaux $2^n$ |
|---|---|
| $8$ | $256$ |
| $10$ | $1024$ |
| $12$ | $4096$ |

Plus $n$ est grand, plus la conversion est fine.

### Le quantum

Le **calibre** est l'étendue de tension que le CAN accepte à son entrée. Le **quantum** $q$ est
le « pas » de conversion : la plus petite variation de tension qui fait changer le nombre de sortie.

$$\boxed{q = \frac{\text{calibre}}{2^{\,n}}}$$

Le quantum est une **tension** (en volts). C'est la **résolution en tension** du CAN.

> **Exemple.** Un CAN de $8$ bits, calibre $5{,}00\ \text{V}$ :
> $q = \dfrac{5{,}00}{2^{8}} = \dfrac{5{,}00}{256} \approx 0{,}0195\ \text{V} \approx 19{,}5\ \text{mV}$.
> Deux tensions séparées de moins de $19{,}5\ \text{mV}$ donneront le **même** nombre.

### La valeur numérique

Pour une tension d'entrée $U_e$, le nombre entier $N$ délivré par le CAN est le nombre de quantums
contenus dans $U_e$ :

$$\boxed{N = \text{partie entière de } \frac{U_e}{q}}$$

> **Exemple.** Avec le CAN précédent ($q \approx 0{,}0195\ \text{V}$), une tension
> $U_e = 3{,}00\ \text{V}$ donne $\dfrac{3{,}00}{0{,}0195} \approx 153{,}6$, soit $N = 153$.
> Inversement, connaissant $N$, on retrouve la tension à un quantum près : $U \approx N \times q$.

> ⚠️ **Le calibre doit englober tout le signal.** Si la tension dépasse le calibre, le CAN
> **sature** : il bloque sur sa valeur maximale ($2^n - 1$) et la mesure est fausse. À l'inverse,
> un signal minuscule sur un gros calibre gaspille la résolution — d'où le rôle du conditionneur,
> qui amplifie pour occuper toute la plage.

---

## 6. La chaîne en tout ou rien

Toutes les chaînes ne mesurent pas une valeur : certaines ne répondent qu'à **deux états** —
*oui / non*, *marche / arrêt*, *alerte / repos*. C'est la chaîne **en tout ou rien** (TOR).

### Le comparateur et le seuil

Le cœur du dispositif est un **comparateur** : il compare la tension du capteur à une tension de
**seuil** fixée et bascule sa sortie d'un état à l'autre au franchissement du seuil.

> **Exemple.** Un capteur de température commande un ventilateur. Tant que $\theta < 30\ \text{°C}$,
> la sortie est à $0$ (ventilateur éteint). Dès que $\theta$ dépasse $30\ \text{°C}$, la sortie
> passe à $1$ (ventilateur allumé). Le seuil vaut $30\ \text{°C}$.

### L'hystérésis

<!-- schema:hysteresis -->
![Régulation avec hystérésis de l'exemple : le chauffage s'arrête à 21 °C en montée et ne redémarre qu'à 19 °C en descente.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYyMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iNTYiIHkxPSIyNTQiIHgyPSI1NiIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjEyMy4yNSIgeTE9IjI1NCIgeDI9IjEyMy4yNSIgeTI9IjI4IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE5MC41IiB5MT0iMjU0IiB4Mj0iMTkwLjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyNTcuNzUiIHkxPSIyNTQiIHgyPSIyNTcuNzUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzMjUiIHkxPSIyNTQiIHgyPSIzMjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIzOTIuMjUiIHkxPSIyNTQiIHgyPSIzOTIuMjUiIHkyPSIyOCIgc3Ryb2tlPSIjZGJlM2VjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI0NTkuNSIgeTE9IjI1NCIgeDI9IjQ1OS41IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTI2Ljc1IiB5MT0iMjU0IiB4Mj0iNTI2Ljc1IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTk0IiB5MT0iMjU0IiB4Mj0iNTk0IiB5Mj0iMjgiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSIyNTQiIHgyPSI1OTQiIHkyPSIyNTQiIHN0cm9rZT0iI2RiZTNlYyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTYiIHkxPSI5Mi41NyIgeDI9IjU5NCIgeTI9IjkyLjU3IiBzdHJva2U9IiNkYmUzZWMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU2IiB5MT0iMjU0IiB4Mj0iNTk5IiB5Mj0iMjU0IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjYwOCwyNTQgNTk5LDI0OS41IDU5OSwyNTguNSIgZmlsbD0iIzhhOTlhOCIvPjxsaW5lIHgxPSI1NiIgeTE9IjI1NCIgeDI9IjU2IiB5Mj0iMjMiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTYsMTQgNTEuNSwyMyA2MC41LDIzIiBmaWxsPSIjOGE5OWE4Ii8+PGxpbmUgeDE9IjU2IiB5MT0iMjU0IiB4Mj0iNTYiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjU2IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE2PC90ZXh0PjxsaW5lIHgxPSIxMjMuMjUiIHkxPSIyNTQiIHgyPSIxMjMuMjUiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjEyMy4yNSIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xNzwvdGV4dD48bGluZSB4MT0iMTkwLjUiIHkxPSIyNTQiIHgyPSIxOTAuNSIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTkwLjUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTg8L3RleHQ+PGxpbmUgeDE9IjI1Ny43NSIgeTE9IjI1NCIgeDI9IjI1Ny43NSIgeTI9IjI1OCIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjU3Ljc1IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE5PC90ZXh0PjxsaW5lIHgxPSIzMjUiIHkxPSIyNTQiIHgyPSIzMjUiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjMyNSIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD48bGluZSB4MT0iMzkyLjI1IiB5MT0iMjU0IiB4Mj0iMzkyLjI1IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOTIuMjUiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjE8L3RleHQ+PGxpbmUgeDE9IjQ1OS41IiB5MT0iMjU0IiB4Mj0iNDU5LjUiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ1OS41IiB5PSIyNzIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIyPC90ZXh0PjxsaW5lIHgxPSI1MjYuNzUiIHkxPSIyNTQiIHgyPSI1MjYuNzUiIHkyPSIyNTgiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjUyNi43NSIgeT0iMjcyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMzwvdGV4dD48bGluZSB4MT0iNTk0IiB5MT0iMjU0IiB4Mj0iNTk0IiB5Mj0iMjU4IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI1OTQiIHk9IjI3MiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjQ8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iMjU0IiB4Mj0iNTYiIHkyPSIyNTQiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4IiB5PSIyNTgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjA8L3RleHQ+PGxpbmUgeDE9IjUyIiB5MT0iOTIuNTciIHgyPSI1NiIgeTI9IjkyLjU3IiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSI0OCIgeT0iOTYuNTciIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiPjE8L3RleHQ+PHRleHQgeD0iNjE0IiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiPs64ICjCsEMpPC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSIxMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5jaGF1ZmZhZ2UgKDEgPSBtYXJjaGUpPC90ZXh0PjxwYXRoIGQ9Ik0gNzYuMTggOTIuNTcgTCAzOTIuMjUgOTIuNTcgTCAzOTIuMjUgMjU0IEwgNTczLjgyIDI1NCIgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDU3My44MiAyNTggTCAyNTcuNzUgMjU4IEwgMjU3Ljc1IDk2LjU3IEwgNzYuMTggOTYuNTciIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI2IDUiLz48cG9seWdvbiBwb2ludHM9IjE5MC41LDkyLjU3IDE4MC41LDg3LjU3IDE4MC41LDk3LjU3IiBmaWxsPSIjYzAyYTJhIi8+PHBvbHlnb24gcG9pbnRzPSIzOTIuMjUsMTczLjI5IDM5Ny4yNSwxNjMuMjkgMzg3LjI1LDE2My4yOSIgZmlsbD0iI2MwMmEyYSIvPjxwb2x5Z29uIHBvaW50cz0iNDU5LjUsMjU4IDQ2OS41LDI2MyA0NjkuNSwyNTMiIGZpbGw9IiMxZjZmZWIiLz48cG9seWdvbiBwb2ludHM9IjI1Ny43NSwxNzcuMjkgMjUyLjc1LDE4Ny4yOSAyNjIuNzUsMTg3LjI5IiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMzk4LjI1IiB5PSIxNTcuMTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJzdGFydCI+c2V1aWwgaGF1dCAyMSDCsEMgOjwvdGV4dD48dGV4dCB4PSIzOTguMjUiIHk9IjE3Mi4xNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5hcnLDqnQ8L3RleHQ+PHRleHQgeD0iMjUxLjc1IiB5PSIxNTcuMTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJlbmQiPnNldWlsIGJhcyAxOSDCsEMgOjwvdGV4dD48dGV4dCB4PSIyNTEuNzUiIHk9IjE3Mi4xNCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9ImVuZCI+bWlzZSBlbiBtYXJjaGU8L3RleHQ+PGxpbmUgeDE9IjI1Ny43NSIgeTE9IjUyLjIxIiB4Mj0iMzg0LjI1IiB5Mj0iNTIuMjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzkyLjI1LDUyLjIxIDM4NC4yNSw0OC4yMSAzODQuMjUsNTYuMjEiIGZpbGw9IiMxNjIzMmUiLz48bGluZSB4MT0iMzkyLjI1IiB5MT0iNTIuMjEiIHgyPSIyNjUuNzUiIHkyPSI1Mi4yMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNTcuNzUsNTIuMjEgMjY1Ljc1LDU2LjIxIDI2NS43NSw0OC4yMSIgZmlsbD0iIzE2MjMyZSIvPjx0ZXh0IHg9IjMyNSIgeT0iNDYuMjEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmh5c3TDqXLDqXNpczwvdGV4dD48L3N2Zz4=)
*Régulation avec hystérésis de l'exemple : le chauffage s'arrête à 21 °C en montée et ne redémarre qu'à 19 °C en descente.*
<!-- /schema -->

Avec un seuil **unique**, un signal qui oscille juste autour du seuil fait **claqueter** la sortie
(marche/arrêt/marche… très vite). Pour l'éviter, on utilise **deux seuils** différents : c'est
l'**hystérésis**.

- un seuil **haut** $S_H$ pour **enclencher** ;
- un seuil **bas** $S_B$ (plus petit) pour **couper**.

Entre les deux, l'état ne change pas : le système reste dans la position où il était.

> **Exemple — régulation.** Un chauffage réglé sur $19\ \text{°C}$ (seuil bas) et $21\ \text{°C}$
> (seuil haut) : il chauffe jusqu'à $21\ \text{°C}$, s'arrête, ne redémarre qu'une fois retombé à
> $19\ \text{°C}$. Il ne s'allume pas et ne s'éteint pas cent fois par minute : c'est le rôle de
> l'hystérésis, la largeur $S_H - S_B$ étant l'écart entre les deux seuils.

> **Applications.** Alerte (détecteur qui déclenche au-delà d'un seuil), régulation (thermostat,
> niveau d'une cuve), sécurité (coupure d'un procédé au-delà d'une pression limite).

---

## 7. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Étendue de mesure | $\text{EM} = V_{\max} - V_{\min}$ |
| Résolution (instrument) | plus petite variation détectable / affichée |
| Sensibilité | $S = \dfrac{\Delta(\text{sortie})}{\Delta(\text{entrée})}$ = **pente** de la caractéristique |
| Temps de réponse | délai pour atteindre une valeur stable |
| Précision | justesse (pas d'erreur systématique) **+** fidélité (mesures resserrées) |
| Chaîne de mesure | grandeur → **capteur** → **conditionneur** → **CAN** → traitement |
| Capteur linéaire | $U = S\,G + U_0$ |
| Étalonnage | établir puis inverser la caractéristique : $G = \dfrac{U - U_0}{S}$ |
| Résolution du CAN | $n$ bits → $2^n$ niveaux |
| Quantum | $q = \dfrac{\text{calibre}}{2^{\,n}}$ (en volts) |
| Valeur numérique | $N = \text{partie entière de } \dfrac{U_e}{q}$ |
| Tout ou rien | comparateur + seuil ; **hystérésis** = deux seuils ($S_H$ et $S_B$) |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre résolution et précision.** Beaucoup de chiffres affichés ≠ mesure juste. La
   résolution est le pas d'affichage ; la précision est l'écart à la valeur vraie.
2. **Oublier l'unité de la sensibilité.** $S$ n'est pas un nombre nu : c'est un rapport
   sortie/entrée, donc des mV·°C⁻¹, des V·bar⁻¹, etc. selon les grandeurs.
3. **Se tromper de formule pour le quantum.** $q = \dfrac{\text{calibre}}{2^n}$, on **divise**
   par $2^n$. Écrire $q = \text{calibre} \times 2^n$ donne une tension absurde.
4. **Oublier de convertir avant de calculer $q$ ou $N$.** Un calibre en volts, un quantum souvent
   en millivolts : $19{,}5\ \text{mV} = 0{,}0195\ \text{V}$. Mélanger les deux fausse tout.
5. **Confondre $n$ (nombre de bits) et $2^n$ (nombre de niveaux).** Un CAN 8 bits ne code pas
   $8$ valeurs mais $256$.
6. **Croire qu'un seul seuil suffit en régulation.** Sans **hystérésis** (deux seuils), le
   système claquette autour du seuil et s'use.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel SPCL, série STL, classe de première — BO du 22 janvier 2019
(docs/programme-stl-spcl.txt, section « Instrumentation : chaîne de mesure (1re) », lignes 55-59) :
« Caractéristiques d'un instrument : résolution, étendue, temps de réponse ; chaîne de mesure :
capteur, conditionneur, caractéristique de transfert ; CAN : quantum, résolution ; chaîne en
tout ou rien : alerte, régulation, hystérésis. »
Extraction via WebFetch depuis le PDF officiel education.gouv.fr (spe260_annexe... / première STL),
à CONFRONTER au PDF avant publication.

CONVENTIONS DE CALCUL RETENUES (à valider par le relecteur) :
- Quantum q = calibre / 2^n, conformément à l'intitulé fourni. Certaines ressources écrivent
  q = étendue / (2^n − 1) (nombre d'intervalles). J'ai suivi calibre/2^n de bout en bout, y
  compris dans les exercices. À trancher avec l'équipe pour homogénéité inter-chapitres.
- Valeur numérique N = partie entière de U_e / q (troncature, pas arrondi). Convention courante ;
  à confirmer si l'épreuve attend un arrondi.
- « calibre » = étendue de tension d'entrée du CAN ; supposé de 0 à V_max (unipolaire) dans tous
  les exemples et exercices. Aucun CAN bipolaire n'est traité.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le temps de réponse est-il défini quantitativement au programme (t_90 / t_95 %) ou seulement
  qualitativement ? J'ai retenu l'approche qualitative.
- « précision » : le programme distingue-t-il explicitement justesse/fidélité dans CE module, ou
  seulement dans « Mesure et incertitudes » ? J'ai fait le lien avec le chapitre incertitudes.
- L'écriture U = S·G + U0 de la caractéristique linéaire est-elle attendue, ou seulement la
  lecture graphique de la pente ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel. Statut : brouillon, non relu.
-->
