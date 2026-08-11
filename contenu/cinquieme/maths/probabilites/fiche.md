---
id: 5e-math-probabilites
titre: "Probabilités"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Fractions et écritures décimales (5e)
  - Statistiques — effectifs et fréquences (5e)
statut: brouillon
relu_par: null
---

# Probabilités

> On ne peut pas prédire le résultat d'un lancer de dé. Mais on peut dire **quelle
> chance** on a d'obtenir un $6$ — et ce nombre, on sait le calculer exactement. C'est
> tout l'objet de ce chapitre : mettre un nombre sur le hasard.

---

## 1. Le vocabulaire

| Mot | Ce qu'il désigne | Exemple avec un dé |
|---|---|---|
| **Expérience aléatoire** | une expérience dont on ne peut pas prévoir le résultat | lancer un dé |
| **Issue** | un résultat possible | obtenir $4$ |
| **Événement** | ce dont on veut calculer la chance ; il regroupe une ou plusieurs issues | « obtenir un nombre pair » |

> **Aléatoire** vient du latin *alea*, « le dé ». Une expérience est aléatoire quand on
> connaît **tous les résultats possibles** sans savoir **lequel** sortira.

> **La différence entre issue et événement.** Une issue est un résultat unique : $4$.
> Un événement peut en regrouper plusieurs : « obtenir un nombre pair » rassemble les
> issues $2$, $4$ et $6$.

---

## 2. L'échelle des probabilités

Une probabilité est un nombre **compris entre $0$ et $1$**.

$$\boxed{0 \leqslant P(\text{événement}) \leqslant 1}$$

| Probabilité | L'événement est… | Exemple |
|---|---|---|
| $0$ | **impossible** | obtenir $7$ avec un dé à six faces |
| proche de $0$ | peu probable | obtenir $10$ fois de suite un $1$ |
| $0{,}5$ | aussi probable que son contraire | obtenir pile avec une pièce équilibrée |
| proche de $1$ | très probable | ne pas gagner au loto |
| $1$ | **certain** | obtenir un nombre entre $1$ et $6$ avec un dé |

> ⚠️ **Une probabilité ne dépasse jamais $1$** et n'est jamais négative. Trouver $1{,}5$
> ou $-0{,}2$ signale une erreur de calcul, pas un événement très probable.

---

## 3. Les trois écritures

Comme les fréquences, une probabilité s'écrit de trois façons équivalentes.

| Écriture | Obtenir un $6$ avec un dé |
|---|---|
| **Fraction** | $\dfrac{1}{6}$ |
| **Décimale** | environ $0{,}17$ |
| **Pourcentage** | environ $17\ \%$ |

> **La fraction est souvent la plus juste** : $\dfrac{1}{6}$ est exact, alors que
> $0{,}17$ est arrondi. Quand le résultat ne tombe pas juste, garde la fraction.

> **L'expression courante** « une chance sur quatre » signifie exactement
> $\dfrac{1}{4} = 0{,}25 = 25\ \%$.

---

## 4. Calculer une probabilité : l'équiprobabilité

Il y a **équiprobabilité** quand toutes les issues ont **la même chance** de se
produire — un dé équilibré, une pièce non truquée, des boules identiques dans une urne.

Dans ce cas :

$$\boxed{P(\text{événement}) = \frac{\text{nombre d'issues favorables}}{\text{nombre total d'issues}}}$$

> **« Favorable » ne veut pas dire « souhaitable »** : c'est simplement une issue qui
> **réalise** l'événement.

> **Exemple 1.** Un dé à six faces. Probabilité d'obtenir un nombre pair ?
> Issues favorables : $2$, $4$, $6$ → il y en a $3$. Issues au total : $6$.
> $P = \dfrac{3}{6} = \dfrac{1}{2}$.

> **Exemple 2.** Une urne contient $5$ boules rouges, $3$ vertes et $2$ bleues.
> Probabilité de tirer une verte ?
> Total : $5 + 3 + 2 = 10$ boules. Favorables : $3$.
> $P = \dfrac{3}{10} = 0{,}3 = 30\ \%$.

> ⚠️ **Compter le total, pas seulement ce qui est écrit.** Beaucoup répondent
> $\dfrac{3}{5}$ en prenant $5$ au lieu de $10$ : il faut **additionner toutes les
> boules**.

> ⚠️ **L'équiprobabilité n'est pas toujours vraie.** Avec un dé truqué ou une urne où
> les boules ont des tailles différentes, la formule ne s'applique pas.

---

## 5. Le contrôle qui évite les erreurs

$$\boxed{\text{La somme des probabilités de toutes les issues vaut } 1.}$$

> **Exemple.** Avec l'urne précédente :
> $P(\text{rouge}) + P(\text{verte}) + P(\text{bleue}) = \dfrac{5}{10} + \dfrac{3}{10} + \dfrac{2}{10} = \dfrac{10}{10} = 1$ ✓

> **À quoi ça sert.** Si tu connais toutes les probabilités sauf une, tu la trouves par
> soustraction. Et si la somme ne fait pas $1$, il y a une erreur.

---

## 6. Répéter l'expérience : fréquence et probabilité

Lance un dé $20$ fois : tu n'obtiendras sans doute pas exactement $3$ ou $4$ fois le
$6$, alors que sa probabilité est $\dfrac{1}{6}$.

> **Exemple.** $60$ lancers d'un dé, résultats enregistrés :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | Total |
|---|---|---|---|---|---|---|---|
| Effectif | $8$ | $12$ | $9$ | $11$ | $7$ | $13$ | $60$ |
| Fréquence | $0{,}13$ | $0{,}20$ | $0{,}15$ | $0{,}18$ | $0{,}12$ | $0{,}22$ | $1$ |

La probabilité théorique de chaque face est $\dfrac{1}{6} \approx 0{,}17$. Les fréquences
observées s'en écartent — c'est normal.

> **Ce qu'il faut retenir** : plus on répète l'expérience, plus les fréquences observées
> se **rapprochent** des probabilités théoriques. Sur $10$ lancers, l'écart peut être
> énorme. Sur $10\,000$, il devient minime.

> ⚠️ **Ne pas confondre les deux.**
> La **probabilité** se calcule *avant*, par le raisonnement : $\dfrac{1}{6}$.
> La **fréquence** se constate *après*, en comptant : $0{,}22$ pour le $6$ ici.
> Elles se rapprochent, elles ne sont pas égales.

> ⚠️ **L'erreur du joueur.** Après cinq « pile » d'affilée, la probabilité d'obtenir
> « face » au lancer suivant est **toujours $\dfrac{1}{2}$**. La pièce n'a pas de
> mémoire.

---

## 7. À retenir absolument

| | |
|---|---|
| Expérience aléatoire | on connaît les résultats possibles, pas lequel sortira |
| Issue | un résultat possible |
| Événement | regroupe une ou plusieurs issues |
| Encadrement | $0 \leqslant P \leqslant 1$ |
| $P = 0$ | impossible · $P = 1$ : certain |
| Équiprobabilité | $P = \dfrac{\text{issues favorables}}{\text{issues au total}}$ |
| Contrôle | la somme des probabilités de toutes les issues vaut $1$ |
| Trois écritures | fraction, décimale, pourcentage |
| Fréquence ≠ probabilité | l'une se constate, l'autre se calcule |
| Répétition | plus on répète, plus la fréquence approche la probabilité |

---

## 8. Les erreurs qui coûtent des points

1. **Annoncer une probabilité supérieure à $1$** ou négative : c'est impossible.
2. **Oublier des issues dans le total** : dans une urne, il faut additionner **toutes**
   les boules.
3. **Confondre issue et événement** : « obtenir un pair » n'est pas une issue, c'en est
   trois.
4. **Confondre fréquence et probabilité** : la fréquence se constate après coup, la
   probabilité se calcule avant.
5. **Croire qu'un résultat est « dû »** après une série : la pièce n'a pas de mémoire.
6. **Appliquer la formule sans équiprobabilité** : avec un dé truqué, elle ne vaut rien.
7. **Oublier de vérifier que la somme des probabilités fait $1$.**
8. **Arrondir trop tôt** : garde la fraction quand la division ne tombe pas juste.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel du cycle 4, thème « Organisation et gestion de données et
probabilités », niveau Cinquième, section « Probabilités »
(docs/programme-college-cycle4-maths-2026.txt).

CHAPITRE CRÉÉ LE 2026-08-11, troisième d'un lot destiné à compléter la 5e.

Correspondance objectif par objectif — tous les objectifs d'apprentissage de la section
sont couverts :

- « Aborder les questions relatives au hasard à partir de problèmes simples » → § 1
  et exemples concrets tout au long (dé, pièce, urne), conformément aux automatismes
  listés dans le texte.
- « Utiliser le vocabulaire des probabilités dans des contextes concrets : expérience
  aléatoire, issue, évènement » → § 1. Les TROIS termes du texte, définis et distingués.
- « Attribuer des probabilités dans des cas simples (équiprobabilité) » → § 4. Le mot
  « équiprobabilité » figure entre parenthèses dans le texte : la fiche en fait une
  condition explicite, et signale que la formule ne s'applique pas sinon.
- « Répéter matériellement une expérience aléatoire simple. Enregistrer les résultats
  observés dans un tableau d'effectifs et de fréquences » → § 6, avec un tableau de
  60 lancers. C'est le lien avec le chapitre Statistiques du même niveau.

Les automatismes de la section sont repris dans le § 2 (échelle des probabilités) et le
§ 3 : le texte cite nommément l'événement impossible, l'événement certain, pile ou face,
le dé, le tirage dans une urne, le loto, « 10 fois de suite la valeur 1 », les trois
écritures, et l'expression « une chance sur quatre ». Tous figurent dans la fiche.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- LA DATE DU BO, comme pour les autres fiches de 5e (voir la note de
  « parallelogrammes »).
- La NOTATION P(événement) est utilisée dès le § 2. Le texte de 5e ne l'introduit pas
  explicitement — il parle de « donner la probabilité » sans fixer de notation.
  Vérifier qu'elle est bien attendue à ce niveau, ou l'alléger.
- L'« erreur du joueur » (§ 6) et l'idée que la fréquence se rapproche de la
  probabilité quand on répète beaucoup relèvent de la loi des grands nombres, qui
  n'est pas au programme de 5e. Traitées de façon purement qualitative, sans la
  nommer : à valider.
- Le programme demande de « répéter MATÉRIELLEMENT une expérience » : c'est une
  activité de classe. La fiche la restitue par un tableau de résultats, ce qui en
  conserve l'idée mais pas la manipulation.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
