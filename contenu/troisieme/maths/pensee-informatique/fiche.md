---
id: 3e-math-pensee-informatique
titre: "La pensée informatique"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Représenter une condition simple, les six comparaisons (4e — « La pensée informatique »)
  - Instruction conditionnelle « si … alors … sinon … fin si » (4e — « La pensée informatique »)
  - Manipuler une variable, « mettre … dans … », initialiser un compteur (4e — « La pensée informatique »)
  - Boucle inconditionnelle « répéter n fois » (5e — « La pensée informatique »)
statut: brouillon
relu_par: null
---

# La pensée informatique

> En 5e, ton programme répétait un nombre de tours **décidé à l'avance**. En 4e, il **testait**
> une donnée. En 3e, il fait les deux à la fois : il répète **tant que** quelque chose reste
> vrai — et il s'arrête tout seul. Encore faut-il qu'il s'arrête.

---

## 1. Ce que la 3e ajoute

Ce chapitre s'appuie entièrement sur ceux de 5e et de 4e : instruction, séquence, entrée, sortie,
expression informatique, `répéter n fois`, condition simple, `si … alors … sinon`, `mettre … dans
…`. Rien de tout cela n'est repris ici — si un mot te manque, retourne le chercher là-bas. Quatre
apports : des variables qui **travaillent ensemble**, des conditions **composées** (`et`, `ou`), la
**boucle conditionnelle** `tant que` — le cœur du chapitre — et des programmes **structurés**.

> **La convention d'écriture ne change pas.** Comme en 5e et en 4e, les lignes se lisent **de haut
> en bas** et le **décalage vers la droite** dit ce qui est à l'intérieur d'un bloc. `répéter` se
> ferme par `fin répéter`, `si` par `fin si` ; le nouveau bloc `tant que … faire` se fermera par
> `fin tant que`.

---

## 2. Les notions clés

### 2.1 Approfondir les variables — plusieurs valeurs à la fois

En 4e, tu modifiais **une** variable. En 3e, plusieurs évoluent ensemble, et l'ordre des lignes
devient décisif : chaque `mettre … dans …` **écrase** immédiatement, donc une valeur qu'on n'a pas
mise à l'abri est perdue pour de bon.

> **Exemple — échanger deux variables.** `a` vaut $3$, `b` vaut $8$. `mettre b dans a` puis
> `mettre a dans b` **ne marche pas** : la première ligne détruit le $3$, donc la seconde recopie
> $8$ dans `b` et les deux valent $8$. Il faut une **variable temporaire** : `mettre a dans t`,
> puis `mettre b dans a`, puis `mettre t dans b`. `t` garde le $3$, `a` reçoit $8$, `b` récupère
> le $3$ ✓

Deux usages à ne pas confondre, tous deux **initialisés à $0$** avant la boucle et mis à jour à
chaque tour :

| | Ce qu'elle fait | Ligne typique | Sur les notes $12$ et $8$ |
|---|---|---|---|
| **Compteur** | compte **combien de fois** | `mettre c + 1 dans c` | finit à $2$ |
| **Accumulateur** | additionne **les valeurs** | `mettre s + note dans s` | finit à $20$ |

### 2.2 Les conditions composées — `et`, `ou`

On relie deux conditions simples pour en fabriquer une seule, elle aussi vraie ou fausse.

$$\boxed{\text{« A et B » vraie si les deux le sont} \qquad \text{« A ou B » vraie dès qu'une l'est}}$$

| `A` | `B` | `A et B` | `A ou B` |
|---|---|---|---|
| vraie | vraie | **vraie** | **vraie** |
| vraie | fausse | fausse | **vraie** |
| fausse | vraie | fausse | **vraie** |
| fausse | fausse | fausse | fausse |

⚠️ Le `ou` de l'informatique est **inclusif** : « A ou B » reste vraie quand les deux le sont. Ce
n'est pas le « fromage ou dessert » de la cantine.

> **Exemple 1 — un encadrement.** « $n$ est compris entre $10$ et $20$, bornes comprises » s'écrit
> `n ≥ 10 et n ≤ 20` : la machine ne compare que **deux nombres à la fois**, un encadrement se
> coupe donc toujours en deux. Avec `ou`, la condition serait vraie **pour tous les nombres** :
> $100$ n'est pas $\leqslant 20$, mais il est $\geqslant 10$, et un seul « vrai » suffit.

> **Exemple 2 — deux catégories.** « Le tarif réduit s'applique aux moins de $12$ ans **et** aux
> $65$ ans ou plus » se traduit par `age < 12 ou age ≥ 65` : le « et » de la phrase **énumère deux
> catégories**, et devient un `ou` logique car aucun âge ne vérifie les deux conditions à la fois.
> Avec `et`, plus personne n'aurait le tarif réduit.

### 2.3 La boucle conditionnelle — `tant que`

C'est **l'apport principal de la 3e**. Elle répète une séquence **tant qu'une condition reste
vraie** : le nombre de tours n'est **pas** connu à l'avance, c'est la condition qui décide.

```
tant que <condition> faire
    <instructions répétées>
fin tant que
```

Le cycle est toujours le même : la machine **teste** la condition ; **vraie**, elle exécute le bloc
décalé **en entier** puis **revient au test** ; **fausse**, elle saute le bloc et continue **après
`fin tant que`**.

> **Exemple.**
>
> ```
> mettre 1 dans n
> tant que n < 20 faire
>     mettre n * 2 dans n
> fin tant que
> afficher n
> ```
> Déroulé : $1 \rightarrow 2 \rightarrow 4 \rightarrow 8 \rightarrow 16 \rightarrow 32$. Au
> cinquième test, $16 < 20$ est **encore vrai** : un tour de plus. Puis $32 < 20$ est faux, on
> sort. Sortie : $\boxed{32}$, et non $16$.

Trois conséquences à connaître par cœur : **zéro tour est possible** (le test a lieu **avant** le
premier tour — avec `mettre 50 dans n`, `n < 20` est fausse d'entrée et le bloc n'est **jamais**
exécuté) ; **la condition n'est testée qu'entre deux tours**, donc un tour commencé va toujours
jusqu'à `fin tant que` ; **la valeur finale ne vérifie plus la condition**, c'est même la raison
pour laquelle on est sorti.

### 2.4 La terminaison — la boucle qui ne s'arrête jamais

`répéter n fois` s'arrête forcément : $n$ est écrit dessus. Une boucle `tant que` ne s'arrête que
si **la condition finit par devenir fausse**. Sinon le programme tourne **à l'infini** — sans
message, sans erreur, sans rien afficher. C'est le piège caractéristique du chapitre. Avant
d'exécuter, pose-toi **trois questions** : la variable testée est-elle **initialisée** avant la
boucle ? le bloc **modifie-t-il ce qui est testé** ? la condition **devient-elle réellement
fausse**, et dans le bon sens ?

> **Cas 1 — la condition n'est jamais touchée.**
>
> ```
> mettre 0 dans s
> mettre 1 dans i
> tant que i ≤ 5 faire
>     mettre s + i dans s
> fin tant que
> ```
> `i` vaut $1$ pour toujours, donc `i ≤ 5` est vraie à chaque test : il manque
> `mettre i + 1 dans i` **dans** le bloc.

> **Cas 2 — la valeur d'arrêt est « sautée ».**
>
> ```
> mettre 10 dans n
> tant que n ≠ 0 faire
>     mettre n − 3 dans n
> fin tant que
> ```
> `n` vaut $10$, $7$, $4$, $1$, $-2$, $-5$, … : elle **change bien**, mais elle n'est **jamais
> exactement $0$** — elle enjambe la seule valeur qui arrêterait la boucle. Avec `n > 0`, le
> programme s'arrête dès $-2$ ✓ Une variable qui bouge ne suffit donc pas : un test d'égalité
> (`=`, `≠`) est fragile, un test d'inégalité (`<`, `>`, `≤`, `≥`) bien plus sûr.

### 2.5 Structurer un programme

Un programme de 3e est trop long pour être lu d'un bloc. On le **structure en trois temps** :
**préparation** (les entrées, l'initialisation de chaque variable) · **traitement** (la boucle et
les tests qu'elle contient) · **conclusion** (l'affichage, **après** la boucle). Deux réflexes s'y
ajoutent : **imbriquer** — un `si` peut vivre dans une boucle, chaque bloc étant refermé par sa
propre ligne `fin …` — et **nommer** les variables par ce qu'elles contiennent : `compteur` et
`total` se relisent, `x` et `y` non.

> **Exemple.** Compter les notes qui atteignent la moyenne, sur cinq notes saisies :
>
> ```
> mettre 0 dans compteur
> mettre 0 dans total
> répéter 5 fois
>     demander une note et la mettre dans note
>     mettre total + note dans total
>     si note ≥ 10 alors
>         mettre compteur + 1 dans compteur
>     fin si
> fin répéter
> afficher compteur
> ```
> Sur $12$, $8$, $15$, $10$, $6$ : `compteur` vaut $3$ (le $10$ compte, `≥` inclut l'égalité) et
> `total` vaut $51$. Deux décalages, deux niveaux : le `si` est **dans** la boucle, et
> `mettre compteur + 1 dans compteur` est **dans** le `si`.

---

## 3. Méthodes

### Méthode 1 — Dérouler une boucle conditionnelle

Un tableau de suivi, avec **une colonne pour le test** : c'est elle qui explique la sortie.

> **Exemple**, saisie $30$ :
>
> ```
> demander un nombre et le mettre dans s
> mettre 0 dans t
> tant que s ≥ 7 faire
>     mettre s − 7 dans s
>     mettre t + 1 dans t
> fin tant que
> afficher t
> ```
>
> | Test `s ≥ 7` | | `s` | `t` |
> |---|---|---|---|
> | *(avant la boucle)* | | $30$ | $0$ |
> | $30 \geqslant 7$ **vrai** | tour 1 | $23$ | $1$ |
> | $23 \geqslant 7$ **vrai** | tour 2 | $16$ | $2$ |
> | $16 \geqslant 7$ **vrai** | tour 3 | $9$ | $3$ |
> | $9 \geqslant 7$ **vrai** | tour 4 | $2$ | $4$ |
> | $2 \geqslant 7$ **faux** | sortie | $2$ | $4$ |
>
> Sortie : $4$. Ce programme calcule le **quotient** de la division de $30$ par $7$, et `s` finit
> sur le **reste** : $30 = 4 \times 7 + 2$ ✓

### Méthode 2 — Traduire une phrase, puis choisir sa boucle

1. Découpe la phrase en **conditions simples**, une comparaison chacune, puis choisis le lien :
   faut-il que **tout** soit vrai (`et`) ou qu'**une seule** suffise (`ou`) ?
2. Teste un nombre par cas, dont un **pile sur chaque borne**. Si ta condition est vraie pour un
   nombre qui ne devrait pas convenir, tu as écrit `ou` au lieu de `et` ; si elle n'est vraie pour
   personne, c'est l'inverse.
3. Pour la boucle, **une seule question** : le nombre de tours est-il connu avant de commencer ?
   Oui (tracer un carré, saisir cinq notes) → `répéter n fois`. Non → `tant que`. « Jusqu'à ce
   que », « tant que », « on ne sait pas combien » annoncent une boucle **conditionnelle**.

### Méthode 3 — Écrire un programme qui atteint un objectif

Écris l'objectif en français et repère l'**entrée** et la **sortie** · choisis la boucle, puis la
**condition d'arrêt** : quand doit-elle devenir fausse ? · **initialise** tout ce que la condition
teste · vérifie les **trois questions de la terminaison** (§ 2.4) · déroule à la main **deux
exemples**, dont un **cas limite**.

> **Exemple.** Objectif : afficher le plus petit multiple de $7$ **strictement** supérieur à `n`.
>
> ```
> demander un nombre et le mettre dans n
> mettre 7 dans m
> tant que m ≤ n faire
>     mettre m + 7 dans m
> fin tant que
> afficher m
> ```
> $n = 30$ : `m` passe par $7, 14, 21, 28$, puis $35$, et $35 \leqslant 30$ est faux → $35$ ✓
> Cas limite $n = 28$ : $28 \leqslant 28$ est **vrai**, donc un tour de plus → $35$ ✓ C'est le `≤`
> qui assure le « strictement supérieur » ; avec `<`, le programme afficherait $28$.

---

## 4. Pièges de lecture

- **Le test se lit avant le bloc, pas après** : une condition fausse au départ donne **zéro tour**.
- **Un tour commencé se termine** : la condition n'est pas surveillée pendant le tour.
- **`et` et `ou` ne se lisent pas comme en français** : c'est la table de vérité qui tranche.

---

## 5. À retenir absolument

| | |
|---|---|
| `A et B` / `A ou B` | vraie si **les deux** le sont / dès qu'**une** l'est (`ou` **inclusif**) |
| Encadrement | « entre $10$ et $20$ inclus » → `n ≥ 10 et n ≤ 20`, jamais un `ou` |
| `tant que … faire` | on teste **avant** chaque tour ; **zéro tour** est possible |
| Nombre de tours | **inconnu à l'avance** — c'est la condition qui décide |
| Valeur finale | elle **ne vérifie plus** la condition : c'est pour ça qu'on est sorti |
| Terminaison | le bloc doit **modifier ce qui est testé**, et la condition **devenir fausse** |
| `≠` dans un test | fragile : la valeur d'arrêt peut être **sautée** — préfère `<` ou `>` |
| Échanger deux variables | il faut une **troisième** variable |
| Structurer | préparation (initialiser) · traitement (boucle) · conclusion (afficher) |

---

## 6. Les erreurs qui coûtent des points

1. **Croire qu'une boucle `tant que` s'exécute au moins une fois.** Le test est fait **avant** : si
   la condition est fausse au départ, le bloc est entièrement sauté.
2. **Répondre la dernière valeur qui vérifiait la condition.** Sur `mettre 1 dans n` et
   `tant que n < 20`, la sortie est $32$, pas $16$ : la machine fait toujours le tour de trop qui
   la fait sortir.
3. **Oublier de faire progresser la variable testée** — le `mettre i + 1 dans i` resté hors du
   bloc. Le programme ne plante pas : il tourne à l'infini, sans rien afficher.
4. **Tester avec `≠` une variable qui avance de $3$ en $3$** : elle enjambe la valeur d'arrêt et la
   boucle ne s'arrête jamais. Un test d'inégalité pardonne, un test d'égalité non.
5. **Écrire un encadrement avec `ou`** : `n ≥ 10 ou n ≤ 20` est vraie pour **tous** les nombres. Et
   à l'inverse, relier par `et` deux catégories qui s'excluent (`age < 12 et age ≥ 65`) donne une
   condition vraie pour **personne**.
6. **Échanger deux variables sans variable temporaire** : après `mettre b dans a` puis
   `mettre a dans b`, les deux contiennent l'ancien `b`.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle4-maths-2026.txt, thème « La pensée informatique » — chapeau
l. 1071-1075, section « Troisième » l. 1098-1106 (seule source des contenus), cadrage l. 302-321.
Chapitres de 5e et de 4e lus intégralement, notes de production comprises : conventions de
pseudo-code, vocabulaire et découpage repris à l'identique, prérequis cités en en-tête et au § 1,
contenus de 5e et de 4e NON répétés (aucune redéfinition d'instruction, séquence, entrée/sortie,
expression informatique, condition simple, `si … alors … sinon`, `répéter n fois`, affectation).

Couverture des 5 objectifs : « approfondir la notion de variables » (l. 1102) → § 2.1 (variables
simultanées, échange avec temporaire, compteur vs accumulateur) · « conditions composées »
(l. 1103) → § 2.2 et méthode 2 · « boucle conditionnelle » (l. 1104) → § 2.3 et 2.4, méthodes 1
et 2, traitée comme l'apport central du niveau conformément à la vérification faite en 4e ·
« structurer des programmes » (l. 1105) → § 2.5 · « écrire un programme … pour réaliser un
objectif » (l. 1106) → méthode 3. Chapeau l. 1099-1100 : « approfondis » → aucune notion nouvelle
hors ces cinq ; « autonomie d'écriture » → § 2.5 et méthode 3.

⚠️ CONVENTION `tant que … faire` / `fin tant que` : prolongement direct de `répéter … / fin
répéter` (5e) et `si … alors … sinon / fin si` (4e). Le programme ne prescrit aucune syntaxe et ne
nomme aucun logiciel (« programmation impérative par blocs », l. 1072 ; « Scratch » : 0 occurrence
en cycle 4). L'auteur de la 4e demandait que le choix de `mettre … dans …` (plutôt que « x prend la
valeur v ») soit RÉPERCUTÉ EN 3e : c'est fait à l'identique, y compris `demander … et le mettre
dans …`, `afficher`, l'indentation de 4 espaces et les six comparateurs dont `≤`, `≥`, `≠`. Ces
trois conventions forment un ensemble : à trancher en une fois pour le parcours 5e-4e-3e.

⚠️ L'objectif l. 1106 est écrit « Écrire un programme DONNÉ pour réaliser un objectif » (même
formulation qu'en 4e, l. 1096, où elle est déjà signalée) : « donné » contredit « écrire ». Lu ici,
comme en 4e, comme « écrire un programme pour réaliser un objectif » (méthode 3), en cohérence avec
« autonomie d'écriture de programme ». À CONFRONTER AU PDF : même anomalie aux deux niveaux.

⚠️ PÉRIMÈTRE, à trancher par le relecteur. (1) « Structurer des programmes » (l. 1105) n'est pas
explicité par le texte. Lecture retenue : découpage préparation / traitement / conclusion,
imbrication d'un `si` dans une boucle, nommage des variables (§ 2.5). Lecture NON retenue faute
d'appui : les sous-programmes (« définir un bloc » réutilisable), autre interprétation naturelle que
proposent certains langages par blocs — s'ils sont attendus, il manque une sous-section. (2) La
TERMINAISON (§ 2.4) n'est pas nommée par le programme : elle est déduite de « utiliser une boucle
conditionnelle », dont c'est la difficulté propre. Traitée à fond (deux causes : condition jamais
modifiée, valeur d'arrêt enjambée) à la demande de la commande de production ; à valider comme
attendu de 3e et non comme un ajout. (3) La négation d'une condition composée (De Morgan) n'est PAS
abordée — jugée hors périmètre du cycle 4, frontière à confirmer. (4) § 2.2 : le caractère INCLUSIF
du `ou` est affirmé alors qu'aucun langage n'est prescrit ; même réserve qu'en 4e sur `≤`, `≥`,
`≠`, absents de beaucoup de langages par blocs. (5) Méthode 1 : la division par soustractions
successives fait le lien avec la division euclidienne (quotient et reste) — cohérence à vérifier
avec la progression « nombres et calculs » de 3e ; ce vocabulaire est employé sans être redéfini.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
-->
