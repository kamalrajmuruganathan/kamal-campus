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
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ |

### Opérations

| Fonction | Dérivée |
|---|---|
| $u + v$ | $u' + v'$ |
| $k\,u$ | $k\,u'$ |
| $u \times v$ | $\boxed{u'v + uv'}$ |
| $\dfrac{u}{v}$ | $\boxed{\dfrac{u'v - uv'}{v^2}}$ |

> **Exemple.** $f(x) = 5x^2 - 3x + 7$ donne $f'(x) = 10x - 3$.

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
| Dérivée d'un produit | $u'v + uv'$ |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que $(uv)' = u'v'$.** La formule est $u'v + uv'$.
2. **Confondre $f(a)$ et $f'(a)$** dans l'équation de la tangente.
3. **Conclure à un extrémum dès que $f'(a) = 0$** sans vérifier le changement de signe.
4. **Étudier le signe de $f$ au lieu de celui de $f'$.**
5. **Annoncer une variation sur une réunion d'intervalles.**
6. **Inverser le numérateur du quotient** : c'est $u'v - uv'$, dans cet ordre.
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

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La LISTE EXACTE des dérivées usuelles exigibles : l'extraction s'interrompt sur
  « Fonctions dérivées de : 2 ». J'ai retenu k, x, x², x³, 1/x et √x — à vérifier,
  notamment la présence de √x et de x³.
- La dérivée d'un QUOTIENT est-elle au programme de la voie technologique, ou
  seulement somme et produit ? Point de périmètre à trancher.
- La dérivée de x ↦ f(ax+b) est-elle exigible ?
- Les démonstrations éventuellement exigibles.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
