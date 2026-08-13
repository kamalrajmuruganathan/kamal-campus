---
id: tale-compl-math-derivation-convexite
titre: "Dérivation, variations et convexité"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 15
prerequis:
  - Nombre dérivé et fonction dérivée (Première spécialité)
  - Dérivées des fonctions de référence et opérations (Première spécialité)
  - Équation de la tangente en un point (Première spécialité)
  - Fonction exponentielle (Première spécialité)
statut: brouillon
relu_par: null
---

# Dérivation, variations et convexité

> Une seule idée traverse tout ce chapitre : **le signe d'une dérivée raconte la
> forme de la courbe**. Le signe de $f'$ dit si la courbe **monte ou descend**.
> Le signe de $f''$ dit comment elle **se courbe**. Deux dérivées, deux lectures
> différentes — ne les mélange jamais.

---

## 1. Dérivée et sens de variation

### Rappel : nombre dérivé et tangente

Le nombre dérivé $f'(a)$ est la **pente de la tangente** à la courbe au point
d'abscisse $a$. La tangente en $a$ a pour équation :

$$\boxed{y = f'(a)\,(x - a) + f(a)}$$

> **Exemple.** Pour $f(x) = x^2$, on a $f'(x) = 2x$, donc $f'(3) = 6$. La
> tangente au point d'abscisse $3$ est $y = 6(x-3) + 9 = 6x - 9$.

### Théorème : le signe de $f'$ donne les variations

Soit $f$ dérivable sur un intervalle $I$.

- Si $f'(x) > 0$ sur $I$, alors $f$ est **strictement croissante** sur $I$.
- Si $f'(x) < 0$ sur $I$, alors $f$ est **strictement décroissante** sur $I$.
- Si $f'(x) = 0$ sur tout $I$, alors $f$ est **constante** sur $I$.

> **Exemple.** $f(x) = x^2 - 4x + 1$ donne $f'(x) = 2x - 4 = 2(x-2)$.
> $f'(x) < 0$ pour $x < 2$ et $f'(x) > 0$ pour $x > 2$ : $f$ décroît sur
> $]-\infty\,;2]$ puis croît sur $[2\,;+\infty[$.

La méthode est toujours la même : on calcule $f'$, on **étudie son signe**, puis
on **dresse le tableau de variations**.

---

## 2. Extremums

### Définition

$f$ admet un **maximum local** en $a$ si $f(a)$ est la plus grande valeur prise
par $f$ autour de $a$ ; un **minimum local** si c'est la plus petite. On parle
d'**extremum** pour désigner l'un ou l'autre.

### Propriété : là où $f'$ change de signe

Si $f'$ **s'annule en changeant de signe** en $a$, alors $f$ admet un extremum
local en $a$ :

- $f'$ passe de $+$ à $-$ : **maximum** local (la courbe monte puis descend) ;
- $f'$ passe de $-$ à $+$ : **minimum** local (la courbe descend puis monte).

> **Exemple.** $f(x) = x^2 - 4x + 1$, $f'(x) = 2(x-2)$. En $x = 2$, $f'$ passe de
> $-$ à $+$ : $f$ a un **minimum** local, de valeur $f(2) = 4 - 8 + 1 = -3$.

> ⚠️ **$f'(a) = 0$ ne suffit pas.** Pour $f(x) = x^3$, $f'(x) = 3x^2$ s'annule en
> $0$ mais reste **positif** de part et d'autre : pas de changement de signe,
> donc **pas d'extremum**. La fonction est croissante partout.

---

## 3. Fonctions de référence

Ces dérivées sont à connaître par cœur : elles servent dans chaque étude de
fonction. $\lambda$ et $n$ désignent des constantes.

| Fonction $f(x)$ | Dérivée $f'(x)$ | Ensemble |
|---|---|---|
| $\lambda$ (constante) | $0$ | $\mathbb{R}$ |
| $x$ | $1$ | $\mathbb{R}$ |
| $x^n$ ($n$ entier $\geqslant 1$) | $n\,x^{n-1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $x \neq 0$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $x > 0$ |
| $\mathrm{e}^{x}$ | $\mathrm{e}^{x}$ | $\mathbb{R}$ |

Et les opérations, tout aussi indispensables :

$$(u+v)' = u' + v' \qquad (\lambda u)' = \lambda u' \qquad (uv)' = u'v + uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$

> **Exemple.** $f(x) = \dfrac{x}{\mathrm{e}^{x}}$. Avec $u = x$ et $v = \mathrm{e}^x$ :
> $$f'(x) = \frac{1\cdot \mathrm{e}^x - x\,\mathrm{e}^x}{(\mathrm{e}^x)^2} = \frac{(1-x)\,\mathrm{e}^x}{\mathrm{e}^{2x}} = \frac{1-x}{\mathrm{e}^{x}}.$$
> Le signe de $f'$ est celui de $1 - x$ : $f$ croît sur $]-\infty\,;1]$, décroît
> ensuite, avec un maximum en $x = 1$.

---

## 4. Dérivée seconde et convexité

### Définition : la dérivée seconde

Quand $f'$ est elle-même dérivable, sa dérivée s'appelle la **dérivée seconde**,
notée $f''$ :

$$f'' = (f')'$$

> **Exemple.** $f(x) = x^3 - 2x^2 + 5$. On dérive une fois : $f'(x) = 3x^2 - 4x$,
> puis une seconde fois : $f''(x) = 6x - 4$.

### Définition : convexe, concave

Sur un intervalle $I$, la fonction $f$ est :

- **convexe** si sa courbe est **au-dessus de chacune de ses tangentes** (et sous
  ses cordes) — un **creux**, comme un bol qui tient l'eau, $\cup$ ;
- **concave** si sa courbe est **en dessous de ses tangentes** (et au-dessus de
  ses cordes) — une **bosse**, $\cap$.

### Caractérisation par la dérivée seconde

Soit $f$ deux fois dérivable sur $I$.

$$\boxed{f \text{ convexe sur } I \iff f'' \geqslant 0 \text{ sur } I}$$

$$\boxed{f \text{ concave sur } I \iff f'' \leqslant 0 \text{ sur } I}$$

De façon équivalente : $f$ est convexe lorsque $f'$ est **croissante** (les
pentes augmentent), concave lorsque $f'$ est décroissante.

> **Exemple (convexe).** $f(x) = x^2$ donne $f''(x) = 2 > 0$ : la parabole est
> convexe sur $\mathbb{R}$, c'est bien un creux.

> **Exemple (concave).** $f(x) = \sqrt{x}$ sur $]0\,;+\infty[$ donne
> $f'(x) = \dfrac{1}{2\sqrt{x}}$ puis $f''(x) = -\dfrac{1}{4}x^{-3/2} < 0$ : la
> courbe est concave, une bosse.

> **Exemple (les deux à la fois).** $f(x) = x^3$ a $f''(x) = 6x$ : concave sur
> $]-\infty\,;0[$, convexe sur $]0\,;+\infty[$. Pourtant $f$ est **croissante
> partout** — variations et convexité sont indépendantes.

---

## 5. Point d'inflexion

### Définition

Un **point d'inflexion** est un point où la courbe **change de convexité** :
elle passe de convexe à concave, ou l'inverse. En ce point, la courbe
**traverse** sa tangente.

### Comment le repérer

On le trouve là où $f''$ **s'annule en changeant de signe**.

> **Exemple.** $f(x) = x^3$, $f''(x) = 6x$. En $x = 0$, $f''$ passe du négatif au
> positif : l'origine est un **point d'inflexion**. La courbe y traverse sa
> tangente (l'axe des abscisses).

> ⚠️ **$f''(a) = 0$ ne suffit pas.** Il faut un **changement de signe**. Pour
> $f(x) = x^4$, $f''(x) = 12x^2$ s'annule en $0$ mais reste positif : pas
> d'inflexion, la fonction reste convexe partout.

---

## 6. Méthode : démontrer une inégalité par la convexité

C'est une capacité attendue du programme. Le principe tient en une phrase : une
fonction **convexe est au-dessus de sa tangente** (**concave**, en dessous).

**Démonstration type — montrer que $\mathrm{e}^{x} \geqslant 1 + x$ pour tout réel $x$.**

1. On pose $f(x) = \mathrm{e}^{x}$. Alors $f'(x) = \mathrm{e}^{x}$ et
   $f''(x) = \mathrm{e}^{x} > 0$ : $f$ est **convexe** sur $\mathbb{R}$.
2. La tangente au point d'abscisse $0$ a pour équation
   $y = f'(0)(x-0) + f(0) = 1\cdot x + 1 = 1 + x$.
3. Une fonction convexe est au-dessus de ses tangentes, donc pour tout réel $x$ :
   $$\mathrm{e}^{x} \geqslant 1 + x. \qquad \blacksquare$$

---

## 7. Lecture graphique

Sans aucun calcul, sur une courbe déjà tracée :

- **Variations** : la courbe **monte** ($f' > 0$) ou **descend** ($f' < 0$) ; un
  sommet ou un creux est un **extremum**.
- **Zone convexe** ($\cup$) : la courbe « creuse », tangentes **en dessous**, les
  pentes augmentent de gauche à droite.
- **Zone concave** ($\cap$) : la courbe « bombe », tangentes **au-dessus**, les
  pentes diminuent.
- **Point d'inflexion** : l'endroit précis où la courbe **bascule** de $\cup$ à
  $\cap$ (ou l'inverse) et **traverse** sa tangente.

> **Ne confonds pas extremum et inflexion.** Un extremum se lit sur $f'$ (la
> courbe cesse de monter) ; une inflexion se lit sur $f''$ (la courbe change de
> courbure). Une fonction peut être croissante **et** présenter une inflexion.

---

## 8. Tableau récapitulatif

| À savoir | Le point clé |
|---|---|
| Tangente en $a$ | $y = f'(a)(x-a) + f(a)$ |
| Variations | signe de $f'$ : $+$ croît, $-$ décroît |
| Extremum local | $f'$ s'annule **en changeant de signe** |
| Dérivées de référence | $x^n \to n x^{n-1}$, $\sqrt{x} \to \frac{1}{2\sqrt{x}}$, $\mathrm{e}^x \to \mathrm{e}^x$ |
| Dérivée seconde | $f'' = (f')'$ |
| Convexité | signe de $f''$ : $+$ convexe $\cup$, $-$ concave $\cap$ |
| $f$ convexe | $f'' \geqslant 0$ ; $f'$ croissante ; courbe au-dessus des tangentes |
| $f$ concave | $f'' \leqslant 0$ ; $f'$ décroissante ; courbe sous les tangentes |
| Point d'inflexion | $f''$ s'annule **en changeant de signe** |
| Inégalité par convexité | courbe convexe $\geqslant$ sa tangente |

---

## 9. Les erreurs qui coûtent des points

1. **Confondre variations et convexité.** Le signe de $f'$ donne les variations,
   celui de $f''$ la convexité. Une fonction peut être croissante **et** concave
   (comme $\sqrt{x}$) : l'une ne se déduit pas de l'autre.

2. **Conclure à un extremum dès que $f'(a) = 0$.** Il faut un **changement de
   signe** de $f'$. Pour $x^3$, $f'(0) = 0$ mais pas d'extremum.

3. **Conclure à une inflexion dès que $f''(a) = 0$.** Là aussi, il faut un
   **changement de signe** de $f''$. Pour $x^4$, $f''(0) = 0$ mais pas
   d'inflexion.

4. **Inverser convexe et concave.** Convexe = creux $\cup$ = $f'' \geqslant 0$ ;
   concave = bosse $\cap$ = $f'' \leqslant 0$. Astuce : le « v » de con**v**exe
   pointe vers le bas, comme le creux.

5. **Se tromper de sens dans l'inégalité de la tangente.** Convexe : la courbe
   est **au-dessus** de la tangente ($\geqslant$). Concave : en dessous
   ($\leqslant$). Vérifie toujours la convexité **avant** d'écrire le sens.

6. **Oublier le signe moins dans une dérivée de référence.** $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$,
   pas $\frac{1}{x^2}$. Une erreur de signe fausse tout le tableau de signes.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
bloc « MATHÉMATIQUES COMPLÉMENTAIRES », section « Dérivation, variations et
convexité » (lignes 59 à 63) :
  Contenus : dérivée, sens de variation, extremums ; fonctions de référence ;
  convexité, point d'inflexion (lecture graphique).
  Capacités : étudier les variations ; exploiter la convexité pour des inégalités
  ou l'allure d'une courbe.
En-tête de provenance du fichier lu (lignes 1 à 11) : arrêtés du 19-7-2019,
BO spécial n°8 du 25 juillet 2019 ; extraction via WebFetch depuis les PDF
officiels education.gouv.fr (option complémentaires : MENE1921265A / spe265).

MENTION 1 — NATURE DE LA SOURCE : le programme a été extrait par WebFetch depuis
le PDF officiel (éduscol / education.gouv.fr) selon l'en-tête du fichier source.
Cette extraction DOIT être confrontée au PDF officiel avant publication : le texte
des « Contenus/Capacités » du BO est bref et a pu être condensé (les préambules,
exemples et attendus détaillés du programme complémentaires ne sont pas repris).

MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE. Le gabarit
(docs/gabarit-chapitre.md, §6) recommande de « ne rien écrire pour la Terminale
avant 2027 » ; cette consigne vise le programme de SPÉCIALITÉ (qui change à la
rentrée 2027). Le programme des OPTIONS (complémentaires/expertes) traité ici est
celui de 2019, actuellement EN VIGUEUR. Chapitre produit à la demande explicite de
l'utilisateur. Arbitrage calendrier à confirmer par le relecteur.

PÉRIMÈTRE / À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Différence avec la spécialité : le programme complémentaires n'inclut PAS la
  dérivée d'une fonction composée. Ce chapitre s'en tient donc à : variations,
  extremums, fonctions de référence, convexité/inflexion, inégalité de la tangente.
  Le chapitre spécialité (tale-spe-math-derivation-convexite) couvre en plus la
  composée : les deux ne doivent pas être fusionnés.
- Le mot « concave » n'apparaît pas mot pour mot dans les « Contenus » extraits
  mais découle de « exploiter la convexité pour l'allure d'une courbe » : traité
  comme l'opposé de convexe.
- La caractérisation « f convexe <=> f'' >= 0 » et l'inégalité de la tangente sont
  les attendus classiques mobilisés par la capacité « exploiter la convexité pour
  des inégalités ». Le programme complémentaires mentionne « lecture graphique »
  pour la convexité : le niveau visé reste plus léger que la spécialité ; garder
  les calculs de f'' simples (polynômes, quotients élémentaires).
- Fonctions de référence : la table reprend les dérivées usuelles de Première (la
  fonction ln relève d'un chapitre ultérieur du programme complémentaires ; elle
  n'est volontairement pas utilisée ici). Exponentielle supposée acquise (Première).
- L'exemple d'inégalité e^x >= 1+x suppose l'exponentielle connue : cohérent avec
  le prérequis Première spécialité.

POINTS À SOUMETTRE AU RELECTEUR :
- Justesse du sens des inégalités de convexité (vérifié une par une).
- Niveau attendu en complémentaires pour la dérivée seconde (le mot f'' figure-t-il
  explicitement, ou seulement la « lecture graphique » de la convexité ?).
- Prérequis pointant vers Première spécialité (public typique des complémentaires :
  élèves ayant suivi la spécialité en Première puis l'ayant abandonnée en Terminale).

Rédaction 100% originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu (relu_par: null).
-->
