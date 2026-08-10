---
id: 1sti2d-ondes-information
titre: "Ondes et information"
voie: technologique
niveau: premiere
parcours: pc-maths-sti2d-stl
matiere: physique-chimie
programme: "BO spécial n° 1 du 22 janvier 2019 — physique-chimie et mathématiques, STI2D et STL"
duree_lecture_min: 13
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

## 6. Le son

$$v_{\text{son dans l'air}} \approx 340\ \text{m·s}^{-1}$$

Le son est une onde **mécanique longitudinale** : une succession de compressions et
de dilatations de l'air.

| Perception | Grandeur physique |
|---|---|
| **Hauteur** (grave / aigu) | la **fréquence** |
| **Intensité** (fort / faible) | l'amplitude, le niveau en décibels |
| **Timbre** | la richesse en harmoniques |

**Domaine audible** : environ $20$ Hz à $20\,000$ Hz. En dessous, ce sont des
**infrasons** ; au-dessus, des **ultrasons**.

> **Application** : les ultrasons servent à mesurer une distance. On émet, on mesure
> la durée $\Delta t$ de l'aller-retour, et $d = \dfrac{v \times \Delta t}{2}$ — le
> facteur $2$ vient du trajet double.

---

## 7. Ondes électromagnétiques et spectre

Toutes se propagent dans le vide à $c = 3{,}0 \times 10^8$ m·s⁻¹. Elles ne diffèrent
que par leur **fréquence**.

| Domaine | Fréquence croissante → |
|---|---|
| Ondes radio | plus basse fréquence, grande longueur d'onde |
| Micro-ondes | |
| Infrarouge | |
| **Visible** | $\approx 400$ à $800$ nm |
| Ultraviolet | |
| Rayons X, gamma | plus haute fréquence, très énergétiques |

> **La règle** : plus la fréquence est élevée, plus la longueur d'onde est **courte**
> (puisque $\lambda = c/f$), et plus l'onde transporte d'énergie.

---

## 8. Ondes et transport de l'information

Une onde porteuse transporte un signal. Deux caractéristiques comptent :

- la **bande passante** — le débit d'information possible
- l'**atténuation** — la perte d'énergie sur la distance

| Support | Nature de l'onde | Atout |
|---|---|---|
| Câble cuivre | électrique | simple, économique |
| Fibre optique | lumineuse (guidée) | très haut débit, faible atténuation |
| Liaison hertzienne | électromagnétique libre | pas de câble, mobilité |

---

## 9. À retenir absolument

| | |
|---|---|
| Onde | transfert d'**énergie** sans transport de **matière** |
| Mécanique | milieu matériel **indispensable** |
| Électromagnétique | se propage dans le **vide** |
| Longitudinale / transversale | perturbation parallèle / perpendiculaire |
| Relation fondamentale | $\lambda = vT = \dfrac{v}{f}$ |
| Changement de milieu | $f$ **inchangée**, $v$ et $\lambda$ changent |
| Célérité du son | $\approx 340$ m·s⁻¹ |
| Célérité de la lumière | $3{,}0 \times 10^8$ m·s⁻¹ |

---

## 10. Les erreurs qui coûtent des points

1. **Croire qu'une onde transporte de la matière.**
2. **Penser que le son se propage dans le vide.**
3. **Croire que la fréquence change** au passage d'un milieu à un autre.
4. **Confondre $T$ et $\lambda$** : l'une est une durée, l'autre une longueur.
5. **Oublier de diviser par $2$** dans une mesure de distance par écho.
6. **Confondre fréquence et niveau sonore** : la première donne la hauteur, le second
   la force.
7. **Oublier les conversions** : les longueurs d'onde du visible sont en nanomètres.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel BO spécial n° 1 du 22 janvier 2019, « Programme de
physique-chimie et mathématiques de première STI2D et STL »
(docs/programme-premiere-sti2d-stl-pc-maths.pdf), partie « Programme de
physique-chimie », thème « Ondes et information ».

⚠️ MÉTHODE : fiche construite sur l'UNION de deux extractions du PDF (v1 structurelle,
v2 exploitant les tables ToUnicode). Voir la note de la fiche « energie ».

Éléments explicitement lisibles (union v1 + v2) :
- « Ondes mécaniques. Ondes électromagnétiques. Phénomènes de propagation. Onde
  longitudinale, onde transversale »
- « Citer des exemples d'ondes mécaniques (sonores, [sismiques, etc.]) et leurs
  milieux matériels de propagation »
- « Distinguer le cas particulier de l'onde électromagnétique qui ne nécessite pas de
  milieu matériel de propagation »
- « Associer la propagation d'une onde à un transfert d'énergie sans déplacement de
  matière »
- « Distinguer une onde longitudinale d'une onde transversale »
- « Mettre en œuvre un guide d'onde »
- « Ondes périodiques. Ondes sinusoïdales. Période. Longueur d'onde. Relation entre
  période, longueur d'onde et célérité » ; « Pour une onde sinusoïdale, citer et
  exploiter la relation entre [fréquence,] longueur d'onde et célérité »
- « Citer l'ordre de grandeur de la célérité du son dans l'air »
- « propagation d'une onde sonore ou ultrasonore »
- « phénomènes de propagation, d'absorption, de réflexion »
- « Onde et transport [de l'information] »
- « principales caractéristiques (longueur d'onde, puissance, [...]) »

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le NIVEAU D'INTENSITÉ SONORE en décibels est-il quantitatif (formule
  logarithmique) ou seulement qualitatif ? Je suis resté qualitatif.
- Le spectre électromagnétique du §7 : les domaines listés et les bornes du visible
  (400–800 nm) sont des valeurs usuelles — vérifier qu'elles correspondent aux
  attendus du programme.
- La section 8 (transport de l'information, bande passante, atténuation) est la
  moins adossée au texte : l'extraction ne laisse lisible que « Onde et transport »
  et « principales caractéristiques ». À VÉRIFIER EN PRIORITÉ.
- La modulation (AM/FM) est-elle au programme de première ?

Rédaction originale à partir du programme. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
