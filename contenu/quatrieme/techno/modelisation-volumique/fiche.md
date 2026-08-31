---
id: 4e-techno-modelisation-volumique
titre: "La modélisation volumique"
voie: generale
niveau: quatrieme
parcours: techno
matiere: techno
programme: "Cycle 4 — Technologie (programme officiel)"
theme: "Design, innovation et créativité / Conception, création, réalisation"
duree_lecture_min: 11
prerequis:
  - Représentation d'un objet, croquis et schéma (5e)
  - Notion de fonction technique (5e)
statut: brouillon
relu_par: null
---

# La modélisation volumique

> Avant de fabriquer un objet, les ingénieurs le **dessinent en trois dimensions** sur un
> ordinateur. On peut alors le faire tourner, vérifier ses dimensions, tester s'il tient
> debout… et corriger les erreurs **avant** de gaspiller de la matière. C'est la
> **modélisation volumique** : représenter un objet **en 3D** grâce à un logiciel.

---

## 1. Qu'est-ce qu'un modèle volumique (3D) ?

Un **modèle volumique** est la représentation **en trois dimensions** d'un objet réalisée
avec un logiciel de **CAO** (**Conception Assistée par Ordinateur**), par exemple
*Tinkercad*, *SketchUp*, *FreeCAD* ou *SolidWorks*.

Contrairement à un dessin sur papier (en 2D), le modèle 3D possède **trois dimensions** :
**longueur**, **largeur** et **hauteur**. On peut le **tourner** dans tous les sens, le
**mesurer**, le **couper** pour voir l'intérieur.

> **À retenir.** Un modèle volumique n'est pas une simple image : c'est un objet
> **numérique** défini par des **dimensions exactes**, que l'ordinateur connaît précisément.

---

## 2. Pourquoi modéliser en 3D ? (les avantages)

| Avantage | Explication |
|---|---|
| **Visualiser** | Voir l'objet sous tous les angles avant de le fabriquer |
| **Vérifier** | Contrôler les dimensions, l'assemblage, la solidité |
| **Modifier facilement** | Changer une cote sans tout recommencer |
| **Économiser** | Éviter le gaspillage de matière et les prototypes ratés |
| **Communiquer** | Partager le même modèle entre concepteurs, clients, fabricants |
| **Fabriquer** | Envoyer le fichier directement à une imprimante 3D ou une machine |

---

## 3. Comment construit-on un volume ?

On part souvent de **formes de base** (appelées **primitives**) : **cube (pavé)**,
**cylindre**, **sphère**, **cône**, **pyramide**. Puis on les **combine** et on les
**transforme** avec des opérations :

| Opération | Ce qu'elle fait |
|---|---|
| **Extrusion** | « Tirer » une forme plate (2D) pour lui donner de l'épaisseur → un volume |
| **Révolution** | Faire tourner un profil autour d'un axe (ex. créer un verre, une bouteille) |
| **Assemblage / union** | Réunir plusieurs volumes en un seul |
| **Soustraction (perçage)** | Enlever de la matière (faire un trou, une rainure) |
| **Répétition** | Copier une forme plusieurs fois régulièrement |

> **Exemple.** Pour modéliser une **rondelle**, on part d'un **cylindre** puis on
> **soustrait** un petit cylindre au centre : cela crée le **trou**.

---

## 4. Les cotes (dimensions)

Un modèle volumique est défini par des **cotes** : ce sont les **dimensions** de l'objet,
exprimées dans une **unité** (le plus souvent le **millimètre, mm**). Une cote précise, par
exemple, qu'un côté mesure `40 mm` ou qu'un trou a un diamètre de `8 mm`.

> **Le modèle est à l'échelle réelle** dans le logiciel : si on écrit 40 mm, l'objet
> fabriqué mesurera 40 mm. La précision des cotes est donc essentielle.

---

## 5. Du modèle 3D à l'objet réel

Une fois le modèle terminé, on peut :

1. **Exporter** le fichier (par exemple au format **STL**, très utilisé pour l'impression).
2. Le préparer avec un logiciel qui le **découpe en couches** (le *trancheur* / *slicer*).
3. Le **fabriquer** avec une **imprimante 3D** (dépôt de matière couche par couche) ou une
   autre machine à commande numérique.

C'est la **chaîne numérique** : *idée → croquis → modèle 3D (CAO) → fichier → fabrication*.
On parle aussi de **prototypage rapide** quand on fabrique vite un premier exemplaire pour
le tester.

---

## Ce qu'il faut retenir

- La **modélisation volumique** représente un objet **en 3D** avec un logiciel de **CAO**.
- Un modèle 3D a **trois dimensions** (longueur, largeur, hauteur) et des **cotes**
  précises (souvent en **mm**) ; on peut le tourner, le mesurer, le couper.
- On construit un volume à partir de **formes de base** combinées par **extrusion**,
  **révolution**, **union**, **soustraction**, **répétition**.
- Le modèle sert à **visualiser, vérifier, modifier et fabriquer** (imprimante 3D via un
  fichier **STL**) : c'est la **chaîne numérique**.

## Les erreurs à éviter

- **Confondre 2D et 3D.** Un croquis papier est en 2D (longueur, largeur) ; un modèle
  volumique ajoute la **3ᵉ dimension** (hauteur/profondeur) et des cotes exactes.
- **Croire qu'un modèle 3D est juste une image.** C'est un objet numérique **coté** : il
  connaît ses dimensions réelles.
- **Oublier les cotes ou l'unité.** Sans dimensions précises et sans unité (mm), l'objet
  fabriqué ne sera pas à la bonne taille.
- **Penser qu'un trou s'ajoute.** Un trou se crée par **soustraction** de matière, pas en
  ajoutant un volume.
- **Confondre modéliser et fabriquer.** La CAO crée le **modèle** ; c'est l'imprimante 3D
  ou la machine qui **fabrique** l'objet réel.
