---
id: 5e-math-pensee-informatique
titre: "La pensée informatique"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 10
prerequis:
  - Instruction et séquence d'instructions (6e)
  - Répéter une séquence d'instructions pour accomplir une tâche (6e)
  - Programmes de calcul (CM2-6e)
  - Priorités opératoires et parenthèses (6e)
statut: brouillon
relu_par: null
---

# La pensée informatique

> Une machine ne devine rien : elle exécute **les instructions que tu lui donnes**, **dans
> l'ordre où tu les donnes**, sans rien corriger. Programmer, c'est dire exactement ce qu'on
> veut — et **prévoir** ce qui va se passer avant d'appuyer sur le bouton.

---

## 1. Le vocabulaire de base

| Mot | Ce que ça veut dire |
|---|---|
| **Instruction** | un ordre unique, que la machine sait exécuter |
| **Séquence** | plusieurs instructions mises **l'une après l'autre** |
| **Programme** | une séquence d'instructions écrite pour accomplir une tâche |
| **Exécuter** | dérouler les instructions, une par une, dans l'ordre |

En 5e, tu programmes dans un **langage par blocs** : chaque instruction est un bloc empilé
sous le précédent, et la pile se lit **de haut en bas**.

> **Une instruction** : `avancer de 50 pas`. **Une séquence** : `avancer de 50 pas`,
> puis `tourner de 90°`, puis `avancer de 50 pas`.

---

## 2. Les notions clés

### 2.1 La séquence — l'ordre change tout

Une séquence n'est pas un sac d'instructions : c'est une **liste ordonnée**. Change l'ordre,
tu changes le résultat.

> **Exemple.** Deux programmes, les mêmes instructions, pas le même résultat.
>
> ```
> Programme A                Programme B
> choisir 3                  choisir 3
> ajouter 2                  multiplier par 5
> multiplier par 5           ajouter 2
> afficher                   afficher
> ```
>
> A affiche $(3 + 2) \times 5 = 25$. B affiche $3 \times 5 + 2 = 17$.
>
> $$\boxed{\text{Mêmes instructions} + \text{ordre différent} = \text{résultat différent}}$$

### 2.2 Les entrées et les sorties

- Une **entrée** : ce que le programme **reçoit** (un nombre saisi, un clic, une mesure).
- Une **sortie** : ce qu'il **produit** (un affichage, un dessin, un son, un déplacement).

> **Exemple.**
>
> ```
> demander « Quel est ton âge ? » et mettre la réponse dans age
> afficher age + 10
> ```
>
> **Entrée** : l'âge saisi. **Sortie** : le nombre affiché. Le programme lui-même n'est ni
> l'un ni l'autre : c'est la machine entre les deux.

### 2.3 La variable — une étiquette sur une donnée

Une **variable** est un nom qui désigne une donnée rangée par la machine. En 5e, on l'utilise
**uniquement en lecture** : une donnée est saisie, on lui donne un nom, et on **s'en sert**
dans les calculs. On ne la modifie pas en cours de route.

> **Exemple.** L'utilisateur saisit $7$ dans `a`.
>
> ```
> afficher a + 1
> afficher a + 2
> ```
>
> Le programme affiche $8$ puis $9$. **Attention** : `afficher a + 1` ne change pas `a`,
> qui vaut toujours $7$ à la ligne suivante. On l'a **lue**, pas modifiée.

### 2.4 L'expression informatique — une formule écrite pour la machine

Une **expression informatique** est la traduction d'une formule mathématique dans le langage
du programme. Elle suit **les mêmes priorités qu'en maths** : multiplications et divisions
avant additions et soustractions, et les parenthèses d'abord.

> **Exemple.** La moyenne de deux notes $m = \dfrac{a+b}{2}$ s'écrit `(a + b) / 2`.
>
> **Les parenthèses sont obligatoires** : la barre de fraction regroupait toute seule le
> numérateur ; écrite à plat, elle disparaît. `a + b / 2` calcule $a + \dfrac{b}{2}$.

### 2.5 La boucle — répéter sans réécrire

Une **boucle** demande de répéter une séquence un **nombre de fois fixé à l'avance**. On dit
qu'elle est **inconditionnelle** : le nombre de tours est connu avant de commencer, rien ne
peut l'interrompre.

> **Exemple.** Écrire quatre fois de suite `avancer de 50` puis `tourner de 90°` trace un
> carré. La boucle dit la même chose en trois lignes :
>
> ```
> répéter 4 fois
>     avancer de 50
>     tourner de 90°
> fin répéter
> ```
>
> Plus court, plus clair, et bien plus facile à modifier.

> **Ce qui est dans la boucle** : seules les instructions **décalées vers la droite** sont
> répétées. Ce qui est écrit après `fin répéter` n'est exécuté **qu'une fois**.

---

## 3. Méthodes — lire et écrire un algorithme

### Méthode 1 — Prévoir la valeur avant d'exécuter

Le réflexe attendu : **savoir ce que la machine va afficher avant de lancer le programme**.
Tu remplaces chaque variable par sa valeur, puis tu calcules.

> **Exemple.** L'utilisateur saisit $6$ dans `nombre`, et le programme dit
> `afficher nombre × nombre − nombre`.
>
> Je remplace : $6 \times 6 - 6$. La multiplication est prioritaire : $36 - 6 = 30$.
> Sortie : $30$.

### Méthode 2 — Traduire une formule en expression informatique

1. Repère ce qui est **regroupé** dans la formule (barre de fraction, grande parenthèse).
2. Remets ces regroupements en **parenthèses**, puisque la ligne est écrite à plat.
3. Remplace chaque grandeur par le **nom de sa variable**.

> **Exemple.** Le périmètre d'un rectangle $P = 2 \times (L + \ell)$ devient
> `2 * (longueur + largeur)`. Sans les parenthèses, `2 * longueur + largeur` ne double que
> la longueur.

### Méthode 3 — Calculer une formule avec une suite d'instructions

Une formule un peu longue peut se calculer **par étapes**, une instruction par étape. C'est
plus lent à écrire, mais bien plus facile à relire et à corriger.

> **Exemple.** Aire d'un triangle, $\mathcal{A} = \dfrac{b \times h}{2}$ :
>
> ```
> demander la base et la mettre dans b
> demander la hauteur et la mettre dans h
> afficher (b * h) / 2
> ```

### Méthode 4 — Analyser un programme et modifier ses paramètres

Un **paramètre**, c'est un nombre écrit dans une instruction : le $50$ de `avancer de 50`,
le $4$ de `répéter 4 fois`. Modifier un programme, c'est souvent ne changer que ça.

> **Exemple.** Reprends le programme du carré (§ 2.5). Pour tracer un **triangle
> équilatéral**, deux paramètres changent : `répéter 3 fois` et `tourner de 120°`.
>
> *Pourquoi $120$ ?* Le robot fait un tour complet, soit $360°$, réparti en $3$ virages
> identiques : $360 \div 3 = 120$. Pour le carré : $360 \div 4 = 90$ ✓

### Méthode 5 — Écrire une boucle

1. Repère la séquence qui **se répète à l'identique**.
2. Compte **combien de fois** elle revient.
3. Écris `répéter n fois`, puis place la séquence **à l'intérieur** du bloc.

> **Contrôle** : déroule mentalement le premier tour et le dernier. Si le dernier tour ajoute
> une instruction de trop (un dernier virage inutile, par exemple), c'est que le découpage
> n'est pas le bon.

---

## 4. Pièges de lecture

- **On lit strictement de haut en bas** : une instruction non atteinte ne fait rien.
- **Afficher n'est pas ranger** : `afficher a + 1` produit une sortie, `a` ne bouge pas.
- **Le décalage a un sens** : il dit ce qui est dans la boucle, donc ce qui est répété.
- **La machine ne simplifie pas** : elle applique les priorités à la lettre, sans deviner
  ton intention.
- **`répéter 4 fois` avec $2$ instructions dedans** exécute $4 \times 2 = 8$ instructions.

---

## 5. À retenir absolument

| | |
|---|---|
| Instruction | un ordre unique |
| Séquence | des instructions **dans un ordre**, lues de haut en bas |
| Entrée / sortie | ce que le programme **reçoit** / ce qu'il **produit** |
| Variable (en 5e) | un nom qui désigne une donnée saisie, qu'on **lit** |
| Expression informatique | une formule à plat, **parenthèses obligatoires** |
| Boucle inconditionnelle | `répéter n fois` — $n$ connu **à l'avance** |
| Instructions exécutées | (nombre de tours) $\times$ (instructions dans le bloc) |
| Angle de rotation | $360 \div (\text{nombre de côtés})$ |

---

## 6. Les erreurs qui coûtent des points

1. **Changer l'ordre des instructions** en croyant que ça ne change rien :
   $(3+2) \times 5 = 25$, mais $3 \times 5 + 2 = 17$.
2. **Oublier les parenthèses** en écrivant une fraction à plat : $\dfrac{a+b}{2}$ s'écrit
   `(a + b) / 2`, jamais `a + b / 2`.
3. **Calculer de gauche à droite** : la machine respecte les priorités,
   $4 + 3 \times 2 = 10$ et non $14$.
4. **Croire qu'afficher modifie une variable** : en 5e elle garde jusqu'au bout la valeur
   saisie.
5. **Compter les instructions écrites au lieu des instructions exécutées** : $4$ tours sur
   $2$ instructions en exécutent $8$. Et attention à ce qui est **hors** de la boucle : le
   décalage décide, pas le sens de la phrase.
6. **Confondre l'angle de la figure et l'angle du virage** : pour un triangle équilatéral, le
   robot tourne de $120°$, pas de $60°$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt — thème « La pensée informatique »,
introduction lignes 1071-1075, section « Cinquième » lignes 1076-1087 (seule source des
contenus), cadrage général lignes 302-321. Prérequis vérifiés dans
programme-college-cycle3-maths-2025.txt, section « Sixième » (lignes 1543-1552) :
instruction, séquence d'instructions, entrées, sorties, répétitions.

Les 7 objectifs de la section Cinquième sont tous couverts : séquencer des instructions →
1 et 2.1 · entrées et sorties → 2.2 · formule en expression informatique → 2.4 et méthode 2
· calculer une formule par une suite d'instructions → méthode 3 · prévoir la valeur avant
exécution → méthode 1 · modifier les paramètres d'un programme → méthode 4 · boucle
inconditionnelle → 2.5 et méthode 5. Variable « vue uniquement sous l'angle de la
manipulation en lecture d'une donnée saisie » → 2.3, volontairement restrictive.

⚠️ PÉRIMÈTRE — le point le plus sensible, à trancher par le relecteur.
La commande de production demandait le **test (instruction conditionnelle)** parmi les
notions clés. Le texte officiel le place en **Quatrième** (« Représenter des conditions
simples », « Écrire des instructions conditionnelles », lignes 1093-1094) et la boucle
conditionnelle en Troisième (ligne 1104) ; la section Cinquième ne mentionne aucune
condition. Le test n'est donc PAS traité ici, ni dans le QCM. Faut-il l'introduire quand
même ? Le dépistage du 2026-08-10 (docs/relecture.md) traite ce type d'ajout comme un écart.

⚠️ Même logique : écrire un programme en autonomie et modifier le *comportement* d'un
programme relèvent de la 4e. En 5e le texte ne demande que de modifier ses **paramètres**
(d'où la méthode 4, limitée aux valeurs numériques). Aucun accumulateur (compteur incrémenté
dans une boucle) n'apparaît nulle part : cela supposerait de modifier une variable.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le texte dit « langage de programmation par blocs » sans nommer Scratch (0 occurrence en
  cycle 4 ; le nom n'apparaît qu'en cycle 3, ligne 1539). La fiche ne nomme donc aucun
  logiciel et figure les blocs par du pseudo-code indenté (fiche et QCM) : à valider comme
  représentation acceptable d'un empilement de blocs. La syntaxe employée (`*`, `/`,
  `répéter n fois`, `fin répéter`) est une convention de rédaction, le programme n'en
  prescrit aucune : vérifier qu'elle ne heurte pas l'usage.
- Le tracé de polygone (carré, triangle) suppose l'angle de rotation **extérieur** et
  $360 \div n$ : cohérence à vérifier avec la progression de géométrie de 5e (QCM q. 7).
- « Prévoir la valeur d'une expression informatique » : le programme ne dit pas si les
  priorités opératoires sont réactivées à cette occasion. La fiche fait ce choix (2.4,
  erreurs 2 et 3) car c'est le point de contact direct avec le calcul de 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
-->
