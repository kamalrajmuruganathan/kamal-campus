---
id: 1sti2d-mesure-incertitudes
titre: "Mesure et incertitudes"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 11
prerequis:
  - Grandeurs et unités (Seconde)
  - Statistiques à un caractère (Seconde)
statut: brouillon
relu_par: null
---

# Mesure et incertitudes

> Aucune mesure n'est exacte. Un résultat sans incertitude n'a pas de valeur
> scientifique — c'est ce que ce chapitre installe, et c'est une exigence permanente
> en STI2D et STL, où l'on mesure tout le temps.

---

## 1. Grandeur, valeur, unité

Trois notions à distinguer soigneusement :

| Notion | Sens | Exemple |
|---|---|---|
| **Grandeur** | ce qu'on mesure | une longueur |
| **Valeur** | le nombre obtenu | $2{,}45$ |
| **Unité** | la référence de comparaison | le mètre |

$$L = 2{,}45\ \mathrm{m}$$

> ⚠️ **Un résultat sans unité est faux**, pas seulement incomplet. « $2{,}45$ » ne
> veut rien dire : mètres, centimètres, kilomètres ?

---

## 2. Le Système international

Sept grandeurs de base, dont cinq utilisées couramment au lycée :

| Grandeur | Unité | Symbole |
|---|---|---|
| Longueur | mètre | m |
| Masse | kilogramme | kg |
| Temps | seconde | s |
| Intensité électrique | ampère | A |
| Température | kelvin | K |

Toutes les autres unités s'en déduisent : le newton vaut kg·m·s⁻², le volt s'exprime
à partir du watt et de l'ampère.

### Préfixes usuels

| Préfixe | Symbole | Facteur |
|---|---|---|
| nano | n | $10^{-9}$ |
| micro | µ | $10^{-6}$ |
| milli | m | $10^{-3}$ |
| kilo | k | $10^{3}$ |
| méga | M | $10^{6}$ |
| giga | G | $10^{9}$ |

---

## 3. Pourquoi une mesure n'est jamais exacte

Deux familles de causes, qu'il faut savoir distinguer :

| Type d'erreur | Origine | Effet | Remède |
|---|---|---|---|
| **Aléatoire** | fluctuations imprévisibles (lecture, bruit) | dispersion autour de la vraie valeur | **répéter** les mesures et moyenner |
| **Systématique** | défaut constant (appareil déréglé, zéro décalé) | **décalage** toujours dans le même sens | étalonner l'appareil |

> **La différence est décisive.** Répéter une mesure réduit l'erreur aléatoire, mais
> **ne corrige jamais** une erreur systématique : un appareil mal étalonné se trompera
> mille fois de la même façon.

---

## 4. Valeur mesurée et incertitude

On écrit le résultat sous la forme

$$\boxed{X = X_{\text{mesurée}} \pm u(X)}$$

où $u(X)$ est l'**incertitude**. Elle délimite un intervalle dans lequel la vraie
valeur se trouve très probablement.

> **Exemple.** $L = 2{,}45 \pm 0{,}02$ m signifie que la longueur est très
> probablement comprise entre $2{,}43$ m et $2{,}47$ m.

### Incertitude relative

$$\boxed{\text{incertitude relative} = \frac{u(X)}{X}}$$

Sans unité, souvent exprimée en pourcentage. C'est elle qui permet de **comparer la
qualité** de deux mesures portant sur des grandeurs différentes.

> **Exemple.** $u = 1$ cm sur $2$ m, c'est $0{,}5\,\%$ — une bonne mesure.
> $u = 1$ cm sur $5$ cm, c'est $20\,\%$ — une mauvaise mesure.
> Pourtant l'incertitude absolue est identique.

---

## 5. Répéter les mesures

Quand on dispose de $n$ mesures indépendantes :

- la **moyenne** $\bar x$ est la meilleure estimation de la valeur
- la **dispersion** (écart-type) renseigne sur l'incertitude

> Plus on répète, plus la moyenne est fiable — **à condition** qu'il n'y ait pas
> d'erreur systématique.

---

## 6. Chiffres significatifs

Le nombre de chiffres écrits doit refléter la **précision réelle** de la mesure.

> ⚠️ **La calculatrice n'est pas une source de précision.** Si l'on mesure $2{,}4$ cm
> et $1{,}3$ cm, le produit affiché $3{,}12$ cm² doit être arrondi à $3{,}1$ cm² :
> on ne peut pas gagner en précision par un calcul.

### Règles

| Opération | Règle |
|---|---|
| Produit, quotient | on garde le **nombre de chiffres significatifs** du facteur le moins précis |
| Somme, différence | on garde le nombre de **décimales** du terme le moins précis |

> L'incertitude, elle, s'écrit avec **un seul chiffre significatif** en général, et la
> valeur est arrondie au même rang.

---

## 7. Comparer deux résultats

Deux mesures sont **compatibles** si leurs intervalles $\left[X - u ; X + u\right]$
se **recouvrent**.

> **Exemple.** $9{,}78 \pm 0{,}05$ et $9{,}81 \pm 0{,}03$ : les intervalles
> $[9{,}73\,;9{,}83]$ et $[9{,}78\,;9{,}84]$ se recouvrent — les résultats sont
> compatibles.
>
> Si les intervalles étaient disjoints, il faudrait chercher une erreur systématique
> ou une incertitude sous-estimée.

---

## 8. À retenir absolument

| | |
|---|---|
| Résultat complet | valeur **+ unité + incertitude** |
| Erreur aléatoire | corrigée en **répétant** |
| Erreur systématique | corrigée en **étalonnant** |
| Écriture | $X = X_{\text{mes}} \pm u(X)$ |
| Incertitude relative | $\dfrac{u(X)}{X}$, sans unité |
| Chiffres significatifs | limités par la mesure la moins précise |
| Compatibilité | les intervalles se recouvrent |

---

## 9. Les erreurs qui coûtent des points

1. **Écrire un résultat sans unité.**
2. **Recopier tous les chiffres de la calculatrice** : un calcul n'ajoute pas de
   précision.
3. **Croire que répéter les mesures corrige une erreur systématique.**
4. **Confondre incertitude absolue et relative** : la première a une unité, la seconde
   non.
5. **Oublier de convertir** avant de comparer deux valeurs.
6. **Conclure qu'une mesure est fausse** parce qu'elle diffère d'une autre, sans
   vérifier si les intervalles se recouvrent.
7. **Donner l'incertitude avec trois chiffres significatifs** : un seul suffit.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », section « Mesure et incertitudes ».

Éléments lisibles dans l'extraction : « Grandeurs et unités », capacité « Distinguer
les notions de grandeur, valeur et unité ». Le reste de la section est trop dégradé
dans l'extraction pour être cité littéralement — la fiche est donc construite sur ce
marqueur et sur la structure standard du thème « Mesure et incertitudes », commune
aux programmes de physique-chimie de 2019.

⚠️ FICHE À RELIRE EN PRIORITÉ : c'est celle dont l'adossement au texte officiel est
le MOINS assuré du lot STI2D/STL. Vérifier notamment :
- la présence et le périmètre des ERREURS ALÉATOIRES / SYSTÉMATIQUES ;
- si l'incertitude-type est introduite formellement (avec écart-type expérimental),
  ou seulement de façon qualitative ;
- si la comparaison de deux résultats par recouvrement d'intervalles est exigible ;
- si les règles sur les chiffres significatifs sont explicitées dans le texte ;
- la liste exacte des unités du SI attendues.

Rédaction originale. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
