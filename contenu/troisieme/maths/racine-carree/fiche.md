---
id: 3e-math-racine-carree
titre: "Racine carrée : résoudre x² = a"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Définition de la racine carrée d'un nombre positif et encadrement (4e)
  - Carrés des nombres entiers de 0 à 12 (4e)
  - Fonction carré et sa représentation graphique (3e)
  - Équation produit nul et identité a² − b² = (a − b)(a + b) (3e)
  - Égalité de Pythagore dans un triangle rectangle (3e)
statut: brouillon
relu_par: null
---

# Racine carrée : résoudre $x^2 = a$

> En 4e, tu partais d'un nombre et tu cherchais sa racine : $\sqrt{49} = 7$, un seul
> résultat. Cette année, la question change de sens. On te donne l'aire et on demande
> **quels** nombres ont ce carré. Et là, surprise : il y en a souvent **deux**.

---

## 0. Ce que tu sais déjà

Tout ce qui suit s'appuie sur la fiche **« Racine carrée » de 4e**. Relis-la si l'un de ces
trois points ne te revient pas immédiatement : $\sqrt{a}$ est le nombre **positif** dont le
carré vaut $a$, et il n'existe que si $a \geqslant 0$ ; $(\sqrt{a})^2 = a$ ; on sait
encadrer $\sqrt{n}$ entre deux entiers consécutifs.

**L'automatisme exigé cette année encore** : les carrés des entiers de $0$ à $12$.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 |

---

## 1. Deux objets à ne surtout pas confondre

C'est **la** difficulté de ce chapitre. Prends trente secondes de plus sur ce tableau.

| | $\sqrt{a}$ | l'équation $x^2 = a$ |
|---|---|---|
| Ce que c'est | **un nombre** | **une question** |
| Ce que ça donne | une seule valeur, positive | zéro, une ou **deux** valeurs |
| Exemple | $\sqrt{25} = 5$ | $x^2 = 25$ a pour solutions $5$ **et** $-5$ |

$\sqrt{25}$ vaut $5$, et rien d'autre. Mais quand on **cherche** les nombres dont le carré
fait $25$, $-5$ convient aussi, puisque $(-5)^2 = 25$.

> ⚠️ **Ne réponds jamais « $\sqrt{25} = \pm 5$ ».** Le symbole $\sqrt{\ }$ désigne un seul
> nombre : c'est l'**équation** qui a deux solutions, pas la racine.

---

## 2. Résoudre $x^2 = a$ analytiquement

« Analytiquement » veut dire : par le calcul, avec des valeurs **exactes**. Tout dépend du
signe de $a$. Trois cas, pas un de plus.

### Cas 1 — si $a > 0$ : deux solutions opposées

$$\boxed{x^2 = a \iff x = \sqrt{a} \ \text{ ou } \ x = -\sqrt{a}}$$

> **Exemple.** $x^2 = 49$ donne $x = 7$ ou $x = -7$. Vérifie les deux :
> $7^2 = 49$ ✓ et $(-7)^2 = 49$ ✓

> **Exemple — quand ça ne tombe pas juste.** $x^2 = 5$ donne $x = \sqrt{5}$ ou
> $x = -\sqrt{5}$. Ce sont les **valeurs exactes** : ne les remplace pas par $2{,}236$ si on
> ne te demande pas une valeur approchée.

**Pourquoi exactement deux, et pas trois ?** Parce que tu sais factoriser une différence de
deux carrés :
$$x^2 = a \iff x^2 - (\sqrt{a})^2 = 0 \iff (x - \sqrt{a})(x + \sqrt{a}) = 0$$

Un produit est nul si et seulement si l'un de ses facteurs est nul. Donc $x = \sqrt{a}$ ou
$x = -\sqrt{a}$ — et aucune autre possibilité.

### Cas 2 — si $a = 0$ : une seule solution

$$x^2 = 0 \iff x = 0$$

Le seul nombre dont le carré est nul est $0$. Ici, les deux solutions se confondent : ne
réponds pas « $0$ et $-0$ », c'est le même nombre.

### Cas 3 — si $a < 0$ : aucune solution

$x^2 = -16$ n'a **aucune** solution. Un carré n'est jamais négatif : un nombre positif
multiplié par lui-même est positif, un nombre négatif aussi.

> **La réponse attendue** est une phrase : « Cette équation n'a pas de solution, car un
> carré est toujours positif ou nul. » Pas une case vide.

---

## 3. Résoudre $x^2 = a$ graphiquement

Le programme demande les **deux** méthodes. La lecture graphique s'appuie sur la courbe de
la **fonction carré**, celle qui à $x$ associe $x^2$.

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $x^2$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

Cette courbe s'appelle une **parabole**. Deux choses à voir dessus :

- elle est **au-dessus** de l'axe des abscisses (ou le touche) : un carré n'est jamais
  négatif ;
- elle est **symétrique** par rapport à l'axe des ordonnées : $x$ et $-x$ ont le même carré.
  C'est exactement ce qui fabrique les deux solutions opposées.

> **Culture, non exigible.** Une parabole possède un **foyer**, où se rassemblent les rayons
> arrivant parallèlement à son axe : c'est la forme d'une antenne parabolique. Autre
> curiosité : des **algorithmes d'extraction de racines carrées** approchent $\sqrt{a}$
> étape par étape, sans calculatrice, et cela depuis l'Antiquité.

**La méthode, en trois temps.** Trace la courbe de la fonction carré ; trace la **droite
horizontale** d'équation $y = a$ ; lis les **abscisses** des points d'intersection.

| Position de la droite | Points d'intersection | Solutions |
|---|---|---|
| $a > 0$ | $2$ | deux, opposées — pour $y = 4$, on lit $-2$ et $2$ |
| $a = 0$ | $1$ (le sommet) | une seule, $0$ |
| $a < 0$ | $0$ (la droite passe sous la courbe) | aucune |

> ⚠️ **On lit les abscisses, pas les ordonnées** — les deux points ont la même ordonnée $a$.
> Et une lecture graphique donne une valeur **approchée** : pour $x^2 = 5$ tu liras
> « environ $2{,}2$ et $-2{,}2$ », alors que la réponse exacte est $\sqrt{5}$ et $-\sqrt{5}$.
> Les deux méthodes doivent se confirmer l'une l'autre.

---

## 4. Méthode — se ramener à la forme $x^2 = a$

Une équation ne t'arrive presque jamais toute prête. Isole $x^2$ **d'abord**, résous
**ensuite**.

> **Exemple 1.** $3x^2 = 75$ : on divise par $3$, donc
> $$x^2 = 25 \quad\Longrightarrow\quad x = 5 \ \text{ ou } \ x = -5$$

> **Exemple 2.** $x^2 - 11 = 0$ : on ajoute $11$, donc
> $$x^2 = 11 \quad\Longrightarrow\quad x = \sqrt{11} \ \text{ ou } \ x = -\sqrt{11}$$

> **Exemples 3 et 4 — les cas limites.** $2x^2 + 7 = 7$ donne $x^2 = 0$, donc $x = 0$.
> $x^2 + 9 = 0$ donne $x^2 = -9$ : aucune solution.

> ⚠️ **Divise avant de prendre la racine.** Dans $3x^2 = 75$, la réponse n'est pas
> $\sqrt{75}$ : le $3$ doit partir en premier.

---

## 5. Résoudre des problèmes avec une racine carrée

Dans un problème concret, tu obtiens souvent une équation $x^2 = a$ — puis tu dois **trier**
ses solutions. Une longueur, une aire, une durée sont **positives** : la solution négative
existe mathématiquement, mais elle ne répond pas à la question posée.

> **Le côté d'un carré.** Un carré a pour aire $50\ \text{cm}^2$. Son côté $c$ vérifie
> $$c^2 = 50 \quad\Longrightarrow\quad c = \sqrt{50} \ \text{ ou } \ c = -\sqrt{50}$$
> Une longueur n'est pas négative : $c = \sqrt{50}\ \text{cm}$, soit environ $7{,}1$ cm.

> **Avec Pythagore.** Le triangle $ABC$ est rectangle en $A$, $AB = 5$ et $AC = 12$.
> $$BC^2 = AB^2 + AC^2 = 25 + 144 = 169 \quad\Longrightarrow\quad BC = \sqrt{169} = 13$$

> **Rédige le tri.** Écris la phrase : « $-\sqrt{50}$ est négatif, ce n'est pas une
> longueur : on ne garde que $\sqrt{50}$. » Cela montre au correcteur que tu n'as pas
> oublié la seconde solution — tu l'as **écartée**, ce n'est pas pareil.

---

## 6. Cas particuliers et pièges de calcul

**Quand $a$ n'est pas un carré parfait**, la réponse s'arrête au radical. $\sqrt{7}$ est une
valeur **exacte** et une réponse complète ; $2{,}645\ldots$ est **approchée**, s'écrit avec
$\approx$, et seulement si l'énoncé la demande. Même chose pour $\sqrt{50}$ : laisse-le tel
quel.

**Les deux cas limites** sont ceux qu'on oublie sous la pression : $x^2 = 0$ n'a **qu'une**
solution ($0$, où les deux se confondent), et $x^2 = $ un nombre négatif n'en a **aucune**.

**$x^2$ n'est ni $2x$ ni « la moitié ».** $x^2$ signifie $x \times x$. Pour $x^2 = 36$, les
solutions sont $6$ et $-6$ — ni $18$, ni $72$.

---

## 7. À retenir absolument

| | |
|---|---|
| $a > 0$ | $x^2 = a \iff x = \sqrt{a}$ ou $x = -\sqrt{a}$ |
| $a = 0$ | une seule solution : $x = 0$ |
| $a < 0$ | **aucune** solution |
| Pourquoi deux | $x^2 - a = (x - \sqrt{a})(x + \sqrt{a})$, puis produit nul |
| $\sqrt{a}$ | **un** nombre, toujours positif |
| Graphiquement | droite $y = a$ sur la parabole → on lit les **abscisses** |
| Graphique vs calcul | le graphique donne l'**approché**, le calcul l'**exact** |
| Problème concret | longueur ⟹ on **écarte** la solution négative, en le disant |
| Avant tout | isoler $x^2$ (diviser, transposer) |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier la solution négative.** C'est l'erreur n°1 du chapitre, et de loin.
   $x^2 = 36$ a **deux** solutions : $6$ et $-6$. N'en écris qu'une et tu perds la moitié
   des points. Le réflexe : dès que tu lis « $x^2 = $ un nombre positif », tu écris **deux**
   valeurs opposées. (Seule exception : $x^2 = 0$, où il n'y en a qu'une.)
2. **Écrire $\sqrt{36} = \pm 6$.** L'inverse du piège n°1, et tout aussi faux.
   $\sqrt{36} = 6$. Le « ou $-$ » appartient à l'équation, jamais au symbole radical.
3. **Répondre $-4$ à $x^2 = -16$.** Un carré n'est jamais négatif : il n'y a **aucune**
   solution. Et $\sqrt{-16}$ ne s'écrit même pas.
4. **Prendre la racine avant d'isoler $x^2$.** Dans $3x^2 = 75$, les solutions sont $5$ et
   $-5$, pas $\sqrt{75}$. On divise par $3$ d'abord.
5. **Garder la solution négative comme longueur.** Un côté ne mesure pas $-\sqrt{50}$ cm.
   Mais ne la fais pas disparaitre en silence : écarte-la par une phrase.
6. **Décimaliser sans qu'on te le demande.** $x = \sqrt{7}$ est une réponse exacte et
   complète. $x \approx 2{,}65$ est approchée : $\approx$ obligatoire, et seulement si
   l'énoncé la réclame.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE — docs/programme-college-cycle4-maths-2026.txt, « Annexe 2 – Programme de
mathématiques pour le cycle 4 », « Nombres et calculs », TROISIÈME (l. 581-644), entrée
« Racine carrée », l. 605-614. Contenu littéral, c'est TOUT ce que le texte donne pour la 3e :
- l. 607 (automatisme) « Donner les carrés des nombres entiers compris entre 0 et 12. » —
  identique à la 4e (l. 558) → §0, volontairement bref.
- l. 609 (objectif) « Résoudre analytiquement et graphiquement des équations de la forme
  x² = a. » → §2 (analytique) + §3 (graphique). Cœur du chapitre.
- l. 610 (objectif) « Résoudre des problèmes utilisant la racine carrée. » → §5
- l. 612-614 (prolongements) parabole / foyer / antennes, et « Algorithmes d'extraction de
  racines carrées. » → encadré « Culture, non exigible » du §3.
Cadrage l. 344-345 : « La racine carrée est introduite, en lien avec des situations
géométriques (longueur du côté d'un carré d'aire donnée, théorème de Pythagore). » → §5.
Rien d'autre dans le texte de 3e : pas de calcul sur les radicaux, pas de simplification.

APPUIS PRIS AILLEURS, TOUS VÉRIFIÉS EN 3e
- l. 1068 (Fonctions) « Représenter la fonction carré. » → autorise le §3 et « parabole ».
- l. 637 + l. 641 (Calcul littéral) produit nul ; a² – b² = (a – b)(a + b) → justifient le
  « pourquoi exactement deux solutions » du §2.
- l. 839 (Triangles, automatisme) « Écrire l'égalité de Pythagore. » → exemple du §5. Le
  théorème est un objectif de 4e (l. 800) ; en 3e c'est un automatisme, donc mobilisable.
- l. 626 (Calcul littéral, automatisme) équations ax = c, x + b = c → §4.

ARTICULATION AVEC LA 4e (contenu/quatrieme/maths/racine-carree/) — non reprises ici, citées
en prérequis et renvoyées au §0 : définition de √a, condition a ⩾ 0, (√a)² = a, √(a²) = a,
croissance, encadrement par deux entiers, √(a+b) ≠ √a + √b, irrationalité de √2. Le §1 est
le pivot : la 4e martèle « une racine ne donne jamais deux réponses », la 3e ajoute « mais
une équation, si ». Divergence de ton volontaire, traitée frontalement (§1, erreurs 1-2) —
à valider en relecture croisée des deux fiches.

⚠️ POINT N°1 — VÉRIFICATION REFAITE, JE CONFIRME L'AUTEUR DE LA 4e. √(ab) = √a × √b et
√(a/b) = √a/√b n'apparaissent nulle part dans le cycle 4. Recherche indépendante :
- « racine(s) » apparait sur 9 lignes — 15, 20 (sommaire), 344 (cadrage), 556, 560, 561
  (4e), 605, 610, 614 (3e) : aucune ne parle de produit ni de quotient de racines ;
- le symbole « √ » n'apparait qu'une fois, l. 564 (√2 non décimal), en 4e ;
- « produit de deux racines », « racine d'un produit / d'un quotient » : aucun résultat ;
- l'entrée de 3e (l. 605-614) est complète et structurée (Automatismes / Objectifs /
  Prolongements) : rien ne manque au milieu.
JE TRANCHE dans le même sens : hors programme, donc absentes de la fiche — y compris là où
elles tenteraient (§5 : √50 reste √50, PAS simplifié en 5√2).
Rectification mineure : la 4e annonce « dix occurrences du mot racine, l. 15, 20, 344, 556,
560, 561, 564, 605, 610, 614 ». Il y en a NEUF — la l. 564 porte le symbole √, pas le mot.
Le décompte change, la conclusion non.
RÉSERVE à lever sur le PDF : le .txt est une extraction, et elle abime les formules empilées
(l. 618-621 : deux fractions réduites à « 15 / 35 et 63 / 14 »). Un radical composé aurait pu
subir le même sort. Les identités remarquables (l. 638-641) et « 60 = 2² × 3 × 5 » (l. 617)
ont survécu, ce qui rend l'hypothèse peu probable — mais seul le PDF la ferme.

AUTRES POINTS POUR LE RELECTEUR
2. Notation « ± » : écartée de la rédaction des solutions (j'écris « x = √a ou x = -√a ») ;
   elle n'apparait qu'au §1 et à l'erreur 2, pour être dénoncée. Bon choix en 3e, ou faut-il
   l'introduire comme abréviation ?
3. La factorisation du §2 dépasse la lettre du l. 609 (qui dit seulement « résoudre »). Elle
   n'utilise que des outils de 3e et donne l'unicité des deux solutions, sinon admise. À
   garder, ou à isoler en encadré facultatif ?
4. Le §3 décrit la parabole sans figure (le gabarit ne prévoit pas d'image) : tableau de
   valeurs + symétrie. Une illustration serait nettement préférable — à arbitrer.
5. Périmètre du §5 : le l. 610 est très ouvert ; je m'en tiens aux deux situations nommées
   au l. 344-345. En ajouter (volumes, agrandissement-réduction) ou non ?
6. Le l. 609 dit « de la forme x² = a » : le §4 (s'y ramener, type 3x² = 75) est-il inclus ou
   est-ce du dépassement ? Supposé inclus, les automatismes l. 626 couvrant ax = c.
7. Non traités, faute de mention dans le texte : racines de non-entiers (x² = 0,25) — à
   confirmer qu'elles ne sont pas attendues au brevet ; et l'irrationalité de √a quand a
   n'est pas un carré parfait, qui est un prolongement de 4e (l. 563-564). Volontaire.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
-->
