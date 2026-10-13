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

<!-- schema:transfert-proton -->
![Exemple de la fiche : l'acide éthanoïque cède un ion H⁺ à l'eau, qui joue le rôle de base ; il se forme l'ion éthanoate et l'ion oxonium.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgMjUwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSIyNTAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMTQwIiB5MT0iODQiIHgyPSIxNDAiIHkyPSIxNjYiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjE0MCwxNzYgMTQ1LDE2NiAxMzUsMTY2IiBmaWxsPSIjYzAyYTJhIi8+PHRleHQgeD0iMTAwIiB5PSIxMzAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmPDqGRlIEjigbo8L3RleHQ+PGxpbmUgeDE9IjUwMCIgeTE9Ijg0IiB4Mj0iNTAwIiB5Mj0iMTY2IiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI1MDAsMTc2IDUwNSwxNjYgNDk1LDE2NiIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjU0MiIgeT0iMTMwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMWY2ZmViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jYXB0ZSBI4oG6PC90ZXh0PjxsaW5lIHgxPSIyNjAiIHkxPSIxMTUiIHgyPSIzNzAiIHkyPSIxMTUiIHN0cm9rZT0iIzdhM2ZiMCIgc3Ryb2tlLXdpZHRoPSIyLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMzgwLDExNSAzNzAsMTEwIDM3MCwxMjAiIGZpbGw9IiM3YTNmYjAiLz48dGV4dCB4PSIzMjAiIHk9IjEwOCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SOKBujwvdGV4dD48cmVjdCB4PSIzMCIgeT0iMzAiIHdpZHRoPSIyMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSIjZmJlYWVhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTQwIiB5PSI1OS45IiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj5DSOKCg0NPT0ggKGFjaWRlIDEpPC90ZXh0PjxyZWN0IHg9IjMwIiB5PSIxODAiIHdpZHRoPSIyMjAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSIjZmJlYWVhIiBzdHJva2U9IiNjMDJhMmEiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMTQwIiB5PSIyMDkuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q0jigoNDT0/igbsgKGJhc2UgMSk8L3RleHQ+PHJlY3QgeD0iMzkwIiB5PSIzMCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSI1MCIgcng9IjgiIGZpbGw9IiNlZWYzZmIiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48dGV4dCB4PSI1MDAiIHk9IjU5LjkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkjigoJPIChiYXNlIDIpPC90ZXh0PjxyZWN0IHg9IjM5MCIgeT0iMTgwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iI2VlZjNmYiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjUwMCIgeT0iMjA5LjkiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkjigoNP4oG6IChhY2lkZSAyKTwvdGV4dD48L3N2Zz4=)
*Exemple de la fiche : l'acide éthanoïque cède un ion H⁺ à l'eau, qui joue le rôle de base ; il se forme l'ion éthanoate et l'ion oxonium.*
<!-- /schema -->

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

<!-- schema:amphotere -->
![L'eau est amphotère : base du couple H₃O⁺/H₂O quand elle capte un ion H⁺, acide du couple H₂O/HO⁻ quand elle en cède un.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgMjgwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSIyODAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMzAwIiB5MT0iMTEwIiB4Mj0iMzAwIiB5Mj0iNzgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwMCw2OCAyOTUsNzggMzA1LDc4IiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzIwIiB5PSI5MyIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9InN0YXJ0Ij5jYXB0ZSBI4oG6IDogbCdlYXUgZXN0IHVuZSBiYXNlPC90ZXh0PjxsaW5lIHgxPSIzMDAiIHkxPSIxNjgiIHgyPSIzMDAiIHkyPSIyMDAiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjMwMCwyMTAgMzA1LDIwMCAyOTUsMjAwIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzIwIiB5PSIxOTMiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJzdGFydCI+Y8OoZGUgSOKBuiA6IGwnZWF1IGVzdCB1biBhY2lkZTwvdGV4dD48cmVjdCB4PSIyMDAiIHk9IjE0IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iI2ZiZWFlYSIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuOCIvPjx0ZXh0IHg9IjMwMCIgeT0iNDMuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+SOKCg0/igbo8L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSIxMTQiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSIjZjNlY2ZhIiBzdHJva2U9IiM3YTNmYjAiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzAwIiB5PSIxNDMuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+SOKCgk88L3RleHQ+PHJlY3QgeD0iMjAwIiB5PSIyMTQiIHdpZHRoPSIyMDAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSIjZWVmM2ZiIiBzdHJva2U9IiMxZjZmZWIiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHRleHQgeD0iMzAwIiB5PSIyNDMuOSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+SE/igbs8L3RleHQ+PC9zdmc+)
*L'eau est amphotère : base du couple H₃O⁺/H₂O quand elle capte un ion H⁺, acide du couple H₂O/HO⁻ quand elle en cède un.*
<!-- /schema -->

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

<!-- schema:echelle-ph -->
![Échelle des pH à 25 °C : chaque unité de pH en moins correspond à une concentration en ions oxonium dix fois plus grande.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjAgMjIwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjY2MCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmZmZmYiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBoIiB4MT0iMCIgeDI9IjEiIHkxPSIwIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTAzMTMxIi8+PHN0b3Agb2Zmc2V0PSIwLjI1IiBzdG9wLWNvbG9yPSIjZjU5ZjAwIi8+PHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiM0MGMwNTciLz48c3RvcCBvZmZzZXQ9IjAuNzUiIHN0b3AtY29sb3I9IiMyMjhiZTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MDQ4ZTgiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIzMCIgeT0iNzAiIHdpZHRoPSI2MDAiIGhlaWdodD0iMjYiIHJ4PSIwIiBmaWxsPSJ1cmwoI3BoKSIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48bGluZSB4MT0iMzAiIHkxPSI5NiIgeDI9IjMwIiB5Mj0iMTAyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzMCIgeT0iMTE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PjxsaW5lIHgxPSI3Mi44NiIgeTE9Ijk2IiB4Mj0iNzIuODYiIHkyPSIxMDIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjcyLjg2IiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE8L3RleHQ+PGxpbmUgeDE9IjExNS43MSIgeTE9Ijk2IiB4Mj0iMTE1LjcxIiB5Mj0iMTAyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIxMTUuNzEiIHk9IjExNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjwvdGV4dD48bGluZSB4MT0iMTU4LjU3IiB5MT0iOTYiIHgyPSIxNTguNTciIHkyPSIxMDIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjE1OC41NyIgeT0iMTE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0PjxsaW5lIHgxPSIyMDEuNDMiIHkxPSI5NiIgeDI9IjIwMS40MyIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMjAxLjQzIiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQ8L3RleHQ+PGxpbmUgeDE9IjI0NC4yOSIgeTE9Ijk2IiB4Mj0iMjQ0LjI5IiB5Mj0iMTAyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIyNDQuMjkiIHk9IjExNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTwvdGV4dD48bGluZSB4MT0iMjg3LjE0IiB5MT0iOTYiIHgyPSIyODcuMTQiIHkyPSIxMDIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjI4Ny4xNCIgeT0iMTE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj42PC90ZXh0PjxsaW5lIHgxPSIzMzAiIHkxPSI5NiIgeDI9IjMzMCIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzMwIiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjc8L3RleHQ+PGxpbmUgeDE9IjM3Mi44NiIgeTE9Ijk2IiB4Mj0iMzcyLjg2IiB5Mj0iMTAyIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS4zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48dGV4dCB4PSIzNzIuODYiIHk9IjExNiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+ODwvdGV4dD48bGluZSB4MT0iNDE1LjcxIiB5MT0iOTYiIHgyPSI0MTUuNzEiIHkyPSIxMDIiIHN0cm9rZT0iIzE2MjMyZSIgc3Ryb2tlLXdpZHRoPSIxLjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9IjQxNS43MSIgeT0iMTE2IiBmb250LXNpemU9IjEzIiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45PC90ZXh0PjxsaW5lIHgxPSI0NTguNTciIHkxPSI5NiIgeDI9IjQ1OC41NyIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNDU4LjU3IiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEwPC90ZXh0PjxsaW5lIHgxPSI1MDEuNDMiIHkxPSI5NiIgeDI9IjUwMS40MyIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTAxLjQzIiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjExPC90ZXh0PjxsaW5lIHgxPSI1NDQuMjkiIHkxPSI5NiIgeDI9IjU0NC4yOSIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTQ0LjI5IiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEyPC90ZXh0PjxsaW5lIHgxPSI1ODcuMTQiIHkxPSI5NiIgeDI9IjU4Ny4xNCIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTg3LjE0IiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEzPC90ZXh0PjxsaW5lIHgxPSI2MzAiIHkxPSI5NiIgeDI9IjYzMCIgeTI9IjEwMiIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjEuMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNjMwIiB5PSIxMTYiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjE0PC90ZXh0PjxsaW5lIHgxPSIzMzAiIHkxPSI2MiIgeDI9IjMzMCIgeTI9IjEwNCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMTgwIiB5PSI1OCIgZm9udC1zaXplPSIxNSIgZmlsbD0iI2MwMmEyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+QUNJREU8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSI1OCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+bmV1dHJlPC90ZXh0Pjx0ZXh0IHg9IjQ4MCIgeT0iNTgiIGZvbnQtc2l6ZT0iMTUiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiPkJBU0lRVUU8L3RleHQ+PGxpbmUgeDE9IjMxMi44NiIgeTE9IjM2IiB4Mj0iNTUuMTQiIHkyPSIzNiIgc3Ryb2tlPSIjYzAyYTJhIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI0Ny4xNCwzNiA1NS4xNCw0MCA1NS4xNCwzMiIgZmlsbD0iI2MwMmEyYSIvPjx0ZXh0IHg9IjE4MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNjMDJhMmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRlIHBsdXMgZW4gcGx1cyBhY2lkZTwvdGV4dD48bGluZSB4MT0iMzQ3LjE0IiB5MT0iMzYiIHgyPSI2MDQuODYiIHkyPSIzNiIgc3Ryb2tlPSIjMWY2ZmViIiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI2MTIuODYsMzYgNjA0Ljg2LDMyIDYwNC44Niw0MCIgZmlsbD0iIzFmNmZlYiIvPjx0ZXh0IHg9IjQ4MCIgeT0iMzAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxZjZmZWIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmRlIHBsdXMgZW4gcGx1cyBiYXNpcXVlPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMTMyLjg2LDEyNCAxMjcuODYsMTMwIDEzNy44NiwxMzAiIGZpbGw9IiMxNjIzMmUiLz48dGV4dCB4PSIxMzIuODYiIHk9IjE0NiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+anVzIGRlIGNpdHJvbjwvdGV4dD48cG9seWdvbiBwb2ludHM9IjMzMCwxMjQgMzI1LDEzMCAzMzUsMTMwIiBmaWxsPSIjMTYyMzJlIi8+PHRleHQgeD0iMzMwIiB5PSIxNDYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPmVhdSBwdXJlPC90ZXh0Pjx0ZXh0IHg9IjMwIiB5PSIxODAiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJzdGFydCI+W0jigoNP4oG6XSAobW9sL0wpIDo8L3RleHQ+PHRleHQgeD0iNzIuODYiIHk9IjIwMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTDigbvCuTwvdGV4dD48dGV4dCB4PSIxNTguNTciIHk9IjIwMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTDigbvCszwvdGV4dD48dGV4dCB4PSIyNDQuMjkiIHk9IjIwMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTDigbvigbU8L3RleHQ+PHRleHQgeD0iMzMwIiB5PSIyMDAiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM3YTNmYjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjEw4oG74oG3PC90ZXh0Pjx0ZXh0IHg9IjQxNS43MSIgeT0iMjAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMOKBu+KBuTwvdGV4dD48dGV4dCB4PSI1MDEuNDMiIHk9IjIwMCIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzdhM2ZiMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTDigbvCucK5PC90ZXh0Pjx0ZXh0IHg9IjU4Ny4xNCIgeT0iMjAwIiBmb250LXNpemU9IjEzIiBmaWxsPSIjN2EzZmIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMOKBu8K5wrM8L3RleHQ+PC9zdmc+)
*Échelle des pH à 25 °C : chaque unité de pH en moins correspond à une concentration en ions oxonium dix fois plus grande.*
<!-- /schema -->

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
