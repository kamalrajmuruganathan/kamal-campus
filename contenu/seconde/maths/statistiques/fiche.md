---
id: 2nde-math-statistiques
titre: "Statistiques"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 12
prerequis:
  - Moyenne et médiane (cycle 4)
  - Pourcentages (cycle 4)
statut: brouillon
relu_par: null
---

# Statistiques

> Résumer une série de données par quelques nombres. Le point délicat n'est pas le calcul,
> c'est le **choix de l'indicateur** : moyenne ou médiane ne racontent pas la même histoire.

---

## 1. Vocabulaire

| Terme | Sens |
|---|---|
| **Population** | l'ensemble étudié |
| **Individu** | un élément de la population |
| **Caractère** | ce qu'on observe |
| **Effectif** $n_i$ | nombre d'individus pour une valeur |
| **Fréquence** $f_i$ | $\dfrac{n_i}{N}$, avec $N$ l'effectif total |

Les fréquences vérifient toujours $\sum f_i = 1$.

Un caractère est **quantitatif** (mesurable : taille, note) ou **qualitatif**
(catégorie : couleur, sport).

---

## 2. Indicateurs de position

### Moyenne

$$\boxed{\bar{x} = \frac{n_1x_1 + n_2x_2 + \cdots + n_px_p}{N}}$$

C'est le « point d'équilibre » de la série. Elle utilise **toutes** les valeurs, ce qui la rend
**sensible aux valeurs extrêmes**.

### Médiane

La **médiane** $\mathrm{Me}$ partage la série **ordonnée** en deux groupes de même effectif :
au moins la moitié des valeurs lui sont inférieures ou égales, au moins la moitié supérieures
ou égales.

**Méthode** :
1. **Ordonner** les valeurs — étape indispensable
2. Si $N$ est impair : la valeur de rang $\dfrac{N+1}{2}$
3. Si $N$ est pair : la moyenne des deux valeurs centrales

> **Exemple.** $3,\ 5,\ 8,\ 9,\ 40$ → médiane $8$, moyenne $13$.
> La valeur $40$ tire la moyenne vers le haut sans déplacer la médiane.

> **Le choix de l'indicateur.** Pour des salaires ou des prix de logements, la **médiane** est
> plus représentative : quelques valeurs très élevées faussent la moyenne.

---

## 3. Indicateurs de dispersion

### Étendue

$$\text{étendue} = \text{valeur max} - \text{valeur min}$$

Simple, mais entièrement déterminée par deux valeurs — donc peu robuste.

### Quartiles

- $\mathrm{Q}_1$ : au moins $25\,\%$ des valeurs lui sont inférieures ou égales
- $\mathrm{Q}_3$ : au moins $75\,\%$ des valeurs lui sont inférieures ou égales

**Méthode de calcul** : on calcule $\dfrac{N}{4}$ (respectivement $\dfrac{3N}{4}$).
Si le résultat est entier, on prend la valeur de ce rang ; sinon on **arrondit au rang
supérieur**.

### Écart interquartile

$$\mathrm{Q}_3 - \mathrm{Q}_1$$

Il contient les $50\,\%$ centraux de la série et **ignore les valeurs extrêmes** — c'est sa force.

---

## 4. Linéarité de la moyenne

Si toutes les valeurs subissent la même transformation affine $y_i = ax_i + b$ :

$$\bar{y} = a\,\bar{x} + b$$

> **Exemple.** Toutes les notes augmentées de $2$ points : la moyenne augmente de $2$.
> Toutes multipliées par $1{,}1$ : la moyenne aussi.

---

## 5. Croisement de deux caractères

Un **tableau croisé** (ou à double entrée) présente deux caractères simultanément.

> **Attention aux trois pourcentages différents** qu'on peut calculer dans une même case :
> par rapport au total général, par rapport au total de la ligne, ou par rapport au total de la
> colonne. La question doit préciser lequel — et une confusion ici change complètement
> l'interprétation.

---

## 6. À retenir absolument

| | |
|---|---|
| Moyenne | $\bar x = \dfrac{\sum n_ix_i}{N}$, sensible aux extrêmes |
| Médiane | partage en deux moitiés, **ordonner d'abord** |
| Étendue | max $-$ min |
| Écart interquartile | $\mathrm{Q}_3 - \mathrm{Q}_1$, robuste |
| Fréquences | $\sum f_i = 1$ |
| Linéarité | $\bar y = a\bar x + b$ |

---

## 7. Les erreurs qui coûtent des points

1. **Calculer la médiane sans ordonner la série.** C'est l'erreur la plus fréquente, et elle
   invalide tout le résultat.
2. **Oublier les effectifs** dans une moyenne pondérée : on ne fait pas la moyenne des valeurs,
   mais la moyenne **pondérée** par les effectifs.
3. **Confondre effectif et fréquence** : le premier est un nombre d'individus, le second une
   proportion.
4. **Croire que la médiane est la moyenne du minimum et du maximum.**
5. **Additionner des pourcentages calculés sur des bases différentes.**
6. **Utiliser la moyenne sur une série très asymétrique** — les salaires, par exemple — sans
   commenter la présence de valeurs extrêmes.
7. **Confondre écart interquartile et intervalle interquartile** : le premier est un nombre,
   le second un intervalle.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), bloc « Statistiques » (lignes 1475 et 3241 du .txt).
L'extraction fait apparaître explicitement « Croisement de deux variables qualitatives » et
« Dresser le tableau croisé de deux variables », d'où la section 5.
Le programme met aussi en garde (ligne 3606) : « leur utilisation inappropriée mène facilement
à de fausses affirmations » — j'ai traduit cet avertissement dans les erreurs à éviter.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- L'écart-type est-il au programme de seconde, ou seulement en première ? Je ne l'ai PAS
  inclus — à vérifier, c'est un point de périmètre net.
- Les diagrammes en boîte (boîtes à moustaches) sont-ils exigibles ?
- La convention de calcul des quartiles varie selon les manuels : celle retenue par le
  programme doit être confirmée, car elle change les résultats numériques.
- Les démonstrations ou capacités liées à la linéarité de la moyenne.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
