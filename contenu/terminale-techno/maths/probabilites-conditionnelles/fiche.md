---
id: tale-techno-math-probabilites-conditionnelles
titre: "Probabilités conditionnelles"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Probabilités et variables aléatoires (Première technologique)
  - Vocabulaire ensembliste — intersection, complémentaire (Terminale techno)
  - Proportions et pourcentages (automatismes)
statut: brouillon
relu_par: null
---

# Probabilités conditionnelles

> « 5 % des pièces de la machine 2 sont défectueuses » et « 5 % des pièces
> défectueuses viennent de la machine 2 » : deux phrases qui se ressemblent,
> deux probabilités **totalement différentes**. Ce chapitre te donne l'outil pour
> ne plus jamais les confondre — la probabilité conditionnelle — et le schéma
> qui fait tous les calculs à ta place : l'**arbre pondéré**.

---

## 1. La probabilité conditionnelle $P_A(B)$

### Définition

$A$ et $B$ sont deux événements, avec $P(A) \neq 0$. La **probabilité de $B$
sachant $A$** est la probabilité que $B$ se réalise **quand on sait déjà que
$A$ est réalisé** :

$$\boxed{P_A(B) = \frac{P(A \cap B)}{P(A)}}$$

Concrètement : on **restreint l'univers à $A$**. $P_A(B)$ est la proportion,
**parmi les issues de $A$**, de celles qui réalisent aussi $B$.

> **Exemple (clientèle).** Une salle de sport compte $200$ clients : $120$ ont un
> abonnement annuel (événement $A$), $80$ utilisent l'appli mobile ($M$), et $60$
> cumulent les deux. On choisit un client au hasard.
>
> $$P(A) = \frac{120}{200} = 0{,}6 \qquad P(A \cap M) = \frac{60}{200} = 0{,}3$$
>
> Probabilité qu'il utilise l'appli **sachant** qu'il est abonné à l'année :
>
> $$P_A(M) = \frac{P(A \cap M)}{P(A)} = \frac{0{,}3}{0{,}6} = 0{,}5$$
>
> Lecture directe dans les effectifs : parmi les $120$ abonnés, $60$ utilisent
> l'appli, soit $\dfrac{60}{120} = 0{,}5$. Même résultat — c'est la même idée.

⚠️ $P_A(B)$ est une probabilité comme les autres : elle est **entre $0$ et $1$**,
et $P_A(B) + P_A(\bar{B}) = 1$. Si ton calcul dépasse $1$, tu as divisé dans le
mauvais sens.

---

## 2. La formule du produit — et les trois nombres à ne pas confondre

### Formule du produit

En multipliant la définition par $P(A)$ :

$$\boxed{P(A \cap B) = P(A) \times P_A(B)}$$

C'est la formule qu'on utilise en pratique : les énoncés donnent presque
toujours $P(A)$ et $P_A(B)$, et on en déduit $P(A \cap B)$.

> **Exemple.** $30\,\%$ des clients d'une boutique en ligne ont un compte
> fidélité ($F$), et parmi eux, $40\,\%$ commandent chaque mois ($C$).
> Probabilité qu'un client pris au hasard ait un compte fidélité **et** commande
> chaque mois :
> $$P(F \cap C) = P(F) \times P_F(C) = 0{,}3 \times 0{,}4 = 0{,}12$$

### Trois nombres différents — le piège n°1 du chapitre

Sur l'exemple de la salle de sport :

| Écriture | Question posée | Valeur |
|---|---|---|
| $P(A \cap M)$ | « abonné **et** utilisateur de l'appli », parmi **tous** les clients | $\dfrac{60}{200} = 0{,}3$ |
| $P_A(M)$ | utilisateur de l'appli, **parmi les abonnés** | $\dfrac{60}{120} = 0{,}5$ |
| $P_M(A)$ | abonné, **parmi les utilisateurs de l'appli** | $\dfrac{60}{80} = 0{,}75$ |

Trois questions différentes, trois dénominateurs différents, trois valeurs
différentes :

- $P(A \cap B) \neq P_A(B)$ : l'intersection se calcule sur l'univers **entier**,
  la conditionnelle sur l'univers **restreint à $A$** ;
- $P_A(B) \neq P_B(A)$ : « sachant $A$ » et « sachant $B$ » ne restreignent
  **pas au même ensemble**. L'ordre des lettres compte.

---

## 3. L'arbre pondéré

Un arbre pondéré organise une situation en deux étapes : d'abord $A$ ou
$\bar{A}$, puis $B$ ou $\bar{B}$.

```
              P(A)      ┌── B      branche : P_A(B)      chemin A∩B : P(A) × P_A(B)
         ┌──── A ───────┤
         │              └── B̄      branche : P_A(B̄)
    ─────┤
         │    P(Ā)      ┌── B      branche : P_Ā(B)      chemin Ā∩B : P(Ā) × P_Ā(B)
         └──── Ā ───────┤
                        └── B̄      branche : P_Ā(B̄)
```

### Règle des branches

1. Une branche de **premier niveau** porte une probabilité simple : $P(A)$, $P(\bar{A})$.
2. Une branche de **deuxième niveau** porte une probabilité **conditionnelle** :
   la branche qui va de $A$ vers $B$ porte $P_A(B)$ — jamais $P(B)$ ni $P(A \cap B)$.
3. La somme des probabilités des branches issues d'un même nœud vaut $\boxed{1}$.

### Règle des chemins

4. La probabilité d'un **chemin** est le **produit** des probabilités de ses
   branches : le chemin $A$ puis $B$ représente $A \cap B$ et
   $$P(A \cap B) = P(A) \times P_A(B)$$
   C'est la formule du produit, lue sur le dessin.
5. La probabilité d'un **événement** est la **somme** des probabilités des
   chemins qui le réalisent.

> **On multiplie le long d'un chemin, on additionne entre les chemins.**

> **Exemple (contrôle qualité).** Un atelier a deux machines. $M_1$ produit
> $60\,\%$ des pièces, $M_2$ les $40\,\%$ restants. $2\,\%$ des pièces de $M_1$
> sont défectueuses, contre $5\,\%$ pour $M_2$. On prélève une pièce au hasard,
> $D$ = « la pièce est défectueuse ».
>
> Sur l'arbre : $P(M_1) = 0{,}6$ ; $P(M_2) = 0{,}4$ ; $P_{M_1}(D) = 0{,}02$ ;
> $P_{M_2}(D) = 0{,}05$ (et les branches $\bar{D}$ portent $0{,}98$ et $0{,}95$).
>
> Probabilité que la pièce vienne de $M_2$ **et** soit défectueuse (un chemin) :
> $$P(M_2 \cap D) = 0{,}4 \times 0{,}05 = 0{,}02$$

⚠️ Le $5\,\%$ de l'énoncé est $P_{M_2}(D)$, une **conditionnelle** ($5\,\%$ **des
pièces de $M_2$**). Le résultat $P(M_2 \cap D) = 2\,\%$ est une part de la
production **totale**. Deux nombres, deux significations.

---

## 4. Partition de l'univers et formule des probabilités totales

### Partition

Des événements $A_1, A_2, \ldots, A_n$ forment une **partition de l'univers**
quand ils sont deux à deux incompatibles et que leur réunion est l'univers
entier : chaque issue appartient à **un et un seul** des $A_i$.

Le cas le plus courant : $\{A, \bar{A}\}$ est toujours une partition. Sur un
arbre, les nœuds de premier niveau forment une partition.

### Formule des probabilités totales

Si $A_1, \ldots, A_n$ forment une partition de l'univers (avec $P(A_i) \neq 0$),
alors pour tout événement $B$ :

$$\boxed{P(B) = P(A_1 \cap B) + \cdots + P(A_n \cap B) = P(A_1)\,P_{A_1}(B) + \cdots + P(A_n)\,P_{A_n}(B)}$$

Sur l'arbre, c'est exactement la règle des chemins : $B$ est réalisé par les
chemins qui se terminent en $B$, un par branche de la partition — on les
additionne.

> **Exemple (contrôle qualité, suite).** Probabilité qu'une pièce prélevée au
> hasard soit défectueuse, avec la partition $\{M_1, M_2\}$ :
> $$P(D) = P(M_1)\,P_{M_1}(D) + P(M_2)\,P_{M_2}(D) = 0{,}6 \times 0{,}02 + 0{,}4 \times 0{,}05 = 0{,}012 + 0{,}02 = 0{,}032$$
> Soit $3{,}2\,\%$ de pièces défectueuses en tout — un taux **entre** $2\,\%$ et
> $5\,\%$, plus proche de celui de $M_1$ qui produit davantage. Ce n'est **pas**
> la moyenne simple $3{,}5\,\%$ : c'est une moyenne **pondérée** par les parts de
> production.

> **Exemple (partition en trois).** Une enseigne se fournit chez trois
> fournisseurs : $A$ ($50\,\%$ des livraisons), $B$ ($30\,\%$) et $C$
> ($20\,\%$). Leurs taux de retard sont $4\,\%$, $10\,\%$ et $5\,\%$.
> $$P(R) = 0{,}5 \times 0{,}04 + 0{,}3 \times 0{,}10 + 0{,}2 \times 0{,}05 = 0{,}02 + 0{,}03 + 0{,}01 = 0{,}06$$
> Une livraison sur $6\,\%$… non : $6\,\%$ des livraisons sont en retard. La
> partition peut avoir autant de branches que nécessaire.

---

## 5. Remonter l'arbre : calculer $P_B(A)$

L'arbre donne naturellement les $P_A(B)$ (deuxième niveau). Pour la question
**inverse** — « sachant que $B$ s'est réalisé, quelle est la probabilité que ce
soit passé par $A$ ? » — on revient à la définition :

$$\boxed{P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{\text{le chemin qui passe par } A \text{ et } B}{\text{tous les chemins qui mènent à } B}}$$

**Méthode** : numérateur = un chemin de l'arbre (formule du produit) ;
dénominateur = $P(B)$ par la formule des probabilités totales.

> **Exemple (contrôle qualité, fin).** Une pièce prélevée est défectueuse.
> Probabilité qu'elle vienne de $M_2$ :
> $$P_D(M_2) = \frac{P(M_2 \cap D)}{P(D)} = \frac{0{,}02}{0{,}032} = 0{,}625$$
> Alors que $M_2$ ne produit que $40\,\%$ des pièces, elle est responsable de
> $62{,}5\,\%$ des défauts. Et surtout : $P_D(M_2) = 0{,}625$ n'a rien à voir
> avec $P_{M_2}(D) = 0{,}05$.

> **Exemple (dépistage).** Une maladie touche $1\,\%$ d'une population ($M$).
> Un test de dépistage est positif ($T$) pour $95\,\%$ des malades
> ($P_M(T) = 0{,}95$) et pour $4\,\%$ des personnes saines
> ($P_{\bar{M}}(T) = 0{,}04$). Une personne est testée positive : est-elle
> probablement malade ?
>
> Probabilités totales : $P(T) = 0{,}01 \times 0{,}95 + 0{,}99 \times 0{,}04 = 0{,}0095 + 0{,}0396 = 0{,}0491$.
>
> $$P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}0095}{0{,}0491} \approx 0{,}19$$
>
> Seulement $19\,\%$ des personnes positives sont réellement malades — parce que
> la maladie est rare, les faux positifs des $99\,\%$ de personnes saines pèsent
> lourd. **$P_T(M) \approx 0{,}19$ alors que $P_M(T) = 0{,}95$** : retenir cet
> exemple, c'est ne plus jamais confondre les deux sens.

---

## 6. Méthode : traduire l'énoncé

Tout se joue à la traduction. Repère les mots :

| Dans l'énoncé | Traduction | Objet |
|---|---|---|
| « sachant que… », « parmi les $A$… », « chez les $A$… » | on restreint à $A$ | $P_A(B)$ |
| « … **et** … », « à la fois… » (sur l'ensemble total) | intersection | $P(A \cap B)$ |
| « quelle proportion des $B$ sont des $A$ ? » | on restreint à $B$ | $P_B(A)$ |

**Démarche type bac** :

1. Nomme les événements ($A$, $B$…) et écris **en notation** les données de
   l'énoncé — c'est là que se joue la distinction conditionnelle/intersection.
2. Construis l'**arbre pondéré** : premier niveau = la partition (l'information
   donnée en premier : machine, catégorie de client, malade ou non).
3. Vérifie chaque nœud : les branches issues d'un même nœud somment à $1$.
4. Chemin = produit ; événement = somme de chemins (probabilités totales).
5. Pour une question « sachant » dans le sens inverse de l'arbre : définition
   $P_B(A) = \dfrac{P(A \cap B)}{P(B)}$.

Quand l'énoncé donne des **effectifs** (tableau croisé), les conditionnelles se
lisent directement : $P_A(B) = \dfrac{\text{effectif de } A \cap B}{\text{effectif de } A}$ —
on divise par l'effectif de la **ligne ou colonne** de la condition, pas par le
total.

---

## 7. Tableau récapitulatif

| À savoir | Formule / règle |
|---|---|
| Probabilité conditionnelle | $P_A(B) = \dfrac{P(A \cap B)}{P(A)}$, avec $P(A) \neq 0$ |
| Formule du produit | $P(A \cap B) = P(A) \times P_A(B)$ |
| Complémentaire conditionnel | $P_A(B) + P_A(\bar{B}) = 1$ |
| Branches d'un même nœud | somme $= 1$ |
| Branche de 2e niveau ($A \to B$) | porte $P_A(B)$ |
| Chemin | **produit** des branches $= P(A \cap B)$ |
| Événement | **somme** des chemins qui le réalisent |
| Probabilités totales (partition $A_1, \ldots, A_n$) | $P(B) = P(A_1)\,P_{A_1}(B) + \cdots + P(A_n)\,P_{A_n}(B)$ |
| Renverser la condition | $P_B(A) = \dfrac{P(A \cap B)}{P(B)}$ |
| À ne jamais confondre | $P_A(B)$, $P(A \cap B)$ et $P_B(A)$ : trois nombres différents |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $P_A(B)$ et $P(A \cap B)$.** « $5\,\%$ des pièces de $M_2$ sont
   défectueuses » est une conditionnelle $P_{M_2}(D) = 0{,}05$, pas une
   intersection. L'intersection s'obtient en multipliant par $P(M_2)$ :
   $P(M_2 \cap D) = 0{,}4 \times 0{,}05 = 0{,}02$.
2. **Confondre $P_A(B)$ et $P_B(A)$.** « Parmi les abonnés, ceux qui utilisent
   l'appli » ($P_A(M) = 0{,}5$) et « parmi les utilisateurs de l'appli, les
   abonnés » ($P_M(A) = 0{,}75$) : le dénominateur change, la valeur aussi.
   Repère **qui est l'ensemble de référence** avant d'écrire quoi que ce soit.
3. **Mettre $P(B)$ ou $P(A \cap B)$ sur une branche de deuxième niveau.** Elle
   porte toujours la **conditionnelle** $P_A(B)$. Contrôle : les branches d'un
   même nœud doivent sommer à $1$.
4. **Additionner le long d'un chemin** (ou multiplier entre chemins). C'est
   produit **le long** d'un chemin, somme **entre** les chemins.
5. **Oublier un chemin dans les probabilités totales.** $P(B)$ = la somme de
   **tous** les chemins menant à $B$, un par élément de la partition. Avec trois
   fournisseurs, il y a trois chemins — pas deux.
6. **Prendre la moyenne simple au lieu de la moyenne pondérée.** $P(D)$ pour
   $2\,\%$ et $5\,\%$ de défauts n'est pas $3{,}5\,\%$ mais $3{,}2\,\%$ : chaque
   taux est pondéré par le poids $P(A_i)$ de sa branche.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« PROBABILITÉS — PROBABILITÉS CONDITIONNELLES » (lignes 94-102).

Couverture, calée sur le texte officiel :
- Contenus : probabilité conditionnelle (§1-2) ; formule des probabilités totales
  pour une partition de l'univers (§4).
- Capacités : construire un arbre de probabilités et interpréter les pondérations
  des branches (§3) ; faire le lien avec la définition des probabilités
  conditionnelles (§3, règle des chemins = formule du produit) ; utiliser un arbre
  pour calculer des probabilités, dont la probabilité d'un événement connaissant
  ses probabilités conditionnelles relatives à une partition (§4-5).

Prérequis : chapitre « Probabilités et variables aléatoires » de Première techno
(contenu/premiere-techno/maths/probabilites-variables-aleatoires/), qui pose les
règles de l'arbre pour des épreuves indépendantes ; ses notes signalent que les
probabilités conditionnelles n'y sont PAS traitées — elles arrivent bien ici.
Le vocabulaire ensembliste (intersection, complémentaire) est au programme de
Terminale techno (chapitre logique-ensembles du même niveau).

Choix de rédaction : contextes voie techno demandés (contrôle qualité à deux
machines, dépistage, clientèle) ; le piège n°1 (P_A(B) vs P(A∩B), et P_A(B) vs
P_B(A)) est traité trois fois : §2 (tableau des trois nombres), §5 (exemple
dépistage 0,95 vs ≈0,19) et erreurs 1-2. La notation retenue est P_A(B) (indice),
usuelle en voie technologique ; la notation P(B|A) n'est pas introduite.
L'indépendance de deux événements n'apparaît pas dans l'extraction du programme :
NON traitée, à confirmer par le relecteur.

Vérifications numériques faites :
- clientèle : 60/120 = 0,5 ; 60/80 = 0,75 ; 60/200 = 0,3.
- fidélité : 0,3 × 0,4 = 0,12.
- contrôle qualité : 0,6×0,02 = 0,012 ; 0,4×0,05 = 0,02 ; P(D) = 0,032 ;
  P_D(M2) = 0,02/0,032 = 0,625.
- fournisseurs : 0,02 + 0,03 + 0,01 = 0,06.
- dépistage : 0,01×0,95 = 0,0095 ; 0,99×0,04 = 0,0396 ; P(T) = 0,0491 ;
  0,0095/0,0491 = 0,19348… ≈ 0,19.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction ne mentionne ni l'indépendance ni la notation P(B|A) : vérifier
  sur le PDF que ces points sont bien absents du programme commun.
- La lecture dans un tableau croisé (§6, dernier paragraphe) n'est pas citée
  explicitement dans l'extraction : gardée comme support de traduction naturel
  en voie techno, à valider.
- Le mot « partition » : vérifier la définition exacte donnée par le préambule
  du PDF (événements non vides ? P(A_i) ≠ 0 exigé ?).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
