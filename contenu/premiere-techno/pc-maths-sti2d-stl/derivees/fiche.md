---
id: 1sti2d-derivees
titre: "Dérivées : calculs et applications physiques"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 15
prerequis:
  - Dérivation (enseignement commun de Première technologique)
  - Trigonométrie et fonctions sinusoïdales (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Dérivées : calculs et applications physiques

> L'enseignement commun t'a appris à dériver $x^2$, $x^3$ et les polynômes de degré
> au plus $3$. Ici, on va plus loin : **produit, inverse, quotient, $x^n$, $\dfrac{1}{x}$,
> cosinus, sinus** et fonctions sinusoïdales $t \mapsto A\cos(\omega t + \varphi)$.
> Surtout, on fait le lien avec la physique : une **vitesse**, une **accélération**,
> une **puissance** ou une **intensité** sont des dérivées par rapport au temps.

---

## 1. Les notations du nombre dérivé

Si une grandeur $y$ dépend d'une grandeur $x$ par la relation $y = f(x)$, on note
$\Delta x$ une petite variation de $x$ et $\Delta y = f(x_0 + \Delta x) - f(x_0)$
la variation correspondante de $y$.

Le **taux de variation** est $\dfrac{\Delta y}{\Delta x}$. Quand $\Delta x$ devient
infiniment petit, il tend vers le **nombre dérivé**, que l'on peut écrire de quatre
façons :

$$\boxed{f'(x_0) = \frac{dy}{dx}(x_0) = \frac{d f}{dx}(x_0) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}}$$

> **Pourquoi plusieurs notations ?** La notation $\dfrac{dy}{dx}$ rappelle que le
> nombre dérivé est un **taux de variation infinitésimal** : c'est la notation des
> physiciens. Par exemple, la vitesse s'écrit $v = \dfrac{dx}{dt}$.

> **Exemple.** Un chariot est en $x = 2{,}0$ m à $t = 1{,}0$ s et en $x = 5{,}6$ m à
> $t = 2{,}2$ s. Sa vitesse moyenne est $\dfrac{\Delta x}{\Delta t} = \dfrac{3{,}6}{1{,}2} = 3$ m/s.
> La vitesse **instantanée** est la limite de cette vitesse moyenne quand $\Delta t$
> tend vers $0$.

Graphiquement, $f'(x_0)$ est toujours le **coefficient directeur de la tangente** à
la courbe au point d'abscisse $x_0$.

---

## 2. L'approximation affine

Près de $x_0$, la courbe se confond presque avec sa tangente. D'où, pour $h$ petit :

$$\boxed{f(x_0 + h) \approx f(x_0) + f'(x_0)\,h}$$

soit

$$\boxed{\Delta y \approx f'(x_0)\,\Delta x}$$

> **Exemple.** Une plaque carrée de côté $c = 50$ cm s'allonge de $\Delta c = 0{,}05$ cm
> en chauffant. Son aire est $S(c) = c^2$, donc $S'(c) = 2c$ et
> $\Delta S \approx 2 \times 50 \times 0{,}05 = 5$ cm². La valeur exacte est
> $50{,}05^2 - 50^2 = 5{,}0025$ cm² : l'approximation est excellente.

> **Deux approximations utiles près de $0$** : $\dfrac{1}{1+h} \approx 1 - h$ et
> $\sin h \approx h$ ($h$ en radians).

---

## 3. Les dérivées à connaître

| $f(x)$ | $f'(x)$ | Valable sur |
|---|---|---|
| $k$ (constante) | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $x^n$ ($n$ entier, $n \geqslant 1$) | $n\,x^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $]-\infty\,;0[$ et $]0\,;+\infty[$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |

> **Une seule formule à retenir.** Comme $\dfrac{1}{x} = x^{-1}$, la règle
> $(x^n)' = n\,x^{n-1}$ donne aussi $(x^{-1})' = -1 \times x^{-2} = -\dfrac{1}{x^2}$.
> Elle vaut donc pour tout entier $n \geqslant -1$.

> ⚠️ Le **signe moins** est sur la dérivée du **cosinus** : $(\cos x)' = -\sin x$,
> mais $(\sin x)' = +\cos x$. Les angles sont toujours en **radians**.

---

## 4. Les opérations

$u$ et $v$ sont deux fonctions dérivables, $k$ est un réel.

| Fonction | Dérivée |
|---|---|
| $u + v$ | $u' + v'$ |
| $k\,u$ | $k\,u'$ |
| $u \times v$ | $u'v + uv'$ |
| $\dfrac{1}{v}$ ($v \neq 0$) | $-\dfrac{v'}{v^2}$ |
| $\dfrac{u}{v}$ ($v \neq 0$) | $\dfrac{u'v - uv'}{v^2}$ |

> **D'où vient la formule du produit ?** On écrit le taux de variation :
>
> $$\begin{aligned}&\frac{u(x+h)v(x+h) - u(x)v(x)}{h}\\ &= \frac{u(x+h) - u(x)}{h}\,v(x+h)\\ &\quad + u(x)\,\frac{v(x+h) - v(x)}{h}.\end{aligned}$$
>
> Quand $h$ tend vers $0$, on obtient $u'v + uv'$. La formule du quotient est admise.

> **Exemple (quotient).** $f(x) = \dfrac{2x - 1}{x + 3}$ pour $x \neq -3$ : $u = 2x - 1$,
> $u' = 2$, $v = x + 3$, $v' = 1$, donc
>
> $$f'(x) = \dfrac{2(x+3) - (2x-1) \times 1}{(x+3)^2} = \dfrac{7}{(x+3)^2}.$$

> ⚠️ La dérivée d'un produit **n'est pas** le produit des dérivées :
> $(x \times x)' = 2x$, alors que $1 \times 1 = 1$.

---

## 5. Fonctions du type $f(ax + b)$ et fonctions sinusoïdales

$$\boxed{\big(f(ax + b)\big)' = a\,f'(ax + b)}$$

> **Exemple.** $(3x - 2)^4$ : c'est $x^4$ évaluée en $3x - 2$, donc sa dérivée est
> $3 \times 4(3x-2)^3 = 12(3x - 2)^3$.

Appliquée au cosinus et au sinus, avec $a = \omega$ et $b = \varphi$ :

$$\boxed{\big(A\cos(\omega t + \varphi)\big)' = -A\omega\sin(\omega t + \varphi)}$$

$$\boxed{\big(A\sin(\omega t + \varphi)\big)' = A\omega\cos(\omega t + \varphi)}$$

> **Exemple (tension du secteur).** $u(t) = 325\sin(100\pi t)$ en volts (valeur efficace
> $230$ V, fréquence $50$ Hz). Alors $\dfrac{du}{dt} = 325 \times 100\pi\cos(100\pi t) = 32\,500\pi\cos(100\pi t)$
> en V/s : la tension varie au plus vite, d'environ $1{,}02 \times 10^5$ V/s, quand elle
> passe par $0$.

> ⚠️ Ne pas oublier le facteur $\omega$ : la dérivée de $\cos(10t)$ est $-10\sin(10t)$,
> pas $-\sin(10t)$.

---

## 6. Sens de variation

Sur un intervalle :
- si $f'(x) > 0$ (sauf éventuellement en des points isolés), $f$ est **croissante** ;
- si $f'(x) < 0$ (sauf éventuellement en des points isolés), $f$ est **décroissante**.

**Méthode** : calculer $f'(x)$, **factoriser** ou mettre au même dénominateur,
étudier son **signe**, dresser le **tableau de variations**.

> **Exemple.** $f(x) = x + \dfrac{1}{x}$ sur $]0\,;+\infty[$ :
> $f'(x) = 1 - \dfrac{1}{x^2} = \dfrac{x^2 - 1}{x^2} = \dfrac{(x-1)(x+1)}{x^2}$.
> Sur $]0\,;+\infty[$, $x + 1 > 0$ et $x^2 > 0$ : $f'(x)$ a le signe de $x - 1$.
> $f$ est décroissante sur $]0\,;1]$, croissante sur $[1\,;+\infty[$ ; son minimum
> est $f(1) = 2$.

---

## 7. Quand la variable est le temps : les liens avec la physique

| Grandeur | Définition | Unité (SI) |
|---|---|---|
| Vitesse (mouvement rectiligne) | $v(t) = \dfrac{dx}{dt}$ | m/s |
| Accélération | $a(t) = \dfrac{dv}{dt}$ | m/s² |
| Vecteur vitesse dans le plan | $v_x = \dfrac{dx}{dt}$, $v_y = \dfrac{dy}{dt}$ | m/s |
| Puissance | $P(t) = \dfrac{dE}{dt}$ | W |
| Intensité électrique | $i(t) = \dfrac{dq}{dt}$ | A |
| Vitesse d'apparition d'un produit P | $\dfrac{d[\mathrm{P}]}{dt}$ | mol·L⁻¹·s⁻¹ |
| Vitesse de disparition d'un réactif R | $-\dfrac{d[\mathrm{R}]}{dt}$ | mol·L⁻¹·s⁻¹ |

> **Exemple (lancer vertical).** L'altitude d'une balle est $z(t) = -4{,}9t^2 + 12t + 1{,}5$
> (en m, $t$ en s). Sa vitesse est $v(t) = z'(t) = -9{,}8t + 12$ et son accélération
> $a(t) = v'(t) = -9{,}8$ m/s² : c'est l'accélération de la pesanteur, dirigée vers le bas.
> La balle est au sommet quand $v(t) = 0$, soit à $t = \dfrac{12}{9{,}8} \approx 1{,}2$ s.

> **Exemple (charge d'un téléphone).** La charge reçue par la batterie est
> $q(t) = 2t - 0{,}0001t^2$ (en C, $t$ en s, pendant une heure). L'intensité du courant
> de charge est $i(t) = q'(t) = 2 - 0{,}0002t$ : $2$ A au début, $1{,}28$ A au bout
> d'une heure.

---

## 8. À retenir absolument

| | |
|---|---|
| Notations | $f'(x_0) = \dfrac{dy}{dx}(x_0) = \dfrac{df}{dx}(x_0)$ |
| Approximation affine | $\Delta y \approx f'(x_0)\,\Delta x$ |
| Puissances | $(x^n)' = n\,x^{n-1}$, y compris $\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$ |
| Cosinus, sinus | $(\cos x)' = -\sin x$ ; $(\sin x)' = \cos x$ |
| Produit | $(uv)' = u'v + uv'$ |
| Inverse, quotient | $\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$ ; $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ |
| Fonction affine à l'intérieur | $\big(f(ax+b)\big)' = a\,f'(ax+b)$ |
| Sinusoïdes | $\big(A\cos(\omega t+\varphi)\big)' = -A\omega\sin(\omega t+\varphi)$ |
| Physique | $v = \frac{dx}{dt}$ ; $a = \frac{dv}{dt}$ ; $P = \frac{dE}{dt}$ ; $i = \frac{dq}{dt}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Dériver un produit en multipliant les dérivées** : $(uv)' \neq u'v'$.
2. **Inverser le numérateur du quotient** : c'est $u'v - uv'$, dans cet ordre.
3. **Oublier le carré** au dénominateur de $\left(\dfrac{1}{v}\right)'$ et de $\left(\dfrac{u}{v}\right)'$.
4. **Se tromper de signe** : $(\cos x)' = -\sin x$ mais $(\sin x)' = \cos x$.
5. **Oublier le facteur $a$** (ou $\omega$) dans la dérivée de $f(ax + b)$.
6. **Confondre vitesse moyenne et vitesse instantanée** : la seconde est une dérivée.
7. **Oublier les unités** : une dérivée par rapport au temps s'exprime « par seconde »
   (m/s, m/s², V/s…).
