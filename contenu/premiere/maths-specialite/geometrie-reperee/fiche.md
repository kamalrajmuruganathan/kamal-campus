---
id: 1spe-math-geometrie-reperee
titre: "Géométrie repérée"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Produit scalaire (Première)
  - Équations de droites (Seconde)
  - Second degré (Première)
statut: brouillon
relu_par: null
---

# Géométrie repérée

> ⚠️ **Dans tout ce chapitre, le plan est rapporté à un repère ORTHONORMÉ.** C'est une
> condition du programme, pas un détail : sans elle, ni la formule du produit scalaire ni
> celle de la distance ne sont valables.

---

## 1. Vecteur normal à une droite

### Définition

Un **vecteur normal** à une droite $d$ est un vecteur non nul **orthogonal** à tout vecteur
directeur de $d$.

### Théorème fondamental

$$\boxed{\text{La droite d'équation } ax + by + c = 0 \text{ admet } \vec{n}\begin{pmatrix} a \\ b \end{pmatrix} \text{ pour vecteur normal}}$$

Les coefficients de l'équation **sont** les coordonnées du vecteur normal. C'est le résultat le
plus rentable du chapitre.

> **Exemple.** La droite $3x - 2y + 7 = 0$ a pour vecteur normal
> $\vec{n}\begin{pmatrix} 3 \\ -2 \end{pmatrix}$ et pour vecteur directeur
> $\vec{u}\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ *(on échange les coordonnées et on change un signe)*.

### Méthode — équation d'une droite à partir d'un point et d'un vecteur normal

$d$ passe par $\mathrm{A}(x_\mathrm{A}\,;y_\mathrm{A})$ et a pour vecteur normal
$\vec{n}\begin{pmatrix} a \\ b \end{pmatrix}$. Alors
$\mathrm{M}(x\,;y) \in d \iff \overrightarrow{\mathrm{AM}} \cdot \vec{n} = 0$, ce qui donne

$$a(x - x_\mathrm{A}) + b(y - y_\mathrm{A}) = 0$$

> **Exemple.** Droite passant par $\mathrm{A}(1\,;4)$ et de vecteur normal
> $\vec{n}\begin{pmatrix} 5 \\ -3 \end{pmatrix}$ :
> $5(x-1) - 3(y-4) = 0$, soit $5x - 3y + 7 = 0$.

### Perpendicularité

Deux droites sont perpendiculaires si et seulement si leurs vecteurs normaux sont orthogonaux.

---

## 2. Équation de cercle

### Forme centrée

Le cercle de centre $\Omega(x_0\,;y_0)$ et de rayon $R$ a pour équation

$$\boxed{(x - x_0)^2 + (y - y_0)^2 = R^2}$$

*Pourquoi* : $\mathrm{M}$ est sur le cercle si et seulement si $\Omega\mathrm{M} = R$, et la
distance en repère orthonormé vaut $\sqrt{(x-x_0)^2 + (y-y_0)^2}$.

> **Exemple.** Cercle de centre $(2\,;-3)$ et de rayon $5$ :
> $(x-2)^2 + (y+3)^2 = 25$.

### Forme développée — reconnaître un cercle

Une équation du type $x^2 + y^2 + \alpha x + \beta y + \gamma = 0$ **peut** être celle d'un
cercle. Pour le déterminer, on regroupe en carrés parfaits.

> **Méthode sur un exemple.** $x^2 + y^2 - 6x + 4y - 12 = 0$.
>
> $x^2 - 6x = (x-3)^2 - 9$ et $y^2 + 4y = (y+2)^2 - 4$.
>
> L'équation devient $(x-3)^2 - 9 + (y+2)^2 - 4 - 12 = 0$, soit
> $$(x-3)^2 + (y+2)^2 = 25$$
> C'est le cercle de **centre $(3\,;-2)$** et de **rayon $5$**.

> ⚠️ **Trois cas possibles** après regroupement, selon le second membre $k$ :
>
> | $k$ | Ensemble |
> |---|---|
> | $k > 0$ | cercle de rayon $\sqrt{k}$ |
> | $k = 0$ | un **seul point** (le centre) |
> | $k < 0$ | **ensemble vide** |
>
> Ne conclus jamais « c'est un cercle » sans avoir vérifié le signe.

### Le lien avec le produit scalaire

Le cercle de diamètre $[\mathrm{AB}]$ est l'ensemble des points $\mathrm{M}$ tels que
$\overrightarrow{\mathrm{MA}} \cdot \overrightarrow{\mathrm{MB}} = 0$. En développant en
coordonnées, on retrouve directement une équation de cercle.

---

## 3. Distances

| Objet | Formule |
|---|---|
| Distance $\mathrm{AB}$ | $\sqrt{(x_\mathrm{B}-x_\mathrm{A})^2 + (y_\mathrm{B}-y_\mathrm{A})^2}$ |
| Milieu de $[\mathrm{AB}]$ | $\left(\dfrac{x_\mathrm{A}+x_\mathrm{B}}{2}\,;\dfrac{y_\mathrm{A}+y_\mathrm{B}}{2}\right)$ |
| Norme de $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ | $\sqrt{x^2+y^2}$ |

---

## 4. Méthode — utiliser un repère pour étudier une configuration

C'est une capacité attendue du programme : face à un problème de géométrie « pure », on peut
**choisir un repère bien placé** et calculer.

1. Choisir un repère orthonormé qui simplifie les coordonnées — souvent l'origine sur un sommet,
   les axes sur deux côtés perpendiculaires
2. Écrire les coordonnées de tous les points utiles
3. Traduire la question : orthogonalité → produit scalaire nul, longueur → distance,
   alignement → colinéarité
4. Calculer, puis revenir à l'énoncé géométrique

> **L'intérêt** : un raisonnement géométrique parfois difficile devient un calcul mécanique.

---

## 5. À retenir absolument

| | |
|---|---|
| Droite $ax+by+c=0$ | vecteur normal $\begin{pmatrix} a \\ b \end{pmatrix}$ |
| … vecteur directeur | $\begin{pmatrix} -b \\ a \end{pmatrix}$ |
| Droite par $\mathrm{A}$, normal $\vec{n}$ | $a(x-x_\mathrm{A}) + b(y-y_\mathrm{A}) = 0$ |
| Cercle centre $\Omega$, rayon $R$ | $(x-x_0)^2 + (y-y_0)^2 = R^2$ |
| Distance | $\sqrt{(\Delta x)^2 + (\Delta y)^2}$ |
| Prérequis permanent | repère **orthonormé** |

---

## 6. Les erreurs qui coûtent des points

1. **Confondre vecteur normal et vecteur directeur.** Pour $ax+by+c=0$, le normal est
   $\begin{pmatrix} a \\ b \end{pmatrix}$, le directeur $\begin{pmatrix} -b \\ a \end{pmatrix}$.
2. **Se tromper de signe dans l'équation du cercle** : le centre $(2\,;-3)$ donne
   $(x-2)^2 + (y+3)^2$. On soustrait les coordonnées du centre.
3. **Oublier d'élever le rayon au carré** : c'est $R^2$ au second membre, pas $R$.
4. **Conclure « c'est un cercle » sans vérifier le signe** du second membre après regroupement.
5. **Utiliser les formules dans un repère non orthonormé.** Elles y sont fausses.
6. **Oublier de justifier le choix du repère** quand on repère une configuration : le correcteur
   attend que le repère soit explicitement défini.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Géométrie repérée » (ligne 2585 du .txt extrait). Le programme précise en tête :
« Dans cette section, le plan est rapporté à un repère orthonormé. »

Éléments lisibles : vecteur normal à une droite, le vecteur de coordonnées (a,b) normal à
ax+by+c=0, équation de cercle, reconnaître une équation de cercle et déterminer centre et
rayon, utiliser un repère pour étudier une configuration. Approfondissement possible mentionné :
intersection d'une parabole y = ax²+bx+c avec une droite parallèle à un axe.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La distance d'un point à une droite est-elle au programme de première ? Je ne l'ai PAS
  incluse, l'extraction ne la mentionne pas — à vérifier car c'est un classique.
- L'approfondissement « intersection parabole / droite parallèle à un axe » n'est pas traité,
  à ajouter si le choix pédagogique le retient.
- Les démonstrations exigibles éventuelles de cette section.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
