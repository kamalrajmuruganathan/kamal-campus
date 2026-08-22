---
id: 1stl-spcl-mesure-incertitudes-labo
titre: "Mesure et incertitudes en laboratoire"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 15
prerequis:
  - Grandeurs, unités du Système international et conversions (Seconde)
  - Chiffres significatifs et notation scientifique (Seconde)
  - Moyenne d'une série de valeurs (Seconde)
statut: brouillon
relu_par: null
---

# Mesure et incertitudes en laboratoire

> Aucune mesure n'est parfaite. Recommence dix fois la même pesée : tu n'obtiens
> jamais exactement le même nombre. Le métier de laboratoire, ce n'est pas de faire
> disparaître ce doute — c'est de le **chiffrer**. Une mesure sérieuse s'écrit toujours
> `valeur ± incertitude`, avec son unité. Ce chapitre t'apprend à calculer cette
> incertitude et à présenter un résultat correctement.

---

## 1. Mesurer, c'est estimer une valeur qu'on ne connaîtra jamais exactement

La grandeur qu'on cherche à mesurer s'appelle le **mesurande** (une masse, un volume,
une concentration…). Sa **valeur vraie** existe, mais elle nous est **inaccessible** :
tout instrument, toute manipulation introduisent un écart.

- L'**erreur de mesure** est la différence (inconnue) entre la valeur mesurée et la
  valeur vraie.
- L'**incertitude** ne dit pas de combien on s'est trompé (on l'ignore) : elle
  **estime l'étendue** dans laquelle la valeur vraie a de bonnes chances de se trouver.

> **L'idée clé.** On ne corrige pas une mesure en supprimant l'erreur : on l'**encadre**.
> Le résultat n'est pas un nombre, c'est un **intervalle**.

---

## 2. Sources d'erreurs et variabilité

Quand on répète une mesure, les valeurs se **dispersent**. Cette variabilité a deux
origines de natures différentes.

| Type d'erreur | Comment elle se manifeste | Exemples au labo |
|---|---|---|
| **Aléatoire** | change de façon **imprévisible** à chaque essai ; les valeurs se dispersent **autour** de la vraie | lecture d'un ménisque, temps de réaction au chronomètre, fluctuations de température |
| **Systématique** | **décale** toujours la mesure dans le **même sens** | balance mal tarée, pipette mal étalonnée, verrerie mal lue toujours du même côté |

> **Exemple.** Une balance qui affiche $0{,}05\ \mathrm{g}$ à vide ajoute $0{,}05\ \mathrm{g}$
> à **chaque** pesée : c'est une erreur **systématique**. Le tremblement de la main qui
> arrête un chronomètre trop tôt ou trop tard, tantôt dans un sens tantôt dans l'autre,
> est une erreur **aléatoire**.

> ⚠️ **Répéter la mesure** réduit l'effet des erreurs **aléatoires** (elles se
> compensent en moyenne), mais **ne corrige jamais** une erreur **systématique** : on
> aurait beau moyenner mille pesées, la balance mal tarée reste fausse de $0{,}05\ \mathrm{g}$.

---

## 3. Justesse et fidélité

Ces deux mots décrivent deux qualités **distinctes** d'un instrument ou d'un protocole.
L'image des tirs sur une cible est la plus parlante.

| Qualité | Ce qu'elle mesure | Défaut associé |
|---|---|---|
| **Justesse** | la moyenne des mesures est-elle **proche de la valeur vraie** ? | une erreur **systématique** dégrade la justesse |
| **Fidélité** | les mesures répétées sont-elles **peu dispersées** entre elles ? | une erreur **aléatoire** dégrade la fidélité |

> **La cible.** *Juste et fidèle* : les tirs sont **groupés au centre**. *Fidèle mais
> pas juste* : tirs **groupés**, mais **tous à côté** du centre (erreur systématique).
> *Juste mais pas fidèle* : tirs **dispersés**, mais centrés **en moyenne** sur la cible.

> ⚠️ Un instrument peut être **très fidèle** (résultats très répétables) et pourtant
> **faux** : la fidélité ne garantit pas la justesse. Ne confonds pas « je retrouve
> toujours le même nombre » avec « ce nombre est le bon ».

---

## 4. L'incertitude-type : la grandeur qui chiffre le doute

L'**incertitude-type**, notée $u(x)$, est le nombre qui **quantifie la dispersion**
d'une mesure. Elle a **la même unité** que la grandeur mesurée. On l'évalue de deux
façons selon les informations dont on dispose.

- **Type A** : par une **analyse statistique** d'une série de mesures répétées.
- **Type B** : par toute **autre information** (notice de l'appareil, résolution,
  tolérance de la verrerie) quand on ne dispose que d'**une seule** mesure.

---

## 5. Incertitude-type de type A — la dispersion d'une série

On répète la mesure $n$ fois et on obtient les valeurs $x_1, x_2, \dots, x_n$.

**Étape 1 — la moyenne**, meilleure estimation du mesurande :
$$\boxed{\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n}}$$

**Étape 2 — l'écart-type expérimental** $s$, qui mesure la dispersion des valeurs
autour de la moyenne (touche $\sigma_{n-1}$ ou $s_x$ de la calculatrice) :
$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}\left(x_i - \bar{x}\right)^2}$$

**Étape 3 — l'incertitude-type de type A** sur la moyenne :
$$\boxed{u(\bar{x}) = \frac{s}{\sqrt{n}}}$$

> **Exemple.** On mesure $5$ fois une durée (en $\mathrm{s}$) :
> $20{,}1$ ; $20{,}4$ ; $19{,}8$ ; $20{,}3$ ; $20{,}0$.
> Moyenne : $\bar{x} = \dfrac{100{,}6}{5} = 20{,}12\ \mathrm{s}$.
> Écart-type (calculatrice) : $s = 0{,}24\ \mathrm{s}$.
> Incertitude-type : $u(\bar{x}) = \dfrac{0{,}24}{\sqrt{5}} = 0{,}11\ \mathrm{s}$.
> On écrira $t = (20{,}1 \pm 0{,}1)\ \mathrm{s}$ (voir §8-9 pour l'arrondi).

> ⚠️ **Divise par $\sqrt{n}$, pas par $n$**, et prends bien l'écart-type en $n-1$
> (touche $\sigma_{n-1}$), pas celui en $n$. Plus on fait de mesures, plus $u(\bar{x})$
> **diminue** : mesurer davantage resserre l'intervalle autour de la moyenne.

---

## 6. Incertitude-type de type B — une seule mesure

Quand on ne dispose que d'**une** mesure, on estime l'incertitude à partir des
**caractéristiques de l'instrument**. On modélise le doute par une répartition
uniforme, ce qui donne un facteur $\sqrt{3}$.

| Origine de l'incertitude | Formule | Exemple |
|---|---|---|
| **Résolution / graduation** (plus petite division lisible, ou dernier digit affiché) | $u = \dfrac{\text{graduation}}{\sqrt{3}}$ | burette au $1/10$ de mL |
| **Tolérance** annoncée par le fabricant (verrerie jaugée, appareil de classe) | $u = \dfrac{\text{tolérance}}{\sqrt{3}}$ | pipette jaugée $\pm 0{,}03\ \mathrm{mL}$ |

$$\boxed{u = \frac{\text{graduation}}{\sqrt{3}} \qquad\text{ou}\qquad u = \frac{\text{tolérance}}{\sqrt{3}}}$$

> **Exemple 1 — résolution.** Une burette est graduée tous les $0{,}1\ \mathrm{mL}$.
> $u = \dfrac{0{,}1}{\sqrt{3}} = 0{,}058 \approx 0{,}06\ \mathrm{mL}$. Une lecture de
> $14{,}20\ \mathrm{mL}$ s'écrit $V = (14{,}20 \pm 0{,}06)\ \mathrm{mL}$.

> **Exemple 2 — tolérance.** Une pipette jaugée porte l'indication $20{,}00\ \mathrm{mL}
> \pm 0{,}03\ \mathrm{mL}$. $u = \dfrac{0{,}03}{\sqrt{3}} = 0{,}017 \approx 0{,}02\ \mathrm{mL}$,
> d'où $V = (20{,}00 \pm 0{,}02)\ \mathrm{mL}$.

> ⚠️ La **tolérance** est déjà une demi-largeur ($\pm$) : on divise directement par
> $\sqrt{3}$, **sans** la couper en deux. Et attention aux unités : une graduation lue
> en $\mathrm{mL}$ donne une incertitude en $\mathrm{mL}$.

---

## 7. Incertitude-type composée — quand le résultat vient d'un calcul

Le plus souvent, la grandeur cherchée se **calcule** à partir de plusieurs mesures, qui
portent chacune leur incertitude. On les **combine** — jamais en les additionnant
simplement, mais **en quadrature** (racine de la somme des carrés).

**Cas d'une somme ou d'une différence** $y = a + b$ ou $y = a - b$ :
$$\boxed{u(y) = \sqrt{u(a)^2 + u(b)^2}}$$

**Cas d'un produit ou d'un quotient** $y = \dfrac{a \times b}{c}$ : ce sont les
incertitudes **relatives** qui se combinent :
$$\boxed{\frac{u(y)}{|y|} = \sqrt{\left(\frac{u(a)}{a}\right)^2 + \left(\frac{u(b)}{b}\right)^2 + \left(\frac{u(c)}{c}\right)^2}}$$

> **Exemple — quotient.** Masse volumique $\rho = \dfrac{m}{V}$ avec
> $m = (24{,}6 \pm 0{,}1)\ \mathrm{g}$ et $V = (20{,}0 \pm 0{,}5)\ \mathrm{mL}$.
> Valeur : $\rho = \dfrac{24{,}6}{20{,}0} = 1{,}23\ \mathrm{g\cdot mL^{-1}}$.
> Incertitudes relatives : $\dfrac{u(m)}{m} = \dfrac{0{,}1}{24{,}6} = 0{,}0041$ et
> $\dfrac{u(V)}{V} = \dfrac{0{,}5}{20{,}0} = 0{,}025$.
> $\dfrac{u(\rho)}{\rho} = \sqrt{0{,}0041^2 + 0{,}025^2} = 0{,}025$, donc
> $u(\rho) = 0{,}025 \times 1{,}23 = 0{,}03\ \mathrm{g\cdot mL^{-1}}$.
> Résultat : $\rho = (1{,}23 \pm 0{,}03)\ \mathrm{g\cdot mL^{-1}}$.

> **Exemple — somme.** $L = L_1 + L_2$ avec $L_1 = (12{,}3 \pm 0{,}1)\ \mathrm{cm}$ et
> $L_2 = (8{,}5 \pm 0{,}1)\ \mathrm{cm}$ : $L = 20{,}8\ \mathrm{cm}$ et
> $u(L) = \sqrt{0{,}1^2 + 0{,}1^2} = 0{,}14 \approx 0{,}2\ \mathrm{cm}$.

> ⚠️ **Sommes/différences** → on combine les incertitudes **absolues** ($u$).
> **Produits/quotients** → on combine les incertitudes **relatives** ($u/x$). Confondre
> les deux est l'erreur la plus fréquente du chapitre. Et $\sqrt{u_a^2 + u_b^2}$ est
> **toujours plus petit** que $u_a + u_b$ : ne fais pas la somme brute.

---

## 8. Chiffres significatifs

Les **chiffres significatifs** (c.s.) d'un résultat sont les chiffres réellement porteurs
d'information, à partir du premier chiffre non nul.

| Écriture | Nombre de c.s. | Remarque |
|---|---|---|
| $2{,}45\ \mathrm{g}$ | $3$ | tous comptent |
| $0{,}0130\ \mathrm{mol}$ | $3$ | les zéros de tête ne comptent pas ; le zéro final, si |
| $1{,}20 \times 10^{2}\ \mathrm{mL}$ | $3$ | la notation scientifique lève l'ambiguïté |

**Règle de calcul.** Le résultat d'un **produit ou d'un quotient** ne peut pas avoir
plus de chiffres significatifs que la donnée qui en a le **moins**. Pour une **somme ou
différence**, on aligne sur le **dernier rang décimal** commun.

> **Exemple.** $\dfrac{12{,}0}{7}$ : la donnée $12{,}0$ a $3$ c.s., $7$ en a $1$… mais
> $7$ est ici un nombre entier exact (un coefficient, un nombre de mesures) : il ne
> limite pas. Reste $3$ c.s. : $\dfrac{12{,}0}{7} = 1{,}71$.

> ⚠️ Une calculatrice affiche $10$ chiffres : $99\ \%$ n'ont **aucun sens physique**.
> Écrire $\rho = 1{,}230000\ \mathrm{g\cdot mL^{-1}}$ prétend une précision qu'on n'a pas.

---

## 9. Exprimer le résultat : valeur, incertitude, unité

C'est l'aboutissement de tout le chapitre. Trois règles, dans l'ordre.

1. **Arrondir l'incertitude** à **1 chiffre significatif** (2 c.s. tolérés si le premier
   est un $1$), **en arrondissant vers le haut** (par excès) pour ne pas sous-estimer le
   doute.
2. **Arrondir la valeur** au **même rang décimal** que l'incertitude — ni plus, ni moins.
3. **Écrire** le résultat sous la forme, avec l'unité **hors parenthèses** :
$$\boxed{x = (\,\bar{x} \pm u(x)\,)\ \text{unité}}$$

> **Exemple.** Un calcul donne $\bar{x} = 24{,}6172\ \mathrm{g}$ et
> $u(x) = 0{,}0312\ \mathrm{g}$. On arrondit d'abord $u \approx 0{,}04\ \mathrm{g}$
> ($1$ c.s., par excès), puis la valeur au **centième** : $\bar{x} \approx 24{,}62\ \mathrm{g}$.
> Résultat : $m = (24{,}62 \pm 0{,}04)\ \mathrm{g}$.

> **Contre-exemple à ne pas écrire.** $m = (24{,}6172 \pm 0{,}04)\ \mathrm{g}$ : la valeur
> a des chiffres au-delà du rang de l'incertitude, qui ne veulent rien dire. Ou pire,
> $m = (24{,}62 \pm 0{,}0312)\ \mathrm{g}$ : incertitude non arrondie.

> **Lecture.** $m = (24{,}62 \pm 0{,}04)\ \mathrm{g}$ signifie : la valeur vraie est très
> probablement comprise entre $24{,}58$ et $24{,}66\ \mathrm{g}$.

---

## 10. À retenir absolument

| | |
|---|---|
| Mesurande / valeur vraie | la grandeur cherchée ; sa valeur exacte reste inaccessible |
| Erreur aléatoire | imprévisible, se disperse ; réduite en **répétant** |
| Erreur systématique | décalage constant ; **non** corrigée par la répétition |
| Justesse | moyenne proche de la valeur vraie |
| Fidélité | mesures peu dispersées entre elles |
| Type A | $\bar{x} = \dfrac{\sum x_i}{n}$ ; $u(\bar{x}) = \dfrac{s}{\sqrt{n}}$ |
| Type B | $u = \dfrac{\text{graduation}}{\sqrt{3}}$ ou $\dfrac{\text{tolérance}}{\sqrt{3}}$ |
| Composée (somme) | $u(y) = \sqrt{u(a)^2 + u(b)^2}$ |
| Composée (produit/quotient) | $\dfrac{u(y)}{|y|} = \sqrt{\left(\dfrac{u(a)}{a}\right)^2 + \left(\dfrac{u(b)}{b}\right)^2}$ |
| Résultat final | $x = (\bar{x} \pm u)\ \text{unité}$ ; $u$ à $1$ c.s. par excès ; $\bar{x}$ au même rang |

---

## 11. Les erreurs qui coûtent des points

1. **Oublier l'unité** de l'incertitude, ou la mettre à l'intérieur des parenthèses au
   lieu de la placer une seule fois **après** : on écrit $(20{,}00 \pm 0{,}02)\ \mathrm{mL}$.
2. **Diviser l'écart-type par $n$** au lieu de $\sqrt{n}$ dans une incertitude de type A —
   ou utiliser $\sigma_n$ au lieu de $\sigma_{n-1}$.
3. **Additionner brutalement** les incertitudes ($u_a + u_b$) au lieu de les combiner
   **en quadrature** ($\sqrt{u_a^2 + u_b^2}$).
4. **Combiner des incertitudes absolues dans un produit/quotient** : dans ce cas ce sont
   les incertitudes **relatives** $u/x$ qui s'ajoutent (en quadrature), jamais les $u$.
5. **Garder tous les chiffres de la calculatrice** : l'incertitude s'arrondit à $1$
   chiffre significatif, la valeur au **même rang** décimal.
6. **Croire qu'un instrument fidèle est juste** : des mesures bien groupées peuvent être
   toutes fausses (erreur systématique).
7. **Confondre les unités de graduation** : une burette au $0{,}1\ \mathrm{mL}$ donne
   $u$ en $\mathrm{mL}$, pas en $\mathrm{L}$ ni en gouttes.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SCIENCES PHYSIQUES ET CHIMIQUES EN LABORATOIRE (SPCL),
enseignement de spécialité de la série STL, classe de première.
Fichier : docs/programme-stl-spcl.txt, section « Mesure et incertitudes en laboratoire
(1re) » :
  - Sources d'erreurs et variabilité ; justesse et fidélité.
  - Évaluation des incertitudes-types (type A statistique, type B).
  - Expression d'un résultat de mesure avec son incertitude et ses chiffres significatifs.
Le fichier renvoie aux PDF officiels education.gouv.fr (Première SPCL). Le fichier source
cite le BO spécial n°8 du 25 juillet 2019 ET le BO spécial n°1 du 22 janvier 2019.
Extraits via WebFetch, À CONFRONTER AUX PDF OFFICIELS avant publication.

Champ « programme » de l'en-tête : renseigné à l'identique de la consigne de production
(« BO du 22 janvier 2019 — SPCL, série STL, classe de première »).
⚠️ À FAIRE VÉRIFIER AU RELECTEUR : l'intitulé exact du BO à afficher (22 janvier 2019 vs
25 juillet 2019) — même remarque que pour le chapitre « syntheses-extraction-purification ».

POINTS À CONFRONTER AU RELECTEUR / CONVENTIONS DE MÉTROLOGIE :
- CONVENTION TYPE B (POINT LE PLUS SENSIBLE). La consigne de production impose
  explicitement les formules u = graduation/√3 et u = tolérance/√3, retenues telles
  quelles dans la fiche. ATTENTION : les conventions varient selon les manuels/référentiels.
  Pour une RÉSOLUTION (demi-largeur = graduation/2), la loi uniforme rigoureuse donne
  plutôt u = graduation/(2√3) = graduation/√12. La formule u = graduation/√3 retenue ici
  suppose que « graduation » désigne la demi-largeur de l'intervalle de doute (loi
  rectangulaire de demi-largeur = graduation). À FAIRE TRANCHER par le relecteur selon le
  référentiel STL retenu par l'établissement / le PDF officiel. Les exemples chiffrés
  (burette 0,1 mL → u ≈ 0,06 mL) suivent la convention de la consigne.
- Pour la TOLÉRANCE (verrerie jaugée ± t), u = t/√3 fait l'hypothèse d'une loi uniforme de
  demi-largeur t : convention standard et cohérente avec la consigne.
- TYPE A : u(x̄) = s/√n avec s = écart-type expérimental (σ_{n-1}). Convention GUM/lycée
  standard. L'exemple (5 mesures, s ≈ 0,24 s, u ≈ 0,11 s) a été recalculé à la main :
  moyenne 20,12 s ; Σ(écarts²) = 0,228 ; s = √(0,228/4) = 0,239 s ; u = 0,239/√5 = 0,107 s.
- INCERTITUDE COMPOSÉE : formules de propagation en quadrature (somme → absolues ;
  produit/quotient → relatives). Présentées « formule fournie » conformément à la
  consigne ; au niveau première STL elles sont données, non démontrées.
- Facteur d'élargissement / intervalle de confiance : volontairement NON abordé (hors
  programme de première ; « valeur ± u » = incertitude-type, k=1). La phrase de lecture au
  §9 (« très probablement entre… ») reste qualitative pour cette raison. À valider.
- Arrondi de l'incertitude à 1 c.s. PAR EXCÈS et valeur au même rang : convention
  pédagogique répandue ; certains référentiels tolèrent 2 c.s. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
