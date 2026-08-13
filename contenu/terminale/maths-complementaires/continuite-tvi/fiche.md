---
id: tale-compl-math-continuite-tvi
titre: "Continuité et théorème des valeurs intermédiaires"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 11
prerequis:
  - Limite d'une fonction en un point et en l'infini (Terminale)
  - Dérivation et sens de variation (Première)
  - Tableau de variations (Première)
statut: brouillon
relu_par: null
---

# Continuité et théorème des valeurs intermédiaires

> Tracer une courbe « sans lever le crayon » : voilà l'image intuitive de la continuité.
> Ce chapitre transforme cette image en un outil très concret — celui qui garantit
> qu'une équation **a une solution**, et souvent une seule, même quand tu es incapable
> de la calculer à la main.

En maths complémentaires, l'objectif est **pratique** : savoir justifier proprement
qu'une équation $f(x) = k$ a une solution, dire s'il y en a une seule, et l'encadrer.
On ne cherche pas la théorie la plus fine, on cherche à s'en servir.

---

## 1. La continuité d'une fonction

### Idée et définition

Une fonction est **continue** sur un intervalle quand on peut tracer sa courbe
**sans lever le crayon** : pas de saut, pas de trou. Formellement, pour $a$ dans un
intervalle $I$ :

$$\boxed{f \text{ est continue en } a \iff \lim_{x \to a} f(x) = f(a)}$$

La courbe se dirige vers $f(a)$ **et** l'atteint effectivement. $f$ est **continue sur
$I$** lorsqu'elle est continue en chaque point de $I$.

> **Exemple.** $f(x) = x^2 + 1$ vérifie $\displaystyle\lim_{x \to 3} f(x) = 10 = f(3)$.
> Elle est continue en $3$, et de la même façon partout : elle est continue sur $\mathbb{R}$.

### Ce qu'il faut retenir en pratique

Tu ne calculeras presque **jamais** une limite pour prouver la continuité. Tu utiliseras
ce résultat, à connaître par cœur :

> ⚠️ **À connaître.** Toutes les fonctions usuelles — polynômes, $\sqrt{\ }$, $\exp$,
> $\ln$, $\sin$, $\cos$, valeur absolue — sont continues sur tout intervalle de leur
> ensemble de définition. Il en va de même de leurs **sommes, produits, quotients** (là
> où le dénominateur ne s'annule pas) et **composées**. La continuité se **justifie**
> par une phrase, elle ne se calcule pas.

De plus, un résultat très commode relie continuité et dérivation :

$$\boxed{f \text{ dérivable sur } I \implies f \text{ continue sur } I}$$

> **Exemple.** $f(x) = x^3 - 2x$ est dérivable sur $\mathbb{R}$ (c'est un polynôme), donc
> continue sur $\mathbb{R}$. Une phrase suffit, aucune limite à écrire.

> ⚠️ La **réciproque est fausse** : une fonction peut être continue sans être dérivable.
> Le contre-exemple à citer est $f(x) = |x|$, **continue** en $0$ mais **non dérivable**
> en $0$ (sa courbe forme un point anguleux). Retiens : « dérivable » est plus fort que
> « continue ».

### Une fonction qui n'est pas continue

Une fonction n'est **pas** continue en $a$ si sa courbe fait un **saut** en $a$.

> **Exemple.** La fonction « partie entière » $x \mapsto \lfloor x \rfloor$ saute de $0$
> à $1$ en $x = 1$ : la limite à gauche $(0)$ ne vaut pas $f(1) = 1$. Elle est
> **discontinue** en chaque entier. Une telle fonction ne relève **pas** du TVI.

---

## 2. Le théorème des valeurs intermédiaires (TVI)

### Le théorème

$$\boxed{\begin{array}{l} f \text{ continue sur } [a\,;b] \\ k \text{ compris entre } f(a) \text{ et } f(b) \end{array} \implies \exists\, c \in [a\,;b],\ f(c) = k}$$

En français : une fonction **continue** prend **toutes les valeurs** situées entre
$f(a)$ et $f(b)$. Sa courbe ne peut pas passer de la hauteur $f(a)$ à la hauteur $f(b)$
sans franchir, au passage, chaque hauteur $k$ intermédiaire.

> **Exemple.** $f(x) = x^3 + x - 1$ est continue sur $[0\,;1]$, avec $f(0) = -1$ et
> $f(1) = 1$. Comme $0$ est compris entre $-1$ et $1$, il existe $c \in [0\,;1]$ tel que
> $f(c) = 0$ : l'équation $f(x) = 0$ a **au moins une** solution dans $[0\,;1]$.

> ⚠️ Le TVI donne l'**existence** d'une solution, **pas** son unicité, et **pas** sa
> valeur. Il peut y avoir plusieurs solutions.

### Cas fréquent : le changement de signe

Quand $k = 0$, la condition « $0$ compris entre $f(a)$ et $f(b)$ » revient à dire que
$f(a)$ et $f(b)$ sont **de signes contraires**. C'est la version que tu rencontreras le
plus souvent : *si $f$ est continue et change de signe entre $a$ et $b$, alors elle
s'annule au moins une fois entre $a$ et $b$*.

---

## 3. Le cas strictement monotone : existence ET unicité

C'est le cœur du chapitre en maths complémentaires. On ajoute au TVI une hypothèse de
**stricte monotonie**, et on gagne l'**unicité**.

$$\boxed{\begin{array}{l} f \text{ continue sur } [a\,;b] \\ f \text{ strictement monotone sur } [a\,;b] \\ k \text{ compris entre } f(a) \text{ et } f(b) \end{array} \implies \exists\,!\ c \in [a\,;b],\ f(c) = k}$$

Le symbole $\exists\,!$ se lit « il existe **un unique** ». La stricte monotonie empêche
la courbe de « redescendre » (ou « remonter ») : chaque hauteur $k$ n'est atteinte
**qu'une seule fois**.

> **Exemple.** $f(x) = x^3 + x - 1$ est continue et **strictement croissante** sur
> $\mathbb{R}$ (car $f'(x) = 3x^2 + 1 > 0$). L'équation $f(x) = 0$ a donc **une unique**
> solution réelle.

Ce résultat reste valable sur un intervalle **ouvert ou infini** comme
$\left]a\,;b\right[$ ou $\left]a\,;+\infty\right[$ : on remplace alors $f(a)$ et $f(b)$
par les **limites** de $f$ aux bornes.

> **La flèche du tableau de variations.** Dans un tableau de variations, une flèche
> signifie par convention **deux choses à la fois** : $f$ est **continue** et
> **strictement monotone** sur l'intervalle. C'est ce qui te permet d'invoquer ce
> théorème directement à partir du tableau, une fois le signe de $f'$ justifié.

---

## 4. Méthodes

### 4.1 Montrer que $f(x) = k$ a une unique solution

C'est **la** capacité attendue. Procède **toujours** dans cet ordre.

1. **Continuité** — justifie que $f$ est continue sur l'intervalle (fonction usuelle,
   polynôme, dérivable…). Une phrase.
2. **Monotonie** — étudie le signe de $f'$ et dresse le tableau de variations.
3. **Valeurs aux bornes** — calcule $f(a)$ et $f(b)$ (ou les limites si l'intervalle
   est ouvert/infini).
4. **Conclusion** — si $k$ est compris entre ces deux valeurs, le cas strictement
   monotone donne **existence et unicité** de la solution.

> **Exemple rédigé.** Résoudre $x^3 + x - 1 = 0$ sur $\mathbb{R}$.
> - $f(x) = x^3 + x - 1$ est un polynôme, donc **continue** sur $\mathbb{R}$.
> - $f'(x) = 3x^2 + 1 > 0$ : $f$ est **strictement croissante** sur $\mathbb{R}$.
> - $\displaystyle\lim_{x \to -\infty} f = -\infty$ et $\displaystyle\lim_{x \to +\infty} f = +\infty$.
> - $0$ est compris entre ces deux limites : d'après le TVI dans le cas strictement
>   monotone, l'équation admet **une unique solution** $\alpha \in \mathbb{R}$.

### 4.2 Compter les solutions quand $f$ n'est pas monotone

Si $f$ n'est pas monotone sur tout l'intervalle, on **découpe** selon les variations.
Sur chaque morceau où $f$ est strictement monotone, on applique le cas strictement
monotone, puis on **additionne** le nombre de solutions.

> **Exemple.** Pour $f(x) = x^3 - 3x$ sur $[-2\,;2]$, le tableau de variations donne trois
> morceaux monotones. On teste sur chacun si $k$ est entre les valeurs aux bornes, et on
> additionne : cela peut donner $0$, $1$, $2$ ou $3$ solutions selon $k$.

### 4.3 Encadrer la solution : balayage et dichotomie

Une fois l'existence (et l'unicité) acquises, on **encadre** la solution $\alpha$ à la
précision voulue avec la calculatrice.

**Balayage.** On calcule $f$ de proche en proche avec un **pas fixe** (par exemple
$0{,}1$) et on repère le changement de signe.

> Sur l'exemple $f(x) = x^3 + x - 1$ : $f(0{,}6) \approx -0{,}18 < 0$ et
> $f(0{,}7) \approx 0{,}04 > 0$. La fonction change de signe : donc $0{,}6 < \alpha < 0{,}7$.
> En reprenant avec un pas de $0{,}01$, on affine l'encadrement.

**Dichotomie.** On part d'un intervalle $[a\,;b]$ où $f$ change de signe, et on le
**coupe en deux** à chaque étape en gardant la moitié qui contient encore la solution.
La **longueur de l'encadrement est divisée par 2** à chaque tour.

```
a, b : bornes telles que f(a) et f(b) sont de signes contraires
Tant que  b - a > précision :
    m = (a + b) / 2
    Si  f(a) et f(m) sont de signes contraires :
        b = m          # la solution est dans [a ; m]
    Sinon :
        a = m          # la solution est dans [m ; b]
Renvoyer a, b
```

> **Pourquoi ça marche.** À chaque tour, l'intervalle gardé contient encore un
> changement de signe : par le TVI, la solution y est toujours. La dichotomie converge
> **vite** (une dizaine d'étapes suffit pour $3$ décimales), là où le balayage est simple
> mais lent.

---

## 5. Cas particuliers et pièges

- **Intervalle ouvert ou infini.** Le cas strictement monotone reste valable sur
  $\left]a\,;b\right[$, $\left]a\,;+\infty\right[$, etc. : on remplace $f(a)$, $f(b)$
  par les **limites** aux bornes. Une limite n'est **pas** une valeur atteinte — surveille
  tes crochets ouverts/fermés dans la conclusion.
- **$k$ n'est pas entre les valeurs.** Si $k$ n'est pas compris entre $f(a)$ et $f(b)$,
  le théorème ne dit **rien** : il peut y avoir zéro, une ou plusieurs solutions.
  L'hypothèse n'est pas vérifiée, donc on ne conclut pas.
- **Continue mais pas monotone.** Pour appliquer le TVI, seule la **continuité** est
  nécessaire (existence). La monotonie sert uniquement à obtenir l'**unicité**. Ne mélange
  pas les deux rôles.
- **Continue ≠ dérivable.** La dérivabilité sert seulement à trouver la monotonie via le
  signe de $f'$. Le TVI, lui, ne demande que la continuité.

---

## 6. Tableau récapitulatif

| Notion | L'essentiel |
|---|---|
| Continuité en $a$ | $\displaystyle\lim_{x\to a} f(x) = f(a)$ — courbe « sans lever le crayon » |
| Fonctions usuelles | polynômes, $\sqrt{\ }$, $\exp$, $\ln$, $\sin$, $\cos$… : continues sur leur ensemble de définition |
| Dérivable $\Rightarrow$ continue | vrai ; **la réciproque est fausse** ($|x|$ en $0$) |
| TVI | $f$ continue $+$ $k$ entre $f(a),f(b)$ $\Rightarrow$ **au moins une** solution |
| Changement de signe | $f$ continue et $f(a),f(b)$ de signes contraires $\Rightarrow$ $f$ s'annule |
| Cas strictement monotone | TVI $+$ **stricte monotonie** $\Rightarrow$ solution **unique** |
| Flèche du tableau | signifie **continue ET strictement monotone** |
| Plusieurs solutions | découper l'intervalle selon les variations, puis additionner |
| Encadrer $\alpha$ | balayage (pas fixe) ou **dichotomie** (intervalle $\div 2$) |

---

## 7. Les erreurs qui coûtent des points

1. **Appliquer le TVI sans justifier la continuité.** C'est l'hypothèse n°1. Sans
   continuité, une courbe peut sauter par-dessus la valeur $k$ : le théorème ne
   s'applique pas. Écris **toujours** la phrase de continuité avant de conclure.
2. **Conclure à l'unicité sans la stricte monotonie.** Le TVI seul ne donne que
   l'**existence**. Sans stricte monotonie, il peut y avoir plusieurs solutions.
   L'unicité exige le cas strictement monotone.
3. **Croire que continue implique dérivable.** C'est l'inverse : dérivable $\Rightarrow$
   continue, jamais le contraire. La valeur absolue en $0$ est le contre-exemple à citer.
4. **Oublier de vérifier que $k$ est entre $f(a)$ et $f(b)$.** Si cette condition tombe,
   le théorème est muet : on ne peut affirmer ni l'existence ni l'absence de solution.
5. **Donner une valeur exacte au lieu d'un encadrement.** Le balayage et la dichotomie
   fournissent un **encadrement** ($0{,}6 < \alpha < 0{,}7$), pas la valeur exacte de
   $\alpha$. Écrire « $\alpha = 0{,}65$ » est faux.
6. **Confondre limite et valeur aux bornes** sur un intervalle ouvert. Sur
   $\left]a\,;+\infty\right[$, on raisonne avec les **limites**, et une limite n'est pas
   une valeur atteinte : attention aux crochets dans la conclusion.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
section « MATHÉMATIQUES COMPLÉMENTAIRES » > « Continuité et théorème des valeurs
intermédiaires », lignes 54 à 57.
Verbatim du programme :
- Contenus : continuité d'une fonction ; théorème des valeurs intermédiaires ; cas
  strictement monotone (existence et unicité d'une solution de f(x)=k).
- Capacités : justifier l'existence/l'unicité d'une solution ; l'encadrer.

Nature de la source : programme des ENSEIGNEMENTS OPTIONNELS de mathématiques, terminale
générale (arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019), enseignement de maths
COMPLÉMENTAIRES. Extraction via WebFetch depuis le PDF officiel education.gouv.fr
(spe265_annexe_1159134.pdf). À CONFRONTER au PDF officiel avant toute publication ; la
reproduction verbatim des rubriques n'est pas garantie exhaustive.

Différences assumées avec le chapitre de spécialité (tale-spe-math-continuite) :
- L'enseignement complémentaire est « plus léger que la spécialité, organisé autour de
  thèmes d'étude » (l. 51). Le programme complémentaire NE MENTIONNE PAS l'image d'une
  suite convergente par une fonction continue, ni les suites récurrentes u_{n+1}=f(u_n).
  Ces deux points, présents en spécialité, ont donc été VOLONTAIREMENT RETIRÉS ici.
- Ton allégé, moins de formalisme, accent mis sur la capacité pratique (justifier
  existence/unicité + encadrer), conformément à la consigne « niveau complémentaires ».

Choix de rédaction à soumettre au relecteur :
- Contre-exemple valeur absolue, fonction partie entière, convention « flèche = continue
  + strictement monotone », prolongement aux intervalles ouverts/infinis (limites aux
  bornes) : compléments standards, non verbatim dans le programme, à valider.
- Balayage/dichotomie : lien avec l'algorithmique ; pseudo-code de dichotomie à vérifier.
- Valeurs numériques de l'exemple x^3+x-1 : f(0,6) ≈ -0,184 et f(0,7) ≈ 0,043 (arrondis),
  changement de signe correct → 0,6 < α < 0,7. À revérifier au calcul.
- Id « tale-compl-math-continuite-tvi » et préfixe « tale- » fournis par la consigne.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
