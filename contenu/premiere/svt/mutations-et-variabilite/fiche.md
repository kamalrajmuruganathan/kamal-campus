---
id: 1svt-mutations-et-variabilite
titre: "Mutations et variabilité génétique"
voie: generale
niveau: premiere
parcours: svt
matiere: svt
programme: "Première — spécialité SVT (programme officiel)"
duree_lecture_min: 14
prerequis:
  - ADN, gène et information génétique (Seconde)
  - Réplication de l'ADN et cycle cellulaire (Première)
  - Universalité et variabilité de l'ADN (Seconde)
statut: brouillon
relu_par: null
---

# Mutations et variabilité génétique

> Deux jumeaux mis à part, aucun être humain n'a exactement le même ADN qu'un autre.
> D'où vient cette diversité ? De modifications de la séquence de l'ADN — les
> **mutations** — qui surviennent au fil des générations cellulaires. Ce chapitre
> explique leur origine, comment la cellule les limite, et pourquoi elles sont à la
> fois une menace et le **moteur de l'évolution**.

---

## 1. Qu'est-ce qu'une mutation ?

<!-- schema:types -->
![Les trois types de mutations sur l'exemple de la fiche : une base remplacée (substitution), supprimée (délétion) ou ajoutée (insertion).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNzAiIHk9IjU2IiBmb250LXNpemU9IjE0LjUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPnPDqXF1ZW5jZSBkZSBkw6lwYXJ0PC90ZXh0PjxyZWN0IHg9IjE5MiIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIyMTAiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5HPC90ZXh0PjxyZWN0IHg9IjIzOCIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIyNTYiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0PjxyZWN0IHg9IjI4NCIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzMDIiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5UPC90ZXh0PjxyZWN0IHg9IjMzMCIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzNDgiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5UPC90ZXh0PjxyZWN0IHg9IjM3NiIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzOTQiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0PjxyZWN0IHg9IjQyMiIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0NDAiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0PjxyZWN0IHg9IjQ2OCIgeT0iMzIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0ODYiIHk9IjU3IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0Pjx0ZXh0IHg9IjE3MCIgeT0iMTIwIiBmb250LXNpemU9IjE0LjUiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPnN1YnN0aXR1dGlvbjwvdGV4dD48cmVjdCB4PSIxOTIiIHk9Ijk2IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMjEwIiB5PSIxMjEiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkc8L3RleHQ+PHJlY3QgeD0iMjM4IiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjI1NiIgeT0iMTIxIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0PjxyZWN0IHg9IjI4NCIgeT0iOTYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNmYmVjZWMiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiLz48dGV4dCB4PSIzMDIiIHk9IjEyMSIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48cmVjdCB4PSIzMzAiIHk9Ijk2IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMzQ4IiB5PSIxMjEiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlQ8L3RleHQ+PHJlY3QgeD0iMzc2IiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjM5NCIgeT0iMTIxIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0PjxyZWN0IHg9IjQyMiIgeT0iOTYiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0NDAiIHk9IjEyMSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48cmVjdCB4PSI0NjgiIHk9Ijk2IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iNDg2IiB5PSIxMjEiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIxODQiIGZvbnQtc2l6ZT0iMTQuNSIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+ZMOpbMOpdGlvbjwvdGV4dD48cmVjdCB4PSIxOTIiIHk9IjE2MCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjIxMCIgeT0iMTg1IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5HPC90ZXh0PjxyZWN0IHg9IjIzOCIgeT0iMTYwIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMjU2IiB5PSIxODUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHJlY3QgeD0iMjg0IiB5PSIxNjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0IDMiLz48cmVjdCB4PSIzMzAiIHk9IjE2MCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjM0OCIgeT0iMTg1IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5UPC90ZXh0PjxyZWN0IHg9IjM3NiIgeT0iMTYwIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMzk0IiB5PSIxODUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHJlY3QgeD0iNDIyIiB5PSIxNjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0NDAiIHk9IjE4NSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QzwvdGV4dD48cmVjdCB4PSI0NjgiIHk9IjE2MCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjQ4NiIgeT0iMTg1IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5BPC90ZXh0Pjx0ZXh0IHg9IjE3MCIgeT0iMjQ4IiBmb250LXNpemU9IjE0LjUiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPmluc2VydGlvbjwvdGV4dD48cmVjdCB4PSIxOTIiIHk9IjIyNCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjIxMCIgeT0iMjQ5IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5HPC90ZXh0PjxyZWN0IHg9IjIzOCIgeT0iMjI0IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iMjU2IiB5PSIyNDkiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHJlY3QgeD0iMjg0IiB5PSIyMjQiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSIzMDIiIHk9IjI0OSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+VDwvdGV4dD48cmVjdCB4PSIzMzAiIHk9IjIyNCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjM0OCIgeT0iMjQ5IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5UPC90ZXh0PjxyZWN0IHg9IjM3NiIgeT0iMjI0IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZmJlY2VjIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42Ii8+PHRleHQgeD0iMzk0IiB5PSIyNDkiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPlQ8L3RleHQ+PHJlY3QgeD0iNDIyIiB5PSIyMjQiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjUiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48dGV4dCB4PSI0NDAiIHk9IjI0OSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QTwvdGV4dD48cmVjdCB4PSI0NjgiIHk9IjIyNCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiByeD0iNSIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNCIvPjx0ZXh0IHg9IjQ4NiIgeT0iMjQ5IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DPC90ZXh0PjxyZWN0IHg9IjUxNCIgeT0iMjI0IiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHJ4PSI1IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHRleHQgeD0iNTMyIiB5PSIyNDkiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkE8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyOTAiIGZvbnQtc2l6ZT0iMTIuNSIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zdHlsZT0iaXRhbGljIj5lbiByb3VnZSA6IGxhIGJhc2UgbW9kaWZpw6llLCBzdXBwcmltw6llIG91IGFqb3V0w6llPC90ZXh0Pjwvc3ZnPg==)
*Les trois types de mutations sur l'exemple de la fiche : une base remplacée (substitution), supprimée (délétion) ou ajoutée (insertion).*
<!-- /schema -->

Une **mutation** est une **modification de la séquence des nucléotides de l'ADN**.
Elle change le « texte » du gène.

Les principaux types :

| Type de mutation | Ce qui change |
|---|---|
| **Substitution** | une base est remplacée par une autre |
| **Délétion** | une ou plusieurs bases sont supprimées |
| **Insertion (addition)** | une ou plusieurs bases sont ajoutées |

> **Exemple.** La séquence `…GATTACA…` devient `…GACTACA…` (substitution du T par un
> C). Une seule base change, mais le codon concerné peut désormais coder un autre
> acide aminé.

Une mutation est **héréditaire à l'échelle cellulaire** : quand la cellule mutée se
divise, ses cellules filles héritent de la mutation, car elle est copiée avec le
reste de l'ADN lors de la réplication.

---

## 2. L'origine des mutations

Les mutations ont deux origines.

### a) Les erreurs spontanées de la réplication

À chaque division cellulaire, l'ADN est **copié** (réplication). L'enzyme qui copie,
l'**ADN polymérase**, est très fidèle mais **pas parfaite** : elle commet de temps
en temps une erreur d'appariement. Ces erreurs sont **rares mais inévitables**, et
surviennent **sans cause extérieure** : ce sont les mutations **spontanées**.

> **Une conséquence importante.** Comme les mutations spontanées sont inévitables,
> le taux de mutation n'est jamais nul. La variabilité génétique se renouvelle donc
> en permanence, même sans influence de l'environnement.

### b) Les agents mutagènes

Certains facteurs de l'environnement **augmentent** la fréquence des mutations : on
les appelle **agents mutagènes**.

| Agent mutagène | Exemples |
|---|---|
| **Physiques** | rayons UV du Soleil, rayons X, radioactivité |
| **Chimiques** | substances du tabac (benzopyrène), certains polluants |

> ⚠️ **Un agent mutagène ne crée pas des mutations « choisies ».** Il augmente le
> **hasard** des mutations, sans les orienter vers un but. Il n'existe pas de
> mutation « décidée » pour s'adapter.

---

## 3. La réparation de l'ADN : une défense cellulaire

<!-- schema:reparation -->
![Les systèmes de réparation corrigent la plupart des erreurs ; une erreur non réparée avant la réplication devient une mutation transmise aux cellules filles.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzIwIiB5MT0iNTUuNzUiIHgyPSIzMjAiIHkyPSI3MyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzIwLDgzIDMyNSw3MyAzMTUsNzMiIGZpbGw9IiMxNjIzMmUiLz48cG9seWxpbmUgcG9pbnRzPSIxOTAsMTMyIDExMCwxMzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjExMCIgeTE9IjEzMiIgeDI9IjExMCIgeTI9IjIxMC41IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMjIwLjUgMTE1LDIxMC41IDEwNSwyMTAuNSIgZmlsbD0iIzFhN2Y0YiIvPjxyZWN0IHg9IjEzNi41IiB5PSIxMTEuNzUiIHdpZHRoPSIyNyIgaGVpZ2h0PSIxOC4yNSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45NCIvPjx0ZXh0IHg9IjE1MCIgeT0iMTI0IiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm91aTwvdGV4dD48cG9seWxpbmUgcG9pbnRzPSI0NTAsMTMyIDUyMCwxMzIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjUyMCIgeTE9IjEzMiIgeDI9IjUyMCIgeTI9IjIxMC41IiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MjAsMjIwLjUgNTI1LDIxMC41IDUxNSwyMTAuNSIgZmlsbD0iI2MwMmEyYSIvPjxyZWN0IHg9IjQ2Ni41IiB5PSIxMTEuNzUiIHdpZHRoPSIyNyIgaGVpZ2h0PSIxOC4yNSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45NCIvPjx0ZXh0IHg9IjQ4MCIgeT0iMTI0IiBmb250LXNpemU9IjEyLjUiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm5vbjwvdGV4dD48cmVjdCB4PSIxMzIuNiIgeT0iMTkuMjUiIHdpZHRoPSIzNzQuOCIgaGVpZ2h0PSIzMy41IiByeD0iOCIgZmlsbD0iI2ZkZjFlNCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjMyMCIgeT0iNDAuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZXJyZXVyIGRlIHLDqXBsaWNhdGlvbiBvdSBkb21tYWdlIChVViwgdGFiYWPigKYpPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMzIwLDg3IDQ1MCwxMzIgMzIwLDE3NyAxOTAsMTMyIiBmaWxsPSIjZjNlY2ZhIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48dGV4dCB4PSIzMjAiIHk9IjEyOC4xNSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+csOpcGFyw6llIGF2YW50PC90ZXh0Pjx0ZXh0IHg9IjMyMCIgeT0iMTQ1LjY1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5sYSByw6lwbGljYXRpb24gPzwvdGV4dD48cmVjdCB4PSI0MC4yIiB5PSIyMjQuNSIgd2lkdGg9IjEzOS42IiBoZWlnaHQ9IjUxIiByeD0iOCIgZmlsbD0iI2U4ZjVlZSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjExMCIgeT0iMjQ2LjE1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wYXMgZGUgbXV0YXRpb248L3RleHQ+PHRleHQgeD0iMTEwIiB5PSIyNjMuNjUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnRyYW5zbWlzZTwvdGV4dD48cmVjdCB4PSIzOTUuMzIiIHk9IjIyNC41IiB3aWR0aD0iMjQ5LjM2IiBoZWlnaHQ9IjUxIiByeD0iOCIgZmlsbD0iI2ZiZWNlYyIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjUyMCIgeT0iMjQ2LjE1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5tdXRhdGlvbiBmaXjDqWUsPC90ZXh0Pjx0ZXh0IHg9IjUyMCIgeT0iMjYzLjY1IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFuc21pc2UgYXV4IGNlbGx1bGVzIGZpbGxlczwvdGV4dD48L3N2Zz4=)
*Les systèmes de réparation corrigent la plupart des erreurs ; une erreur non réparée avant la réplication devient une mutation transmise aux cellules filles.*
<!-- /schema -->

Si toutes les erreurs restaient, l'ADN se dégraderait vite. Heureusement, la cellule
dispose de **systèmes de réparation** : des enzymes détectent les anomalies de
l'ADN et les corrigent avant la division suivante.

Le bilan dépend de cette course entre dommages et réparation :

| Situation | Résultat |
|---|---|
| Erreur **réparée** | pas de mutation transmise |
| Erreur **non réparée** avant réplication | mutation fixée, transmise aux cellules filles |

> **Pourquoi les UV sont dangereux.** Ils provoquent beaucoup de dommages à l'ADN
> des cellules de la peau. Si les systèmes de réparation sont débordés ou
> défaillants, des mutations s'accumulent — ce qui peut mener à un cancer de la peau.
> C'est le principe de la protection solaire.

---

## 4. Mutations et phénotype : des conséquences variables

Une mutation touche la séquence d'un gène, donc **potentiellement** la protéine
codée. Mais toutes les mutations n'ont pas le même effet.

| Effet sur la protéine / l'organisme | Nom | Exemple |
|---|---|---|
| Aucun changement de protéine (grâce à la redondance du code) | mutation **silencieuse** (neutre) | un codon change mais code le même acide aminé |
| Protéine modifiée, effet défavorable | mutation **défavorable** | drépanocytose (hémoglobine anormale) |
| Protéine modifiée, effet favorable dans un milieu donné | mutation **favorable** | résistance à un antibiotique chez une bactérie |

> **Une même mutation peut être favorable ou défavorable selon le milieu.** La
> résistance à un antibiotique est un avantage… seulement en présence de
> l'antibiotique. C'est **l'environnement** qui décide de l'effet, pas la mutation
> seule.

> ⚠️ **Toutes les mutations ne sont pas nuisibles.** Beaucoup sont neutres, certaines
> sont bénéfiques. L'image « mutation = maladie » est fausse.

---

## 5. Cellules somatiques ou germinales : qui hérite ?

<!-- schema:somatique-germinale -->
![Le devenir d'une mutation dépend de la cellule touchée : seule une mutation germinale peut être transmise aux enfants.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMTMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIxMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxMiIgeT0iMTIiIHdpZHRoPSIzMDMiIGhlaWdodD0iMTA0IiByeD0iOSIgZmlsbD0iI2ZkZjFlNCIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjE2My41IiB5PSIzNCIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+TXV0YXRpb24gc29tYXRpcXVlPC90ZXh0Pjx0ZXh0IHg9IjE2My41IiB5PSI1NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Y2VsbHVsZSBkdSBjb3JwcyAocGVhdSwgZm9pZeKApik8L3RleHQ+PHRleHQgeD0iMTYzLjUiIHk9IjcyLjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj50cmFuc21pc2UgYXV4IGNlbGx1bGVzIGZpbGxlczwvdGV4dD48dGV4dCB4PSIxNjMuNSIgeT0iODguNSIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ZGUgbCdpbmRpdmlkdSBzZXVsZW1lbnQ8L3RleHQ+PHJlY3QgeD0iMzI1IiB5PSIxMiIgd2lkdGg9IjMwMyIgaGVpZ2h0PSIxMDQiIHJ4PSI5IiBmaWxsPSIjZjNlY2ZhIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iNDc2LjUiIHk9IjM0IiBmb250LXNpemU9IjE1IiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5NdXRhdGlvbiBnZXJtaW5hbGU8L3RleHQ+PHRleHQgeD0iNDc2LjUiIHk9IjU2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jZWxsdWxlIHJlcHJvZHVjdHJpY2U8L3RleHQ+PHRleHQgeD0iNDc2LjUiIHk9IjcyLjI1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4ob3UgcXVpIGxhIHByb2R1aXQpPC90ZXh0Pjx0ZXh0IHg9IjQ3Ni41IiB5PSI4OC41IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wZXV0IHBhc3NlciDDoCBsYSBkZXNjZW5kYW5jZTwvdGV4dD48L3N2Zz4=)
*Le devenir d'une mutation dépend de la cellule touchée : seule une mutation germinale peut être transmise aux enfants.*
<!-- /schema -->

Le devenir d'une mutation dépend de la cellule touchée.

| Cellule mutée | Transmission |
|---|---|
| **Somatique** (cellule du corps : peau, foie…) | transmise aux cellules filles de l'individu **seulement** ; non transmise aux enfants |
| **Germinale** (cellule reproductrice ou qui la produit) | peut être **transmise à la descendance** |

> **Conséquence.** Une mutation dans une cellule de peau causée par les UV reste
> dans cet individu. Seule une mutation d'une cellule germinale peut passer aux
> générations suivantes et participer à l'évolution de l'espèce.

---

## 6. Les mutations, moteur de la biodiversité et de l'évolution

Les mutations sont la **source première de la variabilité génétique** : elles créent
de **nouveaux allèles** (nouvelles versions d'un gène). Cette diversité est la
matière première sur laquelle agit l'évolution.

$$\text{mutations} \Rightarrow \text{nouveaux allèles} \Rightarrow \text{diversité génétique} \Rightarrow \text{évolution}$$

- Sans mutation, aucun nouvel allèle : la diversité génétique n'apparaîtrait pas.
- Le hasard des mutations, combiné au **tri par le milieu** (sélection naturelle),
  fait évoluer les populations au fil des générations.

> **À retenir sur le sens du hasard.** Les mutations surviennent au hasard, **avant**
> et **indépendamment** de tout besoin. Le milieu ne les provoque pas « sur mesure »
> ; il trie ensuite celles qui se révèlent avantageuses.

---

## 7. À retenir absolument

| | |
|---|---|
| Mutation | modification de la **séquence de l'ADN** |
| Types | substitution, délétion, insertion |
| Origine spontanée | erreurs **rares mais inévitables** de la réplication |
| Agents mutagènes | UV, rayons X, radioactivité, substances chimiques → **plus** de mutations |
| Réparation | enzymes qui corrigent les dommages avant division |
| Effets | silencieuse, favorable ou défavorable **selon le milieu** |
| Somatique vs germinale | seule la mutation **germinale** passe à la descendance |
| Rôle évolutif | source de **nouveaux allèles** → diversité → évolution |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que toute mutation est nuisible** : beaucoup sont neutres, certaines
   favorables.
2. **Penser qu'un agent mutagène crée des mutations utiles à la demande** : il
   augmente le **hasard**, il n'oriente rien.
3. **Confondre spontané et provoqué** : les mutations spontanées viennent des erreurs
   de réplication, sans cause extérieure.
4. **Oublier les systèmes de réparation** : la plupart des dommages sont corrigés
   avant de devenir des mutations.
5. **Faire hériter les enfants d'une mutation somatique** : seule une mutation
   **germinale** se transmet à la descendance.
6. **Dire qu'une mutation est toujours favorable ou toujours défavorable** : son
   effet dépend souvent du **milieu**.
7. **Croire que le milieu provoque des mutations adaptatives** : le milieu **trie**,
   il ne commande pas la mutation.
8. **Réduire les mutations à un accident négatif** : elles sont la **source** de la
   biodiversité et de l'évolution.

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application
Programme : Première spécialité SVT, thème 1 « La Terre, la vie et l'organisation du
vivant », partie « Transmission, variation et expression du patrimoine génétique »,
sous-partie « La variabilité de l'ADN / mutations ».
Notions traitées : définition d'une mutation (substitution, délétion, insertion),
origine spontanée (erreurs de réplication, ADN polymérase non parfaite, inévitable donc
taux non nul) et provoquée (agents mutagènes physiques et chimiques), systèmes de
réparation de l'ADN, conséquences phénotypiques variables (silencieuse/favorable/
défavorable selon milieu), cellules somatiques vs germinales et transmission, rôle des
mutations comme source d'allèles nouveaux et moteur de l'évolution, caractère aléatoire
et non orienté des mutations (le milieu trie mais ne provoque pas).
Exemples choisis dans le programme : drépanocytose, résistance bactérienne aux
antibiotiques, cancers cutanés liés aux UV — ces derniers sont approfondis dans le
chapitre « Variation génétique et santé ».
Statut : brouillon, non relu.
-->
