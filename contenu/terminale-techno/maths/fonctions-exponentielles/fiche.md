---
id: tale-techno-math-fonctions-exponentielles
titre: "Fonctions exponentielles x ↦ aˣ"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Suites arithmétiques et géométriques (Terminale technologique)
  - Suites numériques (Première technologique)
  - Puissances d'un nombre et racine carrée (Seconde)
  - Pourcentages et évolutions successives (automatismes)
statut: brouillon
relu_par: null
---

# Fonctions exponentielles $x \mapsto a^x$

> Avec les suites géométriques, tu sais calculer un capital **année par année** :
> $u_n = u_0 \times q^n$, avec $n$ entier. Mais que vaut le capital au bout de
> $2{,}5$ ans ? De $6$ mois ? Les fonctions exponentielles $x \mapsto a^x$
> répondent à cette question : elles **prolongent** les suites géométriques à
> tous les exposants, entiers ou non. Au passage, elles règlent un problème
> très concret : trouver le **taux annuel moyen** qui résume plusieurs
> évolutions successives.

---

## 1. Définition : prolonger $n \mapsto a^n$ à tous les exposants

### Ce que tu sais déjà

Pour $a > 0$ et $n$ entier naturel, tu sais calculer $a^n = a \times a \times \cdots \times a$
($n$ facteurs), avec les conventions $a^0 = 1$ et $a^1 = a$. C'est exactement une
suite géométrique de premier terme $1$ et de raison $a$ : les points
$(0\,;1)$, $(1\,;a)$, $(2\,;a^2)$, … s'alignent sur une courbe régulière.

### La définition

**Pour $a > 0$**, on admet qu'il existe une unique façon « régulière » de relier
ces points : cela définit un nombre $a^x$ pour **tout réel $x \geqslant 0$**
(et même pour tout réel $x$, avec $a^{-x} = \dfrac{1}{a^x}$).

$$\boxed{\text{La fonction exponentielle de base } a \text{ est } f : x \mapsto a^x, \text{ définie pour } a > 0}$$

Elle **prolonge** la suite géométrique $n \mapsto a^n$ : pour les valeurs
entières de $x$, on retrouve exactement les termes de la suite.

> **Exemple.** Pour $a = 3$ : $3^0 = 1$, $3^1 = 3$, $3^2 = 9$… et entre les
> entiers, la fonction donne un sens à $3^{2{,}5} = 3^2 \times 3^{0{,}5} \approx 9 \times 1{,}732 \approx 15{,}6$.
> La calculatrice le calcule avec la touche puissance : `3^2.5`.

### Deux valeurs à connaître par cœur

Pour tout $a > 0$ :

$$\boxed{a^0 = 1 \qquad \text{et} \qquad a^1 = a}$$

**Toutes les courbes $y = a^x$ passent par le point $(0\,;1)$**, quelle que soit
la base $a$.

⚠️ La base doit être **strictement positive**. $a^x$ n'est pas défini pour
$a < 0$ (que vaudrait $(-2)^{0{,}5}$ ?) — cohérent avec le chapitre suites, où
les suites géométriques sont à termes strictement positifs.

---

## 2. Sens de variation et allure de la courbe selon $a$

Tout dépend de la position de $a$ par rapport à $1$ :

$$\boxed{a > 1 : x \mapsto a^x \text{ est strictement croissante} \qquad 0 < a < 1 : x \mapsto a^x \text{ est strictement décroissante}}$$

(Si $a = 1$, la fonction est constante égale à $1$ : sans intérêt.)

| Base | Sens de variation | Allure | Modélise… |
|---|---|---|---|
| $a > 1$ | croissante | part de $(0\,;1)$ et **grimpe** de plus en plus vite | une **croissance** (capital, population) |
| $0 < a < 1$ | décroissante | part de $(0\,;1)$ et **descend** en s'approchant de $0$ sans l'atteindre | une **décroissance** (dépréciation, décharge) |

Dans les deux cas, $a^x > 0$ pour tout $x$ : **une exponentielle ne s'annule
jamais et n'est jamais négative**.

> **Exemple.** $f(x) = 1{,}05^x$ est croissante ($1{,}05 > 1$) : c'est la courbe
> d'un capital placé à $5\,\%$. $g(x) = 0{,}85^x$ est décroissante
> ($0 < 0{,}85 < 1$) : c'est la courbe d'un matériel qui perd $15\,\%$ de sa
> valeur par an.

### Les fonctions $k \cdot a^x$ (capacité attendue)

En pratique, on part rarement de $1$ : un capital de $5\,000$ € placé à $3\,\%$
se modélise par $C(x) = 5000 \times 1{,}03^x$. Le facteur $k$ est la **valeur de
départ** (car $k \cdot a^0 = k$).

Sens de variation de $f(x) = k \cdot a^x$ :

| | $a > 1$ | $0 < a < 1$ |
|---|---|---|
| $k > 0$ | croissante | décroissante |
| $k < 0$ | décroissante | croissante |

**Si $k > 0$ (le cas des situations concrètes), multiplier par $k$ ne change pas
le sens de variation.** Si $k < 0$, la courbe est retournée : le sens s'inverse.

> **Exemple.** $f(x) = 200 \times 0{,}9^x$ est décroissante ($k = 200 > 0$ et
> $0 < 0{,}9 < 1$). $g(x) = -3 \times 1{,}2^x$ est décroissante aussi : la base
> $1{,}2 > 1$ ferait croître, mais $k = -3 < 0$ inverse le sens.

---

## 3. Propriétés algébriques

Les règles des puissances entières restent vraies pour **tous** les exposants
réels. Pour $a > 0$, $x$ et $y$ réels, $n$ entier :

$$\boxed{a^{x+y} = a^x \times a^y \qquad a^{x-y} = \frac{a^x}{a^y} \qquad a^{nx} = \left(a^x\right)^n}$$

Et leurs conséquences directes :

$$a^{-x} = \frac{1}{a^x} \qquad \qquad a^{1/2} = \sqrt{a}$$

> **Exemple (somme).** $2^x \times 2^3 = 2^{x+3}$ : multiplier par $2^3 = 8$,
> c'est augmenter l'exposant de $3$.

> **Exemple (différence).** $\dfrac{3^{x+2}}{3^x} = 3^{x+2-x} = 3^2 = 9$ : le
> quotient ne dépend pas de $x$.

> **Exemple (produit d'exposants).** $5^{3x} = \left(5^x\right)^3$ : élever au
> cube, c'est tripler l'exposant.

> **Exemple (racine).** $a^{1/2}$ est le nombre positif dont le carré vaut $a$,
> car $\left(a^{1/2}\right)^2 = a^{2 \times \frac{1}{2}} = a^1 = a$. Donc
> $a^{1/2} = \sqrt{a}$ : par exemple $9^{1/2} = 3$.

### Traduction concrète : $a^{x+1} = a \times a^x$

Si $N(x) = k \cdot a^x$ modélise une quantité, alors

$$N(x+1) = k \cdot a^{x+1} = a \times k \cdot a^x = a \times N(x)$$

**D'une unité de temps à la suivante, la quantité est toujours multipliée par
$a$** — exactement comme une suite géométrique de raison $a$. C'est le lien
entre ce chapitre et le précédent.

---

## 4. L'exposant $\dfrac{1}{n}$ : le taux moyen équivalent à $n$ évolutions

### L'idée

De même que $a^{1/2} = \sqrt{a}$, le nombre $a^{1/n}$ est le nombre positif qui,
élevé à la puissance $n$, redonne $a$ :

$$\left(a^{1/n}\right)^n = a^{n \times \frac{1}{n}} = a^1 = a$$

**$a^{1/n}$ est donc le coefficient qui, appliqué $n$ fois de suite, produit le
même effet que le coefficient $a$ appliqué une fois.**

### La méthode du taux moyen (capacité attendue)

Une grandeur subit $n$ évolutions successives, de coefficient global $C$
(c'est-à-dire : valeur finale $=$ $C \times$ valeur initiale). Le **taux moyen**
est le taux unique $t_m$ qui, répété $n$ fois, donne la même évolution globale :

$$\boxed{c_m = C^{1/n} \qquad \text{puis} \qquad t_m = c_m - 1}$$

1. Calcule le coefficient global $C = \dfrac{\text{valeur finale}}{\text{valeur initiale}}$ (ou $C = 1 + \dfrac{t_{\text{global}}}{100}$).
2. Prends la racine $n$-ième : $c_m = C^{1/n}$ (touche puissance de la calculatrice, exposant $1/n$).
3. Reviens au taux : $t_m = c_m - 1$, à convertir en pourcentage.

> **Exemple (hausse).** Un loyer augmente de $44\,\%$ en $2$ ans. Coefficient
> global : $C = 1{,}44$. Coefficient moyen annuel : $c_m = 1{,}44^{1/2} = \sqrt{1{,}44} = 1{,}2$.
> Taux moyen : $+20\,\%$ par an — et **pas** $44/2 = 22\,\%$, car les hausses se
> composent : $1{,}2 \times 1{,}2 = 1{,}44$ mais $1{,}22 \times 1{,}22 = 1{,}4884$.

> **Exemple (baisse).** Les ventes d'un produit chutent de $27{,}1\,\%$ en $3$
> ans : $C = 1 - 0{,}271 = 0{,}729$. Coefficient moyen :
> $c_m = 0{,}729^{1/3} = 0{,}9$ (car $0{,}9^3 = 0{,}729$). Taux moyen :
> $0{,}9 - 1 = -0{,}1$, soit $-10\,\%$ par an.

⚠️ Le taux moyen est le pendant « fonctions » de la **moyenne géométrique** vue
au chapitre suites : pour $n = 2$, $C^{1/2} = \sqrt{C}$ est la moyenne
géométrique — jamais la moyenne arithmétique des taux.

---

## 5. Modéliser avec $k \cdot a^x$ : les situations à reconnaître

Une grandeur qui évolue de $t\,\%$ **par unité de temps** se modélise par

$$\boxed{f(x) = k \times a^x \qquad \text{avec } k = \text{valeur initiale et } a = 1 + \frac{t}{100}}$$

| Situation | $t$ | Base $a$ | Fonction |
|---|---|---|---|
| Capital de $5\,000$ € à $3\,\%$ par an | $+3\,\%$ | $1{,}03$ | $C(x) = 5000 \times 1{,}03^x$ |
| Machine de $12\,000$ € qui perd $15\,\%$ par an | $-15\,\%$ | $0{,}85$ | $V(x) = 12000 \times 0{,}85^x$ |
| Population de bactéries qui double chaque heure | $+100\,\%$ | $2$ | $N(x) = N_0 \times 2^x$ |

L'avantage sur la suite $u_n = u_0 \, q^n$ : **$x$ n'est plus forcément
entier**. On peut évaluer la grandeur à tout instant.

> **Exemple.** Capital $C(x) = 5000 \times 1{,}03^x$. Au bout de $10$ ans :
> $C(10) = 5000 \times 1{,}03^{10} \approx 5000 \times 1{,}3439 \approx 6\,719{,}58$ €.
> Au bout de $6$ mois ($x = 0{,}5$) :
> $C(0{,}5) = 5000 \times 1{,}03^{0{,}5} = 5000 \times \sqrt{1{,}03} \approx 5\,074{,}44$ €.

> **Exemple (dépréciation).** $V(x) = 12000 \times 0{,}85^x$. Après $5$ ans :
> $V(5) = 12000 \times 0{,}85^5 \approx 12000 \times 0{,}4437 \approx 5\,324{,}46$ €.
> La machine a perdu environ $55{,}6\,\%$ de sa valeur — et **pas**
> $5 \times 15 = 75\,\%$ : les baisses se composent, elles ne s'additionnent pas.

---

## 6. Tableau récapitulatif

| À savoir | Formule / résultat |
|---|---|
| Définition | $x \mapsto a^x$, $a > 0$, prolonge la suite géométrique $n \mapsto a^n$ |
| Valeurs clés | $a^0 = 1$ ; $a^1 = a$ ; courbe passe par $(0\,;1)$ |
| Signe | $a^x > 0$ pour tout $x$ : jamais nul, jamais négatif |
| Variations | $a > 1$ : croissante ; $0 < a < 1$ : décroissante |
| $k \cdot a^x$, $k > 0$ | même sens de variation que $a^x$ (inversé si $k < 0$) |
| Produit | $a^{x+y} = a^x \, a^y$ |
| Quotient | $a^{x-y} = \dfrac{a^x}{a^y}$ ; $a^{-x} = \dfrac{1}{a^x}$ |
| Puissance | $a^{nx} = (a^x)^n$ |
| Racine | $a^{1/2} = \sqrt{a}$ ; $\left(a^{1/n}\right)^n = a$ |
| Taux moyen sur $n$ évolutions | $c_m = C^{1/n}$, puis $t_m = c_m - 1$ |
| Modélisation à $t\,\%$ par période | $f(x) = k \times a^x$, $a = 1 + \dfrac{t}{100}$, $k$ = valeur initiale |

---

## 7. Les erreurs qui coûtent des points

1. **Diviser le taux global par $n$ pour trouver le taux moyen.** $+44\,\%$ en
   $2$ ans ne fait pas $+22\,\%$ par an mais $1{,}44^{1/2} - 1 = +20\,\%$. Les
   évolutions se **multiplient** : passe toujours par les coefficients et
   l'exposant $1/n$.
2. **Se tromper de base pour une baisse.** $-15\,\%$ par an donne $a = 0{,}85$,
   jamais $a = -0{,}15$ ni $a = 1{,}15$. Une base négative n'a même pas de sens.
3. **Confondre $a^{x+y}$ et $a^x + a^y$.** L'exponentielle transforme les
   sommes d'exposants en **produits** : $a^{x+y} = a^x \times a^y$. Vérifie sur
   un exemple : $2^{1+2} = 8$ alors que $2^1 + 2^2 = 6$.
4. **Juger le sens de variation sur $k$ au lieu de $a$** (ou l'inverse). Pour
   $k \cdot a^x$ avec $k > 0$, seule la base décide : $a > 1$ croissante,
   $0 < a < 1$ décroissante. Et si $k < 0$, le sens s'inverse.
5. **Croire que $a^x$ peut s'annuler ou devenir négatif.** $0{,}85^x$ se
   rapproche de $0$ mais ne l'atteint jamais : une valeur qui se déprécie de
   $15\,\%$ par an ne devient jamais nulle dans ce modèle.
6. **Additionner des pertes successives.** Perdre $15\,\%$ par an pendant $5$
   ans, ce n'est pas perdre $75\,\%$ : le coefficient global est
   $0{,}85^5 \approx 0{,}444$, soit environ $-55{,}6\,\%$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTIONS EXPONENTIELLES x ↦ a^x (a > 0) » (lignes 53-62).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Contenus : définition de x ↦ a^x pour x positif comme prolongement de n ↦ a^n
  (§1) ; sens de variation et allure de la courbe selon a (§2) ; propriétés
  algébriques a^(x+y), a^(x−y), a^(nx) (§3) ; exposant 1/n et taux moyen
  équivalent à n évolutions (§4).
- Capacités : sens de variation des fonctions k·a^x (§2) ; utiliser les
  propriétés algébriques (§3) ; calculer le taux d'évolution moyen équivalent à
  n évolutions successives (§4). La modélisation (§5) illustre ces capacités
  dans les contextes de la voie technologique (capital, dépréciation, croissance).

Prérequis : chapitre « Suites arithmétiques et géométriques » de Terminale
technologique (contenu/terminale-techno/maths/suites-arithmetiques-geometriques/) —
le taux moyen prolonge la moyenne géométrique de deux coefficients (n = 2) vue
dans ce chapitre, comme annoncé dans ses propres notes de production ; le lien
a^(x+1) = a·a^x renvoie à la raison d'une suite géométrique. Également : suites
numériques de Première techno, puissances et racine carrée, automatismes
pourcentages.

Choix de rédaction :
- « Défini pour x positif » selon le texte officiel ; l'extension à x négatif
  via a^(−x) = 1/a^x est mentionnée en passant (utile pour les propriétés
  algébriques), à confirmer au PDF si c'est hors périmètre.
- a = 1 traité en remarque (fonction constante), le programme ne le cite pas.
- k < 0 dans k·a^x : traité (une ligne + exemple) car la capacité dit « les
  fonctions k·a^x » sans restreindre k ; en contexte techno, k > 0 domine.
- Comportement en +∞ décrit qualitativement (« s'approche de 0 sans
  l'atteindre ») sans le vocabulaire des limites, absent du programme.

Vérifications numériques faites : 3^2,5 ≈ 15,59 ; 1,03^10 ≈ 1,343916 →
6 719,58 € ; √1,03 ≈ 1,014889 → 5 074,44 € ; 0,85^5 = 0,4437053125 →
5 324,46 € et −55,6 % ; 1,44^(1/2) = 1,2 exact ; 1,22² = 1,4884 ;
0,9³ = 0,729 exact ; 2^(1+2) = 8 ≠ 2^1 + 2^2 = 6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact de la définition (x positif seulement ? extension à ℝ ?).
- La place de la remarque « a^x jamais nul » : formulation sans limites à valider.
- Le taux moyen : le texte dit « taux moyen équivalent à n évolutions » — ici
  n évolutions QUELCONQUES sont résumées via le coefficient global ; vérifier
  que le PDF n'attend que le cas d'évolutions données une à une.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
