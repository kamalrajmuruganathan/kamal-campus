---
id: 1sti2d-produit-scalaire
titre: "Produit scalaire"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 13
prerequis:
  - Vecteurs et coordonnées (Seconde)
  - Trigonométrie (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Produit scalaire

> Le produit scalaire est l'outil qui fait entrer **longueurs et angles** dans le
> calcul vectoriel. En STI2D et STL, il a une contrepartie physique immédiate : le
> **travail d'une force** en est exactement un.

---

## 1. Trois expressions équivalentes

On choisit celle qui correspond aux données de l'énoncé.

### a. Avec les normes et l'angle

$$\boxed{\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos\theta}$$

où $\theta$ est l'angle entre les deux vecteurs.

### b. En base orthonormée — l'expression de calcul

Si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ :

$$\boxed{\vec{u} \cdot \vec{v} = xx' + yy'}$$

> ⚠️ **Valable uniquement en repère ORTHONORMÉ.** Le programme précise que les
> situations de géométrie repérée y sont traitées exclusivement.

### c. Par projection orthogonale

$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v'}\|$$

où $\vec{v'}$ est le **projeté orthogonal** de $\vec v$ sur la direction de $\vec u$
— au signe près, selon que le projeté est dans le même sens que $\vec u$ ou non.

> **C'est l'interprétation physique** : seule la composante de la force **dans la
> direction du déplacement** travaille.

---

## 2. Le résultat est un NOMBRE

$$\vec{u} \cdot \vec{v} \in \mathbb{R}$$

D'où le nom *scalaire*. Il peut être positif, négatif ou nul.

| Signe | Angle |
|---|---|
| $\vec u \cdot \vec v > 0$ | **aigu** |
| $\vec u \cdot \vec v = 0$ | **droit** |
| $\vec u \cdot \vec v < 0$ | **obtus** |

---

## 3. Carré scalaire et norme

$$\vec{u} \cdot \vec{u} = \|\vec{u}\|^2 \qquad\qquad \|\vec{u}\| = \sqrt{x^2 + y^2}$$

---

## 4. Propriétés

| Propriété | Formule |
|---|---|
| **Symétrie** | $\vec u \cdot \vec v = \vec v \cdot \vec u$ |
| **Bilinéarité** | $\vec u \cdot (\vec v + \vec w) = \vec u\cdot\vec v + \vec u\cdot\vec w$ |
| | $(k\vec u) \cdot \vec v = k(\vec u \cdot \vec v)$ |

Ces propriétés permettent de **développer comme en algèbre** :

$$\boxed{\|\vec u + \vec v\|^2 = \|\vec u\|^2 + 2\,\vec u\cdot\vec v + \|\vec v\|^2}$$

### Égalité du parallélogramme

$$\|\vec u + \vec v\|^2 + \|\vec u - \vec v\|^2 = 2\left(\|\vec u\|^2 + \|\vec v\|^2\right)$$

---

## 5. Orthogonalité

$$\boxed{\vec u \perp \vec v \iff \vec u \cdot \vec v = 0}$$

> **C'est l'usage numéro un.** Pour démontrer que deux droites sont perpendiculaires,
> on calcule le produit scalaire de deux vecteurs directeurs et on montre qu'il est nul.

> ⚠️ Deux vecteurs **non nuls** peuvent avoir un produit scalaire nul — c'est même
> tout l'intérêt. Contrairement au produit de deux nombres, un produit scalaire nul
> n'impose pas qu'un facteur soit nul.

---

## 6. Calculer un angle, calculer une longueur

### Angle

$$\cos\theta = \frac{\vec u \cdot \vec v}{\|\vec u\| \times \|\vec v\|}$$

### Théorème d'Al-Kashi

Dans un triangle $\mathrm{ABC}$, avec $a = \mathrm{BC}$, $b = \mathrm{AC}$,
$c = \mathrm{AB}$ :

$$\boxed{a^2 = b^2 + c^2 - 2bc\,\cos\widehat{\mathrm{A}}}$$

> **C'est une généralisation du théorème de Pythagore** — le programme le présente
> explicitement ainsi. Si $\widehat{\mathrm{A}} = 90°$, alors $\cos\widehat{\mathrm{A}} = 0$
> et l'on retrouve $a^2 = b^2 + c^2$.

> ⚠️ L'angle utilisé doit être celui **opposé** au côté $a$ que l'on calcule.

---

## 7. Le lien avec la physique — le travail d'une force

$$\boxed{W_{\mathrm{AB}}\!\left(\vec F\right) = \vec F \cdot \overrightarrow{\mathrm{AB}}
= F \times \mathrm{AB} \times \cos\alpha}$$

Le travail d'une force **est** un produit scalaire. Trois conséquences directes, que
le programme cite comme illustration :

**1. Une force perpendiculaire au déplacement ne travaille pas.**
$\cos 90° = 0$, donc $W = 0$. Le poids d'un objet déplacé horizontalement effectue un
travail **nul**.

**2. Le travail de la force résultante est la somme des travaux.**
C'est exactement la **bilinéarité** :
$$\left(\vec{F_1} + \vec{F_2}\right) \cdot \overrightarrow{\mathrm{AB}}
= \vec{F_1} \cdot \overrightarrow{\mathrm{AB}} + \vec{F_2} \cdot \overrightarrow{\mathrm{AB}}$$

**3. Le signe indique l'effet.**

| Signe de $W$ | Nature | Effet |
|---|---|---|
| $W > 0$ | moteur | accélère |
| $W < 0$ | résistant | freine |
| $W = 0$ | — | aucun effet sur la vitesse |

---

## 8. À retenir absolument

| | |
|---|---|
| En coordonnées | $\vec u \cdot \vec v = xx' + yy'$ (repère **orthonormé**) |
| Avec l'angle | $\|\vec u\|\,\|\vec v\|\cos\theta$ |
| Nature du résultat | un **nombre réel** |
| Orthogonalité | produit scalaire **nul** |
| Développement | $\|\vec u+\vec v\|^2 = \|\vec u\|^2 + 2\vec u\cdot\vec v + \|\vec v\|^2$ |
| Al-Kashi | $a^2 = b^2 + c^2 - 2bc\cos\widehat{\mathrm{A}}$ |
| Travail d'une force | $W = \vec F \cdot \overrightarrow{\mathrm{AB}}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire que le produit scalaire est un vecteur.** C'est un nombre.
2. **Conclure qu'un vecteur est nul** parce que le produit scalaire l'est.
3. **Oublier le facteur $2$** dans $\|\vec u+\vec v\|^2$.
4. **Se tromper de signe dans Al-Kashi** : c'est un **moins** $2bc\cos\widehat{\mathrm{A}}$.
5. **Utiliser $xx' + yy'$ dans un repère non orthonormé.**
6. **Croire qu'une force perpendiculaire au déplacement travaille.**
7. **Prendre le mauvais angle dans Al-Kashi** : il doit être opposé au côté cherché.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Géométrie dans le plan — Produit scalaire ».

⚠️ MÉTHODE : fiche construite sur l'UNION de deux extractions du PDF. Voir la note de
la fiche « energie ».

Éléments explicitement lisibles :
- « si [u] ou [v] est nul, alors [le produit scalaire est nul] »
- « Interprétation du produit scalaire en termes de PROJECTIONS ORTHOGONALES (du
  vecteur [u] ou du vecteur [v]) » — d'où la section 1c
- « Propriétés du produit scalaire : bilinéarité, symétrie »
- « Expressions, dans une base orthonormée, du produit scalaire de deux vecteurs, de
  la [norme] »
- « [Théorème d'Al-]Kashi, ÉGALITÉ DU PARALLÉLOGRAMME »
- Capacités : « Interpréter en termes de projection », « Utiliser un produit scalaire
  pour démontrer [une orthogonalité,] calculer un angle non orienté », « Utiliser un
  produit scalaire pour calculer des longueurs »
- Commentaires : « Les situations de géométrie repérée sont traitées UNIQUEMENT dans
  un repère orthonormé » ; « [Al-]Kashi est présenté comme une GÉNÉRALISATION DU
  THÉORÈME DE PYTHAGORE »
- Lien avec la physique-chimie, cité tel quel : « [le travail d'une] force
  perpendiculaire à la trajectoire est nul ou encore que le travail de la force
  résultante est la somme des travaux des forces en présence (illustration de la
  propriété de BILINÉARITÉ du produit scalaire) » — la section 7 reprend exactement
  ces deux illustrations.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'ensemble des points M tels que MA·MB = 0 (cercle de diamètre [AB]) est-il au
  programme ici ? Je ne l'ai PAS traité, faute de trace dans l'extraction — alors
  qu'il figure au programme de première générale.
- L'expression du produit scalaire avec le vecteur normal d'une droite est-elle
  attendue ?
- La formule de l'égalité du parallélogramme est nommée par le programme : est-elle
  exigible en tant que telle, ou seulement citée ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
