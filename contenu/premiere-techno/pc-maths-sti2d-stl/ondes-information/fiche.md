---
id: 1sti2d-ondes-information
titre: "Ondes et information"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 16
prerequis:
  - Trigonométrie et fonctions sinusoïdales (Première STI2D/STL)
  - Énergie (Première STI2D/STL)
statut: brouillon
relu_par: null
---

# Ondes et information

> Une onde **transporte de l'énergie et de l'information, sans transporter de
> matière**. C'est cette idée qui relie le son, la lumière, la radio et la fibre
> optique — et qui fait de ce thème le socle des télécommunications.

---

## 1. Qu'est-ce qu'une onde ?

Une **onde** est la propagation d'une perturbation dans l'espace.

$$\boxed{\text{transfert d'énergie SANS déplacement de matière}}$$

> **L'image à retenir** : une vague fait monter et descendre un bouchon **sur place** ;
> elle ne l'emporte pas vers le rivage. Ce qui avance, c'est la perturbation.

---

## 2. Deux grandes familles

| | Onde **mécanique** | Onde **électromagnétique** |
|---|---|---|
| Milieu matériel | **indispensable** | **non nécessaire** |
| Se propage dans le vide | ❌ non | ✅ oui |
| Exemples | son, ultrasons, ondes sismiques, vagues | lumière, radio, micro-ondes, rayons X |
| Célérité dans l'air | $\approx 340$ m·s⁻¹ (son) | $3{,}0 \times 10^8$ m·s⁻¹ |

> ⚠️ **Le son ne se propage pas dans le vide** — c'est la différence fondamentale.
> Dans l'espace, aucune explosion ne s'entend.

---

## 3. Longitudinale ou transversale ?

| Type | Direction de la perturbation | Exemple |
|---|---|---|
| **Longitudinale** | **parallèle** à la propagation | le son (compressions/dilatations de l'air) |
| **Transversale** | **perpendiculaire** à la propagation | une corde qu'on secoue, la lumière |

---

## 4. Grandeurs d'une onde périodique

| Grandeur | Symbole | Unité | Nature |
|---|---|---|---|
| Période | $T$ | s | période **temporelle** |
| Fréquence | $f$ | Hz | nombre d'oscillations par seconde |
| Longueur d'onde | $\lambda$ | m | période **spatiale** |
| Célérité | $v$ ou $c$ | m·s⁻¹ | vitesse de propagation |

$$\boxed{f = \frac{1}{T}} \qquad\qquad \boxed{\lambda = v \times T = \frac{v}{f}}$$

> **Ce que signifie $\lambda$** : la distance parcourue par l'onde **pendant une
> période**. C'est une longueur, pas une durée.

> **Exemple.** Un son de $170$ Hz dans l'air :
> $\lambda = \dfrac{340}{170} = 2$ m.

### ⚠️ Le piège du changement de milieu

Quand une onde passe d'un milieu à un autre :

| Grandeur | Évolution |
|---|---|
| **Fréquence** $f$ | **INCHANGÉE** — imposée par la source |
| Célérité $v$ | change |
| Longueur d'onde $\lambda$ | change, puisque $\lambda = v/f$ |

---

## 5. Phénomènes de propagation

| Phénomène | Description |
|---|---|
| **Absorption** | le milieu prélève une partie de l'énergie ; l'onde s'atténue |
| **Réflexion** | l'onde rebondit sur un obstacle (écho, miroir, radar) |
| **Transmission** | l'onde traverse le milieu |

Un **guide d'onde** confine l'onde pour limiter les pertes — la **fibre optique**
guide la lumière par réflexions successives, un câble coaxial guide les ondes radio.

---

## 6. Les ondes sonores

Le son est une onde **mécanique longitudinale** : une succession de compressions et de
dilatations du milieu. Il lui faut donc **toujours** un milieu matériel.

### Célérité selon le milieu

Le son va **plus vite dans les milieux denses**, à l'inverse de l'intuition.

| Milieu | Célérité (ordre de grandeur) |
|---|---|
| Air | $\approx 340$ m·s⁻¹ |
| Eau | $\approx 1\,500$ m·s⁻¹ |
| Métal (acier) | $\approx 5\,000$ m·s⁻¹ |

> **Pourquoi ?** Plus les particules du milieu sont liées entre elles, plus la
> perturbation se transmet vite de proche en proche.

### Ce que l'oreille perçoit

**Deux grandeurs physiques** déterminent la perception d'un son :

| Perception | Grandeur physique |
|---|---|
| **Hauteur** (grave / aigu) | la **fréquence** |
| **Intensité** sonore (fort / faible) | l'**amplitude** |

**Domaine audible** : environ $20$ Hz à $20\,000$ Hz. En dessous, ce sont des
**infrasons** ; au-dessus, des **ultrasons**.

### Puissance et intensité acoustiques

L'**intensité acoustique** $I$ est la puissance sonore reçue **par unité de surface** :

$$\boxed{I = \frac{P}{S}} \qquad I \text{ en W·m}^{-2},\ P \text{ en W},\ S \text{ en m}^2$$

Pour une source qui rayonne dans toutes les directions, l'onde se répartit à la
distance $d$ sur une sphère de surface $S = 4\pi d^2$ :

$$I = \frac{P}{4\pi d^2}$$

> **Ce que dit la formule.** L'intensité décroît comme $1/d^2$ : à **deux fois plus
> loin**, on reçoit **quatre fois moins**. C'est pourquoi on s'éloigne d'une source
> bruyante plutôt que de la couvrir.

> **Exemple.** Une enceinte de $P = 12$ W écoutée à $d = 2$ m :
> $I = \dfrac{12}{4\pi \times 2^2} = \dfrac{12}{50{,}3} \approx 0{,}24$ W·m⁻².

### Mesurer une distance par réflexion

On émet un signal, on mesure la durée $\Delta t$ de l'**aller-retour**, et :

$$\boxed{d = \frac{v \times \Delta t}{2}}$$

Le facteur $2$ vient du trajet double. C'est le principe du **sonar**, du **télémètre
à ultrasons** et de l'**échographie**.

> **Exemple.** Un écho revient après $\Delta t = 0{,}6$ s dans l'air :
> $d = \dfrac{340 \times 0{,}6}{2} = 102$ m.

> ⚠️ **Sans réflexion** — quand émetteur et récepteur sont distincts — il n'y a **pas**
> de facteur $2$ : $d = v \times \Delta t$. Lis bien l'énoncé.

---

## 7. Les ondes électromagnétiques

Toutes se propagent dans le vide à la **même** célérité :

$$\boxed{c = 3{,}00 \times 10^8\ \text{m·s}^{-1}}$$

Elles ne diffèrent que par leur **fréquence** — donc par leur longueur d'onde, puisque
$\lambda = c/f$.

### Ordonner les domaines

C'est **cela** qui est exigible : savoir les classer, dans un sens comme dans l'autre.

| Fréquence croissante → | Ondes radio · micro-ondes · infrarouge · **visible** · ultraviolet · rayons X · rayons gamma |
|---|---|
| **Longueur d'onde croissante →** | rayons gamma · rayons X · ultraviolet · **visible** · infrarouge · micro-ondes · ondes radio |

> **La règle** : plus la fréquence est élevée, plus la longueur d'onde est **courte**,
> et plus l'onde transporte d'énergie. Les deux classements sont donc **inverses** l'un
> de l'autre.

### Ce qu'il faut savoir citer — et ce qu'il ne faut pas apprendre

| | |
|---|---|
| ✅ **À citer** | les longueurs d'onde perceptibles par l'œil : **de $400$ nm environ (violet) à $800$ nm environ (rouge)** |
| ✅ **À citer** | la célérité dans le vide : $3{,}00 \times 10^8$ m·s⁻¹ |
| ❌ **Non exigible** | les valeurs limites des autres plages (gamma, X, UV, IR, radio) |

> **Ne perds pas de temps** à mémoriser les bornes des UV ou des micro-ondes : le
> programme précise qu'elles ne sont **pas exigibles**. Ce qui compte, c'est l'ordre.

---

## 8. Les sources lumineuses

| Source | Ce qui la caractérise |
|---|---|
| **Rayonnement solaire** | spectre continu, très large, du UV à l'IR |
| **Corps chauffé** | spectre continu ; plus le corps est chaud, plus le rayonnement se décale vers les courtes longueurs d'onde |
| **Diode électroluminescente (DEL)** | spectre étroit autour d'une couleur, bon rendement |
| **Lampe spectrale** | spectre de **raies** : quelques longueurs d'onde précises, caractéristiques de l'élément |
| **Laser** | une seule longueur d'onde, faisceau très directif |
| **Lampe UV** | rayonnement invisible, au-delà du violet |

### Les trois caractéristiques d'un laser

Ce sont celles qu'on relève dans une documentation technique :

| Caractéristique | Ce qu'elle dit |
|---|---|
| **Longueur d'onde** | la couleur du faisceau (ex. $650$ nm, rouge) |
| **Puissance** | l'énergie délivrée par seconde (ex. $1$ mW) |
| **Directivité** | l'ouverture du faisceau — très faible, d'où sa portée |

### ⚠️ Risques et précautions

C'est une **exigence du programme**, pas un avertissement de forme.

| Source | Risque | Précaution |
|---|---|---|
| **Laser** | lésion **irréversible** de la rétine : l'œil concentre le faisceau sur un point | ne jamais regarder dans l'axe, ni viser quelqu'un ; ne pas suivre le faisceau dans un miroir |
| **Lampe UV** | brûlures de la peau, lésions de la cornée | lunettes de protection, exposition limitée, peau couverte |
| **Soleil** | idem UV, et éblouissement | ne jamais l'observer directement, encore moins avec un instrument optique |

> **Pourquoi un laser de $1$ mW est dangereux alors qu'une ampoule de $60$ W ne l'est
> pas** : c'est la **directivité**. Toute la puissance du laser arrive concentrée sur
> une surface minuscule, donc l'intensité y est énorme — c'est exactement le $I = P/S$
> du § 6, avec un $S$ très petit.

---

## 9. Ondes et transport de l'information

Une onde est une perturbation qui se propage, et **ses caractéristiques peuvent porter
une information**.

Le principe est toujours le même :

$$\text{émetteur} \longrightarrow \text{onde modulée selon un code} \longrightarrow \text{récepteur}$$

**Moduler**, c'est faire varier une caractéristique de l'onde — son amplitude, sa
fréquence — au rythme de l'information à transmettre. Le récepteur lit ces variations
et reconstitue le message, **à condition de connaître le code** utilisé.

| Étape | Ce qui se passe |
|---|---|
| **Émission** | l'information modifie une caractéristique de l'onde porteuse |
| **Propagation** | l'onde traverse le milieu (air, fibre, câble) |
| **Réception** | le récepteur détecte les variations et décode |

> **Exemples de la vie courante** : la radio (l'onde porteuse est modulée par le son),
> la téléphonie mobile, la télécommande infrarouge, la fibre optique où la lumière est
> allumée et éteinte très vite pour coder des $0$ et des $1$.

> **Le point clé** : ce n'est pas l'onde qui *est* l'information, c'est la **façon dont
> elle est modifiée**. Une porteuse non modulée ne transmet rien.

---

## 10. À retenir absolument

| | |
|---|---|
| Onde | transfert d'**énergie** sans transport de **matière** |
| Mécanique | milieu matériel **indispensable** |
| Électromagnétique | se propage dans le **vide** |
| Longitudinale / transversale | perturbation parallèle / perpendiculaire |
| Relation fondamentale | $\lambda = vT = \dfrac{v}{f}$ |
| Changement de milieu | $f$ **inchangée**, $v$ et $\lambda$ changent |
| Célérité du son | air $340$ · eau $1\,500$ · acier $5\,000$ m·s⁻¹ |
| Célérité de la lumière | $3{,}00 \times 10^8$ m·s⁻¹ |
| Perception d'un son | **fréquence** → hauteur · **amplitude** → intensité |
| Domaine audible | $20$ Hz à $20$ kHz |
| Intensité acoustique | $I = \dfrac{P}{S}$, en W·m⁻² |
| Distance par écho | $d = \dfrac{v\,\Delta t}{2}$ |
| Visible | $\approx 400$ à $800$ nm |
| Transport d'information | onde **modulée selon un code** |

---

## 11. Les erreurs qui coûtent des points

1. **Croire qu'une onde transporte de la matière.**
2. **Penser que le son se propage dans le vide.**
3. **Croire que le son va plus vite dans l'air que dans l'eau** : c'est l'inverse.
4. **Confondre hauteur et intensité** : la hauteur dépend de la **fréquence**,
   l'intensité de l'**amplitude**.
5. **Oublier le facteur $2$** dans une mesure de distance par écho — ou l'ajouter
   quand il n'y a pas de réflexion.
6. **Croire que la fréquence change** quand l'onde change de milieu : c'est la
   **célérité** et la **longueur d'onde** qui changent.
7. **Apprendre par cœur les bornes du spectre** : seules celles du visible sont
   exigibles.
8. **Négliger le risque d'un laser de faible puissance** : c'est la directivité qui le
   rend dangereux, pas la puissance affichée.
9. **Confondre l'onde et l'information** : c'est la **modulation** qui porte le message.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », thème « Ondes et information » — trois sous-parties : « Notion
d'onde », « Ondes sonores », « Ondes électromagnétiques ».

RÉÉCRITURE DU 2026-08-10. La version précédente avait été bâtie sur l'UNION de deux
extractions partielles du PDF. Celui-ci a été réextrait avec app/scripts/extraire-pdf.mjs :
les trois sous-parties sont désormais intégralement lisibles. Les sections 1 à 5, déjà
bien adossées au texte, sont conservées ; la suite est réécrite.

Ce que la relecture du texte officiel a changé :

- SOURCES LUMINEUSES : bloc de contenus entier, totalement absent de la version
  précédente. Le programme liste « rayonnement solaire, corps chauffés, diodes
  électroluminescentes, lasers, lampes spectrales, lampes UV », exige d'« extraire
  d'une documentation fournie et exploiter les principales caractéristiques (longueur
  d'onde, puissance, directivité) d'un laser », et de « citer les risques et les
  précautions associés à l'utilisation de sources lumineuses variées ». Section 8
  ajoutée.
- TRANSPORT DE L'INFORMATION : la version précédente traitait BANDE PASSANTE et
  ATTÉNUATION, qui n'apparaissent nulle part dans le texte, et ne mentionnait pas la
  modulation. Le programme demande d'« associer le transport de l'information à la
  propagation entre l'émetteur et le récepteur d'une onde MODULÉE SELON UN CODE
  DONNÉ ». Section 9 réécrite autour de la modulation. La question ouverte de la
  version précédente — « la modulation est-elle au programme ? » — est donc tranchée :
  oui, c'est même le cœur de la capacité. En revanche AM et FM ne sont pas nommées :
  le principe est exigible, pas la typologie.
- INTENSITÉ ACOUSTIQUE : le programme exige d'« exploiter la relation entre la
  puissance et l'intensité acoustiques ». C'est une relation QUANTITATIVE, absente de
  la version précédente, qui mentionnait à la place le niveau en DÉCIBELS — lequel
  n'apparaît nulle part dans le texte. Le décibel a été retiré, I = P/S ajouté.
  La question ouverte « décibels quantitatifs ou qualitatifs ? » est tranchée : ni
  l'un ni l'autre, ce n'est pas la grandeur du programme.
- PERCEPTION DU SON : le texte impose « identifier et citer LES DEUX grandeurs
  influençant la perception sensorielle d'un son : amplitude et fréquence ». La
  version précédente en listait trois, en ajoutant le TIMBRE (harmoniques), qui n'est
  pas dans le texte. Retiré.
- CÉLÉRITÉ DU SON : le programme demande d'« évaluer la célérité du son dans quelques
  milieux : air, eau, métal ». Seul l'air était traité. Table ajoutée.
- DISTANCES PAR PROPAGATION : la capacité vise « avec OU SANS réflexion ». Le cas sans
  réflexion (pas de facteur 2) a été ajouté.
- SPECTRE ÉLECTROMAGNÉTIQUE : les repères pour l'enseignement précisent que « les
  valeurs limites des différentes plages [...] NE SONT PAS EXIGIBLES ». En revanche
  « citer les longueurs d'ondes perceptibles par l'œil humain » l'est. La fiche
  distingue désormais explicitement les deux, ce qui répond à la question ouverte de
  la version précédente.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La forme exacte attendue pour « la relation entre puissance et intensité
  acoustiques » (§ 6) : le texte ne l'écrit pas. I = P/S, et le cas sphérique
  I = P/(4πd²), sont la lecture la plus naturelle — à confirmer.
- Les bornes du visible (400–800 nm) : le programme demande de les citer sans donner
  de valeurs. 400–800 est l'usage ; certains manuels retiennent 380–780.
- Les ordres de grandeur de célérité (eau 1500, acier 5000 m·s⁻¹) sont des valeurs
  usuelles, non fournies par le texte.
- Le programme mentionne « mettre en œuvre un guide d'onde » comme activité
  expérimentale : vérifier si la fiche doit en dire davantage que le § 5.

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
