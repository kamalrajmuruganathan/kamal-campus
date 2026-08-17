---
id: tale-sti2d-math-equations-differentielles
titre: "Équations différentielles"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 13
prerequis:
  - Fonction exponentielle de base e et logarithme népérien (chapitre exponentielle-logarithme, même parcours)
  - Dérivation, dérivée de $e^{kx}$ (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Équations différentielles

> Charge d'un condensateur, refroidissement d'une pièce sortie du four, décroissance
> radioactive : dans tous ces systèmes, la **vitesse de variation** d'une grandeur
> dépend de la grandeur elle-même. L'outil mathématique qui traduit ça, c'est
> l'**équation différentielle** : une équation dont l'inconnue n'est pas un nombre,
> mais une **fonction**, reliée à sa propre dérivée. C'est LE chapitre qui fait le
> pont entre tes cours de maths et tes cours de physique.

---

## 1. Notion d'équation différentielle et de solution

### Définitions

Une **équation différentielle** est une équation :
- dont l'**inconnue est une fonction** $y$ (souvent une fonction du temps $t$) ;
- qui relie $y$ à sa **dérivée** $y'$.

Une **solution** sur un intervalle $I$ est une fonction $f$, dérivable sur $I$, qui
**vérifie l'égalité pour tout $x$ de $I$** quand on remplace $y$ par $f(x)$ et $y'$
par $f'(x)$.

**Résoudre** une équation différentielle, c'est trouver **toutes** ses solutions —
pas une seule.

> **Exemple.** $y' = 2y + 6$ est une équation différentielle : elle demande une
> fonction dont la dérivée vaut « deux fois la fonction, plus 6 ». Un nombre ne peut
> pas répondre à cette question, seule une fonction le peut.

### Écritures à reconnaître

En physique, la même équation s'écrit avec d'autres lettres et d'autres notations :

$$y' = ay + b \quad\Longleftrightarrow\quad \frac{\mathrm{d}u}{\mathrm{d}t} = au + b$$

$\dfrac{\mathrm{d}u}{\mathrm{d}t}$ est simplement la dérivée $u'(t)$. Et une équation
donnée sous la forme $RC\,u' + u = E$ n'est **pas encore** sous la forme du cours :
il faut d'abord isoler $u'$ (voir §6).

---

## 2. Vérifier qu'une fonction est solution

C'est la capacité la plus rentable du chapitre : elle ne demande **que de savoir
dériver**.

### Méthode

1. Calcule $f'(x)$.
2. Calcule séparément le membre de droite avec $y = f(x)$.
3. Compare : si les deux expressions sont **égales pour tout $x$**, $f$ est solution.

> **Exemple 1.** $f(x) = 5e^{3x}$ est-elle solution de $y' = 3y$ ?
> D'une part $f'(x) = 5 \times 3e^{3x} = 15e^{3x}$.
> D'autre part $3f(x) = 15e^{3x}$.
> Les deux membres sont égaux pour tout $x$ : **oui**, $f$ est solution.

> **Exemple 2.** $g(x) = e^{2x} + 4$ est-elle solution de $y' = 2y$ ?
> $g'(x) = 2e^{2x}$, mais $2g(x) = 2e^{2x} + 8$. Les deux expressions diffèrent
> (de $8$) : **non**, $g$ n'est pas solution de $y' = 2y$.
> En revanche $g'(x) = 2e^{2x} = 2g(x) - 8$ : $g$ est solution de $y' = 2y - 8$.

⚠️ L'égalité doit être vraie **pour tout $x$**, pas seulement pour une valeur.
Vérifier en $x = 0$ ne suffit jamais.

---

## 3. Résoudre $y' = ay$

C'est l'équation de base : « la vitesse de variation est **proportionnelle** à la
grandeur ». Sa résolution repose sur la dérivée $\left(e^{ax}\right)' = a\,e^{ax}$
vue au chapitre exponentielle.

$$\boxed{y' = ay \iff y(x) = C\,e^{ax}, \quad C \in \mathbb{R}}$$

Il y a une **infinité de solutions** : une par valeur de la constante $C$. Et
$C = y(0)$, car $y(0) = C\,e^{0} = C$ : la constante est la valeur de départ.

> **Exemple.** $y' = -4y$ a pour solutions $y(x) = C\,e^{-4x}$, $C \in \mathbb{R}$.
> Contrôle : $y'(x) = -4C\,e^{-4x} = -4\,y(x)$ ✓.

### Le signe de $a$ dit tout du comportement

| Signe de $a$ | Comportement de $y(x) = Ce^{ax}$ | Situation type |
|---|---|---|
| $a > 0$ | croissance exponentielle (explosion) | croissance d'une population |
| $a < 0$ | retour vers $0$ (amortissement) | décharge d'un condensateur, radioactivité |
| $a = 0$ | $y$ constante ($y' = 0$) | régime établi |

> **Exemple (physique).** La décroissance radioactive suit $N' = -\lambda N$ avec
> $\lambda > 0$ : le nombre de noyaux $N(t) = N_0\,e^{-\lambda t}$ décroît vers $0$.

---

## 4. Résoudre $y' = ay + b$ (avec $a \neq 0$)

C'est l'équation vedette du bac STI2D/STL. La méthode est **toujours la même**, en
deux étapes.

### Étape 1 — chercher la solution particulière constante

Si $y$ est constante, alors $y' = 0$. L'équation devient $0 = ay + b$, d'où :

$$\boxed{y_p = -\frac{b}{a} \quad \text{(solution particulière constante)}}$$

C'est la **valeur d'équilibre** du système : si on démarre là, on n'en bouge plus.

### Étape 2 — ajouter toutes les solutions de $y' = ay$

$$\boxed{y' = ay + b \iff y(x) = C\,e^{ax} - \frac{b}{a}, \quad C \in \mathbb{R}}$$

> **Exemple.** Résoudre $y' = -2y + 10$.
> Étape 1 : solution constante $0 = -2y + 10$, donc $y_p = 5$
> (c'est bien $-\frac{b}{a} = -\frac{10}{-2}$).
> Étape 2 : les solutions sont $y(x) = C\,e^{-2x} + 5$, $C \in \mathbb{R}$.
> Contrôle : $y' = -2C\,e^{-2x}$ et $-2y + 10 = -2C\,e^{-2x} - 10 + 10 = -2C\,e^{-2x}$ ✓.

### Lecture physique

Quand $a < 0$, le terme $C\,e^{ax}$ s'éteint quand $x$ grandit : **toutes** les
solutions tendent vers la valeur d'équilibre $-\frac{b}{a}$. C'est le **régime
transitoire** ($Ce^{ax}$) qui disparaît, puis le **régime permanent** ($-\frac{b}{a}$)
qui s'installe. Ce vocabulaire est celui de tes cours de physique.

---

## 5. La condition initiale : une seule courbe passe par le point donné

$y(x) = C\,e^{ax} - \frac{b}{a}$ décrit une **famille** de courbes. Pour isoler
**la** solution du problème concret, on impose une **condition initiale**
$y(x_0) = y_0$ : elle fixe $C$, donc une unique solution.

### Méthode

1. Écris la solution générale avec sa constante $C$.
2. Remplace $x$ par $x_0$ et égale à $y_0$.
3. Résous en $C$, puis réécris la solution complète.

> **Exemple.** Résoudre $y' = -2y + 10$ avec $y(0) = 1$.
> Solution générale : $y(x) = C\,e^{-2x} + 5$.
> Condition initiale : $y(0) = C\,e^{0} + 5 = C + 5 = 1$, donc $C = -4$.
> **La** solution est $y(x) = 5 - 4e^{-2x}$.
> Contrôle : $y(0) = 5 - 4 = 1$ ✓, et $y(x) \to 5$ quand $x \to +\infty$ : la courbe
> monte de $1$ vers l'équilibre $5$.

⚠️ $C$ n'est **pas** toujours égal à $y_0$ : ici $C = -4$ alors que $y(0) = 1$.
L'égalité $C = y_0$ n'est vraie que si $x_0 = 0$ **et** $b = 0$.

---

## 6. Application 1 — charge d'un condensateur (circuit RC)

Un générateur de tension constante $E$ charge un condensateur de capacité $C_0$
(en farads) à travers une résistance $R$ (en ohms). La tension $u(t)$ aux bornes du
condensateur vérifie la loi des mailles :

$$R\,C_0\,\frac{\mathrm{d}u}{\mathrm{d}t} + u = E$$

### Mise sous la forme du cours

On isole la dérivée :

$$u' = -\frac{1}{RC_0}\,u + \frac{E}{RC_0} \qquad \text{avec } a = -\frac{1}{RC_0},\; b = \frac{E}{RC_0}$$

- Solution constante : $-\dfrac{b}{a} = E$ — le condensateur chargé atteint la
  tension du générateur, ce qui est physiquement attendu.
- Solutions : $u(t) = K\,e^{-t/(RC_0)} + E$.
- Condensateur **initialement déchargé** : $u(0) = K + E = 0$, donc $K = -E$ :

$$\boxed{u(t) = E\left(1 - e^{-t/\tau}\right) \quad \text{avec } \tau = R\,C_0 \text{ (en secondes)}}$$

$\tau = RC_0$ est la **constante de temps** : à $t = \tau$,
$u(\tau) = E(1 - e^{-1}) \approx 0{,}63\,E$ (63 % de la charge) ; à $t = 5\tau$, la
charge est quasi totale ($> 99\,\%$).

> **Exemple.** $E = 6{,}0$ V, $R = 10$ kΩ $= 10^4$ Ω, $C_0 = 100$ µF $= 10^{-4}$ F.
> Alors $\tau = 10^4 \times 10^{-4} = 1{,}0$ s et $u(t) = 6{,}0\,(1 - e^{-t})$.
> À $t = 1$ s : $u \approx 6{,}0 \times 0{,}632 \approx 3{,}8$ V.

⚠️ **Unités** : $\tau$ n'est en secondes que si $R$ est en **ohms** et $C_0$ en
**farads**. Convertis les kΩ et les µF **avant** de multiplier.

---

## 7. Application 2 — refroidissement de Newton

Une pièce à la température $\theta(t)$ est placée dans un local à température
ambiante $\theta_{\text{amb}}$ constante. La **loi de Newton** dit que la vitesse de
refroidissement est proportionnelle à l'**écart** de température :

$$\theta' = -k\,(\theta - \theta_{\text{amb}}) \qquad k > 0$$

En développant : $\theta' = -k\,\theta + k\,\theta_{\text{amb}}$, forme $y' = ay + b$
avec $a = -k$ et $b = k\,\theta_{\text{amb}}$.

- Solution constante : $-\dfrac{b}{a} = \theta_{\text{amb}}$ — l'équilibre est la
  température ambiante, logique.
- Solutions avec $\theta(0) = \theta_0$ :

$$\boxed{\theta(t) = \theta_{\text{amb}} + (\theta_0 - \theta_{\text{amb}})\,e^{-kt}}$$

> **Exemple.** Une pièce usinée sort du four à $\theta_0 = 380$ °C dans un atelier à
> $\theta_{\text{amb}} = 20$ °C, avec $k = 0{,}05$ min$^{-1}$ :
> $\theta(t) = 20 + 360\,e^{-0{,}05t}$ ($t$ en minutes).
> Quand peut-on la manipuler ($\theta \leq 60$ °C) ?
> $360\,e^{-0{,}05t} = 40 \iff e^{-0{,}05t} = \frac{1}{9} \iff t = 20\ln 9 \approx 44$ min.
> Le **logarithme** sert à répondre aux questions « au bout de combien de temps ? ».

---

## 8. Tableau récapitulatif

| Équation / question | Réponse |
|---|---|
| $f$ est solution ? | calcule $f'$, compare au membre de droite, **pour tout $x$** |
| $y' = ay$ | $y(x) = C\,e^{ax}$, $C \in \mathbb{R}$ |
| $y' = ay + b$ ($a \neq 0$) : solution constante | $y_p = -\dfrac{b}{a}$ (poser $y' = 0$) |
| $y' = ay + b$ : toutes les solutions | $y(x) = C\,e^{ax} - \dfrac{b}{a}$ |
| Condition initiale $y(x_0) = y_0$ | fixe $C$ : **une seule** solution |
| Comportement si $a < 0$ | $y \to -\dfrac{b}{a}$ (régime permanent) |
| Charge RC : $RC_0\,u' + u = E$, $u(0)=0$ | $u(t) = E(1 - e^{-t/\tau})$, $\tau = RC_0$ |
| Refroidissement : $\theta' = -k(\theta - \theta_{\text{amb}})$ | $\theta(t) = \theta_{\text{amb}} + (\theta_0 - \theta_{\text{amb}})e^{-kt}$ |

---

## 9. Les erreurs qui coûtent des points

1. **Oublier la constante $C$.** $y' = 3y$ n'a pas pour solution « $e^{3x}$ » mais
   la **famille** $C\,e^{3x}$. Sans $C$, impossible d'utiliser la condition
   initiale — et la réponse est incomplète.
2. **Se tromper de signe dans $-\frac{b}{a}$.** Pour $y' = 2y - 8$, la solution
   constante est $y_p = -\frac{-8}{2} = 4$, pas $-4$. Le plus sûr : poser $y' = 0$
   et résoudre $0 = 2y - 8$ à la main.
3. **Confondre $C$ et $y(0)$.** Pour $y' = ay + b$, $y(0) = C - \frac{b}{a}$ :
   la constante n'est pas la valeur initiale. Remplace toujours $x$ par $x_0$ dans
   la solution générale complète.
4. **Résoudre $RC_0\,u' + u = E$ sans isoler $u'$.** La forme du cours est
   $y' = ay + b$ : divise d'abord par $RC_0$, sinon tu identifies de faux $a$ et $b$.
5. **Rater les conversions d'unités dans $\tau = RC_0$.** $10$ kΩ $\times$ $100$ µF
   $= 10^4 \times 10^{-4} = 1$ s, pas $1000$ s. Ohms et farads obligatoires avant
   le produit.
6. **Vérifier une solution en une seule valeur de $x$.** L'égalité $f' = af + b$
   doit être une identité **pour tout $x$** : compare les expressions, pas des
   valeurs numériques isolées.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-sti2d-stl-pc-maths.txt,
partie MATHÉMATIQUES, section « Équations différentielles » (lignes 96-102) :
- Contenus : notion d'équation différentielle et de solution ; équations y' = ay
  et y' = ay + b.
- Capacités : vérifier qu'une fonction est solution ; déterminer toutes les
  solutions de y' = ay + b ; la solution vérifiant y(x0) donné.
Programme officiel : BO spécial n°8 du 25 juillet 2019 (arrêté MENE1921261A),
spécialité physique-chimie et mathématiques, terminale STI2D/STL, extrait via
WebFetch depuis le PDF officiel education.gouv.fr — à confronter au PDF avant
publication.

Couverture : §1 notion et solution ; §2 vérifier une solution ; §3 y'=ay ;
§4 y'=ay+b (solution particulière constante puis solution générale) ;
§5 condition initiale y(x0)=y0. Applications techno §6 (charge RC) et §7
(refroidissement de Newton) : contextes portés par la partie physique du même
programme (dipôle RC / flux thermique) et par l'esprit « co-intervention » de la
spécialité PCM ; les équations physiques (loi des mailles RC, loi de Newton) sont
données, pas démontrées.

Prérequis : chapitre exponentielle-logarithme du même parcours
(dérivée de e^(kx), résolution de e^(ax) = b avec ln) — la résolution
« au bout de combien de temps » du §7 utilise ln, conforme à la section
« Fonction logarithme népérien » du même programme.

Choix de rédaction :
- Capacité du BO limitée à « déterminer toutes les solutions de y' = ay + b » :
  l'équivalence y'=ay ⟺ Ce^(ax) est ADMISE (pas de démonstration d'unicité),
  conformément au niveau techno.
- Dans §6, la capacité du condensateur est notée C_0 pour éviter la collision
  avec la constante d'intégration C ; la constante d'intégration y est notée K.
- Vocabulaire physique (régime transitoire/permanent, constante de temps τ,
  valeur d'équilibre) introduit volontairement : c'est le cœur de la spécialité
  PC et maths.

Vérifications numériques faites :
- §5 : y(x) = 5 − 4e^(−2x), y(0)=1, y' = 8e^(−2x) = −2y+10 ✓.
- §6 : τ = 10^4 Ω × 10^−4 F = 1,0 s ; 1 − e^(−1) ≈ 0,6321 → u ≈ 3,79 ≈ 3,8 V.
- §7 : 360 e^(−0,05t) = 40 ⟺ t = 20 ln 9 ≈ 43,9 ≈ 44 min.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'intitulé exact des rubriques de la section (l'extraction résume les contenus).
- La présence éventuelle, dans le BO, d'exemples imposés (RC, radioactivité…)
  au sein de la rubrique équations différentielles elle-même.
- Le niveau d'exigence sur la justification de « toutes les solutions »
  (admis ici).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
