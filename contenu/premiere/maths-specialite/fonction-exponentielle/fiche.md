---
id: 1spe-math-fonction-exponentielle
titre: "Fonction exponentielle"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Dérivation (Première)
  - Suites géométriques (Première)
  - Puissances (Seconde)
statut: brouillon
relu_par: null
---

# Fonction exponentielle

> La seule fonction qui soit **égale à sa propre dérivée**. C'est cette propriété qui la
> définit, et tout le reste en découle. Elle modélise ce qui croît proportionnellement à
> sa propre taille : population, capital, désintégration.

---

## 1. Définition

### Théorème et définition

Il existe une **unique** fonction $f$ dérivable sur $\mathbb{R}$ telle que

$$\boxed{f' = f \qquad \text{et} \qquad f(0) = 1}$$

Cette fonction est la **fonction exponentielle**, notée $\exp$.

> **Ce qu'il faut comprendre.** La vitesse de variation en chaque point est égale à la valeur
> atteinte. Plus la fonction est grande, plus elle croît vite — d'où l'explosion caractéristique
> de la croissance exponentielle.

### Le nombre $\mathrm{e}$

$$\mathrm{e} = \exp(1) \approx 2{,}718\,281\ldots$$

On note alors $\exp(x) = \mathrm{e}^x$, notation qui sera justifiée par les propriétés
algébriques ci-dessous.

---

## 2. Propriétés algébriques

Pour tous réels $a$ et $b$, et tout entier $n$ :

| Propriété | Formule |
|---|---|
| Produit | $\boxed{\mathrm{e}^{a+b} = \mathrm{e}^a \times \mathrm{e}^b}$ |
| Inverse | $\mathrm{e}^{-a} = \dfrac{1}{\mathrm{e}^a}$ |
| Quotient | $\mathrm{e}^{a-b} = \dfrac{\mathrm{e}^a}{\mathrm{e}^b}$ |
| Puissance | $\left(\mathrm{e}^a\right)^n = \mathrm{e}^{\,na}$ |
| Valeur en 0 | $\mathrm{e}^0 = 1$ |

> **Le principe unificateur.** L'exponentielle **transforme les sommes en produits**.
> C'est pour cela qu'elle se note comme une puissance : elle en suit exactement les règles.

> **Exemple.** $\mathrm{e}^3 \times \mathrm{e}^{-5} = \mathrm{e}^{3-5} = \mathrm{e}^{-2} = \dfrac{1}{\mathrm{e}^2}$.

---

## 3. Signe et variations

### Propriété — strictement positive

$$\boxed{\text{Pour tout } x \in \mathbb{R}, \quad \mathrm{e}^x > 0}$$

*Conséquence pratique majeure* : dans une étude de signe, un facteur $\mathrm{e}^{\text{quelque chose}}$
peut toujours être **écarté** — il ne change jamais le signe.

### Variations

Puisque $\exp' = \exp > 0$, la fonction exponentielle est **strictement croissante sur
$\mathbb{R}$**.

| $x$ | $-\infty$ | | $+\infty$ |
|---|---|---|---|
| $\exp'(x)$ | | $+$ | |
| $\exp(x)$ | $0$ | $\nearrow$ | $+\infty$ |

### Conséquences pour résoudre

Comme $\exp$ est strictement croissante :

$$\mathrm{e}^a = \mathrm{e}^b \iff a = b \qquad\qquad \mathrm{e}^a < \mathrm{e}^b \iff a < b$$

> **Exemple.** $\mathrm{e}^{2x-1} = \mathrm{e}^{x+3} \iff 2x - 1 = x + 3 \iff x = 4$.

---

## 4. Courbe représentative

- Passe par $(0\,;1)$
- Tangente en $0$ d'équation $y = x + 1$ *(car $\exp(0) = 1$ et $\exp'(0) = 1$)*
- Toujours au-dessus de l'axe des abscisses
- Croît de plus en plus vite

---

## 5. Dérivées composées

| Fonction | Dérivée |
|---|---|
| $\mathrm{e}^x$ | $\mathrm{e}^x$ |
| $\mathrm{e}^{ax+b}$ | $\boxed{a\,\mathrm{e}^{ax+b}}$ |
| $\mathrm{e}^{u}$ | $u'\,\mathrm{e}^{u}$ |

> **Exemple.** $f(x) = \mathrm{e}^{3x-2}$ donne $f'(x) = 3\,\mathrm{e}^{3x-2}$.
> $g(x) = \mathrm{e}^{-x}$ donne $g'(x) = -\mathrm{e}^{-x}$ : elle est **décroissante**.

---

## 6. Lien avec les suites géométriques

Pour un réel $a$ fixé, la suite $\left(\mathrm{e}^{an}\right)$ est **géométrique de raison
$\mathrm{e}^a$**, puisque

$$\frac{\mathrm{e}^{a(n+1)}}{\mathrm{e}^{an}} = \mathrm{e}^{a}$$

C'est la traduction exacte de ce qu'on a vu sur les suites : l'exponentielle est le **modèle
continu** de la croissance géométrique.

| | Discret | Continu |
|---|---|---|
| Objet | suite géométrique $u_0 q^n$ | fonction $x \mapsto u_0\,\mathrm{e}^{kx}$ |
| Croissance | $q > 1$ | $k > 0$ |
| Décroissance | $0 < q < 1$ | $k < 0$ |

---

## 7. À retenir absolument

| | |
|---|---|
| Définition | unique fonction avec $f' = f$ et $f(0) = 1$ |
| Signe | $\mathrm{e}^x > 0$ **toujours** |
| Variations | strictement croissante sur $\mathbb{R}$ |
| Somme → produit | $\mathrm{e}^{a+b} = \mathrm{e}^a\,\mathrm{e}^b$ |
| Dérivée composée | $\left(\mathrm{e}^{ax+b}\right)' = a\,\mathrm{e}^{ax+b}$ |
| Équation | $\mathrm{e}^a = \mathrm{e}^b \iff a = b$ |
| $\mathrm{e}$ | $\approx 2{,}718$ |

---

## 8. Les erreurs qui coûtent des points

1. **Écrire $\mathrm{e}^{a+b} = \mathrm{e}^a + \mathrm{e}^b$.** Faux. L'exponentielle
   transforme les sommes en **produits**, jamais en sommes.
2. **Chercher quand $\mathrm{e}^x$ est négative ou nulle.** Elle ne l'est jamais. Toute
   équation $\mathrm{e}^x = -3$ ou $\mathrm{e}^x = 0$ n'a **aucune** solution.
3. **Oublier le facteur $a$** en dérivant $\mathrm{e}^{ax+b}$ : la dérivée est
   $a\,\mathrm{e}^{ax+b}$.
4. **Croire que $\mathrm{e}^{-x}$ est croissante.** Sa dérivée vaut $-\mathrm{e}^{-x} < 0$ :
   elle est décroissante.
5. **Simplifier $\dfrac{\mathrm{e}^a}{\mathrm{e}^b}$ en $\mathrm{e}^{a/b}$.** C'est
   $\mathrm{e}^{a-b}$.
6. **Garder un facteur exponentiel dans un tableau de signes.** Puisqu'il est toujours positif,
   il n'influence rien — le dire et l'écarter.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale,
section « Fonction exponentielle » (ligne 2155 du .txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La DÉFINITION retenue par le nouveau programme. Deux entrées coexistent selon les
  programmes : (a) l'unique fonction dérivable telle que f' = f et f(0) = 1, (b) le
  prolongement continu des suites géométriques. J'ai retenu (a), qui est l'entrée classique
  en première — à confirmer, car le programme insiste ailleurs sur le lien avec les suites
  géométriques, ce qui pourrait signaler l'entrée (b).
- La relation fonctionnelle e^(a+b) = e^a · e^b est-elle démontrée (démonstration exigible)
  ou admise ?
- La dérivée de e^u en toute généralité est-elle au programme de première, ou seulement
  e^(ax+b) ? J'ai mis les deux, en mettant e^(ax+b) en évidence.
- La notion de limite en ±∞ n'est traitée qu'intuitivement en première : ne pas formaliser.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
