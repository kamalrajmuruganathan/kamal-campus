---
id: 2nde-math-probabilites
titre: "Probabilités"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Fractions et pourcentages (Seconde)
  - Statistiques (Seconde)
statut: brouillon
relu_par: null
---

# Probabilités

> Mesurer le hasard. Toute la Seconde tient dans une formule — issues favorables sur issues
> possibles — à condition que les issues soient **équiprobables**. Cette condition est
> précisément ce qu'on oublie.

---

## 1. Vocabulaire

| Terme | Sens |
|---|---|
| **Expérience aléatoire** | on ne peut pas prévoir le résultat |
| **Issue** | un résultat possible |
| **Univers** $\Omega$ | l'ensemble de toutes les issues |
| **Événement** | un sous-ensemble de $\Omega$ |
| **Événement élémentaire** | réduit à une seule issue |

> **Exemple.** Lancer d'un dé : $\Omega = \{1,2,3,4,5,6\}$.
> « Obtenir un nombre pair » est l'événement $\{2,4,6\}$.

---

## 2. Loi de probabilité

Une **loi de probabilité** attribue à chaque issue un nombre entre $0$ et $1$, la somme de tous
ces nombres valant $1$.

$$0 \leqslant P(\mathrm{A}) \leqslant 1 \qquad\qquad P(\Omega) = 1 \qquad\qquad P(\varnothing) = 0$$

La probabilité d'un événement est la **somme** des probabilités des issues qui le composent.

---

## 3. Situation d'équiprobabilité

Quand toutes les issues ont la **même** probabilité :

$$\boxed{P(\mathrm{A}) = \frac{\text{nombre d'issues favorables}}{\text{nombre d'issues possibles}}}$$

> ⚠️ **Cette formule n'est valable QUE en situation d'équiprobabilité.** Avec un dé pipé ou une
> urne aux boules de tailles différentes, elle est fausse. Les énoncés signalent
> l'équiprobabilité par des mots comme *« équilibré »*, *« bien mélangé »*, *« au hasard »*.

> **Exemple.** Dé équilibré, probabilité d'obtenir un nombre pair :
> $\dfrac{3}{6} = \dfrac{1}{2}$.

---

## 4. Opérations sur les événements

| Notation | Lecture | Sens |
|---|---|---|
| $\overline{\mathrm{A}}$ | « non $\mathrm{A}$ » | $\mathrm{A}$ ne se réalise pas |
| $\mathrm{A} \cap \mathrm{B}$ | « $\mathrm{A}$ **et** $\mathrm{B}$ » | les deux à la fois |
| $\mathrm{A} \cup \mathrm{B}$ | « $\mathrm{A}$ **ou** $\mathrm{B}$ » | l'un, l'autre, ou les deux |

### Événement contraire

$$\boxed{P\left(\overline{\mathrm{A}}\right) = 1 - P(\mathrm{A})}$$

> **Le réflexe le plus rentable.** Quand un énoncé dit *« au moins un… »*, calculer le
> contraire — *« aucun »* — est presque toujours beaucoup plus rapide.

### Formule d'inclusion-exclusion

$$\boxed{P(\mathrm{A} \cup \mathrm{B}) = P(\mathrm{A}) + P(\mathrm{B}) - P(\mathrm{A} \cap \mathrm{B})}$$

On retranche l'intersection parce qu'elle a été **comptée deux fois**.

### Événements incompatibles

$\mathrm{A}$ et $\mathrm{B}$ sont **incompatibles** lorsqu'ils ne peuvent pas se produire
ensemble : $\mathrm{A} \cap \mathrm{B} = \varnothing$. Alors

$$P(\mathrm{A} \cup \mathrm{B}) = P(\mathrm{A}) + P(\mathrm{B})$$

> Le « ou » n'autorise l'addition simple **que** dans ce cas.

---

## 5. Dénombrer avec un arbre ou un tableau

Pour une expérience à deux étapes, on représente les issues par un **arbre** ou un
**tableau à double entrée**, puis on compte.

> **Exemple.** Lancer deux dés : $6 \times 6 = 36$ issues équiprobables.
> Probabilité d'obtenir une somme de $7$ : six couples conviennent
> ($1\!-\!6$, $2\!-\!5$, $3\!-\!4$, $4\!-\!3$, $5\!-\!2$, $6\!-\!1$), soit
> $\dfrac{6}{36} = \dfrac{1}{6}$.

> ⚠️ $1\!-\!6$ et $6\!-\!1$ sont deux issues **distinctes** si les dés sont discernables.
> Les compter pour une seule fausse tout le calcul.

---

## 6. Échantillonnage et fluctuation

Sur un échantillon de taille $n$, la **fréquence observée** d'un caractère varie d'un
échantillon à l'autre : c'est la **fluctuation d'échantillonnage**.

Plus $n$ est grand, plus la fréquence observée se rapproche de la probabilité théorique.

> C'est ce qui justifie la simulation : on peut estimer une probabilité difficile à calculer
> en répétant l'expérience un grand nombre de fois.

---

## 7. À retenir absolument

| | |
|---|---|
| Équiprobabilité | $P(\mathrm{A}) = \dfrac{\text{favorables}}{\text{possibles}}$ |
| Encadrement | $0 \leqslant P(\mathrm{A}) \leqslant 1$ |
| Contraire | $P\left(\overline{\mathrm{A}}\right) = 1 - P(\mathrm{A})$ |
| Union | $P(\mathrm{A} \cup \mathrm{B}) = P(\mathrm{A}) + P(\mathrm{B}) - P(\mathrm{A} \cap \mathrm{B})$ |
| Incompatibles | $\mathrm{A} \cap \mathrm{B} = \varnothing$, l'addition suffit |
| « Au moins un » | passer par le contraire |

---

## 8. Les erreurs qui coûtent des points

1. **Appliquer favorables/possibles sans équiprobabilité.** C'est la faute de fond du chapitre.
2. **Additionner les probabilités d'un « ou »** sans vérifier l'incompatibilité — on compte
   l'intersection deux fois.
3. **Annoncer une probabilité supérieure à $1$** ou négative : c'est le signal qu'il y a une
   erreur, à repérer soi-même.
4. **Confondre « et » et « ou »** dans la traduction d'un énoncé.
5. **Calculer « au moins un » directement** en énumérant les cas, au lieu de passer par le
   contraire.
6. **Oublier que deux résultats symétriques sont des issues distinctes** quand les objets sont
   discernables.
7. **Confondre fréquence observée et probabilité théorique** : la première fluctue, la seconde
   est fixe.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Probabilités » (lignes 67 et 1521 du .txt).
L'extraction fait apparaître « Calculer des probabilités » et « A et de B » (traces de la
formule d'inclusion-exclusion).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'échantillonnage et la fluctuation : quel est leur périmètre exact en seconde ? J'en donne
  une approche qualitative seulement. L'intervalle de fluctuation est-il exigible ?
- Les probabilités conditionnelles ne sont PAS en seconde (elles sont en première) : je ne les
  ai pas introduites.
- Le dénombrement est-il formalisé (arbres, tableaux uniquement) ou va-t-il plus loin ?
- La simulation avec Python est-elle rattachée à ce chapitre ou au bloc « Algorithmique » ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
