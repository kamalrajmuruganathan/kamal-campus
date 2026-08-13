---
id: tale-spe-math-suites
titre: "Suites : limites et récurrence"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Suites arithmétiques et géométriques (Première spé — chapitre « Suites numériques, modèles discrets »)
  - Approche intuitive de la limite (Première spé)
  - Sens de variation d'une suite (Première spé)
statut: brouillon
relu_par: null
---

# Suites : limites et récurrence

> Une suite, c'est une infinité de nombres alignés. La grande question de Terminale
> est : **où vont-ils ?** Se rapprochent-ils d'une valeur, filent-ils vers l'infini,
> ou ne se décident-ils jamais ? Et pour prouver une propriété *à tous les rangs* d'un
> coup, tu as une arme neuve : le **raisonnement par récurrence**.

En Première tu avais une idée *intuitive* de la limite ; ici on la rend **formelle**.
On réutilise sans cesse les suites arithmétiques et géométriques de Première : assure-toi
que tu sais les reconnaître avant de continuer.

---

## 1. Limite infinie

### Tendre vers $+\infty$

**Définition.** La suite $(u_n)$ **tend vers $+\infty$** si tout intervalle de la forme
$[A\,;+\infty[$ contient toutes les valeurs $u_n$ **à partir d'un certain rang**.

Autrement dit : aussi grand que tu choisisses le seuil $A$, la suite finit par le
dépasser et ne plus jamais redescendre en dessous.

$$\boxed{\lim_{n \to +\infty} u_n = +\infty}$$

> **Exemple.** $u_n = n^2$. Fixe $A = 1000$. Dès que $n \geq 32$, on a $u_n \geq 1024 \geq 1000$.
> Et pour n'importe quel $A$ on trouvera toujours un tel rang : $u_n \to +\infty$.

### Tendre vers $-\infty$

**Définition.** $(u_n)$ **tend vers $-\infty$** si tout intervalle $]-\infty\,;A]$ contient
toutes les valeurs $u_n$ à partir d'un certain rang. La suite finit par passer **sous**
n'importe quel seuil.

> **Exemple.** $u_n = -3n + 5$ descend sous tout seuil : $u_n \to -\infty$.

### Suites croissantes non majorées

**Propriété.** Toute suite **croissante et non majorée** tend vers $+\infty$.

C'est très utile : pas besoin de manipuler les intervalles, il suffit de prouver que la
suite monte et qu'aucun plafond ne l'arrête.

> **Exemple.** $u_n = 1 + \tfrac12 + \tfrac13 + \dots + \tfrac1n$ est croissante (on
> ajoute un terme positif à chaque étape) et on démontre qu'elle n'est bornée par aucun
> nombre : donc $u_n \to +\infty$, même si elle monte très lentement.

> ⚠️ « Croissante non majorée » est une *condition suffisante* pour $+\infty$, pas une
> définition : une suite peut tendre vers $+\infty$ sans être croissante.

---

## 2. Limite finie : la convergence

**Définition.** La suite $(u_n)$ **converge vers le réel $\ell$** si tout intervalle
**ouvert** contenant $\ell$ contient toutes les valeurs $u_n$ à partir d'un certain rang.

$$\boxed{\lim_{n \to +\infty} u_n = \ell}$$

Peu importe la taille de la « fenêtre » ouverte que tu ouvres autour de $\ell$, aussi
étroite soit-elle, la suite finit par y entrer **et ne plus en sortir**.

> **Exemple.** $u_n = 3 + \dfrac{1}{n}$. Prends la fenêtre $]2{,}99\,;3{,}01[$ autour de
> $\ell = 3$. Dès que $n > 100$, $\dfrac1n < 0{,}01$ donc $u_n$ est dans la fenêtre, et il
> y reste. On dit que $(u_n)$ **converge** vers $3$.

**Vocabulaire.** Une suite qui converge est dite **convergente**. Toute suite qui n'est
pas convergente est **divergente** — y compris celles qui tendent vers $\pm\infty$ (elles
ont une limite, mais infinie), et celles qui n'ont aucune limite comme $u_n = (-1)^n$.

> ⚠️ « Avoir une limite » et « converger » ne sont pas synonymes : tendre vers $+\infty$,
> c'est **diverger** vers $+\infty$.

---

## 3. Limites et comparaison

### Théorème de comparaison

**Propriété.** Si $u_n \leq v_n$ à partir d'un certain rang et si $u_n \to +\infty$,
alors $v_n \to +\infty$. (Symétriquement, si $v_n \leq u_n$ et $u_n \to -\infty$, alors
$v_n \to -\infty$.)

> **Exemple.** $v_n = n + \cos n$. Comme $\cos n \geq -1$, on a $v_n \geq n - 1$. Or
> $n - 1 \to +\infty$, donc par comparaison $v_n \to +\infty$.

### Théorème des gendarmes

**Théorème (des gendarmes).** Si à partir d'un certain rang
$$u_n \leq v_n \leq w_n$$
et si $(u_n)$ et $(w_n)$ convergent vers **la même** limite $\ell$, alors $(v_n)$ converge
aussi vers $\ell$.

Les deux « gendarmes » $u_n$ et $w_n$ encadrent le prisonnier $v_n$ et l'emmènent vers $\ell$.

> **Exemple.** $v_n = \dfrac{\sin n}{n}$. Comme $-1 \leq \sin n \leq 1$, on a
> $$-\frac1n \leq \frac{\sin n}{n} \leq \frac1n.$$
> Les deux bornes tendent vers $0$, donc $v_n \to 0$.

---

## 4. Opérations sur les limites

On calcule la limite d'une somme, d'un produit ou d'un quotient à partir des limites de
chaque morceau — **sauf** dans quatre cas où le résultat n'est pas déterminé d'avance.

**Les quatre formes indéterminées** (à mémoriser) :
$$\boxed{\;\infty - \infty \qquad 0 \times \infty \qquad \frac{\infty}{\infty} \qquad \frac{0}{0}\;}$$

Dans ces cas, la règle brute ne suffit pas : il faut **transformer** l'écriture
(factoriser, simplifier) avant de conclure.

> **Exemple sans indétermination.** $u_n = n^2 + \dfrac1n$. Ici $n^2 \to +\infty$ et
> $\dfrac1n \to 0$, donc la somme tend vers $+\infty$.

> **Exemple avec indétermination.** $u_n = n^2 - n$ est de la forme $\infty - \infty$. On
> factorise : $u_n = n(n-1)$. Alors $n \to +\infty$ et $n-1 \to +\infty$, donc
> $u_n \to +\infty$. **La factorisation lève l'indétermination.**

> ⚠️ Ne réponds **jamais** « $\infty - \infty = 0$ ». C'est faux : $n^2 - n \to +\infty$,
> alors que $n - n^2 \to -\infty$ et $(n+1) - n \to 1$. Trois formes $\infty - \infty$,
> trois limites différentes.

---

## 5. Comportement de $(q^n)$

Pour une suite géométrique de raison $q$, tout dépend de la valeur de $q$ :

$$\boxed{\;
\begin{aligned}
&q > 1 &&\Rightarrow\ q^n \to +\infty \\
&q = 1 &&\Rightarrow\ q^n = 1 \to 1 \\
&-1 < q < 1 &&\Rightarrow\ q^n \to 0 \\
&q \leq -1 &&\Rightarrow\ (q^n)\text{ n'a pas de limite}
\end{aligned}\;}$$

> **Exemples.** $q = 1{,}05$ (hausse de 5 %) : $q^n \to +\infty$. — $q = 0{,}8$ :
> $0{,}8^{\,n} \to 0$. — $q = -2$ : les termes $1, -2, 4, -8, 16,\dots$ grandissent **en
> changeant de signe**, donc aucune limite.

> **Le cas clé $|q| < 1$** est celui des modèles qui s'amortissent (rebond d'une balle,
> médicament qui s'élimine). Retiens : $|q| < 1 \Rightarrow q^n \to 0$.

---

## 6. Théorème de la convergence monotone (admis)

**Théorème (admis).** Toute suite **croissante et majorée** converge. De même, toute suite
**décroissante et minorée** converge.

Attention à ce qu'il dit *exactement* : une suite croissante majorée **converge**, mais le
théorème **ne donne pas** la valeur de la limite. Il garantit son *existence*, à toi de la
déterminer ensuite (souvent par un autre outil).

> **Exemple.** Une suite croissante et majorée par $10$ converge vers un réel $\ell \leq 10$.
> Mais $\ell$ n'est pas forcément $10$ : ce n'est pas parce que $10$ est un majorant que
> c'est la limite.

> **Contraste.** Une suite croissante a donc deux destins possibles : soit un plafond, et
> elle converge ; soit aucun, et elle file vers $+\infty$ (section 1). Jamais vers $-\infty$.

---

## 7. Le raisonnement par récurrence

C'est **la** grande méthode de démonstration de Terminale. Elle sert à prouver qu'une
propriété $P(n)$ est vraie pour **tous** les entiers $n \geq n_0$, d'un seul coup, sans les
vérifier un par un (ce qui serait impossible : il y en a une infinité).

L'image : une rangée infinie de dominos. Si tu fais tomber le **premier**, et si **chaque**
domino qui tombe fait tomber le suivant, alors **tous** tombent.

### Le schéma en trois temps

1. **Initialisation.** On vérifie que $P(n_0)$ est vraie (le premier domino tombe).
2. **Hérédité.** On suppose $P(k)$ vraie pour un entier $k \geq n_0$ **quelconque fixé**
   (c'est l'*hypothèse de récurrence*), et on démontre qu'alors $P(k+1)$ est vraie (chaque
   domino fait tomber le suivant).
3. **Conclusion.** Par récurrence, $P(n)$ est vraie pour tout entier $n \geq n_0$.

$$\boxed{\text{Initialisation} \ \Longrightarrow\ \text{Hérédité} \ \Longrightarrow\ \text{Conclusion pour tout } n \geq n_0}$$

### Exemple rédigé — une égalité

Montrons que pour tout $n \geq 1$ : $\displaystyle 1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$.
Appelons $P(n)$ cette égalité.

**Initialisation.** Pour $n = 1$ : le membre de gauche vaut $1$, celui de droite vaut
$\dfrac{1 \times 2}{2} = 1$. Donc $P(1)$ est vraie.

**Hérédité.** Supposons $P(k)$ vraie pour un $k \geq 1$ fixé, c'est-à-dire
$1 + 2 + \dots + k = \dfrac{k(k+1)}{2}$. Montrons $P(k+1)$. On ajoute $k+1$ des deux côtés :
$$1 + 2 + \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2} + 1\right) = \frac{(k+1)(k+2)}{2}.$$
C'est bien la formule au rang $k+1$. Donc $P(k) \Rightarrow P(k+1)$.

**Conclusion.** Par récurrence, pour tout $n \geq 1$, $\ 1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$.

### Exemple rédigé — une inégalité

Montrons que pour tout $n \geq 0$ : $2^n \geq n + 1$. Appelons-la $P(n)$.

**Initialisation.** Pour $n = 0$ : $2^0 = 1$ et $0 + 1 = 1$, donc $1 \geq 1$ : $P(0)$ vraie.

**Hérédité.** Supposons $2^k \geq k + 1$ pour un $k \geq 0$ fixé. Alors
$2^{k+1} = 2 \times 2^k \geq 2(k+1) = 2k + 2 \geq k + 2$ (car $k \geq 0$). Donc
$2^{k+1} \geq (k+1) + 1$ : $P(k+1)$ est vraie.

**Conclusion.** Par récurrence, $2^n \geq n + 1$ pour tout $n \geq 0$.

> **Là où ça se joue.** La récurrence sert surtout à étudier les suites définies **par
> récurrence** ($u_{n+1} = f(u_n)$) : montrer qu'elles sont majorées, minorées, ou
> monotones — souvent pour appliquer ensuite le théorème de convergence monotone (section 6).

---

## 8. Tableau récapitulatif

| Situation | Ce qu'on écrit | Idée clé |
|---|---|---|
| $u_n \to +\infty$ | tout $[A\,;+\infty[$ contient les $u_n$ dès un rang | dépasse tout seuil |
| $u_n \to \ell$ | tout intervalle ouvert autour de $\ell$ les contient | entre dans la fenêtre et y reste |
| Croissante non majorée | $u_n \to +\infty$ | pas de plafond |
| Gendarmes | $u_n \leq v_n \leq w_n$, mêmes limites | encadrer pour conclure |
| Formes indéterminées | $\infty-\infty,\ 0\times\infty,\ \frac{\infty}{\infty},\ \frac{0}{0}$ | transformer avant de conclure |
| $q^n$, $|q| < 1$ | $q^n \to 0$ | amortissement |
| $q^n$, $q > 1$ | $q^n \to +\infty$ | explosion |
| Convergence monotone | croissante majorée $\Rightarrow$ converge | existence, pas la valeur |
| Récurrence | initialisation + hérédité + conclusion | les deux étapes, pas une seule |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier l'initialisation.** Une hérédité seule ne prouve **rien** : sans premier
   domino qui tombe, aucun ne tombe. On peut « démontrer » l'hérédité de $P(n): 2^n = 1$
   … qui est fausse. L'initialisation n'est pas une formalité, c'est la moitié de la preuve.
2. **Mal formuler l'hérédité.** Il faut supposer $P(k)$ (l'hypothèse) et **en déduire**
   $P(k+1)$. Supposer directement $P(k+1)$, ou « supposer $P(n)$ pour tout $n$ », c'est
   supposer ce qu'on veut démontrer : le raisonnement est circulaire et vaut zéro.
3. **Écrire « $\infty - \infty = 0$ » ou « $\frac{\infty}{\infty} = 1$ ».** Ce sont des
   formes **indéterminées** : il faut factoriser ou simplifier avant de conclure.
4. **Confondre « converge » et « a une limite ».** Une suite qui tend vers $+\infty$
   **diverge**. Convergente = limite **finie**.
5. **Croire que le majorant est la limite.** Une suite croissante majorée par $10$ converge,
   mais pas forcément vers $10$ ; le théorème donne l'existence, pas la valeur.
6. **Se tromper sur $(q^n)$ quand $q$ est négatif.** Pour $q \leq -1$, la suite **n'a pas de
   limite** (elle alterne de signe) ; ne conclus $q^n \to 0$ que si $|q| < 1$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt, section « ANALYSE — SUITES »
(lignes 132 à 148 : rubriques « Contenus » et « Capacités attendues »).
Chapitre couvrant : limite +∞ / −∞ (définition par intervalles [A;+∞[), suites
croissantes non majorées, convergence vers ℓ (définition par intervalle ouvert),
limites et comparaison + théorème des gendarmes, opérations sur les limites (formes
indéterminées), comportement de (qⁿ), théorème de convergence monotone (admis), et
raisonnement par récurrence (capacité attendue « Raisonner par récurrence pour établir
une propriété d'une suite »).

⚠️ MENTION OBLIGATOIRE 1 — PROVENANCE DE LA SOURCE : le fichier programme utilisé n'a
PAS été produit par la chaîne d'extraction habituelle. Son texte a été reconstitué via
WebFetch depuis un MIROIR (xm1math.net), le proxy du sandbox bloquant le PDF officiel
(voir l'en-tête de provenance, lignes 1-20 du fichier source). Cette extraction WebFetch
DOIT être confrontée au PDF officiel (education.gouv.fr / éduscol) avant toute
publication. La reproduction n'est pas garantie exhaustive (préambules, exemples et
notes non repris).

⚠️ MENTION OBLIGATOIRE 2 — PÉRIMÈTRE TERMINALE / RENTRÉE 2027 : ce chapitre de TERMINALE
a été produit sur le programme applicable à la RENTRÉE 2027, À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md, §6) recommandait de « ne rien
écrire pour la Terminale avant 2027 » ; la demande utilisateur lève cette réserve
puisque le nouveau programme 2027 est désormais publié. À signaler au relecteur pour
traçabilité.

À CONFRONTER AU PROGRAMME OFFICIEL PAR UN PROFESSEUR :
- Formulation exacte des définitions par intervalles (« à partir d'un certain rang »),
  qui doit coller au libellé du BO.
- Le tableau détaillé des opérations sur les limites (somme/produit/quotient) n'est pas
  explicité dans l'extraction : j'ai retenu les 4 formes indéterminées et renvoyé à la
  transformation d'écriture, sans reproduire un tableau que le BO ne détaille pas ici.
- Vérifier que la « démonstration » exigible (le cas échéant) figure bien : l'extraction
  ne liste pas de démonstration exigible pour les suites, je n'en ai donc pas isolé une
  au sens du gabarit §Corps-3 ; la récurrence est traitée comme MÉTHODE, conformément à
  la capacité attendue.
- Prérequis cités : chapitre de Première spé « Suites numériques, modèles discrets »
  (contenu/premiere/maths-specialite/suites-numeriques/), notamment suites géométriques
  et approche intuitive de la limite.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
