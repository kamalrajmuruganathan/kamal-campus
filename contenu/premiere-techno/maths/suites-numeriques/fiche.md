---
id: 1techno-math-suites-numeriques
titre: "Suites numériques"
voie: technologique
niveau: premiere
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — première, voie technologique"
duree_lecture_min: 13
prerequis:
  - Pourcentages et évolutions (Seconde)
  - Fonctions affines (Seconde)
statut: brouillon
relu_par: null
---

# Suites numériques

> Une suite modélise ce qui évolue **par étapes** : un capital année après année,
> une population génération après génération, un stock mois après mois. Deux modèles
> suffisent à décrire l'essentiel — l'un ajoute toujours la même quantité, l'autre
> multiplie toujours par le même coefficient.

---

## 1. Définitions et notations

Une **suite** $(u_n)$ associe un nombre à chaque entier $n$.

- $u_n$ est le **terme de rang $n$** — c'est un nombre
- $(u_n)$ désigne la **suite entière**

### Deux façons de définir une suite

| Mode | Écriture | Ce qu'on peut faire |
|---|---|---|
| **Explicite** | $u_n = f(n)$ | calculer $u_{100}$ directement |
| **Récurrence** | $u_{n+1} = f(u_n)$ + premier terme | il faut passer par tous les termes |

> **Exemple.** $u_n = 3n + 2$ donne $u_{50} = 152$ immédiatement.
> $u_0 = 2$ et $u_{n+1} = u_n + 3$ décrit la même suite, mais il faudrait
> cinquante étapes pour atteindre $u_{50}$.

### Représentation graphique

On place les points de coordonnées $(n\,;u_n)$ : c'est un **nuage de points**,
jamais une courbe continue — une suite n'est définie que pour des entiers.

---

## 2. Suites arithmétiques

### Définition

$$\boxed{u_{n+1} = u_n + r}$$

On **ajoute** toujours la même quantité $r$, appelée **raison**.

### Terme général

$$\boxed{u_n = u_0 + n\,r}$$

ou, si la suite commence au rang $p$ : $u_n = u_p + (n - p)\,r$.

### Sens de variation

| Raison | Suite |
|---|---|
| $r > 0$ | croissante |
| $r = 0$ | constante |
| $r < 0$ | décroissante |

### Représentation

Les points sont **alignés** : une suite arithmétique est la version discrète d'une
fonction affine.

> **Le réflexe de reconnaissance** : les **différences** $u_{n+1} - u_n$ sont-elles
> constantes ?

---

## 3. Suites géométriques

### Définition

$$\boxed{u_{n+1} = q \times u_n} \qquad (q \neq 0)$$

On **multiplie** toujours par la même quantité $q$, appelée **raison**.

### Terme général

$$\boxed{u_n = u_0 \times q^{\,n}}$$

### Sens de variation (pour $u_0 > 0$)

| Raison | Suite |
|---|---|
| $q > 1$ | croissante |
| $q = 1$ | constante |
| $0 < q < 1$ | décroissante |
| $q < 0$ | les termes **alternent** de signe |

### Représentation

Les points suivent une allure **exponentielle** : la croissance s'accélère, ou la
décroissance ralentit en se rapprochant de zéro.

> **Le réflexe de reconnaissance** : les **quotients** $\dfrac{u_{n+1}}{u_n}$
> sont-ils constants ?

---

## 4. Le lien avec les pourcentages — le cœur des applications

Une évolution répétée de $t\,\%$ correspond à une suite **géométrique** de raison

$$\boxed{q = 1 + \frac{t}{100}}$$

| Évolution | Raison |
|---|---|
| $+5\,\%$ | $1{,}05$ |
| $-15\,\%$ | $0{,}85$ |
| $+100\,\%$ | $2$ |

> ⚠️ Une **baisse** de $15\,\%$ donne $q = 0{,}85$ — **jamais** $-0{,}15$.
> Une raison est toujours positive quand la grandeur reste positive.

> **Exemple.** Un capital de $5\,000$ € placé à $4\,\%$ par an :
> $u_0 = 5000$ et $q = 1{,}04$, donc
> $u_{10} = 5000 \times 1{,}04^{10} \approx 7\,401$ €.

---

## 5. Reconnaître le bon modèle

C'est la compétence la plus évaluée du chapitre. Face à un énoncé :

| L'énoncé dit… | Modèle |
|---|---|
| « augmente de $50$ € par mois » | **arithmétique**, $r = 50$ |
| « augmente de $5\,\%$ par mois » | **géométrique**, $q = 1{,}05$ |
| « perd $200$ unités par an » | **arithmétique**, $r = -200$ |
| « perd $10\,\%$ par an » | **géométrique**, $q = 0{,}9$ |

> **La distinction tient à un seul mot** : une quantité fixe (€, unités, degrés) →
> arithmétique. Un **pourcentage** → géométrique.

Face à une liste de nombres : calcule les **différences**, puis les **quotients**.
Le premier qui est constant donne la nature.

---

## 6. À retenir absolument

| | Arithmétique | Géométrique |
|---|---|---|
| Relation | $u_{n+1} = u_n + r$ | $u_{n+1} = q\,u_n$ |
| Terme général | $u_n = u_0 + nr$ | $u_n = u_0\,q^n$ |
| Reconnaissance | différences constantes | quotients constants |
| Graphique | points alignés | allure exponentielle |
| Application type | quantité fixe ajoutée | pourcentage répété |
| Pourcentage $t$ | — | $q = 1 + \dfrac{t}{100}$ |

---

## 7. Les erreurs qui coûtent des points

1. **Traduire une baisse de $15\,\%$ par $q = -0{,}15$** au lieu de $0{,}85$.
2. **Confondre les deux modèles** : une quantité fixe n'est pas un pourcentage.
3. **Se tromper d'indice de départ** : si la suite commence à $u_1$, alors
   $u_n = u_1 + (n-1)r$.
4. **Relier les points d'une suite par une courbe** : une suite est un nuage de
   points, pas une fonction continue.
5. **Confondre $u_n$ et $(u_n)$** : un terme n'est pas la suite.
6. **Croire qu'une raison négative donne une suite décroissante** : en géométrique,
   les termes alternent de signe.
7. **Additionner les pourcentages** sur plusieurs périodes : on multiplie les raisons.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, « Programme de mathématiques de la
classe de première de la voie technologique »
(docs/programme-premiere-techno-2026.pdf), partie « Analyse », section « Suites
numériques » (ligne 1684 du .txt extrait).

⚠️ POINT DE PÉRIMÈTRE IMPORTANT : ce programme est COMMUN à toutes les séries
technologiques (STI2D, STL, STMG, ST2S, STD2A, STHR, S2TMD). Seules deux rubriques
varient : « Algorithmique et programmation » (sauf STD2A) et « Activités
géométriques » (uniquement STD2A). Il n'existe donc PAS sept programmes de maths
distincts en première technologique.

Éléments lisibles dans l'extraction : sens de variation, représentation graphique
par NUAGE DE POINTS, allure exponentielle, relation de récurrence, explicitation du
terme de rang n, capacité « Reconnaître… ».

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Les SOMMES de termes (1+2+...+n, ou somme géométrique) sont-elles au programme de
  la voie technologique ? Je ne les ai PAS incluses, faute de trace dans
  l'extraction — point de périmètre net à trancher.
- La notion de limite est-elle abordée, même intuitivement ?
- Le programme mentionne un lien avec les algorithmes (calcul de termes par boucle) :
  faut-il l'intégrer ici ou dans le chapitre Algorithmique ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
