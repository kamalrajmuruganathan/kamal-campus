---
id: tale-sti2d-math-complexes-exponentielle
titre: "Nombres complexes : exponentielle complexe et signal"
voie: technologique
niveau: terminale-techno
parcours: pc-maths-sti2d-stl
matiere: mathematiques
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité PC et maths, terminale STI2D/STL"
duree_lecture_min: 15
prerequis:
  - Nombres complexes — forme algébrique, module, argument, forme trigonométrique (Première STI2D/STL)
  - Trigonométrie (Première STI2D/STL)
  - Primitives (Terminale STI2D/STL)
statut: brouillon
relu_par: null
---

# Nombres complexes : exponentielle complexe et signal

> En Première, tu as appris à écrire $z = a + \mathrm{i}b$ et
> $z = r(\cos\theta + \mathrm{i}\sin\theta)$. Cette année, une notation change
> tout : $\mathrm{e}^{\mathrm{i}\theta}$. Avec elle, multiplier deux complexes
> revient à **additionner des angles**, et une tension sinusoïdale
> $a\cos(\omega t) + b\sin(\omega t)$ se réécrit d'un coup
> $A\cos(\omega t + \varphi)$ — amplitude et phase, exactement ce que lit
> l'oscilloscope. C'est le chapitre le plus « électricité » de tout le programme
> de maths.

---

## 1. L'exponentielle complexe

Pour tout réel $\theta$, on pose :

$$\boxed{\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta}$$

C'est le nombre complexe de **module $1$** et d'**argument $\theta$** : son image
est le point du cercle trigonométrique repéré par l'angle $\theta$.

| $\theta$ | $0$ | $\dfrac{\pi}{2}$ | $\pi$ | $-\dfrac{\pi}{2}$ |
|---|---|---|---|---|
| $\mathrm{e}^{\mathrm{i}\theta}$ | $1$ | $\mathrm{i}$ | $-1$ | $-\mathrm{i}$ |

> **Exemple.** $\mathrm{e}^{\mathrm{i}\pi/3} = \cos\dfrac{\pi}{3} + \mathrm{i}\sin\dfrac{\pi}{3}
> = \dfrac{1}{2} + \mathrm{i}\dfrac{\sqrt{3}}{2}$.

Cette notation se manipule **comme une puissance** :

$$\mathrm{e}^{\mathrm{i}\theta} \times \mathrm{e}^{\mathrm{i}\theta'} = \mathrm{e}^{\mathrm{i}(\theta + \theta')}
\qquad \frac{1}{\mathrm{e}^{\mathrm{i}\theta}} = \mathrm{e}^{-\mathrm{i}\theta}
\qquad \left(\mathrm{e}^{\mathrm{i}\theta}\right)^n = \mathrm{e}^{\mathrm{i}n\theta}$$

> ⚠️ Pour tout $\theta$ réel, $\left|\mathrm{e}^{\mathrm{i}\theta}\right| = 1$ :
> l'exponentielle complexe ne « grandit » pas, elle **tourne**.

---

## 2. Forme exponentielle

Tout complexe $z \neq 0$ de module $r$ et d'argument $\theta$ s'écrit :

$$\boxed{z = r\,\mathrm{e}^{\mathrm{i}\theta}} \qquad \text{avec } r = |z| > 0$$

C'est la forme trigonométrique $r(\cos\theta + \mathrm{i}\sin\theta)$ en version
compacte. Le module et l'argument sont les mêmes qu'en Première — seule
l'écriture change.

> ⚠️ Dans $r\,\mathrm{e}^{\mathrm{i}\theta}$, le facteur $r$ doit être
> **strictement positif**. $-2\,\mathrm{e}^{\mathrm{i}\pi/4}$ n'est PAS une forme
> exponentielle : on écrit $-2\,\mathrm{e}^{\mathrm{i}\pi/4} = 2\,\mathrm{e}^{\mathrm{i}(\pi/4 + \pi)} = 2\,\mathrm{e}^{\mathrm{i}5\pi/4}$,
> car multiplier par $-1 = \mathrm{e}^{\mathrm{i}\pi}$ ajoute $\pi$ à l'argument.

---

## 3. Passer d'une forme à l'autre

### Algébrique → exponentielle

1. Calculer $r = |z| = \sqrt{a^2 + b^2}$.
2. Chercher $\theta$ tel que $\cos\theta = \dfrac{a}{r}$ **et** $\sin\theta = \dfrac{b}{r}$.
3. Écrire $z = r\,\mathrm{e}^{\mathrm{i}\theta}$.

> **Exemple.** $z = \sqrt{3} + \mathrm{i}$ : $r = \sqrt{3 + 1} = 2$, puis
> $\cos\theta = \dfrac{\sqrt3}{2}$ et $\sin\theta = \dfrac{1}{2}$, donc
> $\theta = \dfrac{\pi}{6}$ et $z = 2\,\mathrm{e}^{\mathrm{i}\pi/6}$.

### Exponentielle → algébrique

Développer avec la définition : $r\,\mathrm{e}^{\mathrm{i}\theta} = r\cos\theta + \mathrm{i}\,r\sin\theta$.

> **Exemple.** $z = 4\,\mathrm{e}^{-\mathrm{i}\pi/3} = 4\cos\left(-\dfrac{\pi}{3}\right)
> + 4\mathrm{i}\sin\left(-\dfrac{\pi}{3}\right) = 2 - 2\mathrm{i}\sqrt{3}$.

---

## 4. Opérations sous forme exponentielle

C'est LA nouveauté de Terminale : produit et quotient deviennent immédiats.

$$\boxed{r\,\mathrm{e}^{\mathrm{i}\theta} \times r'\,\mathrm{e}^{\mathrm{i}\theta'} = rr'\,\mathrm{e}^{\mathrm{i}(\theta + \theta')}}
\qquad \frac{r\,\mathrm{e}^{\mathrm{i}\theta}}{r'\,\mathrm{e}^{\mathrm{i}\theta'}} = \frac{r}{r'}\,\mathrm{e}^{\mathrm{i}(\theta - \theta')}$$

**Les modules se multiplient, les arguments s'additionnent.**

> **Exemple.** $2\,\mathrm{e}^{\mathrm{i}\pi/6} \times 3\,\mathrm{e}^{\mathrm{i}\pi/3}
> = 6\,\mathrm{e}^{\mathrm{i}\pi/2} = 6\mathrm{i}$.

**Règle de choix de la forme** : forme **algébrique** pour les sommes, forme
**exponentielle** pour les produits, quotients et puissances.

---

## 5. Formules d'addition et de duplication

Le produit $\mathrm{e}^{\mathrm{i}(a+b)} = \mathrm{e}^{\mathrm{i}a}\,\mathrm{e}^{\mathrm{i}b}$,
développé puis identifié partie réelle / partie imaginaire, redonne les
**formules d'addition** :

$$\boxed{\cos(a+b) = \cos a\cos b - \sin a\sin b}$$
$$\boxed{\sin(a+b) = \sin a\cos b + \cos a\sin b}$$

En remplaçant $b$ par $-b$ : $\cos(a-b) = \cos a\cos b + \sin a\sin b$ et
$\sin(a-b) = \sin a\cos b - \cos a\sin b$.

Avec $b = a$, on obtient les **formules de duplication** :

$$\boxed{\cos(2a) = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a}$$
$$\boxed{\sin(2a) = 2\sin a\cos a}$$

> **Exemple.** Si $\cos a = \dfrac{3}{5}$, alors
> $\cos(2a) = 2 \times \dfrac{9}{25} - 1 = -\dfrac{7}{25}$ — sans avoir besoin
> de connaître $a$.

---

## 6. Linéariser $\cos^2$ et $\sin^2$

**Linéariser** = transformer un carré en expression **sans puissance**, du
premier degré en $\cos$ et $\sin$. On isole $\cos^2 a$ et $\sin^2 a$ dans les
formules de duplication :

$$\boxed{\cos^2 a = \frac{1 + \cos(2a)}{2}} \qquad \boxed{\sin^2 a = \frac{1 - \cos(2a)}{2}}$$

**Moyen mnémotechnique** : les deux commencent par $\dfrac{1}{2}$ ; le signe
$+$ va avec $\cos^2$, le signe $-$ avec $\sin^2$. Contrôle rapide en $a = 0$ :
$\cos^2 0 = 1 = \dfrac{1+1}{2}$ ✓ et $\sin^2 0 = 0 = \dfrac{1-1}{2}$ ✓.

### Application : calculer une primitive

On ne sait pas primitiver $\cos^2 t$ directement — mais on sait primitiver
$\cos(2t)$. On linéarise **d'abord** :

$$\int \cos^2 t\,\mathrm{d}t = \int \left(\frac{1}{2} + \frac{\cos(2t)}{2}\right)\mathrm{d}t
= \frac{t}{2} + \frac{\sin(2t)}{4} + C$$

> ⚠️ Ne pas oublier de **diviser par $2$** en primitivant $\cos(2t)$ :
> une primitive de $\cos(2t)$ est $\dfrac{\sin(2t)}{2}$, d'où le $4$ au
> dénominateur final. Ce type de calcul sert en physique pour la **valeur
> moyenne** de $u^2(t)$, donc pour la valeur efficace d'une tension.

---

## 7. Le cœur du chapitre en STI2D : $a\cos(\omega t) + b\sin(\omega t)$

Un signal sinusoïdal se présente souvent comme une somme
$a\cos(\omega t) + b\sin(\omega t)$. Physiquement, c'est **une seule**
sinusoïde : il existe $A > 0$ et $\varphi$ tels que

$$\boxed{a\cos(\omega t) + b\sin(\omega t) = A\cos(\omega t + \varphi)}
\qquad \text{avec } A = \sqrt{a^2 + b^2}$$

$A$ est l'**amplitude**, $\varphi$ la **phase à l'origine**.

### Méthode (identification)

1. Développer la cible avec la formule d'addition :
   $A\cos(\omega t + \varphi) = A\cos\varphi\,\cos(\omega t) - A\sin\varphi\,\sin(\omega t)$.
2. Identifier les coefficients de $\cos(\omega t)$ et $\sin(\omega t)$ :
   $A\cos\varphi = a$ et $-A\sin\varphi = b$.
3. D'où $A = \sqrt{a^2+b^2}$, puis $\cos\varphi = \dfrac{a}{A}$ **et**
   $\sin\varphi = -\dfrac{b}{A}$, qui déterminent $\varphi$.

> **Exemple.** $u(t) = \cos(\omega t) + \sqrt{3}\sin(\omega t)$.
> $A = \sqrt{1 + 3} = 2$, puis $\cos\varphi = \dfrac{1}{2}$ et
> $\sin\varphi = -\dfrac{\sqrt3}{2}$, donc $\varphi = -\dfrac{\pi}{3}$ :
>
> $$u(t) = 2\cos\!\left(\omega t - \frac{\pi}{3}\right)$$
>
> Vérification par développement : $2\left[\cos\omega t\cos\dfrac{\pi}{3}
> + \sin\omega t\sin\dfrac{\pi}{3}\right] = \cos\omega t + \sqrt3\sin\omega t$ ✓.

**Lecture complexe** : $a\cos(\omega t) + b\sin(\omega t)$ est la partie réelle
de $(a - \mathrm{i}b)\,\mathrm{e}^{\mathrm{i}\omega t}$ ; écrire
$a - \mathrm{i}b = A\,\mathrm{e}^{\mathrm{i}\varphi}$ donne directement
$A$ et $\varphi$. C'est le principe des **vecteurs de Fresnel** et des
impédances complexes vus en physique.

> ⚠️ **Le signe de $\sin\varphi$ est le piège n°1** : $\sin\varphi = -\dfrac{b}{A}$,
> avec un **moins**, parce que le développement de $\cos(\omega t + \varphi)$
> fait apparaître $-\sin\varphi\sin(\omega t)$.

---

## 8. Équations dans $\mathbb{C}$

### Premier degré

Comme dans $\mathbb{R}$ : isoler $z$, puis mettre le quotient sous forme
algébrique avec le conjugué.

> **Exemple.** $(1+\mathrm{i})z = 4\mathrm{i}$ donne
> $z = \dfrac{4\mathrm{i}}{1+\mathrm{i}} = \dfrac{4\mathrm{i}(1-\mathrm{i})}{2} = 2 + 2\mathrm{i}$.

### Équation $z^2 = a$, avec $a$ réel

| Cas | Solutions dans $\mathbb{C}$ |
|---|---|
| $a > 0$ | $z = \sqrt{a}$ ou $z = -\sqrt{a}$ |
| $a = 0$ | $z = 0$ (unique) |
| $a < 0$ | $\boxed{z = \mathrm{i}\sqrt{-a} \ \text{ou} \ z = -\mathrm{i}\sqrt{-a}}$ |

> **Exemple.** $z^2 = -16$ : les solutions sont $4\mathrm{i}$ et $-4\mathrm{i}$.
> Vérification : $(4\mathrm{i})^2 = 16\,\mathrm{i}^2 = -16$ ✓.

> ⚠️ Dans $\mathbb{C}$, une équation $z^2 = a$ avec $a \neq 0$ a **toujours deux
> solutions opposées** — même quand $a < 0$. Et on n'écrit JAMAIS $\sqrt{-16}$ :
> le symbole $\sqrt{\ }$ est réservé aux réels positifs.

---

## 9. Interprétation géométrique de $z \mapsto z + b$ et $z \mapsto az$

Dans le plan complexe, à chaque transformation de l'écriture correspond une
transformation géométrique.

### $z \mapsto z + b$ : translation

Ajouter $b$ à l'affixe **translate** le point : $M(z) \mapsto M'(z + b)$ est la
**translation de vecteur d'affixe $b$**.

> **Exemple.** $z \mapsto z + 3 - 2\mathrm{i}$ décale tout point de $3$ vers la
> droite et de $2$ vers le bas.

### $z \mapsto az$ (avec $a = r\,\mathrm{e}^{\mathrm{i}\theta} \neq 0$)

Multiplier par $a$ **multiplie le module par $r$** et **ajoute $\theta$ à
l'argument** :

| Valeur de $a$ | Transformation |
|---|---|
| $a = \mathrm{e}^{\mathrm{i}\theta}$ (module $1$) | **rotation** de centre $O$ et d'angle $\theta$ |
| $a = r$ réel, $r > 0$ | **homothétie** de centre $O$ et de rapport $r$ |
| $a = r\,\mathrm{e}^{\mathrm{i}\theta}$ quelconque | rotation d'angle $\theta$ **suivie de** l'homothétie de rapport $r$ (centre $O$) |

> **Exemple.** $z \mapsto \mathrm{i}z$ : comme $\mathrm{i} = \mathrm{e}^{\mathrm{i}\pi/2}$,
> c'est la **rotation de centre $O$ et d'angle $\dfrac{\pi}{2}$** (quart de tour
> direct). Ainsi $1 + \mathrm{i} \mapsto \mathrm{i}(1+\mathrm{i}) = -1 + \mathrm{i}$.

---

## 10. À retenir absolument

| | |
|---|---|
| Exponentielle complexe | $\mathrm{e}^{\mathrm{i}\theta} = \cos\theta + \mathrm{i}\sin\theta$, module $1$ |
| Forme exponentielle | $z = r\,\mathrm{e}^{\mathrm{i}\theta}$, $r = \lvert z\rvert > 0$ |
| Produit | modules multipliés, arguments **additionnés** |
| Addition | $\cos(a+b) = \cos a\cos b - \sin a\sin b$ ; $\sin(a+b) = \sin a\cos b + \cos a\sin b$ |
| Duplication | $\cos 2a = 2\cos^2 a - 1$ ; $\sin 2a = 2\sin a\cos a$ |
| Linéarisation | $\cos^2 a = \dfrac{1+\cos 2a}{2}$ ; $\sin^2 a = \dfrac{1-\cos 2a}{2}$ |
| Signal | $a\cos\omega t + b\sin\omega t = A\cos(\omega t + \varphi)$, $A = \sqrt{a^2+b^2}$, $\cos\varphi = \dfrac{a}{A}$, $\sin\varphi = -\dfrac{b}{A}$ |
| $z^2 = a$, $a<0$ | $z = \pm\,\mathrm{i}\sqrt{-a}$ |
| $z \mapsto z + b$ | translation de vecteur d'affixe $b$ |
| $z \mapsto az$ | rotation d'angle $\arg a$ et homothétie de rapport $\lvert a\rvert$ (centre $O$) |

---

## 11. Les erreurs qui coûtent des points

1. **Additionner les modules dans un produit.** Les modules se **multiplient** ;
   ce sont les **arguments** qui s'additionnent.
2. **Écrire une forme exponentielle avec $r$ négatif.** Transformer le signe en
   ajoutant $\pi$ à l'argument : $-2\,\mathrm{e}^{\mathrm{i}\theta} = 2\,\mathrm{e}^{\mathrm{i}(\theta+\pi)}$.
3. **Se tromper de signe dans la phase** : $\sin\varphi = -\dfrac{b}{A}$, à cause
   du $-\sin\varphi\sin(\omega t)$ du développement.
4. **Prendre $A = a^2 + b^2$** au lieu de $A = \sqrt{a^2+b^2}$.
5. **Inverser les linéarisations** : le $+$ va avec $\cos^2$, le $-$ avec
   $\sin^2$ — teste en $a = 0$ pour vérifier.
6. **Oublier le facteur $\dfrac{1}{2}$** en primitivant $\cos(2t)$ : une
   primitive est $\dfrac{\sin(2t)}{2}$, pas $\sin(2t)$.
7. **Ne donner qu'une solution à $z^2 = a$** : il y en a deux, opposées, dès que
   $a \neq 0$.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel « BO spécial n°8 du 25 juillet 2019 — spécialité
physique-chimie et mathématiques, classe terminale STI2D/STL »
(docs/programme-terminale-sti2d-stl-pc-maths.txt), section « Nombres complexes
(terminale) ». Extraction texte du PDF officiel education.gouv.fr, obtenue via
WebFetch — à confronter au PDF officiel avant publication.

Contenus couverts, exactement ceux listés dans l'extraction :
- e^(iθ) = cos θ + i sin θ ; forme r·e^(iθ), r > 0 (§1-2)
- passage algébrique ↔ exponentielle (§3, capacité explicite)
- formules d'addition et de duplication (§5)
- linéarisation de cos² et sin², application aux primitives (§6)
- a·cos(ωt) + b·sin(ωt) → A·cos(ωt + φ) (§7, capacité explicite)
- équations du premier degré et z² = a (§8, capacité explicite)
- interprétation géométrique de z ↦ z + b et z ↦ az ; expressions complexes
  des translations, rotations, homothéties (§9)

Articulation avec la Première (contenu/premiere-techno/pc-maths-sti2d-stl/
nombres-complexes/) : forme algébrique, conjugué, module, argument, forme
trigonométrique déjà traités là-bas — cités en prérequis, non répétés ici.
La note de Première signalait explicitement que la notation exponentielle et
les opérations sous forme trigonométrique étaient réservées à la Terminale :
c'est ce chapitre-ci qui les prend en charge (§1 et §4).

Choix de rédaction à valider par le relecteur :
- Convention de phase : le programme demande A·cos(ωt + φ) ; j'ai donc
  cos φ = a/A et sin φ = −b/A (signe moins). Beaucoup de manuels utilisent
  A·cos(ωt − φ) avec sin φ = +b/A : vérifier la cohérence avec le cours de
  physique (Fresnel) de l'établissement.
- z² = a : traité pour a RÉEL uniquement, conformément à la lettre du
  programme (« du type z² = a ») ; le cas a complexe non abordé.
- Formules d'addition présentées comme conséquences de e^(ia)·e^(ib) :
  la démonstration est esquissée, pas entièrement rédigée — le programme
  n'exige pas de démonstration ici, à confirmer.
- Notation i (pas j) conservée, comme dans la fiche de Première, avec le
  lien électricité signalé en accroche.
- La composée « rotation puis homothétie » pour z ↦ az est présentée sans
  le mot « similitude », hors programme.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
