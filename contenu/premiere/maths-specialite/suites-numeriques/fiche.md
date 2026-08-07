---
id: 1spe-math-suites-numeriques
titre: "Suites numériques, modèles discrets"
voie: generale
niveau: premiere
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 14
prerequis:
  - Fonctions affines (Seconde)
  - Pourcentages et évolutions (Seconde)
statut: brouillon
relu_par: null
---

# Suites numériques, modèles discrets

> Une suite modélise un phénomène **discret** : une population année après année, un capital
> mois après mois, un motif géométrique étape après étape. Le programme insiste sur les
> **modes de génération** et sur le lien avec les fonctions déjà connues.

---

## 1. Définition et notations

Une **suite numérique** $(u_n)$ est une fonction de $\mathbb{N}$ (ou d'une partie de
$\mathbb{N}$) dans $\mathbb{R}$.

- $u_n$ se lit « $u$ indice $n$ » : c'est le **terme de rang $n$**
- $(u_n)$ désigne la **suite entière**, pas un terme

> ⚠️ Ne confonds jamais $u_n$ (un nombre) et $(u_n)$ (la suite).

---

## 2. Les modes de génération

### a. Forme explicite

$$u_n = f(n)$$

Chaque terme se calcule **directement** à partir de son rang.

> **Exemple.** $u_n = 3n + 2$ donne $u_0 = 2$, $u_1 = 5$, $u_{100} = 302$.
> On atteint $u_{100}$ sans calculer les précédents.

### b. Relation de récurrence

$$u_{n+1} = f(u_n) \quad \text{avec un premier terme donné}$$

Chaque terme se déduit du **précédent**.

> **Exemple.** $u_0 = 5$ et $u_{n+1} = 2u_n - 3$ donne $u_1 = 7$, $u_2 = 11$, $u_3 = 19$.
> Pour $u_{100}$, il faudrait les 100 termes précédents.

> **La différence pratique.** L'explicite permet le calcul direct, la récurrence non.
> Passer de l'une à l'autre est un objectif du programme.

### c. Par un algorithme

```python
def suite(n):
    u = 5
    for i in range(n):
        u = 2 * u - 3
    return u
```

### d. Par des motifs géométriques

Le nombre de carrés, de points ou de segments à l'étape $n$ d'une construction définit une suite.

---

## 3. Suites arithmétiques

### Définition — accroissements constants

$(u_n)$ est **arithmétique** de raison $r$ lorsque, pour tout $n$,

$$\boxed{u_{n+1} = u_n + r} \qquad \text{c'est-à-dire} \qquad u_{n+1} - u_n = r$$

On **ajoute** toujours la même quantité.

### Forme explicite

$$\boxed{u_n = u_0 + n\,r} \qquad \text{ou, à partir du rang } p : \quad u_n = u_p + (n-p)\,r$$

### Lien avec les fonctions affines

$u_n = u_0 + nr$ est de la forme $an + b$ : les points de la représentation graphique sont
**alignés**. Une suite arithmétique est la version discrète d'une fonction affine.

### Sens de variation

| Raison | Suite |
|---|---|
| $r > 0$ | croissante |
| $r = 0$ | constante |
| $r < 0$ | décroissante |

### Somme des premiers entiers

$$\boxed{1 + 2 + \cdots + n = \frac{n(n+1)}{2}}$$

> **Exemple.** $1 + 2 + \cdots + 100 = \dfrac{100 \times 101}{2} = 5\,050$.

---

## 4. Suites géométriques

### Définition — rapport constant

$(u_n)$ est **géométrique** de raison $q$ (avec $q \neq 0$) lorsque, pour tout $n$,

$$\boxed{u_{n+1} = q \times u_n}$$

On **multiplie** toujours par la même quantité.

### Forme explicite

$$\boxed{u_n = u_0 \times q^{\,n}} \qquad \text{ou} \qquad u_n = u_p \times q^{\,n-p}$$

### Lien avec la fonction exponentielle

$u_n = u_0 q^n$ est la version discrète de $x \mapsto u_0 q^x$. Une suite géométrique est
l'analogue discret d'une croissance exponentielle.

### Sens de variation (cas $u_0 > 0$)

| Raison | Suite |
|---|---|
| $q > 1$ | croissante |
| $q = 1$ | constante |
| $0 < q < 1$ | décroissante |
| $q < 0$ | ni croissante ni décroissante — les termes **alternent** de signe |

### Somme des puissances

Pour $q \neq 1$ :

$$\boxed{1 + q + q^2 + \cdots + q^{\,n} = \frac{1 - q^{\,n+1}}{1 - q}}$$

> **Le moyen mnémotechnique** : *premier terme* $\times \dfrac{1 - q^{\text{nombre de termes}}}{1-q}$.
> Attention, de $q^0$ à $q^n$ il y a $n+1$ termes, pas $n$.

---

## 5. Taux d'évolution et suites géométriques

Une évolution de $t\,\%$ répétée correspond à une suite géométrique de raison

$$q = 1 + \frac{t}{100}$$

> **Exemple.** Un capital de $2\,000$ € placé à $3\,\%$ par an : $u_0 = 2000$ et $q = 1{,}03$.
> Au bout de 10 ans : $u_{10} = 2000 \times 1{,}03^{10} \approx 2\,687{,}83$ €.

> ⚠️ Une baisse de $20\,\%$ donne $q = 0{,}8$, **pas** $-0{,}2$.

---

## 6. Approche intuitive de la limite

Sur des exemples, on observe le comportement des termes quand $n$ devient très grand.

- $u_n = \dfrac{1}{n}$ : les termes se rapprochent de $0$ — **limite finie**
- $u_n = n^2$ : les termes dépassent toute valeur — **limite infinie**
- $u_n = (-1)^n$ : les termes oscillent entre $-1$ et $1$ — **pas de limite**

Pour une suite géométrique de raison $q > 0$ et $u_0 > 0$ :

| Raison | Comportement |
|---|---|
| $q > 1$ | les termes tendent vers $+\infty$ |
| $q = 1$ | suite constante |
| $0 < q < 1$ | les termes tendent vers $0$ |

> À ce stade, l'approche reste **intuitive** : la définition rigoureuse de la limite est vue
> en terminale.

---

## 7. À retenir absolument

| | Arithmétique | Géométrique |
|---|---|---|
| Relation | $u_{n+1} = u_n + r$ | $u_{n+1} = q\,u_n$ |
| Explicite | $u_n = u_0 + nr$ | $u_n = u_0\,q^n$ |
| Reconnaissance | différence constante | quotient constant |
| Modèle continu | fonction affine | fonction exponentielle |
| Somme | $1+2+\cdots+n = \dfrac{n(n+1)}{2}$ | $1+q+\cdots+q^n = \dfrac{1-q^{n+1}}{1-q}$ |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre $u_n$ et $(u_n)$** : un terme n'est pas la suite.
2. **Confondre les deux natures.** Différence constante → arithmétique. Quotient constant →
   géométrique. Toujours tester lequel des deux est constant.
3. **Se tromper d'indice de départ.** Si la suite commence à $u_1$, alors
   $u_n = u_1 + (n-1)r$, pas $u_0 + nr$.
4. **Compter les termes de travers dans une somme** : de $q^0$ à $q^n$ il y a $n+1$ termes.
5. **Traduire une baisse de $20\,\%$ par $q = -0{,}2$.** C'est $q = 0{,}8$.
6. **Croire que $q < 0$ donne une suite monotone.** Les termes alternent de signe.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, spécialité mathématiques première générale,
section « Suites numériques, modèles discrets » (ligne 1275 du .txt extrait).

Éléments du programme lisibles dans l'extraction : modes de génération (explicite, récurrence,
algorithme, motifs géométriques), notations, suites arithmétiques (accroissements constants,
lien fonctions affines, calcul de 1+2+...+n), suites géométriques (rapport constant, lien
fonction exponentielle, calcul de 1+q+...+q^n), introduction intuitive de la limite finie ou
infinie sur des exemples.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les capacités attendues exactes (l'extraction s'interrompt en milieu de phrase)
- Les démonstrations exigibles (probablement la somme des n premiers entiers, et la somme
  géométrique)
- Le programme mentionne aussi « Somme des n premiers carrés, des n premiers cubes »
  juste avant la section second degré — vérifier si cela relève de ce chapitre ou des
  approfondissements possibles
- Le raisonnement par récurrence n'est PAS au programme de première : ne pas l'introduire

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
