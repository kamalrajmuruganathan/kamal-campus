---
id: tale-techno-math-activites-geometriques-std2a
titre: "Activités géométriques (STD2A) — coniques et perspective centrale"
voie: technologique
niveau: terminale-techno
parcours: maths
matiere: mathematiques
programme: "BO du 2 avril 2026 — mathématiques, terminale technologique (STD2A), applicable rentrée 2027"
duree_lecture_min: 15
prerequis:
  - Théorème de Pythagore et cercle (collège)
  - Trigonométrie dans le triangle rectangle (Seconde)
  - Solides usuels et vocabulaire de l'espace (Seconde)
statut: brouillon
relu_par: null
---

# Activités géométriques (STD2A) — coniques et perspective centrale

> Coupe un abat-jour conique par un plan : selon l'inclinaison, tu obtiens un
> cercle, une ellipse, une parabole ou une hyperbole — les courbes qui dessinent
> arches, galbes d'objets et taches de lumière. Puis retourne le problème :
> comment **représenter** sur une feuille plate ce que l'œil voit en volume ?
> C'est la perspective centrale, l'outil des dessinateurs depuis la Renaissance.

⚠️ **Chapitre réservé à la série STD2A (sciences et technologies du design et
des arts appliqués).** Dans les autres séries technologiques, il est remplacé
par le chapitre « Algorithmique et programmation ».

---

## 1. Le cône de révolution : le vocabulaire

Un **cône de révolution** est la surface engendrée par une droite (une
**génératrice**) qui tourne autour d'une droite fixe (l'**axe**) qu'elle coupe
en un point $S$, le **sommet**. À visualiser : deux cornets de glace infinis,
pointe contre pointe — le cône complet a **deux nappes**, comme un sablier.
Essentiel pour la suite : certaines sections traversent les deux nappes.

- Les **génératrices** : toutes les droites passant par $S$ et s'appuyant sur le
  cône — les « bords » rectilignes d'un cône dessiné de profil.
- Le **demi-angle au sommet** $\alpha$ : l'angle entre l'axe et une génératrice
  ($0° < \alpha < 90°$) — l'« ouverture » du cône, effilé ou évasé.

> **Exemple.** Le faisceau d'une lampe torche est un cône de révolution : le
> sommet est (presque) l'ampoule, l'axe est la direction de visée, $\alpha$ le
> demi-angle d'ouverture. Le mur éclairé jouera le rôle du **plan de coupe** :
> la tache de lumière est une **section plane du cône**.

---

## 2. Sections planes d'un cône : la famille des coniques

On coupe le cône (les deux nappes) par un plan **ne passant pas par le
sommet** : la courbe obtenue est une **conique**. Sa nature ne dépend que de
l'inclinaison du plan — on compare l'angle $\beta$ entre le **plan de coupe et
l'axe** au demi-angle au sommet $\alpha$ :

$$\boxed{\begin{array}{ll}
\beta = 90° & \text{cercle} \\
\alpha < \beta < 90° & \text{ellipse} \\
\beta = \alpha & \text{parabole} \\
0° \le \beta < \alpha & \text{hyperbole}
\end{array}}$$

Traduction visuelle, avec la lampe torche face à un mur :

- **Cercle** ($\beta = 90°$) : plan **perpendiculaire à l'axe** — la lampe vise
  le mur bien en face. Tache ronde.
- **Ellipse** ($\alpha < \beta < 90°$) : plan **incliné, mais coupant toutes les
  génératrices** d'une même nappe — la lampe pique légèrement vers le bas. La
  tache s'allonge en un ovale **fermé**.
- **Parabole** ($\beta = \alpha$) : plan **parallèle à une génératrice et une
  seule** — le bord du faisceau devient parallèle au mur. La tache **s'ouvre** :
  une courbe en U infinie, qui ne se referme jamais.
- **Hyperbole** ($\beta < \alpha$) : plan si redressé qu'il **coupe les deux
  nappes** (cas limite : plan parallèle à l'axe). **Deux branches** séparées.

Repère pratique : cercle et ellipse sont **fermées**, parabole et hyperbole
**ouvertes**, à branches infinies.

> **Exemple.** Une applique murale conique éclaire vers le haut et le bas. Le
> mur est **parallèle à l'axe** du cône de lumière ($\beta = 0° < \alpha$) : les
> deux taches, au-dessus et au-dessous, dessinent les **deux branches d'une
> hyperbole**.

**Cas dégénérés** (plan passant par le sommet) : plus de conique, mais un
**point**, **une génératrice** (plan tangent au cône) ou **deux droites
sécantes** en $S$, selon les mêmes comparaisons d'angles.

---

## 3. Portrait de chaque conique — le vocabulaire du dessinateur

**Le cercle** : un **centre** $O$, un **rayon** $r$, une infinité d'axes de
symétrie (tous les diamètres).

**L'ellipse** : une courbe fermée, un cercle « aplati » dans une direction. Un
**centre** de symétrie $O$ ; un **grand axe** $2a$ et un **petit axe** $2b$
($a > b$), perpendiculaires en $O$ — ses deux seuls axes de symétrie ; **quatre
sommets**, extrémités des axes. Elle s'inscrit exactement dans un **rectangle
encadrant** $2a \times 2b$, point de départ de tout tracé en dessin technique.

⚠️ Une ellipse n'est **pas** une forme d'œuf : ses deux moitiés de part et
d'autre du petit axe sont symétriques — jamais plus pointue d'un côté.

**La parabole** : une courbe ouverte en U. Un **sommet** (le point le plus
« creux »), un **axe de symétrie** unique passant par le sommet, deux branches
infinies de plus en plus « droites » mais jamais rectilignes.

**L'hyperbole** : **deux branches** disjointes, symétriques par rapport à un
**centre** $O$ situé entre elles ; chaque branche a un **sommet** (son point le
plus proche de $O$) ; deux **asymptotes**, droites sécantes en $O$ dont les
branches se rapprochent indéfiniment **sans jamais les toucher**. Loin du
centre, l'hyperbole est indiscernable de ses asymptotes — le guide de tracé du
dessinateur.

> **Exemple.** Sur la tache hyperbolique de l'applique murale, les asymptotes
> sont les bords du faisceau prolongés : tu traces d'abord ces deux droites en
> croix, puis tu « habilles » chaque secteur d'une branche qui les frôle.

---

## 4. Tangente à une conique

### Définition

Une droite est **tangente** à une conique en un point $M$ quand elle **touche la
courbe en $M$ sans la traverser** : au voisinage de $M$, la courbe reste d'un
même côté de la droite. C'est la **position limite** d'une sécante $(MN)$ quand
$N$ glisse sur la courbe jusqu'à se confondre avec $M$ : courbe et tangente ont,
en $M$, **la même direction** — celle du crayon à l'instant où il passe en $M$.

### La tangente au cercle (le cas à connaître par cœur)

$$\boxed{\text{La tangente au cercle de centre } O \text{ en } M \text{ est la perpendiculaire en } M \text{ au rayon } [OM].}$$

> **Exemple.** Cercle de centre $O$, rayon $5$ cm, point $A$ tel que $OA = 13$
> cm. Une tangente issue de $A$ touche le cercle en $T$ : le triangle $OTA$ est
> rectangle en $T$, donc $AT = \sqrt{OA^2 - OT^2} = \sqrt{169 - 25} = 12$ cm.
> La tangente transforme un problème de cercle en triangle rectangle.

### Tangentes et tracé des coniques

- **Ellipse** : aux quatre sommets, les tangentes sont parallèles aux axes — ce
  sont les quatre côtés du **rectangle encadrant**, le contrôle de qualité d'un
  tracé à main levée.
- **Parabole** : au sommet, tangente **perpendiculaire à l'axe de symétrie**.
- **Hyperbole** : au sommet de chaque branche, tangente perpendiculaire à l'axe
  des deux sommets. ⚠️ Les **asymptotes ne sont pas des tangentes** : elles ne
  touchent la courbe en aucun point.

⚠️ **Le piège de la définition.** « Tangente = droite qui coupe la courbe en un
seul point » est **faux** : une droite parallèle à l'axe d'une parabole coupe la
parabole en **un seul point** … en la **traversant** (elle entre dans le U et
n'en ressort pas). C'est une sécante. Le bon critère est *toucher sans
traverser*, pas *compter les points*.

---

## 5. La perspective centrale

On fixe un point de vue $O$ (**l'œil**) et un plan vertical $\mathcal{T}$
(**le plan du tableau**) : la feuille. L'**image** d'un point $M$ de l'espace
est le point $m$ où la droite $(OM)$ — le rayon visuel — perce le tableau. Deux
éléments structurent tout le dessin : la **ligne d'horizon**, droite horizontale
du tableau située **à la hauteur de l'œil**, et le **point de fuite principal**
$F$, point de la ligne d'horizon situé **exactement en face de l'œil**.

### Les trois règles des droites

**Règle 1 — Les alignements sont conservés.** L'image d'une droite est une
droite ; des points alignés ont des images alignées. Un dessin en perspective
se construit donc à la règle.

**Règle 2 — Les frontales gardent leur direction.** Une droite **parallèle au
tableau** (« frontale ») a pour image une droite parallèle à elle, et deux
frontales parallèles restent parallèles : les verticales d'un immeuble restent
verticales.

**Règle 3 — Les autres parallèles fuient vers un point.** Des droites parallèles
entre elles mais **non parallèles au tableau** ont des images **concourantes**
en un même point, leur **point de fuite**.

$$\boxed{\text{Un faisceau de parallèles (non frontales)} \longrightarrow \text{des droites concourantes en un point de fuite}}$$

Parallèles **horizontales** : point de fuite **sur la ligne d'horizon** ;
parallèles **perpendiculaires au tableau** : point de fuite principal $F$.

> **Exemple (la voie ferrée).** Les rails, parallèles, horizontaux,
> perpendiculaires au tableau : leurs images se coupent au point de fuite
> principal $F$, sur l'horizon — ils « se rejoignent au loin ». Les traverses,
> frontales, restent horizontales et parallèles ; seul leur **espacement**
> apparent diminue en approchant de l'horizon.

### Ce qui est conservé, ce qui ne l'est pas

| Conservé par la perspective centrale | Perdu |
|---|---|
| l'alignement des points | les longueurs |
| le contact (une tangente reste tangente) | les **milieux** et les proportions |
| l'intersection de deux droites | le parallélisme (sauf frontales) |
| la verticalité des frontales verticales | les angles |

⚠️ **Le milieu n'est pas conservé** : l'image du milieu d'un segment n'est pas,
en général, le milieu de l'image — d'où les traverses de plus en plus resserrées
vers l'horizon.

### Retrouver un milieu quand même : les diagonales

Comment placer une porte **au milieu** d'une façade dessinée en perspective ?
Dans la réalité, les diagonales d'un rectangle se coupent en son centre ; la
perspective conservant alignements et intersections, **l'image du centre est
l'intersection des diagonales de l'image**. La verticale passant par ce point
est l'axe de la porte — qui n'est **pas** au milieu « à la règle » du dessin.

### Perspective et coniques : la boucle est bouclée

Les rayons visuels issus de l'œil et s'appuyant sur un cercle de la scène
forment… un **cône** de sommet $O$ (en général non de révolution — le résultat
sur les sections s'étend à ce cas), que le tableau coupe : l'image d'un cercle
vu de biais est une **conique**, presque toujours une **ellipse**. Une assiette,
un verre, une roue se dessinent en ellipses — jamais en « œufs ».

---

## 6. Méthodes

### Identifier une section plane (rédaction type)

1. Repère $\alpha$ et l'angle plan–axe $\beta$ (schéma de profil : le cône
   devient deux droites croisées, le plan une troisième droite).
2. Compare $\beta$ à $\alpha$ avec le tableau de classification du § 2.
3. Vérifie la cohérence : courbe fermée ou ouverte ? une nappe coupée ou deux ?

### Calculer le rayon d'une section circulaire

Plan perpendiculaire à l'axe à la distance $d$ du sommet (le long de l'axe) : le
profil du cône donne un triangle rectangle, d'où

$$\boxed{r = d \times \tan \alpha}$$

> **Exemple.** $\alpha = 30°$, coupe à $d = 6$ cm du sommet :
> $r = 6 \tan 30° = 2\sqrt{3} \approx 3{,}5$ cm.

### Mettre en place une perspective frontale

1. Trace la **ligne d'horizon**, place le **point de fuite principal** $F$
   dessus.
2. Dessine les **frontales** en vraie direction (verticales verticales).
3. Fais **fuir vers $F$** les droites perpendiculaires au tableau.
4. Pour tout milieu ou division régulière : **diagonales**, jamais la règle
   graduée.

---

## 7. Tableau récapitulatif

| Objet | Condition / propriété | À retenir |
|---|---|---|
| Cercle | plan $\perp$ axe ($\beta = 90°$) | fermé ; $r = d\tan\alpha$ |
| Ellipse | $\alpha < \beta < 90°$ | fermée ; 2 axes, 4 sommets, rectangle encadrant $2a \times 2b$ |
| Parabole | plan $\parallel$ à **une** génératrice ($\beta = \alpha$) | ouverte ; 1 sommet, 1 axe de symétrie |
| Hyperbole | plan coupe les **2 nappes** ($\beta < \alpha$) | ouverte ; 2 branches, 2 asymptotes |
| Tangente en $M$ | touche **sans traverser** (limite de sécantes) | au cercle : $\perp$ au rayon $[OM]$ |
| Frontales | droites $\parallel$ au tableau | direction conservée, restent parallèles |
| Point de fuite | parallèles **non frontales** | images concourantes ; horizontales → fuite sur l'**horizon** (hauteur de l'œil) |
| Conservé | alignement, intersection, contact | perdu : longueurs, milieux, parallélisme, angles |
| Milieu en perspective | intersection des **diagonales** | jamais au milieu « mesuré » du dessin |

---

## 8. Les erreurs qui coûtent des points

1. **Comparer les mauvais angles.** La classification compare l'angle
   plan–**axe** $\beta$ au **demi**-angle au sommet $\alpha$. Si l'énoncé donne
   l'angle plan–génératrice ou l'angle au sommet complet $2\alpha$, convertis
   d'abord.
2. **Dessiner l'ellipse en œuf.** Une section oblique de cône est une vraie
   ellipse, avec **deux** axes de symétrie : elle n'est pas plus pointue du côté
   où le cône est étroit. L'erreur de tracé la plus repérée en arts appliqués.
3. **Confondre parabole et hyperbole.** Parabole : plan parallèle à **une
   seule** génératrice, **une** branche, pas d'asymptote. Hyperbole : **deux
   nappes** coupées, **deux** branches, deux asymptotes.
4. **Définir la tangente par « un seul point d'intersection ».** Une droite
   parallèle à l'axe d'une parabole la coupe en un seul point en la traversant.
   Le critère correct : toucher **sans traverser**. Et les asymptotes ne sont
   pas des tangentes (aucun point de contact).
5. **Faire fuir les frontales.** Les droites parallèles au tableau **ne
   convergent pas** : elles gardent leur direction. Seules les droites qui
   s'enfoncent dans la profondeur fuient vers un point de fuite.
6. **Reporter des milieux à la règle graduée.** La perspective ne conserve ni
   longueurs ni milieux : un carrelage régulier se dessine à espacements
   décroissants, un centre de façade se construit par les **diagonales**.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO du 2 avril 2026 (arrêté MENE2602921A), mathématiques,
classe terminale de la voie technologique, applicable rentrée 2027-2028. Fichier :
docs/programme-terminale-techno-2027.txt (extrait du PDF officiel
education.gouv.fr via WebFetch), section « ACTIVITÉS GÉOMÉTRIQUES (STD2A
uniquement) » (lignes 123-126). À confronter au PDF officiel avant publication.

Le texte officiel extrait est très bref : « Sections planes d'un cône de
révolution ; notion de tangente à une conique. Perspective centrale. » Le
développement (classification par l'angle plan/axe, vocabulaire des coniques,
propriétés de la perspective : point de fuite, ligne d'horizon, images de droites
parallèles, invariants) suit la commande éditoriale et l'esprit des anciens
programmes STD2A ; le PDF complet contient probablement des capacités attendues
détaillées non reprises dans l'extraction — LE RELECTEUR DOIT VÉRIFIER le
périmètre exact (notamment : constructions de tangentes exigibles ? perspective à
un ou deux points de fuite ? éléments dégénérés au programme ?).

Ce chapitre remplace « Algorithmique et programmation » pour la seule série
STD2A (le programme le dit explicitement : algorithmique « toutes séries SAUF
STD2A ») — avertissement placé en tête de fiche comme demandé.

Choix de rédaction :
- Aucune image disponible dans l'application : toutes les figures sont décrites
  verbalement (lampe torche, sablier, applique murale, voie ferrée, façade).
- Classification par l'angle β entre plan et AXE comparé au demi-angle au sommet
  α : convention la plus fréquente ; l'erreur n°1 avertit sur les conventions
  concurrentes (angle avec une génératrice, angle au sommet 2α).
- Tangente définie « touche sans traverser » + position limite de sécantes ;
  contre-exemple de la droite parallèle à l'axe d'une parabole (1 point mais
  sécante) ; asymptotes ≠ tangentes.
- Perspective : conservation (alignement, intersection, contact), non-conservation
  (longueurs, milieux, parallélisme, angles), frontales, point de fuite,
  ligne d'horizon = hauteur de l'œil, point de fuite principal, méthode des
  diagonales pour les milieux. Perspective à deux points de fuite seulement
  effleurée en exercice (approfondissement).
- « Image d'un cercle = ellipse » : le cône des rayons visuels est en général un
  cône OBLIQUE (non de révolution) ; formulation prudente dans la fiche (« le
  résultat s'étend à ce cas »). Le relecteur peut préférer supprimer la parenthèse.

Vérifications numériques : √(13²−5²) = 12 ; 6·tan30° = 2√3 ≈ 3,46 ≈ 3,5 cm.

Points à soumettre au relecteur :
- Périmètre exact des capacités attendues STD2A dans le PDF complet.
- La propriété « tangente au sommet de la parabole ⊥ axe » et « tangentes aux
  sommets de l'ellipse ∥ aux axes » : exigibles ou culture de tracé ?
- La note culturelle foyers/propriétés optiques : hors programme strict, gardée
  comme ouverture design clairement signalée.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
