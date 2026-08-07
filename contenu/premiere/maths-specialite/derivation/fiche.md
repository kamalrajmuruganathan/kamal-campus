---
id: 1spe-math-derivation
titre: "Dérivation"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 15
prerequis:
  - Fonctions de référence (Seconde)
  - Équation de droite et coefficient directeur (Seconde)
  - Second degré (Première)
statut: brouillon
relu_par: null
---

# Dérivation

> Le programme aborde la dérivation par le **point de vue local** : on part de la pente des
> sécantes, on la fait « tendre vers » la tangente. Le nombre dérivé n'est pas une formule
> tombée du ciel, c'est une **pente limite**.

---

## 1. Taux de variation

### Définition

Soit $f$ une fonction définie sur un intervalle $I$, et $a, b \in I$ avec $a \neq b$.
Le **taux de variation** de $f$ entre $a$ et $b$ est

$$\tau = \frac{f(b) - f(a)}{b - a}$$

C'est le **coefficient directeur de la sécante** passant par les points $\mathrm{A}(a\,;f(a))$
et $\mathrm{B}(b\,;f(b))$.

En posant $b = a + h$ avec $h \neq 0$, on écrit aussi

$$\tau(h) = \frac{f(a+h) - f(a)}{h}$$

> **Exemple.** $f(x) = x^2$ entre $2$ et $5$ :
> $\tau = \dfrac{25 - 4}{5 - 2} = \dfrac{21}{3} = 7$.

---

## 2. Nombre dérivé — la limite des sécantes

### Définition

$f$ est **dérivable en $a$** lorsque le taux de variation $\dfrac{f(a+h) - f(a)}{h}$ tend vers
un nombre réel quand $h$ tend vers $0$. Ce nombre est le **nombre dérivé** de $f$ en $a$, noté

$$\boxed{f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}}$$

*L'idée.* Quand $\mathrm{B}$ se rapproche de $\mathrm{A}$, la sécante $(\mathrm{AB})$ pivote et
se rapproche d'une position limite : la **tangente**. Le nombre dérivé est sa pente.

> **Exemple détaillé.** $f(x) = x^2$ en $a = 3$.
> $$\frac{f(3+h) - f(3)}{h} = \frac{(3+h)^2 - 9}{h} = \frac{9 + 6h + h^2 - 9}{h} = \frac{h(6 + h)}{h} = 6 + h$$
> Quand $h \to 0$, cette quantité tend vers $6$. Donc $f'(3) = 6$.

---

## 3. Tangente

### Théorème

Si $f$ est dérivable en $a$, la courbe représentative de $f$ admet en son point d'abscisse $a$
une **tangente** d'équation

$$\boxed{y = f'(a)(x - a) + f(a)}$$

> **La lecture à retenir** : $f'(a)$ est la **pente**, et le point de contact est
> $\left(a\,;f(a)\right)$.

> **Exemple.** $f(x) = x^2$, tangente en $a = 3$ : $f(3) = 9$ et $f'(3) = 6$, donc
> $y = 6(x - 3) + 9 = 6x - 9$.

---

## 4. Approximation affine

Au voisinage de $a$, la courbe se confond presque avec sa tangente :

$$f(a + h) \approx f(a) + f'(a)\,h \qquad \text{pour } h \text{ proche de } 0$$

C'est ce qui justifie qu'on puisse remplacer localement une fonction compliquée par une
fonction affine.

> **Exemple.** $f(x) = \sqrt{x}$, $a = 100$, $f'(100) = \dfrac{1}{2\sqrt{100}} = 0{,}05$.
> Donc $\sqrt{101} \approx 10 + 0{,}05 = 10{,}05$. La vraie valeur est $10{,}0499\ldots$

---

## 5. Fonction dérivée et dérivées usuelles

Si $f$ est dérivable en tout point d'un intervalle $I$, la fonction qui à $x$ associe $f'(x)$
est la **fonction dérivée** de $f$.

| $f(x)$ | $f'(x)$ | Valable sur |
|---|---|---|
| $k$ (constante) | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $x^2$ | $2x$ | $\mathbb{R}$ |
| $x^n$ ($n$ entier $\geqslant 1$) | $n\,x^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $]0\,;+\infty[$ |
| $\mathrm{e}^x$ | $\mathrm{e}^x$ | $\mathbb{R}$ |

> ⚠️ $\sqrt{x}$ est définie en $0$ mais **n'y est pas dérivable** — la tangente y est verticale.

---

## 6. Opérations sur les dérivées

Pour $u$ et $v$ dérivables et $k$ réel :

| Fonction | Dérivée |
|---|---|
| $u + v$ | $u' + v'$ |
| $k\,u$ | $k\,u'$ |
| $u\,v$ | $\boxed{u'v + uv'}$ |
| $\dfrac{1}{v}$ (avec $v \neq 0$) | $-\dfrac{v'}{v^2}$ |
| $\dfrac{u}{v}$ (avec $v \neq 0$) | $\boxed{\dfrac{u'v - uv'}{v^2}}$ |
| $u^n$ | $n\,u'\,u^{n-1}$ |
| $x \mapsto f(ax+b)$ | $x \mapsto a\,f'(ax+b)$ |

> **Exemple — produit.** $f(x) = (2x+1)(x^2-3)$.
> Avec $u = 2x+1$, $u' = 2$, $v = x^2-3$, $v' = 2x$ :
> $f'(x) = 2(x^2-3) + (2x+1)(2x) = 2x^2 - 6 + 4x^2 + 2x = 6x^2 + 2x - 6$.

> **Exemple — quotient.** $f(x) = \dfrac{x}{x+1}$.
> $u = x$, $u' = 1$, $v = x+1$, $v' = 1$ :
> $f'(x) = \dfrac{1 \times (x+1) - x \times 1}{(x+1)^2} = \dfrac{1}{(x+1)^2}$.

---

## 7. À retenir absolument

| | |
|---|---|
| Nombre dérivé | $f'(a) = \lim\limits_{h \to 0} \dfrac{f(a+h)-f(a)}{h}$ |
| Interprétation | pente de la tangente au point d'abscisse $a$ |
| Équation de la tangente | $y = f'(a)(x-a) + f(a)$ |
| Approximation affine | $f(a+h) \approx f(a) + f'(a)h$ |
| Dérivée d'un produit | $u'v + uv'$ |
| Dérivée d'un quotient | $\dfrac{u'v - uv'}{v^2}$ |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que $(uv)' = u'v'$.** C'est faux. La formule est $u'v + uv'$.
2. **Inverser le numérateur du quotient.** C'est $u'v - uv'$, dans cet ordre. L'inversion
   change le signe de toute la dérivée.
3. **Confondre $f'(a)$ et $f(a)$.** Le premier est la pente, le second l'ordonnée du point.
   Dans l'équation de la tangente, les deux apparaissent — à des places différentes.
4. **Oublier le facteur $a$** en dérivant $f(ax+b)$ : la dérivée est $a\,f'(ax+b)$, pas
   $f'(ax+b)$.
5. **Dériver $\sqrt{x}$ en $0$.** La fonction y est définie mais pas dérivable.
6. **Oublier l'ensemble de dérivabilité** : $\dfrac{1}{x}$ n'est pas dérivable en $0$, pas plus
   qu'elle n'y est définie.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale,
section « Dérivation » (docs/programme-premiere-specialite-maths-2026.txt, ligne 1830).

L'extraction PDF est fortement dégradée sur cette section : les formules éclatent en fragments
à cause des polices mathématiques. La STRUCTURE est fiable (point de vue local, limite des
sécantes, pente, tangente, approximation affine) mais les formulations exactes ne le sont pas.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des dérivées usuelles exigibles (exp est-elle traitée ici ou seulement
  dans le chapitre « Fonction exponentielle » ?)
- La dérivée de x ↦ f(ax+b) est-elle au programme de première, ou réservée à la terminale ?
- Les démonstrations exigibles (probablement : dérivée de x², de 1/x, formule du produit)
- Le lien dérivée/variations est traité dans le chapitre séparé « Variations et courbes
  représentatives des fonctions » — vérifier qu'il n'y a pas de recouvrement à arbitrer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
