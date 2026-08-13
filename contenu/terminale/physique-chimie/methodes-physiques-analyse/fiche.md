---
id: tale-spe-pc-methodes-physiques-analyse
titre: "Méthodes physiques d'analyse"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Concentration en quantité de matière (Seconde)
  - Dilution et facteur de dilution (Seconde)
  - Absorption de la lumière et couleur (Première)
  - Fonction linéaire et coefficient directeur (Maths)
statut: brouillon
relu_par: null
---

# Méthodes physiques d'analyse

> Doser une espèce sans la détruire, l'identifier sans la toucher : c'est ce que
> permettent les méthodes **physiques** d'analyse. On mesure une grandeur physique —
> une **absorbance**, une **conductance** — et on remonte à une **concentration** ; ou
> l'on lit un **spectre** IR ou UV-visible pour reconnaître les groupes d'atomes présents.
> Tout le chapitre tient dans une idée : une grandeur mesurable **proportionnelle** à ce
> qu'on cherche, à condition de ne jamais se tromper d'**unité**.

---

## 1. Absorbance et loi de Beer-Lambert

### Absorbance

L'**absorbance** $A$ d'une solution mesure la quantité de lumière qu'elle **retient** à une
longueur d'onde donnée. On la mesure avec un **spectrophotomètre**, réglé sur la longueur
d'onde $\lambda_{\max}$ où l'espèce absorbe le plus.

$$\boxed{A \ \text{est un nombre } \textbf{sans unité}}$$

> **Exemple.** Une solution de permanganate de potassium, violette, absorbe fortement le
> vert vers $\lambda_{\max} = 540\ \text{nm}$. On règle donc le spectrophotomètre sur
> $540\ \text{nm}$ avant toute mesure.

### Loi de Beer-Lambert

Pour une solution **diluée** d'une espèce colorée, l'absorbance est **proportionnelle** à la
concentration :

$$\boxed{A = \varepsilon \cdot \ell \cdot c}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $A$ | absorbance | **sans unité** |
| $\varepsilon$ | coefficient d'absorption molaire | $\mathrm{L\cdot mol^{-1}\cdot cm^{-1}}$ |
| $\ell$ | épaisseur de solution traversée | $\mathrm{cm}$ |
| $c$ | concentration de l'espèce | $\mathrm{mol\cdot L^{-1}}$ |

$\varepsilon$ dépend de **l'espèce** et de la **longueur d'onde** choisie. Pour une cuve et une
longueur d'onde fixées, $\varepsilon$ et $\ell$ sont constants : on regroupe tout dans un
**coefficient de proportionnalité** $k = \varepsilon\cdot\ell$, et la loi devient simplement

$$\boxed{A = k \cdot c}$$

> **Exemple.** Avec $\varepsilon = 4{,}0\times10^{3}\ \mathrm{L\cdot mol^{-1}\cdot cm^{-1}}$,
> une cuve de $\ell = 1{,}0\ \mathrm{cm}$ et $c = 1{,}0\times10^{-4}\ \mathrm{mol\cdot L^{-1}}$ :
> $A = 4{,}0\times10^{3} \times 1{,}0 \times 1{,}0\times10^{-4} = 0{,}40$. Le résultat est bien
> un nombre pur.

> ⚠️ La loi n'est valable que pour des solutions **diluées** ($A \lesssim 1$) et à **une seule**
> longueur d'onde. Au-delà, la droite se courbe : la proportionnalité est perdue.

### Courbe d'étalonnage

Pour doser une espèce, on prépare une **gamme** de solutions de concentrations connues, on
mesure leur absorbance et on trace $A$ en fonction de $c$ : c'est la **courbe d'étalonnage**.

D'après Beer-Lambert, c'est une **droite passant par l'origine**, de coefficient directeur
$k = \varepsilon\cdot\ell$. On mesure alors l'absorbance $A_x$ de la solution inconnue et on
lit (ou on calcule) sa concentration :

$$\boxed{c_x = \dfrac{A_x}{k}}$$

> **Exemple.** La courbe d'étalonnage a pour équation $A = 5{,}0\times10^{3}\,c$ (avec $c$ en
> $\mathrm{mol\cdot L^{-1}}$). Une solution inconnue donne $A_x = 0{,}75$ :
> $c_x = \dfrac{0{,}75}{5{,}0\times10^{3}} = 1{,}5\times10^{-4}\ \mathrm{mol\cdot L^{-1}}$.

> ⚠️ La courbe d'étalonnage n'est valable que pour **l'espèce** et **la longueur d'onde** avec
> lesquelles elle a été tracée. On ne réutilise jamais une droite d'étalonnage pour une autre
> espèce.

---

## 2. Conductance, conductivité et loi de Kohlrausch

### Conductance

La **conductance** $G$ d'une portion de solution mesure sa capacité à **laisser passer le
courant**. On la mesure avec un **conductimètre** muni d'une cellule à deux électrodes.

$$\boxed{G = \dfrac{I}{U}} \qquad \text{unité : le siemens } (\mathrm{S})$$

$G$ dépend de la solution **mais aussi** de la géométrie de la cellule (surface des électrodes,
distance qui les sépare). C'est pourquoi on définit une grandeur qui ne dépend, elle, que de la
solution : la conductivité.

### Conductivité

La **conductivité** $\sigma$ caractérise la solution seule, indépendamment de la cellule.

$$G = k_{\text{cell}}\cdot\sigma \qquad \text{avec } \sigma \text{ en } \mathrm{S\cdot m^{-1}}$$

$k_{\text{cell}}$ est la **constante de cellule** (en $\mathrm{m}$), propre à la sonde. On l'obtient
par étalonnage avec une solution de conductivité connue.

> **Exemple.** Une cellule de constante $k_{\text{cell}} = 1{,}0\ \mathrm{m}$ plongée dans une
> solution donne $G = 0{,}10\ \mathrm{S}$ ; la conductivité vaut alors
> $\sigma = G / k_{\text{cell}} = 0{,}10\ \mathrm{S\cdot m^{-1}}$.

### Loi de Kohlrausch

Pour une solution **diluée**, la conductivité est la **somme** des contributions de tous les
**ions** présents :

$$\boxed{\sigma = \sum_i \lambda_i \cdot c_i}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $\sigma$ | conductivité | $\mathrm{S\cdot m^{-1}}$ |
| $\lambda_i$ | conductivité molaire ionique de l'ion $i$ | $\mathrm{S\cdot m^{2}\cdot mol^{-1}}$ |
| $c_i$ | concentration de l'ion $i$ | $\mathbf{mol\cdot m^{-3}}$ |

$$\underbrace{\mathrm{S\cdot m^{2}\cdot mol^{-1}}}_{\lambda_i}\times\underbrace{\mathrm{mol\cdot m^{-3}}}_{c_i}=\underbrace{\mathrm{S\cdot m^{-1}}}_{\sigma}\quad\checkmark$$

> **Exemple.** Solution de chlorure de sodium à $c = 1{,}0\times10^{-2}\ \mathrm{mol\cdot L^{-1}}$,
> donc $[\mathrm{Na^+}] = [\mathrm{Cl^-}] = c = 10\ \mathrm{mol\cdot m^{-3}}$ (conversion !).
> Avec $\lambda_{\mathrm{Na^+}} = 5{,}0\times10^{-3}$ et
> $\lambda_{\mathrm{Cl^-}} = 7{,}6\times10^{-3}\ \mathrm{S\cdot m^{2}\cdot mol^{-1}}$ :
> $\sigma = (5{,}0 + 7{,}6)\times10^{-3}\times 10 = 0{,}13\ \mathrm{S\cdot m^{-1}}$.

> ⚠️ **Le piège n°1 du chapitre.** Dans la loi de Kohlrausch, les concentrations sont en
> $\mathrm{mol\cdot m^{-3}}$, **pas** en $\mathrm{mol\cdot L^{-1}}$. Rappel :
> $$1\ \mathrm{mol\cdot L^{-1}} = 10^{3}\ \mathrm{mol\cdot m^{-3}}.$$
> Oublier ce facteur $1000$ fausse la conductivité d'un facteur mille.

### Courbe d'étalonnage conductimétrique

Comme $\sigma$ est proportionnelle à $c$ (à ions fixés), on peut là aussi tracer une **courbe
d'étalonnage** $\sigma = f(c)$ : une droite passant par l'origine dont la pente permet de doser
une solution inconnue de la **même** espèce.

---

## 3. Spectroscopies UV-visible et infrarouge

Deux spectres, deux informations différentes : l'UV-visible **quantifie** (concentration), l'IR
**identifie** (groupes caractéristiques).

### Spectroscopie UV-visible

La lumière UV-visible ($200$ à $800\ \mathrm{nm}$) est absorbée par les électrons de l'espèce.
Une espèce qui absorbe dans le **visible** est **colorée** : elle apparaît de la couleur
**complémentaire** de celle qu'elle absorbe.

- On lit le spectre : absorbance $A$ en fonction de la longueur d'onde $\lambda$ (en $\mathrm{nm}$).
- Le maximum d'absorption $\lambda_{\max}$ **caractérise** l'espèce.
- À cette $\lambda_{\max}$, on applique Beer-Lambert pour **doser**.

> **Exemple.** Le diiode en solution absorbe vers $\lambda_{\max} \approx 450\ \mathrm{nm}$
> (bleu) et apparaît donc **jaune-orangé** (couleur complémentaire).

### Spectroscopie infrarouge (IR)

Le rayonnement infrarouge fait **vibrer les liaisons** de la molécule. Chaque type de liaison
absorbe à une position propre : l'IR sert à repérer les **groupes caractéristiques**.

En abscisse d'un spectre IR, on porte le **nombre d'onde** $\sigma$ (à ne pas confondre avec la
conductivité, même lettre) :

$$\boxed{\sigma = \dfrac{1}{\lambda}} \qquad \text{unité : } \mathrm{cm^{-1}}$$

L'axe va de $4000$ à $500\ \mathrm{cm^{-1}}$, gradué **vers la gauche** (les grands nombres d'onde
à gauche). En ordonnée : la **transmittance** — les bandes d'absorption pointent donc **vers le
bas**.

> **Exemple.** Une bande à $\sigma = 1700\ \mathrm{cm^{-1}}$ correspond à
> $\lambda = \dfrac{1}{\sigma} = \dfrac{1}{1700\ \mathrm{cm^{-1}}} = 5{,}9\times10^{-4}\ \mathrm{cm}
> = 5{,}9\ \mathrm{\mu m}$.

### Table des groupes caractéristiques (IR)

| Liaison / groupe | Bande (nombre d'onde, $\mathrm{cm^{-1}}$) | Aspect |
|---|---|---|
| $\mathrm{O\!-\!H}$ alcool (lié) | $3200 - 3400$ | large |
| $\mathrm{O\!-\!H}$ acide carboxylique | $2500 - 3200$ | **très large** |
| $\mathrm{N\!-\!H}$ amine | $3300 - 3500$ | fine(s) |
| $\mathrm{C\!-\!H}$ | $2800 - 3000$ | — |
| $\mathrm{C\!=\!O}$ (carbonyle) | $1650 - 1750$ | **forte, fine** |
| $\mathrm{C\!=\!C}$ | $\approx 1650$ | moyenne |

> **Méthode — lire un spectre IR.** On repère les bandes, on les compare à la table de données
> **fournie**, on en déduit les groupes présents. Une bande forte vers $1700\ \mathrm{cm^{-1}}$
> ($\mathrm{C\!=\!O}$) **plus** une bande très large $2500\text{-}3200\ \mathrm{cm^{-1}}$
> ($\mathrm{O\!-\!H}$ acide) signent un **acide carboxylique** ; le $\mathrm{C\!=\!O}$ seul (sans
> $\mathrm{O\!-\!H}$) oriente vers un aldéhyde ou une cétone.

---

## 4. Tableau récapitulatif

| Grandeur | Loi | Unités clés |
|---|---|---|
| Absorbance $A$ | $A = \varepsilon\,\ell\,c = k\,c$ | $A$ sans unité ; $\varepsilon$ en $\mathrm{L\cdot mol^{-1}\cdot cm^{-1}}$ |
| Courbe d'étalonnage | droite $A = k\,c$ par l'origine | $c_x = A_x/k$ |
| Conductance $G$ | $G = I/U = k_{\text{cell}}\,\sigma$ | $G$ en $\mathrm{S}$ |
| Conductivité $\sigma$ | Kohlrausch $\sigma = \sum \lambda_i c_i$ | $\sigma$ en $\mathrm{S\cdot m^{-1}}$, $\lambda$ en $\mathrm{S\cdot m^{2}\cdot mol^{-1}}$, $c$ en $\mathbf{mol\cdot m^{-3}}$ |
| Conversion | $1\ \mathrm{mol\cdot L^{-1}} = 10^{3}\ \mathrm{mol\cdot m^{-3}}$ | facteur $1000$ |
| UV-visible | absorbe $\Rightarrow$ couleur complémentaire | $\lambda$ en $\mathrm{nm}$ ; sert à **doser** |
| IR | $\sigma = 1/\lambda$ | nombre d'onde en $\mathrm{cm^{-1}}$ ; sert à **identifier** |

---

## 5. Les erreurs qui coûtent des points

1. **Donner une unité à l'absorbance.** $A$ est un **nombre pur**. Si tu écris « $A = 0{,}40\
   \mathrm{mol\cdot L^{-1}}$ », c'est faux : c'est $c$ qui a cette unité.
2. **Garder $c$ en $\mathrm{mol\cdot L^{-1}}$ dans Kohlrausch.** Les $c_i$ doivent être en
   $\mathrm{mol\cdot m^{-3}}$ : multiplie par $10^{3}$. C'est l'erreur la plus fréquente du
   chapitre.
3. **Confondre conductance et conductivité.** $G$ (en $\mathrm{S}$) dépend de la cellule ;
   $\sigma$ (en $\mathrm{S\cdot m^{-1}}$) ne dépend que de la solution.
4. **Multiplier au lieu de diviser dans l'étalonnage.** Pour l'inconnue, $c_x = A_x/k$, pas
   $A_x\times k$.
5. **Croire que l'IR donne une concentration.** L'IR **identifie** des groupes ; c'est
   l'**UV-visible** (via Beer-Lambert) qui **dose**.
6. **Confondre longueur d'onde et nombre d'onde.** En IR, l'axe est le nombre d'onde
   $\sigma = 1/\lambda$ en $\mathrm{cm^{-1}}$ — ce n'est pas une longueur d'onde en nm.
7. **Oublier la condition de validité.** Beer-Lambert et Kohlrausch ne valent que pour des
   solutions **diluées**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019. Extrait de travail :
docs/programme-terminale-physique-chimie-2019.txt, section « 1.2 Méthodes physiques
d'analyse » (lignes 33-41). À confronter au PDF officiel education.gouv.fr / eduscol
(MENE1921249A / spe249_annexe_1158929.pdf) avant publication — extrait initial via WebFetch.

Périmètre limité à la section 1.2 telle qu'annoncée :
- absorbance, loi de Beer-Lambert (A = ε·ℓ·c et forme A = k·c), courbe d'étalonnage ;
- conductance, conductivité, loi de Kohlrausch (σ = Σ λi·ci) ;
- spectroscopies IR et UV-visible, groupes caractéristiques, nombre d'onde.
L'équation d'état du gaz parfait (PV = nRT), citée dans la capacité « Exploiter la loi de
Beer-Lambert, la loi de Kohlrausch OU l'équation d'état du gaz parfait », est traitée dans le
thème 3 (3.1) : volontairement NON reprise ici.

⚠️ À CONFRONTER AU PDF / VALIDER PAR UN PROFESSEUR :
- Valeurs numériques des conductivités molaires ioniques λ (Na+, Cl-, K+…) : ordres de grandeur
  usuels lycée (en S·m²·mol⁻¹) ; à revérifier sur la table de données officielle fournie le jour
  de l'épreuve (souvent données en mS·m²·mol⁻¹). Les exercices donnent les λ dans l'énoncé.
- Coefficients ε et k des exemples/exos : valeurs pédagogiques, non tirées d'une espèce précise.
- Constante de cellule k_cell : présentée comme grandeur d'étalonnage (unité m) ; certains
  manuels écrivent G = σ·(S/L). Formulation à valider.
- Table IR (fourchettes de nombres d'onde) : valeurs usuelles ; à aligner sur la table de
  données que l'établissement distribue.
- Position de λmax du diiode/permanganate : ordres de grandeur illustratifs, à confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
