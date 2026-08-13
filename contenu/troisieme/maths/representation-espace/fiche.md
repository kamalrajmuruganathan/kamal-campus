---
id: 3e-math-representation-espace
titre: "Représentation de l'espace"
voie: college
niveau: troisieme
parcours: maths
matiere: mathematiques
programme: "BO du 5 mars 2026 — cycle 4, applicable en 3e à la rentrée 2026"
duree_lecture_min: 13
prerequis:
  - Solides, perspective cavalière, patrons, volumes du cube, du pavé, du prisme, du cylindre (5e, chapitre « Représentation de l'espace »)
  - Pyramide, cône de révolution et règle du tiers pour le volume (4e, chapitre « Représentation de l'espace »)
  - Aire du disque $\mathcal{A} = \pi r^2$ (5e)
  - Théorème de Pythagore (4e)
statut: brouillon
relu_par: null
---

# Représentation de l'espace

> En 5e tu as mesuré des solides à faces plates, en 4e des solides pointus. Cette année,
> arrive le solide le plus rond de tous : la **boule**. Avec elle, deux mots à ne plus jamais
> confondre — la **sphère** (la peau) et la **boule** (le plein) — et une idée nouvelle :
> **couper** un solide par un plan pour voir apparaitre une figure plate, sa **section**.

---

## 1. Ce qui reste automatique (5e et 4e)

Le programme de 3e range en **automatismes** tout ce que tu sais déjà faire. Ça doit sortir
sans réfléchir.

- **Reconnaitre** les six solides : pavé droit, cube, prisme droit, cylindre, pyramide, cône.
- **Donner la nature d'une face** d'une pyramide dessinée en perspective cavalière : sa base
  est un polygone, ses faces latérales sont des **triangles**. (Sur le dessin, une base carrée
  apparait comme un **parallélogramme**, mais sa *nature* reste un carré.)
- **Calculer les volumes**, y compris ceux des solides pointus vus en 4e.

| Solide | Volume |
|---|---|
| Cube (arête $a$) | $V = a^3$ |
| Pavé droit | $V = L \times \ell \times h$ |
| Prisme droit / cylindre | $V = \mathcal{A}_{\text{base}} \times h$ |
| Pyramide / cône | $V = \dfrac{\mathcal{A}_{\text{base}} \times h}{3}$ |

> **Le fil rouge.** Un cylindre de rayon $5$ cm et de hauteur $12$ cm :
> $\mathcal{A}_{\text{base}} = 3{,}14 \times 25 = 78{,}5 \text{ cm}^2$, donc
> $V = 78{,}5 \times 12 = 942 \text{ cm}^3$. Comme en 5e et en 4e, on prend partout
> $\pi \approx 3{,}14$.

> 💡 Le détail (perspective cavalière, vues, patrons, unités) est dans les fiches
> **Représentation de l'espace** de 5e et de 4e. On ne le réexplique pas ici : on l'**étend**.

---

## 2. Patrons de pyramides inscrites dans un cube

Nouveauté de 3e parmi les automatismes : **identifier le patron d'une pyramide**, en
particulier d'une pyramide **inscrite dans un cube**. C'est aussi la plus belle preuve du
« $\div 3$ » de la 4e.

Prends un **cube d'arête $6$ cm**. Choisis une face du bas comme **base** carrée, et pour
**sommet** $S$ l'un des sommets du haut situé **juste au-dessus d'un coin** de cette base.
L'arête verticale qui relie ce coin à $S$ est alors la **hauteur** de la pyramide : elle vaut
l'arête du cube, soit $6$ cm.

$$V = \frac{\mathcal{A}_{\text{base}} \times h}{3} = \frac{(6 \times 6) \times 6}{3}
= \frac{216}{3} = 72 \text{ cm}^3$$

Or le cube entier fait $6^3 = 216 \text{ cm}^3$. Cette pyramide en occupe donc **exactement le
tiers** — et l'on peut remplir le cube avec **trois** pyramides identiques.

**Son patron**, en vraie grandeur :

- le **carré** de base $6 \times 6$ ;
- **deux triangles rectangles** dont les côtés de l'angle droit mesurent $6$ cm et $6$ cm
  (les faces qui contiennent l'arête verticale $[S\text{–coin}]$) ;
- **deux triangles rectangles** dont les côtés de l'angle droit mesurent $6$ cm et
  $6\sqrt{2} \approx 8{,}49$ cm (les deux autres faces).

> ⚠️ Cette pyramide **n'est pas régulière** : son sommet ne tombe pas au **centre** de la base
> mais au-dessus d'un **coin**. Ses quatre faces latérales ne sont donc **pas** identiques.
> Ne recopie pas le patron « $1$ carré $+$ $4$ triangles isocèles » de la pyramide régulière
> vu en 4e.

---

## 3. Sphère et boule

C'est **le cœur du programme de 3e**. Deux objets, un seul centre, un seul rayon — mais l'un
est **creux** et l'autre est **plein**.

**Définitions.** Soit un point $O$ et un nombre $R > 0$.

$$\boxed{\text{La sphère de centre } O \text{ et de rayon } R = \text{les points situés à la
distance } R \text{ de } O}$$

$$\boxed{\text{La boule de centre } O \text{ et de rayon } R = \text{les points situés à une
distance } \leqslant R \text{ de } O}$$

- La **sphère** est une **surface** : uniquement la « peau ». Un ballon de foot dégonflé,
  c'est une sphère.
- La **boule** est un **solide plein** : la peau **et tout l'intérieur**. Une bille, une boule
  de pétanque, c'est une boule.

> 💡 **La bonne analogie.** Dans le plan, le **cercle** est le contour et le **disque** est la
> surface pleine. Dans l'espace, la **sphère** est à la **boule** ce que le cercle est au
> disque.

**Diamètre.** Un **diamètre** est un segment qui joint deux points de la sphère **en passant
par le centre** $O$. Sa longueur vaut **deux fois le rayon** :

$$\boxed{d = 2R}$$

> Sphère de rayon $5$ cm : son diamètre mesure $2 \times 5 = 10$ cm.

**Grand cercle.** Un **grand cercle** est l'intersection de la sphère avec un **plan qui passe
par le centre** $O$. C'est un cercle de **même centre** $O$ et de **même rayon** $R$ que la
sphère : c'est le **plus grand** cercle qu'on puisse tracer dessus.

> Sur le globe terrestre, l'**équateur** est un grand cercle. Les cercles parallèles plus
> proches des pôles sont plus **petits** : ce ne sont pas des grands cercles.

---

## 4. Sections d'un solide par un plan

**Couper** un solide par un plan fait apparaitre une figure **plate** : sa **section**. Le
programme fixe exactement trois situations.

**Pavé (ou cube) coupé parallèlement à une face** → la section est un **rectangle
identique à cette face**, quelle que soit la hauteur de la coupe.

> Pavé $5 \times 3 \times 2$ (cm) coupé parallèlement à la face $5 \times 3$ : la section est
> un rectangle $5 \times 3$, d'aire $15 \text{ cm}^2$ — le même à toutes les hauteurs.

**Cylindre coupé selon son axe.** Deux cas à ne pas inverser :

- **perpendiculairement à l'axe** → la section est un **disque** identique aux bases, de
  rayon $r$ ;
- **parallèlement à l'axe** → la section est un **rectangle**. S'il passe par l'axe, sa
  largeur est le **diamètre** $2r$ et sa hauteur celle du cylindre.

> Cylindre de rayon $5$ cm et de hauteur $12$ cm : une coupe perpendiculaire à l'axe donne un
> disque de rayon $5$ cm ; une coupe passant par l'axe donne un rectangle $10 \times 12$ (cm).

**Boule coupée par un plan** → la section est **toujours un disque** (et la sphère, un
cercle). Son rayon dépend de la **distance $d$ du plan au centre** :

- si le plan passe par le centre ($d = 0$), on retrouve un **grand cercle** de rayon $R$ ;
- sinon, le rayon $r$ de la section se calcule par **Pythagore** dans le triangle rectangle
  formé par $R$, $d$ et $r$ :

$$\boxed{r = \sqrt{R^2 - d^2}}$$

> **Exemple.** Boule de rayon $R = 5$ cm coupée par un plan situé à $d = 3$ cm du centre :
> $r = \sqrt{5^2 - 3^2} = \sqrt{25 - 9} = \sqrt{16} = 4 \text{ cm}$. La section est un disque
> de rayon $4$ cm, donc **plus petit** que le grand cercle.

---

## 5. Volume de la boule

Le dernier objectif du chapitre : une formule à connaitre par cœur.

$$\boxed{V_{\text{boule}} = \frac{4}{3} \times \pi \times R^3}$$

$R$ est le rayon, et $R^3 = R \times R \times R$.

> **Exemple 1.** Boule de rayon $3$ cm, $\pi \approx 3{,}14$ :
> $$V = \frac{4}{3} \times 3{,}14 \times 3^3 = \frac{4}{3} \times 3{,}14 \times 27
> = \frac{4 \times 84{,}78}{3} = \frac{339{,}12}{3} = 113{,}04 \text{ cm}^3$$

> **Exemple 2.** Boule de **diamètre** $12$ cm. Attention : le rayon vaut $R = 6$ cm.
> $$V = \frac{4}{3} \times 3{,}14 \times 6^3 = \frac{4}{3} \times 3{,}14 \times 216
> = \frac{2712{,}96}{3} = 904{,}32 \text{ cm}^3$$

> 💡 **Méthode sûre.** Calcule d'abord $R^3$, multiplie par $\pi$, multiplie par $4$, divise
> par $3$. Dans cet ordre, tu ne mélanges rien.

> 💡 **Culture — Archimède.** Enferme une boule de rayon $R$ dans le plus petit cylindre qui
> la contient : ce cylindre a pour rayon $R$ et pour hauteur $2R$, donc pour volume
> $\pi R^2 \times 2R = 2\pi R^3$. Archimède a découvert, dès le IIIᵉ siècle avant J.-C., que
> la boule en occupe les **deux tiers** : $\frac{2}{3} \times 2\pi R^3 = \frac{4}{3}\pi R^3$.
> C'est bien notre formule. Newton l'a démontrée rigoureusement au XVIIᵉ siècle.

---

## 6. À retenir absolument

| | |
|---|---|
| Sphère | la **surface** (creuse) : points à distance $R$ de $O$ |
| Boule | le **solide plein** : points à distance $\leqslant R$ de $O$ |
| Diamètre | $d = 2R$ |
| Grand cercle | section par un plan passant par le **centre** · rayon $R$ |
| Section d'un pavé $\parallel$ à une face | **rectangle** identique à cette face |
| Section d'un cylindre $\perp$ à l'axe | **disque** de rayon $r$ |
| Section d'un cylindre $\parallel$ à l'axe | **rectangle** |
| Section d'une boule | **disque**, de rayon $\sqrt{R^2 - d^2}$ |
| Volume de la boule | $V = \dfrac{4}{3}\pi R^3$ |
| Pyramide inscrite dans un cube | volume $=$ **le tiers** du cube |

---

## 7. Les erreurs qui coûtent des points

1. **Confondre sphère et boule.** La sphère est **creuse** (une surface), la boule est
   **pleine** (un volume). On calcule le volume d'une **boule**, jamais d'une sphère.
2. **Oublier le cube $R^3$** dans le volume, ou écrire $R^2$. Le volume d'une boule contient
   $R \times R \times R$ : c'est une longueur au cube, d'où des **cm³**.
3. **Oublier le $\dfrac{4}{3}$**, ou le remplacer par $\dfrac{2}{3}$. Les deux tiers, c'est le
   rapport **boule / cylindre** d'Archimède, pas la formule du volume.
4. **Prendre le diamètre pour le rayon.** Diamètre $12$ cm $\Rightarrow$ rayon $6$ cm. Se
   tromper multiplie le volume par $2^3 = 8$.
5. **Doubler le rayon en croyant doubler le volume.** Comme le volume dépend de $R^3$, doubler
   le rayon multiplie le volume par $\boldsymbol{8}$, pas par $2$ — et jamais par $4$ (ça,
   c'est le facteur d'une aire).
6. **Croire que toute section d'une boule a le rayon $R$.** Seule la section **par le centre**
   (le grand cercle) a le rayon $R$ ; les autres sont **plus petites**, de rayon
   $\sqrt{R^2 - d^2}$.
7. **Inverser les sections d'un cylindre** : $\perp$ à l'axe $\to$ **disque**, $\parallel$ à
   l'axe $\to$ **rectangle**. C'est facile à intervertir sous la pression.
8. **Répondre en cm² pour un volume.** Un volume s'exprime toujours en unités **cubes** —
   cm³, dm³, m³ — ou en litres.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

SOURCE EXACTE
docs/programme-college-cycle4-maths-2026.txt, thème « Espace et géométrie », niveau
Troisième, entrée « Représentation de l'espace », LIGNES 818 à 835 (plage fournie : 810-860).

Texte source, correspondance littérale -> fiche :
- Automatismes (l. 819-823)
  « Reconnaitre des solides (pavé droit, cube, prisme droit, cylindre, pyramide, cône). » -> §1
  « Connaitre et utiliser les formules du volume d'une pyramide ou d'un cône. »           -> §1
  « Donner la nature d'une face d'une pyramide représentée en perspective cavalière. »    -> §1
  « Identifier les patrons de pyramides données (par exemple inscrites dans un cube). »   -> §2
- Objectifs d'apprentissage (l. 824-829)
  « Définir la boule et la sphère. »                                                      -> §3
  « Définir les grands cercles, le diamètre. »                                            -> §3
  « Visualiser et réaliser des sections de pavé parallèlement à une face, de cylindre
    parallèlement ou perpendiculairement à son axe, d'une boule. »                        -> §4
  « Connaitre et utiliser la formule du volume d'une boule de rayon donné. »              -> §5
- Prolongements possibles (l. 830-835) : intuition d'Archimède (boule = 2/3 du cylindre qui
  la contient), démonstration de Newton ; cinq polyèdres réguliers et Léonard de Vinci.
  -> encadré culture §5 (Archimède + Newton). Les polyèdres réguliers / De Vinci n'ont PAS
  été repris (aucun objectif ne s'y rattache).

ARTICULATION AVEC LA 5e ET LA 4e — VÉRIFIÉE
Fiches lues : contenu/cinquieme/maths/representation-espace/fiche.md (pavé, cube, prisme,
cylindre : perspective, vues, patrons, aire du disque, volumes, unités) et
contenu/quatrieme/maths/representation-espace/fiche.md (pyramide, cône, règle du tiers).
Les deux sont citées en prérequis (§ prerequis) et rappelées en une ligne au §1, jamais
réexpliquées. Convention π ≈ 3,14 reprise. Fil d'exemples chiffrés recyclé : cylindre
r=5 / h=12 -> 942 cm³ (déjà présent en 5e et 4e), et base carrée de 6 cm (reprise de la
pyramide de 4e). L'apport réel de la 3e = boule/sphère, grands cercles/diamètre, sections,
volume de la boule, et patron de pyramide inscrite dans un cube.

>>> DEUX POINTS DE PÉRIMÈTRE MAJEURS À TRANCHER PAR LE RELECTEUR <<<

A. AGRANDISSEMENT-RÉDUCTION (effet d'un coefficient k : longueurs ×k, aires ×k², volumes ×k³).
   ABSENT de la section 3e « Représentation de l'espace » (l. 818-835) ET introuvable dans
   TOUT le fichier programme (recherche « agrandissement / réduction / coefficient k /
   semblable / échelle » sur l'ensemble du document : aucune occurrence rattachée aux solides ;
   « échelle » n'apparait que pour la proportionnalité, l. 1004-1050). C'est pourtant un
   attendu classique de 3e dans les anciens programmes. J'ai donc, CONFORMÉMENT à la règle
   « le programme est la seule source de contenu », NE PAS créé de section agrandissement-
   réduction et NE PAS mis l'erreur « multiplier le volume par k » comme telle. J'ai seulement
   conservé l'effet du cube via la formule elle-même (« doubler le rayon multiplie le volume
   par 8 », §7 pt 5 et QCM Q10), ce qui découle directement de V = 4/3 πR³ sans importer le
   chapitre absent. -> Le relecteur doit confirmer que ce thème ne figure effectivement PAS
   au programme 2026 (ou indiquer la section/le niveau où il a migré) : c'est LE point de
   conformité le plus sensible de cette fiche.

B. AIRE DE LA SPHÈRE (A = 4πR²). ABSENTE du programme : l. 829 ne demande QUE « la formule du
   volume d'une boule ». Je ne l'ai donc PAS posée comme formule à mémoriser (ni au §5, ni au
   tableau, ni au QCM). -> À confirmer par le relecteur : est-ce bien hors attendu en 3e 2026 ?

AUTRES POINTS À VALIDER
1. PATRON DE LA PYRAMIDE INSCRITE DANS UN CUBE (§2) : j'ai choisi la pyramide sommet-au-dessus-
   d'un-coin (hauteur = arête, volume = 1/3 du cube, dissection en 3 pyramides). Faces : 1 carré
   + 2 triangles rectangles (6;6) + 2 triangles rectangles (6 ; 6√2). Tracé/longueurs vérifiés
   par coordonnées (A=(0,0,0), base z=0, S=(0,0,6)). Le BO dit « par exemple inscrites dans un
   cube » sans figer LAQUELLE : une autre pyramide inscrite (ex. sommet au centre du cube) est
   possible. Choix à valider.
2. SECTION DE BOULE HORS-CENTRE, r = √(R²−d²) (§4, QCM Q7) : mobilise Pythagore (au programme
   de 4e, réactivé en 3e l. 838-839). Le BO demande « visualiser et réaliser des sections
   d'une boule » sans exiger explicitement le calcul du rayon de section. Je l'ai traité car
   c'est l'usage chiffré naturel et il tombe souvent au brevet. À arbitrer : garder le calcul,
   ou s'en tenir à « la section est un disque » ?
3. SECTION DE CYLINDRE PARALLÈLE À L'AXE (§4) : le BO le liste ; j'ai précisé « rectangle, de
   largeur 2r si le plan passe par l'axe ». La précision « passant par l'axe » va un cran au-
   delà du texte (qui dit seulement « parallèlement à l'axe »). À valider.
4. VALEUR DE π : π ≈ 3,14 partout, comme en 5e/4e. Vérifier que c'est la convention du projet
   plutôt que la touche π de la calculatrice.
5. NOMBRES DES EXEMPLES CHIFFRÉS (113,04 ; 904,32 ; section 5/3 -> 4 ; cube 6 -> pyramide 72) :
   recalculés un par un, cohérents. À revérifier en relecture.

CONTRAINTE FIGURES : chapitre de géométrie dans l'espace produit SANS illustration, comme en
5e et 4e. Compensé par des descriptions pas-à-pas (patron §2, sections §4) et un fil
d'exemples chiffrés (boule R=3 -> 113,04 cm³ ; boule d=12 -> 904,32 cm³ ; section boule
R=5/d=3 -> r=4 ; pyramide dans cube d'arête 6 -> 72 cm³). Points d'insertion si des figures
sont ajoutées : §2 (patron), §3 (sphère/grand cercle), §4 (les trois sections).

Rédaction originale à partir du seul programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
