---
id: tale-exp-math-arithmetique
titre: "Arithmétique : divisibilité et congruences"
voie: generale
niveau: terminale
parcours: maths-expertes
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths expertes, terminale générale"
duree_lecture_min: 16
prerequis:
  - Ensembles de nombres et notation (Seconde)
  - Raisonnement par récurrence (Terminale)
  - Équations du premier degré à coefficients entiers (Collège)
statut: brouillon
relu_par: null
---

# Arithmétique : divisibilité et congruences

> L'arithmétique, c'est l'étude des nombres entiers pour eux-mêmes. Pas de dérivée, pas
> de limite : seulement $\mathbb{Z}$, la division et une question qui revient sans cesse,
> « **est-ce que ça tombe juste ?** ». Derrière cette question toute simple se cachent le
> RSA de ta carte bancaire, les clés de contrôle de ton IBAN et les plus vieux théorèmes
> des mathématiques. Ici on raisonne **exactement** : un reste est un reste, il n'y a pas
> d'à-peu-près.

---

## 1. Divisibilité dans $\mathbb{Z}$

Soient $a$ et $b$ deux entiers relatifs. On dit que **$b$ divise $a$** (ou que $a$ est un
**multiple** de $b$) s'il existe un entier $k$ tel que $a = b\,k$. On note $b \mid a$.

$$\boxed{\,b \mid a \iff \exists\, k \in \mathbb{Z},\ a = b\,k\,}$$

> **Exemple.** $7 \mid 42$ car $42 = 7 \times 6$. En revanche $7 \nmid 20$ : aucun entier
> multiplié par $7$ ne donne $20$. Attention : $b \mid a$ n'est **pas** la fraction
> $\tfrac{a}{b}$ ; c'est une phrase vraie ou fausse, pas un nombre.

**Propriétés à connaître.** Pour tous entiers $a, b, c$ :

- $1 \mid a$, $a \mid a$, et $a \mid 0$ (car $0 = a \times 0$) — mais $0 \mid a$ seulement si $a=0$.
- **Transitivité** : si $c \mid b$ et $b \mid a$, alors $c \mid a$.
- **Combinaison linéaire** : si $d \mid a$ et $d \mid b$, alors $d \mid (au + bv)$ pour tous
  entiers $u, v$.

> **Exemple (combinaison linéaire).** Si $d \mid n$ et $d \mid (n+7)$, alors $d$ divise leur
> différence $(n+7) - n = 7$. Donc $d \in \{1, 7\}$ (si $d>0$). Ce réflexe — soustraire deux
> multiples de $d$ — est l'outil n°1 pour trouver les diviseurs communs.

---

## 2. Division euclidienne

C'est le socle de tout le chapitre. Pour tout entier $a$ et tout entier $b \neq 0$, il
existe un **unique** couple d'entiers $(q, r)$ tel que :

$$\boxed{\,a = b\,q + r \quad \text{avec} \quad 0 \leqslant r < |b|\,}$$

$q$ est le **quotient**, $r$ le **reste**. La condition $0 \leqslant r < |b|$ est ce qui rend
le couple unique : sans elle, on pourrait écrire $17 = 5\times 2 + 7$, mais $7 \geqslant 5$
n'est pas un reste valable.

> **Exemple.** Division de $17$ par $5$ : $17 = 5 \times 3 + 2$, donc $q = 3$ et $r = 2$.
> Vérification du reste : $0 \leqslant 2 < 5$. ✓

> ⚠️ **Cas des négatifs.** Le reste est **toujours positif ou nul**. Pour $-17$ par $5$ :
> ce n'est **pas** $-17 = 5\times(-3) - 2$ (reste $-2$ interdit), mais
> $-17 = 5\times(-4) + 3$, donc $q=-4$ et $r=3$. On descend le quotient d'un cran pour
> rendre le reste positif.

**Lien avec la divisibilité :** $b \mid a$ **équivaut à** « le reste de la division de $a$
par $b$ est nul ».

---

## 3. Congruences dans $\mathbb{Z}$

Fixons un entier $n \geqslant 1$, le **module**. On dit que $a$ et $b$ sont **congrus modulo
$n$**, noté $a \equiv b \ [n]$, lorsque $n$ divise leur différence :

$$\boxed{\,a \equiv b \ [n] \iff n \mid (a - b)\,}$$

De façon équivalente : $a$ et $b$ ont **le même reste** dans la division euclidienne par $n$.

> **Exemple.** $17 \equiv 2 \ [5]$ car $17 - 2 = 15 = 5\times 3$. De même $17 \equiv 2 \ [5]$
> se lit « $17$ et $2$ laissent le même reste ($2$) modulo $5$ ». Et $-17 \equiv 3 \ [5]$
> (voir la division ci-dessus).

### Compatibilité avec les opérations

C'est ce qui fait toute la puissance des congruences. Si $a \equiv b \ [n]$ et
$c \equiv d \ [n]$, alors :

$$\boxed{\,a + c \equiv b + d \ [n] \qquad a \times c \equiv b \times d \ [n]\,}$$

et par récurrence, pour tout entier $k \geqslant 1$ :

$$\boxed{\,a^{k} \equiv b^{k} \ [n]\,}$$

> **Exemple (la puissance).** Quel est le reste de $7^{2024}$ modulo $5$ ? On remarque
> $7 \equiv 2 \ [5]$, donc $7^{2024} \equiv 2^{2024} \ [5]$. Or $2^4 = 16 \equiv 1 \ [5]$,
> et $2024 = 4 \times 506$, donc $2^{2024} = (2^4)^{506} \equiv 1^{506} = 1 \ [5]$.
> **Le reste est $1$.** On a remplacé un nombre gigantesque par un calcul de tête.

> ⚠️ **Interdiction de « diviser » une congruence.** De $6 \equiv 0 \ [6]$ et
> $ac \equiv bc \ [n]$ on **ne peut pas** en général déduire $a \equiv b \ [n]$.
> Exemple : $2\times 3 \equiv 2\times 0 \ [6]$ mais $3 \not\equiv 0 \ [6]$. La simplification
> par $c$ n'est licite que si $c$ et $n$ sont premiers entre eux (voir §5).

**Application — tests de divisibilité.** Comme $10 \equiv 1 \ [9]$, tout nombre est congru
à la **somme de ses chiffres** modulo $9$ : d'où le test « divisible par $9$ ⟺ somme des
chiffres divisible par $9$ ». Comme $10 \equiv 0 \ [2]$ et $10 \equiv 0 \ [5]$, la
divisibilité par $2$ ou $5$ ne dépend que du dernier chiffre.

---

## 4. PGCD et algorithme d'Euclide

Le **PGCD** de deux entiers $a$ et $b$ (non tous deux nuls) est le plus grand entier qui
divise à la fois $a$ et $b$. On le note $\mathrm{pgcd}(a,b)$ ou $a \wedge b$.

**Algorithme d'Euclide.** Il repose sur une seule propriété : le PGCD ne change pas si on
remplace $a$ par le reste de sa division par $b$.

$$\boxed{\,\mathrm{pgcd}(a,b) = \mathrm{pgcd}(b,\, r)\quad \text{où } r \text{ est le reste de } a \text{ par } b\,}$$

On répète jusqu'à tomber sur un reste nul : **le dernier reste non nul est le PGCD**.

> **Exemple.** $\mathrm{pgcd}(252, 105)$ :
> $252 = 105 \times 2 + 42$, puis $105 = 42 \times 2 + 21$, puis $42 = 21 \times 2 + 0$.
> Le dernier reste non nul est $21$, donc $\mathrm{pgcd}(252,105) = 21$.

**Propriétés.** $d = \mathrm{pgcd}(a,b)$ divise toute combinaison $au + bv$ ; et
$\mathrm{pgcd}(ka, kb) = |k|\,\mathrm{pgcd}(a,b)$.

---

## 5. Entiers premiers entre eux — Bézout et Gauss

Deux entiers $a$ et $b$ sont **premiers entre eux** lorsque $\mathrm{pgcd}(a,b) = 1$ :
leur seul diviseur commun positif est $1$.

> **Exemple.** $15$ et $8$ sont premiers entre eux ($\mathrm{pgcd}=1$), bien qu'aucun des
> deux ne soit un nombre premier. « Premiers entre eux » et « nombres premiers » sont deux
> notions différentes.

### Théorème de Bézout

$$\boxed{\,\mathrm{pgcd}(a,b) = 1 \iff \exists\, (u,v) \in \mathbb{Z}^2,\ au + bv = 1\,}$$

Plus généralement, l'équation $au + bv = c$ admet des solutions entières **si et seulement
si** $\mathrm{pgcd}(a,b)$ divise $c$. Les coefficients $(u,v)$ se trouvent en « remontant »
l'algorithme d'Euclide.

> **Exemple.** Pour $15$ et $8$ : $15 = 8\times 1 + 7$, $8 = 7\times 1 + 1$. On remonte :
> $1 = 8 - 7 = 8 - (15 - 8) = 2\times 8 - 15$. Donc $u = -1$, $v = 2$ conviennent :
> $15\times(-1) + 8\times 2 = 1$. ✓

### Théorème de Gauss

$$\boxed{\,\text{Si } a \mid bc \ \text{ et } \ \mathrm{pgcd}(a,b) = 1,\ \text{alors } a \mid c\,}$$

> **Exemple.** $7 \mid 5\times 21$ ($=105$) et $\mathrm{pgcd}(7,5)=1$, donc $7 \mid 21$. ✓
> C'est faux sans la condition de coprimalité : $6 \mid 4 \times 3$ mais $6 \nmid 4$ et
> $6 \nmid 3$ — car $6$ n'est premier ni avec $4$ ni avec $3$.

---

## 6. Nombres premiers

Un entier $p \geqslant 2$ est **premier** s'il n'admet que deux diviseurs positifs : $1$ et
lui-même. Les premiers premiers : $2, 3, 5, 7, 11, 13, \dots$ ($2$ est le seul premier pair.)

**Infinitude (Euclide).** Il existe une **infinité** de nombres premiers.

> *Idée de la preuve par l'absurde.* Supposons-les en nombre fini : $p_1, \dots, p_k$.
> Le nombre $N = p_1 p_2 \cdots p_k + 1$ laisse un reste $1$ dans la division par chaque
> $p_i$, donc n'est divisible par aucun d'eux ; pourtant il admet un diviseur premier —
> contradiction. Il y en a donc une infinité.

**Décomposition en facteurs premiers.** Tout entier $n \geqslant 2$ s'écrit de **manière
unique** (à l'ordre près) comme produit de nombres premiers :

$$\boxed{\,n = p_1^{\alpha_1}\, p_2^{\alpha_2} \cdots p_k^{\alpha_k}\,}$$

> **Exemple.** $360 = 2^3 \times 3^2 \times 5$. Cette décomposition donne tout : le nombre
> de diviseurs de $360$ est $(3+1)(2+1)(1+1) = 24$, et le PGCD de deux nombres se lit en
> prenant chaque premier à sa **plus petite** puissance.

**Test de primalité.** Pour savoir si $n$ est premier, il suffit de tester les diviseurs
premiers **jusqu'à $\sqrt{n}$** : si aucun ne divise $n$, alors $n$ est premier.

> **Exemple.** $n = 149$ : $\sqrt{149} \approx 12{,}2$. On teste $2, 3, 5, 7, 11$ : aucun
> ne divise $149$, donc $149$ est premier. Inutile d'aller au-delà de $12$.

---

## 7. Petit théorème de Fermat

Si $p$ est un nombre **premier** et $a$ un entier **non divisible par $p$**, alors :

$$\boxed{\,a^{p-1} \equiv 1 \ [p]\,}$$

Et sous forme valable pour **tout** entier $a$ (même divisible par $p$) : $a^{p} \equiv a \ [p]$.

> **Exemple.** Reste de $3^{100}$ modulo $7$. Comme $7$ est premier et $7 \nmid 3$, Fermat
> donne $3^{6} \equiv 1 \ [7]$. Or $100 = 6\times 16 + 4$, donc
> $3^{100} = (3^{6})^{16}\times 3^{4} \equiv 1 \times 3^{4} \ [7]$. Et $3^4 = 81 = 7\times 11 + 4$,
> donc $3^{100} \equiv 4 \ [7]$. **Le reste est $4$.**

Fermat est l'accélérateur des calculs de puissances modulo un premier : il ramène tout
exposant à son reste modulo $p-1$.

---

## 8. Méthodes : résoudre modulo $n$ et équations diophantiennes

### Inverse de $a$ modulo $n$

Un **inverse** de $a$ modulo $n$ est un entier $u$ tel que $au \equiv 1 \ [n]$. Il existe
**si et seulement si** $\mathrm{pgcd}(a,n) = 1$ (Bézout), et on le trouve via Euclide.

> **Exemple.** Inverse de $3$ modulo $7$ : on cherche $u$ avec $3u \equiv 1 \ [7]$. En
> testant, $3\times 5 = 15 \equiv 1 \ [7]$. Donc **$5$ est l'inverse de $3$ modulo $7$**.

### Résoudre $ax \equiv b \ [n]$

1. Calculer $d = \mathrm{pgcd}(a,n)$. **Une solution existe ⟺ $d \mid b$.**
2. Si $\mathrm{pgcd}(a,n) = 1$ : multiplier par l'inverse $u$ de $a$, d'où $x \equiv ub \ [n]$.

> **Exemple.** $3x \equiv 2 \ [7]$. Ici $\mathrm{pgcd}(3,7)=1$, inverse de $3$ = $5$.
> On multiplie par $5$ : $x \equiv 5\times 2 = 10 \equiv 3 \ [7]$.
> **Solutions : $x \equiv 3 \ [7]$**, c'est-à-dire $x \in \{\dots, 3, 10, 17, \dots\}$.

### Équation diophantienne $ax + by = c$

1. Calculer $d = \mathrm{pgcd}(a,b)$. **Solutions ⟺ $d \mid c$** (sinon aucune).
2. Trouver une solution particulière $(x_0, y_0)$ via Bézout (Euclide remonté).
3. Décrire **toutes** les solutions : $x = x_0 + \tfrac{b}{d}\,k$, $y = y_0 - \tfrac{a}{d}\,k$,
   pour $k \in \mathbb{Z}$.

> **Exemple.** $5x + 3y = 1$. Solution particulière : $x_0 = 2$, $y_0 = -3$
> ($5\times 2 + 3\times(-3) = 1$). Comme $\mathrm{pgcd}(5,3)=1$, toutes les solutions sont
> $x = 2 + 3k$, $y = -3 - 5k$, $k \in \mathbb{Z}$.

---

## 9. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Divisibilité | $b \mid a \iff \exists k,\ a = bk$ |
| Combinaison linéaire | $d\mid a$ et $d\mid b \Rightarrow d\mid(au+bv)$ |
| Division euclidienne | $a = bq + r$, $\ 0 \leqslant r < |b|$, couple **unique** |
| Congruence | $a \equiv b\ [n] \iff n \mid (a-b)$ |
| Compatibilité | somme, produit, puissance : $a^k \equiv b^k\ [n]$ |
| PGCD (Euclide) | $\mathrm{pgcd}(a,b)=\mathrm{pgcd}(b,r)$ ; dernier reste $\neq 0$ |
| Premiers entre eux | $\mathrm{pgcd}(a,b)=1$ |
| Bézout | $\mathrm{pgcd}(a,b)=1 \iff \exists (u,v),\ au+bv=1$ |
| Gauss | $a\mid bc$ et $\mathrm{pgcd}(a,b)=1 \Rightarrow a\mid c$ |
| Décomposition | $n = p_1^{\alpha_1}\cdots p_k^{\alpha_k}$, unique |
| Test primalité | tester les premiers $\leqslant \sqrt{n}$ |
| Fermat | $p$ premier, $p\nmid a \Rightarrow a^{p-1}\equiv 1\ [p]$ |
| Inverse mod $n$ | existe $\iff \mathrm{pgcd}(a,n)=1$ |
| Diophantienne $ax+by=c$ | solutions $\iff \mathrm{pgcd}(a,b)\mid c$ |

---

## 10. Les erreurs qui coûtent des points

1. **Un reste négatif.** Dans une division euclidienne, le reste vérifie
   $0 \leqslant r < |b|$, **toujours**. Pour un $a$ négatif, on baisse le quotient d'un cran :
   $-17 = 5\times(-4) + 3$, pas $5\times(-3) - 2$.
2. **« Simplifier » une congruence par un facteur commun.** $ac \equiv bc\ [n]$ n'entraîne
   $a \equiv b\ [n]$ **que si** $\mathrm{pgcd}(c,n)=1$. Sinon c'est faux ($2\times3\equiv2\times0\ [6]$
   mais $3\not\equiv 0\ [6]$).
3. **Confondre « premiers entre eux » et « nombres premiers ».** $8$ et $15$ sont premiers
   entre eux sans être premiers. Gauss et Bézout demandent $\mathrm{pgcd}=1$, pas la primalité.
4. **Appliquer Gauss sans vérifier la coprimalité.** De $a \mid bc$ on ne déduit $a \mid c$
   **que si** $\mathrm{pgcd}(a,b)=1$. Oublier cette hypothèse est l'erreur la plus fréquente.
5. **Appliquer Fermat quand $p$ divise $a$.** $a^{p-1}\equiv 1\ [p]$ suppose $p \nmid a$.
   Si $p \mid a$, alors $a^{p-1}\equiv 0\ [p]$ : la conclusion « $\equiv 1$ » est fausse.
6. **Oublier la condition d'existence d'une diophantienne.** $ax+by=c$ n'a de solutions que
   si $\mathrm{pgcd}(a,b) \mid c$. On vérifie ce test **avant** de chercher une solution
   particulière — sinon on cherche l'introuvable.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, bloc
« MATHÉMATIQUES EXPERTES », section « Arithmétique (divisibilité et congruences) »
(lignes 33 à 39), rubriques « Contenus » et « Capacités ». Programme des enseignements
optionnels de mathématiques, terminale générale : arrêté du 19-7-2019, BO spécial n°8
du 25 juillet 2019.

⚠️ PROVENANCE DE LA SOURCE : d'après l'en-tête du fichier source (lignes 1 à 11), le texte
du programme a été extrait via WebFetch depuis les PDF officiels education.gouv.fr
(MENE1921264A / spe264_annexe_1158825.pdf pour les maths expertes). La reproduction n'est
pas garantie exhaustive. AVANT TOUTE PUBLICATION, confronter au PDF officiel
(education.gouv.fr / éduscol) par un professeur, au même titre que la relecture pédagogique.

⚠️ CHAPITRE DE TERMINALE : le gabarit (docs/gabarit-chapitre.md, §6) recommande de
« ne rien écrire pour la Terminale avant 2027 ». Ici il s'agit de l'OPTION maths expertes,
dont le programme est celui de 2019 (BO spécial n°8), stable et toujours en vigueur — la
réserve « rentrée 2027 » vise la spécialité, pas cette option. Chapitre produit à la DEMANDE
EXPLICITE de l'utilisateur. À signaler tout de même au relecteur.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Le programme liste les contenus sans fixer le niveau de formalisme. J'ai retenu la
  présentation standard de l'option (divisibilité, division euclidienne, congruences et
  compatibilité, PGCD/Euclide, Bézout, Gauss, premiers/infinitude/décomposition, petit
  Fermat) et les capacités citées (diviseurs et PGCD, résoudre ax≡b[n], inverse modulo n,
  tests de divisibilité, diophantiennes simples).
- Preuve de l'infinitude des premiers : esquissée (idée d'Euclide), non entièrement rédigée.
  Préciser si une démonstration complète est exigible.
- Petit théorème de Fermat : énoncé sous les deux formes (a^{p-1}≡1 si p∤a, et a^p≡a pour
  tout a). Démonstration non incluse — vérifier si elle est attendue.
- Description complète des solutions d'une diophantienne (paramétrage par k) : incluse car
  citée par « équations diophantiennes simples » ; confirmer le degré d'exigence.
- Congruences notées a ≡ b [n] (notation crochets). Vérifier la notation privilégiée par
  l'établissement (certains manuels écrivent mod n ou (mod n)).

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
