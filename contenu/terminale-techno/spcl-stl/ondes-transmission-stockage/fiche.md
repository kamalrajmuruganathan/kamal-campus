---
id: tale-stl-spcl-ondes-transmission-stockage
titre: "Ondes : transmettre, stocker, lire et afficher"
voie: technologique
niveau: terminale-techno
parcours: spcl-stl
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — SPCL, série STL, classe terminale"
duree_lecture_min: 22
prerequis:
  - "Ondes : mécaniques, électromagnétiques et spectres (Terminale STL SPCL)"
  - Ondes électromagnétiques, spectre et relation $\lambda = c/f$ (Première / Terminale STL)
  - Puissances de 10, préfixes k/M/G, chiffres significatifs (Seconde / Première)
  - Fonction logarithme décimal $\log$ (Terminale)
statut: brouillon
relu_par: null
---

# Ondes : transmettre, stocker, lire et afficher

> Une chanson, une photo, une vidéo : tout ce qui circule aujourd'hui est une suite de
> **0 et de 1**. Ce chapitre suit la chaîne complète de l'information : **numériser** un
> signal, mesurer son **débit**, le **transmettre** par un canal (fibre, câble, ondes
> hertziennes), le **stocker** sur un disque optique, puis l'**afficher** sur un écran. Le
> fil conducteur du chapitre précédent — les ondes EM et la relation $\lambda = c/f$ — sert
> ici d'outil : c'est un **laser** qui lit un CD, ce sont des **ondes hertziennes** qui
> portent la 5G. Le vrai piège n'est pas la physique : ce sont les **unités** (bit / octet,
> k / M / G). On y revient sans arrêt.

---

## 1. Numériser un signal : échantillonnage

Un signal **analogique** (une tension, un son) varie de façon **continue** dans le temps.
Pour le traiter et le stocker, on le transforme en une suite de nombres : c'est la
**numérisation**. Elle se fait en deux temps : **échantillonner**, puis **quantifier**.

### Échantillonnage

**Échantillonner**, c'est mesurer la valeur du signal à des instants réguliers, séparés par
la **période d'échantillonnage** $T_e$. On ne garde plus une courbe, mais une suite de points.

$$\boxed{f_e = \frac{1}{T_e}}\qquad f_e \text{ en Hz},\ T_e \text{ en s}$$

$f_e$ est la **fréquence d'échantillonnage** : le nombre d'échantillons prélevés par seconde.

> **Exemple.** Le son d'un CD est échantillonné à $f_e = 44{,}1\ \text{kHz}
> = 44\,100\ \text{Hz}$ : on mesure la tension $44\,100$ fois par seconde. La période
> d'échantillonnage vaut $T_e = \dfrac{1}{f_e} = \dfrac{1}{44\,100} = 2{,}27\times 10^{-5}\ \text{s}
> \approx 23\ \text{µs}$.

### Le critère de Shannon (Nyquist)

Pour reconstituer fidèlement le signal, il faut échantillonner **assez souvent** :

$$\boxed{f_e \ge 2\,f_{\max}}$$

où $f_{\max}$ est la fréquence la plus élevée présente dans le signal.

> **Exemple.** L'oreille humaine entend jusqu'à $f_{\max} \approx 20\ \text{kHz}$. Il faut
> donc $f_e \ge 40\ \text{kHz}$ : le choix de $44{,}1\ \text{kHz}$ pour le CD respecte le
> critère avec une marge.

> ⚠️ Échantillonner **trop lentement** ($f_e < 2 f_{\max}$) déforme le signal : des
> fréquences fausses apparaissent (**repliement de spectre**). On ne peut plus le
> reconstituer.

---

## 2. Numériser un signal : quantification et résolution

Une fois l'instant choisi, il reste à **coder** la valeur mesurée. **Quantifier**, c'est
attribuer à chaque échantillon une valeur parmi un **nombre fini** de niveaux, codée sur
$n$ bits.

$$\boxed{N = 2^{n}}\qquad N = \text{nombre de niveaux},\ n = \text{nombre de bits}$$

Le **pas de quantification** (ou **résolution**, ou **quantum**) $q$ est le plus petit écart
de tension que le codage peut distinguer. Pour une plage de mesure (un **calibre**) d'étendue
$U$ :

$$\boxed{q = \frac{U}{2^{n}}}\qquad q \text{ et } U \text{ en volts (V)}$$

Plus $n$ est **grand**, plus $N$ est grand, plus $q$ est **petit** : la numérisation est plus
**fine**, plus fidèle.

> **Exemple.** Un convertisseur code une tension sur la plage $U = 5{,}0\ \text{V}$ avec
> $n = 12$ bits. Il distingue $N = 2^{12} = 4096$ niveaux, et sa résolution vaut
> $q = \dfrac{5{,}0}{4096} = 1{,}2\times 10^{-3}\ \text{V} = 1{,}2\ \text{mV}$. Passer à
> $n = 8$ bits ne donnerait que $256$ niveaux et $q = \dfrac{5{,}0}{256} \approx 20\ \text{mV}$ :
> beaucoup plus grossier.

> ⚠️ **Ne confonds pas les deux étapes.** L'**échantillonnage** découpe le **temps**
> (fréquence $f_e$) ; la **quantification** découpe l'**amplitude** (nombre de bits $n$). Le
> son du CD : $f_e = 44{,}1\ \text{kHz}$ (temps) **et** $n = 16$ bits (amplitude).

| Étape | Ce qu'elle découpe | Grandeur clé |
|---|---|---|
| Échantillonnage | le **temps** | $f_e$ (Hz), $T_e$ (s) |
| Quantification | l'**amplitude** | $n$ (bits), $N = 2^n$, $q$ (V) |

---

## 3. Le débit binaire

### Définition

Le **débit binaire** $D$ mesure la quantité d'information transmise ou lue par unité de temps.

$$\boxed{D = \frac{Q}{\Delta t}}\qquad D \text{ en bit/s},\ Q \text{ en bits},\ \Delta t \text{ en s}$$

$Q$ est la **quantité de données** (en bits), $\Delta t$ la **durée** (en secondes). On en
tire aussi bien la durée qu'une taille de fichier : $Q = D \times \Delta t$.

> **Exemple.** Un fichier de $Q = 24\ \text{Mbit}$ se télécharge en $\Delta t = 3{,}0\ \text{s}$.
> Le débit vaut $D = \dfrac{24\times 10^{6}}{3{,}0} = 8{,}0\times 10^{6}\ \text{bit/s}
> = 8{,}0\ \text{Mbit/s}$.

### Le débit d'un signal numérisé

Pour un signal échantillonné à $f_e$, codé sur $n$ bits, avec $k$ **voies** (1 en mono,
2 en stéréo) :

$$\boxed{D = f_e \times n \times k}$$

> **Exemple (CD audio).** $f_e = 44{,}1\ \text{kHz}$, $n = 16$ bits, $k = 2$ voies (stéréo) :
> $$D = 44\,100 \times 16 \times 2 = 1\,411\,200\ \text{bit/s} \approx 1{,}41\ \text{Mbit/s}.$$

---

## 4. Bits, octets, et les préfixes : le vrai piège

Tout se joue ici. Deux confusions font perdre le plus de points.

### Bit et octet

$$\boxed{1\ \text{octet} = 8\ \text{bits}}\qquad (\text{en anglais : } 1\ \text{byte} = 8\ \text{bits})$$

Les **débits** se donnent en **bit/s** (b/s) ; les **tailles de fichiers** en **octets** (o).
Pour passer de l'un à l'autre, on **multiplie ou divise par 8**.

> **Exemple.** Une «box» annonce $D = 8\ \text{Mbit/s}$. En octets, cela fait
> $\dfrac{8}{8} = 1\ \text{Mo/s}$ : un fichier de $1\ \text{Mo}$ arrive en une seconde, pas de
> $8\ \text{Mo}$.

### Les préfixes k, M, G

Pour les débits et les tailles courantes, on utilise les préfixes **décimaux** (SI) :

$$1\ \text{k} = 10^{3}\qquad 1\ \text{M} = 10^{6}\qquad 1\ \text{G} = 10^{9}\qquad 1\ \text{T} = 10^{12}$$

Ainsi $1\ \text{Mbit/s} = 10^{6}\ \text{bit/s}$ et $1\ \text{Go} = 10^{9}\ \text{octets}$.

> ⚠️ **Le préfixe binaire.** Les systèmes d'exploitation comptent parfois en puissances de
> $2$ : $1\ \text{kio} = 2^{10} = 1024$ octets (kibioctet), $1\ \text{Mio} = 2^{20}$ octets.
> C'est pour cela qu'un disque «de $500\ \text{Go}$» n'affiche que «$465\ \text{Gio}$». **Par
> défaut, dans ce cours, k / M / G valent $10^{3}$ / $10^{6}$ / $10^{9}$** ; on précise «kio,
> Mio…» quand on veut les puissances de $2$.

### Méthode — taille d'un fichier audio

> **Exemple (CD audio, morceau de 3 min).** On reprend $D = 1{,}41\ \text{Mbit/s}$.
> 1. Durée en secondes : $\Delta t = 3\ \text{min} = 180\ \text{s}$.
> 2. Quantité de bits : $Q = D \times \Delta t = 1{,}411\,200\times 10^{6} \times 180
>    = 2{,}54\times 10^{8}\ \text{bits}$.
> 3. En octets : $\dfrac{2{,}54\times 10^{8}}{8} = 3{,}18\times 10^{7}\ \text{octets}
>    \approx 32\ \text{Mo}$.
>
> Un morceau non compressé « pèse » donc une trentaine de mégaoctets — d'où l'intérêt de la
> **compression** (MP3).

---

## 5. Transmettre : les canaux

Le **canal de transmission** est le support qui porte le signal de l'émetteur au récepteur.
On distingue deux familles.

### Canal guidé (transmission filaire)

Le signal est **confiné** dans un support matériel.

| Support | Ce qui se propage | Atouts |
|---|---|---|
| **Câble électrique** (cuivre : paire torsadée, coaxial) | un signal **électrique** | simple, peu coûteux |
| **Fibre optique** | un signal **lumineux** (laser IR) guidé par réflexion totale | très faible atténuation, très haut débit, insensible aux perturbations EM |

> **Exemple.** Dans une fibre, la lumière reste piégée dans le cœur par **réflexion totale**
> et parcourt des dizaines de kilomètres. C'est le support des réseaux à très haut débit
> (« fibre » de l'opérateur, liaisons intercontinentales sous-marines).

### Canal libre (transmission non guidée)

Le signal se propage **librement** dans l'espace (air, vide) sous forme d'**ondes
hertziennes** — des ondes **électromagnétiques** (radio, micro-ondes).

> **Exemple.** Radio FM, télévision hertzienne, Wi-Fi, 4G/5G, GPS, liaisons satellites : tous
> utilisent des ondes hertziennes. Pas de câble, mais une sensibilité aux **obstacles** et
> aux **perturbations**, et un partage des **fréquences** strictement réglementé.

---

## 6. Transmettre : atténuation et portée

En se propageant, un signal **s'affaiblit** : sa puissance diminue. Cet affaiblissement est
l'**atténuation**, mesurée en **décibels (dB)** à partir du rapport des puissances d'entrée
$P_e$ et de sortie $P_s$ :

$$\boxed{A_{\text{dB}} = 10\,\log\!\left(\frac{P_e}{P_s}\right)}$$

Une atténuation **positive** signifie que le signal a **diminué** ($P_s < P_e$). L'échelle
est **logarithmique** : $+3\ \text{dB}$ ≈ puissance divisée par $2$, $+10\ \text{dB}$ =
divisée par $10$, $+20\ \text{dB}$ = divisée par $100$.

Pour un câble ou une fibre, l'atténuation croît avec la longueur $L$ selon un **coefficient
linéique** $\alpha$ (en dB/km) :

$$\boxed{A_{\text{dB}} = \alpha \times L}$$

> **Exemple (fibre optique).** Une fibre a $\alpha = 0{,}20\ \text{dB/km}$. Sur $L = 50\ \text{km}$ :
> $A = 0{,}20 \times 50 = 10\ \text{dB}$. La puissance de sortie est donc
> $P_s = \dfrac{P_e}{10^{A/10}} = \dfrac{P_e}{10^{1}} = \dfrac{P_e}{10}$ : il reste **un
> dixième** de la puissance émise. Un câble coaxial, lui, atténue bien plus vite.

La **portée** est la distance maximale avant que le signal, trop atténué, ne soit plus
exploitable par le récepteur. La très faible atténuation de la fibre explique sa **grande
portée** face au cuivre.

> ⚠️ **Le décibel n'est pas linéaire.** Additionner des dB revient à **multiplier** des
> rapports de puissance. $10\ \text{dB} + 10\ \text{dB} = 20\ \text{dB}$, soit une puissance
> divisée par $10 \times 10 = 100$ — pas par $20$.

---

## 7. Stocker : le disque optique (CD, DVD, Blu-ray)

L'information est gravée le long d'une **piste en spirale** unique, sous forme d'une
alternance de :

- **cuvettes** (creux, en anglais *pits*),
- **plats** ou **plateaux** (surfaces planes, *lands*).

### Lecture par laser

Un faisceau **laser** balaie la piste. La lumière se **réfléchit** différemment sur une
cuvette et sur un plat : une **photodiode** capte l'intensité réfléchie et la traduit en
**signal binaire**. Ce sont les **transitions** cuvette ↔ plat qui codent les bits.

### La longueur d'onde fixe la capacité

Plus la longueur d'onde du laser est **courte**, plus les cuvettes peuvent être **petites et
rapprochées**, donc plus la **densité** de données — et la **capacité** — est grande.

| Disque | Laser | $\lambda$ | Capacité typique |
|---|---|---|---|
| **CD** | infrarouge | $780\ \text{nm}$ | $\approx 700\ \text{Mo}$ |
| **DVD** | rouge | $650\ \text{nm}$ | $\approx 4{,}7\ \text{Go}$ |
| **Blu-ray** | bleu-violet | $405\ \text{nm}$ | $\approx 25\ \text{Go}$ |

> **Exemple.** Le passage du DVD (rouge, $650\ \text{nm}$) au Blu-ray (bleu, $405\ \text{nm}$)
> réduit $\lambda$, donc la taille des cuvettes : on passe de $4{,}7\ \text{Go}$ à
> $25\ \text{Go}$ sur le même diamètre de disque. C'est directement la physique des ondes du
> chapitre précédent ($\lambda$ plus petite → détail plus fin).

---

## 8. Afficher : pixels et sous-pixels RVB

Un écran est une **matrice de pixels** (*picture elements*). Chaque **pixel** est composé de
trois **sous-pixels** : **Rouge, Vert, Bleu (RVB)**. En dosant l'intensité de chacun,
la **synthèse additive** recompose n'importe quelle couleur (R + V + B au maximum = blanc ;
tous éteints = noir).

- La **définition** est le nombre de pixels : largeur × hauteur (ex. Full HD :
  $1920 \times 1080$).
- La **résolution** est le nombre de pixels par unité de longueur (en ppp / dpi) : elle dit
  la **finesse**, pas le nombre total.
- Coder chaque sous-pixel sur $8$ bits ($256$ niveaux) donne $24$ bits par pixel, soit
  $256^{3} \approx 16{,}7$ millions de couleurs (**couleur vraie**).

### Méthode — taille d'une image non compressée

$$\text{taille} = (\text{nombre de pixels}) \times (\text{nombre d'octets par pixel})$$

> **Exemple (image Full HD, 24 bits).** Nombre de pixels :
> $1920 \times 1080 = 2{,}0736\times 10^{6}$ pixels. À $24$ bits $= 3$ octets par pixel :
> $$\text{taille} = 2{,}0736\times 10^{6} \times 3 = 6{,}22\times 10^{6}\ \text{octets}
> \approx 6{,}2\ \text{Mo}.$$
> Une seconde de vidéo à $25$ images/s « pèserait » $25$ fois plus ($\approx 155\ \text{Mo/s}$)
> sans compression — d'où, là encore, l'importance des formats compressés.

> ⚠️ **Définition ≠ résolution.** La **définition** est un nombre **total** de pixels
> ($1920\times1080$) ; la **résolution** est une **densité** (ppp). Deux écrans de même
> définition mais de tailles différentes n'ont pas la même résolution.

---

## 9. Tableau récapitulatif

| | |
|---|---|
| Fréquence d'échantillonnage | $f_e = \dfrac{1}{T_e}$ (Hz) |
| Critère de Shannon | $f_e \ge 2\,f_{\max}$ |
| Nombre de niveaux | $N = 2^{n}$ |
| Pas de quantification | $q = \dfrac{U}{2^{n}}$ (V) |
| Débit binaire | $D = \dfrac{Q}{\Delta t}$ (bit/s) ; $\;D = f_e\, n\, k$ |
| Bit / octet | $1\ \text{octet} = 8\ \text{bits}$ |
| Préfixes (SI) | $\text{k}=10^{3}$, $\text{M}=10^{6}$, $\text{G}=10^{9}$ (binaire : kio $=2^{10}$) |
| Canaux | guidé (câble, **fibre**) · libre (**ondes hertziennes**) |
| Atténuation | $A_{\text{dB}} = 10\log\!\left(\dfrac{P_e}{P_s}\right) = \alpha L$ |
| Disque optique | cuvettes / plats, lecture **laser** ; $\lambda\downarrow \Rightarrow$ capacité $\uparrow$ |
| Pixel | 3 sous-pixels **RVB**, synthèse additive |
| Image | taille $=$ (nb pixels) $\times$ (octets/pixel) |

---

## 10. Les erreurs qui coûtent des points

1. **Confondre bit et octet.** $1\ \text{octet} = 8\ \text{bits}$. Un débit «$8\ \text{Mbit/s}$»
   ne fait que $1\ \text{Mo/s}$. Oublier le facteur $8$ fausse toute taille de fichier.
2. **Mélanger k / M / G décimaux et binaires.** Par défaut $\text{M} = 10^{6}$, pas
   $2^{20}$. N'utilise $1024$ que si l'énoncé parle de **kio / Mio / Gio**.
3. **Confondre échantillonnage et quantification.** $f_e$ découpe le **temps** ; $n$ bits
   découpent l'**amplitude**. Ce sont deux réglages indépendants.
4. **Additionner les décibels comme des nombres ordinaires.** L'échelle est
   **logarithmique** : $+10\ \text{dB}$ divise la puissance par $10$, $+20\ \text{dB}$ par
   $100$ (pas par $20$).
5. **Ne pas convertir les durées.** Une durée en minutes doit passer en **secondes** avant
   d'entrer dans $D = Q/\Delta t$. $3\ \text{min} = 180\ \text{s}$.
6. **Confondre définition et résolution d'un écran.** La définition est un **nombre total**
   de pixels ; la résolution est une **densité** (ppp).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de SPCL (Sciences physiques et chimiques en laboratoire),
enseignement de spécialité de la série STL, classe terminale — BO spécial n°8 du 25 juillet
2019. Fichier docs/programme-stl-spcl.txt, section « Ondes : transmettre, stocker, lire et
afficher (Tale) » (lignes 82-84) :
  - Numérisation d'un signal ; débit binaire.
  - Transmission (guidée, libre), stockage optique, affichage.
Le libellé du programme est TRÈS condensé : le détail des capacités exigibles
(échantillonnage/quantification, atténuation en dB, cuvettes/plats, sous-pixels RVB) a été
reconstitué à partir de la consigne de production et des usages STL, à CONFRONTER au document
d'accompagnement / au PDF officiel avant publication.
PDF officiel Terminale SPCL :
https://cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/16/7/spe260_annexe3_1159167.pdf
Extraction résumée via WebFetch — À CONFRONTER AU PDF OFFICIEL.
Prérequis cité : chapitre « Ondes : mécaniques, électromagnétiques et spectres » du même
parcours (id tale-stl-spcl-ondes-mecaniques-em-spectres), pour λ = c/f et le spectre EM.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR DE LA MATIÈRE :
- Pas de quantification : j'ai retenu q = U / 2^n (convention STL dominante). Certaines
  références écrivent q = U / (2^n − 1) (les 2^n niveaux bornent la plage aux extrémités).
  À aligner sur la convention de l'établissement — impacte les corrigés (exo 3, QCM Q6).
- Critère de Shannon : formulé fe ≥ 2 fmax. Vérifier s'il est exigible quantitativement en
  Tale SPCL ou seulement cité qualitativement (notion de repliement).
- Atténuation : formule 10 log(Pe/Ps) pour un rapport de PUISSANCES. Si l'épreuve raisonne
  en amplitudes/tensions, le facteur est 20 log — à vérifier. Coefficient linéique α en dB/km
  supposé exigible (calcul fibre).
- Convention préfixes : j'ai posé k/M/G = 10^3/10^6/10^9 par défaut, kio/Mio/Gio = 2^10/2^20.
  Confirmer que c'est bien la convention attendue (télécom décimal vs stockage binaire).
- Capacités des disques (700 Mo / 4,7 Go / 25 Go) et longueurs d'onde des lasers
  (780/650/405 nm) : valeurs usuelles, à vérifier comme « ordres de grandeur » et non comme
  valeurs à connaître par cœur.
- Débit CD audio : 44,1 kHz × 16 bits × 2 voies = 1 411 200 bit/s ≈ 1,41 Mbit/s (vérifié).
  Taille d'un morceau de 3 min ≈ 32 Mo non compressé (vérifié, ÷8 pour les octets).
- Codage couleur 24 bits (8 bits/sous-pixel, 16,7 M de couleurs) : standard, à confirmer
  exigible.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel ou à un site.
Statut : brouillon, non relu.
-->
