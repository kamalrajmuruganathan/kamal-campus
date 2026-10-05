---
id: 1techno-math-derivation
titre: "Dérivation"
voie: technologique
niveau: premiere
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — première, voie technologique"
duree_lecture_min: 14
prerequis:
  - Fonctions de la variable réelle (Première techno)
  - Équations de droites (Seconde)
statut: brouillon
relu_par: null
---

# Dérivation

> Le programme structure ce chapitre en deux temps, et l'ordre compte :
> le **point de vue local** — que se passe-t-il en un point précis ? — puis le
> **point de vue global** — comment varie la fonction sur tout un intervalle ?

---

# Point de vue local

## 1. Des sécantes à la tangente

Prenons un point $\mathrm{A}$ fixe sur la courbe, et un point $\mathrm{M}$ mobile.
La droite $(\mathrm{AM})$ est une **sécante**, et son coefficient directeur est le
**taux de variation** vu au chapitre précédent.

Quand $\mathrm{M}$ se rapproche de $\mathrm{A}$, la sécante **pivote** et se
rapproche d'une position limite : c'est la **tangente** à la courbe en $\mathrm{A}$.

---

## 2. Nombre dérivé

Le **nombre dérivé** de $f$ en $a$, noté $f'(a)$, est la **limite du taux de
variation** quand le second point se rapproche de $a$ :

$$\boxed{f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}}$$

> **Ce qu'il faut retenir avant toute formule** : $f'(a)$ est le **coefficient
> directeur de la tangente** au point d'abscisse $a$. C'est la pente de la courbe en
> ce point.

> **Exemple.** $f(x) = x^2$ en $a = 3$ :
> $$\frac{(3+h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h$$
> Quand $h$ tend vers $0$, on obtient $f'(3) = 6$.

---

## 3. Équation réduite de la tangente

$$\boxed{y = f'(a)(x - a) + f(a)}$$

Deux ingrédients seulement : la **pente** $f'(a)$ et le **point de contact**
$\left(a\,;f(a)\right)$.

> **Exemple.** $f(x) = x^2$, tangente en $a = 3$ : $f(3) = 9$ et $f'(3) = 6$, donc
> $y = 6(x - 3) + 9$, soit $y = 6x - 9$.

> ⚠️ Ne pas intervertir $f(a)$ et $f'(a)$ : la pente est le nombre dérivé, l'ordonnée
> du point est l'image.

---

# Point de vue global

## 4. Fonction dérivée

Si $f$ admet un nombre dérivé en tout point d'un intervalle, la fonction qui à $x$
associe $f'(x)$ est la **fonction dérivée** de $f$.

### Dérivées à connaître

| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x$ | $1$ |
| $x^2$ | $2x$ |
| $x^3$ | $3x^2$ |

### Opérations

| Fonction | Dérivée |
|---|---|
| $u + v$ | $u' + v'$ |
| $k\,u$ ($k$ réel) | $k\,u'$ |

### Dérivée d'un polynôme de degré inférieur ou égal à 3

En combinant ces deux règles, on dérive **terme à terme** :

$$\boxed{ax^3 + bx^2 + cx + d \;\longmapsto\; 3ax^2 + 2bx + c}$$

> **Exemples.** $f(x) = 5x^2 - 3x + 7$ donne $f'(x) = 10x - 3$.
> $g(x) = 2x^3 - 4x^2 + x - 6$ donne $g'(x) = 6x^2 - 8x + 1$.

> **Un produit de deux facteurs ?** On **développe d'abord**, puis on dérive :
> $f(x) = (2x + 1)(x - 3) = 2x^2 - 5x - 3$, donc $f'(x) = 4x - 5$.

---

## 5. Signe de la dérivée et variations

C'est l'usage principal de la dérivation :

| Sur un intervalle $I$ | La fonction $f$ est |
|---|---|
| $f'(x) > 0$ | **croissante** |
| $f'(x) < 0$ | **décroissante** |
| $f'(x) = 0$ | **constante** |

### Méthode complète

1. Calculer $f'(x)$
2. Étudier le **signe de $f'$** — c'est là qu'est le vrai travail
3. Dresser le tableau de variations
4. Calculer les images aux points remarquables

> **Exemple.** $f(x) = x^2 - 6x + 5$, donc $f'(x) = 2x - 6$.
> $f'(x) < 0$ pour $x < 3$, $f'(x) > 0$ pour $x > 3$.

| $x$ | $-\infty$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\searrow$ | $-4$ | $\nearrow$ | |

---

## 6. Extrémums

Si $f$ admet un extrémum en $a$ à l'intérieur d'un intervalle, alors $f'(a) = 0$ :
la **tangente y est horizontale**.

> ⚠️ **La réciproque est fausse.** $f'(a) = 0$ ne suffit pas.
>
> **Contre-exemple** : $f(x) = x^3$ vérifie $f'(0) = 0$, mais la fonction est
> croissante sur $\mathbb{R}$ — il n'y a aucun extrémum.
>
> **Le bon critère** : il y a extrémum quand $f'$ **change de signe**.

---

## 7. À retenir absolument

| | |
|---|---|
| Nombre dérivé | limite du taux de variation |
| Interprétation | pente de la **tangente** |
| Équation de la tangente | $y = f'(a)(x-a) + f(a)$ |
| $f' > 0$ sur $I$ | $f$ croissante sur $I$ |
| $f' < 0$ sur $I$ | $f$ décroissante sur $I$ |
| Extrémum en $a$ | $\Rightarrow f'(a) = 0$ |
| Réciproque | **fausse** — il faut un changement de signe |
| Dérivée d'un polynôme | $ax^3 + bx^2 + cx + d \mapsto 3ax^2 + 2bx + c$ |

---

## 8. Les erreurs qui coûtent des points

1. **Dériver $x^3$ en $3x^3$** au lieu de $3x^2$ : l'exposant descend en facteur **et diminue de $1$**.
2. **Oublier que la dérivée d'une constante est $0$** : $(4x^2 - 7x + 3)' = 8x - 7$, sans le $3$.
3. **Confondre $f(a)$ et $f'(a)$** dans l'équation de la tangente.
4. **Conclure à un extrémum dès que $f'(a) = 0$** sans vérifier le changement de signe.
5. **Étudier le signe de $f$ au lieu de celui de $f'$.**
6. **Annoncer une variation sur une réunion d'intervalles.**
7. **Oublier les images** dans le tableau de variations : un tableau sans valeurs est
   incomplet.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques, première de la voie
technologique (docs/programme-premiere-techno-2026.pdf), partie « Analyse », section
« Dérivation » (ligne 2071 du .txt extrait).

Le découpage de la fiche suit EXACTEMENT celui du programme, dont l'extraction est
lisible sur ce point : « Point de vue local : approche graphique de la notion de
nombre dérivé ; Sécantes à une courbe passant par un point donné ; taux de variation
en un point ; Tangente à une courbe en un point, définie comme position limite des
sécantes passant par ce point ; Nombre dérivé en un point défini comme limite du taux
de variation en ce point ; Équation réduite de la tangente en un point » puis
« Point de vue global : Fonction dérivée ; Fonctions dérivées de : … ».

PÉRIMÈTRE TRANCHÉ (05/10/2026) d'après docs/programme-premiere-techno-2026.txt,
lignes 440-441 : « Fonctions dérivées de : x ↦ x², x ↦ x³ » et « Dérivée d'une
somme, dérivée de kf (k ∈ ℝ), dérivée d'un polynôme de degré inférieur ou égal
à 3 ». Sont donc retenus : k, x, x², x³, somme, kf, polynômes de degré ≤ 3.
Retirés de la fiche, du QCM, des cartes et des exercices car HORS PROGRAMME en
voie technologique : dérivées de 1/x et de √x, dérivée d'un produit (uv)' et
d'un quotient (u/v)'. Un produit de deux facteurs affines se traite en
développant d'abord. Contextes recommandés par le programme (commentaires) :
vitesse instantanée et coût marginal.
Reste à confronter au PDF : les démonstrations éventuellement exigibles.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
