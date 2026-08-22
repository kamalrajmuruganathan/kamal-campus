---
id: 1st2s-pc-infrarouge-securite-routiere
titre: "Rayonnement infrarouge et sécurité routière"
voie: technologique
niveau: premiere-techno
parcours: pc-sante-st2s
matiere: physique-chimie
programme: "BO spécial n°1 du 22 janvier 2019 — physique-chimie pour la santé, série ST2S"
theme: "Prévenir et sécuriser"
duree_lecture_min: 16
prerequis:
  - Écriture scientifique et puissances de 10 (Seconde)
  - Conversions d'unités (préfixes micro-, milli-, kilo-)
  - Énergie et vitesse, notion de force (cycle 4)
statut: brouillon
relu_par: null
---

# Rayonnement infrarouge et sécurité routière

> Deux situations de prévention, une même série d'outils physiques. D'abord le
> **rayonnement infrarouge** : tout corps chaud émet un rayonnement invisible que la
> médecine sait capter (thermomètre sans contact, caméra thermique). Ensuite la
> **sécurité routière** : pourquoi une vitesse deux fois plus grande ne double pas la
> distance d'arrêt, mais la fait exploser. Dans les deux cas, tout repose sur des
> conversions d'unités propres — c'est là que se gagnent ou se perdent les points.

---

## PARTIE A — RAYONNEMENT INFRAROUGE

## 1. Les ondes électromagnétiques

### Définition

La **lumière visible** n'est qu'une petite partie d'une grande famille : les **ondes
électromagnétiques**. Elles se propagent **dans le vide** (contrairement au son) et
**toutes à la même vitesse**, la vitesse de la lumière $c = 3{,}0 \times 10^{8}$ m·s⁻¹.

Ce qui les distingue, c'est leur **longueur d'onde** $\lambda$ (en mètres) — ou, ce qui
revient au même, leur **fréquence** $f$ :

$$\boxed{\lambda = \frac{c}{f}}$$

> **Exemple.** Une onde radio FM de fréquence $f = 100$ MHz $= 100 \times 10^{6}$ Hz a
> une longueur d'onde $\lambda = \dfrac{3{,}0 \times 10^{8}}{100 \times 10^{6}} = 3{,}0$ m.
> Une onde lumineuse, elle, a une longueur d'onde des centaines de milliers de fois
> plus petite.

### Le spectre électromagnétique

En classant les ondes de la plus **grande** longueur d'onde (basse fréquence) à la plus
**petite** (haute fréquence) :

| Domaine | Longueur d'onde $\lambda$ (ordre de grandeur) |
|---|---|
| Ondes **radio** | $> 1$ m |
| **Micro-ondes** | $1$ m à $1$ mm |
| **Infrarouge (IR)** | $1$ mm à $0{,}8$ µm |
| **Visible** | $0{,}8$ µm à $0{,}4$ µm (du rouge au violet) |
| **Ultraviolet (UV)** | $0{,}4$ µm à $10$ nm |
| **Rayons X** | $10$ nm à $0{,}01$ nm |
| **Rayons γ** | $< 0{,}01$ nm |

> ⚠️ **Le micromètre (µm) est l'unité reine de cette partie.** $1$ µm $= 10^{-6}$ m.
> Le visible s'étend de $0{,}4$ µm à $0{,}8$ µm, soit $400$ nm à $800$ nm. L'infrarouge
> commence **juste au-delà du rouge** : longueur d'onde **plus grande** que le visible,
> donc **invisible** à l'œil.

> **Ce qu'il faut comprendre.** Grande longueur d'onde ↔ basse fréquence ↔ **peu**
> d'énergie par onde (radio, IR) ; petite longueur d'onde ↔ haute fréquence ↔ **beaucoup**
> d'énergie (UV, X, γ, qui peuvent être dangereux pour les cellules).

---

## 2. Température d'un corps et rayonnement émis

### Le fait de base

**Tout corps** dont la température n'est pas nulle **émet un rayonnement
électromagnétique**. Plus il est **chaud**, plus ce rayonnement se décale vers les
**courtes** longueurs d'onde.

- Un radiateur à $50$ °C rayonne surtout dans l'**infrarouge** (invisible, mais on sent
  la chaleur).
- Une plaque chauffée au **rouge** (~$700$ °C) émet, en plus de l'IR, du visible rouge.
- Le **Soleil** (~$5\,800$ °C en surface) émet surtout dans le **visible**.

### La loi de Wien

Le rayonnement émis n'est pas d'une seule longueur d'onde : c'est un mélange. La longueur
d'onde pour laquelle l'émission est **la plus intense** se note $\lambda_{max}$. La **loi
de Wien** la relie à la température **absolue** $T$ du corps :

$$\boxed{\lambda_{max} \times T = 2{,}9 \times 10^{-3} \ \text{m·K}}$$

**Attention aux unités**, c'est tout le piège :

- $\lambda_{max}$ en **mètres** (m),
- $T$ en **kelvins** (K), **jamais** en degrés Celsius.

La conversion Celsius → kelvin est une simple addition :

$$\boxed{T\,(\text{K}) = \theta\,(°\text{C}) + 273}$$

> **Exemple — le Soleil.** Surface à $\theta = 5\,527$ °C, soit
> $T = 5\,527 + 273 = 5\,800$ K.
> $\lambda_{max} = \dfrac{2{,}9 \times 10^{-3}}{5\,800} = 5{,}0 \times 10^{-7}$ m
> $= 0{,}50$ µm $= 500$ nm.
> C'est dans le **visible** (vers le jaune-vert) : voilà pourquoi notre œil, adapté à la
> lumière du Soleil, y est le plus sensible.

> ⚠️ **Oublier de convertir en kelvins fausse tout.** Avec $\theta = 5\,527$ °C au lieu
> de $5\,800$ K, on trouverait $\lambda_{max} = 5{,}2 \times 10^{-7}$ m — proche par
> chance ici, mais pour un corps « froid » (autour de $0$ °C) le calcul serait
> totalement faux, voire impossible (division par un nombre négatif si $\theta < 0$).

---

## 3. Émission d'infrarouges par le corps humain

### Pourquoi le corps rayonne dans l'IR

Le corps humain est à environ $\theta = 37$ °C, soit $T = 37 + 273 = 310$ K. La loi de
Wien donne :

$$\lambda_{max} = \frac{2{,}9 \times 10^{-3}}{310} = 9{,}4 \times 10^{-6}\ \text{m} = 9{,}4\ \text{µm}$$

$9{,}4$ µm est situé en plein dans l'**infrarouge**. Le corps humain émet donc en
permanence un rayonnement IR invisible, d'autant plus intense qu'il est chaud. **C'est
ce rayonnement que les capteurs médicaux exploitent.**

### Deux systèmes de détection

| Dispositif | Principe | Usage santé |
|---|---|---|
| **Thermomètre sans contact** | capte l'IR émis par le front ou le tympan et en déduit la température | mesure rapide et hygiénique (pas de contact) |
| **Caméra thermique** | forme une **image** à partir de l'IR de chaque point du corps | repérer une zone enflammée, une fièvre, un trouble de la circulation |

> **Exemple — dépistage de fièvre.** Un thermomètre infrarouge visé sur le front reçoit
> le rayonnement IR de la peau. Plus la personne est chaude, plus ce rayonnement est
> intense (et son $\lambda_{max}$ légèrement plus court) : l'appareil convertit cette
> mesure en une température affichée en degrés, sans jamais toucher le patient.

> **Ce qu'il faut comprendre.** Ces appareils **ne chauffent pas** et **n'envoient rien**
> dans le corps : ils **reçoivent** le rayonnement que le corps émet déjà de lui-même.
> C'est de la détection **passive**.

---

## PARTIE B — SÉCURITÉ ROUTIÈRE

## 4. Vitesse et énergie cinétique

### Convertir les km/h en m/s

Une vitesse s'affiche en km/h au compteur, mais toutes les formules de physique exigent
des **mètres par seconde**. La conversion :

$$\boxed{v\,(\text{m·s}^{-1}) = \frac{v\,(\text{km/h})}{3{,}6}} \qquad\text{et}\qquad v\,(\text{km/h}) = v\,(\text{m·s}^{-1}) \times 3{,}6$$

> **Exemple.** $90$ km/h $= \dfrac{90}{3{,}6} = 25$ m·s⁻¹. À l'inverse, $10$ m·s⁻¹
> $= 10 \times 3{,}6 = 36$ km/h.

### L'énergie cinétique

Un véhicule en mouvement possède une **énergie cinétique** $E_c$, l'énergie liée à sa
vitesse :

$$\boxed{E_c = \frac{1}{2}\,m\,v^{2}}$$

avec $m$ en **kilogrammes** (kg), $v$ en **m·s⁻¹**, et $E_c$ en **joules** (J).

> **Exemple.** Une voiture de $m = 1\,000$ kg roulant à $90$ km/h, c'est-à-dire
> $v = 25$ m·s⁻¹, transporte
> $E_c = \dfrac{1}{2} \times 1\,000 \times 25^{2} = \dfrac{1}{2} \times 1\,000 \times 625
> = 3{,}1 \times 10^{5}$ J.
> C'est toute cette énergie qu'il faudra **dissiper** dans les freins (et, en cas de
> choc, dans la tôle) pour s'arrêter.

> ⚠️ **Le carré ne porte que sur $v$, pas sur $m$.** Et $v$ doit être en m·s⁻¹ :
> introduire les km/h dans $E_c = \frac12 m v^2$ multiplie le résultat par $3{,}6^2 \approx
> 13$ — une faute qui fausse tout le raisonnement énergétique.

---

## 5. Distances de réaction, de freinage, d'arrêt

Entre l'instant où un obstacle surgit et l'arrêt total, la voiture parcourt une
**distance d'arrêt** $d_a$, somme de deux distances :

$$\boxed{d_a = d_r + d_f}$$

### La distance de réaction $d_r$

C'est la distance parcourue **pendant le temps de réaction** $t_r$ du conducteur (le
temps de voir, comprendre, et poser le pied sur le frein), pendant lequel la voiture
roule **encore à pleine vitesse** :

$$\boxed{d_r = v \times t_r}$$

Le temps de réaction vaut environ $t_r = 1$ s (bien plus si le conducteur est fatigué,
au téléphone, ou a bu de l'alcool).

> **Exemple.** À $90$ km/h $= 25$ m·s⁻¹, avec $t_r = 1$ s :
> $d_r = 25 \times 1 = 25$ m parcourus **avant même** d'avoir commencé à freiner.

### La distance de freinage $d_f$

Une fois les freins actionnés, ils exercent une force qui dissipe **toute** l'énergie
cinétique. Le travail de la force de freinage $F$ sur la distance $d_f$ est égal à
l'énergie cinétique à dissiper :

$$F \times d_f = \frac{1}{2}\,m\,v^{2} \qquad\Longrightarrow\qquad d_f = \frac{m\,v^{2}}{2F}$$

L'essentiel à retenir : **la distance de freinage est proportionnelle à $v^{2}$** (car
elle provient de $E_c$).

> **Exemple.** Pour une décélération correspondant à une route sèche, une voiture qui
> passe de $45$ km/h à $90$ km/h **double** sa vitesse : son énergie cinétique est
> **multipliée par $4$** ($2^2$), donc sa distance de freinage aussi.

---

## 6. Influence de la vitesse

C'est le cœur du message de prévention. Les deux distances **ne réagissent pas de la
même façon** à la vitesse :

| Distance | Dépend de la vitesse en… | Si $v$ **double** |
|---|---|---|
| Réaction $d_r = v\,t_r$ | $v$ (proportionnelle) | ×2 |
| Freinage $d_f \propto v^2$ | $v^{2}$ | ×4 |
| Arrêt $d_a = d_r + d_f$ | mélange | **plus que doublée** |

> **Exemple chiffré.** Une voiture ($t_r = 1$ s, freinage $d_f$ tel que $d_f \propto v^2$) :
>
> | Vitesse | $d_r$ | $d_f$ | $d_a = d_r + d_f$ |
> |---|---|---|---|
> | $50$ km/h ($\approx 13{,}9$ m·s⁻¹) | $\approx 14$ m | $\approx 12$ m | $\approx 26$ m |
> | $100$ km/h ($\approx 27{,}8$ m·s⁻¹) | $\approx 28$ m | $\approx 48$ m | $\approx 76$ m |
>
> En doublant la vitesse (×2), la distance de réaction double ($14 \to 28$), mais la
> distance de freinage **quadruple** ($12 \to 48$) : au total la distance d'arrêt est
> presque **triplée**. C'est pourquoi $10$ km/h de plus « en ville » change tout.

> **Ce qu'il faut comprendre.** L'énergie cinétique en $v^{2}$ explique aussi la
> **gravité des chocs** : à vitesse double, il y a $4$ fois plus d'énergie à encaisser
> lors d'une collision. La vitesse n'agit pas proportionnellement, mais au **carré**.

---

## 7. À retenir absolument

| | |
|---|---|
| Ondes EM dans le vide | toutes à $c = 3{,}0 \times 10^{8}$ m·s⁻¹ |
| Relation | $\lambda = \dfrac{c}{f}$ |
| Ordre du spectre | radio → micro-ondes → **IR** → visible → UV → X → γ |
| Visible | $0{,}4$ µm à $0{,}8$ µm ($1$ µm $= 10^{-6}$ m) |
| Loi de Wien | $\lambda_{max}\,T = 2{,}9 \times 10^{-3}$ m·K |
| Conversion température | $T(\text{K}) = \theta(°\text{C}) + 273$ |
| Corps humain | $T = 310$ K → $\lambda_{max} \approx 9{,}4$ µm (**IR**) |
| Détection IR | thermomètre sans contact, caméra thermique (**passive**) |
| Conversion vitesse | $v(\text{m·s}^{-1}) = \dfrac{v(\text{km/h})}{3{,}6}$ |
| Énergie cinétique | $E_c = \dfrac{1}{2}mv^{2}$ (J, kg, m·s⁻¹) |
| Distance d'arrêt | $d_a = d_r + d_f$ |
| Distance de réaction | $d_r = v\,t_r$ (∝ $v$) |
| Distance de freinage | $\propto v^{2}$ |
| Vitesse ×2 | $d_r$ ×2, $d_f$ ×4, $E_c$ ×4 |

---

## 8. Les erreurs qui coûtent des points

1. **Utiliser les degrés Celsius dans la loi de Wien.** $T$ doit être en **kelvins** :
   $T(\text{K}) = \theta(°\text{C}) + 273$. Oublier l'addition de $273$ donne une
   longueur d'onde fausse.
2. **Se tromper d'unité de longueur d'onde.** $1$ µm $= 10^{-6}$ m et $1$ nm $= 10^{-9}$ m.
   Le corps humain émet vers $9{,}4$ µm $= 9{,}4 \times 10^{-6}$ m, pas $9{,}4$ m.
3. **Croire qu'un thermomètre infrarouge chauffe ou éclaire le patient.** Il **reçoit**
   passivement l'IR déjà émis par le corps ; il n'envoie rien.
4. **Garder les km/h dans $E_c = \frac12 m v^2$.** La vitesse doit être en **m·s⁻¹**
   (diviser les km/h par $3{,}6$). Sinon $E_c$ est faux d'un facteur $\approx 13$.
5. **Croire que la distance d'arrêt double quand la vitesse double.** Seule la distance
   de **réaction** double ; la distance de **freinage** est en $v^{2}$, donc elle
   **quadruple**. L'arrêt total augmente donc bien plus que du double.
6. **Confondre distance de réaction et distance de freinage.** La réaction, c'est
   **avant** de freiner ($d_r = v\,t_r$) ; le freinage, c'est **pendant** ($d_f \propto v^2$).

---

<!--
NOTES DE PRODUCTION — ne pas afficher dans l'application

Source : programme officiel de « Physique-chimie pour la santé », série ST2S,
BO spécial n°1 du 22 janvier 2019 (réforme du lycée). Thème 1 « Prévenir et sécuriser ».
Chapitre réunissant DEUX sections courtes du programme, extraites de
docs/programme-st2s-physique-chimie-sante.txt :
  - « Rayonnement infrarouge et détection (1re) », lignes 41-44 :
      · Domaine des ondes électromagnétiques.
      · Température d'un corps et rayonnement émis ; loi de Wien (λmax·T = constante).
      · Émission d'infrarouges par le corps humain ; systèmes de détection.
  - « Sécurité routière : vitesse et distance d'arrêt (1re) », lignes 46-48 :
      · Vitesse d'un corps ; énergie cinétique de translation Ec = ½mv².
      · Distance de freinage, distance de réaction, distance d'arrêt.
Le .txt précise (lignes 12-15) que la répartition 1re/Tale suit la progression usuelle et
reste À CONFIRMER au PDF officiel (https://www.education.gouv.fr/media/25040/download).
Source à confronter au PDF officiel via WebFetch avant publication.
Rédaction originale à partir du programme. Aucun emprunt à un manuel.

⚠️ CHOIX À CONFRONTER AU PDF OFFICIEL / AU RELECTEUR :
- niveau YAML = "premiere-techno" (imposé par la consigne de production, cohérent avec le
  chapitre ST2S risques-electriques). Les chapitres securite-chimique-acide-base et
  oxydoreduction-desinfectants portent niveau: "premiere" : incohérence à harmoniser sur
  tout le parcours pc-sante-st2s avant publication.
- Constante de Wien : valeur exacte 2,898×10⁻³ m·K, arrondie à 2,9×10⁻³ m·K comme demandé.
  T(K) = θ(°C) + 273 (arrondi ; 273,15 rigoureux). Vérifier l'arrondi attendu au programme.
- Loi de Wien : le programme la cite comme relation « λmax·T = constante » à utiliser ;
  vérifier si l'expression est fournie le jour de l'épreuve ou exigible de mémoire.
- Bornes du spectre EM : ordres de grandeur usuels (visible 0,4–0,8 µm). Le programme
  n'exige probablement pas de mémoriser les bornes précises de chaque domaine : vérifier
  le niveau d'exigence (savoir situer l'IR par rapport au visible suffit sans doute).
- Corps humain : θ = 37 °C → T = 310 K → λmax ≈ 9,4 µm (IR moyen). Valeur robuste.
- Sécurité routière : t_r = 1 s est une valeur de référence standard (temps de réaction).
  Les valeurs chiffrées de d_f (route sèche) dépendent de la décélération (a ≈ 7–8 m·s⁻²) :
  présentées comme ordres de grandeur cohérents (d_f ∝ v²), NON comme valeurs officielles.
  Le message exigible est la PROPORTIONNALITÉ (d_r ∝ v, d_f ∝ v²), à confirmer au relecteur.
- Le lien travail de la force de freinage / Ec (F·d_f = ½mv²) est utilisé pour justifier
  d_f ∝ v². Vérifier que ce niveau de justification énergétique est attendu en ST2S (le
  programme peut se contenter du constat qualitatif). Le théorème de l'énergie cinétique
  n'est pas nommé dans la fiche pour rester au niveau ST2S.

Statut : brouillon, non relu.
-->
