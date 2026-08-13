---
id: tale-techno-math-fonction-inverse
titre: "Fonction inverse"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique, applicable rentrée 2027"
duree_lecture_min: 12
prerequis:
  - Dérivation (Première technologique)
  - Fonctions de la variable réelle (Première technologique)
statut: brouillon
relu_par: null
---

# Fonction inverse

> Partager un budget de $1\,000$ € entre $x$ personnes ? Chacun reçoit
> $\dfrac{1000}{x}$ €. Plus il y a de monde, moins chacun touche : voilà la
> **fonction inverse** en action. Ce chapitre te donne son portrait complet —
> ensemble de définition troué en $0$, courbe en deux branches, asymptotes —
> puis t'apprend à étudier les fonctions du type $f(x) = ax + b + \dfrac{c}{x}$,
> la vraie capacité attendue au bac.

---

## 1. Définition et ensemble de définition

La **fonction inverse** est la fonction qui, à tout nombre $x$ **non nul**,
associe son inverse :

$$\boxed{f(x) = \frac{1}{x}, \quad \text{définie sur } \left]-\infty\,;0\right[ \,\cup\, \left]0\,;+\infty\right[}$$

**On ne peut pas diviser par $0$** : le nombre $0$ n'a pas d'image. L'ensemble de
définition est donc fait de **deux intervalles séparés**, de part et d'autre de $0$.

> **Exemple.** $f(2) = \dfrac{1}{2} = 0{,}5$ ; $f(-4) = -\dfrac{1}{4} = -0{,}25$ ;
> $f(0{,}1) = \dfrac{1}{0{,}1} = 10$. Et $f(0)$ **n'existe pas**.

Deux remarques immédiates :
- $x$ et $\dfrac{1}{x}$ ont toujours le **même signe** : positif à droite de $0$,
  négatif à gauche.
- $f(1) = 1$ et $f(-1) = -1$ : les nombres $1$ et $-1$ sont leur propre inverse.

---

## 2. Comportement aux bornes de l'ensemble de définition

Les bornes sont $-\infty$, $0$ (par la gauche et par la droite) et $+\infty$.
On décrit ce qui se passe **sans le formalisme des limites** — un tableau de
valeurs suffit à voir le phénomène.

### Quand $x$ devient très grand (vers $+\infty$)

| $x$ | $10$ | $100$ | $10\,000$ | $1\,000\,000$ |
|---|---|---|---|---|
| $1/x$ | $0{,}1$ | $0{,}01$ | $0{,}0001$ | $0{,}000001$ |

$\dfrac{1}{x}$ devient **aussi proche de $0$ que l'on veut**, tout en restant
positif. Même chose vers $-\infty$, avec des valeurs négatives proches de $0$.
Graphiquement, la courbe **se rapproche de l'axe des abscisses** sans jamais le
toucher : la droite d'équation $y = 0$ est une **asymptote horizontale**.

### Quand $x$ se rapproche de $0$

| $x$ | $0{,}1$ | $0{,}01$ | $0{,}001$ | $0{,}0001$ |
|---|---|---|---|---|
| $1/x$ | $10$ | $100$ | $1\,000$ | $10\,000$ |

En s'approchant de $0$ **par la droite**, $\dfrac{1}{x}$ devient **aussi grand que
l'on veut**. Par la gauche ($x = -0{,}01$ donne $-100$…), il devient aussi
**négatif** que l'on veut. Graphiquement, la courbe **longe l'axe des ordonnées**
sans jamais l'atteindre : la droite d'équation $x = 0$ est une **asymptote
verticale**.

$$\boxed{\text{Les deux asymptotes de la courbe de } x \mapsto \frac{1}{x} \text{ sont les axes du repère : } y = 0 \text{ et } x = 0}$$

> **Exemple (partage).** $1\,000$ € partagés entre $x$ personnes : avec beaucoup
> de monde, la part de chacun devient minuscule (proche de $0$) ; avec très peu
> de monde, elle explose. Les deux comportements aux bornes en une phrase.

⚠️ Une asymptote est une droite dont la courbe **se rapproche indéfiniment** :
la courbe ne la touche jamais, ne la coupe jamais.

---

## 3. Dérivée et sens de variation

### La dérivée

Tu l'as vue en Première (chapitre Dérivation) dans le tableau des dérivées
usuelles :

$$\boxed{f(x) = \frac{1}{x} \quad \Longrightarrow \quad f'(x) = -\frac{1}{x^2}}$$

Et plus généralement, pour une constante $c$ :

$$\left(\frac{c}{x}\right)' = -\frac{c}{x^2}$$

> **Exemple.** $g(x) = \dfrac{5}{x}$ donne $g'(x) = -\dfrac{5}{x^2}$, et
> $g'(1) = -5$ : la tangente au point d'abscisse $1$ a pour coefficient
> directeur $-5$.

### Le sens de variation

Pour tout $x \neq 0$, $x^2 > 0$, donc $f'(x) = -\dfrac{1}{x^2} < 0$ : la dérivée
est **strictement négative partout** où elle existe.

$$\boxed{\text{La fonction inverse est décroissante sur } \left]-\infty\,;0\right[ \text{ ET décroissante sur } \left]0\,;+\infty\right[}$$

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $\|$ | $-$ | |
| $f(x)$ | | $\searrow$ | $\|$ | $\searrow$ | |

⚠️ **On ne dit jamais « décroissante sur $\left]-\infty\,;0\right[ \cup \left]0\,;+\infty\right[$ ».**
Une variation s'énonce sur **un intervalle**, pas sur une réunion. La preuve que
la phrase serait fausse : $-1 < 1$ et pourtant $f(-1) = -1 < f(1) = 1$ — en
traversant $0$, la fonction **remonte**.

> **Conséquence utile (comparaison).** Sur $\left]0\,;+\infty\right[$, la
> décroissance renverse l'ordre : $0 < a < b \Longrightarrow \dfrac{1}{a} > \dfrac{1}{b}$.
> Exemple : $\dfrac{1}{2026} > \dfrac{1}{2027}$, sans calculatrice.

---

## 4. La courbe : une hyperbole

La courbe représentative de la fonction inverse s'appelle une **hyperbole**.
Elle est formée de **deux branches** séparées :

- une branche dans le quadrant en haut à droite ($x > 0$, $y > 0$) ;
- une branche dans le quadrant en bas à gauche ($x < 0$, $y < 0$).

Chaque branche descend (fonction décroissante) et s'écrase sur les deux
asymptotes : l'axe des abscisses au loin, l'axe des ordonnées près de $0$.

**Points repères** pour un tracé rapide :

| $x$ | $-2$ | $-1$ | $-\dfrac{1}{2}$ | $\dfrac{1}{2}$ | $1$ | $2$ |
|---|---|---|---|---|---|---|
| $1/x$ | $-0{,}5$ | $-1$ | $-2$ | $2$ | $1$ | $0{,}5$ |

La courbe est **symétrique par rapport à l'origine** $O$ du repère : le point
$(x\,; \frac{1}{x})$ et le point $(-x\,; -\frac{1}{x})$ se correspondent. Les
deux branches sont donc l'image l'une de l'autre — en tracer une suffit.

---

## 5. Étudier $f(x) = ax + b + \dfrac{c}{x}$ — la capacité du programme

C'est la capacité attendue : **étudier et représenter des fonctions obtenues par
combinaisons linéaires simples faisant intervenir la fonction inverse**, c'est-à-dire
des fonctions de la forme

$$f(x) = ax + b + \frac{c}{x} \qquad (\text{définie pour } x \neq 0)$$

### La dérivée à connaître

On dérive terme à terme ($(ax)' = a$, $(b)' = 0$, $\left(\frac{c}{x}\right)' = -\frac{c}{x^2}$) :

$$\boxed{f(x) = ax + b + \frac{c}{x} \quad \Longrightarrow \quad f'(x) = a - \frac{c}{x^2}}$$

### La méthode, étape par étape

1. **Ensemble d'étude** : $x \neq 0$ — le plus souvent l'énoncé se place sur
   $\left]0\,;+\infty\right[$ (quantités, durées, prix…).
2. **Dériver** : $f'(x) = a - \dfrac{c}{x^2}$.
3. **Mettre au même dénominateur** pour étudier le signe :
   $f'(x) = \dfrac{ax^2 - c}{x^2}$. Comme $x^2 > 0$, **le signe de $f'$ est celui
   du numérateur** $ax^2 - c$.
4. **Résoudre** $ax^2 - c = 0$, dresser le **tableau de variations**, calculer les
   images aux points remarquables.
5. **Comportement aux bornes** : près de $0$, c'est $\dfrac{c}{x}$ qui impose des
   valeurs immenses (asymptote verticale $x = 0$) ; pour $x$ très grand,
   $\dfrac{c}{x}$ devient négligeable et la courbe **se rapproche de la droite**
   $y = ax + b$.

### Exemple complet

Étudions $f(x) = 2x + 1 + \dfrac{8}{x}$ sur $\left]0\,;+\infty\right[$.

**Dérivée.** $f'(x) = 2 - \dfrac{8}{x^2} = \dfrac{2x^2 - 8}{x^2}$.

**Signe.** $x^2 > 0$, donc $f'(x)$ a le signe de $2x^2 - 8 = 2(x^2 - 4) = 2(x-2)(x+2)$.
Sur $\left]0\,;+\infty\right[$, $x + 2 > 0$ : le signe est celui de $x - 2$.

**Tableau.** $f(2) = 4 + 1 + 4 = 9$.

| $x$ | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\searrow$ | $9$ | $\nearrow$ | |

$f$ est décroissante sur $\left]0\,;2\right]$, croissante sur
$\left[2\,;+\infty\right[$, et admet un **minimum** égal à $9$, atteint en $x = 2$.

**Aux bornes.** Près de $0$ : $\dfrac{8}{x}$ devient énorme ($x = 0{,}01$ donne
$f(x) \approx 800$), la courbe grimpe le long de l'asymptote verticale $x = 0$.
Pour $x$ grand : $\dfrac{8}{x}$ devient négligeable ($x = 100$ donne
$f(x) = 201{,}08$, tout proche de $2x + 1 = 201$), la courbe se rapproche de la
droite $y = 2x + 1$.

> **À quoi ça sert ?** Ce sont les fonctions des **coûts moyens** : si produire
> $x$ objets coûte en tout $C(x) = 0{,}1x^2 + 5x + 90$ €, le coût moyen par objet
> est $\dfrac{C(x)}{x} = 0{,}1x + 5 + \dfrac{90}{x}$ — exactement la forme
> $ax + b + \dfrac{c}{x}$. Son minimum donne la production la plus rentable
> (exercice 6).

---

## 6. Tableau récapitulatif

| | Fonction inverse $x \mapsto \dfrac{1}{x}$ |
|---|---|
| Ensemble de définition | $\left]-\infty\,;0\right[ \cup \left]0\,;+\infty\right[$ (jamais $0$) |
| Dérivée | $-\dfrac{1}{x^2}$ (toujours $< 0$) |
| Variations | décroissante sur $\left]-\infty\,;0\right[$, décroissante sur $\left]0\,;+\infty\right[$ |
| Courbe | hyperbole, deux branches, symétrique par rapport à $O$ |
| Asymptotes | $y = 0$ (horizontale) et $x = 0$ (verticale) |
| Signe | $\dfrac{1}{x}$ a le signe de $x$ |
| $\left(\dfrac{c}{x}\right)'$ | $-\dfrac{c}{x^2}$ |
| $f(x) = ax + b + \dfrac{c}{x}$ | $f'(x) = a - \dfrac{c}{x^2} = \dfrac{ax^2 - c}{x^2}$, signe de $ax^2 - c$ |
| Aux bornes de $f$ | près de $0$ : $\dfrac{c}{x}$ domine ; pour $x$ grand : proche de la droite $y = ax + b$ |

---

## 7. Les erreurs qui coûtent des points

1. **Oublier la valeur interdite.** Écrire « $f$ est définie sur $\mathbb{R}$ »
   ou calculer $f(0)$ : la division par $0$ n'existe pas. Commence chaque étude
   en écrivant l'ensemble de définition.
2. **Dériver $\dfrac{1}{x}$ en $\dfrac{1}{x^2}$.** Le signe moins fait partie de
   la formule : $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$, et
   $\left(\frac{c}{x}\right)' = -\frac{c}{x^2}$. Ce moins oublié inverse tout le
   tableau de variations.
3. **Annoncer « décroissante sur $\left]-\infty\,;0\right[ \cup \left]0\,;+\infty\right[$ ».**
   Une variation s'énonce intervalle par intervalle. Contre-exemple :
   $-1 < 1$ mais $f(-1) = -1 < f(1) = 1$.
4. **Faire toucher la courbe à ses asymptotes.** La courbe s'en rapproche autant
   qu'on veut mais ne les atteint jamais : $\dfrac{1}{x}$ ne vaut jamais $0$.
5. **Étudier le signe de $f'(x) = a - \dfrac{c}{x^2}$ sans réduire au même
   dénominateur.** Écris $f'(x) = \dfrac{ax^2 - c}{x^2}$ : comme $x^2 > 0$, le
   signe se lit sur $ax^2 - c$, un trinôme sans terme en $x$ que tu sais résoudre.
6. **Confondre les deux comportements aux bornes** : près de $0$, c'est le terme
   en $\dfrac{c}{x}$ qui explose ; au loin, c'est lui qui disparaît et la courbe
   suit la droite $y = ax + b$. Un tableau de valeurs tranche en cas de doute.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028, programme
commun à toutes les séries. Fichier : docs/programme-terminale-techno-2027.txt
(extrait du PDF officiel education.gouv.fr via WebFetch), section
« ANALYSE — FONCTION INVERSE » (lignes 75-82).

Couverture, calée sur le texte officiel :
- Contenus : comportement de la fonction inverse aux bornes de son ensemble de
  définition (§2) ; dérivée, sens de variation (§3) ; courbe représentative,
  asymptotes (§2 et §4).
- Capacité : étudier et représenter des fonctions obtenues par combinaisons
  linéaires simples faisant intervenir la fonction inverse (§5, forme
  f(x) = ax + b + c/x, avec méthode et exemple complet).

Choix de rédaction :
- Comportement aux bornes décrit par tableaux de valeurs et vocabulaire
  « aussi proche/grand que l'on veut », SANS le formalisme des limites (le mot
  « limite » n'apparaît pas dans le corps) — conforme à l'esprit du programme
  techno, où les limites ne sont pas un objet d'étude.
- « La courbe se rapproche de la droite y = ax + b » : formulé en termes de
  proximité graphique et de tableau de valeurs, sans parler d'asymptote oblique
  (notion hors programme a priori).
- Prérequis : chapitre Dérivation de Première techno
  (contenu/premiere-techno/maths/derivation/) — la dérivée de 1/x y figure déjà
  dans le tableau des dérivées usuelles, ainsi que l'équation de tangente
  y = f'(a)(x-a) + f(a) réutilisée dans les exercices. Également Fonctions de la
  variable réelle (contenu/premiere-techno/maths/fonctions-variable-reelle/).

Vérifications numériques faites : f(2) = 2·2+1+8/2 = 9 ; 2x²−8 = 2(x−2)(x+2) ;
f(0,01) = 0,02+1+800 = 801,02 (≈ 800 annoncé « environ ») ; f(100) = 201,08 ;
coût moyen 0,1x²+5x+90 sur x → 0,1x+5+90/x.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La symétrie de l'hyperbole par rapport à l'origine (fonction impaire, §4) n'est
  pas citée dans l'extraction du programme : gardée comme aide au tracé, sans le
  mot « impaire ». Vérifier qu'elle n'est pas hors périmètre.
- La forme exacte des « combinaisons linéaires simples » : j'ai retenu
  ax + b + c/x (et le cas particulier b + c/x, exercice 4). Vérifier si le PDF
  donne des exemples types différents.
- Le mot « asymptote » est bien dans les contenus officiels (« Courbe
  représentative ; asymptotes ») : employé sans définition formelle par limite.
- L'étude sur ]−∞;0[ (exercice 5) : vérifier que le programme n'attend pas
  uniquement des études sur ]0;+∞[ en contexte.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
