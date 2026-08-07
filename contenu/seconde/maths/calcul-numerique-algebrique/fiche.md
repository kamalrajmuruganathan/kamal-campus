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
