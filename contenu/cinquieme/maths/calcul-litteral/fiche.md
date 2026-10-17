---
id: 5e-math-calcul-litteral
titre: "Calcul littéral"
voie: college
niveau: cinquieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 5e à la rentrée 2026"
duree_lecture_min: 12
prerequis:
  - Priorités opératoires (6e)
  - Nombres relatifs (5e)
statut: brouillon
relu_par: null
---

# Calcul littéral

> Remplacer des nombres par des **lettres**, c'est ce qui permet de dire quelque chose
> de vrai **pour tous les nombres à la fois**. C'est le début de la démonstration —
> et c'est aussi ce qui rend les mathématiques puissantes.

---

## 1. Une lettre, deux rôles très différents

| Rôle | Sens | Exemple |
|---|---|---|
| **Variable** | la lettre peut prendre n'importe quelle valeur | l'aire d'un carré de côté $c$ vaut $c^2$ |
| **Inconnue** | la lettre a une valeur précise, qu'on cherche | trouver $x$ tel que $x + 5 = 12$ |

> **La distinction compte.** Dans une formule, la lettre décrit une règle générale.
> Dans une équation, elle cache un nombre qu'il faut retrouver.

---

## 2. Conventions d'écriture

On **supprime le signe ×** devant une lettre ou une parenthèse :

| On écrit | Au lieu de |
|---|---|
| $3a$ | $3 \times a$ |
| $ab$ | $a \times b$ |
| $2(x+1)$ | $2 \times (x+1)$ |
| $a^2$ | $a \times a$ |

> ⚠️ On ne supprime **jamais** le × entre deux nombres : $3 \times 4$ ne peut pas
> s'écrire $34$.

---

## 3. Réduire une expression

**Réduire**, c'est regrouper ce qui est de même nature.

$$3a + 5a = 8a \qquad\qquad 7x - 2x = 5x$$

> **L'image qui aide** : $3$ pommes $+$ $5$ pommes $=$ $8$ pommes. On ne peut
> additionner que des objets **identiques**.

> ⚠️ **$3a + 5b$ ne se réduit pas.** Trois pommes et cinq bananes, ça reste trois
> pommes et cinq bananes.

> ⚠️ **$a$ et $a^2$ ne sont pas de même nature** : $3a + 2a^2$ ne se réduit pas non plus.

---

## 4. Développer

<!-- schema:distributivite-aire -->
![L’aire du grand rectangle, 3 × (x + 4), est la somme des aires des deux petits : 3x et 12.](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjAgMjEwIiBmb250LWZhbWlseT0iLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sc2Fucy1zZXJpZiI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU2MCIgaGVpZ2h0PSIyMTAiIGZpbGw9IiNmZmZmZmYiLz48dGV4dCB4PSIyODAiIHk9IjI4IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj4zKHggKyA0KSA9IDN4ICsgMTI8L3RleHQ+PHJlY3QgeD0iMTUwIiB5PSI4MCIgd2lkdGg9IjE3MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxZjZmZWIiIGZpbGwtb3BhY2l0eT0iMC4xOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIyMzUiIHk9IjEzNiIgZm9udC1zaXplPSIxNyIgZmlsbD0iIzFmNmZlYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+M3g8L3RleHQ+PHJlY3QgeD0iMzIwIiB5PSI4MCIgd2lkdGg9IjExMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNjMjVlMDAiIGZpbGwtb3BhY2l0eT0iMC4xOCIgc3Ryb2tlPSIjMTYyMzJlIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSIzNzUiIHk9IjEzNiIgZm9udC1zaXplPSIxNyIgZmlsbD0iI2MyNWUwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTI8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjEzNiIgeT0iMTM1IiBmb250LXNpemU9IjE2IiBmaWxsPSIjMTYyMzJlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iNzAwIiBmb250LXN0eWxlPSJpdGFsaWMiPjM8L3RleHQ+PHRleHQgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBhaW50LW9yZGVyPSJzdHJva2UiIHg9IjIzNSIgeT0iNjgiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxNjIzMmUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc3R5bGU9Iml0YWxpYyI+eDwvdGV4dD48dGV4dCBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcGFpbnQtb3JkZXI9InN0cm9rZSIgeD0iMzc1IiB5PSI2OCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE2MjMyZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zdHlsZT0iaXRhbGljIj40PC90ZXh0Pjwvc3ZnPg==)
*L’aire du grand rectangle, 3 × (x + 4), est la somme des aires des deux petits : 3x et 12.*
<!-- /schema -->

**Développer**, c'est transformer un produit en somme, en utilisant la
**distributivité** :

$$\boxed{k(a + b) = ka + kb} \qquad\qquad \boxed{k(a - b) = ka - kb}$$

> **Exemple.** $3(x + 4) = 3x + 12$
>
> Chaque terme de la parenthèse est multiplié par $3$ — **aucun ne doit être oublié**.

### ⚠️ Le piège de la soustraction

$$5(x - 3) = 5x - 15$$

Le $5$ multiplie **les deux termes**, y compris le $3$ : on soustrait $5 \times 3 = 15$.

> **Exemple plus complet.** $4(2x - 5) = 8x - 20$
>
> $4 \times 2x = 8x$ et $4 \times 5 = 20$, que l'on soustrait.

---

## 5. Factoriser

**Factoriser**, c'est l'opération inverse : transformer une somme en produit, en
mettant en évidence un **facteur commun**.

$$ka + kb = k(a + b)$$

> **Exemple.** $6x + 15 = 3 \times 2x + 3 \times 5 = 3(2x + 5)$
>
> On cherche ce qui est commun aux deux termes — ici le facteur $3$.

| | Développer | Factoriser |
|---|---|---|
| Sens | produit → somme | somme → produit |
| Utile pour | calculer, réduire | résoudre des équations |

---

## 6. Tester une égalité

Pour vérifier si une égalité est vraie, on **remplace la lettre par sa valeur** et on
calcule les deux côtés **séparément**.

> **Exemple.** L'égalité $3x + 2 = 5x - 4$ est-elle vraie pour $x = 3$ ?
>
> Membre de gauche : $3 \times 3 + 2 = 11$
> Membre de droite : $5 \times 3 - 4 = 11$
> Les deux membres sont égaux : **oui**, pour $x = 3$.

---

## 7. Résoudre une équation simple

Une **équation** est une égalité où une lettre est une **inconnue**. **Résoudre**
l'équation, c'est trouver la valeur de l'inconnue qui rend l'égalité vraie. En 5e,
on résout deux sortes d'équations en utilisant l'**opération inverse**.

### Équations du type $x + b = c$ : on soustrait

> **Exemple.** $x + 7 = 19$
>
> Quel nombre faut-il ajouter à $7$ pour obtenir $19$ ? On fait l'opération
> inverse de l'addition : $x = 19 - 7 = 12$.

### Équations du type $ax = c$ : on divise

> **Exemple.** $4x = 30$
>
> Par quel nombre faut-il multiplier $4$ pour obtenir $30$ ? On fait l'opération
> inverse de la multiplication : $x = 30 \div 4 = 7{,}5$.

### On vérifie toujours

On remplace $x$ par la valeur trouvée (comme au paragraphe 6) :
$12 + 7 = 19$ ✓ et $4 \times 7{,}5 = 30$ ✓.

> **Modéliser un problème.** « Léa a des billes ; elle en gagne $8$ et en a alors
> $23$. » Si $x$ est le nombre de billes au départ, on écrit $x + 8 = 23$, donc
> $x = 23 - 8 = 15$ : Léa avait $15$ billes.

---

## 8. Démontrer avec des lettres

C'est l'objectif le plus ambitieux du chapitre : prouver qu'une propriété est vraie
**pour tous les nombres**.

> **Exemple.** *Montrer que la somme de deux nombres pairs est paire.*
>
> Un nombre pair s'écrit $2k$ avec $k$ entier. Prenons deux nombres pairs, $2k$ et
> $2k'$.
> $$2k + 2k' = 2(k + k')$$
> Comme $k + k'$ est un entier, la somme est bien un multiple de $2$ : elle est paire. ∎

> ⚠️ **Deux lettres différentes pour deux nombres différents.** Écrire $2k$ et $2k$
> imposerait qu'ils soient égaux — la démonstration ne porterait plus que sur un cas.

### Le contre-exemple

Pour montrer qu'une affirmation est **fausse**, un seul contre-exemple suffit.

> *« Tout nombre impair est premier »* est faux : $9$ est impair mais $9 = 3 \times 3$.

> **La dissymétrie est fondamentale** : un exemple ne prouve **jamais** qu'une
> propriété est vraie, mais un contre-exemple suffit à prouver qu'elle est fausse.

---

## 9. À retenir absolument

| | |
|---|---|
| Variable / inconnue | règle générale / valeur à trouver |
| $3 \times a$ | s'écrit $3a$ |
| Réduire | regrouper ce qui est de **même nature** |
| $3a + 5b$ | ne se réduit **pas** |
| Développer | $k(a+b) = ka + kb$ |
| Factoriser | $ka + kb = k(a+b)$ |
| $x + b = c$ | $x = c - b$ (on soustrait) |
| $ax = c$ | $x = c \div a$ (on divise) |
| Nombre pair | $2k$ avec $k$ entier |
| Contre-exemple | suffit à réfuter, jamais à prouver |

---

## 10. Les erreurs qui coûtent des points

1. **Réduire $3a + 5b$ en $8ab$.** Ce sont des natures différentes.
2. **Oublier de multiplier le second terme** : $3(x+4)$ vaut $3x + 12$, pas $3x + 4$.
3. **Se tromper de signe** : $5(x-3)$ vaut $5x - 15$, pas $5x + 15$.
4. **Confondre développer et factoriser.**
5. **Écrire $34$ pour $3 \times 4$** : la suppression du × ne vaut que devant une lettre.
6. **Utiliser la même lettre pour deux nombres différents** dans une démonstration.
7. **Croire qu'un exemple démontre** une propriété générale.
8. **Se tromper d'opération inverse** : si $x + 7 = 19$, alors $x = 19 - 7$, et non $19 + 7$.

