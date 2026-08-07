---
id: 1spe-math-probabilites-conditionnelles
titre: "Probabilités conditionnelles et indépendance"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 14
prerequis:
  - Probabilités (Seconde)
  - Proportions et pourcentages (Seconde)
statut: brouillon
relu_par: null
---

# Probabilités conditionnelles et indépendance

> L'idée centrale : **une information change la probabilité**. Savoir qu'il pleut modifie la
> probabilité que quelqu'un ait pris son parapluie. Tout le chapitre formalise ce mécanisme,
> et l'**arbre pondéré** en est l'outil visuel.

---

## 1. Probabilité conditionnelle

### Définition

Soient $\mathrm{A}$ et $\mathrm{B}$ deux événements avec $P(\mathrm{A}) \neq 0$.
La probabilité de $\mathrm{B}$ **sachant $\mathrm{A}$** est

$$\boxed{P_\mathrm{A}(\mathrm{B}) = \frac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}}$$

> **Comment la lire.** On se restreint à l'univers où $\mathrm{A}$ est réalisé, et on regarde
> quelle proportion de cet univers réalise aussi $\mathrm{B}$.

### Formule des probabilités composées

En multipliant par $P(\mathrm{A})$ :

$$\boxed{P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P_\mathrm{A}(\mathrm{B})}$$

C'est la formule qu'on lit sur un **chemin** d'arbre : on multiplie les probabilités
rencontrées.

> ⚠️ $P_\mathrm{A}(\mathrm{B})$ et $P_\mathrm{B}(\mathrm{A})$ sont **différentes** en général.
> Les confondre est l'erreur de raisonnement la plus coûteuse du chapitre.

---

## 2. L'arbre pondéré

### Les trois règles

1. La somme des probabilités des branches **issues d'un même nœud** vaut $1$
2. La probabilité d'un **chemin** est le **produit** des probabilités de ses branches
3. La probabilité d'un événement est la **somme** des probabilités des chemins qui le réalisent

```
                    P_A(B)
              ┌───────────── B      chemin : P(A) × P_A(B)
      P(A)    │
   ┌──────────┤ A
   │          │  P_A(B̄)
   │          └───────────── B̄
   │
   │  P(Ā)       P_Ā(B)
   └──────────┬───────────── B
              │ Ā
              │  P_Ā(B̄)
              └───────────── B̄
```

> **On multiplie le long d'un chemin, on additionne entre les chemins.** Toute la technique du
> chapitre tient dans cette phrase.

---

## 3. Formule des probabilités totales

Si $\mathrm{A}$ et $\overline{\mathrm{A}}$ forment une partition de l'univers :

$$\boxed{P(\mathrm{B}) = P(\mathrm{A} \cap \mathrm{B}) + P(\overline{\mathrm{A}} \cap \mathrm{B})
= P(\mathrm{A})P_\mathrm{A}(\mathrm{B}) + P(\overline{\mathrm{A}})P_{\overline{\mathrm{A}}}(\mathrm{B})}$$

Sur l'arbre : on additionne tous les chemins qui aboutissent à $\mathrm{B}$.

> **Exemple.** Une usine a deux machines. La machine 1 produit $60\,\%$ des pièces avec
> $2\,\%$ de défauts ; la machine 2 produit les $40\,\%$ restants avec $5\,\%$ de défauts.
>
> $P(\mathrm{D}) = 0{,}6 \times 0{,}02 + 0{,}4 \times 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032$
>
> Soit $3{,}2\,\%$ de pièces défectueuses.

---

## 4. Indépendance

### Définition

Deux événements $\mathrm{A}$ et $\mathrm{B}$ sont **indépendants** lorsque

$$\boxed{P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P(\mathrm{B})}$$

De façon équivalente, si $P(\mathrm{A}) \neq 0$ :
$P_\mathrm{A}(\mathrm{B}) = P(\mathrm{B})$ — savoir que $\mathrm{A}$ est réalisé **ne change
rien** à la probabilité de $\mathrm{B}$.

> ⚠️ **Indépendants n'est pas incompatibles.** Deux événements incompatibles
> ($\mathrm{A} \cap \mathrm{B} = \varnothing$) de probabilités non nulles sont même toujours
> **dépendants** : savoir que l'un est réalisé garantit que l'autre ne l'est pas.

---

## 5. Succession d'épreuves indépendantes

Quand deux épreuves sont indépendantes, la probabilité d'un couple de résultats est le
**produit** des probabilités.

On représente la situation par un **arbre** ou par un **tableau à double entrée**.

> **Exemple.** Deux lancers d'un dé équilibré : $P(\text{deux }6) = \dfrac{1}{6} \times \dfrac{1}{6}
> = \dfrac{1}{36}$.

---

## 6. Répétition d'épreuves de Bernoulli (pour $n \leqslant 4$)

### Épreuve de Bernoulli

Une expérience à **deux issues** : succès (probabilité $p$) ou échec (probabilité $1-p$).

### Répétition

On répète $n$ fois la même épreuve, de façon **indépendante et identique**. Le programme limite
ce travail à $n \leqslant 4$, ce qui permet de tout lire sur un arbre.

**Méthode** : dessiner l'arbre, repérer tous les chemins réalisant l'événement, multiplier le
long de chaque chemin, additionner les chemins.

> **Exemple ($n = 3$, $p = 0{,}2$).** Probabilité d'obtenir **exactement un** succès.
>
> Trois chemins conviennent : SÉÉ, ÉSÉ, ÉÉS. Chacun a pour probabilité
> $0{,}2 \times 0{,}8 \times 0{,}8 = 0{,}128$.
>
> $P = 3 \times 0{,}128 = 0{,}384$

> ⚠️ Le facteur $3$ vient du **nombre de chemins**, pas d'un calcul supplémentaire. L'oublier
> est l'erreur type sur ce point.

---

## 7. À retenir absolument

| | |
|---|---|
| Probabilité conditionnelle | $P_\mathrm{A}(\mathrm{B}) = \dfrac{P(\mathrm{A} \cap \mathrm{B})}{P(\mathrm{A})}$ |
| Probabilités composées | $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A}) \times P_\mathrm{A}(\mathrm{B})$ |
| Probabilités totales | $P(\mathrm{B}) = P(\mathrm{A})P_\mathrm{A}(\mathrm{B}) + P(\overline{\mathrm{A}})P_{\overline{\mathrm{A}}}(\mathrm{B})$ |
| Indépendance | $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A})P(\mathrm{B})$ |
| Sur un arbre | multiplier le long d'un chemin, additionner entre chemins |
| Somme des branches d'un nœud | $1$ |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $P_\mathrm{A}(\mathrm{B})$ et $P_\mathrm{B}(\mathrm{A})$.** Ce ne sont pas les
   mêmes. « La probabilité d'être malade sachant qu'on est positif » n'est pas « la probabilité
   d'être positif sachant qu'on est malade ».
2. **Confondre $P_\mathrm{A}(\mathrm{B})$ et $P(\mathrm{A} \cap \mathrm{B})$.** La première est
   conditionnelle, la seconde est une intersection. La première est portée par une **branche**
   de l'arbre, la seconde par un **chemin entier**.
3. **Croire qu'indépendants signifie incompatibles.** Ce sont presque des contraires.
4. **Additionner le long d'un chemin** au lieu de multiplier.
5. **Oublier de compter les chemins** dans une répétition d'épreuves de Bernoulli.
6. **Utiliser $P(\mathrm{A} \cap \mathrm{B}) = P(\mathrm{A})P(\mathrm{B})$ sans indépendance.**
   Cette formule n'est valable que si l'indépendance est établie ou donnée par l'énoncé.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité maths première générale,
section « Probabilités conditionnelles et indépendance » (ligne 2811 du .txt extrait).

Éléments lisibles : indépendance de deux évènements, formule des probabilités totales,
succession de deux épreuves indépendantes avec représentation par arbre ou tableau,
et « pour n ≤ 4, répétition de n épreuves de Bernoulli indépendantes et identiques ».
La limite n ≤ 4 est explicite dans le programme — je l'ai respectée et signalée.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction a perdu une partie du bloc « Contenus » (fragment « è nements ). » avant la
  formule des probabilités totales) : vérifier qu'aucune notion n'est omise, notamment
  l'indépendance de deux variables aléatoires.
- La loi binomiale n'est PAS mentionnée pour la première (elle relève de la terminale) :
  je ne l'ai pas introduite, mais la limite n ≤ 4 le confirme indirectement — à valider.
- Le coefficient binomial n'est donc pas utilisé : les chemins se comptent à la main sur
  l'arbre. À confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
