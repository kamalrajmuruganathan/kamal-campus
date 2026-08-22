---
id: 1stl-spcl-analyses-spectroscopies-dosages
titre: "Analyses physico-chimiques : spectroscopies et dosages"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 16
prerequis:
  - Grandeurs, unités du Système international et conversions (Seconde)
  - Concentration en quantité de matière et dilution (Seconde)
  - Espèces chimiques, groupes caractéristiques (Seconde)
  - Absorption de la lumière et couleur (Seconde)
statut: brouillon
relu_par: null
---

# Analyses physico-chimiques : spectroscopies et dosages

> Au laboratoire, une question revient sans cesse : **qu'y a-t-il dans ce flacon, et en
> quelle quantité ?** Pour y répondre, on ne goûte pas — on **mesure**. Une température de
> fusion identifie une espèce ; un spectre trahit ses groupes chimiques ; une absorbance
> ou un volume versé donne sa concentration. Ce chapitre te donne les deux gestes du
> métier : **identifier** une espèce et **doser** une solution.

---

## 1. Identifier une espèce par ses propriétés physiques

Une espèce chimique pure possède des **propriétés physiques caractéristiques** : mesurées
avec soin, elles servent de « carte d'identité ». On les compare à des valeurs **tabulées**
(données constructeur, tables de chimie).

| Propriété | Symbole | Unité usuelle | Ce qu'elle renseigne |
|---|---|---|---|
| Température de fusion | $T_{\text{fus}}$ | °C | identité + **pureté** |
| Température d'ébullition | $T_{\text{eb}}$ | °C | identité |
| Indice de réfraction | $n$ | sans unité | identité (liquides) |
| Densité | $d$ | sans unité | identité |

> **Exemple.** Un liquide incolore distille à $78\ \text{°C}$ sous pression normale, de
> densité $d = 0{,}79$ : ces valeurs pointent vers l'**éthanol** ($T_{\text{eb}} = 78\ \text{°C}$,
> $d = 0{,}79$). Une seule propriété ne suffit pas ; c'est le **faisceau** de propriétés
> concordantes qui identifie.

### La densité

La densité d'un liquide compare sa masse volumique à celle de l'eau :

$$\boxed{d = \frac{\rho}{\rho_{\text{eau}}}}\qquad \rho_{\text{eau}} = 1{,}00\times 10^{3}\ \text{kg·m}^{-3} = 1{,}00\ \text{g·mL}^{-1}$$

$d$ est **sans unité** : c'est un rapport de deux masses volumiques. Numériquement, en
$\text{g·mL}^{-1}$, la masse volumique $\rho$ et la densité $d$ ont **la même valeur**.

> **Exemple.** $50{,}0\ \text{mL}$ d'un liquide pèsent $44{,}0\ \text{g}$. Sa masse volumique
> vaut $\rho = \frac{44{,}0}{50{,}0} = 0{,}88\ \text{g·mL}^{-1}$, donc $d = 0{,}88$.

### La température de fusion mesure aussi la pureté

Une espèce **pure** fond à température **fixe et nette**. Une espèce **impure** fond sur un
**intervalle** (fusion « pâteuse ») et à une température **plus basse** que le corps pur :
l'impureté **abaisse et élargit** le point de fusion. C'est le critère qu'on utilise après
une recristallisation pour juger si le solide est bien purifié.

> ⚠️ **Un test d'identification n'est pas une preuve absolue** : deux espèces peuvent
> partager une même propriété. On croise toujours **plusieurs** critères.

---

## 2. Spectroscopie UV-visible

### Le principe

Une solution colorée **absorbe** une partie de la lumière visible qui la traverse. Le
**spectrophotomètre** mesure, longueur d'onde par longueur d'onde, l'**absorbance** $A$ :
une grandeur **sans unité** qui dit *quelle fraction* de lumière est retenue. Plus $A$ est
grande, plus la solution absorbe.

Le tracé de $A$ en fonction de la longueur d'onde $\lambda$ est le **spectre d'absorption**.
La longueur d'onde du **maximum** d'absorption se note $\lambda_{\max}$ : c'est une signature
de l'espèce et le réglage à choisir pour un dosage.

### Couleur et couleur complémentaire

La couleur **perçue** d'une solution est la **couleur complémentaire** de celle qu'elle
**absorbe** le plus. On lit $\lambda_{\max}$ (la couleur absorbée) sur le spectre, puis on
en déduit la couleur vue sur l'**étoile des couleurs**.

| $\lambda_{\max}$ absorbée | Couleur absorbée | Couleur **perçue** (complémentaire) |
|---|---|---|
| $\approx 450\ \text{nm}$ | bleu | jaune-orangé |
| $\approx 500\ \text{nm}$ | vert | rouge-magenta |
| $\approx 620\ \text{nm}$ | orangé | bleu |
| $\approx 660\ \text{nm}$ | rouge | vert-cyan |

> **Exemple.** Une solution de sulfate de cuivre absorbe vers $\lambda_{\max} \approx 800\ \text{nm}$
> (rouge/proche IR) : elle apparaît **bleue**, la complémentaire. À l'inverse, une solution
> **jaune** absorbe dans le **bleu** ($\approx 450\ \text{nm}$).

> ⚠️ Ne confonds pas **couleur absorbée** et **couleur perçue** : elles sont
> **opposées** sur le cercle chromatique. La solution ne « renvoie » pas la couleur de son
> $\lambda_{\max}$.

---

## 3. Spectroscopie infrarouge

Le rayonnement **infrarouge** (IR) fait **vibrer** les liaisons d'une molécule. Chaque type
de liaison absorbe à un **nombre d'onde** $\sigma$ caractéristique (en $\text{cm}^{-1}$),
indépendant du reste de la molécule. Le spectre IR est donc une **carte des groupes
caractéristiques** présents.

On lit un spectre IR en repérant les **bandes d'absorption** (creux de transmittance) et en
les comparant à une **table**.

| Groupe / liaison | Bande caractéristique ($\text{cm}^{-1}$) | Allure |
|---|---|---|
| O–H (alcool) | $3200$–$3400$ | **large**, forte |
| O–H (acide carboxylique) | $2500$–$3200$ | **très large** |
| N–H (amine) | $3300$–$3500$ | fine(s) |
| C–H | $\approx 2900$–$3000$ | moyenne |
| C=O (carbonyle) | $1700$–$1750$ | **fine et intense** |

> **Exemple.** Un spectre montre une bande **large** vers $3300\ \text{cm}^{-1}$ **et** une
> bande **fine et intense** vers $1710\ \text{cm}^{-1}$ : on identifie à la fois un O–H et un
> C=O, cohérents avec un **acide carboxylique** (le O–H acide, très large, confirme).

> ⚠️ L'IR identifie des **groupes**, pas la molécule entière. Deux molécules différentes
> portant les mêmes groupes ont des bandes semblables dans cette zone. La zone en dessous de
> $1500\ \text{cm}^{-1}$ (« empreinte digitale ») est propre à chaque molécule mais on ne
> l'interprète pas bande par bande.

---

## 4. La loi de Beer-Lambert

Pour une solution **diluée**, l'absorbance est **proportionnelle** à la concentration de
l'espèce colorée :

$$\boxed{A = \varepsilon \cdot \ell \cdot c}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $A$ | absorbance | **sans unité** |
| $\varepsilon$ | coefficient d'absorption molaire (à $\lambda$ fixée) | $\text{L·mol}^{-1}\text{·cm}^{-1}$ |
| $\ell$ | épaisseur de solution traversée (largeur de la cuve) | $\text{cm}$ |
| $c$ | concentration en quantité de matière | $\text{mol·L}^{-1}$ |

> **Exemple.** Dans une cuve de $\ell = 1{,}0\ \text{cm}$, à $\lambda_{\max}$, une espèce de
> coefficient $\varepsilon = 6{,}0\times 10^{3}\ \text{L·mol}^{-1}\text{·cm}^{-1}$ est à
> $c = 2{,}0\times 10^{-4}\ \text{mol·L}^{-1}$. Alors
> $A = 6{,}0\times 10^{3} \times 1{,}0 \times 2{,}0\times 10^{-4} = 1{,}2$. Bien **sans unité** :
> $\text{L·mol}^{-1}\text{·cm}^{-1} \times \text{cm} \times \text{mol·L}^{-1}$ se simplifie
> entièrement.

> ⚠️ **Domaine de validité.** La loi n'est linéaire que pour les solutions **diluées**
> ($A \lesssim 1{,}5$ en pratique). Trop concentrée, la droite se courbe : on **dilue** avant
> de mesurer.

Deux conséquences utiles :
- $\varepsilon$ dépend de l'espèce **et** de $\lambda$ : on se place toujours à $\lambda_{\max}$
  pour maximiser la sensibilité.
- À $\lambda$, $\ell$ et espèce fixés, $A$ et $c$ sont **proportionnelles** : c'est ce qui
  rend le dosage par étalonnage possible.

---

## 5. Dosage par étalonnage spectrophotométrique

**Doser**, c'est déterminer une concentration inconnue. Le dosage par étalonnage ne
**détruit pas** l'échantillon : il le **compare** à des solutions connues.

### La méthode, dans l'ordre

1. **Préparer une gamme d'étalons** : plusieurs solutions de concentrations **connues** de
   l'espèce colorée (par dilutions d'une solution mère).
2. **Régler** le spectrophotomètre sur $\lambda_{\max}$ et **faire le blanc** (zéro sur le
   solvant seul).
3. **Mesurer** l'absorbance $A$ de chaque étalon.
4. **Tracer** la **droite d'étalonnage** $A = f(c)$. D'après Beer-Lambert elle passe par
   l'**origine** ; son coefficient directeur vaut $k = \varepsilon\,\ell$.
5. **Mesurer** l'absorbance $A_x$ de la solution inconnue et **lire** (ou calculer) $c_x$ sur
   la droite.

$$\boxed{c_x = \frac{A_x}{k}}\qquad k = \varepsilon\,\ell = \text{coefficient directeur de } A=f(c)$$

> **Exemple.** La droite d'étalonnage a pour équation $A = 4{,}0\times 10^{3}\, c$ (avec $c$ en
> $\text{mol·L}^{-1}$). L'inconnue donne $A_x = 0{,}52$. Alors
> $c_x = \dfrac{0{,}52}{4{,}0\times 10^{3}} = 1{,}3\times 10^{-4}\ \text{mol·L}^{-1}$.

> ⚠️ **La même cuve, la même $\lambda$, le même blanc** pour les étalons **et** l'inconnue.
> Changer un réglage entre la calibration et la mesure fausse tout. Et si $A_x$ **dépasse** la
> gamme, on **dilue** l'inconnue (puis on multiplie $c_x$ par le facteur de dilution).

---

## 6. Dosage direct par titrage

Quand l'espèce n'est pas colorée, on la **dose par titrage** : on la fait **réagir
totalement** avec un réactif de concentration connue (le **titrant**), versé à la burette.

### L'équivalence

L'**équivalence** est l'instant où les réactifs sont introduits dans les **proportions
stœchiométriques** : le réactif titrant vient d'avoir **entièrement consommé** l'espèce
titrée. Avant, le titré est en excès ; après, le titrant est en excès. On la repère par un
**changement** : virage d'un indicateur coloré, saut de pH, saut de conductivité.

### La relation à l'équivalence

Pour un titrage dont l'équation est $a\,\text{A} + b\,\text{B} \rightarrow \text{produits}$
(A titré, B titrant), les quantités introduites sont dans le rapport des coefficients :

$$\boxed{\dfrac{n_{\text{A}}}{a} = \dfrac{n_{\text{B, versé}}}{b}}\qquad
\text{soit, pour } a=b=1 :\quad n_{\text{A}} = n_{\text{B}} = C_{\text{B}}\,V_{\text{E}}$$

où $V_{\text{E}}$ est le **volume à l'équivalence** (volume de titrant versé pour l'atteindre)
et $C_{\text{B}}$ la concentration du titrant. On en tire la concentration cherchée :

$$C_{\text{A}} = \frac{n_{\text{A}}}{V_{\text{A}}} = \frac{C_{\text{B}}\,V_{\text{E}}}{V_{\text{A}}}\quad(\text{cas } a=b=1)$$

> **Exemple.** On titre $V_{\text{A}} = 10{,}0\ \text{mL}$ d'une solution d'acide par une base
> à $C_{\text{B}} = 0{,}10\ \text{mol·L}^{-1}$ (réaction $1$ pour $1$). L'équivalence est
> atteinte pour $V_{\text{E}} = 12{,}5\ \text{mL}$.
> $n_{\text{A}} = C_{\text{B}} V_{\text{E}} = 0{,}10 \times 12{,}5\times 10^{-3} = 1{,}25\times 10^{-3}\ \text{mol}$,
> puis $C_{\text{A}} = \dfrac{1{,}25\times 10^{-3}}{10{,}0\times 10^{-3}} = 0{,}125\ \text{mol·L}^{-1}$.

> ⚠️ **Convertis les volumes en litres** (ou garde des mL des deux côtés de manière
> cohérente) : un $\text{mL}$ oublié fait un facteur $1000$. Et n'utilise $n_A = C_B V_E$ que
> si les coefficients valent $1$ ; sinon, passe par la relation encadrée avec $a$ et $b$.

---

## 7. Tableau récapitulatif

| | |
|---|---|
| Densité | $d = \dfrac{\rho}{\rho_{\text{eau}}}$, **sans unité** ; $\rho_{\text{eau}} = 1{,}00\ \text{g·mL}^{-1}$ |
| Fusion | pure = nette ; impure = basse et étalée |
| Couleur perçue | **complémentaire** de la couleur absorbée à $\lambda_{\max}$ |
| IR | bandes = **groupes** : O–H large ($\sim 3300$), C=O fine ($\sim 1700$) en $\text{cm}^{-1}$ |
| Beer-Lambert | $A = \varepsilon\,\ell\,c$ — $A$ sans unité, $\varepsilon$ en $\text{L·mol}^{-1}\text{·cm}^{-1}$, $\ell$ en $\text{cm}$, $c$ en $\text{mol·L}^{-1}$ |
| Étalonnage | droite $A=f(c)$ par l'origine, pente $k=\varepsilon\ell$ ; $c_x = A_x/k$ |
| Titrage | à l'équivalence $\dfrac{n_A}{a}=\dfrac{n_B}{b}$ ; si $1$–$1$ : $C_A = \dfrac{C_B V_E}{V_A}$ |

---

## 8. Les erreurs qui coûtent des points

1. **Donner une unité à $A$ ou à $d$.** L'absorbance et la densité sont **sans unité**.
   Écrire « $A = 0{,}52$ » et « $d = 0{,}88$ », jamais « $0{,}52$ unités ».
2. **Se tromper d'unité pour $\varepsilon$.** C'est $\text{L·mol}^{-1}\text{·cm}^{-1}$ : c'est
   ce qui fait tomber toutes les unités de $A = \varepsilon\ell c$.
3. **Confondre couleur absorbée et couleur perçue.** Elles sont **complémentaires** : une
   solution bleue absorbe dans le rouge/orangé, pas dans le bleu.
4. **Oublier de convertir les mL en L** dans un titrage ou un calcul de concentration :
   $V_E = 12{,}5\ \text{mL} = 12{,}5\times 10^{-3}\ \text{L}$. Un facteur $1000$ sinon.
5. **Utiliser $n_A = C_B V_E$ quand les coefficients ne valent pas $1$.** Repars de
   $\frac{n_A}{a} = \frac{n_B}{b}$.
6. **Mesurer l'inconnue avec une absorbance hors gamme** (trop concentrée, hors du domaine
   linéaire) : il faut **diluer** avant, puis corriger par le facteur de dilution.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « Sciences physiques et chimiques en laboratoire » (SPCL),
série STL, classe de première — BO du 22 janvier 2019.
Extrait : docs/programme-stl-spcl.txt, section « Analyses physico-chimiques :
spectroscopies et dosages (1re) » (ligne 34), qui liste :
  - Tests d'identification ; propriétés physiques des espèces.
  - Spectroscopies UV-visible et infrarouge (identification de groupes).
  - Dosage par étalonnage spectrophotométrique (loi de Beer-Lambert).
  - Dosage direct par titrage.
Le programme de référence est très synthétique ; le contenu détaillé (valeurs de bandes IR,
étoile des couleurs, protocole d'étalonnage) a été rédigé à partir des attendus usuels du
niveau. À CONFRONTER AU PDF/BO OFFICIEL par un professeur avant publication (le .txt fourni
ne donne que les intitulés, pas le détail des capacités exigibles).

⚠️ POINTS À CONFRONTER AU RELECTEUR :
- Les valeurs de bandes IR (tableau §3) sont des ordres de grandeur usuels ; vérifier
  qu'elles correspondent à la table de référence utilisée en STL SPCL.
- Le coefficient ε est-il nommé « coefficient d'absorption molaire » ou « absorptivité
  molaire » dans le référentiel STL ? Unité L·mol⁻¹·cm⁻¹ retenue.
- Le titrage : le programme dit « dosage direct par titrage » sans préciser suivi (coloré /
  pH-métrique / conductimétrique). J'ai présenté l'équivalence de façon générale sans fixer
  le type de suivi. À valider.
- Faut-il traiter le titrage colorimétrique par un exemple d'oxydoréduction (permanganate)
  plutôt qu'acide-base ? Choix acide-base fait pour rester sur du 1–1 simple.
- λmax de CuSO4 (~800 nm, proche IR) : exemple correct mais à la limite du visible ;
  un relecteur préférera peut-être un exemple pleinement visible.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
