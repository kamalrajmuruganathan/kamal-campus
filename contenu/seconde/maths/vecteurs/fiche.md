---
id: 2nde-math-vecteurs
titre: "Vecteurs"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 13
prerequis:
  - Repérage dans le plan (cycle 4)
  - Translations et symétries (cycle 4)
statut: brouillon
relu_par: null
---

# Vecteurs

> Un vecteur code un **déplacement** : une direction, un sens, une longueur. Peu importe d'où
> l'on part — c'est ce qui le distingue d'un segment, et ce qui le rend si commode en géométrie
> comme en physique.

---

## 1. Définition

Le vecteur $\overrightarrow{\mathrm{AB}}$ est caractérisé par trois données :

| Caractéristique | Sens |
|---|---|
| **Direction** | celle de la droite $(\mathrm{AB})$ |
| **Sens** | de $\mathrm{A}$ vers $\mathrm{B}$ |
| **Norme** | la longueur $\mathrm{AB}$, notée $\left\lVert \overrightarrow{\mathrm{AB}} \right\rVert$ |

### Égalité de vecteurs

$$\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{CD}} \iff \mathrm{ABDC} \text{ est un parallélogramme}$$

> ⚠️ **Attention à l'ordre des lettres** : c'est $\mathrm{ABDC}$, pas $\mathrm{ABCD}$.
> Un moyen sûr : $\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{CD}}$ signifie que
> $[\mathrm{AD}]$ et $[\mathrm{BC}]$ ont le **même milieu**.

### Vecteur nul et opposé

$$\overrightarrow{\mathrm{AA}} = \vec{0} \qquad\qquad \overrightarrow{\mathrm{BA}} = -\overrightarrow{\mathrm{AB}}$$

---

## 2. Coordonnées

Dans un repère, si $\mathrm{A}(x_\mathrm{A}\,;y_\mathrm{A})$ et
$\mathrm{B}(x_\mathrm{B}\,;y_\mathrm{B})$ :

$$\boxed{\overrightarrow{\mathrm{AB}}\begin{pmatrix} x_\mathrm{B} - x_\mathrm{A} \\ y_\mathrm{B} - y_\mathrm{A} \end{pmatrix}}$$

> **L'ordre est « arrivée moins départ »**, jamais l'inverse. C'est l'erreur numéro un du
> chapitre.

> **Exemple.** $\mathrm{A}(1\,;5)$ et $\mathrm{B}(4\,;3)$ donnent
> $\overrightarrow{\mathrm{AB}}\begin{pmatrix} 3 \\ -2 \end{pmatrix}$.

### Norme (en repère orthonormé)

$$\left\lVert \vec{u} \right\rVert = \sqrt{x^2 + y^2}$$

### Milieu de $[\mathrm{AB}]$

$$\mathrm{I}\left(\frac{x_\mathrm{A}+x_\mathrm{B}}{2}\,;\frac{y_\mathrm{A}+y_\mathrm{B}}{2}\right)$$

---

## 3. Opérations

### Somme — la relation de Chasles

$$\boxed{\overrightarrow{\mathrm{AB}} + \overrightarrow{\mathrm{BC}} = \overrightarrow{\mathrm{AC}}}$$

> **La règle mnémotechnique** : le point d'arrivée du premier doit être le point de départ du
> second, et il « disparaît ». C'est l'outil le plus utilisé de tout le chapitre.

En coordonnées, on additionne composante par composante :

$$\vec{u}\begin{pmatrix} x \\ y \end{pmatrix} + \vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} x + x' \\ y + y' \end{pmatrix}$$

### Multiplication par un réel

$$k\,\vec{u}\begin{pmatrix} kx \\ ky \end{pmatrix}$$

- $k > 0$ : même sens, longueur multipliée par $k$
- $k < 0$ : **sens opposé**
- $k = 0$ : vecteur nul

---

## 4. Colinéarité

### Définition

$\vec{u}$ et $\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\vec{v} = k\,\vec{u}$
(avec $\vec{u} \neq \vec 0$).

Géométriquement : ils ont la **même direction**.

### Critère par le déterminant

$$\boxed{\vec{u}\begin{pmatrix} x \\ y \end{pmatrix} \text{ et } \vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix} \text{ colinéaires} \iff xy' - yx' = 0}$$

Le nombre $xy' - yx'$ s'appelle le **déterminant**. On le calcule « en croix ».

> **Exemple.** $\vec{u}\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ et
> $\vec{v}\begin{pmatrix} 6 \\ 9 \end{pmatrix}$ :
> $2 \times 9 - 3 \times 6 = 18 - 18 = 0$. Ils sont colinéaires (et en effet $\vec v = 3\vec u$).

### Les deux usages décisifs

| Pour démontrer que… | On montre que… |
|---|---|
| $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ sont **alignés** | $\overrightarrow{\mathrm{AB}}$ et $\overrightarrow{\mathrm{AC}}$ sont colinéaires |
| $(\mathrm{AB})$ et $(\mathrm{CD})$ sont **parallèles** | $\overrightarrow{\mathrm{AB}}$ et $\overrightarrow{\mathrm{CD}}$ sont colinéaires |

> ⚠️ La différence tient au **point commun** : pour l'alignement, les deux vecteurs partent
> du même point.

---

## 5. À retenir absolument

| | |
|---|---|
| Coordonnées de $\overrightarrow{\mathrm{AB}}$ | arrivée **moins** départ |
| Chasles | $\overrightarrow{\mathrm{AB}} + \overrightarrow{\mathrm{BC}} = \overrightarrow{\mathrm{AC}}$ |
| Norme (orthonormé) | $\sqrt{x^2+y^2}$ |
| Colinéarité | $xy' - yx' = 0$ |
| Alignement de A, B, C | $\overrightarrow{\mathrm{AB}}$, $\overrightarrow{\mathrm{AC}}$ colinéaires |
| Parallélisme | $\overrightarrow{\mathrm{AB}}$, $\overrightarrow{\mathrm{CD}}$ colinéaires |
| $\overrightarrow{\mathrm{AB}} = \overrightarrow{\mathrm{CD}}$ | $\mathrm{ABDC}$ parallélogramme |

---

## 6. Les erreurs qui coûtent des points

1. **Calculer départ moins arrivée.** C'est toujours **arrivée moins départ**.
2. **Écrire $\mathrm{ABCD}$ au lieu de $\mathrm{ABDC}$** dans la caractérisation du
   parallélogramme.
3. **Mal enchaîner Chasles** : $\overrightarrow{\mathrm{AB}} + \overrightarrow{\mathrm{CD}}$
   ne se simplifie pas, il faut un point commun.
4. **Croiser le déterminant à l'envers** : c'est $xy' - yx'$, dans cet ordre.
5. **Confondre alignement et parallélisme** : pour l'alignement, les vecteurs doivent partir
   du même point.
6. **Utiliser la formule de la norme dans un repère non orthonormé.**
7. **Confondre vecteur et segment** : $[\mathrm{AB}]$ et $[\mathrm{BA}]$ sont le même segment,
   mais $\overrightarrow{\mathrm{AB}}$ et $\overrightarrow{\mathrm{BA}}$ sont opposés.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Géométrie ». L'extraction fait apparaître un
intitulé « Caractérisations de la colinéarité de deux vecteurs », ce qui confirme que le
déterminant est bien au programme.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le mot « déterminant » est-il employé par le programme, ou parle-t-on seulement de
  « critère de colinéarité » ? Le vocabulaire attendu compte pour la notation.
- Les démonstrations exigibles de cette section.
- La décomposition d'un vecteur dans une base est-elle au programme de seconde ?
- Le produit scalaire n'est PAS en seconde (il est en première) : je ne l'ai pas introduit.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
