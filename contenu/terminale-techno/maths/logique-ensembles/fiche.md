---
id: tale-techno-math-logique-ensembles
titre: "Vocabulaire ensembliste et logique"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Intervalles de nombres réels (Seconde)
  - Notations des ensembles de nombres $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{R}$ (Seconde)
statut: brouillon
relu_par: null
---

# Vocabulaire ensembliste et logique

> Ce chapitre ne contient presque aucun calcul : il te donne le **vocabulaire** et les
> **règles du jeu** que tu utilises dans tous les autres chapitres — probabilités,
> fonctions, suites. Bien maîtrisé, il rapporte des points partout ; mal maîtrisé,
> il en fait perdre partout.

---

# Ensembles

## 1. Élément, appartenance

Un **ensemble** est une collection d'objets. Chaque objet est un **élément** de
l'ensemble.

- $x \in E$ se lit « $x$ **appartient** à $E$ » : $x$ est un élément de $E$.
- $x \notin E$ se lit « $x$ n'appartient pas à $E$ ».

On peut décrire un ensemble en **listant ses éléments** entre accolades :
$E = \{2\,;4\,;6\,;8\}$, ou par une **condition** : « les entiers pairs entre 1 et 9 ».

> **Exemple.** Soit $E = \{1\,;3\,;5\,;7\}$ l'ensemble des numéros impairs d'un dé à
> 8 faces. Alors $3 \in E$ mais $4 \notin E$. De même, $-3 \in \mathbb{Z}$ mais
> $-3 \notin \mathbb{N}$ : les entiers naturels sont les entiers positifs ou nuls.

⚠️ L'ordre et les répétitions ne comptent pas : $\{1\,;2\,;3\}$ et $\{3\,;1\,;2\}$
sont **le même ensemble**.

---

## 2. Sous-ensemble, inclusion

$A$ est un **sous-ensemble** (ou une **partie**) de $E$ quand **tous** les éléments
de $A$ appartiennent aussi à $E$. On note :

$$\boxed{A \subset E \quad \text{« } A \text{ est inclus dans } E \text{ »}}$$

> **Exemple.** Dans une classe $E$ de terminale, l'ensemble $A$ des élèves qui font
> l'option théâtre est un sous-ensemble de la classe : $A \subset E$. Chaque élève de
> l'option est bien un élève de la classe. De même,
> $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{R}$ : tout entier naturel est un
> entier relatif, tout entier relatif est un réel.

### ⚠️ Ne confonds pas $\in$ et $\subset$

C'est LE piège du chapitre.

- $\in$ relie un **élément** à un ensemble : $2 \in \{1\,;2\,;3\}$.
- $\subset$ relie un **ensemble** à un ensemble : $\{2\} \subset \{1\,;2\,;3\}$.

Écrire $2 \subset \{1\,;2\,;3\}$ ou $\{2\} \in \{1\,;2\,;3\}$ est **faux** dans les
deux cas.

---

## 3. Réunion, intersection, complémentaire

On travaille avec deux parties $A$ et $B$ d'un même ensemble $E$.

| Notation | Nom | Contient les éléments… | Mot-clé |
|---|---|---|---|
| $A \cap B$ | **intersection** | qui sont dans $A$ **et** dans $B$ | « et » |
| $A \cup B$ | **réunion** | qui sont dans $A$ **ou** dans $B$ | « ou » |
| $\bar{A}$ | **complémentaire** | de $E$ qui ne sont **pas** dans $A$ | « non » |

$$\boxed{A \cap B : \text{« et »} \qquad A \cup B : \text{« ou »} \qquad \bar{A} : \text{« non »}}$$

> **Exemple.** Dans un lycée, $A$ = ensemble des élèves demi-pensionnaires,
> $B$ = ensemble des élèves qui prennent le bus.
> - $A \cap B$ : les élèves demi-pensionnaires **et** qui prennent le bus ;
> - $A \cup B$ : les élèves demi-pensionnaires **ou** qui prennent le bus
>   (y compris ceux qui sont les deux à la fois) ;
> - $\bar{A}$ : les élèves externes (ceux qui ne sont pas demi-pensionnaires).

> **Exemple chiffré.** $A = \{1\,;2\,;3\,;4\}$ et $B = \{3\,;4\,;5\}$ :
> $$A \cap B = \{3\,;4\} \qquad A \cup B = \{1\,;2\,;3\,;4\,;5\}$$
> Remarque : $3$ et $4$ ne sont comptés qu'**une fois** dans la réunion.

Moyen mnémotechnique : $\cap$ ressemble à un **n** comme i**n**tersection, $\cup$
ressemble à un **U** comme ré**u**nion.

### Un élément et son complémentaire

Chaque élément de $E$ est **soit dans $A$, soit dans $\bar{A}$**, jamais les deux :

$$A \cap \bar{A} = \varnothing \qquad A \cup \bar{A} = E$$

où $\varnothing$ est l'**ensemble vide** (aucun élément). C'est exactement ce que tu
utilises en probabilités avec $P(\bar{A}) = 1 - P(A)$.

---

## 4. Couple et produit cartésien

Un **couple** $(a\,;b)$ est la donnée de deux objets **dans un ordre précis** :
d'abord $a$, ensuite $b$.

⚠️ Contrairement aux ensembles, **l'ordre compte** : $(1\,;2) \neq (2\,;1)$,
alors que $\{1\,;2\} = \{2\,;1\}$.

Le **produit cartésien** de deux ensembles $A$ et $B$ est l'ensemble de **tous les
couples** dont le premier élément est dans $A$ et le second dans $B$ :

$$\boxed{A \times B = \{(a\,;b) \text{ avec } a \in A \text{ et } b \in B\}}$$

> **Exemple.** Un menu propose $A = \{\text{pizza}\,;\text{burger}\}$ et
> $B = \{\text{eau}\,;\text{jus}\,;\text{soda}\}$. Le produit cartésien $A \times B$
> est l'ensemble des formules « plat + boisson » possibles :
> (pizza ; eau), (pizza ; jus), (pizza ; soda), (burger ; eau), (burger ; jus),
> (burger ; soda). Soit $2 \times 3 = 6$ couples.

Si $A$ a $n$ éléments et $B$ a $p$ éléments, alors $A \times B$ compte
$\boxed{n \times p}$ couples. C'est le principe des **tableaux à double entrée** :
une ligne par élément de $A$, une colonne par élément de $B$, une case par couple.
Tu connais déjà un produit cartésien : le plan muni d'un repère, où chaque point est
repéré par un couple $(x\,;y)$ — d'où la notation $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$.

---

# Logique

## 5. Propositions et connecteurs « et », « ou »

Une **proposition** est une phrase mathématique qui est soit **vraie**, soit
**fausse** — pas les deux, pas « ça dépend de qui parle ». « $12$ est pair » est une
proposition vraie ; « $7 < 3$ » est une proposition fausse.

À partir de deux propositions $P$ et $Q$, on en construit d'autres :

| Proposition | Vraie quand… |
|---|---|
| « $P$ **et** $Q$ » | $P$ et $Q$ sont **toutes les deux** vraies |
| « $P$ **ou** $Q$ » | **au moins une** des deux est vraie |

⚠️ Le « ou » mathématique est **inclusif** : « $P$ ou $Q$ » est vraie aussi quand les
deux sont vraies. Ce n'est pas le « ou bien » du menu (« fromage ou dessert »).

> **Exemple.** $x = 6$. La proposition « $x$ est pair **et** $x > 10$ » est **fausse**
> (la deuxième condition échoue). La proposition « $x$ est pair **ou** $x > 10$ » est
> **vraie** (la première condition suffit).

Le lien avec les ensembles : si $A$ est l'ensemble des $x$ qui vérifient $P$ et $B$
l'ensemble des $x$ qui vérifient $Q$, alors « $P$ et $Q$ » correspond à $A \cap B$,
« $P$ ou $Q$ » correspond à $A \cup B$.

> **Exemple.** Les réels tels que « $x \geq -1$ et $x < 3$ » forment l'intervalle
> $[-1\,;3[$, intersection de $[-1\,;+\infty[$ et de $]-\infty\,;3[$.

---

## 6. Le statut d'une égalité

Le signe $=$ n'a pas toujours le même sens. Devant une égalité, demande-toi
toujours : **est-ce vrai pour tout $x$, ou est-ce une question ?**

| Statut | Exemple | Ce qu'on en fait |
|---|---|---|
| **Identité** : vraie pour **toutes** les valeurs | $(x+1)^2 = x^2 + 2x + 1$ | on peut remplacer l'une par l'autre partout |
| **Équation** : vraie pour **certaines** valeurs | $x^2 = 9$ | on cherche les solutions ($x = 3$ ou $x = -3$) |
| **Définition / affectation** : on **pose** une valeur | $f(x) = 3x - 5$, ou `x = x + 1` en Python | on donne un nom, on ne démontre rien |

> **Exemple.** « $2(x+3) = 2x + 6$ » est une identité : c'est la distributivité,
> vraie pour tout $x$. « $2x + 6 = 10$ » est une équation : elle n'est vraie que pour
> $x = 2$.

⚠️ En Python, `x = x + 1` n'est pas une équation absurde : c'est une **affectation**
(« la nouvelle valeur de $x$ est l'ancienne plus 1 »). Même symbole, statut
complètement différent.

---

## 7. Le contre-exemple

Pour montrer qu'une proposition **universelle** (« pour tout… ») est **fausse**, un
seul exemple qui la contredit suffit : c'est un **contre-exemple**.

$$\boxed{\text{Un seul contre-exemple suffit à prouver qu'une proposition est fausse.}}$$

> **Exemple.** « Pour tout réel $x$, $x^2 > x$. » Contre-exemple : $x = 0{,}5$ donne
> $x^2 = 0{,}25 < 0{,}5$. La proposition est fausse. ($x = 0$ ou $x = 1$ marchent
> aussi : $x^2 = x$, donc pas $x^2 > x$.)

En revanche, la situation n'est **pas symétrique** : des exemples, même nombreux, ne
**prouvent jamais** qu'une proposition universelle est vraie — il faudrait les
vérifier **tous**. Pour la prouver, il faut un **raisonnement général**.

> **Exemple.** Vérifier que $(x+1)^2 = x^2 + 2x + 1$ pour $x = 1$, $x = 2$ et
> $x = 5$ ne prouve rien. Développer $(x+1)^2 = x^2 + x + x + 1$ pour un $x$
> quelconque prouve l'identité.

---

## 8. Proposition, réciproque

Beaucoup d'énoncés ont la forme « **si** $P$, **alors** $Q$ ». Sa **réciproque** est
l'énoncé obtenu en échangeant les deux : « si $Q$, alors $P$ ».

$$\boxed{\text{Une proposition peut être vraie et sa réciproque fausse.}}$$

> **Exemple.** « Si un entier se termine par 0, alors il est divisible par 5 » :
> **vraie**. Réciproque : « si un entier est divisible par 5, alors il se termine
> par 0 » : **fausse** — contre-exemple : 15 est divisible par 5 et se termine par 5.

> **Exemple de la vie courante.** « S'il pleut, alors le trottoir est mouillé » est
> raisonnable. La réciproque « si le trottoir est mouillé, alors il pleut » est
> fausse : quelqu'un a pu passer avec un tuyau d'arrosage.

Quand la proposition **et** sa réciproque sont vraies, on dit que $P$ et $Q$ sont
**équivalentes** : « $P$ si et seulement si $Q$ ».

---

## 9. Condition nécessaire, condition suffisante

Dans « si $P$, alors $Q$ » (vraie) :

- $P$ est une condition **suffisante** pour $Q$ : il **suffit** que $P$ soit vraie
  pour que $Q$ le soit ;
- $Q$ est une condition **nécessaire** pour $P$ : si $P$ est vraie, $Q$ l'est
  **forcément** — mais $Q$ seule ne garantit pas $P$.

> **Exemple.** « Si $x = 3$, alors $x^2 = 9$. »
> - $x = 3$ est **suffisant** pour avoir $x^2 = 9$ ;
> - $x^2 = 9$ est **nécessaire** pour avoir $x = 3$, mais pas suffisant :
>   $x = -3$ donne aussi $x^2 = 9$.

> **Exemple de la vie courante.** Avoir 18 ans est **nécessaire** pour passer le
> permis de conduire en candidat libre, mais pas **suffisant** : il faut aussi
> réussir le code et la conduite.

Pour ne pas les confondre, dans « si $P$ alors $Q$ » : l'hypothèse (à gauche) est
**suffisante**, la conclusion (à droite) est **nécessaire**. Le suffisant
**déclenche**, le nécessaire est **exigé**.

---

## 10. Tableau récapitulatif

| Notation / expression | Sens |
|---|---|
| $x \in E$ | $x$ est un **élément** de $E$ |
| $A \subset E$ | $A$ est un ensemble **inclus** dans $E$ |
| $A \cap B$ | intersection — « **et** » |
| $A \cup B$ | réunion — « **ou** » (inclusif) |
| $\bar{A}$ | complémentaire — « **non** » |
| $\varnothing$ | ensemble vide |
| $(a\,;b)$ | couple — **l'ordre compte** |
| $A \times B$ | produit cartésien : tous les couples, $n \times p$ au total |
| identité | égalité vraie pour **toutes** les valeurs |
| équation | égalité vraie pour **certaines** valeurs, à trouver |
| contre-exemple | **un seul** suffit pour réfuter un « pour tout » |
| réciproque de « si $P$ alors $Q$ » | « si $Q$ alors $P$ » — pas automatiquement vraie |
| condition suffisante | l'hypothèse $P$ : elle **suffit** à déclencher $Q$ |
| condition nécessaire | la conclusion $Q$ : elle est **obligatoire** quand $P$ est vraie |

---

## 11. Les erreurs qui coûtent des points

1. **Confondre $\in$ et $\subset$.** Un élément **appartient**, un ensemble est
   **inclus** : $2 \in \{1\,;2\}$ mais $\{2\} \subset \{1\,;2\}$.
2. **Confondre $\cap$ et $\cup$.** Retiens $\cap$ = i**n**tersection = « et » ;
   $\cup$ = ré**u**nion = « ou ».
3. **Lire le « ou » comme exclusif.** En maths, « $P$ ou $Q$ » est vraie aussi quand
   les deux sont vraies.
4. **Croire que trois exemples prouvent un « pour tout ».** Des exemples illustrent ;
   seul un raisonnement général (ou la vérification de tous les cas) démontre. En
   revanche, **un** contre-exemple suffit à réfuter.
5. **Utiliser la réciproque comme si elle était vraie.** De « si $P$ alors $Q$ » et
   « $Q$ est vraie », tu ne peux **rien** déduire sur $P$ : le trottoir mouillé ne
   prouve pas la pluie.
6. **Échanger nécessaire et suffisant.** Dans « si $P$ alors $Q$ », c'est $P$ qui est
   suffisante et $Q$ qui est nécessaire — pas l'inverse.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« VOCABULAIRE ENSEMBLISTE ET LOGIQUE » (ligne 21).

Couverture, dans l'ordre du programme : éléments d'un ensemble, sous-ensemble,
appartenance et inclusion, réunion, intersection et complémentaire (§1-3) ; notion de
couple et produit cartésien de deux ensembles (§4) ; connecteurs « et », « ou » (§5) ;
statut d'une égalité (§6) ; contre-exemple (§7) ; proposition et réciproque (§8) ;
conditions nécessaire / suffisante (§9).

Choix de rédaction pour la voie technologique : exemples concrets (cantine, bus,
menu, permis de conduire) avant les exemples numériques ; pas de tables de vérité,
pas de quantificateurs formels (∀, ∃), pas de notation en compréhension
{x ∈ E | P(x)} — le texte extrait du programme ne les mentionne pas.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction ne donne pas la rubrique « Capacités attendues » de cette section
  (contrairement aux autres sections du fichier) : vérifier sur le PDF s'il en
  existe une et si elle exige des capacités non couvertes ici (par exemple les lois
  de De Morgan, la négation d'une proposition, ou l'écriture en compréhension).
- La notation retenue pour le complémentaire ($\bar{A}$, cohérente avec les
  probabilités) : le PDF utilise peut-être $\complement_E A$.
- Le point de vocabulaire « ou inclusif » et le lien affectation Python / statut du
  signe égal : présents dans les préambules habituels, à confirmer sur ce programme.
- L'exemple du permis à 18 ans (candidat libre) : simplification assumée d'une règle
  administrative, à valider comme illustration.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
