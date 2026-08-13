---
id: tale-spe-pc-lois-newton-champs
titre: "Deuxième loi de Newton et mouvements dans un champ"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Mouvement et interactions"
duree_lecture_min: 16
prerequis:
  - Vecteurs position, vitesse et accélération (Terminale, 2.1)
  - Forces et interactions ; poids et champ de pesanteur (Première/Seconde)
  - Dérivation d'une fonction (Terminale maths)
statut: brouillon
relu_par: null
---

# Deuxième loi de Newton et mouvements dans un champ

> La cinématique décrivait le mouvement ; la dynamique l'**explique**. La deuxième loi de
> Newton fait le pont entre les **forces** subies par un système et son **accélération**. Un
> seul principe, et le même, décrit la chute d'une balle, la déviation d'un électron dans un
> écran et l'orbite de la Lune. C'est l'un des sommets du programme.

---

## 1. La deuxième loi de Newton

### Système, centre de masse, référentiel

On étudie un **système** (la balle, le satellite, l'électron). On le modélise le plus souvent
par son **centre de masse** $G$, point unique où l'on peut considérer toute la masse concentrée.
Étudier « le mouvement du système », c'est étudier le mouvement de $G$.

Un mouvement n'a de sens que dans un **référentiel** donné. La deuxième loi n'est valable que
dans un **référentiel galiléen** : un référentiel dans lequel un système isolé (soumis à aucune
force) est au repos ou en mouvement rectiligne uniforme (c'est la 1re loi, le principe d'inertie).

| Référentiel | Galiléen pour… |
|---|---|
| **Terrestre** (lié au sol) | chutes, projectiles, expériences de courte durée |
| **Géocentrique** (centre Terre, axes vers les étoiles) | satellites de la Terre, la Lune |
| **Héliocentrique** (centre Soleil, axes vers les étoiles) | planètes du système solaire |

### La loi

Dans un référentiel galiléen, la somme des forces extérieures appliquées à un système de
masse $m$ constante est égale au produit de la masse par l'accélération de son centre de masse :

$$\boxed{\sum \vec{F}_{\text{ext}} = m\,\vec{a}_G}$$

C'est une égalité **vectorielle** : elle vaut sur chaque coordonnée ($x$, $y$, $z$). Le vecteur
accélération a donc **toujours la même direction et le même sens** que la somme des forces.

> **Exemple.** Une bille de masse $m = 0{,}20$ kg n'est soumise qu'à son poids
> $\vec{P} = m\vec{g}$. La deuxième loi donne $m\vec{g} = m\vec{a}$, donc $\vec{a} = \vec{g}$ :
> l'accélération vaut $g = 9{,}81$ m·s⁻², **indépendamment de la masse**. Une plume et une
> enclume tombent de même dans le vide.

### Cas de l'équilibre

Si $\vec{a}_G = \vec{0}$ (système au repos ou en translation rectiligne uniforme), alors

$$\sum \vec{F}_{\text{ext}} = \vec{0}$$

C'est la condition d'**équilibre** (les forces se compensent). Réciproque vraie uniquement en
référentiel galiléen.

> **Exemple.** Un parachutiste à vitesse constante : son poids est exactement compensé par les
> frottements de l'air. Somme des forces nulle ⇒ accélération nulle ⇒ vitesse constante.

---

## 2. Méthode générale de résolution

Le même enchaînement résout **tous** les problèmes de dynamique du chapitre :

1. **Système** et **référentiel** (galiléen).
2. **Bilan des forces** (faire un schéma des vecteurs).
3. **Deuxième loi** : $\sum \vec{F}_{\text{ext}} = m\vec{a}$.
4. **Projection** sur les axes → composantes de $\vec{a}$.
5. **Intégration** : de $\vec{a}$ on remonte à $\vec{v}$ (une intégration), puis à la position
   $\vec{OG}$ (deuxième intégration). À chaque étape, les **constantes** sont fixées par les
   **conditions initiales** ($\vec{v}_0$ et la position à $t=0$).

> **Le sens de la dérivation.** $\vec{v} = \dfrac{\mathrm{d}\vec{OG}}{\mathrm{d}t}$ et
> $\vec{a} = \dfrac{\mathrm{d}\vec{v}}{\mathrm{d}t}$. Remonter de l'accélération à la position,
> c'est faire le chemin inverse : intégrer deux fois.

---

## 3. Chute dans un champ de pesanteur uniforme

Le champ de pesanteur $\vec{g}$ est supposé **uniforme** (même valeur partout, vertical, vers le
bas) et on **néglige les frottements** de l'air. La seule force est le poids $\vec{P} = m\vec{g}$.

Deuxième loi : $m\vec{g} = m\vec{a}$, d'où $\boxed{\vec{a} = \vec{g}}$. L'accélération est
**constante** : le mouvement est dit **uniformément accéléré**.

### Repère et conditions initiales

On lance le système depuis l'origine $O$ avec une vitesse initiale $\vec{v}_0$ faisant un angle
$\alpha$ avec l'horizontale. Axe $x$ horizontal, axe $y$ vertical **vers le haut** (alors
$g_x = 0$ et $g_y = -g$).

$$v_{0x} = v_0\cos\alpha \qquad v_{0y} = v_0\sin\alpha$$

### Équations horaires

En intégrant $\vec{a} = (0\,;\,-g)$ une fois (vitesse) puis deux fois (position) :

$$\boxed{v_x(t) = v_0\cos\alpha} \qquad \boxed{v_y(t) = -g\,t + v_0\sin\alpha}$$

$$\boxed{x(t) = (v_0\cos\alpha)\,t} \qquad \boxed{y(t) = -\tfrac{1}{2}g\,t^{2} + (v_0\sin\alpha)\,t}$$

> **Le mouvement est plan.** Aucune force ne sort du plan $(xOy)$ défini par $\vec{v}_0$ et
> $\vec{g}$ : $z(t)$ reste nul. On travaille toujours à deux dimensions.

> **Lecture physique.** Sur $x$, la vitesse est **constante** (mouvement uniforme) : rien ne
> pousse horizontalement. Sur $y$, la vitesse décroît linéairement : c'est la pesanteur qui
> freine la montée puis accélère la descente.

### Équation de la trajectoire

On élimine le temps : $t = \dfrac{x}{v_0\cos\alpha}$, que l'on reporte dans $y(t)$ :

$$\boxed{y(x) = -\frac{g}{2\,v_0^{2}\cos^{2}\alpha}\,x^{2} + (\tan\alpha)\,x}$$

C'est une fonction du second degré en $x$ : la trajectoire est une **parabole** (concavité vers
le bas car le coefficient de $x^2$ est négatif).

> **Exemple.** Un ballon lancé à $v_0 = 20$ m·s⁻¹ avec $\alpha = 30°$ ($g = 9{,}8$ m·s⁻²).
> Flèche (hauteur max) atteinte quand $v_y = 0$ : $t = \dfrac{v_0\sin\alpha}{g} = \dfrac{20\times
> 0{,}50}{9{,}8} \approx 1{,}0$ s. La portée (retour au sol, $y=0$) est atteinte au double de ce
> temps.

---

## 4. Mouvement d'une particule chargée dans un champ électrique uniforme

### Le condensateur plan

Deux plaques parallèles séparées d'une distance $d$, entre lesquelles on applique une tension
$U$, créent entre elles un champ électrique $\vec{E}$ **uniforme**, dirigé de la plaque **+** vers
la plaque **−**, de valeur

$$\boxed{E = \frac{U}{d}} \qquad (E \text{ en V·m}^{-1},\; U \text{ en V},\; d \text{ en m})$$

### Force et accélération

Une particule de charge $q$ subit la force électrique $\vec{F} = q\vec{E}$. Aux échelles
atomiques, le **poids est négligeable** devant elle. Deuxième loi :

$$q\vec{E} = m\vec{a} \quad\Longrightarrow\quad \boxed{\vec{a} = \frac{q}{m}\,\vec{E}}$$

L'accélération est **constante** : la structure est **exactement la même** qu'une chute
parabolique, avec $\dfrac{q}{m}\vec{E}$ à la place de $\vec{g}$.

> **Attention au signe de $q$.** Pour un électron, $q = -e < 0$ : la force $\vec{F} = q\vec{E}$
> est de sens **opposé** au champ $\vec{E}$. L'électron est dévié vers la plaque **positive**.

> **Exemple.** Un électron ($q = -1{,}6\times 10^{-19}$ C, $m = 9{,}1\times 10^{-31}$ kg) entre
> horizontalement dans un champ $E = 1{,}0\times 10^{4}$ V·m⁻¹. La valeur de l'accélération est
> $a = \dfrac{|q|E}{m} = \dfrac{1{,}6\times10^{-19}\times 1{,}0\times10^{4}}{9{,}1\times10^{-31}}
> \approx 1{,}8\times 10^{15}$ m·s⁻² : gigantesque devant $g$, d'où l'on néglige le poids.

La particule décrit une **parabole** entre les plaques, exactement comme un projectile. C'est le
principe de la déviation dans un oscilloscope à tube.

---

## 5. Satellites, planètes et lois de Kepler

### Mouvement circulaire uniforme

Un satellite (ou une planète) en orbite **circulaire** de rayon $r$ n'est soumis qu'à la force
d'attraction gravitationnelle, dirigée vers l'astre central (force **centripète**). Pour un
satellite de masse $m$ autour d'un astre de masse $M$ :

$$\vec{F} = \frac{G\,M\,m}{r^{2}}\,\vec{u} \quad(\text{vers le centre})$$

En mouvement circulaire uniforme, l'accélération est **centripète** de valeur $a = \dfrac{v^2}{r}$.
La deuxième loi projetée sur l'axe centripète donne $\dfrac{GMm}{r^2} = m\dfrac{v^2}{r}$, d'où

$$\boxed{v = \sqrt{\frac{G\,M}{r}}}$$

La vitesse ne dépend **pas** de la masse du satellite, seulement du rayon de l'orbite : plus
l'orbite est basse, plus le satellite va vite.

### Les trois lois de Kepler

1. **Loi des orbites** : chaque planète décrit une **ellipse** dont le Soleil occupe un foyer.
2. **Loi des aires** : le segment astre–planète balaie des aires égales en des durées égales
   (la planète va plus vite au périhélie).
3. **Loi des périodes** : le rapport du carré de la période $T$ au cube du demi-grand axe $a$ est
   le **même pour tous** les astres orbitant autour du même corps central :

$$\boxed{\frac{T^{2}}{a^{3}} = \frac{4\pi^{2}}{G\,M} = \text{constante}}$$

### Démonstration de la 3e loi (cas circulaire, exigible)

En orbite circulaire, $a = r$ et $v = \dfrac{2\pi r}{T}$ (un tour de circonférence en une
période). On reporte dans $v = \sqrt{GM/r}$ :

$$\frac{2\pi r}{T} = \sqrt{\frac{GM}{r}} \;\Longrightarrow\; \frac{4\pi^{2}r^{2}}{T^{2}} =
\frac{GM}{r} \;\Longrightarrow\; \frac{T^{2}}{r^{3}} = \frac{4\pi^{2}}{GM}$$

Le membre de droite ne dépend que de l'astre central $M$ : c'est bien une constante.

> **Exemple.** La constante $T^2/a^3$ est la même pour toutes les planètes du système solaire.
> Connaissant $T$ et $a$ de la Terre, on en déduit ceux de n'importe quelle autre planète.

### Le satellite géostationnaire

Un satellite **géostationnaire** paraît **immobile** au-dessus d'un point de l'équateur. Trois
conditions :

- période $T = 23$ h $56$ min $\approx 86\,164$ s (période de rotation de la Terre, **jour
  sidéral**, pas 24 h) ;
- orbite dans le **plan équatorial** ;
- sens de rotation **identique** à celui de la Terre.

On en tire son altitude par la 3e loi : $r = \left(\dfrac{GM\,T^2}{4\pi^2}\right)^{1/3}
\approx 4{,}2\times 10^{4}$ km depuis le centre, soit une **altitude** $h = r - R_T \approx
3{,}6\times 10^{4}$ km (environ $36\,000$ km).

---

## 6. Tableau récapitulatif

| Notion | Relation clé | Unités |
|---|---|---|
| Deuxième loi de Newton | $\sum \vec{F}_{\text{ext}} = m\vec{a}$ | N, kg, m·s⁻² |
| Équilibre | $\sum \vec{F}_{\text{ext}} = \vec{0}$ | — |
| Chute libre | $\vec{a} = \vec{g}$ | $g \approx 9{,}81$ m·s⁻² |
| Trajectoire (projectile) | $y = -\dfrac{g}{2v_0^2\cos^2\alpha}x^2 + x\tan\alpha$ | parabole |
| Champ du condensateur | $E = \dfrac{U}{d}$ | V·m⁻¹ |
| Particule chargée | $\vec{a} = \dfrac{q}{m}\vec{E}$ | C, kg |
| Vitesse orbitale | $v = \sqrt{\dfrac{GM}{r}}$ | m·s⁻¹ |
| 3e loi de Kepler | $\dfrac{T^2}{a^3} = \dfrac{4\pi^2}{GM}$ | s², m³ |
| Constante de gravitation | $G = 6{,}67\times 10^{-11}$ | N·m²·kg⁻² |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre masse et poids.** La masse (kg) est intrinsèque ; le poids $P = mg$ (N) est une
   force. Dans $\sum\vec{F} = m\vec{a}$, le $m$ est la masse, pas le poids.
2. **Faire dépendre l'accélération de chute de la masse.** En chute libre $\vec{a} = \vec{g}$ :
   la masse se simplifie. Tous les corps tombent de la même façon dans le vide.
3. **Oublier le signe de la charge.** Pour un électron $q = -e < 0$ : $\vec{F} = q\vec{E}$ est
   **opposée** à $\vec{E}$. Ne pas recopier mécaniquement le sens du champ.
4. **Négliger la mauvaise force.** Pour une particule chargée, on néglige le **poids** (pas la
   force électrique). Pour un projectile macroscopique, l'inverse n'a aucun sens.
5. **Utiliser $T = 24$ h pour le géostationnaire.** La bonne période est le **jour sidéral**
   ($\approx 23$ h $56$ min), pas le jour solaire de 24 h.
6. **Mélanger rayon d'orbite et altitude.** Dans les formules, $r$ est mesuré depuis le
   **centre** de l'astre : $r = R_T + h$. L'altitude $h$ seule donne un résultat faux.
7. **Oublier de convertir.** $U$ en volts, $d$ en mètres (pas en cm) pour $E = U/d$ ; périodes
   en secondes, distances en mètres dans Kepler avant tout calcul.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de terminale générale (spécialité),
BO spécial n°8 du 25 juillet 2019 (education.gouv.fr, arrêté MENE1921249A).
Extrait via le fichier docs/programme-terminale-physique-chimie-2019.txt, section
« 2.2 Deuxième loi de Newton et mouvements dans un champ » (lignes 113-122) :
- Notions : deuxième loi de Newton, centre de masse, référentiel galiléen, équilibre ;
  mouvement dans un champ de pesanteur uniforme ; champ électrique d'un condensateur plan
  et mouvement d'une particule chargée ; mouvement des satellites et planètes, orbite,
  lois de Kepler, satellite géostationnaire.
- Capacités exigibles : utiliser la 2e loi pour déduire a (et réciproquement) ; montrer que
  le mouvement dans un champ uniforme est plan, établir/exploiter les équations horaires,
  établir l'équation de la trajectoire ; établir et exploiter la 3e loi de Kepler dans le
  cas du mouvement circulaire.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La démonstration de la 3e loi de Kepler n'est exigible QUE dans le cas circulaire : la
  fiche ne démontre pas le cas elliptique (les 1re et 2e lois sont énoncées, pas démontrées).
  À confirmer conforme.
- Le programme parle de « champ de pesanteur uniforme » : j'ai supposé les frottements
  négligés (chute libre). C'est la convention du programme mais à valider.
- Valeurs numériques utilisées : g = 9,81 m·s⁻², G = 6,67e-11, masse/charge de l'électron,
  altitude géostationnaire ≈ 36 000 km, jour sidéral ≈ 86 164 s. À revérifier au CRC/formulaire
  officiel avant publication.
- Vérifier que la notation « a » pour le demi-grand axe (Kepler) et « a » pour l'accélération
  ne prête pas à confusion pour l'élève : dans la fiche, a = r en circulaire, précisé.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
