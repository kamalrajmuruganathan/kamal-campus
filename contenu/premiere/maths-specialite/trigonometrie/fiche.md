---
id: 1spe-math-trigonometrie
titre: "Trigonométrie"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 14
prerequis:
  - Cosinus et sinus dans le triangle rectangle (collège)
  - Cercle et repérage (Seconde)
statut: brouillon
relu_par: null
---

# Trigonométrie

> Le passage clé de ce chapitre : le cosinus et le sinus cessent d'être des rapports dans un
> triangle rectangle pour devenir des **fonctions d'un nombre réel**. C'est l'**enroulement de
> la droite numérique** autour du cercle qui rend ce saut possible.

---

## 1. Le cercle trigonométrique

### Définition

Dans un repère orthonormé $(\mathrm{O}\,;\vec{\imath}\,,\vec{\jmath})$, le **cercle
trigonométrique** est le cercle de centre $\mathrm{O}$ et de rayon $1$, **orienté** : le sens
positif est le sens inverse des aiguilles d'une montre.

### L'enroulement de la droite numérique

On enroule la droite des réels autour de ce cercle. À chaque réel $x$ correspond ainsi un
**unique point $\mathrm{M}$** du cercle.

> Comme le cercle a pour périmètre $2\pi$, les réels $x$ et $x + 2\pi$ arrivent **au même
> point**. Plus généralement, $x$ et $x + 2k\pi$ ($k$ entier) donnent le même point.

---

## 2. Le radian

Le **radian** mesure un angle par la **longueur d'arc** qu'il intercepte sur le cercle
trigonométrique.

$$\pi \text{ radians} = 180°$$

### Conversion

$$\text{radians} = \text{degrés} \times \frac{\pi}{180}$$

| Degrés | $0$ | $30$ | $45$ | $60$ | $90$ | $180$ | $360$ |
|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $2\pi$ |

---

## 3. Cosinus et sinus d'un réel

### Définition

Si $\mathrm{M}$ est le point associé au réel $x$ par l'enroulement, alors

$$\boxed{\mathrm{M}\left(\cos x\,;\,\sin x\right)}$$

Le **cosinus est l'abscisse**, le **sinus est l'ordonnée**.

### Lien avec le triangle rectangle

Pour $x \in \left]0\,;\dfrac{\pi}{2}\right[$, on retrouve exactement les définitions du collège :
$\cos = \dfrac{\text{adjacent}}{\text{hypoténuse}}$, $\sin = \dfrac{\text{opposé}}{\text{hypoténuse}}$.
La nouvelle définition **prolonge** l'ancienne à tous les réels.

### Propriétés immédiates

$$-1 \leqslant \cos x \leqslant 1 \qquad\qquad -1 \leqslant \sin x \leqslant 1$$

$$\boxed{\cos^2 x + \sin^2 x = 1}$$

*Pourquoi* : $\mathrm{M}$ est sur le cercle de rayon $1$, donc $\mathrm{OM}^2 = 1$. C'est
le théorème de Pythagore.

$$\cos(x + 2k\pi) = \cos x \qquad \sin(x + 2k\pi) = \sin x \qquad (k \in \mathbb{Z})$$

---

## 4. Valeurs remarquables

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ |
| $\sin x$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ | $0$ |

> **Le moyen de retenir.** Écris au numérateur $\sqrt{0}, \sqrt{1}, \sqrt{2}, \sqrt{3}, \sqrt{4}$
> et divise tout par $2$ : tu obtiens $0,\ \frac12,\ \frac{\sqrt2}{2},\ \frac{\sqrt3}{2},\ 1$.
> C'est la ligne du **sinus** pour $x = 0,\ \frac{\pi}{6},\ \frac{\pi}{4},\ \frac{\pi}{3},\ \frac{\pi}{2}$.
> La ligne du cosinus est la même, **lue à l'envers**.

---

## 5. Angles associés

Ces relations se **lisent sur le cercle**, par symétrie. Ne les apprends pas par cœur : place
le point et regarde.

| Angle | $\cos$ | $\sin$ | Symétrie |
|---|---|---|---|
| $-x$ | $\cos x$ | $-\sin x$ | axe des abscisses |
| $\pi - x$ | $-\cos x$ | $\sin x$ | axe des ordonnées |
| $\pi + x$ | $-\cos x$ | $-\sin x$ | centre $\mathrm{O}$ |
| $\dfrac{\pi}{2} - x$ | $\sin x$ | $\cos x$ | première bissectrice |

> **Conséquence sur la parité** : $\cos$ est **paire**, $\sin$ est **impaire**.

> **Exemple.** $\cos\left(\dfrac{2\pi}{3}\right) = \cos\left(\pi - \dfrac{\pi}{3}\right)
> = -\cos\left(\dfrac{\pi}{3}\right) = -\dfrac{1}{2}$.

---

## 6. À retenir absolument

| | |
|---|---|
| Cercle trigonométrique | centre $\mathrm{O}$, rayon $1$, orienté |
| Point associé à $x$ | $\mathrm{M}(\cos x\,;\sin x)$ |
| Relation fondamentale | $\cos^2 x + \sin^2 x = 1$ |
| Encadrement | $-1 \leqslant \cos x \leqslant 1$, idem pour $\sin$ |
| Périodicité | $\cos(x+2k\pi) = \cos x$ |
| Parité | $\cos$ paire, $\sin$ impaire |
| $\pi$ rad | $180°$ |

---

## 7. Les erreurs qui coûtent des points

1. **Travailler en degrés sur la calculatrice.** En trigonométrie de première, on est en
   **radians**. Vérifie le mode avant tout calcul.
2. **Écrire $\cos^2 x = \cos(x^2)$.** $\cos^2 x$ signifie $(\cos x)^2$.
3. **Confondre abscisse et ordonnée** : $\cos$ est l'**abscisse**, $\sin$ l'ordonnée. En cas
   de doute, $\cos 0 = 1$ — le point associé à $0$ est à droite, sur l'axe des abscisses.
4. **Chercher $x$ tel que $\cos x = 2$.** Impossible : le cosinus reste entre $-1$ et $1$.
5. **Oublier $+2k\pi$** en résolvant une équation trigonométrique : il y a une infinité de
   solutions.
6. **Apprendre les angles associés par cœur.** Ils se retrouvent en dix secondes sur un cercle
   dessiné à main levée, et la mémoire trahit toujours en contrôle.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Trigonométrie » (ligne 2368 du .txt extrait).

Éléments lisibles dans l'extraction : enroulement de la droite numérique, cosinus et sinus
d'un réel, lien avec le triangle rectangle, valeurs remarquables, placer un point sur le
cercle trigonométrique, déterminer par lecture du cercle les angles associés.
Une DÉMONSTRATION est explicitement mentionnée : « Calcul de cos, sin » pour les angles
associés.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme mentionne une « Approximation de … » dont l'extraction a perdu l'objet.
  Il s'agit probablement de sin(x) ≈ x au voisinage de 0 — à vérifier et à ajouter si c'est
  le cas, car c'est une capacité attendue distinctive.
- Les fonctions cosinus et sinus comme fonctions (courbes représentatives, périodicité
  graphique, dérivées) sont-elles au programme de première ou de terminale ? Je ne les ai
  pas traitées ici.
- La résolution d'équations trigonométriques (cos x = a) est-elle exigible en première ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
