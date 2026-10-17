---
id: 1sti2d-primitives
titre: "Primitives et méthode d'Euler"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 13
prerequis:
  - Dérivées : calculs et applications physiques (Première STI2D/STL)
  - Trigonométrie et fonctions sinusoïdales (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Primitives et méthode d'Euler

> Dériver, c'est passer de la position à la vitesse. **Chercher une primitive**, c'est
> faire le chemin inverse : retrouver la position à partir de la vitesse, la charge
> électrique à partir de l'intensité, l'énergie à partir de la puissance. Et quand on
> ne sait pas trouver la primitive, la **méthode d'Euler** en donne une approximation.

---

## 1. Définition

Soit $f$ une fonction définie sur un intervalle $I$. Une **primitive** de $f$ sur $I$
est une fonction $F$ dérivable sur $I$ telle que :

$$\boxed{F'(x) = f(x) \quad \text{pour tout } x \text{ de } I}$$

> **Exemple.** $F(x) = x^3 + 2x$ est une primitive de $f(x) = 3x^2 + 2$ sur $\mathbb{R}$,
> car $F'(x) = 3x^2 + 2 = f(x)$.

> **Pour vérifier** qu'une fonction est une primitive, il suffit de la **dériver** :
> on doit retrouver $f$.

---

## 2. Une infinité de primitives, qui diffèrent d'une constante

Si $F$ est une primitive de $f$ sur un intervalle $I$, alors les primitives de $f$ sur
$I$ sont **toutes** les fonctions :

$$\boxed{G(x) = F(x) + C, \qquad C \text{ constante réelle}}$$

Ce résultat est admis. On peut le comprendre de deux façons :
- **argument cinématique** : deux mobiles qui ont, à chaque instant, la même vitesse
  restent toujours à la même distance l'un de l'autre ; une fonction dont la dérivée
  est nulle est constante ;
- **argument géométrique** : deux fonctions qui ont en tout point le même nombre dérivé
  ont des courbes « parallèles », l'une se déduisant de l'autre par une **translation
  verticale**.

### Une condition initiale fixe la constante

Parmi toutes les primitives, **une seule** vérifie une condition du type $F(t_0) = y_0$.

> **Exemple.** Primitive de $f(x) = 4x$ telle que $F(1) = 5$ : $F(x) = 2x^2 + C$ et
> $F(1) = 2 + C = 5$, donc $C = 3$ et $F(x) = 2x^2 + 3$.

---

## 3. Primitives des polynômes

On « remonte » la formule $(x^{n+1})' = (n+1)\,x^n$ :

| $f(x)$ | une primitive $F(x)$ |
|---|---|
| $k$ (constante) | $kx$ |
| $x$ | $\dfrac{x^2}{2}$ |
| $x^2$ | $\dfrac{x^3}{3}$ |
| $x^n$ ($n$ entier, $n \geqslant 0$) | $\dfrac{x^{n+1}}{n+1}$ |

Une primitive d'une **somme** est la somme des primitives, et une primitive de
$k\,f$ est $k\,F$.

> **Exemple.** $f(x) = 3x^2 + 4x - 1$ a pour primitives $F(x) = x^3 + 2x^2 - x + C$.

> ⚠️ On **augmente** l'exposant de $1$ et on **divise** par le nouvel exposant :
> une primitive de $x^2$ est $\dfrac{x^3}{3}$, pas $2x$ (qui est sa dérivée).

> Pour un produit comme $(x - 1)(x + 3)$, on **développe d'abord** : $x^2 + 2x - 3$.

---

## 4. Primitives des fonctions sinusoïdales

On « remonte » les dérivées $\big(\sin(\omega t + \varphi)\big)' = \omega\cos(\omega t + \varphi)$
et $\big(\cos(\omega t + \varphi)\big)' = -\omega\sin(\omega t + \varphi)$, avec $\omega \neq 0$ :

| $f(t)$ | une primitive $F(t)$ |
|---|---|
| $A\cos(\omega t + \varphi)$ | $\dfrac{A}{\omega}\sin(\omega t + \varphi)$ |
| $A\sin(\omega t + \varphi)$ | $-\dfrac{A}{\omega}\cos(\omega t + \varphi)$ |

> **Vérification.** $\left(\dfrac{A}{\omega}\sin(\omega t + \varphi)\right)' = \dfrac{A}{\omega} \times \omega\cos(\omega t + \varphi) = A\cos(\omega t + \varphi)$.

> **Exemple.** Une primitive de $f(t) = 4\cos\left(2t + \dfrac{\pi}{3}\right)$ est
> $F(t) = 2\sin\left(2t + \dfrac{\pi}{3}\right)$.

> ⚠️ On **divise** par $\omega$ (on ne multiplie pas), et le **signe moins**
> apparaît pour la primitive du **sinus**.

---

## 5. La méthode d'Euler

On cherche une fonction $y$ telle que $y' = f(t)$ et $y(t_0) = y_0$, mais on ne connaît
pas de primitive de $f$ : par exemple $f(t) = \dfrac{1}{t}$ ou $f(t) = \dfrac{1}{1 + t^2}$.

L'idée est l'approximation affine, avec un **pas** $h$ petit :

$$\boxed{y(t + h) \approx y(t) + h \times f(t)}$$

**Méthode** : on part du point $(t_0\,;y_0)$, puis on calcule de proche en proche
$t_1 = t_0 + h$, $y_1 = y_0 + h\,f(t_0)$, puis $t_2 = t_1 + h$, $y_2 = y_1 + h\,f(t_1)$, etc.
On obtient des points proches de la courbe de la solution.

> **Exemple.** $y' = \dfrac{1}{t}$, $y(1) = 0$, pas $h = 0{,}5$ :
> $y(1{,}5) \approx 0 + 0{,}5 \times \dfrac{1}{1} = 0{,}5$ puis
> $y(2) \approx 0{,}5 + 0{,}5 \times \dfrac{1}{1{,}5} \approx 0{,}833$.

> Plus le pas $h$ est **petit**, meilleure est l'approximation (mais plus il y a de
> calculs : c'est un travail pour un algorithme ou un tableur).

```python
def euler(f, t0, y0, h, n):
    t, y = t0, y0
    points = [(t, y)]
    for _ in range(n):
        y = y + h * f(t)
        t = t + h
        points.append((t, y))
    return points
```

---

## 6. Les applications physiques

Chaque dérivée du chapitre précédent se lit à l'envers :

| On connaît | On cherche | Car |
|---|---|---|
| l'accélération $a(t)$ | la vitesse $v(t)$ | $v' = a$ |
| la vitesse $v(t)$ | la position $x(t)$ | $x' = v$ |
| l'intensité $i(t)$ | la charge $q(t)$ | $q' = i$ |
| la puissance $P(t)$ | l'énergie $E(t)$ | $E' = P$ |

La constante se détermine avec une **condition initiale** : vitesse de départ,
position de départ, charge initiale…

> **Exemple (chute libre).** Une bille lâchée sans vitesse a pour vitesse $v(t) = 9{,}8t$
> (en m/s). Sa distance parcourue est une primitive : $x(t) = 4{,}9t^2 + C$, et
> $x(0) = 0$ donne $C = 0$. Au bout de $2$ s, elle a parcouru $x(2) = 19{,}6$ m.

---

## 7. À retenir absolument

| | |
|---|---|
| Définition | $F' = f$ |
| Toutes les primitives | $F(x) + C$ |
| Condition initiale | une seule primitive vérifie $F(t_0) = y_0$ |
| Puissances | $x^n \mapsto \dfrac{x^{n+1}}{n+1}$ |
| Cosinus | $A\cos(\omega t + \varphi) \mapsto \dfrac{A}{\omega}\sin(\omega t + \varphi)$ |
| Sinus | $A\sin(\omega t + \varphi) \mapsto -\dfrac{A}{\omega}\cos(\omega t + \varphi)$ |
| Méthode d'Euler | $y(t + h) \approx y(t) + h\,f(t)$ |
| Physique | $v \to x$, $a \to v$, $i \to q$, $P \to E$ |

---

## 8. Les erreurs qui coûtent des points

1. **Dériver au lieu de primitiver** : une primitive de $x^2$ est $\dfrac{x^3}{3}$, pas $2x$.
2. **Oublier la constante $C$**, puis ne pas utiliser la condition initiale.
3. **Multiplier par $\omega$** au lieu de diviser dans les primitives sinusoïdales.
4. **Oublier le signe moins** dans la primitive de $A\sin(\omega t + \varphi)$.
5. **Chercher la primitive d'un produit** en multipliant les primitives : on développe d'abord.
6. **Dans la méthode d'Euler**, utiliser $f(t + h)$ au lieu de $f(t)$, ou oublier de
   multiplier par le pas $h$.
7. **Ne pas vérifier** : dériver la primitive trouvée doit redonner $f$.
