---
id: 1si-comportement-des-materiaux
titre: "Comportement des matériaux"
voie: generale
niveau: premiere
parcours: si
matiere: si
programme: "Première — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 15
prerequis:
  - Force et intensité en newtons (Première SI, statique)
  - Notion d'aire d'une section
statut: brouillon
relu_par: null
---

# Comportement des matériaux

> Un objet dimensionné par la statique tient à l'équilibre… tant que le matériau
> résiste. La résistance des matériaux étudie **comment un solide se déforme et
> rompt** sous les efforts. Elle guide le choix d'un matériau et d'une section,
> pour qu'une pièce soit à la fois **assez solide** et **pas trop lourde ou
> coûteuse**.

---

## 1. Les sollicitations simples

Une pièce peut être soumise à différentes **sollicitations** :

- **traction** : on tire dans l'axe, la pièce s'allonge (câble, tirant) ;
- **compression** : on écrase dans l'axe, la pièce se raccourcit (pilier, poteau) ;
- **flexion** : on fléchit la pièce (poutre, planche d'étagère) ;
- **cisaillement** : deux forces opposées tendent à trancher (rivet, boulon) ;
- **torsion** : on vrille la pièce autour de son axe (arbre de transmission).

En Première, l'étude quantitative porte surtout sur la **traction**, la plus
simple à modéliser.

---

## 2. Contrainte et déformation

Pour comparer des pièces de tailles différentes, on ne raisonne pas sur la force
totale mais sur la **contrainte**, c'est-à-dire la force **rapportée à la
section** :

**σ = F / S**

- **σ** (sigma) : contrainte, en **pascals (Pa)** ou plus souvent en **mégapascals
  (MPa = N/mm²)** ;
- **F** : effort en newtons ; **S** : aire de la section en m² (ou mm²).

La **déformation relative** (ou allongement relatif) compare l'allongement à la
longueur initiale :

**ε = ΔL / L₀**  (sans unité)

Exemple : une barre de **L₀ = 2 m** s'allonge de **ΔL = 1 mm** : ε = 0,001 / 2 =
**0,0005**, soit 0,05 %.

---

## 3. La loi de Hooke et le module de Young

Dans le **domaine élastique** (petites déformations, réversibles), la contrainte
est **proportionnelle** à la déformation. C'est la **loi de Hooke** :

**σ = E × ε**

où **E** est le **module de Young** (ou module d'élasticité), en **MPa** ou
**GPa** (10⁹ Pa). E caractérise la **rigidité** du matériau : plus E est grand,
moins le matériau se déforme sous une même contrainte.

Ordres de grandeur : acier **E ≈ 210 GPa**, aluminium **≈ 70 GPa**, bois
**≈ 10 GPa**, plastique (polymère courant) **≈ 2 GPa**. L'acier est donc environ
**3 fois plus rigide** que l'aluminium.

---

## 4. L'essai de traction

Pour connaître un matériau, on tire sur une éprouvette et on trace la courbe
**contrainte σ – déformation ε**. On y lit :

- le **domaine élastique** : partie **linéaire** ; en relâchant, l'éprouvette
  reprend sa forme. Sa pente vaut **E** ;
- la **limite élastique R_e** : contrainte au-delà de laquelle la déformation
  devient **permanente** (plastique) ;
- le **domaine plastique** : déformation irréversible ;
- la **résistance à la rupture R_m** : contrainte maximale avant rupture ;
- l'**allongement à la rupture A%** : mesure la **ductilité** (capacité à se
  déformer avant de casser).

Un matériau **ductile** (acier doux) se déforme beaucoup avant de rompre ; un
matériau **fragile** (fonte, verre, béton) casse **net**, presque sans
déformation plastique.

---

## 5. Dimensionner : le coefficient de sécurité

Pour qu'une pièce ne se déforme jamais de façon permanente, on impose une
**contrainte pratique** (admissible) **inférieure** à la limite élastique, en
appliquant un **coefficient de sécurité s** :

**R_pe = R_e / s**  (avec s > 1)

La pièce est correctement dimensionnée si la contrainte réelle reste sous cette
valeur : **σ ≤ R_pe**.

Exemple : acier de limite élastique **R_e = 250 MPa**, coefficient **s = 2** →
contrainte admissible **R_pe = 125 MPa**. Si une barre de **section 100 mm²**
doit reprendre **F = 10 000 N**, la contrainte vaut **σ = 10 000 / 100 = 100 MPa**,
inférieure à 125 MPa : la pièce **convient**.

---

## Ce qu'il faut retenir

- Sollicitations simples : **traction, compression, flexion, cisaillement,
  torsion**.
- **Contrainte** : **σ = F / S** (en MPa = N/mm²) ; **déformation** : **ε = ΔL / L₀**
  (sans unité).
- **Loi de Hooke** (domaine élastique) : **σ = E × ε** ; **E** (module de Young)
  mesure la **rigidité**.
- L'essai de traction donne **R_e** (limite élastique), **R_m** (rupture),
  **A%** (ductilité).
- Dimensionnement : **R_pe = R_e / s** et on impose **σ ≤ R_pe**.

## Les erreurs à éviter

- **Confondre contrainte et force** : la contrainte (σ = F/S) tient compte de la
  section ; deux barres différentes sous la même force n'ont pas la même
  contrainte.
- **Confondre rigidité et résistance** : E (rigidité) dit comment ça se déforme ;
  R_e / R_m (résistance) disent quand ça cède. Un matériau rigide n'est pas
  forcément résistant.
- **Confondre ductile et fragile** : ductile = se déforme beaucoup avant rupture ;
  fragile = casse net.
- **Oublier les unités** : 1 MPa = 1 N/mm². Mélanger m² et mm² fausse tout.
