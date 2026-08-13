---
id: tale-spe-math-logique-ensembles
titre: "Vocabulaire ensembliste et logique"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 10
prerequis:
  - Ensembles de nombres $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$ (Seconde)
  - Intervalles de $\mathbb{R}$ (Seconde)
  - Notion de fonction et d'équation (Première)
statut: brouillon
relu_par: null
---

# Vocabulaire ensembliste et logique

> Ce chapitre ne t'apprend pas un nouveau calcul : il te donne la **langue** dans laquelle
> toutes les mathématiques de Terminale s'écrivent. Savoir ce qu'est une proposition, la
> nier, l'impliquer, c'est ce qui sépare une preuve d'une simple intuition. C'est un
> chapitre **transversal** : tu le retrouveras dans chaque démonstration de l'année.

---

## 1. Ensembles : appartenance et inclusion

Un **ensemble** est une collection d'objets, appelés ses **éléments**. On le décrit soit
en **extension** (on liste ses éléments), soit en **compréhension** (on donne la propriété
qui les caractérise).

$$A = \{0, 2, 4, 6\} \qquad B = \{\, n \in \mathbb{N} \mid n \text{ est pair}\,\}$$

### Appartenance

Dire qu'un objet $x$ est un élément de $A$ se note $x \in A$. Sinon, on écrit $x \notin A$.

$$\boxed{x \in A \quad\text{ou}\quad x \notin A}$$

> **Exemple.** $2 \in A$, mais $3 \notin A$. Attention : $\in$ relie un **élément** à un
> **ensemble**, jamais deux ensembles entre eux.

### Inclusion et sous-ensemble

$A$ est un **sous-ensemble** de $B$ (ou : $A$ est inclus dans $B$) lorsque **tout** élément
de $A$ est aussi élément de $B$. On note $A \subset B$.

$$\boxed{A \subset B \iff \big(\text{pour tout } x,\ x \in A \Rightarrow x \in B\big)}$$

> **Exemple.** $\{0, 2\} \subset A$, et l'on a la chaîne classique
> $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$.

### L'ensemble vide

L'ensemble qui ne contient **aucun** élément est l'**ensemble vide**, noté $\varnothing$.

> **Exemple.** $\{\, x \in \mathbb{R} \mid x^2 = -1 \,\} = \varnothing$ : aucun réel n'a un
> carré négatif. L'ensemble vide est inclus dans **tout** ensemble : $\varnothing \subset A$.

> ⚠️ Ne confonds pas $\varnothing$ et $\{0\}$. $\varnothing$ n'a **aucun** élément ;
> $\{0\}$ en a **un**, le nombre $0$.

---

## 2. Propositions, variables et quantificateurs

### Proposition mathématique

Une **proposition** (ou assertion) est un énoncé mathématique qui est **soit vrai, soit
faux** — jamais les deux, jamais « entre les deux ».

> **Exemple.** « $7$ est premier » est une proposition (vraie). « $3 > 5$ » est une
> proposition (fausse). En revanche « $x + 1$ » n'est **pas** une proposition : ce n'est
> pas un énoncé qu'on peut déclarer vrai ou faux.

### Variables

Un énoncé qui dépend d'une **variable**, comme $P(x) : « x > 2 »$, n'a pas de valeur de
vérité tant que $x$ n'est pas fixé : c'est un **prédicat**. Il devient une proposition dès
qu'on donne une valeur à $x$, ou qu'on le **quantifie**.

### Quantificateurs

| Symbole | Se lit | Sens |
|---|---|---|
| $\forall$ | « pour tout » | la propriété vaut pour **chaque** élément |
| $\exists$ | « il existe » | la propriété vaut pour **au moins un** élément |

> **Exemple.** $\forall x \in \mathbb{R},\ x^2 \geqslant 0$ est vraie. 
> $\exists x \in \mathbb{R},\ x^2 = 2$ est vraie (c'est $\sqrt{2}$). 
> $\forall x \in \mathbb{R},\ x^2 = 2$ est **fausse** (elle échoue dès $x = 0$).

> ⚠️ **L'ordre des quantificateurs change tout.** 
> $\forall x \in \mathbb{R},\ \exists y \in \mathbb{R},\ y > x$ est vraie (à chaque $x$ on
> choisit un $y$ plus grand). En échangeant : $\exists y,\ \forall x,\ y > x$ serait un
> $y$ plus grand que **tous** les réels : c'est faux.

---

## 3. Connecteurs logiques

À partir de propositions $P$ et $Q$, on en fabrique de nouvelles.

- **Conjonction** $P \text{ et } Q$ : vraie quand $P$ **et** $Q$ sont vraies toutes deux.
- **Disjonction** $P \text{ ou } Q$ : vraie dès qu'**au moins une** des deux est vraie.

> ⚠️ Le « ou » mathématique est **inclusif** : $P \text{ ou } Q$ reste vraie quand $P$ et
> $Q$ sont vraies **en même temps**. Ce n'est pas le « ou » exclusif du langage courant
> (« fromage ou dessert »).

> **Exemple.** Pour $x$ réel : « $x \geqslant 0$ **ou** $x \leqslant 0$ » est **toujours**
> vraie (en $x = 0$, les deux le sont).

---

## 4. Négation, implication, équivalence

### Négation

La **négation** de $P$, notée $\text{non } P$, est vraie exactement quand $P$ est fausse.
Nier une proposition **quantifiée** échange les quantificateurs et nie l'intérieur :

$$\boxed{\text{non}\,(\forall x,\ P(x)) \iff \exists x,\ \text{non}\,P(x)}$$
$$\boxed{\text{non}\,(\exists x,\ P(x)) \iff \forall x,\ \text{non}\,P(x)}$$

> **Exemple.** La négation de « $\forall x \in \mathbb{R},\ x^2 \geqslant 1$ » est
> « $\exists x \in \mathbb{R},\ x^2 < 1$ » — vraie, prends $x = 0$. Nier « pour tout »,
> c'est exhiber **un seul** contre-exemple.

La négation échange aussi « et » et « ou » (lois de De Morgan) :

$$\text{non}\,(P \text{ et } Q) \iff (\text{non } P) \text{ ou } (\text{non } Q)$$

### Implication

$P \Rightarrow Q$ (« $P$ implique $Q$ ») signifie : **si** $P$ est vraie, **alors** $Q$
l'est. Elle n'est **fausse** que dans un seul cas : $P$ vraie et $Q$ fausse.

$$\boxed{\text{non}\,(P \Rightarrow Q) \iff \big(P \text{ et } \text{non } Q\big)}$$

- La **réciproque** de $P \Rightarrow Q$ est $Q \Rightarrow P$ (souvent de valeur différente !).
- La **contraposée** de $P \Rightarrow Q$ est $\text{non } Q \Rightarrow \text{non } P$.

$$\boxed{(P \Rightarrow Q) \iff (\text{non } Q \Rightarrow \text{non } P)}$$

> **Exemple.** « $n$ pair $\Rightarrow n^2$ pair » est vraie. Sa réciproque « $n^2$ pair
> $\Rightarrow n$ pair » est vraie **aussi**, mais c'est un autre énoncé, à prouver
> séparément. Sa contraposée « $n^2$ impair $\Rightarrow n$ impair » lui est **équivalente**.

### Équivalence

$P \iff Q$ signifie $(P \Rightarrow Q)$ **et** $(Q \Rightarrow P)$ : $P$ et $Q$ ont la même
valeur de vérité. On dit « $P$ si et seulement si $Q$ ».

> **Exemple.** Pour $x$ réel : $x^2 = 1 \iff (x = 1 \text{ ou } x = -1)$. Prouver une
> équivalence, c'est prouver **les deux** implications.

---

## 5. Les grands types de raisonnement

C'est le cœur du chapitre : le programme demande de savoir raisonner **par disjonction de
cas, par l'absurde, par contraposée**.

### Disjonction de cas

On découpe la situation en cas qui **couvrent tout**, et on conclut dans chacun.

> **Exemple.** Montrer que $\forall n \in \mathbb{N},\ n(n+1)$ est pair. 
> **Cas 1** : $n$ pair, alors $n(n+1)$ est pair. **Cas 2** : $n$ impair, alors $n+1$ est
> pair, donc le produit l'est. Les deux cas couvrent tout $\mathbb{N}$ : c'est prouvé.

### Raisonnement par contraposée

Pour prouver $P \Rightarrow Q$, on prouve la **contraposée** $\text{non } Q \Rightarrow
\text{non } P$, qui lui est équivalente — parfois bien plus simple.

> **Exemple.** Montrer : « si $n^2$ est pair, alors $n$ est pair ». La contraposée « si $n$
> est impair, alors $n^2$ est impair » se prouve directement : $n = 2k+1$ donne
> $n^2 = 2(2k^2+2k)+1$, impair. La contraposée étant prouvée, l'énoncé de départ l'est.

### Raisonnement par l'absurde

Pour prouver une proposition, on **suppose sa négation** et on aboutit à une contradiction.

> **Exemple.** Montrer que $\sqrt{2} \notin \mathbb{Q}$. On suppose l'absurde :
> $\sqrt{2} = \dfrac{p}{q}$ irréductible. Alors $2q^2 = p^2$, donc $p$ est pair, $p = 2p'$,
> d'où $q^2 = 2p'^2$ et $q$ pair aussi. $p$ et $q$ tous deux pairs contredisent
> « irréductible ». La supposition est donc absurde : $\sqrt{2}$ est irrationnel.

### Et la récurrence ?

Le **raisonnement par récurrence** est un autre grand mode de preuve, exigé au programme.
Il est **prérequis du chapitre « Suites »** et y est traité en détail : reporte-toi à ce
chapitre pour l'initialisation, l'hérédité et la conclusion. On ne le développe pas ici.

---

## 6. Tableau récapitulatif

| Objet | Symbole | À retenir |
|---|---|---|
| Appartenance | $x \in A$ | relie un élément à un ensemble |
| Inclusion | $A \subset B$ | tout élément de $A$ est dans $B$ |
| Ensemble vide | $\varnothing$ | aucun élément ; inclus dans tout ensemble |
| Pour tout | $\forall$ | nié par $\exists\ \text{non}$ |
| Il existe | $\exists$ | nié par $\forall\ \text{non}$ |
| Ou | inclusif | vrai même si les deux le sont |
| Implication | $P \Rightarrow Q$ | fausse seulement si $P$ vraie et $Q$ fausse |
| Contraposée | $\text{non } Q \Rightarrow \text{non } P$ | **équivalente** à $P \Rightarrow Q$ |
| Réciproque | $Q \Rightarrow P$ | **pas** équivalente en général |
| Équivalence | $P \iff Q$ | les deux implications |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre implication et équivalence.** $P \Rightarrow Q$ ne donne pas $Q \Rightarrow P$.
   Prouver l'une ne prouve pas l'autre.
2. **Confondre réciproque et contraposée.** Seule la **contraposée** est équivalente à
   l'implication. La réciproque, elle, est un énoncé à démontrer à part.
3. **Nier une implication avec une autre implication.** La négation de $P \Rightarrow Q$
   n'est pas $P \Rightarrow \text{non } Q$, mais « $P$ **et** $\text{non } Q$ ».
4. **Oublier de retourner les quantificateurs en niant.** La négation de « $\forall x, P(x)$ »
   est « $\exists x, \text{non } P(x)$ », pas « $\forall x, \text{non } P(x)$ ».
5. **Lire le « ou » comme exclusif.** En maths, $P \text{ ou } Q$ est vraie quand les deux
   le sont.
6. **Écrire $x \subset A$ pour un élément, ou $x \in A$ pour un sous-ensemble.** $\in$ relie
   un élément à un ensemble ; $\subset$ relie deux ensembles.
7. **Croire qu'un contre-exemple prouve un « pour tout ».** Un contre-exemple **réfute** un
   « $\forall$ » ; il ne prouve jamais un énoncé universel.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

CHAPITRE TRANSVERSAL / GABARIT ADAPTÉ : ce chapitre est un chapitre de vocabulaire et de
méthode, sans calcul mécanique propre. Il est volontairement PLUS COURT que la moyenne des
fiches de spécialité (~200 lignes ; ici ~190). Les sections « Démonstrations exigibles » et
« Cas particuliers de calcul » du gabarit standard ont été fondues : les démonstrations
servent ici d'exemples aux types de raisonnement (section 5), et les « pièges » sont portés
par la section 7. Aucun outil.json (rien de déterministe à calculer). À VALIDER par le
relecteur : cet écart au gabarit est-il accepté pour un chapitre transversal ?

SOURCE DU PROGRAMME — PROVENANCE PARTICULIÈRE (mention obligatoire n°1) :
Fichier docs/programme-terminale-specialite-maths-2027.txt, section « VOCABULAIRE
ENSEMBLISTE ET LOGIQUE » (lignes 23 à 35). ⚠️ Ce fichier n'a PAS été obtenu par la chaîne
d'extraction habituelle : son texte a été RECONSTITUÉ VIA WebFetch depuis un miroir
(xm1math.net), le proxy du sandbox bloquant le téléchargement du PDF officiel. AVANT TOUTE
PUBLICATION, ce texte DOIT être confronté au PDF officiel (education.gouv.fr / éduscol).
Voir l'en-tête de provenance du fichier source (lignes 1 à 20).

NIVEAU TERMINALE — HORS PÉRIMÈTRE INITIAL DU PROJET (mention obligatoire n°2) :
Le gabarit (docs/gabarit-chapitre.md, ligne ~197) interdisait d'écrire pour la Terminale
avant 2027, son programme changeant. Ce chapitre est produit à la DEMANDE EXPLICITE de
l'utilisateur, qui veut couvrir TOUT le programme, et repose sur le NOUVEAU programme
applicable à la RENTRÉE 2027, déjà publié. Le relecteur doit confirmer que ce périmètre
Terminale 2027 est désormais bien dans le champ du projet.

CONTENU couvert (recopié du programme) : élément, sous-ensemble, ensemble vide,
appartenance, inclusion et symboles ; proposition mathématique ; connecteurs et
quantificateurs ; négation de propositions simples ; implication, équivalence ; raisonnement
par disjonction de cas, par l'absurde, par contraposée.

RÉCURRENCE : mentionnée volontairement en section 5 comme prérequis du chapitre « Suites »,
mais NON développée ici (traitée à fond dans Suites), conformément à la consigne.

POINTS À TRANCHER PAR LE RELECTEUR :
- Union (∪) et intersection (∩) : NON traitées, car absentes de la rubrique « Contenus » de
  cette section (le programme ne cite que appartenance/inclusion/vide). Elles apparaissent
  plutôt dans « Combinatoire et dénombrement ». Confirmer ce choix de périmètre.
- Notation de l'inclusion : le fichier source ne précise pas si le programme distingue ⊂ et
  ⊆. J'ai retenu ⊂ (inclusion au sens large, usage lycée courant). À vérifier sur le PDF.
- Lois de De Morgan et négation de l'implication : ajoutées comme outils de la négation ;
  vérifier qu'elles sont dans l'esprit du niveau attendu (le programme ne cite explicitement
  que « formuler la négation de propositions simples »).

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
