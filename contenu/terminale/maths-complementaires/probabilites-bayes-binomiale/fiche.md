---
id: tale-compl-math-probabilites-bayes-binomiale
titre: "Probabilités : conditionnelles, Bayes et loi binomiale"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 15
prerequis:
  - Probabilités, événements et arbres pondérés (Première)
  - Union, intersection et événement contraire (Seconde)
  - Puissances et calcul fractionnaire (Seconde)
statut: brouillon
relu_par: null
---

# Probabilités : conditionnelles, Bayes et loi binomiale

> Un test médical est positif : quelle est vraiment la probabilité d'être
> malade ? Une chaîne produit 200 pièces : combien seront défectueuses ? Ces deux
> questions se règlent avec les mêmes outils — **probabilité conditionnelle**,
> **arbre pondéré**, **formule de Bayes** d'un côté, **loi binomiale** de l'autre.
> Ce chapitre les relie.

---

## 1. Probabilité conditionnelle

### Définition

La **probabilité conditionnelle** de $B$ **sachant** $A$ est la probabilité que $B$
se réalise quand on sait déjà que $A$ est réalisé. On la note $P_A(B)$ (ou $P(B \mid A)$) :

$$\boxed{P_A(B) = \frac{P(A \cap B)}{P(A)}} \qquad \text{définie pour } P(A) \neq 0$$

> **Exemple.** Dans une classe, $60\,\%$ des élèves font de l'anglais ($A$) et
> $24\,\%$ font anglais **et** espagnol ($A \cap B$). Parmi les anglicistes, la
> proportion d'hispanophones est
> $$P_A(B) = \frac{0{,}24}{0{,}60} = 0{,}4.$$

### Propriété — probabilité d'une intersection

En multipliant en croix, on obtient la formule qui fait « descendre » un arbre :

$$\boxed{P(A \cap B) = P(A) \times P_A(B)}$$

> **Exemple.** Une urne contient $5$ boules dont $2$ gagnantes. On tire deux boules
> **sans remise**. Probabilité de tirer deux gagnantes :
> $$P(G_1 \cap G_2) = P(G_1) \times P_{G_1}(G_2) = \frac{2}{5} \times \frac{1}{4} = \frac{1}{10}.$$

### Cas de l'indépendance

$A$ et $B$ sont **indépendants** lorsque la réalisation de $A$ ne change pas la
probabilité de $B$ : $P_A(B) = P(B)$. La formule d'intersection devient alors le
simple produit $P(A \cap B) = P(A) \times P(B)$.

> ⚠️ **Indépendant $\neq$ incompatible.** Deux événements incompatibles
> ($A \cap B = \varnothing$) de probabilités non nulles ne sont **jamais**
> indépendants : si l'un se produit, l'autre devient impossible.

---

## 2. Arbre pondéré

Un **arbre pondéré** organise une expérience en étapes. Chaque branche porte une
probabilité ; les branches issues d'un même nœud portent des probabilités **qui se
somment à $1$**.

Trois règles de lecture :

1. **Le long d'un chemin, on multiplie.** La probabilité d'un chemin est le produit
   des probabilités de ses branches — c'est exactement $P(A \cap B) = P(A)\,P_A(B)$.
2. **Une branche de 2e niveau est une probabilité conditionnelle** : la branche
   « $B$ après $A$ » vaut $P_A(B)$.
3. **Pour un événement atteint par plusieurs chemins, on additionne** les chemins.

> **Exemple.** Deux machines produisent des pièces. La machine $A$ fabrique $70\,\%$
> des pièces, avec $2\,\%$ de défauts ; la machine $B$ les $30\,\%$ restants, avec
> $5\,\%$ de défauts. Le chemin « machine $A$ puis défaut $D$ » vaut
> $P(A \cap D) = 0{,}70 \times 0{,}02 = 0{,}014$.

---

## 3. Formule des probabilités totales

### Propriété

Si les événements $A_1, A_2, \dots, A_n$ forment une **partition** de l'univers
(deux à deux incompatibles, de réunion l'univers, de probabilités non nulles), alors
pour tout événement $B$ :

$$\boxed{P(B) = P(A_1 \cap B) + \dots + P(A_n \cap B) = \sum_{i=1}^{n} P(A_i)\,P_{A_i}(B)}$$

Dans l'arbre, cela revient à **additionner tous les chemins qui mènent à $B$**.

> **Exemple (suite).** Probabilité qu'une pièce prise au hasard soit défectueuse :
> $$P(D) = P(A)P_A(D) + P(B)P_B(D) = 0{,}70 \times 0{,}02 + 0{,}30 \times 0{,}05 = 0{,}014 + 0{,}015 = 0{,}029.$$

> **Cas le plus fréquent : la partition $A$ / $\overline{A}$.** Un événement et son
> contraire forment toujours une partition, d'où
> $$P(B) = P(A)\,P_A(B) + P(\overline{A})\,P_{\overline{A}}(B).$$

---

## 4. Formule de Bayes

### Le problème : « inverser » le conditionnement

L'arbre donne facilement $P_A(D)$ (défaut **sachant** la machine). Bayes répond à la
question inverse : une pièce est défectueuse, **de quelle machine vient-elle**,
c'est-à-dire $P_D(A)$ ?

### Propriété

$$\boxed{P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)\,P_A(B)}{P(B)}}$$

où $P(B)$ se calcule, au besoin, par la **formule des probabilités totales**. C'est
la clé : on descend l'arbre pour obtenir $P(B)$, puis on remonte.

> **Exemple (dépistage).** Une maladie touche $2\,\%$ d'une population ($M$). Le test
> est positif ($T$) dans $95\,\%$ des cas quand on est malade et dans $1\,\%$ des cas
> quand on est sain. Une personne est testée positive : quelle est la probabilité
> qu'elle soit malade ?
> $$P(T) = P(M)P_M(T) + P(\overline{M})P_{\overline{M}}(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}01 = 0{,}0288.$$
> $$P_T(M) = \frac{P(M)\,P_M(T)}{P(T)} = \frac{0{,}02 \times 0{,}95}{0{,}0288} = \frac{0{,}019}{0{,}0288} \approx 0{,}66.$$
> Un positif n'a « que » $66\,\%$ de chances d'être malade : la maladie étant rare,
> les faux positifs pèsent lourd. C'est le résultat contre-intuitif classique.

---

## 5. Épreuve et loi de Bernoulli

### Définition

Une **épreuve de Bernoulli** est une expérience à **deux issues** seulement : le
**succès** $S$, de probabilité $p$, et l'**échec** $\overline{S}$, de probabilité
$1 - p$.

La **loi de Bernoulli** de paramètre $p$ est la loi de la variable $X$ qui vaut $1$
en cas de succès et $0$ en cas d'échec :

$$\boxed{P(X = 1) = p \qquad P(X = 0) = 1 - p} \qquad 0 \leqslant p \leqslant 1$$

Son espérance est $E(X) = 1 \times p + 0 \times (1 - p) = p$.

> **Exemple.** « Obtenir un $6$ » avec un dé équilibré : succès de probabilité
> $p = \tfrac{1}{6}$, échec de probabilité $\tfrac{5}{6}$.

> **Le succès, c'est toi qui le choisis** : simplement l'issue qui t'intéresse. Une
> fois fixé, $p$ ne s'échange plus avec $1 - p$.

---

## 6. Schéma de Bernoulli

### Définition

Un **schéma de Bernoulli** est la **répétition de $n$ épreuves de Bernoulli
identiques et indépendantes**, toutes de même paramètre $p$.

> **Trois conditions à vérifier :**
> 1. chaque épreuve n'a que **deux issues** (succès / échec) ;
> 2. les épreuves sont **indépendantes** ;
> 3. la probabilité de succès $p$ est **la même** à chaque épreuve.

> **Exemple.** Lancer $12$ fois une pièce truquée qui tombe sur Pile avec
> $p = 0{,}3$ (succès = Pile) : schéma de Bernoulli de paramètres $n = 12$ et
> $p = 0{,}3$.

### Probabilité d'un chemin à $k$ succès

Dans l'arbre, un chemin donnant $k$ succès et $n - k$ échecs a pour probabilité

$$p^{\,k}\,(1 - p)^{\,n-k}$$

quel que soit l'**ordre** des succès (on multiplie les branches, le produit ne
dépend pas de l'ordre).

---

## 7. Loi binomiale $B(n, p)$

### Définition

On répète un schéma de Bernoulli de paramètres $n$ et $p$. La variable $X$ qui compte
le **nombre de succès** parmi les $n$ épreuves suit la **loi binomiale** de paramètres
$n$ et $p$, notée $X \sim B(n, p)$. Elle prend les valeurs entières de $0$ à $n$.

### Propriété — expression de $P(X = k)$

$$\boxed{P(X = k) = \binom{n}{k}\,p^{\,k}\,(1 - p)^{\,n-k}} \qquad 0 \leqslant k \leqslant n$$

Les trois morceaux :

- $\dbinom{n}{k}$ = **nombre de chemins** donnant $k$ succès (façons de placer les $k$
  succès parmi les $n$ épreuves) ;
- $p^{\,k}$ = probabilité des $k$ succès d'un chemin ; $(1-p)^{\,n-k}$ = celle des
  $n - k$ échecs.

Le coefficient $\dbinom{n}{k}$ (« $k$ parmi $n$ ») se lit à la calculatrice ; pour de
petites valeurs, $\dbinom{n}{0} = \dbinom{n}{n} = 1$ et $\dbinom{n}{1} = n$.

> **Exemple.** Pièce équilibrée lancée $n = 4$ fois, succès = Pile, $p = \tfrac12$.
> $$P(X = 2) = \binom{4}{2}\left(\tfrac12\right)^2\left(\tfrac12\right)^2 = 6 \times \frac{1}{16} = \frac{3}{8}.$$
> Le $6 = \binom{4}{2}$ compte les $6$ façons de placer les deux Piles.

### Espérance de la loi binomiale

$$\boxed{E(X) = np}$$

C'est le **nombre moyen de succès** attendu sur $n$ épreuves (résultat admis).

> **Exemple.** Sur $200$ pièces avec $p = 0{,}02$ de défaut, on attend en moyenne
> $E(X) = 200 \times 0{,}02 = 4$ pièces défectueuses.

---

## 8. Méthodes de calcul

Pose toujours $n$, $p$ et la valeur (ou l'intervalle) de $k$ avant de te lancer.

### a) Une valeur exacte : $P(X = k)$

Application directe de la formule.

> $X \sim B(10\,;\,0{,}2)$ : $P(X = 3) = \dbinom{10}{3}(0{,}2)^3(0{,}8)^7 \approx 0{,}201$.

### b) Une probabilité cumulée : $P(X \leqslant k)$

C'est la **somme** $P(X = 0) + \dots + P(X = k)$, lue à la calculatrice (« binomFRép »
/ « BinomialCDF »).

> **Passage au complémentaire** — souvent le plus rapide :
> $$\boxed{P(X \geqslant k) = 1 - P(X \leqslant k - 1)} \qquad P(X > k) = 1 - P(X \leqslant k)$$
> En particulier « au moins un succès » : $P(X \geqslant 1) = 1 - P(X = 0) = 1 - (1-p)^n$.

### c) Un intervalle : $P(k \leqslant X \leqslant k')$

$$\boxed{P(k \leqslant X \leqslant k') = P(X \leqslant k') - P(X \leqslant k - 1)}$$

> ⚠️ C'est $k - 1$ à droite, pas $k$ : sinon tu **oublies** le terme $P(X = k)$.

### d) Appliquer Bayes dans une répétition

Quand l'énoncé mêle conditionnement et binomiale (« sachant qu'il y a eu au moins un
défaut… »), calcule d'abord la probabilité binomiale de l'événement conditionnant,
puis applique $P_B(A) = \dfrac{P(A \cap B)}{P(B)}$.

---

## 9. Tableau récapitulatif

| Objet | Formule / idée clé |
|---|---|
| Probabilité conditionnelle | $P_A(B) = \dfrac{P(A \cap B)}{P(A)}$, $\;P(A) \neq 0$ |
| Intersection | $P(A \cap B) = P(A)\,P_A(B)$ |
| Indépendance | $P_A(B) = P(B)$, soit $P(A \cap B) = P(A)P(B)$ |
| Probabilités totales | $P(B) = \sum_i P(A_i)\,P_{A_i}(B)$ (partition) |
| Formule de Bayes | $P_B(A) = \dfrac{P(A)\,P_A(B)}{P(B)}$ |
| Loi de Bernoulli | $P(X=1)=p$, $\;P(X=0)=1-p$, $\;E(X)=p$ |
| Schéma de Bernoulli | $n$ épreuves identiques, indépendantes, à 2 issues |
| Loi binomiale | $X \sim B(n,p)$, $X$ = nombre de succès |
| Probabilité exacte | $P(X=k)=\dbinom{n}{k}p^{\,k}(1-p)^{\,n-k}$ |
| « Au moins un » | $P(X\geqslant 1)=1-(1-p)^n$ |
| Complémentaire | $P(X\geqslant k)=1-P(X\leqslant k-1)$ |
| Intervalle | $P(k\leqslant X\leqslant k')=P(X\leqslant k')-P(X\leqslant k-1)$ |
| Espérance | $E(X)=np$ |

---

## 10. Les erreurs qui coûtent des points

1. **Inverser le conditionnement.** $P_A(B)$ et $P_B(A)$ ne sont **pas** égaux :
   $P_T(M) \neq P_M(T)$. Confondre « positif sachant malade » et « malade sachant
   positif » est l'erreur reine de ce chapitre — c'est précisément ce que Bayes corrige.
2. **Confondre indépendant et incompatible.** Incompatible veut dire
   $A \cap B = \varnothing$ ; indépendant veut dire $P_A(B) = P(B)$. Deux notions
   distinctes, souvent opposées.
3. **Oublier le coefficient $\binom{n}{k}$.** Écrire $P(X=k)=p^k(1-p)^{n-k}$ ne donne
   la probabilité que d'**un seul** chemin : le résultat est trop petit.
4. **Confondre $P(X=k)$ et $P(X\leqslant k)$.** « Exactement $k$ » est **un** terme ;
   « au plus $k$ » est une **somme**. Relis toujours « exactement / au moins / au plus ».
5. **Se tromper de borne dans un intervalle.** $P(k\leqslant X\leqslant k')$ vaut
   $P(X\leqslant k') - P(X\leqslant k-1)$, avec $k-1$ — sinon le terme $P(X=k)$ disparaît.
6. **Utiliser la binomiale sur un tirage sans remise.** Sans remise, $p$ change d'une
   épreuve à l'autre : les épreuves ne sont plus indépendantes, ce n'est **pas** un
   schéma de Bernoulli.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
section « === Probabilités : conditionnelles, Bayes et loi binomiale === »
(############ MATHÉMATIQUES COMPLÉMENTAIRES ############), rubriques Contenus et
Capacités. Programme des enseignements optionnels de mathématiques, terminale
générale, arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019.

⚠️ PROVENANCE : le fichier .txt du programme a été extrait via WebFetch depuis les PDF
officiels education.gouv.fr (voir en-tête « SOURCE OFFICIELLE » du .txt : PDF
spe265_annexe pour les maths complémentaires). Cette extraction doit être CONFRONTÉE au
PDF officiel avant publication.

Contenus du programme couverts : probabilités conditionnelles (§1) ; arbre pondéré
(§2) ; formule des probabilités totales (§3) ; formule de Bayes (§4) ; épreuve et loi
de Bernoulli (§5) ; schéma de Bernoulli (§6) ; loi binomiale (§7). Capacités traitées :
représenter par un arbre (§2), appliquer Bayes (§4), calculer des probabilités avec la
loi binomiale (§8), espérance de la loi binomiale E(X)=np (§7).

CHOIX DE PÉRIMÈTRE / À SOUMETTRE AU RELECTEUR :
- Le programme maths complémentaires cite « espérance de la loi binomiale » mais PAS la
  variance : V(X)=np(1-p) n'est donc PAS mentionnée (contrairement au chapitre de
  spécialité). À confirmer avec le relecteur que ce périmètre est le bon.
- La notation du coefficient binomial retenue est $\binom{n}{k}$ (cohérente avec les
  usages BO 2019) plutôt que $C_n^k$. À harmoniser après relecture.
- Le programme complémentaire ne demande PAS explicitement les problèmes de seuil ni les
  démonstrations : la fiche reste au niveau « appliquer/calculer » des capacités.
- Valeurs numériques à revérifier : exemple Bayes dépistage (P(T)=0,0288 ; P_T(M)≈0,66),
  P(X=3)≈0,201 pour B(10;0,2). Calculs refaits à la main, cohérents.

Rédaction originale à partir du seul programme officiel, aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
