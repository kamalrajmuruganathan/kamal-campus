---
id: tale-spe-pc-acide-base-ph
titre: "Transformations acide-base et pH"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 14
prerequis:
  - Espèces chimiques et concentration (Seconde)
  - Réaction chimique et équation de réaction (Première)
  - Fonction logarithme décimal $\log$ (Maths, Terminale)
statut: brouillon
relu_par: null
---

# Transformations acide-base et pH

> En seconde et en première, une transformation était un échange d'atomes ou
> d'électrons. Ici, une seule particule est échangée : l'**ion hydrogène** $\mathrm{H^+}$,
> c'est-à-dire un **proton**. Tout le chapitre tient dans cette idée — qui cède le proton,
> qui le capte — et dans une échelle logarithmique, le **pH**, qui mesure combien il y en a
> en solution.

---

## 1. Acide et base de Brönsted

### Définitions

Un **acide de Brönsted** est une espèce chimique capable de **céder** un ion hydrogène
$\mathrm{H^+}$ (un proton).

Une **base de Brönsted** est une espèce chimique capable de **capter** un ion hydrogène
$\mathrm{H^+}$.

> **Exemple.** L'acide éthanoïque $\mathrm{CH_3COOH}$ cède un proton et devient l'ion
> éthanoate $\mathrm{CH_3COO^-}$ : c'est un acide. L'ammoniac $\mathrm{NH_3}$ capte un
> proton et devient l'ion ammonium $\mathrm{NH_4^+}$ : c'est une base.

> ⚠️ « Acide » et « base » ne désignent pas des substances *dangereuses* ou *corrosives* :
> ce sont des rôles vis-à-vis du proton. L'eau, inoffensive, est à la fois acide et base.

### L'ion hydrogène n'existe pas seul en solution

Un proton libre $\mathrm{H^+}$ ne subsiste jamais isolé dans l'eau : il se fixe aussitôt sur
une molécule d'eau pour former l'**ion oxonium** $\mathrm{H_3O^+}$. C'est cette espèce
qu'on dose réellement, et qui intervient dans la définition du pH.

$$\mathrm{H^+ + H_2O \longrightarrow H_3O^+}$$

---

## 2. Couple acide-base

### Définition

Un **couple acide-base**, noté $\mathrm{AH / A^-}$ (ou $\mathrm{BH^+ / B}$), réunit deux
espèces qui se transforment l'une en l'autre par **échange d'un proton** :

$$\boxed{\ \mathrm{AH} \; = \; \mathrm{A^-} + \mathrm{H^+}\ }$$

$\mathrm{AH}$ est l'**acide** du couple (il possède le proton à céder), $\mathrm{A^-}$ est sa
**base conjuguée** (elle peut le reprendre). Cette écriture avec un signe **=** est une
**demi-équation acido-basique** : elle décrit le couple, pas une transformation réelle à
elle seule (le proton n'existe pas libre).

> **Exemple.** Couple de l'acide éthanoïque : $\mathrm{CH_3COOH / CH_3COO^-}$, demi-équation
> $\mathrm{CH_3COOH = CH_3COO^- + H^+}$. L'acide et sa base conjuguée diffèrent d'**un
> seul** $\mathrm{H^+}$ : leurs formules ne se distinguent que par un H et une charge.

> ⚠️ Passer de l'acide à la base conjuguée : on **retire un H** et la charge **diminue de
> une unité** ($0 \to -1$, ou $+1 \to 0$). Si les deux formules diffèrent d'autre chose que
> d'un $\mathrm{H^+}$, ce n'est pas un couple acide-base.

---

## 3. Réaction acide-base

Une **réaction acide-base** est un **transfert d'ion hydrogène** entre l'acide d'un couple et
la base d'un **autre** couple. Il faut donc **deux couples** :

$$\boxed{\ \underset{\text{couple 1}}{\mathrm{acide_1}} + \underset{\text{couple 2}}{\mathrm{base_2}}
\;\longrightarrow\; \mathrm{base_1} + \mathrm{acide_2}\ }$$

Le proton cédé par l'acide$_1$ est capté par la base$_2$. On construit l'équation en écrivant
les deux demi-équations « dans le bon sens » et en les additionnant, de sorte que le
$\mathrm{H^+}$ disparaisse.

> **Exemple.** Acide éthanoïque $\mathrm{CH_3COOH}$ (couple 1) et eau $\mathrm{H_2O}$
> jouant le rôle de base (couple $\mathrm{H_3O^+/H_2O}$) :
> $$\mathrm{CH_3COOH + H_2O \longrightarrow CH_3COO^- + H_3O^+}$$
> L'acide a cédé son proton, l'eau l'a capté en devenant $\mathrm{H_3O^+}$.

> ⚠️ Une réaction acide-base n'est jamais l'affaire d'un seul couple : il faut un acide
> **et** une base, venus de **deux couples différents**. Vérifie toujours qu'aucun
> $\mathrm{H^+}$ ne subsiste dans l'équation finale — il doit avoir été transféré.

---

## 4. Les couples à connaître

### Les deux couples de l'eau

L'eau appartient à **deux** couples :

| Rôle de l'eau | Couple | Demi-équation |
|---|---|---|
| l'eau est l'**acide** | $\mathrm{H_2O / OH^-}$ | $\mathrm{H_2O = OH^- + H^+}$ |
| l'eau est la **base** | $\mathrm{H_3O^+ / H_2O}$ | $\mathrm{H_3O^+ = H_2O + H^+}$ |

### Acide carbonique

Le dioxyde de carbone dissous forme l'acide carbonique. On retient deux couples successifs :

| Couple | Acide | Base | Demi-équation |
|---|---|---|---|
| carbonique / hydrogénocarbonate | $\mathrm{CO_2,\,H_2O}$ | $\mathrm{HCO_3^-}$ | $\mathrm{CO_2,\,H_2O = HCO_3^- + H^+}$ |
| hydrogénocarbonate / carbonate | $\mathrm{HCO_3^-}$ | $\mathrm{CO_3^{2-}}$ | $\mathrm{HCO_3^- = CO_3^{2-} + H^+}$ |

C'est ce système qui règle le pH du sang et des eaux minérales.

### Acides carboxyliques

Un **acide carboxylique** porte le groupe caractéristique **carboxyle** $\mathrm{-COOH}$. Sa
base conjuguée est l'ion **carboxylate** $\mathrm{-COO^-}$ : couple $\mathrm{R\!-\!COOH / R\!-\!COO^-}$.

- **Formule semi-développée** de l'acide éthanoïque : $\mathrm{CH_3\!-\!COOH}$.
- **Schéma de Lewis** du groupe carboxyle : le carbone est **doublement** lié à un oxygène
  ($\mathrm{C\!=\!O}$) et **simplement** lié à un groupe hydroxyle ($\mathrm{O\!-\!H}$).

$$\mathrm{R\!-\!\underset{\displaystyle \|}{\underset{\textstyle O}{C}}\!-\!O\!-\!H}$$

> **Exemple.** Acide méthanoïque $\mathrm{HCOOH}$, acide éthanoïque $\mathrm{CH_3COOH}$,
> acide benzoïque $\mathrm{C_6H_5COOH}$. Tous cèdent le $\mathrm{H}$ **du groupe
> $\mathrm{-COOH}$** (jamais un H du reste de la chaîne).

### Amines

Une **amine** $\mathrm{R\!-\!NH_2}$ porte un doublet non liant sur l'azote : elle **capte**
un proton pour donner un ion **ammonium** $\mathrm{R\!-\!NH_3^+}$. C'est une **base**, dont
l'acide conjugué est $\mathrm{R\!-\!NH_3^+}$ : couple $\mathrm{R\!-\!NH_3^+ / R\!-\!NH_2}$.

> **Exemple.** Méthylamine : couple $\mathrm{CH_3NH_3^+ / CH_3NH_2}$. L'ammoniac lui-même
> donne le couple $\mathrm{NH_4^+ / NH_3}$.

---

## 5. Espèce amphotère (ampholyte)

Une **espèce amphotère** est une espèce qui est l'**acide** d'un couple **et** la **base**
d'un autre : elle peut aussi bien céder que capter un proton.

> **Exemple 1.** L'**eau** : acide du couple $\mathrm{H_2O/OH^-}$, base du couple
> $\mathrm{H_3O^+/H_2O}$. C'est l'espèce amphotère de référence.

> **Exemple 2.** L'ion **hydrogénocarbonate** $\mathrm{HCO_3^-}$ : base du couple
> $\mathrm{CO_2,H_2O / HCO_3^-}$ et acide du couple $\mathrm{HCO_3^- / CO_3^{2-}}$.

> **Méthode.** Pour montrer qu'une espèce est amphotère, exhibe **deux couples** : un où
> elle est l'acide, un où elle est la base. Un seul couple ne suffit pas.

---

## 6. Le pH d'une solution

### Définition

Le **pH** mesure l'acidité d'une solution aqueuse à partir de la concentration en ions
oxonium $[\mathrm{H_3O^+}]$ :

$$\boxed{\ \mathrm{pH} = -\log\!\left(\dfrac{[\mathrm{H_3O^+}]}{c^\circ}\right)\ }
\qquad \text{avec } c^\circ = 1\ \text{mol·L}^{-1}$$

La division par $c^\circ$ rend l'argument du logarithme **sans dimension** (on ne prend
jamais le log d'une grandeur avec unité). En pratique, cela revient à écrire
$\mathrm{pH} = -\log[\mathrm{H_3O^+}]$ **à condition** d'exprimer $[\mathrm{H_3O^+}]$ en
$\mathrm{mol·L^{-1}}$. Le pH, lui, est un nombre **sans unité**.

> **Exemple.** Si $[\mathrm{H_3O^+}] = 1{,}0 \times 10^{-3}\ \mathrm{mol·L^{-1}}$, alors
> $\mathrm{pH} = -\log(10^{-3}) = 3{,}0$.

### Relation inverse

Pour remonter de la mesure du pH à la concentration, on inverse la fonction $\log$ :

$$\boxed{\ [\mathrm{H_3O^+}] = c^\circ \times 10^{-\mathrm{pH}} = 10^{-\mathrm{pH}}\ \text{mol·L}^{-1}\ }$$

> **Exemple.** Un jus de citron a un $\mathrm{pH} = 2{,}4$. Alors
> $[\mathrm{H_3O^+}] = 10^{-2{,}4} = 4{,}0 \times 10^{-3}\ \mathrm{mol·L^{-1}}$.

### Échelle des pH à 25 °C

Dans l'eau pure à 25 °C, $[\mathrm{H_3O^+}] = 1{,}0 \times 10^{-7}\ \mathrm{mol·L^{-1}}$, soit
$\mathrm{pH} = 7{,}0$ : la solution est **neutre**.

| $[\mathrm{H_3O^+}]$ (mol·L⁻¹) | pH | Nature |
|---|---|---|
| $> 1{,}0\times 10^{-7}$ | $< 7$ | solution **acide** |
| $= 1{,}0\times 10^{-7}$ | $= 7$ | solution **neutre** |
| $< 1{,}0\times 10^{-7}$ | $> 7$ | solution **basique** |

> ⚠️ **Plus $[\mathrm{H_3O^+}]$ est grand, plus le pH est petit** : le signe moins inverse le
> sens de variation. Un pH bas = solution très acide.

> ⚠️ **Une unité de pH = un facteur 10** sur $[\mathrm{H_3O^+}]$. Passer de pH 3 à pH 2, ce
> n'est pas « un peu plus acide » : c'est **dix fois** plus d'ions oxonium.

---

## 7. Méthode — les deux calculs types

**De $[\mathrm{H_3O^+}]$ vers le pH :**

1. Exprimer $[\mathrm{H_3O^+}]$ en **mol·L⁻¹** (convertir si besoin depuis mmol·L⁻¹, etc.).
2. Écrire la concentration en notation scientifique $a \times 10^{n}$.
3. Appliquer $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$.
4. Donner le résultat avec **un chiffre après la virgule** (usage courant en pH-métrie).

**Du pH vers $[\mathrm{H_3O^+}]$ :**

1. Appliquer $[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}$ mol·L⁻¹.
2. Écrire le résultat en **notation scientifique**, avec **2 chiffres significatifs**.

> **Exemple complet.** Une solution contient $[\mathrm{H_3O^+}] = 2{,}5 \times 10^{-4}\ \mathrm{mol·L^{-1}}$.
> $\mathrm{pH} = -\log(2{,}5 \times 10^{-4}) = -(\log 2{,}5 - 4) = 4 - 0{,}40 = 3{,}6$.
> Réciproquement, de $\mathrm{pH} = 3{,}6$ : $[\mathrm{H_3O^+}] = 10^{-3{,}6} = 2{,}5 \times 10^{-4}\ \mathrm{mol·L^{-1}}$. On retombe bien sur la valeur de départ.

---

## 8. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Acide de Brönsted | espèce qui **cède** un $\mathrm{H^+}$ |
| Base de Brönsted | espèce qui **capte** un $\mathrm{H^+}$ |
| Couple acide-base | $\mathrm{AH = A^- + H^+}$ (diffèrent d'**un** $\mathrm{H^+}$) |
| Réaction acide-base | transfert de $\mathrm{H^+}$ entre **2 couples** |
| Couples de l'eau | $\mathrm{H_3O^+/H_2O}$ et $\mathrm{H_2O/OH^-}$ |
| Acide carbonique | $\mathrm{CO_2,H_2O / HCO_3^-}$ puis $\mathrm{HCO_3^-/CO_3^{2-}}$ |
| Acide carboxylique | $\mathrm{R\!-\!COOH / R\!-\!COO^-}$ (groupe $\mathrm{-COOH}$) |
| Amine | $\mathrm{R\!-\!NH_3^+ / R\!-\!NH_2}$ (base) |
| Amphotère | acide d'un couple **et** base d'un autre (eau, $\mathrm{HCO_3^-}$) |
| pH | $\mathrm{pH} = -\log([\mathrm{H_3O^+}]/c^\circ)$, $c^\circ = 1$ mol·L⁻¹ |
| Inverse | $[\mathrm{H_3O^+}] = c^\circ \times 10^{-\mathrm{pH}}$ |
| Neutralité à 25 °C | $[\mathrm{H_3O^+}] = 1{,}0\times 10^{-7}$, $\mathrm{pH} = 7$ |

---

## 9. Les erreurs qui coûtent des points

1. **Croire qu'une réaction acide-base met en jeu un seul couple.** Il en faut **deux** :
   un acide qui cède, une base qui capte. Une demi-équation seule ne décrit pas une réaction.
2. **Prendre le log d'une concentration « brute ».** L'argument doit être **sans unité** :
   c'est $[\mathrm{H_3O^+}]/c^\circ$. Concrètement, $[\mathrm{H_3O^+}]$ doit être en mol·L⁻¹.
3. **Oublier le signe moins** : $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$. Sans le moins, on
   trouve un pH négatif pour une solution acide — un signal d'alarme.
4. **Se tromper de sens** : plus $[\mathrm{H_3O^+}]$ **augmente**, plus le pH **diminue**.
   Un pH qui baisse = plus acide, pas moins.
5. **Ne pas convertir les volumes ou les concentrations** (mmol·L⁻¹ → mol·L⁻¹,
   mL → L) avant d'appliquer la formule. Un facteur $10^{3}$ oublié fausse tout le pH.
6. **Confondre acide/base conjugués** : ils diffèrent d'**un** $\mathrm{H^+}$ et **une**
   charge. $\mathrm{CO_3^{2-}}$ n'est pas la base conjuguée de $\mathrm{CO_2,H_2O}$ (il y a
   $\mathrm{HCO_3^-}$ entre les deux).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait de travail :
docs/programme-terminale-physique-chimie-2019.txt, section « 1.1 Transformations
acide-base et pH » (lignes 21-31). À confronter au PDF officiel education.gouv.fr /
eduscol avant publication (extrait initial obtenu par WebFetch).

Périmètre STRICTEMENT limité à la section 1.1 :
- acide/base de Brönsted, couple, réaction acide-base ;
- couples de l'eau, acide carbonique, acides carboxyliques, amines ; espèce amphotère ;
- pH = -log([H3O+]/c°) et relation inverse [H3O+] = c°·10^(-pH).
Volontairement EXCLUS (relèvent de 1.2, 1.3, 1.5 ou de la partie « équilibre ») :
Ka / pKa, constante d'acidité, force des acides (fort/faible), diagramme de
prédominance, titrages, produit ionique Ke. NE PAS les ajouter ici.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation d'autoprotolyse / le produit ionique Ke et la valeur pH=7 à 25 °C : le
  BO 1.1 ne mentionne que pH = -log([H3O+]/c°). J'ai mentionné la neutralité à 25 °C
  ([H3O+]=1e-7) comme repère de lecture d'échelle — à valider comme « admis » et non
  comme exigible dans cette sous-partie.
- Notation de l'acide carbonique : « CO2,H2O » (usage lycée) vs « H2CO3 ». J'ai retenu
  CO2,H2O, conforme à l'usage eduscol. À confirmer.
- Nombre de chiffres significatifs attendu sur le pH (1 décimale) : convention, à valider.
- Schéma de Lewis du carboxyle rendu en LaTeX simplifié (doublet C=O + O-H) ; vérifier
  le rendu KaTeX de la structure empilée, sinon remplacer par un texte descriptif.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
