---
id: tale-spe-math-fonction-logarithme
titre: "Fonction logarithme népérien"
voie: generale
niveau: terminale
parcours: maths-specialite
matiere: mathematiques
programme: "Programme de spécialité — Terminale générale, applicable à la rentrée 2027"
duree_lecture_min: 13
prerequis:
  - Fonction exponentielle (Première)
  - Dérivation et variations (Première)
  - Limites de fonctions (Terminale)
statut: brouillon
relu_par: null
---

# Fonction logarithme népérien

> L'exponentielle transforme les additions en multiplications : $e^{a+b}=e^a\times e^b$.
> Le logarithme fait exactement le chemin inverse — il transforme les multiplications en
> additions. C'est la **machine à remonter le temps** de l'exponentielle : elle défait ce
> que l'autre a fait.

---

## 1. Définition : ln, la réciproque de exp

La fonction exponentielle est continue et **strictement croissante** sur $\mathbb{R}$, à
valeurs dans $]0\,;+\infty[$. Tout réel strictement positif $x$ possède donc **un unique**
antécédent par exp. Ce nombre, on l'appelle le **logarithme népérien** de $x$, noté $\ln x$.

$$\boxed{\ln x = y \iff x = e^{y}} \qquad \text{avec } x>0 \text{ et } y\in\mathbb{R}$$

> **Ensemble de définition.** $\ln$ n'est définie que pour $x>0$ : son ensemble de
> définition est $]0\,;+\infty[$. On ne peut **jamais** écrire $\ln$ d'un nombre négatif
> ou nul. Retiens ce réflexe : **avant de manipuler un $\ln$, on vérifie que son argument
> est strictement positif.**

Comme ln et exp sont réciproques l'une de l'autre, elles se **compensent** :

$$\boxed{\ln(e^{x}) = x \ \ (\forall x\in\mathbb{R}) \qquad e^{\ln x} = x \ \ (\forall x>0)}$$

> **Exemple.** $\ln(e^{3}) = 3$ et $e^{\ln 5} = 5$. Poser $X = e^{\ln 5}$, c'est demander
> « quel exposant donne $5$ ? » — la réponse est $\ln 5$, donc $X = 5$.

Deux valeurs à connaître par cœur, conséquences directes de la définition :

$$\boxed{\ln 1 = 0} \qquad\qquad \boxed{\ln e = 1}$$

> Car $e^{0}=1$ (donc $\ln 1 = 0$) et $e^{1}=e$ (donc $\ln e = 1$).

---

## 2. Propriétés algébriques

C'est le cœur du chapitre. Toutes découlent de l'équation fonctionnelle
$e^{a+b}=e^a e^b$ lue « à l'envers ». Pour $a>0$ et $b>0$ :

**Logarithme d'un produit** — la relation fondamentale :

$$\boxed{\ln(a\times b) = \ln a + \ln b}$$

> **Exemple.** $\ln 6 = \ln(2\times 3) = \ln 2 + \ln 3$. Un produit devient une somme.

**Logarithme d'un quotient :**

$$\boxed{\ln\!\left(\frac{a}{b}\right) = \ln a - \ln b}$$

> **Exemple.** $\ln\!\left(\dfrac{7}{2}\right) = \ln 7 - \ln 2$. Cas particulier utile :
> $\ln\!\left(\dfrac{1}{b}\right) = -\ln b$, donc $\ln\!\left(\dfrac{1}{3}\right) = -\ln 3$.

**Logarithme d'une puissance** — pour tout entier $n$ (et plus généralement tout réel) :

$$\boxed{\ln(a^{n}) = n\,\ln a}$$

> **Exemple.** $\ln(8) = \ln(2^{3}) = 3\ln 2$. La puissance « descend » devant le $\ln$.

**Logarithme d'une racine :**

$$\ln\!\left(\sqrt{a}\right) = \frac{1}{2}\ln a$$

> **Exemple.** $\ln\!\left(\sqrt{5}\right) = \dfrac{1}{2}\ln 5$, car $\sqrt{5}=5^{1/2}$.

> ⚠️ **Il n'existe AUCUNE formule pour $\ln(a+b)$.** En particulier
> $\ln(a+b)\neq \ln a+\ln b$. Le logarithme ne « rentre » que dans les **produits,
> quotients et puissances**, jamais dans les sommes.

---

## 3. Dérivée et variations

La fonction $\ln$ est dérivable sur $]0\,;+\infty[$ et :

$$\boxed{\ (\ln x)' = \frac{1}{x}\ }$$

Sur $]0\,;+\infty[$, $x>0$ donc $\dfrac{1}{x}>0$ : la dérivée est **strictement positive**.
Conclusion :

$$\boxed{\ln \text{ est strictement croissante sur } ]0\,;+\infty[}$$

> **Conséquence pratique — le logarithme conserve l'ordre.** Comme $\ln$ est strictement
> croissante, pour $a>0$ et $b>0$ :
> $$a<b \iff \ln a<\ln b \qquad\qquad \ln a=\ln b \iff a=b$$
> C'est ce qui permet de résoudre les équations et inéquations (section 5).

**Dérivée d'une composée $\ln(u)$.** Si $u$ est dérivable et strictement positive :

$$\big(\ln(u)\big)' = \frac{u'}{u}$$

> **Exemple.** Pour $f(x)=\ln(x^{2}+1)$, on a $u=x^2+1>0$ et $u'=2x$, donc
> $f'(x)=\dfrac{2x}{x^{2}+1}$.

---

## 4. Limites, courbe et croissances comparées

### Limites aux bornes

$$\boxed{\lim_{x\to 0^{+}}\ln x = -\infty} \qquad\qquad \boxed{\lim_{x\to +\infty}\ln x = +\infty}$$

> En $0^{+}$, la courbe plonge le long de l'axe des ordonnées : **la droite d'équation
> $x=0$ (l'axe des $y$) est asymptote verticale**. En $+\infty$, $\ln$ tend vers $+\infty$,
> mais **très lentement** (voir croissances comparées).

### Courbe et symétrie avec l'exponentielle

Puisque ln et exp sont réciproques, leurs courbes sont **symétriques l'une de l'autre par
rapport à la droite d'équation $y=x$** (la première bissectrice).

> Concrètement : si le point $(a\,;b)$ est sur la courbe de exp (c.-à-d. $b=e^{a}$), alors
> le point symétrique $(b\,;a)$ est sur la courbe de ln (car $a=\ln b$). La courbe de $\ln$
> passe par $(1\,;0)$ et $(e\,;1)$, images miroir de $(0\,;1)$ et $(1\,;e)$.

### Croissances comparées

Face à une puissance de $x$, le logarithme est **toujours le plus faible** — il perd la
course, aussi bien en $+\infty$ qu'en $0$. Pour tout entier $n\geqslant 1$ :

$$\boxed{\lim_{x\to +\infty}\frac{\ln x}{x^{n}} = 0} \qquad\qquad
\boxed{\lim_{x\to 0^{+}} x^{n}\ln x = 0}$$

> **Exemple.** $\lim\limits_{x\to +\infty}\dfrac{\ln x}{x}=0$ : $x$ « écrase » $\ln x$.
> En $0^{+}$, $\ln x$ file vers $-\infty$ mais $x^{n}$ file vers $0$ **plus vite** et gagne,
> d'où le produit qui tend vers $0$. Retiens la règle : **en cas de conflit, la puissance
> l'emporte sur le logarithme.**

---

## 5. Méthodes : résoudre équations et inéquations

C'est la capacité centrale du programme. Deux réflexes commandent tout : **condition
d'existence d'abord**, puis on utilise la stricte croissance.

### Équation avec un logarithme

**Résoudre $\ln x = 3$.**
1. Condition d'existence : $x>0$.
2. On applique l'exponentielle (réciproque) : $x = e^{3}$.
3. $e^{3}>0$ : la condition est respectée. **Solution : $x=e^{3}$.**

### Équation $\ln A = \ln B$

On utilise $\ln a=\ln b\iff a=b$ (après avoir posé les conditions d'existence).

> **Exemple.** $\ln(2x-1)=\ln(x+3)$.
> Existence : $2x-1>0$ **et** $x+3>0$, soit $x>\dfrac{1}{2}$.
> On identifie : $2x-1=x+3 \Rightarrow x=4$. Comme $4>\dfrac12$, **solution : $x=4$.**

### Équation avec une exponentielle

Pour isoler l'inconnue d'un exposant, on applique $\ln$.

> **Exemple.** $e^{2x}=5 \Rightarrow 2x=\ln 5 \Rightarrow x=\dfrac{\ln 5}{2}$.

### Inéquation

Comme $\ln$ est **strictement croissante**, elle **conserve le sens** de l'inégalité.

> **Exemple.** $\ln x < 2$.
> Existence : $x>0$. On applique exp (croissante, sens conservé) : $x<e^{2}$.
> En croisant avec la condition d'existence : **$0<x<e^{2}$**, soit $x\in\,]0\,;e^{2}[$.

---

## 6. Cas particuliers et pièges de calcul

- $\ln$ d'un nombre entre $0$ et $1$ est **négatif** : $\ln(0{,}5)<0$ car $0{,}5<1$.
- $\ln x = 0 \iff x=1$ : c'est le seul point où la courbe coupe l'axe des abscisses.
- $-\ln a = \ln\!\left(\dfrac{1}{a}\right)$ : un signe moins devant un $\ln$ peut se
  cacher dans un quotient.
- $\ln(a^{2})=2\ln a$ n'est valable **que si $a>0$**. Pour $a$ quelconque non nul, on
  écrit $\ln(a^{2})=2\ln|a|$.

---

## 7. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Définition | $\ln x = y \iff x=e^{y}$, avec $x>0$ |
| Domaine | $]0\,;+\infty[$ — argument **toujours** $>0$ |
| Compensation | $\ln(e^x)=x$ et $e^{\ln x}=x$ |
| Valeurs clés | $\ln 1=0$, $\ln e = 1$ |
| Produit | $\ln(ab)=\ln a+\ln b$ |
| Quotient | $\ln\!\left(\frac ab\right)=\ln a-\ln b$ |
| Puissance | $\ln(a^{n})=n\ln a$ |
| Dérivée | $(\ln x)'=\dfrac1x$, et $(\ln u)'=\dfrac{u'}{u}$ |
| Variations | strictement **croissante** sur $]0\,;+\infty[$ |
| Limites | $\lim\limits_{0^+}\ln=-\infty$, $\lim\limits_{+\infty}\ln=+\infty$ |
| Courbe | symétrique de exp par rapport à $y=x$ |
| Croissances comparées | $\dfrac{\ln x}{x^n}\to 0$ en $+\infty$ ; $x^n\ln x\to 0$ en $0^+$ |

---

## 8. Les erreurs qui coûtent des points

1. **Oublier la condition d'existence.** Avant de résoudre une équation avec $\ln$, on
   pose l'argument $>0$ — et on **vérifie à la fin** que la solution la respecte. Une
   solution qui rend un argument négatif est à **rejeter**.
2. **Croire que $\ln(a+b)=\ln a+\ln b$.** FAUX. Le $\ln$ ne rentre que dans les produits.
   $\ln(2+3)=\ln 5$, pas $\ln 2+\ln 3=\ln 6$.
3. **Écrire $\ln(a\times b)=\ln a\times\ln b$.** Non : un produit devient une **somme**,
   pas un produit de logarithmes.
4. **Faire descendre la puissance de tout le contenu.** Dans $\ln(3x^{2})$, seul $x^2$ est
   au carré : $\ln(3x^{2})=\ln 3+2\ln x$, pas $2\ln(3x)$.
5. **Inverser le sens d'une inéquation.** $\ln$ est croissante : elle **conserve** le sens.
   L'inverser est une faute de réflexe (on confond avec la division par un négatif).
6. **Oublier de croiser avec le domaine.** Une inéquation $\ln x<2$ donne $x<e^2$, mais la
   réponse finale est $]0\,;e^2[$ : l'existence impose aussi $x>0$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-specialite-maths-2027.txt, section
« ANALYSE — FONCTION LOGARITHME » (lignes 204 à 219), rubriques « Contenus » et
« Capacités attendues ». En-tête de provenance du fichier lu (lignes 1 à 20).

⚠️ MENTION 1 — PROVENANCE DE LA SOURCE : ce programme n'a PAS été obtenu par la chaîne
d'extraction habituelle. D'après son en-tête, le texte a été reconstitué via l'outil
WebFetch depuis un miroir (xm1math.net), le proxy du sandbox bloquant le téléchargement
direct du PDF officiel. La reproduction n'est donc pas garantie exhaustive. AVANT TOUTE
PUBLICATION, ce contenu doit être CONFRONTÉ AU PDF OFFICIEL (education.gouv.fr / éduscol)
par un professeur — au même titre que la relecture pédagogique.

⚠️ MENTION 2 — CHAPITRE DE TERMINALE / PROGRAMME RENTRÉE 2027 : le gabarit
(docs/gabarit-chapitre.md, §6) recommande de « ne rien écrire pour la Terminale avant
2027 » car son programme change à la rentrée 2027-2028. Ce chapitre a été produit
SCIEMMENT, à la DEMANDE EXPLICITE de l'utilisateur, sur le programme applicable à la
rentrée 2027 (déjà publié selon l'en-tête de la source). À signaler au relecteur : vérifier
que ce programme est bien la version en vigueur au moment de la publication.

À CONFRONTER AU PROGRAMME PAR UN PROFESSEUR :
- Périmètre des « propriétés algébriques » : le programme les cite sans les détailler.
  J'ai retenu produit, quotient, puissance (entière et racine) — standard du chapitre.
  La formule ln(aⁿ)=n ln a est énoncée pour n entier puis étendue « à tout réel » : à
  confirmer selon le niveau d'exigence attendu.
- Croissances comparées : le programme dit « ln et x ↦ xⁿ en 0 et en +∞ ». J'ai traduit
  par lim (ln x)/xⁿ = 0 en +∞ et lim xⁿ ln x = 0 en 0⁺. Vérifier la forme exacte attendue.
- Dérivée (ln u)' = u'/u : relève des « compléments sur la dérivation » (composée) ; incluse
  ici car indispensable aux exercices. À valider comme attendu à ce stade.
- La construction rigoureuse de ln comme réciproque (existence/unicité via TVI et stricte
  monotonie de exp) est esquissée, non démontrée : préciser si une démonstration est exigible.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
