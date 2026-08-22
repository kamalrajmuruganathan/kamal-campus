---
id: tale-stl-spcl-syntheses-mecanismes
titre: "Synthèses chimiques et mécanismes réactionnels"
voie: technologique
niveau: terminale-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — SPCL, série STL, classe terminale"
duree_lecture_min: 22
prerequis:
  - Synthèses chimiques : extraction et purification (Première STL)
  - Réactif limitant, rendement, quantité de matière (Première STL)
  - Écriture et équilibrage d'une équation de réaction (Seconde / Première)
  - Représentation de Lewis et liaison covalente (Première)
statut: brouillon
relu_par: null
---

# Synthèses chimiques et mécanismes réactionnels

> En Première, tu savais **faire** une synthèse : mélanger, chauffer à reflux, isoler,
> purifier, calculer un rendement. En Terminale, on te demande de la **piloter** et de la
> **comprendre**. Piloter, c'est jouer sur les conditions (température, catalyseur, temps)
> pour obtenir *le bon produit*, *vite*, *en quantité*. Comprendre, c'est descendre à
> l'échelle des molécules : où les liaisons se cassent, où elles se forment, et pourquoi.
> Deux échelles, un seul chapitre : le **macroscopique** (ce qu'on mesure au labo) et le
> **microscopique** (le **mécanisme** qui l'explique).

---

## 1. Trois façons de juger une synthèse

Fabriquer un produit, ce n'est pas seulement obtenir une masse en fin de TP. On évalue une
synthèse selon trois critères qu'il ne faut pas confondre.

| Grandeur | Question posée | Nature |
|---|---|---|
| **Rendement** $\eta$ | *En ai-je fait beaucoup ?* | rapport de quantités, sans unité |
| **Sélectivité** | *Ai-je fait le bon produit plutôt qu'un autre ?* | qualitatif / rapport de quantités |
| **Chimiosélectivité** | *N'ai-je fait réagir que le bon groupe caractéristique ?* | cas particulier de sélectivité |

### Le rendement — rappel de Première

Le **rendement** compare la quantité de produit **réellement obtenue** à la quantité
**maximale** attendue si la réaction était totale et sans perte, calculée à partir du
**réactif limitant** :

$$\boxed{\eta = \frac{n_{\text{obtenu}}}{n_{\text{théorique}}}}$$

Il est **sans unité**, compris entre $0$ et $1$, souvent exprimé en pourcentage.

> **Exemple.** On attend au maximum $n_{\text{théorique}} = 0{,}20\ \mathrm{mol}$ de produit
> et on en récupère $n_{\text{obtenu}} = 0{,}15\ \mathrm{mol}$ :
> $\eta = \dfrac{0{,}15}{0{,}20} = 0{,}75 = 75\ \%$.

### La sélectivité

Une même transformation peut donner **plusieurs produits** possibles. Une réaction est
**sélective** quand elle conduit **majoritairement à un seul** d'entre eux. On peut la
chiffrer par la proportion du produit voulu parmi l'ensemble des produits formés.

> **Exemple.** Une réaction qui pourrait donner un produit A ou un produit B fournit en
> pratique $95\ \%$ de A : elle est **très sélective en faveur de A**. Un catalyseur ou un
> changement de température peut, à lui seul, faire basculer cette sélectivité.

### La chimiosélectivité

Quand une molécule porte **plusieurs groupes caractéristiques** susceptibles de réagir, un
réactif **chimiosélectif** ne transforme **que l'un d'eux** et laisse les autres intacts.

> **Exemple.** Une molécule porte à la fois une double liaison $\mathrm{C=C}$ et un groupe
> carbonyle $\mathrm{C=O}$. Un réducteur **chimiosélectif** peut réduire uniquement le
> $\mathrm{C=O}$ sans toucher au $\mathrm{C=C}$. Choisir le bon réactif, c'est choisir *ce
> qui va réagir*.

> ⚠️ Ne confonds pas **rendement** (combien ?) et **sélectivité** (lequel ?). On peut avoir
> un excellent rendement en un produit **non désiré** : c'est une synthèse ratée malgré un
> $\eta$ élevé.

---

## 2. Contrôler les conditions expérimentales

Le chimiste dispose de plusieurs **leviers** pour orienter une synthèse — améliorer le
rendement, gagner en sélectivité, ou simplement aller plus vite.

| Levier | Effet principal |
|---|---|
| **Température** | modifie la **vitesse** et souvent la **sélectivité** (quel produit se forme) |
| **Concentration des réactifs** | augmente la **vitesse** ; un **excès** d'un réactif déplace la transformation |
| **Solvant** | dissout les réactifs, peut favoriser un chemin réactionnel plutôt qu'un autre |
| **Catalyseur** | **accélère** la réaction et peut **orienter** la sélectivité |
| **Durée / suivi cinétique** | on arrête quand le produit voulu est maximal |

> **Exemple.** Chauffer accélère presque toujours une synthèse, mais peut aussi favoriser une
> réaction secondaire et **dégrader la sélectivité** : la bonne température est un compromis,
> pas « le plus chaud possible ».

> ⚠️ Ces leviers agissent sur la **cinétique** (la vitesse) et sur la **sélectivité** (le
> produit obtenu). À ce niveau, on ne discute **pas** de déplacement d'équilibre : on
> raisonne « conditions → vitesse et produit majoritaire ».

---

## 3. La catalyse

Un **catalyseur** est une espèce qui **accélère** une réaction **sans figurer dans le bilan**
de l'équation : il est **régénéré** en fin de transformation, donc **consommé puis restitué**.
On peut en mettre une petite quantité (il n'est pas un réactif).

$$\boxed{\text{Un catalyseur accélère la réaction et n'apparaît pas dans l'équation bilan.}}$$

Il agit en ouvrant un **nouveau chemin réactionnel** plus facile, d'**énergie d'activation
plus faible** : davantage de chocs entre molécules deviennent efficaces, la réaction va donc
plus vite.

### Trois types de catalyse

| Type | Catalyseur et réactifs | Exemple |
|---|---|---|
| **Homogène** | **même phase** (tout en solution) | ion $\mathrm{H^+}$ catalysant une estérification |
| **Hétérogène** | **phases différentes** (catalyseur solide, réactifs liquides ou gazeux) | platine solide dans un pot catalytique |
| **Enzymatique** | catalyseur = **enzyme** (biologique), très **sélective** | catalase décomposant l'eau oxygénée |

> **Exemple.** L'eau oxygénée $\mathrm{H_2O_2}$ se décompose lentement. En présence d'ions
> $\mathrm{Fe^{3+}}$ (catalyse homogène) ou de platine (catalyse hétérogène), la
> décomposition devient **très rapide** — mais à la fin, le catalyseur est toujours là,
> intact.

> ⚠️ Un catalyseur **change la vitesse**, jamais le **rendement final** d'une réaction totale
> ni la nature des produits d'une réaction donnée : il fait arriver **plus vite** au même
> point. En revanche il peut **choisir** entre plusieurs réactions possibles (sélectivité).

---

## 4. Cinétique appliquée : la vitesse d'une transformation

Toutes les réactions ne vont pas à la même allure. La **cinétique chimique** étudie la
**vitesse** d'évolution d'un système.

### Les facteurs cinétiques

Un **facteur cinétique** est un paramètre qui **modifie la vitesse** d'une réaction. Les deux
principaux :

- la **température** : plus elle est élevée, plus la réaction est **rapide** (les molécules
  sont plus agitées, les chocs plus fréquents et plus énergétiques) ;
- la **concentration des réactifs** : plus elle est grande, plus les chocs sont fréquents,
  plus la réaction est **rapide**.

Le **catalyseur** est un troisième moyen d'accélérer, sans être consommé (partie 3).

> **Exemple.** Une même réaction menée à $60\ \mathrm{°C}$ est bien plus rapide qu'à
> $20\ \mathrm{°C}$. À l'inverse, refroidir un mélange (bain de glace) **ralentit** ou
> **bloque** la transformation — c'est la **trempe**, qui sert à *arrêter* une réaction pour
> l'analyser.

### Suivi de l'avancement et temps de demi-réaction

On suit une transformation en mesurant, au cours du temps, une grandeur liée à
l'avancement (concentration d'un réactif ou d'un produit, absorbance, conductivité,
volume de gaz…). On trace l'évolution et on en tire des repères utiles.

Le **temps de demi-réaction** $t_{1/2}$ est la **durée au bout de laquelle l'avancement
atteint la moitié de sa valeur finale**. C'est un indicateur commode de la « rapidité » :
plus $t_{1/2}$ est **court**, plus la réaction est **rapide**.

> **Exemple.** Si la concentration finale d'un produit vaut $0{,}40\ \mathrm{mol\cdot L^{-1}}$,
> $t_{1/2}$ est le temps mis pour atteindre $0{,}20\ \mathrm{mol\cdot L^{-1}}$. Un catalyseur ou
> une hausse de température **raccourcit** $t_{1/2}$.

> ⚠️ **Unités et durées.** Une vitesse et un temps de demi-réaction se lisent sur un graphe :
> vérifie l'**axe des temps** ($\mathrm{s}$ ? $\mathrm{min}$ ?) avant de conclure. $1\ \mathrm{min}
> = 60\ \mathrm{s}$, et une concentration en $\mathrm{mol\cdot L^{-1}}$ suppose un volume en
> **litres**, pas en $\mathrm{mL}$.

---

## 5. Passer à l'échelle des molécules : le mécanisme

L'équation bilan dit **ce qui entre et ce qui sort**, pas **comment**. Le **mécanisme
réactionnel** décrit le chemin réel, en une suite d'**étapes élémentaires**, en montrant où
les liaisons se **rompent** et se **forment**.

### La liaison covalente et les doublets d'électrons

Une **liaison covalente** est un **doublet d'électrons partagé** entre deux atomes : c'est un
**doublet liant**. Un atome peut aussi porter des **doublets non liants** (paires d'électrons
qui ne servent à aucune liaison), visibles sur la **représentation de Lewis**.

> **Exemple.** Dans l'eau $\mathrm{H_2O}$, l'oxygène engage **deux doublets liants** (les deux
> liaisons $\mathrm{O-H}$) et porte **deux doublets non liants**. Ces doublets non liants sont
> les électrons « disponibles » qui rendront l'oxygène réactif.

### Sites donneurs et sites accepteurs de doublet d'électrons

Une réaction, à l'échelle microscopique, c'est la **rencontre d'un site riche en électrons et
d'un site pauvre en électrons**.

- Un **site donneur** de doublet est **riche en électrons** : doublet non liant, ou liaison
  double/multiple, ou atome/charge négative. Il **apporte** le doublet.
- Un **site accepteur** de doublet est **pauvre en électrons** : atome porteur d'une charge
  positive, ou lié à un atome plus **électronégatif** qui l'appauvrit. Il **reçoit** le
  doublet.

Comment les repérer ? Par l'**électronégativité** et les **charges**. Dans une liaison
$\mathrm{C^{\,\delta+}\!-\!Cl^{\,\delta-}}$, le chlore, plus électronégatif, attire les
électrons : le carbone devient un **site accepteur** ($\delta+$), le chlore un site plutôt
**donneur**.

> **Exemple.** Dans un ion hydroxyde $\mathrm{HO^-}$, l'oxygène chargé négativement est un
> **site donneur**. Dans un dérivé halogéné $\mathrm{R\!-\!Cl}$, le carbone porteur du
> $\delta+$ est un **site accepteur**. Ces deux-là vont réagir ensemble.

### La flèche courbe

Le mouvement d'un doublet d'électrons se représente par une **flèche courbe** : elle part du
**site donneur** (le doublet qui se déplace) et pointe vers le **site accepteur** (là où la
nouvelle liaison se forme).

$$\boxed{\text{Flèche courbe : du site donneur (riche) vers le site accepteur (pauvre).}}$$

> **Exemple.** Quand $\mathrm{HO^-}$ attaque le carbone $\delta+$ de $\mathrm{R\!-\!Cl}$, une
> flèche part du doublet non liant de l'oxygène **vers** le carbone (formation de la liaison
> $\mathrm{O\!-\!C}$) et une seconde flèche part de la liaison $\mathrm{C\!-\!Cl}$ **vers** le
> chlore (rupture, départ de $\mathrm{Cl^-}$).

> ⚠️ La flèche courbe représente le déplacement d'un **doublet d'électrons**, pas d'un atome
> ni d'une charge. Elle part **toujours** d'une zone riche (doublet ou liaison) et va **vers**
> une zone pauvre — jamais l'inverse.

### L'étape élémentaire

Une **étape élémentaire** est une transformation **réalisée en un seul acte**, au cours d'un
**unique choc** ou réarrangement, à l'échelle des molécules. Un mécanisme est une **succession
d'étapes élémentaires** ; leur bilan redonne l'équation de la réaction. Chaque étape se
décrit avec des **flèches courbes**.

> **Exemple.** Un mécanisme en deux étapes : d'abord le départ de $\mathrm{Cl^-}$ (rupture),
> puis l'arrivée de $\mathrm{HO^-}$ (formation). L'addition des deux étapes redonne le bilan
> $\mathrm{R\!-\!Cl} + \mathrm{HO^-} \rightarrow \mathrm{R\!-\!OH} + \mathrm{Cl^-}$.

---

## 6. Les trois grands types de transformation en chimie organique

À partir des flèches courbes, on classe les étapes selon **ce qui arrive au squelette
carboné**.

| Type | Ce qui se passe | Repère |
|---|---|---|
| **Substitution** | un atome ou groupe est **remplacé** par un autre | un groupe part, un autre prend sa place |
| **Addition** | deux fragments **s'ajoutent** sur une **liaison multiple** qui s'ouvre | une double liaison $\mathrm{C=C}$ ou $\mathrm{C=O}$ disparaît |
| **Élimination** | on **arrache** deux atomes/groupes voisins, **créant** une liaison multiple | une double liaison **apparaît** |

- **Substitution :** $\mathrm{R\!-\!Cl} + \mathrm{HO^-} \rightarrow \mathrm{R\!-\!OH} +
  \mathrm{Cl^-}$. Le groupe $\mathrm{-Cl}$ est **substitué** par $\mathrm{-OH}$.
- **Addition :** sur un alcène, $\mathrm{C=C} + \mathrm{H_2O} \rightarrow
  \mathrm{H\!-\!C\!-\!C\!-\!OH}$. La double liaison **s'ouvre**, deux fragments **s'ajoutent**.
- **Élimination :** un dérivé halogéné peut perdre $\mathrm{HCl}$ et **former** une double
  liaison $\mathrm{C=C}$ (réaction inverse de l'addition).

> ⚠️ Addition et élimination sont **opposées** : l'addition **fait disparaître** une liaison
> multiple, l'élimination en **fait apparaître** une. Repère la double liaison **avant** et
> **après** pour trancher.

---

## Tableau récapitulatif

| Notion | À retenir |
|---|---|
| **Rendement** $\eta$ | $\eta = n_{\text{obtenu}}/n_{\text{théorique}}$, sans unité, base = réactif limitant |
| **Sélectivité** | proportion du **bon** produit parmi les produits possibles |
| **Chimiosélectivité** | ne faire réagir **qu'un** groupe caractéristique parmi plusieurs |
| **Leviers de contrôle** | température, concentration, solvant, catalyseur, durée |
| **Catalyseur** | accélère, **absent du bilan**, régénéré ; abaisse l'énergie d'activation |
| **Catalyse** | homogène / hétérogène / enzymatique |
| **Facteurs cinétiques** | température ↑ et concentration ↑ → vitesse ↑ |
| **$t_{1/2}$** | temps pour atteindre la **moitié** de l'avancement final ; court = rapide |
| **Doublet** | liant (liaison covalente) ou non liant (paire libre) |
| **Site donneur / accepteur** | riche en électrons (donne) / pauvre en électrons (reçoit) |
| **Flèche courbe** | déplacement d'un doublet, du **donneur** vers l'**accepteur** |
| **Étape élémentaire** | transformation en **un seul acte** ; le mécanisme en est la suite |
| **3 types** | substitution / addition / élimination |

---

## Les erreurs qui coûtent des points

1. **Confondre rendement et sélectivité.** Le rendement mesure *combien* on a obtenu ; la
   sélectivité, *quel* produit. Un fort rendement en produit non désiré reste un échec.

2. **Croire qu'un catalyseur augmente le rendement.** Il change la **vitesse**, pas le point
   d'arrivée d'une réaction totale. Et il **n'apparaît pas** dans l'équation bilan : ne
   l'écris jamais comme un réactif consommé.

3. **Se tromper d'unités en cinétique.** Lis l'axe des temps ($\mathrm{s}$ ou $\mathrm{min}$,
   $1\ \mathrm{min} = 60\ \mathrm{s}$) et n'oublie pas qu'une concentration en
   $\mathrm{mol\cdot L^{-1}}$ exige un volume en **litres** ($1\ \mathrm{L} = 1000\ \mathrm{mL}$).

4. **Dessiner la flèche courbe à l'envers.** Elle part **toujours** d'un site **donneur**
   (riche : doublet non liant ou liaison) vers un site **accepteur** (pauvre). Jamais du
   pauvre vers le riche.

5. **Faire partir la flèche d'une charge + ou d'un atome.** La flèche courbe déplace un
   **doublet d'électrons**, pas une charge ni un noyau. Elle démarre sur un doublet ou une
   liaison.

6. **Confondre addition et élimination.** L'addition **supprime** une liaison multiple,
   l'élimination en **crée** une. Compte les doubles liaisons avant/après pour ne pas te
   tromper.

<!--
NOTES DE PRODUCTION — à confronter au relecteur / au PDF officiel avant publication.

Source : programme officiel SPCL, série STL, classe terminale.
  BO spécial n°8 du 25 juillet 2019.
  PDF officiel Terminale SPCL :
  https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Section utilisée : « Synthèses chimiques et mécanismes (Tale) » du fichier
  docs/programme-stl-spcl.txt (extrait via WebFetch du PDF officiel education.gouv.fr).
Intitulés couverts : aspects macroscopiques (rendement, sélectivité, chimiosélectivité,
  contrôle des conditions), catalyse (homogène/hétérogène/enzymatique), cinétique appliquée
  (facteurs cinétiques, temps de demi-réaction) ; mécanismes réactionnels (liaison covalente
  et doublets liants/non liants, sites donneurs et accepteurs de doublet, flèche courbe,
  étape élémentaire, types substitution/addition/élimination). Contexte : synthèse au
  laboratoire, dans la continuité de la Première (extraction et purification).

Prérequis cités : chapitre Première STL SPCL « Synthèses chimiques : extraction et
  purification » (contenu/premiere-techno/spcl-stl/syntheses-extraction-purification/) —
  rendement, réactif limitant, quantité de matière y sont établis.

Points à confronter au relecteur :
  - Périmètre exact des « aspects macroscopiques » attendus : la sélectivité et la
    chimiosélectivité doivent-elles être chiffrées (rapport de quantités) ou rester
    qualitatives au niveau STL SPCL ? Choix retenu : présentation qualitative + mention
    d'un rapport de quantités, sans formule imposée.
  - Cinétique : le programme demande-t-il l'expression d'une vitesse de réaction/de
    disparition (v = -d[R]/dt) ou se limite-t-il aux facteurs cinétiques et à t1/2 ?
    Choix prudent retenu : facteurs cinétiques + temps de demi-réaction, sans dérivée,
    pour rester au niveau technologique. À confirmer.
  - Vocabulaire mécanismes : le programme parle-t-il de « nucléophile/électrophile » ou
    reste-t-il à « site donneur / site accepteur de doublet » ? Choix retenu : uniquement
    « site donneur/accepteur » (formulation du programme rénové). À valider.
  - Vérifier que le contrôle des conditions n'exige PAS de notion d'équilibre chimique /
    déplacement d'équilibre (K, quotient de réaction) à ce niveau. Rédigé sans, à confirmer.
  - Confirmer les exemples de catalyseurs (Fe3+/Pt sur H2O2, H+ sur estérification,
    catalase) comme conformes aux attendus STL.
-->
