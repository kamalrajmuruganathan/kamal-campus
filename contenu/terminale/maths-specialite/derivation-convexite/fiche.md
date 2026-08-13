---
id: tale-spe-math-derivation-convexite
titre: "Compléments sur la dérivation : composée et convexité"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Nombre dérivé et fonction dérivée (Première spécialité)
  - Dérivées des fonctions de référence et opérations (Première spécialité)
  - Lien entre signe de la dérivée et variations (Première spécialité)
  - Équation de la tangente (Première spécialité)
statut: brouillon
relu_par: null
---

# Compléments sur la dérivation : composée et convexité

> Dériver une fois te dit où la fonction **monte ou descend**. Dériver une
> **deuxième** fois te dit comment elle **se courbe** — creux vers le haut ou
> vers le bas. Deux informations différentes, deux dérivées différentes. Ne les
> confonds jamais.

---

## 1. Dérivée d'une fonction composée

### Définition : composer, c'est enchaîner

Composer deux fonctions $u$ et $v$, c'est appliquer $u$ **puis** $v$. On note
$v \circ u$ (lire « $v$ rond $u$ ») la fonction définie par :

$$(v \circ u)(x) = v\big(u(x)\big)$$

$u$ est la fonction **du dedans**, $v$ celle **du dehors**.

> **Condition d'existence.** $v \circ u$ n'a de sens en $x$ que si $u(x)$
> appartient à l'ensemble de définition de $v$. Pour $\sqrt{u(x)}$ il faut
> $u(x) \geqslant 0$ ; pour $\dfrac{1}{u(x)}$ il faut $u(x) \neq 0$.

### Théorème : la dérivée de la composée

Si $u$ est dérivable sur $I$ et $v$ dérivable sur l'intervalle contenant les
valeurs $u(x)$, alors $v \circ u$ est dérivable sur $I$ et :

$$\boxed{(v \circ u)' = (v' \circ u) \times u'}$$

Autrement dit : $(v \circ u)'(x) = v'\big(u(x)\big) \times u'(x)$.

> On dérive **l'extérieur** (en gardant l'intérieur intact), puis on multiplie
> par la dérivée de **l'intérieur**. Ce dernier facteur $u'$, c'est lui qu'on
> oublie le plus souvent.

> **Exemple.** $f(x) = (3x + 1)^5$. Ici $u(x) = 3x+1$ et $v(t) = t^5$.
> Alors $v'(t) = 5t^4$ et $u'(x) = 3$, donc
> $$f'(x) = 5(3x+1)^4 \times 3 = 15(3x+1)^4.$$

### Les formules qui en découlent

Chaque cas usuel n'est qu'une application du théorème. Retiens-les, elles font
gagner du temps.

| Forme | Dérivée |
|---|---|
| $u^n$ (avec $n$ entier) | $n\, u' \, u^{n-1}$ |
| $\sqrt{u}$ (si $u > 0$) | $\dfrac{u'}{2\sqrt{u}}$ |
| $\dfrac{1}{u}$ (si $u \neq 0$) | $-\dfrac{u'}{u^2}$ |
| $\mathrm{e}^{u}$ | $u' \, \mathrm{e}^{u}$ |

> **Exemple ($\sqrt{u}$).** $f(x) = \sqrt{x^2 + 1}$, avec $u(x) = x^2+1 > 0$.
> $$f'(x) = \frac{u'(x)}{2\sqrt{u(x)}} = \frac{2x}{2\sqrt{x^2+1}} = \frac{x}{\sqrt{x^2+1}}.$$

> **Exemple ($\mathrm{e}^{u}$).** $f(x) = \mathrm{e}^{-x^2}$, avec $u(x) = -x^2$
> et $u'(x) = -2x$.
> $$f'(x) = -2x\,\mathrm{e}^{-x^2}.$$

---

## 2. Dérivée seconde

### Définition

Quand la dérivée $f'$ est elle-même dérivable, sa dérivée s'appelle la
**dérivée seconde** de $f$, notée $f''$ :

$$f'' = (f')'$$

> **Exemple.** $f(x) = x^3 - 2x^2 + 5$.
> D'abord $f'(x) = 3x^2 - 4x$, puis $f''(x) = 6x - 4$.

Deux dérivées, deux rôles distincts :

- le **signe de $f'$** donne les **variations** de $f$ (croît / décroît) ;
- le **signe de $f''$** donne la **convexité** de $f$ (courbure).

---

## 3. Convexité et concavité

### Définition : par la position des sécantes

Une **sécante** relie deux points de la courbe. On dit que $f$ est
**convexe** sur un intervalle $I$ lorsque, sur $I$, sa courbe est entièrement
située **en dessous de chacune de ses sécantes** (la corde est au-dessus de la
courbe).

$f$ est **concave** sur $I$ lorsque c'est l'inverse : la courbe est **au-dessus
de ses sécantes**.

> Image mentale : une fonction convexe forme un **creux** (comme un bol qui
> tient l'eau, $\cup$) ; une fonction concave forme une **bosse** ($\cap$).

### Caractérisation par la dérivée seconde

Soit $f$ deux fois dérivable sur $I$.

$$\boxed{f \text{ convexe sur } I \iff f'' \geqslant 0 \text{ sur } I \iff f' \text{ croissante sur } I}$$

$$\boxed{f \text{ concave sur } I \iff f'' \leqslant 0 \text{ sur } I \iff f' \text{ décroissante sur } I}$$

Les deux lectures disent la même chose : « la pente $f'$ augmente » signifie
« la courbe tourne vers le haut ».

> **Exemple (convexe).** $f(x) = x^2$ donne $f'(x) = 2x$ puis $f''(x) = 2 > 0$.
> La parabole est convexe sur $\mathbb{R}$ : c'est bien un creux.

> **Exemple (concave).** $f(x) = \sqrt{x}$ sur $]0\,;+\infty[$ donne
> $f'(x) = \dfrac{1}{2\sqrt{x}}$ puis $f''(x) = -\dfrac{1}{4}x^{-3/2} < 0$.
> La courbe est concave : une bosse.

> **Exemple (les deux à la fois).** $f(x) = x^3$ a $f''(x) = 6x$.
> $f''<0$ sur $]-\infty\,;0[$ (concave) et $f'' > 0$ sur $]0\,;+\infty[$
> (convexe). Pourtant $f$ est **croissante partout** : variations et convexité
> sont indépendantes.

### Convexité et tangentes

Une autre lecture équivalente, très utile pour les inégalités :

- si $f$ est **convexe** sur $I$, sa courbe est **au-dessus de toutes ses
  tangentes** sur $I$ ;
- si $f$ est **concave**, sa courbe est **en dessous de ses tangentes**.

---

## 4. Point d'inflexion

### Définition

Un **point d'inflexion** est un point où la courbe **change de convexité** :
elle passe de convexe à concave, ou l'inverse. En ce point, la courbe
**traverse** sa tangente.

### Comment le trouver

On le repère là où $f''$ **s'annule en changeant de signe**.

> **Exemple.** $f(x) = x^3$, $f''(x) = 6x$. En $x = 0$, $f''$ s'annule et passe
> du négatif au positif : l'origine est un **point d'inflexion**. La courbe y
> traverse sa tangente (l'axe des abscisses).

> ⚠️ **$f''(a) = 0$ ne suffit pas.** Il faut un **changement de signe**. Pour
> $f(x) = x^4$, on a $f''(x) = 12x^2$ qui s'annule en $0$ mais reste positif :
> pas d'inflexion, la fonction est convexe partout.

---

## 5. Méthode : démontrer une inégalité par la convexité

C'est une capacité attendue du programme. Le principe : une fonction convexe
est **au-dessus de sa tangente**. On appelle ça **l'inégalité de la tangente**.

**Démonstration type — montrer que $\mathrm{e}^{x} \geqslant 1 + x$ pour tout réel $x$.**

1. On pose $f(x) = \mathrm{e}^{x}$. Alors $f'(x) = \mathrm{e}^{x}$ et
   $f''(x) = \mathrm{e}^{x} > 0$ : $f$ est **convexe** sur $\mathbb{R}$.
2. La tangente au point d'abscisse $0$ a pour équation
   $y = f'(0)(x-0) + f(0) = 1\cdot x + 1 = 1 + x$.
3. Une fonction convexe est au-dessus de ses tangentes, donc pour tout $x$ :
   $$\mathrm{e}^{x} \geqslant 1 + x. \qquad \blacksquare$$

> **Variante concave.** $\ln$ est concave (car $(\ln x)'' = -\frac{1}{x^2} < 0$),
> donc en dessous de sa tangente en $1$, d'équation $y = x - 1$ : on obtient
> $\ln x \leqslant x - 1$ pour tout $x > 0$.

---

## 6. Lecture graphique

Sans aucun calcul, sur une courbe tracée :

- **Zone convexe** ($\cup$) : la courbe « creuse », les tangentes sont
  **en dessous** ; les pentes augmentent de gauche à droite.
- **Zone concave** ($\cap$) : la courbe « bombe », les tangentes sont
  **au-dessus** ; les pentes diminuent.
- **Point d'inflexion** : l'endroit précis où la courbe **bascule** de $\cup$ à
  $\cap$ (ou l'inverse) et **traverse** sa tangente.

> **Attention à ne pas confondre avec les extremums.** Un sommet ou un creux de
> la courbe (extremum) se lit sur $f'$ ; un changement de courbure (inflexion)
> se lit sur $f''$. Une fonction peut être croissante et pourtant présenter un
> point d'inflexion.

---

## 7. Tableau récapitulatif

| À savoir | Le point clé |
|---|---|
| Composée $v \circ u$ | $(v\circ u)' = (v' \circ u)\times u'$ — ne pas oublier $\times\, u'$ |
| $u^n$ | $n\,u'\,u^{n-1}$ |
| $\sqrt{u}$ | $\dfrac{u'}{2\sqrt{u}}$, si $u>0$ |
| $\mathrm{e}^{u}$ | $u'\,\mathrm{e}^{u}$ |
| Dérivée seconde | $f'' = (f')'$ |
| Variations | signe de $f'$ |
| Convexité | signe de $f''$ |
| $f$ convexe | $f'' \geqslant 0$ ; $f'$ croissante ; courbe sous ses sécantes, au-dessus des tangentes |
| $f$ concave | $f'' \leqslant 0$ ; $f'$ décroissante ; courbe au-dessus des sécantes, sous les tangentes |
| Point d'inflexion | $f''$ s'annule **en changeant de signe** |
| Inégalité par convexité | courbe convexe $\geqslant$ sa tangente |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier le facteur $u'$** dans la composée. La dérivée de $(3x+1)^5$
   n'est pas $5(3x+1)^4$ mais $15(3x+1)^4$. Sans $\times u'$, tout est faux.

2. **Confondre variations et convexité.** Le signe de $f'$ donne les
   variations, celui de $f''$ la convexité. Une fonction peut être croissante
   **et** concave (comme $\sqrt{x}$) : les deux notions ne se déduisent pas
   l'une de l'autre.

3. **Conclure à une inflexion dès que $f''(a)=0$.** Il faut un **changement de
   signe** de $f''$. Pour $x^4$, $f''(0)=0$ mais pas d'inflexion.

4. **Inverser convexe et concave.** Convexe = creux $\cup$ = $f'' \geqslant 0$.
   Concave = bosse $\cap$ = $f'' \leqslant 0$. À retenir : le « v » de
   con**v**exe pointe vers le bas comme le creux.

5. **Se tromper de sens dans l'inégalité de la tangente.** Convexe : la courbe
   est **au-dessus** de la tangente (donc $\geqslant$). Concave : en dessous
   (donc $\leqslant$). Vérifie toujours la convexité avant d'écrire le sens.

6. **Dériver $\sqrt{u}$ ou $\dfrac{1}{u}$ sans passer par la composée** et
   oublier le $u'$ au numérateur, ou perdre le signe moins de $-\dfrac{u'}{u^2}$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — COMPLÉMENTS SUR LA DÉRIVATION » (lignes 168 à 187),
rubriques « Contenus » et « Capacités attendues ». En-tête de provenance du
fichier lu (lignes 1 à 20).

MENTION 1 — NATURE DE LA SOURCE : ce programme n'a PAS été extrait par la chaîne
habituelle. D'après l'en-tête de provenance, son texte a été reconstitué via
l'outil WebFetch depuis un miroir (xm1math.net), et non depuis le PDF officiel
(le proxy du sandbox bloquant le téléchargement direct). Cette extraction WebFetch
DOIT être confrontée au PDF officiel (education.gouv.fr / éduscol) avant toute
publication. Reproduction non garantie exhaustive (préambules, exemples et notes
non repris).

MENTION 2 — CONTEXTE DE PRODUCTION : chapitre de TERMINALE produit sur le
programme applicable à la RENTRÉE 2027, à la demande explicite de l'utilisateur.
Le gabarit (docs/gabarit-chapitre.md, §6) recommandait de « ne rien écrire pour
la Terminale avant 2027 » ; l'utilisateur a explicitement commandé ce chapitre
sur le programme 2027 déjà publié. À signaler au relecteur (arbitrage calendrier).

PÉRIMÈTRE / À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'extraction ne liste, en « Contenus », que la définition de la convexité PAR
  LA POSITION COURBE/SÉCANTES et le « point d'inflexion ». Les caractérisations
  par « f'' >= 0 » et par « f' croissante », ainsi que la notion de tangente
  au-dessus/en dessous, sont des attendus classiques du chapitre et découlent des
  capacités (« démontrer des inégalités en utilisant la convexité », « lire les
  intervalles où f est convexe ou concave »). Elles ont été ajoutées pour la
  cohérence pédagogique, à VÉRIFIER telles quelles dans le texte officiel.
- Le mot « concave » n'apparaît pas mot pour mot dans les « Contenus » extraits
  mais figure dans les « Capacités attendues » (« intervalles où f est convexe
  ou concave ») : traité en conséquence.
- La fonction exponentielle et le logarithme sont mobilisés dans les exemples
  (inégalités e^x >= 1+x, ln x <= x-1). Vérifier l'ordre de progression : dans ce
  programme, « Compléments sur la dérivation » précède « Fonction logarithme » ;
  l'exemple ln peut donc être déplacé/annoté si le chapitre est étudié avant le
  logarithme. Exponentielle supposée acquise (Première).

POINTS À SOUMETTRE AU RELECTEUR :
- Justesse du sens des inégalités de convexité (sens vérifié une par une).
- Formulation de la définition par sécantes vs. par tangentes (les deux données
  comme équivalentes ; la version tangente est admise ici).
- Prérequis pointant vers contenu/premiere/maths-specialite/derivation/.

Rédaction 100% originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu (relu_par: null).
-->
