---
id: tale-spe-math-primitives-equations-differentielles
titre: "Primitives et équations différentielles"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 14
prerequis:
  - Dérivation et dérivées des fonctions usuelles (Première)
  - Fonction exponentielle (Première)
statut: brouillon
relu_par: null
---

# Primitives et équations différentielles

> Dériver, tu sais faire. Ici on fait le chemin **inverse** : on part d'une fonction
> et on cherche celle dont elle est la dérivée. C'est ce qui permet de « remonter »
> d'une vitesse vers une position, d'un taux de croissance vers une population.
> Une équation différentielle, c'est justement une équation où l'inconnue est une
> **fonction**, reliée à sa propre dérivée.

---

## 1. Notion de primitive

Soit $f$ une fonction **continue sur un intervalle $I$**.

$$\boxed{F \text{ est une primitive de } f \text{ sur } I \iff F'=f \text{ sur } I}$$

Autrement dit : chercher une primitive de $f$, c'est chercher une fonction $F$ **qui
se dérive en $f$**.

> **Exemple.** $F(x)=x^2$ est une primitive de $f(x)=2x$ sur $\mathbb{R}$, car
> $F'(x)=2x=f(x)$. On vérifie **toujours** une primitive en la dérivant.

C'est exactement l'équation différentielle la plus simple : trouver les primitives de
$f$, c'est résoudre $y'=f$.

---

## 2. Deux primitives diffèrent d'une constante

C'est **la** propriété du chapitre.

$$\boxed{\text{Si } F \text{ est une primitive de } f \text{ sur } I, \text{ alors toutes les primitives sont les } F+C, \; C\in\mathbb{R}}$$

Deux primitives d'une même fonction continue sur un intervalle **diffèrent d'une
constante**.

> **Exemple.** Les primitives de $f(x)=2x$ sont $x^2$, $x^2+1$, $x^2-7$… toutes de la
> forme $x^2+C$. En les dérivant, la constante disparaît : c'est pour ça qu'elles
> donnent toutes la même fonction $f$.

**Conséquence pratique.** Une fonction n'a jamais **une** primitive : elle en a une
**infinité**, une par valeur de $C$. Oublier ce $C$ est l'erreur n°1 du chapitre.

### Condition initiale

Pour fixer **une seule** primitive, on impose une valeur : $F(x_0)=y_0$. Cela détermine
$C$ de façon unique.

> **Exemple.** La primitive $F$ de $f(x)=2x$ telle que $F(1)=5$ : on part de
> $F(x)=x^2+C$, puis $F(1)=1+C=5$ donne $C=4$. Donc $F(x)=x^2+4$.

---

## 3. Primitives des fonctions de référence

À connaître par cœur. Sur chaque ligne, $F'=f$ (dérive pour vérifier).

| Fonction $f(x)$ | Une primitive $F(x)$ | Sur |
|---|---|---|
| $x^n$, $\;n\in\mathbb{Z},\ n\neq -1$ | $\dfrac{x^{n+1}}{n+1}$ | $\mathbb{R}$ si $n\geq 0$ ; un intervalle sans $0$ si $n\leq -2$ |
| $\dfrac{1}{\sqrt{x}}$ | $2\sqrt{x}$ | $]0;+\infty[$ |
| $e^{x}$ | $e^{x}$ | $\mathbb{R}$ |
| $\sin x$ | $-\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $\sin x$ | $\mathbb{R}$ |

> **Vérifications rapides.**
> $\left(\dfrac{x^{n+1}}{n+1}\right)' = \dfrac{(n+1)x^{n}}{n+1}=x^{n}$ ✓ ;
> $(2\sqrt{x})' = 2\cdot\dfrac{1}{2\sqrt{x}}=\dfrac{1}{\sqrt{x}}$ ✓ ;
> $(-\cos x)' = \sin x$ ✓ (attention au signe).

> ⚠️ **Le cas $n=-1$ est à part.** La fonction $x\mapsto\dfrac{1}{x}$ n'entre pas dans
> la formule ($n+1=0$, on diviserait par zéro). Sa primitive est $\ln|x|$ — c'est
> l'objet du chapitre sur le **logarithme**.

---

## 4. Primitives des formes $(v'\circ u)\times u'$

On reconnaît un **morceau composé** multiplié par la **dérivée du dedans** $u'$. La
règle vient de la dérivée d'une composée $(v\circ u)'=(v'\circ u)\times u'$, lue à
l'envers.

| Forme $f$ | Une primitive $F$ | Condition |
|---|---|---|
| $u'\,e^{u}$ | $e^{u}$ | — |
| $\dfrac{u'}{\sqrt{u}}$ | $2\sqrt{u}$ | $u>0$ |
| $u'\,u^{n}$, $\;n\neq -1$ | $\dfrac{u^{n+1}}{n+1}$ | selon $n$ |
| $u'\cos u$ | $\sin u$ | — |
| $u'\sin u$ | $-\cos u$ | — |

> **Exemple 1 — $u'e^u$.** $f(x)=2x\,e^{x^2}$. Ici $u=x^2$, donc $u'=2x$ : on a bien
> $u'e^{u}$. Une primitive est $e^{x^2}$. Contrôle : $(e^{x^2})'=2x\,e^{x^2}$ ✓.

> **Exemple 2 — $u'u^n$.** $f(x)=3x^2(x^3+1)^4$. Ici $u=x^3+1$, $u'=3x^2$, $n=4$.
> Une primitive est $\dfrac{(x^3+1)^5}{5}$.

> **Exemple 3 — $\dfrac{u'}{\sqrt u}$.** $f(x)=\dfrac{2x}{\sqrt{x^2+1}}$ avec $u=x^2+1>0$.
> Une primitive est $2\sqrt{x^2+1}$.

**Méthode.** Repère le « dedans » $u$, calcule $u'$, et vérifie qu'il apparaît **en
facteur**. Si un coefficient manque, ajuste-le (voir pièges).

---

## 5. Équations différentielles

Une **équation différentielle** est une équation dont l'inconnue est une **fonction**
$y$, reliée à sa dérivée $y'$. **Résoudre**, c'est trouver **toutes** les fonctions
qui la vérifient.

### 5.1 — $y'=f$

Les solutions sont **les primitives de $f$** : $y=F+C$, $C\in\mathbb{R}$.

> **Exemple.** $y'=\cos x$ a pour solutions $y(x)=\sin x + C$.

### 5.2 — $y'=ay$ (avec $a$ réel)

$$\boxed{y'=ay \iff y(x)=Ce^{ax}, \quad C\in\mathbb{R}}$$

> **Exemple.** $y'=3y$ a pour solutions $y(x)=Ce^{3x}$. Contrôle : $y'=3Ce^{3x}=3y$ ✓.

**Allure des courbes** (elles passent toutes par le point d'ordonnée $C$ en $x=0$) :

- si $a>0$ : croissance exponentielle (explosion) ;
- si $a<0$ : décroissance vers $0$ (amortissement) ;
- le signe de $C$ dit si la courbe est au-dessus ($C>0$) ou en dessous ($C<0$) de l'axe.

### 5.3 — $y'=ay+b$ (avec $a\neq 0$)

**Étape 1 — une solution particulière constante.** On cherche $y$ constante, donc
$y'=0$ : l'équation devient $0=ay+b$, soit $y=-\dfrac{b}{a}$.

**Étape 2 — toutes les solutions.** On ajoute les solutions de $y'=ay$ :

$$\boxed{y(x)=Ce^{ax}-\dfrac{b}{a}, \quad C\in\mathbb{R}}$$

> **Exemple.** $y'=2y+6$. Solution constante : $0=2y+6\Rightarrow y=-3$. Solutions
> générales : $y(x)=Ce^{2x}-3$.

### 5.4 — $y'=ay+f$ à partir d'une solution particulière

Si on **connaît une solution particulière** $g$ de $y'=ay+f$, alors **toutes** les
solutions s'obtiennent en ajoutant les solutions de $y'=ay$ :

$$\boxed{y(x)=g(x)+Ce^{ax}, \quad C\in\mathbb{R}}$$

> **Pourquoi.** Si $y$ et $g$ sont deux solutions, leur différence $y-g$ vérifie
> $(y-g)'=a(y-g)$ : c'est une solution de $y'=ay$, donc de la forme $Ce^{ax}$.

### Condition initiale

Une condition $y(x_0)=y_0$ fixe la valeur de $C$, donc **une seule** solution.

> **Exemple.** $y'=-y$ avec $y(0)=5$. Solutions : $y(x)=Ce^{-x}$. Puis $y(0)=C=5$,
> d'où $y(x)=5e^{-x}$.

---

## 6. Tableau récapitulatif

| Objet | Résultat clé |
|---|---|
| Primitive | $F'=f$, sur un intervalle |
| Toutes les primitives | $F+C$, une **infinité** |
| $x^n$ ($n\neq -1$) | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac{1}{\sqrt x}$ | $2\sqrt x$ sur $]0;+\infty[$ |
| $e^x,\ \sin x,\ \cos x$ | $e^x,\ -\cos x,\ \sin x$ |
| $u'e^u$ | $e^u$ |
| $\dfrac{u'}{\sqrt u}$ | $2\sqrt u$ |
| $u'u^n$ ($n\neq -1$) | $\dfrac{u^{n+1}}{n+1}$ |
| $y'=ay$ | $Ce^{ax}$ |
| $y'=ay+b$ | $Ce^{ax}-\dfrac{b}{a}$ |
| $y'=ay+f$ (sol. part. $g$) | $g+Ce^{ax}$ |
| Condition initiale | fixe $C$ (une seule solution) |

---

## 7. Les erreurs qui coûtent des points

1. **Oublier la constante $+C$.** Une fonction a une infinité de primitives.
   Sans le $+C$, tu perds toutes les autres solutions — et tu ne peux plus utiliser
   la condition initiale.
2. **Confondre primitive et dérivée.** Tu cherches $F$ tel que $F'=f$, pas $f'$.
   Ex. la primitive de $\dfrac{1}{\sqrt x}$ est $2\sqrt x$, alors que sa **dérivée**
   irait dans l'autre sens. En cas de doute, **dérive ta réponse** : tu dois retrouver $f$.
3. **Appliquer la formule des puissances à $n=-1$.** $\dfrac{1}{x}$ n'a pas pour
   primitive $\dfrac{x^{0}}{0}$ (interdit) : c'est $\ln|x|$.
4. **Signe de $\cos$ et $\sin$.** Primitive de $\sin$ = $-\cos$ (avec le moins),
   primitive de $\cos$ = $\sin$ (sans moins). C'est l'inverse des dérivées.
5. **Se tromper de signe dans $-\dfrac{b}{a}$.** La solution constante de $y'=ay+b$
   est $-\dfrac{b}{a}$, pas $\dfrac{b}{a}$. Vérifie en réinjectant.
6. **Oublier $u'$ dans les formes composées.** Sans le facteur $u'$, tu ne peux pas
   utiliser $(v'\circ u)\times u'$. Repère d'abord le « dedans », calcule sa dérivée,
   et vérifie qu'elle est bien en facteur.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — PRIMITIVES, ÉQUATIONS DIFFÉRENTIELLES » (lignes 240-257),
rubriques « Contenus » et « Capacités attendues ».

⚠️ MENTION 1 — PROVENANCE DE LA SOURCE : ce fichier programme n'est PAS issu de la
chaîne d'extraction habituelle. Son texte a été reconstitué via WebFetch depuis un
miroir (xm1math.net/reforme/term_gen_spe.pdf), le proxy du sandbox bloquant le PDF
officiel. AVANT PUBLICATION, il DOIT être confronté au PDF officiel
(education.gouv.fr / éduscol). La reproduction n'est pas garantie exhaustive.

⚠️ MENTION 2 — CONFORMITÉ AU CALENDRIER : ce chapitre de TERMINALE a été produit
sur le programme de la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE L'UTILISATEUR. Le
gabarit (docs/gabarit-chapitre.md, §6) recommande de « ne rien écrire pour la
Terminale avant 2027 » car le programme change à la rentrée 2027-2028 ; la demande
utilisateur porte précisément sur ce nouveau programme déjà publié. À signaler au
relecteur pour arbitrage éditorial.

Éléments explicitement lisibles dans l'extraction et couverts :
- « Notion de primitive d'une fonction continue sur un intervalle » — §1
- « Deux primitives d'une même fonction continue sur un intervalle diffèrent d'une
  constante » — §2
- « Primitives des fonctions de référence : x^n pour n∈ℤ, 1/√x, exp, sin, cos » — §3
- « Calculer une primitive en utilisant [...] les fonctions de la forme (v'∘u)×u' » — §4
- « Équation différentielle y'=f » — §5.1
- « Équation différentielle y'=ay ; allure des courbes » — §5.2
- « Équation différentielle y'=ay+b (a≠0) : solution particulière constante ;
  toutes les solutions » — §5.3
- « Équation différentielle y'=ay+f : à partir d'une solution particulière,
  déterminer toutes les solutions » — §5.4

POINTS À SOUMETTRE AU RELECTEUR :
- Cas n=-1 (fonction 1/x → ln|x|) : traité comme EXCLU de la formule des puissances
  et RENVOYÉ au chapitre logarithme. Le programme liste « x^n pour n∈ℤ » sans
  exclure explicitement n=-1 ; vérifier l'intention (probable renvoi au ln).
- Formes u'cos u et u'sin u ajoutées au tableau §4 : cohérentes avec « (v'∘u)×u' »
  mais pas nommées explicitement dans la consigne. À valider.
- Intervalles de définition des primitives de x^n pour n≤-2 (intervalle ne contenant
  pas 0) : formulation à vérifier pour le niveau élève.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
