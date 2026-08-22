---
id: 1stl-spcl-appareil-photo-image-numerique
titre: "Appareil photo numérique et image numérique"
voie: technologique
niveau: premiere-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO du 22 janvier 2019 — SPCL, série STL, classe de première"
duree_lecture_min: 17
prerequis:
  - Image : photographie et lentilles (SPCL, 1re) — lentille convergente, distance focale, image réelle sur un écran
  - Image : couleur et vision (SPCL, 1re) — modèle colorimétrique RVB
  - Grandeurs, unités et puissances de 10 (Seconde)
statut: brouillon
relu_par: null
---

# Appareil photo numérique et image numérique

> Le chapitre précédent a montré **comment** un objectif fabrique une image réelle sur un écran.
> Ici, l'écran devient un **capteur électronique** qui découpe l'image en petits carrés, les
> **pixels**, et transforme la lumière en **nombres**. Deux mondes se rejoignent : l'**optique**
> (nombre d'ouverture, temps de pose, profondeur de champ) et le **numérique** (codage RVB, poids
> d'un fichier, débit). Le fil rouge et le vrai piège : les **unités** — un octet vaut **8 bits**,
> et on ne mélange jamais des ko et des Mo sans convertir.

---

## 1. Le modèle de l'appareil photo

Un appareil photo numérique se modélise par **deux éléments** :

| Élément | Rôle | Modèle optique |
|---|---|---|
| **Objectif** | forme l'image de la scène | **lentille mince convergente** de distance focale $f'$ |
| **Capteur** | reçoit et enregistre l'image | **écran** placé après la lentille |

L'objet photographié est loin (au-delà de $2F$) : l'objectif en forme une image **réelle,
renversée et réduite** sur le capteur. Faire la **mise au point**, c'est déplacer l'objectif pour
que cette image tombe **exactement** sur le plan du capteur (cf. relation de conjugaison, chapitre
précédent).

Devant l'objectif, un **diaphragme** est un trou de diamètre **réglable** $D$ : il contrôle la
**quantité de lumière** qui entre, comme l'iris de l'œil. Un **obturateur** s'ouvre pendant une
durée $t$ (le **temps de pose**) puis se referme.

> **Exemple.** L'inscription « $50\ \text{mm}\ 1{:}1.8$ » sur un objectif donne la **distance
> focale** $f' = 50\ \text{mm}$ et le **nombre d'ouverture** minimal $1{:}1.8$ (décodés ci-après).

---

## 2. Le nombre d'ouverture

Le **nombre d'ouverture** $N$ compare la distance focale $f'$ au diamètre $D$ du diaphragme :

$$\boxed{N = \dfrac{f'}{D}}$$

- $N$ est **sans unité** (rapport de deux longueurs) ; il faut donc $f'$ et $D$ dans la **même
  unité**.
- On le note souvent $f/N$ sur les objectifs : $f/2$, $f/2{,}8$, $f/4$, $f/5{,}6$, $f/8$, $f/11$…
- **Petit $N$** = **grand** diamètre $D$ = diaphragme **ouvert** = **beaucoup** de lumière.
- **Grand $N$** = **petit** diamètre $D$ = diaphragme **fermé** = **peu** de lumière.

La quantité de lumière reçue est proportionnelle à l'**aire** du trou, donc à $D^2$, c'est-à-dire
à $\dfrac{1}{N^2}$. Passer de $N$ à $N\sqrt{2}$ (par exemple $f/4 \to f/5{,}6$) **divise la lumière
par 2** : c'est un « **diaphragme** » (un *stop*).

> **Exemple.** Objectif $f' = 50\ \text{mm}$, diamètre d'ouverture $D = 25\ \text{mm}$ :
> $$N = \dfrac{50}{25} = 2{,}0 \quad(\text{noté } f/2).$$
> Si on ferme le diaphragme à $D = 12{,}5\ \text{mm}$, alors $N = \dfrac{50}{12{,}5} = 4{,}0$ :
> le diamètre a été divisé par 2, donc la lumière par $2^2 = 4$.

> ⚠️ **Le sens qui piège.** Un **grand** nombre d'ouverture correspond à une **petite**
> ouverture. « Ouvrir » le diaphragme, c'est **diminuer** $N$. Contre-intuitif, mais c'est la
> définition $N = f'/D$ : $D$ est au **dénominateur**.

---

## 3. Le temps de pose

Le **temps de pose** (ou temps d'exposition) $t$ est la **durée** pendant laquelle l'obturateur
reste ouvert et laisse la lumière atteindre le capteur. Il s'exprime en **secondes**, souvent sous
forme de fractions : $\tfrac{1}{125}\ \text{s}$, $\tfrac{1}{500}\ \text{s}$, $2\ \text{s}$…

- Temps de pose **long** → **plus** de lumière, mais risque de **flou de bougé** si le sujet ou
  l'appareil bouge.
- Temps de pose **court** → **moins** de lumière, mais le mouvement est **figé** (nette).

La quantité de lumière (l'**exposition**) reçue par le capteur augmente avec $t$ et diminue avec
$N^2$ :

$$\text{exposition} \ \propto\ \dfrac{t}{N^2}.$$

> **Exemple.** Correctement exposé à $f/4$, $t = \tfrac{1}{250}\ \text{s}$ : pour figer un
> mouvement, on passe à $\tfrac{1}{1000}\ \text{s}$ (lumière ÷ 4). Pour compenser, on divise $N$
> par 2 (lumière × 4) : on passe à $f/2$.

---

## 4. La profondeur de champ

La **profondeur de champ** est l'**étendue de distances**, autour du sujet mis au point, dans
laquelle les objets apparaissent **nets** sur la photo.

Elle dépend surtout du **nombre d'ouverture** :

| Réglage | Ouverture | Profondeur de champ | Usage |
|---|---|---|---|
| **Grand $N$** ($f/16$) | diaphragme **fermé** | **grande** (net du proche au lointain) | paysage |
| **Petit $N$** ($f/2$) | diaphragme **ouvert** | **faible** (arrière-plan flou) | portrait |

Elle est aussi plus **grande** quand la focale $f'$ est **courte** et quand le sujet est **loin**.

> **Exemple.** Un portrait à $f/1{,}8$ détache le visage sur un fond volontairement **flou**
> (faible profondeur de champ). Un paysage à $f/16$ rend nets à la fois les fleurs au premier plan
> et la montagne au loin (grande profondeur de champ).

> ⚠️ Ne confonds pas **profondeur de champ** (zone de netteté, liée à $N$) et **mise au point**
> (position de l'objectif qui rend net **un** plan précis). On peut être net sur le sujet avec une
> profondeur de champ faible : tout ce qui est devant ou derrière est flou.

---

## 5. Le capteur CCD / CMOS et la sensibilité ISO

Le **capteur** (technologie **CCD** ou **CMOS**) remplace la pellicule. Sa surface est pavée de
minuscules cellules photosensibles, les **photosites**. Chaque photosite reçoit la lumière d'un
point de l'image, la convertit en **charge électrique** proportionnelle à l'éclairement, puis en
**valeur numérique**. À chaque photosite correspond un **pixel** de l'image finale (*picture
element*). Pour distinguer les couleurs, chaque photosite est couvert d'un **filtre coloré**
(rouge, vert ou bleu) : c'est le lien direct avec le **modèle RVB** vu en « couleur et vision ».
Le **CMOS** (rapide, peu gourmand) domine aujourd'hui ; le **CCD** donne une bonne qualité mais
est plus lent.

La **sensibilité ISO** mesure la réponse du capteur à la lumière. Avec l'ouverture $N$ et le temps
de pose $t$, c'est le **troisième** réglage de l'exposition. **Doubler** l'ISO ($100\to200\to400$…)
**double** la sensibilité (photo deux fois plus claire), mais fait apparaître du **bruit**
numérique.

> **Exemple.** Un capteur de smartphone de $12$ **mégapixels** possède environ $12$ millions de
> photosites. En basse lumière, passer de $100$ à $800$ ISO multiplie la sensibilité par $8$ (sans
> allonger le temps de pose), au prix d'une image plus « granuleuse ».

---

## 6. Définition, résolution et taille d'un pixel

Trois grandeurs à **ne pas confondre**.

**La définition** = **nombre total de pixels** de l'image = largeur $\times$ hauteur (en pixels).

$$\boxed{\text{définition} = L_{px} \times H_{px}}$$

> **Exemple.** Une image de $6000 \times 4000$ pixels a une définition de
> $6000 \times 4000 = 24\,000\,000\ \text{px} = 24\ \text{Mpx}$ ($24$ mégapixels).

**La résolution** = **nombre de pixels par unité de longueur** (une **densité**), en px/cm ou en
**ppp** (points par pouce, *dpi* ; $1\ \text{pouce} = 2{,}54\ \text{cm}$).

$$\boxed{\text{résolution} = \dfrac{\text{nombre de pixels}}{\text{longueur}}}$$

> **Exemple.** Une image de $1800$ pixels de large, imprimée sur $15\ \text{cm}$, a une résolution
> de $\dfrac{1800}{15} = 120\ \text{px/cm}$. Plus la résolution est haute, plus l'image imprimée
> est **fine**.

**La taille d'un pixel** (côté d'un photosite) se déduit des dimensions du capteur et de la
définition :

$$\boxed{\text{taille d'un pixel} = \dfrac{\text{dimension du capteur}}{\text{nombre de pixels sur ce côté}}}$$

> **Exemple.** Capteur « plein format » $36\ \text{mm} \times 24\ \text{mm}$, définition
> $6000 \times 4000$ px. Taille d'un pixel : $\dfrac{36\ \text{mm}}{6000} = 6{,}0\times 10^{-3}\ \text{mm}
> = 6{,}0\ \mu\text{m}$ (idem sur l'autre côté : pixels carrés).

> ⚠️ **Définition ≠ résolution.** La publicité appelle abusivement « résolution » le nombre de
> mégapixels : c'est la **définition**. La vraie **résolution** dépend de la **taille
> d'affichage/impression** — la même image de $24$ Mpx est très fine sur $10\ \text{cm}$ et
> grossière sur $2\ \text{m}$.

---

## 7. Le codage des couleurs : RVB et niveaux de gris

Chaque pixel porte une **couleur**, codée par des nombres.

**Codage RVB.** La couleur est décrite par trois canaux — **R**ouge, **V**ert, **B**leu — chacun
codé sur **1 octet**, soit **8 bits**, soit $2^8 = 256$ niveaux (valeurs entières de $0$ à $255$).

- Un pixel couleur $=$ **3 octets** $=$ **24 bits**.
- Nombre de couleurs possibles : $256^3 = 2^{24} \approx 16{,}7$ **millions** de couleurs.

**Niveaux de gris.** Une image en gris n'a besoin que d'**un** canal : **1 octet** ($256$
nuances de gris, du noir $0$ au blanc $255$) par pixel. Une image en **noir et blanc** pur ne
demande qu'**1 bit** par pixel ($0$ ou $1$).

**La profondeur de couleur** est le nombre de **bits** (ou d'octets) utilisés pour coder la
couleur d'**un** pixel : $24$ bits ($=3$ octets) en RVB, $8$ bits ($=1$ octet) en niveaux de gris.

> **Exemple.** $(255,0,0)$ = rouge pur ; $(0,0,0)$ = noir ; $(255,255,255)$ = blanc ;
> $(128,128,128)$ = gris moyen (trois canaux égaux $\Rightarrow$ gris).

> ⚠️ **$1$ octet $= 8$ bits**, jamais $10$. Et $8$ bits donnent $2^8 = 256$ niveaux, **pas** $8$
> niveaux : c'est **2 puissance** le nombre de bits.

---

## 8. Le poids d'une image

Le **poids** (ou taille en mémoire) d'une image **non compressée** est le produit du nombre de
pixels (la définition) par la profondeur de couleur (les octets par pixel) :

$$\boxed{\text{poids} = \text{définition} \times \text{profondeur de couleur}}$$

soit, en octets : $\text{poids} = (L_{px} \times H_{px}) \times (\text{octets par pixel})$.

**Unités.** On adopte ici la convention **décimale** (SI) :
$$1\ \text{ko} = 10^3\ \text{o}, \qquad 1\ \text{Mo} = 10^6\ \text{o}, \qquad 1\ \text{Go} = 10^9\ \text{o}.$$

> **Exemple.** Image $1920 \times 1080$ en RVB ($3$ octets/pixel), non compressée.
> - Nombre de pixels : $1920 \times 1080 = 2\,073\,600\ \text{px}$.
> - Poids : $2\,073\,600 \times 3 = 6\,220\,800\ \text{o}$, soit $\dfrac{6\,220\,800}{10^6} \approx 6{,}2\ \text{Mo}$.
> - En niveaux de gris ($1$ octet/pixel), elle pèserait trois fois moins : $\approx 2{,}1\ \text{Mo}$.

> ⚠️ **Convention à surveiller.** Certains logiciels comptent $1\ \text{kio} = 2^{10} = 1024\ \text{o}$
> (kibioctet) et $1\ \text{Mio} = 2^{20}\ \text{o}$. Avec cette convention binaire, l'image
> ci-dessus pèse $\dfrac{6\,220\,800}{1024^2} \approx 5{,}9\ \text{Mio}$. **Précise toujours** la
> convention utilisée.

---

## 9. Les formats et la compression

Une image non compressée est **lourde** : on la **compresse** pour réduire le poids du fichier.

| Type | Formats | Principe | Qualité |
|---|---|---|---|
| **Non compressé** | BMP, RAW | tous les pixels stockés tels quels | maximale, très lourd |
| **Compression sans perte** | PNG, GIF | réécriture **réversible** (l'image d'origine est retrouvée à l'identique) | intacte |
| **Compression avec perte** | JPEG | on **supprime** des détails peu visibles, **irréversible** | dégradée, très léger |

Le **taux de compression** compare le poids d'origine au poids compressé :

$$\text{taux de compression} = \dfrac{\text{poids non compressé}}{\text{poids compressé}}.$$

> **Exemple.** L'image de $6{,}2\ \text{Mo}$ ci-dessus, enregistrée en **JPEG** à
> $0{,}62\ \text{Mo}$, a un taux de compression de $\dfrac{6{,}2}{0{,}62} = 10$.

> ⚠️ Le **JPEG** perd de l'information **définitivement** : chaque réenregistrement dégrade encore
> l'image. Pour retoucher plusieurs fois, on préfère un format **sans perte** (PNG) ou le **RAW**.

---

## 10. Le débit binaire

Pour **transmettre** ou **lire** une image (ou une vidéo), on définit le **débit binaire** $D$ :
la **quantité d'information** transmise par **unité de temps**.

$$\boxed{D = \dfrac{Q}{\Delta t}}$$

- $Q$ : quantité d'information, en **bits** ;
- $\Delta t$ : durée, en **secondes** ;
- $D$ : débit, en **bit/s** (bit par seconde, *bps*).

**Attention aux bits et aux octets** : un débit se donne en **bits** par seconde ; un poids de
fichier en **octets**. Pour passer de l'un à l'autre : $\;1\ \text{octet} = 8\ \text{bits}$.

> **Exemple (transfert).** On envoie une image de $6{,}0\ \text{Mo}$ en $\Delta t = 2{,}0\ \text{s}$.
> - Quantité d'information en bits : $Q = 6{,}0\times 10^6 \times 8 = 48\times 10^6\ \text{bits}$.
> - Débit : $D = \dfrac{48\times 10^6}{2{,}0} = 24\times 10^6\ \text{bit/s} = 24\ \text{Mbit/s}$.

> **Exemple (vidéo non compressée).** Vidéo $1920\times 1080$, RVB, $25$ images/s.
> - Poids d'une image : $6\,220\,800\ \text{o}$ ; par seconde : $\times 25 = 155\,520\,000\ \text{o/s}$.
> - En bits : $\times 8 \approx 1{,}24\times 10^9\ \text{bit/s} = 1{,}24\ \text{Gbit/s}$.
> Un tel débit est irréaliste sur un réseau courant : c'est **pourquoi** la vidéo est toujours
> **compressée**.

---

## 11. Tableau récapitulatif

| Notion | À retenir |
|---|---|
| Modèle de l'appareil | objectif = **lentille convergente** ; capteur = **écran** ; image réelle, renversée, réduite |
| Nombre d'ouverture | $\boxed{N = \dfrac{f'}{D}}$, sans unité ; **grand $N$ = petite ouverture** ; lumière $\propto 1/N^2$ |
| Temps de pose | durée $t$ (s) ; long = lumineux mais flou de bougé ; court = fige le mouvement |
| Profondeur de champ | zone de netteté ; **grand $N$ → grande** profondeur ; petit $N$ → fond flou |
| Sensibilité ISO | doubler l'ISO double la sensibilité ; ISO élevée = **bruit** |
| Capteur CCD/CMOS | pavé de **photosites** → 1 photosite = 1 **pixel** ; filtres R, V, B |
| Définition | $\boxed{L_{px}\times H_{px}}$ = nombre total de pixels (Mpx) |
| Résolution | pixels par unité de longueur (px/cm, ppp) — **densité**, dépend de la taille d'affichage |
| Taille d'un pixel | $\dfrac{\text{dimension capteur}}{\text{nb de pixels sur ce côté}}$ |
| Codage RVB | 3 canaux, **1 octet = 8 bits** chacun → **3 octets/pixel** = 24 bits ≈ 16,7 M couleurs |
| Niveaux de gris | 1 octet/pixel (256 nuances) ; N&B pur = 1 bit/pixel |
| Poids | $\boxed{\text{définition}\times\text{profondeur de couleur}}$ ; $1$ Mo $=10^6$ o |
| Compression | sans perte (PNG, réversible) / avec perte (JPEG, irréversible) |
| Débit binaire | $\boxed{D = \dfrac{Q}{\Delta t}}$ en **bit/s** ; $1$ octet $= 8$ bits |

---

## 12. Les erreurs qui coûtent des points

1. **Confondre bit et octet.** $1$ **octet** $= 8$ **bits**. Un poids se compte en octets, un
   débit en bits/s. Oublier le $\times 8$ (ou le diviser à tort) fausse tout calcul de débit.
2. **Inverser le sens du nombre d'ouverture.** $N = f'/D$ : un **grand** $N$ est une **petite**
   ouverture. « Ouvrir le diaphragme » = **diminuer** $N$ et **augmenter** la lumière.
3. **Confondre définition et résolution.** La **définition** est le nombre total de pixels
   ($L\times H$) ; la **résolution** est une densité (px/cm, ppp) qui dépend de la taille
   d'affichage. Les mégapixels d'une pub, c'est la **définition**.
4. **Se tromper de convention ko/Mo.** Précise si $1$ ko $= 10^3$ o (décimal) ou $1$ kio $= 1024$ o
   (binaire). Ne mélange jamais des ko et des Mo sans convertir : $6\,220\,800$ o $= 6{,}2$ Mo,
   pas $6\,220\,800$ Mo.
5. **Oublier les $3$ octets du RVB.** En couleur, chaque pixel pèse $3$ octets, pas $1$. Le poids
   d'une image RVB est **trois fois** celui de la même image en niveaux de gris.
6. **Croire que $8$ bits $= 8$ niveaux.** $8$ bits codent $2^8 = 256$ valeurs. Le nombre de
   niveaux est **$2$ puissance** le nombre de bits, pas le nombre de bits lui-même.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de Sciences physiques et chimiques en laboratoire (SPCL),
enseignement de spécialité de la série STL, classe de première.
BO du 22 janvier 2019 (BO spécial n° 1 du 22 janvier 2019 ; repris au BO spécial n° 8 du
25 juillet 2019).
Fichier de référence interne : docs/programme-stl-spcl.txt, section
« Appareil photo numérique et image numérique (1re) » :
  - Modèle de l'appareil : nombre d'ouverture, temps de pose, profondeur de champ.
  - Capteur CCD/CMOS : sensibilité, résolution ; pixel et ses dimensions.
  - Codage RVB, niveaux de gris ; capacité mémoire, formats ; débit binaire.
Extrait via WebFetch depuis le PDF officiel education.gouv.fr :
« Programme de sciences physiques et chimiques en laboratoire de première STL-251820.pdf ».
À confronter au PDF officiel avant publication.

Prérequis cités conformément à la consigne :
  - « Image : photographie et lentilles » (SPCL, 1re) — objectif = lentille convergente,
    capteur = écran, image réelle sur écran, mise au point (relation de conjugaison).
  - « Image : couleur et vision » (SPCL, 1re) — modèle colorimétrique RVB.

CONVENTIONS RETENUES (à confronter au PDF et à l'usage de l'équipe) :
- 1 octet = 8 bits (ferme).
- Unités de taille : convention DÉCIMALE (SI) 1 ko = 10^3 o, 1 Mo = 10^6 o, 1 Go = 10^9 o,
  employée pour tous les calculs de poids/débit. La convention binaire (1 kio = 1024 o,
  1 Mio = 2^20 o) est signalée comme piège (§9). Vérifier laquelle est attendue dans les sujets
  et TP de l'établissement — les manuels hésitent encore.
- Débit binaire donné en bit/s (avec conversion octet → bit par ×8).
- Profondeur de couleur RVB = 24 bits = 3 octets/pixel ; niveaux de gris = 8 bits = 1 octet.

À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Niveau d'exigence sur le nombre d'ouverture : la relation lumière ∝ 1/N^2 et la notion de
  « stop » (facteur √2) sont-elles attendues, ou seulement N = f'/D et le sens (grand N = peu
  de lumière) ?
- Profondeur de champ : traitement uniquement qualitatif (aucune formule au programme), à
  confirmer ; dépendance à f' et à la distance présentée sans calcul.
- Sensibilité ISO (§5) : présentée comme troisième réglage de l'exposition ; vérifier si le
  « triangle d'exposition » est explicitement au programme ou seulement la notion de sensibilité.
- Distinction définition / résolution : formulation à valider (certaines ressources emploient
  « résolution » pour la définition — usage à trancher avec l'équipe).
- Valeurs numériques et arrondis des exemples (poids 6,2 Mo ; débit vidéo 1,24 Gbit/s ;
  taille de pixel 6,0 µm) recalculés et vérifiés ; homogénéité des chiffres significatifs à
  confirmer.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
