---
id: tale-compl-math-primitives-equations-differentielles
titre: "Primitives et équations différentielles"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 12
prerequis:
  - Dérivation et dérivées des fonctions usuelles (Première)
  - Fonctions exponentielle et logarithme népérien (Terminale)
statut: brouillon
relu_par: null
---

# Primitives et équations différentielles

> Dériver, tu sais faire. Ici tu fais le chemin **inverse** : on te donne une
> fonction et tu cherches celle dont elle est la dérivée. C'est ce qui permet de
> « remonter » d'une vitesse vers une position, d'un taux de croissance vers une
> population. Une **équation différentielle**, c'est justement une équation où
> l'inconnue est une **fonction**, reliée à sa propre dérivée. En maths
> complémentaires, ce chapitre est surtout un outil de **modélisation**.

---

## 1. Notion de primitive

Soit $f$ une fonction **continue sur un intervalle $I$**.

$$\boxed{F \text{ est une primitive de } f \text{ sur } I \iff F'=f \text{ sur } I}$$

Autrement dit : chercher une primitive de $f$, c'est chercher une fonction $F$ **qui
se dérive en $f$**.

> **Exemple.** $F(x)=x^2$ est une primitive de $f(x)=2x$ sur $\mathbb{R}$, car
> $F'(x)=2x=f(x)$. On vérifie **toujours** une primitive en la dérivant : si tu
> retrouves $f$, c'est gagné.

---

## 2. Deux primitives diffèrent d'une constante

C'est **la** propriété du chapitre.

$$\boxed{\text{Si } F \text{ est une primitive de } f \text{ sur } I, \text{ alors toutes les primitives sont les } F+C, \; C\in\mathbb{R}}$$

Deux primitives d'une même fonction continue sur un intervalle **diffèrent d'une
constante**.

> **Exemple.** Les primitives de $f(x)=2x$ sont $x^2$, $x^2+1$, $x^2-7$… toutes de la
> forme $x^2+C$. En les dérivant, la constante disparaît : c'est pour ça qu'elles
> donnent toutes la même fonction $f$.

**Conséquence pratique.** Une fonction n'a jamais **une** primitive : elle en a une
**infinité**, une par valeur de $C$. Oublier ce $C$ est l'erreur n°1 du chapitre.

### Condition initiale

Pour fixer **une seule** primitive, on impose une valeur : $F(x_0)=y_0$. Cela
détermine $C$ de façon unique.

> **Exemple.** La primitive $F$ de $f(x)=2x$ telle que $F(1)=5$ : on part de
> $F(x)=x^2+C$, puis $F(1)=1+C=5$ donne $C=4$. Donc $F(x)=x^2+4$.

---

## 3. Primitives des fonctions usuelles

À connaître par cœur. Sur chaque ligne, $F'=f$ (dérive pour vérifier).

| Fonction $f(x)$ | Une primitive $F(x)$ | Sur |
|---|---|---|
| $k$ (constante) | $kx$ | $\mathbb{R}$ |
| $x^n$, $\;n\in\mathbb{N}$ | $\dfrac{x^{n+1}}{n+1}$ | $\mathbb{R}$ |
| $\dfrac{1}{x^{2}}$ | $-\dfrac{1}{x}$ | un intervalle sans $0$ |
| $\dfrac{1}{\sqrt{x}}$ | $2\sqrt{x}$ | $]0;+\infty[$ |
| $\dfrac{1}{x}$ | $\ln x$ | $]0;+\infty[$ |
| $e^{x}$ | $e^{x}$ | $\mathbb{R}$ |

> **Vérifications rapides.**
> $\left(\dfrac{x^{n+1}}{n+1}\right)' = \dfrac{(n+1)x^{n}}{n+1}=x^{n}$ ✓ ;
> $\left(-\dfrac{1}{x}\right)' = \dfrac{1}{x^{2}}$ ✓ ;
> $(2\sqrt{x})' = 2\cdot\dfrac{1}{2\sqrt{x}}=\dfrac{1}{\sqrt{x}}$ ✓ ;
> $(\ln x)'=\dfrac{1}{x}$ ✓ ; $(e^x)'=e^x$ ✓.

> ⚠️ **Le cas $\dfrac{1}{x}$ est à part.** La formule des puissances
> $x^n\mapsto\dfrac{x^{n+1}}{n+1}$ ne s'applique **pas** à $\dfrac{1}{x}=x^{-1}$
> (on aurait $n+1=0$, division par zéro). Sa primitive est $\ln x$ sur $]0;+\infty[$.

---

## 4. Linéarité : primitive d'une somme, d'un multiple

On calcule une primitive **terme à terme**, et un facteur constant se **conserve**.

$$\boxed{\text{Si } F'=f \text{ et } G'=g, \text{ alors } F+G \text{ est une primitive de } f+g, \text{ et } kF \text{ une primitive de } kf}$$

> **Exemple.** Pour $f(x)=3x^2-4x+5$ : une primitive de $3x^2$ est $x^3$, une
> primitive de $-4x$ est $-2x^2$, une primitive de $5$ est $5x$. Donc
> $F(x)=x^3-2x^2+5x+C$. Contrôle : $F'(x)=3x^2-4x+5=f(x)$ ✓.

**Méthode.** Découpe la fonction en morceaux simples, primitive chaque morceau avec
le tableau du §3, additionne, et **ajoute un seul $+C$** à la fin.

---

## 5. Équations différentielles

Une **équation différentielle** est une équation dont l'inconnue est une **fonction**
$y$, reliée à sa dérivée $y'$. **Résoudre**, c'est trouver **toutes** les fonctions
qui la vérifient.

### 5.1 — $y'=f$

Les solutions sont **les primitives de $f$** : $y=F+C$, $C\in\mathbb{R}$.

> **Exemple.** $y'=e^{x}$ a pour solutions $y(x)=e^{x}+C$.

### 5.2 — $y'=ay$ (avec $a$ réel)

$$\boxed{y'=ay \iff y(x)=Ce^{ax}, \quad C\in\mathbb{R}}$$

> **Exemple.** $y'=3y$ a pour solutions $y(x)=Ce^{3x}$. Contrôle :
> $y'=3Ce^{3x}=3y$ ✓.

**Allure des courbes** (elles passent toutes par le point d'ordonnée $C$ en $x=0$) :

- si $a>0$ : croissance exponentielle (explosion) ;
- si $a<0$ : décroissance vers $0$ (amortissement) ;
- le signe de $C$ dit si la courbe est au-dessus ($C>0$) ou en dessous ($C<0$) de
  l'axe des abscisses.

### 5.3 — $y'=ay+b$ (avec $a\neq 0$)

C'est **l'équation centrale** du chapitre. On la résout en deux temps.

**Étape 1 — une solution particulière constante.** On cherche $y$ constante, donc
$y'=0$ : l'équation $0=ay+b$ donne $y=-\dfrac{b}{a}$.

**Étape 2 — toutes les solutions.** On ajoute les solutions de $y'=ay$ :

$$\boxed{y(x)=Ce^{ax}-\dfrac{b}{a}, \quad C\in\mathbb{R}}$$

> **Pourquoi ça marche.** Si $y$ est une solution et $y_0=-\dfrac{b}{a}$ la solution
> constante, leur différence $y-y_0$ vérifie $(y-y_0)'=a(y-y_0)$ : c'est une
> solution de $y'=ay$, donc de la forme $Ce^{ax}$. D'où $y=Ce^{ax}-\dfrac{b}{a}$.

> **Exemple.** $y'=2y+6$. Solution constante : $0=2y+6\Rightarrow y=-3$. Solutions
> générales : $y(x)=Ce^{2x}-3$. Contrôle : $y'=2Ce^{2x}$ et $2y+6=2Ce^{2x}-6+6=2Ce^{2x}$ ✓.

### Condition initiale

Une condition $y(x_0)=y_0$ fixe la valeur de $C$, donc **une seule** solution.

> **Exemple.** $y'=2y+6$ avec $y(0)=1$. On part de $y(x)=Ce^{2x}-3$, puis
> $y(0)=C-3=1$ donne $C=4$. D'où $y(x)=4e^{2x}-3$.

---

## 6. Modéliser avec $y'=ay+b$

Beaucoup de phénomènes « à vitesse proportionnelle à un écart » se traduisent par
$y'=ay+b$. La **valeur limite** est justement la solution constante $-\dfrac{b}{a}$
(quand $a<0$, l'exponentielle s'éteint et $y$ tend vers elle).

> **Exemple — refroidissement.** Un objet à $100$ °C dans une pièce à $20$ °C. Sa
> température $\theta(t)$ vérifie $\theta'=-0{,}2(\theta-20)=-0{,}2\theta+4$ avec
> $\theta(0)=100$. Solution constante : $0=-0{,}2\theta+4\Rightarrow\theta=20$.
> Solutions : $\theta(t)=Ce^{-0{,}2t}+20$ ; puis $\theta(0)=C+20=100\Rightarrow C=80$.
> Donc $\theta(t)=80e^{-0{,}2t}+20$, qui **tend vers $20$ °C** : la pièce.

**Lecture du modèle.** Le coefficient $a$ règle la **vitesse** de retour à la
limite ; la limite elle-même est $-\dfrac{b}{a}$. Repérer ces deux quantités suffit
souvent à interpréter le phénomène.

---

## 7. Tableau récapitulatif

| Objet | Résultat clé |
|---|---|
| Primitive | $F'=f$, sur un intervalle |
| Toutes les primitives | $F+C$, une **infinité** |
| $k$ (constante) | $kx$ |
| $x^n$ ($n\in\mathbb{N}$) | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac{1}{x^2}$ | $-\dfrac{1}{x}$ |
| $\dfrac{1}{\sqrt x}$ | $2\sqrt x$ sur $]0;+\infty[$ |
| $\dfrac{1}{x}$ | $\ln x$ sur $]0;+\infty[$ |
| $e^x$ | $e^x$ |
| $y'=f$ | $y=F+C$ |
| $y'=ay$ | $Ce^{ax}$ |
| $y'=ay+b$ ($a\neq 0$) | $Ce^{ax}-\dfrac{b}{a}$ |
| Solution constante de $y'=ay+b$ | $-\dfrac{b}{a}$ (limite si $a<0$) |
| Condition initiale | fixe $C$ (une seule solution) |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier la constante $+C$.** Une fonction a une infinité de primitives.
   Sans le $+C$, tu perds toutes les autres solutions — et tu ne peux plus utiliser
   la condition initiale.
2. **Confondre primitive et dérivée.** Tu cherches $F$ tel que $F'=f$, pas $f'$.
   Ex. la primitive de $\dfrac{1}{\sqrt x}$ est $2\sqrt x$, pas $-\dfrac{1}{2x\sqrt x}$
   (ça, c'est la dérivée). En cas de doute, **dérive ta réponse** : tu dois
   retrouver $f$.
3. **Appliquer la formule des puissances à $\dfrac{1}{x}$.** $\dfrac{1}{x}$ n'a pas
   pour primitive $\dfrac{x^{0}}{0}$ (interdit) : c'est $\ln x$ sur $]0;+\infty[$.
4. **Se tromper de signe dans $-\dfrac{b}{a}$.** La solution constante de $y'=ay+b$
   est $-\dfrac{b}{a}$, pas $\dfrac{b}{a}$. Vérifie en réinjectant : $ay+b$ doit
   valoir $0$.
5. **Confondre $Ce^{ax}$ et $e^{ax}+C$.** Dans $y'=ay$ la constante **multiplie**
   l'exponentielle, elle ne s'ajoute pas. $e^{ax}+C$ ne vérifie pas l'équation.
6. **Appliquer la condition initiale trop tôt.** On fixe $C$ **après** avoir écrit
   la solution générale complète $Ce^{ax}-\dfrac{b}{a}$, jamais avant.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : /tmp/kamal-campus/docs/programme-terminale-maths-options-2019.txt,
bloc « MATHÉMATIQUES COMPLÉMENTAIRES », section « Primitives et équations
différentielles » (lignes 76-79) :
  Contenus : primitives des fonctions usuelles ; équation différentielle y' = a·y + b.
  Capacités : déterminer des primitives ; résoudre y' = ay + b ; exploiter une
  solution particulière.

Programme officiel : arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019,
enseignement optionnel « mathématiques complémentaires », terminale générale.
PDF officiel : cache.media.education.gouv.fr .../spe265_annexe_1159134.pdf
Le fichier .txt a été extrait via WebFetch depuis le PDF officiel education.gouv.fr.
À CONFRONTER AU PDF OFFICIEL avant publication (extraction non garantie exhaustive).

CALENDRIER : programme des options 2019 TOUJOURS EN VIGUEUR (pas de refonte 2027
côté options complémentaires/expertes, contrairement à la spécialité). Aucun
avertissement de calendrier nécessaire ici.

PÉRIMÈTRE VOLONTAIREMENT PLUS LÉGER que la spécialité (chapitre jumeau
tale-spe-math-primitives-equations-differentielles). Différences ASSUMÉES et à
confirmer par le relecteur :
- PAS de section « formes composées (v'∘u)×u' » : le programme complémentaires ne
  liste que « primitives des fonctions usuelles ». Écarté volontairement.
- PAS de cas général « y'=ay+f à partir d'une solution particulière » : le programme
  s'arrête à « y'=ay+b » ; la capacité « exploiter une solution particulière » est
  traitée via la solution constante de y'=ay+b (§5.3) et la modélisation (§6).
- Tableau des primitives usuelles (§3) : inclut 1/x → ln x (les fonctions log/exp
  sont au programme complémentaires). sin/cos NON inclus : la trigonométrie n'est
  pas un thème du programme complémentaires 2019. À valider par le relecteur.
- Intervalle des primitives de 1/x² et 1/x : formulé pour x>0 pour rester simple au
  niveau élève. À vérifier.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
