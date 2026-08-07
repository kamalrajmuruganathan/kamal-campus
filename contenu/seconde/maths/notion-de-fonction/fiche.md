---
id: 2nde-math-notion-de-fonction
titre: "Notion de fonction"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Repérage dans le plan (cycle 4)
  - Calcul littéral (Seconde)
statut: brouillon
relu_par: null
---

# Notion de fonction

> C'est le concept le plus important de tout le lycée. Une fonction est une **machine** : on
> entre un nombre, elle en renvoie **un seul**. Toute la suite — dérivation, exponentielle,
> suites — repose sur cette idée.

---

## 1. Définition et vocabulaire

### Définition

Une **fonction** $f$ définie sur un ensemble $D$ associe à **chaque** nombre $x$ de $D$
**un unique** nombre, noté $f(x)$.

$$f : x \longmapsto f(x)$$

| Terme | Sens |
|---|---|
| $D$ | **ensemble de définition** — les valeurs autorisées en entrée |
| $x$ | la variable, ou **antécédent** |
| $f(x)$ | l'**image** de $x$ par $f$ |

> ⚠️ **Le mot « unique » est essentiel.** Un nombre a **une seule** image. En revanche, un
> nombre peut avoir **plusieurs antécédents**, ou aucun.

> **Exemple.** Pour $f(x) = x^2$ : l'image de $-3$ est $9$. Mais $9$ a **deux** antécédents,
> $3$ et $-3$. Et $-4$ n'en a aucun.

---

## 2. Ensemble de définition

C'est l'ensemble des valeurs pour lesquelles le calcul est **possible**. Deux interdits en
Seconde :

| Interdit | Conséquence |
|---|---|
| Diviser par zéro | le dénominateur doit être non nul |
| Racine carrée d'un négatif | l'expression sous la racine doit être $\geqslant 0$ |

> **Exemple.** $f(x) = \dfrac{1}{x - 2}$ est définie sur $\mathbb{R} \setminus \{2\}$,
> c'est-à-dire $]-\infty\,;2[\ \cup\ ]2\,;+\infty[$.

> **Exemple.** $g(x) = \sqrt{x-5}$ exige $x - 5 \geqslant 0$, donc $D = [5\,;+\infty[$.

---

## 3. Les quatre représentations d'une fonction

Une même fonction peut se donner de quatre façons — savoir passer de l'une à l'autre est une
capacité attendue.

| Représentation | Forme |
|---|---|
| **Formule** | $f(x) = 2x + 1$ |
| **Tableau de valeurs** | deux lignes, $x$ et $f(x)$ |
| **Courbe** | l'ensemble des points $(x\,;f(x))$ |
| **Programme de calcul** | « prendre un nombre, le doubler, ajouter 1 » |

---

## 4. Lire une courbe

### Image et antécédents

- **Image de $a$** : on part de $a$ sur l'axe des abscisses, on monte jusqu'à la courbe,
  on lit sur l'axe des ordonnées → une **seule** valeur
- **Antécédents de $b$** : on part de $b$ sur l'axe des ordonnées, on trace l'horizontale,
  on lit **toutes** les abscisses des points d'intersection → **zéro, un ou plusieurs**

### Le test de la verticale

Une courbe représente une fonction si et seulement si **toute droite verticale** la coupe
en **un point au plus**. Un cercle n'est donc pas la courbe d'une fonction.

### Résoudre graphiquement

| Question | Lecture |
|---|---|
| $f(x) = k$ | abscisses des points d'intersection avec la droite $y = k$ |
| $f(x) > k$ | abscisses des points où la courbe est **au-dessus** de $y = k$ |
| $f(x) = g(x)$ | abscisses des points d'intersection des deux courbes |

---

## 5. Variations

$f$ est **croissante** sur un intervalle $I$ lorsque l'ordre est conservé :

$$\text{si } a \leqslant b \text{ alors } f(a) \leqslant f(b)$$

$f$ est **décroissante** lorsque l'ordre est inversé : $a \leqslant b$ entraîne
$f(a) \geqslant f(b)$.

Le **tableau de variations** résume ces informations avec des flèches.

### Extrémums

- **Maximum** sur $I$ : la plus grande valeur atteinte par $f$ sur $I$
- **Minimum** sur $I$ : la plus petite

> ⚠️ Un extrémum est une **valeur de $f(x)$**, atteinte **en** une certaine valeur de $x$.
> « Le maximum est $5$, atteint en $x = 2$ » : ne confonds pas les deux nombres.

---

## 6. À retenir absolument

| | |
|---|---|
| Fonction | à chaque $x$, **une seule** image |
| Image | résultat du calcul, unique |
| Antécédents | zéro, un ou plusieurs |
| Interdits | division par $0$, racine d'un négatif |
| Test de la verticale | une verticale coupe la courbe une fois au plus |
| Croissante | conserve l'ordre |
| Décroissante | inverse l'ordre |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre image et antécédent.** L'image se lit *de $x$ vers $y$*, l'antécédent
   *de $y$ vers $x$*.
2. **Chercher « l'antécédent » au singulier.** Il peut y en avoir plusieurs — il faut tous
   les donner.
3. **Oublier l'ensemble de définition** avant de calculer ou de tracer.
4. **Confondre $f$ et $f(x)$** : $f$ est la fonction, $f(x)$ est un nombre.
5. **Confondre le maximum et l'abscisse où il est atteint.**
6. **Lire une inéquation graphique à l'envers** : $f(x) > k$ se lit là où la courbe est
   **au-dessus** de l'horizontale.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), sections « Notion de fonction » (ligne 945 du .txt) et
« Fonctions et représentations » (ligne 1419). Le programme mentionne explicitement les
représentations « par des programmes de calcul, par des tableaux de valeurs » (ligne 2773)
et les « extrémums » (ligne 2996) — j'ai structuré la fiche autour de ces marqueurs.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les définitions formelles de croissance/décroissance sont-elles exigibles en seconde, ou
  seulement l'approche par tableau et lecture graphique ?
- La résolution graphique d'inéquations est-elle explicitement au programme ?
- Le programme mentionne « Déterminer par balayage un encadrement de … » : cette méthode
  se rattache-t-elle à ce chapitre (résolution approchée de f(x) = k) ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
