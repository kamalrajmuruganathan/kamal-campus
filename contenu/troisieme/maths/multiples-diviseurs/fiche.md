---
id: 3e-math-multiples-diviseurs
titre: "Multiples et diviseurs"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 11
prerequis:
  - Multiples, diviseurs et critères de divisibilité (5e — chapitre « Opérations »)
  - Division euclidienne, quotient et reste (6e)
  - Tables de multiplication (cycle 3)
  - Fractions égales et simplification (5e)
  - Puissances et notation exposant (4e)
statut: brouillon
relu_par: null
---

# Multiples et diviseurs

> En 5e, tu as appris à **reconnaitre** qu'un nombre en divise un autre. En 3e, on va
> plus loin : on **casse** un entier en morceaux qui ne se cassent plus, et cette
> décomposition devient une carte d'identité du nombre. Elle sert à une chose très
> concrète : simplifier une fraction **jusqu'au bout**, sans tâtonner.

---

## 1. Le vocabulaire, en une ligne

Pour deux entiers $a$ et $b$, avec $b \neq 0$ :

$$\boxed{b \text{ divise } a \iff \text{il existe un entier } q \text{ tel que } a = b \times q}$$

On dit alors que $a$ est un **multiple** de $b$, et que $b$ est un **diviseur** de $a$.

> **Exemple.** $63 = 7 \times 9$ : $63$ est un multiple de $7$ et de $9$ ; $7$ et $9$ sont
> des diviseurs de $63$.

> ⚠️ **Deux conditions.** On travaille avec des **entiers** (le quotient $q$ doit être
> entier, sinon tout nombre diviserait tout nombre), et le diviseur n'est **jamais nul**.

> **Repère anti-confusion.** Entre entiers positifs, le **multiple est le plus grand**,
> le **diviseur est le plus petit**. $7$ ne peut pas être un multiple de $63$.

---

## 2. Les critères de divisibilité — rappel express

Tu les connais depuis la 5e. Ils ne sont pas réexpliqués ici : le cours complet, avec les
justifications et les exemples, est dans **`cinquieme/maths/operations`, section 5**.

Ceux dont tu as besoin en 3e :

| Divisible par | Test |
|---|---|
| $2$ | chiffre des unités : $0$, $2$, $4$, $6$ ou $8$ |
| $3$ | somme des chiffres multiple de $3$ |
| $5$ | chiffre des unités : $0$ ou $5$ |
| $9$ | somme des chiffres multiple de $9$ |

> **Exemple.** $2\,025$ : il est impair, donc **pas** divisible par $2$. Sa somme des
> chiffres vaut $2+0+2+5 = 9$, donc il est divisible par $9$ (et par $3$). Il finit par
> $5$, donc il est divisible par $5$.

> ⚠️ **Sens unique.** Divisible par $9$ ⟹ divisible par $3$. La réciproque est fausse :
> $12$ est divisible par $3$, pas par $9$.

Ces quatre tests sont ta **boite à outils pour la section suivante** : ils te disent par
quoi commencer à diviser, sans poser un seul calcul.

---

## 3. Factoriser un entier positif

**Factoriser**, c'est écrire un entier sous forme de **produit**.

### Les briques qui ne se cassent plus

Certains entiers ne s'écrivent **pas** comme un produit de deux entiers plus petits
qu'eux : $2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$, $23$… On les appelle les **nombres
premiers**. Ils n'ont que deux diviseurs : $1$ et eux-mêmes.

> ⚠️ **$1$ n'est pas premier** : il n'a qu'un seul diviseur, lui-même.
> Et **$2$ est le seul nombre premier pair** — tous les autres pairs sont divisibles par $2$.

### La méthode

1. Teste les nombres premiers **dans l'ordre** : $2$, puis $3$, puis $5$, puis $7$, $11$…
   (les critères de la section 2 te disent lesquels marchent).
2. Divise, et **recommence avec le quotient** obtenu.
3. Arrête-toi quand le quotient vaut $1$.
4. Regroupe les facteurs identiques en **puissances**.

> **Exemple — l'entier $60$.**
> $60 \div 2 = 30$ · $30 \div 2 = 15$ · $15 \div 3 = 5$ · $5 \div 5 = 1$.
> $$60 = 2 \times 2 \times 3 \times 5 = \boxed{2^2 \times 3 \times 5}$$

> **Exemple — l'entier $2\,025$.** Il est impair : on saute $2$. Somme des chiffres $= 9$,
> donc on divise par $3$ : $2\,025 \div 3 = 675$, puis $675 \div 3 = 225$,
> $225 \div 3 = 75$, $75 \div 3 = 25$, puis $25 = 5 \times 5$.
> $$2\,025 = 3^4 \times 5^2$$

> **Vérifie toujours en remontant** : $2^2 \times 3 \times 5 = 4 \times 15 = 60$ ✓
> Une décomposition se contrôle en dix secondes, ne saute jamais cette étape.

### Ce que la décomposition te dit

Une fois le nombre décomposé, **tous ses diviseurs se lisent dedans** : ce sont les
produits qu'on peut fabriquer avec ses facteurs.

> **Exemple.** $84 = 2^2 \times 3 \times 7$.
> $6 = 2 \times 3$ est un diviseur ✓ · $14 = 2 \times 7$ est un diviseur ✓ ·
> $21 = 3 \times 7$ est un diviseur ✓
> Mais $8 = 2^3$ **n'est pas** un diviseur : il faudrait trois $2$, or $84$ n'en contient
> que deux.

---

## 4. Simplifier une fraction

C'est **l'usage principal** de tout ce qui précède.

### Cas rapide : même table de multiplication

Quand le numérateur et le dénominateur sont dans une **même table**, tu vois le facteur
commun d'un coup d'œil et tu le retires.

> **Exemple 1.** $\dfrac{15}{35}$ — table de $5$ : $15 = 5 \times 3$ et $35 = 5 \times 7$.
> $$\frac{15}{35} = \frac{5 \times 3}{5 \times 7} = \frac{3}{7}$$
>
> **Exemple 2.** $\dfrac{63}{14}$ — table de $7$ : $63 = 7 \times 9$ et $14 = 7 \times 2$.
> $$\frac{63}{14} = \frac{7 \times 9}{7 \times 2} = \frac{9}{2}$$

> ⚠️ **Ce qui reste, c'est l'AUTRE facteur.** Dans $\dfrac{63}{14}$, on barre les $7$ et on
> garde $9$ et $2$ — pas $7$. Écrire $\dfrac{7}{2}$ est l'erreur la plus fréquente ici.

> ⚠️ Une fraction simplifiée peut être **supérieure à $1$** : $\dfrac{9}{2}$ est correct,
> il n'y a rien à « corriger ».

### Cas général : par décomposition

Quand aucune table ne saute aux yeux, décompose **le haut et le bas**, puis barre tous
les facteurs communs.

> **Exemple.** $\dfrac{84}{126}$
>
> $$84 = 2^2 \times 3 \times 7 \qquad 126 = 2 \times 3^2 \times 7$$
>
> Facteurs communs : un $2$, un $3$, un $7$.
> $$\frac{84}{126} = \frac{2 \times 3 \times 7 \times 2}{2 \times 3 \times 7 \times 3}
> = \frac{2}{3}$$

Une fraction est **irréductible** quand le numérateur et le dénominateur n'ont **plus
aucun facteur premier commun**. C'est la seule vérification à faire pour être sûr d'avoir
fini.

> **Pourquoi cette méthode plutôt que de tâtonner** : en divisant au hasard, tu obtiens
> $\dfrac{84}{126} = \dfrac{42}{63} = \dfrac{14}{21} = \dfrac{2}{3}$ après trois étapes, et
> tu risques de t'arrêter avant. La décomposition te donne **d'un coup** tout ce qu'il y a
> à retirer : $2 \times 3 \times 7 = 42$.

> **Le mot « PGCD ».** Le nombre $42$ ci-dessus, obtenu en multipliant **tous les facteurs
> communs**, est le plus grand diviseur commun à $84$ et $126$. Ton professeur peut
> l'appeler le **PGCD**. Ce sigle **ne figure pas** dans le programme 2026 : ce qui est
> attendu de toi, c'est la **méthode** — décomposer, barrer les facteurs communs — pas le
> vocabulaire.

---

## 5. Trouver un dénominateur commun

Pour **additionner**, **soustraire** ou **comparer** deux fractions, il faut d'abord leur
donner le même dénominateur. Il suffit de trouver un **multiple commun** aux deux.

**Le produit des deux dénominateurs marche toujours** — mais il donne souvent des nombres
inutilement gros. Cherche un multiple commun plus petit : les décompositions te le donnent.

> **Exemple.** $\dfrac{1}{12} + \dfrac{1}{18}$
>
> $$12 = 2^2 \times 3 \qquad 18 = 2 \times 3^2$$
>
> Il faut un nombre qui contienne **assez de $2$ pour $12$ et assez de $3$ pour $18$** :
> deux $2$ et deux $3$, soit $2^2 \times 3^2 = 36$.
> $$\frac{1}{12} + \frac{1}{18} = \frac{3}{36} + \frac{2}{36} = \frac{5}{36}$$
>
> Le produit $12 \times 18 = 216$ aurait marché aussi, mais il aurait fallu simplifier
> $\dfrac{30}{216}$ à la fin.

> **Pour comparer, c'est le même travail.** $\dfrac{5}{12}$ et $\dfrac{7}{18}$ deviennent
> $\dfrac{15}{36}$ et $\dfrac{14}{36}$ : donc $\dfrac{5}{12} > \dfrac{7}{18}$.
>
> ⚠️ Un numérateur **et** un dénominateur plus grands ne rendent pas la fraction plus
> grande. Ici $7 > 5$ et $18 > 12$, et pourtant $\dfrac{7}{18}$ est la **plus petite**.

---

## 6. Là où ça sert vraiment

Multiples et diviseurs ne servent pas qu'aux fractions. Dès qu'une situation fait
**revenir deux rythmes différents au même point**, ce sont des multiples communs.

> **Engrenages.** Deux roues dentées engrenées, l'une de $12$ dents, l'autre de $18$.
> Elles retrouvent leur position de départ après $36$ dents défilées — soit $3$ tours de
> la petite et $2$ tours de la grande.
>
> **Phénomènes périodiques.** Deux clignotants, l'un toutes les $12$ s, l'autre toutes
> les $18$ s : ils clignotent ensemble toutes les $36$ s.

Même calcul que le dénominateur commun de la section 5. Les problèmes de calendrier, de
cycles d'éclosion ou de conjonctions astronomiques se traitent exactement pareil.

---

## 7. Cas particuliers et pièges de calcul

| Situation | Ce qu'il faut savoir |
|---|---|
| $1$ | n'est **pas** premier ; il divise tout entier |
| $2$ | **seul** nombre premier pair |
| $n$ est premier | sa décomposition, c'est **lui-même** : $17 = 17$ |
| $\dfrac{a}{b}$ déjà irréductible | rien à faire — $\dfrac{7}{9}$ ne se simplifie pas |
| Fraction $> 1$ | une fraction irréductible peut valoir $\dfrac{9}{2}$ |
| Nombre qui « a l'air » premier | $91 = 7 \times 13$, $51 = 3 \times 17$, $57 = 3 \times 19$ |

> ⚠️ **Le piège de $91$.** Il est impair, sa somme des chiffres vaut $10$, il ne finit pas
> par $0$ ni $5$ : ni $2$, ni $3$, ni $5$ ne marchent. Beaucoup s'arrêtent là et le
> déclarent premier. **Il faut continuer avec $7$** : $91 = 7 \times 13$.

---

## 8. À retenir absolument

| | |
|---|---|
| $b$ divise $a$ | il existe un entier $q$ tel que $a = b \times q$ |
| Multiple / diviseur | le multiple est le **plus grand** |
| Nombre premier | exactement **deux** diviseurs : $1$ et lui-même |
| $1$ | **pas** premier |
| Factoriser | diviser par $2$, $3$, $5$, $7$… jusqu'à obtenir $1$ |
| Exemple type | $60 = 2^2 \times 3 \times 5$ |
| Contrôle | **remultiplier** pour retrouver le nombre |
| Simplifier | barrer les facteurs communs, garder **les autres** |
| Irréductible | **aucun** facteur premier commun |
| Dénominateur commun | le produit marche toujours ; un multiple commun plus petit est mieux |

---

## 9. Les erreurs qui coûtent des points

1. **Garder le facteur barré.** Dans $\dfrac{63}{14} = \dfrac{7 \times 9}{7 \times 2}$, la
   réponse est $\dfrac{9}{2}$ — pas $\dfrac{7}{2}$. On garde **ce qui reste**, pas ce
   qu'on a retiré.
2. **S'arrêter trop tôt.** $\dfrac{84}{126} = \dfrac{42}{63}$ est vrai, mais ce n'est
   **pas** irréductible. Le contrôle : reste-t-il un facteur commun ?
3. **Décomposer à moitié.** $60 = 2^2 \times 15$ n'est pas une décomposition en facteurs
   premiers : $15$ se casse encore. On ne s'arrête qu'à $1$.
4. **Oublier un facteur en regroupant.** $60 = 2 \times 3 \times 5$ vaut $30$ : il manque
   un $2$. Remultiplier prend cinq secondes et attrape l'erreur à tous les coups.
5. **Déclarer premier un nombre non testé jusqu'au bout.** $91$, $51$, $57$ n'ont l'air de
   rien et se cassent tous.
6. **Simplifier une somme.** Dans $\dfrac{2 + 7}{2}$, on ne barre **rien** : la règle ne
   marche que sur des **produits**.
7. **Additionner les dénominateurs** au lieu de chercher un dénominateur commun :
   $\dfrac{1}{12} + \dfrac{1}{18}$ ne fait pas $\dfrac{2}{30}$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt
Thème « Nombres et calculs », niveau Troisième (l.581-644), entrée « Multiples et
diviseurs » : LIGNES 615 à 623. L'entrée suivante, « Calcul littéral et algébrique »,
commence l.624.

⚠️⚠️ POINT LE PLUS IMPORTANT POUR LE RELECTEUR — L'ENTRÉE NE CONTIENT QUE DES AUTOMATISMES
« Multiples et diviseurs » (3e) n'a **aucune** rubrique « Objectifs d'apprentissage », ni
« Prolongements possibles ». C'est la seule entrée de Nombres et calculs dans ce cas.
Le texte intégral de l'entrée tient en quatre puces (l.617-623) :
  − Factoriser un nombre entier positif : 60 = 2² × 3 × 5.
  − Simplifier une fraction dont le numérateur et le dénominateur sont dans une même table
    de multiplication, par exemple 15/35 et 63/14.
  − Trouver un dénominateur commun à deux fractions pour les additionner, les soustraire
    ou les comparer.
  − Appliquer les critères de divisibilité par 2, 3, 5, 9.
Le statut « automatisme » (défini l.313-314 : « compétences fondamentales devant être
acquises de manière fluide et durable ») change la nature du chapitre : c'est un chapitre
d'ENTRAINEMENT, pas d'introduction de notions nouvelles. La fiche est calibrée là-dessus
(peu de théorie, beaucoup de méthode). À valider.

CORRESPONDANCE SECTION -> LIGNE DU BO
§1 Vocabulaire multiple/diviseur .... titre de l'entrée l.615 + l.392 (5e) ; RAPPEL
§2 Critères de divisibilité ......... l.623 (2, 3, 5, 9)
§3 Factoriser un entier ............. l.617, exemple « 60 = 2² × 3 × 5 » repris tel quel
§4 Simplifier une fraction .......... l.618-621, les deux exemples 15/35 et 63/14 sont
   ceux du BO ; forme irréductible : l.586-587 (entrée « Nombres rationnels », 3e)
§5 Dénominateur commun .............. l.622 (additionner, soustraire, comparer)
§6 Applications ..................... l.342 (« utilisés en lien avec les fractions, mais
   également dans le cadre de résolution de problèmes ») et l.357-359 (« calendrier,
   informatique, engrenages, conjonction de phénomènes périodiques, cycles d'éclosion »)
   — ces deux passages sont au préambule du THÈME, pas dans l'entrée 3e. Signalé.
§7-§9 .............................. pas de source directe : mise en forme pédagogique

⚠️ TROIS ATTENDUS SUPPOSÉS QUI NE SONT PAS DANS LE TEXTE — comptages sur le fichier entier
1. « PGCD » : ZÉRO occurrence dans tout le programme du cycle 4. Idem « PPCM ».
   « Euclide » n'apparait qu'en géométrie (l.718, l.808) ; « division euclidienne »
   seulement en 5e (l.376), et l'ALGORITHME d'Euclide nulle part.
   → La fiche n'enseigne donc PAS le PGCD comme notion, ni l'algorithme d'Euclide.
   Elle expose en revanche la MÉTHODE complète de mise sous forme irréductible par
   décomposition (§4), puisque « Mettre une fraction sous forme irréductible » /
   « Rendre irréductible une fraction » sont bien exigés (l.586-587) et que le chapitre
   3e « Nombres rationnels » renvoie ici. Le sigle PGCD est mentionné dans un encadré de
   §4 explicitement signalé hors programme, parce que les élèves l'entendront en classe.
   ➡️ ARBITRAGE À TRANCHER : faut-il aller jusqu'à enseigner le PGCD comme notion nommée,
   au risque d'ajouter du hors-programme, ou s'en tenir à la méthode ? J'ai choisi la
   méthode. Le chapitre « Nombres rationnels » (3e) doit être relu en cohérence : il ne
   doit pas supposer un PGCD nommé.
2. « nombre premier » : ZÉRO occurrence dans l'entrée 3e. Le terme n'apparait qu'une fois
   dans tout le cycle 4, en 5e et en « Prolongement possible : mise en perspective
   HISTORIQUE ET CULTURELLE » (l.396-397 : infinité des premiers, crible d'Ératosthène).
   Or l'exemple imposé « 60 = 2² × 3 × 5 » EST une décomposition en facteurs premiers :
   le texte demande la chose sans la nommer. J'ai donc introduit le mot (§3), sans lequel
   la méthode ne se formule pas.
   ➡️ À TRANCHER : le vocabulaire « nombre premier » est-il exigible en 3e, ou seulement
   la capacité à factoriser ? Le chapitre 5e « Opérations » range déjà les premiers en
   encadré « hors évaluation » (l.396-397). Si le relecteur veut la même prudence ici,
   il faut retirer l'encadré de §3 et parler de « facteurs qu'on ne peut plus casser ».
3. « le plus petit dénominateur commun » : le BO écrit « trouver UN dénominateur commun »
   (l.622), pas « le plus petit ». La fiche respecte cette formulation (§5 : le produit
   marche toujours, un multiple plus petit est plus confortable) et ne fait pas du PPCM
   un attendu. ⚠️ Mais la question 5 du QCM demande « le plus petit dénominateur commun » :
   à valider ou à reformuler en « le plus commode ».

PÉRIMÈTRE — FRONTIÈRES AVEC LES CHAPITRES VOISINS
- `cinquieme/maths/operations` §4 et §5 : multiples, diviseurs, critères 2/5/10 puis 3/9.
  Cité en prérequis, RAPPELÉ SOUS FORME DE TABLEAU SANS JUSTIFICATION en §2, jamais
  réexpliqué. ⚠️ NOTER L'ÉCART : la liste de 3e est « 2, 3, 5, 9 » (l.623) — le 10, présent
  en 5e (l.375), n'y figure plus. La fiche suit la liste de 3e. Volontaire ou coquille du
  BO ? À signaler.
- `troisieme/maths/nombres-rationnels` (produit en parallèle) : les OPÉRATIONS sur les
  fractions (l.584) et la résolution de problèmes (l.588) lui reviennent. Ici, l'addition
  de §5 ne sert QUE d'illustration du dénominateur commun (l.622). Éviter le doublon à la
  relecture croisée.
- `quatrieme/maths/puissances` : la notation $2^2$ est utilisée sans être introduite.

⚠️ LIEN AVEC LA PENSÉE INFORMATIQUE — NON FAIT, VOLONTAIREMENT
Il avait été envisagé de relier la décomposition en facteurs premiers au chapitre
« pensée informatique » (boucle, test de divisibilité). Vérification faite, l'entrée
« Multiples et diviseurs » de 3e ne mentionne NI algorithme NI programme. Le mot
« algorithme » apparait en 5e (l.394, « mobiliser un algorithme dans le cadre du calcul
numérique ») et à propos des racines carrées (l.614, prolongement culturel), jamais ici.
La section « Pensée informatique » de 3e (l.1098-1106) demande boucle conditionnelle,
conditions composées et structuration de programmes, sans aucun exemple arithmétique.
Seul indice indirect : « à l'informatique » dans la liste interdisciplinaire l.358, qui
relève du préambule du thème. J'ai donc renoncé au lien plutôt que de l'inventer.
➡️ Si le relecteur juge le rapprochement pédagogiquement utile, il devra être signalé
comme enrichissement, pas comme attendu.

AUTRES POINTS À TRANCHER
4. Longueur : l'entrée fait quatre lignes de BO. La fiche est volontairement resserrée
   (pas de crible d'Ératosthène, pas de dénombrement des diviseurs, pas de critère par 4,
   6, 11 ou 25 — tous absents du texte). Dire si c'est trop court ou juste.
5. L'unicité de la décomposition en facteurs premiers est UTILISÉE (§3, « carte
   d'identité ») mais jamais énoncée comme théorème, et encore moins démontrée : rien
   dans le texte ne l'exige. À confirmer.
6. §6 (engrenages, clignotants) s'appuie sur l.357-359, qui sont au préambule du thème et
   concernent l'ensemble « Nombres et calculs ». Le rattachement aux multiples communs est
   une interprétation de ma part — plausible (calendrier, engrenages et phénomènes
   périodiques sont des contextes de multiples communs), mais à valider.
7. La fiche emploie « facteur » et « produit » au sens fixé en 5e (l.389). Cohérent.

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel ni à
un site de cours. Statut : brouillon, non relu.
-->
