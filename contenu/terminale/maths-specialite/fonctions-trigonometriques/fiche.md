---
id: tale-spe-math-fonctions-trigonometriques
titre: "Fonctions sinus et cosinus"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 13
prerequis:
  - Trigonométrie et cercle trigonométrique (Première spécialité)
  - Dérivation et sens de variation (Première spécialité)
  - Composée de fonctions et dérivée de la composée (Terminale spécialité)
statut: brouillon
relu_par: null
---

# Fonctions sinus et cosinus

<!-- schema:auto -->
![Cercle trigonométrique : cosinus sur l’axe des abscisses, sinus sur l’axe des ordonnées.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjAgMzQwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM2MCIgaGVpZ2h0PSIzNDAiIGZpbGw9IiNmZmZmZmYiLz48bGluZSB4MT0iMjUiIHkxPSIxNzUiIHgyPSIzMjUiIHkyPSIxNzUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48bGluZSB4MT0iMTc1IiB5MT0iMzI1IiB4Mj0iMTc1IiB5Mj0iMjUiIHN0cm9rZT0iIzhhOTlhOCIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48Y2lyY2xlIGN4PSIxNzUiIGN5PSIxNzUiIHI9IjEzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjQ5LjU2IiB5MT0iNjguNTEiIHgyPSIyNDkuNTYiIHkyPSIxNzUiIHN0cm9rZT0iIzViNmI3YSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPjxsaW5lIHgxPSIxNzUiIHkxPSIxNzUiIHgyPSIyNDkuNTYiIHkyPSIxNzUiIHN0cm9rZT0iI2MwMmEyYSIgc3Ryb2tlLXdpZHRoPSIzLjQiLz48bGluZSB4MT0iMjQ5LjU2IiB5MT0iMTc1IiB4Mj0iMjQ5LjU2IiB5Mj0iNjguNTEiIHN0cm9rZT0iIzFhN2Y0YiIgc3Ryb2tlLXdpZHRoPSIzLjQiLz48bGluZSB4MT0iMTc1IiB5MT0iMTc1IiB4Mj0iMjQ5LjU2IiB5Mj0iNjguNTEiIHN0cm9rZT0iIzFmNmZlYiIgc3Ryb2tlLXdpZHRoPSIyLjYiLz48Y2lyY2xlIGN4PSIyNDkuNTYiIGN5PSI2OC41MSIgcj0iNC41IiBmaWxsPSIjMWY2ZmViIi8+PHRleHQgeD0iMjU3LjU2IiB5PSI2Mi41MTAwMDAwMDAwMDAwMDUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxZjZmZWIiPk08L3RleHQ+PHBhdGggZD0iTSAyMDkgMTc1IEEgMzQgMzQgMCAwIDAgMTk0LjUgMTQ3LjE1IiBmaWxsPSJub25lIiBzdHJva2U9IiMxNjIzMmUiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHRleHQgeD0iMjE3IiB5PSIxNjEiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxNjIzMmUiPs6xPC90ZXh0Pjx0ZXh0IHg9IjIxMi4yOCIgeT0iMTkzIiBmb250LXNpemU9IjE0IiBmaWxsPSIjYzAyYTJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5jb3MgzrE8L3RleHQ+PHRleHQgeD0iMjU3LjU2IiB5PSIxMjUuNzYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMxYTdmNGIiPnNpbiDOsTwvdGV4dD48dGV4dCB4PSIzMTEiIHk9IjE5MSIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzViNmI3YSI+MTwvdGV4dD48dGV4dCB4PSIxNjEiIHk9IjQxIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNWI2YjdhIj4xPC90ZXh0Pjwvc3ZnPg==)


> Sur le cercle trigonométrique, un point tourne. Son **ordonnée**, c'est $\sin$ ;
> son **abscisse**, c'est $\cos$. Les deux courbes que tu vas étudier ne sont rien
> d'autre que la trace de ce mouvement : elles montent, redescendent, et
> **recommencent à l'identique** tous les tours.

---

## 1. Définitions

À tout réel $x$, on associe le point $M$ du cercle trigonométrique tel que $x$ soit
une mesure (en radians) de l'angle orienté $\left(\vec{i}, \vec{OM}\right)$.

$$\boxed{\cos(x) = \text{abscisse de } M \qquad \sin(x) = \text{ordonnée de } M}$$

Les fonctions $\sin$ et $\cos$ sont définies **sur $\mathbb{R}$ tout entier** : tout
réel est la mesure d'un angle.

> **Encadrement fondamental.** Comme $M$ est sur le cercle de rayon $1$, ses
> coordonnées restent entre $-1$ et $1$ :
> $$-1 \leqslant \cos(x) \leqslant 1 \qquad\qquad -1 \leqslant \sin(x) \leqslant 1$$

> **Relation de Pythagore.** Pour tout réel $x$ :
> $$\cos^2(x) + \sin^2(x) = 1$$
> Elle vient du théorème de Pythagore dans le triangle $O$, $M$, projeté de $M$.

---

## 2. Parité

- $\cos$ est **paire** : sa courbe est symétrique par rapport à l'axe des ordonnées.
- $\sin$ est **impaire** : sa courbe est symétrique par rapport à l'origine.

$$\boxed{\cos(-x) = \cos(x) \qquad\qquad \sin(-x) = -\sin(x)}$$

> **Exemple.** $\cos\!\left(-\dfrac{\pi}{3}\right) = \cos\!\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$,
> tandis que $\sin\!\left(-\dfrac{\pi}{3}\right) = -\sin\!\left(\dfrac{\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}$.
>
> Sur le cercle : les points d'angles $x$ et $-x$ sont **symétriques par rapport à
> l'axe horizontal**. Ils ont la même abscisse (d'où $\cos$ paire) et des ordonnées
> opposées (d'où $\sin$ impaire).

---

## 3. Périodicité

Faire un tour complet, c'est ajouter $2\pi$ à l'angle : on retombe sur le même point.
Les deux fonctions sont donc **périodiques de période $2\pi$**.

$$\boxed{\cos(x + 2\pi) = \cos(x) \qquad\qquad \sin(x + 2\pi) = \sin(x)}$$

> **Exemple.** $\cos\!\left(\dfrac{7\pi}{3}\right) = \cos\!\left(\dfrac{\pi}{3} + 2\pi\right)
> = \cos\!\left(\dfrac{\pi}{3}\right) = \dfrac{1}{2}$.

**Ce que ça change.** Il suffit d'étudier $\sin$ et $\cos$ sur **un seul intervalle
de longueur $2\pi$** (par exemple $[-\pi\,;\,\pi]$). La courbe se répète ensuite à
l'identique par translations de vecteur $2\pi\,\vec{i}$.

> **Décalage entre les deux courbes.** Elles se déduisent l'une de l'autre :
> $$\cos(x) = \sin\!\left(x + \dfrac{\pi}{2}\right) \qquad \sin(x) = \cos\!\left(x - \dfrac{\pi}{2}\right)$$
> La courbe de $\sin$ est celle de $\cos$ décalée de $\dfrac{\pi}{2}$ vers la droite.

---

## 4. Limites en 0 (le cœur des dérivées)

Deux limites, à connaître, servent à dériver $\sin$ et $\cos$ :

$$\boxed{\lim_{x \to 0} \dfrac{\sin(x)}{x} = 1 \qquad\qquad \lim_{x \to 0} \dfrac{\cos(x) - 1}{x} = 0}$$

> **Lecture.** La première dit que, près de $0$, $\sin(x)$ se comporte comme $x$
> : $\sin(0{,}01) \approx 0{,}01$. C'est exactement le taux d'accroissement de $\sin$
> en $0$, donc $\sin'(0) = 1$ — la pente de la courbe de $\sin$ à l'origine vaut $1$.

---

## 5. Dérivées

Les fonctions $\sin$ et $\cos$ sont **dérivables sur $\mathbb{R}$**, et :

$$\boxed{\sin'(x) = \cos(x) \qquad\qquad \cos'(x) = -\sin(x)}$$

> **Attention au signe.** Dériver $\cos$ fait apparaître un $-\sin$. C'est la faute
> la plus courante : on oublie le signe moins.

> **Exemple.** La dérivée de $f(x) = 3\sin(x) - 2\cos(x)$ est
> $f'(x) = 3\cos(x) + 2\sin(x)$.

### Cas d'une composée : $\sin(ax+b)$ et $\cos(ax+b)$

Dès qu'il y a un $ax+b$ à l'intérieur, ce n'est plus $\sin$ « nu » : c'est une
**composée**. On applique $(v \circ u)' = (v' \circ u)\times u'$ avec $u(x)=ax+b$,
donc $u'(x)=a$ :

$$\boxed{\big(\sin(ax+b)\big)' = a\cos(ax+b) \qquad \big(\cos(ax+b)\big)' = -a\sin(ax+b)}$$

> **Exemple.** $\big(\sin(3x)\big)' = 3\cos(3x)$, et non $\cos(3x)$.
> Le facteur $a=3$ vient de la dérivée de l'intérieur $u(x)=3x$.
>
> Autre : $\big(\cos(2x - 1)\big)' = -2\sin(2x-1)$.

---

## 6. Variations sur une période

On lit tout sur le cercle. Sur une période $[0\,;\,2\pi]$ :

**Cosinus** (abscisse du point) : le point part de la droite, monte à gauche…
l'abscisse **décroît** puis **croît**.

| $x$ | $0$ | | $\pi$ | | $2\pi$ |
|---|---|---|---|---|---|
| $\cos(x)$ | $1$ | $\searrow$ | $-1$ | $\nearrow$ | $1$ |

**Sinus** (ordonnée du point) : sur $\left[-\dfrac{\pi}{2}\,;\,\dfrac{\pi}{2}\right]$
l'ordonnée croît de $-1$ à $1$, puis décroît.

| $x$ | $-\dfrac{\pi}{2}$ | | $\dfrac{\pi}{2}$ | | $\dfrac{3\pi}{2}$ |
|---|---|---|---|---|---|
| $\sin(x)$ | $-1$ | $\nearrow$ | $1$ | $\searrow$ | $-1$ |

> **On retrouve les signes des dérivées.** $\cos$ décroît sur $[0\,;\,\pi]$ : c'est
> normal, $\cos'(x)=-\sin(x)$ y est négatif car $\sin(x)\geqslant 0$ sur $[0\,;\,\pi]$.

---

## 7. Méthodes

### Résoudre $\cos(x) = a$ sur $[-\pi\,;\,\pi]$

1. Si $a < -1$ ou $a > 1$ : **aucune solution** (le cosinus ne sort pas de $[-1\,;\,1]$).
2. Sinon, on cherche l'angle « de référence » $\alpha \in [0\,;\,\pi]$ tel que
   $\cos(\alpha) = a$.
3. Par **parité** du cosinus, $\cos(-\alpha)=a$ aussi. Les solutions sont donc :
   $$x = \alpha \qquad \text{et} \qquad x = -\alpha$$

> **Exemple.** Résoudre $\cos(x) = \dfrac{1}{2}$ sur $[-\pi\,;\,\pi]$.
> On sait que $\cos\!\left(\dfrac{\pi}{3}\right)=\dfrac{1}{2}$, donc $\alpha=\dfrac{\pi}{3}$.
> Les solutions sont $x = \dfrac{\pi}{3}$ et $x = -\dfrac{\pi}{3}$.

### Résoudre l'inéquation $\cos(x) \leqslant a$ sur $[-\pi\,;\,\pi]$

On repère d'abord les solutions de l'égalité, $-\alpha$ et $\alpha$. Comme $\cos$
**décroît** sur $[0\,;\,\pi]$, $\cos(x)\leqslant a$ correspond aux $x$ **éloignés de
$0$**, c'est-à-dire aux deux bords de l'intervalle :

$$\cos(x)\leqslant a \iff x \in [-\pi\,;\,-\alpha] \cup [\alpha\,;\,\pi]$$

> **Exemple.** $\cos(x) \leqslant \dfrac{1}{2}$ sur $[-\pi\,;\,\pi]$ : avec
> $\alpha = \dfrac{\pi}{3}$, l'ensemble des solutions est
> $\left[-\pi\,;\,-\dfrac{\pi}{3}\right] \cup \left[\dfrac{\pi}{3}\,;\,\pi\right]$.
>
> *Vérifie sur le cercle* : $\cos$ est petit quand le point est **à gauche**, donc
> vers $x=\pi$ et $x=-\pi$. Cohérent.

### Étudier une fonction définie à partir de $\sin$ et $\cos$

Même méthode que pour n'importe quelle fonction : on **dérive**, on étudie le
**signe de la dérivée**, on en déduit les variations et l'optimum.

> **Exemple.** Soit $f(x) = \sin(x) + \cos(x)$ sur $[0\,;\,2\pi]$.
>
> 1. $f'(x) = \cos(x) - \sin(x)$.
> 2. $f'(x) = 0 \iff \cos(x) = \sin(x) \iff x = \dfrac{\pi}{4}$ ou $x = \dfrac{5\pi}{4}$.
> 3. $f'$ est positive sur $\left[0\,;\,\dfrac{\pi}{4}\right]$, négative ensuite jusqu'à
>    $\dfrac{5\pi}{4}$, puis de nouveau positive.
> 4. **Maximum** en $\dfrac{\pi}{4}$ : $f\!\left(\dfrac{\pi}{4}\right)=\dfrac{\sqrt2}{2}+\dfrac{\sqrt2}{2}=\sqrt2$.
>    **Minimum** en $\dfrac{5\pi}{4}$ : $f\!\left(\dfrac{5\pi}{4}\right)=-\sqrt2$.

---

## 8. Cas particuliers et pièges de calcul

- **$\sin$ et $\cos$ ne dépassent jamais $1$ en valeur absolue.** Une équation
  $\cos(x)=3$ n'a **aucune** solution — inutile de chercher.
- **Le facteur de la composée.** $\big(\cos(5x)\big)'=-5\sin(5x)$ : le $5$ ne
  disparaît pas, il **multiplie**. Oublier $a$ est l'erreur type sur $\sin(ax+b)$.
- **Radians, pas degrés.** Toutes ces formules (dérivées, limites) ne sont vraies
  qu'**en radians**. En degrés, $\lim \frac{\sin x}{x} \neq 1$.
- **Deux solutions, pas une**, pour $\cos(x)=a$ sur $[-\pi\,;\,\pi]$ quand
  $-1<a<1$ : ne garde jamais seulement $\alpha$ en oubliant $-\alpha$.

---

## 9. Tableau récapitulatif

| | Sinus | Cosinus |
|---|---|---|
| Ensemble de définition | $\mathbb{R}$ | $\mathbb{R}$ |
| Encadrement | $-1 \leqslant \sin x \leqslant 1$ | $-1 \leqslant \cos x \leqslant 1$ |
| Parité | **impaire** : $\sin(-x)=-\sin x$ | **paire** : $\cos(-x)=\cos x$ |
| Symétrie de la courbe | par rapport à l'origine | par rapport à l'axe $Oy$ |
| Période | $2\pi$ | $2\pi$ |
| Dérivée | $\sin' = \cos$ | $\cos' = -\sin$ |
| Dérivée de la composée | $(\sin(ax+b))'=a\cos(ax+b)$ | $(\cos(ax+b))'=-a\sin(ax+b)$ |
| Limite utile en $0$ | $\dfrac{\sin x}{x}\to 1$ | $\dfrac{\cos x-1}{x}\to 0$ |

---

## 10. Les erreurs qui coûtent des points

1. **Oublier le signe moins de $\cos'$.** $\cos'(x) = -\sin(x)$, jamais $+\sin(x)$.
2. **Dériver $\sin(ax+b)$ comme $\sin$ tout seul.** C'est une composée :
   $\big(\sin(3x)\big)' = 3\cos(3x)$, **pas** $\cos(3x)$. Le facteur $a$ manque.
3. **Confondre parité de $\sin$ et de $\cos$.** C'est $\cos$ qui est paire, $\sin$ qui
   est impaire — l'inverse de ce que beaucoup retiennent.
4. **Ne donner qu'une solution** à $\cos(x)=a$ sur $[-\pi\,;\,\pi]$ : il y en a
   **deux**, $\alpha$ et $-\alpha$.
5. **Se tromper de sens pour $\cos(x)\leqslant a$** : les solutions sont aux **bords**
   $[-\pi\,;-\alpha]\cup[\alpha\,;\pi]$, pas au centre.
6. **Travailler en degrés.** Les dérivées et la limite $\frac{\sin x}{x}\to 1$ ne
   valent qu'en **radians**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : docs/programme-terminale-specialite-maths-2027.txt, section
« ANALYSE — FONCTIONS SINUS ET COSINUS » (lignes 222 à 237).
⚠️ Cette source est une EXTRACTION via WebFetch (miroir xm1math.net du PDF), et NON
le PDF officiel : voir l'en-tête de provenance du fichier (lignes 1 à 20). Elle doit
être CONFRONTÉE AU PDF OFFICIEL (education.gouv.fr / éduscol) avant toute publication,
au même titre que la relecture par un professeur.

CONTEXTE DE COMMANDE : chapitre de TERMINALE produit sur le programme de la RENTRÉE
2027, À LA DEMANDE EXPLICITE DE L'UTILISATEUR. Le gabarit (docs/gabarit-chapitre.md,
§6) recommandait de « ne rien écrire pour la Terminale avant 2027 » car le programme
changeait ; le programme 2027 étant désormais publié et le chapitre explicitement
demandé, la production est faite en connaissance de cette consigne. À SOULIGNER AU
RELECTEUR.

Éléments explicitement lisibles dans l'extraction du programme :
- « Fonctions trigonométriques sinus et cosinus. Parité, périodicité. Courbes
  représentatives. » -> sections 1, 2, 3.
- « Dérivées, variations. » -> sections 5, 6.
- « Lier la représentation graphique [...] et le cercle trigonométrique. » -> sections
  1 et 6 (lecture des variations sur le cercle).
- « Traduire graphiquement la parité et la périodicité. » -> sections 2, 3.
- « Résoudre une équation du type cos(x)=a, une inéquation de la forme cos(x) ⩽ a sur
  [−π, π]. » -> section 7 (méthodes).
- « [...] étudier une fonction simple définie à partir de fonctions trigonométriques,
  pour déterminer des variations, un optimum. » -> section 7, exemple f=sin+cos.

CHOIX DE RÉDACTION À CONFRONTER AU PROGRAMME / SOUMETTRE AU RELECTEUR :
- Les limites lim sin(x)/x = 1 et lim (cos x −1)/x = 0 (section 4) ne sont pas citées
  explicitement dans l'extraction, mais sont le support usuel de « Dérivées » et sont
  demandées par l'utilisateur. Vérifier leur statut (exigible / admis / démonstration)
  dans le préambule du PDF officiel, non repris par l'extraction.
- La dérivée de la composée sin(ax+b) / cos(ax+b) (section 5) s'appuie sur le chapitre
  « Compléments sur la dérivation » (composée) — prérequis Terminale supposé traité
  avant. Confirmer l'ordre de progression retenu par l'établissement.
- Prérequis « Trigonométrie (Première spécialité) » pointant vers
  contenu/premiere/maths-specialite/trigonometrie/ : lien à vérifier une fois ce
  chapitre stabilisé.
- Convention d'intervalle des tableaux de variation ([0;2π] pour cos, [−π/2;3π/2] pour
  sin) : choix pédagogique, à valider.

Rédaction 100 % originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu (statut/relu_par inchangés, conformément à la règle du projet).
-->
