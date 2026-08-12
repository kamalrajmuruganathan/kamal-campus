---
id: 4e-math-pensee-informatique
titre: "La pensée informatique"
voie: college
niveau: quatrieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 4e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Instruction, séquence, entrées et sorties d'un programme (5e — « La pensée informatique »)
  - Variable lue et expression informatique (5e — « La pensée informatique »)
  - Boucle inconditionnelle « répéter n fois » (5e — « La pensée informatique »)
  - Comparer et ranger des nombres relatifs (5e)
statut: brouillon
relu_par: null
---

# La pensée informatique

> En 5e, ton programme faisait toujours la même chose. En 4e, il **décide** : il regarde une
> donnée, se pose une question, choisit son chemin. Et cette donnée, tu peux enfin la **changer**.

---

## 1. Ce que la 4e ajoute

Ce chapitre s'appuie entièrement sur celui de 5e : instruction, séquence, entrée, sortie,
expression informatique, boucle `répéter n fois`. Rien de tout cela n'est repris ici — si un mot
te manque, retourne le chercher là-bas. Deux nouveautés seulement : **l'instruction
conditionnelle** (le programme **teste**, et n'exécute pas les mêmes instructions selon la
réponse) et **la variable manipulée** (on lui **donne** une valeur, et on peut la **changer**).

> **La convention d'écriture ne change pas.** Comme en 5e, les blocs empilés sont figurés par des
> lignes lues **de haut en bas**, et le **décalage vers la droite** dit ce qui est à l'intérieur
> d'un bloc. `répéter` se ferme par `fin répéter` ; `si` se fermera par `fin si`.

---

## 2. Les notions clés

### 2.1 Une condition — une question à réponse vraie ou fausse

Une **condition** est une affirmation sur des données, soit **vraie**, soit **fausse** : pas de
« ça dépend ». Ce **n'est pas une instruction** : une instruction est un ordre (`afficher n`),
une condition est une question (`n > 10`) — on ne l'exécute pas, on dit si elle est vraie.

> **Exemple.** Si `n` vaut $7$ : `n > 10` est **faux**, `n ≠ 10` est **vrai**, `n ≤ 7` est **vrai**.

### 2.2 Représenter une condition simple

Une condition simple compare **deux nombres**. Six comparaisons suffisent, ce sont celles des
maths :

| Condition | Se lit | Vraie quand… |
|---|---|---|
| `a = b` · `a ≠ b` | est égal à · est différent de | les deux valeurs sont les mêmes · ne le sont pas |
| `a < b` · `a > b` | est **strictement** inférieur · supérieur à | $a$ est plus petit · plus grand, **égalité exclue** |
| `a ≤ b` · `a ≥ b` | est inférieur · supérieur **ou égal** à | $a$ est plus petit · plus grand, **égalité comprise** |

Le travail consiste à **traduire une phrase française** en une de ces six lignes ; le mot qui
piège est celui qui décide de l'égalité.

> **Exemple.** « la note **atteint** la moyenne » → `note ≥ 10` ; « la note **dépasse** la
> moyenne » → `note > 10` ; « **au plus** 12 places » → `places ≤ 12` ; « **au moins** 12
> places » → `places ≥ 12`.

$$\boxed{\text{« au plus » } \rightarrow\ \leqslant \qquad \text{« au moins » } \rightarrow\ \geqslant}$$

### 2.3 Écrire une instruction conditionnelle

```
si <condition> alors
    <instructions exécutées seulement si la condition est vraie>
sinon
    <instructions exécutées seulement si elle est fausse>
fin si
```

Condition vraie : le premier bloc s'exécute. Condition fausse : il est **entièrement sauté**. Le
`sinon` est **facultatif** — sans lui, une condition fausse ne déclenche rien ; avec lui, les
deux branches sont **exclusives** : une seule s'exécute, jamais les deux, jamais aucune. Et dans
tous les cas, ce qui est écrit **après `fin si`** ne dépend plus du test : c'est exécuté quoi
qu'il arrive.

> **Exemple.**
>
> ```
> demander un nombre et le mettre dans n
> si n ≥ 0 alors
>     afficher n
> sinon
>     afficher 0 − n
> fin si
> ```
> Saisie $-4$ : la condition est fausse, on part dans `sinon` et le programme affiche
> $0 - (-4) = 4$. Saisie $5$ : il affiche $5$. Ce programme affiche la **distance à zéro**.

### 2.4 Manipuler une variable

En 5e, une variable était **lue** : une donnée saisie, à laquelle on avait donné un nom. En 4e, tu
lui **donnes** toi-même des valeurs, autant de fois que tu veux : `mettre 0 dans score` range $0$
dans `score` et **écrase** l'ancienne valeur, qui est perdue.

> **Le point important.** Dans `mettre a + b dans a`, la machine fait deux choses **dans cet
> ordre** : elle **calcule** `a + b` avec les valeurs actuelles, puis elle **range** le résultat
> dans `a`. Si `a` vaut $5$ et `b` vaut $8$, après cette ligne `a` vaut $13$ et `b` vaut toujours
> $8$ : le $5$ n'existe plus nulle part.
>
> ⚠️ **Ce n'est pas le `=` des maths.** $a = a + 1$ est impossible en maths ; `mettre a + 1 dans
> a` veut dire « la nouvelle valeur de `a`, c'est l'ancienne plus un » : un **ordre**, pas une
> égalité.

**Le compteur.** L'usage le plus fréquent : une variable mise à jour **à chaque tour** d'une boucle.

> **Exemple.**
>
> ```
> mettre 0 dans s
> répéter 4 fois
>     mettre s + 3 dans s
> fin répéter
> afficher s
> ```
> Tour 1 : `s` vaut $3$ ; tour 2 : $6$ ; tour 3 : $9$ ; tour 4 : $12$. Sortie : $12$. **Ne saute
> pas la première ligne** : sans `mettre 0 dans s`, la machine ne sait pas par où commencer.

---

## 3. Méthodes — lire et écrire un algorithme

### Méthode 1 — Traduire une phrase, puis écrire l'instruction conditionnelle

1. **Traduis la phrase en condition** : repère les deux quantités comparées, choisis le sens,
   puis demande-toi **si le cas d'égalité compte** — tout se joue là. *« L'entrée est gratuite
   jusqu'à 12 ans inclus »* → `age ≤ 12`, car *inclus*.
2. Demande-toi : **y a-t-il quelque chose à faire quand c'est faux ?** Si oui,
   `si … alors … sinon` ; si non, `si … alors` tout court.
3. Décale les instructions de chaque branche : le décalage est ce qui les rattache au test.

> **Exemple.** « Afficher *gagné* si le score dépasse 20, *perdu* sinon » donne, sur cinq lignes
> décalées, `si score > 20 alors afficher « gagné » sinon afficher « perdu »`. *Dépasser* $20$,
> c'est être **strictement** au-dessus : avec `score ≥ 20`, un score de $20$ afficherait `gagné`
> à tort.

### Méthode 2 — Suivre une variable pas à pas

Pour prévoir la sortie d'un programme qui modifie des variables, fais un **tableau de suivi** :
une colonne par variable, une ligne par instruction.

> **Exemple**, avec la saisie $15$ :
>
> ```
> mettre 0 dans p
> demander un nombre et le mettre dans n
> si n ≥ 18 alors
>     mettre 2 dans p
> fin si
> mettre p + 1 dans p
> ```
>
> | Instruction | `n` | `p` |
> |---|---|---|
> | `mettre 0 dans p`, puis saisie | $15$ | $0$ |
> | test `15 ≥ 18` : **faux**, bloc sauté | $15$ | $0$ |
> | `mettre p + 1 dans p` (après `fin si`) | $15$ | $1$ |
>
> `p` vaut $1$ à la fin. Avec une saisie de $20$, la même méthode donne $3$.

### Méthode 3 — Écrire un programme pour atteindre un objectif

1. Écris l'objectif **en français**, puis repère les **entrées** (ce qu'il faut demander) et la
   **sortie** (ce qu'il faut afficher).
2. Repère les **cas** : si la réponse dépend d'une comparaison, il te faut un `si`.
3. **Teste à la main** : un exemple par cas, plus un exemple **pile sur la frontière**.

> **Exemple.** Objectif : afficher le plus grand de deux nombres `a` et `b`.
>
> ```
> si a > b alors
>     afficher a
> sinon
>     afficher b
> fin si
> ```
> $a = 3$, $b = 9$ → $9$ ✓ · $a = 9$, $b = 3$ → $9$ ✓ · cas limite $a = b = 5$ : la condition est
> fausse, on affiche `b`, soit $5$ ✓

### Méthode 4 — Modifier un programme pour changer son comportement

En 5e, tu modifiais les **paramètres** (les nombres). En 4e, tu changes le **comportement** : un
**nombre** dans la condition déplace la frontière (`≥ 10` → `≥ 12`) ; l'**opérateur** fait
basculer le cas d'égalité (`≥` → `>`) ; un **`sinon`** ajouté ou retiré fait apparaître ou
disparaître un cas non traité.

> **Diagnostic.** Un programme qui se trompe **sur un seul exemple** a presque toujours un
> problème d'opérateur : cherche le cas **exactement sur la frontière**, c'est lui qui dénonce le
> `≥` écrit à la place du `>`.

---

## 4. Pièges de lecture

- **Ce qui suit `fin si` s'exécute toujours** : le décalage seul dit ce qui dépend du test.
- **Deux `si` d'affilée ne sont pas un `si … sinon`** : indépendants, leurs deux blocs peuvent
  s'exécuter. Et **une condition fausse ne provoque pas d'erreur** : elle ne fait rien.
- **Une variable garde sa valeur** jusqu'à ce qu'une instruction la change.

---

## 5. À retenir absolument

| | |
|---|---|
| Condition | une question à réponse **vraie ou fausse**, jamais « ça dépend » |
| « au plus » / « au moins » | $\leqslant$ / $\geqslant$ — et « dépasse » / « atteint » : $>$ / $\geqslant$ |
| `si … alors … fin si` | le bloc décalé s'exécute **seulement si** la condition est vraie |
| `si … alors … sinon` | **une seule** des deux branches, jamais les deux ; après `fin si`, tout s'exécute |
| `mettre v dans x` | range $v$ dans `x` et **écrase** l'ancienne valeur (calcul d'abord) ; un compteur s'**initialise** avant la boucle |

---

## 6. Les erreurs qui coûtent des points

1. **Confondre `<` et `≤`** : « jusqu'à 12 ans inclus » → `age ≤ 12` ; avec `age < 12`, l'enfant de $12$ ans paie.
2. **Croire que tout ce qui suit le `si` en dépend** : après `fin si`, tout s'exécute.
3. **Oublier le `sinon`** quand les deux cas demandent une action : le programme n'affiche rien
   dans la moitié des situations, sans jamais signaler d'erreur.
4. **Écrire deux `si` là où il faut un `si … sinon`** : avec `si n > 10` puis `si n > 5`, un $n$
   égal à $12$ déclenche **les deux**.
5. **Oublier d'initialiser un compteur**, ou **lire `mettre a + b dans a` comme l'équation
   $a = a + b$** : c'est un ordre, qui remplace l'ancienne valeur de `a`.
6. **Ne tester qu'un seul exemple** : un par branche, plus le cas **sur la frontière**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « La pensée informatique » — chapeau
l. 1071-1075, section « Quatrième » l. 1088-1097 (seule source des contenus), cadrage général
l. 302-321. Chapitre de 5e lu intégralement (contenu/cinquieme/maths/pensee-informatique/
fiche.md) : conventions de pseudo-code, vocabulaire et découpage repris à l'identique, prérequis
cités en en-tête et au § 1, contenus de 5e NON répétés.

Couverture des 5 objectifs de la section Quatrième : « conditions simples » → § 2.1-2.2 et
méthode 1 · « instructions conditionnelles » → § 2.3 et méthode 1 · « manipuler une variable » →
§ 2.4 (affectation puis compteur) et méthode 2 · « écrire un programme simple … pour réaliser un
objectif » → méthode 3 · « modifier un programme donné pour changer son comportement » →
méthode 4. Chapeau de niveau (l. 1089-1091) : variable « progressivement introduite » → § 2.4,
sans aller plus loin ; « modifier des programmes fournis plus complexes » → méthodes 2 et 4.

⚠️ PÉRIMÈTRE, à trancher par le relecteur. Conditions COMPOSÉES (et / ou) et boucle
CONDITIONNELLE sont en Troisième (l. 1103-1104) : non traitées ; le § 4 aborde deux `si`
successifs indépendants — piège de lecture, pas condition composée, mais la frontière mérite un
avis. Le compteur (fin du § 2.4) n'est pas nommé par le texte : il découle de « manipuler une
variable » croisé avec la boucle de 5e, dont les notes de la fiche de 5e signalaient l'absence à
ce niveau ; à valider comme attendu de 4e.

⚠️ L'objectif l. 1096 est écrit « Écrire un programme simple DONNÉ pour réaliser un objectif »
(idem l. 1109 en 3e) : « donné » contredit « écrire », formulation probablement fautive dans le
texte source ou dans l'extraction. Lu ici comme « écrire un programme simple pour réaliser un
objectif » (méthode 3), en cohérence avec le chapeau « les élèves commencent à écrire des
programmes simples en autonomie ». À CONFRONTER AU PDF : conformité la plus incertaine.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR. (1) Aucun logiciel nommé (« programmation impérative
par blocs », l. 1072 ; « Scratch » : 0 occurrence en cycle 4) : blocs figurés par du pseudo-code
indenté, `si / alors / sinon / fin si` prolongeant le `répéter / fin répéter` de 5e — convention
de rédaction, non prescrite. Idem pour l'affectation `mettre … dans …`, prolongement du
« demander … et mettre la réponse dans age » de 5e, quand « x prend la valeur v » est plus
répandu à l'écrit : à trancher pour tout le parcours (à répercuter en 3e). (2) La fiche donne les
six comparaisons, dont `≤`, `≥`, `≠`, quand beaucoup de langages par blocs n'offrent que `<`,
`=`, `>` ; choix de ne PAS montrer la reformulation (« `n ≤ 12` s'écrit `n < 13` pour un
entier »), aucun langage n'étant prescrit. (3) § 2.3 : `0 − n` calcule la distance à zéro sans
nommer la valeur absolue (hors cycle 4) — vérifier la cohérence avec la notation de l'opposé vue
en nombres relatifs.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
-->
