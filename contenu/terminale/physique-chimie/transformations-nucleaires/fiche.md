---
id: tale-spe-pc-transformations-nucleaires
titre: "Transformations nucléaires et radioactivité"
voie: generale
niveau: terminale
parcours: physique-chimie
matiere: physique-chimie
programme: "BO spécial n°8 du 25 juillet 2019 — spécialité physique-chimie, terminale générale"
theme: "Constitution et transformations de la matière"
duree_lecture_min: 15
prerequis:
  - Constitution du noyau atomique, écriture $^{A}_{Z}\text{X}$ (Seconde)
  - Fonction exponentielle (Terminale, maths ou spécialité)
  - Puissances de 10 et écriture scientifique
statut: brouillon
relu_par: null
---

# Transformations nucléaires et radioactivité

> Jusqu'ici, une transformation chimique réorganisait les **atomes** sans toucher aux
> noyaux. Ici, c'est le **noyau lui-même** qui se transforme : un atome change d'élément.
> L'énergie mise en jeu est colossale, et le phénomène est **aléatoire** — on ne sait pas
> *quand* un noyau donné va se désintégrer, seulement avec quelle **probabilité**.

---

## 1. Noyau, nucléides, isotopes

Un noyau se note $^{A}_{Z}\text{X}$ :

| Symbole | Nom | Ce qu'il compte |
|---|---|---|
| $Z$ | numéro atomique | nombre de **protons** |
| $A$ | nombre de masse | nombre de **nucléons** (protons + neutrons) |
| $N = A - Z$ | — | nombre de **neutrons** |

Deux noyaux sont **isotopes** s'ils ont le même $Z$ mais des $A$ différents (même élément,
nombre de neutrons différent).

> **Exemple.** $^{12}_{6}\text{C}$ et $^{14}_{6}\text{C}$ sont deux isotopes du carbone :
> tous deux ont $6$ protons, mais le premier a $6$ neutrons et le second $8$.

---

## 2. Stabilité des noyaux : le diagramme (N, Z)

On place chaque noyau dans un repère : $Z$ (protons) en abscisse, $N$ (neutrons) en ordonnée.
Les noyaux **stables** se regroupent le long d'une **vallée de stabilité**.

- Pour les noyaux légers, la stabilité exige $N \approx Z$ (la droite $N = Z$).
- Pour les noyaux plus lourds, il faut de plus en plus de neutrons : la vallée s'écarte
  au-dessus de la droite $N = Z$.
- Au-delà de $Z = 82$ (le plomb), **aucun** noyau n'est stable.

Un noyau **instable** (radioactif) se situe **hors** de la vallée. Le type de radioactivité
dépend de sa position :

| Position par rapport à la vallée | Défaut | Radioactivité |
|---|---|---|
| au-dessus (trop de neutrons) | excès de $N$ | **β⁻** |
| au-dessous (trop de protons) | excès de $Z$ | **β⁺** |
| noyaux lourds ($Z > 82$) | trop de nucléons | **α** |

> **Exemple.** Le carbone 14 ($^{14}_{6}\text{C}$, $N = 8$) a trop de neutrons par rapport
> à l'isotope stable $^{12}_{6}\text{C}$ ($N = 6$) : il est au-dessus de la vallée, il est
> radioactif **β⁻**.

---

## 3. La radioactivité : trois désintégrations

La **radioactivité** est la transformation spontanée et aléatoire d'un noyau instable (le
**noyau père**) en un autre noyau (le **noyau fils**), avec émission d'une particule.

### Radioactivité α

Le noyau émet un **noyau d'hélium** $^{4}_{2}\text{He}$ (la particule α). Il perd
$2$ protons et $2$ neutrons.

$$\boxed{^{A}_{Z}\text{X} \longrightarrow \; ^{A-4}_{Z-2}\text{Y} + \; ^{4}_{2}\text{He}}$$

> **Exemple.** L'uranium 238 :
> $^{238}_{92}\text{U} \longrightarrow \; ^{234}_{90}\text{Th} + \; ^{4}_{2}\text{He}$.

### Radioactivité β⁻

Un **neutron** se transforme en **proton** ; le noyau émet un **électron**
$^{\;\;0}_{-1}\text{e}$. Le nombre de masse ne change pas, mais $Z$ augmente de $1$.

$$\boxed{^{A}_{Z}\text{X} \longrightarrow \; ^{\;\;A}_{Z+1}\text{Y} + \; ^{\;\;0}_{-1}\text{e}}$$

> **Exemple.** Le carbone 14 (base de la datation) :
> $^{14}_{6}\text{C} \longrightarrow \; ^{14}_{7}\text{N} + \; ^{\;\;0}_{-1}\text{e}$.

### Radioactivité β⁺

Un **proton** se transforme en **neutron** ; le noyau émet un **positron**
$^{0}_{+1}\text{e}$ (l'antiparticule de l'électron). $A$ ne change pas, $Z$ diminue de $1$.

$$\boxed{^{A}_{Z}\text{X} \longrightarrow \; ^{\;\;A}_{Z-1}\text{Y} + \; ^{0}_{+1}\text{e}}$$

> **Exemple.** Le fluor 18, utilisé en imagerie médicale (TEP) :
> $^{18}_{9}\text{F} \longrightarrow \; ^{18}_{8}\text{O} + \; ^{0}_{+1}\text{e}$.

### Le rayonnement γ

Après une désintégration α ou β, le noyau fils est souvent dans un état **excité** : il se
désexcite en émettant un **photon** très énergétique (rayonnement γ). Le γ **ne modifie ni
$A$ ni $Z$** ; il accompagne, il ne transforme pas.

---

## 4. Les lois de conservation (lois de Soddy)

Toute équation nucléaire respecte **deux** conservations :

$$\boxed{\text{conservation du nombre de masse } A \qquad \text{conservation du nombre de charge } Z}$$

Autrement dit : la **somme des $A$** est la même de chaque côté de la flèche, et la **somme
des $Z$** aussi. Ce sont ces deux égalités qui permettent d'identifier le noyau fils.

> **Exemple — méthode.** On cherche le noyau fils $^{A}_{Z}\text{Y}$ dans
> $^{226}_{88}\text{Ra} \longrightarrow \; ^{A}_{Z}\text{Y} + \; ^{4}_{2}\text{He}$.
> Conservation de $A$ : $226 = A + 4 \Rightarrow A = 222$.
> Conservation de $Z$ : $88 = Z + 2 \Rightarrow Z = 86$.
> L'élément de $Z = 86$ est le radon : le fils est $^{222}_{86}\text{Rn}$.

> ⚠️ On conserve $A$ et $Z$, **jamais** le nombre de neutrons ni la masse (une partie de la
> masse se convertit en énergie). L'électron émis compte pour $A = 0$ et $Z = -1$.

---

## 5. La loi de décroissance radioactive

### Caractère aléatoire

On ne peut pas prédire l'instant où **un** noyau se désintègre. Mais sur une **population**
de $N$ noyaux, chacun a, pendant une durée courte, la **même probabilité** de se
désintégrer. Le nombre de noyaux restants décroît alors de façon **exponentielle**.

### La loi

Si $N_0$ est le nombre de noyaux à l'instant $t = 0$, le nombre restant à l'instant $t$ est :

$$\boxed{N(t) = N_0\, e^{-\lambda t}}$$

- $N(t)$ : nombre de noyaux **non encore désintégrés** à l'instant $t$ ;
- $\lambda$ : la **constante radioactive**, en $\text{s}^{-1}$. Elle mesure la probabilité de
  désintégration par unité de temps : plus $\lambda$ est grand, plus la désintégration est rapide.

> **Exemple.** Un échantillon contient $N_0 = 5{,}0 \times 10^{10}$ noyaux, avec
> $\lambda = 2{,}3 \times 10^{-2}\ \text{s}^{-1}$. Au bout de $t = 100$ s :
> $N = 5{,}0 \times 10^{10} \times e^{-2{,}3 \times 10^{-2} \times 100}
> = 5{,}0 \times 10^{10} \times e^{-2{,}3} \approx 5{,}0 \times 10^{9}$ noyaux.

> **Où λ vient-elle ?** La loi découle de $\dfrac{\mathrm{d}N}{\mathrm{d}t} = -\lambda N$ :
> le nombre de désintégrations pendant $\mathrm{d}t$ est proportionnel au nombre de noyaux
> présents. Le signe $-$ traduit la diminution.

---

## 6. Temps de demi-vie

La **demi-vie** $t_{1/2}$ est la durée au bout de laquelle la **moitié** des noyaux
initialement présents se sont désintégrés : $N(t_{1/2}) = \dfrac{N_0}{2}$.

En reportant dans la loi de décroissance, $\dfrac{N_0}{2} = N_0\, e^{-\lambda t_{1/2}}$, d'où
$e^{-\lambda t_{1/2}} = \dfrac12$, soit $\lambda t_{1/2} = \ln 2$ :

$$\boxed{t_{1/2} = \frac{\ln 2}{\lambda}} \qquad\Longleftrightarrow\qquad \lambda = \frac{\ln 2}{t_{1/2}}$$

La demi-vie est **caractéristique** du nucléide et **indépendante** de $N_0$ : elle va de la
fraction de seconde à des milliards d'années.

> **Exemple.** L'iode 131 a une demi-vie $t_{1/2} = 8{,}0$ jours. Sa constante radioactive :
> d'abord convertir en secondes, $t_{1/2} = 8{,}0 \times 24 \times 3600 = 6{,}9 \times 10^{5}$ s,
> puis $\lambda = \dfrac{\ln 2}{6{,}9 \times 10^{5}} = 1{,}0 \times 10^{-6}\ \text{s}^{-1}$.

**Lecture d'une courbe.** Sur un graphe $N(t)$, on repère l'ordonnée $N_0/2$, on lit
l'abscisse correspondante : c'est $t_{1/2}$. Après $n$ demi-vies, il reste
$N_0 / 2^{\,n}$ noyaux.

| Temps écoulé | Noyaux restants |
|---|---|
| $t_{1/2}$ | $N_0 / 2$ |
| $2\, t_{1/2}$ | $N_0 / 4$ |
| $3\, t_{1/2}$ | $N_0 / 8$ |
| $n\, t_{1/2}$ | $N_0 / 2^{\,n}$ |

---

## 7. Activité d'un échantillon

L'**activité** $A$ est le **nombre de désintégrations par seconde** dans l'échantillon.
Elle est proportionnelle au nombre de noyaux présents :

$$\boxed{A = \lambda \, N}$$

- $A$ en **becquerel** ($\text{Bq}$), avec $1\ \text{Bq} = 1$ désintégration par seconde ;
- $\lambda$ en $\text{s}^{-1}$, $N$ sans unité (un nombre de noyaux).

Comme $N$ décroît exponentiellement, l'activité aussi : $A(t) = A_0\, e^{-\lambda t}$, avec
la **même** demi-vie que le nombre de noyaux.

> **Exemple.** Pour l'échantillon d'iode 131 précédent
> ($\lambda = 1{,}0 \times 10^{-6}\ \text{s}^{-1}$) contenant $N = 1{,}0 \times 10^{12}$ noyaux :
> $A = \lambda N = 1{,}0 \times 10^{-6} \times 1{,}0 \times 10^{12} = 1{,}0 \times 10^{6}\ \text{Bq}$,
> soit $1{,}0$ MBq.

> ⚠️ Le becquerel est **minuscule** : l'ancienne unité, le curie, valait
> $1\ \text{Ci} = 3{,}7 \times 10^{10}\ \text{Bq}$. Un résultat en Bq est souvent un très
> grand nombre — c'est normal.

---

## 8. Tableau récapitulatif

| Notion | Formule / règle | Unité |
|---|---|---|
| Nombre de neutrons | $N = A - Z$ | — |
| Radioactivité α | $^{A}_{Z}\text{X} \to \; ^{A-4}_{Z-2}\text{Y} + \; ^{4}_{2}\text{He}$ | — |
| Radioactivité β⁻ | $^{A}_{Z}\text{X} \to \; ^{\;\;A}_{Z+1}\text{Y} + \; ^{\;\;0}_{-1}\text{e}$ | — |
| Radioactivité β⁺ | $^{A}_{Z}\text{X} \to \; ^{\;\;A}_{Z-1}\text{Y} + \; ^{0}_{+1}\text{e}$ | — |
| Lois de conservation | somme des $A$ et somme des $Z$ conservées | — |
| Loi de décroissance | $N(t) = N_0\, e^{-\lambda t}$ | — |
| Constante radioactive | $\lambda = \dfrac{\ln 2}{t_{1/2}}$ | $\text{s}^{-1}$ |
| Demi-vie | $t_{1/2} = \dfrac{\ln 2}{\lambda}$ | s |
| Activité | $A = \lambda N$ | Bq ($= \text{s}^{-1}$) |

---

## 9. Les erreurs qui coûtent des points

1. **Vouloir conserver la masse ou le nombre de neutrons.** On ne conserve que $A$ et $Z$.
   Une partie de la masse devient de l'énergie.
2. **Se tromper de sens pour β⁻ / β⁺.** En β⁻, $Z$ **augmente** ($n \to p$) ; en β⁺, $Z$
   **diminue** ($p \to n$). Le nombre de masse $A$, lui, ne bouge pas.
3. **Oublier de convertir la demi-vie en secondes** avant de calculer $\lambda$. Des jours ou
   des années donnés dans l'énoncé doivent passer en secondes pour obtenir $\lambda$ en
   $\text{s}^{-1}$ et une activité en Bq.
4. **Confondre $\lambda$ et $t_{1/2}$.** Ils sont **inversement** proportionnels : un grand
   $\lambda$ (désintégration rapide) correspond à une **petite** demi-vie.
5. **Prendre $N_0 / (2n)$ au lieu de $N_0 / 2^{\,n}$** après $n$ demi-vies. La décroissance
   est géométrique, pas linéaire.
6. **Écrire l'activité en s⁻¹ « tout court » ou en noyaux.** L'unité est le **becquerel**, et
   $N$ dans $A = \lambda N$ est un nombre de noyaux (sans unité), pas une quantité de matière.

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de physique-chimie, enseignement de spécialité, terminale
générale, arrêté du 19-7-2019, BO spécial n°8 du 25 juillet 2019
(docs/programme-terminale-physique-chimie-2019.txt, section « 1.5 Transformation nucléaire »,
lignes 63-72). Page BO : education.gouv.fr/bo/19/Special8/MENE1921249A.htm ;
PDF officiel : cache.media.education.gouv.fr/file/SPE8_MENJ_25_7_2019/92/9/spe249_annexe_1158929.pdf
Extraction via WebFetch depuis le PDF officiel — à confronter au PDF avant publication.

⚠️ À CONFRONTER AU PDF PAR UN PROFESSEUR :
- Le programme cite « Radioactivité α et β » sans préciser explicitement β⁺ ni γ. J'ai
  distingué β⁻ et β⁺ (usage courant en terminale) et ajouté un paragraphe court sur le γ
  comme désexcitation. Vérifier le niveau d'exigence attendu : le γ et le positron sont-ils
  au programme, ou seulement α et β⁻ ?
- Le programme ne mentionne PAS explicitement la fission/fusion ni l'énergie de liaison
  (E = mc²) dans cette section 1.5 — je ne les ai PAS traitées. À confirmer qu'elles ne
  relèvent pas de ce chapitre.
- L'équation différentielle dN/dt = -λN est présentée en encadré « pour aller plus loin » :
  vérifier si son établissement est exigible ou seulement l'exploitation de N(t)=N0 e^(-λt).
- Constantes numériques des exemples (t1/2 iode 131 = 8,0 j ; U238→Th234 ; Ra226→Rn222 ;
  C14→N14 ; F18→O18) : valeurs standard à revérifier dans une table.

Rédaction originale à partir du programme officiel. Aucun emprunt à un manuel.
Statut : brouillon, non relu.
-->
