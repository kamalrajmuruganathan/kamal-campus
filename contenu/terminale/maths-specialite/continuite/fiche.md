---
id: tale-spe-math-continuite
titre: "Continuité et théorème des valeurs intermédiaires"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "BO du 2 avril 2026 — spécialité mathématiques, applicable en terminale à la rentrée 2027-2028"
duree_lecture_min: 14
prerequis:
  - Limite d'une fonction en un point et en l'infini (Terminale)
  - Dérivation et sens de variation (Première)
  - Suites et convergence (Terminale)
statut: brouillon
relu_par: null
---

# Continuité et théorème des valeurs intermédiaires

> Tracer la courbe « sans lever le crayon » : voilà l'image intuitive de la continuité.
> Mais l'intuition ne prouve rien. Ce chapitre transforme cette image en un outil
> redoutable — celui qui garantit qu'une équation **a une solution**, et parfois
> une seule, même quand on est incapable de la calculer.

---

## 1. Continuité en un point, sur un intervalle

### Définition (par les limites)

Soit $f$ une fonction définie sur un intervalle $I$ et $a \in I$.

$$\boxed{f \text{ est continue en } a \iff \lim_{x \to a} f(x) = f(a)}$$

Trois choses doivent donc être réunies : $f(a)$ **existe**, la limite $\displaystyle\lim_{x \to a} f(x)$ **existe**, et ces deux nombres sont **égaux**.

$f$ est **continue sur l'intervalle $I$** lorsqu'elle est continue en **chaque** point de $I$.

> **Exemple.** La fonction $f(x) = x^2 + 1$ vérifie $\displaystyle\lim_{x \to 3} f(x) = 10 = f(3)$.
> Elle est continue en $3$, et de la même façon en tout réel : elle est continue sur $\mathbb{R}$.

### Ce que la continuité interdit

Une fonction n'est **pas** continue en $a$ si sa courbe fait un **saut** en $a$, ou si $f(a)$ n'est pas la valeur vers laquelle la courbe se dirige.

> **Exemple (partie entière).** $x \mapsto \lfloor x \rfloor$ saute de $0$ à $1$ en $x = 1$ :
> la limite à gauche $(0)$ n'est pas égale à $f(1) = 1$. Elle est **discontinue** en tout entier.

> ⚠️ **À connaître.** Toutes les fonctions usuelles — polynômes, $\sqrt{\ }$, $\exp$, $\ln$,
> $\sin$, $\cos$, valeur absolue, et leurs sommes, produits, quotients (là où le
> dénominateur ne s'annule pas), composées — sont continues sur tout intervalle de
> leur ensemble de définition. En pratique, la continuité se **justifie**, elle ne se
> calcule presque jamais à la main.

---

## 2. Propriétés et théorèmes

### 2.1 Toute fonction dérivable est continue

$$\boxed{f \text{ dérivable en } a \implies f \text{ continue en } a}$$

Si $f$ est dérivable sur $I$, alors $f$ est continue sur $I$.

> **Exemple.** $f(x) = x^3 - 2x$ est dérivable sur $\mathbb{R}$ (c'est un polynôme),
> donc elle est continue sur $\mathbb{R}$. On n'a même pas besoin de calculer une limite.

> ⚠️ **La réciproque est FAUSSE.** Une fonction peut être continue en un point sans y
> être dérivable. C'est le point le plus piégeux du chapitre.

### 2.2 Le contre-exemple à connaître : la valeur absolue

La fonction $f(x) = |x|$ est **continue** en $0$ : $\displaystyle\lim_{x \to 0} |x| = 0 = f(0)$.

Mais elle n'est **pas dérivable** en $0$ : sa courbe forme un **point anguleux**. Le taux
d'accroissement vaut $+1$ à droite de $0$ et $-1$ à gauche : il n'a pas de limite unique,
donc $f'(0)$ n'existe pas.

> **À retenir.** Continue $\ne$ dérivable. « Dérivable » est **plus fort** que « continue ».
> Une pointe (valeur absolue), un rebroussement : continue, mais pas dérivable.

### 2.3 Image d'une suite convergente

Si $f$ est continue en $\ell$ et si $(u_n)$ est une suite telle que $\displaystyle\lim_{n \to +\infty} u_n = \ell$
(avec $\ell$ dans l'intervalle où $f$ est continue), alors :

$$\boxed{\lim_{n \to +\infty} f(u_n) = f(\ell)}$$

> **Exemple.** Soit $u_n = 1 + \dfrac{1}{n}$, qui converge vers $1$. Comme $f(x)=x^2$ est
> continue en $1$, la suite $f(u_n) = \left(1+\frac1n\right)^2$ converge vers $f(1) = 1$.

Cette propriété est **le moteur** des suites récurrentes $u_{n+1} = f(u_n)$ (méthode 4.3) :
si une telle suite converge vers $\ell$ et si $f$ est continue, alors $f(\ell) = \ell$.

### 2.4 Théorème des valeurs intermédiaires (TVI)

$$\boxed{\begin{array}{l} f \text{ continue sur } [a\,;b] \\ k \text{ compris entre } f(a) \text{ et } f(b) \end{array} \implies \exists\, c \in [a\,;b],\ f(c) = k}$$

Autrement dit : une fonction continue **prend toutes les valeurs intermédiaires** entre
$f(a)$ et $f(b)$. Sa courbe ne peut pas passer de $f(a)$ à $f(b)$ sans franchir chaque
hauteur $k$ située entre les deux.

> **Exemple.** $f(x) = x^3 + x - 1$ est continue sur $[0\,;1]$, avec $f(0) = -1$ et
> $f(1) = 1$. Comme $0$ est compris entre $-1$ et $1$, il existe $c \in [0\,;1]$ tel que
> $f(c) = 0$ : l'équation a **au moins une** solution dans $[0\,;1]$.

> ⚠️ Le TVI donne l'**existence**, pas l'unicité, et pas la valeur de $c$. Il peut y
> avoir plusieurs solutions.

### 2.5 Corollaire : le théorème de la bijection

C'est le TVI **renforcé par la stricte monotonie**, qui apporte l'**unicité**.

$$\boxed{\begin{array}{l} f \text{ continue sur } [a\,;b] \\ f \text{ strictement monotone sur } [a\,;b] \\ k \text{ compris entre } f(a) \text{ et } f(b) \end{array} \implies \exists\,!\ c \in [a\,;b],\ f(c) = k}$$

Le symbole $\exists\,!$ se lit « il existe **un unique** ». La stricte monotonie empêche
la courbe de « repasser » par une même hauteur : chaque valeur $k$ est atteinte **une
seule fois**.

Ce résultat s'étend à un intervalle **ouvert ou infini** $\left]a\,;b\right[$ : on
remplace alors $f(a)$ et $f(b)$ par les **limites** de $f$ aux bornes.

> **Exemple.** $f(x) = x^3 + x - 1$ est continue et **strictement croissante** sur
> $\mathbb{R}$ (car $f'(x) = 3x^2 + 1 > 0$). L'équation $f(x) = 0$ a donc **une unique**
> solution réelle.

---

## 3. Convention du tableau de variations

Dans un tableau de variations, une **flèche** sous-entend par convention **deux
informations à la fois** : $f$ est **continue** et **strictement monotone** sur
l'intervalle concerné. C'est ce qui autorise à invoquer le théorème de la bijection
directement à partir du tableau (à condition d'avoir justifié le signe de $f'$ avant).

---

## 4. Méthodes

### 4.1 Étudier l'équation $f(x) = k$ : existence, unicité, encadrement

C'est **la** capacité attendue du chapitre. Procède **toujours** dans cet ordre.

1. **Continuité** — justifie que $f$ est continue sur l'intervalle (dérivable, usuelle…).
2. **Monotonie** — étudie le signe de $f'$ ; dresse le tableau de variations.
3. **Valeurs aux bornes** — calcule $f(a)$ et $f(b)$ (ou les limites aux bornes).
4. **Conclusion** — si $k$ est entre ces valeurs, le théorème de la bijection donne
   **existence et unicité** de la solution.
5. **Encadrement** — précise la solution avec la calculatrice (méthodes 4.2).

> **Exemple rédigé.** Résoudre $x^3 + x - 1 = 0$ sur $\mathbb{R}$.
> - $f(x) = x^3 + x - 1$ est un polynôme, donc **continue** sur $\mathbb{R}$.
> - $f'(x) = 3x^2 + 1 > 0$ : $f$ est **strictement croissante** sur $\mathbb{R}$.
> - $\displaystyle\lim_{x \to -\infty} f = -\infty$ et $\displaystyle\lim_{x \to +\infty} f = +\infty$.
> - $0$ est compris entre ces deux limites : d'après le théorème de la bijection,
>   l'équation admet **une unique solution** $\alpha \in \mathbb{R}$.

### 4.2 Encadrer la solution : balayage et dichotomie (lien avec l'algorithmique)

Une fois l'existence et l'unicité acquises, on **encadre** la solution $\alpha$ à la
précision voulue.

**Balayage.** On calcule $f$ de proche en proche avec un pas fixe (par exemple $0{,}1$)
et on repère le changement de signe.

> Sur l'exemple : $f(0{,}6) \approx -0{,}18 < 0$ et $f(0{,}7) \approx 0{,}04 > 0$.
> Donc $0{,}6 < \alpha < 0{,}7$.

**Dichotomie.** On part d'un intervalle $[a\,;b]$ où $f$ change de signe, et on le
**coupe en deux** à chaque étape en gardant la moitié qui contient la solution.
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

> **Pourquoi ça marche.** À chaque tour, l'intervalle contient encore un changement de
> signe : par le TVI, la solution y est toujours. La dichotomie **converge très vite**
> (une dizaine d'étapes suffit pour 3 décimales), là où le balayage est simple mais lent.

### 4.3 Étudier une suite récurrente $u_{n+1} = f(u_n)$

Pour $f$ **continue** d'un intervalle dans lui-même :

1. Montre que la suite est bien définie (les $u_n$ restent dans l'intervalle).
2. Étudie sa monotonie et une éventuelle borne, pour prouver qu'elle **converge**.
3. La **limite $\ell$** est alors solution de l'équation $\boxed{f(\ell) = \ell}$
   (grâce à l'image d'une suite convergente, propriété 2.3).
4. Résous $f(\ell) = \ell$ pour identifier $\ell$.

> **Attention à l'ordre.** L'égalité $f(\ell) = \ell$ n'est valable **qu'après** avoir
> prouvé que la suite converge. Écrire « la limite vérifie $f(\ell) = \ell$ » sans avoir
> établi la convergence, c'est mettre la charrue avant les bœufs.

---

## 5. Cas particuliers et pièges de calcul

- **Intervalle ouvert ou infini.** Le théorème de la bijection reste valable sur
  $\left]a\,;b\right[$, $\left]a\,;+\infty\right[$, etc. : on remplace $f(a)$, $f(b)$ par
  les **limites** aux bornes. Une limite n'est **pas** une valeur atteinte — surveille
  les crochets ouverts/fermés dans ta conclusion.
- **$k$ n'est pas entre les valeurs.** Si $k$ n'est pas compris entre $f(a)$ et $f(b)$,
  le théorème ne dit **rien** : il peut y avoir zéro, une ou plusieurs solutions.
  L'hypothèse n'est pas vérifiée, donc on ne conclut pas.
- **Découper l'intervalle.** Si $f$ n'est pas monotone sur tout l'intervalle, on
  **découpe** selon les variations : sur chaque morceau où $f$ est strictement monotone,
  on applique le corollaire, puis on **additionne** le nombre de solutions.
- **Continue mais pas dérivable.** Pour appliquer le TVI, seule la **continuité** est
  requise. La dérivabilité sert seulement à obtenir la monotonie (via le signe de $f'$).

---

## 6. Tableau récapitulatif

| Notion | L'essentiel |
|---|---|
| Continuité en $a$ | $\displaystyle\lim_{x\to a} f(x) = f(a)$ |
| Dérivable $\Rightarrow$ continue | vrai ; **la réciproque est fausse** |
| Contre-exemple | $|x|$ : continue en $0$, **non dérivable** en $0$ |
| Suite convergente | $u_n \to \ell$ et $f$ continue $\Rightarrow f(u_n) \to f(\ell)$ |
| TVI | $f$ continue $+$ $k$ entre $f(a),f(b)$ $\Rightarrow$ **au moins une** solution |
| Bijection (corollaire) | TVI $+$ **stricte monotonie** $\Rightarrow$ solution **unique** |
| Flèche du tableau | signifie **continue ET strictement monotone** |
| Encadrer $\alpha$ | balayage (pas fixe) ou **dichotomie** (intervalle $\div 2$) |
| Suite $u_{n+1}=f(u_n)$ | si elle converge et $f$ continue : $f(\ell)=\ell$ |

---

## 7. Les erreurs qui coûtent des points

1. **Appliquer le TVI sans vérifier la continuité.** C'est l'hypothèse n°1. Sans
   continuité, une courbe peut sauter par-dessus la valeur $k$ : le théorème ne
   s'applique pas. Justifie **toujours** la continuité avant de conclure.
2. **Conclure à l'unicité sans la stricte monotonie.** Le TVI seul ne donne que
   l'**existence**. Sans strict sens de variation, il peut y avoir plusieurs solutions.
   L'unicité exige le **corollaire** (théorème de la bijection).
3. **Croire que continue implique dérivable.** C'est l'inverse : dérivable $\Rightarrow$
   continue, jamais le contraire. La valeur absolue est le contre-exemple à citer.
4. **Oublier de vérifier que $k$ est entre $f(a)$ et $f(b)$.** Si cette condition tombe,
   le théorème est muet : on ne peut affirmer ni l'existence ni l'absence de solution.
5. **Écrire $f(\ell) = \ell$ avant d'avoir prouvé la convergence** de la suite récurrente.
   L'équation de la limite ne vaut **qu'une fois** la convergence établie.
6. **Confondre limite et valeur aux bornes** sur un intervalle ouvert. Sur
   $\left]a\,;+\infty\right[$, on raisonne avec les **limites**, et une limite n'est pas
   une valeur atteinte : attention aux crochets dans la conclusion.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source exacte : /tmp/kamal-campus/docs/programme-terminale-specialite-maths-2027.txt,
section « ANALYSE — CONTINUITÉ DES FONCTIONS D'UNE VARIABLE RÉELLE », lignes 190 à 201.
Rubriques utilisées :
- Contenus (l. 193-196) : continuité en un point (déf. par les limites) et sur un
  intervalle ; « Toute fonction dérivable est continue » ; image d'une suite convergente
  par une fonction continue ; théorème des valeurs intermédiaires, cas des fonctions
  continues strictement monotones.
- Capacités attendues (l. 199-201) : étudier les solutions d'une équation f(x)=k
  (existence, unicité, encadrement) ; pour f continue d'un intervalle dans lui-même,
  étudier une suite u_{n+1}=f(u_n).

MENTION OBLIGATOIRE 1 — nature de la source : ce programme provient d'une EXTRACTION
WebFetch (miroir xm1math.net), voir l'en-tête de provenance du fichier source (l. 1-20).
Il DOIT être confronté au PDF officiel education.gouv.fr / éduscol avant toute
publication. La reproduction verbatim des rubriques n'est pas garantie exhaustive.

MENTION OBLIGATOIRE 2 — dérogation au calendrier : le gabarit (docs/gabarit-chapitre.md,
l. 197-198) demande de « ne rien écrire pour la Terminale avant 2027 ». Ce chapitre de
Terminale est produit sur le PROGRAMME RENTRÉE 2027 À LA DEMANDE EXPLICITE DE
L'UTILISATEUR. Le relecteur doit valider cette dérogation.

Choix de rédaction à soumettre au relecteur :
- Contre-exemple valeur absolue et convention « flèche = continue + strictement monotone »
  ne sont pas verbatim dans l'extraction (préambules non repris) : compléments standards.
- Balayage/dichotomie : lien avec l'algorithmique ; pseudo-code de dichotomie à vérifier.
- Prolongement du corollaire aux intervalles ouverts/infinis (limites aux bornes) : à
  confirmer sur le texte officiel.
- Id « tale-spe-math-continuite » (fourni par la consigne) : le préfixe « tale- » n'est
  pas listé dans les conventions du fichier consignes (6e/5e/4e/3e), à entériner.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
