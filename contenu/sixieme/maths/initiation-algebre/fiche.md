---
id: 6e-math-initiation-algebre
titre: "Initiation à la pensée algébrique"
voie: college
niveau: sixieme
parcours: maths
matiere: mathematiques
programme: "Programme de cycle 3 (2025) — applicable en 6e à la rentrée 2026"
duree_lecture_min: 9
prerequis:
  - Suites de nombres et régularités (CM1-CM2)
  - Les quatre opérations sur les entiers (6e)
statut: brouillon
relu_par: null
---

# Initiation à la pensée algébrique

> Faire de l'algèbre, ce n'est pas d'abord une histoire de lettres. C'est apprendre à
> raisonner sur les **relations entre des quantités** — repérer ce qui se répète,
> deviner ce qui vient ensuite — même quand on ne connaît pas encore tous les nombres.

---

## 1. La pensée algébrique, c'est quoi ?

**Penser de façon algébrique**, c'est réfléchir à un problème en s'intéressant aux
**relations entre les quantités** plutôt qu'à leurs valeurs exactes.

Autrement dit : tu ne cherches pas seulement *combien ça fait*, tu cherches *comment
les choses sont reliées* et *comment elles évoluent*.

> **Exemple.** « Léa a 2 billes de plus que Tom. » Tu ne connais ni le nombre de billes
> de Léa, ni celui de Tom. Mais tu connais déjà une **relation** entre les deux :
> l'écart est de $2$. C'est déjà de la pensée algébrique.

> ⚠️ **En 6e, on n'utilise pas de lettres comme $x$.** Les lettres «&nbsp;officielles&nbsp;»
> (le calcul littéral) arrivent seulement au cycle 4, en 5e-4e-3e. Ici, on reste sur du
> **concret et du visuel**. Une quantité inconnue s'exprime avec des **mots**, des
> **dessins** ou des **schémas** — pas avec des lettres.

---

## 2. Les notions clés

### Une quantité inconnue

Une quantité inconnue, c'est un nombre qu'on ne connaît pas encore, mais dont on parle
quand même. On le remplace par un **mot**, une **case vide** ou un **dessin**.

> **Exemple.** « Je pense à un nombre. » On peut le noter par une case&nbsp;: $\boxed{\ ?\ }$.
> Si on sait que ce nombre plus $4$ donne $10$, on écrit&nbsp;: $\boxed{\ ?\ } + 4 = 10$.

### Un motif évolutif

Un **motif évolutif** est une suite de figures (ou de nombres) qui grandit **étape après
étape**, toujours de la même façon.

> **Exemple.** Un motif fait d'allumettes&nbsp;:
> étape 1 → $4$ allumettes, étape 2 → $7$, étape 3 → $10$…
> À chaque étape, on **ajoute 3**.

### Une régularité

La **régularité**, c'est ce qui **se répète** d'une étape à la suivante. C'est la règle
du jeu du motif.

> **Exemple.** Dans le motif $4, 7, 10, 13,\dots$ la régularité est&nbsp;: **« on ajoute
> toujours $3$ »**. Dans $2, 6, 18, 54,\dots$ la régularité est&nbsp;: **« on multiplie
> toujours par $3$ »**.

### La structure d'un motif

La **structure**, c'est la relation qui relie **le numéro de l'étape** au **résultat**,
sans avoir à tout compter étape par étape.

> **Exemple.** Motif $4, 7, 10, 13,\dots$. On remarque que le nombre d'allumettes est
> toujours **le triple du numéro de l'étape, plus 1**&nbsp;:
> étape 1 → $3 \times 1 + 1 = 4$, étape 2 → $3 \times 2 + 1 = 7$, étape 3 → $3 \times 3 + 1 = 10$.
> La structure permet de sauter directement à l'étape 100 sans dessiner les 99 précédentes.

### Un schéma en barres

Un **schéma en barres** représente les quantités par des **rectangles** (des barres)
que l'on partage en parts égales. C'est un outil pour **voir** un problème et le résoudre
sans lettres.

> **Exemple.** « Un ruban de $48$ cm est partagé en $4$ morceaux égaux. »
>
> ```
> |----|----|----|----|   = 48 cm
> ```
> Les $4$ parts valent $48$ ensemble, donc une part vaut $48 \div 4 = 12$ cm.

---

## 3. Les stratégies de résolution

L'objectif du programme est double&nbsp;: **identifier la structure d'un motif évolutif**
et **utiliser des modèles pré-algébriques** (comme les schémas en barres) pour résoudre
des problèmes à nombre inconnu.

### Stratégie 1 — Identifier la structure d'un motif évolutif

1. **Repère la régularité** : que se passe-t-il d'une étape à la suivante ? (on ajoute ?
   on multiplie ?)
2. **Vérifie-la** sur deux ou trois étapes de suite.
3. **Cherche la structure** : comment relier le numéro de l'étape au résultat, d'un seul
   coup ?

> **Exemple.** Motif $5, 8, 11, 14,\dots$
> - Régularité : **on ajoute $3$** à chaque étape.
> - Structure : le résultat est **le triple du numéro de l'étape, plus 2**
>   ($3 \times 1 + 2 = 5$, $3 \times 2 + 2 = 8$…).
> - Étape 10 : $3 \times 10 + 2 = 32$. Pas besoin de tout dessiner.

### Stratégie 2 — Résoudre avec un schéma en barres

1. **Dessine une barre** pour chaque quantité.
2. **Découpe en parts égales** ce que l'énoncé compare.
3. **Reporte le total** connu, puis **remonte** à la valeur d'une part.

> **Exemple.** « Léa a $3$ fois plus de billes que Tom. Ensemble, ils en ont $48$. »
>
> ```
> Tom :  |----|                       (1 part)
> Léa :  |----|----|----|             (3 parts)
> ```
> En tout : $1 + 3 = 4$ parts égales pour $48$ billes.
> Une part : $48 \div 4 = 12$. Donc **Tom a $12$ billes** et **Léa en a $36$**.

### Stratégie 3 — Retrouver un nombre inconnu «&nbsp;en remontant&nbsp;»

Quand une suite d'opérations mène à un résultat connu, on **annule les opérations dans
l'ordre inverse** pour retrouver le nombre de départ.

> **Exemple.** « Je pense à un nombre, je le multiplie par $2$, puis j'ajoute $3$&nbsp;:
> j'obtiens $17$. »
> On remonte à l'envers : d'abord **enlever $3$** ($17 - 3 = 14$), puis **diviser par $2$**
> ($14 \div 2 = 7$). Le nombre était $7$.
> Vérification : $7 \times 2 + 3 = 17$ ✓.

---

## 4. Pièges à éviter

- **Régularité additive ou multiplicative ?** Dans $2, 6, 18, 54$, on **multiplie** par
  $3$ — on n'ajoute pas $4$ (même si $6 - 2 = 4$, l'écart change ensuite).
- **Une part n'est pas le total.** Dans un schéma en barres, ce que tu cherches est
  souvent **une seule part**, pas la somme de toutes les parts.
- **L'ordre compte quand on remonte.** Pour annuler «&nbsp;$\times 2$ puis $+3$&nbsp;», on
  fait «&nbsp;$-3$ puis $\div 2$&nbsp;», dans **l'ordre inverse**.

---

## 5. Tableau récapitulatif

| Mot | Ce que ça veut dire |
|---|---|
| Pensée algébrique | raisonner sur les **relations** entre quantités, pas sur les valeurs exactes |
| Quantité inconnue | un nombre qu'on ne connaît pas, noté par un **mot, un dessin ou une case** |
| Motif évolutif | une suite de figures ou de nombres qui grandit **toujours de la même façon** |
| Régularité | ce qui **se répète** d'une étape à la suivante (on ajoute ? on multiplie ?) |
| Structure | la relation entre **le numéro de l'étape** et **le résultat** |
| Schéma en barres | des **rectangles partagés en parts égales** pour voir et résoudre un problème |
| Lettres ($x$) | **pas en 6e** — elles arrivent au cycle 4 |

---

## 6. Les erreurs qui coûtent des points

1. **Confondre régularité additive et multiplicative** : lire $2, 6, 18$ comme « on
   ajoute 4 » au lieu de « on multiplie par 3 ».
2. **Deviner l'étape suivante sans vérifier la régularité** sur plusieurs étapes d'abord.
3. **Confondre une part et le total** dans un schéma en barres.
4. **Oublier le «&nbsp;+ quelque chose&nbsp;» de la structure** : écrire « le triple du
   numéro » alors que c'est « le triple du numéro **plus 1** ».
5. **Remonter dans le mauvais ordre** : diviser avant d'enlever, au lieu de l'inverse.
6. **Vouloir utiliser des lettres comme $x$** : hors programme en 6e, on reste sur mots,
   dessins et schémas.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : /tmp/kamal-campus/docs/programme-college-cycle3-maths-2025.txt,
« Programme de cycle 3 (2025) », niveau Sixième, entrée « Algèbre », lignes 885 à 901.

Éléments explicitement lisibles dans la source et repris tels quels :
- « raisonner sur les relations entre des quantités plutôt que sur les valeurs
  elles-mêmes » (l. 890-891) → section 1
- « représentations visuelles et des outils […] tels que les motifs évolutifs et les
  schémas en barre » (l. 892-893) → sections 2 et 3
- « les quantités inconnues sont exprimées à l'aide de mots, de dessins ou
  éventuellement de lettres » (l. 894-895) → notion « quantité inconnue »
- « Ce n'est qu'au cycle 4 que les lettres seront introduites de manière formelle […]
  ce n'est pas un objectif prioritaire en 6e » (l. 895-896) → encadrés d'avertissement
- Objectifs (l. 898-901) : « Résoudre des problèmes mettant en jeu des nombres inconnus »,
  « Utiliser des modèles pré-algébriques pour résoudre des problèmes algébriques »,
  « Identifier la structure d'un motif évolutif en repérant une régularité et en
  identifiant une structure » → sections 3 (stratégies) et titres des notions.

BRIÈVETÉ VOULUE ET CONFORME : ce chapitre est délibérément court et concret. La source
officielle est brève (17 lignes), insiste sur le caractère non prioritaire de
l'abstraction en 6e et interdit le calcul littéral formel. Étendre artificiellement la
fiche reviendrait à sortir du périmètre du programme. La longueur est donc en dessous de
la fourchette habituelle (180-280 lignes) de façon assumée.

À CONFRONTER AU PROGRAMME / À SOUMETTRE AU RELECTEUR :
- PÉRIMÈTRE CENTRAL : aucun calcul littéral (pas de x). Confirmer qu'aucun des exemples
  (structure « triple du numéro + 1 », remontée d'opérations) n'est perçu comme du calcul
  littéral déguisé — tout est formulé en mots, conformément à la source.
- La « stratégie 3 » (retrouver un nombre inconnu en remontant les opérations) n'est pas
  nommée explicitement dans la source ; elle découle de « Résoudre des problèmes mettant
  en jeu des nombres inconnus » (l. 898). À valider : est-ce dans l'esprit du programme
  ou faut-il la retirer ?
- Vocabulaire « motif évolutif », « régularité », « structure » : repris mot pour mot de
  la source. Vérifier qu'on n'attend pas un vocabulaire d'accompagnement plus précis.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
