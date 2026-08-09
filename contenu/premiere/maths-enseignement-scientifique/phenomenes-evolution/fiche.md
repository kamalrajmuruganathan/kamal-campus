---
id: 1es-math-phenomenes-evolution
titre: "Phénomènes d'évolution, modélisation par des fonctions"
voie: generale
niveau: premiere
parcours: maths-enseignement-scientifique
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques intégrées à l'enseignement scientifique"
duree_lecture_min: 14
prerequis:
  - Fonctions affines (Seconde)
  - Fonctions de référence (Seconde)
  - Analyse de l'information chiffrée (Première)
statut: brouillon
relu_par: null
---

# Phénomènes d'évolution, modélisation par des fonctions

> Ce chapitre répond à une question concrète : **comment une grandeur évolue-t-elle
> dans le temps ?** Le programme l'ancre dans des situations réelles — impôt sur le
> revenu, niveau des océans, désintégration radioactive, propagation d'une épidémie.
> Chaque modèle a son domaine de validité, et savoir où il cesse d'être valable fait
> partie du travail.

---

## 1. Modéliser : ce que ça veut dire

Un **modèle** est une fonction qui approche un phénomène réel. Il n'est jamais exact :
il est **utile dans un certain domaine**, et faux au-delà.

> **La question à se poser systématiquement** : jusqu'où ce modèle reste-t-il crédible ?
> Une croissance qui double chaque année finit par dépasser la population mondiale.

---

## 2. Le modèle affine

$$f(x) = ax + b$$

Une évolution est **affine** quand la grandeur varie de la **même quantité** à chaque
période — un accroissement **constant**.

- $a$ est le **taux d'accroissement**, égal au coefficient directeur de la droite
- $b$ est la valeur initiale

> **Lien avec la Seconde.** Le coefficient directeur $a$ se calcule par
> $\dfrac{y_\mathrm{B} - y_\mathrm{A}}{x_\mathrm{B} - x_\mathrm{A}}$ : c'est
> exactement le taux d'accroissement du phénomène.

### Trois applications du programme

| Domaine | Modèle |
|---|---|
| **Économie** | offre et demande modélisées par deux fonctions affines ; leur intersection est le **point d'équilibre** |
| **Enseignement moral et civique** | barème de l'impôt sur le revenu, fonction affine **par morceaux** |
| **Sciences de la Terre** | élévation du niveau moyen des océans, modèle linéaire |

### Fonction affine par morceaux — le cas de l'impôt

Le barème de l'impôt applique des **taux différents par tranche**. Deux notions à ne
pas confondre :

| | Définition |
|---|---|
| **Taux marginal** | taux appliqué à la **dernière tranche** de revenu |
| **Taux moyen** | impôt total ÷ revenu total |

> ⚠️ **Le taux marginal n'est pas le taux payé sur l'ensemble du revenu.** Passer dans
> une tranche à $30\,\%$ ne signifie pas payer $30\,\%$ de tout : seule la part de
> revenu au-dessus du seuil est concernée. Le taux moyen reste toujours **inférieur**
> au taux marginal.
>
> C'est une confusion très répandue, et le programme la vise explicitement.

---

## 3. Le modèle du second degré

$$f(x) = ax^2 + bx + c \qquad (a \neq 0)$$

La courbe est une **parabole**, avec un sommet — donc un **maximum** ou un **minimum**.

| Signe de $a$ | Forme | Extrémum |
|---|---|---|
| $a > 0$ | tournée vers le haut | **minimum** |
| $a < 0$ | tournée vers le bas | **maximum** |

L'abscisse du sommet vaut

$$\alpha = -\frac{b}{2a}$$

> **Ce que le modèle apporte ici** : il décrit un phénomène qui **passe par un optimum**
> — un bénéfice maximal, une trajectoire de projectile, une hauteur maximale atteinte.
> C'est ce que le modèle affine, toujours monotone, ne peut pas représenter.

---

## 4. Le modèle exponentiel — croissance ou décroissance à taux constant

Une évolution est **exponentielle** quand la grandeur est multipliée par le **même
coefficient** à chaque période — un **pourcentage** constant, et non une quantité
constante.

$$f(n) = f(0) \times q^{\,n}$$

| | Affine | Exponentiel |
|---|---|---|
| Ce qui est constant | l'**écart** ajouté | le **pourcentage** appliqué |
| Représentation | droite | courbe qui s'incurve |
| Exemple | $+100$ € par mois | $+3\,\%$ par an |

| Raison $q$ | Comportement |
|---|---|
| $q > 1$ | croissance, de plus en plus rapide |
| $q = 1$ | constante |
| $0 < q < 1$ | décroissance, de plus en plus lente, vers $0$ |

---

## 5. Les applications du programme

### Modèle de Malthus — population et ressources

Malthus opposait une population croissant **exponentiellement** à des ressources
alimentaires croissant **linéairement**. Quelle que soit l'avance initiale des
ressources, l'exponentielle finit toujours par dépasser la droite.

> **Ce qu'il faut en retenir mathématiquement** : à long terme, une croissance
> exponentielle dépasse **toujours** une croissance affine, même très forte au départ.
>
> Historiquement, la prédiction ne s'est pas réalisée — les rendements agricoles ont
> eux aussi progressé. C'est l'illustration parfaite du **domaine de validité** d'un
> modèle.

### Décroissance radioactive et demi-vie

La **demi-vie** $t_{1/2}$ est la durée au bout de laquelle la moitié des noyaux se
sont désintégrés.

$$N(t) = N_0 \times \left(\frac{1}{2}\right)^{t / t_{1/2}}$$

| Demi-vies écoulées | Fraction restante |
|---|---|
| $1$ | $\frac{1}{2}$ = 50 % |
| $2$ | $\frac{1}{4}$ = 25 % |
| $3$ | $\frac{1}{8}$ = 12,5 % |
| $n$ | $\left(\frac{1}{2}\right)^n$ |

> ⚠️ **Deux demi-vies ne font pas disparaître le tout.** Chaque demi-vie divise par
> deux ce qui reste : on n'atteint jamais zéro exactement.

**Datation au carbone 14** : sa demi-vie vaut environ $5\,730$ ans. En mesurant ce
qu'il reste dans un échantillon, on remonte à son âge.

### Taux de reproduction $R_0$ d'une épidémie

$R_0$ est le nombre moyen de personnes contaminées par un malade.

| Valeur | Évolution |
|---|---|
| $R_0 > 1$ | l'épidémie **croît** exponentiellement |
| $R_0 = 1$ | elle se stabilise |
| $R_0 < 1$ | elle **s'éteint** |

> Le seuil $R_0 = 1$ est **critique** : c'est lui que visent les mesures sanitaires.
> Passer de $1{,}2$ à $0{,}9$ change complètement la dynamique, alors que l'écart
> semble faible.

---

## 6. Choisir le bon modèle

| On observe… | Modèle |
|---|---|
| un accroissement **constant** en valeur | **affine** |
| un pourcentage **constant** | **exponentiel** |
| un **optimum**, un maximum ou un minimum | **second degré** |

> **Le test décisif entre affine et exponentiel** : calcule les **différences**
> successives, puis les **quotients**. Différences constantes → affine.
> Quotients constants → exponentiel.

---

## 7. À retenir absolument

| | |
|---|---|
| Affine | accroissement constant, $f(x) = ax+b$ |
| Taux marginal ≠ taux moyen | le moyen est toujours inférieur |
| Second degré | admet un optimum, sommet en $-\dfrac{b}{2a}$ |
| Exponentiel | pourcentage constant, $f(n) = f(0)q^n$ |
| Demi-vie | divise par $2$ à chaque période, n'atteint jamais $0$ |
| $R_0$ | seuil critique à $1$ |
| Reconnaître | différences constantes → affine ; quotients constants → exponentiel |

---

## 8. Les erreurs qui coûtent des points

1. **Croire que le taux marginal s'applique à tout le revenu.** Seule la tranche
   supérieure est concernée.
2. **Confondre accroissement constant et pourcentage constant** : ce sont deux modèles
   différents.
3. **Penser que deux demi-vies font disparaître la totalité** : il reste un quart.
4. **Extrapoler un modèle hors de son domaine de validité** sans le signaler.
5. **Oublier que $R_0 = 1$ est un seuil** : au-dessus et en dessous, les dynamiques
   sont opposées.
6. **Additionner des pourcentages** dans une évolution exponentielle — on multiplie
   les coefficients.
7. **Ajuster par une droite un nuage manifestement exponentiel.**

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, mathématiques intégrées à
l'enseignement scientifique, première générale, partie « Phénomènes d'évolution,
modélisation par des fonctions ».

Les applications de la section 5 sont TOUTES explicitement nommées dans le programme,
telles que lues dans l'extraction :
- « Modélisation de l'offre et de la demande par des fonctions affines, point
  d'équilibre » (Économie)
- « Modélisation du barème de l'impôt sur le revenu par une fonction affine par
  morceaux (taux marginal, taux moyen) » (EMC)
- « Modèle linéaire de l'évolution du niveau moyen des océans » (Sciences de la Terre)
- « Analyse comparée de l'accroissement d'une population et des ressources
  alimentaires (modèle de Malthus) »
- « Nombre de noyaux radioactifs présents dans un échantillon au bout d'une fraction
  de demi-vie. Applications à la médecine et à la datation par le carbone 14 »
- « Taux de reproduction R0 d'un virus lors d'une épidémie » (Sciences de la vie)
- « Modélisation simplifiée de la propagation d'une rumeur (cascades verticales) »
  (Sciences sociales) — NON TRAITÉE dans cette fiche, à ajouter si le relecteur
  la juge exigible.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La fonction exponentielle est-elle introduite formellement dans ce parcours, ou
  seulement à travers les suites géométriques ? J'ai retenu une écriture q^n, plus
  proche de l'esprit du programme que la notation e^x. À CONFIRMER — c'est le point
  de périmètre le plus important de cette fiche.
- Le second degré : quelle profondeur est attendue ? Discriminant et racines, ou
  seulement le sommet et l'optimum ? J'ai retenu la seconde lecture.
- La propagation d'une rumeur (cascades verticales) est absente de cette fiche.
- Le programme mentionne « Fonctions » à la fin de l'extraction sans que le contexte
  soit lisible : vérifier qu'aucune sous-partie n'a été omise.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
