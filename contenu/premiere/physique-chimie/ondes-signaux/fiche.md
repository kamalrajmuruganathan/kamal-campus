---
id: 1spe-pc-ondes-signaux
titre: "Ondes et signaux"
voie: generale
niveau: premiere
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "Ondes et signaux"
duree_lecture_min: 13
prerequis:
  - Ondes et signaux (Seconde)
  - Lentilles convergentes (Seconde)
statut: brouillon
relu_par: null
---

# Ondes et signaux

> La Seconde décrivait les signaux ; la Première introduit la notion d'**onde** et sa
> propagation. Une idée neuve et contre-intuitive : l'onde transporte de l'**énergie**, mais
> **pas de matière**.

---

## 1. Ondes mécaniques progressives

### Définition

Une **onde mécanique progressive** est la propagation d'une perturbation dans un milieu
matériel, **sans transport de matière**.

> **Exemple.** Une vague fait monter et descendre un bouchon sur place ; elle ne l'emporte pas
> vers le rivage. Ce qui se propage, c'est la perturbation et son énergie.

### Retard

Si un point $\mathrm{M}$ est à la distance $d$ de la source, il reproduit son mouvement avec
un **retard**

$$\boxed{\tau = \frac{d}{v}}$$

### Ondes transversales et longitudinales

| Type | Direction de la perturbation | Exemple |
|---|---|---|
| **Transversale** | perpendiculaire à la propagation | corde, vague |
| **Longitudinale** | parallèle à la propagation | son, ressort comprimé |

---

## 2. Ondes périodiques

Une onde **périodique** reproduit le même motif à intervalles réguliers.

| Grandeur | Symbole | Unité |
|---|---|---|
| Période temporelle | $T$ | s |
| Fréquence | $f = \dfrac{1}{T}$ | Hz |
| Longueur d'onde | $\lambda$ | m |
| Célérité | $v$ | m·s⁻¹ |

### La relation fondamentale

$$\boxed{\lambda = v \times T = \frac{v}{f}}$$

> **Ce qu'il faut comprendre** : la longueur d'onde est la **distance parcourue pendant une
> période**. C'est une **période spatiale**, à ne pas confondre avec $T$ qui est temporelle.

> ⚠️ **Quand une onde change de milieu, sa fréquence ne change PAS** — elle est imposée par la
> source. C'est la célérité qui change, donc la longueur d'onde aussi.

---

## 3. Ondes sonores

$$v_{\text{air}} \approx 340\ \text{m·s}^{-1}$$

Le son est une onde **longitudinale** : il consiste en une succession de compressions et de
dilatations de l'air.

| Perception | Grandeur physique |
|---|---|
| Hauteur (grave / aigu) | fréquence |
| Intensité (fort / faible) | amplitude, niveau en dB |
| Timbre | harmoniques |

---

## 4. Lentille mince convergente

C'est le cœur du thème en première : passer de la description qualitative vue en seconde
aux **relations algébriques** qui donnent la position et la taille de l'image.

### Les deux relations

Elles sont **fournies** le jour de l'épreuve — ce qu'on attend, c'est de savoir les
exploiter. Toutes les longueurs sont des **grandeurs algébriques** : elles ont un signe.

$$\boxed{\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{\overline{OF'}}}
\qquad\qquad
\boxed{\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}}$$

| Symbole | Ce qu'il désigne |
|---|---|
| $\overline{OA}$ | position de l'**objet** (négative : l'objet est avant la lentille) |
| $\overline{OA'}$ | position de l'**image** |
| $\overline{OF'} = f'$ | **distance focale** de la lentille |
| $\gamma$ | **grandissement**, sans unité |

### Lire le résultat

Le signe des grandeurs obtenues dit **tout** de la nature de l'image :

| Signe | Image |
|---|---|
| $\overline{OA'} > 0$ | **réelle** — on peut la recueillir sur un écran |
| $\overline{OA'} < 0$ | **virtuelle** — visible à l'œil, pas sur un écran |
| $\gamma > 0$ | **droite** — même sens que l'objet |
| $\gamma < 0$ | **renversée** |
| $\lvert \gamma \rvert > 1$ | agrandie |
| $\lvert \gamma \rvert < 1$ | réduite |

> **Exemple.** Objet à $30$ cm devant une lentille de distance focale $10$ cm, donc
> $\overline{OA} = -30$ cm et $f' = 10$ cm.
> $\dfrac{1}{\overline{OA'}} = \dfrac{1}{10} + \dfrac{1}{-30} = \dfrac{3-1}{30} = \dfrac{2}{30}$,
> d'où $\overline{OA'} = 15$ cm.
> Puis $\gamma = \dfrac{15}{-30} = -0{,}5$.
>
> L'image est donc **réelle** (positif), **renversée** ($\gamma < 0$) et **deux fois plus
> petite** que l'objet.

> ⚠️ **Le piège des signes.** $\overline{OA}$ est **négatif** pour un objet réel placé avant
> la lentille. L'oublier inverse tout le résultat. Et attention au signe **moins** dans la
> relation de conjugaison : ce n'est pas une somme.

> **Estimer une distance focale** : en visant un objet très éloigné, les rayons arrivent
> quasi parallèles et l'image se forme dans le plan focal. La distance lentille-écran donne
> alors directement $f'$.

> **Pour aller plus loin — hors programme de première.** Deux lentilles convergentes
> associées forment une **lunette astronomique** : un objectif de grande distance focale,
> un oculaire de courte distance focale, et un grossissement $G = f'_1/f'_2$. Cette étude
> relève de la terminale.

---

## 5. Images et couleurs

### Synthèse additive (lumières)

Rouge + Vert + Bleu = **blanc**. C'est le principe des écrans.

### Synthèse soustractive (matières colorées)

Cyan, magenta, jaune. Un objet apparaît d'une couleur parce qu'il **absorbe** les autres.

> **Exemple.** Un objet rouge éclairé en lumière blanche diffuse le rouge et absorbe le reste.
> Éclairé en lumière verte, il apparaît **noir** — il n'a rien à diffuser.

### Couleur d'une espèce chimique

Une espèce absorbe certaines longueurs d'onde ; sa couleur perçue est la **couleur
complémentaire** de celle qu'elle absorbe. Le spectre d'absorption permet de l'identifier.

---

## 6. À retenir absolument

| | |
|---|---|
| Onde | transporte de l'**énergie**, pas de matière |
| Retard | $\tau = \dfrac{d}{v}$ |
| Relation fondamentale | $\lambda = vT = \dfrac{v}{f}$ |
| Changement de milieu | $f$ **inchangée**, $v$ et $\lambda$ changent |
| Son | onde **longitudinale**, $\approx 340$ m·s⁻¹ |
| Lunette afocale | $\mathrm{F}'_1 = \mathrm{F}_2$ |
| Grossissement | $G = \dfrac{f'_1}{f'_2}$ |

---

## 7. Les erreurs qui coûtent des points

1. **Croire qu'une onde transporte de la matière.** Elle transporte de l'énergie.
2. **Confondre période $T$ et longueur d'onde $\lambda$** : l'une est un temps, l'autre une
   distance.
3. **Croire que la fréquence change** quand l'onde change de milieu. Elle est imposée par la
   source.
4. **Confondre ondes transversale et longitudinale** : le son est longitudinal.
5. **Inverser le grossissement** en écrivant $\dfrac{f'_2}{f'_1}$.
6. **Oublier de convertir** les centimètres en mètres dans les calculs optiques.
7. **Croire qu'un objet rouge reste rouge sous n'importe quel éclairage** : sous une lumière
   verte, il paraît noir.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de première générale (spécialité),
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc1re.pdf, thème « Ondes et signaux »,
ligne 2676 du .txt extrait ; « Ondes mécaniques » ligne 2680 ; « Ondes mécaniques
périodiques. Ondes sinusoïdales » lignes 2773-2774 ; second bloc ligne 3347).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La lunette astronomique est-elle bien au programme de PREMIÈRE ? Elle y figurait dans le
  programme 2019 — à confirmer.
- Le programme mentionne « Ondes sinusoïdales » : l'expression mathématique d'une onde
  sinusoïdale est-elle exigible, ou seulement l'approche graphique ?
- La diffraction et les interférences relèvent-elles de la première ou de la terminale ?
  Je ne les ai PAS incluses.
- Le niveau d'intensité sonore avec la formule logarithmique est-il exigible en première ?
- La relation de conjugaison des lentilles est-elle au programme de première ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
