---
id: 1stl-spcl-image-couleur-vision
titre: "Image : couleur et vision"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 15
prerequis:
  - Lentilles convergentes et image d'un objet (Seconde)
  - Lumière blanche et lumières colorées, spectre (Seconde)
  - Absorption de la lumière et couleur d'un objet (Seconde)
  - Grandeurs, unités et puissances de 10 (Seconde)
statut: brouillon
relu_par: null
---

# Image : couleur et vision

> Une image n'existe que si un œil — ou un capteur — la reçoit. Ce chapitre part du
> **récepteur** : comment l'œil forme une image, comment il perçoit les couleurs, et comment
> on **fabrique** puis on **code** une couleur, sur un écran comme dans un fichier. Deux
> mondes cohabitent : les couleurs de la **lumière** (additive) et celles de la **matière**
> (soustractive). Les confondre est le piège central du thème.

---

## 1. Le modèle optique de l'œil

On modélise l'œil par un **système optique simple** :

| Élément de l'œil | Modèle optique | Rôle |
|---|---|---|
| Cornée + **cristallin** | une **lentille convergente** | fait converger la lumière |
| **Rétine** | un **écran** | reçoit l'image |
| Iris / pupille | un **diaphragme** | règle la quantité de lumière |

Le cristallin forme sur la rétine une image **réelle** (recueillie sur un écran), **renversée**
et **plus petite** que l'objet. C'est le cerveau qui « remet à l'endroit » l'image perçue.

> **Exemple.** Pour voir net un objet proche puis un objet lointain, l'œil **accommode** : les
> muscles déforment le cristallin pour changer sa **distance focale**, de façon à ramener
> l'image exactement sur la rétine. La distance lentille-écran (cristallin-rétine), elle, est
> quasi **fixe** — contrairement à un appareil photo où c'est l'objectif qui se déplace.

> ⚠️ Dans l'œil, c'est la **vergence du cristallin** qui varie, pas la position de la rétine.
> Un objet vu net a toujours son image **sur** la rétine.

---

## 2. Les photorécepteurs de la rétine

La rétine est tapissée de deux familles de cellules photosensibles.

### Les cônes — la vision des couleurs, de jour

Il existe **trois types de cônes**, chacun sensible à une plage de longueurs d'onde :

| Cône | Sensible surtout à | Couleur associée | Note |
|---|---|---|---|
| **S** (*short*) | courtes longueurs d'onde ($\approx 420\ \text{nm}$) | **bleu** | les plus rares |
| **M** (*medium*) | moyennes ($\approx 530\ \text{nm}$) | **vert** | |
| **L** (*long*) | grandes ($\approx 560\ \text{nm}$) | **rouge** | les plus nombreux |

Les cônes fonctionnent en **lumière vive** (vision **diurne**, dite *photopique*) et sont
concentrés au centre de la rétine (la *fovéa*).

### Les bâtonnets — la vision nocturne

Les **bâtonnets** sont bien plus **sensibles** que les cônes : ils fonctionnent en **faible
luminosité** (vision **nocturne**, dite *scotopique*). Mais il n'en existe **qu'un seul
type** : ils ne distinguent **pas les couleurs**.

> **Exemple.** La nuit, dans la pénombre, tu vois des formes et des nuances de gris mais
> presque pas de couleurs : seuls les **bâtonnets** travaillent. C'est l'origine du proverbe
> « la nuit, tous les chats sont gris ».

> ⚠️ Ne confonds pas **sensibilité** (détecter peu de lumière → bâtonnets) et **perception des
> couleurs** (distinguer les longueurs d'onde → trois types de cônes).

---

## 3. Vision des couleurs et daltonisme

La vision des couleurs est **trichromatique** : le cerveau reconstruit une couleur à partir
des **trois signaux** envoyés par les cônes S, M et L. Une même sensation de « jaune » peut
naître d'une lumière jaune pure **ou** d'un mélange rouge + vert qui excite les cônes L et M
de la même façon — c'est exactement ce qu'exploite un écran.

Le **daltonisme** est un défaut de la vision des couleurs dû à un type de cône **absent ou
déficient** :

| Type de cône touché | Confusion fréquente |
|---|---|
| L (rouge) ou M (vert) | **rouge / vert** (le plus courant) |
| S (bleu) | bleu / jaune (rare) |

> **Exemple.** Un daltonien « rouge-vert » a ses cônes L et M qui répondent de façon trop
> semblable : deux couleurs qu'un œil normal sépare (un rouge et un vert) lui donnent presque
> le **même** signal, d'où la confusion.

Le daltonisme est **héréditaire**, lié au chromosome X, et touche donc beaucoup plus les
**hommes** (environ 8 %) que les femmes (moins de 1 %).

---

## 4. Lumière blanche et spectre

La **lumière blanche** (celle du Soleil, d'une lampe à incandescence) n'est pas « une »
lumière : c'est la **superposition de toutes les lumières colorées** du visible.

Un **prisme** ou un réseau la **décompose** en un **spectre continu** : c'est la dispersion.

$$\text{violet} \;\approx\; 400\ \text{nm} \qquad\longrightarrow\qquad \text{rouge} \;\approx\; 800\ \text{nm}$$

Chaque couleur correspond à une **longueur d'onde** $\lambda$. Le domaine visible s'étend
environ de $\boxed{400\ \text{nm} \text{ (violet)} \ \text{à}\ 800\ \text{nm} \text{ (rouge)}}$.

> **Exemple.** L'**arc-en-ciel** est le spectre de la lumière solaire : les gouttes d'eau
> jouent le rôle du prisme et séparent les couleurs, du violet (dévié le plus) au rouge.

> **Rappel d'unité.** $1\ \text{nm} = 10^{-9}\ \text{m}$. Une longueur d'onde de
> $532\ \text{nm}$ vaut $5{,}32\times 10^{-7}\ \text{m}$.

---

## 5. Synthèse additive (mélange de lumières)

On **additionne des lumières colorées** : on les superpose. Les trois **couleurs primaires**
de la synthèse additive sont le **Rouge**, le **Vert** et le **Bleu** (RVB) — celles des trois
cônes.

$$\boxed{\text{Rouge} + \text{Vert} + \text{Bleu} = \text{Blanc}}$$

Les mélanges deux à deux donnent les **couleurs secondaires** :

| Mélange de lumières | Résultat |
|---|---|
| Rouge + Vert | **Jaune** |
| Vert + Bleu | **Cyan** |
| Rouge + Bleu | **Magenta** |
| Rouge + Vert + Bleu | **Blanc** |
| aucune lumière | **Noir** |

> **Exemple.** Un **écran** (téléphone, télé) est fait de trois sous-pixels **R**, **V**, **B**.
> Allumés ensemble à fond, ils font du **blanc** ; tous éteints, du **noir**. Regarde un pixel
> blanc à la loupe : tu vois les trois points colorés.

> ⚠️ En synthèse **additive**, plus on ajoute de lumières, plus c'est **clair**. Le point de
> départ est le **noir** (écran éteint).

---

## 6. Synthèse soustractive (filtres et pigments)

Ici on **retire** des couleurs à une lumière blanche, à l'aide de **filtres** ou de
**pigments** qui **absorbent** une partie du spectre. Les trois **couleurs primaires** de la
synthèse soustractive sont le **Cyan**, le **Magenta** et le **Jaune** (CMJ).

Chaque primaire soustractive absorbe **une** primaire additive :

| Filtre / pigment | Absorbe (retient) | Laisse passer |
|---|---|---|
| **Cyan** | le **Rouge** | Vert + Bleu |
| **Magenta** | le **Vert** | Rouge + Bleu |
| **Jaune** | le **Bleu** | Rouge + Vert |

En superposant les pigments, on **cumule les absorptions** :

$$\boxed{\text{Cyan} + \text{Magenta} + \text{Jaune} = \text{Noir}}$$

| Superposition | Couleur obtenue |
|---|---|
| Cyan + Magenta | Bleu |
| Magenta + Jaune | Rouge |
| Cyan + Jaune | Vert |
| Cyan + Magenta + Jaune | **Noir** |

> **Exemple.** Une **imprimante** couleur utilise des encres **C, M, J** (plus du noir K pour
> économiser l'encre et avoir un vrai noir). Superposées sur le papier blanc, elles soustraient
> de la lumière réfléchie : c'est de la synthèse **soustractive**.

> ⚠️ En synthèse **soustractive**, plus on superpose de filtres, plus c'est **sombre**. Le
> point de départ est le **blanc** (papier ou lumière blanche).

---

## 7. La couleur d'un objet

La couleur perçue d'un objet dépend de **deux** choses :

$$\boxed{\text{couleur perçue} \;=\; \text{lumière incidente} \;-\; \text{lumière absorbée}}$$

L'objet **absorbe** certaines longueurs d'onde et **diffuse** (ou transmet) les autres : ce
sont **celles-ci** qui arrivent à l'œil.

> **Exemple 1.** Une tomate éclairée en **lumière blanche** absorbe le vert et le bleu, diffuse
> le **rouge** : on la voit rouge.

> **Exemple 2.** La **même** tomate éclairée en lumière **verte** n'a que du vert à diffuser…
> mais elle l'absorbe ! Elle ne renvoie rien : elle apparaît **noire**.

La couleur d'un objet n'est donc **pas une propriété absolue** : elle dépend de la **lumière
qui l'éclaire**. Un objet blanc diffuse **toutes** les couleurs ; un objet noir les **absorbe
toutes**.

---

## 8. Le modèle colorimétrique RVB (codage numérique)

Pour stocker une couleur dans un fichier ou l'afficher, on la code par **trois nombres**
donnant l'intensité de chaque primaire **R**, **V**, **B**. Sur un octet par canal, chaque
composante est un entier de :

$$\boxed{0 \ \text{à}\ 255} \qquad (256 = 2^8 \text{ niveaux par canal})$$

- $0$ = canal **éteint**, $255$ = canal **au maximum**.
- Nombre total de couleurs : $256^3 = 256\times256\times256 = 16\,777\,216 \approx 16{,}7$ millions.

| Couleur | Code RVB (décimal) |
|---|---|
| Rouge pur | $(255,\ 0,\ 0)$ |
| Vert pur | $(0,\ 255,\ 0)$ |
| Bleu pur | $(0,\ 0,\ 255)$ |
| Blanc | $(255,\ 255,\ 255)$ |
| Noir | $(0,\ 0,\ 0)$ |
| Jaune | $(255,\ 255,\ 0)$ |
| Gris moyen | $(128,\ 128,\ 128)$ |

### Le code hexadécimal

On écrit souvent la couleur en **hexadécimal** (base 16), sous la forme **`#RRVVBB`** : deux
chiffres hexadécimaux par canal, car $255 = \text{FF}_{16}$. Les chiffres hexadécimaux sont
$0,1,2,\dots,9,\text{A},\text{B},\text{C},\text{D},\text{E},\text{F}$ (A vaut 10, …, F vaut 15).

**Méthode — convertir un canal (0–255) en hexadécimal.** On divise par 16 : le **quotient**
est le premier chiffre, le **reste** le second.

> **Exemple.** Convertir $(255, 128, 0)$ (un orange) en hexadécimal.
> - $255 = 15\times16 + 15 \Rightarrow \text{FF}$
> - $128 = 8\times16 + 0 \Rightarrow \text{80}$
> - $0 = 0\times16 + 0 \Rightarrow \text{00}$
>
> Code : **`#FF8000`**. Inversement, `#FF8000` se relit $\text{FF} = 255$, $\text{80}=128$,
> $\text{00}=0$, soit $(255,128,0)$.

> **Exemple.** `#FFFFFF` = $(255,255,255)$ = **blanc** ; `#000000` = $(0,0,0)$ = **noir**.

---

## 9. À retenir absolument

| | |
|---|---|
| Œil = système optique | cristallin = **lentille**, rétine = **écran** |
| Image sur la rétine | **réelle**, **renversée**, plus petite |
| Cônes | **3 types** (S/bleu, M/vert, L/rouge), vision de **jour**, **couleurs** |
| Bâtonnets | **1 type**, vision de **nuit**, très sensibles, **pas de couleur** |
| Daltonisme | cône déficient → confusion **rouge/vert** surtout |
| Lumière blanche | superposition de toutes les couleurs, visible $\approx 400$–$800$ nm |
| Synthèse **additive** | **R+V+B = Blanc** (lumières, écrans), départ = noir |
| Synthèse **soustractive** | **C+M+J = Noir** (filtres, pigments), départ = blanc |
| Couleur d'un objet | incidente $-$ absorbée ; **dépend de l'éclairage** |
| Codage RVB | 3 canaux **0–255** ; hexadécimal **#RRVVBB**, $255=\text{FF}$ |

---

## 10. Les erreurs qui coûtent des points

1. **Confondre synthèse additive et soustractive.** Lumières → additive (R,V,B ; on part du
   noir). Filtres/pigments → soustractive (C,M,J ; on part du blanc). RVB additif, CMJ
   soustractif : ne jamais les mélanger.
2. **Croire qu'un objet garde sa couleur quel que soit l'éclairage.** Une tomate rouge éclairée
   en lumière verte apparaît **noire** : elle n'a rien à diffuser.
3. **Confondre cônes et bâtonnets.** Les **cônes** (3 types) voient les couleurs de jour ; les
   **bâtonnets** (1 type, plus sensibles) voient en gris la nuit.
4. **Attribuer le daltonisme aux bâtonnets.** Le daltonisme touche les **cônes** — ce sont eux
   qui codent la couleur.
5. **Oublier la conversion des longueurs d'onde** : $1\ \text{nm} = 10^{-9}\ \text{m}$. Un
   $\lambda$ en nm n'est pas en m.
6. **Se tromper sur les bornes du codage** : chaque canal va de **0 à 255** ($256$ niveaux),
   pas de 0 à 256. Et $255$ se code **FF**, pas 100, en hexadécimal.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe de première.
BO spécial n° 1 du 22 janvier 2019 (et BO spécial n° 8 du 25 juillet 2019).
Fichier de référence interne : docs/programme-stl-spcl.txt, section « Image : couleur et
vision (1re) » (modèle optique de l'œil ; vision des couleurs, daltonisme ; synthèse additive
RVB et soustractive CMJ, filtres ; modèle colorimétrique RVB).
Extrait via WebFetch depuis le PDF officiel education.gouv.fr :
Programme de sciences physiques et chimiques en laboratoire de première STL-251820.pdf.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Longueurs d'onde de sensibilité des cônes (S≈420, M≈530, L≈560 nm) : valeurs communément
  admises ; le programme exige-t-il des valeurs chiffrées ou seulement l'ordre S<M<L ?
- Bornes du domaine visible : j'ai retenu ~400–800 nm (cohérent avec le programme de Seconde).
  Certains manuels écrivent 380–780 nm. À harmoniser avec la convention retenue par l'équipe.
- Le codage RVB sur 8 bits (0–255) et le code hexadécimal figurent explicitement au programme
  de première SPCL (module « Image ») — confirmer le niveau d'exigence sur la conversion
  décimal↔hexadécimal (méthode par division, ou simple lecture ?).
- La notion d'accommodation du cristallin : incluse ici comme lien avec le chapitre
  « Photographie et lentilles ». Vérifier qu'elle relève bien de ce module et n'empiète pas.
- Prévoir le lien avec « Appareil photo numérique et image numérique » (codage RVB, niveaux
  de gris) pour éviter les redites entre les deux chapitres du thème Image.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
