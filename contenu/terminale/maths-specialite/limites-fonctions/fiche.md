---
id: tale-spe-math-limites-fonctions
titre: "Limites de fonctions"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 14
prerequis:
  - Dérivation (Première)
  - Fonctions de référence : puissances, racine carrée, exponentielle (Première)
statut: brouillon
relu_par: null
---

# Limites de fonctions

> Étudier une limite, c'est répondre à une seule question : **vers quoi se rapproche
> $f(x)$ quand $x$ file vers un bord de son domaine** — l'infini, ou un point interdit ?
> C'est l'outil qui te dit à quoi ressemble une courbe « tout au bout », là où on ne peut
> plus calculer directement.

---

## 1. Ce qu'est une limite

### Limite en $+\infty$ ou $-\infty$

On regarde le comportement de $f(x)$ quand $x$ devient **arbitrairement grand** (ou
arbitrairement négatif).

- **Limite finie** : $\displaystyle\lim_{x \to +\infty} f(x) = \ell$ signifie que $f(x)$
  se rapproche autant qu'on veut du réel $\ell$ dès que $x$ est assez grand.
- **Limite infinie** : $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ signifie que
  $f(x)$ dépasse n'importe quel seuil $A$ dès que $x$ est assez grand.

> **Exemple.** $\displaystyle\lim_{x \to +\infty} \frac{1}{x} = 0$ (limite finie) et
> $\displaystyle\lim_{x \to +\infty} x^2 = +\infty$ (limite infinie).

### Limite en un point $a$

On regarde $f(x)$ quand $x$ s'approche d'une valeur $a$ **où la fonction n'est souvent pas
définie** (une valeur interdite du domaine).

$$\lim_{x \to a} f(x) = +\infty \quad\text{ou}\quad \lim_{x \to a} f(x) = \ell$$

> **Exemple.** $\displaystyle\lim_{x \to 0^+} \frac{1}{x} = +\infty$ : plus $x$ est petit
> et positif, plus $\dfrac{1}{x}$ explose.

> ⚠️ **La limite à droite ($x \to a^+$) et à gauche ($x \to a^-$) peuvent différer.**
> Pour $\dfrac{1}{x}$ en $0$ : $\displaystyle\lim_{x \to 0^-} \frac{1}{x} = -\infty$ mais
> $\displaystyle\lim_{x \to 0^+} \frac{1}{x} = +\infty$. Il faut préciser le côté.

---

## 2. Le lien asymptote ↔ limite

C'est **le** point central du chapitre : une asymptote parallèle à un axe n'est que la
traduction géométrique d'une limite.

### Asymptote horizontale

$$\boxed{\lim_{x \to +\infty} f(x) = \ell \iff \text{la droite } y = \ell \text{ est asymptote horizontale à la courbe}}$$

(même chose en $-\infty$). La courbe se colle à la droite horizontale $y = \ell$.

> **Exemple.** $f(x) = 2 + \dfrac{1}{x}$ vérifie $\displaystyle\lim_{x \to +\infty} f(x) = 2$.
> La droite $y = 2$ est asymptote horizontale.

### Asymptote verticale

$$\boxed{\lim_{x \to a} f(x) = \pm\infty \iff \text{la droite } x = a \text{ est asymptote verticale à la courbe}}$$

La courbe se colle à la droite verticale $x = a$.

> **Exemple.** $f(x) = \dfrac{1}{x - 3}$ vérifie $\displaystyle\lim_{x \to 3} f(x) = \pm\infty$.
> La droite $x = 3$ est asymptote verticale.

> **À retenir.** Une limite finie **à l'infini** donne une asymptote **horizontale** ;
> une limite infinie **en un point** donne une asymptote **verticale**. Ne pas croiser
> les deux.

---

## 3. Limites des fonctions de référence

Ce sont les briques de base, à connaître **par cœur**.

### Puissances entières $x^n$ ($n \geq 1$)

$$\lim_{x \to +\infty} x^n = +\infty \qquad
\lim_{x \to -\infty} x^n = \begin{cases} +\infty & \text{si } n \text{ pair} \\ -\infty & \text{si } n \text{ impair} \end{cases}$$

$$\lim_{x \to +\infty} \frac{1}{x^n} = 0 \qquad \lim_{x \to 0^+} \frac{1}{x^n} = +\infty$$

> **Exemple.** $\displaystyle\lim_{x \to -\infty} x^3 = -\infty$ (exposant impair) mais
> $\displaystyle\lim_{x \to -\infty} x^2 = +\infty$ (exposant pair).

### Racine carrée

$$\lim_{x \to +\infty} \sqrt{x} = +\infty \qquad \lim_{x \to 0^+} \sqrt{x} = 0$$

### Fonction exponentielle

$$\boxed{\lim_{x \to +\infty} e^x = +\infty \qquad \lim_{x \to -\infty} e^x = 0}$$

> **Exemple.** $\displaystyle\lim_{x \to -\infty} e^x = 0$ : en $-\infty$, l'exponentielle
> s'écrase sur l'axe des abscisses, qui est asymptote horizontale.

---

## 4. Opérations sur les limites

Quand $f$ et $g$ ont chacune une limite, celle de $f+g$, $f\times g$, $\frac{f}{g}$ se
déduit — **sauf** dans quatre cas piégés.

### Somme $f + g$

| $\lim f$ | $\ell$ | $\ell$ | $+\infty$ | $-\infty$ | $+\infty$ |
|---|---|---|---|---|---|
| $\lim g$ | $\ell'$ | $\pm\infty$ | $+\infty$ | $-\infty$ | $-\infty$ |
| $\lim (f+g)$ | $\ell+\ell'$ | $\pm\infty$ | $+\infty$ | $-\infty$ | **F.I.** $\infty-\infty$ |

### Produit $f \times g$

| $\lim f$ | $\ell$ | $\ell \neq 0$ | $\pm\infty$ | $0$ |
|---|---|---|---|---|
| $\lim g$ | $\ell'$ | $\pm\infty$ | $\pm\infty$ | $\pm\infty$ |
| $\lim (f\times g)$ | $\ell\ell'$ | $\pm\infty$ (règle des signes) | $\pm\infty$ (règle des signes) | **F.I.** $0\times\infty$ |

### Quotient $\dfrac{f}{g}$

| $\lim f$ | $\ell$ | $\ell$ | $\pm\infty$ | $0$ |
|---|---|---|---|---|
| $\lim g$ | $\ell' \neq 0$ | $\pm\infty$ | $\ell'$ | $0$ |
| $\lim \frac{f}{g}$ | $\frac{\ell}{\ell'}$ | $0$ | $\pm\infty$ | **F.I.** $\frac{0}{0}$ |

Et $\dfrac{\infty}{\infty}$ est la quatrième forme indéterminée.

---

## 5. Les quatre formes indéterminées

Une **forme indéterminée** (F.I.), c'est une situation où les règles ci-dessus ne
concluent pas : il faut **transformer l'écriture** avant de conclure. Elles portent un nom :

$$\boxed{\infty - \infty \qquad 0 \times \infty \qquad \frac{\infty}{\infty} \qquad \frac{0}{0}}$$

> ⚠️ « Indéterminée » ne veut **pas** dire « pas de limite ». Ça veut dire : sous cette
> forme, on ne peut pas encore répondre. La limite existe peut-être — il faut lever
> l'indétermination.

---

## 6. Méthodes pour lever une indétermination

### Méthode 1 — Factoriser par le terme dominant (polynômes et quotients)

**Un polynôme a, en $\pm\infty$, la même limite que son terme de plus haut degré.**
**Une fonction rationnelle a la même limite que le quotient de ses termes de plus haut degré.**

> **Exemple ($\infty-\infty$).** $\displaystyle\lim_{x \to +\infty} \big(x^2 - 5x\big)$.
> On factorise : $x^2 - 5x = x^2\Big(1 - \dfrac{5}{x}\Big)$. Comme $x^2 \to +\infty$ et
> $1 - \dfrac{5}{x} \to 1$, le produit tend vers $+\infty$.

> **Exemple ($\frac{\infty}{\infty}$).** $\displaystyle\lim_{x \to +\infty} \frac{3x^2+1}{x^2-x}$.
> Termes dominants : $\dfrac{3x^2}{x^2} = 3$. La limite vaut $3$.

### Méthode 2 — Multiplier par la quantité conjuguée (racines)

Utile pour un $\infty - \infty$ contenant une racine.

> **Exemple.** $\displaystyle\lim_{x \to +\infty} \big(\sqrt{x+1} - \sqrt{x}\big)$. On
> multiplie et divise par $\sqrt{x+1}+\sqrt{x}$ :
> $$\sqrt{x+1}-\sqrt{x} = \frac{(x+1)-x}{\sqrt{x+1}+\sqrt{x}} = \frac{1}{\sqrt{x+1}+\sqrt{x}} \xrightarrow[x\to+\infty]{} 0.$$

### Méthode 3 — Simplifier (indétermination $\frac{0}{0}$ en un point)

> **Exemple.** $\displaystyle\lim_{x \to 2} \frac{x^2-4}{x-2}$. Au numérateur $x^2-4=(x-2)(x+2)$,
> donc pour $x \neq 2$ : $\dfrac{x^2-4}{x-2} = x+2 \xrightarrow[x\to 2]{} 4$.

### Méthode 4 — Utiliser une comparaison

Quand on ne sait pas calculer directement, on **encadre** ou on **minore/majore**.

- **Théorème de comparaison.** Si $f(x) \geq g(x)$ près de l'infini et
  $\displaystyle\lim g = +\infty$, alors $\displaystyle\lim f = +\infty$.
- **Théorème des gendarmes.** Si $g(x) \leq f(x) \leq h(x)$ et $g, h$ ont la **même**
  limite finie $\ell$, alors $\displaystyle\lim f = \ell$.

> **Exemple.** $\displaystyle\lim_{x \to +\infty} \big(x + \sin x\big)$. Comme
> $x + \sin x \geq x - 1$ et $x - 1 \to +\infty$, on conclut $x + \sin x \to +\infty$
> par comparaison.

---

## 7. Croissances comparées : l'exponentielle l'emporte

En $+\infty$, l'exponentielle croît **plus vite que n'importe quelle puissance de $x$**.
C'est ce qui lève les indéterminations $\frac{\infty}{\infty}$ ou $0\times\infty$ mêlant
$e^x$ et $x^n$.

$$\boxed{\lim_{x \to +\infty} \frac{e^x}{x^n} = +\infty \qquad \lim_{x \to -\infty} x^n\,e^x = 0}$$

pour tout entier $n \geq 1$. En particulier $\displaystyle\lim_{x \to +\infty} \frac{e^x}{x} = +\infty$.

> **Exemple.** $\displaystyle\lim_{x \to +\infty} \frac{e^x}{x^3}$ est une F.I.
> $\frac{\infty}{\infty}$, mais par croissance comparée elle vaut $+\infty$ :
> l'exponentielle « écrase » le $x^3$.

> **Exemple.** $\displaystyle\lim_{x \to -\infty} x\,e^x$ est une F.I. $0 \times \infty$
> (car $x \to -\infty$ et $e^x \to 0$). Par croissance comparée, elle vaut $0$.

> **Note.** Les croissances comparées avec le **logarithme** sont traitées dans la fiche
> dédiée au logarithme. Ici, on reste sur l'exponentielle et les puissances.

---

## 8. Tableau récapitulatif

| Situation | Résultat clé |
|---|---|
| $\lim_{x\to+\infty} x^n$ | $+\infty$ |
| $\lim_{x\to-\infty} x^n$ | $+\infty$ si $n$ pair, $-\infty$ si $n$ impair |
| $\lim_{x\to+\infty} \frac{1}{x^n}$ | $0$ |
| $\lim_{x\to+\infty} e^x$ / $\lim_{x\to-\infty} e^x$ | $+\infty$ / $0$ |
| $\lim_{x\to+\infty} \sqrt{x}$ | $+\infty$ |
| Les 4 F.I. | $\infty-\infty$, $\;0\times\infty$, $\;\frac{\infty}{\infty}$, $\;\frac{0}{0}$ |
| Polynôme en $\pm\infty$ | limite du terme de plus haut degré |
| Fonction rationnelle en $\pm\infty$ | limite du quotient des termes de plus haut degré |
| Croissance comparée | $\frac{e^x}{x^n}\to+\infty$, $\;x^n e^x\to 0$ |
| Limite finie $\ell$ en $\pm\infty$ | asymptote **horizontale** $y=\ell$ |
| Limite infinie en $a$ | asymptote **verticale** $x=a$ |

---

## 9. Les erreurs qui coûtent des points

1. **Conclure sur une forme indéterminée sans la lever.** Écrire « $\infty-\infty=0$ »
   est faux : il faut transformer l'expression d'abord.
2. **Oublier de préciser le côté** ($x\to a^+$ ou $x\to a^-$) quand la limite en un point
   est infinie : les deux côtés peuvent donner $+\infty$ et $-\infty$.
3. **Confondre asymptote horizontale et verticale** : limite finie à l'infini →
   horizontale ; limite infinie en un point → verticale.
4. **Se tromper de signe en $-\infty$ pour $x^n$** : le résultat dépend de la parité de $n$.
5. **Croire qu'un polynôme dominé par un degré inférieur change la limite** : en $\pm\infty$,
   seul le terme de plus haut degré compte.
6. **Inverser la croissance comparée** : c'est $e^x$ qui l'emporte sur $x^n$, jamais
   l'inverse. $\frac{e^x}{x^n}\to+\infty$, pas $0$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : docs/programme-terminale-specialite-maths-2027.txt, section « ANALYSE —
LIMITES DES FONCTIONS » (lignes 151 à 165), rubriques « Contenus » et « Capacités
attendues ». En-tête de provenance du fichier lu (lignes 1 à 20).

⚠️ MENTION OBLIGATOIRE 1 — PROVENANCE DE LA SOURCE : le fichier programme n'a PAS été
produit par la chaîne d'extraction habituelle. Son texte a été reconstitué via WebFetch
depuis un miroir (xm1math.net), sous-section par sous-section. Cette extraction DOIT être
confrontée au PDF officiel (education.gouv.fr / éduscol) avant toute publication. La
reproduction n'est pas garantie exhaustive.

⚠️ MENTION OBLIGATOIRE 2 — CHAPITRE DE TERMINALE / PROGRAMME 2027 : ce chapitre de
Terminale a été produit sur le programme de la rentrée 2027 À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md, §6) porte l'avertissement « Ne rien
écrire pour la Terminale avant 2027 : son programme change à la rentrée 2027-2028 ». La
date du jour étant 2026-08-13, ce contenu anticipe donc la mise en œuvre. À faire trancher
par le relecteur / responsable projet : opportunité de produire ce chapitre maintenant.

Éléments explicitement lisibles dans l'extraction du programme :
- « Limite finie ou infinie d'une fonction en +∞, en –∞, en un point. Asymptote
  parallèle à un axe de coordonnées. » → sections 1 et 2.
- « Limites faisant intervenir les fonctions de référence de première : puissances
  entières, racine carrée, fonction exponentielle. » → section 3.
- « Limites et comparaison. » → section 6, méthode 4 (comparaison, gendarmes).
- « Opérations sur les limites. » → section 4.
- « Déterminer [...] la limite [...] en utilisant les limites usuelles, les croissances
  comparées. » → sections 3 et 7.
- « Faire le lien entre l'existence d'une asymptote parallèle à un axe et celle de la
  limite correspondante. » → section 2 (lien asymptote ↔ limite, rendu explicite).

Points de PÉRIMÈTRE / à confronter au PDF officiel par un professeur :
- Les 4 formes indéterminées et les techniques de levée (facteur dominant, conjugué,
  simplification) ne sont pas nommées telles quelles dans l'extraction « Contenus » ;
  elles découlent de « Opérations sur les limites » et sont un standard du niveau. La
  consigne utilisateur demande explicitement de les nommer (∞−∞, 0×∞, ∞/∞, 0/0). À
  valider comme conforme à l'esprit du programme.
- Le théorème des gendarmes est nommé dans la section SUITES du programme, pas dans
  LIMITES DES FONCTIONS ; je l'ai transposé aux fonctions au titre de « Limites et
  comparaison ». À confirmer.
- Croissances comparées AVEC LOGARITHME volontairement EXCLUES ici (elles relèvent de la
  fiche logarithme, où le programme place la « croissance comparée du logarithme et de
  x↦xⁿ »). Ici : exponentielle / puissances uniquement, conformément à la consigne.
- Asymptotes obliques NON traitées : le programme ne mentionne que les asymptotes
  « parallèles à un axe ».

Prérequis retenus : dérivation et fonctions de référence de Première (puissances, racine,
exponentielle), conformément à la consigne.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
