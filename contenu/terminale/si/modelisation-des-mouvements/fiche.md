---
id: tale-si-modelisation-des-mouvements
titre: "Modélisation des mouvements"
voie: generale
niveau: terminale
parcours: si
matiere: si
programme: "Terminale — spécialité Sciences de l'ingénieur (programme officiel)"
duree_lecture_min: 14
prerequis:
  - Vecteurs et repères (Seconde / Première SI)
  - Dérivation (Première)
  - Forces et principe d'inertie (Physique)
statut: brouillon
relu_par: null
---

# Modélisation des mouvements

> Modéliser le mouvement d'un solide, c'est décrire **comment il se déplace**
> (cinématique : position, vitesse, accélération) puis **pourquoi** il se déplace
> ainsi (dynamique : les actions mécaniques). L'ingénieur s'en sert pour
> dimensionner un moteur, prévoir un temps de cycle, garantir la sécurité d'un
> mécanisme.

---

# 1. Repérer un solide : les liaisons

Un solide libre dans l'espace possède **6 degrés de liberté** : 3 translations
(selon $x$, $y$, $z$) et 3 rotations (autour de $x$, $y$, $z$). Une **liaison
mécanique** supprime certains de ces degrés.

- **Liaison pivot** : ne laisse qu'**une rotation** (ex. une porte, un arbre dans
  ses paliers).
- **Liaison glissière** : ne laisse qu'**une translation** (ex. un tiroir).
- **Liaison encastrement** : supprime **tous** les degrés de liberté (les deux
  pièces sont solidaires).

Le nombre de degrés de liberté d'un mécanisme conditionne son **mouvement
possible**.

---

# 2. Cinématique : décrire le mouvement

## Position, vitesse, accélération

Pour un point $M$ repéré par son abscisse $x(t)$ le long de sa trajectoire :

- **vitesse** : $v(t) = \dfrac{\mathrm{d}x}{\mathrm{d}t}$ (dérivée de la position),
- **accélération** : $a(t) = \dfrac{\mathrm{d}v}{\mathrm{d}t}$ (dérivée de la
  vitesse).

Unités (SI) : position en mètres ($\mathrm{m}$), vitesse en $\mathrm{m\cdot
s^{-1}}$, accélération en $\mathrm{m\cdot s^{-2}}$.

## Mouvement rectiligne uniforme (MRU)

Vitesse **constante**, accélération nulle : $x(t) = v\,t + x_0$.

## Mouvement rectiligne uniformément varié (MRUV)

Accélération $a$ **constante** :
$$v(t) = a\,t + v_0, \qquad x(t) = \tfrac{1}{2}a\,t^2 + v_0\,t + x_0.$$

**Exemple de calcul.** Un chariot part du repos ($v_0 = 0$) avec
$a = 2\ \mathrm{m\cdot s^{-2}}$. Au bout de $t = 3\ \mathrm{s}$ :
$$v = 2 \times 3 = 6\ \mathrm{m\cdot s^{-1}}, \qquad
x = \tfrac{1}{2}\times 2 \times 3^2 = 9\ \mathrm{m}.$$

---

# 3. Mouvement de rotation

Pour un solide en rotation autour d'un axe fixe, on repère un **angle** $\theta$
(en radians).

- **Vitesse angulaire** : $\omega = \dfrac{\mathrm{d}\theta}{\mathrm{d}t}$ en
  $\mathrm{rad\cdot s^{-1}}$.
- **Accélération angulaire** : $\dot\omega = \dfrac{\mathrm{d}\omega}{\mathrm{d}t}$
  en $\mathrm{rad\cdot s^{-2}}$.

Lien vitesse linéaire / vitesse angulaire pour un point situé à la distance $R$
de l'axe :
$$v = R\,\omega.$$

Passage tours/minute → rad/s : $\omega\,(\mathrm{rad/s}) = N\,(\mathrm{tr/min})
\times \dfrac{2\pi}{60}$.

**Exemple.** Une roue de rayon $R = 0{,}3\ \mathrm{m}$ tourne à
$\omega = 10\ \mathrm{rad\cdot s^{-1}}$. La vitesse d'un point de la jante vaut
$v = 0{,}3 \times 10 = 3\ \mathrm{m\cdot s^{-1}}$.

---

# 4. Dynamique : le principe fondamental (PFD)

Le **principe fondamental de la dynamique** relie la somme des forces à
l'accélération du centre d'inertie :
$$\sum \vec{F} = m\,\vec{a}.$$

- $m$ : masse en kilogrammes ($\mathrm{kg}$),
- $\vec a$ : accélération en $\mathrm{m\cdot s^{-2}}$,
- $\vec F$ : force en newtons ($\mathrm{N}$), avec $1\ \mathrm{N} = 1\
  \mathrm{kg\cdot m\cdot s^{-2}}$.

**Cas particulier — équilibre** : si le solide est immobile ou en MRU,
$\vec a = \vec 0$ donc $\sum \vec F = \vec 0$ : les forces se compensent.

**Exemple de calcul.** Un objet de masse $m = 5\ \mathrm{kg}$ subit une force
résultante de $20\ \mathrm{N}$. Son accélération vaut
$a = \dfrac{F}{m} = \dfrac{20}{5} = 4\ \mathrm{m\cdot s^{-2}}$.

Pour la rotation, l'analogue du PFD fait intervenir le **moment** d'une force
$\mathcal{M} = F \times d$ (bras de levier $d$) et le **moment d'inertie** $J$ :
$\sum \mathcal{M} = J\,\dot\omega$.

---

# 5. Bilan des actions mécaniques

Avant tout calcul, on **isole** le solide et on liste les forces qui s'exercent
sur lui :

- le **poids** $P = m\,g$ (avec $g \approx 9{,}81\ \mathrm{m\cdot s^{-2}}$),
  vertical, vers le bas ;
- les **actions de contact** (réaction du support, tension d'un câble, poussée…) ;
- les **frottements**, qui s'opposent toujours au mouvement.

**Exemple.** Un solide de masse $m = 2\ \mathrm{kg}$ a un poids
$P = 2 \times 9{,}81 = 19{,}62\ \mathrm{N}$.

---

# Ce qu'il faut retenir

- Un solide libre a **6 degrés de liberté** ; une liaison en supprime (pivot = 1
  rotation, glissière = 1 translation, encastrement = 0).
- **Cinématique** : $v$ est la dérivée de $x$, $a$ la dérivée de $v$.
- **MRUV** : $v = a t + v_0$ et $x = \tfrac12 a t^2 + v_0 t + x_0$.
- **Rotation** : $v = R\omega$, avec $\omega$ en rad/s.
- **PFD** : $\sum \vec F = m\,\vec a$ ; à l'équilibre, $\sum \vec F = \vec 0$.
- **Poids** : $P = m g$ avec $g \approx 9{,}81\ \mathrm{m\cdot s^{-2}}$.

# Les erreurs à éviter

- Confondre **vitesse** et **accélération** : l'accélération est la variation de
  la vitesse, pas la vitesse elle-même.
- Oublier de convertir les tr/min en rad/s avant d'appliquer $v = R\omega$.
- Confondre masse (kg) et poids (N) : le poids est une force, $P = mg$.
- Utiliser $x = v t$ (MRU) alors que l'accélération n'est pas nulle : il faut la
  formule du MRUV.
