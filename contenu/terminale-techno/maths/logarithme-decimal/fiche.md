---
id: tale-techno-math-logarithme-decimal
titre: "Fonction logarithme décimal"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 12
prerequis:
  - Fonctions exponentielles x ↦ aˣ (Terminale technologique)
  - Suites arithmétiques et géométriques (Terminale technologique)
  - Puissances de 10 (Seconde)
  - Pourcentages et évolutions successives (automatismes)
statut: brouillon
relu_par: null
---

# Fonction logarithme décimal

> Au chapitre sur les fonctions exponentielles, tu sais calculer un capital au
> bout de $x$ années : $C(x) = 5000 \times 1{,}04^x$. Mais la question inverse,
> « **au bout de combien d'années** le capital aura-t-il doublé ? », revient à
> résoudre $1{,}04^x = 2$ : l'inconnue est **dans l'exposant**, et aucun outil
> vu jusqu'ici ne l'en fait sortir. Le **logarithme décimal** est exactement
> cet outil. C'est aussi lui qui se cache derrière le pH en chimie, les
> décibels en acoustique et la magnitude des séismes.

---

## 1. Définition : log(b), la solution de $10^x = b$

### L'équation $10^x = b$

La fonction $x \mapsto 10^x$ est une exponentielle de base $10 > 1$ : elle est
**strictement croissante** et ne prend que des valeurs **strictement
positives**. Conséquence : pour tout nombre $b > 0$, l'équation

$$10^x = b$$

admet **une unique solution**. C'est cette solution qu'on appelle le
logarithme décimal de $b$.

$$\boxed{\text{Pour } b > 0,\ \log(b) \text{ est l'unique solution de } 10^x = b, \text{ c'est-à-dire } 10^{\log b} = b}$$

Autrement dit : $\log(b)$ répond à la question « **10 puissance combien donne
$b$ ?** ». Sur la calculatrice, c'est la touche `log`.

> **Exemple.** $\log(1000) = 3$ car $10^3 = 1000$. $\log(0{,}01) = -2$ car
> $10^{-2} = 0{,}01$. Et $\log(450) \approx 2{,}653$ : cohérent, car $450$ est
> entre $10^2 = 100$ et $10^3 = 1000$, donc son log est entre $2$ et $3$.

### Les valeurs à connaître par cœur

$$\boxed{\log 1 = 0 \qquad \log 10 = 1 \qquad \log(10^n) = n \text{ pour tout entier } n}$$

| $b$ | $0{,}001$ | $0{,}01$ | $0{,}1$ | $1$ | $10$ | $100$ | $1000$ |
|---|---|---|---|---|---|---|---|
| $\log b$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

**Le log compte les puissances de 10** : c'est pour ça qu'il mesure si bien les
grandeurs qui s'étalent sur plusieurs ordres de grandeur (concentrations,
intensités sonores, énergies des séismes).

### Condition d'existence : $b > 0$, obligatoire

⚠️ $\log(b)$ n'existe que pour $b > 0$. En effet $10^x$ est **toujours
strictement positif** : l'équation $10^x = -5$ ou $10^x = 0$ n'a **aucune**
solution. $\log(-5)$ et $\log(0)$ n'ont pas de sens — la calculatrice affiche
d'ailleurs une erreur.

---

## 2. Sens de variation

La fonction $\log$ est définie sur $]0\ ;+\infty[$ et

$$\boxed{\log \text{ est strictement croissante sur } ]0\ ;+\infty[}$$

C'est l'héritage direct de la croissance de $x \mapsto 10^x$ : plus $b$ est
grand, plus il faut un exposant élevé pour l'atteindre.

Deux conséquences à savoir utiliser :

**1. Le signe de $\log b$** se lit par rapport à $1$ (car $\log 1 = 0$) :

| $0 < b < 1$ | $b = 1$ | $b > 1$ |
|---|---|---|
| $\log b < 0$ | $\log b = 0$ | $\log b > 0$ |

**2. Le log conserve l'ordre** : pour $a > 0$ et $b > 0$,

$$a < b \iff \log a < \log b$$

C'est ce qui autorisera à « prendre le log » des deux côtés d'une équation ou
d'une comparaison sans rien casser.

> **Exemple.** Sans calculatrice : $\log(0{,}2) < 0$ car $0{,}2 < 1$, et
> $\log 7 < \log 20$ car $7 < 20$ et le log est croissant. Par contre
> $\log(0{,}2) \neq -5$ : le log de $0{,}2$ n'est pas « moins cinq » mais
> $\approx -0{,}7$ (c'est $\log(0{,}1) = -1 < \log(0{,}2) < 0$).

---

## 3. Propriétés algébriques : le log transforme les produits en sommes

Pour tous $a > 0$, $b > 0$ et tout entier $n$ :

$$\boxed{\log(ab) = \log a + \log b \qquad \qquad \log(a^n) = n \log a}$$

C'est le miroir exact des propriétés de l'exponentielle
($10^{x+y} = 10^x \times 10^y$) : **l'exponentielle transforme les sommes en
produits, le log transforme les produits en sommes.**

> **Exemple (produit).** $\log 200 = \log(2 \times 100) = \log 2 + \log 100 = \log 2 + 2 \approx 0{,}301 + 2 = 2{,}301$.

> **Exemple (puissance).** $\log(3^{10}) = 10 \log 3 \approx 10 \times 0{,}477 = 4{,}77$.
> Donc $3^{10}$ est entre $10^4$ et $10^5$ — en effet $3^{10} = 59\,049$.

### Conséquences directes

$$\log\!\left(\frac{1}{a}\right) = -\log a \qquad \log\!\left(\frac{a}{b}\right) = \log a - \log b \qquad \log\sqrt{a} = \frac{1}{2}\log a$$

La première vient de $\log(a^{-1}) = -\log a$ ; la deuxième de
$\dfrac{a}{b} = a \times \dfrac{1}{b}$ ; la troisième de $\sqrt{a} = a^{1/2}$
(vu au chapitre exponentielles).

> **Exemple (quotient).** $\log 50 = \log\dfrac{100}{2} = \log 100 - \log 2 = 2 - \log 2 \approx 1{,}699$.

> **Exemple (inverse).** $\log\dfrac{1}{8} = -\log 8 = -\log(2^3) = -3\log 2 \approx -0{,}903$.

---

## 4. La méthode phare : résoudre $a^x = b$

C'est LA capacité attendue du chapitre. Pour $a > 0$ (avec $a \neq 1$) et
$b > 0$, l'équation $a^x = b$ se résout en **trois étapes** :

1. **Prendre le log des deux membres** (autorisé : les deux sont strictement
   positifs, et le log conserve l'ordre) : $\log(a^x) = \log b$.
2. **Faire descendre l'exposant** avec $\log(a^n) = n\log a$ :
   $x \log a = \log b$.
3. **Isoler $x$** en divisant par $\log a$ (non nul car $a \neq 1$) :

$$\boxed{a^x = b \iff x = \frac{\log b}{\log a}}$$

### Application phare : au bout de combien d'années le capital double-t-il ?

> **Exemple.** Un capital est placé à $4\,\%$ par an : il est multiplié par
> $1{,}04^x$ au bout de $x$ années. Il a doublé lorsque
> $$1{,}04^x = 2 \iff x = \frac{\log 2}{\log 1{,}04} \approx \frac{0{,}30103}{0{,}01703} \approx 17{,}7.$$
> Le capital double donc **au cours de la 18ᵉ année** : au bout de $17$ ans il
> n'a pas encore doublé ($1{,}04^{17} \approx 1{,}948$), au bout de $18$ ans
> oui ($1{,}04^{18} \approx 2{,}026$). En années entières, on **arrondit au
> supérieur** : réponse, $18$ ans.

> **Exemple (base plus petite que 1).** Une machine perd $15\,\%$ par an :
> valeur multipliée par $0{,}85^x$. Elle vaut la moitié de son prix quand
> $$0{,}85^x = 0{,}5 \iff x = \frac{\log 0{,}5}{\log 0{,}85} \approx \frac{-0{,}301}{-0{,}0706} \approx 4{,}27.$$
> Les deux logs sont **négatifs** (bases et membres $< 1$) : le quotient est
> positif, tout va bien. La valeur passe sous la moitié au cours de la 5ᵉ année.

⚠️ Si $b \leqslant 0$, l'équation $a^x = b$ n'a **pas de solution** : une
exponentielle est toujours strictement positive. Réponds-le explicitement,
c'est un point facile.

---

## 5. Transformer des expressions (capacité attendue)

L'autre capacité du programme : réécrire une expression avec les propriétés
algébriques, dans les deux sens.

**Développer** (faire apparaître des logs simples) :

> **Exemple.** $\log(4 \times 10^5) = \log 4 + \log(10^5) = \log(2^2) + 5 = 2\log 2 + 5 \approx 5{,}602$.

> **Exemple.** Exprimer $\log 12$ avec $\log 2$ et $\log 3$ :
> $\log 12 = \log(4 \times 3) = \log(2^2) + \log 3 = 2\log 2 + \log 3 \approx 1{,}079$.

**Regrouper** (rassembler en un seul log) :

> **Exemple.** $\log 50 + \log 2 = \log(50 \times 2) = \log 100 = 2$. Sans
> calculatrice, et le résultat est exact.

> **Exemple.** $3\log 2 - \log 4 = \log(2^3) - \log 4 = \log\dfrac{8}{4} = \log 2$.

**Le réflexe** : un produit ou une puissance **dans** le log peut sortir en
somme ou en multiple ; une somme de logs peut rentrer en produit. Mais une
somme **dans** le log, elle, ne se simplifie pas : $\log(a+b)$ ne s'écrit pas
avec $\log a$ et $\log b$.

---

## 6. Le log dans les autres disciplines : pH, décibels, magnitude

Le log est partout où une grandeur varie sur plusieurs puissances de 10. Ces
formules te sont **données** dans les énoncés, mais tu dois savoir les
manipuler avec les propriétés du chapitre.

| Contexte | Formule | Ce que dit le log |
|---|---|---|
| Chimie (ST2S, STL) | $\text{pH} = -\log[\mathrm{H_3O^+}]$ | concentration $\times 10$ $\Rightarrow$ pH $-1$ |
| Acoustique (STI2D) | $L = 10\log\dfrac{I}{I_0}$ (en dB) | intensité $\times 10$ $\Rightarrow$ $+10$ dB ; $\times 2$ $\Rightarrow$ $+3$ dB |
| Séismes | $M = \log\dfrac{A}{A_0}$ (magnitude) | $+1$ en magnitude $=$ amplitude $\times 10$ |
| Finance (STMG) | $a^x = 2$ | doublement au bout de $x = \dfrac{\log 2}{\log a}$ |

> **Exemple (pH).** Une solution a une concentration
> $[\mathrm{H_3O^+}] = 2 \times 10^{-4}$ mol/L. Son pH :
> $$\text{pH} = -\log(2 \times 10^{-4}) = -(\log 2 - 4) = 4 - \log 2 \approx 3{,}7.$$

> **Exemple (décibels).** Si l'intensité sonore double,
> $L' = 10\log\dfrac{2I}{I_0} = 10\log 2 + 10\log\dfrac{I}{I_0} \approx L + 3$ :
> **doubler le son n'ajoute que $3$ dB**. C'est la propriété
> $\log(ab) = \log a + \log b$ en action.

---

## 7. Tableau récapitulatif

| À savoir | Formule / résultat |
|---|---|
| Définition | $\log b$ = unique solution de $10^x = b$, pour $b > 0$ |
| Traduction | $10^{\log b} = b$ ; $\log(10^n) = n$ |
| Valeurs clés | $\log 1 = 0$ ; $\log 10 = 1$ ; $\log 100 = 2$ ; $\log 0{,}1 = -1$ |
| Existence | $\log b$ n'existe que pour $b > 0$ |
| Variations | strictement croissante sur $]0\ ;+\infty[$ |
| Signe | $\log b < 0$ si $0 < b < 1$ ; $\log b > 0$ si $b > 1$ |
| Produit | $\log(ab) = \log a + \log b$ |
| Puissance | $\log(a^n) = n\log a$ |
| Conséquences | $\log\frac{1}{a} = -\log a$ ; $\log\frac{a}{b} = \log a - \log b$ ; $\log\sqrt{a} = \frac{1}{2}\log a$ |
| Équation $a^x = b$ | $x = \dfrac{\log b}{\log a}$ (pour $a, b > 0$, $a \neq 1$) |
| Doublement | $a^x = 2 \iff x = \dfrac{\log 2}{\log a}$, puis arrondir à l'année **supérieure** |

---

## 8. Les erreurs qui coûtent des points

1. **Écrire $\log(a+b) = \log a + \log b$.** Le log transforme les
   **produits** en sommes, pas les sommes : $\log(ab) = \log a + \log b$.
   Vérifie : $\log(10 + 10) = \log 20 \approx 1{,}3$ alors que
   $\log 10 + \log 10 = 2$.
2. **Confondre $\dfrac{\log b}{\log a}$ et $\log\dfrac{b}{a}$.** La solution de
   $a^x = b$ est le **quotient des logs**, pas le log du quotient :
   $\dfrac{\log 2}{\log 1{,}04} \approx 17{,}7$ mais
   $\log\dfrac{2}{1{,}04} \approx 0{,}28$. Rien à voir.
3. **Prendre le log d'un nombre négatif ou nul.** $\log(-5)$ et $\log 0$
   n'existent pas ; l'équation $10^x = -5$ n'a pas de solution. Avant tout
   calcul, vérifie que ce qui est dans le log est $> 0$.
4. **Confondre $\log 1 = 0$ et $\log 10 = 1$.** Le log répond à « 10 puissance
   combien ? » : $10^0 = 1$ et $10^1 = 10$. Croire que $\log 1 = 1$ fait
   dérailler toutes les transformations d'expressions.
5. **Arrondir le doublement à l'année inférieure.** $x \approx 17{,}7$ ans :
   au bout de $17$ ans le capital n'a **pas encore** doublé. La réponse à « au
   bout de combien d'années entières ? » est $18$, l'arrondi **supérieur**.
6. **Croire que $\log b$ est négatif dès que « b est petit ».** Le seuil est
   $1$, pas $0$ : $\log(0{,}5) < 0$ mais $\log 5 > 0$. Et pour une base
   $0 < a < 1$, $\log a < 0$ : dans $\dfrac{\log b}{\log a}$, surveille les
   signes des deux logs.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTION LOGARITHME DÉCIMAL » (lignes 65-72).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Contenus : définition de log(b), pour b > 0, comme solution de 10^x = b (§1) ;
  sens de variation (§2) ; propriétés algébriques log(ab) = log a + log b et
  log(a^n) = n·log a (§3).
- Capacités : résoudre les équations du type a^x = b à l'aide du logarithme
  décimal (§4, avec l'application phare du doublement de capital) ; transformer
  des expressions avec les propriétés algébriques (§5).
- Les contextes technologiques (§6 : pH, décibels, magnitude, doublement de
  capital) illustrent les capacités dans l'esprit de la voie techno ; les
  formules pH/dB/magnitude ne sont PAS exigibles en maths, elles sont
  présentées comme données par les énoncés.

Prérequis : chapitre « Fonctions exponentielles x ↦ aˣ » de Terminale
technologique (contenu/terminale-techno/maths/fonctions-exponentielles/) —
le log est présenté comme l'outil réciproque (l'inconnue en exposant), les
propriétés algébriques comme le miroir de a^(x+y) = a^x·a^y, et √a = a^(1/2)
y a été établi. Également : suites arithmétiques et géométriques (modélisation
par q^n), puissances de 10 (Seconde), automatismes pourcentages.

Choix de rédaction :
- Le programme ne cite ni la dérivée, ni les limites, ni la courbe de log :
  rien de tout cela dans la fiche (comportement décrit qualitativement).
- log(a^n) énoncé pour n entier comme dans le BO ; les conséquences
  log(1/a), log(a/b) et log(√a) = ½log a sont présentées comme conséquences
  (√a = a^(1/2) vient du chapitre exponentielles). Vérifier au PDF si
  l'extension à un exposant réel est attendue.
- Résolution de a^x = b : cas a ≠ 1 précisé (sinon division par log 1 = 0) ;
  cas b ≤ 0 traité explicitement (pas de solution). Les INÉQUATIONS a^x < b
  ne sont pas traitées : le BO ne cite que les équations — à confirmer.
- Doublement de capital : convention « arrondir à l'année supérieure » pour la
  réponse en années entières, justifiée par encadrement (1,04^17 < 2 < 1,04^18).

Vérifications numériques faites : log 2 ≈ 0,30103 ; log 3 ≈ 0,47712 ;
log 450 ≈ 2,653 (100 < 450 < 1000) ; log 200 = 2 + log 2 ≈ 2,301 ;
10·log 3 ≈ 4,771 et 3^10 = 59 049 ∈ [10^4 ; 10^5] ; log 50 = 2 − log 2 ≈ 1,699 ;
−3 log 2 ≈ −0,903 ; log 2/log 1,04 = 0,30103/0,017033 ≈ 17,67 avec
1,04^17 ≈ 1,948 et 1,04^18 ≈ 2,026 ; log 0,5/log 0,85 = (−0,30103)/(−0,07058)
≈ 4,27 ; 2 log 2 + 5 ≈ 5,602 ; 2 log 2 + log 3 ≈ 1,079 ; 3 log 2 − log 4 =
log 2 ; pH = 4 − log 2 ≈ 3,70 ; 10 log 2 ≈ 3,0 dB ; log(2/1,04) ≈ 0,284.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- log(a^n) : n entier seulement, ou extension aux exposants réels (nécessaire
  pour résoudre a^x = b — la fiche fait descendre un exposant réel x) ?
  Le passage log(a^x) = x log a est admis ici sans commentaire.
- La place des contextes pH/dB/magnitude : le BO maths ne les impose pas,
  ils relèvent des programmes de spécialité ; vérifier qu'ils figurent bien
  dans le préambule ou les exemples du PDF.
- La convention d'arrondi (année supérieure) pour le doublement.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
