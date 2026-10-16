---
id: 1nsi-representation-des-donnees
titre: "Représentation des données (binaire, entiers, texte)"
voie: generale
niveau: premiere
parcours: nsi
matiere: nsi
programme: "Première — spécialité NSI (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Notion de nombre entier et de base de numération (collège)
  - Bases de la programmation Python (variables, types)
statut: brouillon
relu_par: null
---

# Représentation des données (binaire, entiers, texte)

> Dans une machine, **tout est codé en binaire** : une suite de 0 et de 1.
> Ce chapitre explique comment on représente les entiers (naturels puis relatifs),
> pourquoi les réels ne sont qu'**approchés**, et comment un texte devient une
> suite d'octets.

---

# 1. Bit, octet et binaire

<!-- schema:poids-binaire -->
![En binaire, chaque position vaut une puissance de 2 : 1011 en base 2 vaut 8 + 0 + 2 + 1 = 11 en base 10.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIxNDgiIHk9IjQ2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5wb2lkczwvdGV4dD48dGV4dCB4PSIxNDgiIHk9IjkyIiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIj5iaXQ8L3RleHQ+PHRleHQgeD0iMTQ4IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPnZhbGV1cjwvdGV4dD48dGV4dCB4PSIxOTQiIHk9IjQ2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4ywrMgPSA4PC90ZXh0PjxyZWN0IHg9IjE2NiIgeT0iNjYiIHdpZHRoPSI1NiIgaGVpZ2h0PSIzOCIgcng9IjQiIGZpbGw9IiNlZWYzZmIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIxOTQiIHk9IjkyIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0Pjx0ZXh0IHg9IjE5NCIgeT0iMTQwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xIMOXIDg8L3RleHQ+PHRleHQgeD0iMjU4IiB5PSI0NiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MsKyID0gNDwvdGV4dD48cmVjdCB4PSIyMzAiIHk9IjY2IiB3aWR0aD0iNTYiIGhlaWdodD0iMzgiIHJ4PSI0IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjU4IiB5PSI5MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MDwvdGV4dD48dGV4dCB4PSIyNTgiIHk9IjE0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MCDDlyA0PC90ZXh0Pjx0ZXh0IHg9IjMyMiIgeT0iNDYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjLCuSA9IDI8L3RleHQ+PHJlY3QgeD0iMjk0IiB5PSI2NiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjM4IiByeD0iNCIgZmlsbD0iI2VlZjNmYiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjMyMiIgeT0iOTIiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHRleHQgeD0iMzIyIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEgw5cgMjwvdGV4dD48dGV4dCB4PSIzODYiIHk9IjQ2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4y4oGwID0gMTwvdGV4dD48cmVjdCB4PSIzNTgiIHk9IjY2IiB3aWR0aD0iNTYiIGhlaWdodD0iMzgiIHJ4PSI0IiBmaWxsPSIjZWVmM2ZiIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMzg2IiB5PSI5MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48dGV4dCB4PSIzODYiIHk9IjE0MCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MSDDlyAxPC90ZXh0Pjx0ZXh0IHg9IjI3NSIgeT0iMTgwIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xMDEx4oKCID0gOCArIDAgKyAyICsgMSA9IDEx4oKB4oKAPC90ZXh0Pjwvc3ZnPg==)
*En binaire, chaque position vaut une puissance de 2 : 1011 en base 2 vaut 8 + 0 + 2 + 1 = 11 en base 10.*
<!-- /schema -->

Un **bit** (*binary digit*) est la plus petite information : il vaut **0 ou 1**.
Un **octet** (*byte* en anglais) est un groupe de **8 bits**. Avec 8 bits, on
peut représenter $2^8 = 256$ valeurs différentes (de 0 à 255).

Le système **binaire** est un système de numération en **base 2** : chaque
position vaut une puissance de 2, exactement comme en base 10 chaque position
vaut une puissance de 10.

$$1011_2 = 1\times 8 + 0\times 4 + 1\times 2 + 1\times 1 = 11_{10}$$

**Retenir les puissances de 2 utiles :** 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

---

# 2. Représenter un entier naturel

## Convertir binaire → décimal

On additionne les puissances de 2 correspondant aux bits à 1.

## Convertir décimal → binaire

<!-- schema:divisions-successives -->
![Divisions successives de 13 par 2 : on lit les restes de bas en haut, ce qui donne 1101.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMjQ4IiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIyNDgiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIzMCIgeT0iMjIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+Q29udmVyc2lvbiBkZSAxMyBlbiBiaW5haXJlPC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSI2MiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij4xMyDDtyAyID0gNjwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjYyIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnJlc3RlPC90ZXh0PjxyZWN0IHg9IjIzMiIgeT0iNDIiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzMCIgcng9IjQiIGZpbGw9IiNmZGYwZTMiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIyNDkiIHk9IjYzIiBmb250LXNpemU9IjE4IiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0Pjx0ZXh0IHg9IjQwIiB5PSIxMDQiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+NiDDtyAyID0gMzwvdGV4dD48dGV4dCB4PSIxODAiIHk9IjEwNCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzViNmI3YSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5yZXN0ZTwvdGV4dD48cmVjdCB4PSIyMzIiIHk9Ijg0IiB3aWR0aD0iMzQiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjQ5IiB5PSIxMDUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHRleHQgeD0iNDAiIHk9IjE0NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij4zIMO3IDIgPSAxPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMTQ2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnJlc3RlPC90ZXh0PjxyZWN0IHg9IjIzMiIgeT0iMTI2IiB3aWR0aD0iMzQiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjQ5IiB5PSIxNDciIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHRleHQgeD0iNDAiIHk9IjE4OCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij4xIMO3IDIgPSAwPC90ZXh0Pjx0ZXh0IHg9IjE4MCIgeT0iMTg4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ic3RhcnQiPnJlc3RlPC90ZXh0PjxyZWN0IHg9IjIzMiIgeT0iMTY4IiB3aWR0aD0iMzQiIGhlaWdodD0iMzAiIHJ4PSI0IiBmaWxsPSIjZmRmMGUzIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjQ5IiB5PSIxODkiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PGxpbmUgeDE9IjI5MCIgeTE9IjE4MyIgeDI9IjI5MCIgeTI9IjY3IiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjI5MCw1NyAyODUsNjcgMjk1LDY3IiBmaWxsPSIjMWE3ZjRiIi8+PHRleHQgeD0iMzA0IiB5PSIxMTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+b24gbGl0PC90ZXh0Pjx0ZXh0IHg9IjMwNCIgeT0iMTM1IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmRlIGJhcyBlbiBoYXV0PC90ZXh0Pjx0ZXh0IHg9IjI2MCIgeT0iMjMwIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xM+KCgeKCgCA9IDExMDHigoI8L3RleHQ+PC9zdmc+)
*Divisions successives de 13 par 2 : on lit les restes de bas en haut, ce qui donne 1101.*
<!-- /schema -->

Méthode des **divisions successives par 2** : on note les restes, puis on les lit
**de bas en haut**.

Exemple pour 13 : 13/2 = 6 reste **1** ; 6/2 = 3 reste **0** ; 3/2 = 1 reste **1** ;
1/2 = 0 reste **1**. On lit de bas en haut : $13_{10} = 1101_2$.

En Python :

```python
bin(13)   # '0b1101'
int('1101', 2)  # 13
```

## Nombre de valeurs codables

Avec $n$ bits, on code $2^n$ valeurs, soit les entiers de $0$ à $2^n - 1$.
Avec 4 bits : de 0 à 15. Avec 8 bits : de 0 à 255.

---

# 3. L'hexadécimal (base 16)

L'**hexadécimal** utilise 16 symboles : `0 1 2 3 4 5 6 7 8 9 A B C D E F`
(A vaut 10, …, F vaut 15). Son intérêt : **un chiffre hexadécimal code exactement
4 bits**, donc un octet tient sur **2 chiffres hexa**. C'est plus court et plus
lisible pour les humains (couleurs web `#FF8800`, adresses mémoire…).

$$\text{A2}_{16} = 10\times 16 + 2 = 162_{10} = 1010\,0010_2$$

En Python : `hex(162)` renvoie `'0xa2'`.

---

# 4. Représenter un entier relatif : le complément à deux

<!-- schema:complement-a-deux -->
![Codage de −5 sur 8 bits en complément à deux : on inverse tous les bits de 5, puis on ajoute 1 ; le bit de poids fort vaut 1 (négatif).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyMCIgeT0iNTIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+NSBlbiBiaW5haXJlPC90ZXh0PjxyZWN0IHg9IjI1MCIgeT0iMzAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjI2OCIgeT0iNTQiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHJlY3QgeD0iMjkwIiB5PSIzMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iMzA4IiB5PSI1NCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MDwvdGV4dD48cmVjdCB4PSIzMzAiIHk9IjMwIiB3aWR0aD0iMzYiIGhlaWdodD0iMzQiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSIzNDgiIHk9IjU0IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0PjxyZWN0IHg9IjM3MCIgeT0iMzAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjM4OCIgeT0iNTQiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHJlY3QgeD0iNDEwIiB5PSIzMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iNDI4IiB5PSI1NCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MDwvdGV4dD48cmVjdCB4PSI0NTAiIHk9IjMwIiB3aWR0aD0iMzYiIGhlaWdodD0iMzQiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSI0NjgiIHk9IjU0IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0PjxyZWN0IHg9IjQ5MCIgeT0iMzAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjUwOCIgeT0iNTQiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHJlY3QgeD0iNTMwIiB5PSIzMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iNTQ4IiB5PSI1NCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48dGV4dCB4PSI0MTAiIHk9Ijg2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7ihpMgb24gaW52ZXJzZSB0b3VzIGxlcyBiaXRzPC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSIxMTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMjVlMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC13ZWlnaHQ9IjcwMCI+Yml0cyBpbnZlcnPDqXM8L3RleHQ+PHJlY3QgeD0iMjUwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMjY4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iMjkwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMzA4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iMzMwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMzQ4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iMzcwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iMzg4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iNDEwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iNDI4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iNDUwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iNDY4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHJlY3QgeD0iNDkwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iNTA4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iNTMwIiB5PSI5NiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZkZjBlMyIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iNTQ4IiB5PSIxMjAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjA8L3RleHQ+PHRleHQgeD0iNDEwIiB5PSIxNTIiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxYTdmNGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPuKGkyBvbiBham91dGUgMTwvdGV4dD48dGV4dCB4PSIyMCIgeT0iMTg0IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmNvZGFnZSBkZSDiiJI1PC90ZXh0PjxyZWN0IHg9IjI1MCIgeT0iMTYyIiB3aWR0aD0iMzYiIGhlaWdodD0iMzQiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSIyNjgiIHk9IjE4NiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48cmVjdCB4PSIyOTAiIHk9IjE2MiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iMzA4IiB5PSIxODYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iMzMwIiB5PSIxNjIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjM0OCIgeT0iMTg2IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0PjxyZWN0IHg9IjM3MCIgeT0iMTYyIiB3aWR0aD0iMzYiIGhlaWdodD0iMzQiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSIzODgiIHk9IjE4NiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48cmVjdCB4PSI0MTAiIHk9IjE2MiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiM4YTk5YTgiIHN0cm9rZS13aWR0aD0iMS4yIi8+PHRleHQgeD0iNDI4IiB5PSIxODYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iNDUwIiB5PSIxNjIiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNCIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjOGE5OWE4IiBzdHJva2Utd2lkdGg9IjEuMiIvPjx0ZXh0IHg9IjQ2OCIgeT0iMTg2IiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4wPC90ZXh0PjxyZWN0IHg9IjQ5MCIgeT0iMTYyIiB3aWR0aD0iMzYiIGhlaWdodD0iMzQiIHJ4PSIzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48dGV4dCB4PSI1MDgiIHk9IjE4NiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48cmVjdCB4PSI1MzAiIHk9IjE2MiIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM0IiByeD0iMyIgZmlsbD0iI2U4ZjVlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iMi4yIi8+PHRleHQgeD0iNTQ4IiB5PSIxODYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHRleHQgeD0iMjUwIiB5PSIxOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LXdlaWdodD0iNzAwIj5iaXQgZGUgc2lnbmU8L3RleHQ+PHRleHQgeD0iMzAwIiB5PSIyMjYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+dsOpcmlmaWNhdGlvbiA6IDExMTExMDExICsgMDAwMDAxMDEgPSAxIDAwMDAgMDAwMCDihpIgc3VyIDggYml0cywgb24gZ2FyZGUgMDAwMCAwMDAwID0gMDwvdGV4dD48L3N2Zz4=)
*Codage de −5 sur 8 bits en complément à deux : on inverse tous les bits de 5, puis on ajoute 1 ; le bit de poids fort vaut 1 (négatif).*
<!-- /schema -->

Pour coder les nombres **négatifs**, on utilise la méthode du **complément à
deux** sur un nombre fixe de bits (par exemple 8). Le bit le plus à gauche (bit
de **poids fort**) sert de **signe** : 0 pour positif, 1 pour négatif.

Pour obtenir le codage de $-x$ sur 8 bits : on part du codage de $x$, on **inverse
tous les bits**, puis on **ajoute 1**.

Exemple, coder $-5$ sur 8 bits : $5 = 0000\,0101$ → inversion $1111\,1010$ →
+1 → $1111\,1011$.

Sur 8 bits en complément à deux, on représente les entiers de **$-128$ à $+127$**.

---

# 5. Dépassement de capacité (overflow)

Le nombre de bits est **fixe**. Si un calcul dépasse la plus grande valeur
codable, on obtient un **dépassement de capacité** (*overflow*) et un résultat
faux. Sur 8 bits non signés, $255 + 1$ « repasse » à 0.

> En Python, le type `int` a une **précision illimitée** (il n'y a pas
> d'overflow), mais ce n'est pas le cas dans la plupart des langages ni au niveau
> matériel : la notion reste essentielle.

---

# 6. Booléens et représentation des réels

Un **booléen** ne prend que deux valeurs, `True` (1) et `False` (0). On les combine
avec les opérateurs logiques `and`, `or`, `not`.

Les nombres **réels** sont représentés en machine par des **nombres à virgule
flottante** (`float`), sur un nombre fini de bits. Cette représentation est
**approchée** : certains nombres décimaux simples ne se codent pas exactement.

```python
0.1 + 0.2      # 0.30000000000000004
0.1 + 0.2 == 0.3   # False
```

**Conséquence :** on ne teste jamais l'égalité stricte entre deux flottants ; on
vérifie que leur différence est très petite.

---

# 7. Représenter un texte

Un ordinateur ne stocke pas des lettres mais des **nombres**. Une **table de
codage** associe à chaque caractère un nombre entier.

- **ASCII** : table historique sur **7 bits**, soit 128 caractères (lettres non
  accentuées, chiffres, ponctuation). Exemple : `'A'` vaut 65, `'a'` vaut 97,
  `'0'` vaut 48. Les majuscules et minuscules sont décalées de 32.
- **Unicode** : table universelle qui attribue un numéro (*code point*) à
  **tous** les caractères de toutes les langues (accents, `é`, `€`, emojis…).
- **UTF-8** : la manière la plus courante d'**encoder** Unicode en octets. Il est
  compatible ASCII (un caractère ASCII tient sur 1 octet) et utilise 1 à 4 octets
  selon le caractère.

En Python :

```python
ord('A')   # 65
chr(97)    # 'a'
```

---

# Ce qu'il faut retenir

- Un **bit** vaut 0 ou 1 ; un **octet** = 8 bits code $2^8 = 256$ valeurs.
- Avec $n$ bits, on code les naturels de $0$ à $2^n - 1$.
- On convertit décimal → binaire par **divisions successives par 2**.
- L'**hexadécimal** : 1 chiffre = 4 bits, 1 octet = 2 chiffres hexa.
- Les **entiers relatifs** se codent en **complément à deux** ; sur 8 bits :
  de $-128$ à $+127$.
- Les **float** sont **approchés** : jamais de test d'égalité stricte.
- Texte : **ASCII** (7 bits, 128 caractères), **Unicode** (numéro universel),
  **UTF-8** (encodage en octets, compatible ASCII).

# Les erreurs à éviter

- Confondre **bit** et **octet** (1 octet = 8 bits).
- Croire qu'avec $n$ bits on code jusqu'à $2^n$ : le **maximum est $2^n - 1$**
  (le 0 compte).
- Écrire `if x == 0.3` avec des flottants.
- Confondre **Unicode** (la table de numéros) et **UTF-8** (une façon de coder
  ces numéros en octets).
