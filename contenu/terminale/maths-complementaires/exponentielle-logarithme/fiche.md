---
id: tale-compl-math-exponentielle-logarithme
titre: "Fonctions logarithme et exponentielle"
voie: generale
niveau: terminale
parcours: maths-complementaires
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — option maths complémentaires, terminale générale"
duree_lecture_min: 15
prerequis:
  - Fonction exponentielle (Première)
  - Dérivation et variations
  - Limites de fonctions
statut: brouillon
relu_par: null
---

# Fonctions logarithme et exponentielle

> Deux fonctions, un seul mécanisme. L'exponentielle transforme une somme en produit
> ($e^{a+b}=e^a\times e^b$) ; le logarithme fait le chemin inverse et transforme un produit
> en somme. Ce sont les **fonctions réciproques** l'une de l'autre : ce que l'une fait,
> l'autre le défait. En maths complémentaires, l'enjeu n'est pas la théorie mais l'**usage** :
> résoudre des équations, des inéquations, et modéliser des problèmes concrets.

---

## 1. Rappels sur la fonction exponentielle

La fonction exponentielle, notée $\exp$ ou $x\mapsto e^{x}$, est définie sur $\mathbb{R}$, à
valeurs **strictement positives** : pour tout réel $x$, $e^{x}>0$.

**Propriétés algébriques.** Pour tous réels $a$ et $b$, et tout entier $n$ :

$$\boxed{e^{a+b}=e^{a}\times e^{b} \qquad e^{-a}=\frac{1}{e^{a}} \qquad e^{a-b}=\frac{e^{a}}{e^{b}} \qquad (e^{a})^{n}=e^{na}}$$

> **Exemple.** $e^{5}\times e^{-2}=e^{5-2}=e^{3}$. On additionne les exposants, on ne
> multiplie jamais les $e^{a}$ « à la main ».

**Dérivée et variations.** $\exp$ est dérivable sur $\mathbb{R}$ et **égale à sa propre
dérivée** :

$$\boxed{(e^{x})'=e^{x}}$$

Comme $e^{x}>0$, la dérivée est strictement positive : $\exp$ est **strictement croissante**
sur $\mathbb{R}$. Valeur clé : $e^{0}=1$.

**Limites aux bornes :**

$$\boxed{\lim_{x\to -\infty}e^{x}=0^{+}} \qquad\qquad \boxed{\lim_{x\to +\infty}e^{x}=+\infty}$$

> En $-\infty$, la courbe s'écrase sur l'axe des abscisses : **la droite $y=0$ est asymptote
> horizontale**. Attention, $e^{x}$ ne devient jamais négatif ni nul.

**Dérivée de $e^{u}$.** Si $u$ est dérivable, alors $\big(e^{u}\big)'=u'\,e^{u}$.

> **Exemple.** Pour $f(x)=e^{-3x}$, $u=-3x$ et $u'=-3$, donc $f'(x)=-3e^{-3x}$.

---

## 2. Le logarithme népérien : définition

$\exp$ est continue, strictement croissante sur $\mathbb{R}$, à valeurs dans $]0\,;+\infty[$.
Tout réel $x>0$ possède donc **un unique** antécédent par $\exp$ : on l'appelle le
**logarithme népérien** de $x$, noté $\ln x$.

$$\boxed{\ln x = y \iff x = e^{y}} \qquad \text{avec } x>0 \text{ et } y\in\mathbb{R}$$

> **Ensemble de définition.** $\ln$ n'existe que pour $x>0$ : son domaine est $]0\,;+\infty[$.
> On ne calcule **jamais** le $\ln$ d'un nombre négatif ou nul. Réflexe de survie : **avant
> de manipuler un $\ln$, vérifie que son argument est strictement positif.**

Comme $\ln$ et $\exp$ sont réciproques, elles se **compensent** :

$$\boxed{\ln(e^{x}) = x \ \ (\forall x\in\mathbb{R}) \qquad e^{\ln x} = x \ \ (\forall x>0)}$$

> **Exemple.** $\ln(e^{4})=4$ et $e^{\ln 5}=5$. Demander $e^{\ln 5}$, c'est demander « quel
> nombre a pour logarithme $\ln 5$ ? » — c'est $5$ lui-même.

Deux valeurs à connaître par cœur : $e^{0}=1$ donne $\ln 1=0$, et $e^{1}=e$ donne $\ln e=1$.

$$\boxed{\ln 1 = 0} \qquad\qquad \boxed{\ln e = 1}$$

---

## 3. Propriétés algébriques du logarithme

C'est le cœur du chapitre. Toutes se lisent « à l'envers » de l'exponentielle. Pour $a>0$ et
$b>0$ :

**Logarithme d'un produit** — la relation fondamentale :

$$\boxed{\ln(a\times b) = \ln a + \ln b}$$

> **Exemple.** $\ln 15=\ln(3\times 5)=\ln 3+\ln 5$. Un produit devient une **somme**.

**Logarithme d'un quotient :**

$$\boxed{\ln\!\left(\frac{a}{b}\right) = \ln a - \ln b}$$

> **Exemple.** $\ln\!\left(\dfrac{1}{b}\right)=-\ln b$, donc $\ln\!\left(\dfrac{1}{4}\right)=-\ln 4$.

**Logarithme d'une puissance** — pour tout entier $n$ (et plus généralement tout réel) :

$$\boxed{\ln(a^{n}) = n\,\ln a}$$

> **Exemple.** $\ln 8=\ln(2^{3})=3\ln 2$. L'exposant « descend » devant le $\ln$.

**Logarithme d'une racine :** $\ln\!\left(\sqrt{a}\right)=\dfrac{1}{2}\ln a$, car $\sqrt{a}=a^{1/2}$.

> ⚠️ **Il n'existe AUCUNE formule pour $\ln(a+b)$.** En particulier
> $\ln(a+b)\neq\ln a+\ln b$. Le $\ln$ ne « rentre » que dans les **produits, quotients et
> puissances**, jamais dans les sommes.

---

## 4. Dérivée, variations et limites du logarithme

$\ln$ est dérivable sur $]0\,;+\infty[$ et :

$$\boxed{\ (\ln x)' = \frac{1}{x}\ }$$

Sur $]0\,;+\infty[$, $\dfrac{1}{x}>0$ : la dérivée est strictement positive, donc

$$\boxed{\ln \text{ est strictement croissante sur } ]0\,;+\infty[}$$

> **Conséquence — le logarithme conserve l'ordre.** Pour $a>0$ et $b>0$ :
> $$a<b \iff \ln a<\ln b \qquad\qquad \ln a=\ln b \iff a=b$$
> C'est ce qui permet de résoudre les équations et inéquations (section 6).

**Dérivée de $\ln(u)$.** Si $u$ est dérivable et strictement positive :
$\big(\ln(u)\big)'=\dfrac{u'}{u}$.

> **Exemple.** Pour $f(x)=\ln(x^{2}+1)$, $u=x^2+1>0$ et $u'=2x$, donc $f'(x)=\dfrac{2x}{x^{2}+1}$.

**Limites aux bornes :**

$$\boxed{\lim_{x\to 0^{+}}\ln x = -\infty} \qquad\qquad \boxed{\lim_{x\to +\infty}\ln x = +\infty}$$

> En $0^{+}$, la courbe plonge le long de l'axe des ordonnées : **la droite $x=0$ est asymptote
> verticale**. En $+\infty$, $\ln$ tend vers $+\infty$ mais **très lentement**. Les courbes de
> $\ln$ et $\exp$ sont **symétriques par rapport à la droite $y=x$** (fonctions réciproques).

---

## 5. Croissances comparées

Face à une puissance de $x$, l'exponentielle **gagne toujours** et le logarithme **perd
toujours**. Pour tout entier $n\geqslant 1$ :

$$\boxed{\lim_{x\to +\infty}\frac{e^{x}}{x^{n}} = +\infty} \qquad\qquad
\boxed{\lim_{x\to -\infty}x^{n}e^{x} = 0}$$

$$\boxed{\lim_{x\to +\infty}\frac{\ln x}{x^{n}} = 0} \qquad\qquad
\boxed{\lim_{x\to 0^{+}} x^{n}\ln x = 0}$$

> **Exemple.** $\lim\limits_{x\to +\infty}\dfrac{e^{x}}{x}=+\infty$ : l'exponentielle « écrase »
> la puissance. À l'inverse $\lim\limits_{x\to +\infty}\dfrac{\ln x}{x}=0$ : la puissance écrase
> le logarithme. Règle à retenir : **en cas de conflit $\dfrac{\infty}{\infty}$, l'exponentielle
> l'emporte sur toute puissance, qui l'emporte elle-même sur le logarithme.**

---

## 6. Méthodes : équations et inéquations

Deux réflexes commandent tout : **condition d'existence d'abord**, puis on exploite la stricte
monotonie.

### Équation avec un logarithme

**Résoudre $\ln x = 3$.** Existence : $x>0$. On applique $\exp$ (réciproque) : $x=e^{3}$.
Comme $e^{3}>0$, la condition tient. **Solution : $x=e^{3}$.**

### Équation $\ln A = \ln B$

On utilise $\ln a=\ln b\iff a=b$, après les conditions d'existence.

> **Exemple.** $\ln(2x-1)=\ln(x+3)$. Existence : $2x-1>0$ **et** $x+3>0$, soit $x>\dfrac12$.
> On identifie : $2x-1=x+3\Rightarrow x=4$. Comme $4>\dfrac12$, **solution : $x=4$.**

### Équation avec une exponentielle

Pour isoler une inconnue placée en exposant, on applique $\ln$.

> **Exemple.** $e^{2x}=5\Rightarrow 2x=\ln 5\Rightarrow x=\dfrac{\ln 5}{2}$.

### Inéquation

$\ln$ et $\exp$ sont **strictement croissantes** : elles **conservent le sens** de l'inégalité.

> **Exemple.** $\ln x<2$. Existence : $x>0$. On applique $\exp$ : $x<e^{2}$. En croisant avec
> l'existence : **$0<x<e^{2}$**, soit $x\in\,]0\,;e^{2}[$.

---

## 7. Applications : utiliser log/exp dans un problème

Le logarithme est l'outil pour **résoudre en $n$** (ou en $t$) dès qu'une inconnue est en
exposant — seuils, doublements, temps de demi-vie.

> **Méthode type (seuil d'une suite géométrique).** On cherche le plus petit entier $n$ tel que
> $u_0\,q^{\,n}>S$ (avec $q>1$, $u_0>0$, $S>0$).
> 1. Isoler la puissance : $q^{\,n}>\dfrac{S}{u_0}$.
> 2. Appliquer $\ln$ (sens conservé car $\ln$ croissante) : $n\ln q>\ln\!\dfrac{S}{u_0}$.
> 3. Comme $q>1$, $\ln q>0$ : on divise sans changer le sens : $n>\dfrac{\ln(S/u_0)}{\ln q}$.
> 4. Conclure avec le plus petit entier au-dessus de cette valeur.

En **décroissance** ($0<q<1$, ex. désintégration radioactive), $\ln q<0$ : diviser par $\ln q$
**inverse** le sens de l'inégalité — c'est le piège classique de ces problèmes.

---

## 8. Cas particuliers et pièges de calcul

- $\ln$ d'un nombre entre $0$ et $1$ est **négatif** : $\ln(0{,}5)<0$ car $0{,}5<1$.
- $\ln x=0\iff x=1$ ; $e^{x}=1\iff x=0$.
- $-\ln a=\ln\!\left(\dfrac1a\right)$ : un signe moins peut se cacher dans un quotient.
- $\ln(a^{2})=2\ln a$ **seulement si $a>0$**. Pour $a$ non nul quelconque : $\ln(a^{2})=2\ln|a|$.
- Diviser une inéquation par $\ln q$ **inverse** le sens quand $0<q<1$ (car $\ln q<0$).

---

## 9. Tableau récapitulatif

| Notion | À mémoriser |
|---|---|
| Exp — algèbre | $e^{a+b}=e^a e^b$, $e^{-a}=\frac{1}{e^a}$, $(e^a)^n=e^{na}$ |
| Exp — dérivée | $(e^x)'=e^x$, $(e^u)'=u'e^u$ |
| Exp — limites | $\lim\limits_{-\infty}e^x=0^+$, $\lim\limits_{+\infty}e^x=+\infty$ |
| Ln — définition | $\ln x=y\iff x=e^y$, avec $x>0$ |
| Compensation | $\ln(e^x)=x$ et $e^{\ln x}=x$ |
| Valeurs clés | $\ln 1=0$, $\ln e=1$, $e^0=1$ |
| Produit / quotient | $\ln(ab)=\ln a+\ln b$ ; $\ln\!\frac ab=\ln a-\ln b$ |
| Puissance | $\ln(a^{n})=n\ln a$ |
| Ln — dérivée | $(\ln x)'=\frac1x$, $(\ln u)'=\frac{u'}{u}$ |
| Ln — variations | strictement **croissante** sur $]0\,;+\infty[$ |
| Ln — limites | $\lim\limits_{0^+}\ln=-\infty$, $\lim\limits_{+\infty}\ln=+\infty$ |
| Croissances comparées | $\frac{e^x}{x^n}\to+\infty$ ; $\frac{\ln x}{x^n}\to 0$ ; $x^n\ln x\to 0$ en $0^+$ |

---

## 10. Les erreurs qui coûtent des points

1. **Oublier la condition d'existence.** Avant de résoudre avec $\ln$, pose l'argument $>0$ —
   et **vérifie à la fin** que la solution la respecte. Une solution qui rend un argument
   négatif est à **rejeter**.
2. **Croire que $\ln(a+b)=\ln a+\ln b$.** FAUX : le $\ln$ ne rentre que dans les produits.
   $\ln(2+3)=\ln 5$, pas $\ln 6$.
3. **Écrire $e^{a}\times e^{b}=e^{ab}$ ou $e^{a}+e^{b}=e^{a+b}$.** Non : les exposants
   **s'additionnent dans un produit** ($e^{a}e^{b}=e^{a+b}$), une somme d'exponentielles ne se
   simplifie pas.
4. **Faire descendre la puissance de tout le contenu.** Dans $\ln(3x^{2})$, seul $x^2$ est au
   carré : $\ln(3x^{2})=\ln 3+2\ln x$, pas $2\ln(3x)$.
5. **Ne pas inverser le sens quand on divise par $\ln q$ avec $0<q<1$.** $\ln q<0$ : l'inégalité
   **change de sens**. C'est l'erreur reine des problèmes de décroissance.
6. **Confondre les croissances comparées.** L'exponentielle bat la puissance, la puissance bat
   le logarithme. Conclure « $\dfrac{\infty}{\infty}=1$ » est une faute : c'est une forme
   indéterminée que la règle tranche.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE : fichier docs/programme-terminale-maths-options-2019.txt, en-tête (lignes 1 à 11) et
section « === Fonctions logarithme et exponentielle === » (lignes 71 à 74), rubriques
« Contenus » et « Capacités ». Programme des ENSEIGNEMENTS OPTIONNELS de mathématiques,
option MATHS COMPLÉMENTAIRES, terminale générale (arrêté du 19-7-2019, BO spécial n°8 du
25 juillet 2019). URL officielle : education.gouv.fr/bo/19/Special8/MENE1921265A.htm ;
PDF : cache.media.education.gouv.fr/.../spe265_annexe_1159134.pdf.

⚠️ PROVENANCE DE LA SOURCE : d'après l'en-tête du fichier, le texte a été extrait via WebFetch
depuis les PDF officiels. La reproduction n'est pas garantie exhaustive. AVANT PUBLICATION,
CONFRONTER AU PDF OFFICIEL (education.gouv.fr / éduscol) par un professeur.

CONTENU DU PROGRAMME (verbatim de la source) :
- Contenus : « fonction exponentielle (rappels) ; fonction logarithme népérien, propriétés
  algébriques, dérivée, variations, limites ; croissances comparées ».
- Capacités : « résoudre équations et inéquations ; utiliser log/exp dans un problème ».

CHOIX DE RÉDACTION À CONFRONTER AU RELECTEUR :
- « Rappels sur l'exponentielle » : le programme les cite sans les détailler (renvoi au
  programme de Première). J'ai retenu algèbre, dérivée, variations, limites, dérivée de e^u —
  périmètre standard. À valider selon le niveau d'exigence attendu en complémentaires.
- Croissances comparées : le programme dit seulement « croissances comparées » sans préciser
  les formes. J'ai inclus e^x/x^n → +∞, x^n e^x → 0 en -∞, ln x /x^n → 0, x^n ln x → 0 en 0⁺.
  Vérifier les formes exactes attendues (notamment si x^n e^x en -∞ est au programme complém.).
- Dérivées de composées (e^u)' et (ln u)' : indispensables aux exercices « utiliser dans un
  problème » ; incluses. Confirmer qu'elles sont exigibles en maths complémentaires.
- Section 7 « Applications » : traduit la capacité « utiliser log/exp dans un problème » par la
  méthode de seuil d'une suite géométrique (cohérent avec la section « Suites et modèles
  d'évolution » du même programme). Cadrage à valider.
- Aucune démonstration exigible n'a été supposée : la construction rigoureuse de ln comme
  réciproque est esquissée, non démontrée. Préciser si une démonstration est attendue.

Rédaction 100 % originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
