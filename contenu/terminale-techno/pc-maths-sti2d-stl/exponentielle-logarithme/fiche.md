---
id: tale-sti2d-math-exponentielle-logarithme
titre: "Fonctions exponentielle et logarithme népérien"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 15
prerequis:
  - Fonctions exponentielles x ↦ aˣ (Première STI2D/STL)
  - Dérivation (Première STI2D/STL)
  - Suites géométriques (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Fonctions exponentielle et logarithme népérien

> Charge d'un condensateur, décroissance radioactive, refroidissement : tous
> ces phénomènes suivent la même loi, $t \mapsto A\,e^{kt}$. Et quand il faut
> retrouver le **temps** — condensateur chargé à 95 % ? demi-vie ? — c'est la
> réciproque de l'exponentielle, le **logarithme népérien**, qui fait sortir
> l'inconnue de l'exposant.

---

## 1. Le nombre e et la fonction exponentielle

Parmi les fonctions exponentielles $x \mapsto a^x$ vues en Première, une
seule est **égale à sa propre dérivée**. Sa base est un irrationnel, noté $e$ :

$$\boxed{e \approx 2{,}718} \qquad \text{(retiens : } e \text{ est entre } 2 \text{ et } 3\text{)}$$

La fonction **exponentielle de base $e$** est $\exp : x \mapsto e^x$, définie
sur $\mathbb{R}$. Elle hérite de tout ce que tu sais des $a^x$ avec $a > 1$ :

- $e^x > 0$ pour **tout** réel $x$ — une exponentielle ne s'annule jamais ;
- $e^0 = 1$ et $e^1 = e$ ;
- elle est **strictement croissante** sur $\mathbb{R}$.

> **Exemple.** $e^2 \approx 7{,}39$ ; $e^{-1} = \dfrac{1}{e} \approx 0{,}368$.
> Même $e^{-100}$ est strictement positif : minuscule, mais pas nul.

---

## 2. Propriétés algébriques

Ce sont exactement les règles des puissances, avec la base $e$. Pour tous
réels $a$, $b$ et tout entier $n$ :

$$\boxed{e^{a+b} = e^a \times e^b \qquad e^{-a} = \frac{1}{e^a} \qquad \frac{e^a}{e^b} = e^{a-b} \qquad \left(e^a\right)^n = e^{na}}$$

**L'exponentielle transforme les sommes en produits.** C'est la propriété à
mobiliser pour simplifier une expression avant tout calcul.

> **Exemple (simplifier).**
> $\dfrac{e^{3x} \times e^{-x}}{e^{x+1}} = \dfrac{e^{2x}}{e^{x+1}} = e^{2x - (x+1)} = e^{x-1}$.
> Et attention : $\left(e^x\right)^2 = e^{2x}$, **pas** $e^{x^2}$ — on
> multiplie les exposants, on ne les élève pas au carré.

---

## 3. Dérivées : $(e^x)' = e^x$ et $(e^{kx})' = k\,e^{kx}$

### La propriété qui définit l'exponentielle

$$\boxed{\left(e^x\right)' = e^x}$$

Sa **vitesse de variation est proportionnelle à sa valeur** : c'est pour ça
qu'elle modélise les phénomènes où « plus il y en a, plus ça varie vite ».

### Dérivée de $x \mapsto e^{kx}$, pour tout réel $k$

$$\boxed{\left(e^{kx}\right)' = k\,e^{kx}}$$

Le coefficient $k$ **descend en facteur**. Avec les règles de dérivation de
Première, cette formule suffit pour tout le chapitre.

> **Exemple.** $f(x) = 5e^{-2x} + x^2$ donne
> $f'(x) = 5 \times (-2)e^{-2x} + 2x = -10e^{-2x} + 2x$.

### Le signe de $k$ pilote le sens de variation

$e^{kx} > 0$ toujours, donc $\left(e^{kx}\right)' = k\,e^{kx}$ a le signe de $k$ :

| $k > 0$ | $k < 0$ |
|---|---|
| $x \mapsto e^{kx}$ **croissante** (croissance) | $x \mapsto e^{kx}$ **décroissante** (décroissance, amortissement) |

### Dans tes matières technologiques

Ces modèles sont établis en physique-chimie ; en maths tu dois savoir les
**dériver** et les **résoudre** :

| Phénomène | Modèle | $k$ |
|---|---|---|
| Décharge d'un condensateur | $u(t) = E\,e^{-t/\tau}$ | $-\dfrac{1}{\tau} < 0$ |
| Charge d'un condensateur | $u(t) = E\left(1 - e^{-t/\tau}\right)$ | $-\dfrac{1}{\tau} < 0$ |
| Décroissance radioactive | $N(t) = N_0\,e^{-\lambda t}$ | $-\lambda < 0$ |

> **Exemple (charge).** Pour $u(t) = E\left(1 - e^{-t/\tau}\right)$ : à
> $t = \tau$, $u = E\left(1 - e^{-1}\right) \approx 0{,}63E$ ; à $t = 5\tau$,
> $u \approx 0{,}993E$. Le « $5\tau$ » du cours de physique vient de
> $e^{-5} \approx 0{,}007$.

---

## 4. Courbe, limites et croissance comparée

### Les limites de $e^x$

$$\boxed{\lim_{x \to -\infty} e^x = 0 \qquad \qquad \lim_{x \to +\infty} e^x = +\infty}$$

La courbe de $\exp$ est **au-dessus de l'axe des abscisses**, colle à cet axe
à gauche (asymptote $y = 0$ en $-\infty$), passe par $(0\,;1)$ et $(1\,;e)$,
et explose à droite.

### Croissance comparée : l'exponentielle gagne toujours

$e^x$ croît **plus vite que toute puissance de $x$** : pour tout entier
$n \geqslant 1$,

$$\boxed{\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \qquad \qquad \lim_{x \to -\infty} x^n\,e^{x} = 0}$$

C'est l'outil qui lève les formes indéterminées mêlant exponentielle et
polynôme : **l'exponentielle impose sa limite**.

> **Exemple.** $\lim\limits_{x \to +\infty} \dfrac{e^x}{x^2} = +\infty$ : forme
> indéterminée $\frac{\infty}{\infty}$, tranchée par la croissance comparée.
> Et $\lim\limits_{x \to +\infty} x\,e^{-x} = \lim\limits_{x \to +\infty} \dfrac{x}{e^x} = 0$ :
> un signal en $t\,e^{-t}$ finit toujours par s'éteindre.

---

## 5. Le logarithme népérien, réciproque de l'exponentielle

### Définition

$x \mapsto e^x$ est strictement croissante et prend toutes les valeurs de
$]0\,;+\infty[$ : pour tout $a > 0$, l'équation $e^x = a$ admet **une unique
solution**, appelée **logarithme népérien** de $a$.

$$\boxed{\text{Pour } a > 0,\ \ln(a) \text{ est l'unique solution de } e^x = a}$$

Autrement dit, $\ln$ et $\exp$ sont **réciproques** l'une de l'autre :

$$\boxed{e^{\ln a} = a \ \ (a > 0) \qquad \qquad \ln\left(e^x\right) = x \ \ (x \in \mathbb{R})}$$

⚠️ $\ln(a)$ **n'existe que pour $a > 0$** : $e^x$ étant strictement positif,
$e^x = -2$ ou $e^x = 0$ n'ont aucune solution — $\ln(-2)$ et $\ln 0$ n'ont pas de sens.

### Valeurs et variations

$$\boxed{\ln 1 = 0 \qquad \ln e = 1} \qquad (\text{car } e^0 = 1 \text{ et } e^1 = e)$$

$\ln$ est définie et **strictement croissante** sur $]0\,;+\infty[$, avec

$$\lim_{x \to 0^+} \ln x = -\infty \qquad \qquad \lim_{x \to +\infty} \ln x = +\infty$$

Sa courbe est le **symétrique de celle de $\exp$ par rapport à la droite
$y = x$** : asymptote verticale $x = 0$, passage par $(1\,;0)$ et $(e\,;1)$.
**Signe** : $\ln x < 0$ si $0 < x < 1$, $\ln x = 0$ si $x = 1$,
$\ln x > 0$ si $x > 1$.

> **Exemple.** $\ln 2 \approx 0{,}693$, $\ln 10 \approx 2{,}303$,
> $\ln(0{,}5) = -\ln 2 \approx -0{,}693$.

---

## 6. Propriétés algébriques de ln et lien avec le log décimal

Miroir exact des propriétés de l'exponentielle : **le logarithme transforme
les produits en sommes**. Pour tous $a > 0$, $b > 0$ et tout entier $n$ :

$$\boxed{\ln(ab) = \ln a + \ln b \qquad \ln\frac{a}{b} = \ln a - \ln b \qquad \ln\left(a^n\right) = n\ln a}$$

Conséquences immédiates : $\ln\dfrac{1}{a} = -\ln a$ et
$\ln\sqrt{a} = \dfrac{1}{2}\ln a$.

> **Exemple.** Développer : $\ln 8 = \ln\left(2^3\right) = 3\ln 2$.
> Regrouper : $\ln 50 + \ln 2 = \ln 100$, et
> $2\ln 6 - \ln 4 = \ln\dfrac{36}{4} = \ln 9 = 2\ln 3$.

### Lien avec le logarithme décimal

Le **log décimal** (touche `log`, celui du pH et des décibels) est relié à $\ln$ par :

$$\boxed{\log x = \frac{\ln x}{\ln 10}} \qquad \text{avec } \ln 10 \approx 2{,}303$$

Mêmes propriétés algébriques, seule la base change : $\log$ répond à « 10
puissance combien ? », $\ln$ à « $e$ puissance combien ? ». Dès qu'un modèle
contient $e^{kt}$ (condensateur, radioactivité), c'est $\ln$ qui s'impose.

> **Exemple.** $\log 100 = 2$ et $\dfrac{\ln 100}{\ln 10} = \dfrac{2\ln 10}{\ln 10} = 2$ ✓.

---

## 7. La méthode phare : résoudre $e^{ax} = b$, $\ln x = b$, $\ln x > b$

Trois résolutions au programme, un seul levier : $\exp$ et $\ln$ sont
réciproques **et strictement croissantes**, on peut donc les appliquer aux
deux membres sans changer le sens.

### Équation $e^{ax} = b$ (avec $a \neq 0$)

- Si $b \leqslant 0$ : **aucune solution** ($e^{ax} > 0$ toujours). Dis-le, c'est un point facile.
- Si $b > 0$ : on prend le $\ln$ des deux membres, $\ln\left(e^{ax}\right) = ax$, d'où

$$\boxed{e^{ax} = b \iff x = \frac{\ln b}{a}} \qquad (b > 0)$$

> **Exemple.** $e^{2x} = 5 \iff 2x = \ln 5 \iff x = \dfrac{\ln 5}{2} \approx 0{,}805$.

> **Exemple (décharge, l'inconnue est le temps).** $u(t) = 12\,e^{-t/0{,}5}$
> vaut $6$ V quand $e^{-t/0{,}5} = 0{,}5$, soit $-\dfrac{t}{0{,}5} = -\ln 2$,
> d'où $t = 0{,}5\ln 2 \approx 0{,}35$ s. Plus généralement, la **demi-vie**
> d'une décroissance $e^{-\lambda t}$ est $t_{1/2} = \dfrac{\ln 2}{\lambda}$
> (vue en physique pour la radioactivité).

### Équation $\ln x = b$

On applique l'exponentielle aux deux membres : $e^{\ln x} = x$, d'où

$$\boxed{\ln x = b \iff x = e^b} \qquad \text{(une solution pour TOUT réel } b\text{)}$$

> **Exemple.** $\ln x = -1 \iff x = e^{-1} \approx 0{,}368$ : un $b$ négatif
> ne pose aucun problème, la solution est juste dans $]0\,;1[$.

### Inéquation $\ln x > b$

$\ln$ est strictement croissante, donc l'ordre est conservé :

$$\boxed{\ln x > b \iff x > e^b} \qquad \text{(sans oublier } x > 0\text{, automatique ici)}$$

> **Exemple.** $\ln x > 3 \iff x > e^3 \approx 20{,}1$. De même
> $\ln x \leqslant 0 \iff 0 < x \leqslant 1$ — là, la borne $x > 0$ doit
> apparaître.

---

## 8. Étudier une fonction mêlant exponentielle et polynôme

Le plan est toujours le même : **dériver**, **factoriser** la dérivée,
utiliser $e^{kx} > 0$ pour lire son **signe**, conclure avec les **limites**
(croissance comparée si besoin).

> **Exemple complet.** $f(x) = x\,e^{-x}$ sur $[0\,;+\infty[$.
> 1. Produit : $f'(x) = 1 \times e^{-x} + x \times (-e^{-x}) = (1 - x)\,e^{-x}$.
> 2. $e^{-x} > 0$, donc $f'(x)$ a le signe de $1 - x$ : $f$ croît sur
>    $[0\,;1]$, décroît sur $[1\,;+\infty[$.
> 3. Maximum en $x = 1$ : $f(1) = e^{-1} \approx 0{,}37$.
> 4. En $+\infty$ : croissance comparée, $x\,e^{-x} \to 0$. Le signal monte,
>    culmine, puis s'éteint.

Pour une fonction mêlant $\ln$ (par exemple $g(x) = x - \ln x$) : même plan,
sur $]0\,;+\infty[$, avec $(\ln x)' = \dfrac{1}{x}$.

---

## 9. Tableau récapitulatif

| À savoir | Formule / résultat |
|---|---|
| Le nombre $e$ | $e \approx 2{,}718$ ; $e^0 = 1$, $e^1 = e$ |
| Signe | $e^x > 0$ pour tout $x$ ; $\ln x$ défini seulement pour $x > 0$ |
| Algèbre (exp) | $e^{a+b} = e^a e^b$ ; $e^{-a} = \frac{1}{e^a}$ ; $\frac{e^a}{e^b} = e^{a-b}$ ; $(e^a)^n = e^{na}$ |
| Dérivées | $(e^x)' = e^x$ ; $(e^{kx})' = k\,e^{kx}$ |
| Limites (exp) | $e^x \to 0$ en $-\infty$ ; $e^x \to +\infty$ en $+\infty$ |
| Croissance comparée | $\dfrac{e^x}{x^n} \to +\infty$ en $+\infty$ ; $x^n e^x \to 0$ en $-\infty$ |
| Réciprocité | $e^{\ln a} = a$ ($a>0$) ; $\ln(e^x) = x$ |
| ln : valeurs, limites | $\ln 1 = 0$ ; $\ln e = 1$ ; croissante ; $\ln x \to -\infty$ en $0^+$, $\to +\infty$ en $+\infty$ |
| Algèbre (ln) | $\ln(ab) = \ln a + \ln b$ ; $\ln\frac{a}{b} = \ln a - \ln b$ ; $\ln(a^n) = n\ln a$ |
| Lien avec log | $\log x = \dfrac{\ln x}{\ln 10}$ |
| Équations | $e^{ax} = b \iff x = \frac{\ln b}{a}$ ($b>0$) ; $\ln x = b \iff x = e^b$ |
| Inéquation | $\ln x > b \iff x > e^b$ |
| Demi-vie | $e^{-\lambda t} = \frac{1}{2} \iff t_{1/2} = \dfrac{\ln 2}{\lambda}$ |

---

## 10. Les erreurs qui coûtent des points

1. **Écrire $\ln(a+b) = \ln a + \ln b$.** Le $\ln$ transforme les
   **produits** en sommes, pas les sommes. Vérifie :
   $\ln(e+e) = \ln 2 + 1 \approx 1{,}69$, alors que $\ln e + \ln e = 2$.
2. **Oublier le $k$ en dérivant $e^{kx}$.** $\left(e^{-2x}\right)' = -2e^{-2x}$,
   pas $e^{-2x}$ ni $-2x\,e^{-2x-1}$ : la règle $(x^n)' = nx^{n-1}$ concerne
   les puissances de $x$, pas les exponentielles.
3. **Résoudre $e^{ax} = b$ avec $b \leqslant 0$.** $e^{2x} = -3$ n'a
   **aucune** solution (exponentielle strictement positive). Le dire rapporte
   le point ; appliquer $\ln$ à $-3$ le fait perdre.
4. **Confondre $\dfrac{\ln b}{a}$ et $\ln\dfrac{b}{a}$.** La solution de
   $e^{2x} = 6$ est $\dfrac{\ln 6}{2} \approx 0{,}90$, pas $\ln 3 \approx 1{,}10$ :
   on divise le logarithme par $a$, pas l'intérieur du logarithme.
5. **Croire que $\ln x = b$ n'a pas de solution quand $b < 0$.** C'est
   l'**intérieur** du $\ln$ qui doit être positif, pas le résultat :
   $\ln x = -1$ a bien la solution $x = e^{-1} > 0$.
6. **Conclure trop vite face à « $\frac{\infty}{\infty}$ ».** Pour
   $\dfrac{e^x}{x^2}$ en $+\infty$, cite la **croissance comparée** avant de
   conclure $+\infty$ : sans cette justification, pas de point.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie et mathématiques, enseignement
de spécialité, classe terminale, séries STI2D et STL — arrêté MENE1921261A,
BO spécial n°8 du 25 juillet 2019 (education.gouv.fr, annexe PDF
spe261_annexe_1158935.pdf, extrait via WebFetch). Fichier local :
docs/programme-terminale-sti2d-stl-pc-maths.txt, sections
« Fonction exponentielle de base e » (lignes 59-66) et
« Fonction logarithme népérien » (lignes 68-77).
À confronter au PDF officiel avant publication.

Couverture, calée sur le texte officiel :
- Exponentielle : nombre e, fonction x ↦ e^x et sa dérivée (§1, §3), dérivée
  de x ↦ e^(kx) (§3), courbe, limites en ±∞ et croissance comparée (§4) ;
  capacités : transformer des expressions (§2), étudier sommes/produits/
  quotients mêlant exponentielles et polynômes et leurs limites (§4, §8).
- Logarithme népérien : ln(a), a > 0, unique solution de e^x = a (§5),
  propriétés algébriques et lien avec le logarithme décimal (§6), courbe et
  limites en 0 et +∞ (§5) ; capacités : transformer des expressions (§6),
  résoudre e^(ax) = b, ln x = b, ln x > b (§7), étudier des fonctions mêlant
  ln (§8, évoqué avec g(x) = x − ln x).
- Applications technologiques (charge/décharge d'un condensateur,
  décroissance radioactive, demi-vie) : modèles fournis, renvoi explicite au
  cours de physique-chimie (le programme PCM est co-disciplinaire ; la
  radioactivité et le condensateur figurent dans la partie PC du même BO).

Choix de rédaction à faire valider par le relecteur :
- Le nombre e est introduit comme base de l'unique exponentielle égale à sa
  dérivée (cohérent avec « nombre e ; fonction x ↦ e^x ; dérivée » du BO) ;
  pas de construction par la méthode d'Euler ni par les suites.
- ln(a^n) énoncé pour n entier comme dans le BO ; le passage ln(e^(ax)) = ax
  (exposant réel) est utilisé sans commentaire pour résoudre e^(ax) = b.
- La dérivée de ln (1/x) est mentionnée en une ligne au §8 pour la capacité
  « étudier des fonctions mêlant ln » — vérifier si le BO terminale STI2D/STL
  l'exige explicitement ou si elle relève du chapitre composition.
- Croissance comparée énoncée en +∞ pour e^x/x^n et en −∞ pour x^n·e^x ;
  pas de croissance comparée pour ln (absente du texte du programme).
- Inéquation traitée : ln x > b (celle du BO), avec un exemple ln x ≤ 0 ;
  les inéquations e^(ax) < b ne sont pas développées — à confirmer.

Vérifications numériques faites : e ≈ 2,71828 ; e² ≈ 7,389 ; e⁻¹ ≈ 0,3679 ;
e⁻³ ≈ 0,0498 ; e⁻⁵ ≈ 0,0067 (d'où 1 − e⁻¹ ≈ 0,632 et 1 − e⁻⁵ ≈ 0,993) ;
ln 2 ≈ 0,6931 ; ln 10 ≈ 2,3026 ; ln 5/2 ≈ 0,805 ; 0,5·ln 2 ≈ 0,347 s ;
e³ ≈ 20,09 ; ln 8 = 3 ln 2 ≈ 2,079 ; 2 ln 6 − ln 4 = ln 9 ; ln(2e) = ln 2 + 1
≈ 1,693 ; ln 6/2 ≈ 0,896 et ln 3 ≈ 1,099 ; max de x·e⁻ˣ en x = 1, valeur
1/e ≈ 0,368.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
