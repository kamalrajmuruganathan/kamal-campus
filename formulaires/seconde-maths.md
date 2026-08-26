---
id: seconde-maths
titre: "Formulaire — Seconde Mathématiques"
niveau: seconde
matiere: mathematiques
statut: brouillon
relu_par: null
---

Aide-mémoire de révision — programme de seconde générale. Que l'essentiel.

## Calcul numérique et algébrique

- Ensembles : $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}$.
- Racines carrées : $\boxed{\sqrt{a}\times\sqrt{b} = \sqrt{ab}} \qquad \dfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\dfrac{a}{b}}\ (b>0) \qquad (\sqrt{a})^2 = a$
- ⚠️ $\sqrt{a+b} \neq \sqrt{a}+\sqrt{b}$.
- Identités remarquables :
$$\boxed{(a+b)^2 = a^2+2ab+b^2} \qquad \boxed{(a-b)^2 = a^2-2ab+b^2} \qquad \boxed{(a-b)(a+b) = a^2-b^2}$$

## Arithmétique

- $\boxed{a \text{ multiple de } b \iff \exists\, k \text{ entier},\ a = kb}$
- $\boxed{n \text{ pair} \iff n = 2k} \qquad \boxed{n \text{ impair} \iff n = 2k+1}$

## Équations et inéquations

- $\boxed{A\times B = 0 \iff A = 0 \text{ ou } B = 0}$
- Quotient nul : $\dfrac{A}{B} = 0 \iff A = 0$ **et** $B\neq 0$.
- ⚠️ Inéquation : multiplier/diviser par un **négatif inverse** le sens.
- Résolution par **tableau de signes** (produit / quotient).

## Notion de fonction

- $f : x \mapsto f(x)$ ; ensemble de définition $D_f$ = valeurs de $x$ ayant une image.
- **Variations** : $f$ croissante si l'ordre est conservé ; décroissante s'il est inversé.
- Quatre représentations : formule, tableau de valeurs, courbe, tableau de variations.

## Fonctions de référence

| Fonction | Formule | Ensemble | Variation |
|---|---|---|---|
| Affine | $\boxed{f(x)=ax+b}$ | $\mathbb{R}$ | ↗ si $a>0$, ↘ si $a<0$ |
| Carré | $\boxed{f(x)=x^2}$ | $\mathbb{R}$ | ↘ sur $]-\infty;0]$, ↗ sur $[0;+\infty[$ |
| Inverse | $\boxed{f(x)=\dfrac{1}{x}}$ | $\mathbb{R}^*$ | ↘ sur chaque intervalle |
| Racine | $\boxed{f(x)=\sqrt{x}}$ | $[0;+\infty[$ | ↗ |
| Cube | $\boxed{f(x)=x^3}$ | $\mathbb{R}$ | ↗ |

- Comparaisons : sur $[0;1]$, $\sqrt{x}\geqslant x\geqslant x^2$ ; sur $[1;+\infty[$, $x^2\geqslant x\geqslant\sqrt{x}$.
- ⚠️ La fonction carré n'est pas croissante sur $\mathbb{R}$.

## Droites du plan

- Équation réduite : $\boxed{y = mx + p}$. Équation cartésienne : $\boxed{ax+by+c = 0}$, $(a;b)\neq(0;0)$.
- Coefficient directeur : $\boxed{m = \dfrac{y_B - y_A}{x_B - x_A}}$
- $y = mx+p$ a pour vecteur directeur $\vec{u}\begin{pmatrix}1\\m\end{pmatrix}$.
- Parallèles $\iff$ même coefficient directeur. Systèmes $2\times 2$ (substitution / combinaison).

## Vecteurs

- $\boxed{\overrightarrow{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}}$
- $\boxed{\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}}$ (Chasles)
- Norme (repère orthonormé) : $\boxed{\lVert\vec{u}\rVert = \sqrt{x^2+y^2}}$
- Colinéarité : $\boxed{\vec{u}\begin{pmatrix}x\\y\end{pmatrix},\ \vec{v}\begin{pmatrix}x'\\y'\end{pmatrix} \text{ colinéaires} \iff xy' - yx' = 0}$

## Statistiques

- Moyenne pondérée : $\boxed{\bar{x} = \dfrac{n_1 x_1 + n_2 x_2 + \cdots + n_p x_p}{N}}$
- Position : médiane, quartiles $Q_1, Q_3$. Dispersion : étendue, écart interquartile $Q_3 - Q_1$.
- Linéarité : moyenne de $ax+b$ = $a\bar{x}+b$.

## Probabilités

$$\boxed{P(A) = \frac{\text{issues favorables}}{\text{issues possibles}}} \qquad \boxed{P(\overline{A}) = 1 - P(A)}$$

$$\boxed{P(A\cup B) = P(A) + P(B) - P(A\cap B)}$$

- Loi de probabilité : somme des probabilités $=1$. Échantillonnage : fluctuation d'échantillonnage.

<!-- notes de production : source = contenu/seconde/maths/*/fiche.md, formules repérées via grep "boxed" + titres de section. Distance point-droite HORS programme (relève de la première). Norme/colinéarité valables en repère orthonormé. -->
