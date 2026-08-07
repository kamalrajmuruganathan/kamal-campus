---
id: 1spe-math-produit-scalaire
titre: "Calcul vectoriel et produit scalaire"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 15
prerequis:
  - Vecteurs et coordonnées (Seconde)
  - Trigonométrie (Première)
  - Théorème de Pythagore (collège)
statut: brouillon
relu_par: null
---

# Calcul vectoriel et produit scalaire

> Le produit scalaire est l'outil qui fait entrer les **longueurs et les angles** dans le calcul
> vectoriel. Deux vecteurs, une multiplication, et le résultat est un **nombre** — d'où le mot
> *scalaire*. C'est ce nombre qui permet de démontrer une orthogonalité ou de calculer un angle.

---

## 1. Définitions du produit scalaire

Il existe plusieurs expressions équivalentes. On choisit celle qui correspond aux données du
problème.

### a. Avec les normes et l'angle

$$\boxed{\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos\theta}$$

où $\theta$ est l'angle entre les deux vecteurs.

### b. En base orthonormée — l'expression de calcul

Si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ :

$$\boxed{\vec{u} \cdot \vec{v} = x x' + y y'}$$

C'est la formule qu'on utilise en pratique dès qu'on a des coordonnées.

### c. Avec les normes seules

$$\vec{u} \cdot \vec{v} = \frac{1}{2}\left(\|\vec{u} + \vec{v}\|^2 - \|\vec{u}\|^2 - \|\vec{v}\|^2\right)$$

---

## 2. Norme et carré scalaire

$$\vec{u} \cdot \vec{u} = \|\vec{u}\|^2 \qquad\qquad \|\vec{u}\| = \sqrt{x^2 + y^2}$$

On note $\vec{u}^{\,2} = \vec{u} \cdot \vec{u}$, appelé **carré scalaire**.

---

## 3. Propriétés

Pour tous vecteurs $\vec{u}, \vec{v}, \vec{w}$ et tout réel $k$ :

| Propriété | Formule |
|---|---|
| **Symétrie** | $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$ |
| **Bilinéarité** | $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u}\cdot\vec{v} + \vec{u}\cdot\vec{w}$ |
| | $(k\vec{u}) \cdot \vec{v} = k\,(\vec{u} \cdot \vec{v})$ |

Ces propriétés permettent de **développer comme en algèbre** :

$$\boxed{\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u}\cdot\vec{v} + \|\vec{v}\|^2}$$

$$\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 - 2\,\vec{u}\cdot\vec{v} + \|\vec{v}\|^2$$

> C'est l'analogue vectoriel de $(a+b)^2 = a^2 + 2ab + b^2$.

---

## 4. Le critère d'orthogonalité

### Théorème

$$\boxed{\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0}$$

*Pourquoi* : si les vecteurs sont non nuls, $\cos\theta = 0$ équivaut à $\theta = \dfrac{\pi}{2}$.

> **C'est l'usage numéro un du produit scalaire.** Pour démontrer que deux droites sont
> perpendiculaires, on calcule le produit scalaire de deux vecteurs directeurs et on montre
> qu'il est nul.

> **Exemple.** $\vec{u}\begin{pmatrix} 3 \\ -2 \end{pmatrix}$ et
> $\vec{v}\begin{pmatrix} 4 \\ 6 \end{pmatrix}$ :
> $\vec{u} \cdot \vec{v} = 3 \times 4 + (-2) \times 6 = 12 - 12 = 0$.
> Les vecteurs sont orthogonaux.

---

## 5. Calculer un angle

De $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$ on tire

$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \times \|\vec{v}\|}$$

> **Le signe renseigne déjà** : produit scalaire positif → angle aigu ; négatif → angle obtus ;
> nul → angle droit.

---

## 6. Théorème d'Al-Kashi

Dans un triangle $\mathrm{ABC}$, en notant $a = \mathrm{BC}$, $b = \mathrm{AC}$,
$c = \mathrm{AB}$ :

$$\boxed{a^2 = b^2 + c^2 - 2bc\,\cos\widehat{\mathrm{A}}}$$

*C'est la généralisation du théorème de Pythagore* : si $\widehat{\mathrm{A}} = \dfrac{\pi}{2}$,
alors $\cos\widehat{\mathrm{A}} = 0$ et on retrouve $a^2 = b^2 + c^2$.

**Démonstration** (exigible au programme) : partir de
$\overrightarrow{\mathrm{BC}} = \overrightarrow{\mathrm{AC}} - \overrightarrow{\mathrm{AB}}$,
puis élever au carré scalaire et développer.

---

## 7. Ensemble des points $\mathrm{M}$ tels que $\overrightarrow{\mathrm{MA}} \cdot \overrightarrow{\mathrm{MB}} = 0$

### Théorème

L'ensemble des points $\mathrm{M}$ vérifiant
$\overrightarrow{\mathrm{MA}} \cdot \overrightarrow{\mathrm{MB}} = 0$ est le **cercle de
diamètre $[\mathrm{AB}]$**.

*Interprétation* : c'est exactement la propriété « un triangle inscrit dans un demi-cercle est
rectangle », redémontrée avec le produit scalaire.

**Démonstration** (exigible) : en notant $\mathrm{I}$ le milieu de $[\mathrm{AB}]$, on écrit
$\overrightarrow{\mathrm{MA}} = \overrightarrow{\mathrm{MI}} + \overrightarrow{\mathrm{IA}}$ et
$\overrightarrow{\mathrm{MB}} = \overrightarrow{\mathrm{MI}} + \overrightarrow{\mathrm{IB}}
= \overrightarrow{\mathrm{MI}} - \overrightarrow{\mathrm{IA}}$. Le produit devient
$\mathrm{MI}^2 - \mathrm{IA}^2$, nul si et seulement si $\mathrm{MI} = \mathrm{IA}$.

---

## 8. À retenir absolument

| | |
|---|---|
| En coordonnées | $\vec{u} \cdot \vec{v} = xx' + yy'$ |
| Avec l'angle | $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$ |
| Carré scalaire | $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$ |
| Norme | $\|\vec{u}\| = \sqrt{x^2 + y^2}$ |
| Orthogonalité | $\vec{u} \cdot \vec{v} = 0$ |
| Développement | $\|\vec{u}+\vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u}\cdot\vec{v} + \|\vec{v}\|^2$ |
| Al-Kashi | $a^2 = b^2 + c^2 - 2bc\cos\widehat{\mathrm{A}}$ |
| $\overrightarrow{\mathrm{MA}}\cdot\overrightarrow{\mathrm{MB}} = 0$ | cercle de diamètre $[\mathrm{AB}]$ |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire que le produit scalaire est un vecteur.** C'est un **nombre réel**.
2. **Confondre $\vec{u} \cdot \vec{v} = 0$ avec $\vec{u} = \vec{0}$ ou $\vec{v} = \vec{0}$.**
   Deux vecteurs non nuls peuvent avoir un produit scalaire nul — c'est même tout l'intérêt.
3. **Oublier le facteur $2$** dans $\|\vec{u}+\vec{v}\|^2 = \|\vec{u}\|^2 + 2\vec{u}\cdot\vec{v}
   + \|\vec{v}\|^2$.
4. **Se tromper de signe dans Al-Kashi** : c'est un **moins** $2bc\cos\widehat{\mathrm{A}}$.
5. **Utiliser la formule $xx' + yy'$ dans une base non orthonormée.** Elle n'y est pas valable.
6. **Appliquer Al-Kashi avec le mauvais angle** : l'angle utilisé doit être celui **opposé**
   au côté $a$ qu'on calcule.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Calcul vectoriel et produit scalaire » (ligne 2500 du .txt extrait).

Éléments explicitement lisibles dans l'extraction : bilinéarité, symétrie, expression du
produit scalaire et de la norme en base orthonormée, critère d'orthogonalité, expression des
coordonnées en termes de produits scalaires avec les vecteurs de la base, développement de
‖u+v‖², théorème d'Al-Kashi. Deux DÉMONSTRATIONS exigibles sont nommées : Al-Kashi avec le
produit scalaire, et l'ensemble des points M tels que MA·MB = 0. Approfondissement possible
mentionné : la loi des sinus.
Le programme précise aussi : « Les élèves doivent conserver une pratique du calcul vectoriel
en géométrie non repérée. »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'expression des coordonnées via les produits scalaires avec les vecteurs de la base
  (x = u·i et y = u·j) est au programme — je ne l'ai pas développée, à ajouter.
- La définition retenue en premier par le programme (normes et angle, ou coordonnées ?)
- La loi des sinus est en approfondissement possible : à ajouter ou non selon le choix
  pédagogique.
- Les démonstrations que j'esquisse doivent être rédigées en entier pour être exploitables.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
