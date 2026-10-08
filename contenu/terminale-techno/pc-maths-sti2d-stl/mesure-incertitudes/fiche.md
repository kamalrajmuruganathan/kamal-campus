---
id: tale-sti2d-pc-mesure-incertitudes
titre: "Mesure et incertitudes (terminale)"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 13
prerequis:
  - Mesure et incertitudes (Première STI2D/STL — chapitre mesure-incertitudes, même parcours)
  - Puissances de dix et conversions d'unités (Seconde)
statut: brouillon
relu_par: null
---

# Mesure et incertitudes (terminale)

> En première, tu as appris à évaluer l'incertitude d'une grandeur **mesurée
> directement**. Mais en terminale, presque tous tes résultats sont **calculés** :
> une résistance sort de $R = U/I$, une masse volumique de $\rho = m/V$. Si $U$ et
> $I$ sont incertains, $R$ l'est aussi — de combien ? C'est la question nouvelle de
> ce chapitre : **propager** les incertitudes jusqu'au résultat final, puis juger
> si ce résultat est **valide**.

---

## 1. Ce que tu dois déjà savoir (première)

Ce chapitre s'appuie directement sur le chapitre « Mesure et incertitudes » de
première, qu'il faut avoir relu. En deux lignes :

- toute mesure est **dispersée** : l'incertitude-type $u(X)$ chiffre cette
  dispersion ;
- série de $n$ mesures (type A) : $u(X) = \dfrac{s}{\sqrt{n}}$ ; mesure unique :
  $u$ estimée d'après l'instrument ;
- un résultat s'écrit $X = X_{\text{mes}} \pm u(X)$, **avec l'unité**.

Rien de tout cela n'est redémontré ici : on le **réutilise**.

---

## 2. Le problème nouveau : l'incertitude d'un résultat calculé

Tu mesures une tension $U = 12{,}0$ V à $0{,}1$ V près et une intensité
$I = 0{,}250$ A à $0{,}005$ A près, puis tu calcules $R = \dfrac{U}{I} = 48{,}0\ \Omega$.

Les incertitudes sur $U$ et sur $I$ **se transmettent** à $R$ : on dit qu'elles se
**propagent**. L'incertitude qui en résulte s'appelle l'**incertitude-type
composée** de $R$, notée $u(R)$.

> **Définition.** L'**incertitude-type composée** d'une grandeur calculée est
> l'incertitude-type qui résulte de la propagation des incertitudes-types des
> grandeurs mesurées intervenant dans le calcul.

> ✅ **Bonne nouvelle du programme** : la formule de propagation est **fournie dans
> l'énoncé**. Tu n'as pas à la retenir ni à la démontrer — tu dois savoir
> **l'utiliser sans te tromper**, unités comprises.

---

## 3. Les formules de propagation que tu rencontreras

Elles seront données, mais autant les reconnaître au premier coup d'œil.

### Somme ou différence : les incertitudes absolues s'ajoutent « au carré »

Pour $y = a + b$ **ou** $y = a - b$ :

$$\boxed{u(y) = \sqrt{u(a)^2 + u(b)^2}}$$

> ⚠️ C'est la **même** formule pour la somme et pour la différence : les
> incertitudes ne se soustraient **jamais**. Un doute ne peut pas en annuler un
> autre.

> **Exemple.** Masse d'un liquide par différence : $m = m_{\text{plein}} - m_{\text{vide}}$,
> avec $u(m_{\text{plein}}) = u(m_{\text{vide}}) = 0{,}05$ g.
> $u(m) = \sqrt{0{,}05^2 + 0{,}05^2} = \sqrt{0{,}005} \approx 0{,}07$ g — un peu
> plus que $0{,}05$, beaucoup moins que $0{,}10$.

### Produit ou quotient : les incertitudes relatives s'ajoutent « au carré »

Pour $y = a \times b$ **ou** $y = \dfrac{a}{b}$ :

$$\boxed{\frac{u(y)}{y} = \sqrt{\left(\frac{u(a)}{a}\right)^2 + \left(\frac{u(b)}{b}\right)^2}}$$

Le quotient $\dfrac{u(X)}{X}$ est l'**incertitude relative** : un nombre **sans
unité**, souvent exprimé en pourcentage. C'est elle qui se propage dans les
produits et quotients.

> **Exemple.** $R = \dfrac{U}{I}$ avec $\dfrac{u(U)}{U} = 1\,\%$ et
> $\dfrac{u(I)}{I} = 2\,\%$ :
> $\dfrac{u(R)}{R} = \sqrt{0{,}01^2 + 0{,}02^2} = \sqrt{5\times 10^{-4}} \approx 2{,}2\,\%$.
> Remarque : le résultat est **proche du plus grand** des deux pourcentages, pas
> de leur somme.

### Multiplication par une constante et puissances

- Pour $y = k \cdot a$ ($k$ constante exacte) : $u(y) = |k| \cdot u(a)$.
- Pour $y = a^n$ : $\dfrac{u(y)}{y} = |n| \cdot \dfrac{u(a)}{a}$.

> **Exemple.** Période d'un pendule mesurée sur $10$ oscillations : on mesure
> $\Delta t = 14{,}15 \pm 0{,}05$ s, donc $T = \dfrac{\Delta t}{10}$ et
> $u(T) = \dfrac{0{,}05}{10} = 0{,}005$ s. Mesurer $10$ périodes d'un coup divise
> l'incertitude par $10$ : c'est tout l'intérêt de la méthode.

> ⚠️ **Piège de la constante.** $y = 2a$ donne $u(y) = 2\,u(a)$, et **non**
> $\sqrt{2}\,u(a)$ : la formule de la somme en quadrature vaut pour deux mesures
> **indépendantes**, pas pour la même mesure comptée deux fois.

---

## 4. Méthode — propager une incertitude pas à pas

1. **Calcule la valeur** du résultat avec toutes les grandeurs dans des unités
   **cohérentes** (convertis d'abord : ms → s, mL → L…). Garde des chiffres de
   garde, tu arrondiras à la fin.
2. **Repère la structure** du calcul : somme/différence ou produit/quotient ?
   C'est elle qui dicte la formule fournie.
3. **Applique la formule** : incertitudes **absolues** pour une somme,
   **relatives** pour un produit.
4. **Reviens à l'incertitude absolue** si besoin :
   $u(y) = y \times \dfrac{u(y)}{y}$, dans l'unité du résultat.
5. **Arrondis** : l'incertitude à $1$ chiffre significatif (voir § 5), la valeur
   au même rang.

> **Exemple complet.** $R = \dfrac{U}{I}$, $U = 12{,}0 \pm 0{,}1$ V,
> $I = 0{,}250 \pm 0{,}005$ A.
> Valeur : $R = \dfrac{12{,}0}{0{,}250} = 48{,}0\ \Omega$.
> Relatives : $\dfrac{u(U)}{U} = \dfrac{0{,}1}{12{,}0} \approx 0{,}83\,\%$ ;
> $\dfrac{u(I)}{I} = \dfrac{0{,}005}{0{,}250} = 2{,}0\,\%$.
> Composée : $\dfrac{u(R)}{R} = \sqrt{0{,}0083^2 + 0{,}020^2} \approx 0{,}022$.
> Absolue : $u(R) = 48{,}0 \times 0{,}022 \approx 1{,}0\ \Omega$.
> Résultat : $R = 48 \pm 1\ \Omega$.

---

## 5. Écrire le résultat : chiffres significatifs adaptés

Le programme de terminale insiste : le résultat s'écrit avec un nombre de chiffres
significatifs **cohérent avec l'incertitude-type**.

### Les deux règles d'écriture

$$\boxed{X = X_{\text{mes}} \pm u(X)\quad \text{[unité]}}$$

1. **L'incertitude** s'arrondit à $1$ chiffre significatif (l'arrondi se fait
   **par excès** en cas de doute : on ne minimise jamais un doute).
2. **La valeur** s'arrondit **au même rang** (même position décimale) que
   l'incertitude.

> **Exemple.** Calcul brut : $\rho = 7{,}8966$ g·cm⁻³ avec $u(\rho) = 0{,}0702$
> g·cm⁻³.
> Incertitude à 1 chiffre : $u = 0{,}07$ g·cm⁻³ (rang : le centième).
> Valeur au centième : $\rho = 7{,}90$ g·cm⁻³.
> Écriture finale : $\rho = 7{,}90 \pm 0{,}07$ g·cm⁻³.

> ⚠️ **Deux écritures fausses à bannir** :
> $\rho = 7{,}8966 \pm 0{,}07$ (valeur trop précise pour l'incertitude) et
> $\rho = 7{,}9 \pm 0{,}07$ (valeur arrondie **plus grossièrement** que
> l'incertitude — on perd de l'information).

### Sans incertitude chiffrée : la règle des chiffres significatifs

Quand l'énoncé ne fournit pas d'incertitude, on retombe sur la règle de première :
un produit ou un quotient se donne avec **autant de chiffres significatifs que la
donnée qui en a le moins**. La calculatrice affiche $3{,}12$ pour
$2{,}4 \times 1{,}3$ ? Tu écris $3{,}1$.

---

## 6. Validité d'un résultat : comparer à une valeur de référence

C'est le deuxième apport de terminale : conclure. Un résultat de mesure se
confronte à une **valeur de référence** $X_{\text{réf}}$ (constante tabulée,
valeur du constructeur, prédiction d'un modèle).

### La démarche

1. Calcule l'écart $\left| X_{\text{mes}} - X_{\text{réf}} \right|$.
2. Compare-le à l'incertitude-type en formant le quotient, souvent appelé
   **écart normalisé** :

$$\boxed{z = \frac{\left| X_{\text{mes}} - X_{\text{réf}} \right|}{u(X)}}$$

3. Conclus :

| Écart normalisé | Conclusion |
|---|---|
| $z \leqslant 2$ | résultat **compatible** avec la référence |
| $z > 2$ | résultat **non compatible** : il faut chercher pourquoi |

> **Exemple.** Vitesse du son mesurée : $v = 347 \pm 4$ m·s⁻¹ ; référence à
> $20\ ^\circ\mathrm{C}$ : $343$ m·s⁻¹.
> $z = \dfrac{|347 - 343|}{4} = 1{,}0 \leqslant 2$ : la mesure est **compatible**
> avec la valeur de référence.

### Que dire quand $z > 2$ ?

**Jamais** « la mesure est fausse » tout court. Trois pistes, à discuter :

- une **erreur systématique** non corrigée (appareil déréglé, protocole biaisé) ;
- une **incertitude sous-estimée** (source de doute oubliée dans le bilan) ;
- un **modèle hors de son domaine de validité** (la référence ne s'applique pas
  aux conditions de l'expérience : température différente, par exemple).

> **Bien comprendre le seuil.** $2$ incertitudes-types n'est pas une frontière
> magique : c'est un **ordre de grandeur d'écart maximal raisonnable**. À
> $z = 1{,}9$ on ne triomphe pas, à $z = 2{,}1$ on ne jette pas tout — on
> **discute**.

---

## 7. Tableau récapitulatif

| Situation | Formule (fournie en énoncé) |
|---|---|
| $y = a + b$ ou $y = a - b$ | $u(y) = \sqrt{u(a)^2 + u(b)^2}$ |
| $y = a \times b$ ou $y = a/b$ | $\dfrac{u(y)}{y} = \sqrt{\left(\dfrac{u(a)}{a}\right)^2 + \left(\dfrac{u(b)}{b}\right)^2}$ |
| $y = k\,a$ ($k$ exact) | $u(y) = \lvert k \rvert\, u(a)$ |
| $y = a^n$ | $\dfrac{u(y)}{y} = \lvert n\rvert \, \dfrac{u(a)}{a}$ |

| À savoir faire | Règle |
|---|---|
| Écriture du résultat | $X = X_{\text{mes}} \pm u(X)$ + unité |
| Arrondi de $u$ | $1$ chiffre significatif |
| Arrondi de la valeur | au **même rang** que $u$ |
| Validité | $z = \dfrac{\lvert X_{\text{mes}} - X_{\text{réf}}\rvert}{u(X)}$, seuil usuel $2$ |
| $z > 2$ | erreur systématique ? $u$ sous-estimée ? modèle hors domaine ? |

---

## 8. Les erreurs qui coûtent des points

1. **Additionner les incertitudes au lieu de les composer en quadrature** :
   $u(y) = u(a) + u(b)$ est faux, la formule fournie contient une racine carrée.
2. **Soustraire les incertitudes dans une différence** : pour $y = a - b$, les
   incertitudes s'ajoutent (au carré) exactement comme pour une somme.
3. **Mélanger absolu et relatif** : incertitudes **absolues** pour une somme,
   **relatives** pour un produit ou un quotient. Injecter $u(U) = 0{,}1$ V dans
   la formule des relatives est un non-sens (et les unités le crient).
4. **Rendre $\rho = 7{,}8966 \pm 0{,}07$** : la valeur doit être arrondie **au
   rang de l'incertitude**, ici $7{,}90 \pm 0{,}07$.
5. **Oublier une conversion avant de propager** : $t$ en ms et $d$ en m dans
   $v = d/t$ donne un résultat mille fois trop petit — l'incertitude relative,
   elle, semble normale, donc l'erreur passe inaperçue si tu ne vérifies pas
   l'ordre de grandeur.
6. **Conclure « mesure fausse » dès que $X_{\text{mes}} \neq X_{\text{réf}}$**,
   sans calculer l'écart normalisé : deux valeurs différentes peuvent être
   parfaitement compatibles si l'écart reste dans $2\,u$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n°8 du 25 juillet 2019, « Physique-chimie et
mathématiques », spécialité de terminale STI2D et STL, arrêté MENE1921261A
(docs/programme-terminale-sti2d-stl-pc-maths.txt, section « Mesure et incertitudes
(terminale) »), extrait via WebFetch depuis le PDF officiel
cache.media.education.gouv.fr (spe261_annexe_1158935.pdf). À confronter au PDF
avant publication.

Contenus couverts, tels que listés dans l'extraction :
- « Dispersion des mesures ; incertitude-type » → rappel actif § 1-2 (le détail est
  dans le chapitre de première du même parcours, cité en prérequis, non répété).
- « Incertitude-type COMPOSÉE (propagation sur un résultat calculé) » → § 2-4.
  L'extraction précise que la formule est fournie dans les énoncés ; la fiche et
  tous les exercices respectent ce cadre (formules toujours rappelées).
- « Validité d'un résultat ; écriture avec un nombre de chiffres significatifs
  adapté » → § 5-6.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le TERME « écart normalisé » (et la notation z) n'apparaît PAS dans l'extraction
  locale du programme, qui dit seulement « validité d'un résultat ». La MÉTHODE
  (écart comparé à l'incertitude-type) prolonge celle du programme de première
  (« écart évalué en nombre d'incertitudes-types »). J'ai introduit le nom « écart
  normalisé » comme appellation usuelle : vérifier sur le PDF si le terme figure
  dans le texte officiel de terminale ; sinon, le présenter explicitement comme
  vocabulaire d'usage.
- Le SEUIL de 2 : usage courant, pas une prescription du texte extrait. La fiche
  le présente comme « ordre de grandeur d'écart maximal raisonnable » — formulation
  à valider.
- Les formules de propagation retenues (quadrature des absolues pour somme/
  différence, quadrature des relatives pour produit/quotient, |k|u(a), |n|u(a)/a)
  sont les formules standard (GUM) données dans les sujets de bac STI2D/STL ;
  le programme dit seulement « formule fournie ». Vérifier qu'aucune variante
  (somme simple majorante) n'est attendue.
- L'arrondi de l'incertitude « par excès en cas de doute » et à 1 chiffre
  significatif : convention d'usage (certains sujets en gardent 2). À valider.

Calculs vérifiés numériquement (R = U/I : 48 ± 1 Ω ; différence de masses :
u = 0,07 g ; ρ : 7,90 ± 0,07 g·cm⁻³ ; vitesse du son : z = 1,0).

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
