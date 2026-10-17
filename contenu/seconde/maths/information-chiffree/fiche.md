---
id: 2nde-math-information-chiffree
titre: "Information chiffrée : proportions et évolutions"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Fractions et pourcentages (cycle 4)
  - Proportionnalité (cycle 4)
statut: brouillon
relu_par: null
---

# Information chiffrée : proportions et évolutions

> Un pourcentage peut dire deux choses très différentes : **quelle part** d'un ensemble
> (une proportion) ou **de combien** une grandeur a changé (une évolution). Tout le chapitre
> repose sur une idée : on **multiplie** des coefficients, on n'additionne pas des pourcentages.

---

## 1. Proportion

Soit $E$ un ensemble (la **population de référence**) d'effectif $n_E$, et $A$ une partie de $E$
d'effectif $n_A$. La **proportion** de $A$ dans $E$ est

$$\boxed{p = \frac{n_A}{n_E}} \qquad \text{avec } 0 \leqslant p \leqslant 1.$$

Elle s'écrit sous trois formes : **fractionnaire**, **décimale** ou en **pourcentage**.

> **Exemple.** Dans un lycée de $1\,250$ élèves, $450$ sont en seconde :
> $p = \dfrac{450}{1\,250} = \dfrac{9}{25} = 0{,}36 = 36\,\%$.

On en déduit deux calculs à savoir faire dans les deux sens :

| On connaît | On cherche | Calcul |
|---|---|---|
| le tout $n_E$ et la proportion $p$ | la partie | $n_A = p \times n_E$ |
| la partie $n_A$ et la proportion $p$ | le tout | $n_E = \dfrac{n_A}{p}$ |

> **Exemple.** $54$ adhérents d'un club sont mineurs, soit $30\,\%$ des adhérents.
> Le club compte $\dfrac{54}{0{,}3} = 180$ adhérents.

---

## 2. Proportion de proportion

Si $A \subset B \subset E$ (ensembles **inclus les uns dans les autres**), avec $p_1$ la proportion
de $B$ dans $E$ et $p_2$ la proportion de $A$ dans $B$, alors la proportion de $A$ dans $E$ est

$$\boxed{p = p_1 \times p_2}$$

> **Exemple.** $60\,\%$ des élèves d'un lycée sont des filles et $25\,\%$ de ces filles font du
> sport en club. Les filles sportives représentent $0{,}6 \times 0{,}25 = 0{,}15$, soit
> $15\,\%$ des élèves du lycée.

> ⚠️ « $25\,\%$ **de ces filles** » : l'ensemble de référence est celui des filles, pas celui des
> élèves. Toujours se demander : **pourcentage de quoi ?**

---

## 3. Évolution d'une grandeur

Une grandeur passe d'une valeur $V_1$ (valeur de départ, non nulle) à une valeur $V_2$
(valeur d'arrivée).

| Indicateur | Formule | Nature |
|---|---|---|
| **Variation absolue** | $V_2 - V_1$ | additive, avec une unité |
| **Coefficient multiplicateur** | $\text{CM} = \dfrac{V_2}{V_1}$ | multiplicative, sans unité |
| **Taux d'évolution** (variation relative) | $t = \dfrac{V_2 - V_1}{V_1}$ | souvent écrit en pourcentage |

Ces deux derniers sont liés par

$$\boxed{\text{CM} = 1 + t} \qquad\qquad V_2 = V_1 \times (1 + t)$$

- **Augmenter de $t\,\%$**, c'est **multiplier par** $1 + \dfrac{t}{100}$ :
  « augmenter de $5\,\%$ » = « multiplier par $1{,}05$ ».
- **Diminuer de $t\,\%$**, c'est **multiplier par** $1 - \dfrac{t}{100}$ :
  « diminuer de $5\,\%$ » = « multiplier par $0{,}95$ ».
- $\text{CM} > 1$ : hausse ; $\text{CM} < 1$ : baisse ; $\text{CM} = 1$ : aucune évolution.

> **Exemple.** Une facture passe de $840$ € à $903$ €. Variation absolue : $+63$ €.
> $\text{CM} = \dfrac{903}{840} = 1{,}075$, donc $t = 0{,}075$ : une hausse de $7{,}5\,\%$.

> **Retrouver la valeur de départ.** Après une hausse de $8\,\%$, un prix vaut $54$ € :
> $V_1 \times 1{,}08 = 54$, donc $V_1 = \dfrac{54}{1{,}08} = 50$ €. On **divise** par le coefficient.

---

## 4. Évolutions successives

Si une grandeur subit deux évolutions de coefficients $\text{CM}_1$ puis $\text{CM}_2$, le
coefficient multiplicateur global est le **produit** :

$$\boxed{\text{CM}_{\text{global}} = \text{CM}_1 \times \text{CM}_2} \qquad t_{\text{global}} = \text{CM}_{\text{global}} - 1$$

(et de même pour trois évolutions ou plus).

> **Exemple.** Une hausse de $10\,\%$ puis une hausse de $20\,\%$ :
> $1{,}1 \times 1{,}2 = 1{,}32$, soit une hausse globale de $32\,\%$ — **et non** de $30\,\%$.

> **Exemple.** Une hausse de $10\,\%$ puis une baisse de $10\,\%$ :
> $1{,}1 \times 0{,}9 = 0{,}99$, soit une **baisse** globale de $1\,\%$.

---

## 5. Évolution réciproque

L'**évolution réciproque** d'une évolution de coefficient $\text{CM}$ est celle qui ramène à la
valeur de départ. Son coefficient est l'**inverse** :

$$\boxed{\text{CM}' = \dfrac{1}{\text{CM}}} \qquad t' = \dfrac{1}{1 + t} - 1$$

> **Exemple.** Après une hausse de $25\,\%$ ($\text{CM} = 1{,}25$), le coefficient réciproque est
> $\dfrac{1}{1{,}25} = 0{,}8$ : il faut une **baisse de $20\,\%$** pour revenir au prix initial.

> **Exemple.** Après une baisse de $50\,\%$ ($\text{CM} = 0{,}5$), il faut multiplier par
> $\dfrac{1}{0{,}5} = 2$, soit une **hausse de $100\,\%$**.

---

## 6. Proportion ou évolution ?

- « $12\,\%$ des élèves sont gauchers » : une **proportion** (une partie comparée à un tout).
- « Le prix a augmenté de $12\,\%$ » : une **évolution** (deux valeurs comparées à deux dates).

Quand une **proportion** évolue, on distingue deux façons de décrire le changement :

> **Exemple.** Le taux de chômage passe de $8\,\%$ à $10\,\%$.
> - Différence des deux proportions : $10 - 8 = 2$ **points de pourcentage**.
> - Taux d'évolution : $\dfrac{10 - 8}{8} = 0{,}25$, soit une **hausse de $25\,\%$**.
>
> Dire « le chômage a augmenté de $2\,\%$ » est donc faux.

---

## 7. À retenir absolument

| | |
|---|---|
| Proportion | $p = \dfrac{n_A}{n_E}$ ; partie $= p \times$ tout ; tout $=$ partie $\div p$ |
| Proportion de proportion | $p = p_1 \times p_2$ (ensembles emboîtés) |
| Variation absolue | $V_2 - V_1$ |
| Coefficient multiplicateur | $\text{CM} = \dfrac{V_2}{V_1} = 1 + t$ |
| Taux d'évolution | $t = \dfrac{V_2 - V_1}{V_1} = \text{CM} - 1$ |
| Évolutions successives | on **multiplie** les coefficients |
| Évolution réciproque | coefficient **inverse** $\dfrac{1}{\text{CM}}$ |

---

## 8. Les erreurs qui coûtent des points

1. **Additionner des taux d'évolution successifs** : $+10\,\%$ puis $+20\,\%$ ne font pas $+30\,\%$
   mais $+32\,\%$. On multiplie les coefficients.
2. **Croire qu'une baisse se compense par une hausse de même pourcentage** : après $-20\,\%$, il
   faut $+25\,\%$ pour revenir au départ.
3. **Retrouver une valeur de départ en retirant le pourcentage de la valeur d'arrivée** : après
   $+8\,\%$, le prix initial est $\dfrac{54}{1{,}08} = 50$ €, et non $54 - 8\,\%$ de $54$.
4. **Se tromper d'ensemble de référence** : « $25\,\%$ des filles » n'est pas « $25\,\%$ des élèves ».
5. **Additionner des proportions de proportions** : on les multiplie.
6. **Confondre points de pourcentage et pourcentage d'évolution** : passer de $8\,\%$ à $10\,\%$,
   c'est $+2$ points, mais $+25\,\%$.
7. **Écrire qu'une quantité multipliée par $2$ a augmenté de $200\,\%$** : $\text{CM} = 2$ donne
   $t = 1$, soit $+100\,\%$.
