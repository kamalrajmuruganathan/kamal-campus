---
id: 1spe-math-second-degre
titre: "Équations et fonctions polynômes du second degré"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Fonction carré (Seconde)
  - Identités remarquables (Seconde)
  - Équation produit nul (Seconde)
statut: brouillon
relu_par: null
---

# Équations et fonctions polynômes du second degré

> ⚠️ **Nouveau programme.** Le texte officiel n'entre plus par le discriminant : il demande de
> **factoriser en diversifiant les stratégies**. Le Δ est l'une d'elles, pas le point de départ.
> Cette fiche suit l'ordre du programme, pas celui des anciens manuels.

---

## 1. Définition

Une **fonction polynôme du second degré** est une fonction $f$ définie sur $\mathbb{R}$ par

$$f(x) = ax^2 + bx + c \qquad \text{avec } a, b, c \in \mathbb{R} \text{ et } \boxed{a \neq 0}$$

Cette écriture s'appelle la **forme développée**. Les réels $a$, $b$, $c$ sont les **coefficients**.

> **Le piège classique.** Si $a = 0$, la fonction est affine, pas du second degré. Vérifie
> toujours $a \neq 0$ avant d'appliquer quoi que ce soit de cette fiche.

---

## 2. Forme factorisée et racines

### Définition — racine

Un réel $x_0$ est une **racine** de $f$ lorsque $f(x_0) = 0$.

### Propriété — lecture immédiate

Si $f$ est donnée sous **forme factorisée**

$$f(x) = a(x - x_1)(x - x_2)$$

alors $x_1$ et $x_2$ sont **exactement** les racines de $f$.

*Pourquoi* : un produit est nul si et seulement si l'un de ses facteurs est nul, et $a \neq 0$.

> **Exemple.** $f(x) = 3(x - 2)(x + 5)$ a pour racines $2$ et $-5$.
> Aucun calcul n'est nécessaire : on lit directement.

---

## 3. Somme et produit des racines

### Théorème

Si $f(x) = ax^2 + bx + c$ admet deux racines $x_1$ et $x_2$ (éventuellement égales), alors

$$\boxed{S = x_1 + x_2 = -\frac{b}{a}} \qquad\qquad \boxed{P = x_1 x_2 = \frac{c}{a}}$$

*Démonstration.* En développant la forme factorisée :
$$a(x - x_1)(x - x_2) = a\left(x^2 - (x_1 + x_2)x + x_1x_2\right) = ax^2 - a(x_1+x_2)x + a\,x_1x_2$$
Par identification avec $ax^2 + bx + c$ : $-a(x_1+x_2) = b$ et $a\,x_1x_2 = c$. ∎

### Théorème réciproque — *au programme*

Deux réels de somme $s$ et de produit $p$ sont les racines de

$$\boxed{x^2 - sx + p}$$

Ils existent si et seulement si $s^2 - 4p \geqslant 0$.

> **Exemple.** Chercher deux nombres de somme $7$ et de produit $12$ revient à résoudre
> $x^2 - 7x + 12 = 0$. On trouve $3$ et $4$ — souvent de tête, sans aucune formule.

---

## 4. Les quatre stratégies de factorisation

C'est **le cœur du nouveau programme**. Face à un trinôme, on choisit la stratégie la plus
économique, on ne déroule pas systématiquement le Δ.

### Stratégie 1 — Racine évidente

On teste les valeurs simples : $0$, $1$, $-1$, $2$…
Si $f(x_1) = 0$, alors la seconde racine se déduit du produit : $x_2 = \dfrac{c}{a\,x_1}$.

> **Exemple.** $f(x) = x^2 - 5x + 4$. On voit que $f(1) = 1 - 5 + 4 = 0$.
> Donc $x_1 = 1$, et $P = \frac{c}{a} = 4$ donne $x_2 = 4$.
> D'où $f(x) = (x-1)(x-4)$.

### Stratégie 2 — Somme et produit

On cherche deux nombres dont la somme vaut $-\frac{b}{a}$ et le produit $\frac{c}{a}$.
Très efficace quand les racines sont entières.

> **Exemple.** $f(x) = x^2 + x - 6$. On cherche $S = -1$ et $P = -6$ : ce sont $2$ et $-3$.
> D'où $f(x) = (x-2)(x+3)$.

### Stratégie 3 — Identité remarquable

$$a^2 \pm 2ab + b^2 = (a \pm b)^2 \qquad\qquad a^2 - b^2 = (a-b)(a+b)$$

> **Exemple.** $f(x) = x^2 - 9 = (x-3)(x+3)$, racines $3$ et $-3$.
> $g(x) = x^2 + 6x + 9 = (x+3)^2$, racine double $-3$.

### Stratégie 4 — Formules générales

C'est ici, et seulement ici, qu'intervient le **discriminant**.

$$\boxed{\Delta = b^2 - 4ac}$$

| Signe de $\Delta$ | Racines | Forme factorisée |
|---|---|---|
| $\Delta > 0$ | deux racines distinctes $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ | $a(x-x_1)(x-x_2)$ |
| $\Delta = 0$ | une racine double $x_0 = \dfrac{-b}{2a}$ | $a(x-x_0)^2$ |
| $\Delta < 0$ | aucune racine réelle | pas de factorisation dans $\mathbb{R}$ |

> **Exemple.** $f(x) = 2x^2 - 3x - 2$.
> $\Delta = 9 + 16 = 25 > 0$, $\sqrt{\Delta} = 5$.
> $x_1 = \frac{3-5}{4} = -\frac{1}{2}$ et $x_2 = \frac{3+5}{4} = 2$.
> Donc $f(x) = 2\left(x + \frac{1}{2}\right)(x-2)$.

---

## 5. Signe du trinôme

### Théorème

$f(x)$ est **du signe de $a$** partout, **sauf entre les racines** où il est du signe de $-a$.

Autrement dit, quand $\Delta > 0$ et $x_1 < x_2$ :

| $x$ | $-\infty$ | | $x_1$ | | $x_2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| signe de $f(x)$ | | signe de $a$ | $0$ | signe de $-a$ | $0$ | signe de $a$ | |

Si $\Delta = 0$ : $f(x)$ est du signe de $a$ partout, et s'annule en $x_0$.
Si $\Delta < 0$ : $f(x)$ est du signe de $a$ partout, sans jamais s'annuler.

> **La phrase à retenir** : *« signe de $a$ à l'extérieur des racines »*.

---

## 6. Forme canonique et sommet

$$f(x) = a(x - \alpha)^2 + \beta \qquad \text{avec } \alpha = -\frac{b}{2a} \ \text{ et } \ \beta = f(\alpha) = -\frac{\Delta}{4a}$$

La parabole représentant $f$ a pour **sommet** $\mathrm{S}(\alpha\,;\beta)$ et pour axe de symétrie
la droite d'équation $x = \alpha$.

- Si $a > 0$ : parabole tournée vers le haut, $f$ décroît puis croît, **minimum** $\beta$ en $\alpha$
- Si $a < 0$ : parabole tournée vers le bas, $f$ croît puis décroît, **maximum** $\beta$ en $\alpha$

---

## 7. À retenir absolument

| | |
|---|---|
| Condition d'existence | $a \neq 0$ |
| Somme des racines | $S = -\dfrac{b}{a}$ |
| Produit des racines | $P = \dfrac{c}{a}$ |
| Somme $s$, produit $p$ | racines de $x^2 - sx + p$ |
| Discriminant | $\Delta = b^2 - 4ac$ |
| Racines | $\dfrac{-b \pm \sqrt{\Delta}}{2a}$ |
| Signe | celui de $a$ à l'extérieur des racines |
| Sommet | $\left(-\dfrac{b}{2a}\,;\,-\dfrac{\Delta}{4a}\right)$ |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier de vérifier $a \neq 0$** avant de se lancer.
2. **Se tromper de signe dans $\Delta$** : c'est $b^2 - 4ac$, et $-4ac$ devient **positif**
   quand $a$ et $c$ sont de signes contraires.
3. **Oublier le facteur $a$** dans la forme factorisée : $f(x) = a(x-x_1)(x-x_2)$, pas
   $(x-x_1)(x-x_2)$.
4. **Sortir le Δ par réflexe** alors qu'une racine évidente sautait aux yeux. Le programme
   demande explicitement de diversifier les stratégies.
5. **Conclure « pas de solution » quand $\Delta < 0$** sans préciser *dans $\mathbb{R}$*.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale
(docs/programme-premiere-specialite-maths-2026.pdf), section « Équations, fonctions polynômes
du second degré ».

Rédaction 100 % originale à partir du programme officiel — aucun emprunt à un manuel.

⚠️ À FAIRE VÉRIFIER PAR UN PROFESSEUR DE MATHÉMATIQUES avant publication :
- Les §6 (forme canonique) et §5 (tableau de signes) ne sont pas explicitement cités dans
  l'extrait du programme que j'ai pu lire ; ils sont classiques et nécessaires, mais confirmer
  qu'ils sont bien attendus en première spécialité dans le nouveau texte.
- Le mot « discriminant » n'apparaît pas dans le programme extrait. Confirmer en ouvrant le PDF
  que ce n'est pas un artefact d'extraction.
- Vérifier qu'aucune démonstration exigible n'est omise (le programme mentionne une section
  « Démonstration » que mon extraction n'a pas restituée entièrement).

Statut : brouillon, non relu.
-->
