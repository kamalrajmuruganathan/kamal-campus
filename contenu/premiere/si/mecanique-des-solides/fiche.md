---
id: 1si-mecanique-des-solides
titre: "Mécanique des solides (statique)"
voie: generale
niveau: premiere
parcours: si
matiere: si
programme: "Première — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 16
prerequis:
  - Notion de force et de poids (Seconde/physique)
  - Trigonométrie de base (sinus, cosinus)
statut: brouillon
relu_par: null
---

# Mécanique des solides (statique)

> La statique étudie les solides **à l'équilibre** : immobiles, ou en mouvement
> uniforme. Elle permet de dimensionner une structure (pont, potence, bras de
> robot) en garantissant qu'elle ne se déplacera ni ne basculera sous les
> efforts. Deux outils suffisent : la **force** et le **moment**.

---

## 1. Modéliser une action mécanique : la force

Une **action mécanique** est modélisée par une **force**, représentée par un
**vecteur** possédant :

- un **point d'application** (où la force s'exerce) ;
- une **direction** (la droite d'action) ;
- un **sens** ;
- une **intensité** (ou **norme**), en **newtons (N)**.

Exemple fondamental : le **poids** d'un objet de masse **m** est
**P = m × g**, avec **g ≈ 9,81 N/kg** (souvent arrondi à 10 N/kg). Il s'applique
au **centre de gravité** G, dirigé **verticalement vers le bas**.

Ainsi une masse de **2 kg** a un poids **P = 2 × 9,81 ≈ 19,6 N**.

---

## 2. Le principe fondamental de la statique (PFS)

Un solide est en **équilibre** si deux conditions sont réunies :

1. **la somme (résultante) de toutes les forces est nulle** :
   **Σ F⃗ = 0⃗** (les forces se compensent) ;
2. **la somme des moments de toutes les forces, en un point, est nulle** :
   **Σ M = 0** (les rotations se compensent).

Cas particulier utile — un solide **soumis à deux forces** est en équilibre si et
seulement si ces forces ont **même droite d'action, même intensité et des sens
opposés** (elles sont directement opposées).

---

## 3. Le moment d'une force

Une force ne fait pas que pousser : elle peut aussi faire **tourner**. Cet effet
de rotation autour d'un point (ou d'un axe) se mesure par le **moment**.

Pour une force **F** perpendiculaire au bras de levier :

**M = F × d**

où **d** est la **distance** (bras de levier) entre l'axe de rotation et la
droite d'action de la force. Unité : le **newton-mètre (N·m)**.

- Le moment est **grand** si la force est loin de l'axe : c'est le principe du
  **levier** et de la **clé longue** ;
- on affecte un **signe** au moment selon le sens de rotation (par convention,
  positif dans le sens trigonométrique).

Exemple : une force de **50 N** appliquée à **0,30 m** de l'axe crée un moment
**M = 50 × 0,30 = 15 N·m**.

---

## 4. Le théorème du levier (bras de balance)

Un solide en rotation autour d'un axe est en équilibre si les moments qui le font
tourner dans un sens **compensent** ceux qui le font tourner dans l'autre :

**F₁ × d₁ = F₂ × d₂**

C'est la loi de la **balance Roberval**, de la **balançoire** et du
**pied-de-biche**. Elle explique pourquoi une petite force sur un grand bras
équilibre une grande force sur un petit bras.

Exemple : sur une balançoire, un enfant de poids **300 N** assis à **1,2 m** de
l'axe équilibre un adulte à **d₂** si **600 × d₂ = 300 × 1,2**, soit
**d₂ = 360 / 600 = 0,6 m**.

---

## 5. Décomposer une force et projeter

Quand une force est **inclinée**, on la **projette** sur deux axes
perpendiculaires (horizontal x, vertical y) à l'aide de la trigonométrie. Pour
une force **F** faisant un angle **α** avec l'horizontale :

- composante horizontale : **Fx = F × cos α** ;
- composante verticale : **Fy = F × sin α**.

Cette décomposition est indispensable pour appliquer le PFS quand les forces ne
sont pas toutes verticales ou horizontales (plan incliné, câble oblique,
haubanage). On projette **Σ F⃗ = 0⃗** sur chaque axe :
**Σ Fx = 0** et **Σ Fy = 0**.

---

## Ce qu'il faut retenir

- Une **force** (vecteur, en newtons) a un point d'application, une direction, un
  sens et une intensité ; le **poids** vaut **P = m × g** (g ≈ 9,81 N/kg).
- Un solide est en **équilibre** si **Σ F⃗ = 0⃗** ET **Σ M = 0** (PFS).
- Le **moment** d'une force mesure son effet de rotation : **M = F × d** (en N·m),
  d = bras de levier.
- **Théorème du levier** : équilibre si **F₁ × d₁ = F₂ × d₂**.
- Une force inclinée se **projette** : **Fx = F cos α**, **Fy = F sin α**.

## Les erreurs à éviter

- **Confondre masse et poids** : la masse (kg) est une quantité de matière ; le
  poids (N) est une force, P = m × g.
- **Oublier le bras de levier** : le moment dépend de la **distance** à l'axe,
  pas seulement de l'intensité de la force.
- **Additionner des forces sans tenir compte de leur direction** : il faut
  d'abord les **projeter** sur des axes.
- **Ne vérifier qu'une seule condition** : l'équilibre exige **forces nulles ET
  moments nuls**, pas l'une sans l'autre.
