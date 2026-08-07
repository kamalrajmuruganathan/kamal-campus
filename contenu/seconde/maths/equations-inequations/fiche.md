---
id: 2nde-math-equations-inequations
titre: "Équations et inéquations"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Calcul numérique et algébrique (Seconde)
  - Équations du premier degré (cycle 4)
statut: brouillon
relu_par: null
---

# Équations et inéquations

> Une équation cherche **quand deux expressions sont égales**, une inéquation **quand l'une
> dépasse l'autre**. La différence technique tient en une règle — le renversement du sens —
> mais c'est celle qui fait perdre le plus de points.

---

## 1. Équations du premier degré

$$ax + b = 0 \iff x = -\frac{b}{a} \quad (a \neq 0)$$

**Méthode** : isoler $x$ en effectuant la même opération des deux côtés.

> **Exemple.** $5x - 3 = 2x + 9 \iff 3x = 12 \iff x = 4$.

---

## 2. Équations produit

### La règle du produit nul

$$\boxed{A \times B = 0 \iff A = 0 \ \text{ ou } \ B = 0}$$

C'est **la** technique centrale de la Seconde : on ramène toute équation à une forme
factorisée égale à zéro.

**Méthode en trois temps**

1. Tout ramener dans le membre de gauche, pour avoir $\ldots = 0$
2. **Factoriser**
3. Appliquer la règle du produit nul

> **Exemple.** Résoudre $x^2 = 4x$.
>
> $x^2 - 4x = 0$ puis $x(x-4) = 0$, donc $x = 0$ ou $x = 4$.
>
> ⚠️ **Ne jamais diviser par $x$** : on perdrait la solution $x = 0$. Diviser par une quantité
> qui peut être nulle est une faute de raisonnement, pas seulement d'inattention.

---

## 3. Équations quotient

$$\frac{A}{B} = 0 \iff A = 0 \ \text{ et } \ B \neq 0$$

Un quotient est nul quand son **numérateur** l'est, à condition que le dénominateur ne le soit pas.

**Toujours commencer par la valeur interdite.**

> **Exemple.** $\dfrac{x-3}{x+2} = 0$.
> Valeur interdite : $x = -2$. Puis $x - 3 = 0$ donne $x = 3$, qui est acceptable.

---

## 4. Inéquations — la règle qui change tout

### Les opérations autorisées

| Opération | Effet sur le sens |
|---|---|
| Ajouter ou soustraire un nombre | **inchangé** |
| Multiplier ou diviser par un nombre **positif** | **inchangé** |
| Multiplier ou diviser par un nombre **négatif** | ⚠️ **le sens s'inverse** |

> **Exemple.** $-3x > 12$. En divisant par $-3$ : $x < -4$.
> L'inégalité a **changé de sens**. C'est l'erreur la plus fréquente de toute la Seconde.

> **Pour s'en convaincre** : $2 < 5$, mais en multipliant par $-1$ on obtient $-2 > -5$.

---

## 5. Tableaux de signes

Pour résoudre une inéquation produit ou quotient, on étudie le **signe de chaque facteur**,
puis on applique la règle des signes.

### Signe de $ax + b$

Il s'annule en $-\dfrac{b}{a}$, et est **du signe de $a$ après** cette valeur.

> **Exemple.** Résoudre $(x-1)(x+3) \geqslant 0$.

| $x$ | $-\infty$ | | $-3$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $-$ | $-$ | $0$ | $+$ | |
| $x + 3$ | | $-$ | $0$ | $+$ | $+$ | $+$ | |
| **produit** | | $+$ | $0$ | $-$ | $0$ | $+$ | |

Solutions : $x \in \left]-\infty\,;-3\right] \cup \left[1\,;+\infty\right[$

> ⚠️ Pour un **quotient**, les valeurs qui annulent le dénominateur sont **exclues** : crochet
> ouvert et double barre dans le tableau.

---

## 6. Méthode générale pour une inéquation

1. Tout ramener d'un même côté : $\ldots \leqslant 0$ ou $\ldots \geqslant 0$
2. Factoriser
3. Dresser le tableau de signes
4. Lire les solutions et les écrire sous forme d'**intervalles**

> **Ne jamais** « faire passer » un facteur de l'autre côté en divisant : son signe est inconnu,
> donc on ne sait pas si le sens change.

---

## 7. À retenir absolument

| | |
|---|---|
| Produit nul | $AB = 0 \iff A = 0$ ou $B = 0$ |
| Quotient nul | $\dfrac{A}{B} = 0 \iff A = 0$ et $B \neq 0$ |
| Multiplication par un négatif | le sens de l'inégalité **s'inverse** |
| Signe de $ax+b$ | s'annule en $-\dfrac ba$, signe de $a$ après |
| Solutions d'inéquation | écrites en **intervalles** |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier d'inverser le sens** en divisant par un nombre négatif.
2. **Diviser par $x$** dans une équation : on perd la solution $x = 0$. Il faut factoriser.
3. **Oublier la valeur interdite** d'un quotient — et pire, la donner comme solution.
4. **Écrire les solutions d'une inéquation sous forme d'égalités** : on attend des intervalles.
5. **Faire passer un facteur littéral de l'autre côté** dans une inéquation : son signe est
   inconnu.
6. **Fermer le crochet sur une valeur interdite** dans le résultat.
7. **Confondre $\cup$ et $\cap$** : les solutions d'une inéquation produit forment souvent une
   **réunion** de deux intervalles.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Algèbre » (ligne 1941 du .txt extrait).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le périmètre exact des inéquations en seconde : les inéquations produit et quotient
  sont-elles exigibles, ou seulement le premier degré ? J'ai inclus les deux, ce qui est
  l'usage courant, mais à vérifier sur le nouveau texte.
- Les systèmes de deux équations à deux inconnues relèvent-ils de ce chapitre ou de la
  section « Droites du plan » ? Je ne les ai pas traités ici.
- Le programme mentionne « Déterminer par balayage un encadrement de … » (visible dans
  l'extraction) : cette méthode approchée est-elle rattachée aux équations ? À vérifier et
  à ajouter le cas échéant.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
