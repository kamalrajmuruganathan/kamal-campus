---
id: 1spe-pc-transformations-matiere
titre: "Constitution et transformations de la matière"
voie: generale
niveau: premiere
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Quantité de matière et concentration (Seconde)
  - Transformations de la matière (Seconde)
statut: brouillon
relu_par: null
---

# Constitution et transformations de la matière

> La Seconde décrivait les transformations ; la Première les **quantifie**. Le tableau
> d'avancement est l'outil central : il répond à la question « combien ? » à chaque instant
> de la réaction.

---

## 1. Le tableau d'avancement

### Principe

L'**avancement** $x$ (en mol) mesure le degré de progression de la réaction. Pour
$a\mathrm{A} + b\mathrm{B} \rightarrow c\mathrm{C} + d\mathrm{D}$ :

| État | $\mathrm{A}$ | $\mathrm{B}$ | $\mathrm{C}$ | $\mathrm{D}$ |
|---|---|---|---|---|
| Initial | $n_\mathrm{A}$ | $n_\mathrm{B}$ | $0$ | $0$ |
| En cours | $n_\mathrm{A} - ax$ | $n_\mathrm{B} - bx$ | $cx$ | $dx$ |
| Final | $n_\mathrm{A} - ax_f$ | $n_\mathrm{B} - bx_f$ | $cx_f$ | $dx_f$ |

> **Les réactifs diminuent** (signe $-$), **les produits augmentent** (signe $+$), et chaque
> terme est multiplié par son **nombre stœchiométrique**.

### Trouver le réactif limitant

On cherche la plus petite valeur de $x$ annulant un réactif :

$$x_{\max} = \min\left(\frac{n_\mathrm{A}}{a}\,;\frac{n_\mathrm{B}}{b}\right)$$

Le réactif qui donne ce minimum est le **limitant**.

> ⚠️ **Ce n'est pas le réactif le moins abondant**, mais celui dont le rapport
> $\dfrac{\text{quantité}}{\text{nombre stœchiométrique}}$ est le plus faible. Oublier de
> diviser est l'erreur type.

### Mélange stœchiométrique

Quand les deux rapports sont égaux, les réactifs s'épuisent **simultanément**.

---

## 2. Suivi d'une transformation

Plusieurs grandeurs permettent de suivre l'avancement :

| Méthode | Grandeur mesurée |
|---|---|
| **Spectrophotométrie** | absorbance de la solution |
| **Conductimétrie** | conductivité (si des ions sont impliqués) |
| **pH-métrie** | acidité |
| **Titrage** | volume de réactif titrant versé |

### Loi de Beer-Lambert

$$\boxed{A = \varepsilon \times \ell \times c}$$

L'absorbance $A$ (sans unité) est **proportionnelle à la concentration** — c'est ce qui permet
de doser par étalonnage.

---

## 3. Le titrage

Un **titrage** détermine une concentration inconnue par réaction avec une solution de
concentration connue.

### L'équivalence

À l'**équivalence**, les réactifs ont été introduits dans les **proportions
stœchiométriques** : ils s'épuisent exactement en même temps.

Pour une réaction $\mathrm{A} + \mathrm{B} \rightarrow$ produits (un pour un) :

$$\boxed{c_\mathrm{A} V_\mathrm{A} = c_\mathrm{B} V_{\mathrm{B},\text{éq}}}$$

> ⚠️ Cette relation simple n'est valable **que** si les nombres stœchiométriques valent $1$.
> Sinon, il faut passer par $\dfrac{n_\mathrm{A}}{a} = \dfrac{n_\mathrm{B}}{b}$.

### Repérer l'équivalence

- **Changement de couleur** d'un indicateur, ou disparition d'une teinte
- **Saut de pH** brutal dans un titrage acido-basique
- **Rupture de pente** sur une courbe conductimétrique

---

## 4. Acides et bases

### Couple acide/base

$$\mathrm{AH} \rightleftharpoons \mathrm{A^-} + \mathrm{H^+}$$

Un **acide** cède un proton $\mathrm{H^+}$, une **base** en capte un.

| Couple | Acide | Base |
|---|---|---|
| $\mathrm{H_3O^+}/\mathrm{H_2O}$ | $\mathrm{H_3O^+}$ | $\mathrm{H_2O}$ |
| $\mathrm{CH_3COOH}/\mathrm{CH_3COO^-}$ | acide éthanoïque | ion éthanoate |

### Le pH

$$\boxed{\mathrm{pH} = -\log\left[\mathrm{H_3O^+}\right]} \qquad\qquad \left[\mathrm{H_3O^+}\right] = 10^{-\mathrm{pH}}$$

| pH | Solution |
|---|---|
| $< 7$ | acide |
| $= 7$ | neutre |
| $> 7$ | basique |

> **La conséquence pratique de l'échelle logarithmique** : une diminution d'**une unité** de pH
> correspond à une concentration en ions $\mathrm{H_3O^+}$ **multipliée par 10**.

---

## 5. Énergie molaire de réaction

Une transformation chimique s'accompagne d'un transfert d'énergie :

- **Exothermique** : libère de l'énergie, la température augmente
- **Endothermique** : absorbe de l'énergie, la température diminue

$$Q = n \times E_{\text{molaire}}$$

---

## 6. À retenir absolument

| | |
|---|---|
| Avancement | réactifs $-ax$, produits $+cx$ |
| Réactif limitant | plus petit $\dfrac{n_i}{\text{coeff}_i}$ |
| Beer-Lambert | $A = \varepsilon \ell c$, $A$ proportionnelle à $c$ |
| Équivalence (1:1) | $c_\mathrm{A}V_\mathrm{A} = c_\mathrm{B}V_{\mathrm{B},\text{éq}}$ |
| pH | $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$ |
| $-1$ unité de pH | concentration $\times 10$ |
| Exothermique | libère de l'énergie |

---

## 7. Les erreurs qui coûtent des points

1. **Désigner comme limitant le réactif le moins abondant** sans diviser par le nombre
   stœchiométrique.
2. **Oublier les nombres stœchiométriques** dans le tableau d'avancement.
3. **Mettre un $+$ devant l'avancement pour un réactif** : les réactifs **diminuent**.
4. **Appliquer $cV = c'V'$ quand les coefficients ne valent pas $1$.**
5. **Croire que le pH est proportionnel à la concentration** : l'échelle est logarithmique.
6. **Confondre l'équivalence et la fin de la réaction** : à l'équivalence, les réactifs sont
   introduits en proportions stœchiométriques.
7. **Oublier les unités**, en particulier les litres pour les concentrations.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « Constitution et
transformations de la matière », ligne 1025 du .txt extrait ; « Énergie molaire de
réaction » ligne 1899).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des titrages : titrage colorimétrique seulement, ou aussi
  conductimétrique et pH-métrique ? J'ai mentionné les trois.
- La constante d'acidité Ka et le pKa sont-ils au programme de première, ou de terminale ?
  Je ne les ai PAS inclus — point de périmètre à trancher.
- Les réactions d'oxydoréduction sont-elles traitées dans ce thème en première ?
  Je ne les ai pas développées.
- La notion de dosage par étalonnage (droite d'étalonnage) est-elle exigible ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
