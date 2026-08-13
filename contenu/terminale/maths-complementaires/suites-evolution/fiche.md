---
id: tale-compl-math-suites-evolution
titre: "Suites et modèles d'évolution"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 15
prerequis:
  - Suites arithmétiques et géométriques (Première)
  - Taux d'évolution et coefficient multiplicateur (Première)
  - Sens de variation d'une suite (Première)
statut: brouillon
relu_par: null
---

# Suites et modèles d'évolution

> Beaucoup de phénomènes évoluent **par étapes** : une population année après année, un
> capital mois après mois, un médicament dose après dose. À chaque étape, on passe d'un
> état au suivant par la **même** règle. C'est exactement ce que décrit une suite définie
> **par récurrence**. Ce chapitre te donne les outils pour prévoir *où mène* une telle
> évolution : va-t-elle exploser, s'éteindre, ou se stabiliser ?

On réutilise sans cesse les suites géométriques de Première. Assure-toi de savoir les
reconnaître et manier leur terme général avant de continuer.

---

## 1. Suites définies par récurrence

**Définition.** Une suite $(u_n)$ est définie **par récurrence** quand on se donne :
- son **premier terme** (par exemple $u_0$), et
- une **relation** qui exprime chaque terme à partir du précédent : $u_{n+1} = f(u_n)$.

$$\boxed{u_0 \text{ donné} \qquad \text{et} \qquad u_{n+1} = f(u_n)}$$

Chaque terme se calcule **de proche en proche** : pour avoir $u_5$, il faut d'abord
connaître $u_4$, donc $u_3$, etc. On ne peut pas « sauter » directement à un rang.

> **Exemple.** $u_0 = 3$ et $u_{n+1} = 2u_n - 1$. Alors
> $u_1 = 2\times 3 - 1 = 5$, puis $u_2 = 2\times 5 - 1 = 9$, puis $u_3 = 2\times 9 - 1 = 17$.

> ⚠️ Ne confonds pas $u_{n+1} = f(u_n)$ (récurrence : on part du terme précédent) avec une
> formule **explicite** $u_n = f(n)$ (on calcule directement à partir du rang $n$). Ce sont
> deux façons différentes de définir une suite.

**Sens de variation.** Pour une suite définie par récurrence, on compare $u_{n+1}$ et
$u_n$, souvent en étudiant le signe de la différence $u_{n+1} - u_n$.

> **Exemple.** Si $u_{n+1} - u_n = (u_n)^2 \geq 0$, alors la suite est **croissante**.

---

## 2. Suites géométriques

**Définition.** Une suite $(u_n)$ est **géométrique de raison $q$** si l'on passe d'un
terme au suivant en **multipliant** toujours par le même nombre $q$ :
$$\boxed{u_{n+1} = q \times u_n}$$

**Terme général.** À partir du premier terme $u_0$ :
$$\boxed{u_n = u_0 \times q^{\,n}}$$
(et plus généralement $u_n = u_p \times q^{\,n-p}$ à partir du rang $p$).

> **Exemple.** $u_0 = 5$ et raison $q = 2$ : $u_n = 5 \times 2^n$. Donc
> $u_3 = 5 \times 2^3 = 40$.

**Sens de variation** (pour $u_0 > 0$) : si $q > 1$ la suite est croissante ; si
$0 < q < 1$ elle est décroissante ; si $q = 1$ elle est constante.

> **Exemple.** $q = 0{,}9$ et $u_0 > 0$ : chaque terme vaut $90\%$ du précédent, la suite
> **décroît** vers $0$.

**Somme des termes.** La somme des premières puissances vaut, pour $q \neq 1$ :
$$1 + q + q^2 + \dots + q^n = \frac{1 - q^{\,n+1}}{1 - q}.$$

> **Exemple.** $1 + 0{,}5 + 0{,}5^2 + \dots + 0{,}5^{10} = \dfrac{1 - 0{,}5^{11}}{1 - 0{,}5} \approx 2$.

---

## 3. Limite d'une suite

**Idée.** Déterminer la **limite** d'une suite, c'est décrire son comportement quand $n$
devient très grand. Trois cas possibles : elle se rapproche d'un réel $\ell$ (elle
**converge**), elle file vers $+\infty$ ou $-\infty$, ou elle n'a **pas** de limite.

**Vocabulaire.** Une suite qui a une limite **finie** $\ell$ est dite **convergente**.
Une suite qui tend vers $\pm\infty$ ou qui n'a pas de limite est **divergente**.

**Limites usuelles.**
$$\frac{1}{n} \to 0, \qquad \frac{1}{n^2} \to 0, \qquad \frac{1}{\sqrt{n}} \to 0,
\qquad n \to +\infty, \qquad n^2 \to +\infty.$$

> **Exemple.** $u_n = 4 - \dfrac{5}{n}$. Comme $\dfrac{5}{n} \to 0$, on a $u_n \to 4$ :
> la suite **converge vers $4$**.

**Le cas central : la suite géométrique $(q^n)$.** Tout dépend de la raison $q$ :
$$\boxed{\;
\begin{aligned}
&q > 1 &&\Rightarrow\ q^{\,n} \to +\infty \quad (\text{explosion}) \\
&q = 1 &&\Rightarrow\ q^{\,n} = 1 \\
&-1 < q < 1 &&\Rightarrow\ q^{\,n} \to 0 \quad (\text{amortissement}) \\
&q \leq -1 &&\Rightarrow\ (q^{\,n})\ \text{n'a pas de limite}
\end{aligned}\;}$$

> **Exemples.** $1{,}05^{\,n} \to +\infty$ (hausse de $5\%$ répétée). — $0{,}8^{\,n} \to 0$
> (le cas des modèles qui s'amortissent). — $(-2)^n$ : les termes $1, -2, 4, -8, \dots$
> grandissent **en changeant de signe**, donc **pas de limite**.

> ⚠️ Ne conclus $q^n \to 0$ que si $|q| < 1$. Pour $q \leq -1$, la suite **n'a pas de
> limite** : elle alterne de signe.

---

## 4. Suites arithmético-géométriques

**Définition.** Une suite est **arithmético-géométrique** quand elle vérifie une relation
de la forme
$$\boxed{u_{n+1} = a\,u_n + b}$$
avec $a$ et $b$ deux réels ($a \neq 0$ et $a \neq 1$). Ce n'est ni une suite arithmétique
(à cause du facteur $a$), ni une suite géométrique (à cause du terme constant $b$).

Ces suites modélisent une évolution à **taux constant** ($a$) **avec un apport constant**
($b$) : intérêts + versement fixe, population + migration fixe, etc.

### La méthode du point fixe

On ne connaît pas de formule directe pour $u_n$… mais on peut la **fabriquer** en trois
temps.

**Étape 1 — le point fixe.** On cherche le réel $\ell$ vérifiant $\ell = a\ell + b$
(la valeur qui, si la suite l'atteignait, ne bougerait plus). On résout :
$$\ell = a\ell + b \iff \ell(1 - a) = b \iff \boxed{\ell = \frac{b}{1 - a}}.$$

**Étape 2 — la suite auxiliaire.** On pose $v_n = u_n - \ell$. Alors $(v_n)$ est
**géométrique de raison $a$** :
$$v_{n+1} = u_{n+1} - \ell = (a u_n + b) - (a\ell + b) = a(u_n - \ell) = a\,v_n.$$

**Étape 3 — le terme général.** Comme $(v_n)$ est géométrique, $v_n = v_0 \times a^n$, donc
en revenant à $u_n = v_n + \ell$ :
$$\boxed{u_n = (u_0 - \ell)\,a^{\,n} + \ell}.$$

> **Exemple rédigé.** $u_0 = 10$ et $u_{n+1} = 0{,}5\,u_n + 3$.
> **Point fixe :** $\ell = \dfrac{3}{1 - 0{,}5} = 6$.
> **Auxiliaire :** $v_n = u_n - 6$ est géométrique de raison $0{,}5$, avec $v_0 = 10 - 6 = 4$.
> **Terme général :** $u_n = 4 \times 0{,}5^{\,n} + 6$.

### Limite d'une suite arithmético-géométrique

La limite se lit sur le terme général $u_n = (u_0 - \ell)\,a^n + \ell$ : tout se joue sur
$a^n$.

$$\boxed{\text{Si } |a| < 1 :\ u_n \to \ell \qquad ; \qquad \text{si } a > 1 \text{ (et } u_0 \neq \ell) :\ u_n \to \pm\infty}$$

> **Exemple (suite).** $u_n = 4 \times 0{,}5^{\,n} + 6$. Comme $|0{,}5| < 1$, on a
> $0{,}5^{\,n} \to 0$, donc $u_n \to 6$ : la suite **se stabilise** sur son point fixe.

---

## 5. Modéliser une évolution

**Traduire un énoncé en suite.** Le réflexe : identifier ce qui se répète à chaque étape.

- **Taux d'évolution $t$** (en %) $\Rightarrow$ **coefficient multiplicateur** $1 + \dfrac{t}{100}$.
  Une baisse de $20\%$ correspond à $\times 0{,}8$ ; une hausse de $5\%$ à $\times 1{,}05$.
- **Évolution en pourcentage seule** $\Rightarrow$ suite **géométrique** $u_{n+1} = q\,u_n$.
- **Évolution en pourcentage + apport (ou retrait) fixe** $\Rightarrow$ suite
  **arithmético-géométrique** $u_{n+1} = a\,u_n + b$.

> **Exemple — un lac.** Un lac contient $200$ poissons. Chaque année, la population
> **diminue de $20\%$** (prédation) puis on **réintroduit $50$ poissons**. On note $u_n$
> le nombre de poissons l'année $n$, avec $u_0 = 200$.
> Traduction : $u_{n+1} = 0{,}8\,u_n + 50$ (arithmético-géométrique).
> **Point fixe :** $\ell = \dfrac{50}{1 - 0{,}8} = 250$. Comme $|0{,}8| < 1$, la population
> se stabilise **à long terme autour de $250$ poissons**.

**Répondre à une question de seuil.** « À partir de quelle année dépasse-t-on… ? » se
résout en calculant les termes de proche en proche (tableur, calculatrice, ou algorithme)
jusqu'à franchir le seuil — la limite dit *vers quoi* on tend, pas *quand* on l'atteint.

> **Exemple.** Pour le lac, on calcule $u_1 = 210$, $u_2 = 218$, $u_3 = 224{,}4$, … et on
> s'arrête au premier rang qui dépasse le seuil demandé.

---

## 6. Tableau récapitulatif

| Situation | Reconnaître | Outil / résultat |
|---|---|---|
| Suite par récurrence | $u_{n+1} = f(u_n)$, $u_0$ donné | calcul de proche en proche |
| Suite géométrique | $u_{n+1} = q\,u_n$ | $u_n = u_0\,q^n$ |
| Limite de $q^n$, $\|q\| < 1$ | amortissement | $q^n \to 0$ |
| Limite de $q^n$, $q > 1$ | explosion | $q^n \to +\infty$ |
| Limite de $q^n$, $q \leq -1$ | alternance de signe | pas de limite |
| Arithmético-géométrique | $u_{n+1} = a\,u_n + b$ | point fixe $\ell = \frac{b}{1-a}$ |
| Terme général (arith.-géo.) | $v_n = u_n - \ell$ géométrique | $u_n = (u_0 - \ell)a^n + \ell$ |
| Limite (arith.-géo.), $\|a\| < 1$ | stabilisation | $u_n \to \ell$ |
| % d'évolution | taux $t$ | coefficient $1 + \frac{t}{100}$ |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre récurrence et formule explicite.** $u_{n+1} = f(u_n)$ n'est **pas**
   $u_n = f(n)$ : dans le premier cas on part du terme précédent, dans le second du rang.
   On ne calcule pas $u_{10}$ « directement » pour une suite définie par récurrence sans
   terme général.
2. **Se tromper de coefficient multiplicateur.** Une baisse de $20\%$, c'est $\times 0{,}8$,
   **pas** $\times 0{,}2$ ni $-0{,}2$. Retiens $1 + \frac{t}{100}$, avec $t$ négatif pour
   une baisse.
3. **Traiter une arithmético-géométrique comme une géométrique.** Le terme constant $b$
   interdit d'écrire $u_n = u_0\,a^n$. Il faut passer par le **point fixe** et la suite
   auxiliaire $v_n = u_n - \ell$.
4. **Oublier de revenir à $u_n$.** Après avoir trouvé $v_n = v_0\,a^n$, on **n'oublie pas**
   $u_n = v_n + \ell$. La réponse porte sur $u_n$, pas sur la suite auxiliaire.
5. **Conclure $q^n \to 0$ pour $q$ négatif quelconque.** Ce n'est vrai que si $|q| < 1$.
   Pour $q \leq -1$, la suite **n'a pas de limite** (elle alterne de signe).
6. **Confondre limite et seuil.** La limite dit *vers quelle valeur* tend la suite, jamais
   *à quel rang* un seuil est franchi : ça, ça se calcule terme à terme.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-maths-options-2019.txt, section « MATHÉMATIQUES
COMPLÉMENTAIRES » > « Suites et modèles d'évolution » (lignes 65 à 69).
  Contenus : suites récurrentes ; suites géométriques ; suites arithmético-géométriques ;
  limites de suites.
  Capacités : étudier le comportement d'une suite ; modéliser une évolution ; déterminer
  une limite.
Ce fichier programme est issu d'une extraction WebFetch depuis les PDF officiels
(education.gouv.fr, arrêtés du 19-7-2019, BO spécial n°8 du 25 juillet 2019 ; PDF
complémentaires : spe265_annexe_1159134.pdf). L'en-tête du fichier source (lignes 1-11)
précise « À confronter au PDF ; source officielle ». Cette extraction DOIT être confrontée
au PDF officiel avant publication.

⚠️ PÉRIMÈTRE MATHS COMPLÉMENTAIRES (option, terminale générale) : programme allégé,
organisé par thèmes d'étude. J'ai volontairement :
  - NON traité le raisonnement par récurrence comme MÉTHODE de démonstration (il relève de
    la spécialité, pas de l'option complémentaire) ; les suites « récurrentes » sont ici les
    suites définies par récurrence u_{n+1}=f(u_n), au sens du contenu du BO.
  - traité les limites de façon INTUITIVE (pas de définition formelle par intervalles /
    seuils), conforme au niveau de l'option.
  - centré les arithmético-géométriques sur la méthode du point fixe + suite auxiliaire
    v_n = u_n - ℓ, seule attendue à ce niveau.

À CONFRONTER AU PROGRAMME OFFICIEL PAR UN PROFESSEUR :
  - Vérifier le niveau d'exigence exact sur les limites (le BO complémentaires ne détaille
    pas de théorèmes de comparaison / gendarmes ; je ne les ai donc pas introduits — à
    confirmer).
  - Vérifier que la somme des termes d'une suite géométrique (§2) est bien attendue en
    complémentaires (présente au titre des rappels de Première ; laissée en encadré léger).
  - Formule du terme général arith.-géo. u_n = (u_0 − ℓ)a^n + ℓ : cohérente avec ℓ = b/(1−a).
  - Prérequis cités : suites arithmétiques/géométriques et taux d'évolution (Première).

CONTRÔLES CHIFFRÉS (relus) :
  §4 exemple : ℓ = 3/(1−0,5) = 6 ; v_0 = 4 ; u_n = 4×0,5^n + 6 → 6. OK.
  §5 lac : ℓ = 50/(1−0,8) = 250 ; u_1 = 0,8×200+50 = 210 ; u_2 = 0,8×210+50 = 218 ;
    u_3 = 0,8×218+50 = 224,4. OK.
  §1 exemple : u_0=3, u_{n+1}=2u_n−1 → 5, 9, 17. OK.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
