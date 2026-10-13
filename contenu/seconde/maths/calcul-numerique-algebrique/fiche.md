---
id: 2nde-math-calcul-numerique-algebrique
titre: "Calcul numérique et algébrique"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Fractions, puissances, priorités opératoires (cycle 4)
  - Développement et factorisation simples (cycle 4)
statut: brouillon
relu_par: null
---

# Calcul numérique et algébrique

> C'est le chapitre outil de toute la Seconde. Chaque erreur de calcul commise ici se paiera
> dans les fonctions, la géométrie et les probabilités. Le programme insiste sur les
> **automatismes** : ces techniques doivent devenir des réflexes.

---

## 1. Les ensembles de nombres

<!-- schema:ensembles-emboites -->
![Les ensembles de nombres sont emboîtés : ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. Chaque nombre appartient à son ensemble et à tous ceux qui le contiennent ; √2 et π sont réels mais pas rationnels.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMzAwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI1NjgiIGhlaWdodD0iMjY4IiByeD0iMTYiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4wNyIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIvPjx0ZXh0IHg9IjMwIiB5PSI0MiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7ihJ08L3RleHQ+PHRleHQgeD0iNDYiIHk9IjI3MiIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj7iiJoyIDsgz4A8L3RleHQ+PHJlY3QgeD0iNzIiIHk9IjQyIiB3aWR0aD0iNDU2IiBoZWlnaHQ9IjIxNiIgcng9IjE2IiBmaWxsPSIjN2EzZmIwIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSI4NiIgeT0iNjgiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+4oSaPC90ZXh0Pjx0ZXh0IHg9IjEwMiIgeT0iMjQ2IiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjIvMyA7IOKIkjcvNTwvdGV4dD48cmVjdCB4PSIxMjgiIHk9IjY4IiB3aWR0aD0iMzQ0IiBoZWlnaHQ9IjE2NCIgcng9IjE2IiBmaWxsPSIjYzI1ZTAwIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iI2MyNWUwMCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxNDIiIHk9Ijk0IiBmb250LXNpemU9IjIwIiBmaWxsPSIjYzI1ZTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPvCdlLs8L3RleHQ+PHRleHQgeD0iMTU4IiB5PSIyMjAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+Miw3NSA7IOKIkjAsNTwvdGV4dD48cmVjdCB4PSIxODQiIHk9Ijk0IiB3aWR0aD0iMjMyIiBoZWlnaHQ9IjExMiIgcng9IjE2IiBmaWxsPSIjYzAyYTJhIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIxOTgiIHk9IjEyMCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7ihKQ8L3RleHQ+PHRleHQgeD0iMjE0IiB5PSIxOTQiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSI+4oiSNTwvdGV4dD48cmVjdCB4PSIyNDAiIHk9IjEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgcng9IjE2IiBmaWxsPSIjMWE3ZjRiIiBmaWxsLW9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48dGV4dCB4PSIyNTQiIHk9IjE0NiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj7ihJU8L3RleHQ+PHRleHQgeD0iMzE4IiB5PSIxNjIiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjAgOyA3IDsgMTUyPC90ZXh0Pjwvc3ZnPg==)
*Les ensembles de nombres sont emboîtés : ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ. Chaque nombre appartient à son ensemble et à tous ceux qui le contiennent ; √2 et π sont réels mais pas rationnels.*
<!-- /schema -->

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}$$

| Symbole | Nom | Exemple |
|---|---|---|
| $\mathbb{N}$ | entiers naturels | $0,\ 7,\ 152$ |
| $\mathbb{Z}$ | entiers relatifs | $-5,\ 0,\ 12$ |
| $\mathbb{D}$ | décimaux | $2{,}75$ ; $-0{,}5$ |
| $\mathbb{Q}$ | rationnels (quotients d'entiers) | $\dfrac{2}{3}$ ; $-\dfrac{7}{5}$ |
| $\mathbb{R}$ | réels | $\sqrt{2}$ ; $\pi$ |

> $\sqrt{2}$ et $\pi$ sont **irrationnels** : ils ne s'écrivent pas comme quotient de deux
> entiers. Leur écriture décimale est infinie et non périodique.

---

## 2. Puissances

Pour $a \neq 0$ et $m, n$ entiers relatifs :

| | |
|---|---|
| $a^m \times a^n = a^{m+n}$ | on **additionne** les exposants |
| $\dfrac{a^m}{a^n} = a^{m-n}$ | on soustrait |
| $\left(a^m\right)^n = a^{mn}$ | on multiplie |
| $(ab)^n = a^n b^n$ | |
| $a^{-n} = \dfrac{1}{a^n}$ | |
| $a^0 = 1$ | |

> ⚠️ $a^m \times a^n$ n'est **pas** $a^{mn}$. Contrôle rapide :
> $2^2 \times 2^3 = 4 \times 8 = 32 = 2^5$, et non $2^6 = 64$.

---

## 3. Racines carrées

Pour $a \geqslant 0$ et $b \geqslant 0$ :

$$\sqrt{a} \times \sqrt{b} = \sqrt{ab} \qquad\qquad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \ (b > 0) \qquad\qquad \left(\sqrt{a}\right)^2 = a$$

> ⚠️ **$\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$.** Contre-exemple :
> $\sqrt{9+16} = \sqrt{25} = 5$, alors que $\sqrt 9 + \sqrt{16} = 3 + 4 = 7$.
> La racine ne « traverse » ni l'addition ni la soustraction.

### Simplifier une racine

On extrait le plus grand carré parfait.

> **Exemple.** $\sqrt{72} = \sqrt{36 \times 2} = 6\sqrt{2}$.

---

## 4. Identités remarquables

<!-- schema:carre-a-plus-b -->
![Le carré de côté a + b se découpe en un carré a², un carré b² et deux rectangles ab : son aire vaut (a + b)² = a² + 2ab + b².](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjAgMzgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzODAiIGZpbGw9IiNmZmZmZmYiLz48cmVjdCB4PSIxNDAiIHk9IjMwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjAiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxyZWN0IHg9IjM0MCIgeT0iMzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iMjAwIiByeD0iMCIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjIyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iMTQwIiB5PSIyMzAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTEwIiByeD0iMCIgZmlsbD0iIzFhN2Y0YiIgZmlsbC1vcGFjaXR5PSIwLjIyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHJlY3QgeD0iMzQwIiB5PSIyMzAiIHdpZHRoPSIxMTAiIGhlaWdodD0iMTEwIiByeD0iMCIgZmlsbD0iI2MyNWUwMCIgZmlsbC1vcGFjaXR5PSIwLjI4IiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMjQwIiB5PSIxMzgiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPmHCsjwvdGV4dD48dGV4dCB4PSIzOTUiIHk9IjEzOCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+YWI8L3RleHQ+PHRleHQgeD0iMjQwIiB5PSIyOTMiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtd2VpZ2h0PSI3MDAiPmFiPC90ZXh0Pjx0ZXh0IHg9IjM5NSIgeT0iMjkzIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5iwrI8L3RleHQ+PHRleHQgeD0iMTI2IiB5PSIxMzYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJlbmQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtc3R5bGU9Iml0YWxpYyI+YTwvdGV4dD48dGV4dCB4PSIxMjYiIHk9IjI5MSIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC1zdHlsZT0iaXRhbGljIj5iPC90ZXh0Pjx0ZXh0IHg9IjI0MCIgeT0iMjIiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiPjwvdGV4dD48dGV4dCB4PSIyNDAiIHk9IjM2MiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC1zdHlsZT0iaXRhbGljIj5hPC90ZXh0Pjx0ZXh0IHg9IjM5NSIgeT0iMzYyIiBmb250LXNpemU9IjE4IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXN0eWxlPSJpdGFsaWMiPmI8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjMwIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIj48L3RleHQ+PC9zdmc+)
*Le carré de côté a + b se découpe en un carré a², un carré b² et deux rectangles ab : son aire vaut (a + b)² = a² + 2ab + b².*
<!-- /schema -->

$$\boxed{(a+b)^2 = a^2 + 2ab + b^2} \qquad \boxed{(a-b)^2 = a^2 - 2ab + b^2} \qquad \boxed{(a-b)(a+b) = a^2 - b^2}$$

Elles se lisent **dans les deux sens** : de gauche à droite pour développer, de droite à gauche
pour factoriser.

> **Exemple — développer.** $(2x+3)^2 = 4x^2 + 12x + 9$.
> Le double produit vaut $2 \times 2x \times 3 = 12x$ : c'est lui qu'on oublie le plus souvent.

> **Exemple — factoriser.** $9x^2 - 25 = (3x)^2 - 5^2 = (3x-5)(3x+5)$.

---

## 5. Factoriser

### Par facteur commun

$$ka + kb = k(a+b)$$

> **Exemple.** $(x+1)(x-3) + (x+1)(2x) = (x+1)\big[(x-3) + 2x\big] = (x+1)(3x-3) = 3(x+1)(x-1)$.
>
> Le facteur commun peut être une **expression entière**, pas seulement un nombre.

### Pourquoi factoriser

Une forme factorisée permet d'appliquer la règle du **produit nul** :

$$A \times B = 0 \iff A = 0 \text{ ou } B = 0$$

C'est la seule façon de résoudre la plupart des équations de Seconde.

---

## 6. Fractions

| Opération | Règle |
|---|---|
| Addition | mettre au **même dénominateur** |
| Multiplication | $\dfrac{a}{b} \times \dfrac{c}{d} = \dfrac{ac}{bd}$ |
| Division | $\dfrac{a}{b} \div \dfrac{c}{d} = \dfrac{a}{b} \times \dfrac{d}{c}$ |

> ⚠️ $\dfrac{a}{b} + \dfrac{c}{d}$ n'est **jamais** $\dfrac{a+c}{b+d}$.
> Contrôle : $\dfrac12 + \dfrac12 = 1$, alors que $\dfrac{1+1}{2+2} = \dfrac12$.

---

## 7. Intervalles et valeur absolue

<!-- schema:intervalles -->
![Sur la droite des réels : l’intervalle fermé contient ses bornes a et b, l’intervalle ouvert les exclut (crochets tournés vers l’extérieur) ; vers +∞, le crochet est toujours ouvert.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTAgMjIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYxMCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAiIHkxPSI0MCIgeDI9IjUxMSIgeTI9IjQwIiBzdHJva2U9IiM1YjZiN2EiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUyMCw0MCA1MTEsMzUuNSA1MTEsNDQuNSIgZmlsbD0iIzViNmI3YSIvPjxsaW5lIHgxPSIxNDAiIHkxPSI0MCIgeDI9IjQyMCIgeTI9IjQwIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0MCIgeTE9IjI4IiB4Mj0iMTQwIiB5Mj0iNTIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNDAiIHkxPSIyOCIgeDI9IjE0NyIgeTI9IjI4IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iMTQwIiB5MT0iNTIiIHgyPSIxNDciIHkyPSI1MiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTQwIiB5PSI3MCIgZm9udC1zaXplPSIxNSIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC1zdHlsZT0iaXRhbGljIj5hPC90ZXh0PjxsaW5lIHgxPSI0MjAiIHkxPSIyOCIgeDI9IjQyMCIgeTI9IjUyIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDIwIiB5MT0iMjgiIHgyPSI0MTMiIHkyPSIyOCIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyMCIgeTE9IjUyIiB4Mj0iNDEzIiB5Mj0iNTIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQyMCIgeT0iNzAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtc3R5bGU9Iml0YWxpYyI+YjwvdGV4dD48dGV4dCB4PSI2MDAiIHk9IjQ2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj48L3RleHQ+PHRleHQgeD0iNjAwIiB5PSI0NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+W2EgOyBiXTwvdGV4dD48bGluZSB4MT0iMzAiIHkxPSIxMTAiIHgyPSI1MTEiIHkyPSIxMTAiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNTIwLDExMCA1MTEsMTA1LjUgNTExLDExNC41IiBmaWxsPSIjNWI2YjdhIi8+PGxpbmUgeDE9IjE0MCIgeTE9IjExMCIgeDI9IjQyMCIgeTI9IjExMCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNDAiIHkxPSI5OCIgeDI9IjE0MCIgeTI9IjEyMiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0MCIgeTE9Ijk4IiB4Mj0iMTMzIiB5Mj0iOTgiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxsaW5lIHgxPSIxNDAiIHkxPSIxMjIiIHgyPSIxMzMiIHkyPSIxMjIiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE0MCIgeT0iMTQwIiBmb250LXNpemU9IjE1IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXN0eWxlPSJpdGFsaWMiPmE8L3RleHQ+PGxpbmUgeDE9IjQyMCIgeTE9Ijk4IiB4Mj0iNDIwIiB5Mj0iMTIyIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMi42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48bGluZSB4MT0iNDIwIiB5MT0iOTgiIHgyPSI0MjciIHkyPSI5OCIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyMCIgeTE9IjEyMiIgeDI9IjQyNyIgeTI9IjEyMiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDIwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtc3R5bGU9Iml0YWxpYyI+YjwvdGV4dD48dGV4dCB4PSI2MDAiIHk9IjExNiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMTE2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5dYSA7IGJbPC90ZXh0PjxsaW5lIHgxPSIzMCIgeTE9IjE4MCIgeDI9IjUxMSIgeTI9IjE4MCIgc3Ryb2tlPSIjNWI2YjdhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MjAsMTgwIDUxMSwxNzUuNSA1MTEsMTg0LjUiIGZpbGw9IiM1YjZiN2EiLz48bGluZSB4MT0iMTQwIiB5MT0iMTgwIiB4Mj0iNTA1IiB5Mj0iMTgwIiBzdHJva2U9IiMxYTdmNGIiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0MCIgeTE9IjE2OCIgeDI9IjE0MCIgeTI9IjE5MiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0MCIgeTE9IjE2OCIgeDI9IjE0NyIgeTI9IjE2OCIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjE0MCIgeTE9IjE5MiIgeDI9IjE0NyIgeTI9IjE5MiIgc3Ryb2tlPSIjMWE3ZjRiIiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTQwIiB5PSIyMTAiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIGZvbnQtc3R5bGU9Iml0YWxpYyI+YTwvdGV4dD48dGV4dCB4PSI2MDAiIHk9IjE4NiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzFhN2Y0YiIgdGV4dC1hbmNob3I9ImVuZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgZm9udC13ZWlnaHQ9IjcwMCI+PC90ZXh0Pjx0ZXh0IHg9IjYwMCIgeT0iMTg2IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMWE3ZjRiIiB0ZXh0LWFuY2hvcj0iZW5kIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwYWludC1vcmRlcj0ic3Ryb2tlIiBmb250LXdlaWdodD0iNzAwIj5bYSA7ICviiJ5bPC90ZXh0Pjwvc3ZnPg==)
*Sur la droite des réels : l’intervalle fermé contient ses bornes a et b, l’intervalle ouvert les exclut (crochets tournés vers l’extérieur) ; vers +∞, le crochet est toujours ouvert.*
<!-- /schema -->

| Notation | Signification |
|---|---|
| $[a\,;b]$ | $a \leqslant x \leqslant b$ |
| $]a\,;b[$ | $a < x < b$ |
| $[a\,;+\infty[$ | $x \geqslant a$ |
| $\lvert x \rvert$ | distance de $x$ à $0$ |
| $\lvert x - a \rvert$ | distance de $x$ à $a$ |

> Le crochet est **toujours ouvert** du côté de l'infini : on n'atteint jamais $+\infty$.

---

## 8. À retenir absolument

| | |
|---|---|
| $a^m \times a^n$ | $a^{m+n}$ |
| $\sqrt{a}\sqrt{b}$ | $\sqrt{ab}$ — mais $\sqrt{a+b} \neq \sqrt a + \sqrt b$ |
| $(a+b)^2$ | $a^2 + 2ab + b^2$ |
| $(a-b)(a+b)$ | $a^2 - b^2$ |
| Produit nul | $AB = 0 \iff A=0$ ou $B=0$ |
| Facteur commun | $ka + kb = k(a+b)$ |

---

## 9. Les erreurs qui coûtent des points

1. **$(a+b)^2 = a^2 + b^2$.** Faux : il manque le double produit $2ab$.
2. **$\sqrt{a+b} = \sqrt a + \sqrt b$.** Faux, toujours.
3. **Additionner les numérateurs et les dénominateurs** de deux fractions.
4. **Confondre $a^m \times a^n$ et $\left(a^m\right)^n$** : on additionne dans le premier cas,
   on multiplie dans le second.
5. **Développer alors qu'il fallait factoriser.** Pour résoudre une équation, c'est la forme
   **factorisée** qu'il faut viser.
6. **Simplifier une fraction en barrant un terme d'une somme** : dans
   $\dfrac{x+2}{2}$, on ne peut rien barrer.
7. **Fermer un crochet sur l'infini** : on écrit $[3\,;+\infty[$, jamais $[3\,;+\infty]$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), blocs « Nombres et calculs » et « Calcul numérique et
algébrique ». Le programme comporte une rubrique « Automatismes » explicite, dont s'inspire
l'insistance de cette fiche sur les réflexes de calcul.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme contient une section « Arithmétique » distincte (ligne 1656 du .txt) :
  divisibilité, nombres premiers, décomposition. Elle fait l'objet d'une fiche séparée —
  vérifier qu'il n'y a pas de recouvrement à arbitrer.
- La valeur absolue et les intervalles : périmètre exact à confirmer (distance sur la droite
  réelle, encadrements, approximation).
- Les « Démonstrations » exigibles de ce bloc (l'irrationalité de √2 en est une candidate
  classique).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
