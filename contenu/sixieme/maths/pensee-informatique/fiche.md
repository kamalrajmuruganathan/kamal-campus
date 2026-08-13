---
id: 6e-math-pensee-informatique
titre: "Initiation à la pensée informatique"
voie: college
niveau: sixieme
parcours: maths
matiere: mathematiques
programme: "Programme de cycle 3 (2025) — applicable en 6e à la rentrée 2026"
duree_lecture_min: 9
prerequis:
  - Codage de déplacements sur quadrillage (CM1-CM2)
  - Programmes de calcul simples (CM2)
  - Programmes de construction géométrique simples (CM2)
statut: brouillon
relu_par: null
---

# Initiation à la pensée informatique

> Une machine — un robot, un ordinateur — ne devine rien. Elle fait **exactement ce que tu
> lui dis**, **dans l'ordre où tu le dis**, une chose après l'autre. Programmer, c'est écrire
> ces ordres assez clairement pour qu'il n'y ait aucune surprise à l'arrivée.

---

## 1. Le vocabulaire de base

| Mot | Ce que ça veut dire |
|---|---|
| **Instruction** | un ordre unique, que la machine sait faire (« avancer de 3 cases ») |
| **Séquence** | plusieurs instructions écrites **l'une sous l'autre**, dans un ordre |
| **Programme** | une séquence écrite pour **accomplir une tâche** précise |
| **Exécuter** | dérouler les instructions **une par une, de haut en bas** |

> **Une instruction** : `avancer de 3 cases`.
> **Une séquence** : `avancer de 3 cases`, puis `tourner à droite`, puis `avancer de 2 cases`.

On lit toujours une séquence **de haut en bas**, comme une recette : on ne saute pas de ligne,
on ne revient pas en arrière.

---

## 2. Les notions clés

### 2.1 La séquence : l'ordre compte

Une séquence n'est pas un tas d'ordres jetés en vrac. C'est une **liste rangée**. Si tu
changes l'ordre, tu changes le résultat.

> **Exemple.** Deux programmes de calcul, les mêmes instructions, un ordre différent.
>
> ```
> Programme A                Programme B
> choisir 3                  choisir 3
> ajouter 2                  multiplier par 5
> multiplier par 5           ajouter 2
> afficher                   afficher
> ```
>
> A : je pars de $3$, j'ajoute $2$ (ça fait $5$), je multiplie par $5$ (ça fait $25$). **A affiche 25.**
> B : je pars de $3$, je multiplie par $5$ (ça fait $15$), j'ajoute $2$. **B affiche 17.**
>
> $$\boxed{\text{Mêmes instructions} + \text{ordre différent} = \text{résultat différent}}$$

Chaque instruction travaille sur le **résultat de la précédente** : tu déroules pas à pas,
jamais tout d'un coup.

### 2.2 Les entrées et les sorties

- Une **entrée** : ce que le programme **reçoit** au départ (un nombre choisi, une touche
  appuyée, une mesure).
- Une **sortie** : ce qu'il **produit** à l'arrivée (un nombre affiché, un dessin, un
  déplacement, un son).

> **Exemple.** Dans le Programme A ci-dessus, l'**entrée** est le nombre choisi ($3$) et la
> **sortie** est le nombre affiché ($25$). Le programme, c'est ce qu'il y a **entre les deux**.

### 2.3 Répéter une séquence

Quand une même séquence revient **plusieurs fois de suite à l'identique**, on n'est pas obligé
de la réécrire. On dit combien de fois la répéter.

> **Exemple.** Pour tracer un carré, un robot fait quatre fois la même chose :
>
> ```
> avancer de 50
> tourner de 90°
> avancer de 50
> tourner de 90°
> avancer de 50
> tourner de 90°
> avancer de 50
> tourner de 90°
> ```
>
> On écrit plus court en indiquant la **répétition** :
>
> ```
> répéter 4 fois
>     avancer de 50
>     tourner de 90°
> fin répéter
> ```

> **Ce qui est répété** : seules les instructions **décalées vers la droite** sont dans la
> répétition. Ici, $4$ tours de $2$ instructions, soit $4 \times 2 = 8$ instructions exécutées.

### 2.4 Programmer un chemin

Un **chemin** est une suite de déplacements qui mène d'un point à un autre. On le programme
avec des instructions simples : `avancer`, `tourner à droite`, `tourner à gauche`.

> **Exemple.** Sur un quadrillage, pour aller de la case de départ jusqu'au trésor :
>
> ```
> avancer de 3 cases
> tourner à droite
> avancer de 2 cases
> ```
>
> Change une seule instruction et le robot n'arrive plus au même endroit. Là encore,
> **l'ordre et les nombres décident de tout.**

---

## 3. Méthodes — lire et écrire un algorithme court

### Méthode 1 — Exécuter une séquence pas à pas

Le réflexe attendu : **savoir où arrive la machine avant de la lancer**. Tu prends une ligne à
la fois et tu notes le résultat obtenu, sans sauter d'étape.

> **Exemple.** `choisir 4`, `ajouter 6`, `multiplier par 2`, `afficher`.
>
> $4 \xrightarrow{+6} 10 \xrightarrow{\times 2} 20$. **Sortie : 20.**

### Méthode 2 — Produire une séquence pour une tâche

Pour écrire un programme, tu décris la tâche en **petites étapes**, chacune assez simple pour
être **une seule instruction**. Puis tu les ranges dans le bon ordre.

> **Exemple.** « Aller tout droit sur $5$ cases, puis tourner et faire $2$ cases » devient :
>
> ```
> avancer de 5 cases
> tourner à gauche
> avancer de 2 cases
> ```

### Méthode 3 — Répéter à la main une séquence

Quand on te donne une répétition, tu peux la **dérouler entièrement à la main** pour vérifier.
Écris chaque tour, l'un après l'autre, jusqu'au dernier.

> **Exemple.** `répéter 3 fois : (avancer de 10, tourner à droite)` se déroule ainsi :
>
> ```
> avancer de 10 · tourner à droite   (1er tour)
> avancer de 10 · tourner à droite   (2e tour)
> avancer de 10 · tourner à droite   (3e tour)
> ```
>
> Soit $3 \times 2 = 6$ instructions en tout.

### Méthode 4 — Programmer la construction d'un chemin simple

1. Repère le **point de départ** et le **point d'arrivée**.
2. Décris le trajet comme une suite d'`avancer` et de `tourner`.
3. Si un même motif revient, utilise une **répétition** pour raccourcir.

> **Exemple.** Faire faire un aller-retour au robot : avancer, faire demi-tour, revenir.
>
> ```
> avancer de 4 cases
> tourner de 180°
> avancer de 4 cases
> ```

---

## 4. Pièges de lecture

- **On lit strictement de haut en bas.** Une instruction plus bas ne s'exécute qu'**après**
  celles du dessus.
- **Chaque étape part du résultat de la précédente.** Un programme de calcul se déroule pas à
  pas, il ne se lit pas comme une grande expression.
- **Le décalage a un sens** : il dit ce qui est **dans** la répétition, donc ce qui est répété.
- **La machine ne corrige pas ton intention.** Elle fait ce qui est écrit, pas ce que tu
  voulais écrire.

---

## 5. À retenir absolument

| | |
|---|---|
| Instruction | un ordre unique |
| Séquence | des instructions **dans un ordre**, lues de haut en bas |
| Programme | une séquence pour accomplir une tâche |
| Entrée / sortie | ce que le programme **reçoit** / ce qu'il **produit** |
| Ordre | le changer change le résultat |
| Répétition | `répéter n fois` — la séquence décalée est refaite $n$ fois |
| Instructions exécutées | (nombre de tours) $\times$ (instructions dans le bloc) |
| Chemin | une suite d'`avancer` et de `tourner` |

---

## 6. Les erreurs qui coûtent des points

1. **Changer l'ordre des instructions** en croyant que ça ne change rien : `choisir 3, ajouter 2,
   multiplier par 5` donne $25$, mais `choisir 3, multiplier par 5, ajouter 2` donne $17$.
2. **Lire un programme de calcul comme un seul calcul** au lieu de le dérouler étape par étape.
3. **Confondre entrée et sortie** : l'entrée est ce qu'on donne au départ, la sortie ce qu'on
   obtient à la fin.
4. **Compter les instructions écrites au lieu des instructions exécutées** : `répéter 4 fois`
   sur $2$ instructions en fait exécuter $8$.
5. **Oublier ce qui est décalé** : seules les instructions à l'intérieur du bloc `répéter` sont
   répétées ; ce qui est écrit en dehors ne l'est pas.
6. **Se tromper de sens de rotation** (droite / gauche) ou de nombre de cases : le robot arrive
   alors sur une autre case.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-college-cycle3-maths-2025.txt — thème « Initiation à la pensée
informatique ». Chapeau du thème lignes 1484-1498 (contexte cycle 2/3 : codages de
déplacements, programmes de calcul, programmes de construction géométrique) ; rappels CM1/CM2
lignes 1499-1542 (programmes de calcul « choisir un nombre / ajouter / multiplier / écrire »,
programmes de construction). Section « Sixième » lignes 1543-1552 (SEULE source des contenus
propres au niveau).

Les 4 objectifs d'apprentissage de la section Sixième sont couverts :
- « Identifier une instruction ou une séquence d'instructions » → § 1 et 2.1
- « Produire et exécuter une séquence d'instructions » → méthodes 1 et 2
- « Répéter à la main une séquence d'instructions pour accomplir une tâche imposée » → 2.3 et
  méthode 3
- « Programmer la construction d'un chemin simple » → 2.4 et méthode 4
Les notions annoncées dans le chapeau de la section 6e (instructions, séquences, entrées,
sorties, répétitions) sont toutes présentes : § 1, 2.1, 2.2, 2.3.

CONTINUITÉ AVEC LA 5e (contenu/cinquieme/maths/pensee-informatique/fiche.md) :
conventions de pseudo-code reprises À L'IDENTIQUE — blocs indentés, `avancer de 50`,
`tourner de 90°`, programme de calcul `choisir / ajouter / multiplier / afficher`,
`répéter n fois … fin répéter`, exemple carré A/B (25 vs 17). Objectif : que l'élève retrouve
la même écriture d'une année sur l'autre. La 5e ajoute ENSUITE variable (lecture), expression
informatique et priorités, boucle « inconditionnelle » nommée : VOLONTAIREMENT ABSENTS ici.

PÉRIMÈTRE 6e — ce qui n'est PAS traité, à confirmer par le relecteur :
- Pas de variable formelle (nom désignant une donnée) : le texte de 6e ne l'introduit pas ;
  les programmes de calcul manipulent « le nombre » sans le nommer. C'est en 5e que la
  variable apparaît (en lecture).
- Pas de priorités opératoires ni d'« expression informatique » : un programme de calcul de
  6e se déroule étape par étape (séquentiel), il n'est pas une expression à parenthéser.
  C'est ce qui justifie le § 2.1 et l'erreur 2.
- « Répétitions » est présenté comme le fait de répéter une séquence (et de la dérouler à la
  main) ; le terme « boucle inconditionnelle » et la notation formelle relèvent de la 5e. Le
  bloc `répéter n fois` est ici une simple écriture abrégée, cohérente avec la 5e.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le texte cite « robot ou logiciel de programmation graphique par blocs comme Scratch » : la
  fiche ne nomme aucun logiciel et figure les blocs par du pseudo-code indenté. À valider comme
  représentation acceptable, cohérente avec le choix fait en 5e.
- Sortie d'un programme de calcul écrite `afficher` (comme en 5e) alors que le BO écrit « écrire
  le nombre obtenu ». Choix de continuité ; à valider.
- Angle `tourner de 90°` / `180°` pour le carré et le demi-tour : cohérence à vérifier avec la
  progression de géométrie de 6e (angles droits, demi-tours). Le raccourci 360 ÷ n n'est PAS
  posé ici (il l'est en 5e), pour rester au niveau 6e.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ni à un site.
Statut : brouillon, non relu.
-->
