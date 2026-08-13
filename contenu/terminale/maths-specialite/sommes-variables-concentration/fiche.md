---
id: tale-spe-math-sommes-variables-concentration
titre: "Sommes de variables aléatoires, concentration et loi des grands nombres"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Loi binomiale et schéma de Bernoulli (Terminale spé — chapitre « Loi binomiale », contenu/terminale/maths-specialite/loi-binomiale/)
  - Variables aléatoires, espérance et variance (Première spé)
  - Loi de Bernoulli (Première spé)
statut: brouillon
relu_par: null
---

# Sommes de variables aléatoires, concentration et loi des grands nombres

> Quand tu additionnes deux variables aléatoires, leurs **espérances s'ajoutent
> toujours**. Mais leurs **variances ne s'ajoutent que si les variables sont
> indépendantes**. Toute la richesse — et tous les pièges — de ce chapitre tiennent
> dans cette dissymétrie.

---

## 1. Somme de deux variables aléatoires

Soit $X$ et $Y$ deux variables aléatoires définies sur le même univers. Leur **somme**
$X + Y$ est la variable aléatoire qui, à chaque issue, associe la somme des deux valeurs
prises. On définit de même $aX$ pour un réel $a$ : elle multiplie par $a$ chaque valeur
de $X$.

Ces variables se manipulent comme des nombres pour l'addition, mais leur **espérance**
et leur **variance** ne suivent pas les mêmes règles. C'est tout l'objet du chapitre.

---

## 2. Linéarité de l'espérance

L'espérance d'une somme est **toujours** la somme des espérances — sans aucune condition.

$$\boxed{E(X + Y) = E(X) + E(Y)} \qquad\qquad \boxed{E(aX) = a\,E(X)}$$

> **Exemple.** Tu lances deux dés équilibrés. Chaque dé a pour espérance
> $E = \dfrac{1+2+3+4+5+6}{6} = 3{,}5$. La somme des deux dés a donc pour espérance
> $3{,}5 + 3{,}5 = 7$, quel que soit le lien entre les dés.

En combinant les deux règles, pour tous réels $a$ et $b$ :

$$E(aX + bY) = a\,E(X) + b\,E(Y)$$

> **Exemple.** Si $E(X) = 2$ et $E(Y) = 5$, alors $E(3X - Y) = 3 \times 2 - 5 = 1$.

> ⚠️ **Retiens bien** : la linéarité de l'espérance ne demande **jamais**
> l'indépendance. Elle est vraie pour n'importe quelles variables $X$ et $Y$.

---

## 3. Variance d'une somme : l'indépendance est indispensable

Deux variables $X$ et $Y$ sont **indépendantes** lorsque la valeur prise par l'une
n'influe pas sur la loi de l'autre — typiquement dans une **succession d'épreuves
indépendantes**.

**Uniquement dans ce cas**, les variances s'ajoutent :

$$\boxed{V(X + Y) = V(X) + V(Y)} \quad \text{(si } X \text{ et } Y \text{ sont indépendantes)}$$

> **Exemple.** Deux dés lancés séparément sont indépendants. La variance d'un dé vaut
> $V = \dfrac{35}{12}$. La variance de la somme des deux dés est donc
> $\dfrac{35}{12} + \dfrac{35}{12} = \dfrac{35}{6}$.

Pour la multiplication par un réel, la règle vaut **toujours**, mais le facteur passe
**au carré** :

$$\boxed{V(aX) = a^2\,V(X)}$$

> **Exemple.** Si $V(X) = 4$, alors $V(3X) = 3^2 \times 4 = 36$, et non $12$.
> L'écart type, lui, est multiplié par $|a|$ : $\sigma(3X) = 3\,\sigma(X)$.

> ⚠️ **Deux pièges à ne jamais confondre.**
> - $V(X+Y) = V(X)+V(Y)$ **exige** l'indépendance.
> - $V(aX) = a^2 V(X)$ : le coefficient est **au carré**, pas simple.

---

## 4. Application : espérance et variance de la loi binomiale

C'est ici que se démontrent les formules de la loi binomiale, en la voyant comme une
**somme de variables de Bernoulli indépendantes**.

Une variable $X$ qui suit la loi binomiale $\mathcal{B}(n, p)$ compte le nombre de succès
lors de $n$ épreuves de Bernoulli **indépendantes**, chacune de probabilité de succès $p$.
On peut donc l'écrire :

$$X = X_1 + X_2 + \dots + X_n$$

où chaque $X_i$ vaut $1$ en cas de succès, $0$ sinon (loi de Bernoulli de paramètre $p$).

**Pour une épreuve de Bernoulli**, on établit d'abord :

$$E(X_i) = 0 \times (1-p) + 1 \times p = p \qquad V(X_i) = p(1-p)$$

**Espérance de $X$** — par linéarité (sans condition) :

$$E(X) = E(X_1) + \dots + E(X_n) = \underbrace{p + \dots + p}_{n \text{ fois}} = \boxed{np}$$

**Variance de $X$** — les $X_i$ étant **indépendantes**, les variances s'ajoutent :

$$V(X) = V(X_1) + \dots + V(X_n) = \boxed{np(1-p)}$$

**Écart type** :

$$\boxed{\sigma(X) = \sqrt{np(1-p)}}$$

> **Exemple.** Pour $X \sim \mathcal{B}(50 ; 0{,}2)$ :
> $E(X) = 50 \times 0{,}2 = 10$, $V(X) = 50 \times 0{,}2 \times 0{,}8 = 8$,
> et $\sigma(X) = \sqrt{8} \approx 2{,}83$.

---

## 5. Échantillon d'une loi : somme $S_n$ et moyenne $M_n$

Un **échantillon de taille $n$** d'une loi est une liste $(X_1, \dots, X_n)$ de variables
aléatoires **indépendantes** et **de même loi** (on dit *identiquement distribuées*).
Note $\mu = E(X_i)$ leur espérance commune et $V = V(X_i)$ leur variance commune.

On étudie deux variables construites sur cet échantillon.

**La somme** $S_n = X_1 + \dots + X_n$ :

$$E(S_n) = n\mu \qquad V(S_n) = nV \qquad \sigma(S_n) = \sqrt{n}\,\sigma$$

**La moyenne** $M_n = \dfrac{S_n}{n}$ :

$$\boxed{E(M_n) = \mu} \qquad \boxed{V(M_n) = \frac{V}{n}} \qquad \boxed{\sigma(M_n) = \frac{\sigma}{\sqrt{n}}}$$

> **D'où viennent ces formules pour $M_n$.** Comme $M_n = \dfrac{1}{n}S_n$, on applique
> $E(aX) = aE(X)$ et $V(aX) = a^2V(X)$ avec $a = \dfrac{1}{n}$ :
> $$E(M_n) = \frac{1}{n} \times n\mu = \mu \qquad V(M_n) = \frac{1}{n^2} \times nV = \frac{V}{n}$$

Retiens l'idée essentielle : la moyenne $M_n$ a **la même espérance $\mu$** que chaque
$X_i$, mais une variance **$n$ fois plus petite**. Plus l'échantillon est grand, plus la
moyenne se resserre autour de $\mu$.

---

## 6. Inégalité de Bienaymé-Tchebychev

Cette inégalité **majore la probabilité de s'écarter de la moyenne**, sans rien connaître
de la loi, à partir de la seule variance.

Pour une variable aléatoire $X$ d'espérance $\mu$ et de variance $V(X)$, et pour tout réel
$\delta > 0$ :

$$\boxed{P\big(|X - \mu| \geqslant \delta\big) \leqslant \frac{V(X)}{\delta^2}}$$

> **Exemple.** Une variable a pour espérance $\mu = 20$ et variance $V(X) = 4$. La
> probabilité de s'écarter de $\mu$ d'au moins $\delta = 5$ vérifie :
> $$P(|X - 20| \geqslant 5) \leqslant \frac{4}{5^2} = \frac{4}{25} = 0{,}16.$$
> Autrement dit, au moins $84\,\%$ des valeurs tombent dans l'intervalle $]15\,;25[$.

> **À quoi ça sert.** L'inégalité donne une garantie **valable pour toute loi**. Elle
> est souvent grossière (la vraie probabilité est bien plus petite), mais elle ne
> suppose rien : c'est sa force.

---

## 7. Inégalité de concentration

On applique Bienaymé-Tchebychev à la **moyenne $M_n$** d'un échantillon. Comme
$V(M_n) = \dfrac{V}{n}$, on obtient directement :

$$\boxed{P\big(|M_n - \mu| \geqslant \delta\big) \leqslant \frac{V}{n\,\delta^2}}$$

où $\mu$ et $V$ sont l'espérance et la variance de la loi échantillonnée, et $\delta > 0$.

> **Exemple.** Une loi a $\mu = 3{,}5$ et $V = 2{,}9$. Sur un échantillon de taille
> $n = 1000$, la probabilité que la moyenne s'écarte de plus de $\delta = 0{,}2$ vérifie :
> $$P(|M_{1000} - 3{,}5| \geqslant 0{,}2) \leqslant \frac{2{,}9}{1000 \times 0{,}2^2}
> = \frac{2{,}9}{40} \approx 0{,}073.$$

> **La méthode du dimensionnement.** Pour garantir un risque au plus $\alpha$, on cherche
> $n$ tel que $\dfrac{V}{n\delta^2} \leqslant \alpha$, ce qui donne
> $n \geqslant \dfrac{V}{\alpha\,\delta^2}$. C'est ainsi qu'on choisit une **taille
> d'échantillon** en fonction de la précision $\delta$ et du risque $\alpha$ voulus.

---

## 8. Loi des grands nombres

Quand $n$ grandit, le majorant $\dfrac{V}{n\delta^2}$ tend vers $0$. Donc, pour tout
$\delta > 0$ fixé :

$$P\big(|M_n - \mu| \geqslant \delta\big) \xrightarrow[n \to +\infty]{} 0$$

C'est la **loi des grands nombres** : la moyenne $M_n$ d'un grand échantillon se
**concentre** autour de l'espérance $\mu$ de la loi. Plus l'échantillon est grand, plus
il devient improbable que la moyenne observée s'éloigne de $\mu$.

> **L'interprétation concrète.** Si tu répètes un grand nombre de fois une expérience,
> la moyenne des résultats se rapproche de l'espérance théorique. C'est ce qui justifie,
> par exemple, qu'une fréquence observée sur beaucoup de tirages estime bien une
> probabilité.

---

## 9. Tableau récapitulatif

| Objet | Formule | Condition |
|---|---|---|
| Espérance d'une somme | $E(X+Y) = E(X)+E(Y)$ | **aucune** |
| Espérance d'un multiple | $E(aX) = a\,E(X)$ | aucune |
| Variance d'une somme | $V(X+Y) = V(X)+V(Y)$ | **$X, Y$ indépendantes** |
| Variance d'un multiple | $V(aX) = a^2\,V(X)$ | aucune (facteur au **carré**) |
| Binomiale $\mathcal{B}(n,p)$ | $E=np$, $\;V=np(1-p)$, $\;\sigma=\sqrt{np(1-p)}$ | — |
| Somme $S_n$ | $E=n\mu$, $\;V=nV$, $\;\sigma=\sqrt{n}\,\sigma$ | échantillon |
| Moyenne $M_n$ | $E=\mu$, $\;V=\dfrac{V}{n}$, $\;\sigma=\dfrac{\sigma}{\sqrt{n}}$ | échantillon |
| Bienaymé-Tchebychev | $P(|X-\mu|\geqslant\delta) \leqslant \dfrac{V(X)}{\delta^2}$ | $\delta>0$ |
| Concentration | $P(|M_n-\mu|\geqslant\delta) \leqslant \dfrac{V}{n\delta^2}$ | $\delta>0$ |
| Loi des grands nombres | $P(|M_n-\mu|\geqslant\delta) \to 0$ | $n \to +\infty$ |

---

## 10. Les erreurs qui coûtent des points

1. **Additionner les variances sans indépendance.** $V(X+Y) = V(X)+V(Y)$ n'est vrai
   **que si $X$ et $Y$ sont indépendantes**. Pour l'espérance, aucune condition — ne
   mélange pas les deux règles.
2. **Oublier le carré dans $V(aX)$.** C'est $V(aX) = a^2 V(X)$, **pas** $a\,V(X)$.
   L'erreur classique : écrire $V(3X) = 3V(X)$ au lieu de $9V(X)$.
3. **Confondre variance et écart type sous un facteur.** La variance est multipliée par
   $a^2$, mais l'écart type seulement par $|a|$ : $\sigma(aX) = |a|\,\sigma(X)$.
4. **Se tromper sur la variance de $M_n$.** C'est $\dfrac{V}{n}$ (divisée par $n$), pas
   $\dfrac{V}{n^2}$ : le $n^2$ du dénominateur est compensé par le $nV$ de $V(S_n)$.
5. **Croire que $M_n$ a une espérance qui diminue.** $E(M_n) = \mu$ **reste constant** ;
   c'est la **variance** qui diminue quand $n$ augmente, pas l'espérance.
6. **Mal orienter l'inégalité de Bienaymé-Tchebychev.** Elle **majore** la probabilité
   de l'événement $|X-\mu| \geqslant \delta$ (s'écarter), pas de $|X-\mu| < \delta$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-terminale-specialite-maths-2027.txt, DEUX sections utilisées
verbatim comme périmètre :
- « PROBABILITÉS — SOMMES DE VARIABLES ALÉATOIRES » (lignes 311 à 328)
- « PROBABILITÉS — CONCENTRATION, LOI DES GRANDS NOMBRES » (lignes 330 à 343)
En-tête de provenance du fichier source : lignes 1 à 20.

⚠️ MENTION 1 — PROVENANCE À CONFRONTER AU PDF OFFICIEL : le fichier source n'a PAS été
produit par la chaîne d'extraction habituelle. Son texte a été reconstitué via l'outil
WebFetch depuis le miroir xm1math.net (term_gen_spe.pdf), rubrique par rubrique. Avant
toute publication, ce contenu DOIT être confronté au PDF officiel (education.gouv.fr /
éduscol). La reproduction n'est pas garantie exhaustive (préambules, exemples et notes
non repris).

⚠️ MENTION 2 — CHAPITRE DE TERMINALE / PROGRAMME RENTRÉE 2027 : cette fiche est un
chapitre de Terminale produit sur le programme applicable à la rentrée 2027, à la
demande explicite de l'utilisateur. Le gabarit (docs/gabarit-chapitre.md, point 6)
déconseille par défaut d'écrire pour la Terminale avant 2027 ; programme 2027 déjà
publié et demande explicite, d'où production en brouillon non relu.

Correspondance extraction → fiche : linéarité E (§2) ; indépendance et V(X+Y),
V(aX)=a²V (§3) ; binomiale E=np, V=np(1-p), σ via somme de Bernoulli (§4) ; échantillon
Sₙ et Mₙ (§5) ; Bienaymé-Tchebychev (§6) ; concentration (§7) ; LGN (§8) ; capacité
« taille d'échantillon selon précision et risque » → dimensionnement (§7).

POINTS À SOUMETTRE AU RELECTEUR :
- Prérequis loi binomiale → contenu/terminale/maths-specialite/loi-binomiale/ : chapitre
  absent du dépôt à la production. Créer / vérifier le slug avant publication.
- Vérifier les valeurs numériques des exemples (dont V = 35/12 pour un dé, section 3).
- Confirmer que la variance binomiale par somme de Bernoulli indépendantes est la voie
  attendue (le texte dit « application »). Notation V conservée (comme le programme).

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
