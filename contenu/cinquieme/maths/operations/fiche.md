---
id: 5e-math-operations
titre: "Opérations"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Les quatre opérations sur les nombres décimaux (6e)
  - Division euclidienne, quotient et reste (6e)
  - Tables de multiplication (cycle 3)
  - Critères de divisibilité par 2, 5 et 10 (CM1-CM2)
statut: brouillon
relu_par: null
---

# Opérations

> Calculer, ce n'est pas seulement trouver un résultat. C'est **choisir la bonne
> opération**, **l'écrire correctement** — l'ordre compte, les parenthèses aussi — et
> surtout **vérifier que le résultat est vraisemblable**. Un calcul juste dont on ne
> sait pas dire d'où il sort ne sert à rien.

---

## 1. Nommer un calcul

Avant de calculer, il faut savoir **de quel calcul on parle**. Chaque opération a son
vocabulaire.

| Opération | Le calcul s'appelle | Ses éléments s'appellent |
|---|---|---|
| Addition $+$ | une **somme** | des **termes** |
| Soustraction $-$ | une **différence** | des **termes** |
| Multiplication $\times$ | un **produit** | des **facteurs** |
| Division $\div$ | un **quotient** | dividende et diviseur |

> **Exemple.** Dans $7 + 4$, les nombres $7$ et $4$ sont les **termes** d'une somme.
> Dans $7 \times 4$, ce sont les **facteurs** d'un produit. Mêmes nombres, mot différent :
> on ne dit jamais « les termes d'un produit ».

### Somme ou produit ?

On regarde **la dernière opération qu'on effectuerait**.

> **Exemple.** $3 + 4 \times 5$ est une **somme** (le dernier calcul est l'addition),
> alors que $(3 + 4) \times 5$ est un **produit**.

---

## 2. Le sens des opérations

Savoir calculer ne suffit pas : il faut savoir **quand** utiliser chaque opération.

| Ce que dit le problème | Opération |
|---|---|
| réunir, ajouter, mettre ensemble | addition |
| retirer, écart entre deux valeurs, comparer | soustraction |
| répéter un même nombre, rangée par rangée, prix unitaire × quantité | multiplication |
| partager équitablement, ou chercher « combien de fois » | division |

> **Exemple — les deux visages de la division.**
> « $12$ bonbons partagés entre $4$ enfants » → $3$ bonbons chacun.
> « Combien de paquets de $4$ dans $12$ bonbons ? » → $3$ paquets.
> Même calcul $12 \div 4 = 3$, deux situations très différentes.

---

## 3. Division euclidienne

Diviser un entier par un entier ne tombe pas toujours juste. On écrit alors :

$$\boxed{a = b \times q + r \qquad \text{avec } 0 \leqslant r < b}$$

- $a$ le **dividende**, $b$ le **diviseur**
- $q$ le **quotient**, $r$ le **reste**

> **Exemple.** $17 = 5 \times 3 + 2$ : en partageant $17$ en parts de $5$, on fait
> $3$ parts et il **reste** $2$.
> Le diviseur est $5$, le quotient $3$, le reste $2$.

> ⚠️ **Le reste est toujours plus petit que le diviseur.** Si tu trouves un reste
> supérieur ou égal au diviseur, c'est que tu pouvais encore faire une part.
> $17 = 5 \times 2 + 7$ est vrai… mais ce n'est **pas** la division euclidienne,
> car $7 > 5$.

---

## 4. Multiples et diviseurs

Quand $a = b \times q$ **sans reste** :

- $a$ est un **multiple** de $b$ (et de $q$)
- $b$ est un **diviseur** de $a$ (et $q$ aussi)

> **Exemple.** $21 = 3 \times 7$ : $21$ est un multiple de $3$ et de $7$, et $3$ et $7$
> sont des diviseurs de $21$.
>
> **Repère anti-confusion.** Entre entiers positifs, le **multiple est le plus grand**,
> le **diviseur est le plus petit**.

### Factoriser avec les tables

Tes tables de multiplication servent à **casser un nombre en produit** — ce qui te
resservira pour simplifier des fractions.

> **Exemples.** $21 = 3 \times 7$ · $36 = 4 \times 9$ · $56 = 7 \times 8$

---

## 5. Critères de divisibilité

Ce sont des tests **sans calculer la division**.

### Ceux que tu connais déjà — tout se joue sur le chiffre des unités

- **par $2$** : unités $0$, $2$, $4$, $6$ ou $8$
- **par $5$** : unités $0$ ou $5$ · **par $10$** : unités $0$

> **Exemple.** $4\,250$ finit par $0$ : divisible par $2$, par $5$ **et** par $10$.

### Les deux nouveaux : $3$ et $9$

$$\boxed{\text{divisible par } 3 \iff \text{la somme de ses chiffres est un multiple de } 3}$$

$$\boxed{\text{divisible par } 9 \iff \text{la somme de ses chiffres est un multiple de } 9}$$

> **Exemple 1.** $4\,251$ : $4+2+5+1 = 12$, multiple de $3$ mais pas de $9$.
> Donc $4\,251$ est divisible par $3$, **pas** par $9$.
>
> **Exemple 2.** $6\,831$ : $6+8+3+1 = 18$, multiple de $9$ (et de $3$).
> Donc $6\,831$ est divisible par $9$ **et** par $3$.

> ⚠️ **Sens unique.** Divisible par $9$ ⟹ divisible par $3$. L'inverse est **faux** :
> $12$ est divisible par $3$, pas par $9$.

---

## 6. Priorités opératoires

Quand plusieurs opérations se suivent, l'ordre n'est pas libre.

$$\boxed{1.\ \text{parenthèses} \quad 2.\ \times \text{ et } \div \quad 3.\ + \text{ et } -}$$

Et **à priorité égale, on calcule de gauche à droite.**

> **Exemple.** $3 + 4 \times 5 = 3 + 20 = 23$ — et **pas** $35$ : la multiplication
> passe avant. Avec des parenthèses, l'addition reprend la main :
> $(3 + 4) \times 5 = 7 \times 5 = 35$.

> ⚠️ **Le piège de la gauche à droite.** $20 - 8 - 5 = 12 - 5 = 7$, et **pas**
> $20 - 3 = 17$. Deux soustractions ont la même priorité : on part de la gauche.
> Pareil pour les divisions : $36 \div 6 \div 3 = 6 \div 3 = 2$, et non $18$.

---

## 7. Traduire un programme de calcul

Un **programme de calcul** est une suite d'instructions. Il faut savoir l'écrire en
**une seule expression**.

> **Programme A.** « Choisis un nombre, **ajoute $3$**, puis **multiplie par $5$**. »
> L'addition doit se faire en premier → **parenthèses obligatoires** : $(n + 3) \times 5$.
> Avec $n = 4$ : $(4+3) \times 5 = 35$.
>
> **Programme B.** « Choisis un nombre, **multiplie par $5$**, puis **ajoute $3$**. »
> La multiplication est déjà prioritaire → **pas de parenthèses** : $n \times 5 + 3$.
> Avec $n = 4$ : $4 \times 5 + 3 = 23$.

> ⚠️ **La question à te poser** : « l'opération que je dois faire en premier est-elle
> déjà prioritaire ? » Si oui, pas de parenthèses. Si non, parenthèses.

---

## 8. Distributivité (sur des nombres)

Multiplier une somme, c'est multiplier chaque terme :

$$\boxed{k \times (a + b) = k \times a + k \times b}$$
$$\boxed{k \times (a - b) = k \times a - k \times b}$$

C'est un **outil de calcul mental**, pas seulement une formule.

> **Exemple 1.** $12 \times 101 = 12 \times (100 + 1) = 1\,200 + 12 = 1\,212$.
>
> **Exemple 2.** $7 \times 99 = 7 \times (100 - 1) = 700 - 7 = 693$.

> ⚠️ **On distribue sur TOUS les termes.** $12 \times 101 = 12 \times 100 + 1$ est
> faux : le $1$ doit lui aussi être multiplié par $12$.

---

## 9. Multiplier et diviser par $10$, $100$, $1\,000$

Multiplier décale la virgule **à droite**, diviser la décale **à gauche**, d'autant de
rangs qu'il y a de zéros.

> **Exemples.** $0{,}6 \times 7 = 4{,}2$ · $40 \times 0{,}03 = 1{,}2$ ·
> $3{,}5 \times 100 = 350$ · $47 \div 1\,000 = 0{,}047$

### Diviser par un nombre décimal

On **multiplie le dividende et le diviseur par $10$, $100$ ou $1\,000$** jusqu'à ce que
le diviseur devienne entier. Le quotient, lui, ne change pas.

> **Exemple 1.** $4{,}8 \div 0{,}6 = 48 \div 6 = 8$ (les deux $\times 10$).
>
> **Exemple 2.** $12 \div 0{,}25 = 1\,200 \div 25 = 48$ (les deux $\times 100$).

> ⚠️ **Diviser ne rend pas toujours plus petit.** Diviser par un nombre **inférieur
> à $1$** donne un résultat **plus grand** que le nombre de départ : $12 \div 0{,}25 = 48$.
> C'est logique : « combien de fois $0{,}25$ tient-il dans $12$ ? » — beaucoup de fois.

---

## 10. Contrôler la vraisemblance du résultat

Un calcul n'est terminé que quand tu as vérifié qu'il est **plausible**. La méthode :
remplacer les nombres par des nombres ronds et calculer **de tête**.

> **Exemple.** $4{,}2 \times 19{,}8$ → ordre de grandeur $4 \times 20 = 80$.
> Le résultat exact, $83{,}16$, est cohérent ✓
> Si ta calculatrice affiche $8{,}316$ ou $831{,}6$, la virgule est au mauvais endroit.

**Trois façons de calculer, trois usages :** le **calcul mental** pour les automatismes
et les ordres de grandeur ; le **calcul réfléchi**, où l'on décompose malin (la
distributivité de la section 8) ; le **calcul posé** quand les nombres sont trop gros
pour la tête.

La **calculatrice** vient en appui, jamais à la place. Elle ne dit pas si le résultat a
du sens : c'est **toi** qui vérifies.

> **Pour aller plus loin (culture, hors évaluation).** Certains entiers n'ont que deux
> diviseurs, $1$ et eux-mêmes : les **nombres premiers** ($2$, $3$, $5$, $7$, $11$…).
> Ératosthène avait inventé une méthode pour les repérer il y a plus de $2\,200$ ans —
> et on sait qu'il y en a une infinité.

---

## 11. À retenir absolument

| | |
|---|---|
| Somme / produit | **termes** / **facteurs** |
| Division euclidienne | $a = b \times q + r$ avec $0 \leqslant r < b$ |
| Multiple / diviseur | $21 = 3 \times 7$ : $21$ multiple de $3$, $3$ diviseur de $21$ |
| Divisible par $3$ | somme des chiffres multiple de $3$ |
| Divisible par $9$ | somme des chiffres multiple de $9$ |
| Priorités | parenthèses → $\times\ \div$ → $+\ -$ |
| Priorité égale | de **gauche à droite** |
| Distributivité | $k(a+b) = ka + kb$ |
| Diviser par un décimal | $\times 10$ ou $\times 100$ **des deux côtés** |
| Avant de conclure | **ordre de grandeur** |

---

## 12. Les erreurs qui coûtent des points

1. **Calculer de gauche à droite en ignorant les priorités.** $3 + 4 \times 5$ vaut
   $23$, pas $35$.
2. **Oublier que $-$ et $\div$, eux, se lisent bien de gauche à droite.**
   $20 - 8 - 5 = 7$, pas $17$. $36 \div 6 \div 3 = 2$, pas $18$.
3. **Écrire un programme de calcul sans les parenthèses.** « Ajoute $3$ puis multiplie
   par $5$ » s'écrit $(n+3) \times 5$, pas $n + 3 \times 5$.
4. **Distribuer sur un seul terme.** $12 \times (100+1)$ vaut $1\,200 + 12$, pas
   $1\,200 + 1$.
5. **Confondre multiple et diviseur**, ou laisser un **reste supérieur au diviseur**
   dans une division euclidienne.
6. **Croire que divisible par $3$ entraîne divisible par $9$.** C'est vrai dans l'autre
   sens seulement.

> Et le réflexe qui rattrape tout le reste : **ne jamais rendre un résultat sans l'avoir
> regardé.** Un ordre de grandeur mental prend cinq secondes et sauve une virgule mal
> placée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt
Thème « Nombres et calculs », niveau Cinquième, entrée « Opérations » :
LIGNES 373 à 397 (l'entrée suivante, « Nombres relatifs », commence ligne 398).
Deux passages du préambule général du cycle 4 ont également été mobilisés pour la
section 10 : lignes 180-182 (« Le calcul mental, le calcul réfléchi et le calcul posé
restent des objectifs majeurs du cycle 4 ») et lignes 184-186 (« la vérification de la
cohérence des résultats à travers la maitrise des ordres de grandeurs »).

CORRESPONDANCE SECTION -> LIGNE DU BO
§1  Nommer un calcul .................. l.389 (sommes/produits, termes/facteurs)
§2  Sens des opérations ............... l.383-384 (sens et situations d'emploi)
§3  Division euclidienne .............. l.376 (automatisme ; « 17 = 3 × 5 + 2 »)
    NB : le BO écrit « 17 = 3 × 5 + 2 » ; la fiche écrit « 17 = 5 × 3 + 2 » pour aligner
    les facteurs sur la forme a = b × q + r (b diviseur, q quotient) et éviter que
    l'élève prenne 3 pour le diviseur. Produit identique — signaler si l'on préfère la
    graphie littérale du BO.
§4  Multiples et diviseurs ............ l.392 + l.377-378 (factoriser, « 21 = 3 × 7 »)
§5  Critères de divisibilité .......... l.375 (2, 5, 10 : rappel CM1-CM2) + l.393 (3 et 9)
§6  Priorités opératoires ............. l.386 (enchainer) + l.390 (priorités)
§7  Programme de calcul ............... l.387-388 (une seule expression, parenthèses)
§8  Distributivité .................... l.391 (« sur des exemples numériques »)
§9  ×/÷ par 10, 100, 1000 ; décimal ... l.380 + l.385 + l.379 + l.381
§10 Vraisemblance ..................... l.383 (« contrôler la vraisemblance »)
Encadré « Pour aller plus loin » ...... l.396-397 (prolongement historique et culturel :
    nombres premiers, Ératosthène) — marqué hors évaluation dans la fiche.

PÉRIMÈTRE — LAISSÉ AUX CHAPITRES VOISINS (qui ont leur propre entrée au BO)
- Nombres relatifs (l.398-419) : tous les exemples de la fiche sont donc en nombres
  positifs ; priorités avec relatifs et parenthèses de signe relèvent de ce chapitre-là.
- Nombres rationnels (l.420-474) : aucune opération sur les fractions ici.
- Puissances (l.475-485) : les priorités n'incluent donc PAS le niveau « puissances »,
  absent de l'entrée Opérations de 5e.
- Calcul littéral (l.486-508) : §8 s'en tient aux « exemples numériques » (l.391) ; la
  forme littérale k(a+b)=ka+kb pour développer/factoriser est rangée en Calcul littéral
  (l.498), comme les équations ax=c et x+b=c (l.504-505). En §7 la lettre sert seulement
  à écrire un programme de calcul, jamais à développer ni résoudre.
  ⚠️ FRONTIÈRE LA PLUS FINE DE LA FICHE — à confirmer par le relecteur.

À TRANCHER PAR LE RELECTEUR
1. « Ordre de grandeur » n'apparait PAS dans l'entrée Opérations de 5e, qui dit seulement
   « contrôler la vraisemblance de son résultat » (l.383). L'expression figure au
   préambule général (l.186) et à propos des puissances de dix (l.351). Je l'ai donc
   présentée comme la MÉTHODE de contrôle, sans en faire un objectif nommé. À valider.
2. « Calcul instrumenté » : mot absent du texte. Le BO écrit « calcul mental, calcul
   réfléchi et calcul posé » (l.181) — j'ai repris ce vocabulaire exact ; la calculatrice
   vient de l.166-189. Ces lignes sont au préambule du cycle, pas dans l'entrée 5e : dire
   si ce contenu a sa place ici.
3. Critères de divisibilité : le texte ne nomme QUE 2, 5, 10 puis 3 et 9. Je n'ai
   volontairement pas ajouté 4, 6 ni 25, courants en manuel mais absents du BO.
4. ⚠️ POINT LE PLUS INCERTAIN — « Mobiliser un algorithme dans le cadre du calcul
   numérique » (l.394) n'est couvert qu'INDIRECTEMENT (division euclidienne §3, procédure
   de division par un décimal §9, programme de calcul §7). Le texte ne précise pas ce
   qu'il entend par « algorithme » ici. Si une section dédiée (langage algorithmique,
   tableur) est attendue, elle reste à écrire.
5. « Dividende / diviseur » (§1, §3) n'est pas listé tel quel dans l'entrée Opérations,
   contrairement à « termes » et « facteurs » (l.389). Attendu en 5e ?
6. Le préambule fixe : « on appelle quotient le résultat d'une division ou l'expression
   d'une division » (l.331-332). J'emploie « quotient » dans ces deux sens (§1 et §3),
   conformément au texte — à relire.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
-->
