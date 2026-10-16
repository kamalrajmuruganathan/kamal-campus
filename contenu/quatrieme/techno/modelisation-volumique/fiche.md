---
id: 4e-techno-modelisation-volumique
titre: "La modélisation volumique"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "Design, innovation et créativité / Conception, création, réalisation"
duree_lecture_min: 11
prerequis:
  - Représentation d'un objet, croquis et schéma (5e)
  - Notion de fonction technique (5e)
statut: brouillon
relu_par: null
---

# La modélisation volumique

> Avant de fabriquer un objet, les ingénieurs le **dessinent en trois dimensions** sur un
> ordinateur. On peut alors le faire tourner, vérifier ses dimensions, tester s'il tient
> debout… et corriger les erreurs **avant** de gaspiller de la matière. C'est la
> **modélisation volumique** : représenter un objet **en 3D** grâce à un logiciel.

---

## 1. Qu'est-ce qu'un modèle volumique (3D) ?

Un **modèle volumique** est la représentation **en trois dimensions** d'un objet réalisée
avec un logiciel de **CAO** (**Conception Assistée par Ordinateur**), par exemple
*Tinkercad*, *SketchUp*, *FreeCAD* ou *SolidWorks*.

Contrairement à un dessin sur papier (en 2D), le modèle 3D possède **trois dimensions** :
**longueur**, **largeur** et **hauteur**. On peut le **tourner** dans tous les sens, le
**mesurer**, le **couper** pour voir l'intérieur.

> **À retenir.** Un modèle volumique n'est pas une simple image : c'est un objet
> **numérique** défini par des **dimensions exactes**, que l'ordinateur connaît précisément.

---

## 2. Pourquoi modéliser en 3D ? (les avantages)

| Avantage | Explication |
|---|---|
| **Visualiser** | Voir l'objet sous tous les angles avant de le fabriquer |
| **Vérifier** | Contrôler les dimensions, l'assemblage, la solidité |
| **Modifier facilement** | Changer une cote sans tout recommencer |
| **Économiser** | Éviter le gaspillage de matière et les prototypes ratés |
| **Communiquer** | Partager le même modèle entre concepteurs, clients, fabricants |
| **Fabriquer** | Envoyer le fichier directement à une imprimante 3D ou une machine |

---

## 3. Comment construit-on un volume ?

<!-- schema:extrusion-revolution -->
![L'extrusion donne de l'épaisseur à une forme plate ; la révolution fait tourner un profil autour d'un axe pour créer, par exemple, un verre.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjMwLDE5MCA5MCwxOTAgOTAsMTcwIDUwLDE3MCA1MCwxMzAgMzAsMTMwIiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCB4PSI2MCIgeT0iMjE0IiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5mb3JtZSBwbGF0ZSAoMkQpPC90ZXh0PjxsaW5lIHgxPSIxMDYiIHkxPSIxNTAiIHgyPSIxNDYiIHkyPSIxNTAiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTU2LDE1MCAxNDYsMTQ1IDE0NiwxNTUiIGZpbGw9IiNjMjVlMDAiLz48dGV4dCB4PSIxMzEiIHk9IjEzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+ZXh0cnVzaW9uPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMjQwLDE5MCAyNDAsMTcwIDI2NC43NSwxNDUuMjUgMjY0Ljc1LDE2NS4yNSIgZmlsbD0iI2NmZGJlOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyNDAsMTcwIDIwMCwxNzAgMjI0Ljc1LDE0NS4yNSAyNjQuNzUsMTQ1LjI1IiBmaWxsPSIjY2ZkYmU4IiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIwMCwxNzAgMjAwLDEzMCAyMjQuNzUsMTA1LjI1IDIyNC43NSwxNDUuMjUiIGZpbGw9IiNjZmRiZTgiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjAwLDEzMCAxODAsMTMwIDIwNC43NSwxMDUuMjUgMjI0Ljc1LDEwNS4yNSIgZmlsbD0iI2NmZGJlOCIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxODAsMTkwIDI0MCwxOTAgMjQwLDE3MCAyMDAsMTcwIDIwMCwxMzAgMTgwLDEzMCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHRleHQgeD0iMjMwIiB5PSIyMTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnZvbHVtZSAoM0QpPC90ZXh0PjxsaW5lIHgxPSI0MDAiIHkxPSIyMDYiIHgyPSI0MDAiIHkyPSI3NCIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWRhc2hhcnJheT0iNiA1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzOTQiIHk9IjY4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0iZW5kIj5heGU8L3RleHQ+PHBvbHlnb24gcG9pbnRzPSI0MDAsMTkwIDQyMiwxOTAgNDM2LDkwIDQwMCw5MCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHRleHQgeD0iNDE4IiB5PSIyMTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnByb2ZpbDwvdGV4dD48bGluZSB4MT0iNDUwIiB5MT0iMTQwIiB4Mj0iNDg2IiB5Mj0iMTQwIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ5NiwxNDAgNDg2LDEzNSA0ODYsMTQ1IiBmaWxsPSIjYzI1ZTAwIi8+PHRleHQgeD0iNDczIiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnLDqXZvbHV0aW9uPC90ZXh0PjxwYXRoIGQ9Ik0gNTM0IDE5MCBBIDIyIDYuNiAwIDAgMCA1NzggMTkwIEwgNTkyIDkwIEwgNTIwIDkwIFoiIGZpbGw9IiNjZmRiZTgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjU1NiIgY3k9IjkwIiByeD0iMzYiIHJ5PSIxMC44IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0gNTM0IDE5MCBBIDIyIDYuNiAwIDAgMSA1NzggMTkwIiBmaWxsPSJub25lIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz48bGluZSB4MT0iNTU2IiB5MT0iMjA2IiB4Mj0iNTU2IiB5Mj0iNzQiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1kYXNoYXJyYXk9IjYgNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTU2IiB5PSIyMTQiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnVuIHZlcnJlPC90ZXh0Pjwvc3ZnPg==)
*L'extrusion donne de l'épaisseur à une forme plate ; la révolution fait tourner un profil autour d'un axe pour créer, par exemple, un verre.*
<!-- /schema -->

<!-- schema:rondelle-soustraction -->
![Pour modéliser une rondelle, on soustrait un petit cylindre au centre d’un grand cylindre : cela crée le trou.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiLz48cGF0aCBkPSJNIDMwIDkwIEwgMzAgMTE2IEEgNzAgMjIuNDAwMDAwMDAwMDAwMDAyIDAgMCAwIDE3MCAxMTYgTCAxNzAgOTAgWiIgZmlsbD0iI2NmZGJlOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMTAwIiBjeT0iOTAiIHJ4PSI3MCIgcnk9IjIyLjQiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTAwIiB5PSIxNzAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPmN5bGluZHJlPC90ZXh0Pjx0ZXh0IHg9IjIwNSIgeT0iMTEyIiBmb250LXNpemU9IjM0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7iiJI8L3RleHQ+PHBhdGggZD0iTSAyNTggOTAgTCAyNTggMTE2IEEgMjIgNy4wNCAwIDAgMCAzMDIgMTE2IEwgMzAyIDkwIFoiIGZpbGw9IiNmNWQwZDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGVsbGlwc2UgY3g9IjI4MCIgY3k9IjkwIiByeD0iMjIiIHJ5PSI3LjA0IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjI4MCIgeT0iMTcwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5wZXRpdCBjeWxpbmRyZTwvdGV4dD48dGV4dCB4PSIzNTUiIHk9IjExMiIgZm9udC1zaXplPSIzNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+PTwvdGV4dD48cGF0aCBkPSJNIDQxMCA5MCBMIDQxMCAxMTYgQSA3MCAyMi40MDAwMDAwMDAwMDAwMDIgMCAwIDAgNTUwIDExNiBMIDU1MCA5MCBaIiBmaWxsPSIjY2ZkYmU4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMiIvPjxlbGxpcHNlIGN4PSI0ODAiIGN5PSI5MCIgcng9IjcwIiByeT0iMjIuNCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iNDgwIiBjeT0iOTAiIHJ4PSIyMiIgcnk9IjcuMDQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTSA0NTggOTAgQSAyMiA3LjA0IDAgMCAwIDUwMiA5MCBMIDUwMiA5MyBBIDIyIDcuMDQgMCAwIDEgNDU4IDkzIFoiIGZpbGw9IiM5ZmIzYzgiIHN0cm9rZT0ibm9uZSIvPjx0ZXh0IHg9IjQ4MCIgeT0iMTcwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5yb25kZWxsZSAodHJvdSk8L3RleHQ+PC9zdmc+)
*Pour modéliser une rondelle, on soustrait un petit cylindre au centre d’un grand cylindre : cela crée le trou.*
<!-- /schema -->

On part souvent de **formes de base** (appelées **primitives**) : **cube (pavé)**,
**cylindre**, **sphère**, **cône**, **pyramide**. Puis on les **combine** et on les
**transforme** avec des opérations :

| Opération | Ce qu'elle fait |
|---|---|
| **Extrusion** | « Tirer » une forme plate (2D) pour lui donner de l'épaisseur → un volume |
| **Révolution** | Faire tourner un profil autour d'un axe (ex. créer un verre, une bouteille) |
| **Assemblage / union** | Réunir plusieurs volumes en un seul |
| **Soustraction (perçage)** | Enlever de la matière (faire un trou, une rainure) |
| **Répétition** | Copier une forme plusieurs fois régulièrement |

> **Exemple.** Pour modéliser une **rondelle**, on part d'un **cylindre** puis on
> **soustrait** un petit cylindre au centre : cela crée le **trou**.

---

## 4. Les cotes (dimensions)

Un modèle volumique est défini par des **cotes** : ce sont les **dimensions** de l'objet,
exprimées dans une **unité** (le plus souvent le **millimètre, mm**). Une cote précise, par
exemple, qu'un côté mesure `40 mm` ou qu'un trou a un diamètre de `8 mm`.

> **Le modèle est à l'échelle réelle** dans le logiciel : si on écrit 40 mm, l'objet
> fabriqué mesurera 40 mm. La précision des cotes est donc essentielle.

---

## 5. Du modèle 3D à l'objet réel

<!-- schema:chaine-numerique -->
![La chaîne numérique : de l’idée au modèle 3D, puis au fichier STL découpé en couches et à la fabrication par une imprimante 3D.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAgNTEyIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQyMCIgaGVpZ2h0PSI1MTIiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI5NSIgeT0iMTQiIHdpZHRoPSIyMzAiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjZjNlY2ZhIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyMTAiIHk9IjMyLjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPklkw6llIGV0IGNyb3F1aXM8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSI1Mi4xIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zdXIgcGFwaWVyLCBlbiAyRDwvdGV4dD48bGluZSB4MT0iMjEwIiB5MT0iNjQiIHgyPSIyMTAiIHkyPSI5NiIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjEwLDEwNiAyMTUsOTYgMjA1LDk2IiBmaWxsPSIjN2EzZmIwIi8+PHJlY3QgeD0iOTUiIHk9IjEwOCIgd2lkdGg9IjIzMCIgaGVpZ2h0PSI0OCIgcng9IjgiIGZpbGw9IiNmM2VjZmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjIxMCIgeT0iMTI2LjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPk1vZMOobGUgM0Q8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSIxNDYuMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bG9naWNpZWwgZGUgQ0FPPC90ZXh0PjxsaW5lIHgxPSIyMTAiIHkxPSIxNTgiIHgyPSIyMTAiIHkyPSIxOTAiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIxMCwyMDAgMjE1LDE5MCAyMDUsMTkwIiBmaWxsPSIjN2EzZmIwIi8+PHJlY3QgeD0iOTUiIHk9IjIwMiIgd2lkdGg9IjIzMCIgaGVpZ2h0PSI0OCIgcng9IjgiIGZpbGw9IiNmM2VjZmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjIxMCIgeT0iMjIwLjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkZpY2hpZXIgZXhwb3J0w6k8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSIyNDAuMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Zm9ybWF0IFNUTDwvdGV4dD48bGluZSB4MT0iMjEwIiB5MT0iMjUyIiB4Mj0iMjEwIiB5Mj0iMjg0IiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyMTAsMjk0IDIxNSwyODQgMjA1LDI4NCIgZmlsbD0iIzdhM2ZiMCIvPjxyZWN0IHg9Ijk1IiB5PSIyOTYiIHdpZHRoPSIyMzAiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjZjNlY2ZhIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyMTAiIHk9IjMxNC4zIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5Ew6ljb3VwYWdlIGVuIGNvdWNoZXM8L3RleHQ+PHRleHQgeD0iMjEwIiB5PSIzMzQuMSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bG9naWNpZWwgdHJhbmNoZXVyPC90ZXh0PjxsaW5lIHgxPSIyMTAiIHkxPSIzNDYiIHgyPSIyMTAiIHkyPSIzNzgiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIxMCwzODggMjE1LDM3OCAyMDUsMzc4IiBmaWxsPSIjN2EzZmIwIi8+PHJlY3QgeD0iOTUiIHk9IjM5MCIgd2lkdGg9IjIzMCIgaGVpZ2h0PSI0OCIgcng9IjgiIGZpbGw9IiNmM2VjZmEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjN2EzZmIwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjIxMCIgeT0iNDA4LjMiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkZhYnJpY2F0aW9uPC90ZXh0Pjx0ZXh0IHg9IjIxMCIgeT0iNDI4LjEiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmltcHJpbWFudGUgM0Q8L3RleHQ+PGxpbmUgeDE9IjIxMCIgeTE9IjQ0MCIgeDI9IjIxMCIgeTI9IjQ1NiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjEwLDQ2NiAyMTUsNDU2IDIwNSw0NTYiIGZpbGw9IiMxNjIzMmUiLz48cmVjdCB4PSIxMDUiIHk9IjQ2OCIgd2lkdGg9IjIxMCIgaGVpZ2h0PSIzMCIgcng9IjE4IiBmaWxsPSIjZThmNWVlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSIyMTAiIHk9IjQ4NyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+b2JqZXQgcsOpZWw8L3RleHQ+PC9zdmc+)
*La chaîne numérique : de l’idée au modèle 3D, puis au fichier STL découpé en couches et à la fabrication par une imprimante 3D.*
<!-- /schema -->

Une fois le modèle terminé, on peut :

1. **Exporter** le fichier (par exemple au format **STL**, très utilisé pour l'impression).
2. Le préparer avec un logiciel qui le **découpe en couches** (le *trancheur* / *slicer*).
3. Le **fabriquer** avec une **imprimante 3D** (dépôt de matière couche par couche) ou une
   autre machine à commande numérique.

C'est la **chaîne numérique** : *idée → croquis → modèle 3D (CAO) → fichier → fabrication*.
On parle aussi de **prototypage rapide** quand on fabrique vite un premier exemplaire pour
le tester.

---

## Ce qu'il faut retenir

- La **modélisation volumique** représente un objet **en 3D** avec un logiciel de **CAO**.
- Un modèle 3D a **trois dimensions** (longueur, largeur, hauteur) et des **cotes**
  précises (souvent en **mm**) ; on peut le tourner, le mesurer, le couper.
- On construit un volume à partir de **formes de base** combinées par **extrusion**,
  **révolution**, **union**, **soustraction**, **répétition**.
- Le modèle sert à **visualiser, vérifier, modifier et fabriquer** (imprimante 3D via un
  fichier **STL**) : c'est la **chaîne numérique**.

## Les erreurs à éviter

- **Confondre 2D et 3D.** Un croquis papier est en 2D (longueur, largeur) ; un modèle
  volumique ajoute la **3ᵉ dimension** (hauteur/profondeur) et des cotes exactes.
- **Croire qu'un modèle 3D est juste une image.** C'est un objet numérique **coté** : il
  connaît ses dimensions réelles.
- **Oublier les cotes ou l'unité.** Sans dimensions précises et sans unité (mm), l'objet
  fabriqué ne sera pas à la bonne taille.
- **Penser qu'un trou s'ajoute.** Un trou se crée par **soustraction** de matière, pas en
  ajoutant un volume.
- **Confondre modéliser et fabriquer.** La CAO crée le **modèle** ; c'est l'imprimante 3D
  ou la machine qui **fabrique** l'objet réel.
