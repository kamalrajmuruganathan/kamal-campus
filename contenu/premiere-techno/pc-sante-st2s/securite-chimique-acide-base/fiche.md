---
id: 1st2s-pc-securite-chimique-acide-base
titre: "Sécurité chimique : acides, bases et pH"
voie: technologique
niveau: premiere-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Prévenir et sécuriser"
duree_lecture_min: 15
prerequis:
  - Espèces chimiques et solutions (Seconde)
  - Écriture scientifique et puissances de 10 (Seconde)
statut: brouillon
relu_par: null
---

# Sécurité chimique : acides, bases et pH

> En ST2S, tu manipuleras des produits de soin, de désinfection et d'entretien.
> Beaucoup sont des **acides** (détartrant, vinaigre) ou des **bases** (déboucheur,
> ammoniaque). Savoir mesurer leur **pH**, calculer une **concentration** et lire un
> **pictogramme**, c'est manipuler sans se brûler et sans faire de mélange dangereux.

---

## 1. Quantité de matière et masse molaire

### Définition

La **quantité de matière** $n$ compte les entités (molécules, ions) par paquets. Son unité
est la **mole** (mol). La **masse molaire** $M$ est la masse d'une mole d'une espèce, en
**g·mol⁻¹**. Elle relie la masse pesée $m$ (en g) à la quantité de matière :

$$\boxed{n = \dfrac{m}{M}} \qquad n \text{ en mol},\ m \text{ en g},\ M \text{ en g·mol⁻¹}$$

> **Exemple.** Le chlorure de sodium NaCl a pour masse molaire
> $M = 23{,}0 + 35{,}5 = 58{,}5$ g·mol⁻¹. Dans $11{,}7$ g de sel :
> $n = \dfrac{11{,}7}{58{,}5} = 0{,}200$ mol.

> **Comment obtenir $M$ ?** On additionne les masses molaires atomiques (données dans le
> tableau périodique). Pour l'eau H₂O : $M = 2 \times 1{,}0 + 16{,}0 = 18{,}0$ g·mol⁻¹.

---

## 2. Concentrations d'une solution

Une **solution aqueuse** est obtenue en dissolvant un **soluté** dans un **solvant** (l'eau).
On décrit sa composition par deux concentrations.

### Concentration massique

$$\boxed{C_m = \dfrac{m}{V}} \qquad C_m \text{ en g·L}^{-1},\ m \text{ en g},\ V \text{ en L}$$

> **Exemple.** Un sérum physiologique contient $9{,}0$ g de NaCl par litre :
> $C_m = \dfrac{9{,}0}{1{,}0} = 9{,}0$ g·L⁻¹ (c'est le « $9$ ‰ » indiqué sur le flacon).

### Concentration molaire

$$\boxed{C = \dfrac{n}{V}} \qquad C \text{ en mol·L}^{-1},\ n \text{ en mol},\ V \text{ en L}$$

### Le lien entre les deux

En remplaçant $n = \dfrac{m}{M}$ dans $C = \dfrac{n}{V}$, on obtient une relation très utile :

$$\boxed{C = \dfrac{C_m}{M}} \qquad \Longleftrightarrow \qquad C_m = C \times M$$

> **Exemple.** Pour le sérum physiologique ($C_m = 9{,}0$ g·L⁻¹, $M = 58{,}5$ g·mol⁻¹) :
> $C = \dfrac{9{,}0}{58{,}5} = 0{,}15$ mol·L⁻¹.

> ⚠️ **Le volume est en LITRES.** Une prise de $250$ mL, c'est $V = 0{,}250$ L. Diviser par
> $250$ au lieu de $0{,}250$ donne un résultat $1000$ fois trop petit.

---

## 3. pH d'une solution aqueuse

### Définition

Le **pH** mesure l'acidité d'une solution. Il est lié à la concentration en ions
**oxonium** $[\mathrm{H_3O^+}]$ (exprimée en mol·L⁻¹) par :

$$\boxed{[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}} \qquad \text{et réciproquement} \qquad \mathrm{pH} = -\log\,[\mathrm{H_3O^+}]$$

Le pH est un nombre **sans unité**, en pratique compris entre $0$ et $14$.

> **Exemple.** Le suc gastrique a un pH voisin de $2{,}0$. Alors
> $[\mathrm{H_3O^+}] = 10^{-2{,}0} = 1{,}0 \times 10^{-2}$ mol·L⁻¹.

> **Sens de variation.** Plus $[\mathrm{H_3O^+}]$ est **grande**, plus le pH est **petit** :
> le signe « moins » de l'exposant inverse le sens. Quand $[\mathrm{H_3O^+}]$ est multipliée
> par $10$, le pH **diminue de 1**.

### L'échelle d'acidité (à 25 °C)

| pH | Solution | $[\mathrm{H_3O^+}]$ | Exemple ST2S |
|---|---|---|---|
| $< 7$ | **acide** | $> 10^{-7}$ mol·L⁻¹ | suc gastrique, vinaigre, détartrant |
| $= 7$ | **neutre** | $= 10^{-7}$ mol·L⁻¹ | eau pure |
| $> 7$ | **basique** | $< 10^{-7}$ mol·L⁻¹ | sang ($7{,}4$), savon, déboucheur |

---

## 4. Acides, bases et couples acide/base

### Définitions (Brønsted)

Un **acide** est une espèce capable de **céder un ion H⁺** (un proton).
Une **base** est une espèce capable de **capter un ion H⁺**.

À tout acide correspond la base obtenue quand il a cédé son H⁺ : ils forment un
**couple acide/base**, noté **acide / base**.

$$\text{acide} \; \rightleftharpoons \; \text{base} + \mathrm{H^+}$$

> **Exemple.** L'acide éthanoïque (du vinaigre) et l'ion éthanoate forment le couple
> $\mathrm{CH_3COOH}\,/\,\mathrm{CH_3COO^-}$ :
> $\mathrm{CH_3COOH} \rightleftharpoons \mathrm{CH_3COO^-} + \mathrm{H^+}$.

| Couple acide / base | Acide | Base |
|---|---|---|
| $\mathrm{H_3O^+}\,/\,\mathrm{H_2O}$ | ion oxonium | eau |
| $\mathrm{H_2O}\,/\,\mathrm{HO^-}$ | eau | ion hydroxyde |
| $\mathrm{CH_3COOH}\,/\,\mathrm{CH_3COO^-}$ | acide éthanoïque | ion éthanoate |
| $\mathrm{NH_4^+}\,/\,\mathrm{NH_3}$ | ion ammonium | ammoniac |

> **L'eau est un cas particulier** : elle appartient à **deux** couples, une fois comme acide,
> une fois comme base. On dit qu'elle est **amphotère**.

### La réaction acido-basique

C'est un **transfert d'ion H⁺** de l'acide d'un couple vers la base d'un **autre** couple.
On combine les deux demi-équations en supprimant le H⁺.

> **Exemple.** Verser de l'ammoniac (base) dans une solution d'acide chlorhydrique
> ($\mathrm{H_3O^+}$, acide) :
> $$\mathrm{NH_3} + \mathrm{H_3O^+} \longrightarrow \mathrm{NH_4^+} + \mathrm{H_2O}$$
> L'acide $\mathrm{H_3O^+}$ cède un H⁺ à la base $\mathrm{NH_3}$.

---

## 5. Autoprotolyse de l'eau et produit ionique

### Une eau jamais totalement pure

Même dans l'eau pure, une infime partie des molécules réagit entre elles : c'est
l'**autoprotolyse de l'eau**. Une molécule d'eau joue l'acide, l'autre la base :

$$\boxed{2\,\mathrm{H_2O} \; \rightleftharpoons \; \mathrm{H_3O^+} + \mathrm{HO^-}}$$

### Le produit ionique de l'eau

Dans **toute** solution aqueuse, le produit des concentrations en ions oxonium et hydroxyde
est une constante notée $K_e$. À **25 °C** :

$$\boxed{K_e = [\mathrm{H_3O^+}] \times [\mathrm{HO^-}] = 1{,}0 \times 10^{-14}}$$

Cette relation permet de passer de $[\mathrm{H_3O^+}]$ à $[\mathrm{HO^-}]$ :

$$[\mathrm{HO^-}] = \dfrac{K_e}{[\mathrm{H_3O^+}]} = \dfrac{1{,}0 \times 10^{-14}}{[\mathrm{H_3O^+}]}$$

> **Exemple (eau pure, neutre).** Les deux ions sont en quantités égales :
> $[\mathrm{H_3O^+}] = [\mathrm{HO^-}] = 1{,}0 \times 10^{-7}$ mol·L⁻¹, d'où pH $= 7$.
> Vérification : $10^{-7} \times 10^{-7} = 10^{-14}$. ✔

> **Exemple (déboucheur, base).** À pH $= 12$ :
> $[\mathrm{H_3O^+}] = 10^{-12}$ mol·L⁻¹, donc
> $[\mathrm{HO^-}] = \dfrac{10^{-14}}{10^{-12}} = 10^{-2}$ mol·L⁻¹.
> La solution contient beaucoup plus d'ions hydroxyde : elle est bien **basique**.

> ⚠️ $K_e = 10^{-14}$ **uniquement à 25 °C**. Le neutre à pH $= 7$ suppose lui aussi
> cette température.

---

## 6. Pictogrammes et règles de sécurité

Les produits chimiques portent des **pictogrammes** (losange rouge et blanc, norme SGH) qui
avertissent du danger **avant** toute manipulation.

| Pictogramme | Signification | Exemple ST2S |
|---|---|---|
| **Corrosif** | attaque la peau, les yeux, les métaux | soude (déboucheur), acide fort |
| **Toxique** (tête de mort) | mortel ou nocif même à faible dose | certains désinfectants concentrés |
| **Irritant / nocif** | irritation, danger modéré | ammoniaque diluée, eau de Javel |
| **Inflammable** | prend feu facilement | alcool, solutions hydroalcooliques |

### Règles à appliquer systématiquement

- Porter **blouse, lunettes et gants** ; travailler dans un local **aéré**.
- **Ne jamais mélanger** au hasard : eau de Javel + détartrant (acide) dégage un gaz toxique.
- Pour diluer un acide concentré, verser **l'acide dans l'eau**, jamais l'inverse
  (« l'acide dans l'eau, sinon les emmerdes » : l'inverse projette des gouttes brûlantes).
- En cas de projection : **rincer abondamment à l'eau** et prévenir.

---

## 7. À retenir absolument

| | |
|---|---|
| Quantité de matière | $n = \dfrac{m}{M}$ (mol, g, g·mol⁻¹) |
| Concentration massique | $C_m = \dfrac{m}{V}$ (g·L⁻¹) |
| Concentration molaire | $C = \dfrac{n}{V}$ (mol·L⁻¹) |
| Lien des deux | $C = \dfrac{C_m}{M}$ |
| pH ↔ ions | $[\mathrm{H_3O^+}] = 10^{-\mathrm{pH}}$ ; $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$ |
| Acide / base | cède / capte un ion $\mathrm{H^+}$ |
| Autoprotolyse | $2\,\mathrm{H_2O} \rightleftharpoons \mathrm{H_3O^+} + \mathrm{HO^-}$ |
| Produit ionique (25 °C) | $K_e = [\mathrm{H_3O^+}][\mathrm{HO^-}] = 1{,}0 \times 10^{-14}$ |
| Neutre (25 °C) | pH $= 7$, $[\mathrm{H_3O^+}] = [\mathrm{HO^-}] = 10^{-7}$ mol·L⁻¹ |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier de convertir le volume en litres.** $250$ mL $= 0{,}250$ L. Un pH ou une
   concentration se calcule toujours avec $V$ en L.
2. **Se tromper de sens pour le pH.** pH **petit** = solution **acide** = $[\mathrm{H_3O^+}]$
   **grande**. Le signe « moins » de l'exposant inverse tout.
3. **Confondre $C_m$ et $C$.** $C_m$ est en g·L⁻¹, $C$ en mol·L⁻¹. Passer de l'une à l'autre
   exige de **diviser (ou multiplier) par $M$**, pas de recopier la valeur.
4. **Perdre les puissances de 10.** $10^{-2{,}0}$ s'écrit $1{,}0 \times 10^{-2}$, pas $-2$ ni
   $0{,}02$ sans unité. Écris toujours l'écriture scientifique **avec l'unité mol·L⁻¹**.
5. **Croire que $K_e = 10^{-14}$ toujours.** C'est la valeur **à 25 °C** seulement.
6. **Diluer un acide en versant l'eau dans l'acide.** On verse **l'acide dans l'eau**, sous
   peine de projections brûlantes.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de PHYSIQUE-CHIMIE POUR LA SANTÉ, série ST2S, BO spécial n°1 du
22 janvier 2019 (réforme du lycée). Section « Sécurité chimique : acides, bases et pH (1re) »,
thème 1 « Prévenir et sécuriser ».
Fichier de travail : docs/programme-st2s-physique-chimie-sante.txt (lignes 21-27), extrait via
WebFetch depuis le PDF officiel education.gouv.fr (https://www.education.gouv.fr/media/25040/download)
et eduscol ST2S. À CONFRONTER AU PDF OFFICIEL avant publication.

Notions couvertes, telles que listées par le programme :
- n = m/M ; soluté/solvant/solution ; Cm et C ; pH et [H3O+]=10^(-pH) ;
  acides/bases, couples, réaction acido-basique, échelles d'acidité ;
  autoprotolyse, produit ionique, [H3O+] et [HO-] ; pictogrammes et règles de sécurité.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le champ YAML « niveau » est mis à « premiere » (et non « premiere-techno ») pour rester
  homogène avec tous les autres chapitres du dépôt (voie technologique) ; le segment de chemin
  reste bien « premiere-techno/pc-sante-st2s ». À valider par le relecteur si une convention
  différente est souhaitée.
- La définition de Brønsted (acide/base = céder/capter H+) est-elle explicitement au programme
  ST2S 1re, ou seulement la notion qualitative de couple ? J'ai retenu Brønsted, standard au lycée.
- Le logarithme : le programme demande-t-il pH = -log[H3O+] (fonction log), ou seulement la
  relation directe [H3O+] = 10^(-pH) ? Les deux sont données ; à confirmer selon le niveau de maths ST2S.
- Le produit ionique est-il exigible avec sa valeur numérique (1,0e-14 à 25 °C), ou seulement
  qualitativement ? J'ai donné la valeur, usuelle mais à confirmer pour la série.
- Vérifier les valeurs de pH « milieux biologiques » citées (sang 7,4 ; suc gastrique ~2) —
  ordres de grandeur usuels, contextes ST2S, mais à valider.
- Masses molaires atomiques utilisées : H 1,0 ; C 12,0 ; N 14,0 ; O 16,0 ; Na 23,0 ; Cl 35,5 g·mol⁻¹.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
