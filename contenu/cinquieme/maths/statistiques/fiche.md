---
id: 5e-math-statistiques
titre: "Statistiques"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Fractions et écritures décimales (5e)
  - Proportionnalité et pourcentages (5e)
statut: brouillon
relu_par: null
---

# Statistiques

> Faire des statistiques, c'est transformer une masse de données en une information
> qu'on peut lire d'un coup d'œil. Trois outils suffisent : compter, ramener à un
> total, et résumer par une moyenne.

---

## 1. Le vocabulaire

| Mot | Ce qu'il désigne | Exemple |
|---|---|---|
| **Série** | l'ensemble des données recueillies | les notes de la classe |
| **Effectif** | le nombre de fois qu'une valeur apparaît | $7$ élèves ont eu $12$ |
| **Effectif total** | le nombre de données en tout | $30$ élèves |
| **Fréquence** | la part que représente une valeur | $7$ sur $30$ |

---

## 2. Organiser les données dans un tableau

Une liste brute ne se lit pas. On la range dans un **tableau d'effectifs**.

> **Exemple.** Notes obtenues par $20$ élèves :
> $8, 12, 15, 12, 8, 10, 12, 15, 10, 12, 8, 10, 15, 12, 10, 8, 12, 10, 15, 12$

| Note | $8$ | $10$ | $12$ | $15$ | **Total** |
|---|---|---|---|---|---|
| **Effectif** | $4$ | $5$ | $7$ | $4$ | $20$ |

> **Le contrôle systématique** : la somme des effectifs doit être égale à l'**effectif
> total**. Ici $4+5+7+4 = 20$ ✓. Si ça ne tombe pas juste, une donnée a été oubliée ou
> comptée deux fois — inutile d'aller plus loin.

---

## 3. Les fréquences

$$\boxed{\text{fréquence} = \frac{\text{effectif}}{\text{effectif total}}}$$

Une fréquence s'exprime de **trois façons**, qui disent la même chose :

| Écriture | Pour la note $12$ |
|---|---|
| **Fraction** | $\dfrac{7}{20}$ |
| **Décimale** | $0{,}35$ |
| **Pourcentage** | $35\ \%$ |

> **Pour passer de l'une à l'autre** : la fraction se calcule en divisant, et le
> pourcentage s'obtient en multipliant la décimale par $100$.
> $\dfrac{7}{20} = 0{,}35 = 35\ \%$.

> **Le contrôle** : la somme de toutes les fréquences vaut **$1$** (ou $100\ \%$).
> Ici $0{,}20 + 0{,}25 + 0{,}35 + 0{,}20 = 1$ ✓.

> ⚠️ **À quoi sert la fréquence plutôt que l'effectif** : à **comparer deux groupes de
> tailles différentes**. $7$ élèves sur $20$ et $9$ élèves sur $30$, c'est $35\ \%$
> contre $30\ \%$ — le premier groupe est en meilleure proportion, alors que son
> effectif est plus petit.

---

## 4. Représenter les données

Trois représentations au programme, chacune pour un usage.

| Représentation | Ce qu'elle montre bien | Quand l'utiliser |
|---|---|---|
| **Diagramme en barres** | la comparaison des effectifs | pour comparer des catégories entre elles |
| **Diagramme circulaire** | la part de chaque valeur dans le tout | pour montrer une **répartition** |
| **Graphique cartésien** | l'évolution d'une grandeur | quand les données se suivent (dans le temps, par exemple) |

> **Choisir la bonne, c'est répondre à la question posée.** « Quelle matière a la
> meilleure moyenne ? » appelle des barres. « Comment se répartissent les élèves entre
> les options ? » appelle un diagramme circulaire. « Comment la température a-t-elle
> évolué ? » appelle un graphique.

### Calculer les angles d'un diagramme circulaire

Le disque entier représente l'effectif total et mesure $360°$. Les angles sont
**proportionnels** aux effectifs.

$$\boxed{\text{angle} = \text{fréquence} \times 360°}$$

> **Exemple.** Pour la note $12$ : $0{,}35 \times 360 = 126°$.

| Note | $8$ | $10$ | $12$ | $15$ | Total |
|---|---|---|---|---|---|
| Effectif | $4$ | $5$ | $7$ | $4$ | $20$ |
| Fréquence | $0{,}20$ | $0{,}25$ | $0{,}35$ | $0{,}20$ | $1$ |
| **Angle** | $72°$ | $90°$ | $126°$ | $72°$ | $360°$ |

> **Le contrôle** : la somme des angles doit faire $360°$. Ici
> $72+90+126+72 = 360$ ✓.

---

## 5. La moyenne

$$\boxed{\text{moyenne} = \frac{\text{somme de toutes les valeurs}}{\text{effectif total}}}$$

### Quand les valeurs se répètent

On ne réécrit pas chaque valeur : on **multiplie chaque valeur par son effectif**.

> **Exemple**, avec le tableau précédent :
>
> $\text{moyenne} = \dfrac{8 \times 4 + 10 \times 5 + 12 \times 7 + 15 \times 4}{20}$
>
> $= \dfrac{32 + 50 + 84 + 60}{20} = \dfrac{226}{20} = 11{,}3$

> ⚠️ **L'erreur classique** : additionner les quatre notes différentes et diviser par
> $4$, ce qui donnerait $\dfrac{8+10+12+15}{4} = 11{,}25$. C'est faux : cela reviendrait
> à dire que chaque note a été obtenue une seule fois, alors que $12$ revient $7$ fois.
> **On divise toujours par l'effectif total**, jamais par le nombre de valeurs
> distinctes.

### Interpréter une moyenne

La moyenne est la valeur qu'auraient toutes les données si elles étaient **également
réparties**.

> **Exemple.** Une moyenne de $11{,}3$ signifie que si tous les élèves avaient la même
> note, ce serait $11{,}3$.

> ⚠️ **Ce que la moyenne ne dit pas.** Deux classes de moyenne $10$ peuvent être très
> différentes : l'une avec tous les élèves entre $9$ et $11$, l'autre avec la moitié à
> $0$ et l'autre à $20$. La moyenne résume, elle ne décrit pas tout.

---

## 6. Lire un graphique

Lire, c'est répondre à des questions précises. Les réflexes :

| Réflexe | Pourquoi |
|---|---|
| Lire le **titre** | savoir de quoi on parle |
| Lire les **légendes des axes** | savoir ce qui est mesuré, et dans quelle unité |
| Repérer l'**échelle** | une graduation peut valoir $1$, $10$ ou $100$ |
| Vérifier si l'axe part de **zéro** | sinon les écarts paraissent bien plus grands qu'ils ne sont |

> ⚠️ **Le piège le plus courant** : un axe vertical qui commence à $80$ au lieu de $0$
> transforme une hausse de $2\ \%$ en une montagne. Toujours regarder d'où part l'axe
> avant de commenter.

---

## 7. À retenir absolument

| | |
|---|---|
| Effectif | le nombre de fois qu'une valeur apparaît |
| Contrôle des effectifs | leur somme = effectif total |
| Fréquence | $\dfrac{\text{effectif}}{\text{effectif total}}$ |
| Trois écritures | fraction, décimale, pourcentage |
| Contrôle des fréquences | leur somme = $1$, soit $100\ \%$ |
| Angle d'un secteur | fréquence $\times\ 360°$ |
| Moyenne | $\dfrac{\text{somme des valeurs}}{\text{effectif total}}$ |
| Valeurs répétées | multiplier chaque valeur par son effectif |
| Diagramme circulaire | pour une **répartition** |
| Diagramme en barres | pour **comparer** |

---

## 8. Les erreurs qui coûtent des points

1. **Diviser par le nombre de valeurs distinctes** au lieu de l'effectif total.
2. **Oublier de multiplier par l'effectif** dans une moyenne : chaque valeur compte
   autant de fois qu'elle apparaît.
3. **Confondre effectif et fréquence** : l'un est un nombre d'individus, l'autre une
   proportion.
4. **Oublier de vérifier que la somme des fréquences vaut $1$** — c'est le contrôle le
   plus rapide.
5. **Se tromper sur le total dans un diagramme circulaire** : c'est $360°$, pas $100$.
6. **Comparer deux effectifs de groupes de tailles différentes** au lieu de comparer
   leurs fréquences.
7. **Commenter un graphique sans regarder l'échelle** ni l'origine de l'axe.
8. **Croire que la moyenne décrit toute la série** : deux séries très différentes
   peuvent avoir la même.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel du cycle 4, thème « Organisation et gestion de données et
probabilités », niveau Cinquième, section « Statistiques »
(docs/programme-college-cycle4-maths-2026.txt).

CHAPITRE CRÉÉ LE 2026-08-11, deuxième d'un lot destiné à compléter la 5e.

Correspondance objectif par objectif — tous les objectifs d'apprentissage de la section
sont couverts :

- « Recueillir et organiser des données » → § 2, tableau d'effectifs.
- « Calculer des effectifs et des fréquences (exprimées sous forme décimale,
  fractionnaire ou de pourcentage) » → § 3. Les TROIS écritures sont traitées, comme le
  texte le demande explicitement.
- « Lire et interpréter des informations présentées sous forme de tableaux, de
  diagrammes et de graphiques » → § 6.
- « Représenter [...] des données sous la forme d'un tableau, d'un diagramme
  (diagramme en barres, diagramme circulaire) ou d'un graphique cartésien » → § 4. Les
  trois types nommés dans le texte, ni plus ni moins : ni histogramme, ni diagramme en
  boîte, qui relèvent du lycée.
- « Choisir une représentation adaptée à ce qu'il convient de mettre en avant » → § 4,
  table des usages. C'est un objectif à part entière du programme, souvent négligé :
  traité comme tel.
- « Calculer et interpréter la moyenne simple d'une série de données » → § 5. Le mot
  « interpréter » justifie le passage sur ce que la moyenne ne dit pas.

Le texte mentionne « sur papier ou à l'aide d'un tableur-grapheur ». L'usage du tableur
n'est pas détaillé : il relève de la manipulation en classe plutôt que d'une fiche de
révision.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- LA DATE DU BO, comme pour les autres fiches de 5e (voir la note de
  « parallelogrammes »).
- Le programme dit « moyenne SIMPLE ». Le § 5 traite le calcul par les effectifs, qui
  est une moyenne pondérée par les effectifs — mais qui reste le calcul de la moyenne
  simple d'une série où des valeurs se répètent, pas une moyenne à coefficients.
  Vérifier que la présentation ne prête pas à confusion avec la moyenne pondérée, qui
  n'est pas au programme de 5e.
- Le calcul des ANGLES d'un diagramme circulaire (§ 4) n'est pas explicitement demandé :
  le texte dit « représenter [...] sous la forme d'un diagramme circulaire », ce qui le
  suppose. À confirmer.
- La lecture critique d'un graphique (§ 6, axe ne partant pas de zéro) va au-delà de
  « lire et interpréter ». Conservée car elle sert l'esprit critique, explicitement
  cité dans les objectifs majeurs du cycle 4, mais à valider.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
