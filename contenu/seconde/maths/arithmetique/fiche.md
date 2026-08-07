---
id: 2nde-math-arithmetique
titre: "Arithmétique"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: mathematiques
programme: "BO du 2 avril 2026 — applicable rentrée 2026-2027"
duree_lecture_min: 11
prerequis:
  - Division euclidienne (cycle 4)
  - Multiples et diviseurs (cycle 4)
statut: brouillon
relu_par: null
---

# Arithmétique

> L'étude des nombres entiers. C'est aussi le chapitre où l'on apprend à **démontrer**
> proprement : « pair » ou « multiple de 3 » se traduisent par une écriture algébrique, et
> tout le raisonnement en découle.

---

## 1. Divisibilité

### Définition

Un entier $b$ **divise** un entier $a$ s'il existe un entier $k$ tel que

$$a = k \times b$$

On dit aussi que $a$ est un **multiple** de $b$.

> **La traduction algébrique est l'outil de démonstration.** « $n$ est pair » s'écrit
> $n = 2k$ ; « $n$ est impair » s'écrit $n = 2k+1$ ; « $n$ est multiple de $3$ » s'écrit
> $n = 3k$. C'est toujours par là qu'on commence une démonstration.

### Critères de divisibilité

| Divisible par | Critère |
|---|---|
| $2$ | le dernier chiffre est $0, 2, 4, 6, 8$ |
| $3$ | la somme des chiffres est divisible par $3$ |
| $4$ | les deux derniers chiffres forment un nombre divisible par $4$ |
| $5$ | le dernier chiffre est $0$ ou $5$ |
| $9$ | la somme des chiffres est divisible par $9$ |
| $10$ | le dernier chiffre est $0$ |

---

## 2. Division euclidienne

Pour $a$ entier et $b$ entier non nul, il existe un **unique** couple $(q\,;r)$ tel que

$$\boxed{a = bq + r \qquad \text{avec } 0 \leqslant r < b}$$

$q$ est le **quotient**, $r$ le **reste**.

> $b$ divise $a$ **si et seulement si** le reste est nul.

> **Exemple.** $47 = 6 \times 7 + 5$. Le quotient est $7$, le reste $5$.
> La contrainte $0 \leqslant r < b$ est essentielle : elle rend le couple unique.

---

## 3. Nombres premiers

### Définition

Un entier $p \geqslant 2$ est **premier** s'il n'admet **exactement que deux** diviseurs
positifs : $1$ et lui-même.

$$2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ \ldots$$

> ⚠️ **$1$ n'est pas premier** — il n'a qu'un seul diviseur.
> **$2$ est premier**, et c'est le seul nombre premier pair.

### Tester la primalité

Pour savoir si $n$ est premier, il suffit de tester les diviseurs premiers jusqu'à
$\sqrt{n}$.

*Pourquoi* : si $n = ab$ avec $a \leqslant b$, alors $a \leqslant \sqrt{n}$. Un diviseur
« au-delà de la racine » a forcément un complice en deçà.

> **Exemple.** $97$ est-il premier ? $\sqrt{97} \approx 9{,}8$. On teste $2$, $3$, $5$, $7$ :
> aucun ne divise $97$. Donc $97$ est premier — quatre essais suffisent.

### Décomposition en facteurs premiers

Tout entier $\geqslant 2$ s'écrit de façon **unique** comme produit de nombres premiers.

> **Exemple.** $360 = 2^3 \times 3^2 \times 5$.

---

## 4. Pair, impair, et le raisonnement type

> **Exemple de démonstration.** *Montrer que la somme de deux nombres impairs est paire.*
>
> Soient $a = 2k+1$ et $b = 2k'+1$ avec $k$ et $k'$ entiers.
> Alors $a + b = 2k + 2k' + 2 = 2(k + k' + 1)$.
> Comme $k + k' + 1$ est un entier, $a+b$ est un multiple de $2$, donc pair. ∎

> **La structure à reproduire** : on **pose l'écriture algébrique**, on calcule, on **factorise**
> pour faire apparaître le facteur voulu, on conclut en signalant que le second facteur est
> entier.

---

## 5. Contre-exemple et démonstration

- Pour montrer qu'une propriété est **fausse**, un seul **contre-exemple** suffit
- Pour montrer qu'elle est **vraie**, il faut une **démonstration générale** — des exemples,
  même nombreux, ne prouvent rien

> **Exemple.** « Tout nombre impair est premier » est faux : $9 = 3 \times 3$ le contredit.
> Un seul contre-exemple clôt la question.

---

## 6. À retenir absolument

| | |
|---|---|
| $b$ divise $a$ | $a = kb$ avec $k$ entier |
| Division euclidienne | $a = bq + r$, $0 \leqslant r < b$ |
| Pair / impair | $n = 2k$ / $n = 2k+1$ |
| Premier | exactement deux diviseurs |
| $1$ | **n'est pas** premier |
| Test de primalité | diviseurs premiers jusqu'à $\sqrt n$ |
| Contre-exemple | suffit à réfuter, jamais à prouver |

---

## 7. Les erreurs qui coûtent des points

1. **Dire que $1$ est premier.** Il n'a qu'un diviseur, pas deux.
2. **Dire que $2$ n'est pas premier** parce qu'il est pair. C'est le seul premier pair.
3. **Prouver par des exemples.** Vérifier sur dix cas ne démontre rien.
4. **Oublier la condition $0 \leqslant r < b$** dans la division euclidienne : sans elle,
   l'écriture n'est pas unique.
5. **Écrire deux nombres impairs $2k+1$ et $2k+1$** avec la **même** lettre : ils seraient
   égaux. Il faut deux variables distinctes.
6. **Oublier de conclure** qu'un facteur est bien entier : c'est ce qui achève la démonstration.
7. **Tester tous les entiers jusqu'à $n$** pour la primalité, au lieu de s'arrêter à $\sqrt n$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026, classe de seconde générale et technologique
(docs/programme-seconde-2026.pdf), section « Arithmétique » (ligne 1656 du .txt extrait).
L'extraction fait apparaître « Déterminer si un entier naturel … » et « Démontrer que »,
cohérents avec l'accent mis ici sur le raisonnement.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le PGCD et le PPCM sont-ils au programme de seconde ? Je ne les ai PAS inclus — point de
  périmètre à trancher.
- Les congruences ne sont pas en seconde (elles relèvent de l'option maths expertes en
  terminale) : non traitées.
- Le crible d'Ératosthène est-il attendu explicitement ?
- Le programme mentionne (ligne 1761) « … de centre donné. Toute autre utilisation est hors
  programme. » — cette restriction concerne une autre section, mais elle rappelle que le
  périmètre est strict : vérifier qu'aucune notion ajoutée ici n'est hors programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
