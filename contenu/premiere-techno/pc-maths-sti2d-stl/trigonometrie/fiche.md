---
id: 1sti2d-trigonometrie
titre: "Trigonométrie et fonctions sinusoïdales"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 14
prerequis:
  - Cosinus et sinus dans le triangle rectangle (collège)
  - Cercle et repérage (Seconde)
statut: brouillon
relu_par: null
---

# Trigonométrie et fonctions sinusoïdales

> Ce chapitre a une finalité directement technique : décrire un **signal
> périodique**. Une tension alternative, une onde sonore, une vibration mécanique
> s'écrivent toutes sous la forme $t \mapsto A\cos(\omega t + \varphi)$. Amplitude,
> période, phase — trois paramètres, et tout le reste en découle.

---

## 1. Le radian et le cercle trigonométrique

Le **cercle trigonométrique** a pour centre l'origine et pour rayon $1$. Il est
**orienté** : le sens positif est l'inverse des aiguilles d'une montre.

Le **radian** mesure un angle par la longueur d'arc qu'il intercepte sur ce cercle.

$$\pi \text{ rad} = 180°$$

| Degrés | $0$ | $30$ | $45$ | $60$ | $90$ | $180$ | $360$ |
|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $2\pi$ |

### Conversions

$$\text{radians} = \text{degrés} \times \frac{\pi}{180}
\qquad\qquad
\text{degrés} = \text{radians} \times \frac{180}{\pi}$$

---

## 2. Cosinus et sinus d'un réel

Au réel $x$ correspond un point $\mathrm{M}$ du cercle, tel que

$$\boxed{\mathrm{M}\left(\cos x\,;\,\sin x\right)}$$

Le **cosinus est l'abscisse**, le **sinus est l'ordonnée**.

$$-1 \leqslant \cos x \leqslant 1 \qquad\qquad \boxed{\cos^2 x + \sin^2 x = 1}$$

### Valeurs remarquables

| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| $\cos x$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\sin x$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |

> **Moyen de retenir** : écris $\sqrt0, \sqrt1, \sqrt2, \sqrt3, \sqrt4$ divisés par $2$
> — c'est la ligne du **sinus**. Celle du cosinus est la même, lue à l'envers.

---

## 3. Les fonctions cosinus et sinus

| | $\cos$ | $\sin$ |
|---|---|---|
| Ensemble de définition | $\mathbb{R}$ | $\mathbb{R}$ |
| **Périodicité** | $2\pi$ | $2\pi$ |
| **Parité** | **paire** : $\cos(-x) = \cos x$ | **impaire** : $\sin(-x) = -\sin x$ |
| Valeurs | entre $-1$ et $1$ | entre $-1$ et $1$ |

### Variations sur une période

Sur $[0\,;\pi]$, le cosinus **décroît** de $1$ à $-1$.
Sur $\left[-\dfrac{\pi}{2}\,;\dfrac{\pi}{2}\right]$, le sinus **croît** de $-1$ à $1$.

> **Conséquence de la parité** : la courbe du cosinus est symétrique par rapport à
> l'axe des ordonnées ; celle du sinus, par rapport à l'origine.

---

## 4. Angles associés

Ces relations se **lisent sur le cercle**, par symétrie — il est inutile de les
apprendre par cœur.

| Angle | $\cos$ | $\sin$ | Symétrie |
|---|---|---|---|
| $-x$ | $\cos x$ | $-\sin x$ | axe des abscisses |
| $\pi - x$ | $-\cos x$ | $\sin x$ | axe des ordonnées |
| $\pi + x$ | $-\cos x$ | $-\sin x$ | centre $\mathrm{O}$ |
| $\dfrac{\pi}{2} - x$ | $\sin x$ | $\cos x$ | première bissectrice |
| $\dfrac{\pi}{2} + x$ | $-\sin x$ | $\cos x$ | — |

---

## 5. Résoudre $\cos x = a$ et $\sin x = a$

**Méthode** : placer la valeur $a$ sur l'axe concerné, tracer la perpendiculaire, lire
les points d'intersection avec le cercle.

- $\cos x = a$ → lire sur l'axe des **abscisses**
- $\sin x = a$ → lire sur l'axe des **ordonnées**

> **Exemple.** $\cos x = \dfrac{1}{2}$ sur $[0\,;2\pi[$ : les solutions sont
> $\dfrac{\pi}{3}$ et $\dfrac{5\pi}{3}$ — deux points symétriques par rapport à l'axe
> des abscisses.

> ⚠️ Si $a > 1$ ou $a < -1$, il n'y a **aucune** solution.
> Et sur $\mathbb{R}$, il y a une **infinité** de solutions : ne pas oublier le
> « $+\,2k\pi$ ».

---

## 6. Fonctions sinusoïdales — le cœur du chapitre

$$\boxed{f(t) = A\cos(\omega t + \varphi)}$$

C'est le modèle de tout **signal périodique** : tension alternative, onde sonore,
oscillation mécanique.

| Paramètre | Nom | Effet |
|---|---|---|
| $A$ | **amplitude** | valeur maximale atteinte ; le signal varie entre $-A$ et $A$ |
| $\omega$ | **pulsation** (rad·s⁻¹) | gouverne la **rapidité** des oscillations |
| $\varphi$ | **phase à l'origine** (rad) | **décale** la courbe horizontalement |

### Période et fréquence

$$\boxed{T = \frac{2\pi}{\omega}} \qquad\qquad \boxed{f = \frac{1}{T} = \frac{\omega}{2\pi}}$$

| Grandeur | Unité |
|---|---|
| Période $T$ | seconde (s) |
| Fréquence $f$ | hertz (Hz) |
| Pulsation $\omega$ | radian par seconde (rad·s⁻¹) |

> **Exemple — le secteur électrique.** La tension du réseau vaut
> $u(t) = 325\cos(100\pi\,t)$.
>
> - amplitude $A = 325$ V
> - pulsation $\omega = 100\pi$ rad·s⁻¹
> - période $T = \dfrac{2\pi}{100\pi} = 0{,}02$ s
> - fréquence $f = 50$ Hz ✓

> ⚠️ **La pulsation n'est pas la fréquence.** $\omega = 2\pi f$ : un facteur $2\pi$
> les sépare. Les confondre fausse tout calcul de période.

---

## 7. À retenir absolument

| | |
|---|---|
| $\pi$ rad | $180°$ |
| Point du cercle | $\mathrm{M}(\cos x\,;\sin x)$ |
| Relation fondamentale | $\cos^2 x + \sin^2 x = 1$ |
| Parité | $\cos$ paire, $\sin$ impaire |
| Période des deux | $2\pi$ |
| Signal sinusoïdal | $A\cos(\omega t + \varphi)$ |
| Période | $T = \dfrac{2\pi}{\omega}$ |
| Fréquence | $f = \dfrac{1}{T} = \dfrac{\omega}{2\pi}$ |

---

## 8. Les erreurs qui coûtent des points

1. **Travailler en degrés sur la calculatrice.** En trigonométrie, on est en radians :
   vérifie le mode avant tout calcul.
2. **Confondre pulsation et fréquence** : $\omega = 2\pi f$.
3. **Écrire $T = \dfrac{\omega}{2\pi}$** au lieu de $\dfrac{2\pi}{\omega}$.
4. **Chercher $x$ tel que $\cos x = 2$** : impossible, le cosinus reste entre $-1$ et $1$.
5. **Oublier le « $+\,2k\pi$ »** dans les solutions sur $\mathbb{R}$.
6. **Confondre abscisse et ordonnée** : $\cos$ est l'abscisse.
7. **Croire que la phase $\varphi$ change l'amplitude** : elle ne fait que décaler la
   courbe horizontalement.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
mathématiques », section « Géométrie dans le plan — Trigonométrie ».

Contenus explicitement lisibles dans l'extraction : « Cercle trigonométrique,
radian », « Fonctions circulaires sinus et cosinus : périodicité, variations,
parité. Valeurs remarquables en 0, [π/6, π/4, π/3, π/2] », et surtout
« Fonctions t ↦ A cos(ωt + φ) et t ↦ A sin(ωt + φ) : amplitude, périodicité, phase à
[l'origine] » — c'est ce dernier point qui distingue ce programme de celui de la voie
générale, et la section 6 lui est consacrée.

Capacités attendues lisibles : « Effectuer des conversions de degré en radian, de
radian en degré », « Résoudre, par lecture sur le cercle trigonométrique, des
équations du type cos(x) = a et sin(x) = a », « Connaître et utiliser les relations
entre sinus et cosinus des angles associés : −x ; π−x ; π+x ; π/2−x ; π/2+x ».
La liste des angles associés de la section 4 suit exactement cette énumération.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La DÉRIVÉE des fonctions sinus et cosinus est-elle au programme de première ici ?
  Je ne l'ai PAS traitée — le programme comporte une section « Analyse — Dérivées »
  distincte dont l'extraction est trop dégradée pour trancher.
- La représentation graphique des fonctions sinusoïdales (tracé complet avec
  décalage de phase) est-elle exigible, ou seulement la lecture des paramètres ?
- L'exemple du réseau électrique (325 V, 50 Hz) est un choix personnel : vérifier
  qu'il correspond aux contextes visés par le programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
