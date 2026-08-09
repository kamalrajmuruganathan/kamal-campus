---
id: 1techno-math-probabilites-variables-aleatoires
titre: "Probabilités et variables aléatoires"
voie: technologique
niveau: premiere
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — première, voie technologique"
duree_lecture_min: 13
prerequis:
  - Probabilités (Seconde)
  - Suites et pourcentages (Première techno)
statut: brouillon
relu_par: null
---

# Probabilités et variables aléatoires

> Deux objets à maîtriser : l'**arbre de probabilités** pour les épreuves répétées,
> et l'**espérance** pour évaluer un gain moyen. L'espérance est l'outil qui permet
> de dire si un jeu, une assurance ou un investissement est avantageux **à long terme**.

---

# Répétition d'épreuves de Bernoulli

## 1. L'épreuve de Bernoulli

Une expérience à **deux issues seulement** :

- **succès**, de probabilité $p$
- **échec**, de probabilité $1 - p$

> **Exemples.** Une pièce tombe sur pile ou non. Une pièce fabriquée est conforme ou
> défectueuse. Un composant tombe en panne ou non.

---

## 2. Répétition — l'arbre de probabilités

On répète $n$ fois la même épreuve, de façon **identique et indépendante**.
Chaque répétition ne dépend pas des précédentes.

### Les trois règles de l'arbre

1. La somme des branches issues d'un même nœud vaut $1$
2. La probabilité d'un **chemin** est le **produit** des branches parcourues
3. La probabilité d'un événement est la **somme** des chemins qui le réalisent

```
              p     ┌── S      chemin SS  : p × p
         ┌── S ─────┤
         │          └── É      chemin SÉ  : p × (1−p)
    ─────┤
         │    1−p   ┌── S      chemin ÉS  : (1−p) × p
         └── É ─────┤
                    └── É      chemin ÉÉ  : (1−p) × (1−p)
```

> **On multiplie le long d'un chemin, on additionne entre les chemins.**

### Méthode

Pour calculer la probabilité d'obtenir **exactement $k$ succès** :

1. dessiner l'arbre
2. repérer **tous** les chemins qui conviennent
3. calculer la probabilité d'un chemin : $p^k \times (1-p)^{n-k}$
4. **multiplier par le nombre de chemins**

> **Exemple ($n = 3$, $p = 0{,}2$) — exactement un succès.**
>
> Trois chemins conviennent : SÉÉ, ÉSÉ, ÉÉS.
> Chacun vaut $0{,}2 \times 0{,}8 \times 0{,}8 = 0{,}128$.
>
> $P = 3 \times 0{,}128 = 0{,}384$

> ⚠️ **Le facteur vient du nombre de chemins.** L'oublier est l'erreur type de ce
> chapitre — et elle est systématiquement sanctionnée.

---

# Variables aléatoires

## 3. Définition et notations

Une **variable aléatoire** $X$ associe un **nombre** à chaque issue d'une expérience.

| Notation | Signification |
|---|---|
| $\{X = a\}$ | l'**événement** « $X$ prend la valeur $a$ » |
| $P(X = a)$ | la **probabilité** de cet événement — un nombre |

> ⚠️ Les accolades marquent la différence : $\{X = a\}$ est un événement,
> $P(X = a)$ est un nombre entre $0$ et $1$.

---

## 4. Loi de probabilité

La **loi de probabilité** de $X$ donne, pour chaque valeur possible, sa probabilité.
On la présente en tableau.

| $x_i$ | $x_1$ | $x_2$ | $\cdots$ | $x_n$ |
|---|---|---|---|---|
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\cdots$ | $p_n$ |

$$\boxed{\sum p_i = 1}$$

> **Le contrôle systématique** : la somme de la seconde ligne doit valoir $1$. Si ce
> n'est pas le cas, inutile de poursuivre — il y a une erreur.

---

## 5. Espérance

$$\boxed{E(X) = x_1p_1 + x_2p_2 + \cdots + x_np_n}$$

C'est la **moyenne des valeurs, pondérée par leurs probabilités**.

> **Interprétation** : si on répétait l'expérience un très grand nombre de fois, la
> moyenne des résultats se rapprocherait de $E(X)$. C'est un gain **moyen à long
> terme**, pas une prévision pour une partie.

### Le gain algébrique

> **Exemple.** On mise $2$ €. On gagne $10$ € avec probabilité $0{,}1$, sinon rien.
>
> Le **gain algébrique** tient compte de la mise :
> $X = 8$ avec probabilité $0{,}1$, et $X = -2$ avec probabilité $0{,}9$.
>
> $E(X) = 8 \times 0{,}1 + (-2) \times 0{,}9 = 0{,}8 - 1{,}8 = -1$
>
> En moyenne, le joueur **perd $1$ € par partie**.

| $E(X)$ | Le jeu est |
|---|---|
| $> 0$ | favorable au joueur |
| $= 0$ | **équitable** |
| $< 0$ | défavorable au joueur |

---

## 6. Loi de Bernoulli

C'est le cas le plus simple : $X$ ne prend que les valeurs $0$ et $1$.

| $x_i$ | $0$ | $1$ |
|---|---|---|
| $P(X = x_i)$ | $1-p$ | $p$ |

$$\boxed{E(X) = p}$$

*Démonstration immédiate* : $E(X) = 0 \times (1-p) + 1 \times p = p$.

> **Ce qu'il faut retenir** : pour une loi de Bernoulli, l'espérance **est** le
> paramètre $p$. C'est le résultat le plus court du chapitre, et il tombe souvent.

---

## 7. À retenir absolument

| | |
|---|---|
| Épreuve de Bernoulli | deux issues : succès $p$, échec $1-p$ |
| Sur un arbre | multiplier le long d'un chemin, additionner entre chemins |
| Exactement $k$ succès | $(\text{nombre de chemins}) \times p^k(1-p)^{n-k}$ |
| Somme des probabilités | $\sum p_i = 1$ |
| Espérance | $E(X) = \sum x_i p_i$ |
| Jeu équitable | $E(X) = 0$ |
| Loi de Bernoulli | $E(X) = p$ |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier de compter les chemins** dans une répétition d'épreuves.
2. **Additionner le long d'un chemin** au lieu de multiplier.
3. **Oublier de retrancher la mise** dans un calcul de gain algébrique.
4. **Ne pas vérifier que $\sum p_i = 1$** avant de calculer l'espérance.
5. **Confondre $\{X = a\}$ et $P(X = a)$** : un événement et un nombre.
6. **Interpréter l'espérance comme une prévision** pour une seule partie : c'est une
   moyenne sur un grand nombre de répétitions.
7. **Oublier le signe négatif des pertes** dans le tableau de la loi.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Statistiques et
probabilités », sections « Modèle associé à une expérience aléatoire à plusieurs
épreuves indépendantes » (ligne 2467) et « Variables aléatoires » (ligne 2493).

Éléments explicitement lisibles :
- « Représenter par un arbre de probabilités la répétition de n épreuves aléatoires
  identiques et indépendantes de Bernoulli afin de calculer des probabilités »
- « Variable aléatoire discrète : loi de probabilité, ESPÉRANCE »
- « Loi de Bernoulli (0,1) de paramètre p, ESPÉRANCE »
- capacités : « Interpréter en situation les écritures … », « Calculer et interpréter
  en contexte l'espérance d'une variable aléatoire discrète », « Reconnaître … »

⚠️ DIFFÉRENCE NOTABLE AVEC LA SPÉCIALITÉ : le programme technologique mentionne la
LOI DE PROBABILITÉ et l'ESPÉRANCE, mais l'extraction ne fait apparaître NI VARIANCE
NI ÉCART-TYPE, ni la formule de König-Huygens — contrairement au programme de
spécialité. Je ne les ai donc PAS introduits. C'est un point de périmètre à
CONFIRMER : si la variance est bien hors programme ici, l'absence est correcte ;
sinon il faudra ajouter une section.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La borne sur n dans la répétition d'épreuves : l'extraction montre « avec » suivi
  d'un blanc. En spécialité et en enseignement scientifique la limite est n ≤ 4 ;
  vérifier qu'elle est identique ici.
- La capacité « Reconnaître … » est tronquée : reconnaître une situation de
  Bernoulli, probablement — à confirmer.
- Les probabilités conditionnelles sont-elles au programme de la voie technologique
  en première ? Je ne les ai PAS traitées, faute de trace dans l'extraction.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
