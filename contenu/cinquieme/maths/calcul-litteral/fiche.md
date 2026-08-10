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

**Développer**, c'est transformer un produit en somme, en utilisant la
**distributivité** :

$$\boxed{k(a + b) = ka + kb} \qquad\qquad \boxed{k(a - b) = ka - kb}$$

> **Exemple.** $3(x + 4) = 3x + 12$
>
> Chaque terme de la parenthèse est multiplié par $3$ — **aucun ne doit être oublié**.

### ⚠️ Le piège du signe moins

$$-2(x + 3) = -2x - 6$$

Le $-2$ multiplie **les deux termes**, y compris le $+3$ qui devient $-6$.

> **Exemple plus complet.** $-4(x - 5) = -4x + 20$
>
> $(-4) \times (-5) = +20$ : deux signes moins donnent un plus.

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

## 7. Démontrer avec des lettres

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

## 8. À retenir absolument

| | |
|---|---|
| Variable / inconnue | règle générale / valeur à trouver |
| $3 \times a$ | s'écrit $3a$ |
| Réduire | regrouper ce qui est de **même nature** |
| $3a + 5b$ | ne se réduit **pas** |
| Développer | $k(a+b) = ka + kb$ |
| Factoriser | $ka + kb = k(a+b)$ |
| Nombre pair | $2k$ avec $k$ entier |
| Contre-exemple | suffit à réfuter, jamais à prouver |

---

## 9. Les erreurs qui coûtent des points

1. **Réduire $3a + 5b$ en $8ab$.** Ce sont des natures différentes.
2. **Oublier de multiplier le second terme** : $3(x+4)$ vaut $3x + 12$, pas $3x + 4$.
3. **Se tromper de signe** : $-2(x+3)$ vaut $-2x - 6$, pas $-2x + 6$.
4. **Confondre développer et factoriser.**
5. **Écrire $34$ pour $3 \times 4$** : la suppression du × ne vaut que devant une lettre.
6. **Utiliser la même lettre pour deux nombres différents** dans une démonstration.
7. **Croire qu'un exemple démontre** une propriété générale.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 5 mars 2026, « Programme de mathématiques pour le
cycle 4 » (docs/programme-college-cycle4-maths-2026.pdf), domaine « Nombres et
calculs », niveau Cinquième, section « Calcul littéral et algébrique ».

Éléments explicitement lisibles dans l'extraction :
- « k(a + b) = ka + kb ou k(a − b) = ka − kb pour factoriser, ou développer une
  expression littérale »
- « Réduire une expression littérale de la forme a … b, où a et b sont des nombres
  décimaux »
- « DÉMONTRER UNE PROPRIÉTÉ GÉNÉRALE PAR LE CALCUL LITTÉRAL » — d'où la section 7,
  qui est l'objectif le plus ambitieux du chapitre
- « Utiliser un contre-exemple pour démontrer qu'une assertion est fausse »
- « Formuler des conjectures en s'appuyant sur un langage algorithmique ou un
  tableur »
- « Donner à la lettre le statut d'inconnue » — d'où la distinction variable/inconnue
  de la section 1
- « Modéliser des problèmes relevant des opérations à trous par des équations du
  type [...] »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La RÉSOLUTION d'équations est-elle attendue en 5e, ou seulement la MISE EN
  ÉQUATION et le test d'une valeur ? L'extraction mentionne « Modéliser des problèmes
  relevant des opérations à trous par des équations du type... » sans que la suite
  soit lisible. Je me suis limité au TEST d'une égalité, sans méthode de résolution —
  c'est le point de périmètre le plus sensible de cette fiche.
- La capacité « Formuler des conjectures en s'appuyant sur un langage algorithmique
  ou un tableur » n'est pas traitée ici : elle relève sans doute du chapitre
  « pensée informatique ». À arbitrer.
- Les identités remarquables ne sont PAS au programme de 5e (elles apparaissent plus
  tard) : je ne les ai pas introduites.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
