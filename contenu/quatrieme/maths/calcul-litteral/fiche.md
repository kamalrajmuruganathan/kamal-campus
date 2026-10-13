---
id: 4e-math-calcul-litteral
titre: "Calcul littéral et algébrique"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Calcul littéral — réduire, développer, factoriser (5e)
  - Distributivité simple k(a + b) = ka + kb (5e)
  - Équations du type ax = c et x + b = c (5e)
  - Opérations sur les nombres relatifs (4e)
statut: brouillon
relu_par: null
---

# Calcul littéral et algébrique

> En 5e, la lettre servait surtout à **écrire** une règle générale. En 4e, elle sert à
> **chercher** : tu poses une équation, tu la résous, et le nombre inconnu tombe tout
> seul. C'est le moment où l'algèbre devient un outil pour résoudre des problèmes.

---

## 1. Ce que tu sais déjà

Tout le chapitre de 5e (*Calcul littéral*, `5e-math-calcul-litteral`) reste valable :
conventions d'écriture, réduction, développement, factorisation, test d'une égalité,
contre-exemple. **Relis-le si l'un de ces mots te fait hésiter** — la 4e s'appuie
dessus sans y revenir. Ce qu'elle ajoute : produire une **formule** (§3), **démontrer**
(§5), **résoudre** une équation (§6), **mettre un problème en équation** (§7).

---

## 2. Les automatismes à avoir dans les doigts

$$\boxed{1 \times x = x \quad x + x = 2x \quad x \times x = x^2 \quad 3x + 2x = 5x
\quad 3x \times 2x = 6x^2}$$

> ⚠️ **Compare les deux dernières.** En **additionnant**, le $x$ reste un $x$. En
> **multipliant**, les nombres se multiplient ($3 \times 2 = 6$) **et** les lettres
> aussi ($x \times x = x^2$).

### Traduire une phrase en expression

| double | triple | moitié | successeur | prédécesseur | carré |
|---|---|---|---|---|---|
| $2x$ | $3x$ | $\dfrac{x}{2}$ | $x+1$ | $x-1$ | $x^2$ |

> **Exemple.** *« Le double du successeur de $x$ »* s'écrit $2(x+1)$ — et **pas**
> $2x + 1$, qui est le successeur du double. La parenthèse n'est pas décorative.

### Donner la valeur d'une expression

On remplace la lettre par sa valeur, puis on calcule avec les priorités.

> Pour $x = -3$ : $\; 5x + 4 = 5 \times (-3) + 4 = -15 + 4 = -11$.

---

## 3. Produire une formule et tester sa vraisemblance

Une **formule** décrit une situation pour **toutes** les valeurs possibles.

> **Exemple.** Rectangle de largeur $4$ et de longueur $x + 3$ :
> $$\mathcal{A} = 4(x+3) = 4x + 12 \qquad \mathcal{P} = 2(x+3) + 2 \times 4 = 2x + 14$$

**Tester sa vraisemblance**, c'est vérifier la formule sur une valeur simple.

> **Le réflexe qui sauve.** Prends $x = 1$ : le rectangle mesure $4$ sur $4$, son aire
> vaut $16$, et la formule donne $4 \times 1 + 12 = 16$ ✓. Si les deux résultats
> avaient différé, la formule serait fausse.

Deux formules à connaître, avec $k$ entier :

$$\boxed{\text{pair} = 2k \qquad\qquad \text{impair} = 2k + 1}$$

> **Vérifie** : pour $k = 0, 1, 2, 3$, l'expression $2k+1$ donne $1, 3, 5, 7$.

---

## 4. Développer et factoriser

$$\boxed{k(a + b) = ka + kb} \qquad\qquad \boxed{k(a - b) = ka - kb}$$

**Développer** va du produit vers la somme, **factoriser** fait l'inverse.

> **Développer.** $5(2x - 3) = 10x - 15$ ; et avec un relatif,
> $-3(x - 5) = -3x + 15$ car $(-3) \times (-5) = +15$.
>
> **Factoriser.** $12x + 18 = 6 \times 2x + 6 \times 3 = 6(2x + 3)$.
> Le facteur commun peut contenir la lettre : $x^2 + 7x = x(x + 7)$.

---

## 5. Démontrer avec le calcul algébrique

<!-- schema:consecutifs -->
![En déplaçant une unité de la troisième barre vers la première, n, n + 1 et n + 2 deviennent trois barres égales à n + 1 : la somme vaut 3(n + 1).](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjMwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyMzAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSI2MCIgeT0iNDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjYiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTIwIiB5PSI1OCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bjwvdGV4dD48cmVjdCB4PSI2MCIgeT0iODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjYiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMTIwIiB5PSI5OCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bjwvdGV4dD48cmVjdCB4PSIxODAiIHk9IjgwIiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC42NSIgc3Ryb2tlPSIjYzI1ZTAwIiBzdHJva2Utd2lkdGg9IjEuNiIvPjx0ZXh0IHg9IjE5MyIgeT0iOTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iNjAiIHk9IjEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxMjAiIHk9IjEzOCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bjwvdGV4dD48cmVjdCB4PSIxODAiIHk9IjEyMCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuNjUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxOTMiIHk9IjEzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48cmVjdCB4PSIyMDYiIHk9IjEyMCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjMWE3ZjRiIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMyIvPjx0ZXh0IHg9IjIxOSIgeT0iMTM4IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4xPC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSI1OCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9IjcwMCI+bjwvdGV4dD48dGV4dCB4PSI1MCIgeT0iOTgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPm4gKyAxPC90ZXh0Pjx0ZXh0IHg9IjUwIiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIGZvbnQtd2VpZ2h0PSI3MDAiPm4gKyAyPC90ZXh0PjxwYXRoIGQ9Ik0gMjE5IDEyMCBDIDI1OCA3MCAyNDUgNDAgMjA4LjYgNDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlnb24gcG9pbnRzPSIyMDcuMyw0NiAyMTksMzkgMjE3LjcsNTIiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iMzAwIiB5MT0iOTAiIHgyPSIzNDAiIHkyPSI5MCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIzNTAsOTAgMzQwLDg1IDM0MCw5NSIgZmlsbD0iIzE2MjMyZSIvPjxyZWN0IHg9IjM4MCIgeT0iNDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjYiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4zIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iNDQwIiB5PSI1OCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bjwvdGV4dD48cmVjdCB4PSI1MDAiIHk9IjQwIiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IiMxYTdmNGIiIGZpbGwtb3BhY2l0eT0iMC42NSIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjEuNiIvPjx0ZXh0IHg9IjUxMyIgeT0iNTgiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjE8L3RleHQ+PHJlY3QgeD0iMzgwIiB5PSI4MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI0NDAiIHk9Ijk4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5uPC90ZXh0PjxyZWN0IHg9IjUwMCIgeT0iODAiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjY1IiBzdHJva2U9IiNjMjVlMDAiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iNTEzIiB5PSI5OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48cmVjdCB4PSIzODAiIHk9IjEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjMiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI0NDAiIHk9IjEzOCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bjwvdGV4dD48cmVjdCB4PSI1MDAiIHk9IjEyMCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuNjUiIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI1MTMiIHk9IjEzOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD48dGV4dCB4PSI1MzgiIHk9Ijk4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPjMgYmFycmVzPC90ZXh0Pjx0ZXh0IHg9IjUzOCIgeT0iMTE4IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtd2VpZ2h0PSI3MDAiPmlkZW50aXF1ZXM8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIxOTYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPm4gKyAobiArIDEpICsgKG4gKyAyKSA9IDNuICsgMyA9IDMobiArIDEpPC90ZXh0Pjx0ZXh0IHg9IjMzMCIgeT0iMjIwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNWI2YjdhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5sYSBzb21tZSBlc3QgdW4gbXVsdGlwbGUgZGUgMzwvdGV4dD48L3N2Zz4=)
*En déplaçant une unité de la troisième barre vers la première, n, n + 1 et n + 2 deviennent trois barres égales à n + 1 : la somme vaut 3(n + 1).*
<!-- /schema -->

C'est l'usage le plus fort de la lettre : prouver qu'une propriété est vraie pour
**tous** les nombres, pas seulement sur quelques exemples.

> **Propriété.** *La somme de trois entiers consécutifs est un multiple de $3$.*
>
> Appelons $n$ le premier entier ; les trois s'écrivent $n$, $n+1$, $n+2$.
> $$n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$$
> Comme $n+1$ est un entier, la somme est un multiple de $3$. ∎

> **Propriété.** *La somme de deux nombres impairs est paire.* Ils s'écrivent $2k+1$ et
> $2k'+1$ — deux lettres, car ce sont deux nombres différents.
> $$(2k+1) + (2k'+1) = 2k + 2k' + 2 = 2(k + k' + 1)$$
> C'est le double d'un entier : la somme est paire. ∎

> ⚠️ **La factorisation est le cœur de la preuve.** Tant que tu écris $3n+3$, tu ne
> vois rien. Dès que tu écris $3(n+1)$, le multiple de $3$ saute aux yeux.

---

## 6. Résoudre une équation du premier degré $ax + b = c$

<!-- schema:balance -->
![L’équation 5x + 3 = 23 vue comme une balance : on enlève 3 de chaque côté, puis on divise les deux côtés par 5, et l’on trouve x = 4.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2ODAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY4MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48cG9seWdvbiBwb2ludHM9IjExMywxMDAgMTAwLDE4MiAxMjYsMTgyIiBmaWxsPSIjZGZlNmVlIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48bGluZSB4MT0iNDciIHkxPSIxMDAiIHgyPSIxNzkiIHkyPSIxMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTUiIHkxPSIxMDAiIHgyPSIyMCIgeTI9IjE0NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjU1IiB5MT0iMTAwIiB4Mj0iOTAiIHkyPSIxNDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMTQgMTQ2IFEgNTUgMTY0IDk2IDE0NiBaIiBmaWxsPSIjZThlZGYzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjE3MSIgeTE9IjEwMCIgeDI9IjEzNiIgeTI9IjE0NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE3MSIgeTE9IjEwMCIgeDI9IjIwNiIgeTI9IjE0NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAxMzAgMTQ2IFEgMTcxIDE2NCAyMTIgMTQ2IFoiIGZpbGw9IiNlOGVkZjMiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cmVjdCB4PSIxNi41IiB5PSIxMjIiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyNCIgcng9IjIiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC45Ii8+PHRleHQgeD0iMjEuNSIgeT0iMTM4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj54PC90ZXh0PjxyZWN0IHg9IjI4LjUiIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIzMy41IiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPng8L3RleHQ+PHJlY3QgeD0iNDAuNSIgeT0iMTIyIiB3aWR0aD0iMTAiIGhlaWdodD0iMjQiIHJ4PSIyIiBmaWxsPSIjMWY2ZmViIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjx0ZXh0IHg9IjQ1LjUiIHk9IjEzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+eDwvdGV4dD48cmVjdCB4PSI1Mi41IiB5PSIxMjIiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyNCIgcng9IjIiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC45Ii8+PHRleHQgeD0iNTcuNSIgeT0iMTM4IiBmb250LXNpemU9IjEyIiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj54PC90ZXh0PjxyZWN0IHg9IjY0LjUiIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSI2OS41IiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPng8L3RleHQ+PHJlY3QgeD0iNzYuNSIgeT0iMTI5IiB3aWR0aD0iMTciIGhlaWdodD0iMTciIHJ4PSIyIiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuOSIvPjx0ZXh0IHg9Ijg1IiB5PSIxNDEuNSIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzwvdGV4dD48cmVjdCB4PSIxNTYiIHk9IjExOCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjI4IiByeD0iMiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIxNzEiIHk9IjEzNiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjM8L3RleHQ+PHRleHQgeD0iMTEzIiB5PSIyMTYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjV4ICsgMyA9IDIzPC90ZXh0PjxsaW5lIHgxPSIyMTQiIHkxPSI5MiIgeDI9IjIzMCIgeTI9IjkyIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjIzOCw5MiAyMzAsODggMjMwLDk2IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMjI2IiB5PSI3NiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+4oiSIDM8L3RleHQ+PHBvbHlnb24gcG9pbnRzPSIzNDAsMTAwIDMyNywxODIgMzUzLDE4MiIgZmlsbD0iI2RmZTZlZSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGxpbmUgeDE9IjI3NCIgeTE9IjEwMCIgeDI9IjQwNiIgeTI9IjEwMCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODIiIHkxPSIxMDAiIHgyPSIyNDciIHkyPSIxNDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIyODIiIHkxPSIxMDAiIHgyPSIzMTciIHkyPSIxNDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gMjQxIDE0NiBRIDI4MiAxNjQgMzIzIDE0NiBaIiBmaWxsPSIjZThlZGYzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PGxpbmUgeDE9IjM5OCIgeTE9IjEwMCIgeDI9IjM2MyIgeTI9IjE0NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjM5OCIgeTE9IjEwMCIgeDI9IjQzMyIgeTI9IjE0NiIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTSAzNTcgMTQ2IFEgMzk4IDE2NCA0MzkgMTQ2IFoiIGZpbGw9IiNlOGVkZjMiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cmVjdCB4PSIyNTMiIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIyNTgiIHk9IjEzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+eDwvdGV4dD48cmVjdCB4PSIyNjUiIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIyNzAiIHk9IjEzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+eDwvdGV4dD48cmVjdCB4PSIyNzciIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIyODIiIHk9IjEzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+eDwvdGV4dD48cmVjdCB4PSIyODkiIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIyOTQiIHk9IjEzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+eDwvdGV4dD48cmVjdCB4PSIzMDEiIHk9IjEyMiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzFmNmZlYiIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIzMDYiIHk9IjEzOCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+eDwvdGV4dD48cmVjdCB4PSIzODMiIHk9IjEyMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjI2IiByeD0iMiIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjkiLz48dGV4dCB4PSIzOTgiIHk9IjEzNyIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MjA8L3RleHQ+PHRleHQgeD0iMzQwIiB5PSIyMTYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjV4ID0gMjA8L3RleHQ+PGxpbmUgeDE9IjQ0MSIgeTE9IjkyIiB4Mj0iNDU3IiB5Mj0iOTIiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNDY1LDkyIDQ1Nyw4OCA0NTcsOTYiIGZpbGw9IiNjMDJhMmEiLz48dGV4dCB4PSI0NTMiIHk9Ijc2IiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj7DtyA1PC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iNTY3LDEwMCA1NTQsMTgyIDU4MCwxODIiIGZpbGw9IiNkZmU2ZWUiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxsaW5lIHgxPSI1MDEiIHkxPSIxMDAiIHgyPSI2MzMiIHkyPSIxMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTA5IiB5MT0iMTAwIiB4Mj0iNDc0IiB5Mj0iMTQ2IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNTA5IiB5MT0iMTAwIiB4Mj0iNTQ0IiB5Mj0iMTQ2IiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNIDQ2OCAxNDYgUSA1MDkgMTY0IDU1MCAxNDYgWiIgZmlsbD0iI2U4ZWRmMyIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxsaW5lIHgxPSI2MjUiIHkxPSIxMDAiIHgyPSI1OTAiIHkyPSIxNDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSI2MjUiIHkxPSIxMDAiIHgyPSI2NjAiIHkyPSIxNDYiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0gNTg0IDE0NiBRIDYyNSAxNjQgNjY2IDE0NiBaIiBmaWxsPSIjZThlZGYzIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iNTA0IiB5PSIxMjIiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyNCIgcng9IjIiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC45Ii8+PHRleHQgeD0iNTA5IiB5PSIxMzgiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPng8L3RleHQ+PHJlY3QgeD0iNjE1IiB5PSIxMjYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjIiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC45Ii8+PHRleHQgeD0iNjI1IiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPjQ8L3RleHQ+PHRleHQgeD0iNTY3IiB5PSIyMTYiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPnggPSA0PC90ZXh0Pjx0ZXh0IHg9IjM0MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM1YjZiN2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9uIGZhaXQgdG91am91cnMgbGEgbcOqbWUgY2hvc2UgZGVzIGRldXggY8O0dMOpcy48L3RleHQ+PC9zdmc+)
*L’équation 5x + 3 = 23 vue comme une balance : on enlève 3 de chaque côté, puis on divise les deux côtés par 5, et l’on trouve x = 4.*
<!-- /schema -->

Une **équation** est une égalité qui contient une inconnue. La **résoudre**, c'est
trouver les valeurs de l'inconnue qui rendent l'égalité vraie : les **solutions**.

Une équation est une balance : ce que tu fais d'un côté, tu le fais de l'autre.

$$\boxed{\begin{array}{l} \text{ajouter ou soustraire un même nombre aux deux membres} \\
\text{multiplier ou diviser les deux membres par un même nombre non nul} \end{array}}$$

**La méthode.** 1. enlever $b$ des deux côtés — 2. diviser les deux côtés par $a$
(avec $a \neq 0$) — 3. **vérifier** dans l'équation de départ.

> **Exemple.** $5x + 3 = 23$ donne $5x = 23 - 3 = 20$, puis $x = \dfrac{20}{5} = 4$.
> **Vérification** : $5 \times 4 + 3 = 23$ ✓.

> **Quand ça ne tombe pas juste.** $4x + 7 = 1$ donne $4x = -6$, puis
> $x = \dfrac{-6}{4} = -\dfrac{3}{2} = -1{,}5$. **Vérification** :
> $4 \times (-1{,}5) + 7 = 1$ ✓.
>
> Une solution négative ou fractionnaire n'a rien d'anormal : **ne recommence pas un
> calcul juste** parce que le résultat n'est pas un entier.

---

## 7. Mettre un problème en équation

C'est l'objectif final du chapitre. Quatre étapes, toujours les mêmes :

1. **choisir l'inconnue** et le dire — *« Soit $x$ le nombre cherché. »*
2. **traduire** l'énoncé en une égalité ;
3. **résoudre** l'équation ;
4. **répondre à la question posée**, en français, avec l'unité.

### Quand l'inconnue est des deux côtés : $ax + b = cx + d$

On rassemble d'abord les $x$ dans un membre et les nombres dans l'autre.

> **Exemple.** $7x - 4 = 2x + 11$ : on enlève $2x$ des deux côtés, $5x - 4 = 11$ ;
> on ajoute $4$, $5x = 15$ ; on divise par $5$, $x = 3$.
> **Vérification** : $7 \times 3 - 4 = 17$ et $2 \times 3 + 11 = 17$ ✓.

> **Problème complet.** *Je pense à un nombre. Si je le multiplie par $3$ et que
> j'ajoute $5$, j'obtiens le même résultat qu'en le multipliant par $5$ et en retirant
> $7$. Quel est ce nombre ?*
>
> Soit $x$ ce nombre. L'énoncé se traduit par $3x + 5 = 5x - 7$, d'où
> $$5 + 7 = 5x - 3x \quad\Longrightarrow\quad 12 = 2x \quad\Longrightarrow\quad x = 6$$
> **Vérification** : $3 \times 6 + 5 = 23$ et $5 \times 6 - 7 = 23$ ✓.
> **Réponse** : le nombre pensé est $6$.

---

## 8. Conjecturer avec un tableur ou un algorithme

Avant de résoudre, tu peux **chercher** la solution en testant des valeurs — à la main,
au tableur ou avec un programme.

> **Exemple.** Pour $3x + 5 = 5x - 7$ :
>
> | $x$ | $4$ | $5$ | $6$ | $7$ |
> |---|---|---|---|---|
> | $3x+5$ | $17$ | $20$ | $23$ | $26$ |
> | $5x-7$ | $13$ | $18$ | $23$ | $28$ |
>
> Les deux lignes se rejoignent en $x = 6$ : voilà la **conjecture**.

> ⚠️ **Un tableau ne démontre rien.** Il te met sur la piste, parfois seulement de
> façon **approchée** (la solution peut tomber entre deux colonnes). Seul le calcul
> algébrique du §6 **prouve** que la solution est exactement $6$.

---

## 9. Cas particuliers et pièges de calcul

| Situation | Ce qui se passe |
|---|---|
| $2x + 3 = 2x + 5$ | les $x$ disparaissent, il reste $3 = 5$ : **aucune solution** |
| $2x + 3 = 2x + 3$ | il reste $3 = 3$ : vrai pour **tout** $x$ |
| $ax = c$ avec $a = 0$ | on ne peut pas diviser par $a$ : ce n'est plus le premier degré |
| solution fractionnaire | garde la fraction : $x = -\dfrac{3}{2}$ est une réponse exacte |

> **Le piège du signe en changeant de membre.** Dans $x + 7 = 2$, le $+7$ devient $-7$
> de l'autre côté : $x = 2 - 7 = -5$. Beaucoup écrivent $x = 9$. **Le test final
> l'aurait détecté** : $9 + 7 = 16 \neq 2$.

---

## 10. À retenir absolument

| | |
|---|---|
| $3x + 2x$ / $3x \times 2x$ | $5x$ / $6x^2$ |
| Développer / factoriser | $k(a+b) = ka + kb$ / $ka + kb = k(a+b)$ |
| Nombre pair / impair | $2k$ / $2k+1$ |
| Équation / solution | égalité avec une **inconnue** / valeur qui la rend **vraie** |
| Les deux règles | agir sur les **deux membres** (diviser : par un nombre **non nul**) |
| $ax+b=c$ / $ax+b=cx+d$ | enlever $b$ puis diviser par $a$ / les $x$ d'un côté |
| Dernière étape | **vérifier** la solution dans l'équation de départ |

---

## 11. Les erreurs qui coûtent des points

1. **Confondre $3x + 2x$ et $3x \times 2x$** : $5x$ dans un cas, $6x^2$ dans l'autre.
2. **Oublier de changer le signe** quand un terme passe de l'autre côté : dans
   $x + 7 = 2$, on obtient $x = -5$, pas $x = 9$.
3. **Ne transformer qu'un seul membre** : si tu divises par $5$ à gauche, tu divises
   par $5$ **partout**.
4. **Écrire $2x+1$ pour « le double du successeur »** au lieu de $2(x+1)$.
5. **Croire qu'un tableau de valeurs démontre** la solution : il la fait deviner, la
   preuve c'est la résolution.
6. **Répondre « $x = 6$ »** au lieu de répondre à la question posée, avec l'unité.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.txt), thème « Nombres et calculs »,
niveau QUATRIÈME, entrée « Calcul littéral et algébrique », LIGNES 565 à 580.
(La section Quatrième du thème commence ligne 509.)

Contenu de la source, repris intégralement :

Automatismes (l. 566-572) :
- « Donner la valeur d'expressions numériques simples. » → §2
- « Résoudre des équations du type ax = c et x + b = c » ; « Écrire 3 × x sous la forme
  3x… » → acquis de 5e, en prérequis et renvoi §1
- « Connaitre et utiliser : 1 × x = x ; x + x = 2x ; x × x = x² ; 3x + 2x = 5x ;
  3x × 2x = 6x². » → §2, encadré tel quel
- « Donner le double, le triple, la moitié, le prédécesseur, le successeur, le carré
  d'un nombre. » → §2, tableau de traduction
- « Tester si un nombre vérifie une égalité. » → étape de vérification (§6, §7)

Objectifs d'apprentissage (l. 573-580), dans l'ordre du texte :
- « Produire des formules et tester leur vraisemblance : aires de formes géométriques
  simples, nombres pairs/impairs, etc. » → §3
- « Connaitre et utiliser la distributivité SIMPLE pour développer et factoriser une
  expression algébrique. » → §4
- « Utiliser le calcul algébrique pour produire des démonstrations. » → §5
- « Résoudre une équation du premier degré du type ax + b = c. » → §6
- « Mettre en équation un problème et le résoudre à l'aide d'une équation du premier
  degré du type ax + b = cx + d. » → §7
- « Formuler des conjectures à l'aide d'un algorithme ou d'un tableur pour résoudre de
  manière exacte ou approchée une équation. » → §8
(L'ordre des sections de la fiche suit exactement cette liste.)

⚠️ POINT DE PÉRIMÈTRE LE PLUS IMPORTANT — À TRANCHER PAR LE RELECTEUR
La double distributivité et les identités remarquables ne sont PAS au programme de 4e
dans ce texte. La ligne 575 dit explicitement « distributivité SIMPLE ». Les deux
notions apparaissent dans la section TROISIÈME du même document :
  - l. 635 : « Utiliser la double distributivité pour développer et factoriser des
    expressions dont le facteur est apparent. »
  - l. 638-641 : « Manipuler les trois identités remarquables pour développer et
    factoriser : a² + 2ab + b² = (a+b)² ; a² − 2ab + b² = (a−b)² ; a² − b² = (a−b)(a+b). »
Je ne les ai donc NI l'une NI l'autre traitées ici, contrairement à l'usage des manuels
et à la pratique de nombreux enseignants qui placent (a+b)(c+d) en 4e. C'est un écart
assumé avec la tradition, fondé sur la lettre du texte. À valider explicitement : si le
relecteur estime que la double distributivité doit être introduite en 4e, il faut
ajouter une section — mais alors la fiche de 3e devra être ajustée en miroir.

Autres points à soumettre au relecteur :
- MÉTHODE DE RÉSOLUTION : le texte de 4e dit seulement « Résoudre une équation du
  premier degré du type ax + b = c », sans prescrire de méthode. J'ai retenu les règles
  d'équivalence (« la balance »), alors que le texte de 5e (l. 505) parlait de
  « méthodes arithmétiques s'appuyant sur les opérations inverses ». Le passage de
  l'une à l'autre est-il attendu en 4e ? Le vocabulaire « équations équivalentes » n'est
  employé nulle part dans la source : je ne l'ai donc pas introduit.
- ÉQUATIONS SANS SOLUTION / TOUJOURS VRAIES (§9) : cas non mentionné dans la source,
  mais qui surgit mécaniquement dès qu'on traite ax + b = cx + d avec a = c. Traité en
  deux lignes comme « cas particulier ». À confirmer, ou à retirer si hors programme.
- Notation ensembliste S = {…} : absente de la source, donc non introduite. J'emploie
  seulement le mot « solution ».
- §8 (tableur/algorithme) : recoupe le chapitre « pensée informatique ». Vérifier qu'il
  n'y a pas de doublon entre les deux fiches.
- Le chapitre de 5e (5e-math-calcul-litteral) est cité en §1 et en prérequis ; son
  contenu n'est pas répété. Vérifier que le renvoi reste valable si la 5e évolue.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
