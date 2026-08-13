---
id: tale-spe-pc-decrire-mouvement
titre: "Décrire un mouvement"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Mouvement et interactions"
duree_lecture_min: 15
prerequis:
  - Vecteurs et coordonnées (Seconde)
  - Vitesse moyenne et référentiel (Seconde)
  - Dérivée d'une fonction (Maths, Première)
statut: brouillon
relu_par: null
---

# Décrire un mouvement

> En Seconde, tu calculais une vitesse **moyenne** entre deux positions. En Terminale, on
> passe à la vitesse **instantanée** : celle du compteur, à un instant précis. L'outil pour
> cela, c'est la **dérivée**. Décrire un mouvement, ce sera manipuler trois vecteurs qui se
> déduisent l'un de l'autre par dérivation : **position → vitesse → accélération**.

Tout ce qui suit est écrit dans un **référentiel** donné, muni d'un **repère**
$(\mathrm{O}, \vec{\imath}, \vec{\jmath}, \vec{k})$. Un mouvement n'a de sens que par
rapport à un référentiel : il faut toujours le préciser.

---

## 1. Le vecteur position

### Définition

La position d'un point $\mathrm{M}$ à l'instant $t$ est donnée par le **vecteur position**
$\vec{\mathrm{OM}}(t)$, qui va de l'origine $\mathrm{O}$ du repère jusqu'au point $\mathrm{M}$.

En coordonnées cartésiennes, à deux dimensions :

$$\boxed{\vec{\mathrm{OM}}(t) = x(t)\,\vec{\imath} + y(t)\,\vec{\jmath}}$$

Les fonctions $x(t)$ et $y(t)$ sont les **équations horaires** du mouvement. Elles
s'expriment en **mètres (m)**. Éliminer $t$ entre elles donne l'**équation de la
trajectoire** (une relation entre $x$ et $y$, sans le temps).

> **Exemple.** Un mobile a pour équations horaires $x(t) = 2t$ et $y(t) = 3$ (en mètres, $t$
> en secondes). Sa trajectoire est la droite d'équation $y = 3$ : il avance horizontalement.

### Distance à l'origine

La norme $\lVert \vec{\mathrm{OM}} \rVert = \sqrt{x^2 + y^2}$ donne la distance entre
$\mathrm{M}$ et l'origine, en mètres.

---

## 2. Le vecteur vitesse

### Définition : dérivée du vecteur position

Le **vecteur vitesse** est la **dérivée du vecteur position par rapport au temps** :

$$\boxed{\vec{v}(t) = \frac{\mathrm{d}\vec{\mathrm{OM}}}{\mathrm{d}t}}$$

Concrètement, on dérive **chaque coordonnée** :

$$v_x = \frac{\mathrm{d}x}{\mathrm{d}t} = \dot{x}
\qquad
v_y = \frac{\mathrm{d}y}{\mathrm{d}t} = \dot{y}$$

Le vecteur vitesse s'exprime en **mètres par seconde (m·s⁻¹)**. Le point au-dessus de la
lettre ($\dot{x}$) est une notation courante pour « dérivée par rapport au temps ».

> **Exemple.** Si $x(t) = 2t$ et $y(t) = 3$, alors $v_x = 2$ et $v_y = 0$ :
> $\vec{v} = 2\,\vec{\imath}$. Le mobile va à $2$ m·s⁻¹ dans la direction de $\vec{\imath}$.

### Direction : toujours tangente à la trajectoire

Propriété essentielle : **le vecteur vitesse est toujours tangent à la trajectoire** et
orienté dans le sens du mouvement. C'est ce qui permet, sur un enregistrement, de tracer
$\vec{v}$ « le long » du chemin suivi.

Sa norme, la **vitesse** (ou célérité) $v = \lVert \vec{v} \rVert = \sqrt{v_x^2 + v_y^2}$,
est un scalaire positif en m·s⁻¹.

### En pratique, sur un enregistrement de points

Quand on ne dispose que de positions relevées à intervalle de temps $\tau$ régulier, on
**approche** la dérivée par un taux de variation entre les points **encadrant** l'instant
étudié :

$$v_i \approx \frac{M_{i-1}M_{i+1}}{2\tau}$$

> ⚠️ On utilise les points $M_{i-1}$ et $M_{i+1}$ (**avant et après**), pas $M_i$ et
> $M_{i+1}$. Encadrer le point donne une bien meilleure estimation de la vitesse instantanée.

---

## 3. Le vecteur accélération

### Définition : dérivée du vecteur vitesse

Le **vecteur accélération** est la **dérivée du vecteur vitesse par rapport au temps** —
donc la dérivée **seconde** du vecteur position :

$$\boxed{\vec{a}(t) = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t}
= \frac{\mathrm{d}^2\vec{\mathrm{OM}}}{\mathrm{d}t^2}}$$

Coordonnée par coordonnée :

$$a_x = \frac{\mathrm{d}v_x}{\mathrm{d}t} = \dot{v}_x = \ddot{x}
\qquad
a_y = \frac{\mathrm{d}v_y}{\mathrm{d}t} = \dot{v}_y = \ddot{y}$$

L'accélération s'exprime en **mètres par seconde au carré (m·s⁻²)**.

> **Exemple.** Une bille en chute libre a $v_y(t) = -9{,}8\,t$. Alors
> $a_y = \dfrac{\mathrm{d}v_y}{\mathrm{d}t} = -9{,}8$ m·s⁻² : accélération constante,
> dirigée vers le bas.

### Ce que signale l'accélération

L'accélération traduit **toute variation du vecteur vitesse** — en **norme** (on accélère
ou on freine) **ou en direction** (on tourne). Un mouvement peut donc être accéléré même à
vitesse constante en valeur, s'il change de direction : c'est le cas du mouvement circulaire.

> ⚠️ « Vitesse constante » ne veut pas dire « accélération nulle ». L'accélération n'est
> nulle **que** si le vecteur vitesse est constant **en norme ET en direction**.

---

## 4. Méthode : des coordonnées à tout le reste

Face à des équations horaires $x(t)$ et $y(t)$, la démarche est toujours la même :

1. **Écrire** le vecteur position $\vec{\mathrm{OM}} = x(t)\,\vec{\imath} + y(t)\,\vec{\jmath}$.
2. **Dériver** chaque coordonnée pour obtenir $\vec{v}$ : $v_x = \dot{x}$, $v_y = \dot{y}$.
3. **Dériver encore** pour obtenir $\vec{a}$ : $a_x = \dot{v}_x$, $a_y = \dot{v}_y$.
4. **Calculer les normes** si besoin : $v = \sqrt{v_x^2 + v_y^2}$, etc.

> **Exemple complet.** $x(t) = 3t$ et $y(t) = 5t - t^2$ (SI).
> $\vec{v} : v_x = 3,\ v_y = 5 - 2t$. $\vec{a} : a_x = 0,\ a_y = -2$.
> L'accélération est constante : $\vec{a} = -2\,\vec{\jmath}$ (m·s⁻²).

---

## 5. Le repère de Frenet (mouvement circulaire)

Pour un mouvement **circulaire** de rayon $R$, le repère cartésien est peu commode. On lui
préfère le **repère de Frenet**, attaché au point mobile $\mathrm{M}$ et composé de deux
vecteurs unitaires :

| Vecteur | Direction | Sens |
|---|---|---|
| $\vec{u_t}$ | **tangent** à la trajectoire | sens du mouvement |
| $\vec{u_n}$ | **normal** (perpendiculaire) | vers le **centre** du cercle |

Dans ce repère, la vitesse n'a **qu'une composante tangentielle** (puisque $\vec{v}$ est
tangent) :

$$\vec{v} = v\,\vec{u_t}$$

Et l'accélération se décompose en deux termes, l'un tangentiel, l'autre normal :

$$\boxed{\vec{a} = \underbrace{\frac{\mathrm{d}v}{\mathrm{d}t}}_{a_t}\,\vec{u_t}
\;+\; \underbrace{\frac{v^2}{R}}_{a_n}\,\vec{u_n}}$$

| Composante | Expression | Ce qu'elle traduit |
|---|---|---|
| Tangentielle $a_t$ | $\dfrac{\mathrm{d}v}{\mathrm{d}t}$ | la variation de la **valeur** de la vitesse |
| Normale $a_n$ | $\dfrac{v^2}{R}$ | le **changement de direction** (courbure) |

> **Ce qu'il faut comprendre** : la composante normale $a_n = \dfrac{v^2}{R}$ est **toujours
> présente** dès qu'on tourne, et **toujours dirigée vers le centre**. Elle ne peut pas être
> nulle sur une trajectoire courbe. La composante tangentielle, elle, n'existe que si la
> **valeur** de la vitesse change.

> ⚠️ Dans $a_n = \dfrac{v^2}{R}$, la vitesse est **au carré** et $R$ est au **dénominateur** :
> plus on va vite ou plus le virage est serré (petit $R$), plus l'accélération normale est
> grande. C'est pourquoi un virage serré à grande vitesse « plaque » dans le siège.

---

## 6. Caractériser un mouvement par son accélération

Le programme demande de **caractériser le vecteur accélération** pour trois mouvements types.

### Mouvement rectiligne uniforme

Trajectoire **droite**, vitesse **constante en norme et en direction**.

$$\vec{v} = \text{constant} \qquad \Longrightarrow \qquad \boxed{\vec{a} = \vec{0}}$$

> **Exemple.** Un palet glissant sans frottement en ligne droite à vitesse fixe :
> aucune accélération.

### Mouvement rectiligne uniformément accéléré

Trajectoire **droite**, mais la **valeur** de la vitesse varie de façon régulière.

$$\boxed{\vec{a} = \text{constant, colinéaire à } \vec{v}}$$

L'accélération est **portée par la trajectoire** (composante normale nulle, puisque $R$ est
infini sur une droite). Elle est dans le sens de $\vec{v}$ si le mobile **accélère**, en
sens opposé s'il **freine**.

> **Exemple.** Une bille en chute libre verticale : $\vec{a} = \vec{g}$, constante, dirigée
> vers le bas, colinéaire à la vitesse.

### Mouvement circulaire uniforme

Trajectoire **cercle** de rayon $R$, vitesse **constante en valeur** ($v = $ cte).

La composante tangentielle est **nulle** ($\frac{\mathrm{d}v}{\mathrm{d}t} = 0$), il ne
reste que la composante normale :

$$\boxed{\vec{a} = \frac{v^2}{R}\,\vec{u_n}}$$

L'accélération est **centripète** : constante en **norme** ($a = \frac{v^2}{R}$), mais elle
**change sans cesse de direction** puisqu'elle pointe toujours vers le centre. On relie aussi
la vitesse à la période $T$ (durée d'un tour) : $v = \dfrac{2\pi R}{T}$.

> **Exemple.** Un satellite en orbite circulaire garde une vitesse constante en valeur, mais
> subit en permanence une accélération dirigée vers la Terre : c'est elle qui le fait
> « tourner » au lieu de filer tout droit.

> ⚠️ Dans un mouvement circulaire **uniforme**, la vitesse est constante en **valeur** mais
> le vecteur $\vec{v}$, lui, **change** (sa direction tourne). D'où une accélération non
> nulle. C'est le piège classique.

---

## 7. Tableau récapitulatif

| Grandeur | Définition | Formule | Unité |
|---|---|---|---|
| Position | vecteur $\mathrm{O} \to \mathrm{M}$ | $\vec{\mathrm{OM}} = x\vec{\imath} + y\vec{\jmath}$ | m |
| Vitesse | dérivée de la position | $\vec{v} = \dfrac{\mathrm{d}\vec{\mathrm{OM}}}{\mathrm{d}t}$, $v_x = \dot{x}$ | m·s⁻¹ |
| Accélération | dérivée de la vitesse | $\vec{a} = \dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$, $a_x = \ddot{x}$ | m·s⁻² |
| Frenet | $\vec{a} = a_t\,\vec{u_t} + a_n\,\vec{u_n}$ | $a_t = \dfrac{\mathrm{d}v}{\mathrm{d}t}$, $a_n = \dfrac{v^2}{R}$ | m·s⁻² |

| Mouvement | Vecteur accélération |
|---|---|
| Rectiligne uniforme | $\vec{a} = \vec{0}$ |
| Rectiligne uniformément accéléré | $\vec{a}$ constant, colinéaire à $\vec{v}$ |
| Circulaire uniforme | $\vec{a} = \dfrac{v^2}{R}\,\vec{u_n}$ (centripète) |

---

## 8. Les erreurs qui coûtent des points

1. **Confondre vitesse moyenne et vitesse instantanée.** La vitesse instantanée est une
   **dérivée** ; la moyenne, un rapport distance/durée entre deux points.
2. **Croire que « vitesse constante en valeur » implique $\vec{a} = \vec{0}$.** Faux en
   circulaire : la direction de $\vec{v}$ change, donc $\vec{a} \neq \vec{0}$.
3. **Oublier le carré dans $a_n = \dfrac{v^2}{R}$**, ou mettre $R$ au numérateur. C'est
   $v$ **au carré**, divisé par $R$.
4. **Diriger l'accélération centripète vers l'extérieur.** $\vec{u_n}$ pointe vers le
   **centre** : l'accélération d'un mouvement circulaire uniforme est **centripète**.
5. **Prendre $M_i M_{i+1}$ au lieu de $M_{i-1} M_{i+1}$** pour estimer la vitesse : il faut
   **encadrer** le point et diviser par $2\tau$.
6. **Négliger les unités.** Position en m, vitesse en m·s⁻¹, accélération en m·s⁻². Une
   accélération en « m·s⁻¹ » signale une dérivation oubliée.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, classe
terminale générale — arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-physique-chimie-2019.txt, thème 2 « Mouvement et interactions »,
section « 2.1 Décrire un mouvement », lignes 103-111).
Page BO : https://www.education.gouv.fr/bo/19/Special8/MENE1921249A.htm
PDF officiel : https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction via WebFetch depuis le PDF officiel, à confronter au PDF avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Notations : le programme utilise-t-il $\vec{u_t}/\vec{u_n}$ ou $\vec{\tau}/\vec{n}$ pour le
  repère de Frenet ? J'ai retenu $\vec{u_t}, \vec{u_n}$ (usage manuel le plus fréquent).
- Le rayon de courbure est ici noté $R$ (rayon du cercle en circulaire) ; vérifier qu'on ne
  demande pas la notion générale de rayon de courbure hors trajectoire circulaire.
- L'estimation numérique de la vitesse par M_{i-1}M_{i+1}/(2τ) relève de la démarche
  expérimentale : confirmer qu'elle est bien attendue à ce niveau (elle l'est en pratique).
- La relation v = 2πR/T (circulaire uniforme) est ajoutée comme lien utile ; vérifier
  qu'elle n'excède pas le périmètre de 2.1 (vitesse angulaire ω non introduite ici,
  volontairement, car non listée dans les capacités exigibles de 2.1).
- g pris à 9,8 m·s⁻² dans les exemples ; harmoniser avec la valeur retenue par le relecteur.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
