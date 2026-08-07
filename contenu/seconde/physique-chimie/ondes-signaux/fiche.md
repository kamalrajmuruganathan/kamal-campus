---
id: 2nde-pc-ondes-signaux
titre: "Ondes et signaux"
voie: generale
niveau: seconde
parcours: tronc-commun
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019"
theme: "Ondes et signaux"
duree_lecture_min: 13
prerequis:
  - Lumière et vision (cycle 4)
  - Circuits électriques (cycle 4)
statut: brouillon
relu_par: null
---

# Ondes et signaux

> Trois sujets réunis par une idée commune : **transporter de l'information**. La lumière qui
> traverse une lentille, le son qui se propage, le courant qui parcourt un capteur — chacun
> porte un signal.

---

## 1. Propagation de la lumière

La lumière se propage **en ligne droite** dans un milieu homogène, et sa vitesse dans le vide
vaut

$$\boxed{c = 3{,}00 \times 10^{8}\ \text{m·s}^{-1}}$$

### Distances astronomiques

$$d = c \times \Delta t$$

L'**année-lumière** (a.l.) est la distance parcourue par la lumière en un an.
C'est une **distance**, pas une durée.

> **Exemple.** Une étoile à $4$ a.l. : sa lumière a mis $4$ ans à nous parvenir. On la voit
> telle qu'elle était il y a $4$ ans.

---

## 2. Réfraction et lentilles

### Lois de Snell-Descartes

Lorsqu'un rayon passe d'un milieu à un autre :

$$\boxed{n_1 \sin i_1 = n_2 \sin i_2}$$

où $n$ est l'**indice de réfraction** du milieu (sans unité, $n \geqslant 1$).

> Les angles se mesurent **par rapport à la normale**, jamais par rapport à la surface.

### Lentilles convergentes

| Grandeur | Symbole | Relation |
|---|---|---|
| Distance focale | $f'$ | en mètres |
| Vergence | $C$ | $C = \dfrac{1}{f'}$, en dioptries (δ) |

**Les trois rayons particuliers** :
1. Un rayon passant par le **centre optique** n'est pas dévié
2. Un rayon **parallèle à l'axe** ressort en passant par le **foyer image** $\mathrm{F}'$
3. Un rayon passant par le **foyer objet** $\mathrm{F}$ ressort **parallèle à l'axe**

Deux rayons suffisent pour construire l'image ; le troisième sert de vérification.

---

## 3. Signaux sonores

Le son est une **onde mécanique** : il a besoin d'un **milieu matériel** pour se propager.

> ⚠️ **Le son ne se propage pas dans le vide.** La lumière, si. C'est la différence essentielle
> entre les deux.

$$v_{\text{son dans l'air}} \approx 340\ \text{m·s}^{-1}$$

| Grandeur | Symbole | Unité | Perception |
|---|---|---|---|
| Période | $T$ | s | — |
| Fréquence | $f = \dfrac{1}{T}$ | Hz | **hauteur** du son |
| Niveau d'intensité | $L$ | dB | **force** du son |

$$\boxed{f = \frac{1}{T}}$$

> **Domaine audible** : environ $20$ Hz à $20\,000$ Hz.
> En dessous : infrasons. Au-dessus : ultrasons.

---

## 4. Signaux et capteurs

### Loi d'Ohm

$$\boxed{U = R \times I}$$

| Symbole | Grandeur | Unité |
|---|---|---|
| $U$ | tension | volt (V) |
| $R$ | résistance | ohm (Ω) |
| $I$ | intensité | ampère (A) |

### Lois des circuits

| Montage | Tension | Intensité |
|---|---|---|
| **Série** | $U = U_1 + U_2$ | $I$ **identique** partout |
| **Dérivation** | $U$ **identique** | $I = I_1 + I_2$ |

### Capteurs

Un **capteur** convertit une grandeur physique en grandeur électrique.

| Capteur | Grandeur mesurée |
|---|---|
| Thermistance | température |
| Photorésistance | éclairement |
| Microphone | pression acoustique |

On utilise sa **courbe d'étalonnage** pour remonter à la grandeur mesurée à partir de la
tension ou de la résistance lue.

---

## 5. À retenir absolument

| | |
|---|---|
| Vitesse de la lumière | $c = 3{,}00 \times 10^8$ m·s⁻¹ |
| Année-lumière | une **distance** |
| Snell-Descartes | $n_1 \sin i_1 = n_2 \sin i_2$ |
| Vergence | $C = \dfrac{1}{f'}$ en dioptries |
| Son | onde **mécanique**, ne se propage pas dans le vide |
| Fréquence | $f = \dfrac{1}{T}$, en hertz |
| Loi d'Ohm | $U = RI$ |
| Série / dérivation | $I$ constant / $U$ constante |

---

## 6. Les erreurs qui coûtent des points

1. **Croire que le son se propage dans le vide.** Seules les ondes électromagnétiques le font.
2. **Prendre l'année-lumière pour une durée.** C'est une distance.
3. **Mesurer les angles par rapport à la surface** au lieu de la normale, en réfraction.
4. **Confondre fréquence et niveau sonore** : la fréquence donne la **hauteur** (grave ou
   aigu), les décibels donnent la **force**.
5. **Oublier de convertir** les millimètres en mètres avant de calculer une vergence.
6. **Intervertir les lois série et dérivation.**
7. **Oublier les unités** — un résultat sans unité est faux en physique-chimie.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie de seconde générale et technologique,
BO spécial n° 1 du 22 janvier 2019 (docs/programme-pc2nde.pdf, thème « Ondes et signaux »,
ligne 2273 du .txt extrait ; « Signaux et capteurs » ligne 2648).

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- La relation de conjugaison des lentilles et le grandissement sont-ils au programme de
  SECONDE ou seulement de première ? Je ne les ai PAS inclus, me limitant à la construction
  géométrique — point de périmètre à trancher.
- Le programme de seconde couvre-t-il la réflexion totale et l'angle limite ?
- Les lois de Snell-Descartes sont-elles exigibles en seconde, ou introduites en première ?
- Le niveau d'intensité sonore en décibels est-il quantitatif (formule logarithmique) ou
  seulement qualitatif en seconde ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
